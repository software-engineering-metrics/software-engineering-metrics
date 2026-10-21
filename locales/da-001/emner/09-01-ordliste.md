# 9.1 Ordliste

Definitioner af termer og forkortelser, der bruges i hele bogen. Hver post angiver det emne, hvor termen introduceres i dybden.

**Aktivitetsmetrik (activity metric).** Et antal for ingeniørmæssig bevægelse (commits, pull requests, kodelinjer), der måler volumen, ikke værdi. Se emne 3.4.

**Bus factor.** Det antal personer, der skulle blive utilgængelige, før et system eller et stykke viden bliver uvedligeholdeligt. En bus factor på én er en alvorlig risiko. Se emne 3.5.

**Ændringsfejlrate (change failure rate).** Den procentdel af udrulninger, der forårsager en produktionsfejl, som kræver afhjælpning. En af de fire DORA-metrikker. Se emne 2.10.

**Kontroldiagram (control chart).** Et diagram, der viser en metriks normale variationsområde over tid, brugt til at skelne et reelt skift fra almindelig støj. Se emne 1.6.

**Gennemløbstid (cycle time).** Den interne opdeling af leveringstiden i trin: kodning, gennemgang, test og udrulning. Se emne 2.6.

**CVSS (Common Vulnerability Scoring System).** En standardiseret skala til at score alvorligheden af en sikkerhedssårbarhed. Se emne 6.4.

**Cyklomatisk kompleksitet (cyclomatic complexity).** Et antal af de uafhængige stier gennem et stykke kodes kontrolflow, introduceret af Thomas J. McCabe i 1976. Se emne 4.1.

**DevEx (udvikleroplevelse, developer experience).** Den bredere, beslægtede ramme i forhold til SPACE, organiseret omkring feedbackløkker, kognitiv belastning og flowtilstand. Se emne 3.7.

**Udrulningsfrekvens (deployment frequency).** Hvor ofte et team med succes frigiver til produktion. En af de fire DORA-metrikker. Se emne 2.10.

**DORA-metrikker (DORA metrics).** Fire metrikker fra programmet DevOps Research and Assessment: udrulningsfrekvens, leveringstid for ændringer, ændringsfejlrate og genopretningstid efter mislykket udrulning. Se emne 2.10.

**Fejlbudget (error budget).** Det tilladte underskud mellem et serviceniveaumål og 100 % pålidelighed, behandlet som en forbrugelig ressource. Se emne 6.1.

**Undsluppen fejl (escaped defect).** En fejl, der når produktion og påvirker en reel bruger, i modsætning til en, der fanges i gennemgang eller test. Se emne 5.1.

**FinOps.** Disciplinen at bringe økonomisk ansvarlighed til variable udgifter til cloudinfrastruktur. Se emne 5.4.

**Flowfordeling (flow distribution).** Andelen af gennemførte flowelementer, der tilhører hver flowelementtype i en given periode. Se emne 2.3.

**Floweffektivitet (flow efficiency).** Forholdet mellem aktiv arbejdstid og samlet forløbet tid for et stykke arbejde, der bevæger sig gennem en leveringspipeline. Se emne 2.5.

**Flow Framework.** En ledelsesmodel, skabt af Mik Kersten, der behandler softwarelevering som en værdistrøm og måler den med fire typer flowelementer og fem flowmetrikker. Se emne 2.1.

**Flowelement (flow item).** Flow Frameworks enhed for arbejde: et funktions-, fejl-, risiko- eller gældselement, klassificeret ved modtagelsen. Se emne 2.2.

**Flowbelastning (flow load).** Det samlede antal flowelementer, der aktuelt er aktive eller venter i en værdistrøm, Flow Frameworks navn for igangværende arbejde. Se emne 2.4.

**Flowtid (flow time).** Den samlede forløbne tid fra et flowelement træder ind i værdistrømmen til dets levering, der spænder over hele værdistrømmen og ikke kun ingeniørarbejdet. Se emne 2.4.

**Flowhastighed (flow velocity).** Antallet af flowelementer gennemført over en given periode, Flow Frameworks mål for gennemløb. Se emne 2.3.

**Goodharts lov (Goodhart's law).** Princippet om, at når et mål bliver et mål at ramme, holder det op med at være et godt mål. Bogens centrale, styrende idé. Se emne 1.2.

**Værnmetrik (guardrail metric).** En parret modmetrik, der ikke må forringes, mens en incitamentsudsat metrik forbedres, designet til at fange manipulation. Se emne 1.2.

**Hotspot.** En fil eller et modul, der både ændres hyppigt (høj omsætning) og er meget komplekst, identificeret gennem hotspotanalyse. Se emne 4.3.

**Leveringstid for ændringer (lead time for changes).** Tiden fra en kodeændrings første commit til dens vellykkede udrulning i produktion. En af de fire DORA-metrikker. Se emne 2.10.

**Little's lov (Little's law).** Beviset for, at det gennemsnitlige antal elementer i en stabil kø er lig med den gennemsnitlige ankomstrate gange den gennemsnitlige tid, et element tilbringer i systemet. Anvendt på levering er igangværende arbejde lig med ankomstraten gange gennemløbstiden. Se emne 2.7.

