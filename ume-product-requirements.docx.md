  
**UME**

Organization / Business Operating System

**Product Requirements Document**

─────────────────────────────────

**Document ID:**  UME-PROD-001

**Version:**  1.0.0

**Status:**  Approved — Baseline

**Date:**  March 2026

**Owner:**  UME Product Management

**Classification:**  Internal — Confidential

**Scope:**  All 42 Organisation Modules · Kernel Platform · API & Clients

| Document Information & Revision History |
| :---- |

| Version | Date | Author | Status | Summary of Changes |
| :---- | :---- | :---- | :---- | :---- |
| 0.1.0 | Jan 2026 | UME Product Team | Draft | Initial outline and persona research |
| 0.5.0 | Feb 2026 | UME Product Team | Draft | Feature catalogue and user stories (first pass) |
| 0.9.0 | Mar 2026 | UME Product Team | Review | NFRs, release plan, and acceptance criteria added |
| 1.0.0 | Mar 2026 | UME Product Team | Approved | Baseline for Milestone 1 engineering kick-off |

| How to Use This Document   Product Managers     — §3 User Stories, §6 Release Plan, §7 Success Metrics   Engineering Leads    — §4 Feature Catalogue, §5 Non-Functional Requirements, §8 Dependencies   Design Team          — §2 Personas, §3 User Stories, §5 Usability NFRs   QA / Test Engineers  — §3 Acceptance Criteria, §5 NFRs, Appendix C (AC Template)   Executives / Board   — Executive Summary, §1 Vision, §6 Roadmap, §7 Success Metrics |
| :---- |

# **Executive Summary**

UME is the world's first Organisation Operating System — a single, unified platform that replaces the fragmented stack of 10–30 disconnected tools that every organisation currently relies on. Built in Rust for performance and correctness, UME provides 42 domain modules covering every aspect of running an organisation: legal entity management, finance and accounting, human resources, governance, risk and compliance, sales, marketing, operations, supply chain, IT, security, and strategic management.

This Product Requirements Document (PRD) defines what UME must do as a product — its features, user stories, acceptance criteria, release prioritisation, and measurable outcomes. It is the authoritative reference for the product team, engineering, design, and QA.

| 42 Org Modules *domain capabilities* | 18+ User Personas *roles across all org types* | 12 Org Types Supported *legal structures* | 45+ Jurisdictions (Day 1\) *compliance policy packs* |
| :---: | :---: | :---: | :---: |

| Product Vision Statement UME gives every organisation — from a solo entrepreneur to a global enterprise — a single operating system that holds their complete organisational context and provides every capability they need to govern, operate, and grow, without requiring them to integrate a stack of disconnected tools. |
| :---- |

| Theme | What UME Delivers |
| :---- | :---- |
| Unified Organisational Model | One platform that knows your structure, entities, obligations, people, money, and strategy — and keeps all of them consistent |
| Automated Compliance | Jurisdiction-aware legal entity management that derives filing obligations from organisational facts and alerts you before deadlines, not after |
| Financial Intelligence | Real-time consolidated financials across every entity; automated multi-entity reconciliation; proactive cash flow forecasting |
| Connected Risk | Risk indicators that update automatically from live operational data across HR, Finance, IT, and Operations |
| People-Centred Operations | HR lifecycle events that cascade automatically through Finance, Security, Process, and Compliance without manual coordination |
| Universal Accessibility | One platform that works correctly for a sole trader, a non-profit, a cooperative, an investment fund, or a government department |
| Extensible by Design | A module SDK that lets any organisation or third-party developer add domain-specific capabilities fully integrated with the platform |

# **1\. Product Vision & Strategy**

## **1.1 Vision**

Every organisation deserves an operating system. Not a collection of tools, not an ERP bolted together with APIs, not a suite of apps that share a logo but not a data model — an actual operating system that understands what the organisation is, what it is obligated to do, who works in it, and what it is trying to achieve.

UME is that operating system. Its kernel mediates all organisational data. Its 42 modules provide every functional capability. Its event bus ensures that a change in one domain — a new hire, a period lock, a filing due date, a risk threshold breach — automatically propagates to all affected domains without manual intervention.

## **1.2 Strategic Objectives**

| Objective | Measure of Success | Horizon |
| :---- | :---- | :---- |
| Eliminate organisational fragmentation | \>80% of deployed orgs report UME as their only primary operational platform | 12 months post-GA |
| Automate compliance globally | \<5% of UME-deployed orgs experience a missed statutory deadline | 18 months post-GA |
| Unify multi-entity financial management | Finance teams report consolidated group view available in \<4 hours vs. days | 12 months post-GA |
| Make GRC accessible at any scale | SMEs with no prior GRC practice successfully adopt risk management in UME | 18 months post-GA |
| Build the organisational intelligence layer | Executives report UME provides their primary operational dashboard | 24 months post-GA |
| Create an open ecosystem | 50+ third-party custom modules available via the UME marketplace | 24 months post-GA |

## **1.3 Product Principles**

1. Organisation-first: every feature is designed around the organisational model, not around a functional domain.

2. Event-driven correctness: state changes propagate automatically; no manual synchronisation between domains.

3. Compliance by default: legal and regulatory obligations are derived from organisational facts, not configured manually.

4. Scale without migration: the same platform works for 1 user and 100,000 users; no upgrade to a "bigger" product.

5. Accessible complexity: powerful capabilities (GRC, multi-entity consolidation) must be usable by non-specialists.

6. Audit as infrastructure: every operation is auditable from day one; compliance is not bolted on after.

7. Extensible core: the platform is a foundation; domain-specific depth is added through modules, not through rebuilding.

## **1.4 Positioning**

| Segment | Positioning |
| :---- | :---- |
| Solo Entrepreneurs & Freelancers | The first platform that manages your entity compliance, finances, contracts, and operations in one place — no accountant required for day-to-day management. |
| Small & Medium Businesses | Replace your stack of Xero \+ BambooHR \+ spreadsheets \+ your lawyer's reminder emails with one platform that does all of it correctly. |
| Growth & Scale-Up Companies | The operating system that grows with you: works for 10 people today and 500 tomorrow, without a migration or a painful ERP implementation. |
| Multi-Entity & Holding Structures | Consolidated group financials, cross-entity compliance, and unified risk management — without a team of analysts manually reconciling spreadsheets. |
| Non-Profits & NGOs | The only platform that understands restricted funds, grant lifecycle, trustee governance, and donor reporting as first-class capabilities. |
| Government & Public Sector | Appropriations compliance, procurement governance, FOI management, and public audit trail — built in, not bolted on. |
| Investment Funds | Portfolio company tracking, LP capital accounts, IC deal governance, and carry calculations alongside the fund's own operational HR and Finance. |

# **2\. User Personas & Jobs To Be Done**

UME serves 18 primary user personas grouped into three tiers. Each persona is defined by their role, their primary job to be done in UME, and their core frustration with the status quo.

## **2.1 Persona Tier 1 — Executive & Board**

| Persona | Title | Primary JTBD | Status Quo Frustration |
| :---- | :---- | :---- | :---- |
| P-01 CEO / Founder | Chief Executive | See the complete state of the organisation — financial, people, risk, compliance — in one place, and make decisions with confidence. | I have 8 dashboards open and none of them tell me the same story about my business. |
| P-02 CFO / Finance Director | Chief Financial Officer | Close the books faster, produce consolidated group accounts, forecast cash, and answer board questions without a multi-day data collection exercise. | Month-end close takes 10 days because I'm manually pulling reports from 4 different accounting instances. |
| P-03 COO / Operations Director | Chief Operating Officer | Ensure every operational process runs reliably, escalations happen automatically, and I can see cross-departmental bottlenecks before they become crises. | I find out about process failures from an angry customer, not from my systems. |
| P-04 Board Director / Trustee | Non-Executive Director | Receive a complete, accurate board pack before each meeting, vote on resolutions with proper conflict-of-interest management, and maintain my statutory obligations. | Board packs arrive 24 hours before the meeting, in PDFs, with no way to ask questions about the underlying data. |

## **2.2 Persona Tier 2 — Functional Leads**

