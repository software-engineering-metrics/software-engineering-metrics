# 5.1 Kiszökött hibák aránya és minőségi kiszökések

## Áttekintés és indíték

A **kiszökött hibák aránya** azokat a hibákat méri, amelyek eljutnak az éles rendszerbe, és valódi felhasználókat érintenek, szemben azokkal, amelyeket korábban elkap a tesztelés, a kódáttekintés vagy a statikus elemzés, és ezekről mind a könyv 4. része szól. A különbség óriási: a kódáttekintésen elkapott hiba percek alatt kijavítható, és egyetlen felhasználó sem látja. Ugyanez a hiba, ha kiszökik az éles rendszerbe, órákig tartó incidenskezelésbe, valódi ügyfélkárba és a bizalom mérhető csorbulásába kerülhet. Ez a metrika valóságos értelemben a 4. rész minden témájának végső eredménykártyája: ha a kiszökött hibák aránya nő, miközben a belső minőségi metrikák (bonyolultság, lefedettség, statikus elemzés) erősek, az általában azt jelenti, hogy ezek a belső jelek nem azokat a hibamódokat fogják meg, amelyek a valódi felhasználóknak számítanak.

Ez a téma olyan komolyan kezeli a kiszökött hibákat, amilyet a költségük megérdemel, de ellenáll a kísértésnek, hogy a nyers darabszámot egyszerű eredményjelzőnek tekintse. Nem minden hiba egyforma: egy ritkán nézett súgószöveg elírása és egy pénzügyi tranzakciós rendszer adatsérülési hibája technikailag egyaránt kiszökött hiba, és ha egyformán kezeljük őket, a metrika vagy túl zajos lesz ahhoz, hogy cselekedni lehessen belőle, vagy, ami rosszabb, aktívan félrevezet arról, hol van a valódi kockázat. A téma fő ajánlása, a súlyosság szerint súlyozott követés a hibák besorolására fordított gondos figyelemmel, közvetlenül erre a problémára céloz.

Nagy csapatoknál a kiszökött hibák aránya a könyv belső mérnöki metrikái és az 5. rész egészét foglalkoztató, ügyfelek felé forduló világ egyik legvilágosabb hídja. A nagyvállalatok ezzel indokolják a 4. rész tesztelési és áttekintési gyakorlataiba fektetett befektetést. A közszférában, ahol egy kiszökött hiba hibás ellátásszámítást vagy sikertelen közszolgáltatási interakciót jelenthet, a metrika a közbizalom és a jogi kitettség közvetlen mércéje, nem csupán belső mérnöki statisztika.

## Alapelvek

- **A kiszökött hibák aránya a belső minőségi gyakorlat végső eredménykártyája.** Ha az arány nő, miközben a 4. rész metrikái erősek, akkor azok a metrikák nem fogják meg azt, ami számít.
- **A súlyosság fontosabb a nyers darabszámnál.** A hibákat a tényleges ügyfél- vagy üzleti hatás szerint súlyozd, ne kezelj minden kiszökést egyformán.
- **A besorolás következetessége alapvető.** Ha két csapat másként sorolja be a súlyosságot, a számaik nem hasonlíthatók össze tisztességesen.
- **Ez a metrika ki van téve a definíció kijátszásának**, pontosan úgy, mint a változtatási hibaarány (2.10 téma): ha leszűkíted, mi számít „hibának", az szépíti a számot, de nem csökkenti a valódi ügyfélkárt.
- **A kiváltó ok szerinti kategorizálás a darabszámból diagnosztikai eszközt csinál.** Ha tudjuk, *miért* szöknek ki a hibák, azzal többet kezdhetünk, mint ha csak azt tudjuk, hányan.

## Ajánlások

### Súlyozd a kiszökött hibákat súlyosság szerint, következetes, dokumentált skálával

Minden kiszökött hibát rögzített súlyossági skálán (jellemzően kritikus, súlyos, kisebb, vagy számozott megfelelője) sorolj be a tényleges ügyfél- vagy üzleti hatás alapján: az adatvesztés vagy -sérülés, a biztonsági kitettség és egy funkció teljes elérhetetlensége a skála tetején áll, a funkcionális hatás nélküli kozmetikai hiba az alján. Súlyozott trendet kövess, ne csak nyers darabszámot, hogy a kisebb hibák hulláma ne nyomja el vizuálisan a kritikusak kisebb, de sokkal súlyosabb növekedését.

