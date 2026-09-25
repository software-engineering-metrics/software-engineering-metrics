# Software Engineering Metrics

A working book about measuring **software engineering** well: how to
choose metrics that reflect real outcomes rather than activity, the
frameworks this book builds on (the Flow Framework, the SPACE framework,
queueing theory, and DORA metrics), the metric families that matter, and
how to run a metrics program that improves a team rather than policing
it.

The book covers delivery and flow, developer experience, code and quality,
product and business outcomes, reliability and security, and how generative
AI is reshaping what these numbers mean.

- **[What are software engineering metrics?](front-matter/what-are-software-engineering-metrics.md):** start here
- **[Introduction](front-matter/introduction.md):** what this book is and how to read it
- **[Table of contents](front-matter/table-of-contents.md):** the full chapter list

## How to read this book

Parts are whole numbers; chapters are decimals. Chapter **N.0** introduces
each part; **N.1, N.2, …** are its chapters. Part 9 collects the appendices
(glossary, a formulas reference, checklists, templates, a maturity
self-assessment, references, and an index). Every metric-family chapter
states principles, recommendations, trade-offs, a sector lens, examples
(enterprise and government), a business case (ROI/TCO), anti-patterns, a
maturity model, discussion questions, and references, and it names how the
metric gets gamed and what guardrail catches that. Adopt incrementally; do
not big-bang.

## Table of contents

