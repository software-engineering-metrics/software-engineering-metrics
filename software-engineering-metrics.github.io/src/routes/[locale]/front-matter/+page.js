import { LOCALE_CODES } from '$lib/locales.js';

export const prerender = true;

// Nothing links to the bare front-matter list page (nav links straight to
// a specific slug), so unlike the other [locale] list pages it needs its
// own entries() rather than relying on the prerender crawler.
export function entries() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}
