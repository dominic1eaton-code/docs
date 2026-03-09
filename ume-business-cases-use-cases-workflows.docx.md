**UME**

Organisation / Business Operating System

**Business Cases, Use Cases & User Workflows**

─────────────────────────────────────────

Document ID: UME-BUW-001  ·  Version: 1.0.0  ·  March 2026

UME Product & Design  ·  Internal

16 Business Cases  ·  48 Use Cases  ·  32 User Workflows

Solo Entrepreneur → SMB → Enterprise → Franchise DAO

# **Document Overview**

This document defines the business cases, use cases, and user workflows for the UME Organisation Operating System (OrgOS) platform. It covers every major platform module and persona, from a solo entrepreneur bootstrapping their first business to an enterprise operator managing a franchise DAO of 50 organisations.

## **Structure**

| Part | Content | Sections |
| :---- | :---- | :---- |
| Part I — Business Cases | Why each type of organisation and persona uses UME. ROI rationale, problem statements, and value delivered for 16 distinct business scenarios across 6 org archetypes. | BC-01 through BC-16 |
| Part II — Use Cases | Functional use cases: actor, goal, preconditions, main flow, alternate flows, exceptions, and post-conditions. 48 use cases covering all major OrgApp capabilities. | UC-01 through UC-48 |
| Part III — User Workflows | End-to-end workflow specifications: trigger, actors, steps, decision points, system automations, cross-module events, and success criteria. 32 workflows covering complete business processes. | WF-01 through WF-32 |

## **Org Archetypes Covered**

| Archetype | Example | Modules Active | Org Scale |
| :---- | :---- | :---- | :---- |
| Solo Entrepreneur | Freelance consultant, independent contractor | Finance, Legal, CRM, Work | 1 person |
| Small Service Business | Dry cleaning shop, hair salon, accountancy practice | Finance, HR, Legal, CRM, Ops, Marketing | 2–20 people |
| Growth SMB | Multi-location service chain, growing tech startup | Full module suite \+ AI Agents | 20–200 people |
| Enterprise / Multi-Entity | Group of companies, holding structure, corporate HQ | Enterprise tier \+ Multi-entity \+ DAO | 200+ people |
| Franchise Network | Franchise brand \+ independent franchisee operators | DAO \+ DLT \+ OrgDNA broadcast | N independent orgs |
| Investment Fund / DAO | Investment vehicle \+ portfolio companies | DAO \+ DLT \+ Investment module | N portfolio orgs |

# **Part I: Business Cases**

Business cases establish the organisational rationale for using the UME platform. Each business case describes a specific type of organisation, the problems they face without UME, the value UME delivers, and the measurable outcomes expected. Business cases are the foundation for all use cases and workflows that follow.

| 16 Business Cases across 6 Org Archetypes |
| :---- |

| BC ID | Title | Archetype | Primary Driver |
| :---- | :---- | :---- | :---- |
| BC-01 | Solo Entrepreneur: First Business Formation | Solo | Compliance & legal setup |
| BC-02 | Freelancer: Integrated Client & Finance Management | Solo | Invoice-to-cash & CRM |
| BC-03 | Small Dry Cleaning Business: Full Operational OS | SMB | Operations \+ HR \+ CRM \+ Finance |
| BC-04 | SMB: Replacing a Fragmented Tool Stack | SMB | Consolidation & cost reduction |
| BC-05 | Professional Services Firm: Client Delivery & Compliance | SMB | CRM \+ legal \+ HR |
| BC-06 | Retail Business: Multi-Channel Sales & Inventory | SMB | Sales \+ inventory \+ operations |
| BC-07 | Growth Company: AI-Augmented Organisation | Growth SMB | AI OrgExecs \+ automation |
| BC-08 | Multi-Location Business: Single OS Across Sites | Growth SMB | Multi-entity \+ consolidation |
| BC-09 | Corporate Group: Consolidated Multi-Entity Management | Enterprise | Multi-entity finance \+ GRC |
| BC-10 | Enterprise: OrgExec Governance & AI Agent Deployment | Enterprise | ODD \+ AI agent governance |
| BC-11 | Nonprofit: Grant, Compliance & Stakeholder Management | Enterprise | Restricted funds \+ GRC |
| BC-12 | Franchise Network: DAO Formation & Brand Governance | Franchise | DAO \+ OrgDNA \+ smart contracts |
| BC-13 | Franchise Operator: Running Under a DAO | Franchise | OrgOS \+ DAO membership |
| BC-14 | Investment Fund: Portfolio Company OS Management | Investment DAO | DAO \+ DLT \+ investment module |
| BC-15 | Supply Chain DAO: Buyer-Supplier Network Coordination | DAO | Inter-org contracts \+ DLT |
| BC-16 | Enterprise Spinout: OrgDNA Cloning & Launch | Enterprise | OrgDNA clone \+ rapid launch |

## **BC-01 — Solo Entrepreneur: First Business Formation**

**BC-01  First Business Formation**

| Primary Persona | New Entrepreneur / Founder |
| :---- | :---- |
| **Org Type** | Solo — any industry |
| **Core Problem** | A first-time entrepreneur has a business idea but no framework for making it legally real, financially visible, or operationally manageable. They face compliance requirements they do not understand, tools they cannot afford, and processes they have to invent from scratch. |
| **Value Delivered** | UME provides a single guided wizard that walks the entrepreneur from idea to operating business: entity formation, chart of accounts, compliance calendar, initial contracts, and basic CRM — all in one session, with no prior business knowledge required. |

**Problem Statements**

1\. Entity registration and jurisdiction compliance requirements are opaque and intimidating for first-timers.

2\. Accounting setup (chart of accounts, period management, tax categories) requires specialist knowledge.

3\. Missing a filing deadline in the first year can result in penalties that destroy early-stage cash flow.

4\. No affordable, integrated way to track both finances and clients in one place.

**Value Delivered**

| \< 60 min | Time from account creation to fully configured, legally-aware OrgOS |
| :---: | :---- |

| 0 missed filings | Compliance calendar auto-generated from entity type \+ jurisdiction; reminders 14 days before each deadline |
| :---: | :---- |

| $0 accountant fees | COA auto-generated from business type; standard bookkeeping requires no specialist in Year 1 |
| :---: | :---- |

**Success Criteria**

Entity details entered; jurisdiction detected; compliance calendar populated; COA created; first invoice sent — all within one session.

**Modules Activated**

| Module | Used For |
| :---- | :---- |
| Legal & Compliance (Chombo) | Entity registration, jurisdiction detection, compliance calendar generation |
| Finance & Accounting | Chart of accounts, invoicing, basic bookkeeping |
| CRM / Sales | Customer list, first quote/invoice creation |
| Dashboard | Daily overview of cash, open invoices, and upcoming filings |

## **BC-02 — Freelancer: Integrated Client & Finance Management**

**BC-02  Freelancer Operations**

| Primary Persona | Freelancer / Independent Contractor |
| :---- | :---- |
| **Org Type** | Solo — professional services |
| **Core Problem** | A freelancer manages clients across email, spreadsheets, and separate invoicing tools. Time tracking is manual, invoices are created ad-hoc, expense tracking is after-the-fact, and tax prep requires reconstructing a year of scattered records. |
| **Value Delivered** | UME integrates CRM (client and project pipeline), finance (invoicing, expenses, VAT/tax tracking), and work management (task and time tracking) into one OS. Tax year-end is a report run, not a reconstruction project. |

**Key Metrics**

| 4.2 hrs/wk | Average admin time saved vs. fragmented tool stack (industry benchmark) |
| :---: | :---- |

| 100% | Invoice-to-payment tracked in one system — no chasing records across tools |
| :---: | :---- |

**Modules Activated**

| Module | Used For |
| :---- | :---- |
| CRM / Sales | Client pipeline, project tracking, quotes, invoices |
| Finance & Accounting | Expense recording, payment tracking, VAT/tax categories, reports |
| Work Management | Task lists, time tracking, deliverable tracking per client |
| Legal & Compliance | Contractor agreements, NDA storage, annual filing reminders |

## **BC-03 — Small Dry Cleaning Business: Full Operational OS**

**BC-03  Dry Cleaning Business — Full OS**

| Primary Persona | Business Owner (Bob & Alice) |
| :---- | :---- |
| **Org Type** | SMB — Dry Cleaning / Local Service |
| **Core Problem** | Bob and Alice run a dry cleaning business using a mix of paper order tickets, a basic POS, a spreadsheet for payroll, and their accountant's software for taxes. Nothing talks to anything else. They have no real-time view of their business health, miss compliance deadlines, and spend 6+ hours per week on admin. |
| **Value Delivered** | UME provides a single OrgOS that runs every aspect of the business: order management (CRM kanban), payroll-linked HR, automated compliance calendar, finance with real-time P\&L, equipment monitoring as OrgCPUs, and an AI scheduling agent as an OrgExec — all connected and consistent. |

**Before vs. After**

| Domain | Before UME | After UME |
| :---- | :---- | :---- |
| Order Management | Paper tickets, verbal status updates, no customer notification | Digital order kanban: Received→Cleaning→Ready→Collected; auto SMS on status change |
| Finance | Monthly spreadsheet sent to accountant; no real-time view | Live P\&L, auto-categorised transactions, one-click payroll journal entries |
| HR & Payroll | Paper timesheets, manual payroll calculation | Digital timesheets, automated payroll calculation, payslips generated automatically |
| Compliance | Accountant reminds them; sometimes miss deadlines | Chombo filing calendar: all state/federal obligations auto-populated; 14-day alerts |
| Equipment | Notice problems when machines break | OrgCPU IoT status: machine health, maintenance schedules, alerts before failure |
| Scheduling | Bob decides daily by gut; staff call to check shifts | AI Scheduling OrgExec: optimises assignments based on order queue and staff availability |

**Quantified Value**

| 6 hrs/wk | Admin time saved — freed for serving customers |
| :---: | :---- |

| $2,400/yr | Estimated accountant fee reduction from self-managed books |
| :---: | :---- |

| 0 penalty filings | Compliance calendar prevents missed state and federal deadlines |
| :---: | :---- |

## **BC-04 — SMB: Replacing a Fragmented Tool Stack**

**BC-04  Tool Stack Consolidation**

| Primary Persona | Business Owner / Operations Manager |
| :---- | :---- |
| **Org Type** | SMB — any industry |
| **Core Problem** | A typical SMB uses 8–12 SaaS tools: accounting (Xero/QuickBooks), HR (BambooHR), CRM (HubSpot/Salesforce), project management (Monday/Asana), payroll (Gusto), e-sign (DocuSign), storage (Google Drive), and more. Each tool has its own login, pricing, and data model. Data is duplicated, integrations break, and staff waste hours switching contexts. |
| **Value Delivered** | UME replaces the entire fragmented stack with one OrgOS where all data lives in one system and modules share a consistent data model. The event bus automatically propagates changes (a new hire in HR triggers IT provisioning, payroll setup, and legal document creation). |

**Tool Stack Replacement Map**

| Tool Being Replaced | UME OrgApp Equivalent | Integration Preserved |
| :---- | :---- | :---- |
| Xero / QuickBooks | Finance & Accounting OrgApp | Import historical COA; Stripe payment sync |
| BambooHR / HiBob | HR & People OrgApp | Import employee records; payroll integration |
| HubSpot CRM | Sales & CRM OrgApp | Import contact \+ deal history |
| Monday / Asana | Work Management OrgApp | Import open tasks and projects |
| Gusto / ADP Payroll | HR Payroll sub-module | Payroll run stays inside OrgOS |
| DocuSign | Legal & Compliance vault \+ e-sign integration | Existing signed docs archived in vault |
| Google Drive (partial) | Document vault across all OrgApps | Drive remains for unstructured files; org docs in vault |
| Slack (partial) | Organisation Communications OrgApp | Slack integration for notifications remains |

| $1,800–$4,200/yr | Estimated SaaS cost savings from tool consolidation (8-tool stack → 1\) |
| :---: | :---- |

## **BC-05 — Professional Services Firm: Client Delivery & Compliance**

**BC-05  Professional Services Firm**

| Primary Persona | Managing Partner / Practice Manager |
| :---- | :---- |
| **Org Type** | SMB — Law, Accounting, Consulting, Architecture |
| **Core Problem** | Professional services firms must simultaneously manage client engagements (delivery, billing, contracts), regulatory compliance (professional licences, data protection, client confidentiality), staff resourcing and utilisation, and financial performance — typically across 3–5 disconnected systems. |
| **Value Delivered** | UME provides a unified OS where client engagements, time recording, invoicing, HR utilisation, compliance obligations, and partner financials all live in one place and drive each other automatically. |

**Core Value Drivers**

| Real-time utilisation | HR module \+ Work module provide live staff utilisation: billable vs. non-billable hours by person, team, and project |
| :---: | :---- |

| Engagement profitability | Finance \+ CRM integration: P\&L per client engagement calculated automatically from time records and invoice data |
| :---: | :---- |

| Compliance confidence | Chombo tracks professional licence renewals, CPD requirements, PI insurance, and data protection obligations |
| :---: | :---- |

## **BC-06 — Retail Business: Multi-Channel Sales & Inventory**

**BC-06  Retail Business Operations**

| Primary Persona | Retail Owner / Operations Manager |
| :---- | :---- |
| **Org Type** | SMB — Retail, E-commerce |
| **Core Problem** | A retail business managing both a physical store and online channel faces perpetual inventory reconciliation problems, disconnected sales reporting, manual fulfilment tracking, and supplier order management done via email and spreadsheets. |
| **Value Delivered** | UME's Operations/ERP and Sales modules provide a unified inventory pool shared across all channels, automated reorder points triggering purchase orders, and real-time sales dashboards showing margin by SKU and channel. |

**Key Capabilities**

| Capability | Description |
| :---- | :---- |
| Unified Inventory | Single inventory pool visible across all sales channels; adjustments from any channel update the shared pool |
| Automated Reorder | Low-stock alerts generate purchase order drafts automatically; vendor lead times calculated into reorder point |
| OrgCPU Integration | POS terminal registered as OrgCPU; sales events flow directly into inventory and finance modules |
| Supplier Management | Vendor records with preferred terms; PO generation; goods receipt matching; accounts payable tracking |

## **BC-07 — Growth Company: AI-Augmented Organisation**

**BC-07  AI-Augmented OrgOS**

| Primary Persona | CEO / COO / Operations Lead |
| :---- | :---- |
| **Org Type** | Growth SMB — tech, services, logistics |
| **Core Problem** | A fast-growing company cannot hire fast enough to keep pace with operational demand. Scheduling, customer communications, demand forecasting, and compliance monitoring all require human attention that the team does not have bandwidth for. |
| **Value Delivered** | UME's OrgExec model allows AI agents to be deployed as first-class OrgExecs with formally defined ODD contracts. AI agents handle scheduling, customer comms, and compliance monitoring autonomously — escalating to humans only when their ODD constraints require it. |

**AI OrgExec Deployment Examples**

| AI OrgExec | ODD Capabilities | ODD Constraints | Value |
| :---- | :---- | :---- | :---- |
| Scheduling Agent | Read order queue, staff availability; Write schedule assignments; Notify staff of shifts | Max 200 executions/hr; no changes affecting \>3 staff without human approval | Eliminates manual scheduling; optimises order throughput |
| Customer Comms Agent | Read order status; Send SMS/email notifications; Update CRM contact notes | Pre-approved message templates only; no pricing changes; escalate complaints | Reduces customer service workload by 60-80% for status updates |
| Compliance Monitor | Read all OrgApp data; Write risk alerts; Escalate overdue filings | Read-only on all modules; cannot modify records; alert-only | 24/7 compliance monitoring without dedicated compliance staff |
| Demand Forecaster | Read sales history, inventory; Write reorder suggestions | Suggestions only — no autonomous purchasing; human approval required | Reduces stockouts and overstock; improves cash conversion cycle |

## **BC-08 — Multi-Location Business: Single OS Across Sites**

**BC-08  Multi-Location Operations**

| Primary Persona | Group Owner / Regional Manager |
| :---- | :---- |
| **Org Type** | Growth SMB — retail, food & bev, services |
| **Core Problem** | A business with 3–10 locations operates each site as a separate entity with separate tools, giving management no consolidated view of group performance. Cross-site comparisons require manual data extraction and reconciliation. |
| **Value Delivered** | UME's multi-entity model allows each location to be a legal entity within a single OrgOS, sharing the same module configuration. Consolidated financials, headcount, and KPIs are available instantly across all entities. |

**Multi-Entity Value**

| Instant consolidation | Group P\&L and balance sheet computed in real-time across all entities — no month-end spreadsheet reconciliation |
| :---: | :---- |

| Standardised operations | All locations run the same OrgApps with the same processes — OrgDNA ensures consistency |
| :---: | :---- |

| Location benchmarking | Side-by-side KPI comparison across locations drives performance conversations with data |
| :---: | :---- |

## **BC-09 — Corporate Group: Consolidated Multi-Entity Management**

**BC-09  Corporate Group Management**

| Primary Persona | CFO / Group Finance Director / Board |
| :---- | :---- |
| **Org Type** | Enterprise — holding structure, group of companies |
| **Core Problem** | A corporate group managing 5–20 legal entities faces consolidated financial reporting that takes weeks, separate compliance obligations per entity, intercompany transaction complexity, and no single system of record for the group. |
| **Value Delivered** | UME provides each entity with its own OrgOS instance within a group DAO, with real-time consolidated financial reporting, intercompany reconciliation, and a group-level risk and compliance dashboard. |

**Enterprise Value**

| Function | Without UME | With UME |
| :---- | :---- | :---- |
| Consolidated financials | 4–6 weeks of manual spreadsheet work per month-end | Real-time consolidated P\&L and balance sheet; intercompany eliminations automated |
| Compliance management | Each entity's compliance managed independently; gaps inevitable | Group compliance calendar: all entities' obligations in one view; central oversight |
| Intercompany transactions | Manual journals; reconciliation errors; audit risk | Intercompany transactions recorded in both entity OrgOS instances simultaneously via DAO event bus |
| Group risk view | No unified risk picture; separate risk registers if any | Group risk dashboard aggregates KRIs from all entity OrgOS instances |

## **BC-10 — Enterprise: OrgExec Governance & AI Agent Deployment**

**BC-10  Enterprise OrgExec Governance**

| Primary Persona | CIO / CISO / COO |
| :---- | :---- |
| **Org Type** | Enterprise — any regulated industry |
| **Core Problem** | A large enterprise deploying AI across operations has no standardised framework for governing AI agent behaviour. Each AI deployment has its own ad-hoc controls. Audit trails for AI actions are incomplete. The board cannot attest to AI governance. |
| **Value Delivered** | UME's ODD (OrgDeviceDriver) protocol provides a standardised, auditable governance framework for every AI agent deployed as an OrgExec. Every AI action is logged, every constraint is formally defined, every escalation is recorded — the same framework used for human employees. |

**Governance Value**

| 100% AI actions audited | Every OrgExec action — human or AI — produces an immutable audit record with the same structure and retention |
| :---: | :---- |

| Board-attestable AI governance | ODD contracts are formal, versioned documents that can be reviewed and approved by audit committee |
| :---: | :---- |

| Zero AI privilege escalation | ODD capability model: AI agents can only do what their ODD explicitly permits; no implicit access |
| :---: | :---- |

## **BC-11 — Nonprofit: Grant, Compliance & Stakeholder Management**

**BC-11  Nonprofit Operations**

| Primary Persona | Executive Director / Finance Manager |
| :---- | :---- |
| **Org Type** | Nonprofit, NGO, charity |
| **Core Problem** | A nonprofit must manage restricted funds (each grant has specific spending rules), demonstrate compliance to funders, report to trustees, manage volunteers, and handle regulatory obligations — all with limited staff and minimal technology budget. |
| **Value Delivered** | UME's Finance module supports restricted fund accounting with separate tracking per grant. The GRC module manages compliance obligations. The HR module tracks volunteers as OrgExecs with appropriate ODDs. The Portal module surfaces reporting dashboards for trustees. |

**Nonprofit-Specific Capabilities**

