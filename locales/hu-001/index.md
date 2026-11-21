# Szoftverfejlesztési metrikák

Gyakorlati könyv a **szoftverfejlesztés** jó méréséről: hogyan válassz olyan metrikákat, amelyek a valódi eredményeket tükrözik, nem a puszta tevékenységet; milyen keretrendszerekre épül a könyv (a Flow Framework, a SPACE keretrendszer, a sorbanállás-elmélet és a DORA-metrikák); melyek a fontos metrikacsaládok; és hogyan vezess olyan metrikaprogramot, amely jobbá teszi a csapatot, ahelyett hogy ellenőrizné.

A könyv kitér a szállításra és a flow-ra, a fejlesztői élményre, a kódra és a minőségre, a termék- és üzleti eredményekre, a megbízhatóságra és a biztonságra, valamint arra, hogyan változtatja meg a generatív MI e számok jelentését.

- **[Mik a szoftverfejlesztési metrikák?](elohang/mik-a-szoftverfejlesztesi-metrikak.md):** itt kezdd
- **[Bevezetés](elohang/bevezetes.md):** mi ez a könyv, és hogyan érdemes olvasni
- **[Tartalomjegyzék](elohang/tartalomjegyzek.md):** a témák teljes listája

## Hogyan olvasd ezt a könyvet

A részek egész számok, a témák tizedes törtek. Az **N.0** téma bevezeti az egyes részeket; az **N.1, N.2, …** témák a rész további témái. A 9. rész gyűjti a függelékeket (szószedet, képletkézikönyv, ellenőrzőlisták, sablonok, érettségi önértékelés, források és tárgymutató). Minden metrikacsaládról szóló téma kitér az alapelvekre, ajánlásokra, kompromisszumokra, az ágazati szemszögre, példákra (nagyvállalati és közszféra), az üzleti érvre (ROI/TCO), az antimintákra, egy érettségi modellre, megbeszélési kérdésekre és forrásokra, és megnevezi, hogyan játsszák ki a metrikát, és milyen védőkorlát fogja ezt meg. Fokozatosan vezesd be; ne egy csapásra.

## Tartalomjegyzék

### 1. rész: A mérés alapjai
- [1.0 Bevezetés](temak/01-00-a-meres-alapjai.md)
- [1.1 Miért mérjük a szoftverfejlesztést](temak/01-01-miert-merjuk-a-szoftverfejlesztest.md)
- [1.2 Goodhart törvénye és a metrikák pszichológiája](temak/01-02-goodhart-torvenye-es-a-metrikak-pszichologiaja.md)
- [1.3 Eredmények a kibocsátás előtt: mit érdemes mérni](temak/01-03-eredmenyek-a-kibocsatas-elott.md)
- [1.4 Metrikagovernance és felelősség](temak/01-04-metrikagovernance-es-felelosseg.md)
- [1.5 Adatforrások és műszerezés](temak/01-05-adatforrasok-es-muszerezes.md)
- [1.6 Statisztikai jártasság mérnöki metrikákhoz](temak/01-06-statisztikai-jartassag-mernoki-metrikakhoz.md)

### 2. rész: Flow-metrikák
- [2.0 Bevezetés](temak/02-00-flow-metrikak.md)
- [2.1 A Flow Framework](temak/02-01-a-flow-framework.md)
- [2.2 Flow-elemek: funkciók, hibák, kockázatok és adósság](temak/02-02-flow-elemek.md)
- [2.3 Flow-sebesség és flow-eloszlás](temak/02-03-flow-sebesseg-es-flow-eloszlas.md)
- [2.4 Flow-idő és flow-terhelés](temak/02-04-flow-ido-es-flow-terheles.md)
- [2.5 Flow-hatékonyság és folyamatban lévő munka](temak/02-05-flow-hatekonysag-es-folyamatban-levo-munka.md)
- [2.6 Ciklusidő és összetevői](temak/02-06-ciklusido-es-osszetevoi.md)
- [2.7 Sorbanállás-elmélet](temak/02-07-sorbanallas-elmelet.md)
- [2.8 Lean értékáram-metrikák](temak/02-08-lean-ertekaram-metrikak.md)
- [2.9 Pull request- és kódáttekintési metrikák](temak/02-09-pull-request-es-kodattekintesi-metrikak.md)
- [2.10 A DORA-metrikák keretrendszere](temak/02-10-a-dora-metrikak-keretrendszere.md)

