#!/usr/bin/env python3
"""Refresh the topic lists in each translated locale's navigation pages.

gen_nav.py only handles the four English locales. For a hand-translated
locale, `locales/<locale>/index.md` and the table-of-contents page in its
front-matter section are written by hand (translated headings and the N.0
introduction line of each part), and this tool rewrites the bullets under each
`### ` part heading from the locale's own topic H1 titles, so links and titles
never drift from the topics. The first bullet of each part (the N.0 line) keeps
its hand-translated label; only its link target is refreshed.

Usage: python3 tools/gen_translated_nav.py [locale ...]   (default: all)
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from section_names import section_dir  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES_DIR = os.path.join(ROOT, "locales")
ENGLISH = {"en-gb-oxendict", "en-001", "en-gb", "en-us"}
REFERENCE = "en-gb-oxendict"


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def peer_ids(directory):
    out = {}
    if not os.path.isdir(directory):
        return out
    for f in os.listdir(directory):
        if f.endswith(".locale-peer-id"):
            out[read(os.path.join(directory, f)).strip()] = f[: -len(".locale-peer-id")] + ".md"
    return out


def locale_file(locale, section, english_name):
    """Path of the locale's file whose peer id matches the English file."""
    ref_dir = os.path.join(LOCALES_DIR, REFERENCE, section_dir(REFERENCE, section))
    ref = {v: k for k, v in peer_ids(ref_dir).items()}
    loc = peer_ids(os.path.join(LOCALES_DIR, locale, section_dir(locale, section)))
    name = loc.get(ref.get(english_name))
    return os.path.join(LOCALES_DIR, locale, section_dir(locale, section), name) if name else None


def topics(locale):
    d = os.path.join(LOCALES_DIR, locale, section_dir(locale, "chapters"))
    out = []
    for f in sorted(os.listdir(d)):
        m = re.match(r"(\d\d)-(\d\d)-.*\.md$", f)
        if m:
            title = read(os.path.join(d, f)).splitlines()[0].lstrip("# ").strip()
            out.append((int(m.group(1)), int(m.group(2)), f, title))
    return out


def refresh(path, locale, prefix):
    chdir = section_dir(locale, "chapters")
    by_part = {}
    for part, num, f, title in topics(locale):
        by_part.setdefault(part, []).append((num, f, title))
    lines = read(path).split("\n")
    out, i, part = [], 0, 0
    while i < len(lines):
        line = lines[i]
        out.append(line)
        i += 1
        if not line.startswith("### "):
            continue
        part += 1
        bullets = []
        while i < len(lines) and lines[i].startswith("- ["):
            bullets.append(lines[i])
            i += 1
        items = by_part[part]
        first = re.match(r"- \[(.*?)\]\(.*\)$", bullets[0]).group(1)
        out.append(f"- [{first}]({prefix}{chdir}/{items[0][1]})")
        for num, f, title in items[1:]:
            out.append(f"- [{title}]({prefix}{chdir}/{f})")
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(out))


def main():
    wanted = sys.argv[1:]
    for locale in sorted(os.listdir(LOCALES_DIR)):
        if locale in ENGLISH or (wanted and locale not in wanted):
            continue
        home = os.path.join(LOCALES_DIR, locale, "index.md")
        toc = locale_file(locale, "front-matter", "table-of-contents.md")
        if os.path.exists(home) and toc:
            refresh(home, locale, "")
            refresh(toc, locale, "../")
            print(f"refreshed navigation for {locale}")


if __name__ == "__main__":
    main()
