

|  |
| :---- |

**UME**

Organisation Operating System

**Design & Architecture Document**

| Document ID | UME-DA-003 |
| :---- | :---- |
| **Version** | 3.0.0 |
| **Status** | APPROVED — FOR DISTRIBUTION |
| **Date** | March 2026 |
| **Classification** | Confidential |
| **Owner** | UME Platform Engineering |

© 2026 UME Technologies Ltd. All rights reserved. Confidential and proprietary.

# **Document Revision History**

| Version | Date | Author | Changes |
| :---- | :---- | :---- | :---- |
| 1.0.0 | Jan 2025 | Platform Engineering | Initial architecture document — OrgOS v1 release |
| 2.0.0 | Sep 2025 | Platform Engineering | Major revision: ODD governance framework, SDO engine, AI OrgExecs |
| 2.1.0 | Nov 2025 | Platform Engineering | Added DAO/DLT architecture, franchise network topology |
| 2.2.0 | Jan 2026 | Platform Engineering | Multi-region deployment, OrgDNA versioning, security chapter |
| 3.0.0 | Mar 2026 | Platform Engineering | Full platform v3 rewrite: OrgKernel v3, new module architecture, AI-native OrgExec registry |

# **Table of Contents**

# **Executive Summary**

UME is a category-defining platform that delivers a fully integrated Organisation Operating System (OrgOS) — a single, unified platform on which any organisation can run every core business process, from accounting and payroll to AI agent governance, regulatory compliance, multi-entity legal structures, and decentralised autonomous organisation (DAO) operations.

This document provides the complete Design and Architecture specification for the UME platform, covering system architecture, module design, data models, integration patterns, security framework, deployment topology, and the novel governance primitives that distinguish UME from conventional enterprise software.

## **Platform Purpose**

The central thesis of UME is that the fragmentation of business software — where organisations operate 15–40 disconnected SaaS tools — is the primary cause of operational inefficiency, governance failure, and data silos. UME replaces this fragmentation with a single, kernel-driven platform where every module, agent, device, and person operates under a unified operating contract framework called the Organisational Design Document (ODD).

## **Key Architectural Innovations**

* OrgKernel — the central operating kernel that provides event routing, permission enforcement, and state management across all modules.

* Organisational Design Document (ODD) — a versioned, machine-readable governance contract that defines the capabilities, constraints, and operating rules for every actor in the organisation (human employees, AI agents, IoT devices).

* OrgDNA — the exportable, portable configuration of an entire organisation — its structure, module settings, ODD templates, and roles — enabling organisations to be cloned, franchised, or branched in under 60 seconds.

* Software-Defined Organisation (SDO) — a real-time digital twin of the organisation that models every entity, actor, and process as addressable objects with live state.

* OrgExec Registry — unified governance for all organisational actors regardless of type: human employees, AI language model agents, and IoT/OrgCPU devices all operate under the same ODD governance framework.

* DAO & DLT Layer — native support for decentralised autonomous organisation structures, on-chain governance voting, and smart contract royalty/revenue distribution across franchise and partner networks.

## **Document Scope**

This document covers the complete UME platform as of version 3.0.0 (March 2026). It is structured into ten parts:

1. Platform Vision and Product Architecture

2. OrgKernel — Core Operating System

3. ODD Governance Framework

4. OrgDNA and Software-Defined Organisation

5. Module Architecture — all 12 platform modules

6. AI and OrgExec Architecture

7. DAO, DLT, and Smart Contract Architecture

8. Data Architecture and Storage

9. Integration and API Architecture

10. Security, Compliance, and Deployment Architecture

| PART I Platform Vision & Product Architecture |
| :---- |

# **1\. Platform Vision**

## **1.1 The Problem: Organisational Software Fragmentation**

The modern organisation operates in a state of permanent software fragmentation. A typical SMB uses between 12 and 22 SaaS applications for core business operations, while a mid-market firm uses 30–60. Each tool maintains its own data model, authentication system, permission framework, and integration surface. The result is:

* Data inconsistency: customer records, employee data, and financial figures exist in conflicting states across multiple systems.

* Governance gaps: no single policy engine governs all tools; each has its own admin console and compliance configuration.

* Integration tax: 15–30% of engineering time in digital-native businesses is spent maintaining integrations between tools that should be the same platform.

* AI agent incompatibility: modern AI agents and automation tools cannot operate safely across a fragmented tool stack without a governing permission layer.

* Franchise and multi-entity impossibility: scaling a business model across multiple legal entities or franchise networks requires bespoke software or expensive middleware that none of the fragment tools can provide.

## **1.2 The UME Answer: Organisation as Operating System**

UME reconceptualises the organisation as a software system — an operating system — and builds a platform that implements that model comprehensively. Every business process is a module. Every person, agent, and device is a managed actor with an operating contract. Every event is logged, routed, and auditable. Every configuration is exportable and versionable.

The UME mission: make running any organisation as reliable, configurable, and scalable as running a software system.

This is achieved through six foundational architectural choices:

| Principle | Conventional SaaS | UME Platform |
| :---- | :---- | :---- |
| **Data model** | Fragmented across tools | Single unified OrgGraph data model |
| **Governance** | Per-tool admin consoles | ODD — single contract per actor, all tools |
| **Actors** | Only human users | Humans, AI agents, IoT devices — unified OrgExec model |
| **Configuration** | Manual per-tool settings | OrgDNA — versioned, exportable, cloneable |
| **Multi-entity** | Requires separate instances | Native multi-entity with consolidated views |
| **Scalability** | Add more tools | Add OrgApps to existing OrgKernel |

## **1.3 Target Market Segments**

UME is designed to serve five distinct market segments, each with a tailored entry point but sharing the same underlying platform:

| Segment | Description | Primary Entry Point | Distinguishing Need |
| :---- | :---- | :---- | :---- |
| Solo & Micro | 1–5 person businesses, freelancers | OrgOS template \+ Finance \+ CRM | Fast setup, invoicing, legal entity |
| SMB (Core) | 5–50 employees, single entity | Full module stack, single site | Operational efficiency, compliance |
| Growth | 50–250 employees, multi-site | Multi-entity, AI OrgExecs, GRC | Scale without headcount growth |
| Corporate / Enterprise | 250+ employees, group structure | Group consolidation, ODD governance | Governance, audit, OrgDNA control |
| Franchise / DAO Network | Multi-org distributed network | OrgDNA clone, DAO layer, DLT | Consistent operations across entities |

# **2\. Platform Product Architecture**

## **2.1 High-Level Architecture Overview**

The UME platform is structured as a layered architecture with four principal tiers: the Infrastructure tier, the OrgKernel tier, the Module tier, and the Actor tier. Each tier has clearly defined responsibilities and interfaces.

| UME Platform — 4-Tier Architecture |
| :---- |

| Tier | Layer Name | Responsibility | Key Components |
| :---- | :---- | :---- | :---- |
| Tier 4 (Top) | Actor Layer | All principals operating within the OrgOS | Human OrgExecs, AI Agents, OrgCPUs (IoT), External APIs |
| Tier 3 | Module Layer | Domain-specific business functionality | 12 OrgApp modules: Finance, HR, Legal, CRM, Ops, Risk, OrgSystem, DAO, Marketing, Work, Portal, Board |
| Tier 2 | OrgKernel Layer | Core platform services — event bus, ODD enforcement, SDO, auth | OrgKernel, ODD Bus, SDO Engine, OrgDNA Manager, Audit Log, Event Bus |
| Tier 1 (Base) | Infrastructure Layer | Compute, storage, networking, observability | Kubernetes, PostgreSQL, Redis, Kafka, S3-compatible object store, Prometheus/Grafana |

## **2.2 Module Catalogue**

The UME platform ships with 12 first-party OrgApp modules. Additional modules can be installed from the OrgApp Marketplace or developed by third-party ISVs using the UME SDK.

| Module | Code | Category | Core Capabilities |
| :---- | :---- | :---- | :---- |
| Finance & Accounting | FIN | Core | GL, AP/AR, invoicing, bank reconciliation, payroll, multi-entity consolidation, period close, budgeting |
| HR & People | HR | Core | Employee records, ODD contracts, leave, payroll, performance, offboarding, OrgExec registry |
| Legal & Compliance | LEG | Core | Entity management, contract generation, filing calendar, IP registry, document vault, audit packs |
| Sales & CRM | CRM | Core | Customer records, order management, pipeline, invoicing integration, AI Comms agent |
| Operations & ERP | OPS | Core | Inventory, purchase orders, supplier management, equipment/OrgCPU registry, job management |
| Risk & GRC | RISK | Governance | Risk register, KRI monitoring, GRC framework, incident management, board reporting |
| OrgSystem | SYS | Platform | OrgApp registry, SDO digital twin, ODD editor, OrgDNA manager, audit trail, diagnostics |
| DAO & DLT | DAO | Extended | Decentralised governance, smart contracts, DLT ledger, royalty engine, franchise management |
| Marketing | MKT | Extended | Campaign management, micro-persona engine, AI content generation, attribution |
| Work Management | WORK | Extended | Tasks, sprints, projects, time tracking, OrgExec assignment |
| Employee Portal | EP | Extended | Self-service leave, payslips, expense claims, schedule view |
| Board Management | BRD | Governance | Board meetings, minutes, resolutions, director register, statutory reporting |

## **2.3 Platform Editions**

| Edition | Modules Included | OrgExecs | Entities | AI Agents | DAO / DLT |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Micro | Finance, CRM, HR (basic) | Up to 3 | 1 | None | No |
| SMB | All Core modules | Up to 25 | 1 | 2 included | No |
| Growth | All Core \+ Marketing \+ Work | Up to 100 | Up to 3 | 5 included | No |
| Enterprise | All modules | Unlimited | Unlimited | Unlimited | Optional add-on |
| DAO Network | All modules \+ DAO & DLT | Unlimited | Unlimited | Unlimited | Yes — native |

| PART II OrgKernel — Core Operating System |
| :---- |

# **3\. OrgKernel Architecture**

## **3.1 Overview**

The OrgKernel is the central processing and routing engine of the UME platform. Inspired by the design of operating system kernels, it provides process scheduling, resource management, inter-process communication, and security policy enforcement — but for organisational processes rather than computer processes.

Every interaction with the UME platform — whether initiated by a human user clicking a button, an AI agent executing a task, an OrgCPU sensor reporting a reading, or an external system calling an API — passes through the OrgKernel before reaching any module.

The OrgKernel enforces a fundamental guarantee: no action can occur within the OrgOS without being authorised by the ODD of the acting OrgExec, logged on the audit trail, and emitted as an event on the event bus.

## **3.2 OrgKernel Components**

| Component | Role | Technology |
| :---- | :---- | :---- |
| ODD Enforcement Engine | Validates every action against the acting OrgExec's ODD before permitting execution | Rust policy engine (embedded) |
| Event Bus | Distributes all system events to subscribed modules and external integrations | Apache Kafka |
| State Manager | Maintains in-flight transaction state and ensures atomic multi-module operations | Redis (with PostgreSQL backing) |
| Audit Logger | Writes an immutable, append-only log of every event with full context | PostgreSQL append-only table \+ S3 archive |
| OrgExec Resolver | Resolves the identity and ODD of the acting principal on every request | Internal gRPC service |
| Module Router | Routes API requests and events to the correct OrgApp module | Internal service mesh (Istio) |
| SDO Engine | Maintains the Software-Defined Organisation digital twin in real time | Graph database (Neo4j) |
| OrgDNA Manager | Manages versioned OrgDNA snapshots and cloning operations | PostgreSQL \+ S3 |
| Scheduler | Manages time-based triggers (filing deadlines, recurring jobs, cron events) | Temporal.io |
| Notification Bus | Routes notifications to human OrgExecs via email, SMS, in-app, and webhook | Twilio \+ SendGrid \+ internal WS |

## **3.3 Request Lifecycle**

Every request through the OrgKernel follows a deterministic six-stage lifecycle:

11. Authentication: The requesting principal is identified and their identity token is verified (JWT / mTLS for machine actors).

12. OrgExec Resolution: The ODD Enforcement Engine retrieves the full ODD contract for the principal and resolves their current permission state, including any time-bound or context-conditional grants.

13. Permission Check: The requested action is evaluated against the ODD. Denied actions are rejected with a structured error and logged. Granted actions proceed.

14. Action Execution: The action is routed to the target OrgApp module, which executes the business logic. The module returns a result object.

15. Event Emission: The OrgKernel emits one or more structured events to the Kafka event bus representing the state changes produced by the action.

16. Audit Write: A complete audit record is written atomically with the action commit, capturing: actor identity, ODD version, action type, target entity, parameters, timestamp, result, and correlation ID.

## **3.4 OrgKernel APIs**

The OrgKernel exposes three API surfaces:

| API Surface | Protocol | Consumers | Description |
| :---- | :---- | :---- | :---- |
| Public REST API | HTTPS REST / JSON | External integrations, third-party ISVs, mobile clients | Full CRUD API for all modules; versioned at /v1, /v2, /v3 |
| Internal gRPC API | gRPC / Protobuf | Internal OrgApp modules, microservices | High-performance inter-service communication |
| GraphQL API | GraphQL over HTTPS | Dashboard frontends, reporting tools | Flexible read API for complex queries and SDO graph traversals |
| WebSocket API | WSS | Real-time UI, OrgCPU devices | Live event streaming, real-time dashboard updates, OrgCPU telemetry |
| Webhook Outbound | HTTPS POST | External systems, integration platforms | Push notifications for configured event types to external endpoints |

## **3.5 Event Schema**

All events on the UME event bus conform to a standard schema. This schema is the universal language of the UME platform and enables any module or external system to react to any event.

UME Event Standard: every event contains a universally unique correlation ID, an ISO-8601 timestamp, the full identity of the acting OrgExec, the ODD version under which the action was authorised, the target entity, and the full before/after state delta.

| Field | Type | Description |
| :---- | :---- | :---- |
| event\_id | UUID v4 | Globally unique event identifier |
| correlation\_id | UUID v4 | Links related events in a single transaction or workflow |
| org\_id | String | The organisation (tenant) this event belongs to |
| actor\_id | String | The OrgExec principal that triggered the event |
| actor\_odd\_version | Semver String | ODD contract version used to authorise this action |
| event\_type | Enum String | e.g. finance.invoice.created, hr.leave.approved |
| module | Enum String | The OrgApp module that produced the event |
| entity\_type | String | e.g. Invoice, Employee, Order, RiskItem |
| entity\_id | String | The target entity identifier |
| payload | JSON Object | Full before/after state delta of the entity |
| timestamp | ISO-8601 | UTC timestamp of event occurrence |
| schema\_version | Semver String | Event schema version — for forward/backward compatibility |

| PART III ODD Governance Framework |
| :---- |

# **4\. Organisational Design Document (ODD)**

## **4.1 What is an ODD?**

An Organisational Design Document (ODD) is a machine-readable, versioned contract that formally defines the operating parameters of a single OrgExec within the organisation. An ODD is the central governance primitive of the UME platform — the concept that allows UME to govern all actors (human, AI, and device) under a unified framework.

An ODD answers four fundamental questions about any actor within the organisation:

* What can this actor see? (Data access and read permissions)

* What can this actor do? (Write operations and action permissions)

* Under what conditions? (Temporal, contextual, and threshold constraints)

* What happens when the actor cannot proceed? (Escalation and fallback rules)

## **4.2 ODD Architecture**

An ODD is a JSON document stored in the UME data store with a full version history. Each ODD consists of five sections:

| Section | Field Name | Description |
| :---- | :---- | :---- |
| Identity | identity | Actor ID, type (Human / AI Agent / OrgCPU), display name, department, entity scope |
| Capability Grants | capabilities | Explicit list of read/write/notify/execute permissions across all modules |
| Constraints | constraints | Operating limits: time windows, thresholds, rate limits, data access filters |
| Escalation Rules | escalation | Conditions under which the actor must request approval or escalate to a human supervisor |
| Audit Configuration | audit | Audit verbosity level, data retention policy, monitoring alerts |

## **4.3 ODD Capability Grant Reference**

The following capability scopes are defined in UME v3. Each scope follows the format module:resource:action, conforming to the UME Permission Scope Standard (UPSS).

