# Mätetal för programvaruutveckling

En arbetsbok om att mäta **programvaruutveckling** väl: hur du väljer mätetal som speglar verkliga resultat snarare än bara aktivitet, de ramverk den här boken bygger på (Flow Framework, SPACE-ramverket, köteori och DORA-mätetalen), de mätetalsfamiljer som spelar roll och hur du driver ett mätetalsprogram som förbättrar team i stället för att övervaka dem.

Boken täcker leverans och flöde, utvecklarupplevelse, kod och kvalitet, produkt- och affärsresultat, tillförlitlighet och säkerhet samt hur generativ AI förändrar vad de här siffrorna betyder.

- **[Vad är mätetal för programvaruutveckling?](förtext/vad-är-mjukvaruutvecklingens-mätetal.md):** börja här
- **[Introduktion](förtext/introduktion.md):** vad den här boken är och hur du läser den
- **[Innehållsförteckning](förtext/innehållsförteckning.md):** den fullständiga listan över ämnen

## Hur du läser den här boken

Delar är heltal; ämnen är decimaltal. Ämne **N.0** introducerar varje del; **N.1, N.2, …** är dess ämnen. Del 9 samlar bilagorna (ordlista, formelreferens, checklistor, mallar, självbedömning av mognad, referenser och sakregister). Varje ämne om en mätetalsfamilj anger principer, rekommendationer, avvägningar, branschperspektiv, exempel (företag och offentlig sektor), affärsnytta (ROI/TCO), antimönster, en mognadsmodell, diskussionsfrågor och referenser, och pekar ut hur mätetalet manipuleras och vilket skydd som fångar det. Inför dem stegvis; inte alla på en gång.

## Innehållsförteckning

### Del 1: Mätningens grunder
- [1.0 Introduktion](ämnen/01-00-mätningens-grunder.md)
- [1.1 Varför mäta mjukvaruteknik](ämnen/01-01-varför-mäta-mjukvaruteknik.md)
- [1.2 Goodharts lag och mätetalens psykologi](ämnen/01-02-goodharts-lag-och-mätetalens-psykologi.md)
- [1.3 Utfall före output: att välja vad som ska mätas](ämnen/01-03-utfall-före-output-att-välja-vad-som-ska-mätas.md)
- [1.4 Styrning och ägarskap av metriker](ämnen/01-04-styrning-och-ägarskap-av-metriker.md)
- [1.5 Datakällor och instrumentering](ämnen/01-05-datakällor-och-instrumentering.md)
- [1.6 Statistisk litteracitet för ingenjörsmetriker](ämnen/01-06-statistisk-litteracitet-för-ingenjörsmetriker.md)

### Del 2: Flödesmätetal
- [2.0 Introduktion](ämnen/02-00-flödesmätetal.md)
- [2.1 Flow Framework](ämnen/02-01-flow-framework.md)
- [2.2 Flödesobjekt: funktioner, defekter, risker, och skuld](ämnen/02-02-flödesobjekt-funktioner-defekter-risker-och-skuld.md)
- [2.3 Flödeshastighet och flödesfördelning](ämnen/02-03-flödeshastighet-och-flödesfördelning.md)
- [2.4 Flödestid och flödesbelastning](ämnen/02-04-flödestid-och-flödesbelastning.md)
- [2.5 Flödeseffektivitet och pågående arbete](ämnen/02-05-flödeseffektivitet-och-pågående-arbete.md)
- [2.6 Cykeltid och dess komponenter](ämnen/02-06-cykeltid-och-dess-komponenter.md)
- [2.7 Könteori](ämnen/02-07-könteori.md)
- [2.8 Lean-värdeflödesmätetal](ämnen/02-08-lean-värdeflödesmätetal.md)
- [2.9 Mätetal för pull request och kodgranskning](ämnen/02-09-mätetal-för-pull-request-och-kodgranskning.md)
- [2.10 DORA-mätetalsramverket](ämnen/02-10-dora-mätetalsramverket.md)

### Del 3: Utvecklarupplevelse och SPACE-ramverket
- [3.0 Introduktion](ämnen/03-00-utvecklarupplevelse-och-space-ramverket.md)
- [3.1 SPACE-ramverket](ämnen/03-01-space-ramverket.md)
- [3.2 Mätetal för nöjdhet och välbefinnande](ämnen/03-02-mätetal-för-nöjdhet-och-välbefinnande.md)
- [3.3 Prestationsmätetal och utfallsrepresentanter](ämnen/03-03-prestationsmätetal-och-utfallsrepresentanter.md)
- [3.4 Aktivitetsmätetal och deras begränsningar](ämnen/03-04-aktivitetsmätetal-och-deras-begränsningar.md)
- [3.5 Mätetal för kommunikation och samarbete](ämnen/03-05-mätetal-för-kommunikation-och-samarbete.md)
- [3.6 Effektivitet och flöde: djuparbete och avbrott](ämnen/03-06-effektivitet-och-flöde.md)
- [3.7 Utvecklarupplevelseenkäter och DevEx-mätetal](ämnen/03-07-utvecklarupplevelseenkäter-och-devex-mätetal.md)

### Del 4: Kod- och kvalitetsmätetal
- [4.0 Introduktion](ämnen/04-00-kod-och-kvalitetsmätetal.md)
- [4.1 Kodkomplexitetsmätetal](ämnen/04-01-kodkomplexitetsmätetal.md)
- [4.2 Testtäckning och testeffektivitet](ämnen/04-02-testtäckning-och-testeffektivitet.md)
- [4.3 Kodchurn och hotspot-analys](ämnen/04-03-kodchurn-och-hotspot-analys.md)
- [4.4 Statisk analys och kodlukt-mätetal](ämnen/04-04-statisk-analys-och-kodlukt-mätetal.md)
- [4.5 Mätning av teknisk skuld](ämnen/04-05-mätning-av-teknisk-skuld.md)
- [4.6 Dokumentations- och kunskapsmätetal](ämnen/04-06-dokumentations-och-kunskapsmätetal.md)

