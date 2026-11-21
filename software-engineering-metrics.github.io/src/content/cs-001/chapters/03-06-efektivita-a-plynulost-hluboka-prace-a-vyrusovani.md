# 3.6 Efektivita a plynulost: hluboká práce a vyrušování

## Přehled a motivace

**Efektivita a plynulost**, poslední dimenze SPACE (téma 3.1), měří absenci
tření a schopnost udržet nepřerušovanou, soustředěnou práci. Tato dimenze leží
na hranici mezi metrikami toku dodávky z části 2 (efektivita toku z tématu 2.5
měří, jak se práce pohybuje systémem týmu) a něčím osobnějším: individuální
kognitivní zkušeností hluboké, soustředěné inženýrské práce a tím, jak často
je tato zkušenost roztříštěna vyrušením. Softwarové inženýrství, víc než
většina znalostní práce, závisí na držení velkého množství kontextu v pracovní
paměti najednou, takže je neobvykle zranitelné nákladem vyrušení.

Výzkum tohoto nákladu je konzistentní a střízlivý: znovusoustředění po
vyrušení při hluboké, složité práci netrvá sekundy, běžně to trvá mnoho minut,
někdy blíž půl hodině, než se plně obnoví
[pracovní paměť](https://en.wikipedia.org/wiki/Working_memory), kterou
inženýr před vyrušením držel. Inženýr, jehož den je schůzkami, upozorněními a
přepínáním kontextu rozdrobený na patnáctiminutové bloky, může vykazovat
spoustu aktivity (téma 3.4), a přitom zvládne mnohem méně skutečně obtížné
práce než tentýž inženýr se dvěma chráněnými, nerušenými hodinami. Tato
dimenze existuje právě proto, aby tento neviditelný náklad zviditelnila.

U velkých týmů se náklad vyrušení strukturálně násobí: víc schůzek, víc
režie koordinace mezi týmy, víc kanálů a upozornění ve Slacku, víc procesních
kontrolních bodů, vše z toho jednotlivě rozumné, ale dohromady den výrazně
rozbíjí. Velké podniky a státní správa se svými těžšími potřebami řízení a
koordinace jsou této fragmentaci obzvlášť vystaveny a tato dimenze dává
vedení konkrétní způsob, jak ji měřit a bránit se jí, místo aby „čas na
soustředění“ zůstal vágní kulturní touhou, kterou nikdo skutečně nechrání.

## Klíčové zásady

- **Přepínání kontextu má skutečný, měřitelný náklad, ne jen pocitový.**
  Znovusoustředění po vyrušení běžně trvá mnoho minut, ne sekundy.
- **Zátěž schůzkami a frekvence vyrušování jsou měřitelné, ne jen anekdotické.**
  Data z kalendáře a nástrojů mohou obojí odhalit přímo.
- **Chráněný, nepřerušovaný čas je vzácný zdroj, který je třeba záměrně
  bránit,** ne takový, který přetrvá sám od sebe, když organizace roste.
- **Tato dimenze často vysvětluje rozdíl mezi aktivitou a výkonem** (témata 3.3
  a 3.4): vysoká aktivita s nízkým výkonem se někdy vrací k roztříštěným dnům
  plným vyrušování.
- **Individuální rozdíly v potřebě soustředění jsou skutečné** a tato dimenze
  má informovat týmové normy, ne všem vnucovat tuhý, identický rozvrh.

## Doporučení

### Měřte zátěž schůzkami a fragmentaci přímo z dat kalendáře

Spočítejte z dat kalendáře počet a délku nepřerušovaných bloků dvou a více
hodin dostupných v typickém týdnu inženýra. Toto jediné číslo, někdy nazývané
**čas na soustředění** (focus time) nebo **čas tvůrce** (maker time), je
přímý, instrumentovatelný zástupný ukazatel této dimenze a běžně se zjistí,
že nominálně plnočasový inženýr nemá po započtení schůzek v typickém týdnu
téměř žádné takové bloky, což zpravidla překvapí vedení víc než samotné
inženýry.

### Sledujte frekvenci vyrušování z dat nástrojů, kde je to možné

Objem upozornění, frekvenci příchozích zpráv během pracovní doby a míru
přepínání kontextu mezi úkoly lze přibližně odvodit z existujících nástrojů
pro spolupráci. Používejte tato data agregovaně, na úrovni týmu, podle stejné
zásady jako u dat o aktivitě (téma 3.4): nikdy jako mechanismus sledování
jednotlivců, vždy jako týmový signál o tom, zda režie koordinace v organizaci
nepřerostla míru, která chrání skutečné soustředění.

### Chraňte výslovné bloky času na soustředění jako týmovou nebo organizační normu

Nejúčinnější zásah, na který tato dimenze ukazuje, je jednoduchý a levný:
vyhraďte konkrétní, chráněné bloky času, běžně dopoledne nebo odpoledne v
určité dny, během nichž se ve výchozím nastavení neplánují schůzky. Vyžaduje
to souhlas organizace nad rámec kontroly jediného týmu, protože schůzky se
často plánují přes hranice týmů, ale kde se důsledně zavede, je to jeden z
zásahů s nejvyšší návratností a nejnižšími náklady v celé této knize.

### Spojte data o plynulosti s rozdílem mezi aktivitou a výkonem

Když tým vykazuje vysokou aktivitu (téma 3.4), ale stagnující nebo klesající
výkon (téma 3.3), zkontrolujte data o plynulosti a vyrušování dřív, než
předpokládáte, že rozdíl odráží problém schopností jednotlivce nebo týmu.
Silně rozbitý rozvrh může vytvořit přesně tento vzorec: spousta viditelného
pohybu, málo dokončené skutečně obtížné práce, protože obtížná práce
vyžaduje právě udržené soustředění, které fragmentace ničí.

### Respektujte individuální rozdíly místo vnucování jediného tuhého rozvrhu

Ne každý inženýr potřebuje, nebo pracuje nejlépe s, identickými vzorci času na
soustředění. Někteří skutečně nejlépe přemýšlejí v kratších dávkách, jiní
potřebují dlouhé, nerušené úseky. Používejte data této dimenze k informování
týmových norem a výchozích hodnot, chráněných bloků, ze kterých je možné
vystoupit, ne povinných, místo jediného vynuceného rozvrhu, který předpokládá
jednotné potřeby všech.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádná ochrana času na soustředění | Maximální flexibilita plánování schůzek | Roztříštěné dny snižují kapacitu pro skutečně obtížnou práci |
| Chráněné bloky soustředění na úrovni týmu | Nízké náklady, vysoká návratnost, přímo brání hluboké práci | Vyžaduje souhlas s koordinací nad rámec jediného týmu |
| Období bez schůzek v celé organizaci | Nejsilnější ochrana, nejhůř se narušuje | Vyžaduje široký závazek organizace a může působit tuze u rolí, které potřebují víc koordinace |
| Individuální plánování soustředění na základě přihlášení | Respektuje individuální rozdíly ve stylu práce | Slabší výchozí ochrana; snadno se naruší pod tlakem plánování |

Ústředním napětím je **potřeba koordinace versus ochrana soustředění**. Velké
organizace schůzky a koordinaci mezi týmy ke fungování skutečně potřebují a
tato potřeba táhne přímo proti nepřerušovanému času, který hluboká inženýrská
práce vyžaduje. Napětí neřešte odstraněním koordinace, ale tím, že učiníte z
času na soustředění výslovné, chráněné výchozí nastavení, a ne to, co zbude
poté, co se vyhoví každé žádosti o schůzku, a chování ochrany soustředění
budete brát jako zdroj, který je třeba záměrně bránit, a ne jako zbytek.

## Otázky k diskusi s vaším týmem

1. **Kolik nepřerušovaných dvouhodinových bloků má typický inženýr našeho
   týmu ve skutečnosti za týden, měřeno ze skutečných dat kalendáře?** Většina
   týmů to nikdy přímo nezkontrolovala a odpověď bývá po změření nižší, než
   by kdokoli odhadl jen z dojmu.

2. **Viděli jsme někdy rozdíl mezi aktivitou a výkonem, který by mohla
   vysvětlit data o plynulosti?** Podívejte se na období, kdy tým působil
   zaneprázdněně, ale nedodal skutečně obtížnou práci, a ověřte, zda rozdíl
   nemohla vysvětlit zátěž schůzkami nebo fragmentace.

3. **Co by bylo potřeba k zavedení chráněného bloku soustředění bez schůzek pro
   náš tým a co tomu dnes brání?** Pojmenujte konkrétní překážku, zvyky
   plánování mezi týmy, očekávání vedení neustálé dostupnosti, a probereme, zda
   je skutečně tak pevná, jak se zdá.

4. **Respektujeme individuální rozdíly v potřebě soustředění, nebo náš
   současný rozvrh předpokládá, že všichni pracují stejně?** Zeptejte se členů
   týmu přímo, jak by ve skutečnosti raději strukturovali soustředěnou práci,
   místo abyste předpokládali jednotný vzorec pro všechny.

5. **Jak se naše zátěž schůzkami změnila za poslední rok a všiml si někdo toho
   trendu před touto diskusí?** Fragmentace se plíží postupně, jedna
   rozumně vypadající opakovaná schůzka za druhou, a málokdy je výsledkem
   jediného záměrného rozhodnutí.

6. **Kdybychom v celé organizaci chránili dvě celá odpoledne týdně pro hlubokou
   práci, čemu bychom museli říct ne a stálo by to za to?** Tato konkrétní
   otázka kompromisu vytahuje napětí mezi koordinací a soustředěním na
   světlo, místo aby zůstalo abstraktní touhou.

## Pohled podle sektorů

**Startup.** Zátěž schůzkami je u malého týmu obvykle přirozeně nízká a rizikem
je naopak přepínání kontextu způsobené nošením mnoha klobouků současně, ne
konkrétně plánovanými schůzkami. Čas na soustředění chraňte záměrně i v malém
měřítku, protože návyk je snazší založit brzy než dodatečně doplnit.

**Malá firma.** Jednoduchá, neformální norma, třeba žádné interní schůzky před
polednem, může zachytit většinu přínosu této dimenze bez nástrojů pro analýzu
kalendáře. V tomto měřítku záleží víc na disciplíně než na měření.

**Velký podnik.** Zátěž schůzkami a režie koordinace mezi týmy se zde škálují
špatně a fragmentace se často vkrádá skrze mnoho jednotlivě rozumných
opakovaných schůzek, na které se nikdo nepodíval jako na celek. Měřte dostupnost
času na soustředění přímo z dat kalendáře napříč organizací a chráněné bloky
soustředění berte jako politiku celé organizace, ne volbu tým po týmu, kterou
přebijí zvyky plánování mezi týmy.

**Státní správa.** Těžké požadavky na řízení a koordinaci běžné ve veřejném
sektoru dělají z ochrany této dimenze obzvlášť důležitou záležitost, protože
přirozený tah k většímu počtu procesů a revizních schůzek je silný. Ochranu
času na soustředění výslovně vymezte jako investici do produktivity, když
argumentujete před zainteresovanými stranami, které mohou snižování počtu
schůzek vnímat jako oslabení dohledu, a ne ochranu skutečné inženýrské
kapacity.

## Příklady

**Velký podnik.** Vedení inženýrství jedné finančně-technologické firmy
zaznamenalo trvalý rozdíl mezi aktivitou commitů a schopností týmu dodávat
skutečně složité funkce podle plánu. Analýza kalendáře zjistila, že medián
inženýra měl k dispozici za týden méně než tři hodiny nepřerušovaných
dvouhodinových bloků, rozdrobených mezi opakované schůzky o stavu, z nichž
mnohé byly postupně přidávány během dvou let, aniž by kdo rozhodl o přidání
takové celkové zátěže schůzkami. Firma zavedla dvě povinná odpoledne týdně bez
schůzek v celé organizaci a následný průzkum a revize metrik dodávky o šest
měsíců později ukázaly zlepšené skóre spokojenosti i měřitelné zkrácení cycle
time (téma 2.6) konkrétně u složitých, vícedenních funkcí.

**Státní správa.** Inženýrský tým jedné federální agentury, pracující pod
těžkými požadavky na řízení, zjistil z auditu kalendáře, provedeného poté, co
několik inženýrů vyslovilo obavy ve výstupních rozhovorech, že inženýři
tráví téměř 40 % pracovní doby na schůzkách o stavu a kontrolách souladu.
Místo odstranění požadavků na řízení, které sloužily skutečným účelům dohledu,
tým sloučil redundantní schůzky o stavu do jediné týdenní revize a přesunul
rutinní kontroly souladu na asynchronní revizi dokumentace místo živých
schůzek, čímž zátěž schůzkami téměř poloviční snížil při zachování
podkladové funkce dohledu, a následná data z průzkumu ukázala významné
zlepšení hlášeného času na soustředění.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost ochrany času na soustředění je neúměrná jejím nákladům: příklad
finančně-technologické firmy výše ukazuje měřitelné zlepšení dodávky ze změny,
která nestála nic kromě disciplíny plánování, dvě odpoledne týdně bez schůzek.
Protože hluboká, složitá práce závisí právě na udržené, nerušené pozornosti,
i skromné zvýšení dostupnosti skutečného času na soustředění může přinést
nadproporcionální zlepšení kapacity organizace pro její nejtěžší a
nejhodnotnější práci.

Celkové náklady vlastnictví (TCO) jsou téměř výhradně organizační disciplína,
ne investice do nástrojů: data kalendáře bývají už dostupná a samotný zásah,
ochrana konkrétních bloků, nestojí nic kromě ochoty říct ne plánování schůzek
během nich. Hlavním trvalým nákladem je obrana chráněného času proti postupné
erozi, jak nevyhnutelně vznikají nové potřeby koordinace.

## Antivzory a úskalí

- **Brát roztříštěné dny jako nevyhnutelnou daň za růst:** nahromadí se
  postupně a málokdy je výsledkem jediného záměrného rozhodnutí, takže se snadno
  nechá bez řešení.
- **Zaměňovat vysokou aktivitu za vysoký výkon bez kontroly dat o plynulosti:**
  roztříštěný rozvrh může vytvořit přesně tento zavádějící vzorec.
- **Vnucovat všem jediný, tuhý rozvrh času na soustředění:** ignoruje skutečné
  individuální rozdíly v tom, jak lidé pracují nejlépe.
- **Používat data o vyrušování nebo upozorněních jako sledování jednotlivců:**
  opakuje přesně to riziko zneužití, před kterým téma 3.4 varuje u dat o
  aktivitě.
- **Nechat chráněný čas na soustředění postupně erodovat výjimkami:** totéž
  riziko eroze, před kterým téma 2.5 varuje u limitů WIP, uplatněné na ochranu
  času na soustředění.
- **Přidávat požadavky na řízení nebo koordinaci, aniž by se kdy změřily jejich
  kumulativní náklady na zátěž schůzkami:** fragmentace se plíží po jednom
  rozumně vypadajícím přídavku.

## Model zralosti

- **Úroveň 1, Zahájení:** Čas na soustředění a náklad vyrušení se neměří ani
  nechrání; zátěž schůzkami roste, aniž by kdo sledoval její kumulativní
  dopad.
- **Úroveň 2, Rozvoj:** Existuje určité neformální povědomí o fragmentaci, ale
  neanalyzují se data kalendáře a nezavádí se formálně žádný chráněný čas.
- **Úroveň 3, Standardizace:** Dostupnost času na soustředění se měří z dat
  kalendáře a chráněné bloky bez schůzek jsou zavedeny jako týmová nebo
  organizační norma.
- **Úroveň 4, Řízení:** Data o plynulosti se aktivně spojují s rozdíly mezi
  aktivitou a výkonem pro diagnostiku nízkého výkonu způsobeného fragmentací a
  chráněný čas se sleduje, zda neerodoval.
- **Úroveň 5, Orchestrace:** Organizace bere ochranu času na soustředění jako
  plnohodnotnou investici do produktivity, dokáže ukázat konkrétní zlepšení
  dodávky a spokojenosti, která se k ní vážou, a proaktivně ji brání proti
  postupnému, přírůstkovému tlaku, který by ji jinak erodoval.

## Náměty k diskusi

1. Kolik skutečně nepřerušovaných hodin jsme každý z nás měli minulý týden?
2. Rostla naše zátěž schůzkami postupně, aniž by o tom někdo záměrně rozhodl?
3. Kde by nedávný rozdíl mezi aktivitou a výkonem mohl být ve skutečnosti problémem plynulosti?
4. Kterou jedinou opakovanou schůzku bychom zrušili jako první, kdyby nás někdo požádal o snížení fragmentace?
5. Kolik by nás ve skutečnosti stálo zavedení dvou chráněných odpolední týdně bez schůzek?

## Hlavní poznatky

- Efektivita a plynulost měří **absenci tření** a schopnost udržet
  **nepřerušovanou, soustředěnou práci**, na které softwarové inženýrství
  neobvykle silně závisí.
- **Přepínání kontextu má skutečný, měřitelný náklad**, často mnoho minut na
  znovusoustředění, ne sekundy.
- Měřte **dostupnost času na soustředění přímo z dat kalendáře**; výsledek
  vedení obvykle překvapí.
- Tato dimenze často **vysvětluje rozdíl mezi aktivitou a výkonem**, který by
  se jinak špatně diagnostikoval.
- **Chráněné bloky času na soustředění** jsou zásah s nízkými náklady a vysokou
  návratností, ale vyžadují záměrnou obranu proti postupné erozi.

## Odkazy a další četba

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal
  Newport (náklad přepínání kontextu a hodnota chráněného času na
  soustředění).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco a Timothy
  Lister (náklad vyrušení a návrh prostředí, která chrání soustředění).
- Mark, Gloria, Daniela Gudith a Ulrich Klocke, „The Cost of Interrupted
  Work: More Speed and Stress“ (2008): empirický výzkum doby obnovy po
  vyrušení.
