#!/usr/bin/env python3
"""Generate llms.txt and llms.json for AI agents and crawlers.

Run:  just llms   (or: python3 tools/gen_llms.py)

Both files are written into software-engineering-metrics.github.io/static/ so
the site serves them at its root (https://software-engineering-metrics.github.io/llms.txt
and /llms.json). They are derived from the single sources of truth: the
locale directories under locales/, spec/section-names.json (via section_names),
and the served-locale list in the site's scripts/locales.mjs. Never hand-edit
the output; re-run this script after adding or renaming a topic or locale.

llms.txt follows the llmstxt.org convention (H1, blockquote summary, then
sections of links). llms.json carries the same information for programs.
"""
import glob
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from section_names import section_dir

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://software-engineering-metrics.github.io"
REPO = "https://github.com/software-engineering-metrics/software-engineering-metrics"
OUT = os.environ.get("LLMS_OUT") or os.path.join(ROOT, "software-engineering-metrics.github.io", "static")
DEFAULT_LOCALE = "en-us"
SUMMARY = (
    "A working book about measuring software engineering well: 47 metric topics "
    "across 8 parts, plus front matter and appendices. Every metric family names "
    "its gaming vector and the guardrail that catches it, because of Goodhart's law: "
    "a measure that becomes a target stops being a good measure."
)


def served_locales():
    src = open(os.path.join(ROOT, "software-engineering-metrics.github.io", "scripts", "locales.mjs"),
               encoding="utf-8").read()
    labels = dict(re.findall(r"'([a-z]{2}(?:-[a-z0-9]+)*)':\s*'([^']+)'", src.split("export function")[0]))
    block = re.search(r"const SERVED_LOCALE_CODES = \[(.*?)\];", src, re.S).group(1)
    codes = re.findall(r"'([^']+)'", block)
    return [(c, labels.get(c, c)) for c in codes]


def topics(locale):
    out = []
    for path in sorted(glob.glob(os.path.join(ROOT, "locales", locale, section_dir(locale, "chapters"), "*.md"))):
        base = os.path.basename(path)[:-3]
        m = re.match(r"(\d+)-(\d+)-", base)
        h1 = next((l for l in open(path, encoding="utf-8").read().splitlines() if l.startswith("# ")), "# ")
        title = re.sub(r"^#\s+\d+\.\d+\s+", "", h1).strip()
        out.append({"number": f"{int(m.group(1))}.{int(m.group(2))}", "title": title,
                    "url": f"{SITE}/{locale}/chapters/{base}/"})
    return out


def main():
    locales = served_locales()
    data = {
        "name": "Software Engineering Metrics",
        "description": SUMMARY,
        "site": SITE + "/",
        "repository": REPO,
        "defaultLocale": DEFAULT_LOCALE,
        "authoringLocale": "en-gb-oxendict",
        "conventions": {
            "urlPattern": SITE + "/<locale>/chapters/<file-name-without-.md>/",
            "sourceOfTruth": "locales/en-gb-oxendict/ (the other English locales are derived mechanically)",
            "specification": REPO + "/tree/main/spec",
            "agentGuide": REPO + "/blob/main/AGENTS.md",
            "topicNumbering": "Parts are whole numbers; topics are decimals (N.0 introduces part N, N.1, N.2, ... follow).",
        },
        "locales": [{"code": c, "label": lab, "home": f"{SITE}/{c}/", "topics": topics(c)} for c, lab in locales],
    }
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "llms.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write("\n")

    en = next(l for l in data["locales"] if l["code"] == DEFAULT_LOCALE)
    lines = [f"# {data['name']}", "", f"> {SUMMARY}", "",
             "The book is published in several locales. The English locale below is the default; "
             "every other locale uses the same URL pattern with its own code, and the full list of "
             "topics per locale is in llms.json.", "",
             "## Start here", "",
             f"- [Home]({SITE}/{DEFAULT_LOCALE}/): the opening page",
             f"- [What are software engineering metrics?]({SITE}/{DEFAULT_LOCALE}/front-matter/what-are-software-engineering-metrics/): the opening essay",
             f"- [Table of contents]({SITE}/{DEFAULT_LOCALE}/contents/): all parts and topics"]
    part = None
    for t in en["topics"]:
        p = int(t["number"].split(".")[0])
        if p != part:
            part = p
            lines += ["", f"## Part {p}", ""]
        lines.append(f"- [{t['number']} {t['title']}]({t['url']})")
    lines += ["", "## Locales", ""]
    lines += [f"- [{lab} ({c})]({SITE}/{c}/)" for c, lab in locales]
    lines += ["", "## For contributors and agents", "",
              f"- [AGENTS.md]({REPO}/blob/main/AGENTS.md): repository orientation and the golden rules",
              f"- [spec/]({REPO}/tree/main/spec): the specification, the single source of truth",
              f"- [llms.json]({SITE}/llms.json): the same information, machine-readable, for every locale", ""]
    with open(os.path.join(OUT, "llms.txt"), "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote llms.txt and llms.json for {len(locales)} locale(s), {len(en['topics'])} topics each.")


if __name__ == "__main__":
    main()
