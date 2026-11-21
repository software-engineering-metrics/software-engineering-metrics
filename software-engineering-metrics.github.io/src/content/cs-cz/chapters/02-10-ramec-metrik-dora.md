# 2.10 Rámec metrik DORA

## Přehled a motivace

**[Metriky DORA](https://dora.dev/guides/dora-metrics/)** pocházejí z programu
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment,
víceletého výzkumného úsilí, později publikovaného jako kniha *Accelerate* od
Nicole Forsgren, Jez Humble a Gene Kim, které zkoumalo desetitisíce inženýrských
profesionálů, aby zjistilo, které dodací praktiky korelují s výkonem organizace.
Výsledkem byly čtyři metriky spárované po dvou: frekvence nasazení a lead time
změn měří rychlost; míra selhání změn a doba obnovy po selhaném nasazení, často
zkracovaná na střední dobu obnovy (MTTR), měří stabilitu. Výzkumné zjištění,
které z rámce učinilo významný, bylo, že elitní výkonné týmy byly rychlé a
stabilní zároveň, což převrátilo předpoklad, že rychlost a bezpečnost se vzájemně
vyměňují, a toto zjištění je dosud nejjasnějším rozpracovaným příkladem principu
párování pojistek z tématu 1.2, který tato kniha má: motivovaná rychlostní
metrika spárovaná s pojistkou stability je to, co nejvýkonnější organizace
skutečně dělají.

Tato kniha pokrývá DORA v této části záměrně jako poslední, ne jako organizační
rámec části. Toto zařazení není odmítnutím výzkumu, který zůstává skutečně
přísný a stojí za použití. Odráží konkrétní, reálné omezení: DORA měří, jak
rychle a jak bezpečně se pipeline pohybuje, ale mlčí o tom, co jí protéká. Tým
může vykazovat vynikající čísla DORA, zatímco jeho skutečný výstup tiše sklouzl k
předělávkám vad nebo vyhladověl technický dluh a bezpečnostní práci o kapacitu,
což je vzorec, který Flow Framework z témat 2.1 až 2.4 je postaven zviditelnit a
DORA ho vidět nemůže. Používejte DORA tak, jak ho toto téma prezentuje: jako dobře
ověřenou, užší referenční míru mechaniky pipeline, ne jako celý obraz zdraví
dodávání.

U velkých týmů je zbývající, skutečnou hodnotou DORA srovnatelnost. Metrika
počítaná konzistentně z dat pipeline a incidentů umožňuje organizaci srovnávat
dodací schopnost napříč mnoha týmy pracujícími v odlišných doménách bez problému
jablek a hrušek, který sužuje většinu mezitýmových srovnání. Velké podniky ji
stále používají k prioritizaci platformních investic; státní správa ji stále
používá k prokázání, s důkazy, že modernizační program měřitelně zlepšil
mechaniku dodávání. Berte to jako řádnou, ohraničenou úlohu DORA a používejte
témata Flow Frameworku dříve v této části pro širší otázku, zda se vůbec dodávají
správné věci.

## Klíčové zásady

- **DORA měří pipeline, ne hodnotu, která jí protéká.** Téma 2.1 tuto mezeru
  pojmenovává přímo; k tomu, co DORA nevidí, použijte rozložení toku (téma 2.3).
- **Rychlost a stabilita se měří společně, nikdy zvlášť.** Dashboard založený na
  DORA bez obou polovin rámec ve skutečnosti nepoužívá.
- **Konzistence definice záleží víc než surové číslo.** Tým, který se na
  konzistentně definované metrice posune z „střední“ na „vysokou“ výkonnost, je
  skutečným signálem; srovnání dvou týmů počítaných odlišně není.
- **DORA měří systém, ne jednotlivce.** Aplikace těchto metrik na jednotlivé
  inženýry ničí statistický základ rámce a zve právě k té manipulaci, před níž
  téma 1.2 varuje.
- **Všechny čtyři metriky jsou zástupné ukazatele, ne cíle.** Korelují s výkonem
  organizace; honba za samotným číslem, odtržená od skutečného zlepšení
  dodávání, maří smysl rámce.

## Doporučení

### Instrumentujte frekvenci nasazení z pipeline a počítejte jen produkční vydání

**Frekvence nasazení** měří, jak často tým úspěšně vydává do produkce. Počítejte
jen úspěšná produkční nasazení, instrumentovaná automaticky z dat pipeline
CI/CD, nikdy vlastním hlášením. Hlídejte konkrétně manipulaci záměnou, rozdělení
jedné smysluplné změny na několik triviálních nasazení čistě kvůli nafouknutí
počtu, a to sledováním velikosti nasazení vedle frekvence: klesající průměrná
velikost vedle rostoucího počtu je nejjasnějším znamením, že se to děje.

### Instrumentujte lead time změn od prvního commitu po produkci

**Lead time změn** měří čas od prvního commitu změny kódu po její úspěšné
nasazení do produkce. Vykazujte medián i vysoký percentil, nejen průměr, podle
pokynů tématu 1.6 pro zešikmená časová data, a hlídejte definiční drift na
kterémkoli konci, který číslu lichotí bez skutečného zlepšení.

### Definujte míru selhání změn písemně, než budete srovnávat napříč týmy

**Míra selhání změn** měří procento nasazení, která způsobí selhání vyžadující
nápravu, vrácení změny, hotfix nebo incident. Je to nejhůře konzistentně
definovatelná z těch čtyř, protože „selhání“ není samozřejmě objektivní. Před
srovnáváním týmů se dohodněte na písemné definici; bez ní může zdánlivě férové
srovnání silně zavádět. Hlídejte podezřele rychlé zlepšení bez podkladové změny
procesu, nejjasnější znamení manipulace definicí, nikoli skutečného pokroku.

### Měřte dobu obnovy od detekce, ne od události nasazení

**Doba obnovy po selhaném nasazení** měří, jak dlouho trvá obnovit službu poté,
co nasazení způsobí selhání. Spusťte hodiny při detekci, ne při samotné události
nasazení, aby číslo odráželo skutečné zpoždění obnovy, nikoli mezeru v
monitorování. Investujte konkrétně do schopnosti automatického vrácení změny,
nejčastější páky ke skutečnému zlepšení této metriky, místo předčasného
prohlášení incidentu za vyřešený.

### K diagnóze, proč se číslo pohnulo, používejte metriky toku, ne DORA

Když se metrika DORA posune, samotná čtyři čísla málokdy vysvětlí proč.
Používejte rozklad cycle time (téma 2.6), zatížení toku (téma 2.4) a rozložení
toku (téma 2.3) jako diagnostickou vrstvu pod souhrnnými čísly DORA a nikdy
nepoužívejte metriku DORA v hodnocení výkonu jednotlivce, což je nejškodlivější
zneužití, kterému je tento rámec vystaven.

## Kompromisy: výhody a nevýhody

| Přístup | Výhody | Nevýhody |
| --- | --- | --- |
| Plný rámec DORA, všechny čtyři metriky spárované | Výzkumem ověřený, odolává manipulaci párováním, umožňuje férové srovnání mezi týmy | Mlčí o tom, jaký druh hodnoty se dodává; k tomuto obrazu potřebuje po boku Flow Framework |
| DORA jako jediná organizační sada metrik této části | Jednoduché, většině vedoucích inženýrství známé | Zcela míjí otázku mixu hodnoty, důvod, proč ho tato kniha zde odsouvá |
| DORA spolu s Flow Frameworkem | Viditelná mechanika pipeline i mix hodnoty | Vyžaduje udržovat dvě slovní zásoby metrik místo jedné |
| DORA aplikované na úrovni jednotlivce | Některým manažerům působí přímo použitelně | Ničí statistickou platnost rámce; silná expozice Goodhartovu zákonu |

Hlavním napětím je **mechanická přísnost versus obchodní čitelnost**. Čtyři
metriky DORA jsou přesně definované a výzkumem ověřené, což je činí vynikajícími k
porovnání výkonu pipeline mezi týmy, ale tatáž přesnost je úzce vymezena na samotnou
pipeline a neříká nic o tom, zda jí protéká správná práce. Řešte to tak, že DORA
ponecháte jako referenční vrstvu zdraví pipeline, tedy řádné místo tématu 2.10 ve
struktuře této knihy, a témata Flow Frameworku dříve v této části použijete pro
otázku mixu hodnoty zaměřenou na byznys, místo abyste se pokoušeli přimět DORA
odpovídat na otázku, k níž nebylo nikdy navrženo.

## Otázky k diskusi s vaším týmem

1. **Instrumentujeme všechny čtyři metriky DORA z pipeline, nebo jsou některé z
   nich odhady vlastním hlášením?** Rámec postavený na objektivním, výzkumem
   ověřeném měření ztrácí velkou část hodnoty ve chvíli, kdy se číslo stane
   nejlepším odhadem. Zkontrolujte skutečný zdroj dat každé metriky (téma 1.5).

2. **Sdílejí všechny týmy, které srovnáváme pomocí metrik DORA, stejné definice
   nasazení, změny a selhání?** Srovnání mezi týmy používajícími různé definice
   není skutečné srovnání a může vést k nespravedlivým soudům o relativním výkonu.

3. **Použil někdo v naší organizaci metriku DORA při hodnocení výkonu
   jednotlivce, formálně nebo neformálně?** Je to nejškodlivější zneužití rámce a
   často se děje tiše. Zeptejte se přímo a buďte připraveni na nepříjemnou, ale
   nezbytnou odpověď.

4. **Mohla by naše čísla DORA být vynikající, zatímco naše rozložení toku
   (téma 2.3) tiše sklouzlo k předělávkám nebo pryč od funkcí?** Je to přesně ta
   mezera, kterou samotné DORA vidět nemůže. Vytáhněte obě sady čísel společně a
   ověřte, zda vyprávějí konzistentní příběh.

5. **Když se některá z našich metrik DORA pohne, máme diagnostiku z metrik toku k
   vysvětlení proč?** Samotné číslo DORA říká, že se něco změnilo, ne co. Ověřte,
   zda vaše týmy dokážou odpovědět na „proč se tento měsíc zvýšil lead time“
   daty, nebo jen spekulací.

6. **Jak by se naše čtyři čísla DORA změnila, kdybychom se každým záměrně pokusili
   manipulovat, a všimli bychom si?** Projděte frekvenci nasazení, lead time,
   míru selhání změn a dobu obnovy jednu po druhé, což je praktická aplikace
   základní disciplíny tématu 1.2 na tento konkrétní rámec.

## Pohled podle sektorů

**Startup.** Rychlostní metriky DORA obvykle přicházejí přirozeně malému týmu,
který už nasazuje často; těžší disciplínou je instrumentovat míru selhání změn a
dobu obnovy poctivě, místo abyste předpokládali stabilitu, protože se zatím nic
vážně nerozbilo. Spárovat DORA s alespoň neformálním rozdělením položek toku
(téma 2.2) brzy předchází budování falešného pocitu zdraví dodávání jen kolem
rychlosti pipeline.

**Malá firma.** Většina moderních platforem CI/CD a správy verzí exportuje data o
frekvenci nasazení a lead time s minimálním nastavením; propojení nasazení s
incidenty pro míru selhání změn obvykle vyžaduje víc ruční práce. Začněte dvěma
rychlostními metrikami a sledování stability přidejte, jakmile existuje
neformální záznam incidentů, na který se lze navázat.

**Velký podnik.** Největší zbývající hodnotou DORA v tomto měřítku je férové,
konzistentní srovnání mezi týmy pro rozhodnutí o platformních investicích.
Sjednoťte definice v celé organizaci (téma 1.4), automatizujte instrumentaci
centrálně a spárujte každou zprávu DORA s pohledem na rozložení toku, aby vedení
vidělo rychlost pipeline i mix hodnoty společně, ne jedno bez druhého.

**Státní správa.** Metriky DORA stále dávají modernizačnímu programu obhajitelný,
výzkumem podložený způsob, jak kontrolním orgánům prokázat zlepšení mechaniky
dodávání. Vykazujte všechny čtyři metriky společně, nikdy nevybírejte jen
lichotivou polovinu, a spárujte je s rozložením toku, aby zpráva odpovídala i na
těžší, důležitější otázku, co rychlejší pipeline skutečně dodává.

## Příklady

**Velký podnik.** Modernizační program platformy velké telekomunikační firmy
konzistentně instrumentoval všechny čtyři metriky DORA napříč čtyřiceti
produktovými týmy a ukázal skutečný posun z pásem slabého výkonu do pásem
vysokého výkonu za osmnáct měsíců, frekvence nasazení zhruba desetinásobná, lead
time z týdnů na dny, míra selhání změn beze změny. Člen správní rady při
posuzování prezentace položil otázku, na kterou samotná čísla DORA nemohla
odpovědět: kolik z toho rychlejšího dodávání byla nová zákaznická hodnota a
kolik předělávka. Inženýrská organizace neměla odpověď, dokud následující čtvrtletí
nepřijala klasifikaci položek toku, která ukázala, že práce na funkcích ve
skutečnosti klesla jako podíl celkového výstupu, i když se rychlostní čísla DORA
zlepšovala, což zjištění změnilo priority programu na další rok.

**Státní správa.** Úřad pro modernizaci IT jedné státní vlády přijal metriky DORA
jako smluvní podmínku k porovnání dodací schopnosti několika konkurenčních týmů
dodavatelů, což je účinné využití srovnatelnosti rámce. Vysoká frekvence nasazení
jednoho dodavatele se po zavedení povinné míry selhání změn vedle ní ukázala jako
korelující s mírou selhání téměř třikrát vyšší než u konkurence, informace, která
přímo ovlivnila rozhodnutí úřadu o prodloužení smlouvy. Úřad později přidal do
týchž smluv požadavek na rozložení toku, když zjistil, že dodavatel s nejlepšími
čísly DORA byl také ten, který věnoval nejmenší podíl kapacity práci na nápravě
bezpečnosti, již smlouva výslovně vyžadovala.

## Obchodní odůvodnění: motivace, ROI a TCO

Návratností dobrého zavedení DORA v rámci jeho řádného rozsahu je obhajitelná,
důkazy podložená odpověď na otázku „je naše dodací
pipeline rychlejší a bezpečnější“, která zůstává jednou z lépe zvládnutelných otázek v inženýrství, na
něž lze odpovědět s jistotou. Tato odpověď zdůvodňuje investice do platformy a
nástrojů se skutečnými čísly a umožňuje vedení srovnávat konkurující investice na
férovém, konzistentním základě, přesně jako vždy.

Celkové náklady vlastnictví (TCO) jsou integrační práce propojující události
nasazení se záznamy incidentů pro míru selhání změn a dobu obnovy, netriviální
napříč velkým, heterogenním nástrojovým prostředím. Dodatečné náklady na spárování
DORA s tématy Flow Frameworku dříve v této části jsou poměrně malé, protože
klasifikace položek toku je konvence vykazování vrstvená na existující práci, ne
paralelní měřicí systém, a návratnost, zachycení právě slepé skvrny v mixu hodnoty,
kterou ilustruje výše uvedený příklad telekomunikační firmy, tuto skromnou
dodatečnou investici s rezervou stojí.

## Antivzory a úskalí

- **Brát DORA jako celý obraz zdraví dodávání:** způsob manipulace, proti
  kterému je zařazení tohoto tématu navrženo. Organizace může prezentovat skutečně
  vynikající čísla DORA, rychlá, častá a stabilní nasazení, zatímco její skutečně
  dodaná hodnota tiše sklouzla k předělávkám nebo pryč od funkcí, a čtyři
  metriky DORA samotné tento posun nikdy neodhalí, protože nikdy nebyly navrženy
  ho měřit. Pojistkou je spárovat každou zprávu DORA s rozložením toku (téma
  2.3), aby rychlá, stabilní pipeline dodávající špatný mix práce byla viditelná,
  místo aby byla zaměněna za skutečné zdraví dodávání.
- **Vykazovat jen rychlostní polovinu DORA:** maří ústřední zjištění rámce, že
  rychlost a stabilita se u vysoce výkonných týmů pohybují společně.
- **Používat metriky DORA v hodnocení výkonu jednotlivců:** ničí statistickou
  platnost rámce a zve k silné manipulaci.
- **Srovnávat týmy s nekonzistentními definicemi:** vyrábí srovnání, která
  vypadají férově, ale nejsou.
- **Čísla DORA z vlastního hlášení místo instrumentovaných z pipeline:** vnáší
  právě to zkreslení, které rámec měl odstranit.
- **Brát DORA jako diagnostiku místo souhrnu:** nechává tým neschopný vysvětlit,
  proč se číslo pohnulo, bez vrstvy metrik toku pod ním.

## Model zralosti

- **Úroveň 1, Zahájení:** Metriky DORA, pokud se vůbec sledují, jsou z vlastního
  hlášení, nekonzistentně definované a nikdy nespárované s daty o toku.
- **Úroveň 2, Rozvoj:** Některé týmy instrumentují DORA z pipeline, ale definice
  se liší a neexistuje protějšek v rozložení toku, proti kterému by se dalo
  kontrolovat.
- **Úroveň 3, Standardizace:** Všechny čtyři metriky DORA jsou instrumentovány
  konzistentně z dat pipeline a incidentů, se sdílenými definicemi, a běžně se
  ukazují vedle rozložení toku.
- **Úroveň 4, Řízení:** DORA a metriky toku se na každé úrovni organizace
  revidují společně jako standardní dvojice a DORA se nikdy nepoužívá k
  hodnocení jednotlivců.
- **Úroveň 5, Orchestrace:** Organizace dokáže ukázat konkrétní případy, kdy
  rozložení toku zachytilo problém s mixem hodnoty, který vynikající čísla DORA
  samotná zakrývala, a oba rámce záměrně používá pro odlišné otázky, na které
  každý odpovídá.

## Náměty k diskusi

1. Kam nás naše čtyři metriky DORA dnes poctivě řadí na spektru výkonnostních
   pásem?
2. Mohla by naše čísla DORA vypadat vynikajícím způsobem, zatímco naše rozložení toku
   tiše sklouzlo? Zkontrolovali jsme to někdy?
3. Použil někdy někdo číslo DORA k posouzení jednotlivce, i neformálně?
4. Kdyby konkurent zveřejnil svá čísla DORA, srovnávala by se ta naše příznivě a
   řekla by nám takové srovnání skutečně, kdo dodává víc skutečné hodnoty?

## Hlavní poznatky

- Čtyři metriky DORA, **frekvence nasazení, lead time, míra selhání změn a doba
  obnovy**, svým návrhem párují rychlost se stabilitou a zůstávají skutečně
  výzkumem ověřené.
- Tato kniha řadí DORA **na konec této části**, protože měří pipeline, ne hodnotu,
  která jí protéká; spárujte ho s rozložením toku (téma 2.3) pro úplnější obraz.
- Ústředním způsobem manipulace tohoto tématu je **zaměnit vynikající čísla DORA
  za úplné zdraví dodávání**; pojistkou je vždy vykazovat DORA vedle rozložení
  toku.
- **Nikdy nepoužívejte metriky DORA v hodnocení výkonu jednotlivců**; platnost
  rámce závisí na měření na úrovni systému, ne jednotlivce.
- Používejte **metriky toku jako diagnostickou vrstvu** pod souhrnnými čísly
  DORA, když se některé z nich pohne.

## Odkazy a další četba

- Forsgren, Nicole, Jez Humble a Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr a George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois a John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