### Egységesítsd a besorolási szempontokat a csapatok között

Ha a csapatok egymástól függetlenül sorolják be a súlyosságot, eltérő mércék felé sodródnak, egyesek óvatosabbak, mások engedékenyebbek. Ez értelmetlenné teszi a csapatok közötti összehasonlítást, és ami rosszabb, ösztönzést teremt arra, hogy a csapat nagyvonalúan lefelé sorolja a hibákat, hogy a saját számai jobban nézzenek ki (az 1.2 téma definíciókijátszásának egyik változata). Tegyél közzé világos, példákon alapuló besorolási szempontokat, és időnként auditálj egy mintát a besorolásokból a csapatok között, hogy ellenőrizd az egységességet.

### Követd a [kiváltó okot](https://en.wikipedia.org/wiki/Root_cause_analysis), ne csak a darabszámot és a súlyosságot

Minden kiszökött hibánál jegyezd fel, miért szökött ki: tesztelési hiány, kimaradt szélsőeset a követelményekben, környezeti eltérés az előkészítő és az éles rendszer között, vagy egy áttekintés, amely elnézte a problémát. Az idő során összesítsd ezeket a kiváltóok-adatokat, hogy rendszerszintű mintákat találj. Ha egy bizonyos kategória (mondjuk a környezeti eltérésből adódó hibák) uralja a kiszökéseket, az közvetlenül egy konkrét, javítható folyamathiányra mutat, nem pedig egy általános, homályos felszólításra, hogy „teszteljünk többet".

### Kösd vissza a kiszökött hibákat a belső minőségi jelekhez, amelyekből származnak

Ahol lehetséges, vezess vissza egy kiszökött hibát arra a kódrészre, ahonnan jött, és nézd meg, mutatott-e az a rész figyelmeztető jeleket a 4. rész metrikáiban: bonyolultsági hotspot volt-e (4.1 téma, 4.3 téma), alacsony volt-e a mutációs elkapási aránya (4.2 téma), jelzett-e valamit a közelében a statikus elemzés (4.4 téma). Ez a kapcsolat igazolja, hogy a belső minőségi metrikáid valóban előre jelzik-e a valódi, ügyfelek által látott hibákat, vagy olyasmit mérnek, ami a te környezetedben nem függ össze azzal, amit az ügyfelek tapasztalnak.

### Ügyelj arra, hogy a hibabesorolás ne váljon felelősségre vonássá

A hibák kiváltóok-elemzését kifejezetten rendszerkérdésként keretezd, az 1.1 téma diagnosztikai szemléletének megfelelően, ne egyéni felelősségre vonásként. Az a csapat, amely a kiszökött hiba miatt a felelősségre vonástól tart, erősen érdekelt abban, hogy alulnyilvánítson, lefelé sorolja be a hibát, vagy ellenálljon az alapos kiváltóok-elemzésnek, és ezek mind éppen azokat az adatokat rontják el, amelyekre ez a téma épül. A hibáztatásmentes utólagos elemzés gyakorlata, amelyről a 6.2 téma részletesebben szól, itt közvetlenül alkalmazható.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nyers kiszökött hibaszám | Egyszerű jelenteni | Egyformán kezel egy elírást és egy adatsérülési hibát; zajos és félrevezető |
| Súlyosság szerint súlyozott követés | Pontosabban tükrözi a tényleges ügyfélhatást | Következetes, fegyelmezett besorolást igényel |
| Csapatfüggetlen besorolási szabványok | Rugalmas, kevés egyeztetést igényel | A csapatok között összehasonlíthatatlan számokat ad; engedékeny sodródásra hív |
| Egységesített, auditált besorolás | Tisztességes, összehasonlítható, ellenáll a kijátszásnak | Folyamatos irányítást és időszakos auditmunkát igényel |

