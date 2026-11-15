---
title: Assessments and report cards
description: Set up grading scales, plan assessments, track marks entry, finalise results, correct results, and preview, publish, withdraw or republish Term report cards for guardians.
---

# Assessments and report cards

<p class="erp-draft" data-search-exclude><strong>Draft.</strong> Verify against the deployed build before sharing.</p>

Results move through clear stages. Each stage is a deliberate action by a different person:

| Stage | Who | What happens |
|---|---|---|
| **Plan** | Administrator | Create the assessment for a Term, Subject and Section. |
| **Enter marks** | Assigned subject teacher | Enter a score or Absent for each student, saved as a draft. |
| **Finalise** | Administrator | Results become official. Nothing is shown to guardians yet. |
| **Remarks** | Class teacher | Optional term remark per student. |
| **Publish** | Administrator | Term report cards are released to guardians. |

!!! info "No totals, weighting or ranks"
    Everclass ERP shows each assessment separately. It does not calculate totals, weighted averages, GPA or class ranks. "Absent" is never counted as zero, and a blank result is neither Absent nor zero.

## Set up grading scales

Marks are the official result; grades are worked out from the percentage.

1. Go to *Assessments & Results > Grading scales* and select **Add grading scale**.
2. Enter a name and choose the Class/Grades it **Applies to**. Each Class/Grade can use only one scale per Academic Year.
3. Save, then on the scale's page select **Add band** for each grade, giving the starting percentage and the grade (for example *A* from 90%).
4. Make sure there is a band starting at **0%** so every percentage gets a grade. Until then the scale shows **Needs a band from 0%**.

A percentage gets the band with the highest starting point at or below it. **Remove** takes effect at once, without confirmation. Finalised assessments keep the bands they were finalised with, so later changes never alter their grades.

## Plan an assessment

1. Go to *Assessments & Results > Assessments* and select **Plan an assessment**.
2. Choose the **Term**, **Subject** and **Section**.
3. Enter the assessment name (for example *Unit Test 1*), date and **maximum marks**.
4. Enter a **pass mark** if you want pass/fail shown, or leave it empty.
5. Select **Save assessment**.

The assigned subject teacher can enter marks from the assessment date. Until results are entered you can edit the assessment or select **Delete** — deletion happens at once and is not confirmed first. Once results exist, the Term, Subject, Section, date and maximum marks are locked.

## Track marks entry

Open an assessment from *Assessments & Results > Assessments* (use **Filter** to narrow the list). The page shows the assessment details, the responsible teacher and each student's result. Teachers enter marks themselves; see [Entering assessment marks](../faculty/assessment-marks.md).

## Finalise results

1. Open the assessment.
2. Under **Finalize results**, check for any **Not ready yet** message. Every student on the roster must have a result (a score or Absent).
3. Select **Finalize results**.

Finalising makes these the official results. The grading bands are frozen at this point. After this, only audited corrections can change a result.

!!! warning "Finalising does not publish"
    Finalised results are not visible to guardians until you publish the Term report card.

## Correct a finalised result

1. Open the finalised assessment and select **Correct** next to the student's result.
2. Enter the corrected score (or Absent) and the reason.
3. Select **Save correction**.

The assessment stays finalised. The previous value, your name, the time and the reason are kept permanently. If the report card was already published, it becomes **stale** (see below).

## Review results

- **Subject/Section results** — choose a Subject, a Section and optionally a Term to see finalised results, one column per assessment.
- From an assessment, open its **result sheet**.
- From a Student page, open **Results and report cards** for that student's finalised results and Term report cards.

## Publish report cards to guardians

1. Go to *School setup > Academic Years* and open **Terms** on the year's card.
2. Next to the Term, select **Publish to guardians**.
3. Choose a Section and select **Preview**.
4. Review each student. The preview shows exactly what will be released and marks each student as **Will publish**, **Will republish**, **Already published**, **Nothing to publish** or **Incomplete** (some assessments not yet finalised).
5. For incomplete students, you may tick **Publish the finalized results anyway (marked partial)**. Guardians then see a note that some results are not yet published.
6. Select **Update preview** if you change the selection.
7. Select **Confirm and publish** to release the selected report cards.

Guardians see published report cards at once in the Guardian Portal. If results changed since the preview, nothing is published and you are asked to preview again. Where the school uses staff-sent WhatsApp messages, report card notices are prepared in the **Message queue**.

!!! note "Permission"
    You can preview without the publish permission, but confirming requires it.

## Stale publications

If a released result or remark is corrected, the report card becomes **stale**. Guardians stop seeing it until you act.

1. Go to *Assessments & Results > Stale publications*.
2. Open the publication. It explains what changed.
3. Select **Review and republish** to open the publish preview for that Section, then confirm there; or select **Withdraw**.

## Withdraw a published report card

1. Open the publication (from **Stale publications** or the student's results).
2. Select **Withdraw** and confirm.

Withdrawal takes effect at once: guardians stop seeing the report card. Every version, including withdrawn and replaced ones, is kept permanently under **All versions**.
