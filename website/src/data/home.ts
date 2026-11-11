// GTM-WEBSITE-V2 homepage content model — the single source for homepage
// wording, including image descriptions and captions.
// Every claim restates a capability already listed in ./site.ts (areas
// M01–M12) or the existing draft copy. Do not add capabilities, figures,
// testimonials or customer names here.
//
// The hero, attendance and guardian visuals are real screenshots from the demo
// school (fictional data). The admission and roles visuals are AI-generated
// illustrative images of people (brochure cover; Gamma), captioned as such.

export type IconName =
  | 'admissions'
  | 'attendance'
  | 'teacher'
  | 'assessment'
  | 'report'
  | 'guardian'
  | 'notice'
  | 'setup';

export type Link = { href: string; label: string };
export type Intro = { eyebrow: string; heading: string; lead?: string; link?: Link };

const shotCaption = 'Screenshot of School ERP in a demo school. All names and figures are fictional.';

// Real screenshots ----------------------------------------------------------
// Captured from the School ERP demo school on 5 November 2026. Every name and
// figure is fictional demo data (owner approved for website use 2026-11-11).
// Source PNGs: school-erp/marketing-assets/screenshots/ (not in this repo).
export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  frame: 'browser' | 'phone';
  bar?: string;
  narrow?: { src: string; width: number; height: number };
};

export const shots = {
  overview: {
    src: '/images/product/overview-desktop.webp',
    width: 1600,
    height: 997,
    narrow: { src: '/images/product/overview-phone.webp', width: 480, height: 533 },
    alt: 'School ERP administrator overview for a demo school: term attendance against an 80% target, today’s present and absent count, registers, marks and results still to finish, a daily attendance line chart and a four-week attendance heatmap.',
    caption: shotCaption,
    frame: 'browser',
    bar: 'School overview',
  },
  register: {
    src: '/images/product/attendance-register.webp',
    width: 440,
    height: 952,
    alt: 'Teacher attendance register for Grade 10 A on a phone, still in draft: 2 students unmarked, 7 present and 1 absent, with each student marked Present or Absent and a bar reminding the teacher to mark everyone before submitting.',
    caption: shotCaption,
    frame: 'phone',
  },
  guardian: {
    src: '/images/product/guardian-home.webp',
    width: 440,
    height: 797,
    alt: 'Guardian portal on a phone: a demo child’s attendance of 84.6%, a link to the latest Term 2 report card, and the latest school notices.',
    caption: shotCaption,
    frame: 'phone',
  },
} satisfies Record<string, Shot>;

export type Photo = { src: string; width: number; height: number; alt: string; caption: string };
const photoCaption = 'Illustrative image. The people shown are not real staff, guardians or students.';

export const admissionPhoto: Photo = {
  src: '/images/product/admissions-desk.webp',
  width: 1000,
  height: 750,
  alt: 'Illustration of a school office: a staff member at the front desk helps a parent and her young daughter fill in admission papers.',
  caption: photoCaption,
};

export const teamPhoto: Photo = {
  src: '/images/product/school-team.webp',
  width: 1000,
  height: 666,
  alt: 'Illustration of a teacher with a tablet, a principal at a laptop, and a guardian with a student, all looking at the school system together.',
  caption: photoCaption,
};

// Page metadata --------------------------------------------------------------
export const homeMeta = {
  description:
    'School administration for private schools in Telangana and Andhra Pradesh: admissions, attendance, assessments, report cards and a guardian portal in one connected record.',
};

// 01 Hero -------------------------------------------------------------------
export const hero = {
  eyebrow: 'Private schools in Telangana & Andhra Pradesh',
  heading: { lead: 'A clearer way to', accent: 'run your school.' },
  lead: 'From admission to published report cards, keep everyday school work connected. Administrators, teachers and guardians see information according to their roles.',
  primaryLabel: 'Request a demo',
  secondary: { href: '/features/', label: 'Explore the features' },
  note: 'A dedicated installation, configured for each school’s classes, terms and policies.',
  // Floating chips beside the hero screenshot (wide screens only). Each one
  // restates a capability already described on the site.
  chipsLabel: 'Key controls',
  chips: [
    { icon: 'attendance' as IconName, title: 'Attendance', text: 'Draft, then submitted' },
    { icon: 'report' as IconName, title: 'Report cards', text: 'Visible after publishing' },
    { icon: 'guardian' as IconName, title: 'Guardian access', text: 'Approved by the school' },
  ],
};

// 02 School-day strip ------------------------------------------------------
export type DayStage = { step: string; title: string; text: string; state: string; icon: IconName };

