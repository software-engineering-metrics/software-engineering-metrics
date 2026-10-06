# Software Engineering Metrics — website

The published website for the Software Engineering Metrics book. See
[README.md](README.md) for the human-oriented overview.

## What this is

A SvelteKit project (`@sveltejs/adapter-static`) that prerenders the whole
book as a static site, deployed by GitHub Actions to
<https://software-engineering-metrics.github.io/>. It lives inside the book's
repository, at `software-engineering-metrics.github.io/`, but does not own
the book's content — see below.

## Locales

The book exists in 28 locales (see `../spec/locales.md` at the repository
root), of which this site serves 16: four mechanically-derived English
spelling variants (`en-us`, `en-gb-oxendict`, `en-gb`, `en-001`) and twelve
genuinely translated locales (`ar-001` Arabic, `bn-001` Bengali, `cy-001` and
`cy-gb` Welsh, `es-001` Spanish, `fr-001` French, `hi-001` Hindi, `id-001`
Indonesian, `ru-001` Russian, `ur-001` Urdu, `zh-001` and `zh-cn` Chinese). The other 12
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

The twelve translated locales (`ar-001`, `bn-001`, `cy-001`, `cy-gb`, `es-001`, `fr-001`, `hi-001`, `id-001`, `ru-001`, `ur-001`, `zh-001`, `zh-cn`) are wired
into `SERVED_LOCALE_CODES` in `scripts/locales.mjs` and routed like any other
locale. Each currently ships only its topics section (`es-001` also has
examples); none has `front-matter/`, `contributing/`, or `project/` yet.
The locales that `../spec/locales.md` still lists as planned (`pt-001` Portuguese) has no `locales/<code>/` directory yet, so it is not in
`SERVED_LOCALE_CODES` and is not routed.

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

## PickerBar (theme, locale, text size, share)

The header's four icon buttons are `@lilydesignsystem/svelte-picker-bar`
(wired up in `+layout.svelte`), which composes four Lily helpers:

- **Theme**: `themesUrl="/assets/themes/"`, `themes={['light', 'dark']}`.
  The two theme files, `static/assets/themes/{light,dark}.css`, are synced
  verbatim from the pinned `@lilydesignsystem/themes@0.1.0` package by
  `pnpm run themes` (`scripts/sync-themes.mjs`) — never hand-edited. Each is
  Lily's real theme: its raw `--color-*` palette, Lily's own derived
  `--lily-*` bridge tokens (`--lily-surface`, `--lily-text`,
  `--lily-border`, `--lily-shadow-sm/lg`, `--lily-radius-md/lg`,
  `--lily-font-body`, `--lily-font-mono`, ...), and the full 492-component
  Lily class-hook stylesheet, all scoped to `:root[data-theme="…"]`.
  `static/assets/style.css` reads those tokens via `var(...)`; it computes a
  few more Lily doesn't define by name (`--lily-primary-hover`,
  `--lily-text-subtle`, `--lily-tint`) from the same `--color-*` primitives,
  so they still switch per theme. Since every Lily component rule is
  zero-specificity (`:where(...)`/`@layer`), this site's own rules for any
  hook it also targets (`.card`, `.hero`, ...) still win the cascade
  unmodified — see `static/assets/style.css`'s own header comment for the
  full account. Persisted to `localStorage['lily-theme']`, with
  `detectFromSystem` for a first-visit OS-preference match. See
  `src/app.html` for the before-first-paint bootstrap script that reads the
  stored theme (and text size) so a returning visitor never sees a flash of
  the wrong one.
- **Locale**: `locales={LOCALE_CODES}`, `localeLabels={LOCALE_LABELS}`. Unlike
  Lily's own default behaviour (set `lang`/`dir` on `<html>` and stop), this
  site's locales are separate prerendered routes, so `+layout.svelte`'s
  `onLocaleChange` calls `goto()` on top of that; `value={currentLocale}`
  keeps the picker's own display in sync with the URL on every navigation,
  not only ones made through the picker itself.
- **Text size**: Lily's default seven-slug scale (`largest` … `smallest`),
  applied as a `font-size` percentage on `:root[data-text-size="…"]` in
  `style.css`, so every `rem`-based size in the file scales with it.
  Persisted to `localStorage['lily-text-size']`.
- **Share**: two destinations (email, Mastodon) plus the built-in copy-link
  item. `shareProps.url` is built from `page.url.pathname` against this
  site's real deployed origin rather than passed as `page.url.href` directly,
  because SvelteKit's prerender crawler runs every page through a placeholder
  origin (`http://sveltekit-prerender/`) that would otherwise leak into a
  statically-rendered share link.

