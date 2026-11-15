// Shared site data. Product wording is taken from the verified feature
// catalogue (docs/product/feature-catalogue.md, areas M01–M12) and the
// client deck. Do not add capabilities here that the catalogue does not list.

export const site = {
  // Text wordmark: the product name Everclass ERP is decided (2026-11-15); the logo and company
  // name are not, so the wordmark stays plain text.
  wordmark: 'Everclass ERP',
  wordmarkNote: 'Text wordmark; logo pending',
  titleSuffix: 'Everclass ERP (draft)',
};

export const nav = [
  { href: '/features/', label: 'Features' },
  { href: '/who-its-for/', label: 'Who it’s for' },
  { href: '/implementation/', label: 'Implementation' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

export const demoHref = '/contact/#request-a-demo';
export const requirementsHref = '/contact/#discuss-your-requirements';

export type Area = {
  id: string;
  title: string;
  summary: string;
  users: string;
  points: string[];
};

export type AreaGroup = { slug: string; title: string; intro: string; areas: Area[] };

export const areaGroups: AreaGroup[] = [
  {
    slug: 'administration',
    title: 'School administration',
    intro: 'Dashboard, academic setup, admissions and teacher assignments.',
    areas: [
      {
        id: 'M01',
        title: 'Dashboard and school setup',
        summary: 'A clear starting point for daily school administration.',
        users: 'Office administrators',
        points: [
          'Operational overview with attention items and setup progress',
          'School-at-a-glance figures for students, teachers, classes and guardian access',
          'School name, address, affiliation number and principal details',
          'Navigation and actions shown according to each account’s permissions',
        ],
      },
      {
        id: 'M02',
        title: 'Academic structure and calendar',
        summary: 'Organise the academic year before daily work begins.',
        users: 'Office administrators',
        points: [
          'Academic years, ordered terms, classes, sections and subjects',
          'Subject offerings scoped to a year, with section restrictions where needed',
          'Weekly instructional pattern with configurable Saturdays',
          'Holidays and additional working days, with safeguards once attendance exists',
        ],
      },
      {
        id: 'M03',
        title: 'Admissions and student records',
        summary: 'Carry an applicant through an explicit admission and enrolment journey.',
        users: 'Office administrators',
        points: [
          'Applicant registration with linked guardian relationships',
          'Explicit acceptance or rejection, then a separate step to enrol the student',
          'Dated enrolment by class and section, with placement history preserved',
          'Reason-required corrections to student details, with correction history kept',
        ],
      },
      {
        id: 'M04',
        title: 'Teacher accounts and assignments',
        summary: 'Give each teacher access that follows their teaching responsibilities.',
        users: 'Office administrators and assigned teachers',
        points: [
          'Teacher accounts with a temporary credential slip and password reset',
          'Dated class-teacher and subject-teacher assignments with handover history',
          'Assignment overview that flags missing or inactive holders',
          'A teacher home page with assigned students, attendance, results and periods',
        ],
      },
    ],
  },
  {
    slug: 'daily-work',
    title: 'Daily academic work',
    intro: 'Attendance, assessments, report cards and weekly timetables.',
    areas: [
      {
        id: 'M05',
        title: 'Attendance management',
        summary: 'Record attendance and see the difference between absence and missing records.',
        users: 'Office administrators and authorised class teachers',
        points: [
          'Daily section register with Present and Absent and optional absence notes',
          'Draft register, then submission of the complete class roster',
          'Daily absentee and missing-attendance reports',
          'Monthly section summaries and audited administrator corrections',
        ],
      },
      {
        id: 'M06',
        title: 'Assessments and report cards',
        summary: 'Control marks entry, approval and release to families.',
        users: 'Office administrators, assigned teachers and authorised guardians',
        points: [
          'Subject assessments with maximum marks and an optional pass mark',
          'Marks entry within assignment permissions; Marked Absent kept distinct from missing',
          'Grading scales frozen when an assessment is finalised',
          'Term report cards with class-teacher remarks, preview and explicit release',
        ],
      },
      {
        id: 'M07',
        title: 'Timetable management',
        summary: 'Maintain weekly section schedules and identify teacher clashes.',
        users: 'Office administrators and assigned teachers',
        points: [
          'Period definitions and a weekly grid for each section',
          'Teachers taken from their dated subject assignments',
          'Checks for known teacher clashes when a slot is saved',
          'An issues report for clashes that arise after assignment changes',
        ],
      },
    ],
  },
  {
    slug: 'family',
    title: 'Family communication',
    intro: 'Guardian portal, notices, staff-assisted messages and school PDFs.',
    areas: [
      {
        id: 'M08',
        title: 'Guardian portal and family access',
        summary: 'Give families access to information about their own children.',
        users: 'Authorised guardians and office administrators',
        points: [
          'Administrator-created guardian login with a forced first password change',
          'One guardian account linked to more than one child where approved',
          'Submitted attendance summary and monthly calendar',
          'Published term report cards and download of the eligible report-card PDF',
        ],
      },
      {
        id: 'M09',
        title: 'Announcements and WhatsApp Assist',
        summary: 'Publish notices and prepare consent-based messages that staff send.',
        users: 'Office administrators and authorised guardians',
        points: [
          'Notices for the whole school, one class or one section',
          'Withdrawal of a published notice with a recorded reason',
          'Guardian WhatsApp consent records, rechecked before a message is prepared and before it is marked sent',
          'A message queue with prefilled WhatsApp links; staff send each message and record the outcome',
        ],
      },
      {
        id: 'M10',
        title: 'School documents',
        summary: 'Issue supported PDFs with traceable serial numbers and stored content.',
        users: 'Office administrators and authorised guardians',
        points: [
          'Bonafide certificate, report-card PDF and section attendance summary',
          'Serial numbers by document type and academic year',
          'Reprints from the stored copy without issuing a second record',
          'Latin and Telugu fonts bundled for PDF output',
        ],
      },
    ],
  },
  {
    slug: 'data-access',
    title: 'Data and access',
    intro: 'Excel onboarding, permissions and audit history.',
    areas: [
      {
        id: 'M11',
        title: 'Excel import and onboarding',
        summary: 'Review spreadsheet data before creating school records.',
        users: 'Authorised office administrators',
        points: [
          'Downloadable Excel template for students, guardians and placements',
          'Validation preview before anything is saved',
          'Warnings for possible duplicates and shared phone numbers',
          'Row and column problem messages, with a downloadable problem list',
        ],
      },
      {
        id: 'M12',
        title: 'Access control and audit',
        summary: 'Protect account access and keep the history of important actions.',
        users: 'Administrators, teachers and guardians within their permissions',
        points: [
          'Separate administrator, teacher and guardian access boundaries',
          'Sign-in throttling, lockout management and session time limits',
          'Security events and protected history for important records',
          'Installable on supported devices as an online-only web app (PWA)',
        ],
      },
    ],
  },
];

// Requests that need a separate decision, estimate or implementation.
// Source: catalogue "Current boundaries and future requests" and the sales FAQ.
export const boundaries = [
  { area: 'Fee collection and online payments', position: 'Not in the current product' },
  { area: 'Native Android or iOS apps, and student login', position: 'Not in the current product' },
  { area: 'Offline working', position: 'Not supported; the web app needs an internet connection' },
  { area: 'Automatic WhatsApp, SMS or email sending', position: 'Not supported; WhatsApp Assist messages are sent by staff' },
  { area: 'Bulk academic-year rollover', position: 'Planned, not implemented' },
  { area: 'Transfer certificates', position: 'Needs an agreed school format and separate scope' },
  { area: 'Ranks, GPA, weighting and board-specific rules', position: 'Needs a separate assessment policy decision' },
  { area: 'Transport, library, hostel, payroll and inventory', position: 'Outside the current product' },
  { area: 'One shared service for many schools', position: 'Not offered; each school has its own installation' },
];
