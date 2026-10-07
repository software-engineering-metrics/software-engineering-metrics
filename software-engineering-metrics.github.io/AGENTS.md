# Software Engineering Metrics — website

The published website for the Software Engineering Metrics book. See
[README.md](README.md) for the human-oriented overview.

## What this is

A SvelteKit project (`@sveltejs/adapter-static`) that prerenders the whole
book as a static site, deployed by GitHub Actions to
<https://software-engineering-metrics.github.io/>. It lives inside the book's
repository, at `software-engineering-metrics.github.io/`, but does not own
the book's content — see below.

## Topic guides

- [`AGENTS/locales.md`](AGENTS/locales.md): served and translated locales, locale routes, routing from `/`, and how locale content is synced
- [`AGENTS/picker-bar.md`](AGENTS/picker-bar.md): the header PickerBar, its pickers, and the pitfalls already hit
- [`AGENTS/working-rules.md`](AGENTS/working-rules.md): generated files, never-hand-edit rules, and the checks to run

Run `pnpm run check` before committing changes to `src/`. Every file in `AGENTS/` is kept
well under 40 KB so it loads cheaply into an agent's context.
