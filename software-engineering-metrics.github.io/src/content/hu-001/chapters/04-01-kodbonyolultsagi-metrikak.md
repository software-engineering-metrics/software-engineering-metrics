# 4.1 Kódbonyolultsági metrikák

## Áttekintés és indíték

A **[ciklomatikus komplexitás](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
amelyet Thomas J. McCabe vezetett be 1976-ban, megszámolja a kód vezérlési folyamatán
áthaladó független útvonalak számát: minden `if`, ciklus és elágazás növeli a számot.
Közel ötven évvel később is a legszélesebb körben használt kódbonyolultsági metrika,
olyan rokonai mellett, mint a kognitív komplexitás (amely a beágyazott és nehezen
követhető vezérlési folyamatot erősebben súlyozza, mint McCabe eredeti lineáris
számlálása) és a beágyazási mélység. Ezek a metrikák egy valódi, validált felismerést
osztanak: a több független útvonalat tartalmazó kódot nehezebb teljesen letesztelni,
nehezebb átlátni, és az évtizedes empirikus kutatás szerint mérhetően nagyobb
valószínűséggel tartalmaz hibákat.

Ez a téma valódi tisztelettel kezeli ezt a felismerést, és ugyanolyan komolysággal
kezeli a korlátait. A bonyolultsági metrikák a kód egy konkrét tulajdonságát mérik, és
egy kódbázis lehet egyszerű minden bonyolultsági metrika szerint, mégis rosszul
tervezett, rosszul elnevezett vagy fogalmilag összefüggéstelen olyan módon, amelyet
semmilyen elágazásszámláló algoritmus nem tud észlelni. Fordítva, néhány
visszavezethetetlenül összetett probléma megoldásához valóban összetett kód kell, és
az a csapat, amelyre nyomást gyakorolnak, hogy minimalizálja a bonyolultsági
pontszámot, olyan kódot állíthat elő, amely jól pontozódik, miközben valójában
nehezebben érthető, az alapvető bonyolultságot több fájlra és közvetett rétegre
szórva, ahelyett, hogy csökkentené.

Nagy csapatoknál a bonyolultsági metrikák triázs-eszközként érdemlik ki a helyüket:
módot adnak arra, hogy több ezer fájl közül megtaláljuk azt a kis részhalmazt,
amely a legnagyobb valószínűséggel jutalmazza a közelebbi vizsgálatot, nem pedig a
kódminőség önálló ítéleteként. Azok a nagyvállalatok és közszféra szervezetek,
amelyek olyan kódbázist tartanak fenn, amelyet egyetlen ember sem olvasott
végig, erre a triázs-funkcióra támaszkodnak, hogy a szűkös refaktorálási és
áttekintési erőfeszítést oda irányítsák, ahol a legtöbb hasznot hozza.

## Alapelvek

- **A bonyolultsági metrikák a tesztelés és a hibák nehézségét jelzik előre; nem
  közvetlenül a minőséget mérik.** Egy bemenetként kezeld, ne ítéletként.
- **A bonyolultsági pontszám elmosás útján is ki van téve a kijátszásnak, nem csak
  valódi egyszerűsítéssel.** A bonyolultság több fájlra szétosztása csökkentheti a
  pontszámot anélkül, hogy a kód valóban könnyebben érthető lenne.
- **Némi bonyolultság lényegi, nem véletlen.** Egy valóban nehéz probléma valóban
  összetett kódot igényelhet; a cél a véletlen bonyolultság minimalizálása, nem az
  összes bonyolultság válogatás nélküli megszüntetése.
- **A bonyolultsági metrikákat triázshoz használd, ne egyéni vagy csapat-
  eredménykártyaként.** Arra mutatnak, hová nézz, nem arra, kit hibáztass.
- **A trend és a kiugró értékek többet számítanak bármely abszolút küszöbnél.**
  Az emelkedő trend vagy egy szélsőséges kiugró érték cselekvésre késztetőbb, mint
  egyetlen, csapatszintű átlag.

## Ajánlások

### A bonyolultsági metrikákat az áttekintési és refaktorálási erőfeszítés triázsához használd

Futtass bonyolultsági elemzést a kódbázison, és az eredményekkel rangsorold, hol
térülne meg leginkább egy közelebbi emberi áttekintés vagy egy refaktorálási
beruházás: a kódbázis saját tipikus tartományánál jóval magasabb pontszámú
függvények vagy fájlok a legértékesebb helyek, ahová először érdemes nézni. Ez a
triázs-használat, annak megtalálása, hová nézz, a bonyolultsági metrikák
legvédhetőbb és legértékesebb alkalmazása, sokkal inkább, mint abszolút
megfelelt/megbukott kapuként használni őket.

### A küszöbértékeket a saját kódbázisodhoz viszonyítva állítsd be, ne univerzális számhoz

Az iparági konvencióból kritikátlanul átvett abszolút bonyolultsági küszöbök
(a tízes bonyolultsági pontszám gyakran idézett hüvelykujjszabály) túl engedékenyek
vagy túl szigorúak lehetnek a területedtől függően: egy elemző vagy egy
szabálymotor alapbonyolultsága jogosan lehet magasabb, mint egy tipikus CRUD
szolgáltatásé. A saját küszöbeidet a kódbázisod tényleges eloszlásához
kalibráld, és a küszöb túllépését kezeld jelzésként, hogy nézz közelebbről, ne
automatikus buildhibaként, hacsak a csapatod tudatosan nem választotta ezt a
szigorúbb szabályt a kompromisszumok teljes ismeretében.

### Figyeld a valódi egyszerűsítés nélküli felbontással történő kijátszást

A bonyolultsági pontszámok kijátszásának leggyakoribb módja az 1.2 téma
helyettesítéses mintázata erre a konkrét metrikára alkalmazva: egy valóban
összetett függvényt több kisebb függvényre bontanak, amelyek egyenként jól
pontozódnak, miközben a teljes rendszer ugyanolyan nehezen érthető marad, vagy
néha nehezebben érthetővé válik, mert a logika most több fájlra van szétszórva, köztük
több közvetett rétegekkel. Párosítsd a bonyolultsági metrikákat annak kvalitatív
áttekintésével, hogy a felbontás valóban tisztázta-e a kódot, vagy csak oda tette át
a bonyolultságot, ahol a metrika már nem láthatta.

### Reagálás előtt különböztesd meg a lényegi bonyolultságot a véletlentől

Mielőtt a magas bonyolultsági pontszámot javítandó problémaként kezelnéd, kérdezd
meg, hogy a mögöttes probléma valóban megkövetel-e ennyi független útvonalat, az
adószámítási logikának például jogosan sok ága van, vagy a bonyolultság elkerülhető
okokból ered: mélyen beágyazott feltételekből, amelyek ellaposíthatók, megkettőzött
logikából, amely összevonható, vagy nem egyértelmű felelősségi határokból, amelyek
újrahúzhatók. Csak a második kategória valódi minőségi probléma, amelynek
javítására ez a metrika ösztönözhet.

### Kövesd a trendet és a kiugró értékeket, ne csak egy pillanatnyi átlagot

A kódbázis egészére vonatkozó átlagos bonyolultsági pontszám kis mozgása ritkán
késztet önmagában cselekvésre; egy konkrét fájl bonyolultságának éles emelkedése
több változtatás során, vagy néhány szélsőséges kiugró érték egy egyébként jól
viselkedő kódbázisban sokkal hasznosabb jel. Kövesd mind az időbeli trendet, mind a
kiugró értékek farkát, és használd őket konkrét, célzott vizsgálat elindítására
széles, fókusz nélküli bonyolultságcsökkentő kezdeményezés helyett.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Abszolút univerzális küszöb | Egyszerű, következetes, könnyen automatizálható | Figyelmen kívül hagyja a jogos területi különbségeket; felbontással kijátszható |
| Kódbázishoz viszonyított küszöb | Jobban kalibrált a tényleges kontextushoz | Több beállítást és időszakos újrakalibrálást igényel |
| Bonyolultság mint automatizált build-kapu | Emberi áttekintési többletteher nélkül biztosít következetességet | Blokkolhat jogosan összetett, de jól tervezett kódot, vagy jutalmazhatja az elmosott felbontást |
| Bonyolultság mint triázsjel az emberi áttekintéshez | Elkapja a valódi minőségi problémákat, amelyeket a felbontás önmagában elmulasztana | Több emberi áttekintési időt igényel, mint egy teljesen automatizált kapu |

A központi feszültség az **automatizálás és az ítélőképesség között** húzódik. Egy
teljesen automatizált bonyolultsági kapu olcsó és következetes, de blokkolhat
jogosan összetett, jól tervezett kódot, és jutalmazhat felszínes felbontást, amely
kijátssza a pontszámot, anélkül, hogy bármit valóban egyszerűsítene. A feszültséget
úgy oldd fel, hogy automatizált bonyolultsági elemzéssel hozod felszínre az
áttekintendő jelölteket, a tényleges ítélet pedig, hogy ez a bonyolultság lényegi
vagy véletlen-e, a refaktor valóban tisztázott-e, vagy csak áthelyezte a
bonyolultságot, emberi áttekintőre marad, nem pusztán kemény automatizált kapura.

## Kérdések a csapattal való megbeszéléshez

1. **A bonyolultsági küszöbeink a saját kódbázisunk tényleges eloszlásához vannak
   kalibrálva, vagy egy általános iparági konvencióból vettük át kritikátlanul?**
   Kérd le a kódbázisod valódi bonyolultsági eloszlását, és ellenőrizd, hogy a
   jelenlegi küszöbeid értelmesek-e hozzá képest, ahelyett, hogy feltételeznéd, egy
   gyakran idézett szám univerzálisan érvényes a te területedre.

2. **Láttunk-e már olyat, hogy egy függvényt több kisebbre bontottak anélkül, hogy az
   eredményül kapott kód valóban könnyebben érthető lett volna?** Ez a
   legvilágosabb jele a téma által figyelmeztetett felbontásos kijátszási mintának.
   Nézz meg egy friss, elsősorban bonyolultsági pontszám által motivált refaktort, és
   értékeld őszintén, javította-e a valódi érthetőséget.

3. **A kódbázisunk hol lényegi a bonyolultság a probléma szempontjából, és hol
   véletlen és javítható?** Járd végig a legnagyobb bonyolultságú kiugró értékeidet,
   és sorold kifejezetten e két kategóriába, mert csak a második jelent valódi,
   cselekvésre alkalmas minőségi problémát.

4. **A bonyolultsági metrikákat az áttekintési erőfeszítés triázsához használjuk, vagy
   kemény automatizált kapuként, emberi ítélőképesség nélkül?** Beszéljétek meg, hogy a
   jelenlegi betartatási megközelítésünk hagy-e helyet az ebben a témában ajánlott
   lényegi és véletlen megkülönböztetésére, vagy minden túllépést azonosan kezel,
   a kontextustól függetlenül.

5. **Használtak-e valaha bonyolultsági pontszámot, akár informálisan, egy egyéni mérnök
   munkaminőségének megítélésére?** Ez ugyanabba az egyéni értékelési csapdába
   esik, amelyre a 3.4 téma az aktivitásmetrikáknál figyelmeztet, itt kódmetrikákra
   alkalmazva, és ugyanazt a kijátszási választ hívja.

6. **Hogyan néz ki a bonyolultsági trendünk az elmúlt évben a legkritikusabb, leggyakrabban
   változtatott fájlokra?** Kombináld ezt a 4.3 téma fluktuációs és hotspot-
   elemzésével, mert az a fájl, amely egyszerre erősen bonyolult és gyakran változik,
   sokkal hamarabb érdemel figyelmet, mint az, amely bonyolult, de ritkán nyúlnak hozzá.

## Ágazati szemszög

**Startup.** A bonyolultsági metrikák ekkora léptéknél általában kevésbé sürgősek; a
kódbázis mérete elég kicsi ahhoz, hogy az informális ismeret gyakran helyettesítse a
formális mérést. Az érdemes szokás, hogy időnként lefuttatsz egy bonyolultsági
vizsgálatot, hogy elkapj egy konkrét fájlt, amely csendben kezelhetetlenné válik,
mielőtt a csapat túl naggyá nőne ahhoz, hogy informálisan észrevegye.

**Kisvállalkozás.** A legtöbb modern statikus elemző eszköz a bonyolultsági
metrikákat egy tágabb, ingyenes vagy olcsó linting-beállítás részeként jelenti; a
kimenetet időszakos triázsjelként használd, ne dedikált eszközbe fektess. Először a
leggyakrabban módosított fájlokra összpontosíts.

**Nagyvállalat.** A bonyolultsági metrikák nagy léptéknél a fluktuációs adattal (4.3
téma) kombinálva a leghasznosabbak, hogy a refaktorálási beruházást egy olyan
kódbázisban rangsoroljuk, amelyet egyetlen ember sem tud kézzel áttekinteni.
A küszöbértékeket szolgáltatásonként vagy területenként kalibráld, ne egyetlen
szervezetszintű számot alkalmazz, mert a jogos bonyolultság jelentősen változik a
különböző rendszertípusok között.

**Közszféra.** A hosszú életű kormányzati rendszerek gyakran fokozatosan halmoznak fel
bonyolultságot évek vagy évtizedek növekményes követelményváltozásai során, és egy
bonyolultsági audit meggyőző, konkrét eszköz lehet a modernizációs vagy
refaktorálási beruházás indokolására az olyan érdekelt feleknek, akik máskülönben
a rendszert egyszerűen „működőnek” látnák, ezért nem érdemesnek a befektetésre.

## Példák

**Nagyvállalat.** Egy fizetésfeldolgozó cég először futtatott kódbázis-szintű
bonyolultsági auditot, és talált egy tranzakció-érvényesítő függvényt, amelynek
ciklomatikus komplexitási pontszáma több mint tízszerese volt a kódbázis mediánjának.
A vizsgálat kiderítette, hogy a bonyolultság szinte teljes egészében véletlen volt:
az egyes fizetési szolgáltatókra vonatkozó, évek alatt fokozatosan hozzáadott
különleges esetek kezelése mélyen beágyazott feltételekké halmozódott, amelyek
átstrukturálhatók voltak egy tisztább stratégiamintává, amely elválasztja a
szolgáltatóspecifikus logikát. A refaktor, amelyet közvetlenül azért tettek
prioritássá, mert a bonyolultsági audit a kódbázis egyetlen legértékesebb céljaként
azonosította, több mint 80%-kal csökkentette a függvény bonyolultsági pontszámát, és,
ami fontosabb, mérhetően csökkentette a hibaarányt abban a konkrét kódútvonalban a
következő két negyedévben.

**Közszféra.** Egy adóhatóság évtizedes juttatásszámító motorja szinte minden
függvényében rendkívül magas pontszámot ért el a bonyolultsági metrikákon, ami
kezdeti feltételezéshez vezetett, hogy az egész rendszert a nulláról újra kell
írni. Egy közelebbi, függvényenkénti áttekintés, amely megkülönböztette a lényegi
és a véletlen bonyolultságot, megállapította, hogy a bonyolultság nagy része valóban a
mögöttes jogszabályokat tükrözte, amelyeknek valóban ennyi jogos ága és törvény által
előírt különleges esete volt, míg egy kisebb részhalmaz a hasonló számítási útvonalak
elkerülhető megkettőzéséből eredt. A csapat csak a véletlen bonyolultságú
részhalmazt célozta meg refaktorálásra, elkerülve egy költséges, kockázatos teljes
újraírást, miközben érdemben javította a rendszer legproblémásabb területeit.

## Üzleti érv: indítékok, ROI és TCO

A bonyolultsági metrikák jó használatának megtérülése a célzott, nagy értékű
refaktorálási beruházás: a fenti fizetésfeldolgozó példa egyetlen, jól célzott javítást
mutat, amelyet a bonyolultsági elemzés azonosított, és amely mérhetően csökkentette
a hibákat éppen a legnagyobb kockázatú kódútvonalban, annak a költségnek a
töredékéért, amelyet egy széles, célzatlan refaktorálási kezdeményezés igényelt
volna.

A teljes birtoklási költség (TCO) alacsony: a legtöbb modern fejlesztői eszközlánc
automatikusan számítja a bonyolultsági metrikákat a statikus elemzés (4.4 téma)
részeként, és a valódi beruházás az emberi ítélőidő az eredmények helyes
értelmezéséhez, a lényegi és a véletlen bonyolultság megkülönböztetéséhez és a
felbontásos kijátszás elkapásához, nem pedig bármilyen jelentős új eszközköltség.

## Antiminták és buktatók

- **A bonyolultsági pontszám kezelése közvetlen minőségi ítéletként:** egy
  konkrét tulajdonságot mér, nem az általános kódminőséget.
- **Függvény szétbontása a pontszám kijátszására valódi egyszerűsítés nélkül:** a
  téma által kifejezetten megnevezett felbontásos kijátszási minta.
- **Univerzális küszöb alkalmazása a saját kódbázishoz való kalibrálás nélkül:**
  a területtől függően túl engedékeny vagy túl szigorú betartatást eredményez.
- **Bonyolultsági metrikák használata mérnökök egyéni értékelésére:** kijátszást hív,
  és olyan metrikát használ rosszul, amely triázsra való, nem ítéletre.
- **Minden bonyolultság egyformán javíthatónak kezelése:** a valóban nehéz
  problémából eredő lényegi bonyolultság nem megszüntetendő hiba.
- **A trend és a kiugró értékek figyelmen kívül hagyása a lapos, kódbázis-szintű átlag
  javára:** elmulasztja ennek a metrikacsaládnak a legcselekvésre késztetőbb jelét.

## Érettségi modell

- **1. szint, Kezdeti:** A bonyolultságot nem mérik, vagy át nem vizsgált, általános
  univerzális küszöbbel mérik, kritikátlanul alkalmazva.
- **2. szint, Fejlődő:** A bonyolultsági metrikákat gyűjtik, de ritkán cselekednek
  rájuk, és nincs különbségtétel a lényegi és a véletlen bonyolultság között.
- **3. szint, Szabványosított:** A küszöbök a kódbázis saját eloszlásához vannak
  kalibrálva, és a bonyolultsági metrikák következetesen irányítják az áttekintési és
  refaktorálási triázst az egész szervezetben.
- **4. szint, Irányított:** A bonyolultsági trendet és a kiugró értékeket aktívan
  figyelik, és a fluktuációs adattal (4.3 téma) kombinálják a refaktorálási beruházás
  rangsorolásához; a felbontásos kijátszásra aktívan figyelnek.
- **5. szint, Összehangolt:** A szervezet rá tud mutatni konkrét, mérhető
  hibaarány-javulásokra, amelyek közvetlenül a bonyolultsági adatok által
  tájékoztatott refaktorálási beruházásra vezethetők vissza, és a bonyolultsági adat
  rutinszerű, megbízható bemenete a mérnöki beruházási döntéseknek.

## Ötletek a vitához

1. Melyik a legbonyolultabb függvényünk vagy fájlunk, és lényegi vagy véletlen-e a bonyolultsága?
2. Kijátszottunk-e valaha bonyolultsági pontszámot felbontással valódi egyszerűsítés nélkül?
3. A küszöbeink a saját kódbázisunkhoz vannak kalibrálva, vagy kritikátlanul átvettük őket?
4. Hol fedi át egymást most a magas bonyolultság és a magas fluktuáció a kódbázisunkban?
5. Tájékoztatott-e valaha bonyolultsági adat refaktorálási beruházási döntést, vagy kihasználatlanul áll?

## A legfontosabb tanulságok

- A **ciklomatikus komplexitáshoz** hasonló bonyolultsági metrikák a tesztelés és a
  hibák nehézségét jelzik előre; nem mérik közvetlenül az általános kódminőséget.
- Reagálás előtt különböztesd meg a **lényegi bonyolultságot** (valóban nehéz
  problémából) a **véletlen bonyolultságtól** (jobb tervezéssel elkerülhető).
- Figyelj a **felbontásos kijátszásra**: a kód szétbontására a pontszám csökkentése
  érdekében, anélkül, hogy bármit valóban egyszerűsítenénk.
- A bonyolultsági metrikákat **triázshoz** használd, az emberi áttekintés és a
  refaktorálási erőfeszítés irányítására, ne egyéni eredménykártyaként vagy merev
  automatizált kapuként.
- A küszöbértékeket **a saját kódbázisod eloszlásához** kalibráld, és a **trendet és
  a kiugró értékeket** kövesd, ne csak egy lapos átlagot.

## Források és ajánlott olvasmányok

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software
  Engineering* (1976): az eredeti ciklomatikus komplexitási tanulmány.
- *Code Complete*, Steve McConnell műve (gyakorlati útmutató a bonyolultság
  kezeléséhez a szoftverkészítésben).
- *Working Effectively with Legacy Code*, Michael Feathers műve (technikák a
  bonyolultság biztonságos csökkentésére a meglévő, nehezen változtatható kódban).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring
  Understandability" (SonarSource, 2018): a kognitív komplexitási metrika és
  megkülönböztetése a ciklomatikus komplexitástól.
