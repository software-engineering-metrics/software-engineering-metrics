# 1.6 Statistische geletterdheid voor technische metrieken

## Overzicht en motivatie

Je hebt geen statistiekgraad nodig om een metriekenprogramma goed te runnen, maar je moet een klein aantal specifieke, veelvoorkomende fouten vermijden die anders goed-bestuurde, goed-geïnstrumenteerde metrieken actief misleidend maken. Een team kan alles goed doen, een duidelijke beslissing benoemen, Goodharts wet vermijden, richting uitkomsten wegen, eigenaarschap besturen, betrouwbaar instrumenteren, en nog steeds de verkeerde conclusie trekken omdat het een gemiddelde las waar het een percentiel nodig had, ruis verwarde met een trend, of viel voor een toeval verkleed als een oorzaak. Dit onderwerp is het minimale statistische oordeel dat dit boek aanneemt dat elke lezer van elk later onderwerp al heeft.

Het kernprobleem is dat technische metrieken meestal bullrig, scheef, en klein-steekproef zijn volgens de standaarden van formele statistiek. Het wekelijkse deploymentaantal van een enkel team is geen gladde klokkromme; het is een handvol datapunten met occasionele grote uitschieters (een grote release, een incident-gedreven terugdraai-reeks). Naïeve intuïties gebouwd voor grote, goed-gedragen datasets toepassen op dit soort data produceert op gezette tijden zelfverzekerde, verkeerde conclusies. Leren herkennen wanneer een cijfer te bullrig is om te vertrouwen, wanneer een gemiddelde tegen je liegt, en wanneer twee dingen die samen bewegen niets zeggen over causatie, is geen optionele rigor, het is wat een metriekenprogramma dat een organisatie iets waars leert onderscheidt van een die het iets plausibel-klinkend en vals leert.

Op grote-bedrijf- en overheidsschaal stapelen statistische fouten zich op omdat een misleidende conclusie, eenmaal aanvaard door leiderschap, over vele teams wordt gehandeld voordat iemand erover denkt de onderliggende analyse te herbezoeken. Een statistisch naïeve vergelijking tussen twee divisies, of tussen voor en na een grote reorganisatie, kan resourcingbeslissingen jarenlang vormen gebaseerd op niets meer dan ruis of een verstorende variabele waarvoor niemand controleerde. Dit onderwerp bestaat om dat falen minder waarschijnlijk te maken.

## Kernprincipes