| Persona | Title | Primary JTBD | Status Quo Frustration |
| :---- | :---- | :---- | :---- |
| P-05 CHRO / HR Director | Chief People Officer | Run the full employee lifecycle — hire to retire — with automatic downstream effects on Finance, IT, and Compliance. | Every new hire requires me to send emails to 6 departments to trigger their respective processes. |
| P-06 General Counsel / Legal Officer | Chief Legal Officer | Know every statutory obligation across every entity in the group, maintain the filing calendar, and have evidence ready for any audit or regulator. | I track compliance deadlines in a spreadsheet. The day I miss updating it is the day we miss a filing. |
| P-07 CRO / Risk Manager | Chief Risk Officer | Maintain a live risk register that updates automatically from operational KPIs, escalate to the board when appetite is breached. | Our risk register is last month's data. By the time we review it, the risk has already materialised. |
| P-08 CTO / IT Director | Chief Technology Officer | Manage the full IT asset and service lifecycle, respond to incidents with structured workflows, and demonstrate security compliance. | I have a CMDB in one tool, incidents in another, and changes in a third. Nothing talks to anything else. |
| P-09 CMO / Marketing Director | Chief Marketing Officer | Plan campaigns with strategic context, execute across channels, measure attribution precisely, and iterate based on live signals. | I know our campaign spent £80K. I don't know if it generated £80K of revenue — the data lives in 3 different systems. |
| P-10 VP Sales / Revenue Leader | VP of Sales | Manage pipeline from lead to close, forecast accurately, pay commissions correctly, and connect won revenue directly to Finance. | Our CRM says we closed £500K this quarter. Finance says £420K. Nobody can explain the difference. |

## **2.3 Persona Tier 3 — Operational & Individual Contributors**

| Persona | Title | Primary JTBD | Status Quo Frustration |
| :---- | :---- | :---- | :---- |
| P-11 Finance Manager | Finance Manager | Process invoices, manage budgets, run payroll, reconcile accounts, and produce reports without manual data gathering. | I spend 3 days a month reconciling intercompany transactions that should be automatic. |
| P-12 HR Manager | HR Manager | Onboard and offboard employees smoothly, manage leave, track certifications, and run performance reviews without chasing people. | Offboarding takes a week because I have to email IT, Finance, and Legal separately to trigger their steps. |
| P-13 Compliance Manager | Compliance Manager | Track every regulatory obligation, collect evidence automatically, manage audit engagements, and never miss a deadline. | Evidence collection before an audit is 2 weeks of emailing colleagues for screenshots. |
| P-14 Project / Programme Manager | Project Manager | Track work from inception to completion with resource assignments, budgets, and milestone visibility across multiple projects. | My project tool doesn't know about budget actuals. Finance doesn't know about project milestones. Nobody has the full picture. |
| P-15 Knowledge Worker / Employee | Employee | Find information, request leave, submit expenses, complete training, and contribute to work items from a single portal. | I use 6 different apps to do my job. None of them remember my preferences. None of them talk to each other. |
| P-16 IT Administrator | IT Admin | Manage platform health, user access, module configuration, backups, and system changes with full audit trail. | Making a config change to our HRIS requires a support ticket. Verifying it was done right requires another one. |
| P-17 Independent Worker / Freelancer | Freelancer | Manage clients, proposals, contracts, time, invoices, and tax obligations from a single platform. | I use Notion for clients, Toggl for time, FreshBooks for invoices, and my accountant for tax. I'm paying for 4 tools for a 1-person business. |
| P-18 System Administrator | Sys Admin | Configure the UME platform, manage custom modules, control RBAC, and maintain infrastructure without specialist Rust knowledge. | Platform configuration requires editing TOML files and restarting services. There's no UI for anything operational. |

# **3\. User Stories & Acceptance Criteria**

User stories are grouped by module domain. Each story is written in the standard format: "As a \[persona\], I want to \[action\] so that \[outcome\]." Acceptance criteria define the minimum conditions for the story to be considered complete.

## **3.1 Organisation Administration (MOD-01)**

| US-ADM-001  As P-01 CEO, I want to manage the organisation's entity structure so that I can see all entities in the group, their relationships, and their current compliance status in one view. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Org unit tree is displayed with parent-child relationships and depth up to 10 levels 2\. Each org unit shows: name, type, manager, headcount, and status 3\. Restructuring (move org unit) is a single drag operation with audit trail 4\. Deleting an org unit with active employees or children is prevented with a clear error message |

| US-ADM-002  As P-06 Legal Officer, I want to publish an organisation-wide policy and track acknowledgment so that every affected employee has formally acknowledged the policy and I have evidence for audit. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Policy can be created with rich text, version number, and effective date 2\. Target audience can be defined by org unit, role, or custom filter 3\. Acknowledgment request is sent via the Comms module automatically on publish 4\. Acknowledgment rate is visible in real time; overdue acknowledgments trigger automated reminders 5\. Full acknowledgment evidence is exportable as a PDF for audit |

## **3.2 Finance & Accounting (MOD-14)**

| US-FIN-001  As P-02 CFO, I want to see the consolidated financial position of the entire group in real time so that I can answer board-level questions about group cash, P\&L, and balance sheet without waiting for month-end. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Consolidated group P\&L, balance sheet, and cash flow are available in real time, not just at period end 2\. Intercompany eliminations are applied automatically; no manual adjustment required 3\. Drill-down from group total to entity to individual journal entry is available in one click 4\. Report exports to XLSX and PDF in GAAP/IFRS format |

| US-FIN-002  As P-11 Finance Manager, I want to process a supplier invoice through 3-way match so that invoices are only paid when they match an approved PO and goods receipt, with no manual intervention. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Invoice can be created manually or ingested via email/API 2\. System automatically matches invoice to PO and goods receipt by document reference or line-item matching 3\. Match failure creates a workflow exception routed to the responsible buyer with details of the discrepancy 4\. Matched invoices are queued for the next payment run automatically 5\. Full match audit trail is visible on the invoice record |

| US-FIN-003  As P-11 Finance Manager, I want to run payroll for the current period so that all employees are paid correctly with accurate deductions and a journal entry is posted automatically. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Payroll run calculates gross pay, statutory deductions, employer costs, and net pay for all active employees 2\. Jurisdiction-specific tax and contribution rules are applied automatically based on employee location 3\. Payroll journal entry is generated and posted to the general ledger automatically on approval 4\. Payslips are distributed to employees via the portal/comms module 5\. Payroll run report is downloadable for HMRC/IRS/equivalent submission |

| US-FIN-004  As P-17 Freelancer, I want to send a professional invoice and track whether it has been paid so that I get paid on time and have a complete record of all client transactions for tax purposes. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Invoice created from a template with client details, line items, tax, and payment terms in under 2 minutes 2\. Invoice is emailed to the client directly from UME with a payment link 3\. Payment status (sent, viewed, paid, overdue) is tracked automatically 4\. Automated payment reminders sent at configurable intervals for overdue invoices 5\. All invoices for the period are summarised for tax purposes with one click |

## **3.3 Legal Entity Management — Chombo (MOD-13)**

| US-CHM-001  As P-06 Legal Officer, I want to see every upcoming statutory filing deadline across all entities so that no filing ever falls through the cracks regardless of jurisdiction or entity type. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Filing calendar shows all obligations across all entities sorted by due date 2\. Amber alert is triggered at the configured lead\_days before each deadline (default 30 days) 3\. Red alert and escalation email is sent when a deadline is within 7 days with no evidence filed 4\. Overdue filings turn red immediately and trigger escalation to the entity's designated executive 5\. Evidence attachment and "mark as filed" workflow is available for each filing item |

| US-CHM-002  As P-01 Founder, I want to register a new legal entity and immediately know what I need to do so that I can set up a new subsidiary and have a complete compliance picture in under 10 minutes. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. New entity is created by entering name, type, jurisdiction, and registration number 2\. System immediately evaluates applicable policy packs and generates the filing schedule 3\. First-year compliance obligations are displayed in priority order 4\. Entity appears in the group structure automatically 5\. Notification is sent to the designated compliance manager |

## **3.4 Human Resources (MOD-16)**

| US-HR-001  As P-12 HR Manager, I want to onboard a new employee so that the new hire has their access, equipment, training, and welcome pack on day one without me chasing anyone. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Creating an employee record automatically triggers the onboarding workflow in the Process module 2\. Onboarding workflow includes: IT access provisioning task, equipment request task, policy acknowledgment, and mandatory training assignments 3\. Each task is assigned to the responsible person automatically based on org unit and role 4\. Manager receives a checklist of their onboarding responsibilities via the portal 5\. New hire has access to the employee portal and their onboarding plan on start date 6\. Onboarding completion status is visible to HR manager in real time |

| US-HR-002  As P-15 Employee, I want to request annual leave and see my balance so that I know exactly how much leave I have and my request is approved (or declined) without paperwork. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Employee sees current leave balance for all leave types on their portal home screen 2\. Leave request is submitted in under 30 seconds: select type, dates, optional note 3\. Request routes automatically to the configured approver (usually line manager) 4\. Approved leave blocks the employee's calendar in the Schedule module 5\. Leave balances update in real time on approval 6\. Email notification sent to employee on approval or decline with reason |

