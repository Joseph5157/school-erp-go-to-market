# School ERP Feature Catalogue

Status: **Draft**. Imported from catalogue v1.0 (baseline `b800676`) and retained as a traceable feature inventory. Recheck every client-facing claim against the deployed demo build before publication.

For school management office staff and the academic evaluation team.

This catalogue describes the current demonstration product across 12 areas. Access depends on permissions and current assignments. School specific policy, document layouts and delivery requirements are confirmed during requirements assessment.

See [`../../diagrams/svg/01_Product_Map.svg`](../../diagrams/svg/01_Product_Map.svg) for the editable product map.

| **Role**      | **Typical work**                                            | **Access boundary**                          |
|---------------|-------------------------------------------------------------|----------------------------------------------|
| Administrator | Setup admissions review publishing and account management   | Only actions allowed by assigned permissions |
| Teacher       | Assigned class attendance marks remarks and student views   | Assignment and date dependent                |
| Guardian      | Own child's attendance, released results and relevant notices | Explicit child access grant required         |

Feature references use the module ID and item number, for example M05 03. Use these references in the requirements assessment and proposal. A catalogue item is a documented capability, not a separately priced module.

# Product areas 1 and 2

## M01 Dashboard and school setup

A clear starting point for daily school administration.

*Users Office administrators*

M01 01 Operational overview with attention items and setup progress.

M01 02 School at a glance statistics for students teachers classes and guardian access.

M01 03 Attendance today indicator when reportable data is available.

M01 04 School name address affiliation number and principal details.

M01 05 School logo upload and removal for the signed in interface.

M01 06 Academic year context and navigation between supported year pages.

M01 07 Navigation and actions displayed according to account permissions.

M01 08 Direct links from the overview to relevant operational work.

## M02 Academic structure and calendar

Organize the academic year before daily work begins.

*Users Office administrators*

M02 01 Academic years with validated start and end dates.

M02 02 Class and section records for academic placement.

M02 03 Subject records and offerings scoped to an academic year.

M02 04 Section restrictions on subject offerings where required.

M02 05 Ordered academic terms within an academic year.

M02 06 Instructional weekly pattern with configurable Saturdays.

M02 07 Holiday closures and additional instructional date exceptions.

M02 08 Calendar safeguards where attendance already exists.

# Product areas 3 and 4

## M03 Admissions and student records

Carry an applicant through an explicit admission and enrollment journey.

*Users Office administrators*

M03 01 Applicant registration with linked guardian relationships.

M03 02 Explicit acceptance or rejection of an application.

M03 03 Separate conversion of an accepted applicant into a student.

M03 04 Student profile and linked guardian contact records.

M03 05 Admission number and enrollment specific roll number workflows.

M03 06 Dated academic enrollment with class and section validation.

M03 07 Preserved placement history and prevention of overlapping enrollments.

M03 08 Active and inactive student status workflows.

M03 09 Student and guardian search with family relationship context.

## M04 Teacher accounts and assignments

Give each teacher access that follows their teaching responsibilities.

*Users Office administrators and assigned teachers*

M04 01 Teacher account creation with a temporary credential slip.

M04 02 Administrator password reset and username change workflows.

M04 03 Teacher account deactivation and reactivation.

M04 04 Dated class teacher assignments with handover history.

M04 05 Dated subject teacher assignments by offering and section.

M04 06 Assignment overview with missing or inactive holders flagged.

M04 07 Per teacher assignment load and preview of assignment copying.

M04 08 Teacher home with assigned students attendance results and daily periods.

# Product areas 5 and 6

## M05 Attendance management

Record attendance and see the difference between absence and missing records.

*Users Office administrators and authorized class teachers*

M05 01 Daily section register with a date effective student roster.

M05 02 Present and Absent recording with optional absence notes.

M05 03 Draft register and complete roster submission workflow.

M05 04 Teacher capture of attendance for their assigned class on the business date.

