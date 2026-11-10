/**
 * Test utilities for live (browser) runs: the read-only guard fixture, the
 * live-run gate and the `demoScene` wrapper that ties a test to its catalogue
 * entry, tags and fallback.
 */

import { test as base, expect, type BrowserContext, type Page } from '@playwright/test';
import { loadConfig } from './config.ts';
import { decideRequest, redactForLog, type Phase } from './safety.ts';
import { getScene, tagsFor, type SceneId } from './scenes.ts';

export const config = loadConfig(process.env);

/** Throws unless a live run is authorised. Called before any browser work. */
export function assertLiveAllowed(): void {
  if (process.env.CI) {
    throw new Error('Live demo automation never runs in CI. Use `npm test` (offline) there.');
  }
  if (!config.liveAllowed) {
    throw new Error(
      'Live run not authorised. Fix the following, then retry:\n- ' + config.liveProblems.join('\n- '),
    );
  }
}

export interface Guard {
  /** Requests the guard refused, as "METHOD /path: reason" (no query strings). */
  violations: string[];
}

async function installGuard(context: BrowserContext, origin: string, phase: Phase, violations: string[]) {
  await context.route('**/*', async (route, request) => {
    const decision = decideRequest(
      request.method(),
      request.url(),
      origin,
      phase,
      request.isNavigationRequest(),
    );
    if (decision.allowed) return route.continue();
    violations.push(`${redactForLog(request.method(), request.url())}: ${decision.reason}`);
    return route.abort('blockedbyclient');
  });
  // Never leave a native dialog open (it would block the session).
  context.on('page', (page) => page.on('dialog', (dialog) => void dialog.dismiss()));
}

export const test = base.extend<{ phase: Phase; guard: Guard }, { liveGate: void }>({
  // Worker-scoped with no dependencies, so it runs before any browser starts.
  liveGate: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      assertLiveAllowed();
      await use();
    },
    { scope: 'worker', auto: true },
  ],
  phase: ['scene', { option: true }],
  guard: [
    async ({ context, baseURL, phase }, use) => {
      if (!baseURL) throw new Error('baseURL is missing; check DEMO_BASE_URL.');
      const violations: string[] = [];
      await installGuard(context, new URL(baseURL).origin, phase, violations);
      await use({ violations });
      expect(violations, 'The read-only guard refused requests (see list)').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };

/**
 * Declare a scene test. The title, tags and skip reason come from the
 * catalogue so the report always says which presenter step it serves and what
 * the fallback is.
 */
export function demoScene(
  id: SceneId,
  body: (args: { page: Page; guard: Guard }) => Promise<void>,
): void {
  const scene = getScene(id);
  const details = { tag: tagsFor(scene), annotation: [{ type: 'fallback', description: scene.fallback }] };
  test(`${scene.id} ${scene.title}`, details, async ({ page, guard }) => {
    test.skip(scene.status === 'unavailable', `Not automated: ${scene.reason ?? ''} Fallback: ${scene.fallback}`);
    await body({ page, guard });
  });
}

/** Skip the rest of a provisional scene when no suitable record exists. */
export function skipWithFallback(id: SceneId, what: string): never {
  const scene = getScene(id);
  test.skip(true, `${what} Fallback: ${scene.fallback}`);
  throw new Error('unreachable');
}
