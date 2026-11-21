# 2.8 Metriky hodnotového proudu podle Lean

## Přehled a motivace

Každá metrika, kterou tato část dosud probrala, doba toku, zatížení toku, cycle
time, vytížení, se odvozuje z mnohem staršího souboru nástrojů: pěti základních
měření klasického mapování hodnotového proudu podle **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**,
vyvinutých v Toyotě a zobecněných napříč výrobou, provozem a poskytováním služeb
dávno předtím, než je převzal software. **Lead time (LT, průběžná doba)** je
celkový hodinový čas od zadání práce po její dodání. **Procesní čas (PT)** je
skutečný praktický čas strávený prací na jediné jednotce. **Cycle time (CT)** je
průměrný čas potřebný k dokončení jediného uzlu nebo fáze v proudu. **Podíl
úplných a správných vstupů (%C/A)** je procento jednotek, které navazující tým
dokáže zpracovat bez potřeby předělávky. **Takt** je maximální přijatelný čas k
dokončení jednotky tak, aby čistě odpovídal poptávce zákazníků.

Toto téma existuje, protože softwarové inženýrství tyto myšlenky nevymyslelo,
vypůjčilo si je, a výpůjčka někdy znovu použila stejná slova pro mírně odlišné
věci. Cycle time této knihy (téma 2.6) měří konkrétně inženýrské fáze změny,
kódování, revizi, test, nasazení, zatímco klasický CT podle Lean je obecnější
„průměrný čas na uzel“ aplikovaný na jakýkoli proces. Doba toku (téma 2.4) je
název této knihy pro to, čemu Lean říká lead time. Znát toto mapování je
důležité, protože čtenář z prostředí Lean Six Sigma, běžného ve výrobě, logistice,
zdravotnictví a provozu státní správy, bude používat tyto přesné termíny s jejich
původními významy a softwarový tým, který nemluví stejným jazykem, přichází o
snadný, důkazy podložený most ke kolegům mimo inženýrství.

U velkých týmů je %C/A nejméně využívanou metrikou tohoto tématu. Zachycuje něco,
co metriky toku v tématech 2.3 a 2.4 ne: kolik z toho, co fáze vyprodukuje, je
skutečně použitelné další fází, aniž by se to vracelo zpět. Sečteno napříč
vícefázovým hodnotovým proudem, což je koncept, který výroba nazývá **kumulovaný
výtěžek** (rolled throughput yield), %C/A odhaluje, jak se předělávky skládají
neviditelně napříč předáními, což je vzorec, k němuž jsou velké podniky s
dlouhými, vícetýmovými pipeline a vládní programy s více schvalovacími branami
obzvlášť náchylné a zřídka ho měří přímo.

## Klíčové zásady

- **Těchto pět metrik předchází software a přesahuje ho.** Je to společná slovní
  zásoba, kterou zainteresovaná strana vyškolená v Lean Six Sigma, běžná ve
  velkých podnicích a v provozu státní správy, už plynule ovládá.
- **Kolize terminologie je skutečná a stojí za výslovné pojmenování.** Cycle time
  této knihy (téma 2.6) a klasický CT podle Lean spolu souvisejí, ale nejsou
  totožné; zdokumentujte mapování, aby se mezifunkční rozhovory tiše
  nemíjely.
- **%C/A se musí sčítat napříč každou fází, ne měřit jednou na konci.**
  Předělávka vzniklá brzy v proudu a zachycená pozdě je neviditelná pro metriku
  měřenou jen při konečném dodání.
- **Takt přerámcovává plánování kapacity kolem poptávky, ne úsilí.** Otázka se
  mění z „jak rychle můžeme jít“ na „jak rychle potřebujeme jít“, což přímo
  souvisí s vytížením (téma 2.7) a zatížením toku (téma 2.4).
- **Jsou to diagnostické metriky, ne metriky pro parádu.** Každá existuje, aby
  odpověděla na konkrétní provozní otázku, ne aby vyrobila působivé číslo na
  dashboard.

## Doporučení

