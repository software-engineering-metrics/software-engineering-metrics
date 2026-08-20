# Conventions

This is the writing and format specification for the book. Chapters are
written to satisfy it, and `tests/validate.py` enforces the parts that can be
checked mechanically. When a rule below says "enforced," the test suite will
fail if it is broken.

## Numbering and file names

- Parts are whole numbers (1 through 9). Chapters are decimals within a part.
- Chapter **N.0** is the part introduction. Chapters **N.1, N.2, ...** are the
  content chapters. Numbering within each part is contiguous and starts at
  N.0. (enforced)
- Chapter files live in `docs/chapters/` and are named with a zero-padded,
  dash-separated, sortable numeric prefix followed by a lowercase-dash slug:
  `PP-CC-slug.md`, where `PP` is the two-digit part number and `CC` the
  two-digit chapter number (the N.0 introduction is `PP-00`), for example
  `02-00-delivery-and-flow-metrics.md` and `02-01-the-dora-metrics-framework.md`.
  Padding both fields and joining them with a dash means a plain lexical sort
  (as in `ls`) lists the chapters in reading order.
- The first heading of every chapter file is `# N.M Title` using the unpadded,
  dotted chapter number (for example `# 2.1 The DORA metrics framework`), and
  that number must match the file's `PP-CC` prefix. Chapter cross-references
  in prose use the same dotted form ("chapter 2.1"). (enforced)
- Part 9 is the appendices (glossary, a formulas reference, checklists,
  templates, a maturity self-assessment, references, and an index).

## Chapter template (content chapters, N.1 and up in Parts 1 through 8)

Every content chapter uses these sections, in this order. All are required and
checked. (enforced)

1. `# N.M Title`
2. `## Overview and motivation` (what the metric or practice is, why it matters
   for large teams, and enterprise and government relevance)
3. `## Key principles` (a short bulleted list)
4. `## Recommendations` (the core, under `###` subheadings)
5. `## Trade-offs: pros and cons` (at least one Markdown table plus prose)
6. `## Questions to discuss with your team` (exactly six questions, each with a
   comprehensive paragraph of supporting context)
7. `## Sector lens` (how the topic shifts across four sectors, each with a
   short paragraph: **Startup**, **Small business**, **Enterprise**,
   **Government**)
8. `## Examples` (at least one enterprise and one government example)
9. `## Business case: motivations, ROI, and TCO`
10. `## Anti-patterns and pitfalls`
11. `## Maturity model` (five levels: 1 Initiate, 2 Develop, 3 Standardize, 4
    Manage, 5 Orchestrate)
12. `## Ideas for discussion` (four to six questions)
13. `## Key takeaways`
14. `## References and further reading`

Part introductions (N.0) use a lighter shape: two or three framing paragraphs,
a `## Chapters in this part` list, and a `## How these chapters interrelate`
section. Part 9 appendices are reference material and do not follow the
content template.

## House style

- Write for a colleague, not a spec sheet. Be warm, direct, and encouraging.
  Address the reader as "you." Prefer short sentences and plain words.
- Be opinionated and practical. Give guidance, not a survey. Lead with the
  point.
- Stay vendor-neutral. Name products and tools only as factual examples, never
  as endorsements.
- Aim for roughly 2,000 to 2,800 words per content chapter, going deeper on
  the recommendations, examples, and trade-offs with real substance rather
  than padding. Go shorter only when the topic is genuinely lighter, and
  longer only when it genuinely needs it.
- Every metric family gets its gaming vector named. A chapter that describes a
  metric without describing how it gets gamed, and what guardrail catches
  that, is incomplete (chapter 1.2 sets this expectation).

## Hard rules

- **No em-dashes.** Do not use the em-dash character "—" (U+2014) anywhere.
  Use a comma, colon, parentheses, or two sentences. En-dashes "–" (U+2013)
  are allowed only in numeric ranges (for example, `Parts 1–8`, `2.1–2.8`).
  (enforced)
- **No stock LLM phrasing.** Do not use "not only ... but also", "but also",
  or "load-bearing". Avoid "It's important to note", "In today's fast-paced
  world", "It's crucial to consider", "It appears that", "One could argue",
  and the "it's not just X, it's Y" formula. (partly enforced)
- **Define terms on first use.** The first time a chapter uses a technical
  term, methodology, or acronym, define or expand it, for example "mean time
  to recovery (MTTR)."
- **Link key concepts to Wikipedia on first mention.** Wrap well-established
  encyclopedic terms in a link to their English Wikipedia article, for example
  `[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law)`. Link
  each concept once per chapter. Do not put links in headings, tables, code,
  or the references section. Only link terms that have a real article. (link
  form is enforced)
- **Real references only.** The references section lists real books, papers,
  standards, and reports by author and title. Do not fabricate works or
  invent URLs.
- **Oxford spelling.** Write in Oxford spelling: British English, but `-ize`
  and `-ization` for Greek-root verbs (organize, standardize, prioritize),
  while keeping British forms elsewhere (colour, behaviour, centre, licence as
  a noun, travelled, catalogue). See
  [`spec/oxford-spelling.md`](oxford-spelling.md) for the full rules. Never
  change the spelling inside a URL, inside code, or inside the title of a
  cited work or a proper noun.

## Cross-references

Refer to other chapters by decimal number, for example "see chapter 2.1" or
"(chapter 6.1)." Do not hard-code file paths in chapter prose. On the
published site these references become links automatically, mirroring the
approach used by the sibling `software-engineering-guide` project. Keep
writing plain decimal references; the site build does the rest.

## Changing the structure

To add, remove, rename, or renumber a chapter:

1. Edit the chapter file (or create it following the template).
2. Update `spec/structure.md` so the manifest matches.
3. If a part's introduction lists its chapters, update that list.
4. Run `just nav` to regenerate the table of contents, the site navigation,
   the index, and the TOC page.
5. Run `just test`. It must pass before the change is complete.
