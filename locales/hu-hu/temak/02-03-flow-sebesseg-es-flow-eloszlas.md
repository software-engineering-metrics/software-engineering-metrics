# 2.3 Flow-sebesség és flow-eloszlás

## Áttekintés és indíték

A **flow-sebesség** az adott időszakban befejezett flow-elemek (2.2 téma) száma,
a Flow Framework [átbocsátás](https://en.wikipedia.org/wiki/Throughput)-mértéke.
A **flow-eloszlás** az egyes flow-elemtípusok, a funkciók, hibák, kockázat és
adósság aránya az ugyanabban az időszakban befejezett elemek között. A két
metrikát úgy tervezték, hogy együtt olvassák őket: a sebesség egyedül arra felel,
hogy „mennyit szállítottunk", az eloszlás egyedül arra, hogy „milyen munka volt",
de egyik kérdésnek sincs sok értelme a másik nélkül. Egy csapat növelheti a
sebességét, miközben az eloszlása csendben eltolódik a funkcióktól a hibák
újramunkája felé, ami gyorsulásnak látszik a sebességdiagramon, valójában a
csökkenő minőség tünete.

Ez a párosítás ugyanaz a fegyelem, amelyet az 1.2 téma a könyv minden
metrikacsaládjától kér: soha ne jelents sebességi számot a védőkorlát nélkül,
amely megmutatja, mibe került az a sebesség. A flow-sebesség az átbocsátási
metrika e rész legközvetlenebb általánosítása, szellemében közelebb áll a
telepítési gyakorisághoz (2.10 téma), mint a könyv bármely más egyetlen
számához, de elemtípus-tudatos olyan módon, ahogy a telepítési gyakoriság soha
nem volt. A telepítési gyakoriság megmondja, milyen gyakran jut el a kód az
éleshez; a flow-sebesség, az eloszlással párosítva, megmondja, milyen gyakran jut
el az érték az éleshez, és milyen fajta érték.

A sok párhuzamos értékáramot működtető nagy csapatoknál ez a párosítás olyan
mintát tár fel, amelyet egyetlen átbocsátási szám teljesen elrejt: egy értékáramot,
amelynek a sebessége egészségesnek látszik, miközben az eloszlása csendben szinte
tiszta funkciómunka felé sodródott, csendben kiéheztetve azt az adósság- és
kockázati kapacitást, amelyről a 2.2 téma figyelmeztetett, hogy tudatos védelmet
igényel. A termékvonalak között átbocsátást összehasonlító nagyvállalatoknak és a
felügyeleti szerveknek szállítási kibocsátást jelentő kormányzati szerveknek is
szükségük van erre a párosításra, hogy ne tévesszék össze a nyers kibocsátást a
valódi, fenntartható haladással.

## Alapelvek

- **Az eloszlás nélküli sebesség elrejti, mit szállítottak valójában.** Az
  emelkedő elemszám semmit nem mond arról, hogy az egészséges, kijátszott, vagy
  csendben a legkönnyebb rendelkezésre álló munka felé torzult-e.
- **A sebesség nélküli eloszlás elrejti a léptéket.** Az egészségesnek látszó
  százalékos megoszlás keveset jelent, ha azt sem tudjuk, mennyi összmunkát képvisel.
- **A két metrikát mindig együtt kell jelenteni.** Ez az 1.2 téma
  védőkorlát-párosítási elvének közvetlen alkalmazása kifejezetten a flow-adatokra.
- **A sebességet ugyanaz a helyettesítéskijátszás fenyegeti, mint bármely
  elemszám-metrikát.** A nehéz munka sok kicsi, könnyű elemre bontása felfújja a
  számot anélkül, hogy arányosan több értéket szállítana.
- **Az egészséges eloszlás kontextusfüggő, nem rögzített cél.** A 2.2 téma ezt
  mélyen tárgyalja; a sebességet és az eloszlást mindig a kontextus által
  implikált célhoz képest kell értelmezni.

## Ajánlások

### A flow-sebességet trendvonalként jelentsd, soha ne egyetlen időszak számaként

Egyetlen időszak elemszáma zajos és könnyen félreolvasható. Ábrázold a
flow-sebességet több egymást követő időszakra, és a trendet nézd, ne egyetlen
adatpontot, ugyanazt a fegyelmet követve, amelyet az 1.6 téma minden természetes
ingadozásra hajlamos idősoros metrikára javasol.

### Soha ne mutasd a flow-sebességet az eloszlása nélkül

Kezeld ezt kemény szabályként minden dashboardra vagy jelentésre, nem kellemes
többletként. Az egyedül mutatott sebességdiagram pontosan azt a félreolvasást
hívja, amellyel ez a téma kezdődött: az emelkedő átbocsátás valójában az
újramunka vagy a könnyű funkciómunka növekvő részesedése, amely kiszorítja az
adósság- és kockázati kapacitást. Mindkettőt tedd ugyanarra a nézetre, mindig.

### Súlyozd a sebességet mérettel vagy összetettséggel, ha az elemek mérete nagyon eltér

A nyers elemszám egyenértékűnek kezel egy egysoros konfigurációváltoztatást és egy
többhetes architekturális migrációt, ami ugyanazt a helyettesítéskijátszást hívja,
amelyet a könyv a telepítési gyakoriságnál már megnevezett (2.10 téma): a nehéz
munka sok kicsi elemre bontása felfújja a számot, anélkül hogy arányosan többet
szállítana. Ahol az elemek mérete nagyon eltér, súlyozd a sebességet durva méret-
vagy összetettségbecsléssel, vagy kövesd az átlagos elemméretet a nyers szám
mellett, hogy a csökkenő átlagméret az emelkedő szám mellett látható legyen, ne
rejtett.

### A flow-eloszlásban a sodródást figyeld, ne csak a jelenlegi pillanatképet

A flow-eloszlás leghasznosabb jele ritkán ennek az időszaknak a pontos
százaléka; hanem a változás iránya több időszakon át. Az egyenletes sodródás,
amikor a funkciók emelkednek, miközben az adósság és a kockázat csendben
zsugorodik, érdemes felvetni az érdekeltekkel jóval azelőtt, hogy olyan minőségi
vagy biztonsági problémává válna, amilyenről a 2.2 téma figyelmeztet, hogy a
funkciógyár minta alatt láthatatlanul halmozódik.

### A flow-sebességet értékáramok között csak valódi óvatossággal hasonlítsd össze

Két értékáram eltérő elemszemcsézettséggel, eltérő csapatmérettel vagy eltérő
termékszakasszal nem hasonlítható össze közvetlenül pusztán a nyers sebesség
alapján, ugyanaz a tisztességi probléma, amelyet a 2.10 téma a telepítési
gyakoriságra nevez meg csapatok között. Először egy értékáram saját trendjére
használd a sebességet, és csak azután próbálj értékáramok közötti összehasonlítást,
miután megerősítetted a valóban összehasonlítható elemdefiníciókat és
szemcsézettséget.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Csak nyers elemszám-sebesség | Egyszerű kiszámolni és elmagyarázni | Ki van téve a helyettesítéskijátszásnak; elrejti, milyen fajta értéket szállítottak |
| Eloszlással párosított sebesség | Együtt mutatja a léptéket és az értékkeveréket | Fegyelmezett flow-elem-besorolást igényel (2.2 téma), hogy értelmes legyen |
| Mérettel súlyozott sebesség | Ellenáll az elemméret-felaprózásból eredő helyettesítéskijátszásnak | Következetes, elfogadott méretezési módszert igényel a csapaton belül |
| Értékáramok közötti sebességösszehasonlítás | Hasznos portfóliószintű beruházási döntésekhez | Könnyen igazságtalan, ha nem erősítik meg a valóban összehasonlítható elemdefiníciókat |

A központi feszültség az **egyszerűség és a kijátszással szembeni ellenállás** között
áll fenn. A nyers elemszám a legkönnyebben kiszámolható és elmagyarázható szám, de a
legkönnyebben felfújható is a nehéz munka sok kis darabra bontásával. Úgy oldd fel a
feszültséget, hogy az elsődleges metrikát egyszerűen tartod, a nyers sebességet az
eloszlással párosítva, a méretsúlyozást pedig azokra az értékáramokra tartogatod,
ahol az elemek méretéről tudható, hogy annyira eltér, hogy az egyszerű szám aktívan
félrevezetővé vált.

## Kérdések a csapattal való megbeszéléshez

1. **Amikor flow-sebességet jelentünk, mindig mellette látszik a flow-eloszlás,
   vagy a sebesség néha egyedül áll?** Az eloszlás nélküli sebességszám a téma
   saját központi elve szerint hiányos kép. Ellenőrizd a tényleges dashboardjaidat
   és jelentéseidet erre a hiányra.

2. **Változott-e az átlagos elemméretünk az emelkedő sebesség mellett, és tudnánk-e
   róla, ha így lett volna?** A csökkenő átlagméret az emelkedő szám mellett a
   flow-elemekre alkalmazott helyettesítéskijátszás sajátos aláírása. Húzd elő a
   tényleges adatokat, ahelyett hogy feltételeznéd, hogy a minta nincs jelen.

3. **Összehasonlítottuk-e valaha a sebességünket egy másik csapatéval anélkül,
   hogy megerősítettük volna, hogy az elemdefinícióink és a szemcsézettség
   valóban egyeznek?** Az itteni igazságtalan összehasonlítás ráviheti a
   csapatot a saját számai kijátszására, csak hogy összehasonlíthatónak tűnjön,
   ugyanazt a kockázatot visszhangozva, amelyet a könyv a telepítési gyakoriságnál
   már megnevezett.

4. **Egy irányba sodródott-e a flow-eloszlásunk az elmúlt néhány időszakban, és
   döntött-e erről valaki tudatosan?** A lassú sodródás könnyen elkerüli a
   figyelmet időszakról időszakra. Ábrázolj több időszakot együtt, és őszintén
   keress trendet, mielőtt feltételeznéd, hogy a jelenlegi megoszlás stabil.

5. **Ha valaki fel akarná fújni a flow-sebességünket több valódi munka nélkül,
   mi lenne a legegyszerűbb módja, és elkapná-e a jelenlegi jelentésünk?** Menj
   végig a nehéz elemek könnyűvé bontásának konkrét mechanikáján, és beszéljétek
   meg, hogy a dashboardotok valóban felfedné-e ezt a mintát.

6. **A sebesség- és eloszlásszámaink valaha együtt jutnak el az üzleti
   érdekeltekhez, vagy csak a sebesség főcíme utazik felfelé?** A párosítási elv
   csak akkor véd a félreolvasás ellen, ha mindkét felet valóban látják azok, akik
   az adatokból döntéseket hoznak.

## Ágazati szemszög

**Startup.** A flow-sebességet ezen a léptéken általában könnyű informálisan
követni, mert az egész csapatnak már van durva érzéke az átbocsátásról. A hasznos
fegyelem az, hogy informálisan is párosítsuk az eloszlással, hogy egy alapító ne
tévessze össze az emelkedő jegylezárási számot a valódi funkciófejlődéssel, amikor
a számot valójában a korai szakasz hibajavítása uralja.

**Kisvállalkozás.** Kövesd együtt a sebességet és az eloszlást abból az egyszerű
eszközből, amelyet a flow-elem-besoroláshoz (2.2 téma) már használsz; dedikált
elemzőplatform ezen a léptéken nem kell. Az a szokás, hogy mindig egymás mellett
nézzük őket, sokkal fontosabb, mint bármilyen eszközbeli kifinomultság.

**Nagyvállalat.** Az értékáramok közötti sebességösszehasonlítás ezen a léptéken
csábító a portfóliószintű priorizáláshoz, és itt a legnagyobb a tisztességi
kockázat is, mert a különböző termékvonalaknak jogosan nagyon eltérő az
elemszemcsézettségük. Fektess be az összehasonlítható definíciók megerősítésébe,
mielőtt sebességösszehasonlításokkal indokolnál csapatok közötti beruházási
döntéseket.

**Közszféra.** Az eloszlással párosított flow-sebesség sokkal erősebb bizonyítási
alapot ad egy közszférabeli technológiai vezetőnek a szállítási kibocsátás
felügyeleti szerveknek való jelentéséhez, mint a nyers átbocsátás, mert nem csak
azt tudja megmutatni, mennyi készült el, hanem azt is, hogy a keverék tudatos,
védhető elosztást tükröz az új funkcionalitás, a hibajavítás és a
kockázatkezelés között.

## Példák

**Nagyvállalat.** Egy szoftverszállító platformcsapata három egymást követő
negyedéven át folyamatosan emelkedő flow-sebességet jelentett, trendet, amelyet a
vezetés a szállítás gyorsulásaként ünnepelt. A flow-eloszlás alaposabb vizsgálata,
amelyet csak egy ismétlődő hibákról szóló ügyfél-eszkaláció után kértek,
kiderítette, hogy az emelkedő sebességen belül a „funkciók" részesedése ugyanezen
időszak alatt valójában 70%-ról 45%-ra esett, a hibajavító elemek töltötték ki a
hiányt. A csapat több elemet szállított, de ezek egyre kisebb hányada volt új
érték; a többi újramunka, amelyet a sebességdiagram egyedül teljesen elfedett.

**Közszféra.** Egy nemzeti statisztikai hivatal adatplatform-csapata a flow-sebességet
követte elsődleges szállítási metrikájaként a felügyeleti testületének szóló
éves jelentéshez. Amikor egy testületi tag megkérdezte, hogy a sebesség mekkora
hányada képviselt új, nyilvános képességet, a csapat rájött, hogy soha nem bontotta
a számot flow-elemtípusokra, és nem tudott közvetlenül válaszolni. A hivatal ezután
bevezette a párosított sebesség-és-eloszlás jelentést, amely feltárta, hogy a
kockázati és megfelelőségi munka, egy új adatvédelmi rendelet hatására, jogosan a
kapacitás növekvő részét emésztette fel, védhető elosztás, amelyet a testület
készségesen elfogadott, amint kifejezetten megmutatták, ahelyett hogy egy
megmagyarázatlan sebességesés mögött implicit maradt volna.

## Üzleti érv: indítékok, ROI és TCO

A sebesség eloszlással való párosításának megtérülése a szállítási kibocsátás
őszintébb, védhetőbb elszámolása, mint amelyet bármelyik szám egyedül nyújt. A fenti
szoftverszállítói példa, amely felfedezte, hogy az emelkedő sebesség valójában a
csökkenő funkciókibocsátást tükrözte, éppen az a félreolvasás, amelyet ez a
párosítás megelőz, és ennek a mintának a korai elkapása sokkal olcsóbb, mint csak
azután felfedezni, hogy egy ügyfelek által látott minőségi probléma kikényszeríti
a kérdést.

A teljes birtoklási költség minimális, ha a flow-elem-besorolás (2.2 téma) már a
helyén van: az eloszlás a már besorolt elemek egyszerű összesítése, és a két metrika
együttes mutatásának fegyelme jelentési konvenció, nem technikai beruházás. Ennek a
témának az ajánlásai költségének nagy részét már kifizették, amikor a szervezet
egyáltalán bevezette az őszinte flow-elem-besorolást.

## Antiminták és buktatók

- **A flow-sebesség jelentése eloszlás nélkül:** a téma lényegi kijátszási
  vektora. A szállítási nyomás alatt álló csapat növelheti az elemszámot úgy, hogy a
  kicsi, könnyű funkciómunkát részesíti előnyben, és kerüli a nehezebb adósság-,
  kockázati vagy hibaelemeket, vagy a nagy elemeket sok kicsire bontja, és az
  egyedül mutatott sebességdiagram gyorsulásnak fog látszani a szállított dolgok
  tényleges eltolódása helyett. A védőkorlát ugyanaz a párosítási fegyelem, amelyet
  az 1.2 téma a könyv egészében kér: soha ne mutass sebességet eloszlás nélkül, és
  időnként ellenőrizd az átlagos elemméretet a szám mellett, hogy kifejezetten a
  felbontást elkapd.
- **A sebesség összehasonlítása különböző elemszemcsézettségű értékáramok között:**
  igazságtalan, félrevezető összehasonlítást ad.
- **Egyetlen időszak eloszlásának stabilként kezelése:** kihagyja a lassú, érdemi
  sodródást, amelyet csak a trendnézet fed fel.
- **Hagyni, hogy csak a sebesség főcíme jusson el az üzleti érdekeltekhez:**
  elveszíti a párosítási elv teljes védőértékét.
- **Az átlagos elemméret figyelmen kívül hagyása az emelkedő sebesség ünneplése
  közben:** kihagyja a helyettesítéskijátszás sajátos aláírását.
- **Sebességcél kitűzése az eloszlásra való hivatkozás nélkül:** éppen azt a
  kijátszást hívja, amelyről ez a téma név szerint figyelmeztet.

## Érettségi modell

- **1. szint, Kezdeti:** A flow-sebességet, ha követik, egyedül jelentik, eloszlási
  adatok nélkül, és senki nem ellenőrizte a helyettesítéskijátszást.
- **2. szint, Fejlődő:** Néhány csapat követi az eloszlást, de a jelentésben nem
  párosítják következetesen a sebességgel, és nem vizsgálják trendként.
- **3. szint, Szabványosított:** A sebességet és az eloszlást mindig együtt
  jelentik, trendként nézik, és az átlagos elemméretet figyelik a
  helyettesítéskijátszás elkapására.
- **4. szint, Irányított:** Az eloszlás sodródását proaktívan vizsgálják, mielőtt
  minőségi vagy biztonsági problémává válna, és az értékáramok közötti
  sebességösszehasonlításokat csak a valóban összehasonlítható elemdefiníciók
  megerősítése után végzik.
- **5. szint, Összehangolt:** A sebesség és az eloszlás közvetlenül megalapozza a
  portfóliószintű beruházási döntéseket, és a szervezet konkrét esetekre tud
  mutatni, ahol az eloszlás sodródását elkapták és kijavították, mielőtt látható
  hibát okozott volna.

## Ötletek a vitához

1. A flow-sebesség jelentésünk mindig tartalmazza az eloszlást, vagy mutattuk-e valaha az egyiket a másik nélkül?
2. Eltolódott-e az átlagos flow-elemméretünk a sebesség közelmúltbeli változásával együtt?
3. Tudnánk-e róla, ha a flow-eloszlásunk egyenletesen sodródott az elmúlt néhány negyedévben?
4. Mi kellene ahhoz, hogy valaki felfújja a sebességünket több valódi érték szállítása nélkül, és észrevennénk-e?

## A legfontosabb tanulságok

- A **flow-sebesség** az átbocsátást méri; a **flow-eloszlás** azt, hogy az
  átbocsátás milyen fajta munkát képvisel. Jelentsd őket együtt, mindig.
- Ez a párosítás az 1.2 téma **védőkorlát-elvének** közvetlen alkalmazása: soha ne
  mutass sebességi számot annak kontextusa nélkül, mibe került.
- A téma központi kijátszási vektora a **sebesség egyedüli jelentése**, amely
  elrejtheti a könnyű funkciómunka felé tolódást vagy az elemfelbontást, amely
  arányos érték nélkül fújja fel a számot.
- Az **eloszlás sodródása** a legjobban trendként látszik több időszakon át, nem
  egyetlen időszak pillanatképében.
- Az **értékáramok közötti sebességösszehasonlításokhoz** valóban összehasonlítható
  elemdefiníciók kellenek a tisztességhez; enélkül többet tévesztenek meg, mint
  amennyit tájékoztatnak.

## Források és ajánlott olvasmányok

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