| Module | Scope Pattern | Examples |
| :---- | :---- | :---- |
| Finance | fin:resource:action | fin:invoice:read, fin:invoice:write, fin:payroll:execute, fin:reports:read |
| HR | hr:resource:action | hr:employee:read, hr:employee:write, hr:leave:approve, hr:payroll:read |
| Legal | leg:resource:action | leg:contract:read, leg:filing:submit, leg:entity:read, leg:vault:write |
| CRM | crm:resource:action | crm:order:read, crm:order:write, crm:customer:read, crm:pipeline:write |
| Operations | ops:resource:action | ops:inventory:read, ops:po:write, ops:equipment:read, ops:schedule:write |
| Risk | risk:resource:action | risk:register:read, risk:kri:read, risk:incident:write, risk:board:read |
| OrgSystem | sys:resource:action | sys:odd:read, sys:odd:write, sys:sdp:read, sys:orgdna:export |
| DAO | dao:resource:action | dao:vote:cast, dao:treasury:read, dao:contract:deploy, dao:ledger:read |

## **4.4 ODD Constraint Types**

| Constraint Type | Example | Enforcement Point |
| :---- | :---- | :---- |
| Temporal | working\_hours: Mon-Fri 08:00-18:00 | ODD Enforcement Engine — request time check |
| Threshold | max\_invoice\_value: 5000, approval\_required\_above: 10000 | Action parameter validator |
| Rate Limit | max\_actions\_per\_hour: 200 (AI agents) | Token bucket in Redis, enforced by ODD Engine |
| Entity Filter | data\_scope: own\_department\_only | Query filter injected at module DB layer |
| Approval Gate | approve\_required\_for: payroll\_run, period\_close | Multi-signature workflow in OrgKernel |
| Escalation Trigger | escalate\_if: order\_queue\_size \> 50 | SDO engine monitors KPI, triggers ODD escalation |
| Data Masking | mask\_fields: \[salary, national\_insurance\_no\] | Response transformer in API gateway |
| Jurisdiction Scope | jurisdiction: england\_wales | Legal module compliance rule filter |

## **4.5 ODD Versioning and Lifecycle**

Every ODD is semantically versioned following the format MAJOR.MINOR.PATCH. The version history of an ODD is immutable — once published, a version cannot be modified. New versions are created by proposing changes, reviewing the impact analysis (which the platform auto-generates), and approving the update.

| Version Change | Trigger Examples | Approval Required |
| :---- | :---- | :---- |
| MAJOR | Removing a capability grant, reducing a threshold significantly, changing actor type | Yes — Owner or Director level OrgExec |
| MINOR | Adding a new capability, increasing a threshold, adding a new constraint | Yes — Manager level OrgExec |
| PATCH | Updating display metadata, adjusting notification preferences, changing audit level | Self-service — no approval needed |

## **4.6 ODD and AI Agents**

One of the most important applications of the ODD framework is AI agent governance. As organisations deploy large language model (LLM) agents and automation bots into their operations, the risk of ungoverned AI actions — executing financial transactions, modifying HR records, or communicating with customers without oversight — is a material operational and compliance risk.

UME's ODD framework addresses this risk by requiring every AI agent to have an ODD contract before it can be deployed within the OrgOS. An AI agent ODD has the same structure as a human ODD but typically includes:

* Strictly scoped capability grants (principle of least privilege).

* Rate limits to prevent runaway automation.

* Mandatory escalation triggers for high-impact actions.

* Audit verbosity set to maximum — every reasoning step logged.

* Hard kill switches: system-level capabilities to immediately revoke all grants and suspend the agent.

The ODD framework provides the same compliance assurance for an AI agent as an employment contract provides for a human employee — defining exactly what the agent is authorised to do, and creating an immutable record of everything it does.

| PART IV OrgDNA & Software-Defined Organisation |
| :---- |

# **5\. OrgDNA — Portable Organisation Configuration**

## **5.1 Concept and Purpose**

OrgDNA is the exportable, portable representation of an entire organisation's configuration. It captures every structural and operational setting of an OrgOS instance in a single versioned artifact that can be stored, cloned, forked, compared, or broadcast to a network of affiliated organisations.

OrgDNA enables three transformative use cases:

* Organisation Cloning: A new franchise location, subsidiary, or spin-off can inherit the complete operational configuration of the parent organisation — including module settings, ODD templates, roles, chart of accounts, and compliance configurations — and be ready to operate in under 60 seconds.

* OrgDNA Broadcast: A franchisor or parent organisation can push configuration updates (such as new compliance rules, pricing structures, or ODD constraint changes) to all affiliated organisations simultaneously, with each affiliate able to accept or stage the update.

* Organisation Comparison: Two organisations sharing a common OrgDNA lineage can be compared to identify configuration drift — highlighting where an affiliate has deviated from the franchisor's standards.

## **5.2 OrgDNA Schema**

An OrgDNA artifact is a structured JSON document compressed into a canonical UME archive format (.umegen). The schema has six root sections:

| Section | Key | Contents |
| :---- | :---- | :---- |
| Identity | identity | Organisation name, legal entity type, jurisdiction, incorporation number, SIC codes, registration addresses |
| Structure | structure | Entity hierarchy, department tree, reporting lines, management structure |
| Module Configuration | modules | Enabled modules, feature flags, module-specific settings (e.g. chart of accounts, leave policy rules) |
| ODD Template Library | odd\_templates | Standard ODD templates for all role types in the organisation — HR roles, AI agent roles, OrgCPU device roles |
| Role & Permission Map | roles | Named roles with associated ODD template references and module access configurations |
| Compliance Profile | compliance | Jurisdiction-specific compliance rules, filing obligations, VAT configuration, employment law settings |

## **5.3 OrgDNA Versioning**

OrgDNA follows the same semantic versioning scheme as ODD contracts. Each OrgDNA version is immutable after publication. The version history provides a complete audit trail of how the organisation's configuration has changed over time.

| Change Type | MAJOR | MINOR | PATCH |
| :---- | :---- | :---- | :---- |
| **Description** | Breaking structural changes: entity restructuring, jurisdiction change, wholesale module reconfiguration | Additive changes: new roles, new ODD templates, new module features, compliance rule additions | Non-structural updates: metadata, display settings, notification preferences |
| **Broadcast to Affiliates** | Requires explicit affiliate acceptance with impact review | Auto-broadcast with 7-day acceptance window | Auto-applied to affiliates within 24 hours |
| **Rollback** | Supported with manual reconciliation wizard | Supported with automated rollback | Supported automatically |

# **6\. Software-Defined Organisation (SDO)**

## **6.1 SDO Concept**

The Software-Defined Organisation (SDO) is a real-time, queryable digital twin of the entire organisation. Every entity in the organisation — every employee, customer, supplier, order, invoice, risk item, contract, and equipment asset — is represented as a node in the SDO graph. Relationships between entities are represented as typed edges.

The SDO graph is maintained in real time by the OrgKernel event bus. Every event that flows through the kernel updates the relevant nodes and edges in the SDO graph within milliseconds. This makes the SDO the single source of truth for the current state of the organisation.

The SDO answers the question that no conventional ERP can answer in real time: "What is the complete, current, inter-connected state of the organisation at this exact moment?"

## **6.2 SDO Node Types**

| Node Type | Module | Key Properties | Key Relationships |
| :---- | :---- | :---- | :---- |
| Organisation | OrgSystem | Name, jurisdiction, incorporation, plan | Contains → Entities, Departments, OrgExecs |
| Entity | Legal | Legal name, company number, type, status | Owned by → Organisation; Has → Accounts, Contracts |
| OrgExec | HR/OrgSystem | Identity, type (Human/AI/Device), ODD version, status | Reports to → OrgExec; Has ODD → ODD Contract |
| Department | HR | Name, cost centre, manager | Contains → OrgExecs; Belongs to → Organisation |
| Invoice | Finance | Number, customer, amount, status, due date | Raised by → OrgExec; For → Customer; Posted to → GL Account |
| Order | CRM | Order ID, customer, items, stage | From → Customer; Assigned to → OrgExec; Generates → Invoice |
| Employee | HR | Name, role, pay rate, leave balance | Is an → OrgExec; In → Department; Has → ODD Contract |
| Risk | Risk | Description, impact, likelihood, status | Owned by → OrgExec; Linked to → KRI; In → Department |
| Contract | Legal | Type, parties, value, expiry | Between → Entities/Customers/Suppliers; Governed by → ODD |
| OrgCPU | Operations | Device ID, type, location, telemetry | Is an → OrgExec; Registered to → Entity; Has → ODD Contract |

## **6.3 SDO Query API**

The SDO graph is queryable via both GraphQL and a native Cypher-like UME Query Language (UQL). Common queries include:

* Traverse from a customer to all open orders, related invoices, and the OrgExecs assigned to those orders.

* Find all OrgExecs whose ODD contract expires within 60 days across all entities in the group.

* Identify all risks flagged HIGH that are owned by departments with below-90% compliance scores.

* Map the complete royalty flow from all franchise members to the parent DAO treasury.

| PART V Module Architecture |
| :---- |

# **7\. Module Architecture Overview**

Each of the 12 UME OrgApp modules is an independently deployable service with its own data store, API surface, and event schema. However, modules are not isolated — they are tightly integrated through the OrgKernel event bus and share a unified data namespace through the SDO graph.

## **7.1 Module Design Principles**

* Event-first: every module publishes all state changes as events before returning a response.

* ODD-aware: every module receives the acting OrgExec's resolved ODD from the OrgKernel and enforces it at the data layer.

* Stateless business logic: module business logic is stateless; all state is persisted to the module's own data store.

* Idempotent mutations: all write operations are idempotent and protected by distributed locks.

* Audit-by-default: all mutations emit an audit event before the transaction commits.

## **7.2 Module Internal Architecture**

Each module follows a standard internal architecture with four layers:

| Layer | Name | Responsibility |
| :---- | :---- | :---- |
| 1 (API) | Module API Controller | Receives requests from OrgKernel router; validates input schema; calls service layer |
| 2 (Service) | Business Service Layer | Implements domain business logic; enforces ODD constraints at application layer; calls repository |
| 3 (Repository) | Data Repository | Abstracts database operations; implements ODD-driven data access filters; emits events |
| 4 (Store) | Module Data Store | PostgreSQL for relational data; Redis for caches and locks; S3 for documents and attachments |

# **8\. Finance & Accounting Module (FIN)**

## **8.1 Module Purpose**

The Finance & Accounting module is the financial core of the OrgOS. It provides a fully double-entry General Ledger (GL) combined with all operational financial tools — accounts payable, accounts receivable, invoicing, payroll, bank reconciliation, period close, and multi-entity consolidated reporting — in a single integrated system.

## **8.2 Core Sub-Systems**

| Sub-system | Description | Key Entities |
| :---- | :---- | :---- |
| General Ledger | Chart of accounts, journal entries, trial balance, period management | Account, JournalEntry, JournalLine, Period, TrialBalance |
| Accounts Receivable | Customer invoices, receipts, credit notes, AR ageing, collections | Invoice, Receipt, CreditNote, Customer, ARBalance |
| Accounts Payable | Supplier bills, payments, three-way match, AP ageing | Bill, Payment, Supplier, APBalance, PurchaseOrder |
| Payroll | Employee payroll, PAYE/NI calculation, pension, payslips, RTI submission | PayrollRun, PayrollLine, Payslip, TaxCode, PensionContribution |
| Bank Reconciliation | Statement import, transaction matching, reconciliation status | BankAccount, BankStatement, BankLine, Reconciliation |
| Period Management | Period open/close, pre-close checklist, lock enforcement | Period, PeriodClose, ClosingTask |
| Multi-Entity | Intercompany elimination, consolidated P\&L/BS, group reporting | Group, ConsolidationRun, IntercompanyEntry |
| Budgeting | Budget planning, variance analysis, budget vs actuals | Budget, BudgetLine, Variance |
| Reporting Engine | P\&L, Balance Sheet, Cash Flow, AR Ageing, AP Ageing, custom | Report, ReportTemplate, ReportRun |

## **8.3 Chart of Accounts**

The UME Finance module ships with jurisdiction-specific chart of accounts templates. The chart of accounts is organised in a five-tier hierarchy:

| Tier | Code Range | Category | Examples |
| :---- | :---- | :---- | :---- |
| 1 | 1000–1999 | Assets | 1100 Cash, 1200 Accounts Receivable, 1500 Fixed Assets |
| 2 | 2000–2999 | Liabilities | 2100 Accounts Payable, 2200 PAYE Liability, 2400 Bank Loans |
| 3 | 3000–3999 | Equity | 3100 Share Capital, 3200 Retained Earnings, 3300 Current Year Profit |
| 4 | 4000–4999 | Revenue | 4100 Sales Revenue, 4200 Service Revenue, 4900 Other Income |
| 5 | 5000–8999 | Expenses | 5100 Wages, 5200 Supplies, 6100 Rent, 7100 Insurance |

## **8.4 Payroll Engine Architecture**

The UME payroll engine is jurisdiction-aware and processes payroll in five computation stages:

17. Gross Pay Calculation: Hours worked × rate (hourly) or annual salary ÷ pay periods (salaried), plus any variable pay components.

18. Tax Code Resolution: Retrieves each employee's current tax code from the employee record and HMRC integration (UK), determining the applicable tax bands.

19. Deduction Computation: Calculates Income Tax, National Insurance (employee and employer contributions), pension contributions, student loan repayments, and any voluntary deductions.

20. Net Pay Derivation: Gross pay minus all deductions.

21. Payroll Journal Entry Generation: Automatically generates the complete set of double-entry journal entries for the payroll run — wages expense, tax liabilities, NI liabilities, pension liabilities, and net wages payable.

## **8.5 Finance Module Events**

| Event Type | Trigger | Key Subscribers |
| :---- | :---- | :---- |
| fin.invoice.created | New invoice saved/sent | CRM (order link), Audit, SDO, AR Balance updater |
| fin.invoice.paid | Payment received against invoice | CRM (order complete), AR Balance, Cash flow engine |
| fin.je.posted | Journal entry posted to GL | Trial Balance engine, Period manager, SDO, Audit |
| fin.payroll.processed | Payroll run approved and processed | HR (payslip generation), Legal (RTI submission), Audit |
| fin.period.closed | Accounting period locked | Compliance module, Reporting engine, SDO, Audit |
| fin.bank.reconciled | Bank account reconciled | Audit, SDO cash position updater |

# **9\. HR & People Module (HR)**

## **9.1 Module Purpose**

The HR & People module manages the complete lifecycle of all OrgExecs within the organisation — from initial onboarding and ODD contract creation through active employment management to structured offboarding. It is the registry of all human, AI agent, and OrgCPU actors and the primary interface for ODD contract management.

## **9.2 Core Sub-Systems**

| Sub-system | Description |
| :---- | :---- |
| OrgExec Registry | The definitive register of all actors (human, AI, device) with their current ODD contract, status, and identity |
| Employee Lifecycle | New hire wizard, probation management, role changes, promotion, termination, offboarding checklist |
| ODD Contract Manager | Create, version, review, and publish ODD contracts; impact analysis; approval workflow |
| Leave Management | Leave request, approval workflow, balance tracking, calendar integration, absence reporting |
| Payroll Integration | HR → Finance payroll data feed; payslip access portal; year-end P60/P11D generation |
| Performance Management | Review cycles, objectives setting, 360 feedback, rating history, PDPs |
| Organisation Chart | Live org chart derived from SDO; reporting line management; department management |
| Document Management | Employment contracts, offer letters, right-to-work documents, disciplinary records |

## **9.3 OrgExec Type Matrix**

The HR module manages three distinct OrgExec types. Each type has different ODD capabilities, audit requirements, and lifecycle processes:

| Property | Human OrgExec | AI Agent OrgExec | OrgCPU (Device) OrgExec |
| :---- | :---- | :---- | :---- |
| **Identity Source** | HR record \+ SSO login | AI agent registry \+ API key | Device certificate \+ serial number |
| **ODD Template Origin** | Role-based HR templates | Agent function templates | Device class templates |
| **Authentication** | JWT (OAuth 2.0 / SAML SSO) | mTLS \+ API key rotation | mTLS \+ device certificate |
| **Max Permissions** | Full module access per role | Strictly scoped to agent function | Telemetry read \+ assigned ops scope |
| **Audit Level** | Standard | Maximum (all LLM reasoning logs) | Standard \+ sensor readings |
| **Kill Switch** | Account suspension | Immediate ODD revocation \+ API key invalidation | Device certificate revocation |
| **Lifecycle Owner** | HR Manager | OrgSystem Admin | Operations Manager |

## **9.4 New Hire Wizard**

The New Hire Wizard guides an HR manager through the complete onboarding process in four steps:

22. Step 1 — Personal Information: Name, contact details, role, department, start date, employment type, jurisdiction, right-to-work verification.

