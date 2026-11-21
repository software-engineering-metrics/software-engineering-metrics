# 2.2 Flow-elemek: funkciók, hibák, kockázatok és adósság

## Áttekintés és indíték

A **flow-elem** a Flow Framework munkaegysége, és minden flow-elem pontosan a
négy típus egyikébe tartozik: **funkciók**, az ügyfélnek leszállított új üzleti
érték vagy képesség; **hibák**, a felhasználók vagy a tesztelés által talált
bugok minőségi javításai; **kockázatok**, az üzletet védő biztonsági,
megfelelőségi, adatvédelmi és governance-munka; és **adósság**, a
[technikai adósság](https://en.wikipedia.org/wiki/Technical_debt), az
architekturális fejlesztés és az infrastruktúramunka, amely a jövőbeli
sebességet teszi lehetővé. A 2.1 téma bemutatta azt a keretrendszert, amelyhez
ez a négy kategória tartozik; ez a téma magába a taxonómiába megy mélyre,
mert a kategóriák csak akkor adnak értéket, ha a csapat őszintén és
következetesen sorolja beléjük a munkáját.

A flow-elemek meghatározó tulajdonsága, hogy a négy típus közötti elosztás
**zéró összegű játék**: egy adott időszakban rögzített mennyiségű mérnöki
kapacitás áll rendelkezésre, és minden funkcióra fordított óra egy óra,
amelyet nem adósságra, kockázatra vagy hibamunkára fordítottak. Ez nem új tény a
szoftverszállításról, minden mérnöki vezető tudja, hogy a kapacitás véges, de a
legtöbb szervezetnek nincs következetes, őszinte módja arra, hogy lássa a tényleges
megoszlást. A sprintsebesség típustól függetlenül számolja a story pontokat; az
elfogyasztott backlog ugyanúgy néz ki, akár egy új fizetési folyamat állt mögötte,
akár három hónap nem túl látványos biztonsági helyreállítás. A flow-elemek éppen
azért léteznek, hogy ezt a láthatatlan megoszlást láthatóvá tegyék.

A nagy csapatoknál ez a láthatóság megváltoztatja az erőforrás-elosztási beszélgetés
természetét. Ahelyett hogy egy mérnöki vezető számszerűsítetlen érvet hozna fel,
hogy „több időre van szükségünk a technikai adósságra", a flow-elem-besorolás
tényleges számot állít elő, az adósság az előző negyedév kapacitásának 30%-át
fogyasztotta el, amelyet meg lehet vitatni, meg lehet védeni, és tudatosan lehet
igazítani az üzleti érdekeltekkel. A sok párhuzamos termékvonalat működtető
nagyvállalati szervezetek és a régi rendszerek kockázata ellen az új,
állampolgároknak szóló funkcionalitást mérlegelő kormányzati szervek egyaránt
jobban függnek az ilyen védhető, számszerűsített kompromisszumtól, mint attól a
privát, informális érzettől, hogy „túl sok időt töltünk karbantartással".

## Alapelvek

- **Minden flow-elem pontosan egy típushoz tartozik.** Az egyetlen besorolás
  kikényszerítése, a vegyes vagy kétértelmű helyett, teszi használhatóvá a
  taxonómiát összesített jelentéshez.
- **Az elosztás zéró összegű, nem additív.** Több kapacitás funkcióra
  szükségszerűen kevesebb kapacitás hibákra, kockázatra és adósságra ugyanabban
  az időszakban.
- **Nincs általánosan egészséges eloszlás.** Egy növekedési fázisban lévő fiatal
  termék jogosan hajolhat a funkciók felé; egy valódi technikai kockázatot hordozó
  érett rendszer jogosan hajolhat az adósság- és kockázati munka felé.
- **Az adósság- és kockázati munkát ez a fegyelem nélkül krónikusan
  alulbejelentik.** Hajlamos csendben történni, általános „mérnöki feladatokba"
  beolvasztva, amíg a flow-elem-besorolás a nyilvánosság elé nem kényszeríti.
- **A besorolás minősége meghatározza a taxonómia teljes értékét.** A
  következetlenül alkalmazott vagy utólag kijátszott taxonómia olyan számokat
  ad, amelyek aktívan félrevezetnek, nem tájékoztatnak.

## Ajánlások

### Minden elemet felvételkor sorolj be, mindegyik típushoz írott definícióval

Egyezzetek meg tömör, írott definícióban arról, mi számít funkciónak, hibának,
kockázatnak és adósságnak az adott környezetetekben, és követeld meg, hogy minden
új munkadarabot ehhez a definícióhoz képest soroljanak be abban a pillanatban,
amikor belép az értékáramba, nem a befejezése után. Az előre megegyezett
definíció ellenáll annak a kísértésnek, hogy utólag soroljunk be aszerint, hogyan
tűnt egy munka, és ez éppen az a kijátszási kockázat, amelyet ez a téma lejjebb
közvetlenül megnevez.

### A flow-eloszlást trendként jelentsd, ne egyetlen pillanatképként

Egyetlen időszak eloszlása kevesebbet mond, mint a több időszakon át tartó trend.
Az egyik elemtípus felé tartó egyenletes sodródás, amikor a funkciók emelkednek,
miközben az adósság negyedévről negyedévre csendben zsugorodik, sokkal erősebb
jel bármely egyetlen időszak számánál, és általában az a minta, amelyet érdemes az
érdekeltekkel felvetni, mielőtt válsággá válik, nem utána.

### Határozz meg tudatos célelosztást az üzleti érdekeltekkel, ne csak a mérnökséggel

Döntsétek el együtt a termék- és üzleti vezetéssel, milyen egy egészséges eloszlás
az adott értékáram jelenlegi szakaszában, és időnként vizsgáljátok felül ezt a
célt, ahelyett hogy alapértelmezés szerint sodródni hagynátok. Egy fiatal,
növekedési fázisú termék és egy érett, stabilitási fázisú rendszer jogosan eltérő
egészséges célokkal bír, és magának a célnak megtárgyalt üzleti döntésnek kell
lennie, nem olyasminek, amit a mérnökség csendben egyedül dönt el.

### Ellenőrizd a flow-elem-besorolást független bizonyítékokkal

Időnként vesd össze a flow-eloszlásodat olyan metrikákkal, amelyek nem függnek az
önbesorolástól: a kiszökött hibák aránya (5.1 téma), a technikai adósság mérése
(4.5 téma) és a sérülékenységkezelési metrikák (6.4 téma). Ha a hibák vagy a
sérülékenységek nőnek, miközben a „hibák" és a „kockázat" flow-elem-részesedések
változatlanok maradnak vagy zsugorodnak, ez az eltérés a legvilágosabb elérhető
jele annak, hogy a besorolás elszakadt a valóságtól.

### Különösen figyelj a funkciógyár mintára

Ha a flow-eloszlás azt mutatja, hogy a funkciók következetesen a kapacitás
szinte egészét felemésztik, negyedévről negyedévre, az adósság- és kockázati munka
pedig soha nem emelkedik jelképes részesedés fölé, ez a minta (néha
„funkciógyárnak" hívják) általában azt jelenti, hogy az adósságot és a kockázatot
kiéheztetik a kapacitástól, nem azt, hogy a rendszernek valóban nincs szüksége
karbantartásra. Ez a minta rövid távon kényelmes, később drága, végül minőségi
vagy biztonsági válságként jelenik meg, amely figyelmeztetés nélkül érkezik a
flow-eloszlási diagramon, mert a mögöttes felhalmozódás soha nem volt látható.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs formális besorolás (általános backlog) | Nincs folyamati többletteher | Az adósság-, kockázati és hibamunka láthatatlan marad; nehéz megvédeni az erőforrás-elosztási döntéseket |
| Négytípusú flow-elem-besorolás | Láthatóvá és az érdekeltekkel megtárgyalhatóvá teszi a kapacitáselosztást | Felvételkori fegyelmet és típusonként írott, elfogadott definíciót igényel |
| Finomabb besorolás (sok altípus) | Több diagnosztikai részlet | Több besorolási erőfeszítés; több szám magyarázandó az érdekelteknek |
| Utólagos besorolás | Könnyebb alkalmazni, nincs előzetes folyamatváltozás | Nagyon ki van téve a kijátszásnak; a besorolás afelé sodródik, ami a legjobban néz ki |

A központi feszültség a **besorolási fegyelem és a folyamati többletteher** között áll
fenn. A négytípusú taxonómia szándékosan durva, elég durva ahhoz, hogy egy elem
besorolása másodpercekbe, ne vitába kerüljön, de ez a durvaság csak akkor tartja
magát, ha a felvételkori, írott definícióhoz mért besorolás fegyelmét valóban
fenntartják. Úgy oldd fel a feszültséget, hogy a taxonómiát pontosan ennyire
egyszerűen tartod, négy típus, nem több, és minden többletszigort az audit
lépésbe fektetsz (a független bizonyítékokkal való keresztellenőrzés), nem pedig
egy bonyolultabb besorolási sémába, amely valós munkaterhelés alatt erodálódik.

## Kérdések a csapattal való megbeszéléshez

1. **Ha mindent besoroltunk volna, amit a csapatunk a múlt negyedévben
   leszállított, milyen lenne a tényleges megoszlás a funkciók, hibák, kockázat és
   adósság között, és meglepné az érdekelteinket?** A legtöbb csapat soha nem
   végezte el őszintén ezt a gyakorlatot. Próbáld ki valódi adatokkal, mielőtt
   azt feltételeznéd, hogy már tudod a választ.

2. **Van írott, elfogadott definíciónk arra, mi számít funkciónak, adósságnak
   vagy kockázatnak a mi környezetünkben, vagy a besorolás attól függ, éppen ki
   címkézi a jegyet?** Az informális, következetlen definíció olyan számokat ad,
   amelyek pontosnak látszanak, de időszakról időszakra nem összehasonlíthatók.

3. **Sodródott-e valaha a flow-eloszlásunk egyenletesen egy elemtípus felé anélkül,
   hogy bárki szándékosan ezt döntötte volna?** A lassú sodródás könnyen
   elkerüli a figyelmet időszakról időszakra, de nyilvánvaló, ha trendként
   ábrázoljuk. Húzz elő több időszaknyi adatot, ha van, és őszintén keresd ezt a
   mintát.

4. **Milyen lenne az egészséges flow-eloszlás a termékünk jelenlegi szakaszában, és
   valóban megegyeztünk-e ebben a célban az üzleti érdekeltekkel?** A legtöbb
   szervezet soha nem tette kifejezetté ezt a célt, ami azt jelenti, hogy nincs
   közös alap annak észrevételére, amikor a tényleges eloszlás eltávolodik tőle.

5. **A flow-eloszlásunk egyezik a független bizonyítékokkal, például a kiszökött
   hibák arányával vagy a nyitott sérülékenységek számával, vagy van egy
   vizsgálatra érdemes eltérés?** Az itteni eltérés a legvilágosabb elérhető jel
   arra, hogy a besorolás elsodródott attól, ami a munka valójában.

6. **Átnevezhetne-e valaki a csapatunkból csendben egy adósság- vagy kockázati
   elemet funkcióvá szállítási nyomás alatt, és észrevennénk-e most, ha megtenné?**
   Ez a téma központi kijátszási kockázata, kimondva. Beszéljétek meg, hogy a
   jelenlegi folyamatotok valóban elkapná-e ezt, nem csak azt, hogy valaki
   szándékosan megtenné-e.

## Ágazati szemszög

**Startup.** A formális besorolás gyakran többletteherként érződik, amikor az egész
csapat tudja, mindenki min dolgozik. A hasznos minimum ezen a léptéken egyszerűen
az, hogy tervezés közben hangosan kimondjuk a négy kategóriát, hogy az adósság-
és kockázati munkát ne tegyék csendben hátrébb minden alkalommal, amikor egy
funkciós határidő nyomást teremt, ez a minta a kódbázis és a csapat növekedésével
rosszul halmozódik.

**Kisvállalkozás.** Egyetlen egyedi mező vagy címke a meglévő követőeszközödben
elég a flow-elem típusának rögzítéséhez, dedikált eszközbefektetés nélkül. A
felvételkori következetes besorolás fegyelme sokkal fontosabb, mint bármilyen
eszközbeli kifinomultság.

**Nagyvállalat.** A flow-elem-besorolás az a hely, ahol ez a keretrendszer
léptéken megéri az árát, mert a sok párhuzamos értékáramot működtető nagy
szervezetnek nincs más megbízható, összesített módja arra, hogy lássa, a kapacitás
hogyan oszlik meg a funkciók, hibák, kockázat és adósság között. Fektess be az
eszközintegrált besorolásba és az időszakos, független bizonyítékokkal való
keresztellenőrzésekbe; a kézi, ad hoc besorolás nem éli túl a valódi szervezeti
léptéket.

**Közszféra.** A flow-eloszlás védhető, számszerűsített választ ad egy közszférabeli
technológiai vezetőnek, ha megkérdezik, miért nem szállítanak több új, állampolgároknak
szóló funkciót, amikor az őszinte válasz az, hogy egy régi rendszer kockázati és
adósságterhe valódi, indokolt kapacitásrészt emészt fel. Ha ezt a kompromisszumot
kifejezetté és megtárgyalttá tesszük, ahelyett hogy csendben elnyelnénk, az
általában több bizalmat épít a felügyeleti szervekkel, mint a „technikai
szükségszerűségre" való számszerűsítetlen hivatkozás.

## Példák

**Nagyvállalat.** Egy nagy kiskereskedelmi cég e-kereskedelmi platformcsapata a
sprintsebesség alapján úgy hitte, hogy egyenletes funkciókibocsátást szállít. Az
első őszinte flow-elem-besorolási gyakorlat kiderítette, hogy a „funkciók"
valójában a befejezett munka mindössze 40%-át tették ki, az adósság, nagy része
egy öregedő fizetési rendszerhez kötve, a kapacitás közel harmadát emésztette fel,
anélkül hogy bármely korábbi jelentésben így nevezték volna. Ennek a felosztásnak a
termékvezetés elé vitele, egy emelkedő kiszökött hibaarány mellett, amely
megerősítette az adósságterhet, olyan dedikált modernizációs költségvetést
biztosított, amelyet a csapat két éven át sikertelenül kért pusztán kvalitatív
érvekkel.

**Közszféra.** Egy állami járműnyilvántartó hivatal digitális engedélyezési csapata
először sorolta be a backlogját, miután egy nyilvános kiesés a mögöttes rendszer
stabilitására irányította a figyelmet. A gyakorlat kiderítette, hogy a „kockázat"
munka, főleg a biztonsági foltozás, amelyet ismételten hátrébb soroltak a látható,
állampolgároknak szóló funkciók javára, az előző évben a kapacitás 5% alá
zsugorodott, olyan minta, amely a csapat szokásos jelentéseiben soha nem volt
látható. A hivatal vezetése a megállapítást felhasználta arra, hogy a jövőre nézve
minimális kockázatimunka-elosztást írjon elő, a flow-eloszlási adatokkal
alátámasztva, nem pusztán általános szabályzati nyilatkozattal.

## Üzleti érv: indítékok, ROI és TCO

A flow-elem-besorolás megtérülése védhető, számszerűsített alap az erőforrás-elosztási
döntésekhez, amelyekről korábban kvalitatívan vitatkoztak, és gyakran elvesztették
azt a munkát, amely a legláthatóbb volt az érdekeltek számára. A fenti
kiskereskedelmi példa, amely tényleges kapacitásadatokkal, nem általános
kéréssel szerzett modernizációs költségvetést, az a minta, amelyet ez a
fegyelem megbízhatóan hoz: egy konkrét számot sokkal nehezebb elvetni, mint azt az
általános benyomást, hogy „több időre van szükségünk a karbantartásra".

A teljes birtoklási költség alacsony, amint a taxonómiát és a definíciókat
elfogadták: a besorolás másodperceket ad a felvételhez, nem érdemi folyamati
terhet, és a követéséhez szükséges eszközintegráció általában egyetlen egyedi mező
vagy címke. A valódi, folyamatos költség az őszinte besorolás fenntartásának
fegyelme szállítási nyomás alatt, ezért számít a független bizonyítékokkal való
időszakos keresztellenőrzés ugyanannyira, mint a kezdeti bevezetés.

## Antiminták és buktatók

- **A munka utólagos besorolása, miután az eredmény ismert:** a téma lényegi
  kijátszási vektora. Szállítási nyomás alatt egy csapat utólag csendben
  funkciónak címkézhet adósság- vagy kockázati munkát, vagy egy kétértelmű elemet
  afelé a típus felé kerekíthet, amely jobban néz ki az eloszlási diagramon, anélkül
  hogy bármely egyetlen döntés önmagában tisztességtelennek látszana. A védőkorlát
  a felvételkori besorolás írott definíció szerint, kombinálva olyan időszakos
  auditokkal, amelyek a flow-eloszlást független bizonyítékokkal, például a kiszökött
  hibák arányával (5.1 téma) és a sérülékenységi metrikákkal (6.4 téma) vetik
  össze, ugyanazt a független bizonyítékokhoz mért audit-fegyelmet követve,
  amelyet az 1.2 téma a könyv minden metrikájától kér.
- **Hagyni, hogy a funkciók következetesen a kapacitás szinte egészét felemésszék
  (funkciógyár minta):** csendben kiéheztetik az adósság- és kockázati munkát,
  amíg az válságként felszínre nem kerül.
- **Egyetlen időszak eloszlásának a teljes képként kezelése:** kihagyja a lassú,
  halmozódó sodródást, amelyet a trendnézet világosan feltár.
- **Célelosztás meghatározása az üzleti érdekeltek nélkül:** elveszíti a
  keretrendszer fő értékét, a kompromisszum közös, megtárgyalt megértését.
- **Következetlen vagy dokumentálatlan definíció típusonként:** olyan számokat ad,
  amelyek pontosnak látszanak, de az idő során nem összehasonlíthatók.
- **A taxonómia túlbonyolítása sok altípussal:** besorolási többlettehert ad, amely
  a fegyelmet erodálja, anélkül hogy arányos betekintést nyújtana.

## Érettségi modell

- **1. szint, Kezdeti:** A munkát általánosan követik, flow-elem-besorolás nélkül;
  az adósság- és kockázati munka láthatatlan a jelentésekben.
- **2. szint, Fejlődő:** Néhány csapat informálisan sorolja a flow-elemeket, de a
  definíciók következetlenek, és a besorolás gyakran utólag történik.
- **3. szint, Szabványosított:** Minden csapat felvételkor sorol be közös, írott
  definíció szerint, és a flow-eloszlást trendként követik.
- **4. szint, Irányított:** A flow-eloszlást időszakosan keresztellenőrzik
  független bizonyítékokkal, és a célelosztásokat tudatosan határozzák meg az
  üzleti érdekeltekkel.
- **5. szint, Összehangolt:** A flow-elem-adatok közvetlenül megalapozzák az
  erőforrás-elosztási és beruházási döntéseket a szervezetben, és a vezetés konkrét
  döntésekre tud mutatni, amelyeket azért hoztak, mert a besorolás kifejezetté
  tett egy korábban láthatatlan kompromisszumot.

## Ötletek a vitához

1. Mit mutatna az előző negyedév munkájának őszinte flow-elem-megoszlása, és meglepne-e bárkit?
2. Van írott definíciónk a négy flow-elemtípus mindegyikére, vagy a besorolás attól függ, ki címkézi a munkát?
3. Sodródott-e valaha a flow-eloszlásunk egy elemtípus felé tudatos döntés nélkül?
4. Milyen független bizonyítékokkal ellenőrizhetnénk ma keresztbe a flow-eloszlásunkat?

## A legfontosabb tanulságok

- A **flow-elem** pontosan a négy típus egyikébe tartozik, funkciók, hibák,
  kockázatok vagy adósság, és a közöttük lévő kapacitáselosztás **zéró összegű**.
- **Nincs általánosan egészséges eloszlás**; a helyes keverék a termék szakaszától
  függ, és az üzleti érdekeltekkel tudatosan, megtárgyalt célnak kell lennie.
- A téma központi kijátszási vektora az **utólagos besorolás**, az adósság- vagy
  kockázati munka csendes átcímkézése funkcióvá; a védőkorlát a felvételkori
  besorolás és az időszakos audit független bizonyítékokkal.
- Különösen figyelj a **funkciógyár mintára**, amikor a funkciók következetesen a
  kapacitás szinte egészét felemésztik, kiéheztetve az adósság- és kockázati
  munkát, amíg az válságként nem jelenik meg.
- A flow-eloszlás **trendként** a legértékesebb, és a legnagyobb haszna abból
  származik, ha közvetlenül megosztják az üzleti érdekeltekkel.

## Források és ajánlott olvasmányok

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
