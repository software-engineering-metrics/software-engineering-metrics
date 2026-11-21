# 9.2 Definicje metryk i wzory

Każdy wzór z książki zebrany w jednym miejscu. Każde hasło wskazuje temat z
pełnym omówieniem, w tym z ryzykiem manipulowania i barierą ochronną. Używaj
tego jako szybkiego wyszukiwania, a nie zamiennika samego tematu.

## Metryki przepływu (część 2)

| Metryka | Wzór | Temat |
| --- | --- | --- |
| Tempo przepływu | Liczba elementów przepływu ukończonych w jednostce czasu | 2.3 |
| Rozkład przepływu | (Ukończone elementy jednego typu elementu przepływu) / (Wszystkie ukończone elementy) x 100% | 2.3 |
| Czas przepływu | Czas od wejścia elementu przepływu do strumienia wartości do jego dostarczenia | 2.4 |
| Obciążenie przepływu | Liczba elementów przepływu aktualnie aktywnych lub oczekujących w strumieniu wartości | 2.4 |
| Prawo Little'a | Obciążenie przepływu (praca w toku) = Tempo napływu x Czas przepływu (czas cyklu) | 2.4, 2.7 |
| Efektywność przepływu | Czas aktywnej pracy / Całkowity upłynięty czas x 100% | 2.5 |
| Czas cyklu | Suma czasów etapów: kodowanie + podjęcie + przegląd + test + wdrożenie | 2.6 |
| Wykorzystanie | Tempo napływu / Tempo obsługi | 2.7 |
| Odsetek kompletnych i dokładnych (%C/A) | (Jednostki użyteczne dalej bez poprawek) / (Wszystkie jednostki) x 100% | 2.8 |
| Skumulowana wydajność przepustowa | %C/A etapu 1 x %C/A etapu 2 x ... x %C/A etapu N | 2.8 |
| Takt time | Dostępny czas pracy / Popyt klientów w tym okresie | 2.8 |
| Czas do pierwszego przeglądu | Czas od otwarcia pull requesta do pierwszej merytorycznej odpowiedzi recenzenta | 2.9 |
| Częstotliwość wdrożeń | Liczba udanych wdrożeń produkcyjnych w jednostce czasu | 2.10 |
| Czas realizacji zmiany | Czas od pierwszego commita do udanego wdrożenia na produkcję (raportuj medianę i 90. percentyl) | 2.10 |
| Odsetek nieudanych zmian | (Wdrożenia powodujące awarię) / (Wszystkie wdrożenia) x 100% | 2.10 |
| Czas przywrócenia po nieudanym wdrożeniu | Czas od wykrycia awarii do faktycznego przywrócenia usługi | 2.10 |

## Doświadczenie programisty (część 3)

| Metryka | Wzór | Temat |
| --- | --- | --- |
| Czas skupienia | Liczba i czas trwania nieprzerwanych bloków co najmniej dwugodzinnych tygodniowo, z danych kalendarza | 3.6 |
| Wskaźnik odpowiedzi | (Otrzymane odpowiedzi na ankietę) / (Wysłane zaproszenia do ankiety) x 100% | 3.7 |

## Kod i jakość (część 4)

| Metryka | Wzór | Temat |
| --- | --- | --- |
| Złożoność cyklomatyczna | Niezależne ścieżki w przepływie sterowania (krawędzie − węzły + 2, według McCabe'a) | 4.1 |
| Pokrycie testami | (Linie/gałęzie wykonane przez testy) / (Wszystkie linie/gałęzie) x 100% | 4.2 |
| Wskaźnik zabitych mutantów | (Mutanty zabite przez zestaw testów) / (Wszystkie wprowadzone mutanty) x 100% | 4.2 |
| Rotacja kodu | Linie dodane + zmodyfikowane + usunięte na plik w oknie czasowym | 4.3 |
| Ocena punktu zapalnego | Rotacja x Złożoność, uszeregowane według pliku | 4.3 |
| Koszt utrzymywania długu | Szacowany bieżący koszt nienaprawienia elementu (wolniejsza powiązana praca, podwyższone ryzyko defektów) | 4.5 |

## Produkt i biznes (część 5)

| Metryka | Wzór | Temat |
| --- | --- | --- |
| Odsetek uciekających defektów | (Uciekające defekty ważone dotkliwością) / (Jednostka dostarczenia lub czasu) | 5.1 |
| Adopcja początkowa | (Użytkownicy, którzy wypróbowali funkcję co najmniej raz) / (Grupa docelowa) x 100% | 5.2 |
| Adopcja utrzymana | (Użytkownicy wciąż korzystający z funkcji po N tygodniach) / (Użytkownicy, którzy ją początkowo wypróbowali) x 100% | 5.2 |
| Koszt jednostkowy | Całkowity koszt (ludzie + infrastruktura + narzędzia) / Znacząca jednostka (klient, transakcja) | 5.4 |
| ROI | (Całkowita korzyść − Całkowity koszt posiadania) / Całkowity koszt posiadania, przedstawiane jako przedział | 5.5 |

## Niezawodność, operacje i bezpieczeństwo (część 6)

| Metryka | Wzór | Temat |
| --- | --- | --- |
| Budżet błędów | (1 − cel SLO) x Okno czasowe (np. 0,1% z 30 dni ≈ 43 minuty) | 6.1 |
| Tempo spalania budżetu błędów | Zużyty budżet błędów / Przydzielony budżet błędów, w danym oknie | 6.1 |
| MTTD | Czas od początku incydentu do wykrycia | 6.2 |
| MTTA | Czas od powiadomienia o incydencie do potwierdzenia | 6.2 |
| MTTR (incydent) | Czas od potwierdzenia do faktycznego przywrócenia usługi | 6.2 |
| Rozkład powiadomień dyżurnych | Powiadomienia otrzymane na osobę, w oknie kroczącym (nie średnia zespołu) | 6.3 |
| Czas usuwania podatności | Czas od odkrycia do faktycznego usunięcia, śledzony według wagi | 6.4 |

## Uwagi o stosowaniu tych wzorów

- **Zawsze paruj wzór szybkości lub produkcji z jego barierą ochronną** (temat
  1.2): odsetek nieudanych zmian z częstotliwością wdrożeń i czasem
  realizacji; odsetek uciekających defektów z szybkością dostarczania; tempo
  spalania budżetu błędów z aktywnością wdrożeniową.
- **Dla wzorów opartych na czasie używaj median i percentyli, a nie średnich**
  (temat 1.6), chyba że wzór wyraźnie wymaga średniej.
- **Każdy wzór wymaga udokumentowanego systemu źródłowego i metody zbierania**
  (temat 1.5) obok definicji matematycznej; dwa zespoły obliczające ten sam
  wzór z różnych źródeł nie dadzą porównywalnych liczb.
- **Ważenie dotkliwością nie jest pokazane jawnie w każdym z powyższych
  wzorów**, ale obowiązuje wszędzie tam, gdzie pojawia się „ważone
  dotkliwością"; pełny schemat klasyfikacji znajdziesz w odpowiednim temacie.