| Capability | Description |
| :---- | :---- |
| Restricted Fund Accounting | Each grant is a separate fund; expenditure tagged to fund; automatic alerts if fund is approaching limit or nearing end date |
| Trustee / Board Portal | Board members access a read-only dashboard showing financials, compliance status, and programme delivery metrics |
| Volunteer OrgExec Management | Volunteers registered as Human OrgExecs with VOLUNTEER-ODD; activity tracked; DBS/clearance document vault |
| Funder Reporting | Reporting module generates grant expenditure reports in funder-required format from tagged transaction data |

## **BC-12 — Franchise Network: DAO Formation & Brand Governance**

**BC-12  Franchise Network DAO**

| Primary Persona | Franchise Brand Owner / Franchisor |
| :---- | :---- |
| **Org Type** | Franchise — any consumer-facing industry |
| **Core Problem** | Bob and Alice want to franchise their dry cleaning business. They need: a way to share their operational playbook with franchisees, automatic royalty collection, brand standards enforcement, and group governance — without micromanaging each franchisee. |
| **Value Delivered** | UME's DAO module allows Bob and Alice to form a franchise DAO. Their OrgDNA becomes the brand package. Smart contracts automatically collect royalties. Brand standards compliance is checked automatically. Franchisees operate their own fully independent OrgOS instances while remaining aligned to the parent brand. |

**DAO Franchise Value**

| Capability | Description |
| :---- | :---- |
| OrgDNA as Franchise Kit | Export the parent OrgOS config as OrgDNA; franchisees clone it to spin up an operational dry cleaning OrgOS in \<30 minutes |
| Automatic Royalty Collection | Smart contract: 6% of monthly revenue auto-debited from franchisee treasury to parent treasury on period close event — no invoicing, no chasing |
| Brand Standards Enforcement | Smart contract monitors franchisee OrgDNA version; if \>1 major version behind parent, triggers cure period and governance escalation |
| Collective Governance | Major brand decisions (price changes, new service lines, marketing spend) put to governance vote; quorum of franchisees required |
| Group Performance Dashboard | Parent org sees consolidated revenue, orders, and NPS across all franchisees in real-time |

## **BC-13 — Franchise Operator: Running Under a DAO**

**BC-13  Franchise Operator Experience**

| Primary Persona | Franchisee Business Owner |
| :---- | :---- |
| **Org Type** | Franchise — operating under a parent DAO |
| **Core Problem** | A franchisee wants the benefits of an established brand and proven operating model without being locked into a rigid central system that ignores local market realities. They want operational autonomy within brand guidelines. |
| **Value Delivered** | Each franchisee gets a full, independent OrgOS — every module, every capability. The DAO connection simply adds: automatic royalty payment, OrgDNA brand updates, and governance voting. The franchisee is operationally sovereign while being brand-aligned. |

**Franchisee Experience**

| Full OrgOS ownership | Franchisee controls all their data, operations, and staff — DAO only governs brand compliance and royalties |
| :---: | :---- |

| \< 30 min onboarding | Clone parent OrgDNA → adjust entity details and jurisdiction → launch OrgOS |
| :---: | :---- |

| Zero royalty admin | Smart contract handles royalty calculation and transfer automatically — franchisee just runs the business |
| :---: | :---- |

## **BC-14 — Investment Fund: Portfolio Company OS Management**

**BC-14  Investment Fund & Portfolio DAO**

| Primary Persona | Fund Manager / General Partner |
| :---- | :---- |
| **Org Type** | Investment Fund — VC, PE, family office |
| **Core Problem** | An investment fund manages 8–15 portfolio companies, each with different tools, reporting formats, and data quality. Getting portfolio-level financial and operational data requires weeks of manual data collection and normalisation. |
| **Value Delivered** | Each portfolio company runs its own OrgOS. The fund forms a DAO with all portfolio companies. Portfolio-level financial consolidation, KPI dashboards, and risk monitoring are real-time — no manual data collection. |

**Portfolio DAO Value**

| Real-time portfolio view | All portfolio company financials, headcount, and KPIs visible to fund managers in real-time via DAO dashboard |
| :---: | :---- |

| Standardised reporting | All portfolio companies using same OrgOS framework produce comparable data automatically — no format normalisation |
| :---: | :---- |

| OrgDNA as investment thesis | Fund publishes its operational best-practice OrgDNA to portfolio companies; accelerates operational improvement post-investment |
| :---: | :---- |

## **BC-15 — Supply Chain DAO: Buyer-Supplier Network**

**BC-15  Supply Chain DAO**

| Primary Persona | Supply Chain Director / Procurement Manager |
| :---- | :---- |
| **Org Type** | Enterprise — manufacturing, retail, distribution |
| **Core Problem** | A buyer organisation manages 20–50 suppliers, each with separate systems, ordering processes, and data formats. Purchase orders are emailed. Lead times are guessed. Quality issues are discovered late. |
| **Value Delivered** | Buyer and key suppliers form a supply chain DAO. Smart contracts govern SLAs, automatic PO generation, and payment terms. Shared inventory visibility means the buyer can plan against supplier stock levels in real-time. |

**Supply Chain DAO Value**

| Function | Value |
| :---- | :---- |
| Automatic PO generation | Low-stock event in buyer's inventory triggers PO smart contract; supplier receives confirmed order instantly |
| SLA monitoring | Smart contract tracks delivery performance; SLA breach triggers automatic penalty clause per contract terms |
| Shared demand signal | Buyer's demand forecast shared with key suppliers via DAO event bus; suppliers plan production accordingly |
| Payment automation | Goods receipt confirmed in buyer's OrgOS triggers payment smart contract; no manual accounts payable processing |

## **BC-16 — Enterprise Spinout: OrgDNA Cloning & Rapid Launch**

**BC-16  OrgDNA Clone & Rapid Launch**

| Primary Persona | Corporate Development / Integration Manager |
| :---- | :---- |
| **Org Type** | Enterprise — M\&A, spinout, new venture |
| **Core Problem** | A corporate group wants to spin out a new business unit as an independent entity, or rapidly launch a new market entry. The traditional approach requires months of tool procurement, IT setup, and process design. |
| **Value Delivered** | UME's OrgDNA clone capability allows the parent group's proven operational configuration to be exported, adapted, and used to provision a fully operational new OrgOS in under 30 minutes. |

**Spinout Process**

| Step | Action | Time |
| :---- | :---- | :---- |
| 1 | Export parent OrgDNA (excluding transactional data) | 5 min |
| 2 | Adjust: new entity name, jurisdiction, COA accounts, compliance packs | 15 min |
| 3 | Provision new OrgOS from adapted OrgDNA | \< 2 min automated |
| 4 | Invite founding team as OrgExecs with appropriate ODDs | 5 min |
| 5 | New OrgOS is live and fully operational | \< 30 min total |

| \< 30 minutes | Time from decision to operational OrgOS — vs. 3–6 months for traditional IT setup |
| :---: | :---- |

# **Part II: Use Cases**

Use cases define the functional interactions between actors and the UME OrgOS platform. Each use case specifies the actor, goal, preconditions, numbered main flow, alternate/exception flows, and post-conditions. Use cases are grouped by module domain.

| Group | UC IDs | Module Domain |
| :---- | :---- | :---- |
| A — Authentication & OrgOS Setup | UC-01 – UC-04 | Auth, Provisioning, OrgDNA |
| B — Finance & Accounting | UC-05 – UC-10 | Finance |
| C — HR & People | UC-11 – UC-16 | HR, OrgExec, ODD |
| D — Legal & Compliance | UC-17 – UC-21 | Legal / Chombo |
| E — Sales & CRM | UC-22 – UC-26 | CRM, Sales |
| F — Operations & Supply Chain | UC-27 – UC-31 | Operations / ERP |
| G — Risk & GRC | UC-32 – UC-35 | Risk / GRC |
| H — OrgSystem (ODD, SDO, OrgApps) | UC-36 – UC-41 | OrgExec, ODD, SDO, OrgDNA |
| I — DAO & DLT | UC-42 – UC-46 | DAO, DLT, Smart Contracts |
| J — Marketing & Work | UC-47 – UC-48 | Marketing, Work Management |

## **Group A — Authentication & OrgOS Setup**

**UC-01  Register a New Account & Launch OrgOS**   \[Auth / OrgOS Provisioner\]

| Actor | New User (any persona) |
| :---- | :---- |
| **Goal** | Create a UME account, configure an OrgOS from a template, select modules, set entity details, and launch a working Organisation Operating System. |
| **Pre-conditions** | User has no existing UME account. User has a valid email address. |
| **Post-conditions** | User has a fully operational OrgOS with selected modules running, compliance calendar populated, COA generated, and initial roles assigned. OrgDNA v1.0.0 committed. |

**Main Flow**

| 1 | User navigates to ume.io and clicks "Create my OrgOS". |
| :---: | :---- |
| **2** | User enters full name, organisation name, work email, and password. Accepts Terms of Service. |
| **3** | System sends a 6-digit OTP to the email address. |
| **4** | User enters OTP. System verifies and activates account. |
| **5** | System presents OrgOS Template Gallery. User selects an industry template (e.g., Dry Cleaning). |
| **6** | System presents Module Configurator pre-populated for the chosen template. User toggles desired modules; dependency graph updates in real-time. |
| **7** | User enters legal entity type, jurisdiction, and tax ID. System fetches applicable compliance obligations. |
| **8** | User optionally invites team members, assigning roles and OrgExec types. |
| **9** | User clicks "Launch OrgOS". System provisions OrgKernel, all selected OrgApps, COA, compliance calendar, and initial ODDs. |
| **10** | System displays OrgOS boot sequence with real-time step-by-step progress. |
| **11** | Boot completes. User lands on Executive Dashboard. |

**Alternate / Exception Flows**

| Invalid OTP | OTP entry fails: system shows attempt count. After 3 failures, resend is offered. After 10, account locked and support email sent. |
| :---- | :---- |
| Existing email | System detects existing account for email. Prompts user to sign in instead or reset password. |
| Module dependency conflict | If user disables a required module, system highlights dependents and prevents disabling until dependencies resolved. |
| Jurisdiction not supported | System flags jurisdiction as "limited compliance pack" and shows available coverage, allowing user to proceed with warning. |

**UC-02  Sign In with Multi-Factor Authentication**   \[Auth\]

| Actor | Any existing user |
| :---- | :---- |
| **Goal** | Authenticate securely and resume work from last active screen. |
| **Pre-conditions** | User has an active UME account with MFA enabled. |
| **Post-conditions** | User has an authenticated session. Activity log entry created. Last-active screen displayed. |

**Main Flow**

| 1 | User enters email and password on sign-in screen. |
| :---: | :---- |
| **2** | System validates credentials. If invalid, increments failure counter (locks after 10). |
| **3** | System prompts for MFA: TOTP code or push notification. |
| **4** | User enters TOTP code or approves push notification. |
| **5** | System validates MFA. If valid, creates session token. |
| **6** | System restores user to their last active screen and org context. |

**Alternate / Exception Flows**

| Forgot password | User clicks "Forgot password". System sends reset link to registered email. Reset link valid for 15 minutes. |
| :---- | :---- |
| MFA device lost | User clicks "Use backup code". System accepts a single-use backup code, invalidates it, and prompts MFA re-enrolment. |
| Multiple orgs | If user is a member of more than one OrgOS, an org selector is shown before dashboard load. |
| SSO login | User clicks Google/Microsoft/SAML SSO button. Identity provider handles authentication. System creates session on successful callback. |

**UC-03  Export and Clone an OrgDNA Package**   \[OrgDNA Manager\]

| Actor | Organisation Owner / Admin |
| :---- | :---- |
| **Goal** | Export the current OrgOS configuration as an OrgDNA package and use it to provision a new OrgOS instance. |
| **Pre-conditions** | User has Owner or Admin role. OrgOS is in a stable, validated state. |
| **Post-conditions** | New OrgOS instance is live. OrgDNA v1.0.0 committed to new instance. Parent-child OrgDNA lineage recorded. |

**Main Flow**

| 1 | User opens OrgSystem → OrgDNA Manager. |
| :---: | :---- |
| **2** | User clicks "Export OrgDNA". System serialises kernel config, all OrgApp settings, ODD templates, COA, compliance packs, RBAC policies, and KPI definitions. |
| **3** | System runs validation: checks all dependencies satisfied, no circular refs, no incomplete configs. |
| **4** | System generates versioned OrgDNA package (TOML \+ JSON). User downloads or stores to OrgDNA vault. |
| **5** | User clicks "Clone to New OrgOS". Wizard opens: user enters new org name, adjusts jurisdiction and entity details. |
| **6** | User optionally modifies COA codes or compliance pack for the new jurisdiction. |
| **7** | User confirms. System provisions new OrgOS instance from cloned OrgDNA in background. |
| **8** | Boot completes for new instance. User receives email with access details for new OrgOS. |

**Alternate / Exception Flows**

| Validation fails | OrgDNA validation finds an incomplete OrgApp config. System lists specific issues with links to fix each. Export blocked until resolved. |
| :---- | :---- |
| Jurisdiction mismatch | Cloned OrgDNA compliance pack does not cover new jurisdiction. System flags missing pack and suggests available alternatives. |
| Sensitive data warning | If any OrgApp has transactional data flagged for exclusion, system confirms exclusion list before export. |

**UC-04  Invite a User and Assign a Role**   \[Settings / Auth\]

| Actor | Admin / Owner |
| :---- | :---- |
| **Goal** | Add a new team member to the OrgOS with the correct permissions. |
| **Pre-conditions** | Inviting user has Admin or Owner role. Invitee has an email address. |
| **Post-conditions** | New user is active in OrgOS with assigned role and ODD. Welcome email sent with getting-started guide. |

**Main Flow**

| 1 | Admin opens Settings → Users & Roles. |
| :---: | :---- |
| **2** | Admin clicks "+ Invite User". Enters invitee email address. |
| **3** | Admin selects a role from the role list or creates a new custom role. |
| **4** | Admin optionally selects OrgExec type (Human / AI Agent / Hybrid). |
| **5** | System sends invitation email with time-limited join link (48 hours). |
| **6** | Invitee clicks link. If they have no UME account, signup flow runs. If they do, they accept the invitation. |
| **7** | System adds the user to the OrgOS with the assigned role and generates their ODD from the role template. |
| **8** | Activity log entry created: user added, role assigned, ODD version recorded. |

**Alternate / Exception Flows**

| Invitation expires | After 48 hours, link is invalid. Admin can resend from the Invitations tab. |
| :---- | :---- |
| Custom role needed | Admin clicks "+ Create Role" and defines per-module permissions before sending invite. |
| Invitee already a member | System detects existing membership. Prompts admin to update role instead. |

## **Group B — Finance & Accounting**

**UC-05  Create and Post a Journal Entry**   \[Finance\]

| Actor | Accountant / Finance Manager |
| :---- | :---- |
| **Goal** | Record a financial transaction in the general ledger with a fully balanced, auditable journal entry. |
| **Pre-conditions** | User has Finance Write permission. Accounting period is open. |
| **Post-conditions** | JE posted to GL. Audit record with hash chain entry created. Period balance updated. All reports reflect new posting in real time. |

**Main Flow**

| 1 | User opens Finance → Journal Entries and clicks "+ New JE". |
| :---: | :---- |
| **2** | User enters entry date, selects accounting period, and adds a description. |
| **3** | User adds line items: selects account from COA autocomplete, enters debit or credit amount. |
| **4** | System calculates running balance after each line. BALANCED indicator shows green when debits equal credits. |
| **5** | User attaches a supporting document (receipt, invoice PDF). |
| **6** | User clicks "Post Entry". System validates: period open, entry balanced, no restricted accounts. |
| **7** | System generates SHA-256 hash, writes immutable audit record, updates GL balances, and emits finance.journal\_entry.posted event. |
| **8** | SDO engine receives event; updates financial state in digital twin. |

**Alternate / Exception Flows**

| Period closed | If selected period is closed, system blocks posting and shows who closed the period and when. |
| :---- | :---- |
| Unbalanced entry | POST button is disabled while debits ≠ credits. Red unbalanced indicator shows the difference amount. |
| Requires approval | If entry amount exceeds the user's ODD approval threshold, system routes to approver instead of posting directly. |
| Duplicate detection | System warns if a near-identical entry (same date, amount, description) exists within 5 days. |

**UC-06  Generate and Send a Sales Invoice**   \[Finance / CRM\]

| Actor | Owner / Sales / Finance |
| :---- | :---- |
| **Goal** | Create an invoice for a customer, send it, and track payment status. |
| **Pre-conditions** | Customer exists in CRM. User has Finance or Sales Write permission. |
| **Post-conditions** | Invoice sent. AR balance updated. On payment: JE posted, bank reconciliation item created, CRM order marked paid. |

**Main Flow**

| 1 | User opens Finance → Invoices and clicks "+ New Invoice" (or opens a CRM order and clicks "Generate Invoice"). |
| :---: | :---- |
| **2** | System pre-populates customer details from CRM. User adds line items with descriptions and amounts. |
| **3** | System calculates subtotal, applies configured tax rate, shows total due. |
| **4** | User sets payment due date and selects payment method (bank transfer, Stripe link). |
| **5** | User previews invoice. Clicks "Send". System emails invoice to customer with payment link. |
| **6** | Invoice status changes to Sent. Dashboard AR widget updates. |
| **7** | On payment: Stripe webhook fires → system marks invoice Paid → posts receipts journal entry automatically → AR balance updated. |

**Alternate / Exception Flows**

| Customer pays partially | Partial payment recorded. Invoice status shows Partially Paid with outstanding balance. |
| :---- | :---- |
| Invoice overdue | At due date+1: status changes to Overdue. Dashboard risk widget shows AR ageing. Optional auto-reminder sent. |
| Credit note required | User clicks "Issue Credit Note" on a posted invoice. Reversal JE created automatically. |

**UC-07  Run Payroll for a Period**   \[HR / Finance\]

| Actor | HR Manager / Payroll Administrator |
| :---- | :---- |
| **Goal** | Calculate and process payroll for all active employees, generate payslips, post payroll journals. |
| **Pre-conditions** | Employees have active payroll accounts. Pay period is defined. Timesheets/salaries are confirmed. |
| **Post-conditions** | Payroll posted. Payslips generated and accessible. Tax liability in compliance calendar. Finance GL updated. |

**Main Flow**

| 1 | HR Manager opens HR → Payroll → Run Payroll for the current period. |
| :---: | :---- |
| **2** | System pre-populates all active employees with their contracted salary or hours × rate from timesheets. |
| **3** | Manager reviews each employee row: gross pay, statutory deductions (tax, NI/FICA), net pay. |
| **4** | Manager enters any adjustments: overtime, bonuses, deductions. |
| **5** | System recalculates totals. Manager confirms payroll run. |
| **6** | System generates payslips for all employees, posts payroll journal entry to Finance (Gross Pay Dr, Tax Liability Cr, Net Pay Cr). |
| **7** | System marks payroll period as Processed. Employees notified by email. Payslips visible in employee portal. |
| **8** | Payroll tax liability entry appears in Chombo filing calendar as upcoming obligation. |

**Alternate / Exception Flows**

| Timesheet not submitted | System flags employees with missing timesheets. Manager can override with contracted hours or hold those employees. |
| :---- | :---- |
| Tax table update needed | System checks for jurisdiction tax table updates before each payroll run; warns if tables are stale. |
| Payroll ODD constraint | If payroll processor OrgExec's ODD requires dual-sign for amounts above threshold, approval request generated. |

**UC-08  View Consolidated Group P\&L**   \[Finance / DAO\]

| Actor | CFO / Group Finance Director |
| :---- | :---- |
| **Goal** | View a real-time consolidated profit and loss statement across all group entities. |
| **Pre-conditions** | User has Finance Read on all entities in the group. At least two entity OrgOS instances exist in a group DAO. |
| **Post-conditions** | Consolidated P\&L displayed. All entity data reflected within SDO event propagation lag (\< 500ms typical). |

**Main Flow**

