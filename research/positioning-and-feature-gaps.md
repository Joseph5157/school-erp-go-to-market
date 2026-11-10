# Positioning and feature gaps

> **Draft — Internal review only.** GTM-RESEARCH-01, accessed 2026-11-10. Compares our documented product with the verified findings in [`competitors/`](competitors/competitor-landscape.md) and [`market/`](market/telangana-andhra-pradesh.md). Source IDs refer to the [source register](competitors/source-register.md). Our product is described from the [feature catalogue](../docs/product/feature-catalogue.md), which is a documented baseline and has not been independently verified on live staging. **Nothing here claims our product is superior.**

## 1. How competitors sell (publicly observable)

Only what can be seen on public pages. We have no evidence of any vendor's internal sales strategy.

| Approach | Observed | Vendors (source) | Class |
|---|---|---|---|
| Free demo as the main call to action | Universal | All eight reviewed (seven ERP vendors and Teachmint) | VC |
| Free trial | Explicit 15–30 days | Class ON App (S18) | VC |
| Free plan for very small schools | Up to 100 students | ScholaBook (S21) | VC |
| Published entry price | Yes | Fedena (S03), Campus 365 (S15), ScholaBook (S21) | VC |
| Feature-led marketing (module counts) | "100+ modules", "40+ modules", "60+" named modules | Class ON App (S17), Vidyalaya (S16), Fedena (S03) | VC |
| Price-led marketing | "Free Forever", "No per-student fees", "no setup fee" | ScholaBook (S21) | VC |
| Trust claims (school counts, rankings, awards) | Common; several internally inconsistent | Fedena, Campus 365, Vidyalaya, Class ON App, Teachmint (S04, S14, S16, S18, S11) | VC (unverified) |
| State-specific landing pages | Telangana and AP pages | Class ON App (S17, S18), ScholaBook (S19, S20); plus several low-quality city SEO pages (S52–S55) | VC |
| Partner, reseller or dealer programmes | Partner/OEM rebrand-and-resell; "Become a Partner"; channel partner; authorised dealers | Campus 365 (S14), Vidyalaya (S16), MyClassBoard (S09), Teachmint (S10) | VC |
| Speed-to-live claims | "Go live in 1-2 to 2-3 days" | Class ON App (S18) | VC (unverified) |
| Support positioning | 24/7 or 365-day support; dedicated manager; phone and WhatsApp | Fedena (S04), Campus 365 (S15), Class ON App (S17, S18), Teachmint (S10) | VC (unverified) |
| Onboarding included | Training, configuration, migration included or free | Fedena (S03), ScholaBook (S21), Campus 365 Enterprise (S15) | VC |
| AI features | AI assistants, question-paper and quiz generation | MyClassBoard (S07), Teachmint (S10) | VC |
| Hardware bundling | Interactive classroom panels | Teachmint (S10) | VC |
| Educational content / tools | Free result-analysis tool | Teachmint (S10) | VC |
| Honest-boundary marketing | States what it does **not** claim | ScholaBook (S20) | VC |

**Observation:** the public market is dominated by **cloud subscriptions, free demos and very low entry prices for small schools**, and by broad module coverage including fees, transport and native apps. Hosting is **explicitly** included at one vendor (Fedena, S03); elsewhere hosting terms and tenancy (shared or separate installations) are not publicly verified.

## 2. Our position against the verified findings

### Current competitive strengths (documented, plausible; to validate)

