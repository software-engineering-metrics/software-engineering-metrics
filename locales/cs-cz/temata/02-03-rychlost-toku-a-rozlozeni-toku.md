# 2.3 Rychlost toku a rozložení toku

## Přehled a motivace

**Rychlost toku** je počet položek toku (téma 2.2) dokončených za dané období,
míra [propustnosti](https://en.wikipedia.org/wiki/Throughput) ve Flow
Frameworku. **Rozložení toku** je podíl každého typu položek toku, funkcí, vad,
rizik a dluhu, mezi položkami dokončenými ve stejném období. Obě metriky jsou
navrženy ke společnému čtení: rychlost sama odpovídá na „kolik jsme dodali“ a
rozložení samo na „jaký druh práce to byl“, ale ani jedna otázka nic moc
neznamená bez druhé. Tým může zvýšit svou rychlost, zatímco jeho rozložení se
tiše posouvá od funkcí k předělávkám vad, což na grafu rychlosti vypadá jako
zrychlení a ve skutečnosti je to příznak klesající kvality.

Toto párování je táž disciplína, jakou téma 1.2 žádá od každé rodiny metrik v
této knize: nikdy nehlásit rychlostní číslo bez pojistky, která ukáže, co ta
rychlost stála. Rychlost toku je nejpřímějším zobecněním metriky propustnosti v
této části, duchem blíž frekvenci nasazení (téma 2.10) než jakékoli jiné
jednotlivé číslo v této knize, ale s rozlišením typů položek, které frekvence
nasazení nikdy neměla. Frekvence nasazení říká, jak často se kód dostane do
produkce; rychlost toku spárovaná s rozložením říká, jak často se do produkce
dostane hodnota a jaký druh hodnoty to je.

U velkých týmů provozujících mnoho souběžných hodnotových proudů toto párování
odhaluje vzorec, který jediné číslo propustnosti úplně skrývá: hodnotový proud,
jehož rychlost vypadá zdravě, zatímco jeho rozložení tiše sklouzlo téměř k čisté
práci na funkcích a tiše vyhladovuje kapacitu na dluh a rizika, jež podle
tématu 2.2 potřebuje záměrnou ochranu. Velké podniky srovnávající propustnost
mezi produktovými řadami a státní úřady vykazující dodací výstup kontrolním
orgánům potřebují toto párování, aby nezaměnily surový výstup za skutečný,
udržitelný pokrok.

## Klíčové zásady

- **Rychlost bez rozložení skrývá, co se skutečně dodalo.** Rostoucí počet
  položek neříká nic o tom, zda je tento počet zdravý, zmanipulovaný, nebo
  tiše zešikmený k nejsnazší dostupné práci.
- **Rozložení bez rychlosti skrývá měřítko.** Zdravě vypadající procentní
  rozdělení znamená málo, pokud nevíte také, kolik celkové práce představuje.
- **Obě metriky se musí vždy vykazovat společně.** Je to přímá aplikace principu
  párování pojistek z tématu 1.2 na data o toku.
- **Rychlost je vystavena stejné manipulaci záměnou jako jakákoli metrika
  počtu položek.** Rozdělení těžké práce na mnoho malých, snadných položek
  nafoukne počet, aniž by dodalo úměrně víc hodnoty.
- **Zdravé rozložení závisí na kontextu, není pevným cílem.** Téma 2.2 to pokrývá
  do hloubky; rychlost a rozložení je třeba vždy interpretovat vůči cíli, který
  kontext implikuje.

## Doporučení

### Vykazujte rychlost toku jako trendovou čáru, nikdy jako číslo jediného období

Počet položek jediného období je zašuměný a snadno se špatně přečte. Vyneste
rychlost toku přes několik po sobě jdoucích období a dívejte se na trend, ne na
jediný datový bod, tedy tatáž disciplína, jakou téma 1.6 doporučuje pro každou
časovou řadu náchylnou k přirozenému kolísání.

### Nikdy neprezentujte rychlost toku bez rozložení po boku

Berte to jako tvrdé pravidlo pro každý dashboard nebo zprávu, ne jako příjemný
bonus. Graf rychlosti zobrazený samotný zve přesně k tomu nesprávnému čtení, jímž
toto téma začíná: rostoucí propustnost, která je ve skutečnosti rostoucím podílem
předělávek nebo snadné práce na funkcích vytlačující kapacitu na dluh a rizika.
Dejte obojí vždy do jednoho pohledu.

### Vážte rychlost velikostí nebo složitostí, když se velikosti položek výrazně liší

Surový počet položek zachází s jednořádkovou změnou konfigurace a vícetýdenní
architektonickou migrací jako s rovnocennými, což zve ke stejné manipulaci
záměnou, jakou tato kniha už pojmenovala u frekvence nasazení (téma 2.10):
rozdělení těžké práce na mnoho malých položek nafoukne počet, aniž by dodalo
úměrně víc. Kde se velikosti položek výrazně liší, vážte rychlost hrubým
odhadem velikosti či složitosti, nebo sledujte průměrnou velikost položky vedle
surového počtu, aby bylo klesající průměrné velikosti vedle rostoucího počtu
vidět, místo aby zůstalo skryto.

### Sledujte posun rozložení toku, nejen jeho aktuální snímek

Nejužitečnějším signálem v rozložení toku jsou jen zřídka přesná procenta tohoto
období; je to směr změny přes několik období. Stálý posun, funkce stoupají,
zatímco dluh a rizika tiše klesají, stojí za to otevřít se zainteresovanými
stranami dlouho předtím, než se stane tím druhem problému kvality nebo
bezpečnosti, který se podle tématu 2.2 nenápadně hromadí pod vzorcem továrny na
funkce.

### Srovnávejte rychlost toku mezi hodnotovými proudy jen s opravdovou opatrností

Dva hodnotové proudy s odlišnou granularitou položek, odlišnou velikostí týmů
nebo odlišnou fází produktu nejsou přímo srovnatelné jen podle surové rychlosti,
tedy stejný problém férovosti, jaký téma 2.10 pojmenovává u frekvence nasazení
mezi týmy. Používejte rychlost nejprve pro trend vlastního hodnotového proudu a
srovnání mezi hodnotovými proudy zkoušejte až po potvrzení skutečně
srovnatelných definic a granularity položek.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Samotná rychlost jako surový počet položek | Jednoduchá na výpočet i vysvětlení | Vystavená manipulaci záměnou; skrývá, jaký druh hodnoty se dodal |
| Rychlost spárovaná s rozložením | Ukazuje společně měřítko i mix hodnoty | Vyžaduje disciplinovanou klasifikaci položek toku (téma 2.2), aby měla smysl |
| Rychlost vážená velikostí | Odolává manipulaci rozdělováním položek | Vyžaduje konzistentní, dohodnutou metodu odhadu velikosti v týmu |
| Srovnání rychlosti mezi hodnotovými proudy | Užitečné pro investiční rozhodnutí na úrovni portfolia | Snadno nespravedlivé bez potvrzení skutečně srovnatelných definic položek |

Hlavním napětím je **jednoduchost versus odolnost vůči manipulaci**. Surový
počet položek je číslo, které se nejsnáze počítá a vysvětluje, ale také se
nejsnáze nafoukne rozdělením těžké práce na mnoho malých kousků. Řešte to tak,
že hlavní metriku udržíte jednoduchou, surovou rychlost spárovanou s rozložením,
a vážení velikostí vyhradíte pro hodnotové proudy, kde je známo, že se
velikosti položek liší natolik, že se jednoduchý počet stal aktivně zavádějícím.

## Otázky k diskusi s vaším týmem

1. **Když vykazujeme rychlost toku, je rozložení toku vždy zobrazeno vedle ní,
   nebo rychlost někdy stojí sama?** Číslo rychlosti bez rozložení je podle
   ústřední zásady tohoto tématu neúplným obrazem. Zkontrolujte své skutečné
   dashboardy a zprávy na tuto mezeru.

2. **Změnila se naše průměrná velikost položky společně s rostoucí rychlostí a
   věděli bychom to?** Klesající průměrná velikost vedle rostoucího počtu je
   specifickým znakem manipulace záměnou aplikované na položky toku. Vytáhněte
   skutečná data místo předpokladu, že tento vzorec chybí.

3. **Srovnávali jsme někdy svou rychlost s jiným týmem, aniž bychom potvrdili,
   že naše definice a granularita položek skutečně odpovídají?** Nespravedlivé
   srovnání může tým tlačit k manipulaci vlastních čísel jen proto, aby
   vypadal srovnatelně, což ozvěnou opakuje riziko, které tato kniha už
   pojmenovala u frekvence nasazení.

4. **Posunulo se naše rozložení toku v posledních několika obdobích jedním
   směrem a rozhodl o tom někdo záměrně?** Pomalý posun lze snadno přehlédnout
   období po období. Vyneste několik období společně a poctivě hledejte trend,
   než předpokládáte, že současné rozdělení je stabilní.

5. **Kdyby chtěl někdo nafouknout naši rychlost toku, aniž by udělal víc
   skutečné práce, jaký je nejsnazší způsob a zachytilo by to naše současné
   vykazování?** Projděte konkrétní mechaniku rozdělování těžkých položek na
   snadné a diskutujte, zda by váš dashboard tento vzorec skutečně odhalil.

6. **Dostávají se naše čísla rychlosti a rozložení k obchodním zainteresovaným
   stranám společně, nebo putuje nahoru jen titulek o rychlosti?** Princip
   párování chrání před nesprávným čtením jen tehdy, pokud obě poloviny skutečně
   vidí lidé, kteří z dat rozhodují.

## Pohled podle sektorů

**Startup.** Rychlost toku se v tomto měřítku obvykle snadno sleduje neformálně,
protože celý tým má hrubou představu o propustnosti. Užitečnou disciplínou je
spárovat ji s rozložením i neformálně, aby zakladatel nezaměnil rostoucí počet
uzavřených tiketů za skutečný pokrok funkcí, když v počtu ve skutečnosti
dominuje opravování chyb v rané fázi.

**Malá firma.** Sledujte rychlost a rozložení společně z jakéhokoli lehkého
nástroje, který už používáte ke klasifikaci položek toku (téma 2.2); v tomto
měřítku není zapotřebí žádná specializovaná analytická platforma. Návyk
vždy je prohlížet vedle sebe záleží víc než jakákoli sofistikovanost nástrojů.

**Velký podnik.** Srovnání rychlosti mezi hodnotovými proudy je v tomto měřítku
lákavé pro stanovování priorit na úrovni portfolia a zároveň je tím místem, kde
je riziko nespravedlnosti největší, protože různé produktové řady mají
oprávněně velmi odlišnou granularitu položek. Investujte do potvrzení
srovnatelných definic dřív, než srovnání rychlosti použijete k zdůvodnění
investičních rozhodnutí mezi týmy.

**Státní správa.** Rychlost toku spárovaná s rozložením dává vedoucímu technologií
ve veřejném sektoru mnohem silnější důkazní základ pro vykazování dodacího
výstupu kontrolním orgánům než surová propustnost sama, protože může ukázat
nejen kolik se dodalo, ale že mix odráží záměrné, obhajitelné rozdělení mezi
novou funkcionalitu, nápravu vad a řízení rizik.

## Příklady

**Velký podnik.** Platformní tým softwarového dodavatele tři po sobě jdoucí
čtvrtletí vykazoval stabilně rostoucí rychlost toku, trend, který vedení
oslavovalo jako zrychlující se dodávání. Bližší pohled na rozložení toku,
vyžádaný až po eskalaci zákazníka kvůli opakujícím se chybám, odhalil, že podíl
„funkcí“ v této rostoucí rychlosti ve skutečnosti za stejné období klesl ze 70
% na 45 %, přičemž mezeru vyplnily položky oprav vad. Tým dodával víc položek,
ale klesající část z nich byla nová hodnota; zbytek byla předělávka, kterou graf
samotné rychlosti úplně zakryl.

**Státní správa.** Datový platformní tým národního statistického úřadu sledoval
rychlost toku jako svou hlavní dodací metriku pro výroční zprávu své dozorčí
radě. Když se člen rady zeptal, jaký podíl této rychlosti představuje nová
veřejně přístupná schopnost, tým zjistil, že číslo nikdy nerozložil podle typu
položky toku, a nedokázal odpovědět přímo. Úřad následně přijal vykazování
spárované rychlosti a rozložení, které ukázalo, že práce na rizicích a souladu,
vyvolaná novým nařízením o ochraně údajů, oprávněně spotřebovala rostoucí podíl
kapacity, obhajitelné rozdělení, které rada ochotně přijala, jakmile bylo
ukázáno výslovně, místo aby zůstalo implicitní v nevysvětleném propadu rychlosti.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností párování rychlosti s rozložením je poctivější, obhajitelnější obraz
dodacího výstupu, než jaký poskytuje kterékoli číslo samo. Výše uvedený příklad
softwarového dodavatele, který zjistil, že rostoucí rychlost ve skutečnosti
odrážela klesající výstup funkcí, je přesně druh nesprávného čtení, kterému
toto párování předchází, a zachytit tento vzorec brzy je mnohem levnější, než ho
objevit až poté, co k otázce donutí problém s kvalitou viditelný zákazníkům.

Celkové náklady vlastnictví (TCO) jsou minimální, je-li klasifikace položek
toku (téma 2.2) již zavedena: rozložení je přímočaré agregování již
klasifikovaných položek a disciplína zobrazování obou metrik společně je
konvence vykazování, nikoli technická investice. Většina nákladů na doporučení
tohoto tématu byla zaplacena už tehdy, když organizace přijala poctivou
klasifikaci položek toku.

## Antivzory a úskalí

- **Vykazovat rychlost toku bez rozložení:** způsob manipulace v srdci tohoto
  tématu. Tým pod tlakem dodávky může zvýšit počet položek tím, že upřednostní
  malou, snadnou práci na funkcích a vyhne se těžším položkám dluhu, rizik nebo
  vad, nebo tím, že rozdělí velké položky na mnoho malých, a graf rychlosti
  zobrazený sám se bude číst jako zrychlení místo skutečného posunu v tom, co se
  dodává. Pojistkou je táž disciplína párování, kterou téma 1.2 žádá v celé
  knize: nikdy neukazovat rychlost bez rozložení a pravidelně kontrolovat
  průměrnou velikost položky vedle počtu, aby se zachytilo právě rozdělování.
- **Srovnávat rychlost mezi hodnotovými proudy s odlišnou granularitou
  položek:** vyrábí nespravedlivé, zavádějící srovnání.
- **Považovat rozložení jediného období za stabilní:** přehlédne pomalý,
  významný posun, který odhalí jen pohled na trend.
- **Nechat k obchodním zainteresovaným stranám dojít jen titulek o rychlosti:**
  promarní veškerou ochrannou hodnotu principu párování.
- **Ignorovat průměrnou velikost položky při oslavě rostoucí rychlosti:**
  přehlédne specifický znak manipulace záměnou.
- **Stanovit cíl rychlosti bez ohledu na rozložení:** zve právě k manipulaci,
  před kterou toto téma varuje jmenovitě.

## Model zralosti

- **Úroveň 1, Zahájení:** Rychlost toku, je-li sledována, se vykazuje samotná
  bez dat o rozložení a nikdo nekontroloval manipulaci záměnou.
- **Úroveň 2, Rozvoj:** Některé týmy sledují rozložení, ale není konzistentně
  spárováno s rychlostí ve vykazování ani revidováno jako trend.
- **Úroveň 3, Standardizace:** Rychlost a rozložení se vždy vykazují společně,
  sledují se jako trendy a průměrná velikost položky se monitoruje, aby se
  zachytila manipulace záměnou.
- **Úroveň 4, Řízení:** Posun rozložení se proaktivně prošetřuje dřív, než se
  stane problémem kvality nebo bezpečnosti, a srovnání rychlosti mezi
  hodnotovými proudy se provádějí jen po potvrzení skutečně srovnatelných
  definic položek.
- **Úroveň 5, Orchestrace:** Rychlost a rozložení přímo informují investiční
  rozhodnutí na úrovni portfolia a organizace dokáže ukázat konkrétní případy,
  kdy byl posun rozložení zachycen a opraven dřív, než způsobil viditelné
  selhání.

## Náměty k diskusi

1. Zahrnuje naše vykazování rychlosti toku vždy rozložení, nebo jsme někdy
   ukázali jedno bez druhého?
2. Posunula se naše průměrná velikost položky toku v poslední době spolu se
   změnou rychlosti?
3. Poznali bychom, že se naše rozložení toku v posledních několika čtvrtletích
   stále posouvalo?
4. Co by bylo potřeba, aby někdo mohl nafouknout naši rychlost, aniž by dodal
   víc skutečné hodnoty, a všimli bychom si?

## Hlavní poznatky

- **Rychlost toku** měří propustnost; **rozložení toku** měří, jaký druh práce
  tato propustnost představuje. Vykazujte je vždy společně.
- Toto párování je přímou aplikací **principu pojistky** z tématu 1.2: nikdy
  neukazujte rychlostní číslo bez kontextu toho, co stálo.
- Ústředním způsobem manipulace tohoto tématu je **vykazování samotné
  rychlosti**, které může skrýt posun ke snadné práci na funkcích nebo
  rozdělování položek, jež nafukuje počet, aniž by dodalo úměrnou hodnotu.
- **Posun rozložení** je nejlépe vidět jako trend přes několik období, ne v
  snímku jediného období.
- **Srovnání rychlosti mezi hodnotovými proudy** potřebují skutečně srovnatelné
  definice položek, aby byla férová; bez nich spíš klamou, než informují.

## Odkazy a další četba

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble a Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
