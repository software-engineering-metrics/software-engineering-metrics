# 4.1 Codecomplexiteitsmetrieken

## Overzicht en motivatie

**[Cyclomatische complexiteit](https://en.wikipedia.org/wiki/Cyclomatic_complexity)**, geïntroduceerd door Thomas J. McCabe in 1976, telt het aantal onafhankelijke paden door de controleflow van een stuk code: elke `if`, lus, en vertakking voegt toe aan de telling. Het blijft de meest gebruikte codecomplexiteitsmetriek bijna vijftig jaar later, naast verwanten zoals cognitieve complexiteit (die geneste en moeilijk-te-volgen-controleflow zwaarder weegt dan McCabes originele lineaire telling) en nestdiepte. Deze metrieken delen een echt, gevalideerd inzicht: code met meer onafhankelijke paden erdoorheen is moeilijker volledig te testen, moeilijker te doordenken, en, in decennia empirisch onderzoek, meetbaar waarschijnlijker om defecten te bevatten.

Dit hoofdstuk behandelt dat inzicht met echt respect terwijl het ook zijn grenzen met gelijke ernst behandelt. Complexiteitsmetrieken meten een specifieke eigenschap van code, en een codebase kan simpel zijn volgens elke complexiteitsmetriek terwijl het nog steeds slecht ontworpen, slecht benoemd, of conceptueel incoherent is op manieren die geen vertakkingstelalgoritme kan detecteren. Omgekeerd vereisen sommige onherleidbaar complexe problemen echt complexe code om correct op te lossen, en een team onder druk om een complexiteitsscore te minimaliseren kan code produceren die goed scoort terwijl het daadwerkelijk moeilijker te begrijpen is, essentiële complexiteit verspreidend over meer bestanden en lagen van indirectie in plaats van het te verminderen.

Voor grote teams verdienen complexiteitsmetrieken hun plaats als een triagegereedschap: een manier om, onder duizenden bestanden, de kleine subset te vinden die het waarschijnlijkst een nadere blik zal belonen, niet als een zelfstandig oordeel over codekwaliteit. Grote bedrijven en overheidsorganisaties die codebases onderhouden te groot voor enig individu om volledig te hebben gelezen hangen af van deze triagefunctie om schaarse refactoring- en reviewinspanning te richten waar het het meeste goed zal doen.

## Kernprincipes

- **Complexiteitsmetrieken voorspellen test- en defectmoeilijkheid; ze meten kwaliteit niet direct.** Behandel ze als een input, niet een oordeel.
- **Een complexiteitsscore is blootgesteld aan manipulatie door verduistering, niet alleen echte vereenvoudiging.** Complexiteit splitsen over meer bestanden kan de score verlagen zonder de code daadwerkelijk makkelijker te begrijpen te maken.
- **Sommige complexiteit is essentieel, niet incidenteel.** Een echt moeilijk probleem kan echt complexe code vereisen; het doel is incidentele complexiteit minimaliseren, niet alle complexiteit lukraak elimineren.
- **Gebruik complexiteitsmetrieken voor triage, niet als een individuele of teamscorekaart.** Ze wijzen waar te kijken, niet wie te blameren.
- **Trend en uitschieters doen er meer toe dan enige absolute drempel.** Een stijgende trend of een extreme uitschieter is handelbaarder dan een enkel teambreed gemiddelde.

## Aanbevelingen

### Gebruik complexiteitsmetrieken om review- en refactoringinspanning te triageren

Draai complexiteitsanalyse over de codebase en gebruik de resultaten om te prioriteren waar een nadere menselijke review of een refactoringinvestering het meest zou lonen: functies of bestanden die ver boven het typische bereik van de codebase scoren zijn de hoogste-waarde-plekken om eerst naar te kijken. Dit triagegebruik, vinden waar te kijken, is de meest verdedigbare en waardevolle toepassing van complexiteitsmetrieken, veel meer dan ze gebruiken als een absolute pass/fail-poort.

### Stel drempels relatief aan je eigen codebase vast, niet een universeel cijfer

Absolute complexiteitsdrempels onkritisch geleend van sector-conventie (een complexiteitsscore van tien is een gewoonlijk geciteerde vuistregel) kunnen ofwel te soepel of te strikt zijn afhankelijk van je domein: een parser of een regelmotor kan legitiem hogere basiscomplexiteit hebben dan een typische CRUD-dienst. Calibreer je eigen drempels tegen de daadwerkelijke verdeling van je codebase, en behandel een drempeloverschrijding als een prompt om nader te kijken, geen automatische buildfout, tenzij je team doelbewust dat striktere beleid gekozen heeft met volle bewustheid van zijn afwegingen.

### Let op manipulatie door decompositie zonder echte vereenvoudiging

De meest gewone manier waarop complexiteitsscores gemanipuleerd worden is het substitutiepatroon van hoofdstuk 1.2 toegepast op deze specifieke metriek: een echt complexe functie splitsen in verscheidene kleinere functies die individueel goed scoren, terwijl het algehele systeem net zo moeilijk te begrijpen blijft, of soms moeilijker wordt, omdat de logica nu verspreid is over meer bestanden met meer indirectie ertussen. Koppel complexiteitsmetrieken met een kwalitatieve review van of decompositie de code echt verduidelijkte, of het de complexiteit alleen verplaatste naar waar de metriek het niet langer kon zien.

### Onderscheid essentiële complexiteit van incidentele complexiteit voordat je reageert

Voordat je een hoge complexiteitsscore behandelt als een probleem om te fixen, vraag of het onderliggende probleem echt zoveel onafhankelijke paden vereist, belastingcodeberekeningslogica heeft legitiem veel vertakkingen, bijvoorbeeld, of of de complexiteit komt van vermijdbare oorzaken: diep geneste condities die afgevlakt zouden kunnen worden, gedupliceerde logica die geconsolideerd zou kunnen worden, of onduidelijke verantwoordelijkheidsgrenzen die herverdeeld zouden kunnen worden. Alleen de tweede categorie is een echt kwaliteitsprobleem dat deze metriek je zou moeten aandrijven om te fixen.

### Volg trend en uitschieters, niet alleen een momentopname-gemiddelde

Een codebase-breed gemiddelde complexiteitsscore die lichtjes beweegt is zelden op zichzelf handelbaar; een specifiek bestand's complexiteit die scherp stijgt over verscheidene wijzigingen, of een klein aantal extreme uitschieters in een anders goed-gedragende codebase, zijn veel nuttigere signalen. Volg zowel de trend over tijd als de uitschieterstaart, en gebruik ze om een specifiek, gericht onderzoek te triggeren in plaats van een breed, ongericht complexiteitsverminderingsinitiatief.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Absolute universele drempel | Simpel, consistent, makkelijk te automatiseren | Negeert legitieme domeinverschillen; kan gemanipuleerd worden door decompositie |
| Codebase-relatieve drempel | Beter gecalibreerd aan daadwerkelijke context | Vereist meer setup en periodieke herkalibratie |
| Complexiteit als een geautomatiseerde buildpoort | Dwingt consistentie af zonder menselijke-review-overhead | Kan legitiem complexe maar goed ontworpen code blokkeren, of verduisterde decompositie belonen |
| Complexiteit als een triagesignaal voor menselijke review | Vangt echte kwaliteitsproblemen die decompositie alleen zou missen | Vereist meer menselijke reviewtijd dan een volledig geautomatiseerde poort |

De centrale spanning is **automatisering versus oordeel**. Een volledig geautomatiseerde complexiteitspoort is goedkoop om af te dwingen en consistent, maar het kan zowel legitiem complexe, goed ontworpen code blokkeren als oppervlakkige decompositie belonen die de score manipuleert zonder echt iets te vereenvoudigen. Los de spanning op door geautomatiseerde complexiteitsanalyse te gebruiken om kandidaten voor review aan de oppervlakte te brengen, en het daadwerkelijke oordeel, is deze complexiteit essentieel of incidenteel, verduidelijkte deze refactor echt of verplaatste het alleen de complexiteit, te reserveren voor een menselijke reviewer in plaats van een harde geautomatiseerde poort alleen.

## Vragen om met je team te bespreken

1. **Zijn onze complexiteitsdrempels gecalibreerd aan de daadwerkelijke verdeling van onze eigen codebase, of onkritisch geleend van een generieke sector-conventie?** Trek de echte complexiteitsverdeling van je codebase en check of je huidige drempels zin hebben ertegen, in plaats van aan te nemen dat een gewoonlijk geciteerd cijfer universeel toepast op je domein.

2. **Hebben we ooit gezien dat een functie gesplitst werd in verscheidene kleinere zonder dat de resulterende code daadwerkelijk makkelijker te begrijpen werd?** Dit is het duidelijkste teken van het decompositiemanipulatiepatroon waar dit hoofdstuk tegen waarschuwt. Kijk naar een recente refactor primair gemotiveerd door een complexiteitsscore en beoordeel eerlijk of het echte begrijpbaarheid verbeterde.

3. **Waar in onze codebase is complexiteit essentieel voor het probleem, en waar is het incidenteel en fixbaar?** Loop je hoogste-complexiteit-uitschieters door en sorteer ze expliciet in deze twee categorieën, omdat alleen de tweede categorie een echt, handelbaar kwaliteitsprobleem representeert.

4. **Gebruiken we complexiteitsmetrieken om reviewinspanning te triageren, of als een harde geautomatiseerde poort zonder menselijk oordeel betrokken?** Bespreek of je huidige handhavingsaanpak ruimte laat voor het essentieel-versus-incidenteel-onderscheid dat dit hoofdstuk aanbeveelt, of of het elke overschrijding identiek behandelt ongeacht context.

5. **Is een complexiteitsscore ooit gebruikt, zelfs informeel, om de werkkwaliteit van een individuele ingenieur te beoordelen?** Dit riskeert dezelfde individuele-evaluatie-valkuil waar hoofdstuk 3.4 tegen waarschuwt voor activiteitsmetrieken, hier toegepast op codemetrieken in plaats daarvan, en het nodigt dezelfde manipulatiereactie uit.

6. **Hoe ziet onze complexiteitstrend eruit over het laatste jaar voor onze meest kritieke, meest frequent gewijzigde bestanden?** Combineer dit met de churn- en hotspotanalyse van hoofdstuk 4.3, omdat een bestand dat zowel sterk complex als frequent gewijzigd is aandacht verdient ver voor een dat complex maar zelden aangeraakt is.

## Sectorperspectief

**Startup.** Complexiteitsmetrieken zijn meestal minder urgent op deze schaal; codebase-grootte is klein genoeg dat informele vertrouwdheid vaak formele meting vervangt. De gewoonte de moeite waard om vroeg te adopteren is simpelweg occasioneel een complexiteitsscan draaien om een specifiek bestand stilletjes onbeheerbaar wordend te vangen voordat het team te groot gegroeid is om het informeel op te merken.

**Klein bedrijf.** De meeste moderne statische-analysetools rapporteren complexiteitsmetrieken als deel van een bredere, gratis of laagkostende lintingsetup; gebruik de output als een periodiek triagesignaal in plaats van te investeren in toegewijde tooling. Focus aandacht op je meest frequent gewijzigde bestanden eerst.

**Groot bedrijf.** Complexiteitsmetrieken op schaal zijn het meest waardevol gecombineerd met churndata (hoofdstuk 4.3) om refactoringinvestering te prioriteren over een codebase te groot voor enig individu om handmatig te overzien. Calibreer drempels per dienst of domein in plaats van een organisatiebreed cijfer toe te passen, omdat legitieme complexiteit significant varieert over verschillende soorten systemen.

**Overheid.** Langlevende overheidssystemen stapelen vaak geleidelijk complexiteit op over jaren of decennia van incrementele vereistewijzigingen, en een complexiteitsaudit kan een overtuigend, concreet gereedschap zijn om moderniserings- of refactoringinvestering te rechtvaardigen aan belanghebbenden die het systeem anders simpelweg als "werkend" zouden kunnen zien en daarom niet de moeite waard om in te investeren.

## Voorbeelden

**Groot bedrijf.** Een betalingsverwerkingsbedrijf draaide voor de eerste keer een codebase-brede complexiteitsaudit en vond een enkele transactievalidatiefunctie met een cyclomatische complexiteitsscore meer dan tien keer de mediaan van de codebase. Onderzoek vond dat de complexiteit bijna volledig incidenteel was: jaren incrementeel toegevoegde speciale-geval-afhandeling voor specifieke betalingsproviders waren opgestapeld in diep geneste condities die geherstructureerd konden worden in een schoner strategiepatroon dat providerspecifieke logica scheidde. De refactor, direct geprioriteerd omdat de complexiteitsaudit het identificeerde als het enkele hoogste-waarde-doel in de codebase, verminderde de complexiteitsscore van de functie met meer dan 80% en, belangrijker, verminderde het defecttempo in dat specifieke codepad meetbaar over de volgende twee kwartalen.

**Overheid.** De decennia-oude uitkeringsberekeningsmotor van een belastingdienst scoorde extreem hoog op complexiteitsmetrieken over bijna elke functie, wat een initiële aanname triggerde dat het hele systeem een grondige herschrijving nodig had. Een nadere, functie-voor-functie-review die essentiële van incidentele complexiteit onderscheidde vond dat de meeste complexiteit echt de onderliggende wettelijke regels reflecteerde, die daadwerkelijk zoveel legitieme vertakkingen en speciale gevallen hadden opgelegd door wetgeving, terwijl een kleinere subset kwam van vermijdbare duplicatie over gelijkaardige berekeningspaden. Het team richtte zich alleen op de incidentele-complexiteit-subset voor refactoring, een duurdere, riskantere volledige herschrijving vermijdend terwijl het nog steeds betekenisvol de echt problematischste gebieden van het systeem verbeterde.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van complexiteitsmetrieken goed gebruiken is gerichte, hoog-waarde-refactoringinvestering: het betalingsbedrijfvoorbeeld hierboven toont een enkele, goed gerichte fix, geïdentificeerd via complexiteitsanalyse, die defecten meetbaar verminderde in precies het hoogste-risico-codepad, tegen een fractie van de kost die een breed, ongericht refactoringinitiatief vereist zou hebben.

De totale eigendomskosten zijn laag: de meeste moderne ontwikkeltoolchains berekenen complexiteitsmetrieken automatisch als deel van statische analyse (hoofdstuk 4.4), en de echte investering is de menselijke-oordeel-tijd om resultaten correct te interpreteren, essentiële van incidentele complexiteit onderscheiden en decompositiemanipulatie vangen, in plaats van enige significante nieuwe toolingkost.

## Antipatronen en valkuilen

- **Een complexiteitsscore behandelen als een direct kwaliteitsoordeel:** het meet een specifieke eigenschap, niet algehele codekwaliteit.
- **Een functie splitsen om de score te manipuleren zonder echte vereenvoudiging:** het decompositiemanipulatiepatroon dat dit hoofdstuk specifiek benoemt.
- **Een universele drempel toepassen zonder te calibreren aan je eigen codebase:** produceert ofwel te-soepele of te-strikte handhaving afhankelijk van domein.
- **Complexiteitsmetrieken gebruiken om ingenieurs individueel te evalueren:** nodigt manipulatie uit en past een metriek verkeerd toe bedoeld voor triage, niet oordeel.
- **Alle complexiteit behandelen als even fixbaar:** essentiële complexiteit van een echt moeilijk probleem is geen defect om te elimineren.
- **Trend en uitschieters negeren in het voordeel van een vlak, codebase-breed gemiddelde:** mist het meest handelbare signaal dat deze metriekfamilie levert.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Complexiteit wordt niet gemeten, of wordt gemeten met een ononderzochte, generieke universele drempel onkritisch toegepast.
- **Niveau 2, Ontwikkelen:** Complexiteitsmetrieken worden verzameld maar er wordt zelden op gehandeld, en er wordt geen onderscheid gemaakt tussen essentiële en incidentele complexiteit.
- **Niveau 3, Standaardiseren:** Drempels zijn gecalibreerd aan de eigen verdeling van de codebase, en complexiteitsmetrieken drijven consistent review- en refactoringtriage organisatiebreed.
- **Niveau 4, Beheren:** Complexiteitstrend en uitschieters worden actief bewaakt en gecombineerd met churndata (hoofdstuk 4.3) om refactoringinvestering te prioriteren; decompositiemanipulatie wordt actief in de gaten gehouden.
- **Niveau 5, Orkestreren:** De organisatie kan wijzen naar specifieke, meetbare defecttempo-verbeteringen direct getraceerd naar complexiteit-geïnformeerde refactoringinvestering, en complexiteitsdata is een routinematige, vertrouwde input voor ingenieursinvesteringsbeslissingen.

## Discussie-ideeën

1. Wat is onze enkele meest complexe functie of bestand, en is zijn complexiteit essentieel of incidenteel?
2. Hebben we ooit een complexiteitsscore gemanipuleerd door decompositie zonder echte vereenvoudiging?
3. Zijn onze drempels gecalibreerd aan onze eigen codebase, of onkritisch geleend?
4. Waar overlapt hoge complexiteit met hoge churn in onze codebase nu?
5. Heeft complexiteitsdata ooit een refactoringinvesteringsbeslissing geïnformeerd, of zit het ongebruikt?

## Belangrijkste inzichten

- Complexiteitsmetrieken zoals **cyclomatische complexiteit** voorspellen test- en defectmoeilijkheid; ze meten algehele codekwaliteit niet direct.
- Onderscheid **essentiële complexiteit** (van een echt moeilijk probleem) van **incidentele complexiteit** (vermijdbaar door beter ontwerp) voordat je reageert op een hoge score.
- Let op **decompositiemanipulatie**: code splitsen om een score te verlagen zonder echt iets te vereenvoudigen.
- Gebruik complexiteitsmetrieken voor **triage**, menselijke review- en refactoringinspanning richtend, niet als een individuele scorekaart of een rigide geautomatiseerde poort.
- Calibreer drempels aan **de verdeling van je eigen codebase**, en volg **trend en uitschieters**, niet alleen een vlak gemiddelde.

## Bronnen en verder lezen

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): het originele cyclomatische-complexiteitspaper.
- *Code Complete*, door Steve McConnell (praktische begeleiding bij het beheren van complexiteit in softwareconstructie).
- *Working Effectively with Legacy Code*, door Michael Feathers (technieken voor veilig complexiteit verminderen in bestaande, moeilijk-te-wijzigen code).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): de cognitieve-complexiteitsmetriek en zijn onderscheid van cyclomatische complexiteit.
