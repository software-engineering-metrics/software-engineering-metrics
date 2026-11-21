# 7.3 Metriekinflatie- en kwaliteitsverdunningsrisico's

## Overzicht en motivatie

Dit onderwerp benoemt, direct en specifiek, de twee faalmodi waarvoor onderwerp 7.1 waarschuwde dat het hele framework van dit boek tegen moet bewaken naarmate AI-geassisteerde ontwikkeling standaardpraktijk wordt: **metriekinflatie**, cijfers die stijgen zonder overeenkomstige echte waarde, en **kwaliteitsverdunning**, een geleidelijke erosie in codekwaliteit die het huidige vermogen van de sector om het te detecteren via bestaande review- en testpraktijken voorbijsteekt. Dit zijn geen nieuwe risicocategorieën die dit boek nog niet benoemd heeft, metriekinflatie is de Goodharts-wet van onderwerp 1.2 en de substitutiemanipulatie van onderwerp 1.2 toegepast op schaal, en kwaliteitsverdunning is het dekking-effectiviteitsgat van onderwerp 4.2 en de ontsnapte-defectzorg van onderwerp 5.1, beide geïntensiveerd. Wat nieuw is is de snelheid en schaal waarop generatieve AI beide faalmodi gelijktijdig kan produceren, sneller dan de bestaande beschermmetrieken van de meeste organisaties ontworpen waren om te vangen.

Het specifieke mechanisme waarmee dit onderwerp zich bezighoudt is subtiel: AI-gegenereerde code oogt heel vaak correct. Het volgt bekende idiomen, gebruikt plausibele variabelennamen, en passeert een oppervlakkige lezing veel betrouwbaarder dan echt onvoorzichtige mensgeschreven code typisch doet, precies omdat het getraind werd op een enorme corpus code die correct oogde. Dit maakt AI-gegenereerde defecten moeilijker voor een menselijke reviewer om te vangen via het soort patroonherkennende, ziet-dit-er-goed-uit-review dat veel mens-geïntroduceerde bugs vangt, omdat de AI-gegenereerde versie specifiek geoptimaliseerd is, in een statistische zin, om goed te ogen of het daadwerkelijk zo is of niet.

Voor grote teams groeien de risico's van dit onderwerp samen met schaal op een manier die grote bedrijven en overheidsorganisaties specifiek zou moeten verontrusten: metriekinflatie over dozijnen teams gelijktijdig kan een organisatiebreed vals signaal van verbeterde productiviteit produceren dat significante tijd en analyse vergt om te ontwarren, precies zoals het financiële-technologievoorbeeld van onderwerp 7.1 toonde. Kwaliteitsverdunning die detectiecapaciteit voorbijsteekt is nog serieuzer in gereguleerde, veiligheidskritieke, of publiek-vertrouwen-contexten, waar de kost van een ongedetecteerd defect dat productie bereikt gevolgen draagt ver voorbij de directe ingenieurszorg.

## Kernprincipes

- **Metriekinflatie en kwaliteitsverdunning zijn geïntensiveerde versies van risico's die dit boek al benoemde**, geen volledig nieuwe categorieën; de bestaande beschermmetrieken passen nog steeds toe, maar moeten harder werken.
- **De "oogt correct"-kwaliteit van AI-gegenereerde code maakt het specifiek moeilijker voor menselijke patroonherkennende review om subtiele defecten te vangen.** Dit is een onderscheiden risico van gewone menselijke fout.
- **De snelheid van deze verschuiving kan het vermogen van een organisatie voorbijsteken om zijn beschermmetrieken aan te passen**, een echt, tijdgebonden blootstellingsvenster creërend.
- **Bestaande kwaliteitsmetrieken (deel 4) blijven waardevol maar zouden herkalibratie nodig kunnen hebben**, geen vervanging, in het licht van dit nieuwe risicoprofiel.
- **Detectiecapaciteit zelf heeft doelbewuste investering nodig**, omdat de review- en testpraktijken die dit boek behandelt ontworpen werden voordat dit specifieke risico op deze schaal bestond.

## Aanbevelingen

### Herkalibreer wijzigingsfoutpercentage- en ontsnapte-defect-drempels voor AI-zwaar werk

Waar een team of codegebied AI-assistentie zwaar geadopteerd heeft, pas de ernst-gewogen tracking van onderwerp 2.4 en onderwerp 5.1 toe met verhoogde sensitiviteit, ten minste totdat je organisatie genoeg bewijs opgebouwd heeft (onderwerp 7.2) om te weten of de historische relatie tussen deze metrieken en echt risico nog onveranderd standhoudt voor AI-geassisteerd werk specifiek. Behandel deze herkalibratie als een tijdelijke, bewijs-verzamelende houding, geen permanente, ongeëxamineerde aanname in beide richtingen.

