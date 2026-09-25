<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';
  import Sidebar from '$lib/Sidebar.svelte';
  import { LOCALE_CODES, LOCALE_LABELS, DEFAULT_LOCALE, localePrefix } from '$lib/locales.js';
  import { ui } from '$lib/i18n.js';

  let { children } = $props();

  let prefix = $derived(localePrefix(page.params.locale));
  let t = $derived(ui(page.params.locale));
  let currentLocale = $derived(page.params.locale ?? DEFAULT_LOCALE);

  // The picker bar's LocalePicker only sets `lang`/`dir` on <html> by
  // default; this site's locales are separate prerendered routes, so
  // picking one must navigate there. `value={currentLocale}` keeps the
  // picker's own display in sync with the URL on every navigation
  // (including the back button, or a plain <a> to a locale-prefixed page),
  // and onChange navigates when the *picker* is what changed it.
  /** @param {string} nextLocale */
  function onLocaleChange(nextLocale) {
    if (nextLocale === currentLocale) return;
    const currentPrefix = localePrefix(currentLocale);
    const remainder = currentPrefix && page.url.pathname.startsWith(currentPrefix)
      ? page.url.pathname.slice(currentPrefix.length) || '/'
      : page.url.pathname;
    goto(`${localePrefix(nextLocale)}${remainder}`);
  }

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
    <PickerBar
      labels={{
        theme: t.pickerBar.theme,
        locale: t.pickerBar.locale,
        textSize: t.pickerBar.textSize,
        share: t.pickerBar.share
      }}
      themesUrl="/assets/themes/"
      themes={['light', 'dark']}
      themeProps={{ storageKey: 'lily-theme', detectFromSystem: true }}
      locales={LOCALE_CODES}
      localeProps={{ value: currentLocale, onChange: onLocaleChange, localeLabels: LOCALE_LABELS }}
      textSizeProps={{ storageKey: 'lily-text-size', defaultValue: 'normal' }}
      shareTargets={[
        { id: 'email', label: 'Email', href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}` },
        { id: 'mastodon', label: 'Mastodon', href: (url, title) => `https://mastodon.social/share?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}` }
      ]}
      shareProps={{ url: `https://software-engineering-metrics.github.io${page.url.pathname}`, copyLabel: t.pickerBar.copyLink, copiedLabel: t.pickerBar.copied }}
    />
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
