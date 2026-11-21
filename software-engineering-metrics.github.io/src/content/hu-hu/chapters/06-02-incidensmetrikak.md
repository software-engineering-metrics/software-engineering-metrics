# 6.2 Incidensmetrikák: észlelés, reagálás és helyreállítás

## Áttekintés és indíték

Ez a téma azt méri, mi történik, amikor a 6.1 téma hibakerete egy tényleges hiba miatt elfogy: egy **incidens** során, vagyis egy nem tervezett eseménynél, amely rontja vagy megszakítja a szolgáltatást. Négy metrika adja a szokásos szókincset annak mérésére, mennyire jól kezeli ezt egy szervezet: az **átlagos észlelési idő (MTTD)**, vagyis mennyi idő telik el, mire a szervezet észreveszi, hogy valami nincs rendben, az **átlagos nyugtázási idő (MTTA)**, vagyis mennyi idő telik el, mire valaki átveszi a felelősséget a reagálásért, az **átlagos megoldási** vagy **helyreállítási idő (MTTR)**, vagyis mennyi idő telik el a szolgáltatás helyreállításáig (ugyanaz a fogalom, amelyet a 2.10 téma kifejezetten a telepítés okozta hibákra tárgyalt, most az okától függetlenül minden incidensre általánosítva), és az **incidensgyakoriság**, egyszerűen az, hogy milyen gyakran fordulnak elő incidensek.

A téma központi gondja, a 2.10 téma változtatási hibaarány-tárgyalásához hasonlóan, hogy ezek a számok csak annyira megbízhatók, amennyire az incidensek jelentése és besorolása körüli szervezeti kultúra őszinte. Az a csapat, amely a felelősségre vonástól tart egy incidens miatt, minden okot megkap arra, hogy alulnyilvánítson, késleltesse a nyugtázást, hogy ne „számítsák az óráját", vagy egy súlyos eseményt kisebbnek minősítsen, hogy védje a saját metrikáit. A **[hibáztatásmentes](https://en.wikipedia.org/wiki/Just_culture) utólagos elemzés** (postmortem) gyakorlata, amelyet az Etsy-hez hasonló szervezeteknél úttörő módon vezettek be, és a Google SRE-irodalma formalizált, éppen azért létezik, hogy megszüntesse ezt az ösztönzőt, és a téma ezt a megbízható incidensadatok előfeltételének tekinti, nem a metrikákra ráhelyezett, elhagyható kulturális finomságnak.

Nagy csapatoknál az incidensmetrikák megmutatják, hogy egy szervezet észlelési és reagálási képessége, a 2.10 téma visszagörgetési eszközei és más befektetések, valóban működik-e valós, változatos körülmények között, nem csak abban a konkrét, telepítés okozta hibahelyzetben, amelyet az a téma tárgyalt. A kritikus infrastruktúrát működtető nagyvállalatok és közszféra szervezetei ezekre a metrikákra egyszerre támaszkodnak belsőleg, a valódi üzemeltetési javulás hajtásához, és külsőleg, hogy az ügyfelek, szabályozók vagy a nyilvánosság előtt bizonyítsák, hogy az incidenseket hozzáértően kezelik, és azok idővel javulnak.

## Alapelvek

- **A hibáztatásmentes kultúra a megbízható incidensadatok előfeltétele**, nem elhagyható kiegészítés. A felelősségre vonástól való félelem a jelentést, a nyugtázás sebességét és a súlyossági besorolást egyaránt rontja.
- **Az észlelés, a nyugtázás és a megoldás különálló fázisok, különálló javításokkal.** A lassú összesített helyreállítási idő egészen eltérő mögöttes problémákat rejthet, attól függően, melyik fázis lassú valójában.
- **Az incidensgyakoriság és az MTTR párosított jel**, a DORA változtatási hibaarányához és helyreállítási idejéhez (2.10 téma) hasonlóan: egyik sem mondja el önmagában a teljes történetet.
- **A súlyossági besorolásnak ugyanaz a szigor kell, mint a kiszökött hibák besorolásának** (5.1 téma): következetes, dokumentált szempontok, nem eseti megítélés.
- **Az utólagos elemzés értéke a rendszerszintű tanulásban van, nem egy szám előállításában.** A metrika a jó gyakorlat mellékterméke, nem a célja.

## Ajánlások

### Bontsd fázisokra az incidensreagálási időt

