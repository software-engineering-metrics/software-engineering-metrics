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
import da001 from './manifest/da-001.json';
import de001 from './manifest/de-001.json';
import es001 from './manifest/es-001.json';
import fr001 from './manifest/fr-001.json';
import hi001 from './manifest/hi-001.json';
import hiIn from './manifest/hi-in.json';
import id001 from './manifest/id-001.json';
import is001 from './manifest/is-001.json';
import isIs from './manifest/is-is.json';
import it001 from './manifest/it-001.json';
import ja001 from './manifest/ja-001.json';
import jaJp from './manifest/ja-jp.json';
import ko001 from './manifest/ko-001.json';
import koKr from './manifest/ko-kr.json';
import nl001 from './manifest/nl-001.json';
import nlNl from './manifest/nl-nl.json';
import pt001 from './manifest/pt-001.json';
import ru001 from './manifest/ru-001.json';
import sv001 from './manifest/sv-001.json';
import svSe from './manifest/sv-se.json';
import sw001 from './manifest/sw-001.json';
import swTz from './manifest/sw-tz.json';
import ur001 from './manifest/ur-001.json';
import vi001 from './manifest/vi-001.json';
import viVn from './manifest/vi-vn.json';
import zh001 from './manifest/zh-001.json';
import zhCn from './manifest/zh-cn.json';
import itIt from './manifest/it-it.json';
import tr001 from './manifest/tr-001.json';
import trTr from './manifest/tr-tr.json';
import th001 from './manifest/th-001.json';
import thTh from './manifest/th-th.json';
import idId from './manifest/id-id.json';
import zhTh from './manifest/zh-th.json';
import hiNp from './manifest/hi-np.json';
import cyAr from './manifest/cy-ar.json';
import deAt from './manifest/de-at.json';
import bg001 from './manifest/bg-001.json';
import bgBg from './manifest/bg-bg.json';
import cs001 from './manifest/cs-001.json';
import csCz from './manifest/cs-cz.json';
import pl001 from './manifest/pl-001.json';
import plPl from './manifest/pl-pl.json';
import ro001 from './manifest/ro-001.json';
import roRo from './manifest/ro-ro.json';
import uk001 from './manifest/uk-001.json';
import he001 from './manifest/he-001.json';
import frBe from './manifest/fr-be.json';
import frLu from './manifest/fr-lu.json';
import nlBe from './manifest/nl-be.json';
import fi001 from './manifest/fi-001.json';
import fiFi from './manifest/fi-fi.json';
import hu001 from './manifest/hu-001.json';
import huHu from './manifest/hu-hu.json';
import { DEFAULT_LOCALE } from './locales.js';

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
  'da-001': da001,
  'de-001': de001,
  'es-001': es001,
  'fr-001': fr001,
  'hi-001': hi001,
  'hi-in': hiIn,
  'id-001': id001,
  'is-001': is001,
  'is-is': isIs,
  'it-001': it001,
  'ja-001': ja001,
  'ja-jp': jaJp,
  'ko-001': ko001,
  'ko-kr': koKr,
  'nl-001': nl001,
  'nl-nl': nlNl,
  'pt-001': pt001,
  'ru-001': ru001,
  'sv-001': sv001,
  'sv-se': svSe,
  'sw-001': sw001,
  'sw-tz': swTz,
  'ur-001': ur001,
  'vi-001': vi001,
  'vi-vn': viVn,
  'zh-001': zh001,
  'zh-cn': zhCn,
  'it-it': itIt,
  'tr-001': tr001,
  'tr-tr': trTr,
  'th-001': th001,
  'th-th': thTh,
  'id-id': idId,
  'zh-th': zhTh,
  'hi-np': hiNp,
  'cy-ar': cyAr,
  'de-at': deAt,
  'bg-001': bg001,
  'bg-bg': bgBg,
  'cs-001': cs001,
  'cs-cz': csCz,
  'pl-001': pl001,
  'pl-pl': plPl,
  'ro-001': ro001,
  'ro-ro': roRo,
  'uk-001': uk001,
  'he-001': he001,
  'fr-be': frBe,
  'fr-lu': frLu,
  'nl-be': nlBe,
  'fi-001': fi001,
  'fi-fi': fiFi,
  'hu-001': hu001,
  'hu-hu': huHu
};

/**
 * @param {string | undefined | null} locale
 * @returns {Manifest}
 */
export function getManifest(locale) {
  return MANIFESTS[locale ?? DEFAULT_LOCALE] ?? MANIFESTS[DEFAULT_LOCALE];
}