**Metriktræ (metric tree).** En struktur, der forbinder en resultatmetrik på øverste niveau ned gennem dens drivere til de operationelle metrikker, som de enkelte teams ejer. Se emne 1.3.

**MTTA (mean time to acknowledge).** Tiden fra en hændelses underretning til nogen overtager ansvaret for at reagere. Se emne 6.2.

**MTTD (mean time to detect).** Tiden fra en hændelses faktiske start til nogen bemærker, at den er indtruffet. Se emne 6.2.

**MTTR (mean time to recovery / mean time to resolve).** Tiden til fuldt at genoprette service efter en fejl. Bruges både for fejl forårsaget af udrulninger (emne 2.10) og generelle hændelser (emne 6.2).

**Mutationstest (mutation testing).** En teknik, der bevidst indfører små, kunstige fejl i kode for at tjekke, om en testsuite faktisk fanger dem, som supplement til dækning. Se emne 4.2.

**Nordstjernemetrik (north-star metric).** Det ene mål, der bedst indfanger den kerneværdi, en organisation leverer, placeret øverst i et metriktræ. Se emne 1.3.

**Resultattelemetri (outcome telemetry).** Kontinuerlig, instrumenteret måling af reelle resultater frem for aktivitet eller output. Se emne 7.4.

**Procent komplet og nøjagtig (percent complete and accurate, %C/A).** Den procentdel af enheder, et nedstrøms team kan behandle uden behov for omarbejde, fra klassisk Lean-værdistrømskortlægning. Se emne 2.8.

**Procestid (process time, PT).** Den faktiske praktiske tid brugt på at arbejde på en enkelt enhed, adskilt fra ventetid, fra klassisk Lean-værdistrømskortlægning. Se emne 2.8.

**Køteori (queueing theory).** Det matematiske studie af ventekøer, anvendt på leveringspipelines til at forklare, hvordan igangværende arbejde, ankomstrate og udnyttelse driver ventetid. Se emne 2.7.

**ROI (investeringsafkast, return on investment).** Det økonomiske afkast af et initiativ i forhold til dets omkostning, her bygget af dokumenteret omkostnings- og resultatbelæg frem for antagelse. Se emne 5.5.

**Samlet gennemløbsudbytte (rolled throughput yield).** Procent komplet og nøjagtig for hvert trin i en værdistrøm ganget sammen, hvilket afslører, hvordan omarbejde akkumuleres gennem en pipeline med flere trin. Se emne 2.8.

**SLI (serviceniveauindikator, service level indicator).** Et direkte målt signal om en tjenestes sundhed, såsom svartid eller fejlrate. Se emne 6.1.

**SLO (serviceniveaumål, service level objective).** Målintervallet for en serviceniveauindikator. Se emne 6.1.

**SPACE-rammen (SPACE framework).** Et rammeværk med fem dimensioner for udvikleres produktivitet: Satisfaction and well-being (tilfredshed og trivsel), Performance (præstation), Activity (aktivitet), Communication and collaboration (kommunikation og samarbejde) og Efficiency and flow (effektivitet og flow). Se emne 3.1.

**SRE (site reliability engineering).** Disciplinen, banebrydende hos Google, der anvender softwareudviklingstilgange på drift og pålidelighed. Se emne 6.1.

**Taktid (takt time).** Den maksimalt acceptable tid til at gennemføre en arbejdsenhed for rent at matche kundens efterspørgsel, fra klassisk Lean-værdistrømskortlægning. Se emne 2.8.

**Teknisk gæld (technical debt).** De akkumulerede omkostninger ved tidligere genveje i en kodebase, en metafor for en håndterbar afvejning, ikke en skamfuld hemmelighed. Se emne 4.5.

**TCO (samlede ejeromkostninger, total cost of ownership).** De fulde omkostninger ved et initiativ eller system over dets levetid, inklusive løbende vedligeholdelse og infrastruktur, ikke kun de forudgående omkostninger. Se emne 5.5.

**Enhedsøkonomi (unit economics).** Omkostning udtrykt pr. meningsfuld enhed af leveret værdi (pr. kunde, pr. transaktion) frem for som en uigennemsigtig sum. Se emne 5.4.

**Udnyttelse (utilization).** Den andel af en ressources tilgængelige kapacitet, der er optaget, beregnet som ankomstrate divideret med servicerate. Ventetiden vokser kraftigt, ikke gradvist, når udnyttelsen nærmer sig fuld kapacitet. Se emne 2.7.

**Værdistrøm (value stream).** Den ende-til-ende-rækkefølge af aktiviteter, der omsætter en idé til værdi, som en kunde modtager, Flow Frameworks måleenhed. Se emne 2.1.

**Forfængelighedsmetrik (vanity metric).** En metrik, der pålideligt stiger, ser imponerende ud og ikke ændrer nogen beslutning. Se emne 1.1.

**Igangværende arbejde (work in process, WIP).** Antallet af elementer, der aktivt arbejdes på på ét givet tidspunkt på tværs af et team eller system. Se emne 2.5.
