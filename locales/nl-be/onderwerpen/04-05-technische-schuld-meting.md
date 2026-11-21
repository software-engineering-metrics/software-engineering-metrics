# 4.5 Technische-schuld-meting

## Overzicht en motivatie

**[Technische schuld](https://en.wikipedia.org/wiki/Technical_debt)**, een metafoor bedacht door Ward Cunningham, beschrijft de opgebouwde kost van eerdere kortere wegen, praktische beslissingen die iets eerder uitleverden maar de codebase daarna moeilijker te wijzigen lieten, op dezelfde manier dat financiële schuld je nu laat uitgeven tegen de kost van rente later. Elke codebase draagt enige technische schuld, en dat is niet automatisch een falen; de echte waarde van de metafoor is dat het schuld kadert als een beheerbare afweging in plaats van ofwel een schaamtevol geheim of een onvermijdelijke, permanente last. Dit onderwerp gaat over die afweging zichtbaar en beheerbaar maken via meting, in plaats van het te laten als een vage, eeuwig gedeprioriteerde zorg die elke ingenieur aanvoelt maar niemand kan handelen met bewijs.

De onderwerpen voorafgaand aan deze, complexiteit (4.1), dekking (4.2), churn en hotspots (4.3), en statische analyse (4.4), elk brengen een facet van technische schuld aan de oppervlakte. De taak van dit onderwerp is synthese: die afzonderlijke signalen, plus items die nooit opduiken in enige geautomatiseerde scan (een ongedocumenteerde architecturale kortere weg, een doelbewust uitgestelde migratie), veranderen in een enkele, geprioriteerde, zichtbare backlog die eerlijk concurreert voor investering tegen functiewerk, in plaats van die competitie standaard te verliezen simpelweg omdat het geen metriek heeft erbij en geen pleitbezorger in planningsvergaderingen.

Voor grote teams groeit onbeheerde technische schuld samen op een manier die echt gevaarlijk en makkelijk te onderschatten is: elke nieuwe kortere weg maakt de volgende wijziging lichtjes moeilijker, wat druk creëert voor meer kortere wegen, wat verder samengroeit. Grote bedrijven en overheidsorganisaties die systemen onderhouden over vele jaren zijn bijzonder blootgesteld aan dit samengroei-effect, en de centrale aanbeveling van dit onderwerp, een zichtbare, gekwantificeerde, geprioriteerde schuldbacklog, is het mechanisme dat een organisatie daadwerkelijk laat de afweging doelbewust beheren in plaats van af te drijven naar crisis.

## Kernprincipes

- **Technische schuld is een doelbewuste metafoor voor een beheerbare afweging, geen schaamtevol geheim.** Sommige schuld, bewust aangegaan, is een redelijke zakelijke beslissing.
- **Ongemeten schuld verliest de prioriteringscompetitie tegen functiewerk standaard,** niet omdat het minder ertoe doet, maar omdat het geen zichtbare pleitbezorger heeft.
- **Kwantificeer schuld in termen die beslissers kunnen afwegen: kost om te fixen versus kost om het te dragen.** Een vage "de code is rommelig"-claim concurreert zelden goed tegen een concreet functieverzoek.
- **Schuld groeit samen.** Elke nieuwe kortere weg maakt toekomstige wijzigingen marginaal moeilijker, en dat effect accelereert indien onbeheerd.
- **Niet alle schuld zou afbetaald moeten worden.** Sommige is de moeite waard onbeperkt te dragen als de kost om het te fixen de kost overschrijdt om er mee te leven.

## Aanbevelingen

### Bouw een zichtbare, enkele technische-schuld-backlog

Consolideer de signalen van de eerdere onderwerpen van dit deel, complexiteitsuitschieters, laag-mutatiedoodtempo-gebieden, hotspots, onopgeloste statische-analysebevindingen, naast schuld-items die alleen een mens kan identificeren (een architecturale kortere weg, een uitgestelde afhankelijkheidsupgrade, een ongedocumenteerde workaround), in een zichtbare backlog, bijgehouden met dezelfde rigoureusheid en zichtbaarheid als je functiebacklog. Schuld die alleen leeft in het geheugen van individuele ingenieurs of in verspreide codecommentaren bestaat effectief niet voor prioriteringsdoeleinden.

### Kwantificeer elk schuld-item's kost en zijn draagkost

Voor elk item, schat twee cijfers: de kost om het te fixen (ingenieurstijd, risico van de fix zelf) en de kost om het ongefixt te dragen (hoeveel langzamer gaat gerelateerd werk, hoeveel extra defectrisico draagt het, hoeveel blokkeert het ander werk). Deze framing, direct geleend van de eigen logica van de financiële-schuld-metafoor, geeft beslissers een echte basis voor vergelijking tegen functiewerk's kost en verwachte waarde, in plaats van een abstracte, ongekwantificeerde klacht.

### Prioriteer met impact, niet leeftijd of luidste pleitbezorger

Rangschik schuld-items op hun combinatie van draagkost en hoe frequent de betrokken code aangeraakt wordt (de churndata van onderwerp 4.3 is hier direct nuttig): een item in een zelden gewijzigd hoekje van de codebase, hoe onplezierig ook, doet er veel minder toe dan een die direct in het pad zit van je meest actieve ontwikkeling. Weersta het prioriteren op welk item het langst op de backlog staat of welke ingenieur het meest aanhoudend ervoor pleit, waarvan geen betrouwbaar correleert met daadwerkelijke zakelijke impact.

### Alloceer toegewijde, beschermde capaciteit voor schuldherstel

Een schuldbacklog die item voor item moet concurreren tegen elk inkomend functieverzoek in elke planningscyclus neigt consistent te verliezen, omdat functiewerk meestal een duidelijkere, directere zakelijke voorvechter heeft. Alloceer een beschermd percentage ingenieurscapaciteit, een gewoon patroon is ergens tussen 10% en 20%, specifiek voor schuldherstel, vooraf besloten in plaats van elke sprint opnieuw onderhandeld, zodat schuldafbetaling gebeurt als een vanzelfsprekendheid in plaats van alleen in de nasleep van een crisis.

### Accepteer enige schuld als permanent, en zeg het expliciet

Niet elk item behoort op een actief herstelplan. Waar de kost om te fixen echt de kost overschrijdt om een item onbeperkt te dragen, vooral voor code in een stabiel, zelden aangeraakt, binnenkort-te-pensioneren-systeem, documenteer die beslissing expliciet en verplaats het item naar een doelbewust gedeprioriteerde categorie in plaats van het onbeperkt te laten zitten op een actieve backlog waar zijn aanhoudende aanwezigheid stilletjes werk impliceert dat nooit daadwerkelijk zal gebeuren.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen formele schuldtracking | Geen overhead | Schuld verliest de prioriteringscompetitie standaard; groeit onzichtbaar samen |
| Informeel, ad-hoc-schuldbewustzijn | Lage overhead, enige zichtbaarheid | Inconsistent; hangt af van individueel geheugen en pleitbezorging |
| Formele, gekwantificeerde schuldbacklog | Concurreert eerlijk voor investering; maakt geïnformeerde afwegingen mogelijk | Vereist doorlopend onderhoud en kwantificatiediscipline |
| Beschermde, toegewijde herstelcapaciteit | Zorgt dat afbetaling consistent gebeurt, niet alleen reactief | Vermindert beschikbare capaciteit voor functiewerk op korte termijn |

De centrale spanning is **directe leveringsdruk versus langetermijnonderhoudbaarheid**. Functiewerk heeft bijna altijd een duidelijkere, directere zakelijke voorvechter dan schuldherstel, wat structurele druk creëert voor schuld om elke individuele prioriteringsbeslissing te verliezen zelfs wanneer zijn cumulatieve kost hoog is. Los de spanning op door schuldherstel volledig uit de item-voor-item-competitie te verwijderen via beschermde, voorafgealloceerde capaciteit, zodat de afweging doelbewust en vooraf besloten wordt in plaats van opnieuw bediscussieerd, en meestal verloren, in elke enkele planningscyclus.

## Vragen om met je team te bespreken

1. **Hebben we een enkele, zichtbare technische-schuld-backlog, of leeft schuldbewustzijn meestal in individuele ingenieurs' hoofden?** Als het eerlijke antwoord het tweede is, is dat het enkele grootste gat dat dit onderwerp aanbeveelt eerst te sluiten.

2. **Zouden we, voor ons top-schuld-item, zijn kost om te fixen en zijn kost om te dragen kunnen stellen in termen specifiek genoeg om eerlijk te vergelijken tegen een functieverzoek?** Als niet, oefen deze kwantificatie samen als een groepsoefening met een echt, huidig item.

3. **Welk percentage van onze ingenieurscapaciteit gaat daadwerkelijk naar schuldherstel, en werd dat percentage doelbewust besloten of gebeurt het toevallig wat er overleeft nadat functiewerk gealloceerd is?** Kijk naar je daadwerkelijke recente sprints en berekenen het echte cijfer in plaats van te vertrouwen op indruk.

4. **Is onze schuldbacklog geprioriteerd op echte zakelijke impact, of op welk item dan ook het meest aanhoudend opgeworpen is of het langst daar gezeten heeft?** Cross-refereer je huidige prioritering tegen churndata (onderwerp 4.3) en zie of de twee overeenkomen.

5. **Welke schuld-items zouden we expliciet moeten accepteren als permanent, in plaats van ze onbeperkt te laten zitten op een actieve backlog?** Identificeer ten minste een echt item waar de kost om te fixen echt de kost overschrijdt om te dragen, en bespreek het verplaatsen naar een expliciet gedeprioriteerde status.

6. **Hoe is onze schuldbacklog veranderd over het laatste jaar, groeiend, krimpend, of vlak blijvend, en matcht die trend onze intuïtie?** Volg dit over tijd in plaats van alleen ooit naar een enkele momentopname te kijken; de trend is vaak informatiever dan de absolute grootte op enig gegeven moment.

## Sectorperspectief

**Startup.** Doelbewuste, geïnformeerde schuld is vaak een redelijke strategie in dit stadium: snel uitleveren om een hypothese te valideren, met een duidelijk plan om specifieke kortere wegen te herbezoeken als het product zich bewijst, is een legitieme ruil, geen falen. Het risico is het spoor verliezen van welke kortere wegen doelbewust en omkeerbaar waren versus welke stilletjes permanente, onderzochte verplichtingen geworden zijn naarmate de codebase groeit.

**Klein bedrijf.** Een simpele, gedeelde lijst, zelfs een informele, die je bekende kortere wegen en hun ruwe kost om te fixen benoemt is meestal voldoende op deze schaal. De belangrijkste discipline de moeite waard om te adopteren is die lijst periodiek herbezoeken in plaats van het stilletjes te laten accumuleren en onzichtbaar worden door vertrouwdheid.

**Groot bedrijf.** Beschermde, voorafgealloceerde herstelcapaciteit doet er het meeste toe hier, omdat de individuele prioriteringscompetitie tussen schuld en functiewerk betrouwbaar functies bevoordeelt over dozijnen teams gelijktijdig zonder een structureel contragewicht. Standaardiseer schuldkwantificatiepraktijk organisatiebreed zodat schuld-items eerlijk vergeleken kunnen worden over teams voor portefeuilleniveau-investeringsbeslissingen.

**Overheid.** Langlevende systemen accumuleren schuld over jaren of decennia van incrementele, individueel redelijke vereistewijzigingen, vaak zonder enige formele schuldtracking helemaal totdat een crisis het probleem afdwingt. Een gekwantificeerde, zichtbare schuldbacklog is een echt overtuigend gereedschap voor het rechtvaardigen van moderniseringsbudget aan toezichthoudende instanties, omdat het een vage "het systeem is oud"-claim verandert in een specifieke, gekoste zaak voor investering.

## Voorbeelden

**Groot bedrijf.** Het facturatieplatform van een telecommunicatiebedrijf had meer dan een decennium informeel erkende maar nooit formeel bijgehouden technische schuld opgebouwd, met ingenieurs die routinematig "de facturatiemotor is een puinhoop" aanhaalden in retrospectieven zonder vervolg. Een nieuwe ingenieursdirecteur vereiste dat elk team een gekwantificeerde schuldbacklog bouwde, fixkost en draagkost schattend voor elk item, en alloceerde een vaste 15% ingenieurscapaciteit voor schuldherstel voortaan. Binnen een jaar waren de top vijf hoogste-draagkost-items, een kleine fractie van de totale backlog per telling vertegenwoordigend, opgelost, en wijzigingsfoutpercentage (onderwerp 2.10) voor facturatiegerelateerde deploys verbeterde meetbaar, de disproportionele impact aantonend van het eerst richten op de hoogste-draagkost-items in plaats van door de backlog werken in willekeurige volgorde.

**Overheid.** Het kernverwerkingssysteem van een nationaal statistiekbureau, origineel meer dan twintig jaar eerder gebouwd, had nooit een formele schuldbeoordeling gehad ondanks wijdverspreide informele erkenning onder personeel dat significante delen fragiel en slecht begrepen waren. Een gestructureerde schuldbeoordeling, statische-analysebevindingen, hotspotdata, en interviews met de weinige overblijvende ingenieurs die de oudste componenten begrepen combinerend, produceerde een gekwantificeerde, geprioriteerde backlog die direct een meerjarige moderniseringsbudgetaanvraag ondersteunde. Cruciaal, de beoordeling identificeerde ook expliciet verscheidene stabiele, zelden aangeraakte legacy-componenten als redelijk om onveranderd te laten, een onnodig brede en duurdere volledige-systeemherschrijving vermijdend in het voordeel van een gerichte investering in de specifieke gebieden die de data toonde de hoogste doorlopende kost droegen.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van technische schuld doelbewust beheren is vermeden samengroeiende kost: elke onaangepakte kortere weg maakt toekomstige wijzigingen marginaal moeilijker, en dat effect accelereert zonder interventie, uiteindelijk een codebase producerend zo fragiel dat zelfs simpele wijzigingen traag en riskant worden. Het telecommunicatievoorbeeld hierboven toont het rendement concreet: een klein aantal hoogste-draagkost-items richten produceerde een meetbare levering- en kwaliteitsverbetering, disproportioneel aan de bescheiden fractie van de totale backlog die die items vertegenwoordigden.

De totale eigendomskosten zijn de beschermde capaciteit gealloceerd aan herstel, meestal 10% tot 20% ingenieurstijd, wat een echte, zichtbare kost is die concurreert met functiesnelheid op korte termijn. Die kost is de moeite waard omdat het alternatief, onbeheerde, samengroeiende schuld, uiteindelijk veel meer kost in vertraagde levering en verhoogde defecttempo's over de hele codebase, niet alleen de specifieke items onaangepakt gelaten.

## Antipatronen en valkuilen

- **Geen zichtbare, bijgehouden schuldbacklog:** schuld verliest de prioriteringscompetitie standaard en groeit onzichtbaar samen.
- **Vage, ongekwantificeerde schuldclaims:** concurreren zelden goed tegen concrete, gekwantificeerde functieverzoeken in planning.
- **Schuld prioriteren op leeftijd of pleitbezorgingsvolume in plaats van impact:** stuurt beperkte herstelcapaciteit verkeerd.
- **Geen beschermde capaciteit voor herstel:** schuldafbetaling gebeurt alleen reactief, na een crisis, in plaats van als routinematige, doelbewuste praktijk.
- **Alle schuld behandelen als even de moeite waard om te fixen:** verspilt inspanning op laag-impact-items terwijl hoogste-draagkost-items onaangepakt blijven.
- **Schuld onbeperkt laten zitten op een actieve backlog zonder ooit te beslissen dat het permanent is:** impliceert toekomstig werk dat nooit daadwerkelijk zal gebeuren en verrommelt echte prioritering.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Technische schuld wordt informeel besproken, zonder bijgehouden backlog en zonder kwantificatie; het verliest consistent tegen functiewerk.
- **Niveau 2, Ontwikkelen:** Sommige teams volgen schuld informeel, maar er is geen consistente kwantificatie, teamoverschrijdende zichtbaarheid, of beschermde herstelcapaciteit.
- **Niveau 3, Standaardiseren:** Een zichtbare, gekwantificeerde schuldbacklog bestaat organisatiebreed, met beschermde herstelcapaciteit consistent gealloceerd.
- **Niveau 4, Beheren:** Schuld-items worden geprioriteerd op gemeten impact (draagkost gecombineerd met churn), en permanent geaccepteerde schuld is expliciet gedocumenteerd in plaats van ambigu gelaten.
- **Niveau 5, Orkestreren:** De organisatie kan wijzen naar specifieke, meetbare levering- of kwaliteitsverbeteringen getraceerd naar gericht schuldherstel, en schuldbeheer is een routinematige, vertrouwde input voor ingenieursinvesteringsbeslissingen naast functiewerk.

## Discussie-ideeën

1. Wat is ons enkele hoogste-draagkost-schuld-item nu, en zouden we het kunnen kwantificeren?
2. Welk percentage van onze capaciteit gaat daadwerkelijk naar schuldherstel vandaag?
3. Welk schuld-item zouden we expliciet moeten accepteren als permanent in plaats van ambigu op onze backlog te laten?
4. Is onze schuldbacklog gegroeid, gekrompen, of vlak gebleven over het laatste jaar?
5. Wat zou een gekwantificeerde schuldbeoordeling onthullen dat ons huidige informele bewustzijn mist?

## Belangrijkste inzichten

- Technische schuld is een **beheerbare afweging, geen schaamtevol geheim**; kwantificeer het in plaats van het te laten als een vage, eeuwig gedeprioriteerde zorg.
- **Kwantificeer kost om te fixen versus kost om te dragen** voor elk item zodat het eerlijk concurreert tegen functiewerk.
- **Prioriteer op impact** (draagkost gecombineerd met churn), niet op leeftijd of pleitbezorgingsvolume.
- Alloceer **beschermde, toegewijde herstelcapaciteit**, vooraf besloten, omdat schuld anders betrouwbaar de item-voor-item-competitie tegen functiewerk verliest.
- **Accepteer enige schuld expliciet als permanent** waar de kost om te fixen de kost om te dragen overschrijdt, in plaats van het ambigu te laten op een actieve backlog.

## Bronnen en verder lezen

- Cunningham, Ward, "The WyCash Portfolio Management System" (OOPSLA-ervaringsrapport, 1992): de oorsprong van de technische-schuld-metafoor.
- *Managing Technical Debt: Reducing Friction in Software Development*, door Philippe Kruchten, Robert Nord, en Ipek Ozkaya (een uitgebreide behandeling van technische-schuld-meting en -beheer).
- *Refactoring: Improving the Design of Existing Code*, door Martin Fowler (de hersteltechnieken waarop een schuldbacklog uiteindelijk put).
- *Your Code as a Crime Scene*, door Adam Tornhill (hotspotanalyse als een input voor schuldprioritering, onderwerp 4.3).
