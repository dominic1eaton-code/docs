

**KOGI**

Independent Worker Operating System

**Product Requirements Document**

Problem Space · Market Opportunity · User Strategy · Product Vision

Version 1.0  ·  Product & Strategy

| Document Type | Product Requirements Document (PRD) |
| :---- | :---- |
| **Version** | 1.0 — Initial Release |
| **Status** | Active — In Review |
| **Document Owner** | Head of Product |
| **Key Stakeholders** | Engineering, Design, Operations, Legal, Finance |
| **Companion Docs** | Platform Requirements Specification (PRS v1.0) · LLSDS v0.1 · RFC-001 through RFC-008 |
| **Revision Cycle** | Quarterly review and update |

# **Table of Contents**

**1**  Executive Summary

**2**  Problem Statement

**3**  Market Opportunity & Sizing

**4**  Target Users & Personas

**5**  User Research Insights

**6**  Jobs to Be Done

**7**  Competitive Landscape

**8**  Product Vision & North Star

**9**  Strategic Pillars

**10**  Product Goals & Success Metrics

**11**  Feature Strategy & Prioritization

**12**  Module-by-Module Product Requirements

**13**  User Experience Principles

**14**  Go-to-Market Strategy

**15**  Risks & Mitigations

**16**  Assumptions & Open Questions

**17**  Appendix — Glossary

| 1  ·  OVERVIEW Executive Summary |
| :---- |

Independent workers — freelancers, gig workers, cooperatives, and autonomous organizations — are the fastest-growing segment of the global labor market. They are chronically underserved by software built for corporate employees.

Kogi is a unified operating system designed specifically for independent workers. Where others use a patchwork of disconnected apps — one for projects, one for invoicing, one for clients, one for their community — Kogi provides a single, deeply integrated platform that manages their entire professional and economic life.

This document defines the problem Kogi solves, who it solves it for, the size of the opportunity, and the specific product requirements that translate user needs into platform capabilities.

| Pillar | What Kogi Does | Why It Matters |
| :---- | :---- | :---- |
| Unified Portfolio | One place to manage all projects, assets, investments, and goals | Independent workers average 4–7 concurrent engagements; tracking them across apps creates cognitive overload and missed opportunities |
| Integrated Exchange | End-to-end payments, escrow, equity, and cooperative economics in one system | Freelancers lose 15–25% of project time to invoicing, payment chasing, and financial admin across fragmented tools |
| Democratic Capital | Built-in crowdfunding, capital pools, and cooperative ownership structures | Cooperative and collective business models are growing but have no software infrastructure purpose-built for them |
| AI-Augmented Work | An AI agent that understands your entire portfolio and works with you across every module | AI assistance today is surface-level; deeply contextual AI that understands your business holistically is a step-change |
| Worker-Owned Community | A social and collaboration layer governed by and for independent workers | Professional networks exist for employers and employees; independent workers lack a platform that represents their interests |

| 2  ·  PROBLEM Problem Statement |
| :---- |

## **2.1  The Core Problem**

"Independent workers run businesses as complex as small enterprises, with the tools of a part-time hobbyist."

The independent workforce — freelancers, gig workers, solopreneurs, cooperative members, and contributors to open-source or collective organizations — manages a professional life of enormous complexity. They juggle clients, projects, personal goals, financial planning, community relationships, and long-term asset building simultaneously. Yet the software ecosystem they rely on was never designed for them.

Independent workers inherit tools designed for corporations (Jira, Salesforce, Workday), tools designed for mass-market consumers (Google Docs, Notion, Venmo), and tools designed to extract maximum value from their labor (Upwork, Fiverr, Uber). None of these tools are designed to serve independent workers' own interests, and none of them work together.

## **2.2  Problem Decomposition**

| Problem Domain | Specific Pain Point | Current Workaround | Cost of Workaround |
| :---- | :---- | :---- | :---- |
| Portfolio Fragmentation | Work, personal goals, assets, and investments exist in different apps with no unified view of progress or health | Manual spreadsheets, Notion dashboards, or simply no tracking | 1–3 hours/week of manual updating; strategic decisions made without full context |
| Financial Complexity | Invoicing, escrow, equity, barter, revenue share, cooperative distributions — each requires a different tool or manual process | Stripe \+ QuickBooks \+ PayPal \+ manual spreadsheets \+ lawyer-drafted contracts | 15–25% of billable time; late payments common; equity tracking non-existent for most |
| Cooperative Blindspot | Worker-owned businesses, investment clubs, and collective organizations have no software infrastructure for their governance and economics | Paper bylaws \+ email votes \+ bank accounts \+ manual equity spreadsheets | Decision latency of days to weeks; disputes due to unclear records; cap table errors |
| AI Assistance Mismatch | AI tools today are general-purpose chat assistants; they have no knowledge of your portfolio, clients, projects, or goals | Copy-paste context into ChatGPT for each query; results are generic and low-quality | Time lost; low trust in AI output; missed opportunities for proactive automation |
| Community Isolation | Independent workers lack a professional community platform that understands and serves their specific context | LinkedIn (employer-centric), Discord (generic), Reddit (anonymous) | Career development stunted; collaboration and co-selling rare; network effects captured by platforms, not workers |
| Work Execution Gap | Freelancers manage complex client work without the project management infrastructure of corporate teams | Asana \+ Trello \+ Slack \+ Google Docs, none integrated with invoicing or portfolio | Context switching; client confusion; delivery quality inconsistency |
| Capital Access Deficit | Independent workers and cooperatives cannot raise capital through structures appropriate to their ownership model | Traditional VC (wrong model), crowdfunding platforms (general, not integrated with their work system) | Undercapitalized ventures; extractive equity terms; platform dependency |

## **2.3  Why Now**

* The independent workforce has grown to 1.57 billion workers globally and is projected to represent 50%+ of the US workforce by 2027\.

* AI capability has reached the threshold where a deeply contextual, portfolio-aware AI agent is technically feasible and genuinely useful — not a toy.

* Worker cooperative and collective ownership models are growing rapidly, driven by platform backlash and pandemic-era economic disruption.

* The next generation of platform infrastructure (WebSockets at scale, modern auth, vector databases for AI) has matured enough to build the unified platform at reasonable cost.

* No incumbent has established a dominant position in the "independent worker OS" category — the space is contested between point solutions, none of which are integrated.

