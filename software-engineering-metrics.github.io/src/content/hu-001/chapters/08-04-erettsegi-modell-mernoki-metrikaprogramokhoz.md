# 8.4 Érettségi modell mérnöki metrikaprogramokhoz

## Áttekintés és indíték

A könyv 1–7. részének minden témája a saját ötszintes [érettségi modelljével](https://en.wikipedia.org/wiki/Capability_Maturity_Model) zárul, az adott téma konkrét metrikacsaládjára szabva. Ez a téma mást tesz: hátralép, és azt kérdezi, milyen az érettség a metrikaprogram egészére nézve, arra a szervezeti képességre, amely mindezeket az egyedi metrikákat együtt előállítja, irányítja és cselekvésre használja. Egy szervezet lehet a 4. szinten az egyes DORA-metrikák érettségében, miközben az 1. szinten van a program általános érettségében, ha például kiváló a műszerezése, de nincs governance-a (1.4 téma), vagy kiválóak az egyedi metrikái, de a bevezetése félelemvezérelt volt (8.3 téma), és ez megrontotta az alapul szolgáló adatot, bármilyen jól tervezték is meg az egyes metrikákat.

A téma modellje öt dimenzió köré épül, amelyek keresztülmennek a könyv minden egyedi metrikacsaládján: governance és felelősség (1.4 téma), a műszerezés minősége (1.5 téma), az eredmény és a kibocsátás egyensúlya (1.3 téma, 7.4 téma), a kulturális bizalom (8.3 téma) és a folyamatos fejlődés (a kivezetési és felülvizsgálati fegyelem, amelyet az 1.1 téma a könyv legelején megalapozott). A szervezet általános programérettsége reálisan az öt dimenzió minimuma, nem az átlaga, mert bármelyik komoly gyengesége, különösen a kulturális bizalomé, alááshatja az összes többi erősségének értékét, pontosan ahogy a 8.3 téma közvetlenül érvelt.

A nagy csapatoknál ez az összevont modell egyetlen, őszinte műszert ad a vezetésnek a szervezeti önértékeléshez, amely különbözik a könyv során nyújtott téma-témánkénti érettségi ellenőrzésektől, és kiegészíti azokat. A nagyvállalatok, amelyek üzleti egységek között hasonlítják össze a metrikaérettséget, és a közszféra szervezetei, amelyek a programérettségről jelentenek a felügyeleti szerveknek, egyaránt profitálnak ebből az egyetlen, átfogó értékelésből, ahelyett hogy negyvenöt külön témaszintű érettségi értéket kellene maguknak koherens összképpé szintetizálniuk.

## Alapelvek

- **A programérettség a dimenziói közötti minimum, nem az átlag.** A kulturális bizalom komoly gyengesége aláássa az erősséget mindenütt máshol.
- **Az öt átfogó dimenzió: governance, műszerezés, eredményegyensúly, kulturális bizalom és folyamatos fejlődés.** Mindegyik dimenzió sok egyedi téma szálait fogja össze.
- **Ez a modell kiegészíti, nem helyettesíti az egyedi, témaszintű érettségi modelleket.** Használd mindkettőt együtt a teljes képhez.
- **Az önértékelés legyen őszinte és konkrét, ne aspirációs.** Ott pontozz, ahol ténylegesen vagy, konkrét bizonyítékkal, nem ott, ahol lenni szándékozol.
- **A szintek közötti előrelépés tudatos befektetést igényel**, nem csupán az idő múlását. Az érettség nem halmozódik fel automatikusan.

## Ajánlások

### Értékeld az öt dimenziót egyenként, konkrét bizonyítékkal

A governance-nál ellenőrizd, hogy minden következményes metrikának van-e nevesített felelőse és dokumentált chartája (1.4 téma). A műszerezésnél ellenőrizd, hogy a metrikák automatizált forrásból származnak-e, ahol lehet, nem önbevallásból (1.5 téma). Az eredményegyensúlynál számold ki az eredménysúlyozott és a kibocsátás-súlyozott metrikák tényleges arányát az elsődleges dashboardjaidon (7.4 téma). A kulturális bizalomnál őszintén mérd fel, hogy a bevezetési történetedben volt-e valaha metrikával való rosszul kezelt, büntető visszaélés, és hogyan kezelték (8.3 téma). A folyamatos fejlődésnél ellenőrizd, hogy a szervezetednek van-e dokumentált története olyan metrikák kivezetéséről, amelyek már nem érdemelték meg a helyüket (1.1 téma). Pontozd mindegyik dimenziót egyenként, mielőtt kombinálnád őket.

### Vedd a dimenziók minimumát őszinte összpontszámként

Állj ellen a kísértésnek, hogy az öt dimenzió pontszámát egyetlen, hízelgőbb összetett értékké átlagold. Az a program, amelynek kiváló a műszerezése (4. szint), de gyenge a kulturális bizalma (1. szint), semmilyen érdemi értelemben nem 2. vagy 3. szintű program. A gyenge dimenzió aktívan aláássa az erősek értékét, mert a félelemvezérelt kijátszással megrontott, megbízhatatlan adatot nem menti meg, hogy kiváló műszerezéssel gyűjtötték. Jelentsd őszintén a minimumot, bár ez kevésbé hízelgő összképet ad, mint az átlag.

### Használd ezt a modellt a témaszintű modellek mellett, nem helyettük

Ez az összevont modell azt válaszolja meg, „mennyire érett az általános programunk", a 2–8. rész egyedi témaszintű modelljei pedig azt, „mennyire érett a gyakorlatunk ennél a konkrét metrikánál". Használd mindkettőt együtt: az összevont modellt annak eldöntésére, melyik átfogó dimenzió igényli leginkább a befektetést, a témaszintű modelleket pedig annak azonosítására, mely konkrét metrikacsaládok igénylik leginkább a figyelmet az adott dimenzión belül.

### Vizsgáld felül az értékelést rögzített ütemben, ne csak válság hatására

A könyv következetes governance-fegyelmét követve (1.4 téma) értékeld újra a programérettséget rendszeres ütemben, az évenkénti gyakori, ne csak akkor, amikor egy válság (felfedezett kijátszási eset, hitelességet rontó nyilvános jelentés) kikényszeríti a kérdést. Az a program, amely csak reaktívan vizsgálja a saját érettségét, elmulasztja a lehetőséget, hogy elkapjon és kezeljen egy gyengülő dimenziót, mielőtt valódi, költséges incidenst okoz.

### Kezelj egy alacsony pontszámot őszintén befektetési kiindulópontként, nem bukott osztályzatként

Az 1.1 téma által az egész könyvre megalapozott diagnosztikus, nem értékelő megközelítést követve használj alacsony érettségi pontszámot, bármelyik dimenzión, tudatos befektetési terv kiindulópontjaként (a 8.5 téma bevezetési ütemterve a közvetlen következő lépés), ne ítéletként, amelyen rosszul érezzük magunkat. A legtöbb szervezet, őszintén értékelve, valódi gyengeségeket talál valahol ebben a modellben. A termékeny válasz a célzott befektetés, nem a védekezés a pontszám miatt.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Az öt dimenzió pontszámának átlagolása | Egyetlen, egyszerű, hízelgőbb számot ad | Elrejt egy kritikus gyengeséget az egyik dimenzióban, amely aláássa a többit |
| A dimenziók minimumának vétele | Őszinte, cselekvésre alkalmas, helyesen azonosítja a valódi korlátot | Elkeserítőnek érződhet, ha egy dimenzió jelentősen lemarad a többitől |
| Csak témaszintű modellek használata | Részletes, metrikaspecifikus útmutatás | Elmulasztja az általános programegészség átfogó képét |
| Csak ez az összevont modell használata | Egyszerű, magas szintű | Elmulasztja a konkrét, cselekvésre alkalmas részletet, amelyet a témaszintű modellek adnak |

A fő feszültség az **egyszerűség és az őszinteség** között van, visszhangozva az 5.5 téma figyelmeztetését a hamisan pontos egyetlen számmal szemben. Az átlagolt pontszámot egyszerűbb és kényelmesebb jelenteni, de aktívan elrejti a program általános megbízhatóságának és értékének valódi korlátját. Oldd fel a feszültséget az őszinteség javára: jelentsd a minimumot, és használd együtt ezt az összevont modellt és az egyedi témaszintű modelleket a teljes, pontos és cselekvésre alkalmas képhez.

## Kérdések a csapattal való megbeszéléshez

1. **Őszintén és egyenként értékelve, hány szintet ér el valójában az öt dimenziónk: governance, műszerezés, eredményegyensúly, kulturális bizalom és folyamatos fejlődés?** Járd végig kifejezetten mindegyik dimenziót, benyomás helyett konkrét bizonyítékkal, mielőtt egy általános értékeléssé kombinálnád őket.

2. **Melyik a leggyengébb dimenziónk, és ez egyezik-e a program általános egészségéről alkotott megérzésünkkel, vagy olyasmit tár fel, amit korábban nem neveztünk meg közvetlenül?** A kulturális bizalom alacsony pontszáma például aláásná a bizalmat az olyan adatban, amely egyébként technikailag kiválónak látszik.

3. **Átlagoltuk-e az erősségeinket és gyengeségeinket hízelgőbb összképpé, ahelyett hogy őszintén a leggyengébb dimenziónkat jelentenénk valódi korlátként?** Légy őszinte abban, hogyan beszélt a szervezeted korábban a saját metrikaérettségéről.

4. **Mikor értékeltük utoljára formálisan újra az általános programérettségünket, és válság váltotta ki, vagy tudatos, rendszeres ütem?** Ha csak válság váltotta ki, beszéljétek meg, hogyan nézne ki ezután a rendszeres értékelési ütem.

5. **Hogyan nézne ki konkrétan a célzott befektetés a leggyengébb dimenziónkban a következő negyedévre?** Lépj közvetlenül az értékelésről a cselekvésre, összekötve a téma diagnózisát a 8.5 téma bevezetési ütemtervével.

6. **Hogyan viszonyulna az önértékelésünk egy őszinte külső áttekintéshez, amelyet a szervezeten kívüli valaki végezne?** Ez a kérdés teszteli, hogy a belső értékelés maga is ki lehet-e téve ugyanannak az optimista torzításnak, amely ellen a könyv végig óv. Érdemes időnként ellenőrizni valóban külső nézőponttal.

## Ágazati szemszög

**Startup.** A formális ötdimenziós értékelés valószínűleg szükségtelen nagyon kis léptéknél, ahol az informális tudatosság általában lefedi azt, amit a modell feltárna. A korán felvehető szokás egyszerűen az, hogy őszinte legyél kifejezetten a kulturális bizalomról, mert egy fiatal cég korai metrikakultúrája olyan alapot vet, amelyet sokkal nehezebb megváltoztatni, miután a szervezet jelentősen megnőtt.

**Kisvállalkozás.** Egy egyszerű, őszinte, informális végigjárása az öt dimenziónak évente egyszer, formális pontozás nélkül is, megragadja a téma értékének nagy részét strukturált értékelési folyamat nélkül ekkora léptéknél.

**Nagyvállalat.** Ez az összevont modell különösen értékes az üzleti egységek metrikaérettségének tisztességes összehasonlításához, mert a tucatnyi csapat téma-témánkénti összehasonlítása kezelhetetlen lenne. Használd a szervezetszintű befektetés priorizálására afelé a dimenzió felé, amelyik az egységek között a legszélesebb körű gyengeséget mutatja.

**Közszféra.** A dokumentált, őszinte érettségi önértékelés, ezzel az összevont modellel, valóban hasznos eszköz a programszigor bemutatására egy felügyeleti szervnek, feltéve hogy az értékelést őszintén végzik, nem aspirációsan. Fontold meg magának az önértékelésnek az időszakos külső felülvizsgálatát, különösen a kulturális bizalom dimenzióra, amelyet a legnehezebb pontosan értékelni tisztán belső nézőpontból.

## Példák

**Nagyvállalat.** Egy logisztikai technológiai cég kezdeti önértékelése a műszerezés dimenzióját a 4. szintre pontozta (automatizált, átfogó adatforrás-kezelés a folyamatokból és rendszerekből), de a kulturális bizalom dimenzióját az 1. szintre, egy két évvel korábbi, kezeletlen metrikával való visszaélési eset nyomán, amelyet soha nem ismertek el közvetlenül és nem helyreállítottak (közvetlenül visszhangozva a 8.3 téma közszféra példáját). A vezetés kezdeti ösztöne az volt, hogy ezeket tisztességes 2. vagy 3. szintű összképpé átlagolja. A téma minimumalapú pontozásának őszintébb alkalmazása helyesen azonosította a kulturális bizalmat mint az egész program értékének valódi korlátját, mert még a kiváló műszerezés is olyan adatot termelt, amelyben a mérnökök, a múltbeli esetet ismerve, még mindig nem bíztak teljesen, és nem is jelentettek őszintén bele. Az őszinte, minimumalapú értékelés közvetlen eredményeként a kulturális bizalom helyreállítására célzott befektetést priorizálták a további műszerezési befektetés helyett, a 8.3 téma útmutatását közvetlenül követve.

**Közszféra.** Egy nemzeti statisztikai hivatal első formális érettségi önértékelése, amelyet ezzel az összevont modellel végzett egy tágabb technológiai governance-felülvizsgálat részeként, azt találta, hogy a governance dimenziója jól pontozott (világos felelősség, dokumentált chartek), de az eredményegyensúly dimenziója gyengén, mert a követett metrikák túlnyomó többsége kibocsátás- és aktivitásalapú volt, annak ellenére, hogy a 7. rész érve az eredménysúlyozásról a hivatal műszaki vezetésén belül szellemileg jól ismert volt. Ez az őszinte, konkrét megállapítás, a homályos általános érzés helyett, hogy „többet kellene mérnünk eredményeket", konkrét, bizonyítékalapú kiindulópontot adott a hivatal későbbi befektetési tervének (8.5 téma), és a hivatal felügyeleti testületének tett utólagos jelentés kifejezetten erre az érettségi értékelésre hivatkozott az átirányított metrikabefektetési stratégia alapjaként.

## Üzleti érv: indítékok, ROI és TCO

Az őszinte, minimumalapú érettségi önértékelés megtérülése a metrikaprogram értékének tényleges korlátjának helyes azonosítása, ahelyett hogy tovább fektetnénk egy már erős dimenzióba, miközben egy gyenge továbbra is aláássa az egész program megbízhatóságát. Pontosan ezt a mintát illusztrálja mindkét fenti példa. Ez a célzási hatás a modell elsődleges értéke: a korlátozott fejlesztési befektetést oda irányítja, ahol valóban elmozdítja az általános program érettségét, nem oda, ahol a befektetés éppen a legkönnyebb vagy a legismerősebb.

A teljes birtoklási költség maga az értékelési erőfeszítés, szerény és időszakos, mérlegelve azt a kockázattal, hogy tovább fektetünk egy már erős dimenzióba, miközben egy kezeletlen gyenge, különösen a kulturális bizalom, csendben tovább rontja mindannak az értékét, amit a program épített.

## Antiminták és buktatók

- **A dimenziópontszámok hízelgőbb összetett értékké átlagolása:** elrejti a program általános értékének valódi korlátját.
- **Csak aspirációs értékelés, a tényleges gyakorlat helyett a kinyilvánított szabályzat alapján:** pontatlan, túlzottan optimista képet ad.
- **Ennek az összevont modellnek a használata a témaszintű modellek helyettesítésére, nem kiegészítésére:** elveszíti azt a konkrét, cselekvésre alkalmas részletet, amelyet az egyedi modellek nyújtanak.
- **Csak akkor újraértékelni, amikor egy válság kikényszeríti a kérdést:** elmulasztja a lehetőséget, hogy proaktívan elkapjunk és kezeljünk egy gyengülő dimenziót.
- **Az alacsony pontszám bukott osztályzatként kezelése befektetési kiindulópont helyett:** védekezést hív elő a termékeny, diagnosztikus válasz helyett, amelyet a könyv végig ajánl.
- **Soha nem keresni őszinte külső nézőpontot az önértékeléshez:** azt kockáztatja, hogy ugyanaz az optimista torzítás, amely ellen a könyv végig óv, magát az értékelést is érinti.

## Érettségi modell

- **1. szint, Kezdeti:** Nincs formális átfogó értékelés. Az egyes metrikacsaládokat egyenként lehet értékelni, de az általános programegészség vizsgálatlan.
- **2. szint, Fejlődő:** Van némi informális tudatosság az általános program erősségeiről és gyengeségeiről, de strukturált, ötdimenziós értékelést nem végeztek.
- **3. szint, Szabványosított:** Strukturált, őszinte, minimumalapú ötdimenziós értékelést végeznek konkrét bizonyítékkal, szervezet szinten.
- **4. szint, Irányított:** Az értékelést rendszeres ütemben megismétlik, és megállapításai közvetlenül és következetesen tájékoztatják a célzott befektetési prioritásokat.
- **5. szint, Összehangolt:** A szervezetnek igazolt, fenntartott őszinte önértékelési gyakorlata van, az időszakos külső felülvizsgálatot is beleértve, és konkrét befektetési döntésekre tud mutatni, amelyeket az értékelés megállapításai közvetlenül hajtottak.

## Ötletek a vitához

1. Mi az őszinte, bizonyítékalapú pontszámunk most mind az öt dimenzióra?
2. Melyik dimenzió a valódi korlátunk, és ez egyezik-e a megérzésünkkel?
3. Átlagoltuk-e valaha a pontszámainkat hízelgőbb képpé, mint amit a minimum mutatna?
4. Mikor értékeltünk utoljára formálisan újra, és proaktív vagy válságvezérelt volt?
5. Mit tárna fel valószínűleg az önértékelésünk őszinte külső felülvizsgálata?

## A legfontosabb tanulságok

- A programérettség öt átfogó dimenzióra terjed ki: **governance, műszerezés, eredményegyensúly, kulturális bizalom és folyamatos fejlődés**.
- Az általános érettség a **dimenziók minimuma, nem az átlaga**. A kulturális bizalom gyengesége aláássa az erősséget mindenütt máshol.
- Használd ezt az összevont modellt **a könyv egyedi témaszintű érettségi modelljei mellett, nem helyettük**.
- **Értékelj újra rendszeres ütemben**, ne várd meg, míg egy válság kikényszeríti a kérdést.
- Kezelj egy alacsony pontszámot **őszinte befektetési kiindulópontként**, nem bukott osztályzatként, a könyv végigvonuló diagnosztikus megközelítését követve.

## Források és ajánlott olvasmányok

- *Capability Maturity Model Integration (CMMI)*, Software Engineering Institute (az általános érettségimodell-módszertan, amelyből a téma megközelítése strukturális ihletet merít).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble és Gene Kim (az egyedi témaszintű érettségi modellek kutatási alapja, amelyeket ez az összevont modell összefog).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin (a metrikaprogram egészségének és működési zavarainak szervezeti értékelése).
- *The Fifth Discipline: The Art and Practice of the Learning Organization*, Peter M. Senge (rendszerszintű szervezeti önértékelés és folyamatos fejlődés).
