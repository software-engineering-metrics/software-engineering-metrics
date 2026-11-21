# 1.6 Statistická gramotnost pro inženýrské metriky

## Přehled a motivace

K dobrému vedení programu metrik nepotřebujete titul ze statistiky, ale musíte
se vyhnout malému počtu konkrétních, častých chyb, které jinak dobře řízené a
dobře instrumentované metriky činí aktivně zavádějícími. Tým může udělat
všechno správně, pojmenovat jasné rozhodnutí, vyhnout se Goodhartovu zákonu,
vážit k výsledkům, řídit vlastnictví, spolehlivě instrumentovat, a přesto
vyvodit špatný závěr, protože četl průměr tam, kde potřeboval percentil,
zaměnil šum za trend nebo naletěl na shodu okolností převlečenou za příčinu.
Toto téma je minimální statistický úsudek, o němž tato kniha předpokládá, že
ho čtenář každého dalšího tématu už má.

Základním problémem je, že inženýrské metriky jsou podle měřítek formální
statistiky obvykle zašuměné, zešikmené a s malým vzorkem. Týdenní počet nasazení
jednoho týmu není hladká zvonovitá křivka; je to hrstka datových bodů s
občasnými velkými odlehlými hodnotami (velké vydání, vlna vrácení změn
vyvolaná incidentem). Aplikace naivních intuic, vytvořených pro velké, dobře
se chovající soubory dat, na tento druh dat pravidelně vyrábí sebejisté a
chybné závěry. Naučit se poznat, kdy je číslo příliš zašuměné na to, abychom mu
věřili, kdy nám průměr lže a kdy dvě věci, které se hýbou společně, neříkají nic o
příčinné souvislosti, není volitelná přísnost; je to to, co odděluje program
metrik, který organizaci učí něco pravdivého, od programu, který ji učí něco,
co zní věrohodně a je nepravdivé.

V měřítku velkého podniku a státní správy se statistické chyby sčítají, protože
zavádějící závěr, jakmile ho vedení přijme, je uplatňován v mnoha týmech dřív,
než někoho napadne znovu prověřit podkladovou analýzu. Statisticky naivní
srovnání dvou divizí nebo stavu před a po velké reorganizaci může na léta
utvářet rozhodnutí o zdrojích na základě ničeho víc než šumu nebo zavádějící
proměnné, kterou nikdo nezohlednil. Toto téma existuje, aby tomuto selhání
činilo méně pravděpodobným.

## Klíčové zásady

- **Medián nebo percentil obvykle řekne víc než průměr.** Inženýrská data jsou
  běžně zešikmena odlehlými hodnotami, které průměry pohlcují a percentily ne.
- **Malé vzorky dávají zašuměná čísla.** Procento spočítané z hrstky událostí
  divoce kolísá z důvodů, které nemají nic společného se skutečnou změnou.
- **Regrese k průměru lidi neustále klame.** Po neobvykle dobrém či špatném
  údaji obvykle následuje normálnější, s intervencí nebo bez ní.
- **Korelace není příčinná souvislost a zavádějící proměnné jsou všude.** Dvě
  metriky, které se hýbou společně, mohou sdílet skrytou třetí příčinu, místo
  aby jedna řídila druhou.
