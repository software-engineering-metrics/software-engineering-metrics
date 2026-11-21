# 2.8 Lean-waardestroommetrieken

## Overzicht en motivatie

Elke metriek die dit deel tot nu toe behandeld heeft, flowtijd, flowbelasting, cyclustijd, bezettingsgraad, stamt af van een veel oudere gereedschapskist: de vijf basismetingen van klassieke **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)**-waardestroomkartering, ontwikkeld bij Toyota en veralgemeend over productie, operaties, en dienstverlening lang voordat software ze adopteerde. **Doorlooptijd (LT)** is de totale kloktijd van wanneer werk aangevraagd wordt tot wanneer het geleverd wordt. **Verwerkingstijd (PT)** is de daadwerkelijke actieve tijd besteed aan het werken op een enkele eenheid. **Cyclustijd (CT)** is de gemiddelde tijd vereist om een enkel knooppunt of fase binnen de stroom af te ronden. **Percentage volledig en juist (%V/J)** is het percentage eenheden dat een stroomafwaarts team kan verwerken zonder herwerk nodig te hebben. **Takttijd** is de maximaal acceptabele tijd om een eenheid af te ronden om netjes overeen te komen met klantvraag.

Dit onderwerp bestaat omdat softwareontwikkeling deze ideeën niet uitvond, het leende ze, en het lenen hergebruikte soms dezelfde woorden voor iets andere dingen. De eigen cyclustijd van dit boek (onderwerp 2.6) meet specifiek de ingenieursstadia van een wijziging, coderen, review, testen, deployment, terwijl Leans klassieke CT de meer algemene "gemiddelde tijd per knooppunt" is toegepast op elk proces. Flowtijd (onderwerp 2.4) is de naam van dit boek voor wat Lean doorlooptijd noemt. Deze mapping kennen doet ertoe omdat een lezer die komt van een Lean Six Sigma-achtergrond, gewoon in productie, logistiek, gezondheidszorg, en overheidsoperaties, deze exacte termen zal gebruiken met hun originele betekenissen, en een softwareteam dat niet dezelfde taal spreekt verspeelt een makkelijke, bewijsgebaseerde brug naar collega's buiten ingenieurswerk.

Voor grote teams is %V/J de meest onderbenutte metriek van dit onderwerp. Het vangt iets wat de flowmetrieken in onderwerpen 2.3 en 2.4 niet doen: hoeveel van wat een stadium produceert daadwerkelijk bruikbaar is door het volgende stadium zonder teruggestuurd te worden. Opgerold over een meerstadia-waardestroom, een concept dat productie **opgerolde doorvoeropbrengst** noemt, onthult %V/J hoe herwerk onzichtbaar samengroeit over overdrachten, een patroon waar grote bedrijven met lange, meerteams-pijplijnen en overheidsprogramma's met meerdere goedkeuringspoorten bijzonder vatbaar voor zijn en zelden direct meten.

## Kernprincipes

- **Deze vijf metrieken gaan software vooraf en veralgemenen voorbij het.** Ze zijn de gemeenschappelijke woordenschat die een belanghebbende getraind in Lean Six Sigma, gewoon in grote bedrijven en overheidsoperaties, al vloeiend spreekt.
- **Terminologiebotsing is echt en de moeite waard om expliciet te benoemen.** De cyclustijd van dit boek (onderwerp 2.6) en Leans klassieke CT zijn verwant maar niet identiek; documenteer de mapping zodat functieoverschrijdende gesprekken niet stilletjes langs elkaar heen praten.
- **%V/J moet opgerold worden over elk stadium, niet eenmalig gemeten aan het einde.** Herwerk geïntroduceerd vroeg in een stroom en laat gevangen is onzichtbaar voor een metriek alleen gemeten bij finale levering.
- **Takttijd herkadert capaciteitsplanning rond vraag, niet inspanning.** De vraag verschuift van "hoe snel kunnen we gaan" naar "hoe snel moeten we gaan," wat direct verbindt met bezettingsgraad (onderwerp 2.7) en flowbelasting (onderwerp 2.4).
- **Dit zijn diagnostische metrieken, geen vanity-metrieken.** Elk bestaat om een specifieke operationele vraag te beantwoorden, niet om een indrukwekkend cijfer voor een dashboard te produceren.

