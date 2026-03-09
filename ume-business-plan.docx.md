  
**UME**

Organisation / Business Operating System

**Business Plan**

*Confidential — For Authorised Recipients Only*

────────────────────────────

**Document Reference:**  UME-BP-001 v1.0.0

**Date:**  March 2026

**Prepared By:**  UME Founding Team

**Classification:**  Strictly Confidential

**Status:**  Final — Investor Ready

*This document contains proprietary and confidential information. Recipients may not reproduce,*

*distribute, or disclose this document or its contents without prior written consent from UME.*

| Table of Contents |
| :---- |

|  | Executive Summary |
| :---- | :---- |
| **1** | **Company Overview** |
| 1.1 | Mission & Vision |
| 1.2 | Company Structure |
| 1.3 | Founding Story |
| 1.4 | Current Status |
| **2** | **Market Analysis** |
| 2.1 | Market Size & Structure |
| 2.2 | Target Customer Segments |
| 2.3 | Market Trends |
| 2.4 | Competitive Landscape |
| 2.5 | Competitive Moat |
| **3** | **Product** |
| 3.1 | The Core Insight |
| 3.2 | Platform Architecture |
| 3.3 | The 42 Organisation Modules |
| 3.4 | Killer Features by Persona |
| 3.5 | Technical Differentiation |
| 3.6 | Product Roadmap |
| **4** | **Business Model** |
| 4.1 | Revenue Model |
| 4.2 | Unit Economics |
| 4.3 | Gross Margin Structure |
| 4.4 | Go-To-Market Strategy |
| 4.5 | Customer Success & Retention |
| **5** | **Operations** |
| 5.1 | Technology & Infrastructure |
| 5.2 | Development Methodology |
| 5.3 | Jurisdiction Policy Pack Operations |
| 5.4 | Data Privacy & Security |
| **6** | **Team** |
| 6.1 | Founding Team |
| 6.2 | Hiring Plan |
| 6.3 | Advisors & Board |
| **7** | **Financial Projections** |
| 7.1 | Revenue Projections |
| 7.2 | Customer Count |
| 7.3 | Key SaaS Metrics |
| 7.4 | Cost Structure |
| 7.5 | EBITDA & Burn |
| 7.6 | Funding Requirements |
| 7.7 | Three-Scenario Summary |
| **8** | **Risk Analysis & Mitigation** |
| 8.1 | Risk Register |
| 8.2 | Regulatory & Legal Risks |
| **9** | **The Investment Ask** |
| 9.1 | Use of Capital |
| 9.2 | Ideal Investor Profile |
| 9.3 | Proposed Terms |
| 9.4 | Why Now |
|  | **Appendices** |
| **A** | **5-Year Financial Model** |
| **B** | **Product Architecture Summary** |
| **C** | **Jurisdiction Coverage** |
| **D** | **Design Customer Programme** |

# **Executive Summary**

| The Opportunity   Every organisation on Earth — 500 million of them — runs on a fragmented stack of 12–28 disconnected software tools. None of those tools share a common model of the organisation. The result is $4.5 trillion in annual compliance costs, missed deadlines, opaque financials, and management time consumed by data reconciliation instead of value creation.   UME solves this with the world's first Organisation Operating System. |
| :---: |

UME is a single Rust-based platform providing 42 integrated domain modules: legal entity management, accounting and finance, human resources, governance, risk, compliance, sales, marketing, operations, supply chain, IT, and strategy. Every module shares a common organisational model, communicates via a unified event bus, and is governed by a single RBAC and audit engine.

Unlike ERP systems, UME is not a suite of loosely coupled applications bolted together. The kernel mediates all data access, all authorisation, and all cross-domain communication. A change in one domain — a new hire, a period lock, a KRI threshold breach — propagates automatically to all affected domains without manual intervention.

| $380B TAM by 2028 *integrated biz mgmt software* | 500M Organisations *globally underserved* | 42 Domain Modules *in a single platform* | 45+ Jurisdictions *compliance policy packs* |
| :---: | :---: | :---: | :---: |

## **The Ask**

| Round | Amount | Use of Funds | Target Close |
| :---- | :---- | :---- | :---- |
| Seed | $2.5M | Platform MVP, core team (12 FTE), 20 jurisdiction policy packs, 100 design customers | Q2 2026 |
| Series A | $12M | GA launch, sales & marketing, 45+ jurisdictions, Java client, Kubernetes deployment | Q4 2026 |
| Series B | $40M | International expansion, marketplace ecosystem, AI features, enterprise sales motion | Q3 2027 |

## **Key Metrics at Series A Close (Projected)**

| Metric | Target |
| :---- | :---- |
| Annual Recurring Revenue (ARR) | $3.2M |
| Paying Organisations | 320 |
| Average Contract Value (ACV) | $10,000 per annum |
| Net Revenue Retention (NRR) | 115%+ |
| Gross Margin | 78%+ |
| Customer Acquisition Cost (CAC) | $4,800 |
| CAC Payback Period | \< 7 months |

# **1\. Company Overview**

## **1.1 Mission & Vision**

| Mission To give every organisation — from a sole trader to a global enterprise — a single operating system that holds their complete organisational context and provides every capability they need to govern, operate, and grow. |
| :---- |

| Vision A world where organisational dysfunction is not the norm. Where no compliance deadline is missed because a paralegal forgot to update a spreadsheet. Where a CFO can see the group cash position in real time, not after a 10-day consolidation exercise. Where an entrepreneur spends their time building, not reconciling tools. |
| :---- |

## **1.2 Company Structure**

| Detail | Information |
| :---- | :---- |
| Legal Name | UME Technologies Ltd (operating name: UME) |
| Jurisdiction | England & Wales (incorporated) |
| Structure | Private Limited Company; planned Delaware C-Corp incorporation prior to Series A for US investor alignment |
| Founded | 2025 |
| Headquarters | London, UK (with distributed engineering team) |
| Primary Market | Global — English-speaking markets first (UK, US, AU, CA, IE); expansion into EU and APAC from Year 2 |
| IP Ownership | All IP held by UME Technologies Ltd; no third-party IP embedded in core platform |
| Open Source Policy | Platform core is proprietary; jurisdiction policy pack schema is open; SDK is open-source under Apache 2.0 |

## **1.3 Founding Story**

UME was founded by a team who repeatedly experienced the same problem: as organisations they worked in grew, the cost of operating those organisations grew faster than the revenue. Not because the work was harder — because the tools didn't talk to each other. Every growth milestone brought a new tool, a new integration project, and a new category of data that needed manual reconciliation.

The founding team spent 18 months researching the market before writing a line of code. They talked to 300+ founders, CFOs, COOs, legal officers, and compliance managers across 12 countries. The finding was consistent: no one was happy with their software stack, everyone was paying too much for too little integration, and the problem got worse, not better, as organisations grew.

The decision to build in Rust was deliberate and non-negotiable. The correctness guarantees Rust provides — memory safety, type-safe domain models, no runtime exceptions — are not engineering preferences. They are product requirements for a platform that handles money, compliance obligations, and people data simultaneously.

## **1.4 Current Status**

| Milestone | Status | Date |
| :---- | :---- | :---- |
| Company incorporation | Complete | Q4 2025 |
| Founding team assembled (5 FTE) | Complete | Q1 2026 |
| Architecture and technical specification complete | Complete | Q1 2026 |
| Kernel \+ 8 core modules (alpha) | In progress | Q2 2026 |
| Design customer programme (20 orgs) | Recruiting | Q2 2026 |
| Seed round close | Targeting | Q2 2026 |
| Milestone 1 (GA) launch | Planned | Q3 2026 |
| Series A close | Targeting | Q4 2026 |

# **2\. Market Analysis**

## **2.1 Market Size & Structure**

