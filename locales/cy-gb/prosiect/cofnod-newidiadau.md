# Cofnod newidiadau

Newidiadau nodedig i'r llyfr a'i offer. Mae'r cofnodion diweddaraf ar y brig.
Mae dyddiadau'n defnyddio ISO 8601 (YYYY-MM-DD).

## [Unreleased]

### Changed

- Iseldireg (`nl-nl`): cyfieithwyd teitlau a slugiau Saesneg gweddilliol pynciau 9.0, 9.3 a 9.4
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Cymraeg (`cy-001`, `cy-gb`): alinio terminoleg â TermCymru: `risg` (risk, yn lle
  `perygl`, gyda chytundeb cenedl), `cyfnewidiad` (trade-off), `dangosydd rhagfynegi` a
  `dangosydd ôl-fynegi` (dangosydd arweiniol ac ôl-fynegi, yn lle `hwyrfrydig`), `cynhwysedd`
  (capasiti), `dosraniad` (dosbarthiad), `cydberthynas` (cydberthyniad), `allbwn` ar gyfer allbwn ym
  mhwnc 1.3, a `cyfradd gadael staff` (colli staff). Ailenwyd pedwar slug pwnc i gyd-fynd.
- Gwefan: uwchraddio `@lilydesignsystem/svelte-picker-bar` i 0.2.0, sy'n ychwanegu dewisydd
  chwilio at far y pennawd; mae'n cyflwyno i'r chwiliad gwefan presennol `/?<query>`.
- Ychwanegwyd `scripts/generate-sitemap.mjs`, a redir ar ddiwedd `pnpm build`, ac sy'n
  ysgrifennu `sitemap.xml` o'r tudalennau a ragrendrwyd (URLau locale canonaidd yn unig,
  dim dyblygiadau alias dwy lythyren) fel bod y llinell `Sitemap:` yn `robots.txt`
  yn datrys.
- Mae `AGENTS.md` bellach yn fynegai byr; symudodd manylion i `AGENTS/layout.md`, `style.md`,
  `locales.md`, a `workflow.md`.
- Ysgubiad dogfennaeth: adnewyddwyd `AGENTS.md`, `index.md`, testun locale README a gynhyrchir,
  `spec/index.md`, `spec/locales.md`, a `AGENTS.md` a `README.md` y wefan ar gyfer 27
  locale, enwau cyfeiriaduron adran fesul locale, a'r offer newydd; ychwanegwyd `CLAUDE.md` (pwyntydd i
  `AGENTS.md`); cywirwyd y llwybrau `docs/` hen yn y ddau sgil asiant a gwnaed
  `skills/` yn gopi canonaidd o `.claude/skills/` (gwiriwyd gan y profion).
- Ychwanegwyd `llms.txt` a `llms.json` (mynegai asiant AI o bob locale a phwnc a
  wasanaethir) at `static/` y wefan, a gynhyrchir gan `tools/gen_llms.py`
  (`just llms`) ac a wiriwyd gan y profion.
- Hafan y wefan: mae rhestr deils "naw rhan" bellach yn rhestr nythedig "Cynnwys" o'r holl
  rannau a phynciau, a dilëwyd yr adran "Deddf Goodhart, ym mhobman".
- Ailfformiwlwyd "chapter" yn "topic" drwy ryddiaith y llyfr ym mhob
  locale (er enghraifft "pwnc 2.1", "Pynciau yn y rhan hon"), gan ddefnyddio gair
  pob iaith ei hun am bwnc (`tema`, `sujet`, `Thema`, `тема`, `主題`,
  ac yn y blaen), ac yn y fanyleb, testun a gynhyrchir gan yr offer, a llinynnau
  rhyngwyneb y wefan. Mae enwau ffeiliau, URLau a'r allweddi adran yn ddigyfnewid.