M05 05 Audited administrator corrections to submitted attendance.

M05 06 Daily absentee and missing attendance reports.

M05 07 Monthly section summary and student attendance history.

M05 08 Attendance percentages based on submitted eligible records.

M05 09 Calendar and enrollment rules that keep non eligible dates neutral.

## M06 Assessments and report cards

Control marks entry approval and release to families.

*Users Office administrators assigned teachers and authorized guardians*

M06 01 Subject assessments with date section maximum marks and optional pass mark.

M06 02 Teacher gradebook and marks entry within assignment permissions.

M06 03 Distinct Marked Absent and missing result states.

M06 04 Grading scales and grade bands frozen when an assessment is finalized.

M06 05 Administrator finalization and audited result corrections.

M06 06 Assessment result sheets student history and subject section reports.

M06 07 Class teacher term remarks and term report cards.

M06 08 Publication preview and explicit release of frozen report card snapshots.

M06 09 Withdrawal and stale publication handling after relevant corrections.

# Product areas 7 and 8

## M07 Timetable management

Maintain weekly section schedules and identify teacher clashes.

*Users Office administrators and assigned teachers*

M07 01 Academic year period definitions with display sequence.

M07 02 Section weekly grid for subject slots.

M07 03 Dated slot creation change end and permitted deletion.

M07 04 Teacher derivation from dated subject assignment records.

M07 05 Save time checks for known teacher clashes in the same period and weekday.

M07 06 Issues report for clashes that can arise after assignment changes.

M07 07 Date based inspection of the section timetable.

M07 08 Teachers own periods on Today when the school calendar permits.

## M08 Guardian portal and family access

Give families access to information for their own children.

*Users Authorized guardians and office administrators*

M08 01 Administrator created guardian login with forced initial password change.

M08 02 One guardian account linked to multiple children where approved.

M08 03 Explicit per relationship child access grants and revocation.

M08 04 Child profile with approved student and placement information.

M08 05 Submitted attendance summary and monthly calendar.

M08 06 Published term report cards grouped for readable academic history.

M08 07 Download of the childs current eligible published report card PDF.

M08 08 School notices relevant to the childs current audience.

M08 09 Guardian access review following placement or student status changes.

# Product areas 9 and 10

## M09 Announcements and communication

Publish notices and manage consent based messages with staff control.

*Users Office administrators and authorized guardians*

M09 01 Whole school class or section announcement audiences.

M09 02 Guardian portal notice list and notice detail.

M09 03 Withdrawal of a published notice with a recorded reason.

M09 04 Append only guardian WhatsApp consent records.

M09 05 Portal only or staff assisted WhatsApp communication mode.

M09 06 Same day absence alerts and report card publication notices for eligible guardians.

M09 07 Announcement recipient preview and explicit message preparation.

M09 08 Message queue with prefilled WhatsApp links and staff sent or dismissed tracking.

M09 09 Consent rechecks and duplicate preparation protection.

## M10 School documents

Issue supported PDFs with traceable serial numbers and stored content.

*Users Office administrators and authorized guardians*

M10 01 Bonafide certificate with enrollment validation and purpose.

M10 02 Report card PDF from an eligible immutable publication.

M10 03 Attendance summary for a section and date range.

M10 04 Serial numbers allocated by document type and academic year.

M10 05 Stored document content and school text letterhead snapshot.

M10 06 Reprints from the stored snapshot without issuing a second record.

M10 07 Document issue and download security events.

M10 08 Bundled Latin and Telugu fonts in the PDF rendering engine.

# Product areas 11 and 12

## M11 Excel import and onboarding

Review spreadsheet data before creating school records.

*Users Authorized office administrators*

M11 01 Downloadable Excel import template.

M11 02 Students sheet with an optional Classes sheet.

M11 03 Student guardian class section and enrollment creation through approved workflows.

M11 04 Validation preview before confirmation.

