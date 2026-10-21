# 3.7 Undersøgelser af udvikleroplevelse og DevEx-metrikker

## Overblik og motivation

Dette emne afslutter del 3 med den praktiske mekanik, der gør hvert foregående emnes selvrapporterede data troværdige: hvordan man designer en undersøgelse af udvikleroplevelse (developer experience, DevEx), der producerer et reelt signal frem for en popularitetskonkurrence, og hvordan man kombinerer spørgeskemadata med objektiv instrumentering til et metriksæt, en organisation faktisk kan handle på. Hvert emne i denne del hviler på en eller anden form for selvrapportering, tilfredshed og trivsel (emne 3.2) mest direkte, men præstation, kommunikation og flow har alle også gavn af et godt designet spørgeskema, og et dårligt designet spørgeskema underminerer værdien af dem alle på én gang.

**Udvikleroplevelse (DevEx)** er den bredere, nyere indramning, der er opstået omkring den samme kerneidé, som SPACE formaliserede: ingeniørers faktiske, daglige oplevelse af at få arbejdet gjort, friktion, værktøj, kognitiv belastning, feedbackløkker, er i sig selv noget målbart og forbedringsegnet, ikke blot en blød kulturel bekymring. DevEx-forskning, især det framework, der er foreslået af Abi Noda, Margaret-Anne Storey, Nicole Forsgren og Michaela Greiler, organiserer denne oplevelse omkring tre dimensioner: feedbackløkker, kognitiv belastning og flowtilstand, som svarer tæt til og udvider de SPACE-dimensioner, denne del allerede har dækket i dybden.

For store teams ligger forskellen mellem en undersøgelse, der producerer troværdigt signal, og en, der producerer støj eller, værre, aktivt vildledende data, helt i de designdetaljer, dette emne dækker: formulering af spørgsmål, valg af svarskala, stikprøve og rytme samt hvordan resultater kommunikeres tilbage til respondenterne. Store virksomheder og offentlige organisationer, der kører disse undersøgelser i skala, på tværs af tusindvis af ingeniører, har ikke råd til at gøre det forkert, fordi et fejlbehæftet instrument i den skala producerer selvsikkert forkerte konklusioner, der former reelle ressourcebeslutninger.

## Nøgleprincipper

- **Spørgeskemadesignets kvalitet afgør dataenes troværdighed langt mere end undersøgelsens længde eller sofistikering.** En kort, godt designet undersøgelse slår en lang, dårligt designet hver gang.
- **Svarprocenten er i sig selv et signal**, ikke blot en metrik for dataindsamling; en faldende rate indikerer ofte eroderende tillid til processen.
- **Kombinér spørgeskemadata med objektiv instrumentering,** hvor det er muligt, efter emne 1.5's princip om instrumentering; brug spørgeskemadata specifikt til det, objektive data ikke kan fange.
- **Luk løkken med respondenterne.** En undersøgelse, der aldrig synligt fører til nogen ændring, træner folk til at holde op med at tage den alvorligt.
- **DevEx og SPACE er komplementære indramninger af den samme underliggende bekymring,** ikke konkurrerende frameworks, man skal vælge imellem.

## Anbefalinger

### Design spørgsmål for klarhed, og undgå ledende eller dobbeltløbede formuleringer

Skriv spørgeskemaspørgsmål, der spørger om præcis én ting, i almindeligt sprog, uden at lægge en antagelse ind i selve spørgsmålet. "Hvor tilfreds er du med vores værktøj og dokumentation?" er et dobbeltløbet spørgsmål, der blander to potentielt meget forskellige svar til ét forvirrende svar. Del det op i to separate spørgsmål. Undgå ledende formuleringer som "hvor meget har vores seneste investering i værktøj forbedret din oplevelse?", som forudsætter, at forbedringen fandt sted, i stedet for neutralt at spørge, om den gjorde.

### Brug konsekvente svarskalaer, og afprøv nye spørgsmål, før du udruller bredt

