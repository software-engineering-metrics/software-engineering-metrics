# 2.3 Flowsnelheid en flowverdeling

## Overzicht en motivatie

**Flowsnelheid** is het aantal flowitems (onderwerp 2.2) voltooid over een gegeven periode, het Flow Frameworks maat voor [doorvoer](https://en.wikipedia.org/wiki/Throughput). **Flowverdeling** is de proportie van elk flowitemtype, functies, defecten, risico, en schuld, onder de items voltooid in die dezelfde periode. De twee metrieken zijn ontworpen om samen gelezen te worden: snelheid alleen beantwoordt "hoeveel hebben we geleverd," en verdeling alleen beantwoordt "welk soort werk was het," maar geen van beide vragen betekent veel zonder de andere. Een team kan zijn snelheid verhogen terwijl zijn verdeling stilletjes verschuift weg van functies en richting defectomarbeid, wat eruitziet als acceleratie op een snelheidsdiagram en eigenlijk een symptoom is van dalende kwaliteit.

Deze paring is dezelfde discipline onderwerp 1.2 vraagt van elke metriekenfamilie in dit boek: rapporteer nooit een snelheidscijfer zonder de beschermmetriek die toont wat die snelheid kostte. Flowsnelheid is de meest directe generalisatie van dit deel van een doorvoermetriek, dichter in geest bij deploymentfrequentie (onderwerp 2.10) dan bij enig ander enkel cijfer in dit boek, maar item-type-bewust op een manier deploymentfrequentie nooit was. Deploymentfrequentie vertelt je hoe vaak code productie bereikt; flowsnelheid, gepaard met verdeling, vertelt je hoe vaak waarde productie bereikt en welk soort waarde het is.

Voor grote teams die veel gelijktijdige waardestromen runnen, legt deze paring een patroon bloot dat een enkel doorvoercijfer volledig verbergt: een waardestroom wiens snelheid gezond lijkt terwijl zijn verdeling stilletjes is afgedreven richting bijna puur functiewerk, stilletjes de schuld- en risicocapaciteit uithongerend die onderwerp 2.2 waarschuwde bewuste bescherming nodig heeft. Grote bedrijven die doorvoer vergelijken over productlijnen, en overheidsinstanties die leveringsoutput rapporteren aan toezichtsorganen, hebben beide deze paring nodig om te vermijden ruwe output te verwarren met echte, duurzame vooruitgang.

## Kernprincipes

- **Snelheid zonder verdeling verbergt wat daadwerkelijk geleverd werd.** Een stijgend itemaantal zegt niets over of dat aantal gezond, gemanipuleerd, of stilletjes scheef is richting het makkelijkste beschikbare werk.
- **Verdeling zonder snelheid verbergt schaal.** Een gezond-lijkende percentagesplitsing betekent weinig als je ook niet weet hoeveel totaal werk het representeert.
- **De twee metrieken moeten samen gerapporteerd worden, altijd.** Dit is een directe toepassing van onderwerp 1.2's beschermmetriek-paringsprincipe op flowdata specifiek.
- **Snelheid is blootgesteld aan dezelfde substitutiemanipulatie als elke itemaantalmetriek.** Moeilijk werk opsplitsen in veel kleine, makkelijke items blaast het aantal op zonder proportioneel meer waarde te leveren.
- **Een gezonde verdeling is contextafhankelijk, geen vast doel.** Onderwerp 2.2 behandelt dit op diepte; snelheid en verdeling zouden altijd geïnterpreteerd moeten worden tegen het doel die context impliceert.

## Aanbevelingen

### Rapporteer flowsnelheid als een trendlijn, nooit een enkele-periode-cijfer

Het itemaantal van een enkele periode is bullrig en makkelijk verkeerd gelezen. Plot flowsnelheid over verschillende consecutieve periodes en kijk naar de trend, niet enig enkel datapunt, dezelfde discipline onderwerp 1.6 aanbeveelt voor elke tijdreeksmetriek vatbaar voor natuurlijke variatie.

### Presenteer flowsnelheid nooit zonder zijn verdeling erbij

Behandel dit als een harde regel voor elk dashboard of rapport, geen leuk-om-te-hebben. Een snelheidsdiagram alleen getoond nodigt precies de verkeerde lezing uit waarmee dit onderwerp opent: stijgende doorvoer die eigenlijk een stijgend aandeel omarbeid is of makkelijk functiewerk dat schuld- en risicocapaciteit verdringt. Zet beide op dezelfde weergave, altijd.

### Weeg snelheid naar grootte of complexiteit wanneer itemgroottes breed variëren

Ruw itemaantal behandelt een eenregelige configuratieverandering en een meerweekse architecturale migratie als equivalent, wat precies dezelfde substitutiemanipulatie uitnodigt dit boek al heeft benoemd voor deploymentfrequentie (onderwerp 2.10): moeilijk werk opsplitsen in veel kleine items blaast het aantal op zonder proportioneel meer te leveren. Waar itemgroottes breed variëren, weeg snelheid naar een ruwe grootte- of complexiteitsschatting, of volg gemiddelde itemgrootte naast het ruwe aantal, zodat een krimpende gemiddelde grootte naast een stijgend aantal zichtbaar is in plaats van verborgen.

### Bewaak flowverdeling voor drift, niet alleen zijn huidige ogenblikfoto

Het nuttigste signaal in flowverdeling is zelden de exacte percentages van deze periode; het is de richting van verandering over verschillende periodes. Een stabiele drift, functies die klimmen terwijl schuld en risico stilletjes krimpen, is het waard om op te werpen bij belanghebbenden ruim voordat het het soort kwaliteits- of beveiligingsprobleem wordt dat onderwerp 2.2 waarschuwt onzichtbaar ophoopt onder een functiefabriekpatroon.

### Vergelijk flowsnelheid over waardestromen alleen met echte zorg

Twee waardestromen met verschillende itemgranulariteit, verschillende teamgroottes, of verschillende productfases zijn niet direct vergelijkbaar op ruwe snelheid alleen, hetzelfde eerlijkheidsprobleem onderwerp 2.10 benoemt voor deploymentfrequentie over teams. Gebruik snelheid eerst voor de eigen trend van een waardestroom, en probeer teamoverschrijdende vergelijking alleen na het bevestigen van echt vergelijkbare itemdefinities en granulariteit.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Alleen ruwe-itemaantal-snelheid | Simpel te berekenen en uit te leggen | Blootgesteld aan substitutiemanipulatie; verbergt welk soort waarde geleverd werd |
| Snelheid gepaard met verdeling | Toont zowel schaal als waardemix samen | Vereist gedisciplineerde flowitem-classificatie (onderwerp 2.2) om betekenisvol te zijn |
| Grootte-gewogen snelheid | Weerstaat substitutiemanipulatie van itemgrootte-splitsing | Vereist een consistente, overeengekomen groottemethode over het team |
| Teamoverschrijdende snelheidsvergelijking | Nuttig voor portfolioniveau-investeringsbeslissingen | Makkelijk onrechtvaardig zonder het bevestigen van echt vergelijkbare itemdefinities |

De centrale spanning is **eenvoud versus weerstand tegen manipulatie**. Ruw itemaantal is het makkelijkste cijfer om te berekenen en uit te leggen, maar het is ook het makkelijkste om op te blazen door moeilijk werk op te splitsen in veel kleine stukken. Los de spanning op door de primaire metriek simpel te houden, ruwe snelheid gepaard met verdeling, en groottewegen te reserveren voor waardestromen waar itemgroottes bekend zijn breed genoeg te variëren dat het simpele aantal actief misleidend is geworden.

## Vragen om met je team te bespreken

1. **Wanneer we flowsnelheid rapporteren, wordt flowverdeling altijd ernaast getoond, of staat snelheid soms alleen?** Een snelheidscijfer zonder zijn verdeling is een incompleet beeld volgens het eigen centrale principe van dit onderwerp. Controleer je daadwerkelijke dashboards en rapporten voor dit gat.

2. **Is onze gemiddelde itemgrootte veranderd naast een stijgende snelheid, en zouden we het weten als dat zo was?** Een krimpende gemiddelde grootte naast een klimmend aantal is de specifieke handtekening van substitutiemanipulatie toegepast op flowitems. Trek de daadwerkelijke data in plaats van aan te nemen dat het patroon afwezig is.

3. **Hebben we onze snelheid ooit vergeleken tegen die van een ander team zonder te bevestigen dat onze itemdefinities en granulariteit daadwerkelijk matchen?** Een onrechtvaardige vergelijking hier kan een team onder druk zetten om zijn eigen cijfers te manipuleren alleen om vergelijkbaar te lijken, hetzelfde risico weerspiegelend dit boek al benoemt voor deploymentfrequentie.

4. **Is onze flowverdeling in één richting afgedreven over de laatste paar periodes, en besloot iemand dat bewust?** Een langzame drift is makkelijk te missen periode voor periode. Plot verschillende periodes samen en kijk eerlijk naar een trend voordat je aanneemt dat de huidige splitsing stabiel is.

5. **Als iemand onze flowsnelheid wilde opblazen zonder meer echt werk te doen, wat is de makkelijkste manier waarop ze dat konden doen, en zou onze huidige rapportage het vangen?** Loop door de specifieke mechanica van moeilijke items opsplitsen in makkelijke, en bespreek of je dashboard dat patroon daadwerkelijk zou onthullen.

6. **Bereiken onze snelheid- en verdelingscijfers ooit samen bedrijfsbelanghebbenden, of reist alleen de snelheidsheadline naar boven?** Het paringsprincipe beschermt alleen tegen verkeerde lezing als beide helften daadwerkelijk gezien worden door de mensen die beslissingen maken van de data.

## Sectorperspectief

**Startup.** Flowsnelheid is meestal makkelijk informeel te volgen op deze schaal, omdat het hele team al een ruw gevoel voor doorvoer heeft. De nuttige discipline is hem paren met verdeling zelfs informeel, zodat een oprichter niet een stijgend ticket-afsluitingsaantal verwart met echte functievooruitgang wanneer het aantal eigenlijk gedomineerd wordt door vroege-fase-bugfixing.

**Klein bedrijf.** Volg snelheid en verdeling samen vanuit welke lichtgewicht tool je al gebruikt voor flowitem-classificatie (onderwerp 2.2); geen toegewijd analyseplatform is nodig op deze schaal. De gewoonte om ze altijd samen te bekijken doet er meer toe dan enige toolingverfijning.

**Groot bedrijf.** Teamoverschrijdende snelheidsvergelijking is verleidelijk op deze schaal voor portfolioniveau-prioritering, en het is ook waar het eerlijkheidsrisico het grootst is, omdat verschillende productlijnen legitiem heel verschillende itemgranulariteit hebben. Investeer in het bevestigen van vergelijkbare definities voordat snelheidsvergelijkingen gebruikt worden om investeringsbeslissingen tussen teams te rechtvaardigen.

**Overheid.** Flowsnelheid gepaard met verdeling geeft een overheidstechnologieleider een veel sterkere bewijsbasis voor het rapporteren van leveringsoutput aan toezichtsorganen dan ruwe doorvoer alleen, omdat het niet alleen kan tonen hoeveel geleverd werd maar dat de mix een bewuste, verdedigbare toewijzing reflecteert over nieuwe functionaliteit, defectherstel, en risicobeheer.

## Voorbeelden

**Groot bedrijf.** Het platformteam van een softwareleverancier rapporteerde stabiel stijgende flowsnelheid voor drie consecutieve kwartalen, een trend leiderschap vierde als accelererende levering. Een nadere blik op flowverdeling, gevraagd alleen na een klantescalatie over terugkerende bugs, onthulde dat het "functies"-aandeel van die stijgende snelheid eigenlijk gevallen was van 70% naar 45% over dezelfde periode, met defectfix-items die het gat vulden. Het team had meer items geleverd, maar een krimpende proportie ervan was nieuwe waarde; de rest was omarbeid het snelheidsdiagram alleen volledig had verborgen.

**Overheid.** Het dataplatformteam van een nationaal statistiekbureau volgde flowsnelheid als zijn primaire leveringsmetriek voor een jaarlijks rapport aan zijn toezichtsraad. Toen een raadslid vroeg welk aandeel van die snelheid nieuwe burgergerichte capaciteit representeerde, ontdekte het team dat het het cijfer nooit had afgebroken naar flowitemtype en kon niet direct antwoorden. Het agentschap nam vervolgens gepaarde snelheid-en-verdeling-rapportage aan, wat onthulde dat risico- en compliancewerk, gedreven door een nieuwe dataprivacyregulering, legitiem een groeiend aandeel capaciteit had geconsumeerd, een verdedigbare toewijzing de raad bereidwillig accepteerde zodra het expliciet getoond werd in plaats van impliciet gelaten in een onverklaarde snelheidsdip.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van snelheid paren met verdeling is een eerlijker, verdedigbaarder verslag van leveringsoutput dan beide cijfers alleen bieden. Het softwareleveranciersvoorbeeld hierboven, ontdekkend dat stijgende snelheid eigenlijk dalende functieoutput weerspiegelde, is precies het soort verkeerde lezing deze paring voorkomt, en dat patroon vroeg vangen is veel goedkoper dan het alleen ontdekken na een klantgericht kwaliteitsprobleem de vraag afdwingt.

De totale eigendomskosten zijn minimaal eenmaal flowitem-classificatie (onderwerp 2.2) al op zijn plek is: verdeling is een rechtlijnige aggregatie van al-geclassificeerde items, en de discipline van beide metrieken samen tonen is een rapportageconventie, geen technische investering. De meeste kost van de aanbevelingen van dit onderwerp was al betaald toen de organisatie eerlijke flowitem-classificatie aannam in de eerste plaats.

## Antipatronen en valkuilen

- **Flowsnelheid rapporteren zonder verdeling:** de manipulatievector aan de kern van dit onderwerp. Een team onder leveringsdruk kan itemaantal verhogen door kleine, makkelijke functiewerk te verkiezen en moeilijkere schuld-, risico-, of defectitems te vermijden, of door grote items op te splitsen in veel kleine, en een snelheidsdiagram alleen getoond zal lezen als acceleratie in plaats van de daadwerkelijke verschuiving in wat geleverd wordt. De beschermmetriek is dezelfde paringsdiscipline onderwerp 1.2 vraagt door dit hele boek: toon nooit snelheid zonder verdeling, en controleer periodiek gemiddelde itemgrootte naast het aantal om splitsing specifiek te vangen.
- **Snelheid vergelijken over waardestromen met verschillende itemgranulariteit:** produceert een onrechtvaardige, misleidende vergelijking.
- **De verdeling van een enkele periode behandelen als stabiel:** mist een langzame, betekenisvolle drift die alleen een trendweergave onthult.
- **Alleen de snelheidsheadline bedrijfsbelanghebbenden laten bereiken:** verspeelt de hele beschermende waarde van het paringsprincipe.
- **Gemiddelde itemgrootte negeren terwijl stijgende snelheid gevierd wordt:** mist de specifieke handtekening van substitutiemanipulatie.
- **Een snelheidsdoel stellen zonder verwijzing naar verdeling:** nodigt precies de manipulatie uit dit onderwerp bij naam waarschuwt tegen.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Flowsnelheid, als gevolgd, wordt alleen gerapporteerd zonder verdelingsdata, en niemand heeft gecontroleerd op substitutiemanipulatie.
- **Niveau 2, Ontwikkelen:** Sommige teams volgen verdeling, maar het is niet consistent gepaard met snelheid in rapportage of beoordeeld als een trend.
- **Niveau 3, Standaardiseren:** Snelheid en verdeling worden altijd samen gerapporteerd, bekeken als trends, met gemiddelde itemgrootte gemonitord om substitutiemanipulatie te vangen.
- **Niveau 4, Beheren:** Verdelingsdrift wordt proactief onderzocht voordat het een kwaliteits- of beveiligingsprobleem wordt, en teamoverschrijdende snelheidsvergelijkingen worden alleen gemaakt na het bevestigen van echt vergelijkbare itemdefinities.
- **Niveau 5, Orkestreren:** Snelheid en verdeling informeren direct portfolioniveau-investeringsbeslissingen, en de organisatie kan wijzen naar specifieke gevallen waar verdelingsdrift gevangen en gecorrigeerd werd voordat het een zichtbaar falen veroorzaakte.

## Discussie-ideeën

1. Omvat onze flowsnelheidsrapportage altijd verdeling, of hebben we ooit de ene getoond zonder de andere?
2. Is onze gemiddelde flowitemgrootte recent verschoven naast een verandering in snelheid?
3. Zouden we weten als onze flowverdeling stabiel was afgedreven over de laatste paar kwartalen?
4. Wat zou het vereisen voor iemand om onze snelheid op te blazen zonder meer echte waarde te leveren, en zouden we het merken?

## Belangrijkste inzichten

- **Flowsnelheid** meet doorvoer; **flowverdeling** meet welk soort werk die doorvoer representeert. Rapporteer ze samen, altijd.
- Deze paring is een directe toepassing van onderwerp 1.2's **beschermmetriek-principe**: toon nooit een snelheidscijfer zonder de context van wat het kostte.
- De centrale manipulatievector van het onderwerp is **snelheid alleen rapporteren**, wat een verschuiving richting makkelijk functiewerk of itemsplitsing kan verbergen die aantal opblaast zonder proportionele waarde te leveren.
- **Verdelingsdrift** is het meest zichtbaar als een trend over verschillende periodes, niet in de ogenblikfoto van een enkele periode.
- **Teamoverschrijdende snelheidsvergelijkingen** hebben echt vergelijkbare itemdefinities nodig om eerlijk te zijn; zonder dat misleiden ze meer dan ze informeren.

## Bronnen en verder lezen

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble, en Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