The market for business management software is vast, fragmented, and growing. No single platform currently addresses the full scope of what UME provides. UME's total addressable market is the sum of the markets it replaces, not one sub-segment of it.

| Market Segment | 2025 Market Size | 2028 Projected | CAGR | UME Relevance |
| :---- | :---- | :---- | :---- | :---- |
| ERP / Business Management Software | $62B | $90B | 13.1% | Direct replacement for SME ERP stacks |
| HR Software & Services | $38B | $58B | 14.8% | HR module replaces HRIS for sub-5K organisations |
| Accounting & Financial Software | $20B | $31B | 15.6% | Finance module replaces SME accounting tools |
| GRC (Governance, Risk, Compliance) | $25B | $44B | 20.8% | GRC/Risk modules accessible at all scales |
| CRM Platforms | $71B | $114B | 17.0% | CRM module for orgs that don't need Salesforce |
| Project & Work Management | $14B | $24B | 19.7% | Work module replaces Jira/Asana for org-integrated teams |
| Legal Entity Management | $3B | $6B | 26.0% | Chombo directly addresses this underserved market |
| Total Addressable Market | $233B | $367B | — | Conservative estimate; excludes adjacent categories |

| SAM & SOM Serviceable Addressable Market (SAM): Organisations with 1–5,000 employees that currently use ≥3 separate business tools and are actively evaluating consolidation. Estimated at $52B by 2028 based on 14M organisations globally meeting these criteria. Serviceable Obtainable Market (SOM): 0.5% of SAM captured in Years 1–3. Target: $260M ARR by end of Year 3 (2029). This represents approximately 26,000 organisations at a $10,000 average ACV. |
| :---- |

## **2.2 Target Customer Segments**

| Segment | Size | Characteristics | UME Entry Point | ACV Range |
| :---- | :---- | :---- | :---- | :---- |
| Solo / Micro (1–5 people) | 300M globally | Sole traders, freelancers, early-stage startups; use Xero/QuickBooks \+ spreadsheets | Embedded mode; compliance and finance from day one | $199–$599/yr |
| Small Business (5–50 people) | 60M globally | Growing teams; starting to outgrow their accounting tool; compliance becoming real | Finance \+ HR \+ Legal Entity; replace Xero \+ BambooHR \+ lawyer's calendar | $600–$3,600/yr |
| Growth Company (50–500 people) | 5M globally | Series A–C; multiple entities forming; GRC suddenly matters; hiring fast | Finance \+ HR \+ GRC \+ Risk \+ Sales; replace partial ERP \+ HRIS \+ GRC tool | $3,600–$18,000/yr |
| Mid-Market (500–5,000 people) | 500K globally | Multiple entities; compliance in multiple jurisdictions; integration costs are significant | Full platform deployment; displace partial ERP stack; enterprise SSO \+ RBAC | $18,000–$120,000/yr |
| Non-Profit / NGO | 10M globally | Restricted fund accounting; grant lifecycle; trustee governance; donor reporting | Finance (restricted funds) \+ GRC \+ HR \+ Board; sector-specific value proposition | $600–$12,000/yr |
| Government Dept / Public Body | 500K globally | Appropriations compliance; public procurement; FOI management; public audit trail | Chombo \+ Finance \+ GRC \+ IT; replaces siloed government tools | $6,000–$60,000/yr |
| Investment Fund | 200K globally | LP capital accounts; portfolio company tracking; IC governance; carry calculations | Investment \+ Finance \+ HR \+ Board; replaces expensive fund management software | $6,000–$60,000/yr |

## **2.3 Market Trends Driving Adoption**

| Trend | Impact on UME Opportunity |
| :---- | :---- |
| Regulatory complexity increasing globally | Every new jurisdiction, every new ESG framework, every new reporting requirement creates a new demand for Chombo's policy pack model. Compliance cost is rising; UME automates it. |
| Remote-first organisations need digital-first operations | Distributed teams cannot rely on physical presence for process coordination. UME's event-driven workflow automation is a direct response to this structural shift. |
| SME market maturing beyond spreadsheets | A generation of founders who grew up on Notion, Slack, and Figma will not tolerate operating their company in Excel. They expect software-grade operations. |
| Multi-entity structures proliferating | Holding companies, joint ventures, and subsidiary structures are no longer the exclusive domain of large enterprises. Seed-stage founders are multi-entity from year one. |
| ESG reporting becoming mandatory | EU CSRD, UK TCFD, and US SEC climate disclosure rules are creating demand for ESG data management. UME's ESG module (M3) is built to absorb this demand. |
| Open banking enabling automated reconciliation | PSD2 in Europe, CDR in Australia, and emerging open banking in the US enables UME's Finance module to provide automated bank feed reconciliation at a fraction of current cost. |
| AI/ML lowering intelligence infrastructure cost | UME's M4 AI features (deal scoring, anomaly detection, predictive cash flow) become commercially viable as foundation model costs decline. |

## **2.4 Competitive Landscape**

No direct competitor offers the combination of breadth, integration depth, and legal entity intelligence that UME provides. The competitive landscape is segmented by functional area.

| Competitor | Category | Strengths | Critical Gaps vs. UME | UME Positioning |
| :---- | :---- | :---- | :---- | :---- |
| SAP S/4HANA | Enterprise ERP | Deep financial capability; global; mature | Minimum $500K implementation; no SME path; no legal entity intelligence; GRC is add-on | UME is 100× less expensive; accessible without an SI; entity compliance built-in |
| Oracle NetSuite | Cloud ERP | Strong financials; multi-entity support | Complex to implement; $30K+ minimum ACV; no integrated GRC/Risk; no compliance automation | UME is faster to value; GRC and compliance are first-class, not add-ons |
| QuickBooks / Xero | SME Accounting | Easy to use; large accountant network; integrations | Accounting only; no entity management; no HR; no GRC; no risk; no analytics beyond basic P\&L | UME includes everything Xero does plus HR, GRC, compliance, risk, and strategy |
| Workday | Enterprise HCM | Deep HR and finance integration; strong analytics | $1M+ implementations; no legal entity; no GRC; no sales; no supply chain | UME's HR is comparable; 10× cheaper; includes domains Workday never addresses |
| Odoo | SME All-in-One | Broad module set; open-source option | Modules share a name but not a deep organisational model; weak on compliance; no entity intelligence | UME's modules share a kernel, not just a logo; compliance is not an afterthought |
| Diligent / CT Corporation | Legal Entity Mgmt | Deep entity compliance expertise | Standalone tools; do not integrate with Finance, HR, or Risk; expensive | UME makes Chombo's capability part of a full operational platform |
| LogicGate / MetricStream | GRC Platforms | Deep GRC frameworks; enterprise penetration | Disconnected from operational data; requires manual data entry; expensive; no SME path | UME's risk updates from live operational data; no manual KRI entry required |

## **2.5 Competitive Moat**

| Moat Element | Description | Time to Build (Competitor) |
| :---- | :---- | :---- |
| Jurisdiction policy pack library | 45+ jurisdictions at launch; growing to 65+ by Year 2\. Each pack requires legal expertise to build and ongoing maintenance. This is a content moat, not just a software moat. | 3–5 years and dedicated legal teams per jurisdiction |
| Kernel-mediated architecture | All modules share a single organisational model via the kernel. This depth of integration is not achievable by connecting existing point solutions with an API layer. | Full rebuild; 3–4 years for a team that understands the architecture |
| Network of organisational context | As UME accumulates more organisational data (with consent), cross-organisational patterns (benchmark KPIs, risk appetite norms, compliance timing) become a data moat. | Cannot be replicated without the installed base |
| Module ecosystem (post-M3) | A marketplace of third-party modules with a signed, versioned SDK creates a flywheel: more modules attract more organisations; more organisations attract more module developers. | 18–24 months after SDK publication; requires installed base to attract developers |
| Switching cost | When UME becomes the system of record for legal entities, finance, HR, GRC, and operations simultaneously, the cost of switching is the cost of migrating all of those domains at once. | Accrues naturally with deployment depth; reaches high switching cost by Year 2 for typical customer |

