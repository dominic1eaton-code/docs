

**Q A L A**

**Universal Solution Management OS**

*UI/UX Specification  ·  Design System  ·  User Flows  ·  Wireframes*

| Field | Detail |
| :---- | :---- |
| Document Type | Combined UI/UX Specification, Design System, User Flows & Annotated Wireframes |
| Version | v1.0  —  Comprehensive Edition |
| System | Qala Universal Solution Management OS |
| Status | Design Review Draft |
| Personas Covered | 14 persona types across all solution domains |
| Screens Specified | 35 primary screens \+ 22 modal/drawer patterns |
| Wireframes | 28 annotated ASCII wireframes covering all critical screens |
| User Flows | 12 end-to-end flows (onboarding → governance → cross-domain) |
| Design Principle | Universal architecture · Domain-adaptive vocabulary · Zero software assumptions for non-tech domains |
| Companion Docs | SDD v2.0 | PRD v2.0 | RFC v2.0 | Requirements v2.0 | Workflows & Use Cases v2.0 |
| Audience | UX Design, Frontend Engineering, Product, Domain Experts, Accessibility Reviewers |

# **1  Design Philosophy**

*Qala serves pharmaceutical chemists, software engineers, portfolio managers, farm operations managers, tax technologists, and legal operations directors — all on one platform. The UI must feel native to each while being one unified system.*

## **1.1  The Six Design Principles**

| P1  Universal First, Domain-Native by Persona *Every core concept (solution, version, environment, change, release) is universal. Vocabulary, iconography, and workflow shortcuts adapt per persona. A CPG chemist sees "Batch Release Pipeline" — a developer sees "CI/CD Pipeline" — identical underlying system, domain-appropriate surface.* |
| :---- |

| P2  Progressive Disclosure *The most common action for each persona is one click away. Advanced capabilities (compliance reports, AI model config, cross-factory analytics) are discoverable without being visually dominant. Power users never blocked. New users never overwhelmed.* |
| :---- |

| P3  Trust Through Transparency *Every state change is visible. Every action produces an audit event. The UI makes governance legible — not bureaucratic. Users always know: current state of a solution, who last changed it, what changed, and what happens next.* |
| :---- |

| P4  AI as Companion, Not Gatekeeper *The AI Agent surfaces recommendations inline — dismissable, actionable, contextual. It never blocks a primary workflow. In regulated domains, AI is advisory; human approval is always the final gate. The AI appears when useful, disappears when not.* |
| :---- |

| P5  Accessibility as Architecture *WCAG 2.1 AA is the minimum. Every interaction is keyboard-navigable. Every colour combination meets contrast ratios. Screen reader support is a design constraint, not an afterthought.* |
| :---- |

| P6  Speed as a Feature *The platform manages hundreds of solutions. Data tables load under 200ms. The Command Palette (Cmd+K) is the power-user backbone — available from any screen, returns results in \<100ms. Skeleton screens replace spinners for every list and page load.* |
| :---- |

## **1.2  Persona-Adaptive Layer**

Qala's UI is built on one design system with a persona-adaptive vocabulary layer that activates at login and is adjustable in Profile Settings. It controls three things:

* Vocabulary layer — domain-specific terms replace generic platform terms (see Section 9 for full mapping).

* Widget visibility layer — domain-appropriate dashboard widgets surface for the user's primary domain.

* Quick-action layer — sidebar shortcuts and Command Palette commands pre-populate with domain defaults.

## **1.3  Responsive Strategy**

| Breakpoint | Width | Primary Use | Layout |
| :---- | :---- | :---- | :---- |
| xs | \< 640px | Field use — farm, lab, warehouse, delivery | Single column · Bottom tab navigation · Card-first |
| sm | 640–767px | Large mobile, small tablet | Single column · Sidebar as drawer |
| md | 768–1023px | Tablet — lab bench, meetings, client sites | Two column · Collapsible sidebar |
| lg | 1024–1279px | Laptop — developer, analyst, consultant | Full sidebar · Three-column content · All tables |
| xl | 1280–1535px | Desktop — compliance officer, ops centre | Expanded sidebar · Multi-panel · Command palette |
| 2xl | ≥ 1536px | Large monitor — analytics, monitoring centre | Ultra-wide multi-panel · Side-by-side comparison |

# **2  Design System  —  Colour**

*All colour decisions are token-first. No raw hex values appear in component code. Every colour is referenced by semantic token name, enabling theme switching and accessibility overrides without touching components.*

## **2.1  Brand Palette**

|  | Name | Hex | Usage | WCAG |
| :---- | :---- | :---- | :---- | :---- |
|  | **Brand Navy** | \#0D2B45 | Primary headings, nav background, logo, brand anchors. | AAA 18.1:1 |
|  | **Action Blue** | \#1D6FA4 | Interactive elements, links, primary buttons, progress indicators. | AA 5.9:1 |
|  | **Sky Light** | \#D6EAF8 | Tints, info panels, selected state backgrounds, focus rings. | — |
|  | **Sky Mid** | \#85C1E9 | Data visualisation, progress fills, chart elements. | — |
|  | **Surface White** | \#FFFFFF | Primary content surface, card background, dialog background. | — |
|  | **Surface Grey** | \#F4F6F8 | Alternate row, secondary surface, sidebar track, divider fill. | — |
|  | **Border/Divider** | \#E2E8F0 | Borders, divider lines, disabled component fills. | — |
|  | **Text Primary** | \#1A1A2E | Body text, labels, headings on white surface. | AAA 18.1:1 |
|  | **Text Muted** | \#64748B | Secondary labels, captions, metadata, placeholder. | AA 5.2:1 |

## **2.2  Semantic Status Palette**

|  | Name | Hex | Usage | WCAG |
| :---- | :---- | :---- | :---- | :---- |
|  | **Success Dark** | \#1A5C38 | Gate passed, approved, active, deployed states. | AA 10.1:1 |
|  | **Success Light** | \#D5F5E3 | Success chip background, toast fill, gate-pass panel. | — |
|  | **Warning Dark** | \#7D5A00 | Medium risk, deprecated, awaiting review, pending. | AA 7.8:1 |
|  | **Warning Light** | \#FEF9E7 | Warning chip background, caution panel fill. | — |
|  | **Danger Dark** | \#7B241C | Error state, critical alert, failed gate, recall. | AA 9.1:1 |
|  | **Danger Light** | \#FDEDEC | Error chip background, alert panel fill, recall banner. | — |
|  | **AI Purple Dark** | \#4A235A | AI Agent indicator, recommendation badge, intelligence features. | AA 11.3:1 |
|  | **AI Purple Light** | \#F5EEF8 | AI recommendation card background, insight panel fill. | — |
|  | **Teal Dark** | \#0E6655 | Domain extension, use-case headers, feature callouts. | AA 8.7:1 |
|  | **Teal Light** | \#D1F2EB | Domain card fill, feature highlight background. | — |
|  | **Orange Dark** | \#B45309 | Deprecated state, seasonal event, countdown. | AA 5.0:1 |
|  | **Orange Light** | \#FEF3C7 | Deprecated chip background, countdown panel. | — |

## **2.3  Semantic Token Map**

| Token Name | Maps To | Usage Context |
| :---- | :---- | :---- |
| color.brand.primary | \#0D2B45 | Brand identity, global nav, major headers. |
| color.brand.action | \#1D6FA4 | All interactive affordances: buttons, links, checkboxes, toggles, focus rings. |
| color.surface.primary | \#FFFFFF | Main content area, cards, dialogs. |
| color.surface.secondary | \#F4F6F8 | Alternate rows, sidebar, secondary panels. |
| color.surface.border | \#CBD5E1 | All border / divider rules. |
| color.text.primary | \#1A1A2E | Body text, labels, headings. |
| color.text.secondary | \#64748B | Metadata, captions, placeholder, hint text. |
| color.text.inverse | \#FFFFFF | Text on dark surfaces. |
| color.status.success | \#1A5C38 | Gate passed, approved, deployed. |
| color.status.warning | \#7D5A00 | Medium risk, deprecated, pending. |
| color.status.danger | \#7B241C | Failed, error, recall, quarantined. |
| color.ai.primary | \#4A235A | AI Agent badge, recommendation card. |
| color.focus.ring | \#1D6FA4 | 3px outline, 2px width, 2px offset — all interactive elements. |
| color.interaction.hover | \#D6EAF8 | Row hover, button hover fill. |
| color.interaction.selected | \#D6EAF8 | Selected row, active tab, selected chip. |

# **3  Typography & Spacing**

## **3.1  Type Scale**

| Token | Size | Weight | Line-Height | Usage |
| :---- | :---- | :---- | :---- | :---- |
| display.hero | 3.0rem / 48px | 800 | 1.10 | Cover, marketing — display only. |
| display.h1 | 2.25rem / 36px | 700 | 1.20 | Page titles, major section headings. |
| display.h2 | 1.75rem / 28px | 600 | 1.30 | Section headings, card titles, modal headings. |
| display.h3 | 1.375rem / 22px | 600 | 1.35 | Subsection headings, panel titles, group labels. |
| display.h4 | 1.125rem / 18px | 600 | 1.40 | Field group labels, form section headings. |
| body.large | 1.125rem / 18px | 400 | 1.60 | Lead body text, onboarding descriptions. |
| body.base | 1.0rem / 16px | 400 | 1.60 | Standard body text, form values, table content. |
| body.small | 0.875rem / 14px | 400 | 1.50 | Metadata, captions, secondary labels, badges. |
| body.xs | 0.75rem / 12px | 400 | 1.40 | Legal micro-text, timestamps, audit footnotes. |
| label.large | 0.875rem / 14px | 600 | 1.40 | Button labels, tab labels, form field labels. |
| label.base | 0.75rem / 12px | 600 | 1.30 | Badge text, chip labels, status labels. |
| mono.base | 0.875rem / 14px | 400 | 1.50 | Code, version numbers, checksums, IDs, hex values. |
| mono.small | 0.75rem / 12px | 400 | 1.40 | Inline code, terminal output, digests. |

Font family: Inter (via CDN, local fallback: system-ui, \-apple-system, sans-serif). Monospace: JetBrains Mono (fallback: ui-monospace, Menlo, Consolas). Font-display: swap. Loading: subsets Latin \+ Latin-Extended.

## **3.2  Spacing Scale  (8px base grid)**

| Token | px | rem | Common Usage |
| :---- | :---- | :---- | :---- |
| space.1 | 4px | 0.25 | Icon-to-label gap, chip padding-x tight. |
| space.2 | 8px | 0.5 | Small component internal padding, tight row gap. |
| space.3 | 12px | 0.75 | Badge padding, compact button padding. |
| space.4 | 16px | 1.0 | Standard component padding, card content gap. |
| space.5 | 20px | 1.25 | Form field label-to-input gap. |
| space.6 | 24px | 1.5 | Card padding, modal section gap, sidebar item padding. |
| space.8 | 32px | 2.0 | Section spacing within a page, content group gap. |
| space.10 | 40px | 2.5 | Major section separation, form group gap. |
| space.12 | 48px | 3.0 | Page section breaks, hero area padding. |
| space.16 | 64px | 4.0 | Full-bleed section separation, layout-level gaps. |

## **3.3  Border Radius**

| Token | Value | Usage |
| :---- | :---- | :---- |
| radius.none | 0 | Tables, dividers, full-bleed elements. |
| radius.sm | 4px | Input fields, small badges, tight chips. |
| radius.md | 8px | Buttons, cards, dropdowns, tooltips. |
| radius.lg | 12px | Modal dialogs, large cards, panel containers. |
| radius.xl | 16px | Hero sections, feature highlight cards. |
| radius.full | 9999px | Pills, status badges, avatar circles, toggles. |

## **3.4  Elevation & Shadow**

| Level | Definition | Usage |
| :---- | :---- | :---- |
| elevation.0 | none | Flat — table rows, input fields at rest. |
| elevation.1 | 0 1px 3px rgba(13,43,69,0.08) | Default card, sidebar, tooltip anchor. |
| elevation.2 | 0 4px 6px rgba(13,43,69,0.07), 0 2px 4px rgba(13,43,69,0.06) | Hovered card, focused input, dropdown origin. |
| elevation.3 | 0 10px 15px rgba(13,43,69,0.1) | Dropdown panel, command palette, date picker. |
| elevation.4 | 0 20px 25px rgba(13,43,69,0.1), 0 10px 10px rgba(13,43,69,0.04) | Modal dialog, drawer overlay. |
| elevation.5 | 0 25px 50px rgba(13,43,69,0.25) | Full-screen overlay, notification centre. |

# **4  Component Library Specification**

*Every component is defined by: usage context, anatomical breakdown, interaction states, accessibility requirements, and design tokens. Components are built in React with Tailwind token utilities. All components pass WCAG 2.1 AA minimum.*

## **4.1  Navigation Components**

### **4.1.1  GlobalNav — Top Navigation Bar**

| GlobalNav  Layout / Navigation |
| :---- |
| **Usage:**  Persistent top bar on all authenticated screens. Height: 64px. Contains the primary platform chrome. **Anatomy:**  Logo (left, 140px) · Search/Command trigger (center, Cmd+K label) · Factory Switcher dropdown · Notification bell (badge count) · AI Agent FAB (purple orb) · User Avatar menu (right). **States:**  Default · Scrolled (adds elevation.2 shadow) · Mobile collapsed (hamburger → drawer). **Tokens:**  bg: color.brand.primary · height: 64px · z-index: 100 · logo-width: 140px · avatar-size: 36px **a11y:**  role="banner", nav has aria-label="Primary", notification bell aria-label="N new notifications", skip-to-content link as first child. |

