# AGENTS

Guidance for AI agents and human contributors working in this repository. Read
this first. It is short on purpose; the details live in the linked files.

## What this repo is

A working book about measuring software engineering well: 47 topics across 8
parts, plus front matter and appendices. The writing is deliberately warm,
plain, and opinionated, and it follows a strict house style. Every metric
family carries its own gaming vector and guardrail, because the book's central
premise (topic 1.2) is [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law):
a measure that becomes a target stops being a good measure. This repository
holds the book's content and specification, plus the SvelteKit site
(`software-engineering-metrics.github.io/`) that renders it into the
published website. The site is its own project with its own AGENTS.md; it is
not governed by the content rules below.

The book is published in 28 locales (see [`spec/locales.md`](spec/locales.md)):
four English spelling variants, `en-gb-oxendict` (British English, Oxford
spelling; the authoring source), `en-001` (international English), `en-gb`
(mainstream British English), and `en-us` (American English), plus 24
hand-translated locales (Welsh, Spanish, Hindi, Chinese, German, Arabic,
Bengali, Korean, Portuguese, Japanese, Russian, French, Swedish, Dutch,
Indonesian, Urdu). Only `en-gb-oxendict` is hand-edited; the other three English
variants are mechanically derived from it by `tools/localize.py`. Each
translated locale is maintained by hand and ships only its `topics` section
(named in its own language, see below); 16 locales are served on the site.

## Golden rules (do not break these)

1. **No em-dashes.** Never use "—" (U+2014). Use a comma, colon, parentheses, or
   two sentences. En-dashes "–" are allowed only in numeric ranges.
2. **No stock LLM phrasing.** No "not only ... but also", "but also", or
   "load-bearing"; no "It's important to note", "In today's fast-paced world",
   and similar filler.
3. **Follow the topic template.** Content topics use the fixed section order
   in [`locales/en-gb-oxendict/contributing/chapter-template.md`](locales/en-gb-oxendict/contributing/chapter-template.md).
4. **Define terms on first use** and **link key concepts to Wikipedia** on first
   mention. Real references only; never fabricate a work or a URL.
5. **The spec is the source of truth.** It lives at the repository root in
   [`spec/`](spec/index.md), not under `locales/`, because the book (not the site)
   is what it governs. Structure is declared in
   [`spec/structure.md`](spec/structure.md); style is declared in
   [`spec/conventions.md`](spec/conventions.md); spelling is declared in
   [`spec/oxford-spelling.md`](spec/oxford-spelling.md) and
   [`spec/locales.md`](spec/locales.md). Change the spec and
   the topics together.
6. **Tests must pass.** Run `just test` before you consider a change done.
7. **Name the gaming vector.** A topic that presents a metric without also
   presenting how it gets gamed and what pairs with it to catch that is not
   finished.

The full, enforceable version of rules 1 through 5 is
[`locales/en-gb-oxendict/contributing/style-rules.md`](locales/en-gb-oxendict/contributing/style-rules.md)
and [`spec/conventions.md`](spec/conventions.md).

## Topic guides

- [`AGENTS/layout.md`](AGENTS/layout.md) : where everything lives
- [`AGENTS/style.md`](AGENTS/style.md) : the house style in one page
- [`AGENTS/locales.md`](AGENTS/locales.md) : locales, section names, peer ids
- [`AGENTS/workflow.md`](AGENTS/workflow.md) : the usual workflow, git, dependencies

## Task guides

- Writing or editing a topic: [`locales/en-gb-oxendict/contributing/authoring.md`](locales/en-gb-oxendict/contributing/authoring.md)
- Regenerating navigation after structure changes: [`locales/en-gb-oxendict/contributing/navigation.md`](locales/en-gb-oxendict/contributing/navigation.md)
- Running and understanding the tests: [`locales/en-gb-oxendict/contributing/testing.md`](locales/en-gb-oxendict/contributing/testing.md)
- Locale policy and the derivation tool: [`spec/locales.md`](spec/locales.md)

- Locales, translation, tooling, release, and the site, one short guide each: [`AGENTS/`](AGENTS/README.md)

## Shared snippets

- Blank topic template: [`locales/en-gb-oxendict/contributing/chapter-template.md`](locales/en-gb-oxendict/contributing/chapter-template.md)
- Style rules (enforceable): [`locales/en-gb-oxendict/contributing/style-rules.md`](locales/en-gb-oxendict/contributing/style-rules.md)
- Part index: [`locales/en-gb-oxendict/contributing/part-index.md`](locales/en-gb-oxendict/contributing/part-index.md)

## The usual workflow

Edit only `locales/en-gb-oxendict/`, run `python3 tools/localize.py`, run
`just test`, update `locales/en-gb-oxendict/project/changelog.md`. Details:
[`AGENTS/workflow.md`](AGENTS/workflow.md).
