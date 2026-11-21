# Software-engineeringmetrieken

Een werkboek over het goed meten van **software-engineering**: hoe je metrieken kiest die echte resultaten weerspiegelen in plaats van alleen activiteit, de raamwerken waarop dit boek leunt (het Flow Framework, het SPACE-raamwerk, wachtrijtheorie en de DORA-metrieken), de metriekenfamilies die ertoe doen en hoe je een metriekenprogramma draait dat teams beter maakt in plaats van ze te bewaken.

Het boek behandelt levering en flow, developer experience, code en kwaliteit, product- en bedrijfsresultaten, betrouwbaarheid en beveiliging, en hoe generatieve AI de betekenis van deze getallen verandert.

- **[Wat zijn software-engineeringmetrieken?](voorwerk/wat-zijn-software-engineeringmetrieken.md):** begin hier
- **[Inleiding](voorwerk/inleiding.md):** wat dit boek is en hoe je het leest
- **[Inhoudsopgave](voorwerk/inhoudsopgave.md):** de volledige lijst met onderwerpen

## Hoe je dit boek leest

Delen zijn hele getallen; onderwerpen zijn decimalen. Onderwerp **N.0** introduceert elk deel; **N.1, N.2, …** zijn de onderwerpen ervan. Deel 9 verzamelt de bijlagen (woordenlijst, formulereferentie, checklists, sjablonen, zelfbeoordeling van volwassenheid, referenties en index). Elk onderwerp over een metriekenfamilie geeft principes, aanbevelingen, afwegingen, sectorperspectieven, voorbeelden (onderneming en overheid), een businesscase (ROI/TCO), antipatronen, een volwassenheidsmodel, discussievragen en referenties, en benoemt hoe de metriek wordt gemanipuleerd en welke beschermmetriek dat opvangt. Voer ze gefaseerd in; niet allemaal tegelijk.

## Inhoudsopgave

### Deel 1: De grondslagen van meten
- [1.0 Inleiding](onderwerpen/01-00-grondslagen-van-meten.md)
- [1.1 Waarom softwareontwikkeling meten](onderwerpen/01-01-waarom-softwareontwikkeling-meten.md)
- [1.2 Goodharts wet en de psychologie van metrieken](onderwerpen/01-02-goodharts-wet-en-de-psychologie-van-metrieken.md)
- [1.3 Uitkomsten boven output: kiezen wat je meet](onderwerpen/01-03-uitkomsten-boven-output-kiezen-wat-je-meet.md)
- [1.4 Metriekengovernance en eigenaarschap](onderwerpen/01-04-metriekengovernance-en-eigenaarschap.md)
- [1.5 Databronnen en instrumentatie](onderwerpen/01-05-databronnen-en-instrumentatie.md)
- [1.6 Statistische geletterdheid voor technische metrieken](onderwerpen/01-06-statistische-geletterdheid-voor-technische-metrieken.md)