23. Step 2 — ODD Contract Configuration: Select OrgExec type, choose ODD template, customise capability grants and constraints, generate the ODD contract for approval.

24. Step 3 — Compensation Setup: Salary or hourly rate, tax code, pension scheme, bank details, benefit elections.

25. Step 4 — Review & Launch: Review all data, auto-generate employment contract (Legal module integration), send offer letter and access credentials, trigger system access provisioning via ODD activation.

## **9.5 Leave Management Rules Engine**

Leave requests are processed through a configurable rules engine with the following default rule chain:

* Accrual Rate: Configurable per employment type and jurisdiction. Default UK full-time: 28 days statutory.

* Request Window: Minimum advance notice configurable (default: 2 weeks for holidays).

* Blackout Periods: Configurable periods during which leave cannot be taken (e.g. year-end for Finance team).

* Team Coverage Check: Validates that minimum team coverage (configurable threshold, default 60%) is maintained.

* Balance Check: Validates sufficient leave balance before approval.

* Auto-Approval: Leave requests meeting all rules can be configured for auto-approval below a threshold (default: 3 days or fewer).

# **10\. Legal & Compliance Module (LEG)**

## **10.1 Module Purpose**

The Legal & Compliance module is the formal governance record-keeper of the organisation. It manages legal entities, regulatory filing obligations, contracts, intellectual property assets, and the document vault. Its compliance engine continuously monitors the organisation's obligations and surfaces upcoming deadlines.

## **10.2 Filing Obligation Engine**

The filing obligation engine maintains a jurisdiction-specific library of regulatory obligations and maps them to the specific entities within the organisation. Key capabilities:

* Automatic filing calendar generation based on the organisation's jurisdiction, entity type, and financial year.

* Obligation-to-event linking: when a payment is made or a return is filed, the related obligation is automatically updated.

* Multi-jurisdiction support: organisations with entities in multiple jurisdictions receive correctly configured filing calendars for each entity.

* Advance notification: configurable notification triggers at 60, 30, 14, 7, and 1 days before each filing deadline.

## **10.3 Compliance Obligation Library**

| Jurisdiction | Obligation | Frequency | Module Integration |
| :---- | :---- | :---- | :---- |
| UK (England & Wales) | VAT Return (MTD) | Quarterly | Finance (Box 1–9 auto-calculation) |
| UK | PAYE RTI Monthly | Monthly | Finance Payroll (FPS/EPS submission) |
| UK | P11D Benefit in Kind | Annual | HR (benefit tracking) |
| UK | Annual Confirmation Statement | Annual | Legal entity registry |
| UK | Corporation Tax Return (CT600) | Annual | Finance (tax computation) |
| UK | Employer NIC | Monthly | Finance Payroll |
| US (Federal) | Federal Tax Deposit (EFTPS) | Semi-weekly / Monthly | Finance Payroll |
| US | Form 941 (Quarterly Payroll) | Quarterly | Finance Payroll |
| EU (VAT registered) | VAT Return | Monthly / Quarterly | Finance (OSS/IOSS support) |
| Multi-jurisdiction | Transfer Pricing Documentation | Annual | Finance Multi-entity |

## **10.4 Contract Generation Engine**

The contract generation engine creates legal documents using a template library that is pre-populated with data from the OrgOS. Supported contract types in the default library:

| Contract Type | Auto-populated Fields | E-signature Integration |
| :---- | :---- | :---- |
| Employment Agreement (UK FTE) | Employer details, employee name/role/salary, start date, notice period, jurisdiction clauses | Yes — DocuSign / Adobe Sign |
| Employment Agreement (UK PT) | As FTE, plus hourly rate, contracted hours | Yes |
| Independent Contractor Agreement | Parties, scope of services, rate, IP assignment, termination | Yes |
| Non-Disclosure Agreement | Parties, scope of confidential information, term | Yes |
| Supplier Agreement | Supplier details, goods/services, payment terms, liability cap | Yes |
| Franchise Agreement | Franchisor/franchisee details, territory, royalty rate, standards reference | Yes — DAO smart contract linkage available |
| Partnership Agreement | Partners, profit share, decision-making rules, exit provisions | Yes |

# **11\. Sales & CRM Module (CRM)**

## **11.1 Module Purpose**

The Sales & CRM module manages the complete customer and order lifecycle — from initial contact and pipeline management through order fulfilment and collections. It is integrated with the Finance module for automatic invoice generation and with the Operations module for order fulfilment coordination.

## **11.2 Order State Machine**

Orders in UME progress through a defined state machine. Each state transition emits an event and triggers the appropriate downstream actions:

| State | Entry Trigger | Exit Trigger | Events Emitted | Downstream Actions |
| :---- | :---- | :---- | :---- | :---- |
| Draft | Order created | Customer confirmation received | crm.order.created | Notify assigned OrgExec |
| Received | Confirmation received | Work begun | crm.order.confirmed | Ops: add to queue; Comms AI: acknowledge customer |
| In Progress | OrgExec marks start | Work complete | crm.order.started | Ops: update equipment/resource allocation |
| Quality Check | Work marked complete | QC approved | crm.order.qc\_pending | Notify QC OrgExec |
| Ready | QC approved | Customer collects or delivery dispatched | crm.order.ready | Comms AI: notify customer |
| Collected / Delivered | Handover confirmed | Invoice generated | crm.order.completed | Finance: auto-generate invoice |
| Invoiced | Invoice generated | Payment received | crm.order.invoiced | Finance: add to AR; Comms AI: send invoice |
| Closed | Payment received | Terminal state | crm.order.closed | Finance: mark paid; SDO: update customer LTV |
| Cancelled | Cancellation request | Terminal state | crm.order.cancelled | Finance: reverse charges if applicable |

## **11.3 Customer Micro-Persona Engine**

The micro-persona engine builds a rich behavioural profile for each customer based on their transaction history, communication patterns, and preferences. This profile is used by the AI Comms Agent to personalise communications and by the Marketing module for campaign segmentation.

| Persona Dimension | Data Sources | Use Cases |
| :---- | :---- | :---- |
| Order Frequency | CRM order history | Lapsed customer detection, re-engagement campaigns |
| Preferred Services | Order item analysis | Upsell recommendations, seasonal promotions |
| Communication Preference | Message open rates, response patterns | Channel selection for Comms AI (SMS vs email) |
| Price Sensitivity | Discount acceptance rate, order value trends | Promotion targeting, loyalty pricing |
| Lifecycle Stage | First order date, order frequency trend | New customer onboarding vs loyalty retention |
| Net Promoter Signal | Rating data, repeat referral patterns | Advocacy programme targeting |

## **11.4 AI Comms Agent Integration**

The Comms AI OrgExec is a specialised AI agent that manages outbound customer communications. It operates under a strict ODD contract that limits its permissions to outbound notifications only — it cannot modify any customer record or financial data.

* Automated order status notifications at each state transition.

* Personalised messaging using customer micro-persona data.

* Multi-channel delivery: SMS, email, in-app push notification.

* Escalation protocol: if a customer response requires a human decision, the Comms AI immediately escalates to the assigned OrgExec.

* All messages are logged on the audit trail with full attribution to the AI agent ODD.

# **12\. Operations & ERP Module (OPS)**

## **12.1 Module Purpose**

The Operations module manages the physical and logistical backbone of the organisation — inventory, purchasing, supplier management, equipment (including IoT OrgCPU devices), and fulfilment operations. It provides the bridge between the commercial (CRM) and financial (Finance) layers and the physical production environment.

## **12.2 Inventory Management**

| Feature | Description |
| :---- | :---- |
| Multi-location inventory | Inventory tracked by location (site, bin, shelf) with real-time position updates |
| Reorder point management | Configurable minimum and reorder quantities per SKU; automatic low-stock alerts |
| Auto-PO generation | When stock falls below reorder point, a draft Purchase Order is auto-generated to the preferred supplier |
| Batch/lot tracking | Full batch and lot number tracking for regulated goods (food, chemicals, pharmaceuticals) |
| Inventory valuation | FIFO, LIFO, and weighted average cost methods; real-time valuation feeds to Finance GL |
| Consumption recording | OrgExecs (including AI agents) can record material consumption against orders |

## **12.3 OrgCPU Device Integration**

OrgCPU is the UME framework for integrating IoT devices, industrial equipment, and physical sensors into the OrgOS as first-class OrgExec actors. An OrgCPU device:

* Receives an ODD contract defining what data it can report and what operations it can trigger.

* Authenticates to the OrgKernel using a hardware-bound device certificate (mTLS).

* Reports telemetry data through the OrgKernel WebSocket API; data is stored in the Operations module.

* Can trigger operational events: e.g. a dry-cleaning machine completing a cycle emits ops.equipment.cycle\_complete, which updates the associated order status in CRM.

* Receives commands through the OrgKernel command channel, subject to ODD approval: e.g. scheduling the next cycle, adjusting temperature settings.

## **12.4 Procurement Process Flow**

The purchase-to-pay process in UME follows a standard workflow that integrates the Operations, Finance, and Legal modules:

26. Purchase Requisition: An OrgExec with ops:po:write capability raises a purchase requisition specifying supplier, items, quantities, and required delivery date.

27. Approval Routing: Requisitions above the ODD-configured threshold are automatically routed to the approving OrgExec. Below-threshold requisitions are auto-approved.

28. PO Generation: An approved requisition generates a formal Purchase Order, which is sent to the supplier electronically (PDF or EDI).

29. Goods Receipt: When goods are received, the receiving OrgExec records the goods receipt note (GRN) against the PO.

30. Three-Way Match: Finance module automatically matches the supplier invoice against the PO and GRN. Discrepancies are flagged for review. Matched invoices proceed to payment.

31. Payment Run: Matched invoices are included in the next payment run. Payment is processed and a payment journal entry is posted to the GL.

# **13\. Risk & GRC Module (RISK)**

## **13.1 Module Purpose**

The Risk & GRC module provides the organisation with a structured framework for identifying, measuring, monitoring, and managing risk. It combines operational risk management, Key Risk Indicator (KRI) monitoring, governance controls assessment, and board-level reporting in a single integrated system connected to the live SDO data.

## **13.2 Risk Register Architecture**

The risk register is the central inventory of all identified risks. Each risk is a structured record with the following properties:

| Property | Description | Example Values |
| :---- | :---- | :---- |
| Risk ID | System-generated unique identifier | RISK-0042 |
| Category | Risk taxonomy classification | Financial, Operational, Compliance, HR, IT, Strategic |
| Description | Plain-language description of the risk | "Key person dependency — only Alice can run payroll" |
| Impact | Potential business impact if risk materialises | Critical / High / Medium / Low |
| Likelihood | Probability of risk materialising | Certain / Likely / Possible / Unlikely / Rare |
| Inherent Score | Impact × Likelihood before controls | Critical (16), High (12), Medium (6), Low (2) |
| Controls | List of mitigating controls in place | Cross-training programme, documented procedures |
| Residual Score | Impact × Likelihood after controls | Reduced from inherent score |
| Risk Owner | OrgExec responsible for this risk | Alice L. (Manager) |
| Status | Current management status | Open / Mitigated / Accepted / Closed |
| Review Date | Next scheduled review | 2026-06-30 |

## **13.3 KRI Monitoring Engine**

Key Risk Indicators (KRIs) are quantitative metrics that provide early warning signals of increasing risk levels. UME's KRI monitoring engine pulls live data from the SDO and evaluates configured thresholds in real time.

| KRI | Data Source | Warning Threshold | Breach Threshold | Trigger Action |
| :---- | :---- | :---- | :---- | :---- |
| Cash Runway (days) | Finance — cash position / daily burn | 45 days | 30 days | Risk alert \+ board notification |
| AR Overdue \> 60 days | Finance — AR ageing | £500 | £1,000 | Collections escalation \+ risk flag |
| Machine Uptime (%) | Operations — OrgCPU telemetry | 85% | 75% | Maintenance alert \+ ops escalation |
| Staff Absence Rate | HR — leave and absence | 8% | 12% | HR escalation \+ ops capacity review |
| Compliance Score | Legal — filing status \+ GRC | 80% | 70% | Legal alert \+ management notification |
| Order Cycle Time | CRM — order timestamps | \+20% vs baseline | \+40% vs baseline | Operations review \+ customer comms |
| Invoice Collection Rate | Finance — AR | \< 85% within terms | \< 70% within terms | Collections review \+ AR escalation |

## **13.4 GRC Assessment Framework**

The GRC (Governance, Risk, and Compliance) assessment framework provides a structured methodology for evaluating the organisation's control environment. UME ships with assessment templates aligned to common frameworks:

* ISO 27001 — Information Security Management System controls assessment

* COSO Internal Controls Framework — for financial reporting governance

* CIS Controls v8 — cybersecurity baseline assessment

* GDPR/UK GDPR — data protection compliance assessment

* Custom frameworks — organisations can define their own control libraries

# **14\. OrgSystem Module (SYS)**

## **14.1 Module Purpose**

The OrgSystem module is the meta-management layer of the UME platform. It provides the interfaces for managing the platform itself: installing and configuring OrgApps, managing the OrgDNA, editing ODD contracts, monitoring the SDO digital twin, and accessing the system-wide audit trail. It is the "control plane" of the OrgOS.

## **14.2 OrgApp Management**

OrgApps can be installed, configured, upgraded, or deactivated through the OrgSystem module. The OrgApp lifecycle:

32. Discovery: Browse the OrgApp marketplace or search for first-party modules.

33. Pre-install Assessment: The platform runs a pre-install assessment showing: compatibility with current OrgDNA version, ODD changes required, data migration requirements, and estimated setup time.

34. Installation: The OrgApp is deployed into the OrgKernel's module registry. Default ODD templates are added to the OrgDNA.

35. Configuration: Module settings are configured (chart of accounts for Finance, leave policies for HR, etc.).

36. OrgDNA Update: The OrgDNA is updated to include the new module's configuration, incrementing the MINOR version.

37. Activation: The module becomes active for all OrgExecs with the appropriate ODD grants.

## **14.3 Audit Trail Architecture**

The UME audit trail is the immutable, append-only record of every event that has occurred within the OrgOS. It is designed to meet the strictest regulatory and forensic requirements:

| Property | Specification |
| :---- | :---- |
| Storage | Append-only PostgreSQL table with WAL archiving to S3 (immutable object store) |
| Retention | Minimum 7 years (HMRC requirement); configurable up to indefinite for enterprise |
| Integrity | Each audit record is hash-chained to its predecessor; tampering is cryptographically detectable |
| Granularity | Every read and write operation by every OrgExec is logged (configurable per ODD) |
| Export | SIEM-compatible export (CEF, JSON Lines); GDPR-compliant redaction tooling |
| Search | Full-text search with actor, time range, entity, event type, and correlation ID filters |
| Access Control | Audit trail is readable only by OrgExecs with sys:audit:read — typically Owner and Compliance Manager |

# **15b. Marketing Module (MKT)**

## **15b.1 Module Purpose**

The Marketing module provides campaign management, customer segmentation, AI-powered content generation, and multi-channel campaign execution. It consumes customer micro-persona data from the CRM module to enable hyper-targeted communications.

## **15b.2 Campaign Architecture**

| Component | Description |
| :---- | :---- |
| Campaign Manager | Create, schedule, and track multi-channel marketing campaigns with audience segments, content, channel config, and attribution rules |
| Audience Segmentation Engine | Builds dynamic customer segments from CRM micro-persona data, order history, and engagement metrics |
| AI Content Generator | Uses LLM to generate personalised campaign copy, subject lines, and call-to-action variants (A/B testing) |
| Multi-Channel Executor | Dispatches campaigns across email (SendGrid), SMS (Twilio), in-app notifications, and print (PDF generation) |
| Attribution Engine | Tracks campaign-to-revenue attribution using UTM parameters, unique promo codes, and order source tagging in CRM |
| Analytics Dashboard | Open rates, click rates, conversion rates, revenue attribution, cost per acquisition |

# **15c. Work Management Module (WORK)**

## **15c.1 Module Purpose**

The Work Management module provides task management, sprint planning, and project tracking capabilities. It is primarily used for internal team work — process improvement projects, compliance tasks, and operational initiatives — and integrates with all other modules to surface action items automatically.

| Feature | Description |
| :---- | :---- |
| Task Management | Create, assign, prioritise, and track tasks; sub-tasks; recurring tasks; due dates; OrgExec assignment |
| Sprint / Kanban Board | Sprint planning with velocity tracking; Kanban board for continuous-flow teams |
| Project Templates | Pre-built project templates for common OrgOS activities: VAT return preparation, payroll run, machine maintenance, new hire onboarding |
| OrgOS Integration | Compliance filing deadlines auto-create tasks; KRI breaches auto-create risk mitigation tasks; new hire wizard auto-creates onboarding checklist |
| Time Tracking | Time logged against tasks; feeds to Finance for billable project cost allocation |
| Reporting | Sprint velocity, task completion rate, cycle time, blocked item analytics |

