  
**UME**

Organization / Business Operating System

**Expanded Users, Workflows & Use Cases**

Entrepreneurs · Independent Workers · Employees · Employers

All Organization Sizes · All Life Stages · All Legal Structures

────────────────────────────────────

**Document ID:** UME-WUC-002

**Version:** 1.0.0

**Status:** Draft — Expanded Edition

**Date:** March 2026

**Coverage:** Individuals, SME, Mid-Market, Enterprise, Government, NGO, Global

**Org Types:** Sole Proprietorships, Partnerships, Corporations, Cooperatives, Non-Profits,

   For-Profits, Investment Funds, Banks, Academia, Institutes, Training Facilities,

   Governments, International Organizations, Global Supply Chains

# **Document Structure**

This document is organized into six parts plus appendices. Navigate directly to the part and section relevant to your organizational context.

| Part | Title | Pages Coverage |
| :---- | :---- | :---- |
| Introduction | Purpose, scope, and how to use this document | All readers |
| Part A | Individual Workers: Entrepreneurs, Independents, Employees & Employers | IND-01 to IND-10 |
| Part B | Workflows by Organization Legal Structure | Sole Prop → Bank → Academia |
| Part C | Organization Life-Stage Workflows | Idea to Mature |
| Part D | Sector-Specific Workflows | Gov, NGO, Healthcare, Professional Services |
| Part E | Global, Multi-Entity & International Workflows | MNE, INGO, Global Supply Chain |
| Part F | Extended User Journey Maps | 5 detailed journeys |
| Appendix A | Persona Quick Reference Index | All 15 personas |
| Appendix B | Workflow Index by Organization Type | All 29 workflows |
| Appendix C | Use Case Index | All 17 use cases |
| Appendix D | Module Coverage Matrix by Org Type | 9 org types × 17 modules |

| Key Personas Covered   IND-01 Solo Entrepreneur / Founder                    IND-02 Serial / Multi-Venture Founder   IND-03 Freelance Consultant / Independent Worker      IND-04 Gig Economy Worker   IND-05 Front-Line Employee                            IND-06 Mid-Level Knowledge Worker   IND-07 Remote / Distributed Worker                    IND-08 Small Business Owner / Micro-Employer   IND-09 Mid-Market Employer (no HR team)              IND-10 Large Employer   ORG-NPO-01 Non-Profit Executive Director             ORG-INV-01 Fund Manager / General Partner   ORG-BNK-01 Bank Business Unit Manager                GOV-01 Government Department Head   NGO-01 INGO Country Director |
| :---- |

| Org Types Covered   Sole Proprietorships & Sole Traders       Partnerships (General, Limited, LLP)   Private & Public Corporations              Cooperatives (Consumer, Worker, Multi-Stakeholder)   Non-Profits, Charities & Foundations       For-Profit Businesses (All Sizes)   Investment Funds (VC, PE, Hedge, Family)   Banks & Financial Services Institutions   Universities, Colleges & Academia          Institutes, Centers & Research Organizations   Training Facilities & Professional Dev.    Government Departments & Public Bodies   International Organizations & INGOs        Global Supply Chains & Trade Operations   Healthcare Organizations                   Professional Services Firms |
| :---- |

# **Introduction**

This document covers users, workflows, and use cases for the UME Organization Operating System across every type of worker, organization size, lifecycle stage, and legal structure. It is organized into five parts:

* Part A — Individual Workers: Entrepreneurs, Independents, Employees & Employers

* Part B — Business Types by Legal Structure & Mission

* Part C — Organization Life Stage Workflows

* Part D — Sector-Specific Workflows (Government, Academia, Banking, NGOs, etc.)

* Part E — Global, Multi-Entity & International Organization Workflows

| How to Use This Document   Each section contains: Persona profiles, End-to-end workflows (step tables), Use cases   (structured with actors/trigger/flow/outcomes), and Journey maps.   Personas reference UME module numbers (01–42) from the Design & Architecture document.   Workflows show who does what, in which module, and what the system produces.   Use cases are formal and reusable across org types where marked "All". |
| :---- |

# **Part A: Individual Workers — Entrepreneurs, Independents, Employees & Employers**

UME serves individuals as the primary unit of work across every organizational context. Whether someone is a solo founder bootstrapping a startup, a freelance consultant running a one-person operation, a front-line employee, or a multi-entity employer, the UME OS adapts to their scope and role.

## **A.1 The Entrepreneur**

| Persona | IND-01 — Solo Entrepreneur / Founder (Pre-Revenue) |
| :---- | :---- |
| **Org Context** | Startup — 1 person, idea-to-product stage |
| **Scale** | 1 person, $0–$500K funding |
| **Description** | Building a product or service from scratch. Wearing every hat: strategy, product, sales, finance, legal, and operations. Time is the scarcest resource. |
| **Key Modules** | Strategy (21), Product (30), Finance (14), Legal Entity (13), Sales (34), Work (40) |
| **Goals** | Validate product-market fit; close first paying customers; stay legally compliant; extend runway |
| **Challenges** | No team to delegate to; admin overhead eats build time; compliance requirements feel overwhelming |
| **UME Value** | UME acts as a virtual co-founder OS: single dashboard for strategy, finance, legal status, and pipeline |

| Persona | IND-02 — Serial Entrepreneur / Multi-Venture Founder |
| :---- | :---- |
| **Org Context** | Holding structure — 3–10 portfolio ventures |
| **Scale** | Multi-entity, $1M–$50M total AUM |
| **Description** | Running multiple ventures simultaneously through a holding entity. Needs consolidated visibility across legal entities, capital allocation, and leadership teams. |
| **Key Modules** | Legal Entity (13), Investment (17), Analytics (02), Finance (14), Board (04), Portfolio (27) |
| **Goals** | Allocate capital to highest-ROI ventures; stay on top of statutory obligations; manage boards |
| **Challenges** | Entity proliferation; compliance tracking across jurisdictions; cash flow coordination across ventures |
| **UME Value** | UME Chombo tracks all entities; Investment Module governs capital allocation; consolidated dashboard |

### **Workflow: Entrepreneur Launches a New Venture (Solo Founder)**

From business idea through legal registration, first product version, and first paying customer — all within UME.

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Founder (IND-01)** | Create organization in UME; define vision, mission, strategic pillars | *Strategy (21)* | Org bootstrapped; strategy architecture initialized |
| **2** | **Founder** | Register legal entity: company type, jurisdiction, registration number | *Legal Entity (13)* | Entity registered; Chombo runs 45-policy compliance evaluation |
| **3** | **Chombo (auto)** | Generate filing schedule for new entity; emit upcoming deadlines | *Legal Entity (13)* | Statutory filing calendar live; alerts scheduled |
| **4** | **Founder** | Set up chart of accounts; open-balance bank account record | *Finance (14)* | COA configured; treasury account registered |
| **5** | **Founder** | Define MVP feature backlog; create product record and roadmap | *Product (30) \+ Work (40)* | Product catalog entry; work items backlog created |
| **6** | **Founder** | Build MVP; track work items daily on kanban board | *Work (40)* | Sprint velocity tracked; features delivered iteratively |
| **7** | **Founder** | Define go-to-market: register first campaign with audience persona | *Marketing (22)* | Campaign registered; 70 Soko strategy packs evaluated |
| **8** | **Founder** | Add first prospects to CRM; log outreach activities | *CRM (08) \+ Sales (34)* | Pipeline created; activity log started |
| **9** | **Founder** | Close first customer; create contract and invoice | *Sales (34) \+ Finance (14)* | Opportunity closed-won; invoice issued; revenue journal posted |
| **10** | **Founder** | Review weekly dashboard: OKRs, cash runway, pipeline, filings | *Portal (26) \+ Analytics (02)* | Single-screen situational awareness; founder makes informed decisions |

| UC-IND-01  Sole Founder Manages Cash Runway |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Founder (IND-01) | Monthly review of financial position | Startup / Sole Trader / Partnership | Finance (14), Analytics (02), Sales (34), Investment (17) |

**Preconditions**

* Bank account and chart of accounts configured

* Revenue and expense transactions posted

**Main Success Flow**

1. Founder opens Finance Module; reviews cash position vs monthly burn rate.

2. Finance Module computes implied runway (months \= cash ÷ monthly burn).

3. Analytics Module surfaces runway trend: improving, stable, or deteriorating.

4. Founder reviews AR aging: identifies overdue invoices; triggers dunning.

5. Founder reviews pipeline value: estimates near-term cash inflows.

6. Finance Module generates 13-week cash flow forecast.

7. If runway \< 6 months: alert emitted; Founder reviews cost structure.

8. Founder logs any capital raise activities as investment pipeline in Investment Module.

**Alternative / Exception Flows**

* Runway drops below 3 months: escalation alert to any registered board members.

**Postconditions**

* Cash position understood; dunning initiated; forecast updated

## **A.2 The Independent Worker (Freelancer / Contractor / Consultant)**

| Persona | IND-03 — Freelance Professional / Independent Consultant |
| :---- | :---- |
| **Org Context** | Sole proprietorship or single-member LLC |
| **Scale** | 1 person, project-based revenue |
| **Description** | Delivers specialized professional services to multiple clients simultaneously. Manages proposals, contracts, time billing, invoices, and client relationships independently. |
| **Key Modules** | CRM (08), Finance (14), Work (40), Schedule (35), Templates (39), Legal Entity (13) |
| **Goals** | Keep client pipeline full; bill accurately; get paid on time; protect IP via contracts |
| **Challenges** | Invoice chasing; managing multiple client contexts simultaneously; time tracking discipline |
| **UME Value** | CRM tracks every client relationship; Finance handles proposals→invoices→payments; Work tracks billable hours |

| Persona | IND-04 — Gig Economy Worker / Platform Independent |
| :---- | :---- |
| **Org Context** | No legal entity; individual worker |
| **Scale** | 1 person, gig-by-gig |
| **Description** | Works across multiple platforms and clients for short-duration engagements. Needs to track income streams, manage taxes, and build a personal brand. |
| **Key Modules** | Finance (14), Analytics (02), CRM (08), Work (40), Knowledge (19) |
| **Goals** | Maximize billable utilization; understand net income after platform fees; manage estimated taxes |
| **Challenges** | Income unpredictability; tax complexity; reputation management across platforms |
| **UME Value** | Finance Module aggregates income streams; Analytics surfaces utilization and income trends |

### **Workflow: Independent Consultant — Proposal to Paid Invoice**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Consultant (IND-03)** | Log new client lead in CRM; schedule discovery call | *CRM (08) \+ Schedule (35)* | Stakeholder record created; discovery call on calendar |
| **2** | **Consultant** | Discovery call completed; outcome and requirements noted | *CRM (08)* | Interaction logged; requirements sketched in Work Module |
| **3** | **Consultant** | Draft proposal using proposal template | *Templates (39)* | Branded proposal rendered with scope, timeline, fees |
| **4** | **Consultant** | Send proposal; log as CRM interaction | *CRM (08) \+ Communications (07)* | Proposal emailed; delivery tracked |
| **5** | **Client** | Accepts proposal; Consultant creates project and contract | *Sales (34) \+ CRM (08)* | Opportunity closed-won; contract record created |
| **6** | **Consultant** | Kick off project; create work items and time log | *Work (40)* | Billable task list created; time tracking active |
| **7** | **Consultant** | Log daily time against work items throughout engagement | *Work (40)* | Billable hours accumulated; utilization tracked |
| **8** | **Consultant** | At billing milestone: generate invoice from time log | *Finance (14) \+ Templates (39)* | Invoice rendered with itemized hours; sent to client |
| **9** | **Finance (auto)** | Monitor payment; trigger dunning if overdue | *Finance (14)* | Payment status tracked; reminder sent at configured intervals |
| **10** | **Consultant** | Payment received; record in Finance; update CRM health score | *Finance (14) \+ CRM (08)* | Journal posted; AR cleared; client relationship score updated |

| UC-IND-02  Independent Worker Manages Multi-Client Workload |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Freelancer (IND-03 / IND-04) | Start of new week; need to prioritize across 3 active client engagements | Sole Proprietorship / Independent | Work (40), Schedule (35), Analytics (02), Finance (14), CRM (08) |

**Preconditions**

* Work items created per client engagement

* Time tracking configured

* Client records in CRM

**Main Success Flow**

9. Worker opens Work Module; views kanban board filtered by active client engagements.

10. Work Module shows total open items, WIP count, and blocked items per client.

11. Worker checks utilization: time logged this week vs target billable hours.

12. Worker rebalances priorities: drags items between columns; updates due dates.

13. Schedule Module checked for client meetings and deadlines this week.

14. Analytics Module shows revenue-per-client this month: worker de-prioritizes low-margin work.

15. Worker adds time logs for completed tasks; billable hours accumulate.

16. At week-end: worker reviews summary; identifies under-utilized capacity for prospecting.