| 1 | User opens Finance → Reports → P\&L Statement. |
| :---: | :---- |
| **2** | User selects "All Entities" in the entity selector. |
| **3** | System aggregates revenue and expense data from all entity OrgOS instances via DAO data sharing. |
| **4** | System applies intercompany elimination rules (configured in group Finance settings). |
| **5** | Consolidated P\&L renders with entity breakdown columns and group totals. |
| **6** | User can drill into any account row to see the entity-by-entity breakdown. |
| **7** | User exports to Excel or PDF for board pack. |

**Alternate / Exception Flows**

| Entity data stale | If a member entity's OrgOS is offline, system shows last-synced timestamp with staleness warning and excludes from totals. |
| :---- | :---- |
| Currency conversion | If entities report in different currencies, system applies configured exchange rates and shows functional and presentation currency. |
| Period not closed for entity | System flags entities with open periods and shows unaudited indicator on those columns. |

**UC-09  Reconcile a Bank Account**   \[Finance\]

| Actor | Accountant / Finance Manager |
| :---- | :---- |
| **Goal** | Match bank statement transactions to GL entries, identify discrepancies, and mark the account as reconciled. |
| **Pre-conditions** | Bank feed connected via Finance driver or CSV import available. Unreconciled transactions exist. |
| **Post-conditions** | Bank account reconciled. Closing balance matches bank statement. Reconciliation report available for audit. |

**Main Flow**

| 1 | User opens Finance → Bank Reconciliation, selects account. |
| :---: | :---- |
| **2** | System shows two columns: GL transactions (unreconciled) and bank statement lines. |
| **3** | User matches GL transactions to bank lines by clicking pairs; matched items grey out. |
| **4** | System auto-suggests matches where amount, date, and payee match within configured tolerance. |
| **5** | User investigates unmatched items: posts adjusting JEs for bank charges, interest, errors. |
| **6** | When all items matched, user clicks "Mark Reconciled". System locks reconciliation and records closing balance. |

**Alternate / Exception Flows**

| Unmatched at period close | Outstanding unmatched items shown in summary. User can mark as "in transit" or raise outstanding item for investigation. |
| :---- | :---- |
| Duplicate bank line | System flags potential duplicate if same amount and payee appear within 2 business days. |

**UC-10  Close an Accounting Period**   \[Finance\]

| Actor | Finance Manager / Controller |
| :---- | :---- |
| **Goal** | Lock an accounting period to prevent further posting and produce period-end reports. |
| **Pre-conditions** | All journal entries for the period are posted and reviewed. User has Finance Admin permission. |
| **Post-conditions** | Period locked. Period-end reports generated and immutable snapshot stored. DAO royalty smart contracts triggered if applicable. |

**Main Flow**

| 1 | User opens Finance → Period Management, selects the period to close. |
| :---: | :---- |
| **2** | System runs pre-close checklist: unreconciled bank accounts, unposted entries, unmatched invoices. |
| **3** | System shows any open items as warnings or blockers. |
| **4** | User resolves blockers (or acknowledges warnings with reason). |
| **5** | User clicks "Close Period". System prompts for confirmation. |
| **6** | System locks the period: all posting to this period is now blocked. |
| **7** | System generates period-end reports: P\&L, Balance Sheet, Cash Flow statement. |
| **8** | Emits finance.period.closed event — subscribed by DAO smart contract engine for royalty triggers. |

**Alternate / Exception Flows**

| Open items block close | System lists each unresolved item. Finance Manager must either resolve or explicitly override with a reason logged in audit trail. |
| :---- | :---- |
| Reopening a period | Only Finance Admin can reopen. Requires dual authorisation if ODD requires. All reopen actions fully audited. |

## **Group C — HR & People**

**UC-11  Onboard a New Employee (Full Wizard)**   \[HR / ODD\]

| Actor | HR Manager |
| :---- | :---- |
| **Goal** | Create a complete employee record, generate their ODD contract, trigger cross-module provisioning events. |
| **Pre-conditions** | User has HR Write permission. Role and department exist in org structure. |
| **Post-conditions** | Employee record active. ODD registered. Cross-module cascade complete: payroll, contract, IT, portal access all provisioned. Timeline entry created. |

**Main Flow**

| 1 | HR Manager opens HR → People → "+ New Hire". |
| :---: | :---- |
| **2** | Step 1: Enters personal details, role, department, start date, employment type, reports-to. Selects OrgExec type (Human). Selects ODD template. |
| **3** | Step 2: Uploads right-to-work documents. System validates document type for jurisdiction. |
| **4** | Step 3: Enters compensation details: salary/rate, pay frequency, payroll account, equity (if applicable). |
| **5** | Step 4: Selects benefits package: health plan, pension/401k contribution. |
| **6** | Step 5: Review screen shows all details. System previews generated ODD contract. Manager confirms. |
| **7** | System creates employee record, registers OrgExec with generated ODD in ODDBus, triggers cross-module events. |
| **8** | Cross-module cascade: Finance creates payroll account; Legal generates employment contract; IT sends provisioning request; Portal sends welcome email with login. |

**Alternate / Exception Flows**

| Right-to-work fails | Document does not satisfy jurisdiction requirements. System flags specific gap. HR must resolve before proceeding. |
| :---- | :---- |
| Duplicate employee | System detects same name \+ DOB combination. Prompts to confirm this is a new person, not a duplicate. |
| ODD template not available | If no template matches the role, HR Manager prompted to create a custom ODD before proceeding. |

**UC-12  Process an Employee Leave Request**   \[HR / Portal\]

| Actor | Employee → Manager |
| :---- | :---- |
| **Goal** | Employee submits a leave request; manager approves or declines; leave balance and schedule updated. |
| **Pre-conditions** | Employee has active portal access. Leave types and balances configured. |
| **Post-conditions** | Leave approved/declined. Balance updated. Schedule updated. Payroll informed. All actions audited. |

**Main Flow**

| 1 | Employee opens Employee Portal → Leave → "Request Leave". |
| :---: | :---- |
| **2** | Employee selects leave type, date range, and optional reason. System shows current balance and balance after approval. |
| **3** | Employee submits. System validates: sufficient balance, no scheduling conflict (via Operations module if connected). |
| **4** | System notifies manager (email \+ in-app alert). |
| **5** | Manager opens HR → Leave Inbox. Reviews request alongside team leave calendar. |
| **6** | Manager approves or declines with optional comment. |
| **7** | System updates leave balance, updates schedule in Operations module, notifies employee by email. |
| **8** | Leave calendar entry created. Payroll module informed for pay period calculation. |

**Alternate / Exception Flows**

| Insufficient balance | System blocks submission and shows available balance. Employee can request without-pay leave as alternative. |
| :---- | :---- |
| Manager unavailable | If manager has not actioned within configured SLA (default 3 days), system escalates to manager's manager. |
| Clash with critical period | If date range overlaps a flagged critical period (e.g., year-end), system warns manager during review. |

**UC-13  Deploy an AI Agent OrgExec**   \[ODD / OrgExec\]

| Actor | Admin / AI Agent Manager / Owner |
| :---- | :---- |
| **Goal** | Configure, ODD-govern, and deploy an AI agent as an active OrgExec within the OrgOS. |
| **Pre-conditions** | User has OrgExec Admin permission. AI Agent OrgApp is installed and active. |
| **Post-conditions** | AI agent active as OrgExec. ODD registered and enforced. All agent actions logged in audit chain. SDO reflects new node. |

**Main Flow**

| 1 | User opens OrgSystem → OrgExec Registry → "+ New OrgExec". |
| :---: | :---- |
| **2** | User selects Type: AI Agent. Enters display name and role description. |
| **3** | User selects or creates an ODD template. ODD Editor opens. |
| **4** | User defines Capabilities: checks data sources the agent may read, outputs it may write, notifications it may send. |
| **5** | User defines Constraints: rate limits, working hours, approval thresholds (changes above N require human sign-off). |
| **6** | User defines Escalation Rules: conditions under which agent must pause and notify a human. |
| **7** | User runs "Test Agent" — system runs agent in sandbox against sample data. |
| **8** | Test passes. User clicks "Deploy OrgExec". System registers ODD in ODDBus, activates agent. |
| **9** | Agent appears in OrgExec Registry as Active. SDO topology graph updates. |

**Alternate / Exception Flows**

| Test fails | Agent cannot satisfy a required task within its ODD constraints. User revises capabilities or constraints and retests. |
| :---- | :---- |
| ODD too permissive | System flags if agent's ODD grants access to sensitive data (payroll, financial) without an explicit audit rule. Prompts to add audit constraint. |
| Agent hits rate limit | During operation, agent exceeds hourly execution limit. ODDBus suspends agent actions until next hour window. Alert sent to manager. |

**UC-14  Conduct a Performance Review**   \[HR\]

| Actor | Manager → Employee |
| :---- | :---- |
| **Goal** | Initiate, complete, and record a structured performance review cycle. |
| **Pre-conditions** | Review cycle configured. Employee has active profile with performance targets set. |
| **Post-conditions** | Review completed and recorded. HR analytics updated with rating data. Compensation review trigger event emitted if configured. |

**Main Flow**

| 1 | Manager opens HR → Performance → Initiate Review for an employee. |
| :---: | :---- |
| **2** | System generates review form from configured template (goals, competencies, ratings). |
| **3** | Employee receives portal notification to complete self-assessment. |
| **4** | Employee submits self-assessment. Manager is notified. |
| **5** | Manager completes manager assessment with ratings and narrative. |
| **6** | Optionally: 360 feedback requested from peers/direct reports. |
| **7** | Manager schedules and holds review meeting. Meeting notes recorded in system. |
| **8** | Manager submits completed review. Review is shared with employee via portal. |
| **9** | Employee acknowledges receipt. Record marked Complete. HR can view aggregate ratings for team. |

**Alternate / Exception Flows**

| Employee does not complete self-assessment | System sends reminder at T+3 days. Manager can override and complete without self-assessment if needed. |
| :---- | :---- |
| Rating dispute | Employee flags disagreement on portal. HR notified. Escalation workflow opens. |

**UC-15  Offboard an Employee**   \[HR / Legal / IT\]

| Actor | HR Manager |
| :---- | :---- |
| **Goal** | Process an employee's departure: close access, complete final pay, archive records. |
| **Pre-conditions** | Employee is active. Offboarding date confirmed. HR Admin permission required. |
| **Post-conditions** | Employee status Inactive. ODD suspended. Access revoked. Final payslip generated. Legal documents archived. IT deprovisioned. |

**Main Flow**

| 1 | HR Manager opens employee profile → "Offboard Employee". |
| :---: | :---- |
| **2** | Offboarding wizard opens. HR enters last day, reason for leaving (voluntary/involuntary), notice period status. |
| **3** | System generates offboarding checklist: exit interview, equipment return, access revocation, final payslip. |
| **4** | HR works through checklist items. Each item ticked off creates a timeline entry. |
| **5** | On last day: system automatically revokes OrgOS access, suspends ODD contract, archives employee record. |
| **6** | Finance generates final payslip including any outstanding holiday pay/severance. |
| **7** | Legal module generates separation agreement from template if applicable. |
| **8** | IT provisioning event emitted: connected systems (email, Slack) deprovisioned via device drivers. |

**Alternate / Exception Flows**

| Equipment not returned | Outstanding equipment tracked in IT module. Flag remains on HR record until cleared. |
| :---- | :---- |
| Garden leave period | Access revoked immediately but payroll continues until end of notice period. |

**UC-16  Register an OrgCPU (IoT Device)**   \[ODD / Operations / IT\]

| Actor | IT Manager / Facilities Manager |
| :---- | :---- |
| **Goal** | Connect a physical device (machine, POS terminal, sensor) as an OrgCPU and define its ODD. |
| **Pre-conditions** | Device is network-accessible. IT Admin permission held. |
| **Post-conditions** | OrgCPU registered and active. ODD enforced. Live data flowing to configured OrgApps. SDO topology updated. |

**Main Flow**

| 1 | User opens OrgSystem → OrgExec Registry → "+ New OrgExec" → Type: OrgCPU. |
| :---: | :---- |
| **2** | User selects device category (Industrial Machine / POS Terminal / IoT Sensor / 3rd-party Platform). |
| **3** | User enters device name, physical location, and connection details (IP, API endpoint, MQTT topic). |
| **4** | System runs connectivity test. Confirms device is reachable. |
| **5** | User selects ODD template for the device type (e.g., IOT-WM-1 for industrial washer). |
| **6** | User configures: what data the device reports, at what frequency, and which OrgApps receive the data. |
| **7** | User defines alert thresholds (e.g., temperature \> 90°C → alert; status \= offline \> 5 min → alert). |
| **8** | User deploys ODD. System registers device in OrgCPU Registry and SDO topology. |
| **9** | Device status appears live in Operations dashboard. |

**Alternate / Exception Flows**

| Connectivity test fails | User provided wrong endpoint. System shows error detail. User corrects and retests. |
| :---- | :---- |
| No ODD template for device | User creates custom ODD with IT Manager guidance. Saved to OrgDNA library for future use. |

## **Group D — Legal & Compliance**

**UC-17  Register a Legal Entity**   \[Legal / Chombo\]

| Actor | Owner / Legal/Compliance Officer |
| :---- | :---- |
| **Goal** | Add a new legal entity to the OrgOS, set jurisdiction, and auto-generate compliance obligations. |
| **Pre-conditions** | User has Legal Admin permission. |
| **Post-conditions** | Entity registered. Compliance calendar populated. Entity linked to Finance and HR modules. Dashboard shows entity's first upcoming obligation. |

**Main Flow**

| 1 | User opens Legal & Compliance → Entities → "+ New Entity". |
| :---: | :---- |
| **2** | User enters entity name, entity type (LLC, Ltd, Corporation, etc.), registration number, registered address. |
| **3** | User selects primary jurisdiction. System detects applicable compliance framework. |
| **4** | System auto-generates compliance calendar: all statutory filings, annual returns, tax deadlines for this entity and jurisdiction. |
| **5** | User reviews generated obligations. Can add custom obligations or suppress irrelevant ones. |
| **6** | User links entity to OrgApps (Finance, HR) for cross-module data association. |
| **7** | Entity saved. Compliance calendar active. Dashboard compliance widget updated. |

**Alternate / Exception Flows**

| Jurisdiction not in database | System flags limited coverage. User can manually add compliance obligations. System flags entity as "manual calendar" |
| :---- | :---- |
| Entity type changes | If entity converts (e.g., sole trader to LLC), user runs "Convert Entity" wizard. Old obligations archived, new ones generated. |

**UC-18  Mark a Compliance Filing as Complete**   \[Legal / Chombo\]

| Actor | Owner / Compliance Officer |
| :---- | :---- |
| **Goal** | Record that a compliance obligation has been fulfilled, upload evidence, and schedule next occurrence. |
| **Pre-conditions** | Filing obligation exists in compliance calendar. Due date is approaching or passed. |
| **Post-conditions** | Obligation marked Complete with evidence. Next occurrence scheduled. Compliance score updated. Audit record created. |

**Main Flow**

| 1 | User opens Legal → Filing Calendar. Sees filing due (highlighted amber or red). |
| :---: | :---- |
| **2** | User clicks on the filing. Detail screen shows: obligation description, instructions, due date, linked amount (if applicable, e.g., tax payment auto-calculated from payroll data). |
| **3** | User completes the filing with the relevant authority (outside UME). |
| **4** | User returns to UME. Clicks "Mark as Filed". Enters filing date and confirmation reference. |
| **5** | User uploads evidence document (EFTPS confirmation, Companies House receipt, etc.). |
| **6** | System marks obligation Complete, records filing date and reference, stores evidence in document vault. |
| **7** | System auto-creates next occurrence of recurring obligation (e.g., next quarterly return). |
| **8** | Compliance calendar and dashboard compliance score updated. |

**Alternate / Exception Flows**

| Filing late | System records late filing flag. Compliance score penalised. User can note reason for lateness. |
| :---- | :---- |
| Delegate to team member | User clicks "Assign To" before marking filed. Assignee receives task notification. |

**UC-19  Generate a Contract from Template**   \[Legal / Chombo\]

| Actor | Owner / Legal Officer / HR Manager |
| :---- | :---- |
| **Goal** | Produce a ready-to-sign contract document using a configured template and party-specific data. |
| **Pre-conditions** | Contract template exists in Legal vault. Relevant party data exists (employee record or customer record). |
| **Post-conditions** | Contract executed and stored. legal.contract.executed event emitted. Document vault entry created. Cross-module cascade: HR links to employee record, Finance links to billing schedule. |

**Main Flow**

| 1 | User opens Legal → Contracts → "+ Generate Contract". |
| :---: | :---- |
| **2** | User selects contract type (Employment Agreement, NDA, Services Agreement, Partnership Agreement, Franchise Agreement). |
| **3** | System loads template. User selects counterparty from CRM or HR records. |
| **4** | System pre-populates template fields from OrgOS data (org name, address, entity details, party name, role, salary). |
| **5** | User reviews and edits the populated contract. Adds any bespoke clauses. |
| **6** | User sends for e-signature via integrated e-sign driver. Counterparty receives email with signing link. |
| **7** | On all parties signing: system marks contract Executed, stores signed PDF in document vault, emits legal.contract.executed event. |

**Alternate / Exception Flows**

| Counterparty declines | System records decline. Contract moves to Declined status. Notification sent to initiating user. |
| :---- | :---- |
| Template missing a field | User can fill manually. Field flagged as manually populated in audit record. |
| Jurisdiction-specific clauses needed | Legal template library includes jurisdiction variants. User selects applicable variant before generating. |

**UC-20  Manage IP, Licences & Brand Assets**   \[Legal / Brand\]

| Actor | Owner / Brand Manager / Legal Officer |
| :---- | :---- |
| **Goal** | Register intellectual property, trademarks, and brand assets; track renewal dates. |
| **Pre-conditions** | User has Legal Write permission. |
| **Post-conditions** | IP asset registered. Renewal in compliance calendar. Brand assets accessible to Marketing module. |

**Main Flow**

| 1 | User opens Legal → IP Management → "+ Register Asset". |
| :---: | :---- |
| **2** | User selects asset type: Trademark, Patent, Copyright, Trade Secret, Domain Name, Brand Asset. |
| **3** | User enters registration details: title, jurisdiction, registration number, registration date, expiry/renewal date, owner entity. |
| **4** | User uploads supporting documents (registration certificate, design files). |
| **5** | System saves asset record. Adds renewal date to compliance calendar with configured reminder lead time. |
| **6** | Brand assets (logos, style guides) stored in Brand Assets sub-module; accessible to Marketing OrgApp. |

**Alternate / Exception Flows**

| Renewal approaching | Compliance calendar fires reminder 60 days before expiry. Legal officer assigns renewal task. |
| :---- | :---- |
| Cross-jurisdiction registration | User registers same IP in multiple jurisdictions; system groups under parent IP record with per-jurisdiction entries. |

**UC-21  Produce a Tax Audit Data Pack**   \[Legal / Finance\]

| Actor | Owner / Finance Manager / Legal Officer |
| :---- | :---- |
| **Goal** | Prepare and export a complete, structured data pack for a tax authority audit. |
| **Pre-conditions** | Finance and Legal modules have data for the audit period. User has Finance and Legal Admin permission. |
| **Post-conditions** | Audit pack generated. All relevant documents linked and exported. Auditor access provisioned if requested. |

**Main Flow**

| 1 | User opens Legal → Compliance → "Prepare Audit Pack". |
| :---: | :---- |
| **2** | User selects audit scope: entity, tax type (income, sales, payroll), period range. |
| **3** | System compiles: all JEs for period, payroll records, filed returns with evidence, vendor invoices, employee contracts. |
| **4** | User reviews the compiled pack. Adds a cover note with organisation details and legal representative. |
| **5** | User generates audit pack (PDF or ZIP with structured folder organisation). |
| **6** | User grants auditor a time-limited read-only access token to the UME audit dashboard, or downloads pack for delivery. |

**Alternate / Exception Flows**

| Auditor needs direct system access | User creates a temporary read-only auditor OrgExec with AUDITOR-ODD (read-only, scoped to audit period, auto-expiring). |
| :---- | :---- |
| Missing documents | System flags JEs with no attached receipt. User can annotate with explanation or upload late documents. |

