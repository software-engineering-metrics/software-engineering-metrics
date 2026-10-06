# Workflow

1. Read the relevant task guide above.
2. Make the smallest change that satisfies the request, editing only
   `locales/en-gb-oxendict/`.
3. Run `python3 tools/localize.py` to re-derive `en-001`, `en-gb`, and
   `en-us`.
4. If you changed the set of topics, update `spec/structure.md`, run
   `just nav`, and run `python3 tools/gen_locale_peer_ids.py` so the new
   topic gets a `.locale-peer-id` sidecar in every locale.
5. Run `just test`. Fix anything it reports. `just spell` catches spelling
   issues the suite does not; CI runs it too.
6. Update `locales/en-gb-oxendict/project/changelog.md` with a one-line
   summary of what changed.


Git: `origin` pushes to three remotes (Codeberg, GitHub, GitLab). A push can
succeed on some and fail on others, so confirm each with `git ls-remote`. A
push to `main` runs `deploy.yml`, which builds the site and dispatches the
`software-engineering-metrics.github.io` deploy; check both runs with `gh run list`.

Site dependencies (`software-engineering-metrics.github.io/`): `pnpm up --latest`,
then `pnpm check` and `pnpm build`. Keep TypeScript on 6.x until SvelteKit
supports 7 (`svelte-kit sync` fails on 7.x). Python tooling: `uv lock --upgrade`.

Size: every file in `AGENTS/` and `locales/en-gb-oxendict/contributing/` stays
well under 40 KB so it loads cheaply into an agent's context.
