# 3.3 Prestatiemetrieken en uitkomstproxy's

## Overzicht en motivatie

**Prestatie**, de P in SPACE (onderwerp 3.1), is de dimensie het vaakst verward met activiteit, en die verwarring is precies wat dit onderwerp bestaat om te voorkomen. Prestatie vraagt of het werk van een ingenieur of een team daadwerkelijk een goede **[uitkomst](https://en.wikipedia.org/wiki/Outcome_(probability))** produceerde: een functie die uitgeleverd werd en werkte, een systeem dat betrouwbaar bleef, een wijziging die een bedrijfs- of gebruikersmetriek in de juiste richting bewoog. Activiteit (onderwerp 3.4) vraagt alleen hoeveel beweging optrad. Een team kan sterk actief en laag presterend zijn, constante kleine wijzigingen uitleverend die nooit een uitkomst bewegen, en het omgekeerde is even mogelijk: een team dat zelden uitlevert maar wiens wijzigingen betrouwbaar precies goed landen.

De moeilijkheid met deze dimensie is dat uitkomst vaak niet toe te schrijven is aan een enkele persoon of zelfs een enkel team; software-uitkomsten komen op uit samenwerking, uit beslissingen genomen maanden eerder door mensen die sindsdien naar andere projecten verhuisd zijn, uit marktomstandigheden die geen ingenieur controleert. SPACE-onderzoekers waren hierover expliciet: prestatie zou gemeten moeten worden op systeem- of teamniveau met meervoudige, convergerende signalen, niet gereduceerd tot een enkel cijfer en zeker niet toegeschreven aan een individuele ingenieur in isolatie. Dit onderwerp neemt die begeleiding serieus en behandelt individuele prestatietoeschrijving als een valkuil om actief te vermijden, geen kortere weg om te nemen wanneer handig.

Voor grote teams is prestatiemeting goed krijgen wat een metriekenprogramma dat daadwerkelijk uitkomsten verbetert scheidt van een die alleen zichtbare drukte beloont. Grote bedrijven die prestatie vergelijken over veel teams hebben signalen nodig die manipulatie via ruwe outputvolume weerstaan; overheidsorganisaties die technologie-investering rechtvaardigen voor toezichthoudende instanties moeten aantonen dat ingenieursinspanning echte uitkomsten produceerde, niet alleen geleverde artefacten, wat precies het uitkomsten-boven-output-principe van onderwerp 1.3 is toegepast op deze specifieke dimensie.

## Kernprincipes

- **Prestatie meet of werk een goede uitkomst produceerde, niet hoeveel werk optrad.** Dit is het kernonderscheid van de activiteitsdimensie.
- **Gebruik meervoudige, convergerende signalen, nooit een enkel prestatiecijfer.** Geen individuele proxy is betrouwbaar genoeg om alleen te staan.
- **Meet op team- of systeemniveau.** Individuele uitkomsttoeschrijving is meestal onbetrouwbaar en nodigt precies de manipulatie uit waar dit boek doorheen tegen waarschuwt.
- **Kwaliteit is deel van prestatie, geen afzonderlijke zorg.** Werk dat uitlevert maar iets anders breekt presteerde niet echt goed.
- **Een prestatiesignaal zonder een beslissing erbij is decoratie**, precies volgens het algemene principe van onderwerp 1.1 toegepast op deze dimensie.

## Aanbevelingen

### Combineer verscheidene convergerende signalen in plaats van een prestatiescore

Trek prestatiebewijs uit meervoudige bronnen: wijzigingsfoutpercentage (onderwerp 2.10) en ontsnapte-defectfrekvens (onderwerp 5.1) voor kwaliteit, deploymentuitkomsten gekoppeld aan daadwerkelijke functieadoptie (onderwerp 5.2) voor of het werk ertoe deed, en kwalitatieve peer- of managerbeoordeling van een team's bijdrage aan strategische doelen voor context die een pure metriek niet kan vangen. Geen enkele van deze is betrouwbaar alleen; samen, wanneer ze convergeren op dezelfde conclusie, zijn ze veel betrouwbaarder dan enig enkel cijfer zou kunnen zijn.

### Meet op teamniveau, weersta individuele toeschrijving

Software-uitkomsten zijn zelden het product van een persoon's werk alleen; ze komen op uit ontwerpbeslissingen, reviewfeedback, eerder werk door mensen die sindsdien het team verlaten kunnen hebben, en samenwerking over grenzen heen. Een uitkomst toeschrijven aan een enkele ingenieur is meestal een valse precisie die deze realiteit negeert en een sterke prikkel creëert voor individuen om krediet te beschermen in plaats van vrij samen te werken, precies het soort prikkelverstoring waar onderwerp 1.2 tegen waarschuwt.

### Vouw kwaliteit direct in de definitie van prestatie

Een functie die op tijd uitlevert maar een golf productie-incidenten veroorzaakt presteerde niet goed, zelfs al zou een naïeve alleen-output-blik het tellen als geleverd. Bouw wijzigingsfoutpercentage, ontsnapte-defectfrekvens, en post-release-incidentdata direct in hoe je prestatie beoordeelt, in plaats van kwaliteit te behandelen als een afzonderlijke, loskoppelde zorg alleen gemeten in deel 4 en deel 6 van dit boek.

### Gebruik prestatiedata om investering en procesbeslissingen te informeren, niet individuele rangschikkingen

Het productieve gebruik van prestatiedata is beslissen waar verder te investeren (een team dat consistent sterke uitkomsten levert verdient meer middelen en autonomie) en waar te onderzoeken (een team wiens werk consistent niet landt verdient hulp, geen schuld, volgens de diagnostische framing van onderwerp 1.1). Individuen of teams competitief tegen elkaar rangschikken op prestatiedata nodigt precies de manipulatie en moreel-schade uit waar dit boek tegen waarschuwt en produceert zelden betere uitkomsten dan het diagnostische gebruik doet.

### Wees eerlijk over toeschrijvingsgrenzen, vooral voor platform- en faciliterende teams

Teams die gedeelde infrastructuur, interne tools, of platformcapaciteiten bouwen (het platformingenieurs-onderwerp van het zusterboek `software-engineering-guide` behandelt dit direct) hebben vaak hun bijdrage aan uitkomsten verscheidene stappen verwijderd van enige enkele klantgerichte metriek. Meet de prestatie van deze teams door hun effect op de teams die ze faciliteren, adoptie van hun platform, vermindering in wrijving gerapporteerd door consumerende teams, in plaats van een slecht passende directe-uitkomst-metriek te dwingen op werk dat inherent indirect is.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Enkele prestatiescore per team | Simpel te presenteren en vergelijken | Valse precisie; verhult welk onderliggend signaal daadwerkelijk de score dreef |
| Meervoudige convergerende signalen | Betrouwbaarder, weerstaat enkele-metriek-manipulatie | Moeilijker samen te vatten in een cijfer; vereist meer context om te interpreteren |
| Teamniveau-prestatiemeting | Matcht hoe software-uitkomsten daadwerkelijk opkomen | Kan vragen over individuele bijdrage niet direct beantwoorden |
| Individueelniveau-prestatietoeschrijving | Voelt directer handelbaar voor beoordelingen | Meestal een valse precisie; sterk manipulatie- en krediet-beschermings-risico |

De centrale spanning is **precisie versus eerlijkheid**. Een enkel prestatiecijfer per team, of erger, per individu, is makkelijk te vergelijken en te rangschikken, maar die precisie is meestal vals, echte onzekerheid over toeschrijving en kwaliteit verhullend achter een schoon-ogend cijfer. Los de spanning op door een minder net, meervoudig-signaal-beeld te accepteren als het eerlijke een, en door druk te weerstaan van leiderschap of prestatiebeoordelingsprocessen om het terug te laten vallen in een enkele, vals-precieze score.

## Vragen om met je team te bespreken

1. **Combineert onze huidige prestatiemeting meervoudige convergerende signalen, of vertrouwt het op een enkel cijfer dat precieser aanvoelt dan het daadwerkelijk is?** Audit wat je momenteel een "prestatiemetriek" noemt en check hoeveel onafhankelijke, convergerende signalen daadwerkelijk erin voeren.

2. **Hebben we ooit de prestatie van een team of individu toegeschreven zonder rekening te houden met de samenwerkende, teamoverschrijdende aard van hoe de uitkomst daadwerkelijk gebeurde?** Kies een recent succesverhaal en traceer hoeveel ervan afhing van mensen, beslissingen, of eerder werk buiten het gecrediteerde team of individu.

3. **Omvat onze prestatiemeting kwaliteit, of alleen leveringssnelheid en outputvolume?** Een uitgeleverde functie die later significante productie-incidenten veroorzaakte zou niet moeten scoren als hoge prestatie; check of je huidige meting dit geval daadwerkelijk zou vangen.

4. **Hoe meten we de prestatie van platform- of faciliterende teams wiens bijdrage aan uitkomsten indirect is?** Als het eerlijke antwoord is "nou, dat doen we niet," is dat gat de moeite waard om te benoemen en direct aan te pakken in plaats van die teams effectief ongemeten of onrechtvaardig gemeten te laten tegen klantgerichte uitkomstmetrieken die niet bij hun werk passen.

5. **Is prestatiedata ooit gebruikt om individuen competitief tegen elkaar te rangschikken, formeel of informeel?** Deze drift, gelijkend op het tevredenheidsdata-risico in onderwerp 3.2, beschadigt zowel de eerlijkheid van de data als de bereidheid van het team om open samen te werken.

6. **Wanneer onze convergerende signalen het oneens zijn, hoge leveringssnelheid maar stijgend defecttempo, bijvoorbeeld, wat concluderen we, en behandelt ons proces die onenigheid goed?** Onenigheid tussen signalen is zelf waardevolle informatie; bespreek of je team het momenteel behandelt als ruis om te negeren of als een echte bevinding de moeite waard om te onderzoeken.

## Sectorperspectief

**Startup.** Prestatie is meestal direct zichtbaar: werkte de functie, adopteerden klanten het, bewoog de metriek. Formele meervoudig-signaal-meting is vaak onnodig op deze schaal; het risico is in plaats daarvan succes of falen te snel toeschrijven aan een persoon in een snelbewegend, sterk samenwerkend klein team waar krediet en schuld zelden bij slechts een individu horen.

**Klein bedrijf.** Combineer welke levering- en kwaliteitsdata je ook al hebt (onderwerp 2.10, onderwerp 5.1) met direct, eerlijk gesprek over of recent werk daadwerkelijk het bedrijf hielp, in plaats van formele meervoudig-signaal-instrumentatie te bouwen die je de capaciteit mist om te onderhouden.

**Groot bedrijf.** Hier betaalt de discipline van teamniveau-, meervoudig-signaal-meting zijn investering terug, omdat de druk om prestatie te reduceren tot een enkel vergelijkbaar cijfer over dozijnen teams hier het sterkst is, en de schade van valse precisie samengroeit over de resourcebeslissingen van de hele organisatie. Weersta die druk expliciet en bouw de meervoudig-signaal-zaak voor waarom het ertoe doet.

**Overheid.** Aantonen dat ingenieursinvestering echte uitkomsten produceerde, niet alleen geleverde artefacten, is vaak de centrale vraag die een toezichthoudende instantie stelt. Meervoudig-signaal-prestatiemeting, expliciet gekoppeld aan uitkomstmetrieken (onderwerp 5.3) in plaats van alleen-levering-proxy's, geeft een veel sterker, verdedigbaarder antwoord dan een activiteits- of leveringstelling alleen.

## Voorbeelden

**Groot bedrijf.** Het leiderschap van een retailtechnologiebedrijf had informeel ingenieursteams gerangschikt op afgeronde storypoints per sprint, dit behandelend als een prestatieproxy. Na een meervoudig-signaal-aanpak te adopteren, leveringsdata, wijzigingsfoutpercentage, en post-release-functieadoptie combinerend, vond leiderschap dat het team met het hoogste storypoint-afrondingstempo het laagste functieadoptietempo had in het bedrijf: ze leverden snel uit maar bouwden dingen die klanten niet gebruikten. De roadmapprioriteiten van dat team herverdelen gebaseerd op het vollere prestatiebeeld, in plaats van de misleidende enkele-cijfer-rangschikking, herrichtte significante ingenieurscapaciteit richting hoger-impact-werk binnen één kwartaal.

**Overheid.** Het ingenieursprogramma van een nationale belastingdienst moest aan een toezichthoudende commissie aantonen dat een grote systeeminvestering prestatie verbeterd had, niet alleen de gecontracteerde scope geleverd had. In plaats van storypoint- of mijlpaalafronding alleen te rapporteren, presenteerde het programma een convergerende set signalen: verminderd verwerkingsfoutpercentage, verminderde mediane verwerkingstijd, en verhoogd succesvol-zelfbedieningsafrondingstempo, allemaal gekoppeld aan de specifieke systeemcomponenten geleverd. De meervoudig-signaal-, uitkomst-gekoppelde presentatie voldeed aan de doorlichting van de commissie op een manier die een simpel "op schema geleverd"-rapport van een eerder programma het jaar ervoor niet had gedaan.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van prestatie meten via convergerende, uitkomst-gekoppelde signalen in plaats van een vals-precies enkel cijfer is betere resourcebeslissingen: een organisatie die kan zien welke teams' werk echt uitkomsten beweegt kan verder investeren waar het ertoe doet en onderzoeken waar het niet doet, in plaats van te belonen welk team dan ook het drukst oogt. Het retailvoorbeeld hierboven is typisch: een misleidende enkele-cijfer-rangschikking had investeringsaandacht weggeleid van waar het daadwerkelijk zou hebben geholpen.

De totale eigendomskosten zijn hoger dan een enkele-metriek-aanpak, omdat het vereist data te combineren uit meervoudige bronnen (levering, kwaliteit, uitkomst) en organisatorische druk te weerstaan om het beeld terug te laten vallen in een enkel vergelijkbaar cijfer. Die kost is de moeite waard omdat het alternatief, een vals-precieze enkele score, actief de resourcebeslissingen misleidt die prestatiedata bedoeld is te informeren.

## Antipatronen en valkuilen

- **Activiteit verwarren met prestatie:** de meest gewone fout die deze dimensie specifiek ontworpen is om te voorkomen.
- **Individuele prestatietoeschrijving voor samenwerkende, teamoverschrijdende uitkomsten:** meestal een valse precisie die samenwerking ontmoedigt.
- **Kwaliteit uitsluiten van de definitie van prestatie:** beloont werk dat uitlevert maar iets anders breekt.
- **Een directe-uitkomst-metriek dwingen op platform- of faciliterende teams:** meet het verkeerde ding voor werk dat inherent indirect is.
- **Meervoudige convergerende signalen terug laten vallen in een vals-precies cijfer onder organisatorische druk:** verliest de eerlijkheid die de meervoudig-signaal-aanpak ontworpen was om te leveren.
- **Prestatiedata gebruiken om individuen competitief te rangschikken:** beschadigt zowel dataeerlijkheid als teamsamenwerking.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Prestatie wordt verward met activiteit of outputvolume, gemeten met een enkel, ononderzocht cijfer.
- **Niveau 2, Ontwikkelen:** Sommige kwaliteitssignalen worden overwogen naast output, maar er is geen consistente meervoudig-signaal-aanpak en individuele toeschrijving gebeurt nog informeel.
- **Niveau 3, Standaardiseren:** Prestatie wordt gemeten op teamniveau met meervoudige, convergerende signalen inclusief kwaliteit, consistent organisatiebreed.
- **Niveau 4, Beheren:** Onenigheid tussen convergerende signalen wordt actief onderzocht; platform- en faciliterende teams hebben passend indirecte prestatiematen geschikt voor hun daadwerkelijke werk.
- **Niveau 5, Orkestreren:** Prestatiedata informeert direct resource- en investeringsbeslissingen, en de organisatie kan wijzen naar specifieke herverdelingsbeslissingen die een meervoudig-signaal-blik mogelijk maakte en een enkele-cijfer-blik gemist zou hebben.

## Discussie-ideeën

1. Welk enkel cijfer gebruiken we momenteel als een prestatieproxy dat we zouden moeten uitfaseren in het voordeel van een convergerende set?
2. Hebben we ooit een uitkomst gecrediteerd aan het verkeerde team of persoon omdat toeschrijving onduidelijk was?
3. Hoe meten we momenteel de prestatie van een platform- of faciliterend team?
4. Hoe zou het eruitzien als onze convergerende signalen het volgende kwartaal onenigheid vertoonden met elkaar?
5. Waar heeft een storypoint- of leveringstelling-rangschikking onze investeringsaandacht verkeerd gestuurd?

## Belangrijkste inzichten

- Prestatie meet of werk een **goede uitkomst** produceerde, niet hoeveel beweging optrad; verwar het niet met activiteit (onderwerp 3.4).
- Gebruik **meervoudige, convergerende signalen**, nooit een enkel prestatiecijfer, en wees achterdochtig over valse precisie.
- Meet op **team- of systeemniveau**; individuele uitkomsttoeschrijving is meestal onbetrouwbaar en beschadigt samenwerking.
- **Kwaliteit is deel van prestatie**, geen afzonderlijke, loskoppelde zorg.
- Geef platform- en faciliterende teams **passend indirecte** prestatiematen in plaats van een slecht passende directe-uitkomst-metriek te dwingen op hun werk.

## Bronnen en verder lezen

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck, en Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (uitkomst-gebaseerde prestatiemeting).
- *Team Topologies*, door Matthew Skelton en Manuel Pais (platform- en faciliterende-teamstructuren en hoe hun bijdrage te meten).
- *Measuring and Managing Performance in Organizations*, door Robert D. Austin (de risico's van vals-precieze prestatiemetrieken).
