# Internal Railway marketing-site preview

**Status: Draft. Private preview only — NOT public publication.**

This configuration deploys the six-page Astro site on a separate Railway project. The source is the Go-to-Market repository, not `school-erp`. No forms, analytics, cookies, database, or contact channels are enabled.

## Safety conditions

- Use **only** a separate Railway project/environment named for the private preview. Never modify School ERP staging/production services.
- Set `PREVIEW_PASSWORD_HASH` as a Railway service environment variable containing a **bcrypt hash**. The server refuses to start if this value is missing or malformed. The Basic Auth username is `preview`.
- Generate a strong unique password locally and hash it; never commit or log the password or its hash. Keep the plaintext password with the owner using a secure channel/password manager, not in this repository.
- Only generate a Railway HTTPS domain after verifying the deployed service is healthy and authentication is enabled. Test unauthenticated requests to `/`, `/features/`, `/robots.txt`, and an asset: all must respond 401. Check with owner-supplied credentials that the pages work (200) before distributing the URL.
- Caddy adds `X-Robots-Tag: noindex, nofollow, noarchive` and no-store headers, while the existing Astro `noindex, nofollow` and `robots.txt: Disallow: /` remain.
- Keep the PR branch/commit explicitly pinned, or turn off automatic deployments. Never implicitly follow `main`; future website changes require reviewed preview redeploys.
- Password protection is not a substitute for final privacy/legal review, or a reason to share sensitive staging data. Do not post the preview URL or credentials publicly.
- Rollback: remove the Railway service domain immediately; stop/delete the preview service when no longer needed. No production app or customer database is involved.

## Build and run

From the repository **root**, choose Dockerfile `Dockerfile.preview`, build context root:

```sh
docker build -f Dockerfile.preview -t school-erp-marketing-preview .
docker run --rm -p 8080:8080 -e PREVIEW_PASSWORD_HASH='<bcrypt-hash>' school-erp-marketing-preview
```

The Docker build runs `npm run check` within `website/`, including site lock checks. The final container only includes static built files and Caddy; Node and npm are build-time only.

## Not approved by this preview

This does **not** satisfy or approve the public-launch gates in `website/PUBLICATION-READINESS.md`. The company name, logo, contacts, public domain, enquiry workflow, legal review, SEO approval, and final authorisation are still Pending. Keep `docs/content-status.md` as **Draft**.

Only the owner can authorize a separate public-launch PR after the gates are approved.
