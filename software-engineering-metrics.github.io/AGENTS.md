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

The book is published in four locales (see `../spec/locales.md` at the
repository root): `en-us` (American English) is served **unprefixed**
(`/chapters/x/`); `en-gb-oxendict`, `en-gb`, and `en-001` are served under a
locale-prefixed path (`/en-gb/chapters/x/`) via the `src/routes/[locale]/`
route tree. `src/lib/locales.js` (re-exporting `scripts/locales.mjs`) is the
single source of truth for the locale list and the prefixing rule.

Every `[locale]/...` route is a thin wrapper re-exporting (or re-rendering)
the corresponding unprefixed route's `+page.svelte`, so there is one
presentational component per page, not two. Shared chrome and content
components (`+layout.svelte`, `Sidebar.svelte`, `ChapterPager.svelte`, the
chapter/front-matter/examples/contributing/project `+page.svelte` files) read
the current locale from `page.params.locale` via `$app/state` and build
locale-prefixed hrefs with `localePrefix()`. Follow this pattern for any new
page rather than hardcoding an absolute path.

`LocalePicker.svelte` is the locale switcher in the header; it is a hand-built
component following the Lily Design System's class-hook convention (one
class, `.locale-picker`, styled in `static/assets/style.css`), since Lily
ships no markup or JS of its own.

## Translated locales (infrastructure, not yet used)

`../spec/locales.md` and `../spec/locales-for-global-sharing-with-svelte/index.md`
describe ten planned locales that are genuine translations (Arabic, Bengali,
Welsh, Spanish, French, Hindi, Indonesian, Portuguese, Russian, Urdu, plus
Chinese - China), as opposed to today's four, which are mechanically derived
English spelling variants sharing one language and one set of slugs. None of
the ten exist on disk yet (no `locales/<code>/` directory, no translated
content), so none is in `SERVED_LOCALE_CODES`/`LOCALES` in `scripts/locales.mjs`
and none is routed. What already exists, ready for when one is:

- `LOCALE_LABELS` and `localeLabel()` in `scripts/locales.mjs`: a display
  name for every planned locale (its endonym), a strict superset of
  `LOCALE_CODES`, so a label is ready before a locale is wired up.
- `sortedLocaleEntries()` in `scripts/locales.mjs`: the grouped, deterministic
  sort order a future locale list should use (see its doc comment). Not
  wired into `LocalePicker.svelte` yet, whose dropdown keeps its own curated
  order; there is nothing to usefully re-sort while every served locale is
  English.
- `src/lib/i18n.js`: UI chrome strings (nav, sidebar, pager, picker, footer,
  skip-link), keyed by locale, `ui(locale)` falling back to the `en` table.
  Threaded through `+layout.svelte`, `Sidebar.svelte`, `ChapterPager.svelte`,
  `Breadcrumb.svelte`, and `LocalePicker.svelte` already, so a translated
  locale can add its own top-level key incrementally. This does **not**
  cover page content (the home page's hero and body copy, chapter text):
  that is Markdown, translated by translating the Markdown, not by adding
  keys here.
- The header/footer wordmark reads `t.brand` from `ui(page.params.locale)`
  directly in `+layout.svelte`, which already resolves correctly for any
  route (`page.params.locale` is `undefined` on the unprefixed default-locale
  routes, and `ui(undefined)` falls back to `en`). A sibling project's
  equivalent bug (wordmark stuck on a locale-agnostic layout that never saw
  which locale it was rendering) does not apply to this codebase's routing.

Deliberately **not** built yet: a per-locale home page. The home page's hero
and body copy in `src/routes/+page.svelte` is still hardcoded English prose,
identical across all four served locales (correct today, since they are the
same language). `locales/<code>/index.md` (see the sub-spec) is the intended
future source for that copy per locale, but the schema for turning that
Markdown into the home page's hero/stats/cards layout does not exist yet;
design it together with the first real translated locale rather than
guessing the shape in the abstract.

## Working rules

- `src/content/<locale>/` is **generated** from `../locales/<locale>/` at the
  repository root by `scripts/sync-content.mjs` — never hand-edit files under
  it. Edit `../locales/en-gb-oxendict/`, then run `pnpm run content` here.
- `src/lib/manifest.json` (the `en-us` manifest) and `src/lib/manifest/<locale>.json`
  (the other three) are **generated** by `scripts/generate-manifest.mjs` from
  `src/content/` — never hand-edit them. Read them through
  `getManifest(locale)` in `src/lib/manifests.js`, not by importing a
  manifest file directly, so a component works under both the unprefixed and
  `[locale]`-prefixed routes.
- Chapter, front-matter, examples, contributing, and project pages are all
  rendered by the same pattern: a `[slug]/+page.js` with `entries()` sourced
  from the manifest, dynamically importing the matching `.md` file via the
  `$content` alias (`$content/<locale>/<section>/<slug>.md`), and a
  `+page.svelte` that renders `data.content` (the mdsvex-compiled component)
  inside the page chrome. Follow this pattern for any new content section
  rather than inventing a new one.
- `scripts/remark-chapter-links.mjs` and `scripts/remark-resolve-content-links.mjs`
  detect a source file's locale from its path under `src/content/<locale>/`
  and prefix the links they generate accordingly; keep that in mind if you
  move where content lives.
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
