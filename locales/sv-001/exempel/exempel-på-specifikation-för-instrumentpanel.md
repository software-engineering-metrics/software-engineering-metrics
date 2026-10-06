# Exempel: specifikation för en instrumentpanel med leveransmätetal

En utarbetad specifikation för en instrumentpanel, enligt
[ämne 8.1, Att utforma en instrumentpanel för utvecklingsmätetal](../ämnen/08-01-att-designa-en-ingenjörsmätetalsinstrumentpanel.md). Poängen är formen: en namngiven målgrupp, ett litet
antal rutor, ärliga visualiseringsstandarder och en uttalad uppdateringscadens.

## Målgrupp

Utvecklingsledningen och plattformsteamet, granskas vid den tvåveckorsvisa leveransgranskningen. Inte avsedd för individuell prestationsbedömning.

## Rutor (i visningsordning)

1. **Driftsättningsfrekvens**, senaste 4 veckorna, per team. Linjediagram, veckovisa hinkar, axeln börjar på noll.
2. **Ledtid för ändringar**, median och 90:e percentilen, senaste 4 veckorna. Stapeldiagram med båda serierna visade, inte bara medianen.
3. **Andel misslyckade ändringar**, senaste 4 veckorna, med teamets överenskomna definition av "misslyckande" länkad från rutan.
4. **Återhämtningstid efter en misslyckad driftsättning**, median, senaste 4 veckorna.
5. **Återstående felbudget**, innevarande kvartal, per tjänst, som procentandel.

## Regler för visualisering

- Varje trenddiagram visar minst åtta datapunkter, aldrig en enda ögonblicksbild.
- Axlar börjar på noll om inte ett uttalat undantag dokumenteras på rutan.
- Driftsättningar, incidenter och helgdagar annoteras på tidslinjen så att läsare kan skilja en verklig förskjutning från brus.
- Inga dubbla axlar, inga 3D-effekter, inga handplockade datumintervall.

## Uppdateringscadens

Rutor som matas från pipelinen (driftsättningsfrekvens, ledtid) uppdateras varje timme. Rutor som matas från incidenter (andel misslyckade ändringar, återhämtningstid)
uppdateras när en efteranalys stängs. Instrumentpanelen visar sin egen tidpunkt för senaste uppdatering.

## Vad den här instrumentpanelen medvetet utesluter

Antal incheckningar per person, antal pull requests per person och kodrader. Det är aktivitetsmätetal med en välbelagd historia av att manipuleras
och av att mäta ansträngning snarare än utfall (ämne 3.4).
