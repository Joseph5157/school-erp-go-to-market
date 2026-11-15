# Everclass ERP — Pre-Demo Readiness Checklist

**Status: Draft.** Internal operator runbook. Use only fictional records. Do not publish account identifiers, credentials, private contact data or staging URLs in this repository.

**Companion documents:** [30-minute live demo](../presenter-scripts/live-demo-30-minute.md) · [8-minute executive walkthrough](../presenter-scripts/executive-demo-8-minute.md) · [school requirements form](../../sales/proposals/school-requirements-capture.md) · [feature catalogue](../../docs/product/feature-catalogue.md).

## 1. Session record (complete privately, outside Git)

| Field | Value to record in private meeting notes |
|---|---|
| School / meeting / presenter | __________________ |
| Date, time, business date, timezone | __________________ (use Asia/Kolkata for India) |
| Target staging URL / deployed build or commit | __________________ |
| School demo record / academic year / term | __________________ |
| Administrator / Teacher / Guardian account **reference** | __________________ (private vault only; no credentials in this file) |
| Demo student's fictional record reference | __________________ |
| Primary 8-minute / full 30-minute / fallback presentation | __________________ |
| Owner of environment reset and final sign-off | __________________ |

Do not paste completed customer information or private account references into Git, issue comments, meeting recordings or screenshot filenames.

## 2. Known staging baseline — verify before every meeting

The **26 October 2026 demo-school setup** was reported to contain **110 students, 10 teachers, Term 1, a school logo, a timetable and announcements**. This is a **historical preparation baseline, not a live validation or guarantee that those records are still present**.

- [ ] Staging is reachable over HTTPS and the deployed build is identified; do not confuse staging with production.
- [ ] Confirm school profile and logo, selected academic year, **Term 1** and business date shown in the application.
- [ ] Confirm current student and teacher counts; note differences from the 110 / 10 historical snapshot without forcing the counts back.
- [ ] Check at least one active class / section and effective class-teacher and subject-teacher assignments for the selected year.
- [ ] Confirm an existing **fictional** applicant-to-student story and an authorised guardian relationship. The 30-minute script's "Aarav Demo / Grade 6 A" is an **example**; use it only if those exact records exist. Otherwise update private presenter cues to match available fictional data.
- [ ] Confirm one suitable weekly timetable and one eligible announcement for the selected role / section.
- [ ] Confirm an existing submitted attendance example, complete assessment, and eligible published report card. If any are missing, mark the respective step **show only / skip / fallback**; never manufacture a successful result in front of a client.
- [ ] Check that all email addresses and phone numbers in potentially visible records are controlled test destinations or non-deliverable fictional values.
- [ ] Confirm enough browser viewport size and readable UI in the actual presentation resolution.

### Reported demo-data issues (as of 26 October 2026; recheck current staging)

- Grades 1–2 timetables were reportedly only about 40% populated. Prefer a **verified Grade 6–10** section with a complete timetable; do not imply all sections are filled.
- An announcement headed **“Term 2 begins on Monday”** reportedly did not match the actual Term 2 start date. Verify the current calendar and message content; do not display an incorrect announcement as an authoritative school notice.
- All four announcements reportedly shared one timestamp. Treat dates as demo-data quality issues until verified, and avoid promising realistic notification chronology based on those records.
- These are **historical observations**, not fresh findings. Log any current mismatches privately and repair them only through an authorised demo-data maintenance task.

## 3. Accounts, privacy and screen sharing

- [ ] Verify an **Administrator** role with the precise permissions needed for the screens; check dashboard, student profile, attendance review, assessment finalisation/publication, announcements, documents, timetable and Excel import preview.
- [ ] Verify a **Teacher** with a current effective class or subject assignment; check desktop **My day** (phone **Today**), My Students, Attendance, Gradebook and, if applicable, remarks. A teacher cannot act merely because they were assigned in another academic year.
- [ ] Verify a **Guardian** with explicit current portal access to the intended fictional child; check child card, eligible attendance, published report card and announcement. A link without portal access is not sufficient.
- [ ] Use distinct browser profiles or isolated sessions for Admin, Teacher and Guardian; pre-test role switches without stale-session confusion.
- [ ] Handle passwords, recovery, temporary credential slips, lockouts and browser autofill in a private password vault or operator-only notes, **not** in this repo, slide, browser shared area or recording.
- [ ] Close sensitive tabs and notifications; turn off browser password prompts; hide bookmarks, personal accounts and desktop notifications.
- [ ] Do **not** show unmasked personal contact information, guardian messages, account reset flows, security secrets, real school data or administrative setup secrets.

## 4. Rehearse screens in presentation order

