# 4.6 Dokumentációs és tudásmetrikák

## Áttekintés és indíték

Ez a téma zárja a 4. részt, és azt méri, hogy a kódbázis biztonságos karbantartásához
szükséges tudás valóban dokumentált és megtalálható-e, nem pusztán azt, hogy a dokumentáció
technikailag létezik valahol. A 3.5 téma a kommunikációt és az együttműködést fejlesztői
élményként tárgyalta; ez a téma ugyanazt az alapproblémát, a tudás elérhetőségét, a kód
oldaláról nézi: megvan-e egy új mérnöknek, vagy egy ismeretlen kódon dolgozó meglévő
mérnöknek mindaz, ami egy biztonságos változtatáshoz kell, vagy ez a tudás csak a tapasztalt
emberek egyre fogyó csoportjának fejében él.

A mérési kihívás itt igazán nehéz, nehezebb, mint a könyv legtöbb más metrikájánál, mert a
dokumentáció minősége és hasznossága eleve szubjektívebb, mint egy lefedettségi százalék vagy
egy bonyolultsági pontszám. A téma megközelítése az, hogy a létezés helyett a hasznosság
közelítő mutatóit méri: milyen gyakran olvassák ténylegesen a dokumentációt, milyen gyakran
teszik fel ugyanazt a kérdést újra és újra, noha létezik dokumentált válasz, és mennyi idő
alatt válik termelékennyé valaki, aki nem ismeri a rendszert. Ezek közül egyik sem tökéletes
önmagában, de együtt sokkal őszintébb képet adnak, mint a kódbázisban található wikioldalak
vagy README-fájlok megszámolása.

Nagy csapatoknál a téma gondjai összeadódnak a szervezeti munkaviszony-időtartammal és a
fluktuációval, olyan módon, amelyet könnyű alábecsülni, amíg egy válság ki nem kényszeríti a
kérdést: egy rendszer, amelyet évekig ugyanaz a két mérnök tart karban, tökéletesen működhet
szinte semmi írott dokumentációval, egészen addig, amíg mindketten távoznak ugyanabban az
évben. Ekkor a szervezet felfedezi, hogy a tudást sosem rögzítették semmilyen tartós helyen.
A nagyvállalatok és a közszféra szervezetei, amelyekben a rendszerek jellemzően tovább élnek,
a személyzet folytonossága pedig bizonytalanabb, mint egy startupnál, ezt a kockázatot a
legtöbbnél élesebben hordozzák.

## Alapelvek

- **A dokumentáció léte nem ugyanaz, mint a dokumentáció hasznossága.** Azt mérd, hogy
  valóban segít-e, ne csak azt, hogy jelen van-e.
- **Az ismétlődő kérdések dokumentált válasz mellett is megtalálhatósági problémát jeleznek,
  nem dokumentálási erőfeszítésből eredő hiányt.** A több tartalom nem mindig a megoldás.
- **A termelékeny hozzájárulásig eltelt beillesztési idő erős, gyakorlati közelítő mutatója**
  az általános tudásegészségnek, és közvetlenül kapcsolódik a 3.5 téma együttműködési
  metrikáihoz.
- **A kizárólag az emberek fejében élő tudás tartóssági kockázat,** nem stabil, fenntartható
  állapot, bármilyen jól működik is jelenleg.
- **A dokumentáció avul.** Egy évvel ezelőtt pontos oldal ma már aktívan félrevezető lehet,
  ezért az elavulást magát is követni kell.

## Ajánlások

### Kövesd a dokumentáció elérését és elavulását, ne csak a létezését

Ahol a dokumentációs platform támogatja, kövesd, milyen gyakran nézik meg ténylegesen az
oldalakat, és külön azt, hogy mennyi telt el egy oldal utolsó frissítése óta ahhoz képest,
milyen gyakran változott a leírt rendszer (a 4.3 téma fluktuációs adatainak
keresztbehivatkozása itt közvetlenül hasznos). Az az oldal, amely egy azóta jelentősen
megváltozott rendszert ír le, erős jelölt arra, hogy ne egyszerűen haszontalan, hanem aktívan
félrevezető legyen, és ez az elavulási jel legalább annyi figyelmet érdemel, mint annak
követése, hogy van-e egyáltalán dokumentáció.

