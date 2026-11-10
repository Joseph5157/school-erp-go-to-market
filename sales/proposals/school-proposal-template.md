# School ERP — School Proposal Template

> **Draft — Internal review only.** Blank template. Do not send to a school until the owner approves the template, pricing, company identity and terms. Completed proposals contain school information and must be stored securely **outside this Git repository**.

**How to use:** replace every `{{PLACEHOLDER}}`, delete the guidance lines in *italics*, and remove any section that does not apply. Keep the component codes **C1–C7** and catalogue references (for example M05 03) exactly as written so the proposal, [quotation](quotation-template.md), [implementation scope](implementation-scope-template.md) and [annual support terms](annual-support-template.md) stay aligned. Pricing method: see the internal [pricing framework](../pricing/pricing-framework.md).

---

**Proposal for:** {{SCHOOL_NAME}}, {{SCHOOL_CITY}}
**Prepared by:** {{VENDOR_LEGAL_NAME}} *(company name not yet approved; do not invent)*
**Product:** School ERP *(temporary working name)*, version {{PRODUCT_VERSION}}
**Proposal reference:** {{PROPOSAL_REF}} **Date:** {{DATE}} **Revision:** {{REVISION}}
**Related quotation:** {{QUOTATION_REF}}
**Valid until:** {{VALIDITY_DATE}} *(validity period to be approved)*

---

## 1. Executive summary

*Three to five sentences. State the school's goals in its own words, what will be installed, and how the engagement is structured. Do not promise dates or outcomes.*

{{SCHOOL_NAME}} wants to {{SCHOOL_GOAL_SUMMARY}}. We propose a customized installation of School ERP for {{SCHOOL_NAME}}, configured for the school's academic structure, attendance, assessment and communication practices. The engagement has a one-time setup and implementation stage, followed by annual support and maintenance. Hosting and infrastructure are shown separately, and any additional development is quoted only after a written specification.

## 2. School requirements

*Summarise the completed [requirements capture sheet](school-requirements-capture.md). Use catalogue references.*

| Area | Catalogue reference | Priority (Must have / Later / Not required) | Classification |
|---|---|---|---|
| {{AREA}} | {{M_REF}} | {{PRIORITY}} | {{CLASSIFICATION}} |

Classification uses the same four values as the requirements capture sheet:

- **Implemented — verify:** demonstrated on the deployed build with the school's permissions.
- **Configuration / training:** supported setup without code changes.
- **Customization assessment:** needs a written specification and estimate (C6).
- **Outside current scope:** not included in this proposal.

Approximate size: {{STUDENT_COUNT}} students, {{TEACHER_COUNT}} teachers, {{ADMIN_USER_COUNT}} administrative users, {{SECTION_COUNT}} sections.

## 3. Current challenges

*Use the school's own words from discovery. Do not exaggerate.*

1. {{CHALLENGE_1}}
2. {{CHALLENGE_2}}
3. {{CHALLENGE_3}}

## 4. Proposed solution

A school-specific installation of School ERP, used through a web browser by:

- **Administrators** — school setup, admissions, enrollment, teacher assignments, attendance review, assessments, report cards, notices, documents and account management, within their assigned permissions.
- **Teachers** — attendance for their assigned class, marks entry within their assignments, term remarks and their daily view.
- **Guardians** — their own children's submitted attendance, released report cards and relevant notices, after the school grants access.

The installation serves **one school**. It is not a shared multi-school subscription service. On supported phones it can be added to the home screen, but it needs an internet connection; it is not a native mobile application and does not work offline.

## 5. Included modules

*Keep only the modules the school needs. Wording follows the [feature catalogue](../../docs/product/feature-catalogue.md); do not add capabilities that are not in it.*

| Ref | Module | Included |
|---|---|---|
| M01 | Dashboard and school setup | {{YES_NO}} |
| M02 | Academic structure and calendar | {{YES_NO}} |
| M03 | Admissions and student records | {{YES_NO}} |
| M04 | Teacher accounts and assignments | {{YES_NO}} |
| M05 | Attendance management | {{YES_NO}} |
| M06 | Assessments and report cards | {{YES_NO}} |
| M07 | Timetable management | {{YES_NO}} |
| M08 | Guardian portal and family access | {{YES_NO}} |
| M09 | Announcements and communication (portal notices and staff-assisted WhatsApp messages) | {{YES_NO}} |
| M10 | School documents (bonafide certificate, report card PDF, attendance summary) | {{YES_NO}} |
| M11 | Excel import and onboarding | {{YES_NO}} |
| M12 | Access control and audit | Always included |

## 6. School-specific configuration

*Configuration uses existing product settings. Anything needing code changes moves to section 10 or to a C6 estimate.*

| Item | School decision |
|---|---|
| Academic year dates and terms | {{ACADEMIC_YEAR_TERMS}} |
| Classes/Grades, sections and subjects offered | {{STRUCTURE_SUMMARY}} |
| Weekly pattern, Saturdays, holidays | {{CALENDAR_SUMMARY}} |
| Grading scales and pass marks | {{GRADING_SUMMARY}} |
| Report card term remarks and publication approver | {{REPORT_CARD_APPROVER}} |
| Timetable periods (if used) | {{TIMETABLE_SUMMARY}} |
| Administrator roles and permissions | {{ROLES_SUMMARY}} |
| Guardian access approval process | {{GUARDIAN_ACCESS_PROCESS}} |
| Communication mode (portal only / staff-assisted WhatsApp) | {{COMMUNICATION_MODE}} |
| Document letterhead text (school name, address, affiliation) | {{LETTERHEAD_TEXT}} |