# **3\. Product**

## **3.1 The Core Insight**

| Why UME Works When Others Have Failed The fatal flaw in every "all-in-one" platform is that the modules share a brand, not a data model. When Odoo's HR module and its Finance module need to talk, they do so through an API call — the same way any two external systems would. There is no shared concept of "the organisation" that both modules understand.   UME inverts this entirely. The kernel holds the authoritative organisational model — entities, structure, people, obligations, permissions — and every module accesses it through a common facade. A payroll run in Finance automatically knows the employment terms from HR, the org unit from Administration, and the compliance obligations from Chombo. Not because those modules were integrated. Because they share a kernel. |
| :---- |

## **3.2 Platform Architecture**

UME is built on four layers, each with a strict dependency rule that prevents architectural decay over time:

| Layer | Components | Dependency Rule |
| :---- | :---- | :---- |
| Layer 0 — Core | ume\_core: shared types, traits, error model, event schema, RBAC primitives | Zero external dependencies. The common language of the platform. |
| Layer 1 — Kernel | ume\_kernel: RBAC engine, event bus, storage abstraction, audit chain, supervisor, executor pool, device driver bus | Depends only on ume\_core. The infrastructure every module shares. |
| Layer 2 — Modules | 42 domain modules: Finance, HR, Chombo, GRC, Risk, Sales, Marketing, IT, Security, and 33 more | Depend on ume\_core only. Cannot import ume\_kernel directly. Communicate only via the kernel facade. |
| Layer 3 — Clients | ume\_server (Axum HTTP/WS), ume\_runtime (CLI), ume\_sdk, Java GUI/Shell/Watch clients | Depend on kernel \+ modules. The user-facing surface. |

This architecture delivers three properties that competitors cannot match without a full rebuild: (1) Fault isolation — a broken module cannot crash the kernel or other modules. (2) Domain isolation — modules cannot accidentally read each other's data by calling each other directly; all cross-domain communication is via the event bus. (3) Correctness — every operation is authorised by the same RBAC engine and logged to the same cryptographic audit chain.

## **3.3 The 42 Organisation Modules**

UME ships with 42 built-in modules covering every operational domain. They are activated per organisation — a freelancer activates 4 modules; a mid-market CFO activates 18\. The platform works for both without modification.

| Domain Area | Modules | Launch Milestone |
| :---- | :---- | :---- |
| Organisation & Platform | Administration, Design System, Portal, Process & Orchestration, Templates, Communications | Milestone 1 (Q3 2026\) |
| Finance & Accounting | Finance (full double-entry, multi-entity, payroll, forecasting), Investment, Portfolio | M1 \+ M3 |
| Legal & Compliance | Legal Entity Management (Chombo), GRC, Security & Privacy | M1 \+ M2 |
| People | Human Resources, Learning & Development, Teams & Cooperatives | M1 \+ M2 \+ M3 |
| Governance | Risk Management, Board & Governance, ESG | M1 \+ M2 \+ M3 |
| Revenue | CRM, Sales, Marketing (Soko) | M2 |
| Operations | Work Management, Operations, Supply Chain, Schedule, IT & Assets, Engineering, Production | M1 \+ M2 \+ M3 |
| Intelligence | Analytics & Reporting, Knowledge Base, Master Data Management | M1 \+ M2 \+ M3 |
| Infrastructure | Backup & Recovery, Custom Modules SDK (×2), Product Management, Requirements Mgmt | M1 \+ M3 |
| Sector-Specific | Business Development, Content Management, PR & Branding, Office & Facilities | M2 \+ M3 |

## **3.4 Killer Features by Persona**

| Persona | Feature That Changes Everything | Why No Competitor Offers This |
| :---- | :---- | :---- |
| Founder / CEO | One-screen view of: group structure, cash position, compliance status, headcount, and open risks — updated in real time | Requires all five domains to share a kernel; no competitor has this architecture |
| CFO | Consolidated group P\&L, balance sheet, and cash flow with automated intercompany elimination — available in real time, not at month end | Requires multi-entity ledger with shared intercompany accounts in a single transaction boundary |
| Legal Officer | Compliance obligations automatically derived from entity facts across 45+ jurisdictions; filing calendar built from organisational data, not manual configuration | Requires the entity model and the compliance rule engine to share the same data; point solutions cannot do this |
| Risk Manager | KRIs that update automatically from Finance, HR, IT, and Operations data; threshold breaches escalated in \< 5 minutes without a human polling the data | Requires risk indicators to be subscribed to domain events from other modules; only possible on a shared event bus |
| HR Manager | New hire → access provisioning, equipment request, policy acknowledgments, and payroll setup — all triggered automatically | Requires HR, IT, Finance, and Admin to share the same process engine and event model |
| Non-Profit Director | Restricted fund P\&L and balance sheet; fund utilisation vs. donor restriction compliance; grant lifecycle from application to close | Requires fund-level sub-ledgers and restriction enforcement built into the chart of accounts — not an add-on |

## **3.5 Technical Differentiation**

| Technical Choice | Business Implication |
| :---- | :---- |
| Rust (primary language) | Memory safety by construction. No garbage collection pauses. Type-safe domain models where the compiler enforces business rules. The correctness guarantees justify the build complexity. |
| Single-process kernel architecture | All 42 modules in one process. Shared memory for events (microsecond latency). No network hops between domains. Sub-100ms P50 API response even for cross-domain operations. |
| Cryptographic audit chain | SHA-256 hash-chained audit log. Every record includes the hash of the previous record. Tamper detection without a blockchain. Regulatory-grade audit trail from day one. |
| Jurisdiction policy packs | Compliance rules as versioned, machine-readable data files. New jurisdiction \= new pack file, not a code change. Rules can be updated without a platform release. Regulatory changes ship as data. |
| Module SDK with MockKernel | Third-party developers build and test modules without a running kernel. The MockKernel provides all kernel services in-process. Test coverage of 80%+ is achievable before a line of integration is written. |
| Embedded mode (SQLite) | Zero-dependency single binary. A 1-person business on a laptop has the same platform as an enterprise on Kubernetes. The organisational model scales with the organisation, not the other way round. |

## **3.6 Product Roadmap**

| Milestone | Quarter | Key Deliverables | Revenue Trigger |
| :---- | :---- | :---- | :---- |
| M1 — Foundation | Q3 2026 | 42 modules (core set), kernel, embedded \+ Docker mode, 20 jurisdiction packs, REST API, Java clients | GA launch; begin commercial sales; Seed customers convert to paid |
| M2 — Growth | Q4 2026 | Multi-entity consolidation, GRC, Sales & CRM, Marketing (Soko), Kubernetes, SSO, 45 jurisdiction packs | Series A deployment; growth segment activation; partnership channel launch |
| M3 — Ecosystem | Q1 2027 | Module marketplace, Board module, ESG, Investment, Supply Chain, BI connectors, module signing | Marketplace revenue share begins; enterprise segment entry; partner module revenue |
| M4 — Intelligence | Q2 2027 | AI deal scoring, anomaly detection, predictive cash flow, GraphQL, sector modules, I18n | AI-tier pricing; government and university segment activation; international expansion revenue |

# **4\. Business Model**

## **4.1 Revenue Model**

UME operates a subscription SaaS model with four tiers. Pricing is per-organisation (not per-seat for the base platform), with per-seat charges applied only to modules that are inherently per-user (HR, Learning, Portal). This aligns pricing with value delivered to the organisation rather than penalising growth.

