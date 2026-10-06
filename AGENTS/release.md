# Commit, push, and deploy

Commit, push, and deploy only when the maintainer asks. Approval for one step
does not extend to the next.

1. Run `python3 tools/localize.py`, `python3 tools/gen_nav.py` if the set of
   topics changed, `just llms` if locales or topics changed, and `just test`.
2. If the site is affected, from `software-engineering-metrics.github.io/` run
   `pnpm content` and `pnpm build`.
3. Commit with a message that says what changed and why, and end it with the
   attribution line the session specifies.
4. `git push`. The push to `main` triggers the `Deploy site` workflow
   (`.github/workflows/deploy.yml`): it builds the site, then asks the
   `software-engineering-metrics.github.io` repository to redeploy.
5. Confirm with `gh run list --limit 3`, then `gh run view <id>`: both the
   `build` and `dispatch-deploy` jobs must be `success`. That proves the site
   built and the redeploy was requested; it does not prove the pages are
   live, so open the URL to check.

If `git push` says "Everything up-to-date" when you expected a new commit,
check `git log origin/main`; someone may already have pushed it.