## Aanbevelingen

### Karteer je waardestroom met alle vijf Lean-metrieken voordat je een softwarespecifiek framework adopteert

Bereken doorlooptijd, verwerkingstijd, cyclustijd, %V/J, en takttijd voor een representatieve steekproef van werk dat door je waardestroom beweegt voordat je de eigen metrieken van het Flow Framework (onderwerpen 2.3 en 2.4) erboven stapelt. Dit geeft je een basislijn die elke belanghebbende die Lean Six Sigma leest onmiddellijk kan begrijpen, en het brengt vaak dezelfde wachttijd-dominantie aan de oppervlakte die onderwerp 2.5 beschrijft, uitgedrukt in een woordenschat die elk bepaald softwareframework vooraf gaat en overleeft.

### Rol percentage volledig en juist multiplicatief op over elk stadium

Meet %V/J bij elk stadium afzonderlijk, vermenigvuldig dan de stadiumniveau-percentages samen om de opgerolde doorvoeropbrengst van de waardestroom te krijgen. Drie stadia die elk afzonderlijk op 90% volledig en juist draaien groeien samen naar ruwweg 73% totaal, een cijfer dat niets lijkt op enig enkel stadium's eigen rapport en meestal het eerlijkere is. Deze enkele berekening is de snelste manier om te onthullen hoeveel herwerk een meerstadia-pijplijn echt absorbeert.

### Stel takttijd expliciet vast vanuit echte klantvraagdata, niet vanuit capaciteit

Bereken takttijd als beschikbare werktijd gedeeld door klantvraag over die periode, doelbewust onafhankelijk van hoe snel je team toevallig vandaag kan werken. Vergelijk je gemeten verwerkingstijd en cyclustijd tegen dit cijfer: een verwerkingstijd comfortabel onder takttijd geeft gezonde speelruimte aan, terwijl een cyclustijd die takttijd overschrijdt concreet, gekwantificeerd bewijs is van een capaciteitstekort, niet alleen een gevoel dat dingen achterlopen.

### Documenteer de mapping tussen Lean-termen en de eigen woordenschat van dit boek

Waar je organisatie al een Lean Six Sigma-programma draait buiten software, of waar ingenieurswerk rapporteert aan leiderschap dat die woordenschat vloeiend spreekt, schrijf de mapping expliciet op in je metriekcharter (onderwerp 1.4): de flowtijd van dit boek is Leans doorlooptijd, de cyclustijd van dit boek (onderwerp 2.6) is een specifieke toepassing van Leans meer algemene CT, en de actieve tijd van dit boek (onderwerp 2.5) is Leans verwerkingstijd. Dit enkele document voorkomt een terugkerend, laagwaardig argument over wiens cijfers "echt" zijn.

### Gebruik %V/J als een beschermmetriek naast flowsnelheid, geen vervanging ervoor

Koppel opgerolde doorvoeropbrengst met flowsnelheid (onderwerp 2.3) op dezelfde manier als dit boek elke snelheidsmetriek koppelt met een stabiliteitsbeschermmetriek. Een stijgend itemaantal met een dalende opgerolde %V/J betekent dat de waardestroom meer eenheden levert die steeds meer herwerk nodig hebben later, precies het soort snelheid-zonder-kwaliteit-patroon waar onderwerp 1.2 elke metriekfamilie tegen waarschuwt zich te beschermen.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Alleen klassieke Lean-metrieken (LT, PT, CT, %V/J, takttijd) | Universele woordenschat; werkt over software- en niet-software-teams gelijk | Niet softwarespecifiek; vereist vertaling voor ingenieursspecifieke stadia |
| Alleen Flow Framework-metrieken (onderwerpen 2.3, 2.4) | Specifiek gebouwd voor software-waardestromen en itemtype-zichtbaarheid | Onbekend voor Lean Six Sigma-getrainde belanghebbenden buiten ingenieurswerk |
| Beide, met een expliciet gedocumenteerde mapping | Spreekt beide woordenschatten; sterkste functieoverschrijdende brug | Vereist de voorafgaande discipline om de mapping op te schrijven en actueel te houden |
| %V/J alleen gemeten bij finale levering | Simpel, één cijfer | Verhult herwerk geïntroduceerd en gevangen eerder in de stroom |