# **15d. Board Management Module (BRD)**

## **15d.1 Module Purpose**

The Board Management module provides a governed workspace for company directors and board members. It manages board meeting packs, minutes, formal resolutions, the statutory director register, and compliance reporting required for board-level governance.

| Feature | Description |
| :---- | :---- |
| Board Meeting Manager | Agenda builder, meeting pack distribution, minute recording, action tracking, attendance register |
| Formal Resolution Engine | Propose, circulate, vote on, and record formal resolutions; e-signature for directors; automatic filing to Legal vault |
| Director Register | Statutory register of directors, secretaries, and PSCs; Companies House synchronisation |
| Board Reporting Dashboard | Consolidated KPI pack from Finance, Risk, HR, and Compliance for board review |
| Conflict of Interest Register | Directors declare interests; conflicts checked automatically against proposed resolutions |
| DAO Governance Integration | For DAO member organisations, DAO governance votes surfaced in Board module for formal ratification |

| PART VI DAO, DLT & Smart Contract Architecture |
| :---- |

# **15\. DAO & DLT Module (DAO)**

## **15.1 Concept: Organisation-as-DAO**

The DAO & DLT module extends the UME OrgOS into the domain of decentralised autonomous organisations. It enables a network of legally independent organisations — such as a franchise network, a supply chain consortium, or an investment fund structure — to operate under shared governance rules enforced by on-chain smart contracts, with transparent financial flows and tamper-proof voting records.

The UME DAO architecture treats each participating organisation as a DAO member. Each member operates their own full UME OrgOS instance. The DAO layer provides the shared infrastructure that connects these instances:

| DAO Layer Component | Purpose | Technology |
| :---- | :---- | :---- |
| DAO Registry | Maintains the list of member organisations, their roles, and participation status | PostgreSQL \+ DLT anchor |
| DLT Ledger | Distributed ledger providing tamper-proof record of all inter-organisation transactions and governance decisions | Hyperledger Fabric (permissioned) or Ethereum L2 |
| Smart Contract Engine | Deploys and executes on-chain smart contracts for royalties, governance votes, and treasury distributions | Solidity (EVM) or Hyperledger Chaincode |
| Governance Engine | Manages proposals, voting rounds, and vote counting; enforces voting rules from the DAO charter | UME DAO Governance Service (Go) |
| Treasury Manager | Manages the shared DAO treasury; processes contributions and distributions | Smart contract \+ Finance module integration |
| OrgDNA Broadcast Service | Enables the DAO operator to broadcast OrgDNA updates to all member organisations | UME OrgDNA Manager \+ message bus |

## **15.2 Smart Contract Architecture**

UME ships with four standard smart contract templates that cover the most common DAO use cases:

| Contract Template | Purpose | Key Parameters |
| :---- | :---- | :---- |
| Royalty Collection Contract | Automatically collects a percentage of monthly revenue from each member and distributes to the franchisor treasury | royalty\_rate (%), collection\_day, distribution\_wallet, grace\_period\_days |
| Brand Standards Contract | Enforces that all member organisations remain within a specified OrgDNA version range | min\_orgdna\_version, max\_major\_drift, enforcement\_action (notify / suspend) |
| Governance Charter Contract | Defines the rules for all governance votes: quorum, majority threshold, vote duration | quorum\_pct, majority\_pct, vote\_duration\_days, veto\_rights |
| Treasury Distribution Contract | Distributes surplus from the treasury to member organisations according to configured shares | distribution\_shares\[\], distribution\_trigger (manual / scheduled / threshold), treasury\_reserve\_min |

## **15.3 DLT Architecture: Permissioned vs Public**

UME supports two DLT deployment modes, selected based on the organisation's requirements:

| Property | Permissioned (Hyperledger Fabric) | Public EVM (Ethereum L2) |
| :---- | :---- | :---- |
| **Access** | Only DAO members can participate | Any address can interact |
| **Privacy** | Transaction details visible only to parties | Transactions public (amounts can be obscured) |
| **Throughput** | 1,000+ TPS | 50–500 TPS depending on L2 |
| **Finality** | Immediate (Byzantine fault tolerant) | \~12 seconds (L2 block time) |
| **Cost** | No gas fees; infrastructure cost only | Gas fees per transaction |
| **Regulatory** | Preferred for financial/regulated use cases | Preferred for open/public governance |
| **Smart Contracts** | Hyperledger Chaincode (Go/Java) | Solidity (ERC-20/ERC-721/custom) |
| **UME Default** | Yes — default for new DAO networks | Available as alternative configuration |

## **15.4 DAO Governance Flow**

The standard governance vote lifecycle in a UME DAO network:

38. Proposal Submission: Any member OrgExec with dao:proposal:write capability submits a governance proposal. The proposal is recorded on the DLT and broadcast to all member organisations.

39. Discussion Period: A configurable discussion period (default: 7 days) allows member organisations to review the proposal, request clarifications, and prepare their voting position.

40. Voting Round: The governance contract opens voting. Each member organisation casts their vote (For / Against / Abstain) through their UME DAO module. Votes are committed to the DLT.

41. Quorum Check: At the close of the voting period, the governance contract checks whether the configured quorum (default: 60% of members must vote) was reached.

42. Result Determination: If quorum is met, the contract determines the result based on the configured majority threshold. Simple majority (\>50%), supermajority (\>67%), or unanimity.

43. Execution: Approved proposals that have corresponding smart contract implementations are automatically executed. OrgDNA updates are broadcast. Financial distributions are processed through the treasury contract.

| PART VII AI & OrgExec Architecture |
| :---- |

# **16\. AI Agent Architecture**

## **16.1 AI Agent Design Principles**

UME's AI agent framework is built on four design principles that distinguish it from conventional AI automation tools:

* Governed by contract, not by prompt: Every AI agent operates under an ODD contract, not a system prompt. The ODD is the authoritative source of what the agent can and cannot do — the LLM prompt only describes how to do it.

* Least privilege by default: AI agent ODDs are configured with the minimum permissions required for the agent's function. Agents cannot self-escalate permissions.

* Auditable to the action level: Every action an AI agent takes — including the reasoning trace that led to it — is logged on the immutable audit trail.

* Human-in-the-loop by design: Every AI agent has configurable escalation thresholds above which it must request human approval before proceeding.

## **16.2 AI Agent Runtime Architecture**

AI agents in UME are hosted as containerised microservices within the OrgKernel service mesh. Each agent consists of:

| Component | Description | Technology |
| :---- | :---- | :---- |
| Agent Runtime Container | Containerised process hosting the LLM inference engine and tool-calling framework | Docker on Kubernetes; GPU-accelerated nodes for on-premises inference |
| LLM Integration Layer | Supports pluggable LLM backends: OpenAI GPT-4/o, Anthropic Claude, Google Gemini, or on-premises models | LiteLLM abstraction layer; model router |
| Tool Registry | Declares the specific UME API tools the agent is authorised to call, cross-referenced with ODD capability grants | Tool registry service; ODD-aware tool filter |
| Memory Manager | Manages short-term (context window) and long-term (vector store) memory for the agent | In-context \+ Pinecone/pgvector for long-term |
| Action Validator | Pre-validates every tool call against the ODD before it is sent to the OrgKernel | ODD Enforcement Engine embedded client |
| Escalation Handler | Detects escalation conditions and routes to the configured human OrgExec via the notification bus | UME Escalation Service |
| Reasoning Logger | Captures the full LLM reasoning trace (chain of thought) for every action and logs it to the audit trail | Structured logging to Audit Logger |

## **16.3 First-Party AI Agents**

UME ships with three first-party AI agents included in the Growth plan and above:

| Agent | Function | Key Tools | Default ODD Constraints |
| :---- | :---- | :---- | :---- |
| Scheduling Agent | Optimises daily order scheduling, staff allocation, and equipment utilisation using demand forecasting | crm:order:read, hr:schedule:write, ops:equipment:read, ops:schedule:write | Max 200 schedule changes/hr; escalate if demand \+40% vs forecast; 24/7 operating hours |
| Customer Comms Agent | Sends personalised order status notifications, responds to standard customer enquiries, manages review requests | crm:order:read, crm:customer:read, notify:sms, notify:email | Outbound comms only — cannot modify any record; escalate on any complaint or claim; max 500 messages/day |
| Compliance Monitor Agent | Continuously monitors filing calendar, KRI thresholds, and ODD expiry dates; proactively alerts responsible OrgExecs | risk:kri:read, leg:filing:read, hr:odd:read, sys:audit:read, notify:internal | Read-only access to all modules; no write permissions; escalation to Owner on Critical risk breach |

## **16.4 Custom AI Agent Development**

Organisations can develop and deploy custom AI agents using the UME Agent SDK. The SDK provides:

* ODD contract scaffolding: generate a starting ODD template for a custom agent based on the specified function.

* Tool registry integration: register custom tools that call any UME API endpoint, with automatic ODD capability mapping.

* Testing harness: simulate agent actions in a sandbox environment against a test OrgOS instance before production deployment.

* Monitoring integration: custom agents automatically appear in the OrgSystem AI OrgExec registry with standard health monitoring.

| PART VIII Data Architecture |
| :---- |

# **17\. Data Architecture**

## **17.1 Multi-Tenancy Model**

UME implements a row-level tenant isolation model within a shared PostgreSQL cluster. Every table in every module database includes an org\_id column which is enforced at the Row Security Policy (RSP) level. This means:

* A single database cluster serves all tenants, providing economies of scale.

* Row Security Policies ensure it is architecturally impossible for one tenant's query to return another tenant's data.

* Enterprise customers with regulatory requirements (e.g. financial services, healthcare) can be provisioned on dedicated database clusters at no change to the application layer.

* DAO network members each have their own org\_id scope; inter-organisation data sharing is mediated exclusively through the DAO layer APIs.

## **17.2 Data Store Responsibilities**

| Data Store | Technology | Purpose | Modules |
| :---- | :---- | :---- | :---- |
| Primary RDBMS | PostgreSQL 16 | All transactional data — accounts, employees, orders, events, audit trail | All modules |
| Graph Database | Neo4j 5 | SDO digital twin — nodes and relationships; real-time org graph queries | OrgSystem (SDO engine) |
| Cache Layer | Redis 7 | Session state, ODD resolved permissions, API rate limiting, distributed locks | OrgKernel, all modules |
| Event Streaming | Apache Kafka 3.7 | Asynchronous event bus between modules; event replay and audit event stream | OrgKernel (all events) |
| Document Store | S3-compatible (MinIO / AWS S3) | Contracts, payslips, attachments, audit archive, OrgDNA snapshots | Legal, HR, Finance, OrgSystem |
| Search Index | Elasticsearch 8 | Full-text search across all modules; customer search, document search, audit search | All modules |
| Time-Series DB | TimescaleDB (PostgreSQL extension) | OrgCPU telemetry data, KRI historical time-series, performance metrics | Operations, Risk |
| Vector Store | pgvector (PostgreSQL extension) | AI agent long-term memory, semantic document search, micro-persona embeddings | AI agents, CRM, Marketing |
| Workflow Engine | Temporal.io | Long-running workflows, scheduled jobs, approval workflows, ODD lifecycle | OrgKernel, all modules |

## **17.3 Data Retention Policy**

| Data Category | Retention Period | Legal Basis | Deletion Method |
| :---- | :---- | :---- | :---- |
| Financial records (GL, invoices, payroll) | 7 years from transaction date | HMRC requirement (UK); IRS (US) | Hard delete after retention expires |
| Employee records (active) | Duration of employment \+ 7 years | Employment law \+ HMRC | Anonymise personal fields; retain for HMRC |
| Audit trail records | 7 years minimum; configurable up to indefinite | Regulatory \+ forensic | Hash-chained; cannot be deleted |
| Contract documents | Contract term \+ 7 years | Statute of limitations | Vault archive; access-restricted after expiry |
| ODD contract history | Indefinite — immutable governance record | OrgOS governance policy | Not deletable |
| Customer personal data | Order history retention period (default 3 years) \+ legal claims window | UK GDPR / CCPA | Right-to-erasure tooling available |
| AI agent reasoning logs | 2 years (configurable) | OrgOS AI governance policy | Automated purge after retention |
| Application logs | 90 days | Operational | Log rotation and deletion |

## **17.4 Database Schema Conventions**

All UME database tables follow a consistent schema convention:

* Primary Key: UUID v4 (id column) — globally unique, not sequential, safe for distributed generation.

* Tenant Isolation: org\_id VARCHAR NOT NULL with Row Security Policy.

* Soft Delete: deleted\_at TIMESTAMPTZ NULL — records are soft-deleted by setting this field; a hard-delete background job runs after the retention period.

* Optimistic Locking: version INT NOT NULL DEFAULT 1 — incremented on every update; used for conflict detection.

* Audit Timestamps: created\_at, updated\_at TIMESTAMPTZ NOT NULL — automatically maintained.

* Actor Attribution: created\_by\_actor\_id, updated\_by\_actor\_id UUID — references the OrgExec who created/modified the record.

* ODD Version Snapshot: acted\_under\_odd\_version VARCHAR — the ODD contract version in effect when the record was created/modified.

| PART IX Integration Architecture |
| :---- |

# **18\. Integration Architecture**

## **18.1 Integration Philosophy**

UME is designed to be the system of record for all core business operations. Its integration strategy therefore focuses on two scenarios: (1) consuming data from specialised external systems that UME does not replace (e.g. payment gateways, government e-filing portals), and (2) providing data to downstream systems that need access to UME data (e.g. business intelligence tools, legacy systems).

UME explicitly does not build integrations designed to maintain data in parallel with another system of record — such integrations perpetuate the fragmentation problem UME is designed to solve.

## **18.2 First-Party Integration Catalogue**

| Category | Integration | Direction | Module | Description |
| :---- | :---- | :---- | :---- | :---- |
| Payments | Stripe | Inbound (webhooks) | Finance / CRM | Payment received events → auto-match invoices; Stripe payment links on invoices |
| Payments | GoCardless | Inbound | Finance | Direct debit collection; recurring billing; payment status webhooks |
| Banking | Open Banking (PSD2) | Inbound | Finance | Bank statement import via Open Banking APIs; automatic reconciliation feed |
| Tax (UK) | HMRC Making Tax Digital | Outbound | Finance / Legal | VAT return submission; PAYE RTI submission; Corporation Tax data preparation |
| E-signature | DocuSign | Bidirectional | Legal | Contract sent for signing; signed document webhook → Legal vault |
| E-signature | Adobe Sign | Bidirectional | Legal | Alternative e-signature provider |
| Communication | Twilio SMS | Outbound | CRM / Comms AI | Customer SMS notifications; 2FA SMS codes |
| Communication | SendGrid | Outbound | All modules | Transactional email — invoices, notifications, payslips |
| Calendar | Google Calendar / Outlook | Bidirectional | HR / Work | Leave calendar sync; meeting booking for board management |
| Accounting | Xero Import | Inbound (one-time) | Finance | Historical data migration from Xero during onboarding |
| Accounting | QuickBooks Import | Inbound (one-time) | Finance | Historical data migration from QuickBooks |
| Identity | Google Workspace SSO | Inbound | OrgKernel | SAML 2.0 SSO; user provisioning via SCIM |
| Identity | Microsoft Entra ID | Inbound | OrgKernel | SAML 2.0 SSO; user provisioning via SCIM |
| IoT | MQTT Broker | Inbound | Operations | OrgCPU device telemetry ingestion via MQTT protocol |

## **18.3 Webhook Architecture**

UME provides a configurable outbound webhook system for integration with external platforms. Webhooks can be configured to fire on any event type from the UME event schema.

| Property | Specification |
| :---- | :---- |
| Delivery | HTTPS POST to configured endpoint; retry on failure (exponential backoff, max 5 retries over 24 hours) |
| Payload Format | JSON; conforms to UME event schema; configurable field selection |
| Security | HMAC-SHA256 signature on every request; rotating signing keys; configurable IP allowlist |
| Ordering | Best-effort ordering with correlation\_id for reconstruction; not guaranteed strictly ordered |
| Filtering | Subscribe to specific event types, specific entities, or specific actor types |
| Testing | Test mode sends synthetic events to configured endpoint; webhook log available in OrgSystem |

