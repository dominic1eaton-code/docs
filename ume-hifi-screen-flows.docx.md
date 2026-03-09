**UME PLATFORM**

High-Fidelity User Screen Flows

UME-HIFI-001 · v1.0.0 · March 2026

UME Design & Product · Internal

60+ screens · 15+ user flows · OrgOS · OrgApps · DAO · DLT

# **Document Overview**

This document provides high-fidelity screen flow specifications for the UME Platform — the Organisation Operating System (OrgOS) factory for building, running, and scaling any organisation. Each section covers a major platform module, with detailed wireframes for every screen, navigation flow tables, and interaction annotations.

## **How to Read This Document**

Each module section contains: (1) a flow overview table listing all screens in sequence with their type and description; (2) transition arrows showing navigation triggers between screens; (3) detailed ASCII wireframes showing the exact layout of each screen with all UI elements; and (4) numbered annotations explaining key interaction behaviours.

## **Platform Architecture Summary**

The UME platform is an Organisation Operating System (OrgOS) factory. It provisions tailored OrgOS instances for any organisation. The core concepts reflected in these screens are:

**OrgOS**

The configurable operating system for a specific organisation. Composed of OrgApps (modules) managed by the OrgKernel.

**OrgExec / OrgCPU**

Executors of work: humans, AI agents, hybrid systems (OrgExecs) and machines/devices/IoT (OrgCPUs). Governed by ODD contracts.

**ODD (OrgDeviceDriver)**

The contract defining how each OrgExec/OrgCPU operates within the OrgOS — capabilities, constraints, data access, and audit requirements.

**OrgDNA**

The exportable master configuration package of an OrgOS — can be cloned, forked, or published to franchisees.

**SDO (Software Defined Organisation)**

The digital twin of a physical organisation — a live representation of all running OrgApps, data flows, OrgExecs, and organisation health.

**DAO & DLT**

Multiple OrgOS instances can form a Decentralised Autonomous Organisation (DAO). Inter-organisation transactions are recorded on a Distributed Ledger (DLT) with smart contract governance.

## **Modules Covered**

| Module | Flows | Screens | Description |
| :---- | :---- | :---- | :---- |
| A — Auth & OrgOS Bootstrap | 2 | 9 | Sign-up, email verify, MFA, template gallery, module config, launch |
| B — Executive Dashboard | 1 | 4 | KPI overview, drill-downs, alert centre |
| C — Finance & Accounting | 1 | 4 | Journal entries, P\&L, balance sheet, audit trail |
| D — HR & People | 1 | 7 | Employee lifecycle, OrgExec types, leave management |
| E — Legal & Compliance | 1 | 5 | Entity registry, filing calendar, document vault |
| F — Risk & GRC | 1 | 4 | KRI monitoring, risk register, incident escalation |
| G — Sales & CRM | 1 | 5 | Customer management, order kanban, invoicing |
| H — Operations / ERP | 1 | 4 | Inventory, purchase orders, equipment IoT |
| I — OrgSystem & OrgApps | 1 | 5 | OrgOS control panel, app marketplace, configuration |
| J — OrgExec & ODD | 1 | 4 | OrgExec registry, ODD editor, AI agent deploy |
| K — DAO & DLT | 1 | 6 | DAO formation, smart contracts, franchise network, ledger |
| L — Digital Twin (SDO) | 1 | 3 | Live org topology, flow map, AI optimisation |
| M — Settings & Admin | 1 | 5 | Users, roles, integrations, billing |
| N — Work & Portal | 1 | 4 | Sprint board, employee portal, leave requests |
| O — Marketing | 1 | 4 | Campaigns, micro-personas, AI content generation |

| MODULE A  ·  Authentication & OrgOS Bootstrap |
| :---- |

New user registration, login, MFA, and the full OrgOS configuration wizard.

### **FLOW-A1  —  New Account Registration & OrgOS Bootstrap**

| Actor | New User (any) |
| :---- | :---- |
| **Time Target** | \< 15 minutes |
| **Description** | A new user creates an account, verifies email, selects an OrgOS template, configures core modules, and launches their Organisation Operating System. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-AUTH-01** | Landing / Sign-Up | Form | Email, password, full name, organisation name input. Terms acceptance. SSO options. |
| **SCR-AUTH-02** | Email Verification | Gate | 6-digit OTP entry. Resend link. Timer countdown. Auto-advance on success. |
| **SCR-AUTH-03** | MFA Setup | Wizard Step | TOTP QR code or SMS choice. Backup codes download. Skip (30-day grace). |
| **SCR-AUTH-04** | OrgOS Template Gallery | Gallery | Industry templates: Dry Cleaning, Professional Services, Retail, SaaS, Nonprofit, Blank. |
| **SCR-AUTH-05** | Module Configurator | Wizard Step | Toggle modules on/off. Select tier (Starter/Growth/Enterprise). Show dependency graph. |
| **SCR-AUTH-06** | Entity & Jurisdiction | Wizard Step | Legal entity type, jurisdiction, tax ID. Auto-fetches compliance requirements. |
| **SCR-AUTH-07** | Invite Team | Wizard Step | Invite emails with role assignment. Skip option. OrgExec type selection (Human/AI/Hybrid). |
| **SCR-AUTH-08** | OrgOS Launch Screen | Confirmation | Animated OrgOS boot sequence. Progress bars. Jump to Dashboard. |

### **Navigation Flow**

  **SCR-AUTH-01**  ──\[Submit Form\]──▶  **SCR-AUTH-02**

  **SCR-AUTH-02**  ──\[Verify OTP\]──▶  **SCR-AUTH-03**

  **SCR-AUTH-03**  ──\[Setup/Skip MFA\]──▶  **SCR-AUTH-04**

  **SCR-AUTH-04**  ──\[Select Template\]──▶  **SCR-AUTH-05**

  **SCR-AUTH-05**  ──\[Configure & Continue\]──▶  **SCR-AUTH-06**

  **SCR-AUTH-06**  ──\[Set Entity\]──▶  **SCR-AUTH-07**

  **SCR-AUTH-07**  ──\[Invite/Skip\]──▶  **SCR-AUTH-08**

### **Screen Wireframes**

**SCR-AUTH-01  Landing / Sign-Up**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │                                                                            │ |
| │          ██╗   ██╗███╗   ███╗███████╗       PLATFORM                     │ |
| │          ██║   ██║████╗ ████║██╔════╝       v2.0                         │ |
| │          ██║   ██║██╔████╔██║█████╗                                       │ |
| │          ██║   ██║██║╚██╔╝██║██╔══╝                                       │ |
| │          ╚██████╔╝██║ ╚═╝ ██║███████╗                                     │ |
| │           ╚═════╝ ╚═╝     ╚═╝╚══════╝   The Operating System for Business │ |
| │                                                                            │ |
| ├────────────────────────────────────────────────────────────────────────────┤ |
| │                      ┌──────────────────────────────┐                     │ |
| │   Start your free    │ Full Name                    │                     │ |
| │   Organisation OS    │ ─────────────────────────── │                     │ |
| │                      │ Business / Org Name          │                     │ |
| │   ✦ Configure any    │ ─────────────────────────── │                     │ |
| │     business in      │ Work Email                   │                     │ |
| │     minutes          │ ─────────────────────────── │                     │ |
| │                      │ Password            \[show\]  │                     │ |
| │   ✦ 50+ modules,     │ ─────────────────────────── │                     │ |
| │     one platform     │ ☑ I agree to Terms of Service│                     │ |
| │                      │                              │                     │ |
| │   ✦ Scale from solo  │ \[  CREATE MY ORGOS  ────▶ \] │                     │ |
| │     to enterprise    │                              │                     │ |
| │                      │ ──────── or ──────────────── │                     │ |
| │   Already have an    │ \[G\] Continue with Google    │                     │ |
| │   account?  Sign in  │ \[M\] Continue with Microsoft │                     │ |
| │                      └──────────────────────────────┘                     │ |
| │                                                                            │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Centred split layout: value prop left, form right

**②**  Password strength meter appears on keystroke (Weak/Fair/Strong/Very Strong)

**③**  Form auto-detects business type from name using ML classifier

**④**  SSO providers pre-configured; SAML enterprise available on Enterprise tier

**SCR-AUTH-02  Email Verification**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │  ←  Back to sign-up                                           ume platform │ |
| ├────────────────────────────────────────────────────────────────────────────┤ |
| │                                                                            │ |
| │                        ✉  Check your inbox                                 │ |
| │                                                                            │ |
| │              We sent a 6-digit code to bob@dryclean.com                   │ |
| │                                                                            │ |
| │                    ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐     │ |
| │                    │  \_  │ │  \_  │ │  \_  │ │  \_  │ │  \_  │ │  \_  │     │ |
| │                    └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘     │ |
| │                              ← enter code →                               │ |
| │                                                                            │ |
| │                         Code expires in  02:45                            │ |
| │                                                                            │ |
| │                     \[     Resend Code (2 left)     \]                      │ |
| │                                                                            │ |
| │             ─────────────────────────────────────────────────             │ |
| │             Didn't receive it? Check spam or use a different email         │ |
| │                                                                            │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Auto-advances when all 6 digits entered — no submit button needed

**②**  Countdown timer resets on resend. Max 3 resend attempts then lockout with support link

**③**  On success: celebratory micro-animation, then slide to next step

**SCR-AUTH-04  OrgOS Template Gallery**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │  Step 2 of 5   ●●○○○                           \[ Skip — start blank \]    │ |
| ├────────────────────────────────────────────────────────────────────────────┤ |
| │                                                                            │ |
| │   Choose a template for your Organisation OS                               │ |
| │   Pre-configured modules, workflows and reports for your industry          │ |
| │                                                                            │ |
| │   \[ All \]  \[ Services \]  \[ Retail \]  \[ Tech \]  \[ Nonprofit \]  \[ Gov \]     │ |
| │                                                                            │ |
| │  ╔══════════════╗  ╔══════════════╗  ╔══════════════╗  ╔══════════════╗   │ |
| │  ║  🧺           ║  ║  🏢           ║  ║  🛒           ║  ║  💻           ║   │ |
| │  ║ Dry Cleaning ║  ║ Professional ║  ║   Retail     ║  ║    SaaS      ║   │ |
| │  ║              ║  ║  Services    ║  ║  Business    ║  ║  Startup     ║   │ |
| │  ║ HR · Finance ║  ║ CRM · Legal  ║  ║ Inv · Sales  ║  ║ Eng · Sales  ║   │ |
| │  ║ Ops · CRM    ║  ║ HR · Finance ║  ║ HR · Finance ║  ║ HR · Finance ║   │ |
| │  ║              ║  ║              ║  ║              ║  ║              ║   │ |
| │  ║ \[ Select \]   ║  ║ \[ Select \]   ║  ║ \[ Select \]   ║  ║ \[ Select \]   ║   │ |
| │  ╚══════════════╝  ╚══════════════╝  ╚══════════════╝  ╚══════════════╝   │ |
| │                                                                            │ |
| │  ╔══════════════╗  ╔══════════════╗                                        │ |
| │  ║  🌱           ║  ║  ⬜           ║                                        │ |
| │  ║  Nonprofit   ║  ║    Blank     ║                                        │ |
| │  ║              ║  ║  OrgOS       ║                                        │ |
| │  ║ \[ Select \]   ║  ║ \[ Select \]   ║                                        │ |
| │  ╚══════════════╝  ╚══════════════╝                                        │ |
| │                                                                            │ |
| │                              \[ Continue ▶ \]                               │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Selected template card gets blue outline \+ checkmark; hovering shows module list tooltip

