#!/usr/bin/env python3
import os, re, glob, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import localize

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_URL = "https://software-engineering-metrics.github.io/"
LOCALES = ["en-gb-oxendict", "en-001", "en-gb", "en-us"]
REFERENCE_LOCALE = "en-gb-oxendict"


def read(p): return open(p, encoding="utf-8").read()
def write(p, t): open(p, "w", encoding="utf-8").write(t)


PART_TITLES = {1: "Foundations of Measurement", 2: "Flow Metrics",
3: "Developer Experience and the SPACE Framework", 4: "Code and Quality Metrics",
5: "Product and Business Metrics", 6: "Reliability, Operations, and Security Metrics",
7: "Metrics in the Age of AI", 8: "Building a Metrics Program", 9: "Appendices"}


def dec(fp):
    m = re.match(r'(\d+)-(\d+)-', os.path.basename(fp)); return (int(m.group(1)), int(m.group(2)))


def h1title(fp):
    for ln in read(fp).splitlines():
        if ln.startswith("# "): return ln[2:].strip()
    return os.path.basename(fp)


def label_for(fp):
    t = h1title(fp)
    m = re.match(r'(\d+\.0)\s+Introduction', t)
    return f"{m.group(1)} Introduction" if m else t


INTRO = """A working book about measuring **software engineering** well: how to
choose metrics that reflect real outcomes rather than activity, the
frameworks this book builds on (the Flow Framework, the SPACE framework,
queueing theory, and DORA metrics), the metric families that matter, and
how to run a metrics programme that improves a team rather than policing
it.

The book covers delivery and flow, developer experience, code and quality,
product and business outcomes, reliability and security, and how generative
AI is reshaping what these numbers mean."""

HOW_TO_READ = """## How to read this book

Parts are whole numbers; chapters are decimals. Chapter **N.0** introduces
each part; **N.1, N.2, …** are its chapters. Part 9 collects the appendices
(glossary, a formulas reference, checklists, templates, a maturity
self-assessment, references, and an index). Every metric-family chapter
states principles, recommendations, trade-offs, a sector lens, examples
(enterprise and government), a business case (ROI/TCO), anti-patterns, a
maturity model, discussion questions, and references, and it names how the
metric gets gamed and what guardrail catches that. Adopt incrementally; do
not big-bang."""

THEMES = """## Cross-cutting themes

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) governs every
chapter: a measure that becomes a target stops being a good measure, so every
metric family here ships with its gaming vector and its guardrail attached.
Outcomes are weighted over output and activity throughout. Government and
enterprise reporting obligations are treated as design inputs, not
afterthoughts, and the shift to generative AI is treated as a reason to
re-examine what these metrics mean, not just a new column on the dashboard."""

TERMS = ["DORA","SPACE","Goodhart's law","deployment frequency","lead time for changes",
 "change failure rate","MTTR","MTTD","MTTA","cycle time","flow efficiency","work in process",
 "WIP","pull request","code review","queueing theory","Little's law","utilization",
 "Flow Framework","flow item","flow velocity","flow distribution","flow time","flow load",
 "value stream","takt time","process time","rolled throughput yield","Lean",
 "percent complete and accurate",
 "satisfaction","well-being","activity metric",
 "communication","collaboration","deep work","DevEx","cyclomatic complexity","test coverage",
 "mutation testing","code churn","hotspot","static analysis","code smell","technical debt",
 "documentation","escaped defect","feature adoption","customer outcome","unit economics",
 "return on investment","ROI","total cost of ownership","TCO","SLI","SLO","error budget",
 "incident management","on-call","capacity planning","vulnerability management",
 "generative AI","AI-assisted development","outcome telemetry","dashboard","north-star metric",
 "vanity metric","guardrail metric","cohort","leading indicator","lagging indicator",
 "OKR","KPI","maturity model","survey","psychological safety","burnout","toil",
 "observability","OpenTelemetry","postmortem","blameless","statistical significance",
 "regression to the mean","confounding variable","sampling bias","benchmarking",
 "instrumentation","data governance","source of truth","trunk-based development",
 "continuous delivery","site reliability engineering","SRE","platform engineering",
 "developer productivity","cognitive load","context switching","Accelerate",
 "State of DevOps","control chart","percentile","median","outlier"]


def localize_for(locale, text):
    if locale == REFERENCE_LOCALE:
        return text
    return localize.LOCALIZERS[locale](text)


