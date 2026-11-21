# 4.3 Změnovost kódu a analýza hotspotů

## Přehled a motivace

**Změnovost kódu** (code churn) měří, jak často se soubor nebo modul v čase mění,
tedy řádky přidané, upravené a smazané napříč po sobě jdoucími commity. Samotná
změnovost je poměrně slabý signál: některé soubory se mění často, protože se
aktivně a zdravě vyvíjejí, a některé se mění zřídka, protože jsou stabilní a
správné, ne protože by byly zanedbané. Skutečná diagnostická síla přístupu
tohoto tématu pochází z kombinace změnovosti se složitostí (téma 4.1): soubor,
který se často mění a je zároveň velmi složitý, tedy **hotspot**, je
nepřiměřeně pravděpodobným zdrojem vad a brzdou rychlosti týmu a empirický
výzkum to konzistentně potvrzuje napříč mnoha kódovými bázemi a organizacemi.

**Analýza hotspotů**, popularizovaná prací Adama Tornhilla o analytice softwaru,
je zvlášť cenná, protože k nalezení svých cílů nevyžaduje žádný ruční průzkum
ani subjektivní úsudek. Historie [verzovacího systému](https://en.wikipedia.org/wiki/Version_control)
už obsahuje všechno potřebné k automatickému výpočtu změnovosti a, ve spojení s
nástroji statické analýzy, i složitosti pro každý soubor v kódové bázi. Tým nebo
organizace tak mohou s reálnými důkazy, místo anekdot nebo nejhlasitější
stížnosti v retrospektivě, určit, který malý zlomek kódové báze zaslouží
pozornost při refaktoringu jako první.

U velkých týmů řeší analýza hotspotů skutečný problém alokace: kódová báze o
stovkách tisíc řádků obsahuje mnohem víc kódu, než si kterýkoli tým může
dovolit komplexně refaktorovat, a intuice o tom, kde žijí nejhorší problémy,
bývá často chybná, zkreslená tím, kdo si naposledy stěžoval nebo který soubor se
zrovna nelíbí zkušenému inženýrovi. Velké podniky a státní správa, které
spravují velké, dlouhověké kódové báze, se spoléhají na tuto prioritizaci
založenou na datech, aby nasměrovaly skutečně vzácný rozpočet na refaktoring k
tomu kódu, který přinese největší návratnost.

## Klíčové zásady

- **Samotná změnovost je slabý signál; změnovost v kombinaci se složitostí je
  silný.** Skutečný hotspot určuje kombinace, ne jedna z metrik sama.
- **Analýza hotspotů nevyžaduje žádný ruční průzkum.** Historie verzovacího
  systému už obsahuje vše potřebné k jejímu automatickému výpočtu.
- **Hotspot je signál prioritizace, ne automatický verdikt.** K rozhodnutí,
  jakou akci konkrétní hotspot vyžaduje, je dál třeba lidský úsudek.
- **Častá změna není sama o sobě špatná.** Část změnovosti odráží zdravý, aktivní
  vývoj, ne problém kvality.
- **Tato analýza se škáluje přesně tam, kde intuice selhává:** u velkých
  kódových bází příliš velkých na to, aby je kterýkoli jednotlivec přehlédl a
  prioritizoval jen citem.

## Doporučení

### Počítejte změnovost a složitost společně a řaďte podle jejich kombinace

Z historie verzovacího systému vytáhněte frekvenci změn na soubor za smysluplné
okno, typicky šest měsíců až rok, a spárujte ji s mírou složitosti (téma 4.1) u
týchž souborů. Řaďte soubory podle kombinace, běžně součinu změnovosti a
složitosti, místo podle jedné z metrik samotné, protože právě tuto kombinaci
podkladový výzkum konzistentně spojuje se zvýšenou mírou vad a nákladů na
údržbu.

### Prošetřete nejvyšší hotspoty lidským úsudkem, než zasáhnete

Seřazený seznam hotspotů určuje kandidáty na pozornost, ne automatický seznam
akcí. U každého z nejvyšších hotspotů se podívejte lidským okem: je to skutečně
špatně navržený kód, který potřebuje refaktoring, nebo soubor, který
legitimně vyžaduje častou změnu, protože leží ve středu aktivní, vyvíjející se
obchodní logiky, v kterémžto případě může být prioritou spíš lepší testování
nebo jasnější dokumentace než strukturální přepsání. Odpovídá to rozlišení
podstatné a náhodné složitosti z tématu 4.1, uplatněnému zde na kombinovaný
signál změnovosti a složitosti.

### Porovnávejte hotspoty s daty o incidentech a vadách

Kde je to možné, ověřte, zda vaše určené hotspoty korelují se skutečnými
produkčními incidenty (téma 6.2) nebo daty o únicích vad (téma 5.1). Silná
korelace potvrzuje analýzu hotspotů jako skutečně prediktivní pro vaši
konkrétní kódovou bázi a posiluje obchodní odůvodnění jednání podle ní; slabá
nebo žádná korelace naznačuje buď problém s kvalitou dat, nebo že změnovost a
složitost nejsou ve vašem konkrétním kontextu správnou kombinací signálů pro
prioritizaci.

### Sledujte trend hotspotů napříč po sobě jdoucími analýzami, ne jen jeden snímek

Spouštějte analýzu hotspotů periodicky, běžně čtvrtletně, a sledujte, zda se dříve
určené hotspoty zlepšují, zhoršují nebo jsou vyřešeny a zda se objevují nové.
Hotspot, který přetrvává napříč několika cykly analýzy, přestože byl opakovaně
označen, naznačuje, že buď nebylo skutečně vynaloženo úsilí o nápravu, nebo
předchozí pokus o nápravu neřešil skutečnou podkladovou příčinu.

### Používejte data o hotspotech k informování, ne nahrazení, rozhovorů o prioritách v týmu

Prezentujte analýzu hotspotů jako důkaz v diskusi o prioritách, ne jako
automatický mandát, který přebije vlastní kontextový úsudek týmu o tom, na čem
právě teď nejvíc záleží. Tým může mít dobré, legitimní důvody, proč známý
hotspot dočasně odložit, například blížící se plánované přepsání dělá z
přírůstkového refaktoringu zmařené úsilí, a analýza má tento rozhovor
informovat, ne ho nahradit.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Prioritizace podle intuice | Rychlá, nevyžaduje nástroje, využívá kontextovou znalost týmu | Zkreslená čerstvostí, osobními preferencemi a tím, kdo si stěžuje nejhlasitěji |
| Samotná změnovost | Jednoduchá na výpočet | Sama o sobě slabý signál; častá změna není sama o sobě špatná |
| Změnovost v kombinaci se složitostí (analýza hotspotů) | Silná, založená na důkazech, automatická z existujících dat | Vyžaduje kombinaci dvou zdrojů dat a interpretaci výsledků úsudkem |
| Analýza hotspotů porovnaná s daty o incidentech | Ověřená, nejsilnější důkaz pro prioritizaci | Vyžaduje spolehlivé propojení incidentů s kódem, které nemá každá organizace |

Ústředním napětím je **důkaz versus kontext**. Analýza hotspotů poskytuje
objektivní, škálovatelný důkaz, který prioritizace podle intuice nedokáže
dorovnat ve velikosti velké, neznámé nebo dlouhověké kódové báze, ale chybí jí
kontextový úsudek, který tým má o tom, proč daný hotspot právě teď záleží, nebo
nezáleží. Napětí řešte tak, že analýzu hotspotů budete brát jako důkazní
základ rozhovoru o prioritách, v kombinaci s vlastním kontextovým úsudkem týmu o
načasování a kompromisech, nikdy jako jeho náhradu.

## Otázky k diskusi s vaším týmem

1. **Jakých je našich pět nejvyšších hotspotů, seřazených podle kombinace
   změnovosti a složitosti, a odpovídalo by toto pořadí intuici našeho týmu o
   tom, kde žijí naše nejhorší problémy?** Spusťte analýzu a porovnejte
   výsledek s tím, co by váš tým odhadl, než data uviděl; nesrovnalosti bývají
   nejcennějším zjištěním.

2. **Korelují naše určené hotspoty se skutečnými produkčními incidenty nebo daty
   o únicích vad?** Pokud máte data k ověření, udělejte to přímo; pokud ne,
   i tu mezeru stojí za to pojmenovat jako něco, k čemu směřovat.

3. **Je u našeho nejvyššího hotspotu právě teď podkladovým problémem podstatná
   složitost, která legitimně vyžaduje častou změnu, nebo náhodná složitost,
   kterou by refaktoring skutečně mohl opravit?** Projděte soubor společně a
   udělejte tento úsudek výslovně, místo abyste předpokládali jednu či druhou
   odpověď.

4. **Přetrval dříve určený hotspot napříč několika cykly analýzy, přestože byl
   označen?** Pokud ano, upřímně prošetřete proč: náprava nebyla nikdy skutečně
   zkoušena, nebo předchozí pokus neřešil skutečnou příčinu.

5. **Prioritizujeme dnes práci na refaktoringu podle důkazů, nebo podle toho, kdo
   si naposledy nebo nejhlasitěji stěžoval?** Buďte upřímní o skutečném
   současném procesu prioritizace vašeho týmu a o tom, jak se srovnává s tím,
   co by naznačila analýza hotspotů založená na důkazech.

6. **Kolik by nás stálo, v míře vad nebo zpomalení dodávky, nechat náš současný
   nejvyšší hotspot další rok bez řešení?** Tato otázka vynutí konkrétní odhad
   nákladů, který může ukotvit rozhodnutí o prioritě, místo aby hotspot zůstal
   abstraktní, snadno odložitelnou starostí.

## Pohled podle sektorů

**Startup.** Formální analýza hotspotů je u malé, mladé kódové báze, kterou celý
tým stále kolektivně drží v hlavě, obvykle zbytečná. Technika se stává
cennou právě tehdy, když kódová báze přeroste velikost, kdy žádný jednotlivec
nedokáže spolehlivě určit nejhorší oblasti jen z paměti, často někdy v prvním
nebo druhém roce trvalého růstu.

**Malá firma.** Bezplatné nebo levné nástroje dokážou vytáhnout data o změnovosti
přímo z vaší stávající historie verzovacího systému s minimálním nastavením.
Spojte je s jakýmikoli daty o složitosti, která už hlásí váš stávající linter
nebo nástroj statické analýzy, místo investice do specializovaného komerčního
softwaru pro analýzu hotspotů v tomto měřítku.

**Velký podnik.** Analýza hotspotů je místo, kde prioritizace založená na
důkazech vynáší nejvíc, protože intuice skutečně selhává v měřítku kódové báze
zahrnující stovky služeb a tisíce souborů. Investujte do pravidelného spouštění
této analýzy napříč celou kódovou bází a do porovnávání s daty o incidentech,
abyste vybudovali ověřený, obhajitelný argument pro investici do refaktoringu.

**Státní správa.** Dlouhověké systémy, někdy několik desetiletí staré, se pro
analýzu hotspotů přirozeně hodí, protože nashromážděná historie verzovacího
systému poskytuje bohatý, dlouhodobý signál o tom, které části systému se v čase
skutečně ukázaly jako problematické. Tento přístup založený na důkazech je také
přesvědčivým, konkrétním nástrojem k zdůvodnění investice do modernizace
před zainteresovanými stranami, které potřebují k schválení financování víc než
neformální názor inženýra.

## Příklady

**Velký podnik.** Platforma pro zpracování pojistných událostí jedné pojišťovny,
zahrnující přes dva miliony řádků kódu napříč desítkami služeb, nahromadila roky
neformálních stížností na „modul pro validaci nároků“, ale z těchto stížností
nikdy nevzešla žádná formální prioritizace. Analýza hotspotů, která spojila
šest měsíců dat o změnovosti se skóre složitosti, určila jako skutečný nejvyšší
hotspot zcela jiný soubor, sdílený nástroj pro převod měn zahrabaný hluboko v
zřídka diskutované závislosti, který nikdy nepadl v žádné stížnosti na
retrospektivě. Porovnání s daty o incidentech potvrdilo, že tento nástroj byl
zapleten do nepřiměřeného podílu vad ve finančních výpočtech za předchozí
rok, a cílený refaktoring právě tohoto nástroje, místo modulu, který všichni
neformálně obviňovali, přinesl měřitelné snížení souvisejících incidentů v
následujícím čtvrtletí.

**Státní správa.** Desítky let starý licenční systém jedné státní agentury pro
motorová vozidla prošel analýzou hotspotů jako součást obchodního odůvodnění
modernizace. Analýza určila malý shluk souborů, tvořících méně než 3 % celé
kódové báze, odpovědný za nepřiměřený podíl změnovosti i složitosti, a
porovnání s incidentním logem agentury ukázalo, že tentýž shluk tvořil téměř
40 % všech hlášených vad systému za předchozí tři roky. Toto konkrétní zjištění
založené na důkazech, mnohem přesvědčivější než obecné tvrzení, že „systém je
starý a potřebuje modernizaci“, se stalo středobodem úspěšné žádosti o rozpočet
na cílenou, přírůstkovou modernizaci zaměřenou právě na tento shluk, místo
mnohem dražší úplné výměny systému.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností analýzy hotspotů je cílená investice založená na důkazech: oba
příklady výše ukazují případ, kdy formální analýza přesměrovala pozornost při
refaktoringu od místa, na které ji soustředila neformální stížnost, k místu,
kde data skutečně ukázala, že problém žije, a přinesla měřitelně lepší
návratnost, než by přinesla necílená nebo intuicí vedená investice.

Celkové náklady vlastnictví (TCO) jsou nízké, protože data o změnovosti pocházejí
přímo ze stávající historie verzovacího systému a data o složitosti jsou obvykle
už dostupná z nástrojů statické analýzy (téma 4.4). Hlavní investicí je
periodické úsilí o analýzu a čas lidského úsudku na interpretaci výsledků a
rozhodnutí, jakou akci každý určený hotspot vyžaduje.

## Antivzory a úskalí

- **Používání samotné změnovosti bez složitosti:** sám o sobě slabý signál,
  který může označit zdravý, aktivně vyvíjený kód jako falešně pozitivní.
- **Brát seřazení hotspotů jako automatický seznam akcí bez lidského úsudku:**
  míjí rozlišení podstatné a náhodné složitosti, které určuje správnou reakci.
- **Prioritizace refaktoringu podle nejhlasitější stížnosti místo důkazů:** často
  odvádí úsilí od místa, kde data skutečně ukazují, že problém žije.
- **Nikdy neporovnávat hotspoty s daty o incidentech nebo vadách:** míjí ověřovací
  krok, který posiluje argument pro jednání podle analýzy.
- **Spuštění analýzy jednou a nikdy znovu:** míjí, zda úsilí o nápravu v čase
  skutečně funguje.
- **Ignorování trvale označeného hotspotu bez zkoumání, proč náprava neuvázla:**
  maří diagnostickou hodnotu opakované analýzy.

## Model zralosti

- **Úroveň 1, Zahájení:** Priority refaktoringu se stanovují podle intuice nebo
  hlasitosti stížností, rozhodnutí neinformují žádná data o změnovosti ani
  složitosti.
- **Úroveň 2, Rozvoj:** Některé týmy neformálně kontrolují data o změnovosti nebo
  složitosti, ale chybí důsledná praxe analýzy hotspotů v celé organizaci.
- **Úroveň 3, Standardizace:** Analýza hotspotů kombinující změnovost a složitost
  běží pravidelně a důsledně informuje prioritizaci refaktoringu v celé
  organizaci.
- **Úroveň 4, Řízení:** Hotspoty se porovnávají s daty o incidentech a vadách,
  aby se analýza ověřila, a trend napříč po sobě jdoucími cykly se aktivně
  sleduje.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná
  zlepšení míry vad nebo dodávky z investic do refaktoringu informovaných
  hotspoty a analýza je rutinním, důvěryhodným vstupem do rozhodnutí o
  inženýrských investicích.

## Náměty k diskusi

1. Jak by vypadal náš seznam nejvyšších hotspotů, kdybychom tuto analýzu spustili dnes?
2. Odpovídal by tento seznam současnému neformálnímu pocitu našeho týmu o našich nejhorších problémových oblastech, nebo by mu odporoval?
3. Máme data k porovnání hotspotů se skutečnými incidenty?
4. Přetrvala známá problémová oblast navzdory předchozím pokusům o opravu a proč?
5. Kolik by nás stálo nechat náš současný nejvyšší hotspot další rok bez řešení?

## Hlavní poznatky

- **Změnovost v kombinaci se složitostí** určuje skutečné hotspoty mnohem
  spolehlivěji než kterákoli z metrik sama.
- Analýza hotspotů nevyžaduje **žádný ruční průzkum**; lze ji automaticky
  spočítat z existujících dat verzovacího systému a statické analýzy.
- Berte seřazení hotspotů jako **důkaz pro prioritizaci**, ne automatický
  verdikt; lidský úsudek je dál potřeba.
- **Porovnávejte hotspoty s daty o incidentech a vadách**, abyste analýzu
  ověřili a posílili argument pro jednání podle ní.
- Sledujte hotspoty **napříč po sobě jdoucími cykly analýzy**, abyste potvrdili,
  že náprava skutečně funguje, ne jen jednou jako snímek.

## Odkazy a další četba

- *Your Code as a Crime Scene*, Adam Tornhill (základní text o analýze
  hotspotů kombinující změnovost a složitost z dat verzovacího systému).
- *Software Design X-Rays*, Adam Tornhill (další techniky behaviorální analýzy
  kódu z historie verzovacího systému).
- Nagappan, Nachiappan, a Thomas Ball, „Use of Relative Code Churn
  Measures to Predict System Defect Density“, *ICSE* (2005): empirický
  výzkum vztahu mezi změnovostí a hustotou vad.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (techniky řešení náhodné složitosti, jakmile je určena).
