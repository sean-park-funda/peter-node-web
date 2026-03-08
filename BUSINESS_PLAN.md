# Peter Node — Business Plan

**OpenClaw Inc.**
March 2026 | Confidential

---

## 1. Executive Summary

Peter Node is an enterprise autonomous AI agent delivered as a turnkey hardware-software appliance built on the Apple Mac Mini M4. It solves the most pressing barrier to AI adoption in regulated industries: **data never leaves the customer's premises**. Unlike cloud-based AI assistants that require sensitive corporate data to traverse third-party servers, Peter Node operates entirely within the customer's network perimeter, providing persistent memory, a modular skill system, voice interface, and deep integrations with enterprise tools — all pre-configured and ready to deploy in under 30 minutes.

OpenClaw, the company behind Peter Node, targets CISOs and CTOs at mid-size enterprises in finance, healthcare, defense, and legal sectors who face a binary choice today: adopt cloud AI and accept data-sovereignty risk, or forgo AI productivity gains entirely. Peter Node eliminates that trade-off. With a SaaS subscription model layered on top of dedicated hardware, OpenClaw combines the economics of recurring revenue with the trust model of on-premise deployment. Our goal is to reach 100 paying customers and $500K in annual recurring revenue within the first 12 months, scaling to $15M ARR by Year 3.

---

## 2. Problem

### 2.1 Enterprise Data Security Concerns with Cloud AI

The global enterprise AI market is projected to exceed $300 billion by 2027, yet adoption in regulated industries remains significantly below potential. A 2024 Cisco survey found that **92% of enterprises have concerns about data privacy when using generative AI**, and 27% have outright banned the use of tools like ChatGPT. Industries such as financial services, healthcare, government, and legal face strict regulatory frameworks (GDPR, HIPAA, ITAR, PIPA) that make sending proprietary data to cloud AI providers legally risky or outright prohibited. Every prompt sent to a cloud LLM is a potential data leak vector.

### 2.2 Configuration Complexity of Self-Hosted AI

Self-hosting alternatives exist — Ollama, llama.cpp, vLLM — but they demand deep ML-ops expertise. Setting up a functional local LLM with tool integrations, memory persistence, and enterprise SSO requires 40-100+ hours of engineering effort and ongoing maintenance. Most mid-size enterprises (50-500 employees) lack dedicated ML infrastructure teams. The result is a "dead zone" where companies are too security-conscious for cloud AI and too resource-constrained for self-hosted AI.

### 2.3 Lack of Persistent Memory and Context

Even when enterprises do adopt AI tools, current solutions are stateless. Every conversation starts from zero. There is no institutional memory, no accumulation of company-specific knowledge, and no continuity between sessions. Employees waste significant time re-explaining context, re-uploading documents, and re-configuring preferences. This fundamentally limits AI from becoming a true organizational asset.

---

## 3. Solution

### 3.1 Dedicated Hardware with Pre-Installed AI Agent

Peter Node ships as a Mac Mini M4 (16GB+ unified memory) pre-loaded with OpenClaw's autonomous agent software. The device plugs into the customer's network, connects to their existing tools, and is operational within 30 minutes. The M4's Neural Engine and unified memory architecture provide excellent local inference performance for smaller models, while the agent framework intelligently routes tasks between local models and optional air-gapped API endpoints.

**What ships in the box:**
- Apple Mac Mini M4 (pre-configured, security-hardened macOS)
- OpenClaw Agent Runtime (autonomous AI agent with skill system)
- Pre-installed integrations: Slack, Notion, Google Workspace, Microsoft 365, Jira, GitHub
- Voice interface module (wake-word activated, on-device speech processing)
- Web-based admin dashboard for IT administrators
- Encrypted local vector database for persistent memory

### 3.2 Zero-Config Managed Service Model

Peter Node follows the "appliance" model. OpenClaw handles all software updates, security patches, model upgrades, and skill additions via signed, encrypted update packages that the device pulls on a schedule set by the customer's IT team. No SSH access, no Docker containers to manage, no CUDA drivers to debug. The customer's IT department retains full network-level control — they can firewall the device, inspect its traffic, and audit its operations through built-in logging.

