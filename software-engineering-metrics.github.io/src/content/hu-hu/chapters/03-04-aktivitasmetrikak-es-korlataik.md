# 3.4 Aktivitásmetrikák és korlátaik

## Áttekintés és indíték

Az **aktivitás**, a SPACE (3.1 téma) A betűje, a rendszertelemetriából
megfigyelhető mérnöki munka volumenét számolja: commitokat, megnyitott pull
requesteket, módosított kódsorokat, hagyott kódáttekintési megjegyzéseket. Ez a
legkönnyebben mérhető SPACE-dimenzió, mert minden ilyen eseményt automatikusan
naplóznak azok az eszközök, amelyeket a mérnöki csapatok naponta használnak, és
éppen ez a mérési könnyedség teszi ezt a dimenziót a legveszélyesebbé, ha túlsúlyt
kap. Az aktivitás valódi, legitim jel, ha óvatosan használjuk. Önálló
termelékenységi közelítő mutatóként viszont ez a [szoftverfejlesztés](https://en.wikipedia.org/wiki/Software_engineering)
mérésének egész történetében a leggyakrabban kijátszott, leginkább félrevezető
metrikacsalád.

Az alapvető probléma az, hogy az aktivitás mozgást mér, nem értéket. A commitok
száma nem különbözteti meg azt a commitot, amely elegánsan megoldott egy nehéz
problémát, attól, amely egyetlen értelmes változtatást öt részre szabdalt, hogy
termelékenyebbnek lásson (az 1.2 téma helyettesítéses kijátszása, közvetlenül
erre a metrikacsaládra alkalmazva). A módosított kódsorok a bőbeszédűséget
jutalmazzák a szükségtelen kód törlésének sokkal értékesebb képessége helyett. Az
a mérnök, aki egy teljes napot mély, megszakítatlan gondolkodással tölt, mielőtt
tíz elegáns, jól tesztelt sort ír, ezekkel a metrikákkal kevésbé „aktívnak”
látszik, mint az, aki húsz percenként sekély, át nem tekintett változtatásokat
commitol, noha az első nagyon gyakran sokkal több valódi értéket állít elő.

Nagy csapatoknál az aktivitásmetrikák egyéni értékelésre használásának kísértése
állandó és jól dokumentált, mert az aktivitás könnyen hozzárendelhető egy konkrét
személyhez és automatikusan kiszámítható, ellentétben a többi SPACE-dimenzió
nehezebb, őszintébb jeleivel. Ez a téma kifejezetten azért létezik, hogy megnevezze
ezt a kísértést, és szavakat és bizonyítékot adjon a csapatoknak az ellenálláshoz,
mert amint egy szervezet elkezdi egyénileg rangsorolni a mérnököket commitszám vagy
kódsorok alapján, az együttműködésnek, a kódminőségnek és a morálnak okozott
kár jól dokumentált és nehezen visszafordítható.

## Alapelvek

- **Az aktivitás mozgást mér, nem értéket.** Legitim kontextuális jel, soha
  nem önálló termelékenységi közelítő mutató.
- **Ez a szoftverfejlesztés-mérés történetének leggyakrabban visszaélt
  metrikacsaládja.** Ezt a történetet kezeld figyelmeztetésként, ne véletlenként.
- **Az egyéni aktivitási rangsor szinte mindig káros.** Árt az együttműködésnek,
  jutalmazza a látható üresjáratot, és szinte azonnal kijátszást hív.
- **Az aktivitási adat összesítve a leghasznosabb, a többi dimenzió
  kontextusaként,** nem független jelként egyetlen személyről vagy csapatról.
- **A mély, értékes munka gyakran csendesnek látszik egy aktivitás-dashboardon.**
  A metrikacsalád szerkezetileg elfogult éppen az olyan gondolkodással szemben,
  amely a legjobb mérnöki eredményeket hozza.

## Ajánlások

### Soha ne rangsorold és ne értékeld az egyéneket nyers aktivitásszámok alapján

Ez a téma egyetlen legnehezebb, legfontosabb szabálya. A commitszám, a kódsorok
és a pull requestek száma soha nem szerepelhet egyéni teljesítményértékelésben,
összehasonlító rangsorban vagy bármely olyan környezetben, ahol egy mérnök
javadalmazása, helyzete vagy hírneve a számtól függ. Ez közvetlenül az 1.2 téma
ösztönzéskitettségi elvéből következik: abban a pillanatban, hogy az aktivitás
ösztönzött egyéni metrikává válik, a kijátszás szinte azonnal követi, és az ebből
fakadó viselkedés, a commitok feltöltése, a változtatások triviális szétosztása, a
kevés látható eseményt termelő mély, nem látványos munka kerülése, aktívan árt a
szervezetnek.

### Az aktivitási adatot összesítve, kontextusként használd, ne ítéletként

Az aktivitási adat akkor válik valóban hasznossá, ha csapatszinten összesítjük,
és a többi SPACE-dimenzióval együtt olvassuk: a csapatszintű commitaktivitás éles
visszaesése, amely az elégedettség növekedésével esik egybe, jelezheti, hogy a
csapatnak végre volt hely mélyen gondolkodni és törleszteni a technikai adósságot,
ami pozitív minta, nem negatív. Elszigetelten olvasva ugyanaz a visszaesés
riasztónak tűnik. A többi dimenzió kontextusa teszi értelmezhetővé az aktivitási
adatot ahelyett, hogy félrevezetne.

### Részesítsd előnyben a minőséghez közeli aktivitási jeleket a nyers volumennel szemben

Ahol az aktivitási adat egyáltalán hasznos, a minőséggel korrigált jeleket
részesítsd előnyben a nyers számokkal szemben: a pull request mérete az
áttekintés mélységéhez képest (2.9 téma), vagy az új kód és az eltávolított kód
aránya, amely megmutathatja, hogy egy csapat bonyolultságot halmoz-e fel, vagy
aktívan egyszerűsít. Ezek a korrigált jelek továbbra is az aktivitás dimenziójába
tartozó adatok, de ellenállnak a nyers számok által hívott legdurvább
kijátszásnak.

### Figyeld kifejezetten a helyettesítéses kijátszás mintázatát az aktivitási adatban

Az aktivitásmetrikák kijátszásának leggyakoribb módja éppen az 1.2 téma
helyettesítéses mintázata: a valóban értelmes munka sok kicsi, triviális
eseményre szabdalása a szám felfújására. Ha a commit- vagy pull request-gyakoriság
emelkedik, miközben a változtatások mögöttes bonyolultsága vagy mérete élesen
csökken, vizsgálódj, mielőtt valódi termelékenységjavulást jóváírnál, ugyanazzal
a diagnosztikus fegyelemmel, amelyet a 2.10 téma a telepítési gyakoriságra ajánl.

### Nevezd meg és ellenezd kifejezetten az aktivitásszínházat

Az **aktivitásszínház** olyan munka, amelyet tudatosan vagy nem, elsősorban azért
végeznek, mert látható és megszámolható, nem azért, mert értékes: gyakori apró
commitok, feltűnő késő esti aktivitás vagy látható sürgés-forgás a megosztott
csatornákon. Ha ezt a mintát kifejezetten megnevezed a csapatodnak, és átláthatóvá
teszed, hogy a vezetés nem a nyers aktivitás alapján ítéli meg a hozzájárulást,
az elveszi a megjelenésének ösztönzése nagy részét.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Egyéni aktivitási rangsor | Egyszerű, könnyen kiszámítható, közvetlenül cselekvésre késztetőnek tűnik | Szinte azonnal kijátsszák; árt az együttműködésnek és a morálnak; rossz dolgot mér |
| Egyáltalán nincs aktivitásmérés | Teljesen elkerüli a visszaélés kockázatát | Elveszít egy valóban hasznos kontextuális jelet a csapatszintű mintázatok észleléséhez |
| Csapatszintű összesített aktivitás, kontextusban olvasva | Hasznos kontextust ad egyéni kockázat nélkül | Fegyelmet igényel, hogy a többi dimenzióval együtt, ne elszigetelten értelmezzük |
| Minőséggel korrigált aktivitásjelek | Ellenáll a legdurvább nyerscsapás-kijátszásnak | Bonyolultabb kiszámítani és elmagyarázni, mint egy egyszerű számot |

A központi feszültség a **hasznosság és a visszaélési kockázat között** húzódik.
Az aktivitási adat, ha óvatosan, összesítve és kontextusban olvassuk, valóban
hasznos az olyan minták észleléséhez, mint a fenntarthatatlan tempó vagy az, hogy
egy csapat csendben helyet talál a technikai adósság kezelésére. Ugyanez az adat
egyéni eredménykártyaként szinte egyöntetűen káros. A feszültséget ne az
aktivitási adat teljes kerülésével oldd fel, hanem azzal, hogy kemény szervezeti
szabályt építesz az egyéni használat ellen, miközben megengeded és bátorítod is a
átgondolt, kontextualizált csapatszintű használatot.

## Kérdések a csapattal való megbeszéléshez

1. **Értékelt-e valaha valakit a szervezetünkben, formálisan vagy informálisan,
   nyers aktivitásszám, például commitok vagy kódsorok alapján?** Kérdezd meg
   közvetlenül, és készülj fel kényelmetlen, de szükséges válaszra; ez a
   visszaélés gyakran csendben történik, egy menedzser odavetett megjegyzésén
   keresztül, anélkül, hogy valaha hivatalos szabályzattá válna.

2. **Hogyan nézne ki az aktivitásszínház kifejezetten a mi csapatunkban, és láttuk-e
   jeleit?** Ha megnevezed a konkrét, hihető formát, amelyet ez a minta a saját
   csapatodban ölthet, sokkal könnyebb felismerni, ha elkezdődik.

3. **Amikor a csapatszintű aktivitási adatunk mozdul, a többi SPACE-dimenzióval együtt
   értelmezzük, vagy elszigetelten?** Az elszigetelten olvasott aktivitáscsökkenés
   aggasztónak tűnik; ugyanez a csökkenés az elégedettség vagy a teljesítmény
   javulásával együtt olvasva valóban pozitív mintának látszhat. Ellenőrizd a
   tényleges áttekintési gyakorlatodat ehhez a különbséghez képest.

4. **Láttunk-e már a commit- vagy pull request-gyakoriság emelkedését a
   változtatások átlagos méretének zsugorodása mellett, ami triviális szétosztásra
   utal valódi termelékenységnövekedés helyett?** Vegyél valódi adatot, és keresd
   ezt a konkrét helyettesítéses kijátszási mintázatot.

5. **Hogyan beszélünk jelenleg arról, „ki járul hozzá a legtöbbet” a csapatunkban,
   és ez a beszélgetés hallgatólagosan támaszkodik-e aktivitási adatra formális
   metrika nélkül is?** A látható sürgés-forgás felé mutató informális, nem
   mért elfogultság formális aktivitásalapú szabályzat nélkül is alakíthatja az
   észlelést és a jutalmazást; hozd ezt felszínre őszintén.

6. **Hogyan néz ki a valóban értékes, de csendes munka, a mély gondolkodás, az
   alapos tervezés, a mentorálás a csapatunkban, és hogyan biztosítjuk, hogy
   elismerjék, noha kevés látható aktivitási adatot termel?** Ez a kérdés a
   korábbiak pozitív kiegészítője: ha megnevezzük, hogyan néz ki a jó, csendes
   munka, az segít megvédeni attól, hogy a hangosabb, könnyebben megszámolható
   munka kedvéért figyelmen kívül hagyják.

## Ágazati szemszög

**Startup.** Egy kis, szorosan együttműködő csapatnál az aktivitási adat általában
dashboard nélkül is látható, és az ebben a témában figyelmeztetett egyéni
rangsorolás kockázata kisebb, egyszerűen azért, mert mindenki már tudja, min
dolgozik mindenki más. A kockázat inkább az, hogy egy alapító öntudatlanul a
láthatóan „elfoglalt” viselkedést részesíti előnyben a korai felvételi vagy
részesedési döntéseknél.

**Kisvállalkozás.** A meglévő eszközök aktivitási adatára rápillantani a csapat
általános átbocsátásának érzékeléséhez rendben van, de ne használd az egyéni
közreműködők közvetlen összehasonlítására; egy kis csapat valódi értéke gyakran
néhány olyan emberben összpontosul, akik csendes, nagy hatású munkát végeznek,
amelyet a commitszám-nézet rendszeresen alulértékelne.

**Nagyvállalat.** Itt a legerősebb és a legkárosabb az egyéni rangsorolás
kísértése, mert az aktivitási adat a legkönnyebben lekérhető jel egy
mérnökök ezreit átfogó teljesítményértékelési folyamathoz, és a nyomás, hogy
találjanak *valamilyen* számszerűsíthető bemenetet, valódi. Építs ki kifejezett,
kommunikált, betartatott szabályzatot az egyéni aktivitási rangsorolás ellen, és
időnként auditáld a teljesítményértékelési gyakorlatokat, hogy megerősítsd: a
szabályzatot a gyakorlatban is követik, nem csak kimondják.

**Közszféra.** Az aktivitásmetrikákra csábító hivatkozni egy nyilvános jelentésben
a termelékenység bizonyítékaként („tízezer commit idén”), de az ilyen főcím
szinte értelmetlen, és éppen a rossz vizsgálatot hívhatja, amint egy hozzáértő
áttekintő rámutat, hogy a nyers aktivitás semmit nem mond az eredményekről. Ehelyett
eredmény- és teljesítményadatokat (3.3 téma) jelents, és kerüld az aktivitási
számokat bármely külső kommunikációban.

## Példák

**Nagyvállalat.** Egy szoftvercég mérnöki vezetése formális szabályzat nélkül
elkezdett informálisan egyéni commitgyakorisági adatra hivatkozni az
előléptetési megbeszéléseken. Egy belső felülvizsgálat, amelyet egy független
fluktuációelemzési projekt indított, megállapította, hogy a cég legbonyolultabb,
legnagyobb értékű rendszerein dolgozó mérnökök, akik hosszú, gondos tervezési
munkát igényeltek, mielőtt kód született, rendszeresen alacsonyabb commitszámmal
rendelkeztek, mint az egyszerűbb, inkrementálisan fejlesztett rendszereken
dolgozók, és emiatt finoman hátrányba kerültek az előléptetési beszélgetésekben. A
vezetés kifejezett, kommunikált szabályzatot adott ki, amely tiltja az
aktivitásszámokra hivatkozást a teljesítmény- és előléptetési megbeszéléseken, és
az előléptetési bizonyítékot a 3.3 téma többjeles teljesítmény-megközelítése felé
tolta el.

**Közszféra.** Egy digitális szolgáltatási ügynökség, amely a termelékenység
bemutatására kapott nyomást egy törvényhozási felügyeleti bizottság előtt,
eredetileg azt javasolta, hogy a mérnöki programja során írt commitok és kódsorok
összesített számát jelentsék a leszállított érték bizonyítékaként. Egy belső
műszaki tanácsadó ellenállt, helyesen megjegyezve, hogy ez a keretezés éppen a
rossz vizsgálatot hívja, mert egy technikailag jártas bizottsági tag könnyen
rámutathat, hogy a nyers kódvolumen semmit nem mond arról, hogy a kód működött-e
vagy számított-e. Az ügynökség átdolgozott jelentése ehelyett eredménymetrikákat
használt (5.3 téma): a polgárok által jelentett hibák csökkenését és a sikeres
önkiszolgálási befejezések növekedését, amelyek sokkal jobban kiálltak a bizottsági
kérdezést, mint az aktivitási számok kiálltak volna.

## Üzleti érv: indítékok, ROI és TCO

Az aktivitásmetrikák helyes kezelésének megtérülése, kontextusban használva őket
egyéni eredménykártyák helyett, az elkerült kár: azok a szervezetek, amelyek
aktivitás alapján egyénileg rangsorolják a mérnököket, megbízhatóan kijátszási
viselkedést, csökkent együttműködést (a mérnökök a saját látható kibocsátásukat
védik, ahelyett, hogy segítenének egy csapattársnak) és rendszerszintű elfogultságot
látnak a mély, nagy hatású munkával szemben, amely gyakran a legtöbb értéket
termeli a legkevésbé látható aktivitás mellett. Ennek a kárnak a visszafordítása,
ha egyszer beágyazódott a teljesítményértékelési kultúrába, valóban nehéz és lassú.

Ennek a csapdának a elkerülésének teljes birtoklási költsége (TCO) főleg
szervezeti fegyelem: kifejezett, következetesen betartatott szabályzat az egyéni
aktivitási rangsorolás ellen, és elkötelezettség a 3.3 témában leírt nehezebb,
őszintébb teljesítménymérésbe való beruházás mellett. Ez a fegyelem kevesebbe
kerül, mint a félrevezetett előléptetési döntések, a sérült együttműködés és a
kijátszási viselkedés, amelyeket az egyéni aktivitásmetrikák idővel megbízhatóan
előállítanak.

## Antiminták és buktatók

- **Egyéni rangsorolás commitszám vagy kódsorok alapján:** a leggyakrabban
  megismételt és legkárosabb visszaélés ebben az egész könyvben.
- **Aktivitásszínház:** elsősorban láthatóságért, nem értékért végzett munka, az
  aktivitásalapú értékelésre adott teljesen előrelátható válasz.
- **A csapatszintű aktivitáscsökkenés elszigetelt értelmezése a többi
  SPACE-dimenzió ellenőrzése nélkül:** egy valóban pozitív mintát aggasztónak
  tarthat.
- **Nyers aktivitásszámok idézése külső vagy vezetői kommunikációban:** éppen a
  rossz vizsgálatot hívja, és keveset mond a tényleges értékről.
- **A kevés látható eseményt generáló mély, gondos munka rendszeres
  alulértékelése:** az egész metrikacsaládba beépített szerkezeti elfogultság.
- **Informális, szabályozatlan aktivitáselfogultság az előléptetési vagy
  értékelési beszélgetésekben:** hivatalos metrika nélkül is káros.

## Érettségi modell

- **1. szint, Kezdeti:** Az aktivitásmetrikákat formálisan vagy informálisan
  egyének értékelésére vagy rangsorolására használják, a kockázat tudata nélkül.
- **2. szint, Fejlődő:** Van némi tudatosság a kockázatról, de nincs kifejezett
  szabályzat, amely megakadályozná, hogy az aktivitási adat informálisan
  befolyásolja az értékeléseket vagy az előléptetési megbeszéléseket.
- **3. szint, Szabványosított:** Kifejezett, kommunikált, szervezetszintű
  szabályzat tiltja az egyéni aktivitási rangsorolást, és az aktivitási adatot
  csak összesítve, csapatszintű kontextusban használják.
- **4. szint, Irányított:** A teljesítményértékelési és előléptetési gyakorlatokat
  időszakosan auditálják, hogy megerősítsék: a szabályzatot a gyakorlatban
  követik, és ahol az aktivitási adatot egyáltalán használják, a minőséggel
  korrigált jelek váltják fel a nyers számokat.
- **5. szint, Összehangolt:** A szervezet kimutathatóan eltolta az értékelési
  kultúrát az aktivitásmetrikáktól a 3.3 téma többjeles teljesítmény-megközelítése
  felé, az együttműködés látható javulásával és a csökkent kijátszási
  viselkedéssel bizonyítva, hogy az eltolódás működött.

## Ötletek a vitához

1. Érezte-e itt valaki valaha, akár informálisan is, hogy az aktivitása „elfoglaltsága” alapján értékelik?
2. Hogyan nézne ki az aktivitásszínház kifejezetten a mi csapatunkban?
3. Van-e kifejezett, írásos szabályzatunk az egyéni aktivitási rangsorolás ellen, és követjük-e valóban?
4. Melyik csendes, nagy értékű munka a csapatunkban termeli jelenleg a legkevésbé látható aktivitási adatot?
5. Hogyan alakítanánk át a teljesítményértékelési bizonyítékainkat, hogy teljesen kivegyük az aktivitásszámokat?

## A legfontosabb tanulságok

- Az aktivitás **mozgást mér, nem értéket**; a szoftverfejlesztés-mérés
  történetében a leggyakrabban visszaélt metrikacsalád.
- **Soha ne rangsorold és ne értékeld az egyéneket** nyers aktivitásszámok
  alapján; ez a téma legnehezebb és legfontosabb szabálya.
- Az aktivitási adatot **összesítve, kontextusként** használd a többi
  SPACE-dimenzióhoz, soha önálló ítéletként.
- Figyelj az **aktivitásszínházra** és a **helyettesítéses kijátszási mintázatra**
  (1.2 téma) kifejezetten ebben a metrikacsaládban.
- A mély, nagy értékű munka gyakran termeli a **legkevésbé látható aktivitási
  adatot**; védd meg, hogy rendszeresen alulértékeljék.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco és Timothy
  Lister műve (az érv amellett, hogy a mérnököket ne a látható sürgés-forgás
  alapján mérjük).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal Newport
  műve (a csendes, megszakítatlan munka értéke, amelyet az aktivitásmetrikák
  rendszeresen alulszámolnak).
- *The Tyranny of Metrics*, Jerry Z. Muller műve (a metrikafixáció és költségei,
  közvetlenül alkalmazható az aktivitásalapú értékelésre).
