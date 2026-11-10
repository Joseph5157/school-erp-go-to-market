# Pricing and business models

> **Draft — Internal review only.** GTM-RESEARCH-01, accessed 2026-11-10. Records **publicly disclosed** commercial models only. **This file does not create, propose or approve any price for our product.** An advertised starting price is not a complete implementation quotation: taxes, SMS/WhatsApp charges, payment-gateway fees, add-ons, apps, migration and training may be extra or excluded. Source IDs refer to the [source register](source-register.md).

## Prices verified on official vendor pages

| Vendor | Plan | Price as published | Currency / tax | Billing period | Conditions and inclusions (as stated) | Source |
|---|---|---|---|---|---|---|
| Fedena | Standard | "$ 999" | `$` symbol; currency code and tax treatment not stated | "billed yearly" | Unlimited users; one-to-one online training; onboarding data and configuration; email and phone support; automatic updates; free cloud hosting | S03 |
| Fedena | Premium | "$ 1399" | As above | "billed yearly" | As above, plus Premium module group (for example payment gateway, Tally integration, enquiry and registration) | S03 |
| Fedena | Ultimate | "$ 1699" | As above | "billed yearly" | As above, plus Ultimate module group (for example audit, automatic timetable, online examination) | S03 |
| Fedena | Enterprise | Not shown ("Contact Sales") | — | — | Custom ERP; includes product source code | S03 |
| Campus 365 | Lite | "₹ 5999/month billed yearly" | INR; tax treatment not stated | Monthly rate, billed yearly | "For Institutes with less than 300 students"; unlimited students and courses; free iOS and Android apps; webinar training; 24/7 email and chat support. FAQ: no long-term contract, but no refund once paid | S15 |
| Campus 365 | Enterprise | Not shown | — | — | Dedicated training and data onboarding; account manager; 2,000 free SMS | S15 |
| ScholaBook | Free Forever | "₹ 0 /month" | INR, excluding GST | Monthly | Up to 100 students; fee management, student records, basic reports, receipts, email support, parent portal, SMS notifications (online payments stated inconsistently across pages) | S21 |
| ScholaBook | Standard | "Starting from ₹ 799 /month" | INR, excluding GST | Monthly; "Save up to 25% with yearly billing" | For 100+ students; advanced reports, phone and WhatsApp support, multi-campus; no setup fee; free migration, onboarding and training | S21 |
| ScholaBook | Premium | "Custom pricing" | — | — | Staff mobile app, custom integrations, dedicated account manager, SLA | S21 |

**Arithmetic for comparison only (DER):** Campus 365 Lite at ₹5,999 × 12 = ₹71,988 per year before any tax. This matches a figure shown on a third-party marketplace listing, but the vendor page states the monthly rate only.

**Cautions**

- Fedena's prices carry a `$` sign without a currency code or Indian tax treatment. Prices for Indian schools may differ. Confirm before comparing.
- The entry plans above fit specific sizes (Campus 365 Lite: under 300 students; ScholaBook Free: up to 100). They do not show what a 500–2,000 student school would pay.
- None of these is a full quotation. Messaging credits, payment-gateway charges, hardware (RFID, biometrics, GPS) and extra modules are typically separate or unspecified.

## Vendors with no public price

| Vendor | Published model | Source |
|---|---|---|
| MyClassBoard | Demo-led ("Book a Demo"); no pricing page found | S07 |
| Entab CampusCare | Price "depends on the strength of the school along with the prerequisites" | S05 |
| Vidyalaya | Demo-led; no pricing page found | S16 |
| Teachmint | No ERP price; hardware sold through a cart and dealers | S10, S12 |
| Class ON App | "simple student-based plans with quarterly, biannual or annual options"; free 15–30 day trial; amounts not shown | S18 |

## Third-party price reports (unverified, not used for decisions)

Directory and review sites show figures that conflict with each other and with vendor pages. Examples: a USD per-month "starting price" for MyClassBoard [S31], conflicting free-trial statements for Entab [S33, S34], and a ₹7,500 starting price for a product named "VidyalayaERP" that may not be the same product as S16 [S35]. Rival vendors also publish comparison pages with price claims about competitors [S51, S56]. Those are marketing material, not neutral evidence.

## Business-model patterns

| Model element | Observed publicly | Vendors (source) | Class |
|---|---|---|---|
| Per-school annual subscription by plan tier | Yes | Fedena (S03) | VC |
| Monthly rate billed yearly, size-banded entry plan | Yes | Campus 365 (S15) | VC |
| Flat monthly plans by student band, "no per-student fees" | Yes | ScholaBook (S21) | VC |
| Per-student pricing | Described, amounts not shown | Class ON App (S18) | VC |
| Quote based on school size and needs | Yes | Entab (S05); demo-led vendors | VC |
| Free plan | Yes (small schools) | ScholaBook up to 100 students (S21); Fedena says its basic version is open source and free (S04) | VC |
| Free trial | Yes | Class ON App 15–30 days (S18); third-party reports for others conflict | VC / TP |
| Free demo | Universal | All eight compared vendors | VC |
| Hosting included | Explicit | Fedena "free cloud hosting" (S03); others cloud-only, so hosting is implied in the subscription but not itemised | VC |
| Separate hosting charge | Not observed on any page read | — | NPV |
| One-time licence or setup fee | Explicitly **none** at ScholaBook (S21); not stated elsewhere | — | VC / NPV |
| Annual maintenance charge (AMC) separate from licence | Not observed on any page read | — | NPV |
| Onboarding / migration included | Fedena (onboarding data and configuration), ScholaBook (free migration and training), Campus 365 Enterprise (data onboarding) | S03, S21, S15 | VC |
| Source code or self-hosting | Fedena: open-source basic version; source code on Enterprise. Vidyalaya mentions on-premises integration | S03, S04, S16 | VC |
| Rebrand / resell (OEM) | Campus 365 OEM partner programme | S14 | VC |

## Our documented model, side by side

Our model, unchanged by this research, is: **school-specific installation, one-time setup and implementation, annual support, separately identified hosting, and separately quoted customisation** ([pricing framework](../../sales/pricing/pricing-framework.md), [sales FAQ](../../sales/faq/sales-faq.md)).

| Element | Common in the public market | Ours | Implication (HYP, to validate) |
|---|---|---|---|
| Entry cost | Free tier or low monthly/annual subscription; setup often "free" | One-time setup fee | A visible setup fee may be a barrier for schools under 500 students comparing against free or low monthly plans |
| Hosting | Included and not itemised | Shown separately | Transparent, but may look like an extra cost beside "hosting included" offers |
| Annual charge | Subscription renews | Annual support and maintenance | Similar recurring shape; needs clear explanation of what support covers |
| Installation | Shared cloud service | Separate installation per school | May appeal to schools wanting their own installation; may cost more to run per school |
| Customisation | "Custom" or Enterprise tiers | Quoted separately after specification | Comparable; our written change-request process is more explicit |

**No price comparison is drawn**, because we have no approved price.

## Data gaps

- Actual prices paid by Telangana/AP schools (not public)
- Prices for 500–2,000 student schools at any vendor except quote-based
- Messaging, payment-gateway and add-on charges
- Contract lengths, renewal increases, exit and data-export terms
