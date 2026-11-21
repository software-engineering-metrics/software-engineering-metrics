# 6.4 Metriky bezpečnosti a správy zranitelností

## Přehled a motivace

Toto téma uzavírá část 6 tím, že rozšiřuje stejnou disciplínu spolehlivosti, kterou
tato část vybudovala, určování cílů, párování s pojistkami, poctivé hlášení
incidentů, na odlišné, ale úzce související riziko: nejde o to, zda systém selže
sám, ale zda ho někdo záměrně přiměje k selhání nebo ho zneužije. Metriky **správy
zranitelností** měří, jak dobře organizace nachází a opravuje bezpečnostní
slabiny dřív, než se zneužijí: kolik zranitelností existuje, jak jsou závažné a,
což je zásadní, jak rychle se po objevení napraví, protože známá, ale
neopravená zranitelnost je trvalé, kvantifikovatelné riziko, které se organizace
rozhodla nést, ať záměrně, nebo z nedbalosti.

Hlavní problém tohoto tématu přímo paralelizuje zacházení tématu 4.4 s nálezy
statické analýzy: hrubý počet zranitelností je špatná metrika, směšuje triviální a
kritické problémy a je vystaven přesně stejným rizikům manipulace, zúžení
definice, potlačení a manipulace s prahem, jaká téma 1.2 popisuje obecně.
Konkrétním doplňkem, který bezpečnostní metriky vyžadují, je doba nápravy sledovaná
podle závažnosti, protože kritická zranitelnost ležící neopravená měsíce
představuje zásadně jiné riziko než táž zranitelnost zachycená a opravená do
jednoho dne, informace, kterou samotný počet sdělit nedokáže.

U velkých týmů nesou bezpečnostní metriky důsledky nad rámec bezprostředního
technického rizika: velké podniky čelí smluvní a reputační expozici z narušení a
státní správa čelí důsledkům pro národní bezpečnost, právním důsledkům a důsledkům
pro veřejnou důvěru, které činí z bezpečnostních metrik věc skutečného
veřejného zájmu, ne jen vnitřní inženýrskou záležitost. Toto téma bere správu
zranitelností se stejnou přísností a stejnou disciplínou párování s pojistkami,
jakou tato kniha uplatňuje všude, protože bezpečnostní metriky jsou vystaveny
každému riziku manipulace, které kniha popisuje, s odpovídajícím způsobem vyššími
sázkami, když se manipulace podaří.

## Klíčové zásady

- **Doba nápravy podle závažnosti je důležitější než hrubý počet zranitelností.**
  Kritický problém neopravený měsíce je zásadně jiné riziko než týž problém
  zachycený a rychle opravený.
- **Bezpečnostní metriky jsou vystaveny stejným rizikům manipulace jako nálezy
  statické analýzy** (téma 4.4), s vyššími sázkami, když se manipulace podaří.
- **Klasifikace závažnosti potřebuje vnější, standardizovaná kritéria**, kde je to
  možné, ne čistě vnitřní úsudek, který může sklouzávat ke shovívavosti.
- **Zranitelnost zveřejněná a rychle opravená je znamením zdravého procesu, ne
  selhání ke skrývání.** Trestání zveřejňování odrazuje od hlášení, na němž celý
  tento systém závisí.
- **Bezpečnostní dluh je kategorií technického dluhu** (téma 4.5) a měl by
  soutěžit o prioritizovanou kapacitu nápravy na stejném výslovném, kvantifikovaném
  základě.

## Doporučení

### Sledujte dobu nápravy podle závažnosti jako primární metriku

