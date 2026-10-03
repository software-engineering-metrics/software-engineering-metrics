import { error } from '@sveltejs/kit';
import { getManifest } from '#lib/manifests.js';
import { ROUTABLE_LOCALE_CODES, canonicalLocale } from '#lib/locales.js';

export const prerender = true;

// Each locale has its own slugs (a genuinely translated locale renames its
// chapter files to native-script/accented slugs, see spec/locales.md in the
// sibling content repo), so entries() must read every locale's own
// manifest, not borrow the default locale's chapter list. ROUTABLE_LOCALE_CODES
// (canonical codes plus their "-001" aliases) so an alias gets every slug
// too; getManifest() resolves the alias to its canonical locale internally,
// so this reads the same manifest, and therefore the same slugs, as the
// locale it is an alias for.
export function entries() {
  return ROUTABLE_LOCALE_CODES.flatMap((locale) =>
    getManifest(locale).chapters.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function load({ params }) {
  const manifest = getManifest(params.locale);
  const chapter = manifest.chapters.find((c) => c.slug === params.slug);
  if (!chapter) error(404, 'Chapter not found');

  const index = manifest.order.indexOf(chapter.decimal);
  const prevDecimal = index > 0 ? manifest.order[index - 1] : null;
  const nextDecimal = index >= 0 && index < manifest.order.length - 1 ? manifest.order[index + 1] : null;

  // A universal load function may return non-serializable values (like a
  // Svelte component constructor) because it re-runs in the browser on
  // client-side navigation rather than being passed across the network.
  // canonicalLocale(): the dynamic import path only exists on disk under the
  // canonical locale (src/content/en-001/..., never src/content/en/...), so
  // an alias param ("en") must resolve before it is used here.
  const mod = await import(`$content/${canonicalLocale(params.locale)}/chapters/${params.slug}.md`);

  return {
    chapter,
    prev: prevDecimal ? manifest.chaptersByDecimal[prevDecimal] : null,
    next: nextDecimal ? manifest.chaptersByDecimal[nextDecimal] : null,
    content: mod.default
  };
}