part_counts = None
for locale in LOCALES:
    LOC = f"{ROOT}/locales/{locale}"
    CH = f"{LOC}/chapters"
    intro = localize_for(locale, INTRO)
    how_to_read = localize_for(locale, HOW_TO_READ)
    themes = localize_for(locale, THEMES)
    part_titles = {p: localize_for(locale, t) for p, t in PART_TITLES.items()}

    files = sorted(glob.glob(f"{CH}/*.md"), key=dec)
    byp = {}
    for f in files: byp.setdefault(dec(f)[0], []).append(f)
    bynum = {f"{dec(f)[0]}.{dec(f)[1]}": f for f in files}

    def toc_body(pathprefix):
        out = []
        for p in sorted(byp):
            out.append(f"### Part {p}: {part_titles[p]}")
            for f in sorted(byp[p], key=dec):
                rel = f"{pathprefix}{os.path.basename(f)}"
                out.append(f"- [{label_for(f)}]({rel})")
            out.append("")
        return "\n".join(out)

    if locale == REFERENCE_LOCALE:
        # ---- README (repository home page); always the reference locale ----
        readme = f"""# Software Engineering Metrics

{intro}

The book is published as a website at
<{SITE_URL}>.

## Table of contents

{toc_body(f"locales/{locale}/chapters/")}
{themes}

## Locales

The book is published in four locales; see
[spec/locales.md](spec/locales.md). The table of contents above links the
`{locale}` (Oxford spelling) locale, the authoring source. The others are
`locales/en-001/`, `locales/en-gb/`, and `locales/en-us/`.

## The documentation site

This repository holds the book's content and specification. It is rendered
into a website by the separate
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
repository.
"""
        write(f"{ROOT}/README.md", readme)

    # ---- locales/<locale>/index.md (site home page for this locale) ----
    home = f"""# Software Engineering Metrics

{intro}

- **[What are software engineering metrics?](front-matter/what-are-software-engineering-metrics.md):** start here
- **[Introduction](front-matter/introduction.md):** what this book is and how to read it
- **[Table of contents](front-matter/table-of-contents.md):** the full chapter list

{how_to_read}

## Table of contents

{toc_body("chapters/")}
{themes}

## Beyond the chapters

- **[Examples](examples/index.md):** small, concrete examples of the book's ideas in use.
- **[About this project](project/index.md):** how the book is built, checked, and published.
- **[Contributing](contributing/index.md):** how to help, and the house style rules.
"""
    write(f"{LOC}/index.md", home)

    # ---- locales/<locale>/front-matter/table-of-contents.md ----
    toc = f"""# Table of contents

Parts are whole numbers; chapters are decimals (chapter **N.0** introduces
each part). See also the [Introduction](introduction.md).

{toc_body("../chapters/")}"""
    write(f"{LOC}/front-matter/table-of-contents.md", toc)

    # ---- locales/<locale>/chapters/09-07-index.md (subject index) ----
    idxchap = [f for f in files if dec(f)[1] >= 1 and dec(f)[0] <= 8]
    entries = {}
    for term in TERMS:
        pat = re.compile(r'(?i)(?<![A-Za-z])' + re.escape(term) + r'(?![A-Za-z])')
        hits = [f"{dec(f)[0]}.{dec(f)[1]}" for f in idxchap if pat.search(read(f))]
        if hits: entries[term] = hits
    out = ["# 9.7 Index", "", "A subject index of key concepts and the chapters that cover them.",
           "Terms are defined in the Glossary (chapter 9.1).", ""]
    byl = {}
    for term in sorted(entries, key=lambda s: s.lower()):
        L = term[0].upper() if term[0].isalpha() else "#"; byl.setdefault(L, []).append(term)
    def chlink(num): return f"[{num}]({os.path.basename(bynum[num])})"
    for L in sorted(byl):
        out += [f"## {L}", ""] + [f"- **{t}**: {', '.join(chlink(n) for n in entries[t])}" for t in byl[L]] + [""]
    write(f"{CH}/09-07-index.md", "\n".join(out))

    if locale == REFERENCE_LOCALE:
        part_counts = {p: len(byp[p]) for p in sorted(byp)}
        index_terms = len(entries)

# The specification lives at the repository root in spec/ (hand-authored source
# of truth for the book's structure and conventions), so it is not part of the
# generated README/locale-index/table-of-contents pages above.

print("nav generated for locales:", ", ".join(LOCALES))
print(f"({REFERENCE_LOCALE}) parts:", part_counts)
print(f"({REFERENCE_LOCALE}) index terms:", index_terms)
