# 6.1 SLI's, SLO's, en felbudgetten

## Overzicht en motivatie

**[Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE)**, de discipline gepionierd bij Google en gedocumenteerd in het boek *Site Reliability Engineering*, droeg een woordenschat bij waarop dit hoofdstuk direct bouwt: een **service-level-indicator (SLI)** is een direct gemeten signaal van de gezondheid van een dienst, verzoeklatentie, foutpercentage, beschikbaarheid. Een **service-level-doel (SLO)** is het doelbereik voor die indicator, 99,9% van verzoeken slaagt binnen 200 milliseconden, bijvoorbeeld. En een **felbudget** is het toegestane tekort, de 0,1% verzoeken toegestaan om te falen, behandeld niet als een defect om te elimineren maar als een besteedbare hulpbron die doelbewust gebruikt kan worden om risico te nemen: een riskante wijziging uitleveren, een experiment draaien, of simpelweg accepteren dat perfecte betrouwbaarheid noch bereikbaar noch, voorbij een bepaald punt, zijn kost waard is.

Dit laatste idee, het felbudget als een besteedbare hulpbron in plaats van een cijfer om richting nul te minimaliseren, is het enkele belangrijkste concept in dit hoofdstuk en betwistbaar in dit hele deel. Het lost een spanning op die veel organisaties plaagt: ingenieurswerk wil functies uitleveren en redelijke risico's nemen; operaties wil maximale stabiliteit. Zonder een gedeeld, gekwantificeerd felbudget wordt dit een eindeloze, politiek-geladen onderhandeling. Met een wordt het een simpele, objectieve regel: besteed vrijelijk terwijl budget overblijft, vertraag en prioriteer stabiliteitswerk automatisch eenmaal het uitgeput is. Dit verandert een filosofische onenigheid in een rekenkundige.

Voor grote teams zijn SLO's en felbudgetten wat betrouwbaarheid meetbaar en onderhandelbaar maakt in plaats van een onbereikbaar, ongesteld absoluut dat elk team stilletjes niet haalt terwijl het zich er vaag schuldig over voelt. Grote bedrijven gebruiken SLO's om duidelijke, contractuele verwachtingen te stellen tussen teams en met klanten; overheidsorganisaties die kritieke publieke infrastructuur beheren gebruiken ze om verdedigbare, publiekelijk rechtvaardigbare betrouwbaarheidsdoelen te stellen in plaats van een onmogelijke standaard van perfectie die geen echt systeem kan volhouden.

## Kernprincipes

- **100%-betrouwbaarheid is het verkeerde doel voor bijna elk systeem.** Het is meestal onbereikbaar, en het nastreven voorbij een bepaald punt ruilt actief snelheid weg voor geen betekenisvol gebruikersvoordeel.
- **Een SLO zou moeten reflecteren wat gebruikers daadwerkelijk opmerken en om geven**, geen willekeurig rond cijfer gekozen omdat het geruststellend klinkt.
- **Het felbudget verandert betrouwbaarheid in een besteedbare hulpbron**, zowel ingenieurswerk als operaties een gedeelde, objectieve regel gevend voor wanneer snel uit te leveren en wanneer te vertragen.
- **SLI's moeten gemeten worden vanuit de daadwerkelijke gebruikerservaring** waar mogelijk, niet alleen van een intern systeem's zelfgerapporteerde gezondheid.
- **Het felbudget uitputten triggert een voorafbepaalde, overeengekomen reactie**, geen ad-hoc-argument elke keer dat het gebeurt.

## Aanbevelingen

### Kies SLI's die echte gebruikerservaring reflecteren

Selecteer indicatoren gemeten zo dicht als mogelijk bij de daadwerkelijke gebruikerservaring: verzoeksuccestempo en latentie gemeten aan de rand of loadbalancer, niet alleen interne dienstgezondheidschecks die "gezond" kunnen rapporteren terwijl gebruikers echte problemen ervaren. Een SLI die iets meet dat de gebruiker nooit daadwerkelijk opmerkt, een interne component technisch up terwijl het algehele verzoek nog steeds faalt, meet het verkeerde ding hoe makkelijk het ook zou kunnen zijn om te instrumenteren.

