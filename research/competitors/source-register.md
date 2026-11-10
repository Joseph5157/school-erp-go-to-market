# Research source register

> **Draft — Internal review only.** GTM-RESEARCH-01. Every material external claim in `research/` cites a source ID from this register. All sources were accessed on **2026-11-10**. Nothing here has been independently verified with vendors or schools.

## Evidence classes

| Code | Meaning | How to use it |
|---|---|---|
| **GOV** | Official government statistic or official government body | Strongest evidence; still subject to the publisher's own disclaimers |
| **VC** | Vendor claim on the vendor's own official website | What the vendor says it offers; not proof that it works as described |
| **TP** | Third-party listing, directory, review site or news report | Attributed, unverified; often stale or inconsistent |
| **DER** | Our own arithmetic on a cited figure | Shows the calculation; inherits the source's limits |
| **HYP** | Hypothesis or untested assumption | Must be tested with schools before relying on it |

Confidence: **High** (official data, read directly), **Medium** (official vendor page, read directly), **Low** (partially read page, model-summarised content, third-party or search-result snippet only).

## How the sources were read

- Government PDFs were downloaded and their tables extracted locally with `pypdf`. The figures below are copied from the extracted rows.
- Vendor pages were read with an automated page fetcher. Some long pages were **truncated**: the unread portions are noted per source, and anything taken from a model summary of a truncated page is marked Low.
- Search-result snippets were used only to *discover* vendors and third-party claims. They are not used as evidence of a vendor's features.
- No gated directory was accessed, no access control was bypassed, and no personal contact details were recorded.

## Government and official statistics

| ID | Source title | URL | Publisher | Publication / reference date | Supported claims | Class | Confidence |
|---|---|---|---|---|---|---|---|
| S01 | Report on UDISE+ 2025-26 (booklet) | https://dashboard.udiseplus.gov.in/report2026/static/media/UDISE+2025_26_Booklet_existing.edd7cd16d934a10377ba.pdf | Department of School Education & Literacy, Ministry of Education, Government of India | Reference year 2025-26; data cut-off 31 March 2026 (report disclaimer, p. 7) | Schools, enrolment and teachers by state (Table 2.2, p. 32); schools by enrolment bracket, all managements (Table 2.3, p. 33); Private Unaided Recognized schools (Table 3.5, p. 44), teachers (Table 4.5, p. 56), enrolment (Table 5.4, p. 88); computer facility (Table 7.9, p. 137); internet facility (Table 7.11, p. 139) | GOV | High |
| S02 | Report on UDISE+ 2024-25 (booklet) | https://dashboard.udiseplus.gov.in/report2026/static/media/UDISE+2024_25_Booklet_existing.118ba29d4773e6372f72.pdf | Ministry of Education, Government of India | Reference year 2024-25 | Same tables for the previous year (Tables 2.2, 3.5, 5.4, 7.11), used for year-on-year change | GOV | High |

## Vendor websites (official)

