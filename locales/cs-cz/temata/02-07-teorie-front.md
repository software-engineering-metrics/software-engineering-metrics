# 2.7 Teorie front

## Přehled a motivace

**[Teorie front](https://en.wikipedia.org/wiki/Queueing_theory)** je matematická
studie čekacích řad. Zní to jako zvláštní zařazení do knihy o metrikách
softwarového inženýrství, dokud si neuvědomíte, jak velká část dodací pipeline
je ve skutečnosti fronta: pull request čekající na recenzenta, commit čekající
na runner CI, tiket čekající na převzetí, zpráva zákaznické podpory čekající na
odpověď. Téma 2.4 už představilo zatížení toku a dobu toku a ukázalo, že
přetížení hodnotového proudu způsobuje prudké zpomalení dodávání, a témata 2.5
a 2.6 ukázala, že většina doby dodání je čekací čas, ne čas práce. Teorie front
je podkladová matematika, která vysvětluje, proč to vše platí, nikoli jen
pozorovaný vzorec.

Nejužitečnějším výsledkem je **[Littleův zákon](https://en.wikipedia.org/wiki/Little%27s_law)**,
teorém, který v roce 1961 dokázal operační výzkumník John Little: průměrný počet
položek ve stabilním systému se rovná průměrné intenzitě, s jakou položky
přicházejí, vynásobené průměrnou dobou, kterou každá položka v systému stráví.
Téma 2.4 už tento výsledek použilo pod vlastními názvy Flow Frameworku, zatížení
toku se rovná intenzitě příchodů krát době toku. V širší slovní zásobě této knihy
se čte také jako rozpracovaná práce (téma 2.5) se rovná intenzitě příchodů nové
práce vynásobené cycle time (téma 2.6). Není to pravidlo palce ani korelace
pozorovaná v některých studiích. Je to důkaz, který platí pro každou stabilní
frontu bez ohledu na to, co fronta zpracovává nebo jak se rozhoduje, co dělat
dál.

U velkého týmu je právě tato obecnost smyslem. Littleův zákon dává kontrolu
zdravého rozumu, která funguje stejně, ať je fronta kanbanová tabule, message
broker nebo sdílená pipeline CI. Pokud vaše změřená rozpracovaná práce, intenzita
příchodů a cycle time zhruba nesplňují rovnici, jedno ze tří čísel je špatně,
obvykle kvůli nekonzistentní definici toho, co se počítá jako „rozpracované“
nebo „příchozí“. Velké podniky a státní správa provozují desítky takových front
najednou, sdílené fondy revizí kódu, sdílená testovací prostředí, sdílené
schvalovací rady, a Littleův zákon je nejlevnějším dostupným nástrojem k
zachycení špatné definice metriky dřív, než povede ke špatnému rozhodnutí o
obsazení nebo procesu.

## Klíčové zásady

- **Littleův zákon je důkaz, ne heuristika.** Rozpracovaná práce se rovná
  intenzitě příchodů krát cycle time, pro každou stabilní frontu, a je to rychlá
  kontrola, zda jsou vaše dodací metriky vnitřně konzistentní.
- **Vytížení neroste s čekacím časem lineárně.** Jak se sdílený zdroj blíží plnému
  vytížení, zpoždění ve frontě roste prudce, ne postupně. Zdroj vytížený z 95 %
  často čeká mnohonásobně déle než ten vytížený z 80 %, nejen „o trochu hůř“.
- **Průměr fronty skrývá její nejhorší případ.** Vykazování jen průměrného
  čekacího času zakrývá dlouhý, bolestivý ocas blízko kapacity, přesně to, před
  čím téma 1.6 varuje, když radí používat percentily místo průměrů.
- **S definicí fronty lze manipulovat stejně snadno jako s jakoukoli jinou
  metrikou.** Zda se něco počítá jako „příchozí“, „rozpracované“ nebo
  „obsloužené“, je volba a lze ji nastavit tak, aby lichotila dashboardu, aniž
  by se změnilo, co se s prací skutečně děje.
- **Pipeline je obvykle fronta front.** Dodací pipeline řetězí několik fází za
  sebou a nejpomalejší fáze udává tempo celému řetězci bez ohledu na to, jak
  rychle běží ostatní.

## Doporučení

### Používejte Littleův zákon ke kontrole vlastních čísel, než jim uvěříte

Vezměte průměrnou rozpracovanou práci svého týmu, průměrnou intenzitu příchodů
nových položek za týden a průměrný cycle time a zkontrolujte, zda se rozpracovaná
práce zhruba rovná intenzitě příchodů vynásobené cycle time. Když ne,
nepředpokládejte, že teorie je špatně. Hledejte skutečnou příčinu: hranici fáze
počítanou nekonzistentně, práci, která leží „blokovaná“, ale stále se počítá
jako rozpracovaná, nebo intenzitu příchodů měřenou v jiném okně než cycle time.
Tato jediná kontrola zachytí víc špatné instrumentace, než kolik většina týmů
najde jakýmkoli jiným způsobem.

### Sledujte vytížení přímo u každého sdíleného zdroje s omezenou kapacitou

Určete zdroje, které vaše dodací pipeline sdílí mezi mnoha týmy, fond revizí
kódu, cluster CI, staging prostředí, a změřte, jak vytížený každý z nich je jako
podíl své dostupné kapacity, dřív než plánujete provozovat ho blízko limitu.
Sdílená skupina recenzentů provozovaná blízko plné kapacity vyrábí čekací časy
fronty revizí, které rostou mnohem rychleji než skromné zvýšení poptávky, které
je způsobilo, přesně dynamika za radou tématu 2.9 sledovat čas do první revize
jako předstihový ukazatel.

### Oddělte intenzitu příchodů, míru úspěchu, míru selhání a míru přeskočení

Odolejte svodu všeho, co fronta opouští, do jediného čísla „propustnosti“ nebo
„rychlosti obsluhy“. Sledujte čtyři věci zvlášť: jak rychle práce přichází, kolik
z ní skončí úspěšně, kolik selže a potřebuje předělávku a kolik je opuštěno nebo
tiše zahozeno dřív, než to někdo dokončí. Pipeline, která vypadá rychle, protože
její míra přeskočení tiše stoupla, ve skutečnosti nedodává víc, a ukáže vám to
jen oddělené sledování těchto čtyř měr.

### Modelujte vícefázové pipeline jako frontu front

Berte dodací pipeline nebo jakýkoli vícefázový proces, životní cyklus incidentu,
náborový proces, jako řetězec front, ne jako jeden nediferencovaný chuchvalec
„času“. Celkovou intenzitu příchodů určuje první fáze, celkovou míru dokončení
poslední fáze a celkové počty chyb a přeskočení pipeline jsou součtem vlastních
počtů každé fáze. Toto pojetí vám okamžitě říká, do které fáze se vyplatí
investovat: do té s nejhorší kombinací vysokého vytížení a vysoké míry selhání
nebo přeskočení, ne do té, kterou je náhodou nejsnazší instrumentovat.

### Stanovujte obsazení a limity WIP s ohledem na vytížení, ne jen propustnost

Když rozhodujete, kolik recenzentů nebo runnerů CI tým potřebuje, nedimenzujte
kapacitu tak, aby přesně odpovídala průměrné intenzitě příchodů. Fronta
provozovaná v průměru na 100% vytížení má v praxi efektivně nekonečný čekací čas,
protože skutečné příchody jsou nerovnoměrné, ne dokonale hladké. Záměrně
plánujte rezervu a berte „naši recenzenti jsou skoro vždy zaneprázdnění“ jako
varovný signál o čekacích časech, které teprve přijdou, ne jako důkaz efektivního
využití zdrojů.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádný formální model front, obsazení od oka | Rychlé na začátek; žádná nová slovní zásoba pro tým | Soustavně podceňuje, jak čekací čas exploduje blízko plné kapacity |
| Littleův zákon jako kontrola zdravého rozumu u existujících metrik | Levné, nevyžaduje nové nástroje, rychle zachytí špatné definice | Kontroluje jen konzistenci, sám o sobě neurčí příčinu |
| Plná simulace front (rozdělení příchodů, více obslužných míst) | Nejpřesnější předpověď chování čekacího času pod zátěží | Vyžaduje skutečnou statistickou dovednost a údržbu, kterou většina týmů neudrží |
| Sledování vytížení u sdílených zdrojů bez hlubšího modelování | Jednoduché, použitelné, zachytí nejvýznamnější příčinu skokových čekacích časů | Neříká nic o tom, proč je vytížení vysoké nebo co dělat se základní příčinou |

Hlavním napětím je **přísnost versus přijetí**. Plná simulace front dává
nejpřesnější odpověď, ale téměř žádný inženýrský tým ji nepostaví a neudrží a
model, kterému nikdo nevěří nebo ho neaktualizuje, je horší než žádný model.
Littleův zákon a základní sledování vytížení se vzdávají části přesnosti, ale
nevyžadují žádnou specializovanou statistickou dovednost a zapadají přímo do
metrik, které tým už sbírá pro témata 2.4 až 2.6. Používejte jako výchozí tyto
levné, přijatelné kontroly a plnou simulaci vyhraďte pro vzácný případ, kdy je
jediný sdílený zdroj, velká flotila CI, specializovaný fond revizí, dost drahý na
to, aby investici ospravedlnil.

## Otázky k diskusi s vaším týmem

1. **Splňují naše změřená rozpracovaná práce, intenzita příchodů a cycle time
   skutečně Littleův zákon, a pokud ne, proč?** Je to nejrychlejší dostupná
   diagnostika špatné definice metriky. Projděte skutečná čísla společně a pokud
   rovnice zhruba neplatí, vystopujte nesoulad ke konkrétní definiční
   nekonzistenci, místo abyste kontrolu odmítli.

2. **Které sdílené zdroje v naší dodací pipeline jsou provozovány blízko plného
   vytížení a známe skutečně jejich číslo vytížení?** Většina týmů umí
   pojmenovat zdroj, který „vždy působí zaneprázdněně“, ale nikdy neměřila jeho
   vytížení přímo. Určete dva nebo tři nejvíce omezené sdílené zdroje a získejte
   pro každý skutečné číslo.

3. **Slučujeme úspěch, selhání a přeskočení do jediného čísla propustnosti a co
   bychom viděli, kdybychom je rozdělili?** Jediný počet „dokončených položek“
   může růst, i když kvalita klesá nebo se práce tiše opouští. Přepočítejte
   propustnost nedávného období jako tři oddělená čísla a diskutujte, co
   rozdělení odhalí, co smíšené číslo skrylo.

4. **Kde v naší pipeline je skutečné úzké hrdlo, nejpomalejší fáze, která udává
   tempo všemu po ní?** Týmy často investují do zrychlení fáze, kterou se
   nejsnáze zlepšuje, místo té, která skutečně omezuje celkovou propustnost.
   Určete fázi s nejhorší kombinací vysokého vytížení a vysoké míry selhání nebo
   přeskočení.

5. **Kdybychom přidali kapacitu našemu nejvíce omezenému sdílenému zdroji,
   zlepšil by se čekací čas skutečně, nebo by poptávka prostě expandovala, aby
   ji vyplnila?** Tato otázka odděluje skutečný nedostatek kapacity od problému
   poptávky a odpověď mění, zda je správnou nápravou víc lidí, limit WIP, nebo
   změna toho, jak se práce prioritizuje, než vstoupí do fronty.

6. **Předefinovali jsme někdy, co se počítá jako „rozpracované“ nebo „příchozí“,
   způsobem, který dashboard zlepšil, aniž by se změnilo, co se s prací skutečně
   dělo?** Stojí za to ptát se poctivě a konkrétně, se skutečnými příklady z
   posledního roku, místo abyste to brali jako hypotetickou obavu.

## Pohled podle sektorů

**Startup.** S hrstkou inženýrů jsou většinou fronty natolik krátké, že formální
analýza front je zbytečná. Užitečnější je menší návyk: všimnout si, když se
jedna osoba, často nejzkušenější inženýr, stala de facto sdíleným zdrojem, na
který všechno ostatní čeká, a berte to jako problém vytížení hodný pojmenování i
bez formálního modelu.

**Malá firma.** Tým malé firmy zřídka potřebuje něco sofistikovanějšího než
sledování vytížení u svých jednoho nebo dvou skutečně sdílených zdrojů, často
jediného recenzenta nebo jediné pipeline nasazení, a hlídání bodu, kde se
„obvykle k dispozici“ tiše mění na „obvykle úzké hrdlo“. Stačí tabulka;
specializované nástroje nejsou v tomto měřítku nutné.

**Velký podnik.** Sdílené zdroje se ve velkém podniku množí rychle: centrální
platformní tým, sdílená rada pro bezpečnostní revize, sdílená flotila CI
obsluhující desítky produktových týmů. Právě to jsou zdroje, kde se sledování
vytížení vyplatí, protože jediný přetížený sdílený zdroj může tiše zhoršovat
dobu dodání každému týmu, který na něm závisí, a metriky žádného jednotlivého
týmu neodhalí příčinu, která leží mimo jeho vlastní pipeline.

**Státní správa.** Dodací programy více agentur a více dodavatelů často vedou
práci přes sdílené schvalovací rady, sdílené procesy bezpečnostní akreditace a
sdílená testovací prostředí, která žádný jednotlivý tým neřídí ani nemůže sám
změnit jejich velikost. Analýza těchto sdílených bran pomocí teorie front,
intenzita příchodů, kapacita, vytížení, je často nejjasnějším dostupným důkazem
pro obchodní odůvodnění přidání kapacity nebo změny toho, jak se práce dávkuje,
než dorazí k bráně.

## Příklady

**Velký podnik.** Interní platformní tým poskytovatele cloudové infrastruktury si
všiml, že lead time změn (téma 2.10) pomalu roste u každého produktového týmu
závislého na jeho sdílené flotile CI, i když žádný jednotlivý tým nezměnil
způsob práce. Analýza vytížení zjistila, že flotila je během hlavních hodin
vytížená přes 90 %, daleko za bodem, kde teorie front předpovídá, že čekací čas
roste prudce, ne postupně. Platformní tým přidal kapacitu CI a zavedl politiku
férového rozvrhování, aby žádný jednotlivý tým svou nárazovou aktivitou
nemonopolizoval frontu. Mediánový čekací čas CI klesl do měsíce o více než
polovinu, což byl důkaz, že úzkým hrdlem byla celou dobu sdílená, neviditelná
fronta.

**Státní správa.** Tým digitální služby národní agentury pro povolení dva roky
sledoval zpracování žádostí jako jediné číslo propustnosti „uzavřené případy za
týden“ a číslo vypadalo stabilně. Podrobnější analýza, rozdělení tohoto čísla
na případy schválené, zamítnuté a opuštěné žadateli po dlouhých zpožděních,
zjistila, že míra opuštění se za stejné období téměř ztrojnásobila, zatímco
schvalování zůstalo stejné. Littleův zákon aplikovaný na frontu úředníků ukázal,
že rozpracovaná práce vyrostla daleko za to, co naznačovala uváděná průměrná
doba zpracování týmu, což znamenalo, že se případy tiše hromadily ve stavu, který
se nepočítal jako „čekající“. Agentura přepracovala definice sledování případů,
aby poctivě počítaly každý otevřený případ, a přidala kapacitu úředníků
dimenzovanou tak, aby vytížení zůstalo pod 85 %, nyní sledované jako stálý
provozní cíl vedle čísla propustnosti.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností použití základní analýzy front je, že mění „pipeline působí pomalu“
na konkrétní, obhajitelné rozhodnutí, přidat rezervu tomuto sdílenému zdroji,
rozdělit tuto smíšenou metriku na její skutečné složky, místo vágního tlaku
„pracujte rychleji“, který skutečnou příčinu mine. Výše uvedený příklad
poskytovatele cloudové infrastruktury, poloviční čekací čas díky opravě kapacity
a rozvrhování, nikoli změně chování jednotlivých týmů, je vzorcem, který tato
analýza spolehlivě vyrábí: náprava je téměř vždy levnější než žádat každý
navazující tým, aby se pohyboval rychleji kolem úzkého hrdla, které nevidí.

Celkové náklady vlastnictví (TCO) přijetí jsou skutečně nízké. Littleův zákon a
sledování vytížení nepotřebují žádné nové nástroje nad to, co témata 2.4 až 2.6
už žádají sbírat: intenzitu příchodů, rozpracovanou práci a cycle time.
Investicí je většinou analytická disciplína, porovnávání čísel mezi sebou a
pravidelná revize vytížení sdílených zdrojů dřív, než se stanou další
nevysvětlenou regresí lead time v organizaci.

## Antivzory a úskalí

- **Dimenzovat kapacitu sdíleného zdroje přesně podle jeho průměrné intenzity
  příchodů:** zaručuje vysoké vytížení a skokové čekací časy, kdykoli je
  poptávka byť krátce nerovnoměrná.
- **Vykazovat jen průměrný čekací čas, nikdy percentil:** skrývá dlouhý ocas,
  který nejvíc záleží lidem, kdo v něm čekají.
- **Slučovat úspěch, selhání a přeskočení do jediného čísla propustnosti:**
  způsob manipulace v srdci tohoto tématu. Tým pod tlakem může učinit
  propustnost zdravě vyhlížející tím, že tiše nechá růst míru přeskočení,
  opuštěné tikety, tiše zahozené požadavky, práci, která se nikdy nezapočte
  jako selhání. Pojistkou je sledovat intenzitu příchodů, míru úspěchu, selhání a
  přeskočení jako čtyři oddělená, viditelná čísla, tedy stejná disciplína, kterou
  téma 1.2 žádá u každé metriky v této knize, aby rostoucí míra přeskočení
  nemohla zmizet za plochým grafem propustnosti.
- **Brát „naši lidé jsou stále zaneprázdnění“ jako kompliment:** je to příznak
  vysokého vytížení, hlavní příčiny dlouhých, nepředvídatelných čekacích časů.
- **Předefinovat „rozpracované“, aby se tiše zmenšila rozpracovaná práce:**
  přesune práci do nezapočítávaného stavu, „blokováno“, „pozastaveno“, aniž by se
  změnilo, jak dlouho trvá dokončení, a rozbije kontrolu Littleovým zákonem,
  která by to jinak zachytila.
- **Předpokládat, že model front po sestavení nevyžaduje údržbu:** vzorce
  příchodů i kapacita se neustále mění a zastaralý model vyrábí sebejistě
  chybné předpovědi.

## Model zralosti

- **Úroveň 1, Zahájení:** Žádná fronta se neměří výslovně; čekací čas se probírá
  anekdoticky jako „věci jdou pomalu“.
- **Úroveň 2, Rozvoj:** Intenzita příchodů, rozpracovaná práce a cycle time se
  sledují alespoň pro jednu pipeline, ale nikdy se nekontrolují vůči Littleovu
  zákonu ani vůči vytížení sdílených zdrojů.
- **Úroveň 3, Standardizace:** Littleův zákon je rutinní kontrolou konzistence
  napříč dodacími pipeline a vytížení se sleduje výslovně u nejvýznamnějších
  sdílených zdrojů.
- **Úroveň 4, Řízení:** Míra úspěchu, selhání a přeskočení se sledují zvlášť u
  každé významné fronty a rozhodnutí o kapacitě používají cíle vytížení, nejen
  průměrnou poptávku.
- **Úroveň 5, Orchestrace:** Organizace modeluje své hlavní pipeline jako fronty
  front, systematicky určuje skutečná úzká hrdla a dokáže ukázat konkrétní
  změny kapacity či procesu provedené na základě analýzy front, s
  měřitelným zlepšením čekacího času.

## Náměty k diskusi

1. Vyberte jednu z našich dodacích pipeline a ověřte, zda její čísla dnes
   splňují Littleův zákon.
2. Pojmenujte jediný sdílený zdroj v naší organizaci, o kterém by většina lidí
   souhlasila, že je „stále zaneprázdněný“, a zjistěte jeho skutečné číslo
   vytížení.
3. Jak by vypadal náš graf propustnosti, kdybychom ho za poslední čtvrtletí
   rozdělili na míru úspěchu, selhání a přeskočení?
4. Kdybychom letos měli přidat kapacitu přesně jednomu sdílenému zdroji, kterému
   a jaký důkaz by to zdůvodnil?

## Hlavní poznatky

- **Littleův zákon**, rozpracovaná práce se rovná intenzitě příchodů krát cycle
  time, je důkaz, ne heuristika, a je to nejlevnější dostupná kontrola, zda jsou
  vaše dodací metriky vnitřně konzistentní.
- **Čekací čas roste prudce, ne postupně, jak se vytížení blíží plné kapacitě.**
  Berte „stále zaneprázdněný“ jako varovný signál, ne kompliment.
- Sledujte **intenzitu příchodů, míru úspěchu, míru selhání a míru přeskočení**
  zvlášť; jejich slučování do jediného čísla propustnosti je ústředním způsobem
  manipulace tohoto tématu.
- Modelujte vícefázovou pipeline jako **frontu front** a investujte do fáze s
  nejhorší kombinací vysokého vytížení a vysoké míry selhání nebo přeskočení, ne
  do fáze, kterou se nejsnáze zlepšuje.
- Dávejte přednost levným, přijatelným kontrolám, **Littleovu zákonu a sledování
  vytížení**, před plnou simulací front, kterou udrží málokterý tým.

## Odkazy a další četba

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
