/** Offline: the read-only request guard rules. */

import { test, expect } from '@playwright/test';
import { LOGIN_PATH, decideRequest, isBlockedPath, isSensitivePath, redactForLog } from '../../src/safety.ts';
import { ROUTES } from '../../src/routes.ts';
import { ORIGIN, SAMPLE_IDS } from '../../fixtures/fictional.ts';

function fill(path: string): string {
  return path.replace(/:pk/g, SAMPLE_IDS.pk).replace(/:year/g, SAMPLE_IDS.year).replace(/:uuid/g, SAMPLE_IDS.uuid);
}

const u = SAMPLE_IDS.uuid;

/** Write or sensitive Everclass ERP paths (from core/urls.py and core/portal_urls.py). */
const WRITE_PATHS = [
  '/admin/',
  '/students/42/enroll/',
  '/students/42/status/',
  '/students/42/guardians/add/',
  '/applicants/create/',
  '/applicants/42/decide/accept/',
  '/attendance/42/capture/',
  '/attendance/42/submit/',
  '/my/attendance/7/',
  '/my/attendance/7/autosave/',
  '/my/assessments/42/marks/',
  '/assessments/42/edit/',
  '/assessments/42/delete/',
  '/assessments/42/finalize/',
  '/results/42/correct/',
  '/terms/42/publication/',
  '/terms/42/remarks/',
  '/imports/new/',
  '/imports/42/commit/',
  '/imports/42/discard/',
  '/imports/42/problems.csv',
  '/imports/template.xlsx',
  '/announcements/new/',
  '/announcements/42/prepare/',
  '/announcements/42/withdraw/',
  '/notifications/to-send/',
  '/notifications/42/sent/',
  '/notifications/42/dismiss/',
  '/teachers/42/reset-password/',
  '/teachers/42/deactivate/',
  '/guardians/42/account/link/',
  '/guardian-access/42/revoke/',
  '/student-guardians/42/grant-access/',
  '/school/logo/upload/',
  '/school/edit/',
  '/documents/bonafide/create/',
  '/documents/42/pdf/',
  '/documents/report-cards/42/pdf/',
  `/guardian/children/${u}/report-cards/${u}/pdf/`,
  '/accounts/logout/',
  '/accounts/password/change/',
  '/timetable/slots/42/change/',
];

test.describe('method rule', () => {
  for (const method of ['POST', 'PUT', 'PATCH', 'DELETE']) {
    test(`${method} is blocked in scenes`, () => {
      expect(decideRequest(method, `${ORIGIN}/students/`, ORIGIN, 'scene', false).allowed).toBe(false);
    });
  }

  test('sign-in POST is allowed only during auth, only same-origin, only to the login path', () => {
    expect(decideRequest('POST', `${ORIGIN}${LOGIN_PATH}`, ORIGIN, 'auth', true).allowed).toBe(true);
    expect(decideRequest('POST', `${ORIGIN}${LOGIN_PATH}`, ORIGIN, 'scene', true).allowed).toBe(false);
    expect(decideRequest('POST', `https://elsewhere.example.test${LOGIN_PATH}`, ORIGIN, 'auth', true).allowed).toBe(false);
    expect(decideRequest('POST', `${ORIGIN}/accounts/password/change/`, ORIGIN, 'auth', true).allowed).toBe(false);
  });

  test('cross-origin reads (fonts, CDNs) are allowed; cross-origin writes are not', () => {
    expect(decideRequest('GET', 'https://fonts.example.test/a.woff2', ORIGIN, 'scene', false).allowed).toBe(true);
    expect(decideRequest('POST', 'https://collector.example.test/x', ORIGIN, 'scene', false).allowed).toBe(false);
  });
});

test.describe('path rule', () => {
  for (const path of WRITE_PATHS) {
    test(`blocks navigation to ${path}`, () => {
      expect(isBlockedPath(path)).toBe(true);
      expect(decideRequest('GET', `${ORIGIN}${path}`, ORIGIN, 'scene', true).allowed).toBe(false);
    });
  }

  test('every scene route is reachable (no route collides with the blocklist)', () => {
    for (const [key, route] of Object.entries(ROUTES)) {
      const path = fill(route.path);
      expect(isBlockedPath(path), `${key} ${path}`).toBe(false);
      expect(decideRequest('GET', `${ORIGIN}${path}`, ORIGIN, 'scene', true).allowed, key).toBe(true);
    }
  });

  test('sensitive endpoints are blocked for background requests too', () => {
    for (const p of ['/notifications/to-send/', '/notifications/to-send', '/admin/', '/admin/auth/user/', '/my/attendance/7/autosave/', '/documents/42/pdf/', '/imports/42/problems.csv']) {
      expect(isSensitivePath(p), p).toBe(true);
      expect(decideRequest('GET', `${ORIGIN}${p}`, ORIGIN, 'scene', false).allowed, `background ${p}`).toBe(false);
      expect(decideRequest('HEAD', `${ORIGIN}${p}?x=1`, ORIGIN, 'scene', false).allowed, `HEAD ${p}`).toBe(false);
      expect(decideRequest('GET', `${ORIGIN}${p}`, ORIGIN, 'auth', false).allowed, `auth ${p}`).toBe(false);
    }
  });

  test('write pages stay navigation-only blocks; ordinary pages stay open', () => {
    // A background GET to a write form is harmless and not refused; opening it is.
    expect(decideRequest('GET', `${ORIGIN}/students/42/enroll/`, ORIGIN, 'scene', true).allowed).toBe(false);
    expect(decideRequest('GET', `${ORIGIN}/students/42/enroll/`, ORIGIN, 'scene', false).allowed).toBe(true);
    // Similar-looking but distinct paths are not caught.
    expect(isSensitivePath('/notifications/')).toBe(false);
    expect(isSensitivePath('/announcements/')).toBe(false);
    expect(isSensitivePath('/administration/')).toBe(false);
  });

  test('every sensitive pattern is also a navigation block', () => {
    for (const p of ['/notifications/to-send/', '/admin/', '/documents/42/pdf/']) {
      expect(isBlockedPath(p), p).toBe(true);
    }
  });

  test('background autosave and downloads are blocked even when not navigations', () => {
    expect(decideRequest('GET', `${ORIGIN}/my/attendance/7/autosave/`, ORIGIN, 'scene', false).allowed).toBe(false);
    expect(decideRequest('GET', `${ORIGIN}/documents/42/pdf/`, ORIGIN, 'scene', false).allowed).toBe(false);
    expect(decideRequest('GET', `${ORIGIN}/static/css/erp.css`, ORIGIN, 'scene', false).allowed).toBe(true);
  });

  test('teacher attendance history is not mistaken for the editable register', () => {
    expect(isBlockedPath('/my/attendance/history/')).toBe(false);
    expect(isBlockedPath('/my/attendance/history/42/')).toBe(false);
    expect(isBlockedPath('/my/attendance/registers/42/')).toBe(false);
  });
});

test('log redaction keeps method and path, drops query strings', () => {
  expect(redactForLog('post', `${ORIGIN}/students/?q=Aarav+Demo`)).toBe('POST /students/');
  expect(redactForLog('get', 'not a url')).toBe('GET <unparseable>');
});