### Investeer specifiek in detectiecapaciteit die het "oogt correct"-probleem weerstaat

Traditionele codereview, die zwaar vertrouwt op een reviewer's patroonherkenning voor wat goed oogt, is specifiek verzwakt tegen plausibel-ogende maar subtiel incorrecte AI-gegenereerde code. Investeer overeenkomstig meer in detectiemethoden die niet vertrouwen op visuele patroonherkenning: **[mutatietesten](https://en.wikipedia.org/wiki/Mutation_testing)** (onderwerp 4.2), wat daadwerkelijk gedrag test in plaats van verschijning, en property-based- of invariant-based-testen, wat logische correctheid verifieert in plaats van oppervlakkige plausibiliteit, worden beide disproportioneel waardevoller specifiek vanwege deze verschuiving.

### Let op metriekinflatie over de hele leveringspijplijn, niet alleen bij het punt van codegeneratie

Metriekinflatie van AI-geassisteerde ontwikkeling is niet beperkt tot het codeerstadium; het kan propageren door de hele cyclustijdketen (onderwerp 2.6): een groter volume AI-gegenereerde pull requests kan pull-request-doorvoermetrieken opblazen (onderwerp 2.9) zelfs terwijl het nuttige signaal dat die metriek origineel ontworpen was te vangen, echte teamdoorvoer, vlak blijft of zelfs daalt eenmaal reviewlast en correctiekost correct verantwoord worden. Audit je volle metriekenset voor dit propagatiepatroon, niet alleen de meest voor de hand liggende, direct AI-aangrenzende metrieken.

### Bouw een expliciet, tijdgebonden herkalibratieplan in plaats van een permanente houding van argwaan

De verhoogde doorlichting die dit onderwerp aanbeveelt is passend gedurende een actieve periode van adoptie en onzekerheid, maar het zou geen permanente, ongeëxamineerde belasting op AI-geassisteerd werk onbeperkt moeten worden. Naarmate je organisatie echt bewijs opbouwt via de meetdiscipline van onderwerp 7.2, herzie drempels en beschermmetrieken gebaseerd op wat dat bewijs daadwerkelijk toont, verder verstrakkend waar risico bevestigd wordt, verslappend waar het dat niet is, in plaats van ofwel het risico volledig te negeren of elk stuk AI-geassisteerde code met permanente, ongedifferentieerde argwaan te behandelen ongeacht accumulerend bewijs.

### Communiceer dit risico transparant in plaats van het te behandelen als een reden om AI-adoptie te weerstaan

Kader de begeleiding van dit onderwerp als risicobeheer voor een echt waardevolle nieuwe capaciteit, niet als een argument tegen AI-geassisteerde ontwikkeling algemeen. Een organisatie die deze specifieke, benoemde risico's duidelijk communiceert en proportionele beschermmetrieken ertegen bouwt, precies zoals dit boek aanbeveelt voor elke andere metriek en techniek die het behandelt, adopteert AI-assistentie veiliger en houdbaarder dan een die ofwel het risico negeert of het behandelt als een reden voor blanket-weerstand tegen een echt nuttige set gereedschappen.

## Afwegingen: voor- en nadelen

| Aanpak | Voordelen | Nadelen |
| --- | --- | --- |
| Geen herkalibratie, AI-geassisteerd werk identiek behandelen aan mensgeschreven code | Simpel, geen procesverandering | Mist een specifiek, bewijs-gesuggereerd verhoogd risicoprofiel |
| Blanket, permanente verhoogde doorlichting van alle AI-geassisteerde code | Maximaliseert kortetermijnrisicovermindering | Onhoudbare belasting op een echt waardevolle capaciteit; negeert accumulerend bewijs |
| Tijdgebonden, bewijs-gedreven herkalibratie | Balanceert risicobeheer met houdbare adoptie | Vereist doorlopende meetdiscipline (onderwerp 7.2) om te weten wanneer doorlichting te verslappen |
| Investering in detectiemethoden resistent tegen "oogt correct"-defecten | Pakt het specifieke nieuwe risico direct en duurzaam aan | Vereist vooraf-investering in mutatie- en property-based-test-infrastructuur |

