# Repository index

A map of everything in this repository. For the book itself, start with the
[table of contents](README.md) or the opening chapter,
[What are software engineering metrics?](docs/front-matter/what-are-software-engineering-metrics.md).
The book is published as a website at
<https://software-engineering-metrics.github.io/>.

## The book (everything under `docs/` is published)

- **[README.md](README.md)** : the full table of contents (9 parts, 45 substantive chapters).
- **[docs/index.md](docs/index.md)** : the home page of the published site.
- **[docs/front-matter/what-are-software-engineering-metrics.md](docs/front-matter/what-are-software-engineering-metrics.md)** : the opening essay. Start here.
- **[docs/front-matter/introduction.md](docs/front-matter/introduction.md)** : who the book is for and how it is organized.
- **[docs/front-matter/table-of-contents.md](docs/front-matter/table-of-contents.md)** : the contents page.
- **[docs/chapters/](docs/chapters/)** : the 61 chapter files, named `PP-CC-slug.md`.

## The appendices (Part 9)

- **[Glossary](docs/chapters/09-01-glossary.md)** : definitions of key terms and acronyms.
- **[Metric definitions and formulas reference](docs/chapters/09-02-metric-definitions-and-formulas-reference.md)** : every formula in the book, in one place.
- **[Checklists](docs/chapters/09-03-checklists.md)** : ready-to-use review, launch, and audit checklists.
- **[Templates](docs/chapters/09-04-templates.md)** : a metrics charter, a dashboard spec, and a review agenda.
- **[Maturity self-assessment](docs/chapters/09-05-maturity-self-assessment.md)** : the maturity model from every chapter, consolidated.
- **[References and further reading](docs/chapters/09-06-references-and-further-reading.md)** : the consolidated bibliography.
- **[Index](docs/chapters/09-07-index.md)** : a subject index.

## Governance and specification

- **[spec/index.md](spec/index.md)** : start here for how spec-driven development works in this repository.
- **[spec/structure.md](spec/structure.md)** : the canonical chapter manifest.
- **[spec/conventions.md](spec/conventions.md)** : the writing and format specification.
- **[spec/oxford-spelling.md](spec/oxford-spelling.md)** : the spelling standard.
- **[spec/roadmap.md](spec/roadmap.md)** : the authoring backlog and adoption checklists.

## Contributor and agent guides

- **[AGENTS.md](AGENTS.md)** : short orientation for AI agents and contributors.
- **[CONTRIBUTING.md](CONTRIBUTING.md)** : pointer to the full contributing guide.
- **[docs/contributing/](docs/contributing/)** : authoring, navigation, testing, style rules, part index.

## Tooling

- **[tools/gen_nav.py](tools/gen_nav.py)** : regenerates the TOC, home page, contents page, and subject index.
- **[tools/stats.py](tools/stats.py)** : per-chapter word-count and reference statistics.
- **[tests/validate.py](tests/validate.py)** : the validation suite (`just test`).
- **[justfile](justfile)** : task runner (`just`, `just test`, `just nav`, `just stats`).

## Project

- **[docs/project/index.md](docs/project/index.md)** : how the book is built, checked, and published.
- **[docs/project/changelog.md](docs/project/changelog.md)** : a running log of changes.
