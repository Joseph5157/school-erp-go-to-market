# Content Status Register

Statuses: **Not yet imported** → **Draft** → **Approved** → **Published**.

| Asset | Path | Status | Owner | Last updated | Notes |
|---|---|---|---|---|---|
| Repository README | `README.md` | Draft | | 2026-11-09 | Foundation merged |
| Agent instructions | `AGENTS.md` | Draft | | 2026-11-09 | Foundation merged |
| Brand guidelines | `brand/brand-guidelines.md` | Draft | | 2026-11-09 | Palette name and typography approved; identity assets pending |
| Six-page brochure | `brochure/` | Draft | | 2026-11-09 | Rebuilt in approved palette; six pages visually inspected; identity and print approval pending |
| Product feature catalogue | `docs/product/` | Draft | | 2026-11-09 | Baseline `b800676` reconciled with current PWA, correction, archive and security decisions |
| Administrator documentation | `docs/administrator/` | Draft | | 2026-11-09 | Role overview imported; GTM-DOCS-01 adds 12-page Administrator Manual (overview.md excluded from portal) |
| Faculty documentation | `docs/faculty/` | Draft | | 2026-11-09 | Role overview imported; GTM-DOCS-01 adds 7-page Teacher Manual (overview.md excluded from portal) |
| Guardian documentation | `docs/guardian/` | Draft | | 2026-11-09 | Role overview imported; GTM-DOCS-01 adds 6-page Guardian Manual (overview.md excluded from portal) |
| Live-demo presenter script | `demo/presenter-scripts/` | Draft | | 2026-11-09 | Updated for online-only PWA position |
| Workflow and module-map diagrams | `diagrams/` | Draft | | 2026-11-09 | SVG and Mermaid sources imported |
| Pre-demo readiness checklist | `demo/demo-checklists/pre-demo-readiness.md` | Draft | | 2026-11-09 | Based on reported 2026-10-26 demo snapshot; live staging validation required before client use |
| Eight-minute executive demo | `demo/presenter-scripts/executive-demo-8-minute.md` | Draft | | 2026-11-09 | Read-only short alternative to 30-minute presentation; verify role screens |
| School requirements capture sheet | `sales/proposals/school-requirements-capture.md` | Draft | | 2026-11-09 | Blank template for Telangana and Andhra Pradesh school discovery; no client information |
| Marp client presentation and speaker notes | `presentations/marp/` | Draft | | 2026-11-09 | 12-slide Markdown source with PDF/PPTX exports and slide previews; visual QA completed 2026-11-09; branding pending; demo verification deferred |
| Implementation guide | `docs/implementation/` | Draft | | 2026-11-09 | GTM-DOCS-01: 7 pages (configuration, structure, accounts, data preparation, Excel import, acceptance checks); verified against `school-erp` main `7a63da7` |
| Documentation home, getting started and FAQ | `docs/index.md`, `docs/getting-started/`, `docs/faq/` | Draft | | 2026-11-09 | GTM-DOCS-01; verified against `school-erp` main `7a63da7`; live walkthrough on deployed build still required |
| Documentation portal configuration and theme | `zensical.toml`, `docs/assets/stylesheets/`, `requirements-docs.txt`, `DOCUMENTATION-PORTAL.md` | Draft | | 2026-11-09 | GTM-DOCS-01: Zensical 0.1.0; strict build clean; local preview only, no public hosting; logo pending |
| Documentation portal QA screenshots | `website/screenshots/docs-portal/` | Draft | | 2026-11-09 | GTM-DOCS-01 desktop (1440 px) and mobile (390 px) captures of the draft portal; no personal data |
| Internal pricing framework | `sales/pricing/pricing-framework.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: method, formulas, editable assumptions, markup vs gross margin; no prices, margins or discounts |
| School proposal template | `sales/proposals/school-proposal-template.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: blank template with placeholders; component codes C1–C7; legal terms pending |
| Quotation template | `sales/proposals/quotation-template.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: itemized C1–C7 rows; validity, milestones, terms and tax left blank |
| Implementation scope template | `sales/proposals/implementation-scope-template.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: deliverables, responsibilities, migration, acceptance, change requests; no dates or warranties |
| Annual support template | `sales/proposals/annual-support-template.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: support categories and priorities; hours, response, availability, restoration and penalties undecided |
| Sales FAQ | `sales/faq/sales-faq.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: management questions and product boundaries; verify against deployed build |
| Objection handling | `sales/objection-handling/common-objections.md` | Draft | | 2026-11-10 | GTM-SALES-01, internal review only: eight core objections plus quick answers; no unagreed terms |
| CI quality gates | `.github/workflows/quality-checks.yml`, `scripts/ci/`, `docs/CI.md` | Draft | | 2026-11-10 | GTM-CI-01: documentation strict build, nav and exclusion checks; Marp 4.5.1 validation and render smoke test; GTM-DEMO-AUTO-01 adds an offline demo-automation job; validation only, no deployment |
| Marketing website | `website/` | Draft | | 2026-11-10 | GTM-WEBSITE-01: six-page static Astro 7.3.8 site; copy from feature catalogue, client deck and sales FAQ; provisional text wordmark; contact details pending; `noindex` + `robots.txt` block; no forms or tracking; local preview only, not deployed |
| Marketing website QA screenshots | `website/screenshots/marketing-site/` | Draft | | 2026-11-10 | GTM-WEBSITE-01: 390 px and 1440 px captures of the local draft site plus open phone menu; no school data; not application screenshots |
| Playwright demo automation foundation | `demo/playwright/` | Draft | | 2026-11-10 | GTM-DEMO-AUTO-01: read-only Admin/Teacher/Guardian scenes and 8/30-minute sequences; routes verified in `school-erp` source (`main` c6284df) only; 11 scenes implemented, 7 provisional, 7 unavailable; no live or staging run yet; screenshots off and never for staging |
