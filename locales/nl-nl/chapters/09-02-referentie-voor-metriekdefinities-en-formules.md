# 9.2 Referentie voor metriekdefinities en formules

Elke formule van het boek, verzameld op een plek. Elk item benoemt het hoofdstuk met de volledige bespreking, inclusief zijn manipulatierisico en beschermmetriek. Gebruik dit als een snelle naslag, geen vervanging voor het hoofdstuk zelf.

## Flowmetrieken (deel 2)

| Metriek | Formule | Hoofdstuk |
| --- | --- | --- |
| Flowsnelheid | Telling flowitems afgerond per tijdseenheid | 2.3 |
| Flowverdeling | (Afgeronde items van een flowitemtype) / (Totaal afgeronde items) x 100% | 2.3 |
| Flowtijd | Tijd van een flowitem dat de waardestroom binnenkomt tot zijn levering | 2.4 |
| Flowbelasting | Telling flowitems momenteel actief of wachtend in de waardestroom | 2.4 |
| Wet van Little | Flowbelasting (onderhanden werk) = Aankomsttempo x Flowtijd (cyclustijd) | 2.4, 2.7 |
| Flow-efficiëntie | Actieve werktijd / Totale verstreken tijd x 100% | 2.5 |
| Cyclustijd | Som van stadiumduren: coderen + opname + review + test + deploy | 2.6 |
| Bezettingsgraad | Aankomsttempo / Bedieningstempo | 2.7 |
| Percentage volledig en juist (%V/J) | (Eenheden bruikbaar stroomafwaarts zonder herwerk) / (Totaal eenheden) x 100% | 2.8 |
| Opgerolde doorvoeropbrengst | %V/J van stadium 1 x %V/J van stadium 2 x ... x %V/J van stadium N | 2.8 |
| Takttijd | Beschikbare werktijd / Klantvraag over die periode | 2.8 |
| Tijd tot eerste review | Tijd van pull request geopend tot eerste substantiële reviewerreactie | 2.9 |
| Deploymentfrequentie | Telling succesvolle productiedeployments per tijdseenheid | 2.10 |
| Doorlooptijd voor wijzigingen | Tijd van eerste commit tot succesvolle productiedeployment (rapporteer mediaan en 90e percentiel) | 2.10 |
| Wijzigingsfoutpercentage | (Deployments die een fout veroorzaken) / (Totaal deployments) x 100% | 2.10 |
| Herstelteltijd van mislukte deployments | Tijd van foutdetectie tot echt dienstherstel | 2.10 |

## Ontwikkelaarservaring (deel 3)

| Metriek | Formule | Hoofdstuk |
| --- | --- | --- |
| Focustijd | Telling en duur van ononderbroken twee-uur-plus-blokken per week, uit agendadata | 3.6 |
| Responstempo | (Ontvangen enquêteantwoorden) / (Verzonden enquête-uitnodigingen) x 100% | 3.7 |

## Code en kwaliteit (deel 4)

| Metriek | Formule | Hoofdstuk |
| --- | --- | --- |
| Cyclomatische complexiteit | Onafhankelijke paden door controleflow (randen − knopen + 2, volgens McCabe) | 4.1 |
| Testdekking | (Regels/vertakkingen uitgevoerd door tests) / (Totaal regels/vertakkingen) x 100% | 4.2 |
| Mutatiedoodtempo | (Mutanten gedood door testsuite) / (Totaal geïntroduceerde mutanten) x 100% | 4.2 |
| Codechurn | Regels toegevoegd + gewijzigd + verwijderd per bestand over een tijdsvenster | 4.3 |
| Hotspotscore | Churn x Complexiteit, gerangschikt per bestand | 4.3 |
| Schuld-draagkost | Geschatte doorlopende kost van een item niet fixen (langzamer gerelateerd werk, verhoogd defectrisico) | 4.5 |

## Product en bedrijf (deel 5)

| Metriek | Formule | Hoofdstuk |
| --- | --- | --- |
| Ontsnapte-defectfrekvens | (Ernst-gewogen ontsnapte defecten) / (Eenheid levering of tijd) | 5.1 |
| Initiële adoptie | (Gebruikers die de functie ten minste eenmaal probeerden) / (Doelpubliek) x 100% | 5.2 |
| Behouden adoptie | (Gebruikers die de functie nog gebruiken na N weken) / (Gebruikers die het initieel probeerden) x 100% | 5.2 |
| Eenheidskost | Totale kost (mensen + infrastructuur + tooling) / Betekenisvolle eenheid (klant, transactie) | 5.4 |
| ROI | (Totaal voordeel − totale eigendomskosten) / Totale eigendomskosten, gepresenteerd als een bereik | 5.5 |

## Betrouwbaarheid, operaties, en beveiliging (deel 6)

| Metriek | Formule | Hoofdstuk |
| --- | --- | --- |
| Felbudget | (1 − SLO-doel) x Tijdsvenster (bijv., 0,1% van 30 dagen ≈ 43 minuten) | 6.1 |
| Felbudget-verbruikstempo | Felbudget verbruikt / Felbudget toegewezen, over een gegeven venster | 6.1 |
| MTTD | Tijd van incidentbegin tot detectie | 6.2 |
| MTTA | Tijd van incidentnotificatie tot erkenning | 6.2 |
| MTTR (incident) | Tijd van erkenning tot echt dienstherstel | 6.2 |
| Wachtdienst-paging-verdeling | Pagingen ontvangen per individu, over een voortschrijdend venster (geen teamgemiddelde) | 6.3 |
| Vulnerabiliteit-hersteltijd | Tijd van ontdekking tot echt herstel, bijgehouden op ernst | 6.4 |

## Opmerkingen over het gebruik van deze formules

- **Koppel altijd een snelheids- of outputformule met zijn beschermmetriek** (hoofdstuk 1.2): wijzigingsfoutpercentage met deploymentfrequentie en doorlooptijd; ontsnapte-defectfrekvens met leveringssnelheid; felbudget-verbruik met deploymentactiviteit.
- **Gebruik medianen en percentielen, geen gemiddelden, voor tijdsgebaseerde formules** (hoofdstuk 1.6) tenzij een formule expliciet een gemiddelde vraagt.
- **Elke formule heeft een gedocumenteerd bronsysteem en verzamelmethode nodig** (hoofdstuk 1.5) naast zijn wiskundige definitie; twee teams die dezelfde formule berekenen uit verschillende bronnen zullen geen vergelijkbare cijfers produceren.
- **Ernstweging wordt niet expliciet getoond in elke formule hierboven** maar past toe waar "ernst-gewogen" verschijnt; zie het relevante hoofdstuk voor het volledige classificatieschema.
