# 5.1 Míra uniklých vad a úniky kvality

## Přehled a motivace

**Míra uniklých vad** měří vady, které se dostanou do produkce a ovlivní
skutečné uživatele, na rozdíl od vad zachycených dříve pomocí testování,
revize kódu nebo statické analýzy, které pokrývá část 4 této knihy. Rozdíl je
nesmírně důležitý: vada zachycená při revizi kódu stojí minuty opravy a žádný
uživatel ji nikdy neuvidí; tatáž vada, pokud unikne do produkce, může stát
hodiny reakce na incident, skutečnou újmu zákazníkům a měřitelný šrám na
důvěře. Tato metrika je v pravém slova smyslu závěrečnou skóre kartou všeho, co
část 4 pokrývá, protože rostoucí míra uniklých vad navzdory silným vnitřním
metrikám kvality (složitost, pokrytí, statická analýza) obvykle znamená, že
tyto vnitřní signály ve skutečnosti nezachycují způsoby selhání, na kterých
skutečným uživatelům záleží.

Toto téma bere uniklé vady s vážností, kterou si jejich cena zaslouží, a přitom
odolává pokušení chápat hrubý počet jako jednoduchou tabuli výsledků. Ne všechny
vady jsou stejné: překlep v zřídka zobrazovaném textu nápovědy a chyba
poškozující data ve finančním transakčním systému jsou obojí technicky uniklé
vady a jejich stejné zacházení vytváří metriku, která je buď příliš zašuměná, než
aby se podle ní dalo jednat, nebo, což je horší, aktivně zavádějící v tom, kde
skutečné riziko leží. Hlavní doporučení tohoto tématu, sledování vážené
závažností s pečlivým dohledem nad tím, jak se vady klasifikují, míří přímo na
tento problém.

U velkých týmů je míra uniklých vad jedním z nejjasnějších mostů mezi vnitřními
inženýrskými metrikami této knihy a světem zákazníků, jímž se zabývá celá
část 5. Velké podniky ji používají k zdůvodnění investic do praktik testování a
revizí z části 4; státní správa, kde uniklá vada může znamenat nesprávný výpočet
dávky nebo selhání veřejné služby, ji pokládá za přímou míru veřejné důvěry a
právní expozice, ne pouhou vnitřní inženýrskou statistiku.

## Klíčové zásady

- **Míra uniklých vad je závěrečnou skóre kartou vnitřních praktik kvality.**
  Rostoucí míra navzdory silným metrikám z části 4 znamená, že tyto metriky
  nezachycují to, na čem záleží.
- **Závažnost je důležitější než hrubý počet.** Vážte vady skutečným dopadem na
  zákazníky nebo byznys, ne tím, že se se všemi úniky zachází stejně.
- **Důsledná klasifikace je nezbytná.** Dva týmy, které závažnost klasifikují
  různě, vytvářejí čísla, jež nelze férově srovnávat.
- **Tato metrika je vystavena manipulaci s definicí**, přesně jako míra selhání
  změn (téma 2.10): zúžení toho, co se počítá jako „vada“, lichotí číslu, aniž
  by se snížila skutečná újma zákazníkům.
- **Kategorizace kořenových příčin mění počet v diagnostický nástroj.** Vědět,
  *proč* vady unikají, je použitelnější než vědět jen, kolik jich uniklo.

## Doporučení

### Važte uniklé vady závažností podle jednotné, zdokumentované škály

Klasifikujte každou uniklou vadu podle pevné škály závažnosti (obvykle
kritická, závažná, drobná, nebo číslovaný ekvivalent) na základě skutečného
dopadu na zákazníky nebo byznys: ztráta či poškození dat, bezpečnostní expozice
a úplná nedostupnost funkce patří nahoru; kosmetický problém bez funkčního
dopadu dolů. Sledujte trend vážený závažností, ne jen hrubý počet, aby nárůst
drobných problémů vizuálně nepřehlušil menší, ale mnohem závažnější nárůst
kritických.

### Sjednoťte kritéria klasifikace napříč týmy

Různé týmy, které si závažnost klasifikují samy, se budou odchylovat k různým
standardům, některé konzervativním, jiné shovívavým, takže srovnání mezi týmy
ztratí smysl a, což je horší, vznikne pobídka klasifikovat velkoryse směrem dolů,
aby čísla vlastního týmu vypadala lépe (varianta manipulace s definicí z tématu
1.2). Zveřejněte jasná kritéria klasifikace založená na příkladech a
pravidelně auditujte vzorek klasifikací napříč týmy, abyste ověřili
konzistenci.