**Alternative / Exception Flows**

* Over-committed: worker flags client about scope creep; change request created.

**Postconditions**

* Priorities set; time logged; utilization visible; prospecting capacity identified

## **A.3 The Employee**

| Persona | IND-05 — Front-Line / Entry-Level Employee |
| :---- | :---- |
| **Org Context** | Any organization type and size |
| **Scale** | Individual contributor, salaried or hourly |
| **Description** | Executes day-to-day tasks; needs to understand their role, access information, complete training, manage leave, and track their own goals. |
| **Key Modules** | Portal (26), Work (40), HR (16), Learning (20), Knowledge (19), Schedule (35) |
| **Goals** | Do excellent work; grow skills; understand performance expectations; navigate org processes easily |
| **Challenges** | Information overload; unclear priorities; manual processes for HR and leave; learning hard to find |
| **UME Value** | UME Portal is single front door: notifications, tasks, learning, HR self-service — all in one place |

| Persona | IND-06 — Mid-Level Professional / Knowledge Worker |
| :---- | :---- |
| **Org Context** | Corporate, professional services, tech, finance |
| **Scale** | "Manager of self"; contributor and informal leader |
| **Description** | Balances independent project work with team coordination. Cares about career development, cross-functional collaboration, and personal OKR progress. |
| **Key Modules** | Portal (26), Work (40), Strategy (21), Learning (20), Knowledge (19), Analytics (02) |
| **Goals** | Deliver high-impact work; build expertise; influence cross-functional outcomes; advance career |
| **Challenges** | Context-switching costs; knowledge buried in email; no visibility into how personal OKRs ladder up |
| **UME Value** | OKR cascade makes personal impact visible; Knowledge Module surfaces expertise; Analytics tracks progress |

| Persona | IND-07 — Remote / Distributed Worker |
| :---- | :---- |
| **Org Context** | Any organization; fully or partially remote team |
| **Scale** | Individual or part of distributed team |
| **Description** | Works asynchronously across time zones. Needs strong async communication tools, accessible documentation, and visibility into shared work without live meetings. |
| **Key Modules** | Portal (26), Work (40), Knowledge (19), Communications (07), Schedule (35), Teams (38) |
| **Goals** | Stay aligned with team without meeting fatigue; contribute asynchronously; never miss context |
| **Challenges** | Time zone coordination; information siloed in chat tools; unclear ownership of async tasks |
| **UME Value** | Work Module \+ Knowledge Module \+ async-first Communications replaces meeting-heavy culture |

### **Workflow: Employee Submits and Tracks a Leave Request**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Employee (IND-05)** | Open HR self-service in portal; select Leave Request | *Portal (26) \+ HR (16)* | Leave form pre-filled with leave balance and type options |
| **2** | **Employee** | Select leave type, dates; check calendar for team conflicts | *HR (16) \+ Schedule (35)* | Conflict check run; no clashes found; request submitted |
| **3** | **Process (auto)** | Route leave request to line manager for approval | *Process (29)* | Approval task created in manager's Work Module inbox |
| **4** | **Line Manager** | Review request; check team capacity; approve or decline | *Work (40) \+ HR (16)* | Leave approved; employee and calendar notified |
| **5** | **HR Module (auto)** | Update leave balance; block dates in enterprise calendar | *HR (16) \+ Schedule (35)* | Leave balance decremented; out-of-office event created |
| **6** | **Employee** | Receives confirmation in portal notification center | *Portal (26)* | Notification read; leave confirmed and visible in personal calendar |

| UC-IND-03  Employee Completes Mandatory Compliance Training |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Employee (IND-05 / IND-06) | New compliance training assigned on joining or policy update | All — particularly regulated industries | Learning (20), HR (16), Portal (26), Communications (07) |

**Preconditions**

* Employee record active in HR Module

* Compliance training content published in Learning Module

**Main Success Flow**

17. HR Module assigns compliance training; enrollment created with deadline.

18. Employee receives portal notification: "Mandatory training due in 14 days."

19. Employee opens learning portal; sees compliance training tile with progress bar.

20. Employee completes modules; quiz scores auto-recorded.

21. Certificate issued on 100% completion; CPD points logged.

22. HR Module marks compliance training as satisfied; audit record written.

23. If deadline approaching without completion: escalation notification sent to manager and HR.

**Alternative / Exception Flows**

* Failed quiz (below pass mark): retake immediately available; max attempts configurable.

* Content outdated: Learning Manager publishes updated version; re-enrollment auto-triggered.

**Postconditions**

* Training completed; certificate issued; compliance record updated; hr.review satisfied

## **A.4 The Employer**

| Persona | IND-08 — Small Business Owner / Micro-Employer |
| :---- | :---- |
| **Org Context** | SME — 1–19 employees |
| **Scale** | Owner-operator, wears management and execution hats |
| **Description** | Runs a small business and employs a small team. Manages hiring, payroll, performance, and compliance personally alongside running operations and serving customers. |
| **Key Modules** | HR (16), Finance (14), Legal Entity (13), Work (40), CRM (08), Schedule (35) |
| **Goals** | Keep payroll accurate; stay compliant with employment law; retain good staff; serve customers well |
| **Challenges** | Admin overhead of employment compliance; payroll errors; time spent on non-revenue-generating tasks |
| **UME Value** | UME automates payroll, leave, onboarding workflows — owner focuses on the business, not admin |

| Persona | IND-09 — Mid-Market Employer / HR-Less Organization |
| :---- | :---- |
| **Org Context** | 50–250 employees; no dedicated HR team |
| **Scale** | Owner / ops manager handles people function |
| **Description** | Employs a significant team but has not yet hired a dedicated HR professional. Employment law complexity is growing. Performance management is ad hoc. |
| **Key Modules** | HR (16), Learning (20), GRC (15), Finance (14), Work (40), Analytics (02) |
| **Goals** | Structure the people function; run fair reviews; understand headcount cost; reduce turnover |
| **Challenges** | No systematic performance management; compliance gaps (employment law); payroll scaling pain |
| **UME Value** | HR Module provides enterprise-grade people management without needing a dedicated HRIS team |

| Persona | IND-10 — Large Employer / Workforce-Heavy Organization |
| :---- | :---- |
| **Org Context** | 1000+ employees; multi-site |
| **Scale** | CHRO \+ HR team managing complex workforce |
| **Description** | Manages a large, complex workforce across multiple locations. Needs workforce planning, succession management, detailed analytics, and compliance across jurisdictions. |
| **Key Modules** | HR (16), Analytics (02), Learning (20), GRC (15), Finance (14), Operations (25) |
| **Goals** | Workforce planning accuracy; reduce unwanted attrition; succession depth; cross-jurisdiction compliance |
| **Challenges** | People data fragmented; succession gaps invisible; global employment law variation |
| **UME Value** | HR Module \+ Analytics provides predictive workforce intelligence; GRC maps employment obligations by jurisdiction |

### **Workflow: Small Business Owner Runs Monthly Payroll**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Owner (IND-08)** | Open HR Module; initiate monthly payroll for the period | *HR (16)* | Payroll computation initiated for active employees |
| **2** | **HR Module (auto)** | Calculate gross pay from employment records and time logs | *HR (16) \+ Work (40)* | Gross pay per employee computed; overtime flagged |
| **3** | **HR Module (auto)** | Apply statutory deductions: income tax, social contributions | *HR (16)* | Net pay computed; deduction breakdown per employee |
| **4** | **Owner** | Review payroll run; check for anomalies; approve | *HR (16)* | Payroll approved; pay slips generated from template |
| **5** | **Finance Module (auto)** | Post payroll journal entries to general ledger | *Finance (14)* | Wage expense posted; liability accounts updated |
| **6** | **Communications (auto)** | Distribute pay slips to employees via secure portal | *Communications (07) \+ Templates (39)* | Pay slips delivered; audit record of distribution created |
| **7** | **Finance Module (auto)** | Generate bank payment file for net pay transfer | *Finance (14)* | Bank file ready for upload to banking portal |
| **8** | **Owner** | Upload bank file; confirm payroll funded; log in Finance | *Finance (14)* | Cash journal posted; AR/AP cleared; payroll period closed |

| UC-IND-04  Employer Hires First Employee |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Owner / Manager (IND-08) | Business growth requires first hire | Sole Proprietorship, Startup, SME | HR (16), Finance (14), Learning (20), CMS (06), Templates (39), Communications (07) |

**Preconditions**

* Legal entity registered; employer registration completed in jurisdiction

* HR Module active; org unit created

**Main Success Flow**

24. Owner creates job requisition in HR Module: title, org unit, salary range, start date.

25. Job posted to recruitment channels (via Communications Module).

26. Applications received; candidates logged in HR Module with tracking.

27. Owner conducts interviews; records scores and notes against each candidate.

28. Selected candidate: offer generated from offer letter template.

29. Offer accepted: candidate converted to employee record; onboarding workflow starts.

30. IT provisioning, facility access, payroll enrollment, and compliance training all triggered.

31. Employment contract stored in CMS Module; signed copy attached.

32. Employee appears on payroll for first pay run.

**Alternative / Exception Flows**

* Candidate declines offer: second candidate activated from pipeline.

* Probation period: performance review triggered at probation end date.

**Postconditions**

* Employee active; payroll enrolled; compliance training assigned; onboarding complete

# **Part B: Workflows by Organization Type & Legal Structure**

Different legal structures and mission types create distinct operational patterns, compliance requirements, and user needs. This section covers each major organizational type with tailored personas, workflows, and use cases.

| B.1  Sole Proprietorship & Single-Member Entity One owner, unlimited personal liability, simple tax treatment. Most common globally. Ranges from market stall to $10M+ professional practice. |
| :---- |

Sole proprietors are the most common UME user type globally. The platform serves them as a personal business operating system — strategy, finance, compliance, and client management in one tool with minimal configuration overhead.

| Characteristic | Sole Proprietorship in UME |
| :---- | :---- |
| Legal Entity Count | 1 — often no formal entity; UME tracks as informal trading name |
| Payroll Scope | Owner-only or 1–5 staff; HR Module at lightweight configuration |
| Finance Complexity | Single COA; simple P\&L; GST/VAT self-management |
| Compliance Needs | Tax filing, business license, professional body renewals |
| Key Workflows | Client billing, expense management, tax estimation, contract management |

### **Workflow B.1.1: Annual Tax Preparation (Sole Proprietor)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Owner** | Open Finance Module; lock prior year period | *Finance (14)* | Period locked; transactions frozen for year-end |
| **2** | **Finance (auto)** | Categorize all transactions against tax categories | *Finance (14)* | Revenue, allowable expenses, and non-allowable items classified |
| **3** | **Owner** | Review categorizations; correct any miscoded items | *Finance (14)* | Transaction coding confirmed; tax profit computed |
| **4** | **Finance (auto)** | Generate profit and loss statement for the tax year | *Finance (14)* | P\&L generated; taxable profit figure produced |
| **5** | **Legal Entity (auto)** | Check upcoming tax filing deadline; emit reminder | *Legal Entity (13)* | Filing deadline confirmed; calendar alert set |
| **6** | **Owner** | Export tax workings to accountant or complete self-assessment | *Finance (14) \+ Templates (39)* | Tax summary report distributed or filed directly |
| **7** | **Owner** | Record tax payment in Finance Module | *Finance (14)* | Tax liability journal cleared; cash reduced |

| B.2  Partnership (General, Limited & LLP) Two or more partners sharing ownership, profit, and (in general partnerships) liability. Common in professional services, law, medicine, and consulting. |
| :---- |

Partnerships have unique governance requirements: partner capital accounts, profit-sharing arrangements, partner admission/exit workflows, and partnership agreement compliance.

| Characteristic | Partnership in UME |
| :---- | :---- |
| Legal Entity | 1 partnership entity (or LLP); tracked in Legal Entity Module |
| Key Unique Data | Partner capital accounts, profit-sharing ratios, partnership deed terms |
| Governance | Partnership meeting minutes (via Board Module for formal meetings), voting records |
| Finance Special Case | Partner drawings vs salary; profit allocation; capital account movements |
| Compliance | Annual accounts filing, partnership tax return, PSC register (UK), beneficial ownership |

### **Workflow B.2.1: Admit a New Partner**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Managing Partner** | Propose new partner admission; create board/partners meeting agenda item | *Board (04)* | Meeting scheduled; admission proposal circulated to existing partners |
| **2** | **Legal Officer** | Prepare amended partnership deed from template | *Templates (39) \+ CMS (06)* | Draft deed created; track-changes version for partner review |
| **3** | **Partners** | Vote on admission at partners meeting; resolution recorded | *Board (04)* | Admission resolution passed; vote recorded |
| **4** | **Finance Manager** | Create new partner capital account; record initial capital contribution | *Finance (14)* | Capital account journal posted; partnership equity updated |
| **5** | **Legal Officer** | Execute and store amended partnership deed in CMS | *CMS (06)* | Signed deed stored; version history maintained |
| **6** | **HR Module** | Create employee/partner record; assign portal access and permissions | *HR (16) \+ Security (36)* | New partner can access UME with partner-level RBAC role |
| **7** | **Finance Module (auto)** | Update profit-sharing ratio; apply from effective date | *Finance (14)* | Future P\&L allocations reflect new partnership ratios |

