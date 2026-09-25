# AGENTS

Guidance for AI agents and human contributors working in this repository. Read
this first. It is short on purpose; the details live in the linked files.

## What this repo is

A working book about measuring software engineering well: 47 chapters across 8
parts, plus front matter and appendices. The writing is deliberately warm,
plain, and opinionated, and it follows a strict house style. Every metric
family carries its own gaming vector and guardrail, because the book's central
premise (chapter 1.2) is [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law):
a measure that becomes a target stops being a good measure. This repository
holds the book's content and specification, plus the SvelteKit site
(`software-engineering-metrics.github.io/`) that renders it into the
published website. The site is its own project with its own AGENTS.md; it is
not governed by the content rules below.

The book is published in four locales (see [`spec/locales.md`](spec/locales.md)):
`en-gb-oxendict` (British English, Oxford spelling; the authoring source),
`en-001` (international English), `en-gb` (mainstream British English), and
`en-us` (American English). Only `en-gb-oxendict` is hand-edited; the other
three are mechanically derived from it by `tools/localize.py`.

## Golden rules (do not break these)

1. **No em-dashes.** Never use "—" (U+2014). Use a comma, colon, parentheses, or
   two sentences. En-dashes "–" are allowed only in numeric ranges.
2. **No stock LLM phrasing.** No "not only ... but also", "but also", or
   "load-bearing"; no "It's important to note", "In today's fast-paced world",
   and similar filler.
3. **Follow the chapter template.** Content chapters use the fixed section order
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
   the chapters together.
6. **Tests must pass.** Run `just test` before you consider a change done.
7. **Name the gaming vector.** A chapter that presents a metric without also
   presenting how it gets gamed and what pairs with it to catch that is not
   finished.

The full, enforceable version of rules 1 through 5 is
[`locales/en-gb-oxendict/contributing/style-rules.md`](locales/en-gb-oxendict/contributing/style-rules.md)
and [`spec/conventions.md`](spec/conventions.md).

## Repository layout

- `locales/` : everything the published site contains, rendered by
  `software-engineering-metrics.github.io/` (see below), one subdirectory per
  locale (`en-gb-oxendict`, `en-001`, `en-gb`, `en-us`), each with the
  identical structure below.
  - `<locale>/chapters/` : the chapter files, named `PP-CC-slug.md` with a zero-padded, dash-separated, sortable prefix (the chapter number in the text stays dotted, e.g. `2.1`), identical across every locale.
  - `<locale>/front-matter/` : the opening essay, introduction, and table of contents.
  - `<locale>/examples/` : small illustrative examples (a metrics charter, a dashboard spec).
  - `<locale>/contributing/` : contributor and agent guides, plus shared snippets.
  - `<locale>/project/` : project documentation and the changelog.
  - Edit only `locales/en-gb-oxendict/`; run `python3 tools/localize.py` to re-derive the other three.
- `spec/` : the specification-driven source of truth (structure, conventions,
  spelling, locales, roadmap). It is hand-authored and not published to the
  site; the book is what it governs.
- `tools/` : `localize.py`, which derives `en-001`, `en-gb`, and `en-us` from
  the `en-gb-oxendict` source; `gen_nav.py`, which generates the README TOC,
  the per-locale site home pages, contents pages, and subject indexes; and
  `stats.py`, the Markdown stats report behind `just stats`.
- `tests/` : `validate.py`, the enforcement suite (checks all four locales; it
  skips `software-engineering-metrics.github.io/` entirely).
- `software-engineering-metrics.github.io/` : the SvelteKit site that
  prerenders the book into the published website, deployed by GitHub Pages.
  It copies `locales/` into its own `src/content/` (see its README and
  AGENTS.md) rather than reading it directly; never hand-edit the copy, and
  never change book content from within this directory.
- `.github/workflows/` : `test.yml` (PR checks), `links.yml` (weekly external
  link check), `deploy.yml` (builds and deploys the site on push to `main`).
- `justfile`, `pyproject.toml` : the task runner and the Python dev-tooling
  dependencies (codespell; see `just spell`).

## Task guides

- Writing or editing a chapter: [`locales/en-gb-oxendict/contributing/authoring.md`](locales/en-gb-oxendict/contributing/authoring.md)
- Regenerating navigation after structure changes: [`locales/en-gb-oxendict/contributing/navigation.md`](locales/en-gb-oxendict/contributing/navigation.md)
- Running and understanding the tests: [`locales/en-gb-oxendict/contributing/testing.md`](locales/en-gb-oxendict/contributing/testing.md)
- Locale policy and the derivation tool: [`spec/locales.md`](spec/locales.md)

## Shared snippets

- Blank chapter template: [`locales/en-gb-oxendict/contributing/chapter-template.md`](locales/en-gb-oxendict/contributing/chapter-template.md)
- Style rules (enforceable): [`locales/en-gb-oxendict/contributing/style-rules.md`](locales/en-gb-oxendict/contributing/style-rules.md)
- Part index: [`locales/en-gb-oxendict/contributing/part-index.md`](locales/en-gb-oxendict/contributing/part-index.md)

## The usual workflow

1. Read the relevant task guide above.
2. Make the smallest change that satisfies the request, editing only
   `locales/en-gb-oxendict/`.
3. Run `python3 tools/localize.py` to re-derive `en-001`, `en-gb`, and
   `en-us`.
4. If you changed the set of chapters, update `spec/structure.md` and run
   `just nav`.
5. Run `just test`. Fix anything it reports. `just spell` catches spelling
   issues the suite does not; CI runs it too.
6. Update `locales/en-gb-oxendict/project/changelog.md` with a one-line
   summary of what changed.

Every file in `locales/en-gb-oxendict/contributing/` is kept small so it loads
cheaply into an agent's context.
