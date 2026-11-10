/**
 * Guardian scenes. Read-only: PDF downloads are blocked by the guard. Child
 * pages are reached only through links the portal itself offers, so the
 * automation never guesses a child id. Not yet run against any deployed
 * environment.
 */

import { demoScene, expect, skipWithFallback } from '../../src/fixtures.ts';
import { followFirstLink, main, openRoute } from '../../src/navigation/common.ts';
import { expectPortalTab, openChildTab, portalNav } from '../../src/navigation/guardian.ts';
import type { Page } from '@playwright/test';

async function openFirstChild(page: Page, id: 'G2' | 'G3' | 'G4'): Promise<void> {
  await openRoute(page, 'portalHome');
  if (!(await followFirstLink(page, main(page), 'portalChild'))) {
    skipWithFallback(id, 'No authorised child card on the portal home.');
  }
}

demoScene('G1', async ({ page }) => {
  await openRoute(page, 'portalHome');
  await expect(portalNav(page)).toBeVisible();
  await expectPortalTab(page, 'Home');
});

demoScene('G2', async ({ page }) => {
  await openFirstChild(page, 'G2');
  await expectPortalTab(page, 'Overview');
});

demoScene('G3', async ({ page }) => {
  await openFirstChild(page, 'G3');
  if (!(await openChildTab(page, 'Attendance', 'portalAttendance'))) {
    skipWithFallback('G3', 'No Attendance tab for the selected child.');
  }
});

demoScene('G4', async ({ page }) => {
  await openFirstChild(page, 'G4');
  if (!(await openChildTab(page, 'Report cards', 'portalReportCards'))) {
    skipWithFallback('G4', 'No Report cards tab for the selected child.');
  }
  if (!(await followFirstLink(page, main(page), 'portalReportCard'))) {
    skipWithFallback('G4', 'No published report card for the selected child.');
  }
});

demoScene('G5', async ({ page }) => {
  await openRoute(page, 'portalNotices');
  await expectPortalTab(page, 'Notices');
});

demoScene('U6', async () => {});
