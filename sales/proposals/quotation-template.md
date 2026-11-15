# Everclass ERP — Quotation Template

> **Draft — Internal review only.** Blank template with no prices. Fill amounts only from the owner-approved rate card, using the internal [pricing framework](../pricing/pricing-framework.md). Completed quotations contain school information and must be stored securely **outside this Git repository**.

**How to use:** replace every `{{PLACEHOLDER}}`. Keep component codes **C1–C7** unchanged so this quotation matches the [proposal](school-proposal-template.md), [implementation scope](implementation-scope-template.md) and [annual support terms](annual-support-template.md). Leave a field blank, or write "To be confirmed", rather than guess.

---

| Field | Value |
|---|---|
| Quotation reference | {{QUOTATION_REF}} |
| Quotation date | {{DATE}} |
| Revision | {{REVISION}} |
| Related proposal | {{PROPOSAL_REF}} |
| Issued by | {{VENDOR_LEGAL_NAME}} *(not yet approved)* |
| Vendor address and tax registration | {{VENDOR_ADDRESS}} / {{VENDOR_TAX_ID}} *(not yet approved)* |
| Issued to | {{SCHOOL_LEGAL_NAME}} |
| School address | {{SCHOOL_ADDRESS}} |
| School contact (role) | {{SCHOOL_CONTACT_ROLE}} |
| Product | Everclass ERP, version {{PRODUCT_VERSION}} |
| Currency | {{CURRENCY}} |
| **Quotation valid until** | ______________________ *(validity period to be approved)* |

## 1. Scope basis

This quotation is based on:

- Requirements capture dated {{REQUIREMENTS_DATE}}.
- Modules and configuration listed in proposal {{PROPOSAL_REF}}, sections 5 and 6.
- Data migration assumptions in the implementation scope, section 4.
- Approximate size: {{STUDENT_COUNT}} students, {{TEACHER_COUNT}} teachers, {{ADMIN_USER_COUNT}} administrative users.

If these assumptions change, the quotation may be revised.

## 2. Itemized quotation

| Code | Item | Description | Basis / quantity | Unit amount | Amount |
|---|---|---|---|---|---|
| **C1** | One-time setup and implementation | Installation, school configuration, roles and accounts, acceptance-test support, go-live | {{BASIS}} | ______ | ______ |
| **C2** | Initial data migration | Excel template, data review, trial import, final import and verification for {{DATA_SCOPE}} | {{BASIS}} | ______ | ______ |
| **C3** | Training and onboarding | {{SESSION_COUNT}} sessions: administrators {{N}}, teachers {{N}}; format {{ON_SITE_OR_REMOTE}} | {{BASIS}} | ______ | ______ |
| | | | **One-time subtotal (C1 + C2 + C3)** | | ______ |
| **C4** | Annual support and maintenance | Per the annual support terms; period {{SUPPORT_START}} to {{SUPPORT_END}} | Per year | ______ | ______ |
| **C5** | Hosting and infrastructure (including backups) | Amounts invoiced by the vendor only: {{HOSTING_DESCRIPTION}}; arrangement as in proposal section 9 | {{BASIS}} | ______ | ______ |
| | | | **Recurring subtotal (C4 + C5)** | | ______ |
| **C6** | Optional customization | Not included unless listed below and approved separately | — | — | — |
| C6.1 | {{CHANGE_REQUEST_TITLE}} | Per written specification {{SPEC_REF}} | {{BASIS}} | ______ | ______ |
| | | | **Optional subtotal (approved C6 only)** | | ______ |
| **C7** | Applicable taxes | Rate and treatment: **To be confirmed** | ______ | ______ | ______ |
| | | | **Total for first year** | | ______ |

**Tax note:** tax is shown only when the applicable rate, classification and treatment have been confirmed. Until then, C7 stays blank and the total is shown **before tax**.

**Hosting note:** C5 contains only amounts the vendor invoices. Under school-managed hosting, provider charges the school pays directly are **not** included in C5 and are listed below for information only, so nothing is billed twice. Vendor-invoiced provider charges depend on third-party prices on the quotation date.

| Provider charges paid directly by the school (information only, not invoiced) | Provider | Paid by school |
|---|---|---|
| {{SERVICE}} | {{PROVIDER}} | Yes |

How later provider price changes are handled for vendor-invoiced charges: ______________________ *(pending approval)*.

## 3. Payment milestones

*Milestones and shares must be approved by the owner. Leave blank until then.*

| Milestone | Trigger | Components | Amount or share | Due |
|---|---|---|---|---|
| 1 | ______________________ | ______ | ______ | ______ |
| 2 | ______________________ | ______ | ______ | ______ |
| 3 | ______________________ | ______ | ______ | ______ |
| Annual | Start of each support year | C4, C5 | ______ | ______ |
| Change requests | Written approval of each C6 estimate | C6 | ______ | ______ |

Payment method and invoicing details: ______________________

## 4. Approved terms

*Insert only terms the owner and legal adviser have approved. Each item stays pending until then.*

| Term | Status / wording |
|---|---|
| Quotation validity | ______________________ |
| Renewal of C4 and C5 | ______________________ |
| Annual price revision | ______________________ |
| Software licence and permitted use | Pending legal approval. The proposed commercial model does not include transfer of software or source-code ownership, subject to final licensing terms and approval. |
| Data-processing terms | Pending legal approval |
| Warranties and limitation of liability | Pending legal approval |
| Service levels (hours, response times, availability) | Not offered; pending approval |
| Exit, data export and handover | Pending legal approval |
| Cancellation | ______________________ |

## 5. Not included

The items in section 10 of the proposal, including fees and online payments, transfer certificates, native mobile apps, offline use, automatic WhatsApp API / SMS / email sending, bulk academic-year rollover and multi-school SaaS, are **not included** and are not part of this quotation unless listed under C6 and separately approved.

## 6. Acceptance of quotation

| | School | Vendor |
|---|---|---|
| Name | ______________________ | ______________________ |
| Role | ______________________ | ______________________ |
| Signature | ______________________ | ______________________ |
| Date | ______________________ | ______________________ |

Acceptance of this quotation does not replace the written agreement covering the pending terms in section 4.
