# 4.3 Kódfluktuáció és hotspot-elemzés

## Áttekintés és indíték

A **kódfluktuáció** azt méri, milyen gyakran változik egy fájl vagy modul az idő
során: a hozzáadott, módosított és törölt sorokat az egymást követő commitokon át. Önmagában
a fluktuáció meglehetősen gyenge jel: egyes fájlok azért változnak gyakran, mert aktív,
egészséges fejlesztés alatt állnak, mások pedig azért változnak ritkán, mert stabilak és
helyesek, nem azért, mert elhanyagolták őket. A téma megközelítésének valódi diagnosztikai
ereje abból jön, hogy a fluktuációt a bonyolultsággal (4.1 téma) kombináljuk: az a fájl,
amely egyszerre gyakran változik és erősen bonyolult, a **hotspot**, aránytalanul nagy
valószínűséggel hibaforrás és a csapat sebességét fékező tényező, és ezt az empirikus
kutatás következetesen megerősíti számos kódbázison és szervezetben.

A **hotspot-elemzés**, amelyet Adam Tornhill szoftveranalitikai munkája népszerűsített,
különösen azért értékes, mert nem igényel kézi felmérést vagy szubjektív ítéletet a
céljai megtalálásához. A [verziókezelő](https://en.wikipedia.org/wiki/Version_control)
előzményei már tartalmaznak mindent, ami a fluktuáció, és a statikus elemző eszközökkel
kombinálva a bonyolultság kiszámításához kell a kódbázis minden fájljára,
automatikusan. Ez lehetővé teszi egy csapatnak vagy szervezetnek, hogy valódi
bizonyítékkal, nem anekdotával vagy egy retrospektíven a leghangosabb panasszal
azonosítsa, a kódbázis pontosan melyik kis hányada érdemel először refaktorálási
figyelmet.

Nagy csapatoknál a hotspot-elemzés valódi allokációs problémát old meg: egy több százezer
soros kódbázis sokkal több kódot tartalmaz, mint amennyit bármelyik csapat átfogóan
refaktorálni megengedhet magának, és az intuíció arról, hol vannak a legrosszabb
problémák, gyakran téves, torzítja az, hogy ki panaszkodott legutóbb, vagy hogy melyik
fájlt nem szereti egy senior mérnök. A nagy, hosszú életű kódbázisokat kezelő
nagyvállalatok és közszféra szervezetek erre az adatvezérelt rangsorolásra támaszkodnak,
hogy a valóban szűkös refaktorálási költségvetést oda irányítsák, ahol a legnagyobb
megtérülést hozza.

## Alapelvek

- **A fluktuáció önmagában gyenge jel; a bonyolultsággal kombinálva erős.** A
  kombináció, nem önmagában bármelyik metrika azonosít valódi hotspotot.
- **A hotspot-elemzés nem igényel kézi felmérést.** A verziókezelő előzményei már
  tartalmaznak mindent, ami az automatikus kiszámításához kell.
- **A hotspot rangsorolási jel, nem automatikus ítélet.** Az emberi ítélőképesség még
  mindig szükséges annak eldöntéséhez, milyen intézkedést érdemel egy konkrét hotspot.
- **A gyakori változás önmagában nem rossz.** Némi fluktuáció egészséges, aktív
  fejlesztést tükröz, nem minőségi problémát.
- **Ez az elemzés pontosan ott skálázódik, ahol az intuíció csődöt mond:** a nagy
  kódbázisokban, amelyeket egyetlen ember sem tud áttekinteni és érzésre rangsorolni.

## Ajánlások

### A fluktuációt és a bonyolultságot együtt számold, és a kombinációjuk szerint rangsorolj

Nyerd ki a fájlonkénti változásgyakoriságot a verziókezelő előzményeiből egy érdemi
időablakra, jellemzően hat hónaptól egy évig, és párosítsd ugyanazon fájlok
bonyolultsági mérőszámával (4.1 téma). A fájlokat a kombináció szerint rangsorold,
általában a fluktuáció és a bonyolultság szorzata szerint, ne bármelyik metrika szerint
önmagában, mert ezt a kombinációt társítja a mögöttes kutatás következetesen a megnövekedett
hibaaránnyal és karbantartási költséggel.

### A legfontosabb hotspotokat emberi ítélőképességgel vizsgáld meg, mielőtt cselekszel

A rangsorolt hotspotlista figyelemre érdemes jelölteket azonosít, nem automatikus
teendőlistát. Minden legfontosabb hotspotot emberi szemmel vizsgálj meg: valóban rosszul
tervezett kód, amelyet refaktorálni kell, vagy olyan fájl, amelynek jogosan kell gyakran
változnia, mert az aktív, fejlődő üzleti logika közepén áll, és ebben az esetben a
prioritás inkább jobb tesztek vagy világosabb dokumentáció lehet, nem szerkezeti
újraírás. Ez tükrözi a 4.1 téma lényegi és véletlen bonyolultság közötti
megkülönböztetését, itt a kombinált fluktuáció-bonyolultság jelre alkalmazva.

### Vesd össze a hotspotokat az incidens- és hibaadatokkal

Ahol lehetséges, ellenőrizd, hogy az azonosított hotspotok korrelálnak-e a tényleges
éles incidensekkel (6.2 téma) vagy a kiszökött hibák adataival (5.1 téma). Az erős
korreláció validálja a hotspot-elemzést mint valóban előrejelző elemzést a konkrét
kódbázisodra, és megerősíti az arra való cselekvés üzleti érvét; a gyenge vagy hiányzó
korreláció vagy adatminőségi problémára utal, vagy arra, hogy a fluktuáció és a
bonyolultság a te konkrét környezetedben nem a megfelelő jelkombináció a rangsoroláshoz.

### Kövesd a hotspot trendjét az egymást követő elemzéseken át, ne csak egyetlen pillanatképet

Futtasd újra időnként a hotspot-elemzést, a negyedéves gyakori, és kövesd, hogy a
korábban azonosított hotspotok javulnak, romlanak vagy megoldódtak-e, és hogy újak
bukkannak-e fel. Az a hotspot, amely több elemzési cikluson át megmarad, annak ellenére,
hogy ismételten megjelölték, vagy arra utal, hogy a javítási erőfeszítést nem ténylegesen
alkalmazták, vagy arra, hogy egy korábbi javítási kísérlet nem a valódi mögöttes
problémát kezelte.

### A hotspot-adatot a csapatszintű rangsorolási beszélgetések tájékoztatására használd, ne helyettesítésére

A hotspot-elemzést bizonyítékként mutasd be egy rangsorolási megbeszélésen, ne olyan
automatikus megbízásként, amely felülírja a csapat saját, kontextuális ítéletét arról,
mi számít most a legtöbbet. Egy csapatnak jó, jogos okai lehetnek arra, hogy átmenetileg
háttérbe szorítson egy ismert hotspotot, például egy közelgő tervezett újraírás miatt a
növekményes refaktorálás elpazarolt erőfeszítés lenne, és az elemzésnek ezt a
beszélgetést kell tájékoztatnia, nem helyettesítenie.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Intuícióalapú rangsorolás | Gyors, nem igényel eszközt, kihasználja a csapat kontextuális tudását | Torzítja a frissesség, a személyes preferencia és az, hogy ki panaszkodik a leghangosabban |
| Csak fluktuáció | Egyszerű kiszámítani | Önmagában gyenge jel; a gyakori változás önmagában nem rossz |
| Fluktuáció bonyolultsággal kombinálva (hotspot-elemzés) | Erős, bizonyítékalapú, a meglévő adatokból automatikus | Két adatforrás kombinálását és az eredmények ítélőképességgel való értelmezését igényli |
| Incidensadatokkal összevetett hotspot-elemzés | Validált, a legerősebb bizonyíték a rangsoroláshoz | Megbízható incidens-kód kapcsolatot igényel, amellyel nem minden szervezet rendelkezik |

A központi feszültség a **bizonyíték és a kontextus között** húzódik. A hotspot-elemzés
objektív, skálázható bizonyítékot ad, amelyet az intuícióalapú rangsorolás nem tud
megközelíteni egy nagy, ismeretlen vagy hosszú életű kódbázis méreténél, de hiányzik
belőle a csapat kontextuális ítélete arról, miért számít vagy nem számít egy adott
hotspot éppen most. A feszültséget úgy oldd fel, hogy a hotspot-elemzést a rangsorolási
beszélgetés bizonyítékbázisának tekinted, a csapat saját, időzítésről és kompromisszumokról
szóló kontextuális ítéletével kombinálva, azt soha nem helyettesítve.

## Kérdések a csapattal való megbeszéléshez

1. **Melyek a legfontosabb öt hotspotunk a fluktuáció és a bonyolultság kombinációja
   szerint rangsorolva, és megegyezne-e ez a rangsor a csapatunk intuíciójával arról,
   hol vannak a legrosszabb problémáink?** Futtasd az elemzést, és hasonlítsd össze az
   eredményt azzal, amit a csapatod az adat látása előtt tippelt volna; az eltérések
   gyakran a legértékesebb megállapítások.

2. **Az azonosított hotspotjaink korrelálnak-e a tényleges éles incidensekkel vagy
   a kiszökött hibák adataival?** Ha megvan az adatod ennek ellenőrzéséhez, tedd meg
   közvetlenül; ha nincs, ez a hiány önmagában megnevezendő, mint dolog, amely felé
   építkezni kell.

3. **A jelenlegi legfontosabb hotspotunknál a mögöttes probléma lényegi bonyolultság,
   amely jogosan igényel gyakori változtatást, vagy véletlen bonyolultság, amelyet
   egy refaktor valóban megjavíthat?** Járjátok végig együtt a fájlt, és hozzátok meg
   kifejezetten ezt az ítéletet, ahelyett, hogy bármelyik választ feltételeznétek.

4. **Megmaradt-e egy korábban azonosított hotspot több elemzési cikluson át annak
   ellenére, hogy megjelölték?** Ha igen, vizsgáld meg őszintén, miért: a javítást soha
   nem kísérelték meg valójában, vagy egy korábbi kísérlet nem a valódi mögöttes okot
   kezelte.

5. **A refaktorálási munkát jelenleg bizonyíték alapján rangsoroljuk, vagy aszerint,
   hogy ki panaszkodott legutóbb vagy leghangosabban?** Légy őszinte a csapatod
   tényleges jelenlegi rangsorolási folyamatáról, és arról, hogyan viszonyul ahhoz, amit
   egy bizonyítékalapú hotspot-elemzés javasolna.

6. **Mibe kerülne nekünk hibaarányban vagy szállítási lassulásban, ha a jelenlegi
   legfontosabb hotspotunkat még egy évig kezeletlenül hagynánk?** Ez a kérdés konkrét
   költségbecslést kényszerít ki, amely egy rangsorolási döntés horgonya lehet, ahelyett,
   hogy a hotspot elvont, könnyen háttérbe szorítható aggály maradna.

## Ágazati szemszög

**Startup.** A formális hotspot-elemzés általában szükségtelen egy kis, fiatal
kódbázisnál, amelyet az egész csapat még közösen a fejében tart. A technika konkrétan
akkor válik értékessé, amikor a kódbázis kinőtt abból a méretből, ahol bármelyik ember
megbízhatóan fel tudja ismerni a legrosszabb területeket csak emlékezetből, gyakran a
tartós növekedés első egy-két évében.

**Kisvállalkozás.** Ingyenes vagy olcsó eszközök minimális beállítással közvetlenül
kinyerhetik a fluktuációs adatot a meglévő verziókezelő előzményeiből; kombináld azzal a
bonyolultsági adattal, amelyet a meglévő linted vagy statikus elemző eszközöd már jelent,
ahelyett, hogy ekkora léptéknél dedikált kereskedelmi hotspot-elemző szoftverbe fektetnél.

**Nagyvállalat.** A hotspot-elemzés az, ahol a bizonyítékalapú rangsorolás a legtöbb
megtérülést hozza, mert az intuíció valóban csődöt mond egy több száz szolgáltatást és
több ezer fájlt átfogó kódbázis méreténél. Fektess be abba, hogy ezt az elemzést
rendszeresen futtasd a teljes kódbázison, és vesd össze az incidensadatokkal, hogy
validált, védhető érvet építs a refaktorálási beruházásra.

**Közszféra.** A hosszú életű, olykor évtizedes rendszerek természetes jelöltek a
hotspot-elemzésre, mert a felhalmozott verziókezelő előzmények gazdag, hosszú távú jelet
adnak arról, a rendszer mely részei bizonyultak valóban problémásnak az idők során. Ez a
bizonyítékalapú megközelítés egyben meggyőző, konkrét eszköz a modernizációs beruházás
indoklására az olyan érdekelt feleknek, akiknek egy mérnök informális véleményénél több
kell a finanszírozás jóváhagyásához.

## Példák

**Nagyvállalat.** Egy biztosítótársaság kárfeldolgozó platformján, amely több mint két
millió kódsort ölelt fel több tucat szolgáltatásban, évekig gyűltek az informális
panaszok arról, hogy „a kárérvényesítő modul” problémás, de ezekből a panaszokból soha
nem következett formális rangsorolás. Egy hotspot-elemzés, amely hat hónapnyi fluktuációs
adatot kombinált bonyolultsági pontszámokkal, egy teljesen más fájlt azonosított
tényleges legfontosabb hotspotként: egy megosztott pénznemváltó segédprogramot, amely mélyen
egy ritkán tárgyalt függőségben rejtőzött, és amely soha nem merült fel egyetlen
retrospektív panaszban sem. Az incidensadatokkal való összevetés megerősítette, hogy ez a
segédprogram az előző évben a pénzügyi számítási hibák aránytalan hányadában érintett volt,
és ennek a konkrét segédprogramnak a célzott refaktorálása, nem a modulé, amelyet
mindenki informálisan hibáztatott, a kapcsolódó incidensek mérhető csökkenését hozta a
következő negyedévben.

**Közszféra.** Egy állami járműnyilvántartó ügynökség évtizedes engedélyezési rendszerén
hotspot-elemzést végeztek egy modernizációs üzleti érv részeként. Az elemzés a fájlok
egy kis csoportját azonosította, amely a teljes kódbázis 3%-ánál kevesebbet képviselt,
mégis a fluktuáció és a bonyolultság aránytalan részéért felelt, és az ügynökség
incidensnaplójával való összevetés megmutatta, hogy ugyanez a csoport adta az előző három
év összes jelentett rendszerhibájának közel 40%-át. Ez a konkrét, bizonyítékalapú
megállapítás, amely sokkal meggyőzőbb volt, mint az általános állítás, hogy „a rendszer
régi és modernizálni kell”, egy sikeres költségvetési kérelem központi eleme lett egy
célzott, növekményes modernizációs erőfeszítésre, amely kifejezetten erre a csoportra
összpontosított, a sokkal drágább teljes rendszercsere helyett.

## Üzleti érv: indítékok, ROI és TCO

A hotspot-elemzés megtérülése a célzott, bizonyítékalapú beruházás: a fenti mindkét
példa olyan esetet mutat, amelyben a formális elemzés a refaktorálási figyelmet
elterelte attól, ahová az informális panasz irányította, és oda irányította, ahol az adat
szerint a probléma valóban élt, mérhetően jobb megtérülést hozva, mint egy célzatlan vagy
intuíció vezette beruházás.

A teljes birtoklási költség (TCO) alacsony, mert a fluktuációs adat közvetlenül a meglévő
verziókezelő előzményeiből származik, a bonyolultsági adat pedig általában már elérhető
a statikus elemző eszközökből (4.4 téma); a fő beruházás az időszakos elemzési
erőfeszítés és az emberi ítélőidő az eredmények értelmezéséhez és annak eldöntéséhez,
milyen intézkedést érdemel az egyes azonosított hotspot.

## Antiminták és buktatók

- **Csak fluktuáció használata bonyolultság nélkül:** önmagában gyenge jel, amely
  egészséges, aktívan fejlesztett kódot is hamis pozitívként jelölhet meg.
- **A hotspot-rangsor kezelése automatikus teendőlistaként emberi ítélőképesség
  nélkül:** elmulasztja a lényegi és véletlen megkülönböztetést, amely meghatározza a
  helyes választ.
- **A refaktorálás rangsorolása a leghangosabb panasz, nem a bizonyíték alapján:**
  gyakran eltéríti az erőfeszítést attól, ahol az adat szerint a probléma valóban él.
- **A hotspotok soha nem összevetése incidens- vagy hibaadatokkal:** elmulasztja a
  validálási lépést, amely megerősíti az elemzésre való cselekvés érvét.
- **Az elemzés egyszeri lefuttatása és soha nem ismétlése:** elmulasztja, hogy a javítási
  erőfeszítés idővel valóban működik-e.
- **Tartósan megjelölt hotspot figyelmen kívül hagyása annak vizsgálata nélkül, miért
  nem tartott a javítás:** elpazarolja az ismételt elemzés diagnosztikai értékét.

## Érettségi modell

- **1. szint, Kezdeti:** A refaktorálási prioritásokat intuíció vagy a panaszok
  hangereje határozza meg, fluktuációs vagy bonyolultsági adat nélkül.
- **2. szint, Fejlődő:** Néhány csapat informálisan ellenőrzi a fluktuációs vagy
  bonyolultsági adatot, de nincs következetes, szervezetszintű hotspot-elemzési
  gyakorlat.
- **3. szint, Szabványosított:** A fluktuációt és a bonyolultságot kombináló
  hotspot-elemzés rendszeresen fut, és következetesen tájékoztatja a refaktorálás
  rangsorolását az egész szervezetben.
- **4. szint, Irányított:** A hotspotokat összevetik az incidens- és hibaadatokkal az
  elemzés validálására, és az egymást követő ciklusok trendjét aktívan követik.
- **5. szint, Összehangolt:** A szervezet rá tud mutatni konkrét, mérhető hibaarány- vagy
  szállítási javulásokra a hotspot által tájékoztatott refaktorálási beruházásból, és az
  elemzés rutinszerű, megbízható bemenete a mérnöki beruházási döntéseknek.

## Ötletek a vitához

1. Hogyan nézne ki a legfontosabb hotspot-listánk, ha ma lefuttatnánk ezt az elemzést?
2. Egyezne vagy ellentmondana-e ez a lista a csapatunk jelenlegi informális érzetének a legrosszabb problémás területeinkről?
3. Megvan-e az adatunk a hotspotok tényleges incidensekkel való összevetéséhez?
4. Megmaradt-e egy ismert problémás terület a korábbi javítási kísérletek ellenére, és miért?
5. Mibe kerülne nekünk, ha a jelenlegi legfontosabb hotspotunkat még egy évig kezeletlenül hagynánk?

## A legfontosabb tanulságok

- A **bonyolultsággal kombinált fluktuáció** sokkal megbízhatóbban azonosít valódi
  hotspotokat, mint bármelyik metrika önmagában.
- A hotspot-elemzés **nem igényel kézi felmérést**; a meglévő verziókezelő és statikus
  elemzési adatokból automatikusan kiszámítható.
- A hotspot-rangsort **a rangsorolás bizonyítékaként** kezeld, nem automatikus
  ítéletként; az emberi ítélőképesség még mindig szükséges.
- **Vesd össze a hotspotokat az incidens- és hibaadatokkal,** hogy validáld az elemzést,
  és megerősítsd az arra való cselekvés érvét.
- Kövesd a hotspotokat **az egymást követő elemzési ciklusokon át,** hogy megerősítsd,
  a javítás valóban működik, ne csak egyszer, pillanatképként.

## Források és ajánlott olvasmányok

- *Your Code as a Crime Scene*, Adam Tornhill műve (a verziókezelő adataiból a
  fluktuációt és a bonyolultságot kombináló hotspot-elemzés alapműve).
- *Software Design X-Rays*, Adam Tornhill műve (további technikák a viselkedési
  kódelemzéshez a verziókezelő előzményeivel).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn
  Measures to Predict System Defect Density," *ICSE* (2005): empirikus kutatás a
  fluktuáció és a hibasűrűség kapcsolatáról.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler műve
  (technikák a véletlen bonyolultság kezelésére, miután azonosították).
