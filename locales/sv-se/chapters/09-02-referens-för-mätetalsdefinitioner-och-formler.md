# 9.2 Referens för mätetalsdefinitioner och formler

Varje formel från boken, samlad på ett ställe. Varje post namnger kapitlet med den fulla diskussionen, inklusive dess manipulationsrisk och skyddsmätetal. Använd det här som en snabbuppslagning, inte en ersättning för kapitlet själv.

## Flödesmätetal (del 2)

| Mätetal | Formel | Kapitel |
| --- | --- | --- |
| Flödeshastighet | Antal flödesobjekt slutförda per tidsenhet | 2.3 |
| Flödesfördelning | (Slutförda objekt av en flödesobjekttyp) / (Totalt slutförda objekt) x 100 % | 2.3 |
| Flödestid | Tid från ett flödesobjekts ingång i värdeflödet till dess leverans | 2.4 |
| Flödesbelastning | Antal flödesobjekt för närvarande aktiva eller väntande i värdeflödet | 2.4 |
| Littles lag | Flödesbelastning (pågående arbete) = Ankomsttakt x Flödestid (cykeltid) | 2.4, 2.7 |
| Flödeseffektivitet | Aktiv arbetstid / Total förfluten tid x 100 % | 2.5 |
| Cykeltid | Summa av stadievaraktigheter: kodning + upptagning + granskning + test + driftsättning | 2.6 |
| Utnyttjande | Ankomsttakt / Servicetakt | 2.7 |
| Andel komplett och korrekt (%K/K) | (Enheter användbara nedströms utan omarbete) / (Totalt antal enheter) x 100 % | 2.8 |
| Rullande genomströmningsutbyte | %K/K för stadium 1 x %K/K för stadium 2 x ... x %K/K för stadium N | 2.8 |
| Takttid | Tillgänglig arbetstid / Kundbehov över den perioden | 2.8 |
| Tid till första granskning | Tid från pull request öppnad till första substantiella granskarsvar | 2.9 |
| Driftsättningsfrekvens | Antal framgångsrika produktionsdriftsättningar per tidsenhet | 2.10 |
| Ledtid för ändringar | Tid från första commit till framgångsrik produktionsdriftsättning (rapportera median och 90:e percentilen) | 2.10 |
| Ändringsfelfrekvens | (Driftsättningar som orsakar ett fel) / (Totalt antal driftsättningar) x 100 % | 2.10 |
| Misslyckad-driftsättning-återställningstid | Tid från felupptäckt till genuin tjänsteåterställning | 2.10 |

## Utvecklarupplevelse (del 3)

| Mätetal | Formel | Kapitel |
| --- | --- | --- |
| Fokustid | Antal och varaktighet av ostörda tvåtimmars-plus-block per vecka, från kalenderdata | 3.6 |
| Svarsfrekvens | (Enkätsvar mottagna) / (Enkätinbjudningar skickade) x 100 % | 3.7 |

## Kod och kvalitet (del 4)

| Mätetal | Formel | Kapitel |
| --- | --- | --- |
| Cyklomatisk komplexitet | Oberoende vägar genom kontrollflöde (kanter − noder + 2, enligt McCabe) | 4.1 |
| Testtäckning | (Rader/grenar exekverade av tester) / (Totalt antal rader/grenar) x 100 % | 4.2 |
| Mutantdödningsfrekvens | (Mutanter dödade av testsvit) / (Totalt antal introducerade mutanter) x 100 % | 4.2 |
| Kodchurn | Rader tillagda + modifierade + raderade per fil över ett tidsfönster | 4.3 |
| Hotspot-poäng | Churn x Komplexitet, rangordnad per fil | 4.3 |
| Skuldbärkostnad | Uppskattad löpande kostnad av att inte fixa en post (långsammare relaterat arbete, förhöjd defektrisk) | 4.5 |

## Produkt och verksamhet (del 5)

| Mätetal | Formel | Kapitel |
| --- | --- | --- |
| Läckt-defektfrekvens | (Allvarlighetsviktade läckta defekter) / (Enhet av leverans eller tid) | 5.1 |
| Initial adoption | (Användare som provade funktionen minst en gång) / (Målpublik) x 100 % | 5.2 |
| Upprätthållen adoption | (Användare som fortfarande använder funktionen efter N veckor) / (Användare som initialt provade den) x 100 % | 5.2 |
| Enhetskostnad | Total kostnad (personal + infrastruktur + verktyg) / Meningsfull enhet (kund, transaktion) | 5.4 |
| ROI | (Total förmån − Total ägandekostnad) / Total ägandekostnad, presenterad som ett intervall | 5.5 |

## Tillförlitlighet, drift, och säkerhet (del 6)

| Mätetal | Formel | Kapitel |
| --- | --- | --- |
| Felbudget | (1 − SLO-mål) x Tidsfönster (t.ex. 0,1 % av 30 dagar ≈ 43 minuter) | 6.1 |
| Felbudgetförbränningstakt | Förbrukad felbudget / Tilldelad felbudget, över ett givet fönster | 6.1 |
| MTTD | Tid från incidentstart till upptäckt | 6.2 |
| MTTA | Tid från incidentnotifiering till bekräftelse | 6.2 |
| MTTR (incident) | Tid från bekräftelse till genuin tjänsteåterställning | 6.2 |
| Jourlarmfördelning | Larm mottagna per individ, över ett rullande fönster (inte teamgenomsnitt) | 6.3 |
| Sårbarhetsåtgärdstid | Tid från upptäckt till genuin åtgärd, spårad efter allvarlighetsgrad | 6.4 |

## Anteckningar om att använda de här formlerna

- **Para alltid en hastighets- eller outputformel med dess skyddsmätetal** (kapitel 1.2): ändringsfelfrekvens med driftsättningsfrekvens och ledtid; läckt-defektfrekvens med leveranshastighet; felbudgetförbränning med driftsättningsaktivitet.
- **Använd medianer och percentiler, inte genomsnitt, för tidsbaserade formler** (kapitel 1.6) om inte en formel explicit kräver ett medelvärde.
- **Varje formel behöver ett dokumenterat källsystem och insamlingsmetod** (kapitel 1.5) vid sidan av dess matematiska definition; två team som beräknar samma formel från olika källor kommer inte producera jämförbara tal.
- **Allvarlighetsviktning visas inte explicit i varje formel ovan** men tillämpas närhelst "allvarlighetsviktad" förekommer; se det relevanta kapitlet för det fulla klassificeringsschemat.