### Stel het SLO-doel vast gebaseerd op wat gebruikers daadwerkelijk nodig hebben, niet een willekeurig rond cijfer

Weersta de reflex om een doel zoals "99,99%-uptime" te stellen simpelweg omdat het indrukwekkend rigoureus klinkt. Onderzoek in plaats daarvan welk betrouwbaarheidsniveau gebruikers echt opmerken en om geven, geïnformeerd door historische incidentdata, gebruikersonderzoek, en de aangetoonde kost van elke extra increment betrouwbaarheid bereiken, omdat gaan van 99,9% naar 99,99% vaak veel meer ingenieursinspanning kost dan gaan van 99% naar 99,9% deed, voor afnemend en uiteindelijk verwaarloosbaar gebruiker-waarneembaar voordeel.

### Behandel het felbudget als een besteedbare hulpbron met een voorafbepaalde reactie op uitputting

Berekenen het felbudget direct vanuit de SLO (een 99,9%-beschikbaarheidsdoel over 30 dagen staat ruwweg 43 minuten toegestane downtime toe) en volg uitgave ertegen continu. Kom vooraf en voor enig specifiek incident overeen wat gebeurt wanneer het budget uitgeput is: een gewoon, effectief beleid is dat functiewerk stopt en de prioriteit van het team automatisch verschuift naar betrouwbaarheidswerk totdat het budget herstelt. Deze voorafbepaalde regel verwijdert de noodzaak om de afweging opnieuw te bediscussiëren onder druk gedurende elk individueel incident.

### Gebruik het felbudget om doelbewuste, geïnformeerde risicobeslissingen te maken

Een gezond, ongebruikt felbudget is niet iets om op te potten; het is toestemming om redelijke risico's te nemen, een wijziging uitleveren met verhoogd maar acceptabel risico, een chaos-engineering-experiment draaien (het chaos-engineering-hoofdstuk van het zusterboek `software-engineering-guide` behandelt dit direct), of een riskantere architectuurwijziging accepteren, omdat het budget specifiek bestaat om doelbewust besteed te worden in plaats van onaangeraakt bewaard te worden. Een felbudget dat nooit besteed wordt suggereert ofwel een overdreven voorzichtig team of een SLO te soepel gesteld relatief aan daadwerkelijk behaalde betrouwbaarheid, beide de moeite waard om te onderzoeken.

### Review en herzie SLO's periodiek, gebaseerd op bewijs, niet inertie

Een SLO jaren geleden gesteld reflecteert mogelijk niet meer huidige gebruikersverwachtingen, systeemarchitectuur, of bedrijfsprioriteiten. Review SLO's op een regelmatige cadans, historisch behaalde betrouwbaarheid, gebruikersfeedback, en of het doel nog een betekenisvol afwegingspunt vertegenwoordigt in plaats van ofwel een makkelijk gehaald doel dat verstrakt zou kunnen worden om meer snelheid elders mogelijk te maken, of een onrealistisch een dat het team effectief opgegeven heeft te halen, checkend.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen formele SLO (impliciet "zo betrouwbaar mogelijk") | Geen overhead om op te zetten | Eindeloze, ongegronde onderhandeling tussen snelheid en stabiliteit; geen gedeelde regel |
| Aspiratieve, zeer hoge SLO (99,99%+) | Signaleert ernst over betrouwbaarheid | Vaak onnodige kost; afnemend rendement voorbij wat gebruikers daadwerkelijk opmerken |
| Bewijs-gebaseerde, gebruikerservaring-gegronde SLO | Reflecteert echte waarde; verdedigbaar en bereikbaar | Vereist echte data en analyse om correct te stellen |
| Felbudget met voorafbepaalde uitputtingsreactie | Verwijdert ad-hoc-onderhandeling; objectieve, snelle besluitvorming | Vereist organisatorische instemming en discipline om de voorafbepaalde regel daadwerkelijk te eren |