| ⚠️  The Critical Gap The closest existing platform to Kogi's vision is a hypothetical combination of Notion \+ Stripe \+ GitHub \+ Upwork \+ Discord \+ Gnosis Safe. This combination requires 5+ subscriptions, 5+ context switches per day, and produces zero shared data between systems. Kogi replaces this entire stack with a single unified, AI-augmented platform where every module shares a common data model. |
| :---- |

| 3  ·  MARKET Market Opportunity & Sizing |
| :---- |

## **3.1  Total Addressable Market**

| Market Segment | Global Population | Relevant Subset | TAM (Annual SaaS \+ Transaction) |
| :---- | :---- | :---- | :---- |
| Freelancers & Independent Contractors | 1.57B globally | Tech-enabled, earning \>$15k/yr: \~120M | $48B — $400/yr SaaS × 120M |
| Gig Economy Workers (platform-based) | 750M globally | Gig workers seeking cooperative/worker-owned alternatives: \~50M | $10B — $200/yr SaaS × 50M |
| Small Business Owners (solo/micro) | 582M globally | Digital-first micro businesses: \~80M | $48B — $600/yr SaaS × 80M |
| Worker Cooperatives & Collectives | \~3M organizations globally | Tech-enabled, 5–500 members each: \~500K orgs | $3B — $600/yr per org × 500K |
| Open Source / AO Contributors | \~100M GitHub users | Active contributors seeking work infrastructure: \~15M | $3B — $200/yr × 15M |

| Market Level | Annual Revenue Opportunity | Notes |
| :---- | :---- | :---- |
| Total Addressable Market (TAM) | $112B+ | All independent workers globally, across all segments |
| Serviceable Addressable Market (SAM) | $28B | English-language, digital-first workers in North America, EU, Australia/NZ, and India |
| Serviceable Obtainable Market (SOM) — Y1–3 | $560M | 2% penetration of SAM; 1.4M paying users at $400/yr ARPU |
| SOM — Y4–6 | $2.8B | 10% SAM penetration; 7M users at $400/yr ARPU \+ 3% transaction revenue on $40B GMV |

## **3.2  Revenue Model**

| Revenue Stream | Description | Target Mix (Y3) |
| :---- | :---- | :---- |
| Subscription — Free | Personal portfolio, basic WBS, limited AI credits. Freemium acquisition driver. | 0% direct; acquisition cost offset |
| Subscription — Starter ($15/mo) | Full portfolio, WBS, Studio, Market access, standard AI credits. | 20% of revenue |
| Subscription — Pro ($35/mo) | All modules, advanced AI, Market seller, Exchange, unlimited automation. | 35% of revenue |
| Subscription — Team ($80/mo per team) | Pro for up to 10 members, shared workspace, governance tools. | 20% of revenue |
| Transaction Fees — Market | 2.5% platform fee on all market transactions (service, gig, product orders). | 15% of revenue |
| Transaction Fees — Exchange | 1% fee on escrow releases, 0.5% on cooperative distributions. | 8% of revenue |
| Enterprise & Cooperative | Custom pricing for AOs with 100+ members, SLA, dedicated support, data residency. | 2% of revenue (growing) |

## **3.3  Market Timing Rationale**

Three macro forces are converging to create the ideal conditions for Kogi's launch window:

| Force | Evidence | Kogi Opportunity |
| :---- | :---- | :---- |
| Platform Backlash | Uber, Lyft, Upwork, and Fiverr have all faced significant worker backlash over fee increases, algorithm opacity, and worker classification. Worker cooperative models have grown 40% since 2019\. | Kogi's cooperative-first architecture and worker-owned community model directly addresses this backlash. |
| AI Inflection Point | LLM capability crossed a threshold in 2023 where contextual AI assistance is genuinely useful (not a toy). Cost per token has dropped 90% in 18 months. | Deep portfolio-aware AI is now possible at a cost that fits inside a $35/mo subscription. |
| Remote Work Normalization | Remote work has normalized independent contracting across industries that previously required physical presence. 40% of knowledge workers now work independently some of the time. | Dramatically expands the TAM and makes digital-first work infrastructure essential rather than optional. |

| 4  ·  PERSONAS Target Users & Personas |
| :---- |

| P1  Jordan Chen Independent Technology Consultant |  |
| :---- | :---- |
| **Background** 34 years old, based in Austin TX. 8 years corporate experience, 4 years independent. Annual revenue: $240K across 4 concurrent client engagements. Manages a growing portfolio of consulting work, a SaaS product side project, a real estate investment, and a personal development program. | **Pain Points** Juggling 4 clients in 4 different project management systems (clients use Jira, Asana, Monday, Trello) Invoice tracking across 4 clients in QuickBooks; 2–3 payments always overdue No single view of total business health — how profitable is the SaaS side project vs consulting? AI tools don't know anything about my business; every query requires copy-pasting context |
| **Desired Outcomes** Unified workspace where all 4 clients' work is visible in one place Single invoicing and payment system that works regardless of how clients pay AI assistant that actually knows my portfolio and can answer "which client is most profitable?" A community of consultants I can refer work to and get referrals from | **Expected Plan & Modules** **Plan:** Pro ($35/mo) → Team (as business grows) **Primary Modules:** Market (seller), Exchange, WBS, Portfolio, AI Agent, Community |

| P2  Maria Santos Worker Cooperative Co-Founder |  |
| :---- | :---- |
| **Background** 41 years old, based in São Paulo, Brazil. Co-founder and member of a 35-person delivery worker cooperative. The cooperative is worker-owned, democratically governed, and currently manages logistics for local restaurants. Annual collective revenue: $1.2M, distributed among members. | **Pain Points** No software exists that handles cooperative governance AND financial distributions AND member task assignment in one place Proposal voting happens via WhatsApp messages; records are informal and disputed Member earnings calculations done manually in spreadsheets — error-prone and opaque Cannot raise capital through equity campaigns because the paperwork and infrastructure don't exist for cooperatives |
| **Desired Outcomes** One platform that handles governance (proposals, voting), payroll distributions, work assignment, and capital management Transparent, immutable records that all members can audit Ability to raise a membership-based campaign to fund a new fleet of vehicles AI that helps write governance proposals and calculates fair distributions | **Expected Plan & Modules** **Plan:** Team/Cooperative ($80/mo for org) **Primary Modules:** AO Governance, Exchange (distributions), Crowdfunding, Market, WBS, Community |

