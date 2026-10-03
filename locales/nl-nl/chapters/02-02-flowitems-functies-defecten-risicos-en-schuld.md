# 2.2 Flowitems: functies, defecten, risico's, en schuld

## Overzicht en motivatie

Een **flowitem** is de werkeenheid van het Flow Framework, en elk flowitem behoort tot precies een van vier types: **functies**, nieuwe bedrijfswaarde of capaciteit geleverd aan een klant; **defecten**, kwaliteitsfixes voor bugs gevonden door gebruikers of testen; **risico's**, beveiligings-, compliance-, privacy-, en governancewerk dat het bedrijf beschermt; en **schuld**, [technische schuld](https://en.wikipedia.org/wiki/Technical_debt), architecturale verbetering, en infrastructuurwerk dat toekomstige snelheid mogelijk maakt. Hoofdstuk 2.1 introduceerde het raamwerk waartoe deze vier categorieën behoren; dit hoofdstuk gaat diep op de taxonomie zelf, omdat de categorieën alleen waarde leveren als een team zijn werk er eerlijk en consistent in classificeert.

De definiërende eigenschap van flowitems is dat toewijzing over de vier types een **zero-sum-spel** is: een vaste hoeveelheid ingenieurscapaciteit bestaat in elke gegeven periode, en elk uur besteed aan een functie is een uur niet besteed aan schuld-, risico-, of defectwerk. Dit is geen nieuw feit over softwarelevering, elke ingenieursleider weet al dat capaciteit eindig is, maar de meeste organisaties hebben geen consistente, eerlijke manier om de daadwerkelijke splitsing te zien. Sprintsnelheid telt story points ongeacht type; een afgebouwde backlog ziet identiek uit of het werk erachter een nieuwe afrekenflow was of drie maanden van glorieloze beveiligingsherstel. Flowitems bestaan specifiek om die onzichtbare splitsing zichtbaar te maken.

Voor grote teams verandert deze zichtbaarheid de aard van een resourcingconversatie. In plaats van een ingenieursleider die een ongekwantificeerd argument maakt dat "we meer tijd nodig hebben voor technische schuld," produceert flowitem-classificatie een daadwerkelijk cijfer, schuld consumeerde 30% van vorig kwartaals capaciteit, dat besproken, verdedigd, en bewust aangepast kan worden met bedrijfsbelanghebbenden. Grote bedrijven die veel gelijktijdige productlijnen runnen en overheidsinstanties die nieuwe burgergerichte functionaliteit balanceren tegen legacy-systeemrisico vertrouwen beide veel meer op dit soort verdedigbare, gekwantificeerde afweging dan een privé, informeel gevoel dat "we besteden te veel tijd aan onderhoud."

## Kernprincipes

- **Elk flowitem behoort tot precies één type.** Een enkele classificatie afdwingen, in plaats van een vermengde of ambigue toe te staan, is wat de taxonomie gebruikbaar maakt voor geaggregeerde rapportage.
- **Toewijzing is zero-sum, niet additief.** Meer capaciteit voor functies is noodzakelijkerwijs minder capaciteit voor defecten, risico, en schuld in dezelfde periode.
- **Er is geen universeel gezonde verdeling.** Een jong product in een groeifase zou legitiem moeten neigen naar functies; een volwassen systeem dat echt technisch risico draagt zou legitiem moeten neigen naar schuld- en risicowerk.
- **Schuld- en risicowerk wordt chronisch onderrapporteerd zonder deze discipline.** Het gebeurt doorgaans stilletjes, opgenomen in generieke "ingenieurstaken," tot flowitem-classificatie het in de openheid dwingt.
- **Classificatiekwaliteit bepaalt de hele waarde van de taxonomie.** Een taxonomie inconsistent toegepast of achteraf gemanipuleerd produceert cijfers die actief misleiden in plaats van informeren.

## Aanbevelingen

