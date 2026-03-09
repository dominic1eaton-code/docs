**UME**

Organisation / Business Operating System

**Platform Requirements Document**

─────────────────────────────────────────

Document ID: UME-PRD-001  |  Version: 2.0.0

Status: Updated — OrgOS Factory Integration  |  Date: March 2026

Scope: OrgOS Factory Capabilities · Actor Governance · SDO · OrgDNA · DAO/DLT Infrastructure

# **Summary of v2.0.0 Updates**

This document updates the UME Platform Requirements to reflect the OrgOS Factory model. All v1.0.0 requirements remain in force. New platform-level requirements are added for the OrgOS provisioner, ODD subsystem, SDO engine, OrgDNA system, and DAO/DLT infrastructure.

| Change Area | v1.0.0 Concept | v2.0.0 Updated Concept | Impact |
| :---- | :---- | :---- | :---- |
| Platform Model | UME is a Business OS platform | UME is an OrgOS Factory — a meta-OS that produces and manages OrgOS instances for any organisation | Fundamental: changes the positioning and architecture narrative throughout |
| Module Layer | Organisation Modules (KernelModule trait) | OrgApps (OrgApp trait extending KernelModule) — user-facing applications managing an organisation | Backward-compatible: OrgApp extends KernelModule; all existing modules remain valid |
| Device Drivers | KernelDeviceDriver (external system adapters) | Dual model: (1) KernelDeviceDriver for external systems; (2) ODD (OrgDeviceDriver) for actors (humans/AI/devices) | Additive: ODD is new; existing DeviceDriver pattern unchanged |
| Actor Model | Users and external systems | Unified actor model: OrgExecs (humans/AI/hybrid) \+ OrgCPUs (machines/IoT), all governed by ODD contracts | New: no prior equivalent; replaces implicit user model with explicit actor governance |
| Organisation State | Org data in modules | SDO — Software Defined Organisation as live digital twin of the org | Additive: SDO is new aggregate view; does not change individual OrgApp data models |
| Configuration | Static KernelConfig | OrgDNA — versioned, exportable, replicable master config package | Additive: OrgDNA wraps existing config; enables cloning and franchising |
| Multi-Org | Not supported | DAO — network of OrgOS instances under shared smart contract governance on DLT | New: DAO and DLT are new modules; single-org deployments unchanged |
| Organisational Memory | Audit chain (within single org) | OrgMemory \= local audit chain (single org) \+ DLT (cross-org DAO) | Additive: DLT extends the existing audit chain concept to inter-org scope |

# **1\. OrgOS Factory Platform Requirements**

| Req ID | Requirement | Category | Priority |
| :---- | :---- | :---- | :---- |
| PRD-OS-01 | The platform SHALL provision a new OrgOS instance from an OrgDNA template in less than 90 seconds | Provisioning | MUST |
| PRD-OS-02 | The platform SHALL support at least 10,000 concurrent OrgOS instances on shared cloud infrastructure | Scale | MUST |
| PRD-OS-03 | Each OrgOS instance SHALL be fully isolated: no data leakage between org\_id scopes under any conditions | Isolation | MUST |
| PRD-OS-04 | The platform SHALL maintain a versioned OrgDNA history for every managed OrgOS instance | Config Management | MUST |
| PRD-OS-05 | The platform SHALL support OrgOS instance rollback to any prior OrgDNA version within 5 minutes | Recovery | MUST |
| PRD-OS-06 | The OrgApp marketplace SHALL provide a published OrgApp SDK with ODD integration requirements | Ecosystem | SHOULD |
| PRD-OS-07 | The platform SHALL support all four OrgOS deployment topologies: shared cloud, dedicated cloud, on-premises, hybrid | Deployment | MUST |

# **2\. ODD Subsystem Requirements**