### **4.1.2  Sidebar Navigation**

| Sidebar  Layout / Navigation |
| :---- |
| **Usage:**  Left-side contextual navigation. Adapts content based on user persona and active Solution Factory. **Anatomy:**  Factory selector (top) · Primary nav items (icon \+ label) · Collapsible sub-groups · Active state indicator bar · Collapse toggle (bottom-left) · Settings \+ Help links (bottom). **States:**  Expanded (240px) · Collapsed (64px, icon-only with tooltip) · Mobile (drawer overlay, full-width). **Tokens:**  bg: color.surface.secondary · active-fill: color.interaction.selected · active-indicator: 3px color.brand.action left border · width-expanded: 240px · width-collapsed: 64px **a11y:**  role="navigation" aria-label="Main navigation". Active item: aria-current="page". Collapse toggle: aria-expanded. Icons: aria-hidden, labels as accessible names. |

Domain-adaptive sidebar items per persona:

| Persona | Primary Nav Items | Domain Vocabulary for SDE/Environment |
| :---- | :---- | :---- |
| Software Developer | SDEs · Pipelines · Solutions · Tests · Releases · Artefacts | SDE |
| CPG / Pharma Chemist | Workbenches · Formulations · Batches · QA Records · Releases | Formulation Workbench |
| Portfolio Manager | Research Workbenches · Funds · Models · Mandates · Compliance | Research Workbench |
| Farm Ops Manager | Field Environments · Crops · Devices · Yields · Seasons | Field Environment |
| Principal Consultant | Knowledge Workspaces · Methodologies · Engagements · Catalogue | Knowledge Workspace |
| Research Scientist | Research Environments · Experiments · Datasets · Publications | Research Environment |
| Tax Product Manager | Tax Workspaces · Rule Sets · Jurisdictions · Legislative Feed | Tax Workspace |
| Compliance Officer | Policies · Compliance Reports · CCR Queue · Audit Trail | N/A (no SDE) |

### **4.1.3  Breadcrumb \+ PageHeader**

| PageHeader  Layout / Context |
| :---- |
| **Usage:**  Every page shows its hierarchy position. PageHeader adds page-level action buttons. **Anatomy:**  Breadcrumb trail (up to 4 crumbs, truncated with ellipsis beyond 4\) · Page title (H2) · Solution type badge · Lifecycle state chip · Primary action button · Secondary overflow menu. **States:**  Default · Truncated breadcrumbs · Sticky on scroll (adds shadow) · Mobile (parent crumb only). **Tokens:**  crumb-font: type.body.small · title-font: type.display.h2 · gap-between-crumbs: space.2 · separator: / in color.text.secondary **a11y:**  Breadcrumb nav: role="navigation" aria-label="Breadcrumb". Current page: aria-current="page". Overflow button: aria-label="More navigation options". |

## **4.2  Data Display Components**

### **4.2.1  SolutionCard**

| SolutionCard  Data Display / Card |
| :---- |
| **Usage:**  Primary unit for solution records in grid and list views. Used in dashboards, search results, and factory overview pages. **Anatomy:**  Solution type icon (24px) · Solution name (title) · Solution type badge · Lifecycle state chip · Version string (mono) · Owner avatar \+ name · Last-updated timestamp · Kebab overflow menu. **States:**  Default · Hovered (elevation.2, action bar revealed at bottom) · Selected (color.brand.action border, color.interaction.selected bg) · Loading (skeleton shimmer). **Tokens:**  bg: color.surface.primary · border-radius: radius.md · padding: space.6 · shadow: elevation.1 → elevation.2 hover · selected-border: 2px color.brand.action **a11y:**  role="article". Name as heading H3. State chip aria-label="Status: \[state\]". Avatar aria-label="Owner: \[name\]". Kebab aria-label="More options for \[name\]". |

### **4.2.2  LifecycleStateChip**

| LifecycleStateChip  Data Display / Status |
| :---- |
| **Usage:**  Compact colour-coded indicator of a solution's current lifecycle state. Used inline in cards, tables, headers, and the Transition Panel. **Anatomy:**  State dot (8px circle, filled) · State label text. **States:**  Draft (grey \#94A3B8) · In Development (blue \#1D6FA4) · In Review (amber \#7D5A00) · Approved (green \#1A5C38) · Released (dark-green \#145A32) · Live/Active (teal \#0E6655) · Deprecated (orange \#B45309) · Recalled (red \#7B241C, pulsing dot) · Suspended (red \#7B241C) · Retired (dark-grey \#475569) · Quarantined (red, dot pulse animation) · Pending Effective Date (amber) · Commissioning (slate \#334E68) · Under Review (amber). **Tokens:**  border-radius: radius.full · padding: space.1 space.3 · dot-size: 8px · font: type.label.base **a11y:**  aria-label="Status: \[state name\]". dot: aria-hidden. Colour never sole differentiator — label always visible. |

### **4.2.3  QualityGateProgress**

| QualityGateProgress  Data Display / Progress |
| :---- |
| **Usage:**  Real-time progress through a release gate checklist. Used on Release detail pages and Release Manager dashboards. **Anatomy:**  Gate name · Status icon (20px) · Evaluator avatar \+ name · Timestamp · Evidence artefact link. Vertical connector line between gates. **States:**  Per gate: Pending (grey circle outline) · Evaluating (blue animated ring) · Passed (green filled checkmark) · Failed (red X) · Waived (orange dash \+ waiver reason on expand). **Tokens:**  row-height: 48px min · icon-size: 20px · connector: 2px color.surface.border vertical line · font: type.body.small for metadata **a11y:**  role="list" aria-label="Release gate checklist". Each gate: role="listitem". Evaluating gates: aria-live="polite" announces state change. Failed gates: aria-describedby links to failure reason. |

### **4.2.4  EventStreamFeed**

| EventStreamFeed  Data Display / Feed |
| :---- |
| **Usage:**  Real-time log of platform events for an SDE, solution, or factory. The primary activity surface for monitoring and debugging. **Anatomy:**  Event type icon (16px, colour-coded by category) · Event title · Actor avatar \+ name · Relative timestamp (absolute on hover) · Expandable event payload panel · Filter bar (event type, actor, time range). **States:**  Idle (scrollable list) · New event arrives (slide-in from top, 200ms ease-out) · Filtered (empty state with clear-filters CTA) · Empty state. **Tokens:**  item-height: min 48px · icon-size: 16px · new-event: slide-in 200ms · timestamp-font: type.body.xs · payload: mono.small **a11y:**  role="log" aria-live="polite" aria-label="Activity feed". New events announced to screen readers. Expandable payload: aria-expanded. |

### **4.2.5  AIRecommendationCard**

| AIRecommendationCard  Data Display / AI |
| :---- |
| **Usage:**  Displays an AI Agent recommendation inline in dashboards, solution pages, or notifications. Non-intrusive but instantly actionable. **Anatomy:**  AI orb icon (32px, animated gradient) · Recommendation title · Evidence summary (collapsed by default) · Confidence level bar · Domain context badge · Action buttons: Accept · Dismiss · Defer · Learn More. **States:**  Default · Expanded (full evidence panel) · Accepted (green confirm animation, card fades) · Dismissed (fade out 300ms) · Loading (orb pulse). **Tokens:**  bg: color.purpleL · border-left: 4px color.ai.primary · border-radius: radius.md · orb-size: 32px · confidence-bar: 4px height color.ai.primary fill **a11y:**  role="region" aria-label="AI Recommendation". Dismiss: aria-label="Dismiss recommendation". Accept triggers aria-live announcement. Orb animation respects prefers-reduced-motion. |

### **4.2.6  ArtefactCard**

| ArtefactCard  Data Display / Artefact |
| :---- |
| **Usage:**  Represents a stored artefact (specification, batch record, attestation, dataset, policy document) in the Artefact Registry. **Anatomy:**  File type icon · Artefact name · Artefact type badge · Version string · SHA-256 digest (truncated, full on hover) · Created by \+ timestamp · Download · Verify integrity · View provenance buttons. **States:**  Default · Verified (green checkmark badge) · Integrity failed (red warning badge \+ alert) · Loading. **Tokens:**  bg: color.surface.secondary · digest-font: type.mono.small · badge: border-radius.full · shadow: elevation.1 **a11y:**  Digest: aria-label="SHA-256: \[full digest\]". Integrity status: role="status". Download: aria-label="Download \[name\] v\[version\]". |

## **4.3  Form Components**

### **4.3.1  SolutionTypeSelector**

| SolutionTypeSelector  Form / Selection |
| :---- |
| **Usage:**  Primary input for choosing a solution type when creating a new solution. Surfaces all 40+ types intuitively across 10 categories. **Anatomy:**  Category tabs (10 tabs, icons) · Type cards within each category (icon \+ name \+ one-line description) · Search filter input (autofocus) · Recently-used strip · Selected type confirmation chip. **States:**  Default · Category focused · Type selected · Searching · Mobile (full-screen bottom sheet). **Tokens:**  tab-active: color.brand.action bottom border · type-card: SolutionCard compact variant · search-input: standard TextInput · selected-chip: LifecycleStateChip variant **a11y:**  Listbox pattern (ARIA listbox \+ option). Category tabs: tablist / tab. Search: combobox with listbox. Selected chip announces to screen reader. |

### **4.3.2  CCRForm — Change Control Request**

| CCRForm  Form / Multi-step |
| :---- |
| **Usage:**  Multi-section form for submitting a Change Control Request. Adapts field set based on solution type and change type selected. **Anatomy:**  Change Type selector · Affected Solutions multi-select (with live cascade impact preview) · Risk Score preview chip (live-computed, colour-coded) · Justification rich-text · Implementation Plan · Rollback Plan · Regulatory Implications section (conditional on solution type) · Approvers panel (auto-computed from routing rules) · Attachments. **States:**  Filling · Incomplete (inline field-level validation) · Preview mode (read-only review before submit) · Submitted · Approved · Rejected. **Tokens:**  2-column layout (lg+), 1-column (md and below) · risk-score-chip: animated colour transition on change · required-indicator: red asterisk \+ aria-required · attachments: drag-and-drop zone **a11y:**  role="form". All inputs have associated labels. Error messages via aria-describedby. Risk score updates: aria-live="polite". Required fields: aria-required="true". |

### **4.3.3  DomainMetadataForm**

| DomainMetadataForm  Form / Dynamic |
| :---- |
| **Usage:**  Dynamic form section rendering domain-specific fields from the solution's Domain Pack JSON schema. No hardcoded fields. **Anatomy:**  Field definitions loaded from Domain Pack schema at runtime · Supported field types: text, number, date, enum, multi-select, substance lookup (CPG), jurisdiction selector (Legal/Tax), currency (Financial), GPS coordinate (Agricultural), date-range, range-slider. **States:**  Per-field: Empty · Filled · Invalid (inline error) · Disabled (view-only mode) · Loading (async lookup). **Tokens:**  Layout: responsive grid auto-fit (minmax 240px, 1fr) · Validation: Zod schema per domain pack · Error: type.body.small color.danger **a11y:**  All fields have labels. Errors linked via aria-describedby. aria-required. Async lookup: aria-busy. Substance/jurisdiction lookup: combobox pattern. |

## **4.4  Feedback & Status Components**

### **4.4.1  ToastSystem**

| ToastSystem  Feedback / Notification |
| :---- |
| **Usage:**  Non-blocking notifications for async events: build completed, CCR approved, security alert, AI recommendation available. **Anatomy:**  Type icon (20px) · Title · Body (optional, 2-line truncated) · Action link (optional) · Dismiss × · Auto-dismiss progress bar. **States:**  Success (green) · Warning (amber) · Error (red, persistent until dismissed) · Info (blue) · AI (purple). Duration: Success/Info 4s; Warning 6s; Error persistent. **Tokens:**  position: bottom-right (desktop), top-centre (mobile) · max-width: 400px · border-radius: radius.md · slide-in: 250ms ease-out **a11y:**  role="status" (Success/Info/AI) or role="alert" (Warning/Error). aria-live="polite" or "assertive" for errors. Dismiss: aria-label="Dismiss notification". |

### **4.4.2  CommandPalette**

| CommandPalette  Navigation / Command |
| :---- |
| **Usage:**  Power-user command hub accessible from any screen. Returns results in \<100ms. Triggered by Cmd+K (Mac) / Ctrl+K (Win/Linux). **Anatomy:**  Search input (autofocus) · Grouped results: Recent · Solutions · SDEs · CCRs · People · Commands · AI queries (? prefix) · Direct AI commands (\! prefix). **States:**  Open · Searching · Results · No results · Loading. **Tokens:**  width: 600px · max-height: 600px (scroll) · border-radius: radius.lg · elevation.4 · backdrop: blur(8px) rgba(0,0,0,0.4) · slide-down: 150ms **a11y:**  role="dialog" aria-label="Command palette" aria-modal="true". Focus trapped. Results: role="listbox". Options: role="option". Esc closes. aria-live result count. |

