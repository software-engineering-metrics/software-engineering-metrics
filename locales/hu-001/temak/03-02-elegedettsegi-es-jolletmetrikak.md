# 3.2 Elégedettségi és jóllétmetrikák

## Áttekintés és indíték

Az **elégedettség és jóllét**, a SPACE (3.1 téma) S betűje, az a dimenzió,
amelyet semmilyen rendszertelemetria nem láthat közvetlenül. Hogy egy mérnök
értelmesnek érzi-e a munkáját, hogy támogatottnak érzi-e magát a csapatában,
hogy a kiégés felé tart-e, ebből semmi sem hagy nyomot egy verziókezelő
naplóban vagy egy CI-csővezetékben. Meg kell kérdezni. Ez a téma a jó
kérdezésről szól: olyan mérés tervezéséről, amely megbízható jelet ad egy
valóban szubjektív, valóban fontos állapotról, nem pedig olyan számot, amely
pontosnak látszik, miközben szinte semmi valósat nem mér.

Ez a dimenzió azért számít, mert előremutató mutatója azoknak a költségeknek,
amelyek máshol, sokkal később és sokkal drágábban jelentkeznek. A csökkenő
elégedettség hamarabb jelzi előre a fluktuációt, mint egy kilépő interjú. A
növekvő kiégési kockázat hamarabb jelzi a minőség összeomlását, mint a
hibaarány. Az a szervezet, amely csak szállítási és aktivitásmetrikákat figyel,
egy jólléti problémáról csak akkor értesül, amikor az már távozássá,
incidenssé vagy a kibocsátás csendes, tartós hanyatlásává vált, amelynek
diagnosztizálása hónapokig tart. Az elégedettség és a jóllét közvetlen mérése
az az átfutási idő, amelyet a szervezet vásárol magának, hogy cselekedhessen,
mielőtt ez megtörténne.

Nagy csapatoknál ez a dimenzió egyben az is, ahol az 1.1 téma diagnosztikus és
értékelő megkülönböztetése a legélesebben számít. Az elégedettségi adat, ha a
csapat körülményeinek megértésére és javítására használjuk, értékes és
kis kockázatú. Ugyanez az adat, ha csapatok vagy, ami rosszabb, egyének
egymáshoz rangsorolására használjuk, szinte azonnal megrontja a felmérési
eszközt, mert az emberek abban a pillanatban abbahagyják az őszinte válaszadást,
amint gyanítják, hogy a válasz ellenük vagy a csapatuk ellen fog fordulni. A
formális teljesítményértékelési ciklusokkal rendelkező nagyvállalatok és
közszféra szervezetek különösen hajlamosak erre a sodródásra, és kifejezetten
védekezniük kell ellene.

## Alapelvek

- **Az elégedettség és a jóllét nem figyelhető meg rendszertelemetriából.**
  Ezt a dimenziót meg kell kérdezni, tudatosan és jól.
- **Az anonimitás nem opcionális.** Bármilyen észlelt kapcsolat egy őszinte
  válasz és egy személyes következmény között tönkreteszi a jelet.
- **Ez a dimenzió előremutató, nem követő mutató.** A fluktuációt és a
  minőségi problémákat azelőtt jelzi előre, hogy máshol megjelennének.
- **A kiégés konkrét, felismerhető minta, nem csupán általános boldogtalanság.**
  Kifejezetten mérd, ne hagyatkozz egyedül egy homályos elégedettségi pontszámra.
- **A trend többet számít bármely egyetlen leolvasásnál.** Az egyetlen
  elégedettségi pontszám pillanatkép; az egymást követő felmérések trendje a
  valódi jel.

## Ajánlások

### Validált felmérési eszközöket használj, ne találj ki sajátot

A jóllétnek és a kiégésnek megalapozott, validált mérőeszközei vannak, leginkább
a [Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory),
amely a kiégést három ismert dimenzióban méri: érzelmi kimerültség,
deperszonalizáció vagy cinizmus, és a személyes teljesítmény csökkent érzete.
Ha egy megalapozott, validált eszközből kölcsönzöl, akár rövid, adaptált
változatot is, megbízhatóbb adatot kapsz, mint egy házon belül kitalált, ad hoc
kérdéssorból, mert a validált eszközöket már teszteltek arra, hogy valóban azt
mérik-e, amit állítanak.

