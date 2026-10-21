# 7.1 Paradigmeskiftet med generativ AI

## Overblik og motivation

I det meste af softwareudviklingens historie var det langsomt og krævende nok at skrive kode til, at rå outputvolumen, skrevne linjer, foretagne commits, leverede funktioner, korrelerede i det mindste løst med reel indsats og, ufuldkomment, med reel værdi. Den korrelation var aldrig perfekt, emne 3.4 viede et helt emne til, hvorfor aktivitetsmetrikker vildleder selv i en verden før AI, men den var stærk nok til, at mange organisationer byggede metrikprogrammer på den implicitte antagelse, at mere produceret kode generelt betød mere udført arbejde. Kodeassistenter med [generativ AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) har brudt den antagelse afgørende: et værktøj kan nu frembringe en stor, plausibelt udseende mængde kode på sekunder, til en brøkdel af de tidligere omkostninger, og den mængde fortæller dig næsten intet i sig selv om, hvorvidt den resulterende kode virker, er vedligeholdelig eller tjener noget reelt formål.

Dette emnes kerneudsagn er, at dette er et paradigmeskifte, ikke en gradvis værktøjsændring. Et paradigmeskifte ændrer, hvad dine eksisterende instrumenter faktisk måler, ikke blot hvilke værdier de rapporterer. Et speedometer måler stadig hastighed, efter du har skiftet en bils motor; flere af denne bogs metrikker overlever ikke overgangen så rent. Udrulningsfrekvens (emne 2.10) kan stige, fordi AI accelererede reelt værdifuldt arbejde, eller fordi AI gjorde det trivielt let at generere mange små ændringer med lav værdi; tallet alene kan ikke længere skelne de to, på en måde det med passende forsigtighed for det meste kunne før. Den samme logik gælder med endnu større kraft for rå commit-antal, kodelinjer og pull request-volumen, som emne 3.4 allerede advarede mod som individuelle metrikker, nu forstærket til en risiko, der også er relevant på team- og organisationsniveau.

For store teams kom dette skifte hurtigere, end de fleste organisationers målepraksis kunne tilpasse sig, og kløften mellem indførelseshastighed og målingstilpasning er der, hvor den reelle risiko i denne del ligger. Store virksomheder, der fortsætter med at rapportere aktivitetsmetrikker fra før AI-æraen uden justering, risikerer at fejre en metrik, der stille er holdt op med at korrelere med værdi; offentlige organisationer, der vurderer investering i AI-værktøjer, har brug for en klartskuende forståelse af, præcis hvilke metrikker der stadig er pålidelige, og hvilke der ikke længere er, før de forpligter sig til indkøbs- eller politikbeslutninger bygget på forældede måleantagelser.

## Nøgleprincipper

- **Dette er et paradigmeskifte i, hvad metrikker måler, ikke en gradvis ændring.** Nogle eksisterende metrikker er stille holdt op med at betyde det, de plejede.
- **Outputvolumen var aldrig en pålidelig proxy for værdi, og den er nu blevet aktivt upålidelig.** Emne 3.4's advarsel var altid rigtig; dette skifte gør det langt dyrere at ignorere den.
- **Kløften mellem AI-indførelsens hastighed og målingens tilpasningshastighed er den reelle risiko.** Organisationer tager værktøjerne i brug hurtigere, end de genovervejer deres metrikker.
- **Ikke alle metrikker i denne bog er berørt lige meget.** Resultatmetrikker (del 5) er langt mere modstandsdygtige over for dette skifte end aktivitets- og rå outputmetrikker.
- **Dette skifte er branchedækkende og igangværende, ikke en engangsjustering.** Forvent fortsat forandring, efterhånden som værktøjerne og deres indførelsesmønstre fortsætter med at udvikle sig.

## Anbefalinger

### Revidér dit eksisterende metriksæt eksplicit for gyldighed i AI-æraen

