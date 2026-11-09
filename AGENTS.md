# Instructions for AI Agents (Codex, Claude Code)

## Scope

This repository contains go-to-market material only: brand, brochure, documentation, demo, sales, diagrams, presentations, social, website copy and research. Do not add production application code; that belongs in `school-erp`.

## Hard security rules

Never add to this repository, even as examples:

- Real student, guardian or staff information
- Demo passwords, API keys, tokens or Railway secrets
- School databases or exports
- Customer contracts containing personal information
- Production application code

Sample data under `demo/sample-data/` must be entirely fictional and clearly labelled as such.

## Working conventions

- Branch names: `<type>/<short-description>` (e.g. `foundation/gtm-repository-setup`).
- Work packages are named `GTM-<AREA>-<NN>`; use that as the pull request title prefix.
- Open pull requests as drafts first.
- Update `docs/content-status.md` whenever an asset is added or its status changes.
- Diagrams are authored as Mermaid source in `diagrams/mermaid/`; slides as Marp markdown in `presentations/marp/`.
- Follow `brand/brand-guidelines.md` (Graphite & Institutional Green) for all outward-facing material.
- Do not mark content Approved or Published; only the owner does that.