| Tier | Target Segment | Monthly Price | Included Modules | Per-Seat |
| :---- | :---- | :---- | :---- | :---- |
| Starter | Solo / Micro (1–5 people) | $49/mo | Finance, Chombo (1 entity), Administration, Portal, Backup | — |
| Business | Small Business (5–50 people) | $199/mo | All Starter \+ HR, GRC (basic), Risk (basic), Work, CRM, Analytics | $4/user/mo above 10 users |
| Growth | Growth Company (50–500 people) | $799/mo | All Business \+ Multi-entity Finance, full GRC, Risk, Sales, Marketing, IT, Security | $6/user/mo above 50 users |
| Enterprise | Mid-Market (500–5,000+) | $2,499/mo | All modules; dedicated infrastructure option; SLA; SAML SSO; custom policy packs | $8/user/mo above 200 users |

| Additional Revenue Streams   Jurisdiction Policy Pack Add-ons     — Additional jurisdictions beyond the included allocation: $49–$299/jurisdiction/yr   Professional Services                — Implementation, data migration, custom module development: $200–$400/hr   Marketplace Revenue Share            — 25% of third-party module subscription revenue (post-M3)   AI Tier (post-M4)                   — AI analytics, predictive features, anomaly detection: \+$199–$999/mo add-on   Training & Certification             — Administrator and developer training programmes: $499–$1,999 per cohort |
| :---- |

## **4.2 Unit Economics**

| Metric | Starter | Business | Growth | Enterprise |
| :---- | :---- | :---- | :---- | :---- |
| Monthly Price | $49 | $199 | $799 | $2,499+ |
| Annual Contract Value (ACV) | $588 | $2,388 | $9,588 | $29,988+ |
| Gross Margin (target) | 72% | 78% | 82% | 85% |
| Customer Acquisition Cost (CAC) | $280 | $1,200 | $4,800 | $18,000 |
| CAC Payback Period | 5.7 months | 6.1 months | 7.0 months | 7.2 months |
| LTV (5-year, 90% retention) | $2,646 | $10,746 | $43,146 | $134,946+ |
| LTV / CAC Ratio | 9.4× | 9.0× | 9.0× | 7.5× |

## **4.3 Gross Margin Structure**

UME's cost of revenue is dominated by infrastructure, jurisdiction policy pack maintenance, and customer support. Gross margins improve significantly as the platform matures and support costs decrease through better documentation, onboarding automation, and the shift toward higher-ACV customers.

| Cost of Revenue Component | Year 1 | Year 2 | Year 3 |
| :---- | :---- | :---- | :---- |
| Infrastructure (cloud compute, storage, CDN) | 18% | 12% | 9% |
| Jurisdiction policy pack maintenance | 8% | 6% | 5% |
| Customer support (headcount) | 12% | 8% | 6% |
| Payment processing fees (2%) | 2% | 2% | 2% |
| Total Cost of Revenue | 40% | 28% | 22% |
| Gross Margin | 60% | 72% | 78% |

## **4.4 Go-To-Market Strategy**

UME's GTM strategy is designed for the reality of selling a new category: start narrow with a segment that feels the pain most acutely, prove the value proposition at scale, then expand horizontally to adjacent segments with the same playbook.

### **Phase 1 — Seed (Q2–Q4 2026): Design Customer Programme**

Before full commercial launch, UME recruits 20 design customers — early adopters who get significantly discounted access in exchange for weekly feedback sessions, co-development of their most critical workflows, and permission to be cited as reference customers at launch.

| Design Customer Criteria | Target Profile |
| :---- | :---- |
| Organisation size | 5–200 employees; at least 2 entities in at least 2 jurisdictions |
| Current pain | Paying for 4+ disconnected tools; have experienced at least one compliance failure |
| Engagement commitment | Weekly 60-minute feedback session; access to platform logs and usage data (anonymised) |
| Reference commitment | Public case study on launch; willing to speak to investors and future customers |
| Commercial terms | 50% discount on Business or Growth tier for 24 months from GA launch |

### **Phase 2 — Launch (Q3 2026): Product-Led Growth \+ Founder Community**

UME launches with a free 14-day trial and an embedded-mode free tier (1 entity, Finance \+ Chombo only) designed to put the platform in the hands of founders at the moment they incorporate. The go-to-market is product-led: the value of Chombo's automatic compliance calendar is visible within minutes of entering an entity, before any payment is required.

| GTM Motion | Channel | Target Volume (Q3–Q4 2026\) |
| :---- | :---- | :---- |
| Product-led trial | In-product onboarding; Chombo free tier for new incorporations | 500 trial activations/mo |
| Founder community | Indie Hackers, ProductHunt, founder Slack communities, Startup Grind | 2,000 community members; 50 direct sign-ups/mo |
| Accountant & solicitor channel | Partnership with 20 UK/US accountancy firms and solicitors to refer clients | 100 referred sign-ups in first 6 months |
| Content marketing | SEO-optimised content targeting "multi-entity accounting", "UK company compliance", "GRC for startups" | 5,000 organic monthly visitors by month 6 |
| Direct outreach | Outbound to 200 design customer candidates; 20 signed, 60+ pipeline for Year 2 | 20 design customers signed; 60+ Sales pipeline |

### **Phase 3 — Scale (Q4 2026–Q4 2027): Partner Channel \+ Mid-Market Motion**

With proven design customer case studies and product-market fit signals, UME invests in two new channels: an accountant/professional services partner programme, and a direct enterprise sales motion for organisations with 200+ employees that have an identifiable sponsor (usually CFO, COO, or CLO).

| Channel | Mechanism | Year 2 Revenue Contribution |
| :---- | :---- | :---- |
| Accountant Partner Programme | Revenue share (20%) for referred and managed UME deployments; co-branded Chombo compliance calendar | 35% of new ARR |
| Law Firm & Compliance Partner Programme | Entity setup and compliance calendar powered by UME; white-label option available | 15% of new ARR |
| Enterprise Direct Sales | 2 enterprise AEs hired Q1 2027; 6-month sales cycle; minimum $30K ACV deals | 25% of new ARR |
| Marketplace / Ecosystem | Third-party module developers bringing new customers via sector-specific modules | 5% of new ARR (growing) |
| Organic / PLG (continued) | Product improvements drive ongoing self-serve activation | 20% of new ARR |

## **4.5 Customer Success & Retention**

UME's retention model is built on deployment depth. A customer using 3 modules has a switching cost. A customer using 12 modules — with their entity structure, historical financials, HR records, and compliance history in UME — has a very high switching cost. Customer Success is structured to accelerate module adoption, not just to manage support tickets.

| CS Motion | Trigger | Goal |
| :---- | :---- | :---- |
| Onboarding programme (all tiers) | Trial activation → paid conversion | Time-to-first-value \< 30 minutes; Finance \+ Chombo configured in first session |
| 30-60-90 day adoption reviews | Customer signs contract | Module adoption target: 4+ modules by Day 90; identify expansion module candidates |
| Quarterly Business Reviews (Growth+) | Quarterly, all Growth and Enterprise accounts | Executive alignment; benchmark against peer organisations; expansion planning |
| Health score monitoring | Continuous; alert at 60-day inactivity | CSM outreach before churn; proactive intervention |
| Expansion plays | Module adoption thresholds | Upsell: multi-entity, GRC, Risk, AI tier; triggered by CS automation when usage signals readiness |
| Renewal automation | 90 days before renewal | Auto-renewal for Starter/Business; proactive renewal QBR for Growth/Enterprise |

# **5\. Operations**

## **5.1 Technology & Infrastructure**