Gå dit nuværende dashboard igennem, og spørg for hver metrik direkte: ville et team, der bruger AI-assistance flittigt, men ikke producerer mere reel værdi end før, vise en forbedret aflæsning på denne metrik. Aktivitetstal, commit-frekvens og rå udrulningsfrekvens (uden et parret stabilitetsværn, emne 2.10) er mest udsatte. Resultatmetrikker fra del 5, undslupne fejl, funktionsadoption, forretningsresultater, er forholdsvis modstandsdygtige, da de måler det faktiske resultat frem for den aktivitetsvolumen, der frembragte det.

### Gentænk specifikt udrulningsfrekvens og gennemløbstid, med øget opmærksomhed på værn

Emne 2.10 advarede allerede mod substitutionsmanipulation, at opdele meningsfuldt arbejde i trivielle udrulninger for at pumpe tallet op. Generativ AI gør netop dette manipulationsmønster dramatisk billigere og lettere at frembringe, selv utilsigtet, da AI-assisterede trivielle ændringer nu er næsten gratis at generere. Stram dit værn på ændringsfejlraten (emne 2.10) specifikt i forhold til, hvor kraftigt et team har taget AI-assisteret udvikling i brug, og følg udviklingen i udrulningsstørrelse endnu nøjere end før.

### Behandl kapaciteten til kodegennemgang som en ny, kritisk flaskehals

Hvis AI-assistance dramatisk øger mængden af kode, der foreslås til gennemgang, bliver gennemgangstrinnet (emne 2.9), der allerede ofte er det største bidrag til ventetid i leveringspipelinen, en endnu skarpere begrænsning. En reviewer, der bedes vurdere en meget større mængde AI-genereret kode i samme tempo som før, vil uundgåeligt enten sænke pipelinen eller reducere gennemgangsdybden, netop den risiko for stempling, emne 2.9 allerede advarede mod, nu under væsentligt større pres. Følg gennemgangsdybde og kvalitetsværn med øget opmærksomhed, når mængden af AI-genereret kode stiger.

### Antag ikke, at AI-genereret kode har samme fejlprofil som menneskeskrevet kode

Tidligt belæg og praktikererfaring tyder på, at AI-genereret kode kan have en anden fejlprofil end menneskeskrevet kode: plausibelt udseende, men subtilt forkert logik, selvsikkert genereret, men forkert håndtering af grænsetilfælde, eller kode der består overfladisk gennemgang, fordi den ser idiomatisk og rimelig ud, men ikke reelt er gennemtænkt med ægte forståelse af systemets specifikke kontekst. Behandl dette som en hypotese, der er værd at afprøve aktivt mod jeres egne data om undslupne fejl (emne 5.1), ved at mærke fejl efter, om den oprindelige kode i væsentlig grad var AI-genereret, frem for at antage, at de historiske sammenhænge mellem fejlrater, som jeres organisation har bygget sin kvalitetspraksis på, stadig holder uændret.

### Opdatér eksplicit dit metrikcharter og din styringsproces for dette skifte

