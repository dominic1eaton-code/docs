

**QALA**

**Universal Solution Management Operating System**

*Platform Requirements Document  |  v2.0  |  Universal Edition*

| Field | Value |
| :---- | :---- |
| Document Type | Platform Requirements Document — Universal Edition v2.0 |
| System | Qala Universal Solution Management OS |
| Requirement Framework | MoSCoW (Must / Should / Could / Won't) |
| Status | Draft — For Review |
| Scope | All ten capability pillars × all solution types × all industry domains |
| Solution Types | Application, System, Platform, API, Tool, Toolchain, SDK, Library, Package, Good, CPG, Capital Good, Product, Product Line, Service, Managed Service, Consulting Service, Financial Instrument, Investment Solution, Capital Solution, Tax Solution, Agricultural Solution, Business Solution, Process Solution, Research Asset, Resource, Asset, Template, Framework, and all generic/industry variants |
| Capability Pillars | Solution Management \+ Development Environment \+ Configuration Management \+ Change Management \+ Quality Management \+ Testing Environment \+ Release Management \+ Distribution Management \+ Governance \+ AI & Intelligence |
| Traceability | Requirements trace to SDD v2.0 | PRD v2.0 | RFC v2.0 | Workflows & Use Cases v1.0 |
| Audience | Engineering, Architecture, Product, QA, Security, Compliance, Domain Experts — All Industries |

# **1  Introduction**

*This document defines the complete set of functional and non-functional requirements for the Qala Universal Solution Management Operating System. It covers all ten capability pillars, all solution type categories, and all identified industry domains. Requirements follow MoSCoW prioritisation.*

Qala is not a developer tool, a PLM system, or a compliance platform. It is the operating system for solution factories of every kind. These requirements define what that OS must provide — across software, physical goods, financial instruments, agricultural systems, professional services, research assets, and every other form of organised value creation.

| Priority Key (MoSCoW) M — Must Have   S — Should Have   C — Could Have   W — Won't Have (this release) |
| :---- |

Requirement IDs: \[Pillar\]-\[Domain\]-\[Sequence\]. Example: FR-SDE-SW-001 (Functional Requirement, SDE pillar, Software domain). Universal requirements applicable to all solution types use domain code UNI.

# **2  Solution Management Requirements**

*Requirements for the universal solution type system, solution record lifecycle, and cross-type relationship management.*

## **2.1  Universal Solution Type System**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-SM-UNI-001 | M | The platform shall support a universal solution type taxonomy organised into ten categories: Software, Tooling, Physical Goods, Services, Financial, Agricultural, Business, Research, Resources, and Platform/Ecosystem. |
| FR-SM-UNI-002 | M | Within each category, the platform shall support at least the following named solution types — Software: Application, System, Platform, API, Microservice, Firmware; Tooling: Tool, Toolchain, SDK, Library, Package, Framework; Physical Goods: Good, CPG, Capital Good, Product, Product Line, Hardware, Component; Services: Service, Managed Service, Professional Service, Consulting Service, Subscription Service; Financial: Financial Instrument, Investment Solution, Capital Solution, Insurance Product, Tax Solution; Agricultural: Agricultural Solution, Crop Management System, Livestock System, Supply Chain Platform; Business: Business Solution, Process Solution, Operational Solution, Workflow Solution; Research: Research Asset, Dataset, Experimental Framework, Computational Model; Resources: Resource, Asset, Template, Standard, Reference Architecture; Platforms: Platform, Marketplace, Ecosystem, Multi-Sided Network. |
| FR-SM-UNI-003 | M | Every solution, regardless of type, shall share a universal attribute set: unique ID, name, type, subtype, owner, organisation, semantic version, version history, lifecycle state, provenance record, artefact manifest, quality record references, relationship graph, and compliance status. |
| FR-SM-UNI-004 | M | Every solution type shall be governed by a type-specific lifecycle state machine with platform-enforced valid state transitions. Invalid transitions shall be rejected with a descriptive error. |
| FR-SM-UNI-005 | M | Solution types shall support subtypes defined by Domain Packs. A Domain Pack subtype inherits all universal attributes and lifecycle states from its parent type and adds domain-specific attributes. |
| FR-SM-UNI-006 | M | Cross-type solution relationships shall be supported: dependency, composition, parent-child, and association. All relationships shall be versioned and queryable. |
| FR-SM-UNI-007 | M | Product Line and Solution Family shall be supported as first-class solution types: managed entities that contain member solutions, with governed membership, shared change impact propagation, and family-level quality benchmarking. |
| FR-SM-UNI-008 | S | The platform shall provide a solution graph visualisation showing the full relationship network of any solution, including cross-type relationships. |
| FR-SM-UNI-009 | S | The platform shall support solution search across all types using: name, type, owner, state, version, domain metadata, and AI-semantic similarity. |
| FR-SM-UNI-010 | C | The platform shall support user-defined custom solution types via a governed type extension workflow requiring Platform Admin approval. |

## **2.2  Solution Factory**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-SF-UNI-001 | M | The platform shall allow Platform Admins to create Solution Factories grouping any combination of SDEs, regardless of solution type, under shared governance. |
| FR-SF-UNI-002 | M | A Solution Factory shall enforce platform-wide policies against all enrolled SDEs: security policies, toolchain standards, quality baselines, and compliance frameworks. |
| FR-SF-UNI-003 | M | The Solution Factory shall provide a unified operational view across all enrolled SDEs regardless of solution type: aggregate event stream, health status, quality dashboard, and shared artefact registry. |
| FR-SF-UNI-004 | S | Factory-level analytics shall compare quality, performance, and process metrics across all enrolled SDEs, normalised by solution type category for meaningful cross-type benchmarking. |
| FR-SF-UNI-005 | S | A Solution Factory shall support cross-SDE solution dependency declarations with automated impact assessment when a dependency changes. |
| FR-SF-UNI-006 | C | The platform shall support hierarchical factory structures where one factory can be a member of a higher-level factory, enabling enterprise portfolio governance. |

# **3  Development Environment (SDE) Requirements**

*Requirements for Solution Development Environments across all solution types and deployment targets.*

## **3.1  Universal SDE Provisioning**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-SDE-UNI-001 | M | The platform shall provision SDEs for all supported solution type categories: Software, Lab/Formulation, Financial Research, Edge/IoT, Knowledge/Service, Research/Academic, and Business/Process. |
| FR-SDE-UNI-002 | M | Every SDE, regardless of type, shall be provisioned from a version-controlled, approved environment definition. No SDE shall be created from an ad-hoc or undocumented configuration. |
| FR-SDE-UNI-003 | M | Software SDEs shall provision within 10 minutes using OCI container orchestration. Non-software SDEs (lab, research, financial) shall provision within 30 minutes. |
| FR-SDE-UNI-004 | M | Every SDE shall support the following lifecycle states: Provisioning, Active, Snapshotted, Suspended, Rolled Back, Quarantined, Archived, and Decommissioned. |
| FR-SDE-UNI-005 | M | Every SDE shall support point-in-time snapshots capturing: environment state, configuration version, tool manifest, active solution associations, and a SHA-256 integrity digest. |
| FR-SDE-UNI-006 | M | Every SDE shall support rollback to any stored snapshot. Rollback shall complete within 10 minutes for all SDE types. |
| FR-SDE-SW-001 | M | Software SDEs shall enforce hermetic builds: fully isolated containers with no ambient credentials, digest-pinned dependencies, and reproducible outputs from identical inputs. |
| FR-SDE-LAB-001 | S | Lab and Formulation SDEs shall support integration with commercially licensed simulation and formulation tools via approved licence management connectors. |
| FR-SDE-FIN-001 | S | Financial Research SDEs shall support large dataset access (minimum 1TB attached storage), GPU compute attachment, and quantitative modelling library pre-installation (Python, R, Julia ecosystems). |
| FR-SDE-EDGE-001 | S | Edge and IoT SDEs shall support Nix-based environment definitions for offline-capable, resource-constrained deployments with pre-populated dependency caches. |
| FR-SDE-UNI-007 | S | Platform Admins shall be able to define SDE templates per solution type. New SDEs may be provisioned directly from any approved template. |
| FR-SDE-UNI-008 | C | Ephemeral SDEs shall be supported with configurable TTLs, automatically deprovisioned on expiry. |

## **3.2  SDE Governance**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-SDE-UNI-009 | M | Every SDE shall have a designated owner. Ownership transfers shall be recorded in the immutable audit trail. |
| FR-SDE-UNI-010 | M | All SDE configuration changes shall generate a change record capturing: actor, timestamp, change type, before state, after state. |
| FR-SDE-UNI-011 | M | Platform security and compliance policies shall be continuously evaluated against all Active SDEs. Policy violations shall generate an alert and a remediation checklist within 15 minutes. |
| FR-SDE-UNI-012 | M | SDE backup and recovery shall be supported: scheduled full and incremental backups, encrypted at rest, with digest verification before any restore. Backup success rate target: 99.9%. |
| FR-SDE-UNI-013 | S | The AI Agent shall analyse SDE configuration and usage patterns and recommend optimisations within 30 minutes of a triggering event. |

# **4  Configuration Management Requirements**

*Requirements governing all configuration across all solution types — environment configuration, solution parameters, tool versions, and infrastructure definitions.*

## **4.1  Universal Configuration Versioning**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-CM-UNI-001 | M | All configuration artefacts for all solution types shall be stored in version control: environment definitions, solution parameters, tool manifests, security policies, compliance framework mappings, and infrastructure specifications. |
| FR-CM-UNI-002 | M | Configuration versioning shall apply to domain-specific configuration types: software feature flags and env vars; formulation parameters and ingredient specifications; financial model parameters and pricing rules; agricultural sensor calibrations and agronomic rule sets; service SLA definitions; tax rule sets and jurisdiction variants. |
| FR-CM-UNI-003 | M | Every configuration change shall produce a new configuration version with: version ID, author, timestamp, change description, before value, and after value. |
| FR-CM-UNI-004 | M | Rollback to any prior configuration version shall be supported for all versioned configuration types. |
| FR-CM-UNI-005 | M | The platform shall continuously monitor all Active SDEs and deployed solutions for configuration drift. Any drift shall generate an alert within 15 minutes of detection. |
| FR-CM-UNI-006 | M | Detected drift shall be resolved by either remediation (revert to versioned definition) or formalisation (raise a CCR to make the drift the new definition). |
| FR-CM-UNI-007 | S | Configuration diff tooling shall provide human-readable comparison between any two configuration versions for all configuration types, including domain-specific types. |
| FR-CM-UNI-008 | C | The AI Agent shall predict configuration drift risk based on patterns from historical drift detection events and alert before drift occurs. |

## **4.2  Change Control (CCR / CCB) — Universal**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-CCR-UNI-001 | M | The platform shall enforce a Change Control Request (CCR) workflow for all changes to: SDE configuration, solution parameters (all types), security policies, compliance framework mappings, tool versions, infrastructure definitions, and domain-specific configuration (formulations, financial model parameters, tax rule sets, agronomic rule sets, service SLA terms). |
| FR-CCR-UNI-002 | M | Every CCR shall capture: ID, title, requester, change type, solution type context, affected solution IDs, risk score, justification, implementation plan, rollback plan, regulatory implications (if any), and approval status. |
| FR-CCR-UNI-003 | M | The platform shall compute a risk score for every CCR based on: change type weight, solution type risk profile, affected solution count, historical change failure rate, and domain-specific risk factors (e.g. pharmaceutical ingredient changes are inherently high-risk). |
| FR-CCR-UNI-004 | M | CCR routing shall be configurable per solution type: low-risk CCRs may be approved by a single approver; high-risk CCRs shall be routed to the Change Control Board (CCB). Domain Packs shall define the routing rules for their solution types. |
| FR-CCR-UNI-005 | M | Multi-stage sequential approval shall be supported for domain-specific CCR workflows (e.g. Pharmaceutical: Scientific Committee \> Regulatory Affairs \> Legal \> Executive; Financial: Quant \> Risk \> Compliance \> Management Committee). |
| FR-CCR-UNI-006 | M | An Emergency Change process shall be supported for all solution types: single emergency approver, implementation logging, and mandatory post-implementation review within 24 hours. |
| FR-CCR-UNI-007 | M | All CCR state transitions shall be published as CHANGE\_EVENTS and immutably recorded in the audit trail. |
| FR-CCR-UNI-008 | S | For regulated solution types (pharmaceutical, financial, tax), the CCR workflow shall support embedded regulatory obligation steps: FDA notification attachment for pharma, MiFID II governance documentation for financial products, jurisdiction-specific effective date scheduling for tax solutions. |
| FR-CCR-UNI-009 | S | The platform shall compute cascade impact: when a CCR proposes a change to a component shared by a Product Line or Solution Family, it shall automatically identify and surface all affected member solutions. |
| FR-CCR-UNI-010 | C | The AI Agent shall predict the risk score of a CCR from its description and historical change data, surfacing the prediction before the requester submits the CCR. |

# **5  Quality Management Requirements**

*Universal quality management across all solution types: test management, defect tracking, quality gates, and benchmarking.*

## **5.1  Universal Test Management**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-TEST-UNI-001 | M | The platform shall provide a Test Management Service supporting test case creation, test plan definition, test suite organisation, test run execution, and result recording for all solution types. |
| FR-TEST-UNI-002 | M | Test cases shall support the following universal types: Validation (does the solution meet its specification?), Verification (was the solution built correctly?), Compliance (does the solution meet regulatory requirements?), Performance (does the solution meet performance targets?), and Regression (does this version maintain previous quality?). |
| FR-TEST-UNI-003 | M | Domain-specific test types shall be supported via Domain Packs: Software (Unit, Integration, System, Security, Acceptance); Physical Goods (Batch Quality, Stability, Regulatory, Environmental); Financial (Backtesting, Stress Test, Model Validation); Agricultural (Field Trial, Efficacy Study, Environmental Safety); Research (Replication, Statistical Validation, Peer Review). |
| FR-TEST-UNI-004 | M | Test results shall be published as QUALITY\_EVENTS linked to: solution version, test environment version, test case version, tester identity, and timestamp. |
| FR-TEST-UNI-005 | M | Failed test cases shall automatically create or update linked defect records, regardless of solution type. |
| FR-TEST-UNI-006 | S | For physical goods and research solutions, a Quality Event Ingestion API shall accept test results from external systems (LIMS, lab instruments, field trial management tools) and integrate them into the platform quality record. |
| FR-TEST-UNI-007 | S | The AI Agent shall generate test cases targeting changed areas of any solution and present them to reviewers. AI-accepted test cases shall be added to the active test suite. |
| FR-TEST-UNI-008 | S | Flaky test detection shall apply to all automated test types: tests that non-deterministically pass or fail shall be flagged and routed to a dedicated review queue. |
| FR-TEST-UNI-009 | C | The AI Agent shall prioritise test execution order based on risk score and historical failure rate for a given change set. |

## **5.2  Universal Defect Management**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-BUG-UNI-001 | M | The platform shall provide a defect tracking system for all solution types, supporting: creation, triage, assignment, resolution, verification, and closure. |
| FR-BUG-UNI-002 | M | Every defect record shall capture: ID, title, severity (Critical/High/Medium/Low), priority (P1–P4), status, solution type, solution version, reporter, assignee, detection phase, and linked test cases. |
| FR-BUG-UNI-003 | M | Defect records shall be auto-created from: failed automated tests, security scan findings, production monitoring alerts, and quality event failures for all solution types. |
| FR-BUG-UNI-004 | M | Critical or High severity defects shall block release promotion for all solution types unless a documented risk acceptance sign-off is recorded. |
| FR-BUG-UNI-005 | M | Domain-specific defect types shall be supported via Domain Packs: software security vulnerabilities; pharmaceutical non-conformances; financial model errors; agricultural crop failures; research reproducibility failures. |
| FR-BUG-UNI-006 | S | The AI Agent shall analyse new defect reports against historical patterns and suggest likely root cause, similar past defects, and relevant test cases. |
| FR-BUG-UNI-007 | S | Defect density and MTTR metrics shall be computed per solution, per solution type category, and across the platform for benchmarking. |

## **5.3  Quality Gates (Universal)**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-QG-UNI-001 | M | Quality gates shall be configurable per solution type. Platform defaults shall provide appropriate gate sets per solution category. Domain Packs shall define domain-specific gate types. |
| FR-QG-UNI-002 | M | Universal quality gates (applicable to all solution types): Defect Gate (no Critical/High open defects), Compliance Gate (all applicable compliance checks pass), Approval Gate (required approvers have signed off). |
| FR-QG-UNI-003 | M | Software-specific quality gates: Test Coverage Gate, SAST Gate, SCA Gate, Performance Gate, Attestation Gate. |
| FR-QG-UNI-004 | M | Physical Goods gates: Quality Test Gate (batch quality vs. specification), Regulatory Gate (required regulatory approvals obtained), Stability Gate (stability study completed), Specification Conformance Gate. |
| FR-QG-UNI-005 | M | Financial Solutions gates: Risk Model Validation Gate, Compliance Documentation Gate (MiFID II / SEC), Legal Review Gate, Effective Date Gate. |
| FR-QG-UNI-006 | M | Agricultural Solutions gates: Field Trial Gate, Regulatory Clearance Gate (EPA/EFSA), Seasonal Timing Gate. |
| FR-QG-UNI-007 | M | Research Assets gates: Reproducibility Gate, Statistical Significance Gate, Peer Review Gate, IRB Approval Gate (where applicable). |
| FR-QG-UNI-008 | S | Quality gate results shall be published as QUALITY\_EVENTS and linked to the release record that triggered the evaluation. |

# **6  Testing Environment Requirements**

*Requirements for isolated, governed environments in which solutions are validated before release.*

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-TENV-UNI-001 | M | The platform shall provision testing environments for all solution type categories, equivalent in scope to the target production environment of the solution being tested. |
| FR-TENV-UNI-002 | M | All testing environments shall be provisioned from version-controlled, approved environment definitions. |
| FR-TENV-UNI-003 | M | Ephemeral testing environments shall be automatically provisioned on test run trigger and automatically deprovisioned on test completion unless explicitly retained. |
| FR-TENV-UNI-004 | M | Testing environments shall be isolated from production systems and data. PII and sensitive data shall be masked or synthesised in all testing environments. |
| FR-TENV-SW-001 | M | Software testing environments shall support: unit test runners, integration test environments, system test environments, performance test environments, and security test environments. |
| FR-TENV-GOOD-001 | M | Physical Goods testing environments shall support: formulation simulation environments, specification validation pipelines, and regulatory pre-submission check environments. |
| FR-TENV-FIN-001 | M | Financial Solutions testing environments shall support: model backtesting sandboxes with market data replay, paper trading environments for algorithm validation, and stress test environments. |
| FR-TENV-AGRI-001 | S | Agricultural testing environments shall support: IoT device simulation, agronomic model validation environments, and field trial data simulation. |
| FR-TENV-UNI-005 | S | Testing environment provisioning time shall not exceed: 2 minutes for software environments; 10 minutes for financial research environments; 15 minutes for formulation and lab environments. |
| FR-TENV-UNI-006 | S | All testing environment configurations shall be snapshotable; test results shall be traceable to the exact environment configuration in which they were obtained. |
| FR-TENV-UNI-007 | S | A Prototyping Environment type shall be available for all solution categories: time-bounded, resource-capped, isolated, with outcome capture linked to the solution record. |

# **7  Release Management Requirements**

*Requirements for governed promotion of any solution version from development through quality gates to distribution.*

## **7.1  Universal Release Record**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-REL-UNI-001 | M | The platform shall support a Release Record for any solution type containing: release ID, solution ID, solution type, version, release type, target channel, gate checklist, linked artefacts, linked CCRs, linked defect fixes, and approval records. |
| FR-REL-UNI-002 | M | All artefacts linked to a release shall carry valid attestations before gate evaluation. Attestation requirements are type-specific (SLSA attestation for software; specification-to-batch linkage for physical goods; model provenance attestation for financial models). |
| FR-REL-UNI-003 | M | Release gates shall be configurable per solution type. Universal mandatory gates for all types: Defect Gate, Compliance Gate, Approval Gate. Solution-type-specific mandatory gates are defined in Domain Packs. |
| FR-REL-UNI-004 | M | Any failed mandatory gate shall block distribution and publish a RELEASE\_EVENT (GATE\_FAILED) to all stakeholders. |
| FR-REL-UNI-005 | M | Effective-date-gated releases shall be supported: a release that completes all gates but activates only at a scheduled future timestamp. This is mandatory for Tax Solutions and any solution governed by legislative effective dates. |
| FR-REL-UNI-006 | S | Release notes shall be auto-generated for all solution types, drawing on: merged CCRs, resolved defects, quality gate results, and AI-generated change summary. |
| FR-REL-UNI-007 | S | A release approval workflow shall support: named approver list, role-based quorum, sequential approval stages, and domain-specific approval committee configuration. |

## **7.2  Software Deployment Strategies**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-DEP-SW-001 | M | The platform shall support Blue/Green deployment: two environments maintained, traffic switched atomically on approval, instant rollback by reversing the switch. |
| FR-DEP-SW-002 | M | The platform shall support Canary deployment: configurable initial traffic percentage, auto-increment on health threshold, auto-rollback on metric breach. |
| FR-DEP-SW-003 | M | The platform shall support Rolling deployment: configurable batch size, health check interval, and automatic pause on failure threshold. |
| FR-DEP-SW-004 | M | The platform shall support Feature Flag deployment: code deployed dark, activated via configuration without redeployment. |
| FR-DEP-SW-005 | M | Rollback shall be executable within 5 minutes of identifying a production issue for all software deployment strategies. |

## **7.3  Non-Software Release Patterns**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-REL-GOOD-001 | M | Physical Goods releases shall support a batch release pattern: a specific production batch is linked to an approved specification version and released with: batch ID, specification version, quality test results, regulatory clearance status, and distribution manifest. |
| FR-REL-GOOD-002 | M | The platform shall support Recall as a first-class workflow for physical goods: batch identification, affected party notification (retailer/consumer), regulatory body notification (FDA, EFSA, country-specific), and recall completion tracking. |
| FR-REL-FIN-001 | M | Financial Solutions releases shall support instrument inception, mandate activation, model go-live, and fund launch as named release types with type-specific gate sets. |
| FR-REL-FIN-002 | M | Financial product suspension (the financial equivalent of software rollback) shall be executable with investor notification, redemption window activation, and regulatory reporting. |
| FR-REL-TAX-001 | M | Tax Solution releases shall support effective-date deployment: all gates pass, release is held until the legislative effective date, then activated automatically. Manual override with audit record shall be supported. |
| FR-REL-SVC-001 | S | Service catalogue publication shall be a supported release type for Service solutions: governed content review, legal sign-off gate, and versioned catalogue distribution. |
| FR-REL-RES-001 | S | Research Asset publication releases shall support: peer review gate, data repository submission, DOI assignment linkage, and publication provenance record. |

# **8  Distribution Management Requirements**

*Requirements for the controlled delivery of released solutions to their target channels, consumers, and environments.*

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-DIST-UNI-001 | M | The platform shall maintain a Distribution Record for every distribution event of every solution type: distribution ID, solution ID, version, release ID, channel type, recipient, distribution timestamp, and integrity verification. |
| FR-DIST-UNI-002 | M | All distribution events shall be published as DISTRIBUTION\_EVENTS to the platform event bus. |
| FR-DIST-SW-001 | M | Software distribution channels shall include: cloud deployment (Kubernetes/ECS/VMs), container registry, package registry (npm, Maven, PyPI, Cargo, etc.), and API gateway publishing. |
| FR-DIST-GOOD-001 | M | Physical Goods distribution records shall capture: batch ID, retail channel, distribution centre, dispatch date, quantity, and cold chain event references (where applicable). |
| FR-DIST-GOOD-002 | M | GS1 EPCIS event format shall be supported for physical goods distribution events to enable interoperability with retail and logistics supply chain systems. |
| FR-DIST-FIN-001 | M | Financial Instrument distribution records shall capture: instrument ID, investor/counterparty, distribution channel (exchange, OTC, fund platform), notional, and regulatory notification reference. |
| FR-DIST-TAX-001 | M | Tax Solution distribution shall support: software update channel, API version activation, and effective-date-based rule set activation across all subscribed jurisdictions. |
| FR-DIST-AGRI-001 | S | Agricultural Solution distribution shall support: farm deployment records, IoT device OTA update records with device ID and firmware version, and seasonal activation events. |
| FR-DIST-UNI-003 | S | The platform shall support distribution suspension: an active distribution can be suspended across all channels with a documented reason and re-activation workflow. |
| FR-DIST-UNI-004 | S | Distribution analytics shall provide: channel reach, consumer adoption rates, version distribution across consumers, and distribution event audit trail. |
| FR-DIST-UNI-005 | C | Consumer notification pipeline shall be available for breaking changes: when a solution releases a breaking change, all registered consumers are notified with the change summary, migration guide, and support window. |

# **9  Governance Infrastructure Requirements**

*Requirements for audit trails, policy enforcement, compliance reporting, RBAC, and identity across all domains.*

## **9.1  Immutable Audit Trail**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-AUD-UNI-001 | M | The platform shall maintain an immutable, append-only audit trail recording every state-modifying action across all solution types: actor, timestamp, action, resource type, resource ID, before state, after state, result, and IP address. |
| FR-AUD-UNI-002 | M | The audit trail shall be cryptographically hash-chained (each record references the hash of the previous record) to ensure tamper-evidence. |
| FR-AUD-UNI-003 | M | Audit records shall be retained for the configured period per solution type: minimum 7 years for regulated solution types (pharma, financial, tax, legal, government); minimum 2 years for all other types. |
| FR-AUD-UNI-004 | M | Audit records shall be queryable by: actor, resource type, action type, solution type, time range, and outcome. Query results shall be exportable for regulatory submission. |
| FR-AUD-UNI-005 | M | No modification or deletion of audit records shall be permitted under any circumstance including Platform Admin access. |
| FR-AUD-UNI-006 | S | Audit records shall be stored in a dedicated audit store separate from the operational database, with independent access control and independent backup. |

## **9.2  Policy Enforcement**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-POL-UNI-001 | M | Platform-wide policies shall be continuously evaluated against all Active SDEs and deployed solutions: security policies, data classification policies, compliance baseline policies, and toolchain governance policies. |
| FR-POL-UNI-002 | M | Domain-specific policy sets shall be configurable via Domain Packs: GMP policies for pharmaceutical solutions, model governance policies for financial solutions, data sovereignty policies for regulated data, sustainability policies for agricultural solutions. |
| FR-POL-UNI-003 | M | Policy violations shall generate an alert and a remediation checklist for the SDE owner and Platform Admin within 15 minutes. |
| FR-POL-UNI-004 | S | Policy definitions shall be version-controlled and require CCR approval before activation. |
| FR-POL-UNI-005 | S | Policy compliance scores shall be computed per SDE and per Solution Factory and surfaced on the governance dashboard. |

## **9.3  Universal Compliance Reporting**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-COMP-UNI-001 | M | The platform shall support modular compliance framework adapters. Each adapter maps platform events and records to the specific control evidence requirements of a regulatory framework. |
| FR-COMP-UNI-002 | M | At minimum, the following compliance frameworks shall be supported in v1: SOC 2 Type II, ISO 27001, GDPR, CCPA, SLSA Level 1–3. |
| FR-COMP-UNI-003 | S | The following additional frameworks shall be supported in subsequent releases: FDA GMP/cGMP, FDA 21 CFR Part 11, REACH, MiFID II, Basel III, Solvency II, FedRAMP, IFRS 9, HIPAA. |
| FR-COMP-UNI-004 | M | Compliance reports shall be auto-generated from platform records on demand. Manual evidence upload shall be supported for compliance controls that cannot be automated. |
| FR-COMP-UNI-005 | M | Compliance posture (current compliance status per framework per solution) shall be visible in real time on the governance dashboard. |
| FR-COMP-UNI-006 | S | A Regulator Access role shall be supported: time-limited, read-only access to a scoped set of governance and audit records, with the access session itself fully audited. |

## **9.4  Identity, RBAC and Access**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-IAM-UNI-001 | M | Role-Based Access Control (RBAC) shall govern all platform resource access. Roles shall be assignable at platform, factory, SDE, and solution levels. |
| FR-IAM-UNI-002 | M | Universal platform roles: Platform Admin, Factory Admin, Tech Lead, Developer, QA Engineer, Release Manager, Security Engineer, Read-Only, Service Account. |
| FR-IAM-UNI-003 | M | Domain-specific roles shall be supported via Domain Packs: Formulation Chemist, Regulatory Affairs Manager (CPG/Pharma); Portfolio Manager, Risk Manager, Compliance Officer (Financial); Farm Operations Manager, Agronomist (Agricultural); Research Scientist, Principal Investigator (Research); Tax Product Manager, Tax Technologist (Legal/Tax). |
| FR-IAM-UNI-004 | M | Multi-factor authentication (MFA) shall be mandatory for all human users. Single Sign-On (SSO) via OAuth2/OIDC shall be supported. |
| FR-IAM-UNI-005 | M | Persona Profiles shall map roles to simplified, domain-appropriate portal views: non-software users shall not encounter software-native concepts unless directly relevant to their work. |
| FR-IAM-UNI-006 | S | Qualified Electronic Signature (eIDAS-compatible) integration shall be supported for approval actions in regulated solution types requiring non-repudiation (pharmaceutical product release, financial instrument issuance, legal document approval). |

# **10  Artefact Registry Requirements**

*Universal artefact management for all solution types: digital artefacts, specifications, datasets, models, and physical goods records.*

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-ART-UNI-001 | M | The platform shall provide a centralised, immutable Artefact Registry for all solution artefact types: software binaries, container images, packages; formulation specifications, stability study reports, batch records; financial model files, backtesting reports, product term sheets; agricultural solution datasets, firmware images, field trial reports; research datasets, computational model checkpoints, publication drafts. |
| FR-ART-UNI-002 | M | Every artefact shall be stored with: ID, name, type, version, SHA-256 integrity digest, attestation reference, linked solution ID, linked release ID, and creation timestamp. |
| FR-ART-UNI-003 | M | Artefact content shall be immutable once stored. Any change produces a new version. The previous version remains accessible. |
| FR-ART-UNI-004 | M | All software dependencies shall be declared in lock files with exact version pinning and SHA-256 digest verification at build time. |
| FR-ART-UNI-005 | M | For physical goods solution types, the platform shall support Specification Artefacts: a dedicated artefact type for versioned solution specifications (formulation specs, BOM documents, manufacturing parameters) that are linked to production batch records. |
| FR-ART-UNI-006 | M | For research solution types, the platform shall support Dataset Pointer artefacts: verified references to externally hosted datasets (AWS S3, institutional repositories, Zenodo) with checksum verification and access metadata. |
| FR-ART-UNI-007 | S | SBOM generation (in SPDX or CycloneDX format) shall be supported for all solution types: software SBOMs listing code dependencies; universal SBOMs extending the concept to list all tools, data sources, services, and physical inputs a solution depends on. |
| FR-ART-UNI-008 | S | Artefact vulnerability scanning shall run on a scheduled basis across the registry for all software and tool artefact types. |
| FR-ART-UNI-009 | S | Artefact retention policies shall be configurable per artefact type and per solution type. Artefacts past retention age shall be archived to cold storage. |
| FR-ART-UNI-010 | S | Licence compliance checks shall flag artefacts with dependencies whose licences are incompatible with the solution's declared licence policy. |
| FR-ART-UNI-011 | C | A Recalled Artefacts register shall immediately flag recalled artefacts in all linked release and distribution records, with automated consumer notification. |

# **11  AI and Intelligence Requirements**

*Requirements for the universal AI Agent across all solution domains.*

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-AI-UNI-001 | M | The AI Agent shall provide lifecycle optimisation recommendations for every active SDE and solution record within 30 minutes of a triggering event. |
| FR-AI-UNI-002 | M | AI recommendations shall be published to the AI\_EVENTS topic and surfaced in the portal. Users shall be able to Accept, Dismiss, or Defer each recommendation. |
| FR-AI-UNI-003 | M | AI-initiated actions shall require human approval for all regulated solution types. For software and low-risk solution types, AI automation may be enabled with explicit user configuration. |
| FR-AI-SW-001 | M | For Software solutions: AI shall generate test cases for changed code areas, predict defect-prone modules, detect anomalies in production metrics, and optimise pipeline execution order. |
| FR-AI-GOOD-001 | S | For Physical Goods solutions: AI shall predict batch quality failure risk based on in-process sensor data, recommend formulation optimisations, and detect early indicators of recall-triggering quality drift. |
| FR-AI-FIN-001 | S | For Financial Solutions: AI shall monitor for model performance drift, detect compliance anomaly patterns, validate pricing model outputs against historical benchmarks, and predict regulatory examination risk. |
| FR-AI-AGRI-001 | S | For Agricultural Solutions: AI shall provide yield predictions, crop disease early detection, irrigation optimisation recommendations, and supply chain risk scoring. |
| FR-AI-SVC-001 | S | For Service Solutions: AI shall provide methodology matching recommendations, engagement outcome predictions, and knowledge retrieval from versioned service intellectual capital. |
| FR-AI-RES-001 | S | For Research Assets: AI shall verify experiment reproducibility, predict experiment outcomes from historical similar experiments, and flag statistical anomalies in result datasets. |
| FR-AI-UNI-004 | S | AI recommendation acceptance rate shall be tracked per user, per solution type, and platform-wide. The AI model shall be tunable based on feedback. |
| FR-AI-UNI-005 | S | The AI Agent shall be explainable for regulated domains: every recommendation shall include the evidence, model version, and confidence level that produced it. |
| FR-AI-UNI-006 | C | AI domain intelligence shall be available as an API, enabling customers to integrate Qala's solution lifecycle intelligence into their own products and workflows. |
| FR-AI-UNI-007 | C | The AI Agent shall support cross-solution learning: patterns from high-performing solutions shall be identified and recommended to lower-performing solutions of the same type. |

# **12  Observability Requirements**

| ID | P | Requirement |
| :---- | :---- | :---- |
| FR-OBS-UNI-001 | M | All platform services shall emit structured JSON logs: service name, trace ID, span ID, timestamp, log level, message. |
| FR-OBS-UNI-002 | M | All logs shall forward to a centralised log aggregation system. Hot storage: minimum 90 days for all types; 7 years for audit logs in regulated deployments. |
| FR-OBS-UNI-003 | M | All services shall emit service-level metrics to a centralised store: request rate, error rate, latency (p50/p95/p99), and resource saturation. |
| FR-OBS-UNI-004 | M | Distributed tracing (OpenTelemetry-compatible) shall instrument all inter-service calls. Trace context shall propagate through all Kafka event payloads. |
| FR-OBS-UNI-005 | M | Configurable alerting shall fire on any metric or log pattern breach. Alerts shall route to the platform notification channels. |
| FR-OBS-UNI-006 | S | Role-specific dashboards: Infrastructure (PA), Application (Developer/TL), Quality (QA/RM), Security (SE), Domain Operations (domain-specific personas). |
| FR-OBS-UNI-007 | S | Domain-specific telemetry shall be supported via Domain Packs: batch quality telemetry (CPG/Pharma), model performance telemetry (Financial), IoT sensor telemetry aggregation (Agricultural). |
| FR-OBS-UNI-008 | C | Synthetic monitoring shall be supported: configurable probes verifying solution health and correctness from external perspectives. |

# **13  Non-Functional Requirements**

*Platform-wide performance, reliability, scalability, security, usability, and compliance requirements.*

## **13.1  Performance**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-PERF-001 | Performance | M | All API endpoints shall respond within 500ms at p95 under normal operating load for all request types. |
| NFR-PERF-002 | Performance | M | Software SDE provisioning shall complete within 10 minutes. Non-software SDE provisioning within 30 minutes. |
| NFR-PERF-003 | Performance | M | SDE snapshot shall complete within 60 seconds for a standard SDE. Rollback shall complete within 10 minutes for any SDE type. |
| NFR-PERF-004 | Performance | M | Affected batch identification query (for recall readiness) shall return results within 5 minutes for any physical goods solution with up to 10 years of batch history. |
| NFR-PERF-005 | Performance | S | The platform shall sustain operations for at least 10,000 concurrent Active SDEs across all solution types without API SLA degradation. |
| NFR-PERF-006 | Performance | S | Kafka event processing latency shall not exceed 2 seconds from publication to consumer receipt under normal load. |

## **13.2  Reliability and Availability**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-REL-001 | Reliability | M | The platform control plane shall achieve 99.9% monthly uptime (\< 44 minutes downtime per month). |
| NFR-REL-002 | Reliability | M | Critical-path services (API Gateway, Identity, Solution Management, SEM) shall target 99.99% monthly uptime. |
| NFR-REL-003 | Reliability | M | The platform shall support zero-downtime deployments of the platform itself via Blue/Green deployment of its own services. |
| NFR-REL-004 | Reliability | M | RTO for complete region failure: 15 minutes. RPO: 1 hour. |
| NFR-REL-005 | Reliability | S | The platform shall gracefully degrade: unavailability of non-critical services (AI Agent, Benchmarking) shall not impact SDE and core lifecycle operations. |

## **13.3  Scalability**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-SCALE-001 | Scalability | M | All microservices shall support horizontal scaling independently. No service shall require coordinated scaling with other services. |
| NFR-SCALE-002 | Scalability | M | The Artefact Registry shall support a minimum of 10 million artefact records across all solution types without performance degradation. |
| NFR-SCALE-003 | Scalability | S | The platform shall support at least 10,000 concurrent users across all roles and solution types. |
| NFR-SCALE-004 | Scalability | S | The event bus shall sustain a minimum of 100,000 events per second across all topics. |
| NFR-SCALE-005 | Scalability | C | The platform shall support global distribution with regional deployments and configurable data residency per region. |

## **13.4  Security**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-SEC-001 | Security | M | All data at rest shall be encrypted using AES-256. |
| NFR-SEC-002 | Security | M | All data in transit shall be encrypted using TLS 1.3 or higher. |
| NFR-SEC-003 | Security | M | Service-to-service communication shall use mutual TLS (mTLS) within the platform perimeter. |
| NFR-SEC-004 | Security | M | SDE threat detection to quarantine shall execute within 90 seconds of a confirmed threat signal. |
| NFR-SEC-005 | Security | M | All platform APIs shall enforce authentication and authorisation on every request. |
| NFR-SEC-006 | Security | M | An independent penetration test shall be conducted before initial production launch and annually thereafter. |
| NFR-SEC-007 | Security | S | All software build artefacts shall carry SLSA Level 3 provenance attestations. |
| NFR-SEC-008 | Security | S | API rate limiting shall be enforced at the Gateway to protect against denial-of-service attacks. |

## **13.5  Usability and Accessibility**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-UX-001 | Usability | M | The portal shall meet WCAG 2.1 Level AA accessibility standards. |
| NFR-UX-002 | Usability | M | Non-software users (CPG, Financial, Agricultural, Services personas) shall not encounter software-native concepts (CI/CD, containers, Kubernetes) unless directly relevant to their workflow. |
| NFR-UX-003 | Usability | M | New user onboarding (account creation through first active SDE) shall be completable within 30 minutes for software users and within 1 hour for non-software users. |
| NFR-UX-004 | Usability | S | All domain-specific terms shall use the vocabulary of the relevant domain (e.g. "Formulation" not "Configuration" for CPG users; "Mandate" not "Specification" for financial users). |
| NFR-UX-005 | Usability | S | The portal shall support light and dark display modes. All CLI tools and IDE plugins shall provide context-sensitive help and autocomplete. |
| NFR-UX-006 | Usability | C | The platform shall support localisation (i18n) for a minimum of 5 languages in the portal UI. |

## **13.6  Compliance**

| ID | Category | P | Requirement |
| :---- | :---- | :---- | :---- |
| NFR-COMP-001 | Compliance | M | The immutable audit trail shall meet the minimum retention requirement of 7 years for regulated deployment configurations. |
| NFR-COMP-002 | Compliance | M | The platform shall produce audit evidence supporting SOC 2 Type II certification from platform-generated records. |
| NFR-COMP-003 | Compliance | S | The platform shall support configurable data residency: all data for a given tenant stored and processed within a specified geographic region. |
| NFR-COMP-004 | Compliance | S | The platform shall provide evidence artefacts for ISO 27001 certification without requiring manual data collection from platform records. |
| NFR-COMP-005 | Compliance | C | The platform shall support FedRAMP Moderate controls for United States federal government deployments. |

# **14  Requirements Traceability Matrix**

*Each requirement domain traced to PRD v2.0 problem statements, SDD v2.0 sections, and Workflows & Use Cases v1.0.*

| Domain | Requirement IDs | PRD Problem | SDD Section |
| :---- | :---- | :---- | :---- |
| Solution Management | FR-SM-UNI-001–010, FR-SF-UNI-001–006 | P-SW-001–004, P-GOOD-001–003, P-FIN-001–003, P-AGRI-001–002, P-SVC-001–002, P-BIZ-001, P-RES-001–002 | SDD §3, §5 |
| Development Environment | FR-SDE-UNI-001–013, FR-SDE-SW-001, FR-SDE-LAB-001, FR-SDE-FIN-001, FR-SDE-EDGE-001 | P-SW-001, P-AGRI-002, P-RES-001 | SDD §4 |
| Configuration Management | FR-CM-UNI-001–008, FR-CCR-UNI-001–010 | P-GOOD-001, P-FIN-001, P-FIN-003, P-BIZ-001 | SDD §7 |
| Quality Management | FR-TEST-UNI-001–009, FR-BUG-UNI-001–007, FR-QG-UNI-001–008 | P-SW-002, P-GOOD-001–002, P-RES-001 | SDD §8, §10 |
| Testing Environment | FR-TENV-UNI-001–007, FR-TENV-SW-001, FR-TENV-GOOD-001, FR-TENV-FIN-001, FR-TENV-AGRI-001 | P-RES-001, P-FIN-002 | SDD §10 |
| Release Management | FR-REL-UNI-001–007, FR-DEP-SW-001–005, FR-REL-GOOD-001–002, FR-REL-FIN-001–002, FR-REL-TAX-001, FR-REL-SVC-001, FR-REL-RES-001 | P-SW-003, P-GOOD-002, P-FIN-003 | SDD §9 |
| Distribution Management | FR-DIST-UNI-001–005, FR-DIST-SW-001, FR-DIST-GOOD-001–002, FR-DIST-FIN-001, FR-DIST-TAX-001, FR-DIST-AGRI-001 | P-GOOD-002, P-AGRI-001 | SDD §9 |
| Governance Infrastructure | FR-AUD-UNI-001–006, FR-POL-UNI-001–005, FR-COMP-UNI-001–006, FR-IAM-UNI-001–006 | P-FIN-001–002, P-SW-002 | SDD §9, §13 |
| Artefact Registry | FR-ART-UNI-001–011 | P-SW-001, P-GOOD-002, P-RES-001 | SDD §16 |
| AI & Intelligence | FR-AI-UNI-001–007, FR-AI-SW-001, FR-AI-GOOD-001, FR-AI-FIN-001, FR-AI-AGRI-001, FR-AI-SVC-001, FR-AI-RES-001 | P-SW-002, P-AGRI-002, P-SVC-001 | SDD §10, §14 |
| Observability | FR-OBS-UNI-001–008 | P-SW-003 (cross-cutting) | SDD §11 |
| Non-Functional | NFR-PERF through NFR-COMP | All problems — platform-wide quality constraints | SDD §2, §17 |

## **14.1  Requirements Count Summary**

| Domain | M | S | C | W | Total |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Solution Management | 10 | 4 | 2 | 0 | 16 |
| Development Environment | 10 | 4 | 2 | 0 | 16 |
| Configuration & CM | 8 | 8 | 2 | 0 | 18 |
| Quality Management | 10 | 8 | 2 | 0 | 20 |
| Testing Environment | 8 | 4 | 0 | 0 | 12 |
| Release Management | 10 | 4 | 0 | 0 | 14 |
| Distribution Management | 7 | 4 | 1 | 0 | 12 |
| Governance | 12 | 6 | 0 | 0 | 18 |
| Artefact Registry | 7 | 4 | 1 | 0 | 12 |
| AI & Intelligence | 4 | 9 | 3 | 0 | 16 |
| Observability | 5 | 3 | 1 | 0 | 9 |
| Non-Functional | 20 | 18 | 6 | 0 | 44 |
| TOTAL | 111 | 76 | 20 | 0 | 207 |

*End of Document  —  Qala Universal Solution Management OS  |  Platform Requirements Document  v2.0*