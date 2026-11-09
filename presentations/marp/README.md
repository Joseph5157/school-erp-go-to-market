# Marp Client Presentation — GTM-PRESENTATION-01

**Status: Draft.** Prepared for owner review; not yet approved for customer distribution.

## Contents

- [school-erp-client-deck.md](school-erp-client-deck.md) — 12-slide, brand-neutral client presentation source.
- [themes/school-erp-institutional.css](themes/school-erp-institutional.css) — Graphite & Institutional Green style.
- [speaker-notes.md](speaker-notes.md) — short presenter cues and product-scope cautions.

Existing source-owned diagrams are reused from \`../../diagrams/svg/\`. Do not duplicate or recreate them in slides.

## Build locally (trusted repository files only)

The commands below are run **from the repository root** with Node.js and Marp CLI installed:

\`\`\`bash
mkdir -p presentations/marp/exports
npx @marp-team/marp-cli presentations/marp/school-erp-client-deck.md \
  --theme presentations/marp/themes/school-erp-institutional.css \
  --allow-local-files --pdf \
  -o presentations/marp/exports/school-erp-client-deck.pdf

npx @marp-team/marp-cli presentations/marp/school-erp-client-deck.md \
  --theme presentations/marp/themes/school-erp-institutional.css \
  --allow-local-files --pptx \
  -o presentations/marp/exports/school-erp-client-deck.pptx
\`\`\`

Marp needs a compatible browser installed for PDF/PPTX conversion. \`--allow-local-files\` permits reading local assets; **use it only with this trusted, reviewed Markdown and local SVG files**, never untrusted contributions. PowerPoint export can include rendered slides rather than independently editable objects; the Markdown remains the editable source of truth.

The source, theme and notes are included in this PR. **PDF/PPTX exports have not been generated or visually QA-checked here**, because Marp CLI was unavailable in the authoring environment. Do not mark the deck Approved until exported and each slide has been inspected at 16:9 and in presenter view.

## Pre-publication checklist

- [ ] Verify all feature claims against the current \`school-erp\` build and [feature catalogue](../../docs/product/feature-catalogue.md).
- [ ] Export both PDF and PPTX; inspect all 12 slides for clipping, diagram scaling, fonts and page numbering.
- [ ] Rehearse the talk using [speaker notes](speaker-notes.md).
- [ ] Add only approved company name, product identity, logo and contact information later; \`School ERP\` is neutral working copy.
- [ ] Confirm pricing/scope and customer-facing wording through owner approval.
- [ ] Complete **deferred staging verification** before demonstrating the live product; do not confuse this presentation with live workflow validation.
- [ ] Update [content status](../../docs/content-status.md) only after owner approval; it remains Draft now.

## Scope and security

- Audience: private-school owners, principals and administrators in Telangana and Andhra Pradesh.
- Do not claim fees, online payments, bulk rollover, automatic WhatsApp API delivery, native apps, offline operation, transfer certificates, or multi-school SaaS as implemented.
- No credentials, private school records, customer-specific quotations, contact data, or real student/guardian images belong in the repository.
- Keep identity fields unfilled and do not publish the deck before the owner approves the brand and brochure style.

## Source references

- [Current feature catalogue](../../docs/product/feature-catalogue.md)
- [8-minute executive demonstration script](../../demo/presenter-scripts/executive-demo-8-minute.md)
- [Brand guidelines](../../brand/brand-guidelines.md)
- [Official Marp CLI documentation](https://github.com/marp-team/marp-cli)