De centrale spanning is **universaliteit versus specificiteit**. Klassieke Lean-metrieken zijn direct leesbaar voor iedereen met productie-, operaties-, of Six Sigma-ervaring, maar ze waren niet ontworpen met softwares specifieke stadia, codereview, geautomatiseerd testen, deploymentgoedkeuring, in gedachten. Los de spanning op door de Lean-metrieken te gebruiken als de gedeelde basiswoordenschat voor functieoverschrijdende en bestuurlijke gesprekken, en de eigen metrieken van het Flow Framework (onderwerpen 2.3 en 2.4) voor het softwarespecifieke diagnostische werk dat ingenieursteams dag in dag uit doen.

## Vragen om met je team te bespreken

1. **Zouden we vandaag alle vijf klassieke Lean-metrieken kunnen berekenen voor onze waardestroom, of hebben we er slechts enkele van?** De meeste softwareteams hebben equivalenten van flowtijd en cyclustijd maar hebben nooit expliciet verwerkingstijd, %V/J, of takttijd berekend. Identificeer welke van de vijf echt ontbreken voordat je aanneemt dat het gat klein is.

2. **Hebben we ooit %V/J opgerold over elk stadium van onze waardestroom, of alleen gemeten bij finale levering?** Een enkele meting aan het einde van de stroom verhult precies het samengroeiende herwerk dat de opgerolde-doorvoeropbrengst-berekening van dit onderwerp ontworpen is om te onthullen. Probeer de oprolberekening met echte data.

3. **Weten we onze takttijd, berekend vanuit echte klantvraag, en hoe vergelijkt onze gemeten cyclustijd zich ermee?** De meeste teams hebben deze vergelijking nooit expliciet gemaakt, wat betekent dat capaciteitsgesprekken anekdotisch blijven in plaats van gekwantificeerd.

4. **Als een Lean Six Sigma-getrainde belanghebbende van buiten ingenieurswerk vroeg over onze cyclustijd, zouden we zeker zijn dat we hetzelfde bedoelen als zij?** De cyclustijd van dit boek (onderwerp 2.6) en Leans klassieke CT zijn verwant maar niet identiek. Bespreek of dat onderscheid ooit een echt misverstand veroorzaakt heeft in je organisatie.

5. **Is onze opgerolde doorvoeropbrengst ooit betekenisvol lager geweest dan enig enkel stadium's eigen gerapporteerde %V/J?** Als je de oprolling nooit berekend hebt, bespreek wat je zou verwachten te vinden en check het dan tegen echte data.

6. **Draait onze organisatie al een Lean- of Six Sigma-programma buiten software waarmee we zouden kunnen aansluiten in plaats van een afzonderlijke, losgekoppelde woordenschat te onderhouden?** Veel grote bedrijven en overheidsinstanties hebben deze infrastructuur al; check of ingenieurswerk er ooit daadwerkelijk mee verbonden is geweest.

## Sectorperspectief

**Startup.** Volledige Lean-waardestroomkartering is zelden de ceremonie waard op deze schaal, maar takttijd is de moeite waard om informeel te begrijpen: ruwweg weten hoe snel het team echt moet bewegen om overeen te komen met echte klantvraag, in plaats van een willekeurig intern tempo, voorkomt zowel capaciteit te vroeg overbouwen als het onderbouwen eenmaal groei aankomt.

**Klein bedrijf.** %V/J is de meest direct nuttige van de vijf metrieken hier, omdat het direct antwoordt op "hoeveel van wat we leveren moet overgedaan worden," een vraag die eigenaren en kleine teams scherp voelen zonder altijd een cijfer erbij te hebben. Volg het informeel voor je een of twee kritische processen voordat je investeert in iets uitgebreider.

**Groot bedrijf.** Hier betaalt de klassieke Lean-woordenschat zichzelf terug, omdat grote bedrijven heel vaak al een Lean Six Sigma-programma draaien in operaties, productie-aangrenzende divisies, of gedeelde diensten, en ingenieurswerk dat dezelfde taal spreekt krijgt een onmiddellijke, geloofwaardige brug naar die functies in plaats van een afzonderlijke, software-only metriekenset vanaf nul te moeten rechtvaardigen.