| ID | Source title | URL | Vendor | Publication date | Supported claims | Class | Confidence |
|---|---|---|---|---|---|---|---|
| S03 | Fedena pricing and plans | https://fedena.com/pricing_and_plans | Foradian Technologies Pvt Ltd (Bengaluru) | Not stated | Plan names and yearly prices; unlimited users; free cloud hosting; included training, onboarding, support; module lists by plan | VC | Medium |
| S04 | Fedena home page | https://fedena.com | Foradian Technologies | Not stated | Web-based product; iOS/Android apps; open-source basic version; boards supported; reach claims | VC | Medium |
| S05 | School management software price (article page) | https://www.entab.in/school-management-software-price.html | Entab | Not stated | No published price; price "depends on the strength of the school"; product names CampusCare, CampusSoft, CampusKidz | VC | Medium |
| S06 | School management software: features and modules | https://www.entab.in/school-management-software.html | Entab | Not stated | Cloud/web-based CampusCare; module list; SMS/email integration; customer-count claim | VC | Medium |
| S07 | MyClassBoard home page | https://www.myclassboard.com/ | MyClassBoard | Not stated | Hyderabad (Madhapur) address in header; module families; parent and admin apps; integrations; demo-led; no price shown. Final part of the page (about 22k characters, including footer) unread | VC | Medium (Low for unread parts) |
| S08 | Why MyClassBoard | https://www.myclassboard.com/why-myclassboard/ | MyClassBoard | Not stated | Same navigation and module families; final part unread | VC | Low |
| S09 | MyClassBoard channel partner page | https://www.myclassboard.com/channel-partner/ | MyClassBoard | Not stated | Existence of a channel-partner page only; body text could not be read | VC | Low |
| S10 | Teachmint home page | https://www.teachmint.com/ | Teachmint Technologies Pvt Ltd | Not stated | Leads with classroom hardware (interactive flat panels) and classroom software; offices listed; partner and dealer pages; no price | VC | Medium |
| S11 | Teachmint about page | https://www.teachmint.com/about | Teachmint Technologies | Not stated | Company positioning and reach claims | VC | Medium |
| S12 | Teachmint ERP URLs | https://www.teachmint.com/erp | Teachmint Technologies | Not stated | `/erp` and `/school-erp` returned hardware marketing, not ERP content | VC | Medium |
| S13 | Teachmint fee management URL | https://www.teachmint.com/fee-management | Teachmint Technologies | Not stated | Navigation lists admission management, student attendance, fee management, performance reports, homework and Teachpay. The feature pages themselves were not opened | VC | Low |
| S14 | Campus 365 home page | https://www.campus365.io | Campus 365 | Not stated | Module list; mobile apps; partner and OEM rebrand/resell programmes; reach claims | VC | Medium |
| S15 | Campus 365 plans and pricing | https://www.campus365.io/plans-and-pricing | Campus 365 | Not stated | Lite plan price and conditions; Enterprise unpriced; inclusions; billing words | VC | Medium |
| S16 | Vidyalaya School Management Software home page | https://www.vidyalayaschoolsoftware.com | Vidyalaya (footer links to Sapphire Software Solutions, Ahmedabad) | Not stated | Module list; parent, school and management apps; partner programme; client claims. About a third of the page was only model-summarised | VC | Medium (Low for summarised parts) |
| S17 | Class ON App — Telangana page | https://classonapp.com/telangana | Class ON App (footer: Smartway Media Pvt. Ltd.) | Not stated | Telangana-targeted landing page; cloud; modules; apps; 24/7 support claim; named-school testimonials present | VC | Medium |
| S18 | Class ON App — Andhra Pradesh page | https://classonapp.com/andhra-pradesh | Class ON App | Not stated | Student-based plans; free 15–30 day trial; go-live and training claims; Telugu parent messaging claim; school-count claims | VC | Medium |
| S19 | ScholaBook — Hyderabad page | https://scholabook.com/school-management-software-hyderabad | ScholaBook (Ojeel Technologies Pvt. Ltd., Hyderabad) | Not stated | Fee-first product for private CBSE and Telangana state-board schools; onboarding steps; no fixed go-live date | VC | Medium |
| S20 | ScholaBook — Andhra Pradesh page | https://scholabook.com/school-management-software-andhra-pradesh | ScholaBook | Not stated | Explicitly does not claim automated WhatsApp reminders or Telugu parent communication | VC | Medium |
| S21 | ScholaBook pricing | https://scholabook.com/pricing | ScholaBook | Not stated | Free, Standard and Premium plans in INR excluding GST; no setup fee; free migration, onboarding and training; school-count claim | VC | Medium |
| S22 | Teachmint — schools page | https://www.teachmint.com/education/schools | Teachmint Technologies | Not stated | Classroom-led features (attendance, assessments, homework, digital reports) | VC | Medium |

## Third-party sources (attributed, unverified)

| ID | Source title | URL | Publisher | Publication date | Supported claims | Class | Confidence |
|---|---|---|---|---|---|---|---|
| S30 | MyClassboard listing | https://www.capterra.com/p/157721/MyClassboard/ | Capterra | Not stated | Lists pricing as "see website"; no figure usable | TP | Low |
| S31 | MyClassboard profile | https://www.softwareadvice.com/gradebook/myclassboard-profile/ | Software Advice | Not stated | Shows a USD "starting price" inconsistent with the Indian school market; treated as unreliable | TP | Low |
| S32 | Edunext profile | https://www.techimply.com/profile/edunext | Techimply | Not stated | Edunext (Noida) licensing options and modules; price on request | TP | Low |
| S33 | Entab CampusCare pricing | https://www.trustradius.com/products/entab-campuscare-erp/pricing | TrustRadius | Not stated | "No free version or trial" (conflicts with S34) | TP | Low |
| S34 | Entab CampusCare listing | https://www.goodfirms.co/software/entab-campuscare | GoodFirms | Not stated | "Contact vendor", annual subscription, 30-day trial (conflicts with S33) | TP | Low |
| S35 | VidyalayaERP listing | https://www.capterra.in/software/1061397/vidyalayaerp | Capterra India | Not stated | A product named "VidyalayaERP" listed with a ₹7,500 starting price; may be a different product from S16 | TP | Low |

## Regulation and market context (news)

