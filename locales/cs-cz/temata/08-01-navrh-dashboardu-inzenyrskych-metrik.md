# 8.1 Návrh dashboardu inženýrských metrik

## Přehled a motivace

Každá metrika, kterou tato kniha pokryla, musí nakonec žít někde, kam se
skuteční lidé skutečně dívají, a špatně navržený
[dashboard](https://en.wikipedia.org/wiki/Dashboard_(business)) dokáže zmařit
pečlivou práci každého předchozího tématu: poctivé, dobře spravované metriky
spárované s pojistkami, podané nepoctivě, přeplněně nebo špatnému publiku,
vyvolají přesně ten zmatek a nedůvěru, kterým se kniha snažila předejít. Toto
téma je o konkrétním řemesle návrhu dashboardu: výběru toho, co komu ukázat,
poctivé vizualizaci a strukturování celého artefaktu tak, aby se skutečně
používal k rozhodování, místo aby byl ignorován nebo, hůř, špatně pochopen.

Hlavní disciplínou, kterou toto téma doporučuje, je návrh pro konkrétní
publikum. Dashboard vytvořený pro každodenní stand-up jednoho inženýrského
týmu potřebuje jiné metriky, jinou podrobnost a jinou vizuální hustotu než
dashboard pro čtvrtletní přezkum vedení a jediný univerzální dashboard, který
se snaží sloužit oběma, obvykle nesedí ani jednomu. Toto téma bere návrh
dashboardu jako skutečnou návrhářskou disciplínu, nikoli dodatečnou položku
vykazování, a opírá se po celou dobu o zásady statistické poctivosti z tématu
1.6: každá volba vizualizace buď pomáhá, nebo brání čtenáři vyvodit z dat
správný závěr.

Pro velké týmy je návrh dashboardu místem, kde se mnohé pojistky na úrovni
jednotlivých metrik z této knihy buď přenesou do praxe, nebo se ztratí. Velké
podniky provozující desítky dashboardů týmů potřebují jednotnost bez
strnulosti, sdílené standardy, které přesto dovolí uspokojit specifické
potřeby každého publika. Státní správa, jejíž dashboardy mohou čelit veřejnému
drobnohledu nebo sloužit jako základ pro kontrolní vykazování, potřebuje
poctivé standardy vizualizace doporučené tímto tématem uplatnit se zvláštní
důsledností, protože zavádějící graf odhalený externím kontrolorem poškodí
důvěryhodnost daleko za hranicemi konkrétní metriky.

## Klíčové zásady

- **Navrhujte pro konkrétní publikum a rozhodnutí, ne pro vyčerpávající
  pokrytí.** Dashboard, který se snaží sloužit všem, obvykle nesedí nikomu.
- **Každá volba vizualizace buď pomáhá, nebo aktivně uvádí v omyl.** Důsledně
  uplatněte statistickou poctivost z tématu 1.6: skutečný trend, poctivé osy,
  viditelná nejistota.
- **Méně dobře vybraných metrik porazí vyčerpávající pokrytí.** Prubířský
  princip této knihy od tématu 1.1 platí přímo i pro návrh dashboardu.
- **Dashboard potřebuje vlastníka a rytmus revizí**, přesně jako každá jiná
  spravovaná metrika (téma 1.4), jinak chátrá v neudržovaný, nedůvěryhodný
  artefakt.
- **Dvojice s pojistkami patří na stejný pohled.** Nikdy nerozdělujte
  metriku s pobídkou od její pojistky na různé dashboardy nebo různé sekce.

## Doporučení

### Navrhněte odlišné dashboardy pro odlišné publikum a rozhodnutí

Vytvořte samostatné, účelové pohledy, nikoli jeden dashboard sloužící všem
skupinám: provozní dashboard na úrovni týmu (denní nebo týdenní rytmus,
podrobné metriky dodávky a kvality pro vlastní potřebu týmu), dashboard pro
vedení (měsíční nebo čtvrtletní rytmus, s převahou výsledků podle tématu 7.4,
méně metrik, více kontextu) a tam, kde je to relevantní, externí dashboard
(pro zákazníky, kontrolní orgány nebo veřejnost, pečlivě spravovaný podle
důslednosti úměrné následkům z tématu 1.4). Každý slouží jinému rozhodnutí a
měl by být navržen přímo pro ně, nikoli jako filtrovaný pohled na jediný hlavní
dashboard.

### Důsledně uplatňujte poctivé standardy vizualizace

Berte zásady statistické poctivosti z tématu 1.6 jako pevné návrhové
požadavky, nikoli volitelné vylepšení: začínejte osy hodnot od nuly, pokud není
zdokumentovaná výslovná, viditelná výjimka, ukazujte trend v čase místo
jediného snímku, u zešikmených dat používejte mediány a percentily místo
průměrů a anotujte kontext (nasazení, incidenty, organizační změny), aby čtenář
dokázal rozlišit skutečný posun od šumu. Vyhněte se konkrétním manipulacím s
grafy, které téma 1.6 jmenovalo přímo: dvěma osám naznačujícím falešnou korelaci,
vybraným časovým rozsahům a 3D efektům, které zkreslují proporce.

### Nikdy neoddělujte metriku od její spárované pojistky na různé pohledy

V souladu se zásadou párování pojistek z tématu 1.2 jako s pevným pravidlem
návrhu dashboardu: frekvence nasazení a míra selhání změn (téma 2.10) patří na
stejný pohled, vždy viditelné společně, nikdy rozdělené na dashboard
„rychlosti“ a samostatný dashboard „kvality“, které by různé publikum mohlo
sledovat izolovaně. Není to drobná preference rozvržení; oddělení metriky od
její pojistky na různé dashboardy znovu vytváří právě riziko vystavení
pobídkám, před nímž téma 1.2 varuje, i když jsou obě čísla technicky někde
sledována.

### Přidělte každému dashboardu jmenovaného vlastníka a rytmus revizí

Uplatněte disciplínu správy z tématu 1.4 přímo na samotný artefakt dashboardu,
nejen na jednotlivé metriky, které zobrazuje: určete vlastníka odpovědného za
trvalou přesnost a relevanci dashboardu a stanovte rytmus revizí, při němž se
metriky přidávají, vyřazují nebo znovu zvažují. Dashboard bez vlastníka chátrá
přesně jako metrika bez vlastníka (téma 1.4) a hromadí zastaralé dlaždice,
které nikdo nemá pravomoc ani odpovědnost proklestit.

### Zabudujte výslovné, viditelné prohlášení o tom, k čemu dashboard neslouží

V souladu s rozlišením diagnostického a hodnoticího použití z tématu 1.1
uveďte přímo a viditelně na každém dashboardu, jehož metriky by se dalo
věrohodně zneužít k hodnocení jednotlivců, k čemu přesně neslouží: „tyto
metriky popisují zdraví týmu a systému; nepoužívají se při individuálních
hodnoceních výkonu.“ Toto výslovné prohlášení, uplatněné zejména na každém
dashboardu s daty o aktivitě (téma 3.4) nebo zátěži pohotovosti (téma 6.3), je
drobná návrhová volba s nepřiměřeným účinkem při předcházení právě tomu
hodnoticímu sklouznutí, před nímž kniha varuje po celou dobu.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Jediný vyčerpávající dashboard pro všechno publikum | Jednoduché postavit a udržovat jediný artefakt | Nesedí žádnému konkrétnímu publiku; pro některé zahlcující, pro jiné nedostatečný |
| Dashboardy podle publika | Každý dobře slouží svému skutečnému rozhodnutí | Více artefaktů ke stavbě, údržbě a udržování jednotnosti |
| Vyčerpávající pokrytí metrikami na každém pohledu | Nic se nepřehlédne | Únava z dashboardu; pohřbí metriky, na nichž pro rozhodnutí daného publika skutečně záleží |
| Minimální, rozhodnutími řízený výběr metrik pro každý dashboard | Zaměřené, použitelné, snáze důvěryhodné | Vyžaduje disciplínu záměrného výběru a riskuje vynechání něčeho relevantního |

Hlavní napětí je **vyčerpávající pokrytí versus zaměření**, základní napětí
tématu 1.1 uplatněné konkrétně na návrh dashboardu. Vyčerpávající dashboard
působí bezpečněji, nic není vynecháno, ale svému skutečnému publiku obvykle
slouží hůř než zaměřený dashboard postavený přesně kolem rozhodnutí, která
publikum potřebuje činit. Napětí vyřešíte tím, že postavíte několik účelových
dashboardů místo jednoho vyčerpávajícího, a přijmete mírně vyšší náklady na
údržbu několika zaměřených artefaktů výměnou za to, že každý je pro své určené
publikum skutečně užitečný.

## Otázky k diskusi s vaším týmem

1. **Snaží se náš současný dashboard sloužit několika skupinám publika
   najednou, a pokud ano, komu skutečně dobře slouží?** Projděte svůj stávající
   dashboard a určete jeho skutečné primární publikum oproti zamýšlenému;
   nesoulad je zde běžný a stojí za to ho pojmenovat přímo.

2. **Odděluje některý z našich dashboardů metriku s pobídkou od její spárované
   pojistky na různé pohledy?** Zkontrolujte své současné dashboardy
   konkrétně na tento vzorec a jako výchozí bod projděte každou z metrik DORA
   z části 2 a jejich dvojice.

3. **Obstály by vizualizace na našem dashboardu podle poctivých standardů
   vizualizace z tématu 1.6: osy od nuly, trend místo snímku, mediány
   místo průměrů u zešikmených dat?** Zkontrolujte své skutečné současné grafy
   přímo podle tohoto seznamu.

4. **Má každý dashboard, který udržujeme, jmenovaného vlastníka a rytmus
   revizí, nebo některé prostě existují, aniž by za jejich přesnost a
   relevanci někdo odpovídal?** Pokud některý dashboard jmenovaného vlastníka
   nemá, stojí za to tuto mezeru okamžitě zacelit, protože dashboard bez
   vlastníka chátrá přesně jako metrika bez vlastníka.

5. **Uvádí některý dashboard, jehož metriky by se dalo věrohodně zneužít k
   hodnocení jednotlivců, výslovně, k čemu neslouží?** Zkontrolujte konkrétně
   každý dashboard s daty o aktivitě nebo zátěži pohotovosti, zda toto
   výslovné prohlášení obsahuje.

6. **Kdybychom dnes přepracovali své dashboardy od nuly, publikum po
   publiku, počínaje rozhodnutím, které každé publikum potřebuje učinit, jak
   odlišně by výsledek vypadal od toho, co existuje?** Tento myšlenkový
   pokus často odhalí, kolik struktury dashboardu se nahromadilo setrvačností,
   nikoli záměrným návrhem.

## Pohled podle sektorů

**Startup.** V tomto měřítku je obvykle vhodný jediný jednoduchý dashboard,
protože celý tým i vedení bývají tatáž malá skupina lidí, kteří činí většinou
stejná rozhodnutí. Soustřeďte se na poctivé standardy vizualizace a výslovné
prohlášení o nepoužití k hodnocení i v malém měřítku, protože tyto návyky je
mnohem snazší vypěstovat brzy než dodatečně doplnit.

**Malá firma.** Většina hotových nástrojů poskytuje rozumné výchozí dashboardy;
hlavní disciplínou je zredukovat je na těch pár metrik, které skutečně
informují reálné rozhodnutí vaší konkrétní firmy, místo zobrazování každé
metriky, kterou nástroj ve výchozím nastavení spočítá.

**Velký podnik.** Jednotnost bez strnulosti je tu hlavní výzvou: desítky
dashboardů týmů potřebují dost sdíleného standardu (poctivá pravidla
vizualizace, párování pojistek, disciplína vlastnictví), aby byly důvěryhodné a
srovnatelné, a přitom nechaly specifickým provozním potřebám každého týmu
utvářet jeho vlastní pohled. Investujte do sdíleného standardu návrhu
dashboardu vynucovaného správou (téma 1.4), místo strnulé univerzální šablony
nebo zcela nestrukturovaných, nejednotných lokálních dashboardů.

**Státní správa.** Dashboardy vystavené externímu nebo kontrolnímu drobnohledu
potřebují zvláštní důslednost v poctivé vizualizaci a výslovné dokumentaci
správy, protože zavádějící graf odhalený externím kontrolorem poškodí
institucionální důvěryhodnost daleko za hranicemi konkrétní metriky. Uplatněte
nejvyšší standard doporučení tohoto tématu konkrétně na každý externě
přístupný dashboard.

## Příklady

**Velký podnik.** Jedna logistická technologická společnost po léta udržovala
jediný dashboard „zdraví inženýrství“, který sledovaly jak jednotlivé
inženýrské týmy, tak vedení společnosti, s více než čtyřiceti dlaždicemi od
počtů commitů jednotlivců po čtvrtletní obchodní výsledky. Ani jedno publikum
ho nepovažovalo za skutečně užitečný: inženýři ignorovali dlaždice
obchodních výsledků jako nerelevantní pro svou každodenní práci a vedení
zahlcovaly podrobné metriky dodávky bez kontextu pro výklad. Rozdělení na
zaměřený provozní dashboard týmu o šesti dlaždicích a samostatný dashboard
vedení o osmi dlaždicích, oba podle zásad párování pojistek a poctivé
vizualizace z tohoto tématu, vedlo k měřitelně vyšší zapojenosti a, což je
zásadní, vedení poprvé uvedlo, že dokáže vysvětlit, co čísla znamenají, když
se zeptá jeho vlastní vedení.

**Státní správa.** Veřejný dashboard digitálních služeb jedné státní vlády byl
veřejně kritizován za graf „průměrné“ doby zpracování se zkrácenou osou y,
který vizuálně zveličoval skromné zlepšení, tedy za porušení poctivých
standardů vizualizace z tématu 1.6, které odhalil a otiskl externí
technologický novinář. Přepracovaný dashboard agentury, vytvořený výslovně
podle standardů tohoto tématu, s osami od nuly, mediánem místo průměru u
pravostranně zešikmených dat o době zpracování a jasně anotovaným kontextem
každé pozoruhodné změny, byl v následném článku konkrétně pochválen jako vzor
transparentní prezentace dat ve veřejném sektoru a přímo napravil
důvěryhodnost, kterou dřívější zavádějící graf poškodil.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost záměrných, publikum respektujících a poctivě navržených dashboardů
je skutečné používání a skutečná důvěra: příklad logistické společnosti výše
ukazuje přímou cenu špatně navrženého jediného dashboardu, nízkou zapojenost
obou zamýšlených skupin publika, a přímý přínos přepracování, měřitelně vyšší
zapojenost, jakmile každé publikum dostalo pohled skutečně postavený pro jeho
vlastní rozhodnutí.

Celkové náklady vlastnictví (TCO) tvoří úsilí o návrh a údržbu několika
účelových dashboardů místo jednoho vyčerpávajícího artefaktu, plus průběžná
disciplína správy (jmenované vlastnictví, rytmus revizí), kterou toto téma
doporučuje. Tyto náklady jsou mírné ve srovnání s rizikem dashboardu, který
zůstane nepoužívaný, nebo hůř, který aktivně uvádí své publikum v omyl a
poškozuje důvěryhodnost, jak konkrétně ukazuje příklad státní správy výše.

## Antivzory a úskalí

- **Jediný dashboard, který se snaží sloužit každému publiku:** obvykle
  nesedí nikomu.
- **Oddělování metriky s pobídkou od její pojistky na různé pohledy:** znovu
  vytváří riziko vystavení pobídkám, před nímž téma 1.2 varuje.
- **Nepoctivé volby vizualizace:** zkrácené osy, vybrané časové rozsahy a dvě
  osy čtenáře uvádějí v omyl, někdy se skutečnými následky pro pověst.
- **Žádný jmenovaný vlastník ani rytmus revizí samotného dashboardu:** artefakt
  chátrá přesně jako metrika bez vlastníka.
- **Žádné výslovné prohlášení, k čemu dashboard neslouží:** zve k hodnoticímu
  sklouznutí, před nímž kniha po celou dobu varuje.
- **Vyčerpávající pokrytí dlaždicemi místo zaměřeného výběru řízeného
  rozhodnutími:** vyvolává únavu z dashboardu a pohřbívá to, na čem skutečně
  záleží.

## Model zralosti

- **Úroveň 1, Zahájení:** Jediný nevybraný dashboard, pokud nějaký existuje,
  slouží všem špatně, bez poctivého standardu vizualizace nebo párování
  pojistek.
- **Úroveň 2, Rozvoj:** Existují některé pohledy podle publika, ale standardy
  vizualizace jsou nejednotné a vlastnictví nejasné.
- **Úroveň 3, Standardizace:** Dashboardy podle publika s jednotnými, poctivými
  standardy vizualizace a párováním pojistek jsou zavedeny v celé organizaci,
  každý s jmenovaným vlastníkem.
- **Úroveň 4, Řízení:** Dashboardy se přezkoumávají v pravidelném rytmu, s
  výslovnými prohlášeními o nepoužití k hodnocení tam, kde je to relevantní, a
  zastaralé dlaždice se aktivně klestí.
- **Úroveň 5, Orchestrace:** Praxe návrhu dashboardů v organizaci je
  důvěryhodná, dobře spravovaná schopnost a organizace umí ukázat konkrétní
  případy, kdy poctivé, dobře navržené dashboardy napravily nebo vybudovaly
  důvěru zainteresovaných stran.

## Náměty k diskusi

1. Kdo je skutečné primární publikum našeho současného dashboardu oproti zamýšlenému?
2. Odděluje některý z našich dashboardů metriku od její pojistky?
3. Obstály by naše současné grafy při auditu poctivé vizualizace?
4. Má každý dashboard, který udržujeme, jasně jmenovaného odpovědného vlastníka?
5. Jak by vypadalo přepracování našich dashboardů od nuly s publikem na prvním místě?

## Hlavní poznatky

- Navrhujte **dashboardy podle publika** pro konkrétní rozhodnutí, ne jeden
  vyčerpávající artefakt, který se snaží sloužit všem.
- Uplatněte **poctivé standardy vizualizace** (téma 1.6) jako pevné
  požadavky: osy od nuly, trend místo snímku, mediány místo průměrů u
  zešikmených dat.
- **Nikdy neoddělujte metriku s pobídkou od její pojistky** na různé pohledy;
  držte dvojice s pojistkami na stejném dashboardu.
- Přidělte každému dashboardu **jmenovaného vlastníka a rytmus revizí**,
  přesně jak téma 1.4 požaduje u každé spravované metriky.
- Uveďte výslovně, **k čemu dashboard neslouží**, zejména tam, kde by se
  data o aktivitě nebo provozní zátěži dala zneužít k hodnocení jednotlivců.

## Odkazy a další četba

- *The Visual Display of Quantitative Information*, Edward R. Tufte (základní
  text o poctivé a bezúhonné vizualizaci dat).
- *Storytelling with Data*, Cole Nussbaumer Knaflic (praktický návrh
  dashboardů a grafů pro obchodní publikum).
- *Information Dashboard Design*, Stephen Few (zásady návrhu specifické pro
  dashboardy pro účinnou, poctivou komunikaci).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (disciplína párování metrik, kterou toto téma
  uplatňuje přímo na rozvržení dashboardu).
