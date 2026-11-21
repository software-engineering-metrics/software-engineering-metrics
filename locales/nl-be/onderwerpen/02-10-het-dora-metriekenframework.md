# 2.10 Het DORA-metriekenframework

## Overzicht en motivatie

De **[DORA-metrieken](https://dora.dev/guides/dora-metrics/)** komen van het [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment-programma, een meerjarige onderzoeksinspanning, later gepubliceerd als het boek *Accelerate* door Nicole Forsgren, Jez Humble, en Gene Kim, dat tienduizenden ingenieursprofessionals bevroeg om te vinden welke leveringspraktijken correleren met organisatorische prestatie. Het resultaat waren vier metrieken, gekoppeld twee-aan-twee: deploymentfrequentie en doorlooptijd voor wijzigingen meten snelheid; wijzigingsfoutpercentage en herstelteltijd van mislukte deployments, vaak verkort tot gemiddelde hersteltijd (MTTR), meten stabiliteit. De onderzoeksbevinding die het framework significant maakte was dat elitepresteerders snel en stabiel waren gelijktijdig, wat de aanname omverwerpt dat snelheid en veiligheid tegen elkaar afgewogen worden, en die bevinding is nog steeds het duidelijkste doorgewerkte voorbeeld dat dit boek heeft van het beschermmetriek-koppelingsprincipe van onderwerp 1.2: een gestimuleerde snelheidsmetriek, gekoppeld met een stabiliteitsbeschermmetriek, is wat de best presterende organisaties daadwerkelijk doen.

Dit boek behandelt DORA het laatst in dit deel, doelbewust, in plaats van als het organiserende framework van het deel. Die plaatsing is geen afwijzing van het onderzoek, dat echt rigoureus blijft en de moeite waard om te gebruiken. Het reflecteert een specifieke, echte beperking: DORA meet hoe snel en hoe veilig een pijplijn beweegt, maar het is stil over wat erdoor beweegt. Een team kan uitstekende DORA-cijfers posten terwijl zijn daadwerkelijke output stilletjes afgedreven is richting defectherwerk of de capaciteit voor technische schuld en beveiligingswerk heeft uitgehongerd, een patroon dat het Flow Framework van onderwerpen 2.1 tot en met 2.4 specifiek gebouwd is om aan de oppervlakte te brengen en DORA niet kan zien. Gebruik DORA zoals dit onderwerp het presenteert: een goed gevalideerde, nauwere referentiemeting van pijplijnmechanica, niet het hele beeld van leveringsgezondheid.

Voor grote teams is DORA's overblijvende, echte waarde vergelijkbaarheid. Een metriek consistent berekend uit pijplijn- en incidentdata laat een organisatie leveringscapaciteit vergelijken over veel teams die in verschillende domeinen werken zonder het appels-met-peren-probleem dat de meeste teamoverschrijdende vergelijkingen plaagt. Grote bedrijven gebruiken het nog steeds om platforminvestering te prioriteren; overheidsorganisaties gebruiken het nog steeds om, met bewijs, aan te tonen dat een moderniseringsprogramma leveringsmechanica meetbaar verbeterde. Behandel dat als DORA's eigenlijke, begrensde taak, en gebruik de Flow Framework-onderwerpen eerder in dit deel voor de bredere vraag of de juiste dingen überhaupt geleverd worden.

## Kernprincipes

- **DORA meet de pijplijn, niet de waarde die erdoorheen stroomt.** Onderwerp 2.1 benoemt dit gat direct; gebruik flowverdeling (onderwerp 2.3) om te zien wat DORA niet kan.
- **Snelheid en stabiliteit worden samen gemeten, nooit afzonderlijk.** Een DORA-geïnformeerd dashboard zonder beide helften gebruikt het framework niet echt.
- **Consistentie van definitie doet er meer toe dan het ruwe cijfer.** Een team dat van "gemiddeld" naar "hoog" presteren beweegt op een consistent gedefinieerde metriek is een echt signaal; twee teams berekend op verschillende manieren vergelijken is dat niet.
- **DORA meet het systeem, niet individuen.** Deze metrieken toepassen op individuele ingenieurs breekt de statistische basis van het framework en nodigt precies de manipulatie uit waar onderwerp 1.2 tegen waarschuwt.
- **Alle vier metrieken zijn proxy's, geen doelen.** Ze correleren met organisatorische prestatie; het cijfer zelf najagen, losgekoppeld van echte leveringsverbetering, verslaat het doel van het framework.

## Aanbevelingen

### Instrumenteer deploymentfrequentie vanuit de pijplijn, alleen productiereleases tellend

**Deploymentfrequentie** meet hoe vaak een team succesvol release naar productie. Tel alleen succesvolle productiedeployments, automatisch geïnstrumenteerd vanuit CI/CD-pijplijndata, nooit zelfgerapporteerd. Let specifiek op substitutiemanipulatie, een betekenisvolle wijziging splitsen in verscheidene triviale deploys puur om de telling op te blazen, door deploy-grootte naast frequentie te volgen: een krimpende gemiddelde grootte naast een stijgende telling is het duidelijkste teken dat dit gebeurt.

### Instrumenteer doorlooptijd voor wijzigingen van eerste commit tot productie

**Doorlooptijd voor wijzigingen** meet de tijd van een codewijziging's eerste commit tot zijn succesvolle deployment in productie. Rapporteer zowel de mediaan als een hoog percentiel, niet alleen een gemiddelde, de begeleiding van onderwerp 1.6 over scheef-verdeelde tijdsgebaseerde data volgend, en let op definitiedrift bij elk eindpunt, wat het cijfer vleit zonder enige echte verbetering.

### Definieer wijzigingsfoutpercentage schriftelijk voordat je teams vergelijkt

**Wijzigingsfoutpercentage** meet het percentage deployments dat een fout veroorzaakt die herstel vereist, een rollback, een hotfix, of een incident. Dit is het moeilijkste van de vier om consistent te definiëren, omdat "fout" niet zelf-evident objectief is. Kom een schriftelijke definitie overeen voordat je teams vergelijkt; zonder dit kan een ogenschijnlijk eerlijke vergelijking slecht misleiden. Let op verdacht snelle verbetering zonder onderliggende procesverandering erachter, het duidelijkste teken van definitiemanipulatie in plaats van echte vooruitgang.

### Meet hersteltijd vanaf detectie, niet vanaf het deploymentgebeurtenis

**Herstelteltijd van mislukte deployments** meet hoe lang het duurt om dienst te herstellen zodra een deployment een fout veroorzaakt. Start de klok bij detectie, niet bij het deploymentgebeurtenis zelf, zodat het cijfer echte herstelvertraging reflecteert in plaats van een bewakingsgat. Investeer specifiek in geautomatiseerde rollbackcapaciteit, de enkele meest gewone hefboom om deze metriek echt te verbeteren in plaats van door een incident voortijdig opgelost te verklaren.

### Gebruik flowmetrieken, niet DORA, om te diagnosticeren waarom een cijfer bewoog

Wanneer een DORA-metriek verschuift, verklaren de vier cijfers alleen zelden waarom. Gebruik cyclustijd-afbraak (onderwerp 2.6), flowbelasting (onderwerp 2.4), en flowverdeling (onderwerp 2.3) als de diagnostische laag onder DORA's samenvattingscijfers, en gebruik nooit een DORA-metriek in een individuele prestatiebeoordeling, het enkele meest schadelijke misbruik waar dit framework aan blootgesteld is.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Volledig DORA-framework, alle vier metrieken gekoppeld | Onderzoek-gevalideerd, weerstaat manipulatie door koppeling, maakt eerlijke teamoverschrijdende vergelijking mogelijk | Stil over welk type waarde geleverd wordt; heeft het Flow Framework ernaast nodig voor dat beeld |
| DORA als dit deel's enige organiserende metriekenset | Simpel, bekend voor de meeste ingenieursleiders | Mist de waardemix-vraag volledig, de reden van dit boek om het hier te deprioriteren |
| DORA plus Flow Framework samen | Pijplijnmechanica en waardemix beide zichtbaar | Vereist het onderhouden van twee metriekwoordenschatten in plaats van een |
| DORA toegepast op individueel niveau | Voelt direct handelbaar voor sommige managers | Breekt de statistische geldigheid van het framework; sterke Goodharts-wet-blootstelling |

De centrale spanning is **mechanische rigoureusheid versus zakelijke leesbaarheid**. DORA's vier metrieken zijn precies gedefinieerd en onderzoek-gevalideerd, wat ze uitstekend maakt om pijplijnprestatie over teams te vergelijken, maar diezelfde precisie is nauw begrensd tot de pijplijn zelf en zegt niets over of het juiste werk erdoorheen stroomt. Los de spanning op door DORA te houden als een referentielaag voor pijplijngezondheid, onderwerp 2.10's juiste plaats in de structuur van dit boek, terwijl je de Flow Framework-onderwerpen eerder in dit deel gebruikt voor de zakelijk-gerichte vraag van waardemix, in plaats van te proberen DORA een vraag te laten beantwoorden waarvoor het nooit ontworpen was.

## Vragen om met je team te bespreken

1. **Instrumenteren we alle vier DORA-metrieken vanuit de pijplijn, of zijn sommige ervan zelfgerapporteerde schattingen?** Een framework gebouwd op objectieve, onderzoek-gevalideerde meting verliest veel van zijn waarde het moment dat een cijfer een beste gok wordt. Audit elke metriek's daadwerkelijke databron (onderwerp 1.5).

2. **Delen alle teams die we vergelijken met DORA-metrieken dezelfde definities van deployment, wijziging, en fout?** Een vergelijking tussen teams die verschillende definities gebruiken is niet echt een vergelijking, en kan onrechtvaardige oordelen produceren over relatieve prestatie.

3. **Heeft iemand in onze organisatie een DORA-metriek gebruikt in een individuele prestatiebeoordeling, formeel of informeel?** Dit is het enkele meest schadelijke misbruik van het framework en gebeurt vaak stilletjes. Vraag direct en wees voorbereid op een ongemakkelijk maar noodzakelijk antwoord.

4. **Zouden onze DORA-cijfers uitstekend kunnen zijn terwijl onze flowverdeling (onderwerp 2.3) stilletjes afgedreven is richting herwerk of weg van functies?** Dit is precies het gat dat DORA alleen niet kan zien. Trek beide cijfersets samen en check of ze een consistent verhaal vertellen.

5. **Wanneer een van onze DORA-metrieken beweegt, hebben we de flowmetriekdiagnostiek om te verklaren waarom?** Een DORA-cijfer alleen vertelt je dat iets veranderde, niet wat. Check of je teams kunnen antwoorden "waarom steeg doorlooptijd deze maand" met data, of alleen met speculatie.

6. **Hoe zouden onze vier DORA-cijfers veranderen als we doelbewust proberen elk ervan te manipuleren, en zouden we het merken?** Loop deploymentfrequentie, doorlooptijd, wijzigingsfoutpercentage, en hersteltijd een voor een door, de praktische toepassing van de kerndiscipline van onderwerp 1.2 op dit specifieke framework.

## Sectorperspectief

**Startup.** DORA's snelheidsmetrieken komen meestal natuurlijk voor een klein team dat al frequent deployt; de moeilijkere discipline is wijzigingsfoutpercentage en hersteltijd eerlijk instrumenteren in plaats van stabiliteit aannemen omdat nog niets ernstig gebroken is. DORA koppelen met zelfs een informele flowitem-splitsing (onderwerp 2.2) vroeg voorkomt het bouwen van een vals gevoel van leveringsgezondheid rond pijplijnsnelheid alleen.

**Klein bedrijf.** De meeste moderne CI/CD- en versiebeheerplatforms exporteren deploymentfrequentie- en doorlooptijddata met minimale setup; deploys koppelen aan incidenten voor wijzigingsfoutpercentage vereist meestal meer handmatige inspanning. Begin met de twee snelheidsmetrieken en voeg stabiliteitstracking toe zodra een informeel incidentlog bestaat om tegen te koppelen.

**Groot bedrijf.** DORA's grootste overblijvende waarde op deze schaal is eerlijke, consistente teamoverschrijdende vergelijking voor platforminvesteringsbeslissingen. Standaardiseer definities organisatiebreed (onderwerp 1.4), automatiseer instrumentatie centraal, en koppel elk DORA-rapport met een flowverdelingsweergave zodat leiderschap zowel pijplijnsnelheid als waardemix samen ziet, niet de een zonder de andere.

**Overheid.** DORA-metrieken geven een moderniseringsprogramma nog steeds een verdedigbare, onderzoek-onderbouwde manier om leveringsmechanicaverbetering aan toezichthoudende instanties aan te tonen. Rapporteer alle vier metrieken samen, nooit de vleiende helft handpickend, en koppel ze met flowverdeling zodat het rapport ook de moeilijkere, belangrijkere vraag beantwoordt van wat de snellere pijplijn daadwerkelijk levert.

## Voorbeelden

**Groot bedrijf.** Het platformmoderniseringsprogramma van een groot telecommunicatiebedrijf instrumenteerde alle vier DORA-metrieken consistent over veertig productteams en toonde een echte beweging van laag-presteerder naar hoog-presteerder-banden over achttien maanden, deploymentfrequentie ongeveer tienvoudig omhoog, doorlooptijd omlaag van weken naar dagen, wijzigingsfoutpercentage vlak gehouden. Een bestuurslid, de presentatie reviewend, stelde een vraag die de DORA-cijfers alleen niet konden beantwoorden: hoeveel van die snellere levering was nieuwe klantwaarde versus herwerk. De ingenieursorganisatie had geen antwoord totdat het de volgende kwartaal flowitem-classificatie adopteerde, wat liet zien dat functiewerk daadwerkelijk gedaald was als aandeel van totale output zelfs terwijl DORA's snelheidscijfers verbeterden, een bevinding die de prioriteiten van het programma voor het volgende jaar herschikte.

**Overheid.** Het IT-moderniseringskantoor van een provinciale overheid adopteerde DORA-metrieken als een contractvoorwaarde om de leveringscapaciteit van verscheidene concurrerende leveranciersteams te vergelijken, een effectief gebruik van de vergelijkbaarheid van het framework. Een leverancier's hoge deploymentfrequentie werd onthuld, eenmaal wijzigingsfoutpercentage ernaast vereist werd, te correleren met een foutpercentage bijna drie keer hoger dan zijn peers, informatie die direct de contractverlengingsbeslissing van het kantoor informeerde. Het kantoor voegde later een flowverdelingsvereiste toe aan dezelfde contracten na te ontdekken dat de leverancier met de beste DORA-cijfers ook degene was die het kleinste aandeel capaciteit besteedde aan het beveiligingsherstelwerk dat het contract specifiek vereiste.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van DORA goed adopteren, binnen zijn eigenlijke bereik, is een verdedigbaar, bewijsgebaseerd antwoord op "wordt onze leveringspijplijn sneller en veiliger," wat een van de meer behapbare vragen in ingenieurswerk blijft om met vertrouwen te beantwoorden. Dat antwoord rechtvaardigt platform- en toolinginvestering met echte cijfers, en laat leiderschap concurrerende investeringen vergelijken op een eerlijke, consistente basis, precies zoals het altijd heeft.

De totale eigendomskosten zijn het integratiewerk om deploymentgebeurtenissen te koppelen aan incidentrecords voor wijzigingsfoutpercentage en hersteltijd, niet-triviaal over een groot, heterogeen toolinglandschap. De extra kost van DORA koppelen met de Flow Framework-onderwerpen eerder in dit deel is vergelijkbaar klein, omdat flowitem-classificatie een rapportageconventie is gelaagd op bestaand werk, geen parallel meetsysteem, en het rendement, precies de waardemix-blinde-vlek vangen die het telecommunicatievoorbeeld hierboven illustreert, is die bescheiden extra investering ruimschoots waard.

## Antipatronen en valkuilen

- **DORA behandelen als het hele beeld van leveringsgezondheid:** de manipulatievector waar de plaatsing van dit onderwerp ontworpen is om tegen te werken. Een organisatie kan echt uitstekende DORA-cijfers presenteren, snelle, frequente, stabiele deployments, terwijl zijn daadwerkelijk geleverde waarde stilletjes verschoven is richting herwerk of weg van functies, en DORA's vier metrieken alleen zullen die verschuiving nooit onthullen omdat ze nooit ontworpen waren om het te meten. De beschermmetriek is elk DORA-rapport koppelen met flowverdeling (onderwerp 2.3), zodat een snelle, stabiele pijplijn die de verkeerde mix van werk levert zichtbaar is in plaats van verward te worden met echte leveringsgezondheid.
- **Alleen de snelheidshelft van DORA rapporteren:** verslaat de centrale bevinding van het framework dat snelheid en stabiliteit samen bewegen bij hoogpresteerders.
- **DORA-metrieken gebruiken in individuele prestatiebeoordelingen:** breekt de statistische geldigheid van het framework en nodigt sterke manipulatie uit.
- **Teams vergelijken met inconsistente definities:** produceert vergelijkingen die eerlijk lijken maar dat niet zijn.
- **Zelfgerapporteerde DORA-cijfers in plaats van pijplijn-geïnstrumenteerde:** introduceert precies de vertekening die het framework ontworpen was om te elimineren.
- **DORA behandelen als diagnostisch in plaats van samenvattend:** laat een team niet in staat om te verklaren waarom een cijfer bewoog zonder de flowmetrieklaag erachter.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** DORA-metrieken, indien überhaupt bijgehouden, zijn zelfgerapporteerd, inconsistent gedefinieerd, en nooit gekoppeld met flowdata.
- **Niveau 2, Ontwikkelen:** Sommige teams instrumenteren DORA vanuit de pijplijn, maar definities variëren en er is geen flowverdelings-tegenhanger om tegen te checken.
- **Niveau 3, Standaardiseren:** Alle vier DORA-metrieken worden consistent geïnstrumenteerd vanuit pijplijn- en incidentdata, met gedeelde definities, en worden routinematig getoond naast flowverdeling.
- **Niveau 4, Beheren:** DORA- en flowmetrieken worden samen gereviewd als een standaardkoppeling op elk niveau van de organisatie, en DORA wordt nooit gebruikt voor individuele evaluatie.
- **Niveau 5, Orkestreren:** De organisatie kan wijzen naar specifieke gevallen waar flowverdeling een waardemix-probleem ving dat uitstekende DORA-cijfers alleen verhuld hadden, en gebruikt beide frameworks doelbewust voor de verschillende vragen die elk beantwoordt.

## Discussie-ideeën

1. Waar plaatsen onze vier DORA-metrieken ons momenteel op het prestatieniveau-spectrum, eerlijk?
2. Zouden onze DORA-cijfers uitstekend kunnen lijken terwijl onze flowverdeling stilletjes afgedreven is? Hebben we dat ooit gecheckt?
3. Heeft iemand ooit een DORA-cijfer gebruikt om een individu te beoordelen, zelfs informeel?
4. Als een concurrent zijn DORA-cijfers publiceerde, zouden onze gunstig vergelijken, en zou die vergelijking daadwerkelijk vertellen wie meer echte waarde levert?

## Belangrijkste inzichten

- DORA's vier metrieken, **deploymentfrequentie, doorlooptijd, wijzigingsfoutpercentage, en hersteltijd**, koppelen snelheid met stabiliteit naar ontwerp en blijven echt onderzoek-gevalideerd.
- Dit boek plaatst DORA **het laatst in dit deel** omdat het de pijplijn meet, niet de waarde die erdoorheen stroomt; koppel het met flowverdeling (onderwerp 2.3) voor het vollere beeld.
- De centrale manipulatievector van het onderwerp is **uitstekende DORA-cijfers verwarren met complete leveringsgezondheid**; de beschermmetriek is DORA altijd rapporteren naast flowverdeling.
- **Gebruik DORA-metrieken nooit in individuele prestatiebeoordelingen**; de geldigheid van het framework hangt af van systeemniveau-, niet individuele, meting.
- Gebruik **flowmetrieken als de diagnostische laag** onder DORA's samenvattingscijfers wanneer een ervan beweegt.

## Bronnen en verder lezen

- Forsgren, Nicole, Jez Humble, en Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment-programma. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, en George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, en John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
