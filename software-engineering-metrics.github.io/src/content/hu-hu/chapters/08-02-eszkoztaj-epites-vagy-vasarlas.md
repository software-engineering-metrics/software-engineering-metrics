# 8.2 Eszköztáj: építés vagy vásárlás

## Áttekintés és indíték

Minden szervezet, amely a könyv útmutatását megvalósítja, előbb-utóbb gyakorlati infrastruktúra-döntés elé kerül: építsen belső metrikaeszközöket, vegyen kereskedelmi mérnöki elemzési platformot, vagy, a gyakorlatban leggyakrabban, valamilyen kombinációt. Ez a téma ugyanazzal a szigorral kezeli ezt a döntést, amelyet az 5.5 téma bármely más mérnöki befektetésre alkalmaz: őszinte költség-haszon elemzéssel, amely a szervezeted méretére, meglévő adatforrásaira és a könyvből valóban követni szándékozott konkrét metrikákra szabott, nem olyan alapértelmezett válasszal, amely a környezettől függetlenül mindenkire egyformán érvényes.

A kereskedelmi mérnöki elemzési eszközök piaca jelentősen megérett, és sok platform ma szilárd, nagyrészt automatizált műszerezést kínál a DORA-metrikákhoz (2. rész), a pull request- és áttekintési adatokhoz (2.9 téma), és egyre inkább a fejlesztői élmény felmérési infrastruktúrához (3.7 téma). Ez az érettség sok szervezetnél legalább az alapréteg megvásárlása felé tolta a számítást, de nem szüntette meg az építési lehetőség valódi előnyeit a konkrét, testreszabott igényeknél. Különösen az eredménytelemetriánál, amelyről a 7.4 téma azt érvel, hogy a metrikaprogram szükséges középpontja, és amely gyakran a könyv által tárgyalt legkevésbé szabványosított, legszervezet-specifikusabb mérési kategória.

A nagy csapatoknál ennek a döntésnek valódi, folyamatos költségvetési és mérnöki kapacitás-következményei vannak. A nagyvállalatoknak gyakran valóban heterogén, örökölt és modern rendszerekből álló tájon kell metrikaeszközöket integrálniuk, ami jelentősen alakítja az építés-vásárlás számítást. A közszféra szervezetei gyakran szembesülnek beszerzési korlátokkal, valamint adatszuverenitási vagy biztonsági követelményekkel, amelyek érdemben befolyásolják, mely kereskedelmi lehetőségek egyáltalán életképesek, néha az építés vagy bizonyos, ellenőrzött szállítók felé billentve a döntést, bármit sugallna is önmagában a tiszta költség-haszon elemzés.

## Alapelvek

- **Ez ritkán mindent vagy semmit döntés.** A legtöbb érett metrikaprogram a jól szabványosított metrikákhoz vásárolt, a szervezet-specifikus eredménytelemetriához épített eszközöket kombinálja.
- **Vásárolj a jól szabványosított, széles körben igényelt metrikákhoz, építs a valóban szervezet-specifikusakhoz.** A DORA-metrikák és a pull request-elemzések árucikk-terület. A konkrét üzleti eredmény-korrelációd (5.3 téma) általában nem.
- **Az adattulajdon és a hordozhatóság éppoly fontos, mint a funkcióösszehasonlítás.** Az az eszköz, amely bezárja a metrikaadataidat, tartós kockázat, nem csupán kényelmetlenség.
- **Az integrációs költséget gyakran alábecsülik** az építés-vásárlás elemzésben, mindkét lehetőségnél.
- **A beszerzési, biztonsági és adatszuverenitási korlátok felülírhatják a tiszta költség-haszon számítást**, különösen a közszféra szervezeteinél.

## Ajánlások

### Vásárolj az árucikk-rétegre: DORA, áttekintés és felmérési infrastruktúra

Azoknál a metrikacsaládoknál, amelyekhez érett, széles körben elérhető kereskedelmi eszközök vannak, a DORA-metrikák műszerezéséhez (2. rész), a pull request- és kódáttekintési elemzésekhez (2.9 téma) és a fejlesztői élmény felmérési platformokhoz (3.7 téma), a vásárlás általában a jobb gazdasági választás a legtöbb szervezetnek egy bizonyos méret alatt, mert az egyenértékű infrastruktúra építése megkettőzi azt a mérnöki munkát, amelybe sok szállító már erősen befektetett, és a saját változat építéséből korlátozott valódi megkülönböztetés érhető el.

