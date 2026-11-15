# Six-Page A4 Client Brochure

Status: **Draft**. This package is ready for internal content and print review. It is not yet Approved or Published.

## Package contents

| File | Purpose |
|---|---|
| `exports/School_ERP_Client_Brochure_A4_v2.pdf` | Six-page A4 client-facing brochure |
| `source/build_brochure.py` | Editable ReportLab layout source |
| `assets/hero.jpg` | Text-free cover illustration, optimized for the PDF |
| `source-review.md` | Source history, checksums and QA record |

The product name is decided (**Everclass ERP**, 2026-11-15) but is not yet placed in the brochure layout. The company name, phone, email and website areas are intentionally blank. Add approved identity details only after review.

## Narrative

1. One connected school record
2. From scattered work to one operational flow
3. Six-step student journey
4. Administrator, Teacher and Guardian views
5. Twelve current demonstration areas
6. Implementation approach and separately assessed requests

The brochure uses the approved Graphite & Institutional Green hierarchy with restrained cobalt for supporting information. All wording is selectable PDF text; no important product copy is baked into the illustration.

## Build

Requirements:

- Python 3
- `reportlab`
- Noto Sans Regular, Bold and Italic

If Noto Sans is not installed in a standard system location, set `SCHOOL_ERP_FONT_DIR` to the directory containing the three font files.

```bash
python brochure/source/build_brochure.py
```

The output is written to `brochure/exports/School_ERP_Client_Brochure_A4_v2.pdf`.

## Review gate

Before changing the status to Approved:

- insert approved identity and contact details;
- compare every product claim with the deployed demonstration build;
- obtain commercial approval for the setup-fee and annual-support wording;
- print one physical proof and inspect colour, small text, image quality and safe margins;
- record the reviewer, approval date and approved PDF checksum.

