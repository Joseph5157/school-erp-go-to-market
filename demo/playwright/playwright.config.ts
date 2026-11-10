/**
 * GTM-DEMO-AUTO-01 Playwright configuration.
 *
 * - `offline`: framework tests with fictional fixtures. No browser, no network.
 *   This is the only project CI runs (`npm test`).
 * - `auth-<role>` and `admin` / `teacher` / `guardian`: live, read-only demo
 *   scenes. They refuse to start unless the live-run rules in src/config.ts
 *   pass, and never run in CI.
 *
 * Screenshots, traces and video are off. Screenshots on failure can be turned
 * on only for an authorised local or fictional-sandbox target (never staging).
 */

import { existsSync } from 'node:fs';
import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';
import { ROLES, authStatePath, loadConfig } from './src/config.ts';

const envFile = path.join(__dirname, '.env');
if (existsSync(envFile)) process.loadEnvFile(envFile);

const demo = loadConfig(process.env);

const liveUse = {
  ...devices['Desktop Chrome'],
  baseURL: demo.baseURL,
  viewport: { width: 1440, height: 900 },
  locale: 'en-IN',
  timezoneId: 'Asia/Kolkata',
  screenshot: demo.captureAllowed ? ('only-on-failure' as const) : ('off' as const),
  trace: 'off' as const,
  video: 'off' as const,
  acceptDownloads: false,
  // context.route() cannot see requests a Service Worker answers, so the
  // read-only guard is only reliable with Service Workers blocked.
  serviceWorkers: 'block' as const,
};

export default defineConfig({
  outputDir: 'test-results',
  forbidOnly: !!process.env.CI,
  retries: 0,
  // One worker: scenes run in presenter order and stay gentle on the target.
  workers: 1,
  fullyParallel: false,
  // `list` only: no HTML report, so nothing from a live page is written to disk.
  reporter: [['list']],
  timeout: 30_000,
  expect: { timeout: 7_500 },
  projects: [
    { name: 'offline', testDir: './tests/offline' },
    ...ROLES.map((role) => ({
      name: `auth-${role}`,
      testDir: './tests/live',
      testMatch: /auth\.setup\.ts$/,
      grep: new RegExp(`sign in: ${role}$`),
      use: liveUse,
    })),
    ...ROLES.map((role) => ({
      name: role,
      testDir: './tests/live',
      testMatch: new RegExp(`${role}\\.spec\\.ts$`),
      dependencies: [`auth-${role}`],
      use: { ...liveUse, storageState: authStatePath(role) },
    })),
  ],
});