### Építs a valóban szervezet-specifikus eredménytelemetriához

Azoknál az eredménymetrikáknál, amelyekről a 7.4 téma azt érvel, hogy a metrikaprogram súlypontjának kell lenniük: az üzleti eredmény-korrelációnál (5.3 téma), a konkrét termékedhez kötött funkcióelfogadásnál (5.2 téma), a konkrét költségszerkezetedhez kötött egységgazdaságtannál (5.4 téma), a kereskedelmi eszközök sokkal kevésbé szabványosítottak, és gyakran nem tudják megragadni a szervezeted konkrét üzleti logikáját és adatmodelljét kiterjedt, drága testreszabás nélkül, amely végül többe kerülhet, mint az egyenértékű képességet belsőleg megépíteni, az eredmény fölött teljes irányítással.

### Értékeld az adattulajdont és a hordozhatóságot, mielőtt elköteleződsz egy szállító mellett

Kereskedelmi szerződés aláírása előtt győződj meg róla, hogy a teljes történeti metrikaadatodat használható, szabványos formátumban exportálni tudod, és értsd meg, mi történik ezekkel az adatokkal és történetükkel, ha szállítót váltasz vagy megszünteted a szolgáltatást. Az a szállítói kapcsolat, amelyből az adat [bezártsága](https://en.wikipedia.org/wiki/Vendor_lock-in) miatt nehéz kilépni, tartós szervezeti kockázat, nem csupán kényelmetlenség, és ez az értékelés ugyanazt a komolyságot érdemli, mint bármely más jelentős, többéves infrastruktúra-elköteleződés.

### Költségvetést tervezz reálisan az integrációs költségre a döntés mindkét oldalán

Akár építesz, akár vásárolsz, az integrációs költség, az eszköz összekapcsolása a tényleges verziókezelőddel, CI/CD-vel, incidenskövetéssel és üzleti rendszereiddel, gyakran alulbecsült a kezdeti tervezésben mindkét útnál. Az integrációs erőfeszítésre külön, jelentős tételként tervezz költségvetést az építés-vásárlás elemzésedben, ahelyett hogy azt feltételeznéd, hogy egy kereskedelmi eszköz minimális beállítással, dobozból kivéve működik, vagy hogy egy házon belüli megoldás integrációs költsége csekély kiegészítés a fejlesztési költséghez.

### Számolj kifejezetten és korán a beszerzési, biztonsági és szuverenitási korlátokkal

A közszféra és a szabályozott nagyvállalati szervezetek számára az adatszuverenitási követelmények, a biztonsági tanúsítási igények és a beszerzési folyamatok érdemben szűkíthetnek vagy kizárhatnak bizonyos kereskedelmi lehetőségeket a funkcióminőségüktől függetlenül, néha az építés vagy egy kisebb, kifejezetten ellenőrzött szállítókörre billentve a döntést. Azonosítsd ezeket a korlátokat kifejezetten és korán az értékelési folyamatban, ahelyett hogy csak azután fedeznéd fel őket, hogy már jelentős értékelési erőfeszítést fektettél egy olyan lehetőségbe, amelyről kiderül, hogy a tényleges képességétől független okokból nem életképes.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Kereskedelmi eszköz vásárlása | Gyorsan telepíthető, érett funkcióhalmaz, a szállító karbantartja | Kevésbé testreszabható szervezet-specifikus eredménymetrikákra, lehetséges bezárás |
| Belső eszköz építése | Teljesen testreszabott, teljes adattulajdon és -irányítás | Jelentős, folyamatos mérnöki befektetés, megkettőzi a munkát az árucikk-metrikáknál |
| Hibrid: árucikk-réteg vásárlása, eredményréteg építése | Egyensúlyba hozza a költséghatékonyságot a valódi testreszabással ott, ahol a legjobban számít | Integrációs munkát igényel a vásárolt és épített összetevők koherens összekötéséhez |
| Mindent vásárolni, az eredménytelemetriát is, kiterjedt szállítói testreszabással | Egyetlen szállítói kapcsolat, esetleg egyszerűbb beszerzés | Olyan drága lehet, mint az építés, kisebb végső irányítással az eredmény fölött |

A fő feszültség a **testreszabási igény és a fejlesztési költség** között van. Azokat a metrikákat, amelyek a legtöbbet profitálnak a testreszabásból, a kifejezetten az üzletedhez kötött eredménytelemetriát, a legdrágább jól megépíteni. A legolcsóbban megvásárolható metrikák, a DORA és az áttekintési elemzések, azok, ahol a valódi testreszabás a legkevésbé számít. Oldd fel a feszültséget úgy, hogy a döntést közvetlenül ehhez a mintához igazítod: vásárolj, ahol a szabványosítás jól szolgál, építs, ahol a konkrét környezeted valóban megköveteli, és a felosztás mindkét oldalán reálisan tervezz költségvetést az integrációra.

## Kérdések a csapattal való megbeszéléshez

1. **A könyv által tárgyalt minden metrikacsaládnál valóban profitálnánk-e a testreszabásból, vagy egy szabványosított kereskedelmi eszköz ugyanolyan jól szolgálna?** Járd végig kifejezetten a 2–6. részt, és soroljuk be az egyes metrikacsaládokat a vásárlás vagy építés oszlopba ezen konkrét teszt alapján.

2. **Értékeltük-e a jelenlegi vagy leendő szállítónk adatexportálási és hordozhatósági lehetőségeit, vagy azt feltételezzük, hogy könnyen távozhatnánk, ha kellene?** Ezt közvetlenül ellenőrizd, ne feltételezd. Az adatbezártságot gyakran csak akkor fedezik fel, amikor a szervezet ténylegesen váltani próbál.

3. **Az eredeti építés-vásárlás elemzésünk reálisan számolt-e az integrációs költséggel, vagy elsősorban a licencdíjakra és a fejlesztési órákra összpontosított?** Vizsgálj felül egy közelmúltbeli eszközdöntést, és ellenőrizd, hogy az integrációs költséget valóban megbecsülték-e, vagy jelentősen alulbecsülték.

4. **Vannak-e olyan beszerzési, biztonsági vagy adatszuverenitási korlátjaink, amelyek bizonyos kereskedelmi lehetőségeket a funkcióminőségüktől függetlenül kizárnának?** Azonosítsd ezeket a korlátokat kifejezetten azelőtt, nem azután, hogy jelentős értékelési erőfeszítést fektetnél olyan lehetőségekbe, amelyekről kiderülhet, hogy nem életképesek.

5. **A jelenlegi eszköztájunk tudatos hibrid, amely az építést és a vásárlást oda illeszti, ahol mindkettő értelmes, vagy egyedileg ésszerű, eseti döntésekből halmozódott fel az idők során?** Légy őszinte abban, melyik minta írja le valójában a jelenlegi helyzetedet.

6. **Mennyibe kerülne nekünk, erőfeszítésben és kockázatban, ha ma szállítót kellene váltanunk a jelenlegi metrikaeszközeinknél?** Ez a konkrét kérdés teszteli a tényleges jelenlegi kitettségedet az adatbezártság kockázatára, a szállító szerződési feltételeinek névleges ígéretein túl.

## Ágazati szemszög

**Startup.** Ekkora léptéknél alapértelmezetten vásárolj árucikk-eszközöket. Egyedi metrikainfrastruktúra építése ritkán jó felhasználása a szűkös korai mérnöki kapacitásnak, amikor érett, olcsó kereskedelmi lehetőségek léteznek kifejezetten a DORA- és az áttekintési metrikákhoz. A felépítendő erőfeszítést tartogasd az egyetlen eredménymetrikára (5.3 téma), amely a legközvetlenebbül tükrözi a terméked alapértékét.

**Kisvállalkozás.** A legtöbb kereskedelmi eszköz ésszerűen skálázódik lefelé, és elérhető áron kapható kisebb szervezeteknek. Az árucikk-réteg vásárlása szinte mindig a helyes választás, és bármi egyedi építése ritkán indokolt, amíg a szervezeted jelentősen meg nem nőtt, és valóban specifikus igényei ki nem alakultak.

**Nagyvállalat.** A témában ajánlott hibrid megközelítés itt megérdemli a bonyolultságát: vásárold meg az árucikk-réteget nagy léptékben (gyakran jelentős alkupozícióval kedvező feltételekért), és tudatosan fektess be a szervezet-specifikus eredménytelemetria-réteg megépítésébe, mert az üzleti logikád és az adatmodelled bonyolultsága ekkora léptéknél általában meghaladja azt, amit az általános kereskedelmi eszközök kiterjedt, drága testreszabás nélkül be tudnak fogadni.

**Közszféra.** A beszerzési folyamatok, a biztonsági tanúsítási követelmények és az adatszuverenitási korlátok gyakran jobban dominálják ezt a döntést, mint a puszta funkció- vagy költségösszehasonlítás sugallná. Vond be korán az értékelési folyamatba a beszerzési és biztonsági érdekelteket, és légy kész arra, hogy az építési lehetőség itt valóban vonzóbb legyen, mint egy hasonló magánszektorbeli környezetben, kifejezetten ezen korlátok miatt, nem azért, mert az építés eleve jobb.

## Példák

**Nagyvállalat.** Egy szoftvercég kezdetben teljesen egyedi metrikaplatformot próbált építeni, amely a 2. résztől a 6. részig minden metrikacsaládot lefedett. Ez többéves erőfeszítés volt, amely jelentős mérnöki kapacitást emésztett fel, és kifejezetten a szabványosított DORA- és áttekintési metrikáknál még így is lemaradt az érett kereskedelmi kínálattól. A felülvizsgált stratégia kereskedelmi platformot fogadott el ezekhez az árucikk-metrikákhoz, felszabadítva a belső platformcsapatot, hogy kizárólag az üzleti eredmény-korrelációs és egységgazdaságtani telemetria (5.3, 5.4 téma) építésére összpontosítson, amelyek valóban a cég üzleti modelljére specifikusak voltak, és amelyeket egyetlen kereskedelmi eszköz sem nyújtott volna dobozból. Ez a hibrid megközelítés egyetlen év alatt teljesebb, valóban hasznosabb metrikaprogramot adott, mint az egészet építő stratégia két év után.

**Közszféra.** Egy szövetségi ügynökség kereskedelmi mérnöki elemzési platformok kezdeti értékelése azt találta, hogy az elérhető szállítók egyike sem tudta teljesíteni az ügynökség adatszuverenitási követelményeit, amelyek előírták, hogy minden mérnöki metrikaadat konkrét, tanúsított kormányzati adatközpontokban maradjon. Az építési lehetőség teljes feladása helyett az ügynökség azonosított a szállítók egy kisebb körét, amelyek kormányzati tanúsítású, szuverén felhős telepítési lehetőséget kínáltak, a szokásos kereskedelmi árakhoz képest szerény felárral, és sikeresen üzembe helyezett egy hibrid programot: vásárolt eszközök az árucikk-metrikarétegre a szükséges szuverenitási határon belül, és épített belső eszközök az ügynökség konkrét állampolgári eredménytelemetria-igényeire, amelyeket a szuverenitási szempontoktól függetlenül egyetlen elérhető kereskedelmi szállító sem fedett le.

## Üzleti érv: indítékok, ROI és TCO

A tudatos, hibrid építés-vásárlás stratégia megtérülése, hogy elkerüli a téma példái által szemléltetett mindkét hibamódot: a már olcsón létező piaci képesség építésének elpazarolt, többéves mérnöki befektetését, és egy valóban szervezet-specifikus igény rosszul illeszkedő kereskedelmi eszközbe erőltetésének frusztrációját és végső testreszabási költségét. A fenti nagyvállalati példa ezt konkrétan mutatja: a hibrid megközelítés egy év alatt több valódi értéket adott, mint az egészet építő stratégia kettő alatt.

A teljes birtoklási költség bármelyik útnál magában foglalja az integrációs költséget, amelyet gyakran alulbecsülnek, és kifejezetten a vásárolt eszközöknél a lehetséges szállítói bezártság folyamatos kockázati költségét, hacsak az adathordozhatóságot előre meg nem erősítik és szerződésben nem védik. Ha mindkettőre reálisan tervezel költségvetést, ahelyett hogy szűken csak a licencdíjakra vagy a fejlesztési órákra összpontosítanál, sokkal pontosabb teljes költségképet kapsz bármelyik lehetőségnél.

## Antiminták és buktatók

- **Egyedi eszközök építése jól szabványosított, árucikk-metrikákhoz:** megkettőzi azt a mérnöki munkát, amelybe sok szállító már erősen befektetett.
- **Kereskedelmi eszköz vásárlása valóban szervezet-specifikus eredménytelemetriához az illeszkedés előzetes ellenőrzése nélkül:** drága, rosszul illeszkedő testreszabást vagy kielégítetlen igényt kockáztat.
- **Az adatexportálás és a hordozhatóság értékelésének elmulasztása, mielőtt elköteleződsz egy szállító mellett:** tartós, drága bezártságot kockáztat, amelyet csak távozáskor fedeznek fel.
- **Az integrációs költség alulbecslése a döntés bármelyik oldalán:** pontatlan teljes költség-összehasonlítást és valószerűtlen határidőket eredményez.
- **A beszerzési, biztonsági vagy szuverenitási korlátok figyelmen kívül hagyása az értékelési folyamat késői szakaszáig:** értékelési erőfeszítést pazarol olyan lehetőségekre, amelyekről kiderül, hogy a képességüktől független okokból nem életképesek.
- **Ennek kezelése egyetlen, mindent vagy semmit döntésként:** elmulasztja a hibrid megközelítést, amely a legjobban illeszkedik a legtöbb szervezet tényleges, vegyes igényeihez.

## Érettségi modell

- **1. szint, Kezdeti:** Az eszközdöntéseket eseti módon hozzák, tudatos építés-vásárlás elemzés vagy az adathordozhatóság megfontolása nélkül.
- **2. szint, Fejlődő:** Van némi elemzés, de az integrációs költséget rendszeresen alulbecsülik, és a hibrid megközelítést nem veszik tudatosan fontolóra.
- **3. szint, Szabványosított:** Tudatos, hibrid építés-vásárlás stratégia következetesen az árucikk-metrikákat vásárolt eszközökhöz, a szervezet-specifikus eredménytelemetriát épített eszközökhöz rendeli.
- **4. szint, Irányított:** Az adathordozhatóságot minden vásárolt eszköznél megerősítik és szerződésben védik, és a beszerzési, biztonsági és szuverenitási korlátokat kifejezetten és korán figyelembe veszik.
- **5. szint, Összehangolt:** A szervezet eszköztája érett, tudatos hibrid stratégiát tükröz, amelyet rendszeresen felülvizsgálnak, ahogy a kereskedelmi kínálat és a szervezeti igények fejlődnek, igazolt értékkel mind a vásárolt, mind az épített összetevőkből.

## Ötletek a vitához

1. Melyik jelenlegi metrikánk profitálna a legtöbbet a testreszabásból, amelyet jelenleg nem kapunk meg?
2. Megerősítettük-e, hogy ki tudnánk exportálni a teljes történeti metrikaadatunkat, ha szállítót kellene váltanunk?
3. Az utolsó eszközdöntésünk reálisan számolt-e az integrációs költséggel?
4. Melyik beszerzési, biztonsági vagy szuverenitási korlátot becsülhetjük alá?
5. Hogyan nézne ki a tudatos hibrid stratégia a mi konkrét metrikakészletünkre?

## A legfontosabb tanulságok

- Ez ritkán mindent vagy semmit döntés. A legtöbb érett program **az árucikk-metrikákhoz vásárolt eszközöket a szervezet-specifikus eredménytelemetriához épített eszközökkel kombinálja**.
- **Vásárolj a szabványosított metrikákhoz** (DORA, áttekintési elemzések, felmérési infrastruktúra), **építs a valóban szervezet-specifikus** eredménymérésekhez.
- Értékeld az **adattulajdont és a hordozhatóságot**, mielőtt elköteleződsz egy szállító mellett. A bezártság tartós kockázat, nem csupán kényelmetlenség.
- **Tervezz reálisan költségvetést az integrációs költségre** a döntés mindkét oldalán. Gyakran alulbecsülik.
- A **beszerzési, biztonsági és szuverenitási korlátok** felülírhatják a tiszta költség-haszon számítást, különösen a közszféra szervezeteinél.

## Források és ajánlott olvasmányok

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble és Gene Kim (a metrikacsaládok, amelyekre a téma építés-vásárlás elemzése vonatkozik).
- *Cloud FinOps*, J.R. Storment és Mike Fuller (az eszközbefektetési döntésekre alkalmazható költségelemzési alapelvek).
- A FinOps Foundation FinOps Frameworkje, [finops.org](https://www.finops.org/) (gyakorlati útmutatás a felhő- és SaaS-eszközköltségek értékeléséhez és kezeléséhez).
- Az amerikai Federal Risk and Authorization Management Program (FedRAMP) dokumentációja: hiteles útmutatás a kormányzati felhőeszközök biztonsági és szuverenitási követelményeiről.
