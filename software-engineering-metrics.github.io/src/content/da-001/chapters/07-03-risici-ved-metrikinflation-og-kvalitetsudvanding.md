# 7.3 Risici ved metrikinflation og kvalitetsudvanding

## Overblik og motivation

Dette emne benævner direkte og specifikt de to fejltilstande, som emne 7.1 advarede om, at hele denne bogs rammeværk skal værne mod, efterhånden som AI-assisteret udvikling bliver standardpraksis: **metrikinflation (metric inflation)**, tal der stiger uden tilsvarende reel værdi, og **kvalitetsudvanding (quality dilution)**, en gradvis erosion af kodekvaliteten, der løber fra branchens nuværende evne til at opdage den gennem eksisterende gennemgangs- og testpraksis. Det er ikke nye risikokategorier, som denne bog ikke allerede har navngivet: metrikinflation er emne 1.2's Goodharts lov og emne 1.2's substitutionsmanipulation anvendt i stor skala, og kvalitetsudvanding er emne 4.2's kløft mellem dækning og effektivitet og emne 5.1's bekymring om undslupne fejl, begge intensiveret. Det nye er hastigheden og omfanget, hvormed generativ AI kan frembringe begge fejltilstande samtidig, hurtigere end de fleste organisationers eksisterende værn var designet til at fange.

Den specifikke mekanisme, dette emne beskæftiger sig med, er subtil: AI-genereret kode ser meget ofte korrekt ud. Den følger velkendte idiomer, bruger plausible variabelnavne og består en overfladisk læsning langt mere pålideligt, end reelt skødesløst menneskeskrevet kode typisk gør, netop fordi den er trænet på et enormt korpus af kode, der så korrekt ud. Det gør AI-genererede fejl sværere for en menneskelig reviewer at fange gennem den form for mønstergenkendelse, ser-det-rigtigt-ud-gennemgang, der fanger mange menneskeindførte fejl, fordi den AI-genererede version er specifikt optimeret, i statistisk forstand, til at se rigtig ud, uanset om den faktisk er det.

For store teams vokser dette emnes risici med skalaen på en måde, der specifikt bør bekymre store virksomheder og offentlige organisationer: metrikinflation på tværs af dusinvis af teams samtidig kan frembringe et falsk signal for hele organisationen om forbedret produktivitet, som tager betydelig tid og analyse at rulle tilbage, præcis som emne 7.1's eksempel med fintechfirmaet viste. Kvalitetsudvanding, der løber fra evnen til at opdage den, er endnu mere alvorlig i regulerede, sikkerhedskritiske eller tillidsfølsomme offentlige sammenhænge, hvor omkostningen ved en uopdaget fejl, der når produktion, har konsekvenser langt ud over den umiddelbare ingeniørbekymring.

## Nøgleprincipper

- **Metrikinflation og kvalitetsudvanding er intensiverede versioner af risici, som denne bog allerede har navngivet**, ikke helt nye kategorier; de eksisterende værn gælder stadig, men skal arbejde hårdere.
- **AI-genereret kodes "ser korrekt ud"-kvalitet gør det specifikt sværere for menneskelig mønstergenkendelse i gennemgang at fange subtile fejl.** Det er en anden risiko end almindelig menneskelig fejl.
- **Hastigheden i dette skifte kan løbe fra en organisations evne til at tilpasse sine værn** og skabe et reelt, tidsbegrænset eksponeringsvindue.
- **Eksisterende kvalitetsmetrikker (del 4) forbliver værdifulde, men kan have brug for rekalibrering**, ikke udskiftning, i lyset af denne nye risikoprofil.
- **Selve evnen til at opdage har brug for bevidst investering**, da de gennemgangs- og testpraksisser, denne bog dækker, blev designet, før denne specifikke risiko eksisterede i denne skala.

## Anbefalinger

### Rekalibrér tærsklerne for ændringsfejlrate og undslupne fejl for AI-tungt arbejde

