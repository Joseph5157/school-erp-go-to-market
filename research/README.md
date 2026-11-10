# Research: competitors and target markets

> **Draft — Internal review only.** GTM-RESEARCH-01, research date 2026-11-10. Internal research only: no outreach, publication, deployment or pricing approval. No personal contact information or prospect lists are stored here.

Start with the [executive summary](executive-summary.md).

## Contents

| File | What it covers |
|---|---|
| [`executive-summary.md`](executive-summary.md) | Strongest findings, uncertainties and decisions for management |
| [`competitors/competitor-landscape.md`](competitors/competitor-landscape.md) | 15 vendors discovered, 8 compared; vendor profiles; feature comparison against M01–M12 and out-of-scope requirements |
| [`competitors/competitor-comparison.csv`](competitors/competitor-comparison.csv) | Structured comparison, one row per vendor (codes explained below) |
| [`competitors/pricing-and-business-models.md`](competitors/pricing-and-business-models.md) | Publicly verified prices and commercial models; our model side by side; no price of our own |
| [`competitors/source-register.md`](competitors/source-register.md) | Every source with URL, publisher, dates, supported claim, evidence class and confidence |
| [`market/telangana-andhra-pradesh.md`](market/telangana-andhra-pradesh.md) | UDISE+ figures for private schools, boards and regulation context, urban/rural considerations, purchasing influences, challenges |
| [`market/school-segmentation.md`](market/school-segmentation.md) | What data can and cannot say about our size segments; schools under 500 |
| [`market/market-entry-recommendations.md`](market/market-entry-recommendations.md) | First segment, buyer roles, demo workflows, competitors, objections, product decisions and a validation plan (proposed only) |
| [`positioning-and-feature-gaps.md`](positioning-and-feature-gaps.md) | How competitors sell; our strengths, gaps and disadvantages; installation and hosting model; five testable hypotheses |

## Evidence rules used throughout

| Code | Meaning |
|---|---|
| GOV | Official government statistic |
| VC | Vendor claim on the vendor's own website |
| TP | Third-party listing, review or news report (unverified) |
| DER | Our arithmetic on a cited figure |
| HYP | Hypothesis to test with schools |

Competitor capability codes (landscape and CSV): **VA** verified advertised, **NPV** not publicly verified, **NO** not offered or explicitly not claimed according to a source. A feature missing from a vendor's website is **NPV, never NO**. For our own product: **DOC** documented in the [feature catalogue](../docs/product/feature-catalogue.md) (a documented baseline, not re-verified on live staging), **NOT** not in the current product.

## Verification

- **Official statistics:** UDISE+ 2025-26 and 2024-25 booklets downloaded and tables extracted locally; figures copied from the extracted rows (source register S01, S02).
- **Vendor pages:** read on 2026-11-10 with an automated fetcher. Truncated or summarised parts are marked Low confidence.
- **URL check:** every URL in the source register was requested on 2026-11-10. Results are recorded in the pull request.
- **CSV:** checked for a consistent column count and valid codes.
- **Links:** internal Markdown links and anchors checked.
- **Repository CI:** documentation, presentation, website and demo-automation checks run before the pull request.

## Limits of this research

- Desk research only: no school, vendor or customer was contacted
- Vendor features are advertised claims; no product was trialled
- No official breakdown of TG/AP private schools by size band, board or location was found
- Regulatory context comes from news reports and needs legal confirmation
- Vendor websites change frequently; re-check before any use
- Our own product is described from the catalogue; live staging verification is still pending

## Do not

- Quote competitor claims as facts, or criticise competitors in any school-facing material
- Use any figure here in outward material without re-checking the source and owner approval
- Add school names, contact details or prospect lists to this folder
