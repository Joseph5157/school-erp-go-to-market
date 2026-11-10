/**
 * FICTIONAL TEST FIXTURES — every value here is invented.
 *
 * Used only by the offline tests. No real school, person, contact, account or
 * environment is represented. Emails use the reserved `.invalid` domain and
 * hosts use reserved example names, so nothing here can reach a real target.
 */

import type { Env } from '../src/config.ts';

export const FICTIONAL_LABEL = 'Fictional — for automated tests only';

/** A fixed "today" for the offline tests (10 November 2026, local time). */
export const FIXED_NOW = new Date(2026, 10, 10, 10, 30, 0);
export const FIXED_TODAY = '2026-11-10';
export const FIXED_YESTERDAY = '2026-11-09';

/** Obviously fake credentials; also used to prove values never leak into messages. */
export const FICTIONAL_PASSWORD = 'fictional-Pa55-not-real';

export const FICTIONAL_SCHOOL = {
  label: FICTIONAL_LABEL,
  name: 'Example Demo School (fictional)',
  academicYear: '2026-27',
  term: 'Term 1',
  student: { name: 'Aarav Demo', classSection: 'Grade 6 A' },
  guardian: { name: 'Guardian Demo', email: 'guardian.demo@example.invalid' },
  teacher: { name: 'Teacher Demo', email: 'teacher.demo@example.invalid' },
} as const;

/** A complete, valid local environment. */
export function localEnv(overrides: Env = {}): Env {
  return {
    DEMO_BASE_URL: 'http://localhost:8000',
    DEMO_TARGET_KIND: 'local',
    DEMO_LIVE_AUTHORIZED_ON: FIXED_TODAY,
    DEMO_ADMIN_USERNAME: 'admin.demo',
    DEMO_ADMIN_PASSWORD: FICTIONAL_PASSWORD,
    DEMO_TEACHER_USERNAME: 'teacher.demo',
    DEMO_TEACHER_PASSWORD: FICTIONAL_PASSWORD,
    DEMO_GUARDIAN_USERNAME: 'guardian.demo',
    DEMO_GUARDIAN_PASSWORD: FICTIONAL_PASSWORD,
    ...overrides,
  };
}

/** A staging-shaped environment on a reserved example host (not the real one). */
export function stagingEnv(overrides: Env = {}): Env {
  return localEnv({
    DEMO_BASE_URL: 'https://staging.example.test',
    DEMO_TARGET_KIND: 'staging',
    DEMO_LIVE_AUTHORIZED_BY: 'product owner',
    ...overrides,
  });
}

export function sandboxEnv(overrides: Env = {}): Env {
  return localEnv({
    DEMO_BASE_URL: 'https://sandbox.example.test',
    DEMO_TARGET_KIND: 'fictional-sandbox',
    ...overrides,
  });
}

/** Origin used by the request-guard tests. */
export const ORIGIN = 'https://sandbox.example.test';

/** Fictional ids for filling route patterns. */
export const SAMPLE_IDS = {
  pk: '42',
  year: '3',
  uuid: '0b7f2c1e-5d4a-4c3b-9a8e-1f2d3c4b5a69',
} as const;