I tråd med emne 1.4's styringsdisciplin skal du ikke lade dette skifte ske passivt for dit metrikprogram. Genbesøg eksplicit dit metrikcharter, og benævn, hvilke metrikker der behøver nye værn, hvilke der skal udfases, og hvilke der forbliver pålidelige, som en bevidst styringsbeslutning frem for en ugransket afdrift. Dokumentér begrundelsen, for det er netop den slags definitions- og kontekstskifte, emne 1.4 advarer om ellers kan ske stille og først opdages meget senere.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Fortsæt med at rapportere metrikker fra før AI uændret | Ingen forstyrrelse, velkendt rapportering | Risikerer at fejre metrikker, der stille er holdt op med at korrelere med værdi |
| Fuld revision af metriksættet og bevidst revision | Genopretter pålidelig måling | Kræver reel analytisk indsats og forandringsledelse i organisationen |
| Opgiv aktivitets- og outputmetrikker helt | Fjerner den mest udsatte risiko direkte | Mister noget legitimt nyttigt kontekstuelt signal (emne 3.4's forbehold) |
| Stram værn uden fuld revision | Hurtigere at gennemføre | Kan overse metrikker, hvis eksponering er mindre åbenlys end de tydeligste tilfælde |

Den centrale spænding er **målingskontinuitet versus målingsgyldighed**. Organisationer foretrækker forståeligt nok at blive ved med at rapportere velkendte metrikker på velkendte måder, da ændring af et metrikprogram har reelle organisatoriske omkostninger og forstyrrelser. Men at blive ved med at rapportere en metrik, der stille er holdt op med at måle det, den plejede, er værre end forstyrrelse, det er aktiv vildledning. Løs spændingen ved at behandle det som netop den slags bevidste, dokumenterede styringsændring, emne 1.4 beskriver, forstyrrende på kort sigt, men nødvendig for at holde organisationens metrikker ærlige.

## Spørgsmål at drøfte med dit team

1. **Ville et team, der bruger AI-assistance flittigt, men ikke producerer mere reel værdi, vise en forbedret aflæsning for hver metrik på vores dashboard?** Gå jeres metrikker eksplicit igennem med denne test; dem der dumper den, er jeres højest prioriterede kandidater til reviderede værn eller udfasning.

2. **Er vores udrulningsfrekvens eller commit-volumen steget, siden vi tog AI-kodeassistance i brug, og har vi tjekket, om ændringsfejlraten eller fejlraten flyttede sig tilsvarende?** Hent de faktiske parrede data frem for at antage et positivt eller negativt udfald.

3. **Holder vores kapacitet til kodegennemgang trit med enhver stigning i mængden af AI-assisteret kode, eller eroderer gennemgangsdybden stille under øget pres?** Tjek metrikker for gennemgangstrinnet (emne 2.9) specifikt for tegn på, at risikoen for stempling forstærkes.

4. **Mærker vi fejl efter, om den oprindelige kode i væsentlig grad var AI-genereret, og hvis ja, hvad viser de data indtil videre?** Hvis I ikke mærker det i dag, så drøft, hvad der skal til for at begynde, da disse data er direkte relevante for, om jeres historiske kvalitetsantagelser stadig holder.

5. **Har vi bevidst genbesøgt vores metrikcharter (emne 1.4) i lyset af dette skifte, eller er vores målepraksis blot fortsat uændret?** Hvis det ærlige svar er det sidste, er det netop det hul, dette emne anbefaler at lukke først.

6. **Hvordan ville det se ud, hvis vores organisation blev fanget på det forkerte ben af dette skifte og fejrede en metrik, der allerede var holdt op med at betyde det, vi troede?** Dette konkrete, lettere ubehagelige tankeeksperiment hjælper med at motivere den revision, dette emne anbefaler, før frem for efter, at det scenarie faktisk indtræffer.

## Sektorperspektiv

**Startup.** Hurtig indførelse af AI-værktøjer er almindelig og ofte en reel konkurrencefordel, men den samme hurtighed, der gør indførelse attraktiv, gør ugransket metrikafdrift mere sandsynlig. Opbyg vanen med at tjekke resultatmetrikker (del 5) ved siden af alle effektivitetsgevinster, I rapporterer fra AI-indførelse, frem for kun at rapportere hastighedsforbedringer.

**Mindre virksomhed.** AI-kodeassistance kan meningsfuldt udvide et lille teams kapacitet, men modstå fristelsen til at rapportere rå outputstigninger som utvetydig succes uden at tjekke kvalitetsværn; et lille team har mindre kapacitet til at absorbere et uopdaget kvalitetsproblem end en større organisation med mere redundans.

**Stor virksomhed.** Omfanget af denne risiko vokser væsentligt her, da AI-indførelse på tværs af dusinvis eller hundredvis af teams samtidig kan forskyde metrikkers gyldighed i hele organisationen, før noget enkelt team opdager mønstret lokalt. Gennemfør den revision af metriksættet, dette emne anbefaler, på organisationsniveau, ikke kun team for team, og opdatér styringen (emne 1.4) centralt og eksplicit.

**Offentlig sektor.** Offentlige organisationer tager ofte ny teknologi i brug mere forsigtigt, men de metrikker og benchmarks, der bruges til at evaluere offentlige teknologiprogrammer, er ofte hentet fra eller sammenlignet med branchedata fra den private sektor, som selv forskydes under det samme pres. Forstå eksplicit, hvilke branchebenchmarks I sammenligner jer med, der er blevet påvirket af dette skifte, før I bruger dem til at sætte forventninger eller evaluere præstation.

## Eksempler

**Stor virksomhed.** Ingeniørledelsen i et fintechfirma bemærkede, at udrulningsfrekvensen var steget næsten 40 % i de to kvartaler efter bred indførelse af AI-kodeassistenter, og rapporterede i første omgang dette som en ligefrem produktivitetsgevinst i en præsentation for bestyrelsen. En mere omhyggelig opfølgende analyse, foranlediget af et skeptisk bestyrelsesmedlems spørgsmål om, hvorvidt kvaliteten var tjekket, fandt, at ændringsfejlraten var steget næsten i takt med udrulningsfrekvensen og fuldstændig udlignede den tilsyneladende gevinst, da den parrede stabilitetsmetrik faktisk blev undersøgt. Virksomhedens reviderede rapportering viser nu udrulningsfrekvens og ændringsfejlrate sammen eksplicit, hver gang der fremsættes påstande om AI-assisteret produktivitet, og undgår dermed den tidligere, næsten offentlige, vildledende påstand.

**Offentlig sektor.** En delstatsregerings it-afdeling, der pilottestede AI-kodeassistance for en delmængde af sine ingeniørteams, fandt, at rå kodeoutput pr. ingeniør var steget væsentligt, et tal der i første omgang blev citeret positivt i en intern pilotgennemgang. En nærmere analyse, foranlediget af at denne bogs vejledning blev indarbejdet i afdelingens evalueringsramme, undersøgte raten af undslupne fejl for AI-assisteret versus ikke-AI-assisteret arbejde specifikt og fandt en moderat forhøjet fejlrate i den AI-assisterede gruppe, koncentreret i håndtering af grænsetilfælde for usædvanlige borgerforhold, som AI-værktøjet ikke var blevet udsat for under træningen. Fundet standsede ikke piloten, men førte til en specifik, målrettet stigning i gennemgangsstringens for AI-assisterede ændringer, der berørte logik om grænsetilfælde for berettigelse, og adresserede den faktiske risiko, som den rå outputmetrik alene aldrig ville have afsløret.

## Business case: motiver, ROI og TCO

Afkastet af at gennemføre denne revision proaktivt er at undgå en offentlig eller bestyrelsesmæssig forlegenhed ved at rapportere en metrik, der under granskning viser sig at have målt intet reelt, præcis det scenarie, eksemplet med fintechfirmaet ovenfor næsten frembragte. En organisation, der kommer i forkant af dette skifte, bevarer troværdigheden over for sine interessenter; en, der bliver fanget i at rapportere en hul metrik, betaler en reel og stort set undgåelig omdømmemæssig omkostning.

De samlede ejeromkostninger er den analytiske indsats at revidere det eksisterende metriksæt, stramme værn og opdatere styringsdokumentationen, en engangsinvestering af moderat størrelse i forhold til den løbende risiko ved at fortsætte med at rapportere metrikker, der stille er holdt op med at måle det, de påstår at måle. Omkostningen er også tilbagevendende på et lavere niveau, da dette skifte er igangværende, ikke en engangshændelse, og periodisk genrevision, efterhånden som værktøjer og indførelsesmønstre fortsætter med at udvikle sig, er et rimeligt, permanent tillæg til en styringsrytme for metrikker.

## Antimønstre og faldgruber

- **At fortsætte med at rapportere aktivitetsmetrikker fra før AI-æraen uændret og ukritisk:** risikerer at fejre en metrik, der stille er holdt op med at korrelere med reel værdi.
- **At rapportere stigninger i udrulningsfrekvens eller outputvolumen uden det parrede stabilitetsværn:** gentager emne 2.10's advarsel med væsentligt højere indsats under AI-assisteret udvikling.
- **At antage, at AI-genereret kode har samme fejlprofil som menneskeskrevet kode, uden at tjekke:** en uafprøvet antagelse, der kan være aktivt forkert.
- **At lade gennemgangsdybden erodere stille under øget mængde AI-genereret kode:** risikoen for stempling fra emne 2.9, forstærket.
- **At behandle dette skifte som en engangsjustering frem for en igangværende bekymring:** værktøjerne og deres indførelsesmønstre fortsætter med at udvikle sig, og målepraksis skal følge med.
- **At sammenligne mod branchebenchmarks uden at forstå, om disse benchmarks selv er forskudt under det samme pres:** risikerer en falsk følelse af relativ præstation.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Metrikker fra før AI-æraen rapporteres uændret, uden bevidsthed om, at AI-indførelse kan have påvirket deres gyldighed.
- **Niveau 2, Udvikl:** Der er en vis bevidsthed om skiftet, men der er ikke gennemført nogen systematisk revision af det eksisterende metriksæt.
- **Niveau 3, Standardisér:** En fuld revision af metriksættet er gennemført, med strammede værn og metrikker dokumenteret som berørte eller modstandsdygtige, i hele organisationen.
- **Niveau 4, Styr:** Fejl og kvalitetsresultater mærkes og følges aktivt efter niveau af AI-assistance for at afprøve, ikke antage, at organisationens historiske kvalitetssammenhænge stadig holder.
- **Niveau 5, Orkestrér:** Organisationen har en moden, løbende praksis med at gentænke sine metrikker, efterhånden som AI-værktøjer og indførelsesmønstre fortsætter med at udvikle sig, og kan pege på specifikke styringsbeslutninger truffet proaktivt som svar på dette skifte frem for reaktivt efter et problem dukkede op.

## Idéer til drøftelse

1. Hvilke af vores nuværende metrikker ville mest smigre et team, der bruger AI-assistance flittigt, men ikke producerer mere reel værdi?
2. Er vores udrulningsfrekvens steget siden AI-indførelsen, og har ændringsfejlraten bevæget sig med?
3. Mærker vi kvalitetsresultater efter niveau af AI-assistance, og hvad ville de data vise?
4. Holder vores gennemgangskapacitet trit med enhver stigning i mængden af AI-genereret kode?
5. Hvilket branchebenchmark sammenligner vi os i dag med, og har det selv forskudt sig under dette pres?

## Vigtigste pointer

- Generativ AI er et **paradigmeskifte i, hvad flere eksisterende metrikker måler**, ikke en gradvis værktøjsændring; nogle metrikker er stille holdt op med at betyde det, de plejede.
- **Aktivitets- og rå outputmetrikker er mest udsatte**; resultatmetrikker (del 5) er forholdsvis modstandsdygtige.
- **Stram værn, især ændringsfejlraten**, i forhold til indførelsen af AI-assisteret udvikling.
- **Afprøv, antag ikke**, om AI-genereret kode har en anden fejlprofil end menneskeskrevet kode, ved hjælp af mærkede data om undslupne fejl.
- Behandl dette som en **igangværende, ikke engangs-, styringsbekymring** (emne 1.4), da værktøjerne og deres indførelsesmønstre fortsætter med at udvikle sig.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (det resultatbaserede målingsgrundlag, som dette emne argumenterer for bliver mere, ikke mindre, vigtigt under dette skifte).
- GitHubs forskning i AI-parprogrammering og udvikleres produktivitet (brancheforskning om AI-assisteret udviklings målbare virkninger).
- Google Clouds DevOps Research and Assessment-program, [dora.dev](https://dora.dev/) (løbende State of DevOps-forskning, der i de seneste år har inddraget fund om AI-indførelse).
- *The Tyranny of Metrics*, af Jerry Z. Muller (det generelle argument for skepsis over for volumenbaserede metrikker, direkte relevant, efterhånden som outputvolumen bliver billig).