### **4.4.3  ConfirmationDialog**

| ConfirmationDialog  Feedback / Blocking |
| :---- |
| **Usage:**  Required for all destructive or high-consequence actions: SDE decommission, solution retirement, recall initiation, emergency change override. **Anatomy:**  Severity icon (colour-coded) · Title · Explanation paragraph · Consequence bullet list · Confirmation text input (type solution name for critical actions) · Cancel / Confirm buttons. **States:**  High severity (red accent \+ confirmation input required) · Medium (amber accent \+ checkbox required) · Low (standard confirmation button). **Tokens:**  width: 480px · border-radius: radius.lg · elevation.5 · overlay: rgba(13,43,69,0.5) · input-match-required: red border while no match, green on match **a11y:**  role="dialog" aria-modal="true" aria-labelledby="dialog-title". Focus trapped. First focus: cancel button (safe default). Confirm disabled until condition met. |

# **5  Wireframes**

*All wireframes use annotated ASCII notation rendered in monospace. Each wireframe is followed by an element annotation table. Annotations reference the element number shown in the wireframe with \[N\] labels.*

| Wireframe Legend *\[N\] \= annotation reference   ████ \= filled element   ░░░░ \= image / media placeholder* *▓▓▓▓ \= primary button        ░░░░ \= secondary button  \~\~\~\~ \= text content area* *\[ text \] \= input field        ≡ \= overflow / kebab menu  ● \= status indicator dot* |
| :---- |

## **5.1  WF-01  Login Screen**

|   SC-01  Login Screen  |  Unauthenticated ┌──────────────────────────────────────────────────────────────────────────────┐ │                                                                               │ │                     ╔══════════════════════════════════════╗                 │ │                     ║    \[1\] Q A L A                       ║                 │ │                     ║    Universal Solution Management OS  ║                 │ │                     ║  ─────────────────────────────────   ║                 │ │                     ║  \[2\] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║                    │ │                     ║      Continue with your organisation ║                 │ │                     ║  ─── or ────────────────────────── ─║                  │ │                     ║  \[3\] \[ Email address              \]  ║                 │ │                     ║  \[4\] \[ Password              \[👁\] \]  ║                 │ │                     ║  \[5\] ☐ Remember me    Forgot pwd? → ║                  │ │                     ║  \[6\] ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ║                    │ │                     ║              Sign in                 ║                 │ │                     ║  ─────────────────────────────────   ║                 │ │                     ║  \[7\] New to Qala? Request access →   ║                 │ │                     ╚══════════════════════════════════════╝                 │ │                                                                               │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-01  Login Screen — centred card (480px) on Brand Navy full-bleed*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Logo \+ Wordmark | Qala logotype \+ tagline. White on Brand Navy card. Not a link (unauthenticated). |
| 2 | SSO Button | Primary button. Full-width. Triggers SAML/OIDC redirect. Pre-fills org domain if detectable. Autofocus on page load. |
| 3 | Email Input | TextInput with email type. Autofocus if SSO not detected. aria-label="Email address". Validates on blur. |
| 4 | Password Input | TextInput type=password. Eye icon toggles visibility. aria-label="Password". Error shown inline below on invalid credentials. |
| 5 | Remember me \+ Forgot | Checkbox left, link right. Forgot opens email-entry modal (separate flow). |
| 6 | Sign In Button | Secondary primary. Disabled until both fields non-empty. Shows spinner \+ "Signing in..." on submit. |
| 7 | New user link | Routes to trial/access request form (public marketing site). |

## **5.2  WF-02  Home Dashboard**

|   SC-03  Home Dashboard  |  Post-login landing ┌──────────────────────────────────────────────────────────────────────────────┐ │  \[1\] QALA  \[Factory: Acme Pharma ▾\]  \[🔍 Cmd+K\]  \[🔔 3\]  \[●AI\]  \[👤 ▾\]           │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[2\] ≡ Home         │  \[3\] Good morning, Elena.  Here's what needs attention:      │ │      Solutions      │  ┌─────────────────┐ ┌─────────────────┐ ┌───────────────┐  │ │      Workbenches    │  │\[4\] ⚠ 3 CCRs     │ │\[5\] ✗ 1 Gate     │ │\[6\] ✦ 2 AI     │  │ │      Batches        │  │  awaiting your  │ │  Failure        │ │  Insights     │  │ │      QA Records     │  │  approval       │ │  Product-X v2.1 │ │  ready        │  │ │      Releases       │  │  \[Review Now\]   │ │  \[View Gate\]    │ │  \[View AI\]    │  │ │      ─────────────  │  └─────────────────┘ └─────────────────┘ └───────────────┘  │ │      AI Insights    │                                                               │ │      Compliance     │  \[7\] Active Formulations                     \[View all →\]   │ │      Audit Trail    │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │ │      ─────────────  │  │ ⬡ Form-A     │ │ ⬡ Form-B     │ │ ⬡ Form-C     │         │ │      ⚙ Settings    │  │ ● In Review  │ │ ● Approved   │ │ ● Live       │         │ │      ? Help         │  │ v2.1  Elena  │ │ v1.4  Marco  │ │ v3.0  Sara  │         │ │                     │  └──────────────┘ └──────────────┘ └──────────────┘         │ │                     │                                                               │ │                     │  \[8\] Recent Activity             │ \[9\] AI Agent Insights     │ │                     │  ● CCR-042 approved  2m ago      │ ✦ Form-A stability risk   │ │                     │  ● Batch B-221 released  1h ago  │   \[Accept\] \[Dismiss\]      │ │                     │  ● SDE restored  3h ago          │ ✦ Seasonal model update   │ │                     │  \[Load more →\]                   │   \[Accept\] \[Dismiss\]      │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-02  Home Dashboard — persona: CPG Formulation Chemist (vocabulary adapted)*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | GlobalNav | Factory name shown in switcher. Bell badge \= unread notification count. AI orb animates when recommendations available. |
| 2 | Sidebar | Domain-adapted labels. "Workbenches" instead of "SDEs". "Batches" instead of "Artefacts". Active item has 3px left border in Action Blue. |
| 3 | Greeting \+ Priority strip | Greeting uses time-of-day. Priority cards auto-populated from platform state. 3 cards max — surplus handled by notification centre. |
| 4 | CCR Approval card | Count badge. Click routes to CCR list pre-filtered to "Awaiting My Approval." Amber accent \= action required. |
| 5 | Gate Failure card | Solution name \+ version shown. Click routes to release gate detail. Red accent \= blocking. |
| 6 | AI Insights card | Count of pending recommendations. Purple accent \= AI feature. Click opens AI panel drawer. |
| 7 | Active Solutions grid | Last 8 accessed solutions as compact SolutionCards. Domain label \= "Active Formulations" for CPG persona. |
| 8 | Event Feed | Last 20 events across user's factories. Relative timestamps. "Load more" paginates. |
| 9 | AI Recommendation panel | Top 2 recommendations with inline Accept/Dismiss. Accept triggers confirmation then auto-creates CCR. |

## **5.3  WF-03  SDE Detail — Software**

|   SC-05  SDE Detail  |  Software Development Environment ┌──────────────────────────────────────────────────────────────────────────────┐ │  \[1\] QALA  \[Acme Software ▾\]  \[🔍\]  \[🔔\]  \[●AI\]  \[👤\]                              │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  ≡ SDEs / my-api-sde                                                              │ │  \[2\] my-api-sde      \[3\]● Active   v.env-142   \[4\] Owner: Alex M.   3h ago        │ │  \[5\] \[Open in VS Code ▓\] \[Take Snapshot\] \[Rebuild\] \[≡ More\]                      │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[6\] Overview │ Pipeline │ Quality │ Configuration │ Snapshots │ Audit Trail       │ │ ═════════════════════════════════════════════════════════════════════════════════│ │  \[7\] Environment Definition          │ \[8\] Live Telemetry                         │ │  ┌────────────────────────────────┐  │  CPU   ████░░░░  42%                       │ │  │ Base image: node:20-alpine     │  │  MEM   ██████░░  67%                       │ │  │ Node: 20.11.0 (pinned)         │  │  Active build: my-api \#312  ⟳              │ │  │ pnpm: 8.15.4 (pinned)          │  │  Last build: ✓ PASSED  2h ago             │ │  │ Linter: eslint 8.57 (pinned)   │  │                                           │ │  │ env-def version: 142 \[diff\]    │  │ \[9\] Security Status                        │ │  └────────────────────────────────┘  │  SAST last scan: ✓  4h ago               │ │                                      │  CVE check: ✓  No critical               │ │  \[10\] Open CCRs on this SDE  (2)     │  Baseline policy: ✓ Compliant             │ │  CCR-039  Dep update  ● Approved     │                                           │ │  CCR-041  Lint config  ● In Review   │                                           │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-03  SDE Detail — Overview tab, Software SDE*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | GlobalNav | Standard. Factory name in switcher. |
| 2 | SDE Name \+ Type | SDE name as H2. Type badge hidden on software SDEs (implicit). |
| 3 | Lifecycle State Chip | Dot \+ label. "Active" \= teal. Click opens Transition Panel. |
| 4 | Owner \+ Last Modified | Avatar \+ name. Timestamp relative. Absolute on hover. |
| 5 | Primary Actions | "Open in VS Code" is primary for software SDEs. Domain-adapted for other types (e.g. "Open Workbench"). |
| 6 | Tab bar | 6 tabs. Active tab underline in Action Blue. Keyboard: arrow-key nav within tablist. |
| 7 | Environment Definition | Tool versions with pinned status. diff link shows changes from previous env-def version. |
| 8 | Live Telemetry | CPU/memory bars update every 5s. Active build shows with spinner. Only visible for software SDEs. |
| 9 | Security Status | Last SAST/CVE scan result. Green tick \= passed. Red X \= failed with link to findings. |
| 10 | Open CCRs | CCRs linked to this SDE. Clicking a CCR row opens CCR detail in a right drawer. |

## **5.4  WF-04  SDE Pipeline Tab**

|   SC-05  SDE Detail  |  Pipeline Tab — CI/CD visual ┌──────────────────────────────────────────────────────────────────────────────┐ │  Overview │ \[Pipeline\] │ Quality │ Configuration │ Snapshots │ Audit Trail          │ │ ═════════════════════════════════════════════════════════════════════════════════│ │  Build \#312  ⟳ Running  |  Commit: a3f1c7d  |  Branch: main  |  Started: 3m ago    │ │                                                                                    │ │  \[1\]      \[2\]       \[3\]       \[4\]      \[5\]       \[6\]       \[7\]       \[8\]           │ │  ┌──────┐  ┌──────┐  ┌──────┐  ┌────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐   │ │  │Commit│──│Build │──│ SAST │──│SCA │──│ Test │──│ Gate │──│Attest│──│Publish│  │ │  │  ✓   │  │  ✓   │  │  ✓   │  │ ✓  │  │  ⟳  │  │  ⏸  │  │  ⏸  │  │  ⏸  │    │ │  └──────┘  └──────┘  └──────┘  └────┘  └──────┘  └──────┘  └──────┘  └──────┘   │ │  00:08     02:14     01:32     00:44    ⟳ 3m…     —         —         —           │ │                                                                                    │ │  \[9\] ▼ Test stage log (live)                                                      │ │  ┌────────────────────────────────────────────────────────────────────────────┐   │ │  │ PASS  src/api/routes.test.ts  (14 tests)                                  │   │ │  │ PASS  src/utils/validator.test.ts  (8 tests)                              │   │ │  │ ⟳ RUNNING  src/integration/db.test.ts  ...                               │   │ │  └────────────────────────────────────────────────────────────────────────────┘   │ │  \[10\] ✦ AI suggestion: 3 tests predicted high-risk — defect probability 74%       │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-04  SDE Pipeline Tab — live CI/CD view with AI risk overlay*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1–8 | Pipeline Stages | Connected horizontal nodes. ✓ \= Passed (green), ⟳ \= Running (blue animated), ⏸ \= Pending (grey), ✗ \= Failed (red). Click any node for full log. |
| 9 | Stage Log Panel | Live log stream for running stage. Expandable. Copy button. Log filter input. |
| 10 | AI Risk Overlay | AI Agent predicts defect probability for test files based on historical change patterns. Dismissable. |

## **5.5  WF-05  Solution Detail Screen**

