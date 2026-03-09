  
**UME**

Organization / Business Operating System

**Low-Level Software Design Specification**

──────────────────────────────────────

**Document ID:** UME-LLD-001

**Version:** 1.0.0

**Status:** Draft — Baseline

**Date:** March 2026

**Classification:** Internal — Confidential

**Language:** Rust (platform) · Java (client suite)

**Coverage:** Kernel · 42 Org Modules · API Layer · Data Architecture · Security · Deployment · SDK

# **Executive Summary**

This Low-Level Software Design Specification (LLD) provides the implementation-level design for the UME Organization Operating System. It describes every significant component, data structure, algorithm, and interface in sufficient detail for a Rust developer to implement the system without needing additional design decisions.

UME is structured as a layered Cargo workspace. The ume\_core crate defines all shared contracts and domain types. ume\_kernel provides the composition root and all subsystems. 42 organization modules in ume\_modules implement the business domains. ume\_server exposes the HTTP API. ume\_runtime provides the CLI. The Java client suite provides GUI, shell, and watch modes built on Bazel.

| Document Coverage   Section 1  — System Overview & Design Philosophy (8 architecture principles, runtime model, design patterns)   Section 2  — Crate Architecture (workspace layout, ume\_core types, UmeError taxonomy, KernelModule trait, KernelFacade)   Section 3  — Kernel Core (UmeKernel composition root, KernelConfig field reference, 14-step boot sequence)   Section 4  — Kernel Subsystems (RBAC engine, event bus, StorageManager, supervisor, audit chain, executor pools, memory regions)   Section 5  — Module Architecture (standard module structure, repository pattern, permission declarations)   Section 6  — Key Module Designs (Finance, HR, Chombo, Risk, Process/Workflow, Soko/Marketing, Security, Work)   Section 7  — API Layer (ume\_server Axum router, auth middleware, handler pattern, response envelopes, WebSocket, CLI)   Section 8  — Data Architecture (schema namespaces, multi-tenancy, schema conventions, migrations, event persistence, search)   Section 9  — Security Architecture (JWT design, crypto vault interface, input validation tiers, SQL injection prevention)   Section 10 — Device Driver Design (driver trait, storage/identity/comms/broker drivers, circuit breaker)   Section 11 — Deployment & Java Client (Docker image, Helm chart, env variables, Java client arch, SDK scaffold)   Appendix A — Complete Event Catalogue (35 domain events with payloads and subscribers)   Appendix B — Database Index Reference (all critical query path indexes)   Appendix C — Module Dependency Graph   Appendix D — Glossary |
| :---- |

| Key Design Decisions   • Single process kernel — all modules run in-process; no microservice network overhead or distributed coordination   • Trait-based abstraction everywhere — StorageDriver, IdentityDriver, CommDriver, CryptoVault are all swappable via config   • No direct module-to-module calls — all cross-module communication via event bus topics; modules are independently stoppable   • RBAC enforced in kernel facade — modules call assert\_can(); they cannot bypass authorization   • Immutable audit chain — SHA-256 chained records; any deletion or modification is cryptographically detectable   • Newtype IDs everywhere — OrgUnitId(Uuid), EmployeeId(Uuid) etc. — compile-time prevention of wrong-ID bugs   • Multi-tenancy via org\_id column — enforced unconditionally in StorageManager; no per-query opt-in required   • Three-tier input validation — serde macros → domain service validate() → database constraints |
| :---- |

# **1\. System Overview & Design Philosophy**

## **1.1 Architecture Principles**

UME is designed as a kernel-mediated organization operating system. Every architectural decision flows from eight foundational principles:

| Principle | Statement | Consequence |
| :---- | :---- | :---- |
| Kernel Mediation | No module accesses any resource directly; all I/O flows through a kernel facade | Replaceability of all backends; uniform audit and security enforcement |
| Domain Isolation | Domain crates depend only on ume\_core contracts; never on the kernel crate or other domain crates | No circular dependencies; modules are independently testable |
| Event-Driven Integration | Modules communicate via domain events on the event bus; no direct module-to-module function calls | Loose coupling; modules may be added, removed, or replaced without changing other modules |
| RBAC-First Security | Authorization is a kernel concern; modules declare permissions and rely on the kernel to enforce them | Consistent security model; no authorization gaps or bypass paths |
| Fault Isolation | A module in Error or Stopped state does not affect other modules or kernel operations | Resilience; partial degradation is always preferred to total failure |
| Immutable Audit | Audit records are append-only and cryptographically chained; no record may be modified or deleted | Non-repudiation; compliance-grade audit trail from day one |
| Composable Modules | Modules are the unit of feature delivery; any set of modules may be active without dependency conflicts | Progressive capability; organizations activate only what they need |
| Schema-First Data | All cross-module domain types are defined in ume\_core before any module implements them | Single schema definition prevents cross-module data inconsistency |

## **1.2 Runtime Architecture**

At runtime, UME is a single process containing the kernel and all active modules. External systems are accessed exclusively via registered device drivers. Multiple UME server instances may be deployed behind a load balancer for horizontal scaling.

| Runtime Component Model   ┌─────────────────────────────────────────────────────────────────────┐   │  ume\_server (HTTP API)       ume\_runtime (CLI)      Java Client     │   │         │                         │                     │           │   │         └─────────────────────────┴──────── HTTP ───────┘           │   │                                                                     │   │  ┌─────────────────────── UME Kernel ─────────────────────────┐    │   │  │  KernelCore  │  RBAC  │  EventBus  │  Executors  │  Audit  │    │   │  │  Supervisor  │  DeviceBus  │  StorageManager  │  Memory    │    │   │  │                                                             │    │   │  │  ┌──────────── Organization Modules (1–42) ──────────────┐ │    │   │  │  │  Finance │ HR │ Legal │ GRC │ Risk │ Sales │ ...      │ │    │   │  │  └──────────────────────────────────────────────────────-─┘ │    │   │  └─────────────────────────────────────────────────────────────┘    │   │                                                                     │   │  ┌──────── Device Drivers ──────────────────────────────────────┐  │   │  │  StorageDriver  │  IdentityDriver  │  CommDriver  │  Broker  │  │   │  └──────────────────────────────────────────────────────────────┘  │   │                                                                     │   │  ┌──── External Systems ─────────────────────────────────────────┐ │   │  │  PostgreSQL / SQLite  │  Redis  │  SMTP  │  NATS  │  S3      │ │   │  └───────────────────────────────────────────────────────────────┘ │   └─────────────────────────────────────────────────────────────────────┘ |
| :---- |

## **1.3 Key Design Patterns**

| Pattern | Where Used | Purpose |
| :---- | :---- | :---- |
| Newtype Wrapper | All domain IDs (OrgUnitId, EmployeeId, etc.) | Type-safe ID handling; prevents passing wrong ID type to functions |
| Builder Pattern | KernelConfig, BackupJobBuilder, CampaignBuilder | Validates invariants before object construction; ergonomic APIs |
| State Machine | Module lifecycle, workflow instances, deal stages | Explicit state transitions with side effects; prevents invalid states |
| Event Sourcing | Finance journals, GRC audit, Board resolutions | Reconstructable state from immutable event log; strong audit trail |
| CQRS (lightweight) | Analytics module | Separate read models for reporting; write models for transactions |
| Repository Pattern | All module data access | Abstracts StorageManager behind domain-typed interfaces |
| Strategy Pattern | ExecutorPool task routing, RBAC evaluators | Pluggable algorithms selected at configuration time |
| Observer / Event Bus | All cross-module communication | Decoupled publish-subscribe; no module directly calls another |
| Circuit Breaker | Driver health checks, external API calls | Prevents cascading failures on external system degradation |
| Decorator / Facade | Kernel service facades exposed to modules | Modules see a simplified, pre-authorized view of kernel services |

# **2\. Crate Architecture & Workspace Structure**

## **2.1 Workspace Layout**

UME is organized as a Cargo workspace. The dependency graph is strictly layered — higher layers depend on lower layers; no upward dependencies are permitted.

| Rust |
| :---- |
| ume/ ├── Cargo.toml                    \# workspace root ├── Cargo.lock ├── ume\_core/                     \# Layer 0: shared types, traits, errors ├── ume\_kernel/                   \# Layer 1: kernel implementation │   ├── src/ │   │   ├── lib.rs │   │   ├── kernel.rs             \# UmeKernel composition root │   │   ├── config.rs             \# KernelConfig │   │   ├── supervisor.rs         \# SupervisorEngine │   │   ├── device\_bus.rs         \# DeviceBus \+ DeviceDriver trait │   │   ├── rbac.rs               \# RbacEngine │   │   ├── event\_bus.rs          \# EventBus │   │   ├── executor.rs           \# ExecutorPool │   │   ├── memory.rs             \# MemoryManager │   │   ├── storage.rs            \# StorageManager │   │   └── audit.rs              \# LogAuditManager ├── ume\_modules/                  \# Layer 2: organization modules │   ├── ume\_admin/                \# MOD-01 Administration │   ├── ume\_analytics/            \# MOD-02 Analytics │   ├── ume\_backup/               \# MOD-03 Backup │   ├── ume\_board/                \# MOD-04 Board │   ├── ume\_bizdev/               \# MOD-05 Business Development │   ├── ume\_cms/                  \# MOD-06 Content Management │   ├── ume\_comms/                \# MOD-07 Communications │   ├── ume\_crm/                  \# MOD-08 CRM │   ├── ume\_design/               \# MOD-09 Design System │   ├── ume\_engineering/          \# MOD-10 Engineering │   ├── ume\_esg/                  \# MOD-11 ESG │   ├── ume\_enterprise/           \# MOD-12 Enterprise Mgmt │   ├── ume\_chombo/               \# MOD-13 Legal Entity (Chombo) │   ├── ume\_finance/              \# MOD-14 Finance │   ├── ume\_grc/                  \# MOD-15 GRC │   ├── ume\_hr/                   \# MOD-16 HR │   ├── ume\_investment/           \# MOD-17 Investment │   ├── ume\_it/                   \# MOD-18 IT & Assets │   ├── ume\_knowledge/            \# MOD-19 Knowledge │   ├── ume\_learning/             \# MOD-20 Learning │   ├── ume\_strategy/             \# MOD-21 Strategy │   ├── ume\_soko/                 \# MOD-22 Marketing (Soko) │   ├── ume\_mdm/                  \# MOD-23 MDM │   ├── ume\_facilities/           \# MOD-24 Facilities │   ├── ume\_operations/           \# MOD-25 Operations │   ├── ume\_portal/               \# MOD-26 Portal │   ├── ume\_portfolio/            \# MOD-27 Portfolio │   ├── ume\_pr/                   \# MOD-28 PR & Branding │   ├── ume\_process/              \# MOD-29 Process & Workflow │   ├── ume\_product/              \# MOD-30 Product │   ├── ume\_production/           \# MOD-31 Production │   ├── ume\_requirements/         \# MOD-32 Requirements │   ├── ume\_risk/                 \# MOD-33 Risk │   ├── ume\_sales/                \# MOD-34 Sales │   ├── ume\_schedule/             \# MOD-35 Schedule │   ├── ume\_security/             \# MOD-36 Security │   ├── ume\_supplychain/          \# MOD-37 Supply Chain │   ├── ume\_teams/                \# MOD-38 Teams │   ├── ume\_templates/            \# MOD-39 Templates │   └── ume\_work/                 \# MOD-40 Work Management ├── ume\_server/                   \# Layer 3: HTTP API server ├── ume\_runtime/                  \# Layer 3: CLI runtime ├── ume\_sdk/                      \# Layer 3: Custom module SDK ├── clients/ │   └── java/                     \# Java client suite (Bazel) ├── tools/ │   ├── generate\_custom\_module/   \# Module scaffold generator │   └── migrate/                  \# Schema migration runner └── tests/                        \# Integration test suite |

## **2.2 ume\_core — The Shared Foundation (Layer 0\)**

ume\_core is the single most important crate in the workspace. It defines every cross-module contract. All other crates depend on it; it depends on nothing inside the workspace.

| Rust |
| :---- |
| // ume\_core/src/lib.rs pub mod types;        // Newtype IDs, Money, DateRange, Pagination pub mod traits;       // KernelModule, DeviceDriver, Repository\<T\> pub mod errors;       // UmeError enum (exhaustive) pub mod events;       // DomainEvent, EventEnvelope, EventMetadata pub mod audit;        // AuditRecord, AuditOutcome pub mod schema;       // All cross-module domain type definitions pub mod facade;       // KernelFacade trait — what modules see of the kernel pub mod rbac;         // Permission, Role, Subject types pub mod config;       // ModuleConfig, ConfigValue, ConfigDescriptor pub mod pagination;   // CursorPage\<T\>, PageRequest, PageResponse\<T\> pub mod search;       // SearchQuery, SearchResult\<T\> |

| Rust |
| :---- |
| // ume\_core/src/types.rs — newtype ID wrappers (sample) use uuid::Uuid; use rust\_decimal::Decimal; use chrono::{DateTime, Utc, NaiveDate}; macro\_rules\! define\_id {     ($name:ident) \=\> {         \#\[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Serialize, Deserialize)\]         pub struct $name(pub Uuid);         impl $name {             pub fn new() \-\> Self { Self(Uuid::new\_v4()) }             pub fn inner(\&self) \-\> Uuid { self.0 }         }         impl Default for $name { fn default() \-\> Self { Self::new() } }     }; } define\_id\!(OrgId);           define\_id\!(OrgUnitId); define\_id\!(EmployeeId);      define\_id\!(EntityId); define\_id\!(JournalEntryId);  define\_id\!(InvoiceId); define\_id\!(RiskId);          define\_id\!(WorkItemId); define\_id\!(EventId);         define\_id\!(AuditRecordId); // ... 40+ additional ID types \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct Money {     pub amount: Decimal,     pub currency: CurrencyCode,  // ISO 4217 } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct DateRange {     pub start: NaiveDate,     pub end: Option\<NaiveDate\>, } |

## **2.3 UmeError — Exhaustive Error Taxonomy**

All fallible operations in UME return Result\<T, UmeError\>. The UmeError enum is defined in ume\_core and covers every error class in the system.

| Rust |
| :---- |
| // ume\_core/src/errors.rs \#\[derive(Debug, thiserror::Error)\] pub enum UmeError {     // ── Authorization ──────────────────────────────────────────────────     \#\[error("Authorization denied: subject={subject} permission={permission}")\]     AuthorizationFailed { subject: String, permission: String },     \#\[error("Authentication required")\]     Unauthenticated,     // ── Not Found ──────────────────────────────────────────────────────     \#\[error("Resource not found: {resource\_type} id={id}")\]     NotFound { resource\_type: String, id: String },     // ── Validation ─────────────────────────────────────────────────────     \#\[error("Validation failed: {errors:?}")\]     ValidationFailed { errors: Vec\<FieldError\> },     \#\[error("Optimistic lock conflict: expected version={expected} actual={actual}")\]     OptimisticLockConflict { expected: u64, actual: u64 },     // ── Business Rules ─────────────────────────────────────────────────     \#\[error("Business rule violation: {rule} — {message}")\]     BusinessRuleViolation { rule: String, message: String },     \#\[error("Period is locked: {period}")\]     PeriodLocked { period: String },     // ── Infrastructure ─────────────────────────────────────────────────     \#\[error("Driver unavailable: {driver\_id}")\]     DriverUnavailable { driver\_id: String },     \#\[error("Storage error: {source}")\]     StorageError { source: Box\<dyn std::error::Error \+ Send \+ Sync\> },     \#\[error("Memory region exhausted: {region}")\]     MemoryRegionExhausted { region: String },     \#\[error("Event bus capacity exceeded: {topic}")\]     BusCapacityExceeded { topic: String },     // ── Module ─────────────────────────────────────────────────────────     \#\[error("Module not found: {module\_id}")\]     ModuleNotFound { module\_id: String },     \#\[error("Module dependency unsatisfied: {module\_id} requires {dependency}")\]     DependencyUnsatisfied { module\_id: String, dependency: String },     // ── Concurrency ────────────────────────────────────────────────────     \#\[error("Operation timeout after {ms}ms")\]     Timeout { ms: u64 },     // ── Domain-specific ────────────────────────────────────────────────     \#\[error("Insufficient funds in {fund}: required={required} available={available}")\]     InsufficientFunds { fund: String, required: String, available: String },     \#\[error("RBAC cycle detected in role hierarchy")\]     RbacCycleDetected,     \#\[error("Internal error: {message}")\]     Internal { message: String }, } |

