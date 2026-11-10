# School ERP — Implementation Scope Template

> **Draft — Internal review only.** Blank template. No delivery dates, warranties or service commitments are offered by this document. Completed scope documents contain school information and must be stored securely **outside this Git repository**.

**How to use:** attach to the [school proposal](school-proposal-template.md) and [quotation](quotation-template.md) with the same references. Component codes **C1–C7** match those documents. Technical steps are in the [Implementation Guide](../../docs/implementation/index.md).

| Field | Value |
|---|---|
| School | {{SCHOOL_NAME}} |
| Vendor | {{VENDOR_LEGAL_NAME}} *(not yet approved)* |
| Proposal / quotation | {{PROPOSAL_REF}} / {{QUOTATION_REF}} |
| Product version for acceptance | {{PRODUCT_VERSION}} |
| Scope revision and date | {{REVISION}} / {{DATE}} |

## 1. Deliverables

| # | Deliverable | Component | Evidence of completion |
|---|---|---|---|
| D1 | School-specific installation on the agreed hosting arrangement | C1, C5 | Signed-in access for the school's named administrators |
| D2 | School profile, academic year, calendar, classes/grades, sections, subjects offered and terms configured | C1 | School confirms against its approved lists |
| D3 | Grading scales, report card term structure and publication approver configured | C1 | Configuration review with the school |
| D4 | Administrator and teacher accounts provisioned with agreed permissions and assignments | C1 | Account list confirmed by the school (stored privately) |
| D5 | Timetable periods configured (if in scope) | C1 | School confirms |
| D6 | Document letterhead text configured for bonafide certificate, report card PDF and attendance summary | C1 | Test document reviewed |
| D7 | Initial data migration per section 4 | C2 | Import verification record |
| D8 | Training sessions per section 5 | C3 | Record of sessions held |
| D9 | Acceptance testing support per section 6 | C1 | Signed acceptance record |
| D10 | Approved customization items (if any), each with its own specification | C6 | Separate acceptance per item |

Only deliverables listed here are in scope. Modules and configuration follow proposal sections 5 and 6.

## 2. School responsibilities

The school is responsible for:

- Naming a **coordinator**, a **data owner** and an **acceptance signatory**, and making them available.
- Providing approved lists: classes/grades, sections, subjects, terms, holidays, grading rules and timetable periods.
- Providing student and guardian data in the agreed template, with permission to share it, by secure transfer only.
- Cleansing data and resolving duplicates identified during the trial import.
- Deciding policies: report card publication approval, guardian access approval, communication mode, retention and correction approvals.
- Providing fictional or redacted samples of required document formats.
- Making staff available for training and acceptance testing.
- Providing internet access and suitable devices for staff.
- Notices to parents and guardians, and decisions about how student and guardian data is used, with its own legal or compliance adviser.
- Reporting issues found during acceptance in writing.

## 3. Vendor responsibilities

{{VENDOR_LEGAL_NAME}} is responsible for:

- Installing and configuring the school's installation (C1) on the agreed hosting arrangement (C5).
- Providing the Excel import template and supporting the trial and final imports (C2).
- Delivering the agreed training sessions and briefing material (C3).
- Supporting acceptance testing and correcting defects in delivered scope found during acceptance.
- Handling school data only as agreed in writing, and keeping it out of shared repositories, chat groups and uncontrolled drives.
- Recording the deployed product version used for acceptance.
- Raising any request outside this scope through the change-request procedure (section 7).

## 4. Data migration assumptions

| Assumption | Value |
|---|---|
| Records to migrate | Students, guardians, guardian relationships, class/section placement for the current academic year *(edit as agreed)* |
| Source format | The product's Excel import template (Students sheet, optional Classes sheet) |
| Approximate volume | {{STUDENT_COUNT}} students, {{GUARDIAN_COUNT}} guardians |
| Historical data | Not migrated unless listed here: {{HISTORICAL_DATA_SCOPE}} |
| Attendance, marks and past report cards | Not migrated unless separately agreed and estimated |
| Number of trial imports included | {{TRIAL_IMPORT_COUNT}} |
| Cleansing | School-owned; vendor highlights validation problems and possible duplicates |
| Transfer and storage | Secure method agreed in writing: {{TRANSFER_METHOD}} |
| Copies held by vendor after import | {{RETENTION_DECISION}} *(pending data-processing terms)* |

