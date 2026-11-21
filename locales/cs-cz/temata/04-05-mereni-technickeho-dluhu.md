# 4.5 Měření technického dluhu

## Přehled a motivace

**[Technický dluh](https://en.wikipedia.org/wiki/Technical_debt)**, metafora,
kterou vytvořil Ward Cunningham, popisuje nahromaděné náklady minulých zkratek,
účelových rozhodnutí, která něco dodala dřív, ale kódovou bázi potom ztížila
měnit, stejně jako finanční dluh dovoluje utrácet teď za cenu úroků později.
Každá kódová báze nese nějaký technický dluh a není to automaticky selhání.
Skutečná hodnota metafory spočívá v tom, že dluh rámuje jako zvládnutelný
kompromis, ne jako ostudné tajemství ani nevyhnutelné, trvalé břemeno. Toto
téma je o tom, jak tento kompromis zviditelnit a učinit zvládnutelným měřením,
místo aby zůstal vágní, věčně odkládanou starostí, kterou cítí každý inženýr,
ale nikdo podle ní nemůže jednat s důkazy.

Témata předcházející tomuto, složitost (4.1), pokrytí (4.2), změnovost a
hotspoty (4.3) a statická analýza (4.4), každé odhaluje jednu stránku
technického dluhu. Úlohou tohoto tématu je syntéza: proměnit tyto oddělené
signály, plus položky, které se v žádném automatizovaném skenu nikdy neobjeví
(nezdokumentovaná architektonická zkratka, záměrně odložená migrace), v jediný,
prioritizovaný, viditelný backlog, který o investice soutěží spravedlivě s prací
na funkcích, místo aby tuto soutěž ve výchozím stavu prohrával jen proto, že k
němu není připojena žádná metrika a nemá obhájce na poradách o plánování.

U velkých týmů se nespravovaný technický dluh násobí způsobem, který je
skutečně nebezpečný a snadno se podceňuje: každá nová zkratka mírně ztíží
další změnu, což vytváří tlak na další zkratky, které násobení dál umocňují.
Velké podniky a státní správa, které udržují systémy po mnoho let, jsou tomuto
násobícímu efektu obzvlášť vystaveny a ústřední doporučení tohoto tématu,
viditelný, kvantifikovaný, prioritizovaný backlog dluhu, je mechanismus, který
organizaci umožňuje tento kompromis skutečně řídit záměrně, místo aby sklouzla
do krize.

## Klíčové zásady

- **Technický dluh je záměrná metafora zvládnutelného kompromisu, ne ostudné
  tajemství.** Některý dluh, přijatý vědomě, je rozumné obchodní rozhodnutí.
- **Neměřený dluh ve výchozím stavu prohrává soutěž o prioritu s prací na
  funkcích,** ne proto, že by záleželo méně, ale proto, že nemá viditelného
  obhájce.
- **Kvantifikujte dluh v pojmech, které mohou rozhodující osoby zvážit: cena
  opravy versus cena nesení.** Vágní tvrzení „kód je chaotický“ málokdy dobře
  soutěží s konkrétním požadavkem na funkci.
- **Dluh se násobí.** Každá nová zkratka mírně ztíží budoucí změny a tento
  efekt se bez řízení zrychluje.
- **Ne všechen dluh by se měl splácet.** Část má smysl nést donekonečna, pokud
  cena opravy převyšuje cenu života s ním.

## Doporučení

### Vybudujte viditelný, jediný backlog technického dluhu

Sjednoťte signály z dřívějších témat této části, odlehlé hodnoty složitosti,
oblasti s nízkou mírou zabití mutantů, hotspoty, nevyřešené nálezy statické
analýzy, spolu s položkami dluhu, které dokáže určit jen člověk
(architektonická zkratka, odložená aktualizace závislosti, nezdokumentované
obejití), do jednoho viditelného backlogu, sledovaného se stejnou přísností a
viditelností jako váš backlog funkcí. Dluh, který žije jen v paměti jednotlivých
inženýrů nebo v roztroušených komentářích v kódu, pro účely prioritizace
fakticky neexistuje.

### Kvantifikujte u každé položky dluhu cenu opravy i cenu nesení

U každé položky odhadněte dvě čísla: cenu opravy (inženýrský čas, riziko samotné
opravy) a cenu nesení neopravené (o kolik pomaleji jde související práce, kolik
dalšího rizika vad nese, kolik jiné práce blokuje). Toto rámování, převzaté
přímo z logiky samotné metafory finančního dluhu, dává rozhodujícím osobám
skutečný základ pro srovnání s cenou a očekávanou hodnotou práce na funkcích,
místo abstraktní, nekvantifikované stížnosti.

### Prioritizujte podle dopadu, ne podle stáří ani nejhlasitějšího zastánce

Řaďte položky dluhu podle kombinace ceny nesení a toho, jak často se dotčený
kód mění (data o změnovosti z tématu 4.3 jsou zde přímo užitečná): položka v
zřídka upravovaném koutě kódové báze, jakkoli nepříjemná, záleží mnohem méně
než ta, která leží přímo v dráze vašeho nejaktivnějšího vývoje. Odolejte
prioritizaci podle toho, která položka je v backlogu nejdéle nebo kterého
inženýra zastává nejvytrvaleji, což ani jedno spolehlivě nekoreluje se
skutečným obchodním dopadem.

### Vyhraďte vyhrazenou, chráněnou kapacitu na nápravu dluhu

Backlog dluhu, který musí v každém plánovacím cyklu soutěžit položku po položce
s každým příchozím požadavkem na funkci, má tendenci soustavně prohrávat,
protože práce na funkcích má obvykle jasnějšího a bezprostřednějšího obchodního
zastánce. Vyhraďte chráněné procento inženýrské kapacity, běžný vzorec je
někde mezi 10 % a 20 %, konkrétně na nápravu dluhu, rozhodnuté předem, ne
čerstvě vyjednávané každý sprint, aby se splácení dluhu dělo samozřejmě, a ne
jen v důsledku krize.

### Přijměte část dluhu jako trvalou a řekněte to výslovně

Ne každá položka patří do aktivního plánu nápravy. Kde cena opravy skutečně
převyšuje cenu nesení položky donekonečna, zejména u kódu ve stabilním, zřídka
upravovaném, brzy vyřazovaném systému, tento závěr výslovně zdokumentujte a
položku přesuňte do záměrně odložené kategorie, místo aby bez konce ležela na
aktivním backlogu, kde její trvalá přítomnost tiše naznačuje práci, která se
nikdy skutečně nestane.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Žádné formální sledování dluhu | Žádná režie | Dluh ve výchozím stavu prohrává soutěž o prioritu; násobí se neviditelně |
| Neformální, ad hoc povědomí o dluhu | Nízká režie, určitá viditelnost | Nekonzistentní; spoléhá na paměť a zastánce jednotlivců |
| Formální, kvantifikovaný backlog dluhu | Spravedlivě soutěží o investice; umožňuje informované kompromisy | Vyžaduje průběžnou údržbu a disciplínu kvantifikace |
| Chráněná, vyhrazená kapacita na nápravu | Zajišťuje, že splácení probíhá důsledně, ne jen reaktivně | Krátkodobě snižuje kapacitu dostupnou pro práci na funkcích |

Ústředním napětím je **bezprostřední tlak dodávky versus dlouhodobá
udržovatelnost**. Práce na funkcích má téměř vždy jasnějšího, bezprostřednějšího
obchodního zastánce než náprava dluhu, což vytváří strukturální tlak, aby dluh
prohrál každé jednotlivé rozhodnutí o prioritě, i když jeho kumulativní cena je
vysoká. Napětí řešte tak, že nápravu dluhu zcela vyjmete ze soutěže položku po
položce pomocí chráněné, předem vyhrazené kapacity, takže se kompromis rozhoduje
záměrně a předem, a ne znovu projednává, a obvykle prohrává, v každém
jednotlivém plánovacím cyklu.

## Otázky k diskusi s vaším týmem

1. **Máme jediný, viditelný backlog technického dluhu, nebo žije povědomí o
   dluhu většinou v hlavách jednotlivých inženýrů?** Pokud je upřímná odpověď to
   druhé, je to největší mezera, kterou toto téma doporučuje zavřít jako první.

2. **Dokázali bychom u naší nejvyšší položky dluhu uvést cenu opravy a cenu nesení
   dostatečně konkrétně na spravedlivé srovnání s požadavkem na funkci?**
   Pokud ne, procvičte si tuto kvantifikaci společně jako skupinové cvičení na
   skutečné, aktuální položce.

3. **Jaké procento naší inženýrské kapacity skutečně jde na nápravu dluhu a bylo
   toto procento určeno záměrně, nebo je to jen to, co přežije po přidělení
   práce na funkcích?** Podívejte se na skutečné nedávné sprinty a spočítejte
   skutečné číslo, místo abyste se spoléhali na dojem.

4. **Je náš backlog dluhu prioritizován podle skutečného obchodního dopadu, nebo
   podle toho, která položka byla nejvytrvaleji vznášena nebo v něm leží
   nejdéle?** Porovnejte svou současnou prioritizaci s daty o změnovosti
   (téma 4.3) a ověřte, zda se shodují.

5. **Které položky dluhu bychom měli výslovně přijmout jako trvalé, místo aby bez
   konce ležely na aktivním backlogu?** Určete alespoň jednu skutečnou položku,
   u níž cena opravy skutečně převyšuje cenu nesení, a probereme její přesun do
   výslovně odloženého stavu.

6. **Jak se náš backlog dluhu změnil za poslední rok, roste, zmenšuje se, nebo je
   stabilní, a odpovídá ten trend naší intuici?** Sledujte to v čase místo
   pohledu jen na jediný snímek; trend bývá informativnější než absolutní
   velikost v kterémkoli okamžiku.

## Pohled podle sektorů

**Startup.** Záměrný, informovaný dluh je v této fázi často rozumná strategie:
dodávat rychle, aby se ověřila hypotéza, s jasným plánem k návratu k
určitým zkratkám, pokud se produkt osvědčí, je legitimní obchod, ne selhání.
Rizikem je ztratit přehled o tom, které zkratky byly záměrné a vratné a které se
s růstem kódové báze tiše staly trvalými, nezkoumanými závazky.

**Malá firma.** Jednoduchý, sdílený seznam, i neformální, pojmenovávající vaše
známé zkratky a jejich hrubou cenu opravy je v tomto měřítku obvykle dostatečný.
Hlavní disciplínou, kterou stojí za to přijmout, je pravidelný návrat k tomuto
seznamu, místo aby se tiše hromadil a stane neviditelným kvůli zvyku.

**Velký podnik.** Chráněná, předem vyhrazená kapacita na nápravu tu záleží
nejvíc, protože soutěž o prioritu mezi dluhem a prací na funkcích bez
strukturálního protizávaží spolehlivě favorizuje funkce napříč desítkami týmů
najednou. Standardizujte praxi kvantifikace dluhu v celé organizaci, aby se
položky dluhu daly spravedlivě porovnávat napříč týmy pro rozhodnutí o
investicích na úrovni portfolia.

**Státní správa.** Dlouhověké systémy hromadí dluh během let nebo desetiletí
přírůstkových, jednotlivě rozumných změn požadavků, často bez jakéhokoli
formálního sledování dluhu, dokud věc nevynutí krize. Kvantifikovaný, viditelný
backlog dluhu je skutečně přesvědčivým nástrojem k zdůvodnění rozpočtu na
modernizaci před kontrolními orgány, protože mění vágní tvrzení „systém je
starý“ ve konkrétní, ocenitelný argument pro investici.

## Příklady

**Velký podnik.** Platforma pro fakturaci jedné telekomunikační firmy nahromadila
přes deset let neformálně uznávaný, ale nikdy formálně nesledovaný technický
dluh, přičemž inženýři běžně na retrospektivách uváděli „fakturační jádro je
chaos“ bez jakéhokoli navazujícího jednání. Nový ředitel inženýrství požadoval,
aby každý tým vybudoval kvantifikovaný backlog dluhu s odhadem ceny opravy a
ceny nesení u každé položky, a vyhradil pevných 15 % inženýrské kapacity na
nápravu dluhu do budoucna. Během roku bylo vyřešeno pět položek s nejvyšší
cenou nesení, tvořících malý zlomek celkového backlogu podle počtu, a míra
selhání změn (téma 2.10) u nasazení souvisejících s fakturací se měřitelně
zlepšila, což ukázalo nepoměrný dopad zacílení na položky s nejvyšší cenou
nesení místo procházení backlogu v libovolném pořadí.

**Státní správa.** Základní systém zpracování dat jedné národní statistické
agentury, původně vybudovaný před více než dvaceti lety, nikdy neprošel
formálním posouzením dluhu, přestože mezi zaměstnanci panovalo široké neformální
uznání, že významné části jsou křehké a špatně pochopené. Strukturované
posouzení dluhu, které spojilo nálezy statické analýzy, data o hotspotech a
rozhovory s několika zbývajícími inženýry, kteří rozuměli nejstarším
komponentám, vytvořilo kvantifikovaný, prioritizovaný backlog, který přímo
podpořil víceletou žádost o rozpočet na modernizaci. Zásadní bylo, že posouzení
také výslovně určilo několik stabilních, zřídka měněných zděděných komponent
jako rozumné ponechat beze změny, čímž se vyhnulo zbytečně širokému a drahému
přepisu celého systému ve prospěch cílené investice do konkrétních oblastí, o
nichž data ukázala, že nesou nejvyšší průběžné náklady.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností záměrného řízení technického dluhu je odvrácené násobení nákladů:
každá neřešená zkratka mírně ztíží budoucí změny a tento efekt se bez zásahu
zrychluje, až vznikne kódová báze tak křehká, že i jednoduché změny jsou
pomalé a riskantní. Příklad telekomunikační firmy výše ukazuje návratnost
konkrétně: zacílení na malý počet položek s nejvyšší cenou nesení přineslo
měřitelné zlepšení dodávky a kvality, nepoměrné skromnému zlomku celkového
backlogu, který tyto položky představovaly.

Celkové náklady vlastnictví (TCO) jsou chráněná kapacita vyhrazená na nápravu,
typicky 10 % až 20 % inženýrského času, což je skutečný, viditelný náklad, který
krátkodobě soutěží s rychlostí dodávky funkcí. Tyto náklady stojí za to, protože
alternativa, neřízený, násobící se dluh, nakonec stojí mnohem víc ve zpomalené
dodávce a zvýšené míře vad napříč celou kódovou bází, nejen u konkrétních
položek ponechaných bez řešení.

## Antivzory a úskalí

- **Žádný viditelný, sledovaný backlog dluhu:** dluh ve výchozím stavu prohrává
  soutěž o prioritu a násobí se neviditelně.
- **Vágní, nekvantifikovaná tvrzení o dluhu:** málokdy dobře soutěží s
  konkrétními, kvantifikovanými požadavky na funkce při plánování.
- **Prioritizace dluhu podle stáří nebo hlasitosti zastánců místo dopadu:**
  odvádí omezenou kapacitu na nápravu špatným směrem.
- **Žádná chráněná kapacita na nápravu:** splácení dluhu probíhá jen reaktivně,
  po krizi, místo jako rutinní, záměrná praxe.
- **Brát veškerý dluh jako stejně hodný opravy:** plýtvá úsilím na položky s
  nízkým dopadem, zatímco položky s vysokou cenou nesení zůstávají bez řešení.
- **Nechat dluh bez konce ležet na aktivním backlogu, aniž by se kdy rozhodlo,
  že je trvalý:** naznačuje budoucí práci, která se nikdy nestane, a zahlcuje
  skutečnou prioritizaci.

## Model zralosti

- **Úroveň 1, Zahájení:** Technický dluh se probírá neformálně, bez sledovaného
  backlogu a bez kvantifikace; soustavně prohrává s prací na funkcích.
- **Úroveň 2, Rozvoj:** Některé týmy sledují dluh neformálně, ale chybí důsledná
  kvantifikace, viditelnost napříč týmy nebo chráněná kapacita na nápravu.
- **Úroveň 3, Standardizace:** V celé organizaci existuje viditelný,
  kvantifikovaný backlog dluhu s důsledně přidělovanou chráněnou kapacitou na
  nápravu.
- **Úroveň 4, Řízení:** Položky dluhu se prioritizují podle změřeného dopadu
  (cena nesení v kombinaci se změnovostí) a trvale přijímaný dluh je výslovně
  zdokumentován, místo aby zůstal nejednoznačný.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná
  zlepšení dodávky nebo kvality vysledovaná k cílené nápravě dluhu a řízení
  dluhu je rutinním, důvěryhodným vstupem do rozhodnutí o inženýrských
  investicích vedle práce na funkcích.

## Náměty k diskusi

1. Jaká je naše jediná položka dluhu s nejvyšší cenou nesení právě teď a dokázali bychom ji kvantifikovat?
2. Jaké procento naší kapacity dnes skutečně jde na nápravu dluhu?
3. Kterou položku dluhu bychom měli výslovně přijmout jako trvalou, místo aby nejednoznačně ležela na našem backlogu?
4. Vyrostl, zmenšil se, nebo zůstal náš backlog dluhu za poslední rok stejný?
5. Co by kvantifikované posouzení dluhu odhalilo, co naše současné neformální povědomí míjí?

## Hlavní poznatky

- Technický dluh je **zvládnutelný kompromis, ne ostudné tajemství**; kvantifikujte
  ho, místo aby zůstal vágní, věčně odkládanou starostí.
- **Kvantifikujte cenu opravy versus cenu nesení** u každé položky, aby
  spravedlivě soutěžila s prací na funkcích.
- **Prioritizujte podle dopadu** (cena nesení v kombinaci se změnovostí), ne
  podle stáří nebo hlasitosti zastánců.
- Vyhraďte **chráněnou, vyhrazenou kapacitu na nápravu**, rozhodnutou předem,
  protože dluh jinak spolehlivě prohrává soutěž položku po položce s prací na
  funkcích.
- **Výslovně přijměte část dluhu jako trvalou**, kde cena opravy převyšuje cenu
  nesení, místo aby nejednoznačně ležela na aktivním backlogu.

## Odkazy a další četba

- Cunningham, Ward, „The WyCash Portfolio Management System“ (zpráva o
  zkušenostech z OOPSLA, 1992): původ metafory technického dluhu.
- *Managing Technical Debt: Reducing Friction in Software Development*,
  Philippe Kruchten, Robert Nord a Ipek Ozkaya (komplexní zpracování měření a
  řízení technického dluhu).
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (techniky nápravy, ze kterých backlog dluhu nakonec čerpá).
- *Your Code as a Crime Scene*, Adam Tornhill (analýza hotspotů jako vstup do
  prioritizace dluhu, téma 4.3).