De centrale spanning is **aspiratie versus bereikbaarheid**. Een hoge, aspiratieve SLO voelt alsof het ernst over kwaliteit signaleert, maar betrouwbaarheid najagen voorbij wat gebruikers daadwerkelijk opmerken ruilt echte snelheid weg voor geen echt voordeel, en een onrealistisch doel dat het team nooit daadwerkelijk haalt leert iedereen om de SLO helemaal niet meer serieus te nemen. Los de spanning op door de SLO te gronden in echt bewijs, wat merken gebruikers op, wat heeft het systeem historisch bereikt, wat kost elke extra increment, in plaats van in aspiratie of een verlangen om rigoureus te ogen op een scorekaart.

## Vragen om met je team te bespreken

1. **Is onze huidige SLO gegrond in bewijs over wat gebruikers daadwerkelijk opmerken, of werd het aspiratief gesteld omdat een hoog cijfer passend serieus aanvoelde?** Traceer de oorsprong van je huidige doel, indien mogelijk, en beoordeel eerlijk of het echt gebruikersonderzoek reflecteert of ingenieursintuïtie alleen.

2. **Hebben we een voorafbepaalde, overeengekomen reactie op felbudget-uitputting, of wordt de afweging elke keer opnieuw bediscussieerd wanneer het gebeurt?** Als het eerlijke antwoord het tweede is, is dat gat de moeite waard om te sluiten voordat het volgende incident het argument onder druk afdwingt.

3. **Wordt ons felbudget ooit daadwerkelijk doelbewust besteed, op een berekend-risico-wijziging of een experiment, of wordt het alleen ooit per ongeluk geconsumeerd via incidenten?** Een budget dat nooit doelbewust besteed wordt zou kunnen wijzen op een overdreven voorzichtig team dat legitieme kansen mist die het budget bestaat om mogelijk te maken.

4. **Worden onze SLI's gemeten vanuit echte gebruikerservaring, of vanuit interne systeemgezondheid die mogelijk niet reflecteert wat gebruikers daadwerkelijk tegenkomen?** Check je huidige instrumentatie tegen dit specifieke onderscheid; het is een gewoon gat zelfs in anders volwassen betrouwbaarheidsprogramma's.

5. **Wanneer reviewden we laatst onze SLO tegen huidig bewijs, en is er iets veranderd, gebruikersverwachtingen, systeemarchitectuur, bedrijfsprioriteiten, dat het herzien zou rechtvaardigen?** Als je geen recente review kunt herinneren, is die afwezigheid zelf de moeite waard om te bespreken.

6. **Wat zou het ons kosten, in ingenieursinspanning, om onze huidige SLO op te hogen met een extra "negen" betrouwbaarheid, en zou die kost gerechtvaardigd zijn door enig echt gebruikersvoordeel?** Deze concrete kosten-batenframing helpt de aspiratie-versus-bereikbaarheid-spanning gronden in echte cijfers in plaats van abstracte voorkeur.

## Sectorperspectief

**Startup.** Formele SLO's zijn vaak onnodig heel vroeg, wanneer het team direct en informeel kan reageren op betrouwbaarheidsproblemen. Adopteer ten minste een ruwe, informele SLO eenmaal je echte betalende klanten hebt die afhangen van uptime, omdat de discipline van een expliciet doel, zelfs een los bijgehouden een, prioritering van betrouwbaarheidswerk tegen functiedruk eerder helpt dan de meeste jonge bedrijven denken.

**Klein bedrijf.** De meeste moderne hosting- en observability-platforms rapporteren basis-uptime- en latentiedata met minimale setup; gebruik dit om een simpele, bereikbare SLO te stellen in plaats van een aspiratieve een die je niet realistisch kunt volgen of op handelen met beperkte operationele capaciteit.

**Groot bedrijf.** SLO's op deze schaal onderliggen vaak contractuele service-level-overeenkomsten met echte financiële gevolgen, wat bewijs-gebaseerde doelstelling en gedisciplineerd felbudgetbeheer bijzonder belangrijk maakt. Investeer in echt gebruikerservaring-gegronde SLI's in plaats van gemakkelijke interne gezondheidschecks, en vestig het voorafbepaalde uitputtingsreactiebeleid formeel, met bestuurlijke instemming, voordat het nodig is onder druk.

