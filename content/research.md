# Covenda Website Research

**Date:** 2025-10-28
**Purpose:** Document IA patterns, CTA flows, and tone inspiration from leading security services firms

---

## 1. Unit 42 (Palo Alto Networks) – Incident Response

### Information Architecture Patterns
- **Services-first hierarchy**: Clear separation between consulting, IR, threat intelligence
- **Urgency-driven layout**: Critical contact CTAs above the fold
- **Timeline structure**: Before → During → After incident lifecycle
- **Proof integration**: Case studies and metrics woven throughout (not isolated)

### CTA Patterns
- **Dual-path CTAs**: "Contact IR Team" (urgent) vs. "Learn About Retainers" (planning)
- **Persistent contact**: Sticky phone number or chat for 24/7 availability
- **Contextual CTAs**: Different CTAs per service phase (assess, respond, recover)

### Key Concepts to Adapt (Not Copy)
- "Incident response as a service" → **AI-SOC operations as a service**
- "Before/During/After" → **Assess/Build/Operate**
- "24/7 availability" → **Co-managed on-call with SLOs**
- Urgent + planning CTAs → **Talk to an Engineer** (urgent) + **Request Demo** (planning)

---

## 2. Mandiant (Google Cloud) – Consulting Services

### Retainer & Activation Model
- **Activate experts on-demand**: Retainer gives you access, pay per engagement
- **Embedded consultants**: FrontLine for IR, Mandiant for strategic consulting
- **Service tiers**: Advisory (strategic), Technical (hands-on), Retainer (always-on)
- **Outcomes focus**: Not hours, but "contain in X hours" or "reduce dwell time by Y%"

### CTA Patterns
- **"Get a Consultation"**: Low-friction discovery call
- **"Activate Now"**: For existing retainer customers (priority access)
- **Assessment-first**: Many engagements start with 2-4 week assessment

### Key Concepts to Adapt
- Retainer model → **Operate tier** (ongoing FDE + co-managed SOC)
- Expert activation → **Embedded security engineering pods**
- Assessment-first → **Assess (2-4 weeks)** as entry service
- Don't copy: "FrontLine," "Mandiant Academy," specific trademarked terms

---

## 3. Group-IB – Unified Risk Platform

### Platform Visualization Approach
- **Single unified diagram**: All capabilities as interconnected modules
- **Data flow emphasis**: Shows how intel → detection → response flows through platform
- **Component integration**: Threat intel, fraud detection, DFIR, training as one ecosystem
- **Visual storytelling**: Platform diagram is hero content, not buried in docs

### Key Concepts to Adapt
- Unified platform visual → **Covenda Risk Platform** diagram
- Module interconnections → Threat Models ↔ Controls ↔ Evidence ↔ Detections ↔ Automations ↔ Tickets
- "Unified" narrative → One platform, multiple security outcomes
- Don't copy: Visual style, specific module names, color schemes

### Covenda Unified Platform Components
```
[Threat Models] ← Research & intel
     ↓
[Controls] ← Configuration & hardening
     ↓
[Evidence] ← Logs, telemetry, compliance data
     ↓
[Detections] ← Sigma rules, queries, ML models
     ↓
[Automations] ← Runbooks, orchestration, response
     ↓
[Tickets] ← Jira, ServiceNow, case management
     ↓
[Metrics] ← Dashboards, SLOs, reporting
```

---

## 4. Palantir – Forward Deployed Engineers

### Tone & Positioning
- **Ownership culture**: "Own the outcome, not just the code"
- **Embedded model**: Engineers work alongside customer teams, not remote delivery
- **Mission-driven**: Emphasis on impact, solving hard problems, national security scale
- **Technical depth + business impact**: Balance between engineering excellence and user outcomes
- **Long-term partnerships**: Multi-year engagements, not project work

### Language Patterns to Emulate (Tone, Not Words)
- "You'll be embedded with..." → **Covenda FDEs join your team for sprint-based delivery**
- "Own the outcome" → **Accountable for security posture improvement, not just deliverables**
- "Solve the hardest problems" → **Tackle complex integrations, custom detections, and automation**
- "Work directly with users" → **Daily standups, shared Slack channels, collaborative runbooks**

### Key Concepts to Adapt
- FDE model → **Forward-Deployed Security Engineer** (FDSE or FDE)
- Embedded pods → 1-3+ engineers join customer security/engineering teams
- Sprint-based → 2-week sprints with clear artifacts (PRs, dashboards, runbooks)
- SLOs & exit criteria → Measurable outcomes (MTTD, MTTR, coverage %)
- Don't copy: Specific Palantir role descriptions, product names (Foundry, Gotham)

---

