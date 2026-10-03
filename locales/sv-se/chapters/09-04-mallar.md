# 9.4 Mallar

Kopiera-klistra-mallar för återkommande dokument. Genomarbetade, ifyllda exempel på de första två finns i `docs/examples/`.

## Metrikstadgamall

```markdown
# Metrikstadga: [team- eller mätetalsuppsättningsnamn]

- **Team:** [ägande team]
- **Ägare:** [namngiven person eller roll]
- **Granskad:** [cadens, t.ex. kvartalsvis]

## Syfte

[En eller två meningar: vad den här stadgan styr och varför.]

## Vad vi spårar

| Mätetal | Sanningskälla | Ägare |
| --- | --- | --- |
| [mätetal] | [system] | [namngiven ägare] |

## Icke-mål

[Explicit uttalande om vad de här mätetalen inte används för, t.ex.
individuell prestationsutvärdering, teamöverskridande rangordning utan kontext.]

## Skyddsmätetal

[För varje incitamentsbelagt mätetal, namnge dess parade skyddsmätetal och vilket
manipulationsmönster det fångar.]

## Granskningscadens

[När och hur den här stadgan återbesöks; vad som utlöser ett mätetals
pensionering.]
```

## Instrumentpanelsspecifikationsmall

```markdown
# Instrumentpanelsspecifikation: [instrumentpanelsnamn]

## Publik

[Vem den här instrumentpanelen är för, och vilket beslut den informerar. Uttala
explicit om inte för individuell utvärdering.]

## Brickor (i visningsordning)

1. **[Mätetalsnamn]**, [tidsfönster], [diagramtyp]. [Eventuella specifika
   visualiseringsanteckningar: axelregler, annoteringar.]
2. ...

## Visualiseringsregler

- Axlar startar vid noll om inte annat uttalat, med undantaget
  dokumenterat på brickan.
- [Eventuella andra projektspecifika ärlighetsregler.]

## Uppdateringscadens

[Hur ofta varje bricka uppdateras, och från vilken källa.]

## Vad den här instrumentpanelen medvetet utesluter

[Namnge allt medvetet utelämnat, och varför, t.ex. individuella
aktivitetsantal.]
```

## Mätetalsgranskningsmötesagendamall

```markdown
# Mätetalsgranskning: [datum]

## Deltagare

[Namn och roller]

## Mätetal granskade

För varje mätetal:
- Nuvarande avläsning och trend
- Eventuell rörelse utanför normal variation (kapitel 1.6)
- Parat skyddsmätetalsstatus, om tillämpligt
- Beslut den här avläsningen informerar, om något

## Nya mätetal föreslagna

[Kör var och en genom checklistan för granskning av nytt mätetal, kapitel 9.3.]

## Mätetal övervägda för pensionering

[Vilka mätetal har inte informerat ett beslut under de senaste två cyklerna?]

## Åtgärdspunkter

| Punkt | Ägare | Förfaller |
| --- | --- | --- |
| | | |
```

## Skuldfri postmortem-mall

```markdown
# Postmortem: [incidentnamn], [datum]

## Sammanfattning

[Ett stycke: vad hände, användarpåverkan, varaktighet.]

## Tidslinje

- Upptäckt: [tid, hur upptäckt]
- Bekräftelse: [tid, vem svarade]
- Lösning: [tid, vad fixade det]

## Allvarlighetsgrad

[Klassificering mot dokumenterade kriterier, kapitel 6.2.]

## Grundorsak

[Vad tillät det här att hända, inramat som en systemfråga, inte en
individuell en.]

## Vad gick bra

[Specifika saker som fungerade i responsen.]

## Åtgärdspunkter

| Punkt | Ägare | Förfaller |
| --- | --- | --- |
| | | |

## Uppföljning

[Bekräftelse att åtgärdspunkter spårades till slutförande, enligt
nästa granskningscykel.]
```

## ROI-fallmall

```markdown
# ROI-fall: [initiativnamn]

## Kostnad (total ägandekostnad, kapitel 5.5)

- Förhand: [utvecklingskostnad]
- Löpande: [underhåll, infrastruktur, support, per år]
- Alternativkostnad: [vad annars den här kapaciteten kunde ha gjort]

## Förmån (dokumenterat bevis, kapitel 5.1–5.3)

- [Förmån 1], belagd av [datakälla]
- [Förmån 2], belagd av [datakälla]

## Intervall och antaganden

- Konservativt fall: [siffra]
- Optimistiskt fall: [siffra]
- Nyckelantagande som driver intervallet: [namnge det]

## Störvariabler övervägda och uteslutna

[Vad annat skulle kunna förklara den projicerade förmånen, och varför det
uteslöts eller redovisades.]

## Kontroll efter slutförande (fylls i efter att initiativet slutförs)

- Faktiskt utfall: [siffra]
- Jämfört med projicerat intervall: [ovanför / inom / under]
- Vad det här lär oss för nästa uppskattning: [anteckning]
```