### Garantálj valódi anonimitást, és légy átlátható abban, hogyan

Mondd ki kifejezetten, és gondold komolyan, hogy az egyéni válaszok nem
vezethetők vissza személyre, különösen kis csapatokban, ahol a válaszmintákból
egyébként következtetni lehetne. Használj harmadik féltől származó
felmérőeszközt, amelyet maga a szervezet nem tud de-anonimizálni, csak egy
minimális csoportméret fölött tegyél közzé összesített eredményt (általában
öt vagy több válaszadó), hogy megelőzd a következtetést kis csapatokban, és ezt a
szabályt világosan közöld, mielőtt bárkit részvételre kérsz. Egyetlen eset,
amikor az anonimitás megsérül, akár véletlenül is, minden jövőbeli felmérés
iránti bizalmat tönkretesz.

### Az időbeli trendet kövesd, ne egyetlen leolvasást elszigetelten

Egyetlen elégedettségi pontszámnak önmagában korlátozott a diagnosztikai
értéke; három egymást követő felmérési cikluson át tartó csökkenő trend sokkal
erősebb és cselekvésre késztetőbb jel. Következetes, mérsékelt ütemben futtasd
a felmérést, a negyedéves gyakori, és az eredményeket mindig a történeti
trendvonallal együtt mutasd, ne elszigetelt számként, hogy az olvasók és a
válaszadók is a valódi változáshoz tudjanak viszonyítani az egyszeri zaj
helyett.

### Különböztesd meg az általános elégedettséget a konkrét kiégési kockázattól

Egy általános elégedettségi kérdés („mennyire vagy elégedett a munkáddal?”) és
egy kiégésspecifikus kérdés („érzed-e magad érzelmileg kimerültnek a
munkádtól?”) rokon, de különböző dolgot mér, és egy csapat az elsőn
elfogadhatóan teljesíthet, miközben a másodikon valódi figyelmeztető jeleket
mutat. Tedd mindkettőt a felmérés tervébe, és a kiégésspecifikus figyelmeztető
jelet kezeld úgy, hogy gyorsabb, közvetlenebb követést igényel, mint egy
általános elégedettségi visszaesés.

### A felmérési adatokat óvatosan párosítsd objektív megerősítő jelekkel

Ahol lehet, erősítsd meg az elégedettségi trendeket olyan objektív jelekkel,
amelyek valószínűleg összefüggenek a jólléttel: az önkéntes fluktuáció
aránya, a tartós munkaidőn túli munkaminták vagy a ki nem vett szabadság
növekvő aránya. Ezeket megerősítésként használd, soha ne a közvetlen
kérdezés helyettesítőjeként, és ügyelj arra, hogy ez a megerősítés ne váljon
megfigyelési mechanizmussá, amely maga rombolja a bizalmat, és ironikus módon az
elégedettséget.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Ad hoc belső felmérési kérdések | Gyorsan megépíthető, a környezethez szabott | Nem validált; nem világos, hogy valóban azt méri-e, amit állít |
| Validált eszköz (pl. Maslach Burnout Inventory, adaptálva) | Tesztelt, összehasonlítható, megbízhatóbb jel | Több előkészítést igényel, és a mérnöki környezethez adaptálni kellhet |
| Gyakori rövid pulzusfelmérések | Kis válaszadói fáradtság, közel valós idejű jel | Felmérésenként kisebb mélység; zajkockázat, ha túlértelmezik |
| Ritka, mély felmérések | Gazdag, részletes jel | Lassabban kapja el a gyorsan fejlődő problémát, például az akut kiégést |

A központi feszültség a **mélység és a gyakoriság között** húzódik. Egy mély,
validált, negyedévente futtatott felmérés megbízható, részletes képet ad, de
elkerülheti a ciklusok között gyorsan kialakuló problémát; a gyakori rövid
pulzusfelmérések gyorsabban elkapják a problémákat, de sekélyebb, zajosabb
adatot és válaszadói fáradtságot kockáztatnak, ha túlhasználják őket. A
feszültséget úgy oldd fel, hogy elsődleges eszközként negyedéves ütemben
mélyebb, validált felmérést futtatsz, amelyet gyakrabban egy nagyon rövid,
opcionális pulzusellenőrzés (egy-két kérdés) egészít ki korai figyelmeztetésül,
anélkül, hogy minden alkalommal ugyanolyan mélységű részvételt kérnél.