### Sledujte [kořenovou příčinu](https://en.wikipedia.org/wiki/Root_cause_analysis), ne jen počet a závažnost

U každé uniklé vady zaznamenejte, proč unikla: mezera v testování, přehlédnutý
okrajový případ v požadavcích, rozdíl prostředí mezi stagingem a produkcí,
revize, která problém přehlédla. Tato data o kořenových příčinách časem agregujte,
abyste našli systémové vzorce; pokud vaše úniky ovládá určitá kategorie (řekněme
vady z rozdílů prostředí), ukazuje to přímo na konkrétní, opravitelnou mezeru v
procesu, ne na vágní obecnou výzvu „testovat víc“.

### Propojte uniklé vady zpět s jejich původními signály vnitřní kvality

Kde je to možné, vysledujte uniklou vadu zpět k oblasti kódu, z níž pochází, a
ověřte, zda tato oblast vykazovala varovné signály v metrikách části 4: byl to
hotspot složitosti (téma 4.1, téma 4.3), měla nízkou míru zabití mutantů (téma
4.2), označila v okolí něco statická analýza (téma 4.4). Právě toto propojení
ověřuje, zda jsou vaše vnitřní metriky kvality skutečně prediktivní pro vady,
které vidí zákazníci, nebo zda měří něco, co ve vašem konkrétním kontextu s
tím, co zákazníci skutečně zažívají, nekoreluje.

### Chraňte se před tím, aby se klasifikace vad stala hledáním viníka

Rámujte analýzu kořenových příčin vad výslovně jako otázku systému, podle
diagnostického rámce tématu 1.1, ne jako hledání individuálního viníka. Tým,
který se bojí obviňování za uniklou vadu, má silnou pobídku k podhodnocování
hlášení, ke klasifikaci směrem dolů nebo k odporu vůči důkladné analýze
kořenových příčin, což všechno kazí právě ta data, na nichž toto téma závisí.
Praxe postmortemů bez obviňování, podrobněji pokrytá v tématu 6.2, se sem
vztahuje přímo.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Hrubý počet uniklých vad | Jednoduché na vykazování | Zachází stejně s překlepem i s chybou poškozující data; zašuměné a zavádějící |
| Sledování vážené závažností | Přesněji odráží skutečný dopad na zákazníky | Vyžaduje důslednou, disciplinovanou klasifikaci |
| Standardy klasifikace nezávislé pro každý tým | Flexibilní, nízká režie koordinace | Vytváří nesrovnatelná čísla mezi týmy; vybízí ke shovívavému posunu |
| Standardizovaná, auditovaná klasifikace | Férová, srovnatelná, odolná vůči manipulaci | Vyžaduje průběžnou správu a úsilí na pravidelné audity |

Hlavním napětím je **místní flexibilita versus srovnatelnost mezi týmy**.
Nechat každý tým klasifikovat závažnost vad způsobem, který vyhovuje jeho
kontextu, se zavádí snáz, ale vytváří čísla, která nelze férově srovnávat ani
agregovat na úrovni organizace, a vytváří tichou pobídku, aby tým klasifikoval
velkoryse a chránil své vlastní metriky. Napětí vyřešíte investicí do
standardizovaných, zdokumentovaných kritérií klasifikace a pravidelných auditů
napříč týmy; berte to jako práci na správě (téma 1.4), která za tuto investici
stojí, protože tato metrika je tak přímo spojena se skutečným dopadem na
zákazníky.

## Otázky k diskusi s vaším týmem

1. **Sledujeme uniklé vady podle závažnosti, nebo hrubý počet zachází s drobným
   kosmetickým problémem stejně jako s kritickým problémem s daty?** Otevřete
   svůj skutečný dashboard a ověřte to; pokud vážení podle závažnosti ještě
   neexistuje, je to jediná nejcennější změna, kterou toto téma doporučuje.

2. **Klasifikovaly by dva různé týmy závažnost téže vady stejně, nebo se
   klasifikace napříč organizací rozešla?** Vyberte skutečnou, nejednoznačnou
   vadu z minulosti a nechte zástupce dvou různých týmů, ať ji nezávisle
   klasifikují; porovnejte výsledky poctivě.

3. **Jaká je naše nejčastější kořenová příčina uniklých vad a řeší ji náš
   současný proces skutečně, nebo jen pořád reagujeme na jednotlivé incidenty,
   jak nastanou?** Agregujte data o kořenových příčinách za posledních několik
   měsíců a hledejte dominantní vzorec.

4. **Vedly se naše uniklé vady zpět k oblastem, které naše vnitřní metriky
   kvality (složitost, pokrytí, statická analýza) už označily jako rizikové?**
   Toto propojení ověřuje, zda jsou vaše metriky z části 4 ve vašem konkrétním
   kontextu skutečně prediktivní, nebo zda přehlížejí způsoby selhání, na nichž
   skutečně záleží.