|   SC-06  Solution Detail  |  Full lifecycle view ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Solutions / Product-X / Formulation-A                                          │ │  \[1\] ⬡ Formulation-A    \[2\]● In Review    v2.1.0   \[3\] Owner: Elena V.            │ │  \[4\] \[New Version ▓\] \[Create CCR\] \[Create Release\] \[View Registry\] \[AI ✦\] \[≡\]    │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[5\] Overview │ Versions │ Changes │ Quality │ Releases │ Distribution │ Artefacts │ │ ═════════════════════════════════════════════════════════════════════════════════│ │  \[6\] Domain Properties               │ \[7\] Current State                          │ │  ┌────────────────────────────────┐  │  SDE: Lab-WB-03  \[Open\]                   │ │  │ INCI Name: Aqua                │  │  Spec: formulation-a-v2.1.pdf  \[View\]     │ │  │ Batch type: Liquid emulsion    │  │  Linked CCRs: 3 open                       │ │  │ pH range: 6.0 – 7.5            │  │  Open defects: 1 Medium                   │ │  │ Regulatory status: EU REACH ✓  │  │                                           │ │  │ Stability tested: 24 months    │  │ \[8\] Upcoming Release                       │ │  │ \[Edit properties\]              │  │  Release v2.1.0 → target 12 Mar            │ │  └────────────────────────────────┘  │  Gates: 3/5 passed  ● In Progress          │ │                                      │  \[View Release →\]                          │ │  \[9\] ✦ AI Insight  ────────────────────────────────────────────────────          │ │  Stability prediction: this formulation shows a 14% edge-case risk in             │ │  parameter range pH 7.3–7.5 at 40°C. \[View Evidence\] \[Accept\] \[Dismiss\]          │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-05  Solution Detail — Overview tab, CPG Formulation solution type*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Solution Name \+ Type Icon | Solution type icon (domain-specific). Name as H2, editable inline on click. Type badge. |
| 2 | Lifecycle State Chip | Amber "In Review" state. Click opens Transition Panel drawer. |
| 3 | Owner \+ Timestamp | Avatar \+ name link to user profile. Timestamp shows last modification. |
| 4 | Action Bar | Primary action contextual to solution type. "New Version" for Formulation. "New Commit" for software. |
| 5 | Tab Bar | 6–8 tabs depending on solution type. Domain-specific tabs load additional content (e.g. "Batch Records" for CPG). |
| 6 | Domain Properties | Fields rendered from CPG Domain Pack schema. Generic solution detail shows universal fields only. |
| 7 | Current State Panel | Right column: active SDE link, current specification artefact, open CCR count, open defect count. |
| 8 | Upcoming Release card | Mini release card — version, target date, gate progress. Links to full Release detail. |
| 9 | AI Insight Card | AI recommendation specific to this solution. Full evidence on "View Evidence" expand. |

## **5.6  WF-06  CCR Detail Screen**

|   SC-09  CCR Detail  |  Review & Approval view ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Change Control / CCR-042  Ingredient Substitution                              │ │  \[1\] CCR-042  |  \[2\] ██ Risk: 8/10 HIGH  |  \[3\]● Awaiting CCB  |  Elena V.        │ │  \[4\] \[Approve ▓\] \[Request Changes\] \[Reject\] \[Escalate to CCB\]                    │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[5\] Change Description             │ \[6\] Approval Chain                          │ │  ────────────────────────────────   │  ✓ Stage 1: Formulation Chemist             │ │  Substitute Palm Oil Glycerides     │     Elena V.  Approved  09:14               │ │  with Shea Butter Glycerides in     │  ⟳ Stage 2: QA Manager  ← current          │ │  Products: Form-A, Form-B, Form-C   │     Marco D.  Pending approval              │ │                                     │  ⏸ Stage 3: CCB (4 members)                 │ │  \[7\] Implementation Plan            │     Pending stage 2 completion              │ │  ─────────────────────────────────  │                                             │ │  1\. Update formulation spec in SDE  │ \[8\] Impact Analysis                         │ │  2\. Run stability simulation x3     │  14 affected SKUs                           │ │  3\. Upload simulation artefacts     │  ┌──────────────────────────────┐           │ │  4\. Regulatory pre-check            │  │ ⬡ Form-A  HIGH impact        │           │ │                                     │  │ ⬡ Form-B  MEDIUM impact      │           │ │  \[9\] Regulatory Implications        │  │ ⬡ Form-C  MEDIUM impact      │           │ │  ─────────────────────────────────  │  │ \+11 more...                  │           │ │  EU REACH: re-notification required │  └──────────────────────────────┘           │ │  US FDA 21 CFR: no change required  │                                             │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-06  CCR Detail — approver view, CPG Ingredient Substitution change type*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | CCR ID \+ Title | ID is monospace. Title is H2. Breadcrumb shows path. |
| 2 | Risk Score | Large chip. 8/10 \= red "HIGH". Score breakdown on click/hover. Computed from change type, impact scope, regulatory flag. |
| 3 | Lifecycle State | "Awaiting CCB" \= amber chip. Click shows available transitions (restrict to authorised roles only). |
| 4 | Action bar | Approve, Request Changes, Reject shown only to current stage approver. Other users see view-only actions. |
| 5 | Change Description | Rich text (read-only). Implementation plan below. |
| 6 | Approval Chain | Vertical timeline. Stage 2 is highlighted as current. Role name \+ person name per stage. |
| 7 | Implementation Plan | Numbered steps from CCR submission. Editable by requester only while in Draft state. |
| 8 | Impact Analysis | Solution list with impact severity chips. Mini relationship graph available on "View graph" link. |
| 9 | Regulatory Implications | Domain-Pack-driven section. Shows only when solution type has regulatory dimension. |

## **5.7  WF-07  Release Pipeline Screen**

|   SC-10  Release Pipeline  |  Gate checklist view ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Releases / REL-0091  Formulation-A v2.1.0                                     │ │  \[1\] REL-0091  |  Formulation-A v2.1.0  |  \[2\]● In Progress  |  Target: 12 Mar   │ │  \[3\] \[Approve Release ▓\] \[Download Release Package\] \[View Artefacts\]             │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[4\] Release Gate Progress  ─────────────────────────────────────────────────   │ │                                                                                    │ │   \[5\]✓ Specification    \[6\]✓ Regulatory     \[7\]✓ QA Validation  \[8\]⟳ Stability   \[9\]⏸ QP Sign-off│ │   Gate                  Pre-check           Gate                Gate               Gate          │ │   Elena V.  08:20       Compliance AI       QA Mgr  09:41       ─ Running ─        ─ Pending ─   │ │   Artefact ↗            09:12  Pass         Artefact ↗                                          │ │                                                                                    │ │   ─────────────────────────────────── Gate 4: Stability ──────────────────────── │ │  \[10\] Stability gate is running. Estimated completion: 18 min.                    │ │   ┌────────────────────────────────────────────────────────────────────────────┐  │ │   │ Stability test suite: 48hr accelerated study (LIMS imported)               │  │ │   │ ⟳ Test 1: pH stability at 25°C  RUNNING                                   │  │ │   │ ✓ Test 2: Viscosity at 40°C  PASSED                                       │  │ │   │ ✓ Test 3: Microbial challenge  PASSED                                      │  │ │   └────────────────────────────────────────────────────────────────────────────┘  │ │  \[11\] AI Release Note Draft:  "Formulation-A v2.1.0: Ingredient substitution..."  │ │   \[Edit Draft\]  \[Approve Draft\]                                                   │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-07  Release Pipeline — CPG Formulation release, gate 4 running*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Release ID \+ Name | Release record ID and target version. Breadcrumb to parent solution. |
| 2 | State Chip | ● In Progress \= amber. Transitions: Approved, Rejected, On Hold. |
| 3 | Action bar | "Approve Release" enabled only when all required gates passed and all required sign-offs collected. |
| 4 | Gate Progress Strip | Horizontal pipeline. Gates adapt to solution type — CPG gates differ from software gates (no SAST, has Stability \+ QP). |
| 5–9 | Gate nodes | ✓ \= Passed (green). ⟳ \= Running (blue animated ring). ⏸ \= Pending (grey). ✗ \= Failed (red). Each shows evaluator and timestamp. |
| 10 | Running gate detail | Active gate expands below the pipeline strip showing live test progress. |
| 11 | AI Release Notes | AI auto-drafts release notes from linked CCRs and test summaries. Editable. Approval locks the draft. |

## **5.8  WF-08  Formulation Workbench (CPG SDE)**

|   SC-05  Formulation Workbench  |  CPG SDE type ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Workbenches / Lab-WB-03  Formulation-A workspace                              │ │  \[1\] Lab-WB-03  ● Active  env-def: fd-142  \[2\] Owner: Elena V.                   │ │  \[3\] \[Open Simulation ▓\] \[Import LIMS Results\] \[Take Snapshot\] \[≡ More\]         │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  Overview │ Simulations │ Quality Events │ Configuration │ Snapshots │ Audit       │ │ ═════════════════════════════════════════════════════════════════════════════════│ │  \[4\] Current Formulation                │ \[5\] Quality Events (last 30 days)       │ │  ┌────────────────────────────────────┐ │  ✓ Stability test  2024-02-10           │ │  │ Version: v2.1.0 (working draft)    │ │  ✓ pH verification  2024-02-08          │ │  │ Base: Aqueous emulsion             │ │  ⚠ Viscosity out-of-spec  2024-02-05   │ │  │ Active ingredients: 3              │ │  ✓ Microbial challenge  2024-02-01      │ │  │ INCI compliance: ✓ (auto-checked)  │ │                                         │ │  │ \[View full spec\]                   │ │  \[Import from LIMS\]                     │ │  └────────────────────────────────────┘ │                                         │ │                                          │ \[6\] Regulatory Auto-checks              │ │  \[7\] Simulation Results                 │  EU REACH:  ✓ Pass                      │ │  ┌────────────────────────────────────┐ │  IFRA:      ✓ Pass                      │ │  │ Sim-031: Substitute simulation     │ │  US FDA OTC: ⏸ Not yet run              │ │  │ Result: 11/14 SKUs PASS            │ │  \[Run checks now\]                       │ │  │ 3 SKUs need reformulation          │ │                                         │ │  │ \[View full simulation report\]      │ │                                         │ │  └────────────────────────────────────┘ │                                         │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-08  Formulation Workbench — CPG persona, domain-adapted SDE*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Workbench header | Label reads "Workbench" not "SDE". Type adapts to CPG vocabulary throughout. |
| 2 | Owner | Avatar \+ name. CPG workbench shows lab assignment instead of compute quota. |
| 3 | Primary action | "Open Simulation" replaces "Open in VS Code". Domain-appropriate primary action. |
| 4 | Formulation panel | Current working draft spec. INCI compliance auto-checked on every save. |
| 5 | Quality Events | LIMS-imported results shown inline. Out-of-spec results flagged in amber/red. |
| 6 | Regulatory Auto-checks | Platform runs regulatory pre-checks on current formulation automatically. Status shown per jurisdiction. |
| 7 | Simulation Results | Most recent simulation run with pass/fail summary. Full report opens in a drawer. |

## **5.9  WF-09  Research Workbench  —  Financial / Quant**

|   SC-05  Research Workbench  |  Financial SDE type ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Research Workbenches / RW-Momentum-Q1                                         │ │  \[1\] RW-Momentum-Q1  ● Active  env-def: rw-088  Owner: Priya S.                  │ │  \[2\] \[Open Jupyter ▓\] \[Run Backtest\] \[Take Snapshot\] \[Paper Trade\] \[≡\]          │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  Overview │ Backtests │ Risk Validation │ Configuration │ Datasets │ Audit         │ │ ═════════════════════════════════════════════════════════════════════════════════│ │  \[3\] Strategy Environment               │ \[4\] Performance Dashboard               │ │  ┌──────────────────────────────────┐   │  Latest Backtest: BT-041  ✓             │ │  │ Strategy: Equity Momentum (L/S)  │   │  Sharpe Ratio:   1.34  ✓ (\> 1.0)       │ │  │ Universe: MSCI World             │   │  Max Drawdown:   \-11.2%  ✓ (\< 20%)     │ │  │ Lookback: 12m                    │   │  Annual Return:  14.7%                  │ │  │ Rebalance: Monthly               │   │  VaR (99%, 1d):  \-2.1%  ✓              │ │  │ Training data: v3.2 \[checksum ↗\] │   │                                         │ │  └──────────────────────────────────┘   │ \[5\] Drift Monitor                       │ │                                          │  Status: ● Stable (last 30d)           │ │  \[6\] Risk Gate Status                    │  Last alert: 8 days ago                 │ │  ┌──────────────────────────────────┐   │                                         │ │  │ ✓ Sharpe gate     Pass  \[ev ↗\]  │   │ \[7\] Regulatory Status                   │ │  │ ✓ Drawdown gate   Pass  \[ev ↗\]  │   │  MAR assessment: ✓ Compliant            │ │  │ ✓ VaR gate        Pass  \[ev ↗\]  │   │  MiFID II algo: ✓ Docs complete         │ │  │ ⏸ Liquidity gate  Pending        │   │  Pre-trade controls: ✓ Registered       │ │  └──────────────────────────────────┘   │                                         │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-09  Research Workbench — Financial / Quant domain, algorithm development*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Workbench label | Label reads "Research Workbench" — financial domain vocabulary. |
| 2 | Primary actions | "Open Jupyter" \= primary. "Run Backtest" \= secondary. "Paper Trade" \= pre-production deployment action. |
| 3 | Strategy panel | Model parameters panel. "Training data" shows dataset version with integrity checksum link. |
| 4 | Performance Dashboard | Backtest metrics with risk limit compliance indicators (green ✓ / red ✗ per threshold). |
| 5 | Drift Monitor | AI drift detection status. Links to drift alert history and recalibration CCR history. |
| 6 | Risk Gate Status | Gates specific to financial domain. Each links to evidence artefact. |
| 7 | Regulatory Status | MiFID II / MAR compliance indicators. Domain-Pack-driven section. |

## **5.10  WF-10  Agricultural Farm Dashboard  (Mobile-first)**

