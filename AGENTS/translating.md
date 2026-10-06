# Adding a translated locale

Two cases. Pick the first when a sibling locale already has acceptable content.

## A. A copy of an existing locale (for example `cy-gb` from `cy-001`)

1. `cp -R locales/<source> locales/<new>`. The sidecars and file names are
   copied too, which is correct.
2. Add the new code to `spec/section-names.json` only if its section directory
   name differs from the source (normally it does not; copy the source's entry).
3. Register it (see "Register the locale" below).

## B. A from-scratch translation (for example `id-001`)

1. Add the locale to `spec/section-names.json` with its translated name for the
   topics directory, and create `locales/<code>/<that name>/`.
2. Translate every topic in `locales/en-gb-oxendict/topics/` into
   `<PP-CC>-<slug-in-the-new-language>.md`, keeping the same two-digit prefix.
   Keep headings, order, tables, numbers, and emphasis; translate the required
   section headings the same way in every file; keep book titles, URLs, code,
   and acronyms as they are; write "topic" in the new language wherever the
   English says "topic". The golden rules still apply (no em-dashes, no stock
   phrasing). Real references only.
3. Leave link targets as the English file names while translating, then remap
   every link whose target is an English topic file name to the new file with
   the same `NN-NN` prefix (the index, topic 9.7, has the most). Drop links to sections the
   locale does not have, such as `../examples/index.md`.
4. Copy each `.locale-peer-id` from the English file with the same prefix, so
   the id is identical across locales.
5. Check structure before registering: 63 files, equal heading counts against
   the English files, comparable word counts, and no em-dash.

Translating in parallel works well when each agent gets one part and a shared
glossary file, so terminology and the required section headings stay consistent.

## Register the locale

1. `spec/locales.md`: add it to the list of translated locales, fix the count
   and the "wired into the site" sentence, and remove it from "Planned
   translated locales".
2. `locales/en-gb-oxendict/project/changelog.md`: add a line under Unreleased
   (then `python3 tools/localize.py`).
3. To serve it on the site: add the code to `SERVED_LOCALE_CODES` in
   `software-engineering-metrics.github.io/scripts/locales.mjs` (its label is
   usually in `LOCALE_LABELS` already), add an `import` and an entry in
   `src/lib/manifests.js`, then run `pnpm content` and `pnpm build` from the
   site directory. Update the locale counts in `AGENTS.md`,
   `AGENTS/locales.md`, and the site's `AGENTS.md` and `README.md`.
4. Run `just llms` so `llms.txt` and `llms.json` list it.
5. Run `just test`.

## Check translated links yourself

`just test` fully checks only the four English locales. Check every locale's
relative links with this snippet; it should print `bad 0`.

```python
import os, re
bad = tot = 0
for root, _, fs in os.walk("locales"):
    for f in fs:
        if f.endswith(".md"):
            text = open(os.path.join(root, f), encoding="utf-8").read()
            for t in re.findall(r"\]\(([^)#\s]+\.md)(?:#[^)]*)?\)", text):
                if re.match(r"\w+://", t):
                    continue
                tot += 1
                if not os.path.exists(os.path.normpath(os.path.join(root, t))):
                    bad += 1
print("links", tot, "bad", bad)
```

`just spell` runs codespell as English over every locale, so it reports
translated text as misspellings; that is expected and not a regression.
