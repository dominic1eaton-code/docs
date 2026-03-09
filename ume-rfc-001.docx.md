**UME**

Organisation / Business Operating System

**Request for Comments: UME Organisation Operating System**

─────────────────────────────────────────

Document ID: UME-RFC-001  |  Version: 2.0.0

STATUS: UPDATED — OrgOS Factory \+ ODD \+ SDO \+ DAO/DLT Extensions  |  March 2026

Scope: Architecture · Module Protocol · ODD Protocol · SDO Spec · DAO/DLT Spec · Extension Model

| Abstract (Updated) This RFC defines the UME Organisation Operating System in its second major version. It extends the v1.0.0 specification (kernel architecture, KernelModule protocol, RBAC, event bus, storage, and audit chain) with: (1) OrgOS Factory Model: UME as a meta-OS producing OrgOS instances; (2) OrgApp Protocol: extension of KernelModule with OrgDNA and marketplace integration; (3) ODD Protocol: OrgDeviceDriver specification governing all OrgExec/OrgCPU actors; (4) SDO Specification: Software Defined Organisation digital twin architecture; (5) OrgDNA Specification: master configuration package format and lifecycle; (6) DAO/DLT Specification: inter-OrgOS cooperation, smart contracts, and distributed ledger. All v1.0.0 specifications remain valid and are amended by this document. |
| :---- |

# **1\. Motivation for v2.0.0**

The v1.0.0 RFC defined UME as a single Business OS. Field research and design iteration revealed that the more accurate and powerful framing is an OrgOS Factory: a platform that produces, manages, and connects Organisation Operating Systems. This reframing unlocks three major capabilities absent from v1.0.0:

| Capability Gap | v1.0.0 Limitation | v2.0.0 Solution |
| :---- | :---- | :---- |
| Actor Governance | Users and external systems treated as undifferentiated actors; no formal contract for AI agents or IoT devices | ODD (OrgDeviceDriver) protocol provides a uniform, enforceable contract for all actor types |
| Organisational Intelligence | Org state fragmented across modules; no unified view or simulation capability | SDO (Software Defined Organisation) provides a live digital twin with simulation and optimisation |
| Configuration Portability | Org config locked in a single deployment; cannot be reliably cloned or shared | OrgDNA is the exportable master config; enables franchise deployment, templating, and DAO coordination |
| Multi-Org Cooperation | Each UME instance operates in isolation; no mechanism for inter-org governance | DAO & DLT module provides smart contract governance and shared distributed ledger for any group of orgs |

# **2\. OrgApp Protocol Specification**

This section amends §4 (Module Protocol) of RFC UME-001 v1.0.0.

## **2.1 OrgApp Trait (extends KernelModule)**

All KernelModule requirements remain in force. The following additional requirements apply to all OrgApps:

| MUST/SHOULD | Requirement |
| :---- | :---- |
| MUST | Implement OrgApp trait (which extends KernelModule); both traits required |
| MUST | Implement to\_orgdna\_component() returning a serialisable OrgDNAComponent snapshot of all configurable state |
| MUST | Implement from\_orgdna\_component() capable of restoring full configuration from an OrgDNAComponent |
| MUST | Implement config\_schema() returning a JSON Schema describing all configurable parameters |
| MUST | Implement odd\_capability\_grants() listing all capabilities this OrgApp can grant to OrgExecs |
| MUST | Implement validate\_odd\_action() to enforce OrgApp-specific ODD rules on top of ODDBus enforcement |
| MUST | Implement sdo\_state() returning a current-state snapshot for the SDO engine |
| SHOULD | Implement sdo\_topology\_nodes() returning SDO topology nodes for nodes owned by this OrgApp |
| MUST | Implement marketplace\_metadata() with app name, description, category, tier, version, icon URI |

## **2.2 Breaking Changes from v1.0.0**

No breaking changes. OrgApp extends KernelModule; existing KernelModule implementations remain valid but SHOULD be updated to implement the full OrgApp trait by Milestone 2\.

# **3\. ODD Protocol Specification**

This is a new specification with no v1.0.0 predecessor. All platforms claiming UME compliance after v2.0.0 MUST implement the ODD protocol.

## **3.1 ODD Conformance Requirements**

| MUST/SHOULD | Requirement |
| :---- | :---- |
| MUST | Every OrgExec and OrgCPU registered in an OrgOS MUST have exactly one active ODD contract |
| MUST | The ODDBus MUST validate every OrgExec-originated action against the actor's ODD before execution |
| MUST | ODD contracts MUST specify: odd\_id, odd\_version, exec\_type, at least one capability, all applicable constraints, data\_access grants, audit\_config |
| MUST | ODD validation MUST complete synchronously with p99 latency \<5ms; no blocking I/O permitted in the hot path |
| MUST | All ODD decisions (Allow, Deny, Escalate) MUST be recorded in the audit chain |
| MUST | ODD violations MUST be surfaced in the ODD violation log accessible to authorised OrgExecs |
| MUST | Escalation rules MUST route to a reachable human OrgExec within the configured timeout |
| MUST | AI Agent OrgExecs MUST be subject to identical ODD enforcement as Human OrgExecs; no AI exemptions |
| SHOULD | ODD contracts SHOULD be versioned using semantic versioning; updates SHOULD preserve minor version compatibility |
| SHOULD | ODD templates for common actor types (FTE, contractor, AI agent, IoT device) SHOULD be included in OrgDNA |

