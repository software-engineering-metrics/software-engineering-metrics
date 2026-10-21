# 2.10 DORA-metrikframeworket

## Overblik og motivation

**[DORA-metrikkerne](https://dora.dev/guides/dora-metrics/)** stammer fra programmet DevOps Research and Assessment ([DevOps](https://en.wikipedia.org/wiki/DevOps)), en flerårig forskningsindsats, senere udgivet som bogen *Accelerate* af Nicole Forsgren, Jez Humble og Gene Kim, der spurgte titusinder af ingeniørfaglige for at finde ud af, hvilken leveringspraksis der korrelerer med organisatorisk præstation. Resultatet var fire metrikker, parret to og to: udrulningsfrekvens og gennemløbstid for ændringer måler hastighed; andel af ændringer, der fejler, og genoprettelsestid efter mislykket udrulning, ofte forkortet til mean time to recovery (MTTR), måler stabilitet. Det forskningsfund, der gjorde frameworket betydningsfuldt, var, at topresultater var hurtige og stabile samtidigt, hvilket omstødte antagelsen om, at hastighed og sikkerhed er hinandens modsætninger, og det fund er stadig det klareste gennemarbejdede eksempel, denne bog har på emne 1.2's princip om parring med værn: en hastighedsmetrik med incitament, parret med et stabilitetsværn, er det, de bedst præsterende organisationer faktisk gør.

Denne bog dækker DORA sidst i denne del, bevidst, frem for som delens organiserende framework. Den placering er ikke en afvisning af forskningen, som stadig er reelt streng og værd at bruge. Den afspejler en specifik, reel begrænsning: DORA måler, hvor hurtigt og hvor sikkert en pipeline bevæger sig, men er tavs om, hvad der bevæger sig gennem pipelinen. Et team kan fremvise fremragende DORA-tal, mens dets faktiske output i det stille er drevet mod omarbejde af fejl eller har sultet teknisk gæld og sikkerhedsarbejde for kapacitet, et mønster, som Flow Framework i emnerne 2.1 til 2.4 er bygget specifikt til at afdække, og DORA ikke kan se. Brug DORA, som dette emne præsenterer det: et velvalideret, snævrere referencemål for pipelinens mekanik, ikke hele billedet af leveringens sundhed.

For store teams er DORAs resterende, reelle værdi sammenlignelighed. En metrik beregnet konsekvent ud fra pipeline- og hændelsesdata lader en organisation sammenligne leveringsevne på tværs af mange teams, der arbejder i forskellige domæner, uden det æbler-og-pærer-problem, der plager de fleste sammenligninger på tværs af teams. Store virksomheder bruger den stadig til at prioritere platformsinvesteringer; offentlige organisationer bruger den stadig til at påvise, med belæg, at et moderniseringsprogram målbart forbedrede leveringens mekanik. Behandl det som DORAs rette, afgrænsede opgave, og brug emnerne om Flow Framework tidligere i denne del til det bredere spørgsmål om, hvorvidt de rette ting overhovedet leveres.

## Nøgleprincipper

- **DORA måler pipelinen, ikke den værdi, der strømmer gennem den.** Emne 2.1 navngiver direkte dette hul; brug flowfordelingen (emne 2.3) til at se, hvad DORA ikke kan.
- **Hastighed og stabilitet måles sammen, aldrig hver for sig.** Et DORA-informeret dashboard uden begge halvdele bruger reelt ikke frameworket.
- **Konsistens i definition betyder mere end det rå tal.** Et team, der bevæger sig fra "medium" til "høj" præstation på en konsekvent defineret metrik, er et reelt signal; at sammenligne to teams, der er beregnet forskelligt, er det ikke.
- **DORA måler systemet, ikke enkeltpersoner.** At anvende disse metrikker på individuelle ingeniører bryder frameworkets statistiske grundlag og inviterer til netop den manipulation, emne 1.2 advarer imod.
- **Alle fire metrikker er stedfortrædere, ikke mål.** De korrelerer med organisatorisk præstation; at jagte selve tallet, løsrevet fra reel leveringsforbedring, underminerer frameworkets formål.

## Anbefalinger

### Instrumentér udrulningsfrekvens fra pipelinen, og tæl kun produktionsudgivelser

**Udrulningsfrekvens** måler, hvor ofte et team med succes udgiver til produktion. Tæl kun vellykkede produktionsudrulninger, instrumenteret automatisk fra CI/CD-pipelinedata, aldrig selvrapporteret. Hold specifikt øje med substitutionsmanipulation, at dele én meningsfuld ændring op i flere trivielle udrulninger udelukkende for at pumpe antallet op, ved at følge udrulningens størrelse ved siden af frekvensen: en skrumpende gennemsnitsstørrelse ved siden af et stigende antal er det klareste tegn på, at det sker.

### Instrumentér gennemløbstid for ændringer fra første commit til produktion

**Gennemløbstid for ændringer** måler tiden fra en kodeændrings første commit til dens vellykkede udrulning i produktion. Rapportér både medianen og en høj percentil, ikke blot et gennemsnit, efter emne 1.6's vejledning om skæve tidsbaserede data, og hold øje med definitionsafdrift i begge endepunkter, som pynter på tallet uden nogen reel forbedring.

### Definér andel af ændringer, der fejler, skriftligt, før du sammenligner på tværs af teams

**Andel af ændringer, der fejler,** måler procentdelen af udrulninger, der forårsager en fejl, der kræver afhjælpning, en tilbagerulning, en hotfix eller en hændelse. Det er den sværeste af de fire at definere konsekvent, fordi "fejl" ikke er selvindlysende objektivt. Bliv enige om en skriftlig definition, før du sammenligner teams; uden den kan en tilsyneladende retfærdig sammenligning vildlede groft. Hold øje med mistænkeligt hurtig forbedring uden nogen underliggende procesændring bag, det klareste tegn på definitionsmanipulation frem for reel fremgang.

### Mål genoprettelsestid fra opdagelsen, ikke fra udrulningsbegivenheden

**Genoprettelsestid efter mislykket udrulning** måler, hvor lang tid det tager at genoprette tjenesten, når en udrulning forårsager en fejl. Start uret ved opdagelsen, ikke ved selve udrulningsbegivenheden, så tallet afspejler reel genoprettelsesforsinkelse frem for et hul i overvågningen. Investér specifikt i automatiseret tilbagerulningsevne, det enkeltstående mest almindelige håndtag til at forbedre denne metrik reelt frem for ved at erklære en hændelse løst for tidligt.

### Brug flowmetrikker, ikke DORA, til at diagnosticere, hvorfor et tal bevægede sig

Når en DORA-metrik skifter, forklarer de fire tal alene sjældent hvorfor. Brug opdeling af cyklustid (emne 2.6), flowbelastning (emne 2.4) og flowfordeling (emne 2.3) som det diagnostiske lag under DORAs sammenfattende tal, og brug aldrig en DORA-metrik i en individuel præstationssamtale, det enkeltstående mest skadelige misbrug, dette framework er udsat for.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Fuldt DORA-framework, alle fire metrikker parret | Forskningsvalideret, modstår manipulation gennem parring, muliggør retfærdig sammenligning på tværs af teams | Tavs om, hvilken slags værdi der leveres; har brug for Flow Framework ved siden af for det billede |
| DORA som denne dels eneste organiserende metriksæt | Enkelt, velkendt for de fleste ingeniørledere | Misser spørgsmålet om værdiblanding fuldstændigt, denne bogs grund til at nedprioritere det her |
| DORA plus Flow Framework sammen | Både pipelinens mekanik og værdiblandingen er synlige | Kræver vedligeholdelse af to metrikordforråd i stedet for ét |
| DORA anvendt på individniveau | Føles direkte handlingsrettet for nogle ledere | Bryder frameworkets statistiske validitet; stærk eksponering for Goodharts lov |

Den centrale spænding er **mekanisk strenghed versus forretningslæsbarhed**. DORAs fire metrikker er præcist definerede og forskningsvaliderede, hvilket gør dem fremragende til at sammenligne pipelinepræstation på tværs af teams, men den samme præcision er snævert afgrænset til selve pipelinen og siger intet om, hvorvidt det rette arbejde strømmer gennem den. Løs spændingen ved at beholde DORA som et referencelag for pipelinens sundhed, emne 2.10's rette plads i denne bogs struktur, mens du bruger emnerne om Flow Framework tidligere i denne del til det forretningsvendte spørgsmål om værdiblanding, frem for at forsøge at få DORA til at besvare et spørgsmål, det aldrig var designet til.

## Spørgsmål at drøfte med dit team

1. **Instrumenterer vi alle fire DORA-metrikker fra pipelinen, eller er nogle af dem selvrapporterede estimater?** Et framework bygget på objektiv, forskningsvalideret måling mister meget af sin værdi i det øjeblik, et tal bliver et kvalificeret gæt. Gennemgå hver metriks faktiske datakilde (emne 1.5).

2. **Deler alle de teams, vi sammenligner ved hjælp af DORA-metrikker, de samme definitioner af udrulning, ændring og fejl?** En sammenligning mellem teams, der bruger forskellige definitioner, er ikke reelt en sammenligning og kan give urimelige domme om relativ præstation.

3. **Har nogen i vores organisation brugt en DORA-metrik i en individuel præstationssamtale, formelt eller uformelt?** Det er det enkeltstående mest skadelige misbrug af frameworket og sker ofte i det stille. Spørg direkte, og vær forberedt på et ubehageligt, men nødvendigt svar.

4. **Kunne vores DORA-tal være fremragende, mens vores flowfordeling (emne 2.3) i det stille er drevet mod omarbejde eller væk fra funktioner?** Det er netop det hul, DORA alene ikke kan se. Træk begge sæt tal frem sammen, og kontrollér, om de fortæller en konsistent historie.

5. **Når en af vores DORA-metrikker bevæger sig, har vi så de diagnostiske flowmetrikker til at forklare hvorfor?** Et DORA-tal alene fortæller dig, at noget ændrede sig, ikke hvad. Kontrollér, om jeres teams kan besvare "hvorfor steg gennemløbstiden denne måned" med data, eller kun med spekulation.

6. **Hvordan ville vores fire DORA-tal ændre sig, hvis vi bevidst forsøgte at manipulere hvert enkelt, og ville vi bemærke det?** Gennemgå udrulningsfrekvens, gennemløbstid, andel af ændringer, der fejler, og genoprettelsestid én ad gangen, den praktiske anvendelse af emne 1.2's kernedisciplin på dette specifikke framework.

## Sektorperspektiv

**Startup.** DORAs hastighedsmetrikker kommer som regel naturligt for et lille team, der allerede udruller hyppigt; den sværere disciplin er at instrumentere andelen af ændringer, der fejler, og genoprettelsestid ærligt frem for at antage stabilitet, fordi intet er gået slemt i stykker endnu. At parre DORA med selv en uformel opdeling i flowelementer (emne 2.2) tidligt undgår at opbygge en falsk fornemmelse af leveringens sundhed omkring pipelinehastighed alene.

**Mindre virksomhed.** De fleste moderne CI/CD- og versionsstyringsplatforme eksporterer data om udrulningsfrekvens og gennemløbstid med minimal opsætning; at forbinde udrulninger med hændelser til andelen af ændringer, der fejler, kræver typisk mere manuel indsats. Start med de to hastighedsmetrikker, og tilføj stabilitetssporing, så snart der findes en uformel hændelseslog at linke mod.

**Stor virksomhed.** DORAs største resterende værdi i denne skala er retfærdig, konsekvent sammenligning på tværs af teams til beslutninger om platformsinvesteringer. Standardisér definitioner i hele organisationen (emne 1.4), automatisér instrumenteringen centralt, og par hver DORA-rapport med en visning af flowfordeling, så ledelsen ser både pipelinehastighed og værdiblanding sammen, ikke den ene uden den anden.

**Offentlig sektor.** DORA-metrikker giver stadig et moderniseringsprogram en forsvarlig, forskningsunderbygget måde at påvise forbedring af leveringens mekanik over for tilsynsorganer. Rapportér alle fire metrikker sammen, vælg aldrig kun den flatterende halvdel, og par dem med flowfordeling, så rapporten også besvarer det sværere, vigtigere spørgsmål om, hvad den hurtigere pipeline faktisk leverer.

## Eksempler

**Stor virksomhed.** Et stort telekommunikationsfirmas platformsmoderniseringsprogram instrumenterede alle fire DORA-metrikker konsekvent på tværs af fyrre produktteams og viste en reel bevægelse fra lav- til højtpræsterende bånd over atten måneder, udrulningsfrekvens op cirka ti gange, gennemløbstid ned fra uger til dage, andel af ændringer, der fejler, holdt fladt. Et bestyrelsesmedlem, der gennemgik præsentationen, stillede et spørgsmål, DORA-tallene alene ikke kunne besvare: hvor meget af den hurtigere levering var ny kundeværdi versus omarbejde. Ingeniørorganisationen havde intet svar, før den indførte klassifikation af flowelementer det følgende kvartal, som viste, at funktionsarbejde faktisk var faldet som andel af det samlede output, selv mens DORAs hastighedstal blev forbedret, et fund, der omformede programmets prioriteter for det kommende år.

**Offentlig sektor.** En delstatsregerings kontor for it-modernisering indførte DORA-metrikker som en kontraktbetingelse for at sammenligne leveringsevnen hos flere konkurrerende leverandørteams, en effektiv brug af frameworkets sammenlignelighed. En leverandørs høje udrulningsfrekvens viste sig, da andelen af ændringer, der fejler, blev krævet ved siden af, at korrelere med en fejlrate næsten tre gange højere end konkurrenternes, information, der direkte informerede kontorets beslutning om kontraktfornyelse. Kontoret tilføjede senere et krav om flowfordeling til de samme kontrakter, efter at have opdaget, at den leverandør med de bedste DORA-tal også var den, der brugte den mindste andel af kapaciteten på det sikkerhedsafhjælpende arbejde, kontrakten specifikt krævede.

## Business case: motiver, ROI og TCO

Afkastet af at indføre DORA godt, inden for dets rette omfang, er et forsvarligt, belægsbaseret svar på "bliver vores leveringspipeline hurtigere og mere sikker", hvilket stadig er et af de mere håndterlige spørgsmål i ingeniørarbejde at besvare med sikkerhed. Det svar begrunder platforms- og værktøjsinvesteringer med reelle tal og lader ledelsen sammenligne konkurrerende investeringer på et retfærdigt, konsekvent grundlag, præcis som det altid har gjort.

De samlede ejeromkostninger er integrationsarbejdet, der forbinder udrulningsbegivenheder med hændelsesoptegnelser for andelen af ændringer, der fejler, og genoprettelsestid, ikke trivielt på tværs af et stort, heterogent værktøjslandskab. Den yderligere pris for at parre DORA med emnerne om Flow Framework tidligere i denne del er forholdsvis lille, da klassifikation af flowelementer er en rapporteringskonvention lagt oven på eksisterende arbejde, ikke et parallelt målesystem, og afkastet, at fange netop den blinde vinkel omkring værdiblanding, som telekommunikationseksemplet ovenfor illustrerer, er den beskedne ekstra investering vel værd.

## Antimønstre og faldgruber

- **At behandle DORA som hele billedet af leveringens sundhed:** manipulationsvektoren, som dette emnes placering er designet til at modvirke. En organisation kan fremlægge reelt fremragende DORA-tal, hurtige, hyppige, stabile udrulninger, mens dens faktisk leverede værdi i det stille er skiftet mod omarbejde eller væk fra funktioner, og DORAs fire metrikker alene vil aldrig afsløre det skift, fordi de aldrig var designet til at måle det. Værnet er at parre hver DORA-rapport med flowfordeling (emne 2.3), så en hurtig, stabil pipeline, der leverer den forkerte blanding af arbejde, er synlig frem for forvekslet med reel leveringssundhed.
- **At rapportere kun hastighedshalvdelen af DORA:** underminerer frameworkets centrale fund, at hastighed og stabilitet bevæger sig sammen hos højtpræsterende.
- **At bruge DORA-metrikker i individuelle præstationssamtaler:** bryder frameworkets statistiske validitet og inviterer til stærk manipulation.
- **At sammenligne teams med uensartede definitioner:** producerer sammenligninger, der ser retfærdige ud, men ikke er det.
- **Selvrapporterede DORA-tal i stedet for pipelineinstrumenterede:** indfører netop den bias, frameworket blev designet til at fjerne.
- **At behandle DORA som diagnostisk frem for sammenfattende:** efterlader et team ude af stand til at forklare, hvorfor et tal bevægede sig, uden flowmetriklaget under.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** DORA-metrikker, hvis de overhovedet følges, er selvrapporterede, uensartet definerede og aldrig parret med flowdata.
- **Niveau 2, Udvikl:** Nogle teams instrumenterer DORA fra pipelinen, men definitionerne varierer, og der er ingen modpart i flowfordeling at kontrollere mod.
- **Niveau 3, Standardisér:** Alle fire DORA-metrikker instrumenteres konsekvent ud fra pipeline- og hændelsesdata, med fælles definitioner, og vises rutinemæssigt sammen med flowfordeling.
- **Niveau 4, Styr:** DORA og flowmetrikker gennemgås sammen som en standardparring på alle niveauer i organisationen, og DORA bruges aldrig til individuel vurdering.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke tilfælde, hvor flowfordeling fangede et problem med værdiblanding, som fremragende DORA-tal alene havde skjult, og bruger bevidst begge frameworks til de forskellige spørgsmål, hvert af dem besvarer.

## Idéer til drøftelse

1. Hvor placerer vores fire DORA-metrikker os i øjeblikket på spektret af præstationsniveauer, ærligt talt?
2. Kunne vores DORA-tal se fremragende ud, mens vores flowfordeling i det stille er drevet? Har vi nogensinde tjekket?
3. Har nogen nogensinde brugt et DORA-tal til at dømme en enkeltperson, selv uformelt?
4. Hvis en konkurrent offentliggjorde sine DORA-tal, ville vores så se godt ud i sammenligning, og ville den sammenligning faktisk fortælle os, hvem der leverer mest reel værdi?

## Vigtigste pointer

- DORAs fire metrikker, **udrulningsfrekvens, gennemløbstid, andel af ændringer, der fejler, og genoprettelsestid**, parrer hastighed med stabilitet efter design og er stadig reelt forskningsvaliderede.
- Denne bog placerer DORA **sidst i denne del**, fordi det måler pipelinen, ikke den værdi, der strømmer gennem den; par det med flowfordeling (emne 2.3) for det fuldere billede.
- Emnets centrale manipulationsvektor er **at forveksle fremragende DORA-tal med fuldstændig leveringssundhed**; værnet er altid at rapportere DORA ved siden af flowfordeling.
- **Brug aldrig DORA-metrikker i individuelle præstationssamtaler**; frameworkets validitet afhænger af måling på systemniveau, ikke individniveau.
- Brug **flowmetrikker som det diagnostiske lag** under DORAs sammenfattende tal, når et af dem bevæger sig.

## Kilder og videre læsning

- Forsgren, Nicole, Jez Humble og Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment-programmet. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois og John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
