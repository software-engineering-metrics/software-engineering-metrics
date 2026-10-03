# Two-letter aliases for "-001" world locales

## Problem

Several served locales use the UN M49 "001" (world/international) region
suffix, e.g. `en-001`, `es-001`, `hi-001`, `cy-001` (see
`spec/locale-default/index.md` for why these codes exist and aren't
standard BCP 47 tags). A visitor typing or linking a bare two-letter code
(`/en/`, `/es/`, `/hi/`, `/cy/`) got a 404: `[locale]/+layout.js` only
accepted the exact codes in `LOCALE_CODES`, and none of them is a
two-letter string.

## What this implements

A two-letter alias route for every served `-001` locale: `/en` renders
the same content as `/en-001`, `/es` as `/es-001`, `/hi` as `/hi-001`,
`/cy` as `/cy-001`. This is "renders", not "redirects": the URL stays at
the two-letter prefix, across the entire `[locale]/` subtree (home,
chapters, front-matter, examples, contributing, project), not just the
home page. A redirect, or an alias limited to the home page, would mean
the first in-page link a visitor followed jumped them away from the
alias they typed, which defeats the point of a short alias.

This extends the existing `[locale]/` route's valid parameter values
rather than adding a second, parallel route tree, per this site's own
rule (see `AGENTS.md`, "Locales": "there is no parallel unprefixed route
tree to keep in sync"): a `[shortLocale]/` tree duplicating every page
would be exactly the kind of tree that rule exists to prevent.

- `scripts/locales.mjs` — `LOCALE_ALIASES`, a map from alias to canonical
  code (`{ en: 'en-001', cy: 'cy-001', es: 'es-001', hi: 'hi-001' }`),
  derived from `SERVED_LOCALE_CODES` by stripping the `-001` suffix from
  every code that has one. `ROUTABLE_LOCALE_CODES` is `LOCALE_CODES` plus
  the alias codes; `canonicalLocale(locale)` resolves an alias to its
  canonical code, or passes anything else through unchanged.
- `[locale]/+layout.js` validates `params.locale` against
  `ROUTABLE_LOCALE_CODES`, not `LOCALE_CODES`, so an alias doesn't 404.
- Every `+page.js` under `[locale]/` (list pages and `[slug]` leaves
  alike) builds `entries()` from `ROUTABLE_LOCALE_CODES`, so the alias's
  own pages actually get prerendered rather than relying on the crawler
  to reach them some other way.
- A `[slug]` leaf's dynamic content import
  (`` import(`$content/${locale}/<section>/${params.slug}.md`) ``) and a
  list page's `import.meta.glob` key lookup both resolve
  `params.locale` through `canonicalLocale()` first. Neither has any
  entry for a bare alias: there is no `src/content/en/` directory on
  disk, only `src/content/en-001/`, so using the raw alias as the lookup
  key would throw or 404.
- `getManifest()` (`src/lib/manifests.js`) and `ui()` (`src/lib/i18n.js`)
  both resolve their `locale` argument through `canonicalLocale()`
  internally, so every existing call site that already passes
  `page.params.locale` straight through (`Sidebar.svelte`,
  `ChapterPager.svelte`, `Breadcrumb.svelte`, the home page, the
  contents page) keeps working for an alias with no change at the call
  site.
- `localePrefix()` is deliberately **not** resolved through
  `canonicalLocale()`: it keeps generating links prefixed with whatever
  `params.locale` actually was, alias or canonical, so chrome links
  (header nav, footer, sidebar, pager, "Start reading", part links)
  generated while browsing under `/en/...` keep pointing at `/en/...`,
  not `/en-001/...`.
- The locale picker (`+layout.svelte`) is the one place that needs both:
  it navigates using the raw alias (so picking a new locale from `/en/...`
  still produces an alias-prefixed URL when the target is itself
  aliasable) but its own displayed selection (`pickerLocale`, passed as
  `localeProps.value`) is resolved through `canonicalLocale()`, since
  `locales={LOCALE_CODES}` has no `"en"` entry for the picker to match
  against.

## What deliberately doesn't follow the alias

In-body cross-reference links inside chapter prose ("see chapter 1.2")
are generated at content-compile time by
`scripts/remark-chapter-links.mjs`, keyed off the source file's path
under `src/content/<locale>/` — always a canonical directory, since no
`src/content/en/` exists. These links are baked into the compiled
Markdown once per canonical locale and reused for both the canonical page
and its alias, so a prose link followed from `/en/chapters/...` lands on
`/en-001/chapters/...`, not `/en/chapters/...`. This mirrors the existing,
accepted behaviour for a translated locale's own cross-locale content
links (see `AGENTS.md`, "Translated locales"); rewriting compiled content
per alias at build or runtime would mean duplicating content per alias,
which is the parallel-tree problem this feature is built to avoid.

## Non-goals

- `LOCALE_CODES` and `SERVED_LOCALE_CODES` stay unchanged: an alias is a
  routing-only concept and never appears as its own entry in the locale
  picker or the search index's locale handling.
- No alias for `zh-cn`: it has no `-001` suffix to strip, so it was never
  a candidate.
- No `canonical`/`hreflang` SEO tags pointing an alias page at its
  canonical URL. The site has no such mechanism for its existing
  English-spelling-variant duplication (`en-us`/`en-gb`/`en-001`/
  `en-gb-oxendict`) either, so adding one only for aliases would be
  inconsistent; worth reconsidering only alongside that broader gap.
- No redirect from the alias to the canonical URL, or vice versa. See
  "What this implements" above for why: a redirect was never the goal.
