<script>
  import { page } from '$app/state';
  import { getManifest } from '$lib/manifests.js';
  import { localePrefix } from '$lib/locales.js';
  import { ui } from '$lib/i18n.js';

  let { currentSlug = null } = $props();

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  let t = $derived(ui(page.params.locale));
  let query = $state('');

  /** @param {import('$lib/manifest.json').default['chapters'][number]} chapter @param {string} q */
  function matches(chapter, q) {
    if (!q) return true;
    return chapter.title.toLowerCase().includes(q) || chapter.decimal.includes(q);
  }
</script>

<nav class="sidebar" aria-label={t.sidebar.ariaLabel}>
  <input
    class="sidebar-search"
    type="search"
    placeholder={t.sidebar.filterPlaceholder}
    aria-label={t.sidebar.filterAriaLabel}
    bind:value={query}
  />
  {#each manifest.parts as part (part.number)}
    {@const q = query.trim().toLowerCase()}
    {@const hasCurrent = part.chapters.some((c) => c.slug === currentSlug)}
    {@const visible = part.chapters.filter((c) => matches(c, q))}
    {#if visible.length}
      <details class="sidebar-part" open={hasCurrent || q !== ''} data-current={hasCurrent}>
        <summary><span class="part-number">{part.number}</span> {part.title}</summary>
        <ul class="sidebar-chapter-list">
          {#each visible as chapter (chapter.slug)}
            <li>
              <a
                href="{prefix}/chapters/{chapter.slug}/"
                aria-current={chapter.slug === currentSlug ? 'page' : undefined}
              >
                <span class="decimal">{chapter.decimal}</span>{chapter.title}
              </a>
            </li>
          {/each}
        </ul>
      </details>
    {/if}
  {/each}
</nav>
