# Structure (canonical chapter manifest)

This file is the structural source of truth for the book. It lists every part
and chapter with its decimal number, title, and file. The test suite
(`tests/validate.py`) checks that the files on disk match this manifest
exactly, and the navigation generator (`tools/gen_nav.py`) derives the table
of contents, index, and specification outline from the same files. Change the
structure here and in the chapter files together; the tests will catch any
drift.

Totals: **9 parts**, **61 chapters** (each part opens with an N.0
introduction).

## Part 1: Foundations of Measurement

| Chapter | Title | File |
| --- | --- | --- |
| 1.0 | Introduction to Part 1: Foundations of Measurement | [`01-00-foundations-of-measurement.md`](../docs/chapters/01-00-foundations-of-measurement.md) |
| 1.1 | Why measure software engineering | [`01-01-why-measure-software-engineering.md`](../docs/chapters/01-01-why-measure-software-engineering.md) |
| 1.2 | Goodhart's law and the psychology of metrics | [`01-02-goodharts-law-and-the-psychology-of-metrics.md`](../docs/chapters/01-02-goodharts-law-and-the-psychology-of-metrics.md) |
| 1.3 | Outcomes over output: choosing what to measure | [`01-03-outcomes-over-output.md`](../docs/chapters/01-03-outcomes-over-output.md) |
| 1.4 | Metrics governance and ownership | [`01-04-metrics-governance-and-ownership.md`](../docs/chapters/01-04-metrics-governance-and-ownership.md) |
| 1.5 | Data sources and instrumentation | [`01-05-data-sources-and-instrumentation.md`](../docs/chapters/01-05-data-sources-and-instrumentation.md) |
| 1.6 | Statistical literacy for engineering metrics | [`01-06-statistical-literacy-for-engineering-metrics.md`](../docs/chapters/01-06-statistical-literacy-for-engineering-metrics.md) |

## Part 2: Delivery and Flow Metrics

| Chapter | Title | File |
| --- | --- | --- |
| 2.0 | Introduction to Part 2: Delivery and Flow Metrics | [`02-00-delivery-and-flow-metrics.md`](../docs/chapters/02-00-delivery-and-flow-metrics.md) |
| 2.1 | The DORA metrics framework | [`02-01-the-dora-metrics-framework.md`](../docs/chapters/02-01-the-dora-metrics-framework.md) |
| 2.2 | Deployment frequency | [`02-02-deployment-frequency.md`](../docs/chapters/02-02-deployment-frequency.md) |
| 2.3 | Lead time for changes | [`02-03-lead-time-for-changes.md`](../docs/chapters/02-03-lead-time-for-changes.md) |
| 2.4 | Change failure rate | [`02-04-change-failure-rate.md`](../docs/chapters/02-04-change-failure-rate.md) |
| 2.5 | Failed deployment recovery time | [`02-05-failed-deployment-recovery-time.md`](../docs/chapters/02-05-failed-deployment-recovery-time.md) |
| 2.6 | Cycle time and its components | [`02-06-cycle-time-and-its-components.md`](../docs/chapters/02-06-cycle-time-and-its-components.md) |
| 2.7 | Flow efficiency and work in process | [`02-07-flow-efficiency-and-work-in-process.md`](../docs/chapters/02-07-flow-efficiency-and-work-in-process.md) |
| 2.8 | Pull request and code review metrics | [`02-08-pull-request-and-code-review-metrics.md`](../docs/chapters/02-08-pull-request-and-code-review-metrics.md) |

## Part 3: Developer Experience and the SPACE Framework

