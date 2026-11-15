---
title: Initial school configuration
description: Configure the school profile, guardian message channel, first Academic Year and school calendar for a new Everclass ERP installation.
---

# Initial school configuration

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

This step creates the school's identity and its first Academic Year. Complete it before any academic structure or student data.

## Information to collect from the school

| Item | Example | Where it is used |
|---|---|---|
| School name and address | — | Documents and guardian messages |
| Affiliation number | — | Documents |
| Principal name | — | Documents |
| Guardian message channel | Portal only, or staff-sent WhatsApp | Notices, absence and report card messages |
| School logo file (optional) | PNG or JPG | Signed-in interface only |
| Academic Year name and dates | 2026–27, 1 June 2026 to 30 April 2027 | Everything academic |
| Saturday pattern | Instructional or off | Attendance expectations |
| Holidays and working Saturdays | Festival dates, exam days | Attendance expectations |

## Steps

1. Sign in with the first administrator account provided at installation.
2. Complete the **School** page: name, address, affiliation number, principal name and message channel. See [School setup](../administrator/school-setup.md#enter-school-details).
3. Upload the logo if the school has an approved one.
4. Create the first **Academic Year** with the agreed dates and Saturday pattern.
5. Open the year's **Calendar** and add every known holiday and extra instructional day.

## Checks

- [ ] The setup checklist on **Overview** shows *School profile* and *Academic year* complete.
- [ ] **Check a date** on the calendar returns the expected result for a known holiday, a normal weekday and a Saturday.
- [ ] The school name appears correctly on a test bonafide certificate after students are imported (see [acceptance checks](onboarding-acceptance.md)).

!!! warning "Calendar changes after go-live"
    Holidays cannot be added on dates that already have attendance. Enter the full holiday list before teachers start taking attendance.
