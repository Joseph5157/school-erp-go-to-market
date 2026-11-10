# Lead tracker: permitted use

> **Draft — Internal review only.** GTM-OUTREACH-01. Explains the blank [`lead-tracker-template.csv`](lead-tracker-template.csv). The template in Git contains **column headings only** and must stay that way.

## Permitted use

| Allowed | Not allowed |
|---|---|
| Copy the blank template to the storage location the owner approves, **outside this repository** | Entering any school, person or contact detail in the copy inside this repository |
| Record schools we have a reasonable basis to contact ([controls](privacy-and-outreach-controls.md#when-first-contact-is-appropriate)) | Adding contacts from scraping, directories, purchased lists or WhatsApp groups |
| Record business contact details the person gave us, or a school's published office channel | Personal mobile numbers obtained without the person's agreement |
| Track stage, next action, owner, unanswered attempts and opt-outs (with a separate Suppression sheet) | Recording opinions about people, family details, or anything about students, guardians or staff |
| Share access with the named people the owner approves | Posting the tracker, or extracts of it, in chat groups, email threads or unapproved tools |
| Import into a spreadsheet program for daily use | Connecting it to a CRM, messaging tool or automation without a separate owner decision |

As a safety net, `.gitignore` ignores `lead-tracker*.csv`, `lead-tracker*.xlsx` and `sales/outreach/private/` (except this blank template). This guards against mistakes. It does not make the repository a safe place for prospect data.

## Columns

Dates use `YYYY-MM-DD`. Keep free-text fields short and factual.

| Column | What to enter | Example values (illustrative) |
|---|---|---|
| `lead_ref` | Internal reference, not the school name | `L-0001` |
| `date_added` | Date the lead was added | `2026-11-10` |
| `school_name` | School name | — |
| `city_district` | City or district | — |
| `state` | `Telangana` or `Andhra Pradesh` | `Telangana` |
| `segment` | `small` (300–500), `medium` (501–1,000), `larger` (1,001–2,000), `outside` | `medium` |
| `approx_students` | Approximate number, as told by the school | — |
| `board_affiliation` | Board or affiliation, if known | — |
| `academic_structure` | Grades, sections, campuses (brief) | — |
| `contact_name` | Business contact's name | — |
| `contact_role` | Owner, correspondent, principal, administrator, other | `principal` |
| `contact_channel` | Channel the contact gave us or the school's published office channel | `office phone` |
| `basis_for_contact` | `enquiry`, `referral with permission`, `met at event`, `published office channel` | `referral with permission` |
| `current_system` | `paper`, `spreadsheets`, `software`, `mixed` | `spreadsheets` |
| `urgent_problems` | Up to three, in the school's words | — |
| `must_have_areas` | Catalogue area codes | `M05; M06; M08` |
| `later_areas` | Catalogue area codes | `M07` |
| `separate_assessment_requests` | Requests outside current scope | `fees; transfer certificate` |
| `decision_maker_involved` | `yes`, `no`, `unknown` | `no` |
| `data_migration_needs` | Brief note; no data files | `students in Excel` |
| `demo_interest` | `none`, `short`, `detailed`, `held` | `short` |
| `demo_date` | Date held or agreed | — |
| `qualification_rating` | `ready`, `developing`, `early`, `closed` ([guide](lead-qualification.md)) | `developing` |
| `stage` | `1-introduction`, `2-interested`, `3-requirements`, `4-demo`, `5-qualification`, `6-proposal`, `7-follow-up`, `closed` ([process](sales-process.md)) | `2-interested` |
| `next_action` | One concrete action | `send demo invitation` |
| `next_action_date` | Date for that action | — |
| `internal_owner` | Role or initials of the person responsible | `outreach lead` |
| `unanswered_attempts` | Unanswered outreach attempts for this **school**, counted across all channels and all contacts; never reset by switching channel; stop at 3 ([contact types](outreach-templates.md#contact-types-and-the-attempt-limit)) | `1` |
| `last_contact_date` | Date of last message or meeting | — |
| `opt_out` | `yes` or `no` | `no` |
| `opt_out_scope` | `school` or `contact` (see [opt-outs and suppression](#opt-outs-and-suppression)) | — |
| `opt_out_date` | Date of opt-out, if any | — |
| `closed_reason` | `opted out`, `no response`, `not a fit now`, `chose another option`, `proceeded` | — |

## Opt-outs and suppression

> **Proposed approach, Pending owner and legal approval.** Do not rely on it for live outreach until it is approved.

An opt-out must stop contact on **every** channel, not just the one it arrived on. To make that reliable, the private tracker file has a separate **Suppression** sheet. It is kept apart from the working lead rows so that deleting closed leads never deletes an opt-out.

### Scope: school or contact

| Scope | When to use it | Effect |
|---|---|---|
| `school` | The owner, correspondent, principal, management or school office says the **school** is not interested or does not want contact. **Use this whenever the scope is unclear.** | No outreach to anyone at that school, on any channel |
| `contact` | An individual asks not to be contacted **for themselves only** and does not speak for the school | No outreach to that person on any channel; another contact at the school may be approached only if there is a separate reasonable basis, and the school's attempt count carries on (it never restarts) |

### Minimum identifiers

Record only what is needed to recognise the school or contact again:

| Column | Content |
|---|---|
| `suppression_ref` | Internal reference, for example `S-0001` |
| `scope` | `school` or `contact` |
| `school_name` | School name |
| `city_district` | City or district, to tell schools with similar names apart |
| `contact_identifier` | For `contact` scope only: the phone number or email address exactly as we used it. Leave empty for `school` scope |
| `opt_out_date` | `YYYY-MM-DD` |
| `recorded_by` | Role or initials |
| `next_review_date` | `YYYY-MM-DD` |

Do **not** record the person's name, the reason they gave, or any comment about them. One entry covers all channels.

### How it prevents further outreach

1. Before **any** outreach attempt on any channel, the sender checks the Suppression sheet for the school name and city, and for the phone number or email they are about to use.
2. If there is a match, do not contact. Do not try another channel or another person to get around a `school` entry.
3. In the working lead row, set `opt_out` to `yes`, fill `opt_out_scope` and `opt_out_date`, set `stage` to `closed`, and clear the free-text fields (`urgent_problems`, `data_migration_needs`, notes) and contact fields that are no longer needed.
4. If the school later contacts us of its own accord, record the enquiry and review the suppression entry with the outreach lead before replying.

### Access and storage

- Stored only in the owner-approved location **outside Git**, with access limited to named people. It is never kept in this repository (`.gitignore` blocks `lead-tracker*` and `sales/outreach/private/` as a safety net only).
- **Read** access for the people the owner authorises to do outreach, because they must check it before contacting a school. **Edit** access for the outreach lead and the owner only.
- Not copied into chat groups, email threads, personal notes or unapproved tools. No exports except for an approved review.

### Review and deletion

- Review the Suppression sheet at least once a term, at the `next_review_date`. Remove duplicates and confirm each entry is still needed for its purpose of preventing contact.
- Suppression entries are deleted only under their **own approved retention policy**, which is **Pending**. It must balance keeping the opt-out effective against holding data no longer than needed. Until it is approved, do not delete suppression entries routinely, and do not add more than the minimum identifiers.

## Retention

> **Status: Pending.** No retention period is approved. None of the periods below is claimed to be required by law.

- **Proposed** for owner and legal review: delete a closed lead's working details **12 months** after `last_contact_date`.
- Delete **earlier** whenever the details are no longer needed, for example when a school says it is not interested, a lead is closed with no realistic next step, or a contact leaves the school.
- Review the tracker at least once a term and remove what is no longer needed.
- Opt-out suppression entries are **not** covered by this period. They follow their own retention policy, which needs separate approval (see [review and deletion](#review-and-deletion)).
- The owner confirms the final rules with an adviser before outreach begins.

## Moving to a proposal

When a lead reaches stage 6, detailed requirements move to a completed [requirements capture sheet](../proposals/school-requirements-capture.md), also stored outside Git. The tracker keeps only the stage and next action.
