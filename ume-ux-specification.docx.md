  
**UME**

Organisation / Business Operating System

**UI/UX Specification, Design System,**

**User Flows & Wireframe Document**

────────────────────────────

**Document ID:**  UME-UX-001 v1.0.0

**Date:**  March 2026

**Owner:**  UME Design & Product

**Classification:**  Internal

| Table of Contents |
| :---- |

| 1\. UX Principles & Philosophy |
| :---- |
| **2\. Design System** |
| 2.1 Colour Palette |
| 2.2 Typography |
| 2.3 Spacing & Layout |
| 2.4 Elevation |
| 2.5 Border Radius |
| **3\. Component Library Specification** |
| 3.1 Navigation Components |
| 3.2 Data Display Components |
| 3.3 Form Components |
| 3.4 Action Components |
| 3.5 Feedback Components |
| **4\. Screen Architecture & Inventory** |
| 4.1 Global Shell Structure |
| 4.2 Full Screen Inventory |
| **5\. User Flows** |
| UF-01 New Organisation Onboarding |
| UF-02 Post Journal Entry |
| UF-03 Register New Legal Entity |
| UF-04 Onboard New Employee |
| UF-05 Employee Leave Request |
| UF-06 KRI Threshold Breach |
| UF-07 Mark Compliance Filing Complete |
| UF-08 Executive Dashboard Review |
| **6\. Screen Wireframes & Interaction Specs** |
| SCR-AUTH-01 Login |
| SCR-DASH-01 Executive Dashboard |
| SCR-FIN-03 Journal Entry |
| SCR-CHM-03 Filing Calendar |
| SCR-HR-03 New Hire Wizard |
| SCR-RSK-03 KRI Dashboard |
| SCR-FIN-04 P\&L Statement |
| SCR-SET-02 User & Role Management |
| SCR-WRK-01 Work Board (Kanban) |
| **7\. Screen Interaction Specifications** |
| 7.1 DataTable Pattern |
| 7.2 Slide-Over Panel |
| 7.3 Wizard Pattern |
| 7.4 Destructive Action Pattern |
| **8\. Responsive Design & Java Client** |
| 8.1 Breakpoints |
| 8.2 Java GUI Client |
| 8.3 Keyboard Shortcuts |
| **Appendices** |
| A: Design Token Reference |
| B: Notification Routing |
| C: Empty State Catalogue |
| D: Screen-to-Flow Traceability |

# **1\. UX Principles & Philosophy**

## **1.1 Design Mandate**

UME serves 18 distinct user personas across organisations of radically different sizes — from a solo entrepreneur managing one entity to a Group CFO consolidating 50 subsidiaries. The design system must make every domain feel coherent and learnable while surfacing the right depth of capability for each context. Complexity is earned, never imposed.

| The UME Design Contract Every screen in UME must satisfy three tests simultaneously:   1\. The 10-second test  — A new user can understand what this screen is for in 10 seconds.   2\. The 30-day test     — A returning user can complete their primary task in under 30 seconds.   3\. The expert test     — A power user can access the full capability depth without hunting. |
| :---- |

## **1.2 Core Design Principles**

| Principle | Intent | Constraint It Imposes |
| :---- | :---- | :---- |
| Context First | The interface always shows the user's organisational context: which entity they are working in, what role they are acting as, and what period is active. This context is never ambiguous. | Every screen must display entity selector, role indicator, and period badge in the persistent header. |
| Progressive Disclosure | Show the most common action first. Advanced actions are one affordance away, never hidden permanently, but never cluttering the default view. | Primary actions are visible by default. Secondary actions are behind a ⋯ menu or collapsed section. Tertiary actions (e.g., delete) require a deliberate gesture. |
| Consequential Clarity | For any action that is expensive to reverse (post a journal, lock a period, terminate an employee), the interface must communicate the consequence clearly before confirmation is required. | All destructive or irreversible actions require a two-step confirmation: a clear consequence statement, then an explicit confirm button. No single-click irreversible actions. |
| Status Transparency | Every long-running process (payroll run, consolidation, compliance evaluation) must show its status, progress, and estimated completion. The user is never left wondering if something is working. | All async operations use the standard ProgressBar component. No "loading…" spinners without progress indication for operations \> 2 seconds. |
| Error Recovery | Errors are not dead ends. Every error state must include: what went wrong, why it happened, and specifically what the user should do next. | Error messages follow the ErrorBanner component specification. "Something went wrong" is never an acceptable error message. |
| Audit Transparency | Because UME logs everything, users should be able to see the audit trail for any record they are viewing, without navigating away. Trust is built by visibility. | Every record detail screen includes an Audit Trail collapsible panel showing the last 10 audit events for that record. |
| Keyboard-First Power | Expert users should be able to navigate entirely by keyboard. Modal dialogs trap focus. Tab order follows reading order. Common actions have documented keyboard shortcuts. | All interactive elements are focusable. Keyboard shortcuts are surfaced in a discoverable shortcut palette (Cmd/Ctrl+K). |

## **1.3 Accessibility Standards**

| Standard | Requirement | Enforcement |
| :---- | :---- | :---- |
| WCAG 2.1 Level AA | Minimum standard for all UI components in the web portal and Java GUI client | Automated axe-core checks in CI; manual screen-reader audit per release |
| Colour contrast | Text on background: minimum 4.5:1 (normal text), 3:1 (large text). UI components: minimum 3:1. | Contrast ratios documented in design tokens; violations fail CI |
| Keyboard navigation | All interactive elements reachable by Tab; focus visible at all times; Escape closes modals; Enter/Space activates buttons | Automated keyboard navigation tests; manual test with focus indicator visible |
| Screen reader support | All icons have aria-label; all form inputs have associated labels; all tables have header cells with scope; status updates use aria-live regions | Manual screen reader testing (NVDA \+ JAWS \+ VoiceOver) per milestone |
| Motion & animation | All animations respect prefers-reduced-motion; no flashing content \> 3Hz; loading animations are non-essential | CSS media query prefers-reduced-motion applied to all transition classes |
| Touch targets | All interactive elements minimum 44×44px; adjacent targets have minimum 8px spacing | Automated size checks; manual touch device testing on iOS and Android |

# **2\. Design System**

## **2.1 Colour Palette**

The UME colour system uses a primary brand palette derived from deep navy and electric blue, with functional semantic colours for status states. All colour decisions reference design tokens, never raw hex values.

| Brand Palette |
| :---- |

|   |   |   |   |   |
| :---- | :---- | :---- | :---- | :---- |
| **Brand / Navy** \#0B2545 *Primary headings, sidebar bg* | **Accent / Royal** \#1557A0 *CTAs, active states, links* | **Mid Blue** \#2878C8 *Secondary buttons, highlights* | **Light Blue** \#D4E8F8 *Selected row bg, focus ring* | **Pale Blue** \#EBF4FC *Card bg, callout bg* |

| Semantic / Functional Palette |
| :---- |

|   |   |   |   |   |   |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Success BG** \#C6EFCE *Positive states, badge bg* | **Success Text** \#1A5C28 *Success badge text* | **Warning BG** \#FFF3CD *Amber alerts, pending states* | **Warning Text** \#7A5200 *Warning badge text* | **Error BG** \#FDDCDC *Error states, destructive action* | **Error Text** \#A80000 *Error badge text, destructive* |

| Neutral Palette |
| :---- |

|   |   |   |   |   |   |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Text Primary** \#1C2B3A *Body text, headings* | **Text Muted** \#4A5568 *Labels, captions, placeholders* | **Surface** \#F7F9FC *Page background* | **Border** \#E4EAF2 *Dividers, input borders* | **White** \#FFFFFF *Card bg, modal bg* | **Slate** \#334155 *Sidebar items, secondary nav* |

## **2.2 Typography**

| Token | Font | Weight | Size | Line Height | Usage |
| :---- | :---- | :---- | :---- | :---- | :---- |
| \--text-display | Inter | 800 (ExtraBold) | 36px / 2.25rem | 1.1 | Page titles, hero numbers |
| \--text-h1 | Inter | 700 (Bold) | 28px / 1.75rem | 1.25 | Section headings (H1) |
| \--text-h2 | Inter | 600 (SemiBold) | 22px / 1.375rem | 1.3 | Sub-section headings |
| \--text-h3 | Inter | 600 (SemiBold) | 18px / 1.125rem | 1.4 | Card titles, panel headers |
| \--text-body-lg | Inter | 400 (Regular) | 16px / 1rem | 1.6 | Primary body text |
| \--text-body | Inter | 400 (Regular) | 14px / 0.875rem | 1.6 | Default UI text, table cells |
| \--text-body-sm | Inter | 400 (Regular) | 13px / 0.8125rem | 1.5 | Captions, helper text, labels |
| \--text-code | JetBrains Mono | 400 (Regular) | 13px / 0.8125rem | 1.5 | Inline code, IDs, amounts in monospace |
| \--text-label | Inter | 500 (Medium) | 12px / 0.75rem | 1.4 | Form labels, badge text, tab labels |

## **2.3 Spacing & Layout**

| Token | Value | Usage |
| :---- | :---- | :---- |
| \--space-1 | 4px | Micro spacing: icon-to-label gaps, badge padding |
| \--space-2 | 8px | Tight spacing: input padding, list item gaps |
| \--space-3 | 12px | Default component padding: badge, chip, tag |
| \--space-4 | 16px | Standard spacing: card padding (inner), form field gap |
| \--space-5 | 20px | Medium spacing: section separator, group gap |
| \--space-6 | 24px | Comfortable spacing: card gap, toolbar padding |
| \--space-8 | 32px | Generous spacing: section header to content, modal padding |
| \--space-10 | 40px | Page-level spacing: page header bottom margin |
| \--space-12 | 48px | Large separation: between major page sections |
| \--space-16 | 64px | XL spacing: empty state padding, hero section |

The layout system uses a 12-column grid with a 24px gutter at ≥1280px viewport width. Below 1280px, the grid collapses to 8 columns. Sidebar is 240px fixed. Content area is fluid. Maximum content width is 1440px.

## **2.4 Elevation & Shadow**

| Level | CSS Shadow | Usage |
| :---- | :---- | :---- |
| Flat (0) | none | Tables, inline elements, default cards on white bg |
| Raised (1) | 0 1px 3px rgba(0,0,0,0.08) | Cards, dropdowns, default panel state |
| Floating (2) | 0 4px 12px rgba(0,0,0,0.12) | Modals, popovers, date pickers |
| Overlay (3) | 0 8px 24px rgba(0,0,0,0.16) | Drawers, full-screen modal overlays |
| Sticky (4) | 0 2px 8px rgba(0,0,0,0.10) (bottom edge only) | Sticky table headers, fixed toolbars |

## **2.5 Border Radius**

| Token | Value | Usage |
| :---- | :---- | :---- |
| \--radius-sm | 4px | Input fields, small buttons, badges |
| \--radius-md | 8px | Cards, modals, panel containers, dropdowns |
| \--radius-lg | 12px | Large cards, feature panels, empty state containers |
| \--radius-xl | 16px | Full-width banners, hero cards |
| \--radius-full | 9999px | Pill badges, avatar circles, toggle switches |

# **3\. Component Library Specification**

All UI components are specified below with their behavioural states, design tokens, and accessibility requirements. Components are built as a React component library (web portal) and mirrored in the JavaFX component set (desktop client).

## **3.1 Navigation Components**

| Component | Description | States | Design Tokens |
| :---- | :---- | :---- | :---- |
| **AppShell** | The root layout wrapper: left sidebar \+ top header \+ content area \+ notification tray | — | *\--bg-surface, \--sidebar-width: 240px* |
| **Sidebar** | Primary navigation: logo, module list, org switcher, user menu, collapse toggle | Expanded | Collapsed (64px icon-only) | Mobile (drawer) | *\--bg-brand (\#0B2545), \--text-white* |
| **SidebarItem** | Single nav item: icon \+ label \+ active indicator \+ optional badge | Default | Active | Hover | Focus | Disabled | *\--accent on active, \--radius-sm* |
| **TopHeader** | Global header: breadcrumb, entity selector, period badge, search, notifications, help | Scrolled (shadow) | Normal | *\--space-6 padding, elevation-sticky* |
| **Breadcrumb** | Hierarchical location indicator: Home \> Module \> Record | — | *\--text-muted, / separator* |
| **EntitySelector** | Dropdown showing current active entity; switches entity context globally | Closed | Open | Loading | *\--bg-pale, \--accent border on focus* |
| **PeriodBadge** | Shows active financial period; amber if approaching lock date; red if locked | Open (green) | Warning (amber) | Locked (red) | *\--radius-full, semantic colours* |
| **TabBar** | Horizontal tab navigation within a module or detail page | Active | Default | Hover | Focus | Disabled | *\--accent underline on active, \--space-6 gap* |
| **CommandPalette** | Global search and shortcut overlay (Cmd/Ctrl+K) | Closed | Open | Loading results | *\--overlay-bg, elevation-floating* |

## **3.2 Data Display Components**

| Component | Description | States | Design Tokens |
| :---- | :---- | :---- | :---- |
| **DataTable** | Sortable, filterable, paginated table with column configuration, bulk selection, and inline actions | Loading | Empty | Populated | Row hover | Row selected | Row error | *\--border-color, \--bg-surface, sticky header* |
| **DataTableRow** | Single table row with cells, status badge, action menu, and optional expand | Default | Hover | Selected | Expanded | Error | Soft-deleted (strikethrough) | *\--space-2 row padding, \--radius-sm on hover* |
| **StatusBadge** | Pill badge communicating record status | Active/Closed/Pending (semantic colours) — each module defines its own status set | *\--radius-full, \--text-label, min-width 64px* |
| **KPICard** | Metric card: large number, label, trend indicator, comparison period | Loading (skeleton) | Positive trend | Negative trend | Neutral | *\--bg-white, elevation-raised, \--space-6 padding* |
| **KPITrend** | Inline trend arrow \+ percentage change next to a KPI number | Up (green) | Down (red) | Flat (muted) | *\--text-sm, directional icon* |
| **Chart** | Wrapper for Recharts: line, bar, pie, area, and combo variants | Loading | Empty | Populated | Tooltip active | *\--accent as primary series, 5-colour accessible palette* |
| **AuditTrailPanel** | Collapsible timeline of audit events for a record | Collapsed | Expanded | Loading | *\--bg-pale, timeline line in \--border-color* |
| **EmptyState** | Full-section empty state: illustration area, heading, body, and primary CTA | Module-level empty | Search no results | Filter no results | *\--space-16 padding, \--radius-lg container* |
| **SkeletonLoader** | Animated placeholder matching the shape of the content being loaded | Pulsing animation (respects prefers-reduced-motion) | *\--bg-gray2, border-radius matching target* |

## **3.3 Form Components**

| Component | Description | States | Design Tokens |
| :---- | :---- | :---- | :---- |
| **TextInput** | Single-line text input with label, helper text, and validation state | Default | Focus | Error | Warning | Disabled | Read-only | *\--radius-sm, \--border-color, \--accent on focus* |
| **Textarea** | Multi-line text input; auto-resize option | Default | Focus | Error | Disabled | *Same as TextInput; min-height: 80px* |
| **Select** | Single-selection dropdown with search filter for \>7 options | Closed | Open | Searching | Selected | Disabled | *\--radius-sm, \--accent on focus, elevation-floating for dropdown* |
| **MultiSelect** | Multi-selection with pills; select-all; clear-all | Closed | Open | Loading | Has selection | *Pills use \--radius-full, \--accent bg* |
| **DatePicker** | Date input with calendar popover; supports date range; fiscal-period aware | Closed | Open | Range selecting | Disabled | Period-locked warning | *\--accent for selected date, \--warning for locked-period dates* |
| **CurrencyInput** | Numeric input with currency symbol, thousand separator, and decimal precision | Default | Focus | Error | Read-only | *\--text-code for amount, \--radius-sm* |
| **Toggle** | Boolean on/off switch | On | Off | Disabled | *\--accent when on, \--radius-full* |
| **Checkbox** | Single or group checkbox with indeterminate state | Unchecked | Checked | Indeterminate | Disabled | Error | *\--accent check, \--radius-sm* |
| **RadioGroup** | Mutually exclusive selection | Default | Selected | Disabled | *\--accent for selected, vertical or horizontal layout* |
| **FormField** | Wrapper combining label, input, helper text, and error message | Valid | Error | Warning | Disabled | *\--space-4 gap, \--text-label for label* |
| **FormSection** | Logical grouping within a form: title, optional description, divider, fields | Collapsed | Expanded | *\--space-8 padding, H3 for section title* |

## **3.4 Action Components**

| Component | Description | States | Design Tokens |
| :---- | :---- | :---- | :---- |
| **Button (Primary)** | Main CTA button; solid fill | Default | Hover | Focus | Active | Loading | Disabled | *\--accent bg, \--white text, \--radius-sm, min-width 80px* |
| **Button (Secondary)** | Secondary action; outlined | Default | Hover | Focus | Active | Disabled | *\--accent border \+ text, transparent bg* |
| **Button (Ghost)** | Tertiary action; no border | Default | Hover | Focus | Active | Disabled | *\--accent text on hover, no border* |
| **Button (Destructive)** | Irreversible actions (delete, terminate, void) | Default | Hover | Confirm required | *\--error-text colour, always requires 2-step confirm* |
| **IconButton** | Icon-only action; must have aria-label and tooltip | Default | Hover | Focus | Active | Disabled | *44×44px touch target, \--radius-sm* |
| **ActionMenu (⋯)** | Overflow menu for secondary row/record actions | Closed | Open | *Elevation-floating, \--radius-sm, \--space-2 item padding* |
| **SplitButton** | Primary action \+ secondary action dropdown combined | Default | Dropdown open | *Divider between primary and dropdown trigger* |
| **ConfirmDialog** | Modal confirmation for destructive actions: consequence statement \+ confirm | Closed | Open | Loading (post-confirm) | *\--error-bg header, explicit consequence text required* |

## **3.5 Feedback Components**

| Component | Description | States | Design Tokens |
| :---- | :---- | :---- | :---- |
| **Toast** | Ephemeral notification: success, warning, error, info. Auto-dismiss at 4s. Queue max 3\. | Success | Warning | Error | Info | Dismissing | *Top-right position, elevation-floating, \--radius-md* |
| **ErrorBanner** | Inline error for form submissions and API errors; includes error code and suggested action | Default | With field errors list | *\--error-bg, \--error-text, full-width within form* |
| **AlertBanner** | Persistent informational banner at page level: info, warning, or critical | Info | Warning | Critical (red) | *Below TopHeader, full width, dismissible (info/warning only)* |
| **ProgressBar** | Linear progress for long operations: percentage, estimated time, operation label | Indeterminate | Determinate | Complete | Error | *\--accent fill, always show % or ETA if known* |
| **Badge (notification)** | Count badge on nav items | 1–9 | 9+ | Zero (hidden) | *\--error-text bg for \>0 unread, \--radius-full* |
| **FieldError** | Inline error below a form field | Single error | Multiple errors | *\--error-text, \--text-sm, icon prefix* |
| **LoadingSpinner** | Inline loading indicator for async operations \< 2s | Spinning (respects reduced-motion) | *24px default, \--accent colour* |

# **4\. Screen Architecture & Inventory**

## **4.1 Global Shell Structure**

Every authenticated screen in UME uses the AppShell layout. The shell persists across all module navigation. The sidebar is the primary navigation surface; the TopHeader provides global context controls.

| AppShell Layout Specification Left:    Sidebar (240px expanded / 64px collapsed)          ├── Logo \+ version badge          ├── Module navigation list (scrollable)          ├── ─── divider ───          ├── Settings          └── User profile \+ org name Top:     TopHeader (56px fixed height)          ├── Breadcrumb trail (Home \> Module \> Screen)          ├── EntitySelector dropdown          ├── PeriodBadge (current financial period)          ├── Global search (Cmd+K)          ├── Notifications bell (badge count)          └── Help (?) button Right:   Notification Tray (320px slide-in panel)          └── Live feed of module events for current user Content: Main content area (fluid, max 1440px, \--space-8 padding)          └── PageHeader (title, subtitle, primary action)          └── Content region (tabs, cards, tables, forms) |
| :---- |

## **4.2 Full Screen Inventory**

| Screen ID | Screen Name | Module | Primary Persona | Type | Priority |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **SCR-AUTH-01** | Login — Email & Password | Security | All | *Auth page* | **P0** |
| **SCR-AUTH-02** | Login — MFA Verification | Security | All | *Auth page* | **P0** |
| **SCR-AUTH-03** | Password Reset Request | Security | All | *Auth page* | **P0** |
| **SCR-AUTH-04** | Password Reset — Set New Password | Security | All | *Auth page* | **P0** |
| **SCR-AUTH-05** | First Login — Org Setup Wizard | Security / Admin | Founder / Admin | *Wizard* | **P0** |
| **SCR-DASH-01** | Executive Dashboard | Analytics | CEO / CFO | *Dashboard* | **P0** |
| **SCR-DASH-02** | My Work — Personal Dashboard | Portal | Employee | *Dashboard* | **P0** |
| **SCR-DASH-03** | Module Home (generic pattern) | All Modules | All | *List / overview* | **P0** |
| **SCR-ADM-01** | Org Structure — Tree View | Administration | CEO / COO | *Tree* | **P0** |
| **SCR-ADM-02** | Org Unit Detail | Administration | COO / HR Manager | *Detail* | **P0** |
| **SCR-ADM-03** | Policy Library | Administration | Legal Officer / HR | *List* | **P0** |
| **SCR-ADM-04** | Policy Detail \+ Acknowledgments | Administration | Legal Officer | *Detail* | **P0** |
| **SCR-CHM-01** | Entity Registry — List | Chombo | Legal Officer | *List* | **P0** |
| **SCR-CHM-02** | Entity Detail | Chombo | Legal Officer | *Detail* | **P0** |
| **SCR-CHM-03** | Filing Calendar | Chombo | Legal Officer / CEO | *Calendar* | **P0** |
| **SCR-CHM-04** | Filing Detail \+ Evidence | Chombo | Legal Officer | *Detail* | **P0** |
| **SCR-CHM-05** | Add New Entity Wizard | Chombo | Founder / Legal | *Wizard* | **P0** |
| **SCR-CHM-06** | Group Structure — Visual Graph | Chombo | CEO / CFO | *Graph* | **P1** |
| **SCR-FIN-01** | Chart of Accounts | Finance | Finance Manager | *List* | **P0** |
| **SCR-FIN-02** | Journal Entry List | Finance | Finance Manager | *List* | **P0** |
| **SCR-FIN-03** | Journal Entry Create / Detail | Finance | Finance Manager | *Form \+ Detail* | **P0** |
| **SCR-FIN-04** | P\&L Statement | Finance | CFO / Finance Manager | *Report* | **P0** |
| **SCR-FIN-05** | Balance Sheet | Finance | CFO | *Report* | **P0** |
| **SCR-FIN-06** | Cash Flow Statement | Finance | CFO | *Report* | **P0** |
| **SCR-FIN-07** | Consolidated Group Reports | Finance | CFO | *Report* | **P1** |
| **SCR-FIN-08** | Accounts Payable — Invoice List | Finance | Finance Manager | *List* | **P0** |
| **SCR-FIN-09** | AP Invoice Detail (3-way match) | Finance | Finance Manager | *Detail* | **P0** |
| **SCR-FIN-10** | Accounts Receivable — Invoice List | Finance | Finance Manager | *List* | **P0** |
| **SCR-FIN-11** | Customer Invoice Create | Finance | Finance Manager / Freelancer | *Form* | **P0** |
| **SCR-FIN-12** | Payroll Run | Finance | Finance Manager | *Wizard* | **P0** |
| **SCR-FIN-13** | Budget Management | Finance | CFO / Finance Manager | *Grid* | **P1** |
| **SCR-FIN-14** | Cash Flow Forecast | Finance | CFO | *Dashboard* | **P1** |
| **SCR-HR-01** | Employee Directory | HR | HR Manager / All | *List* | **P0** |
| **SCR-HR-02** | Employee Profile | HR | HR Manager / Self | *Detail* | **P0** |
| **SCR-HR-03** | New Hire Wizard | HR | HR Manager | *Wizard* | **P0** |
| **SCR-HR-04** | Offboarding Wizard | HR | HR Manager | *Wizard* | **P0** |
| **SCR-HR-05** | Leave Management — Requests | HR | HR Manager | *List \+ Calendar* | **P0** |
| **SCR-HR-06** | Leave Request (Self-Service) | HR | Employee | *Form* | **P0** |
| **SCR-HR-07** | Performance Review — Cycle Overview | HR | CHRO / HR Manager | *Dashboard* | **P1** |
| **SCR-HR-08** | Performance Review — Self-Assessment | HR | Employee | *Form* | **P1** |
| **SCR-HR-09** | Performance Review — Manager Review | HR | Manager | *Form* | **P1** |
| **SCR-HR-10** | Payslip View (Employee) | HR / Finance | Employee | *Detail* | **P0** |
| **SCR-GRC-01** | Obligation Register | GRC | Compliance Manager | *List* | **P1** |
| **SCR-GRC-02** | Control Library | GRC | Compliance Manager | *List* | **P1** |
| **SCR-GRC-03** | Audit Engagement Detail | GRC | Compliance Manager | *Detail* | **P1** |
| **SCR-RSK-01** | Risk Register | Risk | Risk Manager | *List* | **P0** |
| **SCR-RSK-02** | Risk Detail | Risk | Risk Manager | *Detail* | **P0** |
| **SCR-RSK-03** | KRI Dashboard | Risk | Risk Manager / CEO | *Dashboard* | **P0** |
| **SCR-RSK-04** | Risk Heat Map | Risk | CRO / Board | *Visualisation* | **P1** |
| **SCR-SAL-01** | Pipeline — Kanban View | Sales | VP Sales / AE | *Kanban* | **P1** |
| **SCR-SAL-02** | Pipeline — List View | Sales | VP Sales | *List* | **P1** |
| **SCR-SAL-03** | Opportunity Detail | Sales | AE | *Detail* | **P1** |
| **SCR-CRM-01** | Account List | CRM | AE / CSM | *List* | **P1** |
| **SCR-CRM-02** | Account Detail | CRM | AE / CSM | *Detail* | **P1** |
| **SCR-WRK-01** | Work Board — Sprint View | Work | Project Manager | *Kanban* | **P0** |
| **SCR-WRK-02** | Work Item Detail | Work | Project Manager / Employee | *Detail* | **P0** |
| **SCR-WRK-03** | Backlog | Work | Project Manager | *List* | **P0** |
| **SCR-PRT-01** | Employee Portal Home | Portal | Employee | *Dashboard* | **P0** |
| **SCR-PRT-02** | Notification Centre | Portal | All | *Panel* | **P0** |
| **SCR-SEC-01** | Incident List | Security | CISO / CTO | *List* | **P1** |
| **SCR-SEC-02** | Incident Detail \+ Timeline | Security | CISO / CTO | *Detail \+ Timeline* | **P1** |
| **SCR-IT-01** | CMDB — Asset List | IT | IT Admin | *List* | **P1** |
| **SCR-IT-02** | Change Request Detail | IT | IT Admin / CAB | *Detail* | **P1** |
| **SCR-SET-01** | Platform Settings — General | Admin | Platform Admin | *Settings* | **P0** |
| **SCR-SET-02** | User & Role Management | Admin | Platform Admin | *List \+ Detail* | **P0** |
| **SCR-SET-03** | Module Configuration | Admin | Platform Admin | *Settings grid* | **P0** |
| **SCR-SET-04** | Audit Log Viewer | Admin | Platform Admin / Auditor | *List* | **P0** |
| **SCR-SET-05** | API Keys & Integrations | Admin | IT Admin | *List \+ Form* | **P1** |

# **5\. User Flows**

User flows document the step-by-step journey a user takes to complete a primary task. Each flow includes: actor, trigger, happy path, alternative paths, and error paths.

| Flow UF-01 — New Organisation Onboarding |
| :---- |

| Detail | Specification |
| :---- | :---- |
| Trigger | User clicks a registration link or opens the UME embedded binary for the first time. |
| Primary Actor | Founder / Organisation Administrator (P-01 / P-18) |
| Success Outcome | Organisation created; first entity registered with compliance calendar generated; first user can log in and reach the Executive Dashboard. |
| Time Target | \< 30 minutes from first screen to first meaningful action (journal entry posted or compliance calendar viewed) |
| Alternative Path | SSO login (if org has an identity provider configured) — skips steps 2–3. |
| Error Path | Entity jurisdiction not found in policy pack library → prompt to select closest jurisdiction \+ flag for content team. |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *New User* | **SCR-AUTH-01 Login** | Enters email \+ creates password; accepts ToS | Account created; verification email sent | *→ Email verify* |
| **2** | *New User* | **Email Inbox** | Clicks email verification link | Email confirmed; redirected to SCR-AUTH-05 | *→ Org Setup* |
| **3** | *Admin* | **SCR-AUTH-05 Org Wizard Step 1** | Enters org name, primary jurisdiction, sector, and org type | Org record created; kernel initialises default modules | *→ Step 2* |
| **4** | *Admin* | **SCR-AUTH-05 Org Wizard Step 2** | Enters first legal entity (name, type, reg number, jurisdiction) | Entity created; Chombo evaluates policy packs; filing calendar generated | *→ Step 3* |
| **5** | *Admin* | **SCR-AUTH-05 Org Wizard Step 3** | Invites first co-worker(s) by email; assigns roles | Invitation emails sent via Comms module | *→ Step 4* |
| **6** | *Admin* | **SCR-AUTH-05 Org Wizard Step 4** | Reviews and activates selected modules | Selected modules set to Running state; module home screens available | *→ Dashboard* |
| **7** | *Admin* | **SCR-DASH-01 Dashboard** | Views first-run empty state: compliance calendar, empty P\&L, pending onboarding tasks | ProgressBar shows onboarding completion % | *→ Active use* |

| Flow UF-02 — Post a Journal Entry |
| :---- |

| Detail | Specification |
| :---- | :---- |
| Trigger | Finance Manager navigates to Finance \> Journal Entries and clicks "New Journal Entry". |
| Primary Actor | Finance Manager (P-11) with permission finance.journal.create |
| Success Outcome | Journal entry is posted; general ledger balances are updated; audit record created; finance.journal.posted event emitted. |
| Time Target | \< 2 minutes for a standard 2-line entry; \< 5 minutes for a complex multi-line entry |
| Alternative Path | Save as Draft — entry saved but not posted; can be edited and posted later. |
| Error Path 1 | Journal does not balance (debits ≠ credits) → balance indicator turns red; submit button disabled; inline error shows imbalance amount. |
| Error Path 2 | Account period is locked → ErrorBanner: "Period \[period name\] is locked. Unlock the period or post to an open period." |
| Error Path 3 | User lacks finance.journal.create permission → 403 error page with "Request access" CTA. |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *Finance Mgr* | **SCR-FIN-02 Journal List** | Clicks "New Journal Entry" button | SCR-FIN-03 opens in create mode; date defaults to today; period badge shows | *→ Entry form* |
| **2** | *Finance Mgr* | **SCR-FIN-03 Create** | Enters date, reference, narrative | Fields validate on blur | *→ Add lines* |
| **3** | *Finance Mgr* | **SCR-FIN-03 Lines** | Adds debit line: account (autocomplete), entity, department, amount | Balance indicator updates in real time; running debit/credit totals shown | *→ Add credit* |
| **4** | *Finance Mgr* | **SCR-FIN-03 Lines** | Adds credit line: account, entity, amount | Balance indicator turns green when debits \= credits | *→ Review* |
| **5** | *Finance Mgr* | **SCR-FIN-03 Create** | Reviews entry; clicks "Post Journal" | ConfirmDialog: "Post this journal? This action cannot be undone." | *→ Confirm* |
| **6** | *Finance Mgr* | **SCR-FIN-03 Confirm** | Clicks "Confirm Post" | Kernel: RBAC check → period check → balance check → tx commit → audit → event; Toast: "Journal posted ✓" | *→ Detail view* |
| **7** | *Finance Mgr* | **SCR-FIN-03 Detail** | Views posted entry (read-only); sees audit trail panel | Audit panel shows: posted by, timestamp, IP address, journal hash | *→ Done* |

| Flow UF-03 — Register a New Legal Entity |
| :---- |

| Detail | Specification |
| :---- | :---- |
| Trigger | Legal Officer navigates to Chombo \> Entities and clicks "Add Entity". |
| Primary Actor | Legal Officer (P-06) with permission chombo.entity.create |
| Success Outcome | Entity registered; compliance obligations derived; filing calendar items created; entity visible in group structure. |
| Time Target | \< 10 minutes from trigger to compliance calendar visible |
| Alternative Path | Entity type not listed → select "Other" and describe; flagged for policy pack team to map. |
| Error Path | Registration number already exists for this jurisdiction → duplicate warning with link to existing record. |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *Legal Officer* | **SCR-CHM-01 Entity List** | Clicks "Add Entity" | SCR-CHM-05 Add Entity Wizard opens Step 1 | *→ Wizard S1* |
| **2** | *Legal Officer* | **SCR-CHM-05 Step 1: Basics** | Enters entity name, legal form, registration number, incorporation date | Validation on blur; reg number format checked per jurisdiction | *→ Step 2* |
| **3** | *Legal Officer* | **SCR-CHM-05 Step 2: Jurisdiction** | Selects primary jurisdiction and any additional operating jurisdictions | Policy pack compatibility shown per selection; estimated obligation count preview | *→ Step 3* |
| **4** | *Legal Officer* | **SCR-CHM-05 Step 3: Relationships** | Sets parent entity (if subsidiary); assigns registered address; designates compliance manager | Group structure preview updates in real time | *→ Step 4* |
| **5** | *Legal Officer* | **SCR-CHM-05 Step 4: Review** | Reviews all inputs; sees obligation summary: "12 annual obligations derived" | ProgressBar: "Evaluating policy packs…" → complete | *→ Create* |
| **6** | *System* | **SCR-CHM-05 Processing** | (Auto) Chombo evaluates applicable policy packs; generates filing schedule | Toast: "Entity created. 12 filing obligations generated." | *→ Entity detail* |
| **7** | *Legal Officer* | **SCR-CHM-02 Entity Detail** | Views entity profile; clicks Filing Calendar tab | SCR-CHM-03 shows full filing calendar with due dates and alert lead times | *→ Done* |

| Flow UF-04 — Onboard a New Employee |
| :---- |

| Detail | Specification |
| :---- | :---- |
| Trigger | HR Manager navigates to HR \> Employees and clicks "New Employee". |
| Primary Actor | HR Manager (P-12) with permission hr.employee.create |
| Cross-Module Effect | HR module emits hr.employee.hired event → Process module spawns onboarding workflow → IT module creates access provisioning task → Finance module creates payroll record → Admin module assigns policy acknowledgments. |
| Success Outcome | Employee record created; onboarding workflow active; access provisioning task assigned to IT; payroll record initialised; manager notified. |
| Time Target | \< 5 minutes to create employee record; downstream tasks triggered automatically within 30 seconds. |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *HR Manager* | **SCR-HR-01 Employee Dir.** | Clicks "New Employee" | SCR-HR-03 New Hire Wizard opens Step 1 | *→ Wizard S1* |
| **2** | *HR Manager* | **SCR-HR-03 Step 1: Personal** | Enters name, personal email, start date, employee ID (auto-generated), and nationality | Validation; duplicate name check | *→ Step 2* |
| **3** | *HR Manager* | **SCR-HR-03 Step 2: Role** | Selects org unit, job title, reporting manager, employment type, work location | Org unit selector shows hierarchy; manager lookup is live search | *→ Step 3* |
| **4** | *HR Manager* | **SCR-HR-03 Step 3: Compensation** | Enters salary/rate, currency, pay frequency, effective date | Currency defaults to entity currency; compensation record created on save | *→ Step 4* |
| **5** | *HR Manager* | **SCR-HR-03 Step 4: Access** | Selects system roles to assign; enters work email address to provision | RBAC preview shows permissions that will be granted | *→ Review* |
| **6** | *HR Manager* | **SCR-HR-03 Step 5: Review** | Reviews all data; clicks "Create Employee" | Employee record created with status PreStart; hr.employee.hired event published | *→ Confirmation* |
| **7** | *System* | **Background (auto)** | — | Onboarding workflow spawned; IT access task created; Finance payroll record initialised; manager email sent | *→ Workflow active* |
| **8** | *HR Manager* | **SCR-HR-02 Employee Profile** | Views new employee profile; sees Onboarding Progress widget: 0% complete | Workflow task list visible with assigned owners and due dates | *→ Monitor* |

| Flow UF-05 — Employee Leave Request |
| :---- |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *Employee* | **SCR-PRT-01 Portal Home** | Clicks "Request Leave" quick action | SCR-HR-06 Leave Request form opens in slide-over panel | *→ Form* |
| **2** | *Employee* | **SCR-HR-06 Leave Form** | Selects leave type (Annual / Sick / Other); selects start and end date | DatePicker highlights: existing leave (amber), bank holidays (grey), available balance shown | *→ Submit* |
| **3** | *Employee* | **SCR-HR-06 Leave Form** | Reviews: days requested, balance after request; clicks "Submit Request" | RBAC check; leave balance validation; request created with status Pending | *→ Pending state* |
| **4** | *Manager* | **Email / Notification** | Receives notification: "\[Employee\] has requested leave \[dates\]" | Manager opens notification → deep-links to SCR-HR-05 pending requests | *→ Approve/Decline* |
| **5** | *Manager* | **SCR-HR-05 Leave Requests** | Reviews request; clicks "Approve" | ConfirmDialog: "Approve 3 days annual leave for \[name\]?" | *→ Confirm* |
| **6** | *System* | **Background (auto)** | — | Leave status → Approved; employee notified; calendar event created; balance decremented | *→ Done* |
| **6a** | *Manager* | **SCR-HR-05 Alt: Decline** | Clicks "Decline"; enters reason (required) | Employee notified with reason; balance unchanged; request archived | *→ Declined* |

| Flow UF-06 — KRI Threshold Breach Detection & Escalation |
| :---- |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *System* | **Background (auto)** | Finance module posts journal → analytics recalculates KPI → Risk module subscribes to kpi.updated event | KRI Monitor scheduled job evaluates all KRIs for current org | *→ Threshold check* |
| **2** | *System* | **Background (auto)** | — | KRI: "Cash Runway" breaches amber threshold (\< 6 months) | *→ Alert created* |
| **3** | *System* | **Notification (auto)** | — | Amber alert created; risk.kri.amber\_threshold event published; Risk Owner receives in-app \+ email notification within 5 minutes | *→ Risk owner notified* |
| **4** | *Risk Owner* | **SCR-RSK-03 KRI Dashboard** | Opens KRI dashboard from notification link; sees amber KRI highlighted | KRI card shows: current value, threshold, trend chart, last 5 data points | *→ Investigate* |
| **5** | *Risk Owner* | **SCR-RSK-02 Risk Detail** | Navigates to linked Risk record; reviews current risk status and treatment plan | Risk detail shows: inherent score, residual score, treatment actions, KRI linkage | *→ Update treatment* |
| **6** | *Risk Owner* | **SCR-RSK-02 Risk Detail** | Updates treatment action status; adds a note to the risk; clicks "Notify Sponsor" | Note saved; audit record created; notification sent to Executive Sponsor | *→ Escalated* |
| **7** | *Exec Sponsor* | **Email / SCR-DASH-01** | Opens dashboard; sees amber risk alert card in Risk summary widget | Clicks through to risk detail; reviews situation; can escalate to Board via Comment | *→ Monitored* |

| Flow UF-07 — Mark a Compliance Filing as Completed |
| :---- |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *Compliance Mgr* | **Email (auto)** | Receives 30-day amber alert: "Annual Return for \[Entity\] due in 30 days" | Email contains deep link to filing record in SCR-CHM-04 | *→ Filing detail* |
| **2** | *Compliance Mgr* | **SCR-CHM-04 Filing Detail** | Opens filing record; reviews: obligation, jurisdiction, due date, required evidence, responsible party | Filing status: Upcoming (amber); evidence panel is empty | *→ Upload evidence* |
| **3** | *Compliance Mgr* | **SCR-CHM-04 Filing Detail** | Clicks "Upload Evidence"; uploads confirmation email / filing receipt PDF | Evidence stored; evidence count badge on filing updates | *→ Mark complete* |
| **4** | *Compliance Mgr* | **SCR-CHM-04 Filing Detail** | Clicks "Mark as Filed"; enters filed date and reference number | ConfirmDialog: "Mark Annual Return as filed on \[date\]?" | *→ Confirm* |
| **5** | *Compliance Mgr* | **SCR-CHM-04 Filing Detail** | Confirms; filing status updates to Completed (green) | Audit record created; chombo.filing.completed event emitted; alert cleared; next occurrence of this filing added to calendar automatically | *→ Calendar* |
| **6** | *Compliance Mgr* | **SCR-CHM-03 Calendar** | Views filing calendar; confirms item is now green; next occurrence visible | Calendar shows completed filings in grey; upcoming in amber/red based on lead time | *→ Done* |

| Flow UF-08 — Executive Dashboard Daily Review |
| :---- |

| Step | Actor | Screen / State | Action | System Response | Next State |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **1** | *CEO* | **Browser / App** | Opens UME; auto-redirected to SCR-DASH-01 (last visited screen remembered) | Dashboard loads; KPI cards refresh from live data (\< 60s data age) | *→ Dashboard* |
| **2** | *CEO* | **SCR-DASH-01 Dashboard** | Scans top KPI row: Cash Position, Group Revenue MTD, Headcount, Open Risks | KPIs show trend arrows vs. previous period; amber/red for concerns | *→ Drill down* |
| **3** | *CEO* | **SCR-DASH-01 Dashboard** | Notices "Cash Runway: 4.2 months" is red; clicks KPI card | KPI drill-down slide-over shows: 13-week cash flow chart, top 5 AP commitments, linked risk | *→ Risk view* |
| **4** | *CEO* | **SCR-DASH-01 Dashboard** | Sees Compliance widget: 2 filings due within 7 days (red) | Clicks "2 overdue filings" link | *→ Filing calendar* |
| **5** | *CEO* | **SCR-CHM-03 Calendar** | Views 2 red filing items; sees responsible compliance manager assigned | Clicks on filing → SCR-CHM-04; adds a note: "Please confirm status by EOD" | *→ Back to dashboard* |
| **6** | *CEO* | **SCR-DASH-01 Dashboard** | Reviews People widget: 3 new starters this month; 1 open role unfilled \> 30 days | Clicks unfilled role link; views job requisition detail | *→ Actioned* |

# **6\. Screen Wireframes & Interaction Specifications**

Wireframes use ASCII representation to communicate layout, hierarchy, and component placement. Annotations document design decisions, component variants, and interaction rules for each screen.

| SCR-AUTH-01  Wireframe: Login — Email & Password |
| :---- |

| ┌─────────────────────────────────────────────┐ │           ██ UME  (logo \+ wordmark)          │ │      Organisation / Business OS             │ ├─────────────────────────────────────────────┤ │                                             │ │  ┌──────────────────────────────────────┐  │ │  │  Email address                       │  │ │  │  \[email@company.com               \]  │  │ │  └──────────────────────────────────────┘  │ │                                             │ │  ┌──────────────────────────────────────┐  │ │  │  Password                            │  │ │  │  \[••••••••••••••••••          👁 \]   │  │ │  └──────────────────────────────────────┘  │ │                                             │ │         ┌──────────────────────────┐        │ │         │      Sign In →           │        │ │         └──────────────────────────┘        │ │                                             │ │  \[ \] Remember this device for 30 days      │ │                                             │ │  ──────────── or continue with ─────────── │ │                                             │ │  ┌────────────────┐  ┌────────────────┐    │ │  │  🔷 Microsoft  │  │  Google Workspace│  │ │  └────────────────┘  └────────────────┘    │ │                                             │ │  Forgot password?          Need an account? │ └─────────────────────────────────────────────┘ | Design Notes • Centred card, max-width 400px, white bg, elevation-floating. • No top navigation. No sidebar. • Password: show/hide toggle (👁). Caps Lock indicator shown when active. • "Sign In" button: Primary, full-width, \--accent bg. • SSO buttons shown only if org has SSO configured (detected from email domain on blur). • "Remember device" sets a 30-day device cookie, not a persistent session. • ErrorBanner appears below password field on failed attempt. Account locked after 5 failures: clear message \+ "Unlock by email" link. • Accessibility: form autocomplete="email" and autocomplete="current-password". |
| :---- | :---- |

| SCR-DASH-01  Wireframe: Executive Dashboard |
| :---- |

| ┌──────\[Sidebar 240px\]──────┬─────\[TopHeader\]──────────────────────────────────┐ │ 🏠 UME            \[←\]    │  Home \> Dashboard  \[Entity▾\] \[Q1 2026▾\] \[🔍\]\[🔔\] │ │ ─────────────────────── │ ─────────────────────────────────────────────────  │ │ 📊 Dashboard              │ Executive Dashboard               \[Customise ⚙️\]  │ │ 🏗  Administration        │                                                   │ │ ⚖️  Legal (Chombo)        │ ╔══════╗  ╔══════╗  ╔══════╗  ╔══════╗          │ │ 💰 Finance               │ ║ £2.4M║  ║ 4.2mo║  ║  142 ║  ║  3 🔴║          │ │ 👥 Human Resources       │ ║ Rev  ║  ║ Cash ║  ║Staff ║  ║Risks ║          │ │ 🛡  GRC                   │ ║ MTD ↑║  ║Runway║  ║      ║  ║      ║          │ │ ⚠️  Risk                  │ ╚══════╝  ╚══════╝  ╚══════╝  ╚══════╝          │ │ 🤝 Sales                  │                                                   │ │ 📣 Marketing             │ ┌─────────────────────┐ ┌──────────────────────┐  │ │ 🔧 Operations             │ │  Revenue (12 mo)    │ │  Compliance Status   │  │ │ 🔒 Security               │ │  \[Line Chart ▓▓▓  \] │ │  ✅ 41  filed         │  │ │ 💻 IT & Assets           │ │  £890K this month   │ │  🟡 2   due \< 7d    │  │ │ 📋 Work                   │ └─────────────────────┘ │  🔴 0   overdue      │  │ │ ─────────────────────── │                           └──────────────────────┘  │ │ ⚙️  Settings              │ ┌─────────────────────┐ ┌──────────────────────┐  │ │ 👤 \[User Name\]           │ │  Risk Summary       │ │  People              │  │ │                          │ │  🔴 1 Red (Cash)    │ │  3 new this month    │  │ │                          │ │  🟡 4 Amber         │ │  1 role \> 30 days    │  │ │                          │ │  \[Heat Map mini\]    │ │  2 cert. expiring    │  │ │                          │ └─────────────────────┘ └──────────────────────┘  │ └──────────────────────────┴──────────────────────────────────────────────────────┘ | Design Notes • AppShell: sidebar \+ header persist. Content area is the only scrolling region. • KPI cards row: 4 cards, equal width. Click any card → slide-over with drill-down chart and context. • Cards that are amber/red have a coloured left border (3px) to reinforce semantic status without relying on colour alone. • Dashboard is customisable: user can reorder, add, or remove KPI cards and widgets via ⚙️. • Widgets are server-rendered and cached; age-of-data badge shown on each (e.g., "Updated 42s ago"). • Risk Summary heat map is a 3×3 mini version; click → full SCR-RSK-04. • Compliance status: numbers are deep links to the filing calendar filtered by status. • Sidebar: active module highlighted. Module badges show unread/action counts. |
| :---- | :---- |

| SCR-FIN-03  Wireframe: Journal Entry — Create / Detail |
| :---- |

| ┌──\[Sidebar\]──┬──────────────────────────────────────────────────────────────┐ │             │  Finance \> Journal Entries \> New Entry          \[Draft\]\[Post\] │ │             │ ──────────────────────────────────────────────────────────── │ │             │  Reference: \[JE-2026-0041  \]  Date: \[07/03/2026\]  Narr: \[...\] │ │             │  Entity:    \[Acme UK Ltd ▾ \]  Period: \[Mar 2026 ✅ \]           │ │             │                                                                │ │             │  ┌──────┬─────────────────────┬──────┬──────────┬─────────┐  │ │             │  │ Line │ Account             │ DC   │ Amount   │ Actions │  │ │             │  ├──────┼─────────────────────┼──────┼──────────┼─────────┤  │ │             │  │  1   │ \[4100 Revenue    ▾\] │ \[Cr\] │ \[5,000.00│ \[×\]     │  │ │             │  │  2   │ \[1100 Bank       ▾\] │ \[Dr\] │ \[5,000.00│ \[×\]     │  │ │             │  │  \+   │ \[+ Add line       \] │      │          │         │  │ │             │  └──────┴─────────────────────┴──────┴──────────┴─────────┘  │ │             │                                                                │ │             │  ┌────────────────┬────────────────┬────────────────────────┐ │ │             │  │ Debits:        │ Credits:       │ Balance: ✅ 0.00        │ │ │             │  │ £5,000.00      │ £5,000.00      │ (BALANCED)             │ │ │             │  └────────────────┴────────────────┴────────────────────────┘ │ │             │                                                                │ │             │  Attachments: \[📎 Attach file\]   Tags: \[+ Add tag\]           │ │             │                                                                │ │             │  ┌──────────────────────────────────────────────────────┐    │ │             │  │ Audit Trail ▼                                        │    │ │             │  │   Draft created by J.Smith  07/03/2026 14:22 GMT     │    │ │             │  └──────────────────────────────────────────────────────┘    │ └─────────────┴────────────────────────────────────────────────────────────────┘ | Design Notes • "Post" button: Primary. Disabled until journal is balanced. • "Draft" button: Secondary. Saves without posting. • Balance indicator: real-time. Green ✅ when balanced; red ❌ with difference shown when not. • Account dropdown: searchable autocomplete. Shows account code \+ name \+ type. Filters to the active entity's chart of accounts. • Period badge: green if open; amber if within 5 days of lock; red if locked (post button disabled with ErrorBanner). • Multi-entity support: Entity dropdown changes the chart of accounts available. • Lines: keyboard-first. Tab moves through fields. Enter adds a new line. Delete on last field removes line. • Posted entries: all fields read-only. Reverse button appears in action bar. • Audit trail: always visible as collapsed panel. Expands to show full chain. |
| :---- | :---- |

| SCR-CHM-03  Wireframe: Chombo — Filing Calendar |
| :---- |

| ┌──\[Sidebar\]──┬──────────────────────────────────────────────────────────────┐ │             │  Legal (Chombo) \> Filing Calendar                             │ │             │ ──────────────────────────────────────────────────────────── │ │             │  Filter: \[All Entities▾\] \[All Types▾\] \[Next 90 days▾\] \[🔍\] │ │             │                                                                │ │             │  🔴 OVERDUE (0)     🟡 DUE SOON (2)     ⬜ UPCOMING (18)    │ │             │                                                                │ │             │  ┌──────────────────────────────────────────────────────────┐ │ │             │  │🟡 Annual Return — Acme UK Ltd (England & Wales)          │ │ │             │  │   Due: 15 Mar 2026 (7 days) · Annual Report              │ │ │             │  │   Assigned: Sarah Chen · Evidence: 0 files attached      │ │ │             │  │   \[ View \]  \[ Upload Evidence \]  \[ Mark as Filed \]       │ │ │             │  ├──────────────────────────────────────────────────────────┤ │ │             │  │🟡 VAT Return Q4 2025 — Acme UK Ltd                       │ │ │             │  │   Due: 07 Apr 2026 (30 days) · HMRC VAT100               │ │ │             │  │   Assigned: Tom Patel · Evidence: 1 file attached        │ │ │             │  │   \[ View \]  \[ Upload Evidence \]  \[ Mark as Filed \]       │ │ │             │  ├──────────────────────────────────────────────────────────┤ │ │             │  │⬜ Annual Accounts — Acme Ireland Ltd                     │ │ │             │  │   Due: 30 Jun 2026 (115 days) · CRO Filing               │ │ │             │  │   Assigned: Sarah Chen · Evidence: —                    │ │ │             │  └──────────────────────────────────────────────────────────┘ │ │             │                                                                │ │             │  \[← Previous month\]  March 2026        \[Next month →\]        │ └─────────────┴────────────────────────────────────────────────────────────────┘ | Design Notes • List view is default; calendar month view available via toggle. • Status colour: red left-border \= overdue; amber \= \< 30 days; green \= complete; grey \= upcoming. • Filter bar: entity selector, obligation type, date range, and assignee. Filters persist for the session. • Each card: obligation name, entity, due date, countdown, obligation type, assignee, evidence count. • "Mark as Filed" button: opens a slide-over with filed date input \+ reference number \+ confirmation. • Email alert badge shown on items where automated alert has fired (amber 🔔 icon). • Empty state (no upcoming filings): green banner "No filings due in the next 90 days" — never show a blank table. • New filing created automatically when a filing is marked complete (next occurrence). |
| :---- | :---- |

| SCR-HR-03  Wireframe: HR — New Hire Wizard (Step 1 of 5\) |
| :---- |

| ┌──\[Sidebar\]──┬────────────────────────────────────────────────────────────────┐ │             │  HR \> Employees \> New Employee                   \[Cancel\]       │ │             │ ────────────────────────────────────────────────────────────── │ │             │  ● Step 1        ○ Step 2       ○ Step 3    ○ Step 4  ○ Review │ │             │    Personal        Role           Pay        Access             │ │             │                                                                  │ │             │  Personal Information                                            │ │             │  ─────────────────────────────────────────────────────────────  │ │             │  First Name \*          Last Name \*                               │ │             │  \[James              \] \[Okafor              \]                    │ │             │                                                                  │ │             │  Personal Email \*       Employee ID (auto-generated)             │ │             │  \[james@gmail.com    \] \[EMP-2026-0142   🔒 \]                    │ │             │                                                                  │ │             │  Start Date \*           Employment Type \*                        │ │             │  \[15 Apr 2026   📅 \]   \[Full-time permanent ▾\]                 │ │             │                                                                  │ │             │  Nationality \*           Work Right to Work Status \*             │ │             │  \[British            ▾\] \[Verified — British citizen ▾\]         │ │             │                                                                  │ │             │  ┌──────────────────────────────────────────────────────────┐  │ │             │  │ ℹ️  Employee ID will be used for all payroll and HR systems│  │ │             │  └──────────────────────────────────────────────────────────┘  │ │             │                                                                  │ │             │                          \[Cancel\]  \[Continue to Role →\]         │ └─────────────┴─────────────────────────────────────────────────────────────────┘ | Design Notes • Progress stepper: horizontal, 5 steps. Current step: filled circle. Completed: filled \+ tick. Future: empty circle. • All required fields marked with \*. Inline validation on blur (not on keystroke to avoid interruption). • Employee ID: read-only, auto-generated. Lock icon communicates non-editability. • Start Date: DatePicker. Highlights weekends as non-working. Warns if start date is a public holiday. • "Continue" button: disabled until all required fields valid. Does not submit form — client-side navigation only until final step. • Personal email used for invitation; work email assigned in Step 4 (Access). • Right-to-work status: drives document requirements shown in a collapsible "Document Checklist" panel below the form. • Cancel: always visible. Triggers ConfirmDialog if any data has been entered. |
| :---- | :---- |

| SCR-RSK-03  Wireframe: Risk — KRI Dashboard |
| :---- |

| ┌──\[Sidebar\]──┬────────────────────────────────────────────────────────────────┐ │             │  Risk \> KRI Dashboard                \[+ Add KRI\]  \[Configure▾\]  │ │             │ ────────────────────────────────────────────────────────────── │ │             │  KRI Summary: 🔴 1 Red  ·  🟡 4 Amber  ·  ✅ 18 Green         │ │             │                                                                  │ │             │  🔴 CRITICAL                                                    │ │             │  ┌──────────────────────────────────────────────────────────┐  │ │             │  │🔴 Cash Runway                        Owner: CFO  \[View →\] │  │ │             │  │   Current: 4.2 months  Red threshold: \< 5 months         │  │ │             │  │   ▼ 0.8mo vs last week  \[Sparkline ████▓▒░ \]             │  │ │             │  │   Alert sent to CFO \+ CEO  07/03/2026 09:14              │  │ │             │  └──────────────────────────────────────────────────────────┘  │ │             │                                                                  │ │             │  🟡 AMBER                                                       │ │             │  ┌──────────────────────────────────────────────────────────┐  │ │             │  │🟡 Employee Turnover (TTM)     Owner: CHRO  \[View →\]      │  │ │             │  │   Current: 18.2%  Amber: \> 15%  Red: \> 25%              │  │ │             │  │   ▲ 2.1% vs last month \[Sparkline ░░▒▓██ \]              │  │ │             │  ├──────────────────────────────────────────────────────────┤  │ │             │  │🟡 Open Compliance Items \> 30d  Owner: Legal  \[View →\]   │  │ │             │  │   Current: 4 items  Amber: \> 3  Red: \> 7               │  │ │             │  └──────────────────────────────────────────────────────────┘  │ │             │                                                                  │ │             │  ✅ GREEN (18)    \[Show ▾\]                                      │ └─────────────┴─────────────────────────────────────────────────────────────────┘ | Design Notes • KRIs grouped by status: Red → Amber → Green (collapsed by default for Green). • Each card: KRI name, current value, threshold, trend vs. prior period, sparkline (last 12 data points), owner, last alert timestamp. • Red cards: full-width red left border (4px). Amber: amber left border. • Sparkline: last 12 data points. Threshold line drawn horizontally across sparkline. • Trend: arrow up/down with value change. Colour: green \= moving away from threshold; red \= moving toward. • "View →" opens full KRI detail in slide-over: full history chart, linked risk, linked data source, all alerts. • "+ Add KRI" → form: name, description, data source, thresholds, owner. Connects to a module metric automatically where possible. • Green section collapsed by default; click to expand. Count always visible. |
| :---- | :---- |

| SCR-FIN-04  Wireframe: Finance — P\&L Statement |
| :---- |

| ┌──\[Sidebar\]──┬────────────────────────────────────────────────────────────────┐ │             │  Finance \> Reports \> Profit & Loss          \[Export ▾\]\[Print\]   │ │             │ ────────────────────────────────────────────────────────────── │ │             │  Entity: \[Acme Group (Consolidated) ▾\]   Period: \[YTD 2026 ▾\]  │ │             │  Compare: \[YTD 2025 ▾\]   Format: \[GAAP ▾\]                      │ │             │                                                                  │ │             │  PROFIT & LOSS — YTD 2026 vs YTD 2025  (£000s)                │ │             │  ┌────────────────────────┬──────────┬──────────┬──────────┐  │ │             │  │                        │ YTD 2026 │ YTD 2025 │ Var %    │  │ │             │  ├────────────────────────┼──────────┼──────────┼──────────┤  │ │             │  │ REVENUE                │          │          │          │  │ │             │  │   Product Revenue  \[+\] │  2,410   │  1,840   │ \+31.0% ↑ │  │ │             │  │   Service Revenue  \[+\] │    890   │    720   │ \+23.6% ↑ │  │ │             │  │ Total Revenue          │  3,300   │  2,560   │ \+28.9% ↑ │  │ │             │  ├────────────────────────┼──────────┼──────────┼──────────┤  │ │             │  │ COST OF SALES      \[+\] │ (1,150)  │   (880)  │ \+30.7% ↑ │  │ │             │  │ GROSS PROFIT           │  2,150   │  1,680   │ \+28.0% ↑ │  │ │             │  │ Gross Margin %         │   65.2%  │   65.6%  │  \-0.4pp  │  │ │             │  ├────────────────────────┼──────────┼──────────┼──────────┤  │ │             │  │ OPERATING EXPENSES \[+\] │ (1,680)  │ (1,320)  │ \+27.3% ↑ │  │ │             │  │ EBITDA                 │    470   │    360   │ \+30.6% ↑ │  │ │             │  │ EBITDA Margin %        │   14.2%  │   14.1%  │  \+0.1pp  │  │ │             │  └────────────────────────┴──────────┴──────────┴──────────┘  │ │             │  \[+\] \= expandable to account level (drill-down)               │ └─────────────┴─────────────────────────────────────────────────────────────────┘ | Design Notes • Entity selector: single entity or consolidated group (automatic intercompany elimination). • Period selector: MTD, QTD, YTD, custom range, specific financial year. • Comparison: prior period, prior year, or budget. All three can be shown simultaneously. • \[+\] rows: expand to show individual account lines. Further expand to show individual journal entries. • Variance column: colour-coded. Positive revenue variance \= green; positive cost variance \= red. • Percentages (margin %): show point change vs. comparison period, not percentage change. • Click any line item → slide-over with monthly trend chart and top 5 journals for that account. • Export: PDF (formatted as management accounts), XLSX (raw data), or share via email. |
| :---- | :---- |

| SCR-SET-02  Wireframe: Settings — User & Role Management |
| :---- |

| ┌──\[Sidebar\]──┬────────────────────────────────────────────────────────────────┐ │             │  Settings \> Users & Roles                     \[+ Invite User\]   │ │             │ ────────────────────────────────────────────────────────────── │ │             │  \[Users\] \[Roles\] \[Invitations\] \[Activity Log\]                  │ │             │  ──────────────────────────────────────────────────────────── │ │             │  Search users... \[🔍\]      Filter: \[All roles▾\] \[All status▾\]  │ │             │                                                                  │ │             │  ┌────────────────────────────────────────────────────────────┐ │ │             │  │ ☑  Name           Roles            Status   Last Active   │ │ │             │  ├────────────────────────────────────────────────────────────┤ │ │             │  │ ☐  Alice Mbeki    Org Admin, CFO   ✅ Active  3 mins ago   │ │ │             │  │ ☐  Bob Chen       Finance Manager  ✅ Active  2 hrs ago    │ │ │             │  │ ☐  Carol Davis    HR Manager       ✅ Active  Yesterday    │ │ │             │  │ ☐  Dan Osei       Read Only        🟡 Invited  3 days ago  │ │ │             │  │ ☐  Eve Wilson     Legal Officer    🔴 Locked   8 days ago  │ │ │             │  └────────────────────────────────────────────────────────────┘ │ │             │  Showing 5 of 142 users  \[\< 1 2 3 … 29 \>\]                      │ │             │                                                                  │ │             │  Bulk actions (when ≥1 selected):                               │ │             │  \[Assign Role\] \[Deactivate\] \[Resend Invite\] \[Export\]            │ └─────────────┴─────────────────────────────────────────────────────────────────┘ | Design Notes • Tab navigation: Users, Roles, Invitations, Activity Log (four distinct views under one screen route). • Users table: sortable by name, last active, status. Default sort: last active descending. • Status badges: ✅ Active (green), 🟡 Invited (amber), 🔴 Locked (red), ⬜ Deactivated (grey). • Click user row → slide-over panel: profile, roles, last login, MFA status, permission summary, activity. Edit inline. • "+ Invite User": slide-over form. Email(s), role selection (multi), optional personal message. Batch invite via CSV upload. • Locked users: click to unlock or force password reset. Locked reason shown in tooltip. • Bulk actions appear in a contextual toolbar when ≥1 checkbox selected. • Roles tab: shows all roles, permission count, user count. Create custom roles. Cannot modify built-in ume.\* roles. |
| :---- | :---- |

| SCR-WRK-01  Wireframe: Work — Sprint Board (Kanban View) |
| :---- |

| ┌──\[Sidebar\]──┬─────────────────────────────────────────────────────────────────┐ │             │  Work \> Sprint 14 "Q1 Compliance Push" (7–21 Mar)  \[+ Work Item\] │ │             │ ─────────────────────────────────────────────────────────────── │ │             │  \[Sprint ▾\] \[Board\] \[Backlog\] \[Burndown\] \[Time\]   Filter:\[Mine▾\] │ │             │                                                                   │ │             │  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │ │             │  │ TO DO (5)       │ │ IN PROGRESS (3) │ │ IN REVIEW (2)   │   │ │             │  ├─────────────────┤ ├─────────────────┤ ├─────────────────┤   │ │             │  │ ┌─────────────┐ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │   │ │             │  │ │📋 WI-0241   │ │ │ │📋 WI-0238   │ │ │ │📋 WI-0235   │ │   │ │             │  │ │Entity compl.│ │ │ │KRI dashboard │ │ │ │Filing alert │ │   │ │             │  │ │👤 S.Chen  3p│ │ │ │👤 T.Patel  5p│ │ │ │review       │ │   │ │             │  │ │⏱ Due 15Mar │ │ │ │🔴 Overdue   │ │ │ │👤 J.Smith 2p│ │   │ │             │  │ └─────────────┘ │ │ └─────────────┘ │ │ └─────────────┘ │   │ │             │  │ ┌─────────────┐ │ │                 │ ├─────────────────┤   │ │             │  │ │📋 WI-0242   │ │ │ ┌─────────────┐ │ │ ┌─────────────┐ │   │ │             │  │ │Policy ack.  │ │ │ │📋 WI-0239   │ │ │ │📋 WI-0236   │ │   │ │             │  │ │👤 C.Davis  2p│ │ │ │Pay run Q1   │ │ │ │Leave report │ │   │ │             │  │ └─────────────┘ │ │ │👤 A.Mbeki  8p│ │ │ │👤 B.Chen  1p│ │   │ │             │  │  \+ Add item     │ │ └─────────────┘ │ │ └─────────────┘ │   │ │             │  └─────────────────┘ └─────────────────┘ └─────────────────┘   │ │             │  ┌─────────────────┐ ┌─────────────────┐                        │ │             │  │ DONE (8)        │ │ CANCELLED (1)   │                        │ │             │  └─────────────────┘ └─────────────────┘                        │ └─────────────┴─────────────────────────────────────────────────────────────────┘ | Design Notes • Kanban columns: To Do, In Progress, In Review, Done, Cancelled (configurable per board). • Work item cards: ID, title (truncated at 2 lines), assignee avatar, story points, due date. • Overdue cards: red left border \+ 🔴 indicator. • Cards are draggable between columns. Drag triggers status update \+ audit record \+ optional notification. • "+ Add item" at bottom of each column: quick-add inline input (title only) → creates card in that status. • Filter: Mine (default), All, By Assignee, By Label. • Burndown tab: shows sprint velocity chart. Time tab: shows time logged vs. estimated per person. • Column header: count in parentheses. WIP limit configurable per column (yellow border when approaching, red when exceeded). • Click card → slide-over with full detail: description, subtasks, comments, time log, linked items, audit trail. |
| :---- | :---- |

# **7\. Screen Interaction Specifications**

This section specifies the interaction states, transitions, and behavioural rules for key screen patterns that appear across multiple modules.

## **7.1 DataTable Pattern**

| Screen: DataTable — Universal List Screen Pattern — Interaction States |  |
| :---- | :---- |
| **Loading state** | Skeleton rows (5–10) shown matching the column structure. Column headers visible but not interactive. Filter bar disabled. |
| **Empty — no records** | EmptyState component: module-appropriate illustration, heading "No \[records\] yet", body text with next step, and primary CTA (e.g., "Add your first employee"). Never a blank table. |
| **Empty — filtered (no results)** | Different empty state: "No \[records\] match your filters." with a secondary CTA "Clear filters". Retains the filter bar so user can adjust. |
| **Populated — default** | All rows rendered. Pagination controls at bottom. Bulk action checkbox column on left (hidden until user hovers or clicks). ActionMenu (⋯) on each row (visible on hover). |
| **Row hover** | Background transitions to \--bg-pale. Row actions (⋯) appear. If row is clickable, cursor: pointer. |
| **Row selected** | Background: \--bg-light. Checkbox checked. Bulk action toolbar appears at top of table (above filter bar). |
| **Sort active** | Sort column header: sort arrow icon visible, \--accent colour. Other headers: sort arrow hidden until hover. |
| **Column resize** | Drag column border to resize. Min column width: 80px. Preference persisted in localStorage. |
| **Infinite scroll / load more** | At bottom of list: "Load more" button or automatic infinite scroll trigger at 80% scroll depth. Skeleton rows appended below existing rows while loading. |

## **7.2 Slide-Over Detail Panel**

| Screen: Slide-Over — Right Drawer Detail View — Interaction States |  |
| :---- | :---- |
| **Opening animation** | Slides in from the right edge over 200ms (ease-out). Main content dims to 40% opacity (click to close). Focus trapped inside panel. |
| **Loading state** | Panel header visible immediately with screen title. Content area shows skeleton. No layout shift when content loads. |
| **Edit mode** | View mode is default. Edit button (pencil icon) in panel header switches all editable fields to form inputs in place. "Save" and "Cancel" replace the "Edit" button. |
| **Save — success** | ProgressBar briefly shown. Toast: "Saved ✓". Fields revert to read-only display. Audit trail panel updates automatically. |
| **Save — validation error** | ErrorBanner at top of form listing all field errors. Erroneous fields highlighted. Panel does not close. User can correct and retry. |
| **Close behaviour** | Escape key, clicking outside the panel, or the × button closes. If unsaved changes exist: ConfirmDialog "Discard changes?". Closing always returns focus to the triggering element. |
| **Deep-linked panels** | Panels are deep-linkable (URL includes record ID as query param). Opening a deep link shows the list view with the panel pre-opened. |

## **7.3 Wizard / Multi-Step Form Pattern**

| Screen: Wizard — Multi-Step Form Pattern — Interaction States |  |
| :---- | :---- |
| **Progress stepper** | Horizontal stepper at top of content area. Filled circle \= current. Filled circle \+ tick \= complete. Empty circle \= future. Step labels below circles. |
| **Step validation** | Each step validates before allowing "Continue". Invalid fields highlighted inline. ErrorBanner at top of step listing errors. |
| **"Continue" button** | Labelled "Continue to \[Next Step Name\] →". Primary button. Disabled until current step is valid. |
| **"Back" button** | Secondary button. Always enabled. Does not re-validate the previous step. User can return to correct without losing data from later steps. |
| **Cancel** | ConfirmDialog if any data entered: "Cancel and discard progress?" with "Keep editing" (cancel the cancel) and "Yes, discard" options. |
| **Final step review** | Displays a read-only summary of all entered data from all steps. "Edit" links next to each section return to that step. Final submit button is primary, full-width. |
| **Submission / loading** | Submit button: loading state (spinner, disabled). ProgressBar at top of panel for server-side processing. No duplicate submission possible. |
| **Success state** | Full-page success state (not a toast): confirmation heading, summary of what was created, and two CTAs: "View \[record\]" (primary) and "Create another" (secondary). |

## **7.4 Destructive Action Pattern**

Any action that is irreversible or has significant downstream consequences MUST use this two-step confirmation pattern.

| Step | UI Element | Required Content | Optional |
| :---- | :---- | :---- | :---- |
| Step 1: Initiation | Destructive Button (red, ghost style) in ActionMenu or page action bar | Label: "Delete", "Void", "Terminate", "Lock Period", etc. No confirmation yet. | Tooltip on hover: one-line consequence summary |
| Step 2: Confirmation | ConfirmDialog modal (blocking) | 1\. Action title: "Delete Employee Record?" 2\. Consequence: "This will permanently delete James Okafor's record. All HR history will be removed. This cannot be undone." 3\. "Cancel" (secondary) 4\. "Yes, delete permanently" (destructive red primary) | Require user to type the record name for very high-stakes actions (e.g., "Delete Organisation") |
| Step 3: Processing | ConfirmDialog button: loading state | Spinner on confirm button. "Cancel" hidden. Modal stays open. | — |
| Step 4a: Success | Modal closes; Toast: "\[Action\] completed." | If navigating away (deleted record): redirect to list view with toast. | Undo option (appears in toast for 8 seconds) for reversible soft-deletes |
| Step 4b: Error | Modal stays open; ErrorBanner inside modal | Clear explanation of why it failed and what to do. | — |

# **8\. Responsive Design & Java Client Specification**

## **8.1 Responsive Breakpoints**

| Breakpoint | Width | Layout Changes |
| :---- | :---- | :---- |
| xs — Mobile | 320–767px | Sidebar hidden (accessible via hamburger menu → full-screen drawer). Single column layout. Tables collapse to card view. Wizard steps stack vertically. |
| sm — Tablet Portrait | 768–1023px | Sidebar collapsed (icon-only, 64px). Two-column grid max. Complex tables horizontally scrollable. Slide-over panels full-screen. |
| md — Tablet Landscape / Small Laptop | 1024–1279px | Sidebar 200px. 8-column grid. Complex layouts may stack some sections. Full table functionality. |
| lg — Desktop (baseline) | 1280–1439px | Sidebar 240px. 12-column grid. Full dual-panel layouts available. Baseline design target. |
| xl — Wide Desktop | 1440px+ | Max content width 1440px. Sidebar 240px. Additional detail panel visible alongside list (3-pane layout optional). |

The web portal uses responsive design; it is not a separate mobile application. The design target is lg (1280px). xs and sm breakpoints provide a functional (not feature-equivalent) experience for occasional mobile use. The Java desktop client has its own fixed-layout specification below.

## **8.2 Java GUI Client Screen Specification**

The Java GUI client (JavaFX) mirrors the web portal's screen inventory but uses a native desktop layout model. The three-panel layout (sidebar / list / detail) is the primary navigation pattern.

| Component | Web Portal Equivalent | JavaFX Implementation Notes |
| :---- | :---- | :---- |
| Application frame | AppShell | JFX Stage. Min size: 1024×768px. Remembers last size and position. |
| Sidebar | Sidebar | VBox with ListView for module navigation. CSS-styled to match web colour system. Collapse to 48px icon-only mode. |
| Three-panel layout | Sidebar \+ List \+ Slide-over | SplitPane: left list panel (350px min), right detail panel (fluid). Divider draggable. Preference persisted. |
| DataTable | DataTable component | TableView\<T\>. Sortable columns. Row selection. Context menu on right-click (ActionMenu equivalent). Virtual scrolling for large datasets. |
| Forms | Form components | GridPane-based forms. TextFields, ComboBoxes, DatePickers from JFX. CSS tokens match web (font, colour, spacing). |
| Modals / Dialogs | Slide-over / ConfirmDialog | JFX Dialog\<ButtonType\>. Styled to match web modal pattern. Focus trapped. Keyboard shortcuts (Escape \= cancel, Enter \= confirm). |
| Charts | Recharts (web) | JFX LineChart, BarChart, PieChart. Same colour palette as web. Export as PNG available. |
| Notifications | Toast / NotificationCentre | JFX Notifications (ControlsFX). System tray integration for background alerts. In-app notification panel (VBox slide-in from right). |
| Keyboard shortcuts | CommandPalette (Cmd+K) | JFX KeyCombination. Full shortcut map published in Help menu. Ctrl+/ opens shortcut reference overlay. |
| Watch Mode (live dashboard) | N/A (web uses WebSocket auto-refresh) | Dedicated Watch Mode: ANSI-styled terminal TUI via JLine3. WebSocket subscriber. Updates 4 KPI tiles in real time. Designed for monitoring screens. |

## **8.3 Keyboard Shortcut Reference**

| Shortcut | Action | Available In |
| :---- | :---- | :---- |
| Cmd/Ctrl+K | Open Command Palette (global search \+ actions) | All screens |
| Cmd/Ctrl+N | New record (context-sensitive: New Journal, New Employee, etc.) | List and detail screens |
| Cmd/Ctrl+S | Save current form / draft | All form screens |
| Cmd/Ctrl+Enter | Submit / Post (form final submission) | Multi-step forms; journal entry |
| Escape | Close modal, slide-over, or cancel current edit | Modals, slide-overs, inline edits |
| Cmd/Ctrl+/ | Show keyboard shortcut reference overlay | All screens |
| Cmd/Ctrl+Shift+F | Focus global search input | All screens |
| J / K | Navigate list rows down / up (vi-style) | DataTable with focus |
| Space | Select / deselect focused row | DataTable with focus |
| Enter | Open focused row detail | DataTable with focus |
| Tab / Shift+Tab | Move between form fields (standard) | All form screens |
| Cmd/Ctrl+\[ | Navigate back (browser history) | Web portal |
| Cmd/Ctrl+\] | Navigate forward (browser history) | Web portal |

# **Appendix A: Design Token Reference**

Design tokens are the single source of truth for all visual values. They are defined as CSS custom properties (web) and mirrored as JavaFX CSS properties (desktop). All component implementations must reference tokens, never raw values.

| Token | Value | Semantic Purpose |
| :---- | :---- | :---- |
| \--color-brand | \#0B2545 | Primary brand navy — sidebar bg, heading colour |
| \--color-accent | \#1557A0 | Royal blue — CTAs, active state, links, focus rings |
| \--color-mid | \#2878C8 | Mid blue — secondary buttons, icon highlights |
| \--color-light | \#D4E8F8 | Pale blue — selected row, focus ring fill |
| \--color-pale | \#EBF4FC | Callout background, card fill, info states |
| \--color-surface | \#F7F9FC | Page background |
| \--color-white | \#FFFFFF | Card background, modal background |
| \--color-border | \#E4EAF2 | Default border, dividers, table grid lines |
| \--color-text | \#1C2B3A | Primary body text |
| \--color-text-muted | \#4A5568 | Labels, captions, placeholders, secondary text |
| \--color-success-bg | \#C6EFCE | Success state background |
| \--color-success-text | \#1A5C28 | Success state text and icon |
| \--color-warning-bg | \#FFF3CD | Warning / amber state background |
| \--color-warning-text | \#7A5200 | Warning / amber state text and icon |
| \--color-error-bg | \#FDDCDC | Error / destructive state background |
| \--color-error-text | \#A80000 | Error / destructive state text and icon |
| \--space-1 | 4px | Micro gap |
| \--space-2 | 8px | Tight gap |
| \--space-4 | 16px | Standard component padding |
| \--space-6 | 24px | Card padding, toolbar padding |
| \--space-8 | 32px | Section padding |
| \--space-12 | 48px | Between major page sections |
| \--font-body | Inter, system-ui, sans-serif | All body text and UI text |
| \--font-code | JetBrains Mono, monospace | Code, IDs, amounts |
| \--text-display | 36px / ExtraBold | Hero numbers, page display titles |
| \--text-h1 | 28px / Bold | Section headings |
| \--text-h2 | 22px / SemiBold | Sub-section headings |
| \--text-h3 | 18px / SemiBold | Card titles |
| \--text-body | 14px / Regular | Default UI text |
| \--text-label | 12px / Medium | Form labels, badge text |
| \--radius-sm | 4px | Inputs, small buttons, badges |
| \--radius-md | 8px | Cards, modals, dropdowns |
| \--radius-lg | 12px | Large panels, empty state containers |
| \--radius-full | 9999px | Pills, avatars, toggle switches |
| \--transition-fast | 100ms ease-out | Hover state colour transitions |
| \--transition-base | 200ms ease-out | Slide-over open/close, panel expand |
| \--transition-slow | 300ms ease-out | Page transitions, full-page animations |

# **Appendix B: Notification & Alert Routing**

UME generates notifications from domain events. This table defines which events produce in-app notifications, email notifications, or both, and which personas receive them.

| Event | In-App | Email | Personas Notified | Urgency |
| :---- | :---- | :---- | :---- | :---- |
| chombo.filing.due (30d) | ✅ | ✅ | Legal Officer, Entity Compliance Manager | Amber |
| chombo.filing.due (7d) | ✅ | ✅ | Legal Officer, Entity Compliance Manager, CEO | Red |
| chombo.filing.overdue | ✅ | ✅ | Legal Officer, CEO, Exec Sponsor | Critical |
| risk.kri.amber\_threshold | ✅ | ✅ | Risk Owner | Amber |
| risk.kri.red\_threshold | ✅ | ✅ | Risk Owner, Executive Sponsor, CRO | Red |
| hr.employee.hired | ✅ | ✅ | Manager, HR Admin, IT Admin | Info |
| hr.employee.terminated | ✅ | ✅ | Manager, HR Admin, IT Admin, Finance | Info |
| hr.leave.requested | ✅ | ✅ | Line Manager | Action required |
| hr.leave.approved | ✅ | ✅ | Employee | Info |
| finance.period.approaching\_lock (5d) | ✅ | — | Finance Manager, CFO | Amber |
| finance.period.locked | ✅ | ✅ | Finance Manager, CFO | Info |
| finance.invoice.overdue | ✅ | ✅ | Finance Manager, AP Manager | Amber |
| security.identity.login\_failed\_lockout | ✅ | ✅ | User (self), IT Admin | Red |
| security.incident.created (P1/P2) | ✅ | ✅ | CISO, CTO, On-call team | Critical |
| process.task.overdue | ✅ | ✅ | Task Assignee, Process Owner | Amber |
| kernel.module.error | — | ✅ | Platform Admin (only) | Critical |

# **Appendix C: Empty State Catalogue**

Every module's first-run state must present a helpful empty state, not a blank screen. This catalogue specifies the empty state content for each primary list screen.

| Screen | Heading | Body | Primary CTA | Secondary CTA |
| :---- | :---- | :---- | :---- | :---- |
| Employee Directory | Your team starts here | Add your first employee and UME will set up their onboarding workflow automatically. | \+ Add First Employee | Import from CSV |
| Entity Registry | Register your first entity | UME will automatically generate your compliance calendar once your entity is registered. | \+ Register Entity | — |
| Filing Calendar | No filings due right now | All your compliance obligations will appear here. Register an entity to get started. | Register an Entity | — |
| Journal Entries | Your ledger is empty | Post your first journal entry to start building your financial history. | \+ New Journal Entry | Import from CSV |
| Risk Register | Start managing your risks | Add your first risk and connect it to live KPIs for automatic monitoring. | \+ Add First Risk | Import Risks |
| Work Board | Sprint board is empty | Add work items from the backlog, or create a new item to start tracking your sprint. | \+ Add Work Item | View Backlog |
| Incident List | No incidents recorded | When an incident is raised, it will appear here with its full timeline and resolution status. | \+ Raise Incident | — |
| Pipeline | Your pipeline is empty | Add your first opportunity to start tracking deals and revenue forecasts. | \+ New Opportunity | Import from CRM |

# **Appendix D: Screen-to-Flow Traceability Matrix**

| User Flow | Screens Involved (in order) |
| :---- | :---- |
| UF-01 New Org Onboarding | SCR-AUTH-01 → SCR-AUTH-02 → SCR-AUTH-05 (Steps 1–4) → SCR-DASH-01 |
| UF-02 Post Journal Entry | SCR-FIN-02 → SCR-FIN-03 (Create) → SCR-FIN-03 (Detail/Posted) |
| UF-03 Register New Entity | SCR-CHM-01 → SCR-CHM-05 (Steps 1–5) → SCR-CHM-02 → SCR-CHM-03 |
| UF-04 Onboard New Employee | SCR-HR-01 → SCR-HR-03 (Steps 1–5) → SCR-HR-02 (new profile) |
| UF-05 Employee Leave Request | SCR-PRT-01 (portal) → SCR-HR-06 → SCR-HR-05 (manager approval) |
| UF-06 KRI Threshold Breach | SCR-RSK-03 (notification entry) → SCR-RSK-02 → treatment update |
| UF-07 Mark Filing Complete | SCR-CHM-03 (calendar) → SCR-CHM-04 (filing detail) → SCR-CHM-03 |
| UF-08 Executive Dashboard Review | SCR-DASH-01 → (various drill-downs: SCR-FIN-14, SCR-CHM-03, SCR-HR-01) |

