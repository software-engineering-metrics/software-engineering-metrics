# 3.1 Rámec SPACE

## Přehled a motivace

[Rámec SPACE](https://queue.acm.org/detail.cfm?id=3454124), který v roce 2021
publikovali výzkumníci Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila,
Thomas Zimmermann, Brian Houck a Jenna Butler, vznikl jako odpověď na
konkrétní problém: [produktivita vývojářů](https://en.wikipedia.org/wiki/Productivity)
měřená jediným číslem, tedy řádky kódu, počtem commitů nebo story pointy, se
dá triviálně zmanipulovat a běžně klame. SPACE místo toho navrhuje měřit v
pěti dimenzích: **Spokojenost a pohoda** (Satisfaction and well-being),
**Výkon** (Performance), **Aktivita** (Activity), **Komunikace a spolupráce**
(Communication and collaboration) a **Efektivita a plynulost** (Efficiency and
flow). Žádné písmeno nemá stát samo. Skutečným přínosem rámce je disciplína
mít všech pět na očích najednou, aby tým nemohl vypadat produktivně v jedné
ose a přitom tiše poškozovat jinou.

Na tom záleží, protože produktivita vývojářů není jedna věc. Tým může být
velmi aktivní (mnoho commitů, mnoho pull requestů) a přitom podávat slabý
výkon (práce nehýbe výsledky, na kterých záleží). Tým může krátkodobě podávat
dobrý výkon, zatímco spokojenost se propadá, což je předstihový ukazatel
odchodů a zhroucení kvality, které se projeví o měsíce později. Postřeh rámce
SPACE, přímo navazující na témata 1.2 a 1.3 této knihy, říká, že jakákoli
jedna z těchto dimenzí, sledovaná jako samostatný cíl, bude zmanipulována na
úkor ostatních, a rámec existuje právě proto, aby tento kompromis zviditelnil
dřív, než způsobí skutečnou škodu.

U velkých týmů dává SPACE vedení společný slovník pro rozhovor, který by
jinak sklouzl k té dimenzi, kterou se nejsnáze měří, tedy téměř vždy k
aktivitě. Velké podniky, které srovnávají produktivitu mezi mnoha týmy,
potřebují rámec, který odolá lákadlu počítat commity. Státní správa, která
čelí tlaku při náboru a udržení lidí na konkurenčním trhu práce, potřebuje
data o spokojenosti a pohodě brát stejně vážně jako data o dodávce, protože
ztráta zkušeného inženýra kvůli vyhoření stojí mnohem víc, než kolik kdy
ušetřil výstup jediného sprintu.

## Klíčové zásady

- **Žádná jednotlivá dimenze SPACE sama o sobě není důvěryhodná.** Hodnota
  rámce vyplývá právě z toho, že se měří několik dimenzí společně.
- **Minimem pro vyvážený obraz je alespoň jedna metrika z alespoň tří
  dimenzí, s kombinací subjektivních a objektivních zdrojů.** Sada metrik
  převzatá celá z jedné dimenze nebo z jednoho typu dat SPACE vlastně
  nepoužívá.
- **Aktivita je dimenze, kterou se nejsnáze zneužívá jako samostatný
  zástupný ukazatel.** Měří se nejsnáze a sama o sobě nejméně vypovídá o
  skutečné hodnotě.
- **Měření na úrovni týmu a na úrovni jednotlivce vyžaduje odlišný přístup.**
  SPACE byl navržen především pro pohled na týmy a systémy, ne pro skóre karty
  jednotlivců.
- **Pět dimenzí se navzájem ovlivňuje.** Změna, která zlepší jednu, může
  zhoršit jinou, a rámec existuje, aby tento kompromis zachytil.

## Doporučení

### Sestavte sadu metrik alespoň ze tří dimenzí dřív, než jí uvěříte

Nezavádějte SPACE tak, že si vyberete jednu oblíbenou dimenzi, obvykle
aktivitu nebo výkon, a prohlásíte hotovo. Záměrně vyberte alespoň jednu
metriku z alespoň tří z pěti dimenzí a kombinujte objektivní instrumentaci
(téma 1.5) se subjektivními daty z průzkumů (téma 3.7), než představíte
jakýkoli závěr o produktivitě týmu. Právě toto minimální složení brání tomu,
aby se SPACE zhroutil zpět do problému jediného zástupného ukazatele, který
měl vyřešit.

### Berte metriky aktivity jako kontext, nikdy jako titulek

Počty commitů, řádky kódu a počty pull requestů jsou legitimní data dimenze
aktivity ve SPACE, ale nikdy by neměly být hlavní ani jedinou metrikou, která
se o produktivitě týmu prezentuje. Používejte data o aktivitě jako kontext
pro ostatní dimenze, například když si všimnete, že pokles aktivity se časově
shodoval s růstem spokojenosti, protože tým konečně dostal prostor splácet
technický dluh, a ne jako samostatný verdikt. Téma 3.4 se specifickými riziky
této dimenze zabývá do hloubky.

### Používejte SPACE na úrovni týmu a systému, ne jednotlivce

Původní výzkum SPACE i jeho pozdější přijetí v praxi chápou rámec jako čočku
pro pochopení produktivity týmů a organizací, ne jako skóre karty výkonu
jednotlivců. Použít dimenze SPACE k řazení jednotlivců do pořadí, zejména
dimenzi aktivity, znovu vytváří přesně to riziko manipulace, před kterým
varuje téma 1.2, a zneužívá rámec, který pro takové použití nikdy nebyl
ověřen.

### Sledujte kompromisy mezi dimenzemi, nejen pohyb v jedné

Skutečná diagnostická síla rámce spočívá ve sledování toho, jak se dimenze
pohybují vzájemně. Rostoucí metrika výkonu při klesající spokojenosti je
varovný signál, který stojí za okamžité prošetření, a může ukazovat na
neudržitelné tempo. Rostoucí metrika aktivity při stagnujícím nebo klesajícím
výkonu naznačuje zaměstnávání sebe sama místo skutečného pokroku. Všech pět
dimenzí revidujte společně v pevném rytmu právě proto, abyste zachytili tyto
vzorce napříč dimenzemi, a ne jen kontrolovali každé číslo zvlášť.

### Střídejte rytmy měření podle dimenze

Některé dimenze SPACE se mění pomalu a nejlépe se měří periodicky
(spokojenost, typicky v čtvrtletních cyklech průzkumů). Jiné se mění rychle a
těží z častějšího automatického sledování (aktivita, efektivita a plynulost,
obojí z velké části instrumentovatelné z existujících systémů). Přizpůsobte
rytmus měření přirozené rychlosti změn každé dimenze, místo abyste všechny
metriky tlačili do stejného harmonogramu reportování.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Sada metrik z jedné dimenze (obvykle aktivity) | Jednoduchá, levná, známá | Snadno se zmanipuluje, přehlíží lidskou cenu neudržitelných praktik |
| Plné zavedení pěti dimenzí SPACE | Vyvážené, odolné proti manipulaci v jedné ose, zachytí kompromisy | Vyžaduje víc instrumentace a investic do průzkumů |
| SPACE na úrovni týmu | Odpovídá ověřenému použití rámce, chrání jednotlivce před zneužitím | Neodpoví na otázky na úrovni jednotlivce, které vedení někdy chce |
| SPACE na úrovni jednotlivce | Některým manažerům připadá přímo použitelnější | Zneužívá rámec; silné riziko manipulace a poklesu morálky |

Ústředním napětím je **úplnost měření versus náklady a složitost**. Plná,
vyvážená implementace SPACE vyžaduje víc instrumentace, víc úsilí při návrhu
průzkumů a víc disciplíny při společné revizi všech pěti dimenzí než prostý
dashboard aktivity. Napětí řešte tak, že začnete skutečně minimální, ale
vyváženou sadou, alespoň jednou metrikou z alespoň tří dimenzí, a nebudete
ani úplně přeskakovat disciplínu rámce, ani se hned první den pokoušet o
zahlcující, plně instrumentovanou verzi všech pěti dimenzí.

## Otázky k diskusi s vaším týmem

1. **Čerpá naše současná sada metrik produktivity z alespoň tří dimenzí SPACE,
   nebo v ní dominují samotná data o aktivitě?** Zkontrolujte svůj dashboard
   výslovně proti pěti dimenzím; většina organizací je při upřímném
   posouzení mnohem víc zaměřená na aktivitu, než si uvědomuje.

2. **Viděli jsme někdy, že se jedna dimenze SPACE zlepšovala, zatímco se jiná
   tiše zhoršovala, a všimli jsme si toho tehdy?** Tento kompromis mezi
   dimenzemi je přesně to, co má rámec zachytit. Podívejte se zpět na
   poslední rok, najděte období, kdy se metriky dodávky zlepšily, a zeptejte
   se, co v tomtéž okně ukazovala data o spokojenosti nebo pohodě.

3. **Používají se data SPACE někdy, byť neformálně, k hodnocení nebo srovnávání
   jednotlivců místo týmů?** Je to zneužití rámce a zve to k manipulaci.
   Buďte upřímní v tom, jak se tyto metriky v praxi skutečně probírají, a ne
   jen v tom, jak má podle směrnice vypadat jejich použití.

4. **Jak bychom poznali, že tým zlepšil metriky výkonu za cenu neudržitelného
   tempa?** Bez dat o spokojenosti a pohodě revidovaných vedle dat o výkonu
   je tento druh kompromisu neviditelný, dokud se o měsíce později neprojeví
   jako odchody lidí nebo zhroucení kvality.

5. **Jaký je náš rytmus měření pro každou z pěti dimenzí a odpovídá tomu, jak
   rychle se každá dimenze skutečně mění?** Čtvrtletní průzkum spokojenosti
   spojený s aktivitou v reálném čase je rozumná nesourodost rytmů; stejný
   rytmus použitý bez rozmyslu na všech pět rozumný není.

6. **Kdyby zítra nastoupil nový vedoucí inženýrství a podíval se jen na náš
   dashboard, získal by vyvážený obraz produktivity týmu, nebo zkreslený?**
   Je to praktický test, zda naše sada metrik skutečně dosáhla vyváženosti
   SPACE, nebo se na rámec jen odvolává, zatímco v praxi zůstává ovládaná
   aktivitou.

## Pohled podle sektorů

**Startup.** Plná implementace pěti dimenzí je u hrstky inženýrů, kteří spolu
denně mluví a zdraví spokojenosti i spolupráce vnímají přímo, obvykle
přehnaná. Jediný zvyk, který stojí za to přijmout brzy, je odolávat
lákadlu metrik jen o aktivitě, jakmile tým roste za velikost, kde
neformální povědomí pokrývá všechno.

**Malá firma.** Bez specializované funkce pro analýzu lidských dat zůstaňte u
jednoduchého: spojte data o dodávce, která už máte (téma 2.10), s krátkou,
neformální a pravidelnou kontrolou spokojenosti, třeba jednootázkovým
rychlým průzkumem. Toto minimální spojení zachycuje jádro disciplíny rámce
daleko lépe než dashboard jen o aktivitě.

**Velký podnik.** Tady si plný rámec svou složitost zaslouží. Standardizujte
vyváženou sadu metrik SPACE napříč týmy, aby vedení mohlo produktivitu
srovnávat spravedlivě, místo aby sklouzlo k týmu s nejpůsobivějším grafem
commitů, a investujte do infrastruktury průzkumů, kterou popisuje téma 3.7,
aby data o spokojenosti a spolupráci byla stejně spolehlivá jako objektivní
instrumentace.

**Státní správa.** Tlak při náboru a udržení lidí, zejména tam, kde platy ve
veřejném sektoru nemohou vždy konkurovat nabídkám ze soukromého sektoru,
dělá z dat o spokojenosti a pohodě skutečně strategickou záležitost, ne
měkký doplněk. Berte SPACE stejně vážně jako metriky dodávky při plánování
pracovních sil a zdůvodňování rozpočtu, protože cena ztráty zkušeného
inženýra kvůli vyhoření se měří v měsících institucionální znalosti, kterou
nástupce nedokáže hned nahradit.

## Příklady

**Velký podnik.** Vedení inženýrství jedné softwarové firmy sledovalo roky
počty commitů a dokončené story pointy jako hlavní signál produktivity. Po
zavedení úplnější sady metrik SPACE, včetně čtvrtletního průzkumu spokojenosti
a analýzy sítě spolupráce (téma 3.5), vedení zjistilo, že tým s nejvyššími
čísly aktivity měl také nejnižší skóre spokojenosti a nejvyšší míru
dobrovolných odchodů v následujícím roce. Samotná čísla aktivity byla
vyloženě zavádějící. Úplnější obraz vedl k záměrnému snížení souběžné
pracovní zátěže tohoto týmu (zásada WIP z tématu 2.5 uplatněná na lidské
úrovni) a k měřitelnému zotavení spokojenosti a nakonec i udržitelného
výkonu.

**Státní správa.** Národní agentura pro digitální služby, která soupeřila o
inženýry s platy soukromého sektoru, jež nemohla dorovnat, zavedla vyváženou
sadu metrik SPACE právě proto, aby obhájila nepeněžní investice do udržení
lidí: lepší nástroje, chráněný čas na soustředění a menší procesní tření.
Data z průzkumu spokojenosti spojená s metrikami efektivity a plynulosti
(téma 3.6) ukázala, že frekvence vyrušování, a ne odměna, byla nejsilnějším
prediktorem úmyslu odejít ve výstupních rozhovorech. Následná investice
agentury do politiky chráněného času na soustředění, odůvodněná přímo těmito
daty SPACE, se časově shodovala s měřitelným zlepšením udržení lidí v
následujících osmnácti měsících.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností plného zavedení SPACE jsou ušetřené odchody a ušetřené zhroucení
kvality způsobené vyhořením, obojí mnohem dražší než náklady na instrumentaci
rámce. Sada metrik jen o aktivitě může rok nebo dva vypadat výborně, až do
chvíle, kdy lidskou cenu najednou dožene, a tehdy náklady na nahrazení
ztracené odbornosti a obnovu zdraví týmu zcela převýší jakýkoli zisk
produktivity, který úzká sada metrik kdy zdánlivě ukazovala.

Celkové náklady vlastnictví (TCO) zahrnují infrastrukturu průzkumů (téma 3.7)
a disciplínu společné revize všech pěti dimenzí, místo aby se sklouzlo k té,
kterou se nejsnáze měří. Tyto náklady stojí skutečně za to: příklad velkého
podniku výše ukazuje skutečný, odhalitelný vzorec, vysokou aktivitu maskující
vysoké riziko odchodů, který by užší sada metrik nikdy nezachytila, dokud by
škoda už nenastala.

## Antivzory a úskalí

- **Zavedení SPACE jen podle jména, zatímco se v praxi dál dominuje aktivitě:**
  nejčastější způsob selhání, který maří celý účel rámce.
- **Uplatnění dimenzí SPACE na skóre karty jednotlivců:** zneužívá rámec
  ověřený pro pohled na týmy a systémy.
- **Revize dimenzí izolovaně místo sledování kompromisů mezi dimenzemi:**
  přehlédne vzorec, který má SPACE právě zachytit.
- **Vtlačení každé dimenze do stejného rytmu měření:** plýtvá úsilím na
  dimenzích, které se mění pomalu, a podměřuje ty, které se mění rychle.
- **Považování jediného skóre z průzkumu spokojenosti za dostatečné bez
  objektivních dat:** ztrácí rovnováhu mezi subjektivními a objektivními
  zdroji, kterou rámec vyžaduje.
- **Ignorování zhoršujícího se trendu v jedné dimenzi, protože jiná vypadá
  dobře:** přesně to selhání, kterému má disciplína rámce napříč dimenzemi
  zabránit.

## Model zralosti

- **Úroveň 1, Zahájení:** Produktivita se měří jen metrikami aktivity, nesbírají
  se žádná data o spokojenosti, spolupráci ani efektivitě.
- **Úroveň 2, Rozvoj:** Některé další dimenze se měří neformálně, ale chybí
  důsledná revize napříč dimenzemi i standard minimálního složení.
- **Úroveň 3, Standardizace:** Vyvážená sada metrik z alespoň tří dimenzí SPACE
  se důsledně uplatňuje na úrovni týmů v celé organizaci.
- **Úroveň 4, Řízení:** Všechny dimenze se pravidelně revidují společně v
  rytmu, kompromisy mezi dimenzemi se aktivně zkoumají a rámec ovlivňuje
  skutečná rozhodnutí o obsazení a procesech.
- **Úroveň 5, Orchestrace:** Data SPACE přímo utvářejí plánování pracovních sil
  a investice do udržení lidí a organizace dokáže ukázat konkrétní zásahy,
  vycházející ze vzorců napříč dimenzemi, které měřitelně zlepšily dodávku i
  pohodu vývojářů zároveň.

## Náměty k diskusi

1. Která dimenze SPACE je v naší současné sadě metrik nejvíc podměřená?
2. Viděli jsme někdy, že aktivita týmu rostla, zatímco spokojenost tiše klesala?
3. Jak bychom dnes zachytili tým, který vyměňuje dlouhodobou udržitelnost za krátkodobý výstup?
4. Používají se nějaká data blízká SPACE k hodnocení jednotlivců místo týmů?
5. Jak by konkrétně vypadal skutečně vyvážený dashboard produktivity pro nás?

## Hlavní poznatky

- SPACE zahrnuje pět dimenzí, **Spokojenost a pohodu, Výkon, Aktivitu,
  Komunikaci a spolupráci a Efektivitu a plynulost**, a žádná z nich sama o
  sobě není důvěryhodná.
- Sestavte sadu metrik z **alespoň tří dimenzí** a kombinujte objektivní a
  subjektivní zdroje dat.
- Berte **metriky aktivity jako kontext**, nikdy jako hlavní signál
  produktivity (téma 3.4).
- Používejte SPACE na **úrovni týmu a systému**, ne jako skóre kartu
  jednotlivců.
- Dimenze revidujte společně a sledujte **kompromisy mezi dimenzemi**, ne jen
  pohyb v jedné z nich.

## Odkazy a další četba

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021): původní článek o rámci SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (výzkumný základ sdílený s metrikami DORA).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco a Timothy
  Lister (klasický argument pro to, brát produktivitu vývojářů jako lidskou,
  a ne čistě mechanickou otázku).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (výzkum motivace relevantní pro měření spokojenosti a pohody).
