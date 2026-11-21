# 2.6 Ciklusidő és összetevői

## Áttekintés és indíték

A **ciklusidő** egy változtatás flow-idejének (2.4 téma) belső felbontása alkotó
mérnöki szakaszaira: kódolási idő, áttekintési idő, tesztelési idő és telepítési idő,
néha tovább bontva átvételi időre (mennyit vár a változtatás, mielőtt bárki
elkezdene vele dolgozni) és aktív időre (mennyi ideig tart, amint valaki
elkezdi). Míg a flow-idő egyetlen számot ad arra, mennyi ideig tart egy
változtatás végpontól végpontig a teljes értékáramon át, a
[ciklusidő](https://en.wikipedia.org/wiki/Cycle_time) megmondja, hová megy valójában
ez az idő, amint a változtatás eléri a mérnökséget, ez az a diagnosztikai réteg,
amelyről a 2.4 téma azt ígérte, hogy a saját összefoglaló száma alatt ül.

Ez a megkülönböztetés azért számít, mert az „az átfutási idő túl hosszú" önmagában
nem cselekvésre alkalmas. Az a csapat, amelynek átfutási idejét a kódolási idő
uralja, más beavatkozást igényel, mint az a csapat, amelynek átfutási idejét egy
háromnapos áttekintési sor uralja, és ez megint más beavatkozást igényel, mint az a
csapat, amely az idejének nagy részét egy megbízhatatlan, lassú tesztkészleten
veszíti. A ciklusidő felbontása nélkül a csapatok hajlamosak találgatni a szűk
keresztmetszetet, és a tipp elég gyakran téves ahhoz, hogy a rossz szakasz javítása
valódi erőfeszítést pazaroljon, miközben a tényleges korlát érintetlen marad.

A nagy csapatoknál a ciklusidő felbontása teszi a szervezetszintű átfutásiidő-regressziót
rejtélyből konkrét, kezelhető problémává. Amikor tucatnyi csapat közös
infrastruktúrán osztozik, egy közös áttekintési szűk keresztmetszet vagy egy közös
lassú CI csővezeték minden csapat átfutási idejét egyformán húzhatja lefelé, és csak a
csapatok közötti ciklusidő-összehasonlítás tárja fel ezt a közös gyökérokot, ahelyett
hogy minden csapat önállóan találgatna a saját helyi magyarázatán.

## Alapelvek

- **A ciklusidő megmagyarázza az átfutási időt; nem helyettesíti.** Jelentsd
  együtt mindkettőt, a ciklusidővel mint diagnosztikával és az átfutási idővel mint
  összefoglalóval.
- **A várakozási idő általában uralja az aktív időt.** A szoftverszállításban a késés
  nagy része a sorban tétlenül álló munkából ered, nem az aktív erőfeszítésből (a 2.5
  téma ezt közvetlenül tárgyalja a flow-hatékonyságon át).
- **A javítás előtt szakaszonként bontsd fel.** A rossz szakaszra célzott javítás
  erőfeszítést pazarol, és demoralizálhatja azt a csapatot, amelyet „gyorsabb
  munkára" kérnek, miközben a valódi szűk keresztmetszet máshol volt.
- **A sok csapatra kiterjedő közös szűk keresztmetszet platformberuházási lehetőség,**
  nem csak egyéni csapatproblémák sora.
- **A ciklusidő-adatokat ugyanazok a kijátszási kockázatok fenyegetik, mint a
  flow-időt** (2.4 téma): figyelj a szakaszhatárokra, amelyek csendben eltolódnak egy
  szám hízelgővé tételére.

## Ajánlások

### Műszerezz minden szakaszhatárt kifejezetten

Bontsd egy változtatás útját megnevezett szakaszokra, világos, műszerezhető
határokkal: kódolás (az első commit-tól a megnyitott pull requestig), átvétel (a
megnyitott pull requesttől az első áttekintésig), áttekintés (az első áttekintéstől a
jóváhagyásig) és telepítés (a jóváhagyástól az élesig). Minden átmenet időbélyegét
automatikusan rögzítsd a verziókezelő és a CI/CD eseményeiből, ne önbevallott
szakaszkövetésből, az 1.5 téma műszerezés-az-önbevallás-előtt elvét alkalmazva.

### Válaszd szét a várakozási időt az aktív időtől minden szakaszon belül

Az áttekintésen belül például különböztesd meg azt az időt, amelyet egy pull request
érintetlenül tölt azzal, hogy egy áttekintő megkezdje (várakozási idő), attól az
időtől, amelyet egy aktív áttekintési beszélgetés igényel, amint elkezdődik (aktív
idő). Ez a megkülönböztetés általában feltárja, hogy a domináns költség a
sorbanállás, nem az erőfeszítés, ami egészen más javítás felé mutat (több
áttekintői kapacitás, jobb értesítés, kisebb áttekintendő pull requestek), mint az,
amely magukat az áttekintési beszélgetéseket akarja gyorsabbá tenni.

### Keress közös szűk keresztmetszetet, mielőtt csapatonként diagnosztizálnál

Amikor több csapat ugyanazt a szakaszt mutatja domináns késésként, egy lassú közös
CI csővezetéket, egy túlterhelt közös áttekintői készletet, egy ritka közös
kiadási vonatot, ez a közös ok platformszintű beruházási lehetőség, nem
kapcsolatlan helyi problémák sora. Aggregáld a ciklusidő-adatokat csapatokon át
kifejezetten ennek a mintának a keresésére, mielőtt feltételeznéd, hogy minden
csapat szűk keresztmetszete az adott csapatra egyedi.

### Használd a ciklusidőt reális, szakaszspecifikus fejlesztési célok kitűzésére

Az egyetlen „csökkentsd az átfutási időt 20%-kal" cél helyett, amely nem ad
támpontot a csapatnak, hova összpontosítson, használd a ciklusidő felbontását
szakaszspecifikus cél kitűzésére: „csökkentsd a medián áttekintési várakozási időt
két napról négy órára". Egy konkrét, szakaszra célzott cél a csapatnak is könnyebb
cselekvésre, és könnyebb ellenőrizni, hogy valódi folyamatváltozáson át érték el,
nem egy máshol történt, független eltolódás miatt.

### Figyelj a szakaszhatár-kijátszásra

Ahogy a flow-idő kezdő- és végpontja is sodródhat (2.4 téma), az egyes
ciklusidő-szakaszhatárok is eltolódhatnak olyan módon, amely hízelgővé teszi egy
adott szakasz számát valódi javulás nélkül, például az áttekintést „megkezdettnek"
jelölni abban a pillanatban, amikor kijelölnek egy áttekintőt, nem akkor, amikor ő
ténylegesen elkezdi olvasni a változtatást. Időnként auditáld a szakaszhatár-műszerezést
a dokumentált definícióhoz képest.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Durva szemcsézettségű ciklusidő (két-három szakasz) | Egyszerű műszerezni és elmagyarázni | Lehet, hogy nem határozza meg elég pontosan a tényleges szűk keresztmetszetet a cselekvéshez |
| Finom szemcsézettségű ciklusidő (sok szakasz, várakozási és aktív felosztás) | Pontos diagnózis, cselekvésre alkalmas szakaszspecifikus célok | Több műszerezési erőfeszítés; több karbantartandó és magyarázandó szám |
| Csapatonkénti ciklusidő-áttekintés | Az egyes csapatok tényleges munkafolyamatához igazított | Elkerülheti a hasonló helyi számok mögé bújó közös, csapatok közötti szűk keresztmetszetet |
| Csapatokon átívelő, aggregált ciklusidő-áttekintés | Feltárja a közös platformszintű szűk keresztmetszeteket | Standardizált szakaszdefiníciókat igényel a csapatok között, hogy értelmes legyen |

A központi feszültség a **diagnosztikai pontosság és a műszerezési költség** között
áll fenn. A finomabb ciklusidő-követés cselekvésre alkalmasabb diagnózist ad, de
többe kerül építeni és karbantartani, és több számot ad, amelyet a csapatnak meg kell
értenie és meg kell bíznia bennük. Úgy oldd fel a feszültséget, hogy durván indulsz
(kódolás, áttekintés, telepítés), és finomabb felosztásokat, várakozási kontra
aktív időt egy adott szakaszon belül, csak akkor adsz hozzá, ha a szakaszról
megerősítették, hogy valódi, visszatérő szűk keresztmetszet, amely megéri a
többlet műszerezési beruházást.

## Kérdések a csapattal való megbeszéléshez

1. **Ha ma regresszált az átfutási idő, meg tudnánk-e mondani egy órán belül, melyik
   konkrét szakasz volt a felelős, adatok, nem találgatás alapján?** Ez a próba
   annak, hogy a ciklusidő-műszerezésetek valóban szolgálja-e a diagnosztikai célját.
   Ha az őszinte válasz nem, érdemes lezárni ezt a hiányt a következő regresszió előtt.

2. **A domináns szűk keresztmetszeti szakaszunkon belül mennyi a késésből a
   várakozási idő, mennyi az aktív idő?** A legtöbb csapat azt feltételezi, hogy az
   aktív erőfeszítés a korlát, mielőtt ellenőrizné, amikor a sorbanállás általában
   a nagyobb költség. Húzd elő a tényleges felosztást a leglassabb szakaszodra, és
   nézd meg, megáll-e a feltételezés.

3. **Több csapat osztozik ugyanazon a domináns szűk keresztmetszeti szakaszon, ami
   platformszintű, nem csapatszintű javításra utal?** Aggregáld a ciklusidő-adataidat
   csapatokon át, és kifejezetten keresd ezt a mintát, mielőtt feltételeznéd, hogy
   minden csapat lassúságát helyi ok okozza.

4. **Kitűztünk-e szakaszspecifikus fejlesztési célokat, vagy csak egyetlen általános
   átfutásiidő-célt, támpont nélkül, hova összpontosítsunk?** A homályos cél
   találgatásra hagyja a csapatot, hova fektessen erőfeszítést; a szakaszspecifikus
   nem. Ellenőrizd a jelenlegi céljaidat ehhez a megkülönböztetéshez.

5. **Eltért-e bármely ciklusidő-szakaszhatár a műszerezésünkben az idő során a
   dokumentált definíciójától?** A szakaszhatárokat ugyanaz a definíciós sodródás
   fenyegeti, mint magát a flow-időt (2.4 téma). Auditálj egy mintát a közelmúltbeli
   szakaszátmeneti eseményekből az írott definícióhoz képest.

6. **Hogyan jelenik meg másképp a ciklusidő-adatokban az áttekintés-központú
   kultúra a bizalom-központúhoz képest?** A nagyon alapos, többfordulós áttekintésű
   csapat hosszabb áttekintési szakaszidőt mutat, mint az, amely megbízik az
   egyszeri jóváhagyású merge-ekben; beszéljétek meg, hogy a jelenlegi egyensúlyotok
   tudatos választást tükröz-e, vagy meg nem vizsgált alapértelmezést.

## Ágazati szemszög

**Startup.** A ciklusidőt általában a kódolási idő uralja az áttekintési vagy telepítési
szakaszok helyett, egyszerűen mert a folyamat minimális. Ahogy a csapat néhány
mérnökön túl nő, kezdd el kifejezetten az áttekintési várakozási időt figyelni, mert
az általában az első szakasz, amely lelassul, ahogy egyre több ember munkájának kell
áthaladnia egyre kevesebb elérhető áttekintőn.

**Kisvállalkozás.** Az alapvető verziókezelő platform analitikája általában elég
szakaszszintű időzítést tár fel (idő az első áttekintésig, idő a merge-ig) egyedi
műszerezés nélkül. Az áttekintési szakaszra összpontosíts először, mert az a
leggyakoribb korai szűk keresztmetszet, és a legkönnyebb kis folyamatváltozással
javítani, például áttekintői rotációval.

**Nagyvállalat.** A tucatnyi csapatot átfogó közös szűk keresztmetszetek gyakoriak és
nagy hatásúak megtalálni: egyetlen túlterhelt közös CI sor vagy egy kötelező központi
áttekintési lépés csendben adóztathatja az átfutási időt szervezetszinten.
Kifejezetten a csapatok közötti ciklusidő-aggregációba fektess, hogy felszínre hozd
ezeket a közös korlátokat, ahelyett hogy minden csapatra bíznád az önálló diagnózist.

**Közszféra.** A ciklusidő-adatok erős, konkrét eszköz a folyamatmodernizáció
szkeptikus érdekeltek előtti indoklására, mert az „az áttekintési várakozási idő
átlagosan négy nap egyetlen szűk keresztmetszetű jóváhagyói szerepkör miatt" sokkal
meggyőzőbb, konkrétabb érv a beruházásra, mint az elvont „a folyamatunk lassú" állítás.

## Példák

**Nagyvállalat.** Egy felhőinfrastruktúra-cég mérnöki vezetése észrevette, hogy az
átfutási idő szinte minden csapatnál egyszerre kúszik felfelé. A csapatok közötti
ciklusidő-aggregáció feltárta, hogy az áttekintési várakozási idő, nem az aktív
áttekintési idő volt a domináns és közös ok: egy kis, központosított
biztonsági-áttekintő csapat szűk keresztmetszetté vált, mert a jóváhagyásukat igénylő
csapatok száma gyorsabban nőtt, mint maga a csapat. A biztonsági tanúsítvánnyal
rendelkező áttekintők szélesebb körének bővítése és képzése, ahelyett hogy az egyes
csapatokat arra kérték volna, hogy valahogy gyorsabban kódoljanak vagy teszteljenek,
megoldotta a közös szűk keresztmetszetet, és egy negyedéven belül az egész
vonalon visszahozta az átfutási időt.

**Közszféra.** Egy állami kormány digitális szolgáltatási csapata nyomás alatt állt az
átfutási idő csökkentésére, és kezdetben azzal reagált, hogy a mérnököket gyorsabb
munkára kérte, természetes, de végül nem segítő ösztön. A ciklusidő felbontása
megmutatta, hogy az aktív kódolási idő alig változott évről évre; a regresszió szinte
egésze egy tizennyolc hónappal korábban megfelelőségi intézkedésként bevezetett
kötelező architektúra-áttekintési szakasz növekvő sorából származott. A csapat ezt az
áttekintést könnyebb, kockázat szerint rétegzett folyamatra tervezte át a kis
kockázatú változtatásokra, lényegesen csökkentve az áttekintési várakozási időt,
miközben a valóban nagy kockázatú változtatásokra megőrizte a teljes áttekintési
szigort.

## Üzleti érv: indítékok, ROI és TCO

A ciklusidő felbontásának megtérülése a célzott, hatékony beruházás: az a
szervezet, amely pontosan tudja, melyik szakasz a szűk keresztmetszet, ki tudja
javítani azt a konkrét szakaszt, ahelyett hogy vékonyan szórná az erőfeszítést egy
egész folyamaton át abban a reményben, hogy valami segít. A fenti biztonsági
áttekintési példa tipikus: a pontosan célzott javítás, egyetlen konkrét szűk
keresztmetszetű erőforrás bővítése, szervezetszintű problémát oldott meg sokkal
olcsóbban, mint egy széles, fókuszálatlan „gyorsítsuk fel a szállítást"
kezdeményezés tette volna.

A teljes birtoklási költség a szakaszszintű időbélyegek megbízható rögzítésének
műszerezési erőfeszítése és a szakaszhatárok sodródásra való időszakos auditálásának
folyamatos fegyelme. Ez a költség megéri, mert az alternatíva, a szűk
keresztmetszetek találgatása és a rossz szakasz javítása, az idő során sokkal több
mérnöki erőfeszítést pazarol, mint amennyibe maga a műszerezés kerül.

## Antiminták és buktatók

- **Reagálás az átfutásiidő-regresszióra ciklusidő-diagnózis nélkül:** gyakran a
  rossz szakasz javításához vezet.
- **Feltételezni, hogy az aktív erőfeszítés, nem a várakozási idő a domináns
  költség:** általában téves; a legtöbb valódi szállítási csővezetéken a
  sorbanállás uralkodik (2.5 téma).
- **Közös, csapatok közötti szűk keresztmetszet elmulasztása azzal, hogy a ciklusidőt
  csak csapatonként tekintik át:** nagy hatású platformjavítás felfedezetlen marad.
- **Homályos általános átfutásiidő-cél kitűzése szakaszspecifikus támpont nélkül:**
  találgatásra hagyja a csapatokat, hova összpontosítsák az erőfeszítést.
- **Szakaszhatárok definíciós sodródása:** egy adott szakasz számát valódi javulás
  nélkül teszi hízelgővé.
- **Minden lehetséges finom szakasz műszerezése, mielőtt bármelyikről megerősítették
  volna, hogy valódi szűk keresztmetszet:** műszerezési erőfeszítést pazarol olyan
  részletre, amely még nem alapoz meg döntést.

## Érettségi modell

- **1. szint, Kezdeti:** A ciklusidőt egyáltalán nem bontják fel; a csapatok találgatják
  a szűk keresztmetszeteket, amikor az átfutási idő regresszál.
- **2. szint, Fejlődő:** Néhány csapat informálisan követ durva szemcsézettségű
  szakaszidőzítést, de nincs következetes műszerezés vagy csapatok közötti
  összehasonlítás.
- **3. szint, Szabványosított:** A szakaszhatárokat következetesen műszerezik a
  szervezetben, a várakozási időt az aktív időtől elválasztva a domináns szűk
  keresztmetszeti szakaszokban.
- **4. szint, Irányított:** A csapatok közötti ciklusidő-aggregáció aktívan feltárja a
  közös szűk keresztmetszeteket; a szakaszspecifikus fejlesztési célok váltják a
  homályos általános átfutásiidő-célokat.
- **5. szint, Összehangolt:** A ciklusidő-adatok közvetlenül vezérlik a
  platformberuházások priorizálását, és a szervezet konkrét, célzott javításokra tud
  mutatni, egy bővített áttekintői készletre, egy gyorsabb közös csővezetékre, amelyek
  mérhetően javították az átfutási időt sok csapatnál egyszerre.

## Ötletek a vitához

1. Mi a jelenlegi domináns szűk keresztmetszeti szakaszunk, és mennyire bízunk ebben a válaszban?
2. A szűk keresztmetszeti szakasz idejének mekkora része várakozási idő, mekkora aktív idő?
3. Osztozik-e néhány csapatunk ugyanazon a szűk keresztmetszeten, ami platformszintű javításra utal?
4. Mikor tűztünk ki utoljára szakaszspecifikus, nem általános szállítási fejlesztési célt?
5. Megváltozott-e valaha egy szakaszhatár-definíció az eszközeinkben dokumentáció nélkül?

## A legfontosabb tanulságok

- A ciklusidő **felbontja a flow-időt** mérnöki szakaszokra, kódolás, áttekintés,
  tesztelés, telepítés, és ez az összefoglaló szám alatti diagnosztikai réteg.
- Válaszd szét a **várakozási időt az aktív időtől** minden szakaszon belül; a
  sorbanállás általában uralja az aktív erőfeszítést (2.5 téma).
- Keress **csapatok közötti közös szűk keresztmetszeteket**, mielőtt feltételeznéd,
  hogy a lassulás csapatspecifikus; a közös ok gyakran platformberuházási lehetőség.
- Tűzz ki **szakaszspecifikus fejlesztési célokat**, ne homályos általánosakat, hogy a
  csapatok pontosan tudják, hova összpontosítsanak.
- A szakaszhatárokat ugyanaz a **definíciós sodródás** kockázata fenyegeti, mint magát
  a flow-időt; auditáld őket időnként.
- A 2.7 téma megadja a mögöttes matematikát, Little törvényét, hogy miért mozog
  együtt a folyamatban lévő munka és a ciklusidő.

## Források és ajánlott olvasmányok

- *The Principles of Product Development Flow*, Donald G. Reinertsen
  (a ciklusidő-elemzés alapjául szolgáló sorbanállás-elmélet és kötegméret-gondolkodás).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti
  (ciklusidő- és flow-alapú mérés szoftverszállításhoz).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble és Gene Kim (az átfutási idő és kapcsolata a szállítási teljesítménnyel).
- *The Goal*, Eliyahu M. Goldratt (a korlátok elmélete, és az elv, hogy a tényleges
  szűk keresztmetszetet kell megtalálni és javítani, nem mindenhol optimalizálni).