Standardisér på en konsekvent svarskala (en fem- eller syvpunkts [Likert](https://en.wikipedia.org/wiki/Likert_scale)-skala er almindelig og veludforsket) på tværs af dit spørgeskemainstrument, så svar er sammenlignelige på tværs af spørgsmål og over tid. Afprøv ethvert nyt spørgsmål med en lille gruppe, før du udruller det i hele organisationen, for at fange tvetydig formulering eller uventet fortolkning, før den korrumperer et fuldt datasæt.

### Behandl svarprocenten som et diagnostisk signal i sig selv

Følg undersøgelsens svarprocent over successive cyklusser, og behandl en faldende rate som et advarselstegn, der er værd at undersøge direkte, i ånden som det tillidssignal, der er drøftet i emne 3.2. En faldende svarprocent indikerer ofte undersøgelsestræthed, eroderende tillid til, at resultater fører til handling, eller en voksende mistanke om, at anonymiteten ikke reelt er beskyttet, hvoraf hvert fortjener direkte undersøgelse frem for at blive afvist som en ren ulejlighed ved dataindsamling.

### Kombinér spørgeskemadata med objektiv instrumentering af DevEx

Par subjektive spørgeskemasvar med objektive signaler, hvor de findes: byggetid, kørselstid for testsuiten, opsætningstid for det lokale udviklingsmiljø og data om flowtid og afbrydelser fra emne 3.6. Et spørgeskemasvar, der siger "vores build er for langsomt", bliver langt mere handlingsrettet parret med den faktisk målte tendens i byggetid, og kombinationen fanger tilfælde, hvor opfattelse og objektiv virkelighed divergerer i begge retninger, hvilket er værd at undersøge i sig selv.

### Luk løkken: offentliggør resultater og synlig opfølgende handling

Efter hver undersøgelsescyklus, offentliggør et ærligt resumé af resultaterne, inklusive resultater, ledelsen måske hellere ville undgå at fremhæve, og forpligt dig offentligt til mindst én konkret handling, foretaget som svar. En undersøgelse, der ikke producerer nogen synlig opfølgning, lærer respondenterne, at deres ærlige input ikke betyder noget, hvilket forringer både svarprocent og ærlighed i svarene i hver efterfølgende cyklus. Den disciplin med at lukke løkken er ofte den enkeltstående største afgørende faktor for, om et undersøgelsesprogram om DevEx forbliver nyttigt over flere år eller langsomt forfalder til en afkrydsningsøvelse.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Lang, omfattende undersøgelse | Rige, detaljerede data på tværs af mange emner | Lavere svarprocent, mere træthed, mere plads til dårligt designede spørgsmål |
| Kort, fokuseret undersøgelse | Højere svarprocent, lettere at designe godt | Mindre dækning; kan misse et opdukkende problem uden for det valgte fokus |
| Kun spørgeskemadata | Fanger subjektiv oplevelse direkte | Sårbar over for bias og kan ikke verificeres mod objektiv virkelighed |
| Undersøgelse kombineret med objektiv instrumentering | Fanger divergens mellem opfattelse og virkelighed, mere handlingsrettet | Kræver mere indsats til dataintegration |

Den centrale spænding er **dækning versus svarkvalitet**. En længere, mere omfattende undersøgelse dækker mere terræn, men forringer svarprocenten og øger risikoen for, at dårligt designede spørgsmål slipper igennem; en kort, fokuseret undersøgelse får svar af bedre kvalitet, men risikerer at misse noget vigtigt uden for sit område. Løs spændingen ved at holde den centrale, tilbagevendende undersøgelse kort og velafprøvet og ved at bruge lejlighedsvise, tydeligt mærkede dybdeundersøgelser til specifikke emner, der kræver mere detaljeret udforskning, frem for at forsøge at dække alt i hver cyklus.

## Spørgsmål at drøfte med dit team

1. **Har vi nogensinde afprøvet et nyt spørgeskemaspørgsmål med en lille gruppe, før vi udrullede det bredt, eller går nye spørgsmål direkte ind i den fulde undersøgelse?** At springe afprøvningstrinnet over er en almindelig måde, hvorpå tvetydige eller dobbeltløbede spørgsmål ender med at korrumpere et fuldt datasæt, før nogen bemærker, at formuleringen var uklar.

2. **Hvad har vores svarprocent gjort over de seneste flere undersøgelsescyklusser, og har vi undersøgt et fald, hvis der var et?** Behandl denne tendens som et reelt signal, der er værd at drøfte, ikke blot en gene ved dataindsamling, der noteres i forbifarten.

3. **Kombinerer vi spørgeskemadata med nogen objektiv instrumentering, eller står subjektiv opfattelse helt alene i vores rapportering?** Identificér mindst ét sted, hvor parring af et spørgeskemaspørgsmål med objektive data, byggetid, udrulningsfrekvens, kunne gøre resultatet mere handlingsrettet.

4. **Hvilken konkret handling har vi foretaget som direkte, synligt resultat af vores seneste undersøgelsescyklus, og kommunikerede vi den handling tilbage til respondenterne?** Hvis det ærlige svar er "intet synligt", er det hul sandsynligvis allerede ved at erodere tilliden til instrumentet, uanset om det endnu har vist sig i svarprocenten.

5. **Er nogen af vores nuværende spørgeskemaspørgsmål ledende eller dobbeltløbede, og ville vi bemærke det, hvis de var?** Gennemgå jeres faktiske nuværende spørgsmål mod netop denne test som en gruppeøvelse.

6. **Hvordan sammenligner vores DevEx- eller SPACE-undersøgelsesdata sig med objektive signaler, når de to synes at være uenige, og hvad fortæller den uenighed os?** Et tilfælde, hvor opfattelse og objektive data divergerer, er ofte mere diagnostisk værdifuldt end et, hvor de er enige, da selve hullet er informativt.

## Sektorperspektiv

**Startup.** En simpel, meget kort pulsundersøgelse, undertiden blot et eller to spørgsmål, kørt uformelt og hyppigt, er som regel tilstrækkelig i denne skala, og formel strenghed i instrumentdesign betyder mindre, når en stifter stadig regelmæssigt kan føre en direkte samtale med næsten alle.

**Mindre virksomhed.** Et gratis eller billigt spørgeskemaværktøj med et kort, tilpasset sæt spørgsmål, kørt kvartalsvis, fanger det meste af værdien her uden at have brug for dedikeret ekspertise i spørgeskemadesign. Prioritér disciplinen med at lukke løkken frem for sofistikering; selv et lille team har gavn af synligt at handle på det, en kort undersøgelse afslører.

**Stor virksomhed.** Spørgeskemadesignets kvalitet betyder enormt meget i skala, fordi et fejlbehæftet spørgsmål eller en brudt anonymitetsgaranti korrumperer data på tværs af tusindvis af respondenter på én gang, og de resulterende selvsikkert forkerte konklusioner kan lede betydelige ressourcebeslutninger forkert. Invester i reel ekspertise i spørgeskemadesign, eller indgå partnerskab med en etableret platform til måling af DevEx, frem for at bygge et ad hoc-instrument internt.

**Offentlig sektor.** Svarprocent og tillid er især skrøbelige i organisationer, hvor medarbejdere måske allerede er på vagt over for, hvordan data bruges internt. Overinvester i gennemsigtige anonymitetsgarantier og synlig opfølgende handling specifikt for at opbygge den tillid, der gør en ærlig svarprocent opnåelig i en kontekst, hvor skepsis over for brug af data måske allerede er højere end i en typisk privat setting.

## Eksempler

**Stor virksomhed.** En softwarevirksomheds første DevEx-undersøgelse indeholdt et spørgsmål, der bad ingeniører vurdere "tilfredshed med værktøj og proces", et dobbeltløbet spørgsmål, der blandede to meget forskellige bekymringer. Da den kombinerede score kom tilbage middelmådig, kunne ledelsen ikke se, om problemet var værktøj, proces eller begge dele, og de første afhjælpende indsatser var rettet mod det forkerte område i to kvartaler. At dele spørgsmålet op i en efterfølgende revision afslørede, at værktøjsscoren faktisk var stærk, og processcoren dårlig, hvilket omdirigerede investeringen mod at forenkle en besværlig proces for godkendelse af udgivelser, som producerede en målbar forbedring af tilfredsheden inden for ét kvartal, i modsætning til den tidligere værktøjsfokuserede indsats, der havde vist lille effekt.

**Offentlig sektor.** En national digital myndigheds første DevEx-undersøgelse havde en svarprocent under 30 %, og en intern gennemgang fandt, at medarbejderne bredt troede, med rette, som det viste sig, at individuelle ledere kunne se, hvem der havde og ikke havde svaret, selv om samlede resultater skulle være anonyme. Myndigheden skiftede til en reelt uafhængig spørgeskemaplatform fra en tredjepart med verificeret anonymitet, kommunikerede eksplicit og gentagne gange ændringen og offentliggjorde et klart resumé af den foregående cyklus' resultater sammen med tre konkrete handlinger foretaget som svar. Svarprocenten steg til over 70 % inden for to cyklusser, og myndighedens ledelse tilskrev specifikt kombinationen af reel anonymitet og synlig opfølgende handling som grunden til, at tilliden til instrumentet kom sig.

## Business case: motiver, ROI og TCO

Afkastet af et godt designet undersøgelsesprogram om DevEx er troværdige, handlingsrettede data om en dimension, udvikleroplevelse, der ellers forbliver usynlig, indtil den dukker op som afgang eller en leveringsopbremsning. Eksemplet med softwarevirksomheden ovenfor viser prisen for at få designet forkert: to kvartaler med fejlrettet afhjælpende indsats, fordi et enkelt dårligt formuleret spørgsmål blandede to adskilte bekymringer.

De samlede ejeromkostninger omfatter spørgeskemaværktøj, den disciplin i design og afprøvning, dette emne anbefaler, og den løbende forpligtelse til at lukke løkken med synlig opfølgende handling hver cyklus. Den forpligtelse, mere end nogen værktøjsomkostning, er det, der afgør, om et undersøgelsesprogram forbliver nyttigt i årevis eller forfalder til en afkrydsningsøvelse, der over tid producerer stadig mindre troværdige data.

## Antimønstre og faldgruber

- **Dobbeltløbede eller ledende spørgsmål:** blander adskilte bekymringer eller skævvrider svar, og går ofte uopdaget hen uden afprøvning.
- **At springe afprøvningstrinnet over for nye spørgsmål:** lader tvetydig formulering korrumpere et datasæt i fuld skala.
- **At ignorere en faldende svarprocent:** misser et vigtigt tillidssignal i sig selv.
- **Aldrig at lukke løkken med synlig opfølgende handling:** træner respondenter til, at ærligt input ikke betyder noget, hvilket forringer fremtidig datakvalitet.
- **At behandle spørgeskemadata som tilstrækkelige alene, uden objektiv bekræftelse:** misser tilfælde, hvor opfattelse og virkelighed divergerer i begge retninger.
- **Svage eller ikke verificerbare anonymitetsgarantier:** den hurtigste enkeltvej til at kollapse både svarprocent og ærlighed i svarene.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Spørgeskemaspørgsmål er ad hoc og ikke afprøvede, svarprocenten følges ikke som signal, og resultater fører sjældent til synlig handling.
- **Niveau 2, Udvikl:** Der findes en vis disciplin i spørgeskemadesign, men afprøvning er uensartet, og løkken lukkes ikke pålideligt med respondenterne.
- **Niveau 3, Standardisér:** Spørgsmål afprøves før udrulning, svarprocenten følges og undersøges, når den falder, og resultater offentliggøres konsekvent med mindst én konkret opfølgende handling.
- **Niveau 4, Styr:** Spørgeskemadata kombineres systematisk med objektiv instrumentering, og divergens mellem de to undersøges aktivt som et diagnostisk signal.
- **Niveau 5, Orkestrér:** Organisationen har et modent, betroet, flerårigt undersøgelsesprogram med konsekvent høje svarprocenter, påviselig synlig handling fra hver cyklus og en track record i at fange og rette dårligt designede spørgsmål, før de korrumperer data.

## Idéer til drøftelse

1. Har nogen af de nuværende spørgsmål i vores instrument nogensinde forvirret eller vildledt en respondent?
2. Hvad var den seneste konkrete handling, vi foretog som direkte følge af spørgeskemadata?
3. Hvordan ville vi vide, om vores anonymitetsgaranti var blevet brudt, selv ved et uheld?
4. Hvor er vores spørgeskemadata enige eller uenige med objektiv instrumentering, og hvad fortæller det os?
5. Hvad skal der til for at fordoble vores nuværende svarprocent?

## Vigtigste pointer

- Spørgeskemaets **designkvalitet**, klare, enkeltbegrebs-, upartiske spørgsmål, betyder mere end længde eller sofistikering.
- **Svarprocenten er et signal i sig selv**; undersøg et fald frem for at behandle det som en ren ulejlighed.
- **Kombinér spørgeskemadata med objektiv instrumentering** for at fange divergens mellem opfattelse og virkelighed.
- **Luk løkken**: offentliggør resultater og synlig opfølgende handling hver cyklus, ellers eroderer tilliden til instrumentet.
- **DevEx og SPACE er komplementære**, ikke konkurrerende, indramninger af den samme underliggende bekymring for udvikleroplevelse.

## Kilder og videre læsning

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren og Michaela Greiler, "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): DevEx-frameworket med feedbackløkker, kognitiv belastning og flowtilstand.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and Win in the 21st Century*, af Jeff Lawson (organisatorisk investering i udvikleroplevelse).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, af Louis M. Rea og Richard A. Parker (generel metodik for design af spørgeskemaer, der kan anvendes på DevEx-instrumenter).
