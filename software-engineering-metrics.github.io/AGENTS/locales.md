# Locales, routing, and translated locales

Part of [AGENTS.md](../AGENTS.md).

The book exists in 34 locales (see `../spec/locales.md` at the repository
root), of which this site serves 22: four mechanically-derived English
spelling variants (`en-us`, `en-gb-oxendict`, `en-gb`, `en-001`) and eighteen
genuinely translated locales (`ar-001` Arabic, `bn-001` Bengali, `cy-001` and
`cy-gb` Welsh, `de-001` German, `es-001` Spanish, `fr-001` French, `hi-001` Hindi, `id-001`
Indonesian, `ja-001` Japanese, `ko-001` Korean, `nl-001` Dutch, `pt-001` Portuguese, `ru-001` Russian, `sv-001` Swedish, `ur-001` Urdu, `zh-001` and `zh-cn` Chinese). The other 12
translated locales (`ar-eg`, `bn-bd`, `de-de`, `es-es`, `fr-fr`, `hi-id`,
`ja-jp`, `ko-kr`, `nl-nl`, `pt-pt`, `ru-ru`, `sv-se`) exist on disk but are not in
`SERVED_LOCALE_CODES` yet.
Every locale, including `en-us`, is served under its own locale-prefixed path
(`/en-us/chapters/x/`, `/en-gb/chapters/x/`, `/hi-001/chapters/x/`, ...) via
the `src/routes/[locale]/` route tree; there is exactly one unprefixed route,
the bare domain root (`/`, `src/routes/+page.svelte`), which client-side
redirects to a served locale picked from the visitor's browser language
preferences, falling back to `DEFAULT_LOCALE` — see
`spec/locale-default/index.md` for the full specification and
`src/lib/detect-locale.js` for the matching logic. `src/lib/locales.js` (re-exporting
`scripts/locales.mjs`) is the single source of truth for the locale list and
the prefixing rule (`localePrefix()`, now an unconditional `/${locale}` for
any locale, since no locale is special-cased unprefixed).

Every page lives once, directly under `src/routes/[locale]/`; there is no
parallel unprefixed route tree to keep in sync (there was, historically, for
`en-us` — see git history if you need the old wrapper-around-unprefixed
pattern). Shared chrome and content components (`+layout.svelte`,
`Sidebar.svelte`, `ChapterPager.svelte`, the
chapter/front-matter/examples/contributing/project `+page.svelte` files) read
the current locale from `page.params.locale` via `$app/state`, which is
defined for every page under `src/routes/[locale]/` (i.e. every real content
page), and build locale-prefixed hrefs with `localePrefix()`. Follow this
pattern for any new page rather than hardcoding an absolute path.
`+layout.svelte`'s own `currentLocale` (`page.params.locale ?? DEFAULT_LOCALE`)
is what keeps the shared header working on the one page outside that tree,
the root redirect page; derive from `currentLocale`, not raw
`page.params.locale`, in shared chrome that must also render there.

The locale switcher in the header is `@lilydesignsystem/svelte-locale-picker`,
wired up as part of `@lilydesignsystem/svelte-picker-bar` — see "PickerBar"
below.

## Translated locales

The fourteen translated locales (`ar-001`, `bn-001`, `cy-001`, `cy-gb`, `de-001`, `es-001`, `fr-001`, `hi-001`, `id-001`, `pt-001`, `ru-001`, `ur-001`, `zh-001`, `zh-cn`) are wired
into `SERVED_LOCALE_CODES` in `scripts/locales.mjs` and routed like any other
locale. Each currently ships only its topics section (`es-001` also has
examples); none has `front-matter/`, `contributing/`, or `project/` yet.
No locale in `../spec/locales.md` is still planned; every one has a
`locales/<code>/` directory.

**How a locale missing a section degrades**, since `entries()` for every
`[slug]` route now reads each locale's own manifest (not a shared default),
a locale with no `front-matter/`, `examples/`, `contributing/`, or `project/`
section simply contributes zero `[slug]` entries for that section, rather
than 404ing on slugs borrowed from another locale:

- The `front-matter`, `examples`, `contributing`, and `project` **list**
  pages always render (their own `+page.svelte` reads
  `manifest.<section>` directly), just with an empty `card-grid` for a
  locale with nothing in that section.
- `examples`, `contributing`, and `project` each have an `index.md` intro
  above the card grid. Their `+page.js` uses `import.meta.glob()` over
  every locale's `index.md` for that section and falls back to
  `DEFAULT_LOCALE`'s copy if the current locale has none — see
  `[locale]/examples/+page.js` for the pattern (never a plain
  `import(`$content/${params.locale}/...`)`, which throws for a path Vite
  never saw on disk).
- The home page's "Start reading" button (`src/routes/[locale]/+page.svelte`)
  falls back to the locale's first chapter if it has no
  `what-are-software-engineering-metrics` front-matter page.
- The contents page (`[locale]/contents/+page.svelte`) only links "the
  introduction" if the locale's manifest actually has an `introduction`
  front-matter entry.

What else exists for when a translated locale gets its own UI chrome or home
page copy:

- `LOCALE_LABELS` and `localeLabel()` in `scripts/locales.mjs`: a display
  name for every planned locale too (its endonym), a strict superset of
  `LOCALE_CODES`, so a label is ready before a locale is wired up.
- `sortedLocaleEntries()` in `scripts/locales.mjs`: the grouped, deterministic
  sort order a future locale list should use (see its doc comment). Not
  wired into anything yet.
- `src/lib/i18n.js`: UI chrome strings (nav, sidebar, pager, picker bar,
  footer, skip-link), keyed by locale, `ui(locale)` falling back to the `en`
  table. Threaded through `+layout.svelte`, `Sidebar.svelte`,
  `ChapterPager.svelte`, and `Breadcrumb.svelte` already, so a translated
  locale can add its own top-level key incrementally. This does **not**
  cover page content (the home page's hero and body copy, chapter text):
  that is Markdown, translated by translating the Markdown, not by adding
  keys here. Every translated locale except `es-001` (which overrides `nav.contents`
  and `footer.contentsLabel`) lacks an `OVERRIDES` entry, so its
  nav/sidebar/footer chrome is still English.

Deliberately **not** built yet: a per-locale home page. The home page's hero
and body copy in `src/routes/[locale]/+page.svelte` is still hardcoded
English prose, identical across every served locale (correct for the four
English spelling variants; an accepted, temporary gap for `cy-001`, `es-001`,
`hi-001`, and `zh-cn`, whose home page therefore reads in English even though
their chapters are translated). `locales/<code>/index.md` (see the sub-spec)
is the intended future source for that copy per locale, but the schema for
turning that Markdown into the home page's hero/stats/cards layout does not
exist yet; design it together rather than guessing the shape in the
abstract.
