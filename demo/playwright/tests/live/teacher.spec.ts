/**
 * Teacher scenes. Read-only: the editable register (`/my/attendance/<id>/`),
 * its autosave endpoint and marks entry are blocked by the guard and never
 * opened. Not yet run against any deployed environment.
 */

import { demoScene, skipWithFallback } from '../../src/fixtures.ts';
import { followFirstLink, main, openRoute, expectRoute } from '../../src/navigation/common.ts';
import { expectCurrentTab, gradebookLinks } from '../../src/navigation/teacher.ts';

demoScene('T1', async ({ page }) => {
  await openRoute(page, 'myDay');
  await expectCurrentTab(page, 'My day');
});

demoScene('T2', async ({ page }) => {
  await openRoute(page, 'myStudents');
  await expectCurrentTab(page, 'My students');
});

demoScene('T3', async ({ page }) => {
  await openRoute(page, 'myAttendanceHistory');
  if (!(await followFirstLink(page, main(page), 'myAttendanceAssignment'))) {
    skipWithFallback('T3', 'No section in Attendance history.');
  }
  if (!(await followFirstLink(page, main(page), 'myAttendanceRegister'))) {
    skipWithFallback('T3', 'No past register for that section.');
  }
});

demoScene('T4', async ({ page }) => {
  await openRoute(page, 'myAssessments');
  await expectCurrentTab(page, 'My assessments');
  const links = gradebookLinks(page);
  if ((await links.count()) === 0) {
    skipWithFallback('T4', 'No Gradebook link on My assessments.');
  }
  await links.first().click();
  await expectRoute(page, 'myGradebook');
});

demoScene('U1', async () => {});
demoScene('U2', async () => {});
