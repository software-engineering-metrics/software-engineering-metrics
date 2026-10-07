# PickerBar (theme, locale, text size, share, search)

Part of [AGENTS.md](../AGENTS.md).

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
