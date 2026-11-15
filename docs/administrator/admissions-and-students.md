---
title: Admissions and student management
description: Register applicants, record admission decisions, progress accepted applicants to students, place students in a section, correct details and change student status.
---

# Admissions and student management

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

Admission in Everclass ERP is a series of explicit steps. Nothing moves forward automatically:

1. **Register** the child as an Applicant.
2. **Associate** the child's guardians.
3. **Accept** or **reject** the application.
4. **Progress** an accepted Applicant to a Student.
5. **Place** the Student in a Class/Grade and Section for the Academic Year.

!!! note "Bulk onboarding"
    When a school first moves to Everclass ERP, existing students are usually brought in with the Excel import instead of one by one. See [Excel import validation](../implementation/excel-import.md).

## 1. Register an applicant

1. Go to *Admissions > Applicants* and select **Register applicant**.
2. Enter the child's full name, and optionally date of birth, email and phone.
3. Select **Register applicant**.

If Everclass ERP finds a possible duplicate, it shows the matching Students or Applicants and saves nothing yet. Open the matches to check them. Then either correct the details and select **Check again**, or select **Register as new anyway** if the child really is new.

!!! note "Names"
    Student and applicant names currently accept English characters only.

## 2. Associate guardians

1. Open the Applicant and select **Associate guardian**.
2. Find the Guardian. If the Guardian does not exist yet, create them first (see [Guardians and portal access](guardians-and-portal-access.md)).
3. Choose how the Guardian relates to the child — Father, Mother, Guardian, Grandparent or Other — and save.

## 3. Record the admission decision

1. Open the Applicant from *Admissions > Applicants*. Use the filters to find pending applications.
2. Under **Admission decision**, select **Accept applicant…** or **Reject applicant…**.
3. Enter the **Reason** (required) and an optional note.
4. Confirm.

!!! warning "Decisions are final"
    An admission decision cannot be reversed. A rejected Applicant cannot become a Student.

## 4. Progress to Student

1. Open the accepted Applicant and select **Progress to Student**.
2. Check the list of **Guardians to copy**.
3. Select **Progress to Student** to confirm.

This creates one Student record and copies the listed guardians to it. It does **not** place the student in a class. The Applicant record and its history stay unchanged.

## 5. Place the student in a Section

1. Open the Student from *Admissions > Students*.
2. Under **Current placement**, select **Record enrollment** (or **Change placement** if the student is already placed).
3. Choose the **Academic year**, **Class/Grade** and **Section**, and enter the **Effective start date**.
4. When changing an existing placement, select **Review change**, check the summary, then select **Change placement**. For a first placement, select **Record enrollment**.

When a new placement replaces a current one, the current placement ends on the day before the new start date. Earlier placements stay in **Enrollment history**. Overlapping placements are not allowed.

### Admission number and roll number

- The **Admission number** belongs to the Student. Select **Edit** next to it on the Student page.
- The **Roll number** belongs to the current placement.

Both are entered by the school and are never generated automatically.

## Find a student

Go to *Admissions > Students*. Search by student name, email or phone, and filter by **Status**, **Class** and **Section**. Select a column heading to sort. The list shows each student's placement and whether a guardian is linked.

From a Student page you can also open **View Attendance** and **Results and report cards**.

## Correct a student's or applicant's details

Use corrections for genuine mistakes, such as a misspelt name or wrong date of birth.

1. Open the Student or Applicant and select **Correct details**.
2. Change the name, date of birth, email or phone.
3. Enter the reason. It is kept permanently with the record, together with your name and the old values.
4. Select **Save correction**.

## Deactivate or reactivate a student

Deactivate a student who has left the school.

1. Open the Student and select **Deactivate student…**.
2. Read the consequences: the student leaves active lists; the current placement stays in the enrollment history; and any guardian with portal access will need a decision on the next step.
3. Enter the **Reason** (required). It becomes part of the student's permanent status history.
4. Select **Deactivate student**.
5. If guardians have portal access, the **Guardian access review** page opens. For each guardian, decide whether access is **retained** or **revoked**, then select **Record decisions and continue**. Nothing is saved until every guardian is decided.

To bring a student back, select **Reactivate student…**, enter the reason and confirm.

## Related pages

- [Guardians and portal access](guardians-and-portal-access.md)
- [Access reviews and sign-in lockouts](access-and-security.md)
