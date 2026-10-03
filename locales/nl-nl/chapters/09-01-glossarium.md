# 9.1 Glossarium

Definities van termen en acroniemen gebruikt doorheen het boek. Elk item benoemt het hoofdstuk waar de term diepgaand geïntroduceerd wordt.

**Activiteitsmetriek.** Een telling van ingenieursbeweging (commits, pull requests, regels code) die volume meet, geen waarde. Zie hoofdstuk 3.4.

**Beschermmetriek.** Een gekoppelde tegenmetriek die niet mag verslechteren terwijl een gestimuleerde metriek verbetert, ontworpen om manipulatie te vangen. Zie hoofdstuk 1.2.

**Bezettingsgraad.** De proportie van de beschikbare capaciteit van een hulpbron die druk is, berekend als aankomsttempo gedeeld door bedieningstempo. Wachttijd groeit scherp, niet geleidelijk, naarmate bezettingsgraad volle capaciteit nadert. Zie hoofdstuk 2.7.

**Busfactor.** Het aantal mensen dat onbeschikbaar zou moeten worden voordat een systeem of stuk kennis onbeheerbaar wordt. Een busfactor van een is een ernstig risico. Zie hoofdstuk 3.5.

**CVSS (Common Vulnerability Scoring System).** Een gestandaardiseerde schaal voor het scoren van de ernst van een beveiligingsvulnerabiliteit. Zie hoofdstuk 6.4.

**Cyclomatische complexiteit.** Een telling van de onafhankelijke paden door de controleflow van een stuk code, geïntroduceerd door Thomas J. McCabe in 1976. Zie hoofdstuk 4.1.

**Cyclustijd.** De interne afbraak van flowtijd in stadia: coderen, review, testen, en deployment. Zie hoofdstuk 2.6.

**Deploymentfrequentie.** Hoe vaak een team succesvol release naar productie. Een van de vier DORA-metrieken. Zie hoofdstuk 2.10.

**DevEx (ontwikkelaarservaring).** De bredere, verwante framing aan SPACE, georganiseerd rond feedbacklussen, cognitieve last, en flowtoestand. Zie hoofdstuk 3.7.

**Doorlooptijd voor wijzigingen.** De tijd van een codewijziging's eerste commit tot zijn succesvolle deployment in productie. Een van de vier DORA-metrieken. Zie hoofdstuk 2.10.

**DORA-metrieken.** Vier metrieken van het DevOps Research and Assessment-programma: deploymentfrequentie, doorlooptijd voor wijzigingen, wijzigingsfoutpercentage, en herstelteltijd van mislukte deployments. Zie hoofdstuk 2.10.

**Eenheidseconomie.** Kost uitgedrukt per betekenisvolle eenheid geleverde waarde (per klant, per transactie), in plaats van als een opaak totaal. Zie hoofdstuk 5.4.

**Felbudget.** Het toegestane tekort tussen een service-level-doel en 100%-betrouwbaarheid, behandeld als een besteedbare hulpbron. Zie hoofdstuk 6.1.

**FinOps.** De discipline van financiële verantwoordelijkheid brengen naar variabele clouduitgave. Zie hoofdstuk 5.4.

**Flow-efficiëntie.** De ratio van actieve werktijd tot totale verstreken tijd voor een stuk werk dat door een leveringspijplijn beweegt. Zie hoofdstuk 2.5.

**Flow Framework.** Een managementmodel, gecreëerd door Mik Kersten, dat softwarelevering behandelt als een waardestroom en het meet met vier flowitemtypes en vijf flowmetrieken. Zie hoofdstuk 2.1.

**Flowbelasting.** Het totale aantal flowitems momenteel actief of wachtend in een waardestroom, de naam van het Flow Framework voor onderhanden werk. Zie hoofdstuk 2.4.

**Flowitem.** De werkeenheid van het Flow Framework: een functie, defect, risico, of schuld-item, geclassificeerd bij intake. Zie hoofdstuk 2.2.

**Flowsnelheid.** Het aantal flowitems afgerond over een gegeven periode, de doorvoermaat van het Flow Framework. Zie hoofdstuk 2.3.

**Flowtijd.** De totale verstreken tijd van een flowitem die de waardestroom binnenkomt tot zijn levering, de hele waardestroom omspannend in plaats van alleen ingenieurswerk. Zie hoofdstuk 2.4.

**Flowverdeling.** De proportie afgeronde flowitems die bij elk flowitemtype horen in een gegeven periode. Zie hoofdstuk 2.3.

**Goodharts wet.** Het principe dat wanneer een maat een doel wordt, het stopt een goede maat te zijn. Het centrale, leidende idee van dit boek. Zie hoofdstuk 1.2.

**Hotspot.** Een bestand of module dat zowel frequent gewijzigd (hoge churn) als sterk complex is, geïdentificeerd via hotspotanalyse. Zie hoofdstuk 4.3.

**Metriekenboom.** Een structuur die een topniveau-uitkomstmetriek verbindt door zijn drijvers naar de operationele metrieken die individuele teams bezitten. Zie hoofdstuk 1.3.

**MTTA (gemiddelde erkenningstijd).** De tijd van een incident's notificatie tot iemand eigenaarschap neemt om te reageren. Zie hoofdstuk 6.2.