- Cyfieithwyd pob enw cyfeiriadur adran o dan `locales/`: mae `chapters/` bellach
  yn `topics/` (a'i gyfieithiad ym mhob locale arall, e.e. `temas/`,
  `sujets/`, `themen/`), ac mae `examples/` `es-001` yn `ejemplos/`. Mae'r enwau
  yn byw yn `spec/section-names.json`; mae'r offer, y profion, a chysoni cynnwys y wefan
  yn eu darllen oddi yno, ac mae URLau'r wefan yn ddigyfnewid.

### Changed

- Diwygiwyd y locales Cymraeg (`cy-001`, `cy-gb`, a gedwir yn union yr un fath) yn erbyn rhestr
  derminoleg TermCymru Llywodraeth Cymru: `llesiant` ar gyfer llesiant,
  `cynhyrchiant` ar gyfer cynhyrchiant, `gwendid`/`gwendidau` ar gyfer gwendid,
  `llywodraethiant` ar gyfer llywodraethiant, `cydberthynas` ar gyfer cydberthyniad,
  `ôl-groniad` ar gyfer backlog (a adawyd yn Saesneg yn flaenorol), `cost a budd` ar gyfer
  cost-budd, a `deallusrwydd artiffisial (AI)` wrth grybwyll AI gyntaf
  ym mhob pwnc.

### Added

- Ychwanegwyd Almaeneg (`de-001`) fel y 26ain locale a gyfieithwyd yn gyflawn: pob un o'r 63
  pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un cynnwys â
  `de-de`. Cysylltwyd â'r wefan a'i gwasanaethu ar `/de-001/` (alias `/de/`).
- Ychwanegwyd Portiwgaleg (`pt-001`) fel y 25ain locale a gyfieithwyd yn gyflawn: pob un o'r 63
  pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un cynnwys â
  `pt-pt`. Cysylltwyd â'r wefan a'i gwasanaethu ar `/pt-001/` (alias `/pt/`).
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Wrdw (`ur-001`, de-i-chwith), y 24ain locale a gyfieithwyd yn gyflawn, gyda
  ffeiliau ochr `.locale-peer-id` cyfatebol. Cyfieithwyd pob pwnc yn uniongyrchol
  o'r ffynhonnell Saesneg, mae'r mynegai (pwnc 9.7) yn ailfapio pob cyswllt mewnol
  i'w enw ffeil Wrdw, a'r cyfeiriadur adran yw `موضوعات`. Cysylltwyd â'r wefan a'i
  gwasanaethu ar `/ur-001/` (alias `/ur/`).
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Indoneseg (`id-001`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol. Nid oedd
  locale Indoneseg blaenorol i adeiladu arno, felly cyfieithwyd pob pwnc
  yn uniongyrchol o'r ffynhonnell Saesneg, ac mae'r mynegai (pwnc 9.7) yn ailfapio pob
  cyswllt mewnol i'w enw ffeil Indoneseg. Cysylltwyd â'r wefan a'i gwasanaethu ar
  `/id-001/` (alias `/id/`).
- Ychwanegwyd Rwsieg (`ru-001`) a Tsieineeg (`zh-001`) fel y 21ain a'r 22ain
  locale a gyfieithwyd yn gyflawn: pob un o'r 63 pwnc i bob un, gyda ffeiliau ochr
  `.locale-peer-id` cyfatebol, yn union yr un cynnwys â `ru-ru` a `zh-cn`.
  Cysylltwyd â'r wefan a'u gwasanaethu ar `/ru-001/` a `/zh-001/` (aliasau
  `/ru/` a `/zh/`).
- Ychwanegwyd Ffrangeg (`fr-001`) fel yr 20fed locale a gyfieithwyd yn gyflawn: pob un o'r 63
  pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un cynnwys â
  `fr-fr`. Cysylltwyd â'r wefan a'i gwasanaethu ar `/fr-001/` (alias `/fr/`).
- Ychwanegwyd Bengaleg (`bn-001`) fel y 19eg locale a gyfieithwyd yn gyflawn: pob un o'r 63
  pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un cynnwys â
  `bn-bd`. Cysylltwyd â'r wefan a'i gwasanaethu ar `/bn-001/` (alias `/bn/`).
- Ychwanegwyd Arabeg (`ar-001`) fel y 18fed locale a gyfieithwyd yn gyflawn: pob un o'r 63
  pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un cynnwys â
  `ar-eg`. Cysylltwyd â'r wefan a'i gwasanaethu ar `/ar-001/` (alias `/ar/`).
- Ychwanegwyd Cymraeg, Prydain Fawr (`cy-gb`) fel y 17eg locale a gyfieithwyd yn gyflawn:
  pob un o'r 63 pwnc gyda ffeiliau ochr `.locale-peer-id` cyfatebol, yn union yr un
  cynnwys â `cy-001` (yr un berthynas sydd gan `hi-id` â `hi-001`).
  Cysylltwyd â `SERVED_LOCALE_CODES` y wefan a'i gwasanaethu ar `/cy-gb/`.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Iseldireg, Yr Iseldiroedd (`nl-nl`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Nid oedd locale Iseldireg blaenorol i adeiladu arno, felly
  cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell Saesneg. Mae'r mynegai
  (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw ffeil Iseldireg,
  gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr`, a `sv-se`. Heb ei gysylltu
  â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Swedeg, Sweden (`sv-se`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Nid oedd locale Swedeg blaenorol i adeiladu arno, felly
  cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell Saesneg. Mae'r mynegai
  (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw ffeil Swedeg,
  gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, a `fr-fr`. Heb ei gysylltu â'r
  wefan eto.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Ffrangeg, Ffrainc (`fr-fr`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Nid oedd locale Ffrangeg blaenorol i adeiladu arno, felly
  cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell Saesneg. Mae'r mynegai
  (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw ffeil Ffrangeg,
  gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, a `ru-ru`. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Rwsieg, Rwsia (`ru-ru`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Nid oedd locale Rwsieg blaenorol i adeiladu arno, felly
  cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell Saesneg. Mae'r mynegai
  (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw ffeil Rwsieg,
  gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, a `ja-jp`. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Japaneeg, Japan (`ja-jp`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Nid oedd locale Japaneeg blaenorol i adeiladu arno, felly
  cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell Saesneg. Mae'r mynegai
  (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw ffeil Japaneeg,
  gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, a `pt-pt`. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn, o'r dechrau, o bob un o'r 63 pwnc i
  Portiwgaleg, Portiwgal (`pt-pt`), gyda ffeiliau ochr `.locale-peer-id`
  cyfatebol ac `just test` yn pasio. Nid oedd locale Portiwgaleg blaenorol i
  adeiladu arno, felly cyfieithwyd pob pwnc yn uniongyrchol o'r ffynhonnell
  Saesneg. Mae'r mynegai (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol i'w enw
  ffeil Portiwgaleg, gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg`, `bn-bd`,
  `ko-kr`, ac `es-es`. Heb ei gysylltu â'r wefan eto.
- Ychwanegwyd Sbaeneg, Sbaen (`es-es`) fel locale a gyfieithwyd yn gyflawn, pob un o'r 63
  pwnc, gan ddechrau o gopi o'r cyfieithiad Sbaeneg presennol (`es-001`)
  (a ganfuwyd wrth archwilio eisoes yn niwtral yn ramadegol,
  gyda geirfa'n dueddol o fod yn Sbaenaidd yn bennaf) ac yna cymhwyso
  pas terminoleg wedi'i dargedu ar gyfer y defnyddiau lleiafrifol sy'n weddill, yn
  bennaf "incidente" i "incidencia" ar gyfer parth metrigau digwyddiadau'r llyfr hwn,
  gyda chywiriadau cytundeb cenedl cyfatebol drwyddi draw. Heb ei gysylltu
  â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn o bob un o'r 63 pwnc i Gorëeg, Corea
  (`ko-kr`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac `just test` yn
  pasio. Mae'r mynegai (pwnc 9.7) yn ailfapio pob cyswllt pwnc mewnol
  i'w enw ffeil Corëeg, gan ddilyn y dull a ddefnyddiwyd ar gyfer `ar-eg` a
  `bn-bd`. Heb ei gysylltu â'r wefan eto.
- Ychwanegwyd Hindi, India (`hi-id`) fel locale a gyfieithwyd yn gyflawn, pob un o'r 63
  pwnc, trwy gopïo'r cyfieithiad Hindi presennol (`hi-001`) air am air
  o dan y cod locale sydd wedi'i dagio â gwlad, gan nad oes gan Hindi safonol
  amrywiad penodol i India i'w gyfieithu â llaw ar wahân. Heb ei gysylltu
  â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn o bob un o'r 63 pwnc i Bengaleg,
  Bangladesh (`bn-bd`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac
  `just test` yn pasio. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn o bob un o'r 63 pwnc i Arabeg, yr Aifft
  (`ar-eg`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac `just test`
  yn pasio. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiad llaw llawn o bob un o'r 63 pwnc i Almaeneg, yr Almaen
  (`de-de`), gyda ffeiliau ochr `.locale-peer-id` cyfatebol ac `just test`
  yn pasio. Heb ei gysylltu â'r wefan eto.
- Cwblhawyd cyfieithiadau llaw llawn o bob un o'r 63 pwnc i dair locale:
  Cymraeg (`cy-001`), Tsieineeg (`zh-cn`), a Hindi (`hi-001`), pob un gyda
  ffeiliau ochr `.locale-peer-id` cyfatebol ac `just test` yn pasio.
- Ychwanegwyd dwy locale gyfieithedig arfaethedig arall, Cymraeg - Prydain Fawr
  (`cy-gb`) a Tsieineeg (`zh-001`), at
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` a
  `spec/locales.md` (tair locale ar ddeg arfaethedig bellach, i fyny o un ar ddeg), a
  datrys endonym `zh-cn` a oedd heb ei benderfynu o'r blaen yn 中文. Cafodd `LOCALE_LABELS`
  y wefan gofnodion cyfatebol (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Seilwaith yn unig o hyd:
  nid oes gan yr un o'r locales hyn gyfeiriadur `locales/<code>/` nac unrhyw
  gynnwys wedi'i gyfieithu eto.
- Cyhoeddwyd y llyfr mewn pedair locale o dan `locales/`: `en-gb-oxendict`
  (Saesneg Prydain, sillafu Rhydychen; y ffynhonnell a ysgrifennir â llaw), `en-001`
  (Saesneg rhyngwladol), `en-gb` (Saesneg Prydain prif ffrwd), ac `en-us`
  (Saesneg America). Deillir `en-001`, `en-gb`, ac `en-us` yn fecanyddol
  o `en-gb-oxendict` gan y `tools/localize.py` newydd; gweler
  `spec/locales.md`. Nid yw `docs/` yn bodoli mwyach; mae pob cyfeiriad ato ar draws
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py`, a
  `tools/stats.py` bellach yn pwyntio at `locales/<locale>/`.
- Ychwanegwyd dau sgil Claude Code, `software-engineering-metrics-skill` (ar gyfer darllenwyr
  sy'n cymhwyso arweiniad y llyfr i'w tîm eu hunain) a
  `software-engineering-metrics-maintainer-skill` (ar gyfer cyfranwyr sy'n ychwanegu
  neu'n golygu pynciau), o dan `skills/` ac wedi'u drych yn `.claude/skills/`.
- Symudwyd ffynhonnell y wefan gyhoeddedig i'r storfa hon fel
  `software-engineering-metrics.github.io/`, storfa ar wahân yn flaenorol.
  Mae bellach yn darllen `locales/` yn uniongyrchol o wraidd y storfa yn hytrach nag o
  gopi cyfagos. Mae `.github/workflows/deploy.yml` y gwraidd yn gwirio bod y wefan
  yn dal i adeiladu ar bob gwthiad i `main`, yna'n anfon `repository_dispatch` i
  storfa `software-engineering-metrics.github.io` (a gedwir fel plisgyn defnyddio
  tenau, gan mai dim ond o storfa sydd â'r union enw hwnnw y bydd GitHub Pages yn
  gwasanaethu'r parth noeth hwnnw), sy'n tynnu'r monorepo hwn, yn adeiladu'r
  wefan, ac yn ei defnyddio.
- Ychwanegwyd y seilwaith ar gyfer locales a gyfieithwyd (nid yn unig a ddeilliwyd o sillafu),
  yn ôl yr is-fanyleb newydd `spec/locales-for-global-sharing-with-svelte/`:
  mae `tools/gen_locale_peer_ids.py` yn neilltuo i bob ffeil gynnwys ffeil ochr
  `.locale-peer-id`, yn union yr un fath ar draws locales, y gall locale gyfieithedig
  yn y dyfodol (gyda'i slugiau llythyren frodorol ei hun) ei defnyddio i ddatrys
  "y dudalen hon, yn locale X" yn lle paru ar slug; mae `tests/validate.py`
  yn gwirio bod pob ffeil ochr yn bodoli ac yn cyfateb. Mae `spec/locales.md` yn dogfennu deg
  locale gyfieithedig arfaethedig (Arabeg, Bengaleg, Cymraeg, Sbaeneg, Ffrangeg, Hindi,
  Indoneseg, Portiwgaleg, Rwsieg, Wrdw, a Tsieineeg - Tsieina); nid oes gan yr un
  gyfeiriadur `locales/<code>/` eto, gan nad oes yr un wedi'i gyfieithu eto. Ar y wefan,
  enillodd `scripts/locales.mjs` `LOCALE_LABELS`/`localeLabel()` (enw dangos ar gyfer
  pob locale arfaethedig, yn barod cyn llwybro) a
  `sortedLocaleEntries()` (y drefn didoli y dylai rhestr locales yn y dyfodol ei defnyddio),
  a thynnodd `src/lib/i18n.js` y llinynnau chrome UI (llywio, bar ochr, tudalennu,
  dewisydd, troedyn, cyswllt hepgor) yr oedd pob cydran `.svelte` yn eu caled-godio
  yn Saesneg yn flaenorol, wedi'u edafu drwodd trwy `ui(locale)`, gan ddychwelyd i'r
  Saesneg ar gyfer unrhyw locale heb ei gyfieithiadau ei hun.
- Disodlwyd rheolydd pennawd locale-yn-unig y wefan a adeiladwyd â llaw gan
  `@lilydesignsystem/svelte-picker-bar` [Lily Design System](https://lilydesignsystem.com/):
  dewisydd thema go iawn (golau/tywyll, trwy
  `static/assets/themes/{light,dark}.css` newydd), y dewisydd locale go iawn
  (wedi'i gysylltu â llwybro seiliedig ar URL y wefan hon yn hytrach na'i ymddygiad
  rhagosodedig lang/dir yn unig), dewisydd maint testun (graddfa saith cam Lily), a
  dewisydd rhannu (e-bost, Mastodon, copïo cyswllt). Pinniwyd
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker` i
  `^0.1.2` ac `@lilydesignsystem/svelte-headless` i `^0.2.0` trwy overrides
  `pnpm-workspace.yaml`, gan weithio o gwmpas byg go iawn a gyhoeddwyd yn
  ystodau dibyniaeth `svelte-picker-bar` 0.1.0 ei hun (gweler `CHANGELOG.md` pob dewisydd,
  "0.1.2", ac `AGENTS.md` y wefan hon).
- Tynnwyd rhes ystadegau'r hafan (rhannau/pynciau/"Free Always") a'i hadran
  "How to read it", a disodlwyd y grid cardiau "Browse the nine parts" gan
  restr bwledi plaen.

### Changed

- Ychwanegwyd `scripts/generate-sitemap.mjs`, a redir ar ddiwedd `pnpm build`, ac sy'n
  ysgrifennu `sitemap.xml` o'r tudalennau a ragrendrwyd (URLau locale canonaidd yn unig,
  dim dyblygiadau alias dwy lythyren) fel bod y llinell `Sitemap:` yn `robots.txt`
  yn datrys.
- Ychwanegwyd pwnc 2.8, metrigau ffrwd werth Lean (amser arwain, amser
  prosesu, amser cylchred, canran gyflawn a chywir, ac amser takt o fapio
  ffrwd werth Lean clasurol, ynghyd â'r cyfrifiad cynnyrch trwybwn treigl),
  wedi'i osod ar ôl theori ciwio. Symudodd metrigau ceisiadau tynnu ac adolygu cod
  o 2.8 i 2.9, a symudodd y pwnc metrigau DORA o 2.9 i 2.10.
  Diweddarwyd pob croesgyfeirnod yr effeithiwyd arno ar draws y llyfr.
- Ailenwyd Rhan 2 o "Delivery and Flow Metrics" i "Flow Metrics" a'i
  hailorganeiddio o amgylch Fframwaith Llif Mik Kersten. Ychwanegwyd pedwar pwnc
  newydd: 2.1 Y Fframwaith Llif, 2.2 Eitemau llif (nodweddion, diffygion,
  risgiau, dyled), 2.3 Cyflymder llif a dosraniad llif, a 2.4 Amser llif
  a llwyth llif. Cyfunwyd y pedwar pwnc metrig DORA unigol
  (amlder defnyddio, amser arwain, cyfradd methiant newid, amser adfer)
  yn un pwnc cyfeirio, 2.9 Y fframwaith metrigau DORA, a symudwyd
  i ddiwedd y rhan. Ailrifwyd effeithlonrwydd llif a gwaith ar y gweill
  yn 2.5 ac ailenwyd ac ailrifwyd y pwnc theori ciwio (2.9 gynt)
  yn 2.7 Theori ciwio. Mae amser cylchred (2.6) a metrigau ceisiadau tynnu ac
  adolygu cod (2.8) yn cadw eu rhifau. Diweddarwyd pob croesgyfeirnod
  ar draws y llyfr, y rhestr termau, y cyfeirnod fformiwlâu, yr hunanasesiad
  aeddfedrwydd, a'r deunydd blaen i gyd-fynd.

### Added

- Rhyddhad cychwynnol: 45 pwnc sylweddol ar draws 8 rhan, ynghyd â deunydd blaen
  ac atodiad 7 pwnc (Rhan 9), yn ymdrin â fframweithiau DORA a SPACE,
  metrigau cod ac ansawdd, metrigau cynnyrch a busnes, metrigau dibynadwyedd a
  diogelwch, ac effaith deallusrwydd artiffisial cynhyrchiol ar fetrigau peirianneg.
- Seilwaith storfa a ddrychwyd o'r prosiect chwaer
  `software-engineering-guide`: `spec/` a yrrir gan fanyleb
  (mynegai, strwythur, confensiynau, sillafu rhydychen, map llwybr), cyfres ddilysu
  yn `tests/validate.py`, cynhyrchydd llywio yn `tools/gen_nav.py`,
  `justfile`, `AGENTS.md` gyda chanllawiau cyfranwyr o dan `docs/contributing/`,
  `CONTRIBUTING.md`, a'r cofnod newidiadau hwn.
- `spec/structure.md`, y maniffest pynciau canonaidd y mae'r profion yn gwirio'r
  ffeiliau yn ei erbyn.
- Dwy enghraifft weithiedig yn `docs/examples/`: siarter metrigau wedi'i llenwi a
  manyleb dangosfwrdd.

## Hanes

Adeiladwyd y llyfr o'r fanyleb tuag allan: datganwyd y strwythur naw rhan
yn `spec/structure.md` yn gyntaf, yna awdurwyd pob pwnc
yn erbyn y templed a rennir yn `docs/contributing/chapter-template.md`, gyda
`tests/validate.py` yn gorfodi strwythur ac arddull tŷ drwyddi draw.

## Confensiynau ar gyfer y ffeil hon

- Grwpiwch newidiadau o dan **Added**, **Changed**, **Fixed**, **Removed**, neu
  **Deprecated**.
- Cadwch gofnodion yn fyr ac yn benodol. Un llinell yr un lle bo modd.
- Peidiwch â defnyddio cysylltnodau em yma chwaith; mae'r profion yn gwirio'r ffeil hon hefyd.
