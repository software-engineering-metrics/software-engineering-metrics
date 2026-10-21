# 9.4 Skabeloner

Kopiér-og-indsæt-skabeloner til tilbagevendende dokumenter. Gennemarbejdede, udfyldte eksempler på de to første findes i [`docs/examples/`](../eksempler/oversigt.md).

## Skabelon til metrikcharter

```markdown
# Metrikcharter: [navn på team eller metriksæt]

- **Team:** [ejende team]
- **Ejer:** [navngiven person eller rolle]
- **Gennemgået:** [rytme, f.eks. kvartalsvis]

## Formål

[Én eller to sætninger: hvad dette charter styrer, og hvorfor.]

## Hvad vi følger

| Metrik | Autoritativ kilde | Ejer |
| --- | --- | --- |
| [metrik] | [system] | [navngiven ejer] |

## Ikke-mål

[Eksplicit erklæring om, hvad disse metrikker ikke bruges til, f.eks.
individuel præstationsvurdering, rangordning mellem teams uden kontekst.]

## Værn

[For hver incitamentsudsat metrik: angiv dens parrede værn og hvilket
manipulationsmønster det fanger.]

## Gennemgangsrytme

[Hvornår og hvordan dette charter genbesøges; hvad der udløser, at en metrik
udfases.]
```

## Skabelon til dashboardspecifikation

```markdown
# Dashboardspecifikation: [dashboardets navn]

## Målgruppe

[Hvem dette dashboard er til, og hvilken beslutning det informerer. Angiv
eksplicit, hvis det ikke er til individuel vurdering.]

## Felter (i visningsrækkefølge)

1. **[Metriknavn]**, [tidsvindue], [diagramtype]. [Eventuelle specifikke
   noter om visualisering: regler for akser, annotationer.]
2. ...

## Regler for visualisering

- Akserne starter ved nul, medmindre andet er angivet, med undtagelsen
  dokumenteret på feltet.
- [Eventuelle andre projektspecifikke regler om ærlighed.]

## Opdateringsrytme

[Hvor ofte hvert felt opdateres, og fra hvilken kilde.]

## Hvad dette dashboard bevidst udelader

[Angiv alt, der med vilje er udeladt, og hvorfor, f.eks. individuelle
aktivitetstal.]
```

## Skabelon til dagsorden for metrikgennemgangsmøde

```markdown
# Metrikgennemgang: [dato]

## Deltagere

[Navne og roller]

## Gennemgåede metrikker

For hver metrik:
- Aktuel aflæsning og tendens
- Enhver bevægelse uden for normal variation (emne 1.6)
- Status for det parrede værn, hvis det er relevant
- Den beslutning, aflæsningen informerer, hvis nogen

## Foreslåede nye metrikker

[Kør hver igennem tjeklisten til gennemgang af ny metrik, emne 9.3.]

## Metrikker overvejet til udfasning

[Hvilke metrikker har ikke informeret en beslutning i de seneste to
cyklusser?]

## Handlingspunkter

| Punkt | Ejer | Frist |
| --- | --- | --- |
| | | |
```

## Skabelon til skyldfri postmortem

```markdown
# Postmortem: [hændelsens navn], [dato]

## Resumé

[Ét afsnit: hvad der skete, påvirkning af brugere, varighed.]

## Tidslinje

- Opdagelse: [tidspunkt, hvordan den blev opdaget]
- Bekræftelse: [tidspunkt, hvem der reagerede]
- Løsning: [tidspunkt, hvad der rettede den]

## Alvorlighed

[Klassificering mod dokumenterede kriterier, emne 6.2.]

## Grundårsag

[Hvad der tillod, at dette skete, formuleret som et spørgsmål om systemet,
ikke om en enkeltperson.]

## Hvad der gik godt

[Specifikke ting, der virkede i responsen.]

## Handlingspunkter

| Punkt | Ejer | Frist |
| --- | --- | --- |
| | | |

## Opfølgning

[Bekræftelse af, at handlingspunkterne blev fulgt til afslutning, ved
næste gennemgangscyklus.]
```

## Skabelon til ROI-sag

```markdown
# ROI-sag: [initiativets navn]

## Omkostning (samlede ejeromkostninger, emne 5.5)

- Forudgående: [udviklingsomkostning]
- Løbende: [vedligeholdelse, infrastruktur, support, pr. år]
- Alternativomkostning: [hvad denne kapacitet ellers kunne have udrettet]

## Fordel (dokumenteret belæg, emne 5.1-5.3)

- [Fordel 1], dokumenteret ved [datakilde]
- [Fordel 2], dokumenteret ved [datakilde]

## Interval og antagelser

- Konservativt scenarie: [tal]
- Optimistisk scenarie: [tal]
- Nøgleantagelse, der driver intervallet: [navngiv den]

## Overvejede og udelukkede forstyrrende faktorer

[Hvad der ellers kunne forklare den projicerede fordel, og hvorfor det blev
udelukket eller taget i betragtning.]

## Kontrol efter afslutning (udfyldes, når initiativet er afsluttet)

- Faktisk resultat: [tal]
- Sammenlignet med det projicerede interval: [over / inden for / under]
- Hvad det lærer os til det næste estimat: [note]
```
