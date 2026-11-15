/**
 * Environment-driven configuration for the demo automation.
 *
 * Pure functions only: `loadConfig` takes an env map and a date so the offline
 * tests can exercise every rule with fictional values. Nothing here puts
 * credential values into logs or error messages.
 */

export const ROLES = ['admin', 'teacher', 'guardian'] as const;
export type Role = (typeof ROLES)[number];

/**
 * - `local`: a Everclass ERP dev server on this machine (localhost only).
 * - `fictional-sandbox`: a separately authorised environment holding fictional data only.
 * - `staging`: the shared staging deployment. Never captured in this stage.
 */
export const TARGET_KINDS = ['local', 'fictional-sandbox', 'staging'] as const;
export type TargetKind = (typeof TARGET_KINDS)[number];

export interface RoleCredentials {
  username: string | undefined;
  password: string | undefined;
}

export interface DemoConfig {
  baseURL: string | undefined;
  targetKind: TargetKind | undefined;
  /** True only when every live-run rule passes (see `liveProblems`). */
  liveAllowed: boolean;
  /** Reasons a live run is blocked. Never contains credential values. */
  liveProblems: string[];
  /** Screenshots on failure. Off unless explicitly authorised for a non-staging target. */
  captureAllowed: boolean;
  captureProblems: string[];
  credentials: Record<Role, RoleCredentials>;
}

export type Env = Record<string, string | undefined>;

export const ENV_PREFIX: Record<Role, string> = {
  admin: 'DEMO_ADMIN',
  teacher: 'DEMO_TEACHER',
  guardian: 'DEMO_GUARDIAN',
};

const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);

/** Calendar date (YYYY-MM-DD) in the operator's local timezone. */
export function localDateStamp(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** Validates DEMO_BASE_URL. Returns the normalised origin or a problem. */
export function checkBaseURL(
  raw: string | undefined,
  kind: TargetKind | undefined,
): { origin?: string; problem?: string } {
  if (!raw) return { problem: 'DEMO_BASE_URL is not set.' };
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    return { problem: 'DEMO_BASE_URL is not a valid absolute URL.' };
  }
  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    return { problem: 'DEMO_BASE_URL must use http or https.' };
  }
  if (url.username || url.password) {
    return { problem: 'DEMO_BASE_URL must not contain a username or password.' };
  }
  if (url.search || url.hash || url.pathname !== '/') {
    return { problem: 'DEMO_BASE_URL must be an origin only (no path, query or fragment).' };
  }
  const isLocal = LOCAL_HOSTS.has(url.hostname);
  if (kind === 'local' && !isLocal) {
    return { problem: 'DEMO_TARGET_KIND=local requires a localhost DEMO_BASE_URL.' };
  }
  if (kind !== undefined && kind !== 'local' && isLocal) {
    return { problem: 'A localhost DEMO_BASE_URL requires DEMO_TARGET_KIND=local.' };
  }
  if (!isLocal && url.protocol !== 'https:') {
    return { problem: 'Non-local targets must use https.' };
  }
  return { origin: url.origin };
}

function parseKind(raw: string | undefined): TargetKind | undefined {
  return (TARGET_KINDS as readonly string[]).includes(raw ?? '')
    ? (raw as TargetKind)
    : undefined;
}

export function loadConfig(env: Env, now: Date = new Date()): DemoConfig {
  const today = localDateStamp(now);
  const liveProblems: string[] = [];
  const captureProblems: string[] = [];

  const kind = parseKind(env.DEMO_TARGET_KIND);
  if (!env.DEMO_TARGET_KIND) {
    liveProblems.push('DEMO_TARGET_KIND is not set (local | fictional-sandbox | staging).');
  } else if (!kind) {
    liveProblems.push('DEMO_TARGET_KIND must be one of: local, fictional-sandbox, staging.');
  }

  const base = checkBaseURL(env.DEMO_BASE_URL, kind);
  if (base.problem) liveProblems.push(base.problem);

  // A live run needs a same-day, explicit authorisation stamp. It expires at
  // midnight so an old .env file cannot silently authorise a later run.
  const authorisedOn = env.DEMO_LIVE_AUTHORIZED_ON;
  if (!authorisedOn) {
    liveProblems.push("DEMO_LIVE_AUTHORIZED_ON is not set (today's date, YYYY-MM-DD, once authorised).");
  } else if (authorisedOn !== today) {
    liveProblems.push("DEMO_LIVE_AUTHORIZED_ON is not today's date; the live authorisation has expired.");
  }
  if (kind === 'staging' && !env.DEMO_LIVE_AUTHORIZED_BY) {
    liveProblems.push('Staging runs also need DEMO_LIVE_AUTHORIZED_BY (role of the person who authorised it).');
  }

  const credentials = Object.fromEntries(
    ROLES.map((role) => [
      role,
      {
        username: env[`${ENV_PREFIX[role]}_USERNAME`] || undefined,
        password: env[`${ENV_PREFIX[role]}_PASSWORD`] || undefined,
      },
    ]),
  ) as Record<Role, RoleCredentials>;

  // Capture means screenshots on failure, nothing more. Staging is never
  // captured in this stage, whatever the flags say; enabling it needs a
  // reviewed code change.
  const wantsCapture = env.DEMO_CAPTURE === 'on';
  if (wantsCapture) {
    if (kind === 'staging') {
      captureProblems.push('Capture is disabled for staging in GTM-DEMO-AUTO-01.');
    }
    if (env.DEMO_CAPTURE_AUTHORIZED_ON !== today) {
      captureProblems.push("DEMO_CAPTURE_AUTHORIZED_ON must be today's date to enable capture.");
    }
    if (env.DEMO_DATA_IS_FICTIONAL !== 'yes') {
      captureProblems.push('DEMO_DATA_IS_FICTIONAL=yes is required to enable capture.');
    }
  }

  const liveAllowed = liveProblems.length === 0;
  return {
    baseURL: base.origin,
    targetKind: kind,
    liveAllowed,
    liveProblems,
    captureAllowed: wantsCapture && liveAllowed && captureProblems.length === 0,
    captureProblems,
    credentials,
  };
}

/** Problems that block signing in as `role`. Names variables, never values. */
export function credentialProblems(config: DemoConfig, role: Role): string[] {
  const c = config.credentials[role];
  const problems: string[] = [];
  if (!c.username) problems.push(`${ENV_PREFIX[role]}_USERNAME is not set.`);
  if (!c.password) problems.push(`${ENV_PREFIX[role]}_PASSWORD is not set.`);
  return problems;
}

/** Authenticated browser state for a role. `.auth/` is Git-ignored. */
export function authStatePath(role: Role): string {
  return `.auth/${role}.json`;
}
