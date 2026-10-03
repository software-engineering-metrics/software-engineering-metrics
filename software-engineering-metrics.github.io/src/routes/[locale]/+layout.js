import { error } from '@sveltejs/kit';
import { ROUTABLE_LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// `entries()` isn't a valid export in +layout.js (only +page.js), so the
// locale values this segment prerenders are seeded by [locale]/+page.js's
// own entries(); every other page under [locale]/ is then reached either by
// the prerender crawler following that home page's real <a href> links, or,
// for [slug] leaves, by its own entries() (see spec/locales.md in the
// sibling content repo).
//
// ROUTABLE_LOCALE_CODES (not LOCALE_CODES) so a two-letter "-001" alias
// ("/en") validates too, not just its canonical locale ("/en-001"); params.
// locale stays whatever the visitor's URL actually had, alias or canonical,
// for every link generated further down the tree (see localePrefix() call
// sites) to keep pointing at that same prefix.
export function load({ params }) {
  if (!ROUTABLE_LOCALE_CODES.includes(params.locale)) {
    error(404, 'Locale not found');
  }
  return { locale: params.locale };
}
