---
title: Academic structure
description: Plan and configure Classes/Grades, Sections, Subjects, Subject offerings, report card order, Terms, grading scales and timetable periods for a new school.
---

# Academic structure

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

The academic structure must exist before students are placed, teachers are assigned or assessments are planned.

## Plan it with the school first

Agree these lists in writing before entering anything:

1. **Classes/Grades** in display order, for example Nursery, LKG, UKG, Grade 1 … Grade 10.
2. **Sections** for each Class/Grade, for example A, B, C.
3. **Subjects** the school teaches, with optional short codes.
4. For each Class/Grade: which Subjects it takes, whether any Subject is taken by only some Sections, and the order Subjects appear on report cards.
5. **Terms** with start and end dates. Terms may not overlap.
6. **Grading scales** — grade bands by percentage, and which Class/Grades use each scale.
7. **Timetable periods** — the number of teaching periods in a day.

## Configure in this order

| Order | Task | Manual page |
|---|---|---|
| 1 | Classes/Grades and Sections | [Classes, sections, subjects and terms](../administrator/academic-structure.md#classesgrades-and-sections) |
| 2 | Subjects | [Subjects](../administrator/academic-structure.md#subjects) |
| 3 | Subjects offered, with report card position | [Subjects offered](../administrator/academic-structure.md#subjects-offered-in-an-academic-year) |
| 4 | Terms | [Terms](../administrator/academic-structure.md#terms) |
| 5 | Grading scales with a band from 0% | [Grading scales](../administrator/assessments-and-report-cards.md#set-up-grading-scales) |
| 6 | Timetable periods and slots (optional at go-live) | [Timetable](../administrator/timetable.md) |

!!! tip "Classes can also come from the Excel import"
    The import's optional **Classes** sheet can create Class/Grade and Section pairs. Creating them by hand first makes the display order easier to control. See [Excel import validation](excel-import.md).

## Checks

- [ ] Every Class/Grade has at least one Section.
- [ ] **Which Subjects does a Section take?** on *Subjects offered* returns the expected list for a sample Section in each Class/Grade.
- [ ] Terms cover the Academic Year without overlaps.
- [ ] Every grading scale has a band from 0% and applies to the intended Class/Grades.
- [ ] Setup checklist steps *Classes and sections* and *Subjects offered* are complete.
