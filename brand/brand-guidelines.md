# Brand Guidelines: Graphite & Cobalt

Status: **Draft**. Values below are derived from the implemented School ERP design system. They are not yet owner-approved for publication.

## 1. Source of truth

The implemented product is the source of truth for this draft:

- `school-erp/static/css/erp.css` — interface tokens, spacing, type scale and states
- `school-erp/docs/UI_DESIGN_RULES.md` — visual and accessibility rules
- `school-erp/core/documents/engine.py` — bundled document fonts
- `school-erp/core/pwa_views.py` — current PWA shell colours

Verified against the `school-erp` default branch on 2026-11-09.

## 2. Palette clarification

“Graphite & Cobalt” is the working visual-direction name. The live product does **not** use cobalt as its primary action colour. Its implemented brand/action colour is institutional green; cobalt is reserved for information states and selected data visualisation.

Marketing material must reflect this distinction. Do not recolour the product or present cobalt as the main call-to-action colour without an explicit brand decision.

## 3. Core palette

### Neutrals

| Role | Token | Value | Use |
|---|---|---:|---|
| Graphite | `--erp-ink` | `#18212B` | Primary text, headings and high-emphasis labels |
| Soft graphite | `--erp-ink-soft` | `#4A5562` | Secondary text, captions and supporting information |
| Paper | `--erp-paper` | `#F5F6F3` | Page backgrounds and quiet sections |
| Surface | `--erp-surface` | `#FFFFFF` | Cards, panels and document content surfaces |
| Rule | `--erp-rule` | `#DDE1DC` | Borders, dividers and table rules |

### Brand and actions

| Role | Token | Value | Use |
|---|---|---:|---|
| Institutional green | `--erp-brand`, `--erp-action` | `#1F6B52` | Primary buttons, links, active navigation and brand accents |
| Strong green | `--erp-brand-strong`, `--erp-action-strong` | `#185842` | Hover/pressed states and strong brand blocks |
| Green wash | `--erp-brand-wash`, `--erp-action-wash` | `#E3EFE9` | Tonal buttons, highlights and soft backgrounds |

### Cobalt information palette

| Role | Token | Value | Use |
|---|---|---:|---|
| Cobalt | `--erp-info` | `#1D5FA8` | Information states and selected analytical data |
| Strong cobalt | `--erp-info-strong` | `#174E8A` | High-emphasis information states |
| Cobalt wash | `--erp-info-wash` | `#E6EEF8` | Information callouts and soft infographic regions |

Cobalt is not the default button or link colour. Use it when the content means “information”, not merely for decoration.

### Semantic states

| Meaning | Main | Wash | Rule |
|---|---:|---:|---|
| Complete / healthy | `#1F6B52` | `#E3EFE9` | Use only for genuine success or completed status |
| Pending / caution | `#9A5B00` | `#FBF0DC` | Use for pending work or warnings |
| Failed / critical | `#A3322A` | `#F8E4E1` | Use for errors, destructive actions or security-critical states |
| Information | `#1D5FA8` | `#E6EEF8` | Use for neutral information |

Never communicate status by colour alone. Pair it with a label, icon with accessible text, or a short explanation.

## 4. Data visualisation colours

These are application chart colours, not general brand colours:

| Purpose | Value |
|---|---:|
| Attendance | `#2A78D6` |
| Marks | `#EB6834` |
| Heat scale 1 | `#86B6EF` |
| Heat scale 2 | `#3987E5` |
| Heat scale 3 | `#1C5CAB` |
| Below-threshold status | `#D03B3B` |
| Grid | `#E1E0D9` |
| Student series | `#39424E` |

Use legends and direct labels. Do not rely on colour alone, and do not reuse chart colours as decorative brochure accents.

## 5. Typography

### Product interface

The application uses Bootstrap 5.3.3 and does not declare a custom web font in `erp.css`; it therefore follows Bootstrap’s system sans-serif stack.

Implemented type scale:

| Role | Value |
|---|---:|
| Extra small | `.78rem` |
| Small | `.9rem` |
| Base | `1rem` |
| Large | `1.25rem` |
| Page title | `clamp(1.65rem, 1.35rem + 1vw, 2.2rem)` |
| Body line height | `1.55` |
| Tight line height | `1.2` |

### PDFs and company collateral

The product bundles:

- Noto Sans Regular (400)
- Noto Sans Bold (700)
- Noto Sans Telugu Regular

Until a separate corporate typeface is approved, use **Noto Sans** for English and **Noto Sans Telugu** for Telugu in brochures, proposals, manuals and slides. Use no more than regular and bold weights.

## 6. Layout language

- Base spacing unit: 8 px
- Major spacing steps: 8, 16, 24, 32 and 48 px
- Outer card radius: 10 px
- Inner control radius: 6–8 px
- Prefer borders and surface contrast over heavy shadows
- Keep layouts calm, institutional and information-led
- Use one dominant element and one primary action per decision area
- Avoid decorative card grids, excessive gradients and consumer-app pill styling

No fixed colour-usage percentage is approved yet. Default to graphite text, paper/white surfaces, restrained green actions, and cobalt only where information meaning justifies it.

## 7. Tone of voice

Write for private-school owners, administrators, faculty and guardians.

The voice should be:

- Clear — short sentences and familiar school terminology
- Dependable — state exactly what the system does
- Practical — connect features to daily school work
- Respectful — never blame staff, teachers, parents or students
- Local — use Indian English and support Telangana and Andhra Pradesh context where relevant

Prefer:

- “Record attendance and identify missing entries.”
- “Publish report cards when the school has reviewed them.”
- “Give guardians access only to their own children.”

Avoid:

- “Revolutionary AI-powered education transformation.”
- “Guaranteed to eliminate every school problem.”
- Claims about modules, integrations, savings or compliance that have not been verified in the product.

## 8. Audience emphasis

| Audience | Lead with |
|---|---|
| School owner / management | Control, visibility, implementation support and accountable workflows |
| Administrator | Setup, student records, admissions, permissions and daily operations |
| Faculty | Assigned classes, attendance, assessments and clear task status |
| Guardian | Secure access to the child’s published school information |
| Small school | Simple setup, essential workflows and guided support |

## 9. Logo and icon rules

No approved company or product logo package has been imported into this repository.

- Keep logo areas as placeholders in outward-facing drafts.
- Do not invent a company name, product name or contact details.
- Do not treat the generated PWA install icon as the approved company logo.
- Do not redraw, stretch, recolour or extract a mark from a screenshot.
- Add clear-space, minimum-size and misuse rules only after approved logo files are imported into `brand/logos/`.

## 10. Accessibility and production checks

- Normal text contrast: at least 4.5:1
- Large text and interface boundaries: at least 3:1
- Colour is never the only signal
- Maintain readable type at A4 print size
- Check every exported PDF visually before release
- Use fictional data in screenshots and demonstrations
- Verify every feature claim against the current product before publication

## 11. Open approval decisions

The owner still needs to approve:

1. Whether “Graphite & Cobalt” remains the external palette name given the product’s green primary action colour
2. The final company and product names
3. Approved logo files and logo rules
4. Whether Noto Sans becomes the permanent collateral typeface
5. Any formal colour-usage ratio
6. Telugu marketing-copy conventions
