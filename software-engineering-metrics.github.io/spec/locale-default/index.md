# Default-locale redirect for the bare domain root

## Problem

`https://software-engineering-metrics.github.io/` returned HTTP 404. Every
real page lives under `src/routes/[locale]/` (see the site's own
`AGENTS.md`, "Locales"); there was no route at all for `/` itself, so
GitHub Pages served the static `404.html` fallback for it.

## What this implements

A client-side redirect from `/` to the visitor's best-matching served
locale, since this site is fully static (`adapter-static`, no origin
server) and so cannot read a request's `Accept-Language` header at serve
time the way a dynamic backend could.

- `src/lib/detect-locale.js` — `detectLocale()`, the pure matching
  function this document specifies, plus `pickLocale()`, a thin
  browser-environment wrapper around it.
- `src/routes/+page.js` — `export const prerender = true` only, so the
  route has an `index.html` to serve at all.
- `src/routes/+page.svelte` — on mount, calls `pickLocale()` and
  `goto()`s to that locale's home page. Renders a plain "Redirecting… /
  continue here" fallback (linking to `DEFAULT_LOCALE`) for no-JS visitors
  and for the instant before the redirect fires; this is a real `<a>`,
  not a bare `<meta http-equiv="refresh">`, specifically so it cannot race
  the JS redirect and override a better match with the default locale. A
  `<meta http-equiv="refresh">` wrapped in `<noscript>` performs the actual
  redirect for no-JS visitors: `<noscript>` content is inert whenever
  scripting actually runs, so it cannot race `pickLocale()`/`goto()` the
  way an unconditional meta refresh would have; it only ever fires in
  exactly the case the JS redirect cannot run at all. It always targets
  `DEFAULT_LOCALE` (never a detected language), since without scripting
  there is no `navigator.languages`/`.language` to read.

This also fixes a latent bug in `src/routes/+layout.svelte` (the shared
header/nav), exposed by this being the first-ever unprefixed route: its
`prefix` was derived straight from `page.params.locale`, which is
`undefined` on `/`, producing unprefixed (dead) nav links. `prefix` is now
derived from `currentLocale` (`page.params.locale ?? DEFAULT_LOCALE`),
which already existed for other purposes in that component.

## Signal priority

Tried in order; the first tier that produces a match wins. Every tier is
read client-side only (`pickLocale()` is a no-op — returns nothing useful
— outside the browser; callers guard with `browser` from
`$app/environment`, since `navigator` does not exist at prerender time).

1. **`navigator.languages`** — the browser's full, ordered language
   preference list. The richest available signal; not implemented in
   every browser.
2. **`navigator.language`** — the single primary language tag every
   browser exposes. This is the closest a static page can get to an
   `Accept-Language` header: browsers deliberately do not expose that raw
   header to page JavaScript, as that would add a fingerprinting signal
   beyond what `navigator.language`/`.languages` already expose, and
   without an origin server there is no request to read a header from in
   the first place. `navigator.language` is derived from the same
   underlying OS/browser setting `Accept-Language` itself is built from,
   so it is the honest client-side equivalent, not a literal header read.
3. **`defaultCode`** — a fixed fallback. The site passes
   `DEFAULT_LOCALE` from `src/lib/locales.js` (currently `en-us`).

`detectLocale()` always returns a value (falls back to `defaultCode`); it
never returns `undefined`.

## Matching a single language tag against the served locale codes

Served locale codes (`SERVED_LOCALE_CODES` in `scripts/locales.mjs`) are
not standard BCP 47 tags — some are real (`en-us`, `en-gb`), some use the
UN M49 "world" suffix for an international variant (`es-001`, `hi-001`,
`zh-cn` uses a real region, `cy-001` does not), and `en-gb-oxendict` has no
real-world equivalent at all. So a tag is matched in two steps, per tag,
trying each served locale code:

1. **Exact, case-insensitive match.** Normalize the tag (trim,
   lowercase, underscores to hyphens) and compare it directly against
   each served code. `"en-GB"` → `en-gb`. `"zh-CN"` → `zh-cn`.
2. **International superset.** If no code matched exactly, take the
   tag's primary language subtag (everything before the first `-`) and
   use `<language>-001` if it is served. `"en-AU"` → `en-001`, so the root
   page redirects to `/en-001/`.
3. **Primary-language match.** If the language has no `-001` locale, find
   served codes whose own primary subtag (same rule) matches the language.
   `"ko-US"` with only `ko-kr` served → language `ko` → `ko-kr`. When more
   than one served code shares a language, prefer `defaultCode` if it is
   among the candidates, otherwise take the first candidate in
   `SERVED_LOCALE_CODES` order.

A tag that matches nothing (step 1 and step 2 both empty) is skipped and
the next tag in priority order is tried.

## Worked examples

| Input tags | Result | Why |
| --- | --- | --- |
| `["zh-CN"]` | `zh-cn` | exact match |
| `["zh-TW"]` | `zh-001` | no `zh-tw` served; superset `zh-001` is served |
| `["en-GB"]` | `en-gb` | exact match (not `en-gb-oxendict`, even though it also starts `en-gb`) |
| `["en-AU"]` | `en-001` (redirects to `/en-001/`) | no `en-au` served; superset `en-001` is served |
| `["es-MX"]` | `es-001` | no `es-mx` served; superset `es-001` is served |
| `["fr-FR", "fr"]` | `en-us` (`defaultCode`) | French is not a served locale; nothing matches at either tier |
| `[]` or `undefined` | `en-us` (`defaultCode`) | no tags to try |

## Non-goals

- Reading the real `Accept-Language` HTTP header. Not possible without an
  origin server; see tier 2 above for the honest substitute this uses
  instead.
- Remembering a visitor's choice once they reach a locale page and pick a
  different one from the picker bar — that already works today via the
  picker bar's own `goto()` (see `+layout.svelte`) and is out of scope
  here; this document covers only the first landing on `/`.
- Geolocation or IP-based locale detection. Language-preference-based
  only.
