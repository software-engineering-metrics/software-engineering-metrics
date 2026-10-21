# 7.2 Måling af AI-assisteret softwareudvikling

## Overblik og motivation

Emne 7.1 fastslog, hvorfor flere eksisterende metrikker ikke længere pålideligt måler det, de plejede, under AI-assisteret udvikling. Dette emne handler om, hvad man skal måle i stedet: hvordan man ved, med reelt belæg frem for indtryk eller leverandørmarkedsføring, om AI-kodeassistance faktisk hjælper jeres organisation, og hvor meget. Det er et reelt vigtigt spørgsmål med reelle budgetmæssige konsekvenser, licenser til AI-værktøjer udgør en reel, løbende omkostning, emne 5.4's disciplin om enhedsøkonomi gælder direkte, og en organisation, der ikke kan besvare det med belæg, betaler enten for meget for et værktøj, der ikke hjælper, eller underinvesterer i et, der reelt gør.

Dette emnes tilgang bygger direkte på emne 1.3's princip om resultater frem for output, nu anvendt specifikt på evaluering af AI-værktøjer. Den naive, mest almindelige tilgang måler AI-assisteret udvikling efter outputvolumen, genererede kodelinjer, accepterede forslag, sparet tid pr. opgave som selvrapporteret af udviklerne, præcis de metrikker, emne 7.1 advarede om er mest udsat for dette skifte. Den mere stringente tilgang, dette emne anbefaler, måler resultater: reducerede AI-assistance reelt gennemløbstiden uden at forringe kvaliteten, reducerede den tiden brugt på reelt lavværdigt, gentaget arbejde og frigjorde kapacitet til mere værdifuldt arbejde, og påvirkede den målbart de forretnings- og produktresultater fra del 5.

For store teams afgør det at få denne måling rigtig, om investeringsbeslutninger om AI-værktøjer træffes på belæg eller på leverandørpåstande og organisatorisk momentum. Store virksomheder, der forhandler AI-værktøjskontrakter i stor skala, har brug for reelt belæg for værdi for at retfærdiggøre udgiften og for fair at sammenligne konkurrerende værktøjer; offentlige organisationer, der ofte er under særlig granskning for teknologiudgifter, har brug for en stringent, forsvarlig evalueringsmetode, før de forpligter offentlige midler til AI-værktøjer i stor skala.

## Nøgleprincipper

