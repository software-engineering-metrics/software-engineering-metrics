# 7.2 Měření vývoje softwaru s podporou umělé inteligence

## Přehled a motivace

Téma 7.1 ukázalo, proč několik stávajících metrik při vývoji s podporou AI už
spolehlivě neměří to, co dříve. Toto téma je o tom, co měřit místo nich: jak
zjistit, se skutečným důkazem, nikoli dojmem nebo marketingem dodavatele, zda
vaší organizaci asistence AI při programování skutečně pomáhá a o kolik. Je to
skutečně důležitá otázka se skutečnými rozpočtovými důsledky. Licence na
nástroje AI představují skutečný, průběžný náklad a disciplína jednotkové
ekonomiky z tématu 5.4 se na ně použije přímo. Organizace, která na ni nedokáže
odpovědět s důkazy, buď přeplácí nástroj, který nepomáhá, nebo investuje málo
do nástroje, který skutečně pomáhá.

Přístup tohoto tématu vychází přímo ze zásady výsledků před výstupy z tématu
1.3, nyní použité konkrétně na hodnocení nástrojů AI. Naivní, nejběžnější
přístup měří vývoj s podporou AI objemem výstupu: počtem vygenerovaných řádků
kódu, přijatých návrhů a vývojáři sami vykázanou úsporou času na úkol, tedy
přesně těmi metrikami, o nichž téma 7.1 varovalo, že jsou této změně nejvíce
vystaveny. Důslednější přístup, který toto téma doporučuje, měří výsledky:
zkrátila asistence AI skutečně cycle time bez zhoršení kvality, snížila čas
strávený skutečně málo hodnotnou, opakující se prací a uvolnila kapacitu pro
práci s vyšší hodnotou a měřitelně ovlivnila obchodní a produktové výsledky z
části 5?

Pro velké týmy toto měření rozhoduje o tom, zda se investice do nástrojů AI
činí na základě důkazů, nebo tvrzení dodavatelů a organizační setrvačnosti.
Velké podniky, které vyjednávají rozsáhlé smlouvy o nástrojích AI, potřebují
skutečný důkaz hodnoty, aby výdaj ospravedlnily a aby spravedlivě porovnaly
konkurenční nástroje. Státní správa, která bývá u technologických výdajů pod
zvláštním drobnohledem, potřebuje důslednou, obhajitelnou metodiku hodnocení,
než vloží veřejné prostředky do přijetí nástrojů AI v plném rozsahu.

## Klíčové zásady

- **Měřte asistenci AI podle výsledků, nikoli objemu výstupu ani statistik
  používání vykazovaných dodavatelem.** Disciplína tématu 1.3 tu platí plnou
  silou.