| UC-B2-01  Partnership Annual Profit Allocation |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Managing Partner, Finance Manager | Year-end financial close completed; profit allocation required | Partnership (General, Limited, LLP) | Finance (14), Board (04), Communications (07), Legal Entity (13) |

**Preconditions**

* Partnership deed with profit-sharing ratios stored in CMS

* Annual P\&L finalized in Finance Module

**Main Success Flow**

33. Finance Manager confirms final net profit after tax for the year.

34. Finance Module reads partnership profit-sharing ratios from configuration.

35. Profit allocation computed per partner per their share percentage.

36. Allocation journal entries created: P\&L to partner capital accounts.

37. Partner drawings already debited during year reconciled against allocation.

38. Each partner receives a capital account statement via Communications Module.

39. Managing Partner approves allocation; Partners Meeting resolution recorded.

40. If loss: negative allocation applied; partners notified of capital account impact.

**Alternative / Exception Flows**

* Partner has different ratios for different income streams: layered allocation rules applied.

**Postconditions**

* Profit allocated; capital accounts updated; partner statements distributed

| B.3  Private & Public Corporation Separate legal entity with shareholders, directors, and limited liability. Ranges from 1-person private company to publicly listed multinational. |
| :---- |

Corporations are the most complex standard business structure — requiring full statutory compliance, formal board governance, share capital management, and in public companies, continuous disclosure obligations.

| Characteristic | Corporation in UME |
| :---- | :---- |
| Legal Entities | 1+ companies; subsidiaries tracked in Chombo entity graph |
| Board Governance | Full Board Module: directors, committees, minutes, resolutions, board packs |
| Share Capital | Shareholder register (tracked via CRM); share issuances via Finance Module |
| Statutory Filing | Annual returns, financial statements, director changes — all tracked in Chombo |
| For Public Co. | Continuous disclosure, investor relations module (CRM for institutional investors) |

### **Workflow B.3.1: Annual General Meeting (AGM) Preparation**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Company Secretary** | Set AGM date; create meeting in Board Module; issue AGM notice | *Board (04)* | AGM meeting record created; statutory notice period tracking starts |
| **2** | **Finance Manager** | Finalize annual financial statements for board approval | *Finance (14)* | Audited P\&L, Balance Sheet, Cash Flow Statement finalized |
| **3** | **Legal Officer** | Prepare director election/re-election resolutions | *Board (04) \+ Templates (39)* | Resolutions drafted; director nomination papers generated |
| **4** | **Company Secretary** | Compile AGM pack: accounts, director reports, resolutions, proxy form | *Board (04) \+ Templates (39)* | AGM pack assembled; distributed to shareholders per statutory deadline |
| **5** | **Shareholders / CRM** | Proxy votes received; logged against shareholder records | *CRM (08)* | Proxy register updated; voting count prepared |
| **6** | **Company Secretary** | Conduct AGM; record attendance and quorum; vote on resolutions | *Board (04)* | Minutes recorded; resolutions passed; results logged |
| **7** | **Legal Officer** | File AGM results with companies registry; update statutory register | *Legal Entity (13) \+ CMS (06)* | Registry filing completed; director register updated |
| **8** | **Chombo (auto)** | Mark annual return filing as satisfied; update compliance status | *Legal Entity (13)* | Compliance calendar updated; next AGM window calculated |

| B.4  Cooperative (Consumer, Worker, Producer & Multi-Stakeholder) Member-owned and democratically governed. Profit distributed as surplus to members. Strong emphasis on member participation and democratic decision-making. |
| :---- |

Cooperatives require member registry management, democratic governance workflows (one-member-one-vote), surplus distribution calculations, and member engagement tracking that differs from investor-owned corporations.

### **Workflow B.4.1: Annual Member Surplus Distribution**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Finance Manager** | Calculate annual surplus (profit) after reserves and tax | *Finance (14)* | Net distributable surplus computed per cooperative rules |
| **2** | **Finance Manager** | Calculate patronage dividend per member based on trade | *Finance (14)* | Per-member trade volumes retrieved; dividend rate computed |
| **3** | **Board** | Approve surplus distribution rate at general meeting | *Board (04)* | Resolution passed; distribution rate formally approved |
| **4** | **Finance Module (auto)** | Generate member surplus statements from template | *Finance (14) \+ Templates (39)* | Individual surplus statements per member; personalised with trade volume |
| **5** | **Communications (auto)** | Distribute surplus statements to all members | *Communications (07)* | Members notified of their entitlement; payment schedule communicated |
| **6** | **Finance Module (auto)** | Process surplus payments; post to ledger | *Finance (14)* | Payments made; member ledger accounts updated; tax obligations noted |

| UC-B4-01  Cooperative Member Voting on Strategic Resolution |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Board Secretary, Members, General Manager | Board proposes a major strategic change requiring member approval | Consumer Cooperative, Worker Cooperative, Multi-Stakeholder Cooperative | Board (04), CRM (08), Communications (07), Strategy (21) |

**Preconditions**

* Member registry current in CRM Module

* General meeting notice period satisfied

* Voting method configured (in-person, proxy, electronic)

**Main Success Flow**

41. Board Secretary creates general meeting in Board Module; adds resolution to agenda.

42. Notice distributed to all members via Communications Module with proxy form.

43. Members submit proxy votes via portal; proxy register updated in CRM.

44. At meeting: quorum confirmed; attendance registered.

45. Resolution put to vote; votes (in-person \+ proxy) counted.

46. Result recorded in Board Module: resolution passed or failed with vote count.

47. Minutes prepared and distributed to all members within statutory period.

48. If passed: relevant module updated (e.g., strategic objective created in Strategy Module).

**Alternative / Exception Flows**

* Electronic voting enabled: Members vote via portal before meeting; results tabled at meeting.

* Quorum not reached: meeting adjourned; reconvening notice issued.

**Postconditions**

* Resolution recorded; minutes distributed; follow-up actions created in Work Module

| B.5  Non-Profit Organization / Charity / Foundation Mission-driven; not organized for profit. Governed by a board of trustees/directors. Funded by donations, grants, and membership fees. Accountable to beneficiaries and regulators. |
| :---- |

Non-profits require grant management, donor relationship management, impact measurement, restricted vs unrestricted fund accounting, and trustee governance workflows distinct from for-profit companies.

| Persona | ORG-NPO-01 — Non-Profit Executive Director |
| :---- | :---- |
| **Org Context** | Non-profit / Charity / Foundation |
| **Scale** | 1–500 staff; typically $100K–$50M annual budget |
| **Description** | Leads the organization's mission execution. Accountable to the board of trustees, donors, regulators, and beneficiaries. Balances mission impact with financial sustainability. |
| **Key Modules** | Strategy (21), Finance (14), Analytics (02), Board (04), CRM (08), GRC (15) |
| **Goals** | Demonstrate mission impact; secure sustainable funding; maintain regulatory compliance; report to board |
| **Challenges** | Restricted funding complexity; grant reporting burden; impact measurement difficulty |
| **UME Value** | UME Finance handles fund accounting; CRM manages donors; Analytics tracks impact KPIs |

### **Workflow B.5.1: Grant Application and Fund Management**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Programs Manager** | Identify grant opportunity; log in Business Development Module | *BizDev (05)* | Grant opportunity created in BD pipeline; deadline tracked |
| **2** | **Programs Manager** | Draft grant application using grant template | *Templates (39) \+ CMS (06)* | Application drafted; supporting documents assembled |
| **3** | **Executive Director** | Review and approve application; board sign-off if required | *Board (04) \+ Work (40)* | Application approved; board resolution if required |
| **4** | **Programs Manager** | Submit grant application; log submission in BD Module | *BizDev (05)* | Submission recorded; acknowledgement tracked |
| **5** | **Finance Manager** | Grant awarded: create restricted fund account in Finance Module | *Finance (14)* | Restricted fund created; grant conditions stored |
| **6** | **Programs Manager** | Spend grant funds; all expenditure coded to restricted fund | *Finance (14) \+ Work (40)* | Grant expenditure tracked separately; fund balance monitored |
| **7** | **Analytics (auto)** | Track program impact KPIs linked to grant objectives | *Analytics (02)* | Impact metrics computed; grant reporting dashboard live |
| **8** | **Programs Manager** | Prepare grant progress report from finance and analytics data | *Finance (14) \+ Analytics (02) \+ Templates (39)* | Donor report generated; submitted on schedule |
| **9** | **Finance (auto)** | Alert when grant fund balance approaches zero | *Finance (14)* | Fund exhaustion alert; Programs Manager initiates renewal |

| UC-B5-01  Trustee Board Governance Cycle |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Chair, Trustees, Executive Director, Company Secretary | Quarterly trustee board meeting | Charity, Foundation, Non-Profit, NGO | Board (04), Finance (14), Analytics (02), Risk (33), Templates (39), CMS (06) |

**Preconditions**

* Trustee records registered in Board Module

* Annual governance calendar set in Schedule Module

**Main Success Flow**

49. Company Secretary prepares board pack: CEO report, financial performance, program impact, risk update.

50. Impact metrics pulled from Analytics Module; financial statements from Finance Module.

51. Risk register summary pulled from Risk Module and GRC Module.

52. Board pack assembled from template; distributed to trustees.

53. Meeting convened; quorum confirmed; minutes recorded in Board Module.

54. CEO presents: program impact, financial performance, risks, and recommendations.

55. Trustees question, deliberate, and pass resolutions.

56. Minutes approved at next meeting; published in CMS.

57. Action items assigned to Executive Director and management team via Work Module.

**Alternative / Exception Flows**

* Trustee conflict of interest declared: trustee excluded from specific item; declaration logged.

**Postconditions**

* Board pack published; resolutions recorded; action items tracked in Work Module

| B.6  For-Profit Business (SME to Large Enterprise) Profit-motivated entity across all sectors. Encompasses everything from a 5-person restaurant to a 10,000-person professional services firm. |
| :---- |

For-profit businesses span the widest range of size, complexity, and sector. Common patterns include growth management, profitability optimization, talent retention, and competitive positioning.

### **Workflow B.6.1: Business Scaling from 10 to 100 Employees**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **CEO / Owner** | Formalize strategy: define scaling plan, growth OKRs, headcount plan | *Strategy (21)* | 3-year scaling roadmap; OKRs cascaded to functions |
| **2** | **CFO / Finance** | Model financial plan: headcount cost, revenue projections, funding need | *Finance (14)* | Financial model; funding requirement identified |
| **3** | **HR Manager** | Build workforce plan: roles needed by quarter; create job requisitions | *HR (16)* | 12 requisitions created; recruitment pipeline opened |
| **4** | **IT Admin** | Scale IT infrastructure; procure hardware for new hires | *IT (18) \+ Supply Chain (37)* | Hardware procured; CMDB updated; provisioning pipeline ready |
| **5** | **HR Module (auto)** | Run structured onboarding for each new hire batch | *HR (16) \+ Process (29)* | Onboarding workflows triggered per hire; completion tracked |
| **6** | **Finance Manager** | Implement departmental budgets; assign cost center owners | *Finance (14) \+ Admin (01)* | Budget lines active; variance tracking begins |
| **7** | **COO** | Formalize operational processes; document in Process Module | *Process (29) \+ Knowledge (19)* | Core processes defined; runbooks published in Knowledge Module |
| **8** | **Analytics Module (auto)** | Track scaling KPIs: revenue-per-head, CAC, NPS, employee NPS | *Analytics (02)* | Scaling health dashboard live; CEO reviews weekly |

| B.7  Investment Fund (VC, PE, Hedge, Family Office, Endowment) Pools capital to invest in financial assets or companies. Governed by an investment committee and GP/LP or trustee structure. Highly regulated in most jurisdictions. |
| :---- |

| Persona | ORG-INV-01 — Fund Manager / General Partner |
| :---- | :---- |
| **Org Context** | Investment fund — VC, PE, Hedge, Family Office |
| **Scale** | $10M–$10B+ AUM |
| **Description** | Responsible for deploying capital into investments, managing the portfolio, returning capital to LPs, and meeting regulatory obligations for the fund. |
| **Key Modules** | Investment (17), Finance (14), Legal Entity (13), CRM (08), Analytics (02), Board (04) |
| **Goals** | Deploy capital at target IRR; manage portfolio companies; return capital to LPs; stay regulated |
| **Challenges** | Deal sourcing consistency; portfolio company monitoring; LP reporting burden |
| **UME Value** | Investment Module tracks full portfolio; Analytics computes returns and benchmarks; CRM manages LPs |

