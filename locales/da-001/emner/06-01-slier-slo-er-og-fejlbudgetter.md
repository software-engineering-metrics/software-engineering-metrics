# 6.1 Serviceniveauindikatorer, -mål og fejlbudgetter

## Overblik og motivation

**[Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, den disciplin, der blev banebrydende hos Google og dokumenteret i bogen *Site Reliability Engineering*, bidrog med et ordforråd, som dette emne bygger direkte på: en **serviceniveauindikator (SLI, service level indicator)** er et direkte målt signal om en tjenestes sundhed, svartid, fejlrate, tilgængelighed. Et **serviceniveaumål (SLO, service level objective)** er målintervallet for den indikator, f.eks. at 99,9 % af forespørgsler lykkes inden for 200 millisekunder. Og et **fejlbudget (error budget)** er det tilladte underskud, de 0,1 % af forespørgsler, der må fejle, behandlet ikke som en defekt, der skal elimineres, men som en forbrugelig ressource, der bevidst kan bruges til at tage risiko: at udrulle en risikabel ændring, køre et eksperiment eller blot acceptere, at perfekt pålidelighed hverken er opnåelig eller, fra et vist punkt, værd sin pris.

Denne sidste idé, fejlbudgettet som en forbrugelig ressource frem for et tal, man minimerer mod nul, er det vigtigste enkeltbegreb i dette emne og formentlig i hele denne del. Den løser en spænding, der plager mange organisationer: ingeniørerne vil levere funktioner og tage rimelig risiko; driften vil have maksimal stabilitet. Uden et fælles, kvantificeret fejlbudget bliver det en endeløs, politisk ladet forhandling. Med et bliver det en enkel, objektiv regel: brug frit, så længe der er budget, sæt farten ned og prioriter automatisk stabilitetsarbejde, når det er opbrugt. Det gør en filosofisk uenighed til en aritmetisk.

For store teams er SLO'er og fejlbudgetter det, der gør pålidelighed målbar og til at forhandle om frem for et uopnåeligt, uudtalt absolut, som alle teams stille fejler i at opfylde, mens de føler sig vagt skyldige. Store virksomheder bruger SLO'er til at fastsætte klare, kontraktlige forventninger mellem teams og over for kunder; offentlige organisationer, der driver kritisk offentlig infrastruktur, bruger dem til at fastsætte forsvarlige, offentligt begrundbare pålidelighedsmål frem for en umulig standard om perfektion, som intet reelt system kan opretholde.

## Nøgleprincipper

- **100 % pålidelighed er det forkerte mål for næsten ethvert system.** Det er normalt uopnåeligt, og at jagte det ud over et vist punkt bytter aktivt hastighed væk uden nogen meningsfuld brugerfordel.
- **Et SLO bør afspejle det, brugerne faktisk lægger mærke til og bekymrer sig om**, ikke et vilkårligt rundt tal valgt, fordi det lyder betryggende.
- **Fejlbudgettet gør pålidelighed til en forbrugelig ressource** og giver både ingeniører og drift en fælles, objektiv regel for, hvornår man skal levere hurtigt, og hvornår man skal sætte farten ned.
- **SLI'er skal måles ud fra brugerens faktiske oplevelse**, hvor det er muligt, ikke blot ud fra et internt systems selvrapporterede sundhed.
- **Opbrug af fejlbudgettet udløser et forudbestemt, aftalt svar**, ikke en ad hoc-diskussion hver gang det sker.

## Anbefalinger

### Vælg SLI'er, der afspejler den reelle brugeroplevelse

Vælg indikatorer målt så tæt på den faktiske brugeroplevelse som muligt: succesrate og svartid for forespørgsler målt i kanten eller ved load balanceren, ikke blot interne sundhedstjek af tjenester, der kan rapportere "sund", mens brugerne oplever reelle problemer. En SLI, der måler noget, brugeren aldrig faktisk lægger mærke til, en intern komponent, der teknisk er oppe, mens den samlede forespørgsel stadig fejler, måler det forkerte, uanset hvor let den er at instrumentere.

### Sæt SLO-målet ud fra det, brugerne faktisk har brug for, ikke et vilkårligt rundt tal

Modstå refleksen til at sætte et mål som "99,99 % oppetid" blot fordi det lyder imponerende stringent. Undersøg i stedet, hvilket pålidelighedsniveau brugerne reelt lægger mærke til og bekymrer sig om, informeret af historiske hændelsesdata, brugerundersøgelser og de påviste omkostninger ved at opnå hver yderligere forøgelse af pålidelighed, for at gå fra 99,9 % til 99,99 % koster ofte langt mere ingeniørindsats, end det kostede at gå fra 99 % til 99,9 %, for en aftagende og til sidst ubetydelig fordel, brugeren kan mærke.

### Behandl fejlbudgettet som en forbrugelig ressource med et forudbestemt svar på opbrug

Beregn fejlbudgettet direkte ud fra SLO'et (et tilgængelighedsmål på 99,9 % over 30 dage tillader omkring 43 minutters tilladt nedetid), og følg forbruget mod det løbende. Aftal på forhånd, før nogen specifik hændelse, hvad der sker, når budgettet er opbrugt: en almindelig, effektiv politik er, at funktionsarbejde sættes på pause, og teamets prioritet automatisk skifter til pålidelighedsarbejde, indtil budgettet er genoprettet. Denne forudbestemte regel fjerner behovet for at genforhandle afvejningen under pres ved hver enkelt hændelse.

### Brug fejlbudgettet til at træffe bevidste, informerede risikobeslutninger

Et sundt, ubrugt fejlbudget er ikke noget, man skal hamstre; det er tilladelse til at tage rimelig risiko, udrulle en ændring med forhøjet, men acceptabel risiko, køre et kaosingeniøreksperiment (emnet om kaosingeniørarbejde i den søsterbog, `software-engineering-guide`, dækker det direkte) eller acceptere en mere risikabel arkitekturændring, for budgettet findes netop for at blive brugt bevidst frem for bevaret urørt. Et fejlbudget, der aldrig bliver brugt, tyder enten på et overforsigtigt team eller et SLO sat for løst i forhold til den faktisk opnåede pålidelighed, begge dele værd at undersøge.

### Gennemgå og revidér SLO'er jævnligt, ud fra belæg, ikke inerti

Et SLO sat for år siden afspejler måske ikke længere nuværende brugerforventninger, systemarkitektur eller forretningsprioriteter. Gennemgå SLO'er i en fast rytme, og tjek historisk opnået pålidelighed, brugerfeedback og om målet stadig udgør et meningsfuldt afvejningspunkt frem for enten et let opfyldt mål, der kunne strammes for at give mere hastighed andre steder, eller et urealistisk mål, som teamet reelt har opgivet at nå.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Intet formelt SLO (implicit "så pålidelig som muligt") | Ingen opsætningsomkostning | Endeløs, ujordet forhandling mellem hastighed og stabilitet; ingen fælles regel |
| Ambitiøst, meget højt SLO (99,99 %+) | Signalerer alvor om pålidelighed | Ofte unødvendige omkostninger; aftagende udbytte ud over det, brugerne faktisk lægger mærke til |
| Belægsbaseret SLO forankret i brugeroplevelsen | Afspejler reel værdi; forsvarligt og opnåeligt | Kræver reelle data og analyse for at blive sat rigtigt |
| Fejlbudget med forudbestemt svar på opbrug | Fjerner ad hoc-forhandling; objektiv, hurtig beslutningstagning | Kræver organisatorisk opbakning og disciplin til faktisk at overholde den forudbestemte regel |

Den centrale spænding er **ambition versus opnåelighed**. Et højt, ambitiøst SLO føles som et signal om alvor omkring kvalitet, men at jagte pålidelighed ud over det, brugerne faktisk lægger mærke til, bytter reel hastighed væk uden reel fordel, og et urealistisk mål, som teamet aldrig faktisk opfylder, lærer alle at holde op med at tage SLO'et alvorligt. Løs spændingen ved at forankre SLO'et i faktisk belæg, hvad lægger brugerne mærke til, hvad har systemet historisk opnået, hvad koster hver yderligere forøgelse, frem for i ambition eller et ønske om at tage sig stringent ud på et scorekort.

## Spørgsmål at drøfte med dit team

1. **Er vores nuværende SLO forankret i belæg for, hvad brugerne faktisk lægger mærke til, eller blev det sat ambitiøst, fordi et højt tal føltes passende alvorligt?** Følg jeres nuværende måls oprindelse, hvis I kan, og vurdér ærligt, om det afspejler reel brugerundersøgelse eller blot ingeniørmæssig intuition.

2. **Har vi et forudbestemt, aftalt svar på opbrug af fejlbudgettet, eller genforhandles afvejningen hver gang, det sker?** Hvis det ærlige svar er det sidste, er det et hul, der er værd at lukke, før næste hændelse tvinger diskussionen under pres.

3. **Bliver vores fejlbudget nogensinde faktisk brugt bevidst, på en ændring med beregnet risiko eller et eksperiment, eller bliver det kun forbrugt ved et tilfælde gennem hændelser?** Et budget, der aldrig bruges bevidst, kan tyde på et overforsigtigt team, der går glip af legitime muligheder, som budgettet findes for at muliggøre.

4. **Måles vores SLI'er ud fra reel brugeroplevelse eller ud fra intern systemsundhed, der måske ikke afspejler det, brugerne faktisk møder?** Tjek jeres nuværende instrumentering mod netop dette skel; det er et almindeligt hul, selv i ellers modne pålidelighedsprogrammer.

5. **Hvornår gennemgik vi sidst vores SLO mod nuværende belæg, og har noget ændret sig, brugerforventninger, systemarkitektur, forretningsprioriteter, der ville begrunde en revision?** Hvis I ikke kan huske en nylig gennemgang, er den mangel i sig selv værd at drøfte.

6. **Hvad ville det koste os i ingeniørindsats at flytte vores nuværende SLO op med yderligere ét "ni-tal" af pålidelighed, og ville omkostningen være begrundet af nogen reel brugerfordel?** Denne konkrete cost-benefit-ramme hjælper med at forankre spændingen mellem ambition og opnåelighed i reelle tal frem for abstrakt præference.

## Sektorperspektiv

**Startup.** Formelle SLO'er er ofte unødvendige meget tidligt, når teamet kan reagere på pålidelighedsproblemer direkte og uformelt. Indfør i det mindste et groft, uformelt SLO, når I har reelle betalende kunder, der er afhængige af oppetid, for disciplinen med et eksplicit mål, selv et løst fulgt, hjælper med at prioritere pålidelighedsarbejde mod funktionspres tidligere, end de fleste unge virksomheder tænker på.

**Mindre virksomhed.** De fleste moderne hostings- og observerbarhedsplatforme rapporterer grundlæggende data om oppetid og svartid med minimal opsætning; brug dette til at sætte et enkelt, opnåeligt SLO frem for et ambitiøst, I ikke realistisk kan følge eller handle på med begrænset driftskapacitet.

**Stor virksomhed.** SLO'er i denne skala understøtter ofte kontraktlige serviceniveauaftaler med reelle økonomiske konsekvenser, hvilket gør belægsbaseret målsætning og disciplineret styring af fejlbudgetter særlig vigtig. Invester i SLI'er forankret i reel brugeroplevelse frem for bekvemme interne sundhedstjek, og etablér politikken for svar på opbrug formelt, med ledelsesopbakning, før der er brug for den under pres.

**Offentlig sektor.** Pålidelighedsmål for kritisk offentlig infrastruktur har nogle gange juridisk eller regulatorisk vægt, og et urealistisk, ikke opnået mål, der opdages under en revision eller en offentlig hændelse, skader den institutionelle troværdighed betydeligt. Sæt mål på grundlag af reelt, dokumenteret bruger- og missionsbehov, og vær offentligt gennemsigtig om den bevidste afvejning, et fejlbudget repræsenterer, frem for at antyde en uopnåelig standard om perfektion.

## Eksempler

**Stor virksomhed.** Et cloudlagringsfirma havde i årevis målsat "maksimal oppetid" uden et formelt SLO, hvilket førte til en kronisk, uløst spænding mellem produktteamet (der ville levere funktioner hurtigt) og infrastrukturteamet (der ville have maksimal forsigtighed), som blev udkæmpet påny i hvert eneste planlægningsmøde for udgivelser. Indførelsen af et formelt tilgængelighedsmål på 99,95 % med et eksplicit fejlbudget og en forudbestemt politik, funktionsarbejde pauser automatisk, når budgettet er opbrugt, løste den tilbagevendende forhandling fuldstændigt: begge teams kunne se det samme tal og blive enige om den samme regel, og virksomheden rapporterede en målbar stigning i leverede funktioner i perioder med sundt budget ved siden af en målbar, bevidst opbremsning i de to perioder i det følgende år, hvor budgettet reelt var opbrugt, præcis som politikken havde til hensigt.

**Offentlig sektor.** Et nationalt vejrtjenestes offentlige varslingssystem havde i årevis fungeret under en uformel forventning om "altid tilgængeligt", uden noget dokumenteret mål og med betydeligt, uadresseret driftspres på vagtteamet, der forsøgte at leve op til en uudtalt, reelt umulig standard. Et nyligt indført formelt SLO, 99,9 % tilgængelighed med en klart kommunikeret offentlig forklaring af fejlbudgettet, gav driftsteamet eksplicit, forsvarlig tilladelse til at planlægge vedligeholdelsesvinduer inden for budgettet, noget den tidligere uudtalte forventning om "altid tilgængeligt" havde gjort politisk vanskeligt at gøre, selv når det var reelt nødvendigt for systemets langsigtede sundhed. Offentlig kommunikation, der forklarede fejlbudgetbegrebet direkte frem for at skjule det, blev modtaget positivt som tegn på ærlig, moden driftspraksis frem for en svækkelse af forpligtelsen til servicekvalitet.

## Business case: motiver, ROI og TCO

Afkastet af formelt at indføre SLO'er og fejlbudgetter er at løse en ellers endeløs, politisk dyr forhandling mellem hastighed og stabilitet med én fælles, objektiv regel. Eksemplet med cloudlagring ovenfor viser det konkret: års tilbagevendende, uløst spænding mellem to teams blev løst med ét formelt mål og en forudbestemt politik, hvilket frigjorde betydelig organisatorisk energi, der tidligere var gået til gentagne gange at genforhandle den samme afvejning.

De samlede ejeromkostninger omfatter analyseindsatsen for at sætte et belægsbaseret mål rigtigt og disciplinen til at overholde det forudbestemte svar på opbrug, selv under pres for alligevel at levere en særligt ønsket funktion. Den disciplinomkostning er reel, men langt lavere end de løbende omkostninger ved en uløst, kronisk forhandling, der æder organisatorisk energi i hver planlægningscyklus på ubestemt tid.

## Antimønstre og faldgruber

- **At sætte et ambitiøst SLO uden belæg bag:** giver et urealistisk mål, teamet holder op med at tage alvorligt, eller et unødvendigt dyrt et, der jagter en fordel, brugerne ikke lægger mærke til.
- **Intet forudbestemt svar på opbrug af fejlbudgettet:** tvinger den samme vanskelige afvejningsdiskussion under pres hver gang, det sker.
- **At måle SLI'er ud fra intern systemsundhed frem for reel brugeroplevelse:** kan rapportere "sund", mens brugerne oplever reelle problemer.
- **Aldrig bevidst at bruge et sundt fejlbudget:** kan tyde på overdreven forsigtighed og forpasset legitim mulighed.
- **At sætte et mål én gang og aldrig gense det:** et SLO kan blive forældet, når brugerforventninger, arkitektur og prioriteter ændrer sig.
- **At behandle fejlbudgetpolitikken som valgfri under pres:** en forudbestemt regel, der tilsidesættes, hver gang det er ubelejligt, giver ingen reel beslutningsværdi.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Pålidelighedsmål er implicitte eller ambitiøse, uden formelt defineret SLO, SLI eller fejlbudget.
- **Niveau 2, Udvikl:** Nogle tjenester har et uformelt SLO, men SLI'er afspejler måske ikke reel brugeroplevelse, og der er ingen forudbestemt politik for opbrug.
- **Niveau 3, Standardisér:** Belægsbaserede SLO'er med SLI'er for reel brugeroplevelse og en forudbestemt politik for opbrug af fejlbudgettet er etableret konsekvent på tværs af kritiske tjenester.
- **Niveau 4, Styr:** Fejlbudgetter bruges aktivt og bevidst på beregnet risikotagning, og SLO'er gennemgås og revideres i en fast, belægsbaseret rytme.
- **Niveau 5, Orkestrér:** SLO'er og fejlbudgetter er integreret i hele organisationen som den fælles, objektive mekanisme til at afbalancere hastighed og stabilitet, og organisationen kan pege på specifikke beslutninger, rammeværket muliggjorde, som en ujordet forhandling ikke ville have løst lige så effektivt.

## Idéer til drøftelse

1. Er vores nuværende SLO forankret i belæg eller i ambition?
2. Har vi et forudbestemt svar på opbrug af fejlbudgettet, som vi faktisk ville overholde under pres?
3. Hvornår brugte vi sidst bevidst et sundt fejlbudget på en beregnet risiko?
4. Måler vores SLI'er reel brugeroplevelse eller bekvemme interne sundhedstjek?
5. Hvad ville det koste os at hæve vores SLO med ét yderligere "ni-tal", og ville omkostningen være begrundet?

## Vigtigste pointer

- En **serviceniveauindikator (SLI)** måler reel brugeroplevelse; et **serviceniveaumål (SLO)** er dens belægsbaserede mål; et **fejlbudget** er det bevidst forbrugelige tilladte underskud.
- **100 % pålidelighed er normalt det forkerte mål**; forankr dit SLO i det, brugerne faktisk lægger mærke til, og hvad hver yderligere forøgelse reelt koster.
- Behandl fejlbudgettet som en **forbrugelig ressource med et forudbestemt svar på opbrug**, så afvejningen mellem hastighed og stabilitet ikke skal genforhandles under pres hver gang.
- Mål SLI'er ud fra **reel brugeroplevelse**, ikke blot bekvemme interne sundhedstjek.
- **Gennemgå og revidér SLO'er jævnligt**, ud fra belæg, da et forældet mål mister sin nytte, efterhånden som systemet og dets brugere ændrer sig.

## Kilder og videre læsning

- *Site Reliability Engineering: How Google Runs Production Systems*, redigeret af Betsy Beyer, Chris Jones, Jennifer Petoff og Niall Richard Murphy (grundlæggende værk, der definerer SLI'er, SLO'er og fejlbudgetter).
- *The Site Reliability Workbook*, redigeret af Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara og Stephen Thorne (praktisk vejledning i implementering af SLO'er og fejlbudgetter).
- *Implementing Service Level Objectives*, af Alex Hidalgo (en omfattende, praktikerorienteret vejledning i at designe og operationalisere SLO'er).
- *Accelerate: The Science of Lean Software and DevOps*, af Nicole Forsgren, Jez Humble og Gene Kim (sammenhængen mellem pålidelighedspraksis og leveringspræstation).
