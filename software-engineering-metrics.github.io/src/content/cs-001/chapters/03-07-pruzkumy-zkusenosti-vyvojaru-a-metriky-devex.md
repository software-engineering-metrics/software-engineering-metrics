# 3.7 Průzkumy zkušenosti vývojářů a metriky DevEx

## Přehled a motivace

Toto téma uzavírá část 3 praktickou mechanikou, která činí data z vlastního
hlášení ve všech předchozích tématech důvěryhodnými: jak navrhnout průzkum
zkušenosti vývojářů (developer experience, DevEx), který přináší skutečný
signál, a ne soutěž popularity, a jak spojit data z průzkumu s objektivní
instrumentací do sady metrik, podle které může organizace skutečně jednat.
Každé téma v této části se opírá o nějakou formu vlastního hlášení, nejpříměji
spokojenost a pohoda (téma 3.2), ale z dobře navrženého průzkumu těží i výkon,
komunikace a plynulost a špatně navržený průzkum podkopává hodnotu všech
najednou.

**Zkušenost vývojářů (DevEx)** je širší, novější rámování, které vzniklo kolem
téže základní myšlenky, jakou SPACE zformalizoval: skutečná, každodenní
zkušenost inženýrů s tím, jak se jim daří dělat práci, tření, nástroje,
kognitivní zátěž, zpětnovazební smyčky, je sama měřitelná a zlepšitelná
věc, ne jen měkká kulturní záležitost. Výzkum DevEx, zejména rámec, který
navrhli Abi Noda, Margaret-Anne Storey, Nicole Forsgren a Michaela Greiler,
organizuje tuto zkušenost do tří dimenzí: zpětnovazební smyčky, kognitivní
zátěž a stav plynulosti (flow state), které úzce odpovídají dimenzím SPACE
probraným v této části do hloubky a rozšiřují je.

U velkých týmů je rozdíl mezi průzkumem, který přináší důvěryhodný signál, a
takovým, který přináší šum nebo ještě hůř vyloženě zavádějící data, celý v
detailech návrhu, které toto téma pokrývá: formulace otázek, volba škály
odpovědí, vzorkování a rytmus a způsob, jakým se výsledky sdělují zpět
respondentům. Velké podniky a státní správa, které tyto průzkumy provádějí ve
velkém, napříč tisíci inženýrů, si nemohou dovolit, aby to dopadlo špatně,
protože vadný nástroj v takovém měřítku vytváří sebejistě chybné závěry, které
utvářejí skutečná rozhodnutí o zdrojích.

## Klíčové zásady

- **Kvalita návrhu průzkumu určuje důvěryhodnost dat mnohem víc než délka nebo
  sofistikovanost průzkumu.** Krátký, dobře navržený průzkum vždy porazí dlouhý,
  špatně navržený.
- **Míra odpovědí je sama signál**, ne jen metrika sběru dat; klesající míra
  často značí narušenou důvěru v proces.
- **Kombinujte data z průzkumu s objektivní instrumentací** všude, kde je to
  možné, podle zásady instrumentace z tématu 1.5; data z průzkumu používejte
  konkrétně pro to, co objektivní data zachytit nedokážou.
- **Uzavřete smyčku s respondenty.** Průzkum, který viditelně nikdy k žádné
  změně nevede, učí lidi, aby ho přestali brát vážně.
- **DevEx a SPACE jsou doplňková rámování téže podstatné starosti**, ne
  konkurenční rámce, mezi kterými je třeba volit.

## Doporučení

### Navrhujte otázky jasně a vyhněte se sugestivním nebo dvojitým formulacím

Pište otázky v průzkumu tak, aby se ptaly přesně na jednu věc, jednoduchým
jazykem, bez zabudování předpokladu do samotné otázky. „Jak jste spokojeni s
našimi nástroji a dokumentací?“ je dvojitá otázka, která slévá dvě potenciálně
velmi odlišné odpovědi do jedné matoucí. Rozdělte ji na dvě samostatné otázky.
Vyhněte se sugestivním formulacím typu „o kolik naše nedávná investice do
nástrojů zlepšila vaši zkušenost?“, které předpokládají, že ke zlepšení došlo,
místo aby se neutrálně ptaly, zda ano.

### Používejte konzistentní škály odpovědí a nové otázky vyzkoušejte před plošným nasazením

