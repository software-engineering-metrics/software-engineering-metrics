# Współpraca

Dziękujemy, że pomagasz ulepszać tę książkę. Mile widziane są wkłady każdej wielkości, od poprawienia literówki po napisanie nowego tematu.

## Zasady podstawowe

Książka trzyma się ścisłego stylu. Najważniejsze zasady:

- Żadnych pauz em. Użyj przecinka, dwukropka, nawiasów albo dwóch zdań.
- Żadnych gotowych fraz ("not only ... but also", "load-bearing" i podobnych).
- Pisz ciepło, prosto i wprost. Zwracaj się do czytelnika per "ty". Krótkie zdania.
- Definiuj terminy przy pierwszym użyciu. Linkuj kluczowe pojęcia do Wikipedii przy pierwszej wzmiance.
- Tylko prawdziwe źródła.
- Każdy temat o rodzinie metryk nazywa swój sposób manipulowania i swoją barierę ochronną.

Pełne zasady są w `spec/conventions.md` w katalogu głównym repozytorium, a wersja skrócona to [zasady stylu](zasady-stylu.md). Testy egzekwują mechaniczną część.

## Przygotowanie środowiska

Potrzebujesz Pythona 3 i [just](https://github.com/casey/just). To repozytorium zawiera treść książki i jej specyfikację oraz witrynę SvelteKit (`software-engineering-metrics.github.io/`), która renderuje ją do opublikowanej strony.

```sh
just         # lista zadań
just test    # uruchom zestaw walidacji
just nav     # wygeneruj ponownie pliki nawigacji
just stats   # liczba tematów i słów
```

## Wprowadzanie zmiany

1. Przeczytaj właściwy przewodnik: [pisanie](pisanie.md) dla tematów, [nawigacja](nawigacja.md) dla plików generowanych, [testowanie](testowanie.md) dla testów.
2. Wprowadź najmniejszą zmianę, która załatwia sprawę.
3. Jeśli dodajesz, usuwasz, zmieniasz nazwę lub numer tematu, zaktualizuj `spec/structure.md` w katalogu głównym repozytorium i uruchom `just nav`.
4. Uruchom `just test`. Musi przejść.
5. Dodaj jednowierszowy wpis do [dziennika zmian](../projekt/dziennik-zmian.md) w sekcji **Unreleased**.

## Nad czym warto pracować

- Poprawiaj błędy, niejasne fragmenty i nieaktualne źródła.
- Ulepszaj przykłady, zwłaszcza konkretne przykłady z przedsiębiorstw i administracji publicznej.
- Weryfikuj cytowania względem prawdziwych źródeł.
- Uzupełniaj luki w pokryciu tematu bez łamania szablonu.

## Czego unikać

- Nie edytuj ręcznie plików generowanych (`README.md`, `index.md` każdego wariantu, `front-matter/table-of-contents.md` i `topics/09-07-index.md`). Zmień tematy i uruchom `just nav`.
- Nie edytuj bezpośrednio `en-001`, `en-gb` ani `en-us`; są wyprowadzane z `en-gb-oxendict` przez `tools/localize.py`.
- Nie dodawaj tematu bez aktualizacji `spec/structure.md`.
- Nie wprowadzaj pauz em ani zakazanych zwrotów; testy się nie powiodą.

## Zgłaszanie problemów

Otwórz zgłoszenie opisujące problem, plik i temat oraz, jeśli to istotne, prawidłowe źródło lub odwołanie. Małe, konkretne zgłoszenia najłatwiej obsłużyć.