| P3  Devon Park Gig Worker & Side Project Builder |  |
| :---- | :---- |
| **Background** 26 years old, based in Seoul, South Korea. Full-time delivery gig worker (3 platforms), building a food photography side business. Income: $32K/yr gig \+ $8K/yr side business. Dreams of replacing gig work with the photography business in 2 years. | **Pain Points** No visibility into whether the photography business is actually growing or stagnating Gig income is volatile; hard to plan or save when income arrives across 3 apps Photography clients pay via Kakao Pay, bank transfer, and sometimes late — no system The business idea ("Korean street food photography agency") is in his head, not documented anywhere |
| **Desired Outcomes** A roadmap that shows the path from gig worker to full photography business owner Simple invoicing that works for informal Korean clients A place to capture and develop the business idea into a real plan with AI help Community of other side-project builders going through the same transition | **Expected Plan & Modules** **Plan:** Free → Starter ($15/mo) **Primary Modules:** Portfolio, Studio, Exchange, Market (seller), Community, WBS |

| P4  Priya Nair Collective Investment Club Organizer |  |
| :---- | :---- |
| **Background** 47 years old, based in London, UK. Organizes a 22-member real estate investment club that pools capital to acquire and manage rental properties. Club treasury: $340K. Annual distributions: \~$28K split across members based on equity stake. | **Pain Points** Capital pool tracking done in a shared Google Sheet; three members don't trust it Voting on new property acquisitions via email threads — quorum is unclear, records incomplete Distribution calculations are done by Priya manually, creates resentment and accusations of favoritism No formal equity cap table; member stakes recorded informally |
| **Desired Outcomes** A capital pool with immutable transaction history that all members can see Formal proposal and voting system with quorum enforcement and outcome recording Automated, transparent distribution calculations that nobody can dispute A proper cap table showing each member's stake, contribution history, and returns | **Expected Plan & Modules** **Plan:** Team/Cooperative ($80/mo for org) **Primary Modules:** AO Governance, Exchange (capital pool \+ distributions), Crowdfunding, Portfolio |

| 5  ·  RESEARCH User Research Insights |
| :---- |

## **5.1  Key Research Findings**

The following insights are synthesized from independent worker survey data, market research, and qualitative interview patterns observed across the independent worker segment.

| Finding | Data Point | Product Implication |
| :---- | :---- | :---- |
| Tool Fragmentation is Universal | Average independent worker uses 7.3 digital tools for their professional life. 84% report that switching between tools is a daily source of frustration. | Unified workspace with cross-module navigation is table-stakes, not a differentiator. |
| Financial Admin is the Biggest Time Sink | Independent workers spend an average of 8.3 hours/week on financial administration: invoicing, payment chasing, tax prep, and expense tracking. | Exchange module \+ AI automation must demonstrably reduce financial admin time. This is our strongest near-term value proposition. |
| AI Adoption is High but Trust is Low | 72% of independent workers use AI tools weekly, but only 31% trust AI output enough to use it without heavy verification. | AI Agent must be transparent (show sources and reasoning), conservative (ask before acting), and demonstrably contextual. Trust is built through accuracy, not impressive demos. |
| Cooperative Interest is Growing but Tooling Prevents Adoption | 61% of independent workers have "seriously considered" working as part of a cooperative or collective structure. 82% of those cite "lack of software tools" as the primary barrier. | AO and Cooperative modules are a differentiated market expansion opportunity with strong latent demand. Build them right; market them separately. |
| Community Matters More Than Expected | When asked to rank feature categories by importance, "professional community" ranked 2nd (behind payments, above project management) among workers with 3+ years of independence. | Community module is not a nice-to-have. It is a core retention driver and network-effect flywheel. |
| Mobile is Critical for Gig Workers, Optional for Consultants | Gig workers (P3 persona) primarily use mobile for work. Consultants (P1 persona) primarily use desktop/web. | Invest in mobile PWA before native app. Web client must be mobile-responsive on day one. |
| Onboarding Friction is a Major Barrier | 58% of users who try new productivity tools abandon them within 7 days. The primary reason cited: "couldn't see the value fast enough." | First-run experience must surface visible value within the first session. AI-guided onboarding and quick-win templates are essential. |

## **5.2  Unmet Needs by Persona**

| Persona | Top 3 Unmet Needs | JTBD Priority |
| :---- | :---- | :---- |
| P1 — Consultant | (1) Unified portfolio view  (2) AI that knows my business  (3) Easy invoicing from project context | High — full platform user; highest ARPU |
| P2 — Cooperative | (1) Governance tooling  (2) Transparent distributions  (3) Capital management | High — underserved market; strong B2B pricing signal |
| P3 — Gig Worker | (1) Transition planning support  (2) Simple payment collection  (3) Community/peer support | Medium — large volume; lower ARPU; freemium entry point |
| P4 — Investment Club | (1) Cap table management  (2) Formal voting records  (3) Automated distributions | High — strong willingness to pay for financial accuracy |

| 6  ·  JTBD Jobs to Be Done |
| :---- |

The following Jobs to Be Done (JTBD) framework identifies the core functional, emotional, and social jobs that Kogi hires itself to do for each primary persona. Product requirements are derived from these jobs.

## **6.1  Core Functional Jobs**

| Job Statement | Persona | Priority | Current Hire |
| :---- | :---- | :---- | :---- |
| When I need to know the health of my overall professional life, help me see all projects, financials, and goals in one unified view. | All | Critical | Spreadsheet or "nothing — I just keep it in my head" |
| When I complete work for a client, help me collect payment quickly with zero friction and full professional presentation. | P1, P3 | Critical | Stripe/PayPal \+ manual invoice creation |
| When I need to govern my cooperative's finances and decisions, help me run transparent proposals and fair distributions without disputes. | P2, P4 | Critical | Email \+ Google Sheets \+ lawyer |
| When I have a new business idea, help me capture it instantly and develop it into a validated plan without losing momentum. | P1, P3 | High | Notion \+ occasional ChatGPT |
| When my project is stuck or a resource is missing, help me find the right person or service immediately. | P1, P2 | High | LinkedIn \+ Upwork \+ personal network |
| When I need to understand whether a goal is on track, help me see real-time progress tied to the work I'm actually doing. | P1, P2 | High | Manual OKR spreadsheets or nothing |
| When I want to build a team or raise capital for a new venture, help me structure ownership and governance from the start. | P2, P4 | High | Lawyer \+ Quickbooks \+ email |
| When I'm planning my week or quarter, help me allocate time and effort intelligently across all my competing commitments. | All | High | Paper calendar \+ mental juggling |