### **Workflow B.7.1: Investment Committee Deal Review**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Investment Associate** | Log new investment opportunity; initial screen scorecard | *Investment (17) \+ BizDev (05)* | Investment record created; initial screening score computed |
| **2** | **Investment Associate** | Conduct due diligence; log DD findings and risks | *Investment (17)* | DD findings recorded; risk items logged; score updated |
| **3** | **Analyst** | Build investment appraisal: DCF, IRR, multiple scenarios | *Investment (17)* | Appraisal model with base/bull/bear scenarios; NPV and IRR computed |
| **4** | **Fund Manager** | Prepare Investment Committee memo from appraisal and DD | *Templates (39) \+ Investment (17)* | IC memo generated; distributed to IC members |
| **5** | **Investment Committee** | Convene IC meeting; review memo; vote on investment | *Board (04)* | IC resolution recorded; approved/declined/deferred |
| **6** | **Legal Officer** | Negotiate term sheet; execute investment agreement | *CMS (06) \+ Legal Entity (13)* | Term sheet executed; investment agreement stored |
| **7** | **Finance Manager** | Record capital deployment; update fund NAV | *Finance (14) \+ Investment (17)* | Investment position created; fund NAV updated; LP notifications sent |
| **8** | **Analytics (auto)** | Begin portfolio company performance monitoring | *Analytics (02) \+ Investment (17)* | Portfolio monitoring dashboard live; return metrics tracking |

| UC-B7-01  Produce Quarterly LP Investor Report |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Fund Manager (ORG-INV-01), Finance Manager | End of quarter; LP reporting obligation due | Investment Fund, Family Office, Endowment | Investment (17), Finance (14), Analytics (02), CRM (08), Templates (39), Communications (07) |

**Preconditions**

* Portfolio company valuations updated

* Fund NAV computed for period

* LP contact records in CRM

**Main Success Flow**

58. Finance Manager finalizes fund financial statements for the quarter.

59. Investment Module computes portfolio-level IRR, MOIC, and DPI for the period.

60. Analytics Module produces portfolio company performance summaries.

61. Fund Manager writes commentary: portfolio highlights, market observations, outlook.

62. LP report generated from branded template: fund performance, portfolio summary, financials.

63. LP report distributed via Communications Module to all LP CRM contacts.

64. Delivery confirmation tracked; LP acknowledgements recorded.

65. Regulatory reporting obligations confirmed as satisfied in Legal Entity Module.

**Alternative / Exception Flows**

* LP requests additional drill-down: Finance Manager provides supplementary data on request.

**Postconditions**

* LP report distributed; regulatory obligation satisfied; LP relationships updated in CRM

| B.8  Bank & Financial Services Institution Accepts deposits, extends credit, and/or provides financial infrastructure. Subject to intensive prudential regulation (Basel, DORA, etc.) and conduct regulation. |
| :---- |

Banks and financial institutions have specialized UME usage: extensive GRC and regulatory compliance workflows, sophisticated risk management, product/service catalog management for financial products, and AML/KYC compliance workflows.

| Persona | ORG-BNK-01 — Branch / Business Unit Manager (Bank) |
| :---- | :---- |
| **Org Context** | Retail, commercial, or investment bank |
| **Scale** | Unit managing $50M–$5B in assets |
| **Description** | Manages a banking unit's P\&L, staff, customer relationships, risk exposure, and regulatory compliance. Balances revenue growth with prudential requirements. |
| **Key Modules** | Finance (14), Risk (33), GRC (15), CRM (08), HR (16), Analytics (02) |
| **Goals** | Grow loan book profitably; maintain NPL ratio; pass regulatory exams; retain key staff |
| **Challenges** | Regulatory reporting burden; risk monitoring complexity; fragmented customer data |
| **UME Value** | GRC Module maps all regulatory obligations; Risk Module monitors NPL and credit KRIs; CRM tracks relationships |

### **Workflow B.8.1: AML/KYC Customer Onboarding**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Relationship Manager** | Create new customer record in CRM; initiate KYC workflow | *CRM (08) \+ Process (29)* | Customer record created; KYC workflow instance started |
| **2** | **Customer** | Provides ID documents and beneficial ownership declarations | *CMS (06)* | KYC documents stored; document integrity checked |
| **3** | **Compliance Officer** | Screen customer against sanctions and PEP lists via Security/GRC | *Security (36) \+ GRC (15)* | Sanctions screening completed; PEP status recorded |
| **4** | **Compliance Officer** | Assess customer risk rating: standard, enhanced, or simplified due diligence | *GRC (15)* | Customer risk rating assigned; EDD triggered if high-risk |
| **5** | **AML Officer** | Complete KYC checklist; approve or refer for further review | *GRC (15) \+ Work (40)* | KYC approved; customer activated or referral escalated |
| **6** | **CRM Module (auto)** | Update customer profile with KYC completion and review date | *CRM (08)* | KYC review scheduled for next cycle; customer CRM status active |
| **7** | **Compliance Module (auto)** | Write regulatory audit record of KYC completion | *GRC (15) \+ Audit* | Immutable KYC audit trail created; regulator inspection-ready |

| UC-B8-01  Prudential Risk Reporting (Basel/ICAAP) |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Chief Risk Officer, Finance Manager, Compliance Officer | Quarterly regulatory reporting deadline | Bank, Credit Union, Insurance Company | Risk (33), Finance (14), GRC (15), Analytics (02), Board (04), Legal Entity (13) |

**Preconditions**

* Risk register current; capital adequacy model configured

* Financial data finalized for period

**Main Success Flow**

66. Risk Manager pulls top enterprise risks from Risk Module; ensures residual scores current.

67. Finance Manager computes regulatory capital ratios from balance sheet data.

68. GRC Module maps capital requirements to regulatory obligation tracker.

69. Analytics Module produces risk-weighted asset calculations and capital adequacy ratios.

70. ICAAP narrative drafted: stress test scenarios, management actions, forward look.

71. Board reviews and approves submission via Board Module.

72. Regulatory return submitted; submission record and evidence stored in CMS.

73. Submission deadline marked satisfied in Legal Entity Module compliance calendar.

**Alternative / Exception Flows**

* Capital ratio below regulatory minimum: immediate escalation to CEO and Board; remediation plan initiated.

**Postconditions**

* Regulatory return submitted; obligation satisfied; board approval recorded

| B.9  University, College & Academic Institution Delivers education, conducts research, and transfers knowledge. Governed by a senate/council and executive. Funded by tuition, grants, endowment, and government. |
| :---- |

| Persona | ORG-ACA-01 — Department Head / Dean |
| :---- | :---- |
| **Org Context** | University / College |
| **Scale** | Academic unit: 20–500 staff \+ students |
| **Description** | Leads an academic department or faculty. Responsible for curriculum delivery, research output, staff management, student experience, and budget management. |
| **Key Modules** | HR (16), Finance (14), Learning (20), Knowledge (19), Analytics (02), GRC (15) |
| **Goals** | Research output (citations, grants); student satisfaction; staff retention; budget management |
| **Challenges** | Research grant administration complexity; student outcomes tracking; compliance with accreditation bodies |
| **UME Value** | Finance handles grant fund accounting; Learning manages curriculum; Analytics tracks outcomes |

### **Workflow B.9.1: Research Grant Lifecycle**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Principal Investigator** | Identify grant call; submit expression of interest | *BizDev (05)* | Grant opportunity logged; PI assigned; deadline tracked |
| **2** | **Research Office** | Prepare full grant application; ethics clearance if required | *GRC (15) \+ Templates (39)* | Grant application drafted; ethics approval workflow started |
| **3** | **Finance Manager** | Cost grant application: direct and indirect costs; overhead recovery | *Finance (14)* | Budget for grant period costed; overhead recovery rate applied |
| **4** | **PI \+ Research Office** | Submit grant application to funder | *BizDev (05) \+ CMS (06)* | Submission recorded; acknowledgement filed |
| **5** | **Finance Manager** | Grant awarded: set up project account with restricted fund | *Finance (14)* | Project account active; budget lines per grant work package created |
| **6** | **Research Team** | Conduct research; log expenditure and time against grant | *Work (40) \+ Finance (14)* | Expenditure tracked; deliverables managed as work items |
| **7** | **Analytics (auto)** | Track research outputs: publications, citations, IP disclosures | *Analytics (02) \+ Knowledge (19)* | Research KPI dashboard live; output metrics tracked |
| **8** | **Research Office** | Prepare funder progress reports at milestone dates | *Finance (14) \+ Analytics (02) \+ Templates (39)* | Progress report generated; submitted to funder on schedule |
| **9** | **Finance Manager** | Grant closeout: reconcile spend; return unspent funds if required | *Finance (14)* | Grant account closed; final financial report filed |

| UC-B9-01  Academic Accreditation Review |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Dean, Quality Assurance Manager, Accreditation Body | Periodic accreditation review cycle (typically every 5–7 years) | University, College, Professional Training Institution | Portfolio (27), GRC (15), Learning (20), Analytics (02), Board (04), CMS (06) |

**Preconditions**

* Curriculum documentation current in CMS

* Learning outcomes data in Analytics

* GRC obligation registered for accreditation

**Main Success Flow**

74. Quality Assurance Manager creates accreditation project in Portfolio Module.

75. Self-study documentation compiled: curriculum, learning outcomes, staff qualifications.

76. Learning Module exports completion rates, assessment scores, student satisfaction data.

77. Analytics generates research output and impact metrics.

78. GRC Module maps accreditation standards to compliance obligations; evidence attached.

79. Self-study report drafted from template; reviewed by Dean and Academic Board.

80. External review team visit coordinated via Schedule Module.

81. Board approves submission; report submitted to accreditation body.

82. Accreditation outcome recorded in GRC Module; conditions tracked as obligations.

**Alternative / Exception Flows**

* Conditional accreditation: improvement plan created in Work Module; progress tracked against conditions.

**Postconditions**

* Accreditation status updated; improvement conditions tracked; next review scheduled

| B.10  Training Center, Institute & Professional Development Facility Delivers structured learning programs to external learners, corporate clients, or professionals. Revenue from course fees, corporate contracts, or government funding. |
| :---- |

Training facilities are learning-product businesses. UME powers their course catalog, learner management, corporate client relationships, accreditation compliance, and training effectiveness measurement.

### **Workflow B.10.1: Corporate Training Contract Delivery**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Sales Representative** | Corporate client inquiry; qualify training need; propose program | *Sales (34) \+ CRM (08)* | Opportunity created; training needs assessment conducted |
| **2** | **Training Director** | Design custom training program; cost the delivery | *Learning (20) \+ Finance (14)* | Custom learning path created; program costings computed |
| **3** | **Sales Rep** | Contract signed; learner list provided by client | *Sales (34) \+ CMS (06)* | Contract stored; learner list imported to HR/CRM |
| **4** | **Learning Module (auto)** | Enroll all corporate learners; send access credentials | *Learning (20) \+ Communications (07)* | Learner accounts created; enrollment confirmations sent |
| **5** | **Learners** | Complete training modules; assessments graded | *Learning (20)* | Completion and scores tracked per learner |
| **6** | **Trainer / Facilitator** | Deliver live sessions (if blended); log attendance | *Schedule (35) \+ Learning (20)* | Session attendance recorded; virtual or in-person managed |
| **7** | **Learning Module (auto)** | Issue certificates on completion; track CPD credits | *Learning (20)* | Certificates generated from template; distributed to learners |
| **8** | **Analytics Module (auto)** | Compute training effectiveness: pre/post knowledge scores, NPS | *Analytics (02)* | Effectiveness report generated; improvement areas flagged |
| **9** | **Finance Module (auto)** | Invoice client at contract milestone; reconcile payment | *Finance (14)* | Invoice issued; revenue recognized; payment tracked |
| **10** | **Account Manager** | Share effectiveness report with client; discuss renewal | *CRM (08) \+ Analytics (02)* | Client engagement updated; renewal opportunity opened |

# **Part C: Organization Life-Stage Workflows**

Organizations evolve through distinct life stages — each with unique operational priorities, compliance requirements, and UME usage patterns. This section maps workflows to each life stage.

## **C.1 Idea Stage (Pre-Incorporation / Pre-Revenue)**

The organization exists only as an idea or informal arrangement. Founders are validating a hypothesis before committing to formal structure. UME operates as a personal thinking OS.

| Priority | Workflow | Primary Modules |
| :---- | :---- | :---- |
| \#1 | Document the idea: vision, problem statement, target customer, hypothesis | Strategy (21), Knowledge (19) |
| \#2 | Build a lean business case: cost/revenue assumptions, TAM sizing | Finance (14), BizDev (05) |
| \#3 | Track competitor research and market intelligence | BizDev (05), Analytics (02) |
| \#4 | Define MVP scope and validate with potential users | Product (30), Work (40) |
| \#5 | Identify co-founders or advisors; track conversations | CRM (08), Teams (38) |

