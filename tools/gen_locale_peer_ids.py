#!/usr/bin/env python3
"""
Assign and write .locale-peer-id sidecar files for every content file across
the four published locales (see spec/locales.md and
spec/locales-for-global-sharing-with-svelte/index.md).

A peer id is how a future translated locale (one whose slugs differ from the
English source) resolves "this page, in locale X" without slug matching. Each
content file `<section>/<slug>.md` gets a sibling `<section>/<slug>.locale-peer-id`
holding a 32-character lowercase hex id followed by a newline. The id is
byte-identical across every locale's version of the same file, since the four
locales published today are mechanically derived spelling variants of the
same content (see tools/localize.py) and therefore share filenames exactly.

Run:  python3 tools/gen_locale_peer_ids.py   (from the repository root, or anywhere)

Idempotent: an existing id is kept (read from whichever locale already has
it) rather than regenerated, so reruns after adding a new chapter only add
ids for the new file.
"""
import os
import sys
import uuid

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES = ["en-gb-oxendict", "en-001", "en-gb", "en-us"]
REFERENCE_LOCALE = "en-gb-oxendict"
SECTIONS = ["chapters", "front-matter", "examples", "contributing", "project"]


def sidecar_path(locale, section, basename):
    return os.path.join(ROOT, "locales", locale, section, basename[: -len(".md")] + ".locale-peer-id")


def existing_id(section, basename):
    for locale in LOCALES:
        path = sidecar_path(locale, section, basename)
        if os.path.exists(path):
            with open(path, encoding="utf-8") as f:
                return f.read().strip()
    return None


def main():
    written = 0
    checked = 0
    for section in SECTIONS:
        section_dir = os.path.join(ROOT, "locales", REFERENCE_LOCALE, section)
        if not os.path.isdir(section_dir):
            continue
        for basename in sorted(os.listdir(section_dir)):
            if not basename.endswith(".md"):
                continue
            checked += 1
            peer_id = existing_id(section, basename) or uuid.uuid4().hex
            for locale in LOCALES:
                path = sidecar_path(locale, section, basename)
                content = peer_id + "\n"
                if os.path.exists(path) and open(path, encoding="utf-8").read() == content:
                    continue
                with open(path, "w", encoding="utf-8") as f:
                    f.write(content)
                written += 1

    print(f"Checked {checked} content file(s) across {len(SECTIONS)} section(s); "
          f"wrote/updated {written} .locale-peer-id sidecar(s) across {len(LOCALES)} locale(s).")


if __name__ == "__main__":
    sys.exit(main())
