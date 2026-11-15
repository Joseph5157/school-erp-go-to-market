# Documentation Portal (Zensical)

Status: **Draft** (GTM-DOCS-01). Local preview and local builds only. Do not deploy to GitHub Pages or any public host without owner approval.

The Everclass ERP documentation portal is a searchable website built with [Zensical](https://zensical.org/docs/) from the Markdown files in `docs/`. Configuration lives in [`zensical.toml`](zensical.toml).

## Requirements

- Python 3.10 or later (tested with Python 3.13 on Windows 11)
- Zensical **0.1.0**, pinned with its dependencies in [`requirements-docs.txt`](requirements-docs.txt)

## Install (isolated environment)

Windows (PowerShell):

```powershell
py -3.13 -m venv .venv-docs
.\.venv-docs\Scripts\python -m pip install -r requirements-docs.txt
.\.venv-docs\Scripts\zensical --version   # expect 0.1.0
```

macOS / Linux:

```bash
python3 -m venv .venv-docs
./.venv-docs/bin/python -m pip install -r requirements-docs.txt
./.venv-docs/bin/zensical --version       # expect 0.1.0
```

`.venv-docs/`, `.cache/` and the generated `site/` folder are git-ignored.

## Preview locally

```powershell
.\.venv-docs\Scripts\zensical serve
```

Open <http://localhost:8000/>. Pages reload when Markdown files change. Stop with `Ctrl+C`.

## Build

Clean production build (clears the build cache first):

```powershell
.\.venv-docs\Scripts\zensical build --clean
```

Strict validation build (fails with exit code 1 on any broken internal link or anchor):

```powershell
.\.venv-docs\Scripts\zensical build --clean --strict
```

Stop `zensical serve` before running `build --clean`: both use `.cache/` and `site/`, and on Windows the clean step fails with "cache directory could not be removed" while the server is running.

Output is written to `site/`. Open `site/index.html` through `zensical serve` rather than directly from disk, because search and navigation expect a web server.

## Structure

| Section | Source folder | Notes |
|---|---|---|
| Home | `docs/index.md` | Landing page: choose a manual, common tasks, product boundaries |
| Administrator | `docs/administrator/` | Office manual |
| Teacher | `docs/faculty/` | Folder name kept from the original repository layout; navigation label is *Teacher* |
| Guardian | `docs/guardian/` | Guardian Portal manual |
| Implementation | `docs/implementation/` | Onboarding guide |
| FAQ | `docs/faq/index.md`, `docs/getting-started/` | FAQ plus help pages: signing in and passwords, conventions and glossary |

The home page is a top-level navigation entry on purpose: Zensical shows breadcrumbs (`navigation.path`) only when the homepage is counted, so do not nest `index.md` inside a section.

Brand styling (Graphite & Institutional Green, Noto Sans) is in `docs/assets/stylesheets/school-erp.css`.

### Excluded from the website and search index

Set with `exclude_docs` in `zensical.toml`. These files stay in the repository but are not built:

- `docs/content-status.md` — internal status register
- `docs/CI.md` — internal CI maintainer notes
- `docs/product/` — feature catalogue for proposals
- `docs/administrator/overview.md`, `docs/faculty/overview.md`, `docs/guardian/overview.md` — role overviews containing presenter "demo emphasis" notes
- `.gitkeep` placeholders

After every build, confirm none of these appear in `site/` or `site/search.json` by running `python scripts/ci/check_docs_site.py`. CI runs the same check on every pull request; see [`docs/CI.md`](docs/CI.md).

## Writing rules

- Describe only functionality verified in the current `school-erp` default branch. Quote buttons and page names exactly, in **bold**.
- Never include real student, guardian or staff data, passwords, credentials, staging addresses or screenshots containing personal data.
- Every page starts with the Draft notice. Only the owner may mark content Approved or Published.
- Add new pages to `nav` in `zensical.toml`, then run a strict build.
- Update `docs/content-status.md` when pages are added or change status.

## Future Telugu edition

Zensical builds one language per site. To add Telugu later without restructuring:

1. Create a parallel source folder (for example `docs-te/`) mirroring the same file names and a `zensical.te.toml` with `docs_dir = "docs-te"`, `site_dir = "site/te"` and `[project.theme] language = "te"`.
2. Link the editions with `[[project.extra.alternate]]` entries in both configuration files.
3. Use Noto Sans Telugu for Telugu text.
4. Publish Telugu pages only after native-speaker review. Do not machine-translate.

## Known limitations

- The theme loads Noto Sans from Google Fonts when online; without internet the browser falls back to system fonts.
- No approved logo exists: the header uses a neutral bundled book icon, and the favicon is the Zensical default.
- `site_url` is intentionally unset because there is no approved host. Instant navigation and the sitemap need it before any deployment.
