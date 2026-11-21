# 3.4 Metriky aktivity a jejich meze

## Přehled a motivace

**Aktivita**, písmeno A ve SPACE (téma 3.1), počítá objem inženýrské práce
pozorovatelný ze systémové telemetrie: commity, otevřené pull requesty, počet
změněných řádků kódu, komentáře ke kódu v revizích. Je to nejsnáze měřitelná
dimenze SPACE, protože každá z těchto událostí se už automaticky zaznamenává v
nástrojích, které inženýrské týmy používají denně, a právě tato snadnost
měření dělá z této dimenze tu, u které je nejnebezpečnější přeceňovat její
váhu. Aktivita je skutečný, legitimní signál, pokud se používá opatrně. Použitá
jako samostatný zástupný ukazatel produktivity je nejvíc manipulovanou a nejvíc
zavádějící rodinou metrik v celé historii měření
[softwarového inženýrství](https://en.wikipedia.org/wiki/Software_engineering).

Jádrem problému je, že aktivita měří pohyb, ne hodnotu. Počet commitů
nerozliší commit, který elegantně vyřešil těžký problém, od commitu, který
rozdělil jednu smysluplnou změnu na pět, aby vypadal produktivněji (záměna z
tématu 1.2, uplatněná přímo na tuto rodinu metrik). Počet změněných řádků kódu
odměňuje rozvláčnost před mnohem cennější dovedností mazat zbytečný kód.
Inženýr, který stráví celý den hlubokým nerušeným přemýšlením, než napíše deset
elegantních, dobře otestovaných řádků, vypadá podle těchto metrik méně
„aktivní“ než ten, kdo každých dvacet minut nahrává mělké, nerevidované změny,
přestože první z nich velmi často vytváří mnohem víc skutečné hodnoty.

U velkých týmů je pokušení používat metriky aktivity k hodnocení jednotlivců
stálé a dobře zdokumentované, protože aktivitu lze snadno přiřadit konkrétní
osobě a snadno ji automaticky spočítat, na rozdíl od těžších a upřímnějších
signálů v ostatních dimenzích SPACE. Toto téma existuje právě proto, aby
pokušení pojmenovalo a dalo týmům slova a důkazy, jak mu odolat, protože jakmile
organizace začne jednotlivé inženýry řadit podle počtu commitů nebo řádků
kódu, škoda na spolupráci, kvalitě kódu a morálce je dobře zdokumentovaná a
těžko vratná.

## Klíčové zásady

- **Aktivita měří pohyb, ne hodnotu.** Je to legitimní kontextový signál, nikdy
  samostatný zástupný ukazatel produktivity.
- **Je to historicky nejvíc zneužívaná rodina metrik v měření softwarového
  inženýrství.** Berte tu historii jako varování, ne jako shodu okolností.
- **Řazení jednotlivců podle aktivity je téměř vždy škodlivé.** Poškozuje
  spolupráci, odměňuje viditelné zaneprázdnění a zve k manipulaci téměř
  okamžitě.
- **Data o aktivitě jsou nejužitečnější agregovaná, jako kontext pro ostatní
  dimenze,** ne jako samostatný signál o jedné osobě nebo týmu.
- **Hluboká, hodnotná práce na dashboardu aktivity často vypadá tiše.** Tato
  rodina metrik je strukturálně zkreslená proti přesně takovému přemýšlení,
  které přináší nejlepší inženýrské výsledky.

## Doporučení

### Nikdy neřaďte ani nehodnoťte jednotlivce podle hrubých počtů aktivity

To je nejtěžší a nejdůležitější pravidlo tohoto tématu. Počet commitů, řádky
kódu a počet pull requestů by se nikdy neměly objevit v individuálním
hodnocení výkonu, srovnávacím pořadí ani v žádném kontextu, kde na tom čísle
závisí odměna, postavení nebo reputace inženýra. Přímo to vyplývá ze zásady
vystavení motivacím z tématu 1.2: ve chvíli, kdy se aktivita stane motivační
metrikou jednotlivce, následuje manipulace téměř okamžitě a výsledné chování,
nafukování commitů, triviální dělení změn a vyhýbání se hluboké, nevděčné
práci, která vytváří málo viditelných událostí, organizaci aktivně škodí.

### Používejte data o aktivitě agregovaně, jako kontext, ne jako verdikt

Data o aktivitě se stávají skutečně užitečnými, když se agregují na úrovni týmu
a čtou se vedle ostatních dimenzí SPACE: prudký pokles aktivity commitů na
úrovni týmu, který se shoduje s růstem spokojenosti, může znamenat, že tým
konečně dostal prostor přemýšlet do hloubky a splácet technický dluh, tedy
pozitivní vzorec, ne negativní. Čtený izolovaně vypadá stejný pokles
alarmujícím dojmem. Kontext z ostatních dimenzí je to, co data o aktivitě
činí interpretovatelnými místo zavádějících.

### Dávejte přednost signálům aktivity blízkým kvalitě před hrubým objemem

Kde jsou data o aktivitě vůbec užitečná, dávejte přednost signálům upraveným o
kvalitu před hrubými počty: velikost pull requestu vzhledem k hloubce revize
(téma 2.9) nebo poměr nového kódu ke kódu odstraněnému, který může odhalit,
zda tým hromadí složitost, nebo ji aktivně zjednodušuje. Tyto upravené
signály jsou stále data dimenze aktivity, ale odolávají nejhrubší manipulaci,
kterou hrubé počty provokují.

### Sledujte výslovně vzorec manipulace záměnou v datech o aktivitě

Nejčastější způsob manipulace s metrikami aktivity je přesně vzorec záměny z
tématu 1.2: rozdělení skutečně smysluplné práce na mnoho malých, triviálních
událostí, aby se nafoukl počet. Pokud frekvence commitů nebo pull requestů
roste, zatímco podkladová složitost nebo velikost změn prudce klesá,
prošetřete to dřív, než uznáte skutečné zlepšení produktivity, se stejnou
diagnostickou disciplínou, jakou téma 2.10 doporučuje u frekvence nasazení.

### Výslovně pojmenujte a odrazujte divadlo aktivity

**Divadlo aktivity** (activity theater) je práce prováděná, vědomě či
nevědomě, především proto, že je viditelná a spočitatelná, a ne proto, že je
hodnotná: časté malé commity, nápadná aktivita pozdě v noci nebo viditelné
zaneprázdnění ve sdílených kanálech. Výslovné pojmenování tohoto vzorce
vašemu týmu a otevřenost v tom, že vedení k posuzování příspěvku nepoužívá
hrubou aktivitu, odstraní velkou část motivace, aby k němu vůbec docházelo.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Řazení jednotlivců podle aktivity | Jednoduché, snadno se počítá, připadá přímo použitelné | Zmanipuluje se téměř okamžitě; poškozuje spolupráci a morálku; měří špatnou věc |
| Žádné měření aktivity | Zcela se vyhne riziku zneužití | Ztrácí skutečně užitečný kontextový signál pro hledání vzorců na úrovni týmu |
| Agregovaná aktivita na úrovni týmu, čtená v kontextu | Dává užitečný kontext bez rizika pro jednotlivce | Vyžaduje disciplínu číst ji spolu s ostatními dimenzemi, ne izolovaně |
| Signály aktivity upravené o kvalitu | Odolávají nejhrubší manipulaci s hrubými počty | Složitější na výpočet a vysvětlení než prostý počet |

Ústředním napětím je **užitečnost versus riziko zneužití**. Data o aktivitě,
čtená opatrně agregovaně a v kontextu, jsou skutečně užitečná pro odhalení
vzorců, jako je neudržitelné tempo nebo tým, který tiše našel prostor pro
řešení technického dluhu. Stejná data použitá jako skóre karta jednotlivce
jsou téměř jednotně škodlivá. Napětí neřešte tím, že data o aktivitě
zcela zavrhnete, ale tím, že vybudujete tvrdé organizační pravidlo proti
individuálnímu použití a přitom dovolíte a dokonce podpoříte promyšlené,
kontextové použití na úrovni týmu.

## Otázky k diskusi s vaším týmem

1. **Byl někdo v naší organizaci někdy hodnocen, formálně nebo neformálně,
   podle hrubého počtu aktivity, jako jsou commity nebo řádky kódu?** Zeptejte
   se přímo a připravte se na nepříjemnou, ale nutnou odpověď. Toto zneužití se
   často děje tiše, mimochodem pronesenou poznámkou manažera, aniž by se
   kdy stalo oficiální politikou.

2. **Jak by divadlo aktivity vypadalo konkrétně u našeho týmu a viděli jsme
   známky, že se děje?** Pojmenování konkrétní, věrohodné podoby, kterou by tento
   vzorec u vašeho týmu mohl mít, mnohem usnadňuje jeho rozpoznání, pokud se
   začne objevovat.

3. **Když se pohnou data o aktivitě na úrovni týmu, interpretujeme je spolu s
   ostatními dimenzemi SPACE, nebo izolovaně?** Pokles aktivity čtený
   izolovaně vypadá znepokojivě. Stejný pokles čtený spolu se zlepšením
   spokojenosti nebo výkonu může vypadat jako skutečně pozitivní vzorec.
   Porovnejte svou skutečnou praxi revizí s tímto rozlišením.

4. **Viděli jsme někdy nárůst frekvence commitů nebo pull requestů doprovázený
   zmenšující se průměrnou velikostí změny, což naznačuje triviální dělení
   místo skutečného zisku produktivity?** Vezměte skutečná data a hledejte
   právě tento vzorec manipulace záměnou.

5. **Jak dnes mluvíme o tom, „kdo přispívá nejvíc“, a opírá se tento rozhovor
   implicitně o data o aktivitě i bez formální metriky?** Neformální,
   neměřené zkreslení ve prospěch viditelného zaneprázdnění může utvářet vnímání
   i odměňování i bez výslovné politiky založené na aktivitě. Přiznejte to
   upřímně.

6. **Jak vypadá u našeho týmu skutečně hodnotná, ale tichá práce, hluboké
   přemýšlení, pečlivý návrh, mentoring, a jak zajistíme, aby byla uznána, i
   když vytváří málo viditelných dat o aktivitě?** Tato otázka je pozitivním
   doplňkem předchozích: pojmenování toho, jak vypadá dobrá tichá práce,
   pomáhá ochránit ji před přehlédnutím ve prospěch hlasitější, snáze
   spočitatelné práce.

## Pohled podle sektorů

**Startup.** U malého, úzce spolupracujícího týmu je aktivita obvykle viditelná
bez jakéhokoli dashboardu a riziko řazení jednotlivců, před kterým toto téma
varuje, je menší jednoduše proto, že všichni už vědí, na čem kdo pracuje.
Rizikem je naopak zakladatel, který nevědomky upřednostňuje viditelně „zaneprázdněné“
chování při raných rozhodnutích o náboru nebo podílech.

**Malá firma.** Na data o aktivitě z vašich stávajících nástrojů se můžete
podívat, abyste získali obecný dojem o propustnosti týmu, ale odolejte
pokušení přímo srovnávat jednotlivé přispěvatele. Skutečná hodnota malého
týmu se často koncentruje v několika lidech, kteří dělají tichou práci s
vysokou pákou, kterou by pohled na počet commitů systematicky podcenil.

**Velký podnik.** Tady je pokušení řadit jednotlivce nejsilnější a nejškodlivější,
protože data o aktivitě jsou nejsnazší signál k vytažení pro proces hodnocení
výkonu zahrnující tisíce inženýrů a tlak najít *nějaký* kvantifikovatelný vstup
je skutečný. Vybudujte výslovnou, sdělenou a vynucovanou politiku proti
řazení jednotlivců podle aktivity a pravidelně auditujte praxi hodnocení
výkonu, abyste potvrdili, že se politika v praxi skutečně dodržuje, a nejen
deklaruje.

**Státní správa.** Metriky aktivity může být lákavé uvádět ve veřejné zprávě
jako důkaz produktivity („deset tisíc commitů za rok“), ale takový titulek je
téměř bezvýznamný a může vyvolat přesně špatnou pozornost, jakmile znalý
posuzovatel upozorní, že hrubá aktivita nevypovídá nic o výsledcích. Hlaste
místo toho data o výsledcích a výkonu (téma 3.3) a vyhněte se počtům aktivity
v jakékoli externí komunikaci.

## Příklady

**Velký podnik.** Vedení inženýrství jedné softwarové firmy začalo bez formální
politiky neformálně odkazovat na data o frekvenci commitů jednotlivců v
diskusích o povýšení. Interní revize, vyvolaná nesouvisejícím projektem
analýzy odchodů, zjistila, že inženýři pracující na nejsložitějších,
nejhodnotnějších systémech firmy, kde bylo před napsáním kódu zapotřebí
dlouhé období pečlivé návrhové práce, měli systematicky nižší počty commitů
než inženýři na jednodušších, inkrementálněji vyvíjených systémech, a byli
proto nenápadně znevýhodňováni v rozhovorech o povýšení. Vedení vydalo
výslovnou, sdělenou politiku zakazující odkazy na počty aktivity v diskusích
o výkonu a povýšení a přesunulo podklady pro povýšení k přístupu k výkonu z
více signálů z tématu 3.3.

**Státní správa.** Agentura digitálních služeb, pod tlakem prokázat
produktivitu zákonodárnému kontrolnímu výboru, původně navrhla uvádět celkový
počet commitů a napsaných řádků kódu napříč svým inženýrským programem jako
důkaz dodané hodnoty. Interní technický poradce se ohradil a správně poznamenal,
že tento rámec vyvolává přesně špatnou pozornost, protože technicky gramotný
člen výboru snadno upozorní, že hrubý objem kódu nevypovídá nic o tom, zda
kód fungoval nebo na něm záleželo. Revidovaná zpráva agentury místo toho
použila metriky výsledků (téma 5.3): snížení chyb hlášených občany a zvýšení
úspěšného dokončení samoobsluhy, které při dotazování výboru obstály daleko
lépe než čísla aktivity.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností správného používání metrik aktivity, tedy kontextově a ne jako
skóre karet jednotlivců, je odvrácená škoda: organizace, které jednotlivé
inženýry řadí podle aktivity, spolehlivě vidí chování zaměřené na manipulaci,
sníženou spolupráci (inženýři chrání vlastní viditelný výstup místo pomoci
kolegovi) a systematické zkreslení proti hluboké práci s vysokou pákou, která
často vytváří nejvíc hodnoty a přitom generuje nejméně viditelné aktivity.
Zvrátit tuto škodu, jakmile se usadí v kultuře hodnocení výkonu, je skutečně
obtížné a pomalé.

Celkové náklady vyhnutí se této pasti jsou většinou organizační disciplína:
výslovná, důsledně vynucovaná politika proti řazení jednotlivců podle
aktivity a závazek investovat místo toho do těžšího, upřímnějšího měření
výkonu popsaného v tématu 3.3. Tato disciplína stojí méně než špatně
nasměrovaná rozhodnutí o povýšení, poškozená spolupráce a manipulativní
chování, které metriky aktivity jednotlivců v čase spolehlivě vytvářejí.

## Antivzory a úskalí

- **Řazení jednotlivců podle počtu commitů nebo řádků kódu:** nejškodlivější a
  historicky nejčastější zneužití v celé této knize.
- **Divadlo aktivity:** práce prováděná primárně pro viditelnost, ne pro
  hodnotu, zcela předvídatelná reakce na hodnocení založené na aktivitě.
- **Interpretace poklesu aktivity na úrovni týmu izolovaně, bez kontroly
  ostatních dimenzí SPACE:** může zaměnit skutečně pozitivní vzorec za
  znepokojivý.
- **Uvádění hrubých počtů aktivity v externí komunikaci nebo komunikaci pro
  vedení:** vyvolává přesně špatnou pozornost a o skutečné hodnotě říká málo.
- **Systematické podceňování hluboké, pečlivé práce, která vytváří málo
  viditelných událostí:** strukturální zkreslení zabudované do celé této rodiny
  metrik.
- **Neformální, nepodložené politikou zkreslení ve prospěch aktivity, které se
  vkrádá do rozhovorů o povýšení nebo hodnocení:** škodlivé i bez oficiální
  metriky za ním.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky aktivity se používají, formálně či
  neformálně, k hodnocení nebo řazení jednotlivců, bez povědomí o riziku.
- **Úroveň 2, Rozvoj:** Existuje určité povědomí o riziku, ale žádná výslovná
  politika nebrání tomu, aby data o aktivitě neformálně ovlivňovala hodnocení
  nebo diskuse o povýšení.
- **Úroveň 3, Standardizace:** Výslovná, sdělená politika v celé organizaci
  zakazuje řazení jednotlivců podle aktivity a data o aktivitě se používají
  jen v agregovaném kontextu na úrovni týmu.
- **Úroveň 4, Řízení:** Praxe hodnocení výkonu a povýšení se pravidelně
  auditují, aby se potvrdilo dodržování politiky v praxi, a signály aktivity
  upravené o kvalitu nahrazují hrubé počty všude, kde se data o aktivitě vůbec
  používají.
- **Úroveň 5, Orchestrace:** Organizace prokazatelně posunula kulturu hodnocení
  od metrik aktivity k přístupu k výkonu z více signálů z tématu 3.3,
  s viditelným zlepšením spolupráce a sníženou manipulací jako důkazem, že
  posun fungoval.

## Náměty k diskusi

1. Cítil se tu někdy někdo hodnocen, i neformálně, podle toho, jak „zaneprázdněně“ vypadala jeho aktivita?
2. Jak by divadlo aktivity vypadalo konkrétně u našeho týmu?
3. Máme výslovnou písemnou politiku proti řazení jednotlivců podle aktivity a dodržuje se skutečně?
4. Jaká tichá, vysoce hodnotná práce u našeho týmu dnes vytváří nejméně viditelných dat o aktivitě?
5. Jak bychom přepracovali podklady hodnocení výkonu, abychom z nich počty aktivity zcela odstranili?

## Hlavní poznatky

- Aktivita měří **pohyb, ne hodnotu**; je to historicky nejvíc zneužívaná rodina
  metrik v softwarovém inženýrství.
- **Nikdy neřaďte ani nehodnoťte jednotlivce** podle hrubých počtů aktivity;
  je to nejtěžší a nejdůležitější pravidlo tohoto tématu.
- Používejte data o aktivitě **agregovaně, jako kontext** pro ostatní dimenze
  SPACE, nikdy jako samostatný verdikt.
- V této rodině metrik sledujte výslovně **divadlo aktivity** a **vzorec
  manipulace záměnou** (téma 1.2).
- Hluboká, vysoce hodnotná práce často vytváří **nejméně viditelných dat o
  aktivitě**; chraňte ji před systematickým podceňováním.

## Odkazy a další četba

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco a Timothy
  Lister (argument proti měření inženýrů podle viditelného zaneprázdnění).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal
  Newport (hodnota tiché, nepřerušované práce, kterou metriky aktivity
  systematicky podhodnocují).
- *The Tyranny of Metrics*, Jerry Z. Muller (fixace na metriky a její
  náklady, přímo použitelné pro hodnocení založené na aktivitě).