## **3.2 ODD Lifecycle**

| State | Transitions | Conditions |
| :---- | :---- | :---- |
| Draft | → Active | ODD signed off by authorised OrgExec; all required fields present; validation passes |
| Active | → Suspended | Manual action by admin; or automatic on ODD violation threshold breach |
| Active | → Expired | expires\_at timestamp reached; actor cannot take any actions until ODD renewed |
| Suspended | → Active | Admin review and reinstatement; may require ODD amendment |
| Active | → Superseded | New ODD version activated; old version archived in history |

# **4\. SDO Specification**

## **4.1 SDO Conformance Requirements**

| MUST/SHOULD | Requirement |
| :---- | :---- |
| MUST | Every OrgOS MUST maintain an SDOEngine that reflects the current state of all active OrgApps, OrgExecs, and OrgCPUs |
| MUST | The SDO topology graph MUST be updated within 500ms of any domain event at p95 |
| MUST | The SDO MUST be queryable by authorised OrgExecs for topology, state, and history |
| MUST | The SDO history MUST be backed by the immutable audit chain; no SDO state may be modified retroactively |
| SHOULD | The SDO SHOULD provide an OrgSimulator interface for what-if scenario analysis |
| SHOULD | The SDO SHOULD provide an OrgOptimiser that surfaces AI-generated improvement recommendations |
| MUST | The SDO state MUST be exportable as part of the OrgDNA snapshot |

# **5\. OrgDNA Specification**

## **5.1 OrgDNA Conformance Requirements**

| MUST/SHOULD | Requirement |
| :---- | :---- |
| MUST | Every OrgOS MUST maintain a current OrgDNA version in persistent storage |
| MUST | Every configuration change to an OrgOS MUST produce a new immutable OrgDNA version |
| MUST | An OrgDNA package MUST be sufficient to provision a new OrgOS instance from scratch |
| MUST | OrgDNA versions MUST use semantic versioning; breaking changes MUST increment the major version |
| MUST | OrgDNA import MUST validate integrity before applying; partial imports are not permitted |
| SHOULD | OrgDNA packages SHOULD be serialisable to both TOML (human-readable) and compact binary (network transfer) |
| MUST | Sensitive data (transactional records, personal data) MUST NOT be included in OrgDNA packages by default |

# **6\. DAO & DLT Specification**

## **6.1 DAO Conformance Requirements**

| MUST/SHOULD | Requirement |
| :---- | :---- |
| MUST | A DAO MUST consist of at least two OrgOS instances with independent OrgKernels |
| MUST | All inter-DAO transactions MUST be recorded on the shared DLT as immutable blocks |
| MUST | Smart contracts MUST execute automatically when trigger conditions are met, without human intervention per execution |
| MUST | The DLT MUST use a consensus mechanism that prevents any single member from unilaterally modifying the ledger |
| MUST | Governance votes MUST be recorded on the DLT; approved decisions MUST execute automatically on quorum |
| MUST | A DAO member MAY leave the DAO; exit smart contract terms MUST execute on departure |
| SHOULD | The DLT SHOULD support optional anchoring to a public blockchain for notarisation and public auditability |
| MUST | OrgDNA broadcasts within a DAO MUST be cryptographically signed by the publishing org and verifiable by all members |

# **7\. Open Questions (v2.0.0)**

| Question ID | Question | Options Under Consideration |
| :---- | :---- | :---- |
| OQ-01 | What consensus mechanism should be the default for DAOs with \>100 members? | Tendermint BFT | HotStuff | Raft (for non-Byzantine) | Switchable per DAO |
| OQ-02 | Should AI Agent OrgExecs be permitted to modify their own ODD constraints? | Never permitted | Permitted within bounds set by human OrgExec | Permitted with dual human approval |
| OQ-03 | Should OrgDNA packages be publishable to the public marketplace without review? | Self-service with automated security scan | Curated review process | Both (verified vs. community tiers) |
| OQ-04 | Should the DLT support public blockchain anchoring by default or as opt-in? | Default off, opt-in per DAO | Default on for DAOs with \>10 members | Always off (internal only) |
| OQ-05 | What is the right model for OrgCPU (IoT) fault handling in the ODD? | Best-effort with fallback | Strict: ODD violation on miss | Configurable per ODD instance |

# **Appendix: Full Terminology Reference**

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