Sjednoťte se na jedné konzistentní škále odpovědí (pěti- nebo sedmibodová
[Likertova škála](https://en.wikipedia.org/wiki/Likert_scale) je běžná a dobře
prostudovaná) napříč nástrojem průzkumu, aby byly odpovědi srovnatelné mezi
otázkami i v čase. Každou novou otázku vyzkoušejte na malé skupině, než ji
nasadíte v celé organizaci, abyste zachytili nejednoznačnou formulaci nebo
neočekávaný výklad dřív, než poškodí celou sadu dat.

### Berte míru odpovědí jako diagnostický signál sám o sobě

Sledujte míru odpovědí v po sobě jdoucích cyklech a klesající míru berte jako
varovný signál hodný přímého prošetření, podobně jako signál důvěry probíraný v
tématu 3.2. Klesající míra odpovědí často značí únavu z průzkumů, narušenou
důvěru, že výsledky vedou k činům, nebo rostoucí podezření, že anonymita
není skutečně chráněna, a cokoli z toho zaslouží přímé prošetření, ne
odbytí jako pouhé nepohodlí při sběru dat.

### Kombinujte data z průzkumu s objektivní instrumentací DevEx

Spojte subjektivní odpovědi z průzkumu s objektivními signály, kde existují:
doba sestavení, doba běhu sady testů, doba nastavení lokálního vývojového
prostředí a data o době toku a vyrušování z tématu 3.6. Odpověď v průzkumu
„naše sestavení je příliš pomalé“ se stává mnohem použitelnější ve spojení se
skutečně naměřeným trendem doby sestavení a kombinace zachytí případy, kdy se
vnímání a objektivní realita rozcházejí v obou směrech, což samo stojí za
prošetření.

### Uzavřete smyčku: zveřejněte výsledky a viditelnou následnou akci

Po každém cyklu průzkumu zveřejněte upřímné shrnutí výsledků, včetně výsledků,
které by vedení raději nezdůrazňovalo, a veřejně se zavažte k alespoň jedné
konkrétní akci, která na jejich základě proběhla. Průzkum bez viditelného
následku učí respondenty, že na jejich upřímném vstupu nezáleží, což zhoršuje
míru i upřímnost odpovědí v každém dalším cyklu. Tato disciplína uzavírání
smyčky je často tím nejdůležitějším určujícím faktorem, zda program průzkumů
DevEx zůstane užitečný po několik let, nebo pomalu zdegeneruje v odškrtávací
cvičení.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Dlouhý, komplexní průzkum | Bohatá, podrobná data napříč mnoha tématy | Nižší míra odpovědí, vyšší únava, víc prostoru pro špatně navržené otázky |
| Krátký, zaměřený průzkum | Vyšší míra odpovědí, snáz se dobře navrhuje | Menší pokrytí; může minout nově se objevující problém mimo zvolené zaměření |
| Samotná data z průzkumu | Zachycují subjektivní zkušenost přímo | Náchylná ke zkreslení a nelze je ověřit proti objektivní realitě |
| Průzkum spojený s objektivní instrumentací | Zachytí rozpor mezi vnímáním a realitou, použitelnější | Vyžaduje víc úsilí při integraci dat |

Ústředním napětím je **pokrytí versus kvalita odpovědí**. Delší, komplexnější
průzkum pokryje víc, ale zhoršuje míru odpovědí a zvyšuje riziko, že proklouznou
špatně navržené otázky. Krátký, zaměřený průzkum získá kvalitnější odpovědi, ale
hrozí, že mine něco důležitého mimo svůj rozsah. Napětí řešte tak, že hlavní,
opakovaný průzkum udržíte krátký a dobře vyzkoušený a pro konkrétní témata,
která potřebují podrobnější zkoumání, použijete příležitostné, jasně označené
hloubkové průzkumy, místo abyste se snažili pokrýt všechno v každém cyklu.

## Otázky k diskusi s vaším týmem

1. **Vyzkoušeli jsme někdy novou otázku průzkumu na malé skupině, než jsme ji
   nasadili plošně, nebo nové otázky jdou rovnou do plného průzkumu?**
   Přeskočení pilotu je častý způsob, jak nejednoznačné nebo dvojité otázky
   poškodí celou sadu dat, dřív než si někdo všimne, že formulace byla
   nejasná.

2. **Co se s naší mírou odpovědí dělo za posledních několik cyklů průzkumu a
   prošetřili jsme pokles, pokud nastal?** Berte tento trend jako skutečný
   signál hodný diskuse, ne jen obtíž při sběru dat, kterou lze mimochodem
   zmínit.

3. **Kombinujeme data z průzkumu s nějakou objektivní instrumentací, nebo
   subjektivní vnímání v našem reportování stojí zcela samo?** Najděte
   alespoň jedno místo, kde by spojení otázky z průzkumu s objektivními daty,
   dobou sestavení nebo frekvencí nasazení, mohlo výsledek učinit použitelnějším.

4. **Jakou konkrétní akci jsme podnikli jako přímý, viditelný důsledek posledního
   cyklu průzkumu a sdělili jsme ji zpět respondentům?** Pokud je upřímná
   odpověď „nic viditelného“, ta mezera už pravděpodobně podkopává důvěru v
   nástroj, ať už se to projevilo v míře odpovědí, nebo ne.

5. **Jsou některé z našich současných otázek sugestivní nebo dvojité a poznali
   bychom to?** Projděte skutečné současné otázky proti tomuto konkrétnímu
   testu jako skupinové cvičení.

6. **Jak se naše data z průzkumů DevEx nebo SPACE srovnávají s objektivními
   signály, když se zdá, že si odporují, a co nám ten rozpor říká?** Případ,
   kdy se vnímání a objektivní data rozcházejí, je často diagnosticky
   cennější než případ, kdy se shodují, protože samotná mezera je
   informativní.

## Pohled podle sektorů

**Startup.** Jednoduchý, velmi krátký rychlý průzkum, někdy jen jedna nebo dvě
otázky, prováděný neformálně a často, je v tomto měřítku obvykle dostatečný a
formální přísnost návrhu nástroje je méně důležitá, když zakladatel může stále
pravidelně přímo mluvit téměř s každým.

**Malá firma.** Bezplatný nebo levný nástroj pro průzkumy s krátkou upravenou
sadou otázek, spouštěný čtvrtletně, zachytí většinu hodnoty bez nutnosti
specializované odbornosti v návrhu průzkumů. Upřednostněte disciplínu
uzavírání smyčky před sofistikovaností; i malý tým těží z viditelného jednání
podle toho, co krátký průzkum odhalí.

**Velký podnik.** Kvalita návrhu průzkumu je ve velkém měřítku nesmírně důležitá,
protože vadná otázka nebo porušená záruka anonymity poškodí data napříč tisíci
respondentů najednou a výsledné sebejistě chybné závěry mohou špatně nasměrovat
významná rozhodnutí o zdrojích. Investujte do skutečné odbornosti v návrhu
průzkumů nebo se spojte se zavedenou platformou pro měření DevEx, místo abyste
interně budovali ad hoc nástroj.

**Státní správa.** Míra odpovědí a důvěra jsou obzvlášť křehké v organizacích,
kde si zaměstnanci už mohou dávat pozor na to, jak se s daty uvnitř zachází.
Investujte nadstandardně do průhledných záruk anonymity a viditelné následné
akce, právě abyste vybudovali důvěru, která činí upřímnou míru odpovědí
dosažitelnou v kontextu, kde skepse k užití dat může být vyšší než v typickém
soukromém sektoru.

## Příklady

**Velký podnik.** První průzkum DevEx jedné softwarové firmy obsahoval otázku,
v níž měli inženýři ohodnotit „spokojenost s nástroji a procesem“, dvojitou
otázku, která slévala dvě velmi odlišné starosti. Když se kombinované skóre
vrátilo průměrné, vedení nedokázalo říct, zda je problém v nástrojích, procesu,
nebo v obou, a počáteční nápravná opatření mířila dvě čtvrtletí do špatné
oblasti. Rozdělení otázky v následující revizi ukázalo, že skóre nástrojů je
vlastně silné a skóre procesu slabé, což přesměrovalo investice ke zjednodušení
těžkopádného procesu schvalování vydání, který přinesl měřitelné zlepšení
spokojenosti během jednoho čtvrtletí, na rozdíl od dřívějšího úsilí zaměřeného
na nástroje, které ukázalo malý efekt.

**Státní správa.** První průzkum DevEx jedné národní digitální agentury měl míru
odpovědí pod 30 % a interní revize zjistila, že zaměstnanci široce věřili,
jak se ukázalo správně, že jednotliví manažeři vidí, kdo odpověděl a kdo ne,
přestože agregované výsledky měly být anonymní. Agentura přešla na skutečně
nezávislou platformu třetí strany s ověřenou anonymitou, změnu výslovně a
opakovaně sdělila a zveřejnila jasné shrnutí výsledků předchozího cyklu spolu
se třemi konkrétními akcemi, které na jejich základě podnikla. Míra odpovědí
vzrostla během dvou cyklů na více než 70 % a vedení agentury připsalo obnovu
důvěry v nástroj právě kombinaci skutečné anonymity a viditelné následné akce.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností dobře navrženého programu průzkumů DevEx jsou důvěryhodná,
použitelná data o dimenzi, zkušenosti vývojářů, která jinak zůstává
neviditelná, dokud se neprojeví jako odchody nebo zpomalení dodávky. Příklad
softwarové firmy výše ukazuje cenu špatného návrhu: dvě čtvrtletí
nasměrovaného nápravného úsilí na špatné místo, protože jediná špatně
formulovaná otázka slévala dvě odlišné starosti.

Celkové náklady vlastnictví (TCO) zahrnují nástroje pro průzkumy, disciplínu
návrhu a pilotování, kterou toto téma doporučuje, a trvalý závazek uzavřít
smyčku viditelnou následnou akcí v každém cyklu. Právě tento závazek, víc než
jakékoli náklady na nástroje, určuje, zda program průzkumů zůstane užitečný
roky, nebo zdegeneruje v odškrtávací cvičení, které v čase vytváří stále méně
důvěryhodná data.

## Antivzory a úskalí

- **Dvojité nebo sugestivní otázky:** slévají odlišné starosti nebo zkreslují
  odpovědi a bez pilotování často zůstanou nepovšimnuty.
- **Přeskakování pilotu u nových otázek:** dovolí nejednoznačné formulaci
  poškodit celou sadu dat.
- **Ignorování klesající míry odpovědí:** míjí důležitý signál důvěry sám o
  sobě.
- **Nikdy neuzavřít smyčku viditelnou následnou akcí:** učí respondenty, že na
  upřímném vstupu nezáleží, a zhoršuje kvalitu budoucích dat.
- **Brát data z průzkumu za dostatečná sama o sobě, bez objektivního
  potvrzení:** míjí případy, kdy se vnímání a realita rozcházejí v obou směrech.
- **Slabé nebo neověřitelné záruky anonymity:** nejrychlejší způsob, jak
  zhroutit míru i upřímnost odpovědí.

## Model zralosti

- **Úroveň 1, Zahájení:** Otázky průzkumu jsou ad hoc a nevyzkoušené, míra
  odpovědí se nesleduje jako signál a výsledky zřídka vedou k viditelné akci.
- **Úroveň 2, Rozvoj:** Určitá disciplína návrhu průzkumu existuje, ale
  pilotování je nekonzistentní a smyčka s respondenty se spolehlivě neuzavírá.
- **Úroveň 3, Standardizace:** Otázky se před nasazením pilotují, míra odpovědí se
  sleduje a při poklesu prošetřuje a výsledky se důsledně zveřejňují s alespoň
  jednou konkrétní následnou akcí.
- **Úroveň 4, Řízení:** Data z průzkumu se systematicky spojují s objektivní
  instrumentací a rozpor mezi nimi se aktivně zkoumá jako diagnostický signál.
- **Úroveň 5, Orchestrace:** Organizace má zralý, důvěryhodný, víceletý program
  průzkumů s trvale vysokou mírou odpovědí, prokazatelnou viditelnou akcí z
  každého cyklu a historií zachycování a opravování špatně navržených otázek,
  než poškodí data.

## Náměty k diskusi

1. Zmátla nebo zavedla některá současná otázka v našem nástroji někdy respondenta v omyl?
2. Jaká byla poslední konkrétní akce, kterou jsme podnikli jako přímý důsledek dat z průzkumu?
3. Jak bychom poznali, že naše záruka anonymity byla porušena, i nedopatřením?
4. Kde se naše data z průzkumu shodují nebo neshodují s objektivní instrumentací a co nám to říká?
5. Co by bylo potřeba k tomu, abychom zdvojnásobili současnou míru odpovědí?

## Hlavní poznatky

- **Kvalita návrhu** průzkumu, jasné, jednopojmové, nezkreslené otázky, je
  důležitější než délka nebo sofistikovanost.
- **Míra odpovědí je sama signál**; pokles prošetřete, místo abyste ho brali
  jako pouhé nepohodlí.
- **Kombinujte data z průzkumu s objektivní instrumentací**, abyste zachytili
  rozpor mezi vnímáním a realitou.
- **Uzavřete smyčku**: v každém cyklu zveřejněte výsledky a viditelnou následnou
  akci, jinak důvěra v nástroj zeslábne.
- **DevEx a SPACE jsou doplňková**, ne konkurenční rámování téže základní
  starosti o zkušenost vývojářů.

## Odkazy a další četba

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren a Michaela Greiler,
  „DevEx: What Actually Drives Productivity“, *ACM Queue* (2023): rámec
  DevEx se zpětnovazebními smyčkami, kognitivní zátěží a stavem plynulosti.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, Jeff Lawson (investice organizace do zkušenosti
  vývojářů).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, Louis M.
  Rea a Richard A. Parker (obecná metodika návrhu průzkumů použitelná pro
  nástroje DevEx).
