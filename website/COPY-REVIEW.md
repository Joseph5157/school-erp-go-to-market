# Marketing website — copy review log

Status: **Draft.** GTM-WEBSITE-02, 2026-11-10. Supports Gate 3 in [`PUBLICATION-READINESS.md`](PUBLICATION-READINESS.md). Does not approve any copy.

## Sources compared

- `docs/product/feature-catalogue.md` (areas M01–M12 and "Current boundaries and future requests")
- `presentations/marp/school-erp-client-deck.md`
- `sales/faq/sales-faq.md` (internal; only public-safe answers reused)
- `brand/brand-guidelines.md` (tone and claims rules)

Every page (`/`, `/features/`, `/who-its-for/`, `/implementation/`, `/faq/`, `/contact/`) and the shared header, footer and call-to-action band were read in full. The comparison is against documents only; **no deployed build was checked** (required before Gate 3 can be approved).

## Corrections made in this PR

| Page | Before | After | Reason |
|---|---|---|---|
| Home (hero illustration) | Teacher "Takes attendance and enters marks for assigned classes" | "Records class attendance and enters marks for assigned subjects" | Attendance is captured by the class teacher for their class (M05 04); marks follow subject assignments (M06 02) |
| Home (Teacher card) | "Take attendance and submit a complete class register" | "As class teacher, take attendance and submit the complete register" | Same: not every teacher takes attendance |
| Home (publication band) | Stage chips "Draft / Finalised / Preview" looked like product status labels | Chips read "Not visible" until "Visible to guardian", with the caption "Illustration of the stages, not a product screenshot" | Avoid implying exact application labels; the point is guardian visibility (M06 08) |
| Who it's for (Teachers) | "Assigned classes only"; "Class attendance on the school day" | "Assigned classes and subjects"; "Daily attendance for their class (class teachers)" | Subject teachers enter marks; attendance is class-teacher work |
| Who it's for (Principals) | Implied a separate principal role | Adds "using an administrator account with the permissions the school assigns" | The product has administrator, teacher and guardian boundaries (M12 01); no separate principal role is documented |
| Features (intro) | "Everything below is in the current product" | "The twelve areas below are in the current product… Requests that are not included are listed at the end of the page" | The same page also lists excluded requests, so "everything below" was ambiguous |
| Implementation (diagram caption) | "Each stage is confirmed with the school before the next begins" | "Six stages, from the first requirements conversation to launch and support" | A process commitment not stated in the diagram or sales materials |
| Contact (Request a demo) | "using fictional school data" | "using a demonstration school with fictional data" | Clearer; the live demo environment itself is still readiness item R1 |

## Checked and unchanged

- Boundaries: fee collection and payments, native apps, offline working, automatic WhatsApp/SMS/email, bulk rollover, transfer certificates, multi-school SaaS, ranks/GPA/board rules and extra modules appear only as **not included** (Features table, Who it's for callout, FAQ). Matches the catalogue's boundaries table.
- WhatsApp Assist is described as preparing messages that staff send; consent rechecks match M09 04–M09 10.
- The PWA is described as installable on supported devices and online-only, with no offline mode, background sync or push (M12 11).
- Telugu: only PDF fonts are claimed; the interface is stated to be English (catalogue interpretation notes).
- Feature cards M01–M12 each restate catalogue items; no new capability was added.
- Commercial wording describes the model only (setup fee, annual support, hosting separate, additional development quoted). No prices, discounts, SLAs, support hours, licensing or ownership terms appear.
- DPDP: the FAQ states that no compliance claim is made and that each school should take its own advice, consistent with the sales FAQ.

## Open items for the owner (not changed)

| Item | Where | Question |
|---|---|---|
| "Areas served: Telangana and Andhra Pradesh" | Contact | Confirm this is the public service area (Gate 4) |
| "A short executive version or a longer, detailed session" | Contact | Both demo scripts are Draft and not yet rehearsed on a live environment (R1); keep or remove? |
| "Hosting is shown separately" and the hosting FAQ | Implementation, FAQ | Taken from the internal sales FAQ; confirm it is acceptable publicly |
| "Our implementation team" responsibilities | Implementation | Confirm the team description and the training offer before publication |
| Product name "School ERP" | Everywhere | Provisional until Gate 1 |
| Same-day absence alerts as a WhatsApp Assist example | Home, FAQ | Catalogue item M09 06; re-verify on the deployed build |