The import checks the whole file and shows a preview before anything is created. If the file has any errors, nothing is imported; the workbook is corrected at source and uploaded again. A checked file is imported in one step only when an administrator confirms it. Additional trial imports beyond those included, or data in other formats, are change requests.

## 5. Training arrangements

| Group | Topics | Format | Sessions | Participants |
|---|---|---|---|---|
| Administrators | Setup, admissions, enrollment, attendance review, assessments, report cards, notices, documents, accounts and lockouts | {{ON_SITE_OR_REMOTE}} | {{N}} | {{N}} |
| Teachers | Signing in, My day, attendance, marks entry, term remarks | {{ON_SITE_OR_REMOTE}} | {{N}} | {{N}} |
| Guardian access | Briefing material for the school to share with families | Document | — | — |

Training uses test records. Additional or repeat sessions are quoted separately under C3.

## 6. Acceptance testing

1. Testing is done on the **deployed build** recorded above, using the [onboarding and acceptance checks](../../docs/implementation/onboarding-acceptance.md) for the included modules.
2. Write actions (publishing, withdrawing, correcting) use clearly labelled test records unless the school agrees otherwise.
3. The school records the result of each check, the date and the participants in its acceptance record, stored outside this repository.
4. A failed check is classified as:
   - **Defect in delivered scope** — vendor corrects it and the check is repeated.
   - **Configuration change** — handled within C1 if it matches the agreed lists.
   - **New requirement** — handled as a change request (section 7).
5. Acceptance period after the vendor declares readiness: {{ACCEPTANCE_PERIOD}} *(to be agreed)*.
6. Acceptance is complete when the acceptance signatory signs the acceptance record.

## 7. Change-request procedure

1. The school submits the request in writing, with the reason and the current process.
2. The vendor classifies it: configuration within scope, or customization (C6).
3. For C6, the vendor prepares a written specification, estimate and any impact on the stage plan.
4. Nothing is built until the school approves the specification and estimate in writing.
5. Approved items get their own acceptance check.
6. Requests in the excluded features list (section 8) are assessed the same way; assessment does not mean the request will be delivered.

| CR ref | Request | Classification | Estimate ref | School approval | Status |
|---|---|---|---|---|---|
| {{CR_REF}} | {{REQUEST}} | {{CLASSIFICATION}} | {{ESTIMATE_REF}} | {{APPROVED_BY_DATE}} | {{STATUS}} |

## 8. Excluded features

Not in scope and not implemented in the current product: fees and online payments; transfer certificates; native mobile apps, student login and offline use; automatic WhatsApp API, SMS or email sending; bulk academic-year rollover; multi-school SaaS and external integrations; transport, library, hostel, payroll, HR and inventory; ranks, GPA, weighting and board-specific rules; Telugu user interface. Additional school-specific exclusions: {{ADDITIONAL_EXCLUSIONS}}.

## 9. School-specific dependencies

| Dependency | Owner | Needed before | Status |
|---|---|---|---|
| Hosting arrangement and account (C5) | {{OWNER}} | Installation | {{STATUS}} |
| Domain name decision | {{OWNER}} | Installation | {{STATUS}} |
| Approved academic structure and calendar | School | Configuration | {{STATUS}} |
| Grading rules and report card approver | School | Configuration | {{STATUS}} |
| Document format samples (fictional or redacted) | School | Document setup | {{STATUS}} |
| Data in agreed template with export permission | School | Data migration | {{STATUS}} |
| Staff availability for training | School | Training | {{STATUS}} |
| Acceptance signatory available | School | Acceptance | {{STATUS}} |
| Signed agreement covering pending terms | Both | Receiving real data | {{STATUS}} |

## 10. Stage plan

*Target dates are optional, are set only after dependencies are confirmed, and are not commitments. Leave blank until both parties agree.*

| Stage | Target (not a commitment) | Dependency met? |
|---|---|---|
| Requirements confirmation | ______ | ______ |
| Installation and configuration (C1) | ______ | ______ |
| Initial data migration (C2) | ______ | ______ |
| Training and onboarding (C3) | ______ | ______ |
| Acceptance testing | ______ | ______ |
| Go-live | ______ | ______ |
| Annual support and maintenance starts (C4) | ______ | ______ |

## 11. Pending terms

Warranties, defect-correction periods after go-live, service levels, data-processing terms, licensing, liability and exit arrangements are **pending commercial and legal approval** and are not offered by this document.