| Component | Technology Choice | Rationale |
| :---- | :---- | :---- |
| Platform language | Rust (1.75+) | Memory safety; performance; type-system correctness guarantees for financial and compliance data |
| HTTP framework | Axum (Tokio) | Async-first; excellent performance; ecosystem maturity for production web services |
| Database (standard/enterprise) | PostgreSQL 16+ | ACID transactions; excellent JSON support; mature replication and HA tooling; open source |
| Database (embedded) | SQLite 3.45+ | Zero-dependency; single-file; full SQL; sufficient for sub-500 user deployments |
| Cache / session | Redis 7+ | Session storage for JWT revocation; hot cache tier; pub/sub for multi-node events |
| Message broker (enterprise) | NATS JetStream | Low latency; at-least-once delivery; persistent streams; Kubernetes-native |
| Container runtime | Docker / Kubernetes (Helm) | Industry standard; Helm chart ships with HPA and PDB for zero-downtime rolling deploys |
| Java client framework | JavaFX (GUI) \+ JLine3 (Shell) \+ OpenTelemetry | Cross-platform GUI; rich TUI shell; built-in observability |
| Observability | Prometheus \+ OpenTelemetry \+ Grafana | Standard stack; alerting on custom metrics (event queue depth, module health) |
| CI/CD | GitHub Actions \+ cargo-deny \+ cargo-tarpaulin | Automated test, lint, dependency audit, coverage gate; release pipeline to GitHub Packages |

## **5.2 Development Methodology**

UME follows a trunk-based development model with two-week sprints. All code changes require a reviewed pull request. The CI pipeline enforces: zero compiler warnings, cargo clippy clean, cargo fmt compliance, minimum 70% test coverage for new code, and zero known critical/high CVEs in dependencies.

| Practice | Standard |
| :---- | :---- |
| Sprint cadence | 2-week sprints; sprint review and retrospective; public internal roadmap board |
| Code review | Minimum 1 reviewer for features; 2 reviewers for kernel changes; security review for auth/crypto/RBAC changes |
| Testing | Unit tests (MockKernel); integration tests (Docker-based kernel); e2e tests (full stack with seed data) |
| Release cadence | Minor versions every 4 weeks; patch releases on demand for security fixes |
| Documentation | Every module ships with: API docs (OpenAPI), user guide, and admin guide; updated in the same PR as the code |
| On-call rotation | Engineering on-call from M1 launch; PagerDuty integration; 15-minute P0 response SLA |

## **5.3 Jurisdiction Policy Pack Operations**

Jurisdiction policy packs are a critical operational dependency. Each pack must be accurate, current, and maintained as regulations change. This requires a dedicated content operation running in parallel with engineering.

| Role | Responsibility | Hire Timing |
| :---- | :---- | :---- |
| Head of Regulatory Content | Overall responsibility for pack accuracy and coverage; manages legal counsel network | Month 6 (post-Seed) |
| Regulatory Content Lead (UK/EU) | Maintain UK and EU pack library; monitor regulatory change; commission expert review for complex jurisdictions | Month 6 |
| Regulatory Content Lead (US/Americas) | Maintain US (federal \+ 50 state), Canada, and LatAm packs | Month 10 (pre-Series A) |
| Regulatory Content Lead (APAC) | Maintain AU, NZ, SG, HK, and priority APAC packs | Month 18 (post-Series A) |
| Legal Counsel Network | Jurisdiction-specific legal experts commissioned for initial pack build and annual review | Ongoing, per-jurisdiction contract basis |

## **5.4 Data Privacy & Security Operations**

UME handles sensitive organisational data — financial records, people data, compliance evidence, legal entity information. Security and privacy are not add-on features; they are operational capabilities with dedicated ownership.

| Security Capability | Implementation |
| :---- | :---- |
| Encryption at rest | AES-256-GCM for all persisted data; field-level encryption for PII; key management via CryptoVault interface |
| Encryption in transit | TLS 1.3 mandatory; certificate management via Let's Encrypt (cloud) or customer-provided cert (on-prem) |
| Penetration testing | Annual third-party pentest from M2; critical findings remediated within 30 days |
| Vulnerability management | Dependabot for automated dependency CVE alerts; 72-hour SLA for critical CVEs; 14-day for high |
| SOC 2 Type II | Target certification by Q2 2027 (18 months from GA launch); required for enterprise sales motion |
| GDPR/CCPA compliance | DPA published; RoPA maintained in UME itself (dogfooding); DSAR workflow built into Security module |
| Incident response | Documented IRP; tabletop exercise quarterly; public status page; customer notification within 24h of confirmed breach |
| Bug bounty | HackerOne programme from M2 launch; $500–$10,000 bounty range |

# **6\. Team**

## **6.1 Founding Team**

The founding team combines deep technical capability (systems programming, distributed systems, financial software) with operational experience (running multi-entity businesses, managing compliance in regulated sectors, and scaling SaaS products). This combination is deliberate: UME's value proposition requires both the credibility to understand the organisational problems it solves, and the technical depth to build the right solution.

| Chief Executive Officer *Key Expertise* Operational credibility; fundraising; enterprise relationships; regulatory navigation | 15 years operating multi-entity businesses across the UK, EU, and Africa. Founded and scaled two software companies (one exit, one active). Deep experience with the exact fragmentation problem UME solves — managed a 12-entity group across 4 jurisdictions using 14 separate tools simultaneously. |
| :---- | :---- |

| Chief Technology Officer *Key Expertise* Rust platform architecture; kernel design; engineering team building; technical credibility with enterprise buyers | Systems programmer with 12 years of experience, 6 of them in Rust. Previously led the platform engineering team at a Series C fintech (400-person engineering org). Contributor to the Rust async ecosystem. Deep expertise in correctness-critical financial systems. |
| :---- | :---- |

| Chief Product Officer *Key Expertise* Product-market fit; domain knowledge across all 42 modules; design customer relationships; competitor intelligence | Product leader with 10 years spanning ERP (3 years at NetSuite), HRIS (2 years at Workday partner), and GRC (3 years at a scale-up). Interviewed 300+ organisations during UME's discovery phase. Designed the module interaction model and the jurisdiction policy pack schema. |
| :---- | :---- |

| VP Engineering (Backend) *Key Expertise* Kernel implementation; module SDK; performance engineering; Rust ecosystem relationships | Senior Rust engineer and architect. 8 years building high-throughput distributed systems. Previously at a payments infrastructure company (200M transactions/day). Designed UME's event bus, storage abstraction, and RBAC engine. Rust contributor (async-std ecosystem). |
| :---- | :---- |

| VP Engineering (Platform & Integrations) *Key Expertise* Java client architecture; REST API design; enterprise integration; SDK documentation | Full-stack engineer with particular depth in Java and Rust interop, API design, and enterprise integration patterns. Built the Java client suite. Designed the OpenAPI specification and the WebSocket event streaming protocol. |
| :---- | :---- |

## **6.2 Hiring Plan**