## **2.4 KernelModule Trait — Full Specification**

Every organization module implements KernelModule. This trait is the complete contract between the kernel and all modules.

| Rust |
| :---- |
| // ume\_core/src/traits.rs \#\[async\_trait::async\_trait\] pub trait KernelModule: Send \+ Sync \+ std::fmt::Debug {     /// Unique, globally-scoped module identifier.     /// Format: "{domain}.{name}" e.g. "finance.ledger", "hr.people"     fn id(\&self) \-\> &'static str;     /// Domain area this module belongs to.     fn domain(\&self) \-\> Domain;     /// Semantic version of this module implementation.     fn version(\&self) \-\> &'static str;     /// Current lifecycle state of the module.     fn state(\&self) \-\> ModuleState;     /// Start the module. Receives a KernelHandle providing access to all     /// kernel services. Called after all declared dependencies are Running.     async fn start(\&mut self, kernel: Arc\<dyn KernelFacade\>) \-\> Result\<(), UmeError\>;     /// Stop the module gracefully. Must complete within drain\_timeout.     /// Release all kernel resources and complete or abort in-flight operations.     async fn stop(\&mut self) \-\> Result\<(), UmeError\>;     /// Return current health. Called every supervisor\_interval (default 30s).     /// Must return within 500ms or supervisor records a health check timeout.     async fn health\_check(\&self) \-\> HealthStatus;     /// Return this module's descriptor: deps, permissions, config schema.     fn describe(\&self) \-\> ModuleDescriptor;     /// Handle an inbound domain event from the event bus.     /// Only called for topics declared in ModuleDescriptor::subscriptions.     async fn on\_event(\&mut self, event: EventEnvelope) \-\> Result\<(), UmeError\>;     /// Declare module dependencies: module IDs that must be Running first.     fn dependencies(\&self) \-\> Vec\<&'static str\>;     /// Apply runtime configuration update.     /// Returns true if a restart is required; false if hot-reload succeeded.     async fn configure(\&mut self, config: ModuleConfig) \-\> Result\<bool, UmeError\>;     /// Optional: expose module-level Prometheus metrics.     fn metrics(\&self) \-\> Option\<Box\<dyn MetricsCollector\>\> { None } } |

| Rust |
| :---- |
| // ume\_core/src/traits.rs — ModuleDescriptor \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct ModuleDescriptor {     pub id: &'static str,     pub domain: Domain,     pub version: &'static str,     pub description: &'static str,     pub dependencies: Vec\<&'static str\>,     pub permissions: Vec\<Permission\>,      // permissions this module registers     pub subscriptions: Vec\<TopicPattern\>,  // event bus topics this module subscribes to     pub config\_schema: Vec\<ConfigDescriptor\>,     pub capabilities: Vec\<&'static str\>,   // discoverable capability tags } \#\[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)\] pub enum ModuleState {     Registered,    // registered but not yet starting     Initializing,  // start() called; awaiting dependency resolution     Starting,      // dependencies met; executing start()     Running,       // healthy and serving requests     Degraded,      // health\_check returned Warning; still serving     Error,         // health\_check failed; supervisor applying restart policy     Stopping,      // stop() called; draining     Stopped,       // cleanly stopped; may be restarted } |

## **2.5 KernelFacade — What Modules See**

Modules receive a KernelFacade reference on start(). This is the only interface through which modules interact with the kernel. It is intentionally narrow — modules cannot access kernel internals.

| Rust |
| :---- |
| // ume\_core/src/facade.rs \#\[async\_trait::async\_trait\] pub trait KernelFacade: Send \+ Sync {     // ── Event Bus ────────────────────────────────────────────────────────     async fn publish(\&self, topic: \&str, payload: serde\_json::Value,                     meta: EventMetadata) \-\> Result\<EventId, UmeError\>;     async fn subscribe(\&self, pattern: \&str, handler: Arc\<dyn EventHandler\>)                     \-\> Result\<SubscriptionHandle, UmeError\>;     // ── Storage ──────────────────────────────────────────────────────────     async fn storage(\&self) \-\> Arc\<dyn StorageManager\>;     // ── RBAC ─────────────────────────────────────────────────────────────     async fn can(\&self, subject: \&SubjectId, permission: \&str,                 resource\_id: Option\<\&str\>) \-\> Result\<bool, UmeError\>;     async fn assert\_can(\&self, subject: \&SubjectId, permission: \&str,                        resource\_id: Option\<\&str\>) \-\> Result\<(), UmeError\>;     // ── Audit ────────────────────────────────────────────────────────────     async fn audit(\&self, record: AuditRecord) \-\> Result\<AuditRecordId, UmeError\>;     // ── Module Registry ──────────────────────────────────────────────────     fn module\_by\_id(\&self, id: \&str) \-\> Option\<Arc\<dyn KernelModule\>\>;     fn modules\_by\_domain(\&self, domain: Domain) \-\> Vec\<Arc\<dyn KernelModule\>\>;     // ── Configuration ────────────────────────────────────────────────────     fn config(\&self, module\_id: \&str) \-\> Option\<ModuleConfig\>;     // ── Scheduling ───────────────────────────────────────────────────────     async fn schedule(\&self, job: ScheduledJob) \-\> Result\<JobHandle, UmeError\>;     async fn cancel\_job(\&self, handle: JobHandle) \-\> Result\<(), UmeError\>; } |

# **3\. Kernel Core Design**

## **3.1 UmeKernel — Composition Root**

UmeKernel is the single composition root. It owns all subsystems and manages the complete lifecycle from boot to shutdown. It is constructed once per process via UmeKernel::boot(config).

| Rust |
| :---- |
| // ume\_kernel/src/kernel.rs pub struct UmeKernel {     config:        KernelConfig,     state:         Arc\<RwLock\<KernelState\>\>,     device\_bus:    Arc\<DeviceBus\>,     rbac:          Arc\<RbacEngine\>,     event\_bus:     Arc\<EventBus\>,     executor\_pool: Arc\<ExecutorPool\>,     memory:        Arc\<MemoryManager\>,     storage:       Arc\<StorageManager\>,     audit:         Arc\<LogAuditManager\>,     supervisor:    Arc\<SupervisorEngine\>,     registry:      Arc\<ModuleRegistry\>,     scheduler:     Arc\<JobScheduler\>,     boot\_time:     DateTime\<Utc\>, } impl UmeKernel {     /// Primary boot sequence. Blocks until kernel is Running or returns error.     pub async fn boot(config: KernelConfig) \-\> Result\<Arc\<Self\>, UmeError\> {         tracing::info\!("UME kernel booting — version {}", VERSION);         // Phase 1: validate configuration         config.validate()?;         // Phase 2: initialize subsystems (order is critical)         let memory    \= MemoryManager::new(\&config.memory)?;         let audit     \= LogAuditManager::new(\&config.audit, memory.clone()).await?;         let device\_bus \= DeviceBus::new(\&config.drivers, audit.clone()).await?;         let storage   \= StorageManager::new(\&config.storage, device\_bus.clone()).await?;         let rbac      \= RbacEngine::new(\&config.rbac, storage.clone()).await?;         let event\_bus \= EventBus::new(\&config.events).await?;         let executor\_pool \= ExecutorPool::new(\&config.executors)?;         let scheduler \= JobScheduler::new(executor\_pool.clone()).await?;         // Phase 3: run schema migrations         storage.run\_migrations().await?;         // Phase 4: construct registry and facade         let registry  \= ModuleRegistry::new();         let kernel    \= Arc::new(Self { config, state: /\* Running \*/                           device\_bus, rbac, event\_bus, executor\_pool,                           memory, storage, audit, scheduler,                           supervisor: Arc::new(SupervisorEngine::new()),                           registry, boot\_time: Utc::now() });         // Phase 5: start supervisor         kernel.supervisor.start(kernel.clone()).await?;         // Phase 6: register and start modules (dependency-ordered)         kernel.start\_modules().await?;         tracing::info\!("UME kernel ready in {:?}", kernel.boot\_time.elapsed());         Ok(kernel)     }     pub async fn shutdown(\&self) \-\> Result\<(), UmeError\> {         self.set\_state(KernelState::ShuttingDown);         self.registry.stop\_all\_modules().await?;  // reverse dependency order         self.scheduler.shutdown().await?;         self.event\_bus.flush\_and\_close().await?;         self.storage.flush\_and\_close().await?;         self.device\_bus.shutdown\_all().await?;         self.set\_state(KernelState::Stopped);         Ok(())     } } |

## **3.2 KernelConfig — Full Field Specification**

KernelConfig is deserialized from TOML/YAML/environment variables. All fields have documented defaults.

| Field | Type | Nullable | Description |
| :---- | :---- | :---- | :---- |
| org\_id | OrgId | No | Owning organization UUID — must match persisted value on warm restart |
| log\_level | LogLevel | No | Default: INFO. Options: TRACE,DEBUG,INFO,WARN,ERROR |
| boot\_timeout\_secs | u64 | No | Default: 30\. Kernel boot fails if not Running within this window |
| supervisor.interval\_secs | u64 | No | Default: 30\. Health check frequency for all modules |
| supervisor.max\_restarts | u32 | No | Default: 3\. Max consecutive restarts before Stopped |
| supervisor.backoff\_base\_ms | u64 | No | Default: 1000\. Exponential backoff base in milliseconds |
| rbac.cache\_ttl\_secs | u64 | No | Default: 60\. RBAC decision cache TTL |
| rbac.enable\_resource\_scoping | bool | No | Default: true. Enable resource-level permission scoping |
| events.backend | EventBackend | No | Default: InMemory. Options: InMemory, Nats, Kafka, Rabbit |
| events.max\_queue\_depth | usize | No | Default: 10000\. Per-topic queue depth before backpressure |
| events.dlq\_retention\_days | u32 | No | Default: 30\. Days to retain DLQ entries |
| storage.primary | StorageBackend | No | Default: Sqlite. Options: Sqlite, Postgres, InMemory |
| storage.dsn | String | Yes | Database connection string; required for Postgres |
| storage.pool\_size | u32 | No | Default: 10 for Postgres; N/A for Sqlite |
| storage.redis\_url | String | Yes | Redis URL for hot cache tier; optional |
| memory.total\_mb | u64 | No | Default: 512\. Total managed memory budget in MB |
| memory.regions | Vec\<RegionConfig\> | No | Per-region size limits and eviction policies |
| audit.retention\_years | u32 | No | Default: 7\. Audit record retention in years |
| audit.chain\_algorithm | HashAlg | No | Default: SHA256. Audit record chaining hash algorithm |
| modules.enabled | Vec\<String\> | No | List of module IDs to activate; empty \= all built-ins |
| modules.dir | PathBuf | Yes | Directory to scan for custom module .so files |
| server.port | u16 | No | Default: 8080\. HTTP API listen port |
| server.tls\_cert\_path | PathBuf | Yes | TLS certificate PEM path; required for TLS mode |
| server.tls\_key\_path | PathBuf | Yes | TLS private key PEM path; required for TLS mode |
| server.rate\_limit\_rpm | u32 | No | Default: 1000\. Requests per minute per API client |

## **3.3 Boot Sequence — Step-by-Step**

| Step | Phase | Action | Failure Behaviour |
| :---- | :---- | :---- | :---- |
| 1 | Config Validation | Parse and validate KernelConfig; check required fields and value ranges | Boot aborts; structured error message to stderr |
| 2 | Memory Init | Allocate named memory regions per configuration; register eviction policies | Boot aborts if region allocation fails |
| 3 | Audit Init | Initialize audit log writer; verify storage target writable; load chain seed | Boot aborts; audit is non-optional |
| 4 | Device Bus Init | Construct DeviceBus; register all configured drivers; call initialize() on each | Driver init failure: logged as WARNING; kernel continues with degraded driver set |
| 5 | Storage Init | Connect to primary storage backend via StorageDriver; test connection | Boot aborts; storage is non-optional |
| 6 | RBAC Init | Load role and permission definitions from storage; build evaluation graph | Boot aborts; RBAC is non-optional |
| 7 | Event Bus Init | Start in-process bus or connect to configured external broker | Boot aborts; event bus is non-optional |
| 8 | Executor Pool Init | Create named thread pools per config; verify thread spawn succeeds | Boot aborts if critical executors cannot start |
| 9 | Scheduler Init | Start cron job scheduler bound to executor pool | Boot aborts if scheduler fails |
| 10 | Schema Migration | Run pending migrations in order; record each migration in migration\_log | Boot aborts if migration fails; migration is idempotent |
| 11 | Module Registration | Register all enabled modules in registry; build dependency graph | Boot aborts if dependency cycle detected |
| 12 | Module Start | Start modules in dependency-topological order; wait for Running state | Module start failure: supervisor records; kernel continues if non-critical |
| 13 | Supervisor Start | Start background health check loop at configured interval | Boot aborts if supervisor fails to start |
| 14 | Ready Signal | Emit kernel.ready event; update state to Running; log boot duration | — |

# **4\. Kernel Subsystems — Detailed Design**

## **4.1 RBAC Engine**

The RBAC engine is the sole authorization decision point for the entire system. It implements a hierarchical, resource-scoped permission model.

| Rust |
| :---- |
| // ume\_kernel/src/rbac.rs — core types \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct Permission {     pub id: &'static str,          // e.g. "finance.journal.create"     pub description: &'static str,     pub resource\_scoped: bool,     // true \= can be scoped to specific resource ID } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct Role {     pub id: RoleId,     pub name: String,     pub description: String,     pub permissions: Vec\<PermissionGrant\>,     pub parent\_roles: Vec\<RoleId\>,  // inheritance } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct PermissionGrant {     pub permission: String,     pub resource\_id: Option\<String\>,  // None \= all resources } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct Subject {     pub id: SubjectId,     pub subject\_type: SubjectType,  // User | ServiceAccount | ApiKey     pub org\_id: OrgId,     pub roles: Vec\<RoleId\>, } impl RbacEngine {     /// Core authorization check with caching.     pub async fn can(\&self, subject\_id: \&SubjectId, permission: \&str,                     resource\_id: Option\<\&str\>) \-\> Result\<bool, UmeError\> {         // 1\. Cache lookup         let cache\_key \= self.cache\_key(subject\_id, permission, resource\_id);         if let Some(result) \= self.cache.get(\&cache\_key).await {             return Ok(result);         }         // 2\. Load subject roles (with inheritance expansion)         let subject \= self.subjects.get(subject\_id).await?;         let effective\_permissions \= self.expand\_permissions(\&subject).await?;         // 3\. Check permission (resource-scoped or global)         let granted \= effective\_permissions.iter().any(|grant| {             grant.permission \== permission &&             (grant.resource\_id.is\_none() ||              grant.resource\_id.as\_deref() \== resource\_id)         });         // 4\. Cache result         self.cache.set(cache\_key, granted, self.config.cache\_ttl).await;         Ok(granted)     }     /// Expand role hierarchy to full effective permission set.     async fn expand\_permissions(\&self, subject: \&Subject)         \-\> Result\<Vec\<PermissionGrant\>, UmeError\>     {         let mut visited \= HashSet::new();         let mut permissions \= Vec::new();         for role\_id in \&subject.roles {             self.collect\_role\_permissions(role\_id, \&mut permissions,                                           \&mut visited).await?;         }         Ok(permissions)     } } |

## **4.2 Event Bus**

The EventBus provides publish-subscribe semantics with backpressure, DLQ, and pluggable backends.

