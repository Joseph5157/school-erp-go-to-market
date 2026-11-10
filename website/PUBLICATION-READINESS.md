# Marketing website — publication readiness

Status: **Draft. Not approved for publication.** Prepared in GTM-WEBSITE-02 on 2026-11-10 against `main` at `dab51eb`.

The website in `website/` stays unpublished until **every gate below is approved by its owner** and Gate 13 (launch authorisation) is recorded for a specific, already-tested candidate commit. Nothing in this file authorises deployment, domain registration, indexing or enquiry collection.

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
| 11 | Final accessibility and cross-browser checks | Web lead | Keyboard, screen-reader spot check, contrast and 200% zoom on the launch candidate deployed to the access-restricted, non-indexable preview; latest Chrome, Edge, Firefox and Safari (desktop), Chrome on Android and Safari on iOS; results recorded against the candidate commit SHA | Draft evidence | |
| 12 | Performance and security checks | Web lead | Lighthouse (or equivalent) on the access-restricted preview of the launch candidate; security headers (HSTS, CSP, X-Content-Type-Options, Referrer-Policy) confirmed; `npm audit` clean; no secrets or personal data in the repository or build; results recorded against the candidate commit SHA | Draft evidence | |
| 13 | Owner authorisation for public launch | Owner | Written go-live authorisation naming the **final candidate commit SHA** (the head of the launch-candidate PR that passed Gates 11 and 12 on the preview) and the launch date, given after Gates 1–12 are Approved. Any new commit to the candidate invalidates this approval | Pending | |

Related item outside the website itself:

| # | Item | Owner | Evidence required | Status |
|---|---|---|---|---|
| R1 | Demonstration environment | Owner, with Product lead | A rehearsed demo environment with fictional data and authorised logins, so a "Request a demo" enquiry can be fulfilled (see `demo/demo-checklists/pre-demo-readiness.md`) | Pending |

### Draft evidence already available

- **Gate 3:** GTM-WEBSITE-02 copy review in `website/COPY-REVIEW.md`; copy checked against `docs/product/feature-catalogue.md`, the client deck and the sales FAQ, not yet against a deployed build.
- **Gate 11:** local preview checked at 390, 768, 1024 and 1440 px in Chromium: no horizontal overflow, keyboard navigation through the skip link and menu, visible focus, all text contrast ≥ 5.8:1. Other browsers and screen readers not yet tested.
- **Gate 12:** `npm audit` reports 0 vulnerabilities for Astro 7.3.8; the build makes no external requests and loads no third-party scripts, fonts or images; about 153 KiB in total. No deployed URL exists, so headers and Lighthouse are untested.

## Controlled process for going public (do not perform yet)

These protections are deliberately in place now and stay on `main` until launch. They are removed only in one dedicated **launch-candidate pull request** titled `GTM-WEBSITE-<NN>: enable public indexing`, opened after Gates 1–10 are Approved. That PR is built and tested on an access-restricted, non-indexable preview, and it is merged and deployed publicly **only** after Gate 13 approves its exact head commit.

| Protection | Where | Change at launch |
|---|---|---|
| `noindex, nofollow` robots meta | `src/layouts/BaseLayout.astro` | Remove the tag (or set `index, follow`) |
| Robots block | `public/robots.txt` | Replace `Disallow: /` with an allow rule and a `Sitemap:` line for the approved domain |
| Draft banner | `src/layouts/BaseLayout.astro` (`.draft-notice`) | Remove |
| Draft footer lines | `src/components/SiteFooter.astro` (`.footer-base`) | Replace with the approved company line and privacy-notice link |
| "Provisional wordmark" label | `src/data/site.ts` (`wordmarkNote`), header and footer | Replace with the approved logo per Gate 2 |
| Pending contact placeholders | `src/pages/contact.astro`, footer | Replace with approved channels per Gate 4 |
| Draft-state site checks | `scripts/check-site.mjs` | Update the noindex, robots, canonical/Open Graph and contact-link rules to the approved launch rules in the same PR, so CI keeps guarding the published state |

Launch sequence:

1. **Prerequisites.** Gates 1–10 show **Approved** with decision records. Gates 11–13 are still open.
2. **Create the candidate.** Open the launch-candidate PR as a Draft. Make only the changes in the table above, plus the approved identity, contact and SEO values. Run `npm ci`, `npm run check` and the full CI workflow.
3. **Restricted preview.** Deploy the candidate's head commit to a preview that is access-restricted (password, allow-list or host authentication) and non-indexable (an `X-Robots-Tag: noindex, nofollow` response header from the host, because the candidate itself no longer carries the `noindex` meta tag). The preview URL is not shared publicly or linked from anywhere.
4. **Test the candidate.** Complete Gates 11 and 12 on that preview and record the results against the candidate commit SHA. Attach screenshots of every page at 390 px and 1440 px. If any fix is needed, push it, redeploy the preview and repeat this step for the new head SHA.
5. **Authorise the exact commit.** The owner records Gate 13, naming the tested candidate commit SHA. A later commit to the candidate cancels the authorisation and returns to step 4.
6. **Merge and launch.** Merge only on the owner's written instruction, pinned to the authorised SHA (for example `gh pr merge --match-head-commit <sha>`). Deploy production from the resulting merge commit, whose content must match the authorised candidate. Then remove the restricted preview.
7. **Record.** Add the published commit and date to `docs/content-status.md`; the owner sets the status to **Published**.

Until step 6, every publication lock in the table above remains in place on `main`.

Rollback: redeploy the previous commit, or restore `noindex` and `Disallow: /` and redeploy, if anything published proves wrong.

## Deliberately absent today

No forms, analytics, cookies, third-party requests, contact channels, domain, hosting, canonical or social tags, and no claims about pricing, service levels, licensing or unsupported features.
