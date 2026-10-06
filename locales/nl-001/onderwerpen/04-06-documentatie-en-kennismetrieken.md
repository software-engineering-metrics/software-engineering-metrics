# 4.6 Documentatie- en kennismetrieken

## Overzicht en motivatie

Dit onderwerp sluit deel 4 af door te meten of de kennis nodig om een codebase veilig te onderhouden daadwerkelijk gedocumenteerd en vindbaar is, niet alleen of documentatie technisch ergens bestaat. Onderwerp 3.5 behandelde communicatie en samenwerking als een ontwikkelaarservaringszorg; dit onderwerp behandelt dezelfde onderliggende kwestie, kennisbeschikbaarheid, vanuit de codezijde: heeft een nieuwe ingenieur, of een bestaande die werkt aan onbekende code, wat ze nodig hebben om een veilige wijziging te maken, of leeft die kennis alleen in de hoofden van een krimpend aantal ervaren mensen.

De meetuitdaging hier is echt moeilijk, moeilijker dan de meeste andere metrieken in dit boek, omdat documentatiekwaliteit en -nut inherent subjectiever zijn dan een dekkingspercentage of een complexiteitsscore. De aanpak van dit onderwerp is proxy's voor nut meten in plaats van bestaan: hoe vaak documentatie daadwerkelijk bezocht wordt, hoe vaak dezelfde vraag herhaaldelijk gesteld wordt ondanks dat een gedocumenteerd antwoord bestaat, en hoe lang het duurt voor iemand onbekend met een systeem productief te worden erin. Geen van deze proxy's is perfect alleen, maar samen geven ze een veel eerlijker beeld dan het aantal wikipagina's of README-bestanden tellen dat een codebase bevat.

Voor grote teams groeien de zorgen van dit onderwerp samen met organisatorisch dienstverband en verloop op manieren die makkelijk te onderschatten zijn totdat een crisis het probleem afdwingt: een systeem jarenlang onderhouden door dezelfde twee ingenieurs kan perfect goed functioneren met bijna geen geschreven documentatie, precies totdat beide ingenieurs binnen hetzelfde jaar vertrekken, op welk punt de organisatie ontdekt dat de kennis nooit daadwerkelijk ergens duurzaam vastgelegd werd. Grote bedrijven en overheidsorganisaties, met typisch langere systeemlevensduren en minder zekere personeelscontinuïteit dan een startup, dragen dit risico scherper dan de meeste.

## Kernprincipes

- **Documentatiebestaan is niet hetzelfde als documentatienut.** Meet of het daadwerkelijk helpt, niet alleen of het aanwezig is.
- **Herhaalde vragen ondanks gedocumenteerde antwoorden onthullen een vindbaarheidsprobleem, geen documentatie-inspanning-probleem.** Meer inhoud is niet altijd de fix.
- **Inwerktijd tot productieve bijdrage is een sterke, praktische proxy** voor algehele kennisgezondheid, direct verbindend met de samenwerkingsmetrieken van onderwerp 3.5.
- **Kennis die alleen leeft in mensen's hoofden is een duurzaamheidsrisico,** geen stabiele, houdbare staat, hoe goed het momenteel ook functioneert.
- **Documentatie vervalt.** Een pagina die een jaar geleden accuraat was kan nu actief misleidend zijn, en verouderdheid zelf moet bijgehouden worden.

## Aanbevelingen

### Volg documentatiebezoek en verouderdheid, niet alleen bestaan

Waar je documentatieplatform het ondersteunt, volg hoe vaak pagina's daadwerkelijk bekeken worden, en afzonderlijk, hoe lang sinds een pagina laatst bijgewerkt werd relatief aan hoe vaak het onderliggende systeem dat het beschrijft veranderd is (cross-refereren met churndata van onderwerp 4.3 is hier direct nuttig). Een pagina die een systeem beschrijft dat substantieel veranderd is sinds de pagina laatst bewerkt werd is een sterke kandidaat om actief misleidend te zijn in plaats van alleen onbehulpzaam, en dit verouderdheidssignaal verdient ten minste zoveel aandacht als bijhouden of documentatie helemaal bestaat.

### Let op herhaalde vragen als een vindbaarheidssignaal

Als dezelfde vraag herhaaldelijk gesteld wordt in een teamchatkanaal of gedurende inwerken, ondanks dat een gedocumenteerd antwoord technisch ergens bestaat, onthult dat patroon een vindbaarheidsprobleem, het antwoord is niet waar mensen natuurlijk ervoor kijken, in plaats van een documentatie-inspanning-probleem dat meer schrijven zou fixen. Volg terugkerende vragen expliciet, en gebruik ze om het herorganiseren of beter aan de oppervlakte brengen van bestaande inhoud te prioriteren boven meer ervan schrijven.

### Meet inwerktijd tot eerste betekenisvolle, onafhankelijke bijdrage

Deze metriek, geïntroduceerd in onderwerp 3.5 als een samenwerkingssignaal, is evenzeer een documentatie- en kennisgezondheidssignaal vanuit de codezijde. Een consistent korte, voorspelbare inwerktijd suggereert echt toegankelijke, accurate kennis; een lange, sterk variabele tijd, vooral een die sterk afhangt van welke specifieke persoon toevallig een nieuw teamlid inwerkt, suggereert kennis die gevaarlijk geconcentreerd leeft in individueel geheugen in plaats van duurzame, geschreven vorm.

### Identificeer en prioriteer ongedocumenteerde kritieke-kennis-gebieden expliciet

Cross-refereer je kennisconcentratiedata (de **[busfactor](https://en.wikipedia.org/wiki/Bus_factor)**-analyse van onderwerp 3.5) met documentatiedekking: een systeem met een busfactor van een en geen betekenisvolle documentatie is een ernstig, samengroeiend risico dat prioritaire aandacht verdient boven een goed-gedocumenteerd systeem met dezelfde lage busfactor, omdat de documentatie ten minste een partiële mitigatie levert terwijl een toegewijde opvolger getraind wordt.

### Behandel documentatieschuld als een categorie binnen je technische-schuld-backlog

In plaats van documentatiegaten afzonderlijk en informeel bijhouden, vouw significante documentatiegaten in de dezelfde zichtbare, gekwantificeerde backlog beschreven in onderwerp 4.5, vooral voor kritieke, laag-busfactor-systemen, zodat documentatiewerk eerlijk concurreert voor geprioriteerde capaciteit in plaats van eeuwig uitgesteld te worden als een lager-status-taak vergeleken met codegerichte schuldherstel.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen documentatiemeting | Lage overhead | Kennisrisico blijft onzichtbaar totdat een crisis ontdekking afdwingt |
| Documentatiebestaan tellen (paginatelling, README-aanwezigheid) | Simpel, makkelijk te rapporteren | Zegt niets over nut, accuraatheid, of vindbaarheid |
| Bezoek en verouderdheid bijhouden | Onthult daadwerkelijk nut en verval | Vereist documentatieplatform-analytics en doorlopende reviewdiscipline |
| Inwerktijd als een proxy | Praktisch, concreet, verbindt direct met echte zakelijke impact | Indirect; andere factoren naast documentatie beïnvloeden ook inwerksnelheid |

De centrale spanning is **meetbaarheid versus betekenis**. Documentatiebestaan is triviaal makkelijk te tellen en vertelt je bijna niets nuttigs; echt nut, of iemand daadwerkelijk gedocumenteerde kennis kan vinden en erop vertrouwen wanneer ze het nodig hebben, is wat daadwerkelijk ertoe doet maar is moeilijker direct te meten. Los de spanning op door de proxy's te gebruiken die dit onderwerp aanbeveelt, bezoekpatronen, verouderdheid relatief aan churn, herhaalde vragen, en inwerktijd, in combinatie, accepterend dat geen enkele perfect is maar dat hun convergentie veel betekenisvoller is dan een bestaanstelling alleen.

## Vragen om met je team te bespreken

1. **Voor ons meest kritieke, laagste-busfactor-systeem, bestaat betekenisvolle, accurate documentatie daadwerkelijk, of zou een vertrekkende expert het meeste van de echte kennis meenemen?** Dit is de scherpste, meest concrete versie van de centrale zorg van dit onderwerp; beantwoord het eerlijk voor je enkele meest riskante systeem eerst.

2. **Welke vraag wordt herhaaldelijk gesteld in onze teamchat ondanks dat een gedocumenteerd antwoord ergens bestaat?** Als je er onmiddellijk een kunt benoemen, is dat een vindbaarheidsprobleem de moeite waard om direct te fixen, waarschijnlijk door bestaande inhoud te herorganiseren of beter aan de oppervlakte te brengen in plaats van meer te schrijven.

3. **Hoe lang duurde het voor ons meest recente nieuwe teamlid om hun eerste betekenisvolle, onafhankelijke bijdrage te maken, en hoe vergeleek dat met het teamlid voor hen?** Een grote, onverklaarde variantie tussen individuen wijst vaak op kennis die sterk afhangt van wie toevallig iemand inwerkt, in plaats van duurzame, toegankelijke documentatie.

4. **Wanneer checkten we laatst of een stuk documentatie nog accuraat was, relatief aan hoeveel het onderliggende systeem veranderd is sinds het geschreven werd?** Als het eerlijke antwoord is "we checken dit niet systematisch," is dat verouderdheidsrisico waarschijnlijk groter dan iemand momenteel aanneemt.

5. **Omvat onze technische-schuld-backlog (onderwerp 4.5) documentatiegaten, of wordt documentatiewerk eeuwig uitgesteld als een lager-status-taak vergeleken met codefixes?** Check je daadwerkelijke backlog en zie of documentatieschuld zichtbaar is en concurreert voor geprioriteerde capaciteit of effectief onzichtbaar is.

6. **Wat zou het ons kosten als de ene of twee mensen die ons meest kritieke, minst-gedocumenteerde systeem begrijpen binnen hetzelfde jaar vertrokken?** Deze concrete, ongemakkelijke vraag is de moeite waard eerlijk te beantwoorden in plaats van het risico als abstract of onwaarschijnlijk te behandelen.

## Sectorperspectief

**Startup.** Formele documentatiemetrieken zijn meestal onnodig met een klein team waar kennis zich verspreidt via constant, direct gesprek. Het risico om op te letten is dezelfde busfactor-concentratie waar onderwerp 3.5 tegen waarschuwt, nu specifiek toegepast op documentatie: naarmate het team groeit voorbij de grootte waar iedereen dagelijks praat, wordt ongedocumenteerde kennis die informeel fijn werkte een echte verplichting.

**Klein bedrijf.** Prioriteer het documenteren van je enkele meest kritieke, minst-redundante systeem eerst, zelfs informeel, in plaats van uitgebreide documentatie over alles te proberen. Een kort, accuraat document dat je riskantste enkele faalpunt dekt levert meer echte waarde dan brede maar oppervlakkige dekking overal.

**Groot bedrijf.** Documentatieverouderdheid en vindbaarheid schalen beide slecht hier, omdat een grote organisatie documentatie opbouwt over veel teams en platforms sneller dan iemand het actueel of consistent georganiseerd kan houden. Investeer in documentatieplatform-analytics om bezoek en verouderdheid op schaal te volgen, en behandel documentatieschuld als een eersteklas categorie in je organisatiebrede schuldbacklog.

**Overheid.** Lange dienstverbanden gewoon in publieke-sector-organisaties kunnen ernstig ongedocumenteerde-kennis-risico verhullen achter schijnbare stabiliteit, omdat een systeem onderhouden door dezelfde persoon voor vijftien jaar perfect goed kan functioneren precies totdat die persoon pensioneert. Behandel documentatiegezondheid expliciet als een continuïteit-van-operaties-zorg, direct verbonden met personeels- en opvolgingsplanning, niet louter een ingenieurs-aardigheidje.

## Voorbeelden

**Groot bedrijf.** Een financiële-dienstenbedrijf ontdekte, gedurende een ongerelateerde reorganisatie, dat zijn kernrisicoberekeningsmotor geen betekenisvolle documentatie had voorbij enkele verouderde codecommentaren, en de twee ingenieurs die het het beste begrepen werden beide gelijktijdig herverdeeld naar een nieuw initiatief. Een noodinspanning voor documentatie, uitgevoerd onder significante tijdsdruk, extraheerde en noteerde de kritieke kennis voordat de herverdeling van kracht werd, maar het proces nam verscheidene weken toegewijde senior-ingenieurstijd die geleidelijker en goedkoper verspreid had kunnen worden als documentatiegezondheid proactief bijgehouden en geprioriteerd was geweest in plaats van ontdekt als een noodgeval.

**Overheid.** Het decennia-oude zaakbeheersysteem van een provinciale overheid had substantiële documentatie opgebouwd over de jaren, maar een vindbaarheidsaudit vond dat nieuwe teamleden consistent relevante bestaande documentatie niet konden vinden en herhaaldelijk dezelfde handvol vragen stelden in teamkanalen, vragen die, in feite, al beantwoord waren ergens in het uitgestrekte, slecht georganiseerde documentatieplatform van de instantie. In plaats van meer inhoud te schrijven, investeerde de instantie in het herorganiseren en verbeteren van de zoek- en navigatiestructuur van zijn bestaande documentatie, en een vervolgenquête toonde een meetbare vermindering in herhaalde vragen en een betekenisvol snellere gerapporteerde inwerkervaring voor nieuw personeel, zonder een enkele nieuwe pagina inhoud toe te voegen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van documentatiegezondheid doelbewust meten en beheren is vermeden criseskost: het financiële-dienstenvoorbeeld hierboven toont het verschil tussen proactieve, geleidelijke kennisvastlegging en een duur, samengeperst noodgeval afgedwongen door ongeplande personeelsbeweging. Ongedocumenteerde kritieke kennis is een staande verplichting die niets zichtbaar kost totdat het moment dat het ineens heel duur wordt.

De totale eigendomskosten zijn meestal de discipline van het bijhouden van de proxy's die dit onderwerp aanbeveelt, bezoekpatronen, verouderdheid, herhaalde vragen, inwerktijd, en de bereidheid om documentatiegaten te vouwen in een geprioriteerde backlog in plaats van ze te behandelen als eeuwig lager-status dan codegericht werk. Die discipline kost veel minder dan de crisis-modus-kennisextractie die het financiële-dienstenvoorbeeld toont als het alternatief.

## Antipatronen en valkuilen

- **Documentatiebestaan tellen in plaats van nut:** vertelt je bijna niets over of kennis daadwerkelijk toegankelijk is wanneer nodig.
- **Meer inhoud schrijven als reactie op herhaalde vragen, zonder eerst vindbaarheid te checken:** pakt vaak volledig het verkeerde probleem aan.
- **Nooit documentatieverouderdheid checken relatief aan hoeveel het systeem veranderd is:** riskeert actief misleidende, verouderde inhoud.
- **Documentatieschuld behandelen als eeuwig lager-status dan codeschuld:** laat het chronisch gedeprioriteerd en onzichtbaar op de backlog.
- **Schijnbare stabiliteit, een systeem dat jarenlang niet veranderd is, verwarren met laag risico:** kan een ernstig, ongedocumenteerd busfactorprobleem verhullen achter een systeem dat simpelweg zijn enige expert nog niet nodig gehad heeft.
- **Kritieke ongedocumenteerde kennis alleen ontdekken gedurende een noodpersoneelsovergang:** de dure, vermijdbare faalmodus waar dit onderwerp gebouwd is om te voorkomen.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Documentatiegezondheid wordt niet gemeten; kennisconcentratie en verouderdheidsrisico worden alleen ontdekt via crisis.
- **Niveau 2, Ontwikkelen:** Enige documentatie bestaat, maar er is geen systematisch bijhouden van bezoek, verouderdheid, of vindbaarheid.
- **Niveau 3, Standaardiseren:** Bezoek en verouderdheid worden bijgehouden voor kritieke systemen, en inwerktijd wordt gemeten als een proxy voor kennisgezondheid organisatiebreed.
- **Niveau 4, Beheren:** Documentatiegaten worden gevouwen in de geprioriteerde technische-schuld-backlog, cross-gerefereerd met busfactorrisico om de ernstigste gecombineerde risico's te identificeren.
- **Niveau 5, Orkestreren:** De organisatie identificeert en pakt proactief ongedocumenteerd kritieke-kennis-risico aan voordat een personeelsovergang het probleem afdwingt, en kan wijzen naar specifieke, meetbare inwerk- of incidentresponsverbeteringen getraceerd naar documentatie-investering.

## Discussie-ideeën

1. Wat is onze enkele ernstigste combinatie van lage busfactor en slechte documentatie nu?
2. Welke vraag wordt herhaaldelijk gesteld ondanks dat een gedocumenteerd antwoord bestaat?
3. Hoe zouden we weten als een stuk kritieke documentatie verouderd en misleidend geworden was?
4. Omvat onze technische-schuld-backlog documentatiegaten, of zijn ze onzichtbaar?
5. Wat zou het ons kosten als de enige expert van ons minst-gedocumenteerde systeem dit jaar vertrok?

## Belangrijkste inzichten

- Meet **nut, geen bestaan**: of documentatie daadwerkelijk helpt, proxy's zoals bezoekpatronen, verouderdheid, en herhaalde vragen gebruikend.
- **Herhaalde vragen ondanks gedocumenteerde antwoorden** onthullen een vindbaarheidsprobleem, niet noodzakelijk een inhoud-inspanning-probleem.
- **Inwerktijd tot productieve bijdrage** is een sterke, praktische proxy voor algehele kennisgezondheid.
- **Ongedocumenteerde kritieke kennis is een samengroeiend risico**, vooral gecombineerd met een lage busfactor (onderwerp 3.5); het kost niets zichtbaar totdat het ineens heel veel kost.
- Vouw **documentatiegaten in je technische-schuld-backlog** (onderwerp 4.5) zodat ze eerlijk concurreren voor geprioriteerde capaciteit.

## Bronnen en verder lezen

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, door Jared Bhatti, Zachariah Goldberg, Ted Kubaska, en Sarah Moir (praktische documentatiepraktijken voor ingenieursteams).
- *A Philosophy of Software Design*, door John Ousterhout (de relatie tussen documentatie, complexiteit, en onderhoudbaarheid).
- *Team Topologies*, door Matthew Skelton en Manuel Pais (organisatorische ontwerpimplicaties van geconcentreerde versus verspreide kennis).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (documentatie als een van de capaciteiten gecorreleerd met leveringsprestatie).