- **[Regulační diagram](https://en.wikipedia.org/wiki/Control_chart) poráží
  jediné srovnání před a po.** Vidět normální rozsah kolísání je to, co vám
  dovolí rozlišit skutečný posun od šumu.

## Doporučení

### U zešikmených dat používejte jako výchozí mediány a percentily

Inženýrské časové metriky, lead time, doba obnovy po incidentu, latence odezvy,
jsou téměř vždy zešikmené doprava: většina hodnot se shlukuje nízko, s dlouhým
ocasem občasných velkých odlehlých hodnot. Průměr stažený tímto ocasem může
namalovat obraz, jemuž žádný typický případ neodpovídá. Uvádějte **medián**
(prostřední hodnotu, nad níž je polovina pozorování a pod níž polovina) spolu
s **90. nebo 95. percentilem** (hodnotou, pod kterou leží 90 % nebo 95 %
pozorování), které společně ukazují jak typický případ, tak nejhorší ocas,
který tým skutečně zažívá. Téma KPI sesterské knihy `software-engineering-guide`
a každé téma o dodacích metrikách v části 2 této knihy tento návyk předpokládají
v celém rozsahu.

### Poznejte, kdy je vzorek příliš malý na důvěru

Míra selhání změn spočítaná ze tří nasazení v pomalém týdnu není smysluplný
signál; jediné selhání posune procento z 0 % na 33 % přes noc z důvodů, které
nemusí mít nic společného se skutečným rizikem. Než zareagujete na metriku
založenou na procentu, zkontrolujte podkladový počet. Jako praktické pravidlo
berte míru spočítanou z méně než zhruba dvaceti až třiceti podkladových událostí
jako zašuměnou a vyžadující delší okno pozorování, než vyvodíte závěr, a řekněte
to výslovně na dashboardu, místo abyste prezentovali kolísavé procento z
malého vzorku se stejnou sebejistotou jako stabilní procento z velkého.

### Před přičtením zásluh intervenci pozor na regresi k průměru

Pokud po nejhorším týdnu týmu z hlediska incidentů následuje pozornost vedení a
poté zlepšení, je lákavé připsat zásluhy intervenci. Často by se část toho
zlepšení stala tak či onak, protože po neobvykle extrémním údaji obvykle
následuje typičtější čistě jako statistický artefakt, jev zvaný **regrese k
průměru**. Bráníte se tomu srovnáním s delší historickou výchozí hodnotou místo
jediného extrémního datového bodu, který pozornost vyvolal, a přiměřenou
skromností v tom, kolik z jakéhokoli pozorovaného zlepšení připsat konkrétní
akci.

### Než tvrdíte, že metrika způsobila výsledek, hledejte zavádějící proměnné

Když se dvě metriky hýbou společně, frekvence nasazení roste spolu se
spokojeností zákazníků, odolejte reflexu tvrdit, že jedna způsobila druhou,
dokud nezvážíte **zavádějící proměnnou** (confounder): skrytý třetí faktor, který
pohání obě. Spuštění nové funkce může nezávisle zvýšit jak frekvenci nasazení
(více následných oprav), tak spokojenost (samotná funkce), aniž by mezi oběma
metrikami existovala jakákoli příčinná vazba. Než korelaci prezentujete jako
důkaz příčinné souvislosti, aktivně se ptejte, co dalšího se změnilo ve
stejnou dobu a mohlo vysvětlit oba pohyby.

### Používejte regulační diagram, ne jediný snímek před a po

**Regulační diagram** vynáší metriku v čase s výslovně zobrazeným normálním
rozsahem kolísání, typicky jako pásma kolem centrálního průměru. To vám umožní
rozlišit skutečný posun, datový bod nebo trvalou sérii mimo normální rozsah, od
běžného šumu, který jediné srovnání před a po rozlišit nedokáže. Než prohlásíte
„číslo se po změně zlepšilo“, vyneste dost historických dat, abyste viděli, jak
vypadá normální kolísání, a ověřte, zda údaj po změně skutečně leží mimo něj.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Průměry | Jednoduché, známé, snadno se počítají | Na zešikmených inženýrských datech zkreslené odlehlými hodnotami |
| Mediány a percentily | Odolné vůči odlehlým hodnotám, ukazují typický případ i ocas | Pro netechnické publikum o něco méně známé |
| Jediné srovnání před a po | Rychlé, intuitivní, snadno se prezentuje | Zranitelné regresí k průměru a šumem |
| Regulační diagramy a delší výchozí hodnoty | Spolehlivě rozlišují skutečné posuny od šumu | Vyžadují víc historických dat a víc vysvětlování netechnickému publiku |

Hlavním napětím je **jednoduchost versus přísnost**. Průměry a jediná srovnání
před a po se snáze počítají a vysvětlují, a proto dominují běžnému vykazování,
ale jsou to zároveň dvě techniky, které nejspíš vyrobí sebejistý a chybný závěr
na zašuměných a zešikmených datech, jaká metriky této knihy generují. Řešte to
tak, že u každého rozhodnutí se skutečnými důsledky používáte jako výchozí
přísnější techniky, mediány, percentily a regulační diagramy, a jednodušší
techniky vyhradíte pro nízkostakové, průzkumné pohledy, kde špatné přečtení
stojí málo.

## Otázky k diskusi s vaším týmem

1. **Které z našich dlaždic na dashboardu uvádějí průměr tam, kde by medián
   nebo percentil řekl pravdivější příběh?** Časové inženýrské metriky jsou
   téměř vždy zešikmené a průměr na zešikmených datech může vypadat dobře,
   zatímco typický případ, nebo nejhorší ocas, vypráví zcela jiný příběh.
   Zkontrolujte své časové dlaždice právě na tuto záměnu.

2. **Jak malý je podkladový vzorek za našimi metrikami založenými na procentech
   a zacházíme s metrikou z deseti událostí se stejnou důvěrou jako s metrikou
   z tisíce?** Kolísavá míra z malého vzorku prezentovaná bez podkladového počtu
   zve k přehnané reakci na šum. Zkontrolujte u míry selhání změn a podobných
   procentních dlaždic tuto mezeru.

3. **Připsali jsme někdy intervenci zásluhy za zlepšení, které by regrese k
   průměru vytvořila i tak?** Je to jedna z nejsnazších statistických chyb a
   jedna z nejobtížněji zpětně zjistitelných, protože intervence a zlepšení se
   skutečně staly v tomto pořadí. Ohlédněte se za nedávným příběhem „opravili
   jsme to“ a poctivě se ptejte, zda srovnání s výchozí hodnotou bylo dost
   dlouhé na vyloučení tohoto vysvětlení.

4. **Kde jsme předpokládali, že jedna metrika způsobila jinou, aniž bychom
   zkontrolovali zavádějící proměnnou?** Dvě věci, které se hýbou společně, jsou
   běžné; že jedna způsobuje druhou, je silnější tvrzení, které potřebuje víc
   důkazů. Vyberte korelaci, v kterou váš tým dnes věří, a zkuste pojmenovat
   věrohodnou zavádějící proměnnou, která by ji vysvětlila bez jakékoli příčinné
   vazby.

5. **Máme dost historických dat, abychom věděli, jak vypadá normální kolísání u
   našich nejdůležitějších metrik, nebo srovnáváme jednotlivé body?** Bez
   představy o normálním rozsahu vypadá každý jednotlivý údaj poplašně nebo
   uklidňujícně podle nálady, nikoli podle důkazů. Diskutujte, zda vaše
   nejsledovanější metrika byla někdy vynesena jako regulační diagram místo
   jediného čísla.

6. **Jak dnes sdělujeme nejistotu netechnickým zainteresovaným stranám a
   naznačuje náš dashboard větší přesnost, než data skutečně podporují?** Graf
   bez náznaku normálního kolísání nebo velikosti vzorku může vést vedení k
   přehnané reakci na šum, nebo stejně často k odmítnutí skutečného signálu
   jako šumu. Diskutujte, jak by vaše vykazování mohlo toto sdělovat poctivě,
   aniž by se stalo nečitelným.

## Pohled podle sektorů

**Startup.** Malé týmy generují malé vzorky téměř všude, což znamená, že
opatrnost u malých vzorků z tohoto tématu platí neustále. Odolejte vyvozování
silných závěrů z jediného špatného týdne nebo jediného skvělého; s hrstkou
datových bodů je poctivou odpovědí na „je to trend“ často „zatím nevíme“.

**Malá firma.** Vestavěné dashboardy hotových nástrojů často ve výchozím stavu
používají průměry a srovnání jednotlivých období, protože se nejjednodušeji
počítají a zobrazují. Kde to nástroj dovoluje, přepněte u časových metrik na
mediány a buďte skeptičtí k jakémukoli titulku „tento měsíc o 40 % víc“
spočítanému z malého podkladového počtu.

**Velký podnik.** Statistické chyby v tomto měřítku se zapékají do rozhodnutí o
zdrojích a reorganizacích, které ovlivňují stovky lidí. Investujte do analytiků
nebo zabudovaných datových odborníků, kteří dokážou postavit řádné regulační
diagramy a ověřit zavádějící proměnné dřív, než se srovnání mezi obchodními
jednotkami nebo stavu před a po velké změně prezentuje vedení jako
ustálený fakt.

**Státní správa.** Statisticky naivní srovnání krmící veřejnou zprávu nebo
rozpočtové zdůvodnění může mít nepřiměřené reálné důsledky a zve právě k
takovému zkoumání, které veřejně odhalí nedbalou analýzu. Přísnější techniky,
regulační diagramy, zdokumentované velikosti vzorků, kontroly zavádějících
proměnných, uplatňujte jako stálou praxi pro vše, co se zveřejňuje navenek,
nejen jako příležitostné nejlepší úsilí.

## Příklady

**Velký podnik.** Vedení softwarové firmy oslavilo 25% zlepšení míry selhání
změn měsíc po zavedení nové politiky revize kódu a přičetlo zásluhy přímo
politice. Bližší pohled zjistil, že měsíc „před“ byl neobvykle špatný, způsobený
jedinou nezdařenou migrací jednoho týmu, a že podkladová velikost vzorku v obou
měsících byla pod třicet nasazení v celé firmě. Regulační diagram z dvanácti
měsíců historie ukázal, že nový údaj leží hluboko v normálním kolísání, nikoli
že jde o skutečný skokový posun, a skutečný účinek politiky, ač reálný, byl
mnohem menší, než naznačovalo titulkové číslo.

**Státní správa.** Dopravní podnik veřejné dopravy vykázal velké meziroční
zlepšení včasnosti pro nově digitalizovaný systém rozvrhů a srovnal jediné
čtvrtletí „před“ s jediným čtvrtletím „po“. Nezávislá revize zjistila, že
čtvrtletí „před“ se shodovalo s nesouvisející stavební uzavírkou, která snížila
výkon v celé síti, a delší výchozí hodnota ukázala, že se včasnost zotavovala už
před spuštěním nového systému. Revidovaná zpráva agentury použila plný
víceletý regulační diagram a přičetla novému systému skromnější, ale
obhajitelnější zlepšení.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností statistické gramotnosti je předejité zbloudění: organizace, která
správně připíše zlepšení nebo správně pozná šum jako šum, vynaloží další
investici tam, kde skutečně pomůže, místo aby honila přízračný efekt. Výše
uvedený příklad velkého podniku je typický: firma, která věřila, že 25% zlepšení
způsobila samotná politika revize, může podinvestovat do jiných skutečných
přispěvatelů nebo nadsadit hodnotu politiky způsobem, který zavádí budoucí
rozhodnutí.

Celkové náklady vlastnictví (TCO) statistické přísnosti jsou většinou změnou
návyku, nikoli novými nástroji: zvolit medián místo průměru, zkontrolovat
velikost vzorku před reakcí, vynést delší výchozí hodnotu před vyhlášením
vítězství. Tyto návyky stojí málo na přijetí a předcházejí mnohem větší a hůře
odhalitelné ceně rozhodnutí učiněných na sebejistých, chybných závěrech.

## Antivzory a úskalí

- **Uvádět průměr u zešikmených časových dat:** skrývá typický případ i ocas za
  jediným zavádějícím číslem.
- **Reagovat na procento bez viditelné velikosti vzorku:** bere šum z hrstky
  událostí, jako by to byl stabilní, smysluplný trend.
- **Přičítat zásluhy intervenci bez vyloučení regrese k průměru:** častá, snadno
  udělaná a těžko postřehnutelná chyba.
- **Tvrdit příčinnou souvislost z korelace bez zvážení zavádějících proměnných:**
  nadsazuje, co data skutečně podporují.
- **Srovnávat jediný snímek před a po místo vynesení delší výchozí hodnoty:**
  nedokáže rozlišit skutečný posun od běžného kolísání.
- **Naznačovat větší přesnost, než data podporují, ve vykazování pro vedení:**
  zve k přehnané reakci na šum nebo k odmítnutí skutečného signálu.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky se vykazují jako surové průměry a jednotlivé
  snímky před a po bez pozornosti k velikosti vzorku, zešikmení či kolísání
  výchozí hodnoty.
- **Úroveň 2, Rozvoj:** Někteří analytici používají mediány nebo percentily
  neformálně, ale chybí konzistentní organizační praxe a zavádějící proměnné se
  málokdy kontrolují.
- **Úroveň 3, Standardizace:** Mediány a percentily jsou výchozí pro zešikmené
  časové metriky; velikosti vzorků se zobrazují vedle procentních metrik v celé
  organizaci.
- **Úroveň 4, Řízení:** Regulační diagramy s historickými výchozími hodnotami
  jsou standardní praxí pro jakékoli tvrzení o skutečném posunu; zavádějící
  proměnné se aktivně zvažují, než se ve vykazování učiní příčinné tvrzení.
- **Úroveň 5, Orchestrace:** Statistická přísnost je zabudována do samotných
  nástrojů, dashboardy ve výchozím stavu vykreslují percentily a regulační
  pásma a organizace dokáže prokázat, že konkrétní minulé rozhodnutí bylo
  opraveno, protože statisticky naivní čtení bylo zachyceno dřív, než
  ovlivnilo strategii.

## Náměty k diskusi

1. Které z titulků na našem dashboardu by vypadaly jinak, kdybychom průměr
   nahradili mediánem?
2. Změnili jsme někdy rozhodnutí, protože se procento ukázalo být založeno na
   mnohem menším vzorku, než jsme předpokládali?
3. Který nedávný příběh „zlepšili jsme tuto metriku“ bychom měli znovu
   prověřit na regresi k průměru?
4. Kde by dvě z našich metrik mohly korelovat přes skrytou třetí příčinu, a ne
   tak, že by jedna řídila druhou?
5. Ukazují naše nejdůležitější grafy normální rozsah kolísání, nebo jen jedinou
   čáru trendu?

## Hlavní poznatky

- Preferujte **mediány a percentily** před průměry u zešikmených časových
  inženýrských metrik.
- Berte **procento z malého vzorku** jako zašuměné a řekněte to výslovně, místo
  abyste na ně reagovali jako na stabilní trend.
- Hlídejte **regresi k průměru**, než připíšete intervenci zásluhy za zlepšení,
  které následovalo po neobvykle špatném údaji.
- **Korelace není příčinná souvislost**; před příčinným tvrzením aktivně
  hledejte zavádějící proměnné.
- Používejte **regulační diagram se skutečnou historickou výchozí hodnotou**,
  ne jediný snímek před a po, abyste rozlišili skutečný posun od běžného šumu.

## Odkazy a další četba

- *The Signal and the Noise*, Nate Silver (rozlišování skutečného signálu od
  šumu v nedokonalých datech).
- *How to Measure Anything*, Douglas W. Hubbard (statistické uvažování pro
  organizační měření).
- *Understanding Variation: The Key to Managing Chaos*, Donald J. Wheeler
  (regulační diagramy a rozlišení mezi variabilitou z běžných a ze zvláštních
  příčin).
- *Thinking, Fast and Slow*, Daniel Kahneman (kognitivní zkreslení včetně
  regrese k průměru a iluze příčinného vyprávění).
- *The Visual Display of Quantitative Information*, Edward R. Tufte (poctivé a
  bezúhonné zobrazování kvantitativních dat).