| Rust |
| :---- |
| // ume\_kernel/src/event\_bus.rs \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct EventEnvelope {     pub id:          EventId,     pub topic:       String,          // {domain}.{resource}.{verb}     pub payload:     serde\_json::Value,     pub published\_at: DateTime\<Utc\>,     pub publisher\_module: String,     pub correlation\_id: Option\<String\>,     pub causation\_id:   Option\<EventId\>,  // ID of event that caused this one     pub idempotency\_key: Option\<String\>, } pub struct EventBus {     backend:     Arc\<dyn BusBackend\>,  // InMemory | Nats | Kafka | Rabbit     dlq:         Arc\<DeadLetterQueue\>,     topic\_regex: Regex,               // validates topic format } impl EventBus {     /// Publish an event. Validates topic format; applies backpressure if queue full.     pub async fn publish(\&self, envelope: EventEnvelope) \-\> Result\<(), UmeError\> {         // Validate topic format: {domain}.{resource}.{verb}         if \!self.topic\_regex.is\_match(\&envelope.topic) {             return Err(UmeError::ValidationFailed {                 errors: vec\!\[FieldError::new("topic", "must match {domain}.{resource}.{verb}")\]             });         }         // Idempotency deduplication         if let Some(key) \= \&envelope.idempotency\_key {             if self.backend.is\_duplicate(key).await? { return Ok(()); }         }         self.backend.publish(envelope).await     }     /// Subscribe to a topic pattern (glob supported: "finance.\*", "\*.created").     pub async fn subscribe(\&self, pattern: \&str,                           handler: Arc\<dyn EventHandler\>)                           \-\> Result\<SubscriptionHandle, UmeError\> {         self.backend.subscribe(pattern, handler).await     } } pub trait EventHandler: Send \+ Sync {     async fn handle(\&self, envelope: EventEnvelope) \-\> Result\<(), UmeError\>;     fn on\_failure(\&self, envelope: EventEnvelope, err: UmeError) {         // Default: route to DLQ     } } |

## **4.3 StorageManager**

The StorageManager abstracts all persistence. Modules call storage operations; they never interact with the database directly.

| Rust |
| :---- |
| // ume\_kernel/src/storage.rs \#\[async\_trait\] pub trait StorageManager: Send \+ Sync {     // ── Basic CRUD ─────────────────────────────────────────────────────     async fn get\<T: DeserializeOwned \+ Send\>(         \&self, namespace: \&str, id: \&str) \-\> Result\<Option\<T\>, UmeError\>;     async fn put\<T: Serialize \+ Send\>(         \&self, namespace: \&str, id: \&str, value: \&T,         version: Option\<u64\>  // optimistic lock; None \= unconditional     ) \-\> Result\<u64, UmeError\>;  // returns new version     async fn delete(         \&self, namespace: \&str, id: \&str) \-\> Result\<(), UmeError\>;     // ── Query ──────────────────────────────────────────────────────────     async fn query\<T: DeserializeOwned \+ Send\>(         \&self, namespace: \&str, filter: Filter,         page: PageRequest) \-\> Result\<PageResponse\<T\>, UmeError\>;     // ── Transactions ───────────────────────────────────────────────────     async fn transaction\<F, T\>(\&self, f: F) \-\> Result\<T, UmeError\>     where         F: FnOnce(Arc\<dyn TransactionContext\>) \-\> BoxFuture\<'\_, Result\<T, UmeError\>\>         \+ Send;     // ── Schema ─────────────────────────────────────────────────────────     async fn run\_migrations(\&self) \-\> Result\<(), UmeError\>;     async fn migration\_status(\&self) \-\> Result\<Vec\<MigrationRecord\>, UmeError\>; } // Storage tier routing — configured per namespace pub struct TieredStorageManager {     hot\_cache:  Option\<Arc\<dyn StorageBackend\>\>,  // Redis     warm\_store: Arc\<dyn StorageBackend\>,          // Postgres/Sqlite     cold\_store: Option\<Arc\<dyn StorageBackend\>\>,  // S3 for archives     config:     StorageRoutingConfig, } |

## **4.4 Supervisor Engine**

The supervisor monitors all modules and applies restart policies. It runs as a background task in the kernel.critical executor.

| Rust |
| :---- |
| // ume\_kernel/src/supervisor.rs pub struct SupervisorEngine {     restart\_counts: Arc\<DashMap\<String, (u32, DateTime\<Utc\>)\>\>,     config: SupervisorConfig, } impl SupervisorEngine {     pub async fn run\_loop(\&self, kernel: Arc\<UmeKernel\>) {         let mut interval \= tokio::time::interval(             Duration::from\_secs(self.config.interval\_secs));         loop {             interval.tick().await;             let modules \= kernel.registry.all\_running().await;             for module in modules {                 let health \= tokio::time::timeout(                     Duration::from\_millis(500),                     module.health\_check()                 ).await;                 match health {                     Ok(HealthStatus::Healthy) \=\> {                         self.reset\_restart\_count(module.id());                     }                     Ok(HealthStatus::Warning(msg)) \=\> {                         tracing::warn\!("Module {} degraded: {}", module.id(), msg);                         kernel.registry.set\_state(module.id(), ModuleState::Degraded);                     }                     Ok(HealthStatus::Unhealthy(msg)) | Err(\_) \=\> {                         self.handle\_failure(\&kernel, \&module, \&msg).await;                     }                 }             }         }     }     async fn handle\_failure(\&self, kernel: \&Arc\<UmeKernel\>,                             module: \&Arc\<dyn KernelModule\>, msg: \&str) {         let (count, last) \= self.restart\_counts             .entry(module.id().to\_string())             .or\_insert((0, Utc::now()));         \*count \+= 1;         if \*count \> self.config.max\_restarts {             tracing::error\!("Module {} exceeded max restarts; stopping", module.id());             kernel.registry.stop\_module(module.id()).await;             kernel.publish\_alert(Alert::module\_stopped(module.id(), msg)).await;             return;         }         // Exponential backoff         let backoff \= Duration::from\_millis(             self.config.backoff\_base\_ms \* 2u64.pow(\*count \- 1));         tracing::warn\!("Module {} failed (attempt {}); restarting in {:?}",             module.id(), count, backoff);         tokio::time::sleep(backoff).await;         kernel.registry.restart\_module(module.id()).await;     } } |

## **4.5 Log & Audit Manager**

The audit manager writes immutable, cryptographically-chained audit records. Chain integrity ensures any tampering with historical records is detectable.

| Rust |
| :---- |
| // ume\_kernel/src/audit.rs \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct AuditRecord {     pub id:           AuditRecordId,            // UUID v4     pub at:           DateTime\<Utc\>,            // RFC3339 UTC     pub actor:        SubjectId,                // who performed the action     pub actor\_type:   SubjectType,              // User | Service | Scheduler     pub action:       String,                   // {domain}.{resource}.{verb}     pub resource\_id:  Option\<String\>,           // affected resource UUID     pub resource\_type: String,                  // e.g. "finance.JournalEntry"     pub outcome:      AuditOutcome,             // Success | Failure | Denied     pub detail:       serde\_json::Value,        // action-specific detail     pub session\_id:   Option\<String\>,           // HTTP session or CLI session     pub request\_id:   Option\<String\>,           // correlation ID from API request     pub ip\_address:   Option\<std::net::IpAddr\>,     pub org\_id:       OrgId,                    // always set; enables multi-tenant isolation     pub previous\_hash: Option\<String\>,          // SHA-256 of previous record     pub self\_hash:     String,                  // SHA-256 of this record (minus self\_hash) } impl LogAuditManager {     pub async fn write(\&self, record: AuditRecord) \-\> Result\<AuditRecordId, UmeError\> {         // 1\. Fetch previous record hash (atomic read)         let prev\_hash \= self.chain\_tail.read().await.clone();         // 2\. Set chain link         let mut record \= record;         record.previous\_hash \= prev\_hash;         // 3\. Compute self hash (excludes self\_hash field)         record.self\_hash \= self.compute\_hash(\&record);         // 4\. Persist (append-only; no UPDATE path exists)         let id \= self.storage.append\_audit(\&record).await?;         // 5\. Update chain tail         \*self.chain\_tail.write().await \= Some(record.self\_hash.clone());         // 6\. Publish to event bus for SIEM integration         self.event\_bus.publish(EventEnvelope {             topic: "audit.record.created".to\_string(),             payload: serde\_json::to\_value(\&record).unwrap(),             ..Default::default()         }).await?;         Ok(id)     }     /// Verify chain integrity from start\_id to end\_id.     pub async fn verify\_chain(\&self, start\_id: \&AuditRecordId,                              end\_id: \&AuditRecordId)                              \-\> Result\<ChainVerificationResult, UmeError\> {         let records \= self.storage             .query\_audit\_range(start\_id, end\_id).await?;         for window in records.windows(2) {             let (prev, curr) \= (\&window\[0\], \&window\[1\]);             let expected \= self.compute\_hash(prev);             if curr.previous\_hash.as\_deref() \!= Some(\&expected) {                 return Ok(ChainVerificationResult::Broken {                     at\_record: curr.id,                 });             }         }         Ok(ChainVerificationResult::Valid)     } } |

## **4.6 ExecutorPool**

Named executor pools prevent any single domain from monopolizing CPU resources. Each pool is a Tokio runtime handle with bounded channel capacity.

| Pool Name | Default Threads | Queue Depth | Purpose |
| :---- | :---- | :---- | :---- |
| kernel.critical | 4 | Unbounded | Supervisor, config changes, kernel lifecycle |
| kernel.events | 8 | 10000 | Event bus delivery to module handlers |
| kernel.audit | 2 | 50000 | Audit record writes (high volume, must not block) |
| org.finance | 4 | 5000 | Finance module: ledger, payroll, invoicing |
| org.hr | 2 | 2000 | HR module: payroll compute, review cycles |
| org.analytics | 4 | 1000 | Analytics KPI computation; longer-running queries |
| org.ops | 4 | 5000 | Operations, supply chain, work management |
| org.background | 2 | 20000 | Low-priority jobs: report generation, cleanup tasks |
| org.comms | 2 | 10000 | Email, SMS, notification dispatch |

## **4.7 MemoryManager**

The MemoryManager provides named, bounded memory regions. Each region has its own allocation limit and eviction policy.

| Region | Default Size | Eviction Policy | Primary Consumer |
| :---- | :---- | :---- | :---- |
| kernel.hot\_cache | 64 MB | LRU (by access time) | RBAC decision cache; module lookup cache |
| kernel.event\_queue | 32 MB | Backpressure (reject new) | In-memory event bus queues |
| kernel.audit\_buffer | 16 MB | Threshold flush (80%) | Buffered audit record batch writes |
| module.analytics | 128 MB | TTL (60 min) \+ LRU | Computed KPI aggregates; dashboard data |
| module.search\_index | 64 MB | LRU (by access time) | Full-text search index cache |
| module.templates | 16 MB | TTL (10 min) | Compiled template cache |
| module.session | 32 MB | TTL (session expiry) | HTTP session state; JWT nonce cache |
| module.general | Remainder | LRU (by access time) | All other module working data |

# **5\. Organization Module Architecture**

## **5.1 Standard Module Structure**

Every module follows an identical internal structure. This uniformity simplifies maintenance, testing, and code review.

| Rust |
| :---- |
| ume\_finance/                          \# typical module crate ├── src/ │   ├── lib.rs                        \# crate root; exports FinanceModule │   ├── module.rs                     \# KernelModule impl (start/stop/health/etc.) │   ├── config.rs                     \# FinanceConfig; ConfigDescriptor declarations │   ├── domain/                       \# domain types (re-export from ume\_core) │   │   ├── mod.rs │   │   ├── journal.rs                \# JournalEntry, LedgerAccount types │   │   ├── invoice.rs                \# Invoice, InvoiceLine types │   │   └── budget.rs                 \# BudgetLine, VarianceAlert types │   ├── repository/                   \# storage abstraction layer │   │   ├── mod.rs │   │   ├── journal\_repo.rs           \# JournalRepository trait \+ impl │   │   └── invoice\_repo.rs           \# InvoiceRepository trait \+ impl │   ├── services/                     \# business logic layer │   │   ├── ledger\_service.rs         \# double-entry posting logic │   │   ├── payroll\_service.rs        \# payroll compute │   │   └── consolidation\_service.rs  \# multi-entity consolidation │   ├── handlers/                     \# event bus handlers │   │   ├── hr\_events.rs              \# handles hr.employee.hired → create payroll record │   │   └── supplychain\_events.rs     \# handles sc.po.received → post GR journal │   └── permissions.rs               \# FINANCE\_PERMISSIONS constant array └── tests/     ├── journal\_tests.rs     └── integration\_tests.rs          \# uses MockKernel from ume\_sdk |

## **5.2 Repository Pattern**

Every module wraps StorageManager calls in typed Repository structs. This provides a domain-typed interface and isolates the storage API from business logic.

| Rust |
| :---- |
| // Pattern: Repository trait \+ implementation \#\[async\_trait\] pub trait JournalRepository: Send \+ Sync {     async fn create(\&self, entry: \&JournalEntry) \-\> Result\<JournalEntryId, UmeError\>;     async fn get(\&self, id: \&JournalEntryId) \-\> Result\<Option\<JournalEntry\>, UmeError\>;     async fn list\_by\_period(\&self, period: \&AccountingPeriod,                             page: PageRequest) \-\> Result\<PageResponse\<JournalEntry\>, UmeError\>;     async fn list\_by\_account(\&self, account: \&LedgerAccountCode,                              page: PageRequest) \-\> Result\<PageResponse\<JournalEntry\>, UmeError\>; } pub struct SqlJournalRepository {     storage: Arc\<dyn StorageManager\>,     org\_id:  OrgId, } \#\[async\_trait\] impl JournalRepository for SqlJournalRepository {     async fn create(\&self, entry: \&JournalEntry) \-\> Result\<JournalEntryId, UmeError\> {         // All writes are org\_id scoped — multi-tenancy enforced here         let mut storable \= entry.clone();         storable.org\_id \= self.org\_id;         self.storage.put("finance.journal\_entries",                         \&entry.id.to\_string(), \&storable, None).await?;         Ok(entry.id)     } } |

## **5.3 Module Permission Declarations**

Each module declares its RBAC permission namespace as a static array. The kernel registers all permissions at module load time.

| Rust |
| :---- |
| // ume\_finance/src/permissions.rs pub const FINANCE\_PERMISSIONS: &\[Permission\] \= &\[     Permission { id: "finance.journal.create",                  description: "Post journal entries to the general ledger",                  resource\_scoped: false },     Permission { id: "finance.journal.view",                  description: "View journal entries",                  resource\_scoped: true },     Permission { id: "finance.period.lock",                  description: "Lock an accounting period",                  resource\_scoped: false },     Permission { id: "finance.invoice.create",                  description: "Create customer or supplier invoices",                  resource\_scoped: false },     Permission { id: "finance.invoice.approve",                  description: "Approve invoices for payment",                  resource\_scoped: true },     Permission { id: "finance.payment.authorize",                  description: "Authorize payment runs",                  resource\_scoped: false },     Permission { id: "finance.budget.manage",                  description: "Create and modify budget lines",                  resource\_scoped: true },     Permission { id: "finance.statements.view",                  description: "View financial statements",                  resource\_scoped: false },     Permission { id: "finance.admin",                  description: "Full finance module administration",                  resource\_scoped: false }, \]; |

# **6\. Key Module Designs**

## **6.1 Finance & Accounting Module (MOD-14)**

### **6.1.1 Data Model**