## **18.4 API Rate Limits**

| Plan | API Requests/minute | Burst Limit | Webhook Deliveries/day | Concurrent WebSocket Connections |
| :---- | :---- | :---- | :---- | :---- |
| Micro | 60 | 120 for 30 seconds | 1,000 | 5 |
| SMB | 300 | 600 for 60 seconds | 10,000 | 25 |
| Growth | 1,000 | 3,000 for 60 seconds | 100,000 | 100 |
| Enterprise | 10,000 | 50,000 for 60 seconds | Unlimited | Unlimited |
| DAO Network (per member) | 2,000 | 6,000 for 60 seconds | 200,000 | 200 |

| PART X Security Architecture |
| :---- |

# **19\. Security Architecture**

## **19.1 Security Model**

The UME security model is built on three layers: network-level security (infrastructure perimeter), transport-level security (all communications encrypted), and application-level security (ODD-enforced permission model). The application-level security layer is uniquely powerful because it enforces permissions not just at the API gateway but at the data layer — meaning even a compromised internal service cannot access out-of-scope data.

## **19.2 Authentication Architecture**

| Actor Type | Authentication Method | Token Type | Token Lifetime | MFA |
| :---- | :---- | :---- | :---- | :---- |
| Human OrgExec (browser) | Username/password or SAML SSO | JWT (short-lived) \+ Refresh token | 15 min / 30 days | Required for Owner/Admin; optional for others (configurable) |
| Human OrgExec (mobile) | Biometric \+ PIN via PKCE flow | JWT \+ Refresh | 15 min / 7 days | Biometric \= MFA |
| AI Agent | API key \+ mutual TLS | API key (rotating) | 24 hours (auto-rotated) | N/A — mTLS provides second factor |
| OrgCPU Device | Hardware device certificate \+ serial number | Device cert (mTLS) | 1 year (renewed automatically) | N/A — hardware cert |
| External Integration | OAuth 2.0 Client Credentials \+ API key | OAuth access token | 1 hour | N/A |
| DAO Smart Contract | Wallet signature (ECDSA) | Signed transaction | Per-transaction | Hardware wallet option |

## **19.3 Encryption Specifications**

| Data Category | At Rest | In Transit | Key Management |
| :---- | :---- | :---- | :---- |
| All database data | AES-256-GCM (storage-level encryption) | TLS 1.3 | AWS KMS / HashiCorp Vault |
| Document vault (contracts, payslips) | AES-256-GCM \+ field-level encryption for PII | TLS 1.3 | Per-document encryption keys in KMS |
| Personal data fields | Column-level AES-256 with per-tenant keys | TLS 1.3 | Tenant-specific key rotation |
| API communications | N/A | TLS 1.3 minimum; TLS 1.2 deprecated | Certificate managed by platform |
| Internal service mesh | N/A | mTLS (Istio) | Istio CA / cert-manager |
| Device telemetry (OrgCPU) | AES-256 on device | mTLS | Device-provisioned certificate |
| DLT transactions | ECDSA signatures on all transactions | TLS 1.3 for node communication | Organisation wallet (custodial or non-custodial) |
| Backups | AES-256-GCM | TLS for backup transfer | Separate backup encryption keys in KMS |

## **19.4 Vulnerability Management**

UME operates a continuous vulnerability management programme:

* Automated dependency scanning on every build (Dependabot \+ Snyk) with critical/high vulnerabilities blocking deployment.

* Weekly SAST (static application security testing) via CodeQL across all repositories.

* Quarterly penetration tests by an independent third-party security firm.

* Bug bounty programme (HackerOne) for responsible disclosure of security vulnerabilities.

* Zero-trust network architecture — no implicit trust between services; all inter-service calls authenticated via mTLS.

* Security incident response plan with defined SLAs: Critical (2-hour response), High (8-hour), Medium (48-hour), Low (7-day).

## **19.5 GDPR and Data Privacy Compliance**

| GDPR Requirement | UME Implementation |
| :---- | :---- |
| Lawful basis for processing | Configurable per-data-category legal basis; documented in Privacy Policy module |
| Right of access (SAR) | Automated Subject Access Request export tool: generates complete JSON of all data for a natural person across all modules |
| Right to erasure | GDPR Erasure Wizard: anonymises personal fields in all tables, removes documents, marks for audit trail — within 30 days |
| Data minimisation | ODD-level field-level read permissions enforce data minimisation; AI agents cannot access fields not in their ODD |
| Portability | Data export API returns all customer/employee data in machine-readable JSON format |
| Privacy by design | Column-level encryption on all PII fields; data access logged; no data shared between tenants |
| DPA / Sub-processors | DPA available; sub-processor list published; security reviews on all sub-processors |
| Data residency | EU-only deployment available; UK-only deployment available for UK GDPR compliance |

| PART XI Deployment Architecture |
| :---- |

# **20\. Deployment Architecture**

## **20.1 Deployment Models**

UME supports three deployment models to accommodate different organisational requirements:

| Model | Description | Target Customer | SLA |
| :---- | :---- | :---- | :---- |
| UME Cloud (SaaS) | Fully managed multi-tenant cloud deployment on UME infrastructure. Zero ops overhead for the customer. | Micro, SMB, Growth, most Enterprise | 99.95% uptime; \< 200ms p95 API response |
| UME Dedicated | Single-tenant deployment on UME-managed infrastructure. Dedicated compute, dedicated database cluster, customer-controlled encryption keys. | Enterprise with data residency requirements | 99.99% uptime; \< 150ms p95 |
| UME On-Premises | Customer-hosted deployment on customer infrastructure (Kubernetes). UME provides Helm charts and platform engineering support. | Highly regulated industries (defence, finance, healthcare) | Customer-defined; UME SLA for software updates only |

## **20.2 Cloud Architecture (SaaS)**

The UME Cloud deployment runs on a multi-region Kubernetes infrastructure with active-active high availability across two primary regions and a standby disaster recovery region.

| Component | Technology | Scaling Model | HA Configuration |
| :---- | :---- | :---- | :---- |
| API Gateway | Kong \+ Nginx | Horizontal auto-scale; minimum 3 replicas | Active-active across AZs |
| OrgKernel Services | Go microservices on Kubernetes | Horizontal auto-scale; HPA on CPU/RPS | Active-active; stateless |
| OrgApp Module Services | Node.js / Go on Kubernetes | Per-module HPA; scale to zero for inactive modules | Active-active; stateless |
| PostgreSQL | Managed PostgreSQL (RDS / Cloud SQL) | Vertical \+ read replicas | Multi-AZ primary/replica; auto-failover \< 30s |
| Redis | Redis Cluster (ElastiCache) | Horizontal sharding | Multi-AZ replication |
| Kafka | MSK (AWS) / Confluent | 6-broker cluster; replication factor 3 | Multi-AZ; 48-hour retention |
| Neo4j | Neo4j AuraDB | Managed scaling | Causal cluster; 3 nodes |
| S3 | AWS S3 / GCS | Unlimited | Cross-region replication |
| CDN / Frontend | CloudFront / Cloudflare | Auto-scale | Multi-PoP global distribution |

## **20.3 Regional Availability**

| Region | Cloud Provider | Data Residency | Available Plans |
| :---- | :---- | :---- | :---- |
| EU West (Ireland) | AWS eu-west-1 | EU data residency (GDPR compliant) | All plans |
| EU Central (Frankfurt) | AWS eu-central-1 | EU data residency; DSGVO compliant | All plans |
| UK (London) | AWS eu-west-2 | UK data residency (UK GDPR) | All plans |
| US East (N. Virginia) | AWS us-east-1 | US data residency | All plans |
| US West (Oregon) | AWS us-west-2 | US data residency | All plans |
| AP Southeast (Singapore) | AWS ap-southeast-1 | APAC data residency | Growth \+ Enterprise |
| AU (Sydney) | AWS ap-southeast-2 | Australian data residency | Enterprise \+ DAO Network |

## **20.4 Disaster Recovery**

| Tier | RTO | RPO | Method |
| :---- | :---- | :---- | :---- |
| Transaction data (PostgreSQL) | \< 30 seconds | \< 1 second | Synchronous multi-AZ replication with automatic failover |
| Event data (Kafka) | \< 60 seconds | \< 5 seconds | Cross-AZ Kafka mirroring; consumer offset checkpointing |
| Graph data (Neo4j) | \< 5 minutes | \< 30 seconds | Neo4j causal cluster with cross-AZ secondary |
| Document store (S3) | \< 5 minutes | Near-zero | Cross-region S3 replication with versioning |
| Full platform (region failure) | \< 15 minutes | \< 60 seconds | Cross-region active-passive; automated DNS failover |
| On-premises deployment | Customer-defined | Customer-defined | Backup scripts included; cold standby Helm deployment |

| PART XII Performance & Observability |
| :---- |

# **21\. Performance Architecture**

## **21.1 Performance Targets**

| Metric | Target | Measurement Method |
| :---- | :---- | :---- |
| API Response Time (p50) | \< 80ms | Prometheus histogram; measured at API gateway |
| API Response Time (p95) | \< 200ms | Prometheus histogram |
| API Response Time (p99) | \< 500ms | Prometheus histogram |
| Dashboard Load Time (full) | \< 1.2 seconds | Synthetic monitoring (Playwright); Real User Monitoring |
| Event Bus Latency (p95) | \< 50ms producer → consumer | Kafka consumer lag monitoring |
| SDO Graph Query (p95) | \< 100ms for 3-hop traversal | Neo4j query log monitoring |
| Database Query (p95) | \< 20ms for indexed queries | pg\_stat\_statements monitoring |
| Audit Write Latency | \< 5ms (non-blocking) | Prometheus histogram |
| ODD Enforcement (p99) | \< 10ms | Internal timing middleware |
| AI Agent Tool Call Round-Trip | \< 800ms (p95) | Agent telemetry |

## **21.2 Caching Strategy**

| Cache Layer | What is Cached | TTL | Invalidation |
| :---- | :---- | :---- | :---- |
| ODD Resolved Permissions | Fully-resolved permission set for each authenticated OrgExec | 5 minutes | Event-driven: invalidated on ODD update |
| SDO Node Cache | Frequently-accessed SDO nodes (top 10% by access rate) | 30 seconds | Event-driven: invalidated on entity update event |
| Chart of Accounts | Full COA tree per org | 10 minutes | Invalidated on account create/update |
| KRI Current Values | Latest KRI readings for dashboard display | 60 seconds | Event-driven on source data change |
| Module Config | Module settings and feature flags per org | 5 minutes | Invalidated on OrgDNA update |
| User Session | Authenticated session \+ decoded JWT claims | 15 minutes (JWT TTL) | Logout or JWT expiry |
| API Response Cache | Read-only API responses for heavy list queries (invoice list, order history) | 30 seconds | Event-driven on mutation events |

## **21.3 Observability Stack**

| Concern | Tool | Key Metrics / Data |
| :---- | :---- | :---- |
| Metrics | Prometheus \+ Grafana | API latency, error rates, DB query times, Kafka consumer lag, Redis hit rates, ODD enforcement timing |
| Tracing | OpenTelemetry \+ Jaeger | Distributed trace for every request; span per service hop; ODD enforcement span; database query spans |
| Logging | Structured JSON logs → Loki → Grafana | Request logs, error logs, audit events, AI agent reasoning logs |
| Alerting | Alertmanager \+ PagerDuty | SLA breach alerts, error rate spikes, Kafka lag alerts, security events, KRI monitoring alerts |
| Synthetic Monitoring | Playwright (UME Canary) | End-to-end user journey tests run every 5 minutes from 6 global locations |
| RUM | OpenTelemetry Web SDK | Core Web Vitals, JS error rates, user journey completion rates from real browsers |
| Uptime | UptimeRobot \+ StatusPage | Public status page with per-module status and incident history |

| PART XIII Developer Platform & SDK |
| :---- |

# **22\. Developer Platform**

## **22.1 SDK Overview**

The UME Developer Platform enables third-party developers and in-house engineering teams to extend the UME platform with custom OrgApps, custom AI agents, custom ODD templates, and custom integrations. The SDK is available for TypeScript/JavaScript (primary), Python, and Go.

## **22.2 SDK Capabilities**

| SDK Module | Language | Capabilities |
| :---- | :---- | :---- |
| @ume/sdk-core | TypeScript / JS | Authentication, OrgKernel API client, event subscription, ODD management, entity CRUD |
| @ume/sdk-agent | TypeScript / Python | AI agent scaffolding, tool registry, ODD-aware tool filter, escalation handler, memory manager |
| @ume/sdk-orgapp | TypeScript | OrgApp module scaffolding, module event schema, module API registration, OrgDNA integration |
| @ume/sdk-dlt | TypeScript / Go | Smart contract deployment, DLT event subscription, wallet integration, DAO governance client |
| @ume/sdk-orgcpu | C / Python / Go | OrgCPU device authentication, telemetry reporting, command handler, ODD device client |
| ume-go | Go | Full API client for Go — same capabilities as @ume/sdk-core |
| ume-python | Python | Full API client for Python — ideal for data science, analytics, and AI agent use cases |

## **22.3 OrgApp Development Lifecycle**

44. Scaffold: Use the UME CLI (ume init \--orgapp) to generate the OrgApp project structure, including module manifest, event schema, ODD capability definitions, and API controller stubs.

45. Develop: Implement business logic in the service layer. Register event handlers for OrgKernel events. Define the ODD capability scopes your module will require from acting OrgExecs.

46. Test: Deploy the OrgApp to the UME Developer Sandbox — a full isolated OrgOS instance provided free of charge for development. Run integration tests using the SDK test harness.

47. Package: Build the OrgApp into a UME Package (.umepkg) — a signed, versioned bundle including the OrgApp manifest, Docker image, ODD templates, and migration scripts.

48. Publish: Submit to the UME OrgApp Marketplace for review (for public apps) or deploy directly to the organisation's OrgOS (for private apps).

49. Install: Organisations install the OrgApp through the OrgSystem module. The OrgApp is registered in the OrgKernel module registry and its ODD templates are added to the OrgDNA.

| PART XIV Platform Roadmap |
| :---- |

# **23\. Platform Roadmap**

## **23.1 Current Version — v3.0.0 (March 2026\)**

Version 3.0.0 is the current production release of the UME platform. Key capabilities delivered in this version:

* OrgKernel v3 — complete rewrite with improved event throughput (5× v2), sub-10ms ODD enforcement, and native multi-region support.

* AI OrgExec Registry — unified governance for AI agents with full ODD framework, LLM model abstraction, and reasoning audit logging.

* DAO & DLT Module GA — production-ready DAO layer with both Hyperledger Fabric and EVM support.

* OrgDNA v3 — full OrgDNA schema with franchise broadcast, version diff tooling, and impact analysis.

* OrgCPU Framework — IoT device OrgExec registration, mTLS authentication, and MQTT telemetry ingestion.

## **23.2 Near-Term Roadmap — v3.1–3.3 (Q2–Q4 2026\)**

| Version | Quarter | Theme | Key Features |
| :---- | :---- | :---- | :---- |
| v3.1 | Q2 2026 | AI-Native Operations | OrgExec Co-Pilot (AI assistant for all module screens); Predictive cash flow forecasting; AI-assisted contract drafting in Legal module |
| v3.2 | Q3 2026 | Global Expansion | US payroll (multi-state); EU VAT OSS support; Australia BAS filing; Singapore GST. New regional data centres: UAE, Brazil |
| v3.3 | Q4 2026 | Enterprise Controls | SOC 2 Type II certification; FedRAMP Ready (US gov); Advanced GRC — SOX-ready controls; Group audit trail across all entities |

## **23.3 Medium-Term Roadmap — v4.0 (2027)**

| Theme | Description |
| :---- | :---- |
| OrgOS Marketplace | Full third-party OrgApp marketplace with ISV SDK, Stripe-powered revenue share, and OrgApp review/certification process |
| Agentic OrgOS | Fully agentic mode: OrgOS can be configured to have an AI Chief of Staff agent that orchestrates other AI agents and surfaces decisions to human OrgExecs proactively |
| Multi-Org Consortium | Supply chain consortium DAO — multiple independent organisations (including competitors) operating shared infrastructure with privacy-preserving data sharing via ZK proofs |
| OrgDNA NFT | Organisation configuration as an NFT on a public blockchain — enables OrgDNA transfer, acquisition, and inheritance as a verifiable on-chain asset |
| Voice OrgExec Interface | Voice-activated OrgOS operations — query the SDO, raise invoices, approve leave, and run reports via natural language voice interface |

| APPENDICES Reference Material |
| :---- |