### Deel 2: Flowmetrieken
- [2.0 Inleiding](onderwerpen/02-00-flowmetrieken.md)
- [2.1 Het Flow Framework](onderwerpen/02-01-het-flow-framework.md)
- [2.2 Flowitems: functies, defecten, risico's, en schuld](onderwerpen/02-02-flowitems-functies-defecten-risicos-en-schuld.md)
- [2.3 Flowsnelheid en flowverdeling](onderwerpen/02-03-flowsnelheid-en-flowverdeling.md)
- [2.4 Flowtijd en flowbelasting](onderwerpen/02-04-flowtijd-en-flowbelasting.md)
- [2.5 Flow-efficiëntie en onderhanden werk](onderwerpen/02-05-flow-efficiëntie-en-onderhanden-werk.md)
- [2.6 Cyclustijd en zijn componenten](onderwerpen/02-06-cyclustijd-en-zijn-componenten.md)
- [2.7 Wachtrijtheorie](onderwerpen/02-07-wachtrijtheorie.md)
- [2.8 Lean-waardestroommetrieken](onderwerpen/02-08-lean-waardestroommetrieken.md)
- [2.9 Pull request- en codereviewmetrieken](onderwerpen/02-09-pull-request-en-codereviewmetrieken.md)
- [2.10 Het DORA-metriekenframework](onderwerpen/02-10-het-dora-metriekenframework.md)

### Deel 3: ontwikkelaarservaring en het SPACE-framework
- [3.0 Inleiding](onderwerpen/03-00-ontwikkelaarservaring-en-space.md)
- [3.1 Het SPACE-framework](onderwerpen/03-01-het-space-framework.md)
- [3.2 Tevredenheid- en welzijnsmetrieken](onderwerpen/03-02-tevredenheid-en-welzijnsmetrieken.md)
- [3.3 Prestatiemetrieken en uitkomstproxy's](onderwerpen/03-03-prestatiemetrieken-en-uitkomstproxys.md)
- [3.4 Activiteitsmetrieken en hun beperkingen](onderwerpen/03-04-activiteitsmetrieken-en-hun-beperkingen.md)
- [3.5 Communicatie- en samenwerkingsmetrieken](onderwerpen/03-05-communicatie-en-samenwerkingsmetrieken.md)
- [3.6 Efficiëntie en flow: diep werk en onderbrekingen](onderwerpen/03-06-efficiëntie-en-flow.md)
- [3.7 Ontwikkelaarservaring-enquêtes en DevEx-metrieken](onderwerpen/03-07-ontwikkelaarservaring-enquêtes-en-devex-metrieken.md)

### Deel 4: code- en kwaliteitsmetrieken
- [4.0 Inleiding](onderwerpen/04-00-code-en-kwaliteitsmetrieken.md)
- [4.1 Codecomplexiteitsmetrieken](onderwerpen/04-01-codecomplexiteitsmetrieken.md)
- [4.2 Testdekking en testeffectiviteit](onderwerpen/04-02-testdekking-en-testeffectiviteit.md)
- [4.3 Codechurn en hotspotanalyse](onderwerpen/04-03-codechurn-en-hotspotanalyse.md)
- [4.4 Statische analyse en code-smell-metrieken](onderwerpen/04-04-statische-analyse-en-code-smell-metrieken.md)
- [4.5 Technische-schuld-meting](onderwerpen/04-05-technische-schuld-meting.md)
- [4.6 Documentatie- en kennismetrieken](onderwerpen/04-06-documentatie-en-kennismetrieken.md)

### Deel 5: product- en bedrijfsmetrieken
- [5.0 Inleiding](onderwerpen/05-00-product-en-bedrijfsmetrieken.md)
- [5.1 Ontsnapte-defectfrekvens en kwaliteitsontsnappingen](onderwerpen/05-01-ontsnapte-defectfrekvens-en-kwaliteitsontsnappingen.md)
- [5.2 Functieadoptie- en gebruiksmetrieken](onderwerpen/05-02-functieadoptie-en-gebruiksmetrieken.md)
- [5.3 Klant- en bedrijfsuitkomstmetrieken](onderwerpen/05-03-klant-en-bedrijfsuitkomstmetrieken.md)
- [5.4 Kost en eenheidseconomie van ingenieurswerk](onderwerpen/05-04-kost-en-eenheidseconomie-van-ingenieurswerk.md)
- [5.5 Rendement op investering voor ingenieursinitiatieven](onderwerpen/05-05-rendement-op-investering-voor-ingenieursinitiatieven.md)

### Deel 6: betrouwbaarheid, operaties, en beveiligingsmetrieken
- [6.0 Inleiding](onderwerpen/06-00-betrouwbaarheid-operaties-en-beveiligingsmetrieken.md)
- [6.1 SLI's, SLO's, en felbudgetten](onderwerpen/06-01-slis-slos-en-felbudgetten.md)
- [6.2 Incidentmetrieken: detectie, respons, en herstel](onderwerpen/06-02-incidentmetrieken.md)
- [6.3 Wachtdienst-, capaciteits-, en operationele-belasting-metrieken](onderwerpen/06-03-wachtdienst-capaciteits-en-operationele-belasting-metrieken.md)
- [6.4 Beveiligings- en vulnerabiliteitsbeheer-metrieken](onderwerpen/06-04-beveiligings-en-vulnerabiliteitsbeheer-metrieken.md)

### Deel 7: metrieken in het tijdperk van AI
- [7.0 Inleiding](onderwerpen/07-00-metrieken-in-het-tijdperk-van-ai.md)
- [7.1 De generatieve-AI-paradigmaverschuiving](onderwerpen/07-01-de-generatieve-ai-paradigmaverschuiving.md)
- [7.2 AI-geassisteerde softwareontwikkeling meten](onderwerpen/07-02-ai-geassisteerde-softwareontwikkeling-meten.md)
- [7.3 Metriekinflatie- en kwaliteitsverdunningsrisico's](onderwerpen/07-03-metriekinflatie-en-kwaliteitsverdunningsrisicos.md)
- [7.4 Uitkomsttelemetrie als de nieuwe noorderstermetriek](onderwerpen/07-04-uitkomsttelemetrie-als-de-nieuwe-noorderstermetriek.md)

### Deel 8: een metriekenprogramma bouwen
- [8.0 Inleiding](onderwerpen/08-00-een-metriekenprogramma-bouwen.md)
- [8.1 Een ingenieursmetrieken-dashboard ontwerpen](onderwerpen/08-01-een-ingenieursmetrieken-dashboard-ontwerpen.md)
- [8.2 Toolinglandschap: bouwen versus kopen](onderwerpen/08-02-toolinglandschap-bouwen-versus-kopen.md)
- [8.3 Metrieken uitrollen zonder vrees te kweken](onderwerpen/08-03-metrieken-uitrollen-zonder-vrees-te-kweken.md)
- [8.4 Volwassenheidsmodel voor ingenieursmetrieken-programma's](onderwerpen/08-04-volwassenheidsmodel-voor-ingenieursmetrieken-programmas.md)
- [8.5 Een incrementele adoptieroadmap](onderwerpen/08-05-een-incrementele-adoptieroadmap.md)

### Deel 9: Bijlagen
- [9.0 Bijlagen](onderwerpen/09-00-bijlagen.md)
- [9.1 Glossarium](onderwerpen/09-01-glossarium.md)
- [9.2 Referentie voor metriekdefinities en formules](onderwerpen/09-02-referentie-voor-metriekdefinities-en-formules.md)
- [9.3 Controlelijsten](onderwerpen/09-03-controlelijsten.md)
- [9.4 Sjablonen](onderwerpen/09-04-sjablonen.md)
- [9.5 Volwassenheidszelfbeoordeling](onderwerpen/09-05-volwassenheidszelfbeoordeling.md)
- [9.6 Bronnen en verder lezen](onderwerpen/09-06-bronnen-en-verder-lezen.md)
- [9.7 Index](onderwerpen/09-07-index.md)

## Terugkerende thema's

[De wet van Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) beheerst elk onderwerp: een maatstaf die een doel wordt, is geen goede maatstaf meer, dus elke metriekenfamilie hier komt met haar manipulatieroute en haar beschermmetriek. Resultaten wegen in het hele boek zwaarder dan output en activiteit. Rapportageverplichtingen van overheden en ondernemingen worden behandeld als ontwerpinput, niet als bijzaak, en de verschuiving naar generatieve AI wordt behandeld als reden om de betekenis van deze metrieken opnieuw te onderzoeken, niet alleen als een nieuwe kolom op het dashboard.

## Voorbij de onderwerpen

- **[Voorbeelden](voorbeelden/overzicht.md):** kleine, concrete voorbeelden die de ideeën van het boek in gebruik laten zien.
- **[Over dit project](project/overzicht.md):** hoe het boek wordt gebouwd, gecontroleerd en gepubliceerd.
- **[Bijdragen](bijdragen/overzicht.md):** hoe je kunt helpen en de regels van de huisstijl.