**②**  Templates are versioned OrgOS snapshots — includes pre-built KPIs, chart-of-accounts, job roles

**③**  Filter tabs animate in/out relevant cards; "Dry Cleaning" is highlighted per session context

**SCR-AUTH-05  Module Configurator**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │  Step 3 of 5   ●●●○○                                                      │ |
| ├────────────────────────────────────────────────────────────────────────────┤ |
| │                                                                            │ |
| │  Configure your OrgOS Modules                                              │ |
| │  You can change this at any time in Settings                               │ |
| │                                                                            │ |
| │  ┌─────────────────────────────────────┐  ┌────────────────────────────┐  │ |
| │  │ CORE (always on)                    │  │   MODULE DEPENDENCIES      │  │ |
| │  │  ■ OrgKernel        ██████████ ON   │  │                            │  │ |
| │  │  ■ Dashboard        ██████████ ON   │  │   Finance  ──requires──▶   │  │ |
| │  │  ■ User Management  ██████████ ON   │  │     Chart of Accounts      │  │ |
| │  │                                     │  │                            │  │ |
| │  │ BUSINESS MODULES                    │  │   HR  ──requires──▶        │  │ |
| │  │  ■ Finance & Accounting  \[ON \]  💰   │  │     Legal Entity           │  │ |
| │  │  ■ HR & People           \[ON \]  👥   │  │                            │  │ |
| │  │  ■ Legal & Compliance    \[ON \]  ⚖    │  │   Sales  ──optional──▶     │  │ |
| │  │  □ Sales & CRM           \[OFF\]  📊   │  │     Marketing Module       │  │ |
| │  │  □ Operations / ERP      \[OFF\]  🏭   │  │                            │  │ |
| │  │  □ Risk & GRC            \[OFF\]  🛡    │  └────────────────────────────┘  │ |
| │  │  □ Marketing             \[OFF\]  📣   │                                  │ |
| │  │  □ Supply Chain          \[OFF\]  🔗   │  Tier:  ○ Starter  ● Growth      │ |
| │  │  □ OrgExec / AI Agents   \[OFF\]  🤖   │         ○ Enterprise             │ |
| │  │  □ DAO & DLT Ledger      \[OFF\]  🔐   │                                  │ |
| │  └─────────────────────────────────────┘  Monthly: $149 / Save 20% annual │ |
| │                                                                            │ |
| │              \[ ◀ Back \]                        \[ Continue ▶ \]             │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Toggling a module ON animates the dependency graph and shows required modules that auto-enable

**②**  Pricing updates in real-time as modules toggled; annual vs monthly toggle with savings calc

**③**  DAO & DLT module unlocks only on Growth/Enterprise tier — clicking shows upgrade prompt

**SCR-AUTH-08  OrgOS Launch Screen**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │                                                                            │ |
| │                                                                            │ |
| │                    🚀  Launching Your OrgOS...                             │ |
| │                                                                            │ |
| │              Bob's Dry Cleaning Co.  ·  entity: LLC  ·  Missouri, US       │ |
| │                                                                            │ |
| │     Initialising OrgKernel  ........................... ✓ Complete         │ |
| │     Configuring Finance Module  ...................... ✓ Complete          │ |
| │     Setting up Chart of Accounts  ................... ✓ Complete          │ |
| │     Provisioning HR & People  ....................... ✓ Complete          │ |
| │     Loading Compliance Calendar for MO, USA  ........ ✓ Complete          │ |
| │     Creating OrgExec Profiles  ...................... ✓ Complete          │ |
| │     Generating Initial KPI Baselines  ............... ▓▓▓▓▓▓░░░ 72%      │ |
| │     Finalising OrgDNA Configuration  ................ ░░░░░░░░░  0%      │ |
| │                                                                            │ |
| │     ████████████████████████████████████████████░░░░  89% complete       │ |
| │                                                                            │ |
| │                  Estimated time remaining:  8 seconds                     │ |
| │                                                                            │ |
| │                                                                            │ |
| │                   ┌─────────────────────────────────┐                    │ |
| │                   │  ✓  Your OrgOS is live\!          │                    │ |
| │                   │  \[ Open Dashboard ──────────▶ \] │                    │ |
| │                   └─────────────────────────────────┘                    │ |
| │                                                                            │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Each provisioning step is a real async call — progress tracked server-side via SSE stream

**②**  On completion, confetti micro-animation fires; button pulses to draw attention

**③**  User lands on SCR-DASH-01 with onboarding checklist widget in top-right corner

### **FLOW-A2  —  Returning User Login (Email \+ MFA)**

| Actor | All User Personas |
| :---- | :---- |
| **Time Target** | \< 10 seconds |
| **Description** | Returning user authenticates with email/password, completes MFA challenge, and reaches their last active screen. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-AUTH-09** | Login | Form | Email \+ password fields. Remember me. Forgot password link. SSO options. |
| **SCR-AUTH-10** | MFA Challenge | Gate | TOTP code entry or push notification. Backup code link. |
| **SCR-DASH-01** | Dashboard (restore state) | Dashboard | Returns to last active screen per user session cookie. |

**SCR-AUTH-09  Login**

| ┌────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │                              ume  PLATFORM                                 │ |
| ├────────────────────────────────────────────────────────────────────────────┤ |
| │                                                                            │ |
| │                     Welcome back                                           │ |
| │                                                                            │ |
| │              ┌────────────────────────────────────────────┐               │ |
| │              │  Email address                             │               │ |
| │              │  bob@dryclean.com                          │               │ |
| │              ├────────────────────────────────────────────┤               │ |
| │              │  Password                       \[show\]    │               │ |
| │              │  ●●●●●●●●●●●●                              │               │ |
| │              └────────────────────────────────────────────┘               │ |
| │              ☑ Remember this device for 30 days                           │ |
| │                                          Forgot password?                 │ |
| │                                                                            │ |
| │                    \[ ──── SIGN IN ──────────────────▶ \]                  │ |
| │                                                                            │ |
| │              ─────────────────────── or ────────────────────              │ |
| │              \[G\] Google    \[M\] Microsoft    \[S\] SAML SSO                  │ |
| │                                                                            │ |
| │              Don't have an account?  Create your OrgOS →                  │ |
| │                                                                            │ |
| └────────────────────────────────────────────────────────────────────────────┘ |

**①**  Failed login: red border on fields, generic error "Invalid credentials" (no specificity)

**②**  After 5 failures: CAPTCHA appears. After 10: account locked, email sent with unlock link

**③**  Org selector appears after auth if user belongs to multiple organisations

| MODULE B  ·  Executive Dashboard |
| :---- |

Real-time OrgOS health monitor. KPIs, alerts, drill-downs, and cross-module activity feed.

### **FLOW-B1  —  Executive Dashboard Daily Review**

| Actor | Executive / Owner |
| :---- | :---- |
| **Time Target** | \< 2 minutes |
| **Description** | Exec opens the platform, reviews KPIs, investigates a cash variance, checks compliance widget, then takes action on a critical alert. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-DASH-01** | Executive Dashboard | Dashboard | 4 KPI cards, revenue chart, compliance widget, risk summary, people widget, activity feed. |
| **SCR-DASH-02** | KPI Drill-Down Panel | Slide-Over | Slide-over with full KPI history, breakdown, contributing transactions. |
| **SCR-DASH-03** | Alert Centre | List | All active alerts grouped by severity. Acknowledge, assign, dismiss actions. |
| **SCR-FIN-04** | P\&L Statement | Report | Cross-navigated from revenue KPI drill-down. |

  **SCR-DASH-01**  ──\[Click KPI card\]──▶  **SCR-DASH-02**

  **SCR-DASH-01**  ──\[Click alert badge\]──▶  **SCR-DASH-03**

  **SCR-DASH-02**  ──\[View full report\]──▶  **SCR-FIN-04**

**SCR-DASH-01  Executive Dashboard**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ 🏢 Bob's Dry Cleaning Co. ▼  │  Nov 2024 ▼  │  Q4 ▼  │   ⌨ Cmd+K  🔔 3  👤│ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🏠 Home │                                                                        │ |
| │         │  📊 Executive Dashboard           Last updated: 30 seconds ago  \[↺\]   │ |
| │ 💰 Finance│                                                                        │ |
| │ 👥 HR    │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐  │ |
| │ ⚖ Legal │  │ Cash Balance │ │ Monthly Rev  │ │ Headcount    │ │ Compliance   │  │ |
| │ 🛡 Risk  │  │  $48,230     │ │  $32,450     │ │     8 FTE    │ │   87 / 100   │  │ |
| │ 📊 Sales │  │  ↑ \+$2,100   │ │  ↑ \+12% MoM  │ │  \+1 this mo  │ │  ⚠ 2 due    │  │ |
| │ 🤖 Agents│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘  │ |
| │ 🔐 DAO   │                                                                        │ |
| │ ⚙ Settings│  ┌──────────────────────────────────────┐ ┌──────────────────────────┐│ |
| │         │  │ Revenue vs Expenses  (12 months)     │ │ Compliance Calendar      ││ |
| │ ⚠ Alerts│  │                                      │ │                          ││ |
| │  \[3\]    │  │   $35K ▁▂▃▄▅▆▇█▇▆▅▇▅▄              │ │  ● Nov 15 — Payroll Tax  ││ |
| │         │  │   $20K ░░░░░░░░░░░░░░░░              │ │    due \[7 days\]          ││ |
| │         │  │   $10K                               │ │  ● Dec 31 — Annual Rtn   ││ |
| │         │  │   $  0 ─────────────────             │ │  ◌ Jan 15 — Q4 est.      ││ |
| │         │  │        J F M A M J J A S O N D       │ │                          ││ |
| │         │  │   ── Revenue  ·· Expenses            │ │  \[ View All Filings \]    ││ |
| │         │  └──────────────────────────────────────┘ └──────────────────────────┘│ |
| │         │                                                                        │ |
| │         │  ┌──────────────────────────────────────┐ ┌──────────────────────────┐│ |
| │         │  │ Risk Summary                         │ │ Recent Activity          ││ |
| │         │  │ 🔴 Critical  1    ⚠ Accounts Recv.  │ │ 09:14 J.Smith posted JE  ││ |
| │         │  │ 🟡 Medium    3    low cash runway    │ │ 09:02 Payroll run \#44    ││ |
| │         │  │ 🟢 Low       7    within threshold   │ │ 08:55 New hire: M.Jones  ││ |
| │         │  │ \[ View Risk Dashboard \]              │ │ 08:30 Invoice \#1042 paid ││ |
| │         │  └──────────────────────────────────────┘ └──────────────────────────┘│ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  KPI cards are clickable — opens SCR-DASH-02 slide-over with full breakdown \+ history chart

**②**  Alert badge \[3\] in sidebar pulses red until acknowledged — opens SCR-DASH-03

**③**  Revenue chart tooltip on hover shows exact daily figure and linked transactions

**④**  Compliance Calendar shows colour-coded urgency: red=overdue, amber=\< 14 days, green=OK

**⑤**  Period selector (Nov 2024 / Q4) reloads all widgets simultaneously

| MODULE C  ·  Finance & Accounting |
| :---- |

Chart of Accounts, Journal Entries, Invoicing, P\&L, Balance Sheet, Cash Flow, and Audit Trail.

### **FLOW-C1  —  Create and Post a Journal Entry**

