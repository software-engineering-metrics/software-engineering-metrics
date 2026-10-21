# 5.2 Metrikker for funktionsadoption og brug

## Overblik og motivation

**Funktionsadoption (feature adoption)** måler, om de mennesker, en funktion blev bygget til, faktisk bruger den, med hvilken rate, og om den brug vedvarer over tid. Den er, i meget direkte forstand, virkelighedstjekket på alt, hvad del 2 til 4 af denne bog måler: en organisation kan udrulle hyppigt, bevare fremragende udvikleroplevelse og levere fejlfrit afprøvet kode og stadig bygge ting, ingen vil have. Adoptionsdata er, hvor en ingeniørorganisation finder ud af, om dens output overhovedet forbandt sig til noget reelt resultat, hvilket netop er skellet mellem input, output og resultat, emne 1.3 introducerede, anvendt på det mest konkrete tilfælde i denne bog: en specifik, leveret funktion.

Dette emnes centrale bekymring er, at adoptionsdata, mere end næsten nogen anden metrikfamilie i denne bog, er lette at måle på en måde, der smigrer frem for at informere. En funktion kan vise imponerende indledende adoption udelukkende af nysgerrighed eller tvungen eksponering (en modal, der vises, uanset om brugeren vil have den eller ej), mens reel, vedvarende levering af værdi, målt ved om folk bliver ved med at bruge den, når nyhedens interesse falmer, fortæller en helt anden historie. At skelne reel adoption fra en midlertidig top er dette emnes centrale tekniske udfordring, og at få det forkert fører rutinemæssigt organisationer til at fejre funktioner, der i det stille fejler, og opgive nogle, der netop var begyndt at finde deres publikum.

For store teams er data om funktionsadoption det, der gør prioritering af køreplanen belægsbaseret frem for drevet af den, der mest overbevisende går ind for sit eget teams arbejde. Store virksomheder, der styrer store produktporteføljer, har brug for adoptionsdata til at identificere, hvilke investeringer der fortjener deres plads; offentlige organisationer, der bygger borgervendte digitale tjenester, har brug for dem til at påvise, at offentlig investering producerede tjenester, folk faktisk bruger, ikke blot tjenester, der teknisk set findes.

## Nøgleprincipper

- **Indledende adoption og vedvarende adoption er forskellige signaler.** En top af nysgerrighed eller tvungen eksponering er ikke det samme som reel, varig leverance af værdi.
- **Adoption bør måles i forhold til den målgruppe, den blev bygget til,** ikke i forhold til hele din brugerbase vilkårligt.
- **En funktion med lav adoption er ikke automatisk en fiasko.** Den kan være dårligt opdaget, dårligt målrettet eller blot ny; undersøg, før du konkluderer.
- **Fastholdelse af brug betyder mere end ét enkelt øjebliksbillede af adoption.** Følg, om folk, der prøvede en funktion, bliver ved med at vende tilbage til den.
- **Adoptionsdata er udsat for manipulation gennem tvungen eksponering eller dark patterns.** Et tal pustet op ved at gøre en funktion svær at undgå er ikke et reelt signal.

## Anbefalinger

### Skel mellem indledende afprøvning og vedvarende fastholdelse

Følg to separate tal: den procentdel af din målgruppe, der prøver en funktion mindst én gang (indledende adoption), og den procentdel, der stadig bruger den efter en meningsfuld periode, såsom fire eller otte uger (fastholdt adoption). En funktion med høj indledende afprøvning og lav fastholdelse tyder på, at findbarheden virkede, men at funktionen selv ikke leverede nok værdi til at få folk til at vende tilbage, en meget anden diagnose, og en meget anden løsning, end lav indledende afprøvning med høj fastholdelse, som tyder på en reelt værdifuld funktion, som ikke nok mennesker kender til.

### Definér målgruppen præcist, før du måler adoption

Adoption målt i forhold til hele din brugerbase kan være vildledende, hvis en funktion kun nogensinde var tænkt til et specifikt segment: en funktion til administratorer i virksomheder, målt mod en overvejende individuel brugerbase, vil altid se ud, som om den har forfærdelig adoption, uanset hvor godt den faktisk tjener dem, den blev bygget til. Definér den tilsigtede målgruppe eksplicit før lancering, og mål adoption mod netop den nævner, ikke dit samlede antal brugere.

### Undersøg lav adoption, før du konkluderer, at en funktion mislykkedes

