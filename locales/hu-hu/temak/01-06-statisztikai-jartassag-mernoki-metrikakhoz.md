# 1.6 Statisztikai jártasság mérnöki metrikákhoz

## Áttekintés és indíték

Nincs szükséged statisztikai diplomára ahhoz, hogy jól vezess egy metrikaprogramot,
de el kell kerülnöd néhány konkrét, gyakori hibát, amelyek az egyébként jól
irányított, jól műszerezett metrikákat aktívan félrevezetővé teszik. Egy csapat
mindent jól csinálhat, megnevezhet egy világos döntést, elkerülheti Goodhart
törvényét, az eredmények felé súlyozhat, rendezheti a felelősséget, megbízhatóan
műszerezhet, és mégis rossz következtetést vonhat le, mert átlagot olvasott ott,
ahol percentilisre volt szüksége, zajt nézett trendnek, vagy egy véletlen
egybeesésen ment el, amelyet oknak öltöztettek. Ez a téma az a minimális
statisztikai ítélőképesség, amelyet a könyv minden későbbi témájának olvasójától
feltételez.

Az alapprobléma az, hogy a mérnöki metrikák a formális statisztika mércéjével
általában zajosak, ferdék és kis mintájúak. Egyetlen csapat heti telepítésszáma
nem sima haranggörbe; néhány adatpont alkalmankénti nagy kiugró értékekkel (egy
nagy kiadás, egy incidens miatti visszagörgetési sorozat). Ha a nagy, jól viselkedő
adathalmazokra épült naiv intuíciókat ilyen adatra alkalmazzuk, rendszeresen
magabiztos, téves következtetéseket kapunk. Megtanulni észrevenni, mikor túl
zajos egy szám ahhoz, hogy megbízzunk benne, mikor hazudik az átlag, és mikor
nem mond semmit az okságról két együtt mozgó dolog, nem választható szigor: ez
választja el azt a metrikaprogramot, amely igazat tanít a szervezetnek, attól,
amely hihetően hangzó, de hamis dolgot.

Nagyvállalati és kormányzati léptéken a statisztikai hibák halmozódnak, mert egy
félrevezető következtetés, miután a vezetés elfogadta, sok csapaton át
cselekvésre vezet, mielőtt bárkinek eszébe jutna újra megvizsgálni a mögöttes
elemzést. Egy statisztikailag naiv összehasonlítás két divízió között, vagy egy
jelentős átszervezés előtte és utána, éveken át alakíthatja az erőforrás-elosztási
döntéseket pusztán zajra vagy egy senki által nem kontrollált zavaró változóra
alapozva. Ez a téma azért létezik, hogy ez a hiba kevésbé legyen valószínű.

## Alapelvek

- **A medián vagy a percentilis általában többet mond az átlagnál.** A mérnöki
  adatokat rendszeresen ferdítik kiugró értékek, amelyeket az átlagok elnyelnek,
  a percentilisek nem.
- **A kis minták zajos számokat adnak.** Néhány eseményből számolt százalék
  vadul ingadozik olyan okokból, amelyek semmi közük a valódi változáshoz.
- **Az átlaghoz való regresszió állandóan becsapja az embereket.** A szokatlanul jó
  vagy rossz értéket általában egy normálisabb követ, beavatkozással vagy
  anélkül.
- **A korreláció nem okság, és a zavaró változók mindenütt ott vannak.** Két együtt
  mozgó metrikának lehet egy rejtett közös harmadik oka, ahelyett hogy az egyik
  hajtaná a másikat.
