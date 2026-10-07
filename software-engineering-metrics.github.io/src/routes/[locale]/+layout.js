import { error } from '@sveltejs/kit';
import { LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// `entries()` isn't a valid export in +layout.js (only +page.js), so the
// locale values this segment prerenders are seeded by [locale]/+page.js's
// own entries(); every other page under [locale]/ is then reached either by
// the prerender crawler following that home page's real <a href> links, or,
// for [slug] leaves, by its own entries() (see spec/locales.md in the
// sibling content repo).
//
// A locale segment is valid only when it is exactly a served locale code
// (LOCALE_CODES): "/en-001/" is a locale, "/en/" is a 404. params.locale is
// used as-is for every link generated further down the tree (see localePrefix() call
// sites) to keep pointing at that same prefix.
export function load({ params }) {
  if (!LOCALE_CODES.includes(params.locale)) {
    error(404, 'Locale not found');
  }
  return { locale: params.locale };
}
