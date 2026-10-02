import { error } from '@sveltejs/kit';
import { getManifest } from '#lib/manifests.js';
import { LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// Read each locale's own manifest: a locale with no examples/ section yet
// (see spec/locales.md in the sibling content repo) simply contributes no
// entries, rather than 404ing on slugs borrowed from another locale.
export function entries() {
  return LOCALE_CODES.flatMap((locale) =>
    getManifest(locale).examples.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function load({ params }) {
  const manifest = getManifest(params.locale);
  const entry = manifest.examples.find((c) => c.slug === params.slug);
  if (!entry) error(404, 'Example not found');
  const mod = await import(`$content/${params.locale}/examples/${params.slug}.md`);
  return { entry, content: mod.default };
}