### 3.3 Air-Gapped Security with Comprehensive Audit Logs

**Data residency guarantee:** All customer data — prompts, responses, documents, memory embeddings — is stored exclusively on the Peter Node device's encrypted SSD. Nothing is transmitted externally without explicit, auditable customer authorization.

**Audit capabilities:**
- Complete interaction logs with timestamps, user identity, and action trails
- Data flow monitoring: every external API call is logged and reviewable
- Role-based access control (RBAC) integrated with enterprise SSO (SAML/OIDC)
- Automated compliance reports exportable in formats aligned with SOC 2, ISO 27001, and HIPAA

---

## 4. Market Analysis

### 4.1 Total Addressable Market (TAM)

The global enterprise AI market was valued at **$184 billion in 2024** and is projected to reach **$310 billion by 2027** (CAGR ~19%, per IDC and Gartner estimates). The enterprise AI infrastructure and platforms segment — which includes AI assistants, copilots, and agent platforms — represents approximately **$45 billion** of this market.

### 4.2 Serviceable Addressable Market (SAM)

Security-conscious enterprises in regulated industries represent the core SAM:

| Sector | Global Enterprise Count (50+ employees) | AI Budget Allocation (est.) | SAM Contribution |
|--------|----------------------------------------|----------------------------|-----------------|
| Financial Services | ~120,000 | $12B | $4.2B |
| Healthcare | ~95,000 | $8B | $2.8B |
| Legal | ~60,000 | $3B | $1.0B |
| Defense & Government | ~40,000 | $6B | $2.1B |
| **Total SAM** | **~315,000 enterprises** | | **~$10B** |

These are organizations where data sovereignty is not a preference but a regulatory requirement, and where the willingness to pay a premium for on-premise solutions is well-established.

### 4.3 Serviceable Obtainable Market (SOM)

**Initial target: Korean and APAC mid-size enterprises (50-500 employees)**

- South Korea's enterprise AI market: **$4.8B in 2025**, growing at 22% CAGR
- Korea's Personal Information Protection Act (PIPA) and recent AI governance frameworks create strong regulatory tailwinds for on-premise solutions
- APAC enterprise security spending: **$38B in 2025**, with data sovereignty a top-3 priority
- Estimated SOM (Year 1-3 addressable): **$200M** across Korea, Japan, Singapore, and Australia
- Target capture: **0.25% of SOM by Year 3** = ~$15M ARR (2,000 customers)

---

## 5. Revenue Model & Pricing

### 5.1 Revenue Streams

| Stream | Description | Pricing |
|--------|-------------|---------|
| **Hardware Setup Fee** | One-time: Mac Mini M4 + pre-configuration + shipping | $999 - $1,999 |
| **SaaS Subscription** | Monthly software license, updates, and managed service | $299 / $799 / Custom |
| **Professional Services** | Custom integrations, onboarding, training workshops | $150/hour or project-based |

### 5.2 Subscription Tiers

| | **Starter** | **Business** | **Enterprise** |
|---|---|---|---|
| Monthly Price | $299/mo | $799/mo | Custom (from $2,000/mo) |
| Users | Up to 10 | Up to 50 | Unlimited |
| Integrations | 3 tools | All tools | All + custom |
| Memory | 50GB | 200GB | Unlimited |
| Skills | Standard library | Full library + custom | Full + proprietary |
| Voice Interface | Basic | Advanced + multilingual | Custom wake word |
| Support | Email (48h) | Priority (4h SLA) | Dedicated CSM |
| Compliance Reports | Basic | SOC 2, ISO 27001 | Full regulatory suite |
| Hardware Fee | $999 | $1,499 | $1,999 |

### 5.3 Unit Economics

- **Hardware COGS:** $599 (Mac Mini M4 base) + $80 (configuration, packaging, shipping) = **$679**
- **Hardware margin:** 32-66% depending on tier ($320 - $1,320 per unit)
- **Software gross margin:** ~85% (primary costs: API usage for update delivery, support infrastructure)
- **Blended LTV (24-month avg retention):** $12,500 (Business tier)
- **Target CAC:** $1,500 (LTV:CAC ratio = 8.3x)

