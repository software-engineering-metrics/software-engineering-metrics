# Repository index

A map of everything in this repository. For the book itself, start with the
[table of contents](README.md) or the opening chapter,
[What are software engineering metrics?](locales/en-gb-oxendict/front-matter/what-are-software-engineering-metrics.md).
The book is published as a website at
<https://software-engineering-metrics.github.io/>.

## The book (published in four locales; see spec/locales.md)

- **[README.md](README.md)** : the full table of contents (9 parts, 47 substantive chapters), in the reference locale.
- **[locales/en-gb-oxendict/](locales/en-gb-oxendict/)** : British English, Oxford spelling. The authoring source; hand-edit here.
- **[locales/en-001/](locales/en-001/)**, **[locales/en-gb/](locales/en-gb/)**, **[locales/en-us/](locales/en-us/)** : international, mainstream British, and American English. Mechanically derived by `tools/localize.py`; never hand-edited.
- **[locales/en-gb-oxendict/index.md](locales/en-gb-oxendict/index.md)** : the home page of the published site (reference locale).
- **[locales/en-gb-oxendict/front-matter/what-are-software-engineering-metrics.md](locales/en-gb-oxendict/front-matter/what-are-software-engineering-metrics.md)** : the opening essay. Start here.
- **[locales/en-gb-oxendict/front-matter/introduction.md](locales/en-gb-oxendict/front-matter/introduction.md)** : who the book is for and how it is organized.
- **[locales/en-gb-oxendict/front-matter/table-of-contents.md](locales/en-gb-oxendict/front-matter/table-of-contents.md)** : the contents page.
- **[locales/en-gb-oxendict/chapters/](locales/en-gb-oxendict/chapters/)** : the chapter files, named `PP-CC-slug.md`, identical across every locale.

## The appendices (Part 9)

- **[Glossary](locales/en-gb-oxendict/chapters/09-01-glossary.md)** : definitions of key terms and acronyms.
- **[Metric definitions and formulas reference](locales/en-gb-oxendict/chapters/09-02-metric-definitions-and-formulas-reference.md)** : every formula in the book, in one place.
- **[Checklists](locales/en-gb-oxendict/chapters/09-03-checklists.md)** : ready-to-use review, launch, and audit checklists.
- **[Templates](locales/en-gb-oxendict/chapters/09-04-templates.md)** : a metrics charter, a dashboard spec, and a review agenda.
- **[Maturity self-assessment](locales/en-gb-oxendict/chapters/09-05-maturity-self-assessment.md)** : the maturity model from every chapter, consolidated.
- **[References and further reading](locales/en-gb-oxendict/chapters/09-06-references-and-further-reading.md)** : the consolidated bibliography.
- **[Index](locales/en-gb-oxendict/chapters/09-07-index.md)** : a subject index.

## Governance and specification

- **[spec/index.md](spec/index.md)** : start here for how spec-driven development works in this repository.
- **[spec/structure.md](spec/structure.md)** : the canonical chapter manifest.
- **[spec/conventions.md](spec/conventions.md)** : the writing and format specification.
- **[spec/oxford-spelling.md](spec/oxford-spelling.md)** : the spelling standard for the authoring locale.
- **[spec/locales.md](spec/locales.md)** : the four published locales and how the derived three are built.
- **[spec/roadmap.md](spec/roadmap.md)** : the authoring backlog and adoption checklists.

## Contributor and agent guides

- **[AGENTS.md](AGENTS.md)** : short orientation for AI agents and contributors.
- **[CONTRIBUTING.md](CONTRIBUTING.md)** : pointer to the full contributing guide.
- **[locales/en-gb-oxendict/contributing/](locales/en-gb-oxendict/contributing/)** : authoring, navigation, testing, style rules, part index.

## Tooling

- **[tools/localize.py](tools/localize.py)** : derives `en-001`, `en-gb`, and `en-us` from the `en-gb-oxendict` source.
- **[tools/gen_nav.py](tools/gen_nav.py)** : regenerates the TOC, home page, contents page, and subject index, per locale.
- **[tools/stats.py](tools/stats.py)** : per-chapter word-count and reference statistics.
- **[tests/validate.py](tests/validate.py)** : the validation suite (`just test`), checked across all four locales.
- **[justfile](justfile)** : task runner (`just`, `just test`, `just nav`, `just stats`).

## Project

- **[locales/en-gb-oxendict/project/index.md](locales/en-gb-oxendict/project/index.md)** : how the book is built, checked, and published.
- **[locales/en-gb-oxendict/project/changelog.md](locales/en-gb-oxendict/project/changelog.md)** : a running log of changes.
