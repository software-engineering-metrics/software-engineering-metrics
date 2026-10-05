# 2.1 Flow Framework

## Översikt och motivation

**Flow Framework** är en lednings- och strukturmodell skapad av Mik Kersten och publicerad i hans bok *Project to Product* från 2018. Den finns för att besvara en fråga rena pipelinemätetal inte kan: inte bara hur snabbt och hur säkert kod rör sig från commit till produktion, utan vilken sorts värde som överhuvudtaget flödar genom pipelinen, och om den blandningen återspeglar affärens faktiska strategi. Ramverket behandlar mjukvaruleverans som ett **[värdeflöde](https://en.wikipedia.org/wiki/Value_stream)**, den fullständiga sekvensen av aktiviteter som förvandlar en idé till värde en kund mottar, och lånar direkt från värdeflödeskartläggningstraditionen inom lean-tillverkning.

Den här boken använder Flow Framework som del 2:s organiserande struktur. Kapitel 2.2 introducerar dess fyra flödesobjekt, kapitel 2.3 och 2.4 introducerar dess fem flödesmätetal, kapitel 2.8 spårar de mätetalen tillbaka till deras ursprung i klassisk Lean-värdeflödeskartläggning, och kapitel 2.10 täcker DORA-mätetalen som ett smalare, pipelinefokuserat referensramverk den här delen inte längre leder med. Det är ett medvetet val, inte ett avfärdande av DORA:s forskning. DORA mäter systemgenomströmning och stabilitet med genuin statistisk rigör, men den tiger om frågan en affärsledare faktiskt bryr sig mest om: givet allt ingenjörsorganisationen levererade det här kvartalet, hur mycket av det var nytt kundvärde, och hur mycket konsumerades tyst av att fixa defekter, hantera risk, eller betala av skuld. Flow Framework finns specifikt för att göra den blandningen synlig.

För stora team är den här distinktionen inte akademisk. En plattformsorganisation som driver dussintals värdeflöden kan ha utmärkta DORA-tal, snabba, frekventa, stabila driftsättningar, medan dess faktiska produktoutput tyst har drivit mot nästan rent underhållsarbete, ett mönster osynligt för en instrumentpanel som bara mäter pipelinemekanik. Stora företag och myndigheter, som måste motivera ingenjörsinvestering för intressenter som tänker i affärstermer, inte pipelinetermer, behöver ett vokabulär som kopplar leveransaktivitet till strategisk avsikt. Det är vad det här ramverket tillhandahåller.

## Nyckelprinciper

- **Ett värdeflöde är mätningens enhet, inte ett team eller en pipeline.** Det sträcker sig från ett kund- eller affärsbehov till det levererade utfallet, och korsar vilka teamgränser arbetet faktiskt korsar.
- **Flödesobjekt gör "vad:et" synligt, inte bara "hur snabbt."** Kapitel 2.2:s fyra kategorier, funktioner, defekter, risker, och skuld, förvandlar ett implicit prioriteringsbeslut till ett explicit, mätbart ett.
- **Kapacitetsallokering över flödesobjekt är nollsumma.** Mer kapacitet spenderad på en objekttyp är mindre kapacitet tillgänglig för de andra; ramverket gör den avvägningen synlig istället för att lämna den implicit.
- **De fem flödesmätetalen besvarar affärsfrågor, inte bara ingenjörsfrågor.** De är designade för att presenteras för en icke-teknisk intressent, inte hållas inom ett ingenjörsteam.
- **Värdeflödeshantering bör vara kontinuerlig, inte en engångskartläggningsövning.** Statiska värdeflödeskartor blir föråldrade; ramverket är byggt för att instrumenteras från verktygen team redan använder.

## Rekommendationer

### Kartlägg ert värdeflöde innan ni instrumenterar något

Innan ni antar något flödesmätetal, gå igenom den faktiska vägen ett arbete tar från att ett affärsbehov identifieras till att en kund mottar värde, och namnge varje steg och varje överlämning mellan team. Det här är den klassiska [värdeflödeskartläggningsövningen](https://en.wikipedia.org/wiki/Value_stream_mapping), anpassad från lean-tillverkning, och att hoppa över den är den vanligaste anledningen till att en Flow Framework-adoption producerar tal ingen litar på: mätetal beräknade mot en ogranskad, informellt förstådd process matchar sällan vad som faktiskt händer.

### Koppla flödesmätetal till verktygen era team redan använder

Flow Framework är byggt för kontinuerlig, automatiserad värdeflödeshantering, inte en periodisk manuell kartläggningsövning. Integrera flödesobjektspårning direkt i verktygen arbetet redan flödar genom, Jira, Azure DevOps, GitHub, snarare än att bygga ett parallellt spårningssystem team måste uppdatera för hand. Ett flödesobjekts tillstånd bör uppdatera sig själv i takt med att det underliggande ärendet eller pull requesten rör sig, samma instrumentering-framför-självrapportering-disciplin kapitel 1.5 rekommenderar för varje mätetal i den här boken.

### Presentera flödesfördelning direkt för affärsintressenter, inte bara ingenjörsledning

Den enskilt största missade möjligheten med det här ramverket är att behandla det som ett internt ingenjörsverktyg. Flödesfördelning, andelen arbete som går till funktioner kontra defekter, risk, och skuld (kapitel 2.3), är specifikt designad för att vara en konversation ni har med produkt- och affärsledning, eftersom den gör ett implicit prioriteringsbeslut, hur mycket kapacitet som går till nytt värde kontra att hålla ljusen tända, explicit och förhandlingsbart istället för antaget.

### Behandla de fyra flödesobjekten som en genuin taxonomi, inte en formalitet

Kräv att varje arbetsenhet klassificeras in i exakt en av de fyra flödesobjekttyperna vid intag, inte retroaktivt. En klassificering tillämpad i efterhand, eller tillämpad löst eftersom "det är i princip en funktion," eroderar hela värdet av taxonomin, eftersom hela poängen är ett ärligt, konsekvent register över var kapacitet faktiskt tog vägen.

### Revidera er värdeflödeskarta när organisationen förändras, inte enligt ett fast schema

En värdeflödeskarta blir föråldrad i det ögonblick teamgränser, verktyg, eller själva produkten förändras meningsfullt, inte enligt någon godtycklig årlig cadens. Behandla en omorganisation, en större verktygsmigrering, eller en betydande produktomsvängning som en utlösare att gå igenom värdeflödet igen, eftersom ett flödesmätetal beräknat mot en föråldrad karta tyst mäter fel sak.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Bara pipelinemätetal (DORA, kapitel 2.10) | Enkelt, väl validerat, billigt att instrumentera från befintlig CI/CD-data | Tiger om vilken sorts värde som levereras |
| Fullständig Flow Framework-adoption | Kopplar leverans till affärsstrategi; gör värdeblandningen synlig och förhandlingsbar | Kräver en ärlig värdeflödeskarta och konsekvent disciplin för flödesobjektsklassificering |
| Statisk, engångs värdeflödeskartläggning | Billigt, snabbt att köra som en workshopövning | Blir föråldrad snabbt; producerar ett ögonblick, inte ett levande mätetal |
| Kontinuerlig, verktygsintegrerad värdeflödeshantering | Levande, alltid aktuell data; skalar över många värdeflöden | Kräver verkligt verktygsintegrationsarbete i förväg |

Den centrala spänningen är **affärsläsbarhet kontra instrumenteringsinsats**. Pipelinemätetal är billiga eftersom pipelinen redan producerar datan; värdeflödesmätetal kräver en ärlig karta av hela processen och en disciplinerad, intagstids-klassificeringsvana pipelinemätetal aldrig krävde. Lös spänningen genom att börja med ett värdeflöde, inte hela organisationen på en gång, kartlägga det ordentligt, och först då integrera flödesobjektspårning i befintliga verktyg, snarare än att försöka ett big-bang-utrullning över varje team samtidigt.

## Frågor att diskutera med ditt team

1. **Skulle vi kunna rita en korrekt värdeflödeskarta för vår viktigaste produkt just nu, eller skulle vi gissa på flera av överlämningarna?** De flesta organisationer har aldrig faktiskt gått igenom den här vägen från början till slut. Försök övningen ärligt och notera varje plats där gruppen är oense om vad som faktiskt händer, eftersom den oenigheten i sig är diagnostisk.

2. **Om vi klassificerade allt vårt team levererade förra kvartalet i funktioner, defekter, risk, och skuld, skulle resultatet överraska vår produktledning?** De flesta team har aldrig gjort den här uppdelningen explicit, och svaret avslöjar ofta en underhållsbörda eller ett skuldproblem som tidigare varit osynligt i ett enkelt "levererade storypoäng"-antal.

3. **Har vi ett genuint, verktygsintegrerat sätt att spåra flödesobjekt, eller skulle det här kräva att någon manuellt klassificerar och omklassificerar arbete för hand?** Ett manuellt system förfaller snabbt under verklig arbetsbelastning; ett verktygsintegrerat gör inte det. Bedöm ärligt vilket ni faktiskt är beredda att upprätthålla.

4. **När ändrades vår värdeflödeskarta senast, och har vi uppdaterat våra mätetal för att återspegla det?** Omorganisationer och verktygsmigreringar ogiltigförklarar tyst en värdeflödeskarta, och få organisationer kommer ihåg att gå igenom den när det händer.

5. **Presenteras våra flödesmätetal någonsin direkt för affärs- eller produktintressenter, eller stannar de inom ingenjörsavdelningen?** Ramverkets största fördel över bara pipelinemätetal är exakt den här konversationen, och att hoppa över den förverkar det mesta av ramverkets värde.

6. **Vad skulle krävas för att någon ska manipulera vår flödesobjektsklassificering utan att göra något oärligt på papper?** Gå igenom hur ett team under leveranspress kan tyst omdöpa skuld- eller riskarbete till funktioner för att se mer produktivt ut, och diskutera om ni för närvarande skulle märka det.

## Sektorperspektiv

**Startup.** En fullständig värdeflödeskarta är vanligtvis överdrivet för ett femmansteam där alla redan kan hela processen utantill. Den användbara vanan på den här skalan är helt enkelt att namnge de fyra flödesobjekttyperna högt i planeringskonversationer, så att skuld- och riskarbete inte tyst försvinner ur sikte i det ögonblick en funktionsdeadline hotar.

**Litet företag.** Anta flödesobjektsklassificering inom vilket lättviktigt spårningsverktyg ni redan använder, en märkt kolumn eller ett anpassat fält, snarare än någon dedikerad produkt för värdeflödeshantering. Disciplinen i konsekvent klassificering betyder mycket mer än sofistikeringen av verktyget bakom den.

**Stort företag.** Det här är där ramverket tjänar sin plats, eftersom en stor organisation som driver dussintals värdeflöden över många produktlinjer inte har något annat tillförlitligt sätt att se, på ett ställe, hur ingenjörskapacitet faktiskt allokeras mellan funktioner, defekter, risk, och skuld. Investera i verktygsintegrationen; det manuella alternativet överlever inte kontakt med verklig skala.

**Myndighet.** Flödesfördelning ger en offentlig sektors ingenjörsorganisation ett försvarbart, affärsläsbart svar på "varför levereras inte mer ny funktionalitet," när det ärliga svaret är en växande andel kapacitet som går till säkerhetsrättning eller äldre skuld. Att göra den avvägningen synlig och explicit, snarare än att tyst absorbera trycket, är ofta det enskilt mest användbara det här ramverket erbjuder en myndighets teknikledare.

## Exempel

**Stort företag.** En stor försäkringskoncerns skadeplattformsorganisation trodde den primärt levererade nya funktioner, baserat på sina sprinthastighetsrapporter. En första värdeflödeskartläggnings- och flödesobjektsklassificeringsövning avslöjade att skuld- och riskarbete, mycket av det odokumenterad teknisk skuld från ett decennium gammalt kärnsystem, faktiskt konsumerade nära hälften av total ingenjörskapacitet, ett faktum ingen tidigare rapportering hade visat eftersom det arbetet alltid hade vikts in i generiska "ingenjörsuppgifter." Att presentera den här uppdelningen för ledningsgruppen säkrade en dedikerad skuldreduceringsbudget för första gången i plattformens historia, snarare än att skuldarbete fortsatte att tyst konkurrera mot varje funktionsbegäran.

**Myndighet.** En nationell skattemyndighets digitala tjänsteavdelning använde värdeflödeskartläggning för att diagnostisera varför en flaggskeppsfunktion för medborgare hade varit "pågående" i över ett år trots stadig sprintavslutning. Kartan avslöjade att värdeflödet faktiskt sträckte sig över fem separata team med tre överlämningar organisationsschemat inte återspeglade, och flödesobjektsklassificering visade att funktionens faktiska ingenjörstid var en liten bråkdel av dess totala flödestid, resten konsumerad av överlämningsfördröjningar mellan team ingen enskilt teams egna mätetal kunde se. Avdelningen omstrukturerade kring värdeflödet snarare än organisationsschemat för den specifika produktlinjen, vilket skar flödestiden avsevärt inom två kvartal.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på att anta Flow Framework är ett försvarbart, affärsläsbart svar på en fråga pipelinemätetal inte kan besvara: allokeras ingenjörskapacitet på det sätt ledningen tror den är. Försäkringsexemplet ovan, som visade nästan hälften av kapaciteten gå till tidigare osynligt skuldarbete, är ett vanligt mönster när en organisation faktiskt klassificerar sitt arbete ärligt, och den synligheten låser rutinmässigt upp investering en vag "vi behöver mer tid för teknisk skuld"-begäran aldrig kunde.

Den totala ägandekostnaden är koncentrerad till två platser: den initiala värdeflödeskartläggningsövningen, som kräver verklig faciliteringstid att göra ärligt, och verktygsintegrationen som behövs för att hålla flödesobjektsdata aktuell utan manuellt underhåll. Båda kostnaderna är engångs eller lågunderhåll när de väl är gjorda väl, vilket gör ramverket betydligt billigare att upprätthålla än det är att anta.

## Antimönster och fallgropar

- **Att behandla värdeflödeskartläggning som en engångsworkshop, aldrig reviderad:** kartan blir föråldrad i det ögonblick organisationen förändras, och ett mätetal beräknat mot en föråldrad karta mäter fel sak.
- **Att bygga ett parallellt, manuellt underhållet flödesobjektsspårningssystem:** förfaller snabbt under verklig arbetsbelastning; integrera i befintliga verktyg istället.
- **Att klassificera flödesobjekt retroaktivt snarare än vid intag:** manipuleringsvektorn i hjärtat av det här kapitlet. Under leveranspress kan ett team tyst omdöpa skuld- eller riskarbete till funktioner i efterhand för att se mer produktivt ut för intressenter som bara ser flödesfördelningsdiagrammet, utan att någon någonsin fattar ett explicit, synligt beslut att göra det. Skyddet är att kräva klassificering vid intag, innan utfallet är känt, och att periodiskt granska ett urval av klassificerade objekt mot vad den underliggande ändringen faktiskt gjorde, samma granskningsdisciplin kapitel 1.2 ber om för varje mätetal i den här boken.
- **Att hålla flödesmätetal enbart inom ingenjörsavdelningen:** förverkar ramverkets huvudfördel, ett delat vokabulär med affärsintressenter.
- **Att kartlägga organisationsschemat istället för det faktiska värdeflödet:** döljer överlämningar mellan team som ofta är den största källan till fördröjning.
- **Att anta ramverket organisationsövergripande innan det validerats på ett värdeflöde:** riskerar en stor investering i mätetal ingen litar på eftersom den underliggande kartan aldrig bekräftades korrekt.

## Mognadsmodell

- **Nivå 1, Initiera:** Ingen värdeflödeskarta existerar; arbete spåras som generiska ärenden utan flödesobjektsklassificering.
- **Nivå 2, Utveckla:** Ett värdeflöde har kartlagts och flödesobjekt klassificeras informellt, men spårning är manuell och tillämpas inkonsekvent.
- **Nivå 3, Standardisera:** Flödesobjektsklassificering är integrerad i befintliga verktyg och tillämpas konsekvent vid intag över större värdeflöden.
- **Nivå 4, Hantera:** Flödesfördelning granskas regelbundet med affärsintressenter, och värdeflödeskartor hålls aktivt aktuella när organisationen förändras.
- **Nivå 5, Orkestrera:** Organisationen allokerar ingenjörsinvestering medvetet över värdeflöden med hjälp av flödesdata, och kan peka på specifika strategiska beslut, en skuldreduceringsbudget, en teamomstrukturering, fattade eftersom ramverket gjorde en tidigare osynlig avvägning synlig.

## Diskussionsidéer

1. Skulle vi kunna rita en korrekt värdeflödeskarta för vår flaggskeppsprodukt idag, utan att gissa?
2. Vilken procentandel av förra kvartalets kapacitet skulle en ärlig flödesobjektsklassificering avslöja gick till skuld och risk, kontra funktioner?
3. Når våra flödesmätetal för närvarande affärsintressenter, eller stannar de inom ingenjörsavdelningen?
4. Vad är den största överlämningen mellan team i vårt värdeflöde som vårt organisationsschema inte återspeglar?

## Viktiga slutsatser

- **Flow Framework**, från Mik Kerstens *Project to Product*, mäter vilken sorts värde som flödar genom en leveranspipeline, inte bara hur snabbt pipelinen själv körs.
- Ett **värdeflöde**, inte ett team eller en pipeline, är ramverkets mätningsenhet, och att kartlägga det ärligt kommer innan allt instrumenteras.
- **Flödesobjektsklassificering vid intag, inte i efterhand**, är skyddet mot det här kapitlets centrala manipuleringsvektor: att tyst omdöpa skuld- eller riskarbete till funktioner för att se mer produktivt ut.
- **Koppla flödesmätetal till befintliga verktyg**, Jira, Azure DevOps, GitHub, snarare än ett parallellt manuellt spårningssystem som inte kommer överleva verklig arbetsbelastning.
- Presentera flödesdata **direkt för affärsintressenter**; den konversationen, inte en intern ingenjörsinstrumentpanel, är ramverkets huvudfördel över bara pipelinemätetal.

## Källor och vidare läsning

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