| Strength | Our basis (catalogue) | Competitor evidence | Confidence |
|---|---|---|---|
| Controlled report-card publication: preview, explicit release, frozen snapshots, withdrawal after corrections | M06 04–M06 09 | Competitors advertise report cards and grade books; none of the pages read described release control in this detail (NPV) | Medium that it is distinctive; **unknown** whether schools value it |
| Assignment-based teacher access with dated handovers and a missing-assignment overview | M04 04–M04 07, M12 09 | Not described in comparable detail on pages read (NPV) | Same |
| Explicit, per-child guardian access grants and access review on placement changes | M08 03, M08 09 | Parent apps are common; access-control detail is NPV | Same |
| Audited corrections and correction history for attendance, results and records | M05 05, M06 05, M03 10, M12 08 | Fedena lists an "Audit" module (VA); others NPV | Medium |
| Distinguishing "absent" from "missing" records | M05 06, M06 03 | NPV elsewhere | Medium |
| Excel import with validation preview, duplicate warnings and atomic commit | M11 01–M11 07 | Import advertised by Fedena, Class ON App, ScholaBook (VA); preview detail NPV | Medium |
| Separate installation per school; written change-request process | Pricing framework; objections guide | Competitors market cloud subscriptions; whether their installations are shared or separate is not publicly verified. Fedena offers source code on Enterprise (S03) | See section 3 |
| Honest boundaries | Sales FAQ | One competitor also does this (S20) | — |

### Important functionality gaps

Ranked by how often the **seven** clearly marketed ERP vendors advertise the capability (Teachmint, adjacent, excluded), then by likely buyer impact (HYP). "Advertising it" means on at least one plan or as an add-on. Availability may depend on plan.

| Gap | ERP vendors advertising it (of 7) | Likely impact (HYP) | Catalogue status |
|---|---|---|---|
| **Fee management and receipts** | 7 / 7 | **High**: likely a must-have for many schools, especially under 500 students | Deferred; needs separate scope |
| **Online fee payments** | 7 / 7 | High; tied to fees | Deferred |
| **Native parent app (app stores) and push notifications** | 6 / 7 | Medium–high: parent expectations | Future scope (PWA is online-only, no push) |
| **Automatic SMS / WhatsApp sending** | 6 / 7 | Medium–high: daily absence and fee alerts | Future integration (staff-assisted only today) |
| **Transport** | 6 / 7 | Medium: schools with buses | Outside current scope |
| **Payroll / HR** | 5 / 7 | Medium: often handled separately | Outside current scope |
| **Library** | 5 / 7 | Low–medium | Outside current scope |
| **LMS / online classes** | 4 / 7 | Low–medium after the pandemic period (HYP) | Outside current scope |
| **Telugu parent communication** | 1 / 7 (VA) | Unknown; may matter outside Hyderabad | Not available (PDF fonts only) |
| **Transfer Certificate** | NPV across vendors (certificates are advertised generally) | Medium: common school document (HYP) | Pending school format |
| **Bulk academic-year rollover** | NPV | Medium at year end | Planning only |

### Possible disadvantages

- **Breadth:** competitors present broad suites. Our 12 academic areas may look narrow beside "100+ modules" claims, even where those claims are marketing.
- **Entry cost perception:** free plans, trials and low monthly prices exist for small schools (S15, S18, S21). A setup fee may look expensive at first contact (HYP).
- **No trial:** competitors offer self-serve trials or free tiers. We offer presenter-led demos only (outreach kit).
- **No track record:** competitors display customer counts and testimonials. We have none to show and must not invent any.
- **Identity not approved:** company and product names are still pending, which limits any outward positioning.

## 3. Installation and hosting model

| Question | Assessment | Class |
|---|---|---|
| Where might a separate school installation be attractive? | Only where a school values it and competitors do not offer it; competitors' tenancy is **not publicly verified**, so this is not assumed to be a difference. Possible interest: schools that want their records kept apart from other schools, want a written agreement about data handling and exit, or expect school-specific configuration and changes under a written process. Larger schools and groups are more likely to ask these questions (HYP) | HYP |
| Where might it be a disadvantage? | Small schools comparing visible start-up costs; schools wanting to start the same day; buyers who see "hosting shown separately" beside "hosting included" (S03) as an extra charge | HYP, with VC context |
| Is a separate hosting line unusual? | No reviewed vendor showed a separate hosting charge. Hosting is explicitly included at Fedena (S03); other vendors' hosting terms are not publicly verified | VC / NPV |
| Is source-code or self-hosting access a market feature? | Fedena offers an open-source basic version and source code on Enterprise (S03, S04). Our model does not transfer source code (sales FAQ) | VC |

## 4. Buyer requirements by segment (HYP, to validate)

| | Small (300–500) | Medium (501–1,000) | Larger (1,001–2,000) |
|---|---|---|---|
| Probable top needs | Fees, simple records, low entry cost, phone support | Fees plus attendance and results, parent communication, clear teacher responsibilities | Access control, audit, documents, timetable, integrations, possibly multi-campus |
| Fit of our current product | **Weak** without fees; academic workflows may not be the main pain | **Moderate**, if fees can stay in an existing tool | **Moderate**; limited by single-installation scope, no integrations, no fees |
| Competitors likely met | ScholaBook, Class ON App, Campus 365 Lite, local vendors | MyClassBoard, Class ON App, Fedena, Vidyalaya, Entab | MyClassBoard, Entab, Fedena Enterprise, Vidyalaya |
| Status | Stays in comparative discovery; sales approach is an open owner decision | Leading hypothesis for first validation | Selective, later |

## 5. Testable positioning hypotheses

Each hypothesis states the evidence, the uncertainty and what we would need to learn from schools. None is approved messaging.

### H1. "Results reach parents only when the school is ready"

- **Statement:** principals of medium and larger schools value control over report-card release, corrections with history, and the distinction between absent and missing records enough for it to influence a purchase.
- **Evidence:** documented in our catalogue (M05 06, M06 03–M06 09); competitors advertise report cards but describe release control less specifically (NPV).
- **Uncertainty:** high. Schools may treat this as expected behaviour rather than a reason to choose.
- **Learn:** how results reach parents today; whether errors or early releases have caused problems; how principals rank this against fees and parent apps.

### H2. "Fees are a gate, not a feature"

- **Statement:** most target schools, and nearly all under 500 students, will not adopt an administration system that excludes fees. Medium and larger schools with existing accounts software may accept a system without fees.
- **Evidence:** fee management advertised by 7 of 7 compared ERP vendors; a Hyderabad vendor built around it (S19, S21); fee regulation activity in both states (S40–S43, TP).
- **Uncertainty:** medium. Advertising frequency is not buyer demand.
- **Learn:** what share of qualified schools require fees at launch; whether they would keep an existing fee tool; what that tool is.

### H3. "Your own installation, with clear terms"

- **Statement:** a separate installation per school, with written change control and transparent hosting, is attractive to a subset of medium and larger schools (data-control and customisation concerns), and unattractive to small schools on cost.
- **Evidence:** competitors market cloud subscriptions; hosting is explicitly included at one vendor (S03) and not publicly verified elsewhere; whether competitors' installations are shared or separate is not publicly verified. Our model is documented in the pricing framework. No buyer evidence either way.
- **Uncertainty:** high.
- **Learn:** whether schools ask where their data lives and who can access it; reaction to a setup fee plus annual support versus a monthly subscription; whether hosting shown separately reads as honest or as extra cost.

### H4. "Clear responsibilities for every teacher"

- **Statement:** schools with many sections value dated class-teacher and subject-teacher assignments, handover history and a missing-assignment overview.
- **Evidence:** M04 04–M04 07; not described in comparable detail by competitors (NPV).
- **Uncertainty:** high. It may be a niche or invisible benefit.
- **Learn:** how schools handle mid-year teacher changes today and whether unclear responsibilities cause missed attendance or marks.

### H5. "Staff-sent WhatsApp is acceptable for now"

- **Statement:** schools accept staff-assisted WhatsApp messages (consented, prepared by the system, sent by staff) as a starting point, but many will expect automatic sending later.
- **Evidence:** six of seven compared ERP vendors advertise automatic messaging; one advertises the official WhatsApp business API (S18); ScholaBook states it does not claim automated WhatsApp reminders (S20), which is coded NPV, not "not offered".
- **Uncertainty:** medium.
- **Learn:** how schools message parents today, who sends, the volume, and whether manual sending is a deal-breaker.

## 6. What this does not tell us

- Whether any school prefers our approach. No school has been asked.
- How competitors perform in practice. Only advertising was reviewed.
- Prices schools actually pay.
