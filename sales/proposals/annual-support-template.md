# School ERP — Annual Support and Maintenance Template

> **Draft — Internal review only.** Blank template. Support hours, response times, availability targets, restoration commitments and penalties are **undecided** and must not be offered until approved by the owner and written into a signed agreement.

**How to use:** attach to the [school proposal](school-proposal-template.md) and [quotation](quotation-template.md). This document describes component **C4 — Annual support and maintenance** and the backup and hosting arrangements priced under **C5 — Hosting and infrastructure**. Optional customization is **C6**.

| Field | Value |
|---|---|
| School | {{SCHOOL_NAME}} |
| Vendor | {{VENDOR_LEGAL_NAME}} *(not yet approved)* |
| Support period | {{SUPPORT_START}} to {{SUPPORT_END}} |
| Quotation reference | {{QUOTATION_REF}} |

## 1. What annual support covers, and what it does not

| Category | Component | Covered by annual support? |
|---|---|---|
| **Software support** — help using delivered features, investigating reported problems, correcting defects in delivered scope | C4 | Yes, within the agreed terms |
| **Maintenance** — security updates, dependency upgrades, product updates the vendor makes available for the school's installation, monitoring review | C4 | Yes, within the agreed terms |
| **Configuration assistance** — changes using existing settings (for example a new academic year, terms, sections, grading scales) | C4 | {{YES_NO_OR_LIMIT}} *(to be agreed)* |
| **Hosting, infrastructure and backups** — provider charges and their administration | C5 | No — charged separately |
| **Custom development** — new features, new reports, new document formats, integrations, changed workflows | C6 | No — quoted per change request |
| **Third-party service charges** — hosting provider, domain, email or messaging providers, payment gateways, app stores | C5 or paid by the school directly | No — charged separately |
| **Additional training** beyond the agreed sessions | C3 | No — quoted separately |
| **Data work** — bulk re-imports, data cleansing, historical data loading | C2 or C6 | No — quoted separately |

## 2. Support categories

| Category | Examples |
|---|---|
| How-to question | How to correct a submitted register; how to publish a report card |
| Account and access | Locked-out administrator; teacher password reset guidance |
| Defect | A delivered feature does not behave as documented |
| Data correction help | Guidance on using the product's correction workflows |
| Configuration request | New term, section or grading scale using existing settings |
| Change request | New feature or changed behaviour — routed to C6 |
| Hosting or availability issue | The installation cannot be reached |

## 3. Issue classification

*Priority levels describe impact only. No response or resolution time is attached until approved.*

| Priority | Meaning | Example | Response target |
|---|---|---|---|
| P1 — Critical | The installation cannot be used by the school | Nobody can sign in | Not yet decided |
| P2 — High | An important workflow is blocked with no workaround | Attendance cannot be submitted for any section | Not yet decided |
| P3 — Normal | A workflow is affected but a workaround exists | One report shows an unexpected layout | Not yet decided |
| P4 — Low | Question, cosmetic issue or suggestion | Wording on a screen | Not yet decided |

The vendor confirms the priority after first review. Change requests are not support issues and follow the change-request procedure in the [implementation scope](implementation-scope-template.md).

## 4. How the school raises an issue

| Item | Value |
|---|---|
| Who may raise issues | Named school contacts: {{NUMBER}} *(names stored privately)* |
| Channels | {{SUPPORT_CHANNELS}} *(to be agreed)* |
| Support hours | **Not yet decided** |
| Information to include | What happened, when, which page, which role, steps to reproduce; **no screenshots or files with real student data unless agreed** |
| Escalation route | **Not yet decided** |

## 5. Maintenance responsibilities

| Responsibility | Vendor | School |
|---|---|---|
| Apply security updates and dependency upgrades | ✓ | |
| Announce planned maintenance in advance | ✓ (notice period not yet decided) | |
| Review error monitoring for the installation | ✓ | |
| Keep administrator accounts and permissions current | | ✓ |
| Remove access for staff and guardians who leave | | ✓ |
| Review data before publishing results to guardians | | ✓ |
| Keep devices and browsers up to date | | ✓ |
| Report issues promptly with enough detail | | ✓ |

## 6. Backups and hosting arrangement

*Complete with the arrangement agreed in proposal section 9. Do not state restoration times, data-loss limits or availability percentages until approved.*

| Item | Arrangement |
|---|---|
| Hosting arrangement | Vendor-managed / School-managed / Other: {{HOSTING_ARRANGEMENT}} |
| Hosting account holder | {{OWNER}} |
| Backup method and frequency | {{BACKUP_METHOD}} |
| Backup retention | {{BACKUP_RETENTION}} |
| Backup storage location | {{BACKUP_LOCATION}} |
| Restoration testing | {{RESTORE_TEST_PRACTICE}} |
| Restoration commitment | **Not yet decided** |
| Availability target | **Not yet decided** |
| Penalties or service credits | **Not yet decided** |
| Charges | Amounts invoiced by the vendor: C5 in the quotation. Provider charges paid by the school directly: not invoiced by the vendor |

## 7. Renewal

| Item | Value |
|---|---|
| Renewal process | {{RENEWAL_PROCESS}} *(pending approval)* |
| Price revision on renewal | Pending owner approval |
| What happens if support is not renewed | Pending commercial and legal approval |

## 8. Pending terms

The following are **not offered** by this template and remain pending commercial and legal approval: support hours, response and resolution times, availability targets, restoration commitments, penalties or service credits, warranties, limitation of liability, data-processing terms, licensing, and exit and handover arrangements. The proposed commercial model does not include transfer of software or source-code ownership, subject to final licensing terms and approval.