## **6.2  Emotional & Social Jobs**

| Job Statement | Persona | Kogi Capability |
| :---- | :---- | :---- |
| When I feel isolated working alone, help me feel like I'm part of a professional community that understands my specific situation. | P1, P3 | Community module — Spaces, rooms, peer connections |
| When I'm in a financial dispute with a client, help me feel protected and give me a clear process to resolve it without a lawyer. | P1, P3 | Exchange module — escrow, dispute resolution |
| When I achieve a milestone, help me share it in a context where people understand what it means to run your own business. | All | Community module — portfolio highlights, achievement posts |
| When my cooperative members don't trust the financial records, help me make every number transparent and auditable. | P2, P4 | Exchange \+ AO module — immutable ledger, governance log |
| When I'm considering quitting gig work, help me feel like I have a real plan and visible progress toward something I own. | P3 | Portfolio \+ Studio \+ Work module — transition roadmap |

| 7  ·  COMPETITION Competitive Landscape |
| :---- |

## **7.1  Competitive Matrix**

No single competitor covers Kogi's full scope. The competitive threat is the combination of best-in-class point solutions, not a single platform.

| Capability | Kogi | Notion | Upwork/Fiverr | Stripe | QuickBooks | Gnosis Safe | Monday/Asana |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Unified Portfolio | ✅ Full | ⚠️ DIY only | ❌ | ❌ | ❌ | ❌ | ⚠️ Projects only |
| Integrated Payments | ✅ Full | ❌ | ⚠️ Platform-only | ✅ API only | ⚠️ Bookkeeping | ❌ | ❌ |
| Cooperative Governance | ✅ Native | ❌ | ❌ | ❌ | ❌ | ⚠️ Web3 only | ❌ |
| AI — Portfolio-Aware | ✅ Deep | ⚠️ Generic | ❌ | ❌ | ⚠️ Basic | ❌ | ⚠️ Basic |
| Marketplace | ✅ Integrated | ❌ | ✅ Standalone | ❌ | ❌ | ❌ | ❌ |
| Community / Social | ✅ Native | ❌ | ⚠️ Basic | ❌ | ❌ | ❌ | ⚠️ Team only |
| Idea Studio / Innovation | ✅ Native | ⚠️ DIY | ❌ | ❌ | ❌ | ❌ | ❌ |
| Worker-Owned Model | ✅ Core value | ❌ | ❌ Extractive | ❌ | ❌ | ⚠️ Decentralized | ❌ |

## **7.2  Competitive Moats**

| Moat Type | Description | Time to Build |
| :---- | :---- | :---- |
| Data Network Effects | The more portfolio, project, and financial data a user puts into Kogi, the better the AI recommendations, health scores, and market matches become. This data flywheel is impossible for a new entrant to replicate without years of user data. | 18–36 months |
| Community Network Effects | The professional community in Kogi becomes more valuable as more independent workers join. Referrals, collaborations, and marketplace liquidity all improve with scale — and are deeply integrated with the work and financial system. | 12–24 months |
| Cooperative Governance Infrastructure | Building AO governance, cap table management, and cooperative distributions is technically hard and legally complex. First mover in this space who gets it right builds a strong lock-in. | Now (differentiator in Year 1\) |
| Integrated Financial Rail | A payment, escrow, and distribution system that is deeply integrated with project and portfolio management creates switching costs that a standalone invoicing tool cannot create. | 6–12 months (launch to maturity) |
| AI Context Depth | An AI agent that has 12+ months of a user's full portfolio, project, financial, and community history is categorically more useful than a general-purpose LLM. This context depth takes time to accumulate and is non-transferable. | 12–24 months per user |

| 8  ·  VISION Product Vision & North Star |
| :---- |

## **8.1  Vision Statement**

| Kogi Platform Vision Kogi is the operating system for independent work — a platform where every person, cooperative, and autonomous organization can manage their complete professional and economic life: their projects, their money, their community, and their future. We build for the worker, not the employer. |
| :---- |

## **8.2  North Star Metric**

North Star: Weekly Active Portfolio Value (WAPV) — the aggregate economic value actively managed on the Kogi platform by weekly active users, measured in USD equivalent across all asset types (project value, capital under management, marketplace GMV, cooperative treasury).

This metric captures whether users are bringing their real economic activity to Kogi, not just their task management. It grows when users add more of their financial and professional life to the platform, which is the behavior that creates retention and network effects.

| Metric | Y1 Target | Y2 Target | Y3 Target |
| :---- | :---- | :---- | :---- |
| Weekly Active Portfolio Value (WAPV) | $500M | $2B | $8B |
| Monthly Active Users (MAU) | 50,000 | 250,000 | 1,000,000 |
| Monthly Recurring Revenue (MRR) | $750K | $4.5M | $18M |
| Gross Marketplace Volume (GMV) | $50M | $300M | $1.5B |
| Cooperatives & AOs Active | 500 | 5,000 | 25,000 |
| Net Revenue Retention (NRR) | ≥100% | ≥110% | ≥120% |
| User-Reported Time Saved vs. Prev. Stack | 4h/wk avg | 6h/wk avg | 8h/wk avg |

## **8.3  Product Principles**

* Worker-first: every product decision is evaluated from the worker's perspective, not the platform's extraction opportunity.

* Radical integration: modules must share data natively; an action in one module should update relevant state in all connected modules automatically.

* Progressive complexity: the simplest user flows must be extremely simple; advanced capabilities reveal themselves as users grow into them.

* Transparent AI: the AI agent shows its reasoning, cites sources, and asks permission before acting. Trust is earned through accuracy and transparency, not impressive presentations.

* Cooperative by default: collective ownership and democratic governance are not edge cases — they are first-class features with the same quality bar as individual user features.

| 9  ·  STRATEGY Strategic Pillars |
| :---- |

Kogi's product strategy is organized around five strategic pillars. Each pillar is supported by specific product capabilities and drives a distinct part of the growth and retention model.