| SQL / DDL |
| :---- |
| \-- finance.ledger\_accounts CREATE TABLE finance.ledger\_accounts (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL REFERENCES admin.organizations(id),     code            VARCHAR(20) NOT NULL,     name            VARCHAR(200) NOT NULL,     account\_type    VARCHAR(20) NOT NULL CHECK (account\_type IN                     ('Asset','Liability','Equity','Revenue','Expense')),     parent\_code     VARCHAR(20),     is\_active       BOOLEAN NOT NULL DEFAULT true,     entity\_id       UUID REFERENCES chombo.legal\_entities(id),     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     updated\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     version         BIGINT NOT NULL DEFAULT 1,     UNIQUE(org\_id, entity\_id, code) ); \-- finance.journal\_entries (immutable after posting) CREATE TABLE finance.journal\_entries (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     entity\_id       UUID NOT NULL,     period          VARCHAR(7) NOT NULL,  \-- YYYY-MM     entry\_date      DATE NOT NULL,     reference       VARCHAR(100),     description     TEXT NOT NULL,     entry\_type      VARCHAR(30) NOT NULL, \-- Manual|Payroll|AP|AR|Accrual|Reversal     status          VARCHAR(20) NOT NULL DEFAULT 'Draft',     posted\_at       TIMESTAMPTZ,     posted\_by       UUID,     source\_module   VARCHAR(50),          \-- originating module ID     source\_id       UUID,                 \-- originating record (e.g. invoice\_id)     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW() ); \-- finance.journal\_lines (double-entry lines) CREATE TABLE finance.journal\_lines (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     entry\_id        UUID NOT NULL REFERENCES finance.journal\_entries(id),     org\_id          UUID NOT NULL,     account\_code    VARCHAR(20) NOT NULL,     debit           NUMERIC(19,4),     credit          NUMERIC(19,4),     currency        CHAR(3) NOT NULL DEFAULT 'USD',     fx\_rate         NUMERIC(12,6) NOT NULL DEFAULT 1.0,     functional\_debit  NUMERIC(19,4),  \-- converted to functional currency     functional\_credit NUMERIC(19,4),     cost\_center     VARCHAR(50),     project\_code    VARCHAR(50) ); \-- Constraint: every posted entry must balance (trigger-enforced) CREATE OR REPLACE FUNCTION finance.check\_journal\_balance() RETURNS TRIGGER AS $$ DECLARE total\_debit NUMERIC; total\_credit NUMERIC; BEGIN   SELECT COALESCE(SUM(debit),0), COALESCE(SUM(credit),0)   INTO total\_debit, total\_credit   FROM finance.journal\_lines WHERE entry\_id \= NEW.id;   IF total\_debit \!= total\_credit THEN     RAISE EXCEPTION 'Journal entry % does not balance: Dr=% Cr=%',       NEW.id, total\_debit, total\_credit;   END IF; RETURN NEW; END; $$ LANGUAGE plpgsql; |

### **6.1.2 Ledger Service — Double-Entry Logic**

| Rust |
| :---- |
| // ume\_finance/src/services/ledger\_service.rs pub struct LedgerService {     journal\_repo: Arc\<dyn JournalRepository\>,     account\_repo: Arc\<dyn AccountRepository\>,     period\_repo:  Arc\<dyn PeriodRepository\>,     kernel:       Arc\<dyn KernelFacade\>, } impl LedgerService {     /// Post a journal entry. Enforces period lock, balance, and permissions.     pub async fn post\_journal(\&self, cmd: PostJournalCommand,                              actor: \&SubjectId) \-\> Result\<JournalEntryId, UmeError\> {         // 1\. Authorization         self.kernel.assert\_can(actor, "finance.journal.create", None).await?;         // 2\. Period lock check         let period \= self.period\_repo.get(\&cmd.period).await?             .ok\_or(UmeError::NotFound { resource\_type: "Period".into(),                                         id: cmd.period.clone() })?;         if period.is\_locked {             return Err(UmeError::PeriodLocked { period: cmd.period.clone() });         }         // 3\. Balance validation (must sum to zero)         let sum: Decimal \= cmd.lines.iter()             .map(|l| l.debit.unwrap\_or\_default() \- l.credit.unwrap\_or\_default())             .sum();         if sum \!= Decimal::ZERO {             return Err(UmeError::ValidationFailed {                 errors: vec\!\[FieldError::new("lines",                     \&format\!("Entry does not balance: net={}", sum))\],             });         }         // 4\. Validate all accounts exist         for line in \&cmd.lines {             self.account\_repo.get(\&line.account\_code).await?                 .ok\_or\_else(|| UmeError::NotFound {                     resource\_type: "LedgerAccount".into(),                     id: line.account\_code.clone(),                 })?;         }         // 5\. Persist within transaction         let entry\_id \= self.kernel.storage().await             .transaction(|tx| Box::pin(async move {                 let id \= journal\_repo.create\_in\_tx(\&cmd.into\_entry(), tx).await?;                 Ok(id)             })).await?;         // 6\. Audit \+ event         self.kernel.audit(AuditRecord::new(actor, "finance.journal.create",             \&entry\_id.to\_string(), AuditOutcome::Success)).await?;         self.kernel.publish("finance.journal.posted",             json\!({ "entry\_id": entry\_id, "period": cmd.period }), /\* meta \*/ ).await?;         Ok(entry\_id)     } } |

## **6.2 Human Resources Module (MOD-16)**

### **6.2.1 Employee Data Model**

| SQL / DDL |
| :---- |
| \-- hr.employees CREATE TABLE hr.employees (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     employee\_number VARCHAR(30) UNIQUE,     first\_name      VARCHAR(100) NOT NULL,     last\_name       VARCHAR(100) NOT NULL,     preferred\_name  VARCHAR(100),     email           VARCHAR(254) NOT NULL,     phone           VARCHAR(30),     status          VARCHAR(20) NOT NULL DEFAULT 'PreStart'                     CHECK (status IN ('PreStart','Active','Leave',                                       'Suspended','Terminated')),     org\_unit\_id     UUID NOT NULL REFERENCES admin.org\_units(id),     manager\_id      UUID REFERENCES hr.employees(id),     employment\_type VARCHAR(20) NOT NULL,  \-- FullTime|PartTime|Contract|Casual     start\_date      DATE NOT NULL,     end\_date        DATE,     probation\_end   DATE,     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     updated\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     version         BIGINT NOT NULL DEFAULT 1 ); \-- hr.compensation CREATE TABLE hr.compensation (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     employee\_id     UUID NOT NULL REFERENCES hr.employees(id),     org\_id          UUID NOT NULL,     pay\_type        VARCHAR(20) NOT NULL,  \-- Salary|Hourly|Commission     gross\_amount    NUMERIC(12,2) NOT NULL,     currency        CHAR(3) NOT NULL,     pay\_frequency   VARCHAR(20) NOT NULL,  \-- Monthly|Biweekly|Weekly     effective\_from  DATE NOT NULL,     effective\_to    DATE,     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW() ); \-- hr.leave\_balances CREATE TABLE hr.leave\_balances (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     employee\_id     UUID NOT NULL REFERENCES hr.employees(id),     org\_id          UUID NOT NULL,     leave\_type      VARCHAR(50) NOT NULL,     balance\_days    NUMERIC(6,2) NOT NULL DEFAULT 0,     accrued\_ytd     NUMERIC(6,2) NOT NULL DEFAULT 0,     taken\_ytd       NUMERIC(6,2) NOT NULL DEFAULT 0,     year            INT NOT NULL,     UNIQUE (employee\_id, leave\_type, year) ); |

### **6.2.2 Onboarding Workflow Integration**

When HR creates an employee with status PreStart, it emits hr.employee.hired. The Process Module receives this event and spawns a parameterized onboarding workflow instance.

| Rust |
| :---- |
| // ume\_hr/src/services/employee\_service.rs (excerpt) pub async fn create\_employee(\&self, cmd: CreateEmployeeCommand,                              actor: \&SubjectId) \-\> Result\<EmployeeId, UmeError\> {     self.kernel.assert\_can(actor, "hr.employee.create", None).await?;     let employee \= Employee::from\_command(cmd);     let id \= self.employee\_repo.create(\&employee).await?;     // Emit domain event — Process Module listens and starts onboarding     self.kernel.publish("hr.employee.hired", json\!({         "employee\_id": id,         "org\_unit\_id": employee.org\_unit\_id,         "start\_date":  employee.start\_date,         "manager\_id":  employee.manager\_id,     }), EventMetadata::from\_actor(actor)).await?;     self.kernel.audit(AuditRecord::new(actor, "hr.employee.create",         \&id.to\_string(), AuditOutcome::Success)).await?;     Ok(id) } |

## **6.3 Legal Entity Module — Chombo (MOD-13)**

### **6.3.1 Entity & Policy Pack Data Model**

| SQL / DDL |
| :---- |
| \-- chombo.legal\_entities CREATE TABLE chombo.legal\_entities (     id                UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id            UUID NOT NULL,     name              VARCHAR(300) NOT NULL,     entity\_type       VARCHAR(50) NOT NULL,     jurisdiction      CHAR(2) NOT NULL,  \-- ISO 3166-1 alpha-2     sub\_jurisdiction  VARCHAR(10),       \-- state/province code     registration\_number VARCHAR(100),     status            VARCHAR(20) NOT NULL DEFAULT 'Active'                       CHECK (status IN ('Pending','Active','Dormant','Dissolved')),     parent\_entity\_id  UUID REFERENCES chombo.legal\_entities(id),     ownership\_pct     NUMERIC(5,2),     incorporated\_date DATE,     fiscal\_year\_end   VARCHAR(5),  \-- MM-DD     created\_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),     updated\_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),     version           BIGINT NOT NULL DEFAULT 1 ); \-- chombo.policy\_packs CREATE TABLE chombo.policy\_packs (     id            UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     pack\_id       VARCHAR(100) UNIQUE NOT NULL,     jurisdiction  CHAR(2) NOT NULL,     sub\_jurisdiction VARCHAR(10),     entity\_types  TEXT\[\],  \-- which entity types this pack applies to     name          VARCHAR(200) NOT NULL,     version       VARCHAR(20) NOT NULL,     rules         JSONB NOT NULL,  \-- serialized PolicyRule\[\]     is\_active     BOOLEAN NOT NULL DEFAULT true ); \-- chombo.filing\_records CREATE TABLE chombo.filing\_records (     id            UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     entity\_id     UUID NOT NULL REFERENCES chombo.legal\_entities(id),     org\_id        UUID NOT NULL,     filing\_type   VARCHAR(100) NOT NULL,     due\_date      DATE NOT NULL,     status        VARCHAR(20) NOT NULL DEFAULT 'Pending'                   CHECK (status IN ('Pending','InProgress','Filed','Overdue')),     filed\_at      TIMESTAMPTZ,     evidence\_id   UUID,  \-- CMS document reference     regulator\_ref VARCHAR(100) ); |

### **6.3.2 Policy Pack Evaluation Engine**

| Rust |
| :---- |
| // ume\_chombo/src/services/evaluation\_service.rs \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct PolicyRule {     pub rule\_id:     String,     pub name:        String,     pub condition:   RuleCondition,  // evaluated against entity fields     pub obligation:  ObligationType, // Filing | Registration | Disclosure | Maintenance     pub filing\_type: Option\<String\>,     pub lead\_days:   Option\<u32\>,     pub severity:    AlertSeverity,  // Critical | High | Medium | Low } pub struct EvaluationService {     pack\_repo:   Arc\<dyn PolicyPackRepository\>,     entity\_repo: Arc\<dyn EntityRepository\>,     kernel:      Arc\<dyn KernelFacade\>, } impl EvaluationService {     /// Evaluate an entity against all applicable policy packs.     /// Returns compliance alerts and derived filing schedule.     pub async fn evaluate(\&self, entity\_id: \&EntityId)             \-\> Result\<EvaluationResult, UmeError\> {         let entity \= self.entity\_repo.get(entity\_id).await?             .ok\_or\_else(|| UmeError::not\_found("LegalEntity", entity\_id))?;         // Load all packs applicable to this jurisdiction \+ entity type         let packs \= self.pack\_repo             .by\_jurisdiction\_and\_type(\&entity.jurisdiction, \&entity.entity\_type)             .await?;         // Evaluate all packs in parallel (rayon for CPU-bound work)         let results: Vec\<PackResult\> \= packs.par\_iter()             .map(|pack| self.evaluate\_pack(\&entity, pack))             .collect();         let alerts: Vec\<ComplianceAlert\> \= results.iter()             .flat\_map(|r| r.alerts.clone()).collect();         let filings: Vec\<FilingScheduleEntry\> \= results.iter()             .flat\_map(|r| r.filings.clone()).collect();         // Publish evaluation completed event         self.kernel.publish("chombo.entity.evaluated", json\!({             "entity\_id": entity\_id,             "alert\_count": alerts.len(),             "critical\_alerts": alerts.iter().filter(|a| a.is\_critical()).count(),         }), Default::default()).await?;         Ok(EvaluationResult { entity\_id: \*entity\_id, alerts, filings })     }     fn evaluate\_pack(\&self, entity: \&LegalEntity, pack: \&PolicyPack) \-\> PackResult {         let mut alerts \= Vec::new();         let mut filings \= Vec::new();         for rule in \&pack.rules {             if rule.condition.matches(entity) {                 match \&rule.obligation {                     ObligationType::Filing \=\> {                         filings.push(FilingScheduleEntry::from\_rule(rule, entity));                     }                     \_ \=\> {                         alerts.push(ComplianceAlert::from\_rule(rule, entity));                     }                 }             }         }         PackResult { pack\_id: pack.pack\_id.clone(), alerts, filings }     } } |

## **6.4 Risk Management Module (MOD-33)**

### **6.4.1 Risk Data Model**

| SQL / DDL |
| :---- |
| \-- risk.risks CREATE TABLE risk.risks (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     risk\_ref        VARCHAR(30) UNIQUE,     \-- human-readable ref: RISK-2026-001     title           VARCHAR(300) NOT NULL,     description     TEXT NOT NULL,     category        VARCHAR(50) NOT NULL,   \-- Strategic|Financial|Operational|...     sub\_category    VARCHAR(50),     inherent\_likelihood  SMALLINT NOT NULL CHECK (inherent\_likelihood BETWEEN 1 AND 5),     inherent\_impact      SMALLINT NOT NULL CHECK (inherent\_impact BETWEEN 1 AND 5),     inherent\_score       SMALLINT GENERATED ALWAYS AS                          (inherent\_likelihood \* inherent\_impact) STORED,     residual\_likelihood  SMALLINT CHECK (residual\_likelihood BETWEEN 1 AND 5),     residual\_impact      SMALLINT CHECK (residual\_impact BETWEEN 1 AND 5),     residual\_score       SMALLINT GENERATED ALWAYS AS                          (residual\_likelihood \* residual\_impact) STORED,     treatment\_type  VARCHAR(20) NOT NULL DEFAULT 'Mitigate'                     CHECK (treatment\_type IN ('Accept','Mitigate','Transfer','Avoid')),     owner\_id        UUID REFERENCES hr.employees(id),     sponsor\_id      UUID REFERENCES hr.employees(id),     status          VARCHAR(20) NOT NULL DEFAULT 'Open',     appetite\_breached BOOLEAN GENERATED ALWAYS AS (residual\_score \> 12\) STORED,     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     updated\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     version         BIGINT NOT NULL DEFAULT 1 ); \-- risk.kris CREATE TABLE risk.kris (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     risk\_id         UUID NOT NULL REFERENCES risk.risks(id),     org\_id          UUID NOT NULL,     name            VARCHAR(200) NOT NULL,     metric\_source   VARCHAR(100),  \-- analytics KPI code or manual     current\_value   NUMERIC(12,4),     amber\_threshold NUMERIC(12,4) NOT NULL,     red\_threshold   NUMERIC(12,4) NOT NULL,     unit            VARCHAR(30),     last\_updated    TIMESTAMPTZ ); |

### **6.4.2 KRI Monitoring**

| Rust |
| :---- |
| // ume\_risk/src/services/kri\_monitor.rs pub struct KriMonitor {     kri\_repo: Arc\<dyn KriRepository\>,     kernel:   Arc\<dyn KernelFacade\>, } impl KriMonitor {     /// Called periodically from the kernel scheduler.     pub async fn check\_all\_kris(\&self) \-\> Result\<(), UmeError\> {         let kris \= self.kri\_repo.all\_active().await?;         for kri in kris {             let Some(value) \= kri.current\_value else { continue };             let status \= if value \>= kri.red\_threshold {                 KriStatus::Red             } else if value \>= kri.amber\_threshold {                 KriStatus::Amber             } else {                 KriStatus::Green             };             match status {                 KriStatus::Red \=\> {                     self.kernel.publish("risk.kri.red\_threshold", json\!({                         "kri\_id": kri.id, "risk\_id": kri.risk\_id,                         "value": value, "threshold": kri.red\_threshold,                     }), Default::default()).await?;                 }                 KriStatus::Amber \=\> {                     self.kernel.publish("risk.kri.amber\_threshold", json\!({                         "kri\_id": kri.id, "risk\_id": kri.risk\_id,                         "value": value, "threshold": kri.amber\_threshold,                     }), Default::default()).await?;                 }                 KriStatus::Green \=\> {}             }         }         Ok(())     } } |

## **6.5 Process, Orchestration & Workflow Module (MOD-29)**

### **6.5.1 Workflow State Machine**

Workflow instances are modeled as state machines. The Process Module persists instance state and transitions; the executor pool handles step execution.