## **Group E — Sales & CRM**

**UC-22  Create and Manage a Customer Order**   \[CRM / Finance\]

| Actor | Front Desk / Sales Staff |
| :---- | :---- |
| **Goal** | Record a new customer order, track it through fulfilment, and mark it complete. |
| **Pre-conditions** | Customer exists in CRM (or is created). Sales module active. |
| **Post-conditions** | Order fulfilled, collected, and invoiced. Revenue posted to Finance. Customer record updated with order history. |

**Main Flow**

| 1 | Staff opens Sales → Order Board → "+ New Order" (or opens customer profile → "+ New Order"). |
| :---: | :---- |
| **2** | Staff enters items/services, quantities, special instructions, and due date. |
| **3** | System calculates price from configured price list. Applies any customer-specific discount. |
| **4** | Order saved with status "Received". Card appears in Received column of order kanban. |
| **5** | Staff or OrgCPU moves order through kanban stages (Received → In Progress → Ready → Collected) as work proceeds. |
| **6** | On status change to "Ready": system sends customer notification (SMS/email) from configured template. |
| **7** | Staff confirms customer collection. Order marked Collected. Invoice generated automatically. |
| **8** | Finance module records revenue. AR balance updated. |

**Alternate / Exception Flows**

| Customer disputes item | Staff opens order detail → Add Dispute Note. Manager notified. Order held until resolved. |
| :---- | :---- |
| Order overdue | If order reaches due date without moving to Ready, system flags amber on kanban card. Manager alerted. |
| Bulk orders | Multi-item orders tracked with per-item status so partial readiness is visible. |

**UC-23  Manage a Sales Pipeline (B2B)**   \[CRM / Sales\]

| Actor | Sales Manager / Business Development |
| :---- | :---- |
| **Goal** | Track B2B deals from lead to close using the CRM pipeline. |
| **Pre-conditions** | CRM module active. Sales pipeline stages configured. |
| **Post-conditions** | Deal won or lost. Revenue forecast updated. Finance notified. Win/loss analytics updated. |

**Main Flow**

| 1 | Sales rep opens CRM → Pipeline → "+ New Deal". |
| :---: | :---- |
| **2** | Enters deal name, associated company/contact, estimated value, expected close date, and initial stage. |
| **3** | Deal card appears on pipeline kanban board in the configured first stage. |
| **4** | Rep progresses deal: logs calls, emails, and meetings as activities against the deal record. |
| **5** | Rep moves deal through stages as milestones are achieved (Qualified → Proposal → Negotiation → Won/Lost). |
| **6** | On Won: system creates a sales order or project record. Finance notified for invoicing. |
| **7** | On Lost: system captures loss reason. Analytics module updates win-rate KPIs. |
| **8** | Pipeline value and stage distribution visible in Sales Dashboard. |

**Alternate / Exception Flows**

| Deal goes cold | Rep marks deal as On Hold. Deal greys on kanban. System sends re-engagement reminder after configured days. |
| :---- | :---- |
| Multi-stakeholder deal | Multiple contacts linked to a deal. Activity log tracks all interactions. Deal requires sign-off from two contacts. |
| Forecast override | Manager can override AI probability forecast with manual assessment; both values tracked. |

**UC-24  Send a Marketing Campaign to a Customer Segment**   \[Marketing / CRM\]

| Actor | Marketing Manager / Owner |
| :---- | :---- |
| **Goal** | Create a targeted email or social campaign using a micro-persona, schedule it, and track engagement. |
| **Pre-conditions** | Marketing OrgApp active. Customer segment defined in CRM. Email/social channel driver configured. |
| **Post-conditions** | Campaign sent. Engagement tracked. Revenue attribution recorded. Customer segment updated with campaign interaction history. |

**Main Flow**

| 1 | User opens Marketing → Campaigns → "+ New Campaign". |
| :---: | :---- |
| **2** | Selects campaign type (email, social, SMS). Enters campaign name and goal. |
| **3** | User selects target segment from CRM (e.g., "Customers not seen in 60+ days"). |
| **4** | User opens AI Campaign Generator, selects micro-persona and brand tone. Clicks "Generate Content". |
| **5** | AI generates subject line, body copy, and social post variants. User reviews and edits. |
| **6** | User schedules campaign send date/time. |
| **7** | System sends campaign via configured CommDriver. Opens, clicks, and conversions tracked. |
| **8** | Campaign results appear in Marketing Dashboard: open rate, click rate, revenue attributed. |

**Alternate / Exception Flows**

| Email bounce rate high | System flags high bounce rate after first batch. User reviews and cleans segment before continuing. |
| :---- | :---- |
| GDPR/CAN-SPAM compliance | System checks all recipients have opted-in to marketing. Suppresses non-consented contacts automatically. |
| A/B test | User creates two content variants. System splits segment 50/50. Winner deployed after configured test duration. |

**UC-25  Manage Customer Accounts Receivable**   \[Finance / CRM\]

| Actor | Finance / Sales |
| :---- | :---- |
| **Goal** | Monitor outstanding invoices, send reminders, and record payments. |
| **Pre-conditions** | Invoices exist in Finance with Sent or Overdue status. |
| **Post-conditions** | Outstanding invoices actioned. Payments recorded. AR ageing report current. Cash flow forecast updated. |

**Main Flow**

| 1 | User opens Finance → AR Ageing report. |
| :---: | :---- |
| **2** | Report shows all outstanding invoices grouped by ageing bucket: 0–30, 31–60, 61–90, 90+ days. |
| **3** | User filters to overdue invoices. Selects one. |
| **4** | User clicks "Send Reminder" — system sends a payment reminder email using AR reminder template. |
| **5** | Customer pays via bank or Stripe payment link. |
| **6** | Payment recorded (automatically via Stripe webhook or manually by user). |
| **7** | Invoice marked Paid. AR balance updated. Cash reconciliation item created. |

**Alternate / Exception Flows**

| Customer queries invoice | User adds a note to invoice record. Customer portal shows note. Finance can issue credit note if error confirmed. |
| :---- | :---- |
| Debt referred to collections | User marks invoice "In Collections". Finance driver can route to third-party collections platform. |

**UC-26  Build and Publish a Customer Micro-Persona**   \[Marketing\]

| Actor | Marketing Manager / Owner |
| :---- | :---- |
| **Goal** | Define a target customer segment persona for use in AI campaign generation. |
| **Pre-conditions** | CRM has customer data (optional but enriches persona). Marketing module active. |
| **Post-conditions** | Persona saved and available for campaign targeting. |

**Main Flow**

| 1 | User opens Marketing → Micro-Personas → "+ New Persona". |
| :---: | :---- |
| **2** | User enters persona name and description. |
| **3** | User selects demographic attributes: age range, location, income bracket. |
| **4** | User enters behavioural attributes: primary needs, pain points, buying triggers, preferred channels. |
| **5** | Optionally: user clicks "Generate from CRM data" — AI analyses existing customer records to suggest attribute values. |
| **6** | User reviews and adjusts AI suggestions. Saves persona. |
| **7** | Persona is now available as a target in the AI Campaign Generator and segment builder. |

**Alternate / Exception Flows**

| Data not available | User manually enters all attributes. AI generation requires at least 20 customer records for meaningful analysis. |
| :---- | :---- |

## **Group F — Operations & Supply Chain**

**UC-27  Manage Inventory and Trigger a Purchase Order**   \[Operations / Finance\]

| Actor | Operations Manager / Purchasing |
| :---- | :---- |
| **Goal** | Monitor stock levels, identify low-stock items, and create purchase orders to replenish. |
| **Pre-conditions** | Inventory items configured with reorder points. Vendor records exist. |
| **Post-conditions** | Inventory replenished. PO fully received and closed. Vendor AP invoice matched to PO receipt. |

**Main Flow**

| 1 | Operations Manager opens Operations → Inventory Dashboard. |
| :---: | :---- |
| **2** | Low stock alerts shown: items at or below reorder point highlighted in red. |
| **3** | Manager clicks "\[Create PO\]" on a low-stock item. New PO form opens, pre-populated with item and recommended quantity. |
| **4** | Manager selects vendor (preferred vendor auto-selected if configured), sets delivery date. |
| **5** | Manager reviews and submits PO. Status: Submitted. |
| **6** | Vendor notification sent via CommDriver (email or EDI). |
| **7** | Vendor confirms. PO status → Confirmed. |
| **8** | Goods arrive. Manager opens PO → "Receive Goods". Enters actual quantities received. Discrepancies flagged. |
| **9** | Stock levels updated. Finance records goods receipt for AP matching. |

**Alternate / Exception Flows**

| Auto-reorder enabled | If auto-reorder configured for item, system creates PO draft automatically when reorder point breached. Manager approves draft. |
| :---- | :---- |
| Vendor out of stock | Manager selects alternative vendor from vendor list. Original vendor backorder noted on PO. |
| Short delivery | Partial goods receipt recorded. PO remains open for outstanding quantity. Finance AP updated for partial amount. |

**UC-28  Monitor OrgCPU Equipment Health**   \[Operations / ODD\]

| Actor | Operations Manager / Facilities Manager |
| :---- | :---- |
| **Goal** | View live status of connected machinery, respond to alerts, and log maintenance. |
| **Pre-conditions** | OrgCPU devices registered and active with IoT ODDs. |
| **Post-conditions** | Equipment health current. Maintenance logged. Cost posted. Downtime tracked for KRI reporting. |

**Main Flow**

| 1 | Manager opens Operations → Equipment Dashboard. |
| :---: | :---- |
| **2** | All registered OrgCPUs shown with live status (Running / Idle / Alert / Offline) and health score. |
| **3** | Manager clicks on a machine to view detail: current readings, last 24h history, next maintenance date. |
| **4** | On alert: manager sees alert description and recommended action. |
| **5** | Manager assigns maintenance task to a technician OrgExec via Work module. |
| **6** | Technician completes maintenance, logs completion and parts used in maintenance log. |
| **7** | Machine status updated. Next maintenance date advanced. Maintenance cost posted to Finance. |

**Alternate / Exception Flows**

| Machine offline | System escalates offline alert after 5 minutes. Risk module KRI "Equipment Uptime" updated. Dashboard shows critical flag. |
| :---- | :---- |
| ODD reading anomaly | ODD constraint on reading value triggers alert if outside normal range. AI OrgExec can be configured to diagnose pattern. |

**UC-29  Process a Supplier Invoice (AP)**   \[Finance / Operations\]

| Actor | Finance / Accounts Payable |
| :---- | :---- |
| **Goal** | Record an incoming supplier invoice, match to PO, approve, and schedule for payment. |
| **Pre-conditions** | Purchase order exists in Received status. Supplier invoice received. |
| **Post-conditions** | Supplier invoice paid. AP balance updated. GL posted. Bank reconciliation item created. |

**Main Flow**

| 1 | User opens Finance → Accounts Payable → "+ New Supplier Invoice". |
| :---: | :---- |
| **2** | User enters supplier, invoice number, date, and line items. |
| **3** | System suggests PO matches based on supplier and amount. User confirms match. |
| **4** | Three-way match validated: PO quantity, goods receipt quantity, invoice quantity must align. |
| **5** | If match: invoice auto-approved within configured tolerance. If discrepancy: held for manual review. |
| **6** | Approved invoice scheduled for payment on due date. Payment run processes on schedule via Finance driver. |
| **7** | Payment confirmed. Invoice marked Paid. Audit record created. |

**Alternate / Exception Flows**

| Three-way match fails | User reviews discrepancy report. Raises supplier query or adjusts goods receipt. Manual approval required from Finance Manager. |
| :---- | :---- |
| Early payment discount | System detects early payment discount term. Shows net amount if paid within discount window. User elects to accelerate. |

## **Group G — Risk & GRC**

**UC-32  Create and Maintain a Risk Register Entry**   \[Risk / GRC\]

| Actor | Risk Manager / Owner |
| :---- | :---- |
| **Goal** | Add a risk, assess it, assign an owner, and track mitigations. |
| **Pre-conditions** | Risk & GRC module active. User has GRC Write permission. |
| **Post-conditions** | Risk registered. Owner assigned. Heat map updated. KRI linked. Executive dashboard risk widget updated. |

**Main Flow**

| 1 | User opens Risk → Register → "+ New Risk". |
| :---: | :---- |
| **2** | User enters risk title, description, category, owner, and source (operational/financial/compliance/strategic). |
| **3** | User assesses inherent risk: selects Likelihood (1–5) and Impact (1–5). System calculates inherent risk score. |
| **4** | User enters mitigation actions (existing controls). Re-assesses residual likelihood and impact. |
| **5** | System calculates residual risk score. Plots on heat map. |
| **6** | Risk assigned to owner. Owner receives notification to confirm ownership. |
| **7** | System links risk to relevant KRI if available (e.g., cash runway KRI linked to "liquidity risk"). |
| **8** | Risk visible in register and heat map dashboard. |

**Alternate / Exception Flows**

| Risk escalates | If residual risk score exceeds threshold, system auto-escalates to board-level risk register and notifies exec. |
| :---- | :---- |
| KRI breach | Linked KRI breach auto-updates risk status to "Materialising". Incident log entry created. |

**UC-33  Respond to a KRI Threshold Breach**   \[Risk / GRC\]

| Actor | System → Executive / Risk Manager |
| :---- | :---- |
| **Goal** | Detect a KRI breach, alert the responsible executive, and record the response. |
| **Pre-conditions** | KRIs configured with thresholds. KRI monitoring running. |
| **Post-conditions** | Breach acknowledged. Incident created. Response underway. All actions audited. SDO risk layer updated. |

**Main Flow**

| 1 | System evaluates KRI against current data from linked OrgApp (Finance cash balance, HR utilisation, etc.). |
| :---: | :---- |
| **2** | KRI breaches threshold. System creates KRI breach record with timestamp, current value, and threshold value. |
| **3** | System emits risk.kri.breach event. Dashboard shows red breach card with sparkline trend. |
| **4** | Risk module notifies responsible OrgExec (from KRI configuration). |
| **5** | Responsible exec opens KRI dashboard, reviews breach detail. |
| **6** | Exec clicks "Acknowledge" — records that exec has seen the breach. |
| **7** | Exec clicks "Escalate" or "Create Incident" — routes to Risk Incident log for formal response tracking. |
| **8** | Response actions assigned. Progress tracked. KRI value monitored for recovery. |

**Alternate / Exception Flows**

| KRI recovers before action | If KRI value returns to within threshold before response is completed, system marks as "Auto-recovered" but keeps incident open for review. |
| :---- | :---- |
| False trigger | Exec marks breach as "False Positive" with reason. Threshold recalibration recommended. |

**UC-34  Run a GRC Compliance Assessment**   \[Risk / GRC\]

| Actor | Compliance Officer / Risk Manager |
| :---- | :---- |
| **Goal** | Evaluate the organisation's compliance posture against a framework (e.g., SOC 2, ISO 27001). |
| **Pre-conditions** | GRC framework configured. User has GRC Write permission. |
| **Post-conditions** | Assessment complete. Compliance score calculated. Gaps documented. Remediation tasks created. Report generated. |

**Main Flow**

| 1 | User opens Risk & GRC → Assessments → "+ New Assessment". |
| :---: | :---- |
| **2** | User selects compliance framework from library (SOC 2, ISO 27001, GDPR, local AML, etc.). |
| **3** | System generates assessment questionnaire from framework control set. |
| **4** | User works through controls: marks each as Compliant / Partially Compliant / Non-Compliant / Not Applicable. |
| **5** | For each gap: user enters remediation plan, owner, and target date. |
| **6** | System calculates overall compliance score and generates gap summary. |
| **7** | Assessment report generated (PDF). Can be shared with auditors or board. |
| **8** | Remediation tasks created in Work module. Progress tracked to next assessment. |

**Alternate / Exception Flows**

| Control evidence required | User attaches evidence documents to each control assertion from the document vault. |
| :---- | :---- |

**UC-35  Manage a Board / Governance Meeting**   \[Board / Legal\]

| Actor | Board Secretary / Executive |
| :---- | :---- |
| **Goal** | Schedule a board meeting, distribute papers, record minutes, and track resolutions. |
| **Pre-conditions** | Board Management module active. Board members registered as OrgExecs with BOARD-ODD. |
| **Post-conditions** | Meeting recorded. Minutes approved and stored. Resolutions in register. Action items assigned. |

**Main Flow**

| 1 | Secretary opens Board Management → Meetings → "+ New Meeting". |
| :---: | :---- |
| **2** | Enters meeting date, type (board/committee/AGM), location/video link, and agenda items. |
| **3** | System notifies board members. Members confirm attendance. |
| **4** | Secretary uploads board papers to meeting record. Members access via portal. |
| **5** | Meeting occurs. Secretary records attendance, discussions, and resolutions in minutes template. |
| **6** | Draft minutes circulated to board members for review. |
| **7** | Board members approve minutes (e-signature or portal acknowledgement). |
| **8** | Approved minutes and resolutions stored in corporate secretariat vault. Resolution register updated. |
| **9** | Action items from resolutions assigned to OrgExecs via Work module. |

**Alternate / Exception Flows**

| Quorum not met | System flags quorum shortfall. Meeting may proceed for discussion only; resolutions deferred until quorum achieved. |
| :---- | :---- |
| Urgent resolution | Emergency board consent process: resolution circulated by email; members sign individually; system records responses. |

## **Group H — OrgSystem (ODD, SDO, OrgApps)**

**UC-36  Install an OrgApp from the Marketplace**   \[OrgSystem / OrgApps\]

| Actor | Admin / Owner |
| :---- | :---- |
| **Goal** | Browse the OrgApp Marketplace, install a new app, and configure it for the OrgOS. |
| **Pre-conditions** | User has OrgApp Admin permission. OrgOS is running. |
| **Post-conditions** | OrgApp running. SDO topology updated. OrgDNA v+1 committed. App accessible to users with appropriate ODD permissions. |

**Main Flow**

| 1 | User opens OrgSystem → OrgApp Marketplace. |
| :---: | :---- |
| **2** | User browses by category or searches by name. Finds the desired OrgApp. |
| **3** | User clicks on app card. Detail page shows: description, permissions required, pricing tier, reviews, dependencies. |
| **4** | User clicks "Install". System checks tier eligibility and dependency availability. |
| **5** | Configuration wizard opens, driven by the OrgApp's config\_schema(). User fills in required settings. |
| **6** | User grants requested permissions. Reviews capability grants that this app will make available to OrgExecs. |
| **7** | User clicks "Complete Setup". System starts the OrgApp, registers it in OrgKernel, updates SDO topology. |
| **8** | New OrgApp visible in OrgOS Control Panel as Running. OrgDNA version incremented. |

**Alternate / Exception Flows**

| Tier restriction | App requires Enterprise tier but org is on Growth. System shows upgrade path. Admin can trial for 14 days. |
| :---- | :---- |
| Dependency missing | App requires Finance module which is not active. System prompts to enable dependency first. |
| Config validation fails | Required config field left empty. Wizard blocks progress until resolved. |

**UC-37  View and Interact with the Digital Twin (SDO)**   \[SDO / OrgSystem\]

| Actor | Executive / Owner / Digital Twin Analyst |
| :---- | :---- |
| **Goal** | Open the SDO view, understand the live organisational topology, and identify items needing attention. |
| **Pre-conditions** | SDO Engine active. At least 3 OrgApps running. |
| **Post-conditions** | SDO reviewed. Actions identified and initiated. Org health score visible. |

**Main Flow**

| 1 | User opens OrgSystem → Digital Twin (SDO). |
| :---: | :---- |
| **2** | SDO overview shows: live topology graph with all OrgApps, OrgExecs, and OrgCPUs as nodes; data flow edges between them; colour-coded health. |
| **3** | User clicks on a node (e.g., Finance OrgApp) to see detail: status, CPU%, last event, active records, linked OrgExecs. |
| **4** | User clicks "View Flow Map" for the interactive version with animated data flow. |
| **5** | SDO Health Score panel shows: score out of 100, breakdown by category (KRI breaches, ODD violations, OrgApp errors, compliance gaps). |
| **6** | User clicks "AI Optimisation Suggestions". OrgOptimiser analyses SDO state and returns top 3 recommendations. |
| **7** | User selects a recommendation, reviews detail, and launches the suggested action (e.g., adjust KRI threshold, re-schedule task, add OrgExec capacity). |

