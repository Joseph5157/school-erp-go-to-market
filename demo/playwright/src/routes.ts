/**
 * Read-only School ERP pages used by the demo scenes.
 *
 * Every entry was checked by reading the School ERP source on `main` at
 * c6284df (read-only): the path and URL name come from `core/urls.py` or
 * `core/portal_urls.py`, the `<title>` text from the page template's
 * `{% block title %}`. "Verified in source" is not "verified live": no entry
 * has been exercised against a deployed environment yet.
 *
 * Paths with `:param` need an id discovered at run time from a link on a
 * parent page; scenes never guess ids.
 */

import type { Role } from './config.ts';

export interface RouteInfo {
  path: string;
  /** Django URL name, for tracing back to the application source. */
  urlName: string;
  role: Role;
  /** Exact document title, or a prefix when the title includes record data. */
  title: string;
  titleMatch: 'exact' | 'prefix' | 'none';
  /** Template the title was read from. */
  source: string;
}

export const ROUTES = {
  // Administrator (office sidebar: nav "School administration")
  adminOverview: { path: '/overview/', urlName: 'core:admin-overview', role: 'admin', title: 'Overview', titleMatch: 'exact', source: 'core/templates/core/admin_overview.html' },
  academicYears: { path: '/academic-years/', urlName: 'core:academic-year-list', role: 'admin', title: 'Academic Years', titleMatch: 'exact', source: 'core/templates/core/academic_year_list.html' },
  classes: { path: '/classes/', urlName: 'core:class-grade-list', role: 'admin', title: 'Classes/Grades', titleMatch: 'exact', source: 'core/templates/core/class_grade_list.html' },
  subjects: { path: '/subjects/', urlName: 'core:subject-list', role: 'admin', title: 'Subjects', titleMatch: 'exact', source: 'core/templates/core/subject_list.html' },
  applicants: { path: '/applicants/', urlName: 'core:applicant-list', role: 'admin', title: 'Applicants', titleMatch: 'exact', source: 'core/templates/core/applicant_list.html' },
  students: { path: '/students/', urlName: 'core:student-list', role: 'admin', title: 'Students', titleMatch: 'exact', source: 'core/templates/core/student_list.html' },
  studentDetail: { path: '/students/:pk/', urlName: 'core:student-detail', role: 'admin', title: '', titleMatch: 'none', source: 'core/templates/core/student_detail.html (title is the student name)' },
  attendanceRegisters: { path: '/attendance/', urlName: 'core:attendance-register-list', role: 'admin', title: 'Attendance', titleMatch: 'exact', source: 'core/templates/core/attendance_register_list.html' },
  attendanceRegisterDetail: { path: '/attendance/:pk/', urlName: 'core:attendance-register-detail', role: 'admin', title: '', titleMatch: 'none', source: 'core/templates/core/attendance_register_list.html (row link)' },
  attendanceReports: { path: '/attendance/reports/', urlName: 'core:attendance-reports', role: 'admin', title: 'Attendance reports', titleMatch: 'exact', source: 'core/templates/core/attendance_reports.html' },
  assessments: { path: '/academic-years/:year/assessments/', urlName: 'core:academic-year-assessments', role: 'admin', title: 'Assessments - ', titleMatch: 'prefix', source: 'core/templates/core/assessment_list.html (href read from the sidebar link)' },
  assessmentDetail: { path: '/assessments/:pk/', urlName: 'core:assessment-detail', role: 'admin', title: '', titleMatch: 'none', source: 'core/templates/core/assessment_list.html (row link)' },
  reportCardPdfs: { path: '/documents/report-cards/', urlName: 'core:document-report-cards', role: 'admin', title: 'Report card PDFs', titleMatch: 'exact', source: 'core/templates/core/document_report_cards.html' },
  stalePublications: { path: '/publications/stale/', urlName: 'core:publications-stale', role: 'admin', title: 'Stale publications', titleMatch: 'exact', source: 'core/templates/core/publications_stale.html' },
  announcements: { path: '/announcements/', urlName: 'core:announcement-list', role: 'admin', title: 'Announcements', titleMatch: 'exact', source: 'core/templates/core/announcement_list.html' },
  timetable: { path: '/timetable/', urlName: 'core:timetable-index', role: 'admin', title: 'Timetable', titleMatch: 'exact', source: 'core/templates/core/timetable_index.html' },
  documents: { path: '/documents/', urlName: 'core:document-index', role: 'admin', title: 'Documents', titleMatch: 'exact', source: 'core/templates/core/document_index.html' },
  imports: { path: '/imports/', urlName: 'core:import-list', role: 'admin', title: 'Imports', titleMatch: 'exact', source: 'core/templates/core/import_list.html' },

  // Teacher (desktop top bar nav "Teaching")
  myDay: { path: '/my/', urlName: 'core:my-home', role: 'teacher', title: 'My day', titleMatch: 'exact', source: 'core/templates/core/my_home.html' },
  myStudents: { path: '/my/students/', urlName: 'core:my-students', role: 'teacher', title: 'My students', titleMatch: 'exact', source: 'core/templates/core/my_students.html' },
  myAttendanceHistory: { path: '/my/attendance/history/', urlName: 'core:my-attendance-history', role: 'teacher', title: 'My attendance history', titleMatch: 'exact', source: 'core/templates/core/my_attendance_history.html' },
  myAttendanceAssignment: { path: '/my/attendance/history/:pk/', urlName: 'core:my-attendance-assignment', role: 'teacher', title: 'Attendance ', titleMatch: 'prefix', source: 'core/templates/core/my_attendance_assignment.html' },
  myAttendanceRegister: { path: '/my/attendance/registers/:pk/', urlName: 'core:my-attendance-register', role: 'teacher', title: 'Attendance ', titleMatch: 'prefix', source: 'core/templates/core/my_attendance_register.html' },
  myAssessments: { path: '/my/assessments/', urlName: 'core:my-assessments', role: 'teacher', title: 'My assessments', titleMatch: 'exact', source: 'core/templates/core/my_assessments.html' },
  myGradebook: { path: '/my/gradebook/:pk/', urlName: 'core:my-gradebook', role: 'teacher', title: 'Gradebook ', titleMatch: 'prefix', source: 'core/templates/core/my_gradebook.html' },

  // Guardian Portal (nav "Guardian Portal")
  portalHome: { path: '/guardian/', urlName: 'portal:home', role: 'guardian', title: 'Home · School ERP', titleMatch: 'exact', source: 'templates/portal/home.html (portal/base.html appends " · School ERP")' },
  portalChild: { path: '/guardian/children/:uuid/', urlName: 'portal:child', role: 'guardian', title: '', titleMatch: 'none', source: 'templates/portal/child.html (title is the child name)' },
  portalAttendance: { path: '/guardian/children/:uuid/attendance/', urlName: 'portal:attendance', role: 'guardian', title: 'Attendance', titleMatch: 'prefix', source: 'templates/portal/attendance.html' },
  portalReportCards: { path: '/guardian/children/:uuid/report-cards/', urlName: 'portal:report-cards', role: 'guardian', title: 'Report cards', titleMatch: 'prefix', source: 'templates/portal/report_cards.html' },
  portalReportCard: { path: '/guardian/children/:uuid/report-cards/:uuid/', urlName: 'portal:report-card', role: 'guardian', title: '', titleMatch: 'none', source: 'templates/portal/report_card.html' },
  portalNotices: { path: '/guardian/notices/', urlName: 'portal:notices', role: 'guardian', title: 'Notices · School ERP', titleMatch: 'exact', source: 'templates/portal/notices.html (portal/base.html appends " · School ERP")' },
} as const satisfies Record<string, RouteInfo>;

export type RouteKey = keyof typeof ROUTES;

/** Turn a route pattern into a pathname regex (`:pk`/`:year` digits, `:uuid` UUIDs). */
export function routePattern(path: string): RegExp {
  const body = path
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    .replace(/:(pk|year)/g, '\\d+')
    .replace(/:uuid/g, '[0-9a-f-]{36}');
  return new RegExp(`^${body}$`);
}

/** Accessible names of the landmarks scenes rely on (from the templates). */
export const LANDMARKS = {
  officeNav: 'School administration', // templates/partials/_sidebar.html
  teacherNav: 'Teaching', // templates/base.html top bar and partials/_tabbar.html
  portalNav: 'Guardian Portal', // templates/portal/_portal_nav.html
} as const;
