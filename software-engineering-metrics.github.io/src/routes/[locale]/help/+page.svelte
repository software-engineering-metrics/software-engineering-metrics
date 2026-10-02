<script>
  import { page } from '$app/state';
  import { localePrefix } from '#lib/locales.js';

  let prefix = $derived(localePrefix(page.params.locale));
</script>

<svelte:head>
  <title>Help — Software Engineering Metrics</title>
  <meta name="description" content="Where to ask questions, report an issue, or find out how to contribute to the book." />
</svelte:head>

<div class="prose">
  <h1>Help</h1>
  <p>
    Found a mistake, have a question, or want to suggest a chapter? Here is where to go.
  </p>
  <ul>
    <li>
      <a href="https://github.com/software-engineering-metrics/software-engineering-metrics/issues"
        >Report an issue or ask a question on GitHub</a
      >
    </li>
    <li>
      <a href="{prefix}/contributing/">Read the contributing guide</a> for how the book is written
      and how to propose a change.
    </li>
    <li>
      <a href="{prefix}/project/">Visit the project page</a> to see how the book and this site fit
      together.
    </li>
  </ul>
</div>
