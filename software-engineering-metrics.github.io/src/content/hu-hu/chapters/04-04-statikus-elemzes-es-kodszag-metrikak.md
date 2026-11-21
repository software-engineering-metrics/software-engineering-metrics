# 4.4 Statikus elemzés és kódszag-metrikák

## Áttekintés és indíték

A **[statikus elemző](https://en.wikipedia.org/wiki/Static_program_analysis)** eszközök a
forráskódot végrehajtás nélkül vizsgálják át, és megjelölik azokat a mintákat, amelyekről
ismert, hogy hibákkal, biztonsági sérülékenységekkel vagy karbantarthatósági problémákkal
korrelálnak: elérhetetlen kód, le nem zárt erőforrások, gyanús típuskényszerítések,
megkettőzött logika, és a **kódszagok** tágabb kategóriája, azok a szerkezeti minták,
amelyek nem feltétlenül hibák, de hajlamosak nehezebbé tenni a kód megértését, tesztelését
vagy biztonságos megváltoztatását. A statikus elemzés az automatizált, folyamatos réteg a
rész többi témájának célzottabb metrikái alatt, minden commiton lefut, és a problémákat
abban a pillanatban hozza felszínre, amikor bekerülnek, ahelyett, hogy időszakos auditra
várna.

Ennek a témának a központi aggálya a rés aközött, amit a statikus elemző eszközök
jelentenek, és aközött, ami valóban számít. Egy eszköz ezernyi megállapítást jelezhet egy
nagy kódbázison, és maga a megállapítások száma gyenge metrika, mert triviális stílusbeli
preferenciákat kever valódi, súlyos kockázattal, és éppoly könnyen lefaragható elnyomással,
mint valódi javításokkal. A statikus elemzés értéke nem a nyers megállapításszámból
származik, hanem abból, mennyire jól rangsorolja a szervezet a súlyosságot, előzi meg a
regressziót, és áll ellen annak a kísértésnek, hogy az eszköz ítéletét az emberi áttekintés
helyettesítőjének tekintse a kiegészítője helyett.

Nagy csapatoknál a statikus elemzés az egyetlen gyakorlati módja a kódminőség és a
biztonsági higiénia alapszintjének betartatására egy olyan kódbázison, amelyet egyetlen
csapat sem tud manuálisan teljes egészében áttekinteni. A gyakran a biztonságos kódolási
gyakorlatokra vonatkozó megfelelőségi követelményekkel szembesülő nagyvállalatok és
közszféra szervezetek a statikus elemzésre dokumentált, auditálható bizonyítékként
támaszkodnak arra, hogy az alapszintű vizsgálatot következetesen alkalmazták, nem csak
akkor, amikor egy emberi áttekintő éppen észrevett egy problémát.

## Alapelvek

- **A nyers megállapításszám önmagában gyenge metrika.** Triviális és súlyos
  problémákat kever, és valódi javítások helyett elnyomással kijátszható.
- **A súlyosság szerinti rangsorolás többet számít a mennyiségnél.** Néhány kritikus
  megállapítás több figyelmet érdemel, mint sok triviális.
- **A statikus elemzés kiegészíti az emberi áttekintést; nem helyettesíti.** Az
  eszközök mintákat kapnak el; nem értik a szándékot vagy az üzleti kontextust.
- **Az „újonnan bevezetett problémák” trendje cselekvésre késztetőbb, mint az összes
  hátralék száma.** Megmutatja, hogy a jelenlegi gyakorlat javul-e vagy romlik.
- **A téves riasztások rontják az eszköz iránti bizalmat.** A kezeletlen téves riasztási
  arány oda vezet, hogy a csapatok egészében figyelmen kívül hagyják a megállapításokat,
  a valódiakat is.

## Ajánlások

### A súlyossággal súlyozott megállapításokat kövesd, ne a nyers számot

Állítsd be a statikus elemző eszközödet úgy, hogy a megállapításokat súlyosság szerint
osztályozza (kritikus, magas, közepes, alacsony vagy egyenértékű skála), és súlyossággal
súlyozott trendet kövess lapos összesített szám helyett. Egy kódbázis, amelyben nulla
kritikus megállapítás és ötszáz alacsony súlyosságú stílusjavaslat van, egészen más
állapotban van, mint az, amelyben ötven kritikus megállapítás és egyáltalán nincs
stílusprobléma, a nyers szám pedig nagyjából egyenértékűnek kezeli ezeket, holott nem azok.

### A kapu az újonnan bevezetett megállapításokra vonatkozzon, ne a teljes történeti hátralékra

A legtöbb kialakult kódbázis hordoz egy örökölt megállapítás-hátralékot, amely a
jelenlegi gyakorlat előtti, és megfizethetetlenül drága lenne egyszerre kijavítani.
Ahelyett, hogy minden munkát blokkolnál, amíg az egész hátralék ki nem ürül, a CI-t
arra kapuzd, hogy egy konkrét változtatás új, megegyezett súlyossági küszöb feletti
megállapításokat visz-e be, hagyva, hogy a hátralék fokozatosan zsugorodjon a normál
karbantartás során, miközben megakadályozod a további felhalmozódást. Ez a megkülönböztetés
tükrözi a 4.2 téma alsó lefedettségi korlátra vonatkozó ajánlását: a regresszió ellen
védj, ne követelj irreális, egyszerre elvégzendő javítást.

### Aktívan kezeld a téves riasztási arányt

Időnként nézd át a megállapítások mintáját, különösen bármelyik nagy mennyiségű
kategóriát, és ellenőrizd, hányan valódi téves riasztások, olyan esetek, amikor az eszköz
olyan mintát jelzett, amely a kontextusban valójában nem problémás. Hangold a
szabálykonfigurációt, hogy kifejezetten a valóban zajos, alacsony értékű
szabálykategóriákat elnyomja, ahelyett, hogy hagynád a csapatokat megszokni az eszköz
kimenetének egészében való figyelmen kívül hagyását, mert túl sok közte a zaj. A magas,
kezeletlen téves riasztási arány a leggyorsabb módja egy statikus elemzési program
hitelének tönkretételére.

### A statikus elemzési megállapításokat az áttekintés ösztönzőjeként használd, ne automatikus ítéletként

Még egy jogos, nem téves riasztás sem mindig érdemel automatikus, kötelező javítást;
néhány megjelölt minta elfogadható egy olyan konkrét kontextusban, amelyet az eszköz nem
lát. Építs ki egy könnyű folyamatot, amelyben egy ember áttekinti, és vagy kijavítja, vagy
kifejezetten, láthatóan, dokumentált indokkal elfogadja a megállapítást, ahelyett, hogy vagy
vakon minden megállapítást kötelezőként érvényesítenél, vagy hagynád a csendes,
dokumentálatlan elnyomást, amely idővel rontja az eszköz értékét.

### Kombináld a statikus elemzést a rész többi kódminőségi metrikájával

A statikus elemzési megállapítások, a bonyolultsági pontszámok (4.1 téma) és a hotspot-adatok
(4.3 téma) kiegészítő bizonyítékok, nem versengő metrikák. Az a fájl, amelyben sok megoldatlan
statikus elemzési megállapítás van, és egyben fluktuáció-bonyolultsági hotspot is, különösen
erős jelölt a kiemelt figyelemre, mert több független jel konvergál ugyanarra a
következtetésre.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| A nyers megállapításszám mint metrika | Egyszerű jelenteni | Triviális és súlyos problémákat kever; elnyomással könnyen kijátszható |
| Súlyossággal súlyozott trend | Pontosabban tükrözi a tényleges kockázatot | Folyamatos súlyossági osztályozás-karbantartást igényel |
| Kapu a teljes történeti hátralékra | Maximalizálja a végső kódtisztaságot | Kialakult kódbázisoknál gyakran kivitelezhetetlen; leállíthat minden munkát |
| Kapu csak az új megállapításokra | Gyakorlatias, megelőzi a regressziót, hagyja fokozatosan zsugorodni a hátralékot | Az örökölt problémák tovább megmaradnak tudatos javítási terv nélkül |

A központi feszültség az **alaposság és a gyakorlatiasság között** húzódik. Az a statikus
elemzési szabályzat, amely megköveteli, hogy a teljes történeti hátralék megoldódjon,
mielőtt bármilyen új munka haladna, alapos, de általában kivitelezhetetlen bármelyik
valódi múlttal rendelkező kódbázison, és az ilyen nyomás alatt álló csapatok hajlamosak
tömegesen elnyomni a megállapításokat, nem valóban javítani. A feszültséget úgy oldd fel,
hogy szigorúan az új megállapításokra kapuzol, miközben külön, tudatosan ütemezett javítási
erőfeszítést futtatsz az örökölt hátralékra, a téma és a 4.3 téma által ajánlott
súlyossági és keresztellenőrzési technikákkal rangsorolva.

## Kérdések a csapattal való megbeszéléshez

1. **Súlyossággal súlyozott trendet követünk, vagy csak a nyers összes megállapításszámot?**
   Húzd elő a tényleges dashboardot, és ellenőrizd; a nyers szám sok eszközben
   alapértelmezett, és gyakran tudatos beállítást igényel, hogy helyette a súlyosságot
   mutassa.

2. **Mekkora a megoldatlan megállapítások jelenlegi örökölt hátraléka, és van-e tudatos,
   ütemezett tervünk a csökkentésére, vagy csak határozatlan ideig halmozódik?** A
   kezeletlen, csendben növekvő hátralék gyakori, és érdemes őszintén megnevezni ahelyett,
   hogy vizsgálat nélkül hagynánk.

3. **Mekkora a becsült téves riasztási arányunk a legnagyobb mennyiségű
   megállapítás-kategóriáinkban, és hangoltuk-e erre válaszul a szabálykonfigurációt?**
   Ha ezt soha nem ellenőrizted, vegyél mintát a legzajosabb kategóriából, és értékeld
   őszintén, hány megállapítás valóban cselekvésre alkalmas.

4. **Megbíznak-e a csapatunk mérnökei a statikus elemzési megállapításokban, vagy megtanulták
   elengedni őket, mert a kimenet túl nagy része zaj?** Ez közvetlen, őszinte megérzéskérdés,
   amelyet érdemes feltenni a csapatnak, mert az eszköz, amelyet figyelmen kívül hagynak,
   nem ad valódi értéket, bármi legyen is az elméleti képessége.

5. **Hogyan kezelünk jelenleg egy jogos megállapítást, amelyet egy csapat a konkrét
   kontextus miatt el kell hogy fogadjon?** Ellenőrizd, hogy a folyamatunk ezt látható,
   dokumentált döntéssé teszi-e, vagy csendes, dokumentálatlan elnyomással történik, amely
   idővel rontja az eszköz jelét.

6. **Hol konvergálnak a statikus elemzési megállapítások, a bonyolultsági pontszámok és a
   hotspot-adatok ugyanazon a fájlon vagy modulon?** Vesd össze ezt a három jelet
   kifejezetten; több független metrikán átívelő konvergencia erősebb rangsorolási jel,
   mint bármelyik egyetlen önmagában.

## Ágazati szemszög

**Startup.** Egy könnyű, ingyenes statikus elemző eszköz, amelyet az elejétől a CI-be
integrálnak, olcsó biztosítás, és korán elkapja a valódi problémákat, mielőtt egy örökölt
hátralék bármi esélyt kapna a felhalmozódásra. A szabálykészletet a valóban nagy értékű,
kis zajú kategóriákra összpontosítsd, ne kapcsold be azonnal minden elérhető szabályt.

**Kisvállalkozás.** A legtöbb modern nyelvi ökoszisztéma tartalmaz képes ingyenes statikus
elemző eszközt; CI-ben egy ésszerű alapértelmezett szabálykészlettel engedélyezve kevés
befektetést igényel. Az új megállapítások kapuzására összpontosíts, ne arra, hogy a
meglévő hátralékot egyszerre próbáld megoldani.

**Nagyvállalat.** A téves riasztási arány és a súlyossági rangsorolás tudatos kezelése
ekkora léptéknél elengedhetetlenné válik, mert egy rosszul hangolt eszköz, amely túlzott
zajt generál tucatnyi csapatban, az egész szervezetben figyelmen kívül marad. Fektess
be a statikus elemző eszköz konfigurációjának dedikált felelősébe, a szabályhangolást
folyamatos fegyelemként kezelve, nem egyszeri beállítási feladatként.

**Közszféra.** A statikus elemzési megállapítások, különösen a biztonsággal kapcsolatosak,
gyakran közvetlenül relevánsak a megfelelőségi és audit követelményekhez. Tarts fenn
dokumentált, auditálható folyamatot arra, hogyan rangsorolják, javítják vagy fogadják el
formálisan rögzített indokkal a megállapításokat, mert ez a dokumentáció gyakran éppen az,
amit egy külső auditor látni akar.

## Példák

**Nagyvállalat.** Egy szoftvercég statikus elemzési dashboardján több éven át, súlyosság
szerinti rangsorolás nélkül, negyvenezer megoldatlan megállapítás gyűlt fel a kódbázison,
olyan nagy szám, hogy a mérnökök nagyjából már rá sem néztek a dashboardra. Egy átdolgozott
megközelítés súlyosság szerint osztályozta a megállapításokat, megállapította, hogy
kevesebb mint kétszáz valóban kritikus, és a CI-t kifejezetten az új kritikus és magas
súlyosságú megállapításokra kapuzta, miközben az alacsony súlyosságú hátralékot hagyta a
normál kódkarbantartás során fokozatosan zsugorodni. Hat hónapon belül a kritikus
megállapítások egyjegyűre csökkentek, és ami fontosabb, a mérnöki felmérési adatok
megújult bizalmat mutattak az eszköz kimenete iránt, most, hogy kezelhető, valóban
cselekvésre alkalmas jelet adott elsöprő, figyelmen kívül hagyott hátralék helyett.

**Közszféra.** Egy védelmi ügynökség szoftverellátási lánc-biztonsági szabályzata
statikus elemzési vizsgálatot írt elő nulla megoldatlan megállapítással bármely kiadás
előtt, ami a gyakorlatban oda vezetett, hogy a fejlesztőcsapatok nagy számú
megállapítást, köztük valódi biztonsági problémákat is, elnyomtak pusztán azért, hogy
teljesítsék a kiadási határidőket egy kivitelezhetetlen mindent vagy semmit kapu alatt.
Egy átdolgozott szabályzat nulla új kritikus vagy magas súlyosságú megállapítást követelt
bármely adott kiadás által bevezetve, dokumentált, követett javítási tervvel és
ütemtervvel az örökölt hátralékra, amelyet negyedévente egy biztonsági irányítási testület
tekintett át. Ez a gyakorlatias, szakaszos megközelítés egyszerre állította vissza a valódi
biztonsági vizsgálatot az új kódon, és valódi, mérhető előrehaladást hozott az örökölt
hátralékon tizennyolc hónap alatt, szemben a kivitelezhetetlen korábbi szabályzattal,
amely többnyire elnyomást termelt, nem valódi javításokat.

## Üzleti érv: indítékok, ROI és TCO

A jól kezelt statikus elemzés megtérülése a valódi hibák és biztonsági sérülékenységek
elkapása, mielőtt elérnék az éles rendszert, annál sokkal alacsonyabb költséggel, mint
amekkora ugyanazon lefedettséghez az egyenértékű emberi áttekintési erőfeszítés kellene. A
fenti védelmi ügynökségi példa mutatja ennek rossz kezelésének költségét: egy
kivitelezhetetlen, mindent vagy semmit szabályzat valójában csökkentette a valódi biztonsági
vizsgálatot, mert elnyomást hajtott, ami a szándékának az ellentéte.

A teljes birtoklási költség (TCO) magában foglalja magát az eszközt, amely a gyakori
nyelvi ökoszisztémákban gyakran ingyenes vagy olcsó, és a súlyossági rangsorolás, a téves
riasztások kezelése és az örökölt hátralék javítási tervezésének folyamatos fegyelmét. Ez
a folyamatos fegyelem, nem maga az eszköz, határozza meg, hogy egy statikus elemzési
program valódi, megbízható értéket nyújt-e, vagy figyelmen kívül hagyott zajjá romlik.

## Antiminták és buktatók

- **A nyers megállapításszám kezelése metrikaként:** triviális és súlyos problémákat
  kever, és elnyomással könnyen kijátszható.
- **A teljes történeti hátralék megoldásának megkövetelése bármely új munka előtt:**
  általában kivitelezhetetlen, és elnyomást hajt a valódi javítások helyett.
- **A téves riasztási arány figyelmen kívül hagyása:** a kezeletlen zajszint oda vezet,
  hogy a csapatok teljesen elengedik az eszköz kimenetét, a valódi megállapításokat is.
- **A jogos megállapítások csendes, dokumentálatlan elnyomása:** rontja az eszköz jelét,
  és nem hagy auditnyomot a megfelelőséghez.
- **A statikus elemzési megállapítás kezelése automatikus ítéletként emberi áttekintés
  nélkül:** elmulaszt olyan kontextust, amelyet egy eszköz nem lát.
- **A megállapítások soha nem összevetése a bonyolultsági és hotspot-adatokkal:**
  elmulasztja az erősebb rangsorolási jelet, amelyet a konvergens bizonyíték ad.

## Érettségi modell

- **1. szint, Kezdeti:** A statikus elemzést nem futtatják, vagy a megállapítások
  kezeletlenül halmozódnak, súlyossági rangsorolás vagy trendkövetés nélkül.
- **2. szint, Fejlődő:** Valamennyi statikus elemzés fut a CI-ben, de a súlyossági
  rangsorolás következetlen, és a téves riasztási arány kezeletlen.
- **3. szint, Szabványosított:** A megállapításokat súlyossággal súlyozzák, és a CI az új
  kritikus és magas súlyosságú megállapításokra kapuz, szervezetszinten.
- **4. szint, Irányított:** A téves riasztási arányt aktívan hangolják, az örökölt
  hátralékra dokumentált, ütemezett javítási terv van, és az elfogadások láthatók és
  dokumentáltak.
- **5. szint, Összehangolt:** A statikus elemzési megállapításokat, a bonyolultsági adatot
  és a hotspot-adatot rutinszerűen összevetik a beruházások rangsorolásához, és a szervezet
  rá tud mutatni konkrét, mérhető hiba- vagy biztonsági javulásokra, amelyek a programra
  vezethetők vissza.

## Ötletek a vitához

1. Mi a jelenlegi súlyossággal súlyozott trendünk, és javul vagy romlik?
2. Mekkora az örökölt megállapítás-hátralékunk, és van-e tudatos tervünk a csökkentésére?
3. Mekkora a becsült téves riasztási arányunk a legzajosabb megállapítás-kategóriánkban?
4. Megbíznak-e jelenleg a csapatunk mérnökei a statikus elemzési kimenetben, vagy figyelmen kívül hagyják?
5. Hol konvergálnak a statikus elemzési megállapítások a bonyolultsági vagy hotspot-adattal a kódbázisunkban?

## A legfontosabb tanulságok

- Kövess **súlyossággal súlyozott trendet**, ne nyers megállapításszámot, amely triviális
  és súlyos problémákat kever.
- A CI-t az **újonnan bevezetett megállapításokra** kapuzd, ne a teljes történeti
  hátralékra, hogy megelőzd a regressziót irreális, egyszerre elvégzendő javítás
  követelése nélkül.
- Aktívan kezeld a **téves riasztási arányt**; a kezeletlen zaj tönkreteszi az eszköz
  iránti bizalmat, és oda vezet, hogy a megállapításokat egészében figyelmen kívül hagyják.
- A megállapításokat **emberi áttekintés ösztönzőjeként** kezeld, látható, dokumentált
  elfogadásokkal, ne automatikus ítéletként vagy csendes elnyomásként.
- Vesd össze a statikus elemzést a **bonyolultsági és hotspot-adatokkal** (4.1, 4.3 téma)
  a konvergens, erősebb rangsorolási bizonyítékért.

## Források és ajánlott olvasmányok

- *Static Program Analysis*, Anders Møller és Michael I. Schwartzbach műve (a
  statikus elemzési technikák elméleti és gyakorlati alapjai).
- Az OWASP útmutatása a statikus alkalmazásbiztonsági tesztelésről (SAST), az OWASP
  Foundation tágabb, a biztonságos szoftverfejlesztési gyakorlatokról szóló forrásainak
  része.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler műve (a
  kódszag-katalógus, amelyre sok statikus elemző eszköz épít).
- *Working Effectively with Legacy Code*, Michael Feathers műve (a minőségi problémák
  örökölt hátralékának kezelése egy kialakult kódbázisban).
