# 2.1 Het Flow Framework

## Overzicht en motivatie

Het **Flow Framework** is een managerial en structureel model gecreëerd door Mik Kersten en gepubliceerd in zijn boek *Project to Product* uit 2018. Het bestaat om een vraag te beantwoorden die pure pijplijnmetrieken niet kunnen: niet alleen hoe snel en hoe veilig code beweegt van commit naar productie, maar welke soort waarde überhaupt door de pijplijn beweegt, en of die mix de daadwerkelijke strategie van het bedrijf reflecteert. Het raamwerk behandelt softwarelevering als een **[waardestroom](https://en.wikipedia.org/wiki/Value_stream)**, de end-to-end-sequentie van activiteiten die een idee verandert in waarde die een klant ontvangt, direct lenend van de waardestroomkarteringstraditie van lean-productie.

Dit boek gebruikt het Flow Framework als deel 2's organiserende structuur. Hoofdstuk 2.2 introduceert zijn vier flowitems, hoofdstuk 2.3 en 2.4 introduceren zijn vijf flowmetrieken, hoofdstuk 2.8 spoort die metrieken terug naar hun oorsprong in klassieke Lean-waardestroomkartering, en hoofdstuk 2.10 behandelt de DORA-metrieken als een nauwer, pijplijngericht referentieraamwerk dat dit deel niet langer voorop stelt. Dat is een bewuste keuze, geen afwijzing van DORA's onderzoek. DORA meet systeemdoorvoer en stabiliteit met echte statistische rigor, maar is stil over de vraag een bedrijfsleider daadwerkelijk het meest om geeft: gegeven alles de ingenieursorganisatie dit kwartaal leverde, hoeveel was nieuwe klantwaarde, en hoeveel werd stilletjes geconsumeerd door defecten te fixen, risico te beheren, of schuld af te betalen. Het Flow Framework bestaat specifiek om die mix zichtbaar te maken.

Voor grote teams is dit onderscheid niet academisch. Een platformorganisatie die dozijnen waardestromen runt, kan uitstekende DORA-cijfers hebben, snelle, frequente, stabiele deployments, terwijl zijn daadwerkelijke productoutput stilletjes is afgedreven richting bijna puur onderhoudswerk, een patroon onzichtbaar voor een dashboard dat alleen pijplijnmechanica meet. Grote bedrijven en overheidsinstanties, die ingenieursinvestering moeten rechtvaardigen voor belanghebbenden die in bedrijfstermen denken, niet pijplijntermen, hebben een vocabulaire nodig dat leveringsactiviteit verbindt met strategische intentie. Dat is wat dit raamwerk biedt.

## Kernprincipes

- **Een waardestroom is de meeteenheid, niet een team of een pijplijn.** Hij spant van een klant- of bedrijfsbehoefte naar de geleverde uitkomst, teamgrenzen overschrijdend waar het werk daadwerkelijk overschrijdt.
- **Flowitems maken het "wat" zichtbaar, niet alleen het "hoe snel".** Hoofdstuk 2.2's vier categorieën, functies, defecten, risico's, en schuld, veranderen een impliciete prioriteringsbeslissing in een expliciete, meetbare.
- **Capaciteitstoewijzing over flowitems is zero-sum.** Meer capaciteit besteed aan het ene itemtype is minder capaciteit beschikbaar voor de andere; het raamwerk maakt die afweging zichtbaar in plaats van hem impliciet te laten.
- **De vijf flowmetrieken beantwoorden bedrijfsvragen, niet alleen ingenieursvragen.** Ze zijn ontworpen om gepresenteerd te worden aan een niet-technische belanghebbende, niet binnen een ingenieursteam gehouden.
- **Waardestroombeheer zou continu moeten zijn, niet een eenmalige karteringsoefening.** Statische waardestroomkaarten verouderen; het raamwerk is gebouwd om geïnstrumenteerd te worden vanuit de tools teams al gebruiken.

## Aanbevelingen

### Kaart je waardestroom voordat je iets instrumenteert

Voordat je enige flowmetriek aanneemt, loop het daadwerkelijke pad dat een stuk werk neemt van een geïdentificeerde bedrijfsbehoefte tot een klant die waarde ontvangt, benoemend elk stadium en elke overdracht tussen teams. Dit is de klassieke [waardestroomkartering](https://en.wikipedia.org/wiki/Value_stream_mapping)-oefening, aangepast van lean-productie, en het overslaan is de meest voorkomende reden dat een Flow Framework-adoptie cijfers produceert die niemand vertrouwt: metrieken berekend tegen een ongeëxamineerd, informeel begrepen proces matchen zelden wat daadwerkelijk gebeurt.

### Koppel flowmetrieken aan de tools je teams al gebruiken

Het Flow Framework is gebouwd voor continu, geautomatiseerd waardestroombeheer, geen periodieke handmatige karteringsoefening. Integreer flowitem-tracking direct in de tools werk al doorstroomt, Jira, Azure DevOps, GitHub, in plaats van een parallel trackingsysteem te bouwen dat teams handmatig moeten bijwerken. De status van een flowitem zou zichzelf moeten bijwerken naarmate de onderliggende ticket of pull request beweegt, dezelfde instrumentatie-boven-zelfrapportage-discipline die hoofdstuk 1.5 aanbeveelt voor elke metriek in dit boek.

### Presenteer flowverdeling direct aan bedrijfsbelanghebbenden, niet alleen ingenieursleiderschap

De enkelvoudig grootste gemiste kans met dit raamwerk is het behandelen als een intern ingenieursgereedschap. Flowverdeling, de proportie werk die naar functies gaat versus defecten, risico, en schuld (hoofdstuk 2.3), is specifiek ontworpen om een conversatie te zijn die je hebt met product- en bedrijfsleiderschap, omdat het een impliciete prioriteringsbeslissing, hoeveel capaciteit naar nieuwe waarde gaat versus de lichten aanhouden, expliciet en onderhandelbaar maakt in plaats van aangenomen.

### Behandel de vier flowitems als een echte taxonomie, niet een formaliteit

Vereis dat elke eenheid werk geclassificeerd wordt in precies een van de vier flowitemtypes bij intake, niet retroactief. Een classificatie toegepast achteraf, of losjes toegepast omdat "het is eigenlijk een functie," erodeert de hele waarde van de taxonomie, omdat het hele punt een eerlijk, consistent record is van waar capaciteit daadwerkelijk naartoe ging.

### Herbezoek je waardestroomkaart wanneer de organisatie verandert, niet op een vast schema

Een waardestroomkaart veroudert op het moment dat teamgrenzen, tooling, of het product zelf betekenisvol verandert, niet op een willekeurige jaarlijkse cadans. Behandel een reorganisatie, een grote tooling-migratie, of een significante productpivot als een trigger om de waardestroom opnieuw te lopen, omdat een flowmetriek berekend tegen een verouderde kaart stilletjes het verkeerde meet.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Alleen pijplijnmetrieken (DORA, hoofdstuk 2.10) | Simpel, goed gevalideerd, goedkoop te instrumenteren uit bestaande CI/CD-data | Stil over welke soort waarde geleverd wordt |
| Volledige Flow Framework-adoptie | Koppelt levering aan bedrijfsstrategie; maakt waardemix zichtbaar en onderhandelbaar | Vereist een eerlijke waardestroomkaart en consistente flowitem-classificatiediscipline |
| Statische, eenmalige waardestroomkartering | Goedkoop, snel te runnen als een workshopoefening | Veroudert snel; produceert een ogenblikfoto, geen levende metriek |
| Continu, tool-geïntegreerd waardestroombeheer | Levende, altijd-actuele data; schaalt over vele waardestromen | Vereist echt toolingintegratiewerk vooraf |

De centrale spanning is **bedrijfsleesbaarheid versus instrumentatie-inspanning**. Pijplijnmetrieken zijn goedkoop omdat de pijplijn de data al produceert; waardestroommetrieken vereisen een eerlijke kaart van het hele proces en een gedisciplineerde, intake-tijd-classificatiegewoonte die pijplijnmetrieken nooit vereisten. Los de spanning op door met één waardestroom te beginnen, niet de hele organisatie op een keer, hem goed te karteren, en alleen dan flowitem-tracking te integreren in bestaande tools, in plaats van een big-bang-uitrol te proberen over elk team simultaan.

## Vragen om met je team te bespreken

1. **Konden we een accurate waardestroomkaart tekenen voor ons belangrijkste product nu, of zouden we raden bij verschillende van de overdrachten?** De meeste organisaties hebben dit pad nog nooit daadwerkelijk van begin tot eind gelopen. Probeer de oefening eerlijk en noteer elke plek waar de groep het oneens is over wat daadwerkelijk gebeurt, omdat die onenigheid zelf diagnostisch is.

2. **Als we alles ons team vorig kwartaal leverde classificeerden in functies, defecten, risico, en schuld, zou het resultaat ons productleiderschap verrassen?** De meeste teams hebben deze splitsing nooit expliciet gemaakt, en het antwoord onthult vaak een onderhoudslast of een schuldprobleem dat voorheen onzichtbaar was in een simpele "story points geleverd"-telling.

3. **Hebben we een echte, tool-geïntegreerde manier om flowitems te volgen, of zou dit iemand vereisen om werk handmatig te classificeren en te herclassificeren?** Een handmatig systeem vervalt snel onder echte werklast; een tool-geïntegreerd een niet. Beoordeel eerlijk welke je daadwerkelijk bereid bent te onderhouden.

4. **Wanneer veranderde onze waardestroomkaart laatst, en hebben we onze metrieken bijgewerkt om dat te reflecteren?** Reorganisaties en toolingmigraties maken een waardestroomkaart stilletjes ongeldig, en weinig organisaties herinneren zich hem te herbezoeken wanneer dat gebeurt.

5. **Worden onze flowmetrieken ooit direct gepresenteerd aan bedrijfs- of productbelanghebbenden, of blijven ze binnen ingenieurswerk?** Het grootste voordeel van het raamwerk boven alleen-pijplijn-metrieken is precies deze conversatie, en het overslaan verspeelt het meeste van de waarde van het raamwerk.

6. **Wat zou het vereisen voor iemand om onze flowitem-classificatie te manipuleren zonder iets oneerlijks op papier te doen?** Loop door hoe een team onder leveringsdruk stilletjes schuld- of risicowerk zou kunnen herlabelen als functies om productiever te lijken, en bespreek of je dat momenteel zou merken.

## Sectorperspectief

**Startup.** Een volledige waardestroomkaart is meestal overkill voor een team van vijf waar iedereen het hele proces al uit zijn hoofd kent. De nuttige gewoonte op deze schaal is simpelweg de vier flowitemtypes luid benoemen in planningsconversaties, zodat schuld- en risicowerk niet stilletjes verdwijnt uit het zicht op het moment dat een functiedeadline nadert.

**Klein bedrijf.** Neem flowitem-classificatie aan binnen welke lichtgewicht trackingtool je al gebruikt, een gelabelde kolom of een aangepast veld, in plaats van enig toegewijd waardestroombeheerproduct. De discipline van consistente classificatie doet er veel meer toe dan de verfijning van de tooling erachter.

**Groot bedrijf.** Dit is waar het raamwerk zijn plaats verdient, omdat een grote organisatie die dozijnen waardestromen runt over vele productlijnen geen andere betrouwbare manier heeft om, op één plek, te zien hoe ingenieurscapaciteit daadwerkelijk toegewezen wordt over functies, defecten, risico, en schuld. Investeer in de toolingintegratie; het handmatige alternatief overleeft geen contact met echte schaal.

**Overheid.** Flowverdeling geeft een overheidsingenieursorganisatie een verdedigbaar, bedrijfsleesbaar antwoord op "waarom levert er niet meer nieuwe functionaliteit," wanneer het eerlijke antwoord een groeiend aandeel capaciteit is dat naar beveiligingsherstel of legacy-schuld gaat. Die afweging zichtbaar en expliciet maken, in plaats van de druk stilletjes te absorberen, is vaak het enkelvoudig nuttigste wat dit raamwerk een overheidstechnologieleider biedt.

## Voorbeelden

**Groot bedrijf.** De schadeplatformorganisatie van een grote verzekeraar geloofde dat het primair nieuwe functies leverde, gebaseerd op zijn sprint-snelheidsrapporten. Een eerste waardestroomkartering- en flowitem-classificatieoefening onthulde dat schuld- en risicowerk, veel ervan ongedocumenteerde technische schuld van een decennia-oud kernsysteem, daadwerkelijk bijna de helft van totale ingenieurscapaciteit consumeerde, een feit geen eerdere rapportage had blootgelegd omdat dat werk altijd was opgenomen in generieke "ingenieurstaken." Deze splitsing presenteren aan het directiecomité verzekerde een toegewijd schuldreductiebudget voor de eerste keer in de geschiedenis van het platform, in plaats van schuldwerk stilletjes te blijven concurreren tegen elk functieverzoek.

**Overheid.** De digitale-dienstendivisie van een nationale belastingdienst gebruikte waardestroomkartering om te diagnosticeren waarom een vlaggenschip burgergerichte functie meer dan een jaar "in uitvoering" was geweest ondanks stabiele sprintvoltooiing. De kaart onthulde dat de waardestroom daadwerkelijk vijf afzonderlijke teams spande met drie overdrachten die het organisatieschema niet reflecteerden, en flowitem-classificatie liet zien dat de daadwerkelijke ingenieurstijd van de functie een kleine fractie van zijn totale flowtijd was, de rest geconsumeerd door overdrachtvertragingen tussen teams die de eigen metrieken van geen enkel team konden zien. De divisie herstructureerde rond de waardestroom in plaats van het organisatieschema voor die specifieke productlijn, flowtijd substantieel verkortend binnen twee kwartalen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van het aannemen van het Flow Framework is een verdedigbaar, bedrijfsleesbaar antwoord op een vraag pijplijnmetrieken niet kunnen beantwoorden: is ingenieurscapaciteit toegewezen zoals leiderschap gelooft dat het is. Het verzekeringsvoorbeeld hierboven, bijna de helft van capaciteit blootleggend die naar voorheen onzichtbaar schuldwerk ging, is een gemeenschappelijk patroon zodra een organisatie zijn werk daadwerkelijk eerlijk classificeert, en die zichtbaarheid ontgrendelt routinematig investering die een vage "we hebben meer tijd nodig voor technische schuld"-verzoek nooit kon.

De totale eigendomskosten zijn geconcentreerd op twee plekken: de initiële waardestroomkarteringsoefening, die echte facilitatietijd kost om eerlijk te doen, en de toolingintegratie nodig om flowitem-data actueel te houden zonder handmatig onderhoud. Beide kosten zijn eenmalig of laag-onderhoud eenmaal goed gedaan, wat het raamwerk aanzienlijk goedkoper maakt om te onderhouden dan het is om aan te nemen.

## Antipatronen en valkuilen

- **Waardestroomkartering behandelen als een eenmalige workshop, nooit herbezocht:** de kaart veroudert op het moment dat de organisatie verandert, en een metriek berekend tegen een verouderde kaart meet het verkeerde.
- **Een parallel, handmatig onderhouden flowitem-trackingsysteem bouwen:** vervalt snel onder echte werklast; integreer in bestaande tools in plaats daarvan.
- **Flowitems retroactief classificeren in plaats van bij intake:** de manipulatievector aan de kern van dit hoofdstuk. Onder leveringsdruk kan een team stilletjes schuld- of risicowerk herlabelen als functies achteraf om productiever te lijken voor belanghebbenden die alleen het flowverdelingsdiagram zien, zonder dat iemand ooit een expliciete, zichtbare beslissing maakt om dat te doen. De beschermmetriek is classificatie te vereisen bij intake, voordat de uitkomst gekend is, en periodiek een steekproef van geclassificeerde items te auditen tegen wat de onderliggende verandering daadwerkelijk deed, dezelfde auditdiscipline hoofdstuk 1.2 vraagt voor elke metriek in dit boek.
- **Flowmetrieken alleen binnen ingenieurswerk houden:** verspeelt het hoofdvoordeel van het raamwerk, een gedeeld vocabulaire met bedrijfsbelanghebbenden.
- **Het organisatieschema karteren in plaats van de daadwerkelijke waardestroom:** verbergt teamoverschrijdende overdrachten die vaak de grootste bron van vertraging zijn.
- **Het raamwerk organisatiebreed aannemen voordat gevalideerd op één waardestroom:** riskeert een grote investering in metrieken die niemand vertrouwt omdat de onderliggende kaart nooit accuraat bevestigd werd.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Geen waardestroomkaart bestaat; werk wordt getrackt als generieke tickets zonder flowitem-classificatie.
- **Niveau 2, Ontwikkelen:** Eén waardestroom is gekarteerd en flowitems worden informeel geclassificeerd, maar tracking is handmatig en inconsistent toegepast.
- **Niveau 3, Standaardiseren:** Flowitem-classificatie is geïntegreerd in bestaande tooling en consistent toegepast bij intake over grote waardestromen.
- **Niveau 4, Beheren:** Flowverdeling wordt regelmatig beoordeeld met bedrijfsbelanghebbenden, en waardestroomkaarten worden actief actueel gehouden naarmate de organisatie verandert.
- **Niveau 5, Orkestreren:** De organisatie wijst ingenieursinvestering bewust toe over waardestromen met behulp van flowdata, en kan wijzen naar specifieke strategische beslissingen, een schuldreductiebudget, een teamherstructurering, gemaakt omdat het raamwerk een voorheen onzichtbare afweging zichtbaar maakte.

## Discussie-ideeën

1. Konden we vandaag een accurate waardestroomkaart tekenen voor ons vlaggenschipproduct, zonder te raden?
2. Welk percentage van vorig kwartaals capaciteit zou een eerlijke flowitem-classificatie onthullen ging naar schuld en risico, versus functies?
3. Bereiken onze flowmetrieken momenteel bedrijfsbelanghebbenden, of blijven ze binnen ingenieurswerk?
4. Wat is de grootste teamoverschrijdende overdracht in onze waardestroom die ons organisatieschema niet reflecteert?

## Belangrijkste inzichten

- Het **Flow Framework**, van Mik Kerstens *Project to Product*, meet welke soort waarde door een leveringspijplijn beweegt, niet alleen hoe snel de pijplijn zelf draait.
- Een **waardestroom**, niet een team of een pijplijn, is de meeteenheid van het raamwerk, en hem eerlijk karteren komt voor het instrumenteren van iets.
- **Flowitem-classificatie bij intake, niet achteraf**, is de beschermmetriek tegen de centrale manipulatievector van dit hoofdstuk: stilletjes schuld- of risicowerk herlabelen als functies om productiever te lijken.
- **Koppel flowmetrieken aan bestaande tools**, Jira, Azure DevOps, GitHub, in plaats van een parallel handmatig trackingsysteem dat echte werklast niet zal overleven.
- Presenteer flowdata **direct aan bedrijfsbelanghebbenden**; die conversatie, geen intern ingenieursdashboard, is het hoofdvoordeel van het raamwerk boven alleen-pijplijn-metrieken.

## Bronnen en verder lezen

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, en John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, en George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, en John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