| Chapter | Title | File |
| --- | --- | --- |
| 3.0 | Introduction to Part 3: Developer Experience and the SPACE Framework | [`03-00-developer-experience-and-space.md`](../docs/chapters/03-00-developer-experience-and-space.md) |
| 3.1 | The SPACE framework | [`03-01-the-space-framework.md`](../docs/chapters/03-01-the-space-framework.md) |
| 3.2 | Satisfaction and well-being metrics | [`03-02-satisfaction-and-well-being-metrics.md`](../docs/chapters/03-02-satisfaction-and-well-being-metrics.md) |
| 3.3 | Performance metrics and outcome proxies | [`03-03-performance-metrics-and-outcome-proxies.md`](../docs/chapters/03-03-performance-metrics-and-outcome-proxies.md) |
| 3.4 | Activity metrics and their limits | [`03-04-activity-metrics-and-their-limits.md`](../docs/chapters/03-04-activity-metrics-and-their-limits.md) |
| 3.5 | Communication and collaboration metrics | [`03-05-communication-and-collaboration-metrics.md`](../docs/chapters/03-05-communication-and-collaboration-metrics.md) |
| 3.6 | Efficiency and flow: deep work and interruptions | [`03-06-efficiency-and-flow.md`](../docs/chapters/03-06-efficiency-and-flow.md) |
| 3.7 | Developer experience surveys and DevEx metrics | [`03-07-developer-experience-surveys-and-devex-metrics.md`](../docs/chapters/03-07-developer-experience-surveys-and-devex-metrics.md) |

## Part 4: Code and Quality Metrics

| Chapter | Title | File |
| --- | --- | --- |
| 4.0 | Introduction to Part 4: Code and Quality Metrics | [`04-00-code-and-quality-metrics.md`](../docs/chapters/04-00-code-and-quality-metrics.md) |
| 4.1 | Code complexity metrics | [`04-01-code-complexity-metrics.md`](../docs/chapters/04-01-code-complexity-metrics.md) |
| 4.2 | Test coverage and test effectiveness | [`04-02-test-coverage-and-test-effectiveness.md`](../docs/chapters/04-02-test-coverage-and-test-effectiveness.md) |
| 4.3 | Code churn and hotspot analysis | [`04-03-code-churn-and-hotspot-analysis.md`](../docs/chapters/04-03-code-churn-and-hotspot-analysis.md) |
| 4.4 | Static analysis and code smell metrics | [`04-04-static-analysis-and-code-smell-metrics.md`](../docs/chapters/04-04-static-analysis-and-code-smell-metrics.md) |
| 4.5 | Technical debt measurement | [`04-05-technical-debt-measurement.md`](../docs/chapters/04-05-technical-debt-measurement.md) |
| 4.6 | Documentation and knowledge metrics | [`04-06-documentation-and-knowledge-metrics.md`](../docs/chapters/04-06-documentation-and-knowledge-metrics.md) |

## Part 5: Product and Business Metrics

| Chapter | Title | File |
| --- | --- | --- |
| 5.0 | Introduction to Part 5: Product and Business Metrics | [`05-00-product-and-business-metrics.md`](../docs/chapters/05-00-product-and-business-metrics.md) |
| 5.1 | Escaped defect rate and quality escapes | [`05-01-escaped-defect-rate-and-quality-escapes.md`](../docs/chapters/05-01-escaped-defect-rate-and-quality-escapes.md) |
| 5.2 | Feature adoption and usage metrics | [`05-02-feature-adoption-and-usage-metrics.md`](../docs/chapters/05-02-feature-adoption-and-usage-metrics.md) |
| 5.3 | Customer and business outcome metrics | [`05-03-customer-and-business-outcome-metrics.md`](../docs/chapters/05-03-customer-and-business-outcome-metrics.md) |
| 5.4 | Cost and unit economics of engineering | [`05-04-cost-and-unit-economics-of-engineering.md`](../docs/chapters/05-04-cost-and-unit-economics-of-engineering.md) |
| 5.5 | Return on investment for engineering initiatives | [`05-05-return-on-investment-for-engineering-initiatives.md`](../docs/chapters/05-05-return-on-investment-for-engineering-initiatives.md) |

## Part 6: Reliability, Operations, and Security Metrics

