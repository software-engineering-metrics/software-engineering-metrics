<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { LOCALE_CODES, LOCALE_ALIASES, DEFAULT_LOCALE, localePrefix } from '#lib/locales.js';
  import { pickLocale } from '#lib/detect-locale.js';

  const fallbackHref = `${localePrefix(DEFAULT_LOCALE)}/`;

  onMount(() => {
    if (!browser) return;
    // /?<target> is a site search (spec/search); SearchGate shows the results.
    if (location.search) return;
    const locale = pickLocale(LOCALE_CODES, DEFAULT_LOCALE);
    // A -001 superset locale is reached through its short alias ("/en/"),
    // which renders the same content as "/en-001/".
    const alias = Object.keys(LOCALE_ALIASES).find((a) => LOCALE_ALIASES[a] === locale);
    goto(`${localePrefix(alias ?? locale)}/`, { replaceState: true });
  });
</script>

<svelte:head>
  <title>Software Engineering Metrics</title>
  <meta name="description" content="Redirecting to your language edition of the book." />
  <!--
    No-JS fallback only: without scripting, pickLocale() can never run, and
    without scripting SearchGate can never fetch or render search results
    either, so there is no query-string case worth preserving here. <noscript>
    content is inert whenever JS actually runs, so this cannot race the
    client-side redirect above or override a better language match with
    DEFAULT_LOCALE (see spec/locale-default/index.md).
  -->
  <noscript>
    <meta http-equiv="refresh" content="0; url={fallbackHref}" />
  </noscript>
</svelte:head>

<div class="prose">
  <p>
    Redirecting to the book… if nothing happens, 
    <a href={fallbackHref}>continue here</a>
    .
  </p>
</div>
