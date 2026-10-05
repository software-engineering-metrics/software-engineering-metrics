# 9.4 Templates

Kopieer-plak-templates voor terugkerende documenten. Doorgewerkte, ingevulde voorbeelden van de eerste twee leven in `docs/examples/`.

## Metriekcharter-template

```markdown
# Metriekcharter: [team- of metriekenset-naam]

- **Team:** [eigenaarteam]
- **Eigenaar:** [genoemde persoon of rol]
- **Gereviewd:** [cadans, bijv. kwartaal]

## Doel

[Een of twee zinnen: wat dit charter bestuurt en waarom.]

## Wat we volgen

| Metriek | Waarheidsbron | Eigenaar |
| --- | --- | --- |
| [metriek] | [systeem] | [genoemde eigenaar] |

## Niet-doelen

[Expliciete verklaring van waarvoor deze metrieken niet gebruikt worden, bijv. individuele prestatiebeoordeling, teamoverschrijdende rangschikking zonder context.]

## Beschermmetrieken

[Voor elke gestimuleerde metriek, benoem zijn gekoppelde beschermmetriek en welk manipulatiepatroon het vangt.]

## Reviewcadans

[Wanneer en hoe dit charter herbezocht wordt; wat de pensionering van een metriek triggert.]
```

## Dashboardspecificatie-template

```markdown
# Dashboardspecificatie: [dashboardnaam]

## Publiek

[Voor wie dit dashboard is, en welke beslissing het informeert. Stel expliciet als niet voor individuele evaluatie.]

## Tegels (in weergavevolgorde)

1. **[Metrieknaam]**, [tijdsvenster], [grafiektype]. [Enige specifieke visualisatienotities: asregels, annotaties.]
2. ...

## Visualisatieregels

- Assen starten bij nul tenzij anders gesteld, met de uitzondering gedocumenteerd op de tegel.
- [Enige andere projectspecifieke eerlijkheidsregels.]

## Vernieuwingscadans

[Hoe vaak elke tegel updatet, en van welke bron.]

## Wat dit dashboard doelbewust uitsluit

[Benoem alles doelbewust weggelaten, en waarom, bijv. individuele activiteitstellingen.]
```

## Metriekreview-vergaderagenda-template

```markdown
# Metriekreview: [datum]

## Aanwezigen

[Namen en rollen]

## Gereviewde metrieken

Voor elke metriek:
- Huidige aflezing en trend
- Enige beweging buiten normale variatie (onderwerp 1.6)
- Gekoppelde-beschermmetriek-status, indien toepasbaar
- Beslissing die deze aflezing informeert, indien enige

## Nieuwe voorgestelde metrieken

[Loop elke door de nieuwe-metriek-reviewchecklist, onderwerp 9.3.]

## Metrieken overwogen voor pensioen

[Welke metrieken hebben geen beslissing geïnformeerd in de laatste twee cycli?]

## Actiepunten

| Item | Eigenaar | Vervaldatum |
| --- | --- | --- |
| | | |
```

## Schuldloze-postmortem-template

```markdown
# Postmortem: [incidentnaam], [datum]

## Samenvatting

[Een paragraaf: wat gebeurde, gebruikersimpact, duur.]

## Tijdlijn

- Detectie: [tijd, hoe gedetecteerd]
- Erkenning: [tijd, wie reageerde]
- Oplossing: [tijd, wat het fixte]

## Ernst

[Classificatie tegen gedocumenteerde criteria, onderwerp 6.2.]

## Grondoorzaak

[Wat toeliet dat dit gebeurde, gekaderd als een systeemvraag, geen individuele.]

## Wat goed ging

[Specifieke dingen die werkten in de respons.]

## Actiepunten

| Item | Eigenaar | Vervaldatum |
| --- | --- | --- |
| | | |

## Vervolg

[Bevestiging dat actiepunten gevolgd werden tot voltooiing, volgens de volgende reviewcyclus.]
```

## ROI-zaak-template

```markdown
# ROI-zaak: [initiatiefnaam]

## Kost (totale eigendomskosten, onderwerp 5.5)

- Vooraf: [ontwikkelkost]
- Doorlopend: [onderhoud, infrastructuur, support, per jaar]
- Opportuniteitskost: [wat deze capaciteit anders had kunnen doen]

## Voordeel (gedocumenteerd bewijs, onderwerpen 5.1-5.3)

- [Voordeel 1], bewezen door [databron]
- [Voordeel 2], bewezen door [databron]

## Bereik en aannames

- Conservatief geval: [cijfer]
- Optimistisch geval: [cijfer]
- Kernaanname die het bereik drijft: [benoem het]

## Verwarrende variabelen overwogen en uitgesloten

[Wat anders het geprojecteerde voordeel zou kunnen verklaren, en waarom het uitgesloten of verantwoord werd.]

## Post-afronding-check (invullen nadat het initiatief afrondt)

- Daadwerkelijke uitkomst: [cijfer]
- Vergeleken met geprojecteerd bereik: [boven / binnen / onder]
- Wat dit ons leert voor de volgende schatting: [notitie]
```
