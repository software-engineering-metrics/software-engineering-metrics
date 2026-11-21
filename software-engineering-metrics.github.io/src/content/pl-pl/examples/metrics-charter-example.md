# Przykład: karta metryk dla zespołu platformy płatności

Rozpracowany przykład karty metryk, czyli jednostronicowego dokumentu opisanego w [temacie 1.4, Nadzór nad metrykami i ich własność](../chapters/01-04-nadzor-i-wlasnosc-metryk.md). Ważny jest kształt: jasno podany cel, wyraźny anty-cel, wskazani właściciele i rytm przeglądów. Tak krótka karta ma być czytana, a nie archiwizowana.

- **Zespół:** Platforma płatności
- **Właściciel:** Kierownik inżynierii platformy
- **Przegląd:** Co kwartał, na przeglądzie platformy

## Cel

Ta karta reguluje metryki, które zespół platformy płatności śledzi na temat własnego dostarczania i niezawodności. Istnieje po to, żeby każdy, wewnątrz zespołu i poza nim, widział, co jest mierzone, dlaczego i do czego nie służy.

## Co śledzimy

| Metryka | Źródło prawdy | Właściciel |
| --- | --- | --- |
| Częstotliwość wdrożeń | Potok CI/CD | Lider platformy |
| Czas realizacji zmiany | Git oraz potok wdrożeń | Lider platformy |
| Odsetek nieudanych zmian | System śledzenia incydentów, tagowany po wdrożeniu | Lider dyżurów |
| Czas przywrócenia po nieudanym wdrożeniu | System śledzenia incydentów | Lider dyżurów |
| Opóźnienie API P99 (SLI) | Platforma obserwowalności | Lider SRE |
| Spalanie budżetu błędów | Platforma obserwowalności | Lider SRE |

## Anty-cele

Tych metryk nigdy nie używamy, pojedynczo ani w kombinacji, do rankingu inżynierów, ocen okresowych ani porównywania tego zespołu z mapą drogową innego zespołu bez porównania także zakresu, obsady i dojrzałości systemu. Każde użycie poza celem podanym wyżej wymaga zgody dyrektora inżynierii i samego zespołu.

## Bariery ochronne

Każda z powyższych metryk, z którą wiąże się zachęta, ma sparowaną barierę ochronną. Czas realizacji zmiany obserwujemy razem z odsetkiem nieudanych zmian, żeby zespół nie mógł poprawić wyniku tempa, wypuszczając bardziej ryzykowne zmiany. Częstotliwość wdrożeń obserwujemy razem ze spalaniem budżetu błędów z tego samego powodu.

## Rytm przeglądów

Zespół przegląda tę kartę co kwartał. Metryka, która przez dwa kolejne kwartały nie zmieniła żadnej decyzji, jest kandydatem do wycofania.
