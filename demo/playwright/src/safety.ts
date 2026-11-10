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
 * Same-origin path segments that only belong to write flows or sensitive
 * downloads. Matched against the URL pathname.
 */
export const BLOCKED_PATH_PATTERNS: readonly RegExp[] = [
  /^\/admin(\/|$)/, // Django admin
  /\/(create|new|edit|delete|remove|upload|add|assign|copy|change|correct)\/?$/,
  /\/(submit|finalize|commit|discard|withdraw|prepare|decision|decide\/[^/]+|grant-access|revoke|review)\/?$/,
  /\/(reset-password|username|deactivate|reactivate|enroll|consent|status|admission-number|roll-number|end)\/?$/,
  /\/account\/link\/?$/,
  /\/(sent|dismiss)\/?$/, // message-queue outcome actions
  /\/capture\/?$/, // office attendance capture
  /\/autosave\/?$/, // teacher register autosave
  /^\/my\/attendance\/\d+\/?$/, // teacher register entry page (editable)
  /^\/my\/assessments\/\d+\/marks\/?$/, // marks entry
  /^\/terms\/\d+\/(publication|remarks)\/?$/, // publish preview and remark entry forms
  /^\/school\/(logo\/upload|logo\/remove|edit)\/?/,
  /^\/accounts\/(logout|password)\//,
  /^\/notifications\/to-send\/?$/, // shows guardian contact details: kept off screen
  /\/pdf\/?$/, // documents carry personal data; open manually if needed
  /\.(csv|xlsx|pdf)$/,
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
  if (sameOrigin && isNavigation && isBlockedPath(url.pathname)) {
    return { allowed: false, reason: 'write or sensitive page blocked' };
  }
  if (sameOrigin && !isNavigation && /\/(autosave|pdf)\/?$|\.(csv|xlsx|pdf)$/.test(url.pathname)) {
    return { allowed: false, reason: 'background write or download blocked' };
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
