# 3.1 SPACE-frameworket

## Overblik og motivation

[SPACE-frameworket](https://queue.acm.org/detail.cfm?id=3454124), udgivet i 2021 af forskerne Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, blev bygget til at besvare et specifikt problem: metrikker for [udvikleres produktivitet](https://en.wikipedia.org/wiki/Productivity) i ét tal, kodelinjer, antal commits, story points, er trivielt lette at manipulere og vildleder rutinemæssigt. SPACE foreslår i stedet at måle på tværs af fem dimensioner: **Satisfaction and well-being** (tilfredshed og trivsel), **Performance** (præstation), **Activity** (aktivitet), **Communication and collaboration** (kommunikation og samarbejde) og **Efficiency and flow** (effektivitet og flow). Intet enkelt bogstav er tænkt til at stå alene; frameworkets egentlige bidrag er disciplinen i at holde alle fem i sigte samtidigt, så et team ikke kan se produktivt ud på én akse, mens det i det stille skader en anden.

Det betyder noget, fordi udvikleres produktivitet ikke er én ting. Et team kan være meget aktivt (mange commits, mange pull requests), mens det præsterer dårligt (arbejdet flytter ikke de resultater, der betyder noget). Et team kan præstere godt på kort sigt, mens tilfredsheden styrtdykker, en førende indikator for den afgang og det kvalitetskollaps, der viser sig måneder senere. SPACEs indsigt, der bygger direkte på denne bogs emne 1.2 og emne 1.3, er, at hver enkelt af disse dimensioner, forfulgt som et selvstændigt mål, vil blive manipuleret på bekostning af de andre, og frameworket findes specifikt for at gøre den afvejning synlig, før den gør reel skade.

For store teams giver SPACE ledelsen et fælles ordforråd til en samtale, der ellers som standard falder på den dimension, der er lettest at måle, næsten altid aktivitet. Store virksomheder, der sammenligner produktivitet på tværs af mange teams, har brug for et framework, der modstår trækket mod at tælle commits; offentlige organisationer, der står over for pres omkring rekruttering og fastholdelse på et konkurrencepræget arbejdsmarked, har brug for data om tilfredshed og trivsel lige så alvorligt som for leveringsdata, fordi tabet af en erfaren ingeniør til udbrændthed koster langt mere, end nogen enkelt sprints output nogensinde sparede.

## Nøgleprincipper

- **Ingen enkelt SPACE-dimension er troværdig isoleret.** Frameworkets værdi kommer specifikt af at måle flere sammen.
- **Mindst én metrik fra mindst tre dimensioner, med en blanding af subjektive og objektive kilder, er minimum for et afbalanceret billede.** Et metriksæt hentet udelukkende fra én dimension eller én datatype bruger ikke reelt SPACE.
- **Aktivitet er den dimension, der er mest tilbøjelig til at blive misbrugt som selvstændig stedfortræder.** Den er den nemmeste at måle og den mindst repræsentative for faktisk værdi alene.
- **Måling på teamniveau og individniveau kræver forskellig behandling.** SPACE blev primært designet til indsigt på team- og systemniveau, ikke til individuelle scorecards.
- **De fem dimensioner påvirker hinanden.** En ændring, der forbedrer én, kan forringe en anden, og frameworket findes for at fange den afvejning.

## Anbefalinger

### Byg dit metriksæt ud fra mindst tre dimensioner, før du stoler på det

Indfør ikke SPACE ved at vælge én enkelt yndlingsdimension, som regel aktivitet eller præstation, og kalde det færdigt. Vælg bevidst mindst én metrik fra mindst tre af de fem dimensioner, med en blanding af objektiv instrumentering (emne 1.5) og subjektive spørgeskemadata (emne 3.7), før du fremlægger nogen konklusion om teamets produktivitet. Denne minimumssammensætning er det, der forhindrer SPACE i at falde tilbage i det problem med én enkelt stedfortræder, det var designet til at løse.

### Behandl aktivitetsmetrikker som kontekst, aldrig som overskriften

Antal commits, kodelinjer og antal pull requests er legitime data i SPACEs aktivitetsdimension, men de bør aldrig være den primære eller eneste metrik, der præsenteres om et teams produktivitet. Brug aktivitetsdata til at give kontekst til de andre dimensioner, for eksempel at bemærke, at et fald i aktivitet faldt sammen med en stigning i tilfredshed, fordi teamet endelig havde plads til at betale teknisk gæld af, frem for som en selvstændig dom. Emne 3.4 dækker denne dimensions specifikke risici i dybden.

### Anvend SPACE på team- og systemniveau, ikke individniveau

SPACEs oprindelige forskning og dets efterfølgende udbredelse i branchen behandler begge frameworket som en linse til at forstå team- og organisationsproduktivitet, ikke som et individuelt præstationsscorecard. At anvende SPACE-dimensioner til at rangordne enkeltpersoner, især aktivitetsdimensionen, genskaber netop den manipulationsrisiko, emne 1.2 advarer om, og misanvender et framework, der aldrig blev valideret til den brug.

### Hold øje med afvejninger mellem dimensioner, ikke blot bevægelse inden for én

Frameworkets reelle diagnostiske kraft kommer af at se, hvordan dimensionerne bevæger sig i forhold til hinanden. En stigende præstationsmetrik sammen med faldende tilfredshed er et advarselstegn, der er værd at undersøge med det samme, og som potentielt indikerer et uholdbart tempo. En stigende aktivitetsmetrik sammen med flad eller faldende præstation tyder på travlhed frem for reel fremdrift. Gennemgå alle fem dimensioner sammen med en fast rytme specifikt for at fange disse mønstre på tværs af dimensioner, ikke blot for at kontrollere hvert tal isoleret.

### Bland rytmerne passende på tværs af dimensioner

Nogle SPACE-dimensioner ændrer sig langsomt og måles bedst periodisk (tilfredshed, typisk i kvartalsvise spørgeskemacyklusser); andre ændrer sig hurtigt og har gavn af hyppigere, automatiseret sporing (aktivitet, effektivitet og flow, begge for en stor del kan instrumenteres fra eksisterende systemer). Afstem din målerytme efter hver dimensions naturlige ændringshastighed frem for at tvinge hver metrik på den samme rapporteringsplan.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Metriksæt med én dimension (som regel aktivitet) | Enkelt, billigt, velkendt | Let at manipulere, overser den menneskelige pris for uholdbar praksis |
| Fuld indførelse af SPACE med fem dimensioner | Afbalanceret, modstår manipulation på én akse, fanger afvejninger | Kræver mere instrumentering og investering i spørgeskemaer |
| SPACE anvendt på teamniveau | Matcher frameworkets validerede brug, beskytter enkeltpersoner mod misbrug | Kan ikke besvare spørgsmål på individniveau, som ledelsen undertiden ønsker |
| SPACE anvendt på individniveau | Føles mere direkte handlingsrettet for nogle ledere | Misanvender frameworket; stærk risiko for manipulation og dårlig moral |

Den centrale spænding er **målingens fuldstændighed versus pris og kompleksitet**. En fuld, afbalanceret SPACE-implementering kræver mere instrumentering, mere arbejde med design af spørgeskemaer og mere disciplin til at gennemgå alle fem dimensioner sammen, end et simpelt aktivitetsdashboard gør. Løs spændingen ved at starte med et reelt minimalt, men afbalanceret sæt, mindst én metrik fra mindst tre dimensioner, frem for enten helt at springe frameworkets disciplin over eller forsøge en overvældende, fuldt instrumenteret version af alle fem dimensioner fra dag ét.

## Spørgsmål at drøfte med dit team

1. **Trækker vores nuværende produktivitetsmetriksæt på mindst tre SPACE-dimensioner, eller er det domineret af aktivitetsdata alene?** Gennemgå dit dashboard eksplicit mod de fem dimensioner; de fleste organisationer er, vurderet ærligt, langt mere aktivitetstunge, end de er klar over.

2. **Har vi nogensinde set én SPACE-dimension forbedres, mens en anden i det stille blev forringet, og bemærkede vi det dengang?** Denne afvejning på tværs af dimensioner er netop det, frameworket er designet til at fange. Se tilbage over det seneste år efter en periode, hvor leveringsmetrikker blev forbedret, og spørg, hvad data om tilfredshed eller trivsel viste i samme vindue.

3. **Bruges SPACE-data nogensinde, selv uformelt, til at vurdere eller sammenligne enkeltpersoner frem for teams?** Det misanvender frameworket og inviterer til manipulation. Vær ærlig om, hvordan disse metrikker faktisk drøftes i praksis, ikke blot hvordan politikken siger, at de skal bruges.

4. **Hvordan ville vi bemærke, om et team forbedrede sine præstationsmetrikker på bekostning af et uholdbart tempo?** Uden data om tilfredshed og trivsel gennemgået sammen med præstationsdata er den slags afvejning usynlig, indtil den dukker op som afgang eller et kvalitetskollaps måneder senere.

5. **Hvad er vores målerytme for hver af de fem dimensioner, og matcher den, hvor hurtigt hver dimension faktisk ændrer sig?** En kvartalsvis tilfredshedsundersøgelse parret med aktivitetsdata i realtid er en rimelig uoverensstemmelse i rytme; den samme rytme anvendt på alle fem uden eftertanke er det ikke.

6. **Hvis en ny ingeniørchef begyndte i morgen og kun kiggede på vores dashboard, ville vedkommende så få et afbalanceret billede af teamets produktivitet eller et skævt?** Det er en praktisk test af, om jeres metriksæt faktisk har opnået SPACEs balance, eller blot hentyder til frameworket, mens det i praksis forbliver aktivitetsdomineret.

## Sektorperspektiv

**Startup.** En fuld implementering af fem dimensioner er som regel overkill for en håndfuld ingeniører, der taler sammen dagligt og direkte kan fornemme sundheden i tilfredshed og samarbejde. Den ene vane, der er værd at indføre tidligt, er at stå imod trækket mod metrikker kun for aktivitet, når teamet begynder at vokse ud over den størrelse, hvor uformel bevidsthed dækker alt.

**Mindre virksomhed.** Uden en dedikeret funktion for people analytics, hold det enkelt: par de leveringsdata, du allerede har (emne 2.10), med en kort, uformel, regelmæssig opfølgning på tilfredshed, selv en enkel pulsmåling med ét spørgsmål. Den minimale parring indfanger allerede frameworkets kernedisciplin langt bedre end et dashboard kun for aktivitet.

**Stor virksomhed.** Det er her, det fulde framework fortjener sin kompleksitet. Standardisér et afbalanceret SPACE-metriksæt på tværs af teams, så ledelsen kan sammenligne produktivitet retfærdigt frem for som standard at falde på det team, der har den mest imponerende commit-graf, og invester i den spørgeskemainfrastruktur, emne 3.7 dækker, for at gøre data om tilfredshed og samarbejde lige så pålidelige som den objektive instrumentering.

**Offentlig sektor.** Pres omkring rekruttering og fastholdelse, især hvor løn i den offentlige sektor ikke altid kan konkurrere med tilbud fra den private sektor, gør data om tilfredshed og trivsel til en reelt strategisk bekymring, ikke et blødt tillæg. Behandl SPACE lige så alvorligt som leveringsmetrikker i arbejdsstyrkeplanlægning og budgetbegrundelse, da prisen for at miste en erfaren ingeniør til udbrændthed måles i måneders institutionel viden, som en afløser ikke straks kan levere.

## Eksempler

**Stor virksomhed.** En softwarevirksomheds ingeniørledelse havde i årevis fulgt antal commits og gennemførte story points som sit primære produktivitetssignal. Efter at have indført et fuldere SPACE-metriksæt, inklusive en kvartalsvis tilfredshedsundersøgelse og analyse af samarbejdsnetværk (emne 3.5), opdagede ledelsen, at det team med de højeste aktivitetstal også havde de laveste tilfredshedsscorer og den højeste frivillige afgang i løbet af det følgende år. Aktivitetstallene alene havde været aktivt vildledende; det fuldere billede førte til en bevidst reduktion af det teams samtidige arbejdsbelastning (emne 2.5's WIP-princip anvendt på det menneskelige niveau) og en målbar genopretning af både tilfredshed og, til sidst, bæredygtig præstation.

**Offentlig sektor.** En national myndighed for digitale tjenester, der konkurrerede om ingeniørtalenter mod private lønninger, den ikke kunne matche, indførte et afbalanceret SPACE-metriksæt specifikt for at fremføre sagen for ikke-monetære investeringer i fastholdelse: bedre værktøj, beskyttet fokustid og reduceret procesfriktion. Data fra tilfredshedsundersøgelser kombineret med metrikker for effektivitet og flow (emne 3.6) viste, at hyppigheden af afbrydelser, ikke løn, var den stærkeste forudsigelse af hensigt om at forlade stillingen i data fra udtrædelsessamtaler. Myndighedens efterfølgende investering i en politik for beskyttet fokustid, begrundet direkte med disse SPACE-data, korrelerede med en målbar forbedring af fastholdelsen i løbet af de følgende atten måneder.

## Business case: motiver, ROI og TCO

Afkastet af at indføre SPACE fuldt ud er undgået afgang og undgået kvalitetskollaps drevet af udbrændthed, som begge er langt dyrere end frameworkets instrumenteringsomkostning. Et metriksæt kun for aktivitet kan se fremragende ud i et år eller to, lige indtil den menneskelige pris indhenter det på én gang, hvorefter prisen for at erstatte tabt ekspertise og genopbygge teamets sundhed overstiger enhver produktivitetsgevinst, det snævre metriksæt nogensinde syntes at vise.

De samlede ejeromkostninger omfatter spørgeskemainfrastruktur (emne 3.7) og disciplinen i at gennemgå alle fem dimensioner sammen frem for som standard at vælge den letteste. Den pris er reelt umagen værd: virksomhedseksemplet ovenfor viser et reelt, opdageligt mønster, høj aktivitet, der maskerer høj risiko for afgang, som et snævrere metriksæt aldrig ville have afsløret, før skaden allerede var sket.

## Antimønstre og faldgruber

- **At indføre SPACE kun af navn, mens man i praksis forbliver aktivitetsdomineret:** den mest almindelige fejltilstand, og den underminerer frameworkets samlede formål.
- **At anvende SPACE-dimensioner på individuelle scorecards:** misanvender et framework, der er valideret til indsigt på team- og systemniveau.
- **At gennemgå dimensioner isoleret i stedet for at holde øje med afvejninger på tværs af dimensioner:** overser det mønster, SPACE specifikt er designet til at fange.
- **At tvinge hver dimension på den samme målerytme:** spilder indsats på dimensioner, der ændrer sig langsomt, og undermåler dem, der ændrer sig hurtigt.
- **At behandle en enkelt tilfredshedsscore som tilstrækkelig uden objektive data:** mister balancen mellem subjektive og objektive kilder, frameworket kalder på.
- **At ignorere en forværret tendens i én dimension, fordi en anden ser god ud:** netop den fejl, frameworkets disciplin på tværs af dimensioner findes for at forhindre.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Produktivitet måles udelukkende gennem aktivitetsmetrikker, uden at data om tilfredshed, samarbejde eller effektivitet indsamles.
- **Niveau 2, Udvikl:** Nogle yderligere dimensioner måles uformelt, men der er ingen konsekvent gennemgang på tværs af dimensioner og ingen standard for minimumssammensætning.
- **Niveau 3, Standardisér:** Et afbalanceret metriksæt, der trækker på mindst tre SPACE-dimensioner, anvendes konsekvent på teamniveau i hele organisationen.
- **Niveau 4, Styr:** Alle fem dimensioner gennemgås sammen med en fast rytme, afvejninger på tværs af dimensioner undersøges aktivt, og frameworket informerer reelle bemandings- og procesbeslutninger.
- **Niveau 5, Orkestrér:** SPACE-data former direkte arbejdsstyrkeplanlægning og investering i fastholdelse, og organisationen kan pege på specifikke indsatser, informeret af mønstre på tværs af dimensioner, der målbart forbedrede både levering og udvikleres trivsel sammen.

## Idéer til drøftelse

1. Hvilken SPACE-dimension er mest undermålt i vores nuværende metriksæt?
2. Har vi nogensinde set et teams aktivitet stige, mens tilfredsheden i det stille faldt?
3. Hvordan ville vi i dag fange et team, der bytter langsigtet bæredygtighed for kortsigtet output?
4. Bruges nogen SPACE-nærliggende data i øjeblikket til at vurdere enkeltpersoner frem for teams?
5. Hvordan ville et reelt afbalanceret produktivitetsdashboard konkret se ud for os?

## Vigtigste pointer

- SPACE spænder over fem dimensioner, **Satisfaction and well-being, Performance, Activity, Communication and collaboration samt Efficiency and flow**, og ingen enkelt er troværdig alene.
- Byg et metriksæt ud fra **mindst tre dimensioner**, med en blanding af objektive og subjektive datakilder.
- Behandl **aktivitetsmetrikker som kontekst**, aldrig som det primære produktivitetssignal (emne 3.4).
- Anvend SPACE på **team- og systemniveau**, ikke som et individuelt scorecard.
- Gennemgå dimensionerne sammen, og hold øje med **afvejninger på tværs af dimensioner**, ikke blot bevægelse inden for en enkelt.

## Kilder og videre læsning

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021): den oprindelige artikel om SPACE-frameworket.
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (det forskningsgrundlag, der deles med DORA-metrikkerne).
- *Peopleware: Productive Projects and Teams*, af Tom DeMarco og Timothy Lister (det klassiske argument for at behandle udvikleres produktivitet som et menneskeligt, ikke rent mekanisk, spørgsmål).
- *Drive: The Surprising Truth About What Motivates Us*, af Daniel H. Pink (motivationsforskning, der er relevant for måling af tilfredshed og trivsel).