| Chapter | Title | File |
| --- | --- | --- |
| 6.0 | Introduction to Part 6: Reliability, Operations, and Security Metrics | [`06-00-reliability-operations-and-security-metrics.md`](../docs/chapters/06-00-reliability-operations-and-security-metrics.md) |
| 6.1 | Service level indicators, objectives, and error budgets | [`06-01-slis-slos-and-error-budgets.md`](../docs/chapters/06-01-slis-slos-and-error-budgets.md) |
| 6.2 | Incident metrics: detection, response, and recovery | [`06-02-incident-metrics.md`](../docs/chapters/06-02-incident-metrics.md) |
| 6.3 | On-call, capacity, and operational load metrics | [`06-03-on-call-capacity-and-operational-load-metrics.md`](../docs/chapters/06-03-on-call-capacity-and-operational-load-metrics.md) |
| 6.4 | Security and vulnerability management metrics | [`06-04-security-and-vulnerability-management-metrics.md`](../docs/chapters/06-04-security-and-vulnerability-management-metrics.md) |

## Part 7: Metrics in the Age of AI

| Chapter | Title | File |
| --- | --- | --- |
| 7.0 | Introduction to Part 7: Metrics in the Age of AI | [`07-00-metrics-in-the-age-of-ai.md`](../docs/chapters/07-00-metrics-in-the-age-of-ai.md) |
| 7.1 | The generative AI paradigm shift | [`07-01-the-generative-ai-paradigm-shift.md`](../docs/chapters/07-01-the-generative-ai-paradigm-shift.md) |
| 7.2 | Measuring AI-assisted software development | [`07-02-measuring-ai-assisted-software-development.md`](../docs/chapters/07-02-measuring-ai-assisted-software-development.md) |
| 7.3 | Metric inflation and quality dilution risks | [`07-03-metric-inflation-and-quality-dilution-risks.md`](../docs/chapters/07-03-metric-inflation-and-quality-dilution-risks.md) |
| 7.4 | Outcome telemetry as the new north star | [`07-04-outcome-telemetry-as-the-new-north-star.md`](../docs/chapters/07-04-outcome-telemetry-as-the-new-north-star.md) |

## Part 8: Building a Metrics Program

| Chapter | Title | File |
| --- | --- | --- |
| 8.0 | Introduction to Part 8: Building a Metrics Program | [`08-00-building-a-metrics-program.md`](../docs/chapters/08-00-building-a-metrics-program.md) |
| 8.1 | Designing an engineering metrics dashboard | [`08-01-designing-an-engineering-metrics-dashboard.md`](../docs/chapters/08-01-designing-an-engineering-metrics-dashboard.md) |
| 8.2 | Tooling landscape: build versus buy | [`08-02-tooling-landscape-build-versus-buy.md`](../docs/chapters/08-02-tooling-landscape-build-versus-buy.md) |
| 8.3 | Rolling out metrics without breeding fear | [`08-03-rolling-out-metrics-without-breeding-fear.md`](../docs/chapters/08-03-rolling-out-metrics-without-breeding-fear.md) |
| 8.4 | Maturity model for engineering metrics programs | [`08-04-maturity-model-for-engineering-metrics-programs.md`](../docs/chapters/08-04-maturity-model-for-engineering-metrics-programs.md) |
| 8.5 | An incremental adoption roadmap | [`08-05-an-incremental-adoption-roadmap.md`](../docs/chapters/08-05-an-incremental-adoption-roadmap.md) |

## Part 9: Appendices

| Chapter | Title | File |
| --- | --- | --- |
| 9.0 | Appendices | [`09-00-appendices.md`](../docs/chapters/09-00-appendices.md) |
| 9.1 | Glossary | [`09-01-glossary.md`](../docs/chapters/09-01-glossary.md) |
| 9.2 | Metric definitions and formulas reference | [`09-02-metric-definitions-and-formulas-reference.md`](../docs/chapters/09-02-metric-definitions-and-formulas-reference.md) |
| 9.3 | Checklists | [`09-03-checklists.md`](../docs/chapters/09-03-checklists.md) |
| 9.4 | Templates | [`09-04-templates.md`](../docs/chapters/09-04-templates.md) |
| 9.5 | Maturity self-assessment | [`09-05-maturity-self-assessment.md`](../docs/chapters/09-05-maturity-self-assessment.md) |
| 9.6 | References and further reading | [`09-06-references-and-further-reading.md`](../docs/chapters/09-06-references-and-further-reading.md) |
| 9.7 | Index | [`09-07-index.md`](../docs/chapters/09-07-index.md) |