### 3. rész: Fejlesztői élmény és a SPACE keretrendszer
- [3.0 Bevezetés](temak/03-00-fejlesztoi-elmeny-es-space.md)
- [3.1 A SPACE keretrendszer](temak/03-01-a-space-keretrendszer.md)
- [3.2 Elégedettségi és jóllétmetrikák](temak/03-02-elegedettsegi-es-jolletmetrikak.md)
- [3.3 Teljesítménymetrikák és eredményközelítők](temak/03-03-teljesitmenymetrikak-es-eredmenykozelitok.md)
- [3.4 Aktivitásmetrikák és korlátaik](temak/03-04-aktivitasmetrikak-es-korlataik.md)
- [3.5 Kommunikációs és együttműködési metrikák](temak/03-05-kommunikacios-es-egyuttmukodesi-metrikak.md)
- [3.6 Hatékonyság és flow: mély munka és megszakítások](temak/03-06-hatekonysag-es-flow.md)
- [3.7 Fejlesztői élmény felmérések és DevEx-metrikák](temak/03-07-fejlesztoi-elmeny-felmeresek-es-devex-metrikak.md)

### 4. rész: Kód- és minőségmetrikák
- [4.0 Bevezetés](temak/04-00-kod-es-minosegmetrikak.md)
- [4.1 Kódbonyolultsági metrikák](temak/04-01-kodbonyolultsagi-metrikak.md)
- [4.2 Tesztlefedettség és a tesztek hatékonysága](temak/04-02-tesztlefedettseg-es-a-tesztek-hatekonysaga.md)
- [4.3 Kódfluktuáció és hotspot-elemzés](temak/04-03-kodfluktuacio-es-hotspot-elemzes.md)
- [4.4 Statikus elemzés és kódszag-metrikák](temak/04-04-statikus-elemzes-es-kodszag-metrikak.md)
- [4.5 A technikai adósság mérése](temak/04-05-a-technikai-adossag-merese.md)
- [4.6 Dokumentációs és tudásmetrikák](temak/04-06-dokumentacios-es-tudasmetrikak.md)

### 5. rész: Termék- és üzleti metrikák
- [5.0 Bevezetés](temak/05-00-termek-es-uzleti-metrikak.md)
- [5.1 Kiszökött hibák aránya és minőségi kiszökések](temak/05-01-kiszokott-hibak-aranya-es-minosegi-kiszokesek.md)
- [5.2 Funkcióelfogadási és használati metrikák](temak/05-02-funkcioelfogadasi-es-hasznalati-metrikak.md)
- [5.3 Ügyfél- és üzleti eredménymetrikák](temak/05-03-ugyfel-es-uzleti-eredmenymetrikak.md)
- [5.4 A mérnöki munka költségei és egységgazdaságtana](temak/05-04-a-mernoki-munka-koltsegei-es-egysegagazdasagtana.md)
- [5.5 Mérnöki kezdeményezések megtérülése](temak/05-05-mernoki-kezdemenyezesek-megterulese.md)

### 6. rész: Megbízhatósági, üzemeltetési és biztonsági metrikák
- [6.0 Bevezetés](temak/06-00-megbizhatosagi-uzemeltetesi-es-biztonsagi-metrikak.md)
- [6.1 Szolgáltatásiszint-mutatók, -célok és hibakeretek](temak/06-01-szolgaltatasiszint-mutatok-celok-es-hibakeretek.md)
- [6.2 Incidensmetrikák: észlelés, reagálás és helyreállítás](temak/06-02-incidensmetrikak.md)
- [6.3 Ügyelet, kapacitás és üzemeltetési terhelés metrikái](temak/06-03-ugyelet-kapacitas-es-uzemeltetesi-terheles-metrikai.md)
- [6.4 Biztonsági és sérülékenységkezelési metrikák](temak/06-04-biztonsagi-es-serulekenysegkezelesi-metrikak.md)

