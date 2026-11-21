# 6.1 Ukazatele úrovně služby, cíle a rozpočty chyb

## Přehled a motivace

**[Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, disciplína, jejímž průkopníkem byl Google a která je zdokumentována v
knize *Site Reliability Engineering*, přinesla slovník, na kterém toto téma staví
přímo: **ukazatel úrovně služby (SLI)** je přímo měřený signál zdraví služby,
latence požadavků, míra chyb, dostupnost. **Cíl úrovně služby (SLO)** je cílové
rozmezí tohoto ukazatele, například 99,9 % požadavků uspěje do 200 milisekund. A
**rozpočet chyb** je povolený schodek, oněch 0,1 % požadavků, které smějí
selhat, chápaný ne jako vada k odstranění, ale jako zdroj k utrácení, který lze
záměrně použít k podstoupení rizika: dodání rizikové změny, provedení
experimentu nebo prostě přijetí toho, že dokonalá spolehlivost není dosažitelná
ani, od určitého bodu, hodná své ceny.

Tato poslední myšlenka, rozpočet chyb jako zdroj k utrácení, ne číslo k
minimalizaci k nule, je nejdůležitějším konceptem tohoto tématu a pravděpodobně
celé této části. Řeší napětí, které trápí mnoho organizací: inženýrství chce
dodávat funkce a podstupovat rozumná rizika; provoz chce maximální stabilitu. Bez
sdíleného, kvantifikovaného rozpočtu chyb se z toho stává nekonečné, politicky
nabité vyjednávání. S ním se z toho stává jednoduché, objektivní pravidlo:
utrácejte volně, dokud rozpočet zbývá, a zpomalte a automaticky upřednostněte
práci na stabilitě, jakmile je vyčerpán. Filozofická neshoda se tak mění v
aritmetickou.

U velkých týmů jsou SLO a rozpočty chyb tím, co dělá spolehlivost měřitelnou a
vyjednatelnou, místo nedosažitelného, nevyslovovaného absolutna, které každý tým
tiše nesplňuje a přitom se cítí nejasně provinile. Velké podniky používají SLO ke
stanovení jasných, smluvních očekávání mezi týmy i se zákazníky; státní správa
provozující kritickou veřejnou infrastrukturu je používá ke stanovení obhajitelných,
veřejně zdůvodnitelných cílů spolehlivosti místo nemožného standardu dokonalosti,
který žádný skutečný systém neudrží.

## Klíčové zásady

- **100% spolehlivost je špatný cíl téměř pro jakýkoli systém.** Obvykle je
  nedosažitelná a její sledování od určitého bodu aktivně obětuje rychlost bez
  smysluplného přínosu pro uživatele.
- **SLO má odrážet to, čeho si uživatelé skutečně všímají a na čem jim záleží**,
  ne svévolné kulaté číslo zvolené proto, že zní uklidňujícím dojmem.
- **Rozpočet chyb mění spolehlivost ve zdroj k utrácení** a dává inženýrství i
  provozu sdílené, objektivní pravidlo, kdy dodávat rychle a kdy zpomalit.
- **SLI se musí měřit ze skutečné zkušenosti uživatele**, kde je to možné, ne jen
  z toho, jak zdraví vnitřního systému hlásí sám systém.
- **Vyčerpání rozpočtu chyb spouští předem určenou, dohodnutou reakci**, ne
  ad hoc spor pokaždé, když k tomu dojde.

## Doporučení

### Volte SLI, které odrážejí skutečnou zkušenost uživatelů

Vybírejte ukazatele měřené co nejblíže skutečné zkušenosti uživatele: míru
úspěšnosti požadavků a latenci měřené na okraji nebo na load balanceru, ne jen
vnitřní kontroly zdraví služeb, které mohou hlásit „zdravé“, zatímco uživatelé
zažívají skutečné problémy. SLI, který měří něco, čeho si uživatel nikdy
nevšimne, vnitřní komponentu, která technicky běží, zatímco celý požadavek stejně
selže, měří špatnou věc, ať se instrumentuje sebesnáze.

### Nastavte cíl SLO podle toho, co uživatelé skutečně potřebují, ne podle svévolného kulatého čísla

Odolejte reflexu stanovit cíl jako „99,99 % dostupnosti“ jen proto, že zní
působivě přísně. Místo toho zjistěte, jakou úroveň spolehlivosti uživatelé
skutečně vnímají a záleží jim na ní, na základě historických dat o incidentech,
uživatelského výzkumu a prokázaných nákladů na dosažení každého dalšího
přírůstku spolehlivosti, protože posun z 99,9 % na 99,99 % často stojí mnohem víc
inženýrského úsilí než posun z 99 % na 99,9 %, za klesající a nakonec zanedbatelný
přínos vnímatelný uživateli.

### Berte rozpočet chyb jako zdroj k utrácení s předem určenou reakcí na vyčerpání

Vypočtěte rozpočet chyb přímo z SLO (cíl dostupnosti 99,9 % za 30 dní připouští
zhruba 43 minut povoleného výpadku) a průběžně sledujte čerpání proti němu.
Dohodněte předem, před jakýmkoli konkrétním incidentem, co se stane, když je
rozpočet vyčerpán: běžnou, účinnou politikou je, že se práce na funkcích pozastaví
a priorita týmu se automaticky přesune na práci na spolehlivosti, dokud se
rozpočet neobnoví. Toto předem určené pravidlo odstraňuje potřebu znovu
projednávat kompromis pod tlakem při každém jednotlivém incidentu.

### Používejte rozpočet chyb k záměrným, informovaným rozhodnutím o riziku

Zdravý, nevyčerpaný rozpočet chyb není něco k hromadění; je to svolení podstoupit
rozumná rizika, dodat změnu se zvýšeným, ale přijatelným rizikem, provést
experiment chaos engineeringu (téma o chaos engineeringu v sesterské knize
`software-engineering-guide` ho pokrývá přímo) nebo přijmout rizikovější změnu
architektury, protože rozpočet existuje právě proto, aby se záměrně utrácel, a ne
aby se uchovával nedotčený. Rozpočet chyb, který se nikdy neutratí, naznačuje
buď příliš konzervativní tým, nebo SLO nastavené příliš volně vzhledem ke
skutečně dosažené spolehlivosti, obojí stojí za prošetření.

### Pravidelně SLO revidujte na základě důkazů, ne setrvačnosti

SLO nastavené před lety už nemusí odrážet současná očekávání uživatelů, architekturu
systému nebo obchodní priority. Revidujte SLO v pravidelném rytmu, kontrolujte
historicky dosaženou spolehlivost, zpětnou vazbu uživatelů a zda cíl stále
představuje smysluplný kompromisní bod, a ne buď snadno splnitelný cíl, který by
šlo zpřísnit, aby se umožnila větší rychlost jinde, nebo nerealistický, který se
tým fakticky vzdal plnit.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádné formální SLO (implicitní „co nejspolehlivější“) | Žádná režie na zavedení | Nekonečné, nepodložené vyjednávání mezi rychlostí a stabilitou; žádné sdílené pravidlo |
| Ambiciózní, velmi vysoké SLO (99,99 %+) | Signalizuje vážnost vůči spolehlivosti | Často zbytečné náklady; klesající výnosy za hranicí toho, co uživatelé skutečně vnímají |
| SLO založené na důkazech a zkušenosti uživatelů | Odráží skutečnou hodnotu; obhajitelné a dosažitelné | Vyžaduje skutečná data a analýzu pro správné nastavení |
| Rozpočet chyb s předem určenou reakcí na vyčerpání | Odstraňuje ad hoc vyjednávání; objektivní, rychlé rozhodování | Vyžaduje souhlas organizace a disciplínu, aby se předem určené pravidlo skutečně dodržovalo |

Hlavním napětím je **ambice versus dosažitelnost**. Vysoké, ambiciózní SLO působí,
že signalizuje vážnost vůči kvalitě, ale sledování spolehlivosti za hranicí toho,
co uživatelé skutečně vnímají, obětuje skutečnou rychlost bez skutečného přínosu a
nerealistický cíl, který tým nikdy nesplní, naučí všechny SLO vůbec nebrat
vážně. Napětí vyřešíte ukotvením SLO ve skutečných důkazech, co uživatelé
vnímají, čeho systém historicky dosáhl, kolik stojí každý další přírůstek, místo
ambice nebo touhy vypadat přísně na skóre kartě.

## Otázky k diskusi s vaším týmem

1. **Je naše současné SLO založeno na důkazech o tom, čeho si uživatelé skutečně
   všímají, nebo bylo nastaveno ambiciózně, protože vysoké číslo se zdálo
   náležitě vážné?** Vysledujte původ svého současného cíle, pokud můžete, a
   poctivě posuďte, zda odráží skutečný uživatelský výzkum, nebo jen inženýrskou
   intuici.

2. **Máme předem určenou, dohodnutou reakci na vyčerpání rozpočtu chyb, nebo se
   kompromis znovu projednává pokaždé, když k tomu dojde?** Pokud je poctivá
   odpověď druhá, stojí za to tuto mezeru zacelit dřív, než další incident
   vynutí spor pod tlakem.

3. **Utrácí se náš rozpočet chyb někdy skutečně záměrně, na změnu s vypočteným
   rizikem nebo na experiment, nebo se spotřebovává jen náhodně incidenty?**
   Rozpočet, který se nikdy záměrně neutrácí, může naznačovat příliš opatrný tým,
   který promarňuje legitimní příležitosti, pro něž rozpočet existuje.

4. **Měří se naše SLI ze skutečné zkušenosti uživatelů, nebo z vnitřního zdraví
   systému, které nemusí odrážet to, s čím se uživatelé skutečně setkávají?**
   Prověřte svou současnou instrumentaci proti tomuto konkrétnímu rozlišení; je
   to častá mezera i v jinak zralých programech spolehlivosti.

5. **Kdy jsme naposledy revidovali své SLO proti současným důkazům a změnilo se
   něco, očekávání uživatelů, architektura systému, obchodní priority, co by
   revizi ospravedlňovalo?** Pokud si nevzpomenete na nedávnou revizi, sama tato
   absence stojí za diskusi.

6. **Kolik by nás stálo, v inženýrském úsilí, posunout naše současné SLO o jednu
   další „devítku“ spolehlivosti a bylo by to ospravedlněno nějakým skutečným
   přínosem pro uživatele?** Toto konkrétní nákladově-přínosové rámování pomáhá
   ukotvit napětí ambice a dosažitelnosti ve skutečných číslech místo abstraktní
   preference.

## Pohled podle sektorů

**Startup.** Formální SLO jsou velmi brzy často zbytečná, když tým může na
problémy se spolehlivostí reagovat přímo a neformálně. Přijměte alespoň hrubé,
neformální SLO, jakmile na dostupnosti závisejí skuteční platící zákazníci,
protože disciplína výslovného cíle, i volně sledovaného, pomáhá upřednostnit práci
na spolehlivosti proti tlaku na funkce dřív, než většina mladých firem napadne.

**Malá firma.** Většina moderních hostingových a pozorovacích platforem hlásí
základní data o dostupnosti a latenci s minimálním nastavením; použijte je k
nastavení jednoduchého, dosažitelného SLO místo ambiciózního, které při omezené
provozní kapacitě nemůžete realisticky sledovat ani podle něj jednat.

**Velký podnik.** SLO v tomto měřítku často podpírají smluvní dohody o úrovni
služby (SLA) se skutečnými finančními důsledky, což činí stanovení cíle na
základě důkazů a disciplinovanou správu rozpočtu chyb obzvlášť důležitými.
Investujte do SLI skutečně založených na zkušenosti uživatelů místo pohodlných
vnitřních kontrol zdraví a formálně, se souhlasem vedení, zaveďte politiku
předem určené reakce na vyčerpání dřív, než bude potřeba pod tlakem.

**Státní správa.** Cíle spolehlivosti veřejného sektoru pro kritickou
infrastrukturu mají někdy právní nebo regulační váhu a nerealistický, nedosažený
cíl objevený při auditu nebo veřejném incidentu výrazně poškozuje institucionální
důvěryhodnost. Stanovte cíle na základě skutečné, zdokumentované potřeby
uživatelů a poslání a buďte veřejně transparentní ohledně záměrného kompromisu,
který rozpočet chyb představuje, místo naznačování nedosažitelného standardu
dokonalosti.

## Příklady

**Velký podnik.** Společnost nabízející cloudové úložiště léta cílila na „maximální
dostupnost“ bez formálního SLO, což vedlo k chronickému, nevyřešenému napětí mezi
produktovým týmem (který chtěl rychle dodávat funkce) a infrastrukturním týmem
(který chtěl maximální opatrnost), znovu projednávanému na každé schůzce plánování
vydání. Přijetí formálního SLO dostupnosti 99,95 % s výslovným rozpočtem chyb a
předem určenou politikou, práce na funkcích se automaticky pozastaví, když je
rozpočet vyčerpán, opakující se vyjednávání zcela vyřešilo: oba týmy viděly totéž
číslo a shodly se na témž pravidle a společnost hlásila měřitelný nárůst
dodaných funkcí v obdobích zdravého rozpočtu spolu s měřitelným, záměrným
zpomalením ve dvou obdobích následujícího roku, kdy byl rozpočet skutečně
vyčerpán, přesně jak politika zamýšlela.

**Státní správa.** Veřejný varovný systém národní meteorologické služby léta fungoval
při neformálním očekávání „vždy dostupný“, bez zdokumentovaného cíle a se
značným, neřešeným provozním tlakem na tým pohotovosti, který se snažil splnit
nevyslovený, fakticky nemožný standard. Nově přijaté formální SLO, dostupnost
99,9 % s jasně sdíleným veřejným vysvětlením rozpočtu chyb, dalo provoznímu týmu
výslovné, obhajitelné svolení plánovat okna plánované údržby v rámci rozpočtu,
což bylo za předchozího nevysloveného očekávání „vždy dostupný“ politicky obtížné,
i když to bylo pro dlouhodobé zdraví systému skutečně nutné. Veřejná komunikace
vysvětlující koncept rozpočtu chyb přímo, místo jeho skrývání, byla přijata
příznivě jako znamení poctivé, zralé provozní praxe, ne oslabení závazku ke
kvalitě služby.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností formálního přijetí SLO a rozpočtů chyb je vyřešení jinak nekonečného,
politicky nákladného vyjednávání mezi rychlostí a stabilitou jediným, sdíleným,
objektivním pravidlem. Výše uvedený příklad cloudového úložiště to ukazuje
konkrétně: léta opakujícího se, nevyřešeného napětí mezi dvěma týmy vyřešil jediný
formální cíl a předem určená politika, čímž se uvolnila značná organizační energie,
která dříve utíkala na opakované projednávání téhož kompromisu.

Celkové náklady vlastnictví (TCO) zahrnují analytické úsilí o správné nastavení
cíle na základě důkazů a disciplínu dodržet předem určenou reakci na vyčerpání i
pod tlakem dodat přesto zvlášť vytouženou funkci. Tyto náklady na disciplínu jsou
skutečné, ale mnohem nižší než průběžné náklady nevyřešeného, chronického
vyjednávání, které spotřebovává organizační energii v každém plánovacím cyklu
donekonečna.

## Antivzory a úskalí

- **Stanovit ambiciózní SLO bez důkazů:** vytváří nerealistický cíl, který tým
  přestane brát vážně, nebo zbytečně drahý, honící přínos, jehož si uživatelé
  nevšimnou.
- **Žádná předem určená reakce na vyčerpání rozpočtu chyb:** nutí vést stejný
  obtížný spor o kompromis pod tlakem pokaždé, když k tomu dojde.
- **Měřit SLI z vnitřního zdraví systému místo ze skutečné zkušenosti
  uživatelů:** může hlásit „zdravé“, zatímco uživatelé zažívají skutečné
  problémy.
- **Nikdy záměrně neutratit zdravý rozpočet chyb:** může naznačovat přílišnou
  opatrnost a promarněnou legitimní příležitost.
- **Nastavit cíl jednou a už se k němu nevrátit:** SLO může zastarat, jak se mění
  očekávání uživatelů, architektura a priority.
- **Brát politiku rozpočtu chyb jako nepovinnou pod tlakem:** předem určené
  pravidlo, které se přepíše pokaždé, když je nepohodlné, nemá žádnou skutečnou
  rozhodovací hodnotu.

## Model zralosti

- **Úroveň 1, Zahájení:** Cíle spolehlivosti jsou implicitní nebo ambiciózní, bez
  definovaného formálního SLO, SLI nebo rozpočtu chyb.
- **Úroveň 2, Rozvoj:** Některé služby mají neformální SLO, ale SLI nemusí odrážet
  skutečnou zkušenost uživatelů a neexistuje předem určená politika vyčerpání.
- **Úroveň 3, Standardizace:** SLO založená na důkazech se SLI skutečné zkušenosti
  uživatelů a předem určenou politikou vyčerpání rozpočtu chyb jsou zavedena
  důsledně napříč kritickými službami.
- **Úroveň 4, Řízení:** Rozpočty chyb se aktivně a záměrně utrácejí na
  podstupování vypočtených rizik a SLO se revidují v pravidelném rytmu na základě
  důkazů.
- **Úroveň 5, Orchestrace:** SLO a rozpočty chyb jsou začleněny v celé organizaci
  jako sdílený, objektivní mechanismus vyvažování rychlosti a stability a
  organizace dokáže ukázat konkrétní rozhodnutí, která rámec umožnil a která by
  nepodložené vyjednávání nevyřešilo stejně účinně.

## Náměty k diskusi

1. Je naše současné SLO založeno na důkazech, nebo na ambici?
2. Máme předem určenou reakci na vyčerpání rozpočtu chyb, kterou bychom pod tlakem skutečně dodrželi?
3. Kdy jsme naposledy záměrně utratili zdravý rozpočet chyb na vypočtené riziko?
4. Měří naše SLI skutečnou zkušenost uživatelů, nebo pohodlné vnitřní kontroly zdraví?
5. Kolik by nás stálo zvýšit naše SLO o jednu další „devítku“ a bylo by to ospravedlněno?

## Hlavní poznatky

- **Ukazatel úrovně služby (SLI)** měří skutečnou zkušenost uživatelů; **cíl
  úrovně služby (SLO)** je jeho cíl založený na důkazech; **rozpočet chyb** je
  záměrně utratitelný povolený schodek.
- **100% spolehlivost je obvykle špatný cíl**; zakotvěte SLO v tom, čeho si
  uživatelé skutečně všímají a kolik skutečně stojí každý další přírůstek.
- Berte rozpočet chyb jako **zdroj k utrácení s předem určenou reakcí na
  vyčerpání**, což odstraňuje potřebu pokaždé pod tlakem znovu projednávat
  rychlost versus stabilitu.
- Měřte SLI ze **skutečné zkušenosti uživatelů**, ne jen z pohodlných vnitřních
  kontrol zdraví.
- **Pravidelně revidujte SLO** na základě důkazů, protože zastaralý cíl ztrácí
  užitečnost, jak se systém a jeho uživatelé mění.

## Odkazy a další četba

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy Beyer,
  Chris Jones, Jennifer Petoff a Niall Richard Murphy, eds. (základní text
  definující SLI, SLO a rozpočty chyb).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara a Stephen Thorne, eds. (praktické pokyny k zavádění SLO a
  rozpočtů chyb).
- *Implementing Service Level Objectives*, Alex Hidalgo (komplexní, na praxi
  zaměřený průvodce navrhováním a zprovozněním SLO).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (vztah mezi praxí spolehlivosti a výkonem dodávání).
