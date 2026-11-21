# 7.4 Telemetrie výsledků jako nová Polárka

## Přehled a motivace

Toto téma uzavírá část 7 a v reálném smyslu uzavírá i argumentaci, kterou tato
celá kniha buduje od tématu 1.3, jediným přímým tvrzením: jakmile generativní
AI zlevní surový výstup, **telemetrie výsledků**
([telemetrie](https://en.wikipedia.org/wiki/Telemetry)), tedy nepřetržité,
instrumentované měření skutečných výsledků místo aktivity nebo výstupu,
přestává být jednou dobrou praxí z mnoha a stává se organizačním principem, kolem
něhož musí být program metrik postaven. Není to nová myšlenka, která by se tu
objevila poprvé. Je to myšlenka, kterou zavedlo téma 1.3 v úvodní části knihy,
nyní podaná jako nutná, nikoli jen žádoucí odpověď na technologickou změnu,
která učinila každou alternativu nebezpečnější, než bývala.

Logika je přímá. Před generativní AI byl objem výstupu nedokonalým, ale ne
bezcenným zástupným ukazatelem úsilí a zhruba i hodnoty: tým, který dodal více
funkcí, vykonal přinejmenším více práce, i když to nebyla vždy ta správná
práce. Generativní AI přerušuje i tuto volnou souvislost: objem výstupu už
spolehlivě neukazuje úsilí, protože ho nástroj vytvoří za pár sekund, a
rozhodně neukazuje hodnotu, protože téma 7.3 ukázalo, že nafouknutý výstup
může koexistovat se zhoršující se kvalitou. Metriky, které touto změnou
projdou nedotčené, jsou přesně ty, k nimž kniha od úvodních témat směřuje:
míra uniklých vad (téma 5.1), přijetí funkcí (téma 5.2), výsledky pro
zákazníky a podnik (téma 5.3), spolehlivost (část 6) a pohoda vývojářů
(část 3). Žádná z nich nezávisí na tom, jak byl podkladový kód vytvořen;
všechny měří, co se skutečně stalo jako výsledek.

Pro velké týmy má argument tohoto tématu přímé, praktické důsledky pro to, jak
by se měl program metrik budovat a přebudovávat. Velké podniky, které
přepracovávají své inženýrské dashboardy ve světle přijetí AI, by měly
investice vážit konkrétně směrem k infrastruktuře telemetrie výsledků,
kterou toto téma popisuje. Státní správa, která hodnotí jak nástroje AI,
tak širší technologické programy, do nichž jsou zasazeny, by měla obojí
poměřovat stejným standardem telemetrie výsledků, který toto téma doporučuje
jako základ každého důvěryhodného hodnocení odolného vůči budoucnosti.

## Klíčové zásady

- **Telemetrie výsledků se stává nutnou, nikoli jen žádoucí, jakmile je výstup
  levný.** Je to zakládající zásada tématu 1.3, nyní naléhavá, ne
  aspirační.
- **Metriky, které touto změnou projdou, jsou ty, k nimž kniha celou dobu
  směřuje**: uniklé vady, přijetí, obchodní výsledky, spolehlivost a pohoda.
- **Program metrik postavený primárně na metrikách výstupu je nyní závazek, nejen
  neoptimální volba.** Metriky výstupu lze levně a rychle nafouknout ve
  velkém.
- **Telemetrie výsledků vyžaduje skutečnou investici**: instrumentaci,
  trpělivost se pomalejším signálem a organizační disciplínu odolat
  tahu k rychlejším, levnějším, ale nyní nespolehlivým metrikám výstupu.
- **Tato zásada přežije každý konkrétní nástroj AI i dodavatele.** Je to
  trvalá odpověď na trvalou změnu toho, co výstup znamená, nikoli dočasná
  úprava kvůli přechodnému trendu.

## Doporučení

### Zkontrolujte poměr svých investic do metrik: telemetrie výsledků versus sledování výstupu

Zhruba spočítejte, jaký podíl vaší současné infrastruktury metrik,
instrumentačního úsilí, místa na dashboardu a času porad o revizích připadá
na metriky výsledků (část 5, část 6, pohoda vývojářů z části 3) oproti
metrikám výstupu a aktivity (počet nasazení, objem commitů, propustnost pull
requestů). Pokud převažuje sledování výstupu, je samotný tento poměr nyní
závazkem podle argumentu tohoto tématu a jeho přebalancování je nejúčinnější
jednotlivou změnou, kterou toto téma doporučuje.

### Investujte do infrastruktury telemetrie výsledků záměrně, jako do prvotřídní inženýrské investice

Měření výsledků, sledování přijetí funkcí, korelace s obchodními výsledky
(téma 5.3), instrumentace spolehlivosti (část 6) vyžadují skutečnou,
průběžnou inženýrskou investici, kterou mnohé organizace historicky
podceňovaly ve srovnání s poměrně levnými a snadnými metrikami výstupu,
které dnes dominují mnoha dashboardům. Zacházejte s touto investicí do
infrastruktury se stejnou vážností, s jakou tato kniha přistupuje ke každé
jiné významné inženýrské schopnosti, ne jako s vedlejší záležitostí za
samotnou investicí do nástrojů AI.

### Přijměte a komunikujte, že telemetrie výsledků je pomalejší, a zabudujte trpělivost do očekávání své organizace

Metriky výsledků jsou téměř z podstaty zpožděnější a hlučnější než metriky
výstupu (rozlišení předstihových a zpožděných ukazatelů z tématu 1.3, statistická
opatrnost z tématu 1.6). Organizace zvyklá na rychlou, uspokojivou zpětnou
vazbu při sledování rostoucího čísla výstupu si musí vybudovat skutečnou
trpělivost se pomalejším, poctivějším signálem, který telemetrie výsledků
poskytuje, a vedení musí tuto trpělivost aktivně komunikovat a vzorově
uplatňovat, místo aby pod tlakem na rychlé výsledky reflexivně sahalo po
rychlejší, nyní nespolehlivé alternativě.

### Využijte tuto změnu jako příležitost vyřadit skutečně zastaralé metriky výstupu, nejen přidat vedle nich metriky výsledků

V duchu disciplíny tématu 1.1 vyřazovat metriky, které si už nezaslouží své
místo, použijte tuto chvíli jako záměrnou příležitost odstranit metriky
výstupu a aktivity, které tato změna konkrétně znehodnotila, místo prostého
přidání metrik výsledků na nezměněný stávající dashboard. Dashboard, který
si ponechá všechny staré metriky výstupu a přidá k nim nové metriky výsledků,
bobtná, místo aby se skutečně zlepšil.

### Berte investici do telemetrie výsledků jako trvalou, nezávislou na jakémkoli konkrétním nástroji AI či vztahu s dodavatelem

Budujte infrastrukturu telemetrie výsledků jako trvalou organizační schopnost,
ne jako reakci specifickou pro ten nástroj AI, který vaše organizace právě
tento rok používá. Tato zásada i infrastruktura, kterou vyžaduje, přežijí
každý konkrétní vztah s dodavatelem či generaci nástrojů, a její budování
jako trvalé schopnosti chrání váš program metrik před příští technologickou
změnou stejně jako před současnou.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Dashboard s převahou metrik výstupu | Rychlá, levná zpětná vazba; povědomý většině organizací | Nyní přímo nespolehlivý vzhledem k vlivu generativní AI na náklady výstupu |
| Dashboard s převahou telemetrie výsledků | Odolný vůči této změně; měří to, na čem skutečně záleží | Pomalejší, hlučnější signál; vyžaduje skutečnou investici do instrumentace |
| Přidání metrik výsledků vedle nezměněných metrik výstupu | Postupné, méně rušivé | Vytváří bobtnání dashboardu místo skutečného zlepšení |
| Úplné, záměrné přebalancování směrem k telemetrii výsledků | Řeší změnu přímo a úplně | Vyžaduje nejvýznamnější změnu v organizaci i investicích |

Hlavní napětí je v reálném smyslu totéž, s nímž kniha začínala v tématu 1.3,
nyní vyostřené do nejnaléhavější podoby: **rychlá, povědomá zpětná vazba
versus pomalejší, poctivý signál**. Metriky výstupu bylo vždy snazší a
rychlejší vytvořit; argument tohoto tématu je, že generativní AI posunula
tuto směnu z pouze neoptimální na přímo nebezpečnou. Napětí vyřešíte tak,
jak kniha doporučuje od úvodního tématu: rozhodně vážit směrem k výsledkům,
přijmout pomalejší zpětnou vazbu, která k měření skutečné hodnoty patří, a
nepohodlí z této pomalejší zpětné vazby brát jako poctivou cenu za měření
něčeho skutečného místo něčeho jen pohodlného.

## Otázky k diskusi s vaším týmem

1. **Jaký podíl naší současné infrastruktury metrik a pozornosti dashboardu
   připadá na metriky výsledků oproti metrikám výstupu a aktivity?** Spočítejte
   tento poměr poctivě; většina organizací, které ho posuzují poprvé, ho
   shledá více zatíženým výstupem, než by hádaly.

2. **Jakou konkrétní investici do infrastruktury telemetrie výsledků jsme
   odkládali ve prospěch rychlejšího, levnějšího sledování výstupu?**
   Pojmenujte konkrétní příklad, instrumentaci přijetí funkcí či nástroje
   pro korelaci s obchodními výsledky, a probraťte, co by bylo třeba k jeho
   skutečnému vybudování.

3. **Vybudovala naše organizace skutečnou trpělivost s pomalejší zpětnou
   vazbou telemetrie výsledků, nebo nás tlak na rychlé výsledky stále táhne
   zpět k rychlejším, ale nyní nespolehlivým metrikám výstupu?** Buďte k
   tomuto vzorci upřímní ve svém nedávném vykazování a poradách o revizích.

4. **Která metrika výstupu či aktivity na našem současném dashboardu je
   skutečným kandidátem na vyřazení, když se na ni nyní konkrétně vztahuje
   argument tohoto tématu?** Určete alespoň jednu a probraťte, co by ji
   mělo nahradit, místo aby tam zůstala jen mezera.

5. **Kdyby se náš dodavatel nástrojů AI nebo současná generace asistentů pro
   programování s AI příští rok dramaticky změnily, obstál by náš program
   metrik?** Tím se ověří, zda je vaše investice do telemetrie výsledků
   skutečně trvalá, vybudovaná jako stálá schopnost, nebo jen reakce
   specifická pro vaši současnou situaci s nástroji.

6. **Jak by vypadalo, kdyby se naše organizace plně zavázala argumentu tohoto
   tématu a rozhodně, nikoli postupně přebalancovala své investice do metrik
   směrem k výsledkům?** Načrtněte to konkrétně, nenechávejte to abstraktní;
   propast mezi současným stavem a touto vizí je skutečný plán vaší
   organizace, jak na tuto změnu reagovat.

## Pohled podle sektorů

**Startup.** Vybudovat telemetrii výsledků včas, než se metriky výstupu stihnou
stát hluboce zakořeněným organizačním zvykem, je skutečně snazší než ji
dodatečně doplňovat. Mladá firma, která přijímá asistenci AI při programování
od začátku, má skutečnou příležitost postavit svůj program metrik nejprve na
výsledcích, místo aby musela rozmotávat existující kulturu s převahou metrik
výstupu.

**Malá firma.** Zaměřte investici do telemetrie výsledků na jedinou metriku
výsledku, která nejpříměji odráží přežití a růst (téma 5.3), místo pokusu o
komplexní instrumentaci napříč každou kategorií výsledků, kterou kniha
pokrývá. Mírná, cílená investice do telemetrie výsledků překoná komplexní
dashboard metrik výstupu, který argument tohoto tématu nyní konkrétně
znehodnotil.

**Velký podnik.** Přebalancování, které toto téma doporučuje, je v tomto
měřítku skutečná, významná organizační změna, která si pravděpodobně vyžádá
podporu vedení a investiční plán na více čtvrtletí. Zacházejte s ní se stejnou
vážností jako s každou jinou velkou investicí do infrastruktury, kterou kniha
pokrývá, a využijte konkrétní příklady z témat 7.1 a 7.3, tedy inflaci metrik a
ředění kvality, které by přebalancovaný dashboard zachytil dříve, k vybudování
interního argumentu pro tuto investici.

**Státní správa.** Vládní technologické programy hodnocené především podle
dodávky a metrik výstupu (dodané funkce, dodržení harmonogramu) jsou stále
zranitelnější právě vůči skepsi, kterou popsalo téma 5.3, a argument tohoto
tématu tuto zranitelnost dále vyostřuje, jak se přijímání nástrojů AI šíří
širším odvětvím, z něhož vládní úřady získávají lidi a s nímž se srovnávají.
Vybudujte telemetrii výsledků jako primární základ veřejného vykazování a
zdůvodnění rozpočtu a umístěte svou organizaci před tuto změnu, nikoli za ni.

## Příklady

**Velký podnik.** Vedení inženýrství jedné softwarové společnosti, přímo
podnícené téměř neštěstím s inflací metrik popsaným v příkladu fintech
společnosti v tématu 7.1, provedlo úplný audit poměru svých investic do metrik
a zjistilo, že téměř 70 % místa na dashboardu a instrumentačního úsilí je
věnováno metrikám výstupu a aktivity, zatímco do telemetrie výsledků se
investovalo jen mírně a nekonzistentně. Během následujícího roku společnost
tento poměr záměrně přebalancovala: vyřadila několik metrik výstupu, které
audit z tématu 7.1 označil za nejvíce vystavené, a uvolněnou kapacitu
investovala do instrumentace přijetí funkcí a obchodních výsledků (témata
5.2, 5.3). Výsledný dashboard, představený na zasedání správní rady
následujícího roku, označil tentýž dříve skeptický člen rady výslovně za
smysluplně důvěryhodnější základ hodnocení inženýrských investic než verze
s převahou výstupů, kterou nahradil.

**Státní správa.** Národní agentura digitálních služeb, budující nový
program inženýrských metrik od nuly právě proto, že její předchozí dashboard
s převahou metrik výstupu vyvolal trvalou skepsi zákonodárců, výslovně přijala
zásadu tohoto tématu jako zakládající návrhové rozhodnutí: telemetrie
výsledků, tedy doba čekání občana, míra dokončení služby a míra uniklých
vad, by byla primárním základem veškerého veřejného vykazování, přičemž
metriky výstupu a dodávky by zůstaly jen jako vnitřní diagnostické nástroje,
nikdy jako hlavní důkaz předkládaný navenek. Tento návrh stavějící na
výsledcích, záměrně vybudovaný ve světle změny generativní AI, kterou tato
část popisuje, dal vykazování agentury trvanlivost a důvěryhodnost u
kontrolního výboru, jakých její předchůdce, postavený na předpokladech o
výstupních metrikách dřívější generace, nikdy nedosáhl.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost rozhodného závazku k telemetrii výsledků je program metrik, který
zůstane důvěryhodný a věrohodný skrz současnou technologickou změnu i
cokoli, co přijde po ní, místo takového, který bude potřebovat další
významné přepracování, až výstup příště zlevní nějaká budoucí technologická
změna. Příklad softwarové společnosti výše to ukazuje konkrétně:
přebalancovaný dashboard přímo napravil důvěryhodnost, kterou dřívější verze s
převahou výstupu vážně ohrozila.

Celkové náklady vlastnictví (TCO) tvoří investice do infrastruktury telemetrie
výsledků, kterou toto téma doporučuje, tedy skutečně významná práce na více
čtvrtletí pro velkou organizaci, vážená proti trvalému, dlouhodobému riziku
programu metrik, který se stává postupně méně důvěryhodným, jak výstup dál
levněje. Není to náklad, který by vám kniha navrhovala přijmout lehkovážně;
je to přímý, nutný důsledek toho, že zakládající argument tématu 1.3 berete
tak vážně, jak to po vás tato závěrečná část knihy žádá.

## Antivzory a úskalí

- **Brát tuto změnu jako vyžadující jen postupnou úpravu místo skutečného
  přebalancování:** podceňuje rozsah změny, kterou generativní AI přinesla do
  významu metrik výstupu.
- **Přidávat metriky výsledků vedle nezměněné, stále dominantní sady metrik
  výstupu:** vytváří bobtnání dashboardu místo skutečného přebalancování,
  které toto téma prosazuje.
- **Budovat investici do telemetrie výsledků jako reakci na konkrétní
  současný nástroj AI místo jako trvalou schopnost:** nechává organizaci
  vystavenou příští technologické změně stejným způsobem.
- **Nevybudovat organizační trpělivost s pomalejší zpětnou vazbou telemetrie
  výsledků:** riziko návratu k rychlejším, ale nyní nespolehlivým metrikám
  výstupu pod tlakem na rychlé výsledky.
- **Vyřadit metriky výstupu bez skutečné náhrady telemetrií výsledků:**
  zanechává mezeru v měření místo skutečného zlepšení.
- **Prezentovat tuto změnu zainteresovaným stranám jen jako reakci na nástroje
  AI, a ne jako naplnění zakládající zásady této knihy:** podhodnocuje
  trvanlivost a obecnost argumentu.

## Model zralosti

- **Úroveň 1, Zahájení:** Dashboard zůstává ovládán metrikami výstupu, bez
  záměrné reakce na změnu, kterou tato část popisuje.
- **Úroveň 2, Rozvoj:** Některé metriky výsledků byly přidány, ale celkový
  poměr investic zůstává výstupově těžký a žádné metriky nebyly záměrně
  vyřazeny.
- **Úroveň 3, Standardizace:** Byl proveden záměrný audit a přebalancování
  směrem k telemetrii výsledků, skutečně zastaralé metriky výstupu byly
  vyřazeny, v celé organizaci.
- **Úroveň 4, Řízení:** Infrastruktura telemetrie výsledků se bere jako
  prvotřídní, průběžná inženýrská investice a organizační trpělivost s její
  pomalejší zpětnou vazbou se aktivně pěstuje a chrání.
- **Úroveň 5, Orchestrace:** Program metrik organizace je veden telemetrií
  výsledků jako trvalou návrhovou zásadou, prokázanou jako odolnou skrz
  současnou technologickou změnu a výslovně vybudovanou tak, aby zůstala
  odolná skrz cokoli, co přijde dál.

## Náměty k diskusi

1. Jaký je náš skutečný současný poměr investic do metrik výsledků a metrik výstupu?
2. Kterou jedinou metriku výstupu bychom měli toto čtvrtletí vyřadit a která metrika výsledku ji má nahradit?
3. Kde nás organizační netrpělivost nedávno zatáhla zpět k rychlejším, ale méně důvěryhodným metrikám výstupu?
4. Je naše investice do telemetrie výsledků trvalá, nebo vázaná konkrétně na naši současnou situaci s nástroji AI?
5. Co by bylo třeba k plnému závazku k argumentu tohoto tématu místo postupných úprav?

## Hlavní poznatky

- Telemetrie výsledků se stává **nutnou, nikoli jen žádoucí**, jakmile
  generativní AI zlevní výstup; je to zakládající zásada tématu 1.3, nyní
  naléhavá.
- Metriky, které **tuto změnu přežijí**, jsou ty, k nimž kniha celou dobu
  směřuje: uniklé vady, přijetí, obchodní výsledky, spolehlivost a pohoda.
- **Zkontrolujte a přebalancujte poměr svých investic do metrik** záměrně,
  vyřaďte skutečně zastaralé metriky výstupu a nepřidávejte jen metriky
  výsledků vedle nich.
- Budujte organizační **trpělivost s pomalejší zpětnou vazbou telemetrie
  výsledků** a odolávejte tahu zpět k rychlejším, ale nyní nespolehlivým
  metrikám výstupu pod tlakem.
- Budujte tuto investici jako **trvalou schopnost**, nezávislou na
  jakémkoli konkrétním nástroji AI či dodavateli, která chrání váš program
  metrik před budoucími technologickými změnami stejně jako před současnou.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (základ měření založeného na výsledcích, na němž
  stojí celá tato kniha i toto závěrečné téma části 7).
- *Lean Analytics*, Alistair Croll a Benjamin Yoskovitz (rozlišení
  akceschopných metrik a metrik pro parádu, které argument tohoto tématu
  rozšiřuje do věku AI).
- *The Innovator's Dilemma*, Clayton M. Christensen (obecný vzorec, kdy se zavedené metriky a postupy stávají závazky při
  převratné technologické změně).
- *Measure What Matters*, John Doerr (cílení orientované na výsledky jako
  organizační princip programu metrik, model, který by podle tohoto tématu
  měl být nyní výchozí, nikoli výjimečný).
