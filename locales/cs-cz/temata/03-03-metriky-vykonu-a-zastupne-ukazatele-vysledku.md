# 3.3 Metriky výkonu a zástupné ukazatele výsledků

## Přehled a motivace

**Výkon**, písmeno P ve SPACE (téma 3.1), je dimenze, která se nejčastěji
zaměňuje s aktivitou, a právě tomu toto téma brání. Výkon se ptá, zda práce
inženýra nebo týmu skutečně vedla k dobrému
[výsledku](https://en.wikipedia.org/wiki/Outcome_(probability)): k funkci,
která byla dodána a fungovala, k systému, který zůstal spolehlivý, ke změně,
která posunula obchodní nebo uživatelskou metriku správným směrem. Aktivita
(téma 3.4) se ptá jen na to, kolik pohybu proběhlo. Tým může být velmi aktivní
a přitom málo výkonný, může neustále dodávat drobné změny, které žádný
výsledek nehnou, a platí i opak: tým, který dodává zřídka, ale jeho změny
spolehlivě dopadnou přesně správně.

Obtížnost této dimenze spočívá v tom, že výsledek často nelze připsat jedné
osobě ani jednomu týmu. Výsledky softwaru vznikají spoluprací, rozhodnutími
učiněnými před měsíci lidmi, kteří se mezitím přesunuli k jiným projektům, a
tržními podmínkami, které žádný inženýr neovládá. Výzkumníci SPACE byli v tom
výslovní: výkon se má měřit na úrovni systému nebo týmu pomocí několika
sbíhajících se signálů, ne redukovat na jediné číslo a už vůbec ne připisovat
jednotlivému inženýrovi izolovaně. Toto téma bere tuto radu vážně a individuální
přisuzování výkonu považuje za past, které je třeba se aktivně vyhýbat, a ne za
zkratku, kterou lze použít, když se to hodí.

U velkých týmů je správné měření výkonu to, co odlišuje program metrik, který
skutečně zlepšuje výsledky, od programu, který jen odměňuje viditelné
zaneprázdnění. Velké podniky, které srovnávají výkon mezi mnoha týmy, potřebují
signály odolné proti manipulaci objemem výstupu. Státní správa, která
zdůvodňuje investice do technologií kontrolním orgánům, musí prokázat, že
inženýrské úsilí přineslo skutečné výsledky, a ne jen dodané artefakty, což je
přesně zásada výsledků před výstupy z tématu 1.3 uplatněná na tuto konkrétní
dimenzi.

## Klíčové zásady

- **Výkon měří, zda práce přinesla dobrý výsledek, ne kolik práce proběhlo.**
  To je základní rozdíl oproti dimenzi aktivity.
- **Používejte několik sbíhajících se signálů, nikdy jediné číslo výkonu.**
  Žádný jednotlivý zástupný ukazatel není dost spolehlivý, aby stál sám.
- **Měřte na úrovni týmu nebo systému.** Přisuzování výsledků jednotlivcům je
  obvykle nespolehlivé a zve k přesně té manipulaci, před kterou tato kniha
  celou dobu varuje.
- **Kvalita je součástí výkonu, ne samostatná starost.** Práce, která byla
  dodána, ale rozbila něco jiného, ve skutečnosti dobrý výkon nepodala.
- **Signál výkonu bez připojeného rozhodnutí je dekorace**, přesně podle
  obecné zásady tématu 1.1 uplatněné na tuto dimenzi.

## Doporučení

### Kombinujte několik sbíhajících se signálů místo jediného skóre výkonu

Čerpejte důkazy o výkonu z více zdrojů: míra selhání změn (téma 2.10) a míra
úniku vad (téma 5.1) pro kvalitu, výsledky nasazení spojené se skutečným
přijetím funkcí (téma 5.2) pro to, zda práce měla smysl, a kvalitativní
hodnocení příspěvku týmu ke strategickým cílům od kolegů nebo manažera pro
kontext, který čistá metrika nezachytí. Žádný z nich sám o sobě není
spolehlivý. Když se ale společně sbíhají ke stejnému závěru, jsou mnohem
důvěryhodnější než jakékoli jediné číslo.

### Měřte na úrovni týmu, odolejte přisuzování jednotlivcům

Výsledky softwaru jsou zřídka dílem jediné osoby. Vznikají z návrhových
rozhodnutí, zpětné vazby z revizí, předchozí práce lidí, kteří už mohli tým
opustit, a spolupráce napříč hranicemi. Přisoudit výsledek jednomu inženýrovi
je obvykle falešná přesnost, která tuto realitu ignoruje a vytváří silnou
motivaci, aby si jednotlivci chránili zásluhy místo svobodné spolupráce, což je
přesně ten druh deformace motivací, před kterým varuje téma 1.2.

### Zahrňte kvalitu přímo do definice výkonu

Funkce dodaná včas, která způsobí vlnu produkčních incidentů, nepodala dobrý
výkon, přestože by ji naivní pohled jen na výstup započítal jako dodanou.
Zahrňte míru selhání změn, míru úniku vad a data o incidentech po vydání
přímo do toho, jak výkon hodnotíte, místo abyste kvalitu považovali za
samostatnou, odtrženou starost měřenou jen v částech 4 a 6 této knihy.

### Používejte data o výkonu pro rozhodnutí o investicích a procesech, ne pro řazení jednotlivců

Produktivním využitím dat o výkonu je rozhodnout, kam dále investovat (tým,
který soustavně dodává silné výsledky, zaslouží víc zdrojů a autonomie) a kde
zkoumat (tým, jehož práce soustavně nedopadá, zaslouží pomoc, ne obviňování,
podle diagnostického pojetí tématu 1.1). Řazení jednotlivců nebo týmů
soutěživě podle dat o výkonu zve k přesně té manipulaci a poškození morálky,
před kterými tato kniha varuje, a málokdy přináší lepší výsledky než
diagnostické použití.

### Buďte upřímní o mezích přisuzování, zejména u platformních a podpůrných týmů

Týmy, které budují sdílenou infrastrukturu, interní nástroje nebo
platformní schopnosti (sesterská kniha `software-engineering-guide` se
tématu platformního inženýrství věnuje přímo), mají často svůj příspěvek k
výsledkům vzdálený o několik kroků od jakékoli metriky orientované na
zákazníka. Měřte výkon těchto týmů přes jejich vliv na týmy, které umožňují,
přijetí jejich platformy a snížení tření, které hlásí využívající týmy, místo
abyste na práci, která je ze své podstaty nepřímá, vnucovali špatně sedící
metriku přímého výsledku.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Jediné skóre výkonu na tým | Jednoduché na prezentaci a srovnání | Falešná přesnost; skrývá, který podkladový signál skóre skutečně určil |
| Několik sbíhajících se signálů | Důvěryhodnější, odolné proti manipulaci jedinou metrikou | Hůř se shrnuje do jednoho čísla; k interpretaci vyžaduje víc kontextu |
| Měření výkonu na úrovni týmu | Odpovídá tomu, jak výsledky softwaru skutečně vznikají | Nemůže přímo odpovědět na otázky o příspěvku jednotlivce |
| Přisuzování výkonu jednotlivcům | Připadá přímo použitelnější pro hodnocení | Obvykle falešná přesnost; silné riziko manipulace a ochrany zásluh |

Ústředním napětím je **přesnost versus upřímnost**. Jediné číslo výkonu na tým,
nebo ještě hůř na jednotlivce, se snadno porovnává a řadí, ale tato přesnost je
obvykle falešná a za úhledně vypadající hodnotou skrývá skutečnou nejistotu o
přisuzování a kvalitě. Napětí řešte tak, že přijmete méně uklizený obraz z
více signálů jako ten upřímný a odoláte tlaku vedení nebo procesů hodnocení
výkonu, aby se zhroutil zpět do jediného, falešně přesného skóre.

## Otázky k diskusi s vaším týmem

1. **Kombinuje naše současné měření výkonu několik sbíhajících se signálů, nebo
   se spoléhá na jediné číslo, které působí přesněji, než ve skutečnosti
   je?** Projděte všechno, co dnes nazýváte „metrikou výkonu“, a ověřte, kolik
   nezávislých, sbíhajících se signálů do ní skutečně vstupuje.

2. **Přiřkli jsme někdy výkon týmu nebo jednotlivce, aniž bychom zohlednili
   spolupracující, mezitýmovou povahu toho, jak výsledek skutečně vznikl?**
   Vezměte nedávný příběh úspěchu a vysledujte, kolik z něj záviselo na
   lidech, rozhodnutích nebo předchozí práci mimo tým či jednotlivce, kterým
   byl úspěch připsán.

3. **Zahrnuje naše měření výkonu kvalitu, nebo jen rychlost dodávky a objem
   výstupu?** Dodaná funkce, která později způsobila významné produkční
   incidenty, by neměla být hodnocena jako vysoký výkon. Ověřte, zda by to
   vaše současné měření skutečně zachytilo.

4. **Jak měříme výkon platformních nebo podpůrných týmů, jejichž příspěvek k
   výsledkům je nepřímý?** Pokud je upřímná odpověď „moc dobře ne“, stojí za
   to tuto mezeru pojmenovat a řešit přímo, místo aby tyto týmy zůstaly
   prakticky neměřené nebo nespravedlivě měřené proti metrikám výsledků
   orientovaným na zákazníka, které k jejich práci nesedí.

5. **Byla data o výkonu někdy použita k soutěživému řazení jednotlivců, formálně
   nebo neformálně?** Toto sklouznutí, podobně jako riziko u dat o spokojenosti
   v tématu 3.2, poškozuje jak upřímnost dat, tak ochotu týmu spolupracovat
   otevřeně.

6. **Když se naše sbíhající se signály rozcházejí, například vysoká rychlost
   dodávky, ale rostoucí míra vad, co z toho usoudíme a zvládá náš proces
   takový rozpor dobře?** Rozpor mezi signály je sám o sobě cennou informací.
   Probereme, zda ho váš tým dnes bere jako šum, který ignorovat, nebo jako
   skutečné zjištění, které stojí za prošetření.

## Pohled podle sektorů

**Startup.** Výkon je obvykle viditelný přímo: fungovala funkce, přijali ji
zákazníci, pohnula se metrika. Formální měření z více signálů bývá v tomto
měřítku zbytečné. Rizikem je naopak příliš rychlé přisouzení úspěchu nebo
neúspěchu jedné osobě v rychle se měnícím, silně spolupracujícím malém týmu,
kde zásluhy a vina zřídka patří jediné osobě.

**Malá firma.** Spojte data o dodávce a kvalitě, která už máte (téma 2.10, téma
5.1), s přímým, upřímným rozhovorem o tom, zda nedávná práce firmě skutečně
pomohla, místo abyste budovali formální instrumentaci z více signálů, na
jejíž údržbu nemáte kapacitu.

**Velký podnik.** Tady si disciplína měření na úrovni týmu z více signálů
investici zaslouží, protože tlak na zredukování výkonu na jediné srovnatelné
číslo napříč desítkami týmů je zde nejsilnější a škoda z falešné přesnosti se
násobí napříč rozhodnutími o zdrojích v celé organizaci. Tomuto tlaku
výslovně odolejte a vybudujte argument z více signálů, proč na tom záleží.

**Státní správa.** Prokázat, že inženýrská investice přinesla skutečné
výsledky, a ne jen dodané artefakty, je často ústřední otázkou kontrolního
orgánu. Měření výkonu z více signálů, výslovně spojené s metrikami výsledků
(téma 5.3) místo zástupných ukazatelů jen o dodávce, dává mnohem silnější a
obhajitelnější odpověď než samotný počet aktivit nebo dodávek.

## Příklady

**Velký podnik.** Vedení jedné maloobchodní technologické firmy neformálně
řadilo inženýrské týmy podle dokončených story pointů za sprint a bralo to
jako zástupný ukazatel výkonu. Po přijetí přístupu z více signálů, který
spojoval data o dodávce, míru selhání změn a přijetí funkcí po vydání, vedení
zjistilo, že tým s nejvyšší mírou dokončených story pointů měl nejnižší míru
přijetí funkcí ve firmě: dodával rychle, ale budoval věci, které zákazníci
nepoužívali. Přerozdělení priorit plánu tohoto týmu podle úplnějšího obrazu
výkonu, místo zavádějícího řazení podle jediného čísla, během jednoho
čtvrtletí přesměrovalo významnou inženýrskou kapacitu k práci s větším
dopadem.

**Státní správa.** Inženýrský program národního daňového úřadu potřeboval
prokázat kontrolnímu výboru, že velká investice do systémů zlepšila výkon, a
nejen dodala smluvní rozsah. Program nehlásil jen dokončení story pointů nebo
milníků, ale předložil sbíhající se sadu signálů: sníženou míru chyb
zpracování, snížený medián doby zpracování a zvýšenou míru úspěšného
dokončení samoobsluhy, vše spojené s konkrétními dodanými komponentami systému.
Prezentace z více signálů, spojená s výsledky, obstála před kontrolou výboru
tak, jak předchozí program s prostou zprávou „dodáno podle plánu“ o rok dříve
neobstál.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností měření výkonu přes sbíhající se signály spojené s výsledky místo
falešně přesného jediného čísla jsou lepší rozhodnutí o zdrojích: organizace,
která vidí, jejichž týmů práce skutečně hýbe výsledky, může dále investovat
tam, kde to má smysl, a zkoumat tam, kde ne, místo aby odměňovala tým, který
se náhodou jeví nejzaneprázdněnější. Uvedený maloobchodní příklad je typický:
zavádějící řazení podle jediného čísla odvádělo pozornost investic od míst,
kde by skutečně pomohly.

Celkové náklady vlastnictví (TCO) jsou vyšší než u přístupu s jedinou metrikou,
protože vyžadují kombinaci dat z více zdrojů (dodávka, kvalita, výsledek) a
odolávání tlaku organizace, aby se obraz zhroutil zpět do jednoho srovnatelného
čísla. Tyto náklady stojí za to, protože alternativa, falešně přesné jediné
skóre, aktivně zavádí rozhodnutí o zdrojích, která mají data o výkonu
informovat.

## Antivzory a úskalí

- **Záměna aktivity za výkon:** nejčastější chyba, které má tato dimenze
  výslovně zabránit.
- **Přisuzování výkonu jednotlivcům u společných, mezitýmových výsledků:**
  obvykle falešná přesnost, která odrazuje od spolupráce.
- **Vyloučení kvality z definice výkonu:** odměňuje práci, která byla dodána,
  ale rozbila něco jiného.
- **Vnucování metriky přímého výsledku platformním nebo podpůrným týmům:** měří
  špatnou věc u práce, která je ze své podstaty nepřímá.
- **Zhroucení více sbíhajících se signálů zpět do jednoho falešně přesného
  čísla pod tlakem organizace:** ztrácí upřímnost, kterou měl přístup z více
  signálů poskytovat.
- **Používání dat o výkonu k soutěživému řazení jednotlivců:** poškozuje
  upřímnost dat i spolupráci týmu.

## Model zralosti

- **Úroveň 1, Zahájení:** Výkon se zaměňuje s aktivitou nebo objemem výstupu a
  měří se jediným, nezkoumaným číslem.
- **Úroveň 2, Rozvoj:** Některé signály kvality se zvažují vedle výstupu, ale
  chybí důsledný přístup z více signálů a přisuzování jednotlivcům se
  neformálně dál děje.
- **Úroveň 3, Standardizace:** Výkon se měří na úrovni týmu pomocí několika
  sbíhajících se signálů včetně kvality, důsledně v celé organizaci.
- **Úroveň 4, Řízení:** Rozpor mezi sbíhajícími se signály se aktivně
  zkoumá. Platformní a podpůrné týmy mají přiměřeně nepřímé míry výkonu,
  které odpovídají jejich skutečné práci.
- **Úroveň 5, Orchestrace:** Data o výkonu přímo ovlivňují rozhodnutí o zdrojích
  a investicích a organizace dokáže ukázat konkrétní rozhodnutí o
  přerozdělení, která pohled z více signálů umožnil a pohled z jediného čísla
  by je minul.

## Náměty k diskusi

1. Jaké jediné číslo dnes používáme jako zástupný ukazatel výkonu a mělo by se vyřadit ve prospěch sbíhající se sady?
2. Připsali jsme někdy výsledek špatnému týmu nebo osobě, protože přisuzování nebylo jasné?
3. Jak dnes měříme výkon platformního nebo podpůrného týmu?
4. Jak by vypadalo, kdyby se naše sbíhající se signály příští čtvrtletí rozcházely?
5. Kde řazení podle story pointů nebo počtu dodávek špatně nasměrovalo pozornost našich investic?

## Hlavní poznatky

- Výkon měří, zda práce přinesla **dobrý výsledek**, ne kolik pohybu proběhlo;
  nezaměňujte ho s aktivitou (téma 3.4).
- Používejte **několik sbíhajících se signálů**, nikdy jediné číslo výkonu, a
  mějte se na pozoru před falešnou přesností.
- Měřte na **úrovni týmu nebo systému**; přisuzování výsledků jednotlivcům je
  obvykle nespolehlivé a poškozuje spolupráci.
- **Kvalita je součástí výkonu**, ne samostatná, odtržená starost.
- Dávejte platformním a podpůrným týmům **přiměřeně nepřímé** míry výkonu,
  místo abyste jejich práci vnucovali špatně sedící metriku přímého výsledku.

## Odkazy a další četba

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (měření výkonu založené na výsledcích).
- *Team Topologies*, Matthew Skelton a Manuel Pais (struktury platformních a
  podpůrných týmů a jak měřit jejich příspěvek).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (rizika metrik výkonu s falešnou přesností).
