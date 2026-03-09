**UME**

Organisation / Business Operating System

**Product Requirements Document**

─────────────────────────────────────────

Document ID: UME-PROD-001  |  Version: 2.0.0

Status: Updated — OrgOS Factory Model  |  Date: March 2026

Scope: OrgOS Factory · 46 OrgApps · OrgExec/ODD · SDO · DAO · DLT · OrgDNA

# **Change History & Executive Summary**

| Version | Date | Summary |
| :---- | :---- | :---- |
| 1.0.0 | Mar 2026 | Baseline PRD: 42 modules, 18+ personas, kernel platform |
| 2.0.0 | Mar 2026 | OrgOS Factory model · OrgApps · OrgExec/ODD actor model · SDO Digital Twin · OrgDNA · DAO & DLT · 4 new OrgApps · updated personas |

| Updated Product Vision (v2.0.0) UME is the world's first Organisation Operating System Factory. It gives every organisation — from a solo entrepreneur to a global DAO — a complete, configurable OrgOS that models the entire organisation as a living digital twin (SDO), governs all actors (humans, AI, machines) through ODD contracts, and enables any group of organisations to cooperate autonomously as a DAO. One platform. Any organisation. Any scale. Any structure. |
| :---- |

## **v2.0.0 Strategic Objectives (New & Updated)**

| Objective | Measure | Horizon | Status |
| :---- | :---- | :---- | :---- |
| Establish OrgOS Factory model | UME positions as the standard for org OS production; \>500 OrgOS instances in first year | 12 months post-GA | New |
| Deploy OrgExec AI Agents at scale | AI agents active as OrgExecs in \>30% of deployed OrgOS instances | 18 months | New |
| Launch DAO framework | First production DAO (franchise network) live on UME DLT within 6 months of GA | 6 months post-GA | New |
| OrgDNA template marketplace | 50+ OrgDNA templates published; 5+ industry packs available | 24 months | New |
| Eliminate organisational fragmentation | \>80% of deployed orgs report UME as sole primary operational platform | 12 months | Carried over |
| Automate compliance globally | \<5% of UME-deployed orgs experience missed statutory deadline | 18 months | Carried over |
| Multi-entity financial management | Finance teams report consolidated group view in \<4 hours | 12 months | Carried over |
| Build the org intelligence layer | Executives use SDO dashboard as primary operational view | 24 months | Carried over |
| Open ecosystem | 50+ third-party custom OrgApps available in marketplace | 24 months | Carried over |

# **1\. Updated User Personas (v2.0.0)**

All 18+ personas from v1.0.0 remain valid. The following new personas are added in v2.0.0:

| Persona | Role Description | Primary OrgApps Used | Key Jobs-To-Be-Done |
| :---- | :---- | :---- | :---- |
| DAO Founder / Network Operator | Owner of the parent org who creates and governs a DAO of franchise or subsidiary organisations | DAO & DLT, OrgDNA Manager, SDO Engine, Finance | Form DAO; publish OrgDNA brand pack; monitor franchisee compliance; receive royalties automatically |
| Franchisee Operator | Owner/manager of an independent franchisee OrgOS instance operating under a DAO | All standard OrgApps; DAO governance portal | Run their org; receive OrgDNA updates; participate in governance votes; pay royalties automatically |
| AI Agent Manager | Technical/ops person responsible for deploying, governing, and monitoring AI OrgExecs | OrgExec & ODD Manager, Work, Operations, Analytics | Define AI agent ODDs; monitor agent performance; review escalations; tune agent constraints |
| OrgCPU / IoT Manager | Facilities/operations manager responsible for physical devices connected as OrgCPUs | OrgExec & ODD Manager (OrgCPU view), Operations, IT | Register devices; configure ODDs; monitor device health; respond to device alerts |
| Organisation Architect | Technical consultant who designs and configures OrgOS instances for client organisations | OrgDNA Manager, OrgApp Marketplace, Settings, SDO | Design optimal OrgApp configuration; create OrgDNA templates; onboard client to OrgOS |
| Digital Twin Analyst | Analyst who uses the SDO to model, simulate, and optimise the organisation | SDO Engine, Analytics, Risk, Finance | Run what-if simulations; identify bottlenecks; present optimisation recommendations to exec |

# **2\. New Feature Catalogue (v2.0.0 Additions)**

