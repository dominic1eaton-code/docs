

**QALA**

**Universal Solution Management Operating System**

*Request for Comments (RFC)  |  v2.0  |  Universal Edition*

| Field | Value |
| :---- | :---- |
| Document Type | RFC — Universal Edition v2.0 |
| System | Qala Universal Solution Management OS |
| Status | Open for Comment — 30-day comment period |
| RFC Count | 22 RFCs across architecture, solution model, domain extensions, and strategy |
| Purpose | Solicit structured feedback on design decisions for the Universal Solution Management OS covering all solution types and industries |
| Audience | Engineering, Architecture, Domain Experts, Security, Product, External Reviewers |

# **1  Introduction and How to Use This RFC**

*This document is a formal Request for Comments on the design of the Qala Universal Solution Management Operating System. It presents 22 open design questions spanning platform architecture, the universal solution model, domain-specific extensions, integration, compliance, AI, and open source strategy. Feedback shapes the platform before decisions are locked.*

An RFC is a structured proposal that explicitly names its open questions and alternative approaches. The goal is not to present a finalized design but to invite rigorous challenge, domain expertise, and creative alternatives from the broadest possible community of reviewers.

| *How to respond: Submit comments via the project issue tracker or document annotations. Reference the RFC ID and Question ID (e.g. Q-ARCH-001) in every comment. The Architecture Review Board will respond to every substantive comment within the 30-day period.* |
| :---- |

## **1.1  RFC Index — All 22 RFCs**

| RFC ID | Title | Domain | Status |
| :---- | :---- | :---- | :---- |
| RFC-001 | Polyglot Architecture and Language Selection | Architecture | Open |
| RFC-002 | SDE Model: Universal Environment Types | Platform | Open |
| RFC-003 | Hermetic Build and Attestation for All Solution Types | Build / Security | Open |
| RFC-004 | Universal Event Architecture and Kafka Topology | Platform | Open |
| RFC-005 | AI Agent: Universal Intelligence Architecture | AI / Intelligence | Open |
| RFC-006 | Universal Solution Type System and Extensibility | Solution Model | Open |
| RFC-007 | Change Control Governance: Universal CCR Model | Governance | Open |
| RFC-008 | Universal Quality Management Model | Quality | Open |
| RFC-009 | Universal Release and Distribution Management | Release | Open |
| RFC-010 | Physical Goods, CPG and Manufacturing Domain Extension | Domain Extension | Open |
| RFC-011 | Financial, Investment and Capital Solution Domain Extension | Domain Extension | Open |
| RFC-012 | Agricultural and Agribusiness Solution Domain Extension | Domain Extension | Open |
| RFC-013 | Tools, Toolchains, Libraries, Packages and SDK Domain Extension | Domain Extension | Open |
| RFC-014 | Service, Consulting and Professional Services Domain Extension | Domain Extension | Open |
| RFC-015 | Business, Process and Operational Solution Domain Extension | Domain Extension | Open |
| RFC-016 | Research, Academic and Scientific Solution Domain Extension | Domain Extension | Open |
| RFC-017 | Legal, Tax and Regulatory Solution Domain Extension | Domain Extension | Open |
| RFC-018 | Universal Compliance Framework Architecture | Compliance | Open |
| RFC-019 | Physical World Integration: ERP, MES, LIMS, IoT Bridges | Integration | Open |
| RFC-020 | Multi-Tenancy, Tenant Isolation and Cross-Tenant Sharing | Platform | Open |
| RFC-021 | Identity, RBAC and Electronic Signature Architecture | Security | Open |
| RFC-022 | Open Source, Ecosystem and Commercialisation Strategy | Strategy | Open |

# **2  Architecture Context for Review**

*The expanded architecture adds a sixth Domain Extension Plane to support universal solution types without polluting the platform core. All domain-specific logic lives in independently deployable, community-contributable Domain Packs.*

| Plane | Language | Responsibilities |
| :---- | :---- | :---- |
| Kernel Plane | Rust | Platform integrity, service registry, health monitoring, event aggregation, cross-domain solution graph engine, platform self-governance. |
| Control Plane | Go | SDE Management, Solution Factory, Identity, Notifications, Change Control (CCR/CCB), Bug Tracking, Release Management, Universal Solution Lifecycle State Machine. |
| Execution Plane | Go / Scala | CI/CD Engine, Test Management, Benchmarking, Hermetic Build, Artefact Registry, Distribution Engine. Go for orchestration; Scala/Akka for reactive streaming where needed. |
| Intelligence Plane | Rust | Universal AI Agent (domain-aware), SEM, Vulnerability Management, Privacy Management. Domain-specific intelligence models hot-swappable per solution type. |
| Platform Operations | Go / Terraform | Environment Management, Tool Registry, Vendor Integration, Backup and Recovery, Audit and Compliance Reporting. |
| Domain Extension Plane | Go \+ YAML DSL | Vertical-specific solution type schemas, compliance framework adapters, physical world integration bridges, domain workflow templates, industry vocabulary overlays, role-specific UX personas. |

| *Domain Packs are the primary extension mechanism. A Domain Pack for CPG defines: the Good/Product/ProductLine solution type schemas; the formulation CCR workflow template; GMP and REACH compliance evidence mappings; ERP integration bridge configuration; and the CPG-specific portal vocabulary. Domain Packs are versioned, independently deployable, and community-contributable.* |
| :---- |

# **3  RFC-001: Polyglot Architecture and Language Selection**

| RFC-001  —  Polyglot Architecture and Language Selection Status: Open for Comment   Domain: Architecture |
| :---- |

The six-plane architecture uses four languages: Rust (Kernel \+ Intelligence), Go (Control \+ Platform Ops \+ Domain Ext), Scala (Execution streaming), and YAML DSL (domain pack schemas). This RFC asks whether the polyglot complexity is justified by the performance and safety benefits.

