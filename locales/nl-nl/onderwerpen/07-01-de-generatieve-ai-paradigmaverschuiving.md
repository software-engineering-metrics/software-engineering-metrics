# 7.1 De generatieve-AI-paradigmaverschuiving

## Overzicht en motivatie

Voor het grootste deel van de geschiedenis van softwareontwikkeling was code schrijven traag en inspanningsvol genoeg dat ruw outputvolume, geschreven regels, gemaakte commits, uitgeleverde functies, ten minste los correleerde met echte inspanning en, imperfect, met echte waarde. Die correlatie was nooit perfect, hoofdstuk 3.4 wijdde een heel hoofdstuk aan waarom activiteitsmetrieken misleiden zelfs in een pre-AI-wereld, maar het was sterk genoeg dat veel organisaties metriekenprogramma's bouwden op de impliciete aanname dat meer code algemeen meer gedaan werk betekende. **[Generatieve AI](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)**-codeerassistenten hebben die aanname beslissend gebroken: een gereedschap kan nu een groot, plausibel-ogend volume code produceren in secondes, tegen een fractie van de vorige kost, en dat volume vertelt je bijna niets op zichzelf over of de resulterende code werkt, onderhoudbaar is, of enig echt doel dient.

De kernclaim van dit hoofdstuk is dat dit een paradigmaverschuiving is, geen incrementele toolingverandering. Een paradigmaverschuiving verandert wat je bestaande instrumenten daadwerkelijk meten, niet alleen welke waarden ze rapporteren. Een snelheidsmeter meet nog steeds snelheid na dat je de motor van een auto verandert; verscheidene metrieken van dit boek overleven deze overgang niet zo netjes. Deploymentfrequentie (hoofdstuk 2.10) kan stijgen omdat AI echt waardevol werk versnelde, of omdat AI het triviaal makkelijk maakte om veel kleine, laag-waarde-wijzigingen te genereren; het cijfer alleen kan de twee niet meer onderscheiden, op een manier die het meestal kon, met passende voorzichtigheid, voorheen. Dezelfde logica past met zelfs meer kracht toe op ruwe committellingen, regels code, en pull-request-volume, waar hoofdstuk 3.4 al voor waarschuwde als individuele metrieken, nu versterkt in een risico relevant op team- en organisatieniveau ook.

Voor grote teams arriveerde deze verschuiving sneller dan de meetpraktijk van de meeste organisaties zich kon aanpassen, en het gat tussen adoptiesnelheid en meetaanpassing is waar het echte risico in dit deel leeft. Grote bedrijven die doorgaan met pre-AI-era-activiteitsmetrieken te rapporteren zonder aanpassing riskeren een metriek te vieren die stilletjes gestopt is te correleren met waarde; overheidsorganisaties die AI-toolinginvestering evalueren hebben een heldere begrip nodig van precies welke metrieken betrouwbaar blijven en welke niet meer zijn, voordat ze zich committeren aan aanbestedings- of beleidsbeslissingen gebouwd op verouderde meetaannames.

## Kernprincipes

- **Dit is een paradigmaverschuiving in wat metrieken meten, geen incrementele verandering.** Sommige bestaande metrieken zijn stilletjes gestopt te betekenen wat ze vroeger betekenden.
- **Outputvolume was nooit een betrouwbare proxy voor waarde, en het is nu actief onbetrouwbaar geworden.** De waarschuwing van hoofdstuk 3.4 was altijd correct; deze verschuiving maakt het negeren veel duurder.
- **Het gat tussen AI-adoptiesnelheid en meetaanpassingssnelheid is het echte risico.** Organisaties adopteren de tooling sneller dan ze hun metrieken herbezinnen.
- **Niet elke metriek in dit boek is gelijk beïnvloed.** Uitkomstmetrieken (deel 5) zijn veel resistenter tegen deze verschuiving dan activiteits- en ruwe-output-metrieken.
- **Deze verschuiving is sector-breed en doorlopend, geen eenmalige aanpassing.** Verwacht voortgezette verandering naarmate de tooling en zijn adoptiepatronen blijven evolueren.

## Aanbevelingen

### Audit je bestaande metriekenset expliciet voor AI-era-geldigheid