All features from v1.0.0 PRD remain in scope. The following new feature areas are added.

## **2.1 OrgOS Factory & Provisioning**

| Feature ID | Feature Name | User Story | Priority | Acceptance Criteria |
| :---- | :---- | :---- | :---- | :---- |
| F-OS-01 | OrgOS Template Gallery | As a new user, I want to choose from industry-specific OrgOS templates so that my org is pre-configured for my business type | P0 | Gallery shows ≥8 industry templates; selecting a template pre-populates module selection and COA; user can customise before launch |
| F-OS-02 | Module Configurator / OrgApp Installer | As a user, I want to turn OrgApps on/off and see dependencies so that I only pay for what I use | P0 | Dependency graph shown; pricing updates in real-time; conflicts flagged; boot proceeds only when all required apps selected |
| F-OS-03 | OrgOS Boot Sequence | As a user, I want to see my OrgOS provisioning in real time so that I know it was set up correctly | P0 | Step-by-step provisioning log shown; each step ticks off on completion; total time \<90 seconds |
| F-OS-04 | OrgOS Multi-Instance Management | As an enterprise admin, I want to manage multiple OrgOS instances from a single factory dashboard | P1 | Factory dashboard shows all managed OrgOS instances with health, version, and activity; bulk actions available |

## **2.2 OrgExec & ODD Management**

| Feature ID | Feature Name | User Story | Priority | Acceptance Criteria |
| :---- | :---- | :---- | :---- | :---- |
| F-ODD-01 | OrgExec Registry | As an admin, I want to see all OrgExecs (humans, AI, devices) in one list so that I have a complete picture of who is operating in my OrgOS | P0 | Registry shows all three OrgExec types; ODD version visible per record; status live-updated |
| F-ODD-02 | ODD Visual Editor | As an admin, I want to define an AI agent's capabilities and constraints without writing code so that I can govern it safely | P0 | Capabilities checklist; constraint builder with type selection; data access grant picker; test action validator |
| F-ODD-03 | AI Agent Deploy & Monitor | As an agent manager, I want to deploy an AI OrgExec and monitor its actions in real time | P0 | Deploy triggers ODD registration; action log shown in real-time; escalation alerts surface to manager |
| F-ODD-04 | OrgCPU Registration & ODD | As a facilities manager, I want to register IoT devices as OrgCPUs and configure their data reporting | P1 | OrgCPU onboarding wizard; ODD template for device type; live status in SDO topology |

## **2.3 SDO & Digital Twin**

| Feature ID | Feature Name | User Story | Priority | Acceptance Criteria |
| :---- | :---- | :---- | :---- | :---- |
| F-SDO-01 | SDO Executive View | As an executive, I want to see my entire organisation as a live topology diagram so that I can understand system health at a glance | P0 | All OrgApps, OrgExecs, and data flows shown; updates within 1 event lag; health indicators per node |
| F-SDO-02 | OrgSimulator | As a strategist, I want to run what-if scenarios against current org state so that I can make data-informed decisions | P1 | Scenario builder with at least 5 variables; simulation runs in \<30 seconds; output shows financial and risk impact |
| F-SDO-03 | SDO Health Score | As an exec, I want a single health score for my OrgOS so that I know when to investigate | P0 | Score 0–100 computed from KRI breaches, ODD violations, OrgApp errors, and compliance status; drill-down available |

## **2.4 OrgDNA**

| Feature ID | Feature Name | User Story | Priority | Acceptance Criteria |
| :---- | :---- | :---- | :---- | :---- |
| F-DNA-01 | OrgDNA Export | As an owner, I want to export my OrgOS configuration as an OrgDNA package so that I can clone or back it up | P0 | One-click export; downloadable TOML/JSON package; includes all config components; excludes transactional data by default |
| F-DNA-02 | OrgDNA Clone | As a franchising owner, I want to clone my OrgOS config to bootstrap new franchisee orgs | P0 | Clone wizard: new org name, jurisdiction adjustments; provisions new OrgOS with cloned OrgDNA in \<5 minutes |
| F-DNA-03 | OrgDNA Marketplace | As a consultant, I want to publish a well-configured OrgOS as a reusable template for others | P1 | Submit flow; review process; public listing with description, industry tag, and star ratings |
| F-DNA-04 | OrgDNA Version History | As an admin, I want to see the full history of my OrgDNA versions and roll back if needed | P1 | Version list with author, date, and change summary; diff viewer; one-click rollback with confirmation |