### 5.4 Year 1 Revenue Target

| Metric | Target |
|--------|--------|
| Total Customers | 100 |
| Avg. MRR per Customer | $420 (weighted across tiers) |
| Annual Recurring Revenue | **$504,000** |
| Hardware Revenue | ~$130,000 |
| Professional Services | ~$50,000 |
| **Total Year 1 Revenue** | **~$684,000** |

---

## 6. Go-to-Market Strategy

### Phase 1: Foundation (Month 1-3)

**Objective:** Build awareness, validate messaging, generate inbound leads.

- **Landing page** at peternode.ai — clear value proposition, demo video, waitlist form
- **Content marketing:**
  - Weekly technical blog posts: "Why Your ChatGPT Enterprise Plan Violates PIPA," "The True Cost of Cloud AI Data Breaches," "Air-Gapped AI: A CISO's Guide"
  - X/Twitter presence: Daily posts on enterprise AI security, engage with CISO/CTO community
  - LinkedIn thought leadership: Founder posts + OpenClaw company page
- **Community building:** Launch a Discord/Slack community for enterprise AI security practitioners
- **SEO:** Target keywords: "on-premise AI assistant," "air-gapped AI," "enterprise AI security," "self-hosted AI agent"
- **Target:** 500 waitlist signups, 50 qualified leads

### Phase 2: Beta Program (Month 4-6)

**Objective:** Validate product-market fit with real enterprise customers.

- **Recruit 10 pilot customers** from waitlist (target: 3 finance, 3 healthcare, 2 legal, 2 tech)
- **Pricing:** 50% discount on subscription for 6-month commitment + detailed feedback agreement
- **Success metrics per pilot:**
  - Time to deployment < 1 hour
  - Weekly active usage by 5+ employees
  - Net Promoter Score > 40
  - At least 1 referenceable case study
- **Iterate aggressively** on product based on pilot feedback
- **Begin compliance certifications:** SOC 2 Type I, ISO 27001 gap analysis

### Phase 3: General Availability (Month 7-12)

**Objective:** Scale customer acquisition to 100 customers.

- **Launch GA** with refined product, documented case studies, and compliance certifications in progress
- **Partner channel:**
  - IT resellers and VARs in Korea (Megazone Cloud, Bespin Global)
  - Managed Security Service Providers (MSSPs) as referral partners
  - System integrators for enterprise accounts
- **Events:** Sponsor/present at 3-4 conferences (DEVIEW, if:Kakao, AWS Summit Seoul, RSA Conference APAC)
- **Sales motion:** Founder-led sales for Enterprise tier, self-serve for Starter/Business
- **Referral program:** Existing customers get 1 month free for each successful referral

---

## 7. Competitive Landscape

### 7.1 Competitive Matrix

| Capability | **Peter Node** | ChatGPT Enterprise | Claude for Business | Self-Hosted (Ollama) | Microsoft Copilot |
|---|---|---|---|---|---|
| Data stays on-premise | **Yes** | No | No | Yes | No |
| Zero-config setup | **Yes** | Yes | Yes | No | Partial |
| Persistent memory | **Yes** | Limited | Limited | No | Limited |
| Autonomous agent | **Yes** | Partial | Partial | No | Partial |
| Voice interface | **Yes** | No | No | No | Yes |
| Enterprise integrations | **Pre-installed** | API-based | API-based | Manual | Microsoft only |
| Audit logs | **Built-in** | Basic | Basic | None | Basic |
| Compliance-ready | **Yes** | Partial | Partial | No | Partial |
| Hardware included | **Yes** | N/A | N/A | N/A | N/A |

### 7.2 Competitive Positioning

**Cloud AI Assistants (ChatGPT Enterprise, Claude for Business, Gemini for Workspace):**
Data must traverse provider infrastructure. Even with enterprise agreements and encryption, this is a non-starter for many regulated industries. SOC 2 compliance of the AI provider does not eliminate the fundamental risk of data leaving the customer's perimeter.