| Pillar | One-Line Definition | Core Modules | Growth Mechanism |
| :---- | :---- | :---- | :---- |
| 1 — The Unified Portfolio | One place to see everything you are and everything you own | Portfolio, WBS, Studio, Work/OKR | Onboarding hook: "add your first project in 90 seconds." Breadth of portfolio creates retention through sunk cost and data value. |
| 2 — The Integrated Economy | Every financial transaction from invoice to distribution in one system | Exchange, Market, Crowdfunding | Transaction revenue flywheel: more users → more marketplace liquidity → more GMV → more transaction revenue → better AI recommendations → more users. |
| 3 — Democratic Capital | The only platform purpose-built for cooperative and collective ownership | AO Governance, Crowdfunding, Exchange (distributions) | Cooperative adoption creates organizational-level subscriptions (B2B pricing), higher NRR, and word-of-mouth within cooperative networks. |
| 4 — Contextual AI | An AI agent that knows your entire professional life | AI Agent (all modules) | AI quality improves with data depth, creating compounding advantage for long-tenure users and making the platform genuinely hard to leave. |
| 5 — The Worker Community | A professional network built for and governed by independent workers | Community, Market (discovery), Social Graph | Community creates organic acquisition (referrals), reduces churn (social ties), and drives marketplace liquidity (worker-to-worker commerce). |

## **9.1  Pillar Sequencing**

Not all pillars are equal in launch priority. The sequencing below is driven by which capabilities create the most immediate user value and which create the network effects that fuel later pillars.

| Phase | Timeline | Pillars Active | Milestone |
| :---- | :---- | :---- | :---- |
| Phase 1 — Anchor | Launch to Month 6 | 1 (Unified Portfolio) \+ 4 (AI, basic) | 1,000 paying users; avg. 3+ portfolio items per user; D30 retention ≥ 40% |
| Phase 2 — Economy | Month 4–12 | 2 (Integrated Economy) full launch | $1M GMV in first 60 days of marketplace; 25% of users connect a payment method |
| Phase 3 — Community | Month 6–18 | 5 (Worker Community) | 100 active Spaces; 10,000 community-sourced referrals in first 6 months |
| Phase 4 — Cooperative | Month 12–24 | 3 (Democratic Capital) full launch | 200 cooperatives active; $10M cooperative capital under management |
| Phase 5 — Flywheel | Month 18+ | All pillars integrated; AI quality compounds | NRR \> 110%; WAPV growing 20% MoM; organic acquisition \> paid acquisition |

| 10  ·  METRICS Product Goals & Success Metrics |
| :---- |

## **10.1  Acquisition Metrics**

| Metric | Definition | Y1 Target | Measurement |
| :---- | :---- | :---- | :---- |
| Monthly New Signups | New accounts created per month | 5,000 → 15,000 by M12 | auth-svc event: user.registered |
| Paid Conversion Rate | % of free users who upgrade within 60 days | 15% | Subscription events |
| CAC (Blended) | Total S\&M spend / new paid users in period | \< $80 | Finance dashboard |
| Organic vs. Paid Ratio | % of signups from organic sources (community, referral, SEO) | 40% organic by M12 | UTM tracking \+ attribution model |
| Time to First Value | Time from signup to first meaningful action (1st portfolio item created) | \< 5 minutes median | Product analytics funnel |

## **10.2  Engagement Metrics**

| Metric | Definition | Target | Measurement |
| :---- | :---- | :---- | :---- |
| Daily Active Users / MAU (DAU/MAU) | Stickiness ratio — what fraction of monthly users are daily | \> 35% | Session events |
| Weekly Active Portfolio Value (WAPV) | Aggregate economic value managed by WAUs | $500M Y1 → $8B Y3 | Portfolio \+ Exchange combined metric |
| Modules per Active User | Average number of distinct modules used per WAU | \> 3 by M6; \> 4 by M12 | Module engagement events |
| AI Agent Weekly Usage Rate | % of Pro+ users who use AI Agent at least once per week | \> 60% | ai.session.created events |
| Marketplace Transaction Rate | % of Market-enabled users who complete at least 1 transaction per month | \> 20% | market.order.completed events |
| Community Participation Rate | % of users who post, reply, or react at least once per week | \> 40% | Community engagement events |

## **10.3  Retention Metrics**

| Metric | Definition | Target |
| :---- | :---- | :---- |
| D7 Retention | % of new users still active 7 days after signup | \> 45% |
| D30 Retention | % of new users still active 30 days after signup | \> 30% |
| M3 Retention (paying) | % of new paying users still paying at month 3 | \> 75% |
| M12 Retention (paying) | % of new paying users still paying at month 12 | \> 60% |
| Net Revenue Retention | Revenue retained \+ expanded / starting ARR | \> 100% (Y1), \> 110% (Y2+) |
| Churn Rate (monthly) | % of paying users who cancel per month | \< 4% monthly |
| Resurrection Rate | % of churned users who return within 90 days | \> 15% |

| 11  ·  FEATURES Feature Strategy & Prioritization |
| :---- |

## **11.1  MoSCoW Framework — v1.0 Launch**

Features are classified as Must Have (launch blocker), Should Have (strong v1.0 value), Could Have (v1.x if capacity allows), or Won't Have (explicitly deferred to v2+).

| Feature | Category | Effort | Rationale |
| :---- | :---- | :---- | :---- |
| Workspace \+ Account provisioning | Must Have | M | Foundation for all other features; no platform without it |
| Portfolio hierarchy (Program/Project/Resource) | Must Have | L | Core value prop; onboarding anchor |
| WBS with Kanban and Agile board views | Must Have | L | Task execution; needed for consultant persona (P1) |
| Exchange — invoicing and payment collection | Must Have | L | Strongest near-term value prop; financial pain is universal |
| Exchange — Escrow for market transactions | Must Have | L | Required for safe marketplace operation |
| Market — Listings and gig/service orders | Must Have | L | Transaction revenue; marketplace network effect |
| AI Agent — basic chat with portfolio context | Must Have | M | Differentiator; required for Pro tier value |
| Community — Spaces and threaded rooms | Must Have | M | Retention driver; acquisition channel |
| Idea Studio — capture and concept stage | Should Have | M | Strong for P3 (gig → entrepreneur) persona |
| Work — OKRs with story linkage | Should Have | M | Valuable for P1; differentiates from basic PM tools |
| Work — Automation rules | Should Have | M | Pro tier value; reduces manual work |
| AI Agent — autonomous actions (create story, search market) | Should Have | L | Fulfills "AI that works with you" promise |
| Crowdfunding — reward \+ donation campaigns | Should Have | L | Enables capital pillar; cooperative use case entry point |
| AO Governance — basic proposal \+ voting | Should Have | L | Cooperative persona (P2, P4) retention; differentiated |
| Idea Studio — full 5-stage pipeline | Could Have | L | Complex; valuable but not launch-critical |
| Exchange — cooperative distributions | Could Have | M | High value for P2/P4 but niche at launch |
| AO Governance — full charter \+ cap table | Could Have | L | Important for cooperative launch; deferred if timeline slips |
| Native mobile app (iOS/Android) | Could Have | XL | PWA covers mobile for launch; native in Y2 |
| Enterprise SSO \+ audit logs | Won't Have (v1) | M | Y2 enterprise motion |
| Third-party plugin marketplace | Won't Have (v1) | XL | Platform maturity required first |
| Blockchain/on-chain governance anchoring | Won't Have (v1) | L | Deferred; not core user need at launch |