# **Appendix A: Glossary of Terms**

| AI Agent | A software actor powered by a large language model (LLM) that can autonomously execute tasks within the UME OrgOS, governed by an ODD contract. |
| :---- | :---- |
| **DAO** | Decentralised Autonomous Organisation. A governance structure in which rules are encoded in smart contracts on a distributed ledger and executed automatically without centralised control. |
| **DLT** | Distributed Ledger Technology. A database that is consensually shared and synchronised across multiple sites. UME supports both permissioned (Hyperledger Fabric) and public (Ethereum L2) DLT. |
| **ODD** | Organisational Design Document. The versioned, machine-readable contract that defines the capabilities, constraints, and operating rules of any OrgExec within the OrgOS. |
| **OrgApp** | An application module running within the UME OrgOS. First-party OrgApps include Finance, HR, Legal, CRM, Operations, Risk, OrgSystem, DAO, Marketing, Work, Portal, and Board. |
| **OrgCPU** | An IoT device, physical sensor, industrial machine, or other hardware asset registered as an OrgExec within the OrgOS, operating under its own ODD device contract. |
| **OrgDNA** | The exportable, portable configuration of an entire organisation — its structure, module settings, ODD templates, and roles — stored as a versioned artifact in the .umegen format. |
| **OrgExec** | Any actor that operates within an OrgOS — a human employee, an AI agent, or an OrgCPU device. All OrgExecs operate under an ODD contract. |
| **OrgGraph** | The unified data model of the UME platform. All entities across all modules are nodes in the OrgGraph, connected by typed relationship edges. |
| **OrgKernel** | The central operating kernel of the UME platform. Provides event routing, ODD enforcement, state management, audit logging, and module orchestration. |
| **OrgOS** | Organisation Operating System. The complete UME platform instance for a single organisation. |
| **RTI** | Real Time Information. The HMRC system for payroll reporting in the UK. UME Finance submits FPS and EPS reports via the RTI API. |
| **SDO** | Software-Defined Organisation. The real-time digital twin of an organisation maintained by the OrgKernel. Every entity in the organisation is represented as a node in the SDO graph. |
| **Smart Contract** | A self-executing program deployed on a distributed ledger that automatically enforces the terms of an agreement when predefined conditions are met. |
| **UQL** | UME Query Language. The graph query language used to traverse and query the SDO digital twin. |
| **UPSS** | UME Permission Scope Standard. The standard format for capability scopes used in ODD contracts: module:resource:action. |

# **Appendix B: Core API Reference**

The following tables document the primary API endpoints for each module. Full OpenAPI 3.1 specifications are available at https://docs.ume.io/api/v3.

## **B.1 Finance Module API**

| Method | Endpoint | ODD Scope Required | Description |
| :---- | :---- | :---- | :---- |
| GET | /v3/fin/invoices | fin:invoice:read | List invoices with filtering, pagination, and sorting |
| POST | /v3/fin/invoices | fin:invoice:write | Create a new invoice draft |
| PATCH | /v3/fin/invoices/{id} | fin:invoice:write | Update invoice fields |
| POST | /v3/fin/invoices/{id}/send | fin:invoice:write | Send invoice to customer (email \+ Stripe link) |
| POST | /v3/fin/invoices/{id}/record-payment | fin:invoice:write | Record a payment against an invoice |
| GET | /v3/fin/journal-entries | fin:je:read | List journal entries |
| POST | /v3/fin/journal-entries | fin:je:write | Create and post a journal entry |
| GET | /v3/fin/reports/pl | fin:reports:read | Generate P\&L report for a period |
| GET | /v3/fin/reports/balance-sheet | fin:reports:read | Generate balance sheet as at a date |
| POST | /v3/fin/payroll-runs | fin:payroll:execute | Create a new payroll run |
| POST | /v3/fin/payroll-runs/{id}/process | fin:payroll:execute | Process (finalise) a payroll run |

## **B.2 HR Module API**

| Method | Endpoint | ODD Scope Required | Description |
| :---- | :---- | :---- | :---- |
| GET | /v3/hr/orgexecs | hr:employee:read | List all OrgExecs (humans, agents, devices) |
| POST | /v3/hr/orgexecs | hr:employee:write | Create a new OrgExec (new hire) |
| GET | /v3/hr/orgexecs/{id}/odd | hr:odd:read | Get the current ODD contract for an OrgExec |
| PUT | /v3/hr/orgexecs/{id}/odd | hr:odd:write | Propose a new version of an ODD contract |
| POST | /v3/hr/leave-requests | hr:leave:write | Submit a leave request |
| POST | /v3/hr/leave-requests/{id}/approve | hr:leave:approve | Approve a leave request |
| POST | /v3/hr/leave-requests/{id}/reject | hr:leave:approve | Reject a leave request with reason |

## **B.3 OrgSystem API**

| Method | Endpoint | ODD Scope Required | Description |
| :---- | :---- | :---- | :---- |
| GET | /v3/sys/sdp/graph | sys:sdp:read | Query the SDO graph (UQL or GraphQL body) |
| GET | /v3/sys/audit | sys:audit:read | Query audit trail with filters |
| GET | /v3/sys/orgdna | sys:orgdna:read | Get current OrgDNA artifact |
| POST | /v3/sys/orgdna/export | sys:orgdna:export | Export OrgDNA as .umegen archive |
| POST | /v3/sys/orgdna/clone | sys:orgdna:write | Clone this OrgDNA to create a new OrgOS instance |
| GET | /v3/sys/orgapps | sys:orgapp:read | List installed OrgApps and status |
| POST | /v3/sys/orgapps/{id}/install | sys:orgapp:write | Install an OrgApp from the marketplace |

# **Appendix C: Complete Event Type Reference**

The following is the complete list of standard event types emitted by the UME OrgKernel event bus. All events conform to the UME Event Standard schema defined in Section 3.5.

## **C.1 Finance Events**

| Event Type | Description | Key Payload Fields |
| :---- | :---- | :---- |
| fin.invoice.created | New invoice created (draft or sent) | invoice\_id, customer\_id, amount, currency, status, due\_date |
| fin.invoice.sent | Invoice dispatched to customer | invoice\_id, delivery\_method, sent\_at |
| fin.invoice.paid | Full payment received | invoice\_id, amount\_paid, payment\_method, paid\_at |
| fin.invoice.overdue | Invoice passed due date unpaid | invoice\_id, days\_overdue, amount\_outstanding |
| fin.je.posted | Journal entry posted to GL | je\_id, lines\[\], total\_debit, total\_credit, period |
| fin.payroll.processed | Payroll run finalised and processed | run\_id, period, employee\_count, gross\_total, net\_total |
| fin.period.closed | Accounting period locked | period\_id, period\_name, closed\_by, trial\_balance\_hash |
| fin.bank.reconciled | Bank account reconciled for period | account\_id, period, matched\_count, unmatched\_count |
| fin.kri.runway\_warning | Cash runway KRI below warning threshold | runway\_days, cash\_balance, daily\_burn\_rate, threshold |

## **C.2 HR & ODD Events**

| Event Type | Description | Key Payload Fields |
| :---- | :---- | :---- |
| hr.orgexec.onboarded | New OrgExec activated in the OrgOS | orgexec\_id, type, role, odd\_version, entity\_id |
| hr.orgexec.offboarded | OrgExec deactivated | orgexec\_id, offboarding\_reason, offboarded\_at |
| hr.odd.published | New ODD version published for an OrgExec | orgexec\_id, old\_version, new\_version, changed\_by |
| hr.leave.requested | Leave request submitted | request\_id, orgexec\_id, start\_date, end\_date, leave\_type |
| hr.leave.approved | Leave request approved | request\_id, approved\_by, approved\_at |
| hr.leave.rejected | Leave request rejected with reason | request\_id, rejected\_by, reason |
| hr.payroll.payslip\_generated | Payslip generated for employee | payslip\_id, orgexec\_id, period, net\_pay |

## **C.3 CRM & Operations Events**

| Event Type | Description | Key Payload Fields |
| :---- | :---- | :---- |
| crm.order.created | New order created | order\_id, customer\_id, items\[\], estimated\_value |
| crm.order.started | Order work commenced | order\_id, assigned\_orgexec\_id, started\_at |
| crm.order.ready | Order ready for collection | order\_id, ready\_at, customer\_notified |
| crm.order.completed | Order collected or delivered | order\_id, completed\_at, method |
| crm.order.invoiced | Invoice generated for completed order | order\_id, invoice\_id, amount |
| ops.inventory.low\_stock | Inventory item below reorder point | sku\_id, current\_stock, reorder\_point, supplier\_id |
| ops.equipment.alert | OrgCPU device reporting alert condition | device\_id, alert\_type, reading, threshold, timestamp |
| ops.po.approved | Purchase order approved | po\_id, supplier\_id, total\_value, approved\_by |

## **C.4 DAO & Governance Events**

| Event Type | Description | Key Payload Fields |
| :---- | :---- | :---- |
| dao.proposal.submitted | Governance proposal submitted | proposal\_id, submitted\_by\_org, title, voting\_opens\_at |
| dao.vote.cast | Member organisation cast a vote | proposal\_id, voter\_org\_id, vote (for/against/abstain), cast\_at |
| dao.proposal.passed | Governance proposal passed | proposal\_id, votes\_for, votes\_against, execution\_contract |
| dao.royalty.collected | Royalty payment collected from member | contract\_id, member\_org\_id, amount, period, tx\_hash |
| dao.royalty.distributed | Royalty distributed to treasury/parent | contract\_id, total\_amount, recipients\[\], tx\_hash |
| dao.smart\_contract.deployed | New smart contract deployed to DLT | contract\_id, contract\_type, deployer\_org\_id, chain, address |
| dao.member.joined | New organisation joined the DAO | dao\_id, member\_org\_id, joined\_at, orgdna\_version |

# **Appendix D: Compliance Framework Reference**

## **D.1 UME Security Certifications & Compliance**

| Framework / Certification | Status | Scope | Next Review |
| :---- | :---- | :---- | :---- |
| SOC 2 Type II | In Progress (Q4 2026 target) | All UME Cloud services | Annual |
| ISO 27001 | Planned (2027) | Information Security Management System | Annual |
| UK Cyber Essentials Plus | Certified | All production systems | Annual |
| GDPR / UK GDPR | Compliant — DPA available | All EU/UK customer data | Continuous |
| CCPA | Compliant | US customer personal data | Annual review |
| PCI DSS | SAQ A (payment page hosted by Stripe/GoCardless) | Payment processing | Annual |
| HMRC Making Tax Digital | Approved software provider | UK VAT and PAYE | On HMRC software list |
| FedRAMP | Planned (2027 — US Federal edition) | US Government deployment | Continuous |

## **D.2 Data Residency Options**

| Region | Residency Guarantee | Data Covered | Certificate |
| :---- | :---- | :---- | :---- |
| EU (Ireland/Frankfurt) | All data stays within EU boundaries; no US transfer without SCCs | All customer data, backups, logs | EU SCCs available; DPA provided |
| UK (London) | All data stays within UK; GDPR-UK compliant | All customer data, backups, logs | UK IDTA available; DPA provided |
| US (Virginia/Oregon) | All data stays within US; no international transfer | All customer data, backups, logs | US DPA provided |
| APAC (Singapore/Sydney) | All data stays within APAC region | All customer data, backups, logs | DPA provided; PDPA compliant |

## **D.3 SLA Reference**

| Metric | UME Cloud SMB | UME Cloud Enterprise | UME Dedicated |
| :---- | :---- | :---- | :---- |
| **Monthly Uptime** | 99.95% | 99.99% | 99.99% |
| **Scheduled Maintenance Window** | Sunday 02:00–04:00 UTC | Rolling; zero-downtime deploys | Agreed with customer |
| **Incident Response — Critical (P1)** | \< 1 hour | \< 30 minutes | \< 15 minutes \+ dedicated CSM |
| **Incident Response — High (P2)** | \< 4 hours | \< 2 hours | \< 1 hour |
| **Data Backup Frequency** | Hourly snapshots \+ continuous WAL | Continuous \+ point-in-time recovery | As UME Cloud Enterprise |
| **PITR Window** | 7 days | 30 days | 90 days |
| **Support Channels** | Email \+ in-app chat | Email \+ chat \+ phone \+ dedicated CSM | As Enterprise \+ on-site option |
| **SLA Credit** | 10% per 0.1% downtime below SLA | 25% per 0.01% downtime below SLA | Negotiated |

# **Appendix E: ODD Template Reference**

The following tables provide the standard ODD capability grants for common OrgExec role types in a typical SMB organisation.

## **E.1 Owner / Director ODD**

| Module | Read | Write | Execute | Restrictions |
| :---- | :---- | :---- | :---- | :---- |
| Finance | ✓ All | ✓ All | ✓ Payroll, Period Close | None |
| HR | ✓ All incl. salary | ✓ All | ✓ Hire/Offboard | None |
| Legal | ✓ All | ✓ All | ✓ File, Sign | None |
| CRM | ✓ All | ✓ All | ✓ All | None |
| Operations | ✓ All | ✓ All | ✓ All | None |
| Risk | ✓ All | ✓ All | ✓ Board reports | None |
| OrgSystem | ✓ All | ✓ ODD, OrgDNA | ✓ Deploy agents | None |
| DAO | ✓ All | ✓ All | ✓ Vote, Sign contracts | None |

## **E.2 Manager ODD**

| Module | Read | Write | Execute | Restrictions |
| :---- | :---- | :---- | :---- | :---- |
| Finance | ✓ Reports, AR, AP | ✓ Invoices, Expenses | ✗ Payroll, Period Close | Invoices ≤ £10,000 only |
| HR | ✓ Own dept (no salaries) | ✓ Leave approve, Notes | ✓ Initiate hire wizard | Cannot see salary data |
| Legal | ✓ Contracts, Calendar | ✓ Contracts \< £50k | ✗ File with HMRC | Contract value limit enforced |
| CRM | ✓ All | ✓ All | ✓ All | None |
| Operations | ✓ All | ✓ Schedule, POs ≤ £5k | ✗ Major POs | PO approval threshold |
| Risk | ✓ Own dept risks | ✓ Risk entries | ✗ Board reports | Dept-scoped view only |
| OrgSystem | ✓ ODD (own dept) | ✗ ODD, OrgDNA | ✗ Deploy agents | Read-only system access |
| DAO | ✗ | ✗ | ✗ | No DAO access |

## **E.3 Standard Employee ODD**

| Module | Read | Write | Execute | Restrictions |
| :---- | :---- | :---- | :---- | :---- |
| Finance | ✗ | ✗ | ✗ | No finance access |
| HR | ✓ Own record only | ✓ Leave request | ✗ | Self-service only |
| Legal | ✗ | ✗ | ✗ | No legal access |
| CRM | ✓ Assigned orders | ✓ Order status update | ✗ | Own assigned orders only |
| Operations | ✓ Schedule, Equipment | ✓ Consumption record | ✗ | Own tasks only |
| Risk | ✗ | ✗ | ✗ | No risk access |
| OrgSystem | ✗ | ✗ | ✗ | No system access |
| DAO | ✗ | ✗ | ✗ | No DAO access |

# **Appendix F: OrgDNA JSON Schema Reference**

The following defines the complete OrgDNA schema in a structured reference format. The full JSON Schema (Draft 2020-12) is available at https://docs.ume.io/schema/orgdna/v3.

| JSON Path | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| $.schema\_version | string (semver) | Yes | OrgDNA schema version — e.g. "3.0.0" |
| $.orgdna\_version | string (semver) | Yes | This OrgDNA artifact version — e.g. "1.4.2" |
| $.generated\_at | string (ISO-8601) | Yes | Timestamp when this version was generated |
| $.identity.org\_id | string (UUID) | Yes | Globally unique organisation identifier |
| $.identity.display\_name | string | Yes | Organisation display name |
| $.identity.legal\_name | string | Yes | Registered legal name |
| $.identity.jurisdiction | string (ISO 3166\) | Yes | Primary jurisdiction — e.g. "GB-ENG" |
| $.identity.entity\_type | enum | Yes | One of: sole\_trader, ltd, llc, llp, plc, partnership, nonprofit, dao |
| $.identity.tax\_ids\[\] | array of objects | No | Tax identification numbers — e.g. UTR, VAT number, EIN |
| $.structure.departments\[\] | array of objects | Yes | Department tree with id, name, parent\_id, cost\_centre |
| $.structure.reporting\_lines\[\] | array of objects | No | OrgExec reporting relationships |
| $.modules\[\].module\_code | string (enum) | Yes | Module code — e.g. FIN, HR, LEG, CRM |
| $.modules\[\].enabled | boolean | Yes | Whether this module is active |
| $.modules\[\].settings | object | No | Module-specific configuration (varies per module) |
| $.odd\_templates\[\] | array of objects | Yes | ODD contract templates keyed by template\_id |
| $.roles\[\].role\_id | string | Yes | Unique role identifier |
| $.roles\[\].odd\_template\_id | string | Yes | Reference to odd\_templates\[\] |
| $.compliance.filing\_calendar | array of objects | No | Configured filing obligations |
| $.compliance.vat\_config | object | No | VAT scheme, registration number, return frequency |
| $.compliance.payroll\_config | object | No | Payroll frequency, pension scheme, tax regime |