export const schoolDayIntro: Intro = {
  eyebrow: 'From admission to results',
  heading: 'Follow each student through one record',
  lead: 'Three moments in a school year, each with a clear state. Guardians see records only after the school grants access or publishes results.',
  link: { href: '/features/', label: 'See every feature area' },
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

// 03 Image-led feature splits ---------------------------------------------
export type Feature = {
  id: string;
  eyebrow: string;
  heading: string;
  text: string;
  checks: string[];
  link: Link;
  scene: 'admission' | 'register';
  reverse?: boolean;
  tone?: 'white' | 'pale';
};

export const features: Feature[] = [
  {
    id: 'v2-admin-heading',
    eyebrow: 'Admissions and administration',
    heading: 'Every admission decided, every placement kept',
    text: 'The office registers each applicant with linked guardians, records an explicit decision, then enrols the student by class and section. Corrections need a reason, and history is kept.',
    checks: [
      'Applicant registration with linked guardian relationships',
      'Accept or reject, then a separate dated enrolment step',
      'Placement history preserved when a student moves section',
      'Dated class-teacher and subject-teacher assignments',
    ],
    link: { href: '/features/#administration', label: 'Read about school administration' },
    scene: 'admission',
  },
  {
    id: 'v2-daily-heading',
    eyebrow: 'Attendance and teacher work',
    heading: 'Know what is recorded, and what is still missing',
    text: 'Class teachers keep a draft register, then submit the complete roster. The office sees recorded absences and registers that have not been submitted as two different things.',
    checks: [
      'Daily section register with Present, Absent and optional notes',
      'Daily absentee and missing-attendance reports',
      'A teacher home page with assigned students, attendance and periods',
      'Marks entry limited to each teacher’s assigned subjects',
    ],
    link: { href: '/features/#daily-work', label: 'Read about daily academic work' },
    scene: 'register',
    reverse: true,
    tone: 'pale',
  },
];

// 04 Publication band -------------------------------------------------------
export type PublicationStage = { who: string; action: string; visibility: string; live?: boolean };

export const publication = {
  eyebrow: 'Review before release',
  heading: 'Marks stay private until the school publishes',
  text: 'Teachers enter results. The office finalises the assessment, previews the report card and explicitly publishes it. Only then does it appear in the guardian portal. If a relevant correction is made later, the old publication is flagged for review.',
  listLabel: 'Report card publication stages',
  stepLabel: 'Step',
  link: { href: '/features/#daily-work', label: 'Read about assessments and report cards' },
};

export const publicationStages: PublicationStage[] = [
  { who: 'Teacher', action: 'Enters marks and class-teacher remarks', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Finalises the assessment; the grading scale is frozen', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Previews the term report card', visibility: 'Not visible to guardians' },
  { who: 'Office', action: 'Publishes the report card', visibility: 'Visible in the guardian portal', live: true },
];

// 05 Roles ------------------------------------------------------------------
export type RolePreview = { role: string; title: string; lines: [string, string]; icon: IconName };

export const rolesIntro: Intro = {
  eyebrow: 'Built around roles',
  heading: 'The right work for each person',
  lead: 'Each account sees navigation, actions and records according to its role and assignments.',
  link: { href: '/who-its-for/', label: 'See who it’s for' },
};

export const roles: RolePreview[] = [
  {
    role: 'Administrator',
    title: 'Coordinate the school',
    lines: [
      'Set up years, classes and subjects, decide admissions and assign teachers.',
      'Check attendance and assessment progress, and control what is published.',
    ],
    icon: 'setup',
  },
  {
    role: 'Teacher',
    title: 'Focus on assigned classes',
    lines: [
      'See the day’s work, assigned students and configured timetable periods.',
      'Take class attendance and enter marks for assigned subjects.',
    ],
    icon: 'teacher',
  },
  {
    role: 'Guardian',
    title: 'See their own children',
    lines: [
      'Sign in to view only the children the school has approved access for.',
      'Read submitted attendance, published report cards and relevant notices.',
    ],
    icon: 'guardian',
  },
];

// 06 Capability grid --------------------------------------------------------
export type Capability = { title: string; text: string; icon: IconName; href: string };

export const capabilitiesIntro: Intro = {
  eyebrow: 'What it covers today',
  heading: 'Eight connected areas of school work',
  link: { href: '/features/#not-included', label: 'See what is not in the current product' },
};

// Dark call-to-action card that closes the capability grid.
export const capabilitiesCta = {
  heading: 'See how it fits your school',
  text: 'Start with a short demonstration of the workflows that matter most to you.',
  label: 'Request a demo',
};

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

// 07 Implementation ---------------------------------------------------------
export type OnboardStep = { title: string; text: string };

export const onboardingIntro: Intro = {
  eyebrow: 'How it works for a school',
  heading: 'Practical from the first term',
  lead: 'Set up around your school’s structure, then bring in your existing records.',
  link: { href: '/implementation/', label: 'See the implementation process' },
};

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

export const onboardingNote = {
  title: 'Works in the browser.',
  text: 'Use it on office computers and phones; it needs an internet connection. WhatsApp Assist prepares messages for consenting guardians, and staff send each one.',
};

// 08 FAQ --------------------------------------------------------------------
export type Faq = { q: string; a: string };

export const faqIntro: Intro = {
  eyebrow: 'Questions',
  heading: 'Clear answers about what it does today',
  link: { href: '/faq/#product-boundaries', label: 'Read all questions' },
};

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

// 09 Closing CTA ------------------------------------------------------------
export const closingCta = {
  heading: 'See how it fits your school',
  text: 'Start with a short demonstration, or tell us which two or three workflows matter most. We confirm what the current product covers before any proposal.',
  primaryLabel: 'Request a demo',
  secondaryLabel: 'Discuss your requirements',
};
