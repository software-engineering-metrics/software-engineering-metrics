# 7.4 Uitkomsttelemetrie als de nieuwe noorderstermetriek

## Overzicht en motivatie

Dit hoofdstuk sluit deel 7 af, en in een echte zin sluit het het argument af dat dit hele boek opgebouwd heeft sinds hoofdstuk 1.3, met een enkele, directe claim: naarmate generatieve AI ruwe output goedkoop maakt, stopt **uitkomst**-**[telemetrie](https://en.wikipedia.org/wiki/Telemetry)**, continue, geïnstrumenteerde meting van echte uitkomsten in plaats van activiteit of output, een goede praktijk onder verscheidene te zijn en wordt het het organiserende principe waarrond een metriekenprogramma gebouwd moet worden. Dit is geen nieuw idee hier voor het eerst geïntroduceerd. Het is het idee dat hoofdstuk 1.3 introduceerde in het openingsdeel van dit boek, nu gepresenteerd als de noodzakelijke, in plaats van louter voorkeurbare, reactie op een technologieverschuiving die elk alternatief gevaarlijker gemaakt heeft dan het vroeger was.

De logica is direct. Voor generatieve AI was outputvolume een imperfecte maar niet waardeloze proxy voor inspanning en, los, voor waarde; een team dat meer functies uitleverde had, op minimum, meer werk gedaan, zelfs als dat werk niet altijd het juiste werk was. Generatieve AI verbreekt zelfs die losse verbinding: outputvolume duidt niet meer betrouwbaar op inspanning, omdat een gereedschap het in secondes kan genereren, en het duidt zeker niet op waarde, omdat hoofdstuk 7.3 toonde dat opgeblazen output kan samenbestaan met verslechterende kwaliteit. De metrieken die deze verschuiving intact overleven zijn precies degene waarnaar dit boek benadrukt heeft te bouwen vanaf zijn openingshoofdstukken: ontsnapte-defectfrekvens (hoofdstuk 5.1), functieadoptie (hoofdstuk 5.2), klant- en bedrijfsuitkomsten (hoofdstuk 5.3), betrouwbaarheid (deel 6), en ontwikkelaarswelzijn (deel 3). Geen van deze hangt af van hoe de onderliggende code geproduceerd werd; allemaal meten ze wat daadwerkelijk gebeurde als resultaat.

Voor grote teams heeft het argument van dit hoofdstuk directe, praktische gevolgen voor hoe een metriekenprogramma gebouwd en herbouwd zou moeten worden voorwaarts. Grote bedrijven die hun ingenieursdashboards herontwerpen in het licht van AI-adoptie zouden investering specifiek moeten wegen richting de uitkomsttelemetrie-infrastructuur die dit hoofdstuk beschrijft; overheidsorganisaties, zowel AI-tooling als de bredere technologieprogramma's waarin het ingebed is evaluerend, zouden beide moeten houden aan dezelfde uitkomsttelemetrie-standaard die dit hoofdstuk aanbeveelt als de basislijn voor elke geloofwaardige, toekomstbestendige evaluatie.

## Kernprincipes

- **Uitkomsttelemetrie wordt noodzakelijk, niet louter voorkeurbaar, eenmaal output goedkoop is.** Dit is het grondprincipe van hoofdstuk 1.3, nu urgent in plaats van aspiratief.
- **De metrieken die deze verschuiving overleven zijn degene waarnaar dit boek doorheen gebouwd heeft**: ontsnapte defecten, adoptie, bedrijfsuitkomsten, betrouwbaarheid, en welzijn.
- **Een metriekenprogramma primair gebouwd rond outputmetrieken is nu een verplichting, niet alleen een suboptimale keuze.** Outputmetrieken kunnen goedkoop en snel opgeblazen worden op schaal.
- **Uitkomsttelemetrie vereist echte investering**, instrumentatie, geduld voor langzamer signaal, en organisatorische discipline om de trek te weerstaan richting snellere, goedkopere, maar nu-onbetrouwbare outputmetrieken.
- **Dit principe overleeft elk specifiek AI-gereedschap of leverancier.** Het is een duurzame reactie op een duurzame verschuiving in wat output betekent, geen tijdelijke aanpassing aan een voorbijgaande trend.

## Aanbevelingen

### Audit je metriekinvesteringsratio: uitkomsttelemetrie versus outputtracking

Berekenen ruwweg welk aandeel van je huidige metriekeninfrastructuur, instrumentatie-inspanning, dashboardruimte, reviewvergaderingstijd, gaat naar uitkomstmetrieken (deel 5, deel 6, ontwikkelaarswelzijn van deel 3) versus output- en activiteitsmetrieken (deploymenttelling, commitvolume, pull-request-doorvoer). Als outputtracking domineert, is die ratio zelf nu een verplichting gegeven het argument van dit hoofdstuk, en het herbalanceren is de enkele hoogste-leverage-verandering die dit hoofdstuk aanbeveelt.

### Investeer doelbewust in uitkomsttelemetrie-infrastructuur, als een eersteklas ingenieursinvestering

Uitkomstmeting, functieadoptietracking, bedrijfsuitkomstcorrelatie (hoofdstuk 5.3), betrouwbaarheidsinstrumentatie (deel 6), vereist echte, doorlopende ingenieursinvestering die veel organisaties historisch onderbezet hebben relatief aan de vergelijkenderwijs goedkope en makkelijke outputmetrieken die veel dashboards vandaag domineren. Behandel deze infrastructuurinvestering met dezelfde ernst die dit boek toepast op elke andere significante ingenieurscapaciteit, niet als een secundaire zorg achter de AI-toolinginvestering zelf.

### Accepteer en communiceer dat uitkomsttelemetrie langzamer is, en bouw geduld daarvoor in de verwachtingen van je organisatie

Uitkomstmetrieken zijn, bijna door hun natuur, trager en ruizier dan outputmetrieken (het voorlopende-versus-achterlopende-onderscheid van hoofdstuk 1.3, de statistische voorzichtigheid van hoofdstuk 1.6). Een organisatie gewend aan de snelle, bevredigende feedback van een outputcijfer zien stijgen moet echt geduld bouwen voor het langzamere, eerlijkere signaal dat uitkomsttelemetrie levert, en leiderschap moet actief dat geduld communiceren en modelleren in plaats van reflexief te grijpen naar het snellere, nu-onbetrouwbare alternatief onder druk om snelle resultaten te tonen.

### Gebruik deze verschuiving als de gelegenheid om echt verouderde outputmetrieken te pensioneren, niet alleen om uitkomstmetrieken ernaast toe te voegen

De discipline van hoofdstuk 1.1 volgend om metrieken te pensioneren die hun plaats niet meer verdienen, gebruik dit moment als een doelbewuste gelegenheid om output- en activiteitsmetrieken te verwijderen die deze verschuiving specifiek gedevalueerd heeft, in plaats van simpelweg uitkomstmetrieken boven op een onveranderd bestaand dashboard te stapelen. Een dashboard dat elke oude outputmetriek behoudt terwijl het nieuwe uitkomstmetrieken erbovenop monteert groeit opgeblazen in plaats van echt verbeterd.

### Behandel uitkomsttelemetrie-investering als duurzaam, onafhankelijk van enig specifiek AI-gereedschap of leveranciersrelatie

Bouw uitkomsttelemetrie-infrastructuur als een permanente organisatorische capaciteit, geen reactie specifiek aan welk AI-gereedschap je organisatie dan ook toevallig gebruikt dit jaar. Dit principe, en de infrastructuur die het vraagt, zal elke specifieke leveranciersrelatie of toolinggeneratie overleven, en het bouwen als een duurzame capaciteit beschermt je metriekenprogramma tegen de volgende technologieverschuiving net zo veel als de huidige.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Output-metriek-dominant dashboard | Snelle, goedkope feedback; bekend voor de meeste organisaties | Nu actief onbetrouwbaar gegeven het effect van generatieve AI op outputkost |
| Uitkomsttelemetrie-dominant dashboard | Resistent tegen deze verschuiving; meet wat daadwerkelijk ertoe doet | Langzamer, ruiziger signaal; vereist echte instrumentatie-investering |
| Uitkomstmetrieken toevoegen naast onveranderde outputmetrieken | Incrementeel, minder verstorend | Produceert dashboardopblazing in plaats van echte verbetering |
| Volledige, doelbewuste herbalancering richting uitkomsttelemetrie | Pakt de verschuiving direct en volledig aan | Vereist de meest significante organisatorische en investeringsverandering |

De centrale spanning is, in een echte zin, dezelfde waarmee dit boek opende in hoofdstuk 1.3, nu verscherpt tot zijn meest urgente vorm: **snelle, bekende feedback versus langzamer, eerlijk signaal**. Outputmetrieken zijn altijd makkelijker en sneller geweest om te produceren; het argument van dit hoofdstuk is dat generatieve AI die afweging verplaatst heeft van louter suboptimaal naar actief gevaarlijk. Los de spanning op op de manier die dit boek aanbeveelt vanaf zijn openingshoofdstuk: weeg beslissend richting uitkomsten, accepteer de langzamere feedback die komt met echte waardeneting, en behandel het ongemak van die langzamere feedback als de eerlijke kost van iets echts meten in plaats van iets louter gemakkelijks.

## Vragen om met je team te bespreken

1. **Welk aandeel van onze huidige metriekeninfrastructuur en dashboardaandacht gaat naar uitkomstmetrieken versus output- en activiteitsmetrieken?** Berekenen deze ratio eerlijk; de meeste organisaties, voor de eerste keer beoordeeld, vinden het meer output-gewogen dan ze zouden hebben geraden.

2. **Welke specifieke uitkomsttelemetrie-infrastructuurinvestering hebben we uitgesteld in het voordeel van snellere, goedkopere outputtracking?** Noem een concreet voorbeeld, functieadoptie-instrumentatie, bedrijfsuitkomst-correlatietooling, en bespreek wat het zou vergen om het daadwerkelijk te bouwen.

3. **Heeft onze organisatie echt geduld gebouwd voor de langzamere feedback van uitkomsttelemetrie, of trekt druk voor snelle resultaten ons steeds terug richting snellere maar nu-onbetrouwbare outputmetrieken?** Wees eerlijk over dit patroon in je eigen recente rapportage- en reviewvergaderingen.

4. **Welke output- of activiteitsmetriek op ons huidige dashboard is een echte kandidaat voor pensioen, nu dat het argument van dit hoofdstuk er specifiek op toepast?** Identificeer ten minste een, en bespreek wat het zou moeten vervangen in plaats van simpelweg een gat achterlatend.

5. **Als onze AI-toolingleverancier of de huidige generatie AI-codeerassistenten dramatisch zou veranderen volgend jaar, zou ons metriekenprogramma nog standhouden?** Dit test of je uitkomsttelemetrie-investering echt duurzaam is, gebouwd als een permanente capaciteit, of louter een reactie specifiek aan je huidige toolingsituatie.

6. **Hoe zou het eruitzien als onze organisatie zich volledig zou committeren aan het argument van dit hoofdstuk, onze metriekinvestering beslissend herbalancerend richting uitkomsten in plaats van incrementeel?** Schets dit concreet in plaats van het abstract te laten; het gat tussen de huidige staat en deze visie is de daadwerkelijke roadmap van je organisatie voor reageren op deze verschuiving.

## Sectorperspectief

**Startup.** Uitkomsttelemetrie vroeg bouwen, voordat outputmetrieken de kans gehad hebben om diep ingebakken organisatorische gewoonte te worden, is echt makkelijker dan het later achteraf installeren. Een jong bedrijf dat AI-codeerassistentie adopteert vanaf het begin heeft een echte kans om zijn metriekenprogramma uitkomst-eerst te bouwen in plaats van een bestaande output-metriek-dominante cultuur te moeten ontwarren.

**Klein bedrijf.** Focus uitkomsttelemetrie-investering op de enkele uitkomstmetriek die het meest direct voortbestaan en groei reflecteert (hoofdstuk 5.3), in plaats van uitgebreide instrumentatie te proberen over elke uitkomstcategorie die dit boek behandelt. Een bescheiden, gerichte uitkomsttelemetrie-investering verslaat een uitgebreid output-metriek-dashboard dat het argument van dit hoofdstuk nu specifiek gedevalueerd heeft.

**Groot bedrijf.** De herbalancering die dit hoofdstuk aanbeveelt is een echte, significante organisatorische verandering op deze schaal, waarschijnlijk bestuurlijk sponsorschap en een meerkwartaal-investeringsplan vereisend. Behandel het met dezelfde ernst als elke andere grote infrastructuurinvestering die dit boek behandelt, en gebruik de specifieke, concrete voorbeelden van hoofdstuk 7.1 en hoofdstuk 7.3, metriekinflatie en kwaliteitsverdunning die een herbalanceerd dashboard eerder gevangen zou hebben, om de interne zaak voor de investering te bouwen.

**Overheid.** Overheidstechnologieprogramma's primair geëvalueerd op levering- en outputmetrieken (functies uitgeleverd, op schema) zijn steeds meer vatbaar voor precies de scepsis die hoofdstuk 5.3 beschreef, en het argument van dit hoofdstuk verscherpt die vatbaarheid verder naarmate AI-toolingadoptie zich verspreidt door de bredere sector waaruit overheidsinstanties rekruteren en waartegen ze vergeleken worden. Bouw uitkomsttelemetrie als de primaire basis voor publieke rapportage en budgetrechtvaardiging, je organisatie voorbij, in plaats van achter, deze verschuiving positionerend.

## Voorbeelden

**Groot bedrijf.** Het ingenieursleiderschap van een softwarebedrijf, direct getriggerd door de metriekinflatie-bijna-misser beschreven in het financiële-technologievoorbeeld van hoofdstuk 7.1, voerde een volledige audit uit van zijn metriekinvesteringsratio en vond dat bijna 70% van zijn dashboardruimte en instrumentatie-inspanning gewijd was aan output- en activiteitsmetrieken, met slechts bescheiden, inconsistente investering in uitkomsttelemetrie. Over het volgende jaar herbalanceerde het bedrijf doelbewust deze ratio, verscheidene outputmetrieken pensionerend die de audit van hoofdstuk 7.1 gevlagd had als meest blootgesteld en de vrijgemaakte capaciteit investerend in functieadoptie- en bedrijfsuitkomst-instrumentatie (hoofdstukken 5.2, 5.3). Het resulterende dashboard, gepresenteerd op de bestuursvergadering van het volgende jaar, werd expliciet gecrediteerd door datzelfde eerder sceptische bestuurslid als een betekenisvol betrouwbaardere basis voor het evalueren van ingenieursinvestering dan de output-zware versie die het verving.

**Overheid.** Een nationaal digitale-dienstenagentschap, een nieuw ingenieursmetriekenprogramma bouwend vanaf nul specifiek omdat zijn vorige, output-metriek-dominante dashboard aanhoudende wetgevende scepsis opgewekt had, adopteerde het principe van dit hoofdstuk expliciet als zijn grondontwerpbeslissing: uitkomsttelemetrie, burgerwachttijd, dienstvoltooingstempo, ontsnapte-defectfrekvens, zou de primaire basis zijn voor alle publieke rapportage, met output- en leveringsmetrieken alleen behouden als interne diagnostische gereedschappen, nooit als het kop-bewijs extern gepresenteerd. Dit uitkomst-eerst-ontwerp, doelbewust gebouwd in het licht van de generatieve-AI-verschuiving die dit deel beschrijft, gaf de rapportage van het agentschap een duurzaamheid en geloofwaardigheid bij zijn toezichthoudende commissie die zijn voorgangerprogramma, gebouwd rond de outputmetriekaannames van een eerdere generatie, nooit bereikt had.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van beslissend committeren aan uitkomsttelemetrie is een metriekenprogramma dat vertrouwd en geloofwaardig blijft doorheen de huidige technologieverschuiving en wat ook erna komt, in plaats van een die een andere significante herbouw vereist de volgende keer dat output goedkoop wordt door enige toekomstige technologieverandering. Het softwarebedrijfvoorbeeld hierboven toont dit concreet: het herbalanceerde dashboard herstelde direct geloofwaardigheid die de eerdere, output-zware versie echt in gevaar gebracht had.

De totale eigendomskosten zijn de uitkomsttelemetrie-infrastructuurinvestering die dit hoofdstuk aanbeveelt, echt significant, meerkwartaal-werk voor een grote organisatie, afgewogen tegen het duurzame, langetermijnrisico van een metriekenprogramma dat progressief minder betrouwbaar wordt terwijl output steeds goedkoper wordt. Dit is geen kost die dit boek je vraagt lichtzinnig te accepteren; het is het directe, noodzakelijke gevolg van het grondargument van hoofdstuk 1.3 net zo serieus nemen als dit afsluitende deel van het boek je vraagt.

## Antipatronen en valkuilen

- **Deze verschuiving behandelen als alleen incrementele aanpassing vereisend in plaats van echte herbalancering:** onderschat de schaal van verandering die generatieve AI geïntroduceerd heeft aan wat outputmetrieken betekenen.
- **Uitkomstmetrieken toevoegen naast een onveranderde, nog-dominante set outputmetrieken:** produceert dashboardopblazing in plaats van de echte herbalancering waarvoor dit hoofdstuk beargumenteert.
- **Uitkomsttelemetrie-investering bouwen als een reactie op een specifiek huidig AI-gereedschap in plaats van als een duurzame capaciteit:** laat de organisatie blootgesteld aan de volgende technologieverschuiving op dezelfde manier.
- **Falen om organisatorisch geduld te bouwen voor de langzamere feedback van uitkomsttelemetrie:** riskeert terugvallen naar snellere, maar nu-onbetrouwbare, outputmetrieken onder druk voor snelle resultaten.
- **Outputmetrieken pensioneren zonder een echte uitkomsttelemetrie-vervanging:** laat een meetgat in plaats van een echte verbetering.
- **Deze verschuiving presenteren aan belanghebbenden als louter een reactie op AI-tooling in plaats van als de vervulling van het grondprincipe van dit boek:** onderschat de duurzaamheid en algemeenheid van het argument.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Het dashboard blijft output-metriek-dominant, zonder doelbewuste reactie op de verschuiving die dit deel beschrijft.
- **Niveau 2, Ontwikkelen:** Enige uitkomstmetrieken zijn toegevoegd, maar de algehele investeringsratio blijft output-zwaar en geen metrieken zijn doelbewust gepensioneerd.
- **Niveau 3, Standaardiseren:** Een doelbewuste audit en herbalancering richting uitkomsttelemetrie is uitgevoerd, met echt verouderde outputmetrieken gepensioneerd, organisatiebreed.
- **Niveau 4, Beheren:** Uitkomsttelemetrie-infrastructuur wordt behandeld als een eersteklas, doorlopende ingenieursinvestering, en organisatorisch geduld voor zijn langzamere feedback wordt actief gecultiveerd en beschermd.
- **Niveau 5, Orkestreren:** Het metriekenprogramma van de organisatie is uitkomsttelemetrie-geleid als een duurzaam, permanent ontwerpprincipe, bewezen resistent doorheen de huidige technologieverschuiving en expliciet gebouwd om resistent te blijven doorheen wat ook komt.

## Discussie-ideeën

1. Wat is onze daadwerkelijke huidige ratio van uitkomstmetriek-tot-outputmetriek-investering?
2. Welke enkele outputmetriek zouden we dit kwartaal moeten pensioneren, en welke uitkomstmetriek zou het moeten vervangen?
3. Waar heeft organisatorische ongeduld ons recent teruggetrokken richting snellere maar minder betrouwbare outputmetrieken?
4. Is onze uitkomsttelemetrie-investering duurzaam, of specifiek gebonden aan onze huidige AI-toolingsituatie?
5. Wat zou het vergen om ons volledig te committeren aan het argument van dit hoofdstuk, in plaats van incrementeel aan te passen?

## Belangrijkste inzichten

- Uitkomsttelemetrie wordt **noodzakelijk, niet louter voorkeurbaar**, eenmaal generatieve AI output goedkoop maakt; dit is het grondprincipe van hoofdstuk 1.3, nu urgent.
- De metrieken die **deze verschuiving overleven** zijn degene waarnaar dit boek doorheen bouwt: ontsnapte defecten, adoptie, bedrijfsuitkomsten, betrouwbaarheid, en welzijn.
- **Audit en herbalanceer je metriekinvesteringsratio** doelbewust, echt verouderde outputmetrieken pensionerend in plaats van alleen uitkomstmetrieken ernaast toe te voegen.
- Bouw organisatorisch **geduld voor de langzamere feedback van uitkomsttelemetrie**, en weersta de trek terug richting snellere maar nu-onbetrouwbare outputmetrieken onder druk.
- Bouw deze investering als een **duurzame capaciteit**, onafhankelijk van enig specifiek AI-gereedschap of leverancier, je metriekenprogramma beschermend tegen toekomstige technologieverschuivingen net zo goed als de huidige.

## Bronnen en verder lezen

- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de uitkomst-gebaseerde-metingbasis waarop dit hele boek, en dit afsluitende hoofdstuk van deel 7, bouwt).
- *Lean Analytics*, door Alistair Croll en Benjamin Yoskovitz (het handelbaar-versus-vanity-metriek-onderscheid dat het argument van dit hoofdstuk uitbreidt naar het AI-tijdperk).
- *The Innovator's Dilemma*, door Clayton M. Christensen (het algemene patroon van gevestigde metrieken en praktijken die verplichtingen worden onder een disruptieve technologieverschuiving).
- *Measure What Matters*, door John Doerr (uitkomst-gerichte doelstelling als een organiserend principe voor een metriekenprogramma, het model waarvan dit hoofdstuk beargumenteert dat het nu de standaard zou moeten zijn, niet de uitzondering).