# **8b. Finance Module — Extended Reference**

## **8b.1 Bank Reconciliation Engine**

The bank reconciliation engine automates the matching of bank statement transactions against ledger entries. The engine uses a multi-pass matching algorithm:

50. Exact match pass: Match by transaction amount \+ reference number exact string match. Typically matches 60–75% of transactions automatically.

51. Fuzzy reference match: Match by amount \+ reference number Levenshtein distance ≤ 2\. Captures minor OCR errors or reference truncation. Adds \~10% match rate.

52. Date window match: Match by amount within ±3 business day window. Captures timing differences between banking day and posting date. Adds \~8% match rate.

53. Combination match: Match a single bank transaction to multiple ledger entries that sum to the bank amount (or vice versa). Handles bulk payments.

54. Manual review: Remaining unmatched items are surfaced for manual review with AI-suggested matches ranked by confidence score.

## **8b.2 Multi-Entity Consolidation**

For organisations with multiple legal entities (subsidiaries, group companies, franchise operations), the Finance module provides a full consolidation accounting engine:

| Consolidation Step | Process | Output |
| :---- | :---- | :---- |
| Chart of Accounts Alignment | Maps each entity's local COA to the group standardised COA using configurable mapping rules | Normalised trial balances per entity in group COA format |
| Currency Translation | Translates entity financials to the presentation currency using spot rates, average rates, or closing rates per IFRS/UK GAAP rules | FX-translated trial balances with translation reserve |
| Intercompany Elimination | Identifies and eliminates intercompany balances (loans, trading, dividends) to avoid double-counting in group accounts | Elimination journal entries per entity pair |
| Minority Interest | Calculates and attributes non-controlling interests for subsidiaries not 100% owned | Minority interest balance sheet and P\&L lines |
| Group Aggregation | Aggregates all entity trial balances (after translation and eliminations) into consolidated P\&L, Balance Sheet, and Cash Flow | Consolidated financial statements |
| Variance Analysis | Compares consolidated results against budget, prior period, and prior year | Variance report with commentary prompts for AI-assisted narrative generation |

## **8b.3 Budgeting Module**

The budgeting module supports three budgeting methodologies:

* Zero-Based Budgeting (ZBB): Each budget line is built from scratch each period, justified by the operational plan. No automatic roll-forward.

* Incremental Budgeting: Prior period actuals are used as the base, with configurable percentage adjustments per cost category. Fastest for simple SMB use cases.

* Driver-Based Budgeting: Revenue and cost lines are driven by operational metrics (e.g. projected order volume × average order value → revenue; headcount × salary rate → payroll budget). Linked to the Operations and HR modules.

| Budget Feature | Description |
| :---- | :---- |
| Rolling Forecast | Monthly reforecast replacing remaining budget with latest estimate; maintains 12-month rolling view |
| Variance Alerts | Configurable alerts when actuals exceed budget by a threshold (e.g. \> 10% adverse on any P\&L line) |
| Department Budgets | Budgets can be set at department level; department heads can view own budget vs actuals only (ODD-scoped) |
| Budget Approval Workflow | Budget submission → Finance Director review → CEO approval → lock; tracked in ODD approval workflow |
| Scenario Planning | Three scenario support: Base, Upside, Downside with probability-weighted blended forecast |
| Budget Import | Import budget from Excel template; auto-maps to COA using fuzzy matching |

## **8b.4 Tax Engine Configuration**

The UME tax engine is configured through jurisdiction-specific tax rule packages. The following tax rule packages are available in v3.0:

| Tax Package | Jurisdiction | Taxes Covered | Regulatory Integration |
| :---- | :---- | :---- | :---- |
| UK-STANDARD | England, Wales, Scotland, N. Ireland | VAT (Standard, Reduced, Zero, Exempt), PAYE Income Tax, NIC (Class 1/1A/2/4), Corporation Tax | HMRC MTD API, RTI |
| UK-CONSTRUCTION | UK | As UK-STANDARD \+ CIS (Construction Industry Scheme) withholding | HMRC CIS API |
| EU-VAT | EU Member States | EU VAT including OSS (One Stop Shop) for cross-border digital services | EU OSS portal integration |
| US-FEDERAL | United States | Federal Income Tax withholding, FICA (Social Security \+ Medicare), FUTA | EFTPS API, IRS e-file |
| US-MULTISTATE | US (multi-state) | As US-FEDERAL \+ state income tax withholding for all 50 states \+ DC | Per-state agency integration |
| AU-STANDARD | Australia | GST, PAYG withholding, Superannuation (11.5% SGL) | ATO Single Touch Payroll API |
| SG-STANDARD | Singapore | GST, CPF contributions (employee \+ employer) | IRAS API, CPF API |

# **9b. HR Module — Extended Reference**

## **9b.1 Performance Management Framework**

The performance management framework supports three review cycle models:

| Model | Description | Best For |
| :---- | :---- | :---- |
| Annual Review | Single annual review with structured self-assessment, manager assessment, and rating | Traditional SMBs; simpler administrative overhead |
| Bi-annual Review | Mid-year check-in \+ end-of-year formal review; ratings only at year-end | Growth-stage businesses; balances rigour with agility |
| Continuous OKR | Quarterly OKR-setting and review; no single annual rating; always-on feedback | Tech companies; output-focused teams |

Each review cycle generates a structured review record with: objectives, key results, self-assessment narrative, manager assessment narrative, 360-degree feedback summary, development priorities, and a formal rating (if applicable). Review records are stored in the HR document vault and linked to the OrgExec record in the SDO.

## **9b.2 Leave Management Jurisdiction Rules**

| Jurisdiction | Annual Leave | Sick Pay | Parental Leave | Notes |
| :---- | :---- | :---- | :---- | :---- |
| UK (England/Wales) | 28 days statutory (5.6 weeks) incl. bank holidays | SSP £116.75/week from day 4; 28 weeks max | Maternity 52 weeks (39 paid at SMP rate); Paternity 2 weeks; Shared Parental Leave up to 50 weeks | Part-time: pro-rata by contracted hours |
| Scotland | 28 days statutory | As England/Wales | As England/Wales | Different bank holiday dates |
| United States | No federal minimum; state variations | No federal mandate; state FMLA/PFL | FMLA 12 weeks unpaid (50+ employees) | Configure per-state rules; California, NY differ substantially |
| European Union | Minimum 4 weeks (EU Working Time Directive) | Varies by member state | EU minimum 4 months parental leave | Member state rules apply; configure per entity jurisdiction |
| Australia | 4 weeks annual leave \+ 10 days personal/carer's leave | Personal/carer's leave as above (paid) | Parental Leave Pay (PLP) 20 weeks at minimum wage from government | Modern Awards may provide additional entitlements |

## **9b.3 Offboarding Workflow**

The offboarding workflow ensures a structured, auditable departure process that protects the organisation legally and operationally:

55. Initiation: HR Manager or Owner initiates offboarding for an OrgExec, specifying: departure reason (resignation/dismissal/redundancy/retirement), last working day, and notice period status.

56. Notice Period Management: If notice is being served, the employee's ODD is updated to reflect any changed access during the notice period (e.g. restricted to read-only on sensitive modules).

57. Knowledge Transfer: Work Management tasks are generated for knowledge transfer activities specific to the departing employee's role.

58. IT Access Revocation: On the last working day, the offboarding workflow triggers immediate ODD suspension across all modules, revocation of all API keys, and SSO session termination.

59. Payroll Final Settlement: Finance module is notified to calculate final pay including accrued but untaken holiday, any PILON (payment in lieu of notice), and statutory payments.

60. Reference Data Retention: Employee record is archived (not deleted) per data retention policy. The OrgExec is moved to Inactive status in the SDO.

61. Legal Checklist: Legal module generates an offboarding legal checklist: return of company property, IP assignment confirmation, confidentiality obligations reminder, reference policy.

# **13b. Risk Module — Extended Reference**

## **13b.1 Risk Matrix**

UME uses a standard 5×5 risk impact × likelihood matrix to score risks. The inherent risk score determines the management response level:

| Score | Likelihood | Impact: Low (1) | Impact: Medium (2) | Impact: High (3) | Impact: Critical (4) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **5 — Certain** | Very likely to occur within 12 months | 5 — Medium | 10 — High | 15 — Critical | 20 — Critical |
| **4 — Likely** | More likely than not in 12 months | 4 — Low | 8 — Medium | 12 — High | 16 — Critical |
| **3 — Possible** | \~50/50 in 12 months | 3 — Low | 6 — Medium | 9 — High | 12 — High |
| **2 — Unlikely** | Less than 30% in 12 months | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium |
| **1 — Rare** | Less than 5% in 12 months | 1 — Low | 2 — Low | 3 — Low | 4 — Low |

## **13b.2 GRC Control Library**

The GRC module ships with a library of pre-built controls mapped to common frameworks. Controls can be assigned to OrgExecs, linked to evidence documents in the Legal vault, and assessed for operating effectiveness.

| Control ID | Control Name | Framework Mapping | Evidence Type | Frequency |
| :---- | :---- | :---- | :---- | :---- |
| CTL-FIN-001 | Dual authorisation for payments \> £10,000 | COSO PCI-06, ISO 27001 A.9.4 | Payment approval audit log | Per transaction |
| CTL-FIN-002 | Monthly bank reconciliation completed within 5 working days | COSO AC-12 | Reconciliation completion record | Monthly |
| CTL-FIN-003 | Quarterly management accounts reviewed and approved by Director | COSO FM-05 | Signed management accounts | Quarterly |
| CTL-HR-001 | All new OrgExecs have ODD contract before system access | ISO 27001 A.9.2.1 | ODD publication record | Per hire |
| CTL-HR-002 | ODD contracts reviewed annually | ISO 27001 A.9.2.5 | Review completion record | Annual |
| CTL-IT-001 | MFA enabled for all human OrgExecs with financial module access | ISO 27001 A.9.4, CIS v8 \#6 | Authentication log — MFA usage rate | Continuous monitoring |
| CTL-IT-002 | Penetration test conducted by qualified third party annually | ISO 27001 A.18.2.3, Cyber Essentials+ | Pentest report \+ remediation evidence | Annual |
| CTL-COM-001 | VAT return submitted on time (within 5 days of deadline) | HMRC MTD compliance | Submission confirmation from HMRC API | Quarterly |
| CTL-COM-002 | PAYE RTI Full Payment Submission sent on or before pay day | HMRC RTI compliance | FPS submission confirmation | Monthly |

## **13b.3 Board Risk Reporting**

The Risk module generates a standard Board Risk Report suitable for presentation to the board of directors. The report is auto-generated on a configurable schedule (monthly or quarterly) and includes:

* Executive risk summary: current top 5 risks with change indicators (new / increased / decreased / closed) since last report.

* Risk heatmap: 5×5 matrix visualisation showing all open risks by inherent and residual score.

* KRI dashboard: current vs threshold values for all configured KRIs, with trend charts for the past 12 months.

* Compliance calendar: upcoming filing obligations within the next 90 days with status (on track / at risk / overdue).

* Control effectiveness: GRC assessment scores by framework and control category.

* Incident register: any operational incidents in the period with root cause and remediation status.

| PART XV Implementation Guide |
| :---- |

# **24\. Implementation Guide**

## **24.1 Implementation Phases**

A standard UME implementation for an SMB follows a four-phase approach. Total time from contract signature to full operational deployment is typically 4–8 weeks depending on data migration complexity and organisational readiness.

| Phase | Duration | Activities | Deliverables |
| :---- | :---- | :---- | :---- |
| Phase 1: Foundation | Week 1–2 | OrgDNA configuration; entity setup; chart of accounts; role and ODD template setup; SSO integration; data migration planning | Configured OrgOS instance; migrated historical financial data; all OrgExecs with active ODDs |
| Phase 2: Core Operations | Week 2–4 | Finance module go-live (invoicing, GL, payroll); HR module go-live (employee records, leave); CRM order management; Legal compliance calendar | Live financial management; payroll running on UME; order management operational |
| Phase 3: Extended Modules | Week 4–6 | Operations module (inventory, equipment OrgCPUs); Risk module (risk register, KRI config); Work management; Marketing campaigns | Full operational coverage across all modules |
| Phase 4: AI & Automation | Week 6–8 | AI OrgExec deployment (Scheduling, Comms, Compliance Monitor); ODD fine-tuning; SDO digital twin validation; DAO layer (if applicable) | Fully agentic OrgOS; AI agents in production; stakeholder sign-off |

## **24.2 Data Migration Framework**

Data migration is typically the most complex element of an OrgOS implementation. UME provides a structured migration framework:

| Data Category | Source | Migration Method | Validation Steps |
| :---- | :---- | :---- | :---- |
| Chart of Accounts | QuickBooks / Xero / Excel | CSV import with COA mapping wizard | Manual review of account mapping; trial balance reconciliation |
| Historical Transactions | Prior accounting system | CSV import via Finance Migration API (last 24 months recommended) | Trial balance matches source system; sample transaction spot-checks |
| Customer Records | CRM / spreadsheets | CSV import via CRM Migration API | Record count reconciliation; sample data quality check |
| Employee Records | HR system / spreadsheets | CSV import via HR Migration API | Headcount reconciliation; ODD provisioning check for all employees |
| Open Invoices | Prior system | CSV import — AR balance must match GL | AR ageing reconciliation; open invoice count check |
| Open POs / Bills | Prior system | CSV import — AP balance must match GL | AP ageing reconciliation |
| Contracts / Documents | Document management / email | Bulk upload to Legal Vault with metadata tagging | Document count; metadata completeness |
| Bank Balances | Bank statements | Opening balance journal entry \+ bank statement import from Day 1 | Cash balance reconciliation to bank statement |

## **24.3 Cutover Checklist**

The following is the standard go-live cutover checklist. All items must be confirmed complete by the implementation lead before activating the new OrgOS for production use:

| \# | Checklist Item | Owner | Status Field |
| :---- | :---- | :---- | :---- |
| 1 | OrgDNA v1.0 published and all modules configured | UME Implementation Lead | Complete / Outstanding |
| 2 | All OrgExecs onboarded with active ODD contracts | HR Manager | Complete / Outstanding |
| 3 | Chart of accounts mapped and historical data migrated | Finance Director | Complete / Outstanding |
| 4 | Opening balance trial balance reconciled to prior system | Finance Director | Complete / Outstanding |
| 5 | All customers imported; CRM order management tested end-to-end | Operations Manager | Complete / Outstanding |
| 6 | Payroll run tested in staging environment with dummy data | HR Manager | Complete / Outstanding |
| 7 | Compliance calendar validated against known filing obligations | Company Secretary / Owner | Complete / Outstanding |
| 8 | Bank feeds connected and reconciliation tested | Finance Director | Complete / Outstanding |
| 9 | AI OrgExec ODDs reviewed and approved by Owner | Owner | Complete / Outstanding |
| 10 | All OrgExecs trained on their module access | UME Implementation Lead | Complete / Outstanding |
| 11 | Backup prior system data exported and archived | IT / Owner | Complete / Outstanding |
| 12 | Emergency rollback plan documented and tested | UME Implementation Lead | Complete / Outstanding |

| PART XVI Infrastructure Deep Dive |
| :---- |

# **25\. Infrastructure Architecture — Deep Dive**

## **25.1 Kubernetes Cluster Architecture**

The UME Cloud production deployment runs on a multi-zone Kubernetes cluster per region. Each cluster is structured into dedicated node pools by workload type:

