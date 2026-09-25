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
// Every string below is under the `en` key, used today by all four served
// locales (see scripts/locales.mjs), since they are English spelling
// variants and this chrome copy does not vary between them. A translated
// locale (see spec/locales.md's "Planned translated locales") adds its own
// top-level key here; ui() falls back to `en` for anything absent, so a
// locale can translate this file incrementally rather than all at once.

const en = {
  skipToContent: 'Skip to main content',
  brand: 'Software Engineering Metrics',
  brandAria: 'Software Engineering Metrics home',
  nav: {
    home: 'Home',
    startHere: 'Start here',
    tableOfContents: 'Table of contents',
    examples: 'Examples',
    contributing: 'Contributing',
    project: 'Project',
    github: 'GitHub',
    ariaLabel: 'Main'
  },
  sidebar: {
    ariaLabel: 'Chapters',
    filterPlaceholder: 'Filter chapters…',
    filterAriaLabel: 'Filter chapters'
  },
  chapterPager: {
    ariaLabel: 'Chapter navigation'
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
    about:
      'A book about measuring software engineering well, published under the {org} organization.',
    orgLinkLabel: 'software-engineering-metrics',
    contentSourceLabel: 'Content source',
    siteSourceLabel: 'Site source',
    tableOfContentsLabel: 'Table of contents',
    contributingLabel: 'Contributing'
  }
};

/** @type {Record<string, typeof en>} */
const STRINGS = { en };

const FALLBACK_LOCALE = 'en';

/**
 * Look up this locale's UI chrome strings, falling back to `en` for any
 * locale (or any individual key, once a locale has partial translations)
 * that has none yet.
 * @param {string | undefined | null} locale
 */
export function ui(locale) {
  if (locale && STRINGS[locale]) return STRINGS[locale];
  return STRINGS[FALLBACK_LOCALE];
}
