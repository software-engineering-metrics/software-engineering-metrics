# 7.3 Inflace metrik a rizika ředění kvality

## Přehled a motivace

Toto téma pojmenovává přímo a konkrétně dva způsoby selhání, před nimiž téma
7.1 varovalo, že se proti nim musí chránit celý rámec této knihy, jakmile se
vývoj s podporou AI stane běžnou praxí: **inflaci metrik**, tedy čísla, která
rostou bez odpovídající skutečné hodnoty, a **ředění kvality**, tedy
postupnou erozi kvality kódu, která předbíhá současnou schopnost odvětví ji
odhalit stávajícími postupy revize a testování. Nejde o nové kategorie rizik,
které by kniha dosud nepojmenovala: inflace metrik je Goodhartův zákon z tématu
1.2 a manipulace záměnou z tématu 1.2 uplatněné ve velkém a ředění kvality je
mezera mezi pokrytím a účinností z tématu 4.2 a obava z uniklých vad z tématu
5.1, obojí zesílené. Novinkou je rychlost a rozsah, v jakém může generativní
AI vytvářet oba způsoby selhání současně, rychleji, než byly navrženy
stávající pojistky většiny organizací, aby je zachytily.

Konkrétní mechanismus, o který tu jde, je nenápadný: kód generovaný AI
velmi často vypadá správně. Drží se známých idiomů, používá věrohodná jména
proměnných a povrchní čtení projde spolehlivěji než skutečně nedbalý kód psaný
lidmi, právě proto, že vznikl trénováním na obrovském korpusu kódu, který
vypadal správně. Kvůli tomu je těžší, aby lidský recenzent zachytil vady v kódu
generovaném AI revizí typu „vypadá to správně?“, která chytá mnoho chyb
zavedených lidmi, protože verze generovaná AI je ve statistickém smyslu
výslovně optimalizována tak, aby vypadala správně, ať už správná je, nebo ne.

Pro velké týmy se rizika tohoto tématu s měřítkem kumulují způsobem, který by
měl znepokojit zejména velké podniky a státní správu: inflace metrik v
desítkách týmů současně může vytvořit falešný signál zlepšené produktivity v
celé organizaci, jehož rozmotání vyžaduje značný čas a analýzu, přesně jak
ukázal příklad fintech společnosti z tématu 7.1. Ředění kvality, které
předbíhá schopnost detekce, je ještě vážnější v regulovaných, bezpečnostně
kritických nebo veřejně důvěrných kontextech, kde cena neodhalené vady, která
se dostane do produkce, nese důsledky daleko za bezprostřední inženýrský
rozměr.

## Klíčové zásady

- **Inflace metrik a ředění kvality jsou zesílené verze rizik, která kniha už
  pojmenovala**, nikoli zcela nové kategorie; stávající pojistky stále platí,
  ale musí pracovat tvrději.
- **Vlastnost kódu generovaného AI „vypadá správně“ ztěžuje lidské revizi
  založené na rozpoznávání vzorů zachytit nenápadné vady.** Je to riziko
  odlišné od běžné lidské chyby.
- **Rychlost této změny může předběhnout schopnost organizace přizpůsobit
  pojistky**, což vytváří skutečné, časově omezené okno expozice.
- **Stávající metriky kvality (část 4) zůstávají cenné, ale vzhledem k tomuto
  novému profilu rizik může být nutné je překalibrovat**, nikoli nahradit.
- **Samotná schopnost detekce potřebuje záměrnou investici**, protože postupy
  revize a testování, které kniha pokrývá, vznikly před tím, než toto konkrétní
  riziko existovalo v takovém měřítku.

## Doporučení

### Překalibrujte prahy míry selhání změn a uniklých vad pro práci s intenzivním využitím AI

Kde tým nebo oblast kódu přijaly asistenci AI ve velké míře, použijte
sledování vážené závažností z témat 2.4 a 5.1 se zvýšenou citlivostí, alespoň
dokud vaše organizace nesestaví dost důkazů (téma 7.2), aby věděla, zda
historický vztah mezi těmito metrikami a skutečným rizikem platí beze změny
právě pro práci s podporou AI. Berte tuto rekalibraci jako dočasný postoj
sběru důkazů, nikoli trvalý neprozkoumaný předpoklad v žádném směru.

