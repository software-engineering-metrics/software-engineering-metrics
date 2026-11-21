# O tym projekcie

Dokumentacja projektu książki: jak jest zbudowana, jak ją budować i sprawdzać oraz gdzie leży źródło prawdy. Samą książkę znajdziesz w [spisie treści](../index.md).

## Mapa projektu

- **Książka:** opublikowana w kilku wariantach językowych w katalogu `locales/`; zobacz [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md). Wariant `en-gb-oxendict/topics/` (63 pliki), `en-gb-oxendict/front-matter/` i załączniki z części 9 to ręcznie pisane źródło; `en-001`, `en-gb` i `en-us` są z niego wyprowadzane.
- **Źródło prawdy:** `spec/` w katalogu głównym repozytorium (nie jest publikowane w witrynie). Struktura jest zadeklarowana w `spec/structure.md`, zasady pisania w `spec/conventions.md`, a pisownia w `spec/oxford-spelling.md`. Wszystko inne jest budowane tak, by do tego pasować.
- **Narzędzia:** `tools/localize.py` wyprowadza pozostałe trzy warianty angielskie; `tools/gen_nav.py` generuje nawigację; `tests/validate.py` egzekwuje specyfikację; `justfile` je łączy.
- **Wskazówki dla współtwórców:** [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) w katalogu głównym repozytorium oraz przewodniki w [sekcji współpracy](../wspolpraca/przeglad.md).

## Budowanie i sprawdzanie

Zestaw walidacji działa na Pythonie 3 bez innych zależności i bez dostępu do sieci. Zadania uruchamia [just](https://github.com/casey/just).

```sh
just test    # sprawdź strukturę, styl, linki i zgodność specyfikacji z dyskiem
just nav     # wygeneruj ponownie pliki nawigacji
just check   # najpierw nav, potem test
just stats   # liczba tematów i słów
```

To repozytorium zawiera treść książki i jej specyfikację. Do witryny renderuje ją osobne repozytorium [`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Jak działa tu rozwój sterowany specyfikacją

Specyfikacja jest pierwsza. `spec/structure.md` mówi, jakie tematy istnieją i jak są numerowane. `spec/conventions.md` mówi, jak muszą być napisane. Tematy powstają tak, by spełniać oba. `tools/gen_nav.py` wyprowadza nawigację z tematów, a `tests/validate.py` sprawdza wynik z powrotem względem specyfikacji. Jeśli tematy i specyfikacja kiedykolwiek się rozejdą, testy się nie powiodą, i to jest sygnał, by je ze sobą uzgodnić.

Dzięki temu nie ma dryfu: zmiana jest "gotowa" dopiero wtedy, gdy specyfikacja, tematy, wygenerowana nawigacja i testy są ze sobą zgodne.

## Decyzje projektowe, które warto znać

- **Płaskie tematy numerowane dziesiętnie.** Pliki to `locales/<locale>/topics/PP-CC-slug.md`; w tłumaczeniach slug jest w języku danego wariantu, a prefiks `PP-CC` jest taki sam. Część to liczba całkowita, temat to liczba dziesiętna, a N.0 to wprowadzenie do części. To daje stabilne identyfikatory i pozwala narzędziom sortować i grupować bez drzewa katalogów.
- **Jeden ręcznie pisany wariant, trzy wyprowadzane.** `en-gb-oxendict` to pisownia oksfordzka, styl wydawniczy większości międzynarodowych organizacji normalizacyjnych (zobacz `spec/oxford-spelling.md`); `en-001`, `en-gb` i `en-us` są mechanicznie z niego wyprowadzane, więc tłumaczenie nigdy nie odpływa od źródła.
- **Generowana nawigacja.** Spis treści, strona z zawartością i indeks tematyczny są generowane, więc nigdy nie rozchodzą się z tematami.
- **Testy offline, bez zależności.** Zestaw korzysta tylko z biblioteki standardowej, więc działa wszędzie, także w CI i hakach pre-commit.
- **Odwołania krzyżowe pozostają zwykłym tekstem.** Proza odwołuje się do tematów przez numer dziesiętny ("zobacz temat 2.1"), tak jak wymaga specyfikacja; za zamianę tych odwołań w linki odpowiada witryna renderująca.
- **Żadnych pauz em, z reguły i z testu.** Świadomy wybór stylu, egzekwowany tak, żeby pozostał prawdziwy w miarę rozrostu książki.
- **Każda rodzina metryk nazywa swój sposób manipulowania.** To jedyna reguła szablonu, która nie ma odpowiednika w siostrzanym projekcie `software-engineering-guide`: istnieje, ponieważ cały temat tej książki to pomiar, więc ryzyko samego pomiaru musi być pełnoprawne, a nie dorozumiane.

## Dalsza lektura

- [Pisanie](../wspolpraca/pisanie.md) : tworzenie i edycja tematów.
- [Nawigacja](../wspolpraca/nawigacja.md) : jak działają pliki generowane.
- [Testowanie](../wspolpraca/testowanie.md) : co sprawdzają testy i jak naprawiać błędy.
- [Przykłady](../przyklady/przeglad.md) : małe, konkretne przykłady.
- [Dziennik zmian](dziennik-zmian.md) : historia istotnych zmian.
