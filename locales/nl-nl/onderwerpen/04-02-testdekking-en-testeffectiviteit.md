# 4.2 Testdekking en testeffectiviteit

## Overzicht en motivatie

**[Testdekking](https://en.wikipedia.org/wiki/Code_coverage)** meet het percentage code uitgevoerd door een testsuite: regeldekking, vertakkingsdekking, of de striktere paddekking. Het is een van de meest bijgehouden metrieken in dit hele boek, goedkoop te berekenen, makkelijk te visualiseren als een enkel percentage, en bijgevolg een van de meest frequent gemanipuleerde, precies op de manier die hoofdstuk 1.2 voorspelt voor elke metriek die een doel wordt. Een testsuite kan hoge dekking bereiken terwijl het bijna niets betekenisvols verifieert, omdat dekking meet of code uitgevoerd werd gedurende een testrun, niet of de test daadwerkelijk checkte of de code zich correct gedroeg.

Dit gat tussen dekking en echte testeffectiviteit is geen kleine voetnoot; het is de centrale zorg van dit hoofdstuk. Een test die een functie aanroept en niets beweert over zijn resultaat verhoogt dekking identiek aan een test die grondig het gedrag van de functie verifieert over randgevallen. De fix die dit hoofdstuk aanbeveelt, **mutatietesten**, dat doelbewust kleine, artificiële fouten introduceert in de code en checkt of de testsuite ze daadwerkelijk vangt, is het directe antwoord op dit gat, en dit hoofdstuk behandelt het als dekking's noodzakelijke complement, geen optionele extra.

Voor grote teams worden dekkingsdoelen vaak organisatiebreed geadopteerd als een kwaliteitspoort, precies het soort gestimuleerde, hoog-zichtbare metriek waar hoofdstuk 1.2 tegen waarschuwt het meest blootgesteld te zijn aan manipulatie. Grote bedrijven en overheidsorganisaties die een blanket-dekkingspercentagevereiste stellen zonder een gekoppelde effectiviteitscheck stimuleren, in effect, precies het drempelmanipulatiepatroon dat dit boek beschrijft: triviale tests geschreven puur om een cijfer te bereiken, zonder overeenkomstige verbetering in echte defectpreventie.

## Kernprincipes

- **Dekking meet uitvoering, niet verificatie.** Een regel die door een test gedraaid wordt zegt niets over of de test iets betekenisvols erover checkte.
- **Een dekkingsdoel zonder een effectiviteitscheck is een schoolvoorbeeld van een Goodharts-wet-opzet** (hoofdstuk 1.2): het cijfer verbetert terwijl echte kwaliteit niet doet.
- **Mutatietesten is dekking's noodzakelijke complement**, geen vervanging; gebruik beide samen.
- **Dekking is nuttiger als een vloer dan als een doel om te maximaliseren.** Een laag cijfer onthult echt ongeteste code; 100% najagen produceert vaak afnemend of negatief rendement.
- **Kritiek-pad-dekking doet er meer toe dan uniforme, blanket-dekking.** Niet alle code draagt gelijk risico als het faalt.

## Aanbevelingen

### Gebruik dekking om ongeteste code te vinden, niet als een doel om te maximaliseren

Behandel een dekkingsrapport primair als een kaart van wat helemaal geen test heeft, wat echt nuttige informatie is, in plaats van als een score om richting 100% te duwen. Code met nul dekking is een echt gat de moeite waard om te sluiten; de marginale waarde van dekking duwen van 85% naar 95% is meestal veel lager en vaak niet de inspanning waard die het vergt, vooral als die inspanning laag-waarde-tests produceert alleen om het hogere cijfer te bereiken.

### Koppel elk dekkingsdoel met mutatietesten

**Mutatietesten**-gereedschappen introduceren automatisch kleine fouten in je code, een vergelijkingsoperator omdraaien, een grensvoorwaarde veranderen, en draaien dan je testsuite tegen elke gemuteerde versie. Een testsuite die de meeste mutanten "doodt" (faalt tegen) verifieert echt gedrag; een testsuite met hoge regeldekking maar een laag mutatiedoodtempo voert code uit zonder het betekenisvol te checken. Deze koppeling is de enkele meest effectieve beschermmetriek tegen dekkingsdoel-manipulatie, en dit boek beveelt het aan als standaardpraktijk, geen geavanceerde of optionele techniek.

### Prioriteer dekking en mutatietesten op kritieke paden eerst

Niet alle code draagt gelijk risico. Een betalingsverwerkingspad, een authenticatiecheck, of een datamigratiescript verdient veel rigoureuzer testen dan een zelden gebruikt administratief rapport. In plaats van uniforme dekking over te hele codebase najagen, identificeer je hoogste-risico-, hoogste-gevolg-codepaden en concentreer zowel dekking- als mutatietesteninspanning daar eerst, lagere dekking op echt laag-risico-code accepterend als een doelbewuste, geïnformeerde afweging in plaats van een oversight.

### Let op de specifieke dekkingmanipulatiepatronen

De meest gewone manieren waarop dekking gemanipuleerd wordt, eenmaal het een doel wordt, omvatten: tests die een functie aanroepen maar niets betekenisvols beweren over het resultaat (de drempelmanipulatie van hoofdstuk 1.2 toegepast op deze metriek), falende tests uitschakelen of verwijderen in plaats van het onderliggende probleem te fixen, en moeilijk-te-testen code volledig uitsluiten van dekkingsberekening in plaats van aan te pakken waarom het moeilijk te testen is. Audit periodiek een steekproef van tests direct, hun daadwerkelijke beweringen lezend, in plaats van het dekkingspercentage alleen te vertrouwen.

### Stel een dekkingsvloer in, geen dekkingsplafond, in je CI-pijplijn

Configureer je buildpijplijn om te falen als dekking onder een overeengekomen vloer valt voor nieuwe code, regressie voorkomend, in plaats van elke wijziging te vereisen het algehele cijfer hoger te duwen. Dit onderscheid doet ertoe: een vloer beschermt tegen terugglijden zonder dezelfde onverzettelijke opwaartse druk te creëren die laag-waarde-tests produceert geschreven puur om het cijfer verder op te krikken.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Dekkingspercentage alleen | Goedkoop, simpel, breed ondersteund door tooling | Makkelijk te manipuleren; meet uitvoering, niet verificatie |
| Dekking plus mutatietesten | Verifieert dat tests daadwerkelijk gedrag checken, weerstaat manipulatie | Rekenkundig duurder; vereist toolinginvestering |
| Uniform dekkingsdoel over de codebase | Simpel te stellen en af te dwingen | Verspilt inspanning op laag-risico-code; onderinvesteert relatief aan risico elders |
| Risico-gebaseerde, kritiek-pad-eerst-dekking | Concentreert inspanning waar het het meeste doet ertoe | Vereist oordeel om echt kritieke paden correct te identificeren |

De centrale spanning is **simpliciteit versus eerlijkheid**. Een enkel dekkingspercentage is makkelijk te rapporteren en makkelijk te stellen als een doel, maar die simpliciteit is precies wat het zo makkelijk maakt te manipuleren eenmaal het een gestimuleerd cijfer wordt. Los de spanning op door de toegevoegde complexiteit van mutatietesten en risico-gebaseerde prioritering te accepteren als de kost van een eerlijk signaal, en door expliciet te communiceren aan je team waarom een lager algeheel dekkingscijfer, correct geconcentreerd op kritieke paden en gesteund door een sterk mutatiedoodtempo, waardevoller is dan een hoger, uniformer verdeeld maar minder effectief geverifieerd een.

## Vragen om met je team te bespreken

1. **Wat is ons mutatiedoodtempo op onze hoogste-risico-codepaden, en hoe vergelijkt het zich met ons dekkingspercentage op dezelfde code?** Een groot gat tussen een hoog dekkingscijfer en een laag mutatiedoodtempo is het duidelijkst mogelijke teken dat dekking alleen je niet vertelt wat je denkt dat het je vertelt.

2. **Hebben we ooit een test geschreven primair om een dekkingscijfer te verhogen, met weinig echte gedachte over wat het zou moeten verifiëren?** Wees hier eerlijk; dit gebeurt vaker dan teams graag toegeven, vooral onder deadlinedruk wanneer een dekkingspoort een merge blokkeert.

3. **Is onze dekkinginspanning geconcentreerd op onze hoogste-risico-codepaden, of verspreid uniform ongeacht gevolg als die code faalt?** Karteer je huidige dekkingsverdeling tegen een eerlijke risicobeoordeling van je codebase en zoek naar de mismatch.

4. **Hebben we ooit een falende test uitgeschakeld of verwijderd in plaats van het onderliggende probleem te fixen dat het onthulde?** Dit is een van de meest schadelijke vormen van dekkingmanipulatie, omdat het actief echte bescherming verwijdert terwijl het gerapporteerde dekkingscijfer nauwelijks beweegt.

5. **Dwingt onze CI-pijplijn een dekkingsvloer af voor nieuwe code, of duwt het richting een eeuwig hoger plafond ongeacht afnemend rendement?** Bespreek of je huidige poortontwerp de juiste prikkel creëert, bescherming tegen regressie, of de verkeerde, onverzettelijke opwaartse druk die laag-waarde-testopvulling beloont.

6. **Welke code in onze codebase is uitgesloten van dekkingsberekening, en is die uitsluiting gerechtvaardigd of verhult het een echt testgat?** Review je daadwerkelijke uitsluitingsconfiguratie; het is gewoon dat deze lijst stilletjes groeit over tijd zonder dat iemand herbezoekt of elke uitsluiting nog gerechtvaardigd is.

## Sectorperspectief

**Startup.** Formele dekkingsdoelen zijn vaak onnodig zo vroeg; focus testschrijfinspanning direct op je riskantste, meest bedrijfskritieke codepaden (meestal betaling- of kernworkflow-logica) in plaats van een blanket-percentage najagen over een codebase die nog steeds snel verandert en substantieel herschreven zou kunnen worden binnenkort toch.

**Klein bedrijf.** De meeste CI-platforms rapporteren dekking automatisch tegen minimale setupkost; gebruik het primair om volledig ongeteste kritieke code te vinden in plaats van een specifiek doelpercentage na te jagen, en overweeg mutatietesten alleen eenmaal je de ingenieurscapaciteit hebt om te handelen op wat het onthult.

**Groot bedrijf.** Blanket, organisatiebrede dekkingsdoelen zijn een gewone en betekenisvolle fout op deze schaal, omdat ze precies de manipulatie stimuleren die dit hoofdstuk beschrijft over dozijnen teams gelijktijdig. Stel risico-gebaseerde dekkingsverwachtingen vast die variëren per dienstkriticiteit, en investeer in mutatietest-infrastructuur specifiek voor je hoogste-risico-systemen.

**Overheid.** Dekkingsvereisten verschijnen soms in aanbestedings- of compliancedocumentatie als een botte, makkelijk gespecificeerde proxy voor kwaliteitsborging. Waar mogelijk, koppel elk contractueel vereist dekkingspercentage met een mutatietest- of defect-gebaseerde effectiviteitsvereiste, zodat de contractuele prikkel niet per ongeluk precies de laag-waarde-testopvulling beloont waar dit hoofdstuk tegen waarschuwt.

## Voorbeelden

**Groot bedrijf.** Het leiderschap van een e-commerceplatform had een bedrijfsbrede 95%-dekkingsvereiste gesteld voor alle nieuwe code, afgedwongen als een harde CI-poort. Een audit twee jaar later, getriggerd door een golf productiedefecten in zogenaamd goed-geteste code, vond een mutatiedoodtempo onder 40% over veel van de codebase: teams hadden tests geschreven die codepaden uitvoerden zonder betekenisvol te beweren over hun gedrag, puur om de poort te bevredigen onder deadlinedruk. Het bedrijf verving de blanket-dekkingsvereiste met een risico-gelaagd beleid: strikte dekking plus verplicht mutatietesten boven een 80%-doodtempo-drempel voor betaling- en authenticatiecode, en een veel lichtere dekkingsvloer voor laag-risico interne tooling, wat zowel verspilde testinspanning verminderde als defecttempo's meetbaar verbeterde in de echt kritieke paden.

**Overheid.** Het uitkeringsgeschiktheidssysteem van een volksgezondheidsinstantie was contractueel vereist om 90% testdekking te onderhouden onder zijn ontwikkelleveranciersovereenkomst. Een post-incidentreview, na een significant geschiktheidsberekeningsdefect dat uitgeleverd was ondanks dat de dekkingsvereiste gehaald werd, vond dat de specifieke verantwoordelijke functie zijn dekking volledig bereikt had via tests die de functie aanriepen met geldige inputs maar nooit grensvoorwaarden of ongeldige inputs testten, precies waar het defect optrad. Het herziene leveranciercontract van de instantie vereist nu een gedocumenteerde mutatietestscore naast dekking voor elke geschiktheidsberekeningscode, het specifieke gat sluitend dat compliant maar ineffectief testen had toegestaan om het contract te bevredigen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van dekking koppelen met mutatietesten is het gat vangen tussen schijnbare en daadwerkelijke testkwaliteit voordat het een productiedefect kost. Het e-commercevoorbeeld hierboven toont het patroon duidelijk: een dekkingsvereiste alleen had een vals gevoel van veiligheid geproduceerd dat een golf defecten uiteindelijk blootlegde tegen veel grotere kost dan de mutatietesteninvestering die het gat eerder gevangen zou hebben.

De totale eigendomskosten omvatten de rekenkundige kost van mutatietesten, dat duurder is om te draaien dan simpele dekkingsinstrumentatie en daarom meestal gereserveerd wordt voor kritiek-pad-code in plaats van een hele codebase, plus de ingenieurstijd om resultaten te interpreteren en erop te handelen. Die kost is gerechtvaardigd specifiek voor de hoogste-risico-code, waar de kost van een ongedetecteerd gat in testeffectiviteit het hoogst is.

## Antipatronen en valkuilen

- **Dekkingspercentage behandelen als een direct kwaliteitsoordeel:** het meet uitvoering, niet verificatie.
- **Tests schrijven primair om een dekkingspoort te bevredigen:** produceert precies het laag-waarde-, drempelmanipulatiepatroon waar hoofdstuk 1.2 tegen waarschuwt.
- **Falende tests uitschakelen of verwijderen in plaats van het onderliggende probleem te fixen:** verwijdert echte bescherming terwijl het nauwelijks het gerapporteerde cijfer beïnvloedt.
- **Een uniform dekkingsdoel toepassen ongeacht coderisico:** verspilt inspanning op laag-risico-code en onderinvesteert in echt kritieke paden.
- **Een uitsluitingslijst stilletjes laten groeien over tijd:** verhult echte testgaten achter een technisch accuraat maar misleidend dekkingscijfer.
- **Een dekkingsplafond najagen in plaats van een dekkingsvloer:** creëert onverzettelijke opwaartse druk die testopvulling beloont boven echte verificatie.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Dekking wordt niet gemeten, of wordt inconsistent gemeten zonder vloer, doel, of effectiviteitscheck.
- **Niveau 2, Ontwikkelen:** Een dekkingsdoel bestaat en wordt bijgehouden, maar geen mutatietesten of risico-gebaseerde prioritering informeert hoe inspanning toegewezen wordt.
- **Niveau 3, Standaardiseren:** Dekkingsvloeren worden consistent afgedwongen in CI, met risico-gebaseerde prioritering die stuurt waar dekkinginspanning concentreert.
- **Niveau 4, Beheren:** Mutatietesten draait op kritiek-pad-code, met een bijgehouden doodtempo-drempel die gehaald moet worden naast dekking, en uitsluitingslijsten worden periodiek geaudit.
- **Niveau 5, Orkestreren:** De organisatie kan wijzen naar specifieke defectreducties getraceerd naar mutatietest-geïnformeerde prioritering, en dekking- en effectiviteitsdata samen informeren direct testinvesteringsbeslissingen.

## Discussie-ideeën

1. Wat is ons mutatiedoodtempo op onze enkele meest kritieke codepad, en weten we het überhaupt?
2. Hebben we ooit een laag-waarde-test geschreven puur om een dekkingspoort te bevredigen?
3. Is onze huidige dekkinginspanning geconcentreerd waar risico het hoogst is, of uniform verspreid?
4. Welke code is momenteel uitgesloten van dekkingsberekening, en is die uitsluiting nog gerechtvaardigd?
5. Zou een mutatietesteninvestering op ons hoogste-risico-systeem zijn rekenkundige kost waard zijn?

## Belangrijkste inzichten

- Testdekking meet **uitvoering, niet verificatie**; een gedekte regel zegt niets over of het betekenisvol gecheckt werd.
- Koppel dekking met **mutatietesten** om te verifiëren dat tests daadwerkelijk echte fouten vangen, niet alleen dat ze de code draaien.
- Concentreer testinspanning op **kritieke, hoog-risico-paden** in plaats van uniforme dekking over een hele codebase na te jagen.
- Gebruik dekking als een **vloer om tegen regressie te beschermen**, geen plafond om onverzettelijk te maximaliseren.
- Let op de specifieke dekkingmanipulatiepatronen: **laag-waarde-tests, uitgeschakelde falende tests, en stilletjes groeiende uitsluitingslijsten**.

## Bronnen en verder lezen

- *Working Effectively with Legacy Code*, door Michael Feathers (testdekkingsstrategie voor bestaande, moeilijk-te-testen codebases).
- Jia, Yue, en Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): een uitgebreid overzicht van mutatietesttechnieken en hun effectiviteit.
- *xUnit Test Patterns*, door Gerard Meszaros (testontwerppatronen relevant voor het schrijven van echt effectieve, niet alleen dekking-bevredigende, tests).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de relatie tussen testpraktijken en leveringsprestatie).
