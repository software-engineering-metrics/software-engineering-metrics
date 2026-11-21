# 6.2 Metriky incidentů: detekce, reakce a obnova

## Přehled a motivace

Toto téma měří, co se stane, když se rozpočet chyb z tématu 6.1 utratí skutečným
selháním: **incidentem**, neplánovanou událostí, která službu zhoršuje nebo
přerušuje. Čtyři metriky tvoří standardní slovník pro měření toho, jak dobře s
tím organizace zachází: **střední doba detekce (MTTD)**, jak dlouho trvá, než
organizace zaznamená, že něco není v pořádku; **střední doba potvrzení (MTTA)**,
jak dlouho trvá, než se někdo ujme reakce; **střední doba vyřešení** nebo
**obnovy (MTTR)**, jak dlouho trvá obnova služby, tentýž koncept, který téma 2.10
pokrylo konkrétně pro selhání způsobená nasazením, nyní zobecněný na jakýkoli
incident bez ohledu na příčinu; a **frekvence incidentů**, prostě to, jak často
incidenty vůbec nastávají.

Hlavním problémem tohoto tématu, ozvěnou zacházení tématu 2.10 s mírou selhání
změn, je, že tato čísla jsou jen tak důvěryhodná, jak důvěryhodná je
organizační kultura kolem poctivého hlášení a klasifikace incidentů. Tým, který se
bojí obviňování za incident, má každou pobídku hlášení podhodnocovat, odkládat
potvrzení, aby se vyhnul „běžícím hodinám“, nebo klasifikovat vážnou událost jako
drobnou, aby ochránil své metriky. Praxe **[postmortemů bez
obviňování](https://en.wikipedia.org/wiki/Just_culture)**, uplatňovaná průkopnicky
v organizacích jako Etsy a formalizovaná v literatuře Google SRE, existuje
výslovně k odstranění této pobídky a toto téma ji bere jako předpoklad
důvěryhodných dat o incidentech, ne jako volitelnou kulturní zdvořilost nad
metrikami.

U velkých týmů metriky incidentů odhalují, zda schopnost organizace detekovat a
reagovat, mimo jiné nástroje vrácení změny z tématu 2.10, skutečně funguje za
skutečných, různorodých podmínek, ne jen v konkrétním scénáři selhání způsobeného
nasazením, který toto téma pokrylo. Velké podniky a státní správa provozující
kritickou infrastrukturu na těchto metrikách závisejí vnitřně, aby řídily skutečné
zlepšování provozu, i navenek, aby zákazníkům, regulátorům či veřejnosti
prokázaly, že s incidenty se zachází kompetentně a že se v čase zlepšují.

## Klíčové zásady

- **Kultura bez obviňování je předpokladem důvěryhodných dat o incidentech**, ne
  volitelným doplňkem; strach z obviňování kazí hlášení, rychlost potvrzení i
  klasifikaci závažnosti.
- **Detekce, potvrzení a vyřešení jsou odlišné fáze s odlišnými opravami.**
  Pomalá celková doba obnovy může skrývat velmi odlišné základní problémy podle
  toho, která fáze je skutečně pomalá.
- **Frekvence incidentů a MTTR jsou párový signál**, podobně jako míra selhání
  změn a doba obnovy podle DORA (téma 2.10): ani jedno samo neřekne celý příběh.
- **Klasifikace závažnosti potřebuje stejnou přísnost jako klasifikace uniklých
  vad** (téma 5.1): jednotná, zdokumentovaná kritéria, ne ad hoc úsudek.
- **Hodnota postmortemu je v systémovém učení, ne ve vytvoření čísla.** Metrika
  je vedlejším produktem dobré praxe, ne jejím cílem.

## Doporučení

### Rozložte dobu reakce na incident na její odlišné fáze

Měřte a vykazujte zvlášť dobu detekce (od skutečného počátku selhání do chvíle,
kdy si toho někdo všimne), dobu potvrzení (od upozornění do chvíle, kdy se někdo
ujme odpovědnosti) a dobu vyřešení (od převzetí odpovědnosti do skutečné obnovy),
místo jediného, smíšeného součtu. Každá fáze ukazuje na jinou opravu: pomalá
detekce ukazuje na mezeru v monitorování a alertování, pomalé potvrzení na problém
procesu pohotovosti nebo eskalace a pomalé vyřešení na mezeru v nástrojích,
runbookách nebo diagnostické schopnosti (téma 2.10 to pokrývá konkrétně pro
selhání způsobená nasazením).

### Vybudujte a chraňte skutečně proces postmortemů bez obviňování

**Postmortem bez obviňování** zkoumá, co se stalo a proč to systém dovolil,
výslovně se vyhýbá přisuzování viny jednotlivci za chybu, kterou by za stejných
okolností a se stejnými informacemi mohl věrohodně udělat jakýkoli rozumný člověk.
Tuto disciplínu aktivně chraňte: vedení modelující nepotrestávající reakce na
incidenty, výslovná písemná politika a zvyk ptát se „co na našem systému to
dovolilo“ místo „kdo to udělal“ jsou všechno nutné, průběžné investice, ne
jednorázové prohlášení politiky.

### Klasifikujte závažnost podle jednotných, zdokumentovaných, auditovaných kritérií

Uplatněte na klasifikaci závažnosti incidentů stejnou disciplínu, jakou téma 5.1
doporučuje pro uniklé vady: pevnou, zdokumentovanou škálu založenou na skutečném
dopadu na zákazníky nebo byznys, uplatňovanou důsledně napříč týmy a pravidelně
auditovanou na posun. Nekonzistentní klasifikace, některé týmy velkorysé, jiné
přísné, činí data o incidentech v celé organizaci stejně nespolehlivými pro
srovnání, jako by byla nekonzistentně klasifikovaná data o vadách.

### Sledujte frekvenci incidentů a MTTR společně, nikdy odděleně

Zlepšující se MTTR spolu s rostoucí frekvencí incidentů může naznačovat tým, který
se zlepšuje v hašení požárů, zatímco spolehlivost základního systému ve skutečnosti
klesá; klesající frekvence incidentů spolu se zhoršujícím se MTTR může naznačovat
řidší, ale závažnější, hůř diagnostikovatelná selhání nahrazující časté drobná.
Revidujte obojí společně, přesně podle disciplíny párování rychlosti a stability z
metrik DORA v části 2, abyste získali poctivý společný obraz.

### Získávejte a sledujte systémové akční body z postmortemů, nejen metriky

Skutečnou hodnotou procesu postmortemů jsou konkrétní, systémové akční body, které
vytváří: přidaný chybějící alert, vylepšený runbook, odstraněné kritické místo
selhání. Sledujte tyto akční body až do dokončení se stejnou disciplínou jako
backlog technického dluhu z tématu 4.5, protože postmortem, který přinese vhled,
ale žádné dotažení, promarňuje organizační učení, které proces měl zachytit.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Smíšená, jediná metrika doby reakce na incident | Jednoduchá na vykazování | Skrývá, která konkrétní fáze, detekce, potvrzení, vyřešení, je skutečným problémem |
| Metriky incidentů rozložené na fáze | Diagnostické, ukazují přímo na správnou opravu | Vyžadují pečlivější instrumentaci každého přechodu mezi fázemi |
| Revize incidentů zaměřená na viníka | Působí odpovědně, uspokojuje touhu přidělit odpovědnost | Kazí poctivost budoucího hlášení a málokdy opraví skutečnou systémovou příčinu |
| Praxe postmortemů bez obviňování | Vytváří poctivá data a skutečné systémové opravy | Vyžaduje trvalou kulturní investici a disciplínu vedení k udržení |

Hlavním napětím je **přitažlivost individuální odpovědnosti versus praktická
potřeba poctivého hlášení**. Obvinit po incidentu jednotlivce může být uspokojivé a
může vypadat jako rozhodné vedení, ale spolehlivě to kazí data každého dalšího
incidentu, protože lidé podhodnocují hlášení, odkládají potvrzení nebo
nesprávně klasifikují závažnost, jakmile se bojí osobních důsledků. Napětí
vyřešte ve prospěch praxe bez obviňování záměrně a důsledně a pochopte, že
skutečná odpovědnost pochází z opravy systému, který selhání dovolil, ne z
potrestání jednotlivce, který byl náhodou přítomen, když k němu došlo.

## Otázky k diskusi s vaším týmem

1. **Rozkládáme dobu reakce na incident na fáze detekce, potvrzení a vyřešení,
   nebo sledujeme jen jediné smíšené číslo?** Pokud existuje jen smíšené číslo,
   vyberte nedávný významný incident a zkuste zpětně rekonstruovat rozpad na
   fáze, abyste viděli, co by odhalil.

2. **Věřil by náš tým skutečně, že je náš proces postmortemů bez obviňování, nebo
   strach z následků stále ovlivňuje, jak se incidenty hlásí a diskutují?**
   Zeptejte se přímo a poctivě; deklarovaná politika bez obviňování, která se
   skutečně nežije, nevytváří důvěryhodná data.

3. **Klasifikovaly by dva různé týmy závažnost téhož incidentu stejně?** Vyberte
   skutečný, nejednoznačný incident z minulosti a nechte zástupce různých týmů, ať
   ho nezávisle klasifikují, a pak porovnejte výsledky.

4. **Revidujeme frekvenci incidentů a MTTR společně, nebo jedno dostává víc
   pozornosti než druhé?** Prověřte svou skutečnou praxi vykazování a revizí na
   toto párování, podle téže disciplíny, kterou téma 2.10 doporučuje pro metriky
   stability DORA.

5. **Kolik procent akčních bodů z postmortemů za posledních šest měsíců bylo
   skutečně dokončeno?** Pokud to nyní nesledujete, stojí za to tuto mezeru
   pojmenovat; proces postmortemů s nízkou mírou dokončení akčních bodů vytváří
   vhled bez dotažení.

6. **Způsobil někdy strach z obviňování, že někdo odložil nahlášení nebo
   potvrzení incidentu?** Je to nepříjemná, ale důležitá otázka; poctivé „ano, a
   tady je, co se stalo“ je pro zdraví vašeho procesu incidentů mnohem cennější
   než reflexivní „ne“.

## Pohled podle sektorů

**Startup.** Reakce na incidenty je u malého týmu často z nutnosti neformální a
formální rozklad na fáze může být zprvu zbytečný. Zvyk, který stojí za to přijmout
brzy, jsou normy diskuse bez obviňování od úplně prvního incidentu, protože
kulturní návyky nastavené brzy se udržují mnohem snáz, než se dodatečně
zavádějí, když se vzorec náchylný k obviňování už ujal.

**Malá firma.** Jednoduchý, sdílený záznam incidentů, i neformální, se základní
klasifikací závažnosti a stručnou retrospektivou bez obviňování pro všechno
významné, zachytí většinu hodnoty tohoto tématu bez sofistikovaných nástrojů nebo
vyhrazené platformy pro správu incidentů.

**Velký podnik.** Jednotná klasifikace závažnosti a skutečná, trvalá kultura bez
obviňování se ve velkém měřítku udržují hůř a obě jsou nezbytné pro důvěryhodná,
srovnatelná data o incidentech napříč desítkami týmů. Investujte do
zdokumentovaných kritérií klasifikace, pravidelných auditů a aktivního
modelování reakce bez obviňování vedením, protože kulturní posun k obviňování
má sklon vkrádat se postupně bez záměrného, průběžného protitlaku.

**Státní správa.** Incidenty ovlivňující veřejné služby nebo kritickou
infrastrukturu často čelí vnějšímu zkoumání, pozornosti médií nebo formálnímu
vyšetřování, což vytváří silný tlak k hledání viníka, který může přímo podkopat
vnitřní praxi bez obviňování, pokud se aktivně neřídí. Udržujte jasnou vnitřní
disciplínu bez obviňování pro skutečné systémové učení, oddělenou od jakéhokoli
vnějšího procesu odpovědnosti, který může po vážném incidentu následovat, a
tento rozdíl jasně sdělte zaměstnancům.

## Příklady

**Velký podnik.** Inženýrská kultura platební společnosti léta neformálně brala
incidenty jako něco, co je třeba minimálně uznávat, aby člověk nevypadal
zodpovědný, což vedlo k trvale špatným dobám detekce a potvrzení, které vedení
zprvu přičítalo nedostatečným nástrojům monitorování. Kulturní posun ke skutečně
bezobviňovacím postmortemům, včetně toho, že vedení veřejně a konkrétně chválilo
rychlé, poctivé potvrzení incidentu, a nejen rychlé vyřešení, přinesl měřitelné
zlepšení doby detekce i potvrzení během dvou čtvrtletí a odhalil, že původní
úzké hrdlo bylo kulturní, strach z obviňování, a ne technické, nedostatečné
nástroje, jak se původně předpokládalo.

**Státní správa.** Operační středisko agentury veřejné dopravy historicky
klasifikovalo téměř každý výpadek provozu ve svém vnitřním záznamu incidentů jako
„drobný“, vzorec, který nový ředitel bezpečnosti shledal podezřelým vzhledem k
trvalým, neformálním stížnostem pracovníků v terénu na vážné opakující se
problémy. Šetření odhalilo, že klasifikace „drobný“ se vyhýbala zatěžujícímu
formálnímu procesu hlášení vyžadovanému u vyšších závažností, což vytvářelo
nezamýšlenou pobídku ke klasifikaci směrem dolů. Agentura zjednodušila formální
požadavky na hlášení pro všechny závažnosti a výslovně chránila zaměstnance před
obviňováním za poctivé hlášení závažnosti a následná data o incidentech ukázala
přesnější, a podstatně vyšší, míru skutečně významných výpadků, což konečně dalo
vedení poctivý obraz, vůči němuž mohlo prioritizovat investice do infrastruktury.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností skutečně bezobviňovacích, dobře klasifikovaných metrik incidentů
rozložených na fáze jsou poctivá data, která skutečně řídí systémové zlepšování,
místo uklidňujícího, ale falešného obrazu vytvořeného podhodnocováním hlášení
nebo nesprávnou klasifikací poháněnou strachem. Výše uvedený příklad platební
společnosti to ukazuje konkrétně: kulturní oprava, ne investice do nástrojů,
vyřešila to, co vedení nesprávně diagnostikovalo jako technický problém detekce.

Celkové náklady vlastnictví (TCO) tvoří většinou kulturní a procesní investice:
trvalý závazek vedení k praxi bez obviňování, zdokumentovaná a auditovaná
kritéria klasifikace závažnosti a disciplína sledovat akční body z postmortemů do
dokončení. Tato investice stojí méně než alternativa, program metrik incidentů,
který vytváří sebevědomě chybná data, protože strach zkazil každý jeho vstup.

## Antivzory a úskalí

- **Revize incidentů zaměřená na viníka:** kazí poctivost hlášení, rychlost
  potvrzení a klasifikaci závažnosti u každého dalšího incidentu.
- **Sledovat jen smíšené číslo doby reakce:** skrývá, která konkrétní fáze,
  detekce, potvrzení, vyřešení, je skutečně problémem.
- **Nekonzistentní klasifikace závažnosti napříč týmy:** činí data o incidentech
  v celé organizaci nespolehlivými pro srovnání.
- **Revidovat frekvenci incidentů a MTTR odděleně:** přehlédne společný, poctivý
  obraz, který poskytuje párový signál.
- **Proces postmortemů, který přináší vhled, ale žádné dokončené akční body:**
  promarňuje organizační učení, které proces měl zachytit.
- **Deklarovaná politika bez obviňování, kterou vedení skutečně nežije:**
  vytváří stejné poškození dat strachem jako otevřeně obviňující kultura.

## Model zralosti

- **Úroveň 1, Zahájení:** Reakce na incidenty je neformální, hlášení je
  nekonzistentní a kultura náchylná k obviňování aktivně odrazuje od poctivého
  hlášení.
- **Úroveň 2, Rozvoj:** Určité sledování incidentů existuje, ale klasifikace
  závažnosti je nekonzistentní a praxe bez obviňování je deklarována, ne
  důsledně žita.
- **Úroveň 3, Standardizace:** Metriky incidentů rozložené na fáze s jednotnou,
  zdokumentovanou klasifikací závažnosti se sledují v celé organizaci se skutečně
  bezobviňovací praxí postmortemů.
- **Úroveň 4, Řízení:** Frekvence incidentů a MTTR se revidují společně, akční
  body z postmortemů se sledují do dokončení a klasifikace se pravidelně
  auditují na konzistenci.
- **Úroveň 5, Orchestrace:** Organizace má prokázanou, trvalou historii praxe bez
  obviňování, která vytváří poctivá data a skutečné systémové opravy, a metriky
  incidentů přímo a spolehlivě informují investiční rozhodnutí o spolehlivosti.

## Náměty k diskusi

1. Obstál by náš proces postmortemů v poctivé zkoušce, zda je skutečně bez obviňování?
2. Jaký je rozpad na fáze, detekce, potvrzení, vyřešení, u našeho nejpomalejšího nedávného incidentu?
3. Klasifikovaly by dva týmy závažnost našeho posledního významného incidentu stejně?
4. Kolik procent našich nedávných akčních bodů z postmortemů bylo skutečně dokončeno?
5. Ovlivnil někdy strach z obviňování to, jak se incident v našem týmu hlásil nebo diskutoval?

## Hlavní poznatky

- **Kultura postmortemů bez obviňování je předpokladem** důvěryhodných dat o
  incidentech; strach z obviňování kazí hlášení, rychlost potvrzení i
  klasifikaci.
- Rozložte dobu reakce na fáze **detekce, potvrzení a vyřešení**, z nichž každá
  ukazuje na jinou opravu.
- Klasifikujte závažnost podle **jednotných, zdokumentovaných, auditovaných
  kritérií**, podle disciplíny uniklých vad z tématu 5.1.
- Revidujte **frekvenci incidentů a MTTR společně**, nikdy odděleně, stejná
  disciplína párování jako u metrik stability DORA.
- Sledujte **akční body z postmortemů do dokončení**; metrika je vedlejším
  produktem dobré praxe, ne jejím cílem.

## Odkazy a další četba

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy Beyer,
  Chris Jones, Jennifer Petoff a Niall Richard Murphy, eds. (praxe postmortemů
  bez obviňování a metriky incidentů).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara a Stephen Thorne, eds. (praktické pokyny k reakci na
  incidenty a postmortemům).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (základní
  argumentace pro systémové vyšetřování selhání bez obviňování).
- Allspaw, John, „Blameless PostMortems and a Just Culture“, Etsy Engineering
  Blog (2012): raná, vlivná formulace praxe bez obviňování v softwarovém provozu.