**Alternate / Exception Flows**

| Node offline | Offline node shown in grey. Click shows last known state and offline duration. |
| :---- | :---- |
| Optimiser suggestions not available | Insufficient data for meaningful suggestions (new OrgOS \< 30 days old). System shows date when suggestions will be available. |

**UC-38  Run an OrgOS Simulation (What-If)**   \[SDO / OrgSimulator\]

| Actor | Executive / Digital Twin Analyst / Strategist |
| :---- | :---- |
| **Goal** | Model the impact of a business decision on the organisation before committing to it. |
| **Pre-conditions** | SDO Engine active with OrgSimulator. Sufficient historical data exists. |
| **Post-conditions** | Simulation complete. Results exported. Decision informed by modelled impact. |

**Main Flow**

| 1 | User opens OrgSystem → Digital Twin → OrgSimulator → "+ New Simulation". |
| :---: | :---- |
| **2** | User selects simulation type: Headcount Change / Revenue Scenario / Cost Reduction / New Market Entry. |
| **3** | User sets scenario parameters (e.g., "Hire 3 staff in Q3; Revenue \+15% from October"). |
| **4** | User sets simulation horizon (3 months / 6 months / 12 months). |
| **5** | User clicks "Run Simulation". System applies scenario to current SDO state, projects forward using financial and operational models. |
| **6** | Results show: projected P\&L impact, cash runway change, KRI impact, headcount cost, risk score change. |
| **7** | User adjusts parameters and re-runs. Compares scenarios side by side. |
| **8** | User exports simulation report for decision-making or board presentation. |

**Alternate / Exception Flows**

| Simulation exceeds model confidence | System flags projections beyond 6 months as lower confidence. Sensitivity ranges shown rather than point estimates. |
| :---- | :---- |

**UC-39  Configure OrgOS Roles and Permissions**   \[Settings / ODD\]

| Actor | Admin / Owner |
| :---- | :---- |
| **Goal** | Define custom roles with granular per-module permissions and assign to users. |
| **Pre-conditions** | Admin permission held. |
| **Post-conditions** | Role created and assigned. Users gain new permissions. ODD templates linked and registered. |

**Main Flow**

| 1 | User opens Settings → Users & Roles → Roles tab → "+ Create Role". |
| :---: | :---- |
| **2** | User enters role name and description. |
| **3** | Permission matrix shown: rows \= OrgApps, columns \= access levels (None / Read / Write / Admin). |
| **4** | User sets permissions per module. |
| **5** | User optionally links role to an ODD template (so users assigned this role automatically get a matching ODD). |
| **6** | Role saved. User assigns role to team members from Users tab. |

**Alternate / Exception Flows**

| Conflicting permissions | If a user is assigned two roles, the more permissive of the two applies per module by default. Admin can set "least-privilege" mode. |
| :---- | :---- |
| Role used by AI agent | Role assigned to AI OrgExec: ODD enforcement applies on top of role permissions (ODD is the binding constraint). |

**UC-40  View the Full Audit Trail**   \[Settings / Audit\]

| Actor | Auditor / Compliance Officer / Admin |
| :---- | :---- |
| **Goal** | Search and export the immutable audit chain for a specified scope and period. |
| **Pre-conditions** | Audit trail populated (all actions audited by default). User has Audit Read permission. |
| **Post-conditions** | Audit records retrieved, reviewed, and exported. Chain integrity verified. |

**Main Flow**

| 1 | User opens Settings → Audit Log (or Finance → Audit if scoped to Finance). |
| :---: | :---- |
| **2** | User sets filters: actor, action type, resource, date range, outcome (Success/Denied/Escalated). |
| **3** | System returns matching audit records from immutable append-only store. |
| **4** | User can view individual record detail: actor, action, resource, timestamp, IP, device, session ID, outcome. |
| **5** | User clicks "Verify Hash" on any record to confirm cryptographic chain integrity. |
| **6** | User exports filtered results as CSV or PDF for external audit. |

**Alternate / Exception Flows**

| Hash verification fails | System flags integrity breach alert. Admin notified immediately. Security incident workflow triggered. |
| :---- | :---- |

**UC-41  Upgrade an ODD Contract**   \[ODD / OrgSystem\]

| Actor | Admin / HR Manager / AI Agent Manager |
| :---- | :---- |
| **Goal** | Update an OrgExec's ODD contract to a new version without interrupting their active work. |
| **Pre-conditions** | OrgExec has an active ODD. New ODD version prepared. |
| **Post-conditions** | ODD upgraded. Old version archived. New version active. Audit record created. OrgDNA updated. |

**Main Flow**

| 1 | User opens OrgSystem → OrgExec Registry → selects OrgExec. |
| :---: | :---- |
| **2** | User clicks "Edit ODD". ODD Editor opens showing current contract version. |
| **3** | User makes changes: updates capabilities, constraints, or data access grants. |
| **4** | User enters change reason. Clicks "Save as New Version". |
| **5** | System shows diff between old and new version. User confirms. |
| **6** | System applies graceful transition: in-flight actions complete under old contract. |
| **7** | New ODD version activated. Old version archived with transition timestamp. |
| **8** | All future actions validated against new ODD. Audit record: ODD upgraded, by whom, from/to versions. |

**Alternate / Exception Flows**

| In-flight escalation | An escalated action from old ODD is pending approval when ODD is updated. Escalation resolves under old ODD terms. |
| :---- | :---- |
| Downgrading capabilities | System warns if new ODD removes a capability currently in active use. User must confirm intent. |

## **Group I — DAO & Distributed Ledger**

**UC-42  Form a DAO**   \[DAO / DLT\]

| Actor | Franchise Owner / Group CEO / DAO Founder |
| :---- | :---- |
| **Goal** | Create a Decentralised Autonomous Organisation connecting multiple OrgOS instances under shared governance. |
| **Pre-conditions** | User has DAO Admin permission. At least two OrgOS instances are accessible. DAO module active. |
| **Post-conditions** | DAO live. DLT network active with consensus. Smart contracts deployed. All members' SDOs updated with DAO node connection. |

**Main Flow**

| 1 | User opens DAO & DLT → "+ Form New DAO". |
| :---: | :---- |
| **2** | User enters DAO name, description, and governance model (majority vote / supermajority / one-org-one-vote / token-weighted). |
| **3** | User sets quorum requirement and voting period. |
| **4** | User defines initial smart contract terms using the visual contract builder (royalties, brand standards, SLA terms). |
| **5** | User publishes current OrgDNA as the canonical DAO brand/base package. |
| **6** | User invites member organisations by entering their OrgOS endpoint or UME org ID. |
| **7** | Each invited org receives an invitation. Their admins review contract terms and multi-sign acceptance. |
| **8** | On all founding members accepting: DLT network initialised, genesis block committed, DAO goes live. |
| **9** | DAO dashboard shows member network, treasury, and ledger. |

**Alternate / Exception Flows**

| Member declines contract terms | Member org can propose amendments via governance channel before accepting. If unresolved, they remain non-member. |
| :---- | :---- |
| Consensus failure during genesis | If fewer than minimum members accept, DAO formation aborted and retry available. |

**UC-43  Accept an OrgDNA Update as a DAO Member**   \[DAO / OrgDNA\]

| Actor | Franchisee Owner / Member Org Admin |
| :---- | :---- |
| **Goal** | Receive, review, and accept an OrgDNA update broadcast by the parent org. |
| **Pre-conditions** | Organisation is an active DAO member. An OrgDNA update has been broadcast. |
| **Post-conditions** | OrgDNA updated. DLT block committed. Brand standards compliance confirmed. OrgDNA version history updated. |

**Main Flow**

| 1 | System receives OrgDNA broadcast from parent org via DAO inter-org event bus. |
| :---: | :---- |
| **2** | Admin receives notification: "New OrgDNA update v2.1 available from \[Parent Org\]". |
| **3** | Admin opens DAO & DLT → OrgDNA Updates. Sees broadcast with version number and change summary. |
| **4** | Admin clicks "View Diff". System shows component-by-component changes: new compliance pack, updated COA entries, revised ODD templates. |
| **5** | Admin reviews impact. Can add to staging environment for testing before applying. |
| **6** | Admin clicks "Accept Update". System applies OrgDNA diff to this OrgOS. Validates. Activates changes. |
| **7** | ORGDNA\_UPDATE transaction committed to DLT recording acceptance. |
| **8** | Brand standards smart contract check triggered: confirms this org is now compliant with parent's latest version. |

**Alternate / Exception Flows**

| Update introduces breaking change | System flags breaking change (e.g., COA restructure requiring data migration). Admin must complete migration wizard before accepting. |
| :---- | :---- |
| Mandatory update | If update is marked mandatory by parent with cure period, system shows deadline countdown. Non-acceptance after deadline triggers DAO smart contract warning. |
| Update not applicable | Admin can decline optional updates with reason. Recorded on DLT as acknowledged-not-accepted. |

**UC-44  Participate in a DAO Governance Vote**   \[DAO / Governance\]

| Actor | DAO Member Admin / Owner |
| :---- | :---- |
| **Goal** | Vote on a governance proposal submitted by another DAO member. |
| **Pre-conditions** | Active DAO membership. A governance proposal is open for voting. |
| **Post-conditions** | Vote cast and recorded on DLT. Result published. Approved actions executed or assigned. |

**Main Flow**

| 1 | System sends notification: "New governance proposal: \[Title\] — voting open until \[date\]". |
| :---: | :---- |
| **2** | Member opens DAO & DLT → Governance → open proposal. |
| **3** | Member reviews proposal: description, rationale, proposed action, supporting documents. |
| **4** | Member can post a comment or question to the governance discussion thread. |
| **5** | Member casts vote: For / Against / Abstain. |
| **6** | Vote recorded on DLT. Running tally updates in real time (anonymised until voting closes if configured). |
| **7** | On voting period close: system tallies votes, checks quorum. If quorum met and threshold passed: proposal approved. |
| **8** | Approved action executed automatically if it is a smart contract execution (e.g., fee change). Manual actions assigned as tasks. |

**Alternate / Exception Flows**

| Quorum not met | Proposal enters extended voting period. If still no quorum after extension, proposal lapses. |
| :---- | :---- |
| Urgent vote | Emergency proposals have 24-hour window with \>75% threshold required. All members notified by push \+ email immediately. |

**UC-45  View and Verify the DLT Ledger**   \[DAO / DLT\]

| Actor | Auditor / DAO Member / Compliance Officer |
| :---- | :---- |
| **Goal** | Browse inter-organisation transactions on the distributed ledger and verify block integrity. |
| **Pre-conditions** | Active DAO membership. DLT has transactions recorded. |
| **Post-conditions** | Transactions reviewed. Hashes verified. Export produced. |

**Main Flow**

| 1 | User opens DAO & DLT → Distributed Ledger. |
| :---: | :---- |
| **2** | User sees transaction list: block number, timestamp, type, from org, to org, amount (if financial). |
| **3** | User filters by transaction type, organisation, or date range. |
| **4** | User clicks a transaction to see full detail: all fields, payload hash, signatories, consensus state. |
| **5** | User clicks "Verify Hash". System recomputes block hash and confirms it matches stored hash and chain linkage. |
| **6** | User exports selected transactions as CSV for external audit or reporting. |

**Alternate / Exception Flows**

| Hash mismatch | System flags ledger integrity alert. DAO governance notified. Security incident raised. |
| :---- | :---- |
| Transaction not yet confirmed | Unconfirmed transactions shown in mempool view with pending indicator. |

**UC-46  Execute a Smart Contract Royalty Payment**   \[DAO / DLT / Finance\]

| Actor | System (automatic) |
| :---- | :---- |
| **Goal** | Automatically transfer a royalty payment from a franchisee to the parent org when the monthly period closes. |
| **Pre-conditions** | Franchise DAO active. Royalty smart contract deployed. Franchisee Finance period closes. |
| **Post-conditions** | Royalty paid automatically. Both orgs' Finance modules updated. DLT block committed. No manual intervention required. |

**Main Flow**

| 1 | Franchisee OrgOS Finance module emits finance.period.closed event at month end. |
| :---: | :---- |
| **2** | DAO inter-org event bus routes event to smart contract engine. |
| **3** | Smart contract evaluates royalty term: royalty\_rate × period gross revenue. |
| **4** | Smart contract calculates payment amount from franchisee Financial data (authorised read via DAO data sharing ODD). |
| **5** | Smart contract initiates treasury transfer: debits franchisee treasury, credits parent treasury. |
| **6** | Both OrgOS instances update their Finance modules: franchisee records royalty expense JE; parent records royalty income JE. |
| **7** | ROYALTY\_PAYMENT transaction committed to DLT with amount, from/to orgs, period reference, and contract ID. |
| **8** | Both orgs notified. DAO dashboard treasury balances update. |

**Alternate / Exception Flows**

| Insufficient franchisee treasury | Smart contract engine flags payment failure. DAO governance notified. Cure period contract term activated. |
| :---- | :---- |
| Period dispute | Franchisee disputes revenue figure. DAO dispute resolution process initiated. Payment held until resolved. |

## **Group J — Marketing & Work Management**

**UC-47  Generate AI Campaign Content**   \[Marketing\]

| Actor | Marketing Manager / Owner |
| :---- | :---- |
| **Goal** | Use the AI Campaign Generator to produce ready-to-publish social and email content for a target persona. |
| **Pre-conditions** | Marketing OrgApp active. At least one micro-persona defined. |
| **Post-conditions** | Content approved, scheduled, and published. Engagement tracking active. |

**Main Flow**

| 1 | User opens Marketing → AI Campaign Generator. |
| :---: | :---- |
| **2** | Selects target micro-persona, campaign goal, brand tone, and channels. |
| **3** | Clicks "Generate Campaign Content". |
| **4** | AI generates: post copy for each channel, hashtags, email subject line, email body, and campaign tagline. |
| **5** | User reviews generated content. Can regenerate individual pieces or all. |
| **6** | User edits content inline. Approves final versions. |
| **7** | Clicks "Schedule". Content pushed to Content Calendar with selected dates. |
| **8** | System publishes via connected social/email drivers at scheduled time. Engagement metrics collected. |

**Alternate / Exception Flows**

| Brand voice deviation | User flags a generated piece as off-brand. Feedback stored to improve future generation for this OrgOS. |
| :---- | :---- |

**UC-48  Create and Complete a Work Task**   \[Work / ODD\]

| Actor | Any OrgExec (Human or AI) |
| :---- | :---- |
| **Goal** | Create a task on the work board, assign it, progress it through to completion. |
| **Pre-conditions** | Work Management OrgApp active. User has Work Write permission. |
| **Post-conditions** | Task completed. Completion recorded. Work analytics updated. Any cross-module triggers fired (e.g., task completion triggers invoice milestone). |

**Main Flow**

| 1 | User opens Work → Sprint Board → "+ New Task". |
| :---: | :---- |
| **2** | Enters task title, description, due date, priority. |
| **3** | Assigns to an OrgExec. System checks assignee's ODD: confirms they have capability to perform this task type. |
| **4** | Task appears on assignee's board in Backlog. Assignee notified. |
| **5** | Assignee moves task to In Progress when work starts. |
| **6** | Assignee completes work. Moves task to Review (if review required per workflow config) or Done. |
| **7** | If review: reviewer approves or returns with feedback. |
| **8** | On Done: completion timestamp recorded. Work analytics updated. Any linked KPIs refreshed. |

**Alternate / Exception Flows**

| ODD capability mismatch | If assigned OrgExec's ODD does not include this task type as a capability, system warns user. Can override with justification. |
| :---- | :---- |
| Task overdue | At due date: task card flagged amber. Manager notified. Overdue duration tracked for Work KPI. |
| AI agent task | If assigned to AI OrgExec, agent picks up task via task queue API. Progress updates automatically. |

# **Part III: User Workflows**

User workflows describe complete end-to-end business processes as they flow through the UME OrgOS. Each workflow shows the full sequence of steps across actors, phases, and modules — including system automations, cross-module event cascades, and AI OrgExec actions. Workflows are grouped by the business process domain they represent.

| Group | Workflows | Domain |
| :---- | :---- | :---- |
| 1 — Business Setup & Onboarding | WF-01 to WF-04 | OrgOS setup, entity, team onboarding |
| 2 — Order-to-Cash | WF-05 to WF-09 | Sales, fulfilment, invoicing, payment |
| 3 — Procure-to-Pay | WF-10 to WF-13 | Procurement, receiving, AP, payment |
| 4 — Hire-to-Retire | WF-14 to WF-18 | HR lifecycle: hire, onboard, leave, review, offboard |
| 5 — Compliance & Risk | WF-19 to WF-22 | Compliance filings, risk response, audits |
| 6 — Finance Close | WF-23 to WF-25 | Period close, payroll, consolidated reporting |
| 7 — AI Agent Operations | WF-26 to WF-28 | AI OrgExec deployment, escalation, monitoring |
| 8 — DAO & Franchise Operations | WF-29 to WF-32 | DAO formation, royalties, OrgDNA, governance |

| Workflow Legend User Action   — A step performed directly by a human user or OrgExec. System        — An automated action performed by the OrgKernel or an OrgApp. Decision      — A conditional branch point where the flow diverges. Automation    — An action triggered by an event, timer, or AI OrgExec. External      — An action performed outside UME (e.g., filing with an authority, customer paying). |
| :---- |

## **Group 1 — Business Setup & Onboarding**

**WF-01  Launch a New OrgOS from Template**

| Trigger | New user creates a UME account and wants a running OrgOS within one session. |
| :---- | :---- |
| **Actors** | New User (Owner/Founder) |
| **Modules** | Auth · OrgOS Provisioner · Legal · Finance · Dashboard |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | New User | Visits ume.io, enters name, org name, email, password. Accepts Terms. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | Auth | Sends 6-digit OTP email. Awaits verification. |
| **3** | **User Action** | New User | Enters OTP. Account verified. |
| **4** | **System** | OrgOS Provisioner | Presents Template Gallery (12+ industry templates). User selects closest match. |
| **5** | **User Action** | New User | Reviews pre-selected modules in Module Configurator. Toggles adjustments. Pricing updates live. |
| **6** | **User Action** | New User | Enters legal entity type, registered address, jurisdiction, and tax ID. |
| **7** | **System** | Legal / Chombo | Fetches compliance framework for jurisdiction. Pre-generates compliance calendar. |
| **8** | **User Action** | New User | Optionally invites first team members with roles. |
| **9** | **User Action** | New User | Clicks "Launch OrgOS". |
| **10** | **System** | OrgOS Provisioner | Provisions OrgKernel, all selected OrgApps, DB schema namespaces, COA, compliance calendar, default ODDs. |
| **11** | **System** | OrgOS Provisioner | Displays step-by-step boot progress log in real time. All steps tick green. |
| **12** | **System** | OrgDNA Manager | Commits OrgDNA v1.0.0 for this new OrgOS instance. |
| **13** | **System** | Dashboard | Renders Executive Dashboard. Compliance calendar widget shows first upcoming obligation. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| orgos.provisioned | SDO Engine (initialises digital twin), Analytics (creates baseline KPIs) |
| legal.compliance\_calendar.generated | Dashboard (compliance widget), Risk module (populates initial KRI set) |
| orgdna.version.created | Audit log, OrgDNA Manager |
| auth.user.account\_created | Audit log, Welcome email via CommDriver |

**Success Criteria**

✓  OrgOS fully provisioned and all selected OrgApps in Running state.

✓  Compliance calendar populated with all jurisdiction-specific obligations.

✓  Chart of accounts generated from industry template.

✓  OrgDNA v1.0.0 committed. SDO digital twin initialised.

✓  User is on Executive Dashboard within 90 seconds of clicking "Launch OrgOS".

**WF-02  Onboard a New Employee End-to-End**

