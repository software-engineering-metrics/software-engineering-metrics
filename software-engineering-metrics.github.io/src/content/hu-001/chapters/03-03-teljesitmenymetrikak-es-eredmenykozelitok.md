# 3.3 Teljesítménymetrikák és eredményközelítők

## Áttekintés és indíték

A **teljesítmény**, a SPACE (3.1 téma) P betűje, az a dimenzió, amelyet a
leggyakrabban tévesztenek össze az aktivitással, és ennek a témának éppen ennek
a félreértésnek a megelőzése a dolga. A teljesítmény azt kérdezi, hogy egy
mérnök vagy egy csapat munkája ténylegesen jó [eredményt](https://en.wikipedia.org/wiki/Outcome_(probability))
hozott-e: olyan funkciót, amely kikerült és működött, olyan rendszert, amely
megbízható maradt, olyan változtatást, amely egy üzleti vagy felhasználói
metrikát a helyes irányba mozdított. Az aktivitás (3.4 téma) csak azt kérdezi,
mennyi mozgás történt. Egy csapat lehet nagyon aktív és gyengén teljesítő,
állandóan apró változtatásokat szállítva, amelyek soha nem mozdítanak el egy
eredményt, és a fordítottja is éppúgy lehetséges: egy csapat, amely ritkán szállít,
de a változtatásai megbízhatóan pontosan a helyükre kerülnek.

Ennek a dimenziónak a nehézsége az, hogy az eredmény gyakran nem rendelhető
egyetlen személyhez, sőt egyetlen csapathoz sem; a szoftveres eredmények
együttműködésből, hónapokkal korábban hozott döntésekből születnek, olyan
emberek döntéseiből, akik azóta más projektekre léptek, és olyan piaci
feltételekből, amelyeket egyetlen mérnök sem irányít. A SPACE kutatói ebben
egyértelműek voltak: a teljesítményt rendszer- vagy csapatszinten kell mérni,
több, egymásra konvergáló jel használatával, nem szabad egyetlen számra
redukálni, és főleg nem szabad egyedi mérnökhöz rendelni elszigetelten. Ez a
téma komolyan veszi ezt az útmutatást, és az egyéni teljesítmény-hozzárendelést
aktívan elkerülendő csapdának tekinti, nem kényelmes esetben igénybe vehető
rövidítésnek.

Nagy csapatoknál a teljesítménymérés helyes kialakítása választja el azt a
metrikaprogramot, amely valóban javítja az eredményeket, attól, amely csak a
látható sürgés-forgást jutalmazza. A sok csapat teljesítményét összehasonlító
nagyvállalatoknak olyan jelek kellenek, amelyek ellenállnak a nyers
kibocsátási volumen révén történő kijátszásnak; a technológiai beruházást
felügyeleti szerveknek indokoló közszféra szervezeteknek be kell mutatniuk,
hogy a mérnöki erőfeszítés valódi eredményeket hozott, nem csupán leszállított
műtermékeket, ami pontosan az 1.3 téma eredmények a kibocsátás előtt
elvének alkalmazása erre a konkrét dimenzióra.

## Alapelvek

- **A teljesítmény azt méri, hogy a munka jó eredményt hozott-e, nem azt, hogy
  mennyi munka történt.** Ez az alapvető megkülönböztetés az aktivitás
  dimenziójától.
- **Használj több, egymásra konvergáló jelet, soha egyetlen teljesítményszámot.**
  Egyetlen közelítő mutató sem megbízható annyira, hogy önállóan álljon.
- **Csapat- vagy rendszerszinten mérj.** Az egyéni eredmény-hozzárendelés
  általában megbízhatatlan, és éppen azt a kijátszást hívja, amelyre ez a könyv
  végig figyelmeztet.
- **A minőség a teljesítmény része, nem külön ügy.** Az a munka, amely
  kikerül, de elront valami mást, nem teljesített valójában jól.
- **A döntés nélküli teljesítményjel dísz**, pontosan az 1.1 téma általános
  elve szerint, erre a dimenzióra alkalmazva.

## Ajánlások

### Kombinálj több egymásra konvergáló jelet egyetlen teljesítménypontszám helyett

A teljesítmény bizonyítékait több forrásból merítsd: a változtatási hibaarány
(2.10 téma) és a kiszökött hibák aránya (5.1 téma) a minőséghez, a tényleges
funkcióelfogadáshoz kötött telepítési eredmények (5.2 téma) annak megítéléséhez,
hogy számított-e a munka, valamint a csapat stratégiai célokhoz való
hozzájárulásának kvalitatív, kollégai vagy vezetői értékelése olyan
háttérhez, amelyet egy tiszta metrika nem tud megragadni. Ezek egyike sem
megbízható önmagában; együtt, ha ugyanarra a következtetésre konvergálnak,
sokkal megbízhatóbbak, mint bármelyik egyetlen szám lehetne.

### Csapatszinten mérj, állj ellen az egyéni hozzárendelésnek

A szoftveres eredmények ritkán egyetlen ember munkájának termékei; tervezési
döntésekből, áttekintési visszajelzésekből, olyan emberek korábbi munkájából
születnek, akik azóta elhagyhatták a csapatot, és a határokon átívelő
együttműködésből. Egy eredmény egyetlen mérnöknek tulajdonítása általában
hamis pontosság, amely figyelmen kívül hagyja ezt a valóságot, és erős
ösztönzést teremt az egyéneknek arra, hogy a hitelüket védjék a szabad
együttműködés helyett, pontosan az a fajta ösztönzéstorzítás, amelyre az 1.2
téma figyelmeztet.

### A minőséget közvetlenül építsd be a teljesítmény definíciójába

Az a funkció, amely időben kikerül, de a termeléses incidensek hullámát okozza,
nem teljesített jól, még ha egy naiv, csak a kibocsátást nézőszemlélet
leszállítottnak is számolja. A változtatási hibaarányt, a kiszökött hibák
arányát és a kiadás utáni incidensadatokat közvetlenül építsd be abba, ahogyan
a teljesítményt értékeled, ahelyett, hogy a minőséget külön, szétkapcsolt
ügyként kezelnéd, amelyet csak e könyv 4. és 6. részében mérnek.

### A teljesítményadatot beruházási és folyamatdöntések tájékoztatására használd, ne egyéni rangsorokhoz

A teljesítményadat termékeny használata annak eldöntése, hová érdemes tovább
beruházni (egy csapat, amely következetesen erős eredményeket szállít, több
erőforrást és autonómiát érdemel), és hol érdemes vizsgálódni (az a csapat,
amelynek munkája következetesen nem találja meg a helyét, segítséget érdemel,
nem hibáztatást, az 1.1 téma diagnosztikus megközelítése szerint). Az egyének
vagy csapatok versengő rangsorolása a teljesítményadat alapján éppen azt a
kijátszást és morálkárt hívja, amelyre ez a könyv figyelmeztet, és ritkán hoz
jobb eredményt, mint a diagnosztikus használat.

### Légy őszinte a hozzárendelés korlátairól, különösen a platform- és támogató csapatoknál

Azoknak a csapatoknak, amelyek megosztott infrastruktúrát, belső eszközöket vagy
platformképességeket építenek (a testvérkönyv, a `software-engineering-guide`
platformmérnöki témája ezt közvetlenül tárgyalja), az eredményekhez való
hozzájárulása gyakran több lépésre van bármely ügyfélközeli metrikától. Ezeknek a
csapatoknak a teljesítményét azzal mérd, milyen hatással vannak az általuk
támogatott csapatokra, a platformjuk elfogadottságával, a felhasználó csapatok
által jelzett súrlódás csökkenésével, ahelyett, hogy rosszul illeszkedő,
közvetlen eredménymetrikát erőltetnél olyan munkára, amely eleve közvetett.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Egyetlen teljesítménypontszám csapatonként | Egyszerű bemutatni és összehasonlítani | Hamis pontosság; elrejti, hogy melyik mögöttes jel vitte a pontszámot |
| Több egymásra konvergáló jel | Megbízhatóbb, ellenáll az egymetrikás kijátszásnak | Nehezebb egyetlen számba összefoglalni; több háttér kell az értelmezéshez |
| Csapatszintű teljesítménymérés | Illeszkedik ahhoz, ahogyan a szoftveres eredmények valójában létrejönnek | Nem tud közvetlenül válaszolni az egyéni hozzájárulással kapcsolatos kérdésekre |
| Egyéni szintű teljesítmény-hozzárendelés | Az értékelésekhez közvetlenebbül cselekvésre késztetőnek tűnik | Általában hamis pontosság; erős kijátszási és hitelvédelmi kockázat |

A központi feszültség a **pontosság és az őszinteség között** húzódik. Az
egyetlen teljesítményszám csapatonként, vagy ami rosszabb, egyénenként,
könnyen összehasonlítható és rangsorolható, de ez a pontosság általában hamis,
és egy tiszta kinézetű szám mögé rejti a hozzárendelés és a minőség valódi
bizonytalanságát. A feszültséget úgy oldd fel, hogy a kevésbé rendezett,
többjeles képet fogadod el őszintének, és ellenállsz a vezetés vagy a
teljesítményértékelési folyamatok nyomásának, hogy egyetlen, hamisan pontos
pontszámra csökkentsék vissza.

## Kérdések a csapattal való megbeszéléshez

1. **A jelenlegi teljesítménymérésünk több egymásra konvergáló jelet kombinál,
   vagy egyetlen számra támaszkodik, amely pontosabbnak tűnik, mint amilyen
   valójában?** Auditálj mindent, amit jelenleg „teljesítménymetrikának”
   nevezel, és ellenőrizd, hány független, konvergáló jel táplálja valójában.

2. **Rendeltük-e már egy csapat vagy egy egyén teljesítményét valakihez úgy, hogy
   nem vettük figyelembe, mennyire együttműködő, csapatokon átívelő módon
   jött létre az eredmény?** Válassz egy friss sikertörténetet, és kövesd
   végig, mennyi függött benne a jóváírt csapaton vagy egyénen kívüli
   emberektől, döntésektől vagy korábbi munkától.

3. **A teljesítménymérésünk tartalmazza-e a minőséget, vagy csak a szállítási
   sebességet és a kibocsátási volument?** Az a kiadott funkció, amely később
   jelentős termeléses incidenseket okozott, nem pontozható magas teljesítménynek;
   ellenőrizd, hogy a jelenlegi mérésünk valóban elkapná-e ezt az esetet.

4. **Hogyan mérjük azoknak a platform- vagy támogató csapatoknak a teljesítményét,
   amelyeknek az eredményekhez való hozzájárulása közvetett?** Ha az őszinte
   válasz az, hogy „nem nagyon”, érdemes ezt a hiányt megnevezni és közvetlenül
   kezelni ahelyett, hogy ezek a csapatok gyakorlatilag mérés nélkül maradnának,
   vagy igazságtalanul mérnék őket ügyfélközeli eredménymetrikákkal, amelyek nem
   illenek a munkájukhoz.

5. **Használták-e valaha teljesítményadatot egyének versengő rangsorolására,
   formálisan vagy informálisan?** Ez a sodródás, hasonlóan a 3.2 téma
   elégedettségi adat kockázatához, árt az adat őszinteségének és a csapat
   nyílt együttműködési hajlandóságának is.

6. **Amikor a konvergáló jeleink nem értenek egyet, például magas szállítási
   sebesség mellett növekvő hibaarány, mit következtetünk, és jól kezeli-e ezt a
   folyamatunk?** A jelek közötti egyet nem értés önmagában értékes információ;
   beszéljétek meg, hogy a csapat jelenleg figyelmen kívül hagyandó zajként kezeli-e,
   vagy vizsgálatot érdemlő valódi megállapításként.

## Ágazati szemszög

**Startup.** A teljesítmény általában közvetlenül látható: működött-e a
funkció, elfogadták-e az ügyfelek, elmozdult-e a metrika. A formális, többjeles
mérés ekkora léptéknél gyakran szükségtelen; a kockázat inkább az, hogy a
sikert vagy a kudarcot túl gyorsan rendelik egy személyhez egy gyorsan haladó,
erősen együttműködő kis csapatban, ahol a hitel és a felelősség ritkán tartozik
egyetlen egyénhez.

**Kisvállalkozás.** Kombináld a már meglévő szállítási és minőségi adatokat
(2.10 téma, 5.1 téma) közvetlen, őszinte beszélgetéssel arról, hogy a
legutóbbi munka valóban segített-e az üzletnek, ahelyett, hogy olyan formális
többjeles műszerezést építenél, amelyet nincs kapacitásod fenntartani.

**Nagyvállalat.** Itt éri meg a befektetést a csapatszintű, többjeles mérés
fegyelme, mert a nyomás, hogy a teljesítményt több tucat csapat között
összehasonlítható egyetlen számra redukálják, itt a legerősebb, és a hamis
pontosság kára összeadódik a szervezet egész erőforrás-allokációs döntésében.
Állj ellen ennek a nyomásnak kifejezetten, és építsd fel a többjeles érvelést
arra, miért számít.

**Közszféra.** Annak bizonyítása, hogy a mérnöki beruházás valódi eredményeket
hozott, nem csupán leszállított műtermékeket, gyakran az a központi kérdés, amelyet
egy felügyeleti szerv feltesz. A többjeles teljesítménymérés, amely kifejezetten
az eredménymetrikákhoz (5.3 téma) kötődik a csak szállítási közelítő mutatók
helyett, sokkal erősebb, védhetőbb választ ad, mint egy puszta aktivitási vagy
szállítási darabszám.

## Példák

**Nagyvállalat.** Egy kiskereskedelmi technológiai cég vezetése informálisan
a sprintenként elvégzett story pointok alapján rangsorolta a mérnöki csapatokat,
ezt teljesítménymutatónak tekintve. A többjeles megközelítés bevezetése után,
amely a szállítási adatokat, a változtatási hibaarányt és a kiadás utáni
funkcióelfogadást kombinálta, a vezetés megállapította, hogy a legmagasabb
story point teljesítési aránnyal rendelkező csapat rendelkezett a cég
legalacsonyabb funkcióelfogadási arányával: gyorsan szállítottak, de olyat
építettek, amit az ügyfelek nem használtak. A csapat ütemtervi prioritásainak
átcsoportosítása a teljesebb teljesítménykép alapján, a félrevezető egyszámos
rangsor helyett, egy negyedéven belül jelentős mérnöki kapacitást irányított
nagyobb hatású munkára.

**Közszféra.** Egy nemzeti adóhatóság mérnöki programjának be kellett
mutatnia egy felügyeleti bizottságnak, hogy egy jelentős rendszerberuházás
javította a teljesítményt, nem csak a szerződött hatókört szállította le. A
program nem csupán story point- vagy mérföldkőteljesítést jelentett, hanem
konvergáló jelek halmazát mutatta be: csökkent feldolgozási hibaarányt,
csökkent mediánfeldolgozási időt és megnövekedett sikeres önkiszolgálási
befejezési arányt, mindet a leszállított konkrét rendszerelemekhez kötve. A
többjeles, eredményhez kötött bemutató kielégítette a bizottság vizsgálatát
olyan módon, ahogyan egy korábbi program egyszerű „határidőre leszállítva”
jelentése egy évvel korábban nem tudta.

## Üzleti érv: indítékok, ROI és TCO

A teljesítménynek konvergáló, eredményhez kötött jelekkel mérése, nem hamis
pontosságú egyetlen számmal, jobb erőforrás-allokációs döntéseket hoz: az a
szervezet, amely látja, hogy melyik csapat munkája mozdítja valóban az
eredményeket, ott tud tovább beruházni, ahol számít, és ott vizsgálódni, ahol
nem, ahelyett, hogy azt jutalmazná, amelyik éppen a legelfoglaltabbnak
látszik. A fenti kiskereskedelmi példa tipikus: egy félrevezető egyszámos
rangsor elterelte a beruházási figyelmet attól, ahol tényleg segített volna.

A teljes birtoklási költség (TCO) magasabb, mint az egymetrikás megközelítésé,
mert több forrásból (szállítás, minőség, eredmény) származó adat
kombinálását igényli, és a szervezeti nyomással szembeni ellenállást, amely a
képet vissza akarja szűkíteni egyetlen összehasonlítható számra. Ezt a költséget
érdemes megfizetni, mert az alternatíva, a hamisan pontos egyetlen pontszám,
aktívan félrevezeti azokat az erőforrás-allokációs döntéseket, amelyeket a
teljesítményadatnak tájékoztatnia kellene.

## Antiminták és buktatók

- **Az aktivitás összetévesztése a teljesítménnyel:** a leggyakoribb hiba,
  amelynek megelőzésére ez a dimenzió kifejezetten létezik.
- **Egyéni teljesítmény-hozzárendelés együttműködő, csapatokon átívelő
  eredményekhez:** általában hamis pontosság, amely elbátortalanítja az
  együttműködést.
- **A minőség kizárása a teljesítmény definíciójából:** jutalmazza azt a
  munkát, amely kikerül, de elront valami mást.
- **Közvetlen eredménymetrika erőltetése platform- vagy támogató csapatokra:**
  rossz dolgot mér az eleve közvetett munkánál.
- **Több konvergáló jel visszaszűkítése egyetlen hamisan pontos számra
  szervezeti nyomás alatt:** elveszíti az őszinteséget, amelynek biztosítására
  a többjeles megközelítést építették.
- **Teljesítményadat használata egyének versengő rangsorolására:** árt az adat
  őszinteségének és a csapat együttműködésének is.

## Érettségi modell

- **1. szint, Kezdeti:** A teljesítményt összekeverik az aktivitással vagy a
  kibocsátási volumennel, egyetlen, át nem vizsgált számmal mérve.
- **2. szint, Fejlődő:** Néhány minőségi jelet a kibocsátás mellett figyelembe
  vesznek, de nincs következetes többjeles megközelítés, és az egyéni
  hozzárendelés informálisan még megtörténik.
- **3. szint, Szabványosított:** A teljesítményt csapatszinten mérik több,
  egymásra konvergáló jellel, a minőséget is beleértve, következetesen az egész
  szervezetben.
- **4. szint, Irányított:** A konvergáló jelek közötti egyet nem értést aktívan
  vizsgálják; a platform- és támogató csapatoknak a tényleges munkájukhoz
  illő, megfelelően közvetett teljesítménymutatóik vannak.
- **5. szint, Összehangolt:** A teljesítményadatok közvetlenül tájékoztatják az
  erőforrás-allokációs és beruházási döntéseket, és a szervezet rá tud mutatni
  konkrét átcsoportosítási döntésekre, amelyeket egy többjeles nézet tett
  lehetővé, és egy egyszámos nézet elmulasztott volna.

## Ötletek a vitához

1. Melyik egyetlen számot használjuk jelenleg teljesítménymutatóként, amelyet egy konvergáló jelkészlet javára le kellene cserélnünk?
2. Jóváírtunk-e valaha egy eredményt rossz csapatnak vagy személynek, mert a hozzárendelés nem volt világos?
3. Hogyan mérjük jelenleg egy platform- vagy támogató csapat teljesítményét?
4. Hogyan nézne ki, ha a konvergáló jeleink a következő negyedévben nem értenének egyet egymással?
5. Hol terelte félre a beruházási figyelmünket egy story point- vagy szállítási darabszám-rangsor?

## A legfontosabb tanulságok

- A teljesítmény azt méri, hogy a munka **jó eredményt** hozott-e, nem azt,
  mennyi mozgás történt; ne tévessz össze az aktivitással (3.4 téma).
- Használj **több, egymásra konvergáló jelet**, soha egyetlen teljesítményszámot,
  és légy gyanakvó a hamis pontossággal szemben.
- **Csapat- vagy rendszerszinten** mérj; az egyéni eredmény-hozzárendelés
  általában megbízhatatlan, és árt az együttműködésnek.
- **A minőség a teljesítmény része**, nem külön, szétkapcsolt ügy.
- A platform- és támogató csapatoknak **megfelelően közvetett** teljesítménymutatót
  adj, ahelyett, hogy rosszul illeszkedő, közvetlen eredménymetrikát erőltetnél
  a munkájukra.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble és Gene Kim műve (eredményalapú teljesítménymérés).
- *Team Topologies*, Matthew Skelton és Manuel Pais műve (platform- és támogató
  csapatstruktúrák, és hogyan mérjük a hozzájárulásukat).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin műve
  (a hamis pontosságú teljesítménymetrikák kockázatai).
