# School ERP: Go-To-Market

Marketing, sales and documentation material for the School ERP product offered to private schools.

Production application code lives in the separate `school-erp` repository. This repository holds go-to-market material only.

## Contents

| Folder | Purpose |
|---|---|
| `brand/` | Brand guidelines (Graphite & Institutional Green), logos, templates |
| `brochure/` | Six-page brochure source, exports, print specifications |
| `docs/` | Product, administrator, faculty, guardian and implementation documentation; source of the Zensical documentation portal |
| `demo/` | Presenter scripts, checklists, sample (fictional) data, Playwright demo automation |
| `sales/` | Proposals, pricing, FAQ, objection handling |
| `diagrams/` | Mermaid sources for workflows and module maps |
| `presentations/` | Marp slide sources |
| `social/` | LinkedIn, WhatsApp and campaign content |
| `website/` | Website copy and screenshots |
| `research/` | Competitor and market research |

## Ready-to-rehearse demo materials

- [Pre-demo readiness checklist](demo/demo-checklists/pre-demo-readiness.md) — role checks, fictional records, privacy, fallback and reset steps.
- [Eight-minute executive walkthrough](demo/presenter-scripts/executive-demo-8-minute.md) — read-only short presentation.
- [Thirty-minute live demonstration](demo/presenter-scripts/live-demo-30-minute.md) — detailed role-based walkthrough, requiring rehearsal.
- [School requirements capture sheet](sales/proposals/school-requirements-capture.md) — blank discovery worksheet; store completed school details securely outside Git.

## Demo automation (Playwright)

- [GTM-DEMO-AUTO-01 — read-only demo automation foundation](demo/playwright/README.md) — TypeScript Playwright framework for Administrator, Teacher and Guardian scenes, mapped to the 8- and 30-minute scripts. Read-only request guard, dated live-run authorisation, no screenshots of staging. **Draft: not yet run against staging or any deployed environment**; CI runs only its offline checks.

## Commercial sales package (internal)

GTM-SALES-01. **Draft — internal review only.** No prices, margins, service levels or legal terms are approved. Completed school documents are stored outside Git. These files are outside `docs/` and are never part of the documentation portal.

- [Pricing framework](sales/pricing/pricing-framework.md) — internal method, formulas and editable assumptions for components C1–C7.
- [School proposal template](sales/proposals/school-proposal-template.md), [quotation template](sales/proposals/quotation-template.md), [implementation scope template](sales/proposals/implementation-scope-template.md) and [annual support template](sales/proposals/annual-support-template.md) — one set with shared references and component codes.
- [Sales FAQ](sales/faq/sales-faq.md) and [common objections](sales/objection-handling/common-objections.md) — factual answers within current product boundaries.

## Presentation draft

- [GTM-PRESENTATION-01 — 12-slide Marp school-management deck](presentations/marp/README.md) — source, Graphite & Institutional Green theme, speaker notes and export instructions. Draft only; identity, price and live demo verification remain pending.

## Documentation portal draft

- [GTM-DOCS-01 — Zensical documentation portal](DOCUMENTATION-PORTAL.md) — searchable Administrator, Teacher, Guardian and Implementation manuals plus FAQ, built from `docs/` with [`zensical.toml`](zensical.toml). Install with `requirements-docs.txt`, preview with `zensical serve`, validate with `zensical build --clean --strict`. Draft only; local preview, no public hosting.

## Automated quality checks

Every pull request to `main` runs the **Quality checks** workflow (GTM-CI-01): a strict Zensical documentation build with link, navigation and exclusion checks, and Marp presentation validation with a 12-slide render smoke test. It is validation only, with read-only permissions and no deployment. See [`docs/CI.md`](docs/CI.md) for what is checked and how to run the checks locally.

## Content status

Every asset is tracked in [`docs/content-status.md`](docs/content-status.md) as Draft, Approved or Published. Only Approved content may be Published.

## Security

Never commit real student or guardian information, demo passwords, Railway secrets, school databases, customer contracts containing personal information, or production application code. See [`AGENTS.md`](AGENTS.md).
