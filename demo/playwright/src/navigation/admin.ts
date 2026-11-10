/**
 * Administrator helpers. The office sidebar is `<nav aria-label="School
 * administration">` (templates/partials/_sidebar.html), fixed from 992px, so
 * live projects use a desktop viewport. Groups are <details>; we read link
 * hrefs rather than toggling groups, so no UI state is changed.
 */

import { expect, type Locator, type Page } from '@playwright/test';
import { LANDMARKS } from '../routes.ts';
import { expectRoute, navLinkName, openPath } from './common.ts';

export function officeNav(page: Page): Locator {
  return page.getByRole('navigation', { name: LANDMARKS.officeNav });
}

/** Assert the sidebar marks `label` as the current page. */
export async function expectCurrentNav(page: Page, label: string): Promise<void> {
  const link = officeNav(page).getByRole('link', { name: navLinkName(label) });
  await expect(link).toHaveAttribute('aria-current', 'page');
}

/**
 * Href of a sidebar link, or null when the link is not shown (missing
 * permission, or a year-scoped link with no academic year).
 */
export async function sidebarHref(page: Page, label: string): Promise<string | null> {
  // Links in a closed <details> group are hidden from the accessibility tree;
  // includeHidden lets us read their href without opening the group.
  const link = officeNav(page).getByRole('link', { name: navLinkName(label), includeHidden: true });
  if ((await link.count()) === 0) return null;
  return link.first().getAttribute('href');
}

/** Open the Assessments list for the sidebar's selected academic year. */
export async function openAssessmentsForSelectedYear(page: Page): Promise<boolean> {
  const href = await sidebarHref(page, 'Assessments');
  if (!href) return false;
  await openPath(page, href);
  await expectRoute(page, 'assessments');
  return true;
}