### Figyelj az ismétlődő kérdésekre mint megtalálhatósági jelre

Ha ugyanazt a kérdést újra és újra felteszik egy csapatcsatornán vagy a beillesztés során,
noha a dokumentált válasz technikailag létezik valahol, ez a minta megtalálhatósági problémát
jelez: a válasz nincs ott, ahol az emberek természetes módon keresnék, és nem
dokumentálási erőfeszítésből eredő hiányt, amelyet több írás orvosolna. Kövesd az ismétlődő
kérdéseket kifejezetten, és ezek alapján rangsorold a meglévő tartalom átszervezését vagy
jobb kiemelését az újabb írás helyett.

### Mérd a beillesztési időt az első érdemi, önálló hozzájárulásig

Ezt a metrikát a 3.5 téma együttműködési jelként vezette be, és ugyanennyire dokumentációs és
tudásegészségi jel a kód oldaláról. Az állandóan rövid, kiszámítható beillesztési idő valóban
elérhető, pontos tudásra utal; a hosszú, erősen változó idő, különösen az, amely nagyban
azon múlik, melyik konkrét személy illeszti be az új csapattagot, veszélyesen az egyéni
memóriában koncentrálódó, nem tartós, nem írott tudásra utal.

### Azonosítsd és rangsorold kifejezetten a dokumentálatlan kritikus tudásterületeket