De centrale spanning is **voorzichtigheid versus adoptiesnelheid**. Excessieve, permanente voorzichtigheid verkwist veel van de echte waarde van AI-geassisteerde ontwikkeling; onvoldoende voorzichtigheid riskeert de metriekinflatie en kwaliteitsverdunning die dit onderwerp benoemt, potentieel op significante schaal voor detectie. Los de spanning op via de tijdgebonden, bewijs-gedreven aanpak die dit onderwerp aanbeveelt: verhoogde doorlichting nu, omlaag of omhoog gecalibreerd naarmate echt bewijs van de meetdiscipline van onderwerp 7.2 accumuleert, in plaats van ofwel een permanent blanket-beleid of een ongeëxamineerde aanname dat niets veranderd is.

## Vragen om met je team te bespreken

1. **Hebben we onze wijzigingsfoutpercentage- of ontsnapte-defect-drempels herkalibreerd voor AI-zwaar werk, of passen we pre-AI-era-drempels onveranderd toe?** Als onveranderd, bespreek of dat een doelbewuste, bewijs-gebaseerde beslissing reflecteert of simpelweg een afwezigheid van aandacht voor de vraag.

2. **Hebben we detectiemethoden, zoals mutatietesten, die niet vertrouwen op de visuele patroonherkenning van een reviewer, of is ons reviewproces volledig afhankelijk van menselijke ogen die beoordelen of code "goed oogt"?** Dit is de specifieke vulnerabiliteit die dit onderwerp identificeert; beoordeel je huidige detectiecapaciteit ertegen eerlijk.

3. **Heeft metriekinflatie gepropageerd voorbij het codeerstadium in onze pull-request- of deploymentmetrieken, en zouden we het momenteel merken als het had?** Loop je volle cyclustijdketen door, zoekend naar dit propagatiepatroon, niet alleen het meest voor de hand liggende oorsprongspunt.

4. **Is onze huidige verhoogde doorlichting van AI-geassisteerde code, indien enige, gebaseerd op geaccumuleerd bewijs, of is het een ongeëxamineerde, onbepaalde standaard die nooit herbezien is?** Bespreek welk bewijs zou moeten accumuleren voordat je huidige beschermmetrieken zou overwegen te verslappen of verder te verstrakken.

5. **Hoe communiceren we de risico's van dit onderwerp intern: als een reden voor voorzichtigheid en proportionele beschermmetrieken, of als een impliciet argument tegen AI-adoptie algemeen?** Wees eerlijk over hoe dit gesprek daadwerkelijk landt met je team, omdat een boodschap ontvangen als blanket-weerstand zelden de proportionele, bewijs-gebaseerde reactie produceert die dit onderwerp aanbeveelt.

6. **Hoe zou het eruitzien als onze organisatie, alleen na significante schaal, ontdekte dat zowel metriekinflatie als kwaliteitsverdunning gelijktijdig en ongedetecteerd gebeurd waren?** Dit concrete, enigszins ongemakkelijke scenario is de moeite waard om expliciet te benoemen als het specifieke falen waarvoor de beschermmetrieken van dit onderwerp gebouwd zijn om te voorkomen.

## Sectorperspectief

**Startup.** Snelle adoptie met beperkte reviewcapaciteit maakt de risico's van dit onderwerp bijzonder acuut voor een klein team; het "oogt correct"-detectieprobleem is moeilijker te vangen met minder, minder gespecialiseerde reviewers. Investeer vroeg in ten minste lichtgewicht mutatietesten op je meest kritieke codepaden, zelfs als uitgebreide dekking nog niet haalbaar is.

**Klein bedrijf.** Formele herkalibratieprocessen zijn waarschijnlijk onnodig op deze schaal, maar een simpel, expliciet bewustzijn dat AI-gegenereerde code een lichtjes scepticisch lezing verdient dan gewoon, specifiek omdat het geneigd is zelfverzekerder correct te ogen dan het daadwerkelijk zou kunnen zijn, kost niets en pakt de kernzorg van dit onderwerp direct aan.

**Groot bedrijf.** Metriekinflatie en kwaliteitsverdunning groeien beide significant samen op schaal, omdat een vals signaal of een ongedetecteerd kwaliteitsprobleem over dozijnen teams gelijktijdig veel consequentiëler en veel moeilijker te ontwarren is dan hetzelfde probleem op een enkel team. Investeer doelbewust in organisatiebrede detectiecapaciteitsupgrades (mutatietest-infrastructuur, property-based-test-adoptie) en in de tijdgebonden herkalibratiediscipline die dit onderwerp aanbeveelt, centraal bijgehouden.

