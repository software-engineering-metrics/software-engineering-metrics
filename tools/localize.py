#!/usr/bin/env python3
"""
Derives the en-001, en-gb, and en-us locale trees under locales/ from
locales/en-gb-oxendict/, the book's hand-authored source. Never edit the
other three locales directly; edit en-gb-oxendict and rerun this script.

The book is authored in Oxford spelling (see spec/oxford-spelling.md).
_GAP_FIXES corrects a handful of pre-existing spelling gaps in
en-gb-oxendict on every run, so drift never accumulates there either. The
full policy is in spec/locales.md.

Run:

    python3 tools/localize.py
"""
import glob
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOCALES_DIR = os.path.join(ROOT, "locales")
REFERENCE_LOCALE = "en-gb-oxendict"
TARGET_LOCALES = ["en-001", "en-gb", "en-us"]

# ---------------------------------------------------------------------------
# Protected zones: fenced code blocks (except ```markdown ones, which hold
# reader-facing template prose in chapter 9.4, not literal code), inline
# code spans, markdown link targets, italicized spans (this book's house
# style for cited work titles, which may soft-wrap across one line break
# but not a blank line), and a short list of proper nouns with a fixed
# real-world spelling never get spelling-converted.
# ---------------------------------------------------------------------------
_PROTECTED_PHRASES = ["GPRA Modernization Act"]
_PROTECT_RE = re.compile(
    r"(```(?!markdown\b)\S*\n.*?\n```|~~~.*?~~~|`[^`\n]+`|\]\([^)]*\)"
    r"|(?<!\*)\*(?!\*)(?:[^*]|\n(?!\n))+?\*(?!\*)"
    r"|" + "|".join(re.escape(p) for p in _PROTECTED_PHRASES) + r")",
    re.S,
)


def _apply_outside_protected(text, fn):
    out = []
    last = 0
    for m in _PROTECT_RE.finditer(text):
        out.append(fn(text[last:m.start()]))
        out.append(m.group(0))
        last = m.end()
    out.append(fn(text[last:]))
    return "".join(out)


def _case_like(model, word):
    if model.isupper():
        return word.upper()
    if model[:1].isupper():
        return word[:1].upper() + word[1:]
    return word


def _word_sub(mapping):
    """Case-preserving, word-boundary substitution from a lowercase ->
    lowercase mapping."""
    pattern = re.compile(
        r"\b(" + "|".join(sorted(mapping, key=len, reverse=True)) + r")\b",
        re.I,
    )

    def repl(m):
        return _case_like(m.group(0), mapping[m.group(0).lower()])

    return lambda text: pattern.sub(repl, text)


def _chain(*fns):
    def run(text):
        for fn in fns:
            text = _apply_outside_protected(text, fn)
        return text
    return run


# ---------------------------------------------------------------------------
# Step 1: a handful of pre-existing gaps in the source text relative to full
# Oxford-spelling compliance (spec/oxford-spelling.md), fixed once so every
# derived locale starts from a clean, consistent reference.
# ---------------------------------------------------------------------------
_GAP_FIXES = {
    "analyzed": "analysed",
    "fulfillment": "fulfilment",
    "skeptical": "sceptical", "skepticism": "scepticism", "skeptic": "sceptic",
}
fix_reference_gaps = _word_sub(_GAP_FIXES)

# ---------------------------------------------------------------------------
# Step 2: en-gb is the reference with Oxford "-ize/-ization" converted to
# mainstream British "-ise/-isation" -- the one axis that actually
# distinguishes the two British spelling variants (spec/oxford-spelling.md
# calls Oxford spelling "British English with one deliberate difference").
# This list is the -ize/-ization family actually used in the book (verified
# by extracting every word containing "iz" from the source and excluding
# the "size" family, which is spelled with z in every English variety and
# is not this suffix at all).
# ---------------------------------------------------------------------------
_IZE_WORDS = [
    "anonymize", "authorization", "categorization", "centralized",
    "contextualized", "criticized", "customizable", "customization",
    "customized", "demoralize", "depersonalization", "deprioritization",
    "deprioritize", "deprioritized", "deprioritizing", "digitization",
    "digitized", "emphasized", "formalized", "formalizes",
    "generalization", "generalize", "generalized", "generalizes",
    "incentivize", "incentivized", "incentivizing", "individualizes",
    "localized", "maximize", "maximizes", "minimize", "minimizing",
    "modernization", "modernizing", "monopolize", "normalizing",
    "operationalizing", "optimizable", "optimize", "optimized",
    "optimizes", "optimizing", "organization", "organizational",
    "organizations", "organize", "organized", "organizes", "organizing",
    "outsized", "popularized", "prioritization", "prioritize",
    "prioritized", "prioritizing", "realize", "realizes", "recognizable",
    "recognize", "recognized", "recognizes", "reorganization",
    "reorganizations", "reorganized", "reorganizing", "scrutinized",
    "scrutinizing", "specialized", "standardization", "standardize",
    "standardized", "summarize", "synthesize", "unstandardized",
    "utilization", "visualization", "visualizations", "visualize",
    "visualized", "visualizing",
]
_ize_to_ise = _word_sub({w: w.replace("iz", "is", 1) for w in _IZE_WORDS})


