#!/usr/bin/env python3
"""Check the built documentation site: nav targets exist and excluded documents are absent.

Run after `zensical build --clean --strict`, from the repository root:

    python scripts/ci/check_docs_site.py

The excluded set is read from `exclude_docs` in zensical.toml (gitignore-style
patterns, matched with pathspec, which is pinned in requirements-docs.txt), so the
check follows the configuration instead of a second hard-coded list. Files in
REQUIRED_EXCLUDED must always be excluded: removing them from `exclude_docs`
fails this check.

Exit code 0 when every check passes, 1 otherwise.
"""

from __future__ import annotations

import json
import re
import sys
import tomllib
from pathlib import Path

import pathspec

# Internal files that must never be published, whatever exclude_docs says:
# the status register, CI notes, the proposal catalogue and the role overviews
# with presenter notes (see DOCUMENTATION-PORTAL.md).
REQUIRED_EXCLUDED = (
    "content-status.md",
    "CI.md",
    "product/feature-catalogue.md",
    "administrator/overview.md",
    "faculty/overview.md",
    "guardian/overview.md",
)

# Every commercial document under sales/ starts with this marker (GTM-SALES-01).
# It must never appear in the built portal.
INTERNAL_MARKER = "Internal review only"


def fail(errors: list[str], message: str) -> None:
    errors.append(message)
    print(f"FAIL  {message}")


def page_url(rel: str) -> str:
    """Directory-style URL Zensical would use for a Markdown file (use_directory_urls)."""
    stem = rel[: -len(".md")]
    if stem == "index":
        return ""
    if stem.endswith("/index"):
        return stem[: -len("index")]
    return stem + "/"


def walk_nav(entries):
    """Yield every page path or URL string in a Zensical nav structure."""
    for entry in entries:
        if isinstance(entry, str):
            yield entry
        elif isinstance(entry, dict):
            for value in entry.values():
                yield from walk_nav([value] if isinstance(value, str) else value)
        elif isinstance(entry, list):
            yield from walk_nav(entry)


def page_title(path: Path) -> str | None:
    text = path.read_text(encoding="utf-8", errors="replace")
    front = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
    if front:
        title = re.search(r"^title:\s*(.+)$", front.group(1), re.M)
        if title:
            return title.group(1).strip().strip("\"'")
    heading = re.search(r"^#\s+(.+)$", text, re.M)
    return heading.group(1).strip() if heading else None


def main() -> int:
    root = Path.cwd()
    config = tomllib.loads((root / "zensical.toml").read_text(encoding="utf-8"))["project"]
    docs_dir = root / config.get("docs_dir", "docs")
    site_dir = root / config.get("site_dir", "site")
    patterns = [line for line in config.get("exclude_docs", "").splitlines() if line.strip()]
    errors: list[str] = []

    if not patterns:
        fail(errors, "zensical.toml has no exclude_docs patterns")
        return 1

    spec = pathspec.GitIgnoreSpec.from_lines(patterns)
    all_files = sorted(p.relative_to(docs_dir).as_posix() for p in docs_dir.rglob("*") if p.is_file())
    excluded = [rel for rel in all_files if spec.match_file(rel)]
    print(f"exclude_docs patterns: {len(patterns)}; excluded source files: {len(excluded)}")

    for required in REQUIRED_EXCLUDED:
        if (docs_dir / required).exists() and required not in excluded:
            fail(errors, f"{required} must be listed in exclude_docs")

    # Zensical treats a nav string that does not resolve to a page as an external URL,
    # so a mistyped nav path passes the strict build. Check every nav target exists.
    nav_targets = list(walk_nav(config.get("nav", [])))
    for target in nav_targets:
        if re.match(r"^[a-z][a-z0-9+.-]*://", target, re.I) or target.startswith("mailto:"):
            continue
        if not (docs_dir / target).is_file():
            fail(errors, f"nav entry points to a missing page: {target}")
        elif target in excluded:
            fail(errors, f"nav entry points to an excluded page: {target}")
    print(f"nav entries checked: {len(nav_targets)}")

    index_html = site_dir / "index.html"
    search_file = site_dir / "search.json"
    if not index_html.exists() or not search_file.exists():
        fail(errors, f"built site not found in {site_dir}; run `zensical build --clean --strict` first")
        return 1

    items = json.loads(search_file.read_text(encoding="utf-8")).get("items", [])
    if not items:
        fail(errors, "search.json contains no items")
    locations = [item.get("location", "") for item in items]
    page_titles = {
        item.get("title", "").strip().lower()
        for item in items
        if "#" not in item.get("location", "")
    }

    for rel in excluded:
        # A raw copy of the source file (for example an asset or .gitkeep).
        if (site_dir / rel).exists():
            fail(errors, f"excluded file copied into the site: {rel}")
        if not rel.endswith(".md"):
            continue
        url = page_url(rel)
        for candidate in (site_dir / url / "index.html", site_dir / (rel[: -len(".md")] + ".html")):
            if candidate.exists():
                fail(errors, f"excluded page built: {rel} -> {candidate.relative_to(root).as_posix()}")
        if url and any(loc.split("#", 1)[0] == url for loc in locations):
            fail(errors, f"excluded page in search index: {rel} (location {url})")
        title = page_title(docs_dir / rel)
        if title and title.lower() in page_titles:
            fail(errors, f"excluded page title found in search index: {rel} ({title!r})")

    # Commercial and sales documents live outside docs/ and carry this marker.
    # If any of them is ever copied or linked into the portal, the marker appears
    # in the built site and the check fails.
    built_text_files = [p for p in site_dir.rglob("*") if p.is_file() and p.suffix in {".html", ".json", ".txt", ".xml"}]
    for path in built_text_files:
        if INTERNAL_MARKER in path.read_text(encoding="utf-8", errors="replace"):
            fail(errors, f"internal-only document published: {path.relative_to(root).as_posix()} "
                         f"contains {INTERNAL_MARKER!r}")
    print(f"internal-marker check: {len(built_text_files)} built file(s) scanned")

    if errors:
        print(f"\n{len(errors)} problem(s) found.")
        return 1
    print(f"OK    {len(excluded)} excluded file(s) absent from {site_dir.name}/ and search.json "
          f"({len(items)} search entries checked)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