## **2.5 DAO & Distributed Ledger**

| Feature ID | Feature Name | User Story | Priority | Acceptance Criteria |
| :---- | :---- | :---- | :---- | :---- |
| F-DAO-01 | DAO Formation Wizard | As a franchise owner, I want to form a DAO with my franchisees so that we operate under shared automated governance | P0 | Wizard: DAO name, governance model, initial smart contract terms, member invitations; deploys in \<10 minutes |
| F-DAO-02 | Smart Contract Builder | As a DAO founder, I want to define royalty and brand standard terms without coding so that the agreements execute automatically | P0 | Visual term builder; at least 3 contract types (royalty, brand standards, governance vote); preview legal text; deploy to DLT |
| F-DAO-03 | DLT Ledger Viewer | As a DAO member, I want to see all inter-organisation transactions so that I can verify the distributed ledger | P0 | All transaction types shown; hash verification available per block; filter by type, org, and date |
| F-DAO-04 | OrgDNA Broadcast & Sync | As a parent org, I want to push OrgDNA updates to all franchisees so that brand standards are maintained | P1 | Broadcast to all/selected members; mandatory or optional flag; acceptance tracking; compliance report per member |
| F-DAO-05 | Governance Portal | As a DAO member, I want to submit and vote on proposals so that we govern the DAO collectively | P1 | Proposal submission; voting period with countdown; quorum indicator; automatic execution on approval |

# **3\. Updated Non-Functional Requirements (v2.0.0)**

| NFR Category | Requirement | Target | Notes |
| :---- | :---- | :---- | :---- |
| ODD Enforcement Latency | validate\_action() must complete before every OrgExec operation | p99 \< 5ms | In-memory ODD evaluation; no DB calls in hot path |
| SDO Update Lag | Digital twin must reflect any OrgApp event within one event propagation cycle | \< 500ms p95 | SDOEngine is async event subscriber; no polling |
| OrgOS Provisioning Time | New OrgOS instance provisioned from OrgDNA template | \< 90 seconds | Parallel OrgApp boot; pre-seeded infrastructure |
| DLT Consensus Latency | Inter-org transaction confirmed on DLT | \< 5 seconds for \<20 DAO members | PBFT consensus; optimistic for permissioned networks |
| OrgDNA Export Size | Maximum serialised OrgDNA package size | \< 10 MB | Transactional data excluded; only config and templates |
| DAO Member Count | Maximum DAO members supported per DLT network | Up to 100 members at launch | PBFT performance validated up to 100 nodes |
| AI Agent Throughput | Max OrgExec actions per second per AI agent | 200 actions/sec (configurable per ODD) | Burst rate limited in ODD constraint; ODDBus rate limiter |
| OrgCPU Message Rate | Max IoT OrgCPU readings per second per OrgOS | 10,000 readings/sec | Batched ingestion; async SDO update; dedicated org.iot executor |

# **4\. Updated Release Plan (v2.0.0)**

| Milestone | Target | Key Deliverables | New in v2.0.0 |
| :---- | :---- | :---- | :---- |
| M1 — OrgOS Foundation | Month 1–3 | OrgOS provisioner, OrgApp installer, template gallery, OrgKernel v2, boot sequence | OrgOS factory model, OrgApp trait, template gallery |
| M2 — Actor Model | Month 2–4 | OrgExec registry, ODD subsystem, AI agent OrgExec support, ODD visual editor | Full ODD subsystem, AI agent deploy |
| M3 — Digital Twin | Month 3–5 | SDO engine, topology dashboard, SDO health score, OrgSimulator v1 | SDO engine, OrgSimulator |
| M4 — OrgDNA | Month 4–6 | OrgDNA export/import, clone wizard, version history, marketplace submission | Full OrgDNA system |
| M5 — DAO & DLT | Month 5–9 | DAO formation, DLT node, smart contract builder, governance portal, OrgDNA broadcast | Full DAO/DLT module |
| M6 — GA \+ Ecosystem | Month 9–12 | OrgApp marketplace launch, SDK v2 with ODD, DAO scaling to 100 members, enterprise plans | Marketplace with ODD standard |

# **Appendix: New Concept Reference**

