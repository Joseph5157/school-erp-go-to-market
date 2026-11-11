# School ERP Marketing V2 — real-product visual capture gate

**Status:** Draft / design evidence only. Complements Draft PR #18. No live capture authorised by this file.

## Purpose

Replace the clearly labelled CSS mock dashboard in the homepage V2 pilot with authentic and consistent **read-only** School ERP visual evidence. Use **only approved fictional data** in a disposable demonstration school. Source behaviour must be verified against the currently deployed Django version before a screenshot is accepted. This does not change application data or authorise public publication.

The Work B2Base design review dated 10 November 2026 is the visual reference, particularly its page 8 product-composition and screenshot brief. The website remains Astro, and the existing private Railway preview remains unchanged while the PR is reviewed.

## Visual inventory and evidence checklist

| Asset ID | Role and page | Required state | Intended placement |
|---|---|---|---|
| V2-01 | Admin / `/overview/` | School overview with a coherent academic year and realistic but fictional values | Hero (largest image) |
| V2-02 | Admin / `/applicants/` and student placement | Application reviewed and a separately recorded enrolment; use two captures when a single page cannot show both | Admissions feature split |
| V2-03 | Admin / `/attendance/` or authorised teacher history | Submitted section register, with recorded absence clearly distinct from missing register | Teacher/attendance feature split |
| V2-04 | Teacher / `/my/assessments/` and assigned gradebook | Entry context limited to the fictional teacher's assignment; do not use forms that write when merely capturing | Teacher/assessment feature |
| V2-05 | Admin assessment / report publication view | Preview, finalisation and publication are distinct; never depict unpublished marks as guardian-visible | Publication section |
| V2-06 | Guardian / `/guardian/` and fictional child's accessible views | Only approved child, submitted attendance and actually published report-card state | Guardian feature/role |
| V2-07 | Admin / `/announcements/` and guardian notices | Approved fictional notice targeted to the appropriate scope | Notice feature |

**Do not force any state** during a read-only capture. If a safe fictional state does not exist, mark the relevant asset `BLOCKED` and use a labelled, original design illustration, *not* a misleading synthetic screenshot. No real phone numbers, emails, addresses, DOBs, admission numbers, IDs, downloaded PDFs, or student/guardian names from live school data.

## Capture safeguards

1. Get explicit owner approval of the **specific demonstration environment, fictional school and role identities** before any authenticated capture.
2. Reuse read-only browser paths and safeguards from `demo/playwright/`; that framework currently has screenshot calls prohibited in its live specs, so do **not** modify those live tests or quietly bypass their safeguards.
3. Keep separate Admin, Teacher and Guardian sessions. Do not browse personal-contact, send-queue, Django-admin or download endpoints. No write/form submission from the capture workflow.
4. Capture with a human-reviewed browser session or a separately reviewed capture runner. Remove session tokens, browser URLs, personal identifiers, notifications and browser extensions from the output.
5. Prefer exact screen captures. When combining multiple states, label the composition **Illustrative composite using fictional demo data**, never `Actual product screenshot`.
6. Store source/working screenshots privately until approved; do not commit unreviewed or sensitive screenshot bytes. Record where each screenshot came from: application commit, route, role, fictional dataset version, capture date, and reviewer approval.
7. In final Astro implementation, keep `noindex`, `robots.txt`, draft banner and all site-lock checks. Do not enable enquiry forms or public marketing claims.

## Composition and responsiveness

- Desktop hero: one prominent Admin overview in a browser frame, with at most two subordinate *accurate* status cards. Do not show false dashboard charts, ROI figures or invented customer metrics.
- Mobile hero: a different narrow crop focused on **one legible school task**; never shrink an entire desktop dashboard until the text becomes unreadable.
- Capture original at a high enough resolution for 1920/1440 and provide a mobile-specific image; export AVIF/WebP variants plus a safe fallback, responsive `srcset`, fixed aspect ratio/dimensions and descriptive alt text.
- Use original UI framing and CSS shading. Do not reuse B2Base proprietary artwork, business logos or stock testimonials.
- Respect `website/scripts/check-site.mjs` and its 1 MB total static asset budget. A significant increase needs a separately reviewed and justified budget change, not a silent relaxation.

