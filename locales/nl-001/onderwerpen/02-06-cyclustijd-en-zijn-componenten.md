# 2.6 Cyclustijd en zijn componenten

## Overzicht en motivatie

**Cyclustijd** is de interne afbraak van de flowtijd (onderwerp 2.4) van een wijziging in zijn samenstellende ingenieursstadia: codeertijd, reviewtijd, testtijd, en deploymenttijd, soms verder gesplitst in opnametijd (hoe lang een wijziging wacht voordat iemand begint te werken erop) en actieve tijd (hoe lang het duurt zodra iemand dat doet). Waar flowtijd je een enkel cijfer geeft voor hoe lang een wijziging end-to-end duurt door de hele waardestroom, vertelt [cyclustijd](https://en.wikipedia.org/wiki/Cycle_time) je waar die tijd daadwerkelijk naartoe gaat zodra het ingenieurswerk bereikt, wat de diagnostische laag is onderwerp 2.4 beloofde onder zijn eigen samenvattingscijfer zit.

Dit onderscheid doet ertoe omdat "doorlooptijd is te lang" niet handelbaar is op zichzelf. Een team wiens doorlooptijd gedomineerd wordt door codeertijd heeft een andere interventie nodig dan een team wiens doorlooptijd gedomineerd wordt door een driedaagse reviewwachtrij, wat weer een andere interventie nodig heeft dan een team dat het meeste van zijn tijd verliest aan een onstabiele, langzame testsuite. Zonder cyclustijd-afbraak neigen teams ernaar te raden naar het knelpunt, en die gok is vaak genoeg verkeerd dat het fixen van het verkeerde stadium echte inspanning verspilt terwijl de daadwerkelijke beperking onaangeraakt blijft.

Voor grote teams is cyclustijd-afbraak wat een organisatiebrede doorlooptijdregressie verandert van een mysterie naar een specifiek, aanpakbaar probleem. Wanneer dozijnen teams gemeenschappelijke infrastructuur delen, kan een gedeeld reviewknelpunt of een gedeelde langzame CI-pijplijn de doorlooptijd van elk team identiek naar beneden trekken, en alleen een teamoverschrijdende cyclustijdvergelijking onthult die gedeelde grondoorzaak, in plaats van elk team onafhankelijk te laten raden naar zijn eigen lokale verklaring.

## Kernprincipes

- **Cyclustijd verklaart doorlooptijd; het vervangt het niet.** Rapporteer beide samen, met cyclustijd als het diagnostische en doorlooptijd als het samenvattende.
- **Wachttijd domineert meestal actieve tijd.** De meeste vertraging in softwarelevering komt van werk dat inactief zit in een wachtrij, niet van actieve inspanning (onderwerp 2.5 behandelt dit direct via flow-efficiëntie).
- **Breek af naar stadium voordat je een fix voorstelt.** Een fix gericht op het verkeerde stadium verspilt inspanning en kan een team demoraliseren dat gevraagd wordt "sneller te werken" wanneer het echte knelpunt elders was.
- **Een gedeeld knelpunt over veel teams is een platforminvesteringskans,** niet alleen een reeks individuele teamproblemen.
- **Cyclustijddata is blootgesteld aan dezelfde manipulatierisico's als flowtijd** (onderwerp 2.4): bewaak stadiumgrenzen die stilletjes verschuiven om een cijfer te vleien.

## Aanbevelingen

### Instrumenteer elke stadiumgrens expliciet

Breek de reis van een wijziging op in benoemde stadia met duidelijke, instrumenteerbare grenzen: coderen (eerste commit tot pull request geopend), opname (pull request geopend tot eerste review), review (eerste review tot goedkeuring), en deployment (goedkeuring tot productie). Vang tijdstempels voor elke overgang automatisch van versiebeheer- en CI/CD-gebeurtenissen, niet van zelfgerapporteerde stadiumtracking, het toepassend van hetzelfde instrumentatie-boven-zelfrapportage-principe van onderwerp 1.5.

### Scheid wachttijd van actieve tijd binnen elk stadium

Binnen review, bijvoorbeeld, onderscheid de tijd een pull request onaangeraakt zit wachtend op een reviewer om te beginnen (wachttijd) van de tijd een actieve reviewconversatie neemt zodra het begint (actieve tijd). Dit onderscheid onthult meestal dat de dominante kost wachtrij is, geen inspanning, wat richting een heel andere fix wijst (meer reviewercapaciteit, betere notificatie, kleinere pull requests om te reviewen) dan een fix gericht op reviewconversaties zelf sneller maken.

### Zoek naar een gedeeld knelpunt voordat je team voor team diagnosticeert

Wanneer meerdere teams hetzelfde stadium tonen als hun dominante vertraging, een langzame gedeelde CI-pijplijn, een overbelaste gedeelde reviewpool, een infrequente gedeelde releasetrein, is die gedeelde oorzaak een platformniveau-investeringskans, geen reeks ongerelateerde lokale problemen. Aggregeer cyclustijddata over teams specifiek om naar dit patroon te zoeken voordat je aanneemt dat het knelpunt van elk team unique is voor dat team.

### Gebruik cyclustijd om realistische, stadiumspecifieke verbeterdoelen te stellen

In plaats van een enkel "verminder doorlooptijd met 20%"-doel, wat een team geen begeleiding geeft over waar te focussen, gebruik cyclustijd-afbraak om een stadiumspecifiek doel te stellen: "verminder mediane reviewwachttijd van twee dagen naar vier uur." Een specifiek, stadiumgericht doel is zowel makkelijker voor een team om op te handelen als makkelijker om te verifiëren dat het daadwerkelijk bereikt werd door echte procesverandering in plaats van een ongerelateerde verschuiving elders.

### Bewaak stadiumgrensmanipulatie

Net zoals flowtijds start- en eindpunten kunnen afdrijven (onderwerp 2.4), kunnen individuele cyclustijd-stadiumgrenzen verschuiven op manieren die het cijfer van een specifiek stadium vleien zonder enige echte verbetering, bijvoorbeeld, een review als "gestart" markeren het moment een reviewer toegewezen wordt in plaats van wanneer ze daadwerkelijk beginnen de wijziging te lezen. Audit periodiek stadiumgrensinstrumentatie tegen zijn gedocumenteerde definitie.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Grofkorrelige cyclustijd (twee of drie stadia) | Simpel te instrumenteren en uit te leggen | Kan het daadwerkelijke knelpunt niet precies genoeg aanwijzen om op te handelen |
| Fijnkorrelige cyclustijd (veel stadia, wacht-versus-actief-splitsing) | Precieze diagnose, handelbare stadiumspecifieke doelen | Meer instrumentatie-inspanning; meer cijfers om te onderhouden en uit te leggen |
| Team-voor-team-cyclustijdreview | Afgestemd op elk teams daadwerkelijke werkstroom | Kan een gedeeld, teamoverschrijdend knelpunt missen dat zich verschuilt achter gelijkaardige lokale cijfers |
| Teamoverschrijdend-geaggregeerde cyclustijdreview | Onthult gedeelde platformniveau-knelpunten | Vereist gestandaardiseerde stadiumdefinities over teams om betekenisvol te zijn |

De centrale spanning is **diagnostische precisie versus instrumentatiekost**. Fijnkorreligere cyclustijdtracking geeft een handelbaarder diagnose maar kost meer om te bouwen en te onderhouden, en voegt meer cijfers toe een team moet begrijpen en vertrouwen. Los de spanning op door grof te beginnen (coderen, review, deployment) en fijnere splitsingen toe te voegen, wacht versus actieve tijd binnen een specifiek stadium, alleen zodra dat stadium bevestigd is als een echt, terugkerend knelpunt de extra instrumentatie-investering waard.

## Vragen om met je team te bespreken

1. **Als doorlooptijd vandaag regresseerde, zouden we binnen een uur kunnen zeggen welk specifiek stadium verantwoordelijk was, met data in plaats van giswerk?** Dit is de kerntest of je cyclustijdinstrumentatie daadwerkelijk zijn diagnostische doel dient. Als het eerlijke antwoord nee is, is dat gat de moeite waard te sluiten voordat de volgende regressie gebeurt.

2. **Binnen ons dominante knelpuntstadium, hoeveel van de vertraging is wachttijd versus actieve tijd?** De meeste teams nemen aan dat actieve inspanning het knelpunt is voordat ze controleren, wanneer wachtrij meestal de grotere kost is. Trek de daadwerkelijke splitsing voor je langzaamste stadium en zie of de aanname standhoudt.

3. **Delen meerdere teams hetzelfde dominante knelpuntstadium, suggererend een platformniveau-fix in plaats van een teamniveau-een?** Aggregeer je cyclustijddata over teams en zoek expliciet naar dit patroon voordat je aanneemt dat elk teams traagheid lokaal veroorzaakt is.

4. **Hebben we stadiumspecifieke verbeterdoelen gesteld, of alleen een enkel algemeen doorlooptijddoel zonder begeleiding over waar te focussen?** Een vaag doel laat een team raden waar inspanning te investeren; een stadiumspecifiek een niet. Controleer je huidige doelen tegen dit onderscheid.

5. **Is enige cyclustijd-stadiumgrens in onze instrumentatie afgedreven van zijn gedocumenteerde definitie over tijd?** Stadiumgrenzen zijn blootgesteld aan dezelfde definitionele drift als flowtijd zelf (onderwerp 2.4). Audit een steekproef van recente stadiumovergangsgebeurtenissen tegen de geschreven definitie.

6. **Hoe toont een reviewzware cultuur versus een vertrouwenszware cultuur zich anders in onze cyclustijddata?** Een team met zeer grondige, meerronde review zal langere reviewstadiumtijd tonen dan een team dat enkele-goedkeuring-merges vertrouwt; bespreek of je huidige balans een bewuste keuze reflecteert of een onbevraagde standaard.

## Sectorperspectief

**Startup.** Cyclustijd wordt meestal gedomineerd door codeertijd in plaats van review- of deploymentstadia, simpelweg omdat proces minimaal is. Zodra het team groeit voorbij een handvol ingenieurs, begin te letten op reviewwachttijd specifiek, omdat dat meestal het eerste stadium is om te vertragen naarmate meer mensen's werk moet passeren door minder beschikbare reviewers.

**Klein bedrijf.** Basis versiebeheerplatformanalytics tonen meestal genoeg stadiumniveau-timing (tijd tot eerste review, tijd tot merge) zonder aangepaste instrumentatie. Focus op het reviewstadium eerst, omdat het het meest voorkomende vroege knelpunt is en het makkelijkste te fixen met een kleine procesverandering zoals een reviewerrotatie.

**Groot bedrijf.** Gedeelde knelpunten over dozijnen teams zijn gewoon en hoog-invloedrijk om te vinden: een enkele overbelaste gedeelde CI-wachtrij of een verplichte centrale reviewstap kan stilletjes doorlooptijd organisatiebreed belasten. Investeer specifiek in teamoverschrijdende cyclustijd-aggregatie om deze gedeelde beperkingen aan de oppervlakte te brengen in plaats van elk team onafhankelijk te laten diagnosticeren.

**Overheid.** Cyclustijddata is een sterk, concreet gereedschap voor het rechtvaardigen van procesmodernisering voor sceptische belanghebbenden, omdat "reviewwachttijd gemiddeld vier dagen door een enkele knelpunt-goedkeuringsrol" een veel overtuigender, specifiekere zaak voor investering is dan een abstracte "ons proces is traag"-claim.

## Voorbeelden

**Groot bedrijf.** Het ingenieursleiderschap van een cloud-infrastructuurbedrijf merkte doorlooptijd die omhoog kroop over bijna elk team simultaan. Teamoverschrijdende cyclustijd-aggregatie onthulde dat reviewwachttijd, niet actieve reviewtijd, de dominante en gedeelde oorzaak was: een klein, gecentraliseerd beveiligingsreviewteam was een knelpunt geworden naarmate het aantal teams dat hun goedkeuring vereiste sneller groeide dan het team zelf. Een breder pool beveiligingsgecertificeerde reviewers uitbreiden en trainen, in plaats van individuele teams te vragen om op de een of andere manier sneller te coderen of testen, loste het gedeelde knelpunt op en bracht doorlooptijd terug omlaag over de hele linie binnen één kwartaal.

**Overheid.** Het digitale-dienstenteam van een staatsregering stond onder druk om doorlooptijd te verminderen, en reageerde initieel door ingenieurs te vragen sneller te werken, een natuurlijk maar uiteindelijk onnuttig instinct. Cyclustijd-afbraak liet zien dat actieve codeertijd nauwelijks veranderd was jaar over jaar; bijna de hele regressie kwam van een groeiende wachtrij in een verplicht architectuurreviewstadium geïntroduceerd achttien maanden eerder als een compliancemaatregel. Het team herontwierp die review naar een lichter, risico-ingedeeld proces voor laag-risico-wijzigingen, reviewwachttijd substantieel verkortend terwijl volle reviewrigor behouden werd voor echt hoog-risico-wijzigingen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van cyclustijd-afbraak is gerichte, effectieve investering: een organisatie die precies weet welk stadium het knelpunt is, kan dat specifieke stadium fixen in plaats van inspanning dun te spreiden over een heel proces in de hoop dat iets helpt. Het beveiligingsreviewvoorbeeld hierboven is typisch: een precies gerichte fix, een specifieke knelpuntresource uitbreiden, loste een organisatiebreed probleem veel goedkoper op dan een breed, ongericht "versnel levering"-initiatief zou hebben gedaan.

De totale eigendomskosten zijn de instrumentatie-inspanning om stadiumniveau-tijdstempels betrouwbaar te vangen en de lopende discipline van periodiek stadiumgrenzen auditen voor drift. Die kost is de moeite waard omdat het alternatief, raden naar knelpunten en het verkeerde stadium fixen, veel meer ingenieursinspanning verspilt over tijd dan de instrumentatie zelf kost.

## Antipatronen en valkuilen

- **Reageren op een doorlooptijdregressie zonder cyclustijddiagnose:** leidt vaak tot het fixen van het verkeerde stadium.
- **Aannemen dat actieve inspanning, niet wachttijd, de dominante kost is:** meestal verkeerd; wachtrij domineert in de meeste echte leveringspijplijnen (onderwerp 2.5).
- **Een gedeeld, teamoverschrijdend knelpunt missen door cyclustijd alleen team voor team te reviewen:** laat een hoog-invloedrijke platformfix onontdekt.
- **Een vaag algemeen doorlooptijddoel stellen zonder stadiumspecifieke begeleiding:** laat teams raden waar inspanning te focussen.
- **Stadiumgrens-definitionele drift:** vleit het cijfer van een specifiek stadium zonder echte verbetering.
- **Elk mogelijk fijnkorrelig stadium instrumenteren voordat bevestigd is dat enige van hen een echt knelpunt is:** verspilt instrumentatie-inspanning op detail dat nog geen beslissing informeert.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Cyclustijd wordt helemaal niet afgebroken; teams raden naar knelpunten wanneer doorlooptijd regresseert.
- **Niveau 2, Ontwikkelen:** Sommige teams volgen grofkorrelige stadiumtiming informeel, maar er is geen consistente instrumentatie of teamoverschrijdende vergelijking.
- **Niveau 3, Standaardiseren:** Stadiumgrenzen zijn consistent geïnstrumenteerd organisatiebreed, met wachttijd gescheiden van actieve tijd in de dominante knelpuntstadia.
- **Niveau 4, Beheren:** Teamoverschrijdende cyclustijd-aggregatie brengt actief gedeelde knelpunten aan de oppervlakte; stadiumspecifieke verbeterdoelen vervangen vage algemene doorlooptijddoelen.
- **Niveau 5, Orkestreren:** Cyclustijddata drijft direct platforminvesteringsprioritering, en de organisatie kan wijzen naar specifieke, gerichte fixes, een uitgebreide reviewpool, een snellere gedeelde pijplijn, die doorlooptijd meetbaar verbeterden over veel teams op een keer.

## Discussie-ideeën

1. Wat is ons huidige dominante knelpuntstadium, en hoe zeker zijn we van dat antwoord?
2. Hoeveel van de tijd van dat knelpuntstadium is wachttijd versus actieve tijd?
3. Delen enige van onze teams hetzelfde knelpunt, suggererend een platformniveau-fix?
4. Wanneer stelden we laatst een stadiumspecifiek, in plaats van algemeen, leveringsverbeterdoel?
5. Is een stadiumgrensdefinitie in onze tooling ooit veranderd zonder documentatie?

## Belangrijkste inzichten

- Cyclustijd **breekt flowtijd af** in ingenieursstadia, coderen, review, testen, deployment, en is de diagnostische laag onder dat samenvattingscijfer.
- Scheid **wachttijd van actieve tijd** binnen elk stadium; wachtrij domineert meestal actieve inspanning (onderwerp 2.5).
- Zoek naar **gedeelde knelpunten over teams** voordat je aanneemt dat een vertraging teamspecifiek is; een gedeelde oorzaak is vaak een platforminvesteringskans.
- Stel **stadiumspecifieke verbeterdoelen**, geen vage algemene doelen, zodat teams precies weten waar te focussen.
- Stadiumgrenzen zijn blootgesteld aan hetzelfde **definitionele drift**-risico als flowtijd zelf; audit ze periodiek.
- Onderwerp 2.7 geeft de onderliggende wiskunde, de Wet van Little, voor waarom onderhanden werk en cyclustijd samen bewegen.

## Bronnen en verder lezen

- *The Principles of Product Development Flow*, door Donald G. Reinertsen (wachtrijtheorie en batchgrootte-redenering onderliggend aan cyclustijdanalyse).
- *Actionable Agile Metrics for Predictability*, door Daniel S. Vacanti (cyclustijd- en flowgebaseerde meting voor softwarelevering).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (doorlooptijd en zijn relatie tot leveringsprestatie).
- *The Goal*, door Eliyahu M. Goldratt (begrenzingstheorie, en het principe van het echte knelpunt vinden en fixen in plaats van overal te optimaliseren).
