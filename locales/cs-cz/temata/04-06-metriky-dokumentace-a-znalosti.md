# 4.6 Metriky dokumentace a znalostí

## Přehled a motivace

Toto téma uzavírá část 4 měřením, zda jsou znalosti potřebné k bezpečné údržbě
kódové báze skutečně zdokumentované a dohledatelné, a ne jen zda dokumentace
technicky někde existuje. Téma 3.5 se zabývalo komunikací a spoluprací jako
otázkou zkušenosti vývojářů; toto téma se zabývá toutéž podkladovou věcí,
dostupností znalostí, ze strany kódu: má nový inženýr, nebo stávající inženýr
pracující na neznámém kódu, to, co potřebuje k bezpečné změně, nebo ty znalosti
žijí jen v hlavách zmenšujícího se počtu dlouholetých lidí?

Výzva měření je zde skutečně těžká, těžší než u většiny ostatních metrik v této
knize, protože kvalita a užitečnost dokumentace jsou ze své podstaty
subjektivnější než procento pokrytí nebo skóre složitosti. Přístup tohoto tématu
spočívá v měření zástupných ukazatelů užitečnosti, ne existence: jak často se k
dokumentaci skutečně přistupuje, jak často se opakovaně klade tatáž otázka,
přestože zdokumentovaná odpověď existuje, a jak dlouho trvá někomu, kdo systém
nezná, než se v něm stane produktivním. Žádný z těchto zástupných ukazatelů
není sám o sobě dokonalý, ale společně dávají mnohem upřímnější obraz než
počítání wiki stránek nebo souborů README, které kódová báze obsahuje.

U velkých týmů se starosti tohoto tématu násobí s délkou působení lidí v
organizaci a fluktuací způsoby, které se snadno podceňují, dokud věc nevynutí
krize: systém udržovaný roky stejnými dvěma inženýry může fungovat naprosto
dobře téměř bez písemné dokumentace, až do chvíle, kdy oba ti inženýři odejdou
ve stejném roce, a tehdy organizace zjistí, že znalosti nebyly nikdy nikde
trvale zachyceny. Velké podniky a státní správa, s typicky delší životností
systémů a nejistější kontinuitou personálu než startup, nesou toto riziko
akutněji než většina.

## Klíčové zásady

- **Existence dokumentace není totéž co užitečnost dokumentace.** Měřte, zda
  skutečně pomáhá, ne jen zda je přítomna.
- **Opakované otázky navzdory zdokumentovaným odpovědím ukazují problém
  dohledatelnosti, ne problém úsilí o dokumentaci.** Víc obsahu není vždy
  řešením.
- **Doba zapracování do produktivního příspěvku je silný, praktický zástupný
  ukazatel** celkového zdraví znalostí, přímo navazující na metriky
  spolupráce z tématu 3.5.
- **Znalosti, které žijí jen v hlavách lidí, jsou riziko trvanlivosti,** ne
  stabilní, udržitelný stav, bez ohledu na to, jak dobře dnes fungují.
- **Dokumentace chátrá.** Stránka, která byla před rokem přesná, může být dnes
  aktivně zavádějící, a samotnou zastaralost je třeba sledovat.

## Doporučení

### Sledujte přístupy k dokumentaci a její zastaralost, ne jen existenci

Kde to vaše platforma pro dokumentaci podporuje, sledujte, jak často se stránky
skutečně zobrazují, a zvlášť, jak dlouho uplynulo od poslední aktualizace
stránky vzhledem k tomu, jak často se mění systém, který popisuje (porovnání s
daty o změnovosti z tématu 4.3 je zde přímo užitečné). Stránka popisující systém,
který se od poslední úpravy stránky podstatně změnil, je silným kandidátem na
aktivně zavádějící, a ne pouze nepomáhající, a tento signál zastaralosti
zaslouží alespoň tolik pozornosti jako sledování, zda dokumentace vůbec existuje.

### Hlídejte opakované otázky jako signál dohledatelnosti

Pokud se v týmovém chatovacím kanálu nebo při zapracování opakovaně klade
táž otázka, přestože zdokumentovaná odpověď technicky někde existuje, tento
vzorec odhaluje problém dohledatelnosti, odpověď není tam, kde ji lidé přirozeně
hledají, a ne problém úsilí o dokumentaci, který by vyřešilo další psaní.
Sledujte opakující se otázky výslovně a využijte je k prioritizaci
přeorganizování nebo lepšího zpřístupnění existujícího obsahu před psaním dalšího.

### Měřte dobu zapracování do prvního smysluplného, samostatného příspěvku

Tato metrika, představená v tématu 3.5 jako signál spolupráce, je stejnou měrou
signálem zdraví dokumentace a znalostí ze strany kódu. Soustavně krátká,
předvídatelná doba zapracování naznačuje skutečně dostupné, přesné znalosti;
dlouhá, velmi proměnlivá doba, zejména taková, která silně závisí na tom, kdo
konkrétně nového člena týmu zapracovává, naznačuje znalosti, které jsou
nebezpečně soustředěny v individuální paměti místo v trvalé, písemné podobě.

### Určete a výslovně prioritizujte nezdokumentované oblasti kritických znalostí

Porovnejte data o koncentraci znalostí (analýza
[bus factoru](https://en.wikipedia.org/wiki/Bus_factor) z tématu 3.5) s
pokrytím dokumentací: systém s bus factorem jedna a bez smysluplné dokumentace
je závažné, násobící se riziko, které zaslouží prioritní pozornost před dobře
zdokumentovaným systémem se stejně nízkým bus factorem, protože dokumentace
poskytuje alespoň částečné zmírnění, zatímco se školí vyhrazený nástupce.

### Berte dluh v dokumentaci jako kategorii v backlogu technického dluhu

Místo sledování mezer v dokumentaci odděleně a neformálně zahrňte významné
mezery v dokumentaci do téhož viditelného, kvantifikovaného backlogu popsaného
v tématu 4.5, zejména u kritických systémů s nízkým bus factorem, aby práce na
dokumentaci spravedlivě soutěžila o prioritní kapacitu a nebyla věčně
odkládána jako úkol s nižším statusem než náprava dluhu zaměřená na kód.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádné měření dokumentace | Nízká režie | Riziko znalostí zůstává neviditelné, dokud objev nevynutí krize |
| Počítání existence dokumentace (počet stránek, přítomnost README) | Jednoduché, snadno se hlásí | Nevypovídá nic o užitečnosti, přesnosti ani dohledatelnosti |
| Sledování přístupů a zastaralosti | Odhaluje skutečnou užitečnost a chátrání | Vyžaduje analytiku platformy dokumentace a průběžnou disciplínu revizí |
| Doba zapracování jako zástupný ukazatel | Praktická, konkrétní, přímo spojená se skutečným obchodním dopadem | Nepřímá; rychlost zapracování ovlivňují i jiné faktory než dokumentace |

Ústředním napětím je **měřitelnost versus smysl**. Existenci dokumentace lze
triviálně spočítat a neříká vám téměř nic užitečného. Skutečná užitečnost, zda
někdo dokáže zdokumentované znalosti najít a spolehnout se na ně, když je
potřebuje, je to, na čem skutečně záleží, ale hůř se měří přímo. Napětí řešte
kombinací zástupných ukazatelů, které toto téma doporučuje, tedy vzorců
přístupů, zastaralosti vzhledem ke změnovosti, opakovaných otázek a doby
zapracování, přičemž přijměte, že žádný z nich není dokonalý, ale jejich shoda
je mnohem smysluplnější než samotný počet existujících dokumentů.

## Otázky k diskusi s vaším týmem

1. **Existuje u našeho nejkritičtějšího systému s nejnižším bus factorem
   skutečně smysluplná, přesná dokumentace, nebo by odcházející expert vzal
   s sebou většinu skutečných znalostí?** Je to nejostřejší, nejkonkrétnější
   podoba ústřední starosti tohoto tématu; odpovězte nejdřív upřímně pro svůj
   jediný nejrizikovější systém.

2. **Jaká otázka se v našem týmovém chatu opakovaně klade, přestože
   zdokumentovaná odpověď někde existuje?** Pokud dokážete jednu hned
   pojmenovat, je to problém dohledatelnosti, který stojí za přímou opravu,
   pravděpodobně přeorganizováním nebo lepším zpřístupněním existujícího
   obsahu, ne psaním dalšího.

3. **Jak dlouho našemu poslednímu novému členovi týmu trvalo první smysluplný,
   samostatný příspěvek a jak se to srovnávalo s předchozím členem?** Velký,
   nevysvětlený rozptyl mezi jednotlivci často ukazuje na znalosti, které silně
   závisí na tom, kdo někoho náhodou zapracovává, místo na trvalé, dostupné
   dokumentaci.

4. **Kdy jsme naposledy ověřili, zda je kus dokumentace stále přesný, vzhledem k
   tomu, kolik se od jeho napsání podkladový systém změnil?** Pokud je upřímná
   odpověď „systematicky to nekontrolujeme“, je riziko zastaralosti
   pravděpodobně větší, než kdokoli dnes předpokládá.

5. **Zahrnuje náš backlog technického dluhu (téma 4.5) mezery v dokumentaci, nebo
   se práce na dokumentaci věčně odkládá jako úkol s nižším statusem než
   opravy kódu?** Prohlédněte si skutečný backlog a zjistěte, zda je dluh v
   dokumentaci viditelný a soutěží o prioritní kapacitu, nebo je prakticky
   neviditelný.

6. **Kolik by nás stálo, kdyby jeden či dva lidé, kteří rozumějí našemu
   nejkritičtějšímu, nejméně zdokumentovanému systému, odešli ve stejném roce?**
   Na tuto konkrétní, nepříjemnou otázku stojí za to odpovědět upřímně, místo
   abyste riziko považovali za abstraktní nebo nepravděpodobné.

## Pohled podle sektorů

**Startup.** Formální metriky dokumentace jsou u malého týmu, kde se znalosti
šíří neustálým, přímým rozhovorem, obvykle zbytečné. Rizikem, na které je třeba
dát pozor, je stejná koncentrace bus factoru, před níž varuje téma 3.5, nyní
konkrétně uplatněná na dokumentaci: jakmile tým vyroste za velikost, kdy spolu
všichni mluví denně, stává se nezdokumentovaná znalost, která neformálně
fungovala dobře, skutečným závazkem.

**Malá firma.** Přednostně zdokumentujte svůj jediný nejkritičtější, nejméně
zastupitelný systém, i neformálně, místo pokusů o komplexní dokumentaci
všeho. Krátký, přesný dokument pokrývající váš nejrizikovější jediný bod
selhání přináší víc skutečné hodnoty než široké, ale mělké pokrytí všude.

**Velký podnik.** Zastaralost a dohledatelnost dokumentace se zde škálují
špatně, protože velká organizace hromadí dokumentaci napříč mnoha týmy a
platformami rychleji, než ji kdokoli dokáže udržet aktuální nebo konzistentně
organizovat. Investujte do analytiky platformy dokumentace, abyste sledovali
přístupy a zastaralost ve velkém, a berte dluh v dokumentaci jako plnohodnotnou
kategorii v backlogu dluhu celé organizace.

**Státní správa.** Dlouhé působení zaměstnanců, běžné ve veřejném sektoru, může
za zdánlivou stabilitou skrývat závažné riziko nezdokumentovaných znalostí,
protože systém udržovaný tentýž člověkem patnáct let může fungovat naprosto
dobře, až do chvíle, kdy ten člověk odejde do důchodu. Berte zdraví
dokumentace výslovně jako záležitost kontinuity provozu, přímo spojenou s
plánováním pracovních sil a nástupnictví, ne pouhou inženýrskou drobnost.

## Příklady

**Velký podnik.** Firma poskytující finanční služby zjistila během nesouvisející
reorganizace, že její základní modul pro výpočet rizik nemá žádnou smysluplnou
dokumentaci kromě několika zastaralých komentářů v kódu a že dva inženýři,
kteří mu rozuměli nejlépe, byli oba současně přesunuti na novou iniciativu.
Nouzové úsilí o dokumentaci, vedené pod značným časovým tlakem, kritické
znalosti vytěžilo a zaznamenalo dřív, než přesun vstoupil v platnost, ale
trvalo několik týdnů vyhrazeného času senior inženýrů, který by se dal rozložit
postupněji a levněji, kdyby se zdraví dokumentace sledovalo a prioritizovalo
proaktivně, a ne objevilo jako havárie.

**Státní správa.** Desítky let starý systém pro správu případů jedné státní vlády
nahromadil během let podstatnou dokumentaci, ale audit dohledatelnosti zjistil,
že noví členové týmu soustavně nedokázali najít relevantní existující
dokumentaci a opakovaně kladli v týmových kanálech stejnou hrstku otázek,
otázek, na které ve skutečnosti už někde v rozsáhlé, špatně organizované
platformě agentury existovala odpověď. Místo psaní dalšího obsahu agentura
investovala do přeorganizování a zlepšení vyhledávání a navigační struktury
své existující dokumentace a následný průzkum ukázal měřitelné snížení
opakovaných otázek a znatelně rychlejší hlášenou zkušenost se zapracováním
nových zaměstnanců, aniž by přibyla jediná nová stránka obsahu.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností záměrného měření a řízení zdraví dokumentace jsou odvrácené náklady
krize: příklad firmy poskytující finanční služby výše ukazuje rozdíl mezi
proaktivním, postupným zachycováním znalostí a drahým, zkráceným nouzovým úsilím
vynuceným neplánovaným přesunem personálu. Nezdokumentované kritické znalosti jsou
stálý závazek, který nestojí viditelně nic, dokud se nestane najednou velmi
drahým.

Celkové náklady vlastnictví (TCO) jsou většinou disciplína sledování
zástupných ukazatelů, které toto téma doporučuje, vzorců přístupů, zastaralosti,
opakovaných otázek a doby zapracování, a ochota zahrnout mezery v dokumentaci do
prioritizovaného backlogu, místo aby se brala jako trvale nižšího statusu než
práce zaměřená na kód. Tato disciplína stojí mnohem méně než nouzové vytěžování
znalostí, které příklad firmy poskytující finanční služby ukazuje jako
alternativu.

## Antivzory a úskalí

- **Počítání existence dokumentace místo užitečnosti:** neříká téměř nic o tom,
  zda jsou znalosti skutečně dostupné, když jsou potřeba.
- **Psaní dalšího obsahu v reakci na opakované otázky bez předchozí kontroly
  dohledatelnosti:** často řeší úplně špatný problém.
- **Nikdy nekontrolovat zastaralost dokumentace vzhledem k tomu, kolik se systém
  změnil:** riskuje aktivně zavádějící, zastaralý obsah.
- **Brát dluh v dokumentaci jako trvale nižšího statusu než dluh v kódu:**
  nechává ho chronicky odložený a neviditelný v backlogu.
- **Zaměňovat zdánlivou stabilitu, systém, který se roky nezměnil, za nízké
  riziko:** může za systémem, který prostě ještě nepotřeboval svého jediného
  experta, skrývat závažný, nezdokumentovaný problém bus factoru.
- **Objevit kritické nezdokumentované znalosti až při nouzovém přesunu
  personálu:** drahý, odvratitelný způsob selhání, kterému má toto téma zabránit.

## Model zralosti

- **Úroveň 1, Zahájení:** Zdraví dokumentace se neměří; koncentrace znalostí a
  riziko zastaralosti se objevují jen skrze krizi.
- **Úroveň 2, Rozvoj:** Určitá dokumentace existuje, ale chybí systematické
  sledování přístupů, zastaralosti nebo dohledatelnosti.
- **Úroveň 3, Standardizace:** Přístupy a zastaralost se sledují u kritických
  systémů a doba zapracování se v celé organizaci měří jako zástupný ukazatel
  zdraví znalostí.
- **Úroveň 4, Řízení:** Mezery v dokumentaci jsou zahrnuty do prioritizovaného
  backlogu technického dluhu a porovnávány s rizikem bus factoru, aby se určila
  nejzávažnější kombinovaná rizika.
- **Úroveň 5, Orchestrace:** Organizace proaktivně určuje a řeší riziko
  nezdokumentovaných kritických znalostí dřív, než věc vynutí personální
  přesun, a dokáže ukázat konkrétní, měřitelná zlepšení zapracování nebo
  reakce na incidenty vysledovaná k investicím do dokumentace.

## Náměty k diskusi

1. Jaká je naše nejzávažnější kombinace nízkého bus factoru a špatné dokumentace právě teď?
2. Jaká otázka se klade opakovaně, přestože zdokumentovaná odpověď existuje?
3. Jak bychom poznali, že se kus kritické dokumentace stal zastaralým a zavádějícím?
4. Zahrnuje náš backlog technického dluhu mezery v dokumentaci, nebo jsou neviditelné?
5. Kolik by nás stálo, kdyby náš nejméně zdokumentovaný systém letos opustil jeho jediný expert?

## Hlavní poznatky

- Měřte **užitečnost, ne existenci**: zda dokumentace skutečně pomáhá, pomocí
  zástupných ukazatelů, jako jsou vzorce přístupů, zastaralost a opakované otázky.
- **Opakované otázky navzdory zdokumentovaným odpovědím** ukazují problém
  dohledatelnosti, ne nutně problém úsilí o obsah.
- **Doba zapracování do produktivního příspěvku** je silný, praktický zástupný
  ukazatel celkového zdraví znalostí.
- **Nezdokumentované kritické znalosti jsou násobící se riziko**, zejména v
  kombinaci s nízkým bus factorem (téma 3.5); nestojí viditelně nic, dokud
  nestojí najednou hodně.
- Zahrňte **mezery v dokumentaci do backlogu technického dluhu** (téma 4.5), aby
  spravedlivě soutěžily o prioritní kapacitu.

## Odkazy a další četba

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, Jared
  Bhatti, Zachariah Goldberg, Ted Kubaska a Sarah Moir (praktické postupy
  dokumentace pro inženýrské týmy).
- *A Philosophy of Software Design*, John Ousterhout (vztah mezi dokumentací,
  složitostí a udržovatelností).
- *Team Topologies*, Matthew Skelton a Manuel Pais (důsledky koncentrovaných
  versus rozložených znalostí pro návrh organizace).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (dokumentace jako jedna ze schopností korelujících s
  výkonem dodávky).
