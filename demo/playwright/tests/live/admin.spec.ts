/**
 * Administrator scenes. Read-only: the guard fixture refuses every non-GET
 * request and every write page. Not yet run against any deployed environment.
 */

import { demoScene, expect, skipWithFallback } from '../../src/fixtures.ts';
import { expectCurrentNav, officeNav, openAssessmentsForSelectedYear } from '../../src/navigation/admin.ts';
import { followFirstLink, main, openRoute } from '../../src/navigation/common.ts';

demoScene('A1', async ({ page }) => {
  await openRoute(page, 'adminOverview');
  await expect(officeNav(page)).toBeVisible();
  await expectCurrentNav(page, 'Overview');
});

demoScene('A2', async ({ page }) => {
  await openRoute(page, 'academicYears');
  await expectCurrentNav(page, 'Academic Years');
  await openRoute(page, 'classes');
  await expectCurrentNav(page, 'Classes/Grades');
  await openRoute(page, 'subjects');
  await expectCurrentNav(page, 'Subjects');
});

demoScene('A3', async ({ page }) => {
  await openRoute(page, 'applicants');
  await expectCurrentNav(page, 'Applicants');
});

demoScene('A4', async ({ page }) => {
  await openRoute(page, 'students');
  await expectCurrentNav(page, 'Students');
  if (!(await followFirstLink(page, main(page), 'studentDetail'))) {
    skipWithFallback('A4', 'No student profile link on the Students list.');
  }
});

demoScene('A5', async ({ page }) => {
  await openRoute(page, 'attendanceRegisters');
  await expectCurrentNav(page, 'Attendance');
  await openRoute(page, 'attendanceReports');
  await expectCurrentNav(page, 'Attendance reports');
});

demoScene('A6', async ({ page }) => {
  await openRoute(page, 'adminOverview');
  if (!(await openAssessmentsForSelectedYear(page))) {
    skipWithFallback('A6', 'No Assessments link in the sidebar (no academic year or no permission).');
  }
  // Optional drill-down; the list alone is acceptable evidence.
  if (await followFirstLink(page, main(page), 'assessmentDetail')) {
    await page.goBack();
  }
  await openRoute(page, 'reportCardPdfs');
  await openRoute(page, 'stalePublications');
  await expectCurrentNav(page, 'Stale publications');
});

demoScene('A7', async ({ page }) => {
  await openRoute(page, 'announcements');
  await expectCurrentNav(page, 'Announcements');
  await openRoute(page, 'timetable');
  await expectCurrentNav(page, 'Timetable');
});

demoScene('A8', async ({ page }) => {
  await openRoute(page, 'documents');
  await expectCurrentNav(page, 'Documents');
});

demoScene('A9', async ({ page }) => {
  await openRoute(page, 'imports');
  await expectCurrentNav(page, 'Import');
});

// Listed so reports show them with their fallback; they skip immediately.
demoScene('U3', async () => {});
demoScene('U4', async () => {});
demoScene('U5', async () => {});
demoScene('U7', async () => {});