U každé objevené zranitelnosti zaznamenejte její závažnost (pomocí standardizované
škály, jako je [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, kde je to použitelné) a sledujte dobu od objevení po skutečnou nápravu, ne po
uzavření tiketu nebo sloučení opravy, která ještě není nasazena. Stanovte výslovné
cíle doby nápravy podle závažnosti, obvykle měřené ve dnech u kritických problémů
a v týdnech u méně závažných, a sledujte plnění těchto cílů jako primární metriku
bezpečnostního zdraví, místo hrubého, nevaženého počtu zranitelností.

### Používejte standardizované hodnocení závažnosti místo čistě vnitřního úsudku

Tam, kde je dostupný standardizovaný vnější systém hodnocení jako CVSS, použijte
ho jako primární základ klasifikace závažnosti, místo abyste se spoléhali výhradně
na vnitřní, potenciálně nekonzistentní úsudek. Zrcadlí to disciplínu klasifikace
uniklých vad z tématu 5.1 a disciplínu klasifikace incidentů z tématu 6.2,
aplikovanou zde na bezpečnost, a odolává to stejnému riziku shovívavého posunu,
před nímž tato témata varují, protože externě ukotvené skóre se tiše přepisuje
směrem dolů hůř než čistě vnitřní.

### Vybudujte skutečně nepotrestávající kulturu zveřejňování zranitelností a vnitřního hlášení

Uplatněte zásadu postmortemů bez obviňování z tématu 6.2 přímo na bezpečnost:
inženýr, který objeví a nahlásí zranitelnost, kterou sám zavedl, nebo výzkumník,
který zodpovědně zveřejní zranitelnost nalezenou zvenčí, by měl být brán jako
poskytovatel cenné služby, ne jako někdo, kdo se přiznává k selhání. Trestání
zveřejňování, vnitřního i od externích výzkumníků, spolehlivě odrazuje od
přesně toho hlášení, na němž celý systém správy zranitelností závisí, a zahání
skutečné riziko do ilegality, místo aby ho vedlo do řízeného procesu nápravy.

### Berte bezpečnostní dluh jako kategorii v rámci backlogu technického dluhu

Začleňte známé zranitelnosti s přijatým rizikem, ty, které se záměrně zatím
nenapravují kvůli konkurenčním prioritám, do téhož viditelného, kvantifikovaného
backlogu technického dluhu popsaného v tématu 4.5, se stejným rámováním cena
opravy versus cena nesení. Tím se zabrání, aby bezpečnostní riziko buď zmizelo v
neviditelném, nezdokumentovaném stavu „my o tom víme“, nebo nespravedlivě soutěžilo
s prací na funkcích bez výslovného, kvantifikovaného zdůvodnění své priority.

### Kombinujte metriky zranitelností s kontextem expozice a zneužitelnosti

Ne každá zranitelnost se stejným nominálním skóre závažnosti nese stejné skutečné
riziko: kritická zranitelnost ve vnitřním nástroji bez externí síťové expozice je
jiné riziko než tatáž nominální závažnost ve službě přístupné z internetu, která
zpracovává data zákazníků. Kde je to možné, vážte prioritizaci skutečnou expozicí
a kontextem zneužitelnosti, ne jen skóre závažnosti, aby se kapacita nápravy
soustředila nejdřív na skutečně nejrizikovější položky.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Hrubý počet zranitelností | Jednoduchý na vykazování | Směšuje triviální a kritické problémy; snadno se zmanipuluje potlačením |
| Sledování vážené závažností a doby nápravy | Odráží skutečnou expozici riziku v čase | Vyžaduje disciplinovanou, důslednou klasifikaci a sledování |
| Čistě vnitřní úsudek o závažnosti | Flexibilní, přizpůsobený kontextu | Náchylný ke shovívavému posunu a nekonzistenci mezi týmy |
| Standardizované vnější hodnocení (např. CVSS) plus vážení kontextem | Konzistentní, externě ukotvené, odolné vůči manipulaci | Vyžaduje dodatečnou analýzu kontextu pro skutečně přesnou prioritizaci |

Hlavním napětím je **konzistence versus kontext**. Čistě standardizovaný přístup k
hodnocení je konzistentní a odolný vůči manipulaci, ale může minout skutečný
kontext, expozici a zneužitelnost, který určuje skutečné riziko; čistě kontextový,
vnitřně posuzovaný přístup zachytí nuance, ale je náchylný ke stejnému riziku
shovívavého posunu, před nímž tato kniha varuje u každé jiné metriky závislé na
klasifikaci. Napětí vyřešíte tím, že standardizované hodnocení použijete jako
konzistentní základ a nad ním uplatníte zdokumentované, auditovatelné vážení
kontextem, místo abyste volili některý extrém samostatně.

## Otázky k diskusi s vaším týmem

1. **Sledujeme dobu nápravy podle závažnosti, nebo jen hrubý počet zranitelností?**
   Vytáhněte si skutečnou současnou metriku a ověřte, zda rozlišuje kritický
   problém ležící neopravený měsíce od problému opraveného do jednoho dne, protože
   hrubý počet zachází se těmito velmi odlišně rizikovými situacemi stejně.

2. **Používáme standardizovaný vnější systém hodnocení závažnosti, nebo se klasifikace
   opírá o čistě vnitřní, potenciálně nekonzistentní úsudek?** Pokud o čistě
   vnitřní, probete, co by přijetí standardu jako CVSS změnilo na vaší současné
   praxi klasifikace.

3. **Cítil by se inženýr, který zavedl a poté nahlásil zranitelnost, bezpečně, nebo
   by se bál trestu?** Je to přímá bezpečnostní verze otázky kultury bez obviňování
   z tématu 6.2 a poctivá odpověď zde nesmírně záleží na tom, zda se vašim datům o
   zranitelnostech vůbec dá věřit.

4. **Máme viditelný, kvantifikovaný backlog známých zranitelností s přijatým
   rizikem, nebo se stav „my o tom víme“ časem tiše stává neviditelným a
   neřešeným?** Ověřte, zda se váš bezpečnostní dluh sleduje se stejnou přísností
   jako váš obecný backlog technického dluhu (téma 4.5).

5. **Zohledňuje naše prioritizace nápravy skutečnou expozici a zneužitelnost, nebo
   se spoléhá čistě na nominální skóre závažnosti bez ohledu na kontext?**
   Vyberte skutečný příklad, kdy dvě zranitelnosti s podobnou nominální závažností
   nesly velmi odlišné skutečné riziko, a probete, zda by je váš současný proces
   prioritizoval správně.

6. **Sklouzla někdy klasifikace závažnosti zranitelnosti v čase směrem dolů bez
   jasného zdůvodnění?** Zrcadlí to vzorec manipulace s definicí, před nímž
   varují téma 1.2 i téma 6.2; auditujte vzorek svých nedávných klasifikací na
   toto konkrétní riziko.

## Pohled podle sektorů

**Startup.** Formální procesy správy zranitelností jsou velmi brzy často zbytečné,
ale přijetí základního automatizovaného skenování závislostí a jednoduché, poctivé
vnitřní normy hlášení od začátku stojí málo a brání tomu, aby se bezpečnostní
dluh neviditelně hromadil dřív, než bude mít tým kapacitu řešit ho systematicky.

**Malá firma.** Většina moderních vývojových platforem zahrnuje bezplatné nebo
levné automatizované skenování zranitelností závislostí; zapněte ho brzy a
sledujte dobu nápravy všeho, co je označeno jako kritické, i bez vyhrazené
bezpečnostní funkce či sofistikovaných nástrojů.

**Velký podnik.** Konzistentní, standardizované hodnocení závažnosti a skutečně
nepotrestávající kultura zveřejňování jsou obě nezbytné a obě se ve velkém
měřítku udržují hůř, kde jsou nekonzistence napříč desítkami týmů a kulturní posun
k hledání viníka po vážném incidentu trvalými riziky. Investujte do vyhrazené
funkce správy bezpečnosti, která udrží konzistenci klasifikace a aktivně chrání
kulturu zveřejňování.

**Státní správa.** Bezpečnostní metriky se zde často přímo protínají s národní
bezpečností, regulatorní shodou a veřejnou důvěrou a vážná, špatně zvládnutá
zranitelnost může mít důsledky daleko za typickým narušením v soukromém sektoru.
Udržujte přísnou, externě ukotvenou klasifikaci závažnosti, aktivně chraňte
vnitřní i vnější kulturu zveřejňování a berte bezpečnostní dluh s transparentností
a přísností prioritizace, kterou toto téma doporučuje, protože nezdokumentovaná,
tiše přijatá kritická zranitelnost ve veřejné infrastruktuře je skutečně vážné,
auditovatelné riziko.

## Příklady

**Velký podnik.** Bezpečnostní tým softwarové společnosti léta vykazoval vedení jen
hrubý počet zranitelností, číslo s plochým trendem, které dávalo falešný pocit
stability. Revidovaná analýza vážená závažností a dobou nápravy odhalila, že
zatímco celkový počet byl plochý, kritické zranitelnosti se opravovaly v průměru
přes devadesát dní, daleko za jakýmkoli rozumným cílem, protože v každém
plánovacím cyklu neúspěšně soutěžily s prací na funkcích bez vyhrazené, chráněné
kapacity. Stanovení pevného cíle nápravy kritických zranitelností do 7 dnů,
podepřené chráněnou kapacitou na nápravu bezpečnostního dluhu podle modelu alokace
technického dluhu z tématu 4.5, snížilo průměrnou dobu nápravy kritických
zranitelností pod pět dní během dvou čtvrtletí.

**Státní správa.** Národní agentura pro infrastrukturu zjistila po externím
bezpečnostním auditu, že vnitřní inženýři se neformálně vyhýbali hlášení
zranitelností, které objevili ve vlastním kódu, ze strachu, že by to špatně
vypadalo v jejich hodnocení výkonu, jasná paralela vzorce podhodnocování hlášení
incidentů kvůli obviňování z tématu 6.2. Agentura zavedla výslovnou, veřejně
sdělenou politiku chránící vnitřní oznamovatele zranitelností před jakýmkoli
dopadem na hodnocení výkonu, modelovanou přímo na praxi reakce na incidenty bez
obviňování, a počet vnitřních hlášení zranitelností během následujícího roku
podstatně vzrostl, což vedení agentury správně vyložilo jako důkaz zlepšené
detekce a poctivého hlášení, ne jako důkaz klesající kvality kódu, čímž se
vyhnulo přirozenému, ale mylnému závěru, že rostoucí číslo musí znamenat, že se
věci zhoršily.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností důsledné, dobře klasifikované, poctivě hlášené správy zranitelností
jsou odvrácené náklady na narušení, které u vážného bezpečnostního incidentu často
mnohonásobně převyšují náklady na proaktivní nápravu, spolu s odvrácenou regulatorní,
smluvní a reputační škodou. Příklad softwarové společnosti výše ukazuje konkrétní
mechanismus: bezpečnostní dluh léta tiše prohrával soutěž o prioritu s prací na
funkcích, přesně vzorec, před nímž téma 4.5 varuje u technického dluhu obecně, dokud
ho chráněná kapacita na nápravu přímo neopravila.

Celkové náklady vlastnictví (TCO) zahrnují nástroje automatizovaného skenování,
chráněnou kapacitu na nápravu, jejíž alokaci toto téma doporučuje, a trvalou
kulturní investici do nepotrestávající praxe zveřejňování. Tyto náklady jsou
skromné ve srovnání s cenou vážné, úspěšně zneužité zranitelnosti, kterou by
proaktivní, dobře prioritizovaná náprava zachytila a opravila dávno předtím, než
mohla být zneužita.

## Antivzory a úskalí

- **Sledovat jen hrubý počet zranitelností:** směšuje triviální a kritické
  problémy a dává falešný pocit stability nebo krize bez ohledu na skutečné
  riziko.
- **Čistě vnitřní, nestandardizovaná klasifikace závažnosti:** náchylná ke
  shovívavému posunu a nekonzistenci mezi týmy.
- **Trestat zveřejňování zranitelností, vnitřní i vnější:** zahání skutečné riziko
  do ilegality, místo aby ho vedlo do řízeného procesu nápravy.
- **Bezpečnostní dluh bez viditelného, kvantifikovaného backlogu:** automaticky
  prohrává soutěž o prioritu s prací na funkcích.
- **Prioritizovat jen podle nominálního skóre závažnosti, ignorovat kontext
  expozice a zneužitelnosti:** míří omezenou kapacitu nápravy špatným směrem.
- **Vykládat rostoucí počet hlášení zranitelností jako důkaz klesající kvality,
  aniž by se ověřilo, zda se nezlepšilo samotné hlášení:** konkrétní případ pasti
  zavádějící proměnné z tématu 1.6.

## Model zralosti

- **Úroveň 1, Zahájení:** Zranitelnosti se sledují, pokud vůbec, jako hrubý počet
  bez vážení závažnosti, bez sledování doby nápravy a s trestající kulturou
  zveřejňování.
- **Úroveň 2, Rozvoj:** Určitá klasifikace závažnosti existuje, ale standardy jsou
  nekonzistentní a doba nápravy se nesleduje proti výslovným cílům.
- **Úroveň 3, Standardizace:** Standardizované, externě ukotvené hodnocení
  závažnosti a výslovné cíle doby nápravy podle závažnosti se uplatňují důsledně,
  se skutečně nepotrestávající kulturou zveřejňování.
- **Úroveň 4, Řízení:** Bezpečnostní dluh se sleduje ve viditelném, kvantifikovaném
  backlogu s chráněnou kapacitou na nápravu; prioritizace zohledňuje kontext
  expozice a zneužitelnosti, ne jen závažnost.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná snížení
  doby nápravy kritických zranitelností a prokázat trvalou, důvěryhodnou kulturu
  zveřejňování, která vytváří poctivá, komplexní data o zranitelnostech.

## Náměty k diskusi

1. Jaká je naše současná průměrná doba nápravy kritických zranitelností a splňuje výslovný cíl?
2. Cítil by se inženýr, který zavedl zranitelnost, bezpečně, kdyby ji sám nahlásil?
3. Máme viditelný, kvantifikovaný backlog známého bezpečnostního dluhu s přijatým rizikem?
4. Zohledňuje naše prioritizace nápravy skutečnou expozici, nebo jen nominální závažnost?
5. Sklouzla někdy klasifikace závažnosti v čase směrem dolů bez jasného zdůvodnění?

## Hlavní poznatky

- Sledujte **dobu nápravy podle závažnosti**, ne hrubý počet zranitelností, jako
  primární metriku bezpečnostního zdraví.
- Používejte **standardizované vnější hodnocení závažnosti** (například CVSS) jako
  konzistentní základ, odolný vůči riziku shovívavého posunu, k němuž čistě vnitřní
  úsudek vybízí.
- Vybudujte skutečně **nepotrestávající kulturu zveřejňování**; trestání hlášení
  zahání skutečné riziko do ilegality.
- Berte **bezpečnostní dluh jako kategorii technického dluhu** (téma 4.5), která
  férově soutěží o chráněnou kapacitu na nápravu.
- Vážte prioritizaci **skutečnou expozicí a zneužitelností**, ne jen skóre
  závažnosti.

## Odkazy a další četba

- Specifikace Common Vulnerability Scoring System (CVSS) organizace FIRST.org:
  standardizovaný rámec hodnocení závažnosti, na který se toto téma odkazuje.
- Zdroje OWASP Foundation o správě zranitelností a praxi bezpečného životního
  cyklu vývoje softwaru.
- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy Beyer,
  Chris Jones, Jennifer Petoff a Niall Richard Murphy, eds. (zásady kultury bez
  obviňování, které toto téma aplikuje na zveřejňování bezpečnostních
  zranitelností).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management
  Planning*: autoritativní pokyny k praxi nápravy zranitelností.
