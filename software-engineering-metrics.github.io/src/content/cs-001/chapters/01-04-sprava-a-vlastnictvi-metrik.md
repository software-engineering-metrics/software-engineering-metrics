# 1.4 Správa a vlastnictví metrik

## Přehled a motivace

Metrika bez vlastníka je trvalý spor čekající na vypuknutí. Dva týmy počítají
„aktivní uživatele“ každý jinak a stráví schůzku sladěváním čísel místo řízení
trendu; dlaždice dashboardu, kterou nikdo neudržuje, měsíce tiše zastarává,
než si toho někdo všimne; metrika původně vytvořená pro diagnostiku jednoho
týmu je převzata jiným týmem k účelu, který její původní definice nikdy
nepodporovala. Nic z toho není problém měření ve statistickém smyslu. Je to
problém správy a řeší se stejnou disciplínou, kterou už organizace uplatňují u
kódu: výslovné vlastnictví, zdokumentovaný [zdroj pravdy](https://en.wikipedia.org/wiki/Single_source_of_truth)
a revizní proces.

Správa není byrokracie pro byrokracii. Je to to, co umožní programu metrik
přežít střet s měřítkem organizace. Jeden tým si může držet definice metrik v
něčí hlavě a posun korigovat každodenním rozhovorem. Organizace s desítkami
týmů, z nichž každý metriky produkuje i konzumuje, to nedokáže. Bez správy
definice tiše driftují, metriky se množí, aniž by je kdo ořezával, a než si
vedení všimne, že dvě zprávy si odporují, cena jejich sladění už byla mnohokrát
zaplacena v promarněných schůzkách a erodované důvěře.

U velkých podniků a státní správy má správa další váhu, protože metriky stále
víc krmí rozhodnutí se skutečnými důsledky, přidělování rozpočtu, veřejné
vykazování výkonu, smlouvy s dodavateli, která přežijí kteréhokoli člověka, který
postavil původní dashboard. Charta metrik, která přežije fluktuaci
zaměstnanců a kterou si může přečíst a pochopit každý nový člen týmu, je to, co
udržuje čísla organizace tak, aby za pět let znamenala totéž co dnes.

## Klíčové zásady

- **Každá metrika má právě jednoho vlastníka.** Sdílené vlastnictví je žádné
  vlastnictví; když definici vlastní všichni, nikdo ji neudržuje.
- **Metrika má jeden zdroj pravdy.** Dva systémy, které počítají stejnou
  metriku odlišně, jsou selháním správy čekajícím na vynoření.
- **Správa je zapsaná, ne kmenová znalost.** Charta metrik, která žije jen v
  něčí paměti, odchod tohoto člověka nepřežije.
- **Vyřazení je stejně důležité jako přijetí.** Zdravý program metrik ořezává
  stejně záměrně, jako roste.
- **Správa se škáluje s důsledky, ne s počtem metrik.** Metrika krmící veřejnou
  zprávu potřebuje těžší správu než ta, kterou jeden tým používá k ladění
  vlastního sprintu.

## Doporučení

### Napište chartu metrik pro každou sadu metrik, která přesahuje hranici týmu

**Charta metrik** je krátký, živý dokument, který uvádí účel sady metrik, její
výslovné necíle (sem patří rozlišení diagnostické a hodnoticí z tématu 1.1),
vlastníka a zdroj pravdy každé metriky a rytmus revizí. Držte ji na jedné
stránce. Soubor docs/examples/metrics-charter-example.md v doprovodném
repozitáři této knihy ukazuje podobu. Takto krátká charta se čte; charta, která
se rozroste v politický dokument, ne.

### Přidělte každé metrice jmenovitého vlastníka, ne tým

„Tuto metriku vlastní platformní tým“ rozptyluje odpovědnost, až ji nikdo
skutečně neudržuje. Pojmenujte osobu nebo konkrétní, odpovědnou roli. Tento
vlastník odpovídá za to, aby definice metriky zůstala přesná, instrumentace
zdravá, a za odpověď na otázku „proč to číslo vypadá špatně“, až nevyhnutelně
přijde. Vlastnictví se může a má měnit, jak lidé mění role, ale charta má vždy
uvádět současného vlastníka a nikdy nenechat políčko prázdné.

### Stanovte jeden zdroj pravdy pro každou metriku a zakažte paralelní výpočet

Když dva systémy počítají stejně nominálně pojmenovanou metriku odlišně,
například jeden tým počítá „aktivní uživatele“ podle přihlášení a jiný podle
volání API, vzniklý nesoulad stojí na schůzkách o sladění mnohem víc, než by
stálo shodnout se předem na jednom zdroji pravdy. Pojmenujte v chartě
autoritativní systém pro každou metriku a jakýkoli jiný výpočet téže metriky
berte buď jako chybu k opravě, nebo jako jinak pojmenovanou metriku k
přejmenování.

### Zabudujte revizi vyřazování do rytmu správy

Program metrik, který jen přidává, hromadí změtenec na dashboardech, podle
kterého nelze jednat (téma 1.1). Při každé revizi správy se vedle navrhování
nových metrik ptejte, které stávající metriky neinformovaly rozhodnutí v
posledních dvou cyklech a jsou kandidáty na vyřazení. Vyřazení není selhání;
je to táž disciplína, jakou zdravá kódová základna uplatňuje na mrtvý kód.

### Škálujte přísnost správy podle důsledků, ne podle objemu

Ne každá metrika potřebuje stejný proces. Metrika, kterou si jeden tým vymyslí k
ladění vlastního sprintu, potřebuje téměř žádnou správu kromě toho, aby tým
věděl, co znamená. Metrika, která krmí výkonnostní přehled vedení, veřejnou
zprávu o výkonu nebo odměňování jednotlivce, potřebuje zdokumentovanou
definici, jmenovitého vlastníka, auditní stopu a schválení před spuštěním.
Váhu procesu přizpůsobte důsledku špatné metriky, ne tomu, kolik metrik existuje.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádná formální správa | Rychlé, nízká režie pro malé týmy | Definice driftují; vlastnictví se rozptyluje; dashboardy bují nekontrolovaně |
| Lehká charta na sadu metrik | Levná, čitelná, škáluje s organizací | Vyžaduje disciplínu v udržování aktuálnosti; pod tlakem termínů se dá přeskočit |
| Těžká centrální rada pro správu metrik | Silná konzistence, silná auditní stopa | Pomalé schvalování nových metrik; může se stát úzkým hrdlem, které týmy obcházejí |
| Správa škálovaná podle důsledků | Přizpůsobuje úsilí skutečnému riziku | Vyžaduje úsudek při správném zařazení důsledku; lze zmanipulovat podhodnocením sázek |

Hlavním napětím je **konzistence versus rychlost**. Těžká centrální správa
vyrábí důvěryhodné, konzistentní metriky, ale zpomaluje tým přesně tehdy, kdy
chce rychle něco instrumentovat, aby zodpověděl naléhavou otázku. Řešte to
škálováním váhy správy podle důsledků: nechte týmy instrumentovat volně pro
vlastní diagnostické použití a plnou chartu, vlastnictví a schvalovací
disciplínu vyžadujte až tehdy, když metrika překročí hranici týmu nebo krmí
hodnoticí či veřejné použití.

## Otázky k diskusi s vaším týmem

1. **Má každá metrika, která překračuje hranici týmu, jmenovitého vlastníka a
   poznal by se tento vlastník jako odpovědný, kdybyste se ho dnes zeptali?**
   „Vlastní to platformní tým“ není odpověď; odpovědí je konkrétní osoba nebo
   role. Zkontrolujte své mezitýmové metriky a ověřte, zda jmenovaný vlastník,
   pokud vůbec nějaký existuje, skutečně ví, že tuto odpovědnost nese.

2. **Kde dnes počítáme stejně nominálně pojmenovanou metriku dvěma různými
   způsoby a kolik času jsme strávili sladěváním nesouladu?** Je to jedno z
   nejdražších a nejčastějších selhání správy ve velkých organizacích a je
   plně předcházitelné zdokumentovaným jediným zdrojem pravdy. Přineste
   skutečný příklad, pokud nějaký máte, a vystopujte jeho cenu.

3. **Kdy jsme naposledy vyřadili metriku a co toto rozhodnutí spustilo?**
   Organizace, která umí popsat jen to, jak metriky přidává, nikdy jak je
   odstraňuje, hromadí dluh dashboardů. Pokud si na žádné vyřazení nevzpomenete,
   je tato absence sama odpovědí na tuto otázku.

4. **Je náš proces správy úměrný důsledkům, nebo prochází každá metrika stejně
   těžkou revizí bez ohledu na sázky?** Příliš těžká správa u týmové metriky s
   nízkými sázkami zpomaluje práci bez přínosu pro bezpečí; příliš lehká správa
   u metriky krmící veřejnou zprávu nebo rozhodnutí o odměně je skutečné
   riziko. Zmapujte své současné metriky podle důsledků a poctivě proti nim
   porovnejte váhu procesu.

5. **Co se stane s vlastnictvím metriky, když člověk, který ji vytvořil, změní
   roli nebo odejde?** Charta metrik, která existuje jen v hlavě jednoho
   člověka, s ním zmizí. Vyzkoušejte to tak, že vyberete metriku a zeptáte se,
   zda by nový zaměstnanec mohl jen ze psané dokumentace pochopit její
   definici, zdroj pravdy a účel.

6. **Jak bychom poznali, že se definice metriky tiše změnila?** Změna toho, jak
   se číslo počítá, bez změny jeho názvu nebo poznámky v jeho historii je
   téměř neviditelná, dokud někdo nesrovnává stará a nová data a nenajde
   nespojitost, kterou nedokáže vysvětlit. Diskutujte, zda vaše metriky dnes
   nesou nějakou podobu protokolu změn.

## Pohled podle sektorů

**Startup.** Formální správa je u pětičlenného týmu, kde už všichni vědí, co
každé číslo znamená, obvykle zbytečná. Jedna disciplína, kterou přesto stojí za
to přijmout brzy, je písemně určit jednoho vlastníka na metriku, protože stojí
téměř nic a předchází zmatku, když přijdou první noví lidé a začnou se ptát, co
číslo znamená.

**Malá firma.** Správa tu většinou znamená vybrat a držet se jediného nástroje
jako zdroje pravdy pro každou metriku, místo aby tabulky a vestavěný dashboard
platformy tiše divergovaly. Napište chartu jako jeden sdílený dokument, i
neformální, aby nový zaměstnanec zjistil, co číslo znamená, aniž by se musel
vyptávat.

**Velký podnik.** Tady se správa vyplatí. Sjednoťte definice napříč obchodními
jednotkami, vyžadujte chartu pro vše, co krmí výkonnostní přehled vedení, a
zabudujte revizi vyřazování do opakujícího se rytmu správy, protože bujení
dashboardů se v tomto měřítku rychle prodraží, jak v nákladech na údržbu, tak
ve ztrátě důvěryhodnosti, když dvě divize hlásí protichůdná čísla za tutéž věc.

**Státní správa.** Správa tu má často právní nebo auditní rozměr: zveřejňované
míry výkonu mohou muset splňovat zákonné požadavky na vykazování a změna
definice může mít skutečné politické důsledky. Metodiku dokumentujte veřejně,
definice napříč obdobími vykazování zmrazte, pokud samotná změna není veřejně
zdůvodněna, a nezávislý audit definice metriky, nejen její aktuální hodnoty,
berte jako stálou praxi správy.

## Příklady

**Velký podnik.** Nadnárodní softwarová firma při integraci po akvizici zjistila,
že její dvě největší obchodní jednotky definují „frekvenci nasazení“ různě:
jedna počítala každý push do staging prostředí, druhá jen produkční vydání.
Vedení více než rok srovnávalo dodací výkon obou jednotek pomocí čísel, která
ve skutečnosti nebyla srovnatelná. Řešením byla celopodniková rada pro správu
metrik, která zveřejnila jediný slovníček definic metrik (zrcadlený v tématu 9.2
této knihy), vyžadovala od každého týmu potvrzení souladu a během jednoho
čtvrtletí vyřadila nejednoznačné lokální definice.

**Státní správa.** Národní statistický úřad odpovědný za zveřejňování
dashboardu výkonu digitálních služeb zjistil, že změna výpočtu „vyřešeno v
rámci SLA“, kterou tiše provedl inženýrský tým opravující to, co považoval za
chybu, posunula hlavní ukazatel souladu o několik procentních bodů bez
jakékoli veřejné dokumentace změny. Úřad zavedl formální proces řízení změn
pro jakoukoli definici metriky, která krmí veřejnou zprávu: navrhované změny
vyžadují zdokumentované odůvodnění, srovnání před a po zveřejněné spolu se
změnou a schválení jmenovaným odpovědným úředníkem, čímž uzavřel mezeru, jež
dovolila dřívější změně projít bez povšimnutí.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností správy je ušetřená cena sladění. Každá hodina strávená na schůzce,
kde se dva týmy dohadují, čí číslo je správné, je hodina, které by disciplinovaná
správa, jediný zdroj pravdy a jmenovaný vlastník, zcela předešla. V měřítku
velkého podniku se tyto náklady sčítají přes desítky týmů a mohou pohltit
skutečně významný podíl pozornosti vedení na problém, kterému by se jednostránková
charta na sadu metrik vyhnula.

Celkové náklady vlastnictví (TCO) lehké praxe správy, charta, jmenovaný
vlastník, pravidelná revize, jsou skromné a většinou na počátku. Alternativa,
zjištění rok po začátku významné iniciativy, že čísla, kterým vedení důvěřovalo,
nikdy nebyla skutečně srovnatelná, stojí dramaticky víc, jak v promarněné
analýze, tak v poškození důvěryhodnosti při opravě veřejného či interního
záznamu zpětně.

## Antivzory a úskalí

- **Vlastnictví týmem místo vlastnictví jmenovanou osobou:** rozptyluje
  odpovědnost, až definici nikdo skutečně neudržuje.
- **Paralelní výpočet téže nominální metriky:** zaručuje nakonec nesoulad a
  drahé sladění.
- **Charta, která existuje jen v něčí hlavě:** zmizí ve chvíli, kdy tento
  člověk změní roli.
- **Program metrik, který jen přidává a nikdy nevyřazuje:** vyrábí bujení
  dashboardů, podle kterého nelze jednat.
- **Jednotná váha správy bez ohledu na důsledky:** zpomaluje práci s nízkými
  sázkami a nedostatečně chrání metriky s vysokými sázkami, veřejné nebo
  navázané na odměnu.
- **Tiché změny definic:** význam metriky se posune bez protokolu změn a
  historická srovnání se tiše stávají neplatnými.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky nemají formální vlastníky; definice žijí v
  paměti jednotlivců a mezi týmy tiše driftují.
- **Úroveň 2, Rozvoj:** Některé týmy píší neformální dokumentaci pro vlastní
  metriky, ale chybí sdílený formát charty i mezitýmová konzistence.
- **Úroveň 3, Standardizace:** Každá metrika překračující hranici týmu má
  zdokumentovanou chartu, jmenovaného vlastníka a jediný dohodnutý zdroj pravdy,
  vynucované v celé organizaci.
- **Úroveň 4, Řízení:** Opakující se rytmus správy kontroluje metriky z hlediska
  trvající relevance, vyřazuje ty, které si už na sebe nevydělávají, a sleduje
  změny definic s viditelnou historií.
- **Úroveň 5, Orchestrace:** Správa je úměrná důsledkům, kde je to možné
  automatizovaná (katalog metrik, který označí nezdokumentované nebo
  nevlastněné metriky), a organizace dokáže na požádání prokázat plný původ
  jakéhokoli zveřejněného čísla.

## Náměty k diskusi

1. Mohl by nový zaměstnanec jen z dokumentace zjistit, co skutečně znamenají
   naše tři nejdůležitější metriky?
2. Které z našich metrik dnes dva různé systémy počítají odlišně?
3. Kdy jsme naposledy vyřadili metriku a jak jsme se rozhodli?
4. Je náš proces správy těžší tam, kde je důsledek nejvyšší, nebo je jednotný?
5. Kdo jmenovitě vlastní nejvýznamnější veřejně prezentovanou metriku naší
   organizace?

## Hlavní poznatky

- Každá metrika potřebuje **jednoho jmenovaného vlastníka**, ne tým, a **jeden
  zdroj pravdy**, ne paralelní výpočet.
- Napište krátkou, živou **chartu metrik** pro každou sadu metrik, která
  přesahuje hranici týmu, s účelem, necíli, vlastnictvím a rytmem revizí.
- **Vyřazení** je stejně důležitou disciplínou správy jako přijetí; ořezávejte
  záměrně.
- Škálujte přísnost správy podle **důsledků**, ne počtu metrik: těžší proces
  pro metriky veřejné, hodnoticí nebo navázané na odměnu.
- Definice metriky se může tiše posunout; sledujte změny s viditelnou historií,
  aby důvěra v číslo přežila fluktuaci zaměstnanců.

## Odkazy a další četba

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, John Ladley (struktury správy použitelné pro programy
  metrik).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (organizační dysfunkce kolem vlastnictví a používání metrik).
- *Key Performance Indicators*, David Parmenter (vlastnictví metrik, disciplína
  definic a rytmus revizí).
- Pokyny amerického Úřadu pro vládní odpovědnost (GAO) k měření výkonu a zákon
  GPRA Modernization Act: správa metrik ve veřejném sektoru a řízení změn.
