<script>
  import { page } from '$app/state';
  import { getManifest } from '#lib/manifests.js';
  import { localePrefix } from '#lib/locales.js';

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  // Some locales (genuinely translated, not just a spelling variant) ship
  // only chapters/, with no front-matter/ section yet; fall back to the
  // first chapter so "Start reading" never links to a 404.
  let startReadingHref = $derived(
    manifest.frontMatter.some((f) => f.slug === 'what-are-software-engineering-metrics')
      ? `${prefix}/front-matter/what-are-software-engineering-metrics/`
      : `${prefix}/chapters/${manifest.chapters[0]?.slug}/`
  );
</script>

<svelte:head>
  <title>Software Engineering Metrics</title>
  <meta
    name="description"
    content="A book about measuring software engineering well: {manifest.totals.parts} parts, {manifest.totals.chapters} chapters spanning the Flow Framework, the SPACE framework, queueing theory, and DORA metrics, code quality, product and business outcomes, reliability and security, and the AI era."
  />
</svelte:head>

<section class="hero">
  <p class="hero-eyebrow">Free · open · specification-driven</p>
  <h1>Measure software engineering well.</h1>
  <p class="hero-tagline">
    A working book on choosing metrics that reflect real outcomes rather than activity: the Flow
    Framework, the SPACE framework, queueing theory, and DORA metrics, code and quality metrics,
    product and business outcomes, reliability and security, and how generative AI is reshaping
    what these numbers mean.
  </p>
  <div class="button-row">
    <a class="button button-primary" href={startReadingHref}>Start reading</a>
    <a class="button button-secondary" href="{prefix}/contents/">Contents</a>
    <a class="button button-secondary" href="{prefix}/examples/">Worked examples</a>
  </div>
</section>

<section class="section">
  <header class="section-heading">
    <p class="section-heading-eyebrow">Browse</p>
    <h2>The nine parts</h2>
  </header>
  <ul class="part-list">
    {#each manifest.parts as part (part.number)}
      {@const intro = part.chapters.find((c) => c.chapter === 0)}
      <li>
        <a href="{prefix}/chapters/{(intro ?? part.chapters[0]).slug}/">
          <span class="part-number">Part {part.number}</span>
          <span class="part-title">{part.title}</span>
          <span class="part-meta">
            {part.chapters.length} {part.chapters.length === 1 ? 'topic' : 'topics'}
          </span>
        </a>
      </li>
    {/each}
  </ul>
</section>

<section class="section prose" style="margin: 0 auto;">
  <header class="section-heading">
    <p class="section-heading-eyebrow">Cross-cutting theme</p>
    <h2>Goodhart's law, everywhere</h2>
  </header>
  <p>
    A measure that becomes a target stops being a good measure. Every metric family in this book
    ships with its gaming vector and its guardrail attached, not as an afterthought but as a
    condition of using the metric at all. Outcomes are weighted over output and activity
    throughout, and the shift to generative AI is treated as a reason to re-examine what these
    metrics mean, not just a new column on the dashboard.
  </p>
  <p style="text-align: center; margin-top: 2rem;">
    <a class="button button-secondary" href="{prefix}/contents/">See the full contents →</a>
  </p>
</section>

<section class="section prose" style="margin: 0 auto;" aria-label="About this site">
  <div class="callout">
    <p style="margin: 0;">
      This site is built with SvelteKit and the
      <a href="https://lilydesignsystem.com/">Lily Design System</a>. The book's content lives
      in the <a href="https://github.com/software-engineering-metrics/software-engineering-metrics"
        >software-engineering-metrics</a
      >
      content repository; see the <a href="{prefix}/project/">project page</a> for how the two fit
      together, and <a href="{prefix}/contributing/">contributing</a> for how to help.
    </p>
  </div>
</section>