| Actor | Accountant / Finance Manager |
| :---- | :---- |
| **Time Target** | \< 3 minutes |
| **Description** | Accountant creates a manual journal entry, validates debit/credit balance, attaches supporting document, and posts to the ledger with crypto audit trail. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-FIN-01** | Journal Entry List | List | Searchable list of all JEs. Status badges (Draft/Posted/Voided). New JE button. |
| **SCR-FIN-02** | Journal Entry — Create | Form | Entry date, period, description, line items (account, debit, credit), auto-balance check. |
| **SCR-FIN-03** | Journal Entry — Detail | Detail | Posted JE with full audit trail, hash, approver signature, attachments. |

  **SCR-FIN-01**  ──\[Click \[+ New Journal Entry\]\]──▶  **SCR-FIN-02**

  **SCR-FIN-02**  ──\[Post entry (balance validated)\]──▶  **SCR-FIN-03**

**SCR-FIN-01  Journal Entry List**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ 🏢 Bob's Dry Cleaning Co. ▼           ⌨ Cmd+K  🔔 3  👤 Bob Smith        │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🏠 Home │  Finance  /  Journal Entries                                           │ |
| │ 💰 Finance│  ─────────────────────────────────────────────────────────────────────│ |
| │ ▸ Chart │                                                                        │ |
| │ ▸ JE    │  Journal Entries           \[ Export CSV \] \[ Import \] \[ \+ New JE \]      │ |
| │ ▸ AP/AR │  ─────────────────────────────────────────────────────────────────────│ |
| │ ▸ P\&L   │  🔍 Search entries...    Period: \[Nov 2024 ▼\]   Status: \[All ▼\]        │ |
| │ ▸ BS    │                                                                        │ |
| │ ▸ CF    │  ┌────┬──────────┬────────────────────────────┬────────┬──────┬──────┐ │ |
| │ ▸ Audit │  │ ☐  │ JE \#     │ Description                │ Date   │ Amt  │ Sts  │ │ |
| │         │  ├────┼──────────┼────────────────────────────┼────────┼──────┼──────┤ │ |
| │ 👥 HR    │  │ ☐  │ JE-1087  │ Nov payroll allocation     │ Nov 15 │$8,400│ ●Post│ │ |
| │ ⚖ Legal │  │ ☐  │ JE-1086  │ Cleaning supplies received │ Nov 12 │  $340│ ●Post│ │ |
| │         │  │ ☐  │ JE-1085  │ Customer refund — Acct 4010│ Nov 10 │  $120│ ●Post│ │ |
| │         │  │ ☐  │ JE-1084  │ Equipment depreciation Q4  │ Nov 01 │$2,500│ ●Post│ │ |
| │         │  │ ☐  │ JE-1083  │ DRAFT — Nov misc expenses  │ Nov 28 │  $890│ ○Drft│ │ |
| │         │  └────┴──────────┴────────────────────────────┴────────┴──────┴──────┘ │ |
| │         │  Showing 5 of 87  |  \[ ◀ Prev \]  Page 1 of 18  \[ Next ▶ \]             │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Row click opens SCR-FIN-03 Detail; "+" opens SCR-FIN-02 Create

**②**  Bulk select via checkboxes: bulk-post or bulk-void actions appear in action bar

**③**  Status badges: Posted (blue), Draft (grey), Voided (red strikethrough), Pending Approval (amber)

**SCR-FIN-02  Journal Entry — Create**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Finance / Journal Entries / New Entry                   \[✕ Discard\]     │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  New Journal Entry                                                               │ |
| │  ──────────────────────────────────────────────────────────────────────────────  │ |
| │  Entry Date: \[ 28 Nov 2024 ▼ \]    Period: \[ Nov 2024 ● Open \]    Ref: JE-auto   │ |
| │  Description: \[ November miscellaneous operating expenses                   \]   │ |
| │  Tags: \[ \+ Add tag \]                                                             │ |
| │                                                                                  │ |
| │  ┌────┬────────────────────────────────────┬────────────────┬───────────────┐   │ |
| │  │ \#  │ Account                            │    Debit       │    Credit     │   │ |
| │  ├────┼────────────────────────────────────┼────────────────┼───────────────┤   │ |
| │  │ 1  │ 6010 — Office Supplies Expense     │  $       890   │               │   │ |
| │  │ 2  │ 1010 — Cash & Cash Equivalents     │                │  $       890  │   │ |
| │  │ \+  │ \[ Add line item \]                  │                │               │   │ |
| │  ├────┴────────────────────────────────────┼────────────────┼───────────────┤   │ |
| │  │    TOTALS                               │ $      890.00  │ $      890.00 │   │ |
| │  │    ● BALANCED  ✓                        │                │               │   │ |
| │  └─────────────────────────────────────────┴────────────────┴───────────────┘   │ |
| │                                                                                  │ |
| │  Attachments:  \[ 📎 Attach Receipt / Invoice \]    receipt\_nov28.pdf  \[✕\]         │ |
| │  Notes: \[                                                                    \]   │ |
| │                                                                                  │ |
| │  ┌──────────────────────────────────────────────────────────────────────────┐   │ |
| │  │  \[ Save as Draft \]          \[ Request Approval \]    \[ POST ENTRY ──▶ \]  │   │ |
| │  └──────────────────────────────────────────────────────────────────────────┘   │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Account field is autocomplete — type account name or number, shows COA tree

**②**  Balance indicator: BALANCED (green ✓) / UNBALANCED $XX.XX (red) — POST disabled if unbalanced

**③**  Period badge shows lock status: Open (green) / Closed (red — blocks post)

**④**  POST ENTRY triggers: crypto hash generation → audit trail entry → GL update → notification to approver

**SCR-FIN-03  Journal Entry — Detail**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Finance / Journal Entries / JE-1083                   \[ Void \] \[ Print \]│ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  JE-1083  ●POSTED                    Posted by: Bob Smith  ·  28 Nov 2024 09:14  │ |
| │  November miscellaneous operating expenses                                       │ |
| │  ──────────────────────────────────────────────────────────────────────────────  │ |
| │  ┌────┬────────────────────────────────────┬────────────────┬───────────────┐   │ |
| │  │ \#  │ Account                            │    Debit       │    Credit     │   │ |
| │  ├────┼────────────────────────────────────┼────────────────┼───────────────┤   │ |
| │  │ 1  │ 6010 — Office Supplies Expense     │  $      890.00 │               │   │ |
| │  │ 2  │ 1010 — Cash & Cash Equivalents     │                │  $      890.00│   │ |
| │  ├────┴────────────────────────────────────┼────────────────┼───────────────┤   │ |
| │  │    TOTAL                               │ $      890.00  │ $      890.00 │   │ |
| │  └─────────────────────────────────────────┴────────────────┴───────────────┘   │ |
| │                                                                                  │ |
| │  📎 Attachments: receipt\_nov28.pdf  \[ View \]                                      │ |
| │                                                                                  │ |
| │  ═══ AUDIT TRAIL ════════════════════════════════════════════════════════════    │ |
| │  🔐 Hash: 3a9f2b1c...d84e7f  \[ Verify on Ledger \]                               │ |
| │  ───────────────────────────────────────────────────────────────────────────     │ |
| │  ✓ Created     Bob Smith    28 Nov 09:12   IP: 192.168.1.5  Device: MacBook Pro  │ |
| │  ✓ Balanced    System       28 Nov 09:12   Auto-check passed                    │ |
| │  ✓ Posted      Bob Smith    28 Nov 09:14   Dual control: not required            │ |
| │  ✓ Ledger Sync System       28 Nov 09:14   GL updated, period balance recalcd   │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Crypto hash links to immutable ledger record — "Verify on Ledger" opens verification panel

**②**  Void action requires reason, creates reversing JE automatically

**③**  Account codes link to SCR-FIN-05 Account Detail with full transaction history

**SCR-FIN-04  P\&L Statement**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Finance / Reports / Profit & Loss                  \[ Export \] \[ Print \] │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  Profit & Loss Statement                                                         │ |
| │  Entity: \[ All Entities ▼ \]   Period: \[ Nov 2024 ▼ \]   vs: \[ Oct 2024 ▼ \]       │ |
| │  ──────────────────────────────────────────────────────────────────────────────  │ |
| │  ┌─────────────────────────────────┬──────────┬──────────┬────────┬────────┐    │ |
| │  │ Account                         │ Nov 2024 │ Oct 2024 │ Var $  │ Var %  │    │ |
| │  ├─────────────────────────────────┼──────────┼──────────┼────────┼────────┤    │ |
| │  │ ▶ REVENUE                       │$32,450   │$28,950   │+$3,500 │ \+12.1% │    │ |
| │  │   └ 4000 Dry Cleaning Services  │$29,200   │$25,800   │+$3,400 │ \+13.2% │    │ |
| │  │   └ 4010 Alterations            │ $3,250   │ $3,150   │  \+$100 │  \+3.2% │    │ |
| │  ├─────────────────────────────────┼──────────┼──────────┼────────┼────────┤    │ |
| │  │ ▶ COST OF GOODS SOLD            │$11,320   │$10,200   │+$1,120 │ \+11.0% │    │ |
| │  │   └ 5000 Cleaning Supplies      │ $4,800   │ $4,400   │  \+$400 │  \+9.1% │    │ |
| │  │   └ 5010 Labor — Cleaning       │ $6,520   │ $5,800   │  \+$720 │ \+12.4% │    │ |
| │  ├─────────────────────────────────┼──────────┼──────────┼────────┼────────┤    │ |
| │  │ GROSS PROFIT                    │$21,130   │$18,750   │+$2,380 │ \+12.7% │    │ |
| │  │ Gross Margin %                  │  65.1%   │  64.8%   │  \+0.3% │        │    │ |
| │  ├─────────────────────────────────┼──────────┼──────────┼────────┼────────┤    │ |
| │  │ ▶ OPERATING EXPENSES            │$14,290   │$13,100   │+$1,190 │  \+9.1% │    │ |
| │  ├─────────────────────────────────┼──────────┼──────────┼────────┼────────┤    │ |
| │  │ NET INCOME                      │ $6,840   │ $5,650   │+$1,190 │ \+21.1% │    │ |
| │  └─────────────────────────────────┴──────────┴──────────┴────────┴────────┘    │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  ▶ Row expands to show child accounts. Account name links to account transaction list

**②**  Var % cells coloured: positive revenue \= green; positive expenses \= red (adverse)

**③**  Entity selector on multi-entity orgs shows consolidated \+ per-entity views

| MODULE D  ·  HR & People Management |
| :---- |

Employee lifecycle: hire, onboard, manage, leave, offboard. OrgExec profiles and contracts.

### **FLOW-D1  —  Onboard a New Employee**

| Actor | HR Manager |
| :---- | :---- |
| **Time Target** | \< 10 minutes |
| **Description** | HR Manager initiates new hire, completes wizard across personal details, right-to-work, contracts, benefits, and IT provisioning. Cross-module event cascade fires. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-HR-01** | People List | List | All employees, contractors, OrgExecs. Status filters. Headcount KPIs. |
| **SCR-HR-02** | New Hire Wizard — Step 1 | Wizard | Personal info, role, department, start date, employment type. |
| **SCR-HR-03** | New Hire Wizard — Step 2 | Wizard | Right-to-work documents upload, work authorisation, ID verification. |
| **SCR-HR-04** | New Hire Wizard — Step 3 | Wizard | Compensation: salary, pay frequency, payroll account, equity. |
| **SCR-HR-05** | New Hire Wizard — Step 4 | Wizard | Benefits selection, health plan, pension contributions. |
| **SCR-HR-06** | New Hire Wizard — Review | Wizard | Summary of all details, ODD contract generation preview, confirm. |
| **SCR-HR-07** | Employee Profile | Detail | Complete employee profile with timeline, documents, leave balance, payslips. |

  **SCR-HR-01**  ──\[\[ \+ New Hire \]\]──▶  **SCR-HR-02**

  **SCR-HR-02**  ──\[Continue\]──▶  **SCR-HR-03**

  **SCR-HR-03**  ──\[Continue\]──▶  **SCR-HR-04**

  **SCR-HR-04**  ──\[Continue\]──▶  **SCR-HR-05**

  **SCR-HR-05**  ──\[Review & Confirm\]──▶  **SCR-HR-06**

  **SCR-HR-06**  ──\[Create Employee\]──▶  **SCR-HR-07**  (cross-module events fire)

