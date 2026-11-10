/**
 * Shared navigation helpers. They only open source-verified routes, refuse
 * blocked paths before the browser is asked, and never log page text.
 */

import { expect, type Locator, type Page } from '@playwright/test';
import { LOGIN_PATH, isBlockedPath } from '../safety.ts';
import { ROUTES, routePattern, type RouteKey } from '../routes.ts';

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Accessible-name matcher for a nav link that may carry a count badge. */
export function navLinkName(label: string): RegExp {
  return new RegExp(`^${escapeRegExp(label)}(\\s+\\d+.*)?$`);
}

/** Open a route that has no parameters. */
export async function openRoute(page: Page, key: RouteKey): Promise<void> {
  const route = ROUTES[key];
  if (route.path.includes(':')) {
    throw new Error(`Route ${key} needs an id; discover it with followFirstLink.`);
  }
  await openPath(page, route.path);
  await expectRoute(page, key);
}

/** Open a same-origin path after the read-only check. */
export async function openPath(page: Page, path: string): Promise<void> {
  if (!path.startsWith('/')) throw new Error('openPath expects a same-origin path.');
  if (isBlockedPath(new URL(path, 'http://x').pathname)) {
    throw new Error(`Refusing to open a write or sensitive page: ${new URL(path, 'http://x').pathname}`);
  }
  await page.goto(path);
}

/** Assert the browser is on `key` (path pattern and title) and still signed in. */
export async function expectRoute(page: Page, key: RouteKey): Promise<void> {
  const route = ROUTES[key];
  const pattern = routePattern(route.path);
  const pathname = () => new URL(page.url()).pathname;
  // Navigation after a click is asynchronous: wait until we land on the
  // expected page or on sign-in, then report which.
  await expect
    .poll(() => pathname() === LOGIN_PATH || pattern.test(pathname()), {
      message: `expected to reach ${key} (${route.path})`,
    })
    .toBe(true);
  if (pathname() === LOGIN_PATH) {
    throw new Error('Redirected to sign-in: the saved session expired or lacks access. Re-run `npm run demo:auth`.');
  }
  if (route.titleMatch === 'exact') {
    await expect(page).toHaveTitle(route.title);
  } else if (route.titleMatch === 'prefix') {
    await expect(page).toHaveTitle(new RegExp(`^${escapeRegExp(route.title)}`));
  }
}

/**
 * Click the first visible link inside `scope` whose path matches `key`.
 * Returns false (without navigating) when no such link exists, so a
 * provisional scene can fall back instead of guessing an id.
 */
export async function followFirstLink(page: Page, scope: Locator, key: RouteKey): Promise<boolean> {
  const pattern = routePattern(ROUTES[key].path);
  const hrefs = await scope
    .locator('a[href]')
    .filter({ visible: true })
    .evaluateAll((els) => els.map((el) => el.getAttribute('href') ?? ''));
  const href = hrefs.find((h) => {
    try {
      return pattern.test(new URL(h, 'http://x').pathname);
    } catch {
      return false;
    }
  });
  if (!href) return false;
  if (isBlockedPath(new URL(href, 'http://x').pathname)) return false;
  await scope.locator(`a[href="${href}"]`).filter({ visible: true }).first().click();
  await expectRoute(page, key);
  return true;
}

/** The page's `<main>` landmark (present in both shells). */
export function main(page: Page): Locator {
  return page.locator('main');
}