### Zmapujte svůj hodnotový proud všemi pěti metrikami Lean, než přijmete softwarově specifický rámec

Spočítejte lead time, procesní čas, cycle time, %C/A a takt pro reprezentativní
vzorek práce pohybující se vaším hodnotovým proudem, dřív než nad ně navrstvíte
vlastní metriky Flow Frameworku (témata 2.3 a 2.4). Získáte tak výchozí hodnotu,
které okamžitě porozumí každá zainteresovaná strana znalá Lean Six Sigma, a
často se tím odhalí táž dominance čekacího času, kterou popisuje téma 2.5,
vyjádřená slovní zásobou, která předchází jakémukoli konkrétnímu softwarovému
rámci a přežije ho.

### Sčítejte podíl úplných a správných vstupů multiplikativně napříč každou fází

Měřte %C/A v každé fázi zvlášť a pak procenta jednotlivých fází navzájem
vynásobte, abyste získali kumulovaný výtěžek hodnotového proudu. Tři fáze, z nichž
každá má 90 % úplných a správných vstupů, se složí zhruba na 73 % celkem, číslo,
které se nepodobá hlášení žádné jednotlivé fáze a je obvykle poctivější. Tento
jediný výpočet je nejrychlejší způsob, jak odhalit, kolik předělávek vícefázová
pipeline skutečně pohlcuje.

### Stanovte takt výslovně ze skutečných dat o poptávce zákazníků, ne z kapacity

Spočítejte takt jako dostupný pracovní čas dělený poptávkou zákazníků za dané
období, záměrně nezávisle na tom, jak rychle může váš tým dnes pracovat.
Porovnejte svůj změřený procesní čas a cycle time s tímto číslem: procesní čas
pohodlně pod taktem znamená zdravou rezervu, zatímco cycle time přesahující takt
je konkrétním, kvantifikovaným důkazem nedostatku kapacity, ne jen pocitem, že
věci jsou pozadu.

### Zdokumentujte mapování mezi pojmy Lean a slovní zásobou této knihy

Kde vaše organizace už provozuje program Lean Six Sigma mimo software nebo kde
inženýrství podléhá vedení, které tuto slovní zásobu ovládá, zapište mapování
výslovně do své charty metrik (téma 1.4): doba toku této knihy je lead time podle
Lean, cycle time této knihy (téma 2.6) je konkrétní aplikací obecnějšího CT podle
Lean a aktivní čas této knihy (téma 2.5) je procesní čas podle Lean. Tento
jediný dokument předchází opakujícímu se, málo hodnotnému sporu o to, čí čísla
jsou „skutečná“.

### Používejte %C/A jako pojistku vedle rychlosti toku, ne jako její náhradu

Spárujte kumulovaný výtěžek s rychlostí toku (téma 2.3) tak, jak tato kniha
páruje každou rychlostní metriku s pojistkou stability. Rostoucí počet položek s
klesajícím kumulovaným %C/A znamená, že hodnotový proud dodává víc jednotek,
které později stále častěji vyžadují předělávku, přesně vzorec rychlosti bez
kvality, před kterým téma 1.2 varuje každou rodinu metrik.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Jen klasické metriky Lean (LT, PT, CT, %C/A, takt) | Univerzální slovní zásoba; funguje stejně pro softwarové i nesoftwarové týmy | Není softwarově specifický; vyžaduje překlad pro inženýrské fáze |
| Jen metriky Flow Frameworku (témata 2.3, 2.4) | Účelově postavené pro softwarové hodnotové proudy a viditelnost typů položek | Neznámé zainteresovaným stranám vyškoleným v Lean Six Sigma mimo inženýrství |
| Obojí, s výslovně zdokumentovaným mapováním | Mluví oběma slovními zásobami; nejsilnější mezifunkční most | Vyžaduje počáteční disciplínu zapsat mapování a udržovat ho aktuální |
| %C/A měřený jen při konečném dodání | Jednoduché, jediné číslo | Skrývá předělávku vzniklou a zachycenou dříve v proudu |

