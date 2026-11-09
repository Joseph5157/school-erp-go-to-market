---
title: Account provisioning
description: Create teacher and guardian logins, distribute temporary passwords safely, assign class and subject teachers, and grant guardian portal access per child.
---

# Account provisioning

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

## Account types

| Account | Created by | Access |
|---|---|---|
| Administrator | Set up at installation, with permissions agreed with the school | Office pages allowed by assigned permissions |
| Teacher | An administrator, on *School setup > Teachers* | **My day**, students and marks for current assignments |
| Guardian | An administrator, on the Guardian's page | Guardian Portal, only for children granted explicitly |

Staff who are also parents can have one login linked as both teacher and guardian.

## Usernames

Agree a simple, consistent username pattern with the school before creating accounts. Usernames are stored in lower case. Do not use phone numbers, dates of birth or admission numbers as usernames.

## Teachers

1. Create each teacher login. See [Create a teacher login](../administrator/teacher-assignments.md#create-a-teacher-login).
2. Print the credential slip and hand it to the teacher in person.
3. Assign **class teachers** for every Section, with the start date.
4. Assign **subject teachers** for every Subject offering and Section.
5. Open **Assignment overview** and resolve every gap.

## Guardians

Guardians are usually created by the Excel import. Portal accounts are created separately, one by one, after identity verification.

1. Verify the guardian's identity in person or against existing school records.
2. Create the portal account and record the verification method and note. See [Create a Guardian Portal account](../administrator/guardians-and-portal-access.md#create-a-guardian-portal-account).
3. Print the credential slip and hand it over in person.
4. **Grant access** for each of the guardian's children.

!!! danger "Temporary passwords"
    A temporary password is shown only once and is not stored. Never photograph it, paste it into a chat, email it or record it in a spreadsheet. If it is lost, reset the password and issue a new slip.

## Checks

- [ ] Every teacher has signed in and changed their temporary password (the teacher page shows **Must change password: No**).
- [ ] **Assignment overview** shows no Sections without a class teacher and no Subject slots without a teacher.
- [ ] A sample guardian sees exactly their own children and no others.
- [ ] Accounts for anyone who will not use the system yet are not created early.