Hvor et team eller et kodeområde har taget AI-assistance kraftigt i brug, så anvend emne 2.4's og emne 5.1's alvorlighedsvægtede sporing med øget følsomhed, i det mindste indtil jeres organisation har opbygget nok belæg (emne 7.2) til at vide, om den historiske sammenhæng mellem disse metrikker og reel risiko stadig holder uændret for AI-assisteret arbejde specifikt. Behandl denne rekalibrering som en midlertidig, belægsindsamlende holdning, ikke en permanent, ugransket antagelse i nogen af retningerne.

### Invester specifikt i opdagelsesevne, der modstår "ser korrekt ud"-problemet

Traditionel kodegennemgang, som i høj grad bygger på en reviewers mønstergenkendelse af, hvad der ser rigtigt ud, er specifikt svækket over for plausibelt udseende, men subtilt forkert AI-genereret kode. Invester tilsvarende mere i opdagelsesmetoder, der ikke bygger på visuel mønstergenkendelse: [mutationstest](https://en.wikipedia.org/wiki/Mutation_testing) (emne 4.2), som tester faktisk adfærd frem for udseende, og egenskabs- eller invariantbaseret testning, som verificerer logisk korrekthed frem for overfladisk plausibilitet, bliver begge uforholdsmæssigt mere værdifulde netop på grund af dette skifte.

### Hold øje med metrikinflation i hele leveringspipelinen, ikke kun ved kodegenereringen

Metrikinflation fra AI-assisteret udvikling er ikke begrænset til kodningstrinnet; den kan forplante sig gennem hele kæden af gennemløbstid (emne 2.6): en større mængde AI-genererede pull requests kan pumpe metrikker for pull request-gennemløb (emne 2.9) op, selv mens det nyttige signal, metrikken oprindeligt var designet til at fange, reelt teamgennemløb, forbliver fladt eller endda falder, når byrden ved gennemgang og omkostningen ved rettelse regnes ordentligt med. Revidér hele jeres metriksæt for dette udbredelsesmønster, ikke kun de mest åbenlyse, direkte AI-nære metrikker.

### Byg en eksplicit, tidsbegrænset rekalibreringsplan frem for en permanent mistænksomhed

Den øgede granskning, dette emne anbefaler, er passende i en aktiv periode med indførelse og usikkerhed, men den bør ikke blive en permanent, ugransket skat på AI-assisteret arbejde på ubestemt tid. Efterhånden som jeres organisation opbygger reelt belæg gennem emne 7.2's måledisciplin, så revidér tærskler og værn på grundlag af det, belægget faktisk viser, stram yderligere, hvor risikoen er bekræftet, lempe, hvor den ikke er, frem for enten at ignorere risikoen helt eller behandle hvert stykke AI-assisteret kode med permanent, udifferentieret mistænksomhed uanset ophobende belæg.

### Kommunikér denne risiko gennemsigtigt frem for at behandle den som en grund til at modsætte sig AI-indførelse

Fremstil dette emnes vejledning som risikostyring for en reelt værdifuld ny evne, ikke som et argument imod AI-assisteret udvikling generelt. En organisation, der kommunikerer disse specifikke, navngivne risici klart og bygger proportionale værn mod dem, præcis som denne bog anbefaler for enhver anden metrik og teknik, den dækker, tager AI-assistance i brug mere sikkert og mere bæredygtigt end en, der enten ignorerer risikoen eller behandler den som grund til en generel modstand mod et reelt nyttigt sæt værktøjer.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Ingen rekalibrering, behandl AI-assisteret arbejde ens med menneskeskrevet kode | Enkel, ingen procesændring | Overser en specifik, belægsindikeret forhøjet risikoprofil |
| Generel, permanent øget granskning af al AI-assisteret kode | Maksimerer risikoreduktion på kort sigt | Uholdbar skat på en reelt værdifuld evne; ignorerer ophobende belæg |
| Tidsbegrænset, belægsdrevet rekalibrering | Balancerer risikostyring med bæredygtig indførelse | Kræver løbende måledisciplin (emne 7.2) for at vide, hvornår granskningen kan lempes |
| Investering i opdagelsesmetoder, der modstår "ser korrekt ud"-fejl | Adresserer den specifikke nye risiko direkte og varigt | Kræver forudgående investering i infrastruktur til mutationstest og egenskabsbaseret testning |

Den centrale spænding er **forsigtighed versus indførelseshastighed**. Overdreven, permanent forsigtighed spilder meget af den reelle værdi i AI-assisteret udvikling; utilstrækkelig forsigtighed risikerer den metrikinflation og kvalitetsudvanding, dette emne benævner, potentielt i betydelig skala, før de opdages. Løs spændingen gennem den tidsbegrænsede, belægsdrevne tilgang, dette emne anbefaler: øget granskning nu, kalibreret ned eller op, efterhånden som reelt belæg fra emne 7.2's måledisciplin ophobes, frem for enten en permanent generel politik eller en ugransket antagelse om, at intet har ændret sig.

## Spørgsmål at drøfte med dit team

1. **Har vi rekalibreret vores tærskler for ændringsfejlrate eller undslupne fejl for AI-tungt arbejde, eller anvender vi tærskler fra før AI-æraen uændret?** Hvis uændret, så drøft, om det afspejler en bevidst, belægsbaseret beslutning eller blot manglende opmærksomhed på spørgsmålet.

2. **Har vi opdagelsesmetoder, som mutationstest, der ikke bygger på en reviewers visuelle mønstergenkendelse, eller er vores gennemgangsproces helt afhængig af menneskelige øjne, der vurderer, om kode "ser rigtig ud"?** Det er den specifikke sårbarhed, dette emne identificerer; vurdér ærligt jeres nuværende opdagelsesevne mod den.

3. **Har metrikinflation forplantet sig ud over kodningstrinnet ind i vores pull request- eller udrulningsmetrikker, og ville vi overhovedet bemærke det i dag?** Gå hele jeres kæde af gennemløbstid igennem for dette udbredelsesmønster, ikke kun det mest åbenlyse udgangspunkt.

4. **Er vores nuværende øgede granskning af AI-assisteret kode, hvis der er nogen, baseret på ophobet belæg, eller er den en ugransket, ubegrænset standard, der aldrig er blevet genovervejet?** Drøft, hvilket belæg der skulle ophobes, før I ville overveje at lempe eller yderligere stramme de nuværende værn.

5. **Hvordan kommunikerer vi dette emnes risici internt: som grund til forsigtighed og proportionale værn eller som et implicit argument imod AI-indførelse generelt?** Vær ærlige om, hvordan samtalen faktisk bliver modtaget i jeres team, for et budskab, der opfattes som generel modstand, giver sjældent det proportionale, belægsbaserede svar, dette emne anbefaler.

6. **Hvordan ville det se ud, hvis vores organisation først efter betydelig skala opdagede, at både metrikinflation og kvalitetsudvanding var sket samtidig og uopdaget?** Det konkrete, lettere ubehagelige scenarie er værd at benævne eksplicit som den specifikke fejl, dette emnes værn er bygget til at forhindre.

## Sektorperspektiv

**Startup.** Hurtig indførelse med begrænset gennemgangskapacitet gør dette emnes risici særligt akutte for et lille team; "ser korrekt ud"-opdagelsesproblemet er sværere at fange med færre, mindre specialiserede reviewere. Invester tidligt i i det mindste let mutationstest på jeres mest kritiske kodestier, selv om omfattende dækning endnu ikke er mulig.

**Mindre virksomhed.** Formelle rekalibreringsprocesser er sandsynligvis unødvendige i denne skala, men en enkel, eksplicit bevidsthed om, at AI-genereret kode fortjener en lidt mere skeptisk læsning end normalt, netop fordi den har tendens til at se mere selvsikkert korrekt ud, end den måske er, koster intet og adresserer direkte dette emnes kernebekymring.

**Stor virksomhed.** Metrikinflation og kvalitetsudvanding vokser begge væsentligt med skalaen, da et falsk signal eller et uopdaget kvalitetsproblem på tværs af dusinvis af teams samtidig er langt mere indgribende og langt sværere at rulle tilbage end det samme problem i ét enkelt team. Invester bevidst i opgraderinger af opdagelsesevnen i hele organisationen (infrastruktur til mutationstest, indførelse af egenskabsbaseret testning) og i den tidsbegrænsede rekalibreringsdisciplin, dette emne anbefaler, fulgt centralt.

**Offentlig sektor.** Konsekvenserne af uopdaget kvalitetsudvanding er særligt alvorlige i de regulerede, sikkerhedskritiske eller tillidsfølsomme sammenhænge, der er almindelige i offentlige systemer. Anvend øget, belægsdrevet granskning specifikt på AI-assisterede ændringer i kodestier med høje konsekvenser (emne 6.4's logik om vægtning efter eksponering og udnyttelighed gælder tilsvarende her), og vær klar til over for en revisor eller et tilsynsorgan at påvise præcis, hvilken opdagelsesevne der findes mod netop denne risiko.

## Eksempler

**Stor virksomhed.** Ingeniørteamet for skadesbehandling i et forsikringsselskab tog bredt AI-kodeassistance i brug og bemærkede seks måneder senere en gradvis, men målbar stigning i undslupne fejl specifikt i kompleks betinget logik, den slags kode, hvor subtilt forkert håndtering af grænsetilfælde både er lettest for AI-værktøjer at generere plausibelt og sværest for en reviewer at fange ved inspektion alene. En undersøgelse bekræftede "ser korrekt ud"-mønstret, dette emne beskriver: den fejlbehæftede kode havde konsekvent brugt idiomatiske, velkendt udseende mønstre, som bestod gennemgang uden at udløse den granskning, et åbenlyst usædvanligt eller akavet stykke menneskeskrevet kode måske havde fået. Teamets svar rettede mutationstest specifikt mod kompleks betinget logik i hele virksomheden, en opdagelsesmetode, der modstår problemet med overfladisk plausibilitet, og målte en betydelig reduktion i netop denne fejlkategori inden for to kvartaler.

**Offentlig sektor.** En skattemyndighed, der pilottestede AI-assisteret udvikling for en delmængde af vedligeholdelsen af sin beregningsmotor, byggede den tidsbegrænsede rekalibreringsdisciplin, dette emne anbefaler, ind fra begyndelsen og fastsatte en eksplicit belægsindsamlingsperiode på seks måneder med øgede gennemgangskrav til AI-assisterede ændringer af beregningslogik specifikt. Det indsamlede belæg viste ingen statistisk meningsfuld forskel i fejlrate for veldefinerede, snævre ændringer, men bekræftede en forhøjet risiko for bredere, mere arkitektonisk væsentlige AI-assisterede ændringer. Myndighedens resulterende politik lempede den øgede granskning for kategorien af snævre ændringer, mens den bevarede og endda styrkede den for arkitektonisk væsentlige ændringer, et proportionalt, belægsbaseret udfald, som hverken ekstremet "ingen rekalibrering" eller "generel permanent granskning" ville have givet.

## Business case: motiver, ROI og TCO

Afkastet af bevidst at værne mod metrikinflation og kvalitetsudvanding er at undgå præcis det scenarie, eksemplet med forsikringsselskabet ovenfor viser: et uopdaget, gradvist sammensat kvalitetsproblem, der koster langt mere at opdage og afhjælpe bagefter, end opdagelsesinvesteringen, infrastruktur til mutationstest målrettet de højest risikable kode, ville have kostet proaktivt.

De samlede ejeromkostninger omfatter den investering i opdagelsesevne, dette emne anbefaler, og den løbende disciplin med belægsbaseret rekalibrering frem for et af ekstremerne, permanent mistænksomhed eller permanent uopmærksomhed. Den omkostning er beskeden og tidsbegrænset i forhold til risikoen for, at et betydeligt, skaleret kvalitetsproblem forbliver uopdaget netop fordi det, i kraft af hvordan disse værktøjer genererer kode, blev frembragt til at se korrekt ud for de gennemgangsprocesser, en organisation allerede havde på plads.

## Antimønstre og faldgruber

- **At anvende tærskler og opdagelsesmetoder fra før AI-æraen uændret:** overser en specifik, belægsindikeret forhøjet risikoprofil.
- **At stole udelukkende på menneskelig mønstergenkendelse i gennemgang af AI-genereret kode:** specifikt sårbart over for det "ser korrekt ud"-problem, dette emne identificerer.
- **At overse udbredelse af metrikinflation ud over kodegenereringen:** et falsk signal kan sprede sig gennem hele leveringspipelinen uopdaget.
- **Permanent, ugransket generel granskning uden belægsbaseret rekalibrering:** spilder uholdbart meget af den reelle værdi i AI-assisteret udvikling.
- **At kommunikere dette emnes risici som generel modstand mod AI-indførelse frem for proportional risikostyring:** underminerer både sikkerhed og indførelse.
- **Ingen investering i opdagelsesevne målrettet netop denne nye risikoprofil:** efterlader organisationen afhængig af gennemgangsmetoder, som dette emne har vist er specifikt svækket over for den.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Ingen bevidsthed om risikoen for metrikinflation eller kvalitetsudvanding specifik for AI-assisteret udvikling; eksisterende værn og opdagelsesmetoder anvendes uændret.
- **Niveau 2, Udvikl:** Der er en vis bevidsthed, men rekalibrering er ad hoc, og der er ikke foretaget investering i opdagelsesevne specifik for denne risiko.
- **Niveau 3, Standardisér:** Rekalibrerede tærskler og opdagelsesmetoder, der modstår "ser korrekt ud"-problemet (mutationstest og egenskabsbaseret testning), anvendes konsekvent på AI-assisteret arbejde.
- **Niveau 4, Styr:** En tidsbegrænset, belægsdrevet rekalibreringsdisciplin justerer aktivt granskningen ud fra ophobede data, og udbredelse af metrikinflation overvåges aktivt i hele pipelinen.
- **Niveau 5, Orkestrér:** Organisationen har en moden, proportional, løbende udviklende risikostyringsholdning til AI-assisteret udvikling, kommunikeret gennemsigtigt, der hverken spilder værdien gennem overdreven forsigtighed eller udsætter organisationen for uopdaget kvalitetsudvanding.

## Idéer til drøftelse

1. Har vi set tidligt belæg for "ser korrekt ud"-fejlmønstret i vores egen AI-assisterede kode?
2. Hvilken opdagelsesmetode ville mest direkte adressere dette emnes specifikke risiko for os?
3. Har metrikinflation fra AI-assistance forplantet sig til nogen af vores metrikker længere nede i pipelinen?
4. Er vores nuværende granskning af AI-assisteret kode belægsbaseret eller en ugransket standard?
5. Hvordan bliver dette emnes vejledning faktisk modtaget af vores team: som risikostyring eller som modstand mod AI-indførelse?

## Vigtigste pointer

- Metrikinflation og kvalitetsudvanding er **intensiverede versioner af risici, som denne bog allerede navngiver**, og kræver, at eksisterende værn arbejder hårdere, ikke helt nye rammeværk.
- AI-genereret kodes tendens til at **"se korrekt ud"** svækker specifikt den traditionelle, mønstergenkendende menneskelige kodegennemgang.
- Invester i **opdagelsesmetoder, der modstår overfladisk plausibilitet**, især mutationstest og egenskabsbaseret testning.
- Anvend en **tidsbegrænset, belægsdrevet rekalibrering**, ikke permanent generel mistænksomhed eller permanent ugransket tillid.
- **Kommunikér denne risiko som proportional risikostyring**, ikke som et argument imod AI-indførelse, for at understøtte både sikkerhed og bæredygtig brug.

## Kilder og videre læsning

- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (den parrede disciplin med hastighed og stabilitet, som dette emne anvender på en ny risikokategori).
- Jia, Yue, og Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): den opdagelsesmetode, som dette emne argumenterer for bliver uforholdsmæssigt værdifuld.
- GitHubs forskning i AI-parprogrammering og udvikleres produktivitet (branchedata om resultater og risiko ved AI-assisteret udvikling).
- *The Tyranny of Metrics*, af Jerry Z. Muller (metrikfiksering og risiko for manipulation, direkte relevant for den bekymring om metrikinflation, dette emne benævner).
