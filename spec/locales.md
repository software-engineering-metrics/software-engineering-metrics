# Locales

The book is published in four locales, each a complete copy of every chapter,
front-matter file, example, contributing guide, and project file, differing
only in spelling. All four keep identical structure, section order, word
counts, and file names; see [structure.md](structure.md) and
[conventions.md](conventions.md), which govern all four equally.

These four are English spelling variants of one authored text, mechanically
derived by `tools/localize.py`. They are not the same thing as a genuinely
*translated* locale (a different language, with its own slugs, that a person
translates by hand): see
[locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md)
for that mechanism, and "Planned translated locales" below for the languages
this book intends to add.

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

## Every content file carries a `.locale-peer-id`

Alongside its content, every chapter, front-matter file, example, contributing
guide, and project file has a sibling `.locale-peer-id` file (same base name,
that extension instead of `.md`): 32 lowercase hex characters plus a trailing
newline, generated and kept in sync by
[`tools/gen_locale_peer_ids.py`](../tools/gen_locale_peer_ids.py). For a given
piece of content, this id is byte-identical across every locale that has that
content, whatever that locale's own slug for it is.

Today, across the four English spelling variants, the id is redundant with
the shared file name (all four use identical slugs). It exists ahead of need:
once a translated locale gives a topic its own native-script or accented slug
(see the sub-spec linked above), the slug can no longer be the join key across
locales, and the peer id is what resolves "this page, in locale X" instead.
`tests/validate.py` checks that every content file has a well-formed,
matching peer id in every locale; run `tools/gen_locale_peer_ids.py` after
adding a chapter, before `just test`.

## Planned translated locales

Not yet translated; each is a placeholder in the sense that no
`locales/<code>/` directory exists on disk for it yet. A locale starts here
and stops being "planned" only once someone begins translating it, per
[locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md)
(content structure, slugs, the site's i18n mechanism, and the bug watch-list
that mechanism exists to avoid repeating). The full list, with each
language's own endonym and its English exonym, is
[locales-for-global-sharing-with-svelte/locales.tsv](locales-for-global-sharing-with-svelte/locales.tsv):
Arabic (`ar-001`), Bengali (`bn-001`), Welsh (`cy-001`), Spanish (`es-001`),
French (`fr-001`), Hindi (`hi-001`), Indonesian (`id-001`), Portuguese
(`pt-001`), Russian (`ru-001`), Urdu (`ur-001`), and Chinese, China (`zh-cn`).

## Adding a locale

Adding one of the four mechanically-derived English spelling variants:

1. Decide its spelling policy relative to `en-gb-oxendict` and document it in
   the table above.
2. Add the locale to `TARGET_LOCALES` (or `REFERENCE_LOCALE`, if it becomes
   the new source) in `tools/localize.py`, with a `to_<locale>` function.
3. Run `tools/localize.py`, then `tools/gen_locale_peer_ids.py`, `just nav`,
   and `just test`.
4. Wire it into the site's `LocalePicker` (see
   `software-engineering-metrics.github.io/`).

Adding a genuinely translated locale from the planned list above is a
different, larger process: see
[locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md)
for content structure, slugs, and the site's i18n mechanism.
