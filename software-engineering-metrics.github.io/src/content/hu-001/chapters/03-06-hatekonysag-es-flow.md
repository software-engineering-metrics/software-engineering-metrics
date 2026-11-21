# 3.6 Hatékonyság és flow: mély munka és megszakítások

## Áttekintés és indíték

A **hatékonyság és flow**, a SPACE (3.1 téma) utolsó dimenziója, a súrlódás
hiányát és a megszakítatlan, fókuszált munka fenntartásának képességét méri. Ez a
dimenzió a 2. rész szállítási flow-metrikái (a 2.5 téma flow-hatékonysága azt
méri, hogyan mozog a munka egy csapatrendszeren keresztül) és valami személyesebb
határán áll: a mély, fókuszált mérnöki munka egyéni kognitív élményén, és azon,
milyen gyakran töredezik szét ez az élmény megszakítások miatt. A szoftvermérnökség,
inkább, mint a legtöbb tudásmunka, azon múlik, hogy nagy mennyiségű kontextust
tartunk a munkamemóriában egyszerre, ami szokatlanul sebezhetővé teszi a
megszakítás költségével szemben.

Az erre a költségre vonatkozó kutatás következetes és józanító: a mély, összetett
munka megszakítása utáni újrafókuszálás nem másodperceket vesz igénybe, rutinszerűen
sok percet, olykor közel fél órát, hogy teljesen újraépüljön a [munkamemória](https://en.wikipedia.org/wiki/Working_memory),
amelyet a mérnök a megszakítás előtt tartott. Az a mérnök, akinek a napját
megbeszélések, értesítések és kontextusváltások tizenöt perces blokkokra
töredezik, sok aktivitást (3.4 téma) mutathat, miközben sokkal kevesebb valóban
nehéz munkát végez el, mint ugyanez a mérnök két védett, megszakítatlan órával. Ez a
dimenzió kifejezetten arra való, hogy láthatóvá tegye ezt a láthatatlan költséget.

Nagy csapatoknál a megszakítási költség szerkezetileg összeadódik: több megbeszélés,
több csapatok közötti koordinációs többletteher, több Slack-csatorna és értesítés,
több folyamatellenőrző pont, amelyek egyenként ésszerűnek látszanak, de együtt
súlyosan széttördelik a napot. A nagyobb governance- és koordinációs igényű
nagyvállalatok és közszféra szervezetek különösen hajlamosak erre a töredezettségre,
és ez a dimenzió kézzelfogható módot ad a vezetésnek ennek mérésére és az ellene
való védekezésre, ahelyett, hogy a „fókuszidő” egy homályos kulturális vágy
maradna, amelyet senki nem véd meg ténylegesen.

## Alapelvek

- **A kontextusváltásnak valódi, mérhető, nem csupán érzett költsége van.** A
  megszakítás utáni újrafókuszálás rutinszerűen sok percet vesz igénybe, nem
  másodperceket.
- **A megbeszélésterhelés és a megszakítási gyakoriság mérhető, nem csak
  anekdotikus.** A naptár- és eszközadatok mindkettőt közvetlenül felszínre hozhatják.
- **A védett, megszakítatlan idő szűkös erőforrás, amelyet tudatosan kell védeni,**
  nem olyan, amely a szervezet növekedésével magától fennmarad.
- **Ez a dimenzió gyakran magyarázza az aktivitás és a teljesítmény közötti rést**
  (3.3 és 3.4 téma): a magas aktivitás alacsony teljesítménnyel olykor
  töredezett, megszakításokkal teli napokra vezethető vissza.
- **A fókuszigények egyéni eltérései valósak,** és ez a dimenzió a csapatnormákat
  tájékoztassa, nem merev, mindenkire azonos ütemtervet kényszerítsen.

## Ajánlások

### Mérd a megbeszélésterhelést és a töredezettséget közvetlenül a naptáradatokból

A naptáradatok alapján számold ki a két óra vagy hosszabb megszakítatlan blokkok
számát és időtartamát, amelyek egy mérnök tipikus hetében elérhetők. Ez az egyetlen
szám, amelyet olykor **fókuszidőnek** vagy **alkotói időnek** (maker time) neveznek,
ennek a dimenziónak a közvetlen, műszerezhető közelítő mutatója, és gyakori, hogy
egy névleg teljes munkaidős mérnöknek tipikus héten, a megbeszélések figyelembevétele
után, szinte egyáltalán nincs ilyen blokkja, ami a vezetést általában jobban
meglepi, mint magukat a mérnököket.

### Kövesd a megszakítások gyakoriságát az eszközadatokból, ahol elérhető

Az értesítések volumene, a munkaidő alatti beérkező üzenetek gyakorisága és a
feladatok közötti kontextusváltások aránya mind közelíthető a meglévő
együttműködési eszközökből. Ezt az adatot összesítve, csapatszinten használd,
ugyanazzal az elvvel, mint az aktivitási adatnál (3.4 téma): soha ne egyéni
megfigyelési mechanizmusként, mindig csapatszintű jelként arról, hogy a szervezet
koordinációs többletterhe túlnőtt-e azon, ami megvédi a valódi fókuszt.

### Védd a kifejezett fókuszidő-blokkokat csapat- vagy szervezeti normaként

Az ez a dimenzió által mutatott leghatékonyabb beavatkozás egyszerű és olcsó:
jelölj ki konkrét, védett időblokkokat, általában egy reggelt vagy egy délutánt
adott napokon, amikor alapértelmezés szerint nem ütemeznek megbeszéléseket. Ehhez
szervezeti támogatás kell egyetlen csapat hatókörén túl, mert a megbeszéléseket
gyakran csapathatárokon átívelően ütemezik, de ahol következetesen bevezetik, ez az
egyik legnagyobb megtérülésű, legolcsóbb beavatkozás ebben az egész könyvben.

### Korreláltasd a flow-adatokat az aktivitás-teljesítmény réssel

Amikor egy csapat magas aktivitást (3.4 téma), de változatlan vagy csökkenő
teljesítményt (3.3 téma) mutat, nézd meg a flow- és megszakítási adatokat, mielőtt
feltételeznéd, hogy a rés egyéni vagy csapatképességi problémát tükröz. Egy erősen
töredezett ütemterv pontosan ezt a mintát hozhatja: sok látható mozgás, kevés
valóban nehéz elvégzett munka, mert a nehéz munka kifejezetten azt a tartós
fókuszt igényli, amelyet a töredezettség elpusztít.

### Tiszteld az egyéni eltéréseket ahelyett, hogy egyetlen merev ütemtervet kényszerítenél

Nem minden mérnöknek van szüksége azonos fókuszidő-mintára, vagy dolgozik azzal a
legjobban; néhányan valóban rövidebb sorozatokban gondolkodnak a legjobban, mások
hosszú, megszakítatlan szakaszokat igényelnek. Használd ennek a dimenziónak az
adatait a csapatszintű normák és alapértelmezések tájékoztatására, olyan védett
blokkokra, amelyekből ki lehet lépni, nem kötelezőek, ahelyett, hogy egyetlen
betartatott ütemtervet erőltetnél, amely mindenkinél azonos igényeket feltételez.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Nincs fókuszidő-védelem | Maximális ütemezési rugalmasság a megbeszéléseknek | A töredezett napok csökkentik a valóban nehéz munkára való kapacitást |
| Csapatszintű védett fókuszblokkok | Olcsó, nagy megtérülés, közvetlenül védi a mély munkát | Egyetlen csapaton túli koordinációs támogatást igényel |
| Szervezetszintű megbeszélésmentes időszakok | A legerősebb védelem, a legnehezebb erodálni | Széles szervezeti elkötelezettséget igényel, és merevnek érződhet a több koordinációt igénylő szerepeknél |
| Egyéni, önkéntes fókuszütemezés | Tiszteletben tartja a munkastílus egyéni eltéréseit | Gyengébb alapértelmezett védelem; könnyű erodálni az ütemezési nyomás alatt |

A központi feszültség a **koordinációs igény és a fókuszvédelem között** húzódik.
A nagy szervezeteknek valóban szükségük van megbeszélésekre és csapatok közötti
koordinációra a működéshez, és ez az igény közvetlenül szemben áll a mély mérnöki
munka által igényelt megszakítatlan idővel. A feszültséget ne a koordináció
megszüntetésével oldd fel, hanem azzal, hogy a fókuszidőt kifejezett, védett
alapértelmezéssé teszed ahelyett, hogy az az idő maradna, ami minden megbeszélési
kérés teljesítése után megmarad, a fókuszvédelmet tudatosan védendő erőforrásként
kezelve, nem maradékként.

## Kérdések a csapattal való megbeszéléshez

1. **Hány megszakítatlan kétórás blokkja van egy tipikus mérnöknek a csapatunkban
   egy héten, valódi naptáradatokból mérve?** A legtöbb csapat ezt még soha nem
   ellenőrizte közvetlenül, és a válasz, ha megmérik, általában alacsonyabb, mint
   bárki a puszta benyomásból tippelte volna.

2. **Láttunk-e már olyan rést az aktivitás és a teljesítmény között, amelyet a
   flow-adatok megmagyarázhatnak?** Nézz meg egy időszakot, amikor egy csapat
   elfoglaltnak tűnt, de a valóban nehéz munkában alulteljesített, és ellenőrizd,
   hogy a megbeszélésterhelés vagy a töredezettség megmagyarázhatja-e a rést.

3. **Mi kellene ahhoz, hogy a csapatunknak védett, megbeszélésmentes fókuszblokkot
   alakítsunk ki, és mi áll az útjában ma?** Nevezd meg a konkrét akadályt, a
   csapatok közötti ütemezési szokásokat, a vezetés állandó elérhetőség iránti
   elvárását, és beszéljétek meg, valóban olyan rögzített-e, mint amilyennek érződik.

4. **Tiszteletben tartjuk-e a fókuszigények egyéni eltéréseit, vagy a jelenlegi
   ütemterv azt feltételezi, hogy mindenki ugyanúgy dolgozik?** Kérdezd meg
   közvetlenül a csapattagokat, hogyan szeretnék valójában strukturálni a
   fókuszált munkát, ahelyett, hogy mindenkire jó mintát feltételeznél.

5. **Hogyan változott a megbeszélésterhelésünk az elmúlt évben, és észrevette-e
   bárki a trendet e beszélgetés előtt?** A töredezettség gyakran fokozatosan
   kúszik be, egy-egy ésszerűnek tűnő ismétlődő megbeszélésenként, és ritkán egyetlen
   tudatos döntés eredménye.

6. **Ha szervezetszinten két teljes délutánt védenénk hetente a mély munkára, miről
   kellene lemondanunk, és megérné-e?** Ez a konkrét kompromisszumkérdés a
   koordináció és a fókusz közötti feszültséget kényszeríti a felszínre ahelyett,
   hogy elvont vágy maradna.

## Ágazati szemszög

**Startup.** A megbeszélésterhelés kis csapatnál általában természetesen alacsony,
és a kockázat inkább az, hogy a kontextusváltást az egyszerre sok sapka viselése
okozza, nem kifejezetten az ütemezett megbeszélések. A fókuszidőt tudatosan védd
kis léptéknél is, mert a szokást korán könnyebb kialakítani, mint később utólag
beépíteni.

**Kisvállalkozás.** Egy egyszerű, informális norma, például hogy délig nincs belső
megbeszélés, ennek a dimenziónak a legtöbb hasznát megragadhatja naptáranalitikai
eszköz nélkül is. Ekkora léptéknél a fegyelem többet számít, mint a mérés.

**Nagyvállalat.** A megbeszélésterhelés és a csapatok közötti koordinációs
többletteher itt rosszul skálázódik, és a töredezettség gyakran sok, egyenként
ésszerű ismétlődő megbeszélésen keresztül kúszik be, amelyeket senki nem vizsgált
összesítve. Mérd közvetlenül a fókuszidő elérhetőségét naptáradatok alapján az
egész szervezetben, és a védett fókuszblokkokat szervezetszintű szabályzatként
kezeld, ne csapatonkénti opcióként, amelyet felülírnak a csapatok közötti
ütemezési szokások.

**Közszféra.** A közszféra szervezeteiben gyakori nagy governance- és
koordinációs követelmények ezt a dimenziót különösen fontossá teszik a tudatos
védelemre, mert a több folyamat és több áttekintő megbeszélés felé mutató természetes
húzóerő erős. A fókuszidő védelmét kifejezetten termelékenységi beruházásként
keretezd, amikor érdekelt feleket győzöl meg, akik a megbeszélések csökkentését az
ellenőrzés csökkentéseként láthatják, nem a valódi mérnöki kapacitás védelmeként.

## Példák

**Nagyvállalat.** Egy pénzügyi technológiai cég mérnöki vezetése tartós rést vett
észre a commitaktivitás és a csapat képessége között, hogy valóban összetett
funkciókat szállítson határidőre. A naptárelemzés megállapította, hogy a medián
mérnöknek hetente kevesebb mint három órányi megszakítatlan kétórás blokkja volt
elérhető, szétszórva az ismétlődő állapotmegbeszélések ütemtervében, amelyek közül
sokat két év alatt fokozatosan adtak hozzá, anélkül, hogy egyetlen döntés ennyi
összmegbeszélés-terhelést hozzáadott volna. A cég heti két kötelező,
szervezetszintű megbeszélésmentes délutánt vezetett be, és egy hat hónappal
későbbi követő felmérés és szállításimetrika-áttekintés javuló elégedettségi
pontszámokat és kifejezetten az összetett, többnapos funkciók ciklusidejének (2.6
téma) mérhető csökkenését mutatta.

**Közszféra.** Egy szövetségi ügynökség mérnöki csapata, amely nagy governance-
követelmények mellett működik, naptárauditból megállapította, hogy a mérnökök
munkaidejük közel 40%-át állapot- és megfelelőségi áttekintő megbeszéléseken
töltik, miután több mérnök aggályokat vetett fel a kilépő interjúkban. A csapat
a governance-követelményeket, amelyek valódi felügyeleti célt szolgáltak, nem
szüntette meg, hanem a redundáns állapotmegbeszéléseket egyetlen heti áttekintésbe
vonta össze, a rutin megfelelőségi ellenőrzéseket pedig élő megbeszélések helyett
aszinkron dokumentációs áttekintésre helyezte át, így a megbeszélésterhelést közel
felére csökkentette a mögöttes felügyeleti funkció megőrzése mellett, és a
későbbi felmérési adatok a jelentett fókuszidő érdemi javulását mutatták.

## Üzleti érv: indítékok, ROI és TCO

A fókuszidő védelmének megtérülése aránytalan a költségéhez képest: a fenti
pénzügyi technológiai példa mérhető szállítási javulást mutat egy olyan
változtatásból, amely az ütemezési fegyelmen túl semmibe sem került, heti két
megbeszélésmentes délután. Mivel a mély, összetett munka kifejezetten a tartós,
megszakítatlan figyelemtől függ, a valódi fókuszidő elérhetőségének már szerény
növelése is aránytalan javulást hozhat a szervezet legnehezebb, legnagyobb értékű
munkára való kapacitásában.

A teljes birtoklási költség (TCO) szinte teljes egészében szervezeti fegyelem, nem
eszközbefektetés: a naptáradatok általában már elérhetők, és maga a beavatkozás, a
konkrét blokkok védelme, a megvalósításhoz a hajlandóságon túl semmibe sem kerül,
hogy nemet mondjunk a megbeszélések ütemezésére a blokkok alatt. A fő folyamatos
költség a védett idő védelme a fokozatos erózióval szemben, ahogy új koordinációs
igények elkerülhetetlenül felmerülnek.

## Antiminták és buktatók

- **A töredezett napok kezelése a méret elkerülhetetlen költségeként:** fokozatosan
  összeadódik, és ritkán egyetlen tudatos döntés eredménye, ezért könnyű kezeletlenül
  hagyni.
- **A magas aktivitás összetévesztése a magas teljesítménnyel a flow-adatok
  ellenőrzése nélkül:** egy töredezett ütemterv pontosan ezt a félrevezető mintát
  hozhatja.
- **Egyetlen, merev fókuszidő-ütemterv rákényszerítése mindenkire:** figyelmen
  kívül hagyja az egyéni eltéréseket abban, hogyan dolgoznak az emberek a
  legjobban.
- **Megszakítási vagy értesítési adatok használata egyéni megfigyelésre:**
  megismétli azt a visszaélési kockázatot, amelyre a 3.4 téma az aktivitási adatnál
  figyelmeztet.
- **A védett fókuszidő fokozatos eróziója kivételeken keresztül:** ugyanaz az
  erózió-kockázat, amelyre a 2.5 téma a WIP-korlátoknál figyelmeztet, a
  fókuszidő védelmére alkalmazva.
- **Governance- vagy koordinációs követelmények hozzáadása a halmozott
  megbeszélésterhelés-költségük mérése nélkül:** a töredezettség egy ésszerűnek
  tűnő kiegészítésenként kúszik be.

## Érettségi modell

- **1. szint, Kezdeti:** A fókuszidőt és a megszakítási költséget nem mérik és nem
  védik; a megbeszélésterhelés nő, anélkül, hogy bárki követné a halmozott hatását.
- **2. szint, Fejlődő:** Informálisan van némi tudatosság a töredezettségről, de
  naptáradatot nem elemeznek, és védett időt nem alakítottak ki formálisan.
- **3. szint, Szabványosított:** A fókuszidő elérhetőségét naptáradatokból mérik,
  és védett, megbeszélésmentes blokkokat alakítanak ki csapat- vagy szervezeti
  normaként.
- **4. szint, Irányított:** A flow-adatokat aktívan korreláltatják az
  aktivitás-teljesítmény résekkel a töredezettség okozta alulteljesítés
  diagnosztizálására, és a védett időt az eróziójára figyelve követik.
- **5. szint, Összehangolt:** A szervezet a fókuszidő védelmét elsőrangú
  termelékenységi beruházásként kezeli, rá tud mutatni konkrét szállítási és
  elégedettségi javulásokra, amelyek ehhez vezethetők vissza, és proaktívan védi
  a fokozatos, apránkénti nyomással szemben, amely máskülönben erodálná.

## Ötletek a vitához

1. Hány valóban megszakítatlan órája volt mindannyiunknak a múlt héten?
2. Nőtt-e a megbeszélésterhelésünk fokozatosan anélkül, hogy bárki szándékosan így döntött volna?
3. Hol lehet egy friss aktivitás-teljesítmény rés valójában flow-probléma?
4. Melyik egyetlen ismétlődő megbeszélést vágnánk ki először, ha a töredezettség csökkentését kérnék?
5. Mibe kerülne valójában, hogy heti két védett, megbeszélésmentes délutánt kialakítsunk?

## A legfontosabb tanulságok

- A hatékonyság és a flow a **súrlódás hiányát** és a **megszakítatlan, fókuszált
  munka** fenntartásának képességét méri, amelytől a szoftvermérnökség szokatlanul
  erősen függ.
- **A kontextusváltásnak valódi, mérhető költsége van**, gyakran sok perc az
  újrafókuszáláshoz, nem másodpercek.
- Mérd a **fókuszidő elérhetőségét közvetlenül a naptáradatokból**; az eredmény
  általában meglepi a vezetést.
- Ez a dimenzió gyakran **megmagyarázza az aktivitás és a teljesítmény közötti
  rést**, amelyet máskülönben félrediagnosztizálnának.
- A **védett fókuszidő-blokkok** olcsó, nagy megtérülésű beavatkozás, de a
  fokozatos erózióval szembeni tudatos védelmet igényelnek.

## Források és ajánlott olvasmányok

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal Newport
  műve (a kontextusváltás költsége és a védett fókuszidő értéke).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco és Timothy
  Lister műve (a megszakítás költsége és a fókuszt védő környezetek tervezése).
- Mark, Gloria, Daniela Gudith, and Ulrich Klocke, "The Cost of Interrupted
  Work: More Speed and Stress" (2008): empirikus kutatás a megszakítás utáni
  helyreállási időről.
