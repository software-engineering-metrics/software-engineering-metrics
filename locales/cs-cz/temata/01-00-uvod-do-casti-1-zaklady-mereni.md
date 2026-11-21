# 1.0 Úvod do části 1: Základy měření

Dříve než tato kniha pojmenuje jedinou metriku, musí odpovědět na těžší
otázku: k čemu vlastně měření *slouží*? Každý tým, který kdy postavil
dashboard, nakonec také sledoval, jak se nějaké číslo zlepšuje, zatímco věc,
kterou mělo představovat, se zhoršovala. Není to selhání nástrojů. Je to
předvídatelný důsledek toho, že se přeskočily základy, které tato část
probírá: proč vůbec měříte, co se stane s metrikou, jakmile lidé vědí, že je
sledována, jak dát výsledkům větší váhu než aktivitě, kdo vlastní číslo a jeho
definici, odkud se data skutečně berou a jak číst zašuměný signál, aniž byste
oklamali sami sebe.

U velkých týmů už tyto základy nejsou volitelné. Jeden tým si vystačí s
příležitostným číslem, na které se manažer jednou týdně podívá. Organizace se
stovkami inženýrů, desítkami dashboardů a vedením, které podává zprávy
výš, si to dovolit nemůže. V takovém měřítku nevlastněná nebo špatně
definovaná metrika nezavádí jen jeden tým, ale všechny, kdo číslu dál po
proudu důvěřují, aniž by si ověřili, jak vzniklo. A když se chování už
přizpůsobilo tomu, aby s ním šlo manipulovat, je drahé to vracet zpět.

Velké podniky a státní správa to pociťují nejvíc, protože jejich metriky často
nesou důsledky daleko za týmem, který je vytváří: rozpočtová rozhodnutí,
veřejné zprávy o výkonu, auditní zjištění a smlouvy s dodavateli. Metrika,
která vypadá jako vnitřní pohodlí inženýrů, se může nenápadně stát klíčovým,
nikým nezpochybňovaným vstupem pro rozhodnutí lidí, kteří nikdy neviděli
pipeline, jež ji vyrobila. Správné základy jsou to, co tuto váhu činí
unesitelnou.

## Témata v této části

- **1.1 Proč měřit softwarové inženýrství:** Argumenty pro měření jako
  takové, čeho má dosáhnout a rozdíl mezi měřením za účelem učení a měřením za
  účelem posuzování.
- **1.2 Goodhartův zákon a psychologie metrik:** Jediná myšlenka, která řídí
  každé další téma této knihy: míra, která se stane cílem, přestává být dobrou
  mírou, a psychologické mechanismy, které z manipulace dělají téměř
  nevyhnutelnost, jakmile lidé vědí, že jsou sledováni.
- **1.3 Výsledky před výstupy: co měřit:** Jak vychýlit sadu metrik směrem k
  výsledkům, nikoli k aktivitě, pomocí klasického rozlišení vstup, výstup,
  výsledek a vzoru Polárky.
- **1.4 Správa a vlastnictví metrik:** Kdo rozhoduje o tom, co se měří, kdo
  vlastní definici a jak charta metrik brání rostoucímu dashboardu, aby se
  proměnil v nikým nespravovaný změtenec.
- **1.5 Zdroje dat a instrumentace:** Odkud se inženýrské metriky skutečně
  berou, instrumentace versus vlastní hlášení a problémy s kvalitou dat, které
  nenápadně znehodnotí dashboard dřív, než si toho někdo všimne.
- **1.6 Statistická gramotnost pro inženýrské metriky:** Minimální statistický
  úsudek, který tým potřebuje, aby četl metriku poctivě: percentily versus
  průměry, velikost vzorku, regrese k průměru a zavádějící proměnné.

## Jak spolu témata souvisejí

Těchto šest témat na sebe navazuje v pevném pořadí. Téma 1.1 se ptá, proč
vůbec měřit, což je důležité, protože tým, který si na to neodpověděl, bude
sbírat čísla, podle kterých nikdo nejedná. Téma 1.2 je osa, kolem které se
točí zbytek knihy: jakmile přijmete, že jakákoli míra se může stát cílem a
může se s ní manipulovat, doporučení všech dalších témat vycházejí z návrhu
proti tomuto riziku. Téma 1.3 mění toto varování v kladné pravidlo: vážit
směrem k výsledkům, protože právě ty se nejhůře levně zmanipulují. Téma 1.4
činí správu konkrétní, téma 1.5 činí konkrétními data a téma 1.6 vám dává
statistický úsudek, abyste se nenechali oklamat šumem, i když je správa a
instrumentace v pořádku.

Všechno další na této části závisí. Metriky toku a metriky DORA v části 2 a
rámec SPACE v části 3 jsou ve skutečnosti rozpracované příklady zásad vážení
výsledků a párování pojistek, které stanoví témata 1.2 a 1.3. Doporučení k
návrhu dashboardů v tématu 8.1 předpokládá model správy z tématu 1.4. A model
zralosti, který uzavírá každé téma této knihy, je pod svými pěti úrovněmi
modelem zralosti pro přesně tu disciplínu, kterou tato část zavádí: měřit tak,
jak to myslíte vážně, a kontrolovat vlastní práci.
