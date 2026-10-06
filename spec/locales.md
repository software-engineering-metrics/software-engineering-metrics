# Locales

The book is published in four English spelling-variant locales, each a
complete copy of every topic, front-matter file, example, contributing guide,
and project file, differing only in spelling, plus 26 hand-translated locales
(see "Translated locales" below). All four keep identical structure, section order, word
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

Author and edit topics in `locales/en-gb-oxendict/`. It is the one locale a
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
  template prose (topic 9.4) rather than literal code.
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

Alongside its content, every topic, front-matter file, example, contributing
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
adding a topic, before `just test`.

## Translated locales

Twenty-six translated locales (a different language, hand-translated,
with their own slugs) are complete: Welsh (`cy-001`), Spanish (`es-001`),
Hindi (`hi-001`), Chinese, China (`zh-cn`), German, Germany (`de-de`),
Arabic, Egypt (`ar-eg`), Bengali, Bangladesh (`bn-bd`), Hindi, India
(`hi-id`), Korean, Korea (`ko-kr`), Spanish, Spain (`es-es`),
Portuguese, Portugal (`pt-pt`), Japanese, Japan (`ja-jp`), Russian,
Russia (`ru-ru`), French, France (`fr-fr`), Swedish, Sweden
(`sv-se`), Dutch, Netherlands (`nl-nl`), Welsh, Great Britain
(`cy-gb`), Arabic (`ar-001`), Bengali (`bn-001`), French (`fr-001`), Russian
(`ru-001`), Chinese (`zh-001`), Indonesian (`id-001`), Urdu (`ur-001`), Portuguese (`pt-001`), and German (`de-001`), each with all 63
topics and a section directory on disk (see [Section directory names](#section-directory-names)).
`cy-gb` is identical in content to `cy-001`, `ar-001` to `ar-eg`,
`bn-001` to `bn-bd`, `fr-001` to `fr-fr`, `ru-001` to `ru-ru`, and
`zh-001` to `zh-cn`, `pt-001` to `pt-pt`, `de-001` to `de-de` (none has country-specific usage to remove), each with
the same relationship as `hi-id` to `hi-001`. `id-001` is, by contrast, a
genuine from-scratch hand translation, since no prior Indonesian locale
existed to build from, and so is `ur-001` (Urdu, right-to-left). `hi-id` is identical in content to `hi-001` (standard Hindi has no distinct
India-specific variant the way some other languages do; `hi-id` simply
gives the same translation a country-tagged locale code, the same
relationship `en-001` has to `en-gb-oxendict`). `es-es` started from a copy
of `es-001` (which turned out, on inspection, to already be grammatically
neutral: no `vosotros`/`ustedes` forms, and vocabulary mostly already
Spain-leaning, "fallo" over "falla", "rendimiento" over "desempeño") and
then received a targeted terminology pass to the remaining minority
usages, most notably "incidente" to "incidencia" for this book's
incident-metrics domain, with corresponding gender-agreement fixes
throughout. `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr`, `sv-se`, and `nl-nl` are, by contrast,
genuine from-scratch hand translations, since no prior Portuguese, Japanese,
Russian, French, Swedish, or Dutch locale existed to build from. Every
translated locale carries all five sections (`topics`, `front-matter`,
`examples`, `contributing`, `project`), each under a directory named in the
locale's own language (see `section-names.json`), plus a translated home
`index.md` and table of contents; `tools/gen_translated_nav.py` refreshes their
topic lists from the topic titles. The site still degrades gracefully for a
missing section (an empty list, or a fallback to the default locale's intro
copy), per `software-engineering-metrics.github.io/AGENTS.md`. All fourteen of `ar-001`, `bn-001`,
`cy-001`, `cy-gb`, `de-001`, `es-001`, `fr-001`, `hi-001`, `id-001`, `pt-001`, `ru-001`, `ur-001`, `zh-001`, and `zh-cn` are wired into the site's
`SERVED_LOCALE_CODES` and served at their own locale-prefixed path;
`de-de`, `ar-eg`, `bn-bd`, `hi-id`, `ko-kr`, `es-es`, `pt-pt`, `ja-jp`,
`ru-ru`, `fr-fr`, `sv-se`, and `nl-nl` are not yet wired into the site.

## Section directory names

The section directories inside each locale are named per locale, and the
names live in [`section-names.json`](section-names.json): a `default` map
plus per-locale overrides. Locale codes are identifiers and are never
translated, but the section names are. The `chapters` section is called
`topics/` in the English locales and is translated in every other locale
(`temas/` in `es-es`, `sujets/` in `fr-fr`, `themen/` in `de-de`, and so
on); `es-001` also translates `examples` to `ejemplos/`. The section keys
(`chapters`, `front-matter`, `examples`, `contributing`, `project`) are
canonical identifiers: the tools read the real directory through
`tools/section_names.py`, and the site keeps its canonical names and URLs by
mapping the directories (and relative links) back in
`scripts/sync-content.mjs`. Topic filenames and the book's prose are
unchanged.

## Planned translated locales

Not yet translated; each is a placeholder in the sense that no
`locales/<code>/` directory exists on disk for it yet. A locale starts here
and stops being "planned" only once someone begins translating it, per
[locales-for-global-sharing-with-svelte/index.md](locales-for-global-sharing-with-svelte/index.md)
(content structure, slugs, the site's i18n mechanism, and the bug watch-list
that mechanism exists to avoid repeating). The full list, with each
language's own endonym and its English exonym, is
[locales-for-global-sharing-with-svelte/locales.tsv](locales-for-global-sharing-with-svelte/locales.tsv):
None remain: every locale in that list is now translated.

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