**Overheid.** De gevolgen van ongedetecteerde kwaliteitsverdunning zijn bijzonder serieus in gereguleerde, veiligheidskritieke, of publiek-vertrouwen-contexten gewoon in overheidssystemen. Pas verhoogde, bewijs-gedreven doorlichting specifiek toe op AI-geassisteerde wijzigingen in hoog-gevolg-codepaden (de blootstelling-en-exploiteerbaarheidswegingslogica van onderwerp 6.4 past gelijkaardig hier toe), en wees voorbereid om aan een auditor of toezichthoudende instantie aan te tonen precies welke detectiecapaciteit bestaat tegen dit specifieke risico.

## Voorbeelden

**Groot bedrijf.** Het schadeafhandelingsingenieursteam van een verzekeringsbedrijf adopteerde AI-codeerassistentie breed en merkte, zes maanden later, een geleidelijke maar meetbare stijging in ontsnapte defecten specifiek in complexe conditionele logica, het soort code waar subtiel verkeerde randgevalafhandeling zowel het makkelijkst is voor AI-gereedschappen om plausibel te genereren als het moeilijkst voor een reviewer om te vangen via inspectie alleen. Een onderzoek bevestigde het "oogt correct"-patroon dat dit onderwerp beschrijft: de defecte code had consistent idiomatische, bekend-ogende patronen gebruikt die review passeerden zonder het soort doorlichting te triggeren dat een duidelijk ongewoon of onhandig stuk mensgeschreven code zou kunnen hebben ontvangen. De reactie van het team richtte mutatietesten specifiek op complexe conditionele logica bedrijfsbreed, een detectiemethode resistent tegen het oppervlakte-plausibiliteitsprobleem, en meette een significante vermindering in deze specifieke defectcategorie binnen twee kwartalen.

**Overheid.** Een belastingdienst die AI-geassisteerde ontwikkeling piloteerde voor een subset van zijn berekeningsmotor-onderhoudswerk bouwde de tijdgebonden herkalibratiediscipline die dit onderwerp aanbeveelt in vanaf het begin, een expliciete zes-maanden-bewijsverzamelingsperiode stellend met verhoogde reviewvereisten voor AI-geassisteerde wijzigingen aan berekeningslogica specifiek. Het verzamelde bewijs toonde geen statistisch betekenisvol verschil in defecttempo voor goed-begrensde, nauwe wijzigingen, maar bevestigde wel een verhoogd risico voor breder, architecturaal significantere AI-geassisteerde wijzigingen. Het resulterende beleid van het agentschap verslapte verhoogde doorlichting voor de nauwe-wijziging-categorie terwijl het die onderhield en zelfs versterkte voor architecturaal significante wijzigingen, een proportionele, bewijs-gebaseerde uitkomst die noch het "geen herkalibratie"-extreem noch het "blanket-permanente-doorlichting"-extreem zou hebben geproduceerd.

## Zakelijke onderbouwing: motivatie, ROI en TCO

Het rendement van doelbewust bewaken tegen metriekinflatie en kwaliteitsverdunning is precies het scenario vermijden dat het verzekeringsbedrijfvoorbeeld hierboven toont: een ongedetecteerd, geleidelijk samengroeiend kwaliteitsprobleem dat veel meer kost om achteraf te ontdekken en te herstellen dan de detectie-investering, mutatietest-infrastructuur specifiek gericht op de hoogste-risico-code, proactief zou hebben gekost.

De totale eigendomskosten omvatten de detectiecapaciteitsinvestering die dit onderwerp aanbeveelt en de doorlopende discipline van bewijs-gebaseerde herkalibratie in plaats van ofwel extreem, permanente argwaan of permanente onachtzaamheid. Die kost is bescheiden en tijdgebonden relatief aan het risico van een significant, geschaald kwaliteitsprobleem dat ongedetecteerd blijft specifiek omdat het, door de aard van hoe deze gereedschappen code genereren, geconstrueerd werd om correct te ogen voor de reviewprocessen die een organisatie al had.

## Antipatronen en valkuilen