Et lavt adoptionstal har flere mulige årsager, der kalder på meget forskellige svar: funktionen er reelt ikke værdifuld, funktionen er værdifuld, men dårligt opdagelig (brugerne ved ikke, at den findes), funktionen er værdifuld, men dårligt forklaret (brugerne ser den, men forstår ikke dens formål), eller måleperioden er simpelthen for kort til, at en langsommere adopteret funktion endnu har fundet sit publikum. Undersøg, hvilken af disse der gælder, før du beslutter at investere yderligere, redesigne eller udfase.

### Hold øje med adoption pustet op af tvungen eksponering eller [dark patterns](https://en.wikipedia.org/wiki/Dark_pattern)

Et adoptionstal drevet af, at en funktion er svær at undgå, et påtrængende onboardingforløb, en modal, en bruger skal lukke, en standard, der er svær at ændre, måler ikke reel levering af værdi, og at fejre det, som om det gjorde, gentager emne 1.2's mønster med substitutionsmanipulation i produktform. Par rå adoptionstal med et signal om tilfredshed eller af Net Promoter-typen for den specifikke funktion, hvor det er muligt, så tvungen eksponering, der ikke omsættes til reel tilfredshed, fanges frem for fejres.

### Forbind tendenser i adoption tilbage til specifikke produkt- og ingeniørbeslutninger

Når adoptionen uventet stiger eller falder, så spor ændringen tilbage til en specifik beslutning, en ændring i brugerfladen, en ændring af standardindstillinger, et marketingtryk, en forbedring eller forringelse af ydeevnen, frem for at behandle bevægelsen som et uforklaret mysterium. Det forbinder adoptionsdata med handlingsrettet læring i produkt og ingeniørarbejde og lukker løkken mellem en specifik ændring og dens målte effekt på reel brug.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Måling i forhold til den samlede brugerbase | Enkel, én enkelt nævner | Vildledende for funktioner rettet mod et specifikt segment |
| Måling i forhold til defineret målgruppe | Retfærdig, nøjagtig afspejling af den tilsigtede rækkevidde | Kræver bevidst definition af målgruppen før lancering |
| Kun indledende afprøvning | Hurtigt signal, tilgængeligt hurtigt efter lancering | Misser, om funktionen leverer varig værdi |
| Indledende afprøvning plus fastholdelse | Skelner nysgerrighed fra reel værdi | Kræver længere ventetid (uger), før et fuldt billede opstår |

Den centrale spænding er **hastighed versus ærlighed**. Data om indledende afprøvning er tilgængelige næsten umiddelbart efter lancering og tilfredsstiller det organisatoriske pres for at rapportere tidlige resultater, men de kan ikke i sig selv skelne nysgerrighed eller tvungen eksponering fra reel, varig værdi. Løs spændingen ved at rapportere data om indledende afprøvning tidligt og tydeligt mærket som foreløbige, mens du offentligt forpligter dig til en opfølgende aflæsning af fastholdelse med et fast, forudbestemt interval, så tidlig begejstring ikke stivner til en uundersøgt succeshistorie, før det reelle signal har haft tid til at komme frem.

## Spørgsmål at drøfte med dit team

1. **For vores senest leverede funktion: kender vi indledende afprøvning og fastholdt brug hver for sig eller kun ét samlet tal?** Hvis kun et samlet tal findes, skjuler det hul netop det skel mellem nysgerrighed og værdi, dette emne behandler som centralt.

2. **Blev målgruppen for denne funktion defineret eksplicit før lancering, og måler vi adoption i forhold til netop den gruppe?** Kontrollér, om jeres nuværende nævner for adoption matcher, hvem funktionen faktisk blev bygget til, eller om den er udvandet ved at måle mod en irrelevant bredere population.

3. **For en funktion med lav adoption: har vi undersøgt, hvilken af de flere mulige årsager, lav værdi, dårlig findbarhed, dårlig forklaring, utilstrækkelig tid, der faktisk gælder?** Gennemgå denne specifikke diagnostiske liste for en reel, aktuel funktion med lav adoption frem for som standard at falde tilbage på "den må ikke være værdifuld".

4. **Er nogen del af vores rapporterede adoptionstal pustet op af tvungen eksponering, en påtrængende standard eller en modal, der skal lukkes, frem for reel, frivillig brug?** Vær ærlig her; det er et almindeligt og let mønster at falde i, især under pres for at vise tidlige positive resultater.

