# School ERP — Internal Pricing Framework

> **Draft — Internal review only.** Not for distribution to schools. Contains no approved prices, margins, discounts or rates. Every figure in a quotation must come from an owner-approved rate card kept **outside this repository**.

Part of the GTM-SALES-01 commercial package. Use with:

- [School proposal template](../proposals/school-proposal-template.md)
- [Quotation template](../proposals/quotation-template.md)
- [Implementation scope template](../proposals/implementation-scope-template.md)
- [Annual support template](../proposals/annual-support-template.md)
- [School requirements capture sheet](../proposals/school-requirements-capture.md)

## 1. Purpose and commercial model

This document explains **how** a price is built for one school. It does not set **what** the price is.

The commercial model is:

1. **Customized installation for each school.** The product is a school-specific installation of the existing School ERP, not a shared multi-tenant subscription service.
2. **One-time setup and implementation fee.**
3. **Annual support and maintenance** charged separately from setup.
4. **Hosting and infrastructure** shown as its own line, never hidden inside support.
5. **Additional development (customization)** quoted separately, only after written specification.

## 2. Standard commercial components

These component codes are used, unchanged, in every template of this package. Do not rename or merge them in a school document.

| Code | Component | Type | Basis |
|---|---|---|---|
| **C1** | One-time setup and implementation | One-time | Effort |
| **C2** | Initial data migration | One-time | Effort, driven by data volume and quality |
| **C3** | Training and onboarding | One-time (repeat sessions optional) | Sessions or effort |
| **C4** | Annual support and maintenance | Recurring, per year | Effort allowance plus fixed operating overhead |
| **C5** | Hosting and infrastructure (including backups) | Recurring | Pass-through cost plus management effort |
| **C6** | Optional customization | One-time per approved change | Effort, per written estimate |
| **C7** | Applicable taxes | Per invoice | Confirmed rate and treatment only |

A catalogue item (for example M05 03) is a documented capability, **not** a separately priced module. Pricing is driven by implementation effort, data, training, support and infrastructure, not by counting modules.

## 3. Editable assumptions

Fill these in a private working copy for each school. Leave the repository copy blank.

### 3.1 Rate assumptions (owner-approved, kept outside Git)

| Ref | Assumption | Value | Source / approver |
|---|---|---|---|
| R1 | Internal cost per effort hour — implementation | ______ | |
| R2 | Internal cost per effort hour — data migration | ______ | |
| R3 | Internal cost per effort hour — training | ______ | |
| R4 | Internal cost per effort hour — support | ______ | |
| R5 | Internal cost per effort hour — development | ______ | |
| R6 | Travel and on-site cost per visit (if any) | ______ | |
| R7 | Contingency percentage for uncertain effort | ______ | |
| R8 | Pricing method chosen: markup **or** target gross margin | ______ | |
| R9 | Markup rate *or* target gross-margin rate (per component) | ______ | |
| R10 | Currency and rounding rule | ______ | |

### 3.2 School assumptions (from the requirements capture sheet)

| Ref | Assumption | Value |
|---|---|---|
| S1 | Approximate students (current / next year) | ______ |
| S2 | Teachers and administrative users | ______ |
| S3 | Guardian accounts expected | ______ |
| S4 | Classes / sections / subjects to configure | ______ |
| S5 | Modules required at launch (catalogue references) | ______ |
| S6 | Source data format and estimated quality (clean / moderate / poor) | ______ |
| S7 | Training groups and number of sessions | ______ |
| S8 | On-site visits requested | ______ |
| S9 | Hosting arrangement (vendor-managed / school-managed / other) | ______ |
| S10 | Customization requests needing estimate | ______ |

### 3.3 Infrastructure assumptions

| Ref | Assumption | Value | Notes |
|---|---|---|---|
| H1 | Hosting provider and plan | ______ | Third-party price may change; quotation validity must reflect this |
| H2 | Database service | ______ | |
| H3 | Backup method, frequency and retention | ______ | Do not state a restoration commitment until approved |
| H4 | Domain and TLS certificate | ______ | Owned by whom? |
| H5 | Outbound email or other third-party services | ______ | Only if separately agreed |
| H6 | Monitoring and error alerting | ______ | |
| H7 | Currency / exchange-rate exposure on provider bills | ______ | |

## 4. Calculation formulas

All formulas are **per school**. Effort is estimated in hours from the requirements capture sheet, then priced.

### 4.1 Effort-based components (C1, C2, C3, C6)

```
Effort cost        = Σ (estimated hours per task × internal hourly cost for that task type)
Contingency        = Effort cost × R7
Direct expenses    = travel + on-site + any approved third-party cost
Total cost (TC)    = Effort cost + Contingency + Direct expenses
Selling price (SP) = calculated with ONE method from section 5
```

Suggested task breakdown:

| Component | Typical tasks to estimate |
|---|---|
| C1 Setup and implementation | Installation, environment configuration, school profile, academic structure, calendar, grading scales, roles and permissions, account provisioning, document letterhead text, acceptance-test support, go-live |
| C2 Data migration | Template preparation, school data review, cleansing support, duplicate resolution, trial import, corrections, final import, verification |
| C3 Training | Preparation, administrator sessions, teacher sessions, guardian-access briefing material, follow-up session |
| C6 Customization | Specification, design, development, testing, documentation, deployment, acceptance |

### 4.2 Annual support and maintenance (C4)

```
Support effort cost   = expected support hours per year × R4
Maintenance cost      = expected maintenance hours per year (updates, security patches,
                        dependency upgrades, monitoring review) × R4
Fixed overhead        = share of tools, monitoring and administration attributable to the school
Total annual cost     = Support effort cost + Maintenance cost + Fixed overhead
Annual support price  = calculated with ONE method from section 5
```

"Expected support hours" is an internal planning estimate, **not** a promised support allowance. Any hours or response commitment offered to a school must be separately approved (see the [annual support template](../proposals/annual-support-template.md)).

### 4.3 Hosting and infrastructure (C5)

```
Pass-through cost   = Σ monthly provider charges (H1–H6) × 12
Management effort   = hours per year to administer hosting and verify backups × R4
Total hosting cost  = Pass-through cost + Management effort
Hosting price       = calculated with ONE method from section 5,
                      or pass-through at cost plus a separate management fee
```

Record in the quotation whether provider price increases are passed on, and how. Keep that wording pending until approved.

### 4.4 Applicable taxes (C7)

```
Tax amount = taxable value × confirmed applicable rate
```

Calculate C7 **only** after the applicable rate, classification and treatment are confirmed by the owner's tax adviser. Until then, show it as "To be confirmed" in the quotation.

### 4.5 Quotation totals

```
One-time subtotal     = C1 + C2 + C3
Recurring subtotal    = C4 + C5            (per year)
Optional subtotal     = approved C6 items only
Taxes                 = C7                 (only when confirmed)
First-year total      = One-time subtotal + Recurring subtotal + Optional subtotal + Taxes
Later years           = Recurring subtotal (+ taxes), subject to renewal terms
```

## 5. Markup versus gross margin

These are different and must not be mixed in one calculation. Record the chosen method in R8.

| | Markup | Gross margin |
|---|---|---|
| Measured against | Cost | Selling price |
| Formula for price | `SP = TC × (1 + markup rate)` | `SP = TC ÷ (1 − gross-margin rate)` |
| Formula for the rate | `markup = (SP − TC) ÷ TC` | `gross margin = (SP − TC) ÷ SP` |

Worked illustration in **neutral units, not a price or a target**: if TC = 100 units and the rate is 25%,

- a 25% markup gives SP = 125 units, which is a 20% gross margin;
- a 25% gross margin gives SP ≈ 133.33 units, which is a 33.3% markup.

Using a markup rate where a margin was intended under-prices the work. State the method next to every rate.

## 6. Pricing rules

1. No price appears in this repository, in a template, or in a deck. Approved rates live in a private rate card.
2. Every quotation is prepared from a completed requirements capture sheet and the current [feature catalogue](../../docs/product/feature-catalogue.md).
3. Product boundaries are never priced as included: fees and online payments, transfer certificates, native mobile apps, offline access, automatic WhatsApp API / SMS / email sending, bulk academic-year rollover and multi-school SaaS are **not implemented**. If requested, they go to C6 as a customization assessment, or are declined.
4. Discounts, free periods and bundles are **not authorised** until the owner sets a discount policy.
5. Hosting and infrastructure (C5) is always a separate line, even when the vendor manages it.
6. Optional customization (C6) is quoted only after a written specification and is accepted separately.
7. Each quotation states a validity period and payment milestones that the owner has approved.

## 7. Internal review checklist before a quotation is issued

- [ ] Requirements capture sheet complete; must-have items mapped to catalogue references.
- [ ] Every requested item classified: Implemented — verify / Configuration / training / Customization assessment / Outside current scope.
- [ ] Effort estimates reviewed by the person delivering the work.
- [ ] Rates taken from the current approved rate card; pricing method recorded.
- [ ] Hosting assumptions and provider prices checked on the quotation date.
- [ ] Tax treatment confirmed, or shown as "To be confirmed".
- [ ] Validity period, payment milestones and terms approved by the owner.
- [ ] Licensing, data-processing, liability and exit terms marked pending legal approval.
- [ ] No school data or completed quotation committed to Git.

## 8. Open decisions (owner)

- Approved rate card, pricing method and rates per component.
- Discount, bundling and renewal pricing policy.
- Whether hosting is passed through at cost or priced with a management fee.
- Tax registration, classification and invoicing treatment.
- Currency, rounding and annual price-revision policy.
- Company legal name and invoicing identity.
