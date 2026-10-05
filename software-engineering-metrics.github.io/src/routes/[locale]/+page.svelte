<script>
  import { page } from '$app/state';
  import { getManifest } from '#lib/manifests.js';
  import { localePrefix } from '#lib/locales.js';
  import { ui } from '#lib/i18n.js';

  let prefix = $derived(localePrefix(page.params.locale));
  let manifest = $derived(getManifest(page.params.locale));
  let t = $derived(ui(page.params.locale));
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

<section class="section prose" style="margin: 0 auto;" aria-labelledby="home-contents">
  <h2 id="home-contents">{t.nav.contents}</h2>
  <ul class="home-contents">
    {#each manifest.parts as part (part.number)}
      <li>
        {part.number} {part.title}
        <ul>
          {#each part.chapters as chapter (chapter.slug)}
            <li>
              <a href="{prefix}/chapters/{chapter.slug}/">{chapter.decimal} {chapter.title}</a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
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
