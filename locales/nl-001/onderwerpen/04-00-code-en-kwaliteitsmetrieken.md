# 4.0 Introductie tot deel 4: code- en kwaliteitsmetrieken

Delen 2 en 3 meetten hoe werk beweegt en hoe de mensen die het produceren het maken. Dit deel keert zich naar het artefact zelf: de code, en wat een metriek kan en niet kan vertellen over zijn kwaliteit. Codekwaliteitsmetrieken hebben de langste geschiedenis van enige metriekfamilie in dit boek, cyclomatische complexiteit dateert uit 1976, en de langste geschiedenis van misbruik om het te matchen. Dit deel behandelt die geschiedenis serieus: elk onderwerp benoemt een echt nuttig signaal naast de specifieke, goed gedocumenteerde manier waarop dat signaal gemanipuleerd wordt eenmaal het een doel wordt.

De doorlopende lijn die deze zes onderwerpen verbindt is dat geen enkele codemetriek kwaliteit op zichzelf vangt, en verscheidene van de populairste actief misleiden wanneer geïsoleerd nagestreefd. Een hoog testdekkingspercentage kan samenbestaan met tests die niets betekenisvols verifiëren. Een lage complexiteitsscore kan samenbestaan met code die technisch simpel maar conceptueel incoherent is. De onderwerpen van dit deel koppelen elk hun kop-metriek met de complementaire check die zijn specifieke blinde vlek vangt: complexiteit met onderhoudbaarheidscontext, dekking met mutatietesten, churn met hotspotanalyse, statische analyse met menselijk oordeel, en technische schuld met geprioriteerd herstel in plaats van een eeuwig groeiende, onbeminde backlog.

Voor grote teams zijn code- en kwaliteitsmetrieken wat het mogelijk maakt om een codebase te beheren te groot voor enige persoon om in zijn hoofd te houden. Een vijf-persoonsteam kan vertrouwen op gedeelde stilzwijgende kennis van welke delen van het systeem fragiel zijn; een organisatie van vijfhonderd ingenieurs die dozijnen diensten omspant heeft geïnstrumenteerde signalen nodig om die fragiliteit systematisch te vinden. Grote bedrijven en overheidsorganisaties, vaak codebases dragend gemeten in decennia in plaats van jaren, hangen af van de metrieken van dit deel om te prioriteren waar beperkte onderhoudsinvestering het meeste goed zal doen.

## Onderwerpen in dit deel

- **4.1 Codecomplexiteitsmetrieken:** Cyclomatische complexiteit en zijn verwanten, wat ze daadwerkelijk voorspellen, en hun goed gedocumenteerde manipulatierisico.
- **4.2 Testdekking en testeffectiviteit:** Waarom een dekkingspercentage alleen je minder vertelt dan het lijkt, en hoe mutatietesten het gat sluit.
- **4.3 Codechurn en hotspotanalyse:** De specifieke, kleine fractie van een codebase vinden verantwoordelijk voor een disproportioneel aandeel defecten en onderhoudskost.
- **4.4 Statische analyse en code-smell-metrieken:** Geautomatiseerde codekwaliteitssignalen, hun echte waarde, en hun grenzen tegen menselijk oordeel.
- **4.5 Technische-schuld-meting:** Een onzichtbare, informeel bediscussieerde verplichting veranderen in een zichtbare, geprioriteerde, beheerbare portefeuille.
- **4.6 Documentatie- en kennismetrieken:** Meten of documentatie daadwerkelijk helpt, niet alleen of het bestaat.

## Hoe deze onderwerpen samenhangen

Deze zes onderwerpen bouwen van de kleinste eenheid code naar buiten. Onderwerp 4.1 start op het niveau van een enkele functie of methode; onderwerp 4.2 vraagt of tests daadwerkelijk het gedrag van die eenheid verifiëren; onderwerp 4.3 zoomt uit om te vinden welke bestanden en modules over de hele codebase het eerst aandacht verdienen; onderwerp 4.4 voegt de geautomatiseerde toolinglaag toe die continu over alles scant; onderwerp 4.5 verandert de opgebouwde bevindingen van alle vier in een beheerde, geprioriteerde backlog in plaats van een diffuse, onaangepakte zorg; en onderwerp 4.6 sluit het deel af door te meten of de kennis nodig om dit alles veilig te onderhouden daadwerkelijk gedocumenteerd en vindbaar is.

Dit deel verbindt direct terug met de stabiliteitsmetrieken van deel 2: wijzigingsfoutpercentage (onderwerp 2.10) is, grotendeels, een stroomafwaarts gevolg van de codekwaliteit die dit deel stroomopwaarts meet. Het verbindt ook voorwaarts met de productmetrieken van deel 5, omdat ontsnapte defecten (onderwerp 5.1) vaak te traceren zijn tot precies de complexiteitshotspots en dekkingsgaten die dit deel gebouwd is om aan de oppervlakte te brengen voordat ze productie überhaupt bereiken.