| ID | Source title | URL | Publisher | Publication date | Supported claims | Class | Confidence |
|---|---|---|---|---|---|---|---|
| S40 | Andhra passes bills to form committees to regulate fees in schools | https://www.thenewsminute.com/amp/story/andhra-pradesh/andhra-assembly-passes-bills-regulate-fees-schools-private-institutions-106356 | The News Minute | 2019 (per article) | AP School Education Regulatory and Monitoring Commission legislation | TP | Medium |
| S41 | Andhra Pradesh High Court strikes down GOs fixing fees of private unaided schools | https://www.livelaw.in/amp/news-updates/andhra-pradesh-high-court-strikes-down-govt-orders-fixing-fees-for-private-unaided-schools-based-on-geographical-location-188511 | LiveLaw | December 2021 (per article) | Court set aside fee-ceiling orders for 2021–24; current fee framework not verified | TP | Medium |
| S42 | Telangana Cabinet meet may take up private school fee bill | https://www.deccanchronicle.com/amp/southern-states/telangana/telangana-cabinet-meet-on-may-21-may-take-up-private-school-fee-bill-1956521 | Deccan Chronicle | 2026 (per search snippet; not opened) | A proposed Telangana private unaided school fee regulatory bill was reported as due for Cabinet discussion; passage not verified | TP | Low |
| S43 | Telangana Education Commission pitches for private school fee regulatory commission | https://telanganatoday.com/telangana-education-commission-pitches-for-private-school-fee-regulatory-commission | Telangana Today | Not verified (not opened) | Recommendation for a fee regulatory commission; status not verified | TP | Low |
| S44 | Andhra Pradesh loses 664 government schools… | https://www.aninews.in/news/national/general-news/andhra-pradesh-loses-664-government-schools-enrollment-drops-by-nearly-59-lakh-claims-ysrcp20260729102729/ | ANI | 2026-07-29 (from URL; not opened) | Reports the rise in AP private schools from 15,473 to 15,710 (consistent with S01/S02) | TP | Low |
| S45 | TS SSC results 2025: steps to check BSE Telangana results | https://www.theweek.in/education/results/2025/04/28/ts-ssc-results-2025-steps-to-check-bse-telangana-ssc-results-when-released.amp.html | The Week | 2025-04-28 (from URL; not opened) | The Board of Secondary Education, Telangana conducts the SSC (Class 10) examinations | TP | Low |

## Vendors discovered through search only (not opened, not compared)

These appeared in search results for Telangana/Andhra Pradesh or Indian school ERP queries. They are listed so a later round can assess them. **No claim about them is used in the analysis.**

| ID | Vendor or page | URL | Why listed |
|---|---|---|---|
| S50 | Edunext Technologies (Noida) | https://www.techimply.com/profile/edunext | National vendor with ERP and LMS; third-party profile only |
| S51 | Devryon (landing pages hosted on lovable.app) | https://gleeful-whisper-cloud.lovable.app/alternative/campus-365 | Publishes per-student price claims about itself and rivals; site identity and permanence unclear |
| S52 | TACHY (Telangana page) | https://tachy.in/schoolerpindia/school-erp-telangana.html | Telangana-targeted landing page |
| S53 | Codingclave (city SEO pages) | https://codingclave.com/software/sub/school-erp-software-in-vijayawada | Vijayawada/Visakhapatnam landing pages; appear generic |
| S54 | Patron Services (Vijayawada pages) | https://patronservices.in/seo/school-erp-in-vijayawada | Vijayawada-targeted landing pages |
| S55 | Ireava (Visakhapatnam page) | https://www.ireava.com/school-erp-visakhapatnam | Visakhapatnam-targeted landing page |
| S56 | Schoolites | https://schoolites.com/compare/schoolites-vs-campus365 | National vendor publishing rival comparisons |
| S57 | IndiaMART school software listings, Krishna district | https://m.indiamart.com/krishna/school-software.html | Indicates local vendors around Vijayawada; directory, not assessed |

## URL check

All 41 distinct URLs in this register were requested on 2026-11-10 with a plain HTTP client (see [`../README.md`](../README.md#verification)).

| Result | Count | URLs |
|---|---:|---|
| Reachable (HTTP 200/206) | 34 | All government (S01, S02) and official vendor sources (S03–S22), news sources except S44, and discovery pages except S57 |
| Refused automated request (HTTP 403) | 5 | S30, S31, S32 / S50, S33, S35: review and directory sites that block non-browser clients. Not evidence that the page is gone; these are low-confidence third-party sources in any case |
| Not found (HTTP 404) | 1 | S57 (IndiaMART listing): seen only in a search result; no claim depends on it |
| No response (timeout) | 1 | S44 (ANI): not opened; its only use is a consistency note already supported by S01/S02 |

A URL that later stops working does not change what it showed on the access date. Re-check before relying on any figure.
