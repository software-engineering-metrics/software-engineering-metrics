# 2.5 Flow-efficiëntie en onderhanden werk

## Overzicht en motivatie

**Flow-efficiëntie** is de verhouding van actieve tijd tot totale tijd voor een stuk werk: als een wijziging tien uur actief wordt gecodeerd, gereviewd, en getest, maar negentig uur totaal inactief in wachtrijen zit over zijn hele reis, is flow-efficiëntie 10%. De meeste softwareleveringspijplijnen, eerlijk gemeten, landen ergens tussen 10% en 25% flow-efficiëntie, wat mensen verrast die verwachten dat inspanning domineert. De dominante kost in de meeste leveringssystemen is niet hoe lang werk duurt om te doen, het is hoe lang werk wacht om gestart te worden.

**[Onderhanden werk](https://en.wikipedia.org/wiki/Work_in_process)** (OHW) is de telling van items actief gewerkt op op enig moment, over een team of een systeem, dezelfde hoeveelheid onderwerp 2.4 "flowbelasting" noemt. De contra-intuïtieve bevinding achter dit onderwerp, ondersteund door decennia van onderzoek in operations management en geformaliseerd voor softwarelevering door kanban en wachtrijtheorie, is dat het beperken van OHW doorvoer doorgaans *verhoogt*, niet verlaagt, omdat minder werk in beweging op een keer minder contextwisseling, kortere wachtrijen, en snellere voltooiing per item betekent, ook al voelt het alsof minder werk simultaan doen minder output in totaal zou moeten produceren.

Voor grote teams herkadert het begrijpen van flow-efficiëntie bijna elk leveringsprobleem van "mensen moeten sneller werken" naar "werk moet minder wachten." Die herkadering doet ertoe omdat de eerste framing druk op individuen uitnodigt, precies de val onderwerp 2.6 waarschuwt tegen, terwijl de tweede onderzoek uitnodigt naar wachtrijstructuur, reviewcapaciteit, en hoeveel werk simultaan gestart wordt, wat waar de echte, duurzame verbetering doorgaans leeft. Grote bedrijven die veel gelijktijdige initiatieven jongleren over gedeelde teams zijn vooral geneigd tot hoge OHW en lage flow-efficiëntie, omdat nieuw werk starten altijd aanvoelt als vooruitgang zelfs wanneer het stilletjes alles al in beweging vertraagt.

## Kernprincipes

- **Wachttijd, niet actieve inspanning, domineert de meeste leveringspijplijnen.** Flow-efficiëntie onder 25% is typisch, geen teken van een kapot team.
- **Onderhanden werk beperken verhoogt doorgaans doorvoer,** niet verlaagt het, door contextwisseling te verminderen en wachtrijen te verkorten.
- **Nieuw werk starten voelt als vooruitgang; werk afmaken is wat daadwerkelijk waarde levert.** Dit zijn niet hetzelfde ding, en organisaties verwarren ze routinematig.
- **Hoge OHW is vaak onzichtbaar tot gemeten.** Een team kan veel meer gelijktijdig werk jongleren dan iemand individueel beseft.
- **Dit is een systeemniveau-metriek, geen individuele.** OHW-limieten toepassen om individuen te straffen leest het hele punt van de techniek verkeerd.

## Aanbevelingen

### Meet flow-efficiëntie voordat je aanneemt dat inspanning het knelpunt is

Bereken de verhouding van actieve tijd tot totale verstreken tijd voor een representatieve steekproef van recente wijzigingen, met de cyclustijd-stadiumdata uit onderwerp 2.6. De meeste teams die dit voor de eerste keer meten zijn verrast door hoe laag het cijfer is, en die verrassing is zelf waardevol: het stuurt aandacht om van "harder werken" naar "wachtrij verminderen," wat bijna altijd de productievere hefboom is.

### Stel een expliciete onderhanden-werk-limiet en handhaaf hem zichtbaar

Begrens het aantal items een team of een individu actief in uitvoering kan hebben op een keer, zichtbaar op een gedeeld bord (een fysiek of digitaal kanban-bord is de klassieke implementatie). Wanneer de limiet bereikt is, is de volgende actie van het team iets al in beweging helpen afmaken, niet iets nieuws starten. Deze enkele praktijk, geleend van lean-productie en geformaliseerd in kanban, is een van de meest consistent effectieve flowverbeteringen beschikbaar voor een softwareteam, en het kost bijna niets om te implementeren.

### Behandel een OHW-limiet als een systeembeperking, geen individuele quota

Een OHW-limiet bestuurt hoeveel werk het *systeem* (een team, een gedeelde reviewwachtrij, een gedeelde omgeving) in beweging heeft op een keer, niet hoeveel enige persoon mag aanraken. De limiet toepassen als een individuele prestatiequota, "je mag maar twee tickets open hebben," past de techniek verkeerd toe en riskeert precies het soort individueelniveau-manipulatie dit boek doorgaand waarschuwt tegen. De limiet bestaat om flow door het hele systeem te beschermen, en zijn handhaving zou een teamnorm moeten zijn, geen persoonlijk plafond.

### Onderzoek waarom werk inactief zit, niet alleen hoe lang

Wanneer flow-efficiëntie-analyse lange wachttijden onthult, vraag specifiek waarom: wacht werk omdat een reviewer onbeschikbaar is, omdat een gedeelde testomgeving geboekt is, omdat een afhankelijkheid van een ander team nog niet geland is. Elk van deze heeft een andere fix. Een generieke "verminder wachttijd"-richtlijn zonder dit specifieke onderzoek produceert doorgaans generieke, ineffectieve reacties.

### Bewaak OHW die terug omhoog sluipt na een initiële verbetering

Teams die succesvol een OHW-limiet aannemen zien hem vaak eroderen over tijd naarmate druk om nieuwe initiatieven te starten teruggekeert, "net deze keer, we moeten dit urgente ding ook starten." Behandel elke OHW-limietuitzondering als een bewuste, zichtbare beslissing met een gestelde reden, geen stille, routine override, zodat de discipline van de limiet niet stilletjes terugvervalt naar zijn oorspronkelijke staat.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen OHW-limiet | Voelt flexibel; geen frictie bij nieuw werk starten | Contextbyte en wachtrijen vertragen stilletjes alles |
| Teamniveau-OHW-limiet | Verbetert doorvoer en flow-efficiëntie meetbaar | Vereist discipline om te handhaven, vooral onder deadlinedruk |
| Individueelniveau-OHW-quota | Simpel te stellen | Misapt de techniek; riskeert individuele manipulatie |
| Strikte, onbuigzame OHW-limiet | Maximale flow-efficiëntie-voordeel | Kan rigide aanvoelen in echt urgente, uitzonderlijke situaties |

De centrale spanning is **flexibiliteit versus flow**. Nieuw werk starten wanneer het urgent lijkt voelt responsief, maar het flow-efficiëntie- en OHW-onderzoek toont consistent dat deze flexibiliteit ten koste gaat van iets snel afmaken, omdat meer gelijktijdig werk langere wachtrijen en meer contextwisseling betekent voor alles al in beweging. Los de spanning op door een teamniveau-OHW-limiet als de standaard aan te nemen, met een bewust, zichtbaar, en zeldzaam uitzonderingsproces voor echte noodgevallen, in plaats van ofwel een rigide, geen-uitzonderingen-regel of een onbeperkte, flexibele vrij-voor-allen.

## Vragen om met je team te bespreken

1. **Wat is onze daadwerkelijke flow-efficiëntie, gemeten van echte cyclustijddata, en verrast dat cijfer ons?** De meeste teams hebben dit nooit berekend en nemen aan dat het veel hoger is dan het blijkt te zijn. Trek een steekproef van recente wijzigingen en berekenen de verhouding eerlijk voordat je iets anders in dit onderwerp bespreekt.

2. **Hoeveel onderhanden werk hebben we daadwerkelijk nu, over het hele team, en wist iemand dat cijfer voordat het geteld werd?** Hoge OHW is vaak onzichtbaar tot expliciet gemeten, omdat elk individu alleen zijn eigen schijf ervan ziet. Tel alles momenteel in uitvoering, inclusief werk niemand vandaag actief aanraakt.

3. **Als we een OHW-limiet aannamen, wat zou moeten veranderen over hoe we reageren op een nieuw urgent verzoek?** Deze vraag brengt de echte organisatorische gewoonte aan het licht, reflexmatig nieuw werk starten, die een OHW-limiet ontworpen is te onderbreken, en het is de moeite waard dit te bespreken voor, niet na, een limiet te proberen handhaven.

4. **Wanneer werk inactief zit in onze pijplijn, wat is de specifieke reden, en is het dezelfde reden elke keer?** Een generiek gevoel dat "dingen rondhangen" is minder nuttig dan een specifieke, terugkerende oorzaak: een onbeschikbare reviewer, een geboekte gedeelde omgeving, een teamoverschrijdende afhankelijkheid. Benoem het daadwerkelijke patroon uit echte recente voorbeelden.

5. **Hebben we ooit een OHW-limiet aangenomen en hem dan stilletjes zien eroderen door uitzonderingen?** Dit is extreem gewoon en de moeite waard eerlijk te bespreken: welke druk veroorzaakte de eerste uitzondering, en werden de uitzonderingen de nieuwe norm zonder dat iemand dat expliciet besloot.

6. **Zou een OHW-limiet in onze context toegepast moeten worden op individueel, team-, of gedeelde-resource-niveau (zoals een reviewwachtrij of testomgeving)?** Verschillende knelpunten vragen om limieten op verschillende niveaus, en een limiet op het verkeerde niveau toepassen, individuele quota's in plaats van een gedeelde-wachtrij-plafond, kan de hele techniek verkeerd toepassen.

## Sectorperspectief

**Startup.** Met weinig mensen is OHW vaak natuurlijk laag simpelweg omdat er niet genoeg ingenieurs zijn om veel werk simultaan te starten. Het risico is het omgekeerde: een oprichter of hoofdingenieur die persoonlijk veel meer gelijktijdige initiatieven jongleert dan ze beseffen, wat de moeite waard is om te meten zelfs zonder formele kanban-tooling.

**Klein bedrijf.** Een simpel zichtbaar bord, fysiek of een basis digitale tool, met een expliciete kolomlimiet is genoeg om het meeste van het voordeel te krijgen zonder te investeren in verfijnde flowmetriektooling. Begin met een genereuze limiet en verstrak hem geleidelijk naarmate het team comfortabel wordt met de discipline.

**Groot bedrijf.** Hoge OHW is vooral gewoon en vooral duur hier, omdat veel gelijktijdige strategische initiatieven concurreren om dezelfde gedeelde ingenieurscapaciteit, en een nieuwe starten altijd lijkt als vooruitgang voor wie het sponsorde. Maak OHW zichtbaar op portfolioniveau, niet alleen teamniveau, zodat leiderschap de kost kan zien van nog een initiatief starten voordat de huidige afgemaakt worden.

**Overheid.** Meerjarige programma's hopen vaak enorme impliciete OHW op over veel werkstromen, elk individueel gerechtvaardigd, zonder organisatiebrede zichtbaarheid in het totaal. Portfolioniveau-OHW-zichtbaarheid introduceren, zelfs informeel, is vaak het enkelvoudig meest overtuigende argument voor het sequencen van werk in plaats van alles parallel te runnen, omdat de flow-efficiëntiekost van hoge OHW zichtbaar opstapelt eenmaal gemeten.

## Voorbeelden

**Groot bedrijf.** Het platformteam van een financiëledienstenbedrijf jongleerde achttien gelijktijdige initiatieven met maar twaalf ingenieurs, een OHW-tot-capaciteit-verhouding niemand daadwerkelijk had berekend tot een nieuwe ingenieursdirecteur er direct om vroeg. Flow-efficiëntie over het werk van het team gemeten onder 12%. Het team nam een expliciete OHW-limiet aan van één actief initiatief per twee ingenieurs, bewust verschillende lager-prioriteit-initiatieven pauzerend in plaats van door te gaan capaciteit dun te spreiden. Doorvoer, gemeten als initiatieven echt voltooid per kwartaal, meer dan verdubbelde binnen twee kwartalen, ook al "deed" het team zichtbaar "minder" op elk gegeven moment.

**Overheid.** Het digitale-transformatieprogramma van een nationaal infrastructuuragentschap had meer dan veertig gelijktijdige werkstromen opgehoopt over zijn portfolio, elk met zijn eigen sponsor en zijn eigen rechtvaardiging, zonder enkel beeld van totaal onderhanden werk. Een programmaniveau-flow-efficiëntie-review vond dat de mediane werkstroom minder dan 15% van zijn verstreken tijd spendeerde in actieve ontwikkeling, de rest wachtend op gedeelde resources: een klein centraal architectuurreviewteam, een gedeelde testomgeving, en teamoverschrijdende goedkeuring. Het programma introduceerde expliciete portfolioniveau-OHW-limieten, werkstromen sequencend in plaats van alle veertig parallel te runnen, en de eigen tracking van het agentschap liet meetbaar snellere voltooiing zien voor de werkstromen die actief bleven, zelfs terwijl het totale aantal tegelijk lopend scherp viel.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van flow-efficiëntie en OHW bewust beheren is contra-intuïtief maar goed gedocumenteerd: doorvoer stijgt doorgaans, valt niet, wanneer een organisatie minder op een keer doet, omdat minder contextwisseling en kortere wachtrijen betekenen dat elk individueel stuk werk sneller afmaakt. Het financiëledienstenvoorbeeld hierboven, verdubbelde doorvoer van bewust gelijktijdig werk verminderen, is een gewoon patroon zodra organisaties flow-efficiëntie daadwerkelijk meten en erop handelen in plaats van aan te nemen dat meer parallel werk altijd meer vooruitgang betekent.

De totale kost van het aannemen van deze discipline is vooral organisatorisch, niet technisch: een zichtbaar bord, een overeengekomen OHW-limiet, en de discipline om nee te zeggen tegen nieuw werk starten wanneer de limiet bereikt is. Die discipline is moeilijker om vol te houden dan aan te nemen, wat waarom de "bewaak OHW die terug omhoog sluipt"-aanbeveling hierboven er net zoveel toe doet als de initiële adoptie zelf.

## Antipatronen en valkuilen

- **Aannemen dat actieve inspanning leveringstijd domineert zonder flow-efficiëntie te meten:** meestal verkeerd, en het verkeerd richt verbeteringsinspanning richting de verkeerde hefboom.
- **Een OHW-limiet toepassen als een individuele quota in plaats van een systeembeperking:** past de techniek verkeerd toe en riskeert individuele manipulatie.
- **Reflexmatig nieuw werk starten omdat het aanvoelt als vooruitgang:** de kerngewoonte flow-efficiëntie en OHW-limieten ontworpen zijn te onderbreken.
- **OHW-limietuitzonderingen routine en onzichtbaar laten worden:** erodeert de discipline terug naar zijn oorspronkelijke staat zonder dat iemand dat bewust besluit.
- **OHW alleen op teamniveau meten, portfolioniveau-overbelasting missend:** gewoon in grote organisaties die veel gelijktijdige strategische initiatieven runnen.
- **Een laag flow-efficiëntie-cijfer behandelen als een teken van een slecht team:** het is typisch van de meeste leveringspijplijnen en is een startpunt voor onderzoek, geen oordeel.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Onderhanden werk wordt niet gevolgd; teams starten reflexmatig nieuw werk zonder zichtbaarheid in totale gelijktijdige last.
- **Niveau 2, Ontwikkelen:** Sommige teams gebruiken een informeel bord, maar OHW-limieten worden niet consistent gehandhaafd en flow-efficiëntie wordt nooit berekend.
- **Niveau 3, Standaardiseren:** Teams hebben expliciete, zichtbare OHW-limieten op systeemniveau, en flow-efficiëntie wordt periodiek gemeten van echte cyclustijddata.
- **Niveau 4, Beheren:** OHW-limietuitzonderingen worden gevolgd als bewuste, zichtbare beslissingen; flow-efficiëntie wordt gemonitord voor erosie over tijd en onderzocht wanneer het valt.
- **Niveau 5, Orkestreren:** OHW is zichtbaar en beheerd op portfolioniveau, niet alleen teamniveau, en de organisatie kan wijzen naar specifieke doorvoerverbeteringen die resulteerden uit bewust gelijktijdig werk verminderen.

## Discussie-ideeën

1. Wat is onze daadwerkelijke flow-efficiëntie, eerlijk berekend van echte data?
2. Hoeveel onderhanden werk hebben we momenteel dat niemand had geteld voor deze discussie?
3. Waar zouden we nee tegen moeten zeggen om een echte OHW-limiet te handhaven?
4. Wat is de enkelvoudig meest voorkomende reden waarom werk inactief zit in onze pijplijn?
5. Waar in onze organisatie is portfolioniveau-OHW onzichtbaar en waarschijnlijk te hoog?

## Belangrijkste inzichten

- **Flow-efficiëntie**, de verhouding van actieve tijd tot totale tijd, is typisch onder 25% in echte leveringspijplijnen; wachttijd, niet inspanning, domineert.
- **Onderhanden werk beperken verhoogt doorgaans doorvoer**, niet verlaagt het, door contextwisseling te verminderen en wachtrijen te verkorten.
- Pas een **OHW-limiet toe als een systeembeperking**, nooit als een individuele quota.
- Onderzoek de **specifieke reden** waarom werk inactief zit in plaats van een generieke "verminder wachttijd"-richtlijn uit te vaardigen.
- Bewaak OHW-limieten **eroderend door routine-uitzonderingen**; behandel elke uitzondering als een bewuste, zichtbare beslissing.
- Onderwerp 2.4 noemt deze hoeveelheid **flowbelasting** en onderwerp 2.7 formaliseert de relatie als de Wet van Little: onderhanden werk is gelijk aan aankomsttempo keer cyclustijd, voor elke stabiele wachtrij.

## Bronnen en verder lezen

- *The Principles of Product Development Flow*, door Donald G. Reinertsen (wachtrijtheorie, batchgrootte, en OHW-limieten in productontwikkeling).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, door David J. Anderson (de grondtekst over OHW-limieten en flow voor softwareteams).
- *Actionable Agile Metrics for Predictability*, door Daniel S. Vacanti (flow-efficiëntiemeting en flowgebaseerde voorspelling).
- *The Goal*, door Eliyahu M. Goldratt (begrenzingstheorie en de contra-intuïtieve relatie tussen lokale drukte en systeemdoorvoer).