Az észlelési időt (a hiba tényleges kezdetétől addig, amíg valaki észreveszi), a nyugtázási időt (az értesítéstől addig, amíg valaki átveszi a felelősséget) és a megoldási időt (a felelősségátvételtől a valódi helyreállításig) külön mérd és jelentsd, ne csak egyetlen összemosott végösszegként. Mindegyik fázis más javításra mutat: a lassú észlelés monitorozási és riasztási hiányra, a lassú nyugtázás ügyeleti folyamat- vagy eszkalációs problémára, a lassú megoldás pedig eszköz-, runbook- vagy diagnosztikai képességbeli hiányra (a 2.10 téma ezt kifejezetten a telepítés okozta hibákra tárgyalja).

### Építs és védj egy valóban hibáztatásmentes utólagos elemzési folyamatot

A **hibáztatásmentes utólagos elemzés** azt vizsgálja, mi történt, és miért engedte meg a rendszer, hogy megtörténjen, kifejezetten kerülve, hogy hibát tulajdonítson egyénnek olyan tévedésért, amelyet bármely észszerű ember ugyanazon körülmények között, ugyanazzal az információval hihetően elkövethetett. Védd aktívan ezt a fegyelmet: a vezetés nem büntető incidensválaszokat mutat példaként, van kifejezett írott szabályzat, és az a szokás, hogy azt kérdezzük, „a rendszerünk mi miatt engedte ezt meg", nem azt, hogy „ki csinálta", mind szükséges, folyamatos befektetések, nem egyszeri szabályzati nyilatkozatok.

### Következetes, dokumentált, auditált szempontok szerint sorold be a súlyosságot

Az incidensek súlyossági besorolására alkalmazd ugyanazt a fegyelmet, amelyet az 5.1 téma a kiszökött hibákra ajánl: rögzített, dokumentált skála a tényleges ügyfél- vagy üzleti hatás alapján, a csapatok között következetesen alkalmazva, időszakosan a sodródásra auditálva. A következetlen besorolás, amikor egyes csapatok engedékenyek, mások szigorúak, a szervezetszintű incidensadatokat összehasonlításra ugyanolyan megbízhatatlanná teszi, mint a következetlenül besorolt hibaadatok.

### Az incidensgyakoriságot és az MTTR-t együtt kövesd, soha nem elszigetelten

A javuló MTTR emelkedő incidensgyakoriság mellett arra utalhat, hogy a csapat egyre jobb a tűzoltásban, miközben a mögöttes rendszer megbízhatósága romlik. A csökkenő incidensgyakoriság romló MTTR mellett arra utalhat, hogy ritkább, de súlyosabb, nehezebben diagnosztizálható hibák váltják fel a gyakori kisebbeket. Vizsgáld a kettőt együtt, pontosan tükrözve a 2. rész DORA-metrikáinak sebesség-stabilitás párosítási fegyelmét, hogy őszinte összképet kapj.

### Gyűjtsd ki és kövesd az utólagos elemzésekből a rendszerszintű teendőket, ne csak a metrikákat

Az utólagos elemzési folyamat valódi értéke a konkrét, rendszerszintű teendők, amelyeket előállít: egy hiányzó riasztás hozzáadása, egy runbook javítása, egy egyedi hibapont megszüntetése. Kövesd ezeket a teendőket a befejezésig ugyanazzal a fegyelemmel, mint a 4.5 téma technikai adósság-hátralékát, mert az az utólagos elemzés, amely felismerést ad, de nincs utána tett lépés, elpazarolja azt a szervezeti tanulást, amelyet a folyamat meg akar ragadni.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Összemosott, egyetlen incidensreagálási-idő metrika | Egyszerű jelenteni | Elrejti, melyik konkrét fázis, az észlelés, a nyugtázás vagy a megoldás, a tényleges probléma |
| Fázisokra bontott incidensmetrikák | Diagnosztikus, közvetlenül a megfelelő javításra mutat | Az egyes fázisátmenetek gondosabb műszerezését igényli |
| Hibáztatás-orientált incidensáttekintés | Elszámoltathatónak érződik, kielégíti a felelősség kijelölésének vágyát | Rontja a jövőbeli jelentések őszinteségét, és ritkán javítja a tényleges rendszerszintű okot |
| Hibáztatásmentes utólagos elemzés | Őszinte adatokat és valódi rendszerszintű javításokat ad | Tartós kulturális befektetést és vezetői fegyelmet igényel a fenntartáshoz |