| Req ID | Requirement | Category | Priority |
| :---- | :---- | :---- | :---- |
| PRD-ODD-01 | The ODDBus SHALL validate every OrgExec action against its current ODD contract before execution | Enforcement | MUST |
| PRD-ODD-02 | ODD validation SHALL complete within 5ms at p99 with no database round-trips in the hot path | Performance | MUST |
| PRD-ODD-03 | The platform SHALL support all four OrgExec types: Human, AI Agent, Hybrid, and OrgCPU | Actor Model | MUST |
| PRD-ODD-04 | ODD contracts SHALL be versioned; updating a contract SHALL NOT interrupt in-flight operations | Lifecycle | MUST |
| PRD-ODD-05 | All ODD violations SHALL be recorded in the audit chain and surfaced in the ODD violation log | Audit | MUST |
| PRD-ODD-06 | Escalation decisions from ODDs SHALL route to the designated OrgExec within 30 seconds | Escalation | MUST |
| PRD-ODD-07 | AI Agent OrgExecs SHALL be subject to identical ODD enforcement as human OrgExecs | Parity | MUST |
| PRD-ODD-08 | OrgCPUs SHALL support ODD-governed data reporting at up to 10,000 messages per second per OrgOS | IoT Scale | SHOULD |

# **3\. SDO & Digital Twin Requirements**

| Req ID | Requirement | Category | Priority |
| :---- | :---- | :---- | :---- |
| PRD-SDO-01 | The SDOEngine SHALL update the digital twin within 500ms of any OrgApp domain event at p95 | Freshness | MUST |
| PRD-SDO-02 | The SDO topology graph SHALL represent all active OrgApps, OrgExecs, OrgCPUs, and their data flow edges | Completeness | MUST |
| PRD-SDO-03 | The SDO health score SHALL be computed from KRI breaches, ODD violations, OrgApp errors, and compliance status | Health Metric | MUST |
| PRD-SDO-04 | The OrgSimulator SHALL support at least 5 parameterisable scenario variables and return results in \<30 seconds | Simulation | SHOULD |
| PRD-SDO-05 | The SDO snapshot SHALL be exportable as part of the OrgDNA package for cloning and simulation baseline | Export | MUST |

# **4\. OrgDNA Requirements**

| Req ID | Requirement | Category | Priority |
| :---- | :---- | :---- | :---- |
| PRD-DNA-01 | Every OrgOS configuration change SHALL produce a new immutable OrgDNA version | Versioning | MUST |
| PRD-DNA-02 | An OrgDNA package SHALL fully describe the OrgOS such that a new instance can be provisioned from it alone | Completeness | MUST |
| PRD-DNA-03 | The maximum serialised OrgDNA package size SHALL not exceed 10MB excluding transactional data | Size | MUST |
| PRD-DNA-04 | OrgDNA import SHALL apply changes as a diff against the current version; no full re-provision required | Import | SHOULD |
| PRD-DNA-05 | The platform SHALL validate OrgDNA integrity (all dependencies satisfied, config valid) before applying | Validation | MUST |

# **5\. DAO & DLT Infrastructure Requirements**

| Req ID | Requirement | Category | Priority |
| :---- | :---- | :---- | :---- |
| PRD-DAO-01 | The DLT layer SHALL use a permissioned consensus mechanism supporting up to 100 DAO member nodes | Consensus | MUST |
| PRD-DAO-02 | Inter-org DLT transactions SHALL confirm within 5 seconds under normal network conditions | Latency | MUST |
| PRD-DAO-03 | All DLT blocks SHALL be cryptographically signed by the submitting OrgOS and verifiable by all members | Integrity | MUST |
| PRD-DAO-04 | Smart contracts SHALL execute automatically when trigger conditions are met with no manual intervention | Automation | MUST |
| PRD-DAO-05 | The DAO governance engine SHALL enforce quorum requirements before executing approved decisions | Governance | MUST |
| PRD-DAO-06 | OrgDNA broadcasts in a DAO SHALL reach all member OrgOS instances within 60 seconds | Distribution | MUST |
| PRD-DAO-07 | A DAO member leaving the DAO SHALL trigger smart contract exit terms automatically | Exit Handling | MUST |
| PRD-DAO-08 | The DLT ledger SHALL be queryable by any DAO member for the full transaction history | Transparency | MUST |

# **Appendix: Concept Reference**

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