Hlavním napětím je **univerzalita versus specifičnost**. Klasické metriky Lean
jsou okamžitě čitelné pro každého se zkušeností z výroby, provozu nebo Six Sigma,
ale nebyly navrženy s ohledem na specifické fáze softwaru, revizi kódu,
automatizované testování, schvalování nasazení. Řešte to tak, že metriky Lean
použijete jako sdílenou základní slovní zásobu pro mezifunkční a výkonné rozhovory
a metriky Flow Frameworku (témata 2.3 a 2.4) pro softwarově specifickou
diagnostickou práci, kterou inženýrské týmy dělají den co den.

## Otázky k diskusi s vaším týmem

1. **Dokázali bychom dnes spočítat všech pět klasických metrik Lean pro náš
   hodnotový proud, nebo máme jen některé z nich?** Většina softwarových týmů má
   ekvivalenty doby toku a cycle time, ale nikdy výslovně nespočítala procesní
   čas, %C/A nebo takt. Určete, které z pěti skutečně chybějí, než předpokládáte,
   že mezera je malá.

2. **Sečetli jsme někdy %C/A napříč každou fází našeho hodnotového proudu, nebo
   jsme ho měřili jen při konečném dodání?** Jediné měření na konci proudu skrývá
   právě tu skládající se předělávku, kterou má výpočet kumulovaného výtěžku
   tohoto tématu odhalit. Zkuste výpočet sečtení se skutečnými daty.

3. **Známe svůj takt, spočítaný ze skutečné poptávky zákazníků, a jak se k němu
   má náš změřený cycle time?** Většina týmů toto srovnání nikdy neučinila
   výslovným, což znamená, že rozhovory o kapacitě zůstávají anekdotické místo
   kvantifikovaných.

4. **Kdyby se nás zainteresovaná strana vyškolená v Lean Six Sigma mimo
   inženýrství zeptala na náš cycle time, byli bychom si jisti, že myslíme totéž
   co ona?** Cycle time této knihy (téma 2.6) a klasický CT podle Lean spolu
   souvisejí, ale nejsou totožné. Diskutujte, zda tento rozdíl někdy způsobil
   skutečné nedorozumění ve vaší organizaci.

5. **Byl náš kumulovaný výtěžek někdy výrazně nižší než %C/A hlášený kteroukoli
   jednotlivou fází?** Pokud jste sečtení nikdy nepočítali, diskutujte, co byste
   očekávali, že najdete, a pak to ověřte na skutečných datech.

6. **Provozuje naše organizace už program Lean nebo Six Sigma mimo software, s
   nímž bychom se mohli sladit, místo abychom udržovali samostatnou, odpojenou
   slovní zásobu?** Mnoho velkých podniků a státních úřadů tuto infrastrukturu
   už má; zkontrolujte, zda se inženýrství k ní někdy skutečně napojilo.

## Pohled podle sektorů

**Startup.** Plné mapování hodnotového proudu podle Lean obvykle v tomto měřítku
za ten ceremoniál nestojí, ale takt stojí za neformální pochopení: zhruba vědět,
jak rychle tým skutečně potřebuje postupovat, aby odpovídal skutečné poptávce
zákazníků, místo libovolného interního tempa, předchází jak předčasnému
předimenzování kapacity, tak jejímu poddimenzování, až přijde růst.

**Malá firma.** %C/A je z těchto pěti metrik nejokamžitěji užitečná, protože
přímo odpovídá na „kolik z toho, co dodáme, je třeba předělat“, otázku, kterou
majitelé a malé týmy pociťují akutně, aniž by k ní vždy měli číslo. Sledujte ji
neformálně u svých jednoho nebo dvou kritických procesů, než investujete do
čehokoli propracovanějšího.

**Velký podnik.** Tady se klasická slovní zásoba Lean vyplatí, protože velké
podniky velmi často už provozují program Lean Six Sigma v provozu, divizích
blízkých výrobě nebo sdílených službách, a inženýrství, které mluví stejným
jazykem, získává okamžitý, důvěryhodný most k těmto funkcím, místo aby muselo od
nuly zdůvodňovat samostatnou sadu metrik jen pro software.

