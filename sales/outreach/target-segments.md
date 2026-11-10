# Target-school segments

> **Draft — Internal review only.** GTM-OUTREACH-01. Internal planning notes, not customer research. The needs and objections below are **working assumptions** for the team to test in conversation. They are not findings, and no survey, interview or statistic supports them yet. Feature references are to the [feature catalogue](../../docs/product/feature-catalogue.md); confirm each on the deployed demo build before showing it.

## Who we approach

Private schools in Telangana and Andhra Pradesh, roughly 300–2,000 students, that run their own academic administration.

We speak to **people who can decide or recommend**: the school owner or correspondent, management committee members, the principal, and administrators the school authorises to evaluate software. Teachers and parents are users, not buyers. Do not approach them to sell.

## Segments at a glance

| | Small | Medium | Larger |
|---|---|---|---|
| Students (approx.) | 300–500 | 501–1,000 | 1,001–2,000 |
| Likely decision-maker | Owner or correspondent, often also active in daily running | Owner with principal; sometimes a management committee | Management committee or owner, with principal and senior administrator |
| Likely evaluator | Principal or office administrator | Principal and office administrator | Senior administrator, academic coordinator, sometimes an IT person |
| Best first meeting | Short visit or 8-minute demo | 8-minute demo, then 30-minute session | 30-minute session with more than one role present |
| Lead demo story | Simple setup and daily attendance | Attendance plus report-card publication | Assignments, controlled publication and access boundaries |

## Small schools (about 300–500 students)

**Possible needs to explore**

- Keep student, guardian and class records in one place instead of registers and spreadsheets.
- Know each day which classes have not completed attendance.
- Produce report cards without re-typing marks.
- Start simply, with help from people who explain each step.

**Possible objections**

- Cost and the annual support charge.
- "Our staff are not comfortable with computers."
- Internet reliability.
- "We already manage with Excel."

**Relevant current features**

| Need | Feature | Reference |
|---|---|---|
| Records in one place | Admissions, student profiles and linked guardian records | M03 01–M03 04 |
| Getting existing data in | Excel template with validation preview and duplicate warnings | M11 01–M11 05 |
| Daily attendance | Class-teacher register with draft and submit; missing-attendance report | M05 01–M05 04, M05 06 |
| Report cards | Teacher marks entry, office finalisation and term report cards | M06 02, M06 05, M06 07 |
| Phones | Works in a phone browser; installable on supported devices; online only | M12 11 |

**How to respond** — use the [objection guide](../objection-handling/common-objections.md): explain what setup and annual support cover without quoting amounts; be clear that an internet connection is required; offer to look at a sample of their spreadsheet format during requirements discussion.

## Medium schools (501–1,000 students)

**Possible needs to explore**

- More sections and teachers, so clearer responsibility for who records attendance and enters marks.
- Control over when results reach parents.
- Fewer phone calls from parents about attendance and results.
- Corrections that leave a record of what changed.

**Possible objections**

- "We already have software."
- Switching effort and staff training.
- Data migration from the current system.
- Fees not included.

**Relevant current features**

| Need | Feature | Reference |
|---|---|---|
| Clear responsibilities | Dated class-teacher and subject-teacher assignments; overview flags missing holders | M04 04–M04 06 |
| Controlled results | Finalisation, publication preview and explicit release of report cards | M06 05, M06 08 |
| Parent access | Guardian login with explicit per-child access; attendance and published report cards | M08 01–M08 07 |
| Recorded corrections | Audited attendance and result corrections | M05 05, M06 05 |
| Notices | Whole-school, class or section announcements; staff-assisted WhatsApp messages for consenting guardians | M09 01, M09 04–M09 08 |

**How to respond** — never criticise their current software. Ask what works well today and what does not. State plainly that fees and online payments are not part of the current product. Migration: Excel import covers students, guardians and placement; other data needs assessment.

## Larger schools (1,001–2,000 students)

**Possible needs to explore**

- Many sections and staff, with access that follows each person's responsibilities.
- A history of important changes and who made them.
- Timetables with fewer teacher clashes.
- Supported school documents with traceable serial numbers.
- A structured implementation with defined acceptance checks.

**Possible objections**

- Security and data protection, including DPDP questions.
- Integration with existing systems, or several campuses.
- Customisation requests.
- Service levels and uptime.

**Relevant current features**

| Need | Feature | Reference |
|---|---|---|
| Access by responsibility | Separate administrator, teacher and guardian boundaries; permission checks | M12 01, M12 02, M12 10 |
| History of changes | Security events and protection of important records; correction history | M12 08, M03 10 |
| Timetable | Section weekly grid; save-time teacher clash checks; issues report | M07 02, M07 05, M07 06 |
| Documents | Bonafide certificate, report-card PDF, attendance summary, serial numbers | M10 01–M10 04 |
| Sign-in protection | Throttling, lockout management and session time limits | M12 05, M12 06 |

**How to respond** — do not claim DPDP compliance (see the [sales FAQ](../faq/sales-faq.md)). The current product serves one school installation; several campuses and external integrations need separate discussion. Customisation goes through a written change request. Service levels are not decided and must not be quoted.

## Boundaries to state in every segment

From the catalogue's "Current boundaries and future requests": fees and online payments, transfer certificates, bulk academic-year rollover, automatic WhatsApp/SMS/email sending, native mobile apps, offline working, student portal, transport/library/hostel/payroll/inventory, multi-school SaaS, external integrations and ranks/GPA/board-specific rules are **not** in the current product. Record such requests in section E of the [requirements capture sheet](../proposals/school-requirements-capture.md) without promising them.

## Testing these assumptions

After each conversation, the owner of the lead notes (outside Git) which assumed needs and objections came up. Once there is enough real feedback, revise this file and remove assumptions that did not hold. Do not add numbers or quotes from schools to this repository.