## **11.2  v1.0 Release Scope Summary**

| Module | v1.0 Status | Key Deferred Items |
| :---- | :---- | :---- |
| User & Workspace | Complete | Enterprise SSO |
| Portfolio | Complete | Portfolio sharing link (v1.x) |
| WBS & Stories | Complete | GitHub integration (v1.x) |
| Market | Complete | RFP listings (v1.x) |
| Exchange | Partial — fiat \+ escrow \+ credits | Equity, revenue-share, full distributions (v1.x) |
| Idea Studio | Partial — stages 1–3 | Stages 4–5 (prototype \+ design) in v1.x |
| Community | Complete | Video rooms \> 10 participants (v1.x) |
| Work / OKRs | Complete | Advanced capacity planning (v1.x) |
| Crowdfunding | Partial — reward \+ donation | Equity campaign (v1.x — requires legal clearance) |
| AO Governance | Partial — proposals \+ voting | Full charter builder, cap table (v1.x) |
| AI Agent | Partial — chat \+ basic actions | Full autonomous action suite (v1.x) |

| 12  ·  MODULES Module-by-Module Product Requirements |
| :---- |

Each module below is specified at the product requirements level: user goals, key user flows, acceptance criteria, and success metrics. Technical implementation is covered in the Platform Requirements Specification (PRS) and LLSDS companion documents.

## **12.1  Portfolio System**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| See everything I'm working on in one place | Sign in → Dashboard → View Portfolio summary with item count, health score, and recent activity | Portfolio dashboard loads in \< 2 seconds with all items visible |
| Organize my work by domain (business, personal, investments) | Create Portfolio → Add item → Assign domain tag → Filter by domain | User can filter portfolio by domain and see only relevant items |
| Share a professional overview with a potential client | Portfolio item → Set visibility=Public → Copy shareable link → Share with client | Shared link opens read-only view without requiring recipient to create account |
| Know if my overall business is healthy | View health score → Drill into score breakdown → See which items are dragging score | Health score updates within 24h of significant status changes; drill-down explains each factor |

## **12.2  Market System**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Find and hire a specialist when a project is stuck | Story marked BLOCKED → AI surfaces relevant Market listings → Review listings → Place order → Story automatically linked to order | Time from block to first relevant listing displayed \< 10 seconds |
| List my services and get hired | Profile complete → Create Listing → Set pricing and availability → Listing goes live → Receive inquiry → Accept order | Time from profile complete to first active listing \< 5 minutes |
| Get paid safely for completed work | Accept order → Complete work → Submit delivery → Buyer approves → Funds released to wallet | Escrow release occurs within 30 minutes of buyer approval; no manual intervention required |
| Discover new client opportunities | Browse Market Home → View AI-recommended listings for my skill profile → See "Opportunities" for my expertise | Recommendation relevance rating \> 4/5 in user feedback; CTR on recommendations \> 15% |

## **12.3  Exchange System**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Get paid by a client without a paper invoice | Complete project story → Generate invoice in 1 click → Send payment link → Client pays → Funds in wallet | Invoice generated and sent in \< 60 seconds; payment link works without client signup |
| Distribute cooperative earnings to members fairly | AO Capital Pool balance → Create distribution → System calculates each member's share → Members approve (governance) → Funds distributed | Distribution calculation is auditable; every member can verify their own allocation |
| Manage a shared investment pool with full transparency | Create Capital Pool → Members contribute → View immutable transaction log → Propose withdrawal → Vote → Execute | Every member sees same balance at all times; no discrepancies possible from UI |

## **12.4  Idea Studio**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Capture a business idea in under 10 seconds without losing momentum | Tap "Capture" anywhere in app → Type/speak idea → Auto-saved → Return to work | Capture flow has max 2 taps from anywhere in the app; no required fields |
| Develop an idea into a validated plan with AI help | Open captured idea → AI generates synthesis (problem, market, viability) → User reviews → Fills in Business Model Canvas template | AI synthesis complete within 60 seconds of advancing to Concept stage; user rates synthesis quality ≥ 4/5 |
| Protect my invention before disclosing to others | Complete idea description → Request IP timestamp → System creates signed, timestamped record → Download certificate | IP timestamp generated and available for download within 30 seconds |

## **12.5  AI Agent**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Get help with my specific business without re-explaining everything each time | Open AI chat → Ask "which of my projects is most at risk?" → Agent reads portfolio and responds with specific project names and risk factors | Agent correctly identifies at-risk projects using actual portfolio data in \> 85% of test cases |
| Automate repetitive work tasks without programming | Open Automation settings → "When a story is blocked for 24h, search market for relevant providers" → Enable → Test | Automation triggers correctly in \> 95% of valid trigger conditions |
| Get a heads-up before problems become crises | Receive alert: "Milestone X is 3 days from deadline with 40% of stories not done" → Click → See milestone status → Take action | Alert fired before deadline in \> 99% of cases; false positive rate \< 10% |

## **12.6  Community & Social**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Find and connect with other independent workers in my industry | Browse Spaces → Discover relevant spaces by tag/industry → Join → Introduce self → Get replies within 24h | Discovery returns relevant Spaces in \< 2 seconds; new member posts receive ≥ 1 reply within 24h (community health metric) |
| Refer work to trusted colleagues and get referrals back | Connect with colleague → Their market listings visible to me → Refer a client → Track referral outcome | Referral tracking shows conversion from referral to paid order; referrer notified on completion |
| Collaborate on a project with a distributed team | Create Project Space → Invite team → Assign stories in WBS → Discuss in linked Room → Real-time updates | Story status updates appear in linked Room within 30 seconds; no page refresh required |

