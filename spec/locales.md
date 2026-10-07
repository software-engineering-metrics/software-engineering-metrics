# Locales

The book is published in four English spelling-variant locales, each a
complete copy of every topic, front-matter file, example, contributing guide,
and project file, differing only in spelling, plus 30 hand-translated locales
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

## Locale directory names

Every directory under `locales/` is named `<language>-<region>`, a lowercase
two-letter language code, a hyphen, and a region (`cy-gb`, `de-de`) or the
UN M49 "world" code `001` for an international variant (`en-001`, `fr-001`).
`en-gb-oxendict` adds one trailing variant subtag. A bare two-letter name
(`locales/en/`) is never a directory, and is never a site route either (`/en/` is a
404): a locale is served only at its own code. `tests/validate.py` fails if a
two-letter directory appears.

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

Thirty hand-translated locales (a different language, with their own
slugs) are complete. Each has all 63 topics plus the other four sections,
a translated home `index.md` and table of contents, and a section directory
named in its own language (see [Section directory names](#section-directory-names));
`tools/gen_translated_nav.py` refreshes the topic lists from the topic
titles. None is touched by `tools/localize.py`.

| Language | Locales | Relationship |
| --- | --- | --- |
| Arabic | `ar-001`, `ar-eg` | identical copies; `ar-eg` is the hand translation |
| Bengali | `bn-001`, `bn-bd` | identical copies; `bn-bd` is the hand translation |
| Welsh | `cy-001`, `cy-gb` | identical copies; `cy-001` is the hand translation |
| German | `de-001`, `de-de` | identical copies; `de-de` is the hand translation |
| Spanish | `es-001`, `es-es` | `es-es` started as a copy of `es-001` plus a terminology pass (below) |
| French | `fr-001`, `fr-fr` | identical copies; `fr-fr` is the hand translation |
| Hindi | `hi-001`, `hi-id` | identical copies; `hi-001` is the hand translation |
| Indonesian | `id-001` | single locale, hand translation |
| Japanese | `ja-001`, `ja-jp` | identical copies; `ja-jp` is the hand translation |
| Korean | `ko-001`, `ko-kr` | identical copies; `ko-kr` is the hand translation |
| Dutch | `nl-001`, `nl-nl` | identical copies; `nl-nl` is the hand translation |
| Portuguese | `pt-001`, `pt-pt` | identical copies; `pt-pt` is the hand translation |
| Russian | `ru-001`, `ru-ru` | identical copies; `ru-ru` is the hand translation |
| Swedish | `sv-001`, `sv-se` | identical copies; `sv-se` is the hand translation |
| Urdu | `ur-001` | single locale, hand translation (right-to-left) |
| Chinese | `zh-001`, `zh-cn` | identical copies; `zh-cn` is the hand translation |

A `-001` copy exists so the site can serve a language-wide international
locale; standard languages such as Hindi have no distinct country-specific
variant to translate separately. When you edit one half of a pair, copy
the result to the other so they stay identical.

`es-es` started from a copy of `es-001` (which turned out, on inspection,
to already be grammatically neutral: no `vosotros`/`ustedes` forms, and
vocabulary mostly already Spain-leaning, "fallo" over "falla",
"rendimiento" over "desempeño") and then received a targeted terminology
pass on the remaining minority usages, most notably "incidente" to
"incidencia" for this book's incident-metrics domain, with corresponding
gender-agreement fixes throughout. Every other language was translated
from the English source directly, since no prior locale existed to build
from. Welsh terminology follows the Welsh Government's TermCymru list.

### Served on the site

Eighteen translated locales are wired into the site's
`SERVED_LOCALE_CODES` (`scripts/locales.mjs`): every `-001` locale, plus
`cy-gb` and `zh-cn`. The country-tagged hand translations (`ar-eg`,
`bn-bd`, `de-de`, `es-es`, `fr-fr`, `hi-id`, `ja-jp`, `ko-kr`, `nl-nl`,
`pt-pt`, `ru-ru`, `sv-se`) exist on disk but are not served. A missing
section degrades gracefully on the site (an empty list, or a fallback to
the default locale's intro copy), per
`software-engineering-metrics.github.io/AGENTS.md`.

### Routing

- Each served locale is reachable at its own prefix: `/en-001/`, `/cy-gb/`.
- There are no two-letter alias routes: `/en/` is a 404, and `/en-001/` is
  English (world). Nothing redirects between them.
- The root `/` redirects client-side by the browser's `navigator.languages`
  then `navigator.language`: an exact match (`cy_GB` to `/cy-gb/`), else the
  language's `-001` locale itself (`en-AU` to `/en-001/`, not `/en/`), else
  any served locale of that language, else `/en-us/`. See the site's
  `spec/locale-default/index.md`.

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