A központi feszültség a **helyi rugalmasság és a csapatok közötti összehasonlíthatóság** között húzódik. Ha minden csapat úgy sorolja be a hibák súlyosságát, ahogy a saját környezetének megfelel, azt egyszerűbb bevezetni, de a kapott számok szervezeti szinten nem hasonlíthatók össze és nem összesíthetők tisztességesen, és csendes ösztönzést adnak a csapatnak, hogy nagyvonalúan sorolja be a hibákat a saját metrikái védelmében. Oldd fel a feszültséget úgy, hogy egységesített, dokumentált besorolási szempontokba és időszakos csapatok közötti auditokba fektetsz be. Ezt a governance-munkának (1.4 téma) tekintsd, amely megéri a ráfordítást, mert ez a metrika olyan közvetlenül kapcsolódik a valódi ügyfélhatáshoz.

## Kérdések a csapattal való megbeszéléshez

1. **Súlyosság szerint követjük a kiszökött hibákat, vagy a nyers darabszám egy apró kozmetikai hibát ugyanúgy kezel, mint egy kritikus adatproblémát?** Nézd meg a tényleges dashboardot. Ha a súlyozás még nincs meg, ez a téma legnagyobb értékű ajánlott változtatása.

2. **Két különböző csapat ugyanúgy sorolná be ugyanannak a hibának a súlyosságát, vagy a besorolás szétcsúszott a szervezetben?** Válassz egy valódi, régebbi, kétes hibát, kérd meg két különböző csapat képviselőjét, hogy egymástól függetlenül sorolják be, és őszintén vessétek össze az eredményeket.

3. **Mi a kiszökött hibák leggyakoribb kiváltó oka, és a jelenlegi folyamatunk valóban kezeli, vagy csak az egyes incidensekre reagálunk, ahogy jönnek?** Összesítsd az elmúlt hónapok kiváltóok-adatait, és keresd a domináns mintát.

4. **Visszavezethetők-e a kiszökött hibáink olyan területekre, amelyeket a belső minőségi metrikáink (bonyolultság, lefedettség, statikus elemzés) már kockázatosnak jeleztek?** Ez a kapcsolat igazolja, hogy a 4. rész metrikái a te környezetedben valóban előrejelzők, vagy elkerülik azokat a hibamódokat, amelyek igazán számítanak.

5. **A hibabesorolási folyamatunk biztonságosnak érződik, vagy a mérnökök félnek a felelősségre vonástól, amikor olyan hibát jelentenek vagy sorolnak be, amelyhez közük van?** A hibáztatásra hajlamos kultúra rendszerszinten rontja ezeket az adatokat az alulnyilvánítással és az engedékeny besorolással. Légy őszinte a jelenlegi kultúrátokkal kapcsolatban.

6. **Előfordult-e, hogy a kiszökött hibák aránya gyanúsan gyorsan javult, miközben a tesztelési vagy áttekintési gyakorlat nem változott?** A változtatási hibaaránynál (2.10 téma) leírtakhoz hasonlóan ez a legvilágosabb jele annak, hogy a besorolási szempontok mozdultak el, nem a valódi kockázat.

## Ágazati szemszög

**Startup.** A formális súlyossági besorolás gyakran fölösleges, ha kevés a hiba, és a kis csapat mindegyiket közvetlenül meg tudja beszélni. Érdemes korán kialakítani azt a szokást, hogy a hibákat az elejétől következetesen követjük, akár informálisan is, hogy meglegyenek a korábbi adatok, amikor a csapat annyira megnő, hogy formálisabb elemzésre van szükség.

**Kisvállalkozás.** Egy egyszerű, közös súlyossági skála, akár csak három szinttel (kritikus, súlyos, kisebb), amelyet következetesen alkalmaz mindenki, aki az ügyfélszolgálatot és a hibák szűrését végzi, megszerzi a téma értékének nagy részét kifinomult eszközök vagy külön minőségbiztosítási funkció nélkül.

