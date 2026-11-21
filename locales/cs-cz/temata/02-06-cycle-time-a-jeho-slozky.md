# 2.6 Cycle time a jeho složky

## Přehled a motivace

**Cycle time** (doba cyklu) je vnitřní rozklad doby toku změny (téma 2.4) na její
inženýrské fáze: čas kódování, čas revize, čas testování a čas nasazení, někdy
dále rozdělený na čas převzetí (jak dlouho změna čeká, než na ní někdo začne
pracovat) a aktivní čas (jak dlouho trvá, jakmile někdo začne). Zatímco doba
toku dává jediné číslo o tom, jak dlouho změna trvá od začátku do konce celým
hodnotovým proudem, [cycle time](https://en.wikipedia.org/wiki/Cycle_time) říká,
kam ten čas skutečně odchází, jakmile se změna dostane k inženýrství, což je
diagnostická vrstva, o které téma 2.4 slíbilo, že leží pod jeho souhrnným číslem.

Toto rozlišení je důležité, protože „lead time je příliš dlouhý“ samo o sobě není
použitelné. Tým, jehož lead time dominuje čas kódování, potřebuje jiný zásah než
tým, jehož lead time dominuje třídenní fronta revizí, a ten zase jiný než tým,
který většinu času ztrácí s nestabilní, pomalou sadou testů. Bez rozkladu cycle
time týmy hádají, kde je úzké hrdlo, a odhad bývá dost často špatný, takže oprava
nesprávné fáze plýtvá skutečným úsilím, zatímco skutečné omezení zůstává
nedotčeno.

U velkých týmů je rozklad cycle time tím, co mění celoorganizační regresi lead
time ze záhady na konkrétní, řešitelný problém. Když desítky týmů sdílejí
společnou infrastrukturu, sdílené úzké hrdlo revizí nebo sdílená pomalá pipeline
CI může táhnout lead time každého týmu dolů stejně a jen srovnání cycle time
napříč týmy odhalí tuto sdílenou kořenovou příčinu, místo aby každý tým
nezávisle hádal vlastní lokální vysvětlení.

## Klíčové zásady

- **Cycle time vysvětluje lead time; nenahrazuje ho.** Vykazujte oba společně,
  cycle time jako diagnostiku a lead time jako souhrn.
- **Čekací čas obvykle dominuje aktivnímu času.** Většina zpoždění v dodávání
  softwaru pochází z práce nečinně ležící ve frontě, ne z aktivního úsilí
  (téma 2.5 to pokrývá přímo prostřednictvím efektivity toku).
- **Rozložte podle fází dřív, než navrhnete nápravu.** Náprava zaměřená na
  špatnou fázi plýtvá úsilím a může demoralizovat tým, který je požádán, aby
  „pracoval rychleji“, když skutečné úzké hrdlo bylo jinde.
- **Sdílené úzké hrdlo napříč mnoha týmy je příležitostí k platformní
  investici,** nejen sérií problémů jednotlivých týmů.
- **Data o cycle time jsou vystavena stejným rizikům manipulace jako doba toku**
  (téma 2.4): hlídejte hranice fází, které se tiše posouvají, aby číslo
  lichotilo.

## Doporučení

### Instrumentujte každou hranici fáze výslovně

Rozdělte cestu změny na pojmenované fáze s jasnými, instrumentovatelnými
hranicemi: kódování (od prvního commitu po otevření pull requestu), převzetí (od
otevření pull requestu po první revizi), revize (od první revize po schválení) a
nasazení (od schválení po produkci). Zachycujte časová razítka každého přechodu
automaticky z událostí správy verzí a CI/CD, ne ze sledování fází vlastním
hlášením, podle téhož principu instrumentace před vlastním hlášením z tématu
1.5.

### Oddělte čekací čas od aktivního času v každé fázi

Například v rámci revize odlište čas, kdy pull request leží nedotčený a čeká, až
recenzent začne (čekací čas), od času, který trvá aktivní revizní konverzace,
jakmile začne (aktivní čas). Toto rozlišení obvykle odhalí, že dominantní cenou
je řazení do fronty, ne úsilí, což ukazuje na velmi odlišnou nápravu (víc
kapacity recenzentů, lepší notifikace, menší pull requesty k revizi) než
nápravu zaměřenou na zrychlení samotných revizních konverzací.

### Hledejte sdílené úzké hrdlo dřív, než diagnostikujete tým po týmu

Když více týmů ukazuje jako dominantní zpoždění stejnou fázi, pomalou sdílenou
pipeline CI, přetížený sdílený fond recenzentů, řídce jezdící sdílený releasový
vlak, je tato sdílená příčina příležitostí k platformní investici, ne sérií
nesouvisejících lokálních problémů. Agregujte data o cycle time napříč týmy
právě kvůli hledání tohoto vzorce, než předpokládáte, že úzké hrdlo každého týmu
je pro tento tým jedinečné.

### Používejte cycle time ke stanovení realistických cílů zlepšení podle fází

Místo jediného cíle „snížit lead time o 20 %“, který týmu nedává žádnou
orientaci, kam se soustředit, použijte rozklad cycle time ke stanovení cíle
specifického pro fázi: „snížit mediánový čekací čas revize ze dvou dnů na čtyři
hodiny“. Konkrétní, na fázi zacílený cíl se týmu snáze realizuje a snáze se
ověřuje, že byl skutečně dosažen skutečnou procesní změnou, a ne nesouvisejícím
posunem jinde.

### Hlídejte manipulaci s hranicemi fází

Stejně jako se může posouvat počátek a konec doby toku (téma 2.4), mohou se
hranice jednotlivých fází cycle time posouvat způsoby, které lichotí číslu
konkrétní fáze bez skutečného zlepšení, například označení revize za „zahájenou“
ve chvíli, kdy je přidělen recenzent, místo kdy skutečně začne změnu číst.
Pravidelně auditujte instrumentaci hranic fází proti její zdokumentované
definici.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Hrubý cycle time (dvě nebo tři fáze) | Jednoduchý na instrumentaci i vysvětlení | Nemusí dost přesně určit skutečné úzké hrdlo, aby se dalo jednat |
| Jemný cycle time (mnoho fází, rozlišení čekání a aktivity) | Přesná diagnóza, použitelné cíle pro konkrétní fáze | Víc úsilí s instrumentací; víc čísel k udržování a vysvětlování |
| Revize cycle time tým po týmu | Přizpůsobená skutečnému pracovnímu postupu každého týmu | Může přehlédnout sdílené, mezitýmové úzké hrdlo skryté za podobnými lokálními čísly |
| Agregovaná revize cycle time napříč týmy | Odhaluje sdílená platformní úzká hrdla | Vyžaduje standardizované definice fází napříč týmy, aby měla smysl |

Hlavním napětím je **diagnostická přesnost versus náklady na instrumentaci**.
Jemnější sledování cycle time dává použitelnější diagnózu, ale stojí víc na
stavbu a údržbu a přidává víc čísel, kterým tým musí rozumět a důvěřovat.
Řešte to tak, že začnete hrubě (kódování, revize, nasazení) a jemnější členění,
čekání versus aktivita uvnitř konkrétní fáze, přidáte až tehdy, když je tato
fáze potvrzena jako skutečné, opakující se úzké hrdlo hodné další investice do
instrumentace.

## Otázky k diskusi s vaším týmem

1. **Kdyby se lead time dnes zhoršil, dokázali bychom do hodiny říci, která
   konkrétní fáze za to může, na základě dat, ne dohadů?** Je to základní test,
   zda vaše instrumentace cycle time skutečně slouží svému diagnostickému
   účelu. Pokud je poctivá odpověď ne, stojí za to tuto mezeru zacelit dřív, než
   přijde další regrese.

2. **Kolik zpoždění v naší dominantní fázi úzkého hrdla je čekací čas a kolik
   aktivní čas?** Většina týmů předpokládá, že omezením je aktivní úsilí, dřív
   než to zkontrolují, ačkoli větší cenou bývá fronta. Vytáhněte skutečné
   rozdělení pro svou nejpomalejší fázi a ověřte, zda předpoklad platí.

3. **Sdílí více týmů stejnou dominantní fázi úzkého hrdla, což naznačuje opravu
   na úrovni platformy místo týmu?** Agregujte svá data o cycle time napříč týmy
   a hledejte tento vzorec výslovně, než předpokládáte, že pomalost každého týmu
   má lokální příčinu.

4. **Stanovili jsme cíle zlepšení pro konkrétní fáze, nebo jen jediný celkový
   cíl lead time bez vodítka, kam se soustředit?** Vágní cíl nechává tým hádat,
   kam vynaložit úsilí; cíl pro konkrétní fázi ne. Zkontrolujte své současné
   cíle podle tohoto rozlišení.

5. **Posunula se některá hranice fáze cycle time v naší instrumentaci časem od
   své zdokumentované definice?** Hranice fází jsou vystaveny stejnému
   definičnímu driftu jako samotná doba toku (téma 2.4). Auditujte vzorek
   nedávných událostí přechodu fází proti psané definici.

6. **Jak se kultura silně založená na revizích versus kultura silně založená na
   důvěře projevuje odlišně v našich datech o cycle time?** Tým s velmi důkladnou,
   vícekolovou revizí ukáže delší čas fáze revize než tým, který důvěřuje
   sloučení po jediném schválení; diskutujte, zda vaše současná rovnováha
   odráží záměrnou volbu, nebo nezkoumaný výchozí stav.

## Pohled podle sektorů

**Startup.** Cycle time obvykle dominuje čas kódování spíš než fáze revize nebo
nasazení, prostě proto, že proces je minimální. Jakmile tým přeroste hrstku
inženýrů, začněte sledovat konkrétně čekací čas revize, protože je to obvykle
první fáze, která se zpomalí, když práce víc lidí musí projít méně dostupnými
recenzenty.

**Malá firma.** Základní analytika platformy správy verzí obvykle odhaluje dost
časování na úrovni fází (čas do první revize, čas do sloučení) bez vlastní
instrumentace. Soustřeďte se nejdřív na fázi revize, protože je nejčastějším
raným úzkým hrdlem a nejsnáze se opravuje malou procesní změnou, například
střídáním recenzentů.

**Velký podnik.** Sdílená úzká hrdla napříč desítkami týmů jsou častá a jejich
nalezení je velmi účinné: jediná přetížená sdílená fronta CI nebo povinný
centrální revizní krok může tiše zdaňovat lead time v celé organizaci. Investujte
konkrétně do agregace cycle time napříč týmy, aby se tato sdílená omezení
odhalila, místo aby každý tým diagnostikoval nezávisle.

**Státní správa.** Data o cycle time jsou silným, konkrétním nástrojem k
zdůvodnění modernizace procesů před skeptickými zainteresovanými stranami,
protože „čekací čas revize je v průměru čtyři dny kvůli jediné úzce vytížené
schvalovací roli“ je mnohem přesvědčivější, konkrétnější argument pro investici
než abstraktní tvrzení „náš proces je pomalý“.

## Příklady

**Velký podnik.** Inženýrské vedení cloudové infrastrukturní firmy zaznamenalo,
že lead time roste téměř u všech týmů současně. Agregace cycle time napříč týmy
odhalila, že dominantní a sdílenou příčinou je čekací čas revize, ne aktivní čas
revize: malý, centralizovaný tým pro bezpečnostní revize se stal úzkým hrdlem,
protože počet týmů vyžadujících jeho schválení rostl rychleji než tým sám.
Rozšíření a vyškolení širšího fondu certifikovaných bezpečnostních recenzentů,
místo žádání jednotlivých týmů, aby nějak rychleji kódovaly nebo testovaly,
sdílené úzké hrdlo vyřešilo a lead time se během jednoho čtvrtletí vrátil dolů
napříč celou organizací.

**Státní správa.** Tým digitálních služeb státní vlády byl pod tlakem snížit
lead time a zpočátku reagoval tím, že žádal inženýry, aby pracovali rychleji,
což je přirozený, ale nakonec k ničemu nevedoucí instinkt. Rozklad cycle time
ukázal, že aktivní čas kódování se meziročně sotva změnil; téměř celá regrese
pocházela z rostoucí fronty v povinné fázi architektonické revize, zavedené před
osmnácti měsíci jako opatření souladu. Tým tuto revizi přepracoval na lehčí,
rizikově odstupňovaný proces pro změny s nízkým rizikem, čímž podstatně zkrátil
čekací čas revize a zachoval plnou přísnost revize u skutečně vysoce rizikových
změn.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností rozkladu cycle time je cílená, účinná investice: organizace, která
přesně ví, která fáze je úzké hrdlo, může opravit tuto konkrétní fázi, místo aby
rozprostřela úsilí tence přes celý proces v naději, že něco pomůže. Výše uvedený
příklad bezpečnostních revizí je typický: přesně zacílená oprava, rozšíření jednoho
konkrétního úzkého zdroje, vyřešila celoorganizační problém mnohem levněji než
široká, nesoustředěná iniciativa „zrychlit dodávání“.

Celkové náklady vlastnictví (TCO) jsou úsilí o instrumentaci pro spolehlivé
zachycení časových razítek na úrovni fází a trvající disciplína pravidelného
auditu hranic fází na drift. Tyto náklady stojí za to, protože alternativa,
hádání úzkých hrdel a oprava špatné fáze, plýtvá časem mnohem víc inženýrského
úsilí, než instrumentace sama stojí.

## Antivzory a úskalí

- **Reagovat na regresi lead time bez diagnózy cycle time:** často vede k
  opravě špatné fáze.
- **Předpokládat, že dominantní cenou je aktivní úsilí, ne čekací čas:**
  obvykle špatně; ve většině skutečných dodacích pipeline dominuje řazení do
  fronty (téma 2.5).
- **Přehlédnout sdílené, mezitýmové úzké hrdlo tím, že se cycle time revidují jen
  tým po týmu:** nechává neobjevenou účinnou platformní opravu.
- **Stanovit vágní celkový cíl lead time bez vodítka pro konkrétní fáze:** nechává
  týmy hádat, kam soustředit úsilí.
- **Definiční drift hranic fází:** lichotí číslu konkrétní fáze bez skutečného
  zlepšení.
- **Instrumentovat každou možnou jemnou fázi dřív, než se potvrdí, že některá z
  nich je skutečné úzké hrdlo:** plýtvá úsilím instrumentace na detail, který
  zatím neinformuje žádné rozhodnutí.

## Model zralosti

- **Úroveň 1, Zahájení:** Cycle time se vůbec nerozkládá; týmy hádají úzká hrdla,
  když se lead time zhorší.
- **Úroveň 2, Rozvoj:** Některé týmy sledují časování hrubých fází neformálně, ale
  chybí konzistentní instrumentace i srovnání mezi týmy.
- **Úroveň 3, Standardizace:** Hranice fází jsou konzistentně instrumentovány v
  celé organizaci, s čekacím časem odděleným od aktivního v dominantních fázích
  úzkého hrdla.
- **Úroveň 4, Řízení:** Agregace cycle time napříč týmy aktivně odhaluje sdílená
  úzká hrdla; cíle zlepšení pro konkrétní fáze nahrazují vágní celkové cíle lead
  time.
- **Úroveň 5, Orchestrace:** Data o cycle time přímo řídí prioritizaci
  platformních investic a organizace dokáže ukázat konkrétní, cílené opravy,
  rozšířený fond recenzentů, rychlejší sdílenou pipeline, které měřitelně
  zlepšily lead time u mnoha týmů najednou.

## Náměty k diskusi

1. Která je naše současná dominantní fáze úzkého hrdla a nakolik jsme si touto
   odpovědí jisti?
2. Kolik času této fáze úzkého hrdla je čekací čas a kolik aktivní čas?
3. Sdílejí některé z našich týmů stejné úzké hrdlo, což naznačuje opravu na
   úrovni platformy?
4. Kdy jsme naposledy stanovili cíl zlepšení dodávání pro konkrétní fázi, a ne
   celkový?
5. Změnila se někdy definice hranice fáze v našich nástrojích bez dokumentace?

## Hlavní poznatky

- Cycle time **rozkládá dobu toku** na inženýrské fáze, kódování, revize,
  testování, nasazení, a je diagnostickou vrstvou pod tímto souhrnným číslem.
- Oddělte **čekací čas od aktivního času** v každé fázi; řazení do fronty
  obvykle dominuje aktivnímu úsilí (téma 2.5).
- Hledejte **sdílená úzká hrdla napříč týmy**, než předpokládáte, že zpomalení je
  specifické pro tým; sdílená příčina je často příležitostí k platformní
  investici.
- Stanovujte **cíle zlepšení pro konkrétní fáze**, ne vágní celkové cíle, aby
  týmy přesně věděly, kam se soustředit.
- Hranice fází jsou vystaveny stejnému riziku **definičního driftu** jako
  samotná doba toku; pravidelně je auditujte.
- Téma 2.7 dává podkladovou matematiku, Littleův zákon, proč se rozpracovaná
  práce a cycle time pohybují společně.

## Odkazy a další četba

- *The Principles of Product Development Flow*, Donald G. Reinertsen (teorie
  front a uvažování o velikosti dávky, které stojí za analýzou cycle time).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti (měření
  cycle time a toku pro dodávání softwaru).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (lead time a jeho vztah k dodacímu výkonu).
- *The Goal*, Eliyahu M. Goldratt (teorie omezení a zásada hledat a opravovat
  skutečné úzké hrdlo místo optimalizace všude).
