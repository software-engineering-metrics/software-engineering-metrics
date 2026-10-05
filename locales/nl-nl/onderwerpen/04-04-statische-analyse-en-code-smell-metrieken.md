# 4.4 Statische analyse en code-smell-metrieken

## Overzicht en motivatie

**[Statische analyse](https://en.wikipedia.org/wiki/Static_program_analysis)**-gereedschappen scannen broncode zonder het uit te voeren, patronen vlaggend bekend te correleren met defecten, beveiligingsvulnerabiliteiten, of onderhoudbaarheidsproblemen: onbereikbare code, ongesloten resources, verdachte typedwang, gedupliceerde logica, en de bredere categorie **code smells**, structurele patronen die niet noodzakelijk bugs zijn maar vaak code moeilijker maken om te begrijpen, te testen, of veilig te wijzigen. Statische analyse is de geautomatiseerde, continue laag onder de meer gerichte metrieken in de andere onderwerpen van dit deel, draaiend op elke commit en problemen aan de oppervlakte brengend op het moment dat ze geïntroduceerd worden in plaats van te wachten op een periodieke audit.

De centrale zorg van dit onderwerp is het gat tussen wat statische-analysegereedschappen rapporteren en wat daadwerkelijk ertoe doet. Een gereedschap kan duizenden bevindingen vlaggen over een grote codebase, en het aantal bevindingen alleen is een slechte metriek, omdat het triviale stijlvoorkeuren vermengt met echt, ernstig risico, en het kan omlaaggedreven worden door suppressie net zo makkelijk als door echte fixes. De waarde van statische analyse komt niet van de ruwe bevindingstelling maar van hoe goed een organisatie ernst trieert, regressie voorkomt, en de verleiding weerstaat om het oordeel van het gereedschap te behandelen als een vervanging voor menselijke review in plaats van een complement erop.

Voor grote teams is statische analyse de enige praktische manier om een basislijn van codekwaliteit en beveiligingshygiëne af te dwingen over een codebase groter dan enig team handmatig volledig kan reviewen. Grote bedrijven en overheidsorganisaties, vaak compliance-vereisten gezicht gevend rond veilige codeerpraktijken, hangen af van statische analyse als gedocumenteerd, auditeerbaar bewijs dat een basislijnniveau doorlichting consistent toegepast werd, niet alleen wanneer een menselijke reviewer toevallig een probleem opmerkte.

## Kernprincipes

- **Ruwe bevindingstelling is een slechte metriek op zichzelf.** Het vermengt triviale en ernstige problemen, en het kan gemanipuleerd worden door suppressie in plaats van echte fixes.
- **Ernsttriage doet er meer toe dan volume.** Een klein aantal kritieke bevindingen verdient meer aandacht dan een groot aantal triviale.
- **Statische analyse complementeert menselijke review; het vervangt het niet.** Gereedschappen vangen patronen; ze begrijpen geen intentie of bedrijfscontext.
- **Een "nieuwe geïntroduceerde problemen"-trend is handelbaarder dan een totale backlogtelling.** Het vertelt je of huidige praktijk verbetert of verslechtert.
- **Valspositieven eroderen vertrouwen in het gereedschap.** Een onbeheerd valspositieventempo leidt teams om bevindingen massaal te negeren, inclusief de echte.

## Aanbevelingen

### Volg ernst-gewogen bevindingen, niet ruwe telling

Configureer je statische-analysetooling om bevindingen te classificeren op ernst (kritiek, hoog, medium, laag, of een equivalente schaal), en volg een ernst-gewogen trend in plaats van een vlakke totale telling. Een codebase met nul kritieke bevindingen en vijfhonderd laag-ernstige stijlvoorstellen is in een heel andere staat dan een met vijftig kritieke bevindingen en helemaal geen stijlproblemen, en een ruwe telling behandelt deze als ruwweg equivalent wanneer ze dat niet zijn.

### Poort op nieuwe geïntroduceerde bevindingen, niet op de totale historische backlog

De meeste gevestigde codebases dragen een legacy-backlog bevindingen die van voor huidige praktijk dateren en prohibitief duur zouden zijn om allemaal tegelijk te fixen. In plaats van al het werk te blokkeren totdat de hele backlog gewist is, poort CI op of een specifieke wijziging nieuwe bevindingen introduceert boven een overeengekomen ernstdrempel, de backlog geleidelijk latend krimpen door normaal onderhoud terwijl verdere accumulatie voorkomen wordt. Dit onderscheid weerspiegelt de dekkingsvloer-aanbeveling van onderwerp 4.2: beschermen tegen regressie in plaats van een onrealistische, alles-tegelijk-fix te eisen.

### Beheer actief het valspositieventempo

Review periodiek een steekproef van bevindingen, vooral elke categorie met een hoog volume, en check hoeveel echt valspositieven zijn, gevallen waar het gereedschap een patroon vlagde dat niet daadwerkelijk problematisch is in context. Stem regelconfiguratie af om echt luidruchtige, laag-waarde-regelcategorieën specifiek te onderdrukken, in plaats van teams de gewoonte te laten ontwikkelen de output van het gereedschap massaal te negeren omdat te veel ervan ruis is. Een hoog, onbeheerd valspositieventempo is de enkele snelste manier om de geloofwaardigheid van een statische-analyseprogramma te vernietigen.

### Gebruik statische-analysebevindingen als een prompt voor review, geen automatisch oordeel

Zelfs een legitieme, niet-valspositieve bevinding rechtvaardigt niet altijd een automatische, verplichte fix; sommige gevlagde patronen zijn acceptabel gegeven specifieke context die een gereedschap niet kan zien. Bouw een lichtgewicht proces voor een mens om een bevinding te reviewen en ofwel te fixen of expliciet, zichtbaar af te wijzen met een gedocumenteerde reden, in plaats van ofwel elke bevinding blindelings als verplicht af te dwingen of stille, ongedocumenteerde suppressie toe te staan die de waarde van het gereedschap erodeert over tijd.

### Combineer statische analyse met de andere codekwaliteitsmetrieken in dit deel

Statische-analysebevindingen, complexiteitsscores (onderwerp 4.1), en hotspotdata (onderwerp 4.3) zijn complementair bewijs, geen concurrerende metrieken. Een bestand met een hoge concentratie onopgeloste statische-analysebevindingen dat ook een churn-complexiteit-hotspot is, is een bijzonder sterke kandidaat voor geprioriteerde aandacht, omdat meervoudige onafhankelijke signalen convergeren op dezelfde conclusie.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Ruwe bevindingstelling als de metriek | Simpel te rapporteren | Vermengt triviale en ernstige problemen; makkelijk te manipuleren door suppressie |
| Ernst-gewogen trend | Reflecteert daadwerkelijk risico accurater | Vereist doorlopend ernstclassificatieonderhoud |
| Poort op hele historische backlog | Maximaliseert uiteindelijke codezuiverheid | Vaak onpraktisch voor gevestigde codebases; kan al het werk stoppen |
| Poort alleen op nieuwe bevindingen | Praktisch, voorkomt regressie, laat backlog geleidelijk krimpen | Legacy-problemen blijven langer bestaan zonder een doelbewust herstelplan |

De centrale spanning is **grondigheid versus praktischheid**. Een statische-analysebeleid dat eist dat de hele historische backlog opgelost wordt voordat enig nieuw werk doorgaat is grondig maar meestal onpraktisch voor elke codebase met echte geschiedenis, en teams onder die druk neigen bevindingen massaal te onderdrukken in plaats van ze echt te fixen. Los de spanning op door strikt te poorten op nieuwe bevindingen terwijl je een afzonderlijke, doelbewust getempode herstelinspanning draait tegen de legacy-backlog, geprioriteerd met de ernst- en cross-referentietechnieken die dit onderwerp en onderwerp 4.3 aanbevelen.

## Vragen om met je team te bespreken

1. **Volgen we een ernst-gewogen trend, of alleen een ruwe totale bevindingstelling?** Trek je daadwerkelijke dashboard en check; een ruwe telling is standaard gewoon in veel gereedschappen en vereist vaak doelbewuste configuratie om ernst correct aan de oppervlakte te brengen in plaats daarvan.

2. **Wat is onze huidige legacy-backlog onopgeloste bevindingen, en hebben we een doelbewust, getempood plan om het te verminderen, of accumuleert het alleen onbeperkt?** Een onaangepakte, stilletjes groeiende backlog is gewoon en de moeite waard om eerlijk te benoemen in plaats van ongeëxamineerd te laten.

3. **Wat is ons geschatte valspositieventempo voor onze hoogste-volume-bevindingscategorieën, en hebben we regelconfiguratie daarop afgestemd?** Als je dit nooit gecheckt hebt, steekproef een batch bevindingen van je luidruchtigste categorie en beoordeel eerlijk hoeveel echt handelbaar zijn.

4. **Vertrouwen ingenieurs op ons team statische-analysebevindingen, of hebben ze geleerd ze uit te schakelen omdat te veel van de output ruis is?** Dit is een directe, eerlijke gevoelscheck de moeite waard om het team te vragen, omdat een gereedschap dat genegeerd wordt geen echte waarde levert ongeacht zijn theoretische capaciteit.

5. **Hoe behandelen we momenteel een legitieme bevinding waarvan een team denkt dat het afgewezen zou moeten worden gegeven specifieke context?** Check of je proces dit een zichtbare, gedocumenteerde beslissing maakt, of of het gebeurt via stille, ongedocumenteerde suppressie die het signaal van het gereedschap erodeert over tijd.

6. **Waar convergeren statische-analysebevindingen, complexiteitsscores, en hotspotdata op hetzelfde bestand of module?** Cross-refereer deze drie signalen expliciet; convergentie over meervoudige onafhankelijke metrieken is een sterker prioriteringssignaal dan enige enkele alleen.

## Sectorperspectief

**Startup.** Een lichtgewicht, gratis statische-analysegereedschap geïntegreerd in CI vanaf het begin is goedkope verzekering en vangt echte problemen vroeg, voordat een legacy-backlog enige kans krijgt om te accumuleren. Houd de regelset gefocust op echt hoog-waarde-, laag-ruis-categorieën in plaats van elke beschikbare regel onmiddellijk in te schakelen.

**Klein bedrijf.** De meeste moderne taalecosystemen omvatten capabele gratis statische-analysetooling; het inschakelen in CI met een redelijke standaardregelset vereist weinig investering. Focus op nieuwe bevindingen poorten in plaats van te proberen enige voorbestaande backlog allemaal tegelijk op te lossen.

**Groot bedrijf.** Valspositieventempo en ernsttriage doelbewust beheren wordt essentieel op deze schaal, omdat een slecht afgesteld gereedschap dat excessieve ruis genereert over dozijnen teams organisatiebreed genegeerd zal worden. Investeer in een toegewijde eigenaar voor de statische-analysetoolingconfiguratie zelf, regelafstemming behandelend als een doorlopende discipline in plaats van een eenmalige setuptaak.

**Overheid.** Statische-analysebevindingen, vooral beveiligingsgerelateerde, zijn vaak direct relevant voor compliance- en auditvereisten. Onderhoud een gedocumenteerd, auditeerbaar proces voor hoe bevindingen getrieerd, gefixt, of formeel afgewezen worden met een opgenomen rechtvaardiging, omdat deze documentatie zelf vaak is wat een externe auditor wil zien.

## Voorbeelden

**Groot bedrijf.** Het statische-analysedashboard van een softwarebedrijf had meer dan veertigduizend onopgeloste bevindingen opgebouwd over zijn codebase na verscheidene jaren zonder ernst-gewogen triage, een cijfer zo groot dat ingenieurs grotendeels gestopt waren helemaal naar het dashboard te kijken. Een herziene aanpak classificeerde bevindingen op ernst, vond dat minder dan tweehonderd echt kritiek waren, en poortte CI specifiek op nieuwe kritieke en hoog-ernstige bevindingen terwijl het de laag-ernstige backlog liet krimpen geleidelijk door normaal codeonderhoud. Binnen zes maanden waren kritieke bevindingen gedaald tot enkele cijfers, en, belangrijker, ingenieursenquêtedata toonde hernieuwd vertrouwen in de output van het gereedschap nu dat het een beheerbaar, echt handelbaar signaal aan de oppervlakte bracht in plaats van een overweldigende, genegeerde backlog.

**Overheid.** Het softwarevoorzieningsketen-beveiligingsbeleid van een defensie-agentschap vereiste statische-analysescannen met nul onopgeloste bevindingen voor elke release, een beleid dat, in de praktijk, ontwikkelteams geleid had om grote aantallen bevindingen te onderdrukken, inclusief enkele echte beveiligingsproblemen, simpelweg om releasedeadlines te halen onder een onwerkbare alles-of-niets-poort. Een herzien beleid vereiste nul nieuwe kritieke of hoog-ernstige bevindingen geïntroduceerd door enige gegeven release, gecombineerd met een gedocumenteerd, bijgehouden herstelplan en tijdlijn voor de legacy-backlog, kwartaal gereviewd door een beveiligingsgovernancecommissie. Deze praktische, gefaseerde aanpak herstelde zowel echte beveiligingsdoorlichting naar nieuwe code als maakte echte, meetbare vooruitgang tegen de legacy-backlog over achttien maanden, anders dan het onwerkbare vorige beleid dat meestal suppressie in plaats van echte fixes had geproduceerd.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van goed beheerde statische analyse is echte defecten en beveiligingsvulnerabiliteiten vangen voordat ze productie bereiken, tegen een kost veel lager dan de equivalente menselijke-review-inspanning zou vereisen voor dezelfde dekking. Het defensie-agentschapvoorbeeld hierboven toont de kost van dit verkeerd krijgen: een onwerkbaar, alles-of-niets-beleid had daadwerkelijk echte beveiligingsdoorlichting verminderd door suppressie te drijven, het omgekeerde van zijn intentie.

De totale eigendomskosten omvatten de tooling zelf, vaak gratis of laagkostend voor gewone taalecosystemen, en de doorlopende discipline van ernsttriage, valspositievenbeheer, en legacy-backlog-herstelplanning. Die doorlopende discipline, meer dan het gereedschap zelf, bepaalt of een statische-analyseprogramma echte, vertrouwde waarde levert of vervalt tot genegeerde ruis.

## Antipatronen en valkuilen

- **Ruwe bevindingstelling behandelen als de metriek:** vermengt triviale en ernstige problemen en is makkelijk te manipuleren door suppressie.
- **De hele historische backlog vereisen opgelost voordat enig nieuw werk doorgaat:** meestal onpraktisch en drijft suppressie in plaats van echte fixes.
- **Valspositieventempo negeren:** een onbeheerd ruisniveau leidt teams om de output van het gereedschap volledig uit te schakelen, inclusief echte bevindingen.
- **Stille, ongedocumenteerde suppressie van legitieme bevindingen:** erodeert het signaal van het gereedschap en laat geen auditspoor achter voor compliancedoeleinden.
- **Een statische-analysebevinding behandelen als een automatisch oordeel zonder menselijke review:** mist context die een gereedschap niet kan zien.
- **Bevindingen nooit cross-refereren met complexiteit- en hotspotdata:** mist het sterkere prioriteringssignaal dat convergent bewijs levert.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Statische analyse wordt niet gedraaid, of bevindingen accumuleren onbeheerd zonder ernsttriage of trendbijhouden.
- **Niveau 2, Ontwikkelen:** Enige statische analyse draait in CI, maar ernsttriage is inconsistent en valspositieventempo is onbeheerd.
- **Niveau 3, Standaardiseren:** Bevindingen zijn ernst-gewogen en CI poort op nieuwe kritieke en hoog-ernstige bevindingen, organisatiebreed.
- **Niveau 4, Beheren:** Valspositieventempo wordt actief afgestemd, legacy-backlog heeft een gedocumenteerd, getempood herstelplan, en afwijzingen zijn zichtbaar en gedocumenteerd.
- **Niveau 5, Orkestreren:** Statische-analysebevindingen, complexiteitsdata, en hotspotdata worden routinematig cross-gerefereerd om investering te prioriteren, en de organisatie kan wijzen naar specifieke, meetbare defect- of beveiligingsverbeteringen getraceerd naar het programma.

## Discussie-ideeën

1. Wat is onze huidige ernst-gewogen trend, en verbetert of verslechtert het?
2. Hoe groot is onze legacy-bevindingsbacklog, en hebben we een doelbewust plan om het te verminderen?
3. Wat is ons geschatte valspositieventempo voor onze luidruchtigste bevindingscategorie?
4. Vertrouwen ingenieurs op ons team momenteel onze statische-analyseoutput, of negeren ze het?
5. Waar convergeren statische-analysebevindingen met complexiteit- of hotspotdata in onze codebase?

## Belangrijkste inzichten

- Volg een **ernst-gewogen trend**, geen ruwe bevindingstelling, die triviale en ernstige problemen vermengt.
- Poort CI op **nieuwe geïntroduceerde bevindingen**, niet de hele historische backlog, om regressie te voorkomen zonder een onpraktische alles-tegelijk-fix te eisen.
- Beheer actief **valspositieventempo**; onbeheerde ruis vernietigt vertrouwen in het gereedschap en leidt tot bevindingen massaal genegeerd worden.
- Behandel bevindingen als een **prompt voor menselijke review**, met zichtbare, gedocumenteerde afwijzingen, geen automatisch oordeel of stille suppressie.
- Cross-refereer statische analyse met **complexiteit- en hotspotdata** (onderwerpen 4.1, 4.3) voor convergent, sterker prioriteringsbewijs.

## Bronnen en verder lezen

- *Static Program Analysis*, door Anders Møller en Michael I. Schwartzbach (de theoretische en praktische fundamenten van statische-analysetechnieken).
- De begeleiding van OWASP over static application security testing (SAST), deel van de bredere OWASP Foundation-bronnen over veilige softwareontwikkelingspraktijken.
- *Refactoring: Improving the Design of Existing Code*, door Martin Fowler (de code-smell-catalogus waarop veel statische-analysetooling put).
- *Working Effectively with Legacy Code*, door Michael Feathers (een legacy-backlog kwaliteitsproblemen beheren in een gevestigde codebase).