5. **Působí náš proces klasifikace vad bezpečně, nebo se inženýři bojí
   obviňování, když hlásí či klasifikují vadu, s níž jsou spojeni?** Kultura
   náchylná k obviňování systematicky kazí tato data podhodnocováním hlášení a
   shovívavou klasifikací; buďte k současné kultuře upřímní.

6. **Zlepšila se někdy naše míra uniklých vad podezřele rychle bez odpovídající
   změny v praktikách testování či revizí?** Stejně jako u míry selhání změn
   (téma 2.10) je to nejjasnější znamení, že se pohnula kritéria klasifikace,
   ne skutečné riziko.

## Pohled podle sektorů

**Startup.** Formální klasifikace závažnosti je při malém objemu vad a malém
týmu, který může každou probrat přímo, často zbytečná. Zvyk, který stojí za to
přijmout brzy, je prostě sledovat vady od začátku důsledně, i neformálně, aby
historická data existovala, až tým naroste natolik, že bude potřebovat
formálnější analýzu.

**Malá firma.** Jednoduchá, sdílená škála závažnosti, i jen o třech úrovních
(kritická, závažná, drobná), důsledně používaná tím, kdo vyřizuje podporu a
třídění chyb, zachytí většinu hodnoty tohoto tématu bez sofistikovaných nástrojů
či vyhrazené funkce kvality.

**Velký podnik.** Konzistence klasifikace napříč týmy je zde investicí s
nejvyšší pákou, protože nekonzistentní standardy napříč desítkami týmů činí
srovnání kvality v celé organizaci bezvýznamným. Investujte do zdokumentovaných
kritérií klasifikace založených na příkladech a do pravidelných auditů a
systematicky propojujte uniklé vady zpět se signály vnitřní kvality z části 4,
abyste ověřili, které z nich jsou pro vaši organizaci skutečně prediktivní.

**Státní správa.** Uniklá vada ve veřejně přístupném systému nebo v systému
výpočtu dávek nese právní a veřejně-důvěrovou váhu přesahující její inženýrskou
cenu. Klasifikaci závažnosti u vad ovlivňujících služby pro občany berte s
obzvláštní přísností a buďte připraveni, že rozhodnutí o klasifikaci budou
podrobena vnějšímu zkoumání, což je silný argument pro zdokumentovaná,
auditovaná a konzistentní kritéria místo ad hoc odhadů.

## Příklady

**Velký podnik.** Počet uniklých vad společnosti s předplatitelským softwarem
rostl dvě čtvrtletí a počáteční obavy se soustředily na hrubé číslo. Analýza
vážená závažností odhalila, že nárůst byl téměř celý v drobných, kosmetických
problémech, což se časově shodovalo s nedávným redesignem uživatelského
rozhraní, zatímco kritické a závažné vady ve stejném období mírně klesly.
Analýza kořenových příčin nárůstu drobných problémů ukázala na mezeru ve
vizuálním regresním testování právě pro nové komponenty rozhraní, cílenou a
levnou opravu, která by byla zcela přehlédnuta, kdyby tým reagoval na hrubý,
nevážený počet jako na nediferencovanou krizi kvality.

**Státní správa.** Systém výpočtu dávek státního úřadu práce měl uniklou vadu,
která po několik měsíců před odhalením nesprávně zamítala malé procento jinak
oprávněných žádostí. Šetření kořenové příčiny zjistilo, že vada vznikla v oblasti
kódu, kterou vnitřní revize kvality o osmnáct měsíců dříve označila jako hotspot
složitosti (téma 4.1, téma 4.3), ale hotspot nebyl nikdy prioritizován k nápravě,
protože dosud nenastala žádná vada, která by riziko zkonkrétnila. Revidovaný
proces úřadu nyní výslovně váží oblasti označené jako hotspot výše v prioritě
testování a revizí právě kvůli tomuto prokázanému, ověřenému spojení mezi
vnitřními signály složitosti a skutečným rizikem uniklých vad.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností důsledného sledování míry uniklých vad, s vážením podle závažnosti a
analýzou kořenových příčin, je schopnost nasměrovat investice do kvality tam, kde
skutečně sníží újmu zákazníkům, místo reakce na nediferencovaný počet, který
bez rozdílu míchá triviální a závažné problémy. Výše uvedený příklad softwaru s
předplatným to ukazuje jasně: reakce na hrubý počet by spustila širokou,
nesoustředěnou iniciativu kvality, zatímco odpověď vážená závažností a
informovaná kořenovými příčinami určila konkrétní, levnou, cílenou opravu.

