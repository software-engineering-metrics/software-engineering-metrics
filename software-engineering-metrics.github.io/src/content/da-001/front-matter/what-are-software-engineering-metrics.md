# Hvad er metrikker for softwareudvikling?

[Metrikker for softwareudvikling](https://en.wikipedia.org/wiki/Software_metric) er kvantitative mål, der bruges til at vurdere, følge og forbedre kvaliteten, effektiviteten og effekten af softwareudviklingens processer, produkter og teams. Når det gøres godt, fungerer de som systemiske diagnoseværktøjer: de afslører flaskehalse i driften, begrunder afvikling af teknisk gæld og får ingeniørarbejdet til at passe med konkrete forretningsresultater. Når det gøres dårligt, forvrider de adfærd, ødelægger tilliden og belønner præcis det forkerte.

Denne bog findes, fordi de fleste teams rækker ud efter metrikker, før de har besluttet, hvad en metrik skal *bruges til*. Et dashboard fyldes med alt det, der er nemt at tælle, en ledelse begynder at spørge "er det her tal oppe eller nede", og inden for et kvartal optimerer teamet tallet i stedet for det resultat, det skulle repræsentere. Dette svigt har et navn, [Goodharts lov](https://en.wikipedia.org/wiki/Goodhart%27s_law): når et mål bliver til et mål at ramme, holder det op med at være et godt mål. Hvert emne i denne bog er skrevet med den lov stående bag sig.

## De to grundlæggende frameworks

Branchen er i vid udstrækning konvergeret om to forskningsbaserede frameworks til at måle ingeniørleverancer og teamets sundhed.

**[DORA-metrikker](https://dora.dev/guides/dora-metrics/)** (fra programmet DevOps Research and Assessment) måler systemets gennemstrømning og stabilitet: udrulningsfrekvens, gennemløbstid for ændringer, andel af ændringer, der fejler, og genoprettelsestid efter mislykkede udrulninger. Del 2 i denne bog dækker alle fire i et dedikeret referenceemne, sammen med Flow Framework, som bruges til at organisere leverings- og flowmetrikker mere bredt, fordi DORA måler pipelinens mekanik godt, men ikke siger noget om, hvilken slags værdi der bevæger sig gennem pipelinen.

**[SPACE-frameworket](https://queue.acm.org/detail.cfm?id=3454124)**, skabt af forskere hos Microsoft, GitHub og University of Victoria, modvægter rå gennemstrømning med udvikleroplevelse langs fem dimensioner: tilfredshed og trivsel, præstation, aktivitet, kommunikation og samarbejde samt effektivitet og flow. Del 3 gennemgår det i dybden.

Ud over disse to frameworks følger teams lokale metrikker grupperet efter domæne: kode- og kvalitetsmetrikker (del 4), produkt- og forretningsmetrikker (del 5) samt metrikker for driftssikkerhed, drift og sikkerhed (del 6). Del 7 tager fat på et skift, der allerede er i gang: værktøjer til generativ AI har gjort rå kodeoutput næsten gratis, hvilket betyder, at flere metrikker, branchen har støttet sig til i et årti, ikke længere betyder det, de gjorde.

## Hvem bogen er til

Den primære målgruppe er de personer, der vælger, hvad et team måler, og hvorfor: ingeniørledere, staff- og principal-ingeniører, platforms- og DevOps-teams samt program- og produktchefer, der bygger et metrikdashboard eller et scorecard for første gang eller reparerer et, der er begyndt at forvride adfærd. Den sekundære målgruppe er enhver ingeniør, der vil forstå, hvorfor organisationen følger det, den følger, og hvordan man gør indsigelse, når en metrik bliver misbrugt.

## Sådan læser du den

Start her, og læs derefter [introduktionen](introduction.md) for at se, hvordan bogen er organiseret, eller gå direkte til [indholdsfortegnelsen](table-of-contents.md). Hvert emne kan stå alene: det fremlægger først sine principper, giver konkrete anbefalinger, peger på, hvordan den metrik, det dækker, bliver manipuleret, og slutter med en modenhedsmodel, spørgsmål til drøftelse og kilder. Du behøver ikke læse bogen fra ende til anden for at bruge den.
