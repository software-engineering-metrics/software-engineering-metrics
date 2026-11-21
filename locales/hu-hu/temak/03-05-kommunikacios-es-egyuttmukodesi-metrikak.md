# 3.5 Kommunikációs és együttműködési metrikák

## Áttekintés és indíték

A **kommunikáció és együttműködés**, a SPACE (3.1 téma) C betűje, azt méri, hogyan
áramlik valójában az információ emberek és csapatok között: mennyire található
meg a dokumentáció, mennyire egyenletesen oszlik el a tudás egy csapatban, mennyire
jól hangolódnak össze a csapatok közötti függőségek, és hogyan illeszkednek be az
új csapattagok a közös megértés áramlásába. Ez a dimenzió az öt közül gyakran a
legkevésbé műszerezett, éppen mert nehezebb megfigyelni, mint a szállítási adatot,
és kevésbé személyes, mint az elégedettségi adat, és ez a hiány hiba, mert az
itteni zavarok gyakran gyökérokai azoknak a problémáknak, amelyek tévesen
hozzárendelve minden más dimenzióban megjelennek.

A növekvő változtatási hibaarány (2.10 téma), amely tesztelési problémának látszik,
olykor valójában kommunikációs probléma: egy csapat, amely nem tudott egy
függőség változásáról, amíg az el nem romlott az éles rendszerben. A csökkenő
elégedettségi trend (3.2 téma), amely munkaterhelési problémának látszik, olykor
valójában elszigeteltségi probléma: egy mérnök, akit csendben kizártak azokból a
beszélgetésekből, ahol a döntések születnek. Ennek a témának a központi érve az,
hogy a kommunikáció és az együttműködés éppen azért érdemel közvetlen mérést, mert
a hibáik más problémának álcázzák magukat, és az a csapat, amely rossz gyökérokot
kerget, valódi erőfeszítést pazarol a rossz dolog javítására.

Nagy csapatoknál ezt a dimenziót szerkezetileg egyre nehezebb fenntartani, éppen
ahogy egyre fontosabbá válik. Egy ötfős csapat koordinációja a napi közelségen
keresztül megy végbe, és szinte semmilyen szándékos mérést nem igényel; egy
ötszáz fős, időzónákon és üzletági egységeken átívelő szervezet a dokumentációra, a
megtalálhatóságra és a csapatok közötti koordinációs mechanizmusokra támaszkodik,
amelyeket tudatosan kell megtervezni és aktívan figyelni, mert a kis léptéken
működő informális csatornák egyszerűen nem érnek el ilyen messzire.

## Alapelvek

- **A kommunikációs zavarok gyakran más problémának álcázzák magukat.** Egy
  minőségi vagy elégedettségi gond mögött együttműködési gyökérok állhat.
- **Ezt a dimenziót nehéz a legjobban automatikusan műszerezni**, és a kísértés
  az, hogy teljesen kihagyjuk; állj ellen ennek tudatosan.
- **A tudáskoncentráció mérhető kockázat, nem pusztán homályos aggodalom.** Kövesd,
  milyen szűk körben van meg a kritikus tudás.
- **A csapatok közötti függőségi súrlódás gyakran láthatatlan az érintett
  csapatok számára,** amíg valaki közvetlenül nem méri.
- **A beilleszkedés sebessége közvetlen, mérhető közelítő mutatója annak, hogy a
  közös megértés mennyire áramlik valójában** egy szervezetben.

## Ajánlások

### Mérd közvetlenül a tudáskoncentrációt