**Státní správa.** Státní úřady, zejména s kořeny v regulačních, výrobě blízkých
nebo logistických funkcích, mají často existující mandáty Lean nebo zlepšování
procesů. Zarámovat hodnotový proud digitální služby stejnými klasickými pojmy,
lead time, procesní čas, %C/A, takt, jaké už používá úřad pro zlepšování
procesů dané agentury, je často nejrychlejší cestou ke skutečné institucionální
podpoře modernizace softwaru.

## Příklady

**Velký podnik.** Interní softwarová divize výrobní firmy se léta snažila, aby
její inženýrské metriky bralo vážně vedení provozu, které ovládalo Lean Six Sigma
z výrobní haly. Přerámcování dodací pipeline divize pomocí stejných pěti
klasických metrik, výpočet lead time, procesního času, cycle time, %C/A a taktu
pro její softwarový hodnotový proud, poprvé okamžitě učinilo čísla divize
čitelnými pro vedení provozu. Výpočet kumulovaného výtěžku napříč čtyřmi fázemi
pipeline odhalil skutečné %C/A 61 %, daleko pod číslem hlášeným kteroukoli
jednotlivou fází, což se stalo důkazním základem pro iniciativu snižování
předělávek, kterou vedení provozu financovalo ve stejném čtvrtletí.

**Státní správa.** Tým digitálního povolování státního dopravního resortu,
podléhající agentuře s dlouho zavedeným úřadem pro zlepšování procesů Lean, tento
úřad nikdy nezapojil, protože jeho metriky používaly softwarově specifický jazyk,
který úřad nepoznal. Po překladu hodnotového proudu povolování do lead time,
procesního času a %C/A úřad pro zlepšování procesů zjistil, že skutečným
omezením týmu není rychlost inženýrství, ale navazující právní revize, která
běžela hluboko pod vlastním efektivním taktem vzhledem k poptávce po povoleních,
zjištění, na které byl úřad vybaven reagovat okamžitě, protože bylo podáno ve
známých pojmech.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností přijetí klasické slovní zásoby Lean vedle softwarově specifických
metrik této knihy je důvěryhodný, okamžitý most k expertíze a financování na
zlepšování procesů, které často už ve velké organizaci jinde existují. Výše
uvedený příklad výrobní firmy, která získala financování snižování předělávek v
témže čtvrtletí, kdy přerámcování učinilo případ čitelným, je vzorcem, který
přístup tohoto tématu spolehlivě vyrábí: poznatek nebyl nový, ale slovní zásoba,
která ho učinila použitelným pro správné publikum, ano.

Celkové náklady vlastnictví (TCO) jsou nízké: těchto pět metrik nevyžaduje žádnou
novou instrumentaci nad to, co témata 2.4 až 2.6 už sbírají, plus klasifikaci
předělávek pro %C/A, která bývá jednoduchým doplňkem stávajícího sledování vad a
položek toku (téma 2.2). Hlavní investicí je překlad, zapsání mapování mezi
pojmy této knihy a klasickými pojmy Lean, které se vyplatí při prvním předejití
mezifunkčnímu nedorozumění.

## Antivzory a úskalí

- **Měřit %C/A jen při konečném dodání:** způsob manipulace v srdci tohoto
  tématu. Tým může hlásit vysoké %C/A poslední fáze, zatímco dřívější fáze tiše
  vyrábějí předělávky, které se opraví, dřív než je někdo změří, a celý hodnotový
  proud pak vypadá zdravěji, než je. Pojistkou je sčítat %C/A multiplikativně
  napříč každou fází, tedy výpočet kumulovaného výtěžku, a pravidelně auditovat
  definici „úplný a správný“ každé fáze, aby se časem nemohla tiše zužovat.
- **Předpokládat, že cycle time této knihy a klasický CT podle Lean znamenají
  přesně totéž:** vyvolává skutečný mezifunkční zmatek, když se obě slovní
  zásoby setkají bez zdokumentovaného mapování.
