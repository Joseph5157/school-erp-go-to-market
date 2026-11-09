---
title: Data preparation
description: Prepare the school's student and guardian data in the School ERP import template, with column rules, formats and common problems to fix before upload.
---

# Data preparation

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

Good data preparation is the most important part of onboarding. School ERP checks every row before importing anything, but correcting the source data first saves time.

## Get the template

1. Go to *Data tools > Import*.
2. Select **Download template**. (The **New import** page also links to the import template.)

The workbook has an **Instructions** sheet, a **Students** sheet and an optional **Classes** sheet. Do not rename sheets or columns.

## Students sheet

One row per student. Required columns are in **bold**.

| Column | Rules |
|---|---|
| **Full name** | English characters only |
| Date of birth | A date cell, `YYYY-MM-DD` or `DD/MM/YYYY` |
| Admission number | As used by the school |
| **Class** | Must exist already or be listed on the Classes sheet |
| **Section** | Must belong to the Class |
| Roll number | A whole number |
| Guardian 1 name, relationship, phone, email | Optional; if any guardian cell is filled, name and relationship are required |
| Guardian 2 name, relationship, phone, email | As for Guardian 1 |

- **Relationship** must be one of: Father, Mother, Guardian, Grandparent or Other.
- **Phone** must be a 10-digit mobile number. It is saved as `+91XXXXXXXXXX`.

## Classes sheet (optional)

One row per Class and Section pair to create if it does not exist yet: **Class**, **Section**.

## How guardians are matched

- Guardians with the **same phone and name** are shared between siblings and matched to existing guardians.
- A guardian with **only an email** is always added as a new record.

So, for siblings, make sure the guardian's name and phone are written identically on each row.

## Limits

| Limit | Value |
|---|---|
| File size | 2 MB |
| Student rows | 3,000 |
| Class rows | 500 |

## Checklist before upload

- [ ] No formulas; values only.
- [ ] No example or test rows on the Students sheet.
- [ ] No blank rows in the middle of the data.
- [ ] Class and Section names match exactly what is in School ERP (or are on the Classes sheet).
- [ ] Every phone number is a 10-digit mobile number with no spaces or country code.
- [ ] Sibling guardians use identical names and phone numbers.
- [ ] Names use English characters.

!!! danger "Handle the file as personal data"
    The workbook contains children's personal data. Keep it only in the school's approved secure storage, share it only with people who need it, and delete working copies after the import is accepted. Never commit it to a code or documentation repository.
