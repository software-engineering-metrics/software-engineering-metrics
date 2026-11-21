# 2.8 Lean értékáram-metrikák

## Áttekintés és indíték

Minden metrika, amelyet ez a rész eddig tárgyalt, a flow-idő, a flow-terhelés, a
ciklusidő, a kihasználtság, egy sokkal régebbi eszköztárból származik: a klasszikus
**[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)** értékáram-térképezés
öt alapmérésből, amelyet a Toyotánál fejlesztettek ki, és a gyártásban, az
üzemeltetésben és a szolgáltatásnyújtásban általánosítottak jóval azelőtt, hogy a
szoftver átvette volna őket. Az **átfutási idő (LT)** a kérés pillanatától a
leszállításig eltelt teljes óraidő. A **feldolgozási idő (PT)** az egyetlen egységen
végzett tényleges, kézzelfogható munkával töltött idő. A **ciklusidő (CT)** az
áramban egyetlen csomópont vagy szakasz befejezéséhez szükséges átlagos idő. A
**kész és pontos arány (%C/A)** azon egységek százaléka, amelyeket egy lefelé lévő csapat
újramunka nélkül fel tud dolgozni. Az **ütemidő (takt time)** az egy egység
befejezésére engedett maximális idő, hogy tisztán megfeleljen az ügyfélkeresletnek.

Ez a téma azért létezik, mert a szoftverfejlesztés nem találta fel ezeket az
ötleteket, kölcsönvette őket, és a kölcsönvétel néha ugyanazokat a szavakat használta
fel kissé más dolgokra. A könyv saját ciklusideje (2.6 téma) kifejezetten egy változtatás
mérnöki szakaszait méri, kódolás, áttekintés, teszt, telepítés, míg a Lean klasszikus
CT-je az általánosabb „átlagos idő csomópontonként", bármely folyamatra alkalmazva. A
flow-idő (2.4 téma) a könyv neve arra, amit a Lean átfutási időnek hív. A megfeleltetés
ismerete azért számít, mert a Lean Six Sigma háttérrel érkező olvasó, ami gyakori a
gyártásban, a logisztikában, az egészségügyben és a kormányzati működésben, pontosan
ezeket a kifejezéseket használja az eredeti jelentésükkel, és az a szoftvercsapat,
amely nem beszéli ugyanazt a nyelvet, elveszít egy könnyű, bizonyítékokkal alátámasztott
hidat a mérnökségen kívüli kollégákhoz.

A nagy csapatoknál a %C/A a téma leginkább alulhasznált metrikája. Olyasmit ragad meg,
amit a 2.3 és 2.4 téma flow-metrikái nem: egy szakasz kibocsátásának mekkora része
használható valóban a következő szakasz által visszaküldés nélkül. Egy többszakaszos
értékáramon összegezve, egy olyan fogalom, amelyet a gyártás **gördülő átbocsátási
hozamnak** nevez, a %C/A feltárja, hogyan halmozódik láthatatlanul az újramunka az
átadásokon át, ez a minta különösen jellemző a hosszú, többcsapatos csővezetékű
nagyvállalatokra és a több jóváhagyási kapuval rendelkező kormányzati programokra, és
ritkán mérik közvetlenül.

## Alapelvek

- **Ez az öt metrika megelőzi a szoftvert, és túlmutat rajta.** Ez az a közös
  szókincs, amelyet egy Lean Six Sigma képzettségű érdekelt, ami gyakori a nagy
  vállalatokban és a kormányzati működésben, már folyékonyan beszél.
- **A terminológiai ütközés valós, és érdemes kifejezetten megnevezni.** A könyv
  ciklusideje (2.6 téma) és a Lean klasszikus CT-je rokon, de nem azonos; dokumentáld
  a megfeleltetést, hogy a funkciók közötti beszélgetések ne beszéljenek csendben
  el egymás mellett.
- **A %C/A-t minden szakaszra össze kell vonni, nem csak a végén egyszer mérni.** Az
  áram elején bevezetett és későn elkapott újramunka láthatatlan egy csak a végső
  leszállításnál mért metrika számára.
- **Az ütemidő a kapacitástervezést a kereslet köré keretezi át, nem az erőfeszítés
  köré.** A kérdés „milyen gyorsan mehetünk"-ről „milyen gyorsan kell mennünk"-re
  tolódik, ami közvetlenül kapcsolódik a kihasználtsághoz (2.7 téma) és a
  flow-terheléshez (2.4 téma).
- **Ezek diagnosztikai metrikák, nem hiúsági metrikák.** Mindegyik egy konkrét
  működési kérdés megválaszolására létezik, nem arra, hogy lenyűgöző számot hozzon
  egy dashboardra.

## Ajánlások

### Térképezd fel az értékáramodat mind az öt Lean metrikával, mielőtt szoftverspecifikus keretrendszert vezetsz be

Számold ki az átfutási időt, a feldolgozási időt, a ciklusidőt, a %C/A-t és az
ütemidőt az értékáramodon áthaladó munka reprezentatív mintájára, mielőtt ráépíted a
Flow Framework saját metrikáit (2.3 és 2.4 téma). Ez olyan alapértéket ad, amelyet
bármely Lean Six Sigma-jártas érdekelt azonnal megért, és gyakran felszínre hozza
ugyanazt a várakozásiidő-dominanciát, amelyet a 2.5 téma leír, olyan szókincsben
kifejezve, amely megelőz és túlél bármely konkrét szoftveres keretrendszert.

### A kész és pontos arányt multiplikatívan vond össze minden szakaszon át

Mérd a %C/A-t szakaszonként külön, majd szorozd össze a szakaszszintű százalékokat,
hogy megkapd az értékáram gördülő átbocsátási hozamát. Három szakasz, amelyek
mindegyike külön 90%-os kész és pontos arányon fut, nagyjából 73%-ra adódik össze, ez a
szám semmire sem hasonlít bármely egyetlen szakasz saját jelentésére, és általában az
őszintébb. Ez az egyetlen számítás a leggyorsabb módja annak, hogy feltárjuk, mennyi
újramunkát nyel el valójában egy többszakaszos csővezeték.

### Az ütemidőt kifejezetten valódi ügyfélkeresleti adatokból határozd meg, ne a kapacitásból

Az ütemidőt úgy számold ki, mint a rendelkezésre álló munkaidő osztva az ügyfélkereslettel
abban az időszakban, szándékosan függetlenül attól, milyen gyorsan tud ma dolgozni a
csapatod. Hasonlítsd a mért feldolgozási idődet és ciklusidődet ehhez a számhoz: az
ütemidő alatt kényelmesen lévő feldolgozási idő egészséges tartalékot jelez, míg az
ütemidőt meghaladó ciklusidő konkrét, számszerűsített bizonyíték a kapacitáshiányra,
nem csak érzés, hogy lemaradtunk.

### Dokumentáld a megfeleltetést a Lean kifejezések és a könyv saját szókincse között

Ahol a szervezeted már működtet Lean Six Sigma programot a szoftveren kívül, vagy
ahol a mérnökség az e szókincsben jártas vezetésnek jelent, írd le kifejezetten a
megfeleltetést a metrikachartádban (1.4 téma): a könyv flow-ideje a Lean átfutási
ideje, a könyv ciklusideje (2.6 téma) a Lean általánosabb CT-jének konkrét
alkalmazása, és a könyv aktív ideje (2.5 téma) a Lean feldolgozási ideje. Ez az
egyetlen dokumentum megelőzi az ismétlődő, kis értékű vitát arról, kinek a számai
„valódiak".

### Használd a %C/A-t védőkorlátként a flow-sebesség mellett, nem helyettesítéseként

Párosítsd a gördülő átbocsátási hozamot a flow-sebességgel (2.3 téma) úgy, ahogy a
könyv minden sebességmetrikát stabilitási védőkorláttal párosít. Az emelkedő elemszám
csökkenő gördülő %C/A mellett azt jelenti, hogy az értékáram több olyan egységet
szállít, amely később egyre inkább újramunkát igényel, pontosan az a fajta
sebesség-minőség nélkül minta, amelytől az 1.2 téma minden metrikacsaládot óv.

## Kompromisszumok: előnyök és hátrányok

| Megközelítés | Előnyök | Hátrányok |
| --- | --- | --- |
| Csak klasszikus Lean metrikák (LT, PT, CT, %C/A, ütemidő) | Univerzális szókincs; szoftveres és nem szoftveres csapatoknál egyaránt működik | Nem szoftverspecifikus; fordítást igényel a mérnökspecifikus szakaszokhoz |
| Csak Flow Framework-metrikák (2.3, 2.4 téma) | Kifejezetten szoftveres értékáramokra és elemtípus-láthatóságra épült | Ismeretlen a mérnökségen kívüli Lean Six Sigma képzettségű érdekelteknek |
| Mindkettő, dokumentált kifejezett megfeleltetéssel | Mindkét szókincset beszéli; a legerősebb funkciók közötti híd | Előzetes fegyelmet igényel a megfeleltetés leírásához és naprakészen tartásához |
| A %C/A mérése csak a végső leszállításnál | Egyszerű, egyetlen szám | Elrejti az áram korábbi szakaszaiban bevezetett és elkapott újramunkát |

A központi feszültség az **univerzalitás és a specifikusság** között áll fenn. A
klasszikus Lean metrikák azonnal olvashatók mindenkinek, akinek gyártási, működési vagy
Six Sigma tapasztalata van, de nem a szoftver specifikus szakaszait, a
kódáttekintést, az automatizált tesztelést, a telepítési jóváhagyást tartották szem
előtt. Úgy oldd fel a feszültséget, hogy a Lean metrikákat használod közös alap
szókincsként a funkciók közötti és vezetői beszélgetésekhez, a Flow Framework saját
metrikáit (2.3 és 2.4 téma) pedig a szoftverspecifikus diagnosztikai munkához, amelyet a
mérnökcsapatok naponta végeznek.

## Kérdések a csapattal való megbeszéléshez

1. **Ki tudnánk ma számolni mind az öt klasszikus Lean metrikát az értékáramunkra, vagy
   csak néhányat?** A legtöbb szoftvercsapatnak megvan a flow-idő és a ciklusidő
   megfelelője, de soha nem számolta ki kifejezetten a feldolgozási időt, a %C/A-t vagy
   az ütemidőt. Azonosítsd, melyik az öt közül valóban hiányzik, mielőtt feltételeznéd,
   hogy a hiány kicsi.

2. **Összevontuk-e valaha a %C/A-t az értékáramunk minden szakaszán át, vagy csak a
   végső leszállításnál mértük?** Az egyetlen áramvégi mérés pontosan azt a halmozódó
   újramunkát rejti el, amelynek feltárására a téma gördülő átbocsátási hozam
   számítása szolgál. Próbáld ki az összevonási számítást valódi adatokkal.

3. **Ismerjük az ütemidőnket, valódi ügyfélkeresletből számolva, és hogyan viszonyul
   hozzá a mért ciklusidőnk?** A legtöbb csapat soha nem tette kifejezetté ezt az
   összehasonlítást, ami azt jelenti, hogy a kapacitási beszélgetések anekdotikusak
   maradnak, nem számszerűsítettek.

4. **Ha egy Lean Six Sigma képzettségű, mérnökségen kívüli érdekelt a
   ciklusidőnkről kérdezne, biztosak lennénk-e abban, hogy ugyanazt értjük alatta,
   mint ő?** A könyv ciklusideje (2.6 téma) és a Lean klasszikus CT-je rokon, de nem
   azonos. Beszéljétek meg, okozott-e ez a megkülönböztetés valaha valódi
   félreértést a szervezetetekben.

5. **Volt-e valaha a gördülő átbocsátási hozamunk érdemben alacsonyabb bármely
   egyetlen szakasz saját jelentett %C/A-jánál?** Ha soha nem számoltad ki az
   összevonást, beszéljétek meg, mit várnátok találni, majd ellenőrizzétek valódi
   adatokkal.

6. **A szervezetünk már működtet Lean vagy Six Sigma programot a szoftveren kívül,
   amelyhez igazodhatnánk ahelyett, hogy külön, kapcsolat nélküli szókincset
   tartanánk fenn?** Sok nagyvállalatnál és kormányzati szervnél már megvan ez az
   infrastruktúra; ellenőrizd, hogy a mérnökség valaha ténylegesen kapcsolódott-e hozzá.

## Ágazati szemszög

**Startup.** A teljes Lean értékáram-térképezés ritkán éri meg a szertartást ezen a
léptéken, de az ütemidőt érdemes informálisan megérteni: ha nagyjából tudjuk, milyen
gyorsan kell valóban haladnia a csapatnak a valódi ügyfélkereslethez, egy önkényes
belső tempó helyett, megelőzi mind a kapacitás túl korai túlépítését, mind
alulépítését, amint megérkezik a növekedés.

**Kisvállalkozás.** A %C/A az öt metrika közül itt a legközvetlenebbül hasznos, mert
közvetlenül arra a kérdésre válaszol, hogy „a leszállított munkánk mekkora részét kell
újracsinálni", amit a tulajdonosok és a kis csapatok élesen éreznek anélkül, hogy
mindig lenne hozzá szám. Kövesd informálisan az egy-két kritikus folyamatodra, mielőtt
bármi bonyolultabbba fektetnél.

**Nagyvállalat.** Itt éri meg a klasszikus Lean szókincs az árát, mert a nagy
vállalatok nagyon gyakran már működtetnek Lean Six Sigma programot az
üzemeltetésben, a gyártáshoz közeli divíziókban vagy a megosztott
szolgáltatásokban, és az ugyanazt a nyelvet beszélő mérnökség azonnali, hiteles hidat
nyer ezekhez a funkciókhoz, ahelyett hogy egy külön, csak szoftveres metrikakészletet
kellene a nulláról indokolnia.

**Közszféra.** A kormányzati szerveknek, különösen azoknak, amelyek szabályozási,
gyártáshoz közeli vagy logisztikai funkciókból nőttek ki, gyakran vannak meglévő Lean
vagy folyamatfejlesztési megbízásaik. Egy digitális szolgáltatás értékáramának
keretezése ugyanazokban a klasszikus fogalmakban, átfutási idő, feldolgozási idő,
%C/A, ütemidő, amelyeket a szerv folyamatfejlesztési irodája már használ, gyakran a
leggyorsabb út ahhoz, hogy valódi intézményi támogatást szerezzünk egy szoftveres
modernizációs erőfeszítéshez.

## Példák

**Nagyvállalat.** Egy gyártócég belső szoftverrészlege évekig küzdött azért, hogy a
mérnöki metrikáit komolyan vegye a gyárpadlótól Lean Six Sigmában jártas működési
vezetés. A részleg szállítási csővezetékének átkeretezése ugyanazzal az öt klasszikus
metrikával, az átfutási idő, a feldolgozási idő, a ciklusidő, a %C/A és az ütemidő
kiszámításával a szoftveres értékáramra, először tette azonnal olvashatóvá a részleg
számait a működési vezetés számára. A csővezeték négy szakaszán végzett gördülő
átbocsátási hozam számítás 61%-os tényleges %C/A-t tárt fel, jóval bármely egyes
szakasz saját jelentett száma alatt, ez lett az alapja egy újramunka-csökkentési
kezdeményezésnek, amelyet a működési vezetés ugyanabban a negyedévben finanszírozott.

**Közszféra.** Egy állami közlekedési minisztérium digitális engedélyezési csapata,
amely egy hosszú múltú Lean folyamatfejlesztési irodával rendelkező szervnek
jelentett, soha nem vonta be azt az irodát, mert a saját metrikái szoftverspecifikus
nyelvet használtak, amelyet az iroda nem ismert fel. Miután az engedélyezési értékáramot
átfutási időre, feldolgozási időre és %C/A-ra fordították, a folyamatfejlesztési iroda
azonosította, hogy a csapat valódi korlátja nem a mérnöki sebesség, hanem egy lefelé
lévő jogi áttekintési szakasz, amely az engedélykeresletre vonatkoztatott saját
tényleges ütemideje alatt futott, ezt a megállapítást az iroda azonnal tudta kezelni,
mert ismerős fogalmakban fogalmazták meg.

## Üzleti érv: indítékok, ROI és TCO

A klasszikus Lean szókincs bevezetésének megtérülése a könyv szoftverspecifikus
metrikái mellett hiteles, azonnali híd a folyamatfejlesztési szakértelemhez és
finanszírozáshoz, amely gyakran már létezik egy nagy szervezet más részein. A fenti
gyártócéges példa, amely ugyanabban a negyedévben szerzett újramunka-csökkentési
finanszírozást, amikor az átkeretezés olvashatóvá tette az érvet, az a minta, amelyet
a téma megközelítése megbízhatóan hoz: a felismerés nem volt új, de a szókincs, amely a
megfelelő közönség számára cselekvésre alkalmassá tette, igen.

A teljes birtoklási költség alacsony: ez az öt metrika nem igényel új műszerezést azon
túl, amit a 2.4-től a 2.6-ig terjedő témák már gyűjtenek, plusz egy %C/A újramunka-
besorolást, amely általában egyszerű kiegészítés a meglévő hiba- és flow-elem-követéshez
(2.2 téma). A fő beruházás a fordítás, a megfeleltetés leírása a könyv kifejezései és a
Lean klasszikus kifejezései között, amely az első alkalommal megtérül, amikor megelőz
egy funkciók közötti félreértést.

## Antiminták és buktatók

- **A %C/A mérése csak a végső leszállításnál:** a téma lényegi kijátszási vektora. A
  csapat magas végső szakaszbeli %C/A-t jelenthet, miközben a korábbi szakaszok
  csendben újramunkát termelnek, amelyet kijavítanak, mielőtt bárki mérné, így az egész
  értékáram egészségesebbnek látszik, mint amilyen. A védőkorlát a %C/A multiplikatív
  összevonása minden szakaszon át, a gördülő átbocsátási hozam számítása, és az egyes
  szakaszok „kész és pontos" definíciójának időszakos auditálása, hogy az ne
  szűkülhessen csendben az idő során.
- **Annak feltételezése, hogy a könyv ciklusideje és a Lean klasszikus CT-je pontosan
  ugyanazt jelenti:** valódi funkciók közötti zavart okoz, ha a két szókincs
  dokumentált megfeleltetés nélkül találkozik.
- **Az ütemidő meghatározása a jelenlegi kapacitásból a valódi ügyfélkereslet
  helyett:** meghiúsítja a metrika célját, amely a kereslet és a kapacitás közötti
  hiány feltárása, nem annak megerősítése, hogy bármilyen tempó már létezik.
- **A klasszikus Lean metrikák elavultként kezelése, amint szoftverspecifikus
  keretrendszert vezettek be:** elveti a hiteles, bizonyítékokkal alátámasztott hidat a
  folyamatfejlesztési szakértelemhez, amely esetleg már létezik a szervezetben.
- **A szervezet más részén működő meglévő Lean Six Sigma program figyelmen kívül
  hagyása:** elveszíti a finanszírozást, a szakértelmet és az intézményi hitelességet,
  amelyet a szállítási metrikák közös nyelven való átkeretezése megnyithatna.
- **A %C/A jelentése a flow-sebességgel való párosítás nélkül:** lehetővé teszi, hogy
  az emelkedő átbocsátási szám elrejtse az eső újramunka-arányt, ugyanaz a
  védőkorlát-hiány, amelytől a könyv végig óv.

## Érettségi modell

- **1. szint, Kezdeti:** Az öt klasszikus Lean metrika egyikét sem számolják; a
  szállításról az átfutási időre, a feldolgozási időre vagy a %C/A-ra való hivatkozás
  nélkül beszélnek.
- **2. szint, Fejlődő:** Az átfutási időt és a ciklusidőt informálisan követik, de a
  feldolgozási időt, a %C/A-t és az ütemidőt nem számolják, és nincs megfeleltetés a
  könyv saját szókincséhez.
- **3. szint, Szabványosított:** Mind az öt klasszikus metrikát következetesen számolják,
  és a könyv flow- és ciklusidő-szókincséhez való megfeleltetést egy közös
  metrikachartában dokumentálják.
- **4. szint, Irányított:** A gördülő átbocsátási hozamot az értékáram minden szakaszán
  át kiszámolják, és az ütemidőt a mért ciklusidőhöz hasonlítják, hogy kifejezetten
  számszerűsítsék a kapacitáshiányokat.
- **5. szint, Összehangolt:** A szervezet a szoftverszállítási metrikáit összekötötte
  egy meglévő Lean vagy Six Sigma programmal az üzlet más részén, és konkrét beruházási
  vagy folyamatdöntésekre tud mutatni, amelyeket azért hoztak, mert a közös szókincs
  egy felismerést cselekvésre alkalmassá tett egy nem mérnöki közönség számára.

## Ötletek a vitához

1. Ki tudnánk-e ma számolni az átfutási időt, a feldolgozási időt, a ciklusidőt, a %C/A-t és az ütemidőt az értékáramunkra?
2. Mekkora lenne a gördülő átbocsátási hozamunk, ha összeszoroznánk minden szakasz %C/A-ját?
3. A szervezetünk működtet-e már Lean vagy Six Sigma programot, amelyhez soha nem kapcsoltuk a mérnöki metrikákat?
4. Hogyan viszonyul a mért ciklusidőnk a valódi ügyfélkeresletből számolt ütemidőnkhöz?

## A legfontosabb tanulságok

- Az öt klasszikus Lean metrika, az **átfutási idő, a feldolgozási idő, a ciklusidő, a
  kész és pontos arány és az ütemidő**, megelőzi a szoftvert, és továbbra is a Lean Six
  Sigma képzettségű érdekeltek közös szókincse.
- A könyv saját **flow-ideje és ciklusideje megfeleltethető, de nem azonos** a Lean
  átfutási idejével és klasszikus CT-jével; dokumentáld kifejezetten a megfeleltetést a
  funkciók közötti zavar elkerülésére.
- A téma központi kijátszási vektora a **%C/A mérése csak a végső leszállításnál**; a
  védőkorlát az, hogy multiplikatívan összevonjuk minden szakaszon át gördülő
  átbocsátási hozamként.
- Az **ütemidő a kapacitást a valódi ügyfélkereslet köré keretezi át**, nem a meglévő
  tempó köré, és közvetlenül párosul a kihasználtsággal (2.7 téma) és a
  flow-terheléssel (2.4 téma).
- A szoftverszállítás klasszikus Lean fogalmakban való átkeretezése gyakran a
  leggyorsabb út a nagy szervezetben már meglévő **folyamatfejlesztési szakértelemhez és
  finanszírozáshoz** való kapcsolódáshoz.

## Források és ajánlott olvasmányok

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