|   SC-13  Agricultural Farm Dashboard  |  Mobile / Tablet ┌──────────────────────────────────────────────────────────────────────────────┐ │  ╔══════════════════════════════════════════════════════╗                         │ │  ║ QALA  ≡  │  Acme AgriTech  │  \[🔔\] \[●AI\]           ║                         │ │  ╠══════════════════════════════════════════════════════╣                         │ │  ║ \[1\] FARM MAP                                        ║                         │ │  ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║                         │ │  ║ ░  \[F1\]█████  \[F2\]█████  \[F3\]░░░░░           ░░    ║                         │ │  ║ ░  \[F4\]█████  \[F5\]░░░░░  \[F6\]██████          ░░    ║                         │ │  ║ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║                         │ │  ║ ● F3: Low moisture alert  \[View\]                    ║                         │ │  ╠══════════════════════════════════════════════════════╣                         │ │  ║ \[2\] IoT Fleet:  150 devices  ●148 online  ○2 offline║                         │ │  ║ Firmware: v2.3 (current)  Last sync: 2m ago         ║                         │ │  ╠══════════════════════════════════════════════════════╣                         │ │  ║ \[3\] ✦ AI Yield Insight                              ║                         │ │  ║ Season prediction: 4.2 t/ha (target: 4.0)  ✓       ║                         │ │  ║ ⚠ Section F3: irrigation deficit detected           ║                         │ │  ║ Recommended: increase drip 15% for 14 days          ║                         │ │  ║ \[Accept\] \[View Evidence\] \[Defer\]                    ║                         │ │  ╠══════════════════════════════════════════════════════╣                         │ │  ║ \[4\] 🏠 Home  🌱 Crops  📡 Devices  📦 Trace  🔍     ║                         │ │  ╚══════════════════════════════════════════════════════╝                         │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-10  Agricultural Farm Dashboard — mobile-first, field operations*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Farm Map | Field section polygons. Colour-coded by moisture/health. Green \= normal, amber \= caution, red \= alert. Tap section for detail drawer. |
| 2 | IoT Fleet status | Device count \+ online/offline split. Firmware version status. Offline count in red if \> 0\. |
| 3 | AI Yield Insight | Top AI recommendation with Accept/Defer inline. Actionable without leaving dashboard. |
| 4 | Bottom Tab Nav | Mobile navigation pattern. 5 tabs. Active tab shown in Action Blue. Tab icons with labels. |

## **5.11  WF-11  Command Palette  (Cmd+K)**

|   Command Palette  |  Overlay on any screen ┌──────────────────────────────────────────────────────────────────────────────┐ │                                                                                   │ │          ╔══════════════════════════════════════════════════════╗               │ │          ║ \[1\] 🔍 \[ Search solutions, commands, people...    \] ║               │ │          ╠══════════════════════════════════════════════════════╣               │ │          ║ \[2\] RECENT                                           ║               │ │          ║   ⬡ Formulation-A      CPG  ● In Review            ║               │ │          ║   📄 CCR-042           Ingredient Substitution      ║               │ │          ║   🧪 Lab-WB-03         Workbench  ● Active          ║               │ │          ╠══════════════════════════════════════════════════════╣               │ │          ║ \[3\] COMMANDS                                         ║               │ │          ║   ⊕ New Solution                         Ctrl+N     ║               │ │          ║   📝 Create CCR                                      ║               │ │          ║   💾 Take SDE Snapshot                               ║               │ │          ║   📊 Open Compliance Report                          ║               │ │          ╠══════════════════════════════════════════════════════╣               │ │          ║ \[4\] PEOPLE                                           ║               │ │          ║   👤 Elena Vasquez     Formulation Lead              ║               │ │          ║   👤 Marco Di Lucca    QA Manager                    ║               │ │          ╠══════════════════════════════════════════════════════╣               │ │          ║ \[5\] Tip: prefix ? for AI search  \! for AI command    ║               │ │          ╚══════════════════════════════════════════════════════╝               │ │                                                                                   │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-11  Command Palette — Cmd+K overlay, default (no search query) state*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Search Input | Autofocus on open. Instant results (debounced 50ms). Placeholder adapts to persona. |
| 2 | Recent group | Last 8 accessed items across solutions, CCRs, workbenches. Arrow-key navigable. |
| 3 | Commands group | Platform commands with optional keyboard shortcuts. Domain-specific commands load per persona. |
| 4 | People group | Team members with role labels. Click opens user profile or sends notification. |
| 5 | AI tip | "?" prefix enables semantic search. "\!" prefix sends a command to AI Agent directly. |

## **5.12  WF-12  Compliance Evidence Generation**

|   Compliance Screen  |  SOC 2 Evidence Package Generation ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Compliance / SOC 2 Evidence Package                                           │ │  \[1\] Evidence Package  ● Generating...  |  Scope: All Factories  |  Period: 12m  │ │  \[2\] \[Download Package ▒\] \[Share with Auditor\] \[Create Regulator Access\]        │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[3\] Framework: SOC 2 Type II   Scope: 3 factories   Period: Mar 2024 – Mar 2025 │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[4\] Control Coverage   47 controls total                                         │ │  ████████████████████████████████████████░░░░░    43 Fully evidenced   ✓          │ │                                                    4  Need supplement  ⚠          │ │                                                                                    │ │  \[5\] CC1.1  Control Environment  ✓ 100% evidenced   \[View evidence\]              │ │  CC2.1  Communication         ✓ 100% evidenced   \[View evidence\]                  │ │  CC6.1  Logical Access        ✓ Evidenced (42 CCRs, RBAC audit)                   │ │  CC7.2  System Monitoring     ✓ Evidenced (SEM event log, 365d)                   │ │  CC8.1  Change Management     ✓ Evidenced (1,204 CCRs with approvals)             │ │  A1.2  Availability           ⚠ Needs supplement — upload DR test results         │ │        \[Upload supplement ↑\]                                                      │ │  \[6\] CC9.1  Vendor Mgmt       ⚠ Needs supplement — upload SOC 2 report for LIMS  │ │        \[Upload supplement ↑\]                                                      │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[7\] ✦ AI summary: All software and financial domain controls evidenced.           │ │   CPG domain: 2 controls need physical test records uploaded.                     │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-12  Compliance Evidence Generation — SOC 2 Type II multi-domain package*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Header state | ● Generating... shows progress while platform collects evidence. Updates to ● Complete on finish. |
| 2 | Actions | Download (ZIP of all evidence artefacts). Share (secure link). Regulator Access (time-limited read-only portal). |
| 3 | Scope bar | Framework badge, factory count, period range. All editable before generation. |
| 4 | Coverage summary | Progress bar \+ counts. Visual overview before reviewing individual controls. |
| 5 | Evidenced controls | Green tick. "View evidence" opens evidence detail drawer with specific records (timestamps, actor names, CCR IDs). |
| 6 | Needs supplement | Amber warning. Platform identifies what is missing. Upload slot appears inline. |
| 7 | AI summary | AI synthesises the coverage state into a human-readable summary. Highlights which domains have gaps. |

# **6  User Flows**

*End-to-end flows for every critical path. Each flow specifies: triggering condition, involved screens, decision points, system responses, events published, and error handling. Flows reference WF wireframes and SC screen IDs.*

| Flow notation:  Screen IDs (SC-XX) reference Section 5 specifications.  WF-XX references wireframes. *Decision nodes are shown as \[D\]: indicates the flow branches based on a condition.* *Error paths are shown in separate "Error / Alternative" rows below each flow table.* |
| :---- |

## **6.1  UF-01  New User Onboarding  —  Software Developer**

Scope: From invitation email to first successful CI build in a provisioned SDE.

Persona: Software Developer, new to Qala, organisation using SSO.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Email (external) | Clicks "Accept Invitation" link. | Browser opens SC-01 Login. SSO button prominent; org domain pre-filled. | SC-01 Login |
| 2 | SC-01 Login | Clicks "Continue with \[Organisation\]." | OIDC redirect to company IdP. On success, JWT issued. Platform detects first-login flag. | SC-02 Wizard Step 1 |
| 3 | SC-02 Step 1 | Selects persona: "Software Developer." | Persona saved to profile. Sidebar and vocabulary layer configured for developer persona. | SC-02 Step 2 |
| 4 | SC-02 Step 2 | Accepts "My Projects" as factory name. Selects "Software Factory" template. | Factory provisioned. Default policies applied (SAST mandatory, attestation required). | SC-02 Step 3 |
| 5 | SC-02 Step 3 | Solution type: Application. Name: "api-gateway". Language: Go. | Solution record created. SDE provisioning starts asynchronously (\< 10 min). | SC-02 Step 4 |
| 6 | SC-02 Step 4 | Skips team invitations. | Onboarding marked complete. SDE still provisioning. | SC-03 Dashboard |
| 7 | SC-03 Dashboard | Sees "SDE Provisioning" toast with progress bar. | SDE provisions. Toast updates: "api-gateway SDE is ready." | SC-03 (updated) |
| 8 | SC-03 | Clicks "Open in VS Code" on SDE card. | VS Code opens with Qala Dev extension, SDE auto-connected. | IDE (external) |
| 9 | IDE | Makes first code commit to main. | Webhook fires. Pipeline triggered. Event: BUILD\_STARTED. | SC-05 WF-04 Pipeline |
| 10 | SC-05 Pipeline tab | Watches pipeline — all stages pass. | SLSA attestation created. Quality gate evaluated: PASSED. BUILD\_PASSED event. | SC-06 Solution Detail |

| *Error Path: SSO fails → inline error \+ option for email+password (if enabled by org). SDE provisioning fails → toast with error, "Retry" button, support ticket auto-created.* |
| :---- |

## **6.2  UF-02  CPG Ingredient Substitution Change Control**

Scope: Supply disruption alert to approved substitution with 14 SKUs updated.

Personas: Supply Chain Director (initiates) · Formulation Chemist (simulates) · QA Manager (validates) · CCB (approves).

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-03 Dashboard | SC Director opens Qala. Navigates to affected formulation via Cmd+K or sidebar. | Platform loads SC-06 Solution Detail for affected product line. | SC-06 Product Line |
| 2 | SC-06 | Clicks "Create CCR." Selects type: "Ingredient Substitution." | CCRForm opens with Ingredient Substitution field set. Risk preview chip visible. | SC-09 CCR Create (WF-06) |
| 3 | SC-09 Create | Fills: original ingredient, substitute, supply disruption rationale, effective date. | Risk score computed live: 8/10 HIGH. Cascade impact query fires in background. | SC-09 (risk updated) |
| 4 | SC-09 | Reviews impact: 14 SKUs listed with impact severity. Submits CCR. | CCR state → Submitted. CCB \+ Formulation Chemist notified. Event: CCR\_SUBMITTED. | SC-08 CCR List |
| 5 | SC-09 (Chemist view) | Chemist opens CCR. Opens Lab Workbench from CCR context link. | Lab Workbench (WF-08) opens in new tab. Substitute properties pre-loaded from CCR context. | SC-05 Workbench (WF-08) |
| 6 | SC-05 Workbench | Chemist runs simulation with substitute. 11/14 pass. Uploads artefacts. | Simulation artefacts stored. Chemist adds results comment to CCR. | SC-09 CCR Detail (WF-06) |
| 7 | SC-09 (CCB view) | CCB reviews CCR \+ simulation results. All 4 members approve. | CCR state → Approved. Event: CCR\_APPROVED. Chemist \+ SC Director notified. | SC-09 (approved) |
| 8 | SC-06 (11 solutions) | Chemist updates 11 formulation specifications. Each update auto-versioned. | 11 new spec versions in Artefact Registry, each linked to CCR-042. | SC-06 (×11) |
| 9 | SC-06 QA | QA Manager imports LIMS results. Runs validation. Quality gate passed for 11/11. | Quality events ingested. All 11 formulations ready for batch release. | SC-11 Batch Dashboard |
| 10 | SC-11 | QA Manager triggers batch release for updated formulations. | Batch release workflow initiates (UF-04). Event: BATCH\_RELEASE\_STARTED. | SC-10 Release (WF-07) |

| *Alternative: 3 SKUs requiring reformulation — each triggers a separate CCR with Reformulation change type. Tracked independently on a parallel track.* |
| :---- |

## **6.3  UF-03  Software Blue/Green Production Release**

Scope: Tech Lead declares release candidate to live production with rollback capability.

Personas: Tech Lead · Release Manager · QA Engineer · Platform (automated).

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-06 Solution Detail | Tech Lead clicks "Create Release." Selects type: Standard. Links CCRs resolved. | Platform pre-validates: all linked artefacts have valid SLSA attestations. | SC-10 Release (WF-07) |
| 2 | SC-10 | Platform auto-evaluates gates: SAST, Coverage, No Critical Defects, Attestation. | Gates 1–4 evaluated. All pass. Gate 5 (QA sign-off) pending. | SC-10 (gates 4 passed) |
| 3 | SC-10 | QA Engineer reviews results. Clicks "Sign off QA approval." | QA approval recorded with timestamp \+ identity. Compliance evidence record created. | SC-10 (all gates passed) |
| 4 | SC-10 | Release Manager reviews full release record. Clicks "Approve Release." | Release state → Approved. All approvals collected. Event: RELEASE\_APPROVED. | SC-10 (approved) |
| 5 | SC-10 | Release Manager clicks "Deploy: Blue/Green." | Green environment provisioned. New version deployed to Green. Smoke tests run. | SC-10 (deploying) |
| 6 | SC-10 | Health metrics validated on Green. Release Manager clicks "Switch Traffic." | Load balancer switches 100% to Green. Blue retained for rollback (48h window). | SC-10 (live) |
| 7 | SC-10 | Monitors 30-min observation window on SC-10 dashboard. | AI Agent active: monitors error rate, latency p99, business metrics. | SC-10 (monitoring) |
| 8 | SC-10 | All metrics within threshold. Release Manager confirms stable. | Blue environment scheduled for archive. Release state → Live. Event: DEPLOYED. | SC-06 (Live state) |