| US-HR-003  As P-05 CHRO, I want to run the annual performance review cycle so that every employee has a completed review by the end of the review period without me manually tracking progress. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Review cycle is created with: review period, participant scope, self-assessment deadline, manager review deadline, calibration session date 2\. Self-assessment form is sent to all in-scope employees automatically on cycle open date 3\. Manager review is triggered automatically when employee self-assessment is submitted 4\. Completion dashboard shows real-time progress: % self-assessments submitted, % manager reviews complete 5\. Overdue reviews trigger automated reminders to the employee/manager 6\. Final ratings are locked after the calibration session; employees receive their outcome notification |

## **3.5 Governance, Risk & Compliance (MOD-15 & MOD-33)**

| US-GRC-001  As P-07 Risk Manager, I want to know immediately when a key risk indicator breaches its threshold so that risks are escalated to the right people automatically; no weekly manual check required. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. KRIs are configurable with amber and red thresholds per risk 2\. KRI values update automatically from connected data sources (Finance KPIs, HR metrics, IT incidents) 3\. Amber breach triggers an email/portal notification to the risk owner within 5 minutes of data update 4\. Red breach triggers escalation to the executive sponsor and Risk Committee chair automatically 5\. All KRI alerts are recorded in the audit log with timestamp and value at alert time |

| US-GRC-002  As P-13 Compliance Manager, I want to prepare for an internal audit without 2 weeks of evidence collection so that audit evidence is always current and automatically linked to controls; preparation takes hours, not weeks. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Each control in the control library has an assigned evidence collection method (manual, automated, or both) 2\. Automated evidence is pulled from linked modules (e.g., access review evidence from Security, training completion from Learning) 3\. Audit engagement is created with scope, timeline, and assigned reviewers 4\. Evidence package for each control is generated automatically from linked evidence sources 5\. Findings are recorded against controls with management responses and remediation deadlines 6\. Audit report is generated from findings with one click |

## **3.6 Sales & CRM (MOD-34 & MOD-08)**

| US-SAL-001  As P-10 VP Sales, I want to forecast revenue accurately for the next quarter so that I can commit to a number with confidence, not a guess based on hope and gut feel. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Pipeline view shows all opportunities by stage with probability-weighted value 2\. Weighted forecast is calculated automatically from stage probability × deal value 3\. AI-assisted deal score is visible per opportunity based on historical win/loss patterns 4\. Forecast vs. target gap is visible at the top of the pipeline view 5\. Forecast can be sliced by rep, territory, vertical, and time period 6\. Forecast history is tracked so forecast accuracy can be measured over time |

| US-SAL-002  As P-10 VP Sales, I want to calculate and communicate commission statements automatically so that reps trust their commission figures; no disputes; no manual spreadsheets. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Commission plan is configured once per plan period with rules, rates, accelerators, and quotas 2\. Commission is calculated automatically on opportunity close linked to Finance 3\. Statement is generated per rep per period showing: quota, achievement, rate, amount earned 4\. Statements are distributed to reps via the portal with the ability to dispute individual items 5\. Approved commissions are passed to the Finance module payroll integration automatically |

## **3.7 Security, Privacy & IT (MOD-36 & MOD-18)**

| US-SEC-001  As P-08 CTO, I want to respond to a P1 security incident with a structured, audited process so that the incident is contained and resolved within SLA; a complete post-incident report is available. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Incident is created with classification (P1–P4), affected systems, and initial description 2\. P1 declaration triggers immediate notifications to CISO, CTO, and on-call team 3\. SLA timer starts on incident creation; countdown is visible on the incident record 4\. Incident timeline records every action, by whom, with timestamps 5\. Containment, eradication, and recovery steps are tracked with evidence 6\. Post-Incident Review (PIR) template is auto-populated from the incident timeline 7\. PIR action items create Work items assigned to responsible owners |

| US-IT-001  As P-16 IT Admin, I want to manage a change to a production system through a full CAB process so that no unauthorised changes reach production; every change is documented and reversible. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Change request captures: description, affected CIs, risk assessment, rollback plan, and proposed schedule 2\. Standard changes auto-approve; Normal changes route to CAB members for review 3\. Emergency changes route to emergency approver with 2-hour SLA 4\. Approved changes appear in the change calendar for the implementation window 5\. Post-implementation review records outcome (successful, failed, rolled back) with evidence 6\. All change records are linked to the affected CMDB configuration items |

## **3.8 Work Management & Portal (MOD-40 & MOD-26)**

| US-WRK-001  As P-14 Project Manager, I want to run a sprint with full visibility into team capacity and delivery progress so that I can tell stakeholders exactly where we are, what is at risk, and when we will deliver. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Sprint is created with goal, start/end dates, and work items pulled from the backlog 2\. Work items are assigned with story points and time estimates 3\. Daily burn-down and velocity charts update automatically as items are completed 4\. Items blocked or at risk are flagged; automatic notification to PM when item SLA is at risk 5\. Sprint review summary is auto-generated from completed items with linked evidence |

| US-WRK-002  As P-15 Employee, I want to find any organisational information and take action from a single portal so that I never need to open another tool for day-to-day work. |  |
| :---- | :---- |
| **Acceptance Criteria** | 1\. Global search returns results from all modules: people, documents, work items, knowledge articles, policies 2\. Notification centre consolidates alerts from all modules in one feed with action buttons 3\. Quick actions allow: request leave, log time, submit expense, create work item — all in under 30 seconds 4\. My work dashboard shows: tasks due today, approvals pending, upcoming leave, learning completions due 5\. Module navigation is role-aware: only modules relevant to the user's role are shown |

# **4\. Feature Catalogue**

| Priority Key   P0 — Must-have for launch. Absence prevents the product from being usable for its core purpose.   P1 — Required for general availability. Absence significantly limits value for key personas.   P2 — Important for growth. Absence constrains specific segments but does not block core use.   P3 — Desirable. Adds value and competitive differentiation; acceptable to defer post-launch. |
| :---- |

## **4.1 Platform Kernel & Infrastructure**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-KRN-001** | Kernel Lifecycle | Single-process kernel that boots all active modules in dependency order within 30 seconds; graceful shutdown with draining | **P0** |
| **F-KRN-002** | Module Registry | Dynamic module registration and discovery; dependency graph validation; hot-reload without full restart | **P0** |
| **F-KRN-003** | RBAC Engine | Role-based access control with role inheritance, resource scoping, and per-permission auditing; \<10ms decision time | **P0** |
| **F-KRN-004** | Event Bus | Publish-subscribe event bus with glob pattern subscriptions, backpressure, dead-letter queue, and idempotent delivery | **P0** |
| **F-KRN-005** | Audit Chain | Immutable, SHA-256 cryptographically chained audit log; every write operation produces an audit record; 7-year retention | **P0** |
| **F-KRN-006** | Storage Abstraction | Unified storage API across SQLite (embedded), PostgreSQL (standard/enterprise), with Redis hot-cache tier | **P0** |
| **F-KRN-007** | Supervisor Engine | Per-module health monitoring at configurable interval; exponential backoff restart policy; fault isolation | **P0** |
| **F-KRN-008** | Executor Pool | 8 named thread pools with per-pool resource limits; prevents any domain from starving others | **P0** |
| **F-KRN-009** | Schema Migration | Versioned, idempotent, forward-only database migrations; auto-applied on boot; checksum verification | **P0** |
| **F-KRN-010** | Device Driver Bus | Hot-swappable drivers for storage, identity, comms, broker, crypto, and search; circuit-breaker per driver | **P0** |
| **F-KRN-011** | Memory Manager | Named memory regions with configurable eviction policies; prevents unbounded memory growth | **P1** |
| **F-KRN-012** | Job Scheduler | Cron-based and one-shot scheduled jobs; bound to executor pool; job history and DLQ | **P1** |

