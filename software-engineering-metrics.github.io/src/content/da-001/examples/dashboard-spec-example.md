# Eksempel: dashboardspecifikation for et dashboard med leveringsmetrikker

En gennemarbejdet dashboardspecifikation efter [emne 8.1, Design af et metrikdashboard for ingeniører](../chapters/08-01-design-af-et-ingeniørmetrikdashboard.md). Pointen er formen: en navngiven målgruppe, et lille antal fliser, en ærlig visualiseringsstandard og en angivet opdateringsrytme.

## Målgruppe

Ingeniørledelsen og platformsteamet, gennemgået ved leveringsgennemgangen hver anden uge. Ikke beregnet til vurdering af individuel præstation.

## Fliser (i visningsrækkefølge)

1. **Udrulningsfrekvens**, seneste 4 uger, pr. team. Kurvediagram, ugentlige intervaller, aksen starter ved nul.
2. **Gennemløbstid for ændringer**, median og 90. percentil, seneste 4 uger. Søjlediagram, hvor begge serier vises, ikke kun medianen.
3. **Andel af ændringer, der fejler**, seneste 4 uger, med teamets aftalte definition af "fejl" linket fra flisen.
4. **Genoprettelsestid efter mislykket udrulning**, median, seneste 4 uger.
5. **Resterende fejlbudget**, indeværende kvartal, pr. tjeneste, som en procentdel.

## Visualiseringsregler

- Hvert tendensdiagram viser mindst otte datapunkter, aldrig et enkelt øjebliksbillede.
- Akser starter ved nul, medmindre en angivet undtagelse er dokumenteret på flisen.
- Udrulninger, hændelser og helligdage annoteres på tidslinjen, så en læser kan skelne et reelt skift fra støj.
- Ingen dobbeltakser, ingen 3D-effekter, ingen udvalgte datointervaller.

## Opdateringsrytme

Flisen med data fra pipelinen (udrulningsfrekvens, gennemløbstid) opdateres hver time. Fliser med data fra hændelser (andel af ændringer, der fejler, genoprettelsestid) opdateres, når en post mortem lukkes. Dashboardet angiver selv tidspunktet for seneste opdatering.

## Hvad dette dashboard bevidst udelader

Individuelle commit-antal, individuelle antal pull requests og kodelinjer. Det er aktivitetsmetrikker med en veldokumenteret historie for at blive manipuleret og for at måle indsats frem for resultat (emne 3.4).
