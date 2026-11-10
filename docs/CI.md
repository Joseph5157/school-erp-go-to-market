# Continuous integration (CI)

Status: **Draft** (GTM-CI-01). Internal maintainer notes; excluded from the documentation portal.

Workflow: [`.github/workflows/quality-checks.yml`](../.github/workflows/quality-checks.yml) — **Quality checks**.

It runs on pull requests to `main`, on pushes to `main`, and manually (*Actions › Quality checks › Run workflow*). It only validates: nothing is uploaded, published or deployed, no secrets are used, and the token is read-only (`contents: read`).

## Jobs

### Documentation (Zensical strict build)

| Step | Fails when |
|---|---|
| Install `requirements-docs.txt` on Python 3.13 | A pinned package cannot be installed |
| `zensical build --clean --strict` | An internal link points to a missing page, or an anchor does not exist |
| `python scripts/ci/check_docs_site.py` | A `nav` entry points to a missing or excluded page; an internal document is no longer in `exclude_docs`; an excluded file appears in `site/` or `site/search.json`; any built page contains the internal marker *Internal review only* carried by every `sales/` commercial document |
| `git diff --exit-code` | The build changed a tracked file |

The `nav` check exists because Zensical treats a nav entry that does not resolve to a page as an external URL, so the strict build alone does not catch a mistyped nav path.

These internal documents must always stay excluded: `content-status.md`, `CI.md`, `product/feature-catalogue.md` and the three role `overview.md` files.

### Presentation (Marp CLI 4.5.1)

`node scripts/ci/check_presentation.mjs --render` on Node.js 22:

| Check | Fails when |
|---|---|
| Front matter | `marp: true` or `theme:` is missing |
| Theme | The `/* @theme */` name differs from the deck's `theme:`; braces are unbalanced; `@import` names neither a built-in theme (`default`, `gaia`, `uncover`) nor a local file |
| Local images | A referenced SVG or image is missing, lies outside the repository, or is not a complete SVG document |
| HTML render (no browser) | Marp logs any warning or error, or the deck does not have exactly **12** slides |
| PNG and PDF smoke renders (Chrome) | Rendering fails, does not produce 12 PNG slides, or does not produce a valid PDF |
| Exports untouched | Any file in `presentations/marp/exports/` changes (checked by hash, then `git status`) |

Marp CLI exits successfully even when it cannot load a theme, so the script treats every Marp `WARN` or `ERROR` as a failure. The only allowed warning is the expected *Insecure local file accessing is enabled* message caused by `--allow-local-files`, which is needed to load the local SVG diagrams.

Renders are written to a temporary directory and deleted. CI **never regenerates or commits** the PDF, PPTX or PNG exports; the Markdown and theme remain the source of truth.

## Reproduce locally

From the repository root.

Documentation (see [DOCUMENTATION-PORTAL.md](../DOCUMENTATION-PORTAL.md) for the virtual environment):

```bash
./.venv-docs/Scripts/zensical build --clean --strict      # Windows; use .venv-docs/bin on macOS/Linux
./.venv-docs/Scripts/python scripts/ci/check_docs_site.py
```

Stop `zensical serve` first: on Windows, `--clean` cannot remove the cache while the server is running.

Presentation (Node.js 18 or later; Chrome, Chromium or Edge for `--render`):

```bash
node scripts/ci/check_presentation.mjs            # fast: source, theme, SVG and HTML checks
node scripts/ci/check_presentation.mjs --render   # also the Chrome PNG and PDF smoke renders
```

If Marp cannot find a browser, set `CHROME_PATH` (see [presentations/marp/README.md](../presentations/marp/README.md)).

## Investigating a failure

1. Open the failed run from the pull request's **Checks** tab and expand the red step.
2. Read the lines beginning `FAIL`, or Zensical's `Warning:` lines, which name the file, line and problem.
3. Reproduce the same command locally, fix the **source** file and push again.

| Message | Usual fix |
|---|---|
| `page does not exist` / `anchor does not exist` | Correct the link path or heading anchor in the Markdown file shown |
| `nav entry points to a missing page` | Correct the path in `nav` in `zensical.toml` |
| `… must be listed in exclude_docs` | Restore the line in `exclude_docs`; internal documents must not be published |
| `missing local file` | Correct the image path in the deck, or restore the SVG in `diagrams/svg/` |
| `theme name mismatch` / `Cannot register theme CSS` | Fix the theme's `@theme` comment or CSS syntax |
| `expected exactly 12 slides` | Check `---` slide separators; if the slide count changes on purpose, update `EXPECTED_SLIDES` in the script in the same pull request |
| `committed exports changed` | A command wrote into `exports/`; restore those files and render to a temporary path |

If Marp hangs or times out, re-run the job once; a persistent failure is a real problem.

## What CI does not test

- Whether the documentation is accurate for the current School ERP build, or approved for publication.
- Spelling, tone, brand compliance or visual quality of pages and slides (screenshots still need human review).
- External links (Google Fonts, GitHub references), which are not fetched.
- The committed PDF, PPTX and preview images: they are only checked for being unchanged, not for matching the current source.
- The brochure, diagrams' own content, sales or social material.
- Security scanning for personal data or secrets.
- Deployment: there is none.

## Updating pinned versions safely

- **Documentation:** in a fresh virtual environment install the new `zensical` version, run the strict build and `check_docs_site.py`, preview the site, then replace `requirements-docs.txt` with the full `pip freeze` output. Update the version in `DOCUMENTATION-PORTAL.md`.
- **Marp CLI:** change `MARP_CLI` in `scripts/ci/check_presentation.mjs` and the commands in `presentations/marp/README.md` together. Compare a fresh render with the committed previews before regenerating any export in a separate, reviewed pull request.
- **GitHub Actions:** actions are pinned to full commit SHAs with the version in a comment. To update, look up the new release's commit SHA, for example `gh api repos/actions/checkout/git/ref/tags/v7.0.1`, and replace both.
- **Runtimes:** Python 3.13, Node.js 22 and `ubuntu-24.04` are set in the workflow; change one at a time.

Make each update in its own pull request so a failure points to one change.
