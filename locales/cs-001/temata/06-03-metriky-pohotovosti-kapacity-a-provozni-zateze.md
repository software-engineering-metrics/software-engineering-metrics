# 6.3 Metriky pohotovosti, kapacity a provozní zátěže

## Přehled a motivace

Spolehlivost, kterou zavedlo téma 6.1, a reakce na incidenty, kterou změřilo téma
6.2, obě závisejí na lidském systému, který toto téma měří přímo: rotaci
pohotovosti, tedy inženýrech, kteří nosí pager a reagují, když se něco rozbije, a
na infrastrukturní kapacitě, která určuje, kolik zátěže systém pojme, než se vůbec
začne rozpadat. Organizace může mít výborná SLO, dobře navržené rozpočty chyb a
skutečně kulturu incidentů bez obviňování a přesto vyhoří své inženýry v
pohotovosti neudržitelnou zátěží, která nakonec zhorší právě tu spolehlivost, jejíž
ochraně ty ostatní praktiky sloužily.

Toto téma bere provozní zátěž jako samostatnou rodinu metrik, přímo spojenou s
měřením pohody a [vyhoření](https://en.wikipedia.org/wiki/Occupational_burnout)
z tématu 3.2, ale specifickou pro zvláštní, akutní stres nošení pageru: přerušovaný
spánek, psychická cena pohotovosti i tehdy, když se nic neděje, a kumulativní
daň častého, špatně rozloženého zatížení incidenty. Organizace, která pečlivě
měří spolehlivost svých systémů, ale nikdy neměří udržitelnost lidí, kteří tyto
systémy udržují spolehlivé, měří jen půlku obrazu a neměřená půlka se obvykle
nakonec projeví jako fluktuace, zhoršená kvalita reakce na incidenty vyčerpanými
řešiteli, nebo obojí.

U velkých týmů metriky pohotovosti a kapacity odhalují problémy s vyvažováním
zátěže, které zrcadlí obavy z koncentrace znalostí z tématu 3.5: malý počet
inženýrů pohlcuje nepřiměřený podíl pagerů, často nejzkušenější lidé právě proto,
že incidenty vyřeší nejrychleji, což vytváří riziko vyhoření i riziko bus factoru
zároveň. Velké podniky a státní správa provozující nepřetržité kritické služby
závisejí na metrikách tohoto tématu, aby rotace pohotovosti obsazovaly udržitelně,
a ne aby skutečnou cenu zjistily až prostřednictvím fluktuace.

## Klíčové zásady

- **Zátěž pohotovosti je měřitelný, řiditelný zdroj**, ne nevyhnutelné,
  neomezené břemeno, které musejí inženýři prostě pohltit.
- **Frekvence pagerů i jejich rozložení jsou obě důležité.** Průměr za celý tým
  může skrývat silnou koncentraci na malém počtu jednotlivců.
- **Vyrušování během pohotovosti má svou cenu i tehdy, když žádný incident
  nenastane**, psychická váha dostupnosti a odpovědnosti.
- **Plánování kapacity a zátěž pohotovosti spolu souvisejí.** Poddimenzovaná
  infrastruktura generuje víc pagerů a přímo zvyšuje zátěž pohotovosti.
- **Udržitelný systém pohotovosti chrání samotnou spolehlivost**, protože
  vyčerpaní řešitelé se při incidentech rozhodují pomaleji a s větší chybovostí.

## Doporučení

### Sledujte frekvenci pagerů a jejich rozložení, ne jen průměr za tým

Měřte, kolik pagerů dostává každý jednotlivý inženýr v pohotovosti, ne jen průměr
za celý tým, který může skrývat silnou koncentraci. Podobně jako u obav z bus
factoru v tématu 3.5 a zátěže recenzentů v tématu 2.9 se zátěž pohotovosti často
koncentruje na malý počet zkušených lidí, kteří incidenty vyřeší nejrychleji,
přesně vzorec, který vytváří riziko vyhoření i nebezpečné kritické místo selhání.
Když se taková koncentrace objeví, rotace záměrně přerozdělte.

### Měřte psychickou cenu pohotovosti, ne jen dobu aktivního incidentu

Pohotovost má skutečnou cenu i během směny s nulovým počtem skutečných pagerů:
horší kvalita spánku z očekávání možného přerušení, omezené osobní aktivity a
nízkoúrovňový stres z trvající odpovědnosti. Kde je to možné, zachyťte to
průzkumnými daty (téma 3.7) konkrétně o zkušenosti s pohotovostí, odděleně od
obecné spokojenosti, protože tým může hlásit rozumnou obecnou spokojenost, zatímco
právě pohotovost tiše podkopává pohodu.

### Stanovte výslovné limity udržitelné frekvence pohotovosti

Stanovte maximální rozumnou frekvenci, jak často má být kdokoli v pohotovosti,
obvykle ne víc než jeden týden ze čtyř nebo pěti, a sledujte skutečnou frekvenci
rotace proti tomuto limitu. Rotace, která má technicky uvedeno dost lidí, ale
fakticky se spoléhá na dva nebo tři z nich kvůli mezerám v dovednostech nebo
omezené dostupnosti, limit ve skutečnosti nesplňuje, ať nominální rozpis ukazuje
cokoli.

### Propojte plánování kapacity přímo se zátěží pohotovosti

Poddimenzovaná infrastruktura, nedostatečná rezerva pro špičky provozu, nevhodná
konfigurace automatického škálování, generuje z definice víc pagerů a přímo zvyšuje
zátěž pohotovosti. Sledujte vytížení kapacity infrastruktury a korelujte je s
frekvencí pagerů: služba, která pravidelně běží u stropu své kapacity a generuje
nepřiměřený podíl pagerů, je přímým, kvantifikovatelným argumentem pro investici do
kapacity, ne jen vágní provozní stížností.

### Používejte metriky pohotovosti pro rozhodnutí o obsazení a najímání, ne pro hodnocení jednotlivců

Agregujte data o zátěži pohotovosti na úrovni týmu, abyste podpořili požadavek na
další lidi, lepší nástroje ke snížení falešně pozitivních pagerů nebo
architektonickou investici ke snížení skutečné frekvence incidentů. Podle
důsledných pokynů této knihy pro jakoukoli metriku dotýkající se jednotlivců
(téma 1.2, téma 3.4) nikdy nepoužívejte metriky reakce jednotlivců na pagery k
hodnocení výkonu konkrétního inženýra; cílem je udržitelné obsazení a návrh
systému, ne počítání bodů jednotlivců.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádné formální sledování zátěže pohotovosti | Žádná režie | Riziko vyhoření a koncentrace bus factoru zůstávají neviditelné, dokud se neprojeví jako fluktuace |
| Jen průměrná frekvence pagerů za tým | Jednoduché na výpočet | Skrývá silnou individuální koncentraci |
| Sledování rozložení pagerů na úrovni jednotlivců | Přímo odhaluje koncentraci a riziko vyhoření | Vyžaduje péči, aby se používalo jen agregovaně, nikdy k hodnocení jednotlivců |
| Investice do kapacity ke snížení objemu pagerů u zdroje | Řeší kořenovou příčinu, udržitelně snižuje zátěž | Vyžaduje předběžnou investici do infrastruktury |

Hlavním napětím je **smíření versus investice**. Snadno se vysoký objem pagerů
bere jako nevyhnutelná cena provozu spolehlivé služby a od inženýrů v pohotovosti
se žádá, aby ho pohltili, ale toto smíření organizaci nakonec stojí fluktuaci a
zhoršenou kvalitu reakce na incidenty vyčerpanými řešiteli. Napětí vyřešíte tím,
že zvýšenou zátěž pohotovosti budete brát jako signál volající po skutečné
investici, zlepšení kapacity, lepším alertování ke snížení falešných poplachů,
rozšířenému obsazení rotace, místo nevyhnutelného břemene, které se má prostě
snášet donekonečna.

## Otázky k diskusi s vaším týmem

1. **Jaké je naše skutečné rozložení pagerů mezi jednotlivce v rotaci, ne jen
   průměr za tým?** Vytáhněte si skutečná data na úrovni jednotlivců; rozumně
   vypadající průměr za tým může skrývat jednoho nebo dva lidi, kteří pohlcují
   dramaticky nepřiměřený podíl.

2. **Změřili jsme někdy psychickou cenu pohotovosti odděleně od obecné
   spokojenosti?** Pokud ne, probete, zda by vyhrazená, krátká otázka v průzkumu
   konkrétně o zkušenosti s pohotovostí odhalila něco, co váš obecný průzkum
   spokojenosti (téma 3.2) nyní přehlíží.

3. **Odráží náš nominální rozpis rotace pohotovosti realitu, nebo se fakticky
   spoléhá jen na dva nebo tři lidi kvůli mezerám v dovednostech nebo dostupnosti?**
   Buďte k tomu poctiví; rozpis uvádějící osm jmen, ale fakticky závisející na
   dvou, nesplňuje žádný rozumný limit udržitelnosti.

4. **Která z našich služeb generuje nepřiměřený podíl pagerů vzhledem ke své
   rezervě kapacity a snížila by dodatečná investice do infrastruktury tuto
   zátěž přímo?** Výslovně proložte frekvenci pagerů daty o vytížení kapacity,
   abyste tento argument postavili na skutečných důkazech.

5. **Byla někdy data o zátěži pohotovosti použita, i neformálně, k hodnocení
   výkonu jednotlivce, místo aby informovala rozhodnutí o obsazení a
   architektuře?** To riskuje stejnou past individuálního hodnocení, před níž téma
   3.4 varuje u dat o aktivitě, zde aplikovanou na provozní zátěž.

6. **Kolik by nás stálo ztratit našeho nejvíce pagovaného inženýra v pohotovosti
   kvůli vyhoření nebo odchodu a jak se to srovnává s cenou přerozdělení rotace
   nebo investice do oprav kořenových příčin hned teď?** Toto konkrétní srovnání
   často tvoří silnější argument pro proaktivní investici než samotná abstraktní
   výzva k udržitelnosti.

## Pohled podle sektorů

**Startup.** Pohotovost je často z nutnosti neformální a soustředěná na zakladatele
nebo malý raný inženýrský tým. Rizikem je normalizace neudržitelného tempa brzy,
dřív, než se kdy uvažovalo o záměrném návrhu rotace, což se mnohem hůř
napravuje, když se z toho stane výchozí očekávání pro později příchozí nové lidi.

**Malá firma.** Jednoduchý, výslovný rozpis rotace s jasným limitem udržitelnosti
(například ne víc než jeden týden ze čtyř) je dosažitelný i bez vyhrazených
nástrojů pro pohotovost. Hlavní disciplínou je prostě učinit rotaci a její
spravedlnost viditelnou a výslovnou, místo aby zůstala neformálním,
nevysloveným uspořádáním.

**Velký podnik.** Koncentrace rozložení pagerů a s ní spojená rizika vyhoření a bus
factoru se zde škálují špatně, protože víc služeb a víc složitosti obecně znamená
víc potenciálních pagerů a koncentrace odbornosti problém znásobuje. Investujte do
sledování zátěže na úrovni jednotlivců (používaného jen agregovaně pro rozhodnutí o
obsazení), do investic do kapacity ke snížení objemu pagerů u zdroje a do
záměrného přerozdělování rotace.

**Státní správa.** Kritická veřejná infrastruktura často vyžaduje nepřetržité
pokrytí pohotovostí se skutečnými důsledky při zpožděné reakci, což zvyšuje
důležitost udržitelného obsazení i obtížnost jeho dosažení za typických omezení
počtu lidí ve veřejném sektoru. Používejte data o zátěži pohotovosti výslovně a
přímo k zdůvodnění žádostí o obsazení a rámujte udržitelnou kapacitu pohotovosti
jako přímý, kvantifikovatelný požadavek na spolehlivost, ne jako libovolnou
personální preferenci.

## Příklady

**Velký podnik.** Společnost nabízející cloudovou infrastrukturu zjistila, když
poprvé vytáhla data o pagerech na úrovni jednotlivců, že dva senioři z
patnáctičlenné rotace pohotovosti osobně vyřídili přes 60 % všech pagerů
minulého roku, jednak proto, že nejrychleji řešili složité incidenty, a jednak
proto, že ostatní členové rotace se naučili neformálně se na ně spoléhat, místo
aby se pokoušeli řešení sami. Oba inženýři hlásili ve společnostním průzkumu pohody
(téma 3.2) výrazné příznaky vyhoření, aniž vedení předtím tento signál z průzkumu
propojilo s konkrétními, kvantifikovatelnými daty o koncentraci pohotovosti.
Záměrné přerozdělení, včetně cíleného školení k budování jistoty při řešení v
širší rotaci a formálního stropu na to, kolik po sobě jdoucích pagerů smí být
jednotlivci přiděleno, snížilo podíl obou inženýrů pod 25 % během šesti měsíců, s
odpovídajícím zlepšením jejich hlášené pohody.

**Státní správa.** Tým pohotovosti krajského vodárenského podniku fungoval s
nominálně čtyřčlennou rotací pro monitorování kritické infrastruktury, ale data
o vytížení kapacity odhalila, že jedna konkrétní stárnoucí čerpací stanice,
trvale běžící u provozního stropu, generovala téměř polovinu všech pagerů celé
rotace. Navýšení kapacity této jediné čerpací stanice, financované přímo s
použitím korelace frekvence pagerů a kapacity jako konkrétního podpůrného důkazu
v žádosti o rozpočet, snížilo celkový objem pagerů v celé organizaci během
následujícího roku zhruba o 40 % a ukázalo, že zátěž pohotovosti byla z velké
části skrytým problémem kapacity, a ne čistě problémem obsazení nebo procesu.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností záměrného řízení zátěže pohotovosti a kapacity je odvrácená fluktuace
a odvrácené zhoršení spolehlivosti kvůli vyčerpaným řešitelům, kteří se
rozhodují pomaleji a s větší chybovostí. Výše uvedený příklad cloudové
infrastruktury ukazuje kumulující se riziko přímo: nespravovaná koncentrace
vytvořila současně vyhoření a expozici bus factoru, kterou přímočaré, daty
informované přerozdělení vyřešilo za mírné náklady ve srovnání s rizikem ztráty
kteréhokoli seniora odchodem.

Celkové náklady vlastnictví (TCO) zahrnují instrumentaci ke sledování rozložení
pagerů na úrovni jednotlivců (používanou opatrně, jen agregovaně) a, kde je to
indikováno, skutečnou investici do kapacity ke snížení objemu pagerů u zdroje.
Příklad vodárenského podniku ukazuje, že se tato investice může přímo a
měřitelně vyplatit, protože jediná dobře zacílená oprava kapacity podstatně snížila
provozní zátěž v celé organizaci.

## Antivzory a úskalí

- **Sledovat jen průměrný počet pagerů za tým:** skrývá silnou individuální
  koncentraci, která pohání riziko vyhoření i bus factoru.
- **Brát nominální rozpis rotace jako odraz reality:** rozpis, který fakticky
  závisí na dvou nebo třech lidech, není udržitelný, ať je uvedeno kolik jmen.
- **Používat data o reakci jednotlivců na pagery k hodnocení výkonu:** opakuje
  past individuálního hodnocení, před níž tato kniha celou dobu varuje, zde
  aplikovanou na provozní zátěž.
- **Přijímat vysoký objem pagerů jako nevyhnutelnou cenu spolehlivosti místo
  zkoumání kapacity jako kořenové příčiny:** přehlíží často dostupnou, přímou
  opravu.
- **Nikdy nepropojit data o zátěži pohotovosti s daty z průzkumů pohody:**
  promarní příležitost identifikovat a řešit kumulující se riziko vyhoření
  dřív, než se projeví jako fluktuace.
- **Ignorovat psychickou cenu pohotovosti s nulovým počtem skutečných pagerů:**
  podhodnocuje skutečnou zátěž rotace.

## Model zralosti

- **Úroveň 1, Zahájení:** Zátěž pohotovosti se vůbec nesleduje, nebo jen jako
  průměr za celý tým, který skrývá individuální koncentraci.
- **Úroveň 2, Rozvoj:** Některá data o pagerech na úrovni jednotlivců existují, ale
  nejsou propojena s daty z průzkumů pohody ani s rozhodnutími o investicích do
  kapacity.
- **Úroveň 3, Standardizace:** Rozložení pagerů na úrovni jednotlivců a korelace s
  vytížením kapacity se sledují důsledně, s výslovnými limity udržitelnosti na
  frekvenci rotace.
- **Úroveň 4, Řízení:** Data o zátěži pohotovosti se aktivně používají k řízení
  investic do kapacity a přerozdělování rotace a jsou výslovně propojena se
  signály z průzkumů pohody.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná zlepšení
  provozní zátěže i pohody z cílených investic do kapacity a redesignu rotace a
  udržitelné obsazení pohotovosti je rutinním, dobře zdůvodněným vstupem do
  plánování počtu lidí a infrastruktury.

## Náměty k diskusi

1. Jak vypadá naše skutečné rozložení pagerů na úrovni jednotlivců právě teď?
2. Odráží náš nominální rozpis rotace, kdo ve skutečnosti řeší většinu incidentů?
3. Která jediná investice do kapacity by nejvíc snížila náš současný objem pagerů?
4. Propojili jsme někdy data o zátěži pohotovosti se signály z průzkumů pohody?
5. Kolik by nás stálo ztratit našeho nejvíce pagovaného inženýra kvůli vyhoření?

## Hlavní poznatky

- Zátěž pohotovosti je **měřitelný, řiditelný zdroj**; sledujte rozložení na úrovni
  jednotlivců, ne jen průměr za tým, který může skrývat silnou koncentraci.
- Pohotovost má **psychickou cenu i s nulovým počtem skutečných pagerů**; měřte ji
  odděleně od obecné spokojenosti.
- **Plánování kapacity a zátěž pohotovosti spolu přímo souvisejí**; poddimenzovaná
  infrastruktura generuje víc pagerů a víc zátěže.
- Používejte data o pohotovosti pro **rozhodnutí o obsazení a kapacitě**, nikdy pro
  hodnocení výkonu jednotlivců.
- Udržitelný systém pohotovosti **chrání samotnou spolehlivost**, protože vyčerpaní
  řešitelé se rozhodují pomaleji a s větší chybovostí.

## Odkazy a další četba

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy Beyer,
  Chris Jones, Jennifer Petoff a Niall Richard Murphy, eds. (praxe pohotovosti a
  udržitelná provozní zátěž).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara a Stephen Thorne, eds. (praktické pokyny k návrhu rotací
  pohotovosti).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach a Michael P. Leiter (organizační příčiny a
  zásahy proti vyhoření, použitelné na stres z pohotovosti).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, editor
  David N. Blank-Edelman (pohledy praktiků na udržitelnou provozní praxi).
