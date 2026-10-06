# Repository layout

- `locales/` : everything the published site contains, rendered by
  `software-engineering-metrics.github.io/` (see below), one subdirectory per
  locale (`en-gb-oxendict`, `en-001`, `en-gb`, `en-us`), each with the
  identical structure below.
  - `<locale>/topics/` : the topic files (the directory is named per locale, e.g. `temas/` in `es-es`; see [`spec/section-names.json`](../spec/section-names.json)), named `PP-CC-slug.md` with a zero-padded, dash-separated, sortable prefix (the topic number in the text stays dotted, e.g. `2.1`), identical across every locale.
  - `<locale>/front-matter/` : the opening essay, introduction, and table of contents.
  - `<locale>/examples/` : small illustrative examples (a metrics charter, a dashboard spec).
  - `<locale>/contributing/` : contributor and agent guides, plus shared snippets.
  - `<locale>/project/` : project documentation and the changelog.
  - Section directory names are per locale (`topics/` in English, `temas/` in `es-es`, and so on); they are declared in [`spec/section-names.json`](../spec/section-names.json) and read through `tools/section_names.py`.
  - Edit only `locales/en-gb-oxendict/`; run `python3 tools/localize.py` to re-derive the other three English variants.
- `spec/` : the specification-driven source of truth (structure, conventions,
  spelling, locales, roadmap). It is hand-authored and not published to the
  site; the book is what it governs.
- `tools/` : `localize.py`, which derives `en-001`, `en-gb`, and `en-us` from
  the `en-gb-oxendict` source; `gen_nav.py`, which generates the README TOC,
  the per-locale site home pages, contents pages, and subject indexes;
  `gen_locale_peer_ids.py`, which assigns and writes each content file's
  `.locale-peer-id` sidecar (see `spec/locales.md`); `gen_llms.py`, which
  writes the site's `llms.txt` and `llms.json` AI-agent index (`just llms`);
  `section_names.py`, the shared reader for `spec/section-names.json`; and
  `stats.py`, the Markdown stats report behind `just stats`.
- `tests/` : `validate.py`, the enforcement suite (checks the four English
  locales, including that every content file's `.locale-peer-id` sidecar
  exists and matches across locales, that `llms.txt` and `llms.json` are
  current, and that `skills/` matches `.claude/skills/`; it skips the site's
  sources).
- `software-engineering-metrics.github.io/` : the SvelteKit site that
  prerenders the book into the published website, deployed by GitHub Pages.
  It copies `locales/` into its own `src/content/` (see its README and
  AGENTS.md) rather than reading it directly; never hand-edit the copy, and
  never change book content from within this directory.
- `.github/workflows/` : `test.yml` (PR checks), `links.yml` (weekly external
  link check), `deploy.yml` (verifies the site builds on push to `main`, then
  asks the `software-engineering-metrics.github.io` repo to redeploy from it,
  since GitHub Pages can only publish the naked domain from a repo with that
  exact name).
- `skills/` : the agent skills (`software-engineering-metrics-skill` for
  readers applying the book, `...-maintainer-skill` for contributors).
  `skills/` is canonical; copy it over `.claude/skills/` after editing.
- `CLAUDE.md` : a one-line pointer to this file for Claude Code.
- `justfile`, `pyproject.toml` : the task runner and the Python dev-tooling
  dependencies (codespell; see `just spell`).
