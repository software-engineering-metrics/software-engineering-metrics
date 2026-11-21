# 4.4 Statická analýza a metriky code smells

## Přehled a motivace

Nástroje **[statické analýzy](https://en.wikipedia.org/wiki/Static_program_analysis)**
prohledávají zdrojový kód bez jeho spuštění a označují vzorce, o nichž je
známo, že korelují s vadami, bezpečnostními zranitelnostmi nebo problémy s
udržovatelností: nedosažitelný kód, neuzavřené zdroje, podezřelé typové
konverze, duplicitní logiku a širší kategorii **code smells** (pachů kódu),
strukturálních vzorců, které nemusí být nutně chybami, ale zpravidla ztěžují
pochopení, testování nebo bezpečnou změnu kódu. Statická analýza je
automatizovaná, průběžná vrstva pod cílenějšími metrikami z ostatních témat
této části, běží při každém commitu a vynáší problémy v okamžiku jejich vzniku,
místo aby čekala na periodický audit.

Ústřední starostí tohoto tématu je mezera mezi tím, co nástroje statické
analýzy hlásí, a tím, na čem skutečně záleží. Nástroj může ve velké kódové bázi
označit tisíce nálezů a samotný počet nálezů je slabá metrika, protože slévá
triviální stylové preference se skutečným, závažným rizikem a dá se snížit
potlačením stejně snadno jako skutečnými opravami. Hodnota statické analýzy
nepramení z hrubého počtu nálezů, ale z toho, jak dobře organizace třídí
závažnost, brání zhoršení a odolává pokušení považovat úsudek nástroje za
náhradu lidské revize, a ne za její doplněk.

U velkých týmů je statická analýza jediným praktickým způsobem, jak vynutit
základní úroveň kvality kódu a bezpečnostní hygieny napříč kódovou bází větší,
než kolik může kterýkoli tým ručně přezkoumat celé. Velké podniky a státní
správa, které často čelí požadavkům na soulad s pravidly bezpečného
programování, se spoléhají na statickou analýzu jako zdokumentovaný,
auditovatelný důkaz, že základní úroveň kontroly byla uplatňována důsledně, a
ne jen když si problému případně všiml lidský recenzent.

## Klíčové zásady

- **Hrubý počet nálezů je sám o sobě slabá metrika.** Slévá triviální a
  závažné problémy a dá se zmanipulovat potlačováním místo skutečných oprav.
- **Třídění podle závažnosti je důležitější než objem.** Malý počet kritických
  nálezů zaslouží víc pozornosti než velký počet triviálních.
- **Statická analýza doplňuje lidskou revizi; nenahrazuje ji.** Nástroje
  zachytí vzorce; nerozumí záměru ani obchodnímu kontextu.
- **Trend „nově zavedených problémů“ je použitelnější než celkový počet
  nahromaděných nálezů.** Říká, zda se současná praxe zlepšuje, nebo zhoršuje.
- **Falešně pozitivní nálezy podkopávají důvěru v nástroj.** Neřízená míra
  falešně pozitivních nálezů vede týmy k tomu, že nálezy ignorují hromadně,
  včetně těch skutečných.

## Doporučení

### Sledujte nálezy vážené závažností, ne hrubý počet

Nakonfigurujte nástroje statické analýzy tak, aby třídily nálezy podle
závažnosti (kritická, vysoká, střední, nízká nebo ekvivalentní škála), a
sledujte trend vážený závažností místo plochého celkového počtu. Kódová báze s
nulou kritických nálezů a pěti sty nízkozávažných stylových návrhů je v
úplně jiném stavu než ta s padesáti kritickými nálezy a žádnými stylovými
problémy, a hrubý počet s nimi zachází jako zhruba rovnocennými, což nejsou.

### Brány nastavte na nově zavedené nálezy, ne na celý historický backlog

Většina zavedených kódových bází nese zděděný backlog nálezů, které předcházejí
současné praxi a opravit je všechny najednou by bylo neúnosně drahé. Místo
blokování veškeré práce, dokud se celý backlog nevyčistí, nastavte bránu v CI na
to, zda konkrétní změna zavádí nové nálezy nad dohodnutým prahem závažnosti, a
nechte backlog postupně zmenšovat běžnou údržbou, zatímco se zabrání dalšímu
hromadění. Toto rozlišení odráží doporučení spodní hranice pokrytí z tématu 4.2:
chraňte před zhoršením místo požadavku na nerealistickou opravu všeho najednou.

### Aktivně řiďte míru falešně pozitivních nálezů

Pravidelně přezkoumejte vzorek nálezů, zejména v kategorii s vysokým objemem, a
ověřte, kolik jich je skutečně falešně pozitivních, tedy případů, kdy nástroj
označil vzorec, který v kontextu ve skutečnosti není problematický. Upravte
konfiguraci pravidel tak, aby se potlačily konkrétně skutečně hlučné,
málo hodnotné kategorie pravidel, místo aby si týmy osvojily zvyk ignorovat
výstup nástroje hromadně, protože příliš velká jeho část je šum. Vysoká, neřízená
míra falešně pozitivních nálezů je nejrychlejší způsob, jak zničit důvěryhodnost
programu statické analýzy.

### Berte nálezy statické analýzy jako podnět k revizi, ne automatický verdikt

I legitimní nález, který není falešně pozitivní, nemusí vždy zaslouží
automatickou, povinnou opravu; některé označené vzorce jsou vzhledem ke
konkrétnímu kontextu, který nástroj nevidí, přijatelné. Vybudujte nenáročný
proces, v němž člověk nález zkontroluje a buď opraví, nebo výslovně a viditelně promine
se zdokumentovaným důvodem, místo aby se každý nález slepě vynucoval
jako povinný, nebo aby se připustilo tiché, nezdokumentované potlačování, které
v čase hodnotu nástroje podkopává.

### Kombinujte statickou analýzu s ostatními metrikami kvality kódu v této části

Nálezy statické analýzy, skóre složitosti (téma 4.1) a data o hotspotech (téma
4.3) jsou doplňující důkazy, ne konkurenční metriky. Soubor s vysokou
koncentrací nevyřešených nálezů statické analýzy, který je zároveň hotspotem
změnovosti a složitosti, je obzvlášť silným kandidátem na prioritní pozornost,
protože víc nezávislých signálů se sbíhá ke stejnému závěru.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Hrubý počet nálezů jako metrika | Jednoduchý na hlášení | Slévá triviální a závažné problémy; snadno se zmanipuluje potlačením |
| Trend vážený závažností | Přesněji odráží skutečné riziko | Vyžaduje průběžnou údržbu klasifikace závažnosti |
| Brána na celý historický backlog | Maximalizuje případnou čistotu kódu | Pro zavedené kódové báze často nepraktická; může zastavit veškerou práci |
| Brána jen na nové nálezy | Praktická, brání zhoršení, nechá backlog postupně zmenšovat | Zděděné problémy přetrvávají déle bez záměrného plánu nápravy |

Ústředním napětím je **důkladnost versus praktičnost**. Politika statické
analýzy, která požaduje vyřešení celého historického backlogu, než pokročí
jakákoli nová práce, je důkladná, ale pro jakoukoli kódovou bázi se skutečnou
historií obvykle nepraktická, a týmy pod takovým tlakem mají tendenci nálezy
potlačovat hromadně, místo aby je skutečně opravovaly. Napětí řešte tak, že
bránu nastavíte přísně na nové nálezy a vedle toho povedete samostatné, záměrně
tempované úsilí o nápravu zděděného backlogu, prioritizované technikami
závažnosti a porovnávání, které doporučuje toto téma a téma 4.3.

## Otázky k diskusi s vaším týmem

1. **Sledujeme trend vážený závažností, nebo jen hrubý celkový počet nálezů?**
   Otevřete svůj skutečný dashboard a ověřte to; hrubý počet je u mnoha nástrojů
   výchozí a často vyžaduje záměrnou konfiguraci, aby se místo toho
   správně ukázala závažnost.

2. **Jaký je náš současný zděděný backlog nevyřešených nálezů a máme záměrný,
   tempovaný plán, jak ho snížit, nebo se prostě donekonečna hromadí?**
   Neřešený, tiše rostoucí backlog je běžný a stojí za to ho upřímně
   pojmenovat, místo aby zůstal neprozkoumán.

3. **Jaký je náš odhadovaný podíl falešně pozitivních nálezů u našich nejobjemnějších
   kategorií nálezů a upravili jsme na to konfiguraci pravidel?** Pokud jste
   to nikdy neověřovali, vezměte vzorek nálezů z nejhlučnější kategorie a
   upřímně posuďte, kolik z nich je skutečně použitelných.

4. **Důvěřují inženýři v našem týmu nálezům statické analýzy, nebo se je
   naučili přehlížet, protože příliš velká část výstupu je šum?** Je to přímá,
   upřímná kontrolní otázka, kterou stojí za to týmu položit, protože nástroj,
   který se ignoruje, nepřináší žádnou skutečnou hodnotu bez ohledu na své
   teoretické schopnosti.

5. **Jak dnes nakládáme s legitimním nálezem, o kterém tým věří, že by měl být
   vzhledem ke konkrétnímu kontextu prominut?** Ověřte, zda váš proces z toho
   dělá viditelné, zdokumentované rozhodnutí, nebo zda se to děje tichým,
   nezdokumentovaným potlačením, které v čase podkopává signál nástroje.

6. **Kde se nálezy statické analýzy, skóre složitosti a data o hotspotech
   sbíhají na stejném souboru nebo modulu?** Výslovně porovnejte tyto tři
   signály; shoda napříč více nezávislými metrikami je silnějším signálem
   prioritizace než kterýkoli jednotlivý sám.

## Pohled podle sektorů

**Startup.** Nenáročný, bezplatný nástroj statické analýzy integrovaný do CI od
začátku je levné pojištění a zachytí skutečné problémy brzy, dřív než má zděděný
backlog jakoukoli šanci se nahromadit. Soustřeďte sadu pravidel na skutečně
hodnotné kategorie s nízkým šumem, místo abyste hned zapínali všechna dostupná
pravidla.

**Malá firma.** Většina moderních jazykových ekosystémů zahrnuje schopné bezplatné
nástroje statické analýzy; jejich zapnutí v CI s rozumnou výchozí sadou pravidel
vyžaduje malou investici. Soustřeďte se na bránu pro nové nálezy místo
pokusů vyřešit veškerý už existující backlog najednou.

**Velký podnik.** Záměrné řízení míry falešně pozitivních nálezů a třídění
závažnosti se v tomto měřítku stává nezbytným, protože špatně vyladěný nástroj
generující nadměrný šum napříč desítkami týmů bude ignorován v celé organizaci.
Investujte do vyhrazeného vlastníka samotné konfigurace nástrojů statické
analýzy a berte ladění pravidel jako průběžnou disciplínu, ne jednorázový úkol
nastavení.

**Státní správa.** Nálezy statické analýzy, zejména bezpečnostní, jsou často
přímo relevantní pro požadavky na soulad a audit. Udržujte zdokumentovaný,
auditovatelný proces toho, jak se nálezy třídí, opravují nebo formálně
prominou se zaznamenaným odůvodněním, protože právě tuto dokumentaci chce
externí auditor často vidět.

## Příklady

**Velký podnik.** Dashboard statické analýzy jedné softwarové firmy nahromadil
přes čtyřicet tisíc nevyřešených nálezů napříč její kódovou bází po několika
letech bez třídění podle závažnosti, což je číslo tak velké, že se inženýři na
dashboard většinou přestali dívat. Revidovaný přístup nálezy roztřídil podle
závažnosti, zjistil, že méně než dvě stě jich je skutečně kritických, a bránu
v CI nastavil konkrétně na nové kritické a vysoce závažné nálezy, zatímco
nízkozávažný backlog nechal postupně zmenšovat běžnou údržbou kódu. Během šesti
měsíců klesly kritické nálezy na jednociferný počet a, což je důležitější, data
z průzkumu inženýrů ukázala obnovenou důvěru ve výstup nástroje, nyní když
vynášel zvládnutelný, skutečně použitelný signál místo ohromujícího,
ignorovaného backlogu.

**Státní správa.** Politika zabezpečení softwarového dodavatelského řetězce
jedné obranné agentury vyžadovala před každým vydáním sken statickou analýzou s
nulou nevyřešených nálezů, politika, která v praxi vedla vývojové týmy k
potlačení velkého počtu nálezů, včetně některých skutečných bezpečnostních
problémů, jen aby stihly termíny vydání pod neúnosnou bránou „všechno, nebo
nic“. Revidovaná politika požadovala nulu nových kritických nebo vysoce
závažných nálezů zavedených kterýmkoli vydáním, spolu se zdokumentovaným,
sledovaným plánem nápravy a časovým harmonogramem pro zděděný backlog,
čtvrtletně přezkoumávaným radou pro řízení bezpečnosti. Tento praktický,
postupný přístup jak vrátil skutečnou bezpečnostní kontrolu novému kódu, tak
dosáhl skutečného, měřitelného pokroku proti zděděnému backlogu během osmnácti
měsíců, na rozdíl od neúnosné předchozí politiky, která většinou přinesla
potlačování místo skutečných oprav.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností dobře řízené statické analýzy je zachycení skutečných vad a
bezpečnostních zranitelností dřív, než dosáhnou produkce, za náklady mnohem nižší,
než by vyžadovalo ekvivalentní úsilí lidské revize pro stejné pokrytí. Příklad
obranné agentury výše ukazuje cenu chyby: neúnosná politika „všechno, nebo nic“
ve skutečnosti snížila skutečnou bezpečnostní kontrolu tím, že vyvolala
potlačování, opak svého záměru.

Celkové náklady vlastnictví (TCO) zahrnují samotné nástroje, u běžných
jazykových ekosystémů často bezplatné nebo levné, a trvalou disciplínu třídění
závažnosti, řízení falešně pozitivních nálezů a plánování nápravy zděděného
backlogu. Tato trvalá disciplína, víc než nástroj sám, určuje, zda program
statické analýzy poskytuje skutečnou, důvěryhodnou hodnotu, nebo degeneruje v
ignorovaný šum.

## Antivzory a úskalí

- **Brát hrubý počet nálezů jako metriku:** slévá triviální a závažné problémy
  a snadno se zmanipuluje potlačením.
- **Požadovat vyřešení celého historického backlogu, než pokročí jakákoli nová
  práce:** obvykle nepraktické a vyvolává potlačování místo skutečných oprav.
- **Ignorovat míru falešně pozitivních nálezů:** neřízená úroveň šumu vede týmy k
  tomu, že výstup nástroje přestanou vnímat úplně, včetně skutečných nálezů.
- **Tiché, nezdokumentované potlačování legitimních nálezů:** podkopává signál
  nástroje a nezanechává žádnou auditní stopu pro účely souladu.
- **Brát nález statické analýzy jako automatický verdikt bez lidské revize:**
  míjí kontext, který nástroj nevidí.
- **Nikdy neporovnávat nálezy s daty o složitosti a hotspotech:** míjí silnější
  signál prioritizace, který poskytují sbíhající se důkazy.

## Model zralosti

- **Úroveň 1, Zahájení:** Statická analýza se nespouští, nebo se nálezy hromadí
  neřízeně bez třídění podle závažnosti nebo sledování trendu.
- **Úroveň 2, Rozvoj:** Určitá statická analýza běží v CI, ale třídění
  závažnosti je nekonzistentní a míra falešně pozitivních nálezů je neřízená.
- **Úroveň 3, Standardizace:** Nálezy jsou vážené závažností a CI v celé
  organizaci blokuje na nových kritických a vysoce závažných nálezech.
- **Úroveň 4, Řízení:** Míra falešně pozitivních nálezů se aktivně ladí, zděděný
  backlog má zdokumentovaný, tempovaný plán nápravy a prominutí jsou viditelná a
  zdokumentovaná.
- **Úroveň 5, Orchestrace:** Nálezy statické analýzy, data o složitosti a data o
  hotspotech se rutinně porovnávají pro prioritizaci investic a organizace
  dokáže ukázat konkrétní, měřitelná zlepšení v počtu vad nebo v bezpečnosti
  vysledovaná k programu.

## Náměty k diskusi

1. Jaký je náš současný trend vážený závažností a zlepšuje se, nebo zhoršuje?
2. Jak velký je náš zděděný backlog nálezů a máme záměrný plán, jak ho snížit?
3. Jaký je náš odhadovaný podíl falešně pozitivních nálezů u nejhlučnější kategorie nálezů?
4. Důvěřují dnes inženýři v našem týmu výstupu naší statické analýzy, nebo ho ignorují?
5. Kde se v naší kódové bázi nálezy statické analýzy sbíhají s daty o složitosti nebo hotspotech?

## Hlavní poznatky

- Sledujte **trend vážený závažností**, ne hrubý počet nálezů, který slévá
  triviální a závažné problémy.
- Brány v CI nastavte na **nově zavedené nálezy**, ne na celý historický
  backlog, abyste zabránili zhoršení bez požadavku na nepraktickou opravu
  všeho najednou.
- Aktivně řiďte **míru falešně pozitivních nálezů**; neřízený šum ničí důvěru v
  nástroj a vede k hromadnému ignorování nálezů.
- Berte nálezy jako **podnět k lidské revizi**, s viditelnými, zdokumentovanými
  prominutími, ne jako automatický verdikt nebo tiché potlačení.
- Porovnávejte statickou analýzu s **daty o složitosti a hotspotech** (témata
  4.1, 4.3) pro sbíhající se, silnější důkazy pro prioritizaci.

## Odkazy a další četba

- *Static Program Analysis*, Anders Møller a Michael I. Schwartzbach
  (teoretické a praktické základy technik statické analýzy).
- Pokyny OWASP ke statickému testování bezpečnosti aplikací (SAST), součást
  širších zdrojů OWASP Foundation o postupech bezpečného vývoje softwaru.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (katalog code smells, ze kterého čerpá velká část nástrojů statické analýzy).
- *Working Effectively with Legacy Code*, Michael Feathers (řízení zděděného
  backlogu problémů s kvalitou ve zavedené kódové bázi).