### **Workflow C.1.1: Idea Validation Cycle**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Founder** | Create "Org" in UME; enter vision and problem statement | *Strategy (21)* | Vision and mission documented; strategic context established |
| **2** | **Founder** | Define validation hypotheses as OKRs (time-boxed) | *Strategy (21)* | Hypotheses tracked as OKRs with 30/60/90 day key results |
| **3** | **Founder** | Log market research, competitor notes, customer interviews | *Knowledge (19) \+ BizDev (05)* | Market intelligence repository building; insights searchable |
| **4** | **Founder** | Build a simple financial model: unit economics, runway scenarios | *Finance (14)* | Revenue/cost model; break-even projection; funding need estimate |
| **5** | **Founder** | Track hypothesis test results weekly; update OKR progress | *Strategy (21)* | Evidence accumulates; pivot/persevere decision data available |
| **6** | **Founder** | Decide to proceed: select legal structure; register entity | *Legal Entity (13)* | Entity registration initiated; compliance evaluation begins |

## **C.2 Startup / Early Stage (0–3 Years, Seed to Series A)**

Organization is formally constituted. Focused on product-market fit, early customers, and demonstrating unit economics to investors. Speed and capital efficiency are paramount.

| Priority | Workflow | Primary Modules |
| :---- | :---- | :---- |
| \#1 | Close paying customers; iterate product rapidly | Sales (34), Product (30), Work (40) |
| \#2 | Track burn rate daily; extend runway | Finance (14), Analytics (02) |
| \#3 | Hire first employees; maintain culture as team grows | HR (16), Teams (38) |
| \#4 | Satisfy statutory compliance; avoid penalties | Legal Entity (13), GRC (15) |
| \#5 | Build investor relationships; manage fundraising pipeline | Investment (17), CRM (08) |

### **Workflow C.2.1: Fundraising Round (Seed / Series A)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **CEO** | Define funding objective; create investor target list in CRM | *CRM (08) \+ Investment (17)* | Target investor profiles created; outreach plan drafted |
| **2** | **CFO** | Prepare financial model: projections, unit economics, use of funds | *Finance (14) \+ Templates (39)* | Investor-ready financial model; pitch deck financial slides |
| **3** | **CEO** | Outreach to investors; log all conversations in CRM | *CRM (08) \+ Communications (07)* | Interaction history per investor; pipeline stage tracked |
| **4** | **Legal Officer** | Prepare data room: cap table, contracts, IP assignments, financials | *CMS (06) \+ Legal Entity (13)* | Secure data room assembled; investor access managed via permissions |
| **5** | **CEO** | Term sheet received: log as investment record; legal review | *Investment (17) \+ Legal Entity (13)* | Term sheet stored; negotiation tracked; key terms summarized |
| **6** | **Legal Officer** | Negotiate and execute investment agreements | *CMS (06)* | Investment agreements signed and version-controlled |
| **7** | **Finance Manager** | Record capital receipt; update cap table; issue shares | *Finance (14)* | Share issuance posted; cap table updated; entity structure updated |
| **8** | **CEO** | Update investors quarterly via LP/investor report | *Analytics (02) \+ Templates (39) \+ Communications (07)* | Investor updates distributed on schedule; relationships maintained |

## **C.3 Growth Stage (Series B+, Scaling, Expansion)**

Product-market fit proven. Now focused on scaling revenue, building management layer, expanding into new markets, and building operational infrastructure to support rapid growth without breaking.

| Priority | Workflow | Primary Modules |
| :---- | :---- | :---- |
| \#1 | Scale sales and marketing machine; reduce CAC | Sales (34), Marketing (22), Analytics (02) |
| \#2 | Build management layer; formalize HR practices | HR (16), Learning (20), Teams (38) |
| \#3 | Expand into new markets; register entities | Legal Entity (13), Finance (14) |
| \#4 | Implement formal GRC; prepare for institutional scrutiny | GRC (15), Risk (33), Security (36) |
| \#5 | Build product for enterprise: security, compliance, uptime | Engineering (10), IT (18), Security (36) |

### **Workflow C.3.1: Geographic Expansion into a New Market**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **CEO \+ Strategy** | Approve new market entry as strategic initiative | *Strategy (21) \+ Portfolio (27)* | Market entry initiative created; exec sponsor assigned |
| **2** | **Legal Officer** | Register new legal entity in target jurisdiction | *Legal Entity (13)* | Entity registered; Chombo runs jurisdiction-specific compliance evaluation |
| **3** | **HR Manager** | Hire country/market lead; local employment contracts | *HR (16) \+ CMS (06)* | Local hire onboarded; local employment law obligations identified |
| **4** | **Finance Manager** | Open local banking; configure local entity COA and tax | *Finance (14)* | Local entity accounts live; intercompany transfer pricing configured |
| **5** | **Marketing Manager** | Register localized go-to-market campaign | *Marketing (22)* | Localized campaign; Soko evaluates with regional strategy packs |
| **6** | **Sales Manager** | Build local pipeline; assign territory to sales team | *Sales (34)* | Local pipeline active; territory and quotas assigned |
| **7** | **IT Admin** | Provision local IT infrastructure; comply with data residency rules | *IT (18) \+ Security (36)* | Local IT active; data residency compliance confirmed |
| **8** | **COO** | Set up local operations; define SLAs; hire ops team | *Operations (25) \+ HR (16)* | Local operations running; SLA monitoring active |

## **C.4 Mature Organization (Established, Multi-Year Track Record)**

Mature organizations face a different challenge: maintaining performance while managing complexity, avoiding bureaucratic drag, refreshing strategy, and preparing for succession or liquidity events.

### **Workflow C.4.1: Leadership Succession Planning**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **CHRO \+ CEO** | Identify critical roles for succession planning; assess succession depth | *HR (16) \+ Analytics (02)* | Succession gaps identified; top 20 critical roles listed |
| **2** | **HR Manager** | Assess internal candidates: performance, potential, readiness | *HR (16)* | 9-box grid populated; readiness ratings assigned |
| **3** | **CHRO** | Present succession plan to board; gain approval | *Board (04)* | Succession plan approved; board resolution recorded |
| **4** | **HR Manager** | Create accelerated development plans for "Ready Now" candidates | *HR (16) \+ Learning (20)* | Development plans created; stretch assignments and learning paths assigned |
| **5** | **Analytics (auto)** | Track development plan progress; flag candidates falling behind | *Analytics (02)* | Succession readiness dashboard live; quarterly alerts on gaps |
| **6** | **CHRO** | Annual succession review: update ratings; adjust plans | *HR (16) \+ Board (04)* | Plan refreshed; board updated; bench strength trend visible |

| UC-C4-01  Organization Renewal / Strategic Transformation |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| CEO, Board, Strategy Team, All Department Heads | Declining performance, market disruption, or board mandate for transformation | Any mature organization | Strategy (21), Portfolio (27), Analytics (02), Board (04), Communications (07), Knowledge (19) |

**Preconditions**

* Current strategy and OKRs active

* Performance analytics available

* Risk register current

**Main Success Flow**

83. CEO commissions transformation program; creates initiative in Portfolio Module.

84. Analytics Module surfaces performance decline signals across all KPIs.

85. PESTLE and SWOT analyses updated in Strategy Module.

86. Transformation program defined: change thesis, vision, workstreams.

87. Board approves transformation mandate; resolution recorded.

88. Each workstream becomes a project in Portfolio Module with dedicated PM.

89. Change management communications plan executed via Communications Module.

90. Transformation OKRs set; progress reviewed monthly in strategy reviews.

91. Lessons learned captured throughout; Knowledge Module updated.

92. Post-transformation: new steady-state OKRs set; transformation project closed.

**Alternative / Exception Flows**

* Transformation stalls: Board intervention; executive changes if required.

**Postconditions**

* Transformation program complete; new strategy active; lessons captured

# **Part D: Sector-Specific Workflows**

This section covers workflows tailored to specific sectors and organizational types that have distinct regulatory environments, stakeholder structures, or operational models requiring specialized UME usage patterns.

| D.1  Government & Public Sector Organizations Delivers public services, enforces law, and manages public resources. Accountable to citizens, legislators, and audit bodies. Subject to public procurement, FOI, and public finance rules. |
| :---- |

| Persona | GOV-01 — Government Department Head / Secretary |
| :---- | :---- |
| **Org Context** | National, State, or Local Government |
| **Scale** | 100–10,000 staff; public budget |
| **Description** | Leads a government department responsible for policy delivery, public service, and stewardship of public resources. Accountable to minister and legislature. |
| **Key Modules** | Strategy (21), Finance (14), HR (16), GRC (15), Analytics (02), Operations (25) |
| **Goals** | Deliver policy objectives; manage within budget; satisfy audit; maintain public trust |
| **Challenges** | Treasury rules restrict flexibility; political environment creates uncertainty; audit scrutiny is high |
| **UME Value** | UME provides transparent operations, audit-ready records, and KPI-linked budget management |

### **Workflow D.1.1: Public Budget Cycle (Annual Estimates Process)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Department Head** | Receive budget circular from Finance Ministry; initiate estimates | *Finance (14) \+ Strategy (21)* | Budget instruction received; departmental estimates cycle opened |
| **2** | **Program Managers** | Submit budget submissions by program: baseline \+ bids \+ savings | *Finance (14)* | Budget submissions per program with justification notes |
| **3** | **Finance Manager** | Consolidate departmental estimates; cross-check against strategy | *Finance (14) \+ Strategy (21)* | Consolidated estimates with OKR linkage; gap analysis vs policy commitments |
| **4** | **Department Head** | Negotiate with Finance Ministry; defend estimates | *Finance (14) \+ Board (04)* | Negotiation positions tracked; concessions logged |
| **5** | **Finance Ministry** | Budget approved in legislature; allocation notified | *Finance (14)* | Approved budget lines entered; allocations locked per appropriation |
| **6** | **Finance Module (auto)** | Track actual spend vs appropriation; flag over-commitment | *Finance (14)* | Real-time appropriation compliance monitoring; Accounting Officer alerted |
| **7** | **Analytics Module (auto)** | Produce monthly management accounts for minister and audit body | *Analytics (02) \+ Finance (14)* | Ministerial management information; performance vs budget published |

### **Workflow D.1.2: Freedom of Information (FOI) Request Management**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **FOI Officer** | Receive FOI request; create case in Work Module | *Work (40) \+ Process (29)* | FOI case created; statutory response deadline set |
| **2** | **FOI Officer** | Search CMS and Knowledge Module for relevant records | *CMS (06) \+ Knowledge (19)* | Relevant documents identified; scope of request assessed |
| **3** | **Legal Officer** | Review records for exemptions; advise on redactions | *Legal Entity (13) \+ CMS (06)* | Exemption analysis completed; redaction decisions documented |
| **4** | **Department Head** | Sign off on FOI response; approve any exemption claims | *Work (40)* | Response approved; decision rationale documented |
| **5** | **FOI Officer** | Issue response to requester within statutory deadline | *Communications (07) \+ Work (40)* | Response sent; delivery confirmed; case closed with audit record |
| **6** | **GRC Module (auto)** | Track FOI compliance rate; report to information commissioner | *GRC (15)* | FOI compliance metrics; regulatory reporting data maintained |

| UC-D1-01  Public Procurement Process |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Procurement Officer, Finance Manager, Department Head | Requirement above public procurement threshold identified | Government Departments, Public Bodies, State-Owned Enterprises | Supply Chain (37), GRC (15), CRM (08), Finance (14), CMS (06), Work (40) |

**Preconditions**

* Budget approved for the procurement

* Specification prepared; procurement threshold rules configured in GRC

**Main Success Flow**

93. Procurement Officer registers procurement requirement; confirms above threshold.

94. GRC Module confirms applicable procurement rules (open tender required).

95. Procurement Officer publishes tender notice; supplier responses registered in CRM.

96. Evaluation panel scores supplier proposals against criteria in Work Module.

97. Evaluation report prepared; contract award recommendation made.

98. Department Head approves award; decision documented with rationale.

99. Unsuccessful suppliers notified per statutory standstill period.

100. Contract executed and stored in CMS; supplier registered in Supply Chain Module.

101. Contract performance tracked; KPIs monitored; payments approved via Finance Module.

**Alternative / Exception Flows**

* Single tender below threshold: simplified direct award workflow with reduced approval steps.

* Legal challenge received: standstill extended; Legal Officer manages challenge via Legal Entity Module.

**Postconditions**

* Contract awarded; supplier registered; performance monitoring active; audit trail complete

| D.2  NGO, International Organization & Global Services Operates across multiple countries and jurisdictions with a humanitarian, development, or global service mission. Accountable to donors, member states, or international community. |
| :---- |