| SQL / DDL |
| :---- |
| \-- process.workflow\_definitions CREATE TABLE process.workflow\_definitions (     id           UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id       UUID NOT NULL,     name         VARCHAR(200) NOT NULL,     version      INT NOT NULL DEFAULT 1,     trigger\_event VARCHAR(100),  \-- event topic that auto-starts this workflow     steps        JSONB NOT NULL, \-- serialized WorkflowStep\[\]     is\_active    BOOLEAN NOT NULL DEFAULT true ); \-- process.workflow\_instances CREATE TABLE process.workflow\_instances (     id             UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id         UUID NOT NULL,     definition\_id  UUID NOT NULL REFERENCES process.workflow\_definitions(id),     status         VARCHAR(20) NOT NULL DEFAULT 'Running'                    CHECK (status IN ('Running','Suspended','Completed',                                      'Failed','Cancelled')),     context        JSONB NOT NULL DEFAULT '{}'::jsonb,  \-- runtime variables     current\_step   VARCHAR(100),     started\_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),     completed\_at   TIMESTAMPTZ,     triggered\_by   UUID,     \-- source event ID     parent\_instance\_id UUID REFERENCES process.workflow\_instances(id) ); |

### **6.5.2 Workflow Executor**

| Rust |
| :---- |
| // ume\_process/src/executor.rs pub struct WorkflowExecutor {     instance\_repo:    Arc\<dyn InstanceRepository\>,     definition\_repo:  Arc\<dyn DefinitionRepository\>,     task\_dispatcher:  Arc\<TaskDispatcher\>,     kernel:           Arc\<dyn KernelFacade\>, } impl WorkflowExecutor {     pub async fn advance(\&self, instance\_id: \&InstanceId) \-\> Result\<(), UmeError\> {         let mut instance \= self.instance\_repo.get(instance\_id).await?             .ok\_or\_else(|| UmeError::not\_found("WorkflowInstance", instance\_id))?;         let definition \= self.definition\_repo.get(\&instance.definition\_id).await?             .ok\_or\_else(|| UmeError::not\_found("WorkflowDefinition", \&instance.definition\_id))?;         let current\_step \= definition.step\_by\_id(\&instance.current\_step)?;         match \&current\_step.step\_type {             StepType::HumanTask { assignee\_expr, form\_id, sla\_hours } \=\> {                 // Create work item in Work Module via event                 self.kernel.publish("process.task.created", json\!({                     "instance\_id": instance\_id,                     "step\_id": current\_step.id,                     "assignee": evaluate\_expr(assignee\_expr, \&instance.context),                     "form\_id": form\_id,                     "due\_by": Utc::now() \+ Duration::hours(\*sla\_hours as i64),                 }), Default::default()).await?;             }             StepType::AutomatedTask { action } \=\> {                 let result \= self.execute\_action(action, \&instance.context).await?;                 instance.context.merge(result);                 self.transition\_to\_next(\&mut instance, \&definition, None).await?;             }             StepType::Decision { conditions } \=\> {                 let next \= conditions.iter()                     .find(|c| c.condition.evaluate(\&instance.context))                     .map(|c| \&c.next\_step\_id)                     .ok\_or\_else(|| UmeError::business\_rule("no matching decision branch"))?;                 self.transition\_to\_named\_step(\&mut instance, \&definition, next).await?;             }             StepType::End \=\> {                 self.complete\_instance(\&mut instance).await?;             }         }         Ok(())     } } |

## **6.6 Marketing System — Soko (MOD-22)**

### **6.6.1 Strategy Pack Engine**

Soko's core capability is executing 70+ strategy packs against a campaign and its accumulated market signals. Each pack is a rule-based evaluator that returns insights and activation actions.

| SQL / DDL |
| :---- |
| \-- soko.campaigns CREATE TABLE soko.campaigns (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     name            VARCHAR(200) NOT NULL,     status          VARCHAR(20) NOT NULL DEFAULT 'Draft'                     CHECK (status IN ('Draft','Active','Paused','Completed')),     channels        TEXT\[\] NOT NULL,     target\_audience JSONB,      \-- audience persona definition     budget\_amount   NUMERIC(12,2),     budget\_currency CHAR(3) DEFAULT 'USD',     start\_date      DATE,     end\_date        DATE,     kpi\_targets     JSONB,      \-- { cac: 50, conversion\_rate: 0.05, ... }     strategy\_context JSONB,    \-- market context fed to strategy packs     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW() ); \-- soko.market\_signals CREATE TABLE soko.market\_signals (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     campaign\_id     UUID REFERENCES soko.campaigns(id),     signal\_type     VARCHAR(50) NOT NULL, \-- Click|Open|Conversion|Impression|...     channel         VARCHAR(50),     value           NUMERIC(12,4),     metadata        JSONB,     received\_at     TIMESTAMPTZ NOT NULL DEFAULT NOW() ); |

| Rust |
| :---- |
| // ume\_soko/src/services/strategy\_engine.rs pub struct StrategyEngine {     packs:         Vec\<Arc\<dyn StrategyPack\>\>,  // 70+ strategy packs loaded at init     signal\_repo:   Arc\<dyn SignalRepository\>,     kernel:        Arc\<dyn KernelFacade\>, } /// Each strategy pack implements this trait. pub trait StrategyPack: Send \+ Sync {     fn pack\_id(\&self) \-\> &'static str;     fn name(\&self) \-\> &'static str;     fn category(\&self) \-\> StrategyCategory;     /// Evaluate the pack against the campaign \+ accumulated signals.     /// Returns insights (human-readable) and actions (machine-executable).     fn evaluate(\&self, campaign: \&Campaign,                signals: &\[MarketSignal\]) \-\> PackEvalResult; } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct PackEvalResult {     pub pack\_id:    String,     pub insights:   Vec\<Insight\>,     // human-readable findings     pub actions:    Vec\<ActivationAction\>,  // recommended next actions     pub score:      f32,              // 0.0–1.0 relevance score for this campaign } impl StrategyEngine {     /// Evaluate all packs in parallel. Returns ranked insights \+ action list.     pub async fn evaluate\_campaign(\&self, campaign: \&Campaign)             \-\> Result\<StrategyEvaluation, UmeError\> {         let signals \= self.signal\_repo             .list\_by\_campaign(\&campaign.id).await?;         // CPU-bound: run all 70+ packs in parallel via rayon         let results: Vec\<PackEvalResult\> \= self.packs.par\_iter()             .map(|pack| pack.evaluate(campaign, \&signals))             .collect();         // Rank by score, deduplicate overlapping insights         let ranked \= Self::rank\_and\_deduplicate(results);         self.kernel.publish("soko.campaign.evaluated", json\!({             "campaign\_id": campaign.id,             "insight\_count": ranked.insights.len(),             "top\_action": ranked.actions.first(),         }), Default::default()).await?;         Ok(ranked)     } } |

## **6.7 Security, Privacy & Audit Module (MOD-36)**

### **6.7.1 Identity & Session Management**

| SQL / DDL |
| :---- |
| \-- security.identities CREATE TABLE security.identities (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     employee\_id     UUID REFERENCES hr.employees(id),     username        VARCHAR(254) NOT NULL,     email           VARCHAR(254) NOT NULL,     password\_hash   VARCHAR(200),          \-- bcrypt($cost=12) or NULL if SSO-only     mfa\_enabled     BOOLEAN NOT NULL DEFAULT false,     mfa\_type        VARCHAR(20),           \-- TOTP | FIDO2 | SMS     mfa\_secret      BYTEA,                 \-- encrypted; vault-managed key     status          VARCHAR(20) NOT NULL DEFAULT 'Active'                     CHECK (status IN ('Active','Locked','Disabled')),     failed\_attempts SMALLINT NOT NULL DEFAULT 0,     locked\_until    TIMESTAMPTZ,     last\_login\_at   TIMESTAMPTZ,     password\_changed\_at TIMESTAMPTZ ); \-- security.sessions (JWT nonce store for revocation) CREATE TABLE security.sessions (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     identity\_id     UUID NOT NULL REFERENCES security.identities(id),     jti             UUID NOT NULL UNIQUE,   \-- JWT ID claim     issued\_at       TIMESTAMPTZ NOT NULL,     expires\_at      TIMESTAMPTZ NOT NULL,     revoked\_at      TIMESTAMPTZ,     ip\_address      INET,     user\_agent      VARCHAR(500) ); |

### **6.7.2 Authentication Flow**

| Rust |
| :---- |
| // ume\_security/src/services/auth\_service.rs impl AuthService {     pub async fn authenticate(\&self, req: AuthRequest)             \-\> Result\<TokenPair, UmeError\> {         // 1\. Load identity         let identity \= self.identity\_repo             .by\_username(\&req.username).await?             .ok\_or(UmeError::Unauthenticated)?;         // 2\. Lockout check         if let Some(locked\_until) \= identity.locked\_until {             if Utc::now() \< locked\_until {                 return Err(UmeError::BusinessRuleViolation {                     rule: "account.lockout".into(),                     message: format\!("Account locked until {}", locked\_until),                 });             }         }         // 3\. Password verification (constant-time)         let valid \= bcrypt::verify(\&req.password, \&identity.password\_hash             .ok\_or(UmeError::Unauthenticated)?)?;         if \!valid {             self.record\_failed\_attempt(\&identity.id).await?;             return Err(UmeError::Unauthenticated);         }         // 4\. MFA challenge (if enrolled)         if identity.mfa\_enabled {             if let Some(totp) \= req.totp\_code {                 self.verify\_totp(\&identity, \&totp)?;             } else {                 return Err(UmeError::MfaRequired);             }         }         // 5\. Reset failed attempts; issue tokens         self.reset\_failed\_attempts(\&identity.id).await?;         let tokens \= self.issue\_tokens(\&identity).await?;         // 6\. Audit         self.kernel.audit(AuditRecord::new(             \&SubjectId::from(\&identity.id),             "security.identity.login",             \&identity.id.to\_string(),             AuditOutcome::Success,         )).await?;         Ok(tokens)     } } |

## **6.8 Work Management Module (MOD-40)**

### **6.8.1 Work Item Model**

| SQL / DDL |
| :---- |
| \-- work.items CREATE TABLE work.items (     id              UUID PRIMARY KEY DEFAULT gen\_random\_uuid(),     org\_id          UUID NOT NULL,     item\_ref        VARCHAR(30),             \-- WI-2026-001     title           VARCHAR(500) NOT NULL,     description     TEXT,     item\_type       VARCHAR(30) NOT NULL                     CHECK (item\_type IN ('Task','Story','Bug','Epic',                                          'WorkOrder','Approval','Request')),     status          VARCHAR(30) NOT NULL DEFAULT 'Backlog'                     CHECK (status IN ('Backlog','ToDo','InProgress',                                       'InReview','Done','Cancelled')),     priority        SMALLINT NOT NULL DEFAULT 3 CHECK (priority BETWEEN 1 AND 5),     assignee\_id     UUID REFERENCES hr.employees(id),     org\_unit\_id     UUID REFERENCES admin.org\_units(id),     project\_id      UUID REFERENCES portfolio.projects(id),     sprint\_id       UUID REFERENCES work.sprints(id),     parent\_id       UUID REFERENCES work.items(id),     story\_points    SMALLINT,     due\_date        DATE,     started\_at      TIMESTAMPTZ,     completed\_at    TIMESTAMPTZ,     estimated\_hours NUMERIC(6,2),     logged\_hours    NUMERIC(6,2) GENERATED ALWAYS AS (         (SELECT COALESCE(SUM(hours),0) FROM work.time\_logs WHERE item\_id \= id)     ) STORED,     created\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     updated\_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),     version         BIGINT NOT NULL DEFAULT 1 ); |

# **7\. API Layer Design**

## **7.1 ume\_server Architecture**

ume\_server is an Axum-based HTTP server. It receives requests, authenticates, authorizes, routes to module handlers, and returns structured responses. It does not contain business logic — all logic lives in kernel modules.

| Rust |
| :---- |
| // ume\_server/src/main.rs \#\[tokio::main\] async fn main() \-\> anyhow::Result\<()\> {     let config \= KernelConfig::from\_env()?;     let kernel \= UmeKernel::boot(config).await?;     let app \= Router::new()         // System routes         .route("/health",       get(handlers::system::health))         .route("/metrics",      get(handlers::system::metrics))         .route("/openapi.json", get(handlers::system::openapi))         // Auth routes (no JWT required)         .route("/v1/auth/login",    post(handlers::auth::login))         .route("/v1/auth/refresh",  post(handlers::auth::refresh))         .route("/v1/auth/logout",   post(handlers::auth::logout))         // Module API routes (JWT required via middleware)         .nest("/v1/finance",     finance\_router())         .nest("/v1/hr",          hr\_router())         .nest("/v1/chombo",      chombo\_router())         .nest("/v1/grc",         grc\_router())         .nest("/v1/risk",        risk\_router())         .nest("/v1/sales",       sales\_router())         .nest("/v1/work",        work\_router())         // ... 35 more module routers         // Middleware stack         .layer(middleware::from\_fn\_with\_state(kernel.clone(), auth\_middleware))         .layer(middleware::from\_fn(request\_id\_middleware))         .layer(middleware::from\_fn(rate\_limit\_middleware))         .layer(middleware::from\_fn(logging\_middleware))         .layer(TraceLayer::new\_for\_http())         .with\_state(kernel.clone());     let addr \= SocketAddr::from((\[0, 0, 0, 0\], config.server.port));     tracing::info\!("ume\_server listening on {}", addr);     axum::Server::bind(\&addr)         .serve(app.into\_make\_service\_with\_connect\_info::\<SocketAddr\>())         .with\_graceful\_shutdown(shutdown\_signal())         .await?;     Ok(()) } |

## **7.2 Authentication Middleware**

| Rust |
| :---- |
| // ume\_server/src/middleware/auth.rs pub async fn auth\_middleware(     State(kernel): State\<Arc\<UmeKernel\>\>,     mut request: Request,     next: Next, ) \-\> Result\<Response, ApiError\> {     // Skip auth for public routes     if is\_public\_path(request.uri().path()) {         return Ok(next.run(request).await);     }     // Extract bearer token     let token \= request.headers()         .get(AUTHORIZATION)         .and\_then(|v| v.to\_str().ok())         .and\_then(|v| v.strip\_prefix("Bearer "))         .ok\_or(ApiError::Unauthenticated)?;     // Verify JWT (RS256; public key from Security Module)     let claims \= kernel.security\_module()         .verify\_token(token).await         .map\_err(|\_| ApiError::Unauthenticated)?;     // Check token revocation (session store)     if kernel.security\_module().is\_revoked(\&claims.jti).await? {         return Err(ApiError::Unauthenticated);     }     // Inject authenticated context into request extensions     request.extensions\_mut().insert(AuthContext {         subject\_id: claims.sub.parse()?,         org\_id:     claims.org\_id.parse()?,         session\_id: claims.jti.to\_string(),         roles:      claims.roles,     });     Ok(next.run(request).await) } |

## **7.3 Standard Handler Pattern**

All module handlers follow an identical pattern: extract auth context → extract and validate request → call service → map result to response → return.

| Rust |
| :---- |
| // ume\_server/src/handlers/finance.rs pub async fn post\_journal\_entry(     State(kernel): State\<Arc\<UmeKernel\>\>,     Extension(auth): Extension\<AuthContext\>,     Json(body): Json\<PostJournalRequest\>, ) \-\> Result\<Json\<PostJournalResponse\>, ApiError\> {     // 1\. Input validation (serde \+ custom validators)     body.validate().map\_err(ApiError::validation)?;     // 2\. Route to module service     let finance \= kernel.module::\<FinanceModule\>("finance.ledger")?;     let entry\_id \= finance.ledger\_service()         .post\_journal(body.into\_command(), \&auth.subject\_id)         .await         .map\_err(ApiError::from)?;     // 3\. Return structured response     Ok(Json(PostJournalResponse {         id: entry\_id,         status: "posted",     })) } // ApiError maps UmeError variants to HTTP status codes impl From\<UmeError\> for ApiError {     fn from(err: UmeError) \-\> Self {         match err {             UmeError::AuthorizationFailed { .. } \=\> ApiError::Forbidden(err.to\_string()),             UmeError::Unauthenticated         \=\> ApiError::Unauthenticated,             UmeError::NotFound { .. }          \=\> ApiError::NotFound(err.to\_string()),             UmeError::ValidationFailed { .. }  \=\> ApiError::UnprocessableEntity(err),             UmeError::OptimisticLockConflict{..}=\> ApiError::Conflict(err.to\_string()),             UmeError::BusinessRuleViolation{..} \=\> ApiError::UnprocessableEntity(err),             \_                                  \=\> ApiError::Internal(err.to\_string()),         }     } } |