### Investujte konkrétně do schopnosti detekce, která odolává problému „vypadá správně“

Tradiční revize kódu, která se silně opírá o recenzentovo rozpoznávání, co
vypadá správně, je právě vůči věrohodně vypadajícímu, ale nenápadně
nesprávnému kódu generovanému AI oslabena. Odpovídajícím způsobem víc
investujte do metod detekce, které nespoléhají na vizuální rozpoznávání
vzorů: [mutační testování](https://en.wikipedia.org/wiki/Mutation_testing)
(téma 4.2), které testuje skutečné chování, nikoli vzhled, a testování
založené na vlastnostech či invariantech, které ověřuje logickou správnost,
nikoli povrchní věrohodnost. Obojí získává nepřiměřeně na hodnotě právě
kvůli této změně.

### Sledujte inflaci metrik v celém dodávkovém řetězci, nejen v bodě generování kódu

Inflace metrik z vývoje s podporou AI se neomezuje na fázi kódování; může se
šířit celým řetězcem cycle time (téma 2.6): větší objem pull requestů
generovaných AI může nafouknout metriky propustnosti pull requestů (téma 2.9),
zatímco užitečný signál, který měla tato metrika původně zachycovat, tedy
skutečná propustnost týmu, zůstává stejný nebo dokonce klesá, jakmile se
správně započítá zátěž revize a náklady na opravy. Zkontrolujte celou sadu
metrik z hlediska tohoto vzorce šíření, nejen nejzřejmější, přímo s AI
související metriky.

### Sestavte výslovný, časově omezený plán rekalibrace místo trvalého postoje podezíravosti

Zvýšená pozornost, kterou toto téma doporučuje, je vhodná během aktivního
období přijímání a nejistoty, ale neměla by se stát trvalou, neprozkoumanou
daní z práce s podporou AI na neurčito. Jakmile vaše organizace sestaví
skutečné důkazy disciplínou měření z tématu 7.2, upravte prahy a pojistky
podle toho, co důkazy skutečně ukazují: zpřísněte tam, kde se riziko
potvrdí, a uvolněte tam, kde ne, místo toho, abyste riziko buď úplně
ignorovali, nebo ke každému kousku kódu s podporou AI přistupovali s trvalou,
nerozlišující podezíravostí bez ohledu na hromadící se důkazy.

### Komunikujte toto riziko otevřeně a nepovažujte ho za důvod k odporu proti přijetí AI

Pojímejte pokyny tohoto tématu jako řízení rizik u skutečně cenné nové
schopnosti, ne jako argument proti vývoji s podporou AI obecně. Organizace,
která tato konkrétní, pojmenovaná rizika jasně komunikuje a staví proti nim
přiměřené pojistky, přesně jak tato kniha doporučuje u každé jiné metriky a
techniky, které pokrývá, přijímá asistenci AI bezpečněji a udržitelněji než
ta, která riziko buď ignoruje, nebo v něm vidí důvod k plošnému odporu vůči
skutečně užitečné sadě nástrojů.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádná rekalibrace, práce s podporou AI se bere stejně jako kód psaný lidmi | Jednoduché, žádná změna procesu | Přehlíží konkrétní profil zvýšeného rizika, který naznačují důkazy |
| Plošná, trvalá zvýšená pozornost ke všemu kódu s podporou AI | Maximalizuje krátkodobé snížení rizika | Neudržitelná daň ze skutečně cenné schopnosti; ignoruje hromadící se důkazy |
| Časově omezená rekalibrace řízená důkazy | Vyvažuje řízení rizik s udržitelným přijetím | Vyžaduje trvalou disciplínu měření (téma 7.2), aby se vědělo, kdy pozornost uvolnit |
| Investice do metod detekce odolných vůči vadám „vypadá správně“ | Řeší konkrétní nové riziko přímo a trvale | Vyžaduje počáteční investici do infrastruktury mutačního testování a testování založeného na vlastnostech |

Hlavní napětí je mezi **opatrností a rychlostí přijetí**. Nadměrná, trvalá
opatrnost promarní velkou část skutečné hodnoty vývoje s podporou AI;
nedostatečná opatrnost riskuje inflaci metrik a ředění kvality, které toto
téma pojmenovává, potenciálně ve značném měřítku, než budou odhaleny.
Napětí vyřešíte časově omezeným přístupem řízeným důkazy, který toto téma
doporučuje: zvýšená pozornost nyní, kalibrovaná dolů či nahoru, jak se
hromadí skutečné důkazy z disciplíny měření tématu 7.2, místo trvalé plošné
politiky nebo neprozkoumaného předpokladu, že se nic nezměnilo.

## Otázky k diskusi s vaším týmem

1. **Překalibrovali jsme prahy míry selhání změn nebo uniklých vad pro práci s
   intenzivním využitím AI, nebo uplatňujeme prahy z doby před AI beze
   změny?** Pokud beze změny, promluvte si o tom, zda to odráží záměrné
   rozhodnutí založené na důkazech, nebo prostě nepozornost k otázce.

2. **Máme metody detekce, jako je mutační testování, které nespoléhají na
   vizuální rozpoznávání vzorů recenzentem, nebo je náš proces revize zcela
   závislý na lidských očích, které posuzují, zda kód „vypadá správně“?**
   Je to konkrétní zranitelnost, kterou toto téma identifikuje; poctivě
   posuďte svou současnou schopnost detekce vůči ní.

3. **Rozšířila se inflace metrik z fáze kódování do našich metrik pull
   requestů nebo nasazení a všimli bychom si toho?** Projděte celý řetězec
   cycle time a hledejte tento vzorec šíření, nejen nejzřejmější místo vzniku.

4. **Vychází naše současná zvýšená pozornost ke kódu s podporou AI, pokud
   nějaká je, z nashromážděných důkazů, nebo je to neprozkoumaná, neomezená
   výchozí volba, která se nikdy nepřehodnotila?** Probraťte, jaké důkazy by
   se musely nashromáždit, než byste zvážili uvolnění nebo další zpřísnění
   současných pojistek.

5. **Jak interně komunikujeme rizika tohoto tématu: jako důvod k opatrnosti a
   přiměřeným pojistkám, nebo jako skrytý argument proti přijetí AI
   obecně?** Buďte upřímní v tom, jak tento rozhovor váš tým skutečně
   přijímá, protože sdělení přijaté jako plošný odpor málokdy vyvolá
   přiměřenou, na důkazech založenou reakci, kterou toto téma doporučuje.

6. **Jak by vypadalo, kdyby naše organizace zjistila až ve velkém měřítku, že
   inflace metrik i ředění kvality probíhaly současně a bez povšimnutí?**
   Tento konkrétní, poněkud nepříjemný scénář stojí za to pojmenovat výslovně
   jako konkrétní selhání, jemuž mají pojistky tohoto tématu zabránit.

## Pohled podle sektorů

**Startup.** Rychlé přijetí s omezenou kapacitou revize činí rizika tohoto
tématu pro malý tým obzvlášť akutní; problém detekce „vypadá správně“ se hůř
zachycuje s menším počtem méně specializovaných recenzentů. Investujte včas
alespoň do odlehčeného mutačního testování nejkritičtějších cest kódu, i když
komplexní pokrytí zatím není proveditelné.

**Malá firma.** Formální procesy rekalibrace jsou v tomto měřítku pravděpodobně
zbytečné, ale prosté, výslovné povědomí, že kód generovaný AI si zaslouží o
něco skeptičtější čtení než obvykle, právě proto, že bývá důvěryhodněji
správný, než ve skutečnosti je, nestojí nic a přímo řeší hlavní obavu tohoto
tématu.

**Velký podnik.** Inflace metrik i ředění kvality se ve velkém měřítku
výrazně kumulují, protože falešný signál nebo neodhalený problém kvality
napříč desítkami týmů současně má mnohem větší následky a je mnohem těžší
ho rozmotat než stejný problém u jediného týmu. Investujte záměrně do
vylepšení schopnosti detekce v celé organizaci (infrastruktura mutačního
testování, přijetí testování založeného na vlastnostech) a do časově
omezené disciplíny rekalibrace, kterou toto téma doporučuje, sledované
centrálně.

**Státní správa.** Důsledky neodhaleného ředění kvality jsou zvlášť vážné v
regulovaných, bezpečnostně kritických nebo veřejně důvěrných kontextech, které
jsou u vládních systémů běžné. Uplatněte zvýšenou pozornost řízenou důkazy
konkrétně na změny s podporou AI v cestách kódu s vysokými následky (logika
vážení expozice a zneužitelnosti z tématu 6.4 se zde uplatní obdobně) a buďte
připraveni prokázat auditorovi nebo kontrolnímu orgánu, jaká přesně schopnost
detekce proti tomuto konkrétnímu riziku existuje.

## Příklady

**Velký podnik.** Inženýrský tým zpracování pojistných událostí jedné
pojišťovny přijal asistenci AI při programování v širokém rozsahu a po šesti
měsících si všiml postupného, ale měřitelného nárůstu uniklých vad konkrétně ve
složité podmíněné logice, tedy v kódu, kde je nenápadně chybné ošetření
okrajových případů pro nástroje AI nejsnazší věrohodně vygenerovat a pro
recenzenta nejtěžší zachytit pouhou prohlídkou. Šetření potvrdilo vzorec
„vypadá správně“, který toto téma popisuje: vadný kód důsledně používal
idiomatické, povědomě vypadající vzory, které prošly revizí, aniž by vyvolaly
takovou pozornost, jakou by mohl získat zjevně neobvyklý nebo neohrabaný kus
kódu psaného člověkem. Reakce týmu cílila mutační testování konkrétně na
složitou podmíněnou logiku v celé společnosti, tedy na metodu detekce odolnou
vůči problému povrchní věrohodnosti, a během dvou čtvrtletí naměřila výrazný
pokles této konkrétní kategorie vad.

**Státní správa.** Daňový úřad, který pilotoval vývoj s podporou AI u části
údržby svého výpočetního jádra, zabudoval disciplínu časově omezené
rekalibrace, kterou toto téma doporučuje, od samého začátku a stanovil
výslovné šestiměsíční období sběru důkazů se zvýšenými požadavky na revizi u
změn výpočetní logiky s podporou AI. Shromážděné důkazy neukázaly statisticky
smysluplný rozdíl v míře vad u dobře vymezených, úzkých změn, ale potvrdily
zvýšené riziko u širších, architektonicky významnějších změn s podporou AI.
Výsledná politika úřadu uvolnila zvýšenou pozornost u kategorie úzkých změn a
zároveň ji u architektonicky významných změn udržela a dokonce posílila, což
je přiměřený výsledek založený na důkazech, jaký by nevytvořil ani extrém
„žádná rekalibrace“, ani extrém „plošná trvalá pozornost“.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost záměrné ochrany proti inflaci metrik a ředění kvality spočívá v
tom, že se vyhnete přesně scénáři, který ukazuje příklad pojišťovny výše:
neodhalenému, postupně se kumulujícímu problému kvality, jehož odhalení a
náprava po faktu stojí mnohem víc, než by proaktivně stála investice do
detekce, tedy infrastruktura mutačního testování cílená na nejrizikovější
kód.

Celkové náklady vlastnictví (TCO) zahrnují investici do schopnosti detekce,
kterou toto téma doporučuje, a průběžnou disciplínu rekalibrace založené na
důkazech místo obou extrémů, trvalé podezíravosti nebo trvalé nepozornosti.
Tyto náklady jsou mírné a časově omezené ve srovnání s rizikem, že zůstane
neodhalen závažný, rozsáhlý problém kvality právě proto, že byl, samotnou
povahou toho, jak tyto nástroje generují kód, navržen tak, aby vypadal
správně pro procesy revize, které organizace už měla zavedené.

## Antivzory a úskalí

- **Uplatňovat prahy a metody detekce z doby před AI beze změny:** přehlíží
  konkrétní profil zvýšeného rizika, který naznačují důkazy.
- **Spoléhat se výhradně na lidskou revizi založenou na rozpoznávání vzorů u
  kódu generovaného AI:** je zvlášť zranitelná problémem „vypadá správně“,
  který toto téma identifikuje.
- **Přehlédnout šíření inflace metrik za bod generování kódu:** falešný signál
  se může nepozorovaně rozšířit celým dodávkovým řetězcem.
- **Trvalá, neprozkoumaná plošná pozornost bez rekalibrace založené na
  důkazech:** neudržitelně promarňuje velkou část skutečné hodnoty vývoje s
  podporou AI.
- **Komunikovat rizika tohoto tématu jako plošný odpor vůči přijetí AI místo
  přiměřeného řízení rizik:** podkopává bezpečnost i přijetí.
- **Žádná investice do schopnosti detekce cílené na tento nový profil rizik:**
  nechává organizaci závislou na metodách revize, které toto téma ukázalo jako
  vůči němu zvlášť oslabené.

## Model zralosti

- **Úroveň 1, Zahájení:** Žádné povědomí o riziku inflace metrik nebo ředění
  kvality specifickém pro vývoj s podporou AI; stávající pojistky a metody
  detekce se uplatňují beze změny.
- **Úroveň 2, Rozvoj:** Určité povědomí existuje, ale rekalibrace je ad hoc a
  investice do schopnosti detekce specifické pro toto riziko nebyla učiněna.
- **Úroveň 3, Standardizace:** Překalibrované prahy a metody detekce odolné
  vůči problému „vypadá správně“ (mutační testování a testování založené na
  vlastnostech) se důsledně uplatňují na práci s podporou AI.
- **Úroveň 4, Řízení:** Časově omezená disciplína rekalibrace řízená důkazy
  aktivně upravuje pozornost podle nashromážděných dat a šíření inflace
  metrik se aktivně sleduje v celém řetězci.
- **Úroveň 5, Orchestrace:** Organizace má vyspělý, přiměřený, nepřetržitě se
  vyvíjející postoj k řízení rizik vývoje s podporou AI, komunikovaný otevřeně,
  který ani nepromarňuje jeho hodnotu přílišnou opatrností, ani nevystavuje
  organizaci neodhalenému ředění kvality.

## Náměty k diskusi

1. Viděli jsme ve vlastním kódu s podporou AI nějaký raný důkaz vzorce vad „vypadá správně“?
2. Která metoda detekce by pro nás nejpříměji řešila konkrétní riziko tohoto tématu?
3. Rozšířila se inflace metrik z asistence AI do některé z našich navazujících metrik pipeline?
4. Je naše současná pozornost ke kódu s podporou AI založena na důkazech, nebo je to neprozkoumaná výchozí volba?
5. Jak náš tým pokyny tohoto tématu skutečně přijímá: jako řízení rizik, nebo jako odpor vůči přijetí AI?

## Hlavní poznatky

- Inflace metrik a ředění kvality jsou **zesílené verze rizik, která kniha už
  pojmenovala**, a vyžadují, aby stávající pojistky pracovaly tvrději, nikoli
  zcela nové rámce.
- Sklon kódu generovaného AI **„vypadat správně“** konkrétně oslabuje
  tradiční lidskou revizi kódu založenou na rozpoznávání vzorů.
- Investujte do **metod detekce odolných vůči povrchní věrohodnosti**, zejména
  do mutačního testování a testování založeného na vlastnostech.
- Uplatněte postoj **časově omezené rekalibrace řízené důkazy**, nikoli
  trvalé plošné podezíravosti nebo trvalé neprozkoumané důvěry.
- **Komunikujte toto riziko jako přiměřené řízení rizik**, ne jako argument
  proti přijetí AI, aby se podpořila bezpečnost i udržitelné používání.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (disciplína spárované rychlosti a stability, kterou
  toto téma uplatňuje na novou kategorii rizik).
- Jia, Yue, a Mark Harman, „An Analysis and Survey of the Development of
  Mutation Testing“, *IEEE Transactions on Software Engineering* (2011):
  metoda detekce, která podle tohoto tématu nabývá nepřiměřeně na hodnotě.
- Výzkum GitHubu o programování ve dvojici s AI a produktivitě vývojářů
  (odvětvová data o výsledcích a rizicích vývoje s podporou AI).
- *The Tyranny of Metrics*, Jerry Z. Muller (fixace na metriky a riziko
  manipulace, přímo relevantní pro obavu z inflace metrik, kterou toto téma
  pojmenovává).
