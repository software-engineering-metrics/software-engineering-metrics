# 5.2 Přijetí funkcí a metriky používání

## Přehled a motivace

**Přijetí funkce** měří, zda ji lidé, pro něž byla postavena, skutečně používají,
jakým tempem a zda toto používání v čase přetrvává. Je to, v nejpřímějším smyslu,
kontrola reality všeho, co měří části 2 až 4 této knihy: organizace může často
nasazovat, udržovat výbornou zkušenost vývojářů a dodávat bezchybně otestovaný
kód a přesto stavět věci, které nikdo nechce. Data o přijetí jsou místem, kde
inženýrská organizace zjistí, zda se její výstup vůbec spojil s nějakým skutečným
výsledkem, což je přesně rozlišení vstup-výstup-výsledek zavedené v tématu 1.3,
aplikované na nejkonkrétnější případ této knihy: konkrétní, dodanou funkci.

Hlavním problémem tohoto tématu je, že data o přijetí se, víc než téměř jakákoli
jiná rodina metrik v této knize, snadno měří způsobem, který lichotí, místo aby
informoval. Funkce může vykazovat působivé počáteční přijetí čistě ze zvědavosti
nebo vynucené expozice (modální okno, které se objeví, ať uživatel chce, nebo
ne), zatímco skutečné, trvalé dodávání hodnoty, měřené tím, zda lidé funkci
používají dál, když novota vyprchá, vypráví úplně jiný příběh. Odlišit skutečné
přijetí od dočasné špičky je hlavní technická výzva tohoto tématu a když se to
pokazí, organizace běžně oslavují funkce, které tiše selhávají, a opouštějí ty,
které teprve začínaly nacházet své publikum.

U velkých týmů jsou data o přijetí funkcí tím, co dělá prioritizaci roadmapy
založenou na důkazech, místo aby ji řídil ten, kdo nejpřesvědčivěji obhajuje
práci vlastního týmu. Velké podniky spravující rozsáhlá produktová portfolia
potřebují data o přijetí, aby poznaly, které investice si na sebe vydělávají;
státní správa budující digitální služby pro občany je potřebuje k doložení, že
veřejná investice vytvořila služby, které lidé skutečně používají, ne jen služby,
které technicky existují.

## Klíčové zásady

- **Počáteční přijetí a trvalé přijetí jsou různé signály.** Špička ze zvědavosti
  nebo vynucené expozice není totéž co skutečné, trvalé dodávání hodnoty.
- **Přijetí se má měřit vůči publiku, pro které bylo funkci určeno**, ne bez
  rozlišení vůči celé uživatelské základně.
- **Funkce s nízkým přijetím není automaticky selháním.** Může být špatně k
  nalezení, špatně zacílená nebo prostě nová; prošetřete, než dojdete k závěru.
- **Udržení používání je důležitější než jeden snímek přijetí.** Sledujte, zda se
  lidé, kteří funkci vyzkoušeli, k ní dál vracejí.
- **Data o přijetí jsou vystavena manipulaci vynucenou expozicí nebo temnými
  vzory (dark patterns).** Číslo nafouknuté tím, že se funkci nelze vyhnout, není
  skutečný signál.

## Doporučení

### Odlište počáteční vyzkoušení od trvalého udržení

Sledujte dvě oddělená čísla: procento cílového publika, které funkci alespoň
jednou vyzkouší (počáteční přijetí), a procento, které ji stále používá po
smysluplném období, například čtyřech či osmi týdnech (udržené přijetí). Funkce s
vysokým počátečním vyzkoušením a nízkým udržením naznačuje, že nalezitelnost
fungovala, ale funkce sama nedodala dost hodnoty, aby se k ní lidé vraceli, což
je velmi odlišná diagnóza a velmi odlišná oprava než nízké počáteční vyzkoušení
s vysokým udržením, které naznačuje skutečně hodnotnou funkci, o níž neví dost
lidí.

### Přesně definujte cílové publikum dřív, než změříte přijetí

Přijetí měřené vůči celé uživatelské základně může být zavádějící, pokud funkce
byla vždy určena jen pro konkrétní segment: funkce pro administrátory ve velkých
podnicích měřená vůči převážně individuální uživatelské základně bude vždy
vypadat, že má příšerné přijetí, bez ohledu na to, jak dobře slouží lidem, pro
něž byla postavena. Definujte zamýšlené publikum výslovně před spuštěním a
měřte přijetí vůči tomuto konkrétnímu jmenovateli, ne vůči celkovému počtu
uživatelů.

### Prošetřete nízké přijetí, než usoudíte, že funkce selhala

