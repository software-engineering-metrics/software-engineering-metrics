# 2.3 Flowhastighed og flowfordeling

## Overblik og motivation

**Flowhastighed** er antallet af flowelementer (emne 2.2) gennemført i en given periode, Flow Frameworks mål for [gennemstrømning](https://en.wikipedia.org/wiki/Throughput). **Flowfordeling** er andelen af hver flowelementtype, funktioner, fejl, risiko og gæld, blandt de elementer, der blev gennemført i samme periode. De to metrikker er designet til at blive læst sammen: hastighed alene besvarer "hvor meget leverede vi", og fordeling alene besvarer "hvilken slags arbejde var det", men ingen af spørgsmålene betyder meget uden det andet. Et team kan øge sin hastighed, mens dets fordeling i det stille skifter væk fra funktioner og mod omarbejde af fejl, hvilket ser ud som acceleration på et hastighedsdiagram og i virkeligheden er et symptom på faldende kvalitet.

Denne parring er den samme disciplin, som emne 1.2 beder om for hver metrikfamilie i denne bog: rapportér aldrig et hastighedstal uden det værn, der viser, hvad den hastighed kostede. Flowhastighed er denne dels mest direkte generalisering af en gennemstrømningsmetrik, tættere i ånden på udrulningsfrekvens (emne 2.10) end på noget andet enkelt tal i denne bog, men bevidst om elementtyper på en måde, udrulningsfrekvens aldrig var. Udrulningsfrekvens fortæller dig, hvor ofte kode når produktion; flowhastighed, parret med fordeling, fortæller dig, hvor ofte værdi når produktion, og hvilken slags værdi det er.

For store teams, der kører mange samtidige værdistrømme, afslører denne parring et mønster, som et enkelt gennemstrømningstal skjuler fuldstændigt: en værdistrøm, hvis hastighed ser sund ud, mens dens fordeling i det stille er drevet mod næsten ren funktionsarbejde, der i det stille sulter den gælds- og risikokapacitet, emne 2.2 advarede kræver bevidst beskyttelse. Store virksomheder, der sammenligner gennemstrømning på tværs af produktlinjer, og offentlige myndigheder, der rapporterer leveringsoutput til tilsynsorganer, har begge brug for denne parring for at undgå at forveksle rå output med reel, bæredygtig fremdrift.

## Nøgleprincipper

- **Hastighed uden fordeling skjuler, hvad der faktisk blev leveret.** Et stigende antal elementer siger intet om, hvorvidt det antal er sundt, manipuleret eller i det stille skævvredet mod det letteste tilgængelige arbejde.
- **Fordeling uden hastighed skjuler skala.** En sundt udseende procentvis opdeling betyder lidt, hvis du ikke også ved, hvor meget arbejde i alt den repræsenterer.
- **De to metrikker skal altid rapporteres sammen.** Det er en direkte anvendelse af emne 1.2's princip om parring med værn på flowdata specifikt.
- **Hastighed er udsat for den samme substitutionsmanipulation som enhver metrik, der tæller elementer.** At dele svært arbejde op i mange små, lette elementer pumper optællingen op uden at levere forholdsmæssigt mere værdi.
- **En sund fordeling er kontekstafhængig, ikke et fast mål.** Emne 2.2 dækker dette i dybden; hastighed og fordeling bør altid fortolkes mod det mål, konteksten indebærer.

## Anbefalinger

### Rapportér flowhastighed som en tendenslinje, aldrig et tal for en enkelt periode

En enkelt periodes antal elementer er støjende og let at misforstå. Plot flowhastigheden over flere på hinanden følgende perioder, og se på tendensen, ikke på et enkelt datapunkt, den samme disciplin, emne 1.6 anbefaler for enhver tidsrække-metrik, der er tilbøjelig til naturligt udsving.

### Præsentér aldrig flowhastighed uden dens fordeling ved siden af

Behandl det som en hård regel for ethvert dashboard eller enhver rapport, ikke et rart-at-have. Et hastighedsdiagram vist alene inviterer netop til den fejllæsning, dette emne åbner med: stigende gennemstrømning, der i virkeligheden er en stigende andel af omarbejde eller let funktionsarbejde, der fortrænger gælds- og risikokapacitet. Sæt begge i samme visning, altid.

### Vægt hastigheden efter størrelse eller kompleksitet, når elementstørrelserne varierer meget

Rå antal elementer behandler en enkelt konfigurationsændring på én linje og en arkitekturmigrering over flere uger som ækvivalente, hvilket inviterer til den samme substitutionsmanipulation, som denne bog allerede har navngivet for udrulningsfrekvens (emne 2.10): at dele svært arbejde op i mange små elementer pumper optællingen op uden at levere forholdsmæssigt mere. Hvor elementstørrelserne varierer meget, så vægt hastigheden efter et groft størrelses- eller kompleksitetsestimat, eller følg den gennemsnitlige elementstørrelse ved siden af det rå antal, så en skrumpende gennemsnitsstørrelse ved siden af et stigende antal er synlig frem for skjult.

### Hold øje med afdrift i flowfordelingen, ikke blot dens nuværende øjebliksbillede

Det mest nyttige signal i flowfordelingen er sjældent denne periodes præcise procenter; det er retningen af ændringen over flere perioder. En stabil afdrift, funktioner stiger, mens gæld og risiko i det stille skrumper, er værd at rejse over for interessenter længe før det bliver den slags kvalitets- eller sikkerhedsproblem, emne 2.2 advarer om, at et feature factory-mønster ophober usynligt.

### Sammenlign kun flowhastighed på tværs af værdistrømme med ægte omhu

To værdistrømme med forskellig elementgranularitet, forskellig teamstørrelse eller forskellig produktfase er ikke direkte sammenlignelige alene på rå hastighed, det samme retfærdighedsproblem, emne 2.10 navngiver for udrulningsfrekvens på tværs af teams. Brug hastighed først til en værdistrøms egen tendens, og forsøg kun sammenligning på tværs af værdistrømme, efter du har bekræftet reelt sammenlignelige elementdefinitioner og granularitet.

## Afvejninger: fordele og ulemper

| Tilgang | Fordele | Ulemper |
| --- | --- | --- |
| Rå hastighed efter antal elementer alene | Enkel at beregne og forklare | Udsat for substitutionsmanipulation; skjuler, hvilken slags værdi der blev leveret |
| Hastighed parret med fordeling | Viser både skala og værdiblanding sammen | Kræver disciplineret klassifikation af flowelementer (emne 2.2) for at være meningsfuld |
| Størrelsesvægtet hastighed | Modstår substitutionsmanipulation fra opdeling af elementstørrelse | Kræver en konsekvent, aftalt størrelsesmetode i hele teamet |
| Sammenligning af hastighed på tværs af værdistrømme | Nyttig til investeringsbeslutninger på porteføljeniveau | Let urimelig uden at bekræfte reelt sammenlignelige elementdefinitioner |

Den centrale spænding er **enkelhed versus modstandsdygtighed over for manipulation**. Rå antal elementer er det letteste tal at beregne og forklare, men også det letteste at pumpe op ved at dele svært arbejde i mange små stykker. Løs spændingen ved at holde den primære metrik enkel, rå hastighed parret med fordeling, og ved at reservere størrelsesvægtning til værdistrømme, hvor elementstørrelserne vides at variere nok til, at det simple antal er blevet aktivt vildledende.

## Spørgsmål at drøfte med dit team

1. **Når vi rapporterer flowhastighed, vises flowfordelingen så altid ved siden af, eller står hastigheden undertiden alene?** Et hastighedstal uden sin fordeling er et ufuldstændigt billede efter dette emnes eget centrale princip. Kontrollér dine faktiske dashboards og rapporter for dette hul.

2. **Er vores gennemsnitlige elementstørrelse ændret sammen med en stigende hastighed, og ville vi vide det, hvis den var?** En skrumpende gennemsnitsstørrelse ved siden af et stigende antal er den specifikke signatur på substitutionsmanipulation anvendt på flowelementer. Træk de faktiske data i stedet for at antage, at mønstret er fraværende.

3. **Har vi nogensinde sammenlignet vores hastighed med et andet teams uden at bekræfte, at vores elementdefinitioner og granularitet faktisk matcher?** En urimelig sammenligning her kan presse et team mod at manipulere sine egne tal blot for at se sammenligneligt ud, hvilket gentager den samme risiko, denne bog allerede har navngivet for udrulningsfrekvens.

4. **Er vores flowfordeling drevet i én retning de seneste par perioder, og besluttede nogen det bevidst?** En langsom afdrift er let at overse periode for periode. Plot flere perioder sammen, og led ærligt efter en tendens, før du antager, at den nuværende fordeling er stabil.

5. **Hvis nogen ville pumpe vores flowhastighed op uden at udføre mere reelt arbejde, hvad er den letteste måde, de kunne gøre det på, og ville vores nuværende rapportering fange det?** Gennemgå den specifikke mekanik i at dele svære elementer op i lette, og drøft, om dit dashboard faktisk ville afsløre det mønster.

6. **Bliver vores hastigheds- og fordelingstal nogensinde præsenteret sammen for forretningsinteressenter, eller er det kun hastighedsoverskriften, der rejser opad?** Parringsprincippet beskytter kun mod fejllæsning, hvis begge halvdele faktisk ses af de personer, der træffer beslutninger ud fra dataene.

## Sektorperspektiv

**Startup.** Flowhastighed er som regel let at følge uformelt i denne skala, da hele teamet allerede har en grov fornemmelse af gennemstrømningen. Den nyttige disciplin er at parre den med fordeling, selv uformelt, så en stifter ikke forveksler et stigende antal lukkede tickets med reel funktionsfremdrift, når antallet i virkeligheden er domineret af fejlrettelser i den tidlige fase.

**Mindre virksomhed.** Følg hastighed og fordeling sammen i det lette værktøj, du allerede bruger til klassifikation af flowelementer (emne 2.2); ingen dedikeret analyseplatform er nødvendig i denne skala. Vanen med altid at se dem side om side betyder mere end nogen værktøjssofistikering.

**Stor virksomhed.** Sammenligning af hastighed på tværs af værdistrømme er fristende i denne skala til prioritering på porteføljeniveau, og det er også der, retfærdighedsrisikoen er størst, da forskellige produktlinjer legitimt har meget forskellig elementgranularitet. Investér i at bekræfte sammenlignelige definitioner, før du bruger hastighedssammenligninger til at begrunde investeringsbeslutninger mellem teams.

**Offentlig sektor.** Flowhastighed parret med fordeling giver en offentlig teknologileder et langt stærkere belægsgrundlag til at rapportere leveringsoutput til tilsynsorganer end rå gennemstrømning alene, fordi den kan vise ikke blot, hvor meget der blev leveret, men at blandingen afspejler en bevidst, forsvarlig fordeling på ny funktionalitet, afhjælpning af fejl og risikostyring.

## Eksempler

**Stor virksomhed.** En softwareleverandørs platformsteam rapporterede støt stigende flowhastighed i tre på hinanden følgende kvartaler, en tendens, ledelsen fejrede som accelererende levering. Et nærmere kig på flowfordelingen, efterspurgt først efter en kundeeskalering om tilbagevendende fejl, afslørede, at "funktioner"-andelen af den stigende hastighed faktisk var faldet fra 70 % til 45 % i samme periode, hvor fejlrettelseselementer fyldte hullet. Teamet havde leveret flere elementer, men en skrumpende andel af dem var ny værdi; resten var omarbejde, som hastighedsdiagrammet alene havde skjult fuldstændigt.

**Offentlig sektor.** En national statistikmyndigheds team for dataplatformen fulgte flowhastighed som sin primære leveringsmetrik i en årsrapport til sin tilsynsbestyrelse. Da et bestyrelsesmedlem spurgte, hvilken andel af den hastighed der repræsenterede ny offentligt vendt kapacitet, opdagede teamet, at det aldrig havde opdelt tallet efter flowelementtype, og ikke kunne svare direkte. Myndigheden indførte derefter parret rapportering af hastighed og fordeling, som afslørede, at risiko- og compliancearbejde, drevet af en ny databeskyttelsesforordning, legitimt havde opslugt en voksende andel af kapaciteten, en forsvarlig fordeling, bestyrelsen accepterede beredvilligt, når den blev vist eksplicit frem for efterladt implicit i et uforklaret fald i hastighed.

## Business case: motiver, ROI og TCO

Afkastet af at parre hastighed med fordeling er en mere ærlig, mere forsvarlig redegørelse for leveringsoutput, end nogen af tallene giver alene. Softwareleverandøreksemplet ovenfor, hvor man opdagede, at stigende hastighed i virkeligheden afspejlede faldende funktionsoutput, er netop den slags fejllæsning, denne parring forebygger, og at fange det mønster tidligt er langt billigere end først at opdage det, efter et kundevendt kvalitetsproblem tvinger spørgsmålet frem.

De samlede ejeromkostninger er minimale, når klassifikation af flowelementer (emne 2.2) allerede er på plads: fordeling er en ligefrem aggregering af allerede klassificerede elementer, og disciplinen i at vise begge metrikker sammen er en rapporteringskonvention, ikke en teknisk investering. Det meste af prisen for dette emnes anbefalinger var allerede betalt, da organisationen indførte ærlig klassifikation af flowelementer i første omgang.

## Antimønstre og faldgruber

- **At rapportere flowhastighed uden fordeling:** manipulationsvektoren i hjertet af dette emne. Et team under leveringspres kan øge antallet af elementer ved at foretrække småt, let funktionsarbejde og undgå sværere gælds-, risiko- eller fejlelementer, eller ved at dele store elementer op i mange små, og et hastighedsdiagram vist alene vil læses som acceleration frem for det faktiske skift i, hvad der leveres. Værnet er den samme parringsdisciplin, som emne 1.2 beder om i hele denne bog: vis aldrig hastighed uden fordeling, og kontrollér periodisk den gennemsnitlige elementstørrelse ved siden af antallet for at fange opdeling specifikt.
- **At sammenligne hastighed på tværs af værdistrømme med forskellig elementgranularitet:** producerer en urimelig, vildledende sammenligning.
- **At behandle en enkelt periodes fordeling som stabil:** overser en langsom, meningsfuld afdrift, som kun en tendensvisning afslører.
- **At lade kun hastighedsoverskriften nå forretningsinteressenter:** opgiver parringsprincippets samlede beskyttende værdi.
- **At ignorere den gennemsnitlige elementstørrelse, mens man fejrer stigende hastighed:** overser den specifikke signatur på substitutionsmanipulation.
- **At sætte et hastighedsmål uden henvisning til fordeling:** inviterer netop til den manipulation, dette emne advarer mod ved navn.

## Modenhedsmodel

- **Niveau 1, Igangsæt:** Flowhastighed, hvis den følges, rapporteres alene uden fordelingsdata, og ingen har kontrolleret for substitutionsmanipulation.
- **Niveau 2, Udvikl:** Nogle teams følger fordeling, men den er ikke konsekvent parret med hastighed i rapporteringen eller gennemgået som en tendens.
- **Niveau 3, Standardisér:** Hastighed og fordeling rapporteres altid sammen, ses som tendenser, og den gennemsnitlige elementstørrelse overvåges for at fange substitutionsmanipulation.
- **Niveau 4, Styr:** Afdrift i fordelingen undersøges proaktivt, før den bliver et kvalitets- eller sikkerhedsproblem, og sammenligninger af hastighed på tværs af værdistrømme foretages først, efter reelt sammenlignelige elementdefinitioner er bekræftet.
- **Niveau 5, Orkestrér:** Hastighed og fordeling informerer direkte investeringsbeslutninger på porteføljeniveau, og organisationen kan pege på specifikke tilfælde, hvor afdrift i fordelingen blev fanget og rettet, før den forårsagede et synligt svigt.

## Idéer til drøftelse

1. Inkluderer vores rapportering af flowhastighed altid fordeling, eller har vi nogensinde vist det ene uden det andet?
2. Er vores gennemsnitlige størrelse af flowelementer for nylig skiftet sammen med en ændring i hastigheden?
3. Ville vi vide, om vores flowfordeling var drevet støt over de seneste kvartaler?
4. Hvad skal der til for, at nogen kunne pumpe vores hastighed op uden at levere mere reel værdi, og ville vi bemærke det?

## Vigtigste pointer

- **Flowhastighed** måler gennemstrømning; **flowfordeling** måler, hvilken slags arbejde den gennemstrømning repræsenterer. Rapportér dem altid sammen.
- Denne parring er en direkte anvendelse af emne 1.2's **værnprincip**: vis aldrig et hastighedstal uden konteksten om, hvad det kostede.
- Emnets centrale manipulationsvektor er **at rapportere hastighed alene**, hvilket kan skjule et skift mod let funktionsarbejde eller opdeling af elementer, der pumper antallet op uden at levere forholdsmæssig værdi.
- **Afdrift i fordelingen** er mest synlig som en tendens på tværs af flere perioder, ikke i en enkelt periodes øjebliksbillede.
- **Sammenligninger af hastighed på tværs af værdistrømme** kræver reelt sammenlignelige elementdefinitioner for at være retfærdige; uden dem vildleder de mere, end de informerer.

## Kilder og videre læsning

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble og Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