Kövesd, hány ember tud hozzáértően áttekinteni, módosítani vagy üzemeltetni minden
kritikus rendszerkomponenst: az a komponens, amelyhez csak egy képzett ember
tartozik, **[busz-faktor](https://en.wikipedia.org/wiki/Bus_factor)** egy, súlyos és
gyakran láthatatlan kockázat (a testvérkönyv, a `software-engineering-guide`
hosszú életű rendszerek fenntartásáról szóló témája ezt mélyebben tárgyalja). A
verziókezelő blame-adatai az ügyeleti beosztás nyilvántartásával együtt automatikusan
felszínre hozhatják ezt a koncentrációt: keress olyan komponenseket, ahol egyetlen
szerző vagy egyetlen ügyeleti válaszadó a változtatások vagy incidensreagálások
aránytalan hányadát adja egy érdemi időszakban.

### A csapatok közötti függőségi súrlódást közvetlen jellel mérd

Kövesd, mennyi ideig tart egy csapatok közötti kérés, egy szükséges API-változtatás,
egy megosztott könyvtárfrissítés, egy összehangolt kiadás felvetésétől a
megoldásáig, szellemében hasonlóan a 2.6 téma ciklusidő-felbontásához, de kifejezetten
a csapatok közötti, nem a csapaton belüli koordinációra alkalmazva. Az a csapat,
amely következetesen hetekig vár egy másik csapat által birtokolt függőségre,
együttműködési problémával küzd, amely egyik csapat saját belső szállítási
metrikáiban sem jelenik meg tisztán.

### A dokumentáció megtalálhatóságát használd jelként, ne csak a létezését

Az elavult vagy megtalálhatatlan oldalakkal teli wiki nem bizonyítéka a jó
kommunikációnak csak azért, mert a tartalom technikailag létezik valahol. Ahol
lehet, kövesd, milyen gyakran használják ténylegesen a dokumentációt, milyen gyakran
jelzi egy új csapattag, hogy nem találta meg a szükséges választ, vagy milyen gyakran
teszik fel újra és újra ugyanazt a kérdést egy csevegőcsatornán, mert a válasz,
bár dokumentált, nem volt megtalálható. Ez közvetlenül összekapcsolja a
dokumentáció minőségét (4.6 téma) ennek a dimenziónak az együttműködési
aggályaival.

### Kövesd a produktív hozzájárulásig tartó beilleszkedési időt mint közvetlen közelítő mutatót

Az az idő, amely egy új csapattag csatlakozásától az első érdemi, önálló
hozzájárulásáig telik el, erős, gyakorlati közelítő mutatója annak, hogy a közös
megértés mennyire áramlik valójában egy szervezetben: az a csapat, ahol a tudás
teljes egészében az emberek fejében él, lassan és kiszámíthatatlanul
illeszti be az újakat; az a csapat, amelynek valóban jó dokumentációja, világos
felelőssége és hozzáférhető mentorálása van, gyorsabban és következetesebben.
Kövesd ezt a metrikát kifejezetten, és a hosszú vagy erősen változó beilleszkedési
időt kezeld együttműködési jelként, nem csak HR-ügyként.

### Időnként térképezd fel a tényleges kommunikációs hálózatokat, ne csak a szervezeti ábrákat

A szervezeti ábra azt írja le, ki kinek jelent, de ritkán azt, hogy ki kivel beszél
valójában a munka elvégzéséhez. A kommunikációs minták, a kódáttekintési hálózatok
(ki kinek a munkáját tekinti át) vagy a megbeszélések résztvevői közötti átfedés
időszakos, könnyű elemzése feltárhat egy valódi együttműködési szerkezetet, amely
jelentősen eltér a formális szervezeti ábrától, gyakran felfedve egy informális
szűk keresztmetszetet (egy embert, akin mindenki átmegy) vagy egy elszigetelt
zsebet (egy részcsapatot, amely kisodródott a tágabb információáramlásból), amely
máskülönben láthatatlan maradna.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs közvetlen együttműködésmérés | Kis többletteher | A gyökérokokat más dimenziókhoz rendelik tévesen; a kockázatok láthatatlanok maradnak |
| Tudáskoncentráció-követés | Közvetlenül felszínre hoz egy valódi, súlyos kockázatot (busz-faktor) | Több rendszer (verziókezelés, ügyelet) adatának kombinálását igényli |
| Csapatok közötti függőségi súrlódás követése | Feltárja a koordinációs problémákat, amelyek egyik csapaton belül sem láthatók | Szándékos műszerezést igényel; a meglévő eszközökből nem automatikus |
| Kommunikációs hálózat térképezése | Feltárja a valódi, informális szerkezetet a szervezeti ábra mögött | Tolakodónak érződhet, ha nem kezelik az elégedettségi adattal azonos gondossággal |

A központi feszültség a **műszerezési nehézség és a diagnosztikai érték között**
húzódik. Ezt a dimenziót valóban nehezebb automatikusan mérni, mint a szállítási
vagy az aktivitási adatot, és éppen ez a nehézség az oka, hogy sok szervezet
kihagyja, noha a hibái gyakran a más dimenziókhoz rendelt problémák rejtett
gyökérokai. A feszültséget úgy oldd fel, hogy a legnagyobb értékű, leginkább
kezelhető jelekkel indulsz, a tudáskoncentrációval és a csapatok közötti
függőségi súrlódással, amelyek mindkettő nagyrészt a meglévő verziókezelő- és
hibakövető adatokból származtatható, mielőtt ambiciózusabb kommunikációshálózat-
elemzésbe fognál.

## Kérdések a csapattal való megbeszéléshez

1. **Ismerjük-e a busz-faktort minden kritikus rendszerkomponensünkre, vagy csak
   a nehezebb úton tudnánk meg, amikor az az egy ember, aki érti, nem elérhető?**
   Kérd le a verziókezelő és ügyeleti adatokat a legkritikusabb rendszereidhez, és
   ellenőrizd őszintén, mennyire koncentrált valójában a tudás.

2. **Mennyi ideig tart egy tipikus csapatok közötti függőségi kérés megoldása, és
   észrevette volna-e bármelyik érintett csapat ezt a súrlódást tudatos mérés
   nélkül?** Válassz egy friss csapatok közötti függőséget, és kövesd végig a
   tényleges idővonalát; a válasz gyakran hosszabb, és az érintettek számára
   kevésbé látható, mint bármelyik csapat feltételezte.

3. **Amikor nemrég minőségi vagy elégedettségi problémánk volt, része lehetett-e a
   valódi gyökéroknak kommunikációs vagy együttműködési zavar?** Nézz vissza egy
   friss incidensre vagy elégedettségi visszaesésre, és tedd fel kifejezetten ezt a
   kérdést, ahelyett, hogy elfogadnád az első, kézenfekvőbb magyarázatot.

4. **Mennyi ideig tart egy új csapattagnak az első érdemi, önálló hozzájárulása,
   és mennyire változik ez az idő emberenként?** A hosszú vagy erősen változó
   beilleszkedési idő közvetlen, mérhető tünete annak, hogy a közös megértés
   mennyire áramlik valójában a csapatodban.

5. **Az informális kommunikációs hálózatunk megegyezik-e a formális szervezeti
   ábránkkal, vagy kialakult egy rejtett szűk keresztmetszet vagy egy elszigetelt
   zseb, amelyet senki nem nevezett meg?** Ha ezt még soha nem vizsgáltad
   közvetlenül, ez a hiány önmagában megér egy beszélgetést.

6. **A dokumentációnk valóban megtalálható, vagy csak létezik valahol, ahol nehéz
   rátalálni?** Kérdezz meg egy friss új csapattagot, vagy próbálj tudatosan
   megválaszolni egy valódi kérdést kizárólag a dokumentált forrásaid
   segítségével, és nézd meg, hogyan alakul az élmény.

## Ágazati szemszög

**Startup.** A kommunikáció természetesen megy végbe a közelségen és a napi
beszélgetésen keresztül egy kis csapatban, és a formális mérés általában
szükségtelen. A figyelendő kockázat az, hogy a busz-faktor veszélyesen koncentrálódik,
ahogy a csapat kinő abból a méretből, ahol az informális ozmózis még mindenkit elér,
gyakran nyolc és tizenkét ember körül.

**Kisvállalkozás.** Egy egyszerű, időszakos, őszinte beszélgetés, „ki az
egyetlen ember, aki érti ezt a rendszert”, gyakran formális műszerezés nélkül is
felszínre hozza a legkritikusabb tudáskoncentrációs kockázatokat. Először a két-három
legtörékenyebb, legkoncentráltabb tudásterületet dokumentáld.

**Nagyvállalat.** A csapatok közötti függőségi súrlódás és a tudáskoncentráció
egyaránt rosszul skálázódik itt, mert több csapat több koordinációs felületet
jelent, és több kritikus rendszert, amely egy zsugorodó, régóta ott lévő szakértői
körhöz kerülhet. Fektess be tudatosan az ebben a témában ajánlott műszerezésbe,
mert az informális tudatosság ekkora léptéknél valóban nem tud lefedni egy
szervezetet.

**Közszféra.** A közszféra szervezeteiben gyakori hosszú életű rendszerek és
hosszú alkalmazotti jogviszonyok a látszólagos stabilitás mögé bújó súlyos
busz-faktor-kockázatot hozhatnak létre, mert egy rendszer, amely egy évtizede nem
cserélt gazdát, teljes mértékben egy-két nyugdíjhoz közeledő emberre
támaszkodhat. A tudáskoncentráció mérését a működésfolytonosság kérdéseként kezeld,
ne csak mérnöki kedvességként.

## Példák

**Nagyvállalat.** Egy logisztikai cég platformcsapata csak egy kulcsmérnök
szabadsága alatti kritikus incidens után fedezte fel, hogy egy központi
útvonaltervező algoritmus tényleges busz-faktora egy: a verziókezelési előzmények
szerint egyetlen ember írta a komponens friss változtatásainak több mint 90%-át, az
ügyeleti beosztás nyilvántartása pedig azt mutatta, hogy ugyanaz a személy oldotta
meg személyesen az összes kapcsolódó incidenst az előző két évben. A csapat
tudatos tudásterjesztő programot vezetett be, páros munka alkalmakkal és a
kapcsolódó incidensek tulajdonlásának forgatásával, és egy nyolc hónappal későbbi
követő elemzés szerint a busz-faktor négyre nőtt, az eredeti mérnök pedig
felszabadult új, nagyobb hatású munkára ahelyett, hogy állandó
egyetlen hibaponttá maradna.

**Közszféra.** Egy állami juttatási ügynökség mérnöki csapata először mérte a
csapatok közötti függőségi súrlódást, miután egy megosztott jogosultság-ellenőrző
szolgáltatásnál ismétlődő, informálisan észlelt késéseket tapasztaltak. Az adatok azt
mutatták, hogy a megosztott szolgáltatás csapatától érkező függőségi változtatásra
a mediánvárakozás tizenegy nap volt, sokkal hosszabb, mint amit bármelyik csapat
informálisan megkérdezve feltételezett, és a gyökérok egy nem egyértelmű,
dokumentálatlan kérési folyamat volt, nem kapacitáshiány. Egy világos, egyszerű
kérési folyamat és egy vállalt válaszidő-cél közzététele a megosztott szolgáltatásra
egy negyedéven belül két nap alá szorította a mediánvárakozást, további
létszám nélkül.

## Üzleti érv: indítékok, ROI és TCO

A kommunikáció és az együttműködés közvetlen mérésének megtérülése az olyan
gyökérokok elkapása, amelyeket más dimenziók tévesen rendelnek: az a minőségi
probléma, amely tesztelési hiánynak látszik, de valójában kommunikációs zavar,
erőfeszítést pazarol, amikor a csapat több teszt hozzáadásával próbálja megoldani
a mögöttes koordinációs hiba javítása helyett. A fenti busz-faktoros példa
mutatja ennek a megtérülésnek a legszembetűnőbb változatát: az a szervezet, amely
proaktívan felfedez és javít egy súlyos tudáskoncentrációs kockázatot, elkerüli
annak a katasztrofális költségét, hogy egy valódi válság közben fedezze fel, amikor
az az egy ember, aki egy kritikus rendszert értett, valóban nem elérhető.

A teljes birtoklási költség (TCO) főleg műszerezési erőfeszítés, a verziókezelő-,
ügyeleti és hibakövető adatok olyan módon való kombinálása, amely dobozból kivéve
nem automatikus, valamint a tudáskoncentráció és a függőségi súrlódás kifejezett
időszakos áttekintésének fegyelme. Ez a költség szerény egy valódi busz-faktor-
válság vagy egy krónikus, kezeletlen csapatok közötti koordinációs hiba
költségéhez képest.

## Antiminták és buktatók

- **A dimenzió kihagyása, mert nehéz automatikusan műszerezni:** a gyökérokokat más,
  könnyebben mérhető dimenziókhoz rendelve hagyja.
- **A szervezeti ábra kezelése a valódi kommunikációs minták pontos képeként:**
  gyakran téves, és a rés éppen ott van, ahol a rejtett szűk keresztmetszetek élnek.
- **A busz-faktor figyelmen kívül hagyása, amíg egy válság kikényszeríti a
  felfedezést:** az ebben a témában figyelmeztetett leginkább káros hibamód.
- **Annak feltételezése, hogy a dokumentáció létezése egyenlő a hasznosságával:** az
  elavult vagy megtalálhatatlan tartalom kevés valódi kommunikációs értéket ad.
- **A csapatok közötti súrlódás mérése, de a világos, javítható gyökérokra való
  cselekvés elmulasztása, miután megtalálták:** pazarolja a diagnosztikai
  beruházást.
- **A lassú, változó beilleszkedés tisztán HR-ügyként kezelése mérnöki
  együttműködési jel helyett:** elmulaszt egy valóban hasznos, mérhető közelítő
  mutatót.

## Érettségi modell

- **1. szint, Kezdeti:** A kommunikációt és az együttműködést egyáltalán nem mérik;
  a busz-faktort és a csapatok közötti súrlódást csak válságon keresztül fedezik
  fel.
- **2. szint, Fejlődő:** Van némi informális tudatosság a tudáskoncentrációról, de
  nincs következetes mérés vagy proaktív vizsgálat.
- **3. szint, Szabványosított:** A busz-faktort és a csapatok közötti függőségi
  súrlódást következetesen mérik a kritikus rendszerekre és a megosztott
  szolgáltatásokra az egész szervezetben.
- **4. szint, Irányított:** A kommunikációs hálózat térképezése időszakosan feltárja
  a rejtett szűk keresztmetszeteket és az elszigetelt zsebeket, és a beilleszkedési
  időt a közös megértés egészségének közvetlen közelítő mutatójaként követik.
- **5. szint, Összehangolt:** A szervezet proaktívan csökkenti a
  tudáskoncentrációs kockázatot és a csapatok közötti súrlódást, mielőtt incidenst
  okoznának, és rá tud mutatni konkrét beavatkozásokra, tudatos
  tudásterjesztésre, tisztázott függőségi folyamatokra, amelyek mérhetően javították
  ezt a dimenziót.

## Ötletek a vitához

1. Mekkora őszintén a busz-faktorunk a legkritikusabb rendszerünkre?
2. Melyik csapatok közötti függőség okozta a legtöbb súrlódást az elmúlt negyedévben, és mértük-e?
3. Megtalálná-e egy új csapattag a dokumentációnkat, vagy csak azt találná, hogy technikailag létezik valahol?
4. Megegyezik-e az informális kommunikációs hálózatunk a szervezeti ábránkkal?
5. Melyik minőségi vagy elégedettségi problémának lehet együttműködési gyökéroka, amelyet még nem vizsgáltunk?

## A legfontosabb tanulságok

- A kommunikációs és együttműködési hibák gyakran **más problémának álcázzák
  magukat**; a rossz dimenzióhoz rendelt gyökérok erőfeszítést pazarol.
- Kövesd a **tudáskoncentrációt (busz-faktor)** közvetlenül verziókezelő és
  ügyeleti adatokkal, ahelyett, hogy megvárnád, hogy egy válság felfedje.
- Mérd kifejezetten a **csapatok közötti függőségi súrlódást**; általában
  láthatatlan az érintett csapatok számára, amíg nem mérik.
- Használd a **produktív hozzájárulásig tartó beilleszkedési időt** közvetlen,
  gyakorlati közelítő mutatóként arra, mennyire áramlik a közös megértés.
- Időnként térképezd fel a **valódi kommunikációs hálózatokat**, mert gyakran
  jelentősen eltérnek a formális szervezeti ábrától.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, Matthew Skelton és Manuel Pais műve (a csapatok
  interakciós módjai és a csapatok közötti függőségek tervezése).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco és Timothy
  Lister műve (informális kommunikációs szerkezetek és hatásuk a
  termelékenységre).
- Conway, Melvin E., "How Do Committees Invent?" (1968): a Conway-törvény
  eredete, a kommunikációs szerkezet és a rendszerszerkezet kapcsolatáról.
