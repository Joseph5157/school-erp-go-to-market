/**
 * Guardian Portal helpers. `<nav aria-label="Guardian Portal">` appears twice
 * (desktop header and phone tab bar, templates/portal/_portal_nav.html); the
 * child tabs (Overview, Attendance, Report cards) render only once a child is
 * selected.
 */

import { expect, type Locator, type Page } from '@playwright/test';
import { LANDMARKS, type RouteKey } from '../routes.ts';
import { expectRoute } from './common.ts';

export function portalNav(page: Page): Locator {
  return page.getByRole('navigation', { name: LANDMARKS.portalNav }).filter({ visible: true }).first();
}

export async function expectPortalTab(page: Page, label: string): Promise<void> {
  await expect(portalNav(page).getByRole('link', { name: label, exact: true })).toHaveAttribute('aria-current', 'page');
}

/** Use the portal's own tab to move between the selected child's pages. */
export async function openChildTab(page: Page, label: 'Overview' | 'Attendance' | 'Report cards', key: RouteKey): Promise<boolean> {
  const tab = portalNav(page).getByRole('link', { name: label, exact: true });
  if ((await tab.count()) === 0) return false;
  await tab.click();
  await expectRoute(page, key);
  return true;
}
