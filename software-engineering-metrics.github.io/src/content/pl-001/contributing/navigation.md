# Nawigacja: jak działają pliki generowane

Dla każdego wariantu językowego cztery artefakty nawigacyjne są generowane z tematów tego wariantu, a nie pisane ręcznie (plus `README.md`, generowany raz dla wariantu referencyjnego, `en-gb-oxendict`):

- `README.md` (spis treści na stronie głównej repozytorium; tylko wariant referencyjny)
- `locales/<locale>/index.md` (strona główna opublikowanej witryny)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (indeks tematyczny, z linkami)

Tworzy je [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). Nie edytuj ich ręcznie, bo następne generowanie nadpisze twoją zmianę.

## Kiedy generować ponownie

Uruchom `just nav` (lub `python3 tools/gen_nav.py`), gdy:

- dodajesz, usuwasz, zmieniasz nazwę lub numer tematu albo
- zmieniasz nagłówek `# N.M Tytuł` tematu (spis treści z niego korzysta).

Jeśli zmieniałeś cokolwiek w `locales/en-gb-oxendict/`, najpierw uruchom `python3 tools/localize.py`, żeby tematy w pozostałych trzech wariantach (i ich wygenerowane tytuły) były aktualne, zanim `gen_nav.py` je odczyta; zobacz [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Jak to działa

Dla każdego wariantu `gen_nav.py` czyta każdy plik `locales/<locale>/topics/*.md`, sortuje według numeru dziesiętnego, grupuje według części i:

- buduje spis treści część po części z tytułu H1 każdego tematu,
- zapisuje go do `locales/<locale>/index.md` i `locales/<locale>/front-matter/table-of-contents.md` (a dla wariantu referencyjnego także do `README.md`),
- przeszukuje tematy merytoryczne (części od 1 do 8) pod kątem ustalonej listy kluczowych terminów i zapisuje indeks tematyczny do `locales/<locale>/topics/09-07-index.md`.

Wspólny tekst standardowy (akapit wstępny, "Jak czytać tę książkę", "Wątki przekrojowe" i tytuły części) jest lokalizowany tak samo jak proza tematów, przez funkcje wariantów w `tools/localize.py`, dzięki czemu wygenerowane strony brzmią naturalnie w każdym wariancie.

Tytuły części znajdują się w słowniku `PART_TITLES` na początku skryptu. Generator używa nagłówków części z dwukropkiem ("Part 2: Delivery and Flow Metrics"), nigdy pauz em.

## Czego nie dotyka

Specyfikacja w katalogu głównym repozytorium (`spec/index.md`, `spec/structure.md` i pliki towarzyszące) jest ręcznie pisanym źródłem prawdy. Generator jej nie zapisuje i nie jest częścią opublikowanej witryny. Jeśli zmieniasz strukturę, zaktualizuj `spec/structure.md` samodzielnie, potem uruchom `just nav` dla plików pochodnych i `just test`, żeby potwierdzić, że wszystko się zgadza.
