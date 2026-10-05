"""On-disk directory names for each locale's content sections.

The names live in spec/section-names.json: a "default" map plus per-locale
overrides. The section keys ("chapters", "front-matter", "examples",
"contributing", "project") are canonical identifiers used by the tools and
the site; the directory a locale actually uses on disk comes from here.
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
with open(os.path.join(ROOT, "spec", "section-names.json"), encoding="utf-8") as _f:
    _MAP = json.load(_f)


def section_dir(locale, section):
    """Directory name for `section` in `locale` (e.g. 'chapters' -> 'topics')."""
    return _MAP["locales"].get(locale, {}).get(section, _MAP["default"][section])