**SCR-HR-01  People List**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ 🏢 Bob's Dry Cleaning Co. ▼                           ⌨ Cmd+K  🔔  👤  │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🏠 Home │  HR & People                                                           │ |
| │ 💰 Finance│  ─────────────────────────────────────────────────────────────────── │ |
| │ 👥 HR   │                                                                        │ |
| │ ▸ People│  People                      \[ \+ New Hire \]  \[ Import \]  \[ Export \]   │ |
| │ ▸ Leave │  ─────────────────────────────────────────────────────────────────────│ |
| │ ▸ Payroll│ 📋 8 FTE   👷 2 Contractors   🤖 1 AI Agent   📭 1 Open Role           │ |
| │ ▸ ODD   │                                                                        │ |
| │         │  🔍 Search people...  Dept: \[All ▼\]   Type: \[All ▼\]   Status: \[Active▼\]│ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ ☐ │ Name              │ Role              │ Dept    │ Type │ Sts  │ │ |
| │         │  ├───┼───────────────────┼───────────────────┼─────────┼──────┼──────┤ │ |
| │         │  │ ☐ │ 🧑 Bob Smith       │ Owner / CEO       │ Exec    │ FTE  │ ●Act │ │ |
| │         │  │ ☐ │ 👩 Alice Johnson   │ Co-owner / COO    │ Exec    │ FTE  │ ●Act │ │ |
| │         │  │ ☐ │ 🧑 Marcus Jones    │ Lead Cleaner      │ Ops     │ FTE  │ ●Act │ │ |
| │         │  │ ☐ │ 👩 Sara Kim        │ Front Desk        │ Ops     │ FTE  │ ●Act │ │ |
| │         │  │ ☐ │ 🤖 UME-Agent-01   │ Scheduling AI     │ Ops     │ Agent│ ●Act │ │ |
| │         │  │ ☐ │ 👷 Carl Nguyen     │ Delivery Driver   │ Ops     │ Cont │ ●Act │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  AI Agents shown in same list as humans with 🤖 icon — managed via ODD profile

**②**  Click row → SCR-HR-07 Profile. "Open Role" row links to applicant tracking.

**③**  Bulk select → bulk actions: send announcement, export payroll, update department

**SCR-HR-02  New Hire Wizard — Step 1: Personal & Role**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ HR / New Hire                                           \[ ✕ Cancel \]    │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │  ① Personal & Role  ──●──  ② Documents  ──○──  ③ Compensation  ──○──  ④ Review  │ |
| │  ──────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  Personal Information                                                            │ |
| │  ┌──────────────────────────────┬─────────────────────────────────────────┐     │ |
| │  │ First Name                   │ Last Name                               │     │ |
| │  │ Marcus                       │ Thompson                                │     │ |
| │  └──────────────────────────────┴─────────────────────────────────────────┘     │ |
| │  ┌──────────────────────────────┬─────────────────────────────────────────┐     │ |
| │  │ Work Email (auto-generated)  │ Personal Email                          │     │ |
| │  │ m.thompson@bobsdryclean.com  │ marcus.t@gmail.com                      │     │ |
| │  └──────────────────────────────┴─────────────────────────────────────────┘     │ |
| │                                                                                  │ |
| │  Role & Employment                                                               │ |
| │  ┌──────────────────────────────┬─────────────────────────────────────────┐     │ |
| │  │ Job Title                    │ Department                              │     │ |
| │  │ Dry Cleaning Associate       │ Operations                         \[▼\]  │     │ |
| │  └──────────────────────────────┴─────────────────────────────────────────┘     │ |
| │  ┌──────────────────────────────┬─────────────────────────────────────────┐     │ |
| │  │ Employment Type  \[FTE ▼\]     │ Start Date  \[ 02 Dec 2024 \]            │     │ |
| │  └──────────────────────────────┴─────────────────────────────────────────┘     │ |
| │  Reports to:  \[ Bob Smith ▼ \]      Employee ID: EMP-0009 (auto)                 │ |
| │                                                                                  │ |
| │  OrgExec Type:  ● Human   ○ AI Agent   ○ Hybrid                                 │ |
| │  ODD Template:  \[ Full-Time Employee v2.1 ▼ \]  \[ Preview ODD \]                  │ |
| │                                                                                  │ |
| │              \[ ◀ Back \]                              \[ Continue ▶ \]             │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Work email auto-generated from name \+ domain; editable

**②**  OrgExec Type selector: Human, AI Agent, or Hybrid — determines ODD template options

**③**  ODD Template preview shows the contract/specification that defines how this OrgExec operates

**SCR-HR-07  Employee Profile**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ HR / People / Marcus Thompson                  \[ Edit \] \[ Offboard \]   │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │  ┌──────────┐                                                                    │ |
| │  │   M T    │  Marcus Thompson  ·  EMP-0009  ●Active                             │ |
| │  │ \[avatar\] │  Dry Cleaning Associate  ·  Operations  ·  Reports to: Bob Smith   │ |
| │  │          │  Start date: 02 Dec 2024  ·  FTE  ·  Full-Time Employee v2.1 ODD  │ |
| │  └──────────┘  📧 m.thompson@bobsdryclean.com  ·  📞 \+1 314-555-0192             │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │  \[ Overview \] \[ Documents \] \[ Payslips \] \[ Leave \] \[ Performance \] \[ Activity \]  │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  ┌───────────────────────────┐  ┌────────────────────────────────────────────┐  │ |
| │  │ Compensation              │  │ Leave Balances                             │  │ |
| │  │ $18.50 / hour             │  │ Annual Leave:    12.5 days remaining       │  │ |
| │  │ Bi-weekly payroll         │  │ Sick Leave:       8.0 days remaining       │  │ |
| │  │ Next pay: 15 Dec 2024     │  │ \[ Request Leave \]                         │  │ |
| │  └───────────────────────────┘  └────────────────────────────────────────────┘  │ |
| │                                                                                  │ |
| │  Timeline                                                                        │ |
| │  ● Dec 02  Employee created. ODD signed. IT provisioning triggered.              │ |
| │  ● Dec 02  Payroll account linked. First pay period set.                         │ |
| │  ● Dec 02  Benefits enrollment: Health Plan A selected.                          │ |
| │  ● Dec 02  Welcome email sent. Login credentials issued.                         │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Tab row: Overview, Documents (contracts, RTW docs), Payslips, Leave calendar, etc.

**②**  Cross-module events visible in timeline: payroll, IT, legal all auto-triggered on create

**③**  ODD link opens the device driver contract specifying this OrgExec's tasks and constraints

| MODULE E  ·  Legal & Compliance (Chombo) |
| :---- |

Legal entity registry, filing calendar, compliance tracking, document vault, and IP management.

### **FLOW-E1  —  Mark a Compliance Filing Complete**

| Actor | Compliance Officer / Owner |
| :---- | :---- |
| **Time Target** | \< 5 minutes |
| **Description** | Compliance officer marks a due filing as complete, uploads evidence document, and the system auto-schedules the next occurrence. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-CHM-01** | Legal Entity Registry | List | All legal entities across jurisdictions. Status, entity type, formation date. |
| **SCR-CHM-02** | Entity Detail | Detail | Entity profile, ownership structure, associated filings and documents. |
| **SCR-CHM-03** | Filing Calendar | Calendar/List | All compliance filings with due dates, status, responsible party. |
| **SCR-CHM-04** | Filing Detail | Detail | Filing instructions, history, evidence upload, mark-as-filed flow. |
| **SCR-CHM-05** | Document Vault | List | All legal documents: contracts, licences, IP registrations, agreements. |

  **SCR-CHM-01**  ──\[Click entity row\]──▶  **SCR-CHM-02**

  **SCR-CHM-02**  ──\[View filings tab\]──▶  **SCR-CHM-03**

  **SCR-CHM-03**  ──\[Click filing row\]──▶  **SCR-CHM-04**

  **SCR-CHM-04**  ──\[Mark Filed → next occurrence created\]──▶  **SCR-CHM-03**

**SCR-CHM-03  Filing Calendar**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Legal & Compliance / Filing Calendar                  \[ \+ Add Filing \]  │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ ⚖ Legal │  Filing Calendar                                                       │ |
| │ ▸ Entities│ ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ Calendar│ Entity: \[ All ▼ \]  Period: \[ Q4 2024 ▼ \]  Status: \[ All ▼ \]          │ |
| │ ▸ Vault │                                                                        │ |
| │ ▸ IP Mgmt│  🔴 OVERDUE (1)                                                       │ |
| │         │  ┌─────────────────────────────────────────────────────────────────┐  │ |
| │         │  │ ● Annual Report — Missouri SOS       Due: Oct 31  \[ File Now \] │  │ |
| │         │  └─────────────────────────────────────────────────────────────────┘  │ |
| │         │                                                                        │ |
| │         │  🟡 DUE SOON (2)                                                       │ |
| │         │  ┌─────────────────────────────────────────────────────────────────┐  │ |
| │         │  │ ⚠ Payroll Tax Deposit               Due: Nov 15  \[ 7 days \] \]  │  │ |
| │         │  │ ⚠ Sales Tax Return — MO             Due: Nov 20  \[12 days \]   │  │ |
| │         │  └─────────────────────────────────────────────────────────────────┘  │ |
| │         │                                                                        │ |
| │         │  🟢 UPCOMING (5)                                                       │ |
| │         │  ┌─────────────────────────────────────────────────────────────────┐  │ |
| │         │  │ ○ Federal Tax Deposit (FUTA)         Due: Dec 31               │  │ |
| │         │  │ ○ W-2 Preparation                   Due: Jan 15, 2025         │  │ |
| │         │  │ ○ 1099-NEC (contractors)             Due: Jan 31, 2025         │  │ |
| │         │  │ ○ Q4 Estimated Tax Payment           Due: Jan 15, 2025         │  │ |
| │         │  │ ○ Annual Workers' Comp Audit         Due: Mar 01, 2025         │  │ |
| │         │  └─────────────────────────────────────────────────────────────────┘  │ |
| │         │                                                                        │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Grouped by urgency: Overdue (red), Due Soon \<14d (amber), Upcoming (green)

**②**  "File Now" button on overdue items opens SCR-CHM-04 directly in upload+mark flow

**③**  Filings auto-generated from jurisdiction detection during entity setup (Chombo engine)