Nízké číslo přijetí má několik možných příčin, které vyžadují velmi odlišné
reakce: funkce skutečně není hodnotná; funkce je hodnotná, ale špatně k nalezení
(uživatelé nevědí, že existuje); funkce je hodnotná, ale špatně vysvětlená
(uživatelé ji vidí, ale nechápou její účel); nebo je okno měření prostě příliš
krátké na to, aby pomaleji přijímaná funkce stihla najít své publikum.
Prošetřete, která z nich platí, než se rozhodnete investovat dál, přepracovat
nebo vyřadit.

### Dejte pozor na přijetí nafouknuté vynucenou expozicí nebo [temnými vzory](https://en.wikipedia.org/wiki/Dark_pattern)

Číslo přijetí poháněné tím, že se funkci těžko vyhnout, dotěrný onboarding,
modální okno, které musí uživatel zavřít, výchozí nastavení, které se obtížně
mění, neměří skutečné dodávání hodnoty a oslavovat ho, jako by je měřilo,
opakuje vzorec manipulace záměnou z tématu 1.2 v produktové podobě. Spárujte
hrubá čísla přijetí s ukazatelem spokojenosti nebo signálem typu Net Promoter
pro danou funkci, kde je to možné, aby vynucená expozice, která se nepřevede na
skutečnou spokojenost, byla zachycena, a ne oslavována.

### Propojte trendy přijetí zpět s konkrétními produktovými a inženýrskými rozhodnutími

Když přijetí nečekaně roste nebo klesá, vysledujte změnu zpět ke konkrétnímu
rozhodnutí, změně rozhraní, změně výchozího nastavení, marketingové kampani,
zlepšení či zhoršení výkonu, místo aby se pohyb bral jako nevysvětlitelná záhada.
Tím se data o přijetí propojí s použitelným produktovým a inženýrským poučením a
uzavře se smyčka mezi konkrétní změnou a jejím měřeným účinkem na skutečné
používání.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Měření vůči celé uživatelské základně | Jednoduché, jeden jmenovatel | Zavádějící u funkcí zaměřených na konkrétní segment |
| Měření vůči definovanému cílovému publiku | Férově a přesně odráží zamýšlený dosah | Vyžaduje záměrné definování publika před spuštěním |
| Jen počáteční vyzkoušení | Rychlý signál, dostupný brzy po spuštění | Nezachytí, zda funkce dodává trvalou hodnotu |
| Počáteční vyzkoušení plus udržení | Odlišuje zvědavost od skutečné hodnoty | Vyžaduje delší čekání (týdny), než vznikne úplný obraz |

Hlavním napětím je **rychlost versus poctivost**. Data o počátečním vyzkoušení
jsou k dispozici téměř hned po spuštění a vyhovují organizačnímu tlaku na brzké
hlášení výsledků, ale samotná nedokážou odlišit zvědavost či vynucenou expozici
od skutečné, trvalé hodnoty. Napětí vyřešíte tak, že data o počátečním
vyzkoušení nahlásíte brzy a jasně označená jako předběžná a veřejně se zavážete
k následnému měření udržení v pevně stanoveném, předem určeném intervalu, aby se
rané nadšení nezkostnatělo v nezkoumaný příběh úspěchu dřív, než měl skutečný
signál čas se objevit.

## Otázky k diskusi s vaším týmem

1. **Známe u naší naposledy dodané funkce počáteční vyzkoušení a udržené
   používání zvlášť, nebo jen jedno kombinované číslo?** Pokud existuje jen
   kombinované číslo, tato mezera skrývá přesně rozlišení zvědavost versus
   hodnota, které toto téma pokládá za ústřední.

2. **Bylo naše cílové publikum pro tuto funkci definováno výslovně před
   spuštěním a měříme přijetí vůči této konkrétní skupině?** Ověřte, zda váš
   současný jmenovatel přijetí odpovídá tomu, pro koho byla funkce skutečně
   postavena, nebo zda je zředěn měřením vůči nerelevantní širší populaci.

3. **Prošetřili jsme u funkce s nízkým přijetím, která z několika možných
   příčin, nízká hodnota, špatná nalezitelnost, špatné vysvětlení, nedostatek
   času, skutečně platí?** Projděte tento diagnostický seznam u skutečné,
   současné funkce s nízkým přijetím, místo abyste automaticky usoudili, že
   „asi není hodnotná“.

4. **Je nějaká část našeho vykazovaného čísla přijetí nafouknuta vynucenou
   expozicí, dotěrným výchozím nastavením nebo modálním oknem, které je třeba
   zavřít, místo skutečného, dobrovolného používání?** Buďte upřímní; je to
   častý a snadný vzorec, do něhož se dá upadnout, zvlášť pod tlakem ukázat
   brzy pozitivní výsledky.

