// GTM-WEBSITE-V2 homepage content model.
// Every claim here restates a capability already listed in ./site.ts (areas
// M01–M12) or the existing draft copy. Do not add capabilities, figures,
// testimonials or customer names here. Interface pictures on the homepage are
// original illustrations with fictional, nameless demo data and are labelled
// as such where they appear.

export type IconName =
  | 'admissions'
  | 'attendance'
  | 'teacher'
  | 'assessment'
  | 'report'
  | 'guardian'
  | 'notice'
  | 'setup';

export type DayStage = {
  step: string;
  title: string;
  text: string;
  state: string;
  icon: IconName;
};

export const schoolDay: DayStage[] = [
  {
    step: '01',
    title: 'Admission',
    text: 'The office records the applicant and linked guardians, decides the application, then enrols the student in a class and section.',
    state: 'Accepted, then enrolled',
    icon: 'admissions',
  },
  {
    step: '02',
    title: 'Daily work',
    text: 'Class teachers submit the complete attendance register. Assigned teachers enter marks for their own subjects.',
    state: 'Register submitted',
    icon: 'attendance',
  },
  {
    step: '03',
    title: 'Published result',
    text: 'The office finalises and previews the report card, then publishes it. Only then can the guardian open it.',
    state: 'Visible after publication',
    icon: 'report',
  },
];

export type PublicationStage = { who: string; action: string; visibility: string; live?: boolean };

export const publicationStages: PublicationStage[] = [
  { who: 'Teacher', action: 'Enters marks and class-teacher remarks', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Finalises the assessment; the grading scale is frozen', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Previews the term report card', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Publishes the report card', visibility: 'Visible in the guardian portal', live: true },
];

export type RolePreview = { role: string; title: string; lines: [string, string]; href: string; icon: IconName };

export const roles: RolePreview[] = [
  {
    role: 'Administrator',
    title: 'Coordinate the school',
    lines: [
      'Set up years, classes and subjects, decide admissions and assign teachers.',
      'Check attendance and assessment progress, and control what is published.',
    ],
    href: '/who-its-for/#staff-heading',
    icon: 'setup',
  },
  {
    role: 'Teacher',
    title: 'Focus on assigned classes',
    lines: [
      'See the day’s work, assigned students and configured timetable periods.',
      'Take class attendance and enter marks for assigned subjects.',
    ],
    href: '/who-its-for/#staff-heading',
    icon: 'teacher',
  },
  {
    role: 'Guardian',
    title: 'See their own children',
    lines: [
      'Sign in to view only the children the school has approved access for.',
      'Read submitted attendance, published report cards and relevant notices.',
    ],
    href: '/who-its-for/#staff-heading',
    icon: 'guardian',
  },
];

export type Capability = { title: string; text: string; icon: IconName; href: string };

export const capabilities: Capability[] = [
  { title: 'Admissions', text: 'Applicants, explicit decisions and dated enrolment', icon: 'admissions', href: '/features/#administration' },
  { title: 'Attendance', text: 'Draft and submitted registers; absence kept distinct from missing records', icon: 'attendance', href: '/features/#daily-work' },
  { title: 'Teacher workflows', text: 'Dated assignments, a teacher home page and weekly timetables', icon: 'teacher', href: '/features/#administration' },
  { title: 'Assessments', text: 'Maximum marks, optional pass marks, Marked Absent, frozen grading scales', icon: 'assessment', href: '/features/#daily-work' },
  { title: 'Report cards', text: 'Class-teacher remarks, preview and explicit publication', icon: 'report', href: '/features/#daily-work' },
  { title: 'Guardian portal', text: 'School-approved access to each child’s released records', icon: 'guardian', href: '/features/#family' },
  { title: 'Notices and messages', text: 'School, class or section notices; staff-sent WhatsApp Assist', icon: 'notice', href: '/features/#family' },
  { title: 'School setup', text: 'Terms, sections, calendar, Excel import and access control', icon: 'setup', href: '/features/#data-access' },
];

export type OnboardStep = { title: string; text: string };

export const onboarding: OnboardStep[] = [
  {
    title: 'Your own installation',
    text: 'Each school has its own installation. Scope is agreed in writing, separating what the product already does from any custom work.',
  },
  {
    title: 'Configured for your school',
    text: 'Academic year, terms, classes, subjects, weekly pattern, holidays and grading scales are set up before daily work begins.',
  },
  {
    title: 'Start from your spreadsheets',
    text: 'Import students, guardians and placements from the Excel template. Every row is checked and problems are shown before anything is saved.',
  },
];

export type Faq = { q: string; a: string };

export const homeFaqs: Faq[] = [
  {
    q: 'Is it one shared service used by many schools?',
    a: 'No. Each school has its own installation, configured for that school.',
  },
  {
    q: 'When can guardians see marks and report cards?',
    a: 'Only after the office finalises the assessment, previews the report card and publishes it. Until then, marks are not visible in the guardian portal.',
  },
  {
    q: 'Does it send WhatsApp, SMS or email messages by itself?',
    a: 'No. WhatsApp Assist prepares messages for guardians who have consented. A member of staff opens each prefilled message in WhatsApp and sends it.',
  },
  {
    q: 'Is there a mobile app? Does it work offline?',
    a: 'There is no native Android or iOS app. It works in the phone’s browser and can be added to the home screen on supported devices. It needs an internet connection.',
  },
  {
    q: 'Does it handle fees and online payments?',
    a: 'No. Fees and online payment collection are not part of the current product.',
  },
];
