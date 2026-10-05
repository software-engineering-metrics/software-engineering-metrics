<script>
  import { page } from '$app/state';
  import { getManifest } from '#lib/manifests.js';
  import { localePrefix } from '#lib/locales.js';

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  let hasIntroduction = $derived(manifest.frontMatter.some((f) => f.slug === 'introduction'));
  let query = $state('');

  /** @param {import('#lib/manifest.json').default['chapters'][number]} chapter @param {string} q */
  function matches(chapter, q) {
    if (!q) return true;
    return chapter.title.toLowerCase().includes(q) || chapter.decimal.includes(q);
  }
</script>

<svelte:head>
  <title>Contents — Software Engineering Metrics</title>
  <meta
    name="description"
    content="The full contents: {manifest.totals.parts} parts, {manifest.totals.chapters} chapters."
  />
</svelte:head>

<div class="prose">
  <h1>Contents</h1>
  <p>
    Parts are whole numbers; chapters are decimals (chapter <strong>N.0</strong> introduces each
    part).{#if hasIntroduction} See also <a href="{prefix}/front-matter/introduction/">the introduction</a>.{/if}
  </p>
</div>

<input
  class="toc-search"
  type="search"
  placeholder="Search topics by title or number…"
  aria-label="Search topics"
  bind:value={query}
/>

{#each manifest.parts as part (part.number)}
  {@const q = query.trim().toLowerCase()}
  {@const visible = part.chapters.filter((c) => matches(c, q))}
  <section class="toc-part" hidden={visible.length === 0}>
    <h2 class="toc-part-heading"><span class="part-number">{part.number}</span> {part.title}</h2>
    <ul class="toc-chapter-list">
      {#each visible as chapter (chapter.slug)}
        <li>
          <a href="{prefix}/chapters/{chapter.slug}/"><span class="decimal">{chapter.decimal}</span> {chapter.title}</a>
        </li>
      {/each}
    </ul>
  </section>
{/each}