## **7.4 Standard API Response Envelopes**

All API responses follow consistent envelope structures for both success and error cases.

| Rust |
| :---- |
| // ume\_server/src/response.rs — response envelope types /// Single resource response \#\[derive(Serialize)\] pub struct ResourceResponse\<T: Serialize\> {     pub data:    T,     pub meta:    ResponseMeta, } /// Paginated list response \#\[derive(Serialize)\] pub struct ListResponse\<T: Serialize\> {     pub data:       Vec\<T\>,     pub pagination: PaginationMeta,     pub meta:       ResponseMeta, } \#\[derive(Serialize)\] pub struct PaginationMeta {     pub cursor:      Option\<String\>,  // next page cursor     pub has\_more:    bool,     pub total\_count: Option\<u64\>,     // only included when explicitly requested } \#\[derive(Serialize)\] pub struct ResponseMeta {     pub request\_id:   String,     pub api\_version:  &'static str,     pub generated\_at: DateTime\<Utc\>, } /// Error response \#\[derive(Serialize)\] pub struct ErrorResponse {     pub error\_code:       String,           // machine-readable e.g. VALIDATION\_FAILED     pub message:          String,           // human-readable summary     pub detail:           Vec\<FieldError\>,  // field-level errors     pub request\_id:       String,     pub documentation\_url: Option\<String\>, } |

## **7.5 WebSocket Event Stream**

Real-time dashboard updates are delivered via WebSocket. Clients authenticate with a JWT query param and subscribe to event topic patterns.

| Rust |
| :---- |
| // ume\_server/src/ws/event\_stream.rs pub async fn ws\_handler(     ws: WebSocketUpgrade,     State(kernel): State\<Arc\<UmeKernel\>\>,     Query(params): Query\<WsParams\>, ) \-\> Response {     // Authenticate via token query param (WS can't use headers)     let auth \= kernel.security\_module()         .verify\_token(\&params.token).await         .expect("ws auth failed");     ws.on\_upgrade(move |socket| handle\_ws(socket, kernel, auth)) } async fn handle\_ws(mut socket: WebSocket, kernel: Arc\<UmeKernel\>,                    auth: TokenClaims) {     // Client sends subscribe messages: { "action": "subscribe", "topic": "risk.kri.\*" }     let mut subscriptions: Vec\<SubscriptionHandle\> \= Vec::new();     let (tx, mut rx) \= tokio::sync::mpsc::channel::\<Message\>(100);     loop {         tokio::select\! {             Some(msg) \= socket.recv() \=\> {                 match parse\_client\_message(msg) {                     ClientMessage::Subscribe { topic } \=\> {                         let handle \= kernel.event\_bus()                             .subscribe(\&topic, Arc::new(WsForwarder(tx.clone())))                             .await.unwrap();                         subscriptions.push(handle);                     }                     ClientMessage::Unsubscribe { topic } \=\> {                         subscriptions.retain(|h| h.topic() \!= \&topic);                     }                     ClientMessage::Ping \=\> {                         socket.send(Message::Pong(vec\!\[\])).await.ok();                     }                     ClientMessage::Close \=\> break,                 }             }             Some(event\_msg) \= rx.recv() \=\> {                 if socket.send(event\_msg).await.is\_err() { break; }             }         }     }     // Clean up subscriptions on disconnect     for handle in subscriptions { handle.cancel().await; } } |

## **7.6 ume\_runtime CLI Design**

The CLI runtime is a Tokio-based REPL and batch runner. It connects to the kernel in-process (not via HTTP) for system operations.

| Rust |
| :---- |
| // ume\_runtime/src/main.rs fn main() \-\> anyhow::Result\<()\> {     let cli \= Cli::parse();  // clap     match cli.command {         Commands::Start    \=\> runtime::start\_server()?,         Commands::Repl     \=\> runtime::start\_repl()?,         Commands::Exec { script } \=\> runtime::exec\_script(script)?,         Commands::Kernel(cmd) \=\> runtime::kernel\_command(cmd)?,         Commands::Module(cmd) \=\> runtime::module\_command(cmd)?,         Commands::Backup(cmd) \=\> runtime::backup\_command(cmd)?,         Commands::Audit(cmd)  \=\> runtime::audit\_command(cmd)?,     }     Ok(()) } // Example REPL interaction // ume\> kernel status // State: Running | Boot time: 2026-03-07T08:00:00Z (4h 12m ago) // Modules: 40 running, 0 degraded, 0 stopped // Drivers: storage=healthy identity=healthy comms=healthy //   // ume\> module list \--domain=finance // ID                  Domain   Version  State    Last Health // finance.ledger      Finance  1.0.0    Running  OK (28s ago) //   // ume\> audit query \--actor=user:alice \--from=2026-03-01 \--limit=20 |

# **8\. Data Architecture**

## **8.1 Schema Namespace Organization**

Each module owns its own PostgreSQL schema. Cross-module foreign keys reference other schemas explicitly. This enforces clear data ownership at the database level.

| Schema | Owner Module | Key Tables |
| :---- | :---- | :---- |
| admin | MOD-01 Administration | organizations, org\_units, policies, enterprise\_calendar |
| finance | MOD-14 Finance | ledger\_accounts, journal\_entries, journal\_lines, invoices, budget\_lines, periods |
| hr | MOD-16 HR | employees, compensation, leave\_balances, leave\_requests, payroll\_runs |
| chombo | MOD-13 Legal Entity | legal\_entities, policy\_packs, filing\_records, compliance\_alerts |
| grc | MOD-15 GRC | obligations, controls, control\_tests, audits, audit\_findings |
| risk | MOD-33 Risk | risks, treatment\_plans, kris, kri\_readings |
| security | MOD-36 Security | identities, sessions, incidents, vulnerabilities, privacy\_records |
| work | MOD-40 Work | items, sprints, time\_logs, dependencies |
| process | MOD-29 Process | workflow\_definitions, workflow\_instances, workflow\_steps |
| crm | MOD-08 CRM | accounts, contacts, interactions, relationships |
| sales | MOD-34 Sales | opportunities, pipeline\_stages, quotes, commissions |
| soko | MOD-22 Marketing | campaigns, market\_signals, strategy\_pack\_results, channels |
| portfolio | MOD-27 Portfolio | portfolios, programs, projects, milestones |
| it | MOD-18 IT | configuration\_items, incidents, changes, service\_requests |
| cms | MOD-06 CMS | documents, document\_versions, document\_access |
| learning | MOD-20 Learning | courses, learning\_paths, enrollments, completions, certificates |
| investment | MOD-17 Investment | funds, positions, appraisals, capital\_accounts |
| audit | Kernel | audit\_records (append-only, no delete path) |
| migrations | Kernel | migration\_log (applied migration tracking) |

## **8.2 Multi-Tenancy Design**

Multi-tenancy is enforced via org\_id partitioning. Every data table carries org\_id as a NOT NULL column. All queries are org\_id-scoped in the StorageManager layer.

| Rust |
| :---- |
| // ume\_kernel/src/storage.rs — multi-tenancy enforcement impl TieredStorageManager {     /// All queries are automatically scoped to the current org.     pub async fn query\<T: DeserializeOwned \+ Send\>(         \&self,         namespace: \&str,         filter: Filter,         page: PageRequest,     ) \-\> Result\<PageResponse\<T\>, UmeError\> {         // Inject org\_id into every query — this is unconditional         let scoped\_filter \= filter.and(Filter::eq("org\_id", self.org\_id.to\_string()));         self.warm\_store.query(namespace, scoped\_filter, page).await     }     pub async fn put\<T: Serialize \+ Send\>(         \&self,         namespace: \&str,         id: \&str,         value: \&T,         version: Option\<u64\>,     ) \-\> Result\<u64, UmeError\> {         // All values must contain org\_id field — enforced at schema level         self.warm\_store.put(namespace, id, value, version).await     } } |

## **8.3 Core Schema Conventions**

All domain entity tables follow these conventions without exception:

| Convention | Column Name | Type | Description |
| :---- | :---- | :---- | :---- |
| Primary key | id | UUID DEFAULT gen\_random\_uuid() | UUID v4 generated by the database |
| Tenant scope | org\_id | UUID NOT NULL | Owning organization; all queries scoped by this |
| Optimistic lock | version | BIGINT NOT NULL DEFAULT 1 | Incremented on every UPDATE; stale writes rejected |
| Created timestamp | created\_at | TIMESTAMPTZ NOT NULL DEFAULT NOW() | UTC timestamp; never modified after insert |
| Updated timestamp | updated\_at | TIMESTAMPTZ NOT NULL DEFAULT NOW() | UTC timestamp; updated by trigger on every UPDATE |
| Created by | created\_by | UUID | SubjectId of the actor who created the record |
| Soft delete | deleted\_at | TIMESTAMPTZ | NULL \= active; non-NULL \= soft-deleted |
| Soft delete actor | deleted\_by | UUID | SubjectId of the actor who deleted the record |

## **8.4 Migration System**

All schema changes are applied through the StorageManager's migration system. Migrations are versioned, idempotent, and recorded in the migration\_log table.

| SQL / DDL |
| :---- |
| \-- migrations.migration\_log (managed by kernel; never touched by modules) CREATE TABLE migrations.migration\_log (     id             SERIAL PRIMARY KEY,     migration\_id   VARCHAR(100) UNIQUE NOT NULL,  \-- e.g. "finance\_0012\_add\_fund\_type"     module\_id      VARCHAR(100) NOT NULL,     applied\_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),     checksum       VARCHAR(64) NOT NULL,          \-- SHA-256 of migration SQL     duration\_ms    INT NOT NULL ); |

| Rust |
| :---- |
| // Migration file naming: {module}\_{seq:04}\_{description}.sql // e.g. finance\_0001\_initial\_schema.sql //      finance\_0002\_add\_restricted\_funds.sql //      chombo\_0001\_initial\_schema.sql // Migrations are registered in each module's lib.rs: pub const MIGRATIONS: &\[Migration\] \= &\[     Migration {         id:       "finance\_0001\_initial\_schema",         module:   "finance.ledger",         up:       include\_str\!("../migrations/finance\_0001\_initial\_schema.sql"),         checksum: "a3f7c2...",  // compile-time SHA-256     },     Migration {         id:       "finance\_0002\_add\_restricted\_funds",         module:   "finance.ledger",         up:       include\_str\!("../migrations/finance\_0002\_add\_restricted\_funds.sql"),         checksum: "b8e1d4...",     }, \]; |

## **8.5 Event Persistence & Replay**

High-value domain events are persisted to the event\_log table in addition to being dispatched on the bus. This enables audit replay and event sourcing for Finance, GRC, and Board modules.

| SQL / DDL |
| :---- |
| \-- kernel.event\_log (persisted events for audit and replay) CREATE TABLE kernel.event\_log (     id               UUID PRIMARY KEY,     topic            VARCHAR(200) NOT NULL,     payload          JSONB NOT NULL,     publisher\_module VARCHAR(100) NOT NULL,     published\_at     TIMESTAMPTZ NOT NULL,     correlation\_id   VARCHAR(100),     causation\_id     UUID REFERENCES kernel.event\_log(id),     org\_id           UUID NOT NULL ); CREATE INDEX idx\_event\_log\_topic ON kernel.event\_log(topic); CREATE INDEX idx\_event\_log\_published\_at ON kernel.event\_log(published\_at); CREATE INDEX idx\_event\_log\_org\_id ON kernel.event\_log(org\_id); |

## **8.6 Full-Text Search Architecture**

The Knowledge and CMS modules require full-text search. Search is implemented via a dedicated SearchDriver that abstracts the backing search engine (PostgreSQL tsvector, or Elasticsearch/Meilisearch for scale).

| Rust |
| :---- |
| // ume\_core/src/traits.rs — SearchDriver trait \#\[async\_trait\] pub trait SearchDriver: Send \+ Sync {     /// Index a document for searching.     async fn index(\&self, req: IndexRequest) \-\> Result\<(), UmeError\>;     /// Delete a document from the index.     async fn delete(\&self, namespace: \&str, id: \&str) \-\> Result\<(), UmeError\>;     /// Full-text search with optional filter and ranking.     async fn search\<T: DeserializeOwned \+ Send\>(         \&self,         query: SearchQuery,     ) \-\> Result\<SearchResponse\<T\>, UmeError\>;     /// Suggest completions for typeahead.     async fn suggest(\&self, prefix: \&str, namespace: \&str)         \-\> Result\<Vec\<String\>, UmeError\>; } \#\[derive(Debug, Serialize, Deserialize)\] pub struct IndexRequest {     pub namespace:  String,       // e.g. "knowledge.articles"     pub id:         String,     pub title:      String,     pub body:       String,     pub tags:       Vec\<String\>,     pub metadata:   serde\_json::Value,     pub org\_id:     OrgId, } |

# **9\. Security Architecture Design**

## **9.1 Security Layering Model**

UME implements defence-in-depth with four concentric security layers. An attacker must defeat every layer to reach sensitive data.

| Layer | Mechanism | Where Enforced | Bypassed By |
| :---- | :---- | :---- | :---- |
| Transport | TLS 1.2+ on all HTTP connections | ume\_server TLS termination | Nothing — TLS is mandatory in production mode |
| Authentication | JWT RS256 \+ MFA | auth\_middleware; SecurityModule.verify\_token() | Nothing — all non-public routes require valid JWT |
| Authorization | RBAC permission check | KernelFacade.assert\_can(); called in every service method | Nothing — kernel facade enforces before reaching module logic |
| Data | AES-256-GCM at rest; field-level encryption for PII | StorageDriver encryption; PII field decorators | Physical database access still sees ciphertext only |

## **9.2 JWT Token Design**

Access tokens are RS256-signed JWTs. The signing key pair is generated and stored in the Security Module vault. Public keys are distributed to ume\_server instances via the key distribution endpoint.

| Rust |
| :---- |
| // JWT Claims structure \#\[derive(Debug, Serialize, Deserialize)\] pub struct UmeClaims {     // Standard JWT claims     pub iss: String,          // "ume:{org\_id}"     pub sub: String,          // SubjectId (UUID)     pub aud: String,          // "ume-api"     pub iat: i64,             // issued at (Unix timestamp)     pub exp: i64,             // expiry (Unix timestamp)     pub jti: Uuid,            // unique token ID for revocation     // UME-specific claims     pub org\_id: String,       // OrgId     pub subject\_type: String, // User | ServiceAccount | ApiKey     pub roles: Vec\<String\>,   // role IDs (for fast RBAC pre-check)     pub mfa\_verified: bool,   // whether MFA was completed this session } // Token issuance (Security Module) impl AuthService {     async fn issue\_tokens(\&self, identity: \&Identity) \-\> Result\<TokenPair, UmeError\> {         let now \= Utc::now();         let access\_claims \= UmeClaims {             iss: format\!("ume:{}", self.org\_id),             sub: identity.id.to\_string(),             aud: "ume-api".into(),             iat: now.timestamp(),             exp: (now \+ Duration::minutes(60)).timestamp(),             jti: Uuid::new\_v4(),             org\_id: self.org\_id.to\_string(),             subject\_type: "User".into(),             roles: self.rbac.roles\_for(\&identity.id).await?,             mfa\_verified: identity.mfa\_enabled,         };         let access\_token \= jsonwebtoken::encode(             \&Header::new(Algorithm::RS256),             \&access\_claims,             \&self.vault.signing\_key().await?,         )?;         // Persist session for revocation support         self.session\_repo.create(\&Session {             identity\_id: identity.id,             jti: access\_claims.jti,             issued\_at: now,             expires\_at: now \+ Duration::minutes(60),             ..Default::default()         }).await?;         Ok(TokenPair { access\_token, refresh\_token: /\* ... \*/ })     } } |