**Overheid.** Publieke-sector-betrouwbaarheidsdoelen voor kritieke infrastructuur dragen soms juridisch of regelgevend gewicht, en een onrealistisch, ongehaald doel ontdekt tijdens een audit of een publiek incident beschadigt institutionele geloofwaardigheid significant. Stel doelen gebaseerd op echte, gedocumenteerde gebruikers- en missiebehoefte, en wees publiekelijk transparant over de doelbewuste afweging die een felbudget vertegenwoordigt, in plaats van een onbereikbare standaard van perfectie te impliceren.

## Voorbeelden

**Groot bedrijf.** Een cloudopslagbedrijf had, jarenlang, "maximale uptime" als doel gehad zonder een formele SLO, leidend tot een chronische, onopgeloste spanning tussen het productteam (functies snel willend uitleveren) en het infrastructuurteam (maximale voorzichtigheid willend), vers bediscussieerd in elke releaseplanningsvergadering. Een formele 99,95%-beschikbaarheids-SLO adopteren met een expliciet felbudget en een voorafbepaald beleid, functiewerk pauzeert automatisch wanneer het budget uitgeput is, loste de terugkerende onderhandeling volledig op: beide teams konden hetzelfde cijfer zien en instemmen met dezelfde regel, en het bedrijf rapporteerde een meetbare toename in uitgeleverde functies gedurende periodes van gezond budget naast een meetbare, doelbewuste vertraging gedurende de twee periodes over het volgende jaar wanneer het budget echt uitgeput was, precies zoals het beleid bedoeld was.

**Overheid.** Het publieke-waarschuwingssysteem van een nationale weerdienst had jarenlang gewerkt onder een informele verwachting van "altijd beschikbaar," zonder gedocumenteerd doel en significante, onaangepakte operationele stress op het wachtdienstteam dat probeerde een ongesteld, effectief onmogelijk standaard te halen. Een nieuw geadopteerde formele SLO, 99,9%-beschikbaarheid met een duidelijk gecommuniceerde publieke felbudgetuitleg, gaf het operatieteam expliciete, verdedigbare toestemming om geplande onderhoudsvensters te plannen binnen het budget, iets wat de vorige ongestelde "altijd beschikbaar"-verwachting politiek moeilijk gemaakt had om te doen zelfs wanneer echt noodzakelijk voor langetermijnsysteemgezondheid. Publieke communicatie die het felbudgetconcept direct uitlegde, in plaats van het te verbergen, werd gunstig ontvangen als een teken van eerlijke, volwassen operationele praktijk in plaats van een verzwakking van toewijding aan dienstkwaliteit.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van SLO's en felbudgetten formeel adopteren is een anders eindeloze, politiek dure onderhandeling tussen snelheid en stabiliteit oplossen met een enkele, gedeelde, objectieve regel. Het cloudopslagvoorbeeld hierboven toont dit concreet: jaren terugkerende, onopgeloste spanning tussen twee teams werden opgelost door een enkel formeel doel en een voorafbepaald beleid, significante organisatorische energie vrijmakend die eerder ging in het herhaaldelijk opnieuw bediscussiëren van dezelfde afweging.

De totale eigendomskosten omvatten de analyse-inspanning om een bewijs-gebaseerd doel correct te stellen en de discipline om de voorafbepaalde uitputtingsreactie te eren zelfs onder druk om een bijzonder gewenste functie toch uit te leveren. Die disciplinekost is echt, maar het is veel lager dan de doorlopende kost van een onopgeloste, chronische onderhandeling die organisatorische energie verbruikt in elke planningscyclus onbeperkt.

## Antipatronen en valkuilen

