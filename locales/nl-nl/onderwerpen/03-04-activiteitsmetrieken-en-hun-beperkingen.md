# 3.4 Activiteitsmetrieken en hun beperkingen

## Overzicht en motivatie

**Activiteit**, de A in SPACE (hoofdstuk 3.1), telt het volume ingenieurswerk observeerbaar vanuit systeemtelemetrie: commits, geopende pull requests, regels code gewijzigd, achtergelaten codereviewopmerkingen. Het is de makkelijkste SPACE-dimensie om te meten, omdat elk van deze gebeurtenissen al automatisch gelogd wordt door tools die ingenieursteams dagelijks gebruiken, en die meetgemakkelijkheid is precies wat deze dimensie het gevaarlijkste maakt om te overgewichten. Activiteit is een echt, legitiem signaal zorgvuldig gebruikt. Gebruikt als een zelfstandige productiviteitsproxy, is het de enkele meest gemanipuleerde, meest misleidende metriekfamilie in de hele geschiedenis van **[softwareontwikkeling](https://en.wikipedia.org/wiki/Software_engineering)**-meting.

Het kernprobleem is dat activiteit beweging meet, geen waarde. Een committelling onderscheidt niet tussen een commit die een moeilijk probleem elegant oploste en een commit die een betekenisvolle wijziging splitste in vijf om productiever te ogen (de substitutiemanipulatie van hoofdstuk 1.2, direct toegepast op deze metriekfamilie). Regels code gewijzigd beloont uitgebreidheid boven de veel waardevollere vaardigheid van onnodige code verwijderen. Een ingenieur die een volle dag doorbrengt in diep, ononderbroken denken voordat hij tien elegante, goed geteste regels schrijft oogt minder "actief" volgens deze metrieken dan een die oppervlakkige, ongereviewde wijzigingen elke twintig minuten commit, zelfs al produceert de eerste heel vaak veel meer echte waarde.

Voor grote teams is de verleiding om activiteitsmetrieken te gebruiken voor individuele evaluatie constant en goed gedocumenteerd, omdat activiteit makkelijk toe te schrijven is aan een specifieke persoon en makkelijk automatisch te berekenen, in tegenstelling tot de moeilijkere, eerlijkere signalen in de andere SPACE-dimensies. Dit hoofdstuk bestaat specifiek om die verleiding te benoemen en teams taal en bewijs te geven om het te weerstaan, omdat zodra een organisatie begint individueel ingenieurs te rangschikken op committelling of regels code, de schade aan samenwerking, codekwaliteit, en moreel goed gedocumenteerd en moeilijk om te keren is.

## Kernprincipes

- **Activiteit meet beweging, geen waarde.** Het is een legitiem contextueel signaal, nooit een zelfstandige productiviteitsproxy.
- **Dit is de enkele meest historisch misbruikte metriekfamilie in softwareontwikkelingsmeting.** Behandel die geschiedenis als een waarschuwing, geen toeval.
- **Individuele activiteitsrangschikking is bijna altijd schadelijk.** Het beschadigt samenwerking, beloont zichtbare drukte-om-de-drukte, en nodigt manipulatie bijna onmiddellijk uit.
- **Activiteitsdata is het meest nuttig in aggregaat, als context voor andere dimensies,** niet als een onafhankelijk signaal over enige persoon of team.
- **Diep, waardevol werk oogt vaak stil op een activiteitsdashboard.** De metriekfamilie is structureel bevooroordeeld tegen precies het soort denken dat de beste ingenieursuitkomsten produceert.

## Aanbevelingen

### Rangschik of evalueer individuen nooit op ruwe activiteitstellingen

Dit is de enkele moeilijkste, belangrijkste regel in dit hoofdstuk. Committelling, regels code, en pull-request-telling zouden nooit moeten verschijnen in een individuele prestatiebeoordeling, een vergelijkende rangschikking, of enige context waar een ingenieur's compensatie, aanzien, of reputatie afhangt van het cijfer. Dit volgt direct uit het prikkelblootstelling-principe van hoofdstuk 1.2: het moment dat activiteit een gestimuleerde individuele metriek wordt, volgt manipulatie bijna onmiddellijk, en het resulterende gedrag, commits opvullen, wijzigingen triviaal splitsen, diep, ongeglamoureus werk vermijden dat weinig zichtbare gebeurtenissen produceert, beschadigt de organisatie actief.

### Gebruik activiteitsdata in aggregaat, als context, niet als een oordeel

Activiteitsdata wordt echt nuttig wanneer geaggregeerd op teamniveau en gelezen naast de andere SPACE-dimensies: een scherpe daling in teamniveau-commitactiviteit die samenvalt met een stijging in tevredenheid zou kunnen betekenen dat het team eindelijk ademruimte had om diep te denken en technische schuld af te betalen, een positief patroon, geen negatief. Geïsoleerd gelezen oogt dezelfde daling alarmerend. Context van de andere dimensies is wat activiteitsdata interpreteerbaar maakt in plaats van misleidend.

### Verkies kwaliteit-aangrenzende activiteitssignalen boven ruwe volume

Waar activiteitsdata al nuttig is, verkies signalen aangepast voor kwaliteit boven ruwe tellingen: pull-request-grootte relatief aan reviewdiepte (hoofdstuk 2.9), of de ratio van nieuwe code tot verwijderde code, wat kan onthullen of een team complexiteit opstapelt of actief vereenvoudigt. Deze aangepaste signalen zijn nog steeds activiteitsdimensiedata maar weerstaan de ruwste manipulatie die ruwe tellingen uitnodigen.

### Let specifiek op het substitutiemanipulatiepatroon in activiteitsdata

De meest gewone manier waarop activiteitsmetrieken gemanipuleerd worden is precies het substitutiepatroon van hoofdstuk 1.2: echt betekenisvol werk splitsen in veel kleine, triviale gebeurtenissen om een telling op te blazen. Als commit- of pull-request-frequentie stijgt terwijl de onderliggende complexiteit of grootte van wijzigingen scherp daalt, onderzoek voordat je een echte productiviteitsverbetering crediteert, de zelfde diagnostische discipline gebruikend die hoofdstuk 2.10 aanbeveelt voor deploymentfrequentie.

### Benoem en ontmoedig expliciet activiteitstheater

**Activiteitstheater** is werk uitgevoerd, bewust of niet, primair omdat het zichtbaar en telbaar is in plaats van omdat het waardevol is: frequente kleine commits, opvallende late-avond-activiteit, of zichtbare drukte in gedeelde kanalen. Dit patroon expliciet benoemen aan je team, en transparant zijn dat leiderschap ruwe activiteit niet gebruikt om bijdrage te beoordelen, verwijdert veel van de prikkel om het in de eerste plaats te laten gebeuren.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Individuele activiteitsrangschikking | Simpel, makkelijk te berekenen, voelt direct handelbaar | Bijna onmiddellijk gemanipuleerd; beschadigt samenwerking en moreel; meet het verkeerde ding |
| Helemaal geen activiteitsmeting | Vermijdt het misbruikrisico volledig | Verliest echt nuttig contextueel signaal voor teamniveau-patroonherkenning |
| Teamniveau-geaggregeerde activiteit, in context gelezen | Levert nuttige context zonder individueel risico | Vereist discipline om naast andere dimensies te interpreteren in plaats van geïsoleerd |
| Kwaliteit-aangepaste activiteitssignalen | Weerstaat de ruwste ruwe-telling-manipulatie | Complexer te berekenen en uit te leggen dan een simpele telling |

De centrale spanning is **nut versus misbruikrisico**. Activiteitsdata, zorgvuldig gelezen in aggregaat en context, is echt nuttig voor het herkennen van patronen zoals onhoudbaar tempo of een team dat stilletjes ruimte vindt om technische schuld aan te pakken. Dezelfde data, gebruikt als een individuele scorekaart, is bijna uniform schadelijk. Los de spanning op niet door activiteitsdata volledig te vermijden maar door een harde organisatorische regel te bouwen tegen individueel gebruik, terwijl je doordacht, gecontextualiseerd teamniveau-gebruik toestaat en zelfs aanmoedigt.

## Vragen om met je team te bespreken

1. **Is iemand in onze organisatie ooit geëvalueerd, formeel of informeel, met een ruwe activiteitstelling zoals commits of regels code?** Vraag dit direct en wees voorbereid op een ongemakkelijk maar noodzakelijk antwoord; dit misbruik gebeurt vaak stilletjes, via een losse opmerking van een manager, zonder ooit officieel beleid te worden.

2. **Hoe zou activiteitstheater er specifiek uitzien op ons team, en hebben we tekenen ervan gezien?** De specifieke, plausibele vorm die dit patroon zou kunnen nemen op je eigen team benoemen maakt het veel makkelijker om te herkennen als het begint te gebeuren.

3. **Wanneer onze teamniveau-activiteitsdata beweegt, interpreteren we het naast de andere SPACE-dimensies, of geïsoleerd?** Een daling in activiteit geïsoleerd gelezen oogt verontrustend; dezelfde daling gelezen naast een tevredenheids- of prestatieverbetering kan ogen als een echt positief patroon. Check je daadwerkelijke reviewpraktijk tegen dit onderscheid.

4. **Hebben we ooit een stijging in commit- of pull-request-frequentie gezien gepaard met een krimpende gemiddelde wijzigingsgrootte, suggererend triviale splitsing in plaats van echte productiviteitswinst?** Trek echte data en check op dit specifieke substitutiemanipulatiepatroon.

5. **Hoe praten we momenteel over "wie draagt het meest bij" op ons team, en leunt dat gesprek impliciet op activiteitsdata zelfs zonder een formele metriek?** Informele, ongemeten bevooroordeling richting zichtbare drukte kan perceptie en beloning vormen zelfs zonder een expliciet activiteitsgebaseerd beleid; breng dit eerlijk aan de oppervlakte.

6. **Hoe ziet echt waardevol maar stil werk, diep denken, zorgvuldig ontwerp, mentoring, eruit op ons team, en hoe zorgen we ervoor dat het erkend wordt ondanks weinig zichtbare activiteitsdata te genereren?** Deze vraag is het positieve complement van de vorige: benoemen hoe goed, stil werk eruitziet helpt het beschermen tegen overgezien worden in het voordeel van luidere, telbaardere werk.

## Sectorperspectief

**Startup.** Met een klein, nauw samenwerkend team is activiteitsdata meestal zichtbaar zonder helemaal een dashboard nodig te hebben, en het individuele-rangschikking-risico waar dit hoofdstuk tegen waarschuwt is minder waarschijnlijk simpelweg omdat iedereen al weet waaraan iedereen anders werkt. Het risico is in plaats daarvan een oprichter die onbewust zichtbaar "druk" gedrag bevoordeelt bij het maken van vroege aanwervings- of aandelenbeslissingen.

**Klein bedrijf.** Activiteitsdata van je bestaande tools is prima om naar te kijken voor een algemeen gevoel van teamdoorvoer, maar weersta het gebruiken om individuele bijdragers direct te vergelijken; de echte waarde van een klein team concentreert zich vaak bij enkele mensen die stil, hoog-leverage-werk doen dat een committelling-blik systematisch zou onderwaarderen.

**Groot bedrijf.** Hier is de individuele-rangschikking-verleiding het sterkst en meest schadelijk, omdat activiteitsdata het makkelijkste signaal is om te trekken voor een prestatiebeoordelingsproces dat duizenden ingenieurs omspant, en de druk om *enige* kwantificeerbare input te vinden echt is. Bouw een expliciet, gecommuniceerd, afgedwongen beleid tegen individuele activiteitsrangschikking, en audit prestatiebeoordelingspraktijken periodiek om te bevestigen dat het beleid daadwerkelijk gevolgd wordt in de praktijk, niet alleen gesteld.

**Overheid.** Activiteitsmetrieken kunnen verleidelijk zijn om te citeren in een publiek rapport als bewijs van productiviteit ("tienduizend commits dit jaar"), maar dit soort kopregel is bijna betekenisloos en kan precies de verkeerde doorlichting uitnodigen zodra een kundige recensent erop wijst dat ruwe activiteit niets zegt over uitkomsten. Rapporteer uitkomst- en prestatiedata (hoofdstuk 3.3) in plaats daarvan, en vermijd activiteitstellingen in enige extern gerichte communicatie.

## Voorbeelden

**Groot bedrijf.** Het ingenieursleiderschap van een softwarebedrijf was, zonder formeel beleid, begonnen informeel individuele committempodata te refereren in promotiegesprekken. Een interne review, getriggerd door een ongerelateerd verzuimanalyseproject, vond dat ingenieurs die werkten aan de meest complexe, hoogste-waarde-systemen van het bedrijf, lange periodes van zorgvuldig ontwerpwerk vereisend voordat enige code geschreven werd, systematisch lagere committellingen hadden dan ingenieurs op simpelere, meer incrementeel ontwikkelde systemen, en als resultaat subtiel benadeeld werden in promotiegesprekken. Leiderschap gaf een expliciet, gecommuniceerd beleid uit dat activiteitstelling-referenties verbood in prestatie- en promotiegesprekken, en verschoof promotiebewijs richting de meervoudig-signaal-prestatieaanpak van hoofdstuk 3.3.

**Overheid.** Een digitale-dienstenagentschap, onder druk om productiviteit aan te tonen aan een wetgevende toezichthoudende commissie, stelde initieel voor om totale commits en geschreven regels code te rapporteren over zijn ingenieursprogramma als bewijs van geleverde waarde. Een interne technisch adviseur duwde terug, correct opmerkend dat deze framing precies de verkeerde doorlichting uitnodigde, omdat een technisch geletterd commissielid makkelijk erop zou kunnen wijzen dat ruw codevolume niets zegt over of de code werkte of ertoe deed. Het herziene rapport van het agentschap gebruikte in plaats daarvan uitkomstmetrieken (hoofdstuk 5.3): vermindering in burger-gerapporteerde fouten en toename in succesvolle zelfbedieningsafronding, wat veel beter standhield onder commissie-ondervraging dan de activiteitscijfers zouden hebben gedaan.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van activiteitsmetrieken goed krijgen, ze contextueel gebruiken in plaats van als individuele scorekaarten, is vermeden schade: organisaties die individueel ingenieurs rangschikken op activiteit zien betrouwbaar manipulatiegedrag, verminderde samenwerking (ingenieurs die hun eigen zichtbare output beschermen in plaats van een teamgenoot te helpen), en een systematische bevooroordeling tegen het diepe, hoog-leverage-werk dat vaak de meeste waarde produceert terwijl het de minste zichtbare activiteit genereert. Die schade omkeren, eenmaal verankerd in een prestatiebeoordelingscultuur, is echt moeilijk en langzaam.

De totale kost om deze valkuil te vermijden is meestal organisatorische discipline: een expliciet beleid, consistent afgedwongen, tegen individuele activiteitsrangschikking, en een toewijding om te investeren in de moeilijkere, eerlijkere prestatiemeting beschreven in hoofdstuk 3.3 in plaats daarvan. Die discipline kost minder dan de verkeerd gerichte promotiebeslissingen, beschadigde samenwerking, en manipulatiegedrag die individuele activiteitsmetrieken betrouwbaar produceren over tijd.

## Antipatronen en valkuilen

- **Individuele rangschikking op committelling of regels code:** het enkele meest schadelijke, meest historisch gewone misbruik in dit hele boek.
- **Activiteitstheater:** werk uitgevoerd primair voor zichtbaarheid in plaats van waarde, een volledig voorspelbare reactie op activiteitsgebaseerde evaluatie.
- **Een teamniveau-activiteitsdaling geïsoleerd interpreteren, zonder de andere SPACE-dimensies te checken:** kan een echt positief patroon verwarren met een verontrustend een.
- **Ruwe activiteitstellingen citeren in externe of leiderschapsgerichte communicatie:** nodigt precies de verkeerde doorlichting uit en zegt weinig over echte waarde.
- **Diep, zorgvuldig werk systematisch onderwaarderen dat weinig zichtbare gebeurtenissen genereert:** een structurele bevooroordeling ingebakken in deze hele metriekfamilie.
- **Informele, onbeleide activiteitsbevooroordeling die promotie- of beoordelingsgesprekken binnensluipt:** schadelijk zelfs zonder een officiële metriek erachter.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Activiteitsmetrieken worden gebruikt, formeel of informeel, om individuen te evalueren of rangschikken, zonder bewustzijn van het risico.
- **Niveau 2, Ontwikkelen:** Enig bewustzijn van het risico bestaat, maar geen expliciet beleid voorkomt dat activiteitsdata informeel beoordelingen of promotiegesprekken beïnvloedt.
- **Niveau 3, Standaardiseren:** Een expliciet, gecommuniceerd organisatiebreed beleid verbiedt individuele activiteitsrangschikking, en activiteitsdata wordt alleen gebruikt in aggregaat, teamniveau-context.
- **Niveau 4, Beheren:** Prestatiebeoordelings- en promotiepraktijken worden periodiek geaudit om te bevestigen dat het beleid in de praktijk gevolgd wordt, en kwaliteit-aangepaste activiteitssignalen vervangen ruwe tellingen waar activiteitsdata al gebruikt wordt.
- **Niveau 5, Orkestreren:** De organisatie heeft evaluatiecultuur aantoonbaar verschoven weg van activiteitsmetrieken richting de meervoudig-signaal-prestatieaanpak van hoofdstuk 3.3, met zichtbare verbetering in samenwerking en verminderd manipulatiegedrag als bewijs dat de verschuiving werkte.

## Discussie-ideeën

1. Heeft iemand hier zich ooit geëvalueerd gevoeld, zelfs informeel, door hoe "druk" hun activiteit oogde?
2. Hoe zou activiteitstheater er specifiek uitzien op ons team?
3. Hebben we een expliciet, geschreven beleid tegen individuele activiteitsrangschikking, en wordt het daadwerkelijk gevolgd?
4. Welk stil, hoog-waarde-werk op ons team genereert momenteel de minste zichtbare activiteitsdata?
5. Hoe zouden we ons prestatiebeoordelingsbewijs herontwerpen om activiteitstellingen volledig te verwijderen?

## Belangrijkste inzichten

- Activiteit meet **beweging, geen waarde**; het is de enkele meest historisch misbruikte metriekfamilie in softwareontwikkeling.
- **Rangschik of evalueer individuen nooit** op ruwe activiteitstellingen; dit is de moeilijkste en belangrijkste regel in dit hoofdstuk.
- Gebruik activiteitsdata **in aggregaat, als context** voor de andere SPACE-dimensies, nooit als een zelfstandig oordeel.
- Let op **activiteitstheater** en het **substitutiemanipulatiepatroon** (hoofdstuk 1.2) specifiek binnen deze metriekfamilie.
- Diep, hoog-waarde-werk genereert vaak de **minste zichtbare activiteitsdata**; bescherm het tegen systematisch onderwaarderen.

## Bronnen en verder lezen

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, en Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, door Tom DeMarco en Timothy Lister (de zaak tegen ingenieurs meten op zichtbare drukte).
- *Deep Work: Rules for Focused Success in a Distracted World*, door Cal Newport (de waarde van stil, ononderbroken werk dat activiteitsmetrieken systematisch ondertellen).
- *The Tyranny of Metrics*, door Jerry Z. Muller (metriekfixatie en zijn kosten, direct toepasbaar op activiteitsgebaseerde evaluatie).
