# Pisanie: tworzenie i edycja tematów

## Zanim zaczniesz pisać

- Przeczytaj [zasady stylu](zasady-stylu.md) oraz `spec/conventions.md` w katalogu głównym repozytorium.
- Sprawdź `spec/structure.md` w katalogu głównym repozytorium, żeby zobaczyć, gdzie pasuje temat i jaki numer powinien dostać.

## Pisanie nowego tematu

1. Wybierz część i następny wolny numer dziesiętny w tej części. Numeracja jest ciągła, więc nowy temat zwykle dostaje numer po ostatnim w swojej części.
2. Utwórz `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefiks z zerami i myślnikami, na przykład `02-01-...`) na podstawie [szablonu tematu](szablon-tematu.md). Pisz pisownią oksfordzką (zobacz `spec/oxford-spelling.md`); nigdy nie edytuj pozostałych trzech wariantów angielskich bezpośrednio.
3. Pisz według szablonu. Każdy temat merytoryczny potrzebuje wszystkich sekcji: przeglądu, kluczowych zasad, rekomendacji, kompromisów (z tabelą), pytań do dyskusji, perspektywy sektorowej (startup, mała firma, duże przedsiębiorstwo, administracja publiczna), przykładów (jeden z przedsiębiorstwa i jeden z administracji publicznej), uzasadnienia biznesowego, antywzorców, pięciopoziomowego modelu dojrzałości, pomysłów do dyskusji, kluczowych wniosków i bibliografii.
4. Nazwij sposób manipulowania metryką. Każda rodzina metryk potrzebuje jawnej odpowiedzi na pytanie, jak zespół może sprawić, by liczba wyglądała dobrze bez poprawiania tego, co mierzy, i jaka bariera ochronna to wychwytuje (zobacz temat 1.2).
5. Definiuj terminy przy pierwszym użyciu. Dodawaj linki do Wikipedii przy kluczowych pojęciach przy pierwszej wzmiance, wyłącznie w prozie.
6. Odwołuj się do pokrewnych tematów przez numer dziesiętny, na przykład "(temat 2.1)."
7. Dodaj temat do `spec/structure.md`.
8. Jeśli wprowadzenie do części (N.0) wylicza jej tematy, dodaj tam punkt.
9. Uruchom `python3 tools/localize.py`, żeby wyprowadzić temat do `en-001`, `en-gb` i `en-us`.
10. Uruchom `just nav`, a potem `just test`.

## Edycja istniejącego tematu

- Zachowaj kolejność sekcji i nagłówki. Testy sprawdzają, czy tematy merytoryczne nadal mają wszystkie wymagane sekcje.
- Zachowaj wbudowane definicje, linki do Wikipedii, tabele i listę bibliografii, chyba że edycja dotyczy właśnie ich.
- Nie wprowadzaj pauz em ani zakazanych zwrotów. Jeśli przeformułowujesz, przepisz zdanie, zamiast wstawiać myślnik.
- Po edycji uruchom `python3 tools/localize.py`, żeby ponownie wyprowadzić `en-001`, `en-gb` i `en-us` z edytowanego źródła `en-gb-oxendict`.

## Zmiana nazwy lub numeru

- Zmień nazwę pliku w `locales/en-gb-oxendict/`, zaktualizuj jego nagłówek `# N.M Tytuł`, zaktualizuj `spec/structure.md` i każde odwołanie, które wskazuje stary numer.
- Uruchom `python3 tools/localize.py`, żeby zmienić nazwę pliku także w pozostałych trzech wariantach (wyprowadza wszystkie cztery z tych samych ścieżek względnych).
- Uruchom `just nav` i `just test`. Testy wskażą niezgodność między H1 a nazwą pliku, lukę w numeracji, wariant, który odbiegł od źródła, albo zepsuty link.

## Przypomnienie o tonie

Pisz jak doświadczony kolega, który chce, żeby czytelnik odniósł sukces. Ciepło, prosto, wprost i użytecznie. Krótkie zdania. Bez waty słownej.
