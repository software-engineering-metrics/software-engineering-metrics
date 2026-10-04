// LOCALE_LABELS: the display name for every locale this book might ever
// serve, in that locale's own language (its endonym), from
// ../spec/locales-for-global-sharing-with-svelte/locales.tsv. This is a
// strict superset of the served locale codes below: an entry here for a
// locale not yet in SERVED_LOCALE_CODES just means the label is ready before
// the locale itself is translated and wired up. localeLabel() falls back to
// the raw code for anything not listed here, so a not-yet-labelled locale
// degrades to its code rather than throwing.
/** @type {Record<string, string>} */
export const LOCALE_LABELS = {
  'en-us': 'English (US)',
  'en-gb-oxendict': 'English (UK, Oxford spelling)',
  'en-gb': 'English (UK)',
  'en-001': 'English (international)',
  'ar-001': 'العربية',
  'bn-001': 'বাংলা',
  'cy-001': 'Cymraeg',
  'cy-gb': 'Cymraeg (Prydain Fawr)',
  'es-001': 'Español',
  'fr-001': 'Français',
  'hi-001': 'हिन्दी',
  'id-001': 'Bahasa Indonesia',
  'pt-001': 'Português',
  'ru-001': 'Русский',
  'ur-001': 'اردو',
  'zh-001': '中文',
  'zh-cn': '中文 (中国)'
};

/** @param {string} code */
export function localeLabel(code) {
  return LOCALE_LABELS[code] ?? code;
}

// The site's locale set, mirroring locales/*/ at the repository root
// (see ../spec/locales.md). Single source of truth for both the build
// scripts (sync-content.mjs, generate-manifest.mjs, the remark plugins) and
// the runtime UI ($lib/locales.js re-exports this). Every code here must
// have a locales/<code>/ directory with real content; the remaining planned
// locales in spec/locales.md's "Planned translated locales" are deliberately
// not here yet, since none has a locales/<code>/ directory on disk. ar-001, bn-001, cy-001,
// cy-gb, es-001, fr-001, hi-001, and zh-cn are genuinely translated locales (not English
// spelling variants) that ship only chapters/ so far, with no front-matter/,
// examples/, contributing/, or project/ section yet; the pages that read
// those sections degrade to an empty list or a chapter-page fallback rather
// than a broken link (see +page.svelte and contents/+page.svelte).
const SERVED_LOCALE_CODES = [
  'en-us',
  'en-gb-oxendict',
  'en-gb',
  'en-001',
  'ar-001',
  'bn-001',
  'cy-001',
  'cy-gb',
  'es-001',
  'fr-001',
  'hi-001',
  'zh-cn'
];

export const LOCALES = SERVED_LOCALE_CODES.map((code) => ({ code, label: localeLabel(code) }));

// Every locale, including en-us, is served under its own locale-prefixed
// path ("/en-us/chapters/x/", "/en-gb/chapters/x/", ...) via
// src/routes/[locale]/. DEFAULT_LOCALE is still meaningful as a fallback
// (getManifest(), sortedLocaleEntries()) and as this site's primary
// language for ordering, but it no longer gets special-cased unprefixed
// routing.
export const DEFAULT_LOCALE = 'en-us';

export const LOCALE_CODES = LOCALES.map((l) => l.code);

/** @param {string | undefined | null} locale */
export function isLocale(locale) {
  return !!locale && LOCALE_CODES.includes(locale);
}

// A served "world"/international locale (a UN M49 "-001" suffix, e.g.
// "en-001") also gets a shorter two-letter alias route ("en") that renders
// that same locale's content: "/en" renders what "/en-001" renders. Derived
// from SERVED_LOCALE_CODES rather than hand-maintained, so a future "-001"
// locale (fr-001, pt-001, ... per spec/locales.md's "Planned translated
// locales") gets its alias automatically the moment it is served, with no
// separate list to remember to update. The alias is a routing-only concept:
// it is never added to LOCALE_CODES/SERVED_LOCALE_CODES, so it never shows
// up as its own entry in the locale picker or the search index's locale
// handling — those still only ever see the canonical "-001" code.
/** @type {Record<string, string>} */
export const LOCALE_ALIASES = Object.fromEntries(
  SERVED_LOCALE_CODES.filter((code) => code.endsWith('-001')).map((code) => [code.slice(0, -4), code])
);

export const ALIAS_CODES = Object.keys(LOCALE_ALIASES);

// Every value [locale] itself may legitimately take in the URL: the real,
// canonical locale codes plus their short aliases. Route validation
// (+layout.js) and every entries() across src/routes/[locale]/ use this,
// not LOCALE_CODES, so an alias page actually gets prerendered rather than
// 404ing.
export const ROUTABLE_LOCALE_CODES = [...LOCALE_CODES, ...ALIAS_CODES];

/**
 * Resolve an alias to the real locale code it renders ("en" -> "en-001");
 * a canonical code (or anything else) passes through unchanged. Use this
 * before any lookup keyed by the literal locale code that only exists for
 * canonical codes: a manifest import, a `$content/<locale>/...` dynamic
 * import, or a chrome-string override lookup.
 * @param {string | undefined | null} locale
 */
export function canonicalLocale(locale) {
  return (locale && LOCALE_ALIASES[locale]) || locale;
}

/**
 * Sort locale codes the way a locale list should read (not currently used by
 * LocalePicker.svelte, whose dropdown keeps its own curated order; this is
 * ready for the "home page's locale list" feature described in
 * ../spec/locales-for-global-sharing-with-svelte/index.md, for once there is
 * more than one language to group): the default locale first, then grouped
 * by language name (the label text before any parenthetical), with each
 * group's `-001`/international variant before its regional siblings, then
 * groups and siblings alphabetically by label. Comparisons are plain
 * codepoint order (not `localeCompare()`), so the result is the same on
 * every machine and every Node/ICU version, not just "alphabetical in
 * whichever collation happens to be active."
 * @param {string[]} codes
 */
export function sortedLocaleEntries(codes) {
  /** @param {string} code */
  const languageName = (code) => localeLabel(code).split('(')[0].trim();
  /** @param {string} x @param {string} y */
  const byCodepoint = (x, y) => (x < y ? -1 : x > y ? 1 : 0);
  return [...codes].sort((a, b) => {
    if (a === DEFAULT_LOCALE || b === DEFAULT_LOCALE) {
      return a === b ? 0 : a === DEFAULT_LOCALE ? -1 : 1;
    }
    const languageOrder = byCodepoint(languageName(a), languageName(b));
    if (languageOrder !== 0) return languageOrder;
    const aIsWorld = a.endsWith('-001');
    const bIsWorld = b.endsWith('-001');
    if (aIsWorld !== bIsWorld) return aIsWorld ? -1 : 1;
    return byCodepoint(localeLabel(a), localeLabel(b));
  });
}

/** @param {string | undefined | null} locale */
export function localePrefix(locale) {
  return locale ? `/${locale}` : '';
}