- **Stanovit takt z aktuální kapacity místo ze skutečné poptávky zákazníků:**
  maří smysl metriky, jímž je odhalit mezeru mezi poptávkou a kapacitou, ne
  potvrdit libovolné tempo, které už existuje.
- **Považovat klasické metriky Lean za zastaralé, jakmile je přijat softwarově
  specifický rámec:** zahazuje důvěryhodný, důkazy podložený most k expertíze na
  zlepšování procesů, která v organizaci už může existovat.
- **Ignorovat existující program Lean Six Sigma jinde v organizaci:** promarňuje
  financování, expertízu a institucionální důvěryhodnost, které by přerámcování
  dodacích metrik do sdíleného jazyka mohlo odemknout.
- **Vykazovat %C/A bez spárování s rychlostí toku:** dovoluje, aby rostoucí číslo
  propustnosti skrylo klesající míru předělávek, tutéž mezeru v pojistkách,
  před kterou tato kniha varuje v celém textu.

## Model zralosti

- **Úroveň 1, Zahájení:** Žádná z pěti klasických metrik Lean se nepočítá;
  dodávání se probírá bez odkazu na lead time, procesní čas nebo %C/A.
- **Úroveň 2, Rozvoj:** Lead time a cycle time se sledují neformálně, ale
  procesní čas, %C/A a takt se nepočítají a neexistuje žádné mapování na slovní
  zásobu této knihy.
- **Úroveň 3, Standardizace:** Všech pět klasických metrik se počítá konzistentně
  a mapování na slovní zásobu toku a cycle time této knihy je zdokumentováno ve
  sdílené chartě metrik.
- **Úroveň 4, Řízení:** Kumulovaný výtěžek se počítá napříč každou fází
  hodnotového proudu a takt se porovnává s měřeným cycle time, aby se výslovně
  kvantifikovaly mezery v kapacitě.
- **Úroveň 5, Orchestrace:** Organizace napojila své metriky dodávání softwaru na
  existující program Lean nebo Six Sigma jinde v podniku a dokáže ukázat
  konkrétní investiční nebo procesní rozhodnutí učiněná proto, že sdílená slovní
  zásoba učinila poznatek použitelným pro publikum mimo inženýrství.

## Náměty k diskusi

1. Dokázali bychom dnes spočítat lead time, procesní čas, cycle time, %C/A a takt
   pro náš hodnotový proud?
2. Jaký by byl náš kumulovaný výtěžek, kdybychom vynásobili %C/A každé fáze?
3. Provozuje naše organizace už program Lean nebo Six Sigma, na který jsme nikdy
   nenapojili inženýrské metriky?
4. Jak se náš změřený cycle time srovnává s taktem spočítaným ze skutečné
   poptávky zákazníků?

## Hlavní poznatky

- Pět klasických metrik Lean, **lead time, procesní čas, cycle time, podíl
  úplných a správných vstupů a takt**, předchází software a zůstávají společnou
  slovní zásobou zainteresovaných stran vyškolených v Lean Six Sigma.
- Vlastní **doba toku a cycle time této knihy odpovídají lead time a klasickému
  CT podle Lean, ale nejsou s nimi totožné**; zdokumentujte mapování výslovně,
  abyste předešli mezifunkčnímu zmatku.
- Ústředním způsobem manipulace tohoto tématu je **měření %C/A jen při konečném
  dodání**; pojistkou je sčítat ho multiplikativně napříč každou fází jako
  kumulovaný výtěžek.
- **Takt přerámcovává kapacitu kolem skutečné poptávky zákazníků**, ne
  stávajícího tempa, a páruje se přímo s vytížením (téma 2.7) a zatížením toku
  (téma 2.4).
- Přerámcování dodávání softwaru do klasických pojmů Lean je často nejrychlejší
  cestou k propojení s **existující expertízou na zlepšování procesů a
  financováním**, které ve velké organizaci už jsou.

## Odkazy a další četba

- Rother, Mike, a John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., a Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones a Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
