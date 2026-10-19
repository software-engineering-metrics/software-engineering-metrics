# Inleiding

Dit boek is een praktische gids voor het goed meten van [software-engineering](https://en.wikipedia.org/wiki/Software_engineering), voor elk team, van een
startup van vijf personen tot een onderneming met duizenden engineers of een overheidsinstantie die rapporteert tegen een wettelijk prestatiekader. Het bestaat
omdat het meeste advies over metrieken ofwel een samenvatting van een raamwerk is zonder operationele details, ofwel een featurelijst van een toolleverancier.
Dit boek probeert geen van beide te zijn: het is stellig over wat je moet meten, expliciet over hoe elke metriek wordt gemanipuleerd en praktisch over hoe je een
metriekenprogramma draait dat teams vertrouwen in plaats van vrezen.

## Voor wie dit boek is

De primaire lezers zijn degenen die kiezen wat een organisatie meet: engineeringleiders, staff- en principal-engineers, platform- en DevOps-teams, en programma-
en productmanagers. Secundaire lezers zijn alle engineers die de redenering willen begrijpen achter een dashboard waarvan ze wordt gevraagd het te laten bewegen, of die
een metriek willen aanvechten die zijn doel niet meer dient. Je hoeft het niet van kaft tot kaft te lezen. Elk onderwerp staat op zichzelf, geeft eerst het
principe en eindigt met praktische conclusies, een volwassenheidsmodel en referenties.

## Hoe het boek is opgebouwd

Het boek is verdeeld in **delen** (hele getallen) en **onderwerpen** (decimalen). Onderwerp **N.0** introduceert elk deel en legt uit hoe de onderwerpen ervan
samenhangen; onderwerpen **N.1, N.2, …** behandelen de afzonderlijke onderwerpen diepgaand.

- **Deel 1, Grondslagen van meten:** waarom meten überhaupt, de wet van Goodhart en de psychologie van manipulatie, resultaten kiezen boven output, governance en
  eigenaarschap, databronnen en de statistische geletterdheid die elk metriekenprogramma nodig heeft.
- **Deel 2, Flowmetrieken:** het Flow Framework, flow-items en de vijf flowmetrieken, doorlooptijd, wachtrijtheorie, klassieke lean-waardestroommetrieken,
  pull-request- en codereviewmetrieken, en het DORA-raamwerk als referentieonderwerp.
- **Deel 3, Developer experience en het SPACE-raamwerk:** het SPACE-raamwerk en zijn vijf dimensies, en hoe je developer-experiencesurveys draait zonder
  er een populariteitswedstrijd van te maken.
- **Deel 4, Code- en kwaliteitsmetrieken:** complexiteit, testdekking en -effectiviteit, churn en hotspots, statische analyse, technische schuld en documentatie.
- **Deel 5, Product- en bedrijfsmetrieken:** ontsnapte defecten, featureadoptie, klant- en bedrijfsresultaten, unit economics en rendement op investering.
- **Deel 6, Betrouwbaarheids-, operationele en beveiligingsmetrieken:** SLI's, SLO's en foutbudgetten, incidentmetrieken, bereikbaarheidsdienst en capaciteit,
  en beveiligings- en kwetsbaarheidsmetrieken.
- **Deel 7, Metrieken in het AI-tijdperk:** de paradigmaverschuiving van generatieve AI, hoe je AI-ondersteunde ontwikkeling meet, het risico van metriekinflatie
  en waarom resultaattelemetrie de poolster wordt wanneer output goedkoop is.
- **Deel 8, Een metriekenprogramma bouwen:** dashboards ontwerpen, bouwen of kopen, metrieken uitrollen zonder angst te kweken, volwassenheidsmodellen
  en een gefaseerde adoptieroutekaart.
- **Deel 9, Bijlagen:** woordenlijst, referentie van metriekdefinities en formules, checklists, sjablonen, zelfbeoordeling van volwassenheid, referenties en index.

## Leidende principes

Acht principes vormen de ruggengraat van het boek:

1. **Een maatstaf die een doel wordt, is geen goede maatstaf meer.** Ontwerp vanaf het begin tegen de wet van Goodhart, niet nadat de vertekening zich voordoet.
2. **Resultaten boven output boven activiteit.** Weeg elke set metrieken naar wat er verandert voor de klant of het bedrijf, niet naar wat het team heeft
   voortgebracht of hoe druk het was.
3. **Elke metriek met een prikkel heeft een beschermmetriek nodig.** Koppel snelheid aan kwaliteit en doorvoer aan stabiliteit, en jaag nooit één getal geïsoleerd na.
4. **Meet systemen, geen mensen.** Metrieken die schuld individualiseren, ondermijnen vertrouwen en nodigen uit tot manipulatie; metrieken die systeembeperkingen blootleggen
   nodigen uit tot verbetering.
5. **Kies instrumentatie boven zelfrapportage waar dat kan, en zelfrapportage waar dat niet kan.** Deployaantallen komen uit de pijplijn; tevredenheid komt uit vragen.
6. **Een metriek verdient zijn plek of gaat met pensioen.** Elke tegel op een dashboard kost aandacht. Snoei bewust.
7. **Definities zijn belangrijker dan dashboards.** Twee teams die "doorlooptijd" verschillend berekenen, besteden meer tijd aan ruzie over het getal dan aan handelen op basis ervan.
8. **Generatieve AI is een reden om opnieuw te onderzoeken, niet alleen om de nulmeting te herzien.** Wanneer output goedkoop wordt, hebben metrieken die rond outputvolume
   zijn gebouwd niet alleen nieuwe doelen nodig maar nieuwe beschermmetrieken.

## Terugkerende thema's

[De wet van Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) is één thema dat door elk deel van dit boek loopt, niet alleen door onderwerp 1.2.
Elk onderwerp over een metriekenfamilie benoemt hoe de besproken metriek wordt gemanipuleerd en welke beschermmetriek dat opvangt. Rapportageverplichtingen
van overheden en ondernemingen, waar een metriek wettelijk of contractueel gewicht kan hebben, worden in het hele boek behandeld als ontwerpinput, niet als
bijzaak die tot één onderwerp beperkt blijft.

## Hoe je het gebruikt

Voer het gefaseerd in; laat niet in één keer een dashboard vallen op een team dat er nooit een had. Begin waar de pijn het grootst is, gebruik het volwassenheidsmodel van elk onderwerp
om jezelf eerlijk te plaatsen en laat de adoptieroutekaart (onderwerp 8.5) de volgorde van het werk bepalen. Het doel is geen muur van grafieken. Het doel is een organisatie die
met bewijs kan zeggen of wat ze doet werkt, en die haar eigen getallen genoeg vertrouwt om erop te handelen.
