#!/usr/bin/env node
// Copies the book's Markdown source from ../locales at the repository root
// into src/content/<locale>/ here, one subdirectory per published locale
// (see ../spec/locales.md). The copied files are committed — this script
// exists to regenerate them after the source changes. Never hand-edit files
// under src/content/; edit ../locales/en-gb-oxendict/ and re-run
// `pnpm run content` instead.
import { existsSync, mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { LOCALE_CODES } from './locales.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const sourceLocales = path.resolve(root, '../locales');
const targetContent = path.resolve(root, 'src/content');

const SECTIONS = ['chapters', 'front-matter', 'examples', 'contributing', 'project'];

// On-disk section directory names are translated per locale (see
// ../spec/section-names.json). The site keeps the canonical English names in
// src/content/ and in its URLs, so this script reads each locale's real
// directory and copies it to the canonical one, rewriting relative Markdown
// links to the localized names (e.g. "../temas/01-00-x.md") back to the
// canonical ones ("../chapters/01-00-x.md") so the remark link plugins and
// the manifest keep working unchanged.
const sectionNames = JSON.parse(
  readFileSync(path.resolve(root, '../spec/section-names.json'), 'utf-8')
);
/** @param {string} locale @param {string} section */
const dirName = (locale, section) =>
  sectionNames.locales[locale]?.[section] ?? sectionNames.default[section];
/** @param {string} text @param {string} locale */
function canonicalizeLinks(text, locale) {
  let out = text;
  for (const section of SECTIONS) {
    const local = dirName(locale, section);
    if (local === section) continue;
    out = out.replaceAll(`](${local}/`, `](${section}/`).replaceAll(`](../${local}/`, `](../${section}/`);
  }
  return out;
}

// Non-topic sections (front-matter, examples, contributing, project) keep
// translated file names on disk, but the site hardcodes a few canonical
// English slugs (e.g. front-matter/introduction), so each translated file is
// copied to the English file name that carries the same .locale-peer-id.
const REFERENCE_LOCALE = 'en-gb-oxendict';
/** @param {string} dir */
function peerIds(dir) {
  /** @type {Map<string, string>} */
  const byId = new Map();
  if (!existsSync(dir)) return byId;
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.locale-peer-id')) continue;
    byId.set(readFileSync(path.join(dir, f), 'utf-8').trim(), f.replace(/\.locale-peer-id$/, '.md'));
  }
  return byId;
}
/** Map of on-disk file name to canonical file name for one locale section. @param {string} locale @param {string} section */
function canonicalNames(locale, section) {
  /** @type {Map<string, string>} */
  const out = new Map();
  if (section === 'chapters' || locale === REFERENCE_LOCALE) return out;
  const reference = peerIds(path.join(sourceLocales, REFERENCE_LOCALE, dirName(REFERENCE_LOCALE, section)));
  const local = peerIds(path.join(sourceLocales, locale, dirName(locale, section)));
  for (const [id, file] of local) {
    const canonical = reference.get(id);
    if (canonical && canonical !== file) out.set(file, canonical);
  }
  return out;
}
/** @param {string} text @param {string} locale @param {string} section */
function canonicalizeFileLinks(text, locale, section) {
  let out = text;
  for (const s of SECTIONS) {
    if (s === 'chapters') continue;
    for (const [file, canonical] of canonicalNames(locale, s)) {
      const stem = file.replace(/\.md$/, '');
      const canon = canonical.replace(/\.md$/, '');
      const prefix = s === section ? '' : `../${s}/`;
      out = out.replaceAll(`](${prefix}${stem}.md`, `](${prefix}${canon}.md`).replaceAll(`](${prefix}${stem}.md#`, `](${prefix}${canon}.md#`);
    }
  }
  return out;
}

if (!existsSync(sourceLocales)) {
  console.error(`Source locales directory not found: ${sourceLocales}`);
  console.error('Expected a locales/ directory at the repository root.');
  process.exit(1);
}

for (const locale of LOCALE_CODES) {
  const sourceLocale = path.join(sourceLocales, locale);
  if (!existsSync(sourceLocale)) {
    console.error(`Missing locale in source repo: ${locale} (${sourceLocale})`);
    process.exit(1);
  }
  for (const section of SECTIONS) {
    const from = path.join(sourceLocale, dirName(locale, section));
    const to = path.join(targetContent, locale, section);
    if (!existsSync(from)) {
      console.warn(`Skipping missing source section: ${locale}/${section}`);
      continue;
    }
    rmSync(to, { recursive: true, force: true });
    mkdirSync(to, { recursive: true });
    const files = readdirSync(from).filter((f) => f.endsWith('.md'));
    const names = canonicalNames(locale, section);
    for (const file of files) {
      const text = readFileSync(path.join(from, file), 'utf-8');
      writeFileSync(
        path.join(to, names.get(file) ?? file),
        canonicalizeFileLinks(canonicalizeLinks(text, locale), locale, section)
      );
    }
    console.log(`Synced ${files.length} file(s) into src/content/${locale}/${section}/`);
  }
}

console.log('Content sync complete. Run `pnpm run manifest` (or `pnpm run content` next time) to rebuild the navigation manifests.');