- **Kdykoli je to možné, použijte skutečnou [srovnávací skupinu](https://en.wikipedia.org/wiki/Treatment_and_control_groups)**,
  nikoli jen srovnání před a po, které může zkreslit rostoucí výchozí hodnota v
  celém odvětví.
- **Samotné vlastní hlášení úspory času je slabý signál.** Spárujte je s
  objektivními daty o cycle time a kvalitě.
- **Měřte plné náklady včetně času revize a oprav**, nejen rychlost
  generování.
- **Různé úkoly a různí inženýři mohou vidět velmi odlišnou hodnotu asistence
  AI.** Vyhněte se jedinému sloučenému číslu za celou organizaci, které tuto
  variabilitu skrývá.

## Doporučení

### Postavte skutečné srovnání, nejen snímek před a po

Kde je to možné, porovnejte výsledky mezi skupinou používající asistenci AI a
srovnatelnou skupinou, která ji nepoužívá, za stejné období, místo pouhého
srovnání čísel vlastní organizace před a po, které nedokáže odlišit vliv
asistence AI od jakékoli jiné souběžné změny (platí tu přímo výstraha tématu
1.6 o zavádějících proměnných). Tam, kde skutečná srovnávací skupina není
praktická, porovnávejte alespoň s delší historickou výchozí hodnotou
(regulační diagram podle tématu 1.6), nikoli s jediným snímkem před a po, který
je zranitelný regresí k průměru nebo nesouvisejícími souběžnými změnami.

### Měřte cycle time a kvalitu společně, nikdy samotné tvrzení o rychlosti asistence AI

Použijte přímo disciplínu témat 2.6 a 2.10: sledujte, zda práce s podporou AI
postupuje rychleji fázemi cycle time, a současně zda se míra selhání změn nebo
míra uniklých vad (téma 5.1) u této práce nevyvíjí špatným směrem. Skutečný
zisk produktivity ukazuje rychlejší cycle time se stabilní nebo lepší
kvalitou, falešný zisk ukazuje rychlejší cycle time se zhoršující se kvalitou,
tedy přesně tu směnu, před kterou téma 7.1 varovalo, zde odhalenou stejnou
disciplínou spárovaných metrik, jakou tato kniha používá všude.

### Zahrňte do plného účtování nákladů čas revize a oprav

Kód generovaný AI, který se rychleji vyrobí, ale pomaleji revidují nebo po
prvotním vygenerování vyžaduje více oprav a přepracování, nemusí ukázat žádné
čisté zlepšení cycle time, jakmile se změří celý řetězec, i když samotný krok
generování kódu připadal jednotlivému inženýrovi dramaticky rychlejší. Měřte
celý řetězec cycle time (téma 2.6), nikoli jen fázi kódování, abyste to
zachytili poctivě a nepřipisovali asistenci AI zásluhy na základě pocitu
rychlosti, který je sice skutečný, ale neúplný.

### Berte vlastní hlášení úspory času jako výchozí hypotézu, nikoli závěr

Vlastní hlášení vývojáře „to mi ušetřilo hodinu“ je užitečné jako první signál
a jako kvalitativní kontext (platí tu i kombinovaný kvantitativně-kvalitativní
přístup tématu 5.3), ale podléhá stejným zkreslením paměti a společenské
žádoucnosti, před nimiž téma 1.5 varuje u jakýchkoli dat z vlastního hlášení, a
neříká nic o následných nákladech na revizi nebo opravy. Použijte vlastní
hlášení k vytvoření hypotéz o tom, kde asistence AI pomáhá nejvíc, a pak je
ověřte na objektivních datech o cycle time a kvalitě, než vyvodíte pevný
závěr.

### Členěte měření podle typu úkolu a vyhněte se jedinému sloučenému číslu

Asistence AI při programování pravděpodobně poskytuje velmi odlišnou hodnotu u
standardního, dobře pochopeného úkolu než u skutečně nového, složitého řešení
problémů. Měřte a vykazujte podle kategorie úkolu, místo jediného sloučeného
průměru za celou organizaci, který může skrýt, že asistence v jedné kategorii
poskytuje velkou hodnotu, zatímco v jiné málo nebo dokonce zápornou, což
sloučené číslo úplně zakryje.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Samotná vlastní hlášení úspory času | Rychlé, snadno se sbírají | Slabý signál; podléhá zkreslení; ignoruje následné náklady na revizi |
| Pouze srovnání před a po | Jednoduché na nastavení | Zkresleno jakoukoli jinou souběžnou změnou nebo trendem v celém odvětví |
| Skutečná srovnávací skupina | Nejsilnější, nejobhajitelnější důkaz | Obtížněji se zařizuje; u plošného zavedení nemusí být proveditelná |
| Měření výsledků členěné podle úkolů | Odhalí, kde se hodnota skutečně soustředí | Vyžaduje podrobnější sledování a úsilí o kategorizaci |

Hlavní napětí je mezi **důsledností měření a praktickou proveditelností**.
Skutečná, kontrolovaná srovnávací skupina je nejsilnějším důkazem, ale po
zavedení nástroje do celé organizace bez ponechané kontrolní skupiny bývá
nepraktická. Vlastní dojmy jsou rychlé a snadné, ale samy o sobě slabé.
Napětí vyřešíte tím, že použijete nejsilnější srovnávací návrh, jaký vaše
skutečné zavedení dovoluje: skutečnou kontrolní skupinu během rané pilotní
fáze, je-li to možné, nebo regulační diagram z historické výchozí hodnoty,
pokud ne. A vlastní hlášení budete brát jako nástroj k tvorbě hypotéz, ne
jako poslední slovo, ať skončíte u kteréhokoli srovnávacího návrhu.

## Otázky k diskusi s vaším týmem

1. **Měli jsme, nebo bychom ještě mohli sestavit, skutečnou srovnávací
   skupinu pro hodnocení přijetí našich nástrojů AI, nebo se spoléháme
   výhradně na srovnání před a po?** Pokud skutečná srovnávací skupina nikdy
   nevznikla, promluvte si o tom, zda by regulační diagram z historické
   výchozí hodnoty mohl stále poskytnout přiměřeně důslednou alternativu.

2. **Měřili jsme u práce s podporou AI cycle time a kvalitu společně, nebo
   máme jen tvrzení o rychlosti bez odpovídající kontroly kvality?** Vytáhněte
   data, která existují, a zkontrolujte právě toto spárování; pokud neexistují,
   je tato mezera nejprioritnější opravou tohoto tématu.

3. **Zahrnuje naše měření cycle time u práce s podporou AI čas revize a
   oprav, nebo jen úvodní krok generování?** Tvrzení o rychlosti založené jen
   na čase generování, které ignoruje následné náklady na revizi, riskuje
   past neúplného účtování, před níž toto téma přímo varuje.

4. **Jaká tvrzení o úspoře času z vlastního hlášení jsme nasbírali a ověřili
   jsme některé z nich na objektivních datech?** Vyberte konkrétní, často
   opakované tvrzení a zkontrolujte, zda ho objektivní data skutečně
   podporují.

5. **Slévá naše současné měření všechny typy úkolů do jednoho čísla, nebo
   víme, které konkrétní kategorie práce mají nejsilnější hodnotu asistence
   AI?** Pokud je sloučené, promluvte si o tom, co by členění podle úkolů
   mohlo odhalit, co současné číslo skrývá.

6. **Kdybychom dnes museli obhájit investici do nástrojů AI před skeptickou
   finanční zainteresovanou stranou, s důkazy místo dojmů, co bychom jí
   skutečně dokázali ukázat?** Tento konkrétní test odhalí propast mezi tím, co
   si vaše organizace o hodnotě asistence AI myslí, a tím, co dokáže důkazy
   skutečně doložit.

## Pohled podle sektorů

**Startup.** Formální studie se srovnávací skupinou je v malém měřítku obvykle
nepraktická, ale i jednoduchý, poctivý pohled na cycle time a míru vad před a
po, místo spoléhání čistě na to, o kolik rychleji práce připadá, dává
smysluplně spolehlivější signál než samotný dojem.

**Malá firma.** Zaměřte úsilí o měření nejprve na kategorii úkolů s nejvyšší
hodnotou a největší opakovaností, kde je hodnota asistence AI nejpravděpodobněji
jasná a měřitelná, místo pokusu o komplexní hodnocení všech druhů práce, které
váš malý tým dělá.

**Velký podnik.** Skutečné kontrolované srovnání během rané pilotní fáze, před
plným zavedením v celé organizaci, je tu často dosažitelné a stojí za záměrné
úsilí o jeho zařízení, protože dává mnohem obhajitelnější důkaz pro rozhodnutí
o rozsáhlé investici do nástrojů, které obvykle po úspěšném pilotu následuje.

**Státní správa.** Rozhodnutí o veřejných technologických výdajích, včetně
pořízení nástrojů AI, čelí zvláštnímu drobnohledu a mohou vyžadovat formální
zdůvodnění nákladů a přínosů (téma 5.5). Zabudujte disciplínu měření, kterou
toto téma doporučuje, do každé pilotní fáze od začátku, protože důsledná,
zdokumentovaná metodika hodnocení výrazně posiluje pozdější argumentaci pro
financování nebo pořízení.

## Příklady

**Velký podnik.** Softwarová společnost zavedla asistenta pro programování s
AI jako záměrný pilot u poloviny svých inženýrských týmů a druhou polovinu
ponechala jedno čtvrtletí jako srovnávací skupinu před plným zavedením.
Pilotní skupina ukázala skutečné, statisticky smysluplné zlepšení cycle time u
dobře vymezených úkolů s převahou standardního kódu, ale žádné měřitelné
zlepšení a mírně vyšší počet iterací revize (téma 2.9) u složité, nové
architektonické práce. Toto zjištění členěné podle úkolů, viditelné jen díky
skutečnému srovnávacímu návrhu a členění podle kategorií úkolů, vedlo
společnost k tomu, aby komunikaci o zavádění asistence AI i školení zaměřila
právě na kategorie úkolů, kde prokazatelně pomáhala, místo aby ji podávala
jako jednotné zvýšení produktivity napříč veškerou prací.

**Státní správa.** Federální úřad, který pilotoval asistenci AI při
programování pro část týmů svého modernizačního programu, se zprvu spoléhal na
dotazníky vlastního hlášení úspory času, které ukázaly nadšené, jednotně
kladné odpovědi. Následná objektivní analýza, porovnávající cycle time a
míru uniklých vad mezi pilotními týmy a srovnatelnou nepilotní kohortou
pracující na podobných součástech systému, zjistila, že objektivní zlepšení
cycle time je skutečné, ale výrazně menší, než naznačovaly odhady z vlastního
hlášení, a odhalila mírný, ale skutečný nárůst času revize, který část zisku
z rychlosti generování vyvažoval, což samotná data z vlastního hlášení úplně
minula. Tento přesnější obraz založený na důkazech přímo vedl k skromnějšímu a
obhajitelnějšímu obchodnímu odůvodnění pro pokračující a rozšířené pořizování
nástroje.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratnost důsledného měření vývoje s podporou AI spočívá v sebejistých
investičních rozhodnutích založených na důkazech: organizace, která přesně
ví, kde asistence AI skutečně pomáhá, může investovat do jejího rozšíření tam
a vyhnout se přeplácení licencí v kategoriích úkolů, kde přináší málo hodnoty,
přesně podle poznatku o členění podle úkolů, který ukazuje příklad softwarové
společnosti výše. To přímo navazuje na jednotkovou ekonomiku tématu 5.4 a
disciplínu ROI tématu 5.5, protože náklady na nástroje AI, často licencované
na uživatele, potřebují stejně důsledné posouzení nákladů a přínosů, jaké tato
kniha uplatňuje na jakoukoli jinou velkou inženýrskou investici.

Celkové náklady vlastnictví (TCO) tvoří analytické úsilí vybudovat skutečná
srovnání, měřit plný cycle time včetně revize a oprav a členit podle typu
úkolu, což je víc práce než přijímat statistiky používání vykazované
dodavatelem nebo vlastní dojmy bez výhrad. Toto úsilí přímo ospravedlňuje
rozsah nákladů na licence nástrojů AI ve velké organizaci a riziko špatně
podloženého, drahého závazku pro celou organizaci založeného na dojmu místo na
datech.

## Antivzory a úskalí

- **Měřit asistenci AI jen objemem výstupu nebo statistikami používání od
  dodavatele:** přímo opakuje hlavní varování tématu 7.1.
- **Spoléhat se výhradně na vlastní hlášení úspory času:** slabý signál
  zranitelný zkreslením a slepý vůči následným nákladům na revizi a opravy.
- **Měřit jen krok rychlosti generování a ignorovat plný cycle time:**
  vytváří neúplné, potenciálně zavádějící účtování skutečného vlivu na
  produktivitu.
- **Vykazovat jediné sloučené číslo za celou organizaci:** skrývá skutečnou
  variabilitu hodnoty napříč kategoriemi úkolů.
- **Žádná srovnávací skupina ani historická výchozí hodnota:** nedokáže
  odlišit skutečný vliv asistence AI od jakékoli jiné souběžné změny.
- **Považovat nadšený výsledek dotazníku z vlastního hlášení za dostatečný
  důkaz pro rozhodnutí o rozsáhlé investici:** riskuje právě tu mezeru, kterou
  příklad federálního úřadu výše objevil až po vybudování důslednějšího
  srovnání.

## Model zralosti

- **Úroveň 1, Zahájení:** Hodnota vývoje s podporou AI se posuzuje, pokud vůbec,
  jen z vlastního dojmu a statistik používání od dodavatele.
- **Úroveň 2, Rozvoj:** Některá data o cycle time nebo kvalitě existují, ale
  není žádná skutečná srovnávací skupina ani historická výchozí hodnota a
  chybí analýza členěná podle úkolů.
- **Úroveň 3, Standardizace:** Skutečný srovnávací návrh (kontrolní skupina
  nebo historická výchozí hodnota) se spárovaným měřením cycle time a kvality
  se používá důsledně, členěný podle typu úkolu.
- **Úroveň 4, Řízení:** Sleduje se plné účtování cycle time včetně času revize
  a oprav; tvrzení z vlastního hlášení se systematicky ověřují na
  objektivních datech.
- **Úroveň 5, Orchestrace:** Organizace má vyspělé, na důkazech založené
  chápání, kde přesně asistence AI skutečně pomáhá, a to řídí cílené
  zavádění, investice do školení a rozhodnutí o pořízení s prokázanou,
  obhajitelnou ROI.

## Náměty k diskusi

1. Jaké skutečné srovnání, pokud nějaké, máme pro své současné přijetí nástrojů AI?
2. Měřili jsme cycle time a kvalitu společně, nebo jen tvrzení o rychlosti?
3. Které tvrzení o asistenci AI z vlastního hlášení bychom měli ověřit na objektivních datech?
4. Která konkrétní kategorie úkolů u nás ukazuje nejsilnější důkaz skutečné hodnoty asistence AI?
5. Dokázali bychom dnes obhájit investici do nástrojů AI před skeptickou finanční zainteresovanou stranou s důkazy?

## Hlavní poznatky

- Měřte vývoj s podporou AI podle **výsledků**, nikoli objemu výstupu nebo
  statistik používání vykazovaných dodavatelem.
- Použijte **skutečnou srovnávací skupinu nebo historickou výchozí hodnotu**,
  nikoli jen snímek před a po zranitelný zkreslením.
- Měřte **cycle time a kvalitu společně**, včetně celého řetězce, času revize
  a oprav, nejen rychlosti generování.
- Berte **vlastní hlášení úspory času jako hypotézu**, nikoli závěr, a
  ověřte ho na objektivních datech.
- **Členěte podle typu úkolu**; jediné sloučené číslo skrývá, kde se hodnota
  skutečně soustředí a kde ne.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (disciplína měření výsledků, kterou toto téma
  aplikuje na hodnocení nástrojů AI).
- Výzkum GitHubu o programování ve dvojici s AI a produktivitě vývojářů
  (empirický výzkum v odvětvovém měřítku o výsledcích vývoje s podporou AI).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck a Jenna Butler, „The SPACE of Developer
  Productivity“, *ACM Queue* (2021) (vícerozměrná disciplína měření, kterou
  toto téma aplikuje na konkrétní novou kategorii nástrojů).
- *How to Measure Anything*, Douglas W. Hubbard (sestavování obhajitelných
  srovnání a vyčíslování hodnoty při skutečné nejistotě).