- **A [szabályozókártya](https://en.wikipedia.org/wiki/Control_chart) jobb egyetlen előtte-utána összehasonlításnál.**
  Az, hogy látod a változás normál tartományát, teszi lehetővé, hogy a valódi
  eltolódást megkülönböztesd a zajtól.

## Ajánlások

### Ferde adatoknál alapértelmezésként mediánt és percentiliseket használj

A mérnöki időalapú metrikák, az átfutási idő, az incidensből való helyreállítási
idő, a válaszkésleltetés, szinte mindig jobbra ferdék: a legtöbb érték alacsonyan
csoportosul, hosszú farokkal, alkalmi nagy kiugró értékekkel. Az a farok által
húzott átlag olyan képet festhet, amilyenhez egyetlen tipikus eset sem hasonlít.
Jelentsd a **mediánt** (a középső értéket, ahol a megfigyelések fele fölötte,
fele alatta van) a **90.** vagy **95. percentilis** mellett (az az érték,
amely alá a megfigyelések 90%-a vagy 95%-a esik), amelyek együtt megmutatják
mind a tipikus esetet, mind a legrosszabb esetet, a farkat, amelyet egy csapat
valójában tapasztal. A testvérkönyv, a `software-engineering-guide` KPI-témája,
és a könyv 2. részének minden szállítási metrika témája végig ezt a szokást
feltételezi.

### Tudd, mikor túl kicsi egy minta ahhoz, hogy megbízz benne

Egy lassú hét három telepítéséből számolt változtatási hibaarány nem érdemi jel;
egyetlen hiba egyik napról a másikra 0%-ról 33%-ra mozdítja a százalékot olyan
okokból, amelyeknek semmi közük a mögöttes kockázathoz. Mielőtt egy százalékalapú
metrikára reagálsz, ellenőrizd a mögöttes számot. Gyakorlati ökölszabályként
kezeld úgy a nagyjából húsz-harminc mögöttes esemény alatti alapból számolt
rátát, mint zajosat, amely hosszabb megfigyelési ablakot igényel, mielőtt
következtetést vonsz le, és mondd ezt ki kifejezetten a dashboardon, ahelyett
hogy egy ingadozó, kis mintás százalékot ugyanazzal a magabiztossággal mutatnál,
mint egy stabil, nagy mintásat.

### Az átlaghoz való regresszióra figyelj, mielőtt egy beavatkozásnak tulajdonítod az érdemet

Ha egy csapat valaha volt legrosszabb incidenses hetét vezetői figyelem, majd
javulás követi, csábító a beavatkozásnak tulajdonítani a javulást. Gyakran a
javulás egy része enélkül is megtörtént volna, mert egy szokatlanul szélsőséges
értéket tisztán statisztikai műtermékként tipikusabb követ, és ezt a jelenséget
**az átlaghoz való regressziónak** nevezik. Védekezz ellene úgy, hogy hosszabb
történeti alapértékhez hasonlítasz az egyetlen szélsőséges adatpont helyett,
amely a figyelmet kiváltotta, és megfelelően szerény vagy abban, mennyit
tulajdonítasz bármely megfigyelt javulásból egy konkrét lépésnek.

### Keress zavaró változókat, mielőtt azt állítanád, hogy egy metrika okozott egy eredményt

Amikor két metrika együtt mozog, a telepítési gyakoriság az ügyfél-elégedettséggel
együtt nő, állj ellen a reflexnek, hogy az egyiket a másik okának mondd, mielőtt
mérlegelnéd a **zavaró változót**: a rejtett harmadik tényezőt, amely mindkettőt
hajtja. Egy új funkció bevezetése egymástól függetlenül növelheti a telepítési
gyakoriságot (több követő javítás) és az elégedettséget (maga a funkció), a két
metrika között semmilyen oksági kapcsolat nélkül. Mielőtt egy korrelációt az
okság bizonyítékaként mutatsz be, kérdezd meg aktívan, mi más változott ugyanakkor,
ami mindkét mozgást megmagyarázhatná.

### Szabályozókártyát használj, ne egyetlen előtte-utána pillanatképet

A **szabályozókártya** egy metrikát az idő függvényében ábrázol, a változás
normál tartományát kifejezetten mutatva, jellemzően egy központi átlag körüli
sávokként. Ez lehetővé teszi, hogy megkülönböztesd a valódi eltolódást, a normál
tartományon kívüli adatpontot vagy tartós sorozatot, a szokásos zajtól, amelyet
egyetlen előtte-utána összehasonlítás nem tud elkülöníteni. Mielőtt azt
állítanád, hogy „a szám javult a változtatás után", ábrázolj elég történeti
adatot, hogy lásd, hogyan néz ki a normál ingadozás, és ellenőrizd, hogy a
változtatás utáni érték valóban kívül esik-e rajta.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Átlagok | Egyszerű, ismerős, könnyű kiszámolni | Ferde mérnöki adatokon a kiugró értékek torzítják |
| Mediánok és percentilisek | Ellenállnak a kiugró értékeknek, egyszerre mutatják a tipikus esetet és a farkat | Kissé kevésbé ismerősek nem műszaki közönségnek |
| Egyetlen előtte-utána összehasonlítás | Gyors, intuitív, könnyen bemutatható | Kiszolgáltatott az átlaghoz való regressziónak és a zajnak |
| Szabályozókártyák és hosszabb alapértékek | Megbízhatóan megkülönbözteti a valódi eltolódást a zajtól | Több történeti adatot és több magyarázatot igényel nem műszaki közönségnek |

A központi feszültség az **egyszerűség és a szigor** között áll fenn. Az átlagokat
és az egyetlen előtte-utána összehasonlításokat könnyebb kiszámolni és
elmagyarázni, és éppen ezért uralják az alkalmi jelentéseket, de ezek azok a
technikák is, amelyek a legnagyobb valószínűséggel adnak magabiztos, téves
következtetést a könyv metrikái által létrehozott zajos, ferde adatokon.
Úgy oldd fel a feszültséget, hogy a szigorúbb technikákat, a mediánt, a
percentiliseket és a szabályozókártyákat alapértelmezésként használod minden
valódi következményű döntéshez, az egyszerűbbeket pedig a kis téttel bíró,
feltáró vizsgálatokra tartogatod, ahol egy téves olvasat keveset kóstál.

## Kérdések a csapattal való megbeszéléshez

1. **A dashboardunk mely csempéi jelentenek átlagot ott, ahol a medián vagy a
   percentilis igazabb történetet mondana?** Az időalapú mérnöki metrikák szinte
   mindig ferdék, és a ferde adatokon az átlag jól nézhet ki, miközben a tipikus
   eset vagy a legrosszabb eset farka teljesen mást mond. Kifejezetten erre a
   helyettesítésre auditáld az időalapú csempéidet.

2. **Mekkora a százalékalapú metrikáink mögötti minta, és ugyanazzal a
   magabiztossággal kezeljük a tíz eseményből számolt metrikát, mint az ezerből
   számoltat?** Az ingadozó, kis mintás ráta a mögöttes szám nélkül bemutatva a
   zaj túlreagálására hív. Ellenőrizd a változtatási hibaarányodat és a hasonló
   százalékcsempéidet erre a hiányra.

3. **Tulajdonítottunk-e valaha egy beavatkozásnak olyan javulást, amelyet az átlaghoz
   való regresszió enélkül is előidézett volna?** Ez az egyik legkönnyebben
   elkövethető statisztikai hiba és az egyik legnehezebben észrevehető utólag,
   mert a beavatkozás és a javulás valóban ebben a sorrendben történt. Nézz vissza
   egy közelmúltbeli „megjavítottuk" történetre, és őszintén kérdezd meg, elég
   hosszú volt-e az alapértékes összehasonlítás ennek kizárásához.

4. **Hol feltételeztük, hogy egy metrika okozott egy másikat, anélkül hogy
   zavaró változót kerestünk volna?** Hogy két dolog együtt mozog, gyakori; hogy
   az egyik okozza a másikat, erősebb állítás, amely több bizonyítékot igényel.
   Válassz egy korrelációt, amelyben a csapatod jelenleg hisz, és próbálj meg
   megnevezni egy hihető zavaró tényezőt, amely oksági kapcsolat nélkül is
   megmagyarázza.

5. **Van-e elég történeti adatunk ahhoz, hogy tudjuk, hogyan néz ki a normál
   ingadozás a legfontosabb metrikáinknál, vagy egyes pontokat hasonlítunk össze?**
   A normál tartomány érzete nélkül bármely egyedi érték riasztónak vagy
   megnyugtatónak látszik, hangulattól függően, nem bizonyítéktól. Beszéljétek
   meg, ábrázolták-e valaha a legjobban figyelt metrikátokat szabályozókártyaként
   egyetlen szám helyett.

6. **Hogyan kommunikáljuk jelenleg a bizonytalanságot a nem műszaki
   érdekelteknek, és a dashboardunk nem sugall-e nagyobb pontosságot, mint amit az
   adatok valóban támogatnak?** A normál ingadozás vagy a mintaméret jelzése
   nélküli diagram miatt a vezetői csapat túlreagálhatja a zajt, vagy ugyanolyan
   gyakran elvetheti a valódi jelet mint zajt. Beszéljétek meg, hogyan
   kommunikálhatná ezt őszintén a jelentésetek anélkül, hogy olvashatatlanná
   válna.

## Ágazati szemszög

**Startup.** A kis csapatok szinte mindenütt kis mintákat állítanak elő, ami azt
jelenti, hogy a téma kis mintákra vonatkozó óvatossága folyamatosan számít. Állj
ellen annak, hogy erős következtetéseket vonj le egyetlen rossz vagy egyetlen
nagyszerű hétből; néhány adatponttal a „ez trend?" kérdésre az őszinte válasz
gyakran az, hogy „még nem tudjuk".

**Kisvállalkozás.** A készen kapott eszközök beépített dashboardjai gyakran
átlagokat és egyetlen időszakos összehasonlításokat alkalmaznak alapértelmezésként,
mert ezeket a legegyszerűbb kiszámolni és megjeleníteni. Ahol az eszköz engedi,
válts mediánra az időalapú metrikáknál, és légy szkeptikus minden kis mögöttes
számból számolt „e havi 40%-os emelkedés" főcímmel szemben.

**Nagyvállalat.** A statisztikai hibák ezen a léptéken beépülnek az erőforrás-
és átszervezési döntésekbe, amelyek több száz embert érintenek. Fektess elemzőkbe
vagy beágyazott adatszakértőkbe, akik megfelelő szabályozókártyákat tudnak építeni
és zavaró változókat tudnak ellenőrizni, mielőtt egy üzletági egységek közötti
vagy egy jelentős változás előtti és utáni összehasonlítást a vezetés elé
lezárt tényként visznek.

**Közszféra.** A nyilvános jelentést vagy költségvetési indoklást tápláló
statisztikailag naiv összehasonlításnak aránytalanul nagy valós következményei
lehetnek, és éppen azt a vizsgálatot hívja, amely nyilvánosan leleplezi a hanyag
elemzést. Alkalmazd a szigorúbb technikákat, a szabályozókártyákat, a
dokumentált mintaméreteket, a zavaróváltozó-ellenőrzést, állandó gyakorlatként
mindenre, amit kívülre közzétesznek, ne csak alkalmi legjobb erőfeszítésként.

## Példák

**Nagyvállalat.** Egy szoftvercég vezetői csapata a változtatási hibaarány 25%-os
javulását ünnepelte az új kódáttekintési szabályzat bevezetését követő hónapban,
és közvetlenül a szabályzatnak tulajdonította. Alaposabb vizsgálat kiderítette,
hogy az „előtte" hónap szokatlanul rossz volt, egyetlen csapat félresikerült
migrációja miatt, és a mögöttes mintaméret mindkét hónapban a cég egészére
harminc telepítés alatt volt. Egy tizenkét hónapnyi történetet használó
szabályozókártya megmutatta, hogy az új érték jócskán a normál ingadozáson
belül volt, nem valódi lépcsőváltás, és a szabályzat tényleges hatása, bár
valós, sokkal kisebb volt, mint amit a főcímszám sugallt.

**Közszféra.** Egy tömegközlekedési hivatal nagy éves javulást jelentett a
menetrendek pontosságában egy újonnan digitalizált ütemezési rendszernél,
egyetlen „előtte" negyedévet hasonlítva egyetlen „utána" negyedévhez. Egy
független felülvizsgálat kiderítette, hogy az „előtte" negyedév egybeesett egy
független építési lezárással, amely az egész hálózaton rontotta a teljesítményt,
és egy hosszabb alapérték megmutatta, hogy a pontosság már javult, mielőtt az új
rendszer elindult. A hivatal felülvizsgált jelentése teljes, többéves
szabályozókártyát használt, és szerényebb, de védhetőbb javulást tulajdonított
kifejezetten az új rendszernek.

## Üzleti érv: indítékok, ROI és TCO

A statisztikai jártasság megtérülése az elkerült félreirányítás: az a szervezet,
amely helyesen tulajdonít egy javulást, vagy helyesen ismeri fel a zajt zajként,
a következő beruházását ott költi, ahol az valóban segít, ahelyett hogy egy
fantomhatást kergetne. A fenti példa tipikus: az a cég, amely úgy hitte, hogy a
kódáttekintési szabályzata egyedül hozta a 25%-os javulást, alulfektethet más
valódi hozzájárulókba, vagy eltúlozhatja a szabályzat értékét úgy, hogy az a
jövőbeli döntéseket félrevezeti.

A statisztikai szigor teljes költsége többnyire a szokások eltolódása, nem új
eszköz: mediánt választani átlag helyett, mintaméretet ellenőrizni reagálás
előtt, hosszabb alapértéket ábrázolni a győzelem kihirdetése előtt. Ezek a
szokások keveset kóstálnak, és megelőzik a magabiztos, téves következtetésekre
alapozott döntések sokkal nagyobb, nehezebben észrevehető költségét.

## Antiminták és buktatók

- **Átlag jelentése ferde, időalapú adaton:** egyetlen félrevezető szám mögé
  rejti a tipikus esetet és a farkat.
- **Reagálás egy százalékra látható mintaméret nélkül:** néhány esemény zaját úgy
  kezeli, mintha stabil, érdemi trend lenne.
- **Egy beavatkozás érdemének tulajdonítása az átlaghoz való regresszió
  kizárása nélkül:** gyakori, könnyen elkövethető, nehezen észrevehető hiba.
- **Okság állítása korrelációból a zavaró változók mérlegelése nélkül:**
  túlbecsüli, mit támaszt alá az adat.
- **Egyetlen előtte-utána pillanatkép összehasonlítása hosszabb alapérték
  ábrázolása helyett:** nem tudja megkülönböztetni a valódi eltolódást a
  szokásos ingadozástól.
- **Nagyobb pontosság sugallása, mint amit az adatok támogatnak, a vezetőknek
  szóló jelentésben:** a zaj túlreagálására vagy egy valódi jel elvetésére hív.

## Érettségi modell

- **1. szint, Kezdeti:** A metrikákat nyers átlagokként és egyetlen
  előtte-utána pillanatképként jelentik, a mintaméret, a ferdeség és az
  alapérték-ingadozás figyelembevétele nélkül.
- **2. szint, Fejlődő:** Néhány elemző informálisan mediánt vagy percentiliseket
  alkalmaz, de nincs következetes szervezeti gyakorlat, és a zavaró változókat
  ritkán ellenőrzik.
- **3. szint, Szabványosított:** A medián és a percentilis az alapértelmezés a
  ferde, időalapú metrikáknál; a mintaméretet a százalékalapú metrikák mellett
  mutatják a szervezet egészében.
- **4. szint, Irányított:** A történeti alapértékű szabályozókártyák a
  szokásos gyakorlat minden valódi eltolódásra vonatkozó állításhoz; a zavaró
  változókat aktívan mérlegelik, mielőtt oksági állításokat tesznek a
  jelentésekben.
- **5. szint, Összehangolt:** A statisztikai szigor magába az eszközrendszerbe van
  építve, a dashboardok alapértelmezésként percentiliseket és szabályozósávokat
  jelenítenek meg, és a szervezet be tudja mutatni, hogy egy konkrét múltbeli
  döntést kijavítottak, mert egy statisztikailag naiv olvasatot elkaptak,
  mielőtt az alakította volna a stratégiát.

## Ötletek a vitához

1. A mostani dashboard-főcímeink közül melyik nézne ki másképp, ha az átlagot mediánra cserélnénk?
2. Változtattunk-e valaha döntést, mert egy százalék sokkal kisebb mintán alapult, mint feltételeztük?
3. Melyik közelmúltbeli „javítottuk ezt a metrikát" történetet kellene újra megvizsgálnunk az átlaghoz való regresszió szempontjából?
4. Hol lehet két metrikánk egy rejtett harmadik okon át korrelált ahelyett, hogy az egyik hajtaná a másikat?
5. A legfontosabb diagramjaink mutatják a normál ingadozási tartományt, vagy csak egyetlen trendvonalat?

## A legfontosabb tanulságok

- Ferde, időalapú mérnöki metrikáknál részesítsd előnyben a **mediánt és a
  percentiliseket** az átlagokkal szemben.
- Kezelj egy **kis mintából számolt százalékot** zajosként, és mondd ezt ki
  kifejezetten, ahelyett hogy stabil trendként reagálnál rá.
- Figyelj az **átlaghoz való regresszióra**, mielőtt egy beavatkozásnak
  tulajdonítanál egy szokatlanul rossz érték utáni javulást.
- A **korreláció nem okság**; keress aktívan zavaró változókat, mielőtt oksági
  állítást teszel.
- Használj **valódi történeti alapértékű szabályozókártyát**, ne egyetlen
  előtte-utána pillanatképet, hogy megkülönböztesd a valódi eltolódást a
  szokásos zajtól.

## Források és ajánlott olvasmányok

- *The Signal and the Noise*, Nate Silver (a valódi jel megkülönböztetése a
  zajtól tökéletlen adatokban).
- *How to Measure Anything*, Douglas W. Hubbard (statisztikai gondolkodás
  szervezeti méréshez).
- *Understanding Variation: The Key to Managing Chaos*, Donald J. Wheeler
  (szabályozókártyák és a közös okú és a különleges okú ingadozás
  megkülönböztetése).
- *Thinking, Fast and Slow*, Daniel Kahneman (kognitív torzítások, köztük az
  átlaghoz való regresszió és az oksági elbeszélés illúziója).
- *The Visual Display of Quantitative Information*, Edward R. Tufte (kvantitatív
  adatok őszinte, nagy integritású bemutatása).
