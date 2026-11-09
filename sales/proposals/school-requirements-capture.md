# School ERP — School Requirements Capture Sheet

**Status: Draft.** Client discovery worksheet for the initial Telangana / Andhra Pradesh private-school market (typically around 300–2,000 students). This is an **unfilled template**: completed customer forms and contact information must be stored securely **outside this Git repository**.

**Purpose:** identify present workflows, critical school needs, configuration, additional development, onboarding dependencies and commercial requirements **before** a quotation is issued.

## A. Meeting and school profile

| Field | Answer |
|---|---|
| Meeting date / city | __________________ |
| School name, board / affiliation | __________________ |
| Decision maker and coordinator (record privately) | __________________ |
| Campus count / academic years / academic pattern | __________________ |
| Approx. students (current / next year) | __________________ / __________________ |
| Approx. teachers / administrative staff | __________________ / __________________ |
| Grades and sections, languages of instruction | __________________ |
| Present system (paper / spreadsheets / software) | __________________ |
| School's top three pain points | 1. __________ 2. __________ 3. __________ |
| Target go-live term (requested, not committed) | __________________ |

## B. Current workflow and priority

Mark each area **Must have for launch / Important later / Not required** and add the current workflow or output required. Catalogue IDs describe *current documented capabilities*; specific fit is still verified against the demo build.

| Area | Reference | Priority | Existing school process / sample needed |
|---|---|---|---|
| Dashboard and school profile | M01 | __________ | __________ |
| Academic years, terms, classes and calendar | M02 | __________ | __________ |
| Admissions, students, guardians and enrollment | M03 | __________ | __________ |
| Teachers and dated assignments | M04 | __________ | __________ |
| Daily attendance and corrections | M05 | __________ | __________ |
| Assessments, grading, report cards and publication | M06 | __________ | __________ |
| Section timetable and teacher clashes | M07 | __________ | __________ |
| Guardian portal and family access | M08 | __________ | __________ |
| Notices and staff-assisted WhatsApp messages | M09 | __________ | __________ |
| Certificates, attendance reports and report-card PDF | M10 | __________ | __________ |
| Student Excel onboarding and validation | M11 | __________ | __________ |
| Role permissions, accounts and audit needs | M12 | __________ | __________ |

## C. Format and policy discovery

- Attendance: daily period / whole day __________; holidays __________; late / half-day / leave rules __________; correction approvals __________.
- Academic year: start/end __________; terms __________; promotion / repeat / leaving rules __________ (**bulk rollover is not in the current implemented scope**).
- Assessments: types __________; maximum/pass rules __________; grade scale __________; special reports __________; board-specific calculation or ranking __________ (**assess separately**).
- School documents: provide fictional/redacted samples of report cards, bonafide and attendance summaries; any transfer certificate request is **separate scope**.
- Timetable: day pattern __________; sections __________; teacher substitutions / rooms / auto-generation requests __________ (**additional scope where not supported**).
- Access: administrator roles __________; teacher authority __________; guardian consent and access approval process __________; record retention expectations __________.
- **Children's personal data and DPDP readiness (India):** What notices does the school provide to parents/guardians? Who determines and documents the lawful basis for each use of children's information and collects/verifies parent/guardian consent **where applicable**? Who approves access, retention/deletion, complaint handling, and any vendor data-processing agreement? School's policy and compliance reviewer __________.
  
  *Scope note:* The Digital Personal Data Protection Act, 2023 and Rules, 2025 have staged commencement and purpose-specific provisions/exemptions. Confirm applicable obligations with the school's legal/compliance adviser before launch. This questionnaire is **not** a claim that the software or school is DPDP-compliant. Official references: [DPDP Act, 2023](https://www.meity.gov.in/static/uploads/2024/02/Digital-Personal-Data-Protection-Act-2023.pdf) and [DPDP Rules, 2025](https://www.meity.gov.in/static/uploads/2025/11/53450e6e5dc0bfa85ebd78686cadad39.pdf).
- Communication: notice audience __________; WhatsApp Assist workflow __________; SMS/email/WhatsApp API automation desired? __________ (**not current automatic sending**).
- Language: English / Telugu / other __________; separate English/Telugu handout desired? __________. **Telugu PDF font availability is not equivalent to a fully translated interface.**
- Devices and connectivity: office desktop __________; teacher mobile __________; guardian access __________; expected internet reliability __________. **Current installable PWA remains online-only.**

## D. Data import and implementation readiness

| Question | School response |
|---|---|
| Current data sources / approximate volume | __________________ |
| Does the school have data ownership / export permission? | __________________ |
| Data cleansing owner and duplicate resolution | __________________ |
| Historical data needed and retention period | __________________ |
| Who approves fictional sample test migration? | __________________ |
| School coordinator and acceptance-test users | __________________ |
| Staff training needs / expected training groups | __________________ |
| Target onboarding milestones and blackout dates | __________________ |
| Hosting, domain, internet, backup and support expectations | __________________ |

**Never attach unredacted real student/guardian exports to this repository.** Obtain written agreement for any real migration, retention, hosting responsibilities and secure transfer before receiving customer data.

## E. New feature / integration requests

Record each request without promising that it exists.

| Request | Why needed / current process | Priority | Initial classification | Follow-up owner |
|---|---|---|---|---|
| __________________ | __________________ | ______ | ______ | ______ |
| __________________ | __________________ | ______ | ______ | ______ |
| __________________ | __________________ | ______ | ______ | ______ |

Allowed provisional classifications:
- **Implemented — verify:** demonstrated with the approved build and school permissions.
- **Configuration / training:** supported setup without code changes, subject to verification.
- **Customization assessment:** needs specifications, estimate and written acceptance.
- **Deferred / outside current scope:** not included in the standard deployed product.

Typical separate assessments include **fees and online payments, transfer certificates, bulk year rollover, automatic WhatsApp API/SMS/email delivery, native apps, offline mode, transport, library, hostel, payroll, inventory, school-wide SaaS and integrations**. Do not assume any are implemented.

## F. Commercial discovery (not a quotation)

- Preferred procurement / approval process: __________________
- Required modules at launch vs later phases: __________________
- Planned school budget / budget approval date (optional): __________________
- Expected hosting responsibility, domain and data controller: __________________
- Support hours, contact channels, escalation and training needs: __________________
- Commercial approach to discuss: **customized installation + one-time setup/implementation fee + annual support**, with separately quoted extra scope.
- **No quoted price, service level, delivery date or privacy/compliance guarantee is authorised by this blank template.**

## G. Post-meeting classification and next step

| Item | Recorded privately |
|---|---|
| Three highest priorities | __________________ |
| Modules shown successfully against deployed build | __________________ |
| Required configuration and school policies | __________________ |
| Customization requiring written estimate | __________________ |
| Missing format / sample / policy decisions | __________________ |
| School-side and vendor-side owners | __________________ |
| Proposal revision / sign-off contacts and dates | __________________ |

**Next steps:** provide written findings; reconcile each requirement against the [feature catalogue](../../docs/product/feature-catalogue.md) and live environment; define scope, migration, security and acceptance criteria; then issue a quotation and implementation proposal for school approval.

**Identity note:** company name, ERP product name, official logo, email, phone and website remain unapproved in the go-to-market assets. Do not invent them. A Telugu-language edition may be drafted later and should receive a separate language/meaning review before use.
