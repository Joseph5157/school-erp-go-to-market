/**
 * Read-only protections. Pure rules, unit-tested offline, then wired into the
 * browser by `src/fixtures.ts`.
 *
 * Two layers:
 * 1. Method rule: only GET/HEAD/OPTIONS leave the browser. The single
 *    exception is the sign-in POST during the `auth` setup phase.
 * 2. Path rule: navigations to pages that exist to change data (forms,
 *    submit/finalize/publish actions, autosave, the editable teacher register),
 *    to downloads that carry personal data (PDF, CSV, XLSX) and to the Django
 *    admin are refused even as GET, so a scene can never open a write form.
 *
 * Paths come from School ERP `config/urls.py`, `core/urls.py` and
 * `core/portal_urls.py` (read-only inspection of `school-erp` main c6284df).
 */

export type Phase = 'auth' | 'scene';

export const LOGIN_PATH = '/accounts/login/';

const SAFE_METHODS = new Set(['GET', 'HEAD', 'OPTIONS']);

/**
 * Same-origin paths that expose personal data or write on GET-like endpoints.
 * Blocked for EVERY request, navigation or background (fetch, XHR, iframe,
 * prefetch, image), so no request type can reach them.
 */
export const SENSITIVE_PATH_PATTERNS: readonly RegExp[] = [
  /^\/admin(\/|$)/, // Django admin
  /^\/notifications\/to-send\/?$/, // message queue: guardian contact details
  /\/autosave\/?$/, // teacher register autosave
  /\/pdf\/?$/, // documents carry personal data; open manually if needed
  /\.(csv|xlsx|pdf)$/,
];

export function isSensitivePath(pathname: string): boolean {
  return SENSITIVE_PATH_PATTERNS.some((re) => re.test(pathname));
}

/**
 * Same-origin pages that only belong to write flows. Refused as navigations,
 * in addition to every sensitive path above. Matched against the pathname.
 */
export const BLOCKED_PATH_PATTERNS: readonly RegExp[] = [
  ...SENSITIVE_PATH_PATTERNS,
  /\/(create|new|edit|delete|remove|upload|add|assign|copy|change|correct)\/?$/,
  /\/(submit|finalize|commit|discard|withdraw|prepare|decision|decide\/[^/]+|grant-access|revoke|review)\/?$/,
  /\/(reset-password|username|deactivate|reactivate|enroll|consent|status|admission-number|roll-number|end)\/?$/,
  /\/account\/link\/?$/,
  /\/(sent|dismiss)\/?$/, // message-queue outcome actions
  /\/capture\/?$/, // office attendance capture
  /^\/my\/attendance\/\d+\/?$/, // teacher register entry page (editable)
  /^\/my\/assessments\/\d+\/marks\/?$/, // marks entry
  /^\/terms\/\d+\/(publication|remarks)\/?$/, // publish preview and remark entry forms
  /^\/school\/(logo\/upload|logo\/remove|edit)\/?/,
  /^\/accounts\/(logout|password)\//,
];

export function isBlockedPath(pathname: string): boolean {
  return BLOCKED_PATH_PATTERNS.some((re) => re.test(pathname));
}

export interface RequestDecision {
  allowed: boolean;
  reason?: string;
}

/**
 * Decide whether the browser may send a request.
 * `origin` is the configured target origin; other origins (fonts, CDNs) may
 * only be read.
 */
export function decideRequest(
  method: string,
  rawUrl: string,
  origin: string,
  phase: Phase,
  isNavigation: boolean,
): RequestDecision {
  const m = method.toUpperCase();
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return { allowed: false, reason: 'unparseable URL' };
  }
  if (url.protocol === 'data:' || url.protocol === 'blob:') return { allowed: true };
  const sameOrigin = url.origin === origin;

  if (!SAFE_METHODS.has(m)) {
    if (phase === 'auth' && m === 'POST' && sameOrigin && url.pathname === LOGIN_PATH) {
      return { allowed: true };
    }
    return { allowed: false, reason: `${m} blocked (read-only)` };
  }
  if (sameOrigin && isSensitivePath(url.pathname)) {
    return { allowed: false, reason: 'sensitive endpoint blocked' };
  }
  if (sameOrigin && isNavigation && isBlockedPath(url.pathname)) {
    return { allowed: false, reason: 'write page blocked' };
  }
  return { allowed: true };
}

/**
 * Text that is safe to put in a test log: method plus path only. Query
 * strings are dropped because filters may contain names.
 */
export function redactForLog(method: string, rawUrl: string): string {
  try {
    return `${method.toUpperCase()} ${new URL(rawUrl).pathname}`;
  } catch {
    return `${method.toUpperCase()} <unparseable>`;
  }
}