## **12.7  AO Governance**

| User Goal | Key User Flow | Success Criterion |
| :---- | :---- | :---- |
| Form a cooperative without a lawyer | Create AO → Select charter template (e.g. worker cooperative) → Configure governance params → Invite founding members → Ratify charter by vote | Time from "Create AO" to first governance vote \< 30 minutes with template |
| Run a transparent member vote on a major decision | Draft proposal → Submit → Members notified → Voting window opens → Members vote → Outcome recorded → Downstream action executed | Outcome recorded within 5 minutes of voting close; downstream actions (e.g. capital transfer) execute within 1 hour of passed vote |
| Know that our governance records are permanent and auditable | View Governance Log → See every proposal, every vote, every outcome since founding → Export full history | Governance log is append-only; no admin can delete or modify records; full export available in CSV and JSON |

| 13  ·  DESIGN User Experience Principles |
| :---- |

| Principle | Description | Product Implication |
| :---- | :---- | :---- |
| Progressive Disclosure | Surface only what the user needs for their current task. Reveal advanced capabilities as the user grows. | Onboarding shows 3 features. Dashboard defaults to simple view. Advanced settings behind an "Advanced" toggle. |
| Zero-Friction Capture | Any idea, task, or data point must be capturable in \< 3 taps/clicks. No required fields for capture. | Global "+" button accessible from every screen. Idea capture has 0 required fields. Voice capture first-class. |
| Radical Transparency | Users must always be able to see the data behind any number, score, or AI-generated recommendation. | Health score → drill-down to factors. AI recommendation → "Why was this recommended?" link. Ledger entries → always viewable. |
| Cooperative-First Design | Governance, shared ownership, and collective decision-making must be as polished as individual features. Co-op users are not second-class users. | Every financial feature has a "shared/cooperative" mode. Governance features in main navigation, not buried in settings. |
| Calm Technology | The platform should reduce cognitive load, not add to it. Notifications must be actionable and minimal. | Default notification settings are conservative. AI alerts are batched into a daily digest by default. No empty states with "add more content\!" nudges. |
| Mobile-Responsive First | The web application must be fully functional on mobile viewport from day one. | All flows designed mobile-first. No feature can be "desktop only" at launch. |
| Dark Mode First | Kogi's default visual theme is dark mode, reflecting the "operator/professional" tone of the platform. | Dark theme is the default. Light mode available as an accessibility and preference option. |

## **13.1  Onboarding Critical Path**

The first session is make-or-break for a productivity platform. The critical path below must be achievable in under 5 minutes for a new user.

1. Create account (OAuth or email). Provisioning of workspace \+ portfolio is automatic — user never sees a loading spinner.

2. Persona selection (30 seconds): "What best describes you?" (Freelancer / Cooperative member / Side project builder / Investment club). Selection pre-configures the workspace template and surfaces relevant module onboarding.

3. First portfolio item (90 seconds): "What are you working on right now?" — one text field, one tag, done. Item appears immediately in portfolio.

4. First AI interaction (60 seconds): AI Agent says "I've set up your workspace. Here's what I see..." — contextual summary based on the item they just added. One follow-up question from AI that demonstrates contextual awareness.

5. One optional step: "Add a payment method to send your first invoice" — for users who select Freelancer persona.

| 14  ·  GO-TO-MARKET Go-to-Market Strategy |
| :---- |

## **14.1  Launch Segments (Prioritized)**