## **9.3 Cryptographic Vault Interface**

No module ever handles raw key material. All cryptographic operations go through the vault interface provided by the Security Module. This design is compatible with HSM backends.

| Rust |
| :---- |
| // ume\_core/src/traits.rs — CryptoVault trait \#\[async\_trait\] pub trait CryptoVault: Send \+ Sync {     /// Sign data with the named key.     async fn sign(\&self, key\_id: \&str, data: &\[u8\]) \-\> Result\<Vec\<u8\>, UmeError\>;     /// Verify a signature.     async fn verify(\&self, key\_id: \&str, data: &\[u8\],                    sig: &\[u8\]) \-\> Result\<bool, UmeError\>;     /// Encrypt data with the named key (AES-256-GCM).     async fn encrypt(\&self, key\_id: \&str, plaintext: &\[u8\])         \-\> Result\<EncryptedBlob, UmeError\>;     /// Decrypt data with the named key.     async fn decrypt(\&self, key\_id: \&str, blob: \&EncryptedBlob)         \-\> Result\<Vec\<u8\>, UmeError\>;     /// Rotate a key. Returns the new key ID.     /// Old key remains available for decryption during rotation window.     async fn rotate\_key(\&self, key\_id: \&str) \-\> Result\<String, UmeError\>;     /// Returns the public portion of an asymmetric key (for JWT verification).     async fn public\_key(\&self, key\_id: \&str) \-\> Result\<Vec\<u8\>, UmeError\>; } \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct EncryptedBlob {     pub key\_id:     String,    // identifies which key was used     pub key\_version: u32,      // supports key rotation     pub nonce:      Vec\<u8\>,   // 96-bit random nonce (GCM)     pub ciphertext: Vec\<u8\>,     pub tag:        Vec\<u8\>,   // 128-bit GCM authentication tag } |

## **9.4 Input Validation Architecture**

All API inputs pass through three validation tiers before reaching business logic.

| Tier | Mechanism | What It Catches | Returns On Failure |
| :---- | :---- | :---- | :---- |
| Schema validation | serde \+ validator crate derive macros | Type mismatches; missing required fields; basic format constraints | HTTP 422 with field-level FieldError\[\] |
| Domain validation | Service-layer validate() method calls | Business constraint violations; cross-field rules; referential integrity pre-checks | UmeError::ValidationFailed → HTTP 422 |
| Persistence validation | Database constraints (CHECK, FK, UNIQUE) | Race conditions; concurrent violations; deeper invariants | UmeError::StorageError → HTTP 409 or 500 |

| Rust |
| :---- |
| // Tier 1: serde \+ validator derive macros \#\[derive(Debug, Deserialize, Validate)\] pub struct PostJournalRequest {     \#\[validate(length(min \= 1, max \= 200))\]     pub description: String,     \#\[validate(length(min \= 2, message \= "At least 2 lines required"))\]     pub lines: Vec\<JournalLineRequest\>,     \#\[validate(regex(path \= "PERIOD\_REGEX", message \= "Must be YYYY-MM"))\]     pub period: String, } // Tier 2: domain validation in service layer impl PostJournalRequest {     pub fn validate\_domain(\&self) \-\> Result\<(), UmeError\> {         let sum: Decimal \= self.lines.iter()             .map(|l| l.debit.unwrap\_or\_default() \- l.credit.unwrap\_or\_default())             .sum();         if sum \!= Decimal::ZERO {             return Err(UmeError::ValidationFailed {                 errors: vec\!\[FieldError {                     field: "lines".into(),                     message: format\!("Journal does not balance: net \= {}", sum),                 }\]             });         }         Ok(())     } } |

## **9.5 SQL Injection Prevention**

All database interactions use parameterized queries. The StorageManager enforces this at the trait level — there is no API surface for raw SQL string concatenation from module code.

| Rust |
| :---- |
| // Filter types force parameterization — no raw SQL from modules \#\[derive(Debug, Clone)\] pub enum Filter {     Eq(String, FilterValue),     Ne(String, FilterValue),     Gt(String, FilterValue),     Lt(String, FilterValue),     In(String, Vec\<FilterValue\>),     Like(String, String),      // pattern is never user-controlled     IsNull(String),     And(Vec\<Filter\>),     Or(Vec\<Filter\>), } \#\[derive(Debug, Clone)\] pub enum FilterValue {     Str(String),     Uuid(Uuid),     Int(i64),     Decimal(Decimal),     Bool(bool),     DateTime(DateTime\<Utc\>), } // The SQLite/Postgres backend converts Filter to parameterized SQL internally. // Modules never see or write SQL — they use Filter enum values only. |

# **10\. Device Driver Design**

## **10.1 Driver Trait & Lifecycle**

All external system integrations implement the DeviceDriver trait. The kernel manages driver lifecycle. Modules never hold references to drivers directly — they access them through the kernel facade.

| Rust |
| :---- |
| // ume\_core/src/traits.rs — DeviceDriver base trait \#\[async\_trait\] pub trait DeviceDriver: Send \+ Sync \+ std::fmt::Debug {     fn device\_id(\&self)    \-\> &'static str;     fn device\_class(\&self) \-\> DeviceClass;     fn status(\&self)       \-\> DriverStatus;     async fn initialize(\&mut self, config: \&DriverConfig) \-\> Result\<(), UmeError\>;     async fn shutdown(\&mut self)                          \-\> Result\<(), UmeError\>;     async fn health\_check(\&self)                         \-\> DriverHealth; } \#\[derive(Debug, Clone, PartialEq, Eq)\] pub enum DeviceClass {     Storage,   // StorageDriver     Identity,  // IdentityDriver (LDAP, OAuth2, SAML)     Comms,     // CommDriver (SMTP, SMS, push)     Broker,    // EventBrokerDriver (NATS, Kafka, RabbitMQ)     Finance,   // FinanceDriver (ERP, banking)     Search,    // SearchDriver (Elasticsearch, Meilisearch)     Crypto,    // CryptoDriver (vault, HSM)     Storage2,  // ObjectStorage (S3, GCS, Azure Blob) } |

## **10.2 Storage Driver**

| Rust |
| :---- |
| // ume\_kernel/src/drivers/storage/ // SQLite driver — for embedded single-process deployment pub struct SqliteStorageDriver {     pool:    sqlx::SqlitePool,     db\_path: PathBuf, } // PostgreSQL driver — for standard and enterprise deployments pub struct PostgresStorageDriver {     pool:       sqlx::PgPool,     read\_pools: Vec\<sqlx::PgPool\>,  // read replicas     config:     PostgresConfig, } impl PostgresStorageDriver {     /// Route read vs write to appropriate pool.     fn pool\_for(\&self, is\_write: bool) \-\> \&sqlx::PgPool {         if is\_write || self.read\_pools.is\_empty() {             \&self.pool         } else {             // Round-robin over read replicas             let idx \= self.read\_counter.fetch\_add(1, Ordering::Relaxed)                 % self.read\_pools.len();             \&self.read\_pools\[idx\]         }     } } // InMemory driver — for tests and ephemeral dev environments pub struct InMemoryStorageDriver {     store: Arc\<DashMap\<String, (serde\_json::Value, u64)\>\>,  // key → (value, version) } |

## **10.3 Identity Driver**

| Rust |
| :---- |
| // Supports multiple identity backend protocols \#\[async\_trait\] pub trait IdentityDriver: DeviceDriver {     /// Authenticate credentials against the identity backend.     async fn authenticate(\&self, username: \&str, password: \&str)         \-\> Result\<Option\<ExternalIdentity\>, UmeError\>;     /// Resolve an OAuth2/SAML token to an external identity.     async fn resolve\_token(\&self, token: \&str)         \-\> Result\<Option\<ExternalIdentity\>, UmeError\>;     /// Sync group memberships for a user.     async fn groups\_for(\&self, external\_id: \&str)         \-\> Result\<Vec\<String\>, UmeError\>; } // Available implementations: // \- LocalIdentityDriver    — bcrypt password store in UME DB (default) // \- LdapIdentityDriver     — LDAP/Active Directory integration // \- OidcIdentityDriver     — OpenID Connect (Google, Azure AD, Okta) // \- SamlIdentityDriver     — SAML 2.0 (enterprise SSO) |

## **10.4 Communications Driver**

| Rust |
| :---- |
| \#\[async\_trait\] pub trait CommDriver: DeviceDriver {     async fn send\_email(\&self, msg: EmailMessage) \-\> Result\<String, UmeError\>;     async fn send\_sms(\&self,   msg: SmsMessage)   \-\> Result\<String, UmeError\>;     async fn send\_push(\&self,  msg: PushMessage)  \-\> Result\<String, UmeError\>;     async fn delivery\_status(\&self, message\_id: \&str)         \-\> Result\<DeliveryStatus, UmeError\>; } // Available implementations: // \- SmtpCommDriver     — direct SMTP (Postfix, SES SMTP relay) // \- AwsSesDriver       — AWS SES via SDK // \- SendgridDriver     — SendGrid HTTP API // \- TwilioDriver       — Twilio SMS \+ WhatsApp // \- SlackCommDriver    — Slack Incoming Webhooks // \- TeamsCommDriver    — Microsoft Teams Incoming Webhooks \#\[derive(Debug, Clone, Serialize, Deserialize)\] pub struct EmailMessage {     pub to:       Vec\<EmailAddress\>,     pub cc:       Vec\<EmailAddress\>,     pub from:     EmailAddress,     pub subject:  String,     pub html\_body: String,     pub text\_body: String,     pub reply\_to: Option\<EmailAddress\>,     pub headers:  HashMap\<String, String\>,     pub attachments: Vec\<Attachment\>, } |

## **10.5 Event Broker Driver**

| Rust |
| :---- |
| \#\[async\_trait\] pub trait BusBackend: Send \+ Sync {     async fn publish(\&self, envelope: EventEnvelope)  \-\> Result\<(), UmeError\>;     async fn subscribe(\&self, pattern: \&str,                        handler: Arc\<dyn EventHandler\>)                        \-\> Result\<SubscriptionHandle, UmeError\>;     async fn is\_duplicate(\&self, key: \&str)           \-\> Result\<bool, UmeError\>;     async fn flush\_and\_close(\&mut self)               \-\> Result\<(), UmeError\>; } // In-memory backend: topic → bounded channel (DashMap\<String, Sender\>) pub struct InMemoryBus {     topics:   Arc\<DashMap\<String, Vec\<Arc\<dyn EventHandler\>\>\>\>,     dedup:    Arc\<DashMap\<String, DateTime\<Utc\>\>\>,     config:   BusConfig, } // NATS backend: thin wrapper around async-nats crate pub struct NatsBus {     client: async\_nats::Client,     config: NatsConfig, } |

## **10.6 Driver Health & Circuit Breaker**

The DeviceBus monitors all drivers and applies circuit breaker logic. A broken circuit prevents modules from issuing calls that will fail immediately — reducing load during backend degradation.

| Rust |
| :---- |
| // ume\_kernel/src/device\_bus.rs — circuit breaker per driver \#\[derive(Debug, Clone, PartialEq, Eq)\] enum CircuitState { Closed, Open { until: DateTime\<Utc\> }, HalfOpen } struct DriverCircuit {     state:          CircuitState,     failure\_count:  u32,     success\_count:  u32,   // in HalfOpen state     config:         CircuitBreakerConfig, } impl DeviceBus {     pub async fn call\<D, F, T\>(\&self, device\_id: \&str, f: F)         \-\> Result\<T, UmeError\>     where         F: FnOnce(Arc\<D\>) \-\> BoxFuture\<'\_, Result\<T, UmeError\>\>,         D: DeviceDriver \+ 0x27sized,     {         let circuit \= self.circuits.entry(device\_id.to\_string())             .or\_default();         // Reject immediately if circuit is open and cooldown not elapsed         if let CircuitState::Open { until } \= circuit.state {             if Utc::now() \< until {                 return Err(UmeError::DriverUnavailable {                     driver\_id: device\_id.to\_string() });             }             circuit.state \= CircuitState::HalfOpen;         }         let driver \= self.get::\<D\>(device\_id)?;         match f(driver).await {             Ok(result) \=\> {                 circuit.record\_success();                 Ok(result)             }             Err(e) \=\> {                 circuit.record\_failure();                 Err(e)             }         }     } } |

# **11\. Deployment & Java Client Design**

## **11.1 Deployment Topology**

| Mode | Components | Config File | Suitable For |
| :---- | :---- | :---- | :---- |
| Embedded | Single ume\_runtime binary \+ SQLite | ume.embedded.toml | Solo operators; development; demos |
| Compose | ume\_server \+ PostgreSQL 16 \+ Redis 7 containers | docker-compose.yml | Teams up to \~200 users; self-hosted |
| Kubernetes | ume\_server Deployment (2+ replicas) \+ managed PG \+ Redis Cluster | helm/values.yaml | Enterprise; \>500 users; HA required |

## **11.2 Docker Image Design**

| Rust |
| :---- |
| \# ume\_server Dockerfile (multi-stage) \# Stage 1: builder FROM rust:1.75-slim AS builder WORKDIR /build COPY Cargo.toml Cargo.lock ./ COPY ume\_core      ./ume\_core COPY ume\_kernel    ./ume\_kernel COPY ume\_modules   ./ume\_modules COPY ume\_server    ./ume\_server RUN cargo build \--release \-p ume\_server \# Stage 2: runtime (distroless for minimal attack surface) FROM gcr.io/distroless/cc-debian12 COPY \--from=builder /build/target/release/ume\_server /usr/local/bin/ume\_server \# Non-root user USER 1000:1000 EXPOSE 8080 HEALTHCHECK \--interval=30s \--timeout=5s CMD \["/usr/local/bin/ume\_server", "health"\] ENTRYPOINT \["/usr/local/bin/ume\_server"\] \# Image characteristics: \# Base size:  \~30 MB (distroless cc) \# Binary:     \~18 MB (stripped release build) \# Total:      \~48 MB \# No shell, no package manager, no OS vulnerabilities |

## **11.3 Kubernetes Helm Chart Structure**

| Rust |
| :---- |
| helm/ume/ ├── Chart.yaml ├── values.yaml                  \# user-configurable values ├── values.production.yaml       \# production overrides example └── templates/     ├── deployment.yaml          \# ume\_server Deployment     ├── service.yaml             \# ClusterIP Service     ├── ingress.yaml             \# Ingress (nginx or AWS ALB)     ├── hpa.yaml                 \# HorizontalPodAutoscaler     ├── pdb.yaml                 \# PodDisruptionBudget     ├── configmap.yaml           \# Non-secret config     ├── secret.yaml              \# Secret references (ext-secrets)     ├── serviceaccount.yaml     ├── rbac.yaml                \# Kubernetes RBAC for service account     ├── migration-job.yaml       \# pre-install Job: run migrations     └── NOTES.txt \# Key HPA configuration (values.yaml): \# autoscaling: \#   enabled: true \#   minReplicas: 2 \#   maxReplicas: 20 \#   targetCPUUtilizationPercentage: 70 \#   targetEventQueueDepth: 5000   \# custom metric via Prometheus adapter |

## **11.4 Environment Variable Reference**

| Variable | Required | Default | Description |
| :---- | :---- | :---- | :---- |
| UME\_ORG\_ID | Yes | — | Organization UUID; must match DB on restart |
| UME\_LOG\_LEVEL | No | INFO | Log level: TRACE|DEBUG|INFO|WARN|ERROR |
| UME\_SERVER\_PORT | No | 8080 | HTTP listen port |
| UME\_TLS\_CERT\_PATH | Prod only | — | TLS certificate PEM file path |
| UME\_TLS\_KEY\_PATH | Prod only | — | TLS private key PEM file path |
| UME\_DB\_DSN | Yes (PG) | — | PostgreSQL DSN: postgres://user:pass@host/db |
| UME\_DB\_POOL\_SIZE | No | 10 | PostgreSQL connection pool size |
| UME\_REDIS\_URL | No | — | Redis URL; enables hot cache tier |
| UME\_EVENTS\_BACKEND | No | inmemory | inmemory|nats|kafka|rabbitmq |
| UME\_EVENTS\_URL | Cond. | — | Broker connection URL (required if not inmemory) |
| UME\_JWT\_KEY\_ID | No | ume-default | Vault key ID for JWT signing |
| UME\_RATE\_LIMIT\_RPM | No | 1000 | API rate limit: requests per minute per client |
| UME\_AUDIT\_RETENTION\_YEARS | No | 7 | Audit record retention in years |
| UME\_MODULES\_DIR | No | — | Path to custom module .so directory |