Vesd össze a tudáskoncentrációs adataidat (a 3.5 téma
[busz-faktor](https://en.wikipedia.org/wiki/Bus_factor) elemzését) a dokumentációs
lefedettséggel: az egyes busz-faktorú, érdemi dokumentáció nélküli rendszer súlyos, halmozódó
kockázat, amely elsőbbséget érdemel egy jól dokumentált, ugyanilyen alacsony busz-faktorú
rendszerrel szemben, mert a dokumentáció legalább részleges enyhítést ad, amíg egy kijelölt
utódot kiképeznek.

### Kezeld a dokumentációs adósságot a technikai adósság hátralékának egyik kategóriájaként

Ahelyett, hogy a dokumentációs hiányokat külön és informálisan követnéd, olvaszd be a jelentős
hiányokat ugyanabba a látható, számszerűsített hátralékba, amelyet a 4.5 téma ír le,
különösen a kritikus, alacsony busz-faktorú rendszereknél. Így a dokumentációs munka
tisztességesen versenyezhet a rangsorolt kapacitásért, ahelyett, hogy a kódközpontú
adósságcsökkentéshez képest alacsonyabb státuszú feladatként örökké halasztódna.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs dokumentációmérés | Alacsony többletteher | A tudáskockázat láthatatlan marad, amíg egy válság fel nem fedi |
| A dokumentáció létezésének számolása (oldalszám, README megléte) | Egyszerű, könnyen jelenthető | Semmit sem mond a hasznosságról, pontosságról vagy megtalálhatóságról |
| Elérés és elavulás követése | Feltárja a tényleges hasznosságot és az avulást | Dokumentációsplatform-analitikát és folyamatos áttekintési fegyelmet igényel |
| A beillesztési idő mint közelítő mutató | Gyakorlati, konkrét, közvetlenül kapcsolódik a valós üzleti hatáshoz | Közvetett; a dokumentáción kívül más tényezők is befolyásolják a beillesztés sebességét |

A központi feszültség a **mérhetőség és a jelentés** között húzódik. A dokumentáció létezését
elképesztően könnyű megszámolni, és szinte semmi hasznosat nem árul el; az igazi hasznosság,
vagyis hogy valaki valóban megtalálja és ráhagyatkozhat-e a dokumentált tudásra, amikor
szüksége van rá, az számít igazán, de közvetlenül nehezebb mérni. Oldd fel a feszültséget a
téma által ajánlott közelítő mutatók együttes használatával: elérési minták, a fluktuációhoz
viszonyított elavulás, ismétlődő kérdések és beillesztési idő. Fogadd el, hogy egyik sem
tökéletes, de egybehangzásuk sokkal többet jelent, mint egy puszta létezési szám.

## Kérdések a csapattal való megbeszéléshez

1. **A legkritikusabb, legalacsonyabb busz-faktorú rendszerünkhöz létezik-e érdemi, pontos
   dokumentáció, vagy egy távozó szakértő magával vinné a valódi tudás nagy részét?** Ez a
   téma központi aggályának legélesebb, legkonkrétabb változata; először a legkockázatosabb
   rendszerünkre válaszolj rá őszintén.

2. **Milyen kérdést teszünk fel újra és újra a csapatcsatornánkon, noha a válasz dokumentálva
   van valahol?** Ha azonnal meg tudsz nevezni egyet, az megtalálhatósági probléma, amelyet
   érdemes közvetlenül kezelni, valószínűleg a meglévő tartalom átszervezésével vagy jobb
   kiemelésével, nem újabb írással.

3. **Mennyi ideig tartott a legutóbbi új csapattagunknak az első érdemi, önálló hozzájárulás,
   és ez hogyan viszonyult az előtte érkezőéhez?** Az egyének közötti nagy, megmagyarázatlan
   eltérés gyakran olyan tudásra utal, amely nagyban azon múlik, ki illeszt be valakit, nem
   pedig tartós, elérhető dokumentáción.

4. **Mikor ellenőriztük utoljára, hogy egy dokumentáció még pontos-e ahhoz képest, mennyit
   változott azóta a mögötte álló rendszer?** Ha az őszinte válasz az, hogy ezt nem
   ellenőrizzük szisztematikusan, akkor az elavulási kockázat valószínűleg nagyobb, mint
   bárki most feltételezi.

5. **Tartalmazza-e a technikai adósság hátralékunk (4.5 téma) a dokumentációs hiányokat, vagy
   a dokumentációs munka örökké halasztódik, mint a kódjavításoknál alacsonyabb státuszú
   feladat?** Nézd meg a tényleges hátralékot, és állapítsd meg, hogy a dokumentációs
   adósság látható-e és versenyez-e a rangsorolt kapacitásért, vagy gyakorlatilag láthatatlan.

6. **Mibe kerülne, ha a legkritikusabb, legkevésbé dokumentált rendszerünket értő egy-két
   ember ugyanabban az évben távozna?** Ezt a konkrét, kellemetlen kérdést érdemes őszintén
   megválaszolni, ahelyett, hogy a kockázatot elvontnak vagy valószínűtlennek tekintenénk.

## Ágazati szemszög

**Startup.** A formális dokumentációs metrikák kis csapatnál általában szükségtelenek, ahol a
tudás állandó, közvetlen beszélgetésekben terjed. A figyelendő kockázat ugyanaz a
busz-faktor-koncentráció, amelyre a 3.5 téma figyelmeztet, most kifejezetten a dokumentációra
vonatkoztatva: ahogy a csapat túlnő azon a méreten, ahol mindenki naponta beszél mindenkivel,
az informálisan jól működő, dokumentálatlan tudás valódi kockázattá válik.

**Kisvállalkozás.** Először a legkritikusabb, legkevésbé redundáns rendszeredet dokumentáld,
akár informálisan is, ahelyett, hogy mindenre kiterjedő dokumentációra törekednél. Egy rövid,
pontos dokumentum a legkockázatosabb egyedi hibaponttól többet ér, mint a széles, de felszínes
lefedettség mindenhol.

**Nagyvállalat.** A dokumentáció elavulása és megtalálhatósága egyaránt rosszul skálázódik,
mert egy nagy szervezet több csapatnál és platformon gyorsabban halmoz fel dokumentációt, mint
ahogy bárki naprakészen vagy egységesen rendszerezni tudná. Fektess a dokumentációs platform
analitikájába, hogy nagy léptékben követhesd az elérést és az elavulást, és kezeld a
dokumentációs adósságot első osztályú kategóriaként a szervezetszintű adósság-hátralékban.

**Közszféra.** A közszféra szervezeteiben jellemző hosszú munkaviszony látszólagos
stabilitással takarhatja el a súlyos, dokumentálatlan tudásból fakadó kockázatot, mert egy
rendszer, amelyet tizenöt évig ugyanaz a személy tart karban, tökéletesen működhet egészen
addig, amíg az illető nyugdíjba nem vonul. Kezeld a dokumentáció egészségét kifejezetten a
működési folytonosság kérdéseként, közvetlenül a munkaerő- és utódlástervezéshez kötve, ne
csupán mérnöki finomságként.

## Példák

**Nagyvállalat.** Egy pénzügyi szolgáltató egy független átszervezés közben jött rá, hogy a
központi kockázatszámító motorjához néhány elavult kódkommenten kívül nincs érdemi
dokumentáció, és a két mérnök, aki a legjobban értette, egyszerre kerül át egy új
kezdeményezéshez. Egy jelentős időnyomás alatt végzett sürgősségi dokumentálási erőfeszítés
kinyerte és rögzítette a kritikus tudást az átcsoportosítás hatálybalépése előtt, de a
folyamat több hétnyi dedikált senior mérnöki időt emésztett fel, amelyet sokkal fokozatosabban
és olcsóbban el lehetett volna osztani, ha a dokumentáció egészségét proaktívan követték és
rangsorolták volna, nem pedig vészhelyzetként fedezték volna fel.

**Közszféra.** Egy állami kormányzat évtizedes ügykezelő rendszeréhez az évek során jelentős
dokumentáció gyűlt össze, de egy megtalálhatósági audit kimutatta, hogy az új csapattagok
következetesen nem találták meg a releváns meglévő dokumentációt, és újra meg újra ugyanazt a
néhány kérdést tették fel a csapatcsatornákon, olyanokat, amelyekre a hivatal burjánzó, rosszul
szervezett dokumentációs platformján valójában már volt válasz. Több tartalom írása helyett a
hivatal a meglévő dokumentáció keresésének és navigációs szerkezetének átszervezésébe és
javításába fektetett, és egy követő felmérés mérhetően kevesebb ismétlődő kérdést és az új
munkatársak érezhetően gyorsabb beillesztését mutatta, egyetlen új oldal hozzáadása nélkül.

## Üzleti érv: indítékok, ROI és TCO

A dokumentáció egészségének tudatos mérésén és kezelésén a megtérülés az elkerült
válságköltség: a fenti pénzügyi szolgáltatós példa megmutatja a különbséget a proaktív,
fokozatos tudásrögzítés és a tervezetlen személyzeti mozgás által kikényszerített, drága,
összenyomott sürgősségi erőfeszítés között. A dokumentálatlan kritikus tudás állandó
kötelezettség, amely látszólag semmibe sem kerül, egészen addig, amíg egyszerre nagyon drágává
nem válik.

A teljes birtoklási költség többnyire a téma által ajánlott közelítő mutatók követésének
fegyelme (elérési minták, elavulás, ismétlődő kérdések, beillesztési idő), valamint az a
hajlandóság, hogy a dokumentációs hiányokat rangsorolt hátralékba olvasszuk, ahelyett, hogy a
kódközpontú munkánál állandóan alacsonyabb státuszúnak tekintenénk őket. Ez a fegyelem
sokkal kevesebbe kerül, mint a válsághelyzeti tudáskinyerés, amelyet a pénzügyi szolgáltatós
példa az alternatívaként mutat.

## Antiminták és buktatók

- **A dokumentáció létezésének számolása a hasznosság helyett:** szinte semmit sem mond arról,
  hogy a tudás valóban elérhető-e, amikor szükség van rá.
- **Újabb tartalom írása az ismétlődő kérdésekre, a megtalálhatóság előzetes ellenőrzése
  nélkül:** gyakran teljesen rossz problémát kezel.
- **A dokumentáció elavulásának soha nem ellenőrzése ahhoz képest, mennyit változott a
  rendszer:** aktívan félrevezető, elavult tartalom kockázatát hordozza.
- **A dokumentációs adósság állandóan a kódadósságnál alacsonyabb státuszúként kezelése:**
  tartósan háttérbe szorítja, és láthatatlanná teszi a hátralékban.
- **A látszólagos stabilitás, vagyis egy évek óta nem változó rendszer, tévesztése az
  alacsony kockázattal:** súlyos, dokumentálatlan busz-faktor-problémát takarhat egy olyan
  rendszer mögött, amelynek egyszerűen még nem volt szüksége az egyetlen szakértőjére.
- **A kritikus dokumentálatlan tudás felfedezése csak egy vészhelyzeti személyzeti átmenet
  közben:** a drága, elkerülhető hibamód, amelynek megelőzésére ez a téma épül.

## Érettségi modell

- **1. szint, Kezdeti:** A dokumentáció egészségét nem mérik; a tudáskoncentrációs és
  elavulási kockázatot csak válság során fedezik fel.
- **2. szint, Fejlődő:** Létezik némi dokumentáció, de az elérés, az elavulás vagy a
  megtalálhatóság szisztematikus követése nincs.
- **3. szint, Szabványosított:** Az elérést és az elavulást a kritikus rendszereknél követik, a
  beillesztési időt pedig a tudásegészség közelítő mutatójaként mérik szervezetszinten.
- **4. szint, Irányított:** A dokumentációs hiányok bekerülnek a rangsorolt technikai adósság
  hátralékba, és a busz-faktor-kockázattal összevetve azonosítják a legsúlyosabb összetett
  kockázatokat.
- **5. szint, Összehangolt:** A szervezet proaktívan azonosítja és kezeli a dokumentálatlan
  kritikus tudásból fakadó kockázatot, mielőtt egy személyzeti átmenet kikényszerítené, és
  konkrét, mérhető beillesztési vagy incidenskezelési javulásokat tud felmutatni, amelyek a
  dokumentációs befektetésre vezethetők vissza.

## Ötletek a vitához

1. Mi jelenleg a legsúlyosabb kombinációnk az alacsony busz-faktorból és a gyenge
   dokumentációból?
2. Milyen kérdést teszünk fel újra és újra, noha létezik dokumentált válasz?
3. Honnan tudnánk, hogy egy kritikus dokumentáció elavult és félrevezető lett?
4. Tartalmazza-e a technikai adósság hátralékunk a dokumentációs hiányokat, vagy láthatatlanok?
5. Mibe kerülne, ha a legkevésbé dokumentált rendszerünk egyetlen szakértője idén távozna?

## A legfontosabb tanulságok

- A **hasznosságot mérd, ne a létezést**: azt, hogy a dokumentáció valóban segít-e, olyan
  közelítő mutatókkal, mint az elérési minták, az elavulás és az ismétlődő kérdések.
- A **dokumentált válasz melletti ismétlődő kérdések** megtalálhatósági problémát jeleznek,
  nem feltétlenül tartalmi erőfeszítésből eredő hiányt.
- A **termelékeny hozzájárulásig eltelt beillesztési idő** erős, gyakorlati közelítő mutatója
  az általános tudásegészségnek.
- A **dokumentálatlan kritikus tudás halmozódó kockázat**, különösen alacsony busz-faktorral
  együtt (3.5 téma); látszólag semmibe sem kerül, amíg egyszerre nagyon sokba nem kerül.
- Olvaszd a **dokumentációs hiányokat a technikai adósság hátralékodba** (4.5 téma), hogy
  tisztességesen versenyezzenek a rangsorolt kapacitásért.

## Források és ajánlott olvasmányok

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, Jared Bhatti,
  Zachariah Goldberg, Ted Kubaska és Sarah Moir (gyakorlati dokumentációs módszerek mérnöki
  csapatoknak).
- *A Philosophy of Software Design*, John Ousterhout (a dokumentáció, a bonyolultság és a
  karbantarthatóság kapcsolata).
- *Team Topologies*, Matthew Skelton és Manuel Pais (a koncentrált és az elosztott tudás
  szervezettervezési következményei).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble és Gene
  Kim (a dokumentáció mint a szállítási teljesítménnyel korreláló képességek egyike).
