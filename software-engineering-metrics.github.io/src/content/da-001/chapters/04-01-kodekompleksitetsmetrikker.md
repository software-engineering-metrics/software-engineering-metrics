# 4.1 Kodekompleksitetsmetrikker

## Overblik og motivation

**[Cyklomatisk kompleksitet](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, introduceret af Thomas J. McCabe i 1976, tæller antallet af uafhængige stier gennem et stykke kodes kontrolflow: hver `if`, løkke og forgrening lægger til optællingen. Den er stadig den mest udbredte metrik for kodekompleksitet næsten halvtreds år senere, ved siden af slægtninge som kognitiv kompleksitet (som vægter indlejret og svært forståeligt kontrolflow tungere end McCabes oprindelige lineære optælling) og indlejringsdybde. Disse metrikker deler en reel, valideret indsigt: kode med flere uafhængige stier gennem sig er sværere at teste fuldt ud, sværere at ræsonnere om og, i årtiers empirisk forskning, målbart mere tilbøjelig til at indeholde fejl.

Dette emne behandler den indsigt med reel respekt, mens det behandler dens grænser med lige så stor alvor. Kompleksitetsmetrikker måler én specifik egenskab ved kode, og en kodebase kan være simpel efter hver kompleksitetsmetrik, mens den stadig er dårligt designet, dårligt navngivet eller begrebsmæssigt usammenhængende på måder, ingen forgreningstællende algoritme kan opdage. Omvendt kræver nogle uomgængeligt komplekse problemer reelt kompleks kode for at blive løst korrekt, og et team, der presses til at minimere en kompleksitetsscore, kan producere kode, der scorer godt, mens den faktisk er sværere at forstå, ved at sprede væsentlig kompleksitet ud over flere filer og lag af indirekte henvisninger frem for at reducere den.

For store teams fortjener kompleksitetsmetrikker deres plads som et værktøj til triage: en måde at finde, blandt tusindvis af filer, den lille delmængde, der mest sandsynligt giver udbytte ved et nærmere kig, ikke som en selvstændig dom over kodekvalitet. Store virksomheder og offentlige organisationer, der vedligeholder kodebaser, der er for store til, at nogen enkeltperson har læst dem fuldt, er afhængige af denne triagefunktion til at rette knap indsats til refaktorering og gennemgang derhen, hvor den gør mest gavn.

## Nøgleprincipper

- **Kompleksitetsmetrikker forudsiger, hvor svært det er at teste, og risikoen for fejl; de måler ikke kvalitet direkte.** Behandl dem som ét input, ikke en dom.
- **En kompleksitetsscore er udsat for manipulation gennem tilsløring, ikke blot reel forenkling.** At sprede kompleksitet ud over flere filer kan sænke scoren uden egentlig at gøre koden lettere at forstå.
- **Noget kompleksitet er væsentlig, ikke tilfældig.** Et reelt svært problem kan kræve reelt kompleks kode; målet er at minimere tilfældig kompleksitet, ikke vilkårligt at eliminere al kompleksitet.
- **Brug kompleksitetsmetrikker til triage, ikke som et individuelt eller teambaseret scorecard.** De peger på, hvor man skal kigge, ikke på, hvem man skal give skylden.
- **Tendens og outliers betyder mere end nogen absolut tærskel.** En stigende tendens eller en ekstrem outlier er mere handlingsrettet end et enkelt gennemsnit for hele teamet.

## Anbefalinger

### Brug kompleksitetsmetrikker til triage af indsats til gennemgang og refaktorering

Kør kompleksitetsanalyse på tværs af kodebasen, og brug resultaterne til at prioritere, hvor en nærmere menneskelig gennemgang eller en investering i refaktorering vil betale sig mest: funktioner eller filer, der scorer langt over kodebasens egen typiske variation, er de mest værdifulde steder at kigge først. Den triagebrug, at finde ud af, hvor man skal kigge, er kompleksitetsmetrikkers mest forsvarlige og værdifulde anvendelse, langt mere end at bruge dem som en absolut bestået/ikke-bestået-port.

### Sæt tærskler i forhold til din egen kodebase, ikke et universelt tal

Absolutte tærskler for kompleksitet, lånt ukritisk fra branchekonventionen (en kompleksitetsscore på ti er en ofte citeret tommelfingerregel), kan være enten for lempelige eller for strenge afhængigt af dit domæne: en parser eller en regelmotor kan have legitimt højere grundkompleksitet end en typisk CRUD-tjeneste. Kalibrér dine egne tærskler mod din kodebases faktiske fordeling, og behandl en overskridelse af en tærskel som en opfordring til at kigge nærmere, ikke en automatisk buildfejl, medmindre dit team bevidst har valgt den strengere politik med fuld bevidsthed om dens afvejninger.

### Hold øje med manipulation gennem opdeling uden reel forenkling

Den mest almindelige måde, kompleksitetsscorer bliver manipuleret på, er emne 1.2's substitutionsmønster anvendt på netop denne metrik: at dele én reelt kompleks funktion op i flere mindre funktioner, der hver især scorer godt, mens det samlede system forbliver lige så svært at forstå, eller undertiden bliver sværere, fordi logikken nu er spredt over flere filer med mere indirekte henvisning imellem dem. Par kompleksitetsmetrikker med en kvalitativ gennemgang af, om opdelingen reelt klargjorde koden, eller blot flyttede kompleksiteten til et sted, hvor metrikken ikke længere kunne se den.

### Skel mellem væsentlig og tilfældig kompleksitet, før du reagerer

Før du behandler en høj kompleksitetsscore som et problem, der skal rettes, så spørg, om det underliggende problem reelt kræver så mange uafhængige stier, logikken i beregning af skatteregler har for eksempel legitimt mange forgreninger, eller om kompleksiteten kommer af undgåelige årsager: dybt indlejrede betingelser, der kunne fladgøres, duplikeret logik, der kunne konsolideres, eller uklare grænser for ansvar, der kunne trækkes om. Kun den anden kategori er et reelt kvalitetsproblem, som denne metrik bør drive dig til at rette.

### Følg tendens og outliers, ikke blot et gennemsnit som øjebliksbillede

Et gennemsnit for kompleksitet for hele kodebasen, der bevæger sig lidt, er sjældent handlingsrettet i sig selv; en specifik fils kompleksitet, der stiger kraftigt over flere ændringer, eller et lille antal ekstreme outliers i en ellers velopdragen kodebase, er langt mere nyttige signaler. Følg både tendensen over tid og halen af outliers, og brug dem til at udløse en specifik, målrettet undersøgelse frem for et bredt, ufokuseret initiativ til reduktion af kompleksitet.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Absolut universel tærskel | Enkel, konsekvent, let at automatisere | Ignorerer legitime forskelle mellem domæner; kan manipuleres ved opdeling |
| Tærskel i forhold til kodebasen | Bedre kalibreret til den faktiske kontekst | Kræver mere opsætning og periodisk rekalibrering |
| Kompleksitet som automatiseret buildport | Håndhæver konsistens uden overhead for menneskelig gennemgang | Kan blokere legitimt kompleks, men godt designet kode eller belønne tilsløret opdeling |
| Kompleksitet som triagesignal til menneskelig gennemgang | Fanger reelle kvalitetsproblemer, som opdeling alene ville overse | Kræver mere tid til menneskelig gennemgang end en fuldt automatiseret port |

Den centrale spænding er **automatisering versus dømmekraft**. En fuldt automatiseret kompleksitetsport er billig at håndhæve og konsekvent, men den kan både blokere legitimt kompleks, godt designet kode og belønne overfladisk opdeling, der manipulerer scoren uden reelt at forenkle noget. Løs spændingen ved at bruge automatiseret kompleksitetsanalyse til at fremdrage kandidater til gennemgang og ved at reservere selve dømmekraften, er denne kompleksitet væsentlig eller tilfældig, afklarede denne refaktorering reelt, eller flyttede den blot kompleksiteten, til en menneskelig gennemgående frem for en hård automatiseret port alene.

## Spørgsmål at drøfte med dit team

1. **Er vores tærskler for kompleksitet kalibreret til vores egen kodebases faktiske fordeling, eller lånt ukritisk fra en generisk branchekonvention?** Træk din kodebases reelle fordeling af kompleksitet, og kontrollér, om jeres nuværende tærskler giver mening i forhold til den, frem for at antage, at et ofte citeret tal gælder universelt for dit domæne.

2. **Har vi nogensinde set en funktion blive delt op i flere mindre uden at den resulterende kode faktisk blev lettere at forstå?** Det er det klareste tegn på det mønster af manipulation ved opdeling, dette emne advarer om. Se på en nylig refaktorering motiveret primært af en kompleksitetsscore, og vurdér ærligt, om den forbedrede den reelle forståelighed.

3. **Hvor i vores kodebase er kompleksiteten væsentlig for problemet, og hvor er den tilfældig og kan rettes?** Gennemgå jeres outliers med højest kompleksitet, og sortér dem eksplicit i disse to kategorier, da kun den anden kategori repræsenterer et reelt, handlingsrettet kvalitetsproblem.

4. **Bruger vi kompleksitetsmetrikker til triage af indsats til gennemgang eller som en hård automatiseret port uden nogen menneskelig dømmekraft?** Drøft, om jeres nuværende tilgang til håndhævelse levner plads til det skel mellem væsentlig og tilfældig, dette emne anbefaler, eller om den behandler hver overskridelse ens uanset konteksten.

5. **Er en kompleksitetsscore nogensinde blevet brugt, selv uformelt, til at bedømme en enkelt ingeniørs arbejdskvalitet?** Det risikerer den samme fælde med individuel vurdering, emne 3.4 advarer imod for aktivitetsmetrikker, her anvendt på kodemetrikker i stedet, og det inviterer til det samme svar med manipulation.

6. **Hvordan ser vores tendens i kompleksitet ud over det seneste år for vores mest kritiske, hyppigst ændrede filer?** Kombinér dette med analysen af kodeomsætning og hotspots fra emne 4.3, da en fil, der både er meget kompleks og hyppigt ændret, fortjener opmærksomhed længe før en, der er kompleks, men sjældent berørt.

## Sektorperspektiv

**Startup.** Kompleksitetsmetrikker er som regel mindre presserende i denne skala; kodebasen er lille nok til, at uformel fortrolighed ofte træder i stedet for formel måling. Den vane, der er værd at indføre tidligt, er blot lejlighedsvis at køre en kompleksitetsscanning for at fange en specifik fil, der i det stille bliver uhåndterlig, før teamet er vokset for stort til at bemærke det uformelt.

**Mindre virksomhed.** De fleste moderne værktøjer til statisk analyse rapporterer kompleksitetsmetrikker som en del af en bredere, gratis eller billig linting-opsætning; brug outputtet som et periodisk triagesignal frem for at investere i dedikeret værktøj. Fokusér opmærksomheden på dine hyppigst ændrede filer først.

**Stor virksomhed.** Kompleksitetsmetrikker i skala er mest værdifulde kombineret med data om kodeomsætning (emne 4.3) for at prioritere investering i refaktorering på tværs af en kodebase, der er for stor til, at nogen enkeltperson manuelt kan overskue den. Kalibrér tærskler pr. tjeneste eller domæne frem for at anvende ét tal for hele organisationen, da legitim kompleksitet varierer betydeligt på tværs af forskellige slags systemer.

**Offentlig sektor.** Langlivede offentlige systemer ophober ofte kompleksitet gradvist over år eller årtier af inkrementelle kravændringer, og en revision af kompleksitet kan være et overbevisende, konkret værktøj til at begrunde investering i modernisering eller refaktorering over for interessenter, der ellers måske blot ser systemet som "fungerende" og derfor ikke værd at investere i.

## Eksempler

**Stor virksomhed.** Et firma, der behandler betalinger, kørte for første gang en kompleksitetsrevision af hele kodebasen og fandt en enkelt funktion til validering af transaktioner med en cyklomatisk kompleksitetsscore på mere end ti gange kodebasens median. Undersøgelsen viste, at kompleksiteten næsten udelukkende var tilfældig: år med inkrementelt tilføjet håndtering af særtilfælde for specifikke betalingsudbydere havde ophobet sig til dybt indlejrede betingelser, der kunne omstruktureres til et renere strategimønster, der adskilte udbyderspecifik logik. Refaktoreringen, prioriteret direkte fordi kompleksitetsrevisionen identificerede den som det enkeltstående mest værdifulde mål i kodebasen, reducerede funktionens kompleksitetsscore med mere end 80 % og, vigtigere, reducerede fejlraten i netop den kodesti målbart i løbet af de følgende to kvartaler.

**Offentlig sektor.** En skattemyndigheds årtier gamle motor til beregning af ydelser scorede ekstremt højt på kompleksitetsmetrikker i næsten hver funktion, hvilket i første omgang førte til en antagelse om, at hele systemet havde brug for en omskrivning fra bunden. En nærmere gennemgang funktion for funktion, der skelnede væsentlig fra tilfældig kompleksitet, fandt, at det meste af kompleksiteten reelt afspejlede de underliggende juridiske regler, som reelt havde så mange legitime forgreninger og særtilfælde påbudt ved lov, mens en mindre delmængde kom af undgåelig duplikering på tværs af lignende beregningsstier. Teamet målrettede kun delmængden med tilfældig kompleksitet til refaktorering og undgik en kostbar, risikabel fuld omskrivning, mens det stadig meningsfuldt forbedrede systemets mest reelt problematiske områder.

## Business case: motiver, ROI og TCO

Afkastet af at bruge kompleksitetsmetrikker godt er målrettet, værdifuld investering i refaktorering: eksemplet med betalingsfirmaet ovenfor viser en enkelt, velrettet løsning, identificeret gennem kompleksitetsanalyse, der målbart reducerede fejl i netop den kodesti med højest risiko, til en brøkdel af prisen for et bredt, umålrettet initiativ til refaktorering.

De samlede ejeromkostninger er lave: de fleste moderne udviklingsværktøjskæder beregner kompleksitetsmetrikker automatisk som en del af statisk analyse (emne 4.4), og den reelle investering er den menneskelige dømmekrafts tid til at fortolke resultater korrekt, skelne væsentlig fra tilfældig kompleksitet og fange manipulation ved opdeling, frem for nogen betydelig ny værktøjsomkostning.

## Antimønstre og faldgruber

- **At behandle en kompleksitetsscore som en direkte dom over kvalitet:** den måler én specifik egenskab, ikke den samlede kodekvalitet.
- **At dele en funktion op for at manipulere scoren uden reel forenkling:** det mønster af manipulation ved opdeling, dette emne specifikt navngiver.
- **At anvende en universel tærskel uden at kalibrere til din egen kodebase:** producerer enten for lempelig eller for streng håndhævelse afhængigt af domænet.
- **At bruge kompleksitetsmetrikker til individuelt at vurdere ingeniører:** inviterer til manipulation og misanvender en metrik, der er ment til triage, ikke dømmekraft.
- **At behandle al kompleksitet som lige let at rette:** væsentlig kompleksitet fra et reelt svært problem er ikke en defekt, der skal elimineres.
- **At ignorere tendens og outliers til fordel for et fladt gennemsnit for hele kodebasen:** overser det mest handlingsrettede signal, denne metrikfamilie giver.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Kompleksitet måles ikke eller måles med en uundersøgt, generisk universel tærskel anvendt ukritisk.
- **Niveau 2, Udvikl:** Kompleksitetsmetrikker indsamles, men der handles sjældent på dem, og der skelnes ikke mellem væsentlig og tilfældig kompleksitet.
- **Niveau 3, Standardisér:** Tærskler er kalibreret til kodebasens egen fordeling, og kompleksitetsmetrikker driver konsekvent triage af gennemgang og refaktorering i hele organisationen.
- **Niveau 4, Styr:** Tendens og outliers i kompleksitet overvåges aktivt og kombineres med data om kodeomsætning (emne 4.3) for at prioritere investering i refaktorering; manipulation ved opdeling holdes aktivt øje med.
- **Niveau 5, Orkestrér:** Organisationen kan pege på specifikke, målbare forbedringer af fejlraten, der kan spores direkte til kompleksitetsinformeret investering i refaktorering, og kompleksitetsdata er et rutinemæssigt, betroet input til beslutninger om ingeniørinvesteringer.

## Idéer til drøftelse

1. Hvad er vores enkelt mest komplekse funktion eller fil, og er dens kompleksitet væsentlig eller tilfældig?
2. Har vi nogensinde manipuleret en kompleksitetsscore gennem opdeling uden reel forenkling?
3. Er vores tærskler kalibreret til vores egen kodebase, eller lånt ukritisk?
4. Hvor overlapper høj kompleksitet med høj kodeomsætning i vores kodebase lige nu?
5. Har kompleksitetsdata nogensinde informeret en beslutning om investering i refaktorering, eller ligger de ubrugte hen?

## Vigtigste pointer

- Kompleksitetsmetrikker som **cyklomatisk kompleksitet** forudsiger, hvor svært det er at teste, og risikoen for fejl; de måler ikke den samlede kodekvalitet direkte.
- Skeln **væsentlig kompleksitet** (fra et reelt svært problem) fra **tilfældig kompleksitet** (undgåelig gennem bedre design), før du reagerer på en høj score.
- Hold øje med **manipulation ved opdeling**: at dele kode op for at sænke en score uden reelt at forenkle noget.
- Brug kompleksitetsmetrikker til **triage**, der retter menneskelig gennemgang og indsats til refaktorering, ikke som et individuelt scorecard eller en stiv automatiseret port.
- Kalibrér tærskler til **din egen kodebases fordeling**, og følg **tendens og outliers**, ikke blot et fladt gennemsnit.

## Kilder og videre læsning

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): den oprindelige artikel om cyklomatisk kompleksitet.
- *Code Complete*, af Steve McConnell (praktisk vejledning i at styre kompleksitet ved udvikling af software).
- *Working Effectively with Legacy Code*, af Michael Feathers (teknikker til sikkert at reducere kompleksitet i eksisterende, svært ændrelig kode).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): metrikken kognitiv kompleksitet og dens skel fra cyklomatisk kompleksitet.