### Classificeer elk item bij intake, met een geschreven definitie voor elk type

Kom overeen op een beknopte, geschreven definitie voor wat telt als een functie, een defect, een risico, en schuld in je specifieke context, en vereis dat elk nieuw stuk werk geclassificeerd wordt tegen die definitie op het moment dat het de waardestroom binnenkomt, niet nadat het voltooid is. Een vooraf overeengekomen definitie weerstaat de verleiding om retroactief te classificeren gebaseerd op hoe een stuk werk uiteindelijk uitzag, wat precies het manipulatierisico is dat dit hoofdstuk direct hieronder benoemt.

### Rapporteer flowverdeling als een trend, niet een enkele ogenblikfoto

De verdeling van een enkele periode vertelt je minder dan de trend over verschillende periodes. Een stabiele drift richting één itemtype, functies klimmend terwijl schuld stilletjes krimpt kwartaal over kwartaal, is een veel sterker signaal dan het cijfer van een enkele periode, en het is doorgaans het patroon waard om op te werpen bij belanghebbenden voordat het een crisis wordt in plaats van erna.

### Stel een bewuste doelverdeling met bedrijfsbelanghebbenden, niet alleen ingenieurswerk

Besluit, samen met product- en bedrijfsleiderschap, hoe een gezonde verdeling eruitziet voor de huidige fase van je specifieke waardestroom, en herbezoek dat doel periodiek in plaats van het standaard te laten afdrijven. Een jong, groeifase-product en een volwassen, stabiliteitsfase-systeem hebben legitiem verschillende gezonde doelen, en het doel zelf zou een onderhandelde bedrijfsbeslissing moeten zijn, geen iets dat ingenieurswerk stilletjes alleen beslist.

### Kruiscontroleer flowitem-classificatie tegen onafhankelijk bewijs

Vergelijk periodiek je flowverdeling tegen metrieken die niet afhangen van zelfclassificatie: ontsnapte-defectfrekvens (hoofdstuk 5.1), technische schuldmeting (hoofdstuk 4.5), en kwetsbaarhedenbeheermetrieken (hoofdstuk 6.4). Als defecten of kwetsbaarheden stijgen terwijl de "defecten"- en "risico"-flowitemaandelen plat blijven of krimpen, is die mismatch het duidelijkste beschikbare signaal dat classificatie is afgedreven van de werkelijkheid.

### Bewaak specifiek het functiefabriekpatroon

Wanneer flowverdeling laat zien dat functies consistent bijna alle capaciteit absorberen, kwartaal na kwartaal, met schuld- en risicowerk dat nooit boven een symbolisch aandeel stijgt, betekent dat patroon (soms een "functiefabriek" genoemd) doorgaans dat schuld en risico uitgehongerd worden van capaciteit, niet dat het systeem echt geen onderhoud nodig heeft. Dit patroon is comfortabel op korte termijn en duur later, uiteindelijk verschijnend als een kwaliteits- of beveiligingscrisis die zonder waarschuwing aankomt in het flowverdelingsdiagram, omdat de onderliggende ophoping nooit zichtbaar was.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen formele classificatie (generieke backlog) | Geen procesoverhead | Schuld-, risico-, en defectwerk blijft onzichtbaar; moeilijk resourcingbeslissingen te verdedigen |
| Vier-type-flowitem-classificatie | Maakt capaciteitstoewijzing zichtbaar en onderhandelbaar met belanghebbenden | Vereist intake-tijd-discipline en een geschreven, overeengekomen definitie per type |
| Fijnmaziger classificatie (veel subtypes) | Meer diagnostisch detail | Meer classificatie-inspanning; meer cijfers uit te leggen aan belanghebbenden |
| Retroactieve classificatie | Makkelijker toe te passen, geen voorafgaande procesverandering | Sterk blootgesteld aan manipulatie; classificatie drijft af naar wat het beste eruit ziet |

