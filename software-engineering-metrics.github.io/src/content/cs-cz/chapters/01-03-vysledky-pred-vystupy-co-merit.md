# 1.3 Výsledky před výstupy: co měřit

## Přehled a motivace

Každá inženýrská metrika spadá do jedné ze tří kategorií a jejich zaměňování je
druhým nejčastějším způsobem selhání v této knize, hned po úplném ignorování
[Goodhartova zákona](https://en.wikipedia.org/wiki/Goodhart%27s_law). **Vstupní
metrika** měří vynaložené úsilí: hodiny inženýrů, nasazené peníze, přislíbené
story pointy. **Výstupní metrika** měří, co systém vyprodukoval: dodané funkce,
sloučené pull requesty, uzavřené tikety. **Metrika výsledku** měří změnu, na které
skutečně záleželo: udržené tržby, předejité incidenty, ušetřený čas uživatele.
Týmy se přirozeně přiklánějí ke vstupům a výstupům, protože se snadno počítají
a jsou plně v moci týmu. Hodnota téměř vždy leží ve výsledcích, které se
objevují pomaleji, hůře se měří a hůře se připisují práci jednoho týmu.

Toto téma se tomuto přitahování záměrně brání. Dashboard postavený výhradně z
vstupů a výstupů může vypadat působivě zaneprázdněně, aniž by vytvářel
jakoukoli skutečnou hodnotu: tým může dodat desítky funkcí, které nikdo
nepoužívá, uzavřít stovky tiketů, které se za týden znovu otevřou, nebo splnit
každý odhad ve story pointech, zatímco skutečné výsledky produktu, udržení
uživatelů, spokojenost, tržby, stagnují nebo klesají. Nic z té zaneprázdněnosti
se na dashboardu jen s výstupy neukáže jako problém, protože dashboardy jen s
výstupy nejsou stavěny, aby to viděly.

V měřítku velkého podniku a státní správy tento rozdíl rozhoduje o tom, zda
vedení dokáže rozlišit produktivní tým od týmu, který je pouze aktivní.
Divize může léta vykazovat vynikající výstupní čísla, dodané funkce, uzavřené
sprinty, zatímco výsledek, na kterém skutečně záleží investorovi nebo
zákonodárci, udržené tržby, zkrácené čekací doby občanů, pod tím tiše
eroduje. „Dodali jsme plán“ není totéž tvrzení jako „plán věci zlepšil“ a
rozlišit je dokáže jen sada metrik vážená k výsledkům.

## Klíčové zásady

- **Vstupy a výstupy jsou zástupné ukazatele; výsledky jsou věc sama.** Vážte
  svou sadu metrik k výsledkům, kamkoli na ně dosáhnete.
- **Snadnost měření není důvodem něco měřit.** Nejsnáze spočitatelné věci jsou
  obvykle vstupy a výstupy, ne proto, že na nich nejvíc záleží, ale proto, že
  je mechanicky jednoduché je zachytit.
- **Připisování se s postupem k výsledkům ztěžuje.** Přijměte tento kompromis
  záměrně, místo abyste se stahovali k výstupům jen proto, že výsledky se
  hůře připisují.
- **Tým může své vstupy a výstupy řídit, ale výsledky jen ovlivňovat.**
  Navrhněte zodpovědnost podle toho: činte týmy odpovědnými za to, co skutečně
  mohou řídit, a výsledky sledujte jako sdílené, mezitýmové signály.
- **Jediný výsledek typu Polárka s malou sadou řidičů poráží zeď výstupních
  dlaždic.** Pokrytí má vycházet ze struktury, ne ze samotného objemu dashboardu.

## Doporučení

### Zařaďte každou metriku, než ji přijmete

U každé kandidátní metriky se zeptejte, do které ze tří kategorií spadá.
„Sloučené pull requesty za týden“ je výstup. „Procento sloučených pull requestů,
které do týdne způsobily produkční incident“ je blíž výsledku, protože měří
důsledek, nikoli objem. Toto zařazení zabere třicet vteřin a mělo by být
povinné, než se metrika přidá na jakýkoli týmový nebo organizační dashboard,
protože je to nejrychlejší způsob, jak zachytit dashboard, který se tiše plní
snadno spočitatelnými výstupy a přitom věří, že měří hodnotu.

### Postavte strom metrik pod jediným výsledkem

Nesledujte plochý seznam. Uspořádejte metriky jako **strom metrik** (někdy
nazývaný strom KPI): horní metrika výsledku rozložená na řidiče, kteří ji
příčinně nebo matematicky živí, až k provozním výstupním a vstupním mírám, které
jednotlivé týmy skutečně vlastní. Když se horní výsledek pohne, strom vám
řekne, kterého nižšího řidiče zkoumat, a změní „číslo kleslo“ na „příčinou je
tento konkrétní krok v pipeline“. Na vrchol pojmenujte jedinou **metriku typu
Polárka** všude, kde to vaše doména umožňuje: míru, která nejlépe zachytí
dodanou hodnotu, frekvenci nasazení spárovanou s mírou selhání změn pro
platformní tým nebo týdenní aktivní používání klíčové funkce pro produktový
tým.

### Vážte výsledky při revizích, nejen na dashboardu

Strom metrik je tak dobrý, jak se v praxi používá. Na revizích sprintů,
čtvrtletních obchodních revizích a aktualizacích pro vedení začínejte číslem na
úrovni výsledku a výstupní a vstupní metriky pod ním používejte jen k
vysvětlení pohybu, ne jako jeho náhradu. Tým, který hlásí „tento sprint jsme
uzavřeli 40 tiketů“ bez jakéhokoli kontextu výsledku, vám neřekl nic o tom,
zda na práci záleželo; tým, který hlásí „uniklé vady klesly o 30 % a zde je
investice do testování, která to způsobila“, vám řekl něco skutečného.

### Přijměte pomalejší zpětnou vazbu u metrik výsledků a spárujte je s rychlejšími předstihovými ukazateli

Metriky výsledků jsou často zpožděné: potvrdí výsledek, až když uplyne dost času
na jistotu. Toto zpoždění je skutečná cena, protože zdržuje učení. Spárujte
každou metriku výsledku alespoň s jedním předstihovým ukazatelem, metrikou,
která se pohne dřív a předpoví výsledek, aby mohl tým řídit dřív, než dorazí
pomalé, autoritativní číslo. Frekvence nasazení je předstihový ukazatel pro
výsledky dodávání; rostoucí trend úniku vad je předstihový ukazatel pro
nadcházející výsledek spolehlivosti. Předstihové ukazatele používejte k
brzkému jednání a zpožděné metriky výsledků k potvrzení, že jste měli pravdu.

## Kompromisy: výhody a nevýhody

| Kategorie | Výhody | Nevýhody |
| --- | --- | --- |
| Vstupní metriky | Plně v moci týmu, snadno se počítají | Nejslabší vazba na skutečnou hodnotu; snadno zmanipulovatelné objemem |
| Výstupní metriky | Snadno se počítají, jasné vlastnictví, rychlá zpětná vazba | Odměňují aktivitu před dopadem; mohou růst, zatímco hodnota klesá |
| Metriky výsledků | Přímo odrážejí, na čem záleží; těžko se levně manipulují | Pomalé, zašuměné a těžko připsatelné jedinému týmu |
| Struktura stromu metrik | Spojuje každodenní práci se strategickou hodnotou; pomáhá diagnostice | Vyžaduje skutečnou analytickou práci na správné stavbě a údržbě |

Hlavním napětím je **řiditelnost versus hodnota**. Vstupy a výstupy jsou plně v
moci týmu, což láká činit týmy za ně odpovědnými; výsledky nesou hodnotu, ale
jsou jen částečně v dosahu vlivu kteréhokoli jednoho týmu, protože dobrá funkce
může selhat i z důvodů zcela mimo inženýrství. Řešte to tak, že týmy činíte
odpovědnými za vstupy a výstupy, které plně řídí, a výsledky sledujete jako
sdílené signály, které vlastní celá organizace společně, propojené výslovným
stromem metrik, místo aby zůstaly nevysvětlenou mezerou mezi „odvedli jsme
práci“ a „pomohlo to“.

## Otázky k diskusi s vaším týmem

1. **Je každá metrika na našem současném dashboardu vstup, výstup, nebo výsledek
   a vypráví rovnováha mezi nimi poctivý příběh?** Většina dashboardů se při
   poctivé kontrole ukáže jako téměř výhradně složená ze vstupů a výstupů,
   protože to nástroje hlásí ve výchozím stavu. Zařaďte každou dlaždici a
   spočítejte rozdělení; dashboard bez jediné dlaždice výsledků měří aktivitu a
   prezentuje ji jako výkon.

2. **Jaká je naše jediná metrika výsledku typu Polárka a dokážeme ji vystopovat
   stromem metrik až k něčemu, co každý tým skutečně vlastní?** Bez této
   propojovací struktury hýbající se horní číslo nedává tušení, kde hledat, a
   týmy nevidí, jak se jejich každodenní výstupní metriky napojují na cokoli,
   na čem záleží. Přineste svou současnou horní metriku, pokud ji máte, a
   zkuste strom postavit na místě.

3. **Kde činíme tým odpovědným za výsledek, který může jen ovlivnit, ne
   řídit?** Je to častý zdroj frustrace a tiché manipulace, protože tým
   trestaný za výsledek utvářený faktory mimo jeho kontrolu má všechny motivy
   chránit sám sebe místo zlepšování skutečného systému. Najděte tyto
   nesrovnalosti a buď upravte zodpovědnost, nebo přidejte chybějící páky.

4. **Jaký předstihový ukazatel máme pro každou z našich zpožděných metrik
   výsledků a jak dopředu je předpovídá?** Čistě zpožděná sada metrik znamená,
   že zjistíte, že jste se mýlili, až když je příliš pozdě na levnou změnu
   kurzu. Přineste své metriky výsledků a ověřte, zda pro každou existuje
   skutečný předstihový ukazatel, nebo zda mezi vykazovacími obdobími letíte
   naslepo.

5. **Kolik z toho, co oslavujeme na revizích a retrospektivách, je výstup
   („dodali jsme X“) a kolik výsledek („X změnilo Y k lepšímu“)?** Jazyk,
   kterým týmy práci oslavují, v čase utváří, co optimalizují, často víc než
   dashboard. Po jeden sprint poslouchejte své vlastní revizní schůzky a poctivě spočítejte
   rozdělení.

6. **Kdyby se naše hlavní výstupní metriky přes noc zdvojnásobily, zlepšily by
   se nutně naše metriky výsledků, nebo by se mohly zhoršit?** Tento myšlenkový
   pokus odhalí výstupní metriky, které se odpojily od výsledků, jimž měly
   sloužit, nebo jim dokonce aktivně odporují, například objem funkcí, který
   zvyšuje zátěž údržby rychleji, než zvyšuje přijetí.

## Pohled podle sektorů

**Startup.** Vyberte jeden výsledek, typicky zástupný ukazatel toho, zda
zákazníci dál získávají hodnotu, například týdenní udržení uživatelů nebo
aktivaci, a berte ho jako Polárku od prvního dne. Odolejte přitažlivosti
výstupních metrik pro parádu, jako je kumulativní počet funkcí, které je lákavé
hlásit investorům, ale neříkají nic o tom, zda produkt skutečně někomu funguje.

**Malá firma.** Vaše stávající nástroje, pokladní systém, helpdesk, analytika,
už obvykle hlásí číslo blízké výsledku, míru opakovaných nákupů, míru
znovuotevření tiketů. Používejte je místo budování vlastní instrumentace
výsledků, kterou nemáte kapacitu udržovat, a odolejte pokušení vracet se k
surovým počtům aktivit jen proto, že jsou výchozím pohledem.

**Velký podnik.** Dominantním způsobem selhání je portfolio týmů, z nichž každý
optimalizuje lokální výstupní metriky, které se nesčítají v žádný ucelený
organizační výsledek. Postavte strom metrik záměrně, sjednoťte definice výsledků
napříč obchodními jednotkami a požadujte, aby každá významná iniciativa před
financováním uvedla svou hypotézu o výsledku, nejen plán výstupů.

**Státní správa.** Kontrolní orgány a veřejnost jsou stále gramotnější v rozdílu
mezi „dodali jsme zadání“ a „zlepšili jsme výsledek“ a zpráva jen s výstupy zve
právě k takovému zkoumání. Definujte úspěch jako výsledek zaměřený na občana
(čekací doba, míra chyb, spokojenost), kdekoli je to právně i prakticky možné,
a buďte výslovní, kdy je k dispozici jen výstupní metrika a proč.

## Příklady

**Velký podnik.** Inženýrská divize logistické firmy dva roky vykazovala
stabilně rostoucí počet „funkcí dodaných za čtvrtletí“, zatímco základní skóre
spokojenosti zákazníků firmy tiše plošilo. Nový viceprezident pro inženýrství
postavil strom metrik s kořenem v míře včasných dodávek, skutečném obchodním
výsledku, rozložený přes dobu prodlevy v překladištích a úspěšnost poslední míle
až k výstupům inženýrství na úrovni týmů. Během jednoho vykazovacího cyklu se
ukázalo, že několik týmů s vysokým výstupem dodává funkce v oblastech bez
měřitelného vlivu na metriku Polárky, a investice se přesunuly k řidičům, o
nichž strom ukázal, že skutečně záleží.

**Státní správa.** Digitální tým národní zdravotní služby vykazoval u víceleté
modernizace pacientských záznamů „moduly dodané podle zadání“. Kontrolní výbor
se zeptal jinak: strávili lékaři méně času administrativním zadáváním dat. Tým
dodatečně zavedl metriku výsledku, medián minut administrativního času na
jedno setkání s pacientem, a zjistil, že rané moduly tento čas ve skutečnosti
prodloužily kvůli tření v pracovním postupu, přestože splnily každý dodací
milník. Pozdější moduly byly přepracovány přímo kolem metriky výsledku a
veřejné vykazování programu se posunulo od kontrolního seznamu dodávek k
porovnání před a po.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností vážení k výsledkům je ušetřené plýtvání: organizace, která v téměř
reálném čase vidí, že proud výstupu nehýbe žádným výsledkem, může tu investici
přesměrovat dřív, než se celý rozpočtový cyklus spotřebuje na tvrdé zjištění.
Dominantním skrytým nákladem ve velkých inženýrských organizacích není
nedostatečná investice, ale dobře provedená práce, která nikdy neměla být
financována, protože byla odpojena od jakéhokoli skutečného výsledku, a
dashboard jen s výstupy toto odpojení vůbec nevidí.

Celkové náklady vlastnictví (TCO) měření výsledků jsou vyšší než u měření
výstupů, protože výsledky se skutečně hůře definují, připisují a instrumentují
a stavba skutečného stromu metrik vyžaduje záměrné analytické úsilí místo
přijetí toho, co nástroj exportuje ve výchozím stavu. Tuto cenu stojí za to
zaplatit u každé iniciativy nad skromnou velikost, protože alternativa,
zjištění zpětně, že rok sebejistě hlášeného výstupu nevytvořil žádnou skutečnou
hodnotu, stojí mnohem víc než předběžná analýza.

## Antivzory a úskalí

- **Dashboard složený výhradně z výstupních dlaždic:** měří aktivitu a
  prezentuje ji jako výkon.
- **Činit tým plně odpovědným za výsledek, který nemůže řídit:** plodí
  frustraci a zve k manipulaci na ochranu před nespravedlivým obviněním.
- **Žádný předstihový ukazatel pro zpožděný výsledek:** tým zjistí, že se
  mýlil, až když je příliš drahé to opravit.
- **Oslavovat výstupní řeč na revizích a přitom tvrdit, že si ceníme
  výsledků:** deklarovaná priorita a prožívaná motivace se rozcházejí a vítězí
  prožívaná motivace.
- **Plochý seznam metrik bez struktury stromu:** hýbající se horní číslo
  nedává tušení, kde hledat.
- **Považovat měření výsledků za příliš těžké na pokus:** trvale vrací
  organizaci zpět k snadno spočitatelným vstupům a výstupům.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky jsou téměř výhradně vstupy a výstupy; nikdo
  neumí pojmenovat metriky výsledků organizace ani k nim vystopovat linii.
- **Úroveň 2, Rozvoj:** Některé týmy určily metriky výsledků neformálně, ale
  chybí sdílený strom metrik i konzistentní předstihové ukazatele.
- **Úroveň 3, Standardizace:** Zdokumentovaný strom metrik spojuje sdílený
  výsledek typu Polárka s výstupy vlastněnými týmy, důsledně uplatňovaný v celé
  organizaci.
- **Úroveň 4, Řízení:** Předstihové i zpožděné ukazatele se sledují a revidují
  společně; týmy jsou odpovědné jen za to, co řídí, a měření výsledků má
  aktivně přidělené zdroje.
- **Úroveň 5, Orchestrace:** Měření výsledků je přímo zapojeno do rozhodování o
  financování a prioritách; organizace běžně přesměrovává investice od práce s
  vysokým výstupem a nízkým výsledkem dřív, než uplyne celý rozpočtový cyklus.

## Náměty k diskusi

1. Pojmenujme nejdůležitější metriku výsledku naší organizace. Dokážou se na ní
   shodnout všichni?
2. Jaká je naše největší současná investice do výstupu, kterou zatím nedokážeme
   vystopovat k žádnému výsledku?
3. Kde naše struktura zodpovědnosti trestá tým za výsledek, který nemůže
   řídit?
4. Jak by vypadal náš dashboard, kdybychom smazali každou čistě výstupní
   dlaždici?
5. Jak dlouho nám nyní trvá zjistit, zda dodaná funkce skutečně pomohla?

## Hlavní poznatky

- Zařaďte každou metriku jako **vstup, výstup, nebo výsledek** a svou sadu
  záměrně vážte k výsledkům.
- Postavte **strom metrik** pod jedinou **metrikou typu Polárka**, aby hýbající
  se horní číslo ukazovalo na příčinu.
- Činte týmy odpovědnými za to, co **řídí** (vstupy, výstupy); výsledky
  sledujte jako sdílené signály, které celá organizace ovlivňuje společně.
- Spárujte každou zpožděnou **metriku výsledku** s rychlejším **předstihovým
  ukazatelem**, abyste mohli řídit dřív, než pomalé číslo potvrdí, že jste se
  mýlili.
- Dashboard jen s výstupy měří aktivitu a nazývá ji výkonem; berte to jako
  varovný signál, ne jako uklidnění.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (měření dodávání založené na výsledcích).
- *Lean Analytics*, Alistair Croll a Benjamin Yoskovitz (One Metric That
  Matters a rozlišení vstup, výstup, výsledek v prostředí startupu).
- *Measure What Matters*, John Doerr (stanovování cílů orientované na výsledky
  a důraz rámce OKR na výsledky před aktivitou).
- *The Lean Startup*, Eric Ries (použitelné versus parádní metriky a
  ověřování výsledků).
- *Key Performance Indicators*, David Parmenter (stavba struktury stromu KPI
  neboli metrik pod měřítkem typu Polárka).
