# Marp Client Presentation — GTM-PRESENTATION-01

**Status: Draft.** Prepared for owner review; not yet approved for customer distribution.

## Contents

- [school-erp-client-deck.md](school-erp-client-deck.md) — 12-slide, brand-neutral client presentation source.
- [themes/school-erp-institutional.css](themes/school-erp-institutional.css) — Graphite & Institutional Green style.
- [speaker-notes.md](speaker-notes.md) — short presenter cues and product-scope cautions.
- [exports/](exports/) — generated PDF, PPTX and PNG previews (see below).

Existing source-owned diagrams are reused from `../../diagrams/svg/`. Do not duplicate or recreate them in slides.

## Exports (generated, Draft)

| File | Format | Size | Notes |
|---|---|---:|---|
| [exports/school-erp-client-deck.pdf](exports/school-erp-client-deck.pdf) | PDF, 12 pages, 960 × 540 pt (16:9) | ~131 KB | Selectable text; Noto Sans embedded |
| [exports/school-erp-client-deck.pptx](exports/school-erp-client-deck.pptx) | PowerPoint, 12 slides, 13.33 × 7.5 in (16:9) | ~2.2 MB | Each slide is a rendered image; not editable as text |
| [exports/previews/](exports/previews/) | PNG, 1280 × 720 per slide + contact sheet | ~1.9 MB total | For visual QA and PR review |

The Markdown file and theme remain the **editable source of truth**. Never edit the exports by hand; regenerate them.

## Build locally (trusted repository files only)

Requirements, as verified on 2026-11-09:

- Node.js 18 or later (tested with Node.js 22.17.0, npm 11.8.0)
- Google Chrome, Chromium or Microsoft Edge (tested with Chrome on Windows 11)
- Noto Sans installed locally for exact typography; otherwise Arial is used as fallback

Marp CLI is run through `npx` at a **pinned version**, so no `package.json` or permanent dependency is added to this repository. Run from the **repository root**:

```bash
MARP="npx -y @marp-team/marp-cli@4.5.1 presentations/marp/school-erp-client-deck.md   --theme presentations/marp/themes/school-erp-institutional.css   --allow-local-files --browser-timeout 60"

$MARP --pdf  -o presentations/marp/exports/school-erp-client-deck.pdf
$MARP --pptx -o presentations/marp/exports/school-erp-client-deck.pptx
$MARP --images png -o presentations/marp/exports/previews/slide.png
```

If Marp cannot find a browser, set `CHROME_PATH` first, for example on Windows Git Bash:

```bash
export CHROME_PATH="/c/Program Files/Google/Chrome/Application/chrome.exe"
```

For a live preview while editing, use `npx -y @marp-team/marp-cli@4.5.1 -s presentations/marp` with the same `--theme` and `--allow-local-files` options.

`--allow-local-files` permits reading local assets; **use it only with this trusted, reviewed Markdown and local SVG files**, never untrusted contributions.

**Known build quirk:** on Windows, a conversion occasionally hangs in headless Chrome. Stop it, end any leftover `chrome.exe --headless` processes and run the command again; `--browser-timeout 60` makes such failures end instead of waiting indefinitely.

## Visual QA record (2026-11-09)

All 12 slides were rendered to PNG and the PDF was rasterised back to images for inspection. Checks: typography and hierarchy, palette conformance, diagram and table legibility, spacing and alignment, overlap/clipping, page numbering and projector suitability.

Fixes applied in this pass:

- Content slides are now **top-aligned**, so titles sit at the same height on every slide (previously they moved between text and diagram slides).
- Body text increased from 27 px to 29 px for projector readability; two lines shortened to avoid single-word orphans.
- Table on slide 10 no longer shows an empty white band to the right of its columns.
- Diagrams sit in a framed white surface card (10 px radius, rule border) instead of a bare white rectangle.
- Diagram captions enlarged to 20 px and shortened so they never touch the footer.
- Added space between lists or tables and their closing statement.
- Off-palette tints `#D6EADD` and `#C6D1D9` replaced with approved tokens Green wash `#E3EFE9` and Rule `#DDE1DC`.
- Slide 10 “Teacher attendance” reworded to “Class attendance” so it cannot be read as a staff-attendance feature.

Remaining limitations:

- Text inside the reused SVG diagrams (slides 3, 4 and 8) is about 13–15 px at 1280 × 720. It is legible on a typical projector, but should be checked in the actual meeting room; the diagram sources are owned by `diagrams/` and were not changed here.
- The PDF embeds an Arial fallback for a few glyphs (such as the `→` arrows on slide 12); this is visually acceptable.
- PPTX slides are images, so speaker notes are not embedded; use [speaker-notes.md](speaker-notes.md).
- The deck has not been checked in PowerPoint/Keynote presenter view on a physical projector.

## Pre-publication checklist

- [ ] Verify all feature claims against the current `school-erp` build and [feature catalogue](../../docs/product/feature-catalogue.md).
- [x] Export both PDF and PPTX; inspect all 12 slides for clipping, diagram scaling, fonts and page numbering (2026-11-09).
- [ ] Rehearse the talk using [speaker notes](speaker-notes.md).
- [ ] Add only approved company name, product identity, logo and contact information later; `School ERP` is neutral working copy.
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
