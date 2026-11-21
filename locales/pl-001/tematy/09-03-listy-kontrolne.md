# 9.3 Listy kontrolne

Gotowe do użycia listy kontrolne do szybkiego odwołania. Skopiuj jedną do
własnego procesu i dostosuj; liczy się pokrycie, a nie dokładne brzmienie.

## Lista kontrolna przeglądu nowej metryki (przed dodaniem jakiejkolwiek metryki do panelu)

- [ ] Metryka ma nazwaną decyzję, którą wspiera (temat 1.1)
- [ ] Metryka jest sklasyfikowana na piśmie jako diagnostyczna lub oceniająca
      (temat 1.1)
- [ ] Jeśli dąży się do niej zachętami, bariera ochronna jest zdefiniowana w
      tym samym czasie (temat 1.2)
- [ ] Sposób manipulowania został nazwany: jak racjonalny zespół mógłby sprawić,
      by ta liczba wyglądała dobrze, nie poprawiając realnego rezultatu
      (temat 1.2)
- [ ] Metryka jest sklasyfikowana jako wejście, produkcja lub rezultat
      (temat 1.3)
- [ ] Metryka ma nazwanego właściciela oraz udokumentowany system źródłowy i
      metodę zbierania (tematy 1.4, 1.5)
- [ ] Metryka będzie używać mediany lub percentyla, a nie średniej, jeśli
      dane źródłowe są skośne (temat 1.6)
- [ ] Metryka nigdy nie jest używana do indywidualnej oceny, albo takie
      użycie jest osobno i jawnie ujawnione (temat 1.1)

## Lista kontrolna uruchomienia panelu

- [ ] Panel ma jednego nazwanego, konkretnego odbiorcę i decyzję
      (temat 8.1)
- [ ] Każda metryka, do której dąży się zachętami, pojawia się w tym samym
      widoku co jej bariera ochronna (tematy 1.2, 8.1)
- [ ] Osie zaczynają się od zera, chyba że udokumentowano jawny, widoczny
      wyjątek (temat 1.6)
- [ ] Pokazany jest trend w czasie, a nie pojedyncza migawka (temat 1.6)
- [ ] Panel ma nazwanego właściciela i rytm przeglądów (temat 1.4)
- [ ] Widoczne oświadczenie mówi, do czego panel nie służy, jeśli to istotne
      (temat 1.1)
- [ ] Źródła danych mają podstawowe kontrole kondycji, aby zepsuty potok nie
      wyświetlał się po cichu jako aktualny (temat 1.5)

## Lista kontrolna wdrożenia programu metryk

- [ ] Cel i jawne niecele są zakomunikowane przed uruchomieniem, a nie
      reaktywnie (temat 8.3)
- [ ] Mierzeni byli zaangażowani w wybór metryk (temat 8.3)
- [ ] Program startuje w trybie wyłącznie diagnostycznym, z zobowiązanym
      minimalnym okresem sprawdzania (temat 8.3)
- [ ] Istnieje szybki, widoczny protokół reakcji na każdy przyszły incydent
      złego użycia (temat 8.3)
- [ ] Wybrano zespół pilotażowy, który naprawdę się zgłosił na ochotnika, a
      nie taki, który został wyznaczony odgórnie (temat 8.5)
- [ ] Fundamentalny nadzór (karta, własność, polityka diagnostyczna) jest na
      miejscu, zanim rozpocznie się instrumentacja (tematy 1.4, 8.5)

## Lista kontrolna incydentu i analizy poawaryjnej

- [ ] Analiza poawaryjna bada system, a nie jednostkę
      (temat 6.2)
- [ ] Wagę sklasyfikowano według udokumentowanych, ustandaryzowanych
      kryteriów (temat 6.2)
- [ ] Czasy wykrycia, potwierdzenia i rozwiązania są rejestrowane osobno
      (temat 6.2)
- [ ] Pozycje do wykonania są konkretne, przypisane i śledzone do ukończenia
      (temat 6.2)
- [ ] Analiza poawaryjna jest dzielona bez obawy o indywidualne konsekwencje
      (tematy 6.2, 8.3)

## Lista kontrolna audytu metryk pod erę AI

- [ ] Każda metryka panelu została przetestowana pytaniem: „czy zespół
      intensywnie korzystający z pomocy AI, ale nietworzący więcej realnej
      wartości, pokazałby tu lepszy odczyt" (temat 7.1)
- [ ] Odsetek nieudanych zmian i częstość defektów są przeglądane razem z
      każdym wzrostem częstotliwości wdrożeń lub wolumenu commitów
      wspomaganych przez AI (temat 7.1)
- [ ] Przepustowość i głębokość przeglądu są monitorowane, gdy zmienia się
      wolumen kodu generowanego przez AI (temat 7.1)
- [ ] Uciekające defekty są oznaczane poziomem pomocy AI, aby sprawdzać, a nie
      zakładać, czy historyczna zależność częstości defektów nadal obowiązuje
      (tematy 7.1, 7.3)
- [ ] Metody wykrywania odporne na defekty „wygląda poprawnie" (testowanie
      mutacyjne, testowanie oparte na właściwościach) są wdrożone dla
      ścieżek kodu intensywnie wspomaganych przez AI (temat 7.3)
- [ ] Karta metryk została jawnie przejrzana i zaktualizowana pod tę zmianę,
      a nie pozostawiona dryfowi bez analizy (tematy 1.4, 7.1)

## Lista kontrolna audytu programu metryk (roczna)

- [ ] Każda metryka nadal ma nazwanego właściciela (temat 1.4)
- [ ] Przynajmniej jedna metryka została wycofana w ostatnim cyklu, jeśli
      przestała zarabiać na swoje utrzymanie (temat 1.1)
- [ ] Pięciowymiarowa ocena dojrzałości została przeprowadzona uczciwie,
      punktowana według minimum, a nie średniej (temat 8.4)
- [ ] Żadna metryka nie przesunęła się z użycia diagnostycznego do oceniającego
      bez jawnej, ujawnionej decyzji (temat 1.1)
- [ ] Definicje zostały wyrywkowo sprawdzone względem faktycznej
      instrumentacji pod kątem dryfu (tematy 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Proporcja rezultatów do produkcji na głównych panelach została obliczona
      i przejrzana (temat 7.4)