**Nagyvállalat.** Itt a csapatok közötti besorolási következetesség a legnagyobb hatású befektetés, mert több tucat csapat eltérő mércéi értelmetlenné teszik a szervezetszintű minőségi összehasonlítást. Fektess be dokumentált, példákon alapuló besorolási szempontokba és időszakos auditálásba, és kösd vissza a kiszökött hibákat rendszeresen a 4. rész belső minőségi jeleihez, hogy igazolni tudd, a szervezetednél ezek közül melyek az igazán előrejelzők.

**Közszféra.** Egy közszolgáltatási vagy ellátásszámítási rendszerben kiszökött hiba a mérnöki költségén túl jogi és közbizalmi súllyal is bír. Az állampolgári szolgáltatásokat érintő hibák súlyosságát különösen szigorúan sorold be, és számíts rá, hogy a besorolási döntések külső vizsgálat elé kerülhetnek. Ez erős érv a dokumentált, auditált, egységes szempontok mellett az eseti megítélésekkel szemben.

## Példák

**Nagyvállalat.** Egy előfizetéses szoftvercég kiszökött hibáinak száma két negyedéve nőtt, és az első aggodalom a nyers számra irányult. A súlyosság szerinti elemzés megmutatta, hogy a növekedés szinte teljes egészében kisebb, kozmetikai hibákból állt, egybeesve egy friss felhasználói felület-újratervezéssel, míg a kritikus és súlyos hibák száma ugyanebben az időszakban kissé csökkent. A kisebb hibák hullámának kiváltóok-elemzése a vizuális regressziós tesztelés hiányára mutatott, kifejezetten az új felületi komponenseknél. Ez célzott, olcsó javítás volt, amely teljesen elkerülte volna a figyelmet, ha a csapat a nyers, súlyozatlan számra differenciálatlan minőségi válságként reagált volna.

**Közszféra.** Egy amerikai állam munkanélküli-ellátási rendszerének ellátásszámításában kiszökött egy hiba, amely hónapokon át tévesen elutasította az egyébként jogosult kérelmek kis százalékát, mielőtt észrevették. A kiváltóok-vizsgálat kiderítette, hogy a hiba egy olyan kódrészből indult, amelyet egy tizennyolc hónappal korábbi belső minőségi felülvizsgálat bonyolultsági hotspotként (4.1 téma, 4.3 téma) már megjelölt, de a hotspotot sosem tették a javítás prioritásává, mert még nem történt hiba, amely konkréttá tette volna a kockázatot. Az ügynökség felülvizsgált folyamata ma már kifejezetten magasabb tesztelési és áttekintési prioritást ad a hotspotként megjelölt területeknek, éppen a belső bonyolultsági jelek és a valódi kiszökött hibakockázat közötti igazolt kapcsolat miatt.

## Üzleti érv: indítékok, ROI és TCO

A kiszökött hibák arányának szigorú követése, súlyozással és kiváltóok-elemzéssel, azt a képességet adja, hogy a minőségi befektetést oda irányítsuk, ahol valóban csökkenti az ügyfeleket érő kárt, ahelyett, hogy egy differenciálatlan számra reagálnánk, amely válogatás nélkül keveri az apró és a súlyos problémákat. Az előfizetéses szoftvercég fenti példája ezt jól mutatja: a nyers számra adott válasz széles, fókusz nélküli minőségi kezdeményezést indított volna, míg a súlyozott, kiváltóok-alapú válasz egy konkrét, olcsó, célzott javítást azonosított.

A teljes birtoklási költség tartalmazza a besorolási fegyelmet (következetes szempontok, időszakos auditok) és a kiváltóok-követés ráfordítását, amelyek elsősorban folyamatbeli befektetések, nem eszközköltségek. Ez a befektetés közvetlenül megtérül az elkerült ügyfélkárban és incidenskezelési költségben, mert a minőségi erőfeszítés a kiszökött hibák kockázatának tényleges, igazolt forrásaira irányul.

## Antiminták és buktatók

