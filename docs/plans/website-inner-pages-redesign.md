# Plan: inner pages redesign (GTM-WEBSITE-V4)

**Status:** Planned, not started (2026-11-11). Owner asked for the plan first; build only after the owner says go.
**Base branch:** `website/feature-images-restore` (Draft PR #20), so the preview stays consistent.
**Goal:** Features, Who it's for, Implementation, FAQ and Contact read like an internal spec. Make them work like the homepage. **No wording changes and no new claims**: layout and visuals only.

## Why they look like a PDF (owner feedback, reviewed on the preview)

1. Walls of bullets (Features: 12 cards x 4-5 bullets).
2. Internal catalogue labels shown: `M01`... and `For: Office administrators`.
3. Page tops half empty (title left, empty mint right).
4. Few or no pictures (Features, FAQ, Contact have none).
5. Old pale-blue SVG diagrams that don't match; Implementation shows the six stages twice (diagram + cards).
6. Table and form-like boxes ("Not in the current product" table, "Pending approval" contact box).
7. Section headings with underline rules look like document chapters.

## Site-wide pieces (build first, in `global.css` + shared components)

- [ ] `PageIntro` gets an optional image on the right (screenshot `ProductShot` or photo), two columns from 960px, stacked below.
- [ ] Icon card style: icon, title, one short line, 2-3 ticks; "who uses it" as a small tag pill. Remove `M0x` codes and `For:` lines from the display (keep the data).
- [ ] Step-card flow component in the homepage style (like the "Marks stay private" publication stages) to replace the SVG diagrams.
- [ ] Status-pill list to replace tables (request + pill such as "Not in the current product", "Planned").
- [ ] Section rhythm: alternate image-and-text rows with card rows; vary backgrounds (white / paper / tint); drop the underline under group headings.

## Page by page

| Page | Top image | Changes |
|---|---|---|
| Features | `overview-desktop.webp` | Each of the 4 groups opens with an image row (dashboard / attendance phone / guardian phone / overview phone crop), then lighter icon cards. Publication and WhatsApp flows as step cards. Boundaries table becomes the status-pill list. Keep jump links. |
| Who it's for | `school-team.webp` | Leadership cards with icons (homepage role-card style). Keep the alternating teacher/guardian rows. "Good fit" as a two-column tick list. |
| Implementation | `implementation-meeting.webp` | Six stages shown once, as a numbered timeline (remove the SVG + duplicate cards). "Who does what" as two icon cards. Commercial approach and Timing as two callout cards. Data import split stays. |
| FAQ | none (layout instead) | Homepage FAQ layout: intro + topic buttons left (sticky on desktop), questions right; add a "Still have questions? Request a demo" card. |
| Contact | `implementation-meeting.webp`, or a new Gamma `contact.png` if the owner makes it | Two options as larger cards with icon headers. "Pending approval" box becomes one short line. "Questions worth thinking about" as icon cards. |

## Checks before review

- `npm run check` passes (1 MB budget; currently ~520 KiB).
- No horizontal overflow at 390, 768, 1024, 1366, 1440, 1920 on all six pages; captions on every image.
- Section captures reviewed at 1440 and 390 (scroll + `img.decode()` before full-page shots).
- Deploy to the open preview the same way as before: branch with the 5 preview server files (`Dockerfile.preview`, `website/Caddyfile.preview`, `website/scripts/start-preview.sh`, `website/PRIVATE-PREVIEW.md`, `.gitattributes`), then `railway up`.
- Draft PR; merge only on the owner's word. Ask before merging even if CI is green (#19 was merged moments before the owner wanted changes).

## Suggested order (fits a short session each)

1. Site-wide pieces + Implementation (smallest page, proves the components).
2. Features (largest).
3. Who it's for, FAQ, Contact.