| Role | Start Date | Function | Compensation Band |
| :---- | :---- | :---- | :---- |
| Senior Rust Engineer (×2) | Month 1 (Seed close) | Core kernel and module development | £90K–£120K \+ 0.25–0.5% equity |
| Senior Rust Engineer (×2) | Month 3 | Module development (Finance, HR, Chombo) | £90K–£120K \+ 0.2–0.4% equity |
| Head of Regulatory Content | Month 6 | Jurisdiction policy pack operation | £70K–£90K \+ 0.1–0.2% equity |
| Designer (UX/UI, ×1) | Month 3 | Web portal, Java client, design system | £65K–£85K \+ 0.15–0.3% equity |
| QA / Test Engineer (×1) | Month 4 | Integration test suite, CI pipeline, pentest coordination | £55K–£75K \+ 0.1–0.2% equity |
| Customer Success Manager (×1) | Month 6 (pre-launch) | Design customer onboarding, first 50 paid customers | £45K–£60K \+ 0.05–0.1% equity |
| VP Sales | Month 10 (pre-Series A) | Build and lead GTM motion; enterprise AE hiring | £100K–£130K \+ 0.3–0.5% equity |
| Sales AEs (×2) | Month 12 (post-Series A) | SMB and growth segment; inside sales | £50K–£70K base \+ commission \+ equity |
| Senior Rust Engineer (×4) | Month 12–18 | Module depth; marketplace SDK; AI features | £90K–£120K \+ 0.1–0.2% equity |
| Marketing Lead | Month 12 | Content, SEO, community, demand generation | £60K–£80K \+ 0.1–0.2% equity |
| Enterprise Sales AEs (×2) | Month 18 | Enterprise segment (Series B) | £70K–£90K base \+ commission \+ equity |
| Head of Partnerships | Month 18 | Accountant, solicitor, and tech partner channel | £80K–£100K \+ 0.1–0.2% equity |

## **6.3 Advisors & Board**

| Advisor / Board Member | Background | Value-Add |
| :---- | :---- | :---- |
| Fractional CFO (advisor) | 30 years in finance; former CFO of 3 UK PLCs; current NED at 2 growth companies | Financial model validation; investor introductions; enterprise CFO relationships |
| Regulatory Technology Expert (advisor) | Former Head of Regulatory Affairs at a major UK bank; 25 years in compliance technology | Jurisdiction pack quality assurance; regulated sector customer introductions; FCA/PRA navigation |
| Former ERP Founder (advisor) | Founded and sold a vertical ERP to a strategic acquirer at £40M exit; depth in the ERP displacement sales motion | Competitor intelligence; enterprise procurement process; channel partner strategy |
| Seed Investor / Board Observer | Partner at a London-based pre-seed / seed fund with a portfolio of 12 B2B SaaS companies | Follow-on capital access; portfolio introductions; SaaS benchmarking |

# **7\. Financial Projections**

| Projection Basis & Assumptions All projections are in GBP (£). USD equivalents at £1 \= $1.28. Projections are built bottom-up from: (a) cohort-based customer acquisition by tier and channel; (b) headcount-based cost model; (c) infrastructure costs benchmarked against comparable SaaS deployments. Three scenarios are modelled: Base (most likely), Bear (50% below plan), Bull (150% of plan). Investors should treat all forward projections as illustrative; actual results will differ. |
| :---- |

## **7.1 Revenue Projections**

| Revenue Stream | Year 1 (2026) | Year 2 (2027) | Year 3 (2028) | Year 4 (2029) | Year 5 (2030) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Starter Tier | £18K | £96K | £240K | £480K | £840K |
| Business Tier | £86K | £468K | £1,080K | £2,160K | £3,780K |
| Growth Tier | £192K | £960K | £2,400K | £4,800K | £8,400K |
| Enterprise Tier | £0 | £600K | £2,400K | £6,000K | £12,000K |
| Professional Services | £60K | £300K | £600K | £900K | £1,200K |
| Marketplace / Partner Rev-Share | £0 | £50K | £300K | £900K | £2,100K |
| AI Tier (post-M4) | £0 | £0 | £120K | £480K | £1,200K |
| Total Revenue | £356K | £2,474K | £7,140K | £15,720K | £29,520K |
| YoY Growth | — | 595% | 189% | 120% | 88% |

## **7.2 Customer Count Projections (Base Case)**

| Tier | End Y1 | End Y2 | End Y3 | End Y4 | End Y5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Starter | 60 | 320 | 800 | 1,600 | 2,800 |
| Business | 36 | 195 | 450 | 900 | 1,575 |
| Growth | 24 | 120 | 300 | 600 | 1,050 |
| Enterprise | 0 | 20 | 80 | 200 | 400 |
| Total Paying Orgs | 120 | 655 | 1,630 | 3,300 | 5,825 |
| Blended MRR | £29.7K | £206K | £595K | £1,310K | £2,460K |
| ARR | £356K | £2,474K | £7,140K | £15,720K | £29,520K |

## **7.3 Key SaaS Metrics (Base Case)**

| Metric | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| ARR | £356K | £2,474K | £7,140K | £15,720K | £29,520K |
| Net Revenue Retention (NRR) | 102% | 110% | 115% | 118% | 120% |
| Gross Margin | 60% | 72% | 78% | 82% | 85% |
| Customer Churn (annual) | 10% | 8% | 6% | 5% | 5% |
| CAC (blended) | £3,200 | £2,800 | £2,400 | £2,200 | £2,000 |
| CAC Payback (months) | 13 | 9 | 7 | 6 | 5 |
| Blended ACV | £2,967 | £3,777 | £4,380 | £4,764 | £5,068 |
| Rule of 40 Score | — | — | 52 | 61 | 71 |

## **7.4 Cost Structure & Headcount**

| Cost Category | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Headcount (FTE) | 12 | 28 | 52 | 80 | 115 |
| Staff Costs (£) | £1,020K | £2,520K | £4,680K | £7,200K | £10,350K |
| Infrastructure & Hosting | £71K | £247K | £571K | £1,101K | £1,771K |
| Sales & Marketing | £120K | £742K | £1,428K | £2,358K | £3,542K |
| G\&A (legal, finance, office, insurance) | £180K | £320K | £520K | £720K | £960K |
| R\&D (external contractors, tooling) | £80K | £160K | £280K | £400K | £520K |
| Total Operating Costs | £1,471K | £3,989K | £7,479K | £11,779K | £17,143K |

## **7.5 EBITDA & Burn**

| P\&L Line | Year 1 | Year 2 | Year 3 | Year 4 | Year 5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Total Revenue | £356K | £2,474K | £7,140K | £15,720K | £29,520K |
| Cost of Revenue | £143K | £693K | £1,571K | £2,830K | £4,428K |
| Gross Profit | £213K | £1,781K | £5,569K | £12,890K | £25,092K |
| Gross Margin | 60% | 72% | 78% | 82% | 85% |
| Operating Expenses | £1,328K | £3,296K | £5,908K | £8,949K | £12,715K |
| EBITDA | (£1,115K) | (£1,515K) | (£339K) | £3,941K | £12,377K |
| EBITDA Margin | (313%) | (61%) | (5%) | 25% | 42% |
| Cumulative Cash Burn (from Seed) | (£1,115K) | (£2,630K) | (£2,969K) | — | — |

## **7.6 Funding Requirements & Use of Funds**

| Round | Amount | Timing | Primary Use of Funds |
| :---- | :---- | :---- | :---- |
| Seed | $2.5M (£1.95M) | Q2 2026 | 12-person core team for 18 months; 20 jurisdiction policy packs; design customer programme; infrastructure setup; legal and IP protection |
| Series A | $12M (£9.4M) | Q4 2026 | Sales & marketing build-out (VP Sales \+ 2 AEs \+ Marketing Lead); 45+ jurisdiction packs; enterprise feature set (SSO, Kubernetes, RBAC depth); Java client GA; customer success team |
| Series B | $40M (£31.3M) | Q3 2027 | International expansion (US, EU, APAC go-to-market); marketplace ecosystem build; AI feature investment (M4); enterprise sales motion; 80 FTE by end of Series B runway |

| Use of Seed Funds ($2.5M) | Allocation | Amount |
| :---- | :---- | :---- |
| Engineering (salaries, contractors — 18 months) | 52% | $1.30M |
| Jurisdiction policy pack build (20 jurisdictions) | 14% | $0.35M |
| Infrastructure and tooling | 8% | $0.20M |
| Sales & marketing (design customer programme, events) | 10% | $0.25M |
| Legal, IP, and company setup | 8% | $0.20M |
| Working capital buffer (6-month runway extension) | 8% | $0.20M |

