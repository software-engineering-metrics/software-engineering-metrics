import { LOCALE_CODES } from '$lib/locales.js';

export const prerender = true;

// Seeds prerendering for every locale's home page; the prerender crawler
// then discovers that locale's other list pages (front-matter, examples,
// contributing, project, contents, help) by following the real <a href>
// links this page renders. See [locale]/+layout.js.
export function entries() {
  return LOCALE_CODES.map((locale) => ({ locale }));
}