| Trigger | HR Manager initiates new hire process for an approved position. |
| :---- | :---- |
| **Actors** | HR Manager → New Employee → IT Admin (automated) |
| **Modules** | HR · Legal · Finance · IT · Portal · ODD |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | HR Manager | Opens HR → People → New Hire wizard. Enters personal info, role, department, OrgExec type: Human. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | HR Manager | Selects ODD template for role (e.g., FTE-ODD-v2). Reviews auto-populated capabilities and constraints. |
| **3** | **User Action** | HR Manager | Uploads right-to-work documents. Enters salary, pay schedule, benefits selections. |
| **4** | **User Action** | HR Manager | Reviews summary screen. Confirms. Clicks "Create Employee". |
| **5** | **System** | HR Module | Creates employee record. Registers OrgExec in ODDBus with generated ODD. Emits hr.employee.created. |
| **6** | **Automation** | Legal Module | Receives event. Generates employment contract from template. Sends to employee for e-signature. |
| **7** | **Automation** | Finance Module | Receives event. Creates payroll account. Adds to next payroll run. |
| **8** | **Automation** | IT Module | Receives event. Generates provisioning request for email, Slack, system access per ODD data access grants. |
| **9** | **Automation** | Portal Module | Receives event. Creates employee portal account. Sends welcome email with login link. |
| **10** | **External** | New Employee | Signs employment contract via e-sign link. |
| **11** | **System** | Legal Module | Receives signature confirmation. Stores executed contract in document vault. Emits legal.contract.executed. |
| **12** | **System** | HR Module | Timeline entry: "Employment contract signed". Employee status → Active. |
| **13** | **Automation** | SDO Engine | Adds new OrgExec node to digital twin topology. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.employee.created | Legal (contract), Finance (payroll), IT (provisioning), Portal (welcome email), SDO (topology update) |
| legal.contract.executed | HR (timeline entry), Document Vault (archive), Audit log |
| odd.contract.registered | ODDBus (enforce from first login), Audit log |
| it.provisioning.requested | IT Module (queues provisioning tasks), connected system drivers |

**Success Criteria**

✓  Employee record active with ODD registered and enforced.

✓  Employment contract executed and stored in document vault.

✓  Payroll account created and included in next payroll cycle.

✓  Portal access granted. Employee can log in with assigned ODD-scoped permissions.

✓  All five cross-module cascade steps completed within 30 seconds of "Create Employee".

**WF-03  Register an Entity and Generate Compliance Calendar**

| Trigger | Owner setting up a new legal entity within existing OrgOS. |
| :---- | :---- |
| **Actors** | Owner / Legal Officer |
| **Modules** | Legal / Chombo · Dashboard · Risk |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Owner | Opens Legal & Compliance → Entities → New Entity. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Owner | Enters entity name, type (LLC/Ltd/etc.), registration number, registered address, jurisdiction. |
| **3** | **System** | Legal / Chombo | Queries compliance framework database for entity type \+ jurisdiction combination. |
| **4** | **System** | Legal / Chombo | Generates draft compliance calendar: all statutory filings, annual returns, tax deadlines, licence renewals. |
| **5** | **User Action** | Owner | Reviews generated obligations. Suppresses any not applicable. Adds any custom obligations. |
| **6** | **User Action** | Owner | Links entity to Finance (assigns COA entity tag) and HR (assigns headcount pool). |
| **7** | **User Action** | Owner | Saves entity. Calendar activated. |
| **8** | **System** | Dashboard | Compliance calendar widget updates. Next obligation for this entity shown with countdown. |
| **9** | **System** | Risk Module | Receives event. Adds jurisdiction-specific compliance risk entries to risk register template. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| legal.entity.registered | Finance (entity COA tag), HR (entity headcount pool), Dashboard (compliance widget) |
| legal.compliance\_calendar.generated | Risk module (compliance risk entries), Dashboard, Notification service (upcoming deadline alerts) |

**Success Criteria**

✓  Entity registered with all fields validated.

✓  Compliance calendar populated — all filing obligations for entity type and jurisdiction present.

✓  Entity linked to Finance and HR modules.

✓  Dashboard compliance widget reflects new entity obligations.

**WF-04  OrgDNA Export and Franchise Clone**

| Trigger | Franchise owner wants to spin up a new franchisee OrgOS from their proven config. |
| :---- | :---- |
| **Actors** | Franchise Owner / Admin |
| **Modules** | OrgDNA Manager · OrgOS Provisioner · DAO |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Franchise Owner | Opens OrgSystem → OrgDNA Manager → Export OrgDNA. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | OrgDNA Manager | Serialises full OrgOS config: kernel config, all OrgApp settings, ODD templates, COA, compliance packs, RBAC. |
| **3** | **System** | OrgDNA Manager | Runs validation. Confirms all dependencies satisfied. No transactional data included. |
| **4** | **System** | OrgDNA Manager | Produces versioned OrgDNA package. Stores in OrgDNA vault. Ready for export or clone. |
| **5** | **User Action** | Franchise Owner | Clicks "Clone to New OrgOS". Enters franchisee org name, registered address, jurisdiction. |
| **6** | **User Action** | Franchise Owner | Adjusts jurisdiction-specific compliance packs for franchisee location. Reviews COA if any local adjustments needed. |
| **7** | **User Action** | Franchise Owner | Confirms clone. Clicks "Provision New OrgOS". |
| **8** | **System** | OrgOS Provisioner | Provisions new OrgOS instance from cloned OrgDNA: new org\_id, isolated DB namespace, all OrgApps booted. |
| **9** | **System** | OrgDNA Manager | Commits OrgDNA v1.0.0 on new instance. Records parent OrgDNA lineage (parent\_dna\_id set). |
| **10** | **System** | Notification | Sends franchisee access credentials email. New OrgOS live and accessible. |
| **11** | **Automation** | DAO Module | If franchise DAO exists: automatically sends DAO join invitation to new OrgOS. Franchisee admin receives invite notification. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| orgdna.version.created | OrgDNA vault (archive), Audit log |
| orgos.provisioned | New OrgOS SDO Engine, New OrgOS Analytics, Notification service |
| dao.join.invitation\_sent | Franchisee OrgOS DAO module (shows pending invitation) |

**Success Criteria**

✓  New OrgOS live within 90 seconds of confirming provisioning.

✓  All franchise-standard OrgApps running with correct configuration cloned from parent.

✓  Franchisee has full independent OrgOS — operationally sovereign, brand-aligned.

✓  DAO join invitation sent if franchise DAO exists.

✓  OrgDNA parent-child lineage recorded for brand standards tracking.

## **Group 2 — Order-to-Cash**

**WF-05  Dry Cleaning Order — Full Cycle (Bob & Alice)**

| Trigger | Customer drops off garments for dry cleaning at the counter. |
| :---- | :---- |
| **Actors** | Front Desk Staff · Cleaning OrgCPU (washer/dryer) · Customer (external) · Finance |
| **Modules** | CRM / Sales · Operations · Finance · Communications |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Front Desk Staff | Opens CRM → Order Board → New Order. Searches for customer or creates new contact. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Front Desk Staff | Enters items (shirt × 3, suit × 1), special instructions, and collection date. Price auto-calculated. |
| **3** | **System** | CRM Module | Creates order. Card placed in "Received" column of kanban. Order ticket printed if printer connected. |
| **4** | **User Action** | Staff | Tags garments and moves to cleaning queue. Moves kanban card to "Cleaning". |
| **5** | **Automation** | Scheduling AI OrgExec | Scheduling agent reads order queue. Assigns optimal machine (OrgCPU) slot based on current load and ETA. |
| **6** | **System** | OrgCPU (Washer) | Machine processes garments. Reports cycle status via IoT ODD to Operations dashboard. |
| **7** | **User Action** | Staff | Garments cleaned and pressed. Moves kanban card to "Ready". |
| **8** | **Automation** | CRM / Comms | Status change to "Ready" triggers automated SMS to customer: "Your order is ready for collection." |
| **9** | **External** | Customer | Customer arrives and collects garments. |
| **10** | **User Action** | Staff | Confirms collection. Moves order to "Collected". System auto-generates invoice. |
| **11** | **Automation** | Finance Module | Receives order.collected event. Posts revenue journal entry. Updates AR or records payment if paid in-store. |
| **12** | **System** | Analytics | Order KPI updated: average turnaround time, revenue per order, machine utilisation. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| sales.order.created | Operations (schedule slot), Analytics (order count KPI) |
| sales.order.status\_changed → Ready | CommDriver (sends customer SMS notification) |
| sales.order.collected | Finance (revenue JE), CRM (customer history update), Analytics (revenue KPI) |
| orgcpu.cycle.completed | Operations dashboard (machine utilisation), SDO (OrgCPU node update) |

**Success Criteria**

✓  Order fulfilled and collected. Customer notified automatically at each status change.

✓  Revenue posted to Finance automatically on collection.

✓  Machine utilisation recorded. Scheduling agent improves future assignments from this data.

✓  Customer history updated for future loyalty and marketing use.

**WF-06  B2B Sales Deal — Lead to Invoice**

| Trigger | Sales rep qualifies a new inbound lead for a B2B services engagement. |
| :---- | :---- |
| **Actors** | Sales Rep · Sales Manager · Finance |
| **Modules** | CRM / Sales · Finance · Legal · Work |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Sales Rep | Creates new Deal in CRM pipeline. Links to company contact. Sets estimated value and close date. Stage: Qualified. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Sales Rep | Logs discovery call activity. Updates deal notes. Moves deal to "Proposal" stage. |
| **3** | **User Action** | Sales Rep | Creates proposal using Legal document template. Sends via e-sign integration. |
| **4** | **External** | Customer | Customer reviews proposal and signs. |
| **5** | **Automation** | Legal Module | Detects e-sign completion. Emits legal.contract.executed. Stores signed proposal in document vault. |
| **6** | **System** | CRM Module | Receives contract event. Moves deal to "Won". Creates project/work order linked to deal. |
| **7** | **Automation** | Finance Module | Receives deal.won event. Creates billing schedule based on contract terms (milestone or recurring). |
| **8** | **User Action** | Sales Rep/Manager | Reviews auto-created billing milestones. Confirms first invoice details. |
| **9** | **System** | Finance Module | Generates and sends first invoice. Updates pipeline dashboard (revenue recognised). |
| **10** | **System** | Work Module | Creates project tasks from contract scope. Assigns to delivery team OrgExecs. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| crm.deal.won | Finance (billing schedule), Work (project tasks), Analytics (win rate KPI) |
| legal.contract.executed | CRM (deal status update), Finance (contract billing reference), Document Vault |
| finance.invoice.sent | CRM (deal revenue update), Analytics (revenue pipeline) |

**Success Criteria**

✓  Deal won and contract executed. Stored in document vault.

✓  Billing schedule created matching contract terms.

✓  First invoice sent within the session.

✓  Project tasks created and assigned to delivery team.

✓  Sales pipeline and forecast updated automatically.

**WF-07  E-commerce Order — OrgCPU (POS) to Fulfilment**

| Trigger | Customer makes a purchase via POS terminal (OrgCPU) in physical retail store. |
| :---- | :---- |
| **Actors** | Customer (external) · POS Terminal (OrgCPU) · Inventory · Finance |
| **Modules** | CRM · Operations / Inventory · Finance · Communications |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | External | Customer | Customer presents items at POS terminal. Staff processes sale. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | POS OrgCPU | POS records sale. IOT-ODD governs data reporting: emits sale event with items, amounts, payment method. |
| **3** | **Automation** | Operations Module | Receives sale event. Decrements inventory quantities for sold items. Checks reorder points. |
| **4** | **Decision** | Operations Module | Are any sold items now at or below reorder point? |
| **5** | **Automation** | Operations Module | IF YES: creates PO draft for replenishment. Alerts Purchasing OrgExec. |
| **6** | **Automation** | Finance Module | Receives sale event. Posts revenue journal entry. Updates daily cash position. |
| **7** | **Automation** | CRM Module | If customer identified (loyalty card): updates purchase history. Evaluates re-engagement campaign eligibility. |
| **8** | **System** | Analytics | Updates real-time sales KPIs: revenue today, units sold, top SKUs, margin by product. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| orgcpu.sale.recorded | Operations (inventory decrement), Finance (revenue JE), CRM (customer history), Analytics (KPI update) |
| operations.inventory.low\_stock | Operations (auto-draft PO), Dashboard (low stock alert), Risk (KRI update if critical item) |

**Success Criteria**

✓  Sale recorded and revenue posted in real time via OrgCPU ODD integration.

✓  Inventory immediately updated. Reorder triggered if threshold breached.

✓  Customer history updated for marketing segmentation.

✓  Finance GL reflects sale within one event propagation cycle.

**WF-08  Invoice Payment — Customer Pays via Stripe**

| Trigger | Customer clicks payment link in invoice email and completes payment. |
| :---- | :---- |
| **Actors** | Customer (external) · Stripe (external) · Finance Module (automation) |
| **Modules** | Finance · CRM · Dashboard |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | External | Customer | Clicks payment link in invoice email. Stripe checkout page loads with invoice amount. |
| :---: | :---- | :---- | :---- |
| **2** | **External** | Customer | Enters card details. Submits payment. |
| **3** | **External** | Stripe | Processes payment. Sends webhook to UME Finance driver. |
| **4** | **System** | Finance Driver | Receives Stripe webhook. Validates amount and invoice reference. |
| **5** | **Automation** | Finance Module | Marks invoice as Paid. Posts cash receipt journal entry (Debit: Bank, Credit: AR). |
| **6** | **Automation** | Finance Module | Creates bank reconciliation item. Updates AR ageing report. Recalculates cash flow forecast. |
| **7** | **Automation** | CRM Module | Receives payment event. Updates order/deal record as Paid. Clears any overdue AR flag on customer record. |
| **8** | **Automation** | Dashboard | Cash position widget updates. AR outstanding balance reduces. Revenue chart updates. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.invoice.paid | CRM (order status paid), AR ageing (balance update), Cash flow forecast (update), Analytics (cash KPI) |
| finance.journal\_entry.posted | Audit log, SDO (financial state update) |

**Success Criteria**

✓  Invoice marked Paid within seconds of Stripe webhook receipt.

✓  Cash receipt JE posted. AR balance updated. Bank reconciliation item created.

✓  Customer record and order history updated automatically.

✓  No manual intervention required from payment initiation to GL posting.

**WF-09  Accounts Receivable Ageing and Collections**

| Trigger | Finance Manager reviews overdue invoices at end of month and initiates collection actions. |
| :---- | :---- |
| **Actors** | Finance Manager · Customer (external) |
| **Modules** | Finance · CRM · Communications |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Finance Manager | Opens Finance → AR Ageing. Reviews outstanding invoices grouped by age bucket. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Finance Manager | Filters to 30+ days overdue. Selects priority invoices by amount. |
| **3** | **User Action** | Finance Manager | For each priority invoice: clicks "Send Reminder". System sends payment reminder email. |
| **4** | **External** | Customer | Customer receives reminder. Some pay via link. Others contact to discuss. |
| **5** | **Decision** | Finance Manager | Is invoice 60+ days overdue without payment commitment? |
| **6** | **User Action** | Finance Manager | IF YES: marks invoice "In Collections". Logs collection action. Adds note to customer CRM record. |
| **7** | **Automation** | Finance Module | Creates bad debt provision entry if 90+ days (if auto-provision configured). |
| **8** | **Automation** | Risk Module | Receives collection escalation. Updates AR concentration KRI if single customer represents large overdue balance. |
| **9** | **User Action** | Finance Manager | Runs monthly AR report. Presents to owner with ageing summary and recovery forecast. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.invoice.overdue | Risk module (KRI update), Dashboard (AR ageing alert), CRM (customer credit flag) |
| finance.ar.collections\_escalated | Risk module (KRI), CRM (customer record flag), Audit log |

**Success Criteria**

✓  All overdue invoices actioned with reminders sent.

✓  Collections cases escalated with documentation.

✓  Risk module KRI updated to reflect AR position.

✓  Monthly AR report available for management review.

## **Group 3 — Procure-to-Pay**

**WF-10  Purchase Order — Raise to Receive**

| Trigger | Inventory falls below reorder point. Purchasing manager raises a PO and receives goods. |
| :---- | :---- |
| **Actors** | Operations Manager · Supplier (external) · Finance |
| **Modules** | Operations · Finance · Inventory · Communications |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Operations Module | Inventory check detects stock below reorder point. Creates PO draft with preferred vendor and recommended quantity. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | Dashboard | Low-stock alert appears in Operations widget. Finance widget shows projected AP liability. |
| **3** | **User Action** | Operations Manager | Reviews PO draft. Adjusts quantity if needed. Selects delivery date. |
| **4** | **User Action** | Operations Manager | Submits PO. If above ODD approval threshold: routes to Finance Manager for approval. |
| **5** | **Automation** | Communications | PO confirmation sent to supplier by email (or EDI if connected). |
| **6** | **External** | Supplier | Supplier confirms PO. Dispatches goods. |
| **7** | **User Action** | Operations Manager | Goods arrive. Opens PO → Receive Goods. Enters quantities received. Flags any discrepancies. |
| **8** | **System** | Operations Module | Updates inventory quantities. Marks PO as Received. Emits operations.po.goods\_received. |
| **9** | **Automation** | Finance Module | Receives goods\_received event. Creates AP invoice record. Awaits supplier invoice for three-way match. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| operations.inventory.low\_stock | Operations (draft PO), Dashboard (alert), Risk (KRI if critical item) |
| operations.po.submitted | CommDriver (supplier email), Audit log, Finance (AP accrual) |
| operations.po.goods\_received | Inventory (quantity update), Finance (AP invoice pending), Analytics (inventory KPI) |

**Success Criteria**

✓  Stock replenished. Inventory quantities updated in real time.

✓  PO fully documented from draft to receipt.

✓  AP record created and matched to PO receipt. Ready for supplier invoice.

✓  No manual inventory counting required — OrgCPU sensors update automatically where connected.

**WF-11  Supplier Invoice — Three-Way Match and Payment**

| Trigger | Supplier sends invoice for delivered goods. Finance processes payment. |
| :---- | :---- |
| **Actors** | Finance / AP · Supplier (external) |
| **Modules** | Finance · Operations |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | External | Supplier | Supplier emails invoice (PDF or EDI). Finance receives. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Finance AP | Opens Finance → AP → New Supplier Invoice. Enters or imports invoice details. |
| **3** | **System** | Finance Module | Runs three-way match: PO quantities ↔ goods receipt quantities ↔ invoice quantities and amounts. |
| **4** | **Decision** | Finance Module | Does three-way match pass within tolerance? |
| **5** | **Automation** | Finance Module | IF PASS: invoice auto-approved. Scheduled for payment on due date. |
| **6** | **User Action** | Finance Manager | IF FAIL: Finance Manager reviews discrepancy report. Contacts supplier to resolve. Approves manually once resolved. |
| **7** | **System** | Finance Module | On due date: payment processed via Banking driver. Journal entry posted (Debit: AP, Credit: Bank). |
| **8** | **System** | Finance Module | Invoice marked Paid. Bank reconciliation item created. AP ageing updated. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.ap.invoice\_approved | Finance (payment schedule), Audit log |
| finance.ap.payment\_processed | Finance (GL post), Bank reconciliation (match item), Analytics (cash flow update) |

**Success Criteria**

✓  Supplier paid on time. No manual matching errors.

✓  Three-way match documented in audit trail.

✓  AP ageing and cash flow forecast updated automatically.

**WF-12  Expense Claim — Staff Submits and Finance Approves**