| Segment | Why First | Acquisition Channel | Conversion Hook |
| :---- | :---- | :---- | :---- |
| Tech Freelancers (P1 persona) | Tech-savvy, high ARPU ($35+/mo), vocal online community, already paying for multiple tools Kogi replaces | Developer community (HackerNews, DevTo, GitHub), LinkedIn, SEO for "freelance developer tools" | Free tier with immediately useful portfolio \+ WBS; upgrade path to Pro is natural when adding Market or Exchange |
| Worker Cooperative Networks | Unaddressed market; strong word-of-mouth within coop networks; high org-level ARPU; mission alignment | National Center for Employee Ownership (NCEO), US Federation of Worker Cooperatives (USFWC), direct partnerships | Free org trial; governance demo targeting cooperative pain point (\#1: transparent distributions) |
| Side Project Community | Large volume; enthusiastic sharers; strong organic acquisition potential via "built with Kogi" badge and portfolio sharing | Product Hunt, Indie Hackers, Twitter/X, Reddit (r/entrepreneur, r/SideProject) | Free tier forever for hobbyists; upgrade trigger: "Want AI to help develop your idea?" |
| Investment / Real Estate Clubs | High willingness to pay for financial accuracy; strong word-of-mouth in investor networks; P4 persona | Real estate investor communities (BiggerPockets), angel investor groups, direct outreach | Free org trial; capital pool demo targeting pain point (\#1: transparent records) |

## **14.2  Pricing Strategy**

| Tier | Price | Target Persona | Key Value |
| :---- | :---- | :---- | :---- |
| Free | $0/mo | P3 (Gig worker), hobbyist, side project builder | Portfolio \+ basic WBS \+ Idea Studio stages 1–2 \+ Community \+ limited AI credits (20/mo). Permanent free tier to maximize top of funnel. |
| Starter | $15/mo | P3 growing, early P1 | Full Portfolio \+ WBS \+ Studio all stages \+ Market (buyer) \+ basic Exchange \+ 200 AI credits/mo. First paid tier. |
| Pro | $35/mo | P1 (Consultant), serious independent worker | Everything \+ Market (seller) \+ full Exchange \+ Automation \+ 2000 AI credits/mo \+ priority support. |
| Team | $80/mo (up to 10 seats) | Small team, early cooperative | Pro for up to 10 members \+ shared workspace \+ basic governance \+ team Analytics. |
| Cooperative / AO | $200/mo (up to 50 members; \+$3/member above 50\) | P2 (Cooperative), P4 (Investment club) | Full AO governance \+ Capital Pool \+ distributions \+ unlimited members \+ dedicated onboarding. |
| Enterprise | Custom | Large org, enterprise freelancer network | SSO \+ data residency \+ SLA \+ dedicated success manager \+ custom integrations. |

| 15  ·  RISKS Risks & Mitigations |
| :---- |

| Risk | Likelihood | Impact | Mitigation |
| :---- | :---- | :---- | :---- |
| Financial regulatory complexity causes Exchange launch delay or scope reduction | High | Critical | Engage fintech legal counsel early; launch with Stripe-only fiat path (no equity, no complex instruments) in v1.0; add complex value types post-legal clearance |
| AI Agent quality is perceived as "generic" and fails to differentiate | Medium | High | Invest heavily in portfolio context injection for all AI prompts; instrument and track AI quality scores; create dedicated AI quality team; ship AI features only when context quality is demonstrably better than GPT-4 with no context |
| Cooperative/AO module adoption is slower than projected | Medium | Medium | Separate GTM motion for cooperative segment; partnerships with cooperative federations; free org tier for qualified cooperatives; don't block overall growth on cooperative adoption |
| Marketplace liquidity problem (chicken-and-egg: need buyers and sellers simultaneously) | High | High | Seed with invited supply (50–100 vetted providers pre-launch); launch with geographic and category focus; buyer-first acquisition to create demand before broad seller onboarding |
| Data privacy incidents erode user trust | Low | Critical | Privacy-by-design architecture; annual third-party security audit; breach response plan; data residency options for EU users; transparent privacy policy and security page |
| Incumbent responds with integrated offering (e.g. Notion adds payments, Stripe adds project management) | Medium | Medium | Kogi's moat is data integration depth, not feature breadth. An incumbent adding a feature doesn't replicate Kogi's cross-module data model. Focus on compounding data network effects. |
| Platform complexity overwhelms new users; onboarding funnel abandonment is high | High | High | Radical progressive disclosure; persona-based onboarding templates; user testing for onboarding flow before launch; D7 retention as primary engineering KPI for first 6 months |

| 16  ·  ASSUMPTIONS Assumptions & Open Questions |
| :---- |

## **16.1  Key Assumptions**

| Assumption | Confidence | Validation Method | If Wrong |
| :---- | :---- | :---- | :---- |
| Independent workers will pay $35/mo for a unified platform if it demonstrably saves 4+ hours/week | High | Pricing survey \+ beta user interviews \+ paid beta conversion rate | Drop to $25/mo Pro; strengthen free → paid conversion flow |
| A marketplace seeded with 50 high-quality providers will achieve sufficient liquidity at launch | Medium | Measure D30 buyer-to-order conversion rate; track time-to-first-match | Expand provider onboarding; introduce "request for proposal" as a demand signal before supply is ready |
| AI agents with deep portfolio context will be meaningfully better than general-purpose AI tools | High | A/B test: same queries with/without portfolio context; measure user satisfaction rating | Invest in more sophisticated context injection; consider fine-tuned model layer on top of base LLM |
| Cooperative organizations will adopt a new software platform despite inertia toward established tools | Medium | Pilot with 10 cooperatives; measure 30-day retention and "would recommend" score | Create a 1-click import from existing cooperative tools; invest in migration tooling |
| Workers will use Kogi as their primary community platform, not just as a work tool | Medium | Track community DAU/MAU ratio; survey community quality perception at M3 | Accelerate community flywheel: invest in community editorial, curated Spaces, and featured member programs |

## **16.2  Open Questions**

| Question | Owner | Decision Deadline | Options Under Consideration |
| :---- | :---- | :---- | :---- |
| Should equity-based crowdfunding be in v1.0 or deferred? | Legal \+ Product | Pre-launch | (A) Launch with Reg CF compliance in v1.0 — high regulatory risk. (B) Defer equity campaigns to v1.x with dedicated legal clearance — recommended. |
| Should the AI Agent have a persistent memory across sessions by default, or opt-in? | Product \+ Privacy | 3 months pre-launch | (A) Persistent by default — better AI quality, privacy concern. (B) Opt-in — lower quality by default, stronger trust signal. |
| What is the right balance between community moderation (platform) vs. community governance (members)? | Product \+ Legal | 3 months pre-launch | (A) Platform-moderated: faster, lower quality risk. (B) Member-governed: consistent with cooperative values, higher operational risk. |
| Should Kogi own the payment rail or white-label Stripe Connect? | Engineering \+ Legal | Now | (A) Own rail — higher margin, massive regulatory burden. (B) Stripe Connect — lower margin, immediate compliance, faster launch. Recommend (B) for v1.0. |

| 17  ·  GLOSSARY Appendix — Glossary |
| :---- |

| Term | Definition |
| :---- | :---- |
| AO (Autonomous Organization) | A Kogi entity with its own charter, capital pool, governance system, and member network. |
| ARPU | Average Revenue Per User — annual subscription \+ transaction revenue divided by active user count. |
| CAC | Customer Acquisition Cost — total sales and marketing spend divided by new paying customers in a period. |
| Cooperative | A member-owned organization with democratic governance; a specific type of AO. |
| DAU/MAU | Daily Active Users divided by Monthly Active Users — a "stickiness" ratio. |
| Escrow | Funds held by the Exchange System on behalf of two parties pending delivery confirmation. |
| GMV | Gross Marketplace Volume — total transaction value flowing through the Kogi marketplace. |
| JTBD | Jobs to Be Done — a framework for understanding customer motivation by the "job" they hire a product to accomplish. |
| MoSCoW | Must Have / Should Have / Could Have / Won't Have — a feature prioritization framework. |
| NRR | Net Revenue Retention — revenue retained and expanded from existing customers over a period (\>100% \= growth within existing base). |
| North Star Metric | The single most important metric that best captures whether the product is creating value for users. |
| OKR | Objectives and Key Results — a goal-setting framework. |
| PRD | Product Requirements Document — this document. |
| Pillar | One of Kogi's five strategic product areas: Unified Portfolio, Integrated Economy, Democratic Capital, Contextual AI, Worker Community. |
| Portfolio | The root organizational unit in Kogi — a container for all of a user's or organization's work, assets, and goals. |
| TAM / SAM / SOM | Total Addressable Market / Serviceable Addressable Market / Serviceable Obtainable Market — market sizing framework. |
| WBS | Work Breakdown Structure — a hierarchical decomposition of work into executable stories and tasks. |
| WAPV | Weekly Active Portfolio Value — Kogi's North Star Metric; total economic value managed by weekly active users. |

**Kogi Platform — Product Requirements Document**

Version 1.0  ·  Product & Strategy  ·  Confidential