# Muutoshistoria

Kirjan ja sen työkalujen merkittävät muutokset. Uusimmat merkinnät ovat
ylimpänä. Päivämäärät noudattavat ISO 8601 -standardia (VVVV-KK-PP).

## [Unreleased]

### Changed

- Lisätty turkki (`tr-tr`) ja thai (`th-th`) täysinä käännettyinä kielialueina, kummallakin identtinen kopio (`tr-001`, `th-001`): kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. Kaikki neljä on kytketty sivustoon ja ne tarjotaan osoitteissa `/tr-tr/`, `/tr-001/`, `/th-th/` ja `/th-001/`. `it-it` ja `it-001` olivat jo olemassa. Nämä ovat tekoälyn tuottamia luonnoksia, joita sujuvasti turkkia tai thaita puhuvat eivät ole tarkistaneet.
- Lisätty vietnam (`vi-001`, `vi-vn`-kielialueen täsmäkopio) täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen ja oma `sitemap.xml`. `vi-001` ja `vi-vn` on kytketty sivustoon ja ne tarjotaan osoitteissa `/vi-001/` ja `/vi-vn/`. Tämä on tekoälyn tuottama luonnos, jota sujuvasti vietnamia puhuva ei ole tarkistanut.
- Lisätty tanska (`da-001`) täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen ja oma `sitemap.xml`. `da-001` on kytketty sivustoon ja se tarjotaan osoitteessa `/da-001/`.
- Lisätty `id-id` ja `it-it` kielialueiden `id-001` ja `it-001` identtisinä kopioina, kytketty sivustoon ja tarjotaan osoitteissa `/id-id/` ja `/it-it/`.
- Sivusto: `is-is`, `nl-nl` ja `sv-se` on nyt kytketty ja ne tarjotaan osoitteissa `/is-is/`, `/nl-nl/` ja `/sv-se/` `-001`-kopioidensa rinnalla.
- Lisätty swahili (Tansania) nimellä `sw-tz`, `sw-001`-kielialueen identtinen kopio vastaavine `.locale-peer-id`-sivutiedostoineen ja oma `sitemap.xml`. `sw-tz` on kytketty sivustoon ja se tarjotaan osoitteessa `/sw-tz/`.
- Lisätty italia (`it-001`) 34. täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. `it-001` on kytketty sivustoon ja se tarjotaan osoitteessa `/it-001/`.
- Lisätty swahili (`sw-001`) 33. täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. `sw-001` on kytketty sivustoon ja se tarjotaan osoitteessa `/sw-001/`.
- Lisätty islanti (`is-is`) ja `is-001` 31. ja 32. täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen, `is-001` sisällöltään identtinen `is-is`:n kanssa. `is-001` on kytketty sivustoon ja se tarjotaan osoitteessa `/is-001/`.
- Sivusto: juurisivun selainkieleen perustuva uudelleenohjaus palaa nyt kielen kansainväliseen
  ylijoukkoon, kun tarkkaa vastinetta ei ole: `en-AU` ohjautuu kielialueelle `/en-001/`, `es-MX` kielialueelle `/es-001/` ja
  `zh-TW` kielialueelle `/zh-001/`. Aliasosoite, kuten `/en/`, ei enää pomppaa kielialueen valitsimen kautta kielialueelle `/en-001/`.

### Added

- `spec/locales.md` vaatii nyt, että jokainen `locales/`-hakemisto nimetään muotoon `<language>-<region>`; pelkät
  kaksikirjaimiset nimet ovat vain sivuston URL-aliaksia, ja `tests/validate.py` valvoo tätä. Kaksikirjaimista hakemistoa ei ollut, joten mitään ei poistettu.
- Lisätty ruotsi (`sv-001`) 30. täytenä käännettynä kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine
  `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen `sv-se`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/sv-001/` (alias `/sv/`).
- Lisätty japani (`ja-001`), korea (`ko-001`) ja hollanti (`nl-001`) 27.-29. täytenä käännettynä
  kielialueena: kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtisiä
  kielialueiden `ja-jp`, `ko-kr` ja `nl-nl` kanssa. Kytketty sivustoon ja tarjotaan osoitteissa `/ja-001/`, `/ko-001/` ja `/nl-001/`
  (aliakset `/ja/`, `/ko/` ja `/nl/`).

### Added

- Käännetty alkuosa-, esimerkki-, osallistumis- ja hankeosio (14 tiedostoa sekä muutoshistoria, kotisivun `index.md` ja
  sisällysluettelo kielialuetta kohti) jokaiselle käännetylle kielialueelle: `ar`, `bn`, `cy`, `de`,
  `es`, `fr`, `hi`, `id`, `ja`, `ko`, `nl`, `pt`, `ru`, `sv`, `ur` ja `zh`, ja kaksoiskielialueet
  (`ar-001`/`ar-eg` ja niin edelleen) pidetty identtisinä. Hakemistot käyttävät kielialuekohtaisia nimiä tiedostossa
  `spec/section-names.json`. Uusi `tools/gen_translated_nav.py` päivittää jokaisen käännetyn kotisivun ja
  sisällysluettelon aiheiden otsikoista, `tests/validate.py` vapauttaa käännetyt testaus-, tyylisääntö- ja hakemistodokumentit
  vertaistunnisteen perusteella, ja sivuston `scripts/sync-content.mjs` yhdistää näiden osioiden käännetyt tiedostonimet
  takaisin kanonisiin englanninkielisiin nimiinsä `.locale-peer-id`-sivutiedostojen kautta.

### Changed

- Lisätty turkki (`tr-tr`) ja thai (`th-th`) täysinä käännettyinä kielialueina, kummallakin identtinen kopio (`tr-001`, `th-001`): kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. Kaikki neljä on kytketty sivustoon ja ne tarjotaan osoitteissa `/tr-tr/`, `/tr-001/`, `/th-th/` ja `/th-001/`. `it-it` ja `it-001` olivat jo olemassa. Nämä ovat tekoälyn tuottamia luonnoksia, joita sujuvasti turkkia tai thaita puhuvat eivät ole tarkistaneet.
- Hollanti (`nl-nl`): käännetty aiheiden 9.0, 9.3 ja 9.4 jäljellä olleet englanninkieliset otsikot ja slugit
  (`bijlagen`, `controlelijsten`, `sjablonen`).
- Kymri (`cy-001`, `cy-gb`): terminologia yhdenmukaistettu TermCymrun kanssa: `risg` (riski, korvaa
  `perygl`-sanan, sukuyhteensopivuudella), `cyfnewidiad` (kompromissi), `dangosydd rhagfynegi` ja
  `dangosydd ôl-fynegi` (johtava ja jäljessä kulkeva indikaattori, korvaa `hwyrfrydig`-sanan), `cynhwysedd`
  (kapasiteetti), `dosraniad` (jakauma), `cydberthynas` (korrelaatio), `allbwn` tuotokselle
  aiheessa 1.3 ja `cyfradd gadael staff` (henkilöstövaihtuvuus). Neljä aiheen slugia nimettiin vastaavasti uudelleen.
- Sivusto: päivitetty `@lilydesignsystem/svelte-picker-bar` versioon 0.2.0, joka lisää
  otsikkopalkkiin hakuvalitsimen; se lähettää hakukyselyn olemassa olevaan sivustohakuun `/?<query>`.
- Lisätty `scripts/generate-sitemap.mjs`, joka ajetaan `pnpm build`:n lopuksi ja
  kirjoittaa `sitemap.xml`:n esirenderöidyistä sivuista (vain kanoniset kielialueen URL-osoitteet,
  ei kaksikirjaimisten aliasten kaksoiskappaleita), jotta `robots.txt`:n `Sitemap:`-rivi
  ratkeaa.
- `AGENTS.md` on nyt lyhyt hakemisto; yksityiskohdat siirtyivät tiedostoihin `AGENTS/layout.md`, `style.md`,
  `locales.md` ja `workflow.md`.
