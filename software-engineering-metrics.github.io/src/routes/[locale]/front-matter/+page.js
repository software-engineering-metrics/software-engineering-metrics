import { ROUTABLE_LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// Nothing links to the bare front-matter list page (nav links straight to
// a specific slug), so unlike the other [locale] list pages it needs its
// own entries() rather than relying on the prerender crawler.
// ROUTABLE_LOCALE_CODES so a "-001" locale's alias ("/en/front-matter/")
// gets prerendered too.
export function entries() {
  return ROUTABLE_LOCALE_CODES.map((locale) => ({ locale }));
}
