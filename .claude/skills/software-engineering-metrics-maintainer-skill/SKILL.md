---
name: software-engineering-metrics-maintainer
description: Use when adding, editing, renumbering, or reviewing chapters or the spec in this software-engineering-metrics book repository -- enforces the chapter template, house style (no em-dash, no stock LLM phrasing, Oxford spelling, Wikipedia links, gaming vector), keeps spec/structure.md in sync with docs/chapters, regenerates navigation, and runs the test/spell workflow before calling a change done. Not for answering a reader's own metrics questions; use software-engineering-metrics-skill for that.
---

# Software engineering metrics: maintaining this repository

Use this skill for any change to the book's own content or structure: adding,
editing, or renumbering a chapter, changing anything under `spec/`, or
reviewing a diff against house style. Read `AGENTS.md` at the repository root
first if it isn't already in context; this skill summarizes it into a
checklist but AGENTS.md and the files it links are the source of truth.

## Golden rules (never break these)

1. **No em-dashes** (Unicode U+2014) anywhere. Use a comma, colon,
   parentheses, or two sentences. The narrower dash (U+2013) is allowed only
   in numeric ranges, for example between the two ends of "chapters 2.1 to
   2.8."
2. **No stock LLM phrasing**: the paired-correlative-conjunction construction
   the tests forbid (see `FORBIDDEN` in `tests/validate.py`), the figurative
   structural-metaphor adjective it also forbids, "It's important to note,"
   "In today's fast-paced world," and similar filler.
3. **Content chapters follow the fixed section order** in
   `docs/contributing/chapter-template.md`, exactly, with nothing missing.
4. **Define terms on first use** and **link key concepts to Wikipedia** on
   first mention, in prose only, once per chapter. Real references only,
   never a fabricated work or URL.
5. **`spec/` is the source of truth for structure and style.** Change
   `spec/structure.md` (chapters) or `spec/conventions.md` (style) and the
   chapter files together, never one without the other.
6. **Oxford spelling**: `-ize`/`-ization` for Greek-root verbs, British forms
   elsewhere (see `spec/oxford-spelling.md`).
7. **Name the gaming vector.** A chapter describing a metric without also
   describing how it gets gamed and what guardrail catches that is not
   finished (chapter 1.2 sets this expectation).
8. **`just test` must pass** before a change is done.

## Task guides (load the one you need, not all of them)

- Writing or editing a chapter: `docs/contributing/authoring.md`
- Regenerating navigation: `docs/contributing/navigation.md`
- Running and understanding the tests: `docs/contributing/testing.md`
- Full enforceable style rules: `docs/contributing/style-rules.md` and
  `spec/conventions.md`
- Blank chapter template: `docs/contributing/chapter-template.md`
- Canonical chapter manifest: `spec/structure.md`

## Workflow for any change

1. Read the relevant task guide above.
2. Make the smallest change that satisfies the request.
3. If you added, removed, renamed, or renumbered a chapter: update
   `spec/structure.md` (and the part's N.0 introduction's chapter list, if it
   enumerates one) to match, then run `just nav`. That regenerates
   `README.md`, `docs/index.md`, `docs/front-matter/table-of-contents.md`,
   and `docs/chapters/09-07-index.md`. **Never hand-edit those four files**;
   the next `just nav` run overwrites hand edits silently.
4. Run `just test`. Fix everything it reports. Run `just spell` too
   (codespell; CI runs it, `just test` does not).
5. Add a one-line entry to `docs/project/changelog.md` under **Unreleased**.

## New chapter checklist

- File `docs/chapters/PP-CC-slug.md`: zero-padded part/chapter, dash-joined,
  lowercase-dash slug, next contiguous decimal number within its part.
- First heading `# N.M Title` (dotted, unpadded), matching the file's `PP-CC`
  prefix and matching `spec/structure.md`'s title character for character.
- All 14 template sections present, in order: Overview and motivation, Key
  principles, Recommendations, Trade-offs (with a table), six Questions to
  discuss (each with a full supporting paragraph), Sector lens (Startup,
  Small business, Enterprise, Government), Examples (at least one enterprise
  and one government), Business case, Anti-patterns and pitfalls, Maturity
  model (five levels), Ideas for discussion, Key takeaways, References.
- Gaming vector and guardrail stated explicitly for the metric family.
- Roughly 2,000-2,800 words (1,500 minimum, enforced); real references only.
- `spec/structure.md` updated, and the part's N.0 chapter list if it has one.
- `just nav` then `just test` both run and clean.

## Common test failures and fixes

| Failure | Fix |
| --- | --- |
| Em-dash found | Reword the sentence; don't just delete the dash. |
| Missing section | Add the missing `##` section from the chapter template, in the right position. |
| Structure mismatch | `spec/structure.md` and the files on disk disagree; bring them back in line in both directions. |
| Broken link | Fix the path, or update it after a rename. |
| Numbering gap | Renumber so the part is contiguous starting at N.0. |
| Forbidden phrase | Reword; see the phrase list in the golden rules above. |

## What never to hand-edit

`README.md`, `docs/index.md`, `docs/front-matter/table-of-contents.md`, and
`docs/chapters/09-07-index.md` are generated by `tools/gen_nav.py` via
`just nav`. Change the chapters and regenerate instead.