| Trigger | Employee incurs a work expense and submits for reimbursement. |
| :---- | :---- |
| **Actors** | Employee (OrgExec) · Finance Manager |
| **Modules** | Finance · HR · Portal |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Employee | Opens Employee Portal → Expenses → New Claim. Enters amount, category, date, description. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Employee | Uploads photo of receipt. Submits claim. |
| **3** | **System** | Finance Module | Validates claim against employee ODD (expense category permitted, amount within per-claim limit). |
| **4** | **Decision** | Finance Module | Does amount exceed the employee ODD approval threshold? |
| **5** | **Automation** | Finance Module | IF BELOW: auto-approves. Posts accrual entry. Schedules for next payroll run. |
| **6** | **Automation** | Finance Module | IF ABOVE: routes to Finance Manager for approval. Notification sent. |
| **7** | **User Action** | Finance Manager | Reviews claim and receipt. Approves or declines with comment. |
| **8** | **Automation** | Finance Module | On approval: posts expense JE. Includes in next payroll payment. Employee notified. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.expense.submitted | Finance (ODD validation, approval routing), Audit log |
| finance.expense.approved | Payroll module (include in next run), Employee portal (status update), Audit log |

**Success Criteria**

✓  Expense reimbursed in next payroll cycle.

✓  Receipt stored. Expense category and ODD compliance documented.

✓  Finance GL updated. No lost receipts or manual spreadsheets.

**WF-13  Contract Renewal — Legal to Finance**

| Trigger | A vendor contract is approaching expiry. Legal flags for renewal. Finance is notified of rate change. |
| :---- | :---- |
| **Actors** | Legal Officer · Owner / Finance Manager |
| **Modules** | Legal · Finance · Communications |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Legal Module | Contract expiry date triggers 60-day renewal reminder. Compliance calendar entry highlighted. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | Notification Service | Sends renewal alert to Legal Officer and Owner. |
| **3** | **User Action** | Legal Officer | Reviews contract. Decides to renew. Contacts vendor to negotiate terms. |
| **4** | **External** | Vendor | Vendor provides updated contract with new rate. |
| **5** | **User Action** | Legal Officer | Updates contract record in Legal vault: new rates, new expiry date. Generates renewal doc from template. |
| **6** | **User Action** | Legal Officer | Sends for e-signature. Both parties sign. |
| **7** | **Automation** | Legal Module | Detects e-sign completion. Archives renewed contract. Emits legal.contract.renewed. |
| **8** | **Automation** | Finance Module | Receives renewal event. Updates recurring AP entry with new rate. Alerts Finance Manager of rate change. |
| **9** | **System** | Legal Module | Sets new 60-day renewal reminder at new expiry date. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| legal.contract.renewal\_due | Notification service (alert to Legal Officer and Owner), Dashboard (compliance item) |
| legal.contract.renewed | Finance (AP rate update), Document Vault (archive new contract), Audit log |

**Success Criteria**

✓  Contract renewed before expiry. No service interruption.

✓  New rates updated in Finance AP automatically.

✓  Next renewal reminder set. No risk of missing expiry.

## **Group 4 — Hire-to-Retire**

**WF-14  Annual Leave Request and Approval**

| Trigger | Employee requests annual leave through the portal. |
| :---- | :---- |
| **Actors** | Employee (OrgExec) · Line Manager |
| **Modules** | HR · Portal · Operations · Payroll |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Employee | Opens Employee Portal → Leave → New Leave Request. Selects type: Annual Leave. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Employee | Selects date range. System shows current balance (18 days remaining) and balance after approval (14 days). |
| **3** | **System** | HR Module | Validates request: sufficient balance, no blackout dates, no scheduling conflict with other approved leave. |
| **4** | **User Action** | Employee | Adds optional message to manager. Submits. |
| **5** | **Automation** | HR Module | Notification sent to Line Manager: "Alice has requested leave \[dates\]. Action required." |
| **6** | **User Action** | Line Manager | Opens HR → Leave Inbox. Reviews request alongside team leave calendar and order queue. |
| **7** | **Decision** | Line Manager | Can the team absorb the absence for these dates? |
| **8** | **User Action** | Line Manager | IF YES: Approves. IF NO: Declines with suggested alternative dates. |
| **9** | **Automation** | HR Module | On approval: deducts from leave balance, updates team calendar, notifies employee by email. |
| **10** | **Automation** | Operations Module | Receives leave.approved event. Marks staff member unavailable in scheduling calendar for those dates. |
| **11** | **Automation** | Payroll Module | Receives leave.approved event. Records annual leave days for payroll period calculation. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.leave.requested | Notification service (manager alert), Audit log |
| hr.leave.approved | Employee portal (balance update, confirmation email), Operations (schedule update), Payroll (period record) |
| hr.leave.declined | Employee portal (decline notification with reason) |

**Success Criteria**

✓  Leave approved or declined promptly. Employee notified.

✓  Leave balance updated. Schedule updated. Payroll informed.

✓  Manager had full context (team calendar) to make informed decision.

**WF-15  Payroll Run — End-to-End**

| Trigger | Monthly payroll processing for all active employees. |
| :---- | :---- |
| **Actors** | HR / Payroll Admin · Finance Manager |
| **Modules** | HR · Finance · Portal · Legal |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | System | HR / Payroll | At configured payroll date: system generates payroll draft for all active employees with contracted salaries. |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | HR Module | Imports approved timesheets (for hourly staff), approved leave (for AL days), approved expenses for inclusion. |
| **3** | **User Action** | Payroll Admin | Reviews payroll draft. Checks each employee: gross pay, deductions (tax, NI/FICA, pension), net pay. |
| **4** | **User Action** | Payroll Admin | Enters any manual adjustments: bonuses, overtime, commission payments. |
| **5** | **Decision** | Payroll Admin | Does total payroll exceed dual-sign threshold (per ODD)? |
| **6** | **User Action** | Finance Manager | IF YES: Finance Manager reviews and co-approves payroll run. |
| **7** | **User Action** | Payroll Admin | Confirms payroll run. Clicks "Process Payroll". |
| **8** | **System** | Finance Module | Posts payroll journal entry: Gross Wages Dr, Tax Liability Cr, Net Wages Payable Cr, Pension Contribution Cr. |
| **9** | **Automation** | HR / Portal | Generates payslips for all employees. Payslips published to employee portal. Email notification sent. |
| **10** | **Automation** | Legal / Chombo | Tax liability and payroll tax filing due date added to compliance calendar. |
| **11** | **System** | Finance Module | Net wages payment batch queued for banking driver. Processed on configured payment date. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.payroll.run\_confirmed | Finance (GL posting), Portal (payslips), Legal (tax liability calendar entry), Audit log |
| finance.journal\_entry.posted | Audit log, SDO (financial state update) |
| hr.payroll.tax\_due | Compliance calendar, Notification service (upcoming tax payment reminder) |

**Success Criteria**

✓  All employees paid correctly and on time.

✓  Payslips available in portal within minutes of processing.

✓  Payroll journal entry posted. Tax liability in compliance calendar.

✓  Full audit trail: who ran payroll, who approved (if dual-sign), every line item.

**WF-16  Employee Offboarding**

| Trigger | An employee resigns. HR initiates offboarding process. |
| :---- | :---- |
| **Actors** | HR Manager · IT Admin (automated) · Finance |
| **Modules** | HR · Legal · Finance · IT · Portal |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | HR Manager | Opens employee record → Offboard Employee. Enters last day, reason, notice period status. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | HR Module | Generates offboarding checklist: exit interview, equipment return, final payslip, access revocation, legal docs. |
| **3** | **User Action** | HR Manager | Schedules exit interview. Records outcomes in HR system. |
| **4** | **Automation** | Legal Module | Generates separation agreement (if applicable) from template. Sends for e-signature. |
| **5** | **User Action** | HR Manager | Works through checklist: equipment return confirmed, exit interview completed, final payslip reviewed. |
| **6** | **Automation** | Finance Module | Calculates final pay: outstanding salary, accrued holiday pay, any statutory payments. Posts to next payroll. |
| **7** | **System** | HR Module | On last day: emits hr.employee.offboarded event. |
| **8** | **Automation** | IT Module | Receives offboard event. Triggers deprovisioning of all system access via device drivers (email, Slack, other SSO apps). |
| **9** | **Automation** | ODDBus | Suspends employee ODD. Employee can no longer perform any OrgOS actions. |
| **10** | **System** | HR Module | Employee status → Inactive. Record archived with retention policy applied. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.employee.offboarded | IT (deprovisioning), ODDBus (ODD suspension), Finance (final pay), Portal (access revocation), Audit log |
| odd.contract.suspended | ODDBus (immediate enforcement), Audit log |
| it.deprovisioning.completed | HR (checklist item tick), Audit log |

**Success Criteria**

✓  Employee access revoked on last day. ODD suspended. No orphaned accounts.

✓  Final pay calculated and included in next payroll.

✓  Separation documents signed and archived.

✓  Full offboarding audit trail maintained.

**WF-17  Performance Review Cycle**

| Trigger | Annual performance review cycle initiated by HR for all staff. |
| :---- | :---- |
| **Actors** | HR Manager · Line Manager · Employee |
| **Modules** | HR · Work · Portal |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | HR Manager | Opens HR → Performance → Start Review Cycle. Selects cycle type (Annual), sets dates, selects participants. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | HR Module | Creates review records for all included employees. Assigns to their line managers. |
| **3** | **Automation** | Portal | Employees receive portal notification to complete self-assessment by \[date\]. |
| **4** | **User Action** | Employee | Completes self-assessment: rates goals, competencies, achievements. Submits. |
| **5** | **Automation** | HR Module | Notifies line manager that self-assessment is ready for review. |
| **6** | **User Action** | Line Manager | Completes manager assessment. Optionally requests 360 feedback from peers. |
| **7** | **User Action** | Line Manager | Holds review meeting. Records meeting notes and agreed development actions. |
| **8** | **User Action** | Line Manager | Submits final review. Review shared with employee on portal. |
| **9** | **User Action** | Employee | Acknowledges review via portal. |
| **10** | **Automation** | HR Module | On all reviews completed: emits hr.review\_cycle.completed. Analytics updated with aggregate ratings. |
| **11** | **Decision** | HR Manager | Does review outcome trigger a compensation review? |
| **12** | **User Action** | HR Manager | IF YES: initiates compensation adjustment workflow for affected employees. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.review\_cycle.started | Portal (notifications to employees and managers), Audit log |
| hr.review.completed | HR Analytics (aggregate ratings update), Portal (employee acknowledgement prompt) |
| hr.review\_cycle.completed | HR Analytics (cycle summary), Compensation workflow (if triggered) |

**Success Criteria**

✓  All employees reviewed within the cycle window.

✓  Review records stored with full history.

✓  Development actions assigned as Work tasks.

✓  HR analytics updated with ratings data for compensation and succession planning.

**WF-18  Sick Leave and Return-to-Work**

| Trigger | Employee calls in sick. Manager records absence. Employee returns and follows return process. |
| :---- | :---- |
| **Actors** | Employee · Line Manager · HR |
| **Modules** | HR · Portal · Operations · Payroll |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Line Manager | Records absence: HR → Absence → Log Absence. Selects employee, date, type: Sick. |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | Operations Module | Receives absence event. Marks staff member unavailable in scheduling. Notifies Scheduling AI OrgExec to re-route assignments. |
| **3** | **Automation** | Scheduling AI | Re-assigns affected tasks/orders to available OrgExecs within their ODD capability constraints. |
| **4** | **Automation** | HR Module | Tracks consecutive sick days. After threshold (default: 3 days): flags for manager follow-up. After 7 days: flags for HR review. |
| **5** | **External** | Employee | Employee recovers. Returns to work. |
| **6** | **User Action** | Line Manager | Records return. Opens return-to-work interview template in HR. Completes and stores interview record. |
| **7** | **System** | HR Module | Absence record closed. Duration calculated. Sick leave balance updated. Payroll notified for statutory sick pay calculation if applicable. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| hr.absence.recorded | Operations (schedule update), Scheduling AI (re-assignment), Payroll (SSP calculation if applicable) |
| hr.absence.returned | Operations (reinstate in schedule), HR Analytics (absence rate KPI), Payroll (end SSP if applicable) |

**Success Criteria**

✓  Absence managed with minimal operational disruption.

✓  Scheduling AI re-routed work automatically within ODD constraints.

✓  Return-to-work interview documented.

✓  Payroll notified for correct statutory pay treatment.

## **Group 5 — Compliance & Risk**

**WF-19  Tax Filing — Quarterly VAT / Sales Tax**

| Trigger | Quarterly VAT/sales tax filing due. System reminds. Owner completes and records. |
| :---- | :---- |
| **Actors** | Owner / Finance Manager |
| **Modules** | Legal / Chombo · Finance · Dashboard |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Compliance Calendar | 14 days before due: notification sent to Owner and Finance Manager. Compliance calendar item turns amber. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Finance Manager | Opens Legal → Filing Calendar. Clicks on VAT/sales tax filing entry. |
| **3** | **System** | Legal / Chombo | Shows filing detail: description, due date, auto-calculated tax amount from Finance transactions in the period. |
| **4** | **User Action** | Finance Manager | Reviews calculated amount. Reconciles against Finance reports if needed. |
| **5** | **External** | Finance Manager | Logs into tax authority portal. Submits return with the calculated amount. Obtains confirmation reference. |
| **6** | **User Action** | Finance Manager | Returns to UME. Clicks "Mark as Filed". Enters filing date and reference. Uploads confirmation document. |
| **7** | **System** | Legal / Chombo | Marks obligation Complete. Stores evidence in document vault. Creates next quarterly occurrence. |
| **8** | **Automation** | Dashboard | Compliance score updated. Item removed from overdue/due-soon list. Next occurrence appears in calendar. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| legal.filing.completed | Compliance calendar (next occurrence), Document vault (evidence), Dashboard (compliance score update), Audit log |

**Success Criteria**

✓  Filing submitted on time with evidence stored.

✓  Next quarter occurrence auto-scheduled.

✓  Compliance score reflects successful filing.

✓  Audit trail: who filed, when, what reference — immutable.

**WF-20  Risk KRI Breach — Detection to Response**

| Trigger | A key risk indicator breaches its threshold. System detects and routes to responsible executive. |
| :---- | :---- |
| **Actors** | OrgKernel (automatic) · Risk Manager · Executive |
| **Modules** | Risk / GRC · Dashboard · Work · Notification |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Risk Module | KRI monitor evaluates cash runway KRI: current value \= 18 days. Threshold \= 30 days. BREACH detected. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | Risk Module | Creates KRI breach record. Emits risk.kri.breach event. Updates SDO risk layer. |
| **3** | **Automation** | Dashboard | Executive Dashboard shows red KRI breach card: "Cash Runway — 18 days (threshold: 30 days)". Sparkline shows declining trend. |
| **4** | **Automation** | Notification | Pushes alert to Owner and Finance Manager: "KRI Breach: Cash Runway." |
| **5** | **User Action** | Owner | Opens Dashboard → KRI detail. Reviews current value, trend, and linked risk register entry. |
| **6** | **User Action** | Owner | Clicks "Acknowledge". Records acknowledgement with timestamp. |
| **7** | **User Action** | Owner | Clicks "Escalate to Incident". Creates risk incident record. Assigns to Finance Manager. |
| **8** | **User Action** | Finance Manager | Opens incident. Reviews linked data. Creates action plan: accelerate AR collections, defer non-critical spend. |
| **9** | **User Action** | Finance Manager | Assigns action tasks in Work module. Sets 5-day review checkpoint. |
| **10** | **System** | Risk Module | Monitors KRI recovery. When cash runway returns above threshold: auto-flags incident as "Recovering". |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| risk.kri.breach | Dashboard (alert card), Notification service (push alert), SDO (risk layer update), Audit log |
| risk.incident.created | Work module (action tasks), Risk register (linked incident), Audit log |

**Success Criteria**

✓  Breach detected and escalated without manual monitoring.

✓  Responsible executives alerted within one event propagation cycle.

✓  Incident documented with action plan and owner.

✓  KRI recovery tracked automatically.

**WF-21  Annual GRC Assessment**

| Trigger | Compliance Officer runs the organisation's annual ISO 27001 assessment. |
| :---- | :---- |
| **Actors** | Compliance Officer · System |
| **Modules** | Risk / GRC · Work · Legal · Dashboard |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Compliance Officer | Opens Risk & GRC → Assessments → New Assessment. Selects ISO 27001 framework. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | GRC Module | Generates assessment questionnaire: all ISO 27001 control clauses, each with description and evidence guidance. |
| **3** | **User Action** | Compliance Officer | Works through controls: marks each Compliant / Partially Compliant / Non-Compliant / N/A. |
| **4** | **User Action** | Compliance Officer | For each gap: enters remediation plan, assigns owner, sets target date. Attaches evidence from document vault. |
| **5** | **System** | GRC Module | Calculates interim compliance score after each control entry. Overall score visible throughout. |
| **6** | **User Action** | Compliance Officer | Completes all controls. Reviews gap summary. |
| **7** | **System** | GRC Module | Generates assessment report (PDF) with score, gap summary, and remediation roadmap. |
| **8** | **Automation** | Work Module | Creates remediation tasks for all non-compliant controls. Assigns to owners with target dates. |
| **9** | **Automation** | Dashboard | GRC compliance score widget updated. Remediation progress tracked over time. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| grc.assessment.completed | Work module (remediation tasks), Dashboard (GRC score update), Document vault (report archive), Audit log |

**Success Criteria**

✓  Assessment completed with every control documented.

✓  Compliance score calculated and visible on dashboard.

✓  All remediation gaps converted to tracked work tasks with owners.

✓  Audit-ready report generated and stored in document vault.

**WF-22  Security Incident Response**

| Trigger | A suspected data breach is reported. CISO initiates incident response. |
| :---- | :---- |
| **Actors** | CISO / IT Manager · HR · Legal · Executive |
| **Modules** | Risk / GRC · Security · HR · Legal · Work |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | IT Manager | Receives external report of suspected breach. Opens Risk & GRC → Incidents → New Incident. Type: Security. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | IT Manager | Enters incident description, scope, affected systems, initial assessment. |
| **3** | **System** | Risk Module | Incident classified as High severity (based on data type). Auto-escalates to CISO and CEO. |
| **4** | **User Action** | CISO | Activates incident response team. Assigns tasks in Work module: forensic investigation, system isolation, customer notification assessment. |
| **5** | **Automation** | Legal Module | Receives high-severity security incident event. Triggers regulatory notification countdown (GDPR: 72-hour clock). |
| **6** | **User Action** | CISO | Investigation complete. Determines scope of exposure. Decides notification is required. |
| **7** | **User Action** | Legal Officer | Generates breach notification letter from template. Files with regulatory authority. Records in compliance calendar. |
| **8** | **User Action** | CISO | Completes incident with root cause and remediation steps. Closes incident. Post-incident review scheduled. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| risk.incident.created | Notification service (CISO/CEO alert), Legal (GDPR clock start), Work (response tasks), Audit log |
| legal.regulatory.notification\_filed | Compliance calendar (notification record), Document vault (filed letter), Audit log |

**Success Criteria**

✓  Incident contained, investigated, and documented.

✓  Regulatory notification filed within 72-hour GDPR window.

✓  All response actions tracked with full audit trail.

✓  Post-incident review scheduled. Remediation in work tracker.

## **Group 6 — Finance Close**

**WF-23  Month-End Close**

| Trigger | Finance Manager performs the monthly period close process. |
| :---- | :---- |
| **Actors** | Finance Manager · Accountant |
| **Modules** | Finance · Legal · Risk · Dashboard |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Finance Manager | Opens Finance → Period Management → \[Current Month\]. Runs pre-close checklist. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | Finance Module | Pre-close checklist: lists unreconciled bank accounts, unposted entries, unpaid invoices outstanding, open accruals. |
| **3** | **User Action** | Accountant | Posts any outstanding accruals and prepayments. Reconciles all bank accounts. Resolves all checklist items. |
| **4** | **User Action** | Finance Manager | Reviews period-end P\&L and Balance Sheet. Queries any unexpected variances. |
| **5** | **User Action** | Finance Manager | Satisfied with period data. Clicks "Close Period". Confirms warning: no further posting after close. |
| **6** | **System** | Finance Module | Period locked. All posting attempts to this period will now be blocked. |
| **7** | **Automation** | Finance Module | Generates period-end reports: P\&L, Balance Sheet, Cash Flow Statement. Stores as immutable snapshots. |
| **8** | **Automation** | Finance Module | Emits finance.period.closed. DAO smart contracts receive event to evaluate royalty payment triggers. |
| **9** | **Automation** | Analytics | Updates MoM variance analysis. Flags significant movements for management attention. |
| **10** | **Automation** | Dashboard | Finance dashboard refreshes with closed-period actuals. MoM charts updated. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.period.closed | DAO smart contracts (royalty evaluation), Analytics (MoM update), Dashboard (chart refresh), Risk (update financial KRIs) |
| finance.reports.generated | Document vault (immutable snapshot), Dashboard, Audit log |