**Self-Hosted Open-Source (Ollama, llama.cpp, vLLM + Open WebUI):**
Technically capable but operationally burdensome. Requires ML engineering expertise, ongoing maintenance, and custom development for integrations and memory systems. No managed service, no enterprise support, no compliance tooling out of the box.

**Enterprise AI Platforms (Microsoft Copilot, Google Duet AI, Salesforce Einstein):**
Deeply integrated with their respective ecosystems but create vendor lock-in and still route data through cloud infrastructure. Limited to their own tool ecosystems.

### 7.3 Peter Node's Moat

1. **Hardware + Software + Service bundle** — Competitors offer one or two of these, not all three.
2. **Zero-config air-gapped deployment** — No other product delivers enterprise-grade AI with this simplicity and security guarantee.
3. **Persistent institutional memory** — The longer a Peter Node runs, the more valuable it becomes to the organization. Switching costs increase naturally over time.
4. **Managed appliance model** — Customers get the security of on-premise with the convenience of SaaS. This is a new category.

---

## 8. Team & Operations

### 8.1 Team

**Current: Lean AI-Native Startup**

- **Founder/CEO** — Full-stack engineer with experience in AI agent systems, enterprise software, and product development. Manages product, engineering, and initial sales.
- **AI-Assisted Development** — Core product development leverages AI pair programming (Claude Code, GitHub Copilot) to maintain a 5-10x productivity multiplier, enabling a solo founder to deliver what traditionally requires a 5-person team.

**Planned Hires (Month 6-12):**
- 1 Sales/BD lead (enterprise sales experience in Korean market)
- 1 DevOps/Support engineer (customer onboarding, hardware logistics)
- 1 Part-time compliance consultant (SOC 2, ISO 27001 preparation)

### 8.2 Hardware Operations

| Item | Detail |
|------|--------|
| Source | Apple Mac Mini M4 — direct from Apple or authorized resellers |
| Base Cost | $599 (M4, 16GB, 256GB SSD) to $799 (M4 Pro, 24GB, 512GB SSD) |
| Configuration | Automated provisioning script: OS hardening, agent install, integration setup (~2 hours per unit) |
| Inventory Model | Build-to-order initially (no inventory risk); transition to small batch (10-20 units) at 50+ customers |
| Shipping | Direct to customer via insured courier; Korea domestic 1-2 days, APAC 3-5 days |
| Warranty | Apple's standard 1-year hardware warranty; OpenClaw provides software support |

### 8.3 Software Architecture

- **Agent Runtime:** Custom autonomous agent framework built on Claude API with local model fallback
- **Skill System:** Modular plugin architecture — each integration (Slack, Notion, Jira, etc.) is a discrete skill that can be enabled/disabled per customer
- **Memory Engine:** Local vector database (ChromaDB/LanceDB) for persistent semantic memory, with encrypted SQLite for structured data
- **Voice Interface:** On-device speech-to-text (Whisper) and text-to-speech, with wake-word detection
- **Admin Dashboard:** Web-based (local network only) for IT administrators to manage users, permissions, audit logs, and device health
- **Update System:** Signed, encrypted update packages delivered on customer-controlled schedule; rollback capability built-in

### 8.4 Support Model

- **Tier 1:** AI-powered support agent handles common queries (setup, configuration, troubleshooting) — available 24/7
- **Tier 2:** Founder/engineer handles escalated technical issues — target response within 4 hours (Business tier)
- **Tier 3:** On-site support for Enterprise tier customers (APAC only initially)

---

## 9. Financial Projections

### 9.1 Three-Year Summary

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Customers (cumulative) | 100 | 500 | 2,000 |
| New Customers Added | 100 | 440 | 1,700 |
| Churned Customers | 0 | 40 (10%) | 200 (10%) |
| Avg. MRR/Customer | $420 | $500 | $625 |
| **Annual Recurring Revenue** | **$504K** | **$3.0M** | **$15.0M** |
| Hardware Revenue | $130K | $570K | $2.2M |
| Professional Services | $50K | $200K | $500K |
| **Total Revenue** | **$684K** | **$3.8M** | **$17.7M** |

