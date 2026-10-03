import { ROUTABLE_LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// Seeds prerendering for every locale's home page, canonical and alias
// alike (ROUTABLE_LOCALE_CODES; see scripts/locales.mjs); the prerender
// crawler then discovers that locale's other list pages (front-matter,
// examples, contributing, project, contents, help) by following the real
// <a href> links this page renders, so an alias's own list pages get
// prerendered too without needing their own entries(). See
// [locale]/+layout.js.
export function entries() {
  return ROUTABLE_LOCALE_CODES.map((locale) => ({ locale }));
}
