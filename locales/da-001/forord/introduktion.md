# Introduktion

Denne bog er en praktisk guide til at måle [softwareudvikling](https://en.wikipedia.org/wiki/Software_engineering) godt, for teams alt fra en startup med fem personer til en stor virksomhed med tusindvis af ingeniører eller en offentlig myndighed, der rapporterer mod en lovbestemt præstationsramme. Den findes, fordi de fleste råd om metrikker enten er et resumé af et framework uden operationelle detaljer eller en værktøjsleverandørs funktionsliste. Denne bog forsøger at være ingen af delene: den har holdninger til, hvad man skal måle, den er eksplicit om, hvordan hver enkelt metrik bliver manipuleret, og den er praktisk i forhold til, hvordan man driver et metrikprogram, som et team stoler på i stedet for at frygte.

## Hvem bogen er til

Den primære målgruppe er de personer, der vælger, hvad en organisation måler: ingeniørledere, staff- og principal-ingeniører, platforms- og DevOps-teams samt program- og produktchefer. Den sekundære målgruppe er enhver ingeniør, der vil forstå ræsonnementet bag et dashboard, vedkommende bliver bedt om at rykke på, og hvordan man udfordrer en metrik, der ikke længere tjener sit formål. Du behøver ikke læse den fra ende til anden. Hvert emne kan stå alene, fremlægger først sine principper og slutter med praktiske pointer, en modenhedsmodel og kilder.

## Sådan er bogen organiseret

Bogen er opdelt i **dele** (hele tal) og **emner** (decimaltal). Emne **N.0** introducerer hver del og forklarer, hvordan delens emner hænger sammen; emnerne **N.1, N.2, …** gennemgår emnerne i dybden.

- **Del 1, Målingens grundlag:** hvorfor man overhovedet skal måle, Goodharts lov og manipulationens psykologi, at vælge resultater frem for output, styring og ejerskab, datakilder og den statistiske forståelse, ethvert metrikprogram har brug for.
- **Del 2, Flowmetrikker:** Flow Framework, dets flowelementer og fem flowmetrikker, cyklustid, køteori, klassiske lean-værdistrømsmetrikker, metrikker for pull requests og kodegennemgang samt DORA-frameworket som referenceemne.
- **Del 3, Udvikleroplevelse og SPACE-frameworket:** SPACE-frameworket og dets fem dimensioner, og hvordan man gennemfører en udvikleroplevelsesundersøgelse uden at den bliver en popularitetskonkurrence.
- **Del 4, Kode- og kvalitetsmetrikker:** kompleksitet, testdækning og testeffektivitet, kodeomsætning og hotspots, statisk analyse, teknisk gæld og dokumentation.
- **Del 5, Produkt- og forretningsmetrikker:** undslupne fejl, funktionsadoption, kunde- og forretningsresultater, enhedsøkonomi og investeringsafkast.
- **Del 6, Metrikker for driftssikkerhed, drift og sikkerhed:** SLI'er, SLO'er og fejlbudgetter, hændelsesmetrikker, vagtberedskab og kapacitet samt metrikker for sikkerhed og sårbarheder.
- **Del 7, Metrikker i AI-æraen:** skiftet til generativ AI, hvordan man måler AI-understøttet udvikling, risikoen for metrikinflation, og hvorfor resultattelemetri bliver nordstjernen, når output bliver billigt.
- **Del 8, Opbygning af et metrikprogram:** design af et dashboard, byg eller køb, udrulning af metrikker uden at skabe frygt, en modenhedsmodel og en trinvis køreplan for indførelse.
- **Del 9, Bilag:** ordliste, en reference til metrikdefinitioner og formler, tjeklister, skabeloner, modenhedsselvvurdering, kilder og indeks.

## Vejledende principper

Otte principper udgør bogens rygrad:

1. **Et mål, der bliver til et mål at ramme, holder op med at være et godt mål.** Design mod Goodharts lov fra begyndelsen, ikke først når forvridningen viser sig.
2. **Resultater over output over aktivitet.** Vægt ethvert metriksæt mod det, der ændrede sig for kunden eller virksomheden, ikke mod det, teamet producerede, eller hvor travlt det havde.
3. **Enhver metrik med incitament har brug for et værn.** Par hastighed med kvalitet og gennemstrømning med stabilitet, og jagt aldrig ét tal isoleret.
4. **Mål systemer, ikke personer.** En metrik, der individualiserer skyld, ødelægger tilliden og inviterer til manipulation; en metrik, der afslører en systembegrænsning, inviterer til forbedring.
5. **Foretræk instrumentering frem for selvrapportering, hvor du kan få den, og selvrapportering, hvor du ikke kan.** Antallet af udrulninger kommer fra pipelinen; tilfredshed får man ved at spørge.
6. **En metrik fortjener sin plads, ellers bliver den pensioneret.** Hver flise på et dashboard koster opmærksomhed. Beskær med omtanke.
7. **Definitioner betyder mere end dashboards.** To teams, der beregner "gennemløbstid" forskelligt, bruger mere tid på at skændes om tallet, end de bruger på at handle på det.
8. **Generativ AI er en grund til at gentænke, ikke blot til at nulstille baseline.** Når output bliver billigt, har metrikker bygget omkring outputvolumen brug for nye værn, ikke bare nye mål.

## Tværgående temaer

[Goodharts lov](https://en.wikipedia.org/wiki/Goodhart%27s_law) er det ene tema, der løber gennem alle bogens dele, ikke kun emne 1.2. Hvert emne om en metrikfamilie fremlægger, hvordan den metrik, det dækker, bliver manipuleret, og hvilket værn der fanger det. Rapporteringskrav i det offentlige og i store virksomheder, hvor en metrik kan have lovbestemt eller kontraktlig vægt, behandles som designinput hele vejen igennem og ikke som en eftertanke, der er begrænset til ét emne.

## Sådan bruger du den

Indfør det trinvis; læg ikke et dashboard ned over et team, der aldrig har haft et, med ét stort brag. Start, hvor smerten er størst, brug hvert emnes modenhedsmodel til at placere dig selv ærligt, og lad køreplanen for indførelse (emne 8.5) sekvensere arbejdet. Målet er ikke en mur af diagrammer. Det er en organisation, der med belæg kan se, om det, den gør, virker, og som stoler nok på sine egne tal til at handle på dem.
