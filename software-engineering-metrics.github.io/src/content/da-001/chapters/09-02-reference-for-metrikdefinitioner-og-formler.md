# 9.2 Reference for metrikdefinitioner og formler

Hver formel fra bogen samlet ét sted. Hver post angiver det emne, der har den fulde drøftelse, herunder dens manipulationsrisiko og værn. Brug den som et hurtigt opslag, ikke som erstatning for selve emnet.

## Flowmetrikker (del 2)

| Metrik | Formel | Emne |
| --- | --- | --- |
| Flowhastighed | Antal gennemførte flowelementer pr. tidsenhed | 2.3 |
| Flowfordeling | (Gennemførte elementer af én flowelementtype) / (Samlede gennemførte elementer) x 100 % | 2.3 |
| Flowtid | Tid fra et flowelement træder ind i værdistrømmen til dets levering | 2.4 |
| Flowbelastning | Antal flowelementer, der aktuelt er aktive eller venter i værdistrømmen | 2.4 |
| Little's lov | Flowbelastning (igangværende arbejde) = ankomstrate x flowtid (gennemløbstid) | 2.4, 2.7 |
| Floweffektivitet | Aktiv arbejdstid / samlet forløbet tid x 100 % | 2.5 |
| Gennemløbstid | Sum af trinvarigheder: kodning + afhentning + gennemgang + test + udrulning | 2.6 |
| Udnyttelse | Ankomstrate / servicerate | 2.7 |
| Procent komplet og nøjagtig (%C/A) | (Enheder, der kan bruges nedstrøms uden omarbejde) / (samlede enheder) x 100 % | 2.8 |
| Samlet gennemløbsudbytte | %C/A for trin 1 x %C/A for trin 2 x ... x %C/A for trin N | 2.8 |
| Taktid | Tilgængelig arbejdstid / kundeefterspørgsel i den periode | 2.8 |
| Tid til første gennemgang | Tid fra en pull request åbnes til første indholdsmæssige respons fra en reviewer | 2.9 |
| Udrulningsfrekvens | Antal vellykkede produktionsudrulninger pr. tidsenhed | 2.10 |
| Leveringstid for ændringer | Tid fra første commit til vellykket produktionsudrulning (rapportér median og 90. percentil) | 2.10 |
| Ændringsfejlrate | (Udrulninger, der forårsager en fejl) / (samlede udrulninger) x 100 % | 2.10 |
| Genopretningstid efter mislykket udrulning | Tid fra opdagelse af fejl til reel genoprettelse af service | 2.10 |

## Udvikleroplevelse (del 3)

| Metrik | Formel | Emne |
| --- | --- | --- |
| Fokustid | Antal og varighed af uafbrudte blokke på to timer eller mere pr. uge, ud fra kalenderdata | 3.6 |
| Svarprocent | (Modtagne undersøgelsessvar) / (udsendte invitationer til undersøgelsen) x 100 % | 3.7 |

## Kode og kvalitet (del 4)

| Metrik | Formel | Emne |
| --- | --- | --- |
| Cyklomatisk kompleksitet | Uafhængige stier gennem kontrolflowet (kanter − knuder + 2, ifølge McCabe) | 4.1 |
| Testdækning | (Linjer/grene udført af tests) / (samlede linjer/grene) x 100 % | 4.2 |
| Mutationsdrabsrate | (Mutanter dræbt af testsuiten) / (samlede indførte mutanter) x 100 % | 4.2 |
| Kodeomsætning | Tilføjede + ændrede + slettede linjer pr. fil over et tidsvindue | 4.3 |
| Hotspotscore | Omsætning x kompleksitet, rangeret pr. fil | 4.3 |
| Bæreomkostning for gæld | Estimerede løbende omkostninger ved ikke at rette et punkt (langsommere relateret arbejde, forhøjet fejlrisiko) | 4.5 |

## Produkt og forretning (del 5)

| Metrik | Formel | Emne |
| --- | --- | --- |
| Rate af undslupne fejl | (Alvorlighedsvægtede undslupne fejl) / (leveringsenhed eller tidsenhed) | 5.1 |
| Indledende adoption | (Brugere, der prøvede funktionen mindst én gang) / (målgruppe) x 100 % | 5.2 |
| Fastholdt adoption | (Brugere, der stadig bruger funktionen efter N uger) / (brugere, der oprindeligt prøvede den) x 100 % | 5.2 |
| Enhedsomkostning | Samlede omkostninger (mennesker + infrastruktur + værktøjer) / meningsfuld enhed (kunde, transaktion) | 5.4 |
| ROI | (Samlet fordel − samlede ejeromkostninger) / samlede ejeromkostninger, præsenteret som et interval | 5.5 |

## Pålidelighed, drift og sikkerhed (del 6)

| Metrik | Formel | Emne |
| --- | --- | --- |
| Fejlbudget | (1 − SLO-mål) x tidsvindue (f.eks. 0,1 % af 30 dage ≈ 43 minutter) | 6.1 |
| Forbrugsrate for fejlbudget | Forbrugt fejlbudget / tildelt fejlbudget, over et givet vindue | 6.1 |
| MTTD | Tid fra hændelsens start til opdagelse | 6.2 |
| MTTA | Tid fra hændelsens underretning til bekræftelse | 6.2 |
| MTTR (hændelse) | Tid fra bekræftelse til reel genoprettelse af service | 6.2 |
| Fordeling af vagtalarmer | Alarmer modtaget pr. person, over et rullende vindue (ikke teamgennemsnit) | 6.3 |
| Tid til afhjælpning af sårbarhed | Tid fra opdagelse til reel afhjælpning, fulgt efter alvorlighed | 6.4 |

## Noter om brug af disse formler

- **Par altid en hastigheds- eller outputformel med dens værn** (emne 1.2): ændringsfejlrate med udrulningsfrekvens og leveringstid; rate af undslupne fejl med leveringshastighed; forbrug af fejlbudget med udrulningsaktivitet.
- **Brug medianer og percentiler, ikke gennemsnit, til tidsbaserede formler** (emne 1.6), medmindre en formel eksplicit kalder på et gennemsnit.
- **Hver formel kræver et dokumenteret kildesystem og en dokumenteret indsamlingsmetode** (emne 1.5) ved siden af sin matematiske definition; to teams, der beregner den samme formel ud fra forskellige kilder, vil ikke frembringe sammenlignelige tal.
- **Alvorlighedsvægtning er ikke vist eksplicit i hver formel ovenfor**, men gælder overalt, hvor "alvorlighedsvægtet" optræder; se det relevante emne for den fulde klassificeringsordning.
