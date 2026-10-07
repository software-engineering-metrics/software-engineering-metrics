import { error } from '@sveltejs/kit';
import { getManifest } from '#lib/manifests.js';
import { LOCALE_CODES } from '#lib/locales.js';

export const prerender = true;

// Each locale has its own slugs (a genuinely translated locale renames its
// chapter files to native-script/accented slugs, see spec/locales.md in the
// sibling content repo), so entries() must read every locale's own
// manifest, not borrow the default locale's chapter list.
export function entries() {
  return LOCALE_CODES.flatMap((locale) =>
    getManifest(locale).chapters.map((c) => ({ locale, slug: c.slug }))
  );
}

export async function load({ params }) {
  const manifest = getManifest(params.locale);
  const chapter = manifest.chapters.find((c) => c.slug === params.slug);
  if (!chapter) error(404, 'Topic not found');

  const index = manifest.order.indexOf(chapter.decimal);
  const prevDecimal = index > 0 ? manifest.order[index - 1] : null;
  const nextDecimal = index >= 0 && index < manifest.order.length - 1 ? manifest.order[index + 1] : null;

  // A universal load function may return non-serializable values (like a
  // Svelte component constructor) because it re-runs in the browser on
  // client-side navigation rather than being passed across the network.
  const mod = await import(`$content/${params.locale}/chapters/${params.slug}.md`);

  return {
    chapter,
    prev: prevDecimal ? manifest.chaptersByDecimal[prevDecimal] : null,
    next: nextDecimal ? manifest.chaptersByDecimal[nextDecimal] : null,
    content: mod.default
  };
}