**Success Criteria**

✓  Period closed. All transactions locked.

✓  Period-end reports generated and stored as immutable snapshots.

✓  DAO royalty smart contracts triggered where applicable.

✓  MoM variance analysis available for management review.

**WF-24  Consolidated Group Financial Reporting**

| Trigger | Group CFO requires consolidated P\&L and Balance Sheet across all group entities at month end. |
| :---- | :---- |
| **Actors** | CFO · Finance Directors (per entity) |
| **Modules** | Finance · DAO · Dashboard · Analytics |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | System | Finance (each entity) | Each entity OrgOS completes period close. finance.period.closed events emitted to group DAO event bus. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | CFO | Opens Finance → Consolidated Reports. Selects reporting group (all entities). Selects period. |
| **3** | **System** | Finance Module | Aggregates financial data from all entity OrgOS instances via DAO data sharing layer. |
| **4** | **System** | Finance Module | Applies intercompany elimination rules: removes intercompany sales, loans, and dividends from consolidated view. |
| **5** | **System** | Finance Module | Applies currency conversion if multi-currency group (using configured exchange rates). |
| **6** | **System** | Finance Module | Renders consolidated P\&L and Balance Sheet with entity columns and group totals. |
| **7** | **User Action** | CFO | Reviews consolidated statements. Drills into any entity variance. Adds commentary. |
| **8** | **User Action** | CFO | Exports consolidated pack (Excel or PDF) for board distribution. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.consolidated.report\_generated | Document vault (archive), Dashboard (group financial widgets), Audit log |

**Success Criteria**

✓  Consolidated P\&L and Balance Sheet available within minutes of last entity period close.

✓  Intercompany eliminations applied automatically.

✓  Board-ready export produced in one click.

✓  All entity data timestamped for audit purposes.

**WF-25  Year-End and Audit Preparation**

| Trigger | Owner and Finance Manager prepare for the annual statutory audit. |
| :---- | :---- |
| **Actors** | Owner · Finance Manager · External Auditor (external) |
| **Modules** | Finance · Legal · Risk · Settings / Audit |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Finance Manager | Completes year-end period close (as per WF-23). All 12 monthly periods locked. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Finance Manager | Opens Finance → Reports → Year-End Pack. Selects financial year. |
| **3** | **System** | Finance Module | Generates year-end pack: full-year P\&L, Balance Sheet, Cash Flow, Notes, Trial Balance, audit-ready JE listing. |
| **4** | **User Action** | Finance Manager | Opens Legal → Compliance → Prepare Audit Pack. Scopes to this entity and financial year. |
| **5** | **System** | Legal Module | Compiles: all JEs with attachments, payroll summaries, filed returns, vendor contracts, employee contracts, board resolutions. |
| **6** | **User Action** | Finance Manager | Reviews pack. Annotates any items requiring explanation. Generates final pack. |
| **7** | **User Action** | Owner | Creates a time-limited Auditor OrgExec (AUDITOR-ODD): read-only, scoped to audit period, auto-expires in 30 days. |
| **8** | **External** | External Auditor | Logs in as Auditor OrgExec. Browses audit pack via portal. Raises queries in audit query log. |
| **9** | **User Action** | Finance Manager | Responds to queries in audit query log. Provides additional evidence via document vault. |
| **10** | **External** | External Auditor | Signs off accounts. Files with relevant authority. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.yearend.pack\_generated | Document vault, Audit log |
| auth.auditor\_orgexec.created | ODDBus (register auditor ODD), Audit log |

**Success Criteria**

✓  Complete year-end data pack available with full audit evidence trail.

✓  Auditor given scoped, time-limited read-only access — no over-provisioning.

✓  All auditor queries and responses tracked in audit query log.

✓  Accounts signed off. Statutory filing completed.

## **Group 7 — AI Agent Operations**

**WF-26  AI Scheduling Agent — Daily Operation**

| Trigger | Scheduling AI OrgExec runs its daily scheduling optimisation for the service business. |
| :---- | :---- |
| **Actors** | Scheduling AI OrgExec (automated) · Operations Manager (oversight) |
| **Modules** | ODD / ODDBus · Operations · CRM · HR |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Scheduling AI | At 6:00 AM: AI OrgExec wakes per lifecycle policy in ODD. Reads order queue from CRM (permitted by ODD capability). |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | Scheduling AI | Reads staff availability from HR (permitted by ODD: read HR.schedule, current department only). |
| **3** | **Automation** | Scheduling AI | Reads machine availability from Operations OrgCPU status (permitted by ODD: read OrgCPU.status). |
| **4** | **Automation** | Scheduling AI | Runs optimisation model: assigns orders to machines and staff to minimise turnaround time. |
| **5** | **Decision** | ODDBus | Does the generated schedule change affect \>3 staff members simultaneously? (ODD constraint threshold) |
| **6** | **Automation** | ODDBus | IF BELOW THRESHOLD: schedule applied automatically. Staff notified via CommDriver. |
| **7** | **Automation** | ODDBus | IF ABOVE THRESHOLD: ODD Escalate decision. Action paused. Alert sent to Operations Manager. |
| **8** | **User Action** | Operations Manager | Reviews pending schedule in OrgExec console. Approves or modifies. |
| **9** | **Automation** | Scheduling AI | Once approved (or auto-applied): writes schedule assignments to Operations module (ODD write capability used). |
| **10** | **Automation** | Scheduling AI | Notifies each staff member of their assignments via CommDriver (ODD notification capability used). |
| **11** | **System** | Audit Log | All AI actions logged: what was read, what was written, what was notified, and whether escalation occurred. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| odd.action.allowed | Audit log (all AI read/write actions) |
| odd.action.escalated | Notification (manager alert), ODDBus (action paused), Audit log |
| operations.schedule.updated | Operations dashboard, CommDriver (staff notifications), SDO (OrgExec node update) |

**Success Criteria**

✓  Daily schedule optimised and applied with zero manual effort on routine days.

✓  Any day where \>3 staff are affected: human manager reviews before applying.

✓  Full AI action audit trail — every read, write, and notification logged.

✓  Staff receive their daily assignments automatically.

**WF-27  AI Agent ODD Escalation Handling**

| Trigger | AI OrgExec encounters a situation outside its ODD constraints and escalates. |
| :---- | :---- |
| **Actors** | AI Customer Comms Agent · Customer Service Manager (human) |
| **Modules** | ODD / ODDBus · CRM · Communications · Work |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Customer Comms AI | Reads incoming customer complaint message (permitted by ODD: read CRM.messages). |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | Customer Comms AI | Classifies complaint as: pricing dispute. Confidence: 82%. |
| **3** | **Decision** | ODDBus | Is this action type in the AI agent's ODD capabilities? (Pricing discussions: NOT in capabilities list.) |
| **4** | **System** | ODDBus | ODD Decision: Deny(reason: "pricing\_discussion not in capabilities"). Action blocked. |
| **5** | **Automation** | ODDBus | Escalation rule triggered: "Route pricing disputes to Customer Service Manager OrgExec." Escalation event emitted. |
| **6** | **Automation** | Work Module | Creates escalation task assigned to Customer Service Manager: "Customer complaint — pricing dispute. Requires human response." |
| **7** | **Automation** | Customer Comms AI | Sends interim acknowledgement to customer (permitted template): "We've received your message. A team member will respond within 2 hours." |
| **8** | **User Action** | Customer Service Manager | Reviews escalated task. Opens CRM message thread. Reads customer complaint. |
| **9** | **User Action** | Customer Service Manager | Responds to customer directly. Resolves dispute. |
| **10** | **User Action** | Customer Service Manager | Closes escalation task. Adds resolution note. |
| **11** | **Automation** | ODDBus | Escalation closed and resolution recorded in ODD violation/escalation log. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| odd.action.denied | Audit log, SDO (OrgExec node — escalation count update) |
| odd.action.escalated | Work module (task creation), Notification (manager alert), Audit log |
| work.task.completed | ODDBus (escalation closed), CRM (customer resolution note), Audit log |

**Success Criteria**

✓  Customer received timely acknowledgement automatically.

✓  Pricing dispute handled by a human — as required by ODD.

✓  Zero AI over-reach: agent stayed within ODD boundaries.

✓  Full escalation trail in audit log. Manager resolved within 2 hours.

**WF-28  AI Agent Performance Review and ODD Update**

| Trigger | Operations Manager reviews AI Scheduling Agent performance over the past month and tunes its ODD. |
| :---- | :---- |
| **Actors** | Operations Manager · Admin |
| **Modules** | ODD Manager · Analytics · OrgExec Registry |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Operations Manager | Opens OrgSystem → OrgExec Registry → Scheduling AI profile. |
| :---: | :---- | :---- | :---- |
| **2** | **System** | ODD Manager | Displays agent performance dashboard: tasks completed, escalation rate, ODD violations, actions allowed vs. denied, cost. |
| **3** | **User Action** | Operations Manager | Reviews: escalation rate was 8% this month. Investigates escalation log. Finds most escalations were for 4-staff schedule changes. |
| **4** | **Decision** | Operations Manager | Is the 3-staff threshold causing unnecessary escalations for minor schedule changes? |
| **5** | **User Action** | Operations Manager | Decides to raise threshold to 5 staff. Opens ODD Editor. Updates constraint: max\_staff\_change\_without\_approval \= 5\. |
| **6** | **System** | ODD Manager | Shows diff: old constraint (3) vs. new constraint (5). Prompts for change reason. |
| **7** | **User Action** | Operations Manager | Enters reason. Saves new ODD version. |
| **8** | **System** | ODDBus | Applies graceful transition: in-flight agent actions complete under old ODD. New ODD active from next execution cycle. |
| **9** | **System** | OrgDNA Manager | Increments OrgDNA version: updated ODD template recorded. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| odd.contract.updated | ODDBus (new version active), OrgDNA Manager (config update), Audit log |
| orgdna.version.created | OrgDNA vault, Audit log |

**Success Criteria**

✓  AI agent ODD updated. Escalation rate expected to reduce from 8% to \~3%.

✓  ODD change fully documented: who changed, what changed, why, when.

✓  OrgDNA updated. Config history maintained.

✓  Agent continues operating without interruption.

## **Group 8 — DAO & Franchise Operations**

**WF-29  Form a Franchise DAO**

| Trigger | Bob and Alice want to franchise their dry cleaning brand. They form a DAO for franchisee governance. |
| :---- | :---- |
| **Actors** | Franchise Owner (Bob & Alice) · First Franchisee (external) |
| **Modules** | DAO & DLT · OrgDNA Manager · Legal · Finance |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Bob & Alice | Opens DAO & DLT → Form New DAO. Enters: "Premier Dry Cleaning Network", governance: majority vote, quorum: 60%. |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Bob & Alice | Uses Smart Contract Builder to define terms: (1) 6% monthly royalty; (2) OrgDNA must stay within 1 major version; (3) governance votes for pricing changes. |
| **3** | **System** | DAO Module | Compiles smart contracts from visual builder. Previews legal interpretation of each term. |
| **4** | **User Action** | Bob & Alice | Opens OrgDNA Manager. Exports current OrgDNA as "PremierDryCleaning-v1.0.0" — the brand package. |
| **5** | **User Action** | Bob & Alice | Back in DAO wizard: publishes OrgDNA as canonical brand package. Confirms DAO formation. Clicks "Launch DAO". |
| **6** | **System** | DLT Node | DLT network initialises. Genesis block committed with DAO config, smart contracts, and founding OrgDNA v1.0.0. |
| **7** | **User Action** | Bob & Alice | Invites first franchisee by email (or UME Org ID). |
| **8** | **External** | Franchisee Admin | Receives invitation. Reviews smart contract terms. Accepts. Multi-signs. |
| **9** | **Automation** | DLT Node | ORGOS\_JOIN transaction committed. Franchisee OrgOS connected to DAO inter-org event bus. |
| **10** | **System** | DAO Dashboard | Member network graph shows 2 nodes (Bob & Alice HQ \+ Franchisee). Treasury and ledger visible. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| dao.formed | DLT genesis block commit, DAO dashboard initialise, Audit log |
| dao.member.joined | DAO member network update, DLT (ORGOS\_JOIN block), Smart contract engine (activate for this member), Audit log |
| orgdna.brand\_package.published | All DAO members (broadcast notification), DLT (OrgDNA version record) |

**Success Criteria**

✓  Franchise DAO live with DLT network active.

✓  Smart contracts deployed: royalty, brand standards, governance rules.

✓  OrgDNA brand package published. Franchisees can clone it.

✓  First franchisee joined. Inter-org event bus connected between HQ and franchisee.

**WF-30  Monthly Royalty Smart Contract Execution**

| Trigger | Franchisee completes month-end close. Royalty smart contract fires automatically. |
| :---- | :---- |
| **Actors** | System (fully automated) · Finance Module (both orgs) |
| **Modules** | Finance · DAO / DLT · Smart Contract Engine |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | Automation | Franchisee Finance | Franchisee Finance Manager closes April period. finance.period.closed event emitted on franchisee OrgOS. |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | DAO Event Bus | finance.period.closed event routed to smart contract engine via DAO inter-org event bus. |
| **3** | **System** | Smart Contract Engine | Evaluates royalty term: reads franchisee April gross revenue (authorised by DAO data sharing ODD: read Finance.revenue). |
| **4** | **System** | Smart Contract Engine | Calculates: £28,450 gross revenue × 6% \= £1,707 royalty due. |
| **5** | **System** | Smart Contract Engine | Initiates treasury transfer: debit franchisee treasury £1,707, credit parent (Bob & Alice HQ) treasury £1,707. |
| **6** | **Automation** | Franchisee Finance | Royalty expense JE auto-posted on franchisee OrgOS: Royalty Expense Dr £1,707 / Royalty Payable Cr £1,707. |
| **7** | **Automation** | Parent Finance | Royalty income JE auto-posted on parent OrgOS: Royalty Receivable Dr £1,707 / Royalty Income Cr £1,707. |
| **8** | **System** | DLT Node | ROYALTY\_PAYMENT block committed. Immutable record: franchisee, parent, period, amount, contract ID, block hash. |
| **9** | **Automation** | Notification | Both organisations notified: "April royalty of £1,707 processed automatically." |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| finance.period.closed | DAO Smart Contract Engine (royalty trigger evaluation) |
| dao.smart\_contract.royalty\_executed | Franchisee Finance (royalty JE), Parent Finance (income JE), DLT (ROYALTY\_PAYMENT block), Notification (both orgs), Audit log |

**Success Criteria**

✓  Royalty paid automatically — no invoice, no chasing, no manual transfer.

✓  Both organisations' Finance modules updated with correct entries.

✓  Immutable DLT record of payment. Independently verifiable.

✓  No human intervention required from period close to royalty receipt.

**WF-31  OrgDNA Update Broadcast to Franchisees**

| Trigger | Bob & Alice update their operational processes and want all franchisees to adopt the update. |
| :---- | :---- |
| **Actors** | Bob & Alice (Parent Org) · Franchisee Admins |
| **Modules** | OrgDNA Manager · DAO & DLT · Notification |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Bob & Alice | Makes changes to their OrgOS: new compliance pack for updated regulations, revised ODD template for cleaning staff. |
| :---: | :---- | :---- | :---- |
| **2** | **Automation** | OrgDNA Manager | Config change triggers OrgDNA v1.3.0 on parent OrgOS. Change summary auto-generated. |
| **3** | **User Action** | Bob & Alice | Opens OrgDNA Manager → Broadcast Update. Selects "PremierDryCleaning-v1.3.0". Marks as mandatory with 14-day cure period. |
| **4** | **User Action** | Bob & Alice | Writes release note explaining the changes. Clicks "Broadcast to DAO". |
| **5** | **System** | DAO Module | Sends OrgDNA update notification to all member OrgOS instances via DAO inter-org event bus. |
| **6** | **Automation** | Each Franchisee OrgOS | Each franchisee admin receives notification: "New OrgDNA update v1.3.0 available. Mandatory. Apply by \[date\]." |
| **7** | **User Action** | Franchisee Admin | Reviews update diff. Sees: new compliance pack added, one ODD template updated. No breaking changes. |
| **8** | **User Action** | Franchisee Admin | Clicks "Accept Update". System applies OrgDNA diff. Validates. Activates. |
| **9** | **System** | DLT Node | ORGDNA\_UPDATE acceptance committed to DLT for this member. Parent can see all member acceptance status. |
| **10** | **Automation** | Smart Contract Engine | Brand standards check: all accepting members now on v1.3.0. Compliant. No cure period triggered. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| orgdna.broadcast.sent | All member OrgOS instances (notification), DLT (broadcast record), Audit log |
| orgdna.update.accepted | DLT (ORGDNA\_UPDATE block per member), Brand standards smart contract (compliance check), Audit log |

**Success Criteria**

✓  All franchisees updated to latest brand standards OrgDNA within 14-day window.

✓  Acceptance tracked per member on DLT.

✓  Brand standards compliance maintained across entire network.

✓  Update history maintained for all member OrgOS instances.

**WF-32  DAO Governance Vote — Network-Wide Price Change**

| Trigger | A franchisee proposes raising minimum service prices across the network. A governance vote is held. |
| :---- | :---- |
| **Actors** | Proposing Franchisee · All DAO Members · Smart Contract Engine |
| **Modules** | DAO & DLT · Governance Engine · Notification |

**Workflow Steps**

Step  |  Phase  |  Actor  |  Action / System Response

| 1 | User Action | Franchisee | Opens DAO & DLT → Governance → New Proposal. Enters: "Raise minimum press price from £2.50 to £2.75 — cost inflation adjustment." |
| :---: | :---- | :---- | :---- |
| **2** | **User Action** | Franchisee | Attaches supporting analysis (cost data from their Finance module). Sets proposed effective date. |
| **3** | **System** | Governance Engine | Creates proposal on DLT. Opens 7-day voting period (per governance smart contract). Notifies all DAO members. |
| **4** | **Automation** | Notification | All member organisations receive: "New governance proposal: Price Update. Vote by \[date\]." |
| **5** | **User Action** | Each Member Org Admin | Reviews proposal and attached analysis on DAO governance portal. Adds comments to discussion thread. |
| **6** | **User Action** | Each Member Org Admin | Casts vote: For / Against / Abstain. Vote recorded on DLT. |
| **7** | **System** | Governance Engine | After 7 days: tallies votes. Result: 5 For, 2 Against. 71% majority. Quorum met (6 of 7 voted). APPROVED. |
| **8** | **Automation** | Governance Engine | GOVERNANCE\_VOTE block committed to DLT with final tally. Result published to all members. |
| **9** | **Automation** | Smart Contract Engine | Governance approval triggers OrgDNA update: minimum price configuration updated to £2.75. |
| **10** | **Automation** | OrgDNA Manager | Price change packaged into OrgDNA update broadcast to all members. |

**System Events Emitted**

| Event Topic | Subscriber(s) / Effect |
| :---- | :---- |
| dao.proposal.submitted | DLT (proposal record), Notification (all members), Governance Engine (voting period start) |
| dao.vote.cast | DLT (per-member vote block), Governance Engine (running tally) |
| dao.vote.completed | DLT (GOVERNANCE\_VOTE block), Smart contract (execute approved action), All members (result notification) |
| orgdna.update.broadcast | All member OrgOS instances (price config update), DLT (OrgDNA update record) |

**Success Criteria**

✓  Network-wide price change decided collectively, transparently, and automatically applied.

✓  Every vote recorded on DLT — permanently auditable.

✓  Approved change automatically packaged and broadcast to all members via OrgDNA.

✓  No head office decree needed — governance operated by the network itself.

