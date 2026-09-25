// LOCALE_LABELS: the display name for every locale this book might ever
// serve, in that locale's own language (its endonym), from
// ../spec/locales-for-global-sharing-with-svelte/locales.tsv. This is a
// strict superset of the served locale codes below: an entry here for a
// locale not yet in SERVED_LOCALE_CODES just means the label is ready before
// the locale itself is translated and wired up. localeLabel() falls back to
// the raw code for anything missing here (for example zh-cn, whose endonym
// locales.tsv marks as not yet decided ("?")), so a not-yet-labelled locale
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
  'es-001': 'Español',
  'fr-001': 'Français',
  'hi-001': 'हिन्दी',
  'id-001': 'Bahasa Indonesia',
  'pt-001': 'Português',
  'ru-001': 'Русский',
  'ur-001': 'اردو'
};

/** @param {string} code */
export function localeLabel(code) {
  return LOCALE_LABELS[code] ?? code;
}

// The site's locale set, mirroring locales/*/ at the repository root
// (see ../spec/locales.md). Single source of truth for both the build
// scripts (sync-content.mjs, generate-manifest.mjs, the remark plugins) and
// the runtime UI ($lib/locales.js re-exports this). Every code here must
// have a locales/<code>/ directory with real content; the ten locales in
// spec/locales.md's "Planned translated locales" are deliberately not here
// yet, since none has a locales/<code>/ directory on disk.
const SERVED_LOCALE_CODES = ['en-us', 'en-gb-oxendict', 'en-gb', 'en-001'];

export const LOCALES = SERVED_LOCALE_CODES.map((code) => ({ code, label: localeLabel(code) }));

// en-us is served at unprefixed paths ("/chapters/x/"); the other three are
// served under a locale-prefixed path ("/en-gb/chapters/x/"). This keeps
// every existing URL on the site stable.
export const DEFAULT_LOCALE = 'en-us';

export const LOCALE_CODES = LOCALES.map((l) => l.code);

/** @param {string | undefined | null} locale */
export function isLocale(locale) {
  return !!locale && LOCALE_CODES.includes(locale);
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
  return locale && locale !== DEFAULT_LOCALE ? `/${locale}` : '';
}
