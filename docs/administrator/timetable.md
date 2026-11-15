---
title: Timetable
description: Set up numbered teaching periods, build each Section's weekly timetable with dated slots, and check teacher clashes and slots without a teacher.
---

# Timetable

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

The timetable is a weekly grid of **periods** and **weekdays** for each Section. Each slot names a Subject. The teacher is worked out from the [subject teacher assignment](teacher-assignments.md#assign-subject-teachers) for that Subject and Section, so you never type a teacher into the timetable.

!!! info "What the timetable does not do"
    Everclass ERP does not generate timetables automatically, and does not manage rooms, substitutions or special days. Periods are numbered and carry no clock times.

## 1. Set up periods

1. Go to *School setup > Timetable* and choose the Academic Year.
2. Select **Set up periods**, then **Add period** (or **Add the first period**).
3. Enter the order and a label (for example *Period 1*) and select **Save period**.
4. Repeat for every teaching period in the day.

Use **Edit** to rename or reorder. A period that is **In use** by a slot cannot be deleted.

## 2. Build a Section's timetable

1. On *School setup > Timetable*, select **Section timetables** and then **Open timetable** for the Section.
2. In the grid, select **Add slot** in the cell for the period and weekday.
3. Choose the Subject.
4. Enter the **Start date** (it cannot be in the past) and, optionally, an **End date**. A blank end date runs to the end of the Academic Year.
5. Save the slot.

If the derived teacher already teaches another Section in the same period and weekday on overlapping dates, the slot is **not saved**. Everclass ERP explains the clash (for example, which Section and dates), so you can choose another period or change the teacher assignment first.

Saturdays show as **Not a school day** when Saturdays are off in that Academic Year.

### View the timetable on a date

Choose a date and select **Show timetable**. The grid shows the timetable in force on that date. A change applies from the date you choose; earlier dates keep their history.

### Change, end or delete a slot

- **Change** — replace the Subject from a chosen date.
- **End** — enter the last day the slot applies (inclusive).
- **Delete** — remove a slot completely, where permitted. Otherwise use **End this slot** so its history is kept.

## 3. Check for issues

Clashes can appear later, for example after a teacher is reassigned.

1. On *School setup > Timetable*, select **Timetable issues**.
2. Choose a date and select **Show report**.

The report lists:

- **Teacher clashes** — one teacher derived for two Sections in the same period and weekday, marked as in force, starting later or ended;
- **Slots with no teacher** — slots whose Subject and Section have no teacher assigned on that date.

Fix issues from the Section timetable or the teacher assignments. The report does not check timetable completeness or required subject hours.

## How teachers see it

Teachers see their own periods for the day on **My day**, when the school calendar shows a school day.
