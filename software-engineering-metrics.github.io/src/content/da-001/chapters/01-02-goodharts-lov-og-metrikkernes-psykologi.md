# 1.2 Goodharts lov og metrikkernes psykologi

## Overblik og motivation

[Goodharts lov](https://en.wikipedia.org/wiki/Goodhart%27s_law), opkaldt efter økonomen Charles Goodhart, formuleres som regel sådan: når et mål bliver til et mål at ramme, holder det op med at være et godt mål. Goodharts oprindelige iagttagelse fra 1975 handlede om pengepolitik, men antropologen Marilyn Stratherns senere omformulering er den version, softwareteams faktisk har brug for, og det er den sætning, hele denne bog er bygget på. Enhver metrik i ethvert senere emne, udrulningsfrekvens, testdækning, tilfredshedsscorer, bærer denne risiko, og hver anbefaling i denne bog er i en eller anden form en strategi til at håndtere den.

Mekanismen er ikke mystisk. Folk reagerer på incitamenter, og en metrik knyttet til en belønning, en vurdering eller et omdømme er et incitament, uanset om nogen har tænkt den som et. Når et team ved, at "udrulningsfrekvens" overvåges, er den billigste måde at rykke tallet på ikke altid den tilsigtede: del én meningsfuld ændring op i fem trivielle udrulninger, og tallet stiger, mens intet reelt blev bedre. Det er ikke en historie om skurke. Almindelige, velmenende ingeniører reagerer præcis sådan på dårligt designede incitamenter, fordi det er incitamentet og ikke hensigten bag det, der former adfærd under pres.

For store organisationer er indsatsen højere, fordi afstanden mellem metrikkens designer og den person, hvis adfærd den former, vokser med skalaen. En teamleder, der bygger en metrik til sit eget team på otte personer, kan holde direkte øje med manipulation og rette kurs hurtigt. En metrik, der rulles ud over en division på seks hundrede, eller offentliggøres i en offentlig præstationsrapport, som et lovgivende organ læser, rejser gennem lag af mennesker, der aldrig har mødt dens ophavsmand og har al mulig grund til at behandle metrikkens bogstav som målet. Forvridningen vokser med afstanden, og det er netop derfor, dette emne, og ikke et senere, er der, hvor bogen lægger sit tyngdepunkt.

## Nøgleprincipper

- **Antag, at enhver metrik med incitament vil blive manipuleret.** Design imod det fra første version, ikke først når forvridningen opdages.
- **Manipulationen er rationel, ikke ondsindet.** Folk reagerer fornuftigt på det incitament, du byggede; at give dem skylden løser intet.
- **Afstand fra metrikkens ejer øger risikoen for forvridning.** Jo længere et tal rejser fra den person, der forstår dets hensigt, jo mere bliver det til regelens bogstav frem for dens ånd.
- **Forhold og intervaller modstår manipulation bedre end rå optællinger.** En rå optælling belønner volumen; et velvalgt forhold belønner den adfærd, du faktisk vil have.
- **Et værn er ikke valgfrit på en metrik med incitament.** Hver metrik, du knytter en belønning til, har brug for en parret modmetrik, som ikke må forringes.

## Anbefalinger

### Klassificér hver metrik efter eksponering for incitamenter

Før du offentliggør en metrik et synligt sted, så spørg direkte: afhænger nogens belønning, vurdering, omdømme eller budget af, at dette tal bevæger sig i en bestemt retning? Hvis ja, er det en metrik med incitament og har brug for et værn (nedenfor), før den går i luften. Hvis nej, er det en diagnostisk metrik (emne 1.1) og bærer lavere risiko for manipulation, men aldrig nul, fordi folk stadig kan forme et tal, de blot forventer at blive bedømt på senere, selv uden et formelt incitament knyttet til i dag.

### Foretræk forhold, rater og kohorter frem for rå optællinger

En rå optælling som "lukkede tickets" kan manipuleres ved at gøre mere af noget med lav værdi. Et forhold som "andel af tickets løst ved første kontakt" belønner den underliggende adfærd frem for volumen. En **kohorte**, en gruppe defineret af et fælles udgangspunkt som alle udrulninger i en given uge, forhindrer, at en dårlig nylig tendens skjuler sig inde i et flatterende langsigtet aggregat. Hvor du vælger mellem en optælling og en rate, der fanger den samme underliggende adfærd, så vælg raten.

### Par hver metrik med incitament med et værn

Et **værnmetrik** er en parret modmetrik, som ikke må forringes, mens den primære metrik forbedres. Udrulningsfrekvens parres med andelen af ændringer, der fejler; gennemløbstid parres med andelen af undslupne fejl; et supportteams håndteringstid parres med kundetilfredshed. Værnet er det, der gør billig manipulation synligt dyr: et team, der forbedrer tallet med incitament ved at forringe værnet, bliver fanget af parringen, ikke af held. Design værnet samtidig med den primære metrik, aldrig som en eftertanke, når manipulation allerede er opdaget.

### Hold øje med de fire klassiske manipulationsmønstre

Forvridning under Goodharts lov falder som regel i et lille antal genkendelige former. **Tærskelmanipulation** optimerer lige op til et mål og stopper (et testdækningsmål på 95 % producerer trivielle tests for at nå præcis 95 %, ikke reel dækning). **Definitionsmanipulation** ændrer, hvad der tæller, frem for hvad der sker (omdefinering af "løst", så svære sager udelades). **Tidsmanipulation** flytter, hvornår arbejde registreres, frem for hvornår det fandt sted (at samle udrulninger lige før et rapporteringsvindue lukker). **Substitutionsmanipulation** leverer metrikkens bogstav, mens dens hensigt opgives (at dele én reel ændring op i mange trivielle for at puste udrulningsfrekvensen op). At navngive disse mønstre eksplicit over for dit team gør dem langt lettere at få øje på, når de dukker op i dine egne tal.

### Adskil måling fra belønning, hvor du kan

Det stærkeste værn af alle er strukturelt: afkobl metrikken fra individuel belønning. En metrik, der udelukkende bruges til at forstå et system, uden at nogens løn, vurdering eller position afhænger af dens retning, møder langt svagere manipulationspres end en, der er knyttet til en vurdering. Det er derfor, emne 1.1's skel mellem diagnostisk og evaluerende brug betyder så meget i praksis: at holde en metrik diagnostisk er ofte billigere og mere effektivt end nogen mængde værnkonstruktion anvendt bagefter.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Rå optællinger | Enkle at beregne og forklare | Meget lette at manipulere med volumen |
| Forhold og rater | Belønner den rette adfærd, modstår volumenmanipulation | Kan skjule et problem med en skrumpende nævner |
| Parring med værn | Gør billig manipulation synligt dyr | Fordobler de metrikker, der skal defineres, ejes og vedligeholdes |
| Kun diagnostisk (ingen individuel belønning) | Laveste manipulationspres af alle muligheder | Svagere direkte motivationsløftestang for ledelsen |
| Kraftigt incitamentsstyrede metrikker | Stærk, hurtig adfærdsmæssig reaktion | Høj risiko for forvridning, ofte inden for én rapporteringscyklus |

Den centrale spænding er **motivationskraft versus risiko for forvridning**. De metrikker, der flytter adfærd hurtigst, at knytte et tal direkte til belønning, er netop dem, der er mest udsat for Goodharts lov. Løs spændingen ved at reservere stærke incitamenter til resultatmetrikker, der reelt er svære at manipulere billigt, og ved at parre alt, du giver incitament til, med et værn designet samtidig, ikke boltet på, efter den første forvridning dukker op.

## Spørgsmål at drøfte med dit team

1. **For hver metrik, som nogens belønning afhænger af: hvad er den billigste måde at manipulere den på, og ville vi opdage den manipulation i dag?** Sæt jer ned og design bevidst udnyttelsen for hvert tal med incitament på dit dashboard: hvordan ville et rationelt, velmenende team få dette til at se godt ud uden at udføre det underliggende arbejde? Hvis du ikke kan nævne en måde, du ville opdage den manipulation på, er du ikke klar til at give metrikken incitament endnu. Øvelsen er ubehagelig, og det ubehag er pointen.

2. **Hvilke af vores nuværende metrikker er allerede gledet ind i et af de fire manipulationsmønstre, tærskel-, definitions-, tids- eller substitutionsmanipulation, uden at nogen har påpeget det?** Forvridning melder sjældent sig selv; den viser sig som et tal, der ser fantastisk ud, mens de underliggende klager, hændelser eller kundefeedback fortæller en anden historie. Gennemgå dit dashboard mod hvert mønster ved navn, og vær ærlig om, hvad der passer.

3. **Har hver metrik med incitament på vores dashboard et parret værn, og blev det værn designet samtidig med metrikken?** Et værn, der først tilføjes, efter manipulation er opdaget, er en reparation, ikke et designvalg, og det kommer som regel for sent til at forhindre den første runde skade på tilliden. Gennemgå dine metrikker med incitament specifikt for denne parring.

4. **Hvor langt rejser denne metrik fra den person, der forstår dens hensigt, før den når den person, hvis adfærd den former?** En metrik bygget af et platformsteam og brugt tre ledelseslag væk, eller offentliggjort i en offentlig rapport, der læses af folk, som aldrig har set instrumenteringen, er langt mere udsat for bogstav-frem-for-ånd-manipulation end en, et team har designet til sig selv. Kortlæg den afstand for dine mest konsekvensrige metrikker.

5. **Har vi nogensinde fjernet et incitament fra en metrik, efter vi opdagede, at den blev manipuleret, og hvad kostede det os i tillid at rette op?** Organisationer opdager ofte Goodharts lov den hårde vej, efter et kvartal eller et år med forvredet adfærd, og reparationen koster mere, end forebyggelse ville have gjort. Medbring en reel hændelse, hvis du har en, og uddrag lektien eksplicit i stedet for stille at gå videre.

6. **Hvor har vi antaget, at manipulation var et spørgsmål om personlig integritet frem for en rationel reaktion på et dårligt designet incitament?** At give enkeltpersoner skylden for at reagere forudsigeligt på et incitament, du byggede, løser sjældent noget og skader ofte tilliden yderligere. Omformulér hver manipulationshændelse, du kan huske, som et designproblem i metrikken, ikke et karakterproblem hos personen, og spørg, hvilket redesign der ville have forhindret den.

## Sektorperspektiv

**Startup.** Med et lillebitte team er det hurtigste værn direkte samtale: alle kan se et tal og straks spørge "vent, hvorfor sprang den". Den reelle risiko er en stifter, der knytter en metrik til fundraisingfortællingen (vækst for enhver pris) uden et parret værn, fordi eksterne investorer udøver netop den slags fjerne, højtstående pres, der gør manipulation attraktiv.

**Mindre virksomhed.** Færdige værktøjer leveres ofte med standarddashboards bygget omkring optællinger (lukkede tickets, håndterede opkald), fordi optællinger er nemme at beregne. Konvertér dem aktivt til rater, hvor værktøjet tillader det, og stå imod at knytte et enkelt tal til en bonus eller en vurdering uden først at have identificeret dets værn.

**Stor virksomhed.** Afstand er den dominerende risiko: en metrik designet af et platformsteam til intern diagnose bliver samlet op tre ledelseslag senere og gjort til et KPI, ingen af dem, der byggede den, ville genkende. Styr dette eksplicit (emne 1.4): kræv et dokumenteret værn, før en metrik godkendes til brug i en præstationssamtale eller et direktionsscorecard.

**Offentlig sektor.** Offentliggjorte præstationsmål møder det stærkeste manipulationspres af nogen kategori i denne bog, fordi et overset mål kan få budgetmæssige eller politiske konsekvenser. Revidér selve definitionen med en fast rytme, ikke kun tallet, da det klassiske manipulationsmønster i den offentlige sektor i det stille er at omdefinere, hvem der tæller (en venteliste "løst" ved at omklassificere, hvem der venter), frem for at forbedre den underliggende service.

## Eksempler

**Stor virksomhed.** Et detailteknologifirma satte et mål om 99 % automatiseret testdækning på tværs af alle tjenester, knyttet til en kvalitetsscore på teamniveau, der blev brugt i kvartalsgennemgange. Inden for to kvartaler nåede dækningen 99 %, og hændelsesraten steg. En revision fandt teams, der skrev trivielle tests, som blot konstaterede, at en funktion returnerede uden at kaste en fejl, udelukkende for at tilfredsstille dækningsværktøjet, mens reel test af grænsetilfælde slet ikke var blevet bedre. Løsningen erstattede det rå dækningsmål med en parret metrik: dækning plus en mutationstestscore (emne 4.2), der måler, om tests faktisk fanger indsatte fejl, hvilket er langt sværere at manipulere billigt.

**Offentlig sektor.** En delstatlig arbejdsløshedsforsikringsmyndighed blev målt på mediantid i dage til første udbetaling, offentliggjort for dens lovgivende forsamling. Under pres for at nå et mål begyndte et regionalt kontor i det stille at omklassificere sager, der var sværere at behandle, som "ufuldstændige" og udelade dem af nævneren, hvilket fik den offentliggjorte median til at se fremragende ud, mens nogle ansøgere ventede langt længere, end rapporten antydede. En uafhængig revision af selve definitionen, ikke kun tallet, afslørede praksissen. Myndighedens løsning frøs definitionen, offentliggjorde udelukkelseskriterierne offentligt og tilføjede en værnmetrik, der fulgte andelen af ufuldstændige sager i sig selv, så en stigning i omklassificering nu ville være synlig frem for skjult.

## Business case: motiver, ROI og TCO

Afkastet af at tage Goodharts lov alvorligt er undgået omarbejde. En organisation, der designer værn på forhånd, bruger en beskeden mængde ekstra indsats på at definere en anden metrik ved siden af den første. En organisation, der springer det trin over, bruger ofte et helt kvartal eller mere på forkert rettet indsats, før forvridningen kommer frem, efterfulgt af den langt sværere pris for at gøre manipuleret adfærd om og genopbygge tilliden til tallet bagefter. Detaileksemplet ovenfor er typisk: billigt at forebygge, dyrt at reparere.

De samlede ejeromkostninger ved et værn er ikke nul: det er en anden metrik, der skal defineres, instrumenteres og gennemgås. Men den pris er lille og fast sammenlignet med den ubegrænsede pris for et incitament, der i månedsvis i det stille belønner den forkerte adfærd, før nogen opdager det. Hvert emne efter dette indregner den afvejning, hvilket er grunden til, at parring med værn optræder som en anbefaling i resten af bogen og ikke kun her.

## Antimønstre og faldgruber

- **At offentliggøre en metrik med incitament uden et værn:** den enkeltstående mest almindelige grundårsag til et forvredet dashboard i denne bog.
- **At behandle manipulation som en personlig svaghed:** giver enkeltpersoner skylden for en rationel reaktion på et dårligt designet incitament og løser intet.
- **At revidere tallet, men aldrig definitionen:** den klassiske fejltilstand i den offentlige sektor, hvor metrikken ser fin ud, fordi hvem der tæller, i det stille er ændret.
- **At antage, at en metrik, der virkede som diagnostisk, forbliver sikker, når den bliver evaluerende:** eksponeringen ændrer sig i det øjeblik, belønning knyttes til, selv hvis intet andet ved metrikken ændrer sig.
- **At designe værnet først efter den første manipulationshændelse:** en reparation, der kommer, når skaden på tilliden allerede er sket.
- **At ignorere afstand:** at antage, at en metrik vil blive læst, som dens designer tilsigtede, når den rejser flere ledelseslag eller en offentlig rapport væk fra dem.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Metrikker gives incitament ad hoc, uden overvejelse af risikoen for manipulation, og forvridning opdages først, efter kvalitet eller tillid synligt lider.
- **Niveau 2, Udvikl:** Nogle teams genkender manipulation bagefter og justerer uformelt, men der er ingen konsekvent praksis med at designe værn på forhånd.
- **Niveau 3, Standardisér:** Hver metrik med incitament i hele organisationen kræver et dokumenteret værn før godkendelse, og de fire manipulationsmønstre er navngivne og undervises.
- **Niveau 4, Styr:** Manipulationsrisiko overvåges aktivt: definitioner revideres periodisk, værnpar gennemgås for, om de stadig fanger forvridning, og tilfælde af manipulation følges som en metrik i sig selv.
- **Niveau 5, Orkestrér:** Organisationen behandler Goodharts lov som en stående designbegrænsning, der automatisk gennemgås, hver gang en ny metrik foreslås, og den kan pege på konkrete redesigns, der forhindrede forvridning, før den skete, frem for kun bagefter.

## Idéer til drøftelse

1. Hvad er den mest konsekvensrige metrik i vores organisation, som ikke har noget værn i dag?
2. Har vi nogensinde set et tal forbedres, mens den underliggende virkelighed blev værre?
3. Hvem ville bemærke det, hvis en definition bag en af vores offentlige metrikker i det stille blev ændret?
4. Hvilket af de fire manipulationsmønstre (tærskel, definition, tid, substitution) er vores organisation mest tilbøjelig til?
5. Hvad ville det koste os i tillid at opdage, at en vigtig metrik havde været manipuleret i et år?

## Vigtigste pointer

- **Goodharts lov:** et mål, der bliver til et mål at ramme, holder op med at være et godt mål, og dette gælder hver metrik i bogen.
- Manipulation er en **rationel reaktion på incitamenter**, ikke en karakterbrist; ret incitamentsdesignet, ikke menneskene.
- Foretræk **forhold, rater og kohorter** frem for rå optællinger, hvor de fanger den samme adfærd.
- Hver metrik med incitament har brug for et **værn**, designet samtidig, ikke tilføjet, efter forvridning er opdaget.
- Hold øje med de fire manipulationsmønstre ved navn: **tærskel-, definitions-, tids- og substitutionsmanipulation**.
- **Afstand** mellem en metriks designer og den person, hvis adfærd den former, øger risikoen for forvridning; hold den afstand kort, hvor du kan.

## Kilder og videre læsning

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience" (1975): oprindelsen til Goodharts lov.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University System" (1997): den meget citerede omformulering, "when a measure becomes a target, it ceases to be a good measure."
- *Seeing Like a State*, af James C. Scott (hvordan læsbare metrikker forvrider de systemer, de måler, i nationernes skala).
- *The Tyranny of Metrics*, af Jerry Z. Muller (en bogstor behandling af metrikfiksering og dens omkostninger på tværs af mange professioner).
- *Lean Analytics*, af Alistair Croll og Benjamin Yoskovitz (forfængeligheds- versus handlingsrettede metrikker og værndesign i en startupkontekst).
- U.S. Government Accountability Office (GAO) vejledning om præstationsmåling og GPRA Modernization Act: offentlig præstationsrapportering og risiko for manipulation.