A központi feszültség **az egyéni elszámoltathatóság vonzereje és az őszinte jelentés gyakorlati szükséglete** között húzódik. Egy egyén hibáztatása egy incidens után kielégítőnek érződhet, és határozott vezetésnek látszhat, de megbízhatóan rontja minden jövőbeli incidens adatait, mert az emberek alulnyilvánítanak, késleltetik a nyugtázást vagy rosszul sorolják be a súlyosságot, amint személyes következménytől tartanak. Oldd fel a feszültséget tudatosan és következetesen a hibáztatásmentes gyakorlat javára, megértve, hogy a valódi elszámoltathatóság abból jön, hogy kijavítjuk azt a rendszert, amely lehetővé tette a hibát, nem abból, hogy megbüntetjük azt az egyént, aki éppen jelen volt, amikor bekövetkezett.

## Kérdések a csapattal való megbeszéléshez

1. **Bontjuk az incidensreagálási időt észlelési, nyugtázási és megoldási fázisokra, vagy csak egyetlen összemosott számot követünk?** Ha csak összemosott szám létezik, válassz egy friss, jelentős incidenst, és próbáld utólag rekonstruálni a fázisbontást, hogy lásd, mit tárt volna fel.

2. **A csapatunk valóban hinné, hogy az utólagos elemzési folyamatunk hibáztatásmentes, vagy a következménytől való félelem még mindig formálja, hogyan jelentjük és vitatjuk meg az incidenseket?** Kérdezd meg ezt közvetlenül és őszintén. A kimondott hibáztatásmentes szabályzat, amelyet nem élnek meg valójában, nem ad megbízható adatot.

3. **Két különböző csapat ugyanúgy sorolná be ugyanannak az incidensnek a súlyosságát?** Válassz egy valódi, kétes múltbeli incidenst, kérd meg különböző csapatok képviselőit, hogy egymástól függetlenül sorolják be, majd vessétek össze az eredményeket.

4. **Együtt vizsgáljuk az incidensgyakoriságot és az MTTR-t, vagy az egyik több figyelmet kap a másiknál?** Ellenőrizd a tényleges jelentési gyakorlatotokat és áttekintéseiteket erre a párosításra, ugyanazt a fegyelmet tükrözve, amelyet a 2.10 téma a DORA stabilitási metrikákra ajánl.

5. **Az elmúlt hat hónap utólagos elemzéseinek teendői közül hány százalék készült el valójában?** Ha jelenleg nem követitek, ezt a hiányt érdemes megnevezni. Az az utólagos elemzési folyamat, amelynek alacsony a teendő-teljesítési aránya, felismerést ad, de nincs utána tett lépés.

6. **Okozta-e valaha a hibáztatástól való félelem, hogy valaki késleltette egy incidens jelentését vagy nyugtázását?** Ez kellemetlen, de fontos kérdés. Az őszinte „igen, és ez történt" válasz sokkal értékesebb az incidenskezelési folyamat egészsége szempontjából, mint egy reflexszerű „nem".

## Ágazati szemszög

**Startup.** Az incidenskezelés kis csapatnál gyakran szükségszerűen informális, és a formális fázisbontás eleinte fölösleges lehet. Érdemes korán kialakítani a hibáztatásmentes megbeszélési normákat már az első incidenstől, mert a korán kialakult kulturális szokásokat sokkal könnyebb fenntartani, mint utólag beépíteni, miután a hibáztatásra hajlamos minta megszilárdult.

**Kisvállalkozás.** Egy egyszerű, közös incidensnapló, akár informális is, alapvető súlyossági besorolással és rövid, hibáztatásmentes visszatekintéssel minden jelentős eseménynél, megszerzi a téma értékének nagy részét kifinomult eszközök vagy külön incidenskezelő platform nélkül.

**Nagyvállalat.** A következetes súlyossági besorolás és a valódi, tartós hibáztatásmentes kultúra egyaránt nehezebben tartható fenn nagy méretben, és mindkettő nélkülözhetetlen a több tucat csapat közötti megbízható, összehasonlítható incidensadatokhoz. Fektess be dokumentált besorolási szempontokba, időszakos auditálásba és a hibáztatásmentes válasz aktív vezetői példamutatásába, mert a hibáztatás felé való kulturális sodródás tudatos, folyamatos ellennyomás nélkül fokozatosan beszivárog.