5. **Když se přijetí funkce výrazně pohnulo, dokázali jsme tento pohyb vysledovat
   ke konkrétní změně, kterou jsme udělali?** Pokud je odpověď obvykle „nejsme si
   jisti“, tato mezera omezuje, kolik se může vaše organizace z vlastních dat o
   přijetí v čase skutečně naučit.

6. **Párujeme čísla přijetí s nějakým signálem spokojenosti pro tutéž funkci,
   nebo sledujeme jen hrubé používání?** Vysoké číslo přijetí spárované s nízkou
   spokojeností je varovné znamení, které by samotné hrubé používání zcela
   minulo.

## Pohled podle sektorů

**Startup.** Přijetí funkcí je často nejdůležitějším signálem, jaký mladá firma
má, úzce spojeným se samotným product-market fit. Sledujte konkrétně udržení,
ne jen počáteční vyzkoušení, od úplně první funkce, protože odlišit skutečnou
hodnotu od rané zvědavosti je kritické, když přežití firmy může záviset na
správné diagnóze.

**Malá firma.** Většina analytických platforem hlásí základní data o používání s
minimálním nastavením; hlavní disciplínou je jasně definovat cílové publikum před
měřením, místo aby se přijetí vykazovalo vůči celé zákaznické základně bez ohledu
na to, pro koho byla konkrétní funkce skutečně postavena.

**Velký podnik.** Data o přijetí jsou v tomto měřítku nezbytná pro férovou,
na důkazech založenou prioritizaci roadmapy napříč velkým produktovým
portfoliem a disciplína odlišování počátečního vyzkoušení od trvalého udržení
je zde ještě důležitější, protože dost velká uživatelská základna dokáže
vyprodukovat působivě vypadající počáteční špičku téměř u každého spuštění bez
ohledu na skutečnou hodnotu.

**Státní správa.** Přijetí digitální služby pro občany je přímou, konkrétní
mírou toho, zda se veřejná investice proměnila ve skutečný veřejný prospěch, a
pro orgán dohledu je to často mnohem přesvědčivější metrika než počet dodávek
nebo aktivit. Měřte přijetí vůči populaci, kterou služba skutečně měla
obsloužit, a buďte upřímní ohledně překážek (digitální gramotnost, přístup,
povědomí), které mohou nízké přijetí vysvětlit nad rámec samotného návrhu služby.

## Příklady

**Velký podnik.** Softwarová firma pro projektové řízení spustila novou funkci
společné editace a oslavovala působivých 60 % počátečního vyzkoušení během
prvních dvou týdnů. Následné měření udržení po osmi týdnech ukázalo, že
pravidelně ji stále používalo jen 8 % těchto prvních uživatelů, což odhalilo, že
vysoké vyzkoušení vyvolal téměř výhradně nápadný, těžko zavíratelný tooltip při
onboardingu, a ne skutečný, trvalý zájem. Zkoumání kvalitativní zpětné vazby od
raných uživatelů, kteří funkci přestali používat, odhalilo konkrétní, opravitelný
problém použitelnosti, neintuitivní vzor interakce, který cílené přepracování
vyřešilo, a udržené používání se po opravě téměř ztrojnásobilo, i když se nikdy
nepřiblížilo zavádějícímu vysokému počátečnímu číslu.

**Státní správa.** Národní zaměstnanecká služba spustila nový online nástroj pro
párování nabídek práce a zpočátku vykazovala přijetí vůči celé registrované
uživatelské základně úřadu, což dalo odrazující nízké procento, které ohrožovalo
další financování programu. Revidovaná analýza, měřící přijetí konkrétně vůči
podskupině registrovaných uživatelů, kteří aktivně hledali práci v cílových
odvětvích nástroje, tedy skutečnému zamýšlenému publiku, ukázala podstatně vyšší
a přesnější míru přijetí. V kombinaci s cílenou osvětovou kampaní právě na toto
definované publikum a následným měřením udržení, které ukázalo silné trvalé
používání mezi uživateli, program získal další financování na základě opravené,
poctivě zacílené metriky, ne zavádějícím způsobem zředěného původního čísla.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností důsledného měření přijetí funkcí je investování do roadmapy na
základě důkazů: organizace, která dokáže odlišit skutečnou, udrženou hodnotu od
počátečního vyzkoušení poháněného zvědavostí, může s jistotou investovat dál do
funkcí, které skutečně fungují, a přesměrovat úsilí od těch, které nefungují,
místo aby honila zavádějící počáteční špičku nebo předčasně opouštěla skutečně
hodnotnou, ale pomalu objevovanou funkci.