## **4.2 Security & Identity (MOD-36)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-SEC-001** | Local Authentication | Username/password with bcrypt (cost 12\) or Argon2id; account lockout after 5 failed attempts; 15-minute lockout window | **P0** |
| **F-SEC-002** | SSO Integration | OAuth2/OIDC and SAML 2.0 integration for enterprise identity providers (Azure AD, Okta, Google Workspace) | **P1** |
| **F-SEC-003** | Multi-Factor Authentication | TOTP (Google Authenticator / Authy compatible) and FIDO2/WebAuthn (hardware key) support; MFA mandatory for admin roles | **P0** |
| **F-SEC-004** | JWT Token Management | RS256-signed JWTs; 60-minute access tokens; 7-day refresh tokens; token revocation via session store | **P0** |
| **F-SEC-005** | Cryptographic Vault | AES-256-GCM at-rest encryption; key rotation without downtime; HSM-compatible vault interface | **P0** |
| **F-SEC-006** | Incident Management | P1–P4 incident lifecycle with SLA timers, timeline recording, containment steps, and auto-generated PIR | **P1** |
| **F-SEC-007** | Vulnerability Management | Vulnerability register with CVSS scoring, asset linkage, remediation tracking, and SLA monitoring | **P1** |
| **F-SEC-008** | Privacy Module | Record of Processing Activities (RoPA), DPIA workflow, DSAR management, and consent registry | **P1** |
| **F-SEC-009** | SIEM Integration | Real-time security event forwarding via webhook to SIEM platforms (Splunk, Elastic, Datadog) | **P2** |
| **F-SEC-010** | IP Allowlisting | Per-organisation IP allowlist enforcement at the API layer | **P2** |

## **4.3 Administration (MOD-01)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-ADM-001** | Org Unit Hierarchy | Unlimited-depth organisational structure tree; drag-and-drop restructuring; full history of structural changes | **P0** |
| **F-ADM-002** | Policy Management | Rich-text policy authoring, versioning, approval workflow, publish/retire lifecycle, and acknowledgment tracking | **P0** |
| **F-ADM-003** | Enterprise Calendar | Multi-jurisdiction public holiday management; integration with Schedule and HR leave modules | **P1** |
| **F-ADM-004** | Delegation Management | Formal authority delegation with start/end dates, scope definition, and audit trail | **P1** |
| **F-ADM-005** | Notification Templates | Organisation-branded email and in-app notification templates; per-event customisation | **P2** |

## **4.4 Legal Entity Management — Chombo (MOD-13)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-CHM-001** | Entity Registry | Register legal entities of any type (corporation, LLP, non-profit, trust, etc.) with full statutory details | **P0** |
| **F-CHM-002** | Group Structure | Multi-entity group visualisation with ownership percentages and group entity relationship graph | **P0** |
| **F-CHM-003** | Jurisdiction Policy Packs | 45+ jurisdiction compliance rule packs; obligations derived automatically from entity type and jurisdiction | **P0** |
| **F-CHM-004** | Filing Calendar | Automated filing schedule generation; configurable lead-time alerts; overdue escalation with evidence attachment | **P0** |
| **F-CHM-005** | UBO/PSC Register | Ultimate Beneficial Owner and Persons with Significant Control register with event-triggered update prompts | **P1** |
| **F-CHM-006** | Compliance Evaluation | On-demand and scheduled evaluation of entity compliance posture; alert summary dashboard | **P0** |
| **F-CHM-007** | Director/Officer Registry | Track appointments, resignations, and statutory obligations for all directors and officers across all entities | **P1** |

## **4.5 Finance & Accounting (MOD-14)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-FIN-001** | Double-Entry Ledger | Full double-entry accounting with chart of accounts, journal entries, and period management | **P0** |
| **F-FIN-002** | Multi-Entity Support | Separate ledgers per entity with shared chart of accounts template and automatic intercompany elimination | **P0** |
| **F-FIN-003** | Multi-Currency | Functional and presentation currency support; real-time FX rates; revaluation journals | **P0** |
| **F-FIN-004** | Financial Statements | P\&L, balance sheet, cash flow statement in GAAP/IFRS format; consolidated group statements | **P0** |
| **F-FIN-005** | Accounts Payable | Supplier invoice creation, approval workflow, 3-way PO matching, and payment run management | **P0** |
| **F-FIN-006** | Accounts Receivable | Customer invoicing, payment terms, automated reminders, receipt allocation, and AR ageing report | **P0** |
| **F-FIN-007** | Payroll Integration | Payroll computation with jurisdiction-aware deductions; automatic journal posting; payslip generation | **P0** |
| **F-FIN-008** | Budget Management | Budget creation per cost centre/project; budget vs. actual variance reporting; variance alerts | **P1** |
| **F-FIN-009** | Restricted Fund Accounting | Fund-level P\&L and balance sheet for non-profits; restriction management; fund utilisation reporting | **P1** |
| **F-FIN-010** | Group Consolidation | Automated group consolidation with intercompany elimination; minority interest calculation | **P1** |
| **F-FIN-011** | Cash Flow Forecasting | 13-week rolling cash flow forecast incorporating AR, AP, payroll, and committed contracts | **P1** |
| **F-FIN-012** | Banking Integration | Open banking API integration for bank feed reconciliation; bank statement import | **P2** |
| **F-FIN-013** | Project Accounting | Cost allocation to projects; project P\&L; capitalisation workflow | **P2** |

## **4.6 Human Resources (MOD-16)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-HR-001** | Employee Lifecycle | Complete lifecycle management: pre-hire through termination with status-driven workflow triggers | **P0** |
| **F-HR-002** | Compensation Management | Salary, hourly, and commission compensation records with effective dating and history | **P0** |
| **F-HR-003** | Leave Management | Configurable leave types with accrual policies; approval workflow; calendar integration; balance tracking | **P0** |
| **F-HR-004** | Recruitment | Job requisition, application tracking, interview scheduling, offer management, and onboarding handoff | **P1** |
| **F-HR-005** | Payroll Computation | Gross-to-net payroll calculation with jurisdiction-aware statutory deductions and employer costs | **P0** |
| **F-HR-006** | Performance Reviews | Configurable review cycles: self-assessment, manager review, calibration, and outcome communication | **P1** |
| **F-HR-007** | Certifications & Training | Mandatory certification tracking with expiry alerts; training completion linked to Learning module | **P1** |
| **F-HR-008** | Succession Planning | Key person identification, successor mapping, and readiness scoring | **P2** |
| **F-HR-009** | Workforce Analytics | Headcount trends, attrition, gender pay gap, and organisational structure health metrics | **P2** |

## **4.7 Governance, Risk & Compliance (MOD-15)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-GRC-001** | Obligation Register | Regulatory and contractual obligation inventory with jurisdiction tagging and ownership assignment | **P0** |
| **F-GRC-002** | Control Library | Control register linked to obligations; control testing with evidence; effectiveness rating | **P0** |
| **F-GRC-003** | Audit Management | Internal and external audit engagement lifecycle; finding management; management response tracking | **P1** |
| **F-GRC-004** | Automated Evidence | Automatic evidence collection from connected modules (access logs, training records, financial approvals) | **P1** |
| **F-GRC-005** | Regulatory Change Management | Regulatory change tracking; impact assessment workflow; control update queue | **P2** |

## **4.8 Risk Management (MOD-33)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-RSK-001** | Risk Register | Risk registry with category, likelihood/impact scoring, treatment type, and ownership | **P0** |
| **F-RSK-002** | KRI Monitoring | Key Risk Indicator library with automated value updates from Finance, HR, and IT data sources | **P0** |
| **F-RSK-003** | Threshold Alerting | Amber/red KRI threshold alerts with automatic escalation to risk owner and executive sponsor | **P0** |
| **F-RSK-004** | Treatment Plans | Treatment plan management with milestones, owners, and residual risk tracking | **P1** |
| **F-RSK-005** | Risk Heat Map | Visual 5×5 likelihood/impact heat map with drill-down to individual risks | **P1** |
| **F-RSK-006** | Risk Appetite Framework | Configurable risk appetite statements per category; automatic appetite breach detection | **P1** |

## **4.9 Analytics & Reporting (MOD-02)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-ANL-001** | Executive Dashboard | Real-time cross-domain KPI dashboard; configurable metric selection; \<60s data refresh | **P0** |
| **F-ANL-002** | Cross-Domain KPIs | KPIs that combine data from multiple modules: revenue per employee, compliance score, cash runway | **P0** |
| **F-ANL-003** | Trend Analysis | 3-year historical trend charts for all key metrics; anomaly detection with alert | **P1** |
| **F-ANL-004** | Custom Reports | Report builder with configurable dimensions, filters, and visualisations; scheduled delivery | **P1** |
| **F-ANL-005** | Export | Export all reports to CSV, XLSX, and PDF; automated delivery via email or webhook | **P1** |
| **F-ANL-006** | BI Integration | Data connector for Tableau, Power BI, Looker, and Metabase via JDBC/ODBC or REST export | **P2** |

