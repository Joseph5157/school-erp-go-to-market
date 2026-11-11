# Internal Railway marketing-site preview

**Status: Draft. Open preview (no password) — NOT public launch.**

On 2026-11-11 the owner asked for the Railway preview's password protection to be removed. Anyone with the URL can now view it. Search-engine locks stay on.

This configuration deploys the six-page Astro site on a separate Railway project. The source is the Go-to-Market repository, not `school-erp`. No forms, analytics, cookies, database, or contact channels are enabled.

## Safety conditions

- Use **only** a separate Railway project/environment named for the private preview. Never modify School ERP staging/production services.
- No password: HTTP Basic Auth was removed on the owner's instruction. `PREVIEW_PASSWORD_HASH` is no longer read and can be deleted from Railway.
- Before sharing the URL, check that `/`, `/features/`, `/robots.txt` and an asset return 200 and that the `X-Robots-Tag` header is present.
- Caddy adds `X-Robots-Tag: noindex, nofollow, noarchive` and no-cache headers, while the existing Astro `noindex, nofollow` and `robots.txt: Disallow: /` remain.
- Keep the PR branch/commit explicitly pinned, or turn off automatic deployments. Never implicitly follow `main`; future website changes require reviewed preview redeploys.
- The open preview is not a substitute for final privacy/legal review, or a reason to share sensitive staging data. Treat the URL as visible to anyone who receives it.
- Rollback: remove the Railway service domain immediately; stop/delete the preview service when no longer needed. No production app or customer database is involved.

## Build and run

From the repository **root**, choose Dockerfile `Dockerfile.preview`, build context root:

```sh
docker build -f Dockerfile.preview -t school-erp-marketing-preview .
docker run --rm -p 8080:8080 school-erp-marketing-preview
```

The Docker build runs `npm run check` within `website/`, including site lock checks. The final container only includes static built files and Caddy; Node and npm are build-time only.

## Not approved by this preview

This does **not** satisfy or approve the public-launch gates in `website/PUBLICATION-READINESS.md`. The company name, logo, contacts, public domain, enquiry workflow, legal review, SEO approval, and final authorisation are still Pending. Keep `docs/content-status.md` as **Draft**.

Only the owner can authorize a separate public-launch PR after the gates are approved.