### 9.2 Cost Structure

| Cost Category | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Hardware COGS | $68K | $300K | $1.15M |
| Cloud/API Costs | $24K | $60K | $150K |
| Salaries & Contractors | $180K | $600K | $2.0M |
| Sales & Marketing | $120K | $400K | $1.5M |
| Office & Operations | $36K | $80K | $200K |
| Compliance & Legal | $30K | $60K | $100K |
| R&D / Tools | $24K | $60K | $150K |
| **Total Costs** | **$482K** | **$1.56M** | **$5.25M** |

### 9.3 Profitability

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Gross Margin | 72% | 78% | 82% |
| **Net Income** | **-$198K** | **+$240K** | **+$4.45M** |
| Cash Position (cumulative) | -$198K | +$42K | +$4.49M |
| Headcount | 1 | 4 | 12 |

### 9.4 Key SaaS Metrics (Year 2 Targets)

| Metric | Target | Benchmark |
|--------|--------|-----------|
| Monthly Churn Rate | < 1.0% | SaaS median: 1.5% |
| Net Revenue Retention | > 115% | Best-in-class: 120%+ |
| CAC (Customer Acquisition Cost) | $1,500 | — |
| LTV (Lifetime Value) | $12,500 | — |
| LTV:CAC Ratio | 8.3x | Healthy: > 3x |
| Payback Period | 3.6 months | Healthy: < 12 months |
| Gross Margin | 78% | SaaS median: 75% |

### 9.5 Funding Requirements

**Bootstrapping Phase (Month 1-6):** $100K founder investment
- Hardware procurement for pilot units
- Software development and infrastructure
- Initial marketing spend

**Optional Seed Round (Month 6-12):** $500K-$1M
- Triggered if pilot results validate PMF and unit economics
- Use of funds: hire sales lead, scale inventory, begin compliance certifications
- Target investors: Korean VC (Primer, SparkLabs, SoftBank Ventures Asia), angel investors from enterprise software backgrounds

---

## 10. Risks & Mitigations

### 10.1 Hardware Supply Chain

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Apple discontinues Mac Mini or changes pricing | High | Low | Maintain 3-month inventory buffer; develop Linux-based alternative (Intel NUC / custom ARM) as contingency |
| Supply shortages / long lead times | Medium | Medium | Pre-order in batches; establish relationships with multiple authorized resellers; build-to-order model reduces inventory risk |
| Apple restricts commercial use or enterprise licensing | Medium | Low | Current macOS license permits commercial use; monitor Apple Business program changes; maintain alternative hardware path |

### 10.2 LLM API Cost Changes

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Anthropic/OpenAI significantly raises API pricing | High | Medium | Hybrid architecture: local models (Llama, Mistral) handle 70%+ of routine tasks; API used only for complex reasoning; negotiate enterprise volume pricing |
| API provider restricts on-premise or edge deployment | Medium | Low | Existing architecture supports fully local operation with open-weight models; API is an enhancement, not a dependency |

### 10.3 Competition from Big Tech

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Microsoft/Google release on-premise AI appliance | High | Medium | First-mover advantage in hardware+AI appliance category; deeper focus on security-first design; move fast on customer acquisition and retention through institutional memory lock-in |
| Apple launches its own enterprise AI agent | Medium | Medium | Peter Node becomes a "premium layer" on top; pivot to software-only if needed; deep integrations and memory moat protect existing customers |
| Open-source community builds equivalent tooling | Low | High | Open-source lacks managed service, compliance tooling, and zero-config deployment; OpenClaw competes on convenience and trust, not technology alone |

### 10.4 Regulatory Changes

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| New AI regulations require certification/licensing | Medium | High | Proactive compliance posture; participate in regulatory consultations; SOC 2 and ISO 27001 certifications establish credibility |
| Data localization laws become stricter | **Positive** | High | Stricter data localization directly benefits Peter Node's value proposition — this is a tailwind, not a headwind |
| AI liability frameworks hold deployers responsible | Medium | Medium | Clear terms of service; audit logs provide accountability trail; insurance for enterprise tier |

