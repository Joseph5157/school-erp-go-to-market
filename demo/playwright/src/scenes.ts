/**
 * Demo scene catalogue and the two presenter sequences.
 *
 * Status meanings (also in README):
 * - implemented: read-only automation exists; route, page title and nav
 *   landmark are verified in the School ERP source; no record has to exist.
 * - provisional: read-only automation exists but needs a suitable fictional
 *   record (it discovers one from links on the page and skips with the
 *   fallback when none is found), or relies on selectors that only render
 *   with data. Selectors are unverified until a live rehearsal.
 * - unavailable: deliberately not automated (the step writes data, sends a
 *   message, downloads personal data, or has no generic read-only page).
 *
 * `liveVerified` is false for every scene: nothing has run against a deployed
 * environment yet. Flip it only after an authorised rehearsal, scene by scene.
 */

import type { Role } from './config.ts';
import type { RouteKey } from './routes.ts';

export type SceneStatus = 'implemented' | 'provisional' | 'unavailable';

export interface Scene {
  id: string;
  title: string;
  role: Role;
  status: SceneStatus;
  /** Screens visited, in order. Empty for unavailable scenes. */
  routes: RouteKey[];
  /** What the presenter points at; what the automation asserts where possible. */
  evidence: string;
  /** What to do when the scene cannot be shown live. */
  fallback: string;
  /** Why an unavailable scene is not automated. */
  reason?: string;
  liveVerified: false;
}

const scenes = [
  // Administrator
  { id: 'A1', title: 'Administrator overview', role: 'admin', status: 'implemented', routes: ['adminOverview'],
    evidence: 'Overview page with school context, academic year and attention items; sidebar "Overview" marked current.',
    fallback: 'Explain with the approved product map (diagrams/svg/01_Product_Map.svg).' },
  { id: 'A2', title: 'Academic structure', role: 'admin', status: 'implemented', routes: ['academicYears', 'classes', 'subjects'],
    evidence: 'Academic Years, Classes/Grades and Subjects lists open from the School setup group.',
    fallback: 'Describe years, classes, sections and subjects from the feature catalogue (M02).' },
  { id: 'A3', title: 'Applicants list', role: 'admin', status: 'implemented', routes: ['applicants'],
    evidence: 'Applicants list opens; no particular applicant is assumed.',
    fallback: 'Describe the admission decision step without opening a record.' },
  { id: 'A4', title: 'Fictional student profile', role: 'admin', status: 'provisional', routes: ['students', 'studentDetail'],
    evidence: 'Students list, then the first listed student profile (placement, guardians, enrolment).',
    fallback: 'Stay on the Students list and explain the profile; do not assume "Aarav Demo" exists.' },
  { id: 'A5', title: 'Attendance reporting', role: 'admin', status: 'implemented', routes: ['attendanceRegisters', 'attendanceReports'],
    evidence: 'Attendance register list and Attendance reports index (absentees, missing, monthly).',
    fallback: 'Explain submitted registers and monthly summaries without opening a register.' },
  { id: 'A6', title: 'Assessments and report-card views', role: 'admin', status: 'provisional', routes: ['assessments', 'assessmentDetail', 'reportCardPdfs', 'stalePublications'],
    evidence: 'Assessments list for the selected year (link from the sidebar), first assessment detail if any, Report card PDFs page, Stale publications.',
    fallback: 'Show the Guardian published report card (G4) or a prepared fictional PDF offline.' },
  { id: 'A7', title: 'Announcements and timetable', role: 'admin', status: 'implemented', routes: ['announcements', 'timetable'],
    evidence: 'Announcements list and Timetable index (periods, section timetables, issues links).',
    fallback: 'Describe audience targeting and the weekly grid; do not show an unverified notice.' },
  { id: 'A8', title: 'Documents index', role: 'admin', status: 'implemented', routes: ['documents'],
    evidence: 'Documents page listing the supported document types; nothing is issued.',
    fallback: 'Describe bonafide, attendance summary and report-card PDFs from the catalogue.' },
  { id: 'A9', title: 'Import history', role: 'admin', status: 'implemented', routes: ['imports'],
    evidence: 'Imports list opens; no batch is opened, confirmed or discarded.',
    fallback: 'Show the product map and explain validation before confirmation.' },

  // Teacher
  { id: 'T1', title: 'Teacher My day', role: 'teacher', status: 'implemented', routes: ['myDay'],
    evidence: 'My day page (labelled Today on phones); "Teaching" nav shows My day as current.',
    fallback: 'Explain assignment-based access from the Teacher manual.' },
  { id: 'T2', title: 'Assigned students', role: 'teacher', status: 'implemented', routes: ['myStudents'],
    evidence: 'My students page for current assignments.',
    fallback: 'Explain that teachers see only students in their current assignments.' },
  { id: 'T3', title: 'Existing attendance register (read-only)', role: 'teacher', status: 'provisional', routes: ['myAttendanceHistory', 'myAttendanceAssignment', 'myAttendanceRegister'],
    evidence: 'Attendance history, first section, first past register: a read-only register view. The editable register page is never opened.',
    fallback: 'Stay on Attendance history and explain draft vs submitted registers.' },
  { id: 'T4', title: 'Existing gradebook (read-only)', role: 'teacher', status: 'provisional', routes: ['myAssessments', 'myGradebook'],
    evidence: 'My assessments, then the first "Gradebook" link. Marks entry is never opened.',
    fallback: 'Stay on My assessments and explain marks entry, Absent vs missing.' },

  // Guardian
  { id: 'G1', title: 'Guardian Portal home', role: 'guardian', status: 'implemented', routes: ['portalHome'],
    evidence: 'Guardian Portal home ("Your students"), portal navigation visible.',
    fallback: 'Explain explicit child access from the Guardian manual.' },
  { id: 'G2', title: 'Authorised child profile', role: 'guardian', status: 'provisional', routes: ['portalChild'],
    evidence: 'First "Open overview" child card leads to the child overview with school details.',
    fallback: 'Stay on the home page; explain that access is granted per child.' },
  { id: 'G3', title: 'Submitted attendance', role: 'guardian', status: 'provisional', routes: ['portalAttendance'],
    evidence: 'Attendance tab for the authorised child (submitted attendance only).',
    fallback: 'Explain that only submitted attendance is shown to guardians.' },
  { id: 'G4', title: 'Published report card', role: 'guardian', status: 'provisional', routes: ['portalReportCards', 'portalReportCard'],
    evidence: 'Report cards tab, then the first "View report card" (already published). PDF is not downloaded.',
    fallback: 'Show a prepared, approved fictional report-card PDF offline.' },
  { id: 'G5', title: 'School notices', role: 'guardian', status: 'implemented', routes: ['portalNotices'],
    evidence: 'Notices page relevant to the guardian\'s children.',
    fallback: 'Describe notice audiences (school, class, section).' },

  // Not automated
  { id: 'U1', title: 'Record and submit today\'s register', role: 'teacher', status: 'unavailable', routes: [],
    reason: 'Writes attendance. Out of scope for read-only automation.',
    evidence: 'Presenter-led only, with a disposable record and a reset plan.',
    fallback: 'Run T3 (existing register, read-only).' },
  { id: 'U2', title: 'Enter marks', role: 'teacher', status: 'unavailable', routes: [],
    reason: 'Writes marks.',
    evidence: 'Presenter-led only, with a disposable assessment.',
    fallback: 'Run T4 (existing gradebook, read-only).' },
  { id: 'U3', title: 'Finalise assessment and publish report cards', role: 'admin', status: 'unavailable', routes: [],
    reason: 'Finalisation and publication change records and what guardians see.',
    evidence: 'Presenter-led only after rehearsal.',
    fallback: 'Run A6, then G4 (already published report card).' },
  { id: 'U4', title: 'Message queue and WhatsApp Assist', role: 'admin', status: 'unavailable', routes: [],
    reason: 'The queue shows guardian contact details and leads to sending. Blocked by the read-only guard.',
    evidence: 'Explain the staff-completed send; never dispatch.',
    fallback: 'Run A7 (announcements) and describe WhatsApp Assist verbally.' },
  { id: 'U5', title: 'Excel import preview', role: 'admin', status: 'unavailable', routes: [],
    reason: 'Needs a prepared fictional batch; its id cannot be assumed. Commit and discard are writes.',
    evidence: 'Presenter-led only if a fictional preview batch was prepared and recorded privately.',
    fallback: 'Run A9 (import history) and show the product map.' },
  { id: 'U6', title: 'Download report-card or document PDF', role: 'guardian', status: 'unavailable', routes: [],
    reason: 'Downloads carry personal data; blocked by the read-only guard.',
    evidence: 'Open manually only with approved fictional records.',
    fallback: 'Show a prepared, approved fictional PDF offline.' },
  { id: 'U7', title: 'Corrections and record history', role: 'admin', status: 'unavailable', routes: [],
    reason: 'No generic page; depends on a rehearsed record chosen privately.',
    evidence: 'Presenter-led on a rehearsed page.',
    fallback: 'Explain correction workflows and audit records verbally.' },
] as const satisfies readonly Omit<Scene, 'liveVerified'>[];

export const SCENES: readonly Scene[] = scenes.map((s) => ({ ...s, routes: [...s.routes], liveVerified: false as const }));

export type SceneId = (typeof scenes)[number]['id'];

export function getScene(id: string): Scene {
  const scene = SCENES.find((s) => s.id === id);
  if (!scene) throw new Error(`Unknown scene id: ${id}`);
  return scene;
}

// ---------------------------------------------------------------------------
// Sequences, mapped to the presenter scripts.
// ---------------------------------------------------------------------------

export type StepMode = 'automated' | 'presenter-only';

export interface SequenceStep {
  /** Time slot exactly as written in the presenter script. */
  slot: string;
  startMinute: number;
  endMinute: number;
  /** Heading or row label in the presenter script. */
  scriptRef: string;
  scenes: SceneId[];
  mode: StepMode;
  note?: string;
}

export interface Sequence {
  id: 'exec8' | 'live30';
  tag: '@exec8' | '@live30';
  title: string;
  script: string;
  durationMinutes: number;
  steps: SequenceStep[];
}

export const SEQUENCES: readonly Sequence[] = [
  {
    id: 'exec8',
    tag: '@exec8',
    title: 'Eight-minute executive walkthrough (read-only)',
    script: 'demo/presenter-scripts/executive-demo-8-minute.md',
    durationMinutes: 8,
    steps: [
      { slot: '0:00–0:45', startMinute: 0, endMinute: 0.75, scriptRef: 'Administrator overview with school/year', scenes: ['A1'], mode: 'automated' },
      { slot: '0:45–1:45', startMinute: 0.75, endMinute: 1.75, scriptRef: 'School structure and applicant/student profile', scenes: ['A2', 'A3', 'A4'], mode: 'automated' },
      { slot: '1:45–2:45', startMinute: 1.75, endMinute: 2.75, scriptRef: 'Teacher desktop My day / My Students and an existing attendance register', scenes: ['T1', 'T2', 'T3'], mode: 'automated' },
      { slot: '2:45–4:00', startMinute: 2.75, endMinute: 4, scriptRef: 'Teacher gradebook, then admin assessment/report publication', scenes: ['T4', 'A6'], mode: 'automated', note: 'Publication itself is U3 (unavailable); show the published state instead.' },
      { slot: '4:00–5:00', startMinute: 4, endMinute: 5, scriptRef: 'Guardian child card, attendance and published report', scenes: ['G1', 'G2', 'G3', 'G4'], mode: 'automated' },
      { slot: '5:00–6:00', startMinute: 5, endMinute: 6, scriptRef: 'Timetable, announcement and document examples', scenes: ['A7', 'A8', 'G5'], mode: 'automated' },
      { slot: '6:00–6:45', startMinute: 6, endMinute: 6.75, scriptRef: 'Excel import validation preview and product map', scenes: ['A9', 'U5'], mode: 'automated', note: 'Script allows skipping this slot when strictly limited to 8 minutes.' },
      { slot: '6:45–8:00', startMinute: 6.75, endMinute: 8, scriptRef: 'Blank requirements capture', scenes: [], mode: 'presenter-only', note: 'Requirements worksheet; record answers privately, never in Git.' },
    ],
  },
  {
    id: 'live30',
    tag: '@live30',
    title: 'Thirty-minute detailed walkthrough (automation covers read-only parts only)',
    script: 'demo/presenter-scripts/live-demo-30-minute.md',
    durationMinutes: 30,
    steps: [
      { slot: 'Minutes 0 to 2', startMinute: 0, endMinute: 2, scriptRef: 'Welcome', scenes: ['A1'], mode: 'automated' },
      { slot: 'Minutes 2 to 4', startMinute: 2, endMinute: 4, scriptRef: 'Dashboard and academic setup', scenes: ['A1', 'A2'], mode: 'automated' },
      { slot: 'Minutes 4 to 7', startMinute: 4, endMinute: 7, scriptRef: 'Admissions and student profile', scenes: ['A3', 'A4'], mode: 'automated' },
      { slot: 'Minutes 7 to 8', startMinute: 7, endMinute: 8, scriptRef: 'Teacher view', scenes: ['T1', 'T2'], mode: 'automated' },
      { slot: 'Minutes 8 to 10', startMinute: 8, endMinute: 10, scriptRef: 'Record the class register', scenes: ['U1', 'T3'], mode: 'automated', note: 'Recording is U1 (unavailable); automation shows an existing register read-only.' },
      { slot: 'Minutes 10 to 11', startMinute: 10, endMinute: 11, scriptRef: 'Review and reporting', scenes: ['A5'], mode: 'automated' },
      { slot: 'Minutes 11 to 13', startMinute: 11, endMinute: 13, scriptRef: 'Teacher marks entry', scenes: ['U2', 'T4'], mode: 'automated', note: 'Marks entry is U2 (unavailable); automation shows the gradebook read-only.' },
      { slot: 'Minutes 13 to 15', startMinute: 13, endMinute: 15, scriptRef: 'Office finalization', scenes: ['U3', 'A6'], mode: 'automated' },
      { slot: 'Minutes 15 to 16', startMinute: 15, endMinute: 16, scriptRef: 'Publication', scenes: ['U3', 'A6'], mode: 'automated', note: 'Never publish from automation; show the already published sample in G4.' },
      { slot: 'Minutes 16 to 20', startMinute: 16, endMinute: 20, scriptRef: 'Guardian Portal', scenes: ['G1', 'G2', 'G3', 'G4', 'U6'], mode: 'automated' },
      { slot: 'Minutes 20 to 22', startMinute: 20, endMinute: 22, scriptRef: 'Notices and WhatsApp Assist', scenes: ['G5', 'A7', 'U4'], mode: 'automated' },
      { slot: 'Minutes 22 to 23', startMinute: 22, endMinute: 23, scriptRef: 'Supported school PDFs', scenes: ['A8', 'U6'], mode: 'automated' },
      { slot: 'Minutes 23 to 24', startMinute: 23, endMinute: 24, scriptRef: 'Timetable', scenes: ['A7'], mode: 'automated' },
      { slot: 'Minutes 24 to 25', startMinute: 24, endMinute: 25, scriptRef: 'Excel onboarding', scenes: ['A9', 'U5'], mode: 'automated' },
      { slot: 'Minutes 25 to 26', startMinute: 25, endMinute: 26, scriptRef: 'Permissions and record history', scenes: ['U7'], mode: 'presenter-only' },
      { slot: 'Minutes 26 to 30', startMinute: 26, endMinute: 30, scriptRef: 'Requirements and next steps', scenes: [], mode: 'presenter-only', note: 'Requirements questionnaire; record answers privately.' },
    ],
  },
];

/** Sequence tags (`@exec8`, `@live30`) a scene belongs to. */
export function sequenceTagsFor(sceneId: string): string[] {
  return SEQUENCES.filter((seq) => seq.steps.some((step) => (step.scenes as string[]).includes(sceneId))).map((seq) => seq.tag);
}

/** Every Playwright tag for a scene: sequences, role, status, scene id. */
export function tagsFor(scene: Scene): string[] {
  return [...sequenceTagsFor(scene.id), `@${scene.role}`, `@${scene.status}`, `@${scene.id}`];
}
