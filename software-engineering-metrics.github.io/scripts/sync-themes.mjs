#!/usr/bin/env node
// Copies this site's two theme stylesheets from the pinned
// @lilydesignsystem/themes package into static/assets/themes/, so
// ThemePicker's themesUrl can serve them as plain static files (it fetches
// them at runtime via a <link>, so they must be on disk under static/, not
// just importable from node_modules). The copied files are committed — this
// script exists to regenerate them after a version bump. Never hand-edit
// files under static/assets/themes/; bump the dependency in package.json
// and re-run `pnpm run themes` instead.
import { existsSync, copyFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const packageDist = path.resolve(root, 'node_modules/@lilydesignsystem/themes/dist');
const targetThemes = path.resolve(root, 'static/assets/themes');

const THEMES = ['light', 'dark'];

if (!existsSync(packageDist)) {
  console.error(`@lilydesignsystem/themes is not installed: ${packageDist} not found.`);
  console.error('Run `pnpm install` first.');
  process.exit(1);
}

for (const theme of THEMES) {
  const from = path.join(packageDist, `${theme}.css`);
  const to = path.join(targetThemes, `${theme}.css`);
  if (!existsSync(from)) {
    console.error(`Missing theme in package: ${theme} (${from})`);
    process.exit(1);
  }
  copyFileSync(from, to);
  console.log(`Synced static/assets/themes/${theme}.css from @lilydesignsystem/themes`);
}