| *Rollback: If AI Agent detects error rate breach, auto-rollback triggered — traffic returns to Blue within 60 seconds. Release Manager notified. Rollback CCR auto-created. Shown as red alert banner on SC-10.* |
| :---- |

## **6.4  UF-04  CPG Batch Release — QA to Distribution**

Scope: Completed production batch through QC testing to retail distribution.

Personas: QA Manager · Release Manager · Distribution Manager.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-11 Batch Dashboard | Manufacturing submits batch via ERP integration. Batch appears in "Active Batches" tab. | Batch record imported as artefact. Linked to formulation spec version. | SC-11 (active batches) |
| 2 | SC-11 | QA Manager clicks batch. Opens batch detail drawer. | Batch detail shows: production date, equipment IDs, in-process QC results. | SC-11 (batch drawer) |
| 3 | SC-11 | QA imports CoA and finished product test results from LIMS. | Quality events ingested. Platform evaluates quality gate: all parameters in spec. | SC-11 (gate evaluated) |
| 4 | SC-11 | \[D\] Quality gate passes. QA Manager clicks "QP Sign-off." | QP approval recorded (electronic signature \+ timestamp). Compliance evidence created. | SC-10 Release (WF-07) |
| 5 | SC-10 | Release Manager creates batch release record. Links batch ID \+ spec version. | Release gate check: QP sign-off ✓, spec linkage ✓, distribution plan ready. | SC-10 (all gates) |
| 6 | SC-10 | Release Manager approves release. | Batch release state → Approved. | SC-10 (approved) |
| 7 | SC-10 | Distribution Manager initiates distribution: assigns batch to DCs, carrier details. | Distribution record created. GS1 EPCIS events generated. Event: BATCH\_DISTRIBUTED. | SC-11 (Released tab) |

| *\[D\] Gate fail path: Any parameter out-of-spec → QA creates defect. Batch state → On Hold. Investigation workflow initiated. Batch cannot be released until defect resolved and quality gate re-evaluated.* |
| :---- |

## **6.5  UF-05  Security Incident — SDE Quarantine and Recovery**

Scope: Threat detected to SDE quarantined to clean SDE restored. Full audit trail.

Personas: SEM (automated) · Security Engineer · Developer.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Platform (SEM) | SEM detects anomalous egress in developer SDE. Threat score breaches quarantine threshold. | SDE quarantined within 90s. Egress severed. Forensic snapshot captured. Event: SDE\_QUARANTINED. | Push notification |
| 2 | SC-03 Dashboard | Developer sees red alert banner: "Your SDE api-gateway-sde has been quarantined." | Security Engineer receives push \+ email notification simultaneously. | SC-05 (quarantined state) |
| 3 | SC-05 (quarantined) | Security Engineer opens SDE detail. State chip: QUARANTINED (red, pulsing dot). | Forensic evidence panel displayed. Snapshot accessible in secure viewer. | SC-05 (forensic panel) |
| 4 | SC-05 Forensic | Security Engineer reviews process tree, network log, file access log in forensic viewer. | Investigation actions logged in audit trail. Threat vector identified. | SC-05 (investigation) |
| 5 | SC-05 | Security Engineer clicks "Restore Clean SDE." Selects pre-quarantine snapshot. | New clean SDE provisioned from snapshot. Security baseline scan runs automatically. | SC-05 (provisioning) |
| 6 | SC-05 | Security baseline passes. Security Engineer confirms restore. | Developer access restored. Developer notified: "SDE restored. New credentials below." | SC-05 (Active, clean) |
| 7 | SC-08 CCR | Security Engineer raises emergency CCR to patch compromised package platform-wide. | CVE response workflow triggered across all 47 consumer solutions (UC-TOOL-004 path). | SC-08 (emergency CCR) |

## **6.6  UF-06  AI Recommendation — Accept and Execute**

Scope: AI surfaces an environment risk to user accepts to platform auto-creates and executes CCR.

Persona: Research Scientist (Research Environment context).

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-03 Dashboard | AI Recommendation card appears: "Experiment EXP-042 — 3 unpinned dependencies." | AI orb animates. Card shows: title, confidence 87%, evidence link, Accept / Dismiss buttons. | SC-03 (AI card) |
| 2 | AI card on SC-03 | Scientist clicks "View Evidence." | Evidence panel expands: 3 package names, historical failure rate for similar configs. | SC-03 (card expanded) |
| 3 | AI card | Scientist clicks "Accept — Auto-create CCR." | CCR pre-populated: type=Config Fix, affected SDE, recommended change, risk=Low. | SC-09 CCR (prefilled) |
| 4 | SC-09 CCR | Scientist reviews pre-filled CCR. Adjusts one version pin. Submits. | CCR submitted. Risk Low \= auto-approved. No manual approval required. | SC-09 (auto-approved) |
| 5 | SC-05 SDE Detail | Configuration update applied. Environment definition version bumped. | New SDE snapshot. Configuration change event published. AI feedback recorded. | SC-05 (updated) |
| 6 | SC-03 Dashboard | AI recommendation card removed. Dashboard returns to normal state. | Feedback stored: accepted \+ outcome. AI model reinforced positively. | SC-03 (card resolved) |

## **6.7  UF-07  Tax Rule Set — Legislative Update to Effective-Date Release**

Scope: New tax legislation to auto-activated rule set on legislative effective date.

Personas: Tax Product Manager · Tax Technologist · Legal · Compliance Officer.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-03 Dashboard | Tax PM sees AI alert or creates CCR manually: "UK Finance Act 2025 — effective 6 Apr." | CCR created: type=Legislative Update. Routes to Legal \+ Compliance (parallel review). | SC-09 CCR |
| 2 | SC-09 Create | Tax PM fills: 15 jurisdictions, effective dates per jurisdiction, change summary. | 15 sub-CCRs auto-generated from master CCR. Each routed independently. | SC-08 CCR List (×15) |
| 3 | SC-05 Tax Workspace | Tax Technologist updates rule sets for all 15 jurisdictions in Tax Workspace. | New rule set versions created per jurisdiction. Validation suite runs automatically. | SC-05 (validation running) |
| 4 | SC-09 (Legal) | Legal reviews 5 complex jurisdictions. Approves all. | Legal approval recorded per jurisdiction. 10 simpler jurisdictions approved by Tax PM. | SC-09 (approved all) |
| 5 | SC-10 Release | Tax PM creates 15 releases. Each with effective-date activation timestamp. | 15 Release records. All gates passed. State: Approved, Pending Effective Date. Countdown visible. | SC-10 (×15, countdown) |
| 6 | Platform (automated) | At each jurisdiction effective date: release auto-activates. | Rule set deployed per jurisdiction at local midnight. Consumers notified. Event: DEPLOYED. | SC-10 (×15, activated) |
| 7 | SC-10 | Tax PM reviews: all 15 shown as ● Live. | Compliance evidence of on-time activation stored per jurisdiction. Audit trail complete. | SC-10 (all live) |

## **6.8  UF-08  Fund Mandate Amendment — Investment Governance**

Scope: Portfolio Manager proposes EM expansion to IC-approved mandate with investor notification.

Personas: Portfolio Manager · Risk Manager · Compliance Officer · Investment Committee.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-03 Dashboard | PM sees AI recommendation: "Fund XY — mandate review overdue (180 days)." | PM clicks recommendation. Opens Fund solution record (SC-06). | SC-06 Solution Detail |
| 2 | SC-06 | PM clicks "Create CCR." Type: Mandate Amendment. | CCRForm opens with Mandate Amendment field set. Risk: 7/10 High. Routes to Risk \+ Compliance \+ IC. | SC-09 CCR Create |
| 3 | SC-09 | PM fills: change rationale, revised mandate text, investor impact assessment. | CCR submitted. Risk: 7/10 HIGH. Three-stage approval chain: Risk → Compliance → IC. | SC-08 (CCR submitted) |
| 4 | SC-05 Research WB (WF-09) | Risk Manager opens CCR. Opens Research Workbench. Runs EM stress test backtest. | Stress test results stored as artefact. Risk gate: pass. | SC-09 (stage 1 done) |
| 5 | SC-09 (Compliance) | Compliance Officer: flags 31-day investor notice requirement. Approves. | Compliance approval \+ notice obligation recorded. Routes to IC. | SC-09 (stage 2 done) |
| 6 | SC-09 (IC) | IC reviews at scheduled meeting. 5/5 vote approve. | CCR fully approved. Investor notification pipeline triggered. 31-day countdown starts. | SC-06 (countdown) |
| 7 | SC-06 | At 31-day notice end: PM activates mandate. Version 2.0 locked. | Mandate v2.0 active. Old mandate archived but queryable. Release event published. | SC-06 (v2.0 active) |

## **6.9  UF-09  Farm-to-Consumer Traceability Query**

Scope: Retailer food safety alert to complete provenance report in \< 10 minutes.

Personas: Retailer Compliance Team · Platform (automated) · Farm Ops Manager.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Traceability Query UI | Retailer opens Qala traceability interface. Enters lot code: LOT-2024-08-221. | Platform initiates provenance query across distribution \+ batch records. | Loading (\< 10 seconds) |
| 2 | Traceability Result | Complete provenance chain displayed: consumer lot → 3 input lots → 2 farms → 4 fields. | Interactive provenance tree rendered. Field-level agronomic records accessible. | Traceability Result |
| 3 | Traceability Result | Retailer clicks Farm 2, Field 4 node. Reviews harvest date \+ treatment history. | Field detail retrieved. Cold chain events shown if applicable. | Expanded node detail |
| 4 | Traceability Result | Retailer clicks "Export PDF." | Signed PDF generated with chain-of-custody. Export event logged in audit trail. | Export complete |
| 5 | SC-13 Farm Dashboard | Farm Ops Manager receives notification: "Traceability query executed by Retailer X." | Notification in event feed. Farm Ops sees what was queried and by whom (transparent audit). | SC-13 (notification) |

## **6.10  UF-10  New Organisation Onboarding — Multi-Domain Setup**

Scope: Contract signed to first solutions registered across three domain factories.

Personas: Platform Admin · CTO · Domain Leads (Software, CPG, Service).

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | Admin Portal | Platform Admin provisions new tenant. Sets: isolation tier, data residency (EU), SSO config. | Tenant provisioned. Dedicated infrastructure spun up in specified region. | SC-02 Wizard (admin) |
| 2 | SC-02 Admin Wizard | Creates 3 Solution Factories: "Acme Software" · "Acme Consumer Goods" · "Acme Advisory." | 3 factories created. Domain-appropriate policies applied per factory type. | SC-04 Factory Overview (×3) |
| 3 | SC-04 | CTO invites domain leads with pre-assigned roles per factory. | Invitation emails sent. Each lead sees persona-adapted UI on first login. | Email → SC-02 (leads) |
| 4 | SC-02 (Software Lead) | Software Lead completes onboarding. Provisions first SDE: Node.js microservice. | Software SDE active. First Application solution registered. | SC-05 SDE (software) |
| 5 | SC-02 (CPG Lead) | CPG Lead completes onboarding. Creates Lab Workbench. Imports legacy formulations (CSV). | CPG SDE active. Formulations imported as initial artefact versions. | SC-05 Workbench (CPG) |
| 6 | SC-02 (Service Lead) | Service Lead creates first Managed Service. Publishes service specification. | Service solution created. Entry published to internal service catalogue. | SC-06 (Service) |
| 7 | SC-03 Dashboard | AI Agent activates across all 3 factories. First recommendations appear within 24 hours. | Cross-factory monitoring begins. AI baseline learning starts per domain. | SC-03 (AI recommendations) |

## **6.11  UF-11  Research Open-Source Library Release**

Scope: Research team releases a novel analysis library as governed open source.

Personas: Research Scientist · Principal Investigator · Technology Transfer Office · Legal.

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-09 CCR Create | Scientist raises CCR: type=Open Source Release. Attaches: library name, Apache 2.0 licence, dependency list. | CCR routed to TTO \+ Legal. Risk \= Medium. | SC-09 CCR (TTO+Legal) |
| 2 | SC-09 (TTO) | TTO reviews IP ownership. Confirms funded-research IP policy permits release. | IP clearance artefact stored. TTO approval recorded. | SC-09 (stage 1 done) |
| 3 | SC-09 (Legal) | Legal reviews all dependency licences for Apache 2.0 compatibility. | SBOM generated. All licences verified compatible. Legal approval recorded. | SC-09 (stage 2 done) |
| 4 | SC-05 Research Env | Scientist adds LICENCE, CITATION.cff, docs. Commits. Pipeline runs and attests. | SLSA-equivalent attestation generated for source release artefact. | SC-05 (attested) |
| 5 | SC-09 (PI) | Principal Investigator gives final approval. | CCR fully approved. Release state → Approved. | SC-10 Release |
| 6 | SC-10 | Platform distributes to PyPI / CRAN / npm. DOI assigned via DOI service. | Library published. Distribution record created. Event: SOLUTION\_RELEASED (open\_source). | SC-06 (Open Source state) |
| 7 | SC-06 | Library now governed: version lifecycle, automated security scans, consumer notifications. | Library managed as Library solution type. Future versions require governed pipeline. | SC-06 (ongoing) |