## Acceptance / decision gate

Before replacing the PR #18 CSS pilot, verify:

- [ ] Owner approved demonstration environment and declared all displayed records fictional
- [ ] Seven states inspected; each assigned real screenshot or explicitly labelled illustration
- [ ] All visible statuses match current School ERP behaviour and role permissions
- [ ] Source files and captures contain no private information, tokens, or URLs containing secrets
- [ ] Screenshot/source provenance documented in an internal, non-public register
- [ ] Desktop and mobile visual QA at 390, 768, 1024, 1366, 1440 and 1920 widths
- [ ] CI passes on exact PR head, no draft/publication locks removed
- [ ] Product owner reviews the homepage before any separate preview deployment

**Not yet achieved:** these are capture requirements, not evidence that any authentic application screenshots have been obtained.

## Current homepage illustration status (PR #18, 10 November 2026)

No authenticated capture has been made. Each asset slot is filled by an **original illustration** drawn in HTML/CSS/SVG with fictional, nameless data, captioned on the page as "Original illustration with fictional demo data. Not an application screenshot." Replace each with a real capture only after the gate above is passed.

| Asset ID | Homepage component | Current state | What it shows (verified capability) |
|---|---|---|---|
| V2-01 | `HeroProduct.astro` | Illustration | Overview with admissions decision, submitted register, publication stages (M01, M03, M05, M06) |
| V2-02 | `SceneAdmission.astro` | Illustration | Registered → decision recorded (Accepted) → separate dated enrolment; placement history (M03) |
| V2-03 | `SceneRegister.astro` | Illustration | Submitted Class 8A register, Present/Absent with note, separate missing-attendance report (M05) |
| V2-04 | — | Not shown | Teacher marks entry is described in text only (School-day strip, Daily-work split) |
| V2-05 | `PublicationFlow.astro` | Illustration | Four stages with guardian visibility per stage (M06) |
| V2-06 | `SceneGuardianReport.astro` | Illustration | Published Term 1 report card in a browser frame, report-card PDF download (M06, M08) |
| V2-07 | — | Not shown | Notices are listed in the capability grid and role cards only (M09) |

Illustrated marks (78/100 and so on), class names and roll numbers are invented for the drawing and are not product data or results. No people, photographs, logos, testimonials or metrics are used.

**One fictional journey.** The drawings follow the same nameless student: admitted to Class 8, Section A (V2-02) → Class 8A register submitted (V2-01, V2-03) → Term 1 report card for Class 8A published to the guardian (V2-06). Class 9B appears only as a different section whose register is still missing. All drawing text lives in `src/data/home.ts` (`hero.art`, `scenes`); real captures should follow the same journey.

## Update 2026-11-11: real screenshots in use

The owner approved the demo school's screenshots for website use (all names and figures are fictional) and asked to continue with the screenshots captured on 5 November 2026 rather than new captures. Source PNGs are in `school-erp/marketing-assets/screenshots/` (not committed here). Optimised WebP copies are in `website/public/images/product/`.

| Asset ID | Homepage component | Now shows | File |
|---|---|---|---|
| V2-01 | `HeroProduct.astro` via `ProductShot.astro` | Admin overview attendance charts (desktop); overview "Needs attention" crop below 600px | `overview-desktop.webp`, `overview-phone.webp` |
| V2-02 | `SceneAdmission.astro` | Still an original illustration (no admission screenshot exists) | — |
| V2-03 | `FeatureShowcase.astro` via `ProductShot.astro` | Teacher attendance register on a phone, in draft with 2 unmarked | `attendance-register.webp` |
| V2-06 | `PublicationFlow.astro` via `ProductShot.astro` | Guardian portal home on a phone: attendance, latest report card, notices | `guardian-home.webp` |
| — | `RolePreview.astro` | Brochure cover image, captioned "Illustrative image" | `school-team.webp` |

Each screenshot is captioned "Screenshot of School ERP in a demo school. All names and figures are fictional." The screenshots predate some later app changes; recapture before public launch. The provenance checklist above is still open for a public launch.
