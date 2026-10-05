# 1.6 Statistisk litteracitet för ingenjörsmetriker

## Översikt och motivation

Du behöver ingen statistikexamen för att driva ett metrikprogram väl, men du behöver undvika ett litet antal specifika, vanliga misstag som gör annars välstyrda, välinstrumenterade mätetal aktivt vilseledande. Ett team kan göra allt rätt, namnge ett tydligt beslut, undvika Goodharts lag, vikta mot utfall, styra ägarskap, instrumentera tillförlitligt, och ändå dra fel slutsats eftersom det läste ett genomsnitt där det behövde en percentil, misstog brus för en trend, eller föll för en slump utklädd till en orsak. Det här ämnet är det minimala statistiska omdöme den här boken förutsätter att varje senare ämnes läsare redan har.

Kärnproblemet är att ingenjörsmätetal vanligtvis är brusiga, skeva, och har litet urval enligt formell statistiks mått. Ett enskilt teams veckovisa driftsättningsantal är inte en jämn klockformad kurva; det är en handfull datapunkter med ibland stora extremvärden (en stor utgivning, en incidentdriven återställningsvåg). Att tillämpa naiva intuitioner byggda för stora, välartade datamängder på den här sortens data producerar självsäkra, felaktiga slutsatser regelbundet. Att lära sig upptäcka när ett tal är för brusigt att lita på, när ett genomsnitt ljuger för dig, och när två saker som rör sig tillsammans inte säger något om kausalitet är inte valfri rigör, det är det som skiljer ett metrikprogram som lär en organisation något sant från ett som lär den något plausibelt klingande och falskt.

På stora företags och myndigheters skala förstärks statistiska misstag eftersom en vilseledande slutsats, en gång accepterad av ledningen, agerar på genom många team innan någon tänker på att omgranska den underliggande analysen. En statistiskt naiv jämförelse mellan två divisioner, eller mellan före och efter en större omorganisation, kan forma resursbeslut i åratal baserat på inget mer än brus eller en störvariabel ingen kontrollerade för. Det här ämnet finns för att göra det misslyckandet mindre troligt.

## Nyckelprinciper

