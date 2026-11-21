# Příklad: charta metrik pro tým platební platformy

Propracovaný příklad charty metrik, jednostránkového dokumentu popsaného v
[tématu 1.4, Správa a vlastnictví metrik](../temata/01-04-sprava-a-vlastnictvi-metrik.md).
Jde o tvar: uvedený účel, výslovný necíl, jmenovaní vlastníci a rytmus revizí.
Takto krátká charta je určena k přečtení, ne k založení do šuplíku.

- **Tým:** Platební platforma
- **Vlastník:** Manažer platformního inženýrství
- **Revize:** Čtvrtletně, na platformní revizi

## Účel

Tato charta upravuje metriky, které tým platební platformy sleduje o vlastním
doručování a spolehlivosti. Existuje proto, aby každý uvnitř týmu i mimo něj viděl,
co se měří, proč a k čemu to neslouží.

## Co sledujeme

| Metrika | Zdroj pravdy | Vlastník |
| --- | --- | --- |
| Frekvence nasazení | CI/CD pipeline | Vedoucí platformy |
| Průběžná doba změn | Git a nasazovací pipeline | Vedoucí platformy |
| Míra selhání změn | Nástroj pro incidenty, označený podle nasazení | Vedoucí pohotovosti |
| Doba obnovy po selhaném nasazení | Nástroj pro incidenty | Vedoucí pohotovosti |
| Latence API P99 (SLI) | Platforma pozorovatelnosti | Vedoucí SRE |
| Čerpání rozpočtu chyb | Platforma pozorovatelnosti | Vedoucí SRE |

## Necíle

Tyto metriky se nikdy, jednotlivě ani v kombinaci, nepoužívají k řazení
inženýrů, k hodnocení výkonu ani k porovnávání tohoto týmu s plánem jiného týmu,
aniž by se zároveň porovnával rozsah, obsazení a zralost systému. Jakékoli
použití mimo uvedený účel vyžaduje souhlas ředitele inženýrství a samotného týmu.

## Pojistky

Každá výše uvedená metrika, která nese pobídku, je spárována s pojistkou.
Průběžná doba změn se sleduje vedle míry selhání změn, aby tým nemohl zlepšit
číslo rychlosti tím, že nasazuje rizikovější změny. Frekvence nasazení se ze
stejného důvodu sleduje vedle čerpání rozpočtu chyb.

## Rytmus revizí

Tým charty reviduje každé čtvrtletí. Metrika, která dvě po sobě jdoucí čtvrtletí
nezměnila žádné rozhodnutí, je kandidátem na vyřazení.
