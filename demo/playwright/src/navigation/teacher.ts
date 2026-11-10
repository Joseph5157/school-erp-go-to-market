/**
 * Teacher helpers. Desktop shows `<nav aria-label="Teaching">` in the top bar
 * (templates/base.html); phones show a tab bar with the same label
 * (partials/_tabbar.html). We use whichever is visible.
 */

import { expect, type Locator, type Page } from '@playwright/test';
import { LANDMARKS } from '../routes.ts';
import { navLinkName } from './common.ts';

export function teachingNav(page: Page): Locator {
  return page.getByRole('navigation', { name: LANDMARKS.teacherNav }).filter({ visible: true }).first();
}

export async function expectCurrentTab(page: Page, label: string): Promise<void> {
  await expect(teachingNav(page).getByRole('link', { name: navLinkName(label) })).toHaveAttribute('aria-current', 'page');
}

/** First "Gradebook" link on My assessments (aria-label "Gradebook for …"). */
export function gradebookLinks(page: Page): Locator {
  return page.locator('main').getByRole('link', { name: /^Gradebook for / });
}