- **Een mediaan of percentiel vertelt je meestal meer dan een gemiddelde.** Technische data is routinematig scheef door uitschieters die gemiddelden absorberen en percentielen niet.
- **Kleine steekproeven produceren bullrige cijfers.** Een percentage berekend uit een handvol gebeurtenissen schommelt wild om redenen die niets te maken hebben met echte verandering.
- **Regressie naar het gemiddelde foppt mensen constant.** Een ongewoon goede of slechte aflezing wordt doorgaans gevolgd door een normalere, met of zonder enige interventie.
- **Correlatie is geen causatie, en verstorende variabelen zijn overal.** Twee metrieken die samen bewegen kunnen een verborgen derde oorzaak delen in plaats van dat de ene de andere drijft.
- **Een [regelkaart](https://en.wikipedia.org/wiki/Control_chart) verslaat een enkele voor-en-na-vergelijking.** Het normale variatiebereik zien is wat je laat toe een echte verschuiving van ruis te onderscheiden.

## Aanbevelingen

### Standaard mediaan en percentielen voor scheve data

Technische tijdgebaseerde metrieken, doorlooptijd, incidenthersteltijd, responslatentie, zijn bijna altijd rechts-scheef: de meeste waarden klonteren laag, met een lange staart van occasionele grote uitschieters. Een gemiddelde getrokken door die staart kan een beeld schilderen dat geen typisch geval daadwerkelijk toont. Rapporteer de **mediaan** (de middelste waarde, waar de helft van de observaties erboven en de helft erbeneden ligt) naast het **90e** of **95e percentiel** (de waarde waaronder 90% of 95% van de observaties valt), die samen zowel het typische geval als de ergste-staart-geval tonen dat een team daadwerkelijk ervaart. Het KPI-onderwerp van de zusterboek `software-engineering-guide`, en elk leveringsmetriek-onderwerp in deel 2 van dit boek, neemt deze gewoonte overal aan.

### Weet wanneer een steekproef te klein is om te vertrouwen

Een wijzigingsfoutpercentage berekend uit drie deployments in een rustige week is geen betekenisvol signaal; één fout beweegt het percentage van 0% naar 33% van de ene op de andere dag om redenen die mogelijk niets te maken hebben met onderliggend risico. Voordat je reageert op een percentage-gebaseerde metriek, controleer de onderliggende telling. Als praktische vuistregel, behandel een percentage berekend uit minder dan ongeveer twintig tot dertig onderliggende gebeurtenissen als bullrig en vereisend een langer observatievenster voordat je een conclusie trekt, en zeg dat expliciet op het dashboard in plaats van een volatiel klein-steekproef-percentage te presenteren met hetzelfde vertrouwen als een stabiel groot-steekproef-percentage.

### Let op regressie naar het gemiddelde voordat je een interventie crediteert

Als de ooit-slechtste week voor incidenten van een team gevolgd wordt door leiderschapsaandacht en een daaropvolgende verbetering, is het verleidelijk de interventie te crediteren. Vaak zou een deel van die verbetering toch gebeurd zijn, omdat een ongewoon extreme aflezing doorgaans gevolgd wordt door een typischere puur als een statistisch artefact, een fenomeen genaamd **regressie naar het gemiddelde**. Bewaak hiertegen door te vergelijken tegen een langere historische baseline in plaats van het enkele extreme datapunt dat aandacht triggerde, en door passend bescheiden te zijn over hoeveel van enige geobserveerde verbetering toe te schrijven aan een specifieke actie.

### Zoek naar verstorende variabelen voordat je beweert dat een metriek een uitkomst veroorzaakte

Wanneer twee metrieken samen bewegen, deploymentfrequentie die stijgt naast klanttevredenheid, weersta de reflex om te beweren dat de ene de andere veroorzaakte voordat je een **verstorende variabele** overweegt: een verborgen derde factor die beide drijft. Een nieuwe functielancering zou onafhankelijk zowel deploymentfrequentie (meer vervolgfixes) als tevredenheid (de functie zelf) kunnen stuwen, zonder enige causale link tussen de twee metrieken. Voordat je een correlatie presenteert als bewijs van causatie, vraag actief wat anders tegelijk veranderde dat beide bewegingen zou kunnen verklaren.

### Gebruik een regelkaart, niet een enkel voor-en-na-ogenblikfoto

Een **regelkaart** plot een metriek over tijd met zijn normale variatiebereik expliciet getoond, typisch als banden rond een centraal gemiddelde. Dit laat je een echte verschuiving, een datapunt of aanhoudende reeks buiten het normale bereik, onderscheiden van gewone ruis die een enkele voor-en-na-vergelijking niet uit elkaar kan houden. Voordat je verklaart "het cijfer verbeterde na de verandering," plot genoeg historische data om te zien hoe normale variatie eruitziet, en controleer of de na-verandering-aflezing daadwerkelijk erbuiten valt.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Gemiddelden | Simpel, bekend, makkelijk te berekenen | Vervormd door uitschieters op scheve technische data |
| Mediaan en percentielen | Robuust tegen uitschieters, tonen typisch geval en staart samen | Iets minder bekend voor niet-technische publiek |
| Enkele voor-en-na-vergelijking | Snel, intuïtief, makkelijk te presenteren | Vatbaar voor regressie naar het gemiddelde en voor ruis |
| Regelkaarten en langere baselines | Onderscheidt echte verschuivingen van ruis betrouwbaar | Vereist meer historische data en meer uitleg aan een niet-technisch publiek |

De centrale spanning is **eenvoud versus rigor**. Gemiddelden en enkele voor-en-na-vergelijkingen zijn makkelijker te berekenen en uit te leggen, wat precies waarom ze casual rapportage domineren, maar ze zijn ook de twee technieken die het meest waarschijnlijk een zelfverzekerde, verkeerde conclusie produceren op het soort bullrige, scheve data dat de metrieken van dit boek genereren. Los de spanning op door standaard de meer rigoreuze technieken te gebruiken, mediaan, percentielen, en regelkaarten, voor elke beslissing met echte gevolgen, en de eenvoudigere technieken te reserveren voor laag-inzet, verkennende blikken waar een verkeerde lezing weinig kost.

## Vragen om met je team te bespreken

1. **Welke van onze dashboardtegels rapporteren een gemiddelde waar een mediaan of percentiel een eerlijker verhaal zou vertellen?** Tijdgebaseerde technische metrieken zijn bijna altijd scheef, en een gemiddelde op scheve data kan fijn uitzien terwijl het typische geval, of de ergste-staart-geval, een heel ander verhaal vertelt. Audit je tijdgebaseerde tegels specifiek voor deze substitutie.

2. **Hoe klein is de onderliggende steekproef achter onze percentage-gebaseerde metrieken, en behandelen we een metriek van tien gebeurtenissen met hetzelfde vertrouwen als een van duizend?** Een volatiel klein-steekproef-percentage gepresenteerd zonder zijn onderliggende telling nodigt overreactie op ruis uit. Controleer je wijzigingsfoutpercentage en gelijkaardige percentagetegels voor dit gat.

3. **Hebben we ooit een interventie gecrediteerd voor een verbetering die regressie naar het gemiddelde toch zou hebben geproduceerd?** Dit is een van de makkelijkste statistische fouten om te maken en een van de moeilijkste om achteraf te merken, omdat de interventie en de verbetering echt in die volgorde gebeurden. Kijk terug naar een recent "we hebben het gefixt"-verhaal en vraag eerlijk of de baseline-vergelijking lang genoeg was om dit uit te sluiten.

4. **Waar hebben we aangenomen dat één metriek een andere veroorzaakte zonder te controleren op een verstorende variabele?** Twee dingen die samen bewegen is gewoon; de ene veroorzaakt de andere is een sterkere claim die meer bewijs nodig heeft. Kies een correlatie waar je team momenteel in gelooft en probeer een plausibele verstoring te benoemen die het zou verklaren zonder enige causale link.

5. **Hebben we genoeg historische data om te weten hoe normale variatie eruitziet voor onze belangrijkste metrieken, of vergelijken we enkele punten?** Zonder een gevoel voor normaal bereik ziet elke enkele aflezing alarmerend of geruststellend uit afhankelijk van stemming in plaats van bewijs. Bespreek of je meest-bekeken metriek ooit geplot is als een regelkaart in plaats van een enkel cijfer.

6. **Hoe communiceren we momenteel onzekerheid naar niet-technische belanghebbenden, en impliceert ons dashboard meer precisie dan de data daadwerkelijk ondersteunt?** Een diagram zonder indicatie van normale variatie of steekproefgrootte kan een leiderschapsteam laten overreageren op ruis of, net zo vaak, een echt signaal afdoen als ruis. Bespreek hoe je rapportage dit eerlijk zou kunnen communiceren zonder onleesbaar te worden.

## Sectorperspectief

**Startup.** Kleine teams genereren bijna overal kleine steekproeven, wat betekent dat de klein-steekproef-waarschuwing in dit onderwerp constant ertoe doet. Weersta het trekken van sterke conclusies uit één slechte week of één geweldige; met slechts een handvol datapunten is het eerlijke antwoord op "is dit een trend" vaak "we weten het nog niet."

**Klein bedrijf.** Ingebouwde dashboards van standaardtools gaan vaak standaard naar gemiddelden en enkele-periode-vergelijkingen omdat die het simpelst zijn te berekenen en weergeven. Waar de tool het toelaat, schakel over naar mediaan voor tijdgebaseerde metrieken, en wees sceptisch over elke "40% omhoog deze maand"-headline berekend uit een kleine onderliggende telling.

**Groot bedrijf.** Statistische fouten op deze schaal worden ingebakken in resourcing- en reorganisatiebeslissingen die honderden mensen beïnvloeden. Investeer in analisten of ingebedde datapractici die goede regelkaarten kunnen bouwen en controleren op verstoringen voordat een vergelijking tussen bedrijfsonderdelen of voor-en-na een grote verandering wordt gepresenteerd aan leiderschap als vastgesteld feit.

**Overheid.** Een statistisch naïeve vergelijking die een openbaar rapport of een budgetrechtvaardiging voedt kan buitensporige reële-wereld-gevolgen hebben en nodigt precies het soort doorlichting uit dat slordige analyse publiekelijk blootlegt. Pas de meer rigoreuze technieken, regelkaarten, gedocumenteerde steekproefgroottes, verstoringscontroles, toe als staande praktijk voor alles extern gepubliceerd, niet alleen als een occasionele beste-poging.

## Voorbeelden

**Groot bedrijf.** Het leiderschapsteam van een softwarebedrijf vierde een verbetering van 25% in wijzigingsfoutpercentage de maand na het uitrollen van een nieuw codereviewbeleid, het beleid direct crediterend. Een nadere blik vond dat de "voor"-maand een ongewoon slechte was geweest, gedreven door de misgelopen migratie van een enkel team, en de onderliggende steekproefgrootte in beide maanden was onder dertig deployments bedrijfsbreed. Een regelkaart met twaalf maanden geschiedenis liet zien dat de nieuwe aflezing goed binnen normale variatie viel, geen echte stapverandering, en het daadwerkelijke effect van het beleid, hoewel echt, was veel kleiner dan het headline-cijfer suggereerde.

**Overheid.** Een openbaar vervoersagentschap rapporteerde een grote jaar-op-jaar-verbetering in op-tijd-prestatie voor een nieuw gedigitaliseerd planningssysteem, een enkel "voor"-kwartaal vergelijkend met een enkel "na"-kwartaal. Een onafhankelijke review vond dat het "voor"-kwartaal had samengevallen met een ongerelateerde bouwsluiting die prestatie over het hele netwerk had gedrukt, en een langere baseline liet zien dat op-tijd-prestatie al herstellende was voordat het nieuwe systeem lanceerde. Het herziene rapport van het agentschap gebruikte een volledige meerjarige regelkaart en schreef een bescheidener, maar meer verdedigbare, verbetering toe aan het nieuwe systeem specifiek.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van statistische geletterdheid is vermeden misleiding: een organisatie die een verbetering correct toeschrijft, of ruis correct erkent als ruis, besteedt zijn volgende investering waar het daadwerkelijk zal helpen in plaats van een fantoomeffect te jagen. Het detailhandelsvoorbeeld hierboven is typisch: een bedrijf dat geloofde dat zijn reviewbeleid alleen een verbetering van 25% dreef, zou kunnen onderinvesteren in andere echte bijdragers, of de waarde van het beleid overdrijven op een manier die toekomstige beslissingen misleidt.

De totale kost van statistische rigor is vooral een verschuiving in gewoonte in plaats van nieuwe tooling: een mediaan kiezen boven een gemiddelde, een steekproefgrootte controleren voordat je reageert, een langere baseline plotten voordat je overwinning verklaart. Deze gewoontes kosten weinig om aan te nemen en voorkomen de veel grotere, moeilijker-te-detecteren kost van beslissingen gemaakt op zelfverzekerde, verkeerde conclusies.

## Antipatronen en valkuilen

- **Een gemiddelde rapporteren op scheve tijdgebaseerde data:** verbergt het typische geval en de staart achter een enkel misleidend cijfer.
- **Reageren op een percentage zonder zichtbare steekproefgrootte:** behandelt ruis van een handvol gebeurtenissen alsof het een stabiele, betekenisvolle trend was.
- **Een interventie crediteren zonder regressie naar het gemiddelde uit te sluiten:** een veelvoorkomende, makkelijk-te-maken, moeilijk-te-merken fout.
- **Causatie beweren uit correlatie zonder verstoringen te overwegen:** overdrijft wat de data daadwerkelijk ondersteunt.
- **Een enkele voor-en-na-ogenblikfoto vergelijken in plaats van een langere baseline plotten:** kan een echte verschuiving niet onderscheiden van gewone variatie.
- **Meer precisie impliceren dan de data ondersteunt in leiderschapgerichte rapportage:** nodigt overreactie op ruis uit of afwijzing van een echt signaal.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Metrieken worden gerapporteerd als ruwe gemiddelden en enkele voor-en-na-ogenblikfoto's zonder aandacht voor steekproefgrootte, scheefheid, of baselinevariatie.
- **Niveau 2, Ontwikkelen:** Sommige analisten passen mediaan of percentielen informeel toe, maar er is geen consistente organisatorische praktijk en verstoringen worden zelden gecontroleerd.
- **Niveau 3, Standaardiseren:** Mediaan en percentielen zijn de standaard voor scheve tijdgebaseerde metrieken; steekproefgroottes worden getoond naast percentage-gebaseerde metrieken organisatiebreed.
- **Niveau 4, Beheren:** Regelkaarten met historische baselines zijn standaardpraktijk voor elke claim van een echte verschuiving; verstorende variabelen worden actief overwogen voordat causale claims gemaakt worden in rapportage.
- **Niveau 5, Orkestreren:** Statistische rigor is ingebouwd in de tooling zelf, dashboards renderen percentielen en regelbanden standaard, en de organisatie kan demonstreren dat een specifiek verleden besluit gecorrigeerd werd omdat een statistisch naïeve lezing gevangen werd voordat het strategie vormde.

## Discussie-ideeën

1. Welke van onze huidige dashboardheadlines zouden anders uitzien als we een gemiddelde door een mediaan vervangen?
2. Hebben we ooit een beslissing veranderd omdat een percentage bleek gebaseerd te zijn op een veel kleinere steekproef dan we aannamen?
3. Wat is een recent "we hebben deze metriek verbeterd"-verhaal dat we zouden moeten herbezoeken voor regressie naar het gemiddelde?
4. Waar zouden twee van onze metrieken gecorreleerd kunnen zijn door een verborgen derde oorzaak in plaats van dat de ene de andere drijft?
5. Tonen onze belangrijkste diagrammen een normaal variatiebereik, of gewoon een enkele trendlijn?

## Belangrijkste inzichten

- Verkies **mediaan en percentielen** boven gemiddelden voor scheve, tijdgebaseerde technische metrieken.
- Behandel een **percentage uit een kleine steekproef** als bullrig, en zeg dat expliciet in plaats van erop te reageren als een stabiele trend.
- Let op **regressie naar het gemiddelde** voordat je een interventie crediteert voor een verbetering die volgde op een ongewoon slechte aflezing.
- **Correlatie is geen causatie**; zoek actief naar verstorende variabelen voordat je een causale claim maakt.
- Gebruik een **regelkaart met een echte historische baseline**, niet een enkele voor-en-na-ogenblikfoto, om een echte verschuiving van gewone ruis te onderscheiden.

## Bronnen en verder lezen

- *The Signal and the Noise*, door Nate Silver (echt signaal onderscheiden van ruis in imperfecte data).
- *How to Measure Anything*, door Douglas W. Hubbard (statistisch redeneren voor organisatorische meting).
- *Understanding Variation: The Key to Managing Chaos*, door Donald J. Wheeler (regelkaarten en het onderscheid tussen gewone-oorzaak- en speciale-oorzaak-variatie).
- *Thinking, Fast and Slow*, door Daniel Kahneman (cognitieve vooroordelen inclusief regressie naar het gemiddelde en de illusie van causaal narratief).
- *The Visual Display of Quantitative Information*, door Edward R. Tufte (eerlijke, hoge-integriteit-presentatie van kwantitatieve data).
