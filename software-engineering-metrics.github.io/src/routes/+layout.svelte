<script>
  import SearchGate from '#lib/SearchGate.svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import PickerBar from '@lilydesignsystem/svelte-picker-bar';
  import Sidebar from '#lib/Sidebar.svelte';
  import { LOCALE_CODES, LOCALE_LABELS, DEFAULT_LOCALE, localePrefix, canonicalLocale } from '#lib/locales.js';
  import { ui } from '#lib/i18n.js';

  let { children } = $props();

  // page.params.locale is unset only on the unprefixed "/" redirect page
  // (src/routes/+page.svelte) — every other page lives under
  // src/routes/[locale]/ and always has it. Falling back to DEFAULT_LOCALE
  // here keeps this header's own nav links locale-prefixed (and therefore
  // real, prerenderable routes) even on that one page.
  let currentLocale = $derived(page.params.locale ?? DEFAULT_LOCALE);
  let prefix = $derived(localePrefix(currentLocale));
  let t = $derived(ui(page.params.locale));

  // currentLocale may be a two-letter alias ("en"), which LOCALE_CODES
  // doesn't list; the picker's own selection display needs the canonical
  // code to match an entry, while every link above keeps using the alias.
  let pickerLocale = $derived(canonicalLocale(currentLocale));

  // The picker bar's LocalePicker only sets `lang`/`dir` on <html> by
  // default; this site's locales are separate prerendered routes, so
  // picking one must navigate there. `value={currentLocale}` keeps the
  // picker's own display in sync with the URL on every navigation
  // (including the back button, or a plain <a> to a locale-prefixed page),
  // and onChange navigates when the *picker* is what changed it.
  /** @param {string} nextLocale */
  function onLocaleChange(nextLocale) {
    // Compare canonical codes: the picker reports "en-001" while the URL may
    // legitimately be the alias "/en/", which must not bounce to "/en-001/".
    if (nextLocale === pickerLocale) return;
    // A search (/?<target>) is on the root page: the picker's automatic
    // restore of the stored locale must not navigate away and drop it.
    if (page.url.pathname === '/' && page.url.search) return;
    const currentPrefix = localePrefix(currentLocale);
    const remainder = currentPrefix && page.url.pathname.startsWith(currentPrefix)
      ? page.url.pathname.slice(currentPrefix.length) || '/'
      : page.url.pathname;
    goto(`${localePrefix(nextLocale)}${remainder}`);
  }

  let navLinks = $derived([
    { href: `${prefix}/`, label: t.nav.home },
    { href: `${prefix}/contents/`, label: t.nav.contents },
    { href: `${prefix}/examples/`, label: t.nav.examples },
    { href: `${prefix}/contributing/`, label: t.nav.contributing },
    { href: `${prefix}/project/`, label: t.nav.project },
    { href: `${prefix}/help/`, label: t.nav.help }
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
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">{t.nav.github}</a>
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>{link.label}</a>
      {/each}
    </nav>
    <PickerBar
      labels={{
        search: t.pickerBar.search,
        searchInput: t.pickerBar.searchInput,
        searchSubmit: t.pickerBar.searchSubmit,
        theme: t.pickerBar.theme,
        locale: t.pickerBar.locale,
        textSize: t.pickerBar.textSize,
        share: t.pickerBar.share
      }}
      searchProps={{ navigate: goto }}
      themesUrl="/assets/themes/"
      themes={['light', 'dark']}
      themeProps={{ storageKey: 'lily-theme', detectFromSystem: true }}
      locales={LOCALE_CODES}
      localeProps={{ value: pickerLocale, onChange: onLocaleChange, localeLabels: LOCALE_LABELS }}
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
    <SearchGate {children} />
  </div>
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>
      {t.footer.byline.split('{author}')[0]}
      <a href="https://linkedin.com/in/joelparkerhenderson">{t.footer.authorLabel}</a>{t.footer.byline.split('{author}')[1]}
    </p>
    <p>
      {t.footer.about.split('{org}')[0]}
      <a href="https://github.com/software-engineering-metrics">{t.footer.orgLinkLabel}</a>{t.footer.about.split('{org}')[1]}
    </p>
    <div class="site-footer-links">
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics">{t.footer.contentSourceLabel}</a>
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics.github.io">{t.footer.siteSourceLabel}</a>
      <a href="{prefix}/contents/">{t.footer.contentsLabel}</a>
      <a href="{prefix}/contributing/">{t.footer.contributingLabel}</a>
    </div>
  </div>
</footer>