- Dokumentaation läpikäynti: päivitetty `AGENTS.md`, `index.md`, generoitu
  README-kielialueteksti, `spec/index.md`, `spec/locales.md` sekä sivuston
  `AGENTS.md` ja `README.md` 27 kielialueelle, kielialuekohtaisille osiohakemistojen
  nimille ja uusille työkaluille; lisätty `CLAUDE.md` (osoitin tiedostoon `AGENTS.md`);
  korjattu vanhentuneet `docs/`-polut molemmissa agenttitaidoissa ja tehty
  `skills/` hakemiston `.claude/skills/` kanoniseksi kopioksi (testit tarkistavat).
- Lisätty `llms.txt` ja `llms.json` (tekoälyagenttien hakemisto jokaisesta tarjotusta kielialueesta
  ja aiheesta) sivuston `static/`-hakemistoon, generoitu työkalulla `tools/gen_llms.py`
  (`just llms`) ja testien tarkistama.
- Sivuston etusivu: "yhdeksän osaa" -ruutuluettelo on nyt "Sisältö"-sisäkkäinen lista kaikista
  osista ja aiheista, ja "Goodhartin laki kaikkialla" -osio on poistettu.
- Sana "chapter" muutettu sanaksi "topic" kirjan leipätekstissä kaikilla
  kielialueilla (esimerkiksi "aihe 2.1", "Aiheet tässä osassa"), käyttäen kunkin
  kielen omaa sanaa aiheelle (`tema`, `sujet`, `Thema`, `тема`, `主題`
  ja niin edelleen), sekä määrittelyssä, työkalujen generoimassa tekstissä ja sivuston
  käyttöliittymämerkkijonoissa. Tiedostonimet, URL-osoitteet ja osioavaimet ovat ennallaan.
- Käännetty jokainen osiohakemiston nimi hakemiston `locales/` alla: `chapters/` on nyt
  `topics/` (ja sen käännös jokaisella muulla kielialueella, esim. `temas/`,
  `sujets/`, `themen/`), ja `es-001`:n `examples/` on `ejemplos/`. Nimet
  ovat tiedostossa `spec/section-names.json`; työkalut, testit ja sivuston sisällön
  synkronointi lukevat ne sieltä, ja sivuston URL-osoitteet ovat ennallaan.

### Changed

- Lisätty turkki (`tr-tr`) ja thai (`th-th`) täysinä käännettyinä kielialueina, kummallakin identtinen kopio (`tr-001`, `th-001`): kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. Kaikki neljä on kytketty sivustoon ja ne tarjotaan osoitteissa `/tr-tr/`, `/tr-001/`, `/th-th/` ja `/th-001/`. `it-it` ja `it-001` olivat jo olemassa. Nämä ovat tekoälyn tuottamia luonnoksia, joita sujuvasti turkkia tai thaita puhuvat eivät ole tarkistaneet.
- Tarkistettu kymrin kielialueet (`cy-001`, `cy-gb`, pidetty identtisinä) Walesin
  hallituksen TermCymru-terminologialistaa vasten: `llesiant` hyvinvoinnille,
  `cynhyrchiant` tuottavuudelle, `gwendid`/`gwendidau` haavoittuvuudelle,
  `llywodraethiant` hallinnolle, `cydberthynas` korrelaatiolle,
  `ôl-groniad` jäämälle (backlog, aiemmin jätetty englanniksi), `cost a budd`
  kustannus-hyötyanalyysille ja `deallusrwydd artiffisial (AI)` tekoälyn ensimmäisessä
  maininnassa kussakin aiheessa.

### Added

