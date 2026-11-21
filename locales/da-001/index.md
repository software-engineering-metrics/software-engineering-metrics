# Metrikker for softwareudvikling

En arbejdsbog om at måle **softwareudvikling** godt: hvordan man vælger metrikker, der afspejler reelle resultater frem for aktivitet, de frameworks bogen bygger på (Flow Framework, SPACE-frameworket, køteori og DORA-metrikker), de metrikfamilier, der betyder noget, og hvordan man driver et metrikprogram, der gør et team bedre i stedet for at overvåge det.

Bogen dækker levering og flow, udvikleroplevelse, kode og kvalitet, produkt- og forretningsresultater, driftssikkerhed og sikkerhed samt hvordan generativ AI ændrer, hvad disse tal betyder.

- **[Hvad er metrikker for softwareudvikling?](forord/hvad-er-softwareudviklingsmetrikker.md):** start her
- **[Introduktion](forord/introduktion.md):** hvad denne bog er, og hvordan du læser den
- **[Indholdsfortegnelse](forord/indholdsfortegnelse.md):** den fulde liste over emner

## Sådan læser du denne bog

Dele er hele tal; emner er decimaltal. Emne **N.0** introducerer hver del; **N.1, N.2, …** er delens emner. Del 9 samler bilagene (en ordliste, en formelreference, tjeklister, skabeloner, en modenhedsselvvurdering, kilder og et indeks). Hvert emne om en metrikfamilie gennemgår principper, anbefalinger, afvejninger, et sektorperspektiv, eksempler (stor virksomhed og offentlig sektor), en business case (ROI/TCO), antimønstre, en modenhedsmodel, spørgsmål til drøftelse og kilder, og det peger på, hvordan metrikken bliver manipuleret, og hvilket værn der fanger det. Indfør det trinvis; ikke med et stort brag.

## Indholdsfortegnelse

### Del 1: Målingens grundlag
- [1.0 Introduktion](emner/01-00-målingens-grundlag.md)
- [1.1 Hvorfor måle softwareudvikling](emner/01-01-hvorfor-måle-softwareudvikling.md)
- [1.2 Goodharts lov og metrikkernes psykologi](emner/01-02-goodharts-lov-og-metrikkernes-psykologi.md)
- [1.3 Resultater frem for output: at vælge, hvad man skal måle](emner/01-03-resultater-frem-for-output.md)
- [1.4 Metrikstyring og ejerskab](emner/01-04-metrikstyring-og-ejerskab.md)
- [1.5 Datakilder og instrumentering](emner/01-05-datakilder-og-instrumentering.md)
- [1.6 Statistisk forståelse for ingeniørmetrikker](emner/01-06-statistisk-forståelse-for-ingeniørmetrikker.md)

### Del 2: Flowmetrikker
- [2.0 Introduktion](emner/02-00-flowmetrikker.md)
- [2.1 Flow Framework](emner/02-01-flow-framework.md)
- [2.2 Flowelementer: funktioner, fejl, risici og gæld](emner/02-02-flowelementer.md)
- [2.3 Flowhastighed og flowfordeling](emner/02-03-flowhastighed-og-flowfordeling.md)
- [2.4 Flowtid og flowbelastning](emner/02-04-flowtid-og-flowbelastning.md)
- [2.5 Floweffektivitet og igangværende arbejde](emner/02-05-floweffektivitet-og-igangværende-arbejde.md)
- [2.6 Cyklustid og dens komponenter](emner/02-06-cyklustid-og-dens-komponenter.md)
- [2.7 Køteori](emner/02-07-køteori.md)
- [2.8 Lean-værdistrømsmetrikker](emner/02-08-lean-værdistrømsmetrikker.md)
- [2.9 Metrikker for pull requests og kodegennemgang](emner/02-09-metrikker-for-pull-requests-og-kodegennemgang.md)
- [2.10 DORA-metrikframeworket](emner/02-10-dora-metrikframeworket.md)

### Del 3: Udvikleroplevelse og SPACE-frameworket
- [3.0 Introduktion](emner/03-00-udvikleroplevelse-og-space.md)
- [3.1 SPACE-frameworket](emner/03-01-space-frameworket.md)
- [3.2 Metrikker for tilfredshed og trivsel](emner/03-02-metrikker-for-tilfredshed-og-trivsel.md)
- [3.3 Præstationsmetrikker og resultatproxyer](emner/03-03-præstationsmetrikker-og-resultatproxyer.md)
- [3.4 Aktivitetsmetrikker og deres grænser](emner/03-04-aktivitetsmetrikker-og-deres-grænser.md)
- [3.5 Metrikker for kommunikation og samarbejde](emner/03-05-metrikker-for-kommunikation-og-samarbejde.md)
- [3.6 Effektivitet og flow: dybt arbejde og afbrydelser](emner/03-06-effektivitet-og-flow.md)
- [3.7 Undersøgelser af udvikleroplevelse og DevEx-metrikker](emner/03-07-udvikleroplevelsesundersøgelser-og-devex-metrikker.md)

