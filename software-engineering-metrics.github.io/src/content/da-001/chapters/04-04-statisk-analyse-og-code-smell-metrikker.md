# 4.4 Statisk analyse og code smell-metrikker

## Overblik og motivation

Værktøjer til **[statisk analyse](https://en.wikipedia.org/wiki/Static_program_analysis)** scanner kildekode uden at udføre den og flager mønstre, der er kendt for at korrelere med fejl, sikkerhedssårbarheder eller problemer med vedligeholdelighed: utilgængelig kode, ulukkede ressourcer, mistænkelige typekonverteringer, duplikeret logik og den bredere kategori **code smells**, strukturelle mønstre, der ikke nødvendigvis er fejl, men som har tendens til at gøre kode sværere at forstå, teste eller sikkert ændre. Statisk analyse er det automatiserede, kontinuerlige lag under de mere målrettede metrikker i denne dels andre emner, kørt ved hver commit og fremdragende problemer i det øjeblik, de indføres, i stedet for at vente på en periodisk revision.

Dette emnes centrale bekymring er hullet mellem det, værktøjer til statisk analyse rapporterer, og det, der faktisk betyder noget. Et værktøj kan flage tusindvis af fund på tværs af en stor kodebase, og antallet af fund alene er en dårlig metrik, da det blander trivielle præferencer for stil med reel, alvorlig risiko, og det kan drives ned gennem undertrykkelse lige så let som gennem reelle rettelser. Værdien af statisk analyse kommer ikke af det rå antal fund, men af, hvor godt en organisation triagerer alvorlighed, forhindrer regression og står imod fristelsen til at behandle værktøjets dom som en erstatning for menneskelig gennemgang frem for et supplement til den.

For store teams er statisk analyse den eneste praktiske måde at håndhæve en grundlæggende standard for kodekvalitet og sikkerhedshygiejne på tværs af en kodebase, der er større end noget team manuelt kan gennemgå fuldt. Store virksomheder og offentlige organisationer, der ofte står over for compliancekrav omkring sikker kodning, er afhængige af statisk analyse som dokumenteret, reviderbart belæg for, at et grundlæggende niveau af granskning blev anvendt konsekvent, ikke blot når en menneskelig gennemgående tilfældigvis bemærkede et problem.

## Nøgleprincipper

- **Rå antal fund er en dårlig metrik alene.** Det blander trivielle og alvorlige problemer, og det kan manipuleres gennem undertrykkelse frem for reelle rettelser.
- **Triage efter alvorlighed betyder mere end volumen.** Et lille antal kritiske fund fortjener mere opmærksomhed end et stort antal trivielle.
- **Statisk analyse supplerer menneskelig gennemgang; den erstatter den ikke.** Værktøjer fanger mønstre; de forstår ikke hensigt eller forretningskontekst.
- **En tendens i "nye problemer indført" er mere handlingsrettet end et samlet antal i backloggen.** Den fortæller dig, om den nuværende praksis forbedres eller går tilbage.
- **Falske positiver eroderer tilliden til værktøjet.** En uhåndteret rate af falske positiver får teams til at ignorere fund i det store og hele, også de reelle.

## Anbefalinger

### Følg fund vægtet efter alvorlighed, ikke rå antal

Konfigurér dit værktøj til statisk analyse til at klassificere fund efter alvorlighed (kritisk, høj, middel, lav eller en tilsvarende skala), og følg en tendens vægtet efter alvorlighed frem for et fladt samlet antal. En kodebase med nul kritiske fund og femhundrede forslag til stil med lav alvorlighed er i en meget anden tilstand end en med halvtreds kritiske fund og slet ingen problemer med stil, og et råt antal behandler disse som nogenlunde ækvivalente, når de ikke er det.

### Sæt port på nye fund, der indføres, ikke på hele den historiske backlog

De fleste etablerede kodebaser bærer en arvet backlog af fund, der er ældre end den nuværende praksis og ville være uoverkommeligt dyre at rette på én gang. I stedet for at blokere alt arbejde, indtil hele backloggen er ryddet, så sæt CI-porten på, om en specifik ændring indfører nye fund over en aftalt alvorlighedstærskel, så backloggen kan skrumpe gradvist gennem normal vedligeholdelse, mens yderligere ophobning forhindres. Det skel afspejler emne 4.2's anbefaling om et dækningsgulv: beskyt mod regression frem for at kræve en urealistisk rettelse af det hele på én gang.

### Styr aktivt raten af falske positiver

Gennemgå periodisk en stikprøve af fund, især enhver kategori med høj volumen, og kontrollér, hvor mange der reelt er falske positiver, tilfælde, hvor værktøjet flagede et mønster, der i konteksten ikke faktisk er problematisk. Justér regelkonfigurationen for specifikt at undertrykke reelt støjende regelkategorier med lav værdi, i stedet for at lade teams udvikle en vane med at ignorere værktøjets output i det store og hele, fordi for meget af det er støj. En høj, uhåndteret rate af falske positiver er den hurtigste enkeltvej til at ødelægge et program for statisk analyses troværdighed.

### Brug fund fra statisk analyse som en opfordring til gennemgang, ikke en automatisk dom

Selv et legitimt fund, der ikke er en falsk positiv, kalder ikke altid på en automatisk, obligatorisk rettelse; nogle flagede mønstre er acceptable i en specifik kontekst, et værktøj ikke kan se. Byg en let proces, hvor et menneske gennemgår og enten retter eller eksplicit, synligt fraviger et fund med en dokumenteret begrundelse, frem for enten blindt at håndhæve hvert fund som obligatorisk eller tillade stille, udokumenteret undertrykkelse, der over tid eroderer værktøjets værdi.

### Kombinér statisk analyse med de andre metrikker for kodekvalitet i denne del

Fund fra statisk analyse, kompleksitetsscorer (emne 4.1) og hotspotdata (emne 4.3) er komplementært belæg, ikke konkurrerende metrikker. En fil med en høj koncentration af uløste fund fra statisk analyse, der også er et hotspot for omsætning og kompleksitet, er en særligt stærk kandidat til prioriteret opmærksomhed, da flere uafhængige signaler konvergerer mod den samme konklusion.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Rå antal fund som metrik | Enkel at rapportere | Blander trivielle og alvorlige problemer; let at manipulere gennem undertrykkelse |
| Tendens vægtet efter alvorlighed | Afspejler den faktiske risiko mere nøjagtigt | Kræver løbende vedligeholdelse af klassifikationen af alvorlighed |
| Port på hele den historiske backlog | Maksimerer den eventuelle renhed af koden | Ofte upraktisk for etablerede kodebaser; kan standse alt arbejde |
| Port kun på nye fund | Praktisk, forhindrer regression, lader backloggen skrumpe gradvist | Arvede problemer bliver længere uden en bevidst plan for afhjælpning |

Den centrale spænding er **grundighed versus praktikabilitet**. En politik for statisk analyse, der kræver, at hele den historiske backlog er løst, før nyt arbejde fortsætter, er grundig, men som regel upraktisk for enhver kodebase med reel historie, og teams under det pres har tendens til at undertrykke fund i det store og hele frem for reelt at rette dem. Løs spændingen ved strengt at sætte port på nye fund, mens du kører en separat, bevidst tempoopdelt indsats til afhjælpning af den arvede backlog, prioriteret ved hjælp af de teknikker til alvorlighed og krydshenvisning, dette emne og emne 4.3 anbefaler.

## Spørgsmål at drøfte med dit team

1. **Følger vi en tendens vægtet efter alvorlighed eller kun et råt samlet antal fund?** Træk jeres faktiske dashboard frem, og kontrollér; et råt antal er almindeligt som standard i mange værktøjer og kræver ofte bevidst konfiguration for i stedet at fremhæve alvorlighed ordentligt.

2. **Hvad er vores nuværende arvede backlog af uløste fund, og har vi en bevidst, tempoopdelt plan for at reducere den, eller ophobes den blot på ubestemt tid?** En uadresseret, i det stille voksende backlog er almindelig og værd at navngive ærligt frem for at efterlade uundersøgt.

3. **Hvad er vores estimerede rate af falske positiver for vores fundkategorier med højest volumen, og har vi justeret regelkonfigurationen som svar?** Hvis I aldrig har kontrolleret det, så tag en stikprøve af fund fra jeres støjendeste kategori, og vurdér ærligt, hvor mange der reelt kan handles på.

4. **Stoler ingeniørerne på vores team på fund fra statisk analyse, eller har de lært at lukke ørerne, fordi for meget af outputtet er støj?** Det er et direkte, ærligt mavefornemmelsesspørgsmål, der er værd at stille teamet, da et værktøj, der ignoreres, ikke giver nogen reel værdi uanset dets teoretiske kapacitet.

5. **Hvordan håndterer vi i øjeblikket et legitimt fund, som et team mener bør fraviges givet en specifik kontekst?** Kontrollér, om jeres proces gør det til en synlig, dokumenteret beslutning, eller om det sker gennem stille, udokumenteret undertrykkelse, der over tid eroderer værktøjets signal.

6. **Hvor konvergerer fund fra statisk analyse, kompleksitetsscorer og hotspotdata på den samme fil eller det samme modul?** Krydshenvis disse tre signaler eksplicit; konvergens på tværs af flere uafhængige metrikker er et stærkere prioriteringssignal end nogen enkelt alene.

## Sektorperspektiv

**Startup.** Et let, gratis værktøj til statisk analyse integreret i CI fra start er billig forsikring og fanger reelle problemer tidligt, før en arvet backlog overhovedet har chance for at ophobe sig. Hold regelsættet fokuseret på reelt højværdi- og lavstøjkategorier frem for straks at aktivere hver tilgængelig regel.

**Mindre virksomhed.** De fleste moderne sprogøkosystemer indeholder kapabelt, gratis værktøj til statisk analyse; at aktivere det i CI med et fornuftigt standardregelsæt kræver lille investering. Fokusér på at sætte port på nye fund frem for at forsøge at løse en eksisterende backlog på én gang.

**Stor virksomhed.** At styre raten af falske positiver og triage efter alvorlighed bevidst bliver afgørende i denne skala, da et dårligt justeret værktøj, der genererer for meget støj på tværs af snesevis af teams, bliver ignoreret i hele organisationen. Invester i en dedikeret ejer af selve konfigurationen af værktøjet til statisk analyse, og behandl justering af regler som en løbende disciplin frem for en engangsopgave.

**Offentlig sektor.** Fund fra statisk analyse, især sikkerhedsrelaterede, er ofte direkte relevante for compliance- og revisionskrav. Oprethold en dokumenteret, reviderbar proces for, hvordan fund triageres, rettes eller formelt fraviges med en registreret begrundelse, da netop denne dokumentation ofte er det, en ekstern revisor vil se.

## Eksempler

**Stor virksomhed.** En softwarevirksomheds dashboard for statisk analyse havde ophobet over fyrre tusinde uløste fund på tværs af kodebasen efter flere år uden triage vægtet efter alvorlighed, et tal så stort, at ingeniørerne for det meste var holdt op med overhovedet at se på dashboardet. En revideret tilgang klassificerede fund efter alvorlighed, fandt, at færre end to hundrede reelt var kritiske, og satte CI-port specifikt på nye kritiske fund og fund med høj alvorlighed, mens backloggen med lav alvorlighed fik lov at skrumpe gradvist gennem normal kodevedligeholdelse. Inden for seks måneder var kritiske fund faldet til enkelte cifre, og, vigtigere, data fra en undersøgelse blandt ingeniører viste fornyet tillid til værktøjets output, nu hvor det fremhævede et overkommeligt, reelt handlingsrettet signal frem for en overvældende, ignoreret backlog.

**Offentlig sektor.** Et forsvarsagenturs politik for sikkerhed i softwareforsyningskæden krævede scanning med statisk analyse med nul uløste fund før enhver udgivelse, en politik, der i praksis havde fået udviklingsteams til at undertrykke et stort antal fund, herunder nogle reelle sikkerhedsproblemer, blot for at overholde deadlines for udgivelser under en uanvendelig alt-eller-intet-port. En revideret politik krævede nul nye kritiske fund eller fund med høj alvorlighed indført af enhver given udgivelse, kombineret med en dokumenteret, fulgt plan for afhjælpning og tidslinje for den arvede backlog, gennemgået kvartalsvis af et styringsudvalg for sikkerhed. Den praktiske, trinvise tilgang genoprettede både reel sikkerhedsgranskning af ny kode og gjorde reel, målbar fremgang mod den arvede backlog over atten måneder, i modsætning til den uanvendelige tidligere politik, der mest havde produceret undertrykkelse frem for reelle rettelser.

## Business case: motiver, ROI og TCO

Afkastet af velstyret statisk analyse er at fange reelle fejl og sikkerhedssårbarheder, før de når produktion, til en pris langt lavere end den tilsvarende indsats til menneskelig gennemgang ville kræve for den samme dækning. Eksemplet med forsvarsagenturet ovenfor viser prisen for at gøre det forkert: en uanvendelig, alt-eller-intet-politik havde faktisk reduceret reel sikkerhedsgranskning ved at drive undertrykkelse, det modsatte af dens hensigt.

De samlede ejeromkostninger omfatter selve værktøjet, ofte gratis eller billigt for almindelige sprogøkosystemer, og den løbende disciplin med triage efter alvorlighed, håndtering af falske positiver og planlægning af afhjælpning af den arvede backlog. Den løbende disciplin, mere end værktøjet selv, afgør, om et program for statisk analyse giver reel, betroet værdi eller forfalder til ignoreret støj.

## Antimønstre og faldgruber

- **At behandle rå antal fund som metrikken:** blander trivielle og alvorlige problemer og er let at manipulere gennem undertrykkelse.
- **At kræve, at hele den historiske backlog er løst, før nyt arbejde fortsætter:** som regel upraktisk og driver undertrykkelse frem for reelle rettelser.
- **At ignorere raten af falske positiver:** et uhåndteret støjniveau får teams til at lukke helt af for værktøjets output, også reelle fund.
- **Stille, udokumenteret undertrykkelse af legitime fund:** eroderer værktøjets signal og efterlader intet revisionsspor til compliance.
- **At behandle et fund fra statisk analyse som en automatisk dom uden menneskelig gennemgang:** overser kontekst, et værktøj ikke kan se.
- **Aldrig at krydshenvise fund med kompleksitets- og hotspotdata:** overser det stærkere prioriteringssignal, som konvergent belæg giver.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Statisk analyse køres ikke, eller fund ophobes uhåndteret uden triage efter alvorlighed eller sporing af tendens.
- **Niveau 2, Udvikl:** Noget statisk analyse kører i CI, men triage efter alvorlighed er uensartet, og raten af falske positiver er uhåndteret.
- **Niveau 3, Standardisér:** Fund vægtes efter alvorlighed, og CI sætter port på nye kritiske fund og fund med høj alvorlighed, i hele organisationen.
- **Niveau 4, Styr:** Raten af falske positiver justeres aktivt, den arvede backlog har en dokumenteret, tempoopdelt plan for afhjælpning, og dispensationer er synlige og dokumenterede.
- **Niveau 5, Orkestrér:** Fund fra statisk analyse, kompleksitetsdata og hotspotdata krydshenvises rutinemæssigt for at prioritere investering, og organisationen kan pege på specifikke, målbare forbedringer af fejl eller sikkerhed, der kan spores til programmet.

## Idéer til drøftelse

1. Hvad er vores nuværende tendens vægtet efter alvorlighed, og forbedres eller forværres den?
2. Hvor stor er vores arvede backlog af fund, og har vi en bevidst plan for at reducere den?
3. Hvad er vores estimerede rate af falske positiver for vores støjendeste fundkategori?
4. Stoler ingeniørerne på vores team i øjeblikket på eller ignorerer de vores output fra statisk analyse?
5. Hvor konvergerer fund fra statisk analyse med kompleksitets- eller hotspotdata i vores kodebase?

## Vigtigste pointer

- Følg en **tendens vægtet efter alvorlighed**, ikke et råt antal fund, som blander trivielle og alvorlige problemer.
- Sæt CI-port på **nye fund, der indføres**, ikke hele den historiske backlog, for at forhindre regression uden at kræve en upraktisk rettelse af det hele på én gang.
- Styr aktivt **raten af falske positiver**; uhåndteret støj ødelægger tilliden til værktøjet og fører til, at fund ignoreres i det store og hele.
- Behandl fund som en **opfordring til menneskelig gennemgang**, med synlige, dokumenterede dispensationer, ikke en automatisk dom eller stille undertrykkelse.
- Krydshenvis statisk analyse med **kompleksitets- og hotspotdata** (emnerne 4.1, 4.3) for konvergent, stærkere belæg til prioritering.

## Kilder og videre læsning

- *Static Program Analysis*, af Anders Møller og Michael I. Schwartzbach (de teoretiske og praktiske grundlag for teknikker til statisk analyse).
- OWASPs vejledning om static application security testing (SAST), en del af OWASP Foundations bredere ressourcer om praksis for sikker softwareudvikling.
- *Refactoring: Improving the Design of Existing Code*, af Martin Fowler (kataloget over code smells, som meget værktøj til statisk analyse bygger på).
- *Working Effectively with Legacy Code*, af Michael Feathers (at styre en arvet backlog af kvalitetsproblemer i en etableret kodebase).