## 7. Implementation approach

*Stages only. Target dates, if any, are agreed in the [implementation scope](implementation-scope-template.md) and depend on the school's dependencies; they are not commitments.*

| Stage | Description | Main dependency |
|---|---|---|
| 1. Requirements confirmation | Confirm scope, formats and policies | School decision makers available |
| 2. Installation and configuration (C1) | Set up the school's installation and settings | Hosting arrangement agreed (C5) |
| 3. Initial data migration (C2) | Template, cleansing support, trial import, final import | School provides data with export permission |
| 4. Training and onboarding (C3) | Role-based sessions | Staff availability |
| 5. Acceptance testing | Role-by-role checks on the deployed build | School test users and sign-off owner |
| 6. Go-live | School starts daily use | Acceptance signed off |
| 7. Annual support and maintenance (C4) | Support and maintenance begin | Support terms agreed |

## 8. Training and onboarding

| Group | Topics | Format | Sessions |
|---|---|---|---|
| Administrators | Setup, admissions, attendance review, assessments, report cards, notices, documents, accounts | {{ON_SITE_OR_REMOTE}} | {{SESSION_COUNT}} |
| Teachers | Signing in, My day, attendance, marks entry, term remarks | {{ON_SITE_OR_REMOTE}} | {{SESSION_COUNT}} |
| Guardian access | Briefing material for the school to share with families | Document | — |

Training uses fictional or test records unless the school agrees otherwise in writing.

## 9. Hosting responsibilities

*Choose one arrangement. Keep C5 as a separate quotation line in every case.*

- [ ] **Vendor-managed hosting:** {{VENDOR_LEGAL_NAME}} arranges and administers the hosting account and backups. Provider charges are shown in C5.
- [ ] **School-managed hosting:** the school holds the hosting account and pays the provider directly. Those provider charges are **not** invoiced by the vendor or included in C5; C5 then covers only vendor administration effort, if requested.
- [ ] **Other:** {{HOSTING_ARRANGEMENT}}

| Responsibility | Owner |
|---|---|
| Hosting account holder | {{OWNER}} |
| Domain name and certificate | {{OWNER}} |
| Backups: method, frequency, retention | {{OWNER}} — details pending approval |
| Restoration procedure and testing | {{OWNER}} — no restoration commitment until approved |
| School internet access and devices | School |
| Decisions about student and guardian data | School *(legal roles to be confirmed by legal advisers)* |

## 10. Scope exclusions

The following are **not included** in this proposal and are not implemented in the current product:

- Fees, fee receipts and online payment collection
- Transfer certificates (pending an agreed school format)
- Native Android or iOS applications, student login and offline use
- Automatic WhatsApp API, SMS or email sending (current messaging is staff-assisted)
- Bulk academic-year rollover (placements are changed per student)
- Multi-school or multi-campus SaaS operation and external system integrations
- Transport, library, hostel, payroll, HR and inventory
- Ranks, GPA, weighting and board-specific calculation rules
- Telugu user interface (PDFs include Telugu fonts; the interface is in English)
- {{ADDITIONAL_EXCLUSIONS}}

Any of these can be raised as a change request and assessed separately (C6). Raising a request does not mean it will be delivered.

## 11. Acceptance criteria

Acceptance is based on the agreed scope, tested on the **deployed build** the school will use, following the [onboarding and acceptance checks](../../docs/implementation/onboarding-acceptance.md) and section 6 of the implementation scope:

1. Configuration in section 6 matches the school's approved lists.
2. Each included module in section 5 passes its role-by-role checks with test records.
3. Migrated data passes the agreed verification checks.
4. Agreed training sessions are completed.
5. The school's sign-off owner records acceptance in writing: {{ACCEPTANCE_SIGNATORY_ROLE}}.

Items outside the agreed scope are not acceptance criteria.

## 12. Commercial summary

*Amounts come only from the approved quotation {{QUOTATION_REF}}. Do not write amounts here that differ from the quotation.*

| Code | Component | Type | Amount |
|---|---|---|---|
| C1 | One-time setup and implementation | One-time | See quotation |
| C2 | Initial data migration | One-time | See quotation |
| C3 | Training and onboarding | One-time | See quotation |
| C4 | Annual support and maintenance | Per year | See quotation |
| C5 | Hosting and infrastructure (including backups) | Recurring | See quotation |
| C6 | Optional customization | Per approved change | Quoted separately |
| C7 | Applicable taxes | Per invoice | To be confirmed |

Payment milestones, validity and terms: as stated in the quotation, once approved.

**Pending commercial and legal approval** (not offered by this proposal until approved and written into a signed agreement):

- Software licensing and permitted use. The proposed commercial model does not include transfer of software or source-code ownership, subject to final licensing terms and approval.
- Data-processing terms, including roles and responsibilities under the Digital Personal Data Protection Act, 2023 and applicable Rules. This proposal does not claim that the software or the school is compliant.
- Limitation of liability, warranties and indemnities.
- Exit, data export and handover arrangements.
- Service levels, support hours, response times and availability targets.

## 13. Next steps

1. School reviews this proposal and the quotation, and sends questions or corrections.
2. Both parties confirm scope, exclusions and the hosting arrangement.
3. Commercial and legal terms are finalised in a written agreement.
4. School confirms its coordinator, data owner and acceptance signatory.
5. Implementation scope and stage plan are agreed, then work begins.

**Contact:** {{VENDOR_CONTACT_ROLE}}, {{VENDOR_CONTACT_DETAILS}} *(contact details not yet approved)*