De centrale spanning is **classificatiediscipline versus procesoverhead**. Een vier-type-taxonomie is bewust grof, grof genoeg dat een item classificeren seconden kost, geen debat, maar die grofheid houdt alleen stand als de discipline van classificeren bij intake, tegen een geschreven definitie, echt volgehouden wordt. Los de spanning op door de taxonomie exact zo simpel te houden, vier types, niet meer, en extra rigor te investeren in de auditstap (kruiscontrole tegen onafhankelijk bewijs) in plaats van in een uitgebreider classificatieschema dat erodeert onder echte werklast.

## Vragen om met je team te bespreken

1. **Als we alles classificeerden dat ons team vorig kwartaal leverde, hoe zou de daadwerkelijke splitsing over functies, defecten, risico, en schuld eruitzien, en zou dat onze belanghebbenden verrassen?** De meeste teams hebben deze oefening nooit eerlijk gedaan. Probeer het met echte data voordat je aanneemt dat je het antwoord al weet.

2. **Hebben we een geschreven, overeengekomen definitie voor wat telt als een functie versus schuld versus risico in onze specifieke context, of hangt classificatie af van wie toevallig het ticket labelt?** Een informele, inconsistente definitie produceert cijfers die precies lijken maar eigenlijk niet vergelijkbaar zijn periode over periode.

3. **Is onze flowverdeling ooit stabiel afgedreven richting één itemtype zonder dat iemand dat bewust besloot?** Een langzame drift is makkelijk te missen periode voor periode maar duidelijk eenmaal geplot als een trend. Trek verschillende periodes data, als je die hebt, en kijk eerlijk naar dit patroon.

4. **Hoe zou een gezonde flowverdeling eruitzien voor de huidige fase van ons product, en hebben we dat doel daadwerkelijk overeengekomen met bedrijfsbelanghebbenden?** De meeste organisaties hebben dit doel nooit expliciet gemaakt, wat betekent dat er geen gedeelde basis is om te merken wanneer de daadwerkelijke verdeling ervan afdrijft.

5. **Matcht onze flowverdeling onafhankelijk bewijs, zoals ontsnapte-defectfrekvens of open kwetsbaarheidsaantallen, of is er een mismatch waard te onderzoeken?** Een mismatch hier is het duidelijkste beschikbare teken dat classificatie is afgedreven van wat het werk daadwerkelijk is.

6. **Zou iemand in ons team stilletjes een schuld- of risico-item kunnen herlabelen als een functie onder leveringsdruk, en zouden we het momenteel merken als ze dat deden?** Dit is het centrale manipulatierisico van het hoofdstuk direct gesteld. Bespreek of je huidige proces dit daadwerkelijk zou vangen, niet alleen of iemand het bewust zou doen.

## Sectorperspectief

**Startup.** Formele classificatie voelt vaak als overhead wanneer het hele team al weet waar iedereen aan werkt. Het nuttige minimum op deze schaal is simpelweg de vier categorieën luid benoemen tijdens planning, zodat schuld- en risicowerk niet stilletjes gedeprioriseerd wordt elke keer dat een functiedeadline druk creëert, een patroon dat slecht ophoopt zodra de codebase en het team beide groeien.

**Klein bedrijf.** Een enkel aangepast veld of label in je bestaande trackingtool is genoeg om flowitem-type te vangen zonder enige toegewijde toolinginvestering. De discipline van consistent classificeren bij intake doet er veel meer toe dan enige toolingverfijning.

**Groot bedrijf.** Flowitem-classificatie is waar dit raamwerk zijn waarde verdient op schaal, omdat een grote organisatie die veel gelijktijdige waardestromen runt geen andere betrouwbare, geaggregeerde manier heeft om te zien hoe capaciteit daadwerkelijk gesplitst wordt over functies, defecten, risico, en schuld. Investeer in tool-geïntegreerde classificatie en periodieke kruiscontroles tegen onafhankelijk bewijs; handmatige, ad hoc classificatie overleeft geen echte organisatorische schaal.

