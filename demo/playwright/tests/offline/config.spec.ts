/** Offline: environment rules, live-run gate and capture gate (fictional env only). */

import { test, expect } from '@playwright/test';
import { checkBaseURL, credentialProblems, loadConfig, localDateStamp } from '../../src/config.ts';
import {
  FICTIONAL_PASSWORD,
  FIXED_NOW,
  FIXED_TODAY,
  FIXED_YESTERDAY,
  localEnv,
  sandboxEnv,
  stagingEnv,
} from '../../fixtures/fictional.ts';

test.describe('live-run gate', () => {
  test('empty environment blocks live runs and names each missing variable', () => {
    const c = loadConfig({}, FIXED_NOW);
    expect(c.liveAllowed).toBe(false);
    const text = c.liveProblems.join(' ');
    expect(text).toContain('DEMO_TARGET_KIND');
    expect(text).toContain('DEMO_BASE_URL');
    expect(text).toContain('DEMO_LIVE_AUTHORIZED_ON');
  });

  test('complete local environment authorised today is allowed', () => {
    const c = loadConfig(localEnv(), FIXED_NOW);
    expect(c.liveProblems).toEqual([]);
    expect(c.liveAllowed).toBe(true);
    expect(c.baseURL).toBe('http://localhost:8000');
  });

  test("authorisation from a previous day has expired", () => {
    const c = loadConfig(localEnv({ DEMO_LIVE_AUTHORIZED_ON: FIXED_YESTERDAY }), FIXED_NOW);
    expect(c.liveAllowed).toBe(false);
    expect(c.liveProblems.join(' ')).toContain('expired');
  });

  test('staging needs DEMO_LIVE_AUTHORIZED_BY as well as the date', () => {
    expect(loadConfig(stagingEnv({ DEMO_LIVE_AUTHORIZED_BY: '' }), FIXED_NOW).liveAllowed).toBe(false);
    expect(loadConfig(stagingEnv(), FIXED_NOW).liveAllowed).toBe(true);
  });

  test('unknown target kind is rejected', () => {
    const c = loadConfig(localEnv({ DEMO_TARGET_KIND: 'production' }), FIXED_NOW);
    expect(c.liveAllowed).toBe(false);
  });

  test('local date stamp uses the local calendar date', () => {
    expect(localDateStamp(FIXED_NOW)).toBe(FIXED_TODAY);
  });
});

test.describe('target URL rules', () => {
  const cases: Array<[string, string | undefined, string]> = [
    ['plain http on a remote host', 'http://sandbox.example.test', 'https'],
    ['embedded credentials', 'https://user:pw@sandbox.example.test', 'username or password'],
    ['a path', 'https://sandbox.example.test/overview/', 'origin only'],
    ['a query string', 'https://sandbox.example.test/?x=1', 'origin only'],
    ['not a URL', 'sandbox.example.test', 'valid absolute URL'],
    ['a non-web scheme', 'ftp://sandbox.example.test', 'http or https'],
  ];
  for (const [name, url, expected] of cases) {
    test(`rejects ${name}`, () => {
      expect(checkBaseURL(url, 'fictional-sandbox').problem).toContain(expected);
    });
  }

  test('local kind must point at localhost, and localhost must be local kind', () => {
    expect(checkBaseURL('https://sandbox.example.test', 'local').problem).toContain('localhost');
    expect(checkBaseURL('http://localhost:8000', 'staging').problem).toContain('DEMO_TARGET_KIND=local');
  });

  test('accepts an https origin with or without trailing slash', () => {
    expect(checkBaseURL('https://sandbox.example.test/', 'fictional-sandbox').origin).toBe('https://sandbox.example.test');
  });
});

test.describe('capture gate', () => {
  const captureFlags = {
    DEMO_CAPTURE: 'on',
    DEMO_CAPTURE_AUTHORIZED_ON: FIXED_TODAY,
    DEMO_DATA_IS_FICTIONAL: 'yes',
  };

  test('capture is off by default', () => {
    expect(loadConfig(sandboxEnv(), FIXED_NOW).captureAllowed).toBe(false);
  });

  test('capture is never allowed for staging, even with every flag', () => {
    const c = loadConfig(stagingEnv(captureFlags), FIXED_NOW);
    expect(c.captureAllowed).toBe(false);
    expect(c.captureProblems.join(' ')).toContain('staging');
  });

  test('capture needs fictional-data confirmation and a same-day stamp', () => {
    expect(loadConfig(sandboxEnv({ ...captureFlags, DEMO_DATA_IS_FICTIONAL: '' }), FIXED_NOW).captureAllowed).toBe(false);
    expect(loadConfig(sandboxEnv({ ...captureFlags, DEMO_CAPTURE_AUTHORIZED_ON: FIXED_YESTERDAY }), FIXED_NOW).captureAllowed).toBe(false);
    expect(loadConfig(sandboxEnv(captureFlags), FIXED_NOW).captureAllowed).toBe(true);
  });

  test('capture stays off when the live run itself is blocked', () => {
    const c = loadConfig(sandboxEnv({ ...captureFlags, DEMO_LIVE_AUTHORIZED_ON: '' }), FIXED_NOW);
    expect(c.captureAllowed).toBe(false);
  });
});

test.describe('credentials', () => {
  test('missing credentials are reported by variable name only', () => {
    const c = loadConfig(localEnv({ DEMO_TEACHER_PASSWORD: '' }), FIXED_NOW);
    expect(credentialProblems(c, 'teacher')).toEqual(['DEMO_TEACHER_PASSWORD is not set.']);
    expect(credentialProblems(c, 'admin')).toEqual([]);
  });

  test('no message ever contains a credential value', () => {
    const variants = [
      localEnv({ DEMO_BASE_URL: 'https://admin.demo:' + FICTIONAL_PASSWORD + '@sandbox.example.test' }),
      stagingEnv({ DEMO_LIVE_AUTHORIZED_ON: FIXED_YESTERDAY, DEMO_CAPTURE: 'on' }),
      localEnv({ DEMO_TARGET_KIND: 'nope' }),
    ];
    for (const env of variants) {
      const c = loadConfig(env, FIXED_NOW);
      const messages = JSON.stringify([c.liveProblems, c.captureProblems, credentialProblems(c, 'admin')]);
      expect(messages).not.toContain(FICTIONAL_PASSWORD);
    }
  });
});
