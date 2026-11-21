# Stijlregels (gedeeld, afdwingbaar)

De huisstijl op één plek. Items gemarkeerd met "(test)" worden afgedwongen door `tests/validate.py`; een overtreding laat de build mislukken. De volledige verhalende versie is
`spec/conventions.md` in de repositoryroot.

## Harde regels

- **Geen gedachtestreepjes.** Gebruik nooit "—" (U+2014). Gebruik een komma, dubbele punt, haakjes of twee zinnen. Het korte streepje "–" is alleen toegestaan in numerieke
  bereiken zoals `1–9` of `2.1–2.8`. (test)
- **Geen clichézinnen.** Gebruik niet "not only ... but also", "but also" of "load-bearing". Vermijd "It's important to note", "In today's fast-paced world",
  "It's crucial to consider", "It appears that", "One could argue" en de formule "it's not just X, it's Y". (test, voor de eerste drie)
- **Definieer termen bij eerste gebruik.** Schrijf afkortingen uit en definieer jargon de eerste keer dat elk onderwerp het gebruikt, bijvoorbeeld "mean time to recovery (MTTR)".
- **Link kernbegrippen naar Wikipedia** bij de eerste vermelding, één keer per onderwerp, alleen in proza. Vorm: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Nooit in koppen, tabellen, code of de sectie met referenties. (de linkvorm is een test)
- **Alleen echte referenties.** Auteurs en titels van echte werken. Geen verzonnen titels, auteurs of URL's.
- **Benoem de manipulatieroute.** Onderwerpen over metriekenfamilies stellen hoe de metriek wordt gemanipuleerd en welke beschermmetriek dat opvangt (onderwerp 1.2).

## Toon

- Warm, direct, bemoedigend. Spreek de lezer direct aan. Korte zinnen, eenvoudige woorden. Begin met de kern.
- Uitgesproken en praktisch. Leveranciersneutraal. Noem producten alleen als feitelijk voorbeeld.

## Structuur (test)

- Inhoudelijke onderwerpen gebruiken exact de sectievolgorde van [`chapter-template.md`](chapter-template.md).
- De eerste kop is `# N.M Title` (puntgescheiden onderwerpnummer) en komt overeen met het voorvoegsel `PP-CC` met voorloopnullen van het bestand.
- De nummering binnen elk deel is aaneengesloten en begint bij N.0.

## Na het bewerken

- Als je de verzameling onderwerpen hebt gewijzigd, werk dan `spec/structure.md` bij en draai `just nav`.
- Draai altijd `just test`.
