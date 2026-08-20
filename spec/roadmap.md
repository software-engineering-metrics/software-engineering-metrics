# Roadmap, build backlog, and adoption checklists

This is the authoring backlog for producing and maintaining the book, plus
adoption checklists organizations can use to put a metrics programme into
practice.

Legend: `[ ]` todo · `[~]` in progress · `[x]` done · **(P)** parallelizable ·
**(gov)** government-specific · **(ent)** enterprise-specific.

---

## Phase 0: Project setup and standards

- [x] Define the book's scope, non-goals, and target audiences
- [x] Establish a style guide (voice, tone, terminology, Oxford spelling)
- [x] Choose docs-as-code tooling (spec-driven manifest, validation suite)
- [x] Set up the repository structure: one file per chapter
- [x] Define the per-chapter template: principles, recommendations,
      trade-offs, sector lens, examples, business case, anti-patterns,
      maturity model, discussion questions, references
- [x] Establish a five-level maturity-model rubric applied consistently
      across chapters

## Phase 1: Research and evidence base **(P)**

- [x] Survey canonical sources per domain (DORA, SPACE, State of DevOps,
      Accelerate)
- [x] Catalogue relevant standards and frameworks (SRE workbook, OpenTelemetry,
      NIST, OWASP)
- [x] Identify the cross-cutting guardrail (Goodhart's law) that governs every
      metric family

## Phase 2: Author Part 1: Foundations of Measurement **(P)**

- [x] Ch. 1.1 Why measure software engineering
- [x] Ch. 1.2 Goodhart's law and the psychology of metrics
- [x] Ch. 1.3 Outcomes over output: choosing what to measure
- [x] Ch. 1.4 Metrics governance and ownership
- [x] Ch. 1.5 Data sources and instrumentation
- [x] Ch. 1.6 Statistical literacy for engineering metrics

## Phase 3: Author Part 2: Delivery and Flow Metrics **(P)**

- [x] Ch. 2.1 The DORA metrics framework
- [x] Ch. 2.2 Deployment frequency
- [x] Ch. 2.3 Lead time for changes
- [x] Ch. 2.4 Change failure rate
- [x] Ch. 2.5 Failed deployment recovery time
- [x] Ch. 2.6 Cycle time and its components
- [x] Ch. 2.7 Flow efficiency and work in process
- [x] Ch. 2.8 Pull request and code review metrics

## Phase 4: Author Part 3: Developer Experience and the SPACE Framework **(P)**

- [x] Ch. 3.1 The SPACE framework
- [x] Ch. 3.2 Satisfaction and well-being metrics
- [x] Ch. 3.3 Performance metrics and outcome proxies
- [x] Ch. 3.4 Activity metrics and their limits
- [x] Ch. 3.5 Communication and collaboration metrics
- [x] Ch. 3.6 Efficiency and flow: deep work and interruptions
- [x] Ch. 3.7 Developer experience surveys and DevEx metrics

## Phase 5: Author Part 4: Code and Quality Metrics **(P)**

- [x] Ch. 4.1 Code complexity metrics
- [x] Ch. 4.2 Test coverage and test effectiveness
- [x] Ch. 4.3 Code churn and hotspot analysis
- [x] Ch. 4.4 Static analysis and code smell metrics
- [x] Ch. 4.5 Technical debt measurement
- [x] Ch. 4.6 Documentation and knowledge metrics

## Phase 6: Author Part 5: Product and Business Metrics **(P)**

- [x] Ch. 5.1 Escaped defect rate and quality escapes
- [x] Ch. 5.2 Feature adoption and usage metrics
- [x] Ch. 5.3 Customer and business outcome metrics
- [x] Ch. 5.4 Cost and unit economics of engineering
- [x] Ch. 5.5 Return on investment for engineering initiatives

## Phase 7: Author Part 6: Reliability, Operations, and Security Metrics **(P)**

- [x] Ch. 6.1 Service level indicators, objectives, and error budgets
- [x] Ch. 6.2 Incident metrics: detection, response, and recovery
- [x] Ch. 6.3 On-call, capacity, and operational load metrics **(ent)**
- [x] Ch. 6.4 Security and vulnerability management metrics **(gov)(ent)**

## Phase 8: Author Part 7: Metrics in the Age of AI **(P)**

- [x] Ch. 7.1 The generative AI paradigm shift
- [x] Ch. 7.2 Measuring AI-assisted software development
- [x] Ch. 7.3 Metric inflation and quality dilution risks
- [x] Ch. 7.4 Outcome telemetry as the new north star

## Phase 9: Author Part 8: Building a Metrics Program

- [x] Ch. 8.1 Designing an engineering metrics dashboard
- [x] Ch. 8.2 Tooling landscape: build versus buy
- [x] Ch. 8.3 Rolling out metrics without breeding fear
- [x] Ch. 8.4 Maturity model for engineering metrics programs
- [x] Ch. 8.5 An incremental adoption roadmap

## Phase 10: Appendices and reference material

- [x] A. Compile glossary of terms and acronyms
- [x] B. Assemble a metric definitions and formulas reference
- [x] C. Assemble checklists (metric review, dashboard launch, program audit)
- [x] D. Assemble templates (metrics charter, dashboard spec, review agenda)
- [x] E. Consolidate the maturity self-assessment
- [x] F. Build a references and further-reading index
- [x] G. Build the subject index

## Phase 11: Review, quality, and release

- [ ] Technical review by subject-matter experts per part
- [x] Cross-chapter consistency pass (terminology, cross-references, overlap)
- [ ] Ensure the Goodhart's-law guardrail appears in every metric-family
      chapter, not just chapter 1.2
- [ ] Verify all citations, links, and standards references
- [ ] Beta-read with target audience; collect and incorporate feedback
- [ ] Publish v1.0; establish versioning and update cadence
- [ ] Set up a mechanism for corrections, issues, and community contributions

---

## Adoption checklists (for organizations building a metrics programme)

These are outcome checklists an organization can use to self-assess and roll
out the practices. Treat as a maturity journey, not a one-time audit. The
consolidated version of these lives in chapter 9.5.

### Foundations
- [ ] A written metrics charter states purpose, ownership, and non-goals
- [ ] Every tracked metric has a named owner and a single source of truth
- [ ] Goodhart's law risk is documented for every incentivized metric
- [ ] Metrics are never used in individual performance reviews without
      explicit, disclosed policy

### Delivery and flow
- [ ] The four DORA metrics are instrumented from the deployment pipeline,
      not self-reported
- [ ] Lead time is measured from first commit to production, not from ticket
      creation
- [ ] Change failure rate has an agreed definition of "failure" shared across
      teams
- [ ] Flow metrics (cycle time, WIP) are visible on team-owned dashboards

### Developer experience
- [ ] A SPACE-aligned survey runs on a regular cadence
- [ ] Activity metrics (commits, lines of code) are never used alone to judge
      individuals or teams
- [ ] Well-being and satisfaction signals feed leadership reviews, not just
      engineering ones

### Code and quality
- [ ] Test coverage targets are paired with a mutation-testing or defect-based
      quality check
- [ ] Technical debt is tracked as a visible, prioritized backlog
- [ ] Code churn and hotspot data feed refactoring decisions, not blame

### Product and business
- [ ] Escaped defect rate is tracked by severity and by the number of
      customers affected
- [ ] Engineering cost is expressed in a unit economics form leadership can
      use (cost per deployment, cost per feature)
- [ ] Major initiatives carry a stated ROI hypothesis, checked after delivery

### Reliability, operations, and security **(gov)(ent)**
- [ ] SLOs and error budgets are defined for every customer-facing service
- [ ] Incident metrics (MTTD, MTTA, MTTR) are tracked from a blameless
      postmortem process
- [ ] On-call load is measured and capped to protect sustainable rotations
- [ ] Vulnerability remediation is tracked against a published SLA by severity

### AI-era readiness
- [ ] AI-assisted development is measured on outcome, not raw output volume
- [ ] A policy exists for reviewing and licensing AI-generated code
- [ ] Metric definitions have been re-examined for whether GenAI adoption has
      broken their meaning (chapter 7.1)

### Programme governance
- [ ] The metrics programme has an executive sponsor
- [ ] A regular cadence exists to retire metrics that no longer earn their
      keep
- [ ] The rollout followed an incremental adoption roadmap (chapter 8.5)
      rather than a big-bang launch
