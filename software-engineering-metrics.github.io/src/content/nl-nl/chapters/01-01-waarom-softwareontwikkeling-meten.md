# 1.1 Waarom softwareontwikkeling meten

## Overzicht en motivatie

Softwareontwikkeling verzet zich tegen meten op een manier die productie niet doet. Een fabrieksband produceert identieke eenheden, dus ze tellen vertelt je iets echts. Softwarewerk produceert unieke artefacten onder constant veranderende eisen, dus een naïeve telling, van commits, van regels, van afgesloten tickets, vertelt je bijna niets over geleverde waarde. Dat gat tussen de moeilijkheid van het meten van softwarewerk en de zeer reële behoefte om te weten of het goed gaat, is waar dit hele boek leeft. Dit onderwerp gaat over het eerlijk dichten van dat gat: niet door te doen alsof softwarewerk net zo telbaar is als widgets, maar door precies te zijn over wat meting wel en niet kan doen voor een ingenieursorganisatie.

Meting bestaat om vragen te beantwoorden die een organisatie anders niet met vertrouwen kan beantwoorden: wordt onze levering sneller of langzamer, verbetert of verslechtert de kwaliteit, raken ingenieurs opgebrand, betaalt deze investering zich terug. Zonder metrieken worden die vragen beantwoord door wie het meest zelfverzekerd spreekt in de kamer, meestal de meest senior of meest overtuigende persoon aanwezig, en dat antwoord is vaak verkeerd. [Softwareontwikkelings](https://en.wikipedia.org/wiki/Software_engineering)teams die meting overslaan, vermijden niet het maken van oordelen over hun eigen prestaties. Ze maken die oordelen gewoon op gevoel, anekdote, en recency bias in plaats van bewijs.

Voor grote teams stopt dit om een leuk-om-te-hebben te zijn en wordt het structureel. Een team van zes kan een mentaal model delen van hoe het gaat via dagelijkse conversatie. Een afdeling van zeshonderd, verspreid over tijdzones en bedrijfsonderdelen, kan dat niet. Op die schaal is een gedeelde, vertrouwde set cijfers de enige praktische vervanging voor het informele bewustzijn dat een klein team gratis krijgt. Leiderschap in grote bedrijven heeft metrieken nodig om investering te verdelen over tientallen teams die concurreren voor hetzelfde budget. Overheidsingenieursorganisaties hebben metrieken nodig om aan parlementen en het publiek te tonen dat toegewezen middelen echte capaciteit produceerden, niet alleen activiteit. In beide settings is "we hebben hard gewerkt" geen bewijs; een verdedigbaar cijfer is dat wel.

## Kernprincipes

- **Meet om te leren, niet om te oordelen.** Het primaire doel van een ingenieursmetriek is een beslissing informeren, niet een persoon of team beoordelen.
- **Een cijfer zonder gekoppelde beslissing is decoratie.** Als geen aflezing van een metriek zou veranderen wat je vervolgens doet, hoort het niet op een dashboard.
- **Meting is een middel, niet het doel.** Het doel is betere software, betrouwbaarder geleverd, door een duurzaam team. Metrieken bestaan alleen om dat doel te dienen.
- **Elke metriek heeft een kosten.** Instrumentatie, reviewtijd, en het gedragsverstoringsrisico behandeld in onderwerp 1.2 kosten allemaal iets. Een metriek moet die kosten terugverdienen.
- **Stilte is ook een beslissing.** Kiezen om iets niet te meten is een keuze met gevolgen, geen neutrale standaard.

## Aanbevelingen

### Begin bij de beslissing, niet bij het dashboard

Voordat je iets instrumenteert, benoem de beslissing die de metriek zal informeren. "We willen weten of onze nieuwe deploymentpijplijn incidentpercentages verlaagde" is een beslissingsvormige vraag; "laten we alles bijhouden wat de tool kan exporteren" is dat niet. Achterwaarts werken vanaf een beslissing houdt de metriekenset klein en houdt elke tegel verdedigbaar wanneer iemand vraagt waarom hij bestaat. Als je de beslissing die een metriek zou informeren niet kunt benoemen, bouw hem nog niet. Onderwerp 1.3 gaat dieper in op de uitkomsten-boven-output-versie van deze discipline.

### Scheid diagnostisch gebruik van evaluatief gebruik

Een metriek gebruikt om een systeemprobleem te diagnosticeren (waarom kruipt onze doorlooptijd omhoog) gedraagt zich volledig anders dan dezelfde metriek gebruikt om een persoon of team te evalueren (wiens doorlooptijd is het slechtst). De eerste nodigt uit tot onderzoek en verbetering. De tweede nodigt uit tot verhulling en manipulatie, omdat het cijfer nu een reputatie- of financieel gevolg heeft gekoppeld. Besluit expliciet, schriftelijk, voor welk gebruik een metriek bedoeld is, en laat een diagnostische metriek nooit zonder bewust heroverwegen van het risico afglijden naar evaluatief gebruik. Dit onderscheid komt voortdurend terug door dit boek en is geformaliseerd in de niet-doelen-sectie van het metriekcharter beschreven in onderwerp 1.4.

### Behandel meting als een hypothese, niet een feit

Een metriek is een proxy voor iets waar je echt om geeft, niet het ding zelf. Deploymentfrequentie is een proxy voor leveringscapaciteit, niet leveringscapaciteit zelf. Behandel elke metriek als een hypothese onder voortdurende test: volgt dit cijfer nog steeds het ding waar we om geven, of is de wereld verder bewogen en heeft de proxy achtergelaten? Herbezoek die vraag op een vaste cadans in plaats van aan te nemen dat een metriek die twee jaar geleden goed gekozen was, vandaag nog steeds goed gekozen is, vooral wanneer tooling, teamstructuur, of (zie deel 7) de aard van het werk zelf verandert.

### Maak de afwezigheid van meting zichtbaar

In grote organisaties is het riskantste gat niet een slechte metriek, het is een gebied dat niemand meet omdat het moeilijk te instrumenteren is: ontwikkelaarservaring, teamoverschrijdende afhankelijkheidswrijving, de erosie van institutionele kennis. Benoem deze gaten expliciet in je metriekcharter in plaats van ze standaard onzichtbaar te laten. Een organisatie die weet wat ze niet meet, en waarom, staat in een veel sterkere positie dan een die stilletjes is vergeten dat die gebieden bestaan.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Zware instrumentatie, veel metrieken | Brede zichtbaarheid, minder blinde vlekken | Dashboardmoeheid, groter manipulatieoppervlak, hogere onderhoudskosten |
| Minimale, beslissingsgedreven metrieken | Focus, lage overhead, elke metriek verdedigbaar | Risico op het missen van een opkomend probleem buiten de gekozen set |
| Metrieken alleen voor diagnose | Moedigt eerlijke rapportage en onderzoek aan | Leiderschap kan ze nog steeds informeel evaluatief gebruiken |
| Metrieken gekoppeld aan individuele evaluatie | Voelt verantwoordelijk, makkelijk uit te leggen aan directie | Sterke manipulatieprikkel; schaadt vertrouwen; meet meestal het verkeerde |

De centrale spanning is **dekking versus focus**, en die wordt aangescherpt door **diagnose versus oordeel**. Te weinig metrieken en je ontwikkelt blinde vlekken die alleen aan de oppervlakte komen als een crisis; te veel en niemand kan op een van hen handelen, terwijl elke metriek waaraan je evaluatief gewicht hangt vervorming uitnodigt. Los het op door minimaal en beslissingsgedreven te beginnen, een metriek alleen toevoegend wanneer een specifieke, benoemde beslissing hem nodig heeft, en door de alleen-diagnostisch-grens expliciet te verdedigen in het governancewerk van onderwerp 1.4 in plaats van hem standaard te laten eroderen.

## Vragen om met je team te bespreken

1. **Voor elke metriek op ons huidige dashboard, welke beslissing zou een goede aflezing en een slechte aflezing elk triggeren?** Als beide aflezingen leiden tot dezelfde actie, of tot geen actie überhaupt, is de metriek decoratie. Loop je dashboard tegel voor tegel door en dwing een eerlijk antwoord voor elk. Deze oefening halveert routinematig een opgeblazen dashboard in één zitting, omdat de meeste wildgroei zich ophoopt uit metrieken die niemand ooit verwijdert in plaats van metrieken die iemand bewust toevoegde om een reden die nog steeds standhoudt.

2. **Welke van onze metrieken worden diagnostisch gebruikt, en welke zijn stilletjes evaluatief geworden?** Een metriek gebouwd om een systeembeperking te begrijpen kan afdrijven naar het rangschikken van teams of individuen zonder dat iemand dat bewust besluit, vaak door een losse opmerking in een reviewvergadering die een gewoonte wordt. Zodra die afdrijving gebeurt, stopt het cijfer betrouwbaar te zijn, omdat mensen nu een reden hebben om het er goed uit te laten zien in plaats van het accuraat te maken. Benoem elke metrieks beoogde gebruik schriftelijk en controleer de huidige praktijk daartegen.

3. **Wat meten we niet omdat het moeilijk te instrumenteren is, en wat kost dat gat ons?** De gevaarlijkste blinde vlekken zijn degene die nooit op een dashboard terechtkomen precies omdat ze zich verzetten tegen eenvoudige meting: teamoverschrijdende afhankelijkheidswrijving, de erosie van institutionele kennis, of de stille ophoping van fragiele omwegen. Breng een lijst van de dingen waar iedereen privé over bezorgd is maar niemand bijhoudt, en wees eerlijk over waarom.

4. **Als we deze metriek morgen zouden verwijderen, wie zou het merken, en wat zouden ze verliezen?** Een metriek die niemand zou missen is een metriek die geen beslissing informeert. Deze vraag brengt ijdelheidstegels aan het licht die puur door traagheid overleven. Voor een grote organisatie met tientallen teamdashboards doet deze snoeidiscipline er net zoveel toe als de discipline van het toevoegen van nieuwe metrieken in de eerste plaats.

5. **Hoeveel kost elke metriek op ons dashboard daadwerkelijk om te produceren en te onderhouden, inclusief de ingenieurstijd achter de instrumentatie?** Metrieken zijn niet gratis. Pijplijnen, dashboards, en de reviewtijd besteed aan het bespreken van een cijfer dragen allemaal een terugkerende kost die makkelijk te onderschatten is omdat hij verspreid is over veel kleine taken in plaats van één zichtbare regelpost. Breng je daadwerkelijke instrumentatie- en onderhoudsinspanning en weeg hem tegen de beslissingswaarde van vraag 1.

6. **Waar is meting een vervanging geworden voor oordeel, en waar is oordeel een vervanging geworden voor meting?** Beide faalmodi zijn echt. Een team dat elke beslissing uitbesteedt aan een dashboard verliest het contextuele oordeel dat vangt wat het cijfer mist; een team dat beschikbare data negeert ten gunste van de luidste stem in de kamer herhaalt precies het probleem waarmee dit onderwerp opent. Het doel is metrieken die oordeel informeren, niet metrieken die het vervangen.

## Sectorperspectief

**Startup.** Met een handvol ingenieurs is het meeste waar dit onderwerp voor waarschuwt, afdrijving naar evaluatief gebruik, blinde vlekken, dashboardopgeblazenheid, makkelijk te vermijden simpelweg omdat iedereen dagelijks praat. Het risico is het omgekeerde: meting helemaal overslaan omdat het aanvoelt als overhead die het team zich niet kan veroorloven. Kies twee of drie beslissingsvormige vragen (leveren we snel genoeg, houdt kwaliteit stand) en instrumenteer alleen die.

**Klein bedrijf.** Zonder een toegewijd platform- of datateam, steun op wat je bestaande tools al rapporteren in plaats van aangepaste instrumentatie te bouwen. Het dashboard van een betalingsverwerker, de responsmetrieken van een supporttool, en de buildgeschiedenis van je CI-leverancier dekken meestal de beslissingen die er het meest toe doen. Weersta de verleiding om een toegewijd ingenieursanalyseplatform te kopen voordat je hebt bewezen dat je zult handelen op wat het je vertelt.

**Groot bedrijf.** Het kernrisico is metrieken die stilletjes afdrijven van diagnostisch naar evaluatief gebruik terwijl ze omhoog rollen door managementlagen, en dashboards die groeien door aangroei omdat niemand de taak van het snoeien ervan bezit. Governance (onderwerp 1.4) is niet optioneel op deze schaal. Standaardiseer definities over bedrijfsonderdelen, en bouw een regelmatige pensioneringsreview in het metriekenprogramma zelf.

**Overheid.** Metrieken hier dragen vaak wettelijk of budgettair gewicht, wat zowel de waarde van ze goed krijgen als de kosten van ze verkeerd krijgen verhoogt. Een cijfer gerapporteerd aan een parlement of een toezichtsorgaan heeft een gedocumenteerde methodologie nodig, een stabiele definitie over rapportageperiodes, en eerlijkheid over zijn beperkingen. Behandel "we meten dit momenteel niet" als een antwoord dat je mogelijk moet verdedigen, niet een privé-mislukking om te verbergen.

## Voorbeelden

**Groot bedrijf.** De ingenieursorganisatie van een wereldwijde verzekeringsmaatschappij was gegroeid tot meer dan zestig scrumteams, elk met zijn eigen informele dashboard, geen vergelijkbaar met een ander. Leiderschap kon een basisvraag niet beantwoorden: welke van onze tien strategische platforminvesteringen levert daadwerkelijk snellere software. De fix was niet meer metrieken, het was minder, betere: de organisatie definieerde een gedeelde, beslissingsgedreven kern van DORA-metrieken (onderwerp 2.10) identiek berekend overal vanuit dezelfde pijplijndata, pensioneerde veertig teamspecifieke dashboards, en kon eindelijk investeringsgebieden vergelijken op een gemeenschappelijke basis binnen twee kwartalen.

**Overheid.** Het digitale dienstenteam van een nationale belastingdienst was door een toezichtscommissie gevraagd om het rendement op een meerjarig moderniseringsprogramma te tonen. De bestaande metrieken van het team waren volledig intern en activiteitsgebaseerd: afgeronde story points, gesloten sprints. Niets daarvan beantwoordde de daadwerkelijke vraag van de commissie. Het team bouwde in plaats daarvan een kleine set uitkomstmetrieken, mediaan tijd om een burgerindieningsprobleem op te lossen, adoptiepercentage van het digitale kanaal, en ontsnapte-foutenpercentage in het nieuwe systeem, en rapporteerde die kwartaal met een gedocumenteerde methodologie. De vragen van de commissie verschoven van "bewijs dat je werkt" naar "hoe repliceren we dit bij de volgende instantie," wat de uitkomst is die een goed gekozen metriekenset zou moeten produceren.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van bewuste meting is beslissingskwaliteit. Een organisatie die met bewijs kan zeggen "onze doorlooptijd verbeterde 30% na de platforminvestering" kan die investering verdedigen, herhalen wat werkte, en stoppen wat niet werkte. Een organisatie die vertrouwt op anekdote kan niets daarvan met vertrouwen doen, en eindigt met het herprocederen van dezelfde argumenten elke budgetcyclus omdat niemand kan wijzen naar een cijfer dat beide partijen vertrouwen.

De kosten van meting zijn niet het dashboard. Het is de voortdurende discipline: instrumentatie, definitieonderhoud, en het periodieke snoeien dat dit onderwerp aanbeveelt. Die totale eigendomskosten zijn echt maar bescheiden vergeleken met de kosten van het alternatief, wat een grote organisatie is die technologiebeslissingen van miljoenen euro's neemt op basis van wie het meest overtuigend argumenteerde in de kamer. Het rendement van een metriekenprogramma is niet de metrieken zelf; het zijn de beslissingen die beter gemaakt worden dankzij hen.

## Antipatronen en valkuilen

- **Alles meten wat de tool exporteert:** verandert een dashboard in ruis en nodigt manipulatie uit over een enorm oppervlak zonder corresponderende beslissingswaarde.
- **Metrieken zonder benoemde beslissing:** decoratie die onderhoudsinspanning kost en niemand iets handelbaars vertelt.
- **Stille afdrijving van diagnostisch naar evaluatief gebruik:** de enkelvoudig snelste manier om vertrouwen in een cijfer te vernietigen.
- **Een metriek behandelen als feit in plaats van hypothese:** een proxy die twee jaar geleden juist was, kan vandaag verkeerd zijn, en niemand controleert het.
- **De afwezigheid van een slecht cijfer verwarren met de aanwezigheid van een goed cijfer:** een metriek waar je nooit naar kijkt kan je niet vertellen dat er iets mis is.
- **Meetcapaciteit bouwen voordat beslist is wat te beslissen:** instrumentatie op zoek naar een vraag verspilt echte ingenieurstijd.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Metrieken, als ze al bestaan, zijn ad hoc, persoonlijk voor wie ze bouwde, en niemand kan zeggen welke beslissing een van hen informeert.
- **Niveau 2, Ontwikkelen:** Een basisset metrieken bestaat voor sommige teams, meestal gekopieerd van een raamwerk of de standaardinstellingen van een tool, zonder duidelijke koppeling terug naar een beslissing.
- **Niveau 3, Standaardiseren:** Elke bijgehouden metriek heeft een gedocumenteerd doel en een expliciet diagnostisch-versus-evaluatief-classificatie, consistent toegepast door de organisatie.
- **Niveau 4, Beheren:** Metrieken worden op een vaste cadans beoordeeld tegen de beslissingen die ze informeren; metrieken die stoppen hun plaats te verdienen worden gepensioneerd, en de hele set wordt gemeten op kosten net zo goed als waarde.
- **Niveau 5, Orkestreren:** Meting is een levende capaciteit: de organisatie identificeert routinematig haar eigen blinde vlekken, test of haar proxy's nog steeds de werkelijkheid volgen, en behandelt het metriekenprogramma zelf als iets om te verbeteren, niet alleen te onderhouden.

## Discussie-ideeën

1. Welke metriek op ons dashboard zouden we het meest moeite hebben te rechtvaardigen om te behouden als vandaag gevraagd?
2. Welke beslissing hebben we het afgelopen kwartaal genomen met behulp van een metriek, in plaats van een mening?
3. Waar in onze organisatie is een diagnostische metriek stilletjes evaluatief geworden?
4. Wat zijn we bang om te meten, en waarom?
5. Als ons metriekenprogramma morgen zou verdwijnen, welke beslissingen zouden erger worden?

## Belangrijkste inzichten

- Meting bestaat om **beslissingen** te dienen, niet om voor zichzelf te bestaan; een metriek zonder gekoppelde beslissing is decoratie.
- Houd **diagnostisch** gebruik gescheiden van **evaluatief** gebruik, schriftelijk, en let op stille afdrijving ertussen.
- Behandel elke metriek als een **hypothese** over wat hij representeert, geen afgesloten feit, en herbezoek die hypothese op een cadans.
- Stilte, kiezen om iets niet te meten, is zelf een beslissing met gevolgen; maak blinde vlekken zichtbaar in plaats van ze standaard onzichtbaar te laten.
- De totale kosten van een metriekenprogramma zijn echt; weeg ze expliciet tegen de beslissingswaarde die elke metriek biedt.

## Bronnen en verder lezen

- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de onderzoeksbasis voor uitkomstgebaseerde ingenieursmeting).
- *How to Measure Anything*, door Douglas W. Hubbard (een algemeen raamwerk voor het kwantificeren van dingen die onmeetbaar lijken).
- *Measuring and Managing Performance in Organizations*, door Robert D. Austin (de fundamentele analyse van disfunctie die meting kan introduceren in een organisatie).
- *Thinking, Fast and Slow*, door Daniel Kahneman (de cognitieve vooroordelen die ongesteund oordeel een onbetrouwbare vervanging voor meting maken).
- Googles DevOps Research and Assessment (DORA)-programma, [dora.dev](https://dora.dev/) (het lopende State of DevOps-onderzoek waarop dit boek doorlopend bouwt).
