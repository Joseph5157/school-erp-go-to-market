# Marketing website — publication readiness

Status: **Draft. Not approved for publication.** Prepared in GTM-WEBSITE-02 on 2026-11-10 against `main` at `dab51eb`.

The website in `website/` stays unpublished until **every gate below is approved by its owner** and Gate 13 (launch authorisation) is recorded. Nothing in this file authorises deployment, domain registration, indexing or enquiry collection.

## How to use this checklist

- Each gate has an owner, the evidence needed, and a status.
- Statuses: **Pending** (no decision yet), **Draft evidence** (work exists but is not approved), **Approved** (owner has approved, with date and evidence link). Only the owner may set **Approved**.
- When a gate is approved, record the date, the approver's role and a link to the evidence (PR, document or message reference) in the "Decision record" column. Do not record personal contact details in this file.
- If a later change affects an approved gate (for example a copy change after copy approval), set it back to **Pending**.

Roles used below: **Owner** (business owner and final decision-maker), **Web lead** (whoever maintains `website/`), **Legal adviser** (the business's legal or compliance adviser), **Product lead** (whoever verifies claims against the `school-erp` application).

## Approval gates

| # | Gate | Owner | Evidence required | Status | Decision record |
|---|---|---|---|---|---|
| 1 | Final company and product names | Owner | Written decision on company name, product name and how the product is referred to in copy; name-availability check if wanted | Pending | |
| 2 | Logo and identity assets | Owner | Approved logo files imported into `brand/logos/`, logo rules added to `brand/brand-guidelines.md`, favicon and social image derived from them; provisional wordmark replaced | Pending | |
| 3 | Website copy approval | Owner, with Product lead | Copy-review log (`website/COPY-REVIEW.md`) resolved; every claim re-checked against the current feature catalogue and a deployed build; owner sign-off per page | Draft evidence | |
| 4 | Contact email, telephone/WhatsApp and address | Owner | Approved, monitored business contact channels; decision on whether a postal address is shown; "Areas served" confirmed | Pending | |
| 5 | Domain selection and ownership | Owner | Chosen domain registered in the business's own account (not a personal or vendor account); registrar access, renewal owner and DNS ownership documented | Pending | |
| 6 | Hosting and deployment architecture | Owner, with Web lead | Written choice of static host, account holder, how deployments are triggered (manual or from `main`), rollback method, TLS, security headers and cost owner | Pending | |
| 7 | Privacy notice and legal review | Legal adviser, then Owner | Privacy notice covering any personal data the site collects (none today), cookies, hosting-provider logs and contact handling; legal review of all public claims, including the DPDP wording | Pending | |
| 8 | Enquiry workflow decision | Owner | Decision between (a) contact details only, as now, or (b) an enquiry form; for (b): fields, consent text, processor, storage location, retention, spam protection and who answers enquiries; Gate 7 updated to match | Pending | |
| 9 | Analytics and cookie decisions | Owner, with Legal adviser | Decision to use no analytics (as now) or a named tool; if a tool is chosen: cookies set, consent mechanism, data location and privacy-notice update | Pending | |
| 10 | Search indexing and SEO configuration | Web lead, then Owner | Approved domain set as Astro `site`; canonical URLs, Open Graph/social image and `sitemap.xml`; final titles and descriptions reviewed; launch plan below agreed | Pending | |
| 11 | Final accessibility and cross-browser checks | Web lead | Keyboard, screen-reader spot check, contrast and 200% zoom on the final build; latest Chrome, Edge, Firefox and Safari (desktop), Chrome on Android and Safari on iOS; results recorded | Draft evidence | |
| 12 | Performance and security checks | Web lead | Lighthouse (or equivalent) on a deployed preview URL; security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy) confirmed; `npm audit` clean; no secrets or personal data in the repository or build | Draft evidence | |
| 13 | Owner authorisation for public launch | Owner | Written go-live authorisation naming the build (commit SHA) and date, given after Gates 1–12 are Approved | Pending | |

Related item outside the website itself:

| # | Item | Owner | Evidence required | Status |
|---|---|---|---|---|
| R1 | Demonstration environment | Owner, with Product lead | A rehearsed demo environment with fictional data and authorised logins, so a "Request a demo" enquiry can be fulfilled (see `demo/demo-checklists/pre-demo-readiness.md`) | Pending |

### Draft evidence already available

- **Gate 3:** GTM-WEBSITE-02 copy review in `website/COPY-REVIEW.md`; copy checked against `docs/product/feature-catalogue.md`, the client deck and the sales FAQ, not yet against a deployed build.
- **Gate 11:** local preview checked at 390, 768, 1024 and 1440 px in Chromium: no horizontal overflow, keyboard navigation through the skip link and menu, visible focus, all text contrast ≥ 5.8:1. Other browsers and screen readers not yet tested.
- **Gate 12:** `npm audit` reports 0 vulnerabilities for Astro 7.3.8; the build makes no external requests and loads no third-party scripts, fonts or images; about 153 KiB in total. No deployed URL exists, so headers and Lighthouse are untested.

## Controlled process for going public (do not perform yet)

These protections are deliberately in place now. Remove them **only** after Gate 13 is recorded, in one dedicated pull request titled `GTM-WEBSITE-<NN>: enable public indexing`, reviewed before merge.

| Protection | Where | Change at launch |
|---|---|---|
| `noindex, nofollow` robots meta | `src/layouts/BaseLayout.astro` | Remove the tag (or set `index, follow`) |
| Robots block | `public/robots.txt` | Replace `Disallow: /` with an allow rule and a `Sitemap:` line for the approved domain |
| Draft banner | `src/layouts/BaseLayout.astro` (`.draft-notice`) | Remove |
| Draft footer lines | `src/components/SiteFooter.astro` (`.footer-base`) | Replace with the approved company line and privacy-notice link |
| "Provisional wordmark" label | `src/data/site.ts` (`wordmarkNote`), header and footer | Replace with the approved logo per Gate 2 |
| Pending contact placeholders | `src/pages/contact.astro`, footer | Replace with approved channels per Gate 4 |
| Draft-state site checks | `scripts/check-site.mjs` | Update the noindex, robots, canonical/Open Graph and contact-link rules to the approved launch rules in the same PR, so CI keeps guarding the published state |

Steps for that pull request:

1. Confirm Gates 1–12 show **Approved** with decision records, and Gate 13 names the commit to publish.
2. Make only the changes in the table above, plus the approved identity, contact and SEO values.
3. Run `npm ci`, `npm run check` and the full CI workflow; attach screenshots of every page at 390 px and 1440 px.
4. Deploy to a non-indexed preview URL first and repeat Gates 11 and 12 there.
5. Merge only on the owner's written instruction, then deploy production from the merged commit.
6. Record the published commit and date in `docs/content-status.md`; the owner sets the status to **Published**.

Rollback: redeploy the previous commit, or restore `noindex` and `Disallow: /` and redeploy, if anything published proves wrong.

## Deliberately absent today

No forms, analytics, cookies, third-party requests, contact channels, domain, hosting, canonical or social tags, and no claims about pricing, service levels, licensing or unsupported features.
