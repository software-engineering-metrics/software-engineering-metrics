# 1.3 Uitkomsten boven output: kiezen wat je meet

## Overzicht en motivatie

Elke ingenieursmetriek valt in een van drie categorieën, en ze verwarren is het tweede meest voorkomende faalpatroon in dit boek, na [Goodharts wet](https://en.wikipedia.org/wiki/Goodhart%27s_law) helemaal negeren. Een **inputmetriek** meet besteedde inspanning: ingenieursuren, uitgegeven euro's, toegezegde story points. Een **outputmetriek** meet wat het systeem produceerde: geleverde functies, samengevoegde pull requests, gesloten tickets. Een **uitkomstmetriek** meet de verandering die daadwerkelijk ertoe deed: behouden omzet, vermeden incidenten, bespaarde tijd voor een gebruiker. Teams neigen naar inputs en outputs omdat ze makkelijk te tellen zijn en volledig binnen de controle van een team liggen. De waarde leeft, bijna altijd, in uitkomsten, die langzamer verschijnen, bullriger zijn om te meten, en moeilijker toe te schrijven aan het werk van één team.

Dit onderwerp gaat over het bewust weerstaan van die zwaartekracht. Een dashboard volledig gebouwd uit inputs en outputs kan indrukwekkend druk uitzien terwijl het helemaal geen echte waarde produceert: een team kan dozijnen functies leveren die niemand gebruikt, honderden tickets sluiten die een week later heropenen, of elke story-point-schatting raken terwijl de daadwerkelijke uitkomsten van het product, retentie, tevredenheid, omzet, plat blijven of dalen. Niets van die drukte verschijnt als een probleem op een alleen-output-dashboard, omdat alleen-output-dashboards niet gebouwd zijn om het te zien.

Op grote-bedrijf- en overheidsschaal bepaalt dit onderscheid of leiderschap het verschil kan zien tussen een team dat productief is en een team dat alleen actief is. Een divisie kan jarenlang uitstekende outputcijfers posten, geleverde functies, gesloten sprints, terwijl de uitkomst waar een financier of een parlement daadwerkelijk om geeft, behouden omzet, verminderde burgerwachttijden, stilletjes eronder eroderen. "We hebben de roadmap geleverd" is niet dezelfde claim als "de roadmap maakte dingen beter," en alleen een uitkomst-gewogen metriekenset kan de twee uit elkaar houden.

## Kernprincipes

- **Inputs en outputs zijn proxies; uitkomsten zijn het ding zelf.** Weeg je metriekenset richting uitkomsten waar je ze kunt bereiken.
- **Gemak van meting is geen reden om iets te meten.** De makkelijkst-te-tellen dingen zijn meestal inputs en outputs, niet omdat ze het meest ertoe doen maar omdat ze mechanisch simpel te vangen zijn.
- **Toeschrijving wordt moeilijker naarmate je richting uitkomsten beweegt.** Accepteer die afweging bewust in plaats van terug te trekken naar outputs omdat uitkomsten moeilijker toe te schrijven zijn.
- **Een team kan zijn inputs en outputs controleren maar uitkomsten alleen beïnvloeden.** Ontwerp verantwoordelijkheid dienovereenkomstig: houd teams verantwoordelijk voor wat ze daadwerkelijk kunnen controleren, en volg uitkomsten als gedeelde, teamoverschrijdende signalen.
- **Een enkele noorderster-uitkomst, met een kleine set drijvers, verslaat een muur van outputtegels.** Dekking zou moeten komen van structuur, niet van pure dashboardvolume.

## Aanbevelingen

### Classificeer elke metriek voordat je hem aanneemt

Voor elke kandidaat-metriek, vraag welke van de drie categorieën hij in valt. "Samengevoegde pull requests per week" is een output. "Percentage samengevoegde pull requests dat een productie-incident veroorzaakte binnen een week" ligt dichter bij een uitkomst, omdat het een gevolg meet in plaats van een volume. Deze classificatie duurt dertig seconden en zou verplicht moeten zijn voordat een metriek wordt toegevoegd aan een team- of organisatiedashboard, omdat het de snelste manier is om een dashboard te vangen dat stilletjes vol raakt met makkelijk-te-tellen outputs terwijl het gelooft dat het waarde meet.

### Bouw een metriekboom onder een enkele uitkomst

Houd geen platte lijst bij. Rangschik metrieken als een **metriekboom** (soms een KPI-boom genoemd): een topuitkomstmetriek afgebroken in de drijvers die hem causaal of wiskundig voeden, tot de operationele output- en inputmaten die individuele teams daadwerkelijk bezitten. Wanneer de topuitkomst beweegt, vertelt de boom je welke lager-niveau-drijver te onderzoeken, veranderend "het cijfer is gedaald" in "deze specifieke stap in de pijplijn is de oorzaak." Benoem een enkele **noorderstermetriek** aan de top waar je domein er een ondersteunt: de maat die het beste de geleverde waarde vangt, deploymentfrequentie gepaard met wijzigingsfoutpercentage voor een platformteam, of wekelijks actief gebruik van een kernfunctie voor een productteam.

### Weeg uitkomsten in review, niet alleen op het dashboard

Een metriekboom is alleen zo goed als hoe hij in de praktijk gebruikt wordt. In sprintreviews, kwartaalbedrijfsreviews, en leiderschapsupdates, leid met het uitkomstniveau-cijfer en gebruik de output- en inputmetrieken erbeneden alleen om beweging te verklaren, niet om het te vervangen. Een team dat rapporteert "we sloten 40 tickets deze sprint" zonder enige uitkomstcontext heeft je niets verteld over of het werk ertoe deed; een team dat rapporteert "ontsnapte fouten daalden 30% en hier is de testinvestering die het dreef" heeft je iets echts verteld.

### Accepteer langzamere feedback voor uitkomstmetrieken, en paar ze met snellere leidende indicatoren

Uitkomstmetrieken lopen vaak achter: ze bevestigen een resultaat nadat genoeg tijd is verstreken om zeker te zijn. Die vertraging is een echte kost, omdat het leren vertraagt. Paar elke uitkomstmetriek met minstens één leidende indicator, een metriek die eerder beweegt en de uitkomst voorspelt, zodat een team kan sturen voordat het langzame, gezaghebbende cijfer eindelijk aankomt. Deploymentfrequentie is een leidende indicator voor leveringsuitkomsten; een stijgende ontsnapte-fout-trend is een leidende indicator voor een komende betrouwbaarheidsuitkomst. Gebruik leidende indicatoren om vroeg te handelen en achterlopende uitkomstmetrieken om te bevestigen dat je gelijk had.

## Afwegingen: voor- en nadelen

| Categorie | Voordelen | Nadelen |
| --- | --- | --- |
| Inputmetrieken | Volledig binnen teamcontrole, makkelijk te tellen | Zwakste koppeling naar daadwerkelijke waarde; makkelijk te manipuleren door volume |
| Outputmetrieken | Makkelijk te tellen, duidelijk eigenaarschap, snelle feedback | Beloont activiteit boven impact; kan stijgen terwijl waarde daalt |
| Uitkomstmetrieken | Reflecteren direct wat ertoe doet; moeilijk goedkoop te manipuleren | Langzaam, bullrig, en moeilijk toe te schrijven aan één team |
| Metriekboomstructuur | Verbindt dagelijks werk met strategische waarde; helpt diagnose | Vereist echt analytisch werk om correct te bouwen en onderhouden |

De centrale spanning is **beheersbaarheid versus waarde**. Inputs en outputs liggen volledig binnen de controle van een team, wat ze verleidelijk maakt om teams ervoor verantwoordelijk te houden; uitkomsten dragen de waarde maar liggen slechts deels binnen de invloed van een enkel team, omdat een goede functie nog kan falen om redenen volledig buiten ingenieurswerk. Los dit op door teams verantwoordelijk te houden voor de inputs en outputs die ze volledig controleren, terwijl je uitkomsten volgt als gedeelde signalen die de hele organisatie samen bezit, verbonden door een expliciete metriekboom in plaats van achtergelaten als een onverklaard gat tussen "we deden het werk" en "heeft het geholpen."

## Vragen om met je team te bespreken

1. **Voor elke metriek op ons huidige dashboard, is het een input, een output, of een uitkomst, en vertelt de balans over de drie een eerlijk verhaal?** De meeste dashboards, eerlijk geaudit, blijken bijna volledig inputs en outputs te zijn, omdat dat is wat tooling standaard rapporteert. Classificeer elke tegel en tel de verdeling; een dashboard zonder enige uitkomsttegel meet activiteit en presenteert het als prestatie.

2. **Wat is onze enkele noorderster-uitkomstmetriek, en kunnen we hem terugvoeren door een metriekboom naar iets dat elk team daadwerkelijk bezit?** Zonder deze verbindende structuur geeft een bewegend topcijfer geen aanwijzing waar te kijken, en teams kunnen niet zien hoe hun dagelijkse outputmetrieken verbinden met iets dat ertoe doet. Breng je huidige topcijfer, als je er een hebt, en probeer de boom live te bouwen.

3. **Waar houden we een team verantwoordelijk voor een uitkomst die het alleen kan beïnvloeden, niet controleren?** Dit is een veelvoorkomende bron van frustratie en stille manipulatie, omdat een team gestraft voor een uitkomst gevormd door factoren buiten zijn controle elke prikkel heeft om zichzelf te beschermen in plaats van het echte systeem te verbeteren. Identificeer deze mismatches en pas ofwel de verantwoordelijkheid aan of voeg de ontbrekende hefbomen toe.

4. **Welke leidende indicator hebben we voor elk van onze achterlopende uitkomstmetrieken, en hoe ver vooruit voorspelt hij ze?** Een puur achterlopende metriekenset betekent dat je alleen ontdekt dat je ongelijk had nadat het te laat is om goedkoop koers te veranderen. Breng je uitkomstmetrieken en controleer of een echte leidende indicator voor elk bestaat, of of je blind vliegt tussen rapportageperiodes.

5. **Hoeveel van wat we vieren in reviews en retrospectieven is output ("we leverden X") versus uitkomst ("X veranderde Y ten goede")?** De taal teams gebruiken om werk te vieren vormt wat ze over tijd optimaliseren, vaak meer dan het dashboard doet. Luister naar je eigen reviewvergaderingen voor een sprint en tel de verdeling eerlijk.

6. **Als onze topoutputmetrieken van vandaag op morgen zouden verdubbelen, zouden onze uitkomstmetrieken noodzakelijkerwijs verbeteren, of zouden ze erger kunnen worden?** Dit gedachte-experiment onthult outputmetrieken die losgekoppeld zijn geraakt van, of zelfs actief tegengesteld aan, de uitkomsten die ze bedoeld waren te dienen, zoals functievolume dat onderhoudslast sneller verhoogt dan het adoptie verhoogt.

## Sectorperspectief

**Startup.** Kies één uitkomst, typisch een proxy voor of klanten waarde blijven krijgen, zoals wekelijkse retentie of activatie, en behandel het als je noorderster vanaf dag één. Weersta de trek richting output-ijdelheidsmetrieken zoals cumulatief functieaantal, die verleidelijk zijn om aan investeerders te rapporteren maar je niets vertellen over of het product daadwerkelijk voor iemand werkt.

**Klein bedrijf.** Je bestaande tools, kassasysteem, supportdesk, analytics, rapporteren meestal al een uitkomst-aangrenzend cijfer, herhaalaankooppercentage, ticketheropeningspercentage. Gebruik die in plaats van aangepaste uitkomstinstrumentatie te bouwen die je niet de capaciteit hebt om te onderhouden, en weersta de verleiding om terug te vallen op ruwe activiteitstellingen alleen omdat ze de standaardweergave zijn.

**Groot bedrijf.** Het dominante faalpatroon is een portfolio van teams die elk lokale outputmetrieken optimaliseren die niet optellen tot een coherente organisatorische uitkomst. Bouw de metriekboom bewust, standaardiseer uitkomstdefinities over bedrijfsonderdelen, en vereis dat elk groot initiatief zijn uitkomsthypothese stelt voor financiering, niet alleen zijn outputplan.

**Overheid.** Toezichtsorganen en het publiek worden steeds geletterder in het verschil tussen "de opdracht geleverd" en "de uitkomst verbeterd," en een alleen-output-rapport nodigt precies die doorlichting uit. Definieer succes als een burgervriendelijke uitkomst (wachttijd, foutpercentage, tevredenheid) waar wettelijk en praktisch mogelijk, en wees expliciet wanneer alleen een outputmetriek beschikbaar is en waarom.

## Voorbeelden

**Groot bedrijf.** De ingenieursafdeling van een logistiekbedrijf rapporteerde twee jaar lang een consequent stijgend aantal "per kwartaal geleverde functies," terwijl de kernklanttevredenheidsscore van het bedrijf stilletjes afvlakte. Een nieuwe VP engineering bouwde een metriekboom geworteld in de op-tijd-leveringsratio, de daadwerkelijke bedrijfsuitkomst, afgebroken door hubwachttijd en laatste-mijl-succes tot teamniveau-ingenieursoutputs. Binnen één rapportagecyclus werd duidelijk dat verschillende hoog-output-teams functies leverden in gebieden zonder meetbaar effect op de noorderstermetriek, en investering verschoof richting de drijvers die de boom liet zien daadwerkelijk ertoe deden.

**Overheid.** Het digitale team van een nationale gezondheidsdienst had "modules geleverd tegen de opdracht" gerapporteerd voor een meerjarig patiëntendossiers-moderniseringsprogramma. Een toezichtscommissie stelde een andere vraag: besteedden clinici minder tijd aan administratieve data-invoer. Het team retrofitte een uitkomstmetriek, mediaan minuten administratieve tijd per patiëntcontact, en vond dat vroege modules deze tijd daadwerkelijk hadden verhoogd door werkstroomwrijving, ondanks dat elke leveringsmijlpaal werd geraakt. Latere modules werden direct rond de uitkomstmetriek herontworpen, en de openbare rapportage van het programma verschoof van een leveringscontrolelijst naar een voor-en-na-uitkomstvergelijking.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van uitkomstweging is vermeden verspilling: een organisatie die, bijna in real time, kan zien dat een stroom output geen enkele uitkomst beweegt, kan die investering omleiden voordat een volledige budgetcyclus besteed is om het op de harde manier te ontdekken. De dominante verborgen kost in grote ingenieursorganisaties is niet onderinvestering, het is goed uitgevoerd werk dat nooit gefinancierd had moeten worden omdat het losgekoppeld was van enige echte uitkomst, en een alleen-output-dashboard kan die loskoppeling helemaal niet zien.

De totale eigendomskosten van uitkomstmeting zijn hoger dan outputmeting, omdat uitkomsten echt moeilijker zijn te definiëren, toe te schrijven, en te instrumenteren, en het bouwen van een echte metriekboom bewuste analytische inspanning kost in plaats van te accepteren wat een tool standaard exporteert. Die kost is het waard om te betalen voor elk initiatief boven een bescheiden omvang, omdat het alternatief, achteraf ontdekken dat een jaar van zelfverzekerd gerapporteerde output geen echte waarde produceerde, veel meer kost dan de voorafgaande analyse.

## Antipatronen en valkuilen

- **Een dashboard dat volledig outputtegels is:** meet activiteit en presenteert het als prestatie.
- **Een team volledig verantwoordelijk houden voor een uitkomst die het niet kan controleren:** broedt frustratie en nodigt manipulatie uit om te beschermen tegen onrechtvaardige schuld.
- **Geen leidende indicator voor een achterlopende uitkomst:** het team leert dat het ongelijk had alleen nadat het te duur is om te fixen.
- **Outputtaal vieren in reviews terwijl beweerd wordt uitkomsten te waarderen:** de uitgesproken prioriteit en de geleefde prikkel divergeren, en de geleefde prikkel wint.
- **Een platte lijst metrieken zonder boomstructuur:** een bewegend topcijfer geeft geen aanwijzing waar te kijken.
- **Uitkomstmeting behandelen als te moeilijk om te proberen:** zet een organisatie permanent terug naar makkelijk-te-tellen inputs en outputs.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Metrieken zijn bijna volledig inputs en outputs; niemand kan de uitkomstmetrieken van de organisatie benoemen of een lijn naar hen trekken.
- **Niveau 2, Ontwikkelen:** Sommige teams hebben informeel uitkomstmetrieken geïdentificeerd, maar er is geen gedeelde metriekboom en geen consistente leidende indicatoren.
- **Niveau 3, Standaardiseren:** Een gedocumenteerde metriekboom verbindt een gedeelde noorderster-uitkomst tot teameigen outputs, consistent toegepast door de organisatie.
- **Niveau 4, Beheren:** Leidende en achterlopende indicatoren worden beide bijgehouden en samen beoordeeld; teams worden alleen verantwoordelijk gehouden voor wat ze controleren, en uitkomstmeting wordt actief gefinancierd.
- **Niveau 5, Orkestreren:** Uitkomstmeting is direct geïntegreerd in financierings- en prioriteringsbeslissingen; de organisatie leidt routinematig investering om van hoog-output, laag-uitkomst-werk voordat een volledige budgetcyclus verstrijkt.

## Discussie-ideeën

1. Benoem de enkele belangrijkste uitkomstmetriek van onze organisatie. Kan iedereen het ermee eens zijn?
2. Wat is onze grootste huidige investering in output die we nog niet kunnen terugvoeren naar enige uitkomst?
3. Waar straft onze verantwoordelijkheidsstructuur een team voor een uitkomst die het niet kan controleren?
4. Hoe zou ons dashboard eruitzien als we elke pure outputtegel verwijderden?
5. Hoe lang duurt het momenteel voor ons om te leren of een geleverde functie daadwerkelijk hielp?

## Belangrijkste inzichten

- Classificeer elke metriek als **input, output, of uitkomst**, en weeg je set bewust richting uitkomsten.
- Bouw een **metriekboom** onder een enkele **noorderstermetriek** zodat een bewegend topcijfer naar een oorzaak wijst.
- Houd teams verantwoordelijk voor wat ze **controleren** (inputs, outputs); volg uitkomsten als gedeelde signalen die de hele organisatie samen beïnvloedt.
- Paar elke achterlopende **uitkomstmetriek** met een snellere **leidende indicator** zodat je kunt sturen voordat het langzame cijfer bevestigt dat je ongelijk had.
- Een alleen-output-dashboard meet activiteit en noemt het prestatie; behandel dat als een waarschuwingssignaal, geen comfort.

## Bronnen en verder lezen

- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (uitkomstgebaseerde leveringsmeting).
- *Lean Analytics*, door Alistair Croll en Benjamin Yoskovitz (de One Metric That Matters en het input/output/uitkomst-onderscheid in een startupcontext).
- *Measure What Matters*, door John Doerr (uitkomstgerichte doelstelling en de OKR-raamwerks nadruk op resultaten boven activiteit).
- *The Lean Startup*, door Eric Ries (handelbare versus ijdelheidsmetrieken en uitkomstvalidatie).
- *Key Performance Indicators*, door David Parmenter (het bouwen van een KPI- of metriekboomstructuur onder een noorderster-maat).
