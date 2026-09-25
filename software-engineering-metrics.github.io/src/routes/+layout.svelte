<script>
  import { page } from '$app/state';
  import Sidebar from '$lib/Sidebar.svelte';
  import LocalePicker from '$lib/LocalePicker.svelte';
  import { localePrefix } from '$lib/locales.js';
  import { ui } from '$lib/i18n.js';

  let { children } = $props();

  let prefix = $derived(localePrefix(page.params.locale));
  let t = $derived(ui(page.params.locale));

  let navLinks = $derived([
    { href: `${prefix}/`, label: t.nav.home },
    { href: `${prefix}/front-matter/what-are-software-engineering-metrics/`, label: t.nav.startHere },
    { href: `${prefix}/table-of-contents/`, label: t.nav.tableOfContents },
    { href: `${prefix}/examples/`, label: t.nav.examples },
    { href: `${prefix}/contributing/`, label: t.nav.contributing },
    { href: `${prefix}/project/`, label: t.nav.project }
  ]);

  let pathname = $derived(page.url.pathname);
  let pathAfterLocale = $derived(prefix && pathname.startsWith(prefix) ? pathname.slice(prefix.length) || '/' : pathname);
  let showSidebar = $derived(pathAfterLocale.startsWith('/chapters/') || pathAfterLocale.startsWith('/front-matter/'));
  let currentSlug = $derived(showSidebar ? (pathAfterLocale.split('/').filter(Boolean).pop() ?? null) : null);

  /** @param {string} href */
  function isCurrent(href) {
    if (href === `${prefix}/`) return pathname === href;
    return pathname === href;
  }
</script>

<a class="skip-link" href="#main">{t.skipToContent}</a>

<header class="site-header">
  <div class="site-header-inner">
    <a class="site-brand" href="{prefix}/" aria-label={t.brandAria}>
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span>{t.brand}</span>
    </a>
    <nav class="site-nav" aria-label={t.nav.ariaLabel}>
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
      {/each}
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">{t.nav.github}</a>
    </nav>
    <LocalePicker />
  </div>
</header>

<main id="main" class="site-main" class:has-sidebar={showSidebar}>
  {#if showSidebar}
    <Sidebar {currentSlug} />
  {/if}
  <div class="site-content">
    {@render children()}
  </div>
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>
      {t.footer.about.split('{org}')[0]}
      <a href="https://github.com/software-engineering-metrics">{t.footer.orgLinkLabel}</a>{t.footer.about.split('{org}')[1]}
    </p>
    <div class="site-footer-links">
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">{t.footer.contentSourceLabel}</a>
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics.github.io">{t.footer.siteSourceLabel}</a>
      <a href="{prefix}/table-of-contents/">{t.footer.tableOfContentsLabel}</a>
      <a href="{prefix}/contributing/">{t.footer.contributingLabel}</a>
    </div>
  </div>
</footer>
