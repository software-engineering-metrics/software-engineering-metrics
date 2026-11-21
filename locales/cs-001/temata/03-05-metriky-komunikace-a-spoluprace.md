# 3.5 Metriky komunikace a spolupráce

## Přehled a motivace

**Komunikace a spolupráce**, písmeno C ve SPACE (téma 3.1), měří, jak informace
skutečně proudí mezi lidmi a týmy: jak dobře se dá dokumentace najít, jak
rovnoměrně se znalosti šíří týmem, jak dobře se koordinují závislosti mezi
týmy a jak se noví členové týmu zapojují do proudu sdíleného porozumění. Tato
dimenze je často z pěti nejméně instrumentovaná, právě proto, že se hůř
pozoruje než data o dodávce a je méně osobní než data o spokojenosti. Ta mezera
je chyba, protože selhání zde jsou často skutečnou příčinou problémů, které se
chybně připisují všem ostatním dimenzím.

Rostoucí míra selhání změn (téma 2.10), která vypadá jako problém s testováním,
je někdy ve skutečnosti problém komunikace: tým, který o změně závislosti
nevěděl, dokud se v produkci nerozbilo. Klesající trend spokojenosti (téma 3.2),
který vypadá jako problém zátěže, je někdy ve skutečnosti problém izolace:
inženýr, který byl tiše vyloučen z rozhovorů, kde se rozhoduje. Ústřední
argument tohoto tématu je, že komunikace a spolupráce zaslouží přímé měření
právě proto, že se jejich selhání maskují za jiné problémy, a tým, který
honí špatnou příčinu, plýtvá skutečným úsilím na opravu špatné věci.

U velkých týmů je tuto dimenzi strukturálně těžší udržet přesně ve chvíli, kdy
je důležitější. Koordinace pětičlenného týmu probíhá denní blízkostí a téměř
nepotřebuje záměrné měření. Organizace o pěti stech lidech rozptýlená po
časových pásmech a obchodních jednotkách závisí na dokumentaci, dohledatelnosti
a mechanismech koordinace mezi týmy, které je třeba záměrně navrhnout a
aktivně sledovat, protože neformální kanály, které fungovaly v malém, tak
daleko prostě nedosáhnou.

## Klíčové zásady

- **Selhání komunikace se často maskují za jiné problémy.** Problém s kvalitou
  nebo spokojeností může mít kořen ve spolupráci.
- **Tuto dimenzi je nejtěžší instrumentovat automaticky** a pokušení je ji
  úplně přeskočit; tomuto pokušení záměrně odolejte.
- **Koncentrace znalostí je měřitelné riziko, ne jen vágní obava.** Sledujte,
  jak úzce jsou kritické znalosti drženy.
- **Tření v závislostech mezi týmy je často pro zúčastněné týmy neviditelné,**
  dokud ho někdo přímo neměří.
- **Rychlost zapracování je přímý, měřitelný zástupný ukazatel toho, jak dobře
  sdílené porozumění v organizaci skutečně proudí.**

## Doporučení

### Měřte koncentraci znalostí přímo

Sledujte, kolik lidí dokáže kompetentně revidovat, upravovat nebo provozovat
každou kritickou komponentu systému: komponenta s jediným kvalifikovaným
člověkem má **[bus factor](https://en.wikipedia.org/wiki/Bus_factor)** roven
jedné, což je závažné a často neviditelné riziko (sesterská kniha
`software-engineering-guide` se tomu věnuje podrobněji v tématu o udržování
dlouhověkých systémů). Data o autorství z verzovacího systému, spojená se
záznamy o rotaci pohotovosti, mohou tuto koncentraci odhalit automaticky:
hledejte komponenty, kde jediný autor nebo jediný pohotovostní řešitel tvoří
nepřiměřený podíl změn nebo reakcí na incidenty za smysluplné období.

### Měřte tření v závislostech mezi týmy přímým signálem

Sledujte, jak dlouho trvá požadavek mezi týmy, potřebná změna API, aktualizace
sdílené knihovny nebo koordinované vydání, od vznesení po vyřešení, v duchu
podobně jako rozklad cycle time v tématu 2.6, ale uplatněný konkrétně na
koordinaci mezi týmy, ne uvnitř týmu. Tým, který soustavně čeká týdny na
závislost, kterou vlastní jiný tým, má problém spolupráce, který se v interních
metrikách dodávky ani jednoho z týmů čistě neprojeví.

### Jako signál používejte dohledatelnost dokumentace, ne jen její existenci

Wiki plná zastaralých nebo nedohledatelných stránek není důkazem dobré
komunikace jen proto, že obsah technicky někde existuje. Kde je to možné,
sledujte, jak často se k dokumentaci skutečně přistupuje, jak často nový člen
týmu hlásí, že nemohl najít odpověď, kterou potřeboval, nebo jak často se
stejná otázka opakovaně klade v chatovacím kanálu, protože odpověď, ač
zdokumentovaná, nebyla dohledatelná. Tím se kvalita dokumentace (téma 4.6)
přímo spojuje s otázkami spolupráce v této dimenzi.

### Sledujte dobu zapracování do produktivního příspěvku jako přímý zástupný ukazatel

Doba od nástupu nového člena týmu po jeho první smysluplný, samostatný
příspěvek je silný, praktický zástupný ukazatel toho, jak dobře sdílené
porozumění v organizaci skutečně proudí: tým, kde znalosti žijí výhradně v
hlavách lidí, zapracovává pomalu a nepředvídatelně. Tým se skutečně dobrou
dokumentací, jasným vlastnictvím a dostupným mentoringem zapracovává rychleji a
konzistentněji. Sledujte tuto metriku výslovně a dlouhou nebo velmi
proměnlivou dobu zapracování berte jako signál spolupráce, ne jen záležitost
personálního oddělení.

### Pravidelně mapujte skutečné komunikační sítě, ne jen organigramy

Organigram popisuje, kdo má komu podléhat, ale málokdy popisuje, kdo ve
skutečnosti s kým mluví, aby se práce udělala. Pravidelná, nenáročná analýza
komunikačních vzorců, sítí revizí kódu (kdo revidoval čí práci) nebo
překryvu účasti na schůzkách může odhalit skutečnou strukturu spolupráce, která
se od formálního organigramu podstatně liší, a často tak odkryje neformální
úzké hrdlo (jedna osoba, přes kterou všichni procházejí) nebo izolovanou
kapsu (podtým, který vypadl z širšího toku informací), které by jinak zůstaly
neviditelné.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádné přímé měření spolupráce | Nízká režie | Příčiny se chybně připisují jiným dimenzím; rizika zůstávají neviditelná |
| Sledování koncentrace znalostí | Přímo odhaluje skutečné, závažné riziko (bus factor) | Vyžaduje kombinaci dat z více systémů (verzování, pohotovost) |
| Sledování tření v závislostech mezi týmy | Odhaluje problémy koordinace neviditelné uvnitř obou týmů | Vyžaduje záměrnou instrumentaci; z existujících nástrojů není automatické |
| Mapování komunikační sítě | Odhaluje skutečnou, neformální strukturu za organigramem | Může působit invazivně, pokud se s ním nezachází s péčí jako s daty o spokojenosti |

Ústředním napětím je **obtížnost instrumentace versus diagnostická hodnota**.
Tuto dimenzi je skutečně těžší měřit automaticky než data o dodávce nebo
aktivitě a právě proto ji mnoho organizací přeskakuje, přestože její selhání
jsou často skrytou příčinou problémů přisuzovaných jiným dimenzím. Napětí řešte
tak, že začnete signály s nejvyšší hodnotou, které se nejlépe zvládají,
koncentrací znalostí a třením v závislostech mezi týmy, které lze z velké části
odvodit z existujících dat verzovacího systému a systému pro sledování úkolů,
než se pustíte do ambicióznější analýzy komunikační sítě.

## Otázky k diskusi s vaším týmem

1. **Známe svůj bus factor u každé kritické komponenty systému, nebo bychom to
   zjistili tvrdě, až když nebude k dispozici jediný člověk, který jí
   rozumí?** Vytáhněte data z verzovacího systému a pohotovosti pro své
   nejkritičtější systémy a upřímně ověřte, jak koncentrované znalosti ve
   skutečnosti jsou.

2. **Jak dlouho se obvykle řeší požadavek na závislost mezi týmy a všiml by
   si některý ze zúčastněných týmů toho tření bez záměrného měření?** Vyberte
   nedávnou závislost mezi týmy a vysledujte její skutečnou časovou osu.
   Odpověď bývá delší a pro zúčastněné méně viditelná, než kterýkoli tým
   předpokládal.

3. **Když jsme nedávno měli problém s kvalitou nebo spokojeností, mohlo být
   součástí skutečné příčiny selhání komunikace nebo spolupráce?** Podívejte se
   zpět na nedávný incident nebo pokles spokojenosti a položte si právě
   tuto otázku, místo abyste přijali první, zjevnější vysvětlení.

4. **Jak dlouho trvá novému členovi týmu první smysluplný, samostatný příspěvek
   a jak moc se ta doba liší člověk od člověka?** Dlouhá nebo velmi
   proměnlivá doba zapracování je přímý, měřitelný příznak toho, jak dobře
   sdílené porozumění ve vašem týmu skutečně proudí.

5. **Odpovídá naše neformální komunikační síť našemu formálnímu organigramu,
   nebo se vyvinulo skryté úzké hrdlo či izolovaná kapsa, kterou nikdo
   nepojmenoval?** Pokud jste se na to nikdy přímo nedívali, i ta absence
   stojí za diskusi.

6. **Dá se naše dokumentace skutečně dohledat, nebo jen existuje někde, kde se
   těžko hledá?** Zeptejte se nedávného nového člena týmu nebo se záměrně
   pokuste odpovědět na skutečnou otázku jen s použitím své dokumentace a
   sledujte, jak to ve skutečnosti probíhá.

## Pohled podle sektorů

**Startup.** Komunikace v malém týmu probíhá přirozeně blízkostí a denním
rozhovorem a formální měření je obvykle zbytečné. Rizikem, na které je třeba
dát pozor, je nebezpečná koncentrace bus factoru, když tým vyroste za
velikost, kde neformální osmóza ještě dosáhne ke všem, často kolem osmi až
dvanácti lidí.

**Malá firma.** Jednoduchý, pravidelný, upřímný rozhovor, „kdo je jediný, kdo
tomuto systému rozumí“, často odhalí nejkritičtější rizika koncentrace
znalostí i bez formální instrumentace. Přednostně zdokumentujte dvě nebo tři
nejkřehčí, nejvíc koncentrované oblasti znalostí.

**Velký podnik.** Tření v závislostech mezi týmy i koncentrace znalostí se zde
škálují špatně, protože víc týmů znamená větší plochu koordinace a víc
kritických systémů, které mohou skončit ve vlastnictví zmenšujícího se
okruhu dlouholetých expertů. Investujte záměrně do instrumentace, kterou toto
téma doporučuje, protože neformální povědomí v takovém měřítku organizaci
skutečně pokrýt nedokáže.

**Státní správa.** Dlouhověké systémy a dlouhé působení zaměstnanců, běžné ve
veřejném sektoru, mohou za zdánlivou stabilitou skrývat závažné riziko bus
factoru, protože systém, který se deset let nepředával, může záviset úplně na
jednom nebo dvou lidech blížících se důchodu. Berte měření koncentrace
znalostí jako záležitost kontinuity provozu, ne jen inženýrskou drobnost.

## Příklady

**Velký podnik.** Platformní tým jedné logistické firmy zjistil, a to až po
kritickém incidentu během dovolené klíčového inženýra, že základní algoritmus
směrování má skutečný bus factor jedna: historie verzovacího systému ukázala,
že jediná osoba napsala přes 90 % nedávných změn komponenty, a záznam o
rotaci pohotovosti ukázal, že táž osoba osobně vyřešila každý související
incident za předchozí dva roky. Tým zavedl záměrný program šíření znalostí,
párové sezení a rotující vlastnictví souvisejících incidentů, a následná
analýza o osm měsíců později ukázala, že bus factor stoupl na čtyři, přičemž
původní inženýr se uvolnil pro novou práci s větší pákou, místo aby zůstal
trvalým jediným bodem selhání.

**Státní správa.** Inženýrský tým státní agentury pro dávky poprvé změřil
tření v závislostech mezi týmy po opakovaných, neformálně zaznamenaných
zpožděních ve sdílené službě pro ověřování nároku. Data ukázala, že medián
čekání na změnu závislosti od týmu sdílené služby byl jedenáct dnů, mnohem
déle, než kterýkoli tým předpokládal při neformálním dotazu, a příčinou se
ukázal být nejasný, nezdokumentovaný proces žádostí, a ne nedostatek
kapacity. Zveřejnění jasného, jednoduchého procesu žádostí a závazného cíle
doby odezvy sdílené služby snížilo medián čekání na méně než dva dny během
jednoho čtvrtletí, bez nutnosti dalšího personálu.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností přímého měření komunikace a spolupráce je zachycení příčin, které
ostatní dimenze chybně přisuzují: problém s kvalitou, který vypadá jako mezera
v testování, ale ve skutečnosti je selháním komunikace, plýtvá úsilím, když ho
tým řeší přidáváním dalších testů místo opravy podkladového selhání
koordinace. Příklad s bus factorem ukazuje tuto návratnost v nejkřiklavější
podobě: organizace, která závažné riziko koncentrace znalostí odhalí a
vyřeší proaktivně, se vyhne katastrofálním nákladům na jeho objevení během
skutečné krize, kdy jediný člověk rozumějící kritickému systému skutečně
chybí.

Celkové náklady vlastnictví (TCO) jsou většinou úsilí na instrumentaci,
spojování dat z verzovacího systému, pohotovosti a systému pro sledování
úkolů způsobem, který není hned po instalaci automatický, plus pravidelná
disciplína výslovné revize koncentrace znalostí a tření v závislostech. Tyto
náklady jsou skromné ve srovnání s náklady skutečné krize bus factoru nebo
chronického, neřešeného selhání koordinace mezi týmy.

## Antivzory a úskalí

- **Přeskakování této dimenze, protože se těžko instrumentuje automaticky:**
  nechává příčiny chybně přisouzené jiným, snáz měřitelným dimenzím.
- **Brát organigram jako přesný obraz skutečných komunikačních vzorců:** často
  se mýlí a ta mezera je přesně tam, kde žijí skrytá úzká hrdla.
- **Ignorovat bus factor, dokud objev nevynutí krize:** nejškodlivější způsob
  selhání, před kterým toto téma varuje.
- **Předpokládat, že existence dokumentace znamená její užitečnost:**
  zastaralý nebo nedohledatelný obsah poskytuje málo skutečné komunikační
  hodnoty.
- **Měřit tření mezi týmy, ale nejednat podle jasné, opravitelné příčiny,
  když se najde:** maří investici do diagnostiky.
- **Brát pomalé, proměnlivé zapracování čistě jako záležitost personálního
  oddělení, a ne jako signál inženýrské spolupráce:** míjí skutečně užitečný,
  měřitelný zástupný ukazatel.

## Model zralosti

- **Úroveň 1, Zahájení:** Komunikace a spolupráce se neměří vůbec; bus factor
  a tření mezi týmy se objevují jen skrze krizi.
- **Úroveň 2, Rozvoj:** Existuje určité neformální povědomí o koncentraci
  znalostí, ale chybí důsledné měření nebo proaktivní prošetřování.
- **Úroveň 3, Standardizace:** Bus factor a tření v závislostech mezi týmy se
  důsledně měří u kritických systémů a sdílených služeb v celé organizaci.
- **Úroveň 4, Řízení:** Mapování komunikační sítě pravidelně odhaluje skrytá
  úzká hrdla a izolované kapsy a doba zapracování se sleduje jako přímý
  zástupný ukazatel zdraví sdíleného porozumění.
- **Úroveň 5, Orchestrace:** Organizace proaktivně snižuje riziko koncentrace
  znalostí a tření mezi týmy dřív, než způsobí incidenty, a dokáže ukázat
  konkrétní zásahy, záměrné šíření znalostí a vyjasněné procesy závislostí,
  které tuto dimenzi měřitelně zlepšily.

## Náměty k diskusi

1. Jaký je upřímně náš bus factor u našeho nejkritičtějšího systému?
2. Jaká závislost mezi týmy způsobila v posledním čtvrtletí nejvíc tření a změřili jsme ji?
3. Našel by nový člen týmu naši dokumentaci, nebo jen zjistil, že technicky někde existuje?
4. Odpovídá naše neformální komunikační síť našemu organigramu?
5. Jaký problém s kvalitou nebo spokojeností může mít ve skutečnosti kořen ve spolupráci, který jsme neprošetřili?

## Hlavní poznatky

- Selhání komunikace a spolupráce se často **maskují za jiné problémy**; příčina
  chybně přisouzená špatné dimenzi plýtvá úsilím.
- Sledujte **koncentraci znalostí (bus factor)** přímo z dat verzovacího systému
  a pohotovosti, místo abyste čekali, až ji odhalí krize.
- Měřte **tření v závislostech mezi týmy** výslovně; zúčastněným týmům bývá
  neviditelné, dokud se nezměří.
- Používejte **dobu zapracování do produktivního příspěvku** jako přímý,
  praktický zástupný ukazatel toho, jak dobře proudí sdílené porozumění.
- Pravidelně mapujte **skutečné komunikační sítě**, protože se často podstatně
  liší od formálního organigramu.

## Odkazy a další četba

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Team Topologies*, Matthew Skelton a Manuel Pais (způsoby interakce týmů a
  návrh závislostí mezi týmy).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco a Timothy
  Lister (neformální komunikační struktury a jejich vliv na produktivitu).
- Conway, Melvin E., „How Do Committees Invent?“ (1968): původ Conwayova
  zákona o vztahu mezi komunikační strukturou a strukturou systému.