5. **Når adoptionen af en funktion bevægede sig væsentligt, kunne vi så spore den bevægelse tilbage til en specifik ændring, vi havde foretaget?** Hvis svaret som regel er "det er vi ikke sikre på", begrænser det hul, hvor meget jeres organisation faktisk kan lære af sine egne adoptionsdata over tid.

6. **Parrer vi adoptionstal med noget signal om tilfredshed for den samme funktion, eller følger vi kun rå brug?** Et højt adoptionstal parret med lav tilfredshed er et advarselstegn, som rå brug alene ville misse fuldstændigt.

## Sektorperspektiv

**Startup.** Funktionsadoption er ofte det enkeltstående vigtigste signal, en ung virksomhed har, tæt forbundet med selve product-market fit. Følg specifikt fastholdelse, ikke blot indledende afprøvning, fra allerførste lancering af en funktion, da det at skelne reel værdi fra tidlig nysgerrighed er afgørende, når virksomhedens overlevelse kan afhænge af at få den diagnose rigtig.

**Mindre virksomhed.** De fleste analyseplatforme rapporterer grundlæggende brugsdata med minimal opsætning; den vigtigste disciplin er at definere din målgruppe klart før måling, frem for at rapportere adoption mod hele din kundebase uanset, hvem en specifik funktion faktisk blev bygget til.

**Stor virksomhed.** Adoptionsdata er i denne skala afgørende for retfærdig, belægsbaseret prioritering af køreplanen på tværs af en stor produktportefølje, og disciplinen i at skelne indledende afprøvning fra vedvarende fastholdelse betyder endnu mere her, da en tilstrækkelig stor brugerbase kan producere en imponerende udseende indledende top for næsten enhver lancering uanset reel værdi.

**Offentlig sektor.** Adoption af en borgervendt digital tjeneste er et direkte, konkret mål for, om offentlig investering blev omsat til reel offentlig nytte, og er ofte en langt mere overbevisende metrik for et tilsynsorgan end et leverings- eller aktivitetsantal. Mål adoption i forhold til den population, tjenesten faktisk blev bygget til at betjene, og vær ærlig om barrierer (digital færdighed, adgang, kendskab), der kan forklare lav adoption ud over tjenestens eget design.

## Eksempler

**Stor virksomhed.** Et softwarefirma til projektstyring lancerede en ny funktion til samarbejdsredigering og fejrede en imponerende indledende afprøvningsrate på 60 % inden for de første to uger. En opfølgende aflæsning af fastholdelse efter otte uger viste, at kun 8 % af de indledende afprøvere stadig brugte funktionen regelmæssigt, hvilket afslørede, at den høje afprøvningsrate næsten udelukkende var drevet af et fremtrædende, svært at afvise tooltip i onboarding frem for reel, vedvarende interesse. En undersøgelse af kvalitativ feedback fra tidlige afprøvere, der var holdt op med at bruge funktionen, afslørede et specifikt problem med brugervenlighed, der kunne rettes, et uintuitivt interaktionsmønster, som et målrettet redesign adresserede, og den fastholdte brug næsten tredobledes efter rettelsen, selv om den aldrig nærmede sig det vildledende høje tal for indledende afprøvning.

**Offentlig sektor.** En national beskæftigelsestjeneste lancerede et nyt onlineværktøj til jobmatch og rapporterede først adoption mod myndighedens hele registrerede brugerbase, hvilket producerede en nedslående lav procentdel, der truede programmets fortsatte finansiering. En revideret analyse, der målte adoption specifikt mod den delmængde af registrerede brugere, der aktivt søgte arbejde i værktøjets målbrancher, den faktiske tilsigtede målgruppe, viste en væsentligt højere og mere nøjagtig adoptionsrate. Kombineret med en målrettet opsøgende kampagne specifikt til den definerede målgruppe og en efterfølgende aflæsning af fastholdelse, der viste stærk vedvarende brug blandt de brugere, der havde adopteret, sikrede programmet fortsat finansiering baseret på den rettede, ærligt målrettede metrik frem for det vildledende udvandede oprindelige tal.

## Business case: motiver, ROI og TCO

Afkastet af stringent måling af funktionsadoption er belægsbaseret investering i køreplanen: en organisation, der kan skelne reel, fastholdt værdi fra nysgerrighedsdrevet indledende afprøvning, kan selvsikkert investere yderligere i funktioner, der reelt virker, og omdirigere indsatsen væk fra dem, der ikke gør, frem for at jagte en vildledende indledende top eller for tidligt opgive en reelt værdifuld, men langsomt opdaget funktion.