### Del 4: Kode- og kvalitetsmetrikker
- [4.0 Introduktion](emner/04-00-kode-og-kvalitetsmetrikker.md)
- [4.1 Kodekompleksitetsmetrikker](emner/04-01-kodekompleksitetsmetrikker.md)
- [4.2 Testdækning og testeffektivitet](emner/04-02-testdækning-og-testeffektivitet.md)
- [4.3 Kodeomsætning og hotspotanalyse](emner/04-03-kodeomsætning-og-hotspotanalyse.md)
- [4.4 Statisk analyse og code smell-metrikker](emner/04-04-statisk-analyse-og-code-smell-metrikker.md)
- [4.5 Måling af teknisk gæld](emner/04-05-måling-af-teknisk-gæld.md)
- [4.6 Metrikker for dokumentation og viden](emner/04-06-metrikker-for-dokumentation-og-viden.md)

### Del 5: Produkt- og forretningsmetrikker
- [5.0 Introduktion](emner/05-00-produkt-og-forretningsmetrikker.md)
- [5.1 Undslupne fejl og kvalitetsudslip](emner/05-01-undslupne-fejl-og-kvalitetsudslip.md)
- [5.2 Metrikker for funktionsadoption og brug](emner/05-02-metrikker-for-funktionsadoption-og-brug.md)
- [5.3 Kunde- og forretningsresultatmetrikker](emner/05-03-kunde-og-forretningsresultatmetrikker.md)
- [5.4 Omkostninger og enhedsøkonomi i ingeniørarbejde](emner/05-04-omkostninger-og-enhedsøkonomi-i-ingeniørarbejde.md)
- [5.5 Investeringsafkast for ingeniørinitiativer](emner/05-05-investeringsafkast-for-ingeniørinitiativer.md)

### Del 6: Metrikker for driftssikkerhed, drift og sikkerhed
- [6.0 Introduktion](emner/06-00-pålidelighed-drift-og-sikkerhedsmetrikker.md)
- [6.1 Serviceniveauindikatorer, -mål og fejlbudgetter](emner/06-01-slier-slo-er-og-fejlbudgetter.md)
- [6.2 Hændelsesmetrikker: opdagelse, respons og genopretning](emner/06-02-hændelsesmetrikker.md)
- [6.3 Metrikker for vagt, kapacitet og driftsbelastning](emner/06-03-metrikker-for-vagt-kapacitet-og-driftsbelastning.md)
- [6.4 Metrikker for sikkerhed og sårbarhedshåndtering](emner/06-04-metrikker-for-sikkerhed-og-sårbarhedshåndtering.md)

### Del 7: Metrikker i AI-æraen
- [7.0 Introduktion](emner/07-00-metrikker-i-ai-alderen.md)
- [7.1 Paradigmeskiftet med generativ AI](emner/07-01-paradigmeskiftet-med-generativ-ai.md)
- [7.2 Måling af AI-assisteret softwareudvikling](emner/07-02-måling-af-ai-assisteret-softwareudvikling.md)
- [7.3 Risici ved metrikinflation og kvalitetsudvanding](emner/07-03-risici-ved-metrikinflation-og-kvalitetsudvanding.md)
- [7.4 Resultattelemetri som den nye nordstjerne](emner/07-04-resultattelemetri-som-den-nye-nordstjerne.md)

### Del 8: Opbygning af et metrikprogram
- [8.0 Introduktion](emner/08-00-opbygning-af-et-metrikprogram.md)
- [8.1 Design af et ingeniørmetrikdashboard](emner/08-01-design-af-et-ingeniørmetrikdashboard.md)
- [8.2 Værktøjslandskabet: bygge versus købe](emner/08-02-værktøjslandskabet-bygge-versus-købe.md)
- [8.3 Udrulning af metrikker uden at fremkalde frygt](emner/08-03-udrulning-af-metrikker-uden-at-fremkalde-frygt.md)
- [8.4 Modenhedsmodel for ingeniørmetrikprogrammer](emner/08-04-modenhedsmodel-for-ingeniørmetrikprogrammer.md)
- [8.5 En trinvis køreplan for indførelse](emner/08-05-en-trinvis-køreplan-for-indførelse.md)

### Del 9: Bilag
- [9.0 Bilag](emner/09-00-bilag.md)
- [9.1 Ordliste](emner/09-01-ordliste.md)
- [9.2 Reference for metrikdefinitioner og formler](emner/09-02-reference-for-metrikdefinitioner-og-formler.md)
- [9.3 Tjeklister](emner/09-03-tjeklister.md)
- [9.4 Skabeloner](emner/09-04-skabeloner.md)
- [9.5 Selvvurdering af modenhed](emner/09-05-selvvurdering-af-modenhed.md)
- [9.6 Kilder og videre læsning](emner/09-06-kilder-og-videre-læsning.md)
- [9.7 Indeks](emner/09-07-indeks.md)

## Tværgående temaer

[Goodharts lov](https://en.wikipedia.org/wiki/Goodhart%27s_law) gælder for ethvert emne: et mål, der bliver til et mål at ramme, holder op med at være et godt mål, så hver metrikfamilie her leveres med sin manipulationsvektor og sit værn. Resultater vægtes højere end output og aktivitet gennem hele bogen. Rapporteringskrav i det offentlige og i store virksomheder behandles som designinput og ikke som en eftertanke, og skiftet til generativ AI behandles som en grund til at gentænke, hvad disse metrikker betyder, og ikke blot som endnu en kolonne på dashboardet.

## Ud over emnerne

- **[Eksempler](eksempler/oversigt.md):** små, konkrete eksempler på bogens idéer i brug.
- **[Om dette projekt](projekt/oversigt.md):** hvordan bogen bygges, kontrolleres og udgives.
- **[Bidrag](bidrag/oversigt.md):** hvordan du kan hjælpe, og husstilens regler.