## **4.10 Sales & CRM (MOD-34 & MOD-08)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-SAL-001** | Opportunity Pipeline | Lead-to-close opportunity management with configurable stages and probability weighting | **P0** |
| **F-SAL-002** | Revenue Forecasting | Weighted and commit-based forecast views; rep, team, and company level; forecast vs. target | **P1** |
| **F-SAL-003** | Commission Engine | Configurable commission plans with quotas, rates, accelerators, and SPIFF; automated calculation | **P1** |
| **F-SAL-004** | Territory Management | Territory definition and assignment; rep-level pipeline filtering | **P2** |
| **F-SAL-005** | AI Deal Scoring | ML-based deal health score from historical win/loss data; risk flag on stalled deals | **P2** |
| **F-CRM-001** | Account & Contact Management | Full account hierarchy with contacts, interactions, and relationship strength tracking | **P0** |
| **F-CRM-002** | Interaction Logging | Log calls, emails, and meetings; link to opportunities; automated interaction capture via email integration | **P1** |

## **4.11 Operations & Supply Chain (MOD-25 & MOD-37)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-OPS-001** | Procurement Lifecycle | Purchase requisition → PO → goods receipt → invoice → payment full lifecycle | **P0** |
| **F-OPS-002** | Inventory Management | Inventory ledger with configurable reorder triggers; multi-location support; stock take workflow | **P1** |
| **F-OPS-003** | Supplier Registry | Supplier master with risk rating, performance scorecard, and contact management | **P1** |
| **F-OPS-004** | Process Orchestration | Configurable workflow engine: human tasks, automated tasks, conditional branching, and event triggers | **P1** |
| **F-OPS-005** | Work Management | Full work item lifecycle: backlog, sprint/kanban, time logging, dependencies, and reporting | **P0** |

## **4.12 Marketing — Soko (MOD-22)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-MKT-001** | Campaign Management | Campaign lifecycle from brief to execution; multi-channel; budget tracking; KPI targets | **P1** |
| **F-MKT-002** | Strategy Pack Engine | 70+ marketing strategy packs evaluated against campaign context; ranked insight and action recommendations | **P1** |
| **F-MKT-003** | Market Signal Ingestion | Real-time ingestion of market signals (clicks, conversions, impressions) from connected channels | **P1** |
| **F-MKT-004** | Attribution Reporting | CAC, CVR, CTR, ROI, and ROAS per campaign, channel, and audience segment | **P1** |
| **F-MKT-005** | CRM Integration | Closed-loop attribution: link won opportunities to originating campaigns | **P2** |

## **4.13 IT & Asset Management (MOD-18)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-IT-001** | CMDB | Configuration item registry for hardware, software, cloud resources, and services; automated discovery integration | **P1** |
| **F-IT-002** | ITSM | Incident, problem, and service request lifecycle with SLA management and escalation | **P1** |
| **F-IT-003** | Change Management | Change request with CAB review, emergency approval path, and post-implementation review | **P1** |
| **F-IT-004** | Software Licensing | License inventory, compliance monitoring, and renewal calendar | **P2** |

## **4.14 Knowledge, Learning & Portal (MOD-19, MOD-20, MOD-26)**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-KNL-001** | Knowledge Base | Searchable knowledge articles with full-text search, tagging, and AI-assisted search | **P1** |
| **F-LRN-001** | Learning Paths | Structured learning paths with courses, quizzes, and completion certificates | **P1** |
| **F-LRN-002** | Compliance Training | Mandatory training assignment with deadline tracking and completion evidence for GRC module | **P1** |
| **F-PRT-001** | Employee Portal | Personalised portal home with tasks, notifications, quick actions, and module navigation | **P0** |
| **F-PRT-002** | Global Search | Cross-module full-text search returning people, documents, work items, and knowledge articles | **P1** |
| **F-PRT-003** | Notification Centre | Consolidated notification feed with action buttons; configurable notification preferences | **P0** |

## **4.15 API, SDK & Clients**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-API-001** | REST API | Full RESTful API with OpenAPI 3.1 specification; cursor pagination; structured error responses | **P0** |
| **F-API-002** | WebSocket Events | Real-time event stream via WebSocket for dashboard updates and notifications | **P1** |
| **F-API-003** | Rate Limiting | Per-client API rate limiting with configurable limits; 429 response with Retry-After header | **P0** |
| **F-API-004** | Webhook Outbound | Configurable outbound webhooks on any event topic with HMAC-SHA256 signing and retry | **P1** |
| **F-API-005** | Java GUI Client | Full JavaFX GUI with screens for all 42 modules; offline read-only mode; deep-linking | **P1** |
| **F-API-006** | Java Shell Client | Menu-driven CLI client for shell and scripted access to all modules | **P1** |
| **F-API-007** | Java Watch Client | Real-time terminal dashboard for live KPI monitoring via WebSocket | **P2** |
| **F-API-008** | Module SDK | Rust SDK with MockKernel, scaffold generator, schema validator, and integration test harness | **P0** |
| **F-API-009** | GraphQL (Experimental) | GraphQL read API for complex client queries; experimental; opt-in | **P3** |

## **4.16 Deployment & Operations**

| Feature ID | Feature | Description | Pri |
| :---- | :---- | :---- | ----- |
| **F-DEP-001** | Embedded Mode | Single binary with SQLite; zero external dependencies; 1-command local start | **P0** |
| **F-DEP-002** | Docker Compose Mode | Docker Compose stack with PostgreSQL and Redis; production-ready for up to \~500 users | **P0** |
| **F-DEP-003** | Kubernetes / Helm | Helm chart with HPA, PDB, and rolling upgrade support; targets enterprise scale | **P1** |
| **F-DEP-004** | Environment Config | All configuration via environment variables; no restart required for non-kernel config changes | **P0** |
| **F-DEP-005** | Backup & Recovery | Scheduled full, incremental, and differential backups; AES-256 encryption; point-in-time restore | **P0** |
| **F-DEP-006** | Health Endpoint | /health endpoint with per-module status; Prometheus /metrics endpoint | **P0** |
| **F-DEP-007** | Rolling Upgrade | Zero-downtime rolling upgrade; mixed schema version tolerance during rollout | **P1** |
| **F-DEP-008** | SBOM & Provenance | CycloneDX/SPDX software bill of materials; GPG-signed release artefacts | **P2** |

# **5\. Non-Functional Requirements**

Non-functional requirements define the quality attributes of the UME platform. All P0 NFRs are mandatory for general availability. P1 NFRs must be met within 3 months of GA.

## **5.1 Performance**

| Metric | Target | Measurement Method | Priority |
| :---- | :---- | :---- | :---- |
| API response time (P50) | \< 100ms | Prometheus histogram; measured at API gateway | P0 |
| API response time (P95) | \< 500ms | Prometheus histogram; measured at API gateway | P0 |
| API response time (P99) | \< 2,000ms | Prometheus histogram; measured at API gateway | P0 |
| Executive dashboard refresh | \< 60 seconds | Synthetic monitor; full KPI reload time | P0 |
| Full-text search response | \< 1 second | Measured in integration tests with 100K document corpus | P1 |
| Batch report generation | \< 30 seconds for standard reports | Automated report generation benchmark | P1 |
| Event bus throughput | \> 10,000 events/second (in-process) | Load test with simulated event flood | P1 |
| Audit record write latency | \< 50ms P99 | Prometheus histogram on audit write path | P0 |
| Kernel boot time | \< 30 seconds with all 42 modules | CI boot benchmark | P0 |
| Module health check | \< 500ms per module | Supervisor engine timeout measurement | P0 |

## **5.2 Scalability**

| Dimension | Target | Notes |
| :---- | :---- | :---- |
| Concurrent users per node | 500 | Sustained concurrent active sessions per server node |
| Total employees per organisation | 100,000 | Employee records across all entities in the group |
| Work items per organisation | 1,000,000 | Total active and historical work items |
| Journal entries per organisation | 10,000,000 | Cumulative general ledger entries |
| CRM contacts per organisation | 50,000 | Active contact records |
| Horizontal scaling | Stateless; scale by adding nodes | Session state in Redis; shared PostgreSQL |
| Database read scaling | Read replicas for analytics queries | Write to primary; analytics queries to replica |
| Kubernetes auto-scaling | HPA triggers at 70% CPU | Custom metric: event bus queue depth |

## **5.3 Availability & Reliability**

| Metric | Standard Tier | Enterprise Tier | Measurement |
| :---- | :---- | :---- | :---- |
| Uptime SLA | 99.9% (8.7 hrs downtime/yr) | 99.95% (4.4 hrs downtime/yr) | Synthetic monitor; 1-minute polling |
| RTO (Recovery Time Objective) | \< 4 hours | \< 1 hour | Measured during DR drills |
| RPO (Recovery Point Objective) | \< 1 hour | \< 15 minutes | Backup frequency verification |
| Planned maintenance window | \< 2 hours/month | \< 30 minutes/month | Measured against maintenance schedule |
| MTTD (Mean Time to Detect) | \< 5 minutes | \< 2 minutes | Alert pipeline latency measurement |
| MTTR (Mean Time to Resolve) | \< 30 minutes | \< 15 minutes | Incident management records |
| Data durability | ≥ 99.999999% (8 nines) | ≥ 99.999999% (8 nines) | S3/equivalent SLA for backup storage |

## **5.4 Security**

| Requirement | Specification | Priority |
| :---- | :---- | :---- |
| Encryption at rest | AES-256-GCM for all persisted data; key managed via CryptoVault; rotation without downtime | P0 |
| Encryption in transit | TLS 1.2+ mandatory for all API connections in production; TLS 1.3 preferred | P0 |
| Authentication strength | bcrypt cost 12 or Argon2id for passwords; RS256 JWT; MFA mandatory for admin roles | P0 |
| RBAC enforcement | All operations checked by kernel RBAC before execution; no bypass path exists | P0 |
| Audit completeness | Every mutating operation produces an audit record; RBAC denials always audited | P0 |
| PII handling | PII fields encrypted at field level; masked in logs; GDPR/CCPA-compliant data subject workflows | P0 |
| Vulnerability management | SAST in CI; dependency scanning; container scanning; 72-hour SLA for critical CVEs | P0 |
| Penetration testing | Annual third-party penetration test; critical findings remediated within 30 days | P1 |
| SBOM | Software bill of materials published with every release (CycloneDX format) | P1 |
| Session security | JWT revocation within 60 seconds; IP allowlisting option; concurrent session limit | P1 |

## **5.5 Usability & Accessibility**

| Requirement | Specification | Priority |
| :---- | :---- | :---- |
| System Usability Score | SUS score ≥ 75 ("Good") across all primary personas | P0 |
| Task completion time | Time for a new user to complete core tasks (create employee, post journal, file evidence) \< 5 minutes each | P1 |
| Error messages | All error messages in plain language; include the cause and the corrective action; no technical jargon | P0 |
| Accessibility standard | WCAG 2.1 Level AA compliance for the web portal and Java GUI client | P1 |
| Responsive design | Web portal functional on screens ≥ 768px wide | P1 |
| Internationalisation | UI supports right-to-left languages; date, time, and number formats locale-aware | P2 |
| Onboarding | A new organisation can complete setup and post its first journal entry in \< 30 minutes without documentation | P1 |

## **5.6 Maintainability & Quality**

| Requirement | Specification | Priority |
| :---- | :---- | :---- |
| Test coverage — ume\_core, kernel | ≥ 80% line coverage maintained in CI | P0 |
| Test coverage — modules | ≥ 70% line coverage maintained in CI | P0 |
| Integration tests | Full module integration test suite using MockKernel; run on every PR | P0 |
| Linting & formatting | cargo clippy and cargo fmt enforced in CI; zero warnings policy | P0 |
| Dependency hygiene | Dependabot or equivalent; critical CVE patches within 72 hours | P0 |
| Build time | Full workspace Rust build \< 20 minutes in CI; Java build \< 10 minutes | P1 |
| Deployment automation | Zero-downtime rolling deploys; schema migration auto-applied on startup | P0 |
| Deprecation window | Stable APIs deprecated for a minimum of 2 minor versions before removal | P0 |

# **6\. Release Plan & Roadmap**

UME is released in four milestones. Each milestone delivers a complete, usable increment of value — not a partial or preview release. Priority tags from the Feature Catalogue (§4) map directly to milestones.

| Release Philosophy Each release is a working product, not a checkpoint. Every milestone delivers end-to-end value for a defined set of personas. P0 features ship in Milestone 1\. P1 features ship in Milestones 1–2. P2 features ship in Milestones 3–4. P3 features are post-roadmap. |
| :---- |

