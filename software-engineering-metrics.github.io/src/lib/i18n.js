// UI chrome strings (not page content): header/footer/nav labels, aria
// labels, and the sidebar/pager/picker microcopy that appears identically on
// every page regardless of what chapter is open. Page content itself (the
// home page's hero and body copy, chapter text) is not here; it is
// mdsvex-compiled Markdown per locale, so it is translated by translating
// the Markdown, not by adding keys here. See "Bug: UI chrome was hardcoded
// English in the .svelte templates" in
// ../../../spec/locales-for-global-sharing-with-svelte/index.md for why this
// file exists ahead of any non-English locale actually shipping.
//
// `en` below is used as-is by all four served locales (see
// scripts/locales.mjs), since they are English spelling variants and this
// chrome copy does not vary between them. A translated locale (see
// spec/locales.md's "Planned translated locales") adds a partial override
// to OVERRIDES below; ui() deep-merges it onto `en`, so a locale can
// translate this file one key at a time as chapters for it land, without a
// missing key ever rendering as undefined.

import { canonicalLocale } from './locales.js';

const en = {
  skipToContent: 'Skip to main content',
  brand: 'Software Engineering Metrics',
  brandAria: 'Software Engineering Metrics home',
  nav: {
    home: 'Home',
    contents: 'Contents',
    examples: 'Examples',
    contributing: 'Contributing',
    project: 'Project',
    help: 'Help',
    github: 'GitHub',
    ariaLabel: 'Main'
  },
  sidebar: {
    ariaLabel: 'Topics',
    filterPlaceholder: 'Filter topics…',
    filterAriaLabel: 'Filter topics'
  },
  chapterPager: {
    ariaLabel: 'Topic navigation'
  },
  breadcrumb: {
    ariaLabel: 'Breadcrumb'
  },
  pickerBar: {
    theme: 'Theme',
    locale: 'Language',
    textSize: 'Text size',
    share: 'Share',
    copyLink: 'Copy link',
    copied: 'Copied'
  },
  footer: {
    byline: 'Led by {author}.',
    authorLabel: 'Joel Parker Henderson',
    about:
      'A book about measuring software engineering well, published under the {org} organization.',
    orgLinkLabel: 'software-engineering-metrics',
    contentSourceLabel: 'Content source',
    siteSourceLabel: 'Site source',
    contentsLabel: 'Contents',
    contributingLabel: 'Contributing'
  }
};

// Partial per-locale overrides, keyed by the same locale codes
// scripts/locales.mjs uses. A locale here need not translate every string:
// deepMerge() below fills in anything missing from `en`, so a locale can be
// translated one key at a time as chapters for it land, without ever
// producing an undefined string for a key it has not reached yet.
/** @type {Record<string, object>} */
const OVERRIDES = {
  'es-001': {
    nav: { contents: 'Contenido' },
    footer: { contentsLabel: 'Contenido' }
  }
};

/**
 * @param {any} base
 * @param {any} override
 */
function deepMerge(base, override) {
  if (!override) return base;
  /** @type {any} */
  const result = { ...base };
  for (const key of Object.keys(override)) {
    const value = override[key];
    result[key] =
      value && typeof value === 'object' && !Array.isArray(value)
        ? deepMerge(base[key], value)
        : value;
  }
  return result;
}

const FALLBACK_LOCALE = 'en';

/**
 * Look up this locale's UI chrome strings, filled in from `en` for any key
 * (or whole locale) a translation has not reached yet. Resolves a two-letter
 * "-001" alias ("es" -> "es-001") first, so an alias page gets the same
 * chrome overrides its canonical locale has.
 * @param {string | undefined | null} locale
 */
export function ui(locale) {
  const resolved = canonicalLocale(locale);
  if (resolved && OVERRIDES[resolved]) return deepMerge(en, OVERRIDES[resolved]);
  return en;
}