### Part 1: Foundations of Measurement
- [1.0 Introduction](chapters/01-00-foundations-of-measurement.md)
- [1.1 Why measure software engineering](chapters/01-01-why-measure-software-engineering.md)
- [1.2 Goodhart's law and the psychology of metrics](chapters/01-02-goodharts-law-and-the-psychology-of-metrics.md)
- [1.3 Outcomes over output: choosing what to measure](chapters/01-03-outcomes-over-output.md)
- [1.4 Metrics governance and ownership](chapters/01-04-metrics-governance-and-ownership.md)
- [1.5 Data sources and instrumentation](chapters/01-05-data-sources-and-instrumentation.md)
- [1.6 Statistical literacy for engineering metrics](chapters/01-06-statistical-literacy-for-engineering-metrics.md)

### Part 2: Flow Metrics
- [2.0 Introduction](chapters/02-00-flow-metrics.md)
- [2.1 The Flow Framework](chapters/02-01-the-flow-framework.md)
- [2.2 Flow items: features, defects, risks, and debt](chapters/02-02-flow-items.md)
- [2.3 Flow velocity and flow distribution](chapters/02-03-flow-velocity-and-flow-distribution.md)
- [2.4 Flow time and flow load](chapters/02-04-flow-time-and-flow-load.md)
- [2.5 Flow efficiency and work in process](chapters/02-05-flow-efficiency-and-work-in-process.md)
- [2.6 Cycle time and its components](chapters/02-06-cycle-time-and-its-components.md)
- [2.7 Queueing theory](chapters/02-07-queueing-theory.md)
- [2.8 Lean value stream metrics](chapters/02-08-lean-value-stream-metrics.md)
- [2.9 Pull request and code review metrics](chapters/02-09-pull-request-and-code-review-metrics.md)
- [2.10 The DORA metrics framework](chapters/02-10-the-dora-metrics-framework.md)

### Part 3: Developer Experience and the SPACE Framework
- [3.0 Introduction](chapters/03-00-developer-experience-and-space.md)
- [3.1 The SPACE framework](chapters/03-01-the-space-framework.md)
- [3.2 Satisfaction and well-being metrics](chapters/03-02-satisfaction-and-well-being-metrics.md)
- [3.3 Performance metrics and outcome proxies](chapters/03-03-performance-metrics-and-outcome-proxies.md)
- [3.4 Activity metrics and their limits](chapters/03-04-activity-metrics-and-their-limits.md)
- [3.5 Communication and collaboration metrics](chapters/03-05-communication-and-collaboration-metrics.md)
- [3.6 Efficiency and flow: deep work and interruptions](chapters/03-06-efficiency-and-flow.md)
- [3.7 Developer experience surveys and DevEx metrics](chapters/03-07-developer-experience-surveys-and-devex-metrics.md)

### Part 4: Code and Quality Metrics
- [4.0 Introduction](chapters/04-00-code-and-quality-metrics.md)
- [4.1 Code complexity metrics](chapters/04-01-code-complexity-metrics.md)
- [4.2 Test coverage and test effectiveness](chapters/04-02-test-coverage-and-test-effectiveness.md)
- [4.3 Code churn and hotspot analysis](chapters/04-03-code-churn-and-hotspot-analysis.md)
- [4.4 Static analysis and code smell metrics](chapters/04-04-static-analysis-and-code-smell-metrics.md)
- [4.5 Technical debt measurement](chapters/04-05-technical-debt-measurement.md)
- [4.6 Documentation and knowledge metrics](chapters/04-06-documentation-and-knowledge-metrics.md)

### Part 5: Product and Business Metrics
- [5.0 Introduction](chapters/05-00-product-and-business-metrics.md)
- [5.1 Escaped defect rate and quality escapes](chapters/05-01-escaped-defect-rate-and-quality-escapes.md)
- [5.2 Feature adoption and usage metrics](chapters/05-02-feature-adoption-and-usage-metrics.md)
- [5.3 Customer and business outcome metrics](chapters/05-03-customer-and-business-outcome-metrics.md)
- [5.4 Cost and unit economics of engineering](chapters/05-04-cost-and-unit-economics-of-engineering.md)
- [5.5 Return on investment for engineering initiatives](chapters/05-05-return-on-investment-for-engineering-initiatives.md)

### Part 6: Reliability, Operations, and Security Metrics
- [6.0 Introduction](chapters/06-00-reliability-operations-and-security-metrics.md)
- [6.1 Service level indicators, objectives, and error budgets](chapters/06-01-slis-slos-and-error-budgets.md)
- [6.2 Incident metrics: detection, response, and recovery](chapters/06-02-incident-metrics.md)
- [6.3 On-call, capacity, and operational load metrics](chapters/06-03-on-call-capacity-and-operational-load-metrics.md)
- [6.4 Security and vulnerability management metrics](chapters/06-04-security-and-vulnerability-management-metrics.md)

### Part 7: Metrics in the Age of AI
- [7.0 Introduction](chapters/07-00-metrics-in-the-age-of-ai.md)
- [7.1 The generative AI paradigm shift](chapters/07-01-the-generative-ai-paradigm-shift.md)
- [7.2 Measuring AI-assisted software development](chapters/07-02-measuring-ai-assisted-software-development.md)
- [7.3 Metric inflation and quality dilution risks](chapters/07-03-metric-inflation-and-quality-dilution-risks.md)
- [7.4 Outcome telemetry as the new north star](chapters/07-04-outcome-telemetry-as-the-new-north-star.md)

### Part 8: Building a Metrics Program
- [8.0 Introduction](chapters/08-00-building-a-metrics-program.md)
- [8.1 Designing an engineering metrics dashboard](chapters/08-01-designing-an-engineering-metrics-dashboard.md)
- [8.2 Tooling landscape: build versus buy](chapters/08-02-tooling-landscape-build-versus-buy.md)
- [8.3 Rolling out metrics without breeding fear](chapters/08-03-rolling-out-metrics-without-breeding-fear.md)
- [8.4 Maturity model for engineering metrics programs](chapters/08-04-maturity-model-for-engineering-metrics-programs.md)
- [8.5 An incremental adoption roadmap](chapters/08-05-an-incremental-adoption-roadmap.md)

### Part 9: Appendices
- [9.0 Appendices](chapters/09-00-appendices.md)
- [9.1 Glossary](chapters/09-01-glossary.md)
- [9.2 Metric definitions and formulas reference](chapters/09-02-metric-definitions-and-formulas-reference.md)
- [9.3 Checklists](chapters/09-03-checklists.md)
- [9.4 Templates](chapters/09-04-templates.md)
- [9.5 Maturity self-assessment](chapters/09-05-maturity-self-assessment.md)
- [9.6 References and further reading](chapters/09-06-references-and-further-reading.md)
- [9.7 Index](chapters/09-07-index.md)

## Cross-cutting themes

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) governs every
chapter: a measure that becomes a target stops being a good measure, so every
metric family here ships with its gaming vector and its guardrail attached.
Outcomes are weighted over output and activity throughout. Government and
enterprise reporting obligations are treated as design inputs, not
afterthoughts, and the shift to generative AI is treated as a reason to
re-examine what these metrics mean, not just a new column on the dashboard.

## Beyond the chapters

- **[Examples](examples/index.md):** small, concrete examples of the book's ideas in use.
- **[About this project](project/index.md):** how the book is built, checked, and published.
- **[Contributing](contributing/index.md):** how to help, and the house style rules.