### 7. rész: Metrikák a mesterséges intelligencia korában
- [7.0 Bevezetés](temak/07-00-metrikak-a-mesterseges-intelligencia-koraban.md)
- [7.1 A generatív MI paradigmaváltása](temak/07-01-a-generativ-mi-paradigmavaltasa.md)
- [7.2 Az MI-támogatott szoftverfejlesztés mérése](temak/07-02-az-mi-tamogatott-szoftverfejlesztes-merese.md)
- [7.3 Metrikainfláció és a minőségi hígulás kockázatai](temak/07-03-metrikainflacio-es-a-minosegi-higulas-kockazatai.md)
- [7.4 Az eredménytelemetria mint az új sarkcsillag](temak/07-04-az-eredmenytelemetria-mint-az-uj-sarkcsillag.md)

### 8. rész: Metrikaprogram felépítése
- [8.0 Bevezetés](temak/08-00-metrikaprogram-felepitese.md)
- [8.1 Mérnöki metrikák dashboardjának tervezése](temak/08-01-mernoki-metrikak-dashboardjanak-tervezese.md)
- [8.2 Eszköztáj: építés vagy vásárlás](temak/08-02-eszkoztaj-epites-vagy-vasarlas.md)
- [8.3 Metrikák bevezetése félelemkeltés nélkül](temak/08-03-metrikak-bevezetese-felelemkeltes-nelkul.md)
- [8.4 Érettségi modell mérnöki metrikaprogramokhoz](temak/08-04-erettsegi-modell-mernoki-metrikaprogramokhoz.md)
- [8.5 Fokozatos bevezetési ütemterv](temak/08-05-fokozatos-bevezetesi-utemterv.md)

### 9. rész: Függelékek
- [9.0 Függelékek](temak/09-00-fuggelekek.md)
- [9.1 Szószedet](temak/09-01-szoszedet.md)
- [9.2 Metrikadefiníciók és képletek kézikönyve](temak/09-02-metrikadefiniciok-es-kepletek-kezikonyve.md)
- [9.3 Ellenőrzőlisták](temak/09-03-ellenorzolistak.md)
- [9.4 Sablonok](temak/09-04-sablonok.md)
- [9.5 Önértékelés az érettségről](temak/09-05-onertekeles-az-erettsegrol.md)
- [9.6 Források és ajánlott olvasmányok](temak/09-06-forrasok-es-ajanlott-olvasmanyok.md)
- [9.7 Tárgymutató](temak/09-07-targymutato.md)

## Átfogó témák

[Goodhart törvénye](https://en.wikipedia.org/wiki/Goodhart%27s_law) minden témán átível: az a mérték, amely céllá válik, megszűnik jó mérték lenni, ezért itt minden metrikacsalád a saját kijátszási vektorával és védőkorlátjával érkezik. A könyv mindenütt az eredményeket részesíti előnyben a kibocsátással és a tevékenységgel szemben. A kormányzati és vállalati jelentési kötelezettségeket tervezési bemenetként kezeli, nem utólagos teherként, a generatív MI térnyerését pedig okként arra, hogy újragondoljuk, mit jelentenek ezek a metrikák, nem csupán egy új oszlopként a dashboardon.

## A témákon túl

- **[Példák](peldak/attekintes.md):** kicsi, konkrét példák a könyv gondolatainak használatára.
- **[A projektről](projekt/attekintes.md):** hogyan készül, hogyan ellenőrzik és hogyan jelenik meg a könyv.
- **[Hozzájárulás](hozzajarulas/attekintes.md):** hogyan segíthetsz, és melyek a stílusszabályok.