**Overheid.** Overheidsinstanties, vooral die met wortels in regulerende, productie-aangrenzende, of logistieke functies, hebben vaak bestaande Lean- of procesverbeteringsmandaten. Een digitale dienst's waardestroom kaderen in dezelfde klassieke termen, doorlooptijd, verwerkingstijd, %V/J, takttijd, die een instantie's procesverbeteringskantoor al gebruikt is vaak de snelste manier om echte institutionele steun te verzekeren voor een softwaremoderniseringsinspanning.

## Voorbeelden

**Groot bedrijf.** De interne softwaredivisie van een productiebedrijf had jarenlang gestreden om zijn ingenieursmetrieken serieus genomen te krijgen door een operationeel leiderschapsteam vloeiend in Lean Six Sigma vanaf de fabrieksvloer. De leveringspijplijn van de divisie herkaderen met dezelfde vijf klassieke metrieken, doorlooptijd, verwerkingstijd, cyclustijd, %V/J, en takttijd berekenen voor zijn software-waardestroom, maakte de cijfers van de divisie onmiddellijk leesbaar voor operationeel leiderschap voor de eerste keer. Een opgerolde-doorvoeropbrengst-berekening over de vier stadia van de pijplijn onthulde een daadwerkelijke %V/J van 61%, ver onder enig individueel stadium's eigen gerapporteerde cijfer, wat de bewijsbasis werd voor een herwerkverminderingsinitiatief dat operationeel leiderschap binnen hetzelfde kwartaal financierde.

**Overheid.** Het digitale-vergunningenteam van een provinciale vervoersinstantie, rapporterend aan een instantie met een langlopend Lean-procesverbeteringskantoor, had dat kantoor nooit betrokken omdat zijn eigen metrieken softwarespecifieke taal gebruikten die het kantoor niet herkende. Na de vergunningswaardestroom te vertalen naar doorlooptijd, verwerkingstijd, en %V/J, identificeerde het procesverbeteringskantoor dat de echte beperking van het team niet ingenieurssnelheid was maar een stroomafwaarts juridisch reviewstadium dat ver onder zijn eigen effectieve takttijd draaide relatief aan vergunningsvraag, een bevinding waarop het kantoor toegerust was om onmiddellijk te handelen omdat het gekaderd was in bekende termen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van het adopteren van klassieke Lean-woordenschat naast de softwarespecifieke metrieken van dit boek is een geloofwaardige, onmiddellijke brug naar procesverbeteringsexpertise en financiering die vaak al elders bestaat in een grote organisatie. Het productiebedrijfvoorbeeld hierboven, herwerkverminderingsfinanciering verzekeren binnen hetzelfde kwartaal dat herkadering de zaak leesbaar maakte, is het patroon dat de aanpak van dit onderwerp betrouwbaar produceert: het inzicht was niet nieuw, maar de woordenschat die het handelbaar maakte voor het juiste publiek was dat wel.

De totale eigendomskosten zijn laag: deze vijf metrieken vereisen geen nieuwe instrumentatie voorbij wat onderwerpen 2.4 tot en met 2.6 al verzamelen, plus een %V/J-herwerkclassificatie die meestal een simpele toevoeging is aan bestaande defect- en flowitem-tracking (onderwerp 2.2). De belangrijkste investering is vertaling, de mapping opschrijven tussen de termen van dit boek en Leans klassieke, wat zichzelf terugbetaalt de eerste keer dat het een functieoverschrijdend misverstand voorkomt.

## Antipatronen en valkuilen

