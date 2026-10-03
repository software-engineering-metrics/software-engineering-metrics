import { error } from '@sveltejs/kit';
import { getManifest } from '#lib/manifests.js';
import { ROUTABLE_LOCALE_CODES, canonicalLocale } from '#lib/locales.js';

export const prerender = true;

// Read each locale's own manifest: a locale with no project/ section yet
// (see spec/locales.md in the sibling content repo) simply contributes no
// entries, rather than 404ing on slugs borrowed from another locale.
// ROUTABLE_LOCALE_CODES so a "-001" locale's alias gets every slug too; see
// chapters/[slug]/+page.js for why this is safe with getManifest().
export function entries() {
  return ROUTABLE_LOCALE_CODES.flatMap((locale) =>
    getManifest(locale).project.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function load({ params }) {
  const manifest = getManifest(params.locale);
  const entry = manifest.project.find((c) => c.slug === params.slug);
  if (!entry) error(404, 'Page not found');
  // canonicalLocale(): see chapters/[slug]/+page.js for why the dynamic
  // import path needs the canonical locale, never an alias.
  const mod = await import(`$content/${canonicalLocale(params.locale)}/project/${params.slug}.md`);
  return { entry, content: mod.default };
}
