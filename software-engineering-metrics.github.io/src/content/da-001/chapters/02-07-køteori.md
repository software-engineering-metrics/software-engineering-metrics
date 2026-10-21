# 2.7 Køteori

## Overblik og motivation

**[Køteori](https://en.wikipedia.org/wiki/Queueing_theory)** er den matematiske undersøgelse af ventekøer. Det lyder som et mærkeligt match for en bog om metrikker for softwareudvikling, indtil man bemærker, hvor meget af en leveringspipeline der faktisk er en kø: en pull request, der venter på en gennemgående person, en commit, der venter på en CI-runner, en ticket, der venter på at blive samlet op, en kundesupportbesked, der venter på et svar. Emne 2.4 introducerede allerede flowbelastning og flowtid og viste, at overbelastning af en værdistrøm får leveringen til at gå kraftigt langsommere, og emnerne 2.5 og 2.6 viste, at det meste af leveringstiden er ventetid, ikke arbejdstid. Køteori er den underliggende matematik, der forklarer, hvorfor alt det er sandt, ikke blot et observeret mønster.

Det enkeltstående mest nyttige resultat er **[Little's lov](https://en.wikipedia.org/wiki/Little%27s_law)**, en sætning bevist af operationsanalytikeren John Little i 1961: det gennemsnitlige antal elementer i et stabilt system er lig med den gennemsnitlige hastighed, hvormed elementer ankommer, multipliceret med den gennemsnitlige tid, hvert element tilbringer i systemet. Emne 2.4 brugte allerede dette resultat under Flow Frameworks egne navne, flowbelastning er lig med ankomstrate gange flowtid. I denne bogs bredere ordforråd læses det også som igangværende arbejde (emne 2.5) er lig med ankomstraten for nyt arbejde multipliceret med cyklustid (emne 2.6). Det er ikke en tommelfingerregel eller en korrelation observeret i nogle undersøgelser. Det er et bevis, der gælder for enhver stabil kø, uanset hvad køen behandler, eller hvordan den beslutter, hvad den skal arbejde på næste gang.

For et stort team er den generalitet pointen. Little's lov giver dig en fornuftskontrol, der virker identisk, uanset om køen er en kanbantavle, en meddelelsesmægler eller en delt CI-pipeline. Hvis dit målte igangværende arbejde, din ankomstrate og din cyklustid ikke nogenlunde opfylder ligningen, er ét af dine tre tal forkert, som regel på grund af en uensartet definition af, hvad der tæller som "i gang" eller "ankommet". Store virksomheder og offentlige organisationer kører snesevis af sådanne køer på én gang, delte kodegennemgangspuljer, delte testmiljøer, delte godkendelsesudvalg, og Little's lov er det billigste tilgængelige værktøj til at fange en dårlig metrikdefinition, før den driver en dårlig bemandings- eller procesbeslutning.

## Nøgleprincipper

- **Little's lov er et bevis, ikke en heuristik.** Igangværende arbejde er lig med ankomstrate gange cyklustid, for enhver stabil kø, og det er en hurtig kontrol af, om dine leveringsmetrikker er internt konsistente.
- **Udnyttelse skalerer ikke lineært med ventetid.** Når en delt ressource nærmer sig fuld udnyttelse, vokser køforsinkelsen kraftigt, ikke gradvist. En ressource, der kører 95 % optaget, venter ofte mange gange længere end en, der kører 80 %, ikke blot "lidt værre".
- **En køs gennemsnit skjuler dens værste tilfælde.** At rapportere kun den gennemsnitlige ventetid skjuler den lange, smertefulde hale tæt på kapacitetsgrænsen, præcis det, emne 1.6 advarer imod, når det gælder at bruge percentiler i stedet for gennemsnit.
- **Hvordan en kø defineres, kan manipuleres lige så let som enhver anden metrik.** Om noget tæller som "ankommet", "i gang" eller "betjent" er et valg, og det kan tunes til at pynte på et dashboard uden at ændre, hvad der faktisk sker med arbejdet.
- **En pipeline er som regel en kø af køer.** En leveringspipeline kæder flere trin sammen, og det langsomste trin sætter tempoet for hele kæden, uanset hvor hurtigt de andre kører.

## Anbefalinger

### Brug Little's lov til at kontrollere dine egne tal, før du stoler på dem

Tag dit teams målte gennemsnitlige igangværende arbejde, dets gennemsnitlige ankomstrate af nye elementer pr. uge og dets gennemsnitlige cyklustid, og kontrollér, om igangværende arbejde nogenlunde er lig med ankomstrate multipliceret med cyklustid. Når det ikke er det, så antag ikke, at teorien er forkert. Led efter den faktiske årsag: en tringrænse talt uensartet, arbejde, der står "blokeret", men stadig tælles som i gang, eller en ankomstrate målt over et andet vindue end cyklustiden. Denne ene kontrol fanger mere dårlig instrumentering, end de fleste teams finder på nogen anden måde.

### Følg udnyttelsen direkte for hver delt, kapacitetsbegrænset ressource

Identificér de ressourcer, din leveringspipeline deler på tværs af mange teams, en kodegennemgangspulje, en CI-klynge, et staging-miljø, og mål, hvor optaget hver enkelt kører som en andel af sin tilgængelige kapacitet, før du planlægger at køre den tæt på sin grænse. En delt gruppe af gennemgående, der kører tæt på fuld kapacitet, producerer ventetider i gennemgangskøen, som vokser langt hurtigere end den beskedne stigning i efterspørgslen, der forårsagede dem, præcis den dynamik bag emne 2.9's råd om at følge tid til første gennemgang som en førende indikator.

### Adskil ankomstrate, succesrate, fejlrate og springrate

Stå imod at slå alt, der forlader en kø, sammen til ét enkelt tal for "gennemstrømning" eller "betjeningsrate". Følg fire ting hver for sig: hvor hurtigt arbejde ankommer, hvor meget af det afsluttes med succes, hvor meget der fejler og skal omarbejdes, og hvor meget der opgives eller i det stille droppes, før nogen afslutter det. En pipeline, der ser hurtig ud, fordi dens springrate i det stille steg, leverer ikke reelt mere, og kun at følge disse fire rater hver for sig vil vise dig det.

### Modellér pipelines med flere trin som en kø af køer

Behandl en leveringspipeline, eller enhver proces med flere trin, en hændelsesforløb, en ansættelsespipeline, som en kæde af køer frem for ét udifferentieret klump af "tid". Den samlede ankomstrate sættes af det første trin, den samlede gennemførelsesrate af det sidste trin, og pipelinens samlede fejl- og springantal er summen af hvert trins egne. Den ramme fortæller dig straks, hvilket trin der er værd at investere i: det med den værste kombination af høj udnyttelse og høj fejl- eller springrate, ikke det, der tilfældigvis er lettest at instrumentere.

### Sæt bemandings- og WIP-grænser med udnyttelse for øje, ikke kun gennemstrømning

Når du beslutter, hvor mange gennemgående eller CI-runnere et team har brug for, så dimensionér ikke kapaciteten, så den præcist matcher den gennemsnitlige ankomstrate. En kø, der kører med 100 % udnyttelse i gennemsnit, har i praksis en uendelig ventetid, fordi reelle ankomster er ujævne, ikke perfekt glatte. Planlæg bevidst med margin, og behandl "vores gennemgående er næsten altid optaget" som et advarselstegn om ventetider, der kommer, ikke som belæg for effektiv ressourceanvendelse.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen formel kømodel, mavefornemmelsesbemanding | Hurtig at starte; intet nyt ordforråd for teamet | Undervurderer konsekvent, hvordan ventetiden eksploderer tæt på fuld kapacitet |
| Little's lov som fornuftskontrol af eksisterende metrikker | Billig, kræver intet nyt værktøj, fanger dårlige definitioner hurtigt | Kontrollerer kun konsistens, diagnosticerer ikke i sig selv årsagen |
| Fuld køsimulering (ankomstfordelinger, flere servere) | Mest nøjagtig forudsigelse af ventetidsadfærd under belastning | Kræver reel statistisk færdighed og vedligeholdelse, de fleste teams ikke vil opretholde |
| Sporing af udnyttelse på delte ressourcer uden dybere modellering | Enkel, handlingsrettet, fanger den største enkeltårsag til løbske ventetider | Siger intet om, hvorfor udnyttelsen er høj, eller hvad man skal gøre ved den underliggende årsag |

Den centrale spænding er **strenghed versus anvendelse**. En fuld køsimulering giver det mest nøjagtige svar, men næsten intet ingeniørteam vil bygge og vedligeholde en, og en model, ingen stoler på eller opdaterer, er værre end ingen model. Little's lov og grundlæggende sporing af udnyttelse opgiver noget præcision, men kræver ingen specialiseret statistisk færdighed og passer direkte ind i de metrikker, et team allerede indsamler til emnerne 2.4 til 2.6. Brug som standard de billige, anvendelige kontroller, og reservér fuld simulering til det sjældne tilfælde, hvor en enkelt delt ressource, en stor CI-flåde, en specialiseret gennemgangspulje, er dyr nok til at retfærdiggøre investeringen.

## Spørgsmål at drøfte med dit team

1. **Opfylder vores målte igangværende arbejde, ankomstrate og cyklustid faktisk Little's lov, og hvis ikke, hvorfor ikke?** Det er den enkeltstående hurtigste diagnostik, der findes for en dårlig metrikdefinition. Gennemgå de faktiske tal sammen, og hvis ligningen ikke nogenlunde holder, så spor uoverensstemmelsen til en specifik definitionsmæssig uensartethed frem for at afvise kontrollen.

2. **Hvilke delte ressourcer i vores leveringspipeline kører tæt på fuld udnyttelse, og kender vi faktisk deres udnyttelsestal?** De fleste teams kan navngive en ressource, der "altid føles optaget", men har aldrig målt dens udnyttelse direkte. Identificér de to eller tre mest begrænsede delte ressourcer, og skaf et reelt tal for hver.

3. **Blander vi succes, fejl og spring til ét gennemstrømningstal, og hvad ville vi se, hvis vi delte dem op?** Et enkelt antal "gennemførte elementer" kan stige, selv mens kvaliteten falder, eller arbejde i det stille opgives. Genberegn en nylig periodes gennemstrømning som tre separate tal, og drøft, hvad opdelingen afslører, som det blandede tal skjulte.

4. **Hvor i vores pipeline er den sande flaskehals, det langsomste trin, der sætter tempoet for alt nedstrøms for det?** Teams investerer ofte i at speede det trin op, der er lettest at forbedre, frem for det, der faktisk begrænser den samlede gennemstrømning. Identificér det trin med den værste kombination af høj udnyttelse og høj fejl- eller springrate.

5. **Hvis vi tilføjede kapacitet til vores mest begrænsede delte ressource, ville ventetiden så faktisk blive bedre, eller ville efterspørgslen blot udvide sig til at fylde den?** Spørgsmålet skelner mellem en reel kapacitetsmangel og et efterspørgselsproblem, og svaret ændrer, om den rette løsning er flere ansatte, en WIP-grænse eller en ændring i, hvordan arbejde prioriteres, før det kommer ind i køen.

6. **Har vi nogensinde omdefineret, hvad der tæller som "i gang" eller "ankommet", på en måde, der fik et dashboard til at se bedre ud uden at ændre, hvad der faktisk skete med arbejdet?** Det er værd at spørge om ærligt og specifikt, med reelle eksempler fra det seneste år, i stedet for at behandle det som en hypotetisk bekymring.

## Sektorperspektiv

**Startup.** Med en håndfuld ingeniører er de fleste køer korte nok til, at formel køanalyse er overkill. Den nyttige vane er mindre: læg mærke til, når én person, ofte den mest senior ingeniør, er blevet en de facto delt ressource, som alt andet venter på, og behandl det som et udnyttelsesproblem, der er værd at navngive, selv uden nogen formel model bag.

**Mindre virksomhed.** Et team i en mindre virksomhed har sjældent brug for noget mere sofistikeret end at følge udnyttelsen på sine en eller to reelt delte ressourcer, ofte en enkelt gennemgående person eller en enkelt udrulningspipeline, og at holde øje med det punkt, hvor "normalt tilgængelig" i det stille bliver til "normalt flaskehalsen". Et regneark er nok; dedikeret værktøj er ikke nødvendigt i denne skala.

**Stor virksomhed.** Delte ressourcer formerer sig hurtigt i virksomhedsskala: et centralt platformsteam, et delt sikkerhedsgennemgangsudvalg, en delt CI-flåde, der betjener snesevis af produktteams. Det er netop de ressourcer, hvor sporing af udnyttelse fortjener sin plads, fordi en enkelt overbelastet delt ressource i det stille kan forringe leveringstiden for hvert team, der afhænger af den, og intet enkelt teams egne metrikker vil afsløre en årsag, der ligger uden for dets egen pipeline.

**Offentlig sektor.** Leveringsprogrammer på tværs af flere myndigheder og leverandører router ofte arbejde gennem delte godkendelsesudvalg, delte sikkerhedsakkrediteringsprocesser og delte testmiljøer, som intet enkelt team kontrollerer eller selv kan ændre størrelsen på. Køanalyse af disse delte porte, ankomstrate, kapacitet, udnyttelse, er ofte det klareste tilgængelige belæg til en business case for at tilføje kapacitet eller ændre, hvordan arbejde samles i batches, før det når porten.

## Eksempler

**Stor virksomhed.** En cloudinfrastrukturudbyders interne platformsteam bemærkede, at gennemløbstiden for ændringer (emne 2.10) var krøbet op i hvert produktteam, der afhang af dets delte CI-flåde, selv om intet enkelt team havde ændret, hvordan det arbejdede. En analyse af udnyttelsen fandt flåden kørende over 90 % optaget i kernetiden, langt forbi det punkt, hvor køteori forudsiger, at ventetiden vokser kraftigt frem for gradvist. Platformsteamet tilføjede CI-kapacitet og indførte en politik om retfærdig fordeling, så intet enkelt teams byge af aktivitet kunne monopolisere køen. Median CI-ventetid faldt med mere end det halve inden for en måned, belæg for, at flaskehalsen hele tiden havde været en delt, usynlig kø.

**Offentlig sektor.** En national tilladelsesmyndigheds team for digital service fulgte sagsbehandling som ét enkelt tal for "lukkede sager pr. uge" i to år, og tallet så stabilt ud. En nærmere analyse, der delte tallet op i godkendte sager, afviste sager og sager, ansøgerne opgav efter lange forsinkelser, fandt, at frafaldsraten var næsten tredoblet i samme periode, mens godkendelserne holdt sig flade. Little's lov, anvendt på sagsbehandlernes kø, viste, at igangværende arbejde var vokset langt ud over det, teamets angivne gennemsnitlige behandlingstid antydede, hvilket betød, at sager i det stille hobede sig op i en status, der ikke blev talt som "venter". Myndigheden omstrukturerede sine sagssporingsdefinitioner, så hver åben sag blev talt ærligt, og tilføjede sagsbehandlerkapacitet dimensioneret til at holde udnyttelsen under 85 %, nu fulgt som et fast operationelt mål ved siden af gennemstrømningstallet.

## Business case: motiver, ROI og TCO

Afkastet af at anvende grundlæggende køanalyse er, at den forvandler "pipelinen føles langsom" til en specifik, forsvarlig beslutning, tilføj margin til denne delte ressource, del dette blandede tal op i dets reelle komponenter, frem for et vagt pres for at "arbejde hurtigere", der misser den faktiske årsag. Eksemplet med cloudinfrastrukturen ovenfor, halveret ventetid ved en kapacitets- og planlægningsløsning frem for nogen ændring i individuelle teams adfærd, er det mønster, denne analyse pålideligt producerer: løsningen er næsten altid billigere end at bede hvert nedstrøms team om at bevæge sig hurtigere omkring en flaskehals, de ikke kan se.

De samlede omkostninger ved indførelse er reelt lave. Little's lov og sporing af udnyttelse kræver intet nyt værktøj ud over det, emnerne 2.4 til 2.6 allerede beder dig om at indsamle: ankomstrate, igangværende arbejde og cyklustid. Investeringen er for det meste analytisk disciplin, at kontrollere tallene mod hinanden og periodisk gennemgå udnyttelsen på delte ressourcer, før de bliver organisationens næste uforklarede regression i gennemløbstid.

## Antimønstre og faldgruber

- **At dimensionere en delt ressources kapacitet, så den præcist matcher dens gennemsnitlige ankomstrate:** garanterer høj udnyttelse og løbske ventetider, hver gang efterspørgslen, selv kortvarigt, er ujævn.
- **At rapportere kun den gennemsnitlige ventetid, aldrig en percentil:** skjuler den lange hale, der betyder mest for dem, der venter i den.
- **At blande succes, fejl og spring til ét gennemstrømningstal:** manipulationsvektoren i hjertet af dette emne. Et team under pres kan få gennemstrømningen til at se sund ud ved i det stille at lade springraten stige, opgivne tickets, i det stille droppede anmodninger, arbejde, der aldrig tælles som en fejl. Værnet er at følge ankomst-, succes-, fejl- og springrate som fire separate, synlige tal, den samme disciplin, emne 1.2 beder om for hver metrik i denne bog, så en stigende springrate ikke kan skjule sig bag et fladt gennemstrømningsdiagram.
- **At behandle "vores folk er altid optaget" som en kompliment:** det er et symptom på høj udnyttelse, den førende årsag til lange, uforudsigelige ventetider.
- **At omdefinere "i gang" for i det stille at skrumpe igangværende arbejde:** flytter arbejde ind i en ikke-talt tilstand, "blokeret", "på hold", uden at ændre, hvor lang tid det tager at afslutte, og bryder den kontrol af Little's lov, der ellers ville have fanget det.
- **At antage, at en kømodel ikke kræver vedligeholdelse, når den først er bygget:** ankomstmønstre og kapacitet ændrer sig konstant, og en forældet model producerer selvsikkert forkerte forudsigelser.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Ingen kø måles eksplicit; ventetid drøftes anekdotisk som "tingene føles langsomme".
- **Niveau 2, Udvikl:** Ankomstrate, igangværende arbejde og cyklustid følges for mindst én pipeline, men kontrolleres aldrig mod Little's lov eller mod udnyttelse på delte ressourcer.
- **Niveau 3, Standardisér:** Little's lov er en rutinemæssig konsistenskontrol på tværs af leveringspipelines, og udnyttelse følges eksplicit for de mest betydningsfulde delte ressourcer.
- **Niveau 4, Styr:** Succes-, fejl- og springrate følges hver for sig for hver betydelig kø, og kapacitetsbeslutninger bruger udnyttelsesmål, ikke kun den gennemsnitlige efterspørgsel.
- **Niveau 5, Orkestrér:** Organisationen modellerer sine største pipelines som køer af køer, identificerer systematisk sande flaskehalse og kan pege på specifikke kapacitets- eller procesændringer foretaget på grund af køanalyse, med målt forbedring af ventetiden at vise frem.

## Idéer til drøftelse

1. Vælg en af vores leveringspipelines, og kontrollér, om dens tal opfylder Little's lov i dag.
2. Navngiv den enkelte delte ressource i vores organisation, de fleste ville være enige om er "altid optaget", og find dens faktiske udnyttelsestal.
3. Hvordan ville vores gennemstrømningsdiagram se ud, hvis vi delte det op i succes-, fejl- og springrater for det seneste kvartal?
4. Hvis vi skulle tilføje kapacitet til præcis én delt ressource i år, hvilken, og hvilket belæg ville retfærdiggøre det?

## Vigtigste pointer

- **Little's lov**, igangværende arbejde er lig med ankomstrate gange cyklustid, er et bevis, ikke en heuristik, og det er den billigste tilgængelige kontrol af, om dine leveringsmetrikker er internt konsistente.
- **Ventetiden vokser kraftigt, ikke gradvist, når udnyttelsen nærmer sig fuld kapacitet.** Behandl "altid optaget" som et advarselstegn, ikke en kompliment.
- Følg **ankomstrate, succesrate, fejlrate og springrate** hver for sig; at blande dem til ét gennemstrømningstal er dette emnes centrale manipulationsvektor.
- Modellér en pipeline med flere trin som en **kø af køer**, og invester i det trin med den værste kombination af høj udnyttelse og høj fejl- eller springrate, ikke det trin, der er lettest at forbedre.
- Foretræk billige, anvendelige kontroller, **Little's lov og sporing af udnyttelse**, frem for en fuld køsimulering, få teams vil opretholde.

## Kilder og videre læsning

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