## **7.7 Three-Scenario Summary (Year 3\)**

| Metric | Bear Case | Base Case | Bull Case |
| :---- | :---- | :---- | :---- |
| Assumption | 50% of plan customer acquisition; higher churn (10%) | Plan acquisition; 6% churn | 150% of plan; lower churn (4%) |
| Paying Organisations (Y3) | 815 | 1,630 | 2,445 |
| ARR (Y3) | £3,570K | £7,140K | £10,710K |
| Gross Margin (Y3) | 74% | 78% | 80% |
| EBITDA (Y3) | (£2,100K) | (£339K) | £2,280K |
| Series B Raise Needed? | Yes — extended Series A or bridge | No — breakeven near; Series B optional | No — EBITDA positive; Series B opportunistic |

# **8\. Risk Analysis & Mitigation**

## **8.1 Risk Register**

| Risk | Category | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- | :---- |
| Existing tools entrench and organisations resist consolidation | Market | Medium | High | Product-led growth bypasses organisational inertia; free embedded tier creates bottom-up adoption; accountant channel provides trusted recommendation |
| Rust talent is scarce and expensive; recruitment takes longer than planned | Operational | High | High | Remote-first hiring globally; competitive equity packages; Rust community partnerships; CTO is a known Rust contributor (credibility in community) |
| Jurisdiction policy pack accuracy failure causes a customer compliance miss | Product / Legal | Low | Critical | Per-pack legal review process; version control; customer liability limited by ToS; insurance; pack source attribution to counsel |
| A well-funded competitor launches a comparable product (e.g., Rippling expands to compliance) | Competitive | Medium | High | Moat is 45+ jurisdiction packs \+ kernel architecture \+ installed base; competitor replication requires 3–5 years; accelerate network effects |
| Enterprise sales cycle longer than forecast; ARR ramp delayed | Financial | Medium | Medium | Revenue mix weighted toward PLG and mid-market; enterprise is upside, not plan dependency; milestone 1 revenue is self-funded from SME tiers |
| Open source fork of the kernel creates free competitor | Technical / IP | Low | Medium | Core is proprietary; SDK is Apache 2.0 (SDK only, not kernel); jurisdiction packs are proprietary data; brand and install base are durable advantages |
| Regulatory change in key jurisdiction invalidates a policy pack (e.g., Companies Act amendment) | Operational | High | Medium | Pack versioning; regulatory monitoring service; 30-day update SLA; customer notification system built into Chombo |
| Data breach exposes customer financial or HR data | Security | Low | Critical | AES-256 encryption at rest; TLS 1.3 in transit; annual pentest; SOC 2 Type II programme from M2; bug bounty programme; cyber insurance |
| Key founder departure destabilises team or investor confidence | Execution | Low | High | 4-year vesting with 1-year cliff for all founders; documented architecture and institutional knowledge; advisory board continuity |
| Banking / open banking API instability breaks Finance reconciliation | Technical | Medium | Low | Manual bank statement import is always available; open banking is an enhancement, not a dependency for core functionality |

## **8.2 Regulatory & Legal Risks**

| Regulatory Area | Risk | Mitigation |
| :---- | :---- | :---- |
| GDPR / UK GDPR | Processing customer personal data (employee records, HR data) creates GDPR obligations for UME as a data processor | DPA published; SCCs for international transfers; DPA-compliant contract with all customers; RoPA maintained; DPO appointed at Series A |
| Financial services regulation | Finance module handles payment instructions and payroll; may be scrutinised under e-money or payment services regulation in some jurisdictions | Legal opinion obtained per jurisdiction; UME is an accounting tool, not a payment service provider; no funds held; FCA/SEC guidance monitored |
| Professional liability | Compliance calendar derived from jurisdiction packs; if a pack is wrong and a customer misses a filing, UME may face liability claims | ToS limits liability; professional indemnity insurance; pack accuracy disclaimer; counsel sign-off on each pack |
| Employment law | HR module handles employment data, payroll calculations, and leave management; errors could expose customers to employment law claims | HR module is a tool, not an HR advisor; payroll calculations are customer-configured; ToS clarifies that UME does not provide legal or HR advice |
| AI regulation (future) | M4 AI features (deal scoring, anomaly detection) may be subject to emerging AI regulation (EU AI Act, UK AI framework) | AI features are advisory, not autonomous; confidence scores surfaced to user; human-in-the-loop design; regulatory monitoring from M3 development |

# **9\. The Investment Ask**

| Seed Round — $2.5M We are raising $2.5M to build and launch UME Milestone 1, prove product-market fit with 100+ paying organisations, and achieve the metrics required to close a $12M Series A. |
| :---: |

## **9.1 What We Are Building With This Capital**

| Objective | Measure | Timeline |
| :---- | :---- | :---- |
| Complete the UME platform core | All P0 features shipped; kernel \+ 8 core modules at GA quality | Month 12 (Q3 2026\) |
| Launch 20 jurisdiction policy packs | UK, US (federal), EU Big 5, AU, CA, IE, SG, HK, and 9 others; legal reviewed | Month 10 |
| Sign 20 design customers | Organisations with ≥2 entities, ≥2 jurisdictions, active use of 3+ modules | Month 8 |
| Reach 100 paying organisations | $30K MRR; positive NPS from ≥40% of customers | Month 14 |
| Achieve £35K MRR | Demonstrates customer willingness to pay and revenue growth trajectory | Month 18 |
| Build a team of 12 | 5 additional engineers, 1 designer, 1 QA, 1 CS, 1 regulatory content lead, 1 sales hire | Month 10 |
| Close Series A at $12M | ARR of £500K+; NRR 110%+; 200+ paying organisations; clear enterprise pipeline | Month 18 (Q4 2026\) |

## **9.2 Ideal Investor Profile**

We are looking for investors who bring more than capital:

* Deep SaaS and B2B software investing experience — we want investors who understand ARR growth, GTM motion, and enterprise sales cycles

* Network in the SME / growth company ecosystem — customers, advisors, channel partners, and enterprise sponsors

* Experience with platform / ecosystem businesses — we are building a platform, not a point solution; investors who have backed marketplace and ecosystem plays are ideal

* Patience for a 3–5 year enterprise value build — our moat strengthens with time; we are not looking for investors who expect a 12-month flip

* Comfort with technical depth — UME's differentiation is architectural; investors who can appreciate the Rust / kernel design as a durable competitive advantage will be better partners

## **9.3 Proposed Terms & Structure**

| Term | Seed | Series A (Projected) |
| :---- | :---- | :---- |
| Raise amount | $2.5M | $12M |
| Instrument | SAFE with MFN and Pro-Rata | Priced equity round (Series A Preferred) |
| Valuation cap / pre-money | $10M cap | $45–55M pre-money (dependent on metrics) |
| Discount (SAFE) | 20% | — |
| Lead investor | Seeking | Seeking; existing Seed investors have pro-rata rights |
| Board composition (post-Seed) | 3 seats: 2 Founders \+ 1 Seed lead observer | 5 seats: 2 Founders \+ 2 Series A investors \+ 1 Independent |
| Option pool | 15% (post-money, Seed) | Refresh to 12% post-Series A |
| Founder vesting | 4-year / 1-year cliff; 25% acceleration on change of control | Unchanged |

## **9.4 Why Now**

Three conditions are aligned that make 2026 the right time to build UME:

1. Rust has matured. Three years ago, building a production financial platform in Rust was heroic. Today, the ecosystem — Tokio, Axum, SQLx, serde — is production-grade and battle-tested. The team has the skills, the language has the libraries, and the hiring market for Rust is no longer impossibly tight.