De samlede ejeromkostninger er for det meste analyseinstrumentering, som som regel allerede er tilgængelig i de fleste moderne platforme til produktanalyse, plus disciplinen i eksplicit at definere målgrupper og forpligte sig til opfølgende aflæsninger af fastholdelse frem for at stoppe ved et tidligt, ufuldstændigt signal. Den disciplin koster lidt og forebygger den langt dyrere fejl at fejllæse enten en falsk succes eller en falsk fiasko.

## Antimønstre og faldgruber

- **At rapportere kun indledende afprøvning, aldrig fastholdelse:** kan ikke skelne nysgerrighed eller tvungen eksponering fra reel, varig værdi.
- **At måle adoption mod den forkerte nævner:** udvander eller pumper signalet op for funktioner rettet mod et specifikt målgruppesegment.
- **At konkludere, at en funktion mislykkedes, uden at undersøge den specifikke årsag** til lav adoption: risikerer at opgive en reelt værdifuld, men dårligt opdaget eller dårligt timet funktion.
- **At fejre adoption pustet op af tvungen eksponering eller dark patterns:** en produktside-udgave af emne 1.2's substitutionsmanipulation.
- **Aldrig at spore bevægelser i adoption tilbage til specifikke beslutninger:** begrænser den organisatoriske læring fra organisationens egne data.
- **At følge brug uden noget parret signal om tilfredshed:** misser tilfældet, hvor høj brug sameksisterer med lav reel værdi eller tilfredshed.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Adoption måles ikke, eller kun ét enkelt, tidligt, ikke fastholdt tal for afprøvning rapporteres.
- **Niveau 2, Udvikl:** Noget sporing af adoption findes, men målgrupper er ikke defineret præcist, og fastholdelse måles uensartet.
- **Niveau 3, Standardisér:** Indledende afprøvning og fastholdt adoption følges begge konsekvent i forhold til en præcist defineret målgruppe for hver større funktion.
- **Niveau 4, Styr:** Funktioner med lav adoption undersøges systematisk for specifik grundårsag, før en beslutning om at redesigne eller udfase; adoption parres med data om tilfredshed.
- **Niveau 5, Orkestrér:** Adoptionsdata informerer direkte og rutinemæssigt prioritering af køreplanen og investeringsbeslutninger, og organisationen kan med sikkerhed spore specifikke bevægelser i adoption tilbage til specifikke produkt- og ingeniørbeslutninger.

## Idéer til drøftelse

1. Hvilken nylig funktion er et eksempel på, at vores indledende afprøvning og fastholdt adoption fortalte meget forskellige historier?
2. Blev vores sidste funktions målgruppe defineret præcist før lancering eller først bagefter?
3. Hvilken funktion med lav adoption fortjener en ærlig undersøgelse af grundårsagen, før vi beslutter dens skæbne?
4. Er nogen del af vores nuværende rapportering om adoption pustet op af tvungen eksponering?
5. Hvad ville det afsløre om vores mest brugte funktion at parre adoptionsdata med data om tilfredshed?

## Vigtigste pointer

- Skeln **indledende afprøvning fra vedvarende fastholdelse**; en top af nysgerrighed eller tvungen eksponering er ikke reel, varig værdi.
- Mål adoption i forhold til en **præcist defineret målgruppe**, ikke en irrelevant bredere brugerbase.
- **Undersøg den specifikke årsag** til lav adoption, før du konkluderer, at en funktion mislykkedes; flere meget forskellige årsager kalder på meget forskellige svar.
- Hold øje med adoption **pustet op af tvungen eksponering eller dark patterns**, og par adoption med et **signal om tilfredshed** for at fange det.
- **Spor bevægelser i adoption tilbage til specifikke beslutninger** for at omsætte dataene til reel organisatorisk læring.

## Kilder og videre læsning

- *Lean Analytics*, af Alistair Croll og Benjamin Yoskovitz (handlingsrettede versus forfængelighedsmetrikker anvendt på brugsdata for produkter).
- *Continuous Discovery Habits*, af Teresa Torres (at forbinde produktbeslutninger med belæg for kunderesultater, herunder adoptionsdata).
- *Hooked: How to Build Habit-Forming Products*, af Nir Eyal (fastholdelse og vanedannelse og den etiske grænse mellem reel værdi og dark patterns).
- *Measure What Matters*, af John Doerr (resultatorienteret målsætning, der kan anvendes på fastsættelse af mål for adoption).
