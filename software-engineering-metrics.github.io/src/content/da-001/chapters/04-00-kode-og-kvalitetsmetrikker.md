# 4.0 Introduktion til del 4: Kode- og kvalitetsmetrikker

Del 2 og 3 målte, hvordan arbejde bevæger sig, og hvordan de mennesker, der producerer det, har det. Denne del vender sig mod selve artefaktet: koden, og hvad en metrik kan og ikke kan fortælle om dens kvalitet. Metrikker for kodekvalitet har den længste historie af alle metrikfamilier i denne bog, cyklomatisk kompleksitet stammer fra 1976, og den længste historie med misbrug til at matche. Denne del behandler den historie alvorligt: hvert emne navngiver et reelt nyttigt signal ved siden af den specifikke, veldokumenterede måde, hvorpå signalet bliver manipuleret, når det først bliver til et mål at ramme.

Den røde tråd, der forbinder disse seks emner, er, at ingen enkelt kodemetrik alene fanger kvalitet, og flere af de mest populære aktivt vildleder, når de forfølges isoleret. En høj procentdel testdækning kan sameksistere med tests, der ikke verificerer noget meningsfuldt. En lav kompleksitetsscore kan sameksistere med kode, der teknisk set er enkel, men begrebsmæssigt usammenhængende. Hvert af denne dels emner parrer sin overskriftsmetrik med den komplementære kontrol, der fanger dens specifikke blinde vinkel: kompleksitet med kontekst om vedligeholdelighed, dækning med mutationstest, kodeomsætning med hotspotanalyse, statisk analyse med menneskelig dømmekraft og teknisk gæld med prioriteret afhjælpning frem for en stadigt voksende, uelsket backlog.

For store teams er kode- og kvalitetsmetrikker det, der gør det muligt at styre en kodebase, der er for stor til, at en enkelt person kan holde den i hovedet. Et team på fem kan støtte sig til delt, stiltiende viden om, hvilke dele af systemet der er skrøbelige; en ingeniørorganisation på femhundrede, der spænder over snesevis af tjenester, har brug for instrumenterede signaler til systematisk at finde den skrøbelighed. Store virksomheder og offentlige organisationer, der ofte bærer på kodebaser målt i årtier frem for år, er afhængige af denne dels metrikker til at prioritere, hvor begrænset vedligeholdelsesinvestering gør mest gavn.

## Emner i denne del

- **4.1 Kodekompleksitetsmetrikker:** Cyklomatisk kompleksitet og dens slægtninge, hvad de faktisk forudsiger, og deres veldokumenterede risiko for manipulation.
- **4.2 Testdækning og testeffektivitet:** Hvorfor en dækningsprocent alene fortæller mindre, end det ser ud til, og hvordan mutationstest lukker hullet.
- **4.3 Kodeomsætning og hotspotanalyse:** At finde den specifikke, lille brøkdel af en kodebase, der er ansvarlig for en uforholdsmæssig stor andel af fejl og vedligeholdelsesomkostninger.
- **4.4 Statisk analyse og code smell-metrikker:** Automatiserede signaler om kodekvalitet, deres reelle værdi og deres grænser over for menneskelig dømmekraft.
- **4.5 Måling af teknisk gæld:** At gøre en usynlig, uformelt drøftet forpligtelse til en synlig, prioriteret, håndterbar portefølje.
- **4.6 Metrikker for dokumentation og viden:** At måle, om dokumentation faktisk hjælper, ikke blot om den findes.

## Hvordan disse emner hænger sammen

Disse seks emner bygger fra den mindste enhed af kode og udad. Emne 4.1 starter på niveauet af en enkelt funktion eller metode; emne 4.2 spørger, om tests faktisk verificerer den enheds adfærd; emne 4.3 zoomer ud for at finde, hvilke filer og moduler på tværs af hele kodebasen der fortjener opmærksomhed først; emne 4.4 tilføjer det automatiserede værktøjslag, der kontinuerligt scanner på tværs af det hele; emne 4.5 omsætter de samlede fund fra alle fire til en styret, prioriteret backlog frem for en diffus, uadresseret bekymring; og emne 4.6 afslutter delen ved at måle, om den viden, der skal til for sikkert at vedligeholde alt dette, faktisk er dokumenteret og kan findes.

Denne del forbinder sig direkte tilbage til del 2's stabilitetsmetrikker: andel af ændringer, der fejler (emne 2.10), er for en stor del en nedstrøms konsekvens af den kodekvalitet, denne del måler opstrøms. Den forbinder sig også fremad til del 5's produktmetrikker, da undslupne fejl (emne 5.1) ofte kan spores til netop de kompleksitetshotspots og dækningshuller, denne del er bygget til at afdække, før de overhovedet når produktion.
