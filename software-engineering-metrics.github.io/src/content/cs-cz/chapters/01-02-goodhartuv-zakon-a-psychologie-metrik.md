# 1.2 Goodhartův zákon a psychologie metrik

## Přehled a motivace

[Goodhartův zákon](https://en.wikipedia.org/wiki/Goodhart%27s_law), pojmenovaný
po ekonomovi Charlesi Goodhartovi, se obvykle vyjadřuje takto: když se míra
stane cílem, přestává být dobrou mírou. Goodhartovo původní pozorování z roku
1975 se týkalo měnové politiky, ale pozdější přeformulování antropoložky Marilyn
Strathernové je verze, kterou softwarové týmy skutečně potřebují, a je to věta,
na níž je postavena celá tato kniha. Každá metrika v každém dalším tématu,
frekvence nasazení, pokrytí testy, skóre spokojenosti, nese toto riziko a
každé doporučení v této knize je v nějaké podobě strategií, jak je zvládat.

Mechanismus není záhadný. Lidé reagují na motivace a metrika spojená s odměnou,
hodnocením nebo reputací je motivací, ať už ji tak někdo zamýšlel, nebo ne.
Jakmile tým ví, že se sleduje „frekvence nasazení“, nejlevnější způsob, jak
číslem pohnout, nemusí být ten zamýšlený: rozdělte jednu smysluplnou změnu na
pět triviálních nasazení a číslo vzroste, zatímco se nic skutečného nezlepšilo.
Není to příběh o zlých lidech. Obyčejní, dobře míněcí inženýři reagují na
špatně navržené motivace přesně takto, protože chování pod tlakem utváří
motivace, nikoli záměr, který za ní stál.

U velkých organizací jsou sázky vyšší, protože vzdálenost mezi návrhářem metriky
a člověkem, jehož chování metrika utváří, s měřítkem roste. Vedoucí týmu, který
vytvoří metriku pro svůj osmičlenný tým, může manipulaci sledovat přímo a rychle
korigovat kurz. Metrika zavedená v šestisetčlenné divizi nebo zveřejněná ve
vládní zprávě o výkonu, kterou čte parlament, putuje přes vrstvy lidí, kteří
nikdy nepotkali jejího autora a mají všechny důvody brát doslovné znění metriky
jako cíl. Zkreslení se se vzdáleností sčítá, a proto právě toto téma, a ne
některé pozdější, je místem, kam kniha klade své těžiště.

## Klíčové zásady

- **Předpokládejte, že s každou motivovanou metrikou se bude manipulovat.**
  Navrhujte proti tomu od první verze, ne až po objevení zkreslení.
- **Manipulace je racionální, ne zlovolná.** Lidé rozumně reagují na motivaci,
  kterou jste vytvořili; obviňovat je nic nespraví.
- **Vzdálenost od vlastníka metriky zvyšuje riziko zkreslení.** Čím dál číslo
  putuje od člověka, který rozumí jeho záměru, tím víc se stává literou
  pravidla místo jeho duchem.
- **Poměry a rozsahy odolávají manipulaci lépe než surové počty.** Surový počet
  odměňuje objem; dobře zvolený poměr odměňuje skutečné chování, které chcete.
- **Pojistka u motivované metriky není volitelná.** Každá metrika, na kterou
  navážete odměnu, potřebuje spárovanou protimetriku, která se nesmí zhoršit.

## Doporučení

### Zařaďte každou metriku podle vystavení motivacím

Dříve než metriku někde viditelně zveřejníte, zeptejte se přímo: závisí něčí
odměna, hodnocení, reputace nebo rozpočet na tom, že se toto číslo pohne určitým
směrem? Pokud ano, je to motivovaná metrika a před spuštěním potřebuje pojistku
(viz níže). Pokud ne, je to diagnostická metrika (téma 1.1) a nese nižší riziko
manipulace, i když nikdy nulové, protože lidé mohou utvářet i číslo, podle
něhož očekávají, že budou posuzováni později, i bez formální motivace
připojené dnes.

### Dávejte přednost poměrům, mírám a kohortám před surovými počty

Surový počet jako „uzavřené tikety“ lze zmanipulovat tím, že děláte víc něčeho
málo hodnotného. Poměr jako „procento tiketů vyřešených při prvním kontaktu“
místo objemu odměňuje podstatné chování. **Kohorta**, skupina vymezená
společným výchozím bodem, například všechna nasazení v daném týdnu, brání tomu,
aby se špatný nedávný trend schoval uvnitř lichotivého dlouhodobého agregátu.
Kdykoli si vybíráte mezi počtem a mírou, které zachycují totéž chování,
zvolte míru.

### Spárujte každou motivovanou metriku s pojistkou

**Pojistka** (ochranná metrika) je spárovaná protimetrika, která se nesmí
zhoršit, zatímco se hlavní metrika zlepšuje. Frekvence nasazení se páruje s
mírou selhání změn; lead time s mírou úniku vad; doba vyřízení u podpory se
spokojeností zákazníků. Pojistka činí levnou manipulaci viditelně drahou: tým,
který zlepší motivované číslo na úkor pojistky, je přistižen párováním, nikoli
náhodou. Navrhněte pojistku zároveň s hlavní metrikou, nikdy dodatečně, až
když se manipulace už objevila.

### Hlídejte čtyři klasické vzorce manipulace

Zkreslení podle Goodhartova zákona se obvykle vejde do malého počtu
rozpoznatelných tvarů. **Manipulace prahem** optimalizuje přesně k cíli a tam
končí (cíl 95% pokrytí testy vyrobí triviální testy, aby se dosáhlo přesně
95 %, nikoli skutečné pokrytí). **Manipulace definicí** mění, co se počítá,
místo toho, co se děje (předefinování „vyřešeno“ tak, aby vylučovalo těžké
případy). **Manipulace načasováním** posouvá, kdy je práce zaznamenána, místo
toho, kdy proběhla (shlukování nasazení těsně před uzavřením vykazovacího
okna). **Manipulace záměnou** dodá literu metriky a opustí její záměr (rozdělení
jedné skutečné změny na mnoho triviálních, aby se nafoukla frekvence
nasazení). Pojmenujte tyto vzorce svému týmu výslovně, bude pak mnohem snazší
je odhalit, objeví-li se ve vašich číslech.

### Oddělte měření od odměny všude, kde to jde

Nejsilnější pojistkou ze všech je strukturální: odpojit metriku od individuální
odměny. Metrika používaná čistě k pochopení systému, u níž na směru nezávisí
ničí plat, hodnocení ani postavení, čelí mnohem slabšímu tlaku na manipulaci
než metrika svázaná s hodnocením. Proto je rozlišení diagnostické a hodnoticí z
tématu 1.1 v praxi tak důležité: udržet metriku diagnostickou je často levnější
a účinnější než jakékoli množství inženýrství pojistek aplikovaného zpětně.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Surové počty | Jednoduché na výpočet i vysvětlení | Velmi snadno zmanipulovatelné objemem |
| Poměry a míry | Odměňují správné chování, odolávají manipulaci objemem | Mohou skrýt problém se zmenšujícím se jmenovatelem |
| Párování s pojistkou | Činí levnou manipulaci viditelně drahou | Zdvojnásobuje metriky, které je třeba definovat, vlastnit a udržovat |
| Jen diagnostické (bez individuální odměny) | Nejnižší tlak na manipulaci ze všech možností | Slabší přímá motivační páka pro vedení |
| Silně motivované metriky | Silná a rychlá behaviorální odezva | Vysoké riziko zkreslení, často již během jednoho vykazovacího cyklu |

Hlavním napětím je **motivační síla versus riziko zkreslení**. Metriky, které
pohnou chováním nejrychleji, tedy ty, kde je číslo přímo svázáno s odměnou, jsou
přesně ty, které jsou Goodhartovu zákonu nejvíc vystaveny. Řešte to tak, že
silné motivace vyhradíte pro metriky výsledků, které je skutečně těžké levně
zmanipulovat, a cokoli motivujete, spárujete s pojistkou navrženou zároveň, ne
přilepenou po prvním zkreslení.

## Otázky k diskusi s vaším týmem

1. **Jak by se nejlevněji dala zmanipulovat každá metrika, na které závisí
   něčí odměna, a přistihli bychom takovou manipulaci dnes?** Sedněte si a
   záměrně navrhněte exploit pro každé motivované číslo na vašem dashboardu: jak
   by racionální, dobře míněcí tým docílil, aby to vypadalo dobře, aniž by udělal
   skutečnou práci? Pokud nedokážete pojmenovat způsob, jak byste takovou
   manipulaci zachytili, ještě nejste připraveni metriku motivovat. Toto
   cvičení je nepříjemné a právě ta nepříjemnost je jeho smyslem.

2. **Které z našich současných metrik už sklouzly do jednoho ze čtyř vzorců
   manipulace (prahem, definicí, načasováním nebo záměnou), aniž by to někdo
   pojmenoval?** Zkreslení se málokdy ohlásí samo; projeví se jako číslo, které
   vypadá skvěle, zatímco stížnosti, incidenty nebo zpětná vazba zákazníků
   vyprávějí jiný příběh. Projděte dashboard proti každému vzorci jménem a
   buďte upřímní ohledně shod.

3. **Má každá motivovaná metrika na našem dashboardu spárovanou pojistku a byla
   navržena zároveň s metrikou?** Pojistka přidaná až po odhalení manipulace je
   oprava, nikoli návrhové rozhodnutí, a obvykle přijde příliš pozdě, než aby
   zabránila prvnímu kolu poškození důvěry. Zkontrolujte své motivované metriky
   konkrétně na toto párování.

4. **Jak daleko putuje tato metrika od člověka, který rozumí jejímu záměru, než
   dorazí k člověku, jehož chování utváří?** Metrika vytvořená platformním
   týmem a konzumovaná o tři vrstvy řízení dál, nebo zveřejněná ve veřejné
   zprávě, kterou čtou lidé, kdo instrumentaci nikdy neviděli, je mnohem víc
   vystavena manipulaci typu litera místo ducha než ta, kterou si tým navrhl pro
   sebe. Zmapujte tuto vzdálenost u svých nejvýznamnějších metrik.

5. **Odebrali jsme někdy metrice motivaci poté, co jsme zjistili, že se s ní
   manipuluje, a kolik nás to stálo důvěry?** Organizace často objeví Goodhartův
   zákon tvrdou cestou, po čtvrtletí nebo roce zkresleného chování, a oprava
   stojí víc, než by stála prevence. Přineste skutečný incident, pokud nějaký
   máte, a vytěžte z něj poučení výslovně, místo abyste tiše pokračovali.

6. **Kde jsme předpokládali, že manipulace je problém osobní integrity, a ne
   racionální reakce na špatně navrženou motivaci?** Obviňování jednotlivců za
   předvídatelnou reakci na motivaci, kterou jste vytvořili, málokdy něco
   spraví a často důvěru dál poškodí. Přerámcujte každý incident manipulace,
   který si vybavíte, jako problém návrhu metriky, nikoli charakteru člověka, a
   ptejte se, jaké přepracování by mu zabránilo.

## Pohled podle sektorů

**Startup.** U malého týmu je nejrychlejší pojistkou přímý rozhovor: každý vidí
číslo a může se hned zeptat „počkat, proč to skočilo“. Skutečným rizikem je
zakladatel, který naváže metriku na příběh pro získávání investic (růst za
každou cenu) bez spárované pojistky, protože vnější investoři vyvíjejí přesně
ten druh vzdáleného tlaku s vysokými sázkami, který manipulaci činí lákavou.

**Malá firma.** Hotové nástroje často dodávají výchozí dashboardy postavené
kolem počtů (uzavřené tikety, vyřízené hovory), protože počty se snadno
počítají. Aktivně je převádějte na míry, kdekoli nástroj dovolí, a nenavazujte
žádné jediné číslo na bonus nebo hodnocení, dokud jste neurčili jeho pojistku.

**Velký podnik.** Dominantním rizikem je vzdálenost: metrika navržená
platformním týmem pro interní diagnostiku je o tři vrstvy řízení později
převzata a přeměněna v KPI, které by nikdo z jejích tvůrců nepoznal. Řiďte to
výslovně (téma 1.4): vyžadujte zdokumentovanou pojistku, než je jakákoli metrika
schválena pro hodnocení výkonu nebo výkonnostní přehled vedení.

**Státní správa.** Zveřejňované míry výkonu čelí nejsilnějšímu tlaku na
manipulaci ze všech kategorií v této knize, protože zmeškaný cíl může nést
rozpočtové nebo politické důsledky. V pevném rytmu auditujte samotnou
definici, nejen číslo, protože klasický vzorec manipulace ve veřejném sektoru
je tiché předefinování toho, kdo se počítá (čekací listina „vyřešená“
překlasifikováním toho, kdo čeká), místo skutečného zlepšení služby.

## Příklady

**Velký podnik.** Maloobchodní technologická firma stanovila cíl 99% pokrytí
automatizovanými testy ve všech službách, navázaný na týmové skóre kvality
používané v čtvrtletních revizích. Během dvou čtvrtletí pokrytí dosáhlo 99 % a
míra incidentů vzrostla. Audit zjistil, že týmy píší triviální testy, které
tvrdí, že funkce skončila bez vyvolání výjimky, čistě proto, aby uspokojily
nástroj pro pokrytí, zatímco skutečné testování hraničních případů se vůbec
nezlepšilo. Řešení nahradilo surový cíl pokrytí spárovanou metrikou: pokrytí
plus skóre mutačního testování (téma 4.2), které měří, zda testy skutečně
zachytí vložené chyby, což je mnohem těžší levně zmanipulovat.

**Státní správa.** Státní úřad pojištění v nezaměstnanosti byl měřen mediánem
dnů do první výplaty, zveřejňovaným jeho zákonodárnému sboru. Pod tlakem
dosáhnout cíle začala jedna regionální pobočka tiše překlasifikovat hůře
zpracovatelné nároky jako „neúplné“ a vylučovat je ze jmenovatele, což učinilo
zveřejněný medián vynikajícím, zatímco někteří žadatelé čekali mnohem déle,
než zpráva naznačovala. Nezávislý audit samotné definice, nejen čísla, praktiku
odhalil. Řešení úřadu zmrazilo definici, veřejně zveřejnilo kritéria vyloučení
a přidalo pojistku sledující samotnou míru neúplných nároků, takže skok v
překlasifikaci by nyní byl viditelný místo skrytý.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností vážného přístupu ke Goodhartovu zákonu je ušetřená předělávka.
Organizace, která navrhuje pojistky předem, vynaloží mírné množství úsilí
navíc na definici druhé metriky vedle první. Organizace, která tento krok
přeskočí, často promarní celé čtvrtletí i víc špatně namířeným úsilím, než se
zkreslení vynoří, a pak nese mnohem těžší cenu odčinění zmanipulovaného
chování a obnovy důvěry v číslo. Výše uvedený maloobchodní příklad je typický:
levné předejít, drahé napravit.

Celkové náklady vlastnictví (TCO) pojistky nejsou nulové: je to druhá
metrika, kterou je třeba definovat, instrumentovat a revidovat. Ale tyto
náklady jsou malé a pevné ve srovnání s neomezenými náklady motivace, která
měsíce tiše odměňuje špatné chování, než si toho někdo všimne. Každé téma po
tomto tuto vahu zohledňuje, a proto se párování s pojistkou objevuje jako
doporučení v celém zbytku knihy, nejen zde.

## Antivzory a úskalí

- **Zveřejnit motivovanou metriku bez pojistky:** nejčastější kořenová příčina
  zkresleného dashboardu v této knize.
- **Brát manipulaci jako osobní selhání:** obviňuje jednotlivce za racionální
  reakci na špatně navrženou motivaci a nic nespraví.
- **Auditovat číslo, ale nikdy definici:** klasický způsob selhání ve veřejném
  sektoru, kdy metrika vypadá dobře, protože se tiše změnilo, kdo se počítá.
- **Předpokládat, že metrika, která fungovala jako diagnostická, zůstane
  bezpečná, jakmile se stane hodnoticí:** vystavení se změní ve chvíli, kdy se
  připojí odměna, i když se nic jiného na metrice nezmění.
- **Navrhnout pojistku až po prvním incidentu manipulace:** oprava, která
  přichází, až když je škoda na důvěře už napáchána.
- **Ignorovat vzdálenost:** předpokládat, že metrika bude čtena tak, jak ji
  zamýšlel její návrhář, jakmile putuje několik vrstev řízení nebo veřejnou
  zprávu daleko od něj.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky se motivují ad hoc, bez ohledu na riziko
  manipulace, a zkreslení se objeví až poté, co kvalita nebo důvěra viditelně
  utrpí.
- **Úroveň 2, Rozvoj:** Některé týmy poznají manipulaci zpětně a neformálně
  upraví, ale chybí konzistentní praxe navrhování pojistek předem.
- **Úroveň 3, Standardizace:** Každá motivovaná metrika v celé organizaci
  vyžaduje před schválením zdokumentovanou pojistku a čtyři vzorce manipulace
  jsou pojmenovány a vyučovány.
- **Úroveň 4, Řízení:** Riziko manipulace se aktivně sleduje: definice se
  pravidelně auditují, dvojice pojistek se revidují, zda stále zachytí
  zkreslení, a incidenty manipulace se sledují jako samostatná metrika.
- **Úroveň 5, Orchestrace:** Organizace bere Goodhartův zákon jako trvalé
  návrhové omezení, automaticky revidované při každém navržení nové metriky, a
  dokáže ukázat konkrétní přepracování, která zabránila zkreslení dřív, než
  nastalo, a ne jen poté.

## Náměty k diskusi

1. Jaká je nejvýznamnější metrika v naší organizaci, která dnes nemá pojistku?
2. Viděli jsme někdy číslo, které se zlepšovalo, zatímco skutečnost se
   zhoršovala?
3. Kdo by si všiml, že se tiše změnila definice za některou z našich
   veřejných metrik?
4. Který ze čtyř vzorců manipulace (práh, definice, načasování, záměna) je naší
   organizaci nejbližší?
5. Kolik by nás stálo na důvěře zjištění, že se s významnou metrikou rok
   manipulovalo?

## Hlavní poznatky

- **Goodhartův zákon:** míra, která se stane cílem, přestává být dobrou mírou,
  a to platí pro každou metriku v této knize.
- Manipulace je **racionální reakce na motivaci**, ne charakterová vada;
  opravujte návrh motivace, ne lidi.
- Dávejte přednost **poměrům, mírám a kohortám** před surovými počty, kdekoli
  zachycují totéž chování.
- Každá motivovaná metrika potřebuje **pojistku**, navrženou zároveň, ne
  přidanou po odhalení zkreslení.
- Hlídejte čtyři vzorce manipulace jménem: **manipulace prahem, definicí,
  načasováním a záměnou**.
- **Vzdálenost** mezi návrhářem metriky a člověkem, jehož chování utváří,
  zvyšuje riziko zkreslení; kde můžete, držte ji krátkou.

## Odkazy a další četba

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): původ Goodhartova zákona.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): široce citované přeformulování, „když se míra stane cílem,
  přestává být dobrou mírou“.
- *Seeing Like a State*, James C. Scott (jak čitelné metriky zkreslují systémy,
  které měří, v měřítku národů).
- *The Tyranny of Metrics*, Jerry Z. Muller (knižní zpracování fixace na
  metriky a jejích nákladů v mnoha profesích).
- *Lean Analytics*, Alistair Croll a Benjamin Yoskovitz (metriky pro parádu
  versus použitelné metriky a návrh pojistek v prostředí startupu).
- Pokyny amerického Úřadu pro vládní odpovědnost (GAO) k měření výkonu a zákon
  GPRA Modernization Act: vykazování výkonu ve veřejném sektoru a riziko
  manipulace.
