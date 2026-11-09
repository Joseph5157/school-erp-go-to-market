---
title: Attendance review
description: Monitor daily registers, find sections with missing attendance, open and capture a register in the office, correct submitted attendance with a reason, and run attendance reports.
---

# Attendance review

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

Class teachers normally take attendance from **My day** (see [Recording and submitting attendance](../faculty/attendance.md)). The office monitors completion, fills gaps and makes corrections.

## How School ERP counts attendance

- A **register** is the attendance for one Section on one school day. A Section can have only one register per day.
- A register is a **draft** until it is **submitted**. Only submitted registers count.
- Each student is **Present**, **Absent** or **unmarked**. Unmarked students are **not** treated as absent.
- Attendance is expected only on instructional days in the [school calendar](school-setup.md#set-the-school-calendar-and-holidays), and only within each student's placement dates.
- **Percentage = Present ÷ (Present + Absent)**. Missing and draft registers never count as absent.

## Check today's registers

1. Go to *Daily > Attendance*.
2. Select **Today** to show today's registers, or use the filters for a Section, date range or status, then select **Filter**.
3. Each register shows whether it is **Submitted** or how many students are marked so far. The **Section summary** counts only submitted attendance.

To find Sections that have not submitted, use the **Missing attendance** report (below).

## Open and take a register in the office

If a class teacher is absent, an administrator with permission can take the register.

1. On *Daily > Attendance*, select **Open register**.
2. Choose the Section and date, and select **Open register**.
3. Mark each student **Present** or **Absent**. You can add an absence note. **Mark unanswered as present** fills every unmarked student with Present.
4. Select **Save draft** to keep working later, or **Save and submit** when every student is marked.
5. On **Submit attendance?**, check the totals and select **Confirm and submit attendance**.

Once submitted, the register becomes official. Where a guardian has portal access, absence messages are prepared for office staff to send from the **Message queue** (see [Announcements and messages](announcements.md)).

## Correct submitted attendance

Submitted attendance is never overwritten. Corrections are recorded alongside the original.

1. Open the register from *Daily > Attendance*.
2. Under **Submitted attendance**, select **Correct** next to the student.
3. Choose the corrected status. For Absent you may add an absence note; correcting to Present clears the note.
4. Enter the reason.
5. Select **Save correction**.

The **Correction history** on the same page shows every change, the reason and who made it.

!!! note
    Teachers cannot correct a submitted register. They see it as read only and should ask the office.

## Attendance reports

Go to *Daily > Attendance reports* and choose a report:

| Report | Shows |
|---|---|
| **Daily absent students** | Students recorded absent on one date, from submitted registers only. |
| **Missing attendance** | Days attendance was expected but no register has been submitted. |
| **Monthly Class/Section summary** | Present, absent and attendance percentage for each student in a Section for one month. |

For one student's history, open the student from *Admissions > Students* and select **View Attendance**.

To issue a numbered PDF of a Section's attendance over a date range, see [School documents](documents.md).
