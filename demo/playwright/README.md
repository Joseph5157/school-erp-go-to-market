# School ERP demo automation (Playwright)

**Status: Draft — GTM-DEMO-AUTO-01 foundation.** Read-only automation for Administrator, Teacher and Guardian walkthroughs on **fictional data only**. Nothing here has been run against staging or any deployed environment yet. Every scene is marked `liveVerified: false` until an authorised rehearsal proves it.

This folder is demo tooling, not School ERP application code. Routes and selectors were taken by reading the `school-erp` source (read-only, `main` at `c6284df`); the application was not changed.

## What is here

```
demo/playwright/
├── playwright.config.ts       projects: offline, auth-<role>, admin, teacher, guardian
├── .env.example               every variable, all blank
├── src/
│   ├── config.ts              env rules: target URL, live-run gate, capture gate
│   ├── safety.ts              read-only request guard rules
│   ├── routes.ts              source-verified routes, titles, nav landmarks
│   ├── scenes.ts              scene catalogue + 8- and 30-minute sequences
│   ├── fixtures.ts            guard fixture, live gate, demoScene()
│   ├── print-scenes.ts        `npm run scenes`
│   └── navigation/            common, admin, teacher, guardian helpers
├── fixtures/fictional.ts      invented values for offline tests
└── tests/
    ├── offline/               config, safety, scenes, hygiene (no browser)
    └── live/                  auth.setup + admin/teacher/guardian scenes
```

Pinned: `@playwright/test` 1.64.1, `typescript` 6.0.3, `@types/node` 22.20.5, with `package-lock.json` committed. No other dependencies.

## Installation

Node 22 or later.

```sh
cd demo/playwright
npm ci
npm run check          # typecheck + offline tests; no browser needed
```

For live runs only (not needed for `npm run check`):

```sh
npx playwright install chromium
```

## Local execution

| Command | What it does | Browser / network |
|---|---|---|
| `npm run check` | Typecheck and offline tests | None |
| `npm test` | Offline tests only (what CI runs) | None |
| `npm run scenes` | Print scenes, statuses, fallbacks and both sequences | None |
| `npm run demo:auth` | Sign in each role and save sessions | Live, gated |
| `npm run demo:exec8` | Scenes in the 8-minute executive sequence | Live, gated |
| `npm run demo:live30` | Scenes in the 30-minute sequence (read-only parts) | Live, gated |
| `npm run demo:all` | Every scene | Live, gated |

Single role or scene: `npx playwright test --project=teacher`, `npx playwright test --project=admin --grep @A4`.

## Required environment variables

Copy `.env.example` to `.env` in this folder (Git-ignored), or export the variables in your shell. `.env` is loaded automatically.

| Variable | Rule |
|---|---|
| `DEMO_BASE_URL` | Origin only (no path, query or credentials). `https` unless localhost. The staging URL is never written in this repository. |
| `DEMO_TARGET_KIND` | `local` (localhost only), `fictional-sandbox` or `staging` |
| `DEMO_LIVE_AUTHORIZED_ON` | Today's date, `YYYY-MM-DD`. Expires at midnight. |
| `DEMO_LIVE_AUTHORIZED_BY` | Staging only: the role of the person who authorised the run |
| `DEMO_ADMIN_USERNAME` / `_PASSWORD` | Fictional Administrator account |
| `DEMO_TEACHER_USERNAME` / `_PASSWORD` | Fictional Teacher account with a current assignment |
| `DEMO_GUARDIAN_USERNAME` / `_PASSWORD` | Fictional Guardian with current portal access to a fictional child |
| `DEMO_CAPTURE`, `DEMO_CAPTURE_AUTHORIZED_ON`, `DEMO_DATA_IS_FICTIONAL` | Screenshot gate; see below |

## Authentication setup

- Three separate identities, three separate browser contexts. Each role project depends on its own `auth-<role>` setup, which signs in through the normal login form and saves `.auth/<role>.json`.
- `.auth/`, `.env`, `test-results/`, `playwright-report/` and `storage-state*.json` are Git-ignored (root and local `.gitignore`); an offline test fails if those entries disappear.
- Credentials are read from the environment only and never printed. Problems name the variable, never its value; an offline test proves it.
- If an account must change its password first, setup stops and asks you to do it manually. Password change is never automated.
- Sessions are refreshed on every live run. Delete `.auth/` after a rehearsal.

## Read-only protections

1. **Live gate** (`src/config.ts`, `src/fixtures.ts`): live projects refuse to start, before any browser opens, unless target kind, URL and today's authorisation stamp are all valid. Live projects always refuse when `CI` is set.
2. **Request guard** (`src/safety.ts`): every browser request passes through it.
   - Only `GET`, `HEAD` and `OPTIONS` are sent. The one exception is the sign-in `POST` to `/accounts/login/` during auth setup.
   - Sensitive endpoints are refused for **every** request type (navigation, fetch/XHR, iframe, prefetch): the message queue `/notifications/to-send/` (guardian contact details), the teacher register autosave, Django admin, and PDF/CSV/XLSX downloads.
   - Navigations to write pages are refused even as `GET`: create/edit/delete forms, submit, finalize, publish preview, commit/discard, prepare/withdraw, grant/revoke, the editable teacher register `/my/attendance/<id>/`, marks entry, logout and password pages.
   - Any refused request fails the test and is listed as `METHOD /path` only (no query strings).
   - Service Workers are blocked in every live project (`serviceWorkers: 'block'`), because requests a Service Worker answers would bypass `context.route()` interception. An offline test checks this setting.
