# 2.1 A Flow Framework

## Áttekintés és indíték

A **Flow Framework** egy irányítási és szerkezeti modell, amelyet Mik Kersten
alkotott meg, és a 2018-as *Project to Product* című könyvében tett közzé. Olyan
kérdésre válaszol, amelyre a tisztán csővezeték-metrikák nem képesek: nem csak
arra, milyen gyorsan és milyen biztonságosan jut el a kód a commit-tól az élesig,
hanem arra is, milyen fajta érték áramlik egyáltalán a csővezetéken, és hogy ez a
keverék tükrözi-e az üzlet tényleges stratégiáját. A keretrendszer a szoftverszállítást
**[értékáramként](https://en.wikipedia.org/wiki/Value_stream)** kezeli, vagyis
mint tevékenységek végpontól végpontig tartó sorozatát, amely egy ötletből olyan
értéket csinál, amelyet az ügyfél megkap, és közvetlenül a lean gyártás
értékáram-térképezési hagyományából kölcsönöz.

A könyv a Flow Frameworköt használja a 2. rész szervező szerkezeteként. A 2.2 téma
bemutatja a négy flow-elemet, a 2.3 és 2.4 téma az öt flow-metrikát, a 2.8 téma
ezeket a metrikákat visszavezeti az eredetükhöz, a klasszikus Lean
értékáram-térképezéshez, a 2.10 téma pedig a DORA-metrikákat tárgyalja szűkebb,
csővezetékre fókuszáló referencia-keretrendszerként, amellyel a rész már nem
indít. Ez tudatos választás, nem a DORA kutatásának elvetése. A DORA valódi
statisztikai szigorral méri a rendszer átbocsátását és stabilitását, de hallgat
arról a kérdésről, amely egy üzleti vezetőt valójában a leginkább érdekel: abból,
amit a mérnöki szervezet ebben a negyedévben leszállított, mennyi volt új
ügyfélérték, és mennyit emésztett fel csendben a hibák javítása, a kockázatkezelés
vagy az adósság törlesztése. A Flow Framework éppen azért létezik, hogy ezt a
keveréket láthatóvá tegye.

A nagy csapatoknál ez a megkülönböztetés nem elméleti. Egy tucatnyi értékáramot
működtető platformszervezetnek kitűnő DORA-számai lehetnek, gyors, gyakori,
stabil telepítések, miközben a tényleges termékkibocsátása csendben szinte
tiszta karbantartási munka felé sodródott, és ez a minta láthatatlan egy olyan
dashboard számára, amely csak a csővezeték mechanikáját méri. A nagyvállalatoknak
és a közszféra szervezeteinek, amelyeknek a mérnöki beruházást olyan érdekeltek
előtt kell indokolniuk, akik üzleti, nem csővezetékes fogalmakban gondolkodnak,
szükségük van olyan szókincsre, amely a szállítási tevékenységet a stratégiai
szándékhoz köti. Ezt nyújtja ez a keretrendszer.

## Alapelvek

- **A mérés egysége az értékáram, nem egy csapat vagy egy csővezeték.** Az
  ügyfél vagy üzleti igénytől a leszállított eredményig terjed, átlépve minden
  csapathatárt, amelyet a munka ténylegesen átlép.
- **A flow-elemek a „mit" teszik láthatóvá, nem csak a „milyen gyorsan"-t.** A
  2.2 téma négy kategóriája, a funkciók, a hibák, a kockázatok és az adósság,
  egy implicit priorizálási döntést kifejezett, mérhető döntéssé alakít.
- **A kapacitáselosztás a flow-elemek között zéró összegű.** Az egyik elemtípusra
  fordított több kapacitás kevesebb kapacitást jelent a többinek; a
  keretrendszer láthatóvá teszi ezt a kompromisszumot, ahelyett hogy implicit
  hagyná.
- **Az öt flow-metrika üzleti kérdésekre válaszol, nem csak mérnökiekre.** Úgy
  tervezték őket, hogy nem műszaki érdekeltnek is be lehessen mutatni őket,
  nem a mérnöki csapaton belül tartva.
- **Az értékáram-menedzsmentnek folyamatosnak kell lennie, nem egyszeri
  térképezési gyakorlatnak.** A statikus értékáram-térképek elavulnak; a
  keretrendszert úgy építették, hogy a csapatok által már használt eszközökből
  lehessen műszerezni.

## Ajánlások

### Térképezd fel az értékáramodat, mielőtt bármit műszerezel

Mielőtt bármely flow-metrikát bevezetnél, járd végig azt az utat, amelyet egy
munkadarab az üzleti igény azonosításától addig megtesz, amíg az ügyfél megkapja
az értéket, megnevezve minden szakaszt és minden csapatok közötti átadást. Ez a
klasszikus [értékáram-térképezési](https://en.wikipedia.org/wiki/Value_stream_mapping)
gyakorlat, amelyet a lean gyártásból adaptáltak, és ennek kihagyása a leggyakoribb
oka annak, hogy egy Flow Framework bevezetés olyan számokat hoz, amelyekben senki
nem bízik: a meg nem vizsgált, informálisan értett folyamathoz mért metrikák
ritkán egyeznek azzal, ami valójában történik.

### Kösd a flow-metrikákat azokhoz az eszközökhöz, amelyeket a csapataid már használnak

A Flow Framework folyamatos, automatizált értékáram-menedzsmentre készült, nem
időszakos kézi térképezési gyakorlatra. Integráld a flow-elemek követését
közvetlenül azokba az eszközökbe, amelyeken a munka már áthalad, a Jirába, az
Azure DevOpsba, a GitHubba, ahelyett hogy párhuzamos követőrendszert építenél,
amelyet a csapatoknak kézzel kell frissíteniük. A flow-elem állapotának
magától kell frissülnie, ahogy a mögöttes jegy vagy pull request halad, ugyanazt
a műszerezés-az-önbevallás-előtt fegyelmet követve, amelyet az 1.5 téma a könyv
minden metrikájára ajánl.

### A flow-eloszlást közvetlenül mutasd be az üzleti érdekelteknek, ne csak a mérnöki vezetésnek

Ennek a keretrendszernek a legnagyobb elszalasztott lehetősége, hogy belső mérnöki
eszközként kezelik. A flow-eloszlás, a funkciókra szemben a hibákra, kockázatra
és adósságra fordított munka aránya (2.3 téma), kifejezetten arra való, hogy
beszélgetést folytass vele a termék- és üzleti vezetéssel, mert egy implicit
priorizálási döntést, hogy mennyi kapacitás megy új értékre szemben a
működés fenntartásával, kifejezetté és megvitathatóvá tesz, feltételezett helyett.

### Kezeld a négy flow-elemet valódi taxonómiaként, ne formalitásként

Követeld meg, hogy minden munkadarabot pontosan a négy flow-elemtípus egyikébe
soroljanak be a felvételkor, ne utólag. Az utólag vagy lazán alkalmazott
besorolás, mert „alapvetően funkció", az egész taxonómia értékét aláássa, hiszen
az egész lényege a kapacitás tényleges útjának őszinte, következetes nyilvántartása.

### Akkor vizsgáld felül az értékáram-térképedet, ha a szervezet változik, nem rögzített ütemben

Az értékáram-térkép abban a pillanatban elavul, amikor a csapathatárok, az
eszközök vagy maga a termék érdemben megváltozik, nem valamilyen önkényes éves
ritmusban. Egy átszervezést, egy nagy eszközmigrációt vagy egy jelentős
termékfordulatot kezelj az értékáram újrajárásának kiváltójaként, mert az elavult
térképhez mért flow-metrika csendben rosszat mér.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Csak csővezeték-metrikák (DORA, 2.10 téma) | Egyszerű, jól validált, olcsón műszerezhető a meglévő CI/CD adatokból | Hallgat arról, milyen fajta értéket szállítanak |
| Teljes Flow Framework bevezetés | Összeköti a szállítást az üzleti stratégiával; láthatóvá és megvitathatóvá teszi az értékkeveréket | Őszinte értékáram-térképet és következetes flow-elem-besorolási fegyelmet igényel |
| Statikus, egyszeri értékáram-térképezés | Olcsó, gyorsan lefuttatható műhelygyakorlatként | Gyorsan elavul; pillanatképet ad, nem élő metrikát |
| Folyamatos, eszközökbe integrált értékáram-menedzsment | Élő, mindig friss adat; több értékáramon át skálázódik | Valódi eszközintegrációs munkát igényel előre |

A központi feszültség az **üzleti olvashatóság és a műszerezési erőfeszítés** között
áll fenn. A csővezeték-metrikák olcsók, mert a csővezeték már előállítja az
adatot; az értékáram-metrikákhoz a teljes folyamat őszinte térképe és fegyelmezett,
felvételkori besorolási szokás kell, amelyet a csővezeték-metrikák soha nem
követeltek. Úgy oldd fel a feszültséget, hogy egyetlen értékárammal indulsz, nem
az egész szervezettel egyszerre, rendesen feltérképezed, és csak azután
integrálod a flow-elemek követését a meglévő eszközökbe, ahelyett hogy minden
csapatnál egyszerre próbálnál nagy durranású bevezetést.

## Kérdések a csapattal való megbeszéléshez

1. **Le tudnánk most rajzolni pontos értékáram-térképet a legfontosabb
   termékünkhöz, vagy több átadásnál találgatnánk?** A legtöbb szervezet soha nem
   járta végig valóban ezt az utat elejétől a végéig. Próbáld ki őszintén a
   gyakorlatot, és jegyezd fel minden helyet, ahol a csoport nem ért egyet abban,
   mi történik valójában, mert maga az egyet nem értés diagnosztikus.

2. **Ha mindent, amit a csapatunk a múlt negyedévben leszállított, funkciókba,
   hibákba, kockázatba és adósságba soroltuk volna, meglepné az eredmény a
   termékvezetésünket?** A legtöbb csapat soha nem tette kifejezetté ezt a
   felosztást, és a válasz gyakran olyan karbantartási terhet vagy adósságproblémát
   tár fel, amely korábban láthatatlan volt az egyszerű „leszállított story
   pontok" számban.

3. **Van valódi, eszközökbe integrált módunk a flow-elemek követésére, vagy ehhez
   valakinek kézzel kellene besorolnia és újrasorolnia a munkát?** A kézi rendszer
   valós munkaterhelés alatt gyorsan romlik; az eszközökbe integrált nem. Értékeld
   őszintén, melyiket vagy valójában kész fenntartani.

4. **Mikor változott utoljára az értékáram-térképünk, és frissítettük-e ennek
   megfelelően a metrikáinkat?** Az átszervezések és az eszközmigrációk csendben
   érvénytelenítik az értékáram-térképet, és kevés szervezet jut eszébe, hogy
   ilyenkor újra megnézze.

5. **A flow-metrikáinkat valaha közvetlenül bemutatják üzleti vagy termék-érdekelteknek,
   vagy a mérnökségen belül maradnak?** A keretrendszer legnagyobb előnye a csak
   csővezeték-metrikákkal szemben éppen ez a beszélgetés, és kihagyása a
   keretrendszer értékének nagy részét elveszíti.

6. **Mi kellene ahhoz, hogy valaki kijátssza a flow-elem-besorolásunkat anélkül,
   hogy bármi tisztességtelent tenne papíron?** Gondold végig, hogyan nevezhetne
   át csendben egy szállítási nyomás alatt álló csapat adósság- vagy
   kockázati munkát funkciónak, hogy termelékenyebbnek látsszon, és beszéljétek
   meg, észrevennétek-e ma.

## Ágazati szemszög

**Startup.** A teljes értékáram-térkép általában túlzás egy ötfős csapatnál, ahol
mindenki fejből tudja az egész folyamatot. A hasznos szokás ezen a léptéken
egyszerűen az, hogy a tervezési beszélgetésekben hangosan kimondjuk a négy
flow-elemtípust, hogy az adósság- és kockázati munka ne tűnjön el csendben a
szem elől, amint egy funkciós határidő közeledik.

**Kisvállalkozás.** Vezesd be a flow-elem-besorolást abba az egyszerű követőeszközbe,
amelyet már használsz, egy címkézett oszlopba vagy egyedi mezőbe, nem dedikált
értékáram-menedzsment termékbe. A következetes besorolás fegyelme sokkal
fontosabb, mint a mögötte álló eszköz kifinomultsága.

**Nagyvállalat.** Itt éri meg a keretrendszer az árát, mert a több termékvonalon
tucatnyi értékáramot működtető nagy szervezetnek nincs más megbízható módja arra,
hogy egy helyen lássa, a mérnöki kapacitást hogyan osztják el a funkciók, hibák,
kockázat és adósság között. Fektess be az eszközintegrációba; a kézi alternatíva
nem éli túl a valódi léptékkel való találkozást.

**Közszféra.** A flow-eloszlás védhető, üzletileg olvasható választ ad egy
közszférabeli mérnöki szervezetnek arra, hogy „miért nem készül több új
funkcionalitás", amikor az őszinte válasz az, hogy a kapacitás növekvő része a
biztonsági helyreállításra vagy az örökölt adósságra megy. Ennek a
kompromisszumnak a láthatóvá és kifejezetté tétele, ahelyett hogy csendben
elnyelnénk a nyomást, gyakran a legtöbbet ér, amit ez a keretrendszer egy
kormányzati technológiai vezetőnek nyújthat.

## Példák

**Nagyvállalat.** Egy nagy biztosító kárkezelési platformszervezete azt hitte,
hogy elsősorban új funkciókat szállít, a sprintsebesség-jelentései alapján. Egy
első értékáram-térképezési és flow-elem-besorolási gyakorlat feltárta, hogy az
adósság- és kockázati munka, nagy része dokumentálatlan technikai adósság egy
évtizedes magrendszerből, valójában a teljes mérnöki kapacitás közel felét
felemésztette, ezt a tényt egyetlen korábbi jelentés sem hozta felszínre, mert
ezt a munkát mindig általános „mérnöki feladatokba" olvasztották. Ennek a
felosztásnak a végrehajtó bizottság elé vitele a platform történetében először
biztosított dedikált adósságcsökkentési költségvetést, ahelyett hogy az adósságmunka
csendben versenyzett volna minden funkciókéréssel.

**Közszféra.** Egy nemzeti adóhatóság digitális szolgáltatási részlege
értékáram-térképezéssel diagnosztizálta, miért volt egy kiemelt, állampolgároknak
szóló funkció több mint egy éve „folyamatban", a folyamatos sprint-teljesítés
ellenére. A térkép feltárta, hogy az értékáram valójában öt külön csapatot ölelt
át három olyan átadással, amelyet a szervezeti ábra nem tükrözött, és a
flow-elem-besorolás megmutatta, hogy a funkció tényleges mérnöki ideje a teljes
flow-idejének kis töredéke volt, a többit a csapatok közötti átadási késések
emésztették fel, amelyeket egyetlen csapat saját metrikái sem láthattak. A
részleg az adott termékvonalra a szervezeti ábra helyett az értékáram köré
szerveződött át, és két negyedéven belül jelentősen csökkentette a flow-időt.

## Üzleti érv: indítékok, ROI és TCO

A Flow Framework bevezetésének megtérülése védhető, üzletileg olvasható válasz egy
olyan kérdésre, amelyre a csővezeték-metrikák nem tudnak felelni: a mérnöki
kapacitást úgy osztják-e el, ahogy a vezetés hiszi. A fenti biztosítói példa,
amely a kapacitás közel felét tárta fel korábban láthatatlan adósságmunkára,
gyakori minta, amint egy szervezet őszintén osztályozza a munkáját, és ez a
láthatóság rendszeresen olyan beruházást nyit meg, amelyet egy homályos „több
időre van szükségünk a technikai adósságra" kérés soha nem tudna.

A teljes birtoklási költség két helyen koncentrálódik: a kezdeti értékáram-térképezési
gyakorlaton, amely az őszinte elvégzéséhez valódi facilitálási időt igényel, és a
flow-elem-adatok kézi gondozás nélküli frissen tartásához szükséges eszközintegráción.
Mindkét költség egyszeri vagy kis karbantartású, ha jól csinálják, ami a
keretrendszert lényegesen olcsóbbá teszi fenntartani, mint bevezetni.

## Antiminták és buktatók

- **Az értékáram-térképezés egyszeri műhelyként kezelése, soha nem vizsgálják
  felül:** a térkép abban a pillanatban elavul, amikor a szervezet változik, és az
  elavult térképhez mért metrika rosszat mér.
- **Párhuzamos, kézzel karbantartott flow-elem-követőrendszer építése:** valós
  munkaterhelés alatt gyorsan romlik; inkább a meglévő eszközökbe integrálj.
- **A flow-elemek utólagos, nem felvételkori besorolása:** a téma lényegi
  kijátszási vektora. Szállítási nyomás alatt egy csapat utólag csendben
  funkciónak nevezheti át az adósság- vagy kockázati munkát, hogy produktívabbnak
  tűnjön azoknak az érdekelteknek, akik csak a flow-eloszlás diagramot látják, anélkül,
  hogy bárki valaha kifejezett, látható döntést hozna erről. A védőkorlát az, hogy a
  besorolást a felvételkor követeljük meg, az eredmény ismerete előtt, és
  időnként egy mintát auditálunk a besorolt elemekből ahhoz képest, amit a
  mögöttes változtatás ténylegesen tett, ugyanazt az audit-fegyelmet követve,
  amelyet az 1.2 téma a könyv minden metrikájától kér.
- **A flow-metrikák csak a mérnökségen belül tartása:** elveszíti a keretrendszer
  fő előnyét, az üzleti érdekeltekkel közös szókincset.
- **A szervezeti ábra térképezése a tényleges értékáram helyett:** elrejti a
  csapatok közötti átadásokat, amelyek gyakran a késedelem legnagyobb forrásai.
- **A keretrendszer szervezetszintű bevezetése, mielőtt egyetlen értékáramon
  validálták volna:** nagy beruházás kockázata olyan metrikákba, amelyekben senki
  nem bízik, mert a mögöttes térképről soha nem erősítették meg a pontosságát.

## Érettségi modell

- **1. szint, Kezdeti:** Nincs értékáram-térkép; a munkát általános jegyekként
  követik flow-elem-besorolás nélkül.
- **2. szint, Fejlődő:** Egy értékáramot feltérképeztek, és a flow-elemeket
  informálisan osztályozzák, de a követés kézi és következetlenül alkalmazott.
- **3. szint, Szabványosított:** A flow-elem-besorolás integrálva van a meglévő
  eszközökbe, és a jelentős értékáramokon következetesen alkalmazzák felvételkor.
- **4. szint, Irányított:** A flow-eloszlást rendszeresen áttekintik az üzleti
  érdekeltekkel, és az értékáram-térképeket aktívan naprakészen tartják, ahogy a
  szervezet változik.
- **5. szint, Összehangolt:** A szervezet tudatosan osztja el a mérnöki beruházást
  az értékáramok között flow-adatok alapján, és konkrét stratégiai döntésekre
  tud mutatni, egy adósságcsökkentési költségvetésre, egy csapat átszervezésére,
  amelyeket azért hoztak, mert a keretrendszer láthatóvá tett egy korábban
  láthatatlan kompromisszumot.

## Ötletek a vitához

1. Le tudnánk ma rajzolni pontos értékáram-térképet a zászlóshajó termékünkhöz, találgatás nélkül?
2. Az előző negyedév kapacitásának hány százalékáról derítene ki egy őszinte flow-elem-besorolás, hogy adósságra és kockázatra ment, szemben a funkciókkal?
3. A flow-metrikáink eljutnak-e jelenleg az üzleti érdekeltekhez, vagy a mérnökségen belül maradnak?
4. Mi a legnagyobb csapatok közötti átadás az értékáramunkban, amelyet a szervezeti ábránk nem tükröz?

## A legfontosabb tanulságok

- A **Flow Framework**, Mik Kersten *Project to Product* című könyvéből, azt méri,
  milyen fajta érték áramlik a szállítási csővezetéken, nem csak azt, milyen
  gyorsan fut maga a csővezeték.
- A keretrendszer mérési egysége az **értékáram**, nem egy csapat vagy egy
  csővezeték, és az őszinte feltérképezés megelőzi a műszerezést.
- A **flow-elemek felvételkori, nem utólagos besorolása** a védőkorlát a téma
  központi kijátszási vektora ellen: az adósság- vagy kockázati munka csendes
  átcímkézése funkcióvá, hogy produktívabbnak tűnjön.
- **Kösd a flow-metrikákat a meglévő eszközökhöz**, a Jirához, az Azure DevOpshoz,
  a GitHubhoz, ne párhuzamos kézi követőrendszerhez, amely nem éli túl a valódi
  munkaterhelést.
- Mutasd be a flow-adatokat **közvetlenül az üzleti érdekelteknek**; ez a
  beszélgetés, nem egy belső mérnöki dashboard a keretrendszer fő előnye a csak
  csővezeték-metrikákkal szemben.

## Források és ajánlott olvasmányok

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