**Pinned versions.** `pnpm-workspace.yaml`'s `overrides` force
`@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` to `^0.1.2`
and `@lilydesignsystem/svelte-headless` to `^0.2.0`, everywhere in the tree
(including nested under `svelte-picker-bar`, whose own manifest still allows
the older, broken range). Each picker's own `CHANGELOG.md` documents why:
0.1.1 started passing `headless` 0.2.0-only props (`baseClass`, `as`,
`navigation="active-descendant"`) but still declared a `^0.1.0` dependency
range, so a fresh install resolved 0.1.x's `Listbox`/`IconButton`, which
don't recognise those props and spread them onto the rendered element as
inert HTML attributes (`baseclass="…"`, `as="ul"`, …) instead of applying
them — the intended `class` was never actually set, so this site's
positioning CSS matched nothing and every popup rendered in normal document
flow. Don't remove these overrides without confirming `svelte-picker-bar`
itself has bumped its own dependency ranges past this.

## Working rules

- `src/content/<locale>/` is **generated** from `../locales/<locale>/` at the
  repository root by `scripts/sync-content.mjs` — never hand-edit files under
  it. Edit `../locales/en-gb-oxendict/` (or, for a translated locale, that
  locale's own `../locales/<code>/`), then run `pnpm run content` here. A
  section missing from a locale's source directory (see "Translated locales"
  above) is skipped with a warning, not an error.
- Section directories are named per locale on disk (`topics/`, `temas/`,
  `sujets/`, ... from `../spec/section-names.json`), but this site keeps the
  canonical names (`chapters`, `front-matter`, ...) in `src/content/` and in
  every URL. `scripts/sync-content.mjs` does the mapping, including rewriting
  relative Markdown links back to the canonical names. Never hardcode a
  localized directory name anywhere else in this project.
- `build/sitemap.xml` is generated at the end of `pnpm build` by
  `scripts/generate-sitemap.mjs` from the prerendered HTML (canonical locale
  URLs only; the two-letter aliases are skipped). `static/robots.txt` points
  at it. Nothing to maintain by hand.
- `static/llms.txt` and `static/llms.json` are generated by
  `../tools/gen_llms.py` (`just llms` at the repository root) from the same
  locale list as `scripts/locales.mjs`; never hand-edit them. Adding a
  served locale means re-running that tool.
- `src/lib/manifest.json` (the `en-us` manifest) and `src/lib/manifest/<locale>.json`
  (every other locale) are **generated** by `scripts/generate-manifest.mjs`
  from `src/content/` — never hand-edit them. Read them through
  `getManifest(locale)` in `src/lib/manifests.js`, not by importing a
  manifest file directly. Adding a locale to `SERVED_LOCALE_CODES` also
  means adding its manifest import to `src/lib/manifests.js`'s `MANIFESTS`
  map — `generate-manifest.mjs` writes the file, but nothing reads it until
  that map lists it.
- Chapter, front-matter, examples, contributing, and project pages are all
  rendered by the same pattern: a `[slug]/+page.js` with `entries()` built by
  flat-mapping `LOCALE_CODES` and reading *that locale's own* manifest (never
  another locale's, even the default's — a translated locale's slugs are its
  own, and a locale with no content for that section should contribute zero
  entries, not 404 on borrowed ones), dynamically importing the matching
  `.md` file via the `$content` alias (`$content/<locale>/<section>/<slug>.md`,
  safe here specifically because `entries()` only ever names a slug that
  locale's own manifest actually has), and a `+page.svelte` that renders
  `data.content` (the mdsvex-compiled component) inside the page chrome.
  Follow this pattern for any new content section rather than inventing a
  new one.
- `scripts/remark-chapter-links.mjs` detects a source file's locale from its
  path under `src/content/<locale>/` and prefixes the links it generates
  with that same locale (a "see chapter N.M" mention always targets a
  chapter in its own locale). `scripts/remark-resolve-content-links.mjs`
  instead prefixes each resolved link with *the link target's own* locale,
  read from the resolved path itself, not the source file's locale — most
  links stay within their own locale, but a translated locale missing a
  section (e.g. `es-001` linking into `en-gb-oxendict/contributing/` because
  it has no `contributing/` of its own yet) can deliberately cross-reference
  another locale, and that link must route to where the content actually
  lives. Keep this distinction in mind if you move where content lives.
- A page whose only dynamic segment is the inherited `[locale]` (a list page
  with no `[slug]` of its own) is prerendered either by the crawler following
  a real `<a href>` link to it, or, if nothing links to it directly (as with
  the front-matter list), by its own `+page.js` `entries()`. `+layout.js`
  cannot declare `entries()` in SvelteKit; see `src/routes/[locale]/+layout.js`.
- Do not touch `../locales/`, `../spec/`, or anything else outside this
  directory from here — the rest of the repository owns the book's content
  and spec (see the root `AGENTS.md`).
- Run `pnpm run check` before committing changes to `src/`, and `pnpm run build`
  before committing a routing or manifest change, since prerendering (with
  `strict: true` and `handleHttpError: 'fail'`) is the real check that every
  locale's internal links resolve.