3. **Spec rules** (offline test): live specs may not call `fill`, `check`, `selectOption`, `setInputFiles`, `press`, API write requests or `screenshot`, and may not contain a URL.
4. Native dialogs are dismissed automatically; downloads are disabled.

## Scenes and scene selection

Statuses:

- **implemented**: read-only automation; route, page title and nav landmark verified in source; no record has to exist.
- **provisional**: read-only automation that needs a suitable fictional record. It finds one by following links the page offers (never a guessed id) and **skips with the fallback** when none exists.
- **unavailable**: deliberately not automated (writes, sends, personal-data downloads, or no generic page). Listed in reports as skipped, with the fallback.

| ID | Role | Scene | Status |
|---|---|---|---|
| A1 | Admin | Overview | implemented |
| A2 | Admin | Academic Years, Classes/Grades, Subjects | implemented |
| A3 | Admin | Applicants list | implemented |
| A4 | Admin | First student profile from Students | provisional |
| A5 | Admin | Attendance registers and reports | implemented |
| A6 | Admin | Assessments (year from sidebar), first assessment, Report card PDFs, Stale publications | provisional |
| A7 | Admin | Announcements and Timetable | implemented |
| A8 | Admin | Documents index | implemented |
| A9 | Admin | Import history | implemented |
| T1 | Teacher | My day | implemented |
| T2 | Teacher | My students | implemented |
| T3 | Teacher | Attendance history → section → past register (read-only view) | provisional |
| T4 | Teacher | My assessments → first Gradebook | provisional |
| G1 | Guardian | Portal home | implemented |
| G2 | Guardian | First authorised child overview | provisional |
| G3 | Guardian | Child attendance tab | provisional |
| G4 | Guardian | Report cards → first published report card | provisional |
| G5 | Guardian | Notices | implemented |
| U1–U7 | — | Record register, enter marks, finalise/publish, message queue/WhatsApp, Excel preview, PDF download, record history | unavailable |

Even "implemented" scenes are unverified live: permissions, data and rendering on the target can still differ. Run `npm run scenes` for evidence and fallback text per scene.

**Sequences** (`src/scenes.ts`) map each time slot of [the 8-minute script](../presenter-scripts/executive-demo-8-minute.md) and [the 30-minute script](../presenter-scripts/live-demo-30-minute.md) to scenes; an offline test checks every slot label appears verbatim in its script. Tags: `@exec8`, `@live30`, `@admin|@teacher|@guardian`, `@implemented|@provisional|@unavailable`, and the scene id (`@T3`).

The automation does not assume "Aarav Demo", "Grade 6 A", "Unit Test 1" or any particular record exists.

## Failure handling

| Symptom | Meaning | Action |
|---|---|---|
| `Live run not authorised` | A gate rule failed (listed) | Fix the listed variables; get authorisation if needed |
| `did not leave the login page` | Wrong credentials, lockout or throttling | Check the vault entry; do not retry repeatedly (lockouts) |
| `must change its password first` | First-login password change pending | Do it manually, then rerun `demo:auth` |
| `Redirected to sign-in` | Session expired or role lacks access | Rerun `demo:auth`; check the account's role |
| Guard lists refused requests | The page tried to write or open a blocked page | Stop. Report the path privately; do not loosen the guard to pass |
| Scene **skipped** with "Fallback: …" | Provisional scene found no suitable record | Use the fallback in the meeting; fix demo data only via an authorised task |
| Title or nav assertion fails | Page changed or differs on the target | Mark the scene provisional, compare with the app source, update routes in a PR |

No retries are configured: a flaky live step should be investigated, not repeated.

## Screenshot restrictions

- Screenshots, traces and video are **off** by default. Reporter is `list` only (no HTML report).
- Screenshots on failure can be enabled only when **all** hold: target kind is `local` or `fictional-sandbox`; `DEMO_CAPTURE=on`; `DEMO_CAPTURE_AUTHORIZED_ON` is today; `DEMO_DATA_IS_FICTIONAL=yes`; and the live gate passes.
- **Staging is never captured in this stage**, whatever the flags say. Changing that needs a reviewed code change.
- Output goes to Git-ignored `test-results/`. Never attach it to PRs, issues or CI artifacts; delete it after review.

## Authorising a future staging rehearsal

1. The owner gives explicit, dated approval for a named rehearsal (scope: which sequence, which roles).
2. Confirm the readiness checklist ([pre-demo-readiness.md](../demo-checklists/pre-demo-readiness.md)) sections 2–3: fictional records, controlled contacts, three accounts.
3. On the operator's machine only: fill `.env` from the private vault, `DEMO_TARGET_KIND=staging`, `DEMO_LIVE_AUTHORIZED_ON=<today>`, `DEMO_LIVE_AUTHORIZED_BY=<role>`. Leave capture off.
4. `npm run demo:auth`, then `npm run demo:exec8`. Record pass/skip/fail per scene in private notes, not in Git or PRs.
5. Afterwards: delete `.auth/` and `test-results/`; open a PR that changes only scene statuses (`liveVerified: true`, provisional → implemented where proven) with no URLs, names or screenshots.

## Not in this stage

Live rehearsal, write flows, screenshots of staging, video, CI runs against any environment, and changes to School ERP.