| Option | Languages | Pros | Cons |
| :---- | :---- | :---- | :---- |
| Proposed: Polyglot | Rust \+ Go \+ Scala \+ YAML | Best tool per domain. Rust safety for security-critical code. Scala for reactive pipelines. | Four languages. High hiring bar. Complex CI/CD across language ecosystems. |
| Alt A: Go-only | Go \+ YAML | Single language. Fastest iteration. Largest talent pool. Simplest toolchain. | Go lacks Rust's safety guarantees. Less natural for reactive streaming vs. Scala. |
| Alt B: Rust \+ Go | Rust \+ Go \+ YAML | Best of two worlds. Go productivity for business logic; Rust safety for critical paths. | Still polyglot. Rust learning curve. Slower initial velocity. |
| Alt C: JVM-first | Kotlin \+ Java \+ YAML | Strong JVM ecosystem. Kotlin is modern, safe, concise. Excellent library support. | JVM startup time for Kernel/SEM latency. GC pauses in security-critical code. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-ARCH-001 | Is the reactive streaming capability of Scala/Akka worth the language diversity cost? Could Go \+ Temporal (workflow orchestration) deliver equivalent pipeline orchestration capability with a single-language stack? | Pre-alpha build |
| Q-ARCH-002 | For the Kernel Plane, is Rust's memory safety genuinely necessary given that Go's memory safety is "good enough" and Go's garbage collector has improved substantially in recent versions? | Pre-alpha build |
| Q-ARCH-003 | Should the Domain Extension YAML DSL be expressive enough for complex domain-specific validation logic, or should Domain Pack authors write Go code? A pure YAML DSL limits expressiveness; requiring Go raises the contributor bar. | Pre-alpha build |
| Q-ARCH-004 | What is the minimum viable language set that preserves the key architectural benefits (safety for security code, streaming for pipelines, speed for control plane) while minimising polyglot overhead? | Pre-alpha build |

# **4  RFC-002: SDE Model — Universal Environment Types**

| RFC-002  —  SDE Model: Universal Environment Types Status: Open for Comment   Domain: Platform |
| :---- |

The Solution Development Environment (SDE) must serve as the governed workspace for creating any solution type. For software, this is a hermetic build container. For a pharmaceutical formulation team, it is a simulation and regulatory tooling workspace. For a quantitative finance team, it is a backtesting and data access workbench. For a farm operations team, it is an IoT firmware build and sensor configuration environment.

| SDE Type | Proposed Implementation | Key Requirement | Primary Challenge |
| :---- | :---- | :---- | :---- |
| Software Dev | OCI container \+ Kubernetes orchestration | Hermetic builds, full IDE integration, fast provisioning. | None — well-understood, mature space. |
| Lab / Formulation | VM or Kata container \+ NFS mounts | Access to commercial simulation software, file-based toolchains. | Commercial software licensing in containerised environments. |
| Financial Research | OCI container \+ optional GPU attachment | Large dataset access, quantitative libraries (Python, R, Julia). | GPU attachment; data access latency for large datasets. |
| Edge / IoT / AgriTech | Nix flake \+ bare-metal / microVM | Offline operation, cross-compilation, constrained resources. | Nix maturity; air-gap dependency pre-population strategy. |
| Knowledge / Service | Lightweight OCI container \+ CMS integration | Document versioning, AI retrieval, knowledge base access. | CMS integration model; knowledge graph consistency. |
| Research / Academic | OCI \+ large storage mounts \+ dataset registry | Dataset versioning, experiment reproducibility, compute scaling. | Petabyte-scale dataset management; HPC integration. |
| Business / Process | Lightweight OCI \+ process modelling tools | BPMN/flowchart tooling, document management, collaboration. | Process model storage and versioning format selection. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-SDE-001 | Should "SDE" be a single unified concept with modular capability packs (hermetic-build-pack, dataset-access-pack, knowledge-workspace-pack) or should it be subtyped explicitly (SoftwareSDE, LabSDE, ResearchSDE, KnowledgeSDE)? The unified model is simpler to govern; subtypes are more intuitive for non-software users. | Pre-alpha |
| Q-SDE-002 | For Lab and Research SDEs accessing commercial licensed software (Matlab, ANSYS, SAS), how should license compliance be managed in containerised environments? Node-locked and seat-licensed software fundamentally conflicts with ephemeral container models. | Pre-beta |
| Q-SDE-003 | What does an SDE "snapshot" mean for a non-software environment? For a software SDE, a snapshot captures filesystem \+ config \+ dependencies. For a formulation lab SDE, what constitutes the complete capturable state? | Pre-alpha build |
| Q-SDE-004 | Should non-software SDE types be in scope for v1, or should v1 ship with Software SDE only, with domain SDE types added via Domain Packs in subsequent releases? Phasing reduces v1 scope risk but delays non-software adoption. | Pre-alpha |

# **5  RFC-003: Hermetic Build and Attestation for All Solution Types**

| RFC-003  —  Hermetic Build and Attestation for All Solution Types Status: Open for Comment   Domain: Build / Security |
| :---- |

SLSA (Supply-chain Levels for Software Artefacts) provides a robust build attestation framework for software. For the universal platform, the equivalent operation across all solution types must be defined. A "build" for a pharmaceutical formulation is a simulation run and regulatory pre-check. For a financial model, it is a calibration and backtesting run. For a research experiment, it is a pipeline execution. Each requires an attestation that the result was produced from known, approved inputs in a governed environment.

| Solution Type | Build Equivalent | Reproducibility Class | Proposed Attestation Record |
| :---- | :---- | :---- | :---- |
| Software / Firmware | Compile, link, package in hermetic container. | Deterministic — bit-for-bit reproducible. | Source commit, env hash, dependency digests, output hash, signer identity. |
| Physical Formulation | Simulation run \+ specification validation \+ regulatory pre-check. | Deterministic — same inputs produce same simulation outputs. | Formulation version, simulation tool version, input parameters, output report hash. |
| Financial Model | Calibration run \+ backtesting \+ parameter validation. | Partially deterministic — market data inputs can vary. | Model version, data snapshot ID, calibration parameters, backtest report hash, risk metric outputs. |
| ML / AI Model | Training run \+ evaluation \+ serialisation. | Non-deterministic — stochastic gradient descent. | Dataset version, hyperparameters, random seed, evaluation metrics, model artefact hash. |
| Research Experiment | Pipeline execution \+ data processing \+ result generation. | Deterministic if environment is hermetic. | Script version, dataset version, env hash, result hashes, execution log hash. |
| Tax Rule Set | Rule compilation \+ validation suite \+ jurisdiction test run. | Deterministic. | Rule set version, test suite version, jurisdiction variants, validation report hash. |
| Service Methodology | Document assembly \+ review workflow completion \+ approval. | Deterministic — document content is fixed at approval. | Document version, approver identities, approval timestamps, document hash. |
| Business Solution | Process model validation \+ stakeholder review \+ acceptance. | Deterministic at the process model level. | Process model version, validation results, acceptance records, model hash. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-HB-001 | Should Qala publish a "Universal Solution Attestation Schema" as an open standard extending SLSA to cover all non-software solution types? This would be a significant community contribution and could drive cross-industry adoption, but requires substantial standards body engagement. | Post-alpha |
| Q-HB-002 | For stochastic processes (ML training, financial model calibration), bit-for-bit reproducibility is not achievable. Should the attestation standard require "governed reproducibility" (same environment \+ same inputs produces results within defined tolerance bounds) rather than exact reproducibility? | Pre-beta |
| Q-HB-003 | Should SLSA Level 3 compliance be mandatory for all solution types from launch, or should the hermetic build requirement be phased — mandatory for software from v1, voluntary for other solution types until domain-specific attestation standards are defined? | Pre-alpha build |
| Q-HB-004 | For physical goods, the "build" is a physical manufacturing process that Qala cannot govern directly. How should attestation connect the digital specification version to the physical batch record? Should Qala define a "specification-to-batch linkage" attestation that connects the digital record to the physical production event? | Pre-GA |