| Milestone 1 — Foundation  — Q3 2026 — Target: General Availability |  |
| :---- | :---- |
| **Theme** | Complete end-to-end operational capability for a single-entity organisation. |
| **Kernel** | Full kernel lifecycle: RBAC, event bus, audit chain, storage abstraction, supervisor, executor pool. |
| **Security** | Local auth \+ MFA (TOTP); JWT tokens; cryptographic vault; AES-256 encryption. |
| **Administration** | Org unit hierarchy; policy management with acknowledgment tracking. |
| **Finance** | Full double-entry ledger; AP/AR; multi-currency; payroll; financial statements; period management. |
| **HR** | Employee lifecycle; leave management; payroll integration; compensation records. |
| **Legal Entity** | Entity registry; 20 priority jurisdiction policy packs; filing calendar with alerts. |
| **Risk** | Risk register; KRI monitoring with threshold alerts; basic heat map. |
| **Work** | Work items; sprint management; time logging; employee portal with notifications. |
| **API** | Full REST API; OpenAPI 3.1 spec; WebSocket events; rate limiting. |
| **Deployment** | Embedded mode (SQLite); Docker Compose mode; /health and /metrics endpoints. |
| **SDK** | Module SDK with MockKernel; scaffold generator; schema validator. |
| **Quality Gate** | SUS ≥ 75; P50 API \< 100ms; P95 \< 500ms; 80%+ kernel/core test coverage; zero known P0 bugs. |
| **Milestone 2 — Growth**  — Q4 2026 |  |
| **Theme** | Multi-entity group operations; GRC capability; sales and marketing foundation. |
| **Finance** | Multi-entity consolidation; intercompany elimination; budget management; restricted funds; cash flow forecasting. |
| **Legal Entity** | Remaining 25+ jurisdiction policy packs; UBO/PSC register; director/officer registry. |
| **GRC** | Obligation register; control library; audit management; automated evidence collection. |
| **Sales & CRM** | Opportunity pipeline; revenue forecasting; account and contact management; commission engine. |
| **Marketing (Soko)** | Campaign management; strategy pack engine (70+ packs); market signal ingestion; attribution. |
| **HR** | Recruitment; performance reviews; certification and training tracking. |
| **Security** | Incident management; vulnerability register; privacy module (RoPA/DPIA/DSAR). |
| **IT** | CMDB; ITSM; change management. |
| **Analytics** | Cross-domain KPI dashboard; trend analysis; custom report builder; export. |
| **Java Client** | Java GUI client (all 42 module screens); Java shell client. |
| **Deployment** | Kubernetes Helm chart; rolling upgrade support. |
| **Integrations** | SSO (OAuth2/OIDC, SAML); outbound webhooks; banking integration (open banking). |
| **Quality Gate** | All P1 NFRs met; SUS ≥ 78; 500 concurrent user load test passing. |
| **Milestone 3 — Ecosystem**  — Q1 2027 |  |
| **Theme** | Third-party extensibility; advanced analytics; operational depth. |
| **SDK** | Public custom module marketplace; module signing and verification; vendor registration. |
| **Analytics** | BI tool integration (Tableau, Power BI, Looker); anomaly detection. |
| **Operations** | Full supply chain module; project accounting; multi-echelon inventory. |
| **Board** | Board meeting management; resolution recording; board pack assembly. |
| **ESG** | ESG framework management; scope 1/2/3 emissions; social metrics; governance reporting. |
| **Investment** | Fund management; LP capital accounts; portfolio company tracking; IC governance. |
| **Learning** | Full LMS with learning paths, quizzes, and compliance training certificates. |
| **Security** | SIEM integration; IP allowlisting; automated security event forwarding. |
| **Deployment** | Terraform/Pulumi IaC modules; SBOM publication; GPG-signed releases. |
| **Java Client** | Java Watch client (live dashboard); deep-linking (ume://); offline read-only mode. |
| **Milestone 4 — Intelligence**  — Q2 2027 |  |
| **Theme** | AI-assisted organisational intelligence; full sector coverage; enterprise depth. |
| **AI Features** | AI-assisted deal scoring; anomaly detection alerts; AI knowledge search; payroll anomaly detection. |
| **GraphQL** | GraphQL read API (experimental); complex query support for advanced client integrations. |
| **Sector Modules** | Government procurement module; cooperative member management; university grant lifecycle. |
| **Internationalisation** | RTL language support; full locale-aware formatting; non-English UI language packs. |
| **Advanced Security** | Annual penetration test certification; SOC 2 Type II readiness audit; ISO 27001 alignment. |
| **Marketplace** | 50+ third-party custom modules available; ecosystem developer portal. |
| **Analytics** | Predictive cash flow; risk scenario modelling; workforce planning forecasts. |

## **6.1 Feature-to-Milestone Mapping Summary**

| Milestone | P0 Features | P1 Features | P2 Features | Personas Served |
| :---- | :---- | :---- | :---- | :---- |
| Milestone 1 — Foundation | All 47 P0 features | Finance, HR, Legal, Risk, Work, API, Deployment P1s | — | P-01, P-02, P-10, P-11, P-12, P-15, P-17, P-18 |
| Milestone 2 — Growth | — | Remaining P1 features (GRC, Sales, Marketing, Analytics, Java client) | SSO, webhooks, banking | P-03 to P-14, P-16 |
| Milestone 3 — Ecosystem | — | — | BI integration, supply chain, board, ESG, investment | All 18 personas; adds board and sector users |
| Milestone 4 — Intelligence | — | — | P3 GraphQL, internationalisation | All personas; AI-augmented workflows |

# **7\. Product Success Metrics**

UME's product success is measured across four dimensions: adoption, outcome delivery, quality, and ecosystem growth. Metrics are collected automatically from deployed instances (with consent) and from user research.

## **7.1 Adoption Metrics**

| Metric | Definition | Target (12 months post-M1) | Source |
| :---- | :---- | :---- | :---- |
| Organisations onboarded | Total paying organisations with ≥1 active user | 500+ | Platform telemetry |
| Daily Active Users (DAU) | Users who take at least one action per day | 70%+ of licensed users | Session logs |
| Module adoption breadth | Average number of modules actively used per organisation | ≥ 8 modules | Platform telemetry |
| API usage | Organisations using the REST API or webhook integration | 30%+ of organisations | API gateway logs |
| Custom modules installed | Third-party or custom modules installed from marketplace | 50+ unique modules | Marketplace telemetry |
| Platform consolidation | Orgs reporting UME as their primary operational platform | 80%+ at 12 months | Quarterly survey |

## **7.2 Outcome Metrics**

| Metric | Definition | Target | Measurement |
| :---- | :---- | :---- | :---- |
| Compliance deadline failures | % of UME-deployed orgs that miss a statutory filing deadline in a 12-month period | \< 5% | Annual compliance survey |
| Time to consolidated financials | Hours from period end to complete consolidated group P\&L | \< 4 hours (was 3–10 days) | Finance team survey at 6 months |
| Admin time saved | Hours/week saved on organisational administration vs. pre-UME | ≥ 6 hours/week for founders | User time-tracking survey |
| KRI-to-action lag | Minutes from KRI threshold breach to risk owner notification | \< 5 minutes | Platform event log measurement |
| Employee lifecycle automation | % of onboarding tasks triggered automatically vs. manually | ≥ 90% automated | HR process audit at 6 months |
| Payroll error rate | % of payroll runs requiring manual correction after initial calculation | \< 0.5% | Finance audit |

## **7.3 Quality Metrics**

| Metric | Target | Measurement Frequency |
| :---- | :---- | :---- |
| P0/P1 bug escape rate to production | 0 P0 bugs; \< 2 P1 bugs per release | Per release |
| Mean Time to Resolution (P0 bugs) | \< 4 hours | Per incident |
| API uptime (production) | ≥ 99.9% (standard) / 99.95% (enterprise) | Continuous; monthly report |
| API P95 latency | \< 500ms | Continuous; weekly review |
| Test coverage — core and kernel | ≥ 80% | Per PR; CI enforcement |
| Security vulnerability SLA | Critical CVE patched within 72 hours; high within 14 days | Per advisory |
| Documentation completeness | All P0 features have user-facing documentation before release | Pre-release checklist |

## **7.4 Ecosystem Metrics**

| Metric | Target (M3 — Q1 2027\) | Target (M4 — Q2 2027\) |
| :---- | :---- | :---- |
| Marketplace modules published | 20+ | 50+ |
| Registered SDK developers | 100+ | 500+ |
| Jurisdiction policy packs active | 45+ | 65+ |
| Community forum members | 500+ | 2,000+ |
| Partner integrations (native connectors) | Slack, Teams, Salesforce, QuickBooks, Xero | \+ SAP, NetSuite, HubSpot, Stripe |

# **8\. Constraints, Assumptions & Dependencies**

## **8.1 Product Constraints**

| Constraint | Impact on Product Decisions |
| :---- | :---- |
| Must be operable by a non-technical 1-person business without IT staff | Embedded mode must be truly zero-configuration; all setup through UI; no TOML editing required for standard use |
| Must comply with GDPR, CCPA, and equivalent data residency requirements | Data export, deletion, and residency controls are P0; field-level PII encryption is mandatory |
| Core operations must function offline (embedded mode) | All P0 features must work without network connectivity; sync model for future cloud mode |
| Must be affordable for a 1-person organisation | Pricing model must include a solo-accessible tier; platform cost must be \< competitive tool stack cost at every scale |
| Jurisdiction policy packs must be kept current with regulatory changes | Requires a separate content/regulatory team operating post-launch; pack updates ship independently from platform releases |
| Must not require a Rust developer to operate or extend the platform | All configuration via UI or env vars; SDK designed for module developers, not platform operators |

## **8.2 Assumptions**

| ID | Assumption | Risk if Wrong |
| :---- | :---- | :---- |
| A-01 | Organisations will trust a single platform with all their operational data | Security and on-premises deployment must be demonstrably strong; self-hosted option is a M1 requirement |
| A-02 | PostgreSQL and SQLite are sufficient database backends for Milestone 1–2 scale | May need to prioritise additional backends (CockroachDB, Aurora) earlier if large enterprises adopt faster than expected |
| A-03 | The Rust ecosystem provides sufficient library maturity for all required integrations (SMTP, S3, JWT, Argon2) | Tracked per dependency; alternatives selected in advance for critical paths |
| A-04 | Jurisdiction compliance obligations can be modeled as versioned rule-based policy packs for 45+ jurisdictions | High-complexity jurisdictions (US federal \+ 50-state, EU multi-framework) may require expert legal review per pack |
| A-05 | Third-party developers will adopt the module SDK if it is well-documented and discoverable | Requires investment in developer documentation, sample modules, and active community engagement from launch |
| A-06 | Banking open banking APIs are stable enough for automated bank feed reconciliation in key markets (UK, EU, AU) | Bank API reliability varies; manual import fallback must always be available |

## **8.3 External Dependencies**

| Dependency | Type | Milestone | Risk Level | Mitigation |
| :---- | :---- | :---- | :---- | :---- |
| PostgreSQL 16+ | Required for Standard/Enterprise deployment | M1 | Low | Stable, well-supported; SQLite fallback always available |
| NATS JetStream or Kafka | Required for multi-node event bus | M1 | Medium | In-memory bus available for single-node; external broker optional |
| Open Banking APIs | Required for bank feed reconciliation | M2 | High | Manual bank statement import is the primary path; API integration is enhancement |
| Identity providers (Azure AD, Okta) | Required for enterprise SSO | M2 | Low | Local auth is P0 and always available; SSO is enhancement |
| Tax data provider | Required for real-time payroll tax rates in 45+ jurisdictions | M1 | Medium | Built-in tax tables updated per release; live API integration deferred to M2 |
| S3-compatible storage | Required for document management and backup off-site replication | M1 (backup) | Low | Multiple providers (AWS S3, GCS, MinIO); self-hosted option available |
| Java 17+ runtime | Required for Java client suite | M2 | Low | LTS version; widely available |

## **8.4 Out of Scope (v1.0)**

The following are explicitly out of scope for UME v1.0 and will be considered for future versions:

* Mobile native applications (iOS/Android) — the web portal is responsive; native apps are post-v1.0

* AI/LLM-generated reports or autonomous actions — AI deal scoring and anomaly detection (M4) are the extent of AI in v1.0

* Inter-organisation data sharing or network effects — UME v1.0 is single-organisation; B2B collaboration features are post-v1.0

* Real-time accounting validation with tax authorities (Making Tax Digital streaming API) — standard submission flows only in v1.0

* Built-in video conferencing or document co-editing — integrations with Zoom, Google Docs etc. are in scope; building these is not

* Blockchain-based audit trail — the cryptographic hash chain provides tamper evidence; distributed ledger is not required for this use case

# **Appendix A: Module Catalogue**

Complete listing of all 42 UME organisation modules with their identifiers and primary capabilities.

| Mod ID | Module Name | Domain | Primary Capability | Milestone |
| :---- | :---- | :---- | :---- | :---- |
| MOD-01 | Administration | Organisation | Org structure, policies, calendar, delegation | M1 |
| MOD-02 | Analytics | Intelligence | Cross-domain KPIs, dashboards, trend analysis | M2 |
| MOD-03 | Backup | Infrastructure | Scheduled backup, restore, encryption, off-site replication | M1 |
| MOD-04 | Board | Governance | Board meetings, resolutions, packs, quorum, conflict | M3 |
| MOD-05 | Business Development | Growth | Partnerships, BD pipeline, MOU tracking | M3 |
| MOD-06 | Content Management | Knowledge | Documents, versioning, approval workflow | M2 |
| MOD-07 | Communications | Platform | Email, SMS, push, in-app notification dispatch | M1 |
| MOD-08 | CRM | Revenue | Accounts, contacts, interactions, relationships | M2 |
| MOD-09 | Design System | Platform | UI theme, component library, branding configuration | M1 |
| MOD-10 | Engineering | Technology | Codebase, CI/CD pipeline visibility, tech radar | M3 |
| MOD-11 | ESG | Governance | Emissions tracking, ESG reporting frameworks | M3 |
| MOD-12 | Enterprise Management | Administration | Enterprise-wide configuration, multi-instance admin | M2 |
| MOD-13 | Legal Entity (Chombo) | Compliance | Entity registry, jurisdiction packs, filing calendar | M1 |
| MOD-14 | Finance | Finance | Ledger, AR/AP, payroll, multi-entity, statements | M1 |
| MOD-15 | GRC | Compliance | Obligations, controls, audits, evidence collection | M2 |
| MOD-16 | Human Resources | People | Lifecycle, compensation, leave, payroll, performance | M1 |
| MOD-17 | Investment | Finance | Fund management, LP accounts, portfolio, IC governance | M3 |
| MOD-18 | IT & Assets | Technology | CMDB, ITSM, change management, software licensing | M2 |
| MOD-19 | Knowledge | Collaboration | Knowledge base, search, article management | M2 |
| MOD-20 | Learning & Development | People | LMS, learning paths, compliance training, certificates | M2 |
| MOD-21 | Strategy | Leadership | OKRs, strategic initiatives, strategic review cycles | M2 |
| MOD-22 | Marketing (Soko) | Revenue | Campaigns, strategy packs, signal ingestion, attribution | M2 |
| MOD-23 | Master Data Management | Platform | Golden record management, deduplication, MDM workflow | M3 |
| MOD-24 | Office & Facilities | Operations | Space management, visitor management, desk booking | M3 |
| MOD-25 | Operations | Operations | Operational KPIs, cross-departmental processes | M2 |
| MOD-26 | Portal | Platform | Employee portal, search, notification centre, quick actions | M1 |
| MOD-27 | Portfolio | Projects | Portfolio, programme, project hierarchy; milestones | M2 |
| MOD-28 | PR & Branding | Communications | Press management, brand guidelines, media contacts | M3 |
| MOD-29 | Process & Orchestration | Platform | Workflow engine, process templates, SLA management | M1 |
| MOD-30 | Product Management | Technology | Product backlog, roadmap, feedback, release planning | M3 |
| MOD-31 | Production & Manufacturing | Operations | Production orders, BOMs, quality control, MES integration | M3 |
| MOD-32 | Requirements Management | Technology | Business and technical requirements, traceability matrix | M3 |
| MOD-33 | Risk Management | Governance | Risk register, KRIs, treatment plans, heat map | M1 |
| MOD-34 | Sales | Revenue | Pipeline, forecasting, commissions, territory, AI scoring | M2 |
| MOD-35 | Schedule | Operations | Organisational calendar, resource scheduling, booking | M2 |
| MOD-36 | Security | Compliance | IAM, incidents, vulnerabilities, privacy, vault, SIEM | M1 |
| MOD-37 | Supply Chain | Operations | Procurement, inventory, supplier management | M2 |
| MOD-38 | Teams & Cooperatives | People | Team management, cooperative member equity, governance | M3 |
| MOD-39 | Templates | Platform | Document and workflow template library | M2 |
| MOD-40 | Work Management | Delivery | Work items, sprints, backlogs, time logging | M1 |
| MOD-41 | Custom UME Modules | Extension | Platform-provided custom module framework | M1 |
| MOD-42 | Custom Org Modules | Extension | Organisation-private custom module framework | M1 |

# **Appendix B: User Story Index**

| Story ID | As a… | I want to… | Module | Milestone |
| :---- | :---- | :---- | :---- | :---- |
| US-ADM-001 | P-01 CEO | manage the org entity structure | MOD-01 | M1 |
| US-ADM-002 | P-06 Legal Officer | publish a policy and track acknowledgment | MOD-01 | M1 |
| US-FIN-001 | P-02 CFO | see consolidated group financials in real time | MOD-14 | M2 |
| US-FIN-002 | P-11 Finance Manager | process a supplier invoice via 3-way match | MOD-14 | M1 |
| US-FIN-003 | P-11 Finance Manager | run payroll with automatic journal posting | MOD-14 | M1 |
| US-FIN-004 | P-17 Freelancer | send an invoice and track payment | MOD-14 | M1 |
| US-CHM-001 | P-06 Legal Officer | see all upcoming filing deadlines across all entities | MOD-13 | M1 |
| US-CHM-002 | P-01 Founder | register a new entity and get a compliance picture | MOD-13 | M1 |
| US-HR-001 | P-12 HR Manager | onboard a new employee with automated tasks | MOD-16 | M1 |
| US-HR-002 | P-15 Employee | request leave and see my balance | MOD-16 | M1 |
| US-HR-003 | P-05 CHRO | run an annual performance review cycle | MOD-16 | M2 |
| US-GRC-001 | P-07 Risk Manager | be alerted automatically when a KRI breaches a threshold | MOD-33 | M2 |
| US-GRC-002 | P-13 Compliance Manager | prepare for an internal audit without 2 weeks of prep | MOD-15 | M2 |
| US-SAL-001 | P-10 VP Sales | forecast revenue accurately for the next quarter | MOD-34 | M2 |
| US-SAL-002 | P-10 VP Sales | calculate and distribute commission statements | MOD-34 | M2 |
| US-SEC-001 | P-08 CTO | respond to a P1 security incident with a structured process | MOD-36 | M2 |
| US-IT-001 | P-16 IT Admin | manage a production change through a full CAB process | MOD-18 | M2 |
| US-WRK-001 | P-14 Project Manager | run a sprint with full visibility into delivery progress | MOD-40 | M1 |
| US-WRK-002 | P-15 Employee | find any info and take action from a single portal | MOD-26 | M1 |

# **Appendix C: Acceptance Criteria Template**

All user stories must have acceptance criteria documented before sprint planning. Use the following template:

| AC Template   Given \[context / precondition\]   When  \[action taken by the user or system\]   Then  \[expected observable outcome\]   And   \[additional expected outcomes, if any\]   Non-functional criteria:     Performance: \[response time / throughput target, if applicable\]     Audit:       \[what audit record must be created\]     RBAC:        \[what permission is required\]     Event:       \[what domain event must be published\] |
| :---- |

# **Appendix D: Glossary**

| Term | Definition |
| :---- | :---- |
| Chombo | The UME Legal Entity Management module. Chombo is the Swahili/Shona word for "tool" or "instrument". |
| Soko | The UME Marketing module. Soko is the Swahili word for "market". |
| Kernel | The UME runtime process composition root: manages all modules, subsystems, and shared infrastructure. |
| Policy Pack | A versioned, machine-readable set of compliance obligations for a specific jurisdiction and entity type. |
| Domain Event | An immutable fact emitted to the event bus after a state-changing operation, in format {domain}.{resource}.{verb}. |
| KRI | Key Risk Indicator: a metric that provides early warning of a risk approaching its appetite threshold. |
| SUS | System Usability Scale: a 10-question standardised questionnaire producing a 0–100 usability score. |
| JTBD | Jobs To Be Done: the underlying goal or progress a user is trying to make by using the product. |
| P0/P1/P2/P3 | Product priority levels: P0 \= must-have for launch, P1 \= required for GA, P2 \= important, P3 \= desirable. |
| Multi-tenancy | The ability to serve multiple organisations from a single platform deployment with complete data isolation. |
| RFC 2119 | IETF document defining the requirement level keywords SHALL, SHOULD, MAY used in UME specifications. |
| RBAC | Role-Based Access Control: permissions are assigned to roles, roles are assigned to users. |
| CAB | Change Advisory Board: governance body that reviews and approves IT changes before implementation. |
| DSAR | Data Subject Access Request: a request under GDPR/CCPA for an individual to see their personal data. |
| RoPA | Record of Processing Activities: a mandatory GDPR register of all personal data processing activities. |
| DPIA | Data Protection Impact Assessment: a structured risk assessment required for high-risk data processing. |