### Del 5: Produkt- och affärsmätetal
- [5.0 Introduktion](ämnen/05-00-produkt-och-affärsmätetal.md)
- [5.1 Läckt-defektfrekvens och kvalitetsläckage](ämnen/05-01-läckt-defektfrekvens-och-kvalitetsläckage.md)
- [5.2 Funktionsadoption och användningsmätetal](ämnen/05-02-funktionsadoption-och-användningsmätetal.md)
- [5.3 Kund- och affärsutfallsmätetal](ämnen/05-03-kund-och-affärsutfallsmätetal.md)
- [5.4 Kostnad och enhetsekonomi för ingenjörsarbete](ämnen/05-04-kostnad-och-enhetsekonomi-för-ingenjörsarbete.md)
- [5.5 Avkastning på investering för ingenjörsinitiativ](ämnen/05-05-avkastning-på-investering-för-ingenjörsinitiativ.md)

### Del 6: Mätetal för tillförlitlighet, drift, och säkerhet
- [6.0 Introduktion](ämnen/06-00-mätetal-för-tillförlitlighet-drift-och-säkerhet.md)
- [6.1 Tjänstnivåindikatorer, -mål, och felbudgetar](ämnen/06-01-tjänstnivåindikatorer-mål-och-felbudgetar.md)
- [6.2 Incidentmätetal: upptäckt, respons, och återställning](ämnen/06-02-incidentmätetal.md)
- [6.3 Jour-, kapacitets-, och driftsbelastningsmätetal](ämnen/06-03-jour-kapacitets-och-driftsbelastningsmätetal.md)
- [6.4 Mätetal för säkerhet och sårbarhetshantering](ämnen/06-04-mätetal-för-säkerhet-och-sårbarhetshantering.md)

### Del 7: Mätetal i AI-eran
- [7.0 Introduktion](ämnen/07-00-mätetal-i-ai-eran.md)
- [7.1 Det generativa AI-paradigmskiftet](ämnen/07-01-det-generativa-ai-paradigmskiftet.md)
- [7.2 Att mäta AI-assisterad mjukvaruutveckling](ämnen/07-02-att-mäta-ai-assisterad-mjukvaruutveckling.md)
- [7.3 Mätetalsinflation och kvalitetsutspädningsrisker](ämnen/07-03-mätetalsinflation-och-kvalitetsutspädningsrisker.md)
- [7.4 Utfallstelemetri som den nya nordstjärnan](ämnen/07-04-utfallstelemetri-som-den-nya-nordstjärnan.md)

### Del 8: Att bygga ett mätetalsprogram
- [8.0 Introduktion](ämnen/08-00-att-bygga-ett-mätetalsprogram.md)
- [8.1 Att designa en ingenjörsmätetalsinstrumentpanel](ämnen/08-01-att-designa-en-ingenjörsmätetalsinstrumentpanel.md)
- [8.2 Verktygslandskap: att bygga kontra köpa](ämnen/08-02-verktygslandskap-att-bygga-kontra-köpa.md)
- [8.3 Att rulla ut mätetal utan att föda fruktan](ämnen/08-03-att-rulla-ut-mätetal-utan-att-föda-fruktan.md)
- [8.4 Mognadsmodell för ingenjörsmätetalsprogram](ämnen/08-04-mognadsmodell-för-ingenjörsmätetalsprogram.md)
- [8.5 En inkrementell antagandefärdplan](ämnen/08-05-en-inkrementell-antagandefärdplan.md)

### Del 9: Bilagor
- [9.0 Bilagor](ämnen/09-00-bilagor.md)
- [9.1 Glossarium](ämnen/09-01-glossarium.md)
- [9.2 Referens för mätetalsdefinitioner och formler](ämnen/09-02-referens-för-mätetalsdefinitioner-och-formler.md)
- [9.3 Checklistor](ämnen/09-03-checklistor.md)
- [9.4 Mallar](ämnen/09-04-mallar.md)
- [9.5 Mognadssjälvbedömning](ämnen/09-05-mognadssjälvbedömning.md)
- [9.6 Källor och vidare läsning](ämnen/09-06-källor-och-vidare-läsning.md)
- [9.7 Index](ämnen/09-07-index.md)

## Genomgående teman

[Goodharts lag](https://en.wikipedia.org/wiki/Goodhart%27s_law) styr varje ämne: ett mått som blir ett mål upphör att vara ett bra mått, så varje mätetalsfamilj här kommer med sin manipulationsväg och sitt skydd. Utfall väger tyngre än output och aktivitet genom hela boken. Rapporteringsskyldigheter för myndigheter och företag behandlas som indata till utformningen, inte som en eftertanke, och skiftet mot generativ AI behandlas som en anledning att undersöka vad de här mätetalen betyder på nytt, inte bara som en ny kolumn på instrumentpanelen.

## Bortom ämnena

- **[Exempel](exempel/översikt.md):** små, konkreta exempel som visar bokens idéer i bruk.
- **[Om det här projektet](projekt/översikt.md):** hur boken byggs, kontrolleras och publiceras.
- **[Bidra](bidra/översikt.md):** hur du hjälper till, och husstilens regler.
