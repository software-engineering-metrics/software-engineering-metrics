# Vad är mätetal för programvaruutveckling?

[Mätetal för programvaruutveckling](https://en.wikipedia.org/wiki/Software_metric) är kvantitativa mått som används för att utvärdera, följa och förbättra
kvaliteten, effektiviteten och effekten hos programvaruutvecklingens processer, produkter och team. Används de väl fungerar de som ett systemiskt diagnostiskt
verktyg: de blottlägger operativa flaskhalsar, motiverar att teknisk skuld betalas av och riktar utvecklingsarbetet mot konkreta affärsresultat. Används de dåligt förvränger de
beteenden, undergräver förtroende och belönar precis fel sak.

Den här boken finns eftersom de flesta team griper efter mätetal innan de har bestämt *vad* ett mätetal ska vara till för. Instrumentpanelen fylls med allt som är lätt att räkna,
ledningen börjar fråga "gick den här siffran upp eller ner?" och inom ett kvartal optimerar teamet siffran i stället för det resultat som siffran skulle representera.
Det misslyckandet har ett namn: [Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law). När ett mått blir ett mål upphör det att vara ett bra mått.
Varje ämne i den här boken är skrivet med den lagen i ryggen.

## Två grundläggande ramverk

Branschen har till stor del enats kring två forskningsbaserade ramverk för att mäta utvecklingsleverans och teamhälsa.

**[DORA-mätetalen](https://dora.dev/guides/dora-metrics/)** (från programmet DevOps Research and Assessment) mäter ett systems genomströmning och stabilitet:
driftsättningsfrekvens, ledtid för ändringar, andel misslyckade ändringar och återhämtningstid efter en misslyckad driftsättning. Del 2 i den här boken behandlar alla fyra i
ett enda referensämne, tillsammans med Flow Framework, som vi använder för att ordna leverans- och flödesmätetal bredare, eftersom DORA mäter pipelinens mekanik väl men
inte säger något om vilken sorts värde som flödar genom den.

**[SPACE-ramverket](https://queue.acm.org/detail.cfm?id=3454124)**, framtaget av forskare vid Microsoft, GitHub och University of Victoria, balanserar rå
genomströmning mot utvecklarupplevelsen längs fem dimensioner: tillfredsställelse och välbefinnande, prestation, aktivitet, kommunikation och samarbete,
samt effektivitet och flöde. Del 3 går igenom det på djupet.

Utöver de två ramverken följer team lokala mätetal grupperade efter område: kod- och kvalitetsmätetal (del 4), produkt- och affärsmätetal (del 5)
samt mätetal för tillförlitlighet, drift och säkerhet (del 6). Del 7 tar upp skiftet som redan pågår: verktyg för generativ AI har gjort rå kodproduktion nästan gratis,
vilket innebär att vissa mätetal som branschen lutat sig mot i ett decennium inte längre betyder det de brukade betyda.

## Vem boken är för

De främsta läsarna är de som väljer vad ett team mäter och varför: utvecklingschefer, staff- och principal-ingenjörer, plattforms- och DevOps-team samt program- och produktchefer
som bygger en instrumentpanel eller ett poängkort för mätetal för första gången, eller lagar ett som har börjat förvränga beteenden. Sekundära läsare är alla ingenjörer som vill
förstå varför deras organisation följer det den följer, och hur man protesterar när ett mätetal missbrukas.

## Hur du läser den

Börja här och läs sedan [introduktionen](introduktion.md) för att se hur boken är uppbyggd, eller hoppa direkt till [innehållsförteckningen](innehållsförteckning.md).
Varje ämne står för sig självt: det anger först principen, ger konkreta rekommendationer, pekar ut hur det behandlade mätetalet manipuleras och slutar med en
mognadsmodell, diskussionsfrågor och referenser. Du behöver inte läsa boken från pärm till pärm för att ha nytta av den.