- Lisätty saksa (`de-001`) 26. täytenä käännettynä kielialueena: kaikki 63
  aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `de-de`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/de-001/` (alias `/de/`).
- Lisätty portugali (`pt-001`) 25. täytenä käännettynä kielialueena: kaikki 63
  aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `pt-pt`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/pt-001/` (alias `/pt/`).
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  urduksi (`ur-001`, oikealta vasemmalle), 24. täysi käännetty kielialue,
  vastaavine `.locale-peer-id`-sivutiedostoineen. Jokainen aihe käännettiin suoraan
  englanninkielisestä lähteestä, hakemisto (aihe 9.7) yhdistää jokaisen sisäisen linkin
  urdunkieliseen tiedostonimeen, ja osiohakemisto on `موضوعات`. Kytketty
  sivustoon ja tarjotaan osoitteessa `/ur-001/` (alias `/ur/`).
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  indonesiaksi (`id-001`), vastaavine `.locale-peer-id`-sivutiedostoineen. Aiempaa
  indonesian kielialuetta ei ollut, jonka pohjalta rakentaa, joten jokainen aihe käännettiin
  suoraan englanninkielisestä lähteestä, ja hakemisto (aihe 9.7) yhdistää jokaisen
  sisäisen linkin indonesiankieliseen tiedostonimeen. Kytketty sivustoon ja tarjotaan osoitteessa
  `/id-001/` (alias `/id/`).
- Lisätty venäjä (`ru-001`) ja kiina (`zh-001`) 21. ja 22.
  täytenä käännettynä kielialueena: kumpikin 63 aihetta, vastaavine
  `.locale-peer-id`-sivutiedostoineen, sisällöltään identtisiä kielialueiden `ru-ru` ja `zh-cn` kanssa.
  Kytketty sivustoon ja tarjotaan osoitteissa `/ru-001/` ja `/zh-001/` (aliakset
  `/ru/` ja `/zh/`).
- Lisätty ranska (`fr-001`) 20. täytenä käännettynä kielialueena: kaikki 63
  aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `fr-fr`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/fr-001/` (alias `/fr/`).
- Lisätty bengali (`bn-001`) 19. täytenä käännettynä kielialueena: kaikki 63
  aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `bn-bd`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/bn-001/` (alias `/bn/`).
- Lisätty arabia (`ar-001`) 18. täytenä käännettynä kielialueena: kaikki 63
  aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `ar-eg`:n kanssa. Kytketty sivustoon ja tarjotaan osoitteessa `/ar-001/` (alias `/ar/`).