- **Een aspiratieve SLO stellen zonder bewijs erachter:** produceert een onrealistisch doel dat het team niet meer serieus neemt, of een onnodig duur een dat voordeel najaagt dat gebruikers niet opmerken.
- **Geen voorafbepaalde reactie op felbudget-uitputting:** dwingt hetzelfde moeilijke afwegingsargument onder druk elke keer dat het gebeurt.
- **SLI's meten vanuit interne systeemgezondheid in plaats van echte gebruikerservaring:** kan "gezond" rapporteren terwijl gebruikers echte problemen ervaren.
- **Een gezond felbudget nooit daadwerkelijk doelbewust besteden:** zou kunnen wijzen op excessieve voorzichtigheid en gemiste legitieme kans.
- **Een doel eenmaal stellen en nooit herbezoeken:** een SLO kan verouderen naarmate gebruikersverwachtingen, architectuur, en prioriteiten veranderen.
- **Het felbudgetbeleid behandelen als optioneel onder druk:** een voorafbepaalde regel die overruled wordt wanneer het ongemakkelijk is levert geen echte besluitvormingswaarde.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Betrouwbaarheidsdoelen zijn impliciet of aspiratief, zonder formele SLO, SLI, of felbudget gedefinieerd.
- **Niveau 2, Ontwikkelen:** Sommige diensten hebben een informele SLO, maar SLI's reflecteren mogelijk niet echte gebruikerservaring en er is geen voorafbepaald uitputtingsbeleid.
- **Niveau 3, Standaardiseren:** Bewijs-gebaseerde SLO's met echte gebruikerservaring-SLI's en een voorafbepaald felbudget-uitputtingsbeleid zijn consistent gevestigd over kritieke diensten.
- **Niveau 4, Beheren:** Felbudgetten worden actief en doelbewust besteed op berekend risico nemen, en SLO's worden gereviewd en herzien op een regelmatige, bewijs-gebaseerde cadans.
- **Niveau 5, Orkestreren:** SLO's en felbudgetten zijn organisatiebreed geïntegreerd als het gedeelde, objectieve mechanisme voor het balanceren van snelheid en stabiliteit, en de organisatie kan wijzen naar specifieke beslissingen die het framework mogelijk maakte die een ongegronde onderhandeling niet zo effectief opgelost zou hebben.

## Discussie-ideeën

1. Is onze huidige SLO gegrond in bewijs, of in aspiratie?
2. Hebben we een voorafbepaalde reactie op felbudget-uitputting die we daadwerkelijk zouden eren onder druk?
3. Wanneer besteedden we laatst doelbewust een gezond felbudget op een berekend risico?
4. Meten onze SLI's echte gebruikerservaring of gemakkelijke interne gezondheidschecks?
5. Wat zou het ons kosten om onze SLO op te hogen met een extra "negen," en zou die kost gerechtvaardigd zijn?

## Belangrijkste inzichten

- Een **service-level-indicator (SLI)** meet echte gebruikerservaring; een **service-level-doel (SLO)** is zijn bewijs-gebaseerde doel; een **felbudget** is het doelbewust besteedbare toegestane tekort.
- **100%-betrouwbaarheid is meestal het verkeerde doel**; grond je SLO in wat gebruikers daadwerkelijk opmerken en wat elke extra increment echt kost.
- Behandel het felbudget als een **besteedbare hulpbron met een voorafbepaalde uitputtingsreactie**, de noodzaak verwijderend om snelheid-versus-stabiliteit opnieuw te bediscussiëren onder druk elke keer.
- Meet SLI's vanuit **echte gebruikerservaring**, niet alleen gemakkelijke interne gezondheidschecks.
- **Review en herzie SLO's periodiek**, gebaseerd op bewijs, omdat een verouderd doel zijn nut verliest naarmate het systeem en zijn gebruikers veranderen.

## Bronnen en verder lezen

- *Site Reliability Engineering: How Google Runs Production Systems*, door Betsy Beyer, Chris Jones, Jennifer Petoff, en Niall Richard Murphy, red. (de fundamentele tekst die SLI's, SLO's, en felbudgetten definieert).
- *The Site Reliability Workbook*, door Betsy Beyer, Niall Richard Murphy, David K. Rensin, Kent Kawahara, en Stephen Thorne, red. (praktische begeleiding bij het implementeren van SLO's en felbudgetten).
- *Implementing Service Level Objectives*, door Alex Hidalgo (een uitgebreide, praktijkgerichte gids voor het ontwerpen en operationaliseren van SLO's).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de relatie tussen betrouwbaarheidspraktijk en leveringsprestatie).