## **11.5 Java Client Architecture**

The Java client suite (GUI, Shell, Watch) is a single JAR built with Bazel. It communicates exclusively via the ume\_server HTTP API and WebSocket. Three launch modes share a common HTTP client and domain model layer.

| Rust |
| :---- |
| clients/java/ ├── BUILD.bazel ├── src/main/java/io/ume/client/ │   ├── Main.java                    \# entry point; selects mode │   ├── mode/ │   │   ├── GuiMode.java             \# JavaFX full GUI application │   │   ├── ShellMode.java           \# interactive REPL (JLine3) │   │   └── WatchMode.java           \# live dashboard (terminal TUI) │   ├── api/ │   │   ├── UmeApiClient.java        \# HTTP client (OkHttp3) │   │   ├── UmeWebSocketClient.java  \# WebSocket client (OkHttp3 WS) │   │   ├── AuthManager.java         \# token lifecycle: login, refresh, store │   │   └── endpoints/               \# per-module endpoint classes │   │       ├── FinanceEndpoints.java │   │       ├── HrEndpoints.java │   │       └── ...                  \# one per module │   ├── model/                       \# Java domain model (mirrors Rust types) │   │   ├── finance/JournalEntry.java │   │   ├── hr/Employee.java │   │   └── ...                      \# one package per module domain │   ├── gui/ │   │   ├── UmeApplication.java      \# JavaFX Application subclass │   │   ├── screens/                 \# one Screen per module │   │   │   ├── FinanceScreen.java │   │   │   ├── HrScreen.java │   │   │   └── ...                  \# 40+ screens │   │   ├── components/              \# reusable widgets (table, form, chart) │   │   └── theme/UmeTheme.java      \# CSS \+ color constants │   └── watch/ │       ├── Dashboard.java           \# terminal dashboard layout │       └── widgets/                 \# Panels: KPIs, alerts, module health |

| Rust |
| :---- |
| // AuthManager.java — token lifecycle public class AuthManager {     private String accessToken;     private String refreshToken;     private Instant accessExpiry;     /\*\* Return a valid access token, refreshing silently if needed. \*/     public synchronized String bearerToken() throws UmeApiException {         if (accessToken \== null) throw new UmeApiException("Not authenticated");         if (Instant.now().isAfter(accessExpiry.minusSeconds(30))) {             refresh();  // proactive refresh 30s before expiry         }         return "Bearer " \+ accessToken;     }     private void refresh() throws UmeApiException {         var response \= apiClient.post("/v1/auth/refresh",             Map.of("refresh\_token", refreshToken));         this.accessToken \= response.getString("access\_token");         this.accessExpiry \= parseExpiry(accessToken);     } } // WatchMode — real-time dashboard via WebSocket public class WatchMode {     public void run() throws Exception {         var ws \= new UmeWebSocketClient(config.serverUrl(), authManager);         ws.connect();         // Subscribe to key event topics         ws.subscribe("risk.kri.\*");         ws.subscribe("finance.period.\*");         ws.subscribe("kernel.module.\*");         ws.subscribe("security.incident.\*");         var dashboard \= new Dashboard(terminal);         ws.onEvent(envelope \-\> {             dashboard.updatePanel(envelope.topic(), envelope.payload());             dashboard.render();         });         dashboard.awaitExit();         ws.disconnect();     } } |

## **11.6 SDK — Custom Module Scaffold**

The ume\_sdk crate provides everything a developer needs to build, test, and publish a custom module. The scaffold generator produces a complete, compilable module skeleton.

| Rust |
| :---- |
| \# Generate a new custom module $ cargo run \-p generate\_custom\_module \-- \\     \--vendor acme \\     \--name fleet\_management \\     \--domain operations \\     \--output ./my\_modules/ \# Generated structure: my\_modules/acme\_fleet\_management/ ├── Cargo.toml ├── src/ │   ├── lib.rs              \# exports FleetManagementModule │   ├── module.rs           \# KernelModule impl (all lifecycle methods) │   ├── config.rs           \# FleetConfig \+ ConfigDescriptor declarations │   ├── domain/ │   │   └── vehicle.rs      \# Vehicle, Trip domain types (from ume\_core template) │   ├── repository/ │   │   └── vehicle\_repo.rs \# VehicleRepository trait \+ stub impl │   ├── services/ │   │   └── fleet\_service.rs \# Business logic service stub │   └── permissions.rs      \# FLEET\_PERMISSIONS constant array stub ├── tests/ │   └── integration\_tests.rs \# Uses MockKernel — tests pass immediately └── migrations/     └── fleet\_0001\_initial.sql  \# CREATE TABLE fleet.vehicles stub |

| Rust |
| :---- |
| // ume\_sdk/src/mock.rs — MockKernel for unit/integration testing pub struct MockKernel {     pub audit\_log:    Vec\<AuditRecord\>,     pub events:       Vec\<EventEnvelope\>,     pub permissions:  HashMap\<String, bool\>,  // preset per test     pub storage:      Arc\<InMemoryStorageDriver\>, } \#\[async\_trait\] impl KernelFacade for MockKernel {     async fn assert\_can(\&self, subject: \&SubjectId, permission: \&str,                        \_resource: Option\<\&str\>) \-\> Result\<(), UmeError\> {         if \*self.permissions.get(permission).unwrap\_or(\&true) {             Ok(())         } else {             Err(UmeError::AuthorizationFailed {                 subject: subject.to\_string(),                 permission: permission.to\_string(),             })         }     }     async fn publish(\&self, topic: \&str, payload: serde\_json::Value,                     \_meta: EventMetadata) \-\> Result\<EventId, UmeError\> {         self.events.push(EventEnvelope { topic: topic.into(), payload,             ..Default::default() });         Ok(EventId::new())     }     // ... full trait implementation with in-memory storage } |

# **Appendix A: Complete Event Catalogue**

The following table lists all domain events emitted by the UME platform. Subscribers use glob patterns to subscribe to event families.

| Topic | Publisher Module | Payload Fields | Common Subscribers |
| :---- | :---- | :---- | :---- |
| admin.org\_unit.created | MOD-01 | org\_unit\_id, name, parent\_id, manager\_id | Analytics, HR, Finance |
| admin.policy.published | MOD-01 | policy\_id, title, affected\_unit\_ids | Comms, GRC, Learning |
| finance.journal.posted | MOD-14 | entry\_id, period, entity\_id, total\_debit | Analytics, GRC |
| finance.invoice.created | MOD-14 | invoice\_id, vendor\_id, amount, currency | Supply Chain, Comms |
| finance.invoice.approved | MOD-14 | invoice\_id, approver\_id, approved\_at | Finance (payment queue) |
| finance.period.locked | MOD-14 | period, entity\_id, locked\_by | Analytics, GRC, Risk |
| finance.budget.variance\_alert | MOD-14 | budget\_id, account\_code, variance\_pct | Risk, Analytics, Comms |
| hr.employee.hired | MOD-16 | employee\_id, org\_unit\_id, start\_date, manager\_id | Process (onboarding), Security, Comms |
| hr.employee.terminated | MOD-16 | employee\_id, end\_date, reason | Process (offboarding), Security, Finance |
| hr.leave.approved | MOD-16 | leave\_id, employee\_id, start\_date, end\_date | Schedule, Work, Comms |
| hr.payroll.completed | MOD-16 | payroll\_run\_id, period, employee\_count | Finance (journal), Analytics |
| chombo.entity.evaluated | MOD-13 | entity\_id, alert\_count, critical\_alerts | Board, Risk, Analytics |
| chombo.filing.due | MOD-13 | entity\_id, filing\_type, due\_date, lead\_days | Comms, Process, Board |
| chombo.filing.overdue | MOD-13 | entity\_id, filing\_type, due\_date | Comms, Risk, Board |
| grc.control.failed | MOD-15 | control\_id, obligation\_id, finding | Risk, Board, Comms |
| grc.audit.report\_issued | MOD-15 | audit\_id, finding\_count, report\_url | Board, Risk, Comms |
| risk.kri.amber\_threshold | MOD-33 | kri\_id, risk\_id, value, threshold | Comms, Analytics, Board |
| risk.kri.red\_threshold | MOD-33 | kri\_id, risk\_id, value, threshold | Comms, Analytics, Board, Risk |
| risk.risk.appetite\_breached | MOD-33 | risk\_id, residual\_score, appetite\_limit | Board, Comms |
| security.identity.login | MOD-36 | identity\_id, ip\_address, mfa\_used | Audit (already written) |
| security.identity.lockout | MOD-36 | identity\_id, reason, unlock\_at | Comms, Audit |
| security.incident.created | MOD-36 | incident\_id, classification, priority | IT, Comms |
| security.incident.p1\_declared | MOD-36 | incident\_id, description | Board, Comms, Risk |
| sc.inventory.reorder\_triggered | MOD-37 | item\_id, location\_id, current\_qty, order\_qty | Supply Chain (PO create), Comms |
| sc.po.received | MOD-37 | po\_id, lines\_received | Finance (3-way match) |
| sales.opportunity.won | MOD-34 | opportunity\_id, value, customer\_id | Finance (invoice), Analytics, CRM |
| sales.opportunity.lost | MOD-34 | opportunity\_id, reason, competitor | Analytics, CRM |
| work.item.completed | MOD-40 | item\_id, completed\_by, project\_id | Analytics, Portfolio |
| process.workflow.completed | MOD-29 | instance\_id, definition\_id, context | Module-specific consumers |
| process.task.created | MOD-29 | instance\_id, step\_id, assignee, form\_id, due\_by | Work (task creation), Comms |
| soko.campaign.evaluated | MOD-22 | campaign\_id, insight\_count, top\_action | Analytics |
| audit.record.created | Kernel | audit\_record\_id, actor, action, outcome | SIEM webhook |
| kernel.module.started | Kernel | module\_id, version | Enterprise Mgmt, Analytics |
| kernel.module.stopped | Kernel | module\_id, reason | Enterprise Mgmt, Comms (alert) |
| kernel.module.degraded | Kernel | module\_id, health\_message | Enterprise Mgmt, Comms (alert) |

# **Appendix B: Database Index Reference**

Critical indexes that must be present for acceptable query performance. All indexes are created in migration scripts.

| SQL / DDL |
| :---- |
| \-- Universal: every org\_id column in every table CREATE INDEX idx\_{table}\_org\_id ON {schema}.{table}(org\_id); \-- Finance: frequent query patterns CREATE INDEX idx\_journal\_entries\_period ON finance.journal\_entries(org\_id, entity\_id, period); CREATE INDEX idx\_journal\_entries\_source ON finance.journal\_entries(source\_module, source\_id); CREATE INDEX idx\_journal\_lines\_account  ON finance.journal\_lines(org\_id, account\_code); CREATE INDEX idx\_invoices\_vendor        ON finance.invoices(org\_id, vendor\_id, status); CREATE INDEX idx\_invoices\_due\_date      ON finance.invoices(org\_id, due\_date) WHERE status \= 'Unpaid'; \-- HR: common lookups CREATE INDEX idx\_employees\_org\_unit ON hr.employees(org\_id, org\_unit\_id, status); CREATE INDEX idx\_employees\_manager  ON hr.employees(manager\_id); CREATE INDEX idx\_employees\_status   ON hr.employees(org\_id, status); \-- Risk: KRI monitoring (called on scheduler tick) CREATE INDEX idx\_kris\_risk\_id ON risk.kris(risk\_id, org\_id); \-- Audit: compliance query patterns (time range by actor) CREATE INDEX idx\_audit\_actor\_at   ON audit.audit\_records(org\_id, actor, at DESC); CREATE INDEX idx\_audit\_action     ON audit.audit\_records(org\_id, action, at DESC); CREATE INDEX idx\_audit\_resource   ON audit.audit\_records(org\_id, resource\_type, resource\_id); \-- Work: board and backlog queries CREATE INDEX idx\_work\_items\_assignee ON work.items(org\_id, assignee\_id, status); CREATE INDEX idx\_work\_items\_sprint   ON work.items(sprint\_id, status); CREATE INDEX idx\_work\_items\_project  ON work.items(project\_id, status); |

# **Appendix C: Dependency Graph (Module Dependencies)**

| Module | Depends On Modules | Depends On Kernel Services |
| :---- | :---- | :---- |
| MOD-01 Administration | None | Storage, RBAC, Audit, Events |
| MOD-02 Analytics | All modules (event subscriber) | Storage, Events, Executor(analytics) |
| MOD-03 Backup | MOD-36 Security (encryption) | Storage, Executor(background) |
| MOD-04 Board | MOD-14 Finance, MOD-33 Risk, MOD-15 GRC | Storage, RBAC, Audit, Events |
| MOD-13 Chombo | None | Storage, RBAC, Audit, Events, Executor(ops) |
| MOD-14 Finance | MOD-01 Admin, MOD-13 Chombo | Storage, RBAC, Audit, Events, Executor(finance) |
| MOD-15 GRC | MOD-14 Finance, MOD-18 IT, MOD-36 Security | Storage, RBAC, Audit, Events |
| MOD-16 HR | MOD-01 Admin, MOD-20 Learning | Storage, RBAC, Audit, Events, Executor(hr) |
| MOD-22 Soko | MOD-08 CRM, MOD-34 Sales | Storage, RBAC, Audit, Events, Executor(ops) |
| MOD-29 Process | MOD-40 Work, MOD-07 Comms | Storage, RBAC, Events, Executor(ops) |
| MOD-33 Risk | MOD-15 GRC | Storage, RBAC, Audit, Events, Executor(background) |
| MOD-34 Sales | MOD-08 CRM, MOD-14 Finance | Storage, RBAC, Audit, Events |
| MOD-36 Security | None | Storage, RBAC, Audit, Events, CryptoVault |
| MOD-37 Supply Chain | MOD-14 Finance, MOD-01 Admin | Storage, RBAC, Audit, Events |
| MOD-40 Work | MOD-01 Admin, MOD-27 Portfolio | Storage, RBAC, Audit, Events |

# **Appendix D: Glossary**

| Term | Definition |
| :---- | :---- |
| Composition Root | The single location (UmeKernel::boot) where all dependencies are wired together. |
| DeviceBus | Kernel subsystem that registers, manages, and mediates access to all device drivers. |
| Domain Event | An immutable fact published to the event bus after a state-changing operation completes. |
| DLQ (Dead-Letter Queue) | Destination for events that could not be delivered after all retries are exhausted. |
| EncryptedBlob | Struct containing ciphertext, nonce, auth tag, and key reference — produced by CryptoVault. |
| EventEnvelope | Wrapper around a domain event payload that adds routing, audit, and tracing metadata. |
| Filter | Type-safe query predicate used by modules to query StorageManager without writing SQL. |
| KernelFacade | The narrow interface given to each module granting controlled access to kernel services. |
| KernelModule | The Rust trait all organization modules must implement to participate in the kernel. |
| ModuleDescriptor | Self-description of a module: ID, dependencies, permissions, event subscriptions. |
| ModuleState | Lifecycle state enum: Registered → Initializing → Starting → Running → Degraded → Error → Stopping → Stopped. |
| Newtype Wrapper | Rust pattern: struct OrgUnitId(Uuid) — prevents accidentally passing wrong ID type. |
| Optimistic Lock | Concurrency control via version counter: rejected if version in DB \!= version in request. |
| Repository | Domain-typed wrapper around StorageManager that exposes module-specific query methods. |
| Soft Delete | Marking deleted\_at on a record instead of issuing DELETE — preserves audit trail and referential integrity. |
| Strategy Pack | A rule-based evaluator in Soko that returns marketing insights and actions for a campaign. |
| SubjectId | Identifier for any actor in the RBAC system: User, ServiceAccount, or ApiKey. |
| SupervisorEngine | Kernel background task that monitors module health and applies restart policies. |
| UmeError | The exhaustive error enum covering all failure modes; all fallible functions return Result\<T,UmeError\>. |
| ume\_core | Foundational crate: all shared types, traits, and contracts; depends on nothing in the workspace. |