Loop door je huidige dashboard en, voor elke metriek, vraag direct: zou een team dat AI-assistentie zwaar gebruikt maar niet meer echte waarde produceert dan voorheen een verbeterde aflezing tonen op deze metriek. Activiteitstellingen, committempo, en ruwe deploymentfrequentie (zonder een gekoppelde stabiliteitsbeschermmetriek, hoofdstuk 2.10) zijn het meest blootgesteld. Uitkomstmetrieken van deel 5, ontsnapte-defectfrekvens, functieadoptie, bedrijfsuitkomsten, zijn vergelijkenderwijs resistent, omdat ze het daadwerkelijke resultaat meten in plaats van het volume activiteit dat het produceerde.

### Herbekijk deploymentfrequentie en doorlooptijd specifiek, met verhoogde beschermmetriekaandacht

Hoofdstuk 2.10 waarschuwde al voor substitutiemanipulatie, betekenisvol werk splitsen in triviale deploys om de telling op te blazen. Generatieve AI maakt dit specifieke manipulatiepatroon dramatisch goedkoper en makkelijker te produceren, zelfs onbedoeld, omdat AI-geassisteerde triviale wijzigingen nu bijna gratis zijn om te genereren. Verstrak je wijzigingsfoutpercentage-beschermmetriek (hoofdstuk 2.10) specifiek proportioneel aan hoe zwaar een team AI-geassisteerde ontwikkeling geadopteerd heeft, en let nog nauwkeuriger op deploy-groottetrends dan voorheen.

### Behandel codereviewcapaciteit als een nieuw, kritiek knelpunt

Als AI-assistentie het volume code voorgesteld voor review dramatisch verhoogt, wordt het reviewstadium (hoofdstuk 2.9), al vaak de grootste wachttijdbijdrager in de leveringspijplijn, een nog scherpere beperking. Een reviewer gevraagd om een veel hoger volume AI-gegenereerde code te evalueren op hetzelfde tempo als voorheen zal onvermijdelijk ofwel de pijplijn vertragen of reviewdiepte verminderen, precies het rubberen-stempel-risico waar hoofdstuk 2.9 al voor waarschuwde, nu onder significant grotere druk. Bewaak reviewdiepte- en kwaliteitsbeschermmetrieken met verhoogde aandacht naarmate AI-gegenereerd-codevolume stijgt.

### Neem niet aan dat AI-gegenereerde code hetzelfde defectprofiel draagt als mensgeschreven code

Vroeg bewijs en praktijkervaring suggereren dat AI-gegenereerde code een ander defectprofiel kan hebben dan mensgeschreven code: plausibel-ogende maar subtiel verkeerde logica, vol-vertrouwen gegenereerde maar incorrecte randgevalafhandeling, of code die oppervlakkige review passeert omdat het idiomatisch en redelijk oogt, maar niet daadwerkelijk doordacht werd met echt begrip van de specifieke context van het systeem. Behandel dit als een hypothese de moeite waard om actief te testen tegen je eigen ontsnapte-defectdata (hoofdstuk 5.1), defecten taggend op of de oorspronkelijke code substantieel AI-gegenereerd was, in plaats van aan te nemen dat de historische defecttempo-relaties waarop je organisatie zijn kwaliteitspraktijken gebouwd heeft nog steeds onveranderd standhouden.

### Update je metriekcharter en governanceproces expliciet voor deze verschuiving

De governancediscipline van hoofdstuk 1.4 volgend, laat deze verschuiving niet passief gebeuren aan je metriekenprogramma. Herbezoek expliciet je metriekcharter, benoemend welke metrieken nieuwe beschermmetrieken nodig hebben, welke pensioen nodig hebben, en welke betrouwbaar blijven, als een doelbewuste governancebeslissing in plaats van een ongeëxamineerde drift. Documenteer de redenering, omdat dit precies het soort definitionele en contextuele verschuiving is waarvoor hoofdstuk 1.4 waarschuwt dat anders stilletjes kan gebeuren en alleen veel later ontdekt wordt.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Pre-AI-metrieken onveranderd blijven rapporteren | Geen verstoring, bekende rapportage | Riskeert metrieken te vieren die stilletjes gestopt zijn te correleren met waarde |
| Volledige metriekenset-audit en doelbewuste herziening | Herstelt betrouwbare meting | Vereist echte analytische inspanning en organisatorisch veranderingsbeheer |
| Activiteits- en outputmetrieken volledig verlaten | Verwijdert het meest blootgestelde risico direct | Verliest enig legitiem nuttig contextueel signaal (het voorbehoud van hoofdstuk 3.4) |
| Beschermmetrieken verstrakken zonder volledige audit | Sneller te implementeren | Kan metrieken missen waarvan de blootstelling minder duidelijk is dan de duidelijkste gevallen |

De centrale spanning is **meetcontinuïteit versus meetgeldigheid**. Organisaties verkiezen begrijpelijk om bekende metrieken op bekende manieren te blijven rapporteren, omdat een metriekenprogramma veranderen echte organisatorische kost en verstoring heeft. Maar doorgaan met een metriek rapporteren die stilletjes gestopt is te meten wat het vroeger mat is erger dan verstoring, het is actieve misleiding. Los de spanning op door dit te behandelen als precies het soort doelbewuste, gedocumenteerde governanceverandering die hoofdstuk 1.4 beschrijft, verstorend op korte termijn maar noodzakelijk om de metrieken van de organisatie eerlijk te houden.

## Vragen om met je team te bespreken

1. **Zou voor elke metriek op ons dashboard een team dat AI-assistentie zwaar gebruikt maar niet meer echte waarde produceert een verbeterde aflezing tonen?** Loop je metrieken expliciet door met deze test; degene die het falen zijn je hoogste-prioriteit-kandidaten voor herziene beschermmetrieken of pensioen.

2. **Is onze deploymentfrequentie of commitvolume gestegen sinds het adopteren van AI-codeerassistentie, en hebben we gecheckt of wijzigingsfoutpercentage of defecttempo overeenkomstig bewoog?** Trek de daadwerkelijke gekoppelde data in plaats van ofwel een positieve of negatieve uitkomst aan te nemen.

3. **Houdt onze codereviewcapaciteit tred met enige toename in AI-geassisteerd-codevolume, of erodeert reviewdiepte stilletjes onder verhoogde druk?** Check reviewstadiummetrieken (hoofdstuk 2.9) specifiek voor tekenen van het intensiverende rubberen-stempel-risico.

4. **Taggen we defecten op of de oorspronkelijke code substantieel AI-gegenereerd was, en als zo, wat toont die data tot nu toe?** Als je dit momenteel niet taggt, bespreek wat het zou vergen om te beginnen, omdat deze data direct relevant is voor of je historische kwaliteitsaannames nog steeds standhouden.

5. **Hebben we doelbewust ons metriekcharter (hoofdstuk 1.4) herbezocht in het licht van deze verschuiving, of is onze meetpraktijk simpelweg onveranderd doorgegaan?** Als het eerlijke antwoord het tweede is, is dat gat precies wat dit hoofdstuk aanbeveelt eerst te sluiten.

6. **Hoe zou het eruitzien als onze organisatie onvoorbereid gevangen werd door deze verschuiving, een metriek vierend die al gestopt was te betekenen wat we dachten dat het betekende?** Dit concrete, licht ongemakkelijke gedachte-experiment helpt de audit motiveren die dit hoofdstuk aanbeveelt voor, in plaats van na, dat scenario daadwerkelijk gebeurt.

## Sectorperspectief

**Startup.** Snelle AI-gereedschapsadoptie is gewoon en vaak een echt competitief voordeel, maar dezelfde snelheid die adoptie aantrekkelijk maakt maakt ongeëxamineerde metriekdrift waarschijnlijker. Bouw de gewoonte om uitkomstmetrieken (deel 5) te checken naast enige efficiëntiewinsten die je rapporteert van AI-adoptie, in plaats van alleen snelheidsverbeteringen te rapporteren.

**Klein bedrijf.** AI-codeerassistentie kan de capaciteit van een klein team betekenisvol uitbreiden, maar weersta de verleiding om ruwe outputtoenames te rapporteren als onambigu succes zonder kwaliteitsbeschermmetrieken te checken; een klein team heeft minder capaciteit om een ongedetecteerd kwaliteitsprobleem te absorberen dan een grotere organisatie met meer redundantie.

**Groot bedrijf.** De schaal van dit risico groeit significant samen hier, omdat AI-adoptie over dozijnen of honderden teams gelijktijdig metriekgeldigheid organisatiebreed kan verschuiven voordat enig enkel team het patroon lokaal opmerkt. Voer de metriekenset-audit die dit hoofdstuk aanbeveelt uit op organisatieniveau, niet alleen team voor team, en update governance (hoofdstuk 1.4) centraal en expliciet.

**Overheid.** Publieke-sector-organisaties adopteren nieuwe technologie vaak voorzichtiger, maar de metrieken en benchmarks gebruikt om overheidstechnologieprogramma's te evalueren zijn vaak getrokken uit of vergeleken tegen private-sector-sectordata die zelf verschuift onder dezelfde druk. Begrijp expliciet welke sectorbenchmarks waartegen je vergelijkt beïnvloed zijn geweest door deze verschuiving voordat je ze gebruikt om verwachtingen te stellen of prestatie te evalueren.

## Voorbeelden

**Groot bedrijf.** Het ingenieursleiderschap van een financiële-technologiebedrijf merkte dat deploymentfrequentie bijna 40% gestegen was in de twee kwartalen na brede AI-codeerassistent-adoptie, en rapporteerde dit initieel als een rechtlijnige productiviteitswinst in een bestuurspresentatie. Een zorgvuldigere vervolganalyse, getriggerd door een sceptisch bestuurslid's vraag over of kwaliteit gecheckt was, vond dat wijzigingsfoutpercentage bijna in stap gestegen was met deploymentfrequentie, de schijnbare winst volledig compenserend eenmaal de gekoppelde stabiliteitsmetriek daadwerkelijk onderzocht werd. De herziene rapportage van het bedrijf presenteert nu deploymentfrequentie en wijzigingsfoutpercentage expliciet samen wanneer AI-geassisteerde-productiviteitsclaims gemaakt worden, de eerdere, bijna publieke, misleidende claim vermijdend.

**Overheid.** Een IT-afdeling van een provinciale overheid die AI-codeerassistentie piloteerde voor een subset van zijn ingenieursteams vond dat ruwe codeoutput per ingenieur substantieel gestegen was, een cijfer initieel gunstig geciteerd in een interne pilotreview. Een nadere analyse, getriggerd door de begeleiding van dit boek geïncorporeerd in het evaluatieframework van de afdeling, onderzocht ontsnapte-defectfrekvens voor AI-geassisteerd-versus-niet-AI-geassisteerd-werk specifiek en vond een matig verhoogd defecttempo in de AI-geassisteerde cohort, geconcentreerd in randgevalafhandeling voor ongewone burgeromstandigheden waaraan de AI-tooling niet blootgesteld was geweest tijdens training. Deze bevinding stopte de pilot niet maar leidde wel tot een specifieke, gerichte toename in reviewrigoureusheid voor AI-geassisteerde wijzigingen die geschiktheids-randgeval-logica aanraakten, het daadwerkelijke risico aanpakkend dat de ruwe-output-metriek alleen nooit onthuld zou hebben.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van deze audit proactief uitvoeren is een publieke of bestuursniveau-verlegenheid vermijden van het rapporteren van een metriek die, onder doorlichting, blijkt niets echt gemeten te hebben, precies het scenario dat het financiële-technologievoorbeeld hierboven bijna produceerde. Een organisatie die vooruit komt op deze verschuiving onderhoudt geloofwaardigheid met zijn belanghebbenden; een die gevangen wordt een holle metriek rapporterend betaalt een echte, en grotendeels vermijdbare, reputatiekost.

De totale eigendomskosten zijn de analytische inspanning om de bestaande metriekenset te auditeren, beschermmetrieken te verstrakken, en governancedocumentatie te updaten, een eenmalige, gematigde investering relatief aan het doorlopende risico van doorgaan met metrieken rapporteren die stilletjes gestopt zijn te meten wat ze claimen te meten. Deze kost is ook recurrent op een lager niveau, omdat deze verschuiving doorlopend is, geen eenmalige gebeurtenis, en periodieke herbeoordeling naarmate tooling- en adoptiepatronen blijven evolueren een redelijke, permanente toevoeging is aan een metriekgovernancecadans.

## Antipatronen en valkuilen

- **Doorgaan met pre-AI-era-activiteitsmetrieken onveranderd en onkritisch te rapporteren:** riskeert een metriek te vieren die stilletjes gestopt is te correleren met echte waarde.
- **Deploymentfrequentie- of outputvolumetoenames rapporteren zonder de gekoppelde stabiliteitsbeschermmetriek:** herhaalt de waarschuwing van hoofdstuk 2.10 met significant hogere inzet onder AI-geassisteerde ontwikkeling.
- **Aannemen dat AI-gegenereerde code hetzelfde defectprofiel draagt als mensgeschreven code zonder te checken:** een ongeteste aanname die actief verkeerd zou kunnen zijn.
- **Reviewdiepte stilletjes laten eroderen onder verhoogd AI-gegenereerd-codevolume:** het rubberen-stempel-risico van hoofdstuk 2.9, geïntensiveerd.
- **Deze verschuiving behandelen als een eenmalige aanpassing in plaats van een doorlopende zorg:** de tooling en zijn adoptiepatronen blijven evolueren, en meetpraktijk moet tred houden.
- **Vergelijken tegen sectorbenchmarks zonder te begrijpen of die benchmarks zelf verschoven zijn onder dezelfde druk:** riskeert een vals gevoel van relatieve prestatie.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Pre-AI-era-metrieken worden onveranderd gerapporteerd, zonder bewustzijn dat AI-adoptie hun geldigheid beïnvloed zou kunnen hebben.
- **Niveau 2, Ontwikkelen:** Enig bewustzijn van de verschuiving bestaat, maar geen systematische audit van de bestaande metriekenset is uitgevoerd.
- **Niveau 3, Standaardiseren:** Een volledige metriekenset-audit is uitgevoerd, met beschermmetrieken verstrakt en metrieken gedocumenteerd als beïnvloed of resistent, organisatiebreed.
- **Niveau 4, Beheren:** Defecten en kwaliteitsuitkomsten worden actief getagd en bijgehouden op AI-assistentieniveau om te testen, niet aan te nemen, dat de historische kwaliteitsrelaties van de organisatie nog standhouden.
- **Niveau 5, Orkestreren:** De organisatie heeft een volwassen, doorlopende praktijk van zijn metrieken herbekijken naarmate AI-tooling en adoptiepatronen blijven evolueren, en kan wijzen naar specifieke governancebeslissingen proactief gemaakt in reactie op deze verschuiving in plaats van reactief na dat een probleem opduikt.

## Discussie-ideeën

1. Welke van onze huidige metrieken zouden het meest een team vleien dat AI-assistentie zwaar gebruikt maar niet meer echte waarde produceert?
2. Is onze deploymentfrequentie gestegen sinds AI-adoptie, en is wijzigingsfoutpercentage ermee bewogen?
3. Taggen we kwaliteitsuitkomsten op AI-assistentieniveau, en wat zou die data tonen?
4. Houdt onze reviewcapaciteit tred met enige toename in AI-gegenereerd-codevolume?
5. Welke sectorbenchmark vergelijken we momenteel onszelf tegen, en is het zelf verschoven onder deze druk?

## Belangrijkste inzichten

- Generatieve AI is een **paradigmaverschuiving in wat verscheidene bestaande metrieken meten**, geen incrementele toolingverandering; sommige metrieken zijn stilletjes gestopt te betekenen wat ze vroeger betekenden.
- **Activiteits- en ruwe-output-metrieken zijn het meest blootgesteld**; uitkomstmetrieken (deel 5) zijn vergelijkenderwijs resistent.
- **Verstrak beschermmetrieken, vooral wijzigingsfoutpercentage**, proportioneel aan AI-geassisteerde-ontwikkeling-adoptie.
- **Test, neem niet aan, of AI-gegenereerde code een ander defectprofiel draagt** dan mensgeschreven code, getagde ontsnapte-defectdata gebruikend.
- Behandel dit als een **doorlopende, geen eenmalige, governancezorg** (hoofdstuk 1.4), omdat de tooling en zijn adoptiepatronen blijven evolueren.

## Bronnen en verder lezen

- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de uitkomst-gebaseerde-metingbasis waarvan dit hoofdstuk beargumenteert dat die meer, niet minder, belangrijk wordt onder deze verschuiving).
- GitHub's onderzoek naar AI pair programming en ontwikkelaarsproductiviteit (sectoronderzoek naar de meetbare effecten van AI-geassisteerde ontwikkeling).
- Google Cloud's DevOps Research and Assessment-programma, [dora.dev](https://dora.dev/) (doorlopend State-of-DevOps-onderzoek dat AI-adoptiebevindingen incorporeert in recente jaren).
- *The Tyranny of Metrics*, door Jerry Z. Muller (de algemene zaak voor scepsis richting volume-gebaseerde metrieken, direct relevant terwijl outputvolume goedkoop wordt).