## **6.12  UF-12  Compliance Examination — Regulator Read-Only Access**

Scope: Regulatory examination notice received to auditor completes review via Regulator Access portal.

Personas: Chief Compliance Officer · External Regulator (read-only).

| \# | Screen | User Action | System Response | Event / Next State |
| :---- | :---- | :---- | :---- | :---- |
| 1 | SC-03 Dashboard | CCO receives examination notice. Opens Compliance section. | Compliance overview shows current posture across all factories. | Compliance Overview |
| 2 | Compliance Screen (WF-12) | CCO selects: framework=SOC 2 Type II, scope=all factories, period=12 months. | Evidence generation queued. Est. time: 6 minutes shown. | Evidence generating |
| 3 | Compliance Screen | Evidence package complete. CCO reviews: 43/47 controls evidenced, 4 need supplement. | CCO uploads 4 supplementary artefacts for partial controls. | Evidence complete |
| 4 | Compliance Screen | CCO clicks "Create Regulator Access." Sets: 30-day duration, read-only, SOC 2 scope. | Regulator access portal created. Auditor receives email with secure one-time link. | Regulator Access portal |
| 5 | Regulator Portal | Auditor logs in. Browses evidence, downloads artefacts, queries audit trail. | All auditor actions logged in immutable audit trail. CCO sees auditor activity in real time. | Auditor read-only view |
| 6 | Regulator Portal | Auditor completes review after 5 days. Raises 2 minor observations. | Observations recorded as comments linked to specific controls. | Regulator Portal (completed) |
| 7 | Compliance Screen | CCO revokes Regulator Access session. Downloads final evidence package for records. | Session revoked. Full interaction log archived. SOC 2 audit record complete. | Session revoked |

# **7  Interaction Patterns & Micro-interactions**

## **7.1  Lifecycle State Transition Panel**

Clicking any LifecycleStateChip opens a right-side transition drawer (never a full modal — transition is consequential but not blocking):

* Current state shown prominently at top.

* Available next states shown as cards — greyed if preconditions not met.

* Precondition blockers shown inline (e.g. "1 critical defect must be resolved before Approved → Released").

* Confirm button activates only when a valid transition is selected.

* Emergency transitions (Quarantine override, Recall initiation) require a typed justification of at least 20 characters before Confirm activates.

* Successful transition: state chip pulses with brief colour animation. AUDIT\_EVENT published immediately.

|   Transition Panel  |  Right-side drawer on state chip click ┌──────────────────────────────────────────────────────────────────────────────┐ │       ─────────────────── │ ╔═════════════════════════════════╗              │ │       Solution: Form-A    │ ║  State Transition               ║              │ │       ● In Review         │ ║  ─────────────────────────────  ║              │ │       Click chip ────────►│ ║  Current: ● In Review           ║              │ │                           │ ║  ─────────────────────────────  ║              │ │                           │ ║  Available transitions:         ║              │ │                           │ ║                                 ║              │ │                           │ ║  \[✓ Approve — move to Approved\] ║              │ │                           │ ║  Requires: QA sign-off ✓        ║              │ │                           │ ║  Requires: All CCRs resolved ✓  ║              │ │                           │ ║                                 ║              │ │                           │ ║  \[✗ Request Changes — to Draft\] ║              │ │                           │ ║  Add reason (required):         ║              │ │                           │ ║  \[ \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ \]  ║              │ │                           │ ║                                 ║              │ │                           │ ║  \[Recall — blocked\]             ║              │ │                           │ ║  ⚠ Only QA Director may recall  ║              │ │                           │ ║                                 ║              │ │                           │ ║  \[▓ Confirm transition ▓\]       ║              │ │                           │ ╚═════════════════════════════════╝              │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*Transition Panel — right-side drawer, inline precondition checking*

## **7.2  Optimistic UI Updates**

| Action | Optimistic Behaviour | Rollback if Server Fails |
| :---- | :---- | :---- |
| CCR approval (own stage) | Approval chip shows "Approved" immediately. | Reverts to "Pending" \+ error toast. |
| Dismiss AI recommendation | Card fades out immediately (300ms). | Card reappears \+ error toast. |
| Solution name inline edit | Name updates immediately on blur. | Reverts to original \+ inline error. |
| Snapshot trigger | Snapshot row appears as "In Progress" instantly. | Row removed \+ error toast. |
| Pipeline trigger | Pipeline status changes to "Running" immediately. | Reverts \+ error notification. |
| Tag assignment | Tag chip appears on card immediately. | Chip removed \+ error toast. |
| State transition (low-risk) | State chip updates immediately on confirm. | Chip reverts \+ error dialog. |

## **7.3  Loading States**

| Context | Pattern | Trigger |
| :---- | :---- | :---- |
| Page load | Skeleton screen — grey shimmer blocks matching content layout. | Always on page navigation. |
| Data table | Skeleton rows — 5 rows at target height, animated shimmer. | Always on data fetch. |
| Action button | Button → spinner icon \+ disabled state \+ "Processing..." label. | On any async submit. |
| AI analysis | AI orb animated pulse \+ "Analysing…" label. | During AI computation. |
| SDE provisioning | Step progress bar: Initialising → Building → Configuring → Ready. | Always (can take up to 10 min). |
| Build pipeline stages | Animated stage node border (blue rotating ring). | While stage running. |
| Evidence generation | Percentage ring \+ "Collecting evidence for N controls" label. | Always (typically 2–8 min). |
| Backtest execution | Progress bar with estimated time \+ stage label (Loading data, Running, etc.). | While backtest running. |

## **7.4  Empty States — Domain-Adaptive**

| Screen Context | Illustration | Message | CTA |
| :---- | :---- | :---- | :---- |
| No SDEs (Software) | Blueprint grid illustration | Your factory has no environments yet. Provision an SDE to start. | "Provision SDE" |
| No SDEs (CPG) | Lab flask illustration | No formulation workbenches yet. Set up your first lab workspace. | "Create Workbench" |
| No SDEs (Financial) | Chart \+ magnifier | No research workbenches yet. Create your first quantitative environment. | "Create Workbench" |
| No search results | Binoculars illustration | No solutions match your filters. | "Clear filters" |
| No CCRs pending approval | Checkmark \+ tea cup | Nothing waiting for your approval. Enjoy the quiet. | None — positive state |
| No AI recommendations | AI orb sleeping | No recommendations right now. The AI Agent is monitoring. | None — reassuring |
| No events in feed | Clock illustration | No events in this period. Activity will appear here as solutions evolve. | "View all events" |
| Compliance: no gaps | Shield \+ checkmark | All controls evidenced. Your compliance posture is strong. | "Download Report" |

## **7.5  Keyboard Navigation Map**

| Shortcut | Action |
| :---- | :---- |
| Cmd/Ctrl \+ K | Open Command Palette |
| Cmd/Ctrl \+ N | New Solution (context-aware to current factory/type) |
| Cmd/Ctrl \+ / | Open AI Assistant chat panel |
| Cmd/Ctrl \+ B | Toggle sidebar collapsed / expanded |
| Cmd/Ctrl \+ Shift \+ F | Open global Search page |
| G then H | Go to Home Dashboard |
| G then S | Go to Solutions list |
| G then E | Go to Environments / SDEs / Workbenches |
| G then C | Go to CCR queue |
| G then R | Go to Releases |
| G then A | Go to Audit Trail |
| G then I | Go to AI Insights panel |
| ? | Open keyboard shortcut reference modal |
| Esc | Close modal / drawer / palette / inline editor |
| Enter (on row) | Open detail view for the focused row |
| Space (on row) | Select / deselect row for batch operations |
| Arrow keys | Navigate within dropdowns, command palette groups, tab bars |
| Tab / Shift+Tab | Move between focusable elements (all interactive elements reachable) |

# **8  Accessibility Specification**

*WCAG 2.1 Level AA minimum. The platform must be fully operable for users with visual, motor, and cognitive differences. This section defines implementation requirements for every major component and interaction pattern.*

## **8.1  Colour & Contrast**

| Context | Requirement | Implementation |
| :---- | :---- | :---- |
| Body text on white | Contrast ≥ 7:1 (AAA target) | Text Primary \#1A1A2E on \#FFFFFF \= 18.1:1  ✓ |
| Secondary text on white | Contrast ≥ 4.5:1 (AA min) | Text Muted \#64748B on \#FFFFFF \= 5.2:1  ✓ |
| Interactive elements | Contrast ≥ 4.5:1 | Action Blue \#1D6FA4 on \#FFFFFF \= 5.9:1  ✓ |
| Success text on light bg | Contrast ≥ 4.5:1 | Success Dark \#1A5C38 on \#D5F5E3 \= 5.1:1  ✓ |
| Warning text on light bg | Contrast ≥ 4.5:1 | Warning Dark \#7D5A00 on \#FEF9E7 \= 4.8:1  ✓ |
| Danger text on light bg | Contrast ≥ 4.5:1 | Danger Dark \#7B241C on \#FDEDEC \= 5.4:1  ✓ |
| Focus ring | 3px outline, 2px width minimum | \#1D6FA4 focus ring — never suppressed by CSS. |
| Colour not sole indicator | Never use colour alone for state | All status chips: colour \+ icon \+ text label. Lifecycle dots: colour \+ aria-label. |

## **8.2  ARIA & Keyboard Requirements**

| Requirement | Implementation Pattern |
| :---- | :---- |
| Tab order matches DOM order | No positive tabindex. Logical DOM order equals visual order. Sidebar items in display order. |
| All interactive elements keyboard-reachable | Every button, link, input, select, and custom control reachable via Tab. |
| Focus always visible | Never outline:none without custom replacement. Custom :focus-visible ring on all interactive elements. |
| Skip to content | First focusable element on every page, visible on focus, jumps to main content. aria-label="Skip to main content". |
| Page landmarks | main, nav, aside, header, footer — all present. Multiple same-type landmarks have unique aria-label. |
| Heading hierarchy | One H1 per page. Logical hierarchy, never skipping levels (H1→H2→H3, not H1→H3). |
| Modal / dialog focus trap | All modals trap Tab. Focus moves to modal on open. Returns to trigger on close. |
| Drawer focus management | Focus moves to first interactive element in drawer on open. Returns to trigger on close. |
| Live regions | aria-live="polite" for toasts, status updates, AI recommendations. aria-live="assertive" for security alerts only. |
| Data tables | All data tables: th with scope. Complex tables: aria-describedby to summary. No layout tables. |
| Form labels | Every input: label or aria-label or aria-labelledby. Errors: aria-describedby links to error message. |
| Loading states | aria-busy="true" on loading containers. aria-live region announces "Loading complete." |
| Icon-only buttons | All icon-only buttons: aria-label with descriptive text. SVG icons: aria-hidden="true". |
| Combobox pattern | All type-ahead selects (SolutionTypeSelector, CCR affected solutions): ARIA combobox \+ listbox pattern. |
| Drag and drop | All DnD (attachment uploads, reorder) has keyboard equivalent. No DnD-only interaction. |

## **8.3  Motion & Cognitive Accessibility**

* prefers-reduced-motion respected universally. All CSS transitions replaced with instant or opacity-only when set. AI orb animation, pipeline stage animations, slide-in toasts all affected.

* Plain language: All UI copy at Grade 8 reading level or below for transactional text. Technical terms explained in tooltips.

* Descriptive errors: Always explain what went wrong \+ how to fix it. Never "Error 400." Always "The email you entered is not in a valid format — please check and try again."

* Timeout warning: Sessions expire with a 5-minute modal warning. Extending session does not lose work (all form drafts auto-saved every 30 seconds).

* Consistent navigation: Sidebar structure never changes mid-session. Same position, same order every page.

* No time limits on forms. CCR drafts auto-saved. Completion resumed on next login.

## **8.4  Mobile & Touch**

| Requirement | Implementation |
| :---- | :---- |
| Touch target minimum | 44×44px for all interactive elements. 8px minimum spacing between targets. |
| Swipe gesture fallback | No swipe-only actions. All swipe affordances have tap equivalents. |
| 200% zoom support | All screens functional at 200% text zoom with no horizontal overflow. |
| Both orientations | All screens functional in portrait and landscape. |
| iOS Dynamic Type | Font sizes respect system text size settings on iOS Safari. |
| Haptic feedback | Used sparingly for confirmation of critical actions only (iOS: UIImpactFeedbackGenerator.heavy for Quarantine, Recall). |

# **9  Domain Vocabulary Reference**

*The UI renders domain-appropriate vocabulary based on the user's primary persona and the solution type currently in view. This reference defines the canonical term mapping for every platform concept across all 8 major domains.*

| Platform Concept | Software / Tech | CPG / Pharma | Financial | Agricultural | Services | Research | Legal / Tax |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Development Environment | SDE / Dev Env | Formulation Workbench | Research Workbench | Field Environment | Knowledge Workspace | Research Env. | Document Workspace |
| Solution | Application / Service | Formulation / Product | Fund / Model | Agri-Solution | Methodology / Service | Research Asset | Legal Product |
| Build / Compile | Build | Simulation Run | Backtest | Seasonal Analysis | Engagement Prep | Experiment Run | Rule Compilation |
| CI/CD Pipeline | CI/CD Pipeline | Batch Release Pipeline | Risk Validation Pipe | Seasonal Pipeline | Delivery Pipeline | Experiment Pipeline | Validation Pipeline |
| Artefact | Container Image / Pkg | Specification / CoA | Model Artefact | Protocol / Record | Deliverable / Method | Dataset / Results | Document / Filing |
| Quality Gate | CI Quality Gate | Batch Release Gate | Risk Gate | Agronomic Gate | Delivery Quality Gate | Peer Review Gate | Compliance Gate |
| Release | Software Release | Batch / Product Launch | Fund Activation | Seasonal Release | Service Catalogue Add | Publication | Effective-Date Release |
| Distribution | Deploy / Publish | Retail Distribution | Fund Distribution | Farm Distribution | Service Delivery | Open Source Publish | Rule Set Distribution |
| Version | v1.2.3 (semver) | Spec Version | Model Version | Protocol Version | Methodology Version | Dataset Version | Rule Set Version |
| Change Control (CCR) | Change Control | Change Control | Model Change | Protocol Update | Methodology Update | Protocol Change | Legislative Update |
| Lifecycle State | Draft→Released→Live | Formulation→Batch→Dist | Research→Live→Retired | Pilot→Active→Archived | Design→Approved→Published | Draft→Published→Retracted | Draft→Enacted→Retired |
| Owner | Developer / Tech Lead | Formulation Chemist | Portfolio Manager | Farm Ops Manager | Principal Consultant | Lead Researcher | Tax Product Manager |

Implementation note: The vocabulary layer is loaded at login from the user's persona profile and reloads when the user switches the active Solution Factory. Custom vocabulary can be defined per organisation via the Localisation admin panel.

# **10  Additional Wireframes**

*Supplementary wireframes covering modal patterns, the AI agent panel, the audit trail view, and mobile navigation.*

## **10.1  WF-13  CCR Impact Analysis Panel**

|   CCR Impact Analysis  |  Right-side panel within CCR Detail ┌──────────────────────────────────────────────────────────────────────────────┐ │  ╔══════════════════════════════════════════╗                                │ │  ║  Impact Analysis  ×                      ║                                │ │  ║  CCR-042  Ingredient Substitution        ║                                │ │  ╠══════════════════════════════════════════╣                                │ │  ║  \[1\] Impact Scope                        ║                                │ │  ║  14 affected solutions                   ║                                │ │  ║  Across 3 product lines                  ║                                │ │  ║                                          ║                                │ │  ║  \[2\] Impact by Severity                  ║                                │ │  ║  ██████░░░░  HIGH   3 solutions           ║                               │ │  ║  █████░░░░░  MED    6 solutions           ║                               │ │  ║  ████░░░░░░  LOW    5 solutions           ║                               │ │  ║                                          ║                                │ │  ║  \[3\] Affected Solutions                  ║                                │ │  ║  ⬡ Form-A      ██ HIGH  \[View →\]         ║                                │ │  ║  ⬡ Form-B      ▓ MED   \[View →\]          ║                                │ │  ║  ⬡ Form-C      ▓ MED   \[View →\]          ║                                │ │  ║  ⬡ Form-D      ░ LOW   \[View →\]          ║                                │ │  ║  \+10 more      \[Show all\]                ║                                │ │  ║                                          ║                                │ │  ║  \[4\] \[View Relationship Graph\]           ║                                │ │  ╚══════════════════════════════════════════╝                                │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-13  Impact Analysis Panel — right drawer within CCR Detail*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Impact Scope | Total count \+ product line grouping. Computed in background on CCR submission. |
| 2 | Severity bars | Stacked bar breakdown. Click any bar filters solution list below. |
| 3 | Solution list | Shows top 4\. Each row: solution type icon, name, severity chip, View link. "Show all" expands. |
| 4 | Graph view | Opens interactive relationship graph in a new panel — nodes clickable, zoom/pan. |

## **10.2  WF-14  AI Agent Insight Panel**

|   AI Agent Panel  |  Right-side drawer  (●AI button in GlobalNav) ┌──────────────────────────────────────────────────────────────────────────────┐ │  ╔════════════════════════════════════════════════╗                          │ │  ║  ✦ AI Agent — Insights    ×                   ║                           │ │  ║  \[1\] Factory: Acme Pharma   \[All solutions ▾\] ║                           │ │  ╠════════════════════════════════════════════════╣                          │ │  ║  \[2\] Active Recommendations  (5)              ║                           │ │  ╠════════════════════════════════════════════════╣                          │ │  ║  ✦ HIGH CONFIDENCE                            ║                           │ │  ║  Form-A: edge-case pH instability risk         ║                          │ │  ║  Confidence: 91%  |  Domain: Quality           ║                          │ │  ║  Detected: parametric drift in pH 7.3–7.5      ║                          │ │  ║  \[View Evidence\] \[Create CCR\] \[Dismiss\]        ║                          │ │  ╠════════════════════════════════════════════════╣                          │ │  ║  ✦ MEDIUM CONFIDENCE                          ║                           │ │  ║  Lab-WB-03: 2 unpinned dependencies            ║                          │ │  ║  Confidence: 78%  |  Domain: Environment       ║                          │ │  ║  \[Accept Fix\] \[Dismiss\]                        ║                          │ │  ╠════════════════════════════════════════════════╣                          │ │  ║  \[3\] Recent AI Actions                        ║                           │ │  ║  ✓ CCR-039 auto-created  2h ago               ║                           │ │  ║  ✓ Recommendation dismissed  1d ago            ║                          │ │  ╠════════════════════════════════════════════════╣                          │ │  ║  \[4\] \[Open full AI insights dashboard →\]      ║                           │ │  ╚════════════════════════════════════════════════╝                          │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-14  AI Agent Panel — collapsible right drawer*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Scope selector | Factory and solution type filter. "All solutions" shows platform-wide. Narrow to a single solution for focused view. |
| 2 | Recommendation list | Sorted by confidence descending. Each card: category, confidence bar, brief evidence summary. |
| 3 | Recent AI Actions | Audit trail of AI-triggered events. Creates trust through transparency of what AI has done. |
| 4 | Full dashboard link | Routes to the AI Insights full-page view with charts, trend analysis, and feedback history. |

## **10.3  WF-15  Audit Trail Screen**

|   Audit Trail  |  Immutable event log view ┌──────────────────────────────────────────────────────────────────────────────┐ │  ≡ Audit Trail                                                                    │ │  \[1\] Filter: \[ Solution name or ID   \] \[Event Type ▾\] \[Actor ▾\] \[Date Range ▾\]   │ │  \[2\] \[Export CSV\] \[Export JSON\] \[Generate Compliance Report\]                      │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[3\] 3,847 events   Showing: last 30 days   Filtered: CCR events                  │ │ ─────────────────────────────────────────────────────────────────────────────────│ │  \[4\] 2025-03-07  09:14:22  CCR\_APPROVED    CCR-042  Elena Vasquez  → QA stage     │ │      \[Expand ▼\]                                                                    │ │      ┌──────────────────────────────────────────────────────────────────────────┐  │ │      │ Event ID: evt\_9a3f2c1d  |  Facility: EU-WEST-1  |  IP: \[masked\]         │  │ │      │ CCR-042: Ingredient Substitution  Risk: 8/10                             │  │ │      │ Approver: Elena Vasquez  Stage: 1 of 3  Approval note: "Simulation pass" │  │ │      └──────────────────────────────────────────────────────────────────────────┘  │ │  2025-03-07  09:02:15  ARTEFACT\_PUBLISHED  Form-A-spec-v2.1  System              │ │  2025-03-07  08:57:43  CCR\_SUBMITTED       CCR-042  Marco Di Lucca               │ │  2025-03-07  08:32:11  SDE\_SNAPSHOT        Lab-WB-03  Elena Vasquez              │ │  2025-03-07  07:55:29  BUILD\_PASSED        api-gateway \#312  CI Agent            │ │  \[5\] ← Prev     Page 1 of 193     Next →                                         │ └──────────────────────────────────────────────────────────────────────────────┘ |
| :---- |

*WF-15  Audit Trail — immutable event log with expand and export*

| \# | Element | Specification / Behaviour |
| :---- | :---- | :---- |
| 1 | Filter bar | Real-time filter. Event type multi-select. Actor autocomplete. Date range picker (calendar). |
| 2 | Export actions | CSV and JSON exports honour current filter. Compliance report generates a formatted evidence document from filtered events. |
| 3 | Result summary | Total count \+ active filter description. Helps user understand the scope of visible records. |
| 4 | Event row | Timestamp (ISO 8601\) · Event type (monospace badge) · Resource ID (link) · Actor · Summary. Expand shows full event payload. |
| 5 | Pagination | Page-based for predictable performance on large audit trails. Alt: virtual scroll on lg+ screens. |

# **11  Mobile Patterns & Progressive Web App**

## **11.1  Mobile Navigation**

On mobile (xs/sm breakpoints), the sidebar is replaced by a bottom tab bar with 5 primary destinations. Secondary navigation is accessed via the hamburger drawer triggered by the ≡ icon.

| Tab | Icon | Label | Tap Destination |
| :---- | :---- | :---- | :---- |
| 1 | 🏠 Home | Home | Home Dashboard (SC-03) |
| 2 | 🔵 Solutions | Solutions | Solution list (SC-06 list view) |
| 3 | ⊕ New | New | Bottom sheet: New Solution / New CCR / New SDE |
| 4 | 🔔 Activity | Activity | Notification centre \+ event feed |
| 5 | 👤 Profile | Profile | User profile \+ settings \+ help |

## **11.2  Progressive Web App Configuration**

* Service Worker: caches critical assets and recent solution data for offline read-only access (farm field use case).

* Web App Manifest: installable on home screen. Standalone display mode. Domain-appropriate app name and icon.

* Push Notifications: opt-in for CCR approvals, security alerts, build status, AI recommendations. Respects OS notification settings.

* Background Sync: CCR draft form submissions queued when offline, auto-submitted when network reconnects.

## **11.3  Offline Capabilities**

| Feature | Online | Offline |
| :---- | :---- | :---- |
| View solution records | Full detail \+ live data | Last cached version \+ amber "Offline" banner |
| View field telemetry | Live IoT sensor stream | Last 24h cached data \+ sync timestamp |
| Create CCR draft | Live risk score \+ routing preview | Draft saved locally, submitted on reconnect |
| Traceability query | Full live provenance query | Not available — requires network (shown clearly) |
| AI recommendations | Live AI analysis | Cached last-sync recommendations shown |
| Audit trail | Full live query | Not available — requires network |

# **12  Design Handoff Notes**

## **12.1  Component Implementation Notes**

* All components built in React 18 \+ TypeScript. Styling via Tailwind CSS with custom design token plugin.

* Component library: exported as npm package "@qala/design-system". Storybook hosted internally for interactive component reference.

* Persona vocabulary layer: implemented as a React Context (PersonaContext) wrapping all routes. Components consume vocabulary via usePersonaVocab() hook.

* Domain metadata forms: rendered by DomainFormRenderer component consuming JSON schema from Domain Pack API. No code changes required for new domains.

* Animation: Framer Motion for all transitions. All animations wrapped in a MotionProvider that checks prefers-reduced-motion.

## **12.2  Token Implementation**

Design tokens are defined in a single source of truth (JSON) and compiled to: CSS custom properties, Tailwind theme extension, and React theme object.

// CSS custom properties (design-tokens.css)

\--color-brand-primary: \#0D2B45;

\--color-brand-action: \#1D6FA4;

\--space-4: 1rem;

\--radius-md: 0.5rem;

// Tailwind config extension

theme.extend.colors\["brand-primary"\] \= "var(--color-brand-primary)"

theme.extend.spacing\["4"\] \= "var(--space-4)"

## **12.3  Persona Vocabulary Configuration**

Each persona vocabulary set is defined as a JSON file loaded from the platform configuration API:

// PersonaVocab type (simplified)

{

  "sde":          "SDE",              // Software persona

  "sde":          "Formulation Workbench", // CPG persona

  "build":        "Build",

  "build":        "Simulation Run",   // CPG persona

  "release":      "Software Release",

  "release":      "Batch Release",    // CPG persona

}

## **12.4  Figma File Structure**

| Figma Page | Contents |
| :---- | :---- |
| 01 — Foundations | Colour tokens, typography scale, spacing grid, elevation, radius, iconography. |
| 02 — Components | All components from Section 4\. One frame per component. All states documented. |
| 03 — Wireframes | All annotated wireframes from Section 5\. Low-fidelity greyscale. |
| 04 — Screen Library | All 35 primary screens in high-fidelity per persona (Software, CPG, Financial, Agri, Research). |
| 05 — User Flows | All 12 user flows as connected screen sequences with decision nodes. |
| 06 — Mobile | All screens at 390×844px (iPhone 14). Breakpoint variants for md/lg also documented. |
| 07 — Dark Mode (TBD) | Planned — token inversion. Not in scope for v1.0. |

*End of Document  —  Qala UI/UX Specification & Design System  v1.0*