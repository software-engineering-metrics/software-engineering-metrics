# Wat zijn software-engineeringmetrieken?

[Software-engineeringmetrieken](https://en.wikipedia.org/wiki/Software_metric) zijn kwantitatieve maten waarmee je de kwaliteit, efficiëntie en impact
van softwareontwikkelingsprocessen, producten en teams beoordeelt, volgt en verbetert. Goed gebruikt werken ze als een systemisch diagnostisch instrument:
ze leggen operationele knelpunten bloot, rechtvaardigen het aflossen van technische schuld en brengen engineeringactiviteit in lijn met concrete
bedrijfsresultaten. Slecht gebruikt verstoren ze gedrag, ondermijnen ze vertrouwen en belonen ze precies het verkeerde.

Dit boek bestaat omdat de meeste teams naar metrieken grijpen voordat ze hebben besloten *waarvoor* een metriek dient. Het dashboard raakt gevuld met alles wat
makkelijk te tellen is, het leiderschap vraagt "is dit getal omhoog of omlaag gegaan?" en binnen een kwartaal optimaliseert het team het getal in plaats van
het resultaat dat het getal moest vertegenwoordigen. Die mislukking heeft een naam: [de wet van Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law).
Wanneer een maatstaf een doel wordt, is het geen goede maatstaf meer. Elk onderwerp in dit boek is geschreven met die wet op de achtergrond.

## Twee basisraamwerken

De sector is grotendeels uitgekomen bij twee onderzoeksgebaseerde raamwerken voor het meten van engineeringlevering en teamgezondheid.

**[DORA-metrieken](https://dora.dev/guides/dora-metrics/)** (uit het DevOps Research and Assessment-programma) meten de doorvoer en stabiliteit van een systeem:
deployfrequentie, doorlooptijd voor wijzigingen, wijzigingsfaalpercentage en hersteltijd na een mislukte deploy. Deel 2 van dit boek behandelt alle vier in
één referentieonderwerp, naast het Flow Framework, dat we gebruiken om leverings- en flowmetrieken breder te ordenen, omdat DORA de mechanica van de pijplijn goed
meet maar niets zegt over wat voor soort waarde er doorheen stroomt.

Het **[SPACE-raamwerk](https://queue.acm.org/detail.cfm?id=3454124)**, ontwikkeld door onderzoekers van Microsoft, GitHub en de University of Victoria,
brengt ruwe doorvoer in balans met de ervaring van ontwikkelaars langs vijf dimensies: tevredenheid en welzijn, prestaties, activiteit, communicatie en samenwerking,
en efficiëntie en flow. Deel 3 behandelt het uitgebreid.

Naast deze twee raamwerken volgen teams lokale metrieken, gegroepeerd per domein: code- en kwaliteitsmetrieken (deel 4), product- en bedrijfsmetrieken (deel 5)
en betrouwbaarheids-, operationele en beveiligingsmetrieken (deel 6). Deel 7 behandelt de verschuiving die al gaande is: generatieve-AI-hulpmiddelen hebben ruwe code-uitvoer
vrijwel gratis gemaakt, waardoor sommige metrieken waar de sector tien jaar op leunde niet meer betekenen wat ze vroeger betekenden.

## Voor wie dit boek is

De primaire lezers zijn degenen die kiezen wat een team meet en waarom: engineeringleiders, staff- en principal-engineers, platform- en DevOps-teams, en programma- en
productmanagers die voor het eerst een metriekendashboard of scorecard bouwen, of er een repareren dat gedrag is gaan verstoren. Secundaire lezers zijn alle
engineers die willen begrijpen waarom hun organisatie volgt wat ze volgt, en hoe ze zich kunnen verzetten wanneer een metriek wordt misbruikt.

## Hoe je het leest

Begin hier en lees dan de [inleiding](introduction.md) om te zien hoe het boek is opgebouwd, of ga direct naar de [inhoudsopgave](table-of-contents.md).
Elk onderwerp staat op zichzelf: het geeft eerst het principe, doet concrete aanbevelingen, benoemt hoe de besproken metriek wordt gemanipuleerd en eindigt met een
volwassenheidsmodel, discussievragen en referenties. Je hoeft het boek niet van kaft tot kaft te lezen om er iets aan te hebben.