## **New Concepts & Terminology (v2.0.0)**

The following new concepts were introduced in v2.0.0 of the UME platform. All prior documents that reference "UME platform", "kernel", "modules", and "device drivers" should be read in conjunction with these updated definitions.

| Term | Symbol | Definition |
| :---- | :---- | :---- |
| OrgOS | OrgOS | A configured, running Organisation Operating System produced by the UME platform. Every organisation provisioned on UME receives a dedicated OrgOS instance, which is the combination of an OrgKernel and its set of active OrgApps. |
| OrgOS Factory | UME Platform | The UME platform itself is the factory that produces, configures, deploys, and maintains OrgOS instances. UME is a meta-operating-system: an operating system that creates and manages operating systems. |
| OrgKernel | OrgKernel | The running instance of the UME kernel for a specific organisation. The OrgKernel is the composition root, resource manager, and supervisor for all OrgApps within a single organisation's OrgOS. |
| OrgApp | OrgApp | A modular application running within an OrgOS, implementing a specific organisational capability (Finance, HR, Legal, etc.). Previously called "organisation modules". OrgApps are the user-facing applications that manage and run the organisation. |
| OrgExec | OrgExec | An executor of work within an OrgOS: a human employee, AI agent, hybrid human-AI system, or any autonomous actor that receives tasks and executes them on behalf of the organisation. OrgExecs are governed by ODD contracts. |
| OrgCPU | OrgCPU | A digital-only executor within an OrgOS: machines, IoT devices, sensors, 3rd-party platforms, manufacturing equipment, POS terminals, and any non-human device that executes work. OrgCPUs are governed by ODD device driver contracts. |
| ODD | OrgDeviceDriver (ODD) | A formal contract that defines how a specific OrgExec or OrgCPU operates within the OrgOS. Specifies capabilities (what it can do), constraints (what it must not do), data access rights, rate limits, escalation triggers, and audit requirements. ODDs are the primary mechanism for governing all actors in an OrgOS. |
| OrgDNA | OrgDNA | The exportable, versionable master configuration package of a fully configured OrgOS. OrgDNA captures the OrgKernel config, all active OrgApps and their settings, ODD templates, RBAC policies, chart of accounts, KPIs, and jurisdiction compliance packs. OrgDNA can be cloned, forked, shared with franchisees, or published as a template. |
| SDO | Software Defined Organisation (SDO) | The digital twin of a physical organisation. An SDO is the complete runtime representation of an organisation within the UME platform — all running OrgApps, all OrgExecs, all OrgCPUs, all data flows, and all organisational state. Users operate at the SDO layer; the physical organisation is realised through the digital twin. |
| OrgRuntime | Organisation Runtime | The live execution of an OrgOS: the combination of the OrgKernel, all running OrgApps, all active OrgExecs, all connected OrgCPUs, and all live organisational data. The OrgRuntime realises organisation outcomes in real time. |
| OrgMemory | OrgMemory / DLT | The persistent, immutable record of all significant organisational events and inter-organisation transactions. Within a single OrgOS, OrgMemory is maintained by the OrgKernel audit chain. Across multiple OrgOS instances (DAO), OrgMemory is a Distributed Ledger (DLT) shared among all member organisations. |
| DAO | Decentralised Autonomous Organisation (DAO) | A set of interconnected, independent OrgOS instances that cooperate under a shared governance model. DAOs are formed through the UME DAO module, which provides smart contract governance, distributed ledger infrastructure, shared OrgDNA versioning, and inter-organisation event routing. |
| DLT | Distributed Ledger Technology (DLT) | The inter-organisation ledger that records all cross-OrgOS transactions, smart contract executions, OrgDNA updates, and governance votes for a DAO. The DLT is the shared OrgMemory of a DAO — immutable, cryptographically verified, and replicated across all member OrgOS nodes. |
| Smart Contract | Smart Contract | An automatically executable agreement between two or more OrgOS instances within a DAO, stored on the DLT. Smart contracts govern resource transfers (royalties, payments), brand standards enforcement, governance decisions, and any other inter-organisation obligation. |
| OrgExec Type | OrgExec Classification | Human (natural persons employed/contracted), AI Agent (LLM-powered or rule-based autonomous agent), Hybrid (human-AI collaboration system), or Physical Agent (OrgCPU: device/machine/sensor). |

