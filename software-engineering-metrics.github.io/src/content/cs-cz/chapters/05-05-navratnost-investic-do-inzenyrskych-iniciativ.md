# 5.5 Návratnost investic do inženýrských iniciativ

## Přehled a motivace

Toto téma uzavírá část 5 tím, že spojuje všechno, co změřila předchozí čtyři
témata, kvalitu, přijetí, výsledky a náklady, do jediného finančního rámce, který
nakonec řídí většinu velkých inženýrských investičních rozhodnutí: **[návratnost
investic](https://en.wikipedia.org/wiki/Return_on_investment) (ROI)**. Ať se
organizace rozhoduje financovat modernizaci platformy, velké refaktorování nebo
novou produktovou řadu, někdo nakonec musí odpovědět na otázku ve finančních
termínech: stojí to za to, co to stojí. Toto téma je o poctivé odpovědi na tuto
otázku s využitím metrik, které tato kniha už vybudovala, místo aby se otázce
organizace vyhnula (což přenechává vliv na investiční rozhodnutí lidem, kteří
jsou k dobré odpovědi hůř vybaveni) nebo na ni odpověděla nafouknutým,
neudržitelným případem, který poškodí důvěryhodnost, když neobstojí.

Disciplína, kterou toto téma doporučuje, čerpá přímo z jednotkové ekonomiky
tématu 5.4 pro nákladovou stranu rovnice a z metrik výsledků tématu 5.3, s jejich
poctivým zacházením s nejistotou přičítání, pro stranu přínosů. Případ ROI
sestavený tímto způsobem je nutně skromnější a opatrnější než jednoduché,
líbivé titulní číslo, ale má rozhodující výhodu, kterou tato kniha zdůrazňuje
stále: obstojí při zkoumání, a organizace, která důsledně sestavuje obhajitelné
případy ROI, si získá víc důvěry, a tedy víc autonomie, v budoucích
investičních rozhodnutích než ta, která občas slibuje příliš.

U velkých týmů je disciplína ROI tím, co odděluje inženýrskou organizaci, s níž se
zachází jako se strategickým partnerem, od té, s níž se zachází jako s nákladovým
střediskem, jehož výdaje se snášejí, místo aby se do nich aktivně investovalo.
Velké podniky používají přísné případy ROI k úspěšné soutěži o kapitál s jinými
obchodními investicemi; státní správa používá ekvivalentní disciplínu, často
přeformulovanou jako analýzu nákladů a přínosů, k zajištění a udržení veřejného
financování technologií proti politickému a rozpočtovému tlaku, který má s
vágními, nepodloženými sliby malou trpělivost.

## Klíčové zásady

- **Poctivý případ ROI se staví z ostatních metrik této knihy**, ne se vymýšlí
  zvlášť; náklady z tématu 5.4, přínosy z témat 5.1 až 5.3.
- **Na nákladovou stranu patří celkové náklady vlastnictví, ne jen počáteční
  náklady.** Průběžná údržba, podpora a náklady na infrastrukturu se v průběhu
  životnosti systému kumulují.
- **Odhady přínosů nesou nejistotu; uveďte ji výslovně**, místo abyste
  předkládali jediné, falešně přesné číslo.
- **Negativní nebo hraniční zjištění ROI je legitimní, užitečný výsledek.**
  Disciplína existuje proto, aby poctivě informovala rozhodnutí, ne aby
  zdůvodňovala rozhodnutí už učiněná.
- **Sledujte skutečné ROI po faktu, ne jen předpokládaný případ předem.**
  Projekce, která se nikdy nesrovná s realitou, organizaci nic nenaučí.

## Doporučení

### Stavte nákladovou stranu na celkových nákladech vlastnictví, ne jen na počáteční investici

Zahrňte nejen počáteční náklady na vývoj, ale úplné **[celkové náklady
vlastnictví](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**:
průběžnou údržbu, infrastrukturu (jednotková ekonomika tématu 5.4 je zde přímo
užitečná), podporu a náklady obětované příležitosti za inženýrskou kapacitu,
kterou iniciativa spotřebuje a která mohla jít na alternativní práci. Projekt,
který vypadá levně jen podle počátečních nákladů, může být za celou dobu
životnosti drahý, jakmile se poctivě započte zátěž průběžné údržby.

### Stavte stranu přínosů na zdokumentovaných, poctivých důkazech o výsledcích

Čerpejte odhady přínosů z disciplíny měření výsledků témat 5.1 až 5.3: zlepšení
kvality převedená na nižší náklady na incidenty a podporu, data o přijetí
převedená na hodnotu poháněnou používáním a korelace s obchodními výsledky
vybudované poctivým, na zavádějící faktory zkontrolovaným přístupem příčinného
řetězce z tématu 5.3. Vyhněte se vymýšlení odhadu přínosu z prvních principů nebo
z optimistického předpokladu, pokud jsou k dispozici skutečně naměřená nebo
srovnatelná historická data, o která ho lze opřít.

### Uveďte nejistotu výslovně, a to rozsahem místo jediného čísla

Předkládejte odhady ROI jako rozsah (konzervativní případ a optimistický případ),
ne jako jediné, falešně přesné číslo, a vysvětlete, co rozsah pohání: která
konkrétní předpoklad, pokud se ukáže jako optimistický nebo pesimistický, by
výsledek pohnul nejvíc. Přímo to zrcadlí zásadu statistické gramotnosti z tématu
1.6, aplikovanou na finanční projekci, a chrání to důvěryhodnost případu, protože
jediný bodový odhad, který se ukáže jako chybný, poškodí důvěru mnohem víc než
dobře vysvětlený rozsah, do něhož skutečný výsledek spadne.

### Berte negativní nebo hraniční zjištění jako legitimní výsledek

Nastavte proces analýzy ROI tak, aby skutečně uměl dojít k závěru „toto za to
nestojí“, a berte tento závěr, když ho důkazy podporují, jako cenný výsledek, ne
selhání analýzy. Organizace známá tím, že vždy produkuje jen pozitivní případy
ROI, ať jde o jakoukoli iniciativu, rychle ztrácí důvěryhodnost, protože
zainteresované strany správně usuzují, že analýza není ve skutečnosti nezávislá
na rozhodnutí, které má informovat.

### Sledujte skutečné výsledky proti předpokládanému případu a uzavřete smyčku veřejně

Po dokončení iniciativy nebo dosažení smysluplného milníku srovnejte skutečně
naměřené výsledky s původním předpokládaným rozsahem a zveřejněte toto srovnání,
včetně míst, kde se projekce mýlila. Tato disciplína uzavírání smyčky, podobná
doporučení tématu 3.7 pro navazování na průzkumy, je tím, co buduje dlouhodobou
důvěryhodnost organizace v předpovídání ROI a zlepšuje přesnost budoucích odhadů
vytvořením skutečné, viditelné zpětné vazby.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Jednoduché tvrzení ROI jediným číslem | Přesvědčivé, snadno se sděluje | Falešně přesné; hrozí, že bude chybné a poškodí důvěryhodnost |
| ROI jako rozsah s uvedenou nejistotou | Obhajitelné, obstojí při zkoumání, poctivé ohledně toho, co rozsah pohání | Složitější na prezentaci; vyžaduje víc analytického úsilí |
| Analýza jen z počátečních nákladů | Jednoduchá, rychle se vytvoří | Podhodnocuje skutečné náklady vynecháním zátěže průběžné údržby a podpory |
| Úplná analýza celkových nákladů vlastnictví | Přesný, úplný obraz skutečných nákladů investice | Vyžaduje víc sběru dat, zejména pro projekci průběžných nákladů |

Hlavním napětím je **přesvědčivá jednoduchost versus obhajitelná poctivost**,
totéž napětí, které téma 5.3 pojmenovalo pro tvrzení o výsledcích obecně, nyní
aplikované konkrétně na finanční případ. Jednoduché, sebevědomé tvrzení ROI
jediným číslem se rozhodovateli v danou chvíli prodává snáz, ale poctivý případ
ve formě rozsahu s výslovnou nejistotou a úplným zahrnutím celkových nákladů
vlastnictví je to, co skutečně obstojí po dobu života investice a chrání
důvěryhodnost organizace pro další případ, který bude muset předložit.

## Otázky k diskusi s vaším týmem

1. **Zahrnuli jsme u našeho posledního velkého investičního případu do inženýrství
   celkové náklady vlastnictví, nebo jen počáteční náklady na vývoj?** Vraťte se k
   původnímu případu a ověřte, zda zahrnoval průběžnou údržbu a náklady na
   infrastrukturu, a pokud ne, odhadněte, co by přidaly.

2. **Opíral se náš odhad přínosů o zdokumentované, naměřené důkazy o výsledcích,
   nebo byl postaven na optimistickém předpokladu?** Vysledujte stranu přínosů
   nedávného případu k jejímu skutečnému zdroji důkazů a poctivě posuďte, jak
   byla ve skutečnosti podložená.

3. **Předložili jsme někdy odhad ROI jako jediné číslo, když by rozsah byl
   poctivější?** Probete, jak by rozsah vypadal u nedávného případu a jaký
   konkrétní předpoklad určoval jeho šířku.

4. **Došel někdy náš proces analýzy ROI k závěru, že iniciativa za sledování
   nestojí, a jak byl tento závěr přijat?** Pokud všechny dosavadní analýzy došly k
   pozitivnímu závěru, probete poctivě, zda to odráží skutečně zdravý výběr
   iniciativ, nebo proces, který produkuje jen odpověď, kterou zainteresované
   strany chtějí slyšet.

5. **Vrátili jsme se u dokončené iniciativy někdy k porovnání skutečných výsledků s
   původně předpokládaným případem?** Pokud ne, vyberte jednu skutečnou, dokončenou
   iniciativu a udělejte toto srovnání hned jako skupinové cvičení, ať je mezera
   mezi projekcí a realitou jakkoli nepříjemná.

6. **Co by bylo třeba, aby byl náš další velký případ ROI obhajitelný při skutečně
   skeptickém zkoumání někým mimo inženýrství?** Projděte svůj další plánovaný
   případ a určete nejslabší článek jeho současného řetězce důkazů dřív, než
   půjde k rozhodovateli.

## Pohled podle sektorů

**Startup.** Formální analýza ROI je často méně relevantní než jednodušší otázka
přežití a růstu: pomůže nám tato investice dosáhnout dalšího milníku nebo kola
financování. I tak uplatněte stejnou zásadu poctivosti, odolejte nafukování
případu k ospravedlnění rozhodnutí, ke kterému se tým už emocionálně zavázal,
protože pozornost investorů nakonec uplatní stejnou skepsi, kterou toto téma
doporučuje uplatnit nejdřív uvnitř.

**Malá firma.** Držte analýzu ROI přiměřenou velikosti rozhodnutí; velká,
víceletá investice do platformy si zaslouží plnou disciplínu, kterou toto téma
doporučuje, zatímco malý nákup nástroje stejnou přísnost nepotřebuje. Soustřeďte
úsilí formální analýzy na svých několik největších, nejdůležitějších rozhodnutí.

**Velký podnik.** Disciplína ROI v tomto měřítku rozhoduje o tom, zda inženýrství
úspěšně soutěží o kapitál s jinými obchodními investicemi s etablovanějšími
tradicemi finanční analýzy. Zaveďte úplnou disciplínu celkových nákladů
vlastnictví a rozsahů, kterou toto téma doporučuje, jako standardní praxi a
investujte do sledování uzavírajícího smyčku, které buduje dlouhodobou
důvěryhodnost předpovědí.

**Státní správa.** Analýza nákladů a přínosů, veřejnosprávní ekvivalent ROI, je
často formální, povinnou součástí zdůvodnění rozpočtu a poctivost ohledně
nejistoty a celkových nákladů vlastnictví je obzvlášť důležitá tam, kde mohou
zjištění čelit vnějšímu auditu nebo legislativnímu zkoumání. Analýza, která
přecenila přínos nebo podcenila náklady, po svém odhalení trvale poškodí
důvěryhodnost programu u jeho poskytovatele financí.

## Příklady

**Velký podnik.** Vedení inženýrství logistické technologické společnosti navrhlo
velkou investici do migrace staršího monolitu na architekturu mikroslužeb a zprvu
předložilo jediné, optimistické číslo ROI založené především na předpokládaném
zlepšení frekvence nasazení. Skeptické dotazování finanční zainteresované strany
odhalilo, že případ nezohlednil podstatnou průběžnou provozní složitost a náklady
na infrastrukturu, které nová architektura přinese. Revidovaný případ, sestavený
s úplnými celkovými náklady vlastnictví a rozsahem odrážejícím konzervativní i
optimistický scénář zlepšení dodávání, ukázal skromnější, ale stále pozitivní
očekávanou návratnost a, což je zásadní, obstál před zkoumáním finančního týmu a
zajistil financování, což původní, přehnaný případ pravděpodobně nezvládl.

**Státní správa.** Program digitalizace soudních spisů státní vlády postavil svůj
původní případ nákladů a přínosů jen na administrativních úsporách, s jediným,
přesným číslem ROI. Nezávislá revize rozpočtového úřadu zjistila, že projekce
nezohlednila časové úspory na straně občanů ani nižší míru chyb v soudních
řízeních, přínosy skutečné, ale vynechané, protože se hůř kvantifikovaly než
administrativní náklady. Revidovaná analýza tyto přínosy zahrnula s výslovně
uvedeným rozsahem odrážejícím skutečnou nejistotu měření, což vytvořilo silnější
a, což je důležité, obhajitelnější případ, který rozpočtový úřad nakonec
schválil, právě proto, že byl transparentní v tom, co s jistotou ví a co ne.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností důsledné disciplíny ROI je, poněkud rekurzivně, důvěryhodnost
samotné disciplíny ROI: organizace, která důsledně sestavuje poctivé, obhajitelné
případy, včetně občasného závěru, že iniciativa za sledování nestojí, si získá
víc důvěry, a tedy víc autonomie, v budoucích investičních rozhodnutích než ta,
jejíž případy se vnímají skepticky, protože už dříve slibovaly příliš. Příklad
logistické společnosti výše to ukazuje přímo: revidovaný, skromnější, ale
poctivý případ uspěl tam, kde by nafouknutý originál pravděpodobně u zkoumání
neobstál.

Celkové náklady vlastnictví (TCO) této disciplíny tvoří analytické úsilí o
sestavení odhadů nákladů s úplnými celkovými náklady vlastnictví, o opření
odhadů přínosů o skutečné důkazy, o výslovné uvedení nejistoty a o sledování
skutečných výsledků po faktu. Toto úsilí je skutečně víc práce než rychlý,
sebevědomý návrh s jediným číslem a vyplatí se právě proto, že alternativa
riskuje důvěryhodnost organizace pro každý budoucí případ, který bude muset
předložit.

## Antivzory a úskalí

- **Analýza jen z počátečních nákladů, vynechávající celkové náklady
  vlastnictví:** podhodnocuje skutečné náklady investice, zejména u dlouhověkých
  systémů.
- **Vymýšlení odhadů přínosů z optimistického předpokladu místo ze
  zdokumentovaných důkazů:** vytváří případ, který neobstojí při zkoumání.
- **Předkládání jediného, falešně přesného čísla ROI místo uvedeného rozsahu:**
  poškozuje důvěryhodnost, když se skutečný výsledek od bodového odhadu liší.
- **Proces analýzy, který vždy produkuje jen pozitivní závěry:** zainteresované
  strany ho správně čtou jako důkaz, že proces není skutečně nezávislý.
- **Nikdy nesledovat skutečné výsledky proti původní projekci:** ztrácí se
  zpětná vazba, která by zlepšila přesnost budoucích předpovědí.
- **Sestavování případu k zdůvodnění rozhodnutí, ke kterému se už lidé
  emocionálně zavázali, místo skutečného informování rozhodnutí:** kořenová
  příčina většiny nafouknutých případů ROI.

## Model zralosti

- **Úroveň 1, Zahájení:** Případy ROI jsou neformální, nepodložené
  zdokumentovanými důkazy a téměř vždy dospívají k pozitivnímu závěru bez ohledu
  na iniciativu.
- **Úroveň 2, Rozvoj:** Některé případy zahrnují odhady nákladů a přínosů, ale
  celkové náklady vlastnictví se uplatňují nekonzistentně a nejistota se
  výslovně uvádí jen zřídka.
- **Úroveň 3, Standardizace:** Případy ROI důsledně používají úplné celkové
  náklady vlastnictví, zdokumentované důkazy o přínosech a uvedený rozsah
  odrážející skutečnou nejistotu, v celé organizaci.
- **Úroveň 4, Řízení:** Skutečné výsledky se po dokončení sledují proti původním
  projekcím a srovnání se zveřejňuje a používá ke zlepšení budoucích předpovědí.
- **Úroveň 5, Orchestrace:** Organizace má prokázanou, víceletou historii
  přesných, poctivých předpovědí ROI, včetně případů, které správně došly k
  závěru, že iniciativa za sledování nestojí, a tato historie získává
  inženýrství důvěryhodné místo ve strategických investičních rozhodnutích.

## Náměty k diskusi

1. Jaký je náš největší současný investiční případ a obstál by dnes při skutečně skeptickém zkoumání?
2. Sledovali jsme někdy skutečný výsledek dokončené iniciativy proti původní projekci ROI?
3. Co by se muselo v našem procesu analýzy změnit, aby skutečně uměl dojít k závěru „nestojí to za to“?
4. Která složka celkových nákladů vlastnictví nejčastěji chybí v našich současných odhadech nákladů?
5. Jaký je nejslabší článek důkazů v našem dalším plánovaném velkém investičním případu?

## Hlavní poznatky

- Stavte případy ROI z **ostatních metrik této knihy**, náklady z jednotkové
  ekonomiky (téma 5.4), přínosy ze zdokumentovaných důkazů o výsledcích (témata
  5.1 až 5.3), ne z vymyšlených předpokladů.
- Zahrňte **celkové náklady vlastnictví**, ne jen počáteční náklady, a uvádějte
  odhady přínosů jako **rozsah s výslovnou nejistotou**, ne jako jediné, falešně
  přesné číslo.
- Vybudujte proces skutečně schopný dojít k závěru, že iniciativa **za sledování
  nestojí**; analýza, která vždy produkuje jen pozitivní závěry, není
  důvěryhodná.
- **Sledujte skutečné výsledky proti projekci** po dokončení a zveřejňujte srovnání,
  abyste vybudovali dlouhodobou důvěryhodnost předpovědí.
- Poctivá, obhajitelná disciplína ROI je to, co inženýrství v čase získává
  **důvěryhodné místo** ve strategických investičních rozhodnutích.

## Odkazy a další četba

- *How to Measure Anything*, Douglas W. Hubbard (kvantifikace nejisté hodnoty a
  tvorba obhajitelných odhadů ve formě rozsahů).
- *Cloud FinOps*, J.R. Storment a Mike Fuller (disciplína celkových nákladů
  vlastnictví pro investice do cloudové infrastruktury).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (výzkumný základ pro propojení investic do praktik dodávání
  s obchodní návratností).
- U.S. Office of Management and Budget Circular A-94, pokyny k analýze nákladů a
  přínosů pro federální programy (disciplína ROI ve veřejném sektoru).
