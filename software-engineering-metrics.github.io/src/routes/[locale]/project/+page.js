import { error } from '@sveltejs/kit';
import { DEFAULT_LOCALE } from '#lib/locales.js';

export const prerender = true;

// See [locale]/examples/+page.js for why this uses import.meta.glob rather
// than a locale-parameterized dynamic import.
const modules = import.meta.glob('/src/content/*/project/index.md');

export async function load({ params }) {
  const key =
    Object.keys(modules).find((k) => k.includes(`/content/${params.locale}/project/index.md`)) ??
    Object.keys(modules).find((k) => k.includes(`/content/${DEFAULT_LOCALE}/project/index.md`));
  if (!key) error(404, 'Page not found');
  const mod = /** @type {{ default: import('svelte').Component }} */ (await modules[key]());
  return { content: mod.default };
}