**Közszféra.** A közszolgáltatásokat vagy kritikus infrastruktúrát érintő incidenseket gyakran külső vizsgálat, médiafigyelem vagy hivatalos vizsgálat követi, ami erős nyomást teremt a bűnbak keresésére, és ez közvetlenül alááshatja a belső hibáztatásmentes gyakorlatot, ha nem kezelik aktívan. Tarts fenn világos belső hibáztatásmentes fegyelmet a valódi rendszerszintű tanulásért, elválasztva bármely külső elszámoltatási folyamattól, amely egy súlyos incidenst követhet, és ezt a különbséget világosan kommunikáld a munkatársaknak.

## Példák

**Nagyvállalat.** Egy fizetési szolgáltató mérnöki kultúrája évekig informálisan úgy kezelte az incidenseket, mint amelyeknek gyors nyugtázását érdemes kerülni, hogy ne tűnjön felelősnek. Ez következetesen rossz észlelési és nyugtázási időket eredményezett, amelyeket a vezetés kezdetben a nem megfelelő monitorozó eszközöknek tulajdonított. A valóban hibáztatásmentes utólagos elemzések felé tett kulturális fordulat, amelyben a vezetés nyilvánosan és kifejezetten a gyors, őszinte incidensnyugtázást is dicsérte, nem csak a gyors megoldást, két negyedéven belül mérhető javulást hozott az észlelési és a nyugtázási időben, megmutatva, hogy az eredeti szűk keresztmetszet kulturális volt, a hibáztatástól való félelem, nem technikai, vagyis nem a nem megfelelő eszközök, ahogy kezdetben feltételezték.

**Közszféra.** Egy közösségi közlekedési ügynökség üzemeltetési központja történelmileg szinte minden szolgáltatási zavart „kisebbnek" minősített a belső incidensnaplójában, és ezt a mintát egy új biztonsági igazgató gyanúsnak találta, tekintettel a terepi munkatársak tartós, informális panaszaira ismétlődő súlyos problémák miatt. A vizsgálat kiderítette, hogy a „kisebb" besorolás elkerülte a magasabb súlyosságokhoz előírt terhes formális jelentési folyamatot, nem szándékolt ösztönzést teremtve az alulsorolásra. Az ügynökség leegyszerűsítette a formális jelentési követelményeket minden súlyosságra, és kifejezetten megvédte a munkatársakat a hibáztatástól az őszinte súlyossági jelentésért. A későbbi incidensadatok pontosabb, és lényegesen magasabb arányát mutatták a valóban jelentős zavaroknak, végre őszinte képet adva a vezetésnek, amelyhez képest az infrastrukturális befektetéseket priorizálhatta.

## Üzleti érv: indítékok, ROI és TCO

A valóban hibáztatásmentes, jól besorolt, fázisokra bontott incidensmetrikák megtérülése olyan őszinte adat, amely ténylegesen rendszerszintű javulást hajt, ahelyett, hogy megnyugtató, de hamis képet adna, amelyet a félelemvezérelt alulnyilvánítás vagy téves besorolás állít elő. A fenti fizetési szolgáltató példája ezt konkrétan mutatja: kulturális javítás, nem eszközbefektetés oldotta meg azt, amit a vezetés technikai észlelési problémának diagnosztizált tévesen.

A teljes birtoklási költség többnyire kulturális és folyamatbeli befektetés: a vezetés tartós elkötelezettsége a hibáztatásmentes gyakorlat mellett, dokumentált és auditált súlyossági besorolási szempontok, és az a fegyelem, hogy az utólagos elemzések teendőit a befejezésig követjük. Ez a befektetés kevesebbe kerül, mint az alternatíva: olyan incidensmetrika-program, amely magabiztosan téves adatot állít elő, mert a félelem minden bemenetét megrontotta.

## Antiminták és buktatók

