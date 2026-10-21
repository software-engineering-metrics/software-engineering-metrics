# 3.0 Introduktion til del 3: Udvikleroplevelse og SPACE-frameworket

Del 2 målte leveringen udefra: hvor hurtigt og hvor sikkert kode bevæger sig gennem en pipeline. Denne del måler oplevelsen hos de mennesker, der producerer koden, og den findes, fordi et metriksæt for levering alene kan se fremragende ud, mens menneskene bag brænder ud, drukner i afbrydelser eller i det stille mister engagementet. En organisation, der kun holder øje med DORA-metrikker, kan forbedre dem i et år eller to ved at presse et team hårdere, lige indtil afgang, kvalitetskollaps eller udbrændthed udsletter gevinsten på én gang. Denne del er modvægten.

Hovedværket er [SPACE-frameworket](https://queue.acm.org/detail.cfm?id=3454124), udviklet af forskere fra Microsoft, GitHub og University of Victoria specifikt som et modsvar på branchens vane med at måle udvikleres produktivitet gennem en enkelt, let manipulerbar stedfortræder som kodelinjer eller antal commits. SPACE spænder over fem dimensioner: tilfredshed og trivsel, præstation, aktivitet, kommunikation og samarbejde samt effektivitet og flow. Frameworkets centrale disciplin, og grunden til, at denne del behandler det med den samme strenghed, som del 2 anvender på sine egne flowmetrikker, er, at ingen enkelt dimension alene er troværdig; værdien kommer specifikt af at holde alle fem i sigte samtidigt, så et team ikke kan se godt ud på én akse ved i det stille at skade en anden.

For store teams besvarer metrikker for udvikleroplevelse et spørgsmål, DORA ikke kan: er denne leveringspræstation bæredygtig, og fastholder organisationen de mennesker, der producerer den. Store virksomheder, der ignorerer denne del, har tendens til at opdage prisen gennem data om afgang og udtrædelsessamtaler, længe efter skaden er sket; offentlige organisationer, der ofte opererer under lønbegrænsninger i den offentlige sektor, som begrænser deres evne til at konkurrere udelukkende på løn, har særligt stærke grunde til at behandle udvikleroplevelse som en førsteklasses, aktivt styret bekymring frem for en eftertanke.

## Emner i denne del

- **3.1 SPACE-frameworket:** De fem dimensioner sammen, hvorfor ingen enkelt alene er troværdig, og hvordan man bygger et reelt afbalanceret metriksæt ud fra dem.
- **3.2 Metrikker for tilfredshed og trivsel:** At måle tilfredsstillelse, frustration og risiko for udbrændthed, den dimension ingen systemtelemetri kan observere direkte.
- **3.3 Præstationsmetrikker og resultatproxyer:** Den dimension, der lettest forveksles med aktivitet, og hvordan man i stedet måler reelt bidrag til resultater.
- **3.4 Aktivitetsmetrikker og deres grænser:** Antal commits, kodelinjer, og hvorfor det er den farligste dimension at overvægte.
- **3.5 Metrikker for kommunikation og samarbejde:** Hvordan information faktisk flyder mellem mennesker og teams, og hvordan et sundt mønster ser ud.
- **3.6 Effektivitet og flow: dybt arbejde og afbrydelser:** At beskytte den uafbrudte tid, reelt ingeniørarbejde kræver, og at måle den friktion, der eroderer den.
- **3.7 Undersøgelser af udvikleroplevelse og DevEx-metrikker:** Hvordan man gennemfører en undersøgelse, der producerer troværdigt signal frem for en popularitetskonkurrence, og hvordan man kombinerer den med objektive data.

## Hvordan disse emner hænger sammen

Emne 3.1 introducerer alle fem SPACE-dimensioner sammen, og emnerne 3.2 til 3.6 tager derefter hver dimension for sig i reel dybde, i den rækkefølge SPACE-forskerne præsenterer dem. Emne 3.7 afslutter delen med den praktiske mekanik i design af spørgeskemaer, da tilfredshed, præstation og samarbejde alle delvist hviler på selvrapporterede data (emne 1.5's skel mellem instrumentering og selvrapportering er direkte relevant hele vejen gennem denne del), og et dårligt designet spørgeskema underminerer hvert af de foregående emner.

Denne dels centrale disciplin, balance på tværs af dimensioner frem for styrke i én, er denne bogs klareste arbejdseksempel på emne 1.3's princip om resultater frem for output anvendt på mennesker frem for en leveringspipeline. Aktivitet (emne 3.4) er den SPACE-dimension, der mest ligner en ren outputmetrik, og denne del behandler den derefter: nyttig som ét input blandt fem, farlig som et selvstændigt signal. Læst sammen med del 2 fuldender denne del det billede, DORA alene ikke kan give: ikke blot om software leveres hurtigt og sikkert, men om de mennesker, der leverer den, kan opretholde det tempo.