## Kérdések a csapattal való megbeszéléshez

1. **Validált felmérési eszközt használunk, vagy magunk kitalált kérdéseket,
   amelyekről semmi bizonyíték, hogy valóban az elégedettséget vagy a kiégést
   mérik?** Ha a jelenlegi felmérésünk ad hoc készült, gondold végig, hogy egy
   megalapozott eszközből, például a Maslach Burnout Inventory-ból való adaptálás
   megbízhatóbb adatot adna-e.

2. **Őszintén tudunk-e anonimitást garantálni, a kis csapatokban is, ahol a
   válaszmintákból egyébként következtetni lehetne?** Járd végig a tényleges
   felmérőeszközt és az összesítési gyakorlatot, és ellenőrizd, hogy egy
   elszánt menedzser a gyakorlatban kikövetkeztethetné-e egy egyén válaszait,
   még ha a szabályzat szerint nem is kellene tudnia.

3. **Láttuk-e már, hogy elégedettségi adat előre jelzett egy fluktuációs
   csúcsot vagy egy minőségi problémát, amely később más metrikákban jelent meg?**
   Nézd vissza a felmérési előzményeket a fluktuációs és incidensadatokkal
   szemben, és nézd meg, látható-e utólag előremutató mutatói minta. Ha soha
   nem ellenőrizted, már az is megér egy beszélgetést.

4. **Megkülönböztetjük-e a felmérésünkben az általános elégedettséget a konkrét
   kiégési kockázattól, vagy egyetlen összemosott kérdésre támaszkodunk?**
   Egy csapat jól festhet az általános elégedettségben, miközben alatta valódi
   kiégési jelek mutatkoznak; ellenőrizd, hogy a jelenlegi eszközünk
   valóban elkaphatná-e ezt a különbséget.

5. **Használtak-e valaha elégedettségi adatot, akár informálisan, csapatok
   egymáshoz hasonlítására vagy rangsorolására?** Ez az értékelő irányú
   sodródás szinte azonnal megrontja a felmérési eszközt, mert a válaszadók
   megváltoztatják a válaszaikat, amint versengési következményt gyanítanak.

6. **Mekkora a tényleges válaszadási arányunk, és mit mondana nekünk maga a
   csökkenő válaszadási arány?** Az egymást követő felméréseken csökkenő
   válaszadási arány önmagában jel, gyakran a folyamat iránti bizalom
   eróziójáé vagy a felmérési fáradtságé, és megérdemli, hogy külön
   vizsgáljuk, ahelyett, hogy adatgyűjtési kellemetlenségként elintéznénk.

## Ágazati szemszög

**Startup.** Néhány emberrel a formális anonim felmérések feleslegesnek
tűnhetnek, és a közvetlen beszélgetés gyakran gyorsabban felszínre hozza az
elégedettségi problémákat, mint egy negyedéves eszköz. A kockázat az, hogy az
alapító a panaszok hiányát a probléma hiányának hiszi; vezess be akár egy
könnyű, anonim visszajelzést, amint a csapat kinő abból a méretből, ahol
mindenki naponta beszél mindenkivel.

**Kisvállalkozás.** Egy egyszerű, ingyenes vagy olcsó anonim felmérőeszköz,
negyedévente futtatva, validált kérdések rövid, adaptált készletével, elérhető
dedikált embereladat-elemző funkció nélkül is. Ellenállj a kísértésnek, hogy
kihagyd az anonimitási garanciákat azért, mert a csapat szoros közösség;
éppen ez a közelség nehezíti meg az őszinte negatív visszajelzés közvetlen
megadását.

**Nagyvállalat.** Ekkora léptéknél a felmérési infrastruktúra valódi
befektetést igényel: megfelelő harmadik féltől származó eszközt, minimális
csoportméretű összesítési szabályzatot, valamint világosan és következetesen
kommunikált, nem értékelő jellegű használati szabályzatot. A haszon is
arányosan nagyobb, mert egy nagy létszámú szervezetben a kiégési trend
elkapása, mielőtt fluktuációt okozna, sokkal több intézményi tudást véd.

