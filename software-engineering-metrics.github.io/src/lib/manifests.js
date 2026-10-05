// Static lookup across all four locale manifests. Static imports (not a
// runtime dynamic import) so adapter-static can prerender every locale
// without a server to resolve the lookup at request time.
import enUs from './manifest.json';
import enGbOxendict from './manifest/en-gb-oxendict.json';
import enGb from './manifest/en-gb.json';
import en001 from './manifest/en-001.json';
import ar001 from './manifest/ar-001.json';
import bn001 from './manifest/bn-001.json';
import cy001 from './manifest/cy-001.json';
import cyGb from './manifest/cy-gb.json';
import es001 from './manifest/es-001.json';
import fr001 from './manifest/fr-001.json';
import hi001 from './manifest/hi-001.json';
import ru001 from './manifest/ru-001.json';
import zh001 from './manifest/zh-001.json';
import zhCn from './manifest/zh-cn.json';
import { DEFAULT_LOCALE, canonicalLocale } from './locales.js';

/**
 * @typedef {object} Chapter
 * @property {number} part
 * @property {number} chapter
 * @property {string} decimal
 * @property {string} slug
 * @property {string} title
 * @property {string} heading
 * @property {string} file
 */
/**
 * @typedef {object} SimpleEntry
 * @property {string} slug
 * @property {string} title
 * @property {string} file
 */
/**
 * @typedef {object} Manifest
 * @property {{ number: number, title: string, chapters: Chapter[] }[]} parts
 * @property {Chapter[]} chapters
 * @property {Record<string, Chapter>} chaptersByDecimal
 * @property {string[]} order
 * @property {SimpleEntry[]} frontMatter
 * @property {SimpleEntry[]} examples
 * @property {SimpleEntry[]} contributing
 * @property {SimpleEntry[]} project
 * @property {{ parts: number, chapters: number }} totals
 */

/** @type {Record<string, Manifest>} */
const MANIFESTS = {
  'en-us': enUs,
  'en-gb-oxendict': enGbOxendict,
  'en-gb': enGb,
  'en-001': en001,
  'ar-001': ar001,
  'bn-001': bn001,
  'cy-001': cy001,
  'cy-gb': cyGb,
  'es-001': es001,
  'fr-001': fr001,
  'hi-001': hi001,
  'ru-001': ru001,
  'zh-001': zh001,
  'zh-cn': zhCn
};

/**
 * @param {string | undefined | null} locale
 * @returns {Manifest}
 */
export function getManifest(locale) {
  const resolved = canonicalLocale(locale) ?? DEFAULT_LOCALE;
  return MANIFESTS[resolved] ?? MANIFESTS[DEFAULT_LOCALE];
}