**MTTD (gemiddelde detectietijd).** De tijd van een incident's daadwerkelijke begin tot iemand opmerkt dat het optrad. Zie hoofdstuk 6.2.

**MTTR (gemiddelde hersteltijd / gemiddelde oplostijd).** De tijd om dienst volledig te herstellen na een falen. Gebruikt zowel voor deployment-veroorzaakte falingen (hoofdstuk 2.10) als algemene incidenten (hoofdstuk 6.2).

**Mutatietesten.** Een techniek die doelbewust kleine, artificiële fouten introduceert in code om te checken of een testsuite ze daadwerkelijk vangt, als een complement aan dekking. Zie hoofdstuk 4.2.

**Noorderstermetriek.** De enkele maat die het best de kernwaarde vangt die een organisatie levert, zittend aan de top van een metriekenboom. Zie hoofdstuk 1.3.

**Onderhanden werk (OHW).** De telling van items actief in bewerking op enig moment over een team of systeem. Zie hoofdstuk 2.5.

**Ontsnapt defect.** Een defect dat productie bereikt en een echte gebruiker beïnvloedt, als onderscheiden van een gevangen in review of testen. Zie hoofdstuk 5.1.

**Opgerolde doorvoeropbrengst.** De percentage-volledig-en-juist-cijfers van elk stadium in een waardestroom met elkaar vermenigvuldigd, onthullend hoe herwerk samengroeit over een meerstadia-pijplijn. Zie hoofdstuk 2.8.

**Percentage volledig en juist (%V/J).** Het percentage eenheden dat een stroomafwaarts team kan verwerken zonder herwerk nodig te hebben, uit klassieke Lean-waardestroomkartering. Zie hoofdstuk 2.8.

**Regelkaart.** Een grafiek die het normale variatiebereik van een metriek toont over tijd, gebruikt om een echte verschuiving te onderscheiden van gewone ruis. Zie hoofdstuk 1.6.

**Rendement op investering (ROI).** Het financiële rendement van een initiatief relatief aan zijn kost, hier gebouwd uit gedocumenteerd kost- en uitkomstbewijs in plaats van aanname. Zie hoofdstuk 5.5.

**SLI (service-level-indicator).** Een direct gemeten signaal van de gezondheid van een dienst, zoals latentie of foutpercentage. Zie hoofdstuk 6.1.

**SLO (service-level-doel).** Het doelbereik voor een service-level-indicator. Zie hoofdstuk 6.1.

**SPACE-framework.** Een vijf-dimensie-framework voor ontwikkelaarsproductiviteit: Tevredenheid en welzijn, Prestatie, Activiteit, Communicatie en samenwerking, en Efficiëntie en flow. Zie hoofdstuk 3.1.

**SRE (site reliability engineering).** De discipline, gepionierd bij Google, van ingenieursaanpakken toepassen op operaties en betrouwbaarheid. Zie hoofdstuk 6.1.

**Takttijd.** De maximaal acceptabele tijd om een werkeenheid af te ronden om netjes overeen te komen met klantvraag, uit klassieke Lean-waardestroomkartering. Zie hoofdstuk 2.8.

**Technische schuld.** De opgebouwde kost van eerdere kortere wegen in een codebase, een metafoor voor een beheerbare afweging, geen schaamtevol geheim. Zie hoofdstuk 4.5.

**Totale eigendomskosten (TCO).** De volle kost van een initiatief of systeem over zijn levensduur, inclusief doorlopend onderhoud en infrastructuur, niet alleen vooraf-kost. Zie hoofdstuk 5.5.

**Uitkomsttelemetrie.** Continue, geïnstrumenteerde meting van echte uitkomsten in plaats van activiteit of output. Zie hoofdstuk 7.4.

**Vanity-metriek.** Een metriek die betrouwbaar stijgt, indrukwekkend oogt, en geen beslissing verandert. Zie hoofdstuk 1.1.

**Verwerkingstijd (PT).** De daadwerkelijke actieve tijd besteed aan het werken op een enkele eenheid, onderscheiden van tijd besteed aan wachten, uit klassieke Lean-waardestroomkartering. Zie hoofdstuk 2.8.

**Waardestroom.** De end-to-end sequentie van activiteiten die een idee verandert in waarde die een klant ontvangt, de meeteenheid van het Flow Framework. Zie hoofdstuk 2.1.

**Wachtrijtheorie.** De wiskundige studie van wachtrijen, toegepast op leveringspijplijnen om te verklaren hoe onderhanden werk, aankomsttempo, en bezettingsgraad wachttijd drijven. Zie hoofdstuk 2.7.

**Wet van Little.** Het bewijs dat het gemiddelde aantal items in een stabiele wachtrij gelijk is aan het gemiddelde aankomsttempo vermenigvuldigd met de gemiddelde tijd die een item in het systeem doorbrengt. Toegepast op levering, onderhanden werk is gelijk aan aankomsttempo vermenigvuldigd met cyclustijd. Zie hoofdstuk 2.7.

**Wijzigingsfoutpercentage.** Het percentage deployments dat een productiefout veroorzaakt die herstel vereist. Een van de vier DORA-metrieken. Zie hoofdstuk 2.10.
