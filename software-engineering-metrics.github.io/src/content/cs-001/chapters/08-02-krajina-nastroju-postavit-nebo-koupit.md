# 8.2 Krajina nástrojů: postavit, nebo koupit

## Přehled a motivace

Každá organizace, která uvádí pokyny této knihy do praxe, nakonec stojí před
praktickým infrastrukturním rozhodnutím: postavit nástroje pro metriky interně,
koupit komerční platformu inženýrské analytiky, nebo, což je v praxi
nejběžnější, určitou kombinaci obojího. Toto téma s tímto rozhodnutím zachází
se stejnou důsledností, s jakou téma 5.5 přistupuje ke každé jiné inženýrské
investici: poctivá analýza nákladů a přínosů specifická pro rozsah vaší
organizace, stávající zdroje dat a konkrétní metriky z této knihy, které
skutečně hodláte sledovat, místo výchozí odpovědi platné jednotně bez ohledu
na kontext.

Trh komerčních nástrojů inženýrské analytiky se výrazně vyspěl a mnohé
platformy dnes nabízejí solidní, do značné míry automatizovanou instrumentaci
metrik DORA (část 2), dat o pull requestech a revizích (téma 2.9) a stále
častěji i infrastrukturu pro průzkumy zkušenosti vývojářů (téma 3.7). Tato
vyspělost posunula výpočet mnoha organizací směrem ke koupi alespoň základní
vrstvy, ale neodstranila skutečné výhody možnosti stavět pro specifické,
přizpůsobené potřeby, zejména u telemetrie výsledků, o níž téma 7.4 tvrdí, že
je nyní nutným středem programu metrik a že je často nejméně standardizovanou,
nejvíce organizačně specifickou kategorií měření, kterou kniha pokrývá.

Pro velké týmy má toto rozhodnutí skutečné, průběžné důsledky pro rozpočet a
inženýrskou kapacitu. Velké podniky často potřebují integrovat nástroje pro
metriky napříč skutečně heterogenní krajinou starších a moderních systémů,
což výpočet „postavit, nebo koupit“ výrazně ovlivňuje. Státní správa často
čelí omezením při zadávání veřejných zakázek a požadavkům na suverenitu dat
nebo bezpečnost, které podstatně ovlivňují, které komerční možnosti jsou vůbec
použitelné, a někdy rozhodnutí posunou směrem ke stavbě nebo ke konkrétním,
prověřeným dodavatelům, ať už by čistá analýza nákladů a přínosů sama o sobě
naznačovala cokoli.

## Klíčové zásady

- **Málokdy jde o rozhodnutí všechno, nebo nic.** Většina zralých programů
  metrik kombinuje koupené nástroje pro dobře standardizované metriky s
  postavenými nástroji pro organizačně specifickou telemetrii výsledků.
- **Kupujte pro dobře standardizované, široce potřebné metriky; stavte pro
  skutečně organizačně specifické.** Metriky DORA a analytika pull requestů
  jsou komoditní území; vaše konkrétní korelace s obchodními výsledky
  (téma 5.3) obvykle ne.
- **Vlastnictví dat a přenositelnost jsou stejně důležité jako srovnání
  funkcí.** Nástroj, který vaše data o metrikách uzamkne, je trvalé riziko,
  nejen nepohodlí.
- **Náklady na integraci se v analýze „postavit, nebo koupit“ často
  podceňují**, u obou možností.
- **Omezení zadávání zakázek, bezpečnosti a suverenity dat mohou převážit nad
  čistým výpočtem nákladů a přínosů**, zejména u státní správy.

## Doporučení

### Kupujte pro komoditní vrstvu: DORA, revize a infrastrukturu průzkumů

U rodin metrik se zralými, široce dostupnými komerčními nástroji, tedy
instrumentace metrik DORA (část 2), analytika pull requestů a revize kódu
(téma 2.9) a platformy pro průzkumy zkušenosti vývojářů (téma 3.7), je
nákup obvykle lepší ekonomickou volbou pro většinu organizací pod určitou
velikostí, protože stavba rovnocenné infrastruktury duplikuje inženýrské
úsilí, do něhož už mnoho dodavatelů hodně investovalo, přičemž stavba vlastní
verze nabízí jen omezenou skutečnou diferenciaci.

### Stavte pro skutečně organizačně specifickou telemetrii výsledků

U metrik výsledků, které by podle tématu 7.4 měly být těžištěm vašeho programu
metrik, tedy korelace s obchodními výsledky (téma 5.3), přijetí funkcí vázané
na váš konkrétní produkt (téma 5.2) a jednotková ekonomika vázaná na vaši
konkrétní strukturu nákladů (téma 5.4), jsou komerční nástroje mnohem méně
standardizované a často nedokážou zachytit specifickou obchodní logiku a
datový model vaší organizace bez rozsáhlého, drahého přizpůsobení, které může
nakonec vyjít dráž než postavit rovnocennou schopnost interně s plnou
kontrolou nad výsledkem.

### Před závazkem k dodavateli vyhodnoťte vlastnictví dat a přenositelnost

Před podpisem komerční smlouvy potvrďte, že můžete exportovat celou
historii svých dat o metrikách v použitelném, standardním formátu, a zjistěte,
co se s těmito daty a jejich historií stane, když dodavatele změníte nebo
službu ukončíte. Vztah s dodavatelem, ze kterého je těžké vystoupit kvůli
[uzamčení](https://en.wikipedia.org/wiki/Vendor_lock-in) dat, je trvalé
organizační riziko, nejen nepohodlí, a toto vyhodnocení si zaslouží stejnou
vážnost jako každý jiný významný, víceletý infrastrukturní závazek.

### Rozpočtujte realisticky náklady na integraci u obou stran rozhodnutí

Ať stavíte, nebo kupujete, náklady na integraci, tedy propojení nástroje s vaší
skutečnou správou verzí, CI/CD, sledováním incidentů a obchodními systémy, se
při úvodním plánování u obou cest často podceňují. Rozpočtujte toto integrační
úsilí výslovně jako samostatnou, významnou položku v analýze „postavit, nebo
koupit“, místo předpokladu, že komerční nástroj bude fungovat hned po
vybalení s minimálním nastavením, nebo že náklady na integraci vlastního řešení
jsou jen drobným dodatkem k nákladům na vývoj.

### Počítejte s omezeními zadávání zakázek, bezpečnosti a suverenity výslovně a včas

U státní správy a regulovaných velkých podniků mohou požadavky na suverenitu
dat, potřeby bezpečnostních certifikací a procesy zadávání zakázek podstatně
zúžit nebo vyloučit některé komerční možnosti bez ohledu na kvalitu jejich
funkcí, a někdy rozhodnutí posunout směrem ke stavbě nebo k menší sadě
konkrétně prověřených dodavatelů. Určete tato omezení výslovně a brzy v
procesu hodnocení, místo abyste je objevili až poté, co už velké úsilí o
hodnocení putovalo do možnosti, která se ukáže jako nepoužitelná z důvodů
nesouvisejících s její skutečnou schopností.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Koupit komerční nástroje | Rychlé nasazení, zralá sada funkcí, údržba dodavatelem | Méně přizpůsobitelné pro organizačně specifické metriky výsledků; možné uzamčení |
| Postavit interní nástroje | Plně přizpůsobené, plné vlastnictví a kontrola dat | Významná, průběžná inženýrská investice; duplikuje úsilí u komoditních metrik |
| Hybrid: koupit komoditní vrstvu, postavit vrstvu výsledků | Vyvažuje nákladovou efektivitu se skutečným přizpůsobením tam, kde na něm nejvíc záleží | Vyžaduje integrační práci, aby se koupené a postavené součásti soudržně propojily |
| Koupit všechno, včetně telemetrie výsledků, rozsáhlým přizpůsobením u dodavatele | Jediný vztah s dodavatelem, potenciálně jednodušší zadávání | Může vyjít stejně draho jako stavba, s menší konečnou kontrolou nad výsledkem |

Hlavní napětí je **potřeba přizpůsobení versus náklady na vývoj**. Metriky,
které z přizpůsobení nejvíce profitují, tedy telemetrie výsledků vázaná
konkrétně na váš byznys, jsou také nejdražší na kvalitní postavení; metriky,
které se nejlevněji kupují, DORA a analytika revizí, jsou zároveň ty, u
nichž na skutečném přizpůsobení záleží nejméně. Napětí vyřešíte přímým
přizpůsobením rozhodnutí tomuto vzorci: kupujte tam, kde vám standardizace
dobře slouží, stavte tam, kde to váš konkrétní kontext skutečně vyžaduje, a
realisticky rozpočtujte náklady na integraci na obou stranách tohoto dělení.

## Otázky k diskusi s vaším týmem

1. **Měli bychom u každé rodiny metrik, kterou tato kniha pokrývá, skutečný
   prospěch z přizpůsobení, nebo by nám standardizovaný komerční nástroj
   posloužil stejně dobře?** Projděte výslovně části 2 až 6 a roztřiďte každou
   rodinu metrik do sloupce „koupit“ nebo „postavit“ podle tohoto konkrétního
   testu.

2. **Vyhodnotili jsme možnosti exportu dat a přenositelnosti u našeho
   současného nebo budoucího dodavatele, nebo jen předpokládáme, že bychom
   mohli snadno odejít, kdybychom potřebovali?** Zkontrolujte to přímo, nic
   nepředpokládejte; uzamčení dat se často objeví, až když se organizace
   skutečně pokusí přejít jinam.

3. **Počítala naše původní analýza „postavit, nebo koupit“ realisticky s
   náklady na integraci, nebo se soustředila hlavně na licenční poplatky
   versus hodiny vývoje?** Vraťte se k nedávnému rozhodnutí o nástrojích a
   zkontrolujte, zda byly náklady na integraci skutečně odhadnuty, nebo
   výrazně podceněny.

4. **Čelíme omezením zadávání zakázek, bezpečnosti nebo suverenity dat,
   která by vyloučila některé komerční možnosti bez ohledu na kvalitu jejich
   funkcí?** Určete tato omezení výslovně dříve, nikoli až poté, co
   investujete velké úsilí o hodnocení do možností, které se mohou ukázat
   jako nepoužitelné.

5. **Je naše současná krajina nástrojů záměrný hybrid, který přiřazuje
   stavbu a nákup tam, kde každé dává smysl, nebo vznikla postupným
   nahromaděním ad hoc, jednotlivě rozumných rozhodnutí?** Buďte upřímní v
   tom, který vzorec vaši současnou situaci skutečně popisuje.

6. **Kolik by nás stálo, v úsilí a riziku, kdybychom dnes museli změnit
   dodavatele svých nástrojů pro metriky?** Tato konkrétní otázka ověří vaši
   skutečnou současnou expozici riziku uzamčení dat, nad rámec toho, co
   smluvní podmínky dodavatele nominálně slibují.

## Pohled podle sektorů

**Startup.** V tomto měřítku kupujte komoditní nástroje jako výchozí volbu;
stavba vlastní infrastruktury metrik je zřídka dobrým využitím vzácné rané
inženýrské kapacity, když pro metriky DORA a revizí existují zralé, levné
komerční možnosti. Vyhraďte stavbu pro jedinou metriku výsledku (téma 5.3),
která nejpříměji odráží jádro hodnoty vašeho produktu.

**Malá firma.** Většina komerčních nástrojů se dobře zmenšuje a má cenu
dostupnou pro menší organizace; koupě komoditní vrstvy je téměř vždy správná
volba a stavba čehokoli na míru je zřídka odůvodněná, dokud vaše organizace
výrazně nevyroste a nevytvoří skutečně specifické potřeby.

**Velký podnik.** Hybridní přístup, který toto téma doporučuje, si tu svou
složitost zaslouží: kupte komoditní vrstvu ve velkém (často s významnou
vyjednávací silou pro příznivé podmínky) a záměrně investujte do stavby
organizačně specifické vrstvy telemetrie výsledků, protože složitost vaší
obchodní logiky a datového modelu v tomto měřítku obvykle přesahuje to, co
obecné komerční nástroje pojmou bez rozsáhlého, drahého přizpůsobení.

**Státní správa.** Procesy zadávání zakázek, požadavky na bezpečnostní
certifikaci a omezení suverenity dat často toto rozhodnutí ovládají víc, než by
naznačovalo čisté srovnání funkcí nebo nákladů. Zapojte zainteresované
strany ze zadávání zakázek a bezpečnosti brzy do procesu hodnocení a buďte
připraveni, že možnost stavět zde bude skutečně atraktivnější než ve
srovnatelném kontextu soukromého sektoru, právě kvůli těmto omezením, nikoli
proto, že by stavba byla sama o sobě lepší.

## Příklady

**Velký podnik.** Jedna softwarová společnost se zprvu pokusila postavit zcela
vlastní platformu metrik pokrývající každou rodinu metrik od části 2 po část 6,
což byla víceletá snaha, která pohltila značnou inženýrskou kapacitu a stále
zaostávala za zralými komerčními nabídkami zejména u standardizovaných metrik
DORA a revizí. Revidovaná strategie přijala komerční platformu pro tyto
komoditní metriky, čímž uvolnila interní platformní tým, aby se soustředil
výhradně na stavbu telemetrie korelace s obchodními výsledky a jednotkové
ekonomiky (témata 5.3, 5.4), skutečně specifické pro obchodní model
společnosti, kterou by žádný komerční nástroj nedodal hned po vybalení. Tento
hybridní přístup přinesl během jediného roku úplnější, skutečně užitečnější
program metrik, než jaký dosáhla strategie čisté stavby po dvou.

**Státní správa.** Počáteční hodnocení komerčních platforem inženýrské
analytiky ve federálním úřadu zjistilo, že žádný z dostupných dodavatelů
nedokáže splnit požadavky úřadu na suverenitu dat, které nařizovaly, aby všechna
data o inženýrských metrikách zůstala v konkrétních, certifikovaných vládních
datových centrech. Místo úplného opuštění možnosti nákupu úřad určil menší
podmnožinu dodavatelů nabízejících vládou certifikované nasazení v suverénním
cloudu za mírný příplatek oproti standardním komerčním cenám a úspěšně nasadil
hybridní program: koupené nástroje pro komoditní vrstvu metrik uvnitř
požadované hranice suverenity a postavené interní nástroje pro specifické
potřeby úřadu v telemetrii výsledků pro občany, které neřešil žádný dostupný
komerční dodavatel bez ohledu na úvahy o suverenitě.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost záměrné hybridní strategie „postavit, nebo koupit“ spočívá v tom,
že se vyhnete oběma způsobům selhání, které příklady tohoto tématu ilustrují:
plýtvání víceletou inženýrskou investicí do stavby komoditní schopnosti, která
už na trhu levně existuje, a frustraci a nakonec náklady na přizpůsobení při
vtěsnávání skutečně organizačně specifické potřeby do nevhodného komerčního
nástroje. Příklad velkého podniku výše to ukazuje konkrétně: hybridní přístup
přinesl za jeden rok víc skutečné hodnoty než strategie čisté stavby za dva.

Celkové náklady vlastnictví (TCO) u obou cest zahrnují náklady na integraci,
často podceňované, a u koupených nástrojů konkrétně průběžné náklady rizika
možného uzamčení u dodavatele, pokud přenositelnost dat není potvrzena a
smluvně chráněna předem. Realistické rozpočtování obojího, místo úzkého
soustředění jen na licenční poplatky či hodiny vývoje, dává mnohem přesnější
obraz celkových nákladů u obou možností.

## Antivzory a úskalí

- **Stavba vlastních nástrojů pro dobře standardizované, komoditní metriky:**
  duplikuje inženýrské úsilí, do něhož už mnoho dodavatelů hodně investovalo.
- **Nákup komerčních nástrojů pro skutečně organizačně specifickou telemetrii
  výsledků bez předchozí kontroly shody:** riziko drahého, nevhodného
  přizpůsobování nebo nenaplněné potřeby.
- **Žádné vyhodnocení exportu dat a přenositelnosti před závazkem k
  dodavateli:** riziko trvalého, drahého uzamčení, které se zjistí až při
  pokusu odejít.
- **Podceňování nákladů na integraci na kterékoli straně rozhodnutí:**
  vytváří nepřesné srovnání celkových nákladů a nereálné harmonogramy.
- **Ignorování omezení zadávání zakázek, bezpečnosti či suverenity až do
  pozdní fáze hodnocení:** plýtvá úsilím o hodnocení na možnosti, které se
  ukážou jako nepoužitelné z důvodů nesouvisejících se schopnostmi.
- **Brát to jako jediné rozhodnutí typu všechno, nebo nic:** míjí hybridní
  přístup, který nejlépe odpovídá skutečným, smíšeným potřebám většiny
  organizací.

## Model zralosti

- **Úroveň 1, Zahájení:** Rozhodnutí o nástrojích se činí ad hoc, bez záměrné
  analýzy „postavit, nebo koupit“ a bez zvážení přenositelnosti dat.
- **Úroveň 2, Rozvoj:** Určitá analýza probíhá, ale náklady na integraci se
  běžně podceňují a hybridní přístup se záměrně nezvažuje.
- **Úroveň 3, Standardizace:** Záměrná hybridní strategie „postavit, nebo
  koupit“ důsledně přiřazuje komoditní metriky ke koupeným nástrojům a
  organizačně specifickou telemetrii výsledků k postaveným nástrojům.
- **Úroveň 4, Řízení:** Přenositelnost dat je potvrzena a smluvně chráněna u
  všech koupených nástrojů a omezení zadávání zakázek, bezpečnosti a
  suverenity se zohledňují výslovně a včas.
- **Úroveň 5, Orchestrace:** Krajina nástrojů organizace odráží zralou,
  záměrnou hybridní strategii, pravidelně přezkoumávanou, jak se komerční
  nabídky a organizační potřeby vyvíjejí, s prokázanou hodnotou jak z koupených,
  tak z postavených součástí.

## Náměty k diskusi

1. Které z našich současných metrik by nejvíc profitovaly z přizpůsobení, které teď nedostáváme?
2. Potvrdili jsme, že bychom mohli exportovat celou historii dat o metrikách, kdybychom museli změnit dodavatele?
3. Počítalo naše poslední rozhodnutí o nástrojích realisticky s náklady na integraci?
4. Které omezení zadávání zakázek, bezpečnosti nebo suverenity možná podceňujeme?
5. Jak by vypadala záměrná hybridní strategie pro naši konkrétní sadu metrik?

## Hlavní poznatky

- Málokdy jde o všechno, nebo nic; většina zralých programů **kombinuje
  koupené nástroje pro komoditní metriky s postavenými nástroji pro
  organizačně specifickou telemetrii výsledků**.
- **Kupujte pro standardizované metriky** (DORA, analytika revizí,
  infrastruktura průzkumů); **stavte pro skutečně organizačně specifické**
  měření výsledků.
- Vyhodnoťte **vlastnictví dat a přenositelnost** před závazkem k dodavateli;
  uzamčení je trvalé riziko, nejen nepohodlí.
- **Rozpočtujte realisticky náklady na integraci** na obou stranách
  rozhodnutí; často se podceňují.
- **Omezení zadávání zakázek, bezpečnosti a suverenity** mohou převážit nad
  čistým výpočtem nákladů a přínosů, zejména u státní správy.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (rodiny metrik, na něž se analýza „postavit, nebo
  koupit“ tohoto tématu uplatňuje).
- *Cloud FinOps*, J.R. Storment a Mike Fuller (zásady analýzy nákladů
  použitelné pro rozhodnutí o investicích do nástrojů).
- FinOps Framework nadace FinOps Foundation, [finops.org](https://www.finops.org/)
  (praktické pokyny k hodnocení a řízení nákladů na cloudové a SaaS nástroje).
- Dokumentace amerického programu Federal Risk and Authorization Management
  Program (FedRAMP): autoritativní pokyny k bezpečnostním požadavkům a
  požadavkům na suverenitu u vládních cloudových nástrojů.