M11 05 Possible duplicate shared phone and contact warnings for review.

M11 06 Row and column problem messages with CSV download.

M11 07 Atomic commit with current data revalidation.

M11 08 Batch history discard and expiry of stored parsed rows.

## M12 Access control and audit

Protect account access and preserve the history of important actions.

*Users Administrators teachers and guardians within their permissions*

M12 01 Separate administrator teacher and guardian access boundaries.

M12 02 Permission checks for protected administrative operations.

M12 03 Normalized usernames and generic sign in errors.

M12 04 Temporary passwords and required password change workflows.

M12 05 Sign in throttling and administrator lockout management.

M12 06 Server enforced idle and absolute session time limits.

M12 07 Account changes that invalidate existing sessions where required.

M12 08 Security events and historical protection for important operational records.

# Current boundaries and future requests

The following requests need a separate decision, estimate or implementation. An optional request does not imply that the feature is available today or included in a standard proposal.

| **Requested area**                             | **Current position**             | **What must be agreed**                                                              |
|------------------------------------------------|----------------------------------|--------------------------------------------------------------------------------------|
| Fees and online payments                       | Deferred                         | Financial scope payment correction and receipt rules require agreement               |
| Student portal, native mobile app and offline workflow | Future scope              | The current PWA is installable but online-only; separate access and product decisions are required |
| Academic year bulk rollover                    | Planning only                    | Promotion repeat graduate leave and hold workflow awaits its implementation gates    |
| Transfer Certificate                           | Pending school format            | Mandatory fields and approved certificate layout must be agreed                      |
| Automatic WhatsApp API email or SMS delivery   | Future integration               | Provider setup consent delivery records and operating costs require a separate scope |
| Transport library hostel payroll and inventory | Outside current scope            | Assess each requested module before estimating                                       |
| Multi school SaaS and external integrations    | Outside current product          | Current product serves one school installation                                       |
| Rank GPA weighting and board specific rules    | Outside current assessment scope | Requires a separate assessment policy decision                                       |

## Specific interpretation notes

- Teacher load means assignment coverage. Staff payroll HR and completed teaching hours are separate requirements.

- Timetable clashes concern the same academic year period and weekday with overlapping effective dates. Automatic scheduling rooms substitutions and special days are outside the current scope.

- PDF Latin and Telugu font support does not establish a Telugu interface or multilingual student name support. The current student name validation accepts English printable characters.

- School logo display in the signed in interface does not establish logo printing in document letterheads. PDF letterheads currently store school text details.

# Feature evidence and document control

Catalogue source version 1.0. Reviewed 29 October 2026. Baseline `b800676`. Imported into the go-to-market repository on 9 November 2026 as a Draft. Sources below link to the reviewed commit so the catalogue can be rechecked when the product changes.

[Product scope and timetable boundary](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/docs/PRODUCT.md)

[Administrator and teacher feature routes](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/urls.py)

[Guardian portal routes and access](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/portal_urls.py)

[Guardian portal behavior](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/portal_views.py)

[Communication documents and import implementation notes](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/docs/PHASE_7_COMMUNICATION_DOCUMENTS_IMPORT_PLAN.md)

[WhatsApp Assist consent and delivery behavior](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/notifications.py)

[Teacher timetable clash rules](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/timetable.py)

[Issued document snapshots and audit](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/core/documents/service.py)

[Account sessions and forced password change](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/accounts/middleware.py)

[Session limits and environment controlled HTTPS settings](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/config/settings.py)

[Planned academic year rollover](https://github.com/Joseph5157/school-erp/blob/b8006760fafbcc947df4250f2943f6c7c18d7017/docs/ACADEMIC_YEAR_ROLLOVER_PLAN.md)

## Updates for a school proposal

Record the target product version and each agreed exception in the requirements assessment. Scope acceptance testing against the actual deployed build. Avoid using route counts, test counts or an old release ledger as a substitute for an agreed school workflow.
