# Locales

The book exists in 28 locales under `locales/`. The policy lives in
[`../spec/locales.md`](../spec/locales.md); this file is the short version.

## Two kinds of locale

- **Four English spelling variants**: `en-gb-oxendict` (Oxford spelling, the
  authoring source), `en-001`, `en-gb`, and `en-us`. Only `en-gb-oxendict` is
  hand-edited. Run `python3 tools/localize.py` to re-derive the other three.
- **24 hand-translated locales**: `ar-001`, `ar-eg`, `bn-001`, `bn-bd`,
  `cy-001`, `cy-gb`, `de-de`, `es-001`, `es-es`, `fr-001`, `fr-fr`, `hi-001`,
  `hi-id`, `id-001`, `ja-jp`, `ko-kr`, `nl-nl`, `pt-pt`, `ru-001`, `ru-ru`,
  `sv-se`, `ur-001`, `zh-001`, `zh-cn`. None of them is touched by `localize.py`.
  Several are exact copies of a sibling (`cy-gb` of `cy-001`, `ar-001` of
  `ar-eg`, `bn-001` of `bn-bd`, `fr-001` of `fr-fr`, `hi-id` of `hi-001`,
  `ru-001` of `ru-ru`, `zh-001` of `zh-cn`); when you edit one half of a pair,
  copy the result to the other so they stay identical.

Planned but not started: `pt-001`.

## Served on the site

The site serves 16 locales: the four English variants plus `ar-001`,
`bn-001`, `cy-001`, `cy-gb`, `es-001`, `fr-001`, `hi-001`, `id-001`,
`ru-001`, `ur-001`, `zh-001`, and `zh-cn`. The list is `SERVED_LOCALE_CODES` in
`software-engineering-metrics.github.io/scripts/locales.mjs`. A `-001` locale
also gets a two-letter alias (`/ar/`, `/fr/`, ...) automatically.

## Section directory names are per locale

Inside each locale the sections are `topics`, `front-matter`, `examples`,
`contributing`, and `project`, but the directory names are translated:
`topics/` in the English locales, `temas/` in `es-es`, `sujets/` in `fr-fr`,
and so on. The map is [`../spec/section-names.json`](../spec/section-names.json).

- In Python, read a name with `section_dir(locale, "chapters")` from
  `tools/section_names.py`. The key `"chapters"` is the canonical identifier
  for the topics section; it is never the directory name you type.
- Never hardcode `topics` or any other localized name in a tool, a test, or
  the site. The site keeps canonical names in `src/content/` and in URLs, and
  `scripts/sync-content.mjs` does the mapping.
- Locale codes are identifiers and are never translated.

## Peer ids

Every content file has a `.locale-peer-id` sidecar (32 lowercase hex characters
plus a newline). The id for a given file is identical in every locale, so
translations of the same topic share it; a translated file takes the id of the
English file with the same `PP-CC` prefix. `tools/gen_locale_peer_ids.py`
writes them for the four English locales; for a translated locale you copy
them (see [translating.md](translating.md)).

## Vocabulary

The book calls its divisions **topics** (never "chapters") in prose, in every
language. File names keep the `PP-CC-slug.md` form, and the template file is
still `chapter-template.md`. A translated locale uses its own word for topic,
the same one as its section directory (`tema`, `sujet`, `Thema`, `тема`, and
so on).