- **Pre-AI-era-drempels en detectiemethoden onveranderd toepassen:** mist een specifiek, bewijs-gesuggereerd verhoogd risicoprofiel.
- **Volledig vertrouwen op menselijke patroonherkennende review voor AI-gegenereerde code:** specifiek vatbaar voor het "oogt correct"-probleem dat dit onderwerp identificeert.
- **Metriekinflatiepropagatie missen voorbij het punt van codegeneratie:** een vals signaal kan verspreiden door de hele leveringspijplijn ongedetecteerd.
- **Permanente, ongeëxamineerde blanket-doorlichting zonder bewijs-gebaseerde herkalibratie:** verkwist veel van de echte waarde van AI-geassisteerde ontwikkeling onhoudbaar.
- **De risico's van dit onderwerp communiceren als blanket-weerstand tegen AI-adoptie in plaats van proportioneel risicobeheer:** ondermijnt zowel veiligheid als adoptie.
- **Geen detectiecapaciteitsinvestering specifiek gericht op dit nieuwe risicoprofiel:** laat de organisatie afhankelijk van reviewmethoden die dit onderwerp heeft aangetoond specifiek verzwakt te zijn ertegen.

## Volwassenheidsmodel

- **Niveau 1, Initiëren:** Geen bewustzijn van metriekinflatie- of kwaliteitsverdunningsrisico specifiek aan AI-geassisteerde ontwikkeling; bestaande beschermmetrieken en detectiemethoden worden onveranderd toegepast.
- **Niveau 2, Ontwikkelen:** Enig bewustzijn bestaat, maar herkalibratie is ad hoc en detectiecapaciteitsinvestering specifiek voor dit risico is niet gemaakt.
- **Niveau 3, Standaardiseren:** Herkalibreerde drempels en detectiemethoden resistent tegen het "oogt correct"-probleem (mutatie- en property-based-testen) worden consistent toegepast op AI-geassisteerd werk.
- **Niveau 4, Beheren:** Een tijdgebonden, bewijs-gedreven herkalibratiediscipline past actief doorlichting aan gebaseerd op geaccumuleerde data, en metriekinflatiepropagatie wordt actief bewaakt over de volle pijplijn.
- **Niveau 5, Orkestreren:** De organisatie heeft een volwassen, proportionele, continu evoluerende risicobeheerhouding richting AI-geassisteerde ontwikkeling, transparant gecommuniceerd, die zijn waarde niet verkwist door excessieve voorzichtigheid noch de organisatie blootstelt aan ongedetecteerde kwaliteitsverdunning.

## Discussie-ideeën

1. Hebben we enig vroeg bewijs gezien van het "oogt correct"-defectpatroon in onze eigen AI-geassisteerde code?
2. Welke detectiemethode zou het meest direct het specifieke risico van dit onderwerp voor ons aanpakken?
3. Heeft metriekinflatie van AI-assistentie gepropageerd in enige van onze stroomafwaartse pijplijnmetrieken?
4. Is onze huidige doorlichting van AI-geassisteerde code bewijs-gebaseerd of een ongeëxamineerde standaard?
5. Hoe wordt de begeleiding van dit onderwerp daadwerkelijk ontvangen door ons team: als risicobeheer of als weerstand tegen AI-adoptie?

## Belangrijkste inzichten

- Metriekinflatie en kwaliteitsverdunning zijn **geïntensiveerde versies van risico's die dit boek al benoemt**, vereisend dat bestaande beschermmetrieken harder werken, geen volledig nieuwe frameworks.
- De tendens van AI-gegenereerde code om **"correct te ogen"** verzwakt specifiek traditionele, patroonherkennende menselijke codereview.
- Investeer in **detectiemethoden resistent tegen oppervlakteplausibiliteit**, vooral mutatie- en property-based-testen.
- Pas een **tijdgebonden, bewijs-gedreven herkalibratie**-houding toe, geen permanente blanket-argwaan of permanent ongeëxamineerd vertrouwen.
- **Communiceer dit risico als proportioneel risicobeheer**, niet als een argument tegen AI-adoptie, om zowel veiligheid als houdbaar gebruik te ondersteunen.

## Bronnen en verder lezen

- *Accelerate: The Science of Lean Software and DevOps*, door Nicole Forsgren, Jez Humble, en Gene Kim (de gekoppelde snelheid-en-stabiliteit-discipline die dit onderwerp toepast op een nieuwe risicocategorie).
- Jia, Yue, en Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): de detectiemethode waarvan dit onderwerp beargumenteert dat die disproportioneel waardevol wordt.
- GitHub's onderzoek naar AI pair programming en ontwikkelaarsproductiviteit (sectordata over AI-geassisteerde-ontwikkelingsuitkomsten en risico).
- *The Tyranny of Metrics*, door Jerry Z. Muller (metriekfixatie en manipulatierisico, direct relevant voor de metriekinflatiezorg die dit onderwerp benoemt).
