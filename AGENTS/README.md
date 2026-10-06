# AGENTS

Focused guides for AI agents and human contributors, one task per file. Read
[`../AGENTS.md`](../AGENTS.md) first: it holds the golden rules and the
repository layout. These files hold the procedures that would make it too long.
Each is kept small so it loads cheaply into an agent's context.

- [locales.md](locales.md): the 27 locales, which ones are hand-edited, which
  are served, and the per-locale section directory names.
- [translating.md](translating.md): adding a translated locale, either as a
  copy of an existing one or as a from-scratch translation, and wiring it into
  the site.
- [tooling.md](tooling.md): the tools, the justfile tasks, the test suite, the
  generated files that must never be hand-edited, and the agent skills.
- [release.md](release.md): commit, push, and deploy, and how to confirm each.
- [site.md](site.md): how the SvelteKit site relates to this repository.