- **%V/J alleen meten bij finale levering:** de manipulatievector in de kern van dit onderwerp. Een team kan een hoge finale-stadium-%V/J rapporteren terwijl eerdere stadia stilletjes herwerk produceren dat gefixt wordt voordat iemand het meet, wat de hele waardestroom gezonder laat lijken dan hij is. De beschermmetriek is %V/J multiplicatief oprollen over elk stadium, de opgerolde-doorvoeropbrengst-berekening, en periodiek elk stadium's definitie van "volledig en juist" auditen zodat het niet stilletjes kan vernauwen over tijd.
- **Aannemen dat de cyclustijd van dit boek en Leans klassieke CT exact hetzelfde betekenen:** produceert echte functieoverschrijdende verwarring wanneer de twee woordenschatten elkaar ontmoeten zonder een gedocumenteerde mapping.
- **Takttijd vaststellen vanuit huidige capaciteit in plaats van echte klantvraag:** verslaat het doel van de metriek, wat is om een gat te onthullen tussen vraag en capaciteit, niet om te bevestigen welk tempo er ook al bestaat.
- **Klassieke Lean-metrieken behandelen als verouderd eenmaal een softwarespecifiek framework geadopteerd is:** gooit een geloofwaardige, bewijsgebaseerde brug weg naar procesverbeteringsexpertise die al in de organisatie kan bestaan.
- **Een bestaand Lean Six Sigma-programma elders in de organisatie negeren:** verspeelt financiering, expertise, en institutionele geloofwaardigheid die leveringsmetrieken herkaderen in gedeelde taal zou kunnen ontsluiten.
- **%V/J rapporteren zonder het te koppelen tegen flowsnelheid:** laat een stijgend doorvoercijfer een dalend herwerktempo verhullen, hetzelfde beschermmetriekgat waar dit boek doorheen tegen waarschuwt.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Geen van de vijf klassieke Lean-metrieken wordt berekend; levering wordt besproken zonder verwijzing naar doorlooptijd, verwerkingstijd, of %V/J.
- **Niveau 2, Ontwikkelen:** Doorlooptijd en cyclustijd worden informeel bijgehouden, maar verwerkingstijd, %V/J, en takttijd worden niet berekend, en er bestaat geen mapping naar de eigen woordenschat van dit boek.
- **Niveau 3, Standaardiseren:** Alle vijf klassieke metrieken worden consistent berekend, en de mapping naar de flow- en cyclustijd-woordenschat van dit boek is gedocumenteerd in een gedeeld metriekcharter.
- **Niveau 4, Beheren:** Opgerolde doorvoeropbrengst wordt berekend over elk stadium van de waardestroom, en takttijd wordt vergeleken met gemeten cyclustijd om capaciteitsgaten expliciet te kwantificeren.
- **Niveau 5, Orkestreren:** De organisatie heeft zijn softwareleveringsmetrieken verbonden met een bestaand Lean- of Six Sigma-programma elders in het bedrijf, en kan wijzen naar specifieke investerings- of procesbeslissingen gemaakt omdat de gedeelde woordenschat een inzicht handelbaar maakte voor een niet-ingenieurspubliek.

## Discussie-ideeën

1. Zouden we vandaag doorlooptijd, verwerkingstijd, cyclustijd, %V/J, en takttijd kunnen berekenen voor onze waardestroom?
2. Wat zou onze opgerolde doorvoeropbrengst zijn als we elk stadium's %V/J met elkaar vermenigvuldigden?
3. Draait onze organisatie al een Lean- of Six Sigma-programma waarmee we ingenieursmetrieken nooit verbonden hebben?
4. Hoe vergelijkt onze gemeten cyclustijd zich met onze takttijd, berekend vanuit echte klantvraag?

## Belangrijkste inzichten

- De vijf klassieke Lean-metrieken, **doorlooptijd, verwerkingstijd, cyclustijd, percentage volledig en juist, en takttijd**, gaan software vooraf en blijven de gemeenschappelijke woordenschat van Lean Six Sigma-getrainde belanghebbenden.
- De eigen **flowtijd en cyclustijd van dit boek mappen op, maar zijn niet identiek aan**, Leans doorlooptijd en klassieke CT; documenteer de mapping expliciet om functieoverschrijdende verwarring te voorkomen.
- De centrale manipulatievector van het onderwerp is **%V/J alleen meten bij finale levering**; de beschermmetriek is het multiplicatief oprollen over elk stadium als opgerolde doorvoeropbrengst.
- **Takttijd herkadert capaciteit rond echte klantvraag**, niet bestaand tempo, en koppelt direct met bezettingsgraad (onderwerp 2.7) en flowbelasting (onderwerp 2.4).
- Softwarelevering herkaderen in klassieke Lean-termen is vaak de snelste manier om te verbinden met **bestaande procesverbeteringsexpertise en financiering** al aanwezig in een grote organisatie.

## Bronnen en verder lezen

- Rother, Mike, en John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., en Daniel T. Jones. *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, en Daniel Roos. *The Machine That Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill, 2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*. Productivity Press, 1988.
