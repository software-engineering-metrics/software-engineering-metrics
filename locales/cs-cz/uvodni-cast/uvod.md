# Úvod

Tato kniha je praktickým průvodcem tím, jak dobře měřit [softwarové inženýrství](https://en.wikipedia.org/wiki/Software_engineering),
pro týmy od pětičlenného startupu po podnik s tisíci inženýrů nebo státní
úřad, který podává zprávy podle zákonného rámce výkonnosti. Existuje proto, že
většina rad o metrikách je buď shrnutí rámce bez provozních detailů, nebo
seznam funkcí nástroje od dodavatele. Tato kniha se snaží nebýt ani jedním:
má jasný názor na to, co měřit, výslovně říká, jak se která metrika zneužívá,
a je praktická v tom, jak vést program metrik, kterému tým důvěřuje a nebojí
se ho.

## Pro koho to je

Primárním publikem jsou lidé, kteří rozhodují, co organizace měří: vedoucí
inženýrství, staff a principal inženýři, platformní týmy a týmy DevOps
a programoví a produktoví manažeři. Sekundárním publikem je každý inženýr,
který chce pochopit úvahy za dashboardem, na jehož číslo má působit, a jak
zpochybnit metriku, která přestala plnit svůj účel. Nemusíte ji číst od
začátku do konce. Každé téma stojí samo o sobě, nejdřív uvede zásady
a končí praktickými poznatky, modelem zralosti a odkazy.

## Jak je kniha uspořádána

Kniha se dělí na **části** (celá čísla) a **témata** (desetinná čísla). Téma
**N.0** uvádí každou část a vysvětluje, jak spolu její témata souvisejí; témata
**N.1, N.2, …** probírají látku do hloubky.

- **Část 1, Základy měření:** proč vůbec měřit, Goodhartův zákon a psychologie
  manipulace, výsledky před výstupy, správa a vlastnictví, zdroje dat
  a statistická gramotnost, kterou potřebuje každý program metrik.
- **Část 2, Metriky toku:** Flow Framework, jeho položky toku a pět metrik
  toku, cycle time, teorie front, klasické metriky hodnotového proudu podle
  Lean, metriky pull requestů a revizí kódu a rámec DORA jako referenční téma.
- **Část 3, Zkušenost vývojářů a rámec SPACE:** rámec SPACE a jeho pět
  dimenzí a jak vést průzkum zkušenosti vývojářů, aby se z něj nestala soutěž
  o popularitu.
- **Část 4, Metriky kódu a kvality:** složitost, pokrytí a účinnost testů,
  změnovost a hotspoty, statická analýza, technický dluh a dokumentace.
- **Část 5, Produktové a obchodní metriky:** uniklé vady, přijetí funkcí,
  zákaznické a obchodní výsledky, jednotková ekonomika a návratnost investic.
- **Část 6, Metriky spolehlivosti, provozu a bezpečnosti:** SLI, SLO a rozpočty
  chyb, metriky incidentů, pohotovost a kapacita a metriky bezpečnosti
  a zranitelností.
- **Část 7, Metriky ve věku umělé inteligence:** zlom v paradigmatu generativní
  umělé inteligence, jak měřit vývoj s její podporou, riziko inflace metrik
  a proč se telemetrie výsledků stává Polárkou, když výstup zlevňuje.
- **Část 8, Budování programu metrik:** návrh dashboardu, postavit, nebo koupit,
  zavádění metrik bez pěstování strachu, model zralosti a postupná adopční
  cesta.
- **Část 9, Přílohy:** slovníček, přehled definic a vzorců metrik, kontrolní
  seznamy, šablony, sebehodnocení zralosti, odkazy a rejstřík.

## Vodicí zásady

Osm zásad tvoří páteř knihy:

1. **Míra, která se stane cílem, přestává být dobrou mírou.** Navrhujte proti
   Goodhartovu zákonu od začátku, ne až poté, co se zkreslení objeví.
2. **Výsledky před výstupy před aktivitou.** Každou sadu metrik vychylte
   k tomu, co se změnilo pro zákazníka nebo pro byznys, ne k tomu, co tým
   vyprodukoval nebo jak byl zaneprázdněn.
3. **Každá metrika s pobídkou potřebuje pojistku.** Dvojice rychlost s kvalitou,
   propustnost se stabilitou, a nikdy nehoňte jedno číslo osamoceně.
4. **Měřte systémy, ne lidi.** Metrika, která osobně svaluje vinu, ničí důvěru
   a zve k manipulaci; metrika, která odhalí omezení systému, zve ke zlepšení.
5. **Kde to jde, dávejte přednost instrumentaci před vlastním hlášením, a kde
   ne, vlastnímu hlášení.** Počty nasazení pocházejí z pipeline; spokojenost
   zjistíte tím, že se zeptáte.
6. **Metrika si své místo zaslouží, nebo se vyřadí.** Každá dlaždice na
   dashboardu stojí pozornost. Prořezávejte záměrně.
7. **Definice jsou důležitější než dashboardy.** Dva týmy, které počítají
   „lead time“ různě, stráví víc času hádkou o číslo než jednáním podle něj.
8. **Generativní AI je důvod znovu prozkoumat, ne jen znovu nastavit výchozí
   hodnoty.** Když výstup zlevní, metriky postavené na objemu výstupu potřebují
   nové pojistky, ne jen nové cíle.

## Průřezová témata

[Goodhartův zákon](https://en.wikipedia.org/wiki/Goodhart%27s_law) je jediné
téma, které prochází každou částí této knihy, nejen tématem 1.2. Každé téma
o rodině metrik říká, jak se metrika zneužívá a jaká pojistka to zachytí.
Povinnosti reportingu ve státní správě a ve velkých podnicích, kde může mít
metrika zákonnou nebo smluvní váhu, se berou jako vstupy návrhu v celé knize,
ne jako dodatek omezený na jedno téma.

## Jak ji používat

Zavádějte postupně; nenasazujte dashboard velkým třeskem na tým, který žádný
nikdy neměl. Začněte tam, kde bolí nejvíc, pomocí modelu zralosti v každém
tématu se poctivě zařaďte a nechte adopční cestu (téma 8.5) seřadit práci.
Cílem není zeď grafů. Cílem je organizace, která umí s důkazy říct, zda to, co
dělá, funguje, a která svým číslům věří natolik, aby podle nich jednala.
