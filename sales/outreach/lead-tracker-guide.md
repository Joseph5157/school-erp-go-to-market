# Lead tracker: permitted use

> **Draft — Internal review only.** GTM-OUTREACH-01. Explains the blank [`lead-tracker-template.csv`](lead-tracker-template.csv). The template in Git contains **column headings only** and must stay that way.

## Permitted use

| Allowed | Not allowed |
|---|---|
| Copy the blank template to the storage location the owner approves, **outside this repository** | Entering any school, person or contact detail in the copy inside this repository |
| Record schools we have a reasonable basis to contact ([controls](privacy-and-outreach-controls.md#when-first-contact-is-appropriate)) | Adding contacts from scraping, directories, purchased lists or WhatsApp groups |
| Record business contact details the person gave us, or a school's published office channel | Personal mobile numbers obtained without the person's agreement |
| Track stage, next action, owner and opt-outs | Recording opinions about people, family details, or anything about students, guardians or staff |
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
| `messages_without_reply` | Count of unanswered messages; stop at 3 | `1` |
| `last_contact_date` | Date of last message or meeting | — |
| `opt_out` | `yes` or `no` | `no` |
| `opt_out_date` | Date of opt-out, if any | — |
| `closed_reason` | `opted out`, `no response`, `not a fit now`, `chose another option`, `proceeded` | — |

## Handling opt-outs

When a contact opts out:

1. Set `opt_out` to `yes`, fill `opt_out_date`, set `stage` to `closed`.
2. Clear the free-text fields (`urgent_problems`, `data_migration_needs`, notes).
3. Keep only what is needed to avoid contacting them again: `lead_ref`, `school_name`, `contact_channel`, `opt_out`, `opt_out_date`.

## Retention

Working default for owner review: delete a closed lead's details **12 months** after `last_contact_date`, except the minimal opt-out record above. Review the tracker at least once a term and remove what is no longer needed. The owner confirms the final retention rule with an adviser.

## Moving to a proposal

When a lead reaches stage 6, detailed requirements move to a completed [requirements capture sheet](../proposals/school-requirements-capture.md), also stored outside Git. The tracker keeps only the stage and next action.