- **En median eller percentil berättar vanligtvis mer än ett genomsnitt.** Ingenjörsdata är rutinmässigt skev av extremvärden genomsnitt absorberar och percentiler inte gör.
- **Små urval producerar brusiga tal.** En procentandel beräknad från en handfull händelser svänger vilt av anledningar som inte har något med verklig förändring att göra.
- **Regression mot medelvärdet lurar människor ständigt.** En ovanligt bra eller dålig avläsning tenderar att följas av en mer normal, med eller utan någon intervention.
- **Korrelation är inte kausalitet, och störvariabler finns överallt.** Två mätetal som rör sig tillsammans kan dela en dold tredje orsak istället för att ett driver det andra.
- **Ett [styrdiagram](https://en.wikipedia.org/wiki/Control_chart) slår en enskild före-och-efter-jämförelse.** Att se det normala variationsintervallet är det som låter dig skilja ett verkligt skifte från brus.

## Rekommendationer

### Använd median och percentil som standard för skev data

Ingenjörsmätetal baserade på tid, ledtid, incidentåterställningstid, svarslatens, är nästan alltid högerskeva: de flesta värden klustrar lågt, med en lång svans av ibland stora extremvärden. Ett genomsnitt draget av den svansen kan måla en bild som inget typiskt fall faktiskt liknar. Rapportera **medianen** (mittvärdet, där hälften av observationerna är över och hälften under) vid sidan av den **90:e** eller **95:e percentilen** (värdet under vilket 90 % eller 95 % av observationerna faller), som tillsammans visar både det typiska fallet och den värsta-fallets svans ett team faktiskt upplever. KPI-ämnet i systerboken `software-engineering-guide`, och varje leveransmätetalsämne i del 2 av den här boken, förutsätter den här vanan genomgående.

### Vet när ett urval är för litet att lita på

En ändringsfelfrekvens beräknad från tre driftsättningar under en lugn vecka är ingen meningsfull signal; ett enda misslyckande flyttar procentandelen från 0 % till 33 % över en natt av anledningar som kan ha inget med underliggande risk att göra. Innan du reagerar på ett procentbaserat mätetal, kontrollera det underliggande antalet. Som en praktisk tumregel, behandla en frekvens beräknad från färre än ungefär tjugo till trettio underliggande händelser som brusig och i behov av ett längre observationsfönster innan en slutsats dras, och säg det explicit på instrumentpanelen istället för att presentera en flyktig procentandel från litet urval med samma säkerhet som en stabil från stort urval.

### Vaka för regression mot medelvärdet innan du krediterar en intervention

Om ett teams sämsta vecka någonsin för incidenter följs av ledningens uppmärksamhet och en efterföljande förbättring är det frestande att kreditera interventionen. Ofta skulle en del av den förbättringen ha skett ändå, eftersom en ovanligt extrem avläsning tenderar att följas av en mer typisk rent som en statistisk artefakt, ett fenomen kallat **regression mot medelvärdet**. Skydda mot det här genom att jämföra mot en längre historisk baslinje snarare än den enskilda extrema datapunkten som utlöste uppmärksamheten, och genom att vara lämpligt ödmjuk om hur mycket av någon observerad förbättring som ska tillskrivas en specifik åtgärd.

### Leta efter störvariabler innan du hävdar att ett mätetal orsakade ett utfall

När två mätetal rör sig tillsammans, driftsättningsfrekvens som stiger tillsammans med kundnöjdhet, motstå reflexen att hävda att det ena orsakade det andra innan en **störvariabel** övervägs: en dold tredje faktor som driver båda. En ny funktionslansering kan oberoende öka både driftsättningsfrekvens (fler uppföljningsrättningar) och nöjdhet (funktionen själv), utan någon kausal länk mellan de två mätetalen alls. Innan en korrelation presenteras som bevis på kausalitet, fråga aktivt vad annat förändrades samtidigt som kunde förklara båda rörelserna.

### Använd ett styrdiagram, inte ett enskilt före-och-efter-ögonblick

Ett **styrdiagram** plottar ett mätetal över tid med dess normala variationsintervall visat explicit, typiskt som band runt ett centralt genomsnitt. Det här låter dig skilja ett genuint skifte, en datapunkt eller fortsatt körning utanför det normala intervallet, från vanligt brus som en enskild före-och-efter-jämförelse inte kan skilja åt. Innan du förklarar "talet förbättrades efter ändringen," plotta tillräckligt med historisk data för att se hur normal variation ser ut, och kontrollera om avläsningen efter ändringen faktiskt faller utanför den.

## Avvägningar: fördelar och nackdelar

| Tillvägagångssätt | Fördelar | Nackdelar |
| --- | --- | --- |
| Genomsnitt | Enkla, bekanta, lätta att beräkna | Snedvridna av extremvärden på skev ingenjörsdata |
| Median och percentiler | Robusta mot extremvärden, visar typiskt fall och svans tillsammans | Något mindre bekanta för icke-tekniska publiker |
| Enskild före-och-efter-jämförelse | Snabb, intuitiv, lätt att presentera | Sårbar för regression mot medelvärdet och för brus |
| Styrdiagram och längre baslinjer | Skiljer tillförlitligt verkliga skiften från brus | Kräver mer historisk data och mer förklaring till en icke-teknisk publik |

Den centrala spänningen är **enkelhet kontra rigör**. Genomsnitt och enskilda före-och-efter-jämförelser är enklare att beräkna och förklara, vilket är exakt varför de dominerar informell rapportering, men de är också de två teknikerna mest troliga att producera en självsäker, felaktig slutsats på den sortens brusiga, skeva data den här bokens mätetal genererar. Lös spänningen genom att som standard använda de mer rigorösa teknikerna, medianer, percentiler, och styrdiagram, för alla beslut med verklig konsekvens, och reservera de enklare teknikerna för lågrisk, utforskande titt där en felaktig läsning kostar lite.

## Frågor att diskutera med ditt team

1. **Vilka av våra instrumentpanelsrutor rapporterar ett genomsnitt där en median eller percentil skulle berätta en sannare historia?** Tidbaserade ingenjörsmätetal är nästan alltid skeva, och ett genomsnitt på skev data kan se fint ut medan det typiska fallet, eller den värsta-fallets svans, berättar en helt annan historia. Granska era tidbaserade rutor specifikt för den här substitueringen.

2. **Hur litet är det underliggande urvalet bakom våra procentbaserade mätetal, och behandlar vi ett mätetal från tio händelser med samma säkerhet som ett från tusen?** En flyktig frekvens från litet urval presenterad utan sitt underliggande antal bjuder in överreaktion på brus. Kontrollera era rutor för ändringsfelfrekvens och liknande procentandelar för det här glappet.

3. **Har vi någonsin krediterat en intervention för en förbättring regression mot medelvärdet skulle ha producerat ändå?** Det här är ett av de lättaste statistiska misstagen att göra och ett av de svåraste att märka i efterhand, eftersom interventionen och förbättringen verkligen hände i den ordningen. Titta tillbaka på en nyligen "vi fixade det"-historia och fråga ärligt om baslinjejämförelsen var lång nog för att utesluta det här.

4. **Var har vi antagit att ett mätetal orsakade ett annat utan att kontrollera för en störvariabel?** Två saker som rör sig tillsammans är vanligt; att det ena orsakar det andra är ett starkare påstående som behöver mer bevis. Välj en korrelation ert team för närvarande tror på och försök namnge en plausibel störvariabel som skulle förklara den utan någon kausal länk alls.

5. **Har vi tillräckligt med historisk data för att veta hur normal variation ser ut för våra viktigaste mätetal, eller jämför vi enskilda punkter?** Utan en känsla för normalt intervall ser varje enskild avläsning alarmerande eller lugnande ut beroende på humör snarare än bevis. Diskutera om ert mest bevakade mätetal någonsin har plottats som ett styrdiagram snarare än ett enskilt tal.

6. **Hur kommunicerar vi för närvarande osäkerhet till icke-tekniska intressenter, och antyder vår instrumentpanel mer precision än datan faktiskt stödjer?** Ett diagram utan indikation på normal variation eller urvalsstorlek kan få en ledningsgrupp att överreagera på brus eller, lika ofta, avfärda en verklig signal som brus. Diskutera hur er rapportering skulle kunna kommunicera det här ärligt utan att bli oläsbar.

## Sektorperspektiv

**Startup.** Små team genererar små urval nästan överallt, vilket betyder att varningen om litet urval i det här ämnet spelar roll ständigt. Motstå att dra starka slutsatser från en enskild dålig vecka eller en enskild bra; med bara en handfull datapunkter är det ärliga svaret på "är det här en trend" ofta "vi vet inte än."

**Litet företag.** Inbyggda instrumentpaneler från standardverktyg har ofta genomsnitt och enskilda periodjämförelser som standard eftersom de är enklast att beräkna och visa. Där verktyget tillåter det, byt till medianer för tidbaserade mätetal, och var skeptisk till varje "upp 40 % den här månaden"-rubrik beräknad från ett litet underliggande antal.

**Stort företag.** Statistiska misstag på den här skalan bakas in i resurs- och omorganiseringsbeslut som påverkar hundratals människor. Investera i analytiker eller inbäddade datapraktiker som kan bygga korrekta styrdiagram och kontrollera för störvariabler innan en jämförelse mellan affärsenheter eller före-och-efter en större ändring presenteras för ledningen som fastslaget faktum.

**Myndighet.** En statistiskt naiv jämförelse som matar en offentlig rapport eller en budgetmotivering kan ha oproportionerligt stora verkliga konsekvenser och bjuder in exakt den sortens granskning som exponerar slarvig analys offentligt. Tillämpa de mer rigorösa teknikerna, styrdiagram, dokumenterade urvalsstorlekar, kontroller för störvariabler, som stående praxis för allt som publiceras externt, inte bara som ett tillfälligt bästa försök.

## Exempel

**Stort företag.** Ett mjukvarubolags ledningsgrupp firade en 25-procentig förbättring i ändringsfelfrekvens månaden efter att en ny kodgranskningspolicy rullats ut, och krediterade policyn direkt. En närmare titt fann att "före"-månaden hade varit ovanligt dålig, driven av en enda teams misslyckade migrering, och det underliggande urvalet i båda månaderna var under trettio driftsättningar företagsövergripande. Ett styrdiagram med tolv månaders historik visade att den nya avläsningen var väl inom normal variation, inte ett genuint stegskifte, och policyns faktiska effekt, även om verklig, var mycket mindre än rubriktalet antydde.

**Myndighet.** En kollektivtrafikmyndighet rapporterade en stor år-över-år-förbättring i punktlighet för ett nyligen digitaliserat schemaläggningssystem, och jämförde ett enskilt "före"-kvartal med ett enskilt "efter"-kvartal. En oberoende granskning fann att "före"-kvartalet hade sammanfallit med en orelaterad byggstängning som hade dämpat prestationen över hela nätverket, och en längre baslinje visade att punktligheten redan hade återhämtat sig innan det nya systemet lanserades. Myndighetens reviderade rapport använde ett fullständigt flerårigt styrdiagram och tillskrev en mer blygsam, men mer försvarbar, förbättring till det nya systemet specifikt.

## Verksamhetsnytta: motiv, ROI och TCO

Avkastningen på statistisk litteracitet är undviken felriktning: en organisation som korrekt tillskriver en förbättring, eller korrekt erkänner brus som brus, spenderar sin nästa investering där den faktiskt hjälper snarare än att jaga en fantomeffekt. Detaljhandelsexemplet ovan är typiskt: ett företag som trodde att dess granskningspolicy ensam drev en 25-procentig förbättring kan underinvestera i andra verkliga bidragsgivare, eller överskatta policyns värde på ett sätt som vilseleder framtida beslut.

Den totala kostnaden för statistisk rigör är mestadels ett skifte i vana snarare än nytt verktyg: att välja en median framför ett genomsnitt, kontrollera en urvalsstorlek innan man reagerar, plotta en längre baslinje innan man förklarar seger. De här vanorna kostar lite att anta och förhindrar den mycket större, svårare-att-upptäcka kostnaden för beslut fattade på självsäkra, felaktiga slutsatser.

## Antimönster och fallgropar

- **Att rapportera ett genomsnitt på skev tidbaserad data:** döljer det typiska fallet och svansen bakom ett enda vilseledande tal.
- **Att reagera på en procentandel utan synlig urvalsstorlek:** behandlar brus från en handfull händelser som om det vore en stabil, meningsfull trend.
- **Att kreditera en intervention utan att utesluta regression mot medelvärdet:** ett vanligt, lättgjort, svårmärkt misstag.
- **Att hävda kausalitet från korrelation utan att överväga störvariabler:** överskattar vad datan faktiskt stödjer.
- **Att jämföra ett enskilt före-och-efter-ögonblick istället för att plotta en längre baslinje:** kan inte skilja ett verkligt skifte från vanlig variation.
- **Att antyda mer precision än datan stödjer i ledningsvänd rapportering:** bjuder in överreaktion på brus eller avfärdande av en verklig signal.

## Mognadsmodell

- **Nivå 1, Initiera:** Mätetal rapporteras som råa genomsnitt och enskilda före-och-efter-ögonblick utan uppmärksamhet på urvalsstorlek, skevhet, eller baslinjevariation.
- **Nivå 2, Utveckla:** Vissa analytiker tillämpar medianer eller percentiler informellt, men det finns ingen konsekvent organisatorisk praxis och störvariabler kontrolleras sällan.
- **Nivå 3, Standardisera:** Medianer och percentiler är standard för skeva tidbaserade mätetal; urvalsstorlekar visas vid sidan av procentbaserade mätetal genom hela organisationen.
- **Nivå 4, Hantera:** Styrdiagram med historiska baslinjer är standardpraxis för alla påståenden om ett genuint skifte; störvariabler övervägs aktivt innan kausala påståenden görs i rapportering.
- **Nivå 5, Orkestrera:** Statistisk rigör är inbyggd i själva verktygen, instrumentpaneler renderar percentiler och styrband som standard, och organisationen kan demonstrera att ett specifikt tidigare beslut korrigerades eftersom en statistiskt naiv läsning fångades innan den formade strategin.

## Diskussionsidéer

1. Vilka av våra nuvarande instrumentpanelsrubriker skulle se annorlunda ut om vi ersatte ett genomsnitt med en median?
2. Har vi någonsin ändrat ett beslut eftersom en procentandel visade sig baseras på ett mycket mindre urval än vi antog?
3. Vad är en nyligen "vi förbättrade det här mätetalet"-historia vi bör omgranska för regression mot medelvärdet?
4. Var kan två av våra mätetal vara korrelerade genom en dold tredje orsak snarare än att det ena driver det andra?
5. Visar våra viktigaste diagram ett normalt variationsintervall, eller bara en enskild trendlinje?

## Viktiga slutsatser

- Föredra **medianer och percentiler** framför genomsnitt för skeva, tidbaserade ingenjörsmätetal.
- Behandla en **procentandel från ett litet urval** som brusig, och säg det explicit istället för att reagera på den som en stabil trend.
- Vaka för **regression mot medelvärdet** innan du krediterar en intervention för en förbättring som följde en ovanligt dålig avläsning.
- **Korrelation är inte kausalitet**; leta aktivt efter störvariabler innan du gör ett kausalt påstående.
- Använd ett **styrdiagram med en verklig historisk baslinje**, inte ett enskilt före-och-efter-ögonblick, för att skilja ett genuint skifte från vanligt brus.

## Källor och vidare läsning

- *The Signal and the Noise*, av Nate Silver (att skilja verklig signal från brus i ofullständig data).
- *How to Measure Anything*, av Douglas W. Hubbard (statistiskt resonemang för organisatorisk mätning).
- *Understanding Variation: The Key to Managing Chaos*, av Donald J. Wheeler (styrdiagram och distinktionen mellan gemensam orsak och särskild orsak till variation).
- *Thinking, Fast and Slow*, av Daniel Kahneman (kognitiva snedvridningar inklusive regression mot medelvärdet och illusionen av kausal berättelse).
- *The Visual Display of Quantitative Information*, av Edward R. Tufte (ärlig, högintegritetspresentation av kvantitativ data).