## 5. Covenda-Specific Vocabulary to Preserve

From existing covenda.ai content, preserve these concepts (paraphrased):

- **Risk Landscape**: Covenda's threat model / prioritization framework
- **Saturn**: Internal codename for platform (may or may not surface publicly)
- **Integrations**: Sentinel, Splunk, Jira, ServiceNow, GitHub, etc.
- **Use-cases**: Attack surface, supply chain, incident response readiness, compliance
- **Runbooks**: Automation playbooks, response procedures
- **Detection content**: Sigma rules, KQL/SPL queries, custom parsers

---

## 6. IA Map for Covenda.ai (New Site)

### Primary Navigation
```
Home
Services
  ├─ Security Engineering & Operations (hub)
  ├─ Forward-Deployed Engineering (/services/fde)
  └─ AI-SOC: Build & Co-Manage (/services/ai-soc)
Customers
  └─ Case Studies (/customers/case-studies)
Pricing (/pricing/services)
About
Blog
Contact
```

### Page-Specific Sections

**Home (`/`)**
1. Hero: Dual CTAs (Request Demo | Talk to an Engineer)
2. What We Do (3 pillars: Assess, Build, Operate)
3. How It Works (Platform diagram + FDE process)
4. Proof (Mini case study tiles)
5. Integrations (Logo wall: Sentinel, Splunk, Jira, etc.)
6. Final CTA

**Services Hub (`/services`)**
1. Hero: Security Engineering & Operations
2. Service Timeline: Assess → Build → Operate (visual)
3. Deliverables Grid (runbooks, detections, automations, tickets)
4. Platform Diagram (Unified Risk Platform)
5. Proof & CTA

**FDE Page (`/services/fde`)**
1. Hero: What is Forward-Deployed Security Engineering?
2. Embedded Pod Model (1-3+ engineers, sprint rituals)
3. Artifacts (runbooks, PRs, dashboards)
4. SLOs & Exit Criteria (measurable outcomes)
5. Stakeholder Map (who we work with)
6. CTA: Start with Assess

**AI-SOC Page (`/services/ai-soc`)**
1. Hero: Build & Co-Manage Your AI-SOC
2. Process Flow (data → detections → investigations → tickets → handoffs)
3. Co-Managed Model (response times, on-call support)
4. Integration Examples (Sentinel, Splunk)
5. Retainer Options
6. CTA: Activate Experts Now

**Pricing (`/pricing/services`)**
1. Hero: Transparent Service Tiers
2. Tier Cards:
   - **Assess** (2-4 weeks, fixed scope)
   - **Build** (6-12 weeks, outcome-driven)
   - **Operate** (monthly retainer, SLOs)
   - **Co-Manage** (optional add-on for on-call)
3. FAQ
4. CTA: Talk to Sales

**Case Studies (`/customers/case-studies`, `/customers/{slug}`)**
1. Filterable grid (industry, challenge type, outcome)
2. Anonymized templates: Challenge → Approach → Outcome → Metrics
3. CTA: Read More / Contact Us

---

## 7. Phrases to AVOID (Trademarked / Competitive)

- "Unit 42" (trademark)
- "Mandiant FrontLine" (trademark)
- "Palantir Foundry/Gotham" (trademarks)
- "Group-IB Unified Cyber Security Platform" (exact phrasing)
- "Follow the Sun" (common but closely associated with Mandiant)
- Any specific incident response playbook names from competitors

---

## 8. Tone Guidelines for Covenda

- **Enterprise, calm, confident**: Not salesy or hyperbolic
- **Technical depth**: Security engineers are the audience (not just CISOs)
- **Outcome-focused**: Metrics, SLOs, measurable improvements
- **Collaborative**: "We join your team" not "We deliver to you"
- **Transparent**: Pricing, timelines, scope all visible
- **Restrained motion**: No heavy parallax or distracting animations

---

## 9. Visual Inspiration Summary

| Company | Borrow This | Create Original Version |
|---------|-------------|-------------------------|
| Unit 42 | Services-first IA, urgent CTAs | Covenda services hub + dual CTAs |
| Mandiant | Retainer model, activate experts | Operate tier + co-managed on-call |
| Group-IB | Unified platform diagram | Covenda Risk Platform SVG |
| Palantir | FDE tone, embedded pods | Forward-Deployed Security Engineer page |

---

## 10. Next Steps

- [x] Document research findings
- [ ] Scaffold Next.js app
- [ ] Build design system (colors, typography, components)
- [ ] Write original copy for each page
- [ ] Create SVG diagrams
- [ ] Implement MDX blog
- [ ] SEO, metadata, sitemap
- [ ] Launch checklist
