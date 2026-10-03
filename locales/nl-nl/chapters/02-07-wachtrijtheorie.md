# 2.7 Wachtrijtheorie

## Overzicht en motivatie

**[Wachtrijtheorie](https://en.wikipedia.org/wiki/Queueing_theory)** is de wiskundige studie van wachtrijen. Het klinkt als een vreemde pasvorm voor een boek over softwareontwikkelingsmetrieken totdat je merkt hoeveel van een leveringspijplijn daadwerkelijk een wachtrij is: een pull request wachtend op een reviewer, een commit wachtend op een CI-runner, een ticket wachtend om opgepakt te worden, een klantenservicebericht wachtend op een antwoord. Hoofdstuk 2.4 introduceerde al flowbelasting en flowtijd en liet zien dat het overbelasten van een waardestroom levering scherp doet vertragen, en hoofdstukken 2.5 en 2.6 lieten zien dat het meeste levertijd wachttijd is, geen werktijd. Wachtrijtheorie is de onderliggende wiskunde die verklaart waarom dat allemaal waar is, niet slechts een waargenomen patroon.

Het meest nuttige enkele resultaat is de **[Wet van Little](https://en.wikipedia.org/wiki/Little%27s_law)**, een stelling bewezen door de operationeel onderzoeker John Little in 1961: het gemiddelde aantal items in een stabiel systeem is gelijk aan het gemiddelde tempo waarmee items aankomen, vermenigvuldigd met de gemiddelde tijd die elk item in het systeem doorbrengt. Hoofdstuk 2.4 gebruikte dit resultaat al onder de eigen namen van het Flow Framework, flowbelasting is gelijk aan aankomsttempo vermenigvuldigd met flowtijd. In de bredere woordenschat van dit boek leest het ook als onderhanden werk (hoofdstuk 2.5) is gelijk aan het aankomsttempo van nieuw werk vermenigvuldigd met cyclustijd (hoofdstuk 2.6). Dit is geen vuistregel of een correlatie waargenomen in enkele studies. Het is een bewijs dat geldt voor elke stabiele wachtrij, ongeacht wat de wachtrij verwerkt of hoe het beslist waaraan vervolgens te werken.

Voor een groot team is die algemeenheid het punt. De Wet van Little geeft je een sanity check die identiek werkt of de wachtrij een kanbanbord, een berichtenmakelaar, of een gedeelde CI-pijplijn is. Als je gemeten onderhanden werk, aankomsttempo, en cyclustijd niet ongeveer de vergelijking voldoen, is een van je drie cijfers verkeerd, meestal door een inconsistente definitie van wat telt als "in behandeling" of "aangekomen." Grote bedrijven en overheidsorganisaties draaien dozijnen van zulke wachtrijen gelijktijdig, gedeelde codereviewpools, gedeelde testomgevingen, gedeelde goedkeuringscommissies, en de Wet van Little is het goedkoopste beschikbare gereedschap voor het vangen van een slechte metriekdefinitie voordat het een slechte personeels- of procesbeslissing drijft.

## Kernprincipes

- **De Wet van Little is een bewijs, geen heuristiek.** Onderhanden werk is gelijk aan aankomsttempo vermenigvuldigd met cyclustijd, voor elke stabiele wachtrij, en het is een snelle check of je leveringsmetrieken intern consistent zijn.
- **Bezettingsgraad schaalt niet lineair met wachttijd.** Naarmate een gedeelde resource volledige bezettingsgraad nadert, groeit wachtrijvertraging scherp, niet geleidelijk. Een resource die op 95% draait wacht vaak vele malen langer dan een die op 80% draait, niet slechts "een beetje erger."
- **Het gemiddelde van een wachtrij verbergt zijn slechtste geval.** Alleen de gemiddelde wachttijd rapporteren verhult de lange, pijnlijke staart dichtbij capaciteit, precies wat hoofdstuk 1.6 waarschuwt tegen wanneer het gaat om percentielen gebruiken in plaats van gemiddelden.
- **Hoe een wachtrij gedefinieerd wordt kan net zo makkelijk gemanipuleerd worden als elke andere metriek.** Of iets telt als "aangekomen," "in behandeling," of "bediend" is een keuze, en het kan afgesteld worden om een dashboard te vleien zonder te veranderen wat daadwerkelijk met het werk gebeurt.
- **Een pijplijn is meestal een wachtrij van wachtrijen.** Een leveringspijplijn schakelt verscheidene stadia samen, en het langzaamste stadium stelt het tempo voor de hele keten, ongeacht hoe snel de anderen draaien.

## Aanbevelingen

### Gebruik de Wet van Little om je eigen cijfers te checken voordat je ze vertrouwt

Neem het gemeten gemiddelde onderhanden werk van je team, zijn gemiddelde aankomsttempo van nieuwe items per week, en zijn gemiddelde cyclustijd, en check of onderhanden werk ongeveer gelijk is aan aankomsttempo vermenigvuldigd met cyclustijd. Wanneer dat niet zo is, neem niet aan dat de theorie verkeerd is. Zoek naar de daadwerkelijke oorzaak: een stadiumgrens inconsistent geteld, werk dat "geblokkeerd" zit maar nog steeds geteld wordt als in behandeling, of een aankomsttempo gemeten over een ander venster dan de cyclustijd. Deze enkele check vangt meer slechte instrumentatie dan de meeste teams op enige andere manier vinden.

### Volg bezettingsgraad direct voor elke gedeelde, capaciteitsbeperkte resource

Identificeer de resources die je leveringspijplijn deelt over veel teams, een codereviewpool, een CI-cluster, een stagingomgeving, en meet hoe druk elk een draait als een proportie van zijn beschikbare capaciteit, voordat je plant om het dicht bij zijn limiet te draaien. Een gedeelde reviewergroep die dicht bij volle capaciteit draait produceert reviewwachtrij-wachttijden die veel sneller groeien dan de bescheiden toename in vraag die ze veroorzaakte, precies de dynamiek achter het advies van hoofdstuk 2.9 om tijd-tot-eerste-review te bewaken als een voorlopende indicator.

### Scheid aankomsttempo, succestempo, faaltempo, en overslagtempo

Weersta het samenvoegen van alles wat een wachtrij verlaat in een enkel "doorvoer"- of "bedieningstempo"-cijfer. Volg vier dingen afzonderlijk: hoe snel werk aankomt, hoeveel ervan succesvol afrondt, hoeveel faalt en herwerk nodig heeft, en hoeveel verlaten of stilletjes laten vallen wordt voordat iemand het afrondt. Een pijplijn die snel lijkt omdat zijn overslagtempo stilletjes klom levert niet daadwerkelijk meer, en alleen deze vier tempo's afzonderlijk volgen zal je dat laten zien.

### Modelleer meerstadia-pijplijnen als een wachtrij van wachtrijen

Behandel een leveringspijplijn, of elk meerstadiaproces, een incidentlevenscyclus, een aanwervingspijplijn, als een keten van wachtrijen in plaats van een ongedifferentieerde brei van "tijd." Het algehele aankomsttempo wordt gesteld door het eerste stadium, het algehele afrondingstempo door het laatste stadium, en de totale fout- en overslagtellingen van de pijplijn zijn de som van elk stadium's eigen. Deze framing vertelt je direct welk stadium de moeite waard is om in te investeren: dat met de slechtste combinatie van hoge bezettingsgraad en hoog faal- of overslagtempo, niet dat wat toevallig het makkelijkst is om te instrumenteren.

### Stel personeels- en OHW-limieten met bezettingsgraad in gedachten, niet alleen doorvoer

Wanneer je beslist hoeveel reviewers of CI-runners een team nodig heeft, maat je capaciteit niet precies op het gemiddelde aankomsttempo af. Een wachtrij die gemiddeld op 100% bezettingsgraad draait heeft in de praktijk een effectief oneindige wachttijd, omdat echte aankomsten ongelijk zijn, niet perfect gelijkmatig. Plan doelbewust voor speelruimte, en behandel "onze reviewers zijn bijna altijd bezig" als een waarschuwingssignaal over komende wachttijden, niet als bewijs van efficiënte resourcetoewijzing.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen formeel wachtrijmodel, buikgevoel-personeelsbezetting | Snel om te starten; geen nieuwe woordenschat voor het team | Onderschat consistent hoe wachttijd explodeert dichtbij volle capaciteit |
| Wet van Little als sanity check op bestaande metrieken | Goedkoop, vereist geen nieuwe tooling, vangt slechte definities snel | Checkt alleen consistentie, diagnosticeert de oorzaak niet uit zichzelf |
| Volledige wachtrijsimulatie (aankomstverdelingen, meerdere servers) | Meest accurate voorspelling van wachttijd-gedrag onder belasting | Vereist echte statistische vaardigheid en onderhoud die de meeste teams niet zullen volhouden |
| Bezettingsgraadtracking op gedeelde resources zonder diepere modellering | Simpel, handelbaar, vangt de enkele grootste oorzaak van op hol geslagen wachttijden | Zegt niets over waarom bezettingsgraad hoog is of wat te doen aan de onderliggende oorzaak |

De centrale spanning is **rigoureusheid versus adoptie**. Een volledige wachtrijsimulatie geeft het meest accurate antwoord, maar bijna geen ingenieursteam zal een bouwen en onderhouden, en een model dat niemand vertrouwt of bijwerkt is erger dan geen model. De Wet van Little en basisbezettingsgraadtracking geven wat precisie op maar vereisen geen gespecialiseerde statistische vaardigheid en passen direct in metrieken een team al verzamelt voor hoofdstukken 2.4 tot en met 2.6. Standaard naar die goedkope, adopteerbare checks, en reserveer volledige simulatie voor het zeldzame geval waar een enkele gedeelde resource, een groot CI-wagenpark, een gespecialiseerde reviewpool, duur genoeg is om de investering te rechtvaardigen.

## Vragen om met je team te bespreken

1. **Voldoen ons gemeten onderhanden werk, aankomsttempo, en cyclustijd daadwerkelijk aan de Wet van Little, en als niet, waarom niet?** Dit is de snelste beschikbare diagnose voor een slechte metriekdefinitie. Loop de daadwerkelijke cijfers samen door, en als de vergelijking niet ongeveer standhoudt, traceer de mismatch naar een specifieke definitionele inconsistentie in plaats van de check af te wijzen.

2. **Welke gedeelde resources in onze leveringspijplijn draaien dicht bij volle bezettingsgraad, en weten we daadwerkelijk hun bezettingsgraadcijfer?** De meeste teams kunnen een resource noemen die "altijd druk aanvoelt" maar hebben zijn bezettingsgraad nooit direct gemeten. Identificeer de twee of drie meest beperkte gedeelde resources en krijg een echt cijfer voor elk.

3. **Vermengen we succes, falen, en overslag in een enkel doorvoercijfer, en wat zouden we zien als we ze uit elkaar splitsen?** Een enkele "items afgerond"-telling kan stijgen zelfs terwijl kwaliteit daalt of werk stilletjes verlaten wordt. Herberken de doorvoer van een recente periode als drie afzonderlijke cijfers en bespreek wat de splitsing onthult die het vermengde cijfer verhulde.

4. **Waar in onze pijplijn is het echte knelpunt, het langzaamste stadium dat het tempo stelt voor alles stroomafwaarts?** Teams investeren vaak in het versnellen van het stadium dat het makkelijkst te verbeteren is in plaats van dat wat daadwerkelijk totale doorvoer beperkt. Identificeer het stadium met de slechtste combinatie van hoge bezettingsgraad en hoog faal- of overslagtempo.

5. **Als we capaciteit toevoegden aan onze meest beperkte gedeelde resource, zou wachttijd daadwerkelijk verbeteren, of zou vraag simpelweg uitbreiden om het te vullen?** Deze vraag scheidt een echt capaciteitstekort van een vraagprobleem, en het antwoord verandert of de juiste fix meer personeel, een OHW-limiet, of een verandering is in hoe werk geprioriteerd wordt voordat het de wachtrij binnenkomt.

6. **Hebben we ooit herdefinieerd wat telt als "in behandeling" of "aangekomen" op een manier die een dashboard beter liet lijken zonder te veranderen wat daadwerkelijk met het werk gebeurde?** Dit is de moeite waard om eerlijk en specifiek te vragen, met echte voorbeelden van het laatste jaar, in plaats van het te behandelen als een hypothetische zorg.

## Sectorperspectief

**Startup.** Met een handvol ingenieurs zijn de meeste wachtrijen kort genoeg dat formele wachtrijanalyse overkill is. De nuttige gewoonte is kleiner: merk wanneer één persoon, vaak de meest senior ingenieur, een de-facto gedeelde resource is geworden waarop al het andere wacht, en behandel dat als een bezettingsgraadprobleem de moeite waard om te benoemen zelfs zonder enig formeel model erachter.

**Klein bedrijf.** Een klein-bedrijfteam heeft zelden meer nodig dan bezettingsgraad volgen op zijn een of twee echt gedeelde resources, vaak een enkele reviewer of een enkele deploymentpijplijn, en letten op het punt waar "meestal beschikbaar" stilletjes "meestal het knelpunt" wordt. Een spreadsheet is genoeg; toegewijde tooling is niet nodig op deze schaal.

**Groot bedrijf.** Gedeelde resources vermenigvuldigen snel op groot-bedrijfsschaal: een centraal platformteam, een gedeelde beveiligingsreviewcommissie, een gedeeld CI-wagenpark dat dozijnen productteams bedient. Dit zijn precies de resources waar bezettingsgraadtracking zichzelf terugbetaalt, omdat een enkele overbelaste gedeelde resource stilletjes levertijd kan verslechteren voor elk team dat ervan afhangt, en geen enkel team's eigen metrieken zullen een oorzaak onthullen die buiten hun eigen pijplijn leeft.

**Overheid.** Programma's met meerdere agentschappen en leveranciers routeren werk vaak door gedeelde goedkeuringscommissies, gedeelde beveiligingsaccreditatieprocessen, en gedeelde testomgevingen die geen enkel team controleert of zelfstandig kan herschalen. Wachtrijanalyse van deze gedeelde poorten, aankomsttempo, capaciteit, bezettingsgraad, is vaak het duidelijkste beschikbare bewijs voor een zakelijke onderbouwing om capaciteit toe te voegen of om te veranderen hoe werk gebundeld wordt voordat het de poort bereikt.

## Voorbeelden

**Groot bedrijf.** Het interne platformteam van een cloud-infrastructuurleverancier merkte dat doorlooptijd voor wijzigingen (hoofdstuk 2.10) omhoog gekropen was over elk productteam dat afhing van zijn gedeelde CI-wagenpark, zelfs terwijl geen enkel team veranderd had hoe het werkte. Een bezettingsgraadanalyse vond het wagenpark boven 90% druk draaiend tijdens kernuren, ver voorbij het punt waar wachtrijtheorie voorspelt dat wachttijd scherp groeit in plaats van geleidelijk. Het platformteam voegde CI-capaciteit toe en introduceerde een fair-share-planningsbeleid zodat geen enkel team's uitbarsting van activiteit de wachtrij kon monopoliseren. Mediane CI-wachttijd viel met meer dan de helft binnen een maand, bewijs dat het knelpunt een gedeelde, onzichtbare wachtrij was geweest de hele tijd.

**Overheid.** Het digitale-dienstenteam van een nationaal vergunningsagentschap volgde aanvraagverwerking als een enkel "afgeronde zaken per week"-doorvoercijfer twee jaar lang, en het cijfer zag stabiel uit. Een nauwkeurigere analyse, die dat cijfer splitste in zaken goedgekeurd, afgewezen, en verlaten door aanvragers na lange vertragingen, vond dat het verlatingstempo bijna verdriedubbeld was over diezelfde periode terwijl goedkeuringen vlak bleven. De Wet van Little, toegepast op de behandelaarwachtrij, liet zien dat onderhanden werk veel verder gegroeid was dan de door het team gestelde gemiddelde verwerkingstijd impliceerde, wat betekende dat zaken stilletjes opstapelden in een status die niet geteld werd als "wachtend." Het agentschap herstructureerde zijn zaak-tracking-definities om elke open zaak eerlijk te tellen en voegde behandelaarcapaciteit toe gedimensioneerd om bezettingsgraad onder 85% te houden, nu bijgehouden als een staand operationeel doel naast het doorvoercijfer.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van basiswachtrijanalyse toepassen is dat het "de pijplijn voelt traag" verandert in een specifieke, verdedigbare beslissing, voeg speelruimte toe aan deze gedeelde resource, splits deze vermengde metriek in zijn echte componenten, in plaats van een vage duw om "sneller te werken" die de daadwerkelijke oorzaak misloopt. Het cloud-infrastructuurvoorbeeld hierboven, gehalveerde wachttijd van een capaciteits- en planningsfix in plaats van enige verandering aan individuele teams' gedrag, is het patroon dat deze analyse betrouwbaar produceert: de fix is bijna altijd goedkoper dan elk stroomafwaarts team vragen sneller te bewegen rond een knelpunt dat ze niet kunnen zien.

De totale eigendomskosten zijn echt laag. De Wet van Little en bezettingsgraadtracking hebben geen nieuwe tooling nodig voorbij wat hoofdstukken 2.4 tot en met 2.6 je al vragen te verzamelen: aankomsttempo, onderhanden werk, en cyclustijd. De investering is meestal analytische discipline, de cijfers tegen elkaar checken en periodiek bezettingsgraad reviewen op gedeelde resources voordat ze de organisatie's volgende onverklaarde doorlooptijdregressie worden.

## Antipatronen en valkuilen

- **Een gedeelde resource's capaciteit precies afmeten op zijn gemiddelde aankomsttempo:** garandeert hoge bezettingsgraad en op hol geslagen wachttijden wanneer vraag zelfs even ongelijk is.
- **Alleen gemiddelde wachttijd rapporteren, nooit een percentiel:** verhult de lange staart die het meest ertoe doet voor de mensen die erin wachten.
- **Succes, falen, en overslag vermengen in een enkel doorvoercijfer:** de manipulatievector in de kern van dit hoofdstuk. Een team onder druk kan doorvoer gezond laten lijken door het overslagtempo stilletjes te laten stijgen, verlaten tickets, stilletjes laten vallen verzoeken, werk dat nooit geteld wordt als een falen. De beschermmetriek is aankomst-, succes-, faal-, en overslagtempo bijhouden als vier afzonderlijke, zichtbare cijfers, dezelfde discipline die hoofdstuk 1.2 vraagt voor elke metriek in dit boek, zodat een stijgend overslagtempo zich niet kan verschuilen achter een vlakke doorvoergrafiek.
- **"Onze mensen zijn altijd bezig" behandelen als een compliment:** het is een symptoom van hoge bezettingsgraad, de leidende oorzaak van lange, onvoorspelbare wachttijden.
- **"In behandeling" herdefiniëren om onderhanden werk stilletjes te laten krimpen:** verplaatst werk naar een ongetelde staat, "geblokkeerd," "in de wacht," zonder te veranderen hoe lang het duurt om af te ronden, en breekt de Wet-van-Little-check die het anders zou hebben gevangen.
- **Aannemen dat een wachtrijmodel geen onderhoud nodig heeft eenmaal gebouwd:** aankomstpatronen en capaciteit veranderen constant, en een verouderd model produceert vol vertrouwen verkeerde voorspellingen.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Geen wachtrij wordt expliciet gemeten; wachttijd wordt anekdotisch besproken als "dingen voelen traag."
- **Niveau 2, Ontwikkelen:** Aankomsttempo, onderhanden werk, en cyclustijd worden bijgehouden voor ten minste één pijplijn, maar nooit gecheckt tegen de Wet van Little of tegen bezettingsgraad op gedeelde resources.
- **Niveau 3, Standaardiseren:** De Wet van Little is een routinematige consistentiecheck over leveringspijplijnen, en bezettingsgraad wordt expliciet bijgehouden voor de belangrijkste gedeelde resources.
- **Niveau 4, Beheren:** Succes-, faal-, en overslagtempo worden afzonderlijk bijgehouden voor elke significante wachtrij, en capaciteitsbeslissingen gebruiken bezettingsgraaddoelen, niet alleen gemiddelde vraag.
- **Niveau 5, Orkestreren:** De organisatie modelleert zijn belangrijkste pijplijnen als wachtrijen van wachtrijen, identificeert echte knelpunten systematisch, en kan wijzen naar specifieke capaciteits- of procesveranderingen gemaakt vanwege wachtrijanalyse, met gemeten wachttijdverbetering om het te laten zien.

## Discussie-ideeën

1. Kies een van onze leveringspijplijnen en check of zijn cijfers vandaag voldoen aan de Wet van Little.
2. Noem de enkele gedeelde resource in onze organisatie waarover de meeste mensen het eens zouden zijn dat die "altijd bezig" is, en vind zijn daadwerkelijke bezettingsgraadcijfer.
3. Hoe zou onze doorvoergrafiek eruitzien als we het splitsten in succes-, faal-, en overslagtempo's voor het laatste kwartaal?
4. Als we capaciteit moesten toevoegen aan precies één gedeelde resource dit jaar, welke, en welk bewijs zou het rechtvaardigen?

## Belangrijkste inzichten

- **De Wet van Little**, onderhanden werk is gelijk aan aankomsttempo vermenigvuldigd met cyclustijd, is een bewijs, geen heuristiek, en het is de goedkoopste beschikbare check of je leveringsmetrieken intern consistent zijn.
- **Wachttijd groeit scherp, niet geleidelijk, naarmate bezettingsgraad volle capaciteit nadert.** Behandel "altijd bezig" als een waarschuwingssignaal, geen compliment.
- Volg **aankomsttempo, succestempo, faaltempo, en overslagtempo** afzonderlijk; ze vermengen in een enkel doorvoercijfer is de centrale manipulatievector van dit hoofdstuk.
- Modelleer een meerstadiapijplijn als een **wachtrij van wachtrijen**, en investeer in het stadium met de slechtste combinatie van hoge bezettingsgraad en hoog faal- of overslagtempo, niet het stadium dat het makkelijkst te verbeteren is.
- Verkies goedkope, adopteerbare checks, **de Wet van Little en bezettingsgraadtracking**, boven een volledige wachtrijsimulatie die weinig teams zullen volhouden.

## Bronnen en verder lezen

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