- **Hibáztatás-orientált incidensáttekintés:** minden jövőbeli incidensnél rontja a jelentés őszinteségét, a nyugtázás sebességét és a súlyossági besorolást.
- **Csak összemosott reagálásiidő-szám követése:** elrejti, melyik konkrét fázis, az észlelés, a nyugtázás vagy a megoldás, a tényleges probléma.
- **Következetlen súlyossági besorolás a csapatok között:** a szervezetszintű incidensadatokat összehasonlításra megbízhatatlanná teszi.
- **Az incidensgyakoriság és az MTTR elszigetelt vizsgálata:** elmulasztja azt a közös, őszinte képet, amelyet a párosított jel ad.
- **Utólagos elemzési folyamat, amely felismerést ad, de nincs elkészült teendő:** elpazarolja azt a szervezeti tanulást, amelyet a folyamat meg akar ragadni.
- **Kimondott hibáztatásmentes szabályzat, amelyet a vezetés nem él meg valójában:** ugyanazt a félelemvezérelt adatrontást okozza, mint a nyíltan hibáztatás-orientált kultúra.

## Érettségi modell

- **1. szint, Kezdeti:** Az incidenskezelés informális, a jelentés következetlen, és a hibáztatásra hajlamos kultúra aktívan eltántorítja az őszinte jelentést.
- **2. szint, Fejlődő:** Van némi incidenskövetés, de a súlyossági besorolás következetlen, és a hibáztatásmentes gyakorlatot kimondják, de nem élik meg következetesen.
- **3. szint, Szabványosított:** A fázisokra bontott incidensmetrikákat következetes, dokumentált súlyossági besorolással követik szervezetszerte, valóban hibáztatásmentes utólagos elemzési gyakorlattal.
- **4. szint, Irányított:** Az incidensgyakoriságot és az MTTR-t együtt vizsgálják, az utólagos elemzések teendőit a befejezésig követik, és a besorolás következetességét időszakosan auditálják.
- **5. szint, Összehangolt:** A szervezetnek bizonyított, tartós története van arról, hogy a hibáztatásmentes gyakorlat őszinte adatot és valódi rendszerszintű javításokat hoz, és az incidensmetrikák közvetlenül és megbízhatóan megalapozzák a megbízhatósági befektetési döntéseket.

## Ötletek a vitához

1. Kiállná az utólagos elemzési folyamatunk az őszinte próbát, hogy valóban hibáztatásmentes-e?
2. Mi a fázisbontása, az észlelés, a nyugtázás és a megoldás, a legutóbbi leglassabb incidensünknek?
3. Két csapat ugyanúgy sorolná be az utolsó jelentős incidensünk súlyosságát?
4. A friss utólagos elemzéseink teendőinek hány százaléka készült el valójában?
5. Alakította-e valaha a hibáztatástól való félelem, hogyan jelentettek vagy vitattak meg egy incidenst a csapatunkban?

## A legfontosabb tanulságok

- A **hibáztatásmentes utólagos elemzési kultúra előfeltétele** a megbízható incidensadatoknak. A hibáztatástól való félelem a jelentést, a nyugtázás sebességét és a besorolást egyaránt rontja.
- Bontsd a reagálási időt **észlelési, nyugtázási és megoldási** fázisokra, amelyek mindegyike más javításra mutat.
- A súlyosságot **következetes, dokumentált, auditált szempontok** szerint sorold be, az 5.1 téma kiszökött hibákra vonatkozó fegyelmét tükrözve.
- Az **incidensgyakoriságot és az MTTR-t együtt** vizsgáld, soha nem elszigetelten, ugyanaz a párosítási fegyelem, mint a DORA stabilitási metrikáinál.
- Kövesd az **utólagos elemzések teendőit a befejezésig**. A metrika a jó gyakorlat mellékterméke, nem a célja.

## Források és ajánlott olvasmányok

- *Site Reliability Engineering: How Google Runs Production Systems*, szerkesztők: Betsy Beyer, Chris Jones, Jennifer Petoff és Niall Richard Murphy (hibáztatásmentes utólagos elemzési gyakorlat és incidensmetrikák).
- *The Site Reliability Workbook*, szerkesztők: Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara és Stephen Thorne (gyakorlati útmutató az incidensreagáláshoz és az utólagos elemzéshez).
- *The Field Guide to Understanding Human Error*, szerző: Sidney Dekker (az alapvető érv a rendszerszemléletű, hibáztatásmentes hibavizsgálat mellett).
- Allspaw, John, „Blameless PostMortems and a Just Culture", Etsy Engineering Blog (2012): a hibáztatásmentes gyakorlat korai, nagy hatású megfogalmazása a szoftverüzemeltetésben.