**Overheid.** Flowverdeling geeft een overheidstechnologieleider een verdedigbaar, gekwantificeerd antwoord wanneer gevraagd waarom er niet meer nieuwe burgergerichte functies geleverd worden, wanneer het eerlijke antwoord is dat de risico- en schuldlast van een legacy-systeem een echt, rechtvaardigbaar aandeel capaciteit consumeert. Die afweging expliciet en onderhandeld maken, in plaats van stilletjes geabsorbeerd, bouwt doorgaans meer vertrouwen op bij toezichtsorganen dan een ongekwantificeerd beroep op "technische noodzaak."

## Voorbeelden

**Groot bedrijf.** Het e-commerceplatformteam van een groot detailhandelsbedrijf geloofde, gebaseerd op sprintsnelheid, dat het stabiele functieoutput leverde. Een eerste eerlijke flowitem-classificatieoefening vond dat "functies" eigenlijk maar 40% van voltooid werk uitmaakten, met schuld, veel ervan gekoppeld aan een verouderend afrekensysteem, die bijna een derde van capaciteit consumeerde zonder ooit zo benoemd te zijn in enig eerder rapport. Deze splitsing presenteren aan productleiderschap, naast een stijgend ontsnapte-defectfrekvens dat de schuldlast bevestigde, verzekerde een toegewijd moderniseringsbudget dat het team tevergeefs had aangevraagd twee jaar met alleen kwalitatieve argumenten.

**Overheid.** Het digitale vergunningsteam van een staatsvoertuigagentschap classificeerde zijn backlog voor de eerste keer na een openbare uitval die doorlichting trok naar de stabiliteit van het onderliggende systeem. De oefening onthulde dat "risico"-werk, primair beveiligingspatching dat herhaaldelijk gedeprioriseerd was ten gunste van zichtbare burgergerichte functies, gekrompen was tot onder 5% van capaciteit over het voorafgaande jaar, een patroon dat nooit zichtbaar was geweest in de standaardrapportage van het team. Het leiderschap van het agentschap gebruikte de bevinding om een minimale risicowerktoewijzing te mandateren voortaan, ondersteund door de flowverdelingsdata in plaats van alleen een algemene beleidsverklaring.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van flowitem-classificatie is een verdedigbare, gekwantificeerde basis voor resourcingbeslissingen die voorheen kwalitatief beargumenteerd werden en vaak verloren tegen welk werk het meest zichtbaar was voor belanghebbenden. Het detailhandelsvoorbeeld hierboven, een moderniseringsbudget verzekeren met daadwerkelijke capaciteitsdata in plaats van een algemeen beroep, is het patroon deze discipline betrouwbaar produceert: een specifiek cijfer is veel moeilijker af te wijzen dan een algemene indruk dat "we meer tijd nodig hebben voor onderhoud."

De totale eigendomskosten zijn laag eenmaal de taxonomie en zijn definities overeengekomen zijn: classificatie voegt seconden toe aan intake, geen betekenisvolle proceslast, en de toolingintegratie nodig om het te volgen is meestal een enkel aangepast veld of label. De echte, lopende kost is de discipline van eerlijke classificatie volhouden onder leveringsdruk, wat waarom de periodieke kruiscontrole tegen onafhankelijk bewijs er net zoveel toe doet als de initiële adoptie.

## Antipatronen en valkuilen