| Node Pool | Instance Type | Min / Max Nodes | Workloads | Taints / Labels |
| :---- | :---- | :---- | :---- | :---- |
| orgkernel-pool | c5.2xlarge (8vCPU, 16GB) | 3 / 12 | OrgKernel services, ODD Engine, Event Bus consumers | critical=true |
| modules-pool | c5.xlarge (4vCPU, 8GB) | 4 / 40 | All OrgApp module services | workload=modules |
| ai-pool | g4dn.xlarge (4vCPU, 16GB, T4 GPU) | 0 / 8 (scale-to-zero) | AI Agent runtime containers | gpu=true; workload=ai |
| data-pool | r5.2xlarge (8vCPU, 64GB) | 3 / 6 (stateful) | Redis, Elasticsearch, TimescaleDB sidecars | data=true; NoSchedule others |
| batch-pool | c5.large (2vCPU, 4GB) | 0 / 20 (scale-to-zero) | Batch jobs, report generation, bulk imports | workload=batch |
| ingress-pool | c5.large (2vCPU, 4GB) | 3 / 6 | Kong API Gateway, Nginx ingress controllers | ingress=true |

## **25.2 Network Security Architecture**

The UME platform network is structured in multiple security zones with strict ingress/egress control between zones:

| Zone | Contents | Ingress Allowed From | Egress Allowed To |
| :---- | :---- | :---- | :---- |
| DMZ (Public) | CDN PoPs, Load Balancers, WAF | Internet (port 443 only) | API Gateway Zone |
| API Gateway Zone | Kong API Gateway, Rate Limiter, Auth middleware | DMZ | OrgKernel Zone |
| OrgKernel Zone | OrgKernel services, ODD Engine, Event Bus | API Gateway Zone, Module Zone (gRPC) | Module Zone, Data Zone |
| Module Zone | All OrgApp module services | OrgKernel Zone | OrgKernel Zone, Data Zone, External Integrations Zone |
| Data Zone | PostgreSQL, Redis, Neo4j, Kafka, Elasticsearch | OrgKernel Zone, Module Zone | S3 Zone (backups) |
| S3 Zone | Object storage — documents, backups, audit archive | Data Zone, Module Zone (documents) | No egress to internet; cross-region replication only |
| External Integrations Zone | Outbound webhooks, HMRC API, Stripe API, Twilio API | Module Zone | Internet (specific allow-listed domains only) |
| Management Zone | CI/CD pipelines, monitoring, alerting | VPN only | All zones (read/deploy only) |

## **25.3 CI/CD Pipeline Architecture**

UME uses a trunk-based development model with automated testing gates at every stage of the deployment pipeline:

62. Code commit to main branch → automated unit test suite (Go/Node.js test frameworks; minimum 85% coverage gate).

63. PR merge → integration test suite runs against a full ephemeral UME test environment (spun up on demand by the pipeline).

64. SAST scan (CodeQL) \+ dependency vulnerability scan (Dependabot/Snyk) → critical/high vulnerabilities block promotion.

65. Container image build \+ sign (cosign) → image pushed to private container registry with immutable tag.

66. Staging deployment → automated smoke tests \+ E2E Playwright tests against staging environment.

67. Performance benchmark: API response time regression test — if p95 degrades by \> 15% vs baseline, deployment is blocked.

68. Production deployment using Argo CD GitOps → progressive rollout (canary: 5% → 25% → 100% over 30 minutes with automatic rollback on error rate spike).

69. Post-deployment synthetic monitoring validation — if Playwright canary fails within 10 minutes, automatic rollback triggered.

# **Appendix G: Worked Example — Bob's Dry Cleaning Ltd**

This appendix provides a complete worked example of a UME OrgOS implementation for a small dry-cleaning business, illustrating how the platform concepts described in this document apply in a real-world context.

## **G.1 Business Overview**

| Business Name | Bob's Dry Cleaning Ltd |
| :---- | :---- |
| **Legal Form** | Private Limited Company (Ltd) — England & Wales |
| **Company Number** | 12345678 (Companies House) |
| **VAT Number** | GB 987 654 321 |
| **Employees** | 7 full-time, 2 part-time |
| **Annual Revenue** | Approximately £340,000 |
| **OrgOS Edition** | Growth Plan |
| **Modules Active** | Finance, HR, Legal, CRM, Operations, Risk, OrgSystem, Work |
| **AI Agents** | Scheduling Agent (AI-SCHED-v2.0), Customer Comms Agent (AI-COMMS-v1.5), Compliance Monitor (AI-COMP-v1.1) |

## **G.2 OrgExec Registry**

| Name | Role | Type | ODD Template | Key Capabilities |
| :---- | :---- | :---- | :---- | :---- |
| Bob A. | Owner / Director | Human | OWNER-ODD-v1.2 | Full access — all modules; DAO voting rights; payroll approve; period close |
| Alice L. | Manager | Human | MANAGER-ODD-v1.1 | All modules; invoice ≤ £10k; PO ≤ £5k; leave approve; no salary view |
| Tom W. | Senior Cleaner | Human | FTE-CLEANER-ODD-v1.2 | CRM orders (own); Operations schedule; HR own record |
| Sarah P. | Cleaner | Human | FTE-CLEANER-ODD-v1.1 | CRM orders (own); Operations schedule; HR own record |
| Mike J. | Driver | Human | FTE-DRIVER-ODD-v1.0 | CRM orders (collection/delivery); HR own record; no ops equipment |
| Scheduling Agent | AI Scheduler | AI Agent | AI-SCHED-ODD-v2.0 | CRM read; HR schedule write; Ops schedule write; max 200/hr; escalate at \+40% demand |
| Comms Agent | AI Comms | AI Agent | AI-COMMS-ODD-v1.5 | CRM order read, customer notify; SMS/email outbound only; no write; escalate on complaint |
| Compliance Agent | AI Compliance | AI Agent | AI-COMP-ODD-v1.1 | Risk KRI read; Legal calendar read; all read-only; escalate Critical KRI to Bob |
| Washer A | Industrial Washer | OrgCPU | ORGCPU-WASHER-v1.0 | ops:equipment:telemetry; ops:cycle:report; no commands |
| Washer B | Industrial Washer | OrgCPU | ORGCPU-WASHER-v1.0 | ops:equipment:telemetry; ops:cycle:report; no commands |

## **G.3 Typical Daily OrgOS Activity**

The following illustrates a typical day of OrgOS activity and how the platform components interact:

| Time | Actor | Action | Platform Response |
| :---- | :---- | :---- | :---- |
| 06:00 | Scheduling Agent | Reviews overnight order queue (12 orders); optimises schedule for the day | ODD checked (200/hr limit OK); schedule written to Ops; HR notified of assignments; SDO updated |
| 07:30 | Tom W. | Logs in; views assigned orders on Order Board | JWT issued; ODD resolved (FTE-CLEANER); orders filtered to Tom's assignments only |
| 09:15 | Washer A (OrgCPU) | Completes cycle for order \#4521; emits ops.equipment.cycle\_complete | OrgKernel routes event; CRM updates order to "Ready"; Comms Agent triggered |
| 09:16 | Comms Agent | Sends "Your order is ready" SMS to Mrs Chen | ODD checked (notify:sms permitted); SMS sent via Twilio; audit record created; CRM customer record updated with communication log |
| 10:30 | Alice L. | Raises invoice INV-1086 for £340 and sends to customer | ODD checked (fin:invoice:write; £340 \< £10k limit OK); invoice created; SendGrid email dispatched; AR updated; SDO updated |
| 11:45 | Compliance Agent | KRI check — cash runway now 18 days, below 30-day threshold | KRI breach event emitted; risk.kri.runway\_breach event; Bob notified (push \+ email); Risk register auto-updated |
| 12:00 | Bob A. | Receives KRI breach notification; reviews cash position in Finance | Full Finance module access (Owner ODD); cash flow forecast viewed; AR ageing reviewed |
| 15:00 | Bob A. | Approves July payroll run (£21,420 net) | ODD checked (fin:payroll:execute OK); payroll processed; journal entries posted; payslips generated; HR notified; RTI FPS queued for HMRC |
| 17:00 | Sarah P. | Submits leave request for Aug 5–7 (3 days) | ODD checked (hr:leave:write OK); leave request created; Alice notified for approval; team coverage check passes (\>60%) |
| 17:05 | Alice L. | Approves Sarah's leave request | ODD checked (hr:leave:approve OK); leave approved; HR record updated; Finance accruals updated; Sarah notified |

# **Appendix H: Sample ODD Contract — JSON Format**

The following is an abridged example of an ODD contract JSON document for the Customer Comms AI Agent. Full JSON Schema is available at https://docs.ume.io/schema/odd/v3.

Note: The below is a human-readable representation. The actual ODD stored in UME includes all fields specified in Appendix F and is digitally signed by the approving OrgExec.

| JSON Field | Value | Explanation |
| :---- | :---- | :---- |
| odd\_id | "ODD-0007" | Unique ODD identifier in the OrgOS |
| odd\_version | "1.5.2" | Semantic version of this ODD contract |
| identity.actor\_id | "AGENT-COMMS-001" | System identifier for this AI agent |
| identity.type | "ai\_agent" | OrgExec type: human | ai\_agent | orgcpu |
| identity.display\_name | "Customer Comms Agent" | Human-readable name shown in OrgSystem |
| identity.model | "claude-3-5-sonnet" | LLM model this agent runs on |
| capabilities\[0\].scope | "crm:order:read" | Can read CRM order data |
| capabilities\[1\].scope | "crm:customer:read" | Can read CRM customer records |
| capabilities\[2\].scope | "notify:sms" | Can send outbound SMS via Twilio |
| capabilities\[3\].scope | "notify:email" | Can send outbound emails via SendGrid |
| constraints.rate\_limit.max\_per\_hour | 500 | Maximum 500 notification actions per hour |
| constraints.rate\_limit.max\_per\_day | 5000 | Hard daily limit on all outbound messages |
| constraints.data\_scope | "crm.orders:assigned\_to\_org" | Can only see orders belonging to its own org |
| constraints.operating\_hours | "00:00-23:59" | Operates 24/7 (customers may query at any time) |
| escalation.trigger\_conditions\[0\] | "customer.sentiment \== negative" | Escalate to assigned OrgExec if negative sentiment detected |
| escalation.trigger\_conditions\[1\] | "message\_type \== complaint" | Always escalate complaints — no AI response |
| escalation.target\_actor\_id | "EMP-0002" | Escalates to Alice L. (Manager) |
| audit.verbosity | "maximum" | Log all LLM reasoning traces and tool calls |
| audit.retention\_years | 2 | Reasoning logs retained 2 years; notifications 7 years |
| approved\_by | "EMP-0001" | Bob A. (Owner) approved this ODD version |
| approved\_at | "2025-09-01T14:32:00Z" | ISO-8601 approval timestamp |
| digital\_signature | "SHA256:3a7f..." | ECDSA signature of Owner's ODD approval key |

# **Appendix I: Platform Configuration Reference**

## **I.1 OrgKernel Environment Variables**

The following environment variables configure the OrgKernel in all deployment models. These are set in the Kubernetes ConfigMap and Secret resources managed by the UME Helm chart.

| Variable | Default | Description |
| :---- | :---- | :---- |
| ORGKERNEL\_ODD\_CACHE\_TTL\_SEC | 300 | ODD resolved permission cache TTL in seconds |
| ORGKERNEL\_EVENT\_BUS\_BROKERS | (required) | Comma-separated Kafka broker addresses |
| ORGKERNEL\_EVENT\_BUS\_TOPIC\_PREFIX | ume.events | Kafka topic prefix for all event types |
| ORGKERNEL\_AUDIT\_DB\_URL | (required) | PostgreSQL connection string for audit log database |
| ORGKERNEL\_AUDIT\_S3\_BUCKET | (required) | S3 bucket name for long-term audit archive |
| ORGKERNEL\_SDO\_NEO4J\_URI | (required) | Neo4j Bolt URI for SDO graph database |
| ORGKERNEL\_REDIS\_URL | (required) | Redis connection URL for caching and locks |
| ORGKERNEL\_JWT\_SECRET\_KID | (required) | Key ID for JWT signing key in KMS |
| ORGKERNEL\_MAX\_REQUEST\_SIZE\_MB | 50 | Maximum inbound request body size in MB |
| ORGKERNEL\_RATE\_LIMIT\_WINDOW\_SEC | 60 | Rate limit sliding window size in seconds |
| ORGKERNEL\_TRACE\_SAMPLE\_RATE | 0.05 | OpenTelemetry trace sample rate (5% default) |
| ORGKERNEL\_LOG\_LEVEL | info | Log verbosity: debug | info | warn | error |
| ORGKERNEL\_MULTI\_REGION\_ENABLED | false | Enable cross-region event replication |
| ORGKERNEL\_ORGDNA\_S3\_BUCKET | (required) | S3 bucket for OrgDNA artifact storage |
| ORGKERNEL\_AI\_AGENT\_REASONING\_LOG | true | Whether to capture LLM reasoning traces in audit log |

## **I.2 Module Feature Flags**

Feature flags control the availability of specific module capabilities. Flags are stored in the OrgDNA and can be toggled per organisation through the OrgSystem module.

| Flag Key | Module | Default | Description |
| :---- | :---- | :---- | :---- |
| fin.multi\_currency.enabled | Finance | false | Enable multi-currency invoicing and GL entries |
| fin.auto\_reconciliation.enabled | Finance | true | Enable automated bank reconciliation matching |
| fin.consolidation.enabled | Finance | false | Enable multi-entity P\&L consolidation (requires Growth+) |
| hr.360\_feedback.enabled | HR | false | Enable 360-degree peer feedback in performance reviews |
| hr.ai\_interview\_assist.enabled | HR | false | Enable AI-assisted interview question generation (beta) |
| crm.micro\_persona.enabled | CRM | true | Enable customer micro-persona engine |
| crm.comms\_ai.enabled | CRM | false | Enable AI Comms Agent (requires AI agent ODD) |
| ops.orgcpu.enabled | Operations | false | Enable IoT OrgCPU device registration and telemetry |
| risk.board\_report\_ai.enabled | Risk | false | Enable AI-generated board report narrative (beta) |
| leg.contract\_ai.enabled | Legal | false | Enable AI-assisted contract drafting (beta) |
| sys.sdp\_public\_graph.enabled | OrgSystem | false | Enable SDO graph API access for all OrgExecs (default: admin only) |
| dao.dlt\_type | DAO | "fabric" | DLT type: fabric | ethereum\_l2 | none |
| mkt.ai\_content.enabled | Marketing | false | Enable AI content generation for campaigns |

## **I.3 Webhook Event Subscription Reference**

The following event types are available for outbound webhook subscription. Configure subscriptions through the OrgSystem module or via the /v3/sys/webhooks API.

| Category | Available Event Types |
| :---- | :---- |
| Finance | fin.invoice.created, fin.invoice.sent, fin.invoice.paid, fin.invoice.overdue, fin.invoice.cancelled, fin.je.posted, fin.payroll.processed, fin.period.closed, fin.period.opened, fin.bank.reconciled, fin.budget.variance\_breach |
| HR | hr.orgexec.onboarded, hr.orgexec.offboarded, hr.orgexec.role\_changed, hr.odd.published, hr.odd.approved, hr.leave.requested, hr.leave.approved, hr.leave.rejected, hr.payroll.payslip\_generated, hr.performance.review\_completed |
| Legal | leg.filing.due\_soon, leg.filing.overdue, leg.filing.completed, leg.contract.created, leg.contract.signed, leg.contract.expired, leg.compliance\_score.changed, leg.entity.created |
| CRM | crm.order.created, crm.order.started, crm.order.ready, crm.order.completed, crm.order.invoiced, crm.order.closed, crm.order.cancelled, crm.customer.created, crm.customer.updated |
| Operations | ops.inventory.low\_stock, ops.inventory.reorder\_triggered, ops.po.created, ops.po.approved, ops.po.received, ops.equipment.alert, ops.equipment.offline, ops.equipment.maintenance\_due |
| Risk | risk.item.created, risk.item.updated, risk.item.closed, risk.kri.warning, risk.kri.breach, risk.incident.created, risk.incident.closed, risk.grc.assessment\_completed |
| OrgSystem | sys.orgapp.installed, sys.orgapp.updated, sys.orgdna.updated, sys.odd.published, sys.odd.approved, sys.ai\_agent.deployed, sys.ai\_agent.escalation, sys.audit.security\_event |
| DAO | dao.proposal.submitted, dao.proposal.passed, dao.proposal.failed, dao.vote.cast, dao.royalty.collected, dao.royalty.distributed, dao.member.joined, dao.member.suspended |

| UME Platform Organisation Operating System Design & Architecture Document  ·  v3.0.0  ·  March 2026 https://ume.io  ·  docs.ume.io  ·  support@ume.io © 2026 UME Technologies Ltd. All rights reserved. Confidential and proprietary. |
| :---: |

