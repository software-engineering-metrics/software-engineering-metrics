# 2.9 Mätetal för pull request och kodgranskning

## Översikt och motivation

[Kodgranskning](https://en.wikipedia.org/wiki/Code_review) är vanligtvis den enskilt största väntetidsbidragaren inom cykeltidsnedbrytningen från kapitel 2.6, och det är också steget mest direkt under ett teams egen kontroll att förbättra, till skillnad från en delad plattformsflaskhals eller ett externt beroende. Det här kapitlet täcker de specifika mätetalen som lever inom granskningssteget: tid till första granskning, pull request-storlek, granskningsiterationsantal, och granskarbelastningsfördelning, och hur man använder dem för att förbättra granskningshastighet utan att offra den faktiska kvalitetsfördelen granskning är tänkt att ge.

Risken det här kapitlet är mest vaksamt på är en den här boken inte täckt direkt ännu: att optimera granskningshastighet kan tyst erodera granskningskvalitet om den utförs vårdslöst. Ett team som halverar sin tid-till-första-granskning genom att godkänna allt med en gummistämpel har förbättrat ett mätetal medan det förstört praktikens faktiska värde. Varje rekommendation i det här kapitlet är skriven med den avvägningen i sikte, eftersom pull request-mätetal är bland de enklaste i den här boken att manipulera på ett sätt som ser bra ut på en instrumentpanel medan de gör den underliggande kodbasen mätbart sämre.

För stora team avslöjar granskningsmätetal lastbalanseringsproblem som annars är osynliga: ett litet antal seniora ingenjörer som absorberar en oproportionerlig andel granskningsbelastning, ett specifikt team eller kodbasområde där granskningar konsekvent stannar upp, eller ett mönster av överdimensionerade pull requests som gör grundlig granskning praktiskt omöjlig oavsett granskares flit. De här mönstren förstärks i skala mycket mer än de gör på ett litet team, där alla kan se obalansen direkt utan att behöva ett mätetal för att avslöja den.

## Nyckelprinciper

- **Tid till första granskning är vanligtvis den största spaken, inte granskningsgrundlighet i sig.** Det mesta av fördröjningen kommer från att en pull request väntar på att bli granskad, inte från att granskningskonversationen tar lång tid när den väl börjar.
- **Mindre pull requests granskas snabbare och mer grundligt, inte bara snabbare.** Storlek är en hävstångspunkt för både hastighet och kvalitet samtidigt.
- **Granskningshastighet och granskningskvalitet är inte automatiskt i spänning, men de kan avvägas vårdslöst.** Skydda mot den avvägningen explicit.
- **Granskarbelastningsobalans är vanlig och vanligtvis osynlig utan ett mätetal.** Ett litet antal människor absorberar ofta en oproportionerlig andel.
- **De här mätetalen är exponerade för gummistämpel-manipuleringsrisken.** Ett snabbt godkännande utan verklig granskning besegrar hela syftet med granskning.

## Rekommendationer

### Spåra tid till första granskning som det primära hastighetsmätetalet

Mät intervallet från att en pull request öppnas till en granskares första substantiella kommentar eller godkännande, instrumenterat automatiskt från er versionskontrollplattform. Det här är vanligtvis den dominerande väntetidsbidragaren inom granskningssteget (kapitel 2.5, kapitel 2.6), och att förbättra det, genom tydligare granskningstilldelningsnormer, notifieringspraxis, eller dedikerade granskningstidsblock, producerar typiskt den enskilt största förbättringen till övergripande cykeltid tillgänglig för ett team.

### Spåra pull request-storlek och aktivt uppmuntra mindre ändringar

Mät ändrade rader eller berörda filer per pull request, och behandla en ihållande stor median-storlek som en signal värd att adressera direkt. Mindre pull requests granskas snabbare, granskas mer grundligt (en granskare kan faktiskt hålla hela ändringen i huvudet), och är lättare att återställa om något går fel, vilket kopplar direkt tillbaka till satsstorleksprincipen bakom driftsättningsfrekvens i kapitel 2.10. Uppmuntra att dela upp stora ändringar i en sekvens av mindre, oberoende granskningsbara pull requests varhelst arbetet tillåter det.

### Övervaka granskarbelastningsfördelning explicit

Spåra antalet granskningar slutförda per person över ett glidande fönster, och vaka specifikt för ett litet antal människor som absorberar en oproportionerlig andel. Det här mönstret är vanligt, faller ofta på de mest seniora eller mest betrodda ingenjörerna, och skapar både en flaskhals (deras tillgänglighet begränsar hela teamets granskningsgenomströmning) och en risk för utbrändhet (kapitel 3.2 täcker mätetal för välbefinnande mer i djup). Rotera granskningsansvar medvetet snarare än att låta det koncentreras som standard kring vem som helst som är snabbast att svara.

### Skydda explicit mot gummistämpel-manipuleringsrisken

Para tid-till-första-granskning med en kvalitetssignal: frekvensen av defekter eller incidenter spårade tillbaka till ändringar som godkändes utan granskningskommentarer, eller frekvensen av rättningar efter sammanslagning som behövs för nyligen granskad kod. Ett team som förbättrar granskningshastighet genom att godkänna utan verklig granskning bör se det här skyddet försämras, vilket är exakt parningsprincipen från kapitel 1.2 tillämpad på den här specifika mätetalsfamiljen. Jaga aldrig granskningshastighet utan det här motmätetalet i sikte.

### Använd granskningsiterationsantal för att upptäcka friktion, inte för att döma individer

Antalet granskningsrundor en pull request går igenom innan sammanslagning kan signalera genuin friktion, oklara krav, oenighet om tillvägagångssätt, inkonsekventa stilförväntningar, värda att undersöka på processnivå. Undvik att använda det här talet för att döma enskilda författare eller granskare direkt; ett högt iterationsantal är oftare en system- eller kommunikationssignal än en personlig, och att behandla det som en individuell fiche riskerar exakt den utvärderande glidning kapitel 1.1 varnar mot.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Optimering rent för tid till första granskning | Snabb, tydlig signal, lätt att instrumentera | Kan incitamentskoppla ytlig, gummistämpelgranskning om oskyddad |
| Optimering rent för pull request-storleksreduktion | Förbättrar både hastighet och grundlighet samtidigt | Inte allt arbete delas rent in i små inkrement |
| Jämn rotation av granskningsbelastning | Minskar flaskhals- och utbrändhetsrisk | Kan sakta ner granskning för specialiserad, svårgranskad kod som behöver specifik expertis |
| Koncentration av granskning bland seniora ingenjörer | Djup domänexpertis tillämpad konsekvent | Skapar en flaskhals och en utbrändhetsrisk över tid |

Den centrala spänningen är **hastighet kontra granskningsdjup**. Varje teknik i det här kapitlet för att snabba upp granskning, snabbare första svar, mindre pull requests, mer distribuerad granskarbelastning, bär en viss risk att avväga bort verklig granskning om den utförs utan kvalitetsskyddet det här kapitlet rekommenderar. Lös spänningen genom att para varje hastighetsmätetal med en kvalitetssignal, spårad över samma period, så att ett team kan skilja genuin processförbättring från en tyst eroderande granskningsstandard.

## Frågor att diskutera med ditt team

1. **Vad är vår faktiska tid till första granskning, och hur mycket av vår övergripande cykeltid konsumerar granskningssteget?** Ta fram det verkliga talet snarare än att förlita er på intryck; granskningsväntetid är ofta större än team antar, precis eftersom det är lätt att underskatta tid spenderad väntande snarare än aktivt arbetande.

2. **Vad är vår median pull request-storlek, och hur mycket skulle vår granskningsfördröjning krympa om den storleken gick ner?** Stora pull requests är både långsammare att granska och mer benägna att få ytlig granskning helt enkelt eftersom en granskare inte kan hålla hela saken i huvudet på en gång. Titta på er faktiska storleksfördelning, inte bara medianen.

3. **Är granskningsbelastning koncentrerad bland ett litet antal människor, och vad skulle hända med vår granskningsgenomströmning om en av dem var otillgänglig i två veckor?** Den här frågan avslöjar både en flaskhalsrisk och en utbrändhetsrisk samtidigt. Ta fram faktisk granskarbelastningsdata snarare än att förlita er på intryck.

4. **Har vi någonsin förbättrat ett granskningshastighetsmätetal på ett sätt som, i efterhand, minskade faktisk granskning?** Var ärliga här; det här är exakt gummistämpelrisken det här kapitlet namnger, och det är lätt att glida in i utan något medvetet beslut att göra det.

5. **Vad signalerar vanligtvis ett högt granskningsiterationsantal i vårt team: genuin oenighet, oklara krav, eller inkonsekventa stilförväntningar?** Titta på ett urval av pull requests med ovanligt höga iterationsantal och diagnostisera det faktiska mönstret, snarare än att anta att det återspeglar dåligt på antingen författaren eller granskaren.

6. **Har vi ett kvalitetsskydd parat med våra granskningshastighetsmätetal, eller spårar vi hastighet isolerat?** Om det ärliga svaret är att inget sådant skydd existerar är det ett glapp värt att stänga innan granskningshastighet trycks ytterligare, enligt kapitel 1.2:s parningsprincip.

## Sektorperspektiv

**Startup.** Granskning är ofta snabb som standard med ett litet team, ibland nästan för snabb, enskild-godkännare-granskning med minimal granskning eftersom alla litar på alla. Risken att vaka för när teamet växer är att granskningskvalitet inte skalar vid sidan av teamstorlek, eftersom informellt förtroende som fungerade för fem ingenjörer inte automatiskt fungerar för femtio.

**Litet företag.** De flesta versionskontrollplattformar rapporterar tid-till-sammanslagning- och granskningsantalsstatistik direkt ur lådan; använd de här istället för att bygga anpassad instrumentering. Den huvudsakliga disciplinen värd att anta är helt enkelt att märka om granskningsbelastning tyst har koncentrerats på en eller två personer när teamet har vuxit.

**Stort företag.** Granskarbelastningsobalans och specialiserad-kunskaps-flaskhalsar är särskilt vanliga här, där djup domänexpertis i ett kritiskt system kan koncentrera granskningsansvar på en liten grupp oavsett teamstorlek. Investera i medveten kunskapsdelning och granskningsrotation för att sprida expertis, och minska både flaskhalsen och bussfaktorrisken av att den expertisen lever i för få människor.

**Myndighet.** Granskningsprocesser här bär ofta efterlevnadstyngd vid sidan av kvalitetsmål, vilket kan göra pull requests större och granskningar långsammare per design. Där genuina efterlevnadskrav kräver grundlig granskning, fokusera förbättringsinsats på att minska väntetid (snabbare granskningstilldelning, tydligare triage) snarare än att kompromissa granskningens faktiska djup, och dokumentera avvägningen explicit om granskning måste förbli tung av regulatoriska skäl.

## Exempel

**Stort företag.** En cybersäkerhetsbolags ingenjörsorganisation fann att en handfull huvudingenjörer slutförde över 40 % av alla kodgranskningar över en tvåhundrapersonsorganisation, en obalans ingen hade mätt direkt förrän granskarbelastningsdata togs fram. Den här koncentrationen var både en flaskhals, eftersom de ingenjörernas tillgänglighet begränsade granskningsgenomströmningen för hela organisationen, och en utbrändhetsrisk flaggad separat av en engagemangsenkät (kapitel 3.2). Organisationen introducerade ett strukturerat granskningsrotationsprogram parat med riktade kunskapsdelningssessioner, och inom två kvartal hade granskningsbelastning spridits över en mycket bredare grupp, med tid till första granskning förbättrad som en direkt sidoeffekt av den minskade flaskhalsen.

**Myndighet.** En skattemyndighets ingenjörsteam, under press att förbättra leveranshastighet, satte ett mål att halvera tid till första granskning. Inom ett kvartal nåddes målet, men en efterföljande kvalitetsrevision fann en skarp ökning i rättnings-pull requests efter sammanslagning, koncentrerad i ändringar som hade godkänts med en enda, kort kommentar. Teamets fix parade hastighetsmålet med ett explicit kvalitetsskydd, frekvensen av rättningar efter sammanslagning som behövs inom två veckor av en granskning, och omtränade teamet på vad en substantiell granskning faktiskt krävde, och återställde genuin granskning samtidigt som det mesta av hastighetsförbättringen som kommit från bättre granskningstilldelning och mindre pull request-storlekar behölls.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på väl hanterade granskningsmätetal är snabbare leverans utan att offra kvalitet, vilket är en sällsynt kombination: de flesta leveransförbättringar avväger hastighet mot risk någonstans, men granskningsstegsförbättringar, mindre pull requests, bättre lastfördelning, snabbare första svar, förbättrar genuint båda samtidigt när de drivs med kvalitetsskyddet det här kapitlet rekommenderar. Cybersäkerhetsexemplet ovan är typiskt: att fixa en flaskhals förbättrade hastighet medan den underliggande granskningskvaliteten, om något, förbättrades när expertis spreds bredare.

Den totala ägandekostnaden är låg: de flesta av de här mätetalen kommer direkt från befintlig versionskontrollplattformsdata med minimal ytterligare instrumentering, och processändringarna de pekar mot, granskningsrotation, att uppmuntra mindre pull requests, kostar mestadels disciplin snarare än verktygsinvestering.

## Antimönster och fallgropar

- **Att optimera tid till första granskning utan ett parat kvalitetsskydd:** bjuder in gummistämpelgodkännande som besegrar granskningens syfte.
- **Att ignorera granskarbelastningskoncentration:** skapar både en flaskhals och en utbrändhetsrisk som förblir osynlig tills mätt.
- **Att behandla granskningsiterationsantal som en individuell fiche:** oftare en system- eller kommunikationssignal än en personlig.
- **Att acceptera ihållande stora pull requests som oundvikliga:** de flesta stora ändringar kan delas mer än team initialt antar.
- **Att tillämpa enhetligt granskningsdjup oavsett ändringsrisk:** slösar granskning på lågriskändringar medan potentiellt undergranskar högriskändringar.
- **Att mäta granskningshastighet men aldrig kontrollera om verklig granskning minskade vid sidan av den:** det enskilt vanligaste sättet den här mätetalsfamiljen manipuleras oavsiktligt.

## Mognadsmodell

- **Nivå 1, Initiera:** Granskningsmätetal spåras inte; granskningsbelastningsfördelning och pull request-storlek är osynliga.
- **Nivå 2, Utveckla:** Viss granskningshastighetsdata existerar från plattformsstandarder, men det finns inget kvalitetsskydd och ingen aktiv hantering av granskarbelastning.
- **Nivå 3, Standardisera:** Tid till första granskning, pull request-storlek, och granskarbelastning spåras konsekvent, med ett explicit kvalitetsskydd parat mot hastighetsförbättringar.
- **Nivå 4, Hantera:** Granskarbelastning rebalanseras aktivt genom rotation och kunskapsdelning; iterationsantalsmönster undersöks på processnivå snarare än individnivå.
- **Nivå 5, Orkestrera:** Granskningsstegsmätetal informerar direkt processinvestering, och organisationen kan demonstrera samtidig förbättring i både granskningshastighet och granskningskopplade kvalitetsutfall över en upprätthållen period.

## Diskussionsidéer

1. Vad är vår nuvarande median tid till första granskning, och vart tar den tiden faktiskt vägen?
2. Är vår granskningsbelastning koncentrerad på ett litet antal människor, och vad är risken om en är otillgänglig?
3. Har vi någonsin förbättrat granskningshastighet på bekostnad av verklig granskning, även oavsiktligt?
4. Vad är vår median pull request-storlek, och hur mycket mindre skulle de flesta ändringar realistiskt kunna vara?
5. Behandlar vi ett högt granskningsiterationsantal som en systemsignal eller en individuell bedömning?

## Viktiga slutsatser

- **Tid till första granskning** är vanligtvis den enskilt största spaken inom granskningssteget, mer än granskningskonversationens längd i sig.
- **Mindre pull requests** förbättrar både granskningshastighet och granskningsgrundlighet samtidigt.
- **Granskarbelastningsobalans** är vanlig och vanligtvis osynlig utan direkt mätning; den skapar både en flaskhals och en utbrändhetsrisk.
- Para varje granskningshastighetsmätetal med ett explicit **kvalitetsskydd** för att fånga gummistämpel-manipuleringsrisken den här mätetalsfamiljen är särskilt benägen till.
- Använd **granskningsiterationsantal** för att diagnostisera systemnivåfriktion, inte för att döma enskilda författare eller granskare.

## Källor och vidare läsning

- *Accelerate: The Science of Lean Software and DevOps*, av Nicole Forsgren, Jez Humble och Gene Kim (kodgranskningspraxis och dess förhållande till leveransprestation).
- *Modern Code Review*-forskning av Alberto Bacchelli och Christian Bird (empirisk studie av kodgranskningspraxis i skala).
- *Peer Reviews in Software: A Practical Guide*, av Karl E. Wiegers (granskningsprocessdesign och dess avvägningar).
- *The Principles of Product Development Flow*, av Donald G. Reinertsen (satsstorleksresonemang tillämpat på pull request-storlek).
