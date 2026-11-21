# 2.1 Rámec Flow Framework

## Přehled a motivace

**Flow Framework** je manažerský a strukturální model, který vytvořil Mik
Kersten a publikoval ve své knize *Project to Product* z roku 2018. Existuje,
aby odpověděl na otázku, na kterou čisté metriky pipeline odpovědět nedokážou:
nejen jak rychle a jak bezpečně se kód přesouvá z commitu do produkce, ale jaký
druh hodnoty pipeline vůbec protéká a zda tento mix odráží skutečnou strategii
byznysu. Rámec pojímá dodávání softwaru jako **[hodnotový proud](https://en.wikipedia.org/wiki/Value_stream)**,
neboli kompletní sled aktivit, který mění nápad v hodnotu, již zákazník
obdrží, a přebírá přímo tradici mapování hodnotového proudu ze štíhlé výroby.

Tato kniha používá Flow Framework jako organizační strukturu části 2. Téma 2.2
představuje jeho čtyři položky toku, témata 2.3 a 2.4 jeho pět metrik toku,
téma 2.8 vystopuje tyto metriky zpět k jejich původu v klasickém mapování
hodnotového proudu podle Lean a téma 2.10 pokrývá metriky DORA jako užší,
na pipeline zaměřený referenční rámec, kterým tato část už nevede. Je to záměrná
volba, nikoli odmítnutí výzkumu DORA. DORA měří propustnost a stabilitu systému
se skutečnou statistickou přísností, ale mlčí k otázce, na které obchodnímu
vedoucímu záleží nejvíc: z toho, co inženýrská organizace toto čtvrtletí dodala,
kolik byla nová zákaznická hodnota a kolik tiše pohltilo opravování vad, řízení
rizik nebo splácení dluhu. Flow Framework existuje právě proto, aby tento mix
učinil viditelným.

U velkých týmů tento rozdíl není akademický. Platformní organizace provozující
desítky hodnotových proudů může mít vynikající čísla DORA, rychlá, častá a
stabilní nasazení, zatímco její skutečný produktový výstup tiše sklouzl téměř
k čisté údržbě, což je vzorec neviditelný dashboardu, který měří jen mechaniku
pipeline. Velké podniky a státní správa, které musí zdůvodňovat inženýrské
investice zainteresovaným stranám myslícím v obchodních, nikoli v pipelinových
pojmech, potřebují slovní zásobu, která spojuje dodací aktivitu se strategickým
záměrem. To je to, co tento rámec poskytuje.

## Klíčové zásady

- **Jednotkou měření je hodnotový proud, ne tým nebo pipeline.** Rozprostírá se
  od potřeby zákazníka nebo byznysu až po dodaný výsledek a prochází všemi
  hranicemi týmů, kterými práce skutečně prochází.
- **Položky toku činí viditelné „co“, nejen „jak rychle“.** Čtyři kategorie z
  tématu 2.2, funkce, vady, rizika a dluh, mění implicitní rozhodnutí o prioritách
  na výslovné a měřitelné.
- **Přidělování kapacity mezi položky toku je hra s nulovým součtem.** Víc
  kapacity vynaložené na jeden typ položky je méně kapacity pro ostatní; rámec
  tento kompromis činí viditelným místo toho, aby ho nechal implicitní.
- **Pět metrik toku odpovídá na obchodní otázky, nejen inženýrské.** Jsou
  navrženy tak, aby se prezentovaly netechnické zainteresované straně, ne aby
  zůstaly uvnitř inženýrského týmu.
- **Správa hodnotového proudu má být průběžná, ne jednorázové cvičení
  mapování.** Statické mapy hodnotového proudu zastarávají; rámec je postaven k
  instrumentaci z nástrojů, které týmy už používají.

## Doporučení

### Zmapujte svůj hodnotový proud, než cokoli instrumentujete

Než přijmete jakoukoli metriku toku, projděte skutečnou cestu, kterou práce
urazí od identifikované potřeby byznysu k hodnotě, kterou obdrží zákazník, a
pojmenujte každou fázi a každé předání mezi týmy. Je to klasické cvičení
[mapování hodnotového proudu](https://en.wikipedia.org/wiki/Value_stream_mapping),
převzaté ze štíhlé výroby, a jeho přeskočení je nejčastějším důvodem, proč
zavedení Flow Frameworku vyrobí čísla, kterým nikdo nevěří: metriky počítané
vůči neprozkoumanému, neformálně chápanému procesu málokdy odpovídají tomu, co
se skutečně děje.

### Propojte metriky toku s nástroji, které vaše týmy už používají

Flow Framework je postaven pro průběžnou, automatizovanou správu hodnotového
proudu, nikoli pro periodické ruční mapování. Integrujte sledování položek toku
přímo do nástrojů, kterými práce už protéká, Jira, Azure DevOps, GitHub, místo
budování paralelního sledovacího systému, který týmy musí aktualizovat ručně.
Stav položky toku by se měl aktualizovat sám, jak se pohybuje podkladový tiket
nebo pull request, tedy stejná disciplína instrumentace před vlastním hlášením,
jakou téma 1.5 doporučuje pro každou metriku v této knize.

### Prezentujte rozložení toku přímo obchodním zainteresovaným stranám, nejen inženýrskému vedení

Největší promarněnou příležitostí tohoto rámce je zacházet s ním jako s
interním inženýrským nástrojem. Rozložení toku, podíl práce směřující k funkcím
oproti vadám, rizikům a dluhu (téma 2.3), je výslovně navrženo jako konverzace,
kterou vedete s produktovým a obchodním vedením, protože činí implicitní
rozhodnutí o prioritách, kolik kapacity jde na novou hodnotu a kolik na udržení
provozu, výslovným a vyjednatelným místo předpokládaného.

### Berte čtyři položky toku jako skutečnou taxonomii, ne formalitu

Požadujte, aby byla každá jednotka práce zařazena do právě jednoho ze čtyř typů
položek toku při příjmu, nikoli zpětně. Klasifikace uplatněná dodatečně nebo
uplatněná volně, protože „je to v podstatě funkce“, podkopává veškerou hodnotu
taxonomie, protože celým smyslem je poctivý a konzistentní záznam o tom, kam
kapacita skutečně šla.

### Vracejte se k mapě hodnotového proudu, když se změní organizace, ne podle pevného plánu

Mapa hodnotového proudu zastará ve chvíli, kdy se výrazně změní hranice týmů,
nástroje nebo samotný produkt, nikoli podle nějakého libovolného ročního
rytmu. Reorganizaci, významnou migraci nástrojů nebo zásadní pivot produktu
berte jako spouštěč k novému projití hodnotového proudu, protože metrika toku
počítaná vůči zastaralé mapě tiše měří špatnou věc.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Jen metriky pipeline (DORA, téma 2.10) | Jednoduché, dobře ověřené, levné na instrumentaci z existujících dat CI/CD | Mlčí o tom, jaký druh hodnoty se dodává |
| Plné zavedení Flow Frameworku | Spojuje dodávání s obchodní strategií; činí mix hodnoty viditelným a vyjednatelným | Vyžaduje poctivou mapu hodnotového proudu a konzistentní disciplínu klasifikace položek toku |
| Statické, jednorázové mapování hodnotového proudu | Levné, rychlé jako workshop | Rychle zastarává; dává snímek, ne živou metriku |
| Průběžná správa hodnotového proudu integrovaná do nástrojů | Živá, stále aktuální data; škáluje napříč mnoha hodnotovými proudy | Vyžaduje předem skutečnou práci na integraci nástrojů |

Hlavním napětím je **obchodní čitelnost versus úsilí o instrumentaci**. Metriky
pipeline jsou levné, protože pipeline data už produkuje; metriky hodnotového
proudu vyžadují poctivou mapu celého procesu a disciplinovaný návyk klasifikace
při příjmu, který metriky pipeline nikdy nevyžadovaly. Řešte to tak, že začnete
jedním hodnotovým proudem, nikoli celou organizací naráz, zmapujete ho řádně a
teprve pak integrujete sledování položek toku do existujících nástrojů, místo
pokusu o nasazení big-bang napříč všemi týmy současně.

## Otázky k diskusi s vaším týmem

1. **Dokázali bychom hned teď nakreslit přesnou mapu hodnotového proudu pro náš
   nejdůležitější produkt, nebo bychom u několika předání hádali?** Většina
   organizací tuto cestu nikdy skutečně neprošla od začátku do konce. Zkuste
   cvičení poctivě a poznamenejte si každé místo, kde se skupina neshodne na
   tom, co se skutečně děje, protože tato neshoda je sama diagnostická.

2. **Kdybychom vše, co náš tým dodal minulé čtvrtletí, zařadili do funkcí,
   vad, rizik a dluhu, překvapil by výsledek naše produktové vedení?** Většina
   týmů toto rozdělení nikdy neučinila výslovným a odpověď často odhalí zátěž
   údržby nebo problém s dluhem, který byl dříve neviditelný v prostém počtu
   „dodaných story pointů“.

3. **Máme skutečný, do nástrojů integrovaný způsob sledování položek toku, nebo
   by to vyžadovalo, aby někdo ručně klasifikoval a překlasifikovával práci?**
   Ruční systém pod skutečnou pracovní zátěží rychle chátrá; do nástrojů
   integrovaný ne. Poctivě posuďte, který z nich jste skutečně připraveni
   udržovat.

4. **Kdy se naposledy změnila naše mapa hodnotového proudu a aktualizovali jsme
   podle toho své metriky?** Reorganizace a migrace nástrojů mapu hodnotového
   proudu tiše znehodnotí a málo organizací si pamatuje se k ní vrátit.

5. **Prezentují se naše metriky toku někdy přímo obchodním nebo produktovým
   zainteresovaným stranám, nebo zůstávají uvnitř inženýrství?** Největší
   výhodou rámce oproti metrikám jen z pipeline je právě tato konverzace a její
   přeskočení promarní většinu hodnoty rámce.

6. **Co by bylo zapotřebí k tomu, aby někdo mohl zmanipulovat naši klasifikaci
   položek toku, aniž by na papíře udělal cokoli nepoctivého?** Projděte, jak
   by tým pod tlakem dodávky mohl tiše přeznačit práci na dluhu nebo rizicích
   jako funkce, aby vypadal produktivněji, a diskutujte, zda byste si toho
   dnes všimli.

## Pohled podle sektorů

**Startup.** Plná mapa hodnotového proudu je u pětičlenného týmu, kde všichni
znají celý proces nazpaměť, obvykle zbytečná. Užitečným návykem v tomto měřítku
je jednoduše vyslovovat čtyři typy položek toku nahlas při plánování, aby práce
na dluhu a rizicích tiše nezmizela z dohledu ve chvíli, kdy hrozí termín funkce.

**Malá firma.** Klasifikaci položek toku zaveďte uvnitř jakéhokoli lehkého
sledovacího nástroje, který už používáte, označeným sloupcem nebo vlastním
polem, spíš než v nějakém specializovaném produktu pro správu hodnotového
proudu. Disciplína konzistentní klasifikace záleží mnohem víc než sofistikovanost
nástrojů za ní.

**Velký podnik.** Tady se rámec vyplatí, protože velká organizace provozující
desítky hodnotových proudů napříč mnoha produktovými řadami nemá žádný jiný
spolehlivý způsob, jak na jednom místě vidět, jak je inženýrská kapacita
skutečně rozdělena mezi funkce, vady, rizika a dluh. Investujte do integrace
nástrojů; ruční alternativa střet se skutečným měřítkem nepřežije.

**Státní správa.** Rozložení toku dává inženýrské organizaci veřejného sektoru
obhajitelnou, pro byznys čitelnou odpověď na otázku „proč se nedodává víc nové
funkcionality“, když poctivou odpovědí je rostoucí podíl kapacity jdoucí na
nápravu bezpečnosti nebo zděděný dluh. Učinit tento kompromis viditelným a
výslovným místo tichého pohlcování tlaku je často nejužitečnější věc, kterou
tento rámec nabízí vedoucímu technologií ve státní správě.

## Příklady

**Velký podnik.** Organizace platformy pro likvidaci škod velké pojišťovny
věřila, že primárně dodává nové funkce, na základě svých zpráv o velocity
sprintů. První cvičení mapování hodnotového proudu a klasifikace položek toku
odhalilo, že práce na dluhu a rizicích, z velké části nezdokumentovaný technický
dluh desetiletého jádrového systému, ve skutečnosti spotřebovala téměř polovinu
celkové inženýrské kapacity, což žádné dřívější vykazování neodhalilo, protože
tato práce byla vždy schována do obecných „inženýrských úkolů“. Prezentace tohoto
rozdělení výkonnému výboru poprvé v historii platformy zajistila vyhrazený
rozpočet na snižování dluhu, místo aby práce na dluhu dál tiše soupeřila s
každým požadavkem na funkci.

**Státní správa.** Divize digitálních služeb národního daňového úřadu použila
mapování hodnotového proudu k diagnostice toho, proč byla vlajková funkce pro
občany „rozpracovaná“ přes rok navzdory stálému dokončování sprintů. Mapa
odhalila, že hodnotový proud ve skutečnosti zahrnuje pět samostatných týmů se
třemi předáními, která organizační schéma neodráželo, a klasifikace položek
toku ukázala, že skutečný inženýrský čas funkce byl malým zlomkem její celkové
doby toku, zbytek pohltily zpoždění při předáních mezi týmy, jež žádné vlastní
metriky jediného týmu nemohly vidět. Divize se pro danou produktovou řadu
přeorganizovala kolem hodnotového proudu místo organizačního schématu a během
dvou čtvrtletí podstatně zkrátila dobu toku.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností zavedení Flow Frameworku je obhajitelná, pro byznys čitelná odpověď
na otázku, kterou metriky pipeline zodpovědět nedokážou: je inženýrská kapacita
rozdělena tak, jak vedení věří. Výše uvedený příklad pojišťovny, který odhalil
téměř polovinu kapacity jdoucí na dříve neviditelnou práci na dluhu, je častým
vzorcem, jakmile organizace svou práci poctivě klasifikuje, a tato viditelnost
běžně odemkne investice, jaké by vágní žádost „potřebujeme víc času na
technický dluh“ nikdy nezískala.

Celkové náklady vlastnictví (TCO) jsou soustředěny na dvou místech: počáteční
cvičení mapování hodnotového proudu, které vyžaduje skutečný čas facilitace, aby
bylo provedeno poctivě, a integrace nástrojů potřebná k udržení aktuálních dat o
položkách toku bez ručního zásahu. Obojí jsou po dobrém provedení jednorázové
nebo málo náročné na údržbu náklady, takže je rámec podstatně levnější udržovat,
než zavést.

## Antivzory a úskalí

- **Považovat mapování hodnotového proudu za jednorázový workshop, ke kterému se
  nikdo nevrací:** mapa zastará, jakmile se organizace změní, a metrika počítaná
  vůči zastaralé mapě měří špatnou věc.
- **Budovat paralelní, ručně udržovaný systém sledování položek toku:** pod
  skutečnou zátěží rychle chátrá; integrujte místo toho do existujících nástrojů.
- **Klasifikovat položky toku zpětně místo při příjmu:** způsob manipulace v
  srdci tohoto tématu. Pod tlakem dodávky může tým tiše přeznačit práci na
  dluhu nebo rizicích jako funkce dodatečně, aby se jevil produktivněji
  zainteresovaným stranám, které vidí jen graf rozložení toku, aniž by kdo
  kdy učinil výslovné, viditelné rozhodnutí tak učinit. Pojistkou je požadovat
  klasifikaci při příjmu, dřív než je znám výsledek, a pravidelně auditovat
  vzorek klasifikovaných položek proti tomu, co podkladová změna skutečně
  udělala, tedy stejná auditní disciplína, kterou téma 1.2 žádá u každé
  metriky v této knize.
- **Držet metriky toku jen uvnitř inženýrství:** promarňuje hlavní výhodu rámce,
  společnou slovní zásobu s obchodními zainteresovanými stranami.
- **Mapovat organizační schéma místo skutečného hodnotového proudu:** skrývá
  předání mezi týmy, která jsou často největším zdrojem zpoždění.
- **Zavést rámec v celé organizaci dřív, než se ověří na jednom hodnotovém
  proudu:** riskuje velkou investici do metrik, kterým nikdo nevěří, protože
  podkladová mapa nebyla nikdy potvrzena jako přesná.

## Model zralosti

- **Úroveň 1, Zahájení:** Neexistuje žádná mapa hodnotového proudu; práce se
  sleduje jako obecné tikety bez klasifikace položek toku.
- **Úroveň 2, Rozvoj:** Jeden hodnotový proud byl zmapován a položky toku se
  klasifikují neformálně, ale sledování je ruční a nekonzistentně uplatňované.
- **Úroveň 3, Standardizace:** Klasifikace položek toku je integrována do
  existujících nástrojů a důsledně uplatňována při příjmu napříč hlavními
  hodnotovými proudy.
- **Úroveň 4, Řízení:** Rozložení toku se pravidelně projednává s obchodními
  zainteresovanými stranami a mapy hodnotových proudů se aktivně udržují
  aktuální, jak se organizace mění.
- **Úroveň 5, Orchestrace:** Organizace záměrně přiděluje inženýrské investice
  mezi hodnotové proudy pomocí dat o toku a dokáže ukázat na konkrétní
  strategická rozhodnutí, rozpočet na snižování dluhu či restrukturalizaci týmu,
  učiněná proto, že rámec učinil dosud neviditelný kompromis viditelným.

## Náměty k diskusi

1. Dokázali bychom dnes nakreslit přesnou mapu hodnotového proudu pro náš
   vlajkový produkt, aniž bychom hádali?
2. Jaké procento kapacity minulého čtvrtletí by poctivá klasifikace položek
   toku odhalila jako věnované dluhu a rizikům oproti funkcím?
3. Dostávají se naše metriky toku dnes k obchodním zainteresovaným stranám, nebo
   zůstávají uvnitř inženýrství?
4. Které největší předání mezi týmy v našem hodnotovém proudu naše organizační
   schéma neodráží?

## Hlavní poznatky

- **Flow Framework** z knihy Mika Kerstena *Project to Product* měří, jaký druh
  hodnoty pipeline dodávání protéká, nejen jak rychle samotná pipeline běží.
- **Hodnotový proud**, ne tým nebo pipeline, je jednotkou měření rámce a jeho
  poctivé zmapování předchází instrumentaci čehokoli.
- **Klasifikace položek toku při příjmu, ne zpětně,** je pojistkou proti
  ústřednímu způsobu manipulace tohoto tématu: tiššímu přeznačování práce na
  dluhu nebo rizicích jako funkcí, aby tým vypadal produktivněji.
- **Propojte metriky toku s existujícími nástroji**, Jira, Azure DevOps,
  GitHub, místo paralelního ručního sledovacího systému, který skutečnou zátěž
  nepřežije.
- Prezentujte data o toku **přímo obchodním zainteresovaným stranám**; tato
  konverzace, ne interní inženýrský dashboard, je hlavní výhodou rámce oproti
  metrikám jen z pipeline.

## Odkazy a další četba

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, a John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois a John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
