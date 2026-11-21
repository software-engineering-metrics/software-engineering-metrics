# 2.5 Efektivita toku a rozpracovaná práce

## Přehled a motivace

**Efektivita toku** je poměr aktivního času k celkovému času u kusu práce: pokud
změna stráví deset hodin aktivním kódováním, revizí a testováním, ale celkem
devadesát hodin během celé cesty nečinně leží ve frontách, je efektivita toku
10 %. Většina dodacích pipeline měřených poctivě skončí někde mezi 10 % a 25 %
efektivity toku, což překvapí lidi, kteří očekávají, že bude dominovat úsilí.
Dominantní cenou ve většině dodacích systémů není to, jak dlouho práce trvá, ale
jak dlouho čeká, než se začne.

**[Rozpracovaná práce](https://en.wikipedia.org/wiki/Work_in_process)** (WIP) je
počet položek, na kterých se v daném okamžiku aktivně pracuje, napříč týmem
nebo systémem, tedy tatáž veličina, kterou téma 2.4 nazývá „zatížení toku“.
Neintuitivní zjištění za tímto tématem, podložené desetiletími výzkumu v řízení
provozu a formalizované pro dodávání softwaru pomocí kanbanu a teorie front, je,
že omezení WIP zpravidla *zvyšuje* propustnost, nesnižuje ji, protože méně práce
rozpracované najednou znamená méně přepínání kontextu, kratší fronty a rychlejší
dokončení každé položky, přestože se zdá, že souběžně dělat méně práce by mělo
vyrobit celkově méně.

U velkých týmů pochopení efektivity toku přerámcuje téměř každý dodací problém z
„lidé musí pracovat rychleji“ na „práce musí méně čekat“. Toto přerámcování je
důležité, protože první pojetí zve k tlaku na jednotlivce, přesně té pasti, před
níž varuje téma 2.6, zatímco druhé zve k zkoumání struktury front, kapacity
revizí a toho, kolik práce se zahajuje současně, kde obvykle leží skutečné,
udržitelné zlepšení. Velké podniky žonglující mnoha souběžnými iniciativami
napříč sdílenými týmy jsou obzvlášť náchylné k vysokému WIP a nízké efektivitě
toku, protože zahájení nové práce vždy působí jako pokrok, i když tiše zpomaluje
vše, co už je rozpracované.

## Klíčové zásady

- **Čekací čas, ne aktivní úsilí, dominuje většině dodacích pipeline.**
  Efektivita toku pod 25 % je typická, ne znamení rozbitého týmu.
- **Omezení rozpracované práce zpravidla zvyšuje propustnost,** nesnižuje ji,
  protože snižuje přepínání kontextu a zkracuje fronty.
- **Zahájení nové práce působí jako pokrok; dokončení práce je to, co skutečně
  dodává hodnotu.** Není to totéž a organizace je běžně zaměňují.
- **Vysoký WIP je často neviditelný, dokud se neměří.** Tým může žonglovat
  mnohem víc souběžné práce, než si kdokoli jednotlivě uvědomuje.
- **Je to metrika na úrovni systému, ne jednotlivce.** Uplatňovat limity WIP k
  trestání jednotlivců špatně chápe celý smysl techniky.

## Doporučení

### Změřte efektivitu toku dřív, než předpokládáte, že úsilí je úzké hrdlo

Spočítejte poměr aktivního času k celkovému uplynulému času pro reprezentativní
vzorek nedávných změn s použitím dat o fázích cycle time z tématu 2.6. Většina
týmů, které to měří poprvé, je překvapena, jak nízké číslo je, a toto překvapení
je samo cenné: přesměruje pozornost z „pracujte víc“ na „snižte fronty“, což je
téměř vždy produktivnější páka.

### Stanovte výslovný limit rozpracované práce a viditelně ho vymáhejte

Omezte počet položek, které může tým nebo jednotlivec mít současně aktivně
rozpracované, viditelně na sdílené tabuli (fyzická nebo digitální kanbanová tabule
je klasickou implementací). Když je limit dosažen, další akcí týmu je pomoci
dokončit něco, co už je rozpracované, ne zahájit něco nového. Tato jediná praxe,
převzatá ze štíhlé výroby a formalizovaná v kanbanu, je jedním z nejkonzistentněji
účinných zlepšení toku, jež softwarový tým má, a implementace stojí téměř nic.

### Berte limit WIP jako omezení systému, ne kvótu jednotlivce

Limit WIP řídí, kolik práce má *systém* (tým, sdílená fronta revizí, sdílené
prostředí) rozpracované najednou, ne kolik toho smí kdokoli jednotlivě
zpracovávat. Uplatnění limitu jako individuální výkonové kvóty, „smíte mít
otevřené jen dva tikety“, techniku zneužívá a riskuje právě ten druh
manipulace na úrovni jednotlivce, před kterým tato kniha všude varuje. Limit
existuje, aby chránil tok celým systémem, a jeho vymáhání má být normou týmu, ne
osobním stropem.

### Zkoumejte, proč práce nečinně leží, ne jen jak dlouho

Když analýza efektivity toku odhalí dlouhé čekací časy, ptejte se konkrétně
proč: čeká práce, protože recenzent není k dispozici, protože je zarezervované
sdílené testovací prostředí, protože ještě nedorazila závislost na jiném týmu.
Každá z těchto příčin má jinou nápravu. Obecný pokyn „snižte čekací čas“ bez
tohoto konkrétního zkoumání obvykle vyvolá obecné, neúčinné reakce.

### Hlídejte, aby WIP po počátečním zlepšení znovu nenarůstal

Týmy, které úspěšně přijmou limit WIP, často vidí, že časem eroduje, jak se vrací
tlak na zahájení nových iniciativ, „jen tentokrát, musíme zahájit i tuhle
naléhavou věc“. Každou výjimku z limitu WIP berte jako záměrné, viditelné
rozhodnutí s uvedeným důvodem, ne jako tichou, běžnou obcházku, aby disciplína
limitu tiše nechátrala zpět do původního stavu.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádný limit WIP | Působí pružně; žádné tření při zahájení nové práce | Přepínání kontextu a fronty tiše vše zpomalují |
| Limit WIP na úrovni týmu | Měřitelně zlepšuje propustnost a efektivitu toku | Vyžaduje disciplínu při vymáhání, zvlášť pod tlakem termínů |
| Individuální kvóta WIP | Jednoduchá k vyslovení | Technika se zneužívá; riziko manipulace jednotlivců |
| Přísný, neústupný limit WIP | Maximální přínos pro efektivitu toku | Může působit strnule ve skutečně naléhavých, výjimečných situacích |

Hlavním napětím je **pružnost versus tok**. Zahajovat novou práci vždy, když se zdá
naléhavá, působí jako rychlá odezva, ale výzkum efektivity toku a WIP
konzistentně ukazuje, že tato pružnost se platí tím, že se nic nedokončí
rychle, protože víc souběžné práce znamená delší fronty a víc přepínání
kontextu u všeho, co je už rozpracované. Řešte to tak, že jako výchozí přijmete
limit WIP na úrovni týmu se záměrným, viditelným a vzácným procesem výjimek pro
skutečné nouzové situace, ne ani strnulé pravidlo bez výjimek, ani neomezenou,
pružnou anarchii.

## Otázky k diskusi s vaším týmem

1. **Jaká je naše skutečná efektivita toku, změřená ze skutečných dat o cycle
   time, a překvapuje nás to číslo?** Většina týmů to nikdy nepočítala a
   předpokládá, že je mnohem vyšší, než se ukáže. Vezměte vzorek nedávných
   změn a spočítejte poměr poctivě, než budete probírat cokoli dalšího z tohoto
   tématu.

2. **Kolik rozpracované práce máme právě teď, napříč celým týmem, a věděl
   někdo to číslo, než jsme to spočítali?** Vysoký WIP je často neviditelný,
   dokud se výslovně neměří, protože každý jednotlivec vidí jen svůj výsek.
   Spočítejte vše, co je právě rozpracované, včetně práce, na které dnes nikdo
   aktivně nepracuje.

3. **Kdybychom přijali limit WIP, co by se muselo změnit na tom, jak reagujeme na
   nový naléhavý požadavek?** Tato otázka odhalí skutečný organizační návyk,
   reflexivní zahajování nové práce, který má limit WIP přerušit, a stojí za
   to ji probrat před, ne po pokusu limit vymáhat.

4. **Když práce v naší pipeline nečinně leží, jaký je konkrétní důvod a je to
   pokaždé stejný důvod?** Obecný pocit, že „věci čekají“, je méně užitečný
   než konkrétní, opakující se příčina: nedostupný recenzent, zarezervované
   sdílené prostředí, závislost mezi týmy. Pojmenujte skutečný vzorec z
   nedávných reálných příkladů.

5. **Přijali jsme někdy limit WIP a pak sledovali, jak tiše eroduje skrze
   výjimky?** Je to nesmírně časté a stojí za poctivou diskusi: jaký tlak
   způsobil první výjimku a staly se výjimky novou normou, aniž by o tom někdo
   výslovně rozhodl.

6. **Měl by se limit WIP v našem kontextu uplatnit na úrovni jednotlivce, týmu, nebo
   sdíleného zdroje (jako fronta revizí nebo testovací prostředí)?** Různá úzká
   hrdla vyžadují limity na různých úrovních a uplatnění limitu na špatné
   úrovni, individuální kvóty místo stropu sdílené fronty, může celou techniku
   zneužít.

## Pohled podle sektorů

**Startup.** S málem lidí je WIP často přirozeně nízký prostě proto, že není dost
inženýrů, aby zahájili mnoho práce najednou. Rizikem je opak: zakladatel nebo
vedoucí inženýr osobně žonglující mnohem víc souběžnými iniciativami, než si
uvědomuje, což stojí za měření i bez formálních nástrojů kanbanu.

**Malá firma.** Jednoduchá viditelná tabule, fyzická nebo základní digitální
nástroj, s výslovným limitem sloupce stačí k získání většiny přínosu bez
investice do sofistikovaných nástrojů pro metriky toku. Začněte velkorysým
limitem a postupně ho zpřísňujte, jak si tým na disciplínu zvyká.

**Velký podnik.** Vysoký WIP je tady obzvlášť častý a obzvlášť nákladný, protože
mnoho souběžných strategických iniciativ soupeří o stejnou sdílenou inženýrskou
kapacitu a zahájení nové vždy vypadá jako pokrok pro toho, kdo ji sponzoroval.
Učiňte WIP viditelným na úrovni portfolia, nejen týmu, aby vedení vidělo cenu
zahájení další iniciativy dřív, než se dokončí ty současné.

**Státní správa.** Víceleté programy často hromadí obrovský implicitní WIP napříč
mnoha pracovními proudy, z nichž každý je jednotlivě zdůvodněn, bez viditelnosti
celkového součtu v celé organizaci. Zavedení viditelnosti WIP na úrovni
portfolia, i neformální, je často nejpřesvědčivějším argumentem pro řazení práce
do sledu místo spouštění všeho paralelně, protože cena vysokého WIP v efektivitě
toku se po změření viditelně sčítá.

## Příklady

**Velký podnik.** Platformní tým finanční firmy žongloval osmnácti souběžnými
iniciativami s pouhými dvanácti inženýry, což byl poměr WIP ke kapacitě, který
nikdo nespočítal, dokud o něj nový ředitel inženýrství nepožádal přímo.
Efektivita toku napříč prací týmu byla pod 12 %. Tým přijal výslovný limit WIP
jedné aktivní iniciativy na dva inženýry a záměrně pozastavil několik
iniciativ s nižší prioritou, místo aby kapacitu dál tence rozprostíral.
Propustnost, měřená jako skutečně dokončené iniciativy za čtvrtletí, se během
dvou čtvrtletí více než zdvojnásobila, přestože tým v kterémkoli okamžiku viditelně
„dělal méně“.

**Státní správa.** Program digitální transformace národní infrastrukturní
agentury nahromadil přes čtyřicet souběžných pracovních proudů napříč svým
portfoliem, každý s vlastním sponzorem a vlastním zdůvodněním, bez jednotného
pohledu na celkovou rozpracovanou práci. Revize efektivity toku na úrovni
programu zjistila, že mediánový pracovní proud strávil méně než 15 % uplynulého
času aktivním vývojem a zbytek čekal na sdílené zdroje: malý centrální tým pro
revizi architektury, sdílené testovací prostředí a schvalování napříč
agenturami. Program zavedl výslovné limity WIP na úrovni portfolia, pracovní
proudy řadil do sledu místo spouštění všech čtyřiceti paralelně a vlastní
sledování agentury ukázalo měřitelně rychlejší dokončování u pracovních proudů,
které zůstaly aktivní, i když celkový počet běžících najednou prudce klesl.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost záměrného řízení efektivity toku a WIP je neintuitivní, ale dobře
zdokumentovaná: propustnost zpravidla roste, ne klesá, když organizace dělá
méně najednou, protože méně přepínání kontextu a kratší fronty znamenají, že
každý kus práce skončí rychleji. Výše uvedený příklad finanční firmy,
zdvojnásobená propustnost záměrným snížením souběžné práce, je častým vzorcem,
jakmile organizace efektivitu toku skutečně měří a jedná podle ní, místo aby
předpokládala, že víc paralelní práce vždy znamená víc pokroku.

Celkové náklady vlastnictví (TCO) přijetí této disciplíny jsou většinou
organizační, ne technické: viditelná tabule, dohodnutý limit WIP a disciplína
odmítnout zahájení nové práce, když je limit dosažen. Tuto disciplínu je těžší
udržet než přijmout, a proto je doporučení „hlídejte, aby WIP znovu
nenarůstal“ výše stejně důležité jako samotné počáteční přijetí.

## Antivzory a úskalí

- **Předpokládat, že aktivní úsilí dominuje době dodání, bez měření efektivity
  toku:** obvykle špatně a obrací úsilí o zlepšení k nesprávné páce.
- **Uplatňovat limit WIP jako individuální kvótu místo omezení systému:**
  technika se zneužívá a hrozí manipulace jednotlivců.
- **Reflexivně zahajovat novou práci, protože působí jako pokrok:** základní
  návyk, který mají efektivita toku a limity WIP přerušit.
- **Nechat výjimky z limitu WIP stát se běžnými a neviditelnými:** disciplína
  eroduje zpět do původního stavu, aniž by o tom někdo záměrně rozhodl.
- **Měřit WIP jen na úrovni týmu a přehlédnout přetížení na úrovni portfolia:**
  časté ve velkých organizacích provozujících mnoho souběžných strategických
  iniciativ.
- **Považovat nízké číslo efektivity toku za znamení špatného týmu:** je
  typické pro většinu dodacích pipeline a je výchozím bodem zkoumání, ne
  verdiktem.

## Model zralosti

- **Úroveň 1, Zahájení:** Rozpracovaná práce se nesleduje; týmy reflexivně
  zahajují novou práci bez přehledu o celkovém souběžném zatížení.
- **Úroveň 2, Rozvoj:** Některé týmy používají neformální tabuli, ale limity WIP
  se nevymáhají konzistentně a efektivita toku se nikdy nepočítá.
- **Úroveň 3, Standardizace:** Týmy mají výslovné, viditelné limity WIP na úrovni
  systému a efektivita toku se periodicky měří ze skutečných dat o cycle time.
- **Úroveň 4, Řízení:** Výjimky z limitu WIP se sledují jako záměrná, viditelná
  rozhodnutí; efektivita toku se monitoruje na erozi v čase a při poklesu se
  prošetřuje.
- **Úroveň 5, Orchestrace:** WIP je viditelný a řízený na úrovni portfolia, ne
  jen týmu, a organizace dokáže ukázat konkrétní zlepšení propustnosti, která
  vzešla ze záměrného snížení souběžné práce.

## Náměty k diskusi

1. Jaká je naše skutečná efektivita toku, spočítaná poctivě ze skutečných dat?
2. Kolik rozpracované práce máme nyní, kterou nikdo před touto diskusí nespočítal?
3. Čemu bychom museli říct ne, abychom vymohli skutečný limit WIP?
4. Jaký je nejčastější jednotlivý důvod, proč práce v naší pipeline nečinně leží?
5. Kde v naší organizaci je WIP na úrovni portfolia neviditelný a pravděpodobně
   příliš vysoký?

## Hlavní poznatky

- **Efektivita toku**, poměr aktivního času k celkovému času, bývá v reálných
  dodacích pipeline typicky pod 25 %; dominuje čekací čas, ne úsilí.
- **Omezení rozpracované práce zpravidla zvyšuje propustnost,** nesnižuje ji,
  protože snižuje přepínání kontextu a zkracuje fronty.
- Uplatňujte **limit WIP jako omezení systému**, nikdy jako individuální kvótu.
- Zkoumejte **konkrétní důvod**, proč práce nečinně leží, místo obecného pokynu
  „snižte čekací čas“.
- Hlídejte, aby limity WIP **neerodovaly běžnými výjimkami**; každou výjimku
  berte jako záměrné, viditelné rozhodnutí.
- Téma 2.4 tuto veličinu nazývá **zatížení toku** a téma 2.7 formalizuje vztah
  jako Littleův zákon: rozpracovaná práce se rovná intenzitě příchodů krát cycle
  time, pro každou stabilní frontu.

## Odkazy a další četba

- *The Principles of Product Development Flow*, Donald G. Reinertsen (teorie
  front, velikost dávky a limity WIP ve vývoji produktů).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, David
  J. Anderson (základní text o limitech WIP a toku pro softwarové týmy).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti (měření
  efektivity toku a předpovídání založené na toku).
- *The Goal*, Eliyahu M. Goldratt (teorie omezení a neintuitivní vztah mezi
  lokální zaneprázdněností a propustností systému).