# **6  RFC-004: Universal Event Architecture**

| RFC-004  —  Universal Event Architecture and Kafka Topology Status: Open for Comment   Domain: Platform |
| :---- |

| Topic | Domain | Retention | Key Event Types |
| :---- | :---- | :---- | :---- |
| SDE\_EVENTS | Platform | 30 days | SDE\_CREATED, SNAPSHOTTED, QUARANTINED, ROLLED\_BACK, ARCHIVED, DECOMMISSIONED |
| SOLUTION\_EVENTS | Universal | 90 days | SOLUTION\_CREATED, VERSION\_RELEASED, STATE\_CHANGED, RECALLED, RETIRED |
| BUILD\_EVENTS | Execution | 90 days | BUILD\_STARTED, PASSED, FAILED, ATTESTATION\_CREATED, DEPENDENCY\_VIOLATION |
| RELEASE\_EVENTS | Execution | 90 days | RELEASE\_PLANNED, GATE\_PASSED, GATE\_FAILED, DEPLOYED, ROLLED\_BACK, RECALLED |
| QUALITY\_EVENTS | Universal | 1 year | TEST\_PASSED, TEST\_FAILED, DEFECT\_CREATED, QUALITY\_GATE\_PASSED, QUALITY\_GATE\_FAILED |
| CHANGE\_EVENTS | Universal | 1 year | CCR\_SUBMITTED, CCR\_APPROVED, CCR\_REJECTED, CHANGE\_IMPLEMENTED, DRIFT\_DETECTED |
| SECURITY\_EVENTS | Security | 1 year | THREAT\_DETECTED, QUARANTINED, VULNERABILITY\_FOUND, SUPPLY\_CHAIN\_VIOLATION |
| COMPLIANCE\_EVENTS | Compliance | 7 years | POLICY\_CHECKED, VIOLATION\_DETECTED, EVIDENCE\_GENERATED, REPORT\_PUBLISHED |
| DISTRIBUTION\_EVENTS | Distribution | 1 year | DISTRIBUTED, CHANNEL\_UPDATED, DISTRIBUTION\_SUSPENDED, RECALL\_INITIATED |
| AI\_EVENTS | Intelligence | 14 days | RECOMMENDATION\_PUBLISHED, PREDICTION\_ISSUED, ANOMALY\_DETECTED, FEEDBACK\_RECORDED |
| DOMAIN\_EVENTS | Domain Ext. | 1 year | Domain-specific: BATCH\_RELEASED, FORMULATION\_APPROVED, FUND\_INCEPTED, HARVEST\_RECORDED |
| AUDIT\_EVENTS | Compliance | 7 years | Every state-modifying action — append-only, cryptographically chained |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-EVT-001 | AUDIT\_EVENTS requires 7-year immutable retention — this exceeds Kafka's practical strengths. Should audit events write to a dedicated append-only, cryptographically hash-chained audit log store (separate from Kafka) with Kafka as the real-time distribution bus only? | Pre-alpha build |
| Q-EVT-002 | DOMAIN\_EVENTS is currently proposed as a single shared topic with domain-type discriminators. Should each vertical instead have its own topic (CPG\_EVENTS, AGRI\_EVENTS, FINANCIAL\_EVENTS) for consumer filtering efficiency? What is the topic proliferation trade-off at scale? | Pre-alpha build |
| Q-EVT-003 | How should schema governance work for DOMAIN\_EVENTS that are defined by Domain Pack authors? Should every Domain Pack submit an AsyncAPI spec that is validated against the platform Schema Registry before the pack is activated in any SDE? | Pre-beta |
| Q-EVT-004 | Physical goods supply chain events (BATCH\_RECEIVED, COLD\_CHAIN\_VIOLATION, PRODUCT\_DISPATCHED) may arrive from external systems (ERP, MES, logistics platforms) rather than from Qala services. How should external event ingestion be authenticated, validated, and integrated into the event bus without contaminating the internal event trust model? | Pre-beta |

# **7  RFC-005: AI Agent — Universal Intelligence Architecture**

| RFC-005  —  AI Agent: Universal Intelligence Architecture Status: Open for Comment   Domain: AI / Intelligence |
| :---- |

The Qala AI Agent is not a general-purpose language model assistant. It is a lifecycle intelligence engine with full context about every solution it manages — the solution's history, quality trajectory, security posture, relationship graph, domain rules, and current state. Its capabilities are domain-aware: it generates software tests, predicts pharmaceutical batch quality failures, detects financial model drift, recommends agronomic interventions, retrieves consulting methodologies, and optimises research experiment designs — all from one architecture.

