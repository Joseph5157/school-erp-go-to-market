# School ERP — Sales FAQ for School Management

> **Draft — Internal review only.** For use by the sales team when answering school management. Answers describe the current product as recorded in the [feature catalogue](../../docs/product/feature-catalogue.md); verify against the deployed demo build before a meeting. Do not quote prices, dates or service levels from this document.

User-level questions (signing in, attendance, marks) are answered in the [documentation FAQ](../../docs/faq/index.md). This FAQ covers the questions management usually asks before buying.

## About the product

**What is School ERP?**
A web-based system for running a school's academic administration: school setup, admissions and student records, teacher assignments, attendance, assessments and report cards, timetable, guardian portal, notices, school documents, Excel onboarding, and access control with audit history. These are the 12 areas in the feature catalogue (M01–M12).

**Who uses it?**
Administrators, teachers and guardians. Each sees only what their permissions and assignments allow. Guardians see only their own children, after the school grants access.

**Is it a subscription app shared by many schools?**
No. Each school gets its own installation, configured for that school. It is not a multi-school SaaS product.

**Can it be adjusted to our school's way of working?**
Many things are configuration: academic year, terms, classes and sections, subjects, weekly pattern and holidays, grading scales, roles, timetable periods and document letterhead text. Changes that need new development are assessed and quoted separately after a written specification.

## Things the product does not do today

**Does it handle fees and online payments?**
No. Fees, fee receipts and online payment collection are not part of the current product. They would need a separate scope, decision and estimate.

**Does it send WhatsApp, SMS or email messages automatically?**
No. With WhatsApp Assist, the system prepares messages (for example same-day absence alerts) for guardians who have given consent, and staff send them from their own phone using a prefilled link. There is no automatic WhatsApp API, SMS or email sending.

**Does it work offline?**
No. It needs an internet connection. On supported phones it can be added to the home screen, but there is no offline mode, background sync or push notification.

**Is there a mobile app?**
There is no native Android or iOS app and no student login. It works in the phone's browser and can be added to the home screen on supported devices.

**Can we move all students to the next class at year end in one step?**
Not yet. Bulk academic-year rollover is planned but not implemented. Placements are changed per student.

**Can it issue Transfer Certificates?**
Not yet. The required fields and layout must first be agreed with the school, and the work would be scoped separately. It currently issues bonafide certificates, report card PDFs and attendance summaries.

**Can we add transport, library, hostel, payroll or inventory?**
These are outside the current product. Each would be assessed separately before any estimate.

**Is the interface in Telugu?**
Not currently. PDFs include Telugu fonts, but the interface and student names are in English.

**Does it calculate ranks, GPA or board-specific results?**
No. Assessments use marks, maximum marks, optional pass marks and grading scales. Ranks, GPA, weighting and board-specific rules need a separate policy decision and assessment.

## Getting started

**Can we import our existing Excel records?**
Yes, for students, guardians and class/section placement, using the product's Excel template. Every row is checked and problems are shown before anything is saved; possible duplicates are flagged for the school to review. Data in other formats, or historical attendance and marks, would need to be assessed.

**Who prepares the data?**
The school is responsible for preparing and cleaning the records it is authorised to share. We provide the template, explain the validation messages and run the trial and final imports as agreed.

**How long does implementation take?**
It depends on the school's size, data quality and how quickly decisions and data are available. We agree stages and any target dates after requirements are confirmed; we do not commit to a date before that.

**What training is included?**
Role-based sessions for administrators and teachers, plus briefing material for guardians. The number and format of sessions are agreed in the proposal.

## Commercial

**How is it priced?**
A one-time setup and implementation fee, initial data migration and training, then annual support and maintenance. Hosting and infrastructure are shown separately. Any additional development is quoted separately. The exact amounts depend on the school's requirements and are given in a written quotation.

**Why is hosting shown separately?**
Hosting is a third-party cost that depends on the provider and the hosting arrangement chosen. Showing it separately makes clear what the school pays for software support and what it pays for infrastructure.

**Who owns the software?**
The school receives the right to use the software under licensing terms still to be finalised. The proposed commercial model does not include transfer of software or source-code ownership, subject to final licensing terms and approval.

**What happens to our data?**
The school determines how its records are used and is responsible for providing data it is authorised to share. The written agreement will define our data-processing responsibilities, applicable rights, export arrangements and handover procedures, in line with applicable law. These terms are pending legal approval.

**Is the product DPDP compliant?**
We do not claim that the software, or any school using it, is automatically compliant with the Digital Personal Data Protection Act, 2023 or its Rules. The product includes controls such as role-based access, explicit guardian access grants, consent records for WhatsApp messages and audit history. Each school should confirm its own obligations with its legal or compliance adviser.

**What support hours and response times do you offer?**
These are not yet decided and will be stated in the agreement once approved. We will not quote them before then.
