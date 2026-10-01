// The bare domain root has no locale segment of its own (every real page
// lives under src/routes/[locale]/), so prerendering still needs an
// index.html here or GitHub Pages 404s on "/" itself. +page.svelte performs
// the actual client-side redirect (navigator.languages / navigator.language
// is only available in the browser); this file just opts this route into
// prerendering so that index.html exists at all.
export const prerender = true;