| Persona | NGO-01 — Country Director / Regional Manager (INGO) |
| :---- | :---- |
| **Org Context** | International NGO — regional office |
| **Scale** | Country team 10–500 staff; $1M–$50M program budget |
| **Description** | Manages a country program within a larger international NGO. Accountable to HQ, donors, government partners, and beneficiaries. Operates in complex, often fragile environments. |
| **Key Modules** | Finance (14), HR (16), GRC (15), Analytics (02), Supply Chain (37), Risk (33) |
| **Goals** | Deliver programs to beneficiaries; satisfy donor reporting; manage security risks; maintain staff wellbeing |
| **Challenges** | Field logistics complexity; multi-donor fund management; staff safety in fragile environments; currency risk |
| **UME Value** | Finance Module handles multi-currency multi-donor funds; Risk Module tracks security and program risks |

### **Workflow D.2.1: Humanitarian Program Delivery (Multi-Donor)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Country Director** | Receive donor funding; create restricted fund per donor | *Finance (14)* | Donor fund accounts created; budget lines per work package |
| **2** | **Programs Team** | Develop program work plan; create project with WBS | *Portfolio (27) \+ Work (40)* | Program activities as work packages; delivery milestones set |
| **3** | **Supply Chain Officer** | Procure program supplies; manage supplier qualifications | *Supply Chain (37)* | Supplier due diligence completed; POs issued; delivery tracked |
| **4** | **M\&E Officer** | Set up impact monitoring framework; define beneficiary KPIs | *Analytics (02)* | Impact KPIs defined; data collection workflow configured |
| **5** | **Field Teams** | Deliver program activities; record beneficiary data | *Work (40) \+ Analytics (02)* | Activity completion logged; beneficiary reach tracked |
| **6** | **Finance Officer** | Code all expenditure to correct donor fund and work package | *Finance (14)* | Donor-segregated expenditure; budget vs actuals per donor |
| **7** | **M\&E Officer** | Compile program data; compute impact indicators | *Analytics (02)* | Impact scorecard: beneficiaries reached, outcomes achieved |
| **8** | **Country Director** | Prepare and submit donor report on schedule | *Finance (14) \+ Analytics (02) \+ Templates (39)* | Donor report distributed; acknowledged by donor; obligation marked satisfied |

| UC-D2-01  Multi-Country Organization Consolidated Reporting |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| HQ CFO, Regional Finance Managers, Country Directors | Quarterly HQ consolidated reporting cycle | INGO, Multinational NGO, Global Services Organization, Intergovernmental Body | Finance (14), Legal Entity (13), Analytics (02), Risk (33), Board (04), Communications (07) |

**Preconditions**

* All country entities registered in Legal Entity Module

* Intercompany transactions posted and reconciled

* Reporting currency and FX rates configured

**Main Success Flow**

102. HQ Finance issues reporting instructions via Communications Module; deadline set.

103. Each country office confirms financial data for the period is complete.

104. Finance Module consolidates multi-entity P\&L and balance sheet; intercompany eliminations applied.

105. Analytics Module aggregates program impact KPIs across all country offices.

106. Risk Manager collects country-level risk updates; produces consolidated risk summary.

107. Consolidated board report prepared: financial performance, program impact, risk.

108. Board/Governing Board reviews and approves consolidated report.

109. Report distributed to donors, member states, or governing body as required.

**Alternative / Exception Flows**

* Country office data submitted late: automated escalation to Country Director; deadline enforced.

**Postconditions**

* Consolidated report published; all entities reflected; audit trail maintained

| D.3  Global Supply Chain & International Trade Operations Manages goods and services flows across multiple countries, jurisdictions, and regulatory environments. Subject to customs, trade compliance, sanctions, and origin rules. |
| :---- |

### **Workflow D.3.1: Cross-Border Trade Compliance**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Trade Compliance Officer** | Screen shipment against export control and sanctions lists | *Security (36) \+ GRC (15)* | Sanctions screening completed; export control classification confirmed |
| **2** | **Supply Chain Officer** | Verify country of origin for preferential tariff treatment | *Supply Chain (37)* | Origin documentation verified; certificate of origin prepared |
| **3** | **Customs Broker** | Prepare import/export documentation; lodge with customs authority | *CMS (06) \+ Supply Chain (37)* | Customs declaration filed; tariff duty calculated; payment processed |
| **4** | **Supply Chain Officer** | Track shipment in transit; monitor for customs holds | *Supply Chain (37)* | Real-time shipment status; delay alerts if held |
| **5** | **Finance Manager** | Record import duties, customs fees, and landed costs | *Finance (14)* | Landed cost per shipment; inventory valuation updated |
| **6** | **Trade Compliance Officer** | File post-shipment compliance records; maintain trade archive | *CMS (06) \+ GRC (15)* | Trade compliance archive updated; audit-ready records maintained |

| UC-D3-01  Supplier ESG Assessment in Global Supply Chain |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Procurement Manager, ESG Officer, Supplier | Annual supplier ESG review cycle or new supplier onboarding | Manufacturer, Retailer, Global Services Company, INGO | ESG (11), Supply Chain (37), Communications (07), Work (40), Analytics (02) |

**Preconditions**

* Supplier registered in Supply Chain Module

* ESG assessment questionnaire configured in ESG Module

**Main Success Flow**

110. ESG Officer sends ESG assessment questionnaire to supplier via Communications Module.

111. Supplier completes questionnaire; responses stored in ESG Module.

112. ESG Module computes supplier ESG score: environment, social, and governance pillars.

113. Supply Chain Module updates supplier tier based on ESG score.

114. Below-threshold suppliers flagged for improvement plan or deregistration.

115. ESG Officer tracks improvement commitments as work items in Work Module.

116. Aggregate supply chain ESG score computed for corporate ESG disclosure.

117. ESG disclosure report updated with supply chain performance data.

**Alternative / Exception Flows**

* Critical ESG violation: supplier suspended pending remediation; Procurement alerted.

**Postconditions**

* Supplier ESG scores updated; below-threshold suppliers managed; disclosure data current

| D.4  Healthcare Organization (Hospital, Clinic, Health System) Delivers patient care services. Highly regulated for patient safety, privacy (HIPAA/GDPR), and clinical quality. Workforce-intensive; 24/7 operations. |
| :---- |

### **Workflow D.4.1: Clinical Workforce Rostering and Compliance**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Workforce Manager** | Build clinical roster: doctors, nurses, allied health by shift | *HR (16) \+ Schedule (35)* | Roster built; staffing ratios verified against clinical requirements |
| **2** | **HR Module (auto)** | Check staff compliance: licenses, certifications, mandatory training | *HR (16) \+ Learning (20)* | Compliance status per clinician; non-compliant staff flagged |
| **3** | **Workforce Manager** | Fill gaps: offer overtime or agency staff as needed | *HR (16) \+ Supply Chain (37)* | Gaps filled; agency contracts raised for external staff |
| **4** | **HR Module (auto)** | Enforce working time rules: max hours, minimum rest periods | *HR (16) \+ GRC (15)* | Working time compliance enforced; breaches prevented or flagged |
| **5** | **Analytics (auto)** | Track clinical workforce KPIs: vacancy rate, agency spend, compliance rate | *Analytics (02)* | Workforce dashboard live; escalation if compliance drops |

| D.5  Professional Services Firm (Law, Accounting, Consulting, Architecture) Delivers expert professional services to clients. Revenue from time-billed or project fees. Subject to professional body regulation and client confidentiality obligations. |
| :---- |

### **Workflow D.5.1: Client Matter Lifecycle (Law Firm / Consulting)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Partner / Lead** | New matter/project opened; conflict of interest check run | *CRM (08) \+ GRC (15)* | Matter opened; conflict check passed; engagement letter issued |
| **2** | **Partner** | Assemble team; assign team members with roles | *Teams (38) \+ HR (16)* | Matter team assembled; access granted to matter workspace |
| **3** | **Team Members** | Deliver work; log time against matter daily | *Work (40)* | Billable hours accumulate; work items tracked per matter |
| **4** | **Finance Manager** | Generate WIP report; prepare fee bill at billing milestone | *Finance (14)* | Fee bill drafted; partner reviews and approves |
| **5** | **Finance Module (auto)** | Issue invoice; apply payment terms; track receipt | *Finance (14)* | Invoice sent; payment tracked; dunning if overdue |
| **6** | **Partner** | Matter closed; client satisfaction survey sent; lessons captured | *CRM (08) \+ Knowledge (19)* | Client NPS recorded; lessons published; matter archived |

# **Part E: Global, Multi-Entity & International Organization Workflows**

Organizations operating across multiple countries, jurisdictions, and currencies face compounded complexity. This section addresses the workflows unique to global and multi-entity structures: consolidation, transfer pricing, multi-jurisdiction compliance, global treasury, and international talent management.

## **E.1 Multi-Entity Group Structure Management**

A group consisting of a parent and multiple subsidiaries (domestic and international) requires coordinated entity management, group-level financial consolidation, and inter-entity transactions.

### **Workflow E.1.1: Group Entity Structure Maintenance**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Group Legal Officer** | Register or update all group entities in Chombo | *Legal Entity (13)* | All entities mapped with ownership percentages and jurisdictions |
| **2** | **Group Legal Officer** | Maintain inter-entity relationship graph: parent, subsidiary, JV | *Legal Entity (13)* | Group structure visualization; ownership chain maintained |
| **3** | **Chombo (auto)** | Evaluate all entities against applicable policy packs | *Legal Entity (13)* | Consolidated compliance alerts across the group |
| **4** | **Company Secretary** | Track all statutory filing deadlines across all entities | *Legal Entity (13) \+ Schedule (35)* | Group compliance calendar; deadlines color-coded by urgency |
| **5** | **Group Finance** | Identify intercompany balances and transactions | *Finance (14)* | Intercompany matrix; elimination candidates identified |
| **6** | **Group Finance** | Run group consolidation: eliminate intercompany, compute group P\&L | *Finance (14)* | Consolidated group financial statements; minority interests computed |

### **Workflow E.1.2: Transfer Pricing Documentation**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Group Tax Manager** | Map intercompany transactions: goods, services, IP, financing | *Finance (14) \+ Legal Entity (13)* | Intercompany transaction register; value and nature documented |
| **2** | **Group Tax Manager** | Apply transfer pricing methodology to each transaction type | *Finance (14)* | Arm's-length prices set; methodology (CUP, TNMM, profit split) documented |
| **3** | **Legal Officer** | Prepare or update transfer pricing documentation (local and master file) | *CMS (06) \+ Templates (39)* | TP documentation files created; country-by-country report data compiled |
| **4** | **GRC Manager** | Register TP compliance obligations per jurisdiction | *GRC (15) \+ Legal Entity (13)* | TP filing obligations tracked; deadlines in compliance calendar |
| **5** | **Finance Manager** | Ensure TP policies reflected in intercompany agreements | *CMS (06)* | Intercompany agreements version-controlled; pricing terms consistent |

| UC-E1-01  Group-Wide Annual Compliance Health Check |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Group Legal Officer, Group CFO, Country Legal Officers | Annual group compliance review; typically Q1 preceding year-end filings | Corporate Group, Holding Company, Multi-National Enterprise | Legal Entity (13), GRC (15), Analytics (02), Board (04), Work (40), Communications (07) |

**Preconditions**

* All entities registered in Legal Entity Module

* Compliance calendar configured for each entity

**Main Success Flow**

118. Group Legal Officer runs Chombo evaluate\_all\_entities() for the group.

119. Chombo evaluates each entity against its jurisdiction-specific policy packs.

120. Consolidated compliance alert report produced: critical, high, medium per entity.

121. Group compliance dashboard surfaced in Portal; color-coded by severity.

122. Country Legal Officers notified of critical alerts for their entities.

123. Remediation tasks created in Work Module; owners assigned; deadlines set.

124. Progress tracked weekly; escalations for overdue items.

125. Group Legal Officer reports to Group Board at quarterly governance meeting.

**Alternative / Exception Flows**

* Critical alert with imminent deadline: auto-escalation to Group CEO and Group CFO.

**Postconditions**

* All critical compliance alerts actioned; group compliance posture documented

## **E.2 Global Treasury & Multi-Currency Operations**

Multi-entity global organizations must manage cash pooling, FX exposure, repatriation of profits, and banking relationships across multiple currencies and jurisdictions.

