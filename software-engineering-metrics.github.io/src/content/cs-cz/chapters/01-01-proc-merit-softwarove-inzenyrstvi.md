# 1.1 Proč měřit softwarové inženýrství

## Přehled a motivace

Softwarové inženýrství se měření brání jinak než výroba. Výrobní linka vyrábí
shodné kusy, takže jejich počítání říká něco skutečného. Softwarová práce
vytváří unikátní artefakty za neustále se měnících požadavků, takže prosté
počítání commitů, řádků nebo uzavřených tiketů prakticky nic neříká o dodané
hodnotě. Mezi obtížností měření softwarové práce a velmi reálnou potřebou
vědět, zda jde dobře, leží celá tato kniha. Toto téma se snaží onu mezeru
poctivě zacelit: nikoli tvrzením, že softwarová práce je spočitatelná jako
cetky, ale přesným vymezením toho, co měření může a nemůže pro inženýrskou
organizaci udělat.

Měření existuje proto, aby odpovídalo na otázky, na které organizace jinak
nedokáže odpovědět s jistotou: zrychluje se naše dodávání, nebo zpomaluje,
kvalita se zlepšuje, nebo zhoršuje, vyhořívají inženýři, vyplácí se tato
investice. Bez metrik na ně odpovídá ten, kdo mluví v místnosti nejsebejistěji,
obvykle nejstarší nebo nejpřesvědčivější z přítomných, a jeho odpověď bývá
často špatná. Týmy [softwarového inženýrství](https://en.wikipedia.org/wiki/Software_engineering),
které měření přeskočí, se nevyhnou úsudkům o vlastním výkonu. Jen je dělají na
základě dojmů, historek a zkreslení z poslední zkušenosti místo důkazů.

U velkých týmů to přestává být příjemný bonus a stává se to strukturální
nutností. Tým o šesti lidech sdílí představu o tom, jak se věci mají, každodenním
rozhovorem. Oddělení o šesti stech lidech, rozptýlené přes časová pásma a
obchodní jednotky, to nedokáže. V takovém měřítku je sdílená a důvěryhodná
sada čísel jedinou praktickou náhradou neformálního povědomí, které malý tým
dostává zadarmo. Vedení velkého podniku potřebuje metriky, aby rozdělilo
investice mezi desítky týmů soupeřících o stejný rozpočet. Státní inženýrské
organizace potřebují metriky, aby parlamentům a veřejnosti prokázaly, že
přidělené prostředky vytvořily skutečnou schopnost, nikoli jen aktivitu. V obou
případech není důkazem věta „tvrdě jsme pracovali“; důkazem je obhajitelné
číslo.

## Klíčové zásady

- **Měřte, abyste se učili, ne abyste soudili.** Hlavním účelem inženýrské
  metriky je informovat rozhodnutí, nikoli hodnotit člověka nebo tým.
- **Číslo bez připojeného rozhodnutí je dekorace.** Pokud by žádná hodnota
  metriky nezměnila to, co uděláte dál, na dashboard nepatří.
- **Měření je prostředek, ne cíl.** Cílem je lepší software dodávaný
  spolehlivěji udržitelným týmem. Metriky existují jen proto, aby tomuto cíli
  sloužily.
- **Každá metrika něco stojí.** Instrumentace, čas na revize i riziko
  zkreslení chování popsané v tématu 1.2 něco stojí. Metrika si tyto náklady
  musí vydělat zpět.
- **Mlčení je také rozhodnutí.** Rozhodnout se něco neměřit je volba s
  následky, nikoli neutrální výchozí stav.

## Doporučení

### Začněte od rozhodnutí, ne od dashboardu

Dříve než cokoli instrumentujete, pojmenujte rozhodnutí, které metrika
podpoří. „Chceme vědět, zda naše nová pipeline pro nasazení snížila počet
incidentů“ je otázka ve tvaru rozhodnutí; „sledujme všechno, co nástroj umí
exportovat“ není. Postup od rozhodnutí zpět udržuje sadu metrik malou a každou
dlaždici obhajitelnou, kdykoli se někdo zeptá, proč existuje. Pokud nedokážete
pojmenovat rozhodnutí, které by metrika podpořila, zatím ji nestavte. Téma 1.3
jde do hloubky u verze této disciplíny „výsledky před výstupy“.

### Oddělte diagnostické použití od hodnoticího

Metrika použitá k diagnóze problému systému (proč nám roste lead time) se
chová úplně jinak než táž metrika použitá k hodnocení člověka nebo týmu (čí
lead time je nejhorší). První zve k zkoumání a zlepšování. Druhé zve k
zatajování a manipulaci, protože číslo má nyní připojený reputační nebo
finanční důsledek. Výslovně a písemně rozhodněte, k čemu metrika slouží, a
nikdy nedovolte, aby diagnostická metrika sklouzla do hodnoticího použití,
aniž byste riziko záměrně znovu zvážili. Toto rozlišení se v knize neustále
vrací a je formalizováno v části o necílech v chartě metrik popsané v tématu
1.4.

### Berte měření jako hypotézu, ne jako fakt

Metrika je zástupný ukazatel pro to, na čem vám skutečně záleží, nikoli věc
sama. Frekvence nasazení je zástupným ukazatelem schopnosti dodávat, nikoli
samotnou schopností dodávat. Každou metriku berte jako hypotézu, která je
průběžně testována: sleduje toto číslo stále to, na čem nám záleží, nebo se
svět posunul a zástupný ukazatel nechal za sebou? Vracejte se k této otázce v
pevném rytmu, místo abyste předpokládali, že metrika dobře zvolená před dvěma
lety je dobře zvolená i dnes, zvlášť když se mění nástroje, struktura týmů
nebo (viz část 7) povaha samotné práce.

### Učiňte absenci měření viditelnou

Ve velkých organizacích nejrizikovější mezera není špatná metrika, ale oblast,
kterou nikdo neměří vůbec, protože se obtížně instrumentuje: zkušenost
vývojářů, tření mezi závislostmi týmů, eroze institucionální znalosti.
Pojmenujte tyto mezery výslovně ve své chartě metrik, místo aby zůstaly
neviditelné ze zvyku. Organizace, která ví, co neměří a proč, je v mnohem
silnější pozici než ta, která na existenci těchto oblastí tiše zapomněla.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Silná instrumentace, mnoho metrik | Široký přehled, méně slepých míst | Únava z dashboardů, větší plocha pro manipulaci, vyšší náklady na údržbu |
| Minimální metriky řízené rozhodnutími | Soustředění, nízká režie, každá metrika obhajitelná | Riziko, že přehlédnete vznikající problém mimo zvolenou sadu |
| Metriky jen pro diagnózu | Podporují poctivé hlášení a zkoumání | Vedení je přesto může neformálně používat k hodnocení |
| Metriky navázané na hodnocení jednotlivců | Působí zodpovědně, snadno se vysvětlují vedení | Silný motiv k manipulaci; poškozují důvěru; obvykle měří špatnou věc |

Hlavním napětím je **pokrytí versus soustředění**, které zostřuje **diagnóza
versus posuzování**. Příliš málo metrik a vzniknou slepá místa, která se
projeví až jako krize; příliš mnoho a nikdo nemůže jednat podle žádné z nich,
zatímco každá metrika, které přidáte hodnoticí váhu, zve ke zkreslení. Řešte
to tak, že začnete minimálně a řízeně rozhodnutími, metriku přidáte, až když ji
vyžaduje konkrétní, pojmenované rozhodnutí, a hranici „jen diagnostické“
výslovně hájíte ve správě z tématu 1.4, místo abyste ji nechali vyčpět ze
zvyku.

## Otázky k diskusi s vaším týmem

1. **Jaké rozhodnutí by u každé metriky na našem současném dashboardu spustilo
   dobré a jaké špatné čtení?** Pokud obě čtení vedou ke stejné akci nebo k
   žádné, metrika je dekorace. Projděte dashboard dlaždici po dlaždici a
   vynuťte si u každé poctivou odpověď. Toto cvičení běžně zredukuje nafouklý
   dashboard na polovinu na jedno posezení, protože většina změtence vzniká z
   metrik, které nikdo nikdy neodstraní, nikoli z metrik, které někdo
   záměrně přidal z důvodu, který stále platí.

2. **Které z našich metrik se používají diagnosticky a které se tiše staly
   hodnoticími?** Metrika vytvořená k pochopení omezení systému se může
   nechat unést k řazení týmů nebo jednotlivců do pořadí, aniž by o tom
   někdo záměrně rozhodl, často skrze nenucenou poznámku na revizní schůzce,
   která se stane zvykem. Jakmile k tomuto posunu dojde, číslo přestává být
   důvěryhodné, protože lidé mají nyní důvod, aby vypadalo dobře, místo aby
   bylo přesné. Zapište zamýšlené použití každé metriky a porovnejte s ním
   současnou praxi.

3. **Co neměříme, protože se to obtížně instrumentuje, a kolik nás tato mezera
   stojí?** Nejnebezpečnější slepá místa jsou ta, která se nikdy nedostanou na
   dashboard právě proto, že se snadnému měření vzpírají: tření mezi
   závislostmi týmů, eroze institucionální znalosti nebo tiché hromadění
   křehkých provizorií. Přineste seznam věcí, o nichž si všichni soukromě
   dělají starosti, ale nikdo je nesleduje, a buďte upřímní, proč.

4. **Kdybychom tuto metriku zítra smazali, kdo by si toho všiml a co by
   ztratil?** Metrika, kterou by nikdo nepostrádal, je metrika, která
   neinformuje žádné rozhodnutí. Tato otázka odhalí dlaždice pro parádu, které
   přežívají jen ze setrvačnosti. U velké organizace s desítkami týmových
   dashboardů je tato disciplína ořezávání stejně důležitá jako disciplína
   přidávání nových metrik.

5. **Kolik nás každá metrika na našem dashboardu skutečně stojí na výrobu a
   údržbu, včetně inženýrského času za instrumentací?** Metriky nejsou zdarma.
   Pipeline, dashboardy a čas na revizích strávený diskusí o čísle nesou
   opakující se náklady, které se snadno podceňují, protože jsou rozprostřeny
   do mnoha drobných úkolů místo jedné viditelné položky. Přineste skutečné
   úsilí na instrumentaci a údržbu a poměřte je s hodnotou rozhodnutí z otázky
   1.

6. **Kde se měření stalo náhradou úsudku a kde se úsudek stal náhradou
   měření?** Oba způsoby selhání jsou skutečné. Tým, který outsourcuje každé
   rozhodnutí dashboardu, ztrácí kontextový úsudek, který zachytí, co číslo
   přehlédne; tým, který ignoruje dostupná data ve prospěch nejhlasitějšího
   hlasu v místnosti, opakuje přesně ten problém, jímž toto téma začíná.
   Cílem jsou metriky, které informují úsudek, nikoli metriky, které ho
   nahrazují.

## Pohled podle sektorů

**Startup.** S hrstkou inženýrů se většině toho, před čím toto téma varuje
(posun k hodnoticímu použití, slepá místa, nafukování dashboardů), snadno
vyhnete už proto, že spolu všichni mluví denně. Riziko je opačné: přeskočit
měření úplně, protože působí jako režie, kterou si tým nemůže dovolit. Vyberte
dvě nebo tři otázky ve tvaru rozhodnutí (dodáváme dost rychle, drží kvalita) a
instrumentujte jen ty.

**Malá firma.** Bez vyhrazeného platformního nebo datového týmu se opřete o to,
co už hlásí vaše stávající nástroje, místo budování vlastní instrumentace.
Dashboard platebního procesoru, metriky odezvy nástroje podpory a historie
buildů vašeho poskytovatele CI obvykle pokryjí nejdůležitější rozhodnutí.
Odolejte pokušení koupit si specializovanou platformu pro inženýrskou analytiku,
dokud jste neprokázali, že budete jednat podle toho, co vám řekne.

**Velký podnik.** Základním rizikem jsou metriky, které se tiše posouvají od
diagnostického k hodnoticímu použití, jak procházejí vrstvami řízení, a
dashboardy, které rostou nabalováním, protože nikdo nevlastní úkol je
ořezávat. Správa (téma 1.4) není v tomto měřítku volitelná. Sjednoťte definice
napříč obchodními jednotkami a zabudujte do samotného programu metrik pravidelnou
revizi vyřazování.

**Státní správa.** Zdejší metriky často nesou zákonnou nebo rozpočtovou váhu,
což zvyšuje hodnotu správného nastavení i cenu chyby. Číslo hlášené
parlamentu nebo kontrolnímu orgánu potřebuje zdokumentovanou metodiku,
stabilní definici napříč obdobími vykazování a poctivost ohledně svých omezení.
Berte „toto aktuálně neměříme“ jako odpověď, kterou možná budete muset
obhájit, nikoli jako soukromé selhání k ukrytí.

## Příklady

**Velký podnik.** Inženýrská organizace globální pojišťovny vyrostla na více
než šedesát scrumových týmů, každý s vlastním neformálním dashboardem, žádný
srovnatelný s jiným. Vedení nedokázalo odpovědět na základní otázku: která z
našich deseti strategických platformních investic skutečně přináší rychlejší
software. Řešením nebylo více metrik, ale méně a lepší: organizace definovala
sdílené jádro metrik DORA (téma 2.10) řízené rozhodnutími, všude počítané
stejně ze stejných dat pipeline, vyřadila čtyřicet týmových dashboardů a do dvou
čtvrtletí mohla konečně srovnávat investiční oblasti na společném základě.

**Státní správa.** Tým digitální služby národní daňové agentury byl požádán
kontrolním výborem, aby prokázal návratnost víceleté modernizace. Stávající
metriky týmu byly zcela interní a založené na aktivitě: dokončené story
pointy, uzavřené sprinty. Nic z toho neodpovídalo na skutečnou otázku výboru.
Tým místo toho postavil malou sadu metrik výsledků, medián času k vyřešení
daňového podání občana, míru přijetí digitálního kanálu a míru uniklých vad v
novém systému, a čtvrtletně je hlásil se zdokumentovanou metodikou. Otázky
výboru se posunuly od „dokažte, že pracujete“ k „jak to zopakujeme v další
agentuře“, což je výsledek, který má dobře zvolená sada metrik přinášet.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností záměrného měření je kvalita rozhodnutí. Organizace, která může s
důkazy říci „po platformní investici se náš lead time zlepšil o 30 %“, dokáže
tuto investici obhájit, zopakovat, co fungovalo, a zastavit, co ne. Organizace,
která se spoléhá na historky, nic z toho s jistotou nedokáže a každý rozpočtový
cyklus znovu vede tytéž spory, protože nikdo neukáže na číslo, kterému věří
obě strany.

Náklady měření nejsou dashboard. Je to průběžná disciplína: instrumentace,
udržování definic a pravidelné ořezávání, které toto téma doporučuje. Tyto
celkové náklady vlastnictví (TCO) jsou skutečné, ale skromné ve srovnání s
cenou alternativy, kterou je velká organizace přijímající mnohamilionová
technologická rozhodnutí na základě toho, kdo v místnosti argumentoval
nejpřesvědčivěji. Návratností programu metrik nejsou samotné metriky; jsou to
rozhodnutí, která se jejich zásluhou zlepšila.

## Antivzory a úskalí

- **Měření všeho, co nástroj exportuje:** mění dashboard v šum a zve k
  manipulaci na obrovské ploše bez odpovídající hodnoty pro rozhodování.
- **Metriky bez pojmenovaného rozhodnutí:** dekorace, která stojí úsilí na
  údržbu a nikomu neříká nic použitelného.
- **Tichý posun od diagnostického k hodnoticímu použití:** nejrychlejší
  způsob, jak zničit důvěru v číslo.
- **Brát metriku jako fakt, nikoli jako hypotézu:** zástupný ukazatel, který
  byl před dvěma lety správný, může být dnes špatný a nikdo to nekontroluje.
- **Zaměňovat absenci špatného čísla za přítomnost dobrého:** metrika, na
  kterou se nikdy nepodíváte, vám nemůže říci, že něco není v pořádku.
- **Budovat schopnost měřit dřív, než se rozhodne, o čem se bude rozhodovat:**
  instrumentace hledající otázku plýtvá skutečným inženýrským časem.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky, pokud vůbec existují, jsou ad hoc, osobní
  pro toho, kdo je vytvořil, a nikdo neumí říci, jaké rozhodnutí kterákoli z
  nich informuje.
- **Úroveň 2, Rozvoj:** Základní sada metrik existuje pro některé týmy, většinou
  převzatá z rámce nebo z výchozího nastavení nástroje, bez jasné vazby na
  rozhodnutí.
- **Úroveň 3, Standardizace:** Každá sledovaná metrika má zdokumentovaný účel a
  výslovné zařazení jako diagnostická nebo hodnoticí, důsledně uplatňované v
  celé organizaci.
- **Úroveň 4, Řízení:** Metriky se v pevném rytmu revidují vůči rozhodnutím,
  která informují; metriky, které si přestanou na sebe vydělávat, se vyřadí a
  celá sada se měří z hlediska nákladů i hodnoty.
- **Úroveň 5, Orchestrace:** Měření je živá schopnost: organizace pravidelně
  odhaluje vlastní slepá místa, ověřuje, zda její zástupné ukazatele stále
  sledují realitu, a samotný program metrik bere jako něco, co je třeba
  zlepšovat, nejen udržovat.

## Náměty k diskusi

1. Kterou metriku na našem dashboardu bychom dnes nejhůř obhajovali, kdybychom
   byli požádáni o zdůvodnění?
2. Jaké rozhodnutí jsme v posledním čtvrtletí udělali na základě metriky, a ne
   názoru?
3. Kde se v naší organizaci diagnostická metrika tiše stala hodnoticí?
4. Čeho se bojíme měřit a proč?
5. Kdyby náš program metrik zítra zmizel, která rozhodnutí by se zhoršila?

## Hlavní poznatky

- Měření slouží **rozhodnutím**, nikoli samo sobě; metrika bez připojeného
  rozhodnutí je dekorace.
- Držte **diagnostické** použití odděleně od **hodnoticího**, písemně, a
  hlídejte tichý posun mezi nimi.
- Berte každou metriku jako **hypotézu** o tom, co představuje, nikoli jako
  ustálený fakt, a v pravidelném rytmu se k této hypotéze vracejte.
- Mlčení, tedy rozhodnutí něco neměřit, je samo rozhodnutím s následky;
  slepá místa učiňte viditelnými, místo abyste je nechali neviditelná ze
  zvyku.
- Celkové náklady programu metrik jsou skutečné; výslovně je poměřujte s
  hodnotou rozhodnutí, kterou každá metrika poskytuje.

## Odkazy a další četba

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble a Gene Kim (výzkumný základ pro měření inženýrství založené na
  výsledcích).
- *How to Measure Anything*, Douglas W. Hubbard (obecný rámec pro
  kvantifikaci věcí, které se zdají neměřitelné).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (základní rozbor dysfunkcí, které může měření do organizace vnést).
- *Thinking, Fast and Slow*, Daniel Kahneman (kognitivní zkreslení, kvůli
  nimž je úsudek bez opory v měření nespolehlivou náhradou).
- Program Google DevOps Research and Assessment (DORA), [dora.dev](https://dora.dev/)
  (průběžný výzkum State of DevOps, z něhož tato kniha čerpá v celém textu).
