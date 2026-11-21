# 1.5 Zdroje dat a instrumentace

## Přehled a motivace

Metrika je tak důvěryhodná, jak jsou důvěryhodná data pod ní, a většina
programů metrik vynakládá mnohem víc úsilí na návrh dashboardů než na ověřování
pipeline, která je krmí. To je obráceně. Krásně navržený graf postavený na
nekonzistentní, vlastním hlášením získané nebo tiše rozbité instrumentaci je
horší než žádný graf, protože vypadá autoritativně, zatímco je špatně. Toto
téma je o nenápadném základu, který zbytek knihy předpokládá: odkud se
inženýrská data skutečně berou, kdy věřit automatické instrumentaci více než
vlastnímu hlášení a jaká selhání kvality dat nenápadně znehodnotí metriku dřív,
než si toho někdo všimne.

Data softwarového inženýrství pocházejí z hrstky typů zdrojů, každý s odlišnou
spolehlivostí. Správa verzí a pipeline [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
vytvářejí objektivní, časově označené záznamy, které se těžko falšují, o tom,
co se skutečně stalo. Systémy pro sledování úkolů a řízení projektů vytvářejí
záznamy závislé na tom, že lidé aktualizují stav správně a včas, což často
dělají nekonzistentně. Průzkumy vytvářejí data z vlastního hlášení, která jsou
nenahraditelná pro věci, které žádný systém nepozoruje, jako je spokojenost,
ale podléhají zkreslení z paměti a efektům společenské žádoucnosti.
Platformy pozorovatelnosti vytvářejí telemetrii na úrovni systému, která je
objektivní, ale pokrývá jen to, co bylo instrumentováno. Vědět, do které
kategorie data dané metriky patří, vám řekne, nakolik jim věřit a na jaké
způsoby selhání dávat pozor.

V měřítku velkého podniku a státní správy se problémy s kvalitou dat sčítají,
protože vzdálenost mezi původem dat a jejich konečným použitím na dashboardu
roste přes více systémů, integrací a transformací. Pole, které ve zdrojovém
systému znamená jednu věc, může ve vykazovací vrstvě znamenat něco nenápadně
jiného a nikdo po proudu si toho nevšimne, protože číslo stále vypadá
věrohodně. Správně nastavit instrumentaci je méně vzrušující než správně
nastavit rámce, ale je to základ, na kterém stojí všechno ostatní v této knize.

## Klíčové zásady

- **Dávejte přednost instrumentaci před vlastním hlášením, kdykoli systém
  může událost pozorovat přímo.** Časové razítko nasazení z pipeline je
  důvěryhodnější než vlastním hlášením uvedený počet nasazení týmu.
- **Vlastní hlášení používejte jen pro to, co nelze pozorovat přímo.**
  Spokojenost, vnímané tření a pohoda nemají žádnou náhradu v záznamovém
  systému; ptejte se přímo a dobře navrhněte průzkum (téma 3.7). Vlastní
  hlášení vyhraďte právě pro tuto kategorii.
- **Data každé metriky mají zdrojový systém, způsob sběru a známý způsob
  selhání.** Zdokumentujte všechny tři, nejen definici.
- **Kvalita dat tiše chátrá.** Pipeline, která před rokem fungovala správně,
  může být dnes tiše rozbitá a dashboard bude bez stížností dál vykreslovat
  špatné číslo.
- **Instrumentujte v místě pravdy, ne po proudu za překladem.** Každý přeskok
  mezi událostí a dashboardem je příležitost, aby se význam posunul.

## Doporučení

### Zmapujte každou metriku na její skutečný zdrojový systém, než jí uvěříte

U každé metriky na dashboardu pojmenujte konkrétní systém, který generuje
podkladovou událost: pipeline CI/CD pro události nasazení, hostitele správy
verzí pro události commitů a sloučení, systém pro sledování incidentů pro
záznamy o výpadcích, platformu průzkumů pro vlastním hlášením uvedenou
spokojenost. Pokud nedokážete pojmenovat přesný systém, ve skutečnosti
nevíte, odkud číslo pochází, a nemůžete posoudit jeho spolehlivost. Toto
mapování je předpokladem pro chartu správy z tématu 1.4, nikoli samostatné
cvičení.

### Instrumentujte na události, ne na zprávě

Nejspolehlivější data zachycují událost automaticky v okamžiku, kdy nastane:
pipeline zaznamená nasazení ve chvíli, kdy skončí, systém správy verzí
zaznamená sloučení ve chvíli, kdy dopadne. Data, která závisejí na tom, že si
člověk pamatuje následně aktualizovat pole stavu, označit tiket jako „hotový“,
ručně zapsat nasazení do tabulky, ztrácejí přesnost tím víc, čím dál jsou od
skutečné události a čím zaneprázdněnější odpovědný člověk je. Kdekoli existuje
automatická událost, dejte jí přednost před zástupným ukazatelem hlášeným
člověkem pro tentýž fakt.

### Průzkumy vyhraďte pro to, co vám může říci jen člověk

Některé věci opravdu nelze pozorovat ze systémové telemetrie: zda inženýr cítí,
že jeho práce je smysluplná, zda je proces frustrující, zda roste riziko
vyhoření. Vyžadují přímý dotaz a dobře navržený průzkum (téma 3.7 pokrývá
mechaniku) je správný nástroj. Chybou je používat vlastní hlášení pro věci,
které by systém mohl pozorovat přímo, tedy žádat inženýry, aby odhadli vlastní
frekvenci nasazení, místo aby se vzala z pipeline, což vnáší zbytečný šum a
zkreslení do dat, která mohla být objektivní.

### Zabudujte kontroly kvality dat do samotné pipeline

Pipeline metrik berte se stejnou přísností jako produkční kód: přidejte
automatické kontroly, které upozorní, když zdroj přestane posílat data, když se
rozdělení pole nečekaně posune nebo když počet nečekaně klesne na nulu.
Dashboard, který tiše vykresluje zastaralá nebo rozbitá data, jako by byla
aktuální, je horší než dashboard, který viditelně ukazuje „data nejsou k
dispozici“, protože první neviditelně erodují důvěru, zatímco druhý alespoň
říká pravdu o vlastních omezeních.

### Dokumentujte způsob sběru vedle definice

Definice metriky („lead time změn“) není úplná bez způsobu sběru (měřeno od
časového razítka prvního commitu ve správě verzí po časové razítko nasazení do
produkce v pipeline, bez větví hotfixů). Dva týmy se stejnou definicí, ale
odlišným způsobem sběru budou přesto vyrábět nesrovnatelná čísla. Zaznamenejte
obojí do charty metrik z tématu 1.4 a změnu kteréhokoli berte jako změnu
vyžadující stejnou zdokumentovanou revizi.

## Kompromisy: výhody a nevýhody

| Typ zdroje | Výhody | Nevýhody |
| --- | --- | --- |
| Automatická instrumentace pipeline (CI/CD, správa verzí) | Objektivní, časově označená, těžko falšovatelná, nízké průběžné úsilí | Vyžaduje počáteční inženýrskou investici na stavbu a údržbu |
| Data ze systému pro sledování úkolů a řízení projektů | Široce dostupná, týmům známá | Závisí na pečlivosti lidí; často nekonzistentní napříč týmy |
| Průzkumy a vlastní hlášení | Jediný zdroj subjektivní zkušenosti (spokojenost, pohoda) | Zkreslení z paměti, zkreslení společenské žádoucnosti, únava z odpovídání |
| Platformy pozorovatelnosti a telemetrie | Bohatý signál na úrovni systému v reálném čase | Pokrývá jen to, co bylo výslovně instrumentováno; může být v měřítku drahé |

Hlavním napětím je **objektivita versus pokrytí**. Automatická instrumentace je
nejdůvěryhodnějším zdrojem, ale subjektivní zkušenost nemůže pozorovat vůbec,
zatímco průzkumy dosáhnou přesně na to, na co automatika nedosáhne, ale nesou
skutečné riziko zkreslení. Řešte to tak, že automatickou instrumentaci
používáte, kdekoli lze událost pozorovat přímo, a vlastní hlášení vyhradíte
výslovně a jen pro to, co skutečně vyžaduje zeptat se člověka, nikdy jako línou
náhradu za data, která mohl poskytnout systém.

## Otázky k diskusi s vaším týmem

1. **Dokážeme u našich pěti nejdůležitějších metrik pojmenovat přesný zdrojový
   systém a způsob sběru, nebo jen předpokládáme definici, aniž bychom věděli,
   odkud data skutečně pocházejí?** Je to překvapivě častá mezera: metrika se
   převezme z rámce nebo z výchozího dashboardu dodavatele a nikdo z
   dnešního týmu nezná systém, který podkladová data generuje, ani jak. Vystopujte
   každou zpět k původu jako skupinové cvičení.

2. **Které z našich metrik spoléhají na vlastní hlášení u něčeho, co by systém
   mohl pozorovat přímo, a co by bylo potřeba k nahrazení tohoto hlášení
   skutečnou instrumentací?** Vlastním hlášením uvedené počty nasazení, vlastním
   hlášením uvedené odpracované hodiny a vlastním odhadem stanovený cycle time
   jsou časté příklady použití špatného zdroje dat pro něco, co by automatika
   zachytila spolehlivěji. Najděte je a upřednostněte nahrazení těch s
   nejvyššími sázkami.

3. **Jak bychom poznali, že se některá z našich datových pipeline tiše
   rozbila?** Většina organizací zjistí rozbitou pipeline metrik až tehdy, když
   si někdo všimne, že číslo vypadá neuvěřitelně, což může trvat měsíce.
   Diskutujte, zda některé z vašich pipeline dnes mají automatické kontroly
   zdraví, a pokud ne, které je potřebují nejdřív.

4. **Kde překlad mezi systémy změnil význam metriky, aniž by o tom někdo
   záměrně rozhodl?** Pole, které ve zdrojovém systému znamená jednu věc, může
   po integraci nebo migraci znamenat něco nenápadně jiného a výsledné číslo
   může vypadat věrohodně, přestože je špatné. Projděte celou datovou cestu své
   nejvýznamnější metriky a hledejte místa překladu.

5. **Dokumentujeme v chartě metrik způsoby sběru, nejen definice?** Dva týmy
   mohou sdílet název a definici metriky, ale počítat ji z odlišných způsobů
   sběru, a vyrábět tak čísla, která ve skutečnosti nejsou srovnatelná.
   Zkontrolujte vzorek svých chart právě proti této mezeře.

6. **Jak rozlišíme skutečný trend od artefaktu kvality dat, když se číslo
   nečekaně pohne?** Náhlý posun metriky je často prvním znamením buď skutečné
   změny, nebo rozbité pipeline, a rozlišit je vyžaduje znát zdroj dat natolik,
   aby se dalo rychle zkoumat. Diskutujte skutečný postup svého týmu u
   posledního nevysvětleného posunu metriky, na který jste narazili.

## Pohled podle sektorů

**Startup.** S malým stackem může většina vašich metrik pocházet přímo od
poskytovatele CI/CD, hostitele správy verzí a lehkého nástroje pro průzkumy,
bez stavby vlastních pipeline. Rizikem je přeskočit i základní kontroly zdraví,
protože tým postupuje rychle; pětiminutová automatická kontrola, že zdroj dat
stále posílá události, je levné pojištění proti tichému letu naslepo.

**Malá firma.** Opřete se o vestavěné reportování stávajících nástrojů místo
stavby vlastních datových pipeline, které nemáte kapacitu udržovat. Buďte
výslovní, která čísla pocházejí z automatických systémů a která jsou odhady,
které někdo píše do tabulky, protože obojí nese velmi odlišnou spolehlivost,
i když skončí na jedné stránce.

**Velký podnik.** Problémy s kvalitou dat se sčítají napříč integracemi,
migracemi a hranicemi obchodních jednotek. Investujte do centralizovaných,
dobře monitorovaných datových pipeline pro své nejvýznamnější metriky, zaveďte
automatické kontroly kvality dat jako standardní praxi a auditujte způsoby
sběru, nejen definice, kdykoli srovnáváte metriky mezi obchodními jednotkami.

**Státní správa.** Původ dat může nést právní a auditní váhu: zveřejněné číslo
výkonu může muset obstát při externím auditu nejen své hodnoty, ale celého
řetězce sběru. Zdokumentujte původ dat výslovně, uchovejte historické záznamy o
způsobech sběru i po změně metodiky a buďte připraveni prokázat, jak přesně
číslo vzniklo, nejen co aktuálně ukazuje.

## Příklady

**Velký podnik.** Inženýrské vedení finanční firmy sledovalo „lead time změn“
dva roky, než zjistilo, že migrace datové pipeline před osmnácti měsíci tiše
přepnula zdroj časového razítka z prvního commitu na vytvoření pull requestu,
čímž zkrátila zdánlivý lead time u každého týmu v průměru o několik hodin, aniž
si toho někdo všiml nebo změnu schválil. Řešením byla kontrola kvality dat,
která týden po týdnu porovnává rozdělení každé metriky a statisticky
neobvyklé posuny označuje k lidské revizi, a v následujícím roce zachytila
další dva tiché problémy pipeline.

**Státní správa.** Veřejný dashboard spolehlivosti služeb jedné dopravní
agentury spoléhal na směs automatické telemetrie ze senzorů a ručně zadávaných
hlášení incidentů z regionálních úřadů. Audit zjistil, že regiony s menší
personální kapacitou systematicky podhlašovaly drobné incidenty, ne z
nepoctivosti, ale prostě proto, že ruční zadávání soupeřilo o čas s
naléhavější prací, takže zveřejněné číslo spolehlivosti bylo lepší než
skutečnost právě v regionech, které si nejméně mohly dovolit, aby podfinancovaná
údržba zůstala bez povšimnutí. Řešení agentury nahradilo ruční zadávání
incidentů automatickým záznamem spouštěným senzory, kde to šlo, a přidalo
vedle zveřejněného čísla zdokumentovaný odhad pokrytí ručním hlášením.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností solidní instrumentace je jistota: vedení, které svým datům věří,
může podle nich jednat rozhodně, zatímco tým, kterého popálila tiše rozbitá
pipeline, začne pochybovat o každém čísle, což zpomaluje každé rozhodnutí
závislé na metrikách. Tato ztráta jistoty je drahá a těžko se napravuje a
obnova často trvá mnohem déle, než by stála původní investice do instrumentace.

Celkové náklady vlastnictví (TCO) dobré instrumentace zahrnují počáteční
inženýrskou práci na stavbě spolehlivých pipeline a průběžné náklady na
monitorování kvality dat, na obojí se snadno investuje málo, protože ani jedno
nevytváří vlastní viditelnou dlaždici dashboardu. Toto podinvestování je falešná
úspora: cena zjištění tiše rozbité pipeline poté, co se měsíce rozhodovalo na
špatných datech, je mnohem vyšší než cena kontrol zdraví, které by ji zachytily
první den.

## Antivzory a úskalí

- **Věřit číslu, aniž by se znal jeho zdrojový systém:** metrika převzatá z
  rámce nebo výchozího nastavení dodavatele, aniž někdo vystopoval, odkud data
  skutečně pocházejí.
- **Vlastní hlášení toho, co by systém mohl pozorovat přímo:** vnáší zbytečný
  šum a zkreslení do dat, která mohla být objektivní.
- **Žádné automatické kontroly kvality dat u pipeline metrik:** tiše rozbitá
  pipeline může měsíce nepozorovaně vykreslovat špatná čísla.
- **Dokumentovat jen definici, ne způsob sběru:** dva týmy se stejným názvem
  metriky mohou přesto počítat nesrovnatelná čísla.
- **Dashboard, který vykresluje „0“ nebo zastaralá data, jako by byla aktuální,
  bez jakéhokoli náznaku selhání zdroje:** horší než viditelná zpráva „data nejsou
  k dispozici“.
- **Podfinancované regiony nebo týmy, které systematicky podhlašují kvůli
  zátěži ručního zadávání:** mezera v kvalitě dat, která koreluje právě s
  oblastmi, jež potřebují největší pozornost.

## Model zralosti

- **Úroveň 1, Zahájení:** Nikdo neumí spolehlivě vystopovat metriku k jejímu
  zdrojovému systému; pipeline nemají kontroly zdraví a selhání zůstávají
  bez povšimnutí.
- **Úroveň 2, Rozvoj:** Některé metriky mají zdokumentované zdroje, ale způsoby
  sběru jsou nekonzistentní a kontroly kvality dat jsou nanejvýš ad hoc.
- **Úroveň 3, Standardizace:** Každá řízená metrika dokumentuje svůj zdrojový
  systém a způsob sběru; automatické pipeline jsou preferovány před vlastním
  hlášením, kdekoli lze událost pozorovat přímo.
- **Úroveň 4, Řízení:** Automatické kontroly kvality dat monitorují každou
  významnou pipeline, označují anomálie k revizi a původ dat je zdokumentován
  a auditovatelný.
- **Úroveň 5, Orchestrace:** Organizace bere kvalitu dat jako plnohodnotnou
  inženýrskou disciplínu s vlastním monitorováním a reakcí na incidenty a
  dokáže na požádání prokázat plný původ jakékoli zveřejněné metriky.

## Náměty k diskusi

1. Dokázali bychom své tři nejdůležitější metriky vystopovat k přesnému
   zdrojovému systému hned teď, živě, na této schůzce?
2. Které z našich současných metrik spoléhají na vlastní hlášení u něčeho, co
   by systém mohl měřit přímo?
3. Mají některé z našich pipeline metrik dnes automatické kontroly zdraví?
4. Kdy jsme naposledy objevili tiše rozbitou datovou pipeline a jak dlouho už
   byla špatně?
5. Kde ruční zadávání dat vytváří mezeru mezi hlášenou a skutečnou realitou?

## Hlavní poznatky

- Dávejte přednost **automatické instrumentaci** před vlastním hlášením, kdekoli
  systém může událost pozorovat přímo; vlastní hlášení vyhraďte pro skutečně
  subjektivní zkušenost.
- Každá metrika potřebuje zdokumentovaný **zdrojový systém a způsob sběru**, ne
  jen definici.
- Kvalita dat **tiše chátrá**; zabudujte automatické kontroly do samotné
  pipeline, místo abyste poruchy objevovali náhodou.
- Instrumentujte **na události**, ne po proudu za překladem, aby se minimalizoval
  drift mezi tím, co se stalo, a tím, co dashboard ukazuje.
- Cena tiše rozbité pipeline, měsíce rozhodnutí na špatných datech, výrazně
  převyšuje cenu kontrol zdraví, které by ji zachytily.

## Odkazy a další četba

- *Observability Engineering*, Charity Majors, Liz Fong-Jones a George Miranda
  (principy návrhu instrumentace a telemetrie).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (přístup k instrumentaci za metrikami DORA).
- *Data Quality: The Accuracy Dimension*, Jack E. Olson (koncepty kvality dat
  použitelné pro pipeline metrik).
- *How to Measure Anything*, Douglas W. Hubbard (metody měření veličin, které se
  zdají obtížně pozorovatelné přímo).