- **A nyers hibaszám kezelése metrikaként:** összemossa az apró és a súlyos problémákat, és elfedi a valódi jelet.
- **Következetlen súlyossági besorolás a csapatok között:** értelmetlenné teszi a csapatok közötti összehasonlítást, és engedékeny besorolási sodródásra hív.
- **Kiváltóok-követés hiánya:** a számból diagnosztikai érték nélküli szám lesz, a rendszerszintű minták pedig láthatatlanok maradnak.
- **Hibáztatásra hajlamos jelentési kultúra:** az alulnyilvánítással és az engedékeny besorolással rontja az adatokat, éppen azt az ösztönzési kitettséget, amelyre az 1.2 téma figyelmeztet.
- **A kiszökött hibák sosem kötődnek vissza a belső minőségi jelekhez:** elvész a lehetőség, hogy a 4. rész előrejelző metrikáit a valódi eredményekhez mérve igazoljuk vagy megcáfoljuk.
- **Gyanúsan gyors javulás mögött folyamatváltozás nélkül:** a legvilágosabb jele annak, hogy a besorolási szempontok változtak, nem a valódi kockázat.

## Érettségi modell

- **1. szint, Kezdeti:** A kiszökött hibákat, ha egyáltalán, nyers darabszámként követik, súlyozás és kiváltóok-elemzés nélkül.
- **2. szint, Fejlődő:** Van némi súlyossági besorolás, de a mércék csapatonként eltérnek, és a kiváltóok-követés következetlen.
- **3. szint, Szabványosított:** A súlyossági besorolás szervezetszerte egységes és dokumentált, a kiváltóok szerinti kategorizálást következetesen alkalmazzák.
- **4. szint, Irányított:** A kiszökött hibákat rendszeresen visszavezetik a belső minőségi jelekhez, hogy igazolják azok előrejelző értékét, és a besorolás következetességét időszakosan auditálják.
- **5. szint, Összehangolt:** A szervezet konkrét, mérhető csökkenést tud felmutatni a kiszökött hibák arányában, amely célzott, kiváltóok-alapú minőségi befektetésre vezethető vissza, és amelyet a belső minőségi jelekhez képest igazoltak.

## Ötletek a vitához

1. A múlt negyedév legfontosabb kiszökött hibáját egy másik csapat ugyanúgy sorolta volna be?
2. Mi a kiszökött hibák leggyakoribb kiváltó oka, és valóban foglalkozunk vele?
3. Előfordult-e, hogy egy kiszökött hiba olyan területre vezetett vissza, amelyet a belső metrikáink már megjelöltek?
4. A csapatunk biztonságban érzi magát, amikor egy általa okozott hibát jelent és őszintén besorol?
5. Mit mutatna meg a jelenlegi hibaszámunk súlyozott nézete, amit a nyers szám elrejt?

## A legfontosabb tanulságok

- A kiszökött hibák aránya a belső minőségi gyakorlat **végső eredménykártyája**. Ha az arány nő, miközben a 4. rész metrikái erősek, azok a metrikák nem fogják meg, ami számít.
- **Súlyosság szerint súlyozz**, következetes, dokumentált, auditált besorolási skálával, soha ne csak nyers darabszámmal.
- Kövesd a **kiváltó okot**, ne csak a darabszámot és a súlyosságot, hogy a metrikából valódi diagnosztikai eszköz legyen.
- **Kösd vissza a kiszökött hibákat a belső minőségi jelekhez** (bonyolultság, lefedettség, statikus elemzés), hogy igazold, valóban előrejelzők-e.
- Védekezz a **hibáztatásra hajlamos kultúra** ellen, amely az alulnyilvánítással és az engedékeny sodródással rontja a jelentést és a besorolást.

## Források és ajánlott olvasmányok

- *Site Reliability Engineering*, szerkesztők: Betsy Beyer, Chris Jones, Jennifer Petoff és Niall Richard Murphy (a hibáztatásmentes utólagos elemzés gyakorlata, amely a hibák kiváltóok-elemzésére is alkalmazható).
- *Accelerate: The Science of Lean Software and DevOps*, szerző: Nicole Forsgren, Jez Humble és Gene Kim (a szállítási gyakorlatok és a minőségi eredmények kapcsolata).
- *Code Complete*, szerző: Steve McConnell (hibabesorolási és kiváltóok-elemzési gyakorlatok).
- *The Field Guide to Understanding Human Error*, szerző: Sidney Dekker (a hibák kivizsgálásának rendszerszemléletű, hibáztatásmentes keretezése).
