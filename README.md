# School ERP: Go-To-Market

Marketing, sales and documentation material for the School ERP product offered to private schools.

Production application code lives in the separate `school-erp` repository. This repository holds go-to-market material only.

## Contents

| Folder | Purpose |
|---|---|
| `brand/` | Brand guidelines (Graphite & Institutional Green), logos, templates |
| `brochure/` | Six-page brochure source, exports, print specifications |
| `docs/` | Product, administrator, faculty, guardian and implementation documentation |
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

## Content status

Every asset is tracked in [`docs/content-status.md`](docs/content-status.md) as Draft, Approved or Published. Only Approved content may be Published.

## Security

Never commit real student or guardian information, demo passwords, Railway secrets, school databases, customer contracts containing personal information, or production application code. See [`AGENTS.md`](AGENTS.md).