| Domain | AI Capability | Input Data | Output Type |
| :---- | :---- | :---- | :---- |
| Software | Test generation, defect prediction, pipeline optimisation, anomaly detection, security risk scoring. | Build history, test results, defect records, code changes, benchmarks. | Test cases, risk scores, pipeline recommendations, anomaly alerts. |
| Physical Goods | Batch quality prediction, formulation optimisation, recall risk detection, yield optimisation. | Batch records, quality tests, recall history, supplier records, sensor data. | Quality risk alerts, formulation suggestions, recall probability scores. |
| Financial | Model drift detection, compliance anomaly detection, pricing model validation, portfolio risk scoring. | Model performance history, regulatory findings, market data, backtest results. | Model risk alerts, compliance predictions, pricing validation reports. |
| Agricultural | Yield prediction, crop disease detection, irrigation optimisation, supply chain risk scoring. | Sensor data, weather forecasts, historical yields, satellite imagery, logistics data. | Yield forecasts, field intervention recommendations, logistics optimisation. |
| Professional Svcs | Methodology recommendation, outcome prediction, engagement quality scoring, knowledge retrieval. | Engagement records, outcomes, client NPS, knowledge base, methodology versions. | Methodology matches, outcome forecasts, knowledge summaries, quality alerts. |
| Research | Experiment outcome prediction, reproducibility verification, anomaly detection in results. | Publication records, experiment results, datasets, simulation runs. | Reproducibility risk alerts, experiment design recommendations. |
| Legal / Tax | Regulatory change impact prediction, compliance gap detection, jurisdiction variant recommendation. | Regulatory databases, product version history, examination findings, legislative feeds. | Impact assessments, compliance gap reports, update prioritisation. |
| Business / Ops | Process performance prediction, bottleneck identification, change risk scoring. | Process telemetry, outcome metrics, change history, benchmark data. | Process improvement recommendations, change risk scores, outcome forecasts. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-AI-001 | Should the AI Agent use a single universal model fine-tuned across all domain data, or domain-specific models (SoftwareAI, CPG\_AI, FinancialAI) each trained on domain-specific data? Universal model benefits from cross-domain learning; domain models provide higher quality per vertical but require separate training pipelines. | Pre-beta |
| Q-AI-002 | For regulated domains (pharma, finance, medical devices), AI recommendations that influence product decisions may be subject to explainability requirements (EU AI Act, FDA AI/ML guidance). How should the AI Agent produce explainable outputs for regulated solution types while preserving model performance? | Pre-GA |
| Q-AI-003 | How should the AI Agent handle domains where it has insufficient training data at launch (e.g., a new vertical)? Should it decline to make recommendations, surface low-confidence recommendations with explicit uncertainty quantification, or fall back to rule-based heuristics? | Pre-beta |
| Q-AI-004 | Should Qala's domain intelligence be exposed as an API so customers can integrate Qala's solution lifecycle intelligence into their own products (e.g., a CPG company integrating Qala's batch quality prediction into their production control system)? | Post-GA |
| Q-AI-005 | What is the data governance model for AI training data derived from customer solution records? Who owns the trained model improvements — Qala or the customer? How should model improvement be apportioned when it is driven by cross-customer learning? | Pre-GA |

# **8  RFC-006: Universal Solution Type System**

| RFC-006  —  Universal Solution Type System and Extensibility Status: Open for Comment   Domain: Solution Model |
| :---- |

The Universal Solution Type System is the foundational data model of Qala. Every solution managed on the platform is an instance of a solution type. Every solution type inherits universal attributes and adds domain-specific attributes. The type system must be coherent enough to govern universally and flexible enough to represent every identified solution category.

## **8.1  The Type Hierarchy**

| Level | Description | Examples |
| :---- | :---- | :---- |
| Solution Category (10) | Top-level grouping of related solution types. | Software, Physical Goods, Services, Financial, Agricultural, Business, Research, Resources, Platforms, Legal/Tax |
| Solution Type (40+) | First-class managed entity type with type-specific lifecycle state machine. | Application, Good, Financial Instrument, Agricultural Platform, Consulting Service, Research Asset, Tax Solution |
| Solution Subtype (extensible) | Domain-specific specialisation of a type, added via Domain Pack. | ConsumerPackagedGood (subtype of Good), ETF (subtype of Financial Instrument), CropManagementSystem (subtype of AgriculturalPlatform) |

## **8.2  Universal Solution Attributes**

| Attribute Group | Attributes | All Types? |
| :---- | :---- | :---- |
| Identity | ID, name, type, subtype, owner, organisation, created\_at, created\_by. | Yes |
| Versioning | semantic\_version, version\_history, changelog, version\_status. | Yes |
| Lifecycle | lifecycle\_state (per type FSM), state\_history, last\_transition, transition\_reason. | Yes |
| Provenance | creation\_context, change\_history (linked CCR IDs), distribution\_history. | Yes |
| Artefacts | artefact\_manifest (all digital artefacts, versioned, with attestation references). | Yes |
| Quality | quality\_record\_refs, quality\_gate\_history, benchmark\_history. | Yes |
| Relationships | dependencies, components, parent\_solutions, child\_solutions, cross-type relationships. | Yes |
| Compliance | applicable\_frameworks, compliance\_status\_per\_framework, evidence\_refs. | Yes |
| Domain Metadata | Type-specific attributes defined by Domain Pack schema. | Type-specific |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-MODEL-001 | The taxonomy currently has 10 categories and 40+ types. Should types be a strict flat list (simpler to reason about) or a hierarchy (categories \> types \> subtypes)? A flat list avoids hierarchy complexity; a hierarchy enables incremental onboarding (learn Application before learning all 40+ types). | Pre-alpha |
| Q-MODEL-002 | Should solution type subtypes be user-definable from launch, or should the initial release have a fixed, curated set of types and subtypes, with user-defined extension deferred to v2? Fixed types reduce onboarding complexity but may not fit every domain use case. | Pre-alpha |
| Q-MODEL-003 | Quality is a universal attribute, but "quality" means fundamentally different things per domain. Should the quality record be a generic key-value store (domain-defined quality metrics), or should Qala define a typed quality model per solution category? | Pre-alpha build |
| Q-MODEL-004 | Cross-type solution relationships (e.g. a Platform composed of Applications and Services that produce Physical Goods) are central to the universal model. Should these relationships be a typed directed graph (most powerful), a simple parent-child hierarchy (simpler), or a flat tag-based association (most flexible but least governed)? | Pre-alpha build |
| Q-MODEL-005 | Should "Product Line" and "Solution Family" be first-class solution types (managed entities with their own lifecycle), or should they be modelled as relationship groupings of individual product solutions? A first-class type has its own CCR workflow; a grouping is simpler but may miss governance needs. | Pre-beta |

# **9  RFC-007: Change Control Governance — Universal CCR Model**

| RFC-007  —  Change Control Governance: Universal CCR Model Status: Open for Comment   Domain: Governance |
| :---- |

Every change to every solution — a code commit, an ingredient substitution in a formulation, a financial model parameter recalibration, an SLA term update, a tax rule modification, a process redesign — must flow through the Change Control Request (CCR) workflow. The CCR model must be universal enough to govern all change types, flexible enough to reflect the very different risk profiles of a routine dependency upgrade vs. a pharmaceutical ingredient substitution.

| Change Type | Risk Profile | Proposed Approval Path | Regulatory Requirement |
| :---- | :---- | :---- | :---- |
| Routine software dependency upgrade (patch) | Low | Single senior engineer approval \+ automated validation. | None |
| Software API breaking change | Medium | Tech Lead \+ Release Manager \+ automated consumer impact check. | Varies by contract |
| CPG formulation ingredient substitution | High | Product Dev \+ QA \+ Regulatory Affairs \+ mandatory validation run. | FDA/EFSA change notification or re-registration |
| Financial model parameter recalibration | High | Quant Lead \+ Risk Manager \+ Model Validation Committee. | MiFID II model governance requirements |
| Tax rule set update (new legislation) | High | Tax Product Manager \+ Legal \+ Compliance \+ effective date scheduling. | Must match legislative effective date exactly |
| Agricultural IoT firmware update | Medium | Engineering Lead \+ QA \+ field impact assessment. | May require regulatory notification for certain device classes |
| Service SLA term change | Medium | Service Architect \+ Legal \+ Customer Success. | Contract-specific; customer notification required |
| Research pipeline algorithm update | Low-Medium | Principal Investigator \+ peer review gate. | Publication reproducibility requirements |
| Business process redesign | High | Process Owner \+ Impacted stakeholders \+ Change Champion. | Varies by regulated industry context |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-CM-001 | Should the CCR risk scoring model be universal (same algorithm for all solution types) or domain-specific (a pharmaceutical CCR has different inherent risk factors than a software CCR)? A universal model is simpler to govern; a domain-specific model better reflects actual risk. | Pre-beta |
| Q-CM-002 | For regulated solution types (pharma, financial, tax), some change types carry regulatory obligations (FDA notification, MiFID II governance procedures) that must be embedded in the CCR workflow. Should these regulatory obligations be hard-coded into Domain Pack CCR templates, or should they be configurable per organisation based on their specific regulatory exposure? | Pre-beta |
| Q-CM-003 | Should the CCR workflow support multi-stage sequential approval (e.g. Scientific Committee \> Regulatory Affairs \> Legal \> Executive sign-off for a pharmaceutical product change) with each stage having its own evidence requirements and approval criteria? | Pre-beta |
| Q-CM-004 | How should emergency changes be governed for non-software solution types? A software emergency change can be rolled back in minutes. A pharmaceutical emergency change (product recall) or financial emergency change (instrument repricing) may have irreversible consequences. Should the emergency change process have type-specific constraints for irreversible solution types? | Pre-beta |

# **10  RFC-008: Universal Quality Management Model**

| RFC-008  —  Universal Quality Management Model Status: Open for Comment   Domain: Quality |
| :---- |

Quality management in Qala must work across every solution type. The concepts of "test," "defect," "quality gate," and "benchmark" apply universally — but their specific implementations vary dramatically across domains. A software test suite, a pharmaceutical batch quality test, a financial model backtesting run, a field trial for an agricultural solution, and a peer review for a research publication are all "quality validation" events. Qala must provide a universal quality framework that captures all of these coherently.

| Quality Concept | Software | Physical Goods | Financial | Agricultural | Research |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Test Suite | Unit \+ integration \+ system tests | Batch quality tests, stability studies, regulatory tests | Backtesting runs, stress tests, model validation suite | Field trials, efficacy studies, environmental tests | Replication runs, peer review, statistical validation |
| Defect | Code defect, failed assertion, security finding | Non-conformance, contamination, specification deviation | Model error, risk limit breach, data error | Crop failure, yield underperformance, disease outbreak | Irreproducible result, data integrity failure, methodology error |
| Quality Gate | Coverage threshold, SAST pass, no critical bugs | GMP compliance, spec conformance, regulatory pre-check | Risk model validity, backtest threshold, compliance check | Efficacy threshold, safety clearance, regulatory approval | Reproducibility score, statistical significance, peer review pass |
| Benchmark | Test pass rate, defect density, DORA metrics | Batch quality yield, defect rate, recall frequency | Sharpe ratio, tracking error, VaR accuracy | Yield vs. forecast, intervention efficacy rate | Reproducibility rate, citation impact, data reuse rate |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-QM-001 | Should "quality record" be a generic schema (key: metric\_name, value: metric\_value, type: PASS/FAIL/SCORE) applicable to all solution types, or should each solution category have a typed quality schema with strongly-typed metrics? Generic is universal but loses domain-specific validation; typed is safer but harder to extend. | Pre-alpha build |
| Q-QM-002 | For physical goods, quality tests are conducted in the physical world (lab tests, field trials) and the results must be imported into Qala. Should Qala provide a Quality Event Ingestion API that accepts results from LIMS, lab instruments, and field testing tools via a standard event format? | Pre-beta |
| Q-QM-003 | How should cross-domain quality benchmarking work? Is it meaningful to compare the "quality trajectory" of a software product with the "quality trajectory" of a CPG product? If so, what normalised quality metrics apply universally? If not, should benchmarking be strictly domain-scoped? | Pre-beta |

# **11  RFC-009: Universal Release and Distribution Management**

| RFC-009  —  Universal Release and Distribution Management Status: Open for Comment   Domain: Release |
| :---- |

Release management governs the promotion of a solution version from development through quality gates to distribution. Distribution management governs the delivery of that released version to its consumers or channels. Both concepts apply universally across all solution types.

| Solution Type | Release Gate Types | Distribution Channel | Rollback / Recall Model |
| :---- | :---- | :---- | :---- |
| Software Application | Test, Coverage, Security, Performance, Attestation, Approval. | App store, Cloud deploy, Package registry. | Instant rollback via Blue/Green; previous version reactivation. |
| Physical Good (CPG) | Quality test, Regulatory, Stability, Shelf-life, Compliance, Approval. | Retail channels, Distribution centres, DTC. | Recall — batch identification, channel notification, physical retrieval. |
| Financial Instrument | Risk model, Compliance (MiFID II/SEC), Legal, Management approval. | Fund inception, Bloomberg, Exchange listing. | Product suspension — investor notification, redemption window. |
| Tax Solution | Rule validation, Jurisdiction test, Legal review, Effective date gate. | Software update channel, API update, Portal publish. | Rule rollback to prior version; jurisdiction override. |
| Agricultural Solution | Field trial, Regulatory (EPA/EFSA), Safety, Seasonal timing. | Farm deployment, AgriRetailer, Direct to farmer. | Solution rollback, field protocol update, advisory withdrawal. |
| Consulting Service | Content review, Legal, Partner sign-off, Client pilot approval. | Service catalogue, Sales enablement, Client delivery. | Version revert, engagement protocol update. |
| Research Asset | Peer review, Data validation, Reproducibility check, IRB approval. | Publication, Data repository, Open source. | Retraction notice, dataset version revert. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-REL-001 | The release gate framework currently defines mandatory gates as platform defaults. For non-software solution types, the mandatory gates will be domain-specific (a CPG release must have a Regulatory Gate; a software release must have a Security Gate). Should mandatory gates be defined by Domain Packs, configurable per solution type, or hardcoded per category? | Pre-beta |
| Q-REL-002 | For physical goods, "rollback" is a physical recall — a fundamentally different operation from a software deployment reversal. Should Qala model Recall as a specialised workflow distinct from software Rollback, with its own event types, notification templates, and regulatory reporting obligations? | Pre-beta |
| Q-REL-003 | Some releases have hard external effective dates (tax rule changes, regulatory compliance deadlines, legislative effective dates). Should the release pipeline support "effective date gates" that hold a release in a deployed-but-inactive state until a scheduled activation timestamp? | Pre-beta |
| Q-REL-004 | For distributed physical goods, the "distribution record" must track which specific batch went to which specific retailer/distributor/consumer. How granular should Qala's distribution tracking be, and how should it integrate with retail supply chain systems (GS1 EPCIS, EDI)? | Pre-GA |

# **12  RFC-010 to RFC-017: Domain Extension RFCs**

*These RFCs address the design of Domain Packs for each major industry and solution category. Each RFC identifies the key open questions that must be resolved before the Domain Pack can be built.*

| RFC-010  —  Physical Goods, CPG and Manufacturing Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-CPG-001 | Should Qala natively support GS1 barcodes, GTIN identifiers, and GS1 EPCIS event format as the identity and traceability standard for CPG and physical goods solutions, enabling direct integration with retailer supply chain systems without custom integration work? | Pre-beta |
| Q-CPG-002 | Recall management for physical goods involves regulatory notification (FDA MedWatch, EFSA RASFF, country-specific portals), supply chain partner notification, and consumer notification — all with regulatory time windows. Should Qala's recall workflow have built-in regulatory notification connectors, or treat notification as a generic distribution event? | Pre-beta |
| Q-CPG-003 | For pharmaceutical products, 21 CFR Part 11 requires qualified electronic signatures and validated audit trails beyond Qala's standard audit model. Should Qala offer a "Part 11 Mode" that applies enhanced signature, audit, and validation requirements to a specific SDE or Solution Factory? | Pre-GA |
| Q-CPG-004 | Product Line governance requires cascading change impact: changing a shared ingredient affects all products in the line. Should Qala's CCR workflow automatically compute and surface affected solutions when a component-level change is proposed, before the CCR is approved? | Pre-beta |

| RFC-011  —  Financial, Investment and Capital Solution Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-FIN-001 | Financial regulators (SEC, FCA, ESMA) may conduct examinations and request access to governance evidence. Should Qala support a "Regulator Access" RBAC role that grants time-limited, read-only access to a scoped subset of governance and audit records — with the access itself fully audited? | Pre-GA |
| Q-FIN-002 | Investment mandates and financial product terms are legal documents with version histories and amendment schedules. Should Qala's Document Registry (part of the Artefact Registry) support legal document types with redlining, amendment tracking, and electronic signature integration? | Pre-beta |
| Q-FIN-003 | Trading algorithms require a "paper trading" (simulation) stage before live deployment, analogous to a staging environment for software. Should Qala's deployment pipeline support a built-in "simulation stage" type for financial algorithm solutions that runs the algorithm against a market data replay before live activation? | Pre-beta |
| Q-FIN-004 | For tax solutions, the release pipeline must guarantee activation on the legislative effective date — not before, not after. What is the platform mechanism for effective-date-gated activation? How should the system handle the failure scenario where a tax rule set fails its validation gate hours before a mandatory effective date? | Pre-beta |

| RFC-012  —  Agricultural and Agribusiness Solution Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-AGRI-001 | Agricultural solutions include IoT edge deployments (sensors, drones, irrigation controllers) that may operate for months in disconnected environments. What is the OTA update governance model for field-deployed agricultural IoT solutions? How should Qala manage the pipeline for building, testing, and releasing firmware to edge devices with unreliable connectivity? | Pre-beta |
| Q-AGRI-002 | Farm-to-consumer traceability data (crop origin, field coordinates, treatment records, cold chain events) is increasingly required by retailers (Walmart Produce Traceability Initiative) and regulators (EU FIC Regulation). Should Qala provide a native "provenance QR code" export capability that generates a consumer-scannable traceability summary for any agricultural solution batch? | Pre-GA |
| Q-AGRI-003 | Agricultural release cycles are fundamentally calendar-driven (planting season, harvest season, regulatory annual windows). Should Qala's release management support calendar-anchored release scheduling as a first-class feature, where a release is planned relative to a seasonal milestone rather than a continuous deployment cadence? | Pre-beta |

| RFC-013  —  Tools, Toolchains, Libraries, Packages and SDK Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-TOOL-001 | When a library or package publishes a breaking change, all downstream consumers are affected. Should Qala automatically identify all SDEs, pipelines, and solutions that consume a given library version, and generate a migration impact report and optionally draft consumer notification messages? | Pre-GA |
| Q-TOOL-002 | Should Qala's Tool Registry double as a community-discoverable tool marketplace where verified tools from any organisation can be published, rated, and adopted? This requires a moderation model, a trust scoring system, and a security verification programme for community-contributed tools. | Post-GA |
| Q-TOOL-003 | Should Qala generate a full SBOM (Software Bill of Materials) not just for software solutions but for every solution type — listing all tools, libraries, services, data sources, and physical inputs the solution depends on? A "Universal Bill of Materials" could be a significant compliance and supply chain transparency contribution. | Pre-beta |

| RFC-014  —  Service, Consulting and Professional Services Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-SVC-001 | Consulting engagements produce client-confidential deliverables. How should Qala support knowledge capture from confidential engagements for institutional learning — while enforcing client confidentiality? Should Qala support "anonymised knowledge extraction" where engagement learnings are captured with client identifiers removed? | Pre-beta |
| Q-SVC-002 | Service delivery quality metrics (NPS, SLA adherence, outcome achievement) come from external systems (CRM, survey platforms, ticketing systems). Should Qala provide a universal Quality Event Ingestion API that accepts quality metrics from any external system, enabling managed services and consulting firms to benchmark quality without migrating their existing tools? | Pre-alpha build |
| Q-SVC-003 | Should Qala support a "Service Catalogue" solution type — a managed collection of versioned, approved service offerings — as a first-class entity distinct from individual Service solutions? A Service Catalogue has its own governance (catalogue publication approval), versioning (catalogue version), and distribution (who can access the catalogue). | Pre-beta |

| RFC-015  —  Business, Process and Operational Solution Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-BIZ-001 | Business solutions are described in process modelling languages (BPMN, ArchiMate) and natural language documents — not code. Should Qala's SDE and Artefact Registry natively support process model artefact types (BPMN XML, ArchiMate files, Lucidchart exports) with version control and diff comparison, treating them as first-class artefacts equivalent to code? | Pre-alpha build |
| Q-BIZ-002 | Measuring the "quality" of a business solution requires telemetry from the operational environment (process execution time, error rates, adoption metrics) — data that lives in ERP, BPM, and analytics systems outside Qala. Should Qala define a standard operational outcome metrics ingestion model for business solutions, analogous to how software solutions emit metrics to Prometheus? | Pre-beta |

| RFC-016  —  Research, Academic and Scientific Solution Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-RES-001 | Research datasets can be terabytes to petabytes. The Artefact Registry stores metadata and checksums, not the data itself. Should Qala define a "Dataset Pointer" artefact type that stores a verified reference (URL \+ checksum \+ access credentials) to externally stored datasets (AWS S3, institutional repositories, Zenodo, CERN), while maintaining version integrity through the platform? | Pre-beta |
| Q-RES-002 | Academic peer review is the quality gate for research publications. Should Qala model peer review as a specialised multi-stage approval workflow in the Release Management system, with stages for submission, editorial desk review, peer assignment, reviewer reports, author response, and final decision? | Pre-beta |

| RFC-017  —  Legal, Tax and Regulatory Solution Domain Extension Status: Open for Comment   Domain: Domain Extension |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-LEG-001 | Legal and tax solutions change in response to external legislative events — changes initiated outside the organisation. Should Qala integrate with regulatory monitoring services (Thomson Reuters, Bloomberg Law, Wolters Kluwer) to automatically detect relevant legislative changes and generate pre-populated CCRs for the affected solution? This would make regulatory change governance proactive. | Post-GA |
| Q-LEG-002 | Legal solutions often exist in jurisdiction-specific variants of a common base (a contract template with local law governing clauses per jurisdiction). Should Qala's solution model support "localised variants" — instances of a solution that share a common base but differ in jurisdiction-specific attributes — with governed variant creation, change propagation from base to variants, and variant-specific release management? | Pre-beta |

# **13  RFC-018: Universal Compliance Framework Architecture**

| RFC-018  —  Universal Compliance Framework Architecture Status: Open for Comment   Domain: Compliance |
| :---- |

The Universal Compliance Engine must support dozens of regulatory frameworks across all domains from a single, modular, configurable architecture. The goal is continuous compliance — not periodic audits.

| Regulatory Framework | Domain | Automation Potential | Key Evidence Qala Generates |
| :---- | :---- | :---- | :---- |
| SOC 2 Type II | Software / Cloud | 80%+ automatable | Access logs, change records, incident records, availability metrics, backup records. |
| ISO 27001 | All domains | 70%+ automatable | Risk assessments, audit logs, policy evidence, asset inventory, change records. |
| GDPR / CCPA | All with personal data | 75%+ automatable | PII classification, consent records, access logs, deletion records, data mapping. |
| SLSA Level 1–4 | Software build | 99%+ automatable | Build attestations, dependency digests, environment definitions, signer identity. |
| FDA 21 CFR Part 11 | Pharma / Medical Devices | 50% automatable | Electronic signatures, audit trail completeness, data integrity, validation records. |
| FDA GMP / cGMP | CPG / Pharma / Food | 40% automatable | Batch records, equipment calibration, change control records, training records. |
| MiFID II | Financial Services | 55% automatable | Trade audit trail, best execution records, product governance evidence. |
| Basel III / IV | Banking | 45% automatable | Risk model documentation, capital calculation audit, stress test records. |
| Solvency II | Insurance | 45% automatable | Actuarial model governance, capital model documentation, risk audit. |
| FedRAMP / NIST 800-53 | Government / Public Sector | 50% automatable | Security control evidence, scan results, configuration records, change management. |
| REACH / EU CSRD | Manufacturing / CPG | 40% automatable | Substance records, supply chain provenance, sustainability data, substance history. |
| IFRS 9 / GAAP | Financial Reporting | 20% automatable | Accounting policy evidence, model documentation, financial audit trail. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-COMP-001 | Should Qala build its own compliance evidence mapping engine (mapping platform events to specific control requirements per framework), or partner with an established GRC platform (ServiceNow GRC, Archer, OneTrust) as the compliance reporting layer? Own engine provides tighter integration and lower cost for customers; GRC partnership leverages existing compliance expertise and reduces build scope. | Pre-GA |
| Q-COMP-002 | For non-software domains, compliance frameworks often require manual evidence that Qala cannot generate automatically (physical laboratory inspections, qualified person signatures, physical plant audits). Should Qala support "hybrid compliance evidence" — combining automatically generated platform evidence with manually uploaded evidence from physical processes — in a single compliance report? | Pre-beta |
| Q-COMP-003 | Should Qala publish "Compliance Packs" as an ecosystem product — versioned, community-contributable compliance evidence mappings for specific frameworks — that can be licensed or contributed by regulatory intelligence firms and compliance specialists? | Post-GA |

# **14  RFC-019 to RFC-022: Integration, Multi-Tenancy, Identity and Strategy**

| RFC-019  —  Physical World Integration: ERP, MES, LIMS and IoT Bridges Status: Open for Comment   Domain: Integration |
| :---- |

For non-software solution types, Qala manages the information layer. The physical production systems (SAP ERP, Siemens MES, LabVantage LIMS, Honeywell DCS, Plex MES) manage the production layer. Integration is critical and must be an open, governed, auditable API model.

| Integration Category | Systems | Integration Pattern | Data Direction |
| :---- | :---- | :---- | :---- |
| ERP Integration | SAP S/4HANA, Oracle ERP, Microsoft Dynamics | Bidirectional — Qala solution records sync with ERP product records; ERP sends production events to Qala. | Qala \-\> ERP: specification releases. ERP \-\> Qala: batch records, production events. |
| MES Integration | Siemens SIMATIC, Plex, Rockwell | Unidirectional from MES to Qala — production execution events published to Qala event bus. | MES \-\> Qala: batch start/complete, quality check events, equipment calibration records. |
| LIMS Integration | LabVantage, STARLIMS, LabWare | Bidirectional — Qala sends test requests; LIMS returns results as quality events. | Qala \-\> LIMS: test requests on solution release. LIMS \-\> Qala: test results, CoA. |
| IoT / Edge Integration | AWS IoT, Azure IoT Hub, Particle | Event stream — device telemetry ingested via IoT platform pre-aggregation; device firmware managed via Qala pipeline. | IoT Platform \-\> Qala: telemetry, alerts. Qala \-\> Devices: firmware OTA via pipeline. |
| Supply Chain / Logistics | SAP TM, Oracle TMS, Manhattan | Unidirectional from logistics to Qala — distribution events published to Qala for provenance tracking. | Logistics \-\> Qala: shipment events, handoff records, cold chain data. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-INT-001 | Should Qala publish an open "Physical World Integration API" specification that any ERP/MES/LIMS/IoT vendor can implement to emit standardised events to Qala? Or should Qala build and maintain specific point-to-point integration connectors for major systems (SAP, Oracle, Siemens)? Open spec enables ecosystem breadth; point-to-point integrations enable faster enterprise deals. | Pre-GA |
| Q-INT-002 | For IoT integration, agricultural and industrial IoT deployments may generate millions of telemetry events per second. Should Qala's event bus directly accept IoT telemetry, or require an intermediate IoT platform (AWS IoT, Azure IoT Hub) for aggregation, filtering, and pre-processing before events reach the Qala bus? | Pre-beta |
| Q-INT-003 | Physical world integration events (batch records, production events, quality test results) arrive from external systems that Qala does not control. How should these external events be authenticated, provenance-verified, and integrated into the immutable audit trail without compromising the integrity of the platform's own event record? | Pre-alpha build |

| RFC-020  —  Multi-Tenancy, Tenant Isolation and Cross-Tenant Sharing Status: Open for Comment   Domain: Platform |
| :---- |

| Isolation Tier | Model | Regulatory Context | Cost Tier |
| :---- | :---- | :---- | :---- |
| Community | Shared infrastructure, logical isolation via tenant\_id. | Consumer/hobbyist. No material regulation. | Lowest — free or low-cost tier. |
| Standard | Shared compute, isolated databases (Row-Level Security). | SMB, non-regulated professional use. | Mid — standard subscription. |
| Professional | Isolated Kubernetes namespace \+ isolated database. | Mid-market, SOC 2 / ISO 27001 required. | Higher — professional subscription. |
| Enterprise | Dedicated cluster or VPC. Complete data plane isolation. | Enterprise, HIPAA, MiFID II, government. | Highest — enterprise contract. |
| Sovereign | Customer-managed cloud or on-premises Qala deployment. | National data sovereignty, air-gap required. | Custom — sovereign deployment contract. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-MT-001 | For supply chain traceability use cases, two separate tenant organisations (a supplier and a buyer) need to share solution traceability records — a supplier's batch records must be visible to the buyer's solution. How should cross-tenant data sharing be implemented with selective visibility, governed consent, and full audit of what was shared, when, and with whom? | Pre-GA |
| Q-MT-002 | Should Qala operate a "public namespace" — a space outside tenant boundaries where open-source libraries, public domain frameworks, and community-contributed resources can be published and consumed by any tenant without cross-tenant trust agreements? | Pre-beta |

| RFC-021  —  Identity, RBAC and Electronic Signature Architecture Status: Open for Comment   Domain: Security |
| :---- |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-IAM-001 | Non-software personas (CPG Product Developer, Farm Operations Manager, Financial Compliance Officer, Tax Product Manager) have fundamentally different task contexts from software developers. Should the RBAC model include "Persona Profiles" that map roles to simplified, domain-specific portal views — hiding platform capabilities irrelevant to the persona without restricting their actual permissions? | Pre-beta |
| Q-IAM-002 | For regulated domains (pharma under 21 CFR Part 11, financial under MiFID II, legal under eIDAS), electronic signatures with non-repudiation properties are required for specific approval actions. Should Qala support a "Qualified Electronic Signature" integration option using ETSI standards (PAdES, XAdES) or third-party e-signature providers (DocuSign, Adobe Sign) for high-assurance approval workflows? | Pre-GA |
| Q-IAM-003 | Service-to-service authentication within the platform is proposed to use SPIFFE/SPIRE workload identity (mTLS with short-lived X.509 SVIDs). Is this the right choice given SPIFFE's operational complexity relative to shared-secret JWT? What is the minimum viable service identity model for the initial release? | Pre-alpha build |

| RFC-022  —  Open Source, Ecosystem and Commercialisation Strategy Status: Open for Comment   Domain: Strategy |
| :---- |

| Component | Proposed Model | Strategic Rationale |
| :---- | :---- | :---- |
| Universal Solution Model Schema | Open Standard (Apache 2.0) | Maximum ecosystem adoption. Enable third-party tooling. Prevent proprietary lock-in. |
| Platform Kernel | Open Source (Apache 2.0) | Community trust, security auditability, platform stability contributions. |
| CI/CD Engine | Open Source (Apache 2.0) | Broad developer adoption. Rich integration ecosystem. |
| Domain Extension Framework | Open Source (Apache 2.0) | Enable community Domain Pack contributions. Third-party vertical extensions. |
| Domain Packs (core verticals) | Open Source, community-governed | Core domain packs (Software, CPG, Financial, Agricultural, Services) as community assets. |
| AI Agent | Proprietary \+ Partner API | Core commercial differentiator. API access for partner integrations at premium tier. |
| Security Engine (SEM) | Proprietary | Security-critical. Controlled update cadence. Commercial differentiator. |
| Compliance Reporting Engine | Proprietary \+ Compliance Pack API | Compliance IP. Partner licensing model for GRC firms. |
| Enterprise Governance Tier | Proprietary | Advanced RBAC, CCB workflow, policy engine, multi-region — enterprise SKU. |

| Q-ID | Open Question — Requires Decision | Decision By |
| :---- | :---- | :---- |
| Q-OSS-001 | Should Qala establish the Universal Solution Model Schema as an open standard governed by an independent foundation (similar to OpenAPI under the OpenAPI Initiative, or AsyncAPI under its own foundation)? Vendor-neutral governance maximises ecosystem trust and adoption but reduces Qala's control over the standard's evolution. | Pre-GA |
| Q-OSS-002 | Should Qala establish a "Domain Pack Marketplace" — a governed registry where third parties (industry consultancies, standards bodies, regulatory agencies, domain experts) can publish, certify, and distribute domain packs? What is the quality assurance, certification, and commercial model for third-party domain packs? | Post-GA |
| Q-OSS-003 | The open source components will attract enterprise deployments that self-host. How should Qala differentiate between self-hosted (open source) and cloud-managed (SaaS) deployments to maintain commercial viability? Should the SaaS tier offer exclusive capabilities unavailable in the open source version, or compete solely on managed service convenience? | Pre-GA |

# **15  Comment Submission and Review Process**

| Step | Description | Timeline |
| :---- | :---- | :---- |
| 1\. Submit Comment | Submit via issue tracker or document annotation. Reference RFC ID and Question ID in every comment. | Days 1–30 |
| 2\. Triage | Architecture Review Board categorises: Accepted / Needs Discussion / Declined / Out of Scope. | Days 31–37 |
| 3\. ARB Sessions | Open RFC discussion sessions for complex or contested questions. Community observers welcome. | Days 38–44 |
| 4\. Decisions | Every open question receives a documented decision with full rationale. Dissenting views recorded. | Days 45–51 |
| 5\. RFC Update | Document updated with all decisions. Status per RFC set to Accepted / Modified / Withdrawn. | Days 52–60 |
| 6\. Design Lock | Accepted RFCs locked. Decisions cascade to SDD v3.0, Domain Pack specifications, and sprint planning. | Day 61+ |

*End of Document  —  Qala Universal Solution Management OS  |  RFC  v2.0*