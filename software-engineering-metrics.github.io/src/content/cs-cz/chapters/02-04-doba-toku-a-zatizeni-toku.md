# 2.4 Doba toku a zatížení toku

## Přehled a motivace

**Doba toku** je celkový uplynulý čas od vstupu položky toku (téma 2.2) do
hodnotového proudu po její dodání. Měří odezvu napříč celou cestou od
identifikace potřeby byznysu po okamžik, kdy zákazník obdrží hodnotu.
**Zatížení toku** je celkový počet položek toku, které jsou v kterémkoli okamžiku
v hodnotovém proudu aktivní nebo čekají, název Flow Frameworku pro to, čemu téma
2.5 říká rozpracovaná práce. Společně jsou to dvě metriky Flow Frameworku, které
nejpříměji souvisejí s matematikou front, protože zatížení toku s dobou toku
nejen koreluje, ale matematicky ji určuje.

Tento vztah je **[Littleův zákon](https://en.wikipedia.org/wiki/Little%27s_law)**,
důkaz z teorie front (téma 2.7 jej pokrývá celý), podle něhož se průměrný počet
položek ve stabilním systému rovná průměrné intenzitě příchodů vynásobené
průměrnou dobou, kterou každá položka v systému stráví. Aplikováno zde: zatížení
toku se rovná intenzitě příchodů krát době toku. Je to nejužitečnější fakt tohoto
tématu, protože mění argument, který býval kvalitativní, „jsme příliš přetížení,
věci trvají příliš dlouho“, v prokazatelný, kvantitativní, který obchodní vedoucí
jen těžko odmítne: pokud zatížení toku dál roste, zatímco intenzita příchodů
zůstává stejná, doba toku také matematicky zaručeně poroste, nejen pravděpodobně.

U velkých týmů je to často nejpřesvědčivější číslo v celém rámci. Obchodní
vedoucí, který se brání myšlence říci novým požadavkům ne, protože každý
požadavek se zdá jednotlivě oprávněný, často přijme, že přetížení hodnotového
proudu prokazatelně zpomaluje každou položku, která už v něm je, jakmile se
zatížení toku sleduje a vztah k době toku se ukáže přímo, místo aby se
dokazoval abstraktně. Velké podniky žonglující mnoha souběžnými strategickými
iniciativami a vládní programy provozující desítky paralelních pracovních
proudů se na tento důkaz, nejen na intuici za ním, spoléhají při zdůvodňování
toho, že je třeba odmítnout zahájení další práce najednou.

## Klíčové zásady

- **Zatížení toku matematicky určuje dobu toku, prostřednictvím Littleova
  zákona.** Není to korelace; je to důkaz, který platí pro každý stabilní
  hodnotový proud.
- **Doba toku zahrnuje celý hodnotový proud, nejen inženýrství.** Začíná, když
  je identifikována potřeba byznysu, ne když inženýrství práci převezme, což
  cycle time z tématu 2.6 dále rozkládá.
- **Rostoucí zatížení toku je nejdřívějším varovným signálem rostoucí doby
  toku.** Protože je vztah prokazatelný, lze zatížení toku sledovat jako
  předstihový ukazatel, nikoli jen objevit poté, co se doba toku už zhoršila.
- **Vstupní bod hodnotového proudu musí být pevně určen a zdokumentován.** Kde
  začíná hodiny doby toku, je definiční volba vystavená stejnému riziku
  manipulace jako kterákoli jiná hranice metriky v této knize.
- **Obchodní vedoucí může jednat přímo na zatížení toku.** Na rozdíl od doby
  toku, která je zpožděným měřením, je zatížení toku pákou: říci ne zahájení
  nové práce je akce dostupná ještě dnes.

## Doporučení

### Stanovte a zdokumentujte vstupní bod hodnotového proudu dřív, než změříte dobu toku

Rozhodněte výslovně, zda doba toku začíná, když je potřeba byznysu poprvé
identifikována, když je formálně schválena, nebo když inženýrství zahájí práci,
a tuto volbu zdokumentujte tak, jak téma 1.4 doporučuje pro každou chartu metrik.
Toto jediné rozhodnutí určuje, zda doba toku měří skutečnou odezvu od začátku do
konce, nebo jen užší výřez, který inženýrství řídí, a pozdější změna definice
bez zveřejnění je ústředním rizikem manipulace tohoto tématu.

### Sledujte zatížení toku průběžně, ne periodicky

Protože je zatížení toku prostřednictvím Littleova zákona předstihovým
ukazatelem doby toku, která teprve přijde, sledujte ho jako živé, průběžně
aktualizované číslo, nikoli jako periodický snímek. Zatížení toku, které už
týdny rostlo, než se na ně někdo podíval, už stejně dlouho tiše a neviditelně
prodlužovalo dobu toku, než ho metrika dohnala.

### Používejte Littleův zákon výslovně, když argumentujete pro limit WIP nebo navýšení kapacity

Když prosazujete, aby se zahajovalo méně souběžné práce, nebo aby se přidala
kapacita, prezentujte skutečnou rovnici, nejen doporučení: zatížení toku se
rovná intenzitě příchodů krát době toku, takže pokud je intenzita příchodů
zhruba pevná, snížení zatížení toku matematicky zaručeně sníží dobu toku. Je to
podstatně silnější argument pro skeptickou zainteresovanou stranu než
nekvantifikované tvrzení, že „jsme příliš zaneprázdnění“, protože je
prokazatelný, nikoli pouze tvrzený.

### Oddělte dobu toku od základních příčin zatížení toku, než navrhnete nápravu

Když je zatížení toku vysoké, prošetřete, který typ položek toku (téma 2.2) jej
skutečně pohání: příliš mnoho souběžně zahájených funkcí, hromada neřešených vad
nebo práce na rizicích uvízlá v čekání na sdílené schválení. Každá příčina
implikuje jinou nápravu a zacházení s „zatížení toku je vysoké“ jako s jediným,
nediferencovaným problémem obvykle vyústí v obecnou, neúčinnou reakci.

### Křížově ověřte dobu toku s cycle time, abyste izolovali, kde zpoždění skutečně vzniká

Protože doba toku zahrnuje celý hodnotový proud a cycle time (téma 2.6) jen jeho
inženýrskou část, porovnejte je přímo. Velká mezera mezi dobou toku a cycle time
znamená, že většina zpoždění vzniká dřív, než inženýrství práci vůbec uvidí, ve
frontách schvalování, backlozích priorit nebo předáních mezi týmy, což ukazuje
na zcela jinou nápravu než mezera soustředěná uvnitř samotného inženýrství.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Měření doby toku jen od převzetí inženýrstvím | Jednoduché, odpovídá existující instrumentaci cycle time | Přehlíží zpoždění před inženýrstvím, podhodnocuje skutečnou odezvu |
| Měření doby toku od skutečné identifikace potřeby byznysu | Zachycuje skutečnou odezvu od začátku do konce | Vyžaduje instrumentaci fází mimo přímou kontrolu inženýrství |
| Periodické snímky zatížení toku | Levné příležitostně spočítat | Ztrácí hodnotu předstihového ukazatele; rostoucí zatížení zůstává příliš dlouho nepovšimnuto |
| Průběžné sledování zatížení toku | Živý, použitelný předstihový ukazatel | Vyžaduje trvalou integraci nástrojů, ne jen příležitostnou zprávu |

Hlavním napětím je **rozsah versus dosah instrumentace**. Měřit dobu toku jen od
převzetí inženýrstvím je mnohem snazší instrumentovat, protože znovu využívá
data o cycle time, která téma 2.6 už sbírá, ale tiše podhodnocuje skutečnou
odezvu tím, že ignoruje vše, co se děje, než inženýrství práci uvidí. Řešte to
tak, že začnete užším, inženýrským měřením, pokud je to vše, co dnes dokážete
instrumentovat, ale prodloužení výchozího bodu doby toku proti proudu, do
identifikace potřeby byznysu a stanovování priorit, berte jako prioritu
blízké budoucnosti, nikoli jako trvalé omezení.

## Otázky k diskusi s vaším týmem

1. **Kde dnes hodiny naší doby toku skutečně začínají a shodují se všichni v
   organizaci, že je to správný výchozí bod?** Nesoulad mezi tím, kde
   zainteresované strany předpokládají začátek hodin, a kde skutečně začínají, je
   častým, tichým zdrojem nedůvěry k metrice. Potvrďte, že zdokumentovaná
   definice odpovídá sdílenému chápání.

2. **Ověřili jsme někdy, zda naše změřené zatížení toku, intenzita příchodů a
   doba toku skutečně splňují Littleův zákon?** Pokud zhruba nesedí, jedno ze
   tří čísel se měří nekonzistentně. Projděte skutečná čísla společně místo
   předpokladu, že by kontrola prošla.

3. **Sleduje se zatížení toku průběžně, nebo by stálý růst týdny zůstal
   nepovšimnut, než by se někdo podíval?** Předstihový ukazatel vás chrání jen
   tehdy, pokud ho skutečně někdo sleduje téměř v reálném čase, ne jen
   prohlíží ve čtvrtletní zprávě.

4. **Když zatížení toku roste, dokážeme říci, který typ položek toku jej
   skutečně pohání, nebo se čte jako jediné nediferencované číslo?** Obecná
   diagnóza „jsme přetížení“ vyrábí obecnou, často neúčinnou reakci. Zkontrolujte,
   zda vaše současná instrumentace dokáže rostoucí zatížení připsat konkrétní
   příčině.

5. **Jak velká je mezera mezi naší dobou toku a naším cycle time a naznačuje
   tato mezera, že většina zpoždění vzniká před inženýrstvím, nebo po něm?**
   Toto srovnání často odhalí, že největší příležitost ke zlepšení leží zcela
   mimo kontrolu samotného inženýrství.

6. **Zúžil někdo někdy tiše výchozí bod naší doby toku, aby číslo vypadalo lépe,
   aniž by byla změna zdokumentována nebo zveřejněna?** Je to ústřední riziko
   manipulace tohoto tématu vyslovené přímo. Zeptejte se poctivě, zda se vaše
   definice někdy takto neposunula.

## Pohled podle sektorů

**Startup.** Zatížení toku bývá nízké jednoduše proto, že není dost lidí, aby
zahájili mnoho práce najednou, ale stejný matematický vztah platí v okamžiku,
kdy se zakladatel nebo vedoucí inženýr stane osobním úzkým hrdlem pro mnoho
souběžných iniciativ. Sledujte zatížení toku neformálně i bez specializovaných
nástrojů, protože Littleův zákon platí bez ohledu na měřítko.

**Malá firma.** Jednoduchý, sdílený seznam všeho, co je právě aktivní, obvykle
stačí k výpočtu zatížení toku bez specializovaného softwaru pro správu
hodnotového proudu. Užitečným návykem je kontrolovat ho dost často, aby se
rostoucí číslo zachytilo brzy, a ne až poté, co se doba toku viditelně zhorší.

**Velký podnik.** Tady Littleův zákon vydělává jako argument, nejen jako
metrika: velká organizace žonglující desítkami souběžných strategických
iniciativ může využít prokazatelný vztah mezi zatížením toku a dobou toku k
doložitelnému zdůvodnění řazení práce do sledu, čehož čistě kvalitativní
argument „jsme příliš zaneprázdnění“ proti odhodlanému tlaku zainteresovaných
stran málokdy dosáhne.

**Státní správa.** Víceleté programy běžně hromadí velké, implicitní zatížení
toku napříč mnoha pracovními proudy, z nichž každý je jednotlivě zdůvodněn, bez
viditelnosti celkového součtu v celé organizaci. Předložit Littleův zákon
přímo, ukázat, že růst doby toku samotného programu matematicky vysvětluje jeho
vlastní rostoucí zatížení toku, je často nejjasnějším a nejpřesvědčivějším
důkazem pro řazení pracovních proudů do sledu místo spouštění všech paralelně
donekonečna.

## Příklady

**Velký podnik.** Platformní organizace mediální technologické firmy
provozovala dvaadvacet souběžných strategických iniciativ při kapacitě
realistické zhruba pro dvanáct, což byl nesoulad, který nikdo nekvantifikoval, až
nový viceprezident pro inženýrství požádal o zatížení toku přímo. Doba toku
mediánové iniciativy za předchozí rok vzrostla o 40 %, trend, který vedení
připisovalo tomu, že „práce se stává těžší“. Předložení Littleova zákona spolu
se skutečnými čísly zatížení toku a intenzity příchodů ukázalo, že růst je plně
vysvětlen samotným rostoucím zatížením toku, bez potřeby změny obtížnosti
podkladové práce. Organizace seřadila iniciativy do sledu na udržitelné zatížení
toku a mediánová doba toku klesla během dvou čtvrtletí téměř o třetinu.

**Státní správa.** Modernizační program federální agentury pro správu grantů
nahromadil zatížení toku napříč desítkami paralelních pracovních proudů bez
jediného sledovaného součtu, přičemž každý sponzor pracovního proudu věřil, že
jeho vlastní iniciativa je izolovaně vybavena přiměřeně. Analýza programové
kanceláře pomocí Littleova zákona ukázala, že agregovaná doba toku programu,
doba od schválení pracovního proudu po jeho dodání, se dá téměř přesně
předpovědět z jeho agregovaného zatížení toku samotného, což přesvědčilo
sponzory, kteří se přes rok bránili argumentům pro snížení priority. Program
přijal výslovný strop zatížení toku a nové pracovní proudy nyní vstupují do
fronty, místo aby začaly okamžitě bez ohledu na aktuální zatížení.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností společného sledování zatížení toku a doby toku je prokazatelný, nejen
přesvědčivý argument pro řazení práce do sledu místo spouštění všeho paralelně.
Výše uvedený příklad mediální technologické firmy, který vysvětlil celou
regresi doby toku samotným zatížením toku, je vzorcem, který tato kombinace
spolehlivě vyrábí: konkrétní, kvantitativní argument uspěje tam, kde kvalitativní
výzva k „příliš velkému zaneprázdnění“ dříve proti skutečnému organizačnímu
tlaku na zahájení další práce selhala.

Celkové náklady vlastnictví (TCO) jsou nízké ve srovnání s přesvědčivou silou:
zatížení toku vyžaduje jen živý počet aktivních a čekajících položek a doba toku
vyžaduje instrumentaci vstupního bodu hodnotového proudu, práci, která se
zaplatí při prvním předejití tomu, aby se organizace zavázala k víc souběžným
iniciativám, než kolik její skutečná kapacita unese.

## Antivzory a úskalí

- **Tiché zúžení výchozího bodu doby toku, aby číslo vypadalo lépe:** způsob
  manipulace v srdci tohoto tématu. Posunutí začátku hodin ze skutečné
  identifikace potřeby byznysu na pozdější bod, převzetí inženýrstvím,
  formální schválení, zkrátí dobu toku, aniž by se skutečná odezva změnila, a
  může se dít natolik postupně, že žádná jednotlivá změna nevypadá jako záměrná
  manipulace. Pojistkou je výslovné zdokumentování vstupního bodu v chartě metrik
  (téma 1.4) a pravidelný audit proti zdokumentované definici, tedy stejná
  disciplína, kterou tato kniha žádá u každé hranice metriky.
- **Měřit zatížení toku jen periodicky:** promarní jeho hodnotu předstihového
  ukazatele, protože stálý růst může týdny zůstat nepovšimnut.
- **Brát zatížení toku jako jediné nediferencované číslo:** přehlédne, který typ
  položek toku skutečně přetížení pohání, a vyrobí obecnou místo cílené reakce.
- **Ignorovat mezeru mezi dobou toku a cycle time:** přehlédne, zda je zpoždění
  soustředěno před, nebo po inženýrství, což implikuje velmi odlišné nápravy.
- **Argumentovat pro snížení souběžné práce bez výslovného předložení Littleova
  zákona:** kvalitativní výzvu zainteresovaná strana odmítne mnohem snáz než
  kvantitativní, prokazatelný vztah.
- **Předpokládat, že Littleův zákon platí jen ve velkém měřítku:** platí pro
  každý stabilní systém bez ohledu na velikost, včetně jediného přetíženého
  jednotlivce.

## Model zralosti

- **Úroveň 1, Zahájení:** Nesleduje se doba toku ani zatížení toku; zpoždění se
  probírá anekdoticky bez podpůrných dat.
- **Úroveň 2, Rozvoj:** Doba toku se sleduje jen od převzetí inženýrstvím a
  zatížení toku se kontroluje periodicky místo průběžně.
- **Úroveň 3, Standardizace:** Doba toku se měří od zdokumentovaného vstupního
  bodu hodnotového proudu platného v celé organizaci a zatížení toku se sleduje
  průběžně jako předstihový ukazatel.
- **Úroveň 4, Řízení:** Littleův zákon se používá výslovně k zdůvodnění
  rozhodnutí o kapacitě a řazení do sledu a rostoucí zatížení toku se připisuje
  konkrétnímu typu položek toku dřív, než se navrhne náprava.
- **Úroveň 5, Orchestrace:** Organizace stanovuje výslovné stropy zatížení toku
  napříč svými hodnotovými proudy a dokáže ukázat konkrétní rozhodnutí o řazení
  do sledu, podložená Littleovým zákonem, která měřitelně zlepšila dobu toku.

## Náměty k diskusi

1. Kde naše hodiny doby toku skutečně začínají a posunula se někdy tato
   definice bez dokumentace?
2. Splňují naše změřené zatížení toku, intenzita příchodů a doba toku zhruba
   Littleův zákon?
3. Sleduje se zatížení toku dost průběžně, aby se stálý růst zachytil během dnů,
   ne měsíců?
4. Jaká je mezera mezi naší dobou toku a naším cycle time a co nám říká o tom,
   kde zpoždění skutečně vzniká?

## Hlavní poznatky

- **Zatížení toku matematicky určuje dobu toku** prostřednictvím Littleova
  zákona: zatížení toku se rovná intenzitě příchodů krát době toku, pro každý
  stabilní hodnotový proud.
- **Doba toku zahrnuje celý hodnotový proud**, od identifikace potřeby byznysu
  po dodání, šířeji než rozsah cycle time jen pro inženýrství (téma 2.6).
- Ústředním způsobem manipulace tohoto tématu je **tiché zúžení výchozího bodu
  doby toku**; pojistkou je zdokumentovaná, auditovaná definice vstupního bodu.
- **Sledujte zatížení toku průběžně**, ne periodicky, aby fungovalo jako
  skutečný předstihový ukazatel místo zpožděného zjištění.
- Používejte Littleův zákon **výslovně**, nejen jako intuici, když argumentujete
  pro limit WIP, navýšení kapacity nebo řazení souběžné práce do sledu.

## Odkazy a další četba

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