### 10.5 Operational Risks

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Founder burnout / key-person dependency | High | Medium | AI-assisted development reduces workload; hire early for critical functions; document all processes |
| Hardware defect or security vulnerability | High | Low | Apple's hardware quality track record; layered software security; remote patch capability; incident response plan |
| Slow enterprise sales cycles (6-12 months) | Medium | High | Focus initially on mid-size companies with faster procurement; offer pilot programs to reduce commitment barrier |

---

## 11. Immediate Next Steps — 30-Day Action Plan

### Week 1: Foundation

- [ ] Register peternode.ai domain and set up landing page (Next.js + Vercel)
- [ ] Create OpenClaw company social accounts (X/Twitter, LinkedIn)
- [ ] Order 2x Mac Mini M4 units for development and demo
- [ ] Set up development environment: agent runtime, skill system, memory engine
- [ ] Draft and publish first blog post: "Why Air-Gapped AI Is the Future of Enterprise Security"

### Week 2: Product Core

- [ ] Complete base agent runtime with memory persistence and skill loading
- [ ] Implement Slack and Notion integrations as first two skills
- [ ] Build automated provisioning script for Mac Mini (OS hardening + software install)
- [ ] Set up admin dashboard wireframes and basic authentication
- [ ] Record 2-minute product demo video

### Week 3: Go-to-Market Prep

- [ ] Launch landing page with waitlist form and demo video
- [ ] Begin daily X/Twitter posting cadence (enterprise AI security topics)
- [ ] Write and schedule 4 blog posts for Month 1
- [ ] Identify and reach out to 20 potential pilot customers (warm intros, LinkedIn outreach)
- [ ] Research and shortlist 3 target conferences for Month 4-6

### Week 4: Validation

- [ ] Conduct 5+ customer discovery calls with target CISOs/CTOs
- [ ] Refine pricing based on discovery call feedback
- [ ] Complete first end-to-end demo unit (hardware + software, fully functional)
- [ ] Apply to 2-3 startup accelerators / grant programs (TIPS, K-Startup Grand Challenge)
- [ ] Set up CRM (HubSpot free tier) and begin tracking pipeline
- [ ] Publish Month 1 progress report for transparency and community building

---

## Appendix A: Product Roadmap

| Quarter | Milestone |
|---------|-----------|
| Q2 2026 | MVP: Agent runtime + 3 integrations + memory + admin dashboard |
| Q3 2026 | Beta: 10 pilot customers, voice interface, 8+ integrations |
| Q4 2026 | GA: SOC 2 Type I, 100 customers, partner channel launch |
| Q1 2027 | Multi-agent support, custom skill builder, mobile companion app |
| Q2 2027 | Peter Node Pro (Mac Studio-based, for large enterprises), API marketplace |

## Appendix B: Why Mac Mini M4

The Apple Mac Mini M4 is the optimal hardware platform for Peter Node for the following reasons:

1. **Performance/watt:** The M4 chip delivers best-in-class inference performance per watt, critical for a device that runs 24/7 on a desk or in a server room.
2. **Unified memory:** 16-24GB unified memory allows running 7B-13B parameter models locally without discrete GPU, keeping cost and form factor minimal.
3. **Neural Engine:** 16-core Neural Engine accelerates ML workloads natively.
4. **Form factor:** 5" x 5" footprint fits on any desk or shelf. Silent operation (fanless under normal load).
5. **Reliability:** Apple's hardware quality and 1-year warranty reduce support burden.
6. **Security:** Hardware-level security features (Secure Enclave, encrypted SSD) complement software security layers.
7. **Cost:** $599 base price offers exceptional value for the compute delivered.
8. **Brand trust:** Enterprise IT teams recognize and trust Apple hardware, reducing procurement friction.

---

*This document is confidential and intended for internal planning and qualified investor discussions only.*

*OpenClaw Inc. | peternode.ai | 2026*