**SCR-CHM-04  Filing Detail**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Legal / Filing Calendar / Payroll Tax Deposit — Nov 2024               │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │  ⚠ DUE IN 7 DAYS  ·  Payroll Tax Deposit (Form 941\)                             │ |
| │  Jurisdiction: Missouri, USA  ·  Entity: Bob's Dry Cleaning LLC  ·  FEDERAL     │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  Filing Instructions                                                             │ |
| │  Deposit federal payroll taxes (withheld income tax \+ FICA). Use EFTPS.          │ |
| │  Amount due this period: $2,340.00 (auto-calculated from payroll runs)           │ |
| │  \[ View payroll calculation breakdown \]                                          │ |
| │                                                                                  │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │  Evidence & Filing                                                               │ |
| │                                                                                  │ |
| │  Uploaded Documents:                                                             │ |
| │  (none yet — upload confirmation receipt after filing)                           │ |
| │                                                                                  │ |
| │  \[ 📎 Upload Evidence Document \]                                                 │ |
| │                                                                                  │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │  \[ Save Notes \]           \[ Assign to: Bob Smith ▼ \]    \[ ✓ MARK AS FILED \]    │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │  Filing History                                                                  │ |
| │  ● Oct 15  Payroll Tax Deposit (Oct)  Filed by Bob  EFTPS confirm \#8821-99-44   │ |
| │  ● Sep 15  Payroll Tax Deposit (Sep)  Filed by Bob  EFTPS confirm \#7710-88-33   │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Amount due auto-calculated from linked payroll module data — no manual entry needed

**②**  MARK AS FILED: prompts for confirmation date → creates next occurrence → updates calendar

**③**  History tab shows full filing audit trail with confirmation numbers for tax auditor access

| MODULE F  ·  Risk & GRC |
| :---- |

KRI monitoring, risk register, incident management, and escalation workflows.

### **FLOW-F1  —  KRI Threshold Breach → Escalation**

| Actor | System auto-trigger → Executive |
| :---- | :---- |
| **Time Target** | \< 2 minutes |
| **Description** | System detects a KRI (cash runway) breach, auto-creates an alert, notifies exec, and logs risk event for GRC record. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-RSK-01** | Risk Register | List | All identified risks. Category, owner, likelihood, impact, status. |
| **SCR-RSK-02** | Risk Detail | Detail | Full risk record with mitigations, linked incidents, and KRI history. |
| **SCR-RSK-03** | KRI Dashboard | Dashboard | All Key Risk Indicators with sparklines, threshold lines, status badges. |
| **SCR-RSK-04** | Incident Log | List | Raised incidents from KRI breaches or manual reports. Triage and assign. |

**SCR-RSK-03  KRI Dashboard**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Risk & GRC / KRI Dashboard             As at: 28 Nov 2024  10:02 AM   │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🛡 Risk  │  KRI Dashboard           🔴 1 Breach   🟡 3 Warning   🟢 7 OK         │ |
| │ ▸ KRIs  │  ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ Register│                                                                      │ |
| │ ▸ Incidents│  🔴 BREACH                                                          │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ Cash Runway           Owner: Bob Smith      Breach: 08:44 AM    │ │ |
| │         │  │ Current: 18 days  |  Threshold: \> 30 days                       │ │ |
| │         │  │ ▁▂▃▄▅▆▅▄▃▂▁▁  Trend: Declining ↘                              │ │ |
| │         │  │ \[ View Risk Detail \]   \[ Acknowledge \]    \[ Escalate to CFO \]   │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  🟡 WARNING                                                            │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ Accounts Receivable Ageing   72% \> 30 days  | Warn: \> 60%       │ │ |
| │         │  │ Employee Utilisation         61%            | Warn: \< 70%       │ │ |
| │         │  │ Order Fulfilment Time        3.2 days       | Warn: \> 3 days    │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  🟢 WITHIN THRESHOLD (7)  \[ Show all \]                                │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ Gross Margin ✓  Customer Retention ✓  Payroll % Rev ✓  ...      │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Red breach card shows exact breach time, current vs threshold value, and sparkline trend

**②**  "Escalate" opens assignment modal — creates incident in SCR-RSK-04 and sends notification

**③**  KRI thresholds configurable in Risk Settings — linked to Finance/HR/Ops data streams

| MODULE G  ·  Sales & CRM |
| :---- |

Customer management, order tracking, fulfilment pipeline, and revenue reporting.

### **FLOW-G1  —  Customer Order Lifecycle**

| Actor | Front Desk / Sales |
| :---- | :---- |
| **Time Target** | \< 5 days order lifetime |
| **Description** | New customer drops off items, order created, tracked through cleaning process, marked complete, and customer notified for pickup. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-CRM-01** | Customer List | List | All customers, search by name/phone. Order history quick view. |
| **SCR-CRM-02** | Customer Profile | Detail | Customer details, order history, preferences, notes, spend summary. |
| **SCR-CRM-03** | New Order | Form | Items list, service type, special instructions, due date, pricing. |
| **SCR-CRM-04** | Order Board | Kanban | All active orders in Kanban: Received → Cleaning → Ready → Collected. |
| **SCR-CRM-05** | Order Detail | Detail | Full order record, status history, invoice, payment status. |

  **SCR-CRM-01**  ──\[Click customer\]──▶  **SCR-CRM-02**

  **SCR-CRM-02**  ──\[\[+ New Order\]\]──▶  **SCR-CRM-03**

  **SCR-CRM-03**  ──\[Create Order → appears in Received column\]──▶  **SCR-CRM-04**

  **SCR-CRM-04**  ──\[Click order card\]──▶  **SCR-CRM-05**

**SCR-CRM-04  Order Board — Kanban**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Sales & CRM / Order Board                  \[ \+ New Order \]  \[ List View\]│ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 📊 Sales │  Order Board — Active Orders  (24 total)           Today: 28 Nov 2024  │ |
| │ ▸ Customers│ ──────────────────────────────────────────────────────────────────  │ |
| │ ▸ Orders│                                                                        │ |
| │ ▸ Invoices│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│ |
| │ ▸ Reports│ │ 📥 RECEIVED  │ │ 🧺 CLEANING  │ │ ✅ READY    │ │ 🏠 COLLECTED ││ |
| │         │ │    (6)       │ │    (11)      │ │    (5)      │ │    (2)       ││ |
| │         │ ├──────────────┤ ├──────────────┤ ├──────────────┤ ├──────────────┤│ |
| │         │ │ \#ORD-1043    │ │ \#ORD-1040    │ │ \#ORD-1036    │ │ \#ORD-1030    ││ |
| │         │ │ J. Martinez  │ │ P. Williams  │ │ T. Green     │ │ C. Davis     ││ |
| │         │ │ 3 shirts     │ │ 2 suits      │ │ 1 wedding    │ │ 4 pieces     ││ |
| │         │ │ Due: Nov 30  │ │ Due: Nov 29  │ │ dress        │ │ Collected ✓  ││ |
| │         │ │ $28.50       │ │ $95.00       │ │ Due: Nov 28  │ └──────────────┘│ |
| │         │ │ \[Move ▶\]     │ │ \[Move ▶\]     │ │ $185.00  ⚠  │ │ \#ORD-1028    ││ |
| │         │ ├──────────────┤ ├──────────────┤ │ \[Notify\] \[▶\] │ │ ...          ││ |
| │         │ │ \#ORD-1042    │ │ \#ORD-1039    │ └──────────────┘ └──────────────┘│ |
| │         │ │ R. Thompson  │ │ ...          │                                   │ |
| │         │ │ 1 coat       │ │              │                                   │ |
| │         │ │ Due: Dec 01  │ │              │                                   │ |
| │         │ │ $45.00       │ │              │                                   │ |
| │         │ │ \[Move ▶\]     │ │              │                                   │ |
| │         │ └──────────────┘ └──────────────┘                                   │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Cards draggable between columns — drag triggers status update \+ customer SMS notification

**②**  ⚠ on READY card: item past due date → amber highlight

**③**  "Notify" button sends customer pickup-ready SMS/email from template

**④**  \[Move ▶\] button opens quick-move dropdown for keyboard-only operation

| MODULE H  ·  Operations / ERP |
| :---- |

Inventory management, equipment tracking, supply chain orders, and resource planning.

### **FLOW-H1  —  Create & Track a Supply Order**

| Actor | Operations Manager |
| :---- | :---- |
| **Time Target** | \< 5 business days |
| **Description** | Operations manager creates a supply order for cleaning chemicals, tracks vendor fulfilment, and receives stock into inventory. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-OPS-01** | Inventory Dashboard | Dashboard | Stock levels, low-stock alerts, reorder points, and equipment status. |
| **SCR-OPS-02** | Purchase Orders | List | All POs with status: Draft / Submitted / Confirmed / Received / Invoiced. |
| **SCR-OPS-03** | New Purchase Order | Form | Vendor selection, line items, quantities, expected delivery date. |
| **SCR-OPS-04** | Receive Goods | Form | Match received items to PO, note discrepancies, update inventory. |

**SCR-OPS-01  Inventory Dashboard**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Operations / Inventory Dashboard                      \[ \+ Adjust Stock \]│ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🏭 Ops  │                                                                        │ |
| │ ▸ Inventory│  Inventory & Equipment Overview                                     │ |
| │ ▸ POs   │  ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ Equipment│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│ |
| │ ▸ Vendors│ │ Items in     │ │ Low Stock    │ │ Open POs     │ │ Equipment    ││ |
| │         │ │ Stock:  42   │ │ Alerts:   5  │ │    3         │ │ Uptime: 94%  ││ |
| │         │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘│ |
| │         │                                                                        │ |
| │         │  🔴 LOW STOCK ALERTS                                                   │ |
| │         │  ┌────────────────────────────────────────────────────────────────┐   │ |
| │         │  │ Perc-A-Tone Cleaner (5L)   In Stock: 2   Reorder at: 5  \[PO\]  │   │ |
| │         │  │ Coat Hangers (box 100\)     In Stock: 1   Reorder at: 3  \[PO\]  │   │ |
| │         │  │ Poly Garment Bags (100pk)  In Stock: 4   Reorder at: 10 \[PO\]  │   │ |
| │         │  └────────────────────────────────────────────────────────────────┘   │ |
| │         │                                                                        │ |
| │         │  EQUIPMENT STATUS                                                      │ |
| │         │  ┌────────────────────────────────────────────────────────────────┐   │ |
| │         │  │ Washer \#1  ●Running   Washer \#2  ●Running   Dryer \#1 ●Idle    │   │ |
| │         │  │ Dryer \#2   ⚠ Maint due Dec 5    Press \#1   ●Running           │   │ |
| │         │  └────────────────────────────────────────────────────────────────┘   │ |
| │         │                                                                        │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  \[PO\] button on low-stock alert pre-fills purchase order with item and recommended qty

**②**  Equipment OrgCPU status: IoT-connected machines report status via ODD device drivers

**③**  ⚠ Maintenance badge links to maintenance schedule and service log

| MODULE I  ·  OrgSystem — OrgApps, OrgExec & Digital Twin |
| :---- |

The meta-layer of the UME platform: configure the OrgOS itself, manage OrgApps, define OrgExec/OrgCPU roles via ODDs, and view the Digital Twin (SDO).

### **FLOW-I1  —  Install & Configure an OrgApp**

| Actor | Owner / Admin |
| :---- | :---- |
| **Time Target** | \< 10 minutes |
| **Description** | Owner browses the OrgApp Marketplace, installs a new app (e.g., Marketing AI), configures it, and links it to existing modules. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-SYS-01** | OrgOS Control Panel | Dashboard | Running OrgApps, system health, OrgKernel status, resource usage. |
| **SCR-SYS-02** | OrgApp Marketplace | Gallery | All available OrgApps: native modules \+ third-party integrations. |
| **SCR-SYS-03** | OrgApp Detail | Detail | App description, permissions, pricing, reviews, install dependencies. |
| **SCR-SYS-04** | App Configuration | Wizard | Permission grants, module connections, initial settings, test run. |
| **SCR-SYS-01** | OrgOS Control Panel (updated) | Dashboard | New app visible in running apps list. |

  **SCR-SYS-01**  ──\[\[ \+ Install App \]\]──▶  **SCR-SYS-02**

  **SCR-SYS-02**  ──\[Click app card\]──▶  **SCR-SYS-03**

  **SCR-SYS-03**  ──\[\[ Install \]\]──▶  **SCR-SYS-04**

  **SCR-SYS-04**  ──\[Complete setup\]──▶  **SCR-SYS-01**

**SCR-SYS-01  OrgOS Control Panel**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ 🏢 Bob's Dry Cleaning Co. ▼  │  OrgOS v2.4.1   ⌨ Cmd+K  🔔  👤        │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ ⚙ System│  OrgOS Control Panel                               \[ \+ Install App \]   │ |
| │ ▸ Control│ ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ Marketplace│                                                                   │ |
| │ ▸ OrgDNA │  OrgKernel   ██████████ Healthy   Uptime: 99.98%  v2.4.1            │ |
| │ ▸ OrgExec │  ─────────────────────────────────────────────────────────────────  │ |
| │ ▸ ODDs   │                                                                        │ |
| │ ▸ DigTwin│  RUNNING ORG APPS  (9 active)                                         │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ App                    │ Status  │ CPU │ Last Event │ Actions    │ │ |
| │         │  ├────────────────────────┼─────────┼─────┼────────────┼────────────┤ │ |
| │         │  │ 💰 Finance & Accounting │ ●Running│  2% │  09:14     │ Config Stop│ │ |
| │         │  │ 👥 HR & People          │ ●Running│  1% │  09:02     │ Config Stop│ │ |
| │         │  │ ⚖ Legal & Compliance   │ ●Running│  1% │  08:55     │ Config Stop│ │ |
| │         │  │ 🛡 Risk & GRC           │ ●Running│  3% │  10:02     │ Config Stop│ │ |
| │         │  │ 📊 Sales & CRM          │ ●Running│  4% │  10:00     │ Config Stop│ │ |
| │         │  │ 🏭 Operations / ERP     │ ●Running│  2% │  07:30     │ Config Stop│ │ |
| │         │  │ 🤖 AI Scheduling Agent  │ ●Running│  8% │  10:05     │ Config Stop│ │ |
| │         │  │ 🔗 Stripe Payments      │ ●Running│  1% │  09:58     │ Config Stop│ │ |
| │         │  │ 📧 Email Notifications  │ ●Running│  0% │  09:14     │ Config Stop│ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  OrgDNA Package:  v1.3.0  \[ Export OrgDNA \]  \[ Clone to New Entity \]  │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  OrgKernel is the core runtime — all OrgApps communicate through it via standardised APIs

**②**  OrgDNA is the master configuration package — exportable/importable for cloning orgs or franchises

**③**  Stop/Config per app: Stop gracefully terminates the app; Config opens SCR-SYS-04

**SCR-SYS-02  OrgApp Marketplace**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ OrgSystem / OrgApp Marketplace                         \[✕ Close\]       │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │   OrgApp Marketplace                                                             │ |
| │   🔍 Search apps...   \[ Core Modules \] \[ Integrations \] \[ AI Agents \] \[ Industry\]│ |
| │   ─────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  ╔══════════════════╗  ╔══════════════════╗  ╔══════════════════╗               │ |
| │  ║ 📣 Marketing AI  ║  ║ 📦 Supply Chain  ║  ║ 🔗 QuickBooks    ║               │ |
| │  ║                  ║  ║   & Logistics    ║  ║   Sync           ║               │ |
| ║  ║ Auto-generate    ║  ║ Vendor orders,   ║  ║ Bi-directional   ║               │ |
| │  ║ social posts,    ║  ║ delivery track   ║  ║ accounting sync  ║               │ |
| │  ║ micropersonas    ║  ║ \+ IoT sensors    ║  ║ with QB Online   ║               │ |
| │  ║ & campaigns      ║  ║                  ║  ║                  ║               │ |
| │  ║ ★★★★½  (142)    ║  ║ ★★★★★  (88)     ║  ║ ★★★★  (312)    ║               │ |
| │  ║ $49/mo           ║  ║ $89/mo           ║  ║ $29/mo           ║               │ |
| │  ║ \[ Install \]      ║  ║ \[ Install \]      ║  ║ \[ Installed ✓ \] ║               │ |
| │  ╚══════════════════╝  ╚══════════════════╝  ╚══════════════════╝               │ |
| │                                                                                  │ |
| │  ╔══════════════════╗  ╔══════════════════╗  ╔══════════════════╗               │ |
| │  ║ 💬 Monday.com    ║  ║ 🧾 Stripe Pmt.   ║  ║ 🤖 HR Screening  ║               │ |
| │  ║   Sync           ║  ║ Processing       ║  ║   AI Agent       ║               │ |
| │  ║ \[ Install \]      ║  ║ \[ Installed ✓ \] ║  ║ \[ Install \]      ║               │ |
| │  ╚══════════════════╝  ╚══════════════════╝  ╚══════════════════╝               │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Installed apps show green ✓ badge and "Manage" button instead of Install

**②**  AI Agent apps have extra permission disclosure — what data they can read/write

**③**  Industry tab shows curated packs (e.g., Dry Cleaning Pack: all relevant modules bundled)

| MODULE J  ·  OrgExec & ODD Management |
| :---- |

Manage all OrgExecutors (humans, AI agents, hybrid systems) and their OrgDeviceDriver contracts that define how they operate within the OrgOS.

### **FLOW-J1  —  Define & Deploy an AI Agent OrgExec**

| Actor | Owner / Admin |
| :---- | :---- |
| **Time Target** | \< 15 minutes |
| **Description** | Owner configures a new AI Scheduling Agent with an ODD contract, grants permissions, and deploys it as an active OrgExec. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-EXEC-01** | OrgExec Registry | List | All OrgExecs: humans, AI agents, hybrid systems, physical devices (OrgCPUs). |
| **SCR-EXEC-02** | New OrgExec | Wizard | Type selection, name, role, ODD template assignment. |
| **SCR-EXEC-03** | ODD Editor | Form | Define device driver: capabilities, constraints, data access, rate limits. |
| **SCR-EXEC-04** | OrgExec Profile | Detail | Live status, task history, performance metrics, ODD compliance log. |

**SCR-EXEC-01  OrgExec Registry**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ OrgSystem / OrgExec Registry                      \[ \+ New OrgExec \]    │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ ⚙ System│  OrgExec Registry     👥 Humans: 8   🤖 Agents: 3   🔌 Devices: 4     │ |
| │ ▸ OrgExec│ ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ ODDs  │                                                                        │ |
| │         │  Type: \[All ▼\]   Status: \[Active ▼\]   ODD: \[All ▼\]                    │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ Name               │ Type   │ Role              │ ODD      │ Sts  │ │ |
| │         │  ├────────────────────┼────────┼───────────────────┼──────────┼──────┤ │ |
| │         │  │ 🧑 Bob Smith        │ Human  │ Owner / CEO       │ FTE-v2.1 │ ●Act │ │ |
| │         │  │ 👩 Alice Johnson    │ Human  │ Co-owner / COO    │ FTE-v2.1 │ ●Act │ │ |
| │         │  │ 🤖 UME-Agent-SCHED │ AI     │ Scheduling Agent  │ AI-SCH-1 │ ●Act │ │ |
| │         │  │ 🤖 UME-Agent-CUST  │ AI     │ Customer Comms AI │ AI-COM-1 │ ●Act │ │ |
| │         │  │ 🔌 Washer-\#1       │ OrgCPU │ Industrial Washer │ IOT-WM-1 │ ●Act │ │ |
| │         │  │ 🔌 POS-Terminal-01 │ OrgCPU │ Point of Sale     │ IOT-POS  │ ●Act │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  ODD Templates:  \[ Manage ODD Library \]                               │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  OrgCPUs (machines, IoT devices) appear in same registry as humans and AI — uniform interface

**②**  ODD column shows the contract version governing each executor — click opens ODD Editor

**③**  AI Agent row shows live CPU usage in parent OrgOS Control Panel

**SCR-EXEC-03  ODD Editor — AI Scheduling Agent**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ OrgSystem / ODDs / AI-SCH-1 v1.0                  \[ Save \] \[ Deploy \]  │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │  OrgDeviceDriver:  AI Scheduling Agent  (AI-SCH-1 v1.0)                         │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  IDENTITY                                                                        │ |
| │  Name: UME Scheduling Agent          Type: AI Agent  (LLM-powered)              │ |
| │  Description: Autonomous agent that optimises staff scheduling and               │ |
| │  order routing across the Operations and HR modules.                             │ |
| │                                                                                  │ |
| │  CAPABILITIES (what this OrgExec CAN do)                                        │ |
| │  ☑ Read: Order queue, staff availability, equipment status                      │ |
| │  ☑ Write: Create/update schedule assignments                                    │ |
| │  ☑ Notify: Send staff shift reminders via email/SMS                             │ |
| │  ☐ Write: Modify financial records  (disabled)                                  │ |
| │  ☐ Access: Customer payment data  (disabled)                                    │ |
| │                                                                                  │ |
| │  CONSTRAINTS (boundaries this OrgExec must respect)                             │ |
| │  Max task executions per hour:    200                                            │ |
| │  Working hours only:              ☑  Mon–Sun 06:00–22:00                        │ |
| │  Require human approval for:      Schedule changes \> 3 staff / shift            │ |
| │  Escalate to human if:            Conflicting rules cannot be resolved           │ |
| │                                                                                  │ |
| │  AUDIT                                                                           │ |
| │  All agent actions logged:  ☑ Yes   Retention: 12 months                       │ |
| │  Agent transparency log:    \[ View action history \]                             │ |
| │                                                                                  │ |
| │              \[ ◀ Back \]   \[ Test Agent \]          \[ Deploy OrgExec ──▶ \]        │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  ODD is the formal contract between this OrgExec and the OrgOS — governs all interactions

**②**  Capability checkboxes control data access permissions at the OrgKernel level

**③**  Constraints define operating boundaries — violated constraints raise ODD compliance alerts

**④**  "Test Agent" runs the agent in sandbox mode against sample data before live deploy

| MODULE K  ·  DAO & Distributed Ledger (DLT) |
| :---- |

Form and manage Decentralised Autonomous Organisations, inter-organisation smart contracts, distributed ledger transactions, and franchise networks.

### **FLOW-K1  —  Form a DAO for a Franchise Network**

| Actor | Owner / DAO Founder |
| :---- | :---- |
| **Time Target** | \< 30 minutes |
| **Description** | Bob and Alice formalise their franchise network as a DAO: define the parent org, invite franchisee organisations, publish the OrgDNA brand package, and deploy smart contract governance. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-DAO-01** | DAO Overview | Dashboard | Active DAOs, member organisations, ledger activity, treasury balances. |
| **SCR-DAO-02** | Create DAO Wizard | Wizard | DAO type, governance model, member invite, smart contract templates. |
| **SCR-DAO-03** | Smart Contract Editor | Form | Define inter-org contracts: royalties, brand standards, profit sharing. |
| **SCR-DAO-04** | OrgDNA Publisher | Form | Package and publish the parent OrgDNA for franchisees to clone. |
| **SCR-DAO-05** | DAO Member Network | Graph | Visual map of all member orgs, their status, and inter-org flows. |
| **SCR-DAO-06** | DLT Ledger Viewer | List | All inter-organisation transactions on the distributed ledger. |

  **SCR-DAO-01**  ──\[\[ \+ Form DAO \]\]──▶  **SCR-DAO-02**

  **SCR-DAO-02**  ──\[Define governance\]──▶  **SCR-DAO-03**

  **SCR-DAO-03**  ──\[Publish OrgDNA\]──▶  **SCR-DAO-04**

  **SCR-DAO-04**  ──\[Invite members\]──▶  **SCR-DAO-05**

**SCR-DAO-01  DAO Overview Dashboard**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ 🏢 BobAlice Franchise Group ▼              ⌨ Cmd+K  🔔  👤            │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🔐 DAO  │  DAO & Distributed Ledger                      \[ \+ Form New DAO \]      │ |
| │ ▸ Overview│ ──────────────────────────────────────────────────────────────────── │ |
| │ ▸ DAOs  │                                                                        │ |
| │ ▸ Contracts│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────┐ │ |
| │ ▸ Ledger│  │ Active DAOs  │ │ Member Orgs  │ │ Treasury     │ │ Pending   │ │ |
| │ ▸ OrgDNA│  │      1       │ │     7        │ │  $142,300    │ │  2 votes  │ │ |
| │         │  └──────────────┘ └──────────────┘ └──────────────┘ └───────────┘ │ |
| │         │                                                                        │ |
| │         │  BobAlice Dry Cleaning Franchise DAO                                   │ |
| │         │  ●Active   7 members   Est. Jan 2025   Governance: Majority Vote       │ |
| │         │  ─────────────────────────────────────────────────────────────────── │ |
| │         │                                                                        │ |
| │         │  Member Organisations                                                  │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ 🏢 Bob's Dry Cleaning (Parent)  ●Active  St. Louis MO   Founder  │ │ |
| │         │  │ 🏢 Clean Express KC             ●Active  Kansas City MO  Franchisee│ │ |
| │         │  │ 🏢 Fresh Press Columbia         ●Active  Columbia MO     Franchisee│ │ |
| │         │  │ 🏢 QuickClean Springfield       ●Active  Springfield MO  Franchisee│ │ |
| │         │  │ 🏢 Midwest Clean Co.            ⚠ Review Jefferson City  Pending  │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  Recent Ledger Activity:                                               │ |
| │         │  ● Nov 28 Royalty payment: Clean Express KC → Parent  $1,200 ✓        │ |
| │         │  ● Nov 25 Brand OrgDNA update v1.4 deployed to all members            │ |
| │         │                                                                        │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Each member org is an independent UME OrgOS — DAO connects them via smart contracts

**②**  Royalty payments executed automatically by smart contract on each franchisee's revenue cycle

**③**  OrgDNA updates: parent publishes new brand package → all members notified → can accept/review

**④**  Pending member: their franchise agreement smart contract awaiting multi-sig approval

**SCR-DAO-03  Smart Contract Editor**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ DAO / Smart Contracts / Franchise Agreement v2.0   \[ Save \] \[ Deploy \] │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │  Smart Contract:  Franchise Agreement  v2.0                                      │ |
| │  Parties:  BobAlice Franchise Group (Parent)  ⟷  All Franchisee Members         │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  CONTRACT TERMS  (visual builder — no code required)                             │ |
| │                                                                                  │ |
| │  ┌─────────────────────────────────────────────────────────────────────────┐    │ |
| │  │ ROYALTIES                                                               │    │ |
| │  │  Trigger:   Monthly revenue posted in franchisee Finance module         │    │ |
| │  │  Rate:      6% of gross monthly revenue                                 │    │ |
| │  │  Transfer:  Auto-debit franchisee treasury → parent treasury            │    │ |
| │  │  Ledger:    Record on DLT as ROYALTY\_PAYMENT                           │    │ |
| │  └─────────────────────────────────────────────────────────────────────────┘    │ |
| │                                                                                  │ |
| │  ┌─────────────────────────────────────────────────────────────────────────┐    │ |
| │  │ BRAND STANDARDS                                                         │    │ |
| │  │  OrgDNA version:  Must be within 1 major version of parent              │    │ |
| │  │  On breach:       Warning → 30-day cure period → membership suspended   │    │ |
| │  └─────────────────────────────────────────────────────────────────────────┘    │ |
| │                                                                                  │ |
| │  ┌─────────────────────────────────────────────────────────────────────────┐    │ |
| │  │ GOVERNANCE                                                              │    │ |
| │  │  Decisions: Majority vote (\>50%)  Quorum: 4 of 7 members               │    │ |
| │  │  Voting period: 7 days   Emergency: 24 hours (\>75% required)           │    │ |
| │  └─────────────────────────────────────────────────────────────────────────┘    │ |
| │                                                                                  │ |
| │  \[ \+ Add Clause \]  \[ Preview Legal Text \]  \[ Request Legal Review \]             │ |
| │                                                                                  │ |
| │              \[ ◀ Back \]                         \[ Deploy Contract ──▶ \]         │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Visual contract builder generates legally-informed smart contract without code knowledge

**②**  "Preview Legal Text" shows the human-readable contract document for legal review

**③**  Deploy writes contract to DLT — immutable, requires multi-sig from all parties

**SCR-DAO-06  DLT Ledger Viewer**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ DAO / Distributed Ledger                        \[ Export \] \[ Filter \]  │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🔐 DAO  │  Distributed Ledger  —  BobAlice Franchise DAO                         │ |
| │ ▸ Ledger│  ─────────────────────────────────────────────────────────────────── │ |
| │         │  🔍 Search transactions...   Type: \[All ▼\]   Org: \[All ▼\]              │ |
| │         │                                                                        │ |
| │         │  ┌────────┬───────┬──────────────────────┬─────────┬────────┬───────┐ │ |
| │         │  │ Block\# │ Time  │ Type                 │ From    │ To     │ Amt   │ │ |
| │         │  ├────────┼───────┼──────────────────────┼─────────┼────────┼───────┤ │ |
| │         │  │ \#10842 │ 09:00 │ ROYALTY\_PAYMENT      │ CleanKC │ Parent │$1,200 │ │ |
| │         │  │ \#10841 │ 08:45 │ ORGDNA\_UPDATE        │ Parent  │ All    │  —    │ │ |
| │         │  │ \#10840 │ Nov25 │ ROYALTY\_PAYMENT      │ FreshPr │ Parent │  $980 │ │ |
| │         │  │ \#10839 │ Nov20 │ CONTRACT\_AMENDMENT   │ Parent  │ All    │  —    │ │ |
| │         │  │ \#10838 │ Nov20 │ GOVERNANCE\_VOTE      │ All     │ All    │  —    │ │ |
| │         │  │ \#10837 │ Nov15 │ ROYALTY\_PAYMENT      │ QkClean │ Parent │$1,450 │ │ |
| │         │  └────────┴───────┴──────────────────────┴─────────┴────────┴───────┘ │ |
| │         │                                                                        │ |
| │         │  \[ Click any row to verify hash and view full transaction detail \]      │ |
| │         │                                                                        │ |
| │         │  Ledger Stats: 10,842 blocks  ·  Consensus: 7/7 nodes  ·  ✓ Healthy   │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  Every inter-org transaction recorded on immutable DLT — royalties, OrgDNA updates, votes

**②**  Block detail shows transaction hash, all signatories, and timestamp — full audit trail

**③**  Consensus indicator: all 7 member nodes must agree — shows real-time agreement status

| MODULE L  ·  Digital Twin — Software Defined Organisation (SDO) |
| :---- |

The SDO view is the meta-representation of the entire organisation as a living system. Visualise all running components, data flows, and organisational health in one unified view.

### **FLOW-L1  —  View & Optimise the Organisational Digital Twin**

| Actor | Owner / Executive |
| :---- | :---- |
| **Time Target** | \< 5 minutes |
| **Description** | Owner opens the SDO view, sees the full organisational topology, identifies a bottleneck in the order fulfilment flow, and launches an AI optimisation run. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-SDO-01** | SDO Overview | Dashboard | High-level org topology: modules, data flows, health indicators. |
| **SCR-SDO-02** | Flow Map | Diagram | Interactive diagram of all OrgApp data flows and dependencies. |
| **SCR-SDO-03** | SDO Analytics | Report | Org simulation: run what-if scenarios, optimisation suggestions. |

**SCR-SDO-01  Software Defined Organisation (SDO) — Overview**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ OrgSystem / Digital Twin                     \[ Run Simulation \] \[ AI \] │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ ⚙ System│  Bob's Dry Cleaning Co.  —  Digital Twin (SDO)   ●Live  Sync: 0.3s    │ |
| │ ▸ DigTwin│ ─────────────────────────────────────────────────────────────────── │ |
| │         │                                                                        │ |
| │         │    ┌──────────────┐         DATA FLOWS                                │ |
| │         │    │  OrgKernel   │◀════════════════════════════════════╗             │ |
| │         │    │   \[healthy\]  │════╗                                ║             │ |
| │         │    └──────────────┘    ║                                ║             │ |
| │         │          ║             ║                                ║             │ |
| │         │    ┌─────╩──┐    ┌────╩───┐    ┌────────┐    ┌────────╩┐            │ |
| │         │    │Finance │    │ HR &   │    │ Sales  │    │ Legal   │            │ |
| │         │    │●Running│◀──▶│ People │◀──▶│ & CRM  │◀──▶│& Comp.  │            │ |
| │         │    │  2%CPU │    │●Running│    │●Running│    │●Running │            │ |
| │         │    └────────┘    └────────┘    └────┬───┘    └─────────┘            │ |
| │         │         ║                           ║                                 │ |
| │         │    ┌────╩───┐    ┌─────────┐   ┌───╩────┐    ┌─────────┐            │ |
| │         │    │ Risk & │    │  Ops /  │   │  AI    │    │  DAO /  │            │ |
| │         │    │  GRC   │◀──▶│   ERP   │◀──│ Sched. │    │   DLT   │            │ |
| │         │    │●Running│    │⚠4% CPU  │   │●Active │    │●Running │            │ |
| │         │    └────────┘    └─────────┘   └────────┘    └─────────┘            │ |
| │         │                                                                        │ |
| │         │  OrgMemory (DLT):  10,842 blocks  ·  OrgDNA version: 1.3.0           │ |
| │         │  Org Health Score:  87 / 100   ⚠ Cash Runway KRI breach             │ |
| │         │  \[ View detailed flow map \]   \[ AI Optimisation Suggestions \]         │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  SDO is the live digital twin — every module shows real-time CPU, health, and data flow status

**②**  Data flow arrows represent inter-module event streams — click to see message volume

**③**  "AI Optimisation" runs the org through an LLM-powered simulation to identify improvements

**④**  OrgMemory (DLT) tracks immutable history of all inter-module and inter-org transactions

| MODULE M  ·  Settings & Administration |
| :---- |

User roles, permissions, integrations, audit log, billing, and OrgOS configuration.

### **FLOW-M1  —  User & Role Management**

| Actor | System Administrator |
| :---- | :---- |
| **Time Target** | \< 10 minutes |
| **Description** | Admin reviews users, creates a new custom role with scoped permissions, and assigns it to a new employee. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-SET-01** | Settings Hub | Dashboard | All settings categories in one view. Quick links to common tasks. |
| **SCR-SET-02** | User & Role Management | List | All users, roles, invitations, and activity log. |
| **SCR-SET-03** | Role Editor | Form | Define role name, module permissions (read/write/admin), custom constraints. |
| **SCR-SET-04** | Integration Settings | List | Connected third-party apps (Stripe, Monday, QuickBooks, etc.). |
| **SCR-SET-05** | Billing & Subscription | Detail | Current plan, usage metrics, invoice history, upgrade path. |

**SCR-SET-02  User & Role Management**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Settings / Users & Roles                     \[ \+ Invite User \]          │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ ⚙ Settings│  \[ Users \] \[ Roles \] \[ Invitations \] \[ Activity Log \]                │ |
| │         │  ─────────────────────────────────────────────────────────────────── │ |
| │         │                                                                        │ |
| │         │  🔍 Search users...                                                   │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ ☐ │ Name            │ Email                 │ Role      │ Status │ │ |
| │         │  ├───┼─────────────────┼───────────────────────┼───────────┼────────┤ │ |
| │         │  │ ☐ │ Bob Smith       │ bob@bobsdryclean.com  │ Owner     │ ●Active│ │ |
| │         │  │ ☐ │ Alice Johnson   │ alice@bobsdryclean.com│ Co-owner  │ ●Active│ │ |
| │         │  │ ☐ │ Marcus Thompson │ m.thompson@...        │ Staff     │ ●Active│ │ |
| │         │  │ ☐ │ Sara Kim        │ s.kim@...             │ Front Desk│ ●Active│ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| │         │                                                                        │ |
| │         │  ROLES                                  \[ \+ Create Role \]              │ |
| │         │  ┌──────────────────────────────────────────────────────────────────┐ │ |
| │         │  │ Role Name     │ Members │ Modules Access         │ Actions       │ │ |
| │         │  ├───────────────┼─────────┼────────────────────────┼───────────────┤ │ |
| │         │  │ Owner         │    1    │ All modules (full)     │ \[ Edit \]      │ │ |
| │         │  │ Co-owner      │    1    │ All modules (full)     │ \[ Edit \]      │ │ |
| │         │  │ Staff         │    5    │ HR, Ops, Sales (read+) │ \[ Edit \]      │ │ |
| │         │  │ Front Desk    │    2    │ Sales, CRM only        │ \[ Edit \]      │ │ |
| │         │  └──────────────────────────────────────────────────────────────────┘ │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  "+ Create Role" opens SCR-SET-03 Role Editor — granular per-module permissions

**②**  Activity Log tab: full audit of all settings changes with user, timestamp, before/after values

**③**  Invite: sends email with join link; pending invites show in Invitations tab with expiry

| MODULE N  ·  Work Board & Employee Portal |
| :---- |

Task management, sprint boards, employee self-service portal, and leave requests.

### **FLOW-N1  —  Employee Leave Request & Approval**

| Actor | Employee → Manager |
| :---- | :---- |
| **Time Target** | \< 24 hours |
| **Description** | Employee submits a leave request via portal, manager receives notification, reviews and approves. Leave balance auto-updated. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-PRT-01** | Employee Portal — Home | Dashboard | My tasks, upcoming shifts, leave balance, announcements, payslips. |
| **SCR-PRT-02** | Request Leave | Form | Leave type, date range, reason. Shows current balance impact. |
| **SCR-HR-08** | Manager Leave Inbox | List | Pending leave requests for team members. Approve / Decline. |
| **SCR-PRT-03** | Leave Calendar | Calendar | Team leave calendar view. Approved and pending leaves. |

  **SCR-PRT-01**  ──\[\[ Request Leave \]\]──▶  **SCR-PRT-02**

  **SCR-PRT-02**  ──\[Submit → manager notified\]──▶  **SCR-HR-08**

  **SCR-HR-08**  ──\[Approve → calendar updated\]──▶  **SCR-PRT-03**

**SCR-PRT-01  Employee Portal — Home**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │  My Portal  ·  Marcus Thompson                              👤 Settings │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  Good morning, Marcus  ☀   Week of Nov 25–Nov 29, 2024                          │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  ┌────────────────────────────┐  ┌─────────────────────────────────────────────┐│ |
| │  │ My Schedule This Week      │  │ Leave Balances                             ││ |
| │  │                            │  │ Annual Leave:      12.5 days               ││ |
| │  │ Mon  ████  8am–4pm         │  │ Sick Leave:         8.0 days               ││ |
| │  │ Tue  ████  8am–4pm         │  │ \[ Request Leave \]                          ││ |
| │  │ Wed  ────  Day off         │  └─────────────────────────────────────────────┘│ |
| │  │ Thu  ████  8am–4pm         │                                                  │ |
| │  │ Fri  ████  8am–4pm         │  ┌─────────────────────────────────────────────┐│ |
| │  └────────────────────────────┘  │ Recent Payslips                            ││ |
| │                                   │ Nov 15  $1,110.00  \[ View \] \[ Download \]   ││ |
| │  ┌─────────────────────────────┐  │ Oct 31  $1,110.00  \[ View \] \[ Download \]   ││ |
| │  │ My Tasks Today              │  └─────────────────────────────────────────────┘│ |
| │  │ ☐ Open shop — 8:00 AM      │                                                  │ |
| │  │ ☐ Process Sat drop-offs    │  Announcements                                   │ |
| │  │ ☐ Inventory count — noon   │  📣 Dec 5: Staff holiday party RSVP by Dec 1     │ |
| │  │ ☑ Signed new H\&S docs      │  📣 New: AI Scheduling Agent now managing shifts  │ |
| │  └─────────────────────────────┘                                                  │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Employee sees only their own data — portal is scoped by role (Staff ODD)

**②**  Schedule pulled from Operations module — AI Scheduling Agent manages assignments

**③**  Tasks linked to Work Board (SCR-WRK-01) — check-off here reflects there

**SCR-WRK-01  Work Board — Sprint Kanban**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Work / Sprint Board  ·  Week 48  Nov 25–Dec 01           \[ \+ New Task \] │ |
| ├─────────┬────────────────────────────────────────────────────────────────────────┤ |
| │ 🗂 Work  │  Sprint Board          Board: \[ Operations ▼ \]         \[ ≡ List View \] │ |
| │ ▸ Boards│  ─────────────────────────────────────────────────────────────────── │ |
| │ ▸ My Tasks│                                                                      │ |
| │         │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────┐ │ |
| │         │  │ 📋 BACKLOG   │ │ ▶ IN PROGRESS │ │ 👁 REVIEW    │ │ ✅ DONE   │ │ |
| │         │  │    (8)       │ │  WIP: 3/5     │ │    (2)       │ │   (12)    │ │ |
| │         │  ├───────────────┤ ├───────────────┤ ├───────────────┤ ├───────────┤ │ |
| │         │  │ 🟡 Quarterly  │ │ 🔴 Fix press  │ │ 🟢 Update    │ │ Equipment │ │ |
| │         │  │   inventory   │ │ machine \#2    │ │ staff manual │ │ audit ✓   │ │ |
| │         │  │ Assigned: MJ  │ │ Assigned: BJS │ │ Assigned: AJ │ │           │ │ |
| │         │  │ Due: Dec 10   │ │ Due: TODAY ⚠ │ │ Due: Nov 30  │ │ Safety    │ │ |
| │         │  ├───────────────┤ ├───────────────┤ ├───────────────┤ │ training ✓│ │ |
| │         │  │ 🟡 Update     │ │ 🟡 Review     │ └───────────────┘ │           │ │ |
| │         │  │ price list   │ │ supplier      │                   │ 10 more...│ │ |
| │         │  │ Assigned: SK  │ │ contracts     │                   └───────────┘ │ |
| │         │  │ Due: Dec 05   │ │ Assigned: AJ  │                                  │ |
| │         │  │               │ │ Due: Dec 01   │                                  │ |
| │         │  └───────────────┘ └───────────────┘                                  │ |
| └─────────┴────────────────────────────────────────────────────────────────────────┘ |

**①**  WIP limit shown on column header — exceeding limit highlights column red

**②**  Overdue task shows ⚠ TODAY badge in red — manager notified if still in progress

**③**  Cards draggable — dropping into DONE creates completion audit entry

| MODULE O  ·  Marketing |
| :---- |

Campaign management, micro-persona builder, social media content generation, and performance analytics.

### **FLOW-O1  —  Generate a Social Media Campaign**

| Actor | Owner / Marketing |
| :---- | :---- |
| **Time Target** | \< 15 minutes |
| **Description** | Owner uses the AI marketing assistant to generate social posts and campaign ideas targeted to dry cleaning micro-personas. |

#### **Screen Flow Sequence**

| Screen ID | Screen Name | Type | Description |
| :---- | :---- | :---- | :---- |
| **SCR-MKT-01** | Marketing Dashboard | Dashboard | Campaign KPIs, active campaigns, audience summary, content calendar. |
| **SCR-MKT-02** | Micro-Persona Builder | Form | Define target customer segments, demographics, behaviours, pain points. |
| **SCR-MKT-03** | AI Campaign Generator | AI Tool | Input persona \+ goal → AI generates posts, hashtags, taglines, campaign brief. |
| **SCR-MKT-04** | Content Calendar | Calendar | Schedule generated posts. Connect social accounts. Track engagement. |

**SCR-MKT-03  AI Campaign Generator**

| ┌──────────────────────────────────────────────────────────────────────────────────┐ |
| :---- |
| │ ▌ ume  │ Marketing / AI Campaign Generator                                       │ |
| ├────────────────────────────────────────────────────────────────────────────────  │ |
| │                                                                                  │ |
| │  🤖 AI Campaign Generator                                                        │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │  Target Persona:  \[ Busy Professional — St. Louis Metro ▼ \]  \[ \+ New Persona \]  │ |
| │  Campaign Goal:   \[ Drive new customer walk-ins           ▼ \]                   │ |
| │  Brand Tone:      \[ Professional yet approachable         ▼ \]                   │ |
| │  Channels:        ☑ Instagram   ☑ Facebook   ☐ TikTok   ☐ Twitter/X           │ |
| │                                                                                  │ |
| │  \[ ✨ Generate Campaign Content \]                                                │ |
| │  ─────────────────────────────────────────────────────────────────────────────   │ |
| │                                                                                  │ |
| │  Generated Content:                                         \[ Regenerate \]       │ |
| │                                                                                  │ |
| │  📸 Instagram Post 1:                                                             │ |
| │  "Life is too short for wrinkled suits. We turn rushed morning into             │ |
| │   boardroom ready — same-day service available. Drop off before 9AM,          │ |
| │   pick up by 5PM. 📍 \[Your Location\]"                                            │ |
| │  \#DryCleaning \#StLouis \#SameDayService \#BusinessReady                           │ |
| │                                                                                  │ |
| │  📘 Facebook Post:                                                                │ |
| │  "Don't let a stain derail your week. Bob's Dry Cleaning offers..."             │ |
| │                                                                                  │ |
| │  💡 Campaign Tagline: "Always Boardroom Ready."                                  │ |
| │                                                                                  │ |
| │  \[ ✓ Approve & Schedule \]  \[ Edit \]  \[ Save to Content Library \]                │ |
| │                                                                                  │ |
| └──────────────────────────────────────────────────────────────────────────────────┘ |

**①**  Micro-personas built from CRM customer data \+ market research — fed to AI as context

**②**  Generated content uses brand voice, business name, and location automatically from OrgDNA

**③**  "Approve & Schedule" pushes posts to SCR-MKT-04 Content Calendar for review before publish

