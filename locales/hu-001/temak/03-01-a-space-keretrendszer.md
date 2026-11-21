# 3.1 A SPACE keretrendszer

## Áttekintés és indíték

A [SPACE keretrendszer](https://queue.acm.org/detail.cfm?id=3454124), amelyet
2021-ben publikált Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila,
Thomas Zimmermann, Brian Houck és Jenna Butler, egy konkrét problémára
született: az egyetlen számból álló [fejlesztői termelékenységi](https://en.wikipedia.org/wiki/Productivity)
metrikák, a kódsorok, a commitok száma és a story pointok, nevetségesen
könnyen kijátszhatók, és rendszeresen félrevezetnek. A SPACE ehelyett öt
dimenzió mentén javasol mérni: **Elégedettség és jóllét**, **Teljesítmény**,
**Aktivitás**, **Kommunikáció és együttműködés**, valamint **Hatékonyság és
flow**. Egyetlen betű sem arra való, hogy önmagában álljon; a keretrendszer
tényleges hozzájárulása az a fegyelem, hogy mind az ötöt együtt tartjuk szem
előtt, így egy csapat nem tűnhet termelékenynek az egyik tengelyen úgy, hogy
közben csendben rombol egy másikat.

Ez azért számít, mert a fejlesztői termelékenység nem egyetlen dolog. Egy
csapat lehet nagyon aktív (sok commit, sok pull request), miközben gyengén
teljesít (a munka nem mozdítja el a lényeges eredményeket). Egy csapat
teljesíthet jól rövid távon úgy, hogy az elégedettség a mélybe zuhan, ami
előremutató mutatója a hónapokkal később jelentkező fluktuációnak és
minőségi összeomlásnak. A SPACE felismerése, amely közvetlenül az 1.2 és az
1.3 témára épít, hogy ezen dimenziók bármelyike, ha önálló célként
hajszoljuk, a többi rovására fog kijátszódni, és a keretrendszer pontosan
arra való, hogy ezt a kompromisszumot láthatóvá tegye, mielőtt valódi kárt
okozna.

Nagy csapatoknál a SPACE közös szókincset ad a vezetésnek egy olyan
beszélgetéshez, amely máskülönben azt a dimenziót veszi alapul, amelyet a
legkönnyebb mérni, szinte mindig az aktivitást. A sok csapat termelékenységét
összehasonlító nagyvállalatoknak olyan keretrendszer kell, amely ellenáll a
commitok számlálása felé húzó erőnek; a versengő munkaerőpiacon toborzási és
megtartási nyomás alatt álló közszféra szervezetei az elégedettségi és jóllétadatokat
éppoly komolyan igénylik, mint a szállítási adatokat, mert egy tapasztalt
mérnök kiégés miatti elvesztése sokkal többe kerül, mint amennyit bármelyik
sprint kibocsátása valaha megtakarított.

## Alapelvek

- **Egyetlen SPACE-dimenzió sem megbízható elszigetelten.** A keretrendszer
  értéke éppen abból jön, hogy többet mérünk együtt.
- **Legalább három dimenzióból legalább egy-egy metrika, szubjektív és
  objektív forrásokat vegyítve, a kiegyensúlyozott kép minimuma.** Az a
  metrikakészlet, amely teljes egészében egy dimenzióból vagy egy adattípusból
  áll, nem igazán használja a SPACE-t.
- **Az aktivitás az a dimenzió, amelyet a leginkább hajlamosak önálló
  közelítő mutatóként visszaélésszerűen használni.** Ez a legkönnyebben
  mérhető, és önmagában a legkevésbé reprezentálja a tényleges értéket.
- **A csapatszintű és az egyéni szintű mérés más kezelést igényel.** A
  SPACE-t elsősorban csapat- és rendszerszintű belátásokra tervezték, nem
  egyéni eredménykártyákra.
- **Az öt dimenzió kölcsönhat.** Az a változás, amely az egyiket javítja,
  ronthat egy másikat, és a keretrendszer arra való, hogy ezt a kompromisszumot
  elkapja.

## Ajánlások

### Építsd a metrikakészletet legalább három dimenzióból, mielőtt megbízol benne

Ne úgy vezesd be a SPACE-t, hogy kiválasztasz egyetlen kedvenc dimenziót,
általában az aktivitást vagy a teljesítményt, és késznek nyilvánítod. Tudatosan
válassz legalább egy metrikát az öt dimenzió közül legalább háromból, az
objektív műszerezést (1.5 téma) a szubjektív felmérési adatokkal (3.7 téma)
vegyítve, mielőtt bármilyen következtetést megfogalmazol a csapat
termelékenységéről. Ez a minimális összetétel akadályozza meg, hogy a SPACE
visszaessen az egyetlen közelítő mutató problémájába, amelynek megoldására
született.

### Az aktivitásmetrikákat kezeld háttérként, soha ne főcímként

A commitok, a kódsorok és a pull requestek száma legitim adat a SPACE
aktivitásdimenziójában, de soha nem lehetnek a csapat termelékenységéről
bemutatott elsődleges vagy egyetlen metrika. Az aktivitási adatokkal adj
hátteret a többi dimenzióhoz, például észrevéve, hogy az aktivitás
visszaesése egybeesett az elégedettség növekedésével, mert a csapatnak végre
volt ideje törleszteni a technikai adósságot, és ne független ítéletként
használd őket. A 3.4 téma részletesen tárgyalja ennek a dimenziónak a
sajátos kockázatait.

### A SPACE-t csapat- és rendszerszinten alkalmazd, ne egyéni szinten

A SPACE eredeti kutatása és az azt követő iparági átvétel egyaránt úgy kezeli
a keretrendszert, mint lencsét a csapat és a szervezet termelékenységének
megértéséhez, nem egyéni teljesítmény-eredménykártyaként. Ha a SPACE
dimenzióit emberek rangsorolására használod, különösen az aktivitást,
pontosan azt a kijátszási kockázatot hozod létre újra, amelyre az 1.2 téma
figyelmeztet, és olyan keretrendszert használsz rosszul, amelyet erre soha
nem validáltak.

### Figyeld a dimenziók közötti kompromisszumokat, ne csak az egyiken belüli mozgást

A keretrendszer valódi diagnosztikai ereje abból jön, hogy figyeljük, hogyan
mozognak a dimenziók egymáshoz képest. Egy emelkedő teljesítménymetrika
csökkenő elégedettség mellett azonnali vizsgálatot érdemlő figyelmeztető jel,
amely fenntarthatatlan tempóra utalhat. Egy emelkedő aktivitásmetrika
változatlan vagy csökkenő teljesítmény mellett üresjáratra utal, nem valódi
haladásra. Mind az öt dimenziót együtt nézd át rögzített ütemben, éppen azért,
hogy elkapd ezeket a dimenziók közötti mintákat, és ne csak minden számot
elszigetelten ellenőrizz.

### Vegyítsd az ütemezéseket a dimenziók szerint

A SPACE egyes dimenziói lassan változnak, és időszakosan mérendők
(elégedettség, jellemzően negyedéves felmérési ciklusokkal); mások gyorsan
változnak, és gyakoribb, automatizált követésből profitálnak (aktivitás,
hatékonyság és flow, mindkettő nagyrészt műszerezhető a meglévő rendszerekből).
A mérési ütemet igazítsd az egyes dimenziók természetes változási üteméhez,
ne kényszeríts minden metrikát ugyanarra a jelentési ütemtervre.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Egydimenziós metrikakészlet (általában aktivitás) | Egyszerű, olcsó, ismerős | Könnyen kijátszható, kihagyja a fenntarthatatlan gyakorlatok emberi költségét |
| Teljes, ötdimenziós SPACE-bevezetés | Kiegyensúlyozott, ellenáll az egytengelyes kijátszásnak, elkapja a kompromisszumokat | Több műszerezést és felmérési befektetést igényel |
| Csapatszintű SPACE-alkalmazás | Megfelel a keretrendszer validált használatának, védi az egyéneket a helytelen alkalmazástól | Nem tud válaszolni az egyéni szintű kérdésekre, amelyeket a vezetés olykor szeretne |
| Egyéni szintű SPACE-alkalmazás | Néhány menedzsernek közvetlenebbül cselekvésre késztetőnek tűnik | Helytelenül használja a keretrendszert; erős kijátszási és morálkockázat |

A központi feszültség a **mérés teljessége és a költség, illetve bonyolultság
között** húzódik. Egy teljes, kiegyensúlyozott SPACE-megvalósítás több
műszerezést, több felméréstervezési erőfeszítést és több fegyelmet igényel
ahhoz, hogy mind az öt dimenziót együtt nézzük át, mint egy egyszerű
aktivitás-dashboard. A feszültséget úgy oldd fel, hogy valóban minimális, de
kiegyensúlyozott készlettel indulsz, legalább egy metrikával legalább három
dimenzióból, ahelyett, hogy vagy teljesen kihagynád a keretrendszer
fegyelmét, vagy már az első napon mind az öt dimenzió megsemmisítően teljes,
műszerezett változatát próbálnád megvalósítani.

## Kérdések a csapattal való megbeszéléshez

1. **A jelenlegi termelékenységi metrikakészletünk legalább három SPACE-dimenzióból
   merít, vagy egyedül az aktivitási adatok dominálják?** Auditáld a
   dashboardodat kifejezetten az öt dimenzióhoz képest; a legtöbb szervezet,
   őszintén értékelve, sokkal inkább aktivitásközpontú, mint gondolná.

2. **Láttunk-e már olyat, hogy az egyik SPACE-dimenzió javult, miközben egy másik
   csendben romlott, és észrevettük-e akkor?** Pontosan ezt a dimenziók
   közötti kompromisszumot hivatott elkapni a keretrendszer. Nézz vissza az
   elmúlt évre egy olyan időszakért, amikor a szállítási metrikák javultak, és
   kérdezd meg, mit mutattak ugyanabban az időablakban az elégedettségi vagy
   jóllétadatok.

3. **Használunk-e SPACE-adatokat, akár informálisan is, egyének értékelésére vagy
   összehasonlítására csapatok helyett?** Ez helytelenül használja a
   keretrendszert, és kijátszásra hív. Légy őszinte abban, hogyan beszélnek
   ezekről a metrikákról a gyakorlatban, nem csak abban, hogyan szeretné
   őket a szabályzat használni.

4. **Hogyan vennénk észre, ha egy csapat fenntarthatatlan tempó árán javította
   a teljesítménymetrikáit?** Az elégedettségi és jóllétadatok nélkül, amelyeket
   a teljesítményadatokkal együtt néznénk át, az ilyen kompromisszum láthatatlan,
   amíg hónapokkal később fluktuációként vagy minőségi összeomlásként fel nem
   bukkan.

5. **Mi a mérési ütemünk az öt dimenzió mindegyikére, és megfelel-e annak, milyen
   gyorsan változik valójában az adott dimenzió?** A negyedéves elégedettségi
   felmérés valós idejű aktivitási adatokkal párosítva ésszerű ütemeltérés;
   ugyanaz az ütem mind az ötre, gondolkodás nélkül, nem az.

6. **Ha holnap új mérnökmenedzser érkezne, és csak a dashboardunkat nézné,
   kiegyensúlyozott vagy torz képet kapna a csapat termelékenységéről?** Ez
   gyakorlati próba arra, hogy a metrikakészletünk valóban elérte-e a SPACE
   egyensúlyát, vagy csak utal a keretrendszerre, miközben a gyakorlatban
   aktivitásdominált marad.

## Ágazati szemszög

**Startup.** A teljes ötdimenziós megvalósítás általában túlzás néhány
mérnöknél, akik naponta beszélnek, és közvetlenül érzékelik az elégedettség
és az együttműködés egészségét. Az egyetlen szokás, amelyet érdemes korán
átvenni: ellenállni az csak aktivitásra épülő metrikák felé húzó erőnek,
ahogy a csapat kezd kinőni abból a méretből, ahol az informális tudatosság
mindent lefed.

**Kisvállalkozás.** Dedikált embereladat-elemző funkció nélkül tartsd
egyszerűen: párosítsd a már meglévő szállítási adatokat (2.10 téma) egy
rövid, informális, rendszeres elégedettségi visszajelzéssel, akár egyetlen
kérdéses gyors felméréssel. Ez a minimális párosítás már jóval jobban megragadja
a keretrendszer alapfegyelmét, mint egy csak aktivitásra épülő dashboard.

**Nagyvállalat.** Itt éri meg a teljes keretrendszer a bonyolultságát.
Szabványosíts egy kiegyensúlyozott SPACE-metrikakészletet a csapatok között,
hogy a vezetés tisztességesen összehasonlíthassa a termelékenységet ahelyett,
hogy ahhoz a csapathoz igazodna, amelyiknek a leglátványosabb commitgrafikonja
van, és fektess be a 3.7 témában tárgyalt felmérési infrastruktúrába, hogy az
elégedettségi és együttműködési adatok éppoly megbízhatók legyenek, mint az
objektív műszerezés.

**Közszféra.** A toborzási és megtartási nyomás, különösen ott, ahol a
közszféra bérei nem mindig versenyezhetnek a magánszektor ajánlataival, az
elégedettségi és jóllétadatokat valóban stratégiai kérdéssé teszi, nem puha
kiegészítővé. Kezeld a SPACE-t olyan komolyan, mint a szállítási metrikákat a
munkaerő-tervezésben és a költségvetési indoklásban, mert egy tapasztalt mérnök
kiégés miatti elvesztésének ára az intézményi tudás hónapjaiban mérhető,
amelyet egy utód nem tud azonnal pótolni.

## Példák

**Nagyvállalat.** Egy szoftvercég mérnöki vezetése éveken át a commitok
számát és a befejezett story pointokat követte elsődleges termelékenységi
jelként. Egy teljesebb SPACE-metrikakészlet bevezetése után, amely negyedéves
elégedettségi felmérést és együttműködésihálózat-elemzést (3.5 téma) is
tartalmazott, a vezetés felfedezte, hogy a legmagasabb aktivitási számokkal
rendelkező csapatnak volt a legalacsonyabb az elégedettségi pontszáma és a
legmagasabb az önkéntes fluktuációja a következő évben. Az aktivitási számok
önmagukban aktívan félrevezetők voltak; a teljesebb kép a csapat egyidejű
munkaterhelésének tudatos csökkentéséhez vezetett (a 2.5 téma WIP-elve emberi
szinten alkalmazva), és mérhető javuláshoz mind az elégedettségben, mind végül
a fenntartható teljesítményben.

**Közszféra.** Egy nemzeti digitális szolgáltatási ügynökség, amely
mérnöki tehetségekért versengett olyan magánszektorbeli fizetésekkel, amelyekkel
nem tudott lépést tartani, kiegyensúlyozott SPACE-metrikakészletet vezetett
be, kifejezetten azért, hogy érveljen a nem anyagi megtartási beruházások
mellett: jobb eszközök, védett fókuszidő és kisebb folyamatsúrlódás. Az
elégedettségi felmérési adatok a hatékonysági és flow-metrikákkal (3.6 téma)
együtt azt mutatták, hogy a megszakítások gyakorisága, nem a javadalmazás volt
a távozási szándék legerősebb előrejelzője a kilépő interjúk adataiban. Az
ügynökség ezt követő befektetése a védett fókuszidő szabályzatába, amelyet
közvetlenül ez a SPACE-adat indokolt, mérhető megtartási javulással járt
együtt a következő tizennyolc hónapban.

## Üzleti érv: indítékok, ROI és TCO

A SPACE teljes bevezetésének megtérülése a megelőzött fluktuáció és a megelőzött,
kiégés okozta minőségi összeomlás, amelyek mindketten messze többe kerülnek,
mint a keretrendszer műszerezési költsége. Az csak aktivitásra épülő
metrikakészlet egy-két évig kitűnően festhet, egészen addig, amíg az emberi
költség egyszerre utol nem éri, és ekkor az elveszett szakértelem pótlásának
és a csapategészség újjáépítésének ára eltörpül minden termelékenységi nyereség
mellett, amelyet a szűk metrikakészlet valaha mutatott.

A teljes birtoklási költség (TCO) magában foglalja a felmérési infrastruktúrát
(3.7 téma) és annak a fegyelmét, hogy mind az öt dimenziót együtt nézzük át ahelyett,
hogy ahhoz igazodnánk, amelyik a legkönnyebb. Ezt a költséget valóban
érdemes megfizetni: a fenti nagyvállalati példa valós, felfedezhető mintát
mutat, a magas aktivitás mögött megbúvó magas fluktuációs kockázatot, amelyet
egy szűkebb metrikakészlet addig sosem tárt volna fel, amíg a kár már meg nem
történt.

## Antiminták és buktatók

- **A SPACE-t csak névleg bevezetni, miközben a gyakorlatban aktivitásdominált
  marad:** a leggyakoribb hibamód, és a keretrendszer teljes célját
  meghiúsítja.
- **A SPACE-dimenziókat egyéni eredménykártyákra alkalmazni:** helytelenül
  használja a csapat- és rendszerszintű belátásra validált keretrendszert.
- **A dimenziókat elszigetelten nézni át a dimenziók közötti kompromisszumok
  figyelése helyett:** elkerüli azt a mintát, amelyet a SPACE kifejezetten
  elkapni hivatott.
- **Minden dimenziót ugyanarra a mérési ütemre kényszeríteni:** erőfeszítést
  pazarol a lassan változó dimenziókra, és alulméri a gyorsan változókat.
- **Egyetlen elégedettségi felmérési pontszámot elegendőnek tekinteni objektív
  adatok nélkül:** elveszíti a szubjektív és objektív források közötti
  egyensúlyt, amelyet a keretrendszer megkövetel.
- **Figyelmen kívül hagyni az egyik dimenzió romló trendjét, mert egy másik jól
  néz ki:** pontosan az a hiba, amelynek megelőzésére a keretrendszer
  dimenziók közötti fegyelme létezik.

## Érettségi modell

- **1. szint, Kezdeti:** A termelékenységet kizárólag aktivitásmetrikákkal
  mérik, elégedettségi, együttműködési vagy hatékonysági adatok gyűjtése nélkül.
- **2. szint, Fejlődő:** Néhány további dimenziót informálisan mérnek, de nincs
  következetes dimenziók közötti áttekintés és nincs minimális összetételi
  szabvány.
- **3. szint, Szabványosított:** Legalább három SPACE-dimenzióból merítő,
  kiegyensúlyozott metrikakészletet következetesen alkalmaznak csapatszinten az
  egész szervezetben.
- **4. szint, Irányított:** Mind az öt dimenziót együtt nézik át rendszeres
  ütemben, a dimenziók közötti kompromisszumokat aktívan vizsgálják, és a
  keretrendszer valódi létszám- és folyamatdöntéseket tájékoztat.
- **5. szint, Összehangolt:** A SPACE-adatok közvetlenül alakítják a
  munkaerő-tervezést és a megtartási beruházásokat, és a szervezet rá tud mutatni
  konkrét beavatkozásokra, amelyeket a dimenziók közötti minták tájékoztattak, és
  amelyek mérhetően javították a szállítást és a fejlesztők jóllétét együtt.

## Ötletek a vitához

1. Melyik SPACE-dimenziót mérjük a legkevésbé a jelenlegi metrikakészletünkben?
2. Láttunk-e már olyat, hogy egy csapat aktivitása nőtt, miközben az elégedettsége csendben csökkent?
3. Hogyan vennénk észre ma, hogy egy csapat a hosszú távú fenntarthatóságot cseréli rövid távú kibocsátásra?
4. Használunk-e jelenleg SPACE-hez közeli adatot egyének, nem csapatok értékelésére?
5. Hogyan nézne ki konkrétan egy valóban kiegyensúlyozott termelékenységi dashboard nálunk?

## A legfontosabb tanulságok

- A SPACE öt dimenziót ölel fel, **Elégedettség és jóllét, Teljesítmény,
  Aktivitás, Kommunikáció és együttműködés, valamint Hatékonyság és flow**, és
  egyik sem megbízható önmagában.
- Építs metrikakészletet **legalább három dimenzióból**, objektív és szubjektív
  adatforrásokat vegyítve.
- Az **aktivitásmetrikákat háttérnek** kezeld, soha ne főcímnek szánt
  termelékenységi jelnek (3.4 téma).
- A SPACE-t **csapat- és rendszerszinten** alkalmazd, ne egyéni eredménykártyaként.
- A dimenziókat együtt nézd át, figyelve a **dimenziók közötti kompromisszumokat**,
  ne csak az egyiken belüli mozgást.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): az eredeti SPACE-keretrendszer cikke.
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble és Gene Kim műve (a DORA-metrikákkal közös kutatási alap).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco és Timothy
  Lister műve (a klasszikus érv amellett, hogy a fejlesztői termelékenységet
  emberi, nem pusztán mechanikus kérdésként kezeljük).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink műve
  (az elégedettség és jóllét mérése szempontjából releváns motivációkutatás).
