# 1.2 Goodharts wet en de psychologie van metrieken

## Overzicht en motivatie

[Goodharts wet](https://en.wikipedia.org/wiki/Goodhart%27s_law), genoemd naar de economist Charles Goodhart, wordt meestal gesteld als: wanneer een maatstaf een doel wordt, stopt hij een goede maatstaf te zijn. Goodharts oorspronkelijke observatie uit 1975 ging over monetair beleid, maar de antropologe Marilyn Stratherns latere herformulering is de versie die softwareteams daadwerkelijk nodig hebben, en het is de zin waarop dit hele boek gebouwd is. Elke metriek in elk later onderwerp, deploymentfrequentie, testdekking, tevredenheidsscores, draagt dit risico, en elke aanbeveling in dit boek is, in enige vorm, een strategie om het te beheren.

Het mechanisme is niet mysterieus. Mensen reageren op prikkels, en een metriek gekoppeld aan een beloning, een review, of een reputatie is een prikkel, of iemand het nu als zodanig bedoelde of niet. Zodra een team weet dat "deploymentfrequentie" wordt bekeken, is de goedkoopste manier om dat cijfer te bewegen niet altijd de bedoelde: splits één betekenisvolle wijziging in vijf triviale deployments, en het cijfer stijgt terwijl niets echts verbeterde. Dit is geen verhaal over slechte actoren. Gewone, goedbedoelende ingenieurs reageren precies zo op slecht ontworpen prikkels, omdat de prikkel, niet de intentie erachter, is wat gedrag onder druk vormt.

Voor grote organisaties zijn de belangen hoger omdat de afstand tussen de ontwerper van de metriek en de persoon wiens gedrag hij vormt groeit met schaal. Een teamleider die een metriek bouwt voor zijn eigen team van acht mensen kan rechtstreeks uitkijken naar manipulatie en snel koers corrigeren. Een metriek uitgerold over een divisie van zeshonderd mensen, of gepubliceerd in een overheidsprestatierapport gelezen door een parlement, reist door lagen mensen die de auteur ervan nooit ontmoetten en elke reden hebben om de letter van de metriek als het doel te behandelen. De vervorming stapelt zich op met afstand, wat precies is waarom dit onderwerp, niet een later, is waar het boek zijn zwaartepunt legt.

## Kernprincipes

- **Ga ervan uit dat elke prikkel-gekoppelde metriek gemanipuleerd zal worden.** Ontwerp hiertegen vanaf de eerste versie, niet nadat de vervorming ontdekt is.
- **De manipulatie is rationeel, niet kwaadaardig.** Mensen reageren verstandig op de prikkel die je bouwde; hen daarvoor de schuld geven fixt niets.
- **Afstand van de metriekeigenaar verhoogt vervormingsrisico.** Hoe verder een cijfer reist van de persoon die zijn intentie begrijpt, hoe meer het de letter van de regel wordt in plaats van de geest.
- **Verhoudingen en bereiken weerstaan manipulatie beter dan ruwe tellingen.** Een ruwe telling beloont volume; een goed gekozen verhouding beloont het daadwerkelijke gedrag dat je wilt.
- **Een beschermmetriek is niet optioneel op een prikkel-gekoppelde metriek.** Elke metriek waaraan je een beloning koppelt, heeft een gepaarde tegenmetriek nodig die niet mag verslechteren.

## Aanbevelingen

### Classificeer elke metriek naar prikkelblootstelling

Voordat je een metriek ergens zichtbaar publiceert, vraag direct: hangt iemands beloning, review, reputatie, of budget af van dit cijfer dat in een bepaalde richting beweegt? Zo ja, het is een prikkel-gekoppelde metriek en heeft een beschermmetriek nodig (hieronder) voordat hij live gaat. Zo niet, het is een diagnostische metriek (onderwerp 1.1) en draagt lager manipulatierisico, al nooit nul, omdat mensen nog steeds een cijfer kunnen vormen waarop ze louter verwachten later geoordeeld te worden, zelfs zonder een formele prikkel vandaag gekoppeld.

### Verkies verhoudingen, percentages, en cohorten over ruwe tellingen

Een ruwe telling zoals "gesloten tickets" is manipuleerbaar door meer te doen van iets laagwaardigs. Een verhouding zoals "percentage tickets opgelost bij eerste contact" beloont het onderliggende gedrag in plaats van het volume. Een **cohort**, een groep gedefinieerd door een gedeeld startpunt zoals alle deployments in een gegeven week, voorkomt dat een slechte recente trend zich verschuilt binnen een vleiend langetermijngeheel. Waar je ook kiest tussen een telling en een percentage dat hetzelfde onderliggende gedrag vastlegt, kies het percentage.

### Paar elke prikkel-gekoppelde metriek met een beschermmetriek

Een **beschermmetriek** is een gepaarde tegenmetriek die niet mag verslechteren terwijl de primaire metriek verbetert. Deploymentfrequentie paart met wijzigingsfoutpercentage; doorlooptijd paart met ontsnapte-fouten-percentage; de verwerkingstijd van een supportteam paart met klanttevredenheid. De beschermmetriek is wat goedkope manipulatie zichtbaar duur maakt: een team dat het prikkel-gekoppelde cijfer verbetert door de beschermmetriek te verslechteren wordt gevangen door de paring, niet door geluk. Ontwerp de beschermmetriek op hetzelfde moment als de primaire metriek, nooit als een nagedachte zodra manipulatie al ontdekt is.

### Let op de vier klassieke manipulatiepatronen

Vervorming onder Goodharts wet valt doorgaans in een klein aantal herkenbare vormen. **Drempelmanipulatie** optimaliseert precies tot een doel en stopt (een 95%-testdekkingsdoel produceert triviale tests om precies 95% te bereiken, geen echte dekking). **Definitiemanipulatie** verandert wat telt in plaats van wat gebeurt (het herdefiniëren van "opgelost" om moeilijke gevallen uit te sluiten). **Timingmanipulatie** verschuift wanneer werk wordt geregistreerd in plaats van wanneer het plaatsvond (deployments bundelen net voor een rapportagevenster sluit). **Substitutiemanipulatie** levert de letter van de metriek terwijl zijn intentie wordt verlaten (één echte wijziging splitsen in vele triviale om deploymentfrequentie op te blazen). Deze patronen expliciet benoemen aan je team maakt ze veel makkelijker te herkennen wanneer ze opduiken in je eigen cijfers.

### Scheid meting van beloning waar je kan

De sterkste beschermmetriek van allemaal is structureel: ontkoppel de metriek van individuele beloning. Een metriek puur gebruikt om een systeem te begrijpen, zonder dat iemands loon, beoordeling, of aanzien afhangt van zijn richting, krijgt veel zwakkere manipulatiedruk dan een gekoppeld aan een evaluatie. Dit is waarom onderwerp 1.1's diagnostisch-versus-evaluatief-onderscheid zo belangrijk is in de praktijk: een metriek diagnostisch houden is vaak goedkoper en effectiever dan welke hoeveelheid beschermmetriek-engineering ook achteraf toegepast.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Ruwe tellingen | Simpel te berekenen en uit te leggen | Sterk manipuleerbaar door volume |
| Verhoudingen en percentages | Belonen het juiste gedrag, weerstaan volumemanipulatie | Kunnen een krimpend-noemer-probleem verbergen |
| Beschermmetriek-paring | Maakt goedkope manipulatie zichtbaar duur | Verdubbelt de te definiëren, bezitten, en onderhouden metrieken |
| Alleen-diagnostisch (geen individuele beloning) | Laagste manipulatiedruk van elke optie | Zwakkere directe motivatielever voor leiderschap om te trekken |
| Zwaar prikkel-gekoppelde metrieken | Sterke, snelle gedragsrespons | Hoog vervormingsrisico, vaak binnen één rapportagecyclus |

De centrale spanning is **motivatiekracht versus vervormingsrisico**. De metrieken die gedrag het snelst bewegen, een cijfer direct aan beloning koppelen, zijn precies degene die het meest blootgesteld zijn aan Goodharts wet. Los de spanning op door sterke prikkels te reserveren voor uitkomstmetrieken die echt moeilijk goedkoop te manipuleren zijn, en door alles wat je prikkelt te paren met een beschermmetriek ontworpen op hetzelfde moment, niet erop geschroefd nadat de eerste vervorming verschijnt.

## Vragen om met je team te bespreken

1. **Voor elke metriek waarvan iemands beloning afhangt, wat is de goedkoopste manier om hem te manipuleren, en zouden we die manipulatie vandaag vangen?** Ga zitten en ontwerp bewust de exploit voor elk prikkel-gekoppeld cijfer op je dashboard: hoe zou een rationeel, goedbedoelend team dit er goed uit laten zien zonder het onderliggende werk te doen? Als je geen manier kunt benoemen waarop je die manipulatie zou vangen, ben je nog niet klaar om de metriek te prikkelen. Deze oefening is ongemakkelijk en dat ongemak is het punt.

2. **Welke van onze huidige metrieken zijn al afgedreven naar een van de vier manipulatiepatronen, drempel-, definitie-, timing-, of substitutiemanipulatie, zonder dat iemand het benoemde?** Vervorming kondigt zichzelf zelden aan; het verschijnt als een cijfer dat er geweldig uitziet terwijl de onderliggende klachten, incidenten, of klantfeedback een ander verhaal vertellen. Loop je dashboard door tegen elk patroon bij naam en wees eerlijk over overeenkomsten.

3. **Heeft elke prikkel-gekoppelde metriek op ons dashboard een gepaarde beschermmetriek, en werd die beschermmetriek ontworpen op hetzelfde moment als de metriek?** Een beschermmetriek alleen toegevoegd nadat manipulatie ontdekt is, is een reparatie, geen ontwerpkeuze, en komt meestal te laat aan om de eerste ronde schade aan vertrouwen te voorkomen. Audit je prikkel-gekoppelde metrieken specifiek voor deze paring.

4. **Hoe ver reist deze metriek van de persoon die zijn intentie begrijpt voordat hij de persoon bereikt wiens gedrag hij vormt?** Een metriek gebouwd door een platformteam en geconsumeerd drie managementlagen verder weg, of gepubliceerd in een openbaar rapport gelezen door mensen die de instrumentatie nooit zagen, is veel meer blootgesteld aan letter-niet-geest-manipulatie dan een die een team voor zichzelf ontwierp. Kaart die afstand voor je metrieken met de grootste gevolgen.

5. **Hebben we ooit een prikkel van een metriek verwijderd nadat we ontdekten dat hij werd gemanipuleerd, en wat kostte dat ons aan vertrouwen om te fixen?** Organisaties ontdekken Goodharts wet vaak op de harde manier, na een kwartaal of een jaar van vervormd gedrag, en de reparatie kost meer dan preventie zou hebben gekost. Breng een echt incident, als je er een hebt, en haal de les er expliciet uit in plaats van er stilletjes voorbij te gaan.

6. **Waar hebben we aangenomen dat manipulatie een persoonlijk integriteitsprobleem was in plaats van een rationele respons op een slecht ontworpen prikkel?** Individuen de schuld geven voor voorspelbaar reageren op een prikkel die je bouwde, fixt zelden iets en schaadt vertrouwen vaak verder. Herformuleer elk manipulatie-incident dat je je herinnert als een ontwerpprobleem in de metriek, geen karakterprobleem in de persoon, en vraag welk herontwerp het had voorkomen.

## Sectorperspectief

**Startup.** Met een klein team is de snelste beschermmetriek directe conversatie: iedereen kan een cijfer zien en onmiddellijk vragen "wacht, waarom sprong dat." Het echte risico is een oprichter die een metriek koppelt aan een fondsenwervingsverhaal (groei tegen elke prijs) zonder gepaarde beschermmetriek, omdat externe investeerders precies het soort afstandelijke, hoge-inzet-druk uitoefenen dat manipulatie aantrekkelijk maakt.

**Klein bedrijf.** Standaardtools leveren vaak standaarddashboards gebouwd rond tellingen (gesloten tickets, afgehandelde oproepen) omdat tellingen makkelijk te berekenen zijn. Converteer deze actief naar percentages waar de tool het toelaat, en weersta het koppelen van een enkel cijfer aan een bonus of review zonder eerst zijn beschermmetriek te identificeren.

**Groot bedrijf.** Afstand is het dominante risico: een metriek ontworpen door een platformteam voor interne diagnose wordt drie managementlagen later opgepikt en veranderd in een KPI die niemand die hem bouwde zou herkennen. Bestuur dit expliciet (onderwerp 1.4): vereis een gedocumenteerde beschermmetriek voordat een metriek wordt goedgekeurd voor gebruik in een prestatiereview of een directiescorekaart.

**Overheid.** Gepubliceerde prestatiemaatstaven krijgen de sterkste manipulatiedruk van elke categorie in dit boek, omdat een gemist doel budgettaire of politieke gevolgen kan dragen. Audit de definitie zelf op een vaste cadans, niet alleen het cijfer, omdat het klassieke publieke-sector-manipulatiepatroon stilletjes herdefiniëren is wie telt (een wachtlijst "opgelost" door te herclassificeren wie wacht) in plaats van de onderliggende dienst te verbeteren.

## Voorbeelden

**Groot bedrijf.** Een detailhandelstechnologiebedrijf stelde een doel van 99% geautomatiseerde testdekking over alle diensten, gekoppeld aan een teamniveau-kwaliteitsscore gebruikt in kwartaalreviews. Binnen twee kwartalen bereikte dekking 99%, en het incidentpercentage steeg. Een audit vond teams die triviale tests schreven, bevestigend dat een functie teruggaf zonder te werpen, puur om de dekkingstool te tevredenstellen, terwijl echte randgevaltests helemaal niet verbeterd waren. De fix verving het ruwe dekkingsdoel met een gepaarde metriek: dekking plus een mutatietestscore (onderwerp 4.2) die meet of tests daadwerkelijk geïnjecteerde fouten vangen, wat veel moeilijker goedkoop te manipuleren is.

**Overheid.** Een staatsagentschap voor werkloosheidsverzekering werd gemeten op mediaan dagen tot eerste betaling, gepubliceerd aan zijn parlement. Onder druk om een doel te raken, begon één regionaal kantoor stilletjes moeilijker-te-verwerken claims te herclassificeren als "incompleet" en ze uit te sluiten van de noemer, wat de gepubliceerde mediaan uitstekend liet lijken terwijl sommige aanvragers veel langer wachtten dan het rapport suggereerde. Een onafhankelijke audit van de definitie zelf, niet alleen het cijfer, ontdekte de praktijk. De fix van het agentschap vroor de definitie, publiceerde de uitsluitingscriteria publiekelijk, en voegde een beschermmetriek toe die het incomplete-claims-percentage zelf bijhoudt, zodat een piek in herclassificatie nu zichtbaar zou zijn in plaats van verborgen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van Goodharts wet serieus nemen is vermeden herwerk. Een organisatie die beschermmetrieken van tevoren ontwerpt, besteedt een bescheiden hoeveelheid extra inspanning aan het definiëren van een tweede metriek naast de eerste. Een organisatie die deze stap overslaat, besteedt vaak een heel kwartaal of meer aan verkeerd gerichte inspanning voordat de vervorming aan de oppervlakte komt, gevolgd door de veel moeilijkere kosten van het terugdraaien van gemanipuleerd gedrag en het herbouwen van vertrouwen in het cijfer achteraf. Het detailhandelsvoorbeeld hierboven is typisch: goedkoop om te voorkomen, duur om te repareren.

De totale eigendomskosten van een beschermmetriek zijn niet gratis: het is een tweede metriek om te definiëren, te instrumenteren, en te reviewen. Maar die kosten zijn klein en vast vergeleken met de onbegrensde kosten van een prikkel die stilletjes het verkeerde gedrag beloont voor maanden voordat iemand het merkt. Elk onderwerp na dit een verrekent die afweging, wat waarom beschermmetriek-paring verschijnt als een aanbeveling door de rest van dit boek in plaats van alleen hier.

## Antipatronen en valkuilen

- **Een prikkel-gekoppelde metriek publiceren zonder beschermmetriek:** de enkelvoudig meest voorkomende grondoorzaak van een vervormd dashboard in dit boek.
- **Manipulatie behandelen als een persoonlijk falen:** geeft individuen de schuld voor een rationele respons op een slecht ontworpen prikkel, en fixt niets.
- **Het cijfer auditen maar nooit de definitie:** het klassieke publieke-sector-faalpatroon, waar de metriek er fijn uitziet omdat wie telt stilletjes veranderde.
- **Aannemen dat een metriek die werkte als diagnostisch veilig zal blijven zodra hij evaluatief wordt:** de blootstelling verandert op het moment dat beloning koppelt, zelfs als niets anders aan de metriek verandert.
- **De beschermmetriek alleen ontwerpen na het eerste manipulatie-incident:** een reparatie die aankomt nadat de schade aan vertrouwen al gedaan is.
- **Afstand negeren:** aannemen dat een metriek gelezen zal worden zoals zijn ontwerper bedoelde zodra hij meerdere managementlagen of een openbaar rapport ver van hen reist.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Metrieken worden ad hoc geprikkeld, zonder overweging van manipulatierisico, en vervorming wordt alleen ontdekt nadat kwaliteit of vertrouwen zichtbaar lijdt.
- **Niveau 2, Ontwikkelen:** Sommige teams herkennen manipulatie achteraf en passen informeel aan, maar er is geen consistente praktijk van beschermmetrieken van tevoren ontwerpen.
- **Niveau 3, Standaardiseren:** Elke prikkel-gekoppelde metriek organisatiebreed vereist een gedocumenteerde beschermmetriek voor goedkeuring, en de vier manipulatiepatronen worden benoemd en onderwezen.
- **Niveau 4, Beheren:** Manipulatierisico wordt actief gemonitord: definities worden periodiek geaudit, beschermmetriekparen worden beoordeeld op of ze nog steeds vervorming vangen, en manipulatie-incidenten worden bijgehouden als een metriek in hun eigen recht.
- **Niveau 5, Orkestreren:** De organisatie behandelt Goodharts wet als een staande ontwerpbeperking, automatisch beoordeeld wanneer een nieuwe metriek wordt voorgesteld, en kan wijzen naar specifieke herontwerpen die vervorming voorkwamen voordat het gebeurde in plaats van alleen erna.

## Discussie-ideeën

1. Wat is de metriek met de grootste gevolgen in onze organisatie die vandaag geen beschermmetriek heeft?
2. Hebben we ooit een cijfer zien verbeteren terwijl de onderliggende werkelijkheid erger werd?
3. Wie zou het merken als een definitie achter een van onze publieke metrieken stilletjes veranderde?
4. Welk van de vier manipulatiepatronen (drempel, definitie, timing, substitutie) is onze organisatie het meest geneigd?
5. Wat zou het ons kosten, in vertrouwen, om te ontdekken dat een belangrijke metriek een jaar gemanipuleerd was?

## Belangrijkste inzichten

- **Goodharts wet:** een maatstaf die een doel wordt, stopt een goede maatstaf te zijn, en dit regeert elke metriek in dit boek.
- Manipulatie is een **rationele respons op prikkel**, geen karakterfout; fix het prikkelontwerp, niet de mensen.
- Verkies **verhoudingen, percentages, en cohorten** over ruwe tellingen waar ze hetzelfde gedrag vastleggen.
- Elke prikkel-gekoppelde metriek heeft een **beschermmetriek** nodig, ontworpen op hetzelfde moment, niet toegevoegd nadat vervorming ontdekt is.
- Let op de vier manipulatiepatronen bij naam: **drempel-, definitie-, timing-, en substitutiemanipulatie**.
- **Afstand** tussen een metriekontwerper en de persoon wiens gedrag hij vormt verhoogt vervormingsrisico; houd die afstand kort waar je kan.

## Bronnen en verder lezen

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience" (1975): de oorsprong van Goodharts wet.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University System" (1997): de breed geciteerde herformulering, "wanneer een maatstaf een doel wordt, stopt hij een goede maatstaf te zijn."
- *Seeing Like a State*, door James C. Scott (hoe leesbare metrieken de systemen vervormen die ze meten, op de schaal van naties).
- *The Tyranny of Metrics*, door Jerry Z. Muller (een boeklange behandeling van metriekfixatie en zijn kosten over vele beroepen).
- *Lean Analytics*, door Alistair Croll en Benjamin Yoskovitz (ijdelheid versus handelbare metrieken, en beschermmetriek-ontwerp in een startupcontext).
- U.S. Government Accountability Office (GAO)-richtlijnen over prestatiemeting en de GPRA Modernization Act: publieke-sector-prestatierapportage en manipulatierisico.
