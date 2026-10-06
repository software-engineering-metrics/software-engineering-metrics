# Software Engineering Metrics — website

The published website for [Software Engineering
Metrics](https://github.com/software-engineering-metrics/software-engineering-metrics):
a book about measuring software engineering well. Live at
<https://software-engineering-metrics.github.io/>. This directory is a
SvelteKit project living inside that book's repository, at
`software-engineering-metrics.github.io/`.

Built with [SvelteKit](https://svelte.dev/docs/kit) (`@sveltejs/adapter-static`,
fully prerendered) and styled with the [Lily Design
System](https://lilydesignsystem.com/) class-hook conventions. Chapter content
is Markdown, compiled with [mdsvex](https://mdsvex.pngwn.io/).

## Where the content comes from

The book's Markdown lives at the repository root, under `locales/<locale>/`,
published in 34 locales (see the root `spec/locales.md`), 22 of them served
here: four mechanically-derived English spelling variants, `en-us` (American English),
`en-gb-oxendict` (British English, Oxford spelling; the authoring source),
`en-gb` (mainstream British English), and `en-001` (international English);
and fourteen genuinely translated locales (`ar-001`, `bn-001`, `cy-001`,
`cy-gb`, `de-001`, `es-001`, `fr-001`, `hi-001`, `id-001`, `pt-001`, `ru-001`, `ur-001`, `zh-001`,
`zh-cn`). This directory copies each into
`src/content/<locale>/` (see
[`scripts/sync-content.mjs`](scripts/sync-content.mjs)) and generates one
navigation manifest per locale from it (see
[`scripts/generate-manifest.mjs`](scripts/generate-manifest.mjs)).

Every locale, including `en-us`, is served under its own locale-prefixed
path (`/en-us/chapters/x/`, `/hi-001/chapters/x/`), switched between with the
locale picker in the header (part of the
[Lily Design System](https://lilydesignsystem.com/) `PickerBar`, alongside
theme, text-size, and share). See [`AGENTS.md`](AGENTS.md) for how the
routing and the picker bar are wired, and for how a translated locale still
missing a content section (front matter, examples, contributing, project)
degrades gracefully rather than 404ing.

**Never hand-edit files under `src/content/`.** Edit
`../locales/en-gb-oxendict/` instead, then regenerate:

```sh
pnpm run content   # re-copies ../locales, then rebuilds the manifests
```

## Development

```sh
pnpm install
pnpm run dev       # http://localhost:5173
pnpm run build     # prerenders the full site into build/
pnpm run preview   # serve the production build locally
pnpm run check     # svelte-check
```

`pnpm run dev` and `pnpm run build` both regenerate `src/lib/manifest.json`
and `src/lib/manifest/<locale>.json` first (see the `manifest` script), so
they never need to be committed stale — though they are committed, since
`src/content/` is committed too.

## Structure

- `src/content/<locale>/{chapters,front-matter,examples,contributing,project}/` :
  synced Markdown source per locale (see above).
- `src/lib/manifest.json` (`en-us`) and `src/lib/manifest/<locale>.json`
  (every other locale) : generated tables of contents (parts, chapters,
  ordering, prev/next) — see `scripts/generate-manifest.mjs`. Read through
  `getManifest(locale)` in `src/lib/manifests.js`.
- `src/lib/locales.js` : the locale list and the locale-prefixing rule
  (every locale, including `en-us`, under `/<locale>/`).
- `src/routes/[locale]/chapters/[slug]/`, `front-matter/[slug]/`,
  `examples/[slug]/`, `contributing/[slug]/`, `project/[slug]/` : dynamic
  routes that prerender one page per Markdown file per locale, using
  `entries()` to enumerate slugs from each locale's own manifest (a
  translated locale with no content for a section simply contributes no
  entries for it).
- `src/routes/table-of-contents/` : the full contents page with client-side
  filtering.
- `src/lib/Sidebar.svelte`, `Breadcrumb.svelte`, `ChapterPager.svelte` : the
  book chrome. The header's theme/locale/text-size/share picker bar is
  `@lilydesignsystem/svelte-picker-bar`, wired up directly in
  `+layout.svelte` (see `AGENTS.md`).
- `src/lib/i18n.js` : UI chrome strings (nav, sidebar, pager, picker bar,
  footer), looked up per locale via `ui(locale)`.
- `static/assets/themes/{light,dark}.css` : Lily's real light and dark
  themes, synced verbatim from the pinned `@lilydesignsystem/themes@0.1.0`
  package by `pnpm run themes` (`scripts/sync-themes.mjs`) — never
  hand-edited. Loaded dynamically by `ThemePicker`. `static/assets/style.css`
  reads their tokens (`--color-primary`, `--lily-surface`, …); it does not
  define them.
- `scripts/remark-chapter-links.mjs` : auto-links plain-text chapter
  cross-references ("see chapter 2.1") to their locale-prefixed route.
- `static/assets/style.css` : this site's own hand-authored rules (using
  Lily's semantic class hooks: `.button`, `.card`, `.prose`,
  `.locale-picker`, …), layered over the full Lily theme stylesheet each
  theme file already includes.

## Deployment

The actual GitHub Pages deploy happens in a separate repository,
[`software-engineering-metrics/software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io),
because GitHub Pages will only serve the naked domain
`https://software-engineering-metrics.github.io/` from a repository with
exactly that name. [`../.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)
here (at this monorepo's root) verifies this directory still builds on every
push to `main`, then sends that other repository a `repository_dispatch`
asking it to check out this monorepo, build this directory, and deploy the
result.