**Közszféra.** A közszférabeli bérkorlátokból fakadó megtartási nyomás ezt a
dimenziót stratégiailag fontossá teszi, nem opcionálissá. A jóllétadatok
közvetlenül indokolhatnak költségvetési kérelmeket olyan nem anyagi megtartási
beruházásokra (eszközök, védett idő, munkaterhelés-kezelés), amelyeket a
bérkorlátok önmagukban nem tudnak megoldani, feltéve, hogy maga az adatgyűjtés
elég megbízható ahhoz, hogy magabiztosan lehessen rá hivatkozni.

## Példák

**Nagyvállalat.** Egy felhőinfrastruktúra-cég platformcsapata több mint egy évig
jól teljesített az általános elégedettségben, miközben egy kiégésspecifikus
kérdés, amelyet a Maslach Burnout Inventory érzelmi kimerültség alskálájából
adaptáltak, négy egymást követő negyedéven át egyenletes csökkenést mutatott. A
vezetés, amely eleinte hajlott rá, hogy elintézze az aggályt, mert az általános
elégedettségi szám rendben volt, a csökkenés második egymást követő negyedéve után
tovább vizsgálódott, és kiderítette, hogy a csapat egy létszámstop óta csaknem
egy éve elviselhetetlen ügyeleti terhelést (6.3 téma) nyel el. A megfelelő
ügyeleti létszám helyreállítása két negyedéven belül megfordította a kiégési
trendet, jóval azelőtt, hogy fluktuációs csúccsá alakult volna, amelyet a cég
adatai szerint ez a minta tipikus következményeként hozott.

**Közszféra.** Egy állami kormányzati informatikai ügynökség, amely
tartós nehézségekkel küzdött a magánszféra munkáltatóival való bérversenyben,
a jóllétfelmérési adatokat kifejezetten arra használta, hogy költségvetési érvet
építsen egy védett fókuszidő-szabályzat mellett olyan béremelés helyett, amelyet
nem tudott kiharcolni. A felmérés azt mutatta, hogy a megszakítások gyakorisága
és a megbeszélésterhelés, nem a javadalmazás volt a távozási szándék
legerősebb előrejelzője azok között a válaszadók között, akik jelezték, hogy
aktívan állást keresnek. Az ebből született szabályzat, amely heti két
megszakítatlan délutáni blokkot tilt le a koncentrált mérnöki munkára,
az elégedettségi pontszámok és az önkéntes megtartás mérhető javulásával járt
együtt a következő évben, annak az árnak a töredékéért, amelyet egy versenyképes
béremelés igényelt volna.

## Üzleti érv: indítékok, ROI és TCO

Az elégedettség és a jóllét közvetlen mérésének megtérülése a korai
figyelmeztetés: az a szervezet, amely egy teljes évvel azelőtt elkapja a kiégési
trendet, mielőtt fluktuációvá válna, egy pótlás toborzási és beilleszkedési
költségének töredékéért beavatkozhat, és a pótló általában hónapokig nem éri el
a teljes termelékenységet még felvétel után sem. Egy tapasztalt mérnök önkéntes
távozása a szervezetnek sokkal többe kerül, mint a felmérési infrastruktúra,
amely a figyelmeztetést adhatta volna.

A teljes birtoklási költség (TCO) magában foglalja a felmérőeszközöket, a valódi
anonimitás garantálásának és fenntartásának fegyelmét, és a szervezeti
elkötelezettséget, hogy cselekedjen azon, amit az adat mutat, ahelyett, hogy
összegyűjtené, majd figyelmen kívül hagyná a kényelmetlen eredményeket. Ez
utolsó költség, a cselekvési hajlandóság, gyakran a valódi szűk keresztmetszet,
nem maga a mérés; az a felmérés, amely olyan problémát tár fel, amellyel senki
nem foglalkozik, éppoly biztosan rontja az eszköz iránti bizalmat, mint egy
megszegett anonimitási garancia.

## Antiminták és buktatók