### **Workflow E.2.1: Group Cash Pool Management**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Group Treasurer** | Configure cash pool structure in Finance Module; nominate pool header account | *Finance (14)* | Cash pool structure defined; participating entities and accounts registered |
| **2** | **Finance Module (auto)** | Aggregate cash balances across pool participants daily | *Finance (14)* | Group cash position computed; net pool balance available |
| **3** | **Group Treasurer** | Review daily cash position; identify surplus and deficit entities | *Finance (14) \+ Analytics (02)* | Cash allocation decisions made; intercompany loans posted where required |
| **4** | **Finance Module (auto)** | Compute notional interest on intercompany cash pool positions | *Finance (14)* | Intercompany interest income/expense accruals computed; TP-compliant rates applied |
| **5** | **Group Treasurer** | Monitor FX exposures across group; hedge if required | *Finance (14)* | FX exposure report; hedging decisions documented with rationale |
| **6** | **Analytics (auto)** | Produce group liquidity dashboard: days of cash, headroom, forecast | *Analytics (02)* | Liquidity dashboard; 13-week cash flow forecast per entity and group |

## **E.3 Global Talent & Workforce Management**

Managing a global workforce requires navigating local employment law in each jurisdiction, managing international mobility (expatriates and short-term assignees), and maintaining a global talent pipeline.

### **Workflow E.3.1: International Secondment / Expatriate Assignment**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **HR Manager (Global)** | Identify secondment requirement; create assignment record | *HR (16)* | Assignment record created; home and host entity linked |
| **2** | **Legal Officer** | Assess visa and work permit requirements for destination | *Legal Entity (13) \+ GRC (15)* | Immigration requirements confirmed; permit application timeline set |
| **3** | **HR Manager** | Prepare assignment letter and expatriate package terms | *Templates (39) \+ HR (16)* | Assignment letter issued; benefits, housing, and tax equalization terms set |
| **4** | **Finance Manager** | Set up cost sharing: host entity pays a portion; home entity remainder | *Finance (14)* | Intercompany cost allocation configured; payroll split set up |
| **5** | **Tax Advisor** | Assess personal tax obligations in home and host countries | *Finance (14) \+ GRC (15)* | Tax equalization policy applied; tax filings obligations tracked |
| **6** | **HR Module (auto)** | Track assignment timeline; initiate repatriation workflow before end date | *HR (16) \+ Process (29)* | Repatriation workflow triggered; return role planning initiated |

| UC-E3-01  Global People Analytics and Workforce Planning |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| CHRO, Regional HR Managers, Workforce Analytics Team | Annual workforce planning cycle; quarterly people review | Multinational Enterprise, International NGO, Global Services Organization | HR (16), Analytics (02), Learning (20), MDM (23), Board (04) |

**Preconditions**

* All employees registered across entity HR Modules

* Org unit hierarchy aligned across entities

* Analytics KPI definitions uniform

**Main Success Flow**

126. CHRO commissions global workforce analytics run in Analytics Module.

127. Analytics aggregates: headcount by region, function, level, and tenure.

128. Turnover rates, time-to-fill, and cost-per-hire computed per region.

129. Diversity metrics computed: gender, age band, nationality per level.

130. Succession depth computed: bench strength per critical role globally.

131. Skills gap analysis run: current skills vs future-state requirements.

132. Workforce demand model built: projected headcount need by function and year.

133. Supply vs demand gap identified; hiring and development plan proposed.

134. Workforce plan approved by CHRO and presented to board at talent review.

**Alternative / Exception Flows**

* Data quality inconsistency across entities: HR Data Steward triggers MDM cleanse before analytics run.

**Postconditions**

* Workforce plan approved; hiring requisitions created; development plans activated

## **E.4 Global GRC & Multi-Jurisdiction Regulatory Compliance**

Global organizations must comply with regulations across multiple jurisdictions simultaneously. UME's GRC and Legal Entity modules provide a unified view of obligations across the group.

### **Workflow E.4.1: Regulatory Change Management (Multi-Jurisdiction)**

| \# | Actor | Action | Module | Output / Outcome |
| ----- | :---- | :---- | :---- | :---- |
| **1** | **Group GRC Manager** | New regulation published; create regulatory change record | *GRC (15)* | Regulatory change record; effective date; jurisdiction scope |
| **2** | **GRC Module (auto)** | Map regulation to affected entities and existing obligations | *GRC (15) \+ Legal Entity (13)* | Impact matrix: which entities and processes are affected |
| **3** | **Country Compliance Officers** | Assess impact in their jurisdiction; document local interpretation | *GRC (15)* | Local impact assessments; compliance gap analysis per entity |
| **4** | **Group GRC Manager** | Consolidate impact assessments; define group response | *GRC (15)* | Group compliance action plan; policy changes identified |
| **5** | **Policy Owner** | Update affected policies; trigger policy approval workflow | *Admin (01) \+ Process (29)* | Updated policies approved and published; affected staff notified |
| **6** | **Training Manager** | Update compliance training content; re-enroll affected staff | *Learning (20)* | Updated compliance training live; re-enrollment records created |
| **7** | **GRC Module (auto)** | Track implementation milestones; flag overdue items | *GRC (15) \+ Work (40)* | Regulatory compliance deadline met; evidence stored |

| UC-E4-01  GDPR / Data Privacy Compliance Across Jurisdictions |  |  |  |
| :---- | :---- | :---- | :---- |
| **Actors** | **Trigger** | **Applies To** | **Modules** |
| Group Data Protection Officer, Country Privacy Leads, IT Security | Ongoing compliance obligation; triggered by new processing activity or data breach | Any org processing personal data in EU/UK/Brazil/California/etc. | Security (36), GRC (15), Process (29), Portal (26), Communications (07) |

**Preconditions**

* Privacy obligations registered in GRC Module for each jurisdiction

* Records of processing activities (RoPA) configured

**Main Success Flow**

135. New data processing activity identified; Privacy Officer assesses lawful basis.

136. Processing record created in Security Module (Privacy Manager).

137. Data Protection Impact Assessment (DPIA) conducted if high-risk processing.

138. DPIA outcome: risk mitigation actions created in Work Module.

139. Consent management configured in portal if consent is the lawful basis.

140. Data subject rights procedures tested: DSAR, erasure, portability.

141. Privacy obligation updated in GRC Module; review date set.

142. Annual data privacy compliance review run; RoPA audited for accuracy.

143. If data breach: breach notification workflow triggered; supervisory authority notified within 72 hours.

**Alternative / Exception Flows**

* Data breach confirmed: Security Module activates breach notification workflow; DPA notified per GDPR Article 33\.

**Postconditions**

* Processing compliant; DPIA documented; RoPA current; DSAR procedures tested

# **Part F: Extended User Journey Maps**

These journey maps follow specific persona types through multi-week or multi-month experiences with the UME OS, illustrating how the system supports daily, weekly, and strategic rhythms.

## **Journey F-01: The Startup Founder — First 90 Days**

Persona: IND-01 (Solo Founder). Scenario: Idea to first paying customer in 90 days.

| Moment | Action | Module / Tool | Experience & Outcome |
| :---- | :---- | :---- | :---- |
| Day 1 | Creates org in UME; documents vision, problem, and hypothesis | Strategy (21) | Founder has a structured strategic foundation before writing a line of code |
| Day 2–5 | Builds lean financial model; calculates runway scenarios | Finance (14) | Knows exactly how long the money lasts; makes go/no-go decision with data |
| Day 5 | Registers legal entity; Chombo evaluates compliance requirements | Legal Entity (13) | Filing calendar live; no compliance deadline will be missed |
| Day 7 | Defines MVP backlog; first work sprint started | Work (40) \+ Product (30) | Prioritized feature list; velocity tracking from day 1 |
| Day 14 | Logs first 5 prospect conversations in CRM | CRM (08) | Pipeline visibility; next steps tracked; no prospect falls through cracks |
| Day 21 | Sends first 10 outreach emails; tracks delivery and response | Communications (07) | Response rate measured; message optimization based on data |
| Day 30 | First demo booked; proposal generated from template | Templates (39) \+ CRM (08) | Professional proposal in minutes; founder doesn't reinvent from scratch |
| Day 45 | MVP feature-complete; soft launch to 3 beta users | Product (30) \+ Analytics (02) | Usage analytics from day 1; product decisions driven by behavioral data |
| Day 60 | First paid customer closes; invoice issued and paid | Sales (34) \+ Finance (14) | Revenue journal posted; burn rate dashboard updates in real time |
| Day 75 | 5 customers; campaign registered; Soko evaluates strategy | Marketing (22) | 70 strategy packs surface insights; founder knows what's working and why |
| Day 90 | Weekly review: OKRs, cash, pipeline, compliance | Portal (26) | Single dashboard; no spreadsheet chaos; informed decisions every Monday |

## **Journey F-02: The Independent Consultant — Monthly Rhythm**

Persona: IND-03 (Freelance Consultant). Scenario: Managing three concurrent client engagements over a month.

| Moment | Action | Module / Tool | Experience & Outcome |
| :---- | :---- | :---- | :---- |
| Week 1 Mon | Opens portal; reviews 3 client kanban boards | Work (40) | Instant context on each engagement; knows what to work on today |
| Week 1 Tue–Fri | Delivers Client A work; logs 22 billable hours | Work (40) | Precise time log; billable hours accumulate without manual timesheet |
| Week 1 Thu | Discovery call with new prospect; logs interaction and requirements | CRM (08) | Prospect fully documented; proposal prep starts immediately after call |
| Week 2 Mon | Generates and sends proposal to prospect | Templates (39) \+ CRM (08) | Branded proposal in 15 minutes; no blank page anxiety |
| Week 2 | Client B invoice milestone reached; invoice auto-generated | Finance (14) | Invoice rendered from time log; sent to client; payment timer starts |
| Week 3 Mon | Client C sends change request; formal scope change created | Work (40) \+ CRM (08) | Change documented; Client C agrees; additional fee invoiced cleanly |
| Week 3 | Client A payment received; dunning not needed | Finance (14) | Journal posted; AR cleared; no awkward payment chase email required |
| Week 4 | New prospect accepts proposal; contract generated | Sales (34) \+ Templates (39) | Engagement started; work items created; billing schedule set |
| Month End | Finance review: revenue, expenses, outstanding AR | Finance (14) \+ Analytics (02) | Net income visible; 3 outstanding invoices; AR aging clear |
| Month End | Reviews utilization rate: 87% billable this month | Analytics (02) | Above target; capacity assessment: can take 5 more hours per week |

## **Journey F-03: The NGO Country Director — Program Quarter**

Persona: NGO-01 (Country Director). Scenario: Managing Q2 program delivery under 3 simultaneous donor grants.

| Moment | Action | Module / Tool | Experience & Outcome |
| :---- | :---- | :---- | :---- |
| Month 1 Wk 1 | Q2 program kickoff: updates all project work plans for the quarter | Portfolio (27) \+ Work (40) | Q2 activities visible; team assignments confirmed; milestones in calendar |
| Month 1 Wk 2 | Releases Q1 donor reports for Donor A and Donor B | Finance (14) \+ Templates (39) | Reports generated in 2 hours from data; distributed on deadline |
| Month 1 | Conducts security risk assessment; updates risk register | Risk (33) | Country security risks current; staff briefed; KRIs monitored |
| Month 2 Wk 1 | Field team completes Phase 1 delivery; records beneficiary data | Work (40) \+ Analytics (02) | Beneficiary reach updated; impact KPIs refresh on dashboard |
| Month 2 | Procurement of Phase 2 supplies initiated | Supply Chain (37) | Supplier selected; PO issued; delivery date confirmed; funds reserved |
| Month 2 Wk 3 | HQ requests urgent financial report — generated in 30 min | Finance (14) \+ Analytics (02) | Multi-donor financial position available instantly; no manual extraction |
| Month 3 Wk 1 | Donor C field visit: impact dashboard presented in portal | Analytics (02) \+ Portal (26) | Donor sees real-time program data; credibility and trust strengthened |
| Month 3 Wk 2 | New grant opportunity identified; application submitted | BizDev (05) \+ Templates (39) | Grant application pipeline managed; deadline never missed |
| Month 3 | Quarter close: all fund accounts reconciled; reports filed | Finance (14) | Clean Q2 close; compliance calendar shows no overdue items |

## **Journey F-04: The Government Department Manager — Annual Budget Cycle**

Persona: GOV-01 (Government Department Head). Scenario: Full annual budget cycle from estimates to outturn reporting.

| Moment | Action | Module / Tool | Experience & Outcome |
| :---- | :---- | :---- | :---- |
| Q4 Yr-1 Nov | Budget circular received; estimates cycle opened for all programs | Finance (14) | Department managers notified; submission templates distributed |
| Q4 Yr-1 Dec | Program managers submit draft estimates; consolidated review | Finance (14) \+ Strategy (21) | Consolidated estimates; OKR linkage verified; gaps identified |
| Q1 Yr0 Jan | Budget negotiations with Treasury; positions tracked | Finance (14) \+ Board (04) | Negotiation positions documented; concessions managed transparently |
| Q1 Yr0 Mar | Budget approved; appropriation lines locked in Finance Module | Finance (14) | Real-time appropriation tracking begins; Department Head auto-alerted on approach to limit |
| Q2 Monthly | Monthly management accounts published to minister | Analytics (02) \+ Finance (14) | Ministerial MI pack auto-generated; no manual preparation needed |
| Q3 Mid-yr | Mid-year expenditure review: forecast vs appropriation | Finance (14) \+ Analytics (02) | Underspends and overspends surfaced; virements proposed if needed |
| Q3 | FOI request received; processed within statutory deadline | Work (40) \+ CMS (06) | FOI handled systematically; no deadline breach; audit record complete |
| Q4 Nov | Annual report preparation: KPI outcomes vs plan | Analytics (02) \+ Strategy (21) | Performance story told with data; OKR achievement rates computed |
| Q4 Dec | Outturn accounts prepared; audit clearance obtained | Finance (14) \+ GRC (15) | Accounts submitted; audit trail fully maintained; no audit qualifications |

