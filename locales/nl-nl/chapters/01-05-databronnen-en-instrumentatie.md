# 1.5 Databronnen en instrumentatie

## Overzicht en motivatie

Een metriek is alleen zo betrouwbaar als de data erachter, en de meeste metriekenprogramma's besteden veel meer inspanning aan het ontwerpen van dashboards dan aan het verifiëren van de pijplijn die ze voedt. Dit is achterstevoren. Een prachtig ontworpen diagram gebouwd op inconsistente, zelfgerapporteerde, of stilletjes kapotte instrumentatie is erger dan geen diagram, omdat het gezaghebbend oogt terwijl het verkeerd is. Dit hoofdstuk gaat over de onglamoureuze fundering die de rest van dit boek aanneemt: waar ingenieursdata daadwerkelijk vandaan komt, wanneer geautomatiseerde instrumentatie te vertrouwen boven zelfrapportage, en de datakwaliteitsfalingen die stilletjes een metriek ongeldig maken voordat iemand het merkt.

Softwareontwikkelingsdata komt van een handvol bronsoorten, elk met andere betrouwbaarheidskarakteristieken. Versiebeheer en [CI/CD](https://en.wikipedia.org/wiki/CI/CD)-pijplijnen genereren objectieve, tijdgestempelde, moeilijk-na-te-maken records van wat daadwerkelijk gebeurde. Issuetrackers en projectmanagementtools genereren records die afhangen van mensen die status correct en tijdig bijwerken, wat ze vaak inconsistent doen. Enquêtes genereren zelfgerapporteerde data die onwaardeerbaar is voor dingen die geen systeem kan observeren, zoals tevredenheid, maar onderhevig is aan geheugenvertekening en sociale-wenselijkheidseffecten. Observabiliteitsplatforms genereren systeemniveau-telemetrie die objectief is maar alleen dekt wat geïnstrumenteerd werd. Weten uit welke categorie de data van een gegeven metriek komt, vertelt je hoeveel hem te vertrouwen en welke faalmodi te bewaken.

Op grote-bedrijf- en overheidsschaal stapelen datakwaliteitsproblemen zich op omdat de afstand tussen de oorsprong van de data en zijn eindgebruik in een dashboard groeit door meerdere systemen, integraties, en transformaties. Een veld dat één ding betekent in het bronsysteem kan iets subtiel anders betekenen tegen de tijd dat het een rapportagelaag bereikt, en niemand stroomafwaarts merkt het omdat het cijfer nog steeds plausibel oogt. Instrumentatie goed krijgen is minder opwindend dan raamwerken goed krijgen, maar het is de fundering waarop alles anders in dit boek staat.

## Kernprincipes

- **Verkies instrumentatie boven zelfrapportage waar het systeem de gebeurtenis direct kan observeren.** Een deploymenttijdstempel van de pijplijn is betrouwbaarder dan een team's zelfgerapporteerde deploymentaantal.
- **Gebruik zelfrapportage alleen voor wat niet direct geobserveerd kan worden.** Tevredenheid, ervaren wrijving, en welzijn hebben geen systeem-van-record-vervanging; vraag direct en ontwerp de enquête goed (hoofdstuk 3.7). Reserveer zelfrapportage specifiek voor die categorie.
- **De data van elke metriek heeft een bronsysteem, een verzamelmethode, en een bekende faalmodus.** Documenteer alle drie, niet alleen de definitie.
- **Datakwaliteit vervalt stilletjes.** Een pijplijn die een jaar geleden correct werkte, kan vandaag stilletjes kapot zijn, en een dashboard zal een verkeerd cijfer blijven weergeven zonder klacht.
- **Instrumenteer op het punt van waarheid, niet stroomafwaarts van een vertaling.** Elke sprong tussen de gebeurtenis en het dashboard is een kans voor betekenis om af te drijven.

## Aanbevelingen

### Kaart elke metriek naar zijn daadwerkelijke bronsysteem voordat je hem vertrouwt

Voor elke metriek op een dashboard, benoem het specifieke systeem dat de onderliggende gebeurtenis genereert: de CI/CD-pijplijn voor deploymentgebeurtenissen, de versiebeheerhost voor commit- en mergegebeurtenissen, de incidenttracker voor uitvalrecords, het enquêteplatform voor zelfgerapporteerde tevredenheid. Als je het exacte systeem niet kunt benoemen, weet je eigenlijk niet waar het cijfer vandaan komt, en kun je zijn betrouwbaarheid niet evalueren. Deze kartering is een voorwaarde voor het governancecharter in hoofdstuk 1.4, geen afzonderlijke oefening.

### Instrumenteer bij de gebeurtenis, niet bij het rapport

De meest betrouwbare data vangt een gebeurtenis automatisch op het moment dat het gebeurt: een pijplijn registreert een deployment het instant dat het voltooit, een versiebeheersysteem registreert een merge het instant dat het landt. Data die afhangt van een mens die zich herinnert een statusveld achteraf bij te werken, een ticket "klaar" markerend, een deployment handmatig loggend in een spreadsheet, verslechtert in nauwkeurigheid hoe verder het van de daadwerkelijke gebeurtenis zit en hoe drukker de verantwoordelijke persoon wordt. Waar een geautomatiseerde gebeurtenis bestaat, verkies hem boven een mens-gerapporteerde proxy voor hetzelfde feit.

### Reserveer enquêtes voor wat alleen een persoon je kan vertellen

Sommige dingen kunnen echt niet geobserveerd worden vanuit systeemtelemetrie: of een ingenieur voelt dat zijn werk betekenisvol is, of een proces frustrerend aanvoelt, of burn-out-risico stijgt. Deze vereisen direct vragen, en een goed ontworpen enquête (hoofdstuk 3.7 behandelt de mechanica) is het juiste gereedschap. De fout is zelfrapportage gebruiken voor dingen die een systeem direct kon observeren in plaats daarvan, ingenieurs vragend hun eigen deploymentfrequentie te schatten in plaats van het uit de pijplijn te trekken, wat onnodige ruis en vertekening introduceert in data die objectief had kunnen zijn.

### Bouw datakwaliteitscontroles in de pijplijn zelf

Behandel metriekpijplijnen met dezelfde rigor als productiecode: voeg geautomatiseerde controles toe die signaleren wanneer een bron stopt met data te sturen, wanneer de verdeling van een veld onverwacht verschuift, of wanneer een telling onverwacht naar nul daalt. Een dashboard dat stilletjes verouderde of kapotte data weergeeft alsof het actueel is, is erger dan een dashboard dat zichtbaar "data niet beschikbaar" toont, omdat de eerste vertrouwen onzichtbaar erodeert terwijl de tweede tenminste de waarheid vertelt over zijn eigen beperkingen.

### Documenteer de verzamelmethode naast de definitie

De definitie van een metriek ("doorlooptijd voor wijzigingen") is niet compleet zonder zijn verzamelmethode (gemeten vanaf de eerste commit-tijdstempel in versiebeheer tot productiedeploymenttijdstempel in de pijplijn, hotfix-branches uitgesloten). Twee teams met dezelfde definitie maar verschillende verzamelmethoden zullen nog steeds onvergelijkbare cijfers produceren. Registreer beide in het metriekcharter uit hoofdstuk 1.4, en behandel een verandering in beide als een verandering die dezelfde gedocumenteerde review vereist.

## Afwegingen: voor- en nadelen

| Bronsoort | Voordelen | Nadelen |
| --- | --- | --- |
| Geautomatiseerde pijplijninstrumentatie (CI/CD, versiebeheer) | Objectief, tijdgestempeld, moeilijk na te maken, lage lopende inspanning | Vereist voorafgaande ingenieursinvestering om te bouwen en onderhouden |
| Issuetracker- en projectmanagementdata | Breed beschikbaar, bekend bij teams | Afhankelijk van menselijke zorgvuldigheid; vaak inconsistent over teams |
| Enquêtes en zelfrapportage | Enige bron voor subjectieve ervaring (tevredenheid, welzijn) | Geheugenvertekening, sociale-wenselijkheidsvertekening, enquêtemoeheid |
| Observabiliteits- en telemetrieplatforms | Rijk, real-time, systeemniveau-signaal | Dekt alleen wat expliciet geïnstrumenteerd werd; kan duur zijn op schaal |

De centrale spanning is **objectiviteit versus dekking**. Geautomatiseerde instrumentatie is de meest betrouwbare bron maar kan subjectieve ervaring helemaal niet observeren, terwijl enquêtes precies kunnen bereiken wat automatisering niet kan maar echt vertekeningsrisico draagt. Los de spanning op door geautomatiseerde instrumentatie te gebruiken waar een gebeurtenis direct geobserveerd kan worden, en zelfrapportage specifiek en alleen te reserveren voor wat echt een persoon vragen vereist, nooit als een luie vervanging voor data die een systeem had kunnen leveren.

## Vragen om met je team te bespreken

1. **Kunnen we voor onze vijf belangrijkste metrieken het exacte bronsysteem en verzamelmethode voor elk benoemen, of nemen we een definitie aan zonder te weten waar de data daadwerkelijk vandaan komt?** Dit is een verrassend vaak voorkomend gat: een metriek wordt aangenomen van een raamwerk of een standaarddashboard van een leverancier, en niemand op het huidige team weet daadwerkelijk welk systeem de onderliggende data genereert of hoe. Spoor elk terug naar zijn oorsprong als een groepsoefening.

2. **Welke van onze metrieken vertrouwen op zelfrapportage voor iets dat een systeem direct kon observeren, en wat zou het kosten om die zelfrapportage te vervangen met echte instrumentatie?** Zelfgerapporteerde deploymentaantallen, zelfgerapporteerde gewerkte uren, en zelfgeschatte cyclustijd zijn allemaal veelvoorkomende voorbeelden van het gebruiken van de verkeerde databron voor iets dat automatisering betrouwbaarder kon vangen. Identificeer deze en prioriteer het vervangen van de belangrijkste eerst.

3. **Hoe zouden we weten als een van onze datapijplijnen stilletjes kapot ging?** De meeste organisaties ontdekken een kapotte metriekpijplijn alleen wanneer iemand merkt dat een cijfer implausibel oogt, wat maanden kan duren. Bespreek of een van je pijplijnen vandaag geautomatiseerde gezondheidscontroles heeft, en als niet, welke het meest nodig zijn eerst.

4. **Waar heeft een vertaling tussen systemen de betekenis van een metriek veranderd zonder dat iemand dat bewust besloot?** Een veld dat één ding betekent in een bronsysteem kan iets subtiel anders betekenen na een integratie of migratie, en het resulterende cijfer kan plausibel ogen terwijl het verkeerd is. Loop het volledige datapad van je metriek met de grootste gevolgen door en zoek naar vertaalpunten.

5. **Documenteren we verzamelmethoden, niet alleen definities, voor ons metriekcharter?** Twee teams kunnen de naam en definitie van een metriek delen terwijl ze hem berekenen vanuit verschillende verzamelmethoden, cijfers producerend die eigenlijk niet vergelijkbaar zijn. Audit een steekproef van je charters tegen dit specifieke gat.

6. **Hoe onderscheiden we een echte trend van een datakwaliteitsartefact wanneer een cijfer onverwacht beweegt?** Een plotselinge verschuiving in een metriek is vaak het eerste teken van ofwel een echte verandering of een kapotte pijplijn, en de twee onderscheiden vereist de databron goed genoeg kennen om snel te onderzoeken. Bespreek het daadwerkelijke proces van je team voor de laatste onverklaarde metriekverschuiving die je tegenkwam.

## Sectorperspectief

**Startup.** Met een kleine stack kunnen de meeste van je metrieken direct komen van je CI/CD-leverancier, versiebeheerhost, en een lichtgewicht enquêtetool, zonder aangepaste pijplijnen te bouwen. Het risico is het overslaan van zelfs basale gezondheidscontroles omdat het team snel beweegt; een vijf-minuten-geautomatiseerde controle dat een databron nog steeds gebeurtenissen stuurt, is goedkope verzekering tegen stilletjes blind vliegen.

**Klein bedrijf.** Steun op de ingebouwde rapportage van je bestaande tools in plaats van aangepaste datapijplijnen te bouwen die je niet de capaciteit hebt om te onderhouden. Wees expliciet over welke cijfers van geautomatiseerde systemen komen en welke schattingen zijn die iemand in een spreadsheet typt, omdat de twee heel verschillende betrouwbaarheid dragen, zelfs als ze op dezelfde pagina eindigen.

**Groot bedrijf.** Datakwaliteitsproblemen stapelen zich op over integraties, migraties, en bedrijfsonderdeelgrenzen. Investeer in gecentraliseerde, goed gemonitorde datapijplijnen voor je metrieken met de grootste gevolgen, bouw geautomatiseerde datakwaliteitscontroles als standaardpraktijk, en audit verzamelmethoden, niet alleen definities, wanneer metrieken over bedrijfsonderdelen vergeleken worden.

**Overheid.** Dataherkomst kan juridisch en auditgewicht dragen: een gepubliceerd prestatiecijfer moet mogelijk een externe audit overleven van niet alleen zijn waarde maar zijn hele verzamelketen. Documenteer dataherkomst expliciet, behoud historische verzamelmethoderecords zelfs nadat een methodologie verandert, en wees voorbereid om precies te demonstreren hoe een cijfer geproduceerd werd, niet alleen wat het momenteel afleest.

## Voorbeelden

**Groot bedrijf.** Het ingenieursleiderschap van een financiëledienstenbedrijf had "doorlooptijd voor wijzigingen" twee jaar bijgehouden voordat het ontdekte dat een datapijplijnmigratie achttien maanden eerder stilletjes de tijdstempelbron had geschakeld van eerste commit naar pull-request-creatie, de schijnbare doorlooptijd verkortend met een gemiddelde van verschillende uren over elk team zonder dat iemand het merkte of goedkeurde. De fix vestigde een datakwaliteitscontrole die de verdeling van elke metriek week over week vergeleek en statistisch ongewone verschuivingen signaleerde voor menselijke review, twee verdere stille pijplijnproblemen vangend binnen het volgende jaar.

**Overheid.** Het publiek-gerichte dienstbetrouwbaarheidsdashboard van een vervoersagentschap vertrouwde op een mix van geautomatiseerde sensortelemetrie en handmatig ingevoerde incidentrapporten van regionale kantoren. Een audit vond dat regio's met minder personeelscapaciteit systematisch kleine incidenten onderrapporteerden, niet uit oneerlijkheid maar simpelweg omdat handmatige invoer concurreerde om tijd met urgenter werk, wat betekende dat het gepubliceerde betrouwbaarheidscijfer beter was dan de werkelijkheid precies in de regio's die zich het minst konden veroorloven onderbenoemd onderhoud onopgemerkt te laten. De fix van het agentschap verving handmatige incidentinvoer met geautomatiseerde sensor-getriggerde logging waar haalbaar en voegde een gedocumenteerde schatting van handmatige-rapportage-dekking toe naast het gepubliceerde cijfer.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van solide instrumentatie is vertrouwen: een leiderschapsteam dat zijn data vertrouwt, kan er besluitvaardig op handelen, terwijl een team dat gebrand is door een stilletjes kapotte pijplijn, elk cijfer begint te betwijfelen, wat elke beslissing vertraagt die afhangt van metrieken. Dat verlies van vertrouwen is duur en moeilijk te repareren, vaak veel langer duurend om te herbouwen dan de oorspronkelijke instrumentatie-investering zou hebben gekost.

De totale eigendomskosten van goede instrumentatie omvatten het voorafgaande ingenieurswerk om betrouwbare pijplijnen te bouwen en de lopende kost van datakwaliteitsmonitoring, beide waarvan makkelijk te onderinvesteren zijn omdat geen van beide een zichtbare dashboardtegel van zichzelf produceert. Die onderinvestering is een valse economie: de kost van het ontdekken van een stilletjes kapotte pijplijn na maanden van beslissingen gemaakt op slechte data is veel hoger dan de kost van het bouwen van de gezondheidscontroles die het op dag één zouden hebben gevangen.

## Antipatronen en valkuilen

- **Een cijfer vertrouwen zonder zijn bronsysteem te kennen:** een metriek aangenomen van een raamwerk of standaardleverancier zonder dat iemand spoort waar de data daadwerkelijk vandaan komt.
- **Zelfrapporteren wat een systeem direct kon observeren:** introduceert onnodige ruis en vertekening in data die objectief had kunnen zijn.
- **Geen geautomatiseerde datakwaliteitscontroles op een metriekpijplijn:** een stilletjes kapotte pijplijn kan maanden onopgemerkt verkeerde cijfers weergeven.
- **Alleen de definitie documenteren, niet de verzamelmethode:** twee teams met dezelfde metrieknaam kunnen nog steeds onvergelijkbare cijfers berekenen.
- **Een dashboard dat "0" of verouderde data weergeeft alsof actueel, zonder indicatie van een bronfalen:** erger dan een zichtbaar "data niet beschikbaar"-bericht.
- **Onderbenoemde regio's of teams die systematisch onderrapporteren door handmatige-invoerbelasting:** een datakwaliteitsgat dat correleert met precies de gebieden die de meeste aandacht nodig hebben.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Niemand kan een metriek betrouwbaar terugspeuren naar zijn bronsysteem; pijplijnen hebben geen gezondheidscontroles en falingen blijven onopgemerkt.
- **Niveau 2, Ontwikkelen:** Sommige metrieken hebben gedocumenteerde bronnen, maar verzamelmethoden zijn inconsistent en datakwaliteitscontroles zijn hoogstens ad hoc.
- **Niveau 3, Standaardiseren:** Elke bestuurde metriek documenteert zijn bronsysteem en verzamelmethode; geautomatiseerde pijplijnen worden verkozen boven zelfrapportage waar een gebeurtenis direct geobserveerd kan worden.
- **Niveau 4, Beheren:** Geautomatiseerde datakwaliteitscontroles monitoren elke pijplijn met gevolgen, signaleren anomalieën voor review, en dataherkomst is gedocumenteerd en auditeerbaar.
- **Niveau 5, Orkestreren:** De organisatie behandelt datakwaliteit als een eersteklas ingenieursdiscipline met zijn eigen monitoring en incidentrespons, en kan volledige herkomst demonstreren voor elke gepubliceerde metriek op aanvraag.

## Discussie-ideeën

1. Konden we onze top drie metrieken nu, live, in deze vergadering terugspeuren naar hun exacte bronsysteem?
2. Welke van onze huidige metrieken vertrouwen op zelfrapportage voor iets dat een systeem direct kon meten?
3. Hebben enige van onze metriekpijplijnen vandaag geautomatiseerde gezondheidscontroles?
4. Wanneer hebben we laatst een stilletjes kapotte datapijplijn ontdekt, en hoe lang was het verkeerd geweest?
5. Waar creëert handmatige data-invoer een gat tussen gerapporteerde en daadwerkelijke werkelijkheid?

## Belangrijkste inzichten

- Verkies **geautomatiseerde instrumentatie** boven zelfrapportage waar een systeem de gebeurtenis direct kan observeren; reserveer zelfrapportage voor echt subjectieve ervaring.
- Elke metriek heeft een gedocumenteerd **bronsysteem en verzamelmethode** nodig, niet alleen een definitie.
- Datakwaliteit **vervalt stilletjes**; bouw geautomatiseerde controles in de pijplijn zelf in plaats van falen per ongeluk te ontdekken.
- Instrumenteer **bij de gebeurtenis**, niet stroomafwaarts van een vertaling, om afdrijving tussen wat gebeurde en wat het dashboard toont te minimaliseren.
- De kost van een stilletjes kapotte pijplijn, maanden van beslissingen gemaakt op slechte data, overtreft ver de kost van de gezondheidscontroles die het zouden hebben gevangen.

## Bronnen en verder lezen

- *Observability Engineering*, door Charity Majors, Liz Fong-Jones, en George Miranda (instrumentatie- en telemetrie-ontwerpprincipes).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (instrumentatiebenadering achter de DORA-metrieken).
- *Data Quality: The Accuracy Dimension*, door Jack E. Olson (datakwaliteitsconcepten toepasbaar op metriekpijplijnen).
- *How to Measure Anything*, door Douglas W. Hubbard (meetmethoden voor hoeveelheden die moeilijk direct te observeren schijnen).
