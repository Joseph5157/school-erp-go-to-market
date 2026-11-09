---
title: Excel import validation
description: Upload the import workbook, read the preview, fix errors, review warnings, and confirm or discard an import batch in School ERP.
---

# Excel import validation

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

The Excel import creates Classes, Sections, Guardians, Students and their placements in one controlled step. **Nothing is imported until you confirm the preview.**

## 1. Check the file

1. Prepare the workbook (see [Data preparation](data-preparation.md)).
2. Go to *Data tools > Import* and select **New import**.
3. Choose the **Academic Year** and the **enrollment start date** (every imported student is placed from this date, which must fall within the year), and choose the .xlsx file (up to 2 MB).
4. Select **Check file**.

School ERP checks the file and keeps it as an **import batch** for you to review.

## 2. Read the result

The batch page shows the file, who uploaded it, the Academic Year, the enrollment start date and the number of rows.

### If there are errors

*This file has N errors. Nothing was imported.*

The **Errors** table lists every problem with its sheet, row, column and what is wrong. Select **Download problems as CSV** to work through them in a spreadsheet. Fix the workbook and upload it again as a new import.

### If there are no errors

The **Preview** shows how many students, new classes, new sections and guardians will be created or linked, and lists every student row with name, date of birth, admission number, placement, roll number and number of guardians.

### Warnings

Warnings do not stop the import but need a second look, for example:

- a possible duplicate of an existing student or guardian;
- a phone number shared with another guardian.

The **Warnings** table lists each one with its sheet, row, column and what to check.

## 3. Confirm or discard

1. Review the preview and every warning.
2. If there are warnings, tick **I have reviewed the warnings.**
3. Select **Confirm import**.

School ERP re-checks the data against current school records before writing anything, and imports everything in one step. The batch then shows what was imported, for example how many students, classes, sections and guardians were created and how many existing guardians were reused.

If you do not want to import the file, select **Discard**. Nothing is imported and the batch cannot be confirmed later.

!!! warning "24-hour limit"
    A checked file can be confirmed within **24 hours** of upload. After that, upload it again.

!!! note "If school records changed"
    If someone changed school records after the file was checked, **Confirm** is not available and the page lists what changed. Upload the file again.

## Import history

*Data tools > Import* lists all import batches with their status. Stored rows from unconfirmed batches expire. The students in a file are visible only to people who can run imports.

## After importing

- Check a sample of students on *Admissions > Students*, including siblings.
- Check the setup checklist step *Every student placed in a section*.
- Continue with [Account provisioning](account-provisioning.md).