2. Regulatory complexity is increasing, not decreasing. CSRD, DORA, SFDR, Making Tax Digital, and a dozen other new compliance frameworks are creating demand for exactly what Chombo provides. The regulatory tailwind that makes jurisdiction policy packs valuable will not reverse.

3. The SME market is ready. A generation of founders who built their companies on Notion and Figma have expectations for software quality that QuickBooks and BambooHR cannot meet. The moment is right for a new category: the Organisation Operating System.

| Contact   To request the data room, arrange a meeting with the founding team, or submit a term sheet:     invest@ume.io     This document is confidential. Please do not forward without the express written permission of UME Technologies Ltd. |
| :---- |

# **Appendix A: 5-Year Financial Model (Detailed)**

## **A.1 Monthly MRR Build (Year 1 — Base Case)**

| Month | New Orgs | Churn | Net Orgs | MRR (£) | ARR Run-Rate (£) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Month 1 | 5 | 0 | 5 | £980 | £11,760 |
| Month 2 | 8 | 0 | 13 | £2,548 | £30,576 |
| Month 3 | 10 | 1 | 22 | £4,312 | £51,744 |
| Month 4 | 10 | 1 | 31 | £6,076 | £72,912 |
| Month 5 | 12 | 2 | 41 | £8,036 | £96,432 |
| Month 6 | 14 | 2 | 53 | £10,388 | £124,656 |
| Month 7 (GA Launch) | 20 | 3 | 70 | £13,720 | £164,640 |
| Month 8 | 22 | 3 | 89 | £17,444 | £209,328 |
| Month 9 | 20 | 4 | 105 | £20,580 | £246,960 |
| Month 10 | 18 | 4 | 119 | £23,324 | £279,888 |
| Month 11 | 16 | 5 | 130 | £25,480 | £305,760 |
| Month 12 | 15 | 5 | 140 | £27,440 | £329,280 |

## **A.2 Headcount Plan by Function**

| Function | End Y1 | End Y2 | End Y3 | End Y4 | End Y5 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Engineering (Rust/Backend) | 7 | 14 | 22 | 30 | 40 |
| Engineering (Platform/Integrations/QA) | 2 | 5 | 8 | 12 | 16 |
| Product & Design | 1 | 3 | 5 | 7 | 10 |
| Regulatory Content & Legal | 1 | 4 | 7 | 10 | 13 |
| Sales (AEs \+ SDRs) | 0 | 4 | 8 | 14 | 20 |
| Customer Success | 1 | 3 | 6 | 10 | 15 |
| Marketing | 0 | 2 | 4 | 6 | 8 |
| G\&A (Finance, Legal, HR, Ops) | 1 | 3 | 5 | 8 | 12 |
| Founders (included in Engineering/Product) | 5 | 5 | 5 | 5 | 5 |
| Total FTE | 12 | 28 | 52 | 80 | 115 |

## **A.3 Infrastructure Cost Model**

| Component | Y1 (120 orgs) | Y2 (655 orgs) | Y3 (1,630 orgs) | Y5 (5,825 orgs) |
| :---- | :---- | :---- | :---- | :---- |
| Compute (cloud VMs / Kubernetes nodes) | £24K | £84K | £192K | £600K |
| Database (managed PostgreSQL) | £12K | £54K | £126K | £360K |
| CDN / bandwidth | £6K | £24K | £60K | £180K |
| Monitoring (Datadog / equivalent) | £12K | £36K | £72K | £180K |
| Backup storage (S3 / equivalent) | £8K | £24K | £54K | £150K |
| Security tooling (Snyk, HackerOne, pentest) | £9K | £25K | £67K | £180K |
| Total Infrastructure | £71K | £247K | £571K | £1,650K |

# **Appendix B: Product Architecture Summary**

For technical investors and due diligence, the following summarises the key architectural decisions and their business rationale.

| Architecture Decision | Technical Detail | Business Rationale |
| :---- | :---- | :---- |
| Rust as primary language | Rust 1.75+; Tokio async runtime; Axum HTTP; SQLx for database access; serde for serialisation | Type safety eliminates entire classes of financial and data bugs at compile time. No runtime exceptions. 10× lower infrastructure cost per unit of throughput vs. JVM/Node platforms at scale. |
| Single-process kernel | All 42 modules in one OS process per deployment node; in-process channels for event delivery; shared memory for hot cache | Sub-100ms P50 API response for cross-domain operations. No network hop between, e.g., HR and Finance. Horizontal scaling via multiple nodes behind load balancer. |
| Cryptographic audit chain | SHA-256 hash-chained audit records; each record includes hash of predecessor; offline verification tool included | Tamper evidence without blockchain infrastructure. Every record is verifiable against the chain. Regulatory-grade audit from day one. No additional audit database required. |
| Kernel facade pattern | Modules access all external resources (storage, comms, auth) via the kernel facade interface; never directly | Modules cannot accidentally bypass RBAC or audit. Replacing a storage backend (SQLite → PostgreSQL) is a kernel change; zero module code changes. All cross-domain communication is observable. |
| Jurisdiction policy packs as data | Compliance rules stored as versioned JSONB in the database; evaluated at runtime by the Chombo policy engine | Regulatory changes ship as data updates, not code releases. New jurisdiction \= new pack file; no platform rebuild. Packs can be updated independently of the platform release cycle. |
| Embedded mode (SQLite) | Single binary with no external dependencies; SQLite for persistence; InMemory event bus; all features available | A 1-person business on a MacBook Pro has the identical feature set as a 500-person company on Kubernetes. Zero infrastructure cost for solo users. Network effect: same platform, every scale. |

# **Appendix C: Jurisdiction Policy Pack Coverage**

| Region | Jurisdictions at M1 Launch | Additional Jurisdictions at M2 | Planned M3 Expansion |
| :---- | :---- | :---- | :---- |
| United Kingdom | England & Wales, Scotland, Northern Ireland | — | — |
| United States | Federal (C-Corp, LLC, LLP, Non-Profit) | Delaware, California, New York, Texas | All 50 states (federal structures; state specifics for top 15 states by business formation) |
| European Union | Germany, France, Netherlands, Ireland, Luxembourg | Spain, Italy, Belgium, Austria, Sweden | Full EU27 coverage |
| Commonwealth | Australia, Canada (federal), New Zealand | Canada (provinces: ON, BC, AB) | South Africa, India (federal) |
| Asia Pacific | Singapore, Hong Kong | — | Japan, UAE (DIFC), Malaysia |
| Africa | Kenya, Nigeria (federal) | South Africa | Ghana, Rwanda, Tanzania |
| International Structures | Cayman Islands (fund structures), BVI, Jersey (trust/fund) | Isle of Man, Guernsey | Mauritius, ADGM (Abu Dhabi) |

# **Appendix D: Design Customer Criteria & Programme Details**

| Element | Specification |
| :---- | :---- |
| Target organisation profile | Revenue: £500K–£20M; employees: 5–200; entities: 2+; jurisdictions: 2+; currently using ≥3 separate business tools; experienced at least 1 compliance issue in past 3 years |
| Recruitment channels | Founder networks (YC alumni, Indie Hackers, Techstars UK); accountant/solicitor referrals; direct outreach to startups with recent multi-entity formation activity |
| Programme commitments (UME) | Free access to Growth tier for 24 months from GA; weekly session with CPO or CTO; bug fixes within 48 hours; feature requests in the next sprint; co-authorship of public case study |
| Programme commitments (customer) | Weekly 60-minute session; access to usage logs (anonymised); reference customer at launch; investor reference (if asked); NPS feedback monthly |
| Cohort size | 20 organisations; recruitment begins Month 4; all 20 signed by Month 8 |
| Expected conversion to paid (Year 2\) | 18 of 20 converting to paid at discounted rate; 2 expected churn; total ARR contribution from design cohort: £144K by end of Year 2 |

