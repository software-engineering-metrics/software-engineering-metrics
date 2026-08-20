#!/usr/bin/env python3
import os, re, glob
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS=f"{ROOT}/docs"
CH=f"{DOCS}/chapters"
SITE_URL="https://software-engineering-metrics.github.io/"
def read(p): return open(p).read()
def write(p,t): open(p,"w").write(t)

PART_TITLES={1:"Foundations of Measurement",2:"Delivery and Flow Metrics",
3:"Developer Experience and the SPACE Framework",4:"Code and Quality Metrics",
5:"Product and Business Metrics",6:"Reliability, Operations, and Security Metrics",
7:"Metrics in the Age of AI",8:"Building a Metrics Program",9:"Appendices"}

def dec(fp):
    m=re.match(r'(\d+)-(\d+)-', os.path.basename(fp)); return (int(m.group(1)),int(m.group(2)))
def h1title(fp):
    for ln in read(fp).splitlines():
        if ln.startswith("# "): return ln[2:].strip()
    return os.path.basename(fp)
def label_for(fp):
    t=h1title(fp)
    # strip redundant "Introduction to Part N: " for intro rows -> label "N.0 Introduction"
    m=re.match(r'(\d+\.0)\s+Introduction', t)
    return f"{m.group(1)} Introduction" if m else t

files=sorted(glob.glob(f"{CH}/*.md"), key=dec)
byp={}
for f in files: byp.setdefault(dec(f)[0],[]).append(f)
bynum={f"{dec(f)[0]}.{dec(f)[1]}": f for f in files}

# ---- TOC body (shared by README + site home + TOC page) ----
def toc_body(pathprefix):
    out=[]
    for p in sorted(byp):
        out.append(f"### Part {p}: {PART_TITLES[p]}")
        for f in sorted(byp[p], key=dec):
            rel=f"{pathprefix}{os.path.basename(f)}"
            out.append(f"- [{label_for(f)}]({rel})")
        out.append("")
    return "\n".join(out)

INTRO="""A working book about measuring **software engineering** well: how to
choose metrics that reflect real outcomes rather than activity, the standard
frameworks (DORA, SPACE), the metric families that matter, and how to run a
metrics programme that improves a team rather than policing it.

The book covers delivery and flow, developer experience, code and quality,
product and business outcomes, reliability and security, and how generative
AI is reshaping what these numbers mean."""

HOW_TO_READ="""## How to read this book

Parts are whole numbers; chapters are decimals. Chapter **N.0** introduces
each part; **N.1, N.2, …** are its chapters. Part 9 collects the appendices
(glossary, a formulas reference, checklists, templates, a maturity
self-assessment, references, and an index). Every metric-family chapter
states principles, recommendations, trade-offs, a sector lens, examples
(enterprise and government), a business case (ROI/TCO), anti-patterns, a
maturity model, discussion questions, and references, and it names how the
metric gets gamed and what guardrail catches that. Adopt incrementally; do
not big-bang."""

THEMES="""## Cross-cutting themes

[Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law) governs every
chapter: a measure that becomes a target stops being a good measure, so every
metric family here ships with its gaming vector and its guardrail attached.
Outcomes are weighted over output and activity throughout. Government and
enterprise reporting obligations are treated as design inputs, not
afterthoughts, and the shift to generative AI is treated as a reason to
re-examine what these metrics mean, not just a new column on the dashboard."""

# ---- README (repository home page) ----
readme=f"""# Software Engineering Metrics

{INTRO}

The book is published as a website at
<{SITE_URL}>.

## Table of contents

{toc_body("docs/chapters/")}
{THEMES}

## The documentation site

This repository holds the book's content and specification. It is rendered
into a website by the separate
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
repository.
"""
write(f"{ROOT}/README.md", readme)

# ---- docs/index.md (site home page) ----
home=f"""# Software Engineering Metrics

{INTRO}

- **[What are software engineering metrics?](front-matter/what-are-software-engineering-metrics.md):** start here
- **[Introduction](front-matter/introduction.md):** what this book is and how to read it
- **[Table of contents](front-matter/table-of-contents.md):** the full chapter list

{HOW_TO_READ}

## Table of contents

{toc_body("chapters/")}
{THEMES}

## Beyond the chapters

- **[Examples](examples/index.md):** small, concrete examples of the book's ideas in use.
- **[About this project](project/index.md):** how the book is built, checked, and published.
- **[Contributing](contributing/index.md):** how to help, and the house style rules.
"""
write(f"{DOCS}/index.md", home)

# ---- docs/front-matter/table-of-contents.md ----
toc=f"""# Table of contents

Parts are whole numbers; chapters are decimals (chapter **N.0** introduces
each part). See also the [Introduction](introduction.md).

{toc_body("../chapters/")}"""
write(f"{DOCS}/front-matter/table-of-contents.md", toc)

# ---- docs/chapters/09-07-index.md (subject index) ----
idxchap=[f for f in files if dec(f)[1]>=1 and dec(f)[0]<=8]  # substantive chapters, parts 1-8
terms=["DORA","SPACE","Goodhart's law","deployment frequency","lead time for changes",
 "change failure rate","MTTR","MTTD","MTTA","cycle time","flow efficiency","work in process",
 "WIP","pull request","code review","queueing theory","Little's law","utilization",
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
entries={}
for term in terms:
    pat=re.compile(r'(?i)(?<![A-Za-z])'+re.escape(term)+r'(?![A-Za-z])')
    hits=[f"{dec(f)[0]}.{dec(f)[1]}" for f in idxchap if pat.search(read(f))]
    if hits: entries[term]=hits
out=["# 9.7 Index","","A subject index of key concepts and the chapters that cover them.",
 "Terms are defined in the Glossary (chapter 9.1).",""]
byl={}
for term in sorted(entries,key=lambda s:s.lower()):
    L=term[0].upper() if term[0].isalpha() else "#"; byl.setdefault(L,[]).append(term)
def chlink(num): return f"[{num}]({os.path.basename(bynum[num])})"
for L in sorted(byl):
    out+=[f"## {L}",""]+[f"- **{t}**: {', '.join(chlink(n) for n in entries[t])}" for t in byl[L]]+[""]
write(f"{CH}/09-07-index.md","\n".join(out))

# The specification lives at the repository root in spec/ (hand-authored source
# of truth for the book's structure and conventions), so it is not part of the
# generated README/docs-index/table-of-contents pages above.

print("nav generated. parts:", {p:len(byp[p]) for p in sorted(byp)})
print("index terms:", len(entries))
