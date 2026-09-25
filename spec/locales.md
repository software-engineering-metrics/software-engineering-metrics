# Locales

The book is published in four locales, each a complete copy of every chapter,
front-matter file, example, contributing guide, and project file, differing
only in spelling. All four keep identical structure, section order, word
counts, and file names; see [structure.md](structure.md) and
[conventions.md](conventions.md), which govern all four equally.

| Locale | Name | Spelling |
| --- | --- | --- |
| `en-gb-oxendict` | British English, Oxford spelling | The authoring locale; see [oxford-spelling.md](oxford-spelling.md). |
| `en-001` | International English | Mirrors `en-gb-oxendict`. Oxford spelling is itself the style standard of the UN System and most international standards bodies (ISO, IEC, WHO; see oxford-spelling.md), so there is no separate international spelling to derive. The locale exists in its own right for discoverability in the site's locale picker, and as a hook for any future divergence, rather than as a spelling variant. |
| `en-gb` | British English | `en-gb-oxendict` with `-ize`/`-ization` converted to `-ise`/`-isation`, the one axis that separates Oxford spelling from mainstream British spelling. Every other British feature (colour-family spellings, `-re`, the licence/license and practice/practise noun/verb split, doubled `-ll-`, `-ogue`, `programme`, `artefact`, `judgement`) is identical to `en-gb-oxendict`. |
| `en-us` | American English | A full Americanization of `en-gb-oxendict`: `-our` to `-or`, `-re` to `-er`, `-ce` to `-se`, doubled `-ll-` to single `-l` (and the reverse for `fulfil`/`fulfilment`), `-ogue` to `-og`, `programme` to `program` (American does not distinguish the software sense from the scheme/initiative sense), `artefact` to `artifact`, `judgement`/`acknowledgement` to `judgment`/`acknowledgment`, `sceptical` to `skeptical`, and `analysed` to `analyzed`. |

## `locales/en-gb-oxendict/` is the source

Author and edit chapters in `locales/en-gb-oxendict/`. It is the one locale a
person writes by hand; the other three are mechanically derived from it by
[`tools/localize.py`](../tools/localize.py) and are never hand-edited.

After changing anything under `locales/en-gb-oxendict/`, run:

```sh
python3 tools/localize.py
```

This re-derives `en-001`, `en-gb`, and `en-us` from the current
`en-gb-oxendict` content. Run it before `just test`; the test suite checks
all four locales and will fail if a derived locale has drifted from the
source (see [testing.md](../locales/en-gb-oxendict/contributing/testing.md)).

## What the derivation never touches

`tools/localize.py` applies word-level spelling substitutions only outside a
short list of protected regions, so that a locale conversion can never change
meaning, break a link, or corrupt a citation:

- Fenced code blocks, except ` ```markdown ` ones, which hold reader-facing
  template prose (chapter 9.4) rather than literal code.
- Inline code spans and markdown link targets (the book's own hard rule from
  [oxford-spelling.md](oxford-spelling.md): never modify a URL).
- Italicized spans (`*...*`), this book's house style for citing a work's
  title in "References and further reading" sections. A real book keeps its
  real published spelling regardless of the surrounding locale, so titles are
  never respelled.
- A short list of literal proper-noun phrases with a fixed real-world
  spelling (for example the *GPRA Modernization Act*), for the same reason.

Every substitution list in `tools/localize.py` is restricted to word forms
verified present in the source text, not the full theoretical vocabulary of
each spelling variant, to keep the derivation auditable.

## Adding a locale

1. Decide its spelling policy relative to `en-gb-oxendict` and document it in
   the table above.
2. Add the locale to `TARGET_LOCALES` (or `REFERENCE_LOCALE`, if it becomes
   the new source) in `tools/localize.py`, with a `to_<locale>` function.
3. Run `tools/localize.py`, then `just nav` and `just test`.
4. Wire it into the site's `LocalePicker` (see
   `software-engineering-metrics.github.io/`).
