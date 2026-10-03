import { error } from '@sveltejs/kit';
import { DEFAULT_LOCALE, canonicalLocale } from '#lib/locales.js';

export const prerender = true;

// A lazy-loading map keyed by the file's own path, built from whichever
// locales actually have an examples/index.md on disk — unlike a plain
// `import(`$content/${params.locale}/...`)`, this never throws for a locale
// that has no examples/ section yet (see spec/locales.md in the sibling
// content repo); it falls back to the default locale's intro copy instead.
const modules = import.meta.glob('/src/content/*/examples/index.md');

export async function load({ params }) {
  // canonicalLocale(): the glob above only ever discovers canonical locale
  // directories (src/content/en-001/..., never src/content/en/...), so an
  // alias param ("en") must resolve before it is used as a lookup key.
  const locale = canonicalLocale(params.locale);
  const key =
    Object.keys(modules).find((k) => k.includes(`/content/${locale}/examples/index.md`)) ??
    Object.keys(modules).find((k) => k.includes(`/content/${DEFAULT_LOCALE}/examples/index.md`));
  if (!key) error(404, 'Page not found');
  const mod = /** @type {{ default: import('svelte').Component }} */ (await modules[key]());
  return { content: mod.default };
}
