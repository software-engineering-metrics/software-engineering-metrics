# 4.0 Bevezetés a 4. részhez: Kód- és minőségmetrikák

A 2. és a 3. rész azt mérte, hogyan mozog a munka, és hogyan boldogulnak a
létrehozó emberek. Ez a rész magára a műtermékre fordul: a kódra, és arra, mit
mondhat és mit nem mondhat egy metrika a minőségéről. A kódminőségi metrikáknak
van ebben a könyvben a leghosszabb történetük, a ciklomatikus komplexitás 1976-ig
nyúlik vissza, és ehhez illően a visszaélések története is a leghosszabb. Ez a rész
komolyan veszi ezt a történetet: minden téma megnevez egy valóban hasznos jelet,
mellette azt a konkrét, jól dokumentált módot, ahogyan ezt a jelet kijátsszák,
amint céllá válik.

A hat témát összekötő fonal az, hogy egyetlen kódmetrika sem ragadja meg önmagában a
minőséget, és a legnépszerűbbek közül több aktívan félrevezet, ha elszigetelten
hajszolják. Egy magas tesztlefedettségi százalék együtt élhet olyan tesztekkel, amelyek
semmi érdemlegeset nem ellenőriznek. Egy alacsony bonyolultsági pontszám együtt élhet
olyan kóddal, amely technikailag egyszerű, de fogalmilag összefüggéstelen. Ennek a
résznek a témái mindegyike a főmetrikáját azzal a kiegészítő ellenőrzéssel párosítja,
amely elkapja a sajátos vakfoltját: a bonyolultságot a karbantarthatósági
kontextussal, a lefedettséget a mutációs teszteléssel, a fluktuációt a
hotspot-elemzéssel, a statikus elemzést az emberi ítélőképességgel, a technikai
adósságot pedig a rangsorolt javítással az egyre növekvő, nem szeretett
hátralék helyett.

Nagy csapatoknál a kód- és minőségmetrikák teszik lehetővé egy olyan kódbázis
kezelését, amelyet egyetlen ember sem tud a fejében tartani. Egy ötfős csapat
támaszkodhat a rendszer törékeny részeinek közös hallgatólagos ismeretére; egy
ötszáz mérnökös, több tucat szolgáltatást átfogó szervezetnek műszerezett jelekre
van szüksége, hogy szisztematikusan megtalálja ezt a törékenységet. A gyakran
évek helyett évtizedekben mérhető kódbázist hordozó nagyvállalatok és közszféra
szervezetek ennek a résznek a metrikáira támaszkodnak annak eldöntéséhez, hová
fektessék a korlátozott karbantartási befektetést, hogy a legtöbb hasznot hozza.

## A rész témái

- **4.1 Kódbonyolultsági metrikák:** A ciklomatikus komplexitás és rokonai, mit
  jeleznek valójában előre, és jól dokumentált kijátszási kockázatuk.
- **4.2 Tesztlefedettség és a tesztek hatékonysága:** Miért mond kevesebbet egy
  lefedettségi százalék önmagában, mint amilyennek látszik, és hogyan zárja be a rést a
  mutációs tesztelés.
- **4.3 Kódfluktuáció és hotspot-elemzés:** A kódbázis konkrét, kis hányadának
  megtalálása, amely a hibák és a karbantartási költség aránytalan részéért felelős.
- **4.4 Statikus elemzés és kódszag-metrikák:** Automatizált kódminőségi jelek, valódi
  értékük és korlátaik az emberi ítélőképességgel szemben.
- **4.5 A technikai adósság mérése:** Egy láthatatlan, informálisan megvitatott
  kötelezettség átalakítása látható, rangsorolt, kezelhető portfólióvá.
- **4.6 Dokumentációs és tudásmetrikák:** Annak mérése, hogy a dokumentáció
  ténylegesen segít-e, nem csupán az, hogy létezik-e.

## Hogyan kapcsolódnak össze ezek a témák

Ez a hat téma a kód legkisebb egységétől halad kifelé. A 4.1 téma egyetlen
függvény vagy metódus szintjén kezdődik; a 4.2 téma azt kérdezi, hogy a tesztek
valóban ellenőrzik-e az adott egység viselkedését; a 4.3 téma kicsinyít, hogy
megtalálja, a teljes kódbázis mely fájljai és moduljai érdemelnek először figyelmet;
a 4.4 téma hozzáadja az automatizált eszközréteget, amely mindezt folyamatosan
átvizsgálja; a 4.5 téma a négy téma összegyűlt megállapításait kezelt, rangsorolt
hátralékká alakítja egy szétszórt, kezeletlen aggodalom helyett; a 4.6 téma pedig
azzal zárja a részt, hogy azt méri, a mindezek biztonságos karbantartásához
szükséges tudás ténylegesen dokumentált és megtalálható-e.

Ez a rész közvetlenül kapcsolódik vissza a 2. rész stabilitási metrikáihoz: a
változtatási hibaarány (2.10 téma) nagyrészt következménye annak a kódminőségnek,
amelyet ez a rész előrébb mér. Előre is kapcsolódik az 5. rész termékmetrikáihoz,
mert a kiszökött hibák (5.1 téma) gyakran visszavezethetők éppen azokra a
bonyolultsági hotspotokra és lefedettségi hiányokra, amelyeket ez a rész arra
épít, hogy felszínre hozzon, mielőtt egyáltalán elérnék az éles rendszert.