- **Mål AI-assistance efter resultat, ikke efter outputvolumen eller leverandørrapporterede brugsstatistikker.** Emne 1.3's disciplin gælder her med fuld kraft.
- **Brug en reel [sammenligningsgruppe](https://en.wikipedia.org/wiki/Treatment_and_control_groups), hvor det er muligt**, ikke blot en før-og-efter-sammenligning, som en stigende brancheomspændende basislinje kan forstyrre.
- **Selvrapporteret tidsbesparelse er et svagt signal alene.** Par det med objektive data om gennemløbstid og kvalitet.
- **Mål de fulde omkostninger, herunder tid til gennemgang og rettelse**, ikke blot genereringshastigheden.
- **Forskellige opgaver og forskellige ingeniører kan opleve meget forskellig værdi af AI-assistance.** Undgå et enkelt, blandet tal for hele organisationen, der skjuler denne variation.

## Anbefalinger

### Byg en reel sammenligning, ikke blot et før-og-efter-øjebliksbillede

Sammenlign, hvor det er muligt, resultater mellem en gruppe, der bruger AI-assistance, og en sammenlignelig gruppe, der ikke gør, over den samme periode, frem for kun at sammenligne jeres egen organisations før-og-efter-tal, som ikke kan skelne AI-assistances virkning fra enhver anden samtidig ændring (emne 1.6's advarsel om forstyrrende variabler gælder direkte). Hvor en reel sammenligningsgruppe er upraktisk, så sammenlign i det mindste mod en længere historisk basislinje (et kontroldiagram, jf. emne 1.6) frem for et enkelt før-og-efter-øjebliksbillede, der er sårbart over for regression mod middelværdien eller ikke-relaterede samtidige ændringer.

### Mål gennemløbstid og kvalitet sammen, aldrig alene AI-assistances hastighedspåstand

Anvend emne 2.6's og emne 2.10's disciplin direkte: følg, om AI-assisteret arbejde bevæger sig hurtigere gennem trinnene i gennemløbstiden, og samtidig om ændringsfejlraten eller raten af undslupne fejl (emne 5.1) for det arbejde bevæger sig i den forkerte retning. En reel produktivitetsgevinst viser hurtigere gennemløbstid med stabil eller forbedret kvalitet; en falsk gevinst viser hurtigere gennemløbstid med forringet kvalitet, præcis den afvejning emne 7.1 advarede mod, her opdaget gennem den samme disciplin med parrede metrikker, som denne bog anvender hele vejen igennem.

### Medregn tid til gennemgang og rettelse i det fulde omkostningsregnskab

AI-genereret kode, der er hurtigere at producere, men langsommere at gennemgå, eller som kræver mere rettelse og omarbejde efter den første generering, viser måske ingen nettoforbedring af gennemløbstiden, når hele pipelinen måles, selv om selve kodegenereringstrinnet føltes dramatisk hurtigere for den enkelte ingeniør. Mål hele kæden af gennemløbstid (emne 2.6), ikke blot kodningstrinnet, for at fange dette ærligt frem for at kreditere AI-assistance på grundlag af en følt, men ufuldstændig, fornemmelse af hastighed.

### Behandl selvrapporteret tidsbesparelse som en indledende hypotese, ikke en konklusion

Udvikleres selvrapportering af "det sparede mig en time" er nyttig som et indledende signal og som kvalitativ kontekst (emne 5.3's kombinerede kvantitative og kvalitative tilgang gælder også her), men er underlagt de samme erindrings- og ønskværdighedsbiaser, som emne 1.5 advarer om for enhver selvrapporteret data, og siger intet om efterfølgende omkostninger til gennemgang eller rettelse. Brug selvrapportering til at generere hypoteser om, hvor AI-assistance hjælper mest, og validér derefter disse hypoteser mod objektive data om gennemløbstid og kvalitet, før du drager en fast konklusion.

### Segmentér målingen efter opgavetype, og undgå et enkelt blandet tal

AI-kodeassistance giver sandsynligvis meget forskellig værdi til standardkode (boilerplate) og velforståede opgaver end til reelt nyt, komplekst problemløsningsarbejde. Mål og rapportér efter opgavekategori frem for et enkelt, blandet gennemsnit for hele organisationen, der kan skjule, at assistance giver stærk værdi i én kategori, mens den giver ringe eller endda negativ værdi i en anden, information som et blandet tal fuldstændig ville sløre.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Kun selvrapporteret tidsbesparelse | Hurtig, nem at indsamle | Svagt signal; underlagt bias; ignorerer efterfølgende omkostninger til gennemgang |
| Kun før-og-efter-sammenligning | Enkel at sætte op | Forstyrret af enhver anden samtidig ændring eller brancheomspændende tendens |
| Reel sammenligningsgruppe | Stærkeste, mest forsvarlige belæg | Sværere at arrangere; måske ikke muligt ved fuld udrulning |
| Resultatmåling segmenteret efter opgave | Afslører, hvor værdien reelt koncentreres | Kræver mere granulær sporing og kategoriseringsindsats |

Den centrale spænding er **målestringens versus praktisk gennemførlighed**. En reel, kontrolleret sammenligningsgruppe er det stærkeste belæg, men ofte upraktisk, når et værktøj først er rullet ud i hele organisationen uden en tilbageholdt kontrolgruppe; selvrapporterede indtryk er hurtige og nemme, men svage alene. Løs spændingen ved at bruge det stærkeste sammenligningsdesign, jeres faktiske udrulning tillader, en reel kontrolgruppe under en tidlig pilotfase, hvis muligt, et kontroldiagram over en historisk basislinje, hvis ikke, og ved at behandle selvrapportering som et værktøj til at generere hypoteser frem for det sidste ord, uanset hvilket sammenligningsdesign I ender med at bruge.

## Spørgsmål at drøfte med dit team

1. **Havde vi, eller kunne vi stadig konstruere, en reel sammenligningsgruppe til at evaluere vores indførelse af AI-værktøjer, eller stoler vi udelukkende på en før-og-efter-sammenligning?** Hvis en reel sammenligningsgruppe aldrig blev etableret, så drøft, om et kontroldiagram over en historisk basislinje stadig kunne give et rimeligt stringent alternativ.

2. **Har vi målt gennemløbstid og kvalitet sammen for AI-assisteret arbejde, eller har vi kun en hastighedspåstand uden tilsvarende kvalitetstjek?** Hent de data, der findes, og tjek for netop denne parring; hvis de ikke findes, er det hul dette emnes højest prioriterede rettelse.

3. **Inkluderer vores måling af gennemløbstid for AI-assisteret arbejde tid til gennemgang og rettelse, eller kun det indledende genereringstrin?** En hastighedspåstand baseret kun på genereringstid, der ignorerer efterfølgende omkostninger til gennemgang, risikerer den faldgrube med ufuldstændig regnskabsføring, som dette emne advarer direkte mod.

4. **Hvilke påstande om selvrapporteret tidsbesparelse har vi indsamlet, og har vi valideret nogen af dem mod objektive data?** Vælg en specifik, ofte gentaget påstand, og tjek, om de objektive data faktisk understøtter den.

5. **Blander vores nuværende måling alle opgavetyper til ét tal, eller ved vi, hvilke specifikke kategorier af arbejde der ser den stærkeste værdi af AI-assistance?** Hvis den er blandet, så drøft, hvad en opgavesegmenteret opdeling kunne afsløre, som det nuværende tal skjuler.

6. **Hvis vi i dag skulle forsvare vores investering i AI-værktøjer over for en skeptisk økonomiinteressent med belæg frem for indtryk, hvad kunne vi så faktisk vise dem?** Denne konkrete test afdækker kløften mellem det, jeres organisation i dag tror om værdien af AI-assistance, og det, den faktisk kan påvise med belæg.

## Sektorperspektiv

**Startup.** Et formelt studie med sammenligningsgruppe er normalt upraktisk i lille skala, men selv et enkelt, ærligt før-og-efter-blik på gennemløbstid og fejlrate, frem for blot at stole på, hvor meget hurtigere arbejdet føles, giver et meningsfuldt mere pålideligt signal end indtryk alene.

**Mindre virksomhed.** Fokuser måleindsatsen på jeres mest værdifulde, mest gentagne opgavekategori først, hvor værdien af AI-assistance mest sandsynligt er klar og målbar, frem for at forsøge en omfattende evaluering af enhver slags arbejde, jeres lille team udfører.

**Stor virksomhed.** En reel, kontrolleret sammenligning under en tidlig pilotfase, før fuld udrulning i hele organisationen, er ofte opnåelig her og er den bevidste indsats værd at arrangere, da den giver langt mere forsvarligt belæg for den store investeringsbeslutning om værktøjer, der typisk følger efter en vellykket pilot.

**Offentlig sektor.** Beslutninger om offentlige teknologiudgifter, herunder indkøb af AI-værktøjer, møder ofte særlig granskning og kan kræve formel cost-benefit-begrundelse (emne 5.5). Byg den måledisciplin, dette emne anbefaler, ind i enhver pilotfase fra begyndelsen, da en stringent, dokumenteret evalueringsmetode styrker den endelige finansierings- eller indkøbssag betydeligt.

## Eksempler

**Stor virksomhed.** Et softwarefirma rullede en AI-kodeassistent ud til halvdelen af sine ingeniørteams som bevidst pilot og holdt den anden halvdel tilbage som sammenligningsgruppe i et kvartal før fuld udrulning. Pilotgruppen viste en reel, statistisk meningsfuld forbedring af gennemløbstiden for veldefinerede, boilerplate-tunge opgaver, men viste ingen målbar forbedring, og et let forhøjet antal gennemgangsiterationer (emne 2.9), for komplekst, nyt arkitekturarbejde. Dette opgavesegmenterede fund, som kun var synligt på grund af det reelle sammenligningsdesign og opdelingen efter opgavekategori, fik virksomheden til specifikt at målrette kommunikation og træning om udrulningen af AI-assistance mod de opgavekategorier, hvor den påviseligt hjalp, frem for at præsentere den som et ensartet produktivitetsløft på tværs af alt arbejde.

**Offentlig sektor.** En føderal myndighed, der pilottestede AI-kodeassistance for en delmængde af sine moderniseringsprogramteams, stolede i første omgang på selvrapporterede spørgeskemaer om tidsbesparelse, som viste begejstrede, ensartet positive svar. En opfølgende objektiv analyse, der sammenlignede gennemløbstid og rate af undslupne fejl mellem pilotteamene og en sammenlignelig gruppe uden pilot, som arbejdede på lignende systemkomponenter, fandt, at den objektive forbedring af gennemløbstiden var reel, men mærkbart mindre end de selvrapporterede estimater antydede, og identificerede en beskeden, men reel stigning i gennemgangstid, der havde opvejet en del af gevinsten i genereringshastighed, et fund som selvrapporteringsdataene alene havde overset fuldstændigt. Dette mere nøjagtige, belægsbaserede billede informerede direkte en mere beskeden og mere forsvarlig business case for værktøjets fortsatte, udvidede indkøb.

## Business case: motiver, ROI og TCO

Afkastet af at måle AI-assisteret udvikling stringent er selvsikre, belægsbaserede investeringsbeslutninger: en organisation, der ved præcist, hvor AI-assistance reelt hjælper, kan investere i at udvide den dér og undgå at betale for meget for licenser i opgavekategorier, hvor den giver ringe værdi, præcis den indsigt i opgavesegmentering, eksemplet med softwarefirmaet ovenfor viser. Det hænger direkte sammen med emne 5.4's enhedsøkonomi og emne 5.5's ROI-disciplin, da omkostningen ved AI-værktøjer, ofte licenseret pr. bruger, kræver den samme stringente cost-benefit-behandling, som denne bog anvender på enhver anden større ingeniørinvestering.

De samlede ejeromkostninger er den analytiske indsats at bygge reelle sammenligninger, måle fuld gennemløbstid inklusive gennemgang og rettelse og segmentere efter opgavetype, hvilket er mere arbejde end at acceptere leverandørrapporterede brugsstatistikker eller selvrapporterede indtryk ukritisk. Den indsats er direkte begrundet af omfanget af licensomkostninger til AI-værktøjer i en stor organisation og risikoen for en dårligt belagt, dyr forpligtelse for hele organisationen baseret på indtryk frem for data.

## Antimønstre og faldgruber

- **At måle AI-assistance alene efter outputvolumen eller leverandørens brugsstatistikker:** gentager emne 7.1's centrale advarsel direkte.
- **At stole udelukkende på selvrapporteret tidsbesparelse:** et svagt signal, sårbart over for bias og blindt for efterfølgende omkostninger til gennemgang og rettelse.
- **Kun at måle genereringshastighedstrinnet og ignorere den fulde gennemløbstid:** giver en ufuldstændig, potentielt vildledende regnskabsføring af den faktiske produktivitetseffekt.
- **At rapportere et enkelt, blandet tal for hele organisationen:** skjuler reel variation i værdi på tværs af forskellige opgavekategorier.
- **Ingen sammenligningsgruppe eller historisk basislinje:** kan ikke skelne AI-assistances faktiske virkning fra enhver anden samtidig ændring.
- **At behandle et begejstret selvrapporteret spørgeskemaresultat som tilstrækkeligt belæg for en stor investeringsbeslutning:** risikerer netop det hul, som eksemplet med den føderale myndighed ovenfor først opdagede, efter der var bygget en mere stringent sammenligning.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Værdien af AI-assisteret udvikling vurderes, hvis overhovedet, alene gennem selvrapporteret indtryk og leverandørens brugsstatistikker.
- **Niveau 2, Udvikl:** Der findes nogle data om gennemløbstid eller kvalitet, men ingen reel sammenligningsgruppe eller historisk basislinje og ingen opgavesegmenteret analyse.
- **Niveau 3, Standardisér:** Et reelt sammenligningsdesign (kontrolgruppe eller historisk basislinje) med parret måling af gennemløbstid og kvalitet anvendes konsekvent, segmenteret efter opgavetype.
- **Niveau 4, Styr:** Fuld regnskabsføring af gennemløbstid, herunder tid til gennemgang og rettelse, følges; selvrapporterede påstande valideres systematisk mod objektive data.
- **Niveau 5, Orkestrér:** Organisationen har en moden, belægsbaseret forståelse af præcis, hvor AI-assistance reelt hjælper, og informerer målrettet udrulning, træningsinvestering og indkøbsbeslutninger med påvist, forsvarlig ROI.

## Idéer til drøftelse

1. Hvilken reel sammenligning, hvis nogen, har vi for vores nuværende indførelse af AI-værktøjer?
2. Har vi målt gennemløbstid og kvalitet sammen eller kun en hastighedspåstand?
3. Hvilken selvrapporteret påstand om AI-assistance bør vi validere mod objektive data?
4. Hvilken specifik opgavekategori viser det stærkeste belæg for reel værdi af AI-assistance for os?
5. Kunne vi i dag forsvare vores investering i AI-værktøjer over for en skeptisk økonomiinteressent med belæg?

## Vigtigste pointer

- Mål AI-assisteret udvikling efter **resultat**, ikke outputvolumen eller leverandørrapporterede brugsstatistikker.
- Brug en **reel sammenligningsgruppe eller historisk basislinje**, ikke blot et før-og-efter-øjebliksbillede sårbart over for forstyrrende faktorer.
- Mål **gennemløbstid og kvalitet sammen**, inklusive hele pipelinen, tid til gennemgang og rettelse, ikke blot genereringshastighed.
- Behandl **selvrapporteret tidsbesparelse som en hypotese**, ikke en konklusion, og validér den mod objektive data.
- **Segmentér efter opgavetype**; et enkelt blandet tal skjuler, hvor værdien reelt koncentreres, og hvor den ikke gør.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (den disciplin for resultatmåling, som dette emne anvender på evaluering af AI-værktøjer).
- GitHubs forskning i AI-parprogrammering og udvikleres produktivitet (empirisk forskning i stor skala om resultater af AI-assisteret udvikling).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021) (den flerdimensionale måledisciplin, som dette emne anvender på en specifik ny værktøjskategori).
- *How to Measure Anything*, af Douglas W. Hubbard (at konstruere forsvarlige sammenligninger og kvantificere værdi under reel usikkerhed).
