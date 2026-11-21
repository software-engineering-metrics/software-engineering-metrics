# 2.2 Položky toku: funkce, vady, rizika a dluh

## Přehled a motivace

**Položka toku** je jednotkou práce ve Flow Frameworku a každá položka toku patří
právě do jednoho ze čtyř typů: **funkce**, nová obchodní hodnota nebo schopnost
dodaná zákazníkovi; **vady**, opravy kvality pro chyby nalezené uživateli nebo
testováním; **rizika**, práce na bezpečnosti, souladu s předpisy, soukromí a
správě, která chrání byznys; a **dluh**, [technický dluh](https://en.wikipedia.org/wiki/Technical_debt),
architektonická vylepšení a práce na infrastruktuře, které umožňují budoucí
rychlost. Téma 2.1 představilo rámec, do něhož tyto čtyři kategorie patří; toto
téma jde do hloubky u samotné taxonomie, protože kategorie přinášejí hodnotu
jen tehdy, pokud tým svou práci do nich zařazuje poctivě a konzistentně.

Určující vlastností položek toku je, že přidělování mezi čtyři typy je **hra s
nulovým součtem**: v daném období existuje pevné množství inženýrské kapacity
a každá hodina strávená na funkci je hodina, která nebyla strávena na dluhu,
rizicích nebo vadách. Není to nový fakt o dodávání softwaru, každý vedoucí
inženýrství už ví, že kapacita je konečná, ale většina organizací nemá žádný
konzistentní a poctivý způsob, jak skutečné rozdělení vidět. Velocity sprintu
počítá story pointy bez ohledu na typ; vyčerpaný backlog vypadá stejně, ať už
za ním stála nová pokladní cesta, nebo tři měsíce nevděčné nápravy bezpečnosti.
Položky toku existují právě proto, aby toto neviditelné rozdělení zviditelnily.

U velkých týmů tato viditelnost mění povahu rozhovoru o zdrojích. Místo aby
vedoucí inženýrství vedl nekvantifikovanou argumentaci, že „potřebujeme víc času
na technický dluh“, klasifikace položek toku vytvoří skutečné číslo, dluh
spotřeboval 30 % kapacity minulého čtvrtletí, o kterém lze diskutovat, které lze
obhajovat a záměrně upravovat s obchodními zainteresovanými stranami. Velké
podniky provozující mnoho souběžných produktových řad i státní úřady vyvažující
novou funkcionalitu pro občany proti riziku zděděných systémů závisejí na tomto
druhu obhajitelného, kvantifikovaného kompromisu mnohem víc než na soukromém,
neformálním pocitu, že „trávíme příliš mnoho času údržbou“.

## Klíčové zásady

- **Každá položka toku patří právě do jednoho typu.** Vynucení jediného
  zařazení, místo povolení smíšeného nebo nejednoznačného, je to, co činí
  taxonomii použitelnou pro agregované vykazování.
- **Přidělování je hra s nulovým součtem, ne aditivní.** Víc kapacity pro funkce
  je nutně méně kapacity pro vady, rizika a dluh ve stejném období.
- **Neexistuje univerzálně zdravé rozložení.** Mladý produkt ve fázi růstu by
  měl oprávněně převažovat k funkcím; zralý systém nesoucí skutečné technické
  riziko by měl oprávněně převažovat k práci na dluhu a rizicích.
- **Práce na dluhu a rizicích je bez této disciplíny chronicky podhlášena.**
  Děje se tiše, pohlcena v obecných „inženýrských úkolech“, dokud ji klasifikace
  položek toku nevynutí na světlo.
- **Kvalita klasifikace určuje veškerou hodnotu taxonomie.** Taxonomie
  uplatňovaná nekonzistentně nebo zmanipulovaná zpětně vyrábí čísla, která
  aktivně klamou místo informování.

## Doporučení

### Klasifikujte každou položku při příjmu podle písemné definice každého typu

Dohodněte se na stručné písemné definici toho, co se ve vašem konkrétním
kontextu počítá jako funkce, vada, riziko a dluh, a požadujte, aby byl každý nový
kus práce zařazen podle této definice ve chvíli, kdy vstoupí do hodnotového
proudu, ne po dokončení. Předem dohodnutá definice odolává pokušení
klasifikovat zpětně podle toho, jak práce nakonec vypadala, což je přesně to
riziko manipulace, které toto téma pojmenovává přímo níže.

### Vykazujte rozložení toku jako trend, ne jediný snímek

Rozložení jediného období vám říká méně než trend napříč několika obdobími.
Stálý posun k jednomu typu položek, funkce stoupají, zatímco dluh čtvrtletí po
čtvrtletí tiše klesá, je mnohem silnějším signálem než číslo kteréhokoli
jednotlivého období a obvykle je to vzorec, který stojí za to otevřít se
zainteresovanými stranami dřív, než se stane krizí, ne poté.

### Stanovte záměrné cílové rozložení s obchodními zainteresovanými stranami, ne jen s inženýrstvím

Rozhodněte společně s produktovým a obchodním vedením, jak vypadá zdravé
rozložení pro současnou fázi vašeho konkrétního hodnotového proudu, a
pravidelně se k tomuto cíli vracejte, místo abyste ho nechali driftovat ze
zvyku. Mladý produkt ve fázi růstu a zralý systém ve fázi stability mají
oprávněně odlišné zdravé cíle a samotný cíl by měl být vyjednaným obchodním
rozhodnutím, nikoli něčím, co inženýrství tiše rozhodne samo.

### Křížově ověřujte klasifikaci položek toku nezávislými důkazy

Pravidelně porovnávejte své rozložení toku s metrikami, které nezávisejí na
vlastním zařazení: míra uniklých vad (téma 5.1), měření technického dluhu
(téma 4.5) a metriky správy zranitelností (téma 6.4). Pokud vady nebo zranitelnosti
rostou, zatímco podíly položek toku „vady“ a „rizika“ zůstávají stejné nebo
klesají, je tento nesoulad nejjasnějším dostupným signálem, že klasifikace
sklouzla od reality.

### Hlídejte konkrétně vzorec továrny na funkce

Když rozložení toku ukazuje, že funkce konzistentně pohlcují téměř veškerou
kapacitu, čtvrtletí po čtvrtletí, a práce na dluhu a rizicích nikdy nepřekročí
symbolický podíl, tento vzorec (někdy nazývaný „továrna na funkce“, feature
factory) obvykle znamená, že dluh a rizika jsou hladovějící kapacitou, nikoli že
systém skutečně žádnou údržbu nepotřebuje. Tento vzorec je z krátkodobého
hlediska pohodlný a později drahý, a nakonec se projeví jako krize kvality nebo
bezpečnosti, která přijde bez varování v grafu rozložení toku, protože
podkladové hromadění nebylo nikdy vidět.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádná formální klasifikace (obecný backlog) | Žádná procesní režie | Práce na dluhu, rizicích a vadách zůstává neviditelná; těžko se obhajují rozhodnutí o zdrojích |
| Čtyřtypová klasifikace položek toku | Činí přidělování kapacity viditelným a vyjednatelným se zainteresovanými stranami | Vyžaduje disciplínu při příjmu a písemnou, dohodnutou definici každého typu |
| Jemnější klasifikace (mnoho podtypů) | Více diagnostických detailů | Víc úsilí s klasifikací; víc čísel k vysvětlování zainteresovaným stranám |
| Zpětná klasifikace | Snáze se uplatňuje, žádná předběžná změna procesu | Velmi vystavená manipulaci; klasifikace sklouzává k tomu, co vypadá nejlépe |

Hlavním napětím je **disciplína klasifikace versus procesní režie**. Čtyřtypová
taxonomie je záměrně hrubá, natolik hrubá, že zařazení položky zabere vteřiny,
ne debatu, ale tato hrubost platí jen tehdy, je-li skutečně udržována
disciplína klasifikace při příjmu podle písemné definice. Řešte to tak, že
taxonomii udržíte přesně takto jednoduchou, čtyři typy, ne víc, a veškerou
dodatečnou přísnost investujete do kroku auditu (křížové ověření nezávislými
důkazy), nikoli do propracovanějšího schématu klasifikace, které pod skutečnou
zátěží chátrá.

## Otázky k diskusi s vaším týmem

1. **Kdybychom klasifikovali vše, co náš tým dodal minulé čtvrtletí, jak by
   vypadalo skutečné rozdělení mezi funkce, vady, rizika a dluh a překvapilo
   by naše zainteresované strany?** Většina týmů toto cvičení nikdy poctivě
   neprovedla. Zkuste to se skutečnými daty, dřív než předpokládáte, že už
   odpověď znáte.

2. **Máme písemnou, dohodnutou definici toho, co se v našem konkrétním
   kontextu počítá jako funkce versus dluh versus riziko, nebo klasifikace
   závisí na tom, kdo zrovna tiket označuje?** Neformální, nekonzistentní
   definice vyrábí čísla, která vypadají přesně, ale ve skutečnosti nejsou
   srovnatelná období po období.

3. **Posunulo se naše rozložení toku někdy stále k jednomu typu položek, aniž by
   o tom někdo záměrně rozhodl?** Pomalý posun lze snadno přehlédnout období
   po období, ale je zřejmý, jakmile se vynese jako trend. Vytáhněte data z
   několika období, pokud je máte, a poctivě hledejte tento vzorec.

4. **Jak by vypadalo zdravé rozložení toku pro současnou fázi našeho produktu a
   skutečně jsme se na tomto cíli dohodli s obchodními zainteresovanými
   stranami?** Většina organizací tento cíl nikdy neučinila výslovným, což
   znamená, že neexistuje sdílený základ pro všimnutí si, kdy se skutečné
   rozložení od něj vzdaluje.

5. **Odpovídá naše rozložení toku nezávislým důkazům, jako je míra uniklých vad
   nebo počet otevřených zranitelností, nebo existuje nesoulad hodný
   prošetření?** Nesoulad zde je nejjasnějším dostupným znamením, že
   klasifikace sklouzla od toho, čím práce skutečně je.

6. **Mohl by někdo v našem týmu pod tlakem dodávky tiše přeznačit položku dluhu
   nebo rizika jako funkci a všimli bychom si toho dnes?** Je to ústřední
   riziko manipulace tohoto tématu vyslovené přímo. Diskutujte, zda by váš
   současný proces toto skutečně zachytil, nejen zda by to někdo záměrně udělal.

## Pohled podle sektorů

**Startup.** Formální klasifikace často působí jako režie, když celý tým už ví,
na čem kdo pracuje. Užitečným minimem v tomto měřítku je jednoduše vyslovovat
čtyři kategorie nahlas při plánování, aby práce na dluhu a rizicích nebyla tiše
upozaďována pokaždé, když termín funkce vyvolá tlak, což je vzorec, který se
špatně sčítá, jakmile rostou kódová základna i tým.

**Malá firma.** Jediné vlastní pole nebo štítek ve stávajícím sledovacím
nástroji stačí k zachycení typu položky toku bez jakékoli investice do
specializovaných nástrojů. Disciplína konzistentní klasifikace při příjmu záleží
mnohem víc než jakákoli sofistikovanost nástrojů.

**Velký podnik.** Klasifikace položek toku je místem, kde tento rámec v měřítku
vydělá svou hodnotu, protože velká organizace provozující mnoho souběžných
hodnotových proudů nemá žádný jiný spolehlivý, agregovaný způsob, jak vidět,
jak je kapacita skutečně rozdělena mezi funkce, vady, rizika a dluh. Investujte do
klasifikace integrované do nástrojů a pravidelných křížových kontrol vůči
nezávislým důkazům; ruční, ad hoc klasifikace skutečné organizační měřítko
nepřežije.

**Státní správa.** Rozložení toku dává vedoucímu technologií ve veřejném sektoru
obhajitelnou, kvantifikovanou odpověď na otázku, proč se nedodává víc nových
funkcí pro občany, když poctivou odpovědí je, že břemeno rizik a dluhu
zděděného systému spotřebovává skutečný, oprávněný podíl kapacity. Učinit tento
kompromis výslovným a vyjednaným místo tichého pohlcení obvykle buduje u
kontrolních orgánů víc důvěry než nekvantifikovaná výzva k „technické nutnosti“.

## Příklady

**Velký podnik.** Tým e-commerce platformy velké maloobchodní firmy věřil na
základě velocity, že dodává stabilní výstup funkcí. První poctivé cvičení
klasifikace položek toku zjistilo, že „funkce“ tvořily jen 40 % dokončené práce,
zatímco dluh, z velké části spojený se stárnoucím pokladním systémem, spotřeboval
téměř třetinu kapacity, aniž by byl v dřívějších zprávách kdy takto pojmenován.
Prezentace tohoto rozdělení produktovému vedení spolu s rostoucí mírou uniklých
vad, která břemeno dluhu potvrzovala, zajistila vyhrazený modernizační rozpočet,
o který tým dva roky neúspěšně žádal jen s kvalitativními argumenty.

**Státní správa.** Tým digitálního licencování státního úřadu pro motorová vozidla
poprvé klasifikoval svůj backlog poté, co veřejný výpadek obrátil pozornost na
stabilitu podkladového systému. Cvičení odhalilo, že práce na „rizicích“,
především záplatování bezpečnosti, které bylo opakovaně upozaďováno ve prospěch
viditelných funkcí pro občany, se během předchozího roku zmenšila pod 5 %
kapacity, což byl vzorec, který nebyl ve standardním vykazování týmu nikdy
vidět. Vedení úřadu použilo toto zjištění k nařízení minimálního přidělení na
práci s riziky do budoucna, podložené daty o rozložení toku, nikoli jen obecným
politickým prohlášením.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností klasifikace položek toku je obhajitelný, kvantifikovaný základ pro
rozhodnutí o zdrojích, která se dříve vedla kvalitativně a často prohrávala ve
prospěch práce nejviditelnější pro zainteresované strany. Výše uvedený příklad
maloobchodní firmy, která zajistila modernizační rozpočet skutečnými daty o
kapacitě místo obecné výzvy, je vzorcem, který tato disciplína spolehlivě
vyrábí: konkrétní číslo se odmítá mnohem hůř než obecný dojem, že „potřebujeme
víc času na údržbu“.

Celkové náklady vlastnictví (TCO) jsou nízké, jakmile je taxonomie a její
definice dohodnuta: klasifikace přidá při příjmu vteřiny, nikoli smysluplnou
procesní zátěž, a integrace nástrojů potřebná k jejímu sledování je obvykle
jediné vlastní pole nebo štítek. Skutečnou, trvající cenou je disciplína
udržet poctivou klasifikaci pod tlakem dodávky, a proto je pravidelné křížové
ověření nezávislými důkazy stejně důležité jako počáteční zavedení.

## Antivzory a úskalí

- **Klasifikovat práci zpětně, až když je znám výsledek:** způsob manipulace v
  srdci tohoto tématu. Pod tlakem dodávky může tým tiše označit práci na dluhu
  nebo rizicích jako funkci dodatečně, nebo zaokrouhlit nejednoznačnou položku k
  tomu typu, který vypadá lépe na grafu rozložení, aniž by jediné rozhodnutí
  samo o sobě vypadalo nepoctivě. Pojistkou je klasifikace při příjmu podle
  písemné definice v kombinaci s pravidelnými audity srovnávajícími rozložení
  toku s nezávislými důkazy, jako je míra uniklých vad (téma 5.1) a metriky
  zranitelností (téma 6.4), tedy stejná disciplína auditu proti nezávislým
  důkazům, kterou téma 1.2 žádá u každé metriky v této knize.
- **Nechat funkce konzistentně pohlcovat téměř veškerou kapacitu (vzorec
  továrny na funkce):** tiše vyhladovuje práci na dluhu a rizicích, dokud se
  neprojeví jako krize.
- **Brát rozložení jediného období jako celý obraz:** přehlédne pomalý,
  kumulativní posun, který pohled na trend jasně ukáže.
- **Stanovit cílové rozložení bez obchodních zainteresovaných stran:** promarní
  hlavní hodnotu rámce, sdílené a vyjednané porozumění kompromisu.
- **Používat nekonzistentní nebo nezdokumentovanou definici každého typu:**
  vyrábí čísla, která vypadají přesně, ale časem nejsou skutečně srovnatelná.
- **Předimenzovat taxonomii mnoha podtypy:** přidává režii klasifikace, která
  rozkládá disciplínu, aniž by přinesla úměrný vhled.

## Model zralosti

- **Úroveň 1, Zahájení:** Práce se sleduje obecně, bez klasifikace položek toku;
  práce na dluhu a rizicích je ve vykazování neviditelná.
- **Úroveň 2, Rozvoj:** Některé týmy klasifikují položky toku neformálně, ale
  definice jsou nekonzistentní a klasifikace se často děje zpětně.
- **Úroveň 3, Standardizace:** Všechny týmy klasifikují při příjmu podle sdílené,
  písemné definice a rozložení toku se sleduje jako trend.
- **Úroveň 4, Řízení:** Rozložení toku se pravidelně křížově ověřuje nezávislými
  důkazy a cílová rozložení se stanovují záměrně s obchodními zainteresovanými
  stranami.
- **Úroveň 5, Orchestrace:** Data o položkách toku přímo informují rozhodnutí o
  zdrojích a investicích v celé organizaci a vedení dokáže ukázat na konkrétní
  rozhodnutí učiněná proto, že klasifikace učinila dosud neviditelný kompromis
  výslovným.

## Náměty k diskusi

1. Co by ukázalo poctivé rozdělení práce minulého čtvrtletí na položky toku a
   překvapilo by to někoho?
2. Máme písemnou definici každého ze čtyř typů položek toku, nebo klasifikace
   závisí na tom, kdo práci označuje?
3. Posunulo se naše rozložení toku někdy k jednomu typu položek bez záměrného
   rozhodnutí?
4. S jakými nezávislými důkazy bychom mohli své rozložení toku dnes křížově
   ověřit?

## Hlavní poznatky

- **Položka toku** patří právě do jednoho ze čtyř typů, funkce, vady, rizika
  nebo dluh, a přidělování kapacity mezi ně je **hra s nulovým součtem**.
- **Neexistuje univerzálně zdravé rozložení**; správný mix závisí na fázi
  produktu a měl by být záměrným, vyjednaným cílem s obchodními zainteresovanými
  stranami.
- Ústředním způsobem manipulace tohoto tématu je **zpětná klasifikace**, tiché
  přeznačení práce na dluhu nebo rizicích jako funkce dodatečně; pojistkou je
  klasifikace při příjmu plus pravidelné audity proti nezávislým důkazům.
- Hlídejte konkrétně **vzorec továrny na funkce**, kdy funkce konzistentně
  pohlcují téměř veškerou kapacitu a vyhladovují práci na dluhu a rizicích,
  dokud se neprojeví jako krize.
- Rozložení toku je nejcennější jako **trend** a největší užitek přináší jeho
  sdílení přímo s obchodními zainteresovanými stranami.

## Odkazy a další četba

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