def to_en_gb(text):
    return _chain(_ize_to_ise)(text)


# ---------------------------------------------------------------------------
# Step 3: en-001 (international English). Oxford spelling is itself the
# style standard of the UN System and most international standards bodies
# (spec/oxford-spelling.md), so international English mirrors the Oxford
# reference rather than mainstream British or American spelling. The two
# stay separate locales (not a single one) for discoverability in the
# locale picker; see spec/locales.md.
# ---------------------------------------------------------------------------
def to_en_001(text):
    return text


# ---------------------------------------------------------------------------
# Step 4: en-us. Full Americanization of the Oxford reference. Word lists
# are restricted to forms actually present in the book (verified against
# the source), not the full theoretical British vocabulary.
# ---------------------------------------------------------------------------
_US_OUR = {"behaviour": "behavior", "behaviours": "behaviors",
           "behavioural": "behavioral", "behaviourally": "behaviorally",
           "favour": "favor", "favours": "favors", "favoured": "favored",
           "favouring": "favoring", "favourable": "favorable",
           "favourably": "favorably", "favourite": "favorite",
           "favourites": "favorites",
           "honour": "honor", "honours": "honors", "honoured": "honored",
           "honouring": "honoring", "honourable": "honorable",
           "labour": "labor", "labours": "labors", "laboured": "labored",
           "labouring": "laboring",
           "rigour": "rigor"}
_US_RE = {"centre": "center", "centres": "centers", "centred": "centered",
          "centring": "centering"}
_US_CE_SE = {"licence": "license", "licences": "licenses",
             "defence": "defense", "defences": "defenses",
             "defenceless": "defenseless"}
_US_DOUBLE_L_TO_SINGLE = {
    "labelled": "labeled", "labelling": "labeling",
    "modelled": "modeled", "modelling": "modeling",
    "barrelled": "barreled", "barrelling": "barreling",
}
_US_SINGLE_L_TO_DOUBLE = {
    "fulfilment": "fulfillment",
}
_US_OGUE = {"catalogue": "catalog", "catalogues": "catalogs",
            "catalogued": "cataloged", "cataloguing": "cataloging"}
_US_MME = {"programme": "program", "programmes": "programs"}
_US_YSE_TO_YZE = {"analysed": "analyzed"}
_US_MISC = {"artefact": "artifact", "artefacts": "artifacts",
            "sceptical": "skeptical", "scepticism": "skepticism",
            "sceptic": "skeptic",
            "judgement": "judgment", "judgements": "judgments",
            "acknowledgement": "acknowledgment",
            "acknowledgements": "acknowledgments"}
# "licenses" the bare plural noun is the only license/licence form used in
# the book, and it is always the noun sense here (tooling/AI licenses), so
# the whole family collapses to American "license" with no verb/noun split.

_us_word_sub = _word_sub({
    **_US_OUR, **_US_RE, **_US_CE_SE, **_US_DOUBLE_L_TO_SINGLE,
    **_US_SINGLE_L_TO_DOUBLE, **_US_OGUE, **_US_MME, **_US_YSE_TO_YZE,
    **_US_MISC,
})


def to_en_us(text):
    return _chain(_us_word_sub)(text)


LOCALIZERS = {
    "en-001": to_en_001,
    "en-gb": to_en_gb,
    "en-us": to_en_us,
}


def _relpaths():
    reference_dir = os.path.join(LOCALES_DIR, REFERENCE_LOCALE)
    return sorted(
        os.path.relpath(f, reference_dir)
        for f in glob.glob(os.path.join(reference_dir, "**", "*.md"), recursive=True)
    )


def main():
    reference_dir = os.path.join(LOCALES_DIR, REFERENCE_LOCALE)
    rels = _relpaths()
    reference = {}
    for rel in rels:
        text = open(os.path.join(reference_dir, rel), encoding="utf-8").read()
        reference[rel] = _apply_outside_protected(text, fix_reference_gaps)

    for rel, text in reference.items():
        dst = os.path.join(reference_dir, rel)
        if text != open(dst, encoding="utf-8").read():
            open(dst, "w", encoding="utf-8").write(text)

    for locale in TARGET_LOCALES:
        fn = LOCALIZERS[locale]
        locale_dir = os.path.join(LOCALES_DIR, locale)
        existing = set(
            os.path.relpath(f, locale_dir)
            for f in glob.glob(os.path.join(locale_dir, "**", "*.md"), recursive=True)
        )
        for rel in existing - set(reference):
            os.remove(os.path.join(locale_dir, rel))
        for rel, text in reference.items():
            dst = os.path.join(locale_dir, rel)
            os.makedirs(os.path.dirname(dst), exist_ok=True)
            open(dst, "w", encoding="utf-8").write(fn(text))

    print(f"derived {REFERENCE_LOCALE} plus {', '.join(TARGET_LOCALES)} "
          f"from {len(rels)} source files")


if __name__ == "__main__":
    main()