| Sequence | Role | Screen / evidence | Pass condition | Safe fallback |
|---|---|---|---|---|
| 1 | Admin | Overview, school name / year / dashboard | Counts and academic context visible | Explain using a prepared fictional screenshot |
| 2 | Admin | Applicant → accepted student → enrollment history | Fictional linked record and authorised view | Show existing student record only |
| 3 | Teacher | Desktop **My day** / assigned class | Relevant current assignment and periods | Show My Students or explain assignment boundary |
| 4 | Teacher | Attendance | Eligible school day with correct roster; **do not edit** without reset permission | Show an earlier submitted register and monthly summary |
| 5 | Teacher | Assessment / gradebook | Matching subject and effective assignment; complete sample results | Read-only assessment example |
| 6 | Admin | Assessment review → publication preview | All required term data complete; publication eligible | Show an already published fictional report |
| 7 | Guardian | Child card / attendance / published report / PDF | Current authorised access; released snapshot exists | Show prepared fictional PDF or omit unavailable step |
| 8 | Admin / Guardian | Announcement / WhatsApp Assist | Audience matches selected child; only controlled test contacts | Show unsent preview; never actually dispatch |
| 9 | Admin | Timetable / issues | Weekly grid and known test conflict checks available | Show the existing weekly timetable without editing |
| 10 | Admin | Excel import preview / school PDFs | Prepared **fictional** input validation and supported document | Show an existing validation preview / issued sample only |
| 11 | Presenter | Requirements worksheet | Local blank copy ready without recording real data to Git | Read questions aloud and record privately |

The 8-minute presentation is a **read-only executive path**. Use the 30-minute presenter script only when the operator has rehearsed each intended change and identified a rollback/reset method.

## 5. Safety gates for demonstration actions

- [ ] Prefer read-only screens; no demonstration should create real recipients, send messages or expose unpublished student marks to a guardian.
- [ ] For a writable attendance or gradebook example, confirm correct year, academic day, permissions, section, and an intentionally disposable fictional record **before editing**.
- [ ] Do not alter the server clock, bypass attendance validation, overwrite submitted records or force finalisation/publication just to make a demo pass.
- [ ] Do not confirm Excel import batches, create new accounts, issue documents or publish announcements unless a specifically approved disposable case has a documented reset plan.
- [ ] Keep WhatsApp links in preview; no real send or provider-confirmed delivery claims.
- [ ] Use "installable on supported devices, online-only" for PWA. Do not demonstrate or promise offline use, push, native apps, automatic WhatsApp API sends, fee collection, bulk rollover or other deferred capabilities.
- [ ] Never imply that a school logo in the signed-in interface appears on PDF letterheads, or that current Telugu PDF font support means the entire interface is translated.

## 6. Technical fallback and show-time procedure

- [ ] Check HTTPS, login, navigation and PDF preview shortly before presenting; use a non-sensitive test request and a second network if available.
- [ ] Keep an **approved fictional** PDF, one image of the user journey, and the [product map](../../diagrams/svg/01_Product_Map.svg) available offline as **presentation fallback only**; offline PWA operation is **not** a product feature.
- [ ] If a workflow fails, stop changes, switch to a safe prepared example, disclose that the live step could not be shown, and record the issue privately after the meeting.
- [ ] Ask the school for top priorities and current formats; label every request as existing, configurable, customization assessment or out of scope.
- [ ] Avoid unapproved quotes, dates, service levels, integrations and commitments.

## 7. Post-demo reconciliation and reset

- [ ] List every write actually made in staging: affected **fictional** record reference, prior state, operator, time, and approved restoration procedure (private operator log).
- [ ] Restore only the specifically authorised disposable demonstration changes using supported app workflows; **do not delete audit history, run destructive database resets or overwrite shared demo data**.
- [ ] Recheck the intended published report card, attendance completeness, announcement audience and guardian child access after any changes.
- [ ] Sign out / close isolated browser sessions and clear downloads containing any sensitive material from the presentation device.
- [ ] Confirm all communication previews stayed unsent; if an actual test dispatch occurred, record the actual outcome without calling it automatically delivered.
- [ ] Record failed or unclear product claims for correction before the next presentation.
- [ ] Transfer meeting notes into the secure sales process, **not into this repository**; schedule proposal only after scope and owners are confirmed.

## 8. Go / no-go decision

- **GO:** all intended demonstration roles work, essential fictional examples are verified, privacy controls are checked, and safe fallbacks are prepared.
- **CONDITIONAL GO:** unavailable features are removed from the live path and the presenter has explicit read-only substitutes.
- **NO-GO:** accidental real data exposure risk, unexpected recipient dispatch, broken access isolation, no viable sign-in, or insecure staging access.

**Final check:** Presenter __________ · Operator __________ · Date __________ · Outcome: GO / CONDITIONAL GO / NO-GO.