- Lisätty kymri, Iso-Britannia (`cy-gb`) 17. täytenä käännettynä
  kielialueena: kaikki 63 aihetta vastaavine `.locale-peer-id`-sivutiedostoineen, sisällöltään identtinen
  `cy-001`:n kanssa (sama suhde kuin `hi-id`:llä on `hi-001`:een).
  Kytketty sivuston `SERVED_LOCALE_CODES`-listaan ja tarjotaan osoitteessa `/cy-gb/`.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  hollanniksi, Alankomaat (`nl-nl`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Aiempaa hollannin kielialuetta ei ollut, jonka pohjalta rakentaa, joten
  jokainen aihe käännettiin suoraan englanninkielisestä lähteestä. Hakemisto
  (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin hollanninkieliseen
  tiedostonimeen, kuten `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru`, `fr-fr` ja `sv-se` -kielialueissa. Ei vielä kytketty
  sivustoon.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  ruotsiksi, Ruotsi (`sv-se`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Aiempaa ruotsin kielialuetta ei ollut, jonka pohjalta rakentaa, joten
  jokainen aihe käännettiin suoraan englanninkielisestä lähteestä. Hakemisto
  (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin ruotsinkieliseen
  tiedostonimeen, kuten `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp`, `ru-ru` ja `fr-fr` -kielialueissa. Ei vielä kytketty
  sivustoon.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  ranskaksi, Ranska (`fr-fr`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Aiempaa ranskan kielialuetta ei ollut, jonka pohjalta rakentaa, joten
  jokainen aihe käännettiin suoraan englanninkielisestä lähteestä. Hakemisto
  (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin ranskankieliseen
  tiedostonimeen, kuten `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt`, `ja-jp` ja `ru-ru` -kielialueissa. Ei vielä kytketty sivustoon.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  venäjäksi, Venäjä (`ru-ru`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Aiempaa venäjän kielialuetta ei ollut, jonka pohjalta rakentaa, joten
  jokainen aihe käännettiin suoraan englanninkielisestä lähteestä. Hakemisto
  (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin venäjänkieliseen
  tiedostonimeen, kuten `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es`, `pt-pt` ja `ja-jp` -kielialueissa. Ei vielä kytketty sivustoon.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  japaniksi, Japani (`ja-jp`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Aiempaa japanin kielialuetta ei ollut, jonka pohjalta rakentaa, joten
  jokainen aihe käännettiin suoraan englanninkielisestä lähteestä. Hakemisto
  (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin japaninkieliseen
  tiedostonimeen, kuten `ar-eg`, `bn-bd`, `ko-kr`,
  `es-es` ja `pt-pt` -kielialueissa. Ei vielä kytketty sivustoon.
- Valmistunut täysi, tyhjästä tehty käsinkäännös kaikista 63 aiheesta
  portugaliksi, Portugali (`pt-pt`), vastaavine `.locale-peer-id`-sivutiedostoineen
  ja `just test` läpäisten. Aiempaa portugalin kielialuetta ei ollut, jonka pohjalta
  rakentaa, joten jokainen aihe käännettiin suoraan englanninkielisestä lähteestä.
  Hakemisto (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin
  portugalinkieliseen tiedostonimeen, kuten `ar-eg`, `bn-bd`,
  `ko-kr` ja `es-es` -kielialueissa. Ei vielä kytketty sivustoon.
- Lisätty espanja, Espanja (`es-es`) täytenä käännettynä kielialueena, kaikki 63
  aihetta, lähtien olemassa olevan espanjan (`es-001`)
  käännöksen kopiosta (joka tarkastettaessa osoittautui jo kieliopillisesti neutraaliksi,
  sanasto enimmäkseen jo Espanjaan päin kallellaan) ja soveltaen sitten
  kohdennettua terminologiakierrosta jäljellä oleviin vähemmistökäyttöihin, erityisesti
  "incidente" muotoon "incidencia" tämän kirjan häiriömittarien
  alueella, ja vastaavin sukuyhteensopivuuskorjauksin kauttaaltaan. Ei vielä
  kytketty sivustoon.
- Valmistunut täysi käsinkäännös kaikista 63 aiheesta koreaksi, Korea
  (`ko-kr`), vastaavine `.locale-peer-id`-sivutiedostoineen ja `just test` läpäisten.
  Hakemisto (aihe 9.7) yhdistää jokaisen sisäisen aihelinkin
  koreankieliseen tiedostonimeen, kuten `ar-eg`- ja
  `bn-bd`-kielialueissa. Ei vielä kytketty sivustoon.
- Lisätty hindi, Intia (`hi-id`) täytenä käännettynä kielialueena, kaikki 63
  aihetta, kopioimalla olemassa oleva hindin (`hi-001`) käännös sellaisenaan
  maatunnisteisen kielialuekoodin alle, koska tavallisella hindillä ei ole
  erillistä Intia-kohtaista muunnosta, joka pitäisi kääntää erikseen. Ei vielä
  kytketty sivustoon.
- Valmistunut täysi käsinkäännös kaikista 63 aiheesta bengaliksi,
  Bangladesh (`bn-bd`), vastaavine `.locale-peer-id`-sivutiedostoineen ja
  `just test` läpäisten. Ei vielä kytketty sivustoon.
- Valmistunut täysi käsinkäännös kaikista 63 aiheesta arabiaksi, Egypti
  (`ar-eg`), vastaavine `.locale-peer-id`-sivutiedostoineen ja `just test` läpäisten.
  Ei vielä kytketty sivustoon.
- Valmistunut täysi käsinkäännös kaikista 63 aiheesta saksaksi, Saksa
  (`de-de`), vastaavine `.locale-peer-id`-sivutiedostoineen ja `just test` läpäisten.
  Ei vielä kytketty sivustoon.
- Valmistuneet täydet käsinkäännökset kaikista 63 aiheesta kolmelle kielialueelle:
  kymri (`cy-001`), kiina (`zh-cn`) ja hindi (`hi-001`), kullakin
  vastaavat `.locale-peer-id`-sivutiedostot ja `just test` läpäisten.
- Lisätty kaksi muuta suunniteltua käännettyä kielialuetta, kymri - Iso-Britannia
  (`cy-gb`) ja kiina (`zh-001`), tiedostoihin
  `spec/locales-for-global-sharing-with-svelte/locales.tsv` ja
  `spec/locales.md` (nyt kolmetoista suunniteltua kielialuetta, aiemmin yksitoista), ja
  ratkaistu `zh-cn`:n aiemmin ratkaisematon omanimi muotoon 中文. Sivuston
  `LOCALE_LABELS` sai vastaavat merkinnät (`cy-gb`: "Cymraeg (Prydain
  Fawr)", `zh-001`: "中文", `zh-cn`: "中文 (中国)"). Edelleen pelkkää
  infrastruktuuria: millään näistä kielialueista ei ole `locales/<code>/`-hakemistoa
  eikä käännettyä sisältöä.
- Julkaistu kirja neljällä kielialueella hakemiston `locales/` alla: `en-gb-oxendict`
  (brittienglanti, Oxford-oikeinkirjoitus; käsin kirjoitettu lähde), `en-001`
  (kansainvälinen englanti), `en-gb` (yleinen brittienglanti) ja `en-us`
  (amerikanenglanti). `en-001`, `en-gb` ja `en-us` johdetaan mekaanisesti
  `en-gb-oxendict`:stä uudella työkalulla `tools/localize.py`; katso
  `spec/locales.md`. Hakemistoa `docs/` ei enää ole; jokainen viittaus siihen tiedostoissa
  `spec/`, `AGENTS.md`, `tests/validate.py`, `tools/gen_nav.py` ja
  `tools/stats.py` osoittaa nyt hakemistoon `locales/<locale>/`.
- Lisätty kaksi Claude Code -taitoa, `software-engineering-metrics-skill` (lukijoille,
  jotka soveltavat kirjan ohjeita omaan tiimiinsä) ja
  `software-engineering-metrics-maintainer-skill` (osallistujille, jotka lisäävät
  tai muokkaavat aiheita), hakemistoon `skills/` ja peilattu hakemistoon `.claude/skills/`.
- Siirretty julkaistun verkkosivuston lähdekoodi tähän repositorioon nimellä
  `software-engineering-metrics.github.io/`, aiemmin erillinen repositorio.
  Se lukee nyt `locales/`-hakemistoa suoraan repositorion juuresta sisarkopion sijaan. Juuren
  `.github/workflows/deploy.yml` varmistaa, että sivusto rakentuu edelleen jokaisella pushilla
  haaraan `main`, ja lähettää sitten `repository_dispatch`-tapahtuman
  `software-engineering-metrics.github.io`-repositoriolle (pidetty ohuena
  julkaisukuorena, koska GitHub Pages tarjoaa tuon paljaan verkkotunnuksen vain
  täsmälleen sen nimisestä repositoriosta), joka hakee tämän monorepon, rakentaa sivuston
  ja julkaisee sen.
- Lisätty infrastruktuuri käännetyille (ei vain oikeinkirjoituksesta johdetuille)
  kielialueille uuden `spec/locales-for-global-sharing-with-svelte/`-alamäärittelyn mukaisesti:
  `tools/gen_locale_peer_ids.py` antaa jokaiselle sisältötiedostolle
  `.locale-peer-id`-sivutiedoston, joka on identtinen kielialueesta toiseen ja jota tuleva
  käännetty kielialue (omine alkuperäiskirjoitusjärjestelmän slugeineen) voi käyttää
  ratkaistakseen "tämä sivu kielialueella X" slugin vertailun sijaan; `tests/validate.py`
  tarkistaa, että jokainen sivutiedosto on olemassa ja täsmää. `spec/locales.md` dokumentoi kymmenen
  suunniteltua käännettyä kielialuetta (arabia, bengali, kymri, espanja, ranska, hindi,
  indonesia, portugali, venäjä, urdu ja kiina - Kiina); millään ei ole vielä
  `locales/<code>/`-hakemistoa, koska mitään ei ole vielä käännetty. Sivustolla
  `scripts/locales.mjs` sai `LOCALE_LABELS`/`localeLabel()` (näyttönimi jokaiselle suunnitellulle
  kielialueelle, valmiina ennen reititystä) ja
  `sortedLocaleEntries()` (järjestys, jota tulevan kielialuelistan tulisi käyttää),
  ja `src/lib/i18n.js` erotti käyttöliittymän kehysmerkkijonot (navigointi, sivupalkki, sivutus,
  valitsin, alatunniste, ohituslinkki), jotka jokainen `.svelte`-komponentti aiemmin
  kovakoodasi englanniksi, välitettynä `ui(locale)`:n kautta ja palaten
  englantiin kielialueilla, joilla ei ole omia käännöksiä.
- Korvattu sivuston käsin rakennettu pelkän kielialueen otsikkoohjain
  [Lily Design System](https://lilydesignsystem.com/) -järjestelmän
  `@lilydesignsystem/svelte-picker-bar`-komponentilla: oikea teemavalitsin (vaalea/tumma, uusien
  tiedostojen `static/assets/themes/{light,dark}.css` kautta), oikea kielialuevalitsin
  (kytketty tämän sivuston URL-pohjaiseen reititykseen sen oletuksena olevan pelkän
  lang/dir-toiminnan sijaan), tekstikokovalitsin (Lilyn
  seitsenportainen asteikko) ja jakovalitsin (sähköposti, Mastodon, kopioi linkki). Kiinnitetty
  `@lilydesignsystem/svelte-{theme,locale,text-size,share}-picker`
  versioon `^0.1.2` ja `@lilydesignsystem/svelte-headless` versioon `^0.2.0`
  `pnpm-workspace.yaml`-ylikirjoituksilla kiertäen todellisen julkaistun virheen
  `svelte-picker-bar` 0.1.0:n omissa riippuvuusväleissä (katso jokaisen valitsimen
  `CHANGELOG.md`, "0.1.2", ja tämän sivuston `AGENTS.md`).
- Poistettu etusivun tilastorivi (osat/aiheet/"Aina ilmainen") ja sen
  "Näin luet sitä" -osio, ja korvattu "Selaa yhdeksää osaa" -korttiruudukko
  pelkällä luettelolla.

### Changed

- Lisätty turkki (`tr-tr`) ja thai (`th-th`) täysinä käännettyinä kielialueina, kummallakin identtinen kopio (`tr-001`, `th-001`): kaikki 63 aihetta ja kaikki muut osiot, vastaavine `.locale-peer-id`-sivutiedostoineen. Kaikki neljä on kytketty sivustoon ja ne tarjotaan osoitteissa `/tr-tr/`, `/tr-001/`, `/th-th/` ja `/th-001/`. `it-it` ja `it-001` olivat jo olemassa. Nämä ovat tekoälyn tuottamia luonnoksia, joita sujuvasti turkkia tai thaita puhuvat eivät ole tarkistaneet.
- Lisätty `scripts/generate-sitemap.mjs`, joka ajetaan `pnpm build`:n lopuksi ja
  kirjoittaa `sitemap.xml`:n esirenderöidyistä sivuista (vain kanoniset kielialueen URL-osoitteet,
  ei kaksikirjaimisten aliasten kaksoiskappaleita), jotta `robots.txt`:n `Sitemap:`-rivi
  ratkeaa.
- Lisätty aihe 2.8, Lean-arvovirran mittarit (läpimenoaika, prosessiaika,
  sykliaika, täydellisten ja oikeiden osuus sekä taktiaika perinteisestä
  Lean-arvovirtakuvauksesta, sekä läpäisykelpoisuuden tulon (rolled throughput yield) laskenta),
  sijoitettuna jonoteorian jälkeen. Pull requestien ja koodikatselmoinnin mittarit siirtyivät
  kohdasta 2.8 kohtaan 2.9, ja DORA-mittarien aihe kohdasta 2.9 kohtaan 2.10.
  Päivitetty jokainen vaikutuksen alainen ristiviittaus kirjan läpi.
- Osa 2 nimetty uudelleen "Toimitus- ja virtausmittareista" "Virtausmittareiksi" ja
  järjestetty uudelleen Mik Kerstenin Flow Frameworkin ympärille. Lisätty neljä uutta
  aihetta: 2.1 Flow Framework, 2.2 Flow-kohteet (ominaisuudet, virheet,
  riskit, velka), 2.3 Flow-nopeus ja flow-jakauma sekä 2.4 Flow-aika
  ja flow-kuorma. Yhdistetty neljä yksittäistä DORA-mittarin aihetta
  (julkaisutiheys, läpimenoaika, muutosten epäonnistumisprosentti, palautumisaika)
  yhdeksi viiteaiheeksi, 2.9 DORA-mittarien viitekehys, siirrettynä
  osan loppuun. Flow-tehokkuus ja keskeneräinen työ numeroitu uudelleen
  kohtaan 2.5, ja jonoteorian aihe (aiemmin
  2.9) nimetty ja numeroitu uudelleen kohtaan 2.7 Jonoteoria. Sykliaika (2.6) sekä pull requestien
  ja koodikatselmoinnin mittarit (2.8) säilyttävät numeronsa. Päivitetty jokainen ristiviittaus
  kirjan läpi, sanasto, kaavojen viiteluettelo, kypsyyden
  itsearviointi ja alkuosa vastaamaan.

### Added

- Ensimmäinen julkaisu: 45 asiasisältöistä aihetta 8 osassa sekä alkuosa
  ja 7 aiheen liite (osa 9), jotka kattavat DORA- ja SPACE-viitekehykset,
  koodin ja laadun mittarit, tuote- ja liiketoimintamittarit, luotettavuuden ja
  tietoturvan mittarit sekä generatiivisen tekoälyn vaikutuksen ohjelmistotuotannon mittareihin.
- Repositorion infrastruktuuri, joka on peilattu sisarprojektista
  `software-engineering-guide`: määrittelylähtöinen `spec/`
  (hakemisto, rakenne, konventiot, oxford-oikeinkirjoitus, tiekartta), tarkistussarja
  tiedostossa `tests/validate.py`, navigointigeneraattori tiedostossa `tools/gen_nav.py`,
  `justfile`, `AGENTS.md` ja osallistujaoppaat hakemistossa `docs/contributing/`,
  `CONTRIBUTING.md` ja tämä muutoshistoria.
- `spec/structure.md`, kanoninen aiheluettelo, jota vasten testit tarkistavat
  tiedostot.
- Kaksi läpikäytyä esimerkkiä hakemistossa `docs/examples/`: täytetty mittarien peruskirja ja
  mittariston määrittely.

## Historia

Kirja rakennettiin määrittelystä ulospäin: yhdeksän osan rakenne
julkaistiin ensin tiedostossa `spec/structure.md`, sitten jokainen aihe kirjoitettiin
jaetun pohjan mukaan tiedostossa `docs/contributing/chapter-template.md`, ja
`tests/validate.py` valvoi rakennetta ja talon tyyliä koko ajan.

## Tämän tiedoston käytännöt

- Ryhmittele muutokset otsikoiden **Added**, **Changed**, **Fixed**, **Removed** tai
  **Deprecated** alle.
- Pidä merkinnät lyhyinä ja täsmällisinä. Mahdollisuuksien mukaan yksi rivi kutakin.
- Älä käytä em-viivoja tässäkään; testit tarkistavat myös tämän tiedoston.
