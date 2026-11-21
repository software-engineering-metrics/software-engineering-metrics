# 2.9 Metriky pull requestů a revizí kódu

## Přehled a motivace

[Revize kódu](https://en.wikipedia.org/wiki/Code_review) je obvykle největším
jednotlivým přispěvatelem k čekacímu času v rozkladu cycle time z tématu 2.6 a
je také fází, kterou má tým nejpříměji ve své moci zlepšit, na rozdíl od
sdíleného platformního úzkého hrdla nebo externí závislosti. Toto téma pokrývá
konkrétní metriky, které žijí uvnitř fáze revize: čas do první revize, velikost
pull requestu, počet iterací revize a rozložení zátěže recenzentů, a jak je
použít ke zlepšení rychlosti revizí, aniž by se obětoval skutečný přínos kvality,
který má revize poskytovat.

Riziko, na které je toto téma nejvíce citlivé, je takové, které tato kniha dosud
přímo nepokryla: optimalizace rychlosti revizí může tiše erodovat jejich kvalitu,
je-li provozována bezstarostně. Tým, který zkrátí čas do první revize na polovinu
tím, že schvaluje všechno bez čtení, zlepšil metriku a zároveň zničil skutečnou
hodnotu praxe. Každé doporučení v tomto tématu je psáno s ohledem na tento
kompromis, protože metriky pull requestů patří k nejsnáze zmanipulovatelným v
této knize způsobem, který vypadá dobře na dashboardu, zatímco kódová základna se
měřitelně zhoršuje.

U velkých týmů metriky revizí odhalují problémy s vyvažováním zátěže, které jsou
jinak neviditelné: malý počet starších inženýrů pohlcuje nepřiměřený podíl zátěže
revizí, konkrétní tým nebo oblast kódu, kde revize soustavně vázne, nebo vzorec
nadměrně velkých pull requestů, které činí důkladnou revizi prakticky nemožnou bez
ohledu na pečlivost recenzenta. Tyto vzorce se ve velkém měřítku sčítají mnohem
víc než v malém týmu, kde každý nerovnováhu vidí přímo, aniž by potřeboval
metriku, která ji odhalí.

## Klíčové zásady

- **Čas do první revize je obvykle největší pákou, ne důkladnost revize sama.**
  Většina zpoždění pochází z toho, že pull request čeká, až se na něj někdo
  podívá, ne z toho, že by revizní konverzace trvala dlouho, jakmile začne.
- **Menší pull requesty se revidují rychleji a důkladněji, nejen rychleji.**
  Velikost je pákou pro rychlost i kvalitu současně.
- **Rychlost a kvalita revizí nejsou automaticky v napětí, ale lze je bezstarostně
  vyměnit.** Proti této výměně se bráníte výslovně.
- **Nerovnováha zátěže recenzentů je častá a bez metriky obvykle neviditelná.**
  Malý počet lidí často pohlcuje nepřiměřený podíl.
- **Tyto metriky jsou vystaveny riziku manipulace razítkováním.** Rychlé
  schválení bez skutečného zkoumání maří celý účel revize.

## Doporučení

### Sledujte čas do první revize jako primární rychlostní metriku

Měřte interval od otevření pull requestu po první věcný komentář nebo schválení
recenzenta, instrumentovaný automaticky z vaší platformy správy verzí. Obvykle je
to dominantní přispěvatel k čekacímu času uvnitř fáze revize (téma 2.5, téma 2.6)
a jeho zlepšení, jasnějšími normami přidělování revizí, praxí notifikací nebo
vyhrazenými bloky času na revize, obvykle přináší největší jednotlivé zlepšení
celkového cycle time, jaké má tým k dispozici.

### Sledujte velikost pull requestu a aktivně podporujte menší změny

Měřte změněné řádky nebo dotčené soubory na pull request a berte trvale velkou
mediánovou velikost jako signál, který stojí za přímé řešení. Menší pull
requesty se revidují rychleji, důkladněji (recenzent skutečně udrží celou změnu v
hlavě) a snáze se vrací, když se něco pokazí, což přímo navazuje na princip
velikosti dávky za frekvencí nasazení v tématu 2.10. Podporujte rozdělování
velkých změn na sled menších, nezávisle revidovatelných pull requestů, kdekoli
to práce dovolí.

### Sledujte rozložení zátěže recenzentů výslovně

Sledujte počet dokončených revizí na osobu v klouzavém okně a hlídejte konkrétně,
zda malý počet lidí nepohlcuje nepřiměřený podíl. Tento vzorec je častý, často
dopadá na nejzkušenější nebo nejdůvěryhodnější inženýry a vytváří jak úzké hrdlo
(jejich dostupnost omezuje propustnost revizí celého týmu), tak riziko vyhoření
(téma 3.2 pokrývá metriky pohody podrobněji). Rotujte odpovědnost za revize
záměrně místo toho, abyste ji nechali koncentrovat se ze zvyku kolem toho, kdo
reaguje nejrychleji.

### Braňte se riziku manipulace razítkováním výslovně

Spárujte čas do první revize s ukazatelem kvality: míra vad nebo incidentů
vystopovaných ke změnám schváleným s nulou komentářů revize, nebo míra oprav po
sloučení potřebných u nedávno revidovaného kódu. Tým, který zlepšuje rychlost
revizí tím, že schvaluje bez skutečného zkoumání, by měl vidět, jak se tato
pojistka zhoršuje, přesně princip párování z tématu 1.2 aplikovaný na tuto
konkrétní rodinu metrik. Nikdy nehoňte rychlost revizí bez této protimetriky na
očích.

### Používejte počet iterací revize k odhalení tření, ne k posuzování jednotlivců

Počet kol revize, kterými pull request projde před sloučením, může signalizovat
skutečné tření, nejasné požadavky, neshodu o přístupu, nekonzistentní očekávání
stylu, která stojí za zkoumání na úrovni procesu. Vyhněte se používání tohoto čísla
k přímému posuzování jednotlivých autorů nebo recenzentů; vysoký počet iterací
je častěji signálem systému nebo komunikace než osobním a brát ho jako
individuální skóre kartu riskuje přesně ten posun k hodnocení, před kterým
varuje téma 1.1.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Optimalizace čistě na čas do první revize | Rychlý, jasný signál, snadno se instrumentuje | Bez pojistky může motivovat k povrchní revizi razítkováním |
| Optimalizace čistě na zmenšení pull requestů | Zlepšuje rychlost i důkladnost současně | Ne každá práce se čistě dělí na malé přírůstky |
| Rovnoměrné rotování zátěže revizí | Snižuje úzké hrdlo a riziko vyhoření | Může zpomalit revizi specializovaného, těžko revidovatelného kódu vyžadujícího konkrétní odbornost |
| Koncentrace revizí mezi zkušené inženýry | Hluboká doménová odbornost uplatňovaná konzistentně | Časem vytváří úzké hrdlo a riziko vyhoření |

Hlavním napětím je **rychlost versus hloubka zkoumání**. Každá technika v tomto
tématu pro zrychlení revizí, rychlejší první odpověď, menší pull requesty, víc
rozložená zátěž recenzentů, nese určité riziko výměny skutečného zkoumání, pokud
se provozuje bez pojistky kvality, kterou toto téma doporučuje. Řešte to tak, že
každou rychlostní metriku spárujete s ukazatelem kvality sledovaným ve stejném
období, aby tým mohl rozlišit skutečné zlepšení procesu od tiše erodujícího
standardu revizí.

## Otázky k diskusi s vaším týmem

1. **Jaký je náš skutečný čas do první revize a kolik z našeho celkového cycle
   time fáze revize spotřebuje?** Vytáhněte skutečné číslo místo spoléhání na
   dojem; čekací čas revize bývá větší, než týmy předpokládají, právě proto, že
   se snadno podceňuje čas strávený čekáním místo aktivní prací.

2. **Jaká je naše mediánová velikost pull requestu a kolik našeho zpoždění
   revizí by se zmenšilo, kdyby velikost klesla?** Velké pull requesty se
   revidují pomaleji a spíš dostanou povrchní revizi prostě proto, že recenzent
   nedokáže udržet celé v hlavě najednou. Podívejte se na skutečné rozdělení
   velikostí, nejen na medián.

3. **Je zátěž revizí soustředěna u malého počtu lidí a co by se stalo s naší
   propustností revizí, kdyby jeden z nich byl dva týdny nedostupný?** Tato
   otázka odhalí zároveň riziko úzkého hrdla i vyhoření. Vytáhněte skutečná data
   o zátěži recenzentů místo spoléhání na dojem.

4. **Zlepšili jsme někdy metriku rychlosti revizí způsobem, který při zpětném
   pohledu snížil skutečné zkoumání?** Buďte tu upřímní; je to právě riziko
   razítkování, které toto téma pojmenovává, a do kterého se snadno sklouzne bez
   jakéhokoli záměrného rozhodnutí.

5. **Co obvykle signalizuje vysoký počet iterací revize v našem týmu: skutečnou
   neshodu, nejasné požadavky, nebo nekonzistentní očekávání stylu?** Podívejte
   se na vzorek pull requestů s neobvykle vysokým počtem iterací a diagnostikujte
   skutečný vzorec místo předpokladu, že vrhá špatné světlo na autora či
   recenzenta.

6. **Máme k svým metrikám rychlosti revizí spárovanou pojistku kvality, nebo
   sledujeme rychlost izolovaně?** Pokud je poctivou odpovědí, že taková
   pojistka neexistuje, stojí za to tuto mezeru zacelit dřív, než rychlost
   revizí dál tlačíte, podle principu párování z tématu 1.2.

## Pohled podle sektorů

**Startup.** Revize je u malého týmu často rychlá ve výchozím stavu, někdy skoro
příliš rychlá, revize jediným schvalovatelem s minimálním zkoumáním, protože si
všichni věří. Rizikem, které je třeba hlídat při růstu týmu, je kvalita revizí,
která neroste spolu s velikostí týmu, protože neformální důvěra, která fungovala
pro pět inženýrů, automaticky nefunguje pro padesát.

**Malá firma.** Většina platforem správy verzí hlásí statistiky času do sloučení a
počtu revizí hned po instalaci; používejte je místo budování vlastní
instrumentace. Hlavní disciplínou k přijetí je prostě všimnout si, zda se zátěž
revizí s růstem týmu tiše nesoustředila na jednoho nebo dva lidi.

**Velký podnik.** Nerovnováha zátěže recenzentů a úzká hrdla specializované
znalosti jsou tu obzvlášť časté, kde hluboká doménová odbornost v kritickém
systému může koncentrovat odpovědnost za revize na malou skupinu bez ohledu na
velikost týmu. Investujte do záměrného sdílení znalostí a rotace revizí, abyste
odbornost rozšířili a snížili jak úzké hrdlo, tak riziko bus factoru, kdy
odbornost žije u příliš malého počtu lidí.

**Státní správa.** Revizní procesy zde často nesou váhu souladu vedle cílů
kvality, což může činit pull requesty většími a revize pomalejší záměrně. Kde
skutečné požadavky na soulad vyžadují důkladnou revizi, soustřeďte úsilí o
zlepšení na snižování čekacího času (rychlejší přidělování revizí, jasnější
třídění), místo kompromisů s hloubkou revize, a zdokumentujte kompromis
výslovně, pokud zkoumání musí zůstat těžké z regulatorních důvodů.

## Příklady

**Velký podnik.** Inženýrská organizace firmy zaměřené na kybernetickou
bezpečnost zjistila, že hrstka principal inženýrů dokončuje přes 40 % všech
revizí kódu napříč dvousetčlennou organizací, což byla nerovnováha, kterou nikdo
přímo neměřil, dokud se nevytáhla data o zátěži recenzentů. Tato koncentrace byla
jak úzkým hrdlem, protože dostupnost těchto inženýrů omezovala propustnost
revizí celé organizace, tak rizikem vyhoření označeným samostatně průzkumem
zapojení (téma 3.2). Organizace zavedla strukturovaný program rotace revizí
spárovaný s cílenými sezeními sdílení znalostí a během dvou čtvrtletí se zátěž
revizí rozprostřela na mnohem širší skupinu, přičemž čas do první revize se
zlepšil jako přímý vedlejší účinek snížení úzkého hrdla.

**Státní správa.** Inženýrský tým daňového úřadu, pod tlakem zlepšit rychlost
dodávání, stanovil cíl zkrátit čas do první revize na polovinu. Během jednoho
čtvrtletí byl cíl splněn, ale následný audit kvality zjistil prudký nárůst
pull requestů s opravami vad po sloučení, soustředěných ve změnách schválených
jediným stručným komentářem. Řešení týmu spárovalo rychlostní cíl s výslovnou
pojistkou kvality, mírou oprav po sloučení potřebných do dvou týdnů po revizi, a
přeškolilo tým v tom, co skutečně věcná revize vyžaduje, čímž obnovilo skutečné
zkoumání a zachovalo většinu zrychlení, které vzešlo z lepšího přidělování
revizí a menších pull requestů.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností dobře řízených metrik revizí je rychlejší dodávání bez oběti kvality,
což je vzácná kombinace: většina zlepšení dodávání někde vyměňuje rychlost za
riziko, ale zlepšení ve fázi revize, menší pull requesty, lepší rozložení zátěže,
rychlejší první odpověď, skutečně zlepšují obojí současně, jsou-li provozována s
pojistkou kvality, kterou toto téma doporučuje. Výše uvedený příklad firmy
zaměřené na kybernetickou bezpečnost je typický: oprava úzkého hrdla zlepšila
rychlost, zatímco podkladová kvalita revizí se, pokud vůbec, zlepšila, jak se
odbornost rozšířila.

Celkové náklady vlastnictví (TCO) jsou nízké: většina těchto metrik pochází přímo
z existujících dat platformy správy verzí s minimální další instrumentací a
procesní změny, na které ukazují, rotace revizí, podpora menších pull requestů,
stojí většinou disciplínu, ne investice do nástrojů.

## Antivzory a úskalí

- **Optimalizovat čas do první revize bez spárované pojistky kvality:** zve k
  schvalování razítkem, které maří účel revize.
- **Ignorovat koncentraci zátěže recenzentů:** vytváří úzké hrdlo i riziko
  vyhoření, které zůstává neviditelné, dokud se neměří.
- **Brát počet iterací revize jako individuální skóre kartu:** častěji je to
  signál systému nebo komunikace než osobní.
- **Přijímat trvale velké pull requesty jako nevyhnutelné:** většinu velkých
  změn lze rozdělit dál, než týmy zpočátku předpokládají.
- **Uplatňovat jednotnou hloubku revize bez ohledu na riziko změny:** plýtvá
  zkoumáním na změnách s nízkým rizikem a potenciálně nedostatečně zkoumá
  změny s vysokým rizikem.
- **Měřit rychlost revizí, ale nikdy nekontrolovat, zda spolu s ní neklesla
  skutečná míra zkoumání:** nejčastější způsob, jak se s touto rodinou metrik
  nechtěně manipuluje.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky revizí se nesledují; rozložení zátěže revizí a
  velikost pull requestů jsou neviditelné.
- **Úroveň 2, Rozvoj:** Existují některá data o rychlosti revizí z výchozího
  nastavení platformy, ale chybí pojistka kvality a aktivní řízení zátěže
  recenzentů.
- **Úroveň 3, Standardizace:** Čas do první revize, velikost pull requestu a
  zátěž recenzentů se sledují konzistentně, s výslovnou pojistkou kvality
  spárovanou proti zlepšením rychlosti.
- **Úroveň 4, Řízení:** Zátěž recenzentů se aktivně přebalancovává rotací a
  sdílením znalostí; vzorce počtu iterací se zkoumají na úrovni procesu, ne
  jednotlivce.
- **Úroveň 5, Orchestrace:** Metriky fáze revize přímo informují investice do
  procesů a organizace dokáže po delší dobu prokázat souběžné zlepšení rychlosti
  revizí i s revizí spojených výsledků kvality.

## Náměty k diskusi

1. Jaký je náš aktuální mediánový čas do první revize a kam ten čas skutečně
   odchází?
2. Je zátěž revizí soustředěna u malého počtu lidí a jaké je riziko, pokud je
   jeden nedostupný?
3. Zlepšili jsme někdy rychlost revizí za cenu skutečného zkoumání, i
   nechtěně?
4. Jaká je naše mediánová velikost pull requestu a o kolik menší by mohla
   většina změn realisticky být?
5. Bereme vysoký počet iterací revize jako signál systému, nebo jako úsudek o
   jednotlivci?

## Hlavní poznatky

- **Čas do první revize** je obvykle největší jednotlivou pákou uvnitř fáze
  revize, víc než délka samotné revizní konverzace.
- **Menší pull requesty** zlepšují rychlost i důkladnost revize současně.
- **Nerovnováha zátěže recenzentů** je častá a bez přímého měření obvykle
  neviditelná; vytváří úzké hrdlo i riziko vyhoření.
- Spárujte každou metriku rychlosti revizí s výslovnou **pojistkou kvality**,
  abyste zachytili riziko manipulace razítkováním, k němuž je tato rodina metrik
  obzvlášť náchylná.
- Používejte **počet iterací revize** k diagnostice tření na úrovni systému, ne
  k posuzování jednotlivých autorů nebo recenzentů.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (praxe revizí kódu a jejich vztah k dodacímu výkonu).
- Výzkum *Modern Code Review* Alberta Bacchelliho a Christiana Birda (empirická
  studie praxe revizí kódu ve velkém měřítku).
- *Peer Reviews in Software: A Practical Guide*, Karl E. Wiegers (návrh
  revizního procesu a jeho kompromisy).
- *The Principles of Product Development Flow*, Donald G. Reinertsen (uvažování o
  velikosti dávky aplikované na dimenzování pull requestů).
