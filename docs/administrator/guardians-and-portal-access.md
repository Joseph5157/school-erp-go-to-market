---
title: Guardians and portal access
description: Create guardian records, link them to students, create Guardian Portal accounts with identity verification, grant or revoke access per child, and reset passwords.
---

# Guardians and portal access

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

Guardian Portal access needs **three separate things**. Missing any one of them means the guardian sees nothing about that child:

1. A **Guardian record** with contact details.
2. A **relationship** between the Guardian and the Student (for example *Mother*).
3. A **portal account** for the Guardian, and an explicit **access grant** for each child.

Recording a Guardian, or a relationship, never grants access by itself.

## Create a Guardian record

1. Go to *Admissions > Guardians* and select **Create Guardian**.
2. Enter the Guardian's name and contact details.
3. Select **Save guardian**.

If Everclass ERP finds a possible duplicate, nothing is saved yet. Check the matches. Select **Use this Guardian** to use an existing record, correct the details and select **Check again**, or select **Save as new anyway**.

To change contact details later, open the Guardian and select **Edit contact details**.

## Link a Guardian to a Student

1. Open the Student and select **Associate guardian**.
2. Find the Guardian and choose the relationship.
3. Save.

To correct the relationship type, select **Change relationship** next to the Guardian on the Student page.

### End a relationship

If a Guardian should no longer be linked to a Student, select **End** next to the Guardian on the Student page and record the reason. Ending a relationship also revokes that Guardian's portal access to the Student. The relationship is kept under **Ended relationships** for history.

## Create a Guardian Portal account

!!! warning "Verify identity first"
    You must verify the person's identity before creating or linking an account. Everclass ERP records your confirmation; it does not verify identity itself.

1. Open the Guardian and, under **Guardian Portal account**, select **Create portal account**.
2. Choose how identity was verified:
    - **In person, with identity documents**,
    - **Against existing school records**, or
    - **Other (described in the note)**.
3. Add a brief **Verification note**, such as which document was seen and by whom. Do not enter document numbers.
4. Enter a username for the Guardian.
5. Select **Create account**.
6. The next page shows a **temporary password once**. Select **Print slip** and hand the slip to the Guardian in person. Do not send it by message. Select **Done**.

The Guardian must change the temporary password at first sign-in. Creating an account does **not** grant access to any child.

### Link an existing login instead

If the person already has a login (for example a teacher who is also a parent), select **Link an existing login**, record the identity verification, and enter the exact existing username. The existing password does not change.

## Grant access to a child

1. Open the Guardian. Under **Student access**, find the Student.
2. Select **Grant access**.
3. Read what the Guardian will be able to see:
    - name, admission number, class, section, roll number and enrolment status;
    - submitted attendance, by month and Academic Year, with a summary;
    - report cards the school has published, and their PDFs;
    - school notices addressed to the child's class or to everyone.
4. Select **Grant portal access**.

Repeat for each child the Guardian should see. One Guardian account can be linked to several children.

## Revoke access

- To stop access to **one child**, select **Revoke** next to that Student under **Student access**, enter the reason and confirm.
- To disconnect the **login** from the Guardian record, select **Revoke account link**.

Every grant, revocation and account change is listed under **Account and access history**.

## Reset a password or change a username

1. Open the Guardian.
2. Select **Reset password** to issue a new temporary password on a printable slip, or **Change username**.

## When access is reviewed automatically

If a Student is deactivated, or no longer has a current placement (for example after the Academic Year ends), guardians stop seeing that child's information until an administrator decides. See [Access reviews and sign-in lockouts](access-and-security.md).
