# 4.1 Metriky složitosti kódu

## Přehled a motivace

**[Cyklomatická složitost](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**,
kterou v roce 1976 zavedl Thomas J. McCabe, počítá počet nezávislých cest
tokem řízení části kódu: každé `if`, smyčka a větvení k počtu přidává. Zůstává
nejpoužívanější metrikou složitosti kódu téměř padesát let později, vedle
příbuzných, jako je kognitivní složitost (která váží vnořený a těžko
sledovatelný tok řízení víc než McCabeův původní lineární počet) a hloubka
vnoření. Tyto metriky sdílejí skutečný, ověřený poznatek: kód s více
nezávislými cestami je těžší plně otestovat, těžší o něm uvažovat a podle
desetiletí empirického výzkumu měřitelně pravděpodobněji obsahuje vady.

Toto téma zachází s tímto poznatkem s opravdovým respektem a stejně vážně
bere jeho meze. Metriky složitosti měří jednu konkrétní vlastnost kódu a
kódová báze může být jednoduchá podle každé metriky složitosti a přitom být
špatně navržená, špatně pojmenovaná nebo koncepčně nesourodá způsoby, které
žádný algoritmus počítání větvení nezachytí. A naopak, některé neredukovatelně
složité problémy skutečně vyžadují ke správnému řešení složitý kód a tým pod
tlakem minimalizovat skóre složitosti může vytvořit kód, který skóruje dobře,
ale ve skutečnosti se hůř chápe, protože podstatnou složitost rozprostírá do
víc souborů a vrstev nepřímosti místo toho, aby ji snížil.

U velkých týmů si metriky složitosti vydělávají na místo jako nástroj třídění:
způsob, jak mezi tisíci soubory najít malou podmnožinu, která nejspíš odmění
bližší pohled, ne jako samostatný verdikt o kvalitě kódu. Velké podniky a
státní správa, které udržují kódové báze příliš velké na to, aby je kdokoli
přečetl celé, se na tuto funkci třídění spoléhají, aby nasměrovaly vzácné úsilí
o refaktoring a revize tam, kde přinese nejvíc dobrého.

## Klíčové zásady

- **Metriky složitosti předpovídají obtížnost testování a výskyt vad; kvalitu
  přímo neměří.** Berte je jako jeden vstup, ne verdikt.
- **Skóre složitosti je vystaveno manipulaci zatemněním, ne jen skutečným
  zjednodušením.** Rozprostření složitosti do více souborů může skóre snížit,
  aniž by se kód stal srozumitelnějším.
- **Určitá složitost je podstatná, ne náhodná.** Skutečně těžký problém může
  vyžadovat skutečně složitý kód; cílem je minimalizovat náhodnou složitost,
  ne bezohledně odstraňovat veškerou.
- **Používejte metriky složitosti k třídění, ne jako skóre kartu jednotlivce
  nebo týmu.** Ukazují, kam se dívat, ne koho obviňovat.
- **Trend a odlehlé hodnoty mají větší váhu než jakýkoli absolutní práh.**
  Rostoucí trend nebo extrémní odlehlá hodnota je použitelnější než jediný
  průměr za celý tým.

## Doporučení

### Používejte metriky složitosti k třídění úsilí o revize a refaktoring

Spusťte analýzu složitosti napříč kódovou bází a použijte výsledky k určení,
kde by se bližší lidská revize nebo investice do refaktoringu nejvíc vyplatily:
funkce nebo soubory, které skórují daleko nad typickým rozsahem vaší vlastní
kódové báze, jsou nejhodnotnějším místem, kam se podívat nejdřív. Toto použití
k třídění, hledání, kam se dívat, je nejobhajitelnější a nejcennější aplikací
metrik složitosti, mnohem víc než jejich použití jako absolutní brány
„prošlo, neprošlo“.

### Nastavte prahy vzhledem k vlastní kódové bázi, ne podle univerzálního čísla

Absolutní prahy složitosti převzaté bez rozmyslu z průmyslové konvence
(skóre složitosti deset je běžně citované pravidlo) mohou být příliš shovívavé
nebo příliš přísné podle oboru: parser nebo systém pravidel může mít legitimně
vyšší základní složitost než typická CRUD služba. Zkalibrujte vlastní prahy
podle skutečného rozdělení ve vaší kódové bázi a překročení prahu berte jako
výzvu podívat se blíž, ne automatické selhání buildu, pokud se váš tým
záměrně nerozhodl pro tuto přísnější politiku s plným vědomím jejích kompromisů.

### Hlídejte manipulaci rozkladem bez skutečného zjednodušení

Nejčastější způsob manipulace se skóre složitosti je vzorec záměny z tématu 1.2
uplatněný na tuto konkrétní metriku: rozdělení jedné skutečně složité funkce na
několik menších, které jednotlivě skórují dobře, zatímco celkový systém zůstává
stejně těžko srozumitelný, nebo se někdy stává ještě těžším, protože logika je
nyní rozptýlena přes víc souborů s víc nepřímostí mezi nimi. Spojte metriky
složitosti s kvalitativní revizí, zda rozklad kód skutečně objasnil, nebo zda
jen přesunul složitost někam, kam ji metrika už nevidí.

### Rozlišujte podstatnou a náhodnou složitost, než zareagujete

Než vysoké skóre složitosti vezmete jako problém k nápravě, zeptejte se, zda
podkladový problém skutečně vyžaduje tolik nezávislých cest, logika výpočtu
daní má například legitimně mnoho větví, nebo zda složitost pochází z
odstranitelných příčin: hluboce vnořených podmínek, které by šlo zploštit,
duplicitní logiky, kterou by šlo sjednotit, nebo nejasných hranic
odpovědnosti, které by šlo přepracovat. Jen druhá kategorie je skutečným
problémem kvality, k jehož nápravě by vás tato metrika měla vést.

### Sledujte trend a odlehlé hodnoty, ne jen průměr jako snímek

Mírný pohyb průměrného skóre složitosti za celou kódovou bázi je sám o sobě
zřídka použitelný. Mnohem užitečnějšími signály jsou prudký růst složitosti
konkrétního souboru v několika změnách nebo malý počet extrémních odlehlých
hodnot v jinak dobře se chovající kódové bázi. Sledujte trend v čase i
odlehlý chvost a použijte je ke spuštění konkrétního, cíleného šetření, ne
široké, nesoustředěné iniciativy na snižování složitosti.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Absolutní univerzální práh | Jednoduchý, konzistentní, snadno se automatizuje | Ignoruje legitimní rozdíly mezi obory; dá se zmanipulovat rozkladem |
| Práh relativní ke kódové bázi | Lépe zkalibrovaný na skutečný kontext | Vyžaduje víc nastavení a pravidelnou rekalibraci |
| Složitost jako automatizovaná brána buildu | Vynucuje konzistenci bez režie lidské revize | Může blokovat legitimně složitý, ale dobře navržený kód nebo odměnit zatemňující rozklad |
| Složitost jako signál třídění pro lidskou revizi | Zachytí skutečné problémy kvality, které by samotný rozklad minul | Vyžaduje víc času lidské revize než plně automatizovaná brána |

Ústředním napětím je **automatizace versus úsudek**. Plně automatizovaná brána
složitosti se levně vynucuje a je konzistentní, ale může blokovat legitimně
složitý, dobře navržený kód i odměnit povrchní rozklad, který se skóre zmanipuluje,
aniž by cokoli skutečně zjednodušil. Napětí řešte tak, že automatizovanou
analýzu složitosti použijete k vyhledání kandidátů na revizi a samotný úsudek,
je tato složitost podstatná, nebo náhodná, objasnil tento refaktoring kód, nebo
složitost jen přemístil, ponecháte lidskému recenzentovi, a ne samotné tvrdé
automatizované bráně.

## Otázky k diskusi s vaším týmem

1. **Jsou naše prahy složitosti zkalibrovány podle skutečného rozdělení v naší
   kódové bázi, nebo převzaty bez rozmyslu z obecné průmyslové konvence?**
   Vytáhněte skutečné rozdělení složitosti ve své kódové bázi a ověřte, zda
   vaše současné prahy dávají smysl, místo abyste předpokládali, že běžně
   citované číslo platí univerzálně pro váš obor.

2. **Viděli jsme někdy funkci rozdělenou na několik menších, aniž by se výsledný
   kód stal srozumitelnějším?** To je nejjasnější znamení vzorce manipulace
   rozkladem, před kterým toto téma varuje. Podívejte se na nedávný refaktoring
   motivovaný hlavně skóre složitosti a upřímně posuďte, zda skutečně zlepšil
   srozumitelnost.

3. **Kde je v naší kódové bázi složitost podstatná pro problém a kde je náhodná
   a opravitelná?** Projděte své odlehlé hodnoty s nejvyšší složitostí a výslovně
   je roztřiďte do těchto dvou kategorií, protože jen druhá kategorie je
   skutečným, použitelným problémem kvality.

4. **Používáme metriky složitosti k třídění úsilí o revize, nebo jako tvrdou
   automatizovanou bránu bez lidského úsudku?** Probereme, zda váš současný
   způsob vynucování nechává prostor pro rozlišení podstatné a náhodné
   složitosti, které toto téma doporučuje, nebo zda s každým překročením
   zachází stejně bez ohledu na kontext.

5. **Bylo skóre složitosti někdy použito, i neformálně, k posouzení kvality práce
   jednotlivého inženýra?** Hrozí tím stejná past hodnocení jednotlivců, před
   kterou téma 3.4 varuje u metrik aktivity, zde uplatněná na metriky kódu, a
   vyvolává stejnou reakci manipulací.

6. **Jak vypadá trend naší složitosti za poslední rok u našich nejkritičtějších,
   nejčastěji měněných souborů?** Spojte to s analýzou změnovosti a hotspotů z
   tématu 4.3, protože soubor, který je zároveň velmi složitý a často měněný,
   zaslouží pozornost mnohem dřív než ten, který je složitý, ale zřídka se ho
   někdo dotkne.

## Pohled podle sektorů

**Startup.** Metriky složitosti jsou v tomto měřítku obvykle méně naléhavé;
kódová báze je dost malá, aby neformální obeznámenost často nahradila formální
měření. Návyk, který stojí za to přijmout brzy, je prostě čas od času spustit
sken složitosti, aby se zachytil konkrétní soubor, který se tiše stává
nezvládnutelným, dřív než tým vyroste natolik, že to neformálně nepozná.

**Malá firma.** Většina moderních nástrojů statické analýzy hlásí metriky
složitosti v rámci širší, bezplatné nebo levné sestavy lintování. Použijte
výstup jako periodický signál třídění, místo abyste investovali do specializovaných
nástrojů. Soustřeďte pozornost nejdřív na své nejčastěji upravované soubory.

**Velký podnik.** Metriky složitosti ve velkém měřítku jsou nejcennější v
kombinaci s daty o změnovosti (téma 4.3), aby se prioritizovala investice do
refaktoringu napříč kódovou bází příliš velkou na ruční přehled jednotlivcem.
Prahy kalibrujte podle služby nebo oboru, místo abyste používali jedno číslo
pro celou organizaci, protože legitimní složitost se mezi různými druhy systémů
výrazně liší.

**Státní správa.** Dlouhověké vládní systémy často hromadí složitost postupně
během let nebo desetiletí přírůstkových změn požadavků a audit složitosti může
být přesvědčivým, konkrétním nástrojem k zdůvodnění investice do modernizace
nebo refaktoringu před zainteresovanými stranami, které by systém jinak mohly
vidět jako prostě „fungující“, a tedy nestojící za investici.

## Příklady

**Velký podnik.** Firma zpracovávající platby provedla poprvé audit složitosti
celé kódové báze a našla jedinou funkci pro validaci transakcí se skóre
cyklomatické složitosti více než desetinásobným oproti mediánu kódové báze.
Šetření zjistilo, že složitost byla téměř celá náhodná: roky postupně
přidávaného zpracování zvláštních případů pro konkrétní poskytovatele plateb se
nahromadily do hluboce vnořených podmínek, které šlo přestrukturovat do čistšího
vzoru strategie oddělujícího logiku specifickou pro poskytovatele. Refaktoring,
prioritizovaný přímo proto, že audit složitosti ho určil jako nejhodnotnější
cíl v kódové bázi, snížil skóre složitosti funkce o více než 80 % a, což je
důležitější, měřitelně snížil míru vad v této konkrétní cestě kódu během
následujících dvou čtvrtletí.

**Státní správa.** Desítky let starý modul pro výpočet dávek jednoho daňového
úřadu skóroval extrémně vysoko v metrikách složitosti u téměř každé funkce, což
vedlo k úvodnímu předpokladu, že celý systém potřebuje přepsat od základů.
Bližší revize funkce po funkci, rozlišující podstatnou a náhodnou složitost,
zjistila, že většina složitosti skutečně odráží podkladová právní pravidla,
která skutečně měla tolik legitimních větví a zvláštních případů stanovených
zákonem, zatímco menší podmnožina pocházela z odstranitelné duplicity napříč
podobnými cestami výpočtu. Tým zacílil na refaktoring jen podmnožinu náhodné
složitosti, čímž se vyhnul nákladnému, riskantnímu přepisu celku a přitom
smysluplně zlepšil nejproblematičtější oblasti systému.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností dobrého používání metrik složitosti je cílená, vysoce hodnotná
investice do refaktoringu: příklad firmy zpracovávající platby výše ukazuje
jedinou, dobře zacílenou opravu, určenou analýzou složitosti, která měřitelně
snížila vady přesně v cestě kódu s nejvyšším rizikem, za zlomek nákladů, které by
vyžadovala široká, necílená iniciativa refaktoringu.

Celkové náklady vlastnictví (TCO) jsou nízké: většina moderních vývojových
řetězců nástrojů počítá metriky složitosti automaticky v rámci statické analýzy
(téma 4.4) a skutečnou investicí je čas lidského úsudku na správnou
interpretaci výsledků, rozlišení podstatné a náhodné složitosti a zachycení
manipulace rozkladem, a ne nějaké významné nové náklady na nástroje.

## Antivzory a úskalí

- **Brát skóre složitosti jako přímý verdikt o kvalitě:** měří jednu konkrétní
  vlastnost, ne celkovou kvalitu kódu.
- **Rozdělování funkce kvůli manipulaci se skóre bez skutečného zjednodušení:**
  vzorec manipulace rozkladem, který toto téma výslovně pojmenovává.
- **Uplatnění univerzálního prahu bez kalibrace podle vlastní kódové báze:**
  vede podle oboru k příliš shovívavému nebo příliš přísnému vynucování.
- **Používání metrik složitosti k individuálnímu hodnocení inženýrů:** zve k
  manipulaci a zneužívá metriku určenou k třídění, ne k úsudku.
- **Brát veškerou složitost jako stejně opravitelnou:** podstatná složitost ze
  skutečně těžkého problému není vada k odstranění.
- **Ignorování trendu a odlehlých hodnot ve prospěch plochého průměru za celou
  kódovou bázi:** míjí nejpoužitelnější signál, který tato rodina metrik
  poskytuje.

## Model zralosti

- **Úroveň 1, Zahájení:** Složitost se neměří, nebo se měří nezkoumaným,
  obecným univerzálním prahem uplatňovaným bez rozmyslu.
- **Úroveň 2, Rozvoj:** Metriky složitosti se sbírají, ale zřídka se podle nich
  jedná a nerozlišuje se mezi podstatnou a náhodnou složitostí.
- **Úroveň 3, Standardizace:** Prahy jsou zkalibrovány podle vlastního rozdělení
  kódové báze a metriky složitosti důsledně řídí třídění revizí a refaktoringu
  v celé organizaci.
- **Úroveň 4, Řízení:** Trend a odlehlé hodnoty složitosti se aktivně sledují a
  spojují s daty o změnovosti (téma 4.3), aby se prioritizovala investice do
  refaktoringu; manipulace rozkladem se aktivně hlídá.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná
  zlepšení míry vad vysledovaná přímo k investicím do refaktoringu založeným
  na složitosti a data o složitosti jsou rutinním, důvěryhodným vstupem do
  rozhodnutí o inženýrských investicích.

## Náměty k diskusi

1. Jaká je naše nejsložitější funkce nebo soubor a je jeho složitost podstatná, nebo náhodná?
2. Zmanipulovali jsme někdy skóre složitosti rozkladem bez skutečného zjednodušení?
3. Jsou naše prahy zkalibrovány podle vlastní kódové báze, nebo převzaty bez rozmyslu?
4. Kde se v naší kódové bázi právě teď překrývá vysoká složitost s vysokou změnovostí?
5. Informovala někdy data o složitosti rozhodnutí o investici do refaktoringu, nebo leží nevyužita?

## Hlavní poznatky

- Metriky složitosti jako **cyklomatická složitost** předpovídají obtížnost
  testování a výskyt vad; celkovou kvalitu kódu přímo neměří.
- Rozlišujte **podstatnou složitost** (ze skutečně těžkého problému) od
  **náhodné složitosti** (odstranitelné lepším návrhem), než zareagujete na
  vysoké skóre.
- Hlídejte **manipulaci rozkladem**: dělení kódu kvůli snížení skóre bez
  skutečného zjednodušení.
- Používejte metriky složitosti k **třídění**, k nasměrování lidských revizí a
  úsilí o refaktoring, ne jako skóre kartu jednotlivce nebo tuhou
  automatizovanou bránu.
- Kalibrujte prahy podle **rozdělení ve vaší vlastní kódové bázi** a sledujte
  **trend a odlehlé hodnoty**, ne jen plochý průměr.

## Odkazy a další četba

- McCabe, Thomas J., „A Complexity Measure“, *IEEE Transactions on Software
  Engineering* (1976): původní článek o cyklomatické složitosti.
- *Code Complete*, Steve McConnell (praktické rady pro zvládání složitosti při
  tvorbě softwaru).
- *Working Effectively with Legacy Code*, Michael Feathers (techniky bezpečného
  snižování složitosti ve stávajícím, těžko měnitelném kódu).
- Campbell, G. Ann, „Cognitive Complexity: A New Way of Measuring
  Understandability“ (SonarSource, 2018): metrika kognitivní složitosti a její
  odlišení od cyklomatické složitosti.