- **Werk retroactief classificeren, nadat de uitkomst gekend is:** de manipulatievector aan de kern van dit hoofdstuk. Onder leveringsdruk kan een team stilletjes schuld- of risicowerk labelen als een functie achteraf, of een ambigu item afronden richting welk type er beter uitziet op het verdelingsdiagram, zonder dat enige enkele beslissing ooit oneerlijk lijkt op zichzelf. De beschermmetriek is intake-tijd-classificatie tegen een geschreven definitie, gecombineerd met periodieke audits die flowverdeling vergelijken tegen onafhankelijk bewijs zoals ontsnapte-defectfrekvens (hoofdstuk 5.1) en kwetsbaarheidsmetrieken (hoofdstuk 6.4), dezelfde audit-tegen-onafhankelijk-bewijs-discipline hoofdstuk 1.2 vraagt voor elke metriek in dit boek.
- **Functies consistent bijna alle capaciteit laten absorberen (het functiefabriekpatroon):** hongert schuld- en risicowerk stilletjes uit tot het aan de oppervlakte komt als een crisis.
- **De verdeling van een enkele periode behandelen als het hele beeld:** mist de langzame, cumulatieve drift die een trendweergave duidelijk onthult.
- **Een doelverdeling stellen zonder bedrijfsbelanghebbenden:** verspeelt de hoofdwaarde van het raamwerk, een gedeeld, onderhandeld begrip van de afweging.
- **Een inconsistente of ongedocumenteerde definitie per type gebruiken:** produceert cijfers die precies lijken maar eigenlijk niet vergelijkbaar zijn over tijd.
- **De taxonomie overengineeren met veel subtypes:** voegt classificatieoverhead toe die discipline erodeert zonder proportioneel inzicht toe te voegen.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Werk wordt generiek getrackt, zonder flowitem-classificatie; schuld- en risicowerk is onzichtbaar in rapportage.
- **Niveau 2, Ontwikkelen:** Sommige teams classificeren flowitems informeel, maar definities zijn inconsistent en classificatie gebeurt vaak retroactief.
- **Niveau 3, Standaardiseren:** Alle teams classificeren bij intake tegen een gedeelde, geschreven definitie, en flowverdeling wordt gevolgd als een trend.
- **Niveau 4, Beheren:** Flowverdeling wordt periodiek kruisgecontroleerd tegen onafhankelijk bewijs, en doelverdelingen worden bewust gesteld met bedrijfsbelanghebbenden.
- **Niveau 5, Orkestreren:** Flowitem-data informeert direct resourcing- en investeringsbeslissingen over de organisatie, en leiderschap kan wijzen naar specifieke beslissingen gemaakt omdat classificatie een voorheen onzichtbare afweging expliciet maakte.

## Discussie-ideeën

1. Wat zou een eerlijke flowitem-splitsing van vorig kwartaals werk laten zien, en zou dat iemand verrassen?
2. Hebben we een geschreven definitie voor elk van de vier flowitemtypes, of hangt classificatie af van wie het werk labelt?
3. Is onze flowverdeling ooit afgedreven richting één itemtype zonder een bewuste beslissing erachter?
4. Welk onafhankelijk bewijs zouden we onze flowverdeling vandaag tegen kunnen kruiscontroleren?

## Belangrijkste inzichten

- Een **flowitem** behoort tot precies een van vier types, functies, defecten, risico's, of schuld, en capaciteitstoewijzing over hen is **zero-sum**.
- Er is **geen universeel gezonde verdeling**; de juiste mix hangt af van de fase van een product en zou een bewust, onderhandeld doel moeten zijn met bedrijfsbelanghebbenden.
- De centrale manipulatievector van het hoofdstuk is **retroactieve classificatie**, stilletjes schuld- of risicowerk herlabelen als een functie achteraf; de beschermmetriek is intake-tijd-classificatie plus periodieke audits tegen onafhankelijk bewijs.
- Bewaak specifiek het **functiefabriekpatroon**, functies die consistent bijna alle capaciteit absorberen, wat schuld- en risicowerk uithongert tot het aan de oppervlakte komt als een crisis.
- Flowverdeling is het meest waardevol als een **trend**, en zijn grootste opbrengst komt van hem direct delen met bedrijfsbelanghebbenden.

## Bronnen en verder lezen

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr, en George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
