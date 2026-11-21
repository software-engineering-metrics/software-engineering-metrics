# Zasady stylu (wspólne, egzekwowalne)

Styl wydawniczy w jednym miejscu. Pozycje oznaczone "(test)" egzekwuje `tests/validate.py`; naruszenie psuje budowanie. Pełna wersja opisowa to `spec/conventions.md` w katalogu głównym repozytorium.

## Twarde reguły

- **Żadnych pauz em.** Nigdy nie używaj "—" (U+2014). Użyj przecinka, dwukropka, nawiasów albo dwóch zdań. Półpauzy "–" są dozwolone tylko w zakresach liczbowych, takich jak `1–9` czy `2.1–2.8`. (test)
- **Żadnych gotowych fraz.** Nie używaj "not only ... but also", "but also" ani "load-bearing". Unikaj "It's important to note", "In today's fast-paced world", "It's crucial to consider", "It appears that", "One could argue" oraz schematu "it's not just X, it's Y". (test, dla pierwszych trzech)
- **Definiuj terminy przy pierwszym użyciu.** Rozwijaj akronimy i definiuj żargon przy pierwszym użyciu w każdym temacie, na przykład "średni czas przywracania (MTTR)."
- **Linkuj kluczowe pojęcia do Wikipedii** przy pierwszej wzmiance, raz na temat, wyłącznie w prozie. Forma: `[termin](https://en.wikipedia.org/wiki/Article_Title)`. Nigdy w nagłówkach, tabelach, kodzie ani w bibliografii. (forma linku jest testowana)
- **Tylko prawdziwe źródła.** Autor i tytuł rzeczywistych prac. Żadnych zmyślonych tytułów, autorów ani adresów URL.
- **Nazwij sposób manipulowania.** Temat o rodzinie metryk podaje, jak metryka bywa manipulowana i jaka bariera ochronna to wychwytuje (temat 1.2).

## Głos

- Ciepły, bezpośredni, zachęcający. Zwracaj się do czytelnika per "ty". Krótkie zdania, proste słowa. Zaczynaj od sedna.
- Z opinią i praktycznie. Neutralnie wobec dostawców. Nazwy produktów podawaj tylko jako rzeczowe przykłady.

## Struktura (test)

- Tematy merytoryczne mają dokładną kolejność sekcji z [szablonu tematu](szablon-tematu.md).
- Pierwszy nagłówek to `# N.M Tytuł` (numer dziesiętny tematu) i odpowiada on prefiksowi `PP-CC` z zerami w nazwie pliku.
- Numeracja w każdej części jest ciągła i zaczyna się od N.0.

## Po edycji

- Jeśli zmienił się zestaw tematów, zaktualizuj `spec/structure.md` i uruchom `just nav`.
- Zawsze uruchom `just test`.