- **Ad hoc, nem validált felmérési kérdések:** bizonytalan megbízhatóságú
  adatot állít elő.
- **Gyenge vagy megszegett anonimitási garanciák:** tönkreteszi az őszinte
  válaszadást és az eszköz iránti bizalmat, gyakran véglegesen.
- **Egyetlen leolvasásra reagálni a trend követése helyett:** túlreagálja a
  zajt, vagy elmulasztja a valódi lassú hanyatlást.
- **Az általános elégedettséget és a kiégésspecifikus kérdéseket összemosni:**
  elfedhet egy valódi figyelmeztető jelet egy jól kinéző átlagban.
- **Az elégedettségi adatot csapatok rangsorolására vagy összehasonlítására
  használni:** az értékelő irányú sodródás, amely megrontja az őszinte
  válaszokat.
- **Az adatot összegyűjteni, de a kényelmetlen eredményre soha nem cselekedni:**
  éppoly alaposan rontja a felmérés iránti bizalmat, mint egy megszegett
  anonimitási ígéret.

## Érettségi modell

- **1. szint, Kezdeti:** Az elégedettséget és a jólétet egyáltalán nem mérik,
  vagy csak informális, strukturálatlan beszélgetésen keresztül.
- **2. szint, Fejlődő:** Létezik ad hoc felmérés, de hiányzik belőle a
  validálás, a következetes ütem vagy az erős anonimitási garancia.
- **3. szint, Szabványosított:** Validált vagy adaptált felmérési eszköz fut
  következetes ütemben, erős, kommunikált anonimitási garanciával, az egész
  szervezetben.
- **4. szint, Irányított:** A trendeket aktívan követik egymást követő
  ciklusokon át, a kiégésspecifikus jeleket megkülönböztetik az általános
  elégedettségtől, és a szervezetnek dokumentált folyamata van a figyelmeztető
  jelekre való cselekvésre.
- **5. szint, Összehangolt:** A jóllétadatok közvetlenül tájékoztatják a
  munkaerő-tervezést és a megtartási beruházásokat, óvatosan objektív jelekkel
  megerősítve, és a szervezet rá tud mutatni konkrét beavatkozásokra, amelyek
  megfordítottak egy mért hanyatlást, mielőtt fluktuációvá vagy minőségi
  problémává vált volna.

## Ötletek a vitához

1. Kiállná-e a jelenlegi felmérési eszközünk a vizsgálatot mint valóban anonim?
2. Előre jelzett-e valaha egy elégedettségi vagy kiégési trend olyan problémát, amely később máshol jelent meg?
3. Mi a folyamatunk egy olyan felmérési eredményre való cselekvésre, amelyet nem akarunk hallani?
4. Megkülönböztetjük-e jelenleg a mérésünkben a kiégési kockázatot az általános elégedettségtől?
5. Melyik nem anyagi beruházást indokolná leginkább most a jóllétadatunk?

## A legfontosabb tanulságok

- Az elégedettséget és a jólétet **közvetlenül kell megkérdezni**; semmilyen
  rendszertelemetria nem láthatja ezt a dimenziót.
- Használj **validált eszközt**, ahol csak lehet, és garantálj valódi,
  jól kommunikált **anonimitást**.
- Ez a dimenzió **előremutató mutatója** a fluktuációnak és a minőségi
  problémáknak, amelyek máskülönben sokkal később és drágábban bukkannának fel.
- Különböztesd meg az **általános elégedettséget a konkrét kiégési kockázattól**,
  és kövesd az **időbeli trendet**, ne egyetlen leolvasást.
- Soha ne használd ezt az adatot **csapatok rangsorolására vagy
  összehasonlítására**; ez a sodródás szinte azonnal megrontja az őszinte
  válaszadást.

## Források és ajánlott olvasmányok

- Maslach, Christina, and Susan E. Jackson, *Maslach Burnout Inventory*
  (a validált, széles körben használt eszköz a kiégés három dimenzióban
  történő mérésére).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink műve
  (a felmérés tervezése szempontjából releváns motivációs és elégedettségi
  kutatás).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach és Michael P. Leiter műve (a kiégés
  szervezeti okai és beavatkozásai).
