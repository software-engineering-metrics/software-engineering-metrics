# Voorbeeld: dashboardspecificatie voor een dashboard met leveringsmetrieken

Een uitgewerkte dashboardspecificatie, volgens
[onderwerp 8.1, Een engineeringmetriekendashboard ontwerpen](../chapters/08-01-een-ingenieursmetrieken-dashboard-ontwerpen.md). Waar het om gaat is de vorm: een benoemd publiek, een klein
aantal tegels, eerlijke visualisatienormen en een uitgesproken verversingscadans.

## Publiek

Engineeringleiderschap en het platformteam, beoordeeld tijdens de tweewekelijkse leveringsreview. Niet bedoeld voor individuele prestatiebeoordeling.

## Tegels (in weergavevolgorde)

1. **Deployfrequentie**, afgelopen 4 weken, per team. Lijndiagram, wekelijkse emmers, as begint bij nul.
2. **Doorlooptijd voor wijzigingen**, mediaan en 90e percentiel, afgelopen 4 weken. Staafdiagram met beide reeksen getoond, niet alleen de mediaan.
3. **Wijzigingsfaalpercentage**, afgelopen 4 weken, met de door het team overeengekomen definitie van "falen" gelinkt vanaf de tegel.
4. **Hersteltijd na een mislukte deploy**, mediaan, afgelopen 4 weken.
5. **Resterend foutbudget**, huidig kwartaal, per dienst, als percentage.

## Visualisatieregels

- Elk trenddiagram toont minstens acht datapunten, nooit één momentopname.
- Assen beginnen bij nul, tenzij een uitgesproken uitzondering op de tegel is gedocumenteerd.
- Deploys, incidenten en feestdagen worden op de tijdlijn geannoteerd, zodat lezers een echte verschuiving van ruis kunnen onderscheiden.
- Geen dubbele assen, geen 3D-effecten, geen selectief gekozen datumbereiken.

## Verversingscadans

Tegels die uit de pijplijn komen (deployfrequentie, doorlooptijd) worden elk uur ververst. Tegels die uit incidenten komen (wijzigingsfaalpercentage, hersteltijd) worden
ververst wanneer een postmortem wordt gesloten. Het dashboard toont zijn eigen tijdstip van laatste verversing.

## Wat dit dashboard bewust uitsluit

Aantallen commits per persoon, aantallen pull requests per persoon en regels code. Dit zijn activiteitsmetrieken met een goed gedocumenteerde geschiedenis van manipulatie
en van het meten van inspanning in plaats van resultaat (onderwerp 3.4).
