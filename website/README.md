# Marketing website (GTM-WEBSITE-01)

Status: **Draft — local preview only.** Not published, not deployed, and blocked from search indexing.

A static, responsive marketing website for School ERP aimed at private-school owners, principals and office teams in Telangana and Andhra Pradesh. Built with [Astro](https://astro.build) 7.3.8 (exact version, committed `package-lock.json`). There is no backend, form, database, tracking or runtime dependency on the School ERP application.

## Pages

| Route | Source | Purpose |
|---|---|---|
| `/` | `src/pages/index.astro` | Home: positioning, student journey, roles, publication control, practical fit |
| `/features/` | `src/pages/features.astro` | The 12 catalogue areas (M01–M12) in four groups, two workflow diagrams, and what is not included |
| `/who-its-for/` | `src/pages/who-its-for.astro` | Owners, principals, office, teachers, guardians; fit and "talk to us first" list |
| `/implementation/` | `src/pages/implementation.astro` | Six-stage process, shared responsibilities, data import, commercial approach (no prices) |
| `/faq/` | `src/pages/faq.astro` | Public-safe answers adapted from the sales FAQ |
| `/contact/` | `src/pages/contact.astro` | "Request a demo" and "Discuss your requirements" journeys; contact channels pending |
| `/404.html` | `src/pages/404.astro` | Not-found page |

Shared parts: `src/layouts/BaseLayout.astro` (head, noindex, draft notice), `src/components/SiteHeader.astro` (desktop links and a `<details>` phone menu that works without JavaScript), `SiteFooter.astro`, `PageIntro.astro`, `CtaBand.astro`. Product wording lives in `src/data/site.ts` and is taken from `docs/product/feature-catalogue.md`.

## Commands

Requires Node.js 22.12 or later. Run from `website/`:

```bash
npm ci              # install the pinned dependencies
npm run dev         # development server at http://localhost:4321
npm run build       # static production build into dist/
npm run preview     # serve dist/ locally at http://localhost:4321
npm run check       # build, then run scripts/check-site.mjs
```

The npm scripts start Astro with `ASTRO_TELEMETRY_DISABLED=1`, so local work sends no usage data.

## What `npm run check` verifies

`scripts/check-site.mjs` reads the built `dist/` and fails when:

- a page lacks `lang="en-IN"`, a title, a meta description, or the `noindex, nofollow` robots tag; or `robots.txt` does not disallow everything
- canonical or Open Graph tags appear before a domain is approved
- a page has no single `<h1>`, no `<main>` skip target, an image without alt text, or duplicate ids
- an internal link or `#anchor` does not resolve
- a form, input, `mailto:`/`tel:`/WhatsApp link, email address, phone number or domain-like text appears
- any external script, stylesheet, font or image is referenced, or common tracking code is present
- a known unsupported claim appears (online fee payment, offline working, app-store download, automatic sending, DPDP-compliance claims and similar)
- the build exceeds 1 MB in total

The same check runs in CI (`.github/workflows/quality-checks.yml`, job "Marketing website").

## Design rules followed

- Graphite & Institutional Green tokens from `brand/brand-guidelines.md`; cobalt is used only for the information callout
- Noto Sans 400/700 (Latin subset) self-hosted through `@fontsource/noto-sans`; system fallbacks
- Provisional text wordmark labelled "Provisional wordmark"; no logo is invented
- Visuals are CSS explanations or the existing draft diagram assets in `diagrams/svg/` (imported directly so there is one source; their content-register status is Draft). Diagrams show from 900 px wide; narrower screens get the same steps as text, and each diagram has full alt text
- Desktop navigation shows from 960 px; below that the `<details>` menu is used
- Odd-numbered card sets: a lone last card spans the full row instead of leaving an empty slot
- No application screenshots are used. The documentation-portal screenshots in `screenshots/docs-portal/` are not used on the site

## Screenshots

`screenshots/marketing-site/` holds current QA captures of this draft site only: every page at 390 px and 1440 px, Home and Features also at 768 px and 1024 px, and the open phone menu. They contain no school data and are not application screenshots. Refreshed in GTM-WEBSITE-02.

## Publication readiness and copy review

- [`PUBLICATION-READINESS.md`](PUBLICATION-READINESS.md) — the 13 approval gates (owner, evidence, status) and the controlled process for removing `noindex`, the robots block and draft notices. All gates are Pending or Draft evidence.
- [`COPY-REVIEW.md`](COPY-REVIEW.md) — page-by-page comparison with the feature catalogue, deck and sales FAQ; corrections made and open questions for the owner.

## Pending decisions before publication

- Company and product names, logo and wordmark
- Contact email, phone/WhatsApp number and office address
- Domain, hosting, canonical URLs and social preview images
- Owner review of all copy, then removal of `noindex`, the `robots.txt` block and the draft notice
- Privacy notice, and whether any enquiry form or analytics will be used (both are deliberately absent now)
- Telugu-language version, if wanted
