# The site

`software-engineering-metrics.github.io/` is a SvelteKit project
(`@sveltejs/adapter-static`, prerendered) that renders the book, styled with
the Lily Design System, and deployed by GitHub Pages. It has its own
[`AGENTS.md`](../software-engineering-metrics.github.io/AGENTS.md) and
[`README.md`](../software-engineering-metrics.github.io/README.md); the rules
for book content in the root `AGENTS.md` do not govern it.

- It copies `locales/` into its own `src/content/` with `pnpm content`; never
  hand-edit the copy, and never change book content from inside the site.
- Section directories are localized on disk but canonical in the site; the
  mapping is in `scripts/sync-content.mjs`.
- It serves 17 locales (see [locales.md](locales.md)). Locale routing, aliases,
  and labels are in `scripts/locales.mjs`; UI chrome strings are in
  `src/lib/i18n.js` and are English except where a locale overrides them.
- URLs are `/<locale>/chapters/<file-name>/`. The site keeps the word
  `chapters` in URLs and routes even though the prose says "topics".
- It publishes `llms.txt` and `llms.json` at the site root (generated, see
  [tooling.md](tooling.md)). `pnpm build` also writes `build/sitemap.xml` (about 1,100 canonical URLs,
  alias routes excluded) with `scripts/generate-sitemap.mjs`, which
  `static/robots.txt` points crawlers at.
