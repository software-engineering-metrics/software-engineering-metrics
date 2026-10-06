---
name: software-engineering-metrics
description: Use when someone wants to apply this book's guidance to their own team or organization -- choosing a metric, naming its gaming vector and guardrail, applying the Flow Framework, SPACE, or DORA, filling in a metrics charter or dashboard spec, or running the maturity self-assessment. Not for editing the book's own topics; use software-engineering-metrics-maintainer-skill for that.
---

# Software engineering metrics: applying the book

This repository holds a working book about measuring software engineering
well. Use this skill when the request is about a reader's own team, org, or
dashboard, not about the book's content. If the request is to add, edit,
renumber, or review a topic or the spec, stop and use
`software-engineering-metrics-maintainer-skill` instead.

## The book's central premise

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law): a measure
that becomes a target stops being a good measure (topic 1.2). Every metric
family in the book ships with its gaming vector (how a team makes the number
look good without improving the thing it measures) and its guardrail (what
catches that). Carry the same discipline into any answer you give: don't hand
someone a metric without also naming how it gets gamed.

## The recurring method

Apply this to any "what should we measure" or "is this metric any good"
question:

1. **Start from the outcome**, not the activity you can most easily count
   (topic 1.3).
2. **Name the gaming vector and its guardrail** for any metric you recommend
   (topic 1.2).
3. **Match the sector context.** Every content topic has a "Sector lens"
   section covering Startup, Small business, Enterprise, and Government;
   pull the paragraph that matches the reader's situation rather than
   generic advice.
4. **Match maturity to capability.** Don't recommend a level-5 practice to a
   team that hasn't got instrumentation in place yet (topic 8.4, and the
   self-assessment in topic 9.5).
5. **Ground it in real data sources.** Check topic 1.5 for what
   instrumentation a recommendation actually requires.

## Finding the right topic(s)

| If the question is about... | Go to |
| --- | --- |
| Why measure at all, what to avoid, governance, data sources, statistics | Part 1 (topics 1.1-1.6) |
| Delivery speed, flow, cycle time, WIP, queueing theory, PR/code review throughput, DORA metrics | Part 2 (topics 2.1-2.10) |
| Developer experience, satisfaction, SPACE framework, activity vs. outcome metrics, deep work | Part 3 (topics 3.1-3.7) |
| Code complexity, test coverage, churn/hotspots, static analysis, technical debt, documentation | Part 4 (topics 4.1-4.6) |
| Escaped defects, feature adoption, customer/business outcomes, cost, ROI | Part 5 (topics 5.1-5.5) |
| SLIs/SLOs/error budgets, incident metrics, on-call load, security/vulnerability metrics | Part 6 (topics 6.1-6.4) |
| How generative AI changes what these numbers mean | Part 7 (topics 7.1-7.4) |
| Building or rolling out a metrics program, dashboards, build-vs-buy, maturity, adoption roadmap | Part 8 (topics 8.1-8.5) |
| Definitions, formulas, checklists, templates, a maturity self-assessment, references | Part 9 (topics 9.1-9.7) |

## Reusable assets to pull from directly

- `locales/en-gb-oxendict/topics/09-01-glossary.md` : term definitions.
- `locales/en-gb-oxendict/topics/09-02-metric-definitions-and-formulas-reference.md` : formulas.
- `locales/en-gb-oxendict/topics/09-03-checklists.md` and `09-04-templates.md` : ready-to-copy
  checklists and templates.
- `locales/en-gb-oxendict/topics/09-05-maturity-self-assessment.md` : a scored self-assessment.
- `locales/en-gb-oxendict/examples/metrics-charter-example.md` : a worked metrics charter.
- `locales/en-gb-oxendict/examples/dashboard-spec-example.md` : a worked dashboard specification.

## A typical workflow: "what metrics should we track for X"

1. Clarify the outcome or decision the metric is meant to inform.
2. Find the matching topic(s) with the table above and read its "Key
   principles," "Recommendations," and "Trade-offs: pros and cons" sections.
3. State the gaming vector and guardrail for each metric you recommend, not
   just the metric itself.
4. Pull the paragraph from that topic's "Sector lens" matching the reader's
   context.
5. If they're building a program rather than answering one question, start
   from `locales/en-gb-oxendict/examples/metrics-charter-example.md` or
   `dashboard-spec-example.md`, and point them at the topic 9.5 maturity
   self-assessment to locate where they actually are before recommending
   where to go next.