Celkové náklady vlastnictví (TCO) zahrnují disciplínu klasifikace (jednotná
kritéria, pravidelné audity) a úsilí o sledování kořenových příčin, což jsou
především procesní investice, ne náklady na nástroje. Tato investice se přímo
vyplatí v nákladech na újmu zákazníkům a reakci na incidenty, kterým se vyhnete
tím, že úsilí o kvalitu nasměrujete na skutečné, ověřené zdroje rizika uniklých
vad.

## Antivzory a úskalí

- **Brát hrubý počet vad jako metriku:** směšuje triviální a závažné problémy a
  zakrývá skutečný signál.
- **Nekonzistentní klasifikace závažnosti napříč týmy:** činí srovnání mezi
  týmy bezvýznamným a vybízí ke shovívavému posunu klasifikace.
- **Žádné sledování kořenových příčin:** mění počet v číslo bez diagnostické
  hodnoty a nechává systémové vzorce neviditelné.
- **Kultura hlášení náchylná k obviňování:** kazí data podhodnocováním hlášení a
  shovívavou klasifikací, přesně to riziko vystavení pobídkám, před nímž
  varuje téma 1.2.
- **Nikdy nepropojit uniklé vady zpět se signály vnitřní kvality:** promarní
  příležitost ověřit, nebo vyvrátit, prediktivní metriky z části 4 proti
  skutečným výsledkům.
- **Podezřele rychlé zlepšení bez změny procesu za ním:** nejjasnější znamení,
  že se posunula kritéria klasifikace, ne skutečné riziko.

## Model zralosti

- **Úroveň 1, Zahájení:** Uniklé vady se sledují, pokud vůbec, jako hrubý počet
  bez vážení závažností či analýzy kořenových příčin.
- **Úroveň 2, Rozvoj:** Určitá klasifikace závažnosti existuje, ale standardy se
  napříč týmy liší a sledování kořenových příčin je nekonzistentní.
- **Úroveň 3, Standardizace:** Klasifikace závažnosti je standardizovaná a
  zdokumentovaná v celé organizaci a kategorizace kořenových příčin se používá
  důsledně.
- **Úroveň 4, Řízení:** Uniklé vady se systematicky vedou zpět k signálům vnitřní
  kvality, aby se ověřila jejich prediktivní hodnota, a klasifikace se pravidelně
  auditují na konzistenci.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní, měřitelná
  snížení míry uniklých vad vysledovaná k cíleným investicím do kvality
  informovaným kořenovými příčinami, ověřená proti signálům vnitřní kvality.

## Náměty k diskusi

1. Klasifikoval by naši nejzávažnější uniklou vadu z minulého čtvrtletí jiný tým stejně?
2. Jaká je naše nejčastější kořenová příčina uniklých vad a skutečně ji řešíme?
3. Vedla se někdy uniklá vada zpět k oblasti, kterou naše vnitřní metriky už označily?
4. Cítí se náš tým bezpečně, když hlásí a poctivě klasifikuje vadu, kterou způsobil?
5. Co by pohled na náš současný počet vad vážený závažností odhalil, co hrubý počet skrývá?

## Hlavní poznatky

- Míra uniklých vad je **závěrečnou skóre kartou** vnitřních praktik kvality;
  rostoucí míra navzdory silným metrikám z části 4 znamená, že tyto metriky
  nezachycují to, na čem záleží.
- **Važte podle závažnosti**, pomocí jednotné, zdokumentované, auditované škály
  klasifikace, nikdy jen hrubým počtem.
- Sledujte **kořenovou příčinu**, ne jen počet a závažnost, aby se z metriky stal
  skutečný diagnostický nástroj.
- **Propojte uniklé vady zpět se signály vnitřní kvality** (složitost, pokrytí,
  statická analýza), abyste ověřili, zda jsou tyto signály skutečně
  prediktivní.
- Chraňte se před **kulturou náchylnou k obviňování**, která kazí hlášení a
  klasifikaci podhodnocováním a shovívavým posunem.

## Odkazy a další četba

- *Site Reliability Engineering*, Betsy Beyer, Chris Jones, Jennifer Petoff a
  Niall Richard Murphy, eds. (praxe postmortemů bez obviňování použitelná na
  analýzu kořenových příčin vad).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble a Gene Kim (vztah mezi praktikami dodávání a výsledky kvality).
- *Code Complete*, Steve McConnell (praktiky klasifikace vad a analýzy
  kořenových příčin).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (systémové
  rámování vyšetřování selhání bez obviňování).