Celkové náklady vlastnictví (TCO) tvoří většinou analytická instrumentace, která
je obvykle už dostupná ve většině moderních platforem produktové analytiky, plus
disciplína výslovně definovat cílová publika a zavázat se k následnému měření
udržení, místo aby se zastavilo u raného, neúplného signálu. Tato disciplína
stojí málo a předchází mnohem dražší chybě, totiž špatnému přečtení falešného
úspěchu nebo falešného selhání.

## Antivzory a úskalí

- **Vykazovat jen počáteční vyzkoušení, nikdy udržení:** neumí odlišit zvědavost
  nebo vynucenou expozici od skutečné, trvalé hodnoty.
- **Měřit přijetí vůči špatnému jmenovateli:** zřeďuje nebo nafukuje signál u
  funkcí zaměřených na konkrétní segment publika.
- **Usoudit, že funkce selhala, aniž by se prošetřila konkrétní příčina**
  nízkého přijetí: hrozí opuštění skutečně hodnotné, ale špatně nalezitelné nebo
  špatně načasované funkce.
- **Oslavovat přijetí nafouknuté vynucenou expozicí nebo temnými vzory:**
  produktový případ manipulace záměnou z tématu 1.2.
- **Nikdy nevysledovat pohyb přijetí zpět ke konkrétním rozhodnutím:** omezuje
  učení organizace z vlastních dat.
- **Sledovat používání bez párového signálu spokojenosti:** přehlédne případ,
  kdy vysoké používání koexistuje s nízkou skutečnou hodnotou nebo spokojeností.

## Model zralosti

- **Úroveň 1, Zahájení:** Přijetí se neměří, nebo se vykazuje jen jedno, rané,
  neudržené číslo vyzkoušení.
- **Úroveň 2, Rozvoj:** Určité sledování přijetí existuje, ale cílová publika
  nejsou přesně definována a udržení se měří nekonzistentně.
- **Úroveň 3, Standardizace:** Počáteční vyzkoušení i udržené přijetí se důsledně
  sledují vůči přesně definovanému cílovému publiku u každé hlavní funkce.
- **Úroveň 4, Řízení:** Funkce s nízkým přijetím se systematicky zkoumají na
  konkrétní kořenovou příčinu před rozhodnutím o přepracování nebo vyřazení;
  přijetí je spárováno s daty o spokojenosti.
- **Úroveň 5, Orchestrace:** Data o přijetí přímo a běžně informují prioritizaci
  roadmapy a investiční rozhodnutí a organizace dokáže s jistotou vysledovat
  konkrétní pohyby přijetí zpět ke konkrétním produktovým a inženýrským
  rozhodnutím.

## Náměty k diskusi

1. Která nedávná funkce měla počáteční vyzkoušení a udržené přijetí, které vyprávěly velmi odlišné příběhy?
2. Bylo cílové publikum naší poslední funkce definováno přesně před spuštěním, nebo až po něm?
3. Která funkce s nízkým přijetím si zaslouží poctivé zkoumání kořenové příčiny dřív, než rozhodneme o jejím osudu?
4. Je nějaká část našeho současného vykazování přijetí nafouknuta vynucenou expozicí?
5. Co by spárování dat o přijetí s daty o spokojenosti odhalilo o naší nejpoužívanější funkci?

## Hlavní poznatky

- Odlište **počáteční vyzkoušení od trvalého udržení**; špička ze zvědavosti nebo
  vynucené expozice není skutečná, trvalá hodnota.
- Měřte přijetí vůči **přesně definovanému cílovému publiku**, ne vůči
  nerelevantní širší uživatelské základně.
- **Prošetřete konkrétní příčinu** nízkého přijetí, než usoudíte, že funkce
  selhala; několik velmi odlišných příčin vyžaduje velmi odlišné reakce.
- Dávejte pozor na přijetí **nafouknuté vynucenou expozicí nebo temnými vzory** a
  spárujte přijetí se **signálem spokojenosti**, abyste to zachytili.
- **Vysledujte pohyb přijetí zpět ke konkrétním rozhodnutím**, aby se z dat stalo
  skutečné učení organizace.

## Odkazy a další četba

- *Lean Analytics*, Alistair Croll a Benjamin Yoskovitz (použitelné versus
  parádní metriky aplikované na data o používání produktu).
- *Continuous Discovery Habits*, Teresa Torres (propojení produktových rozhodnutí
  s důkazy o zákaznických výsledcích, včetně dat o přijetí).
- *Hooked: How to Build Habit-Forming Products*, Nir Eyal (udržení a tvorba
  návyků a etická hranice mezi skutečnou hodnotou a temnými vzory).
- *Measure What Matters*, John Doerr (cílování zaměřené na výsledky použitelné
  při stanovování cílů přijetí).
