---
title: Teacher accounts and assignments
description: Create teacher logins, assign class teachers and subject teachers for an Academic Year, check coverage gaps, copy assignments and manage teacher accounts.
---

# Teacher accounts and assignments

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

A teacher's access in Everclass ERP follows their **assignments**. A teacher sees a Section's attendance only if they are its class teacher, and enters marks only for the Subjects and Sections they are assigned to teach, on the dates the assignment is in force.

## Create a teacher login

1. Go to *School setup > Teachers* and select **Add teacher**.
2. Enter the first name, last name and username, and optionally an email address.
3. Select **Create teacher login**.
4. The next page shows a **temporary password once**. Select **Print slip** and hand it to the teacher in person, then select **Done**.

The teacher must choose a new password at first sign-in. Classes and subjects are assigned separately, from the Academic Year.

## Assign class teachers

Each Section has at most one class teacher on any date. The class teacher takes the Section's attendance and writes term remarks.

1. Go to *School setup > Academic Years* and, on the year's card, open **Class teachers** under **Teaching**.
2. Next to a Section, select **Assign** (or **Replace** if it already has one).
3. Choose the teacher and the start date.
4. Select **Assign**.

Replacing a class teacher ends the current assignment and starts the new one. To end an assignment without a replacement, select **End** and enter the last day (inclusive). Assignments that have already started are **ended, never deleted**. A planned assignment that has not started yet can be removed with **Delete planned**.

## Assign subject teachers

Each Subject offering and Section has one teacher at a time, who enters its marks.

1. On the year's card, open **Teacher assignments** under **Teaching**.
2. Select **Assign a teacher**.
3. Choose the teacher, the **Subject offering**, the Section and the start date.
4. Select **Assign**.

To change the teacher, select **Reassign**. The current assignment ends the day before the new one starts, so past results stay with the teacher who taught them. Use **End** to stop an assignment on a chosen day, or **Delete planned** for one that has not started.

!!! warning "Inactive holders"
    If a Section or Subject is still assigned to a deactivated login, Everclass ERP flags it as **Login inactive or not a teacher** — reassign it so the work is not left without a teacher.

## Check coverage gaps

Open **Assignment overview** from the year's card. It shows, as of today:

- Sections without a class teacher;
- Subject slots without a teacher;
- assignments held by inactive or non-teacher logins.

The setup checklist on **Overview** also tracks *A class teacher for every section* and *A subject teacher for every subject*.

## Copy assignments from another year

1. From **Assignment overview**, select **Copy from another year…**.
2. Choose the Academic Year to copy from and select **Preview**.
3. Review **Will be copied** and **Skipped**. Only exact matches are copied; every skipped item shows the reason.
4. Select **Confirm and copy** to write the assignments. Nothing is written before you confirm.

## View a teacher's workload

Open a teacher from *School setup > Teachers* and select **View full workload** to see their class-teacher and subject assignments. Workload means assignment coverage only; it is not a record of hours taught.

## Manage a teacher account

Open the teacher from *School setup > Teachers*. Under **Account actions** you can:

- **Reset password** — issues a new temporary password on a printable slip;
- **Change username**;
- **Deactivate** — enter a reason; the teacher can no longer sign in. Existing assignments are kept for history;
- **Reactivate** a deactivated login.

The teacher page also shows the last sign-in, whether a password change is pending, and recent security events.