## **Journey F-05: The Bank Branch Manager — Regulatory Inspection**

Persona: ORG-BNK-01 (Bank Branch Manager). Scenario: Regulatory inspection announced; 4-week preparation and response cycle.

| Moment | Action | Module / Tool | Experience & Outcome |
| :---- | :---- | :---- | :---- |
| Day 1 | Regulatory inspection notice received; inspection response team formed | Work (40) \+ Teams (38) | Response team assembled; workstream owners assigned; tracker created |
| Day 2–3 | GRC Module generates inspection readiness checklist from obligation register | GRC (15) | All regulatory requirements mapped; evidence status assessed per item |
| Day 3–5 | Evidence gathering: pull audit records, control test results, training records | CMS (06) \+ GRC (15) \+ Learning (20) | Evidence assembled; gaps identified; remediation plan created |
| Day 5–10 | Remediate evidence gaps: update stale controls; complete overdue training | Work (40) \+ Learning (20) | Gaps closed before inspector arrives; completion audit-trailed |
| Day 10 | CRO briefing: risk dashboard, KRI status, top risks presented | Risk (33) \+ Analytics (02) | CRO has current picture; no surprises in front of inspector |
| Day 12 | Inspector arrives; data room access granted via CMS permissions | CMS (06) \+ Security (36) | Secure, audited inspector access; no ad-hoc document sharing via email |
| Day 14–18 | Inspector findings logged in GRC Module as issues | GRC (15) | "Management responses drafted for each finding; timeline committed to |
| Day 20 | Inspection closed; findings report received | GRC (15) | Findings stored; remediation work items created; owners assigned |
| Ongoing | Remediation tracked; overdue items escalated weekly | Work (40) \+ GRC (15) | Next inspection: all prior findings will be closed with evidence |

# **Appendix A: Persona Quick Reference Index**

All personas defined in this document with their primary org context and most-used UME modules.

| ID | Persona | Org Context | Primary Modules |
| :---- | :---- | :---- | :---- |
| IND-01 | Solo Entrepreneur / Founder | Startup / Sole Trader | Strategy, Finance, Legal Entity, CRM, Sales, Work |
| IND-02 | Serial / Multi-Venture Founder | Multi-entity Holding | Legal Entity, Investment, Finance, Board, Analytics |
| IND-03 | Freelance / Independent Consultant | Sole Proprietor / LLC | CRM, Finance, Work, Templates, Schedule |
| IND-04 | Gig Economy Worker | Individual / Platform | Finance, Analytics, CRM, Work |
| IND-05 | Front-Line Employee | Any organization | Portal, Work, HR, Learning, Knowledge |
| IND-06 | Mid-Level Knowledge Worker | Corporate / Professional Services | Portal, Work, Strategy, Learning, Analytics |
| IND-07 | Remote / Distributed Worker | Any, fully remote | Portal, Work, Knowledge, Communications, Schedule |
| IND-08 | Small Business Owner / Micro-Employer | SME 1–19 staff | HR, Finance, Legal Entity, CRM, Work |
| IND-09 | Mid-Market Employer (no HR team) | 50–250 staff | HR, Learning, GRC, Finance, Work, Analytics |
| IND-10 | Large Employer | 1000+ staff, multi-site | HR, Analytics, Learning, GRC, Finance, Operations |
| ORG-NPO-01 | Non-Profit Executive Director | Charity / Foundation | Strategy, Finance, Analytics, Board, CRM, GRC |
| ORG-INV-01 | Fund Manager / General Partner | VC / PE / Family Office | Investment, Finance, Legal Entity, CRM, Analytics, Board |
| ORG-BNK-01 | Bank Branch / Business Unit Manager | Retail / Commercial Bank | Finance, Risk, GRC, CRM, HR, Analytics |
| GOV-01 | Government Department Head | National / State Government | Strategy, Finance, HR, GRC, Analytics, Operations |
| NGO-01 | INGO Country Director | International NGO | Finance, HR, GRC, Analytics, Supply Chain, Risk |

# **Appendix B: Workflow Index by Organization Type**

| Code | Workflow | Org Type | Key Modules |
| :---- | :---- | :---- | :---- |
| WF-IND-01 | Entrepreneur Launches New Venture | Startup / Sole Trader | Strategy, Legal Entity, Finance, Product, Sales |
| WF-IND-02 | Independent Consultant Proposal-to-Invoice | Sole Proprietor | CRM, Templates, Work, Finance |
| WF-IND-03 | Employer Runs Monthly Payroll | SME / Any Employer | HR, Finance, Templates, Communications |
| WF-B1.1 | Sole Proprietor Annual Tax Preparation | Sole Proprietorship | Finance, Legal Entity, Templates |
| WF-B2.1 | Partnership — Admit New Partner | General / LLP Partnership | Board, Finance, CMS, HR, Security |
| WF-B2.1b | Partnership Annual Profit Allocation | Partnership | Finance, Board, Communications |
| WF-B3.1 | Corporation — AGM Preparation | Private / Public Company | Board, Finance, Legal Entity, CRM, Templates |
| WF-B4.1 | Cooperative Annual Surplus Distribution | Consumer / Worker Cooperative | Finance, Board, Communications, Templates |
| WF-B5.1 | Non-Profit Grant Application and Fund Management | NGO / Charity | BizDev, Finance, Analytics, Templates |
| WF-B6.1 | For-Profit Business 10-to-100 Scaling | For-Profit SME to Corporate | Strategy, HR, Finance, IT, Operations, Analytics |
| WF-B7.1 | Investment Fund — IC Deal Review | VC / PE / Family Office | Investment, Board, Finance, CRM, Templates |
| WF-B8.1 | Bank — AML / KYC Customer Onboarding | Bank / Financial Institution | CRM, GRC, Security, Process |
| WF-B9.1 | University Research Grant Lifecycle | Academia | BizDev, Finance, Work, Analytics, Knowledge |
| WF-B10.1 | Training Center — Corporate Contract Delivery | Training / Institute | Sales, Learning, Finance, Analytics, CRM |
| WF-C1.1 | Idea Validation Cycle | Pre-Incorporation | Strategy, Knowledge, Finance, BizDev |
| WF-C2.1 | Startup Fundraising Round | Early-Stage Startup | Investment, Finance, CRM, Legal Entity, CMS |
| WF-C3.1 | Geographic Market Expansion | Growth-Stage Company | Legal Entity, HR, Finance, Marketing, IT |
| WF-C4.1 | Leadership Succession Planning | Mature Organization | HR, Learning, Board, Analytics |
| WF-D1.1 | Government Annual Budget / Estimates | Government Department | Finance, Strategy, Board, Analytics |
| WF-D1.2 | FOI Request Management | Government / Public Body | Work, CMS, Knowledge, GRC, Communications |
| WF-D2.1 | Humanitarian Program Delivery | INGO | Finance, Portfolio, Supply Chain, Analytics |
| WF-D3.1 | Cross-Border Trade Compliance | Global Supply Chain | Security, GRC, Supply Chain, Finance, CMS |
| WF-D4.1 | Clinical Workforce Rostering | Healthcare | HR, Schedule, Learning, GRC, Analytics |
| WF-D5.1 | Professional Services Matter Lifecycle | Law / Consulting | CRM, GRC, Teams, Finance, Knowledge |
| WF-E1.1 | Group Entity Structure Maintenance | Corporate Group / Holding | Legal Entity, Finance, Schedule |
| WF-E1.2 | Transfer Pricing Documentation | Multinational Enterprise | Finance, Legal Entity, GRC, CMS |
| WF-E2.1 | Group Cash Pool Management | Global Corporate Treasury | Finance, Analytics |
| WF-E3.1 | International Expatriate Assignment | Multinational Employer | HR, Legal Entity, GRC, Finance, Templates |
| WF-E4.1 | Multi-Jurisdiction Regulatory Change | Global Organization | GRC, Legal Entity, Learning, Admin, Work |

# **Appendix C: Use Case Index**

| ID | Title | Org Type | Modules |
| :---- | :---- | :---- | :---- |
| UC-IND-01 | Sole Founder Manages Cash Runway | Startup / Sole Trader | Finance, Analytics, Sales, Investment |
| UC-IND-02 | Independent Worker Multi-Client Workload | Sole Proprietor | Work, Schedule, Analytics, Finance, CRM |
| UC-IND-03 | Employee Mandatory Compliance Training | All organizations | Learning, HR, Portal, Communications |
| UC-IND-04 | Employer Hires First Employee | SME / Startup | HR, Finance, Learning, CMS, Templates |
| UC-B2-01 | Partnership Annual Profit Allocation | Partnership | Finance, Board, Communications, Legal Entity |
| UC-B4-01 | Cooperative Member Voting | Cooperative | Board, CRM, Communications, Strategy |
| UC-B5-01 | Non-Profit Trustee Board Cycle | Charity / Foundation | Board, Finance, Analytics, Risk, Templates |
| UC-B7-01 | Investment Fund LP Quarterly Report | Fund / Family Office | Investment, Finance, Analytics, CRM, Templates |
| UC-B8-01 | Bank Prudential Risk Reporting | Bank / Financial Institution | Risk, Finance, GRC, Analytics, Board |
| UC-B9-01 | Academic Accreditation Review | University / College | Portfolio, GRC, Learning, Analytics, Board |
| UC-C4-01 | Organizational Renewal / Transformation | Any mature org | Strategy, Portfolio, Analytics, Board, Knowledge |
| UC-D1-01 | Government Public Procurement | Government / Public Body | Supply Chain, GRC, CRM, Finance, CMS |
| UC-D2-01 | INGO Multi-Country Consolidated Reporting | International NGO / Intergovernmental | Finance, Legal Entity, Analytics, Risk, Board |
| UC-D3-01 | Global Supply Chain ESG Assessment | Manufacturer / Retailer / Global Org | ESG, Supply Chain, Communications, Analytics |
| UC-E1-01 | Group-Wide Annual Compliance Health Check | Corporate Group / MNE | Legal Entity, GRC, Analytics, Board, Work |
| UC-E3-01 | Global People Analytics & Workforce Planning | Multinational Employer | HR, Analytics, Learning, MDM, Board |
| UC-E4-01 | GDPR / Data Privacy Multi-Jurisdiction Compliance | Any org processing personal data | Security, GRC, Process, Portal, Communications |

# **Appendix D: Module Coverage by Org Type**

This matrix shows which UME modules are most actively used across each organizational type covered in this document.

| Module | Sole Prop. | Partnership | Corporation | Co-op | Non-Profit | Fund | Bank | Gov. | INGO/Int'l |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Strategy (21) | ● | ● | ● | ● | ● | ● | ○ | ● | ○ |
| Legal Entity (13) | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| Finance (14) | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| HR (16) | ○ | ○ | ● | ● | ● | ○ | ● | ● | ● |
| GRC (15) | ○ | ○ | ● | ● | ● | ● | ● | ● | ● |
| Risk (33) | ○ | ○ | ● | ○ | ● | ● | ● | ● | ● |
| Board (04) | ○ | ● | ● | ● | ● | ● | ● | ● | ● |
| Analytics (02) | ● | ● | ● | ● | ● | ● | ● | ● | ● |
| CRM (08) | ● | ● | ● | ○ | ● | ● | ● | ○ | ● |
| Sales (34) | ● | ● | ● | ○ | ○ | ○ | ○ | ○ | ○ |
| Marketing (22) | ● | ○ | ● | ○ | ● | ○ | ○ | ○ | ○ |
| Investment (17) | ● | ○ | ● | ○ | ● | ● | ○ | ● | ○ |
| Learning (20) | ○ | ○ | ● | ● | ● | ○ | ● | ● | ● |
| Portfolio (27) | ○ | ○ | ● | ○ | ● | ● | ○ | ● | ● |
| Supply Chain (37) | ○ | ○ | ● | ● | ● | ○ | ○ | ○ | ● |
| ESG (11) | ○ | ○ | ● | ● | ● | ○ | ● | ● | ● |
| Work (40) | ● | ● | ● | ● | ● | ● | ● | ● | ● |

● \= Commonly used  ○ \= Optional / Less typical for this org type

