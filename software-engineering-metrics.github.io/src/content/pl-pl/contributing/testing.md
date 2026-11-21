# Testowanie: zestaw walidacji

## Uruchomienie

```sh
just test
# lub
python3 tests/validate.py
```

Działa z dowolnego miejsca i potrzebuje tylko Pythona 3 (bez pakietów zewnętrznych i bez sieci). Wypisuje jedną linię na test i kończy się kodem niezerowym, gdy któryś test zawiedzie, więc nadaje się do CI i jako hak pre-commit.

## Co sprawdza

- **Oczekiwaną liczbę tematów** (stała na początku skryptu).
- **Ciągłą numerację** w każdej części, zaczynającą się od N.0.
- **Zgodność H1 z nazwą pliku** w części dziesiętnej, dla każdego tematu.
- **Zgodność tytułów H1 z `spec/structure.md`** znak po znaku, a nie tylko wiodącą liczbę dziesiętną.
- **Obecność wymaganych sekcji** w każdym temacie merytorycznym (części od 1 do 8, temat N.1 i wyżej), **dokładnie w kolejności z szablonu**.
- **Minimalną liczbę słów** dla każdego tematu merytorycznego (1500 słów), z listą wyjątków w skrypcie dla zamierzonych odstępstw.
- **Brak pauz em** w każdym pliku Markdown.
- **Półpauzy tylko między cyframi**, więc "2.1–2.8" przechodzi, a wszystko inne nie.
- **Brak zakazanych fraz** ("not only", "but also", "load-bearing").
- **Rozwiązywanie wszystkich wewnętrznych linków `.md`.**
- **Odwołania w prozie wskazują prawdziwe tematy**: odwołanie do numeru tematu bez pasującego pliku na dysku jest błędem, według tego samego wzorca, którego używa automatyczne linkowanie tematów w opublikowanej witrynie.
- **Poprawną formę linków do Wikipedii** (`https://en.wikipedia.org/wiki/...`).
- **Zgodność `spec/structure.md` z plikami na dysku**, w obu kierunkach.
- **Czy README, strona główna i strona spisu treści linkują każdy temat.**

## Gdy test zawodzi

Linia z błędem podaje plik i problem. Typowe poprawki:

- Znaleziono pauzę em: przeformułuj zdanie, żeby usunąć "—". Nie kasuj jej po prostu.
- Brakująca sekcja: dodaj brakującą sekcję `##` z szablonu tematu.
- Niezgodność ze strukturą: dodano lub zmieniono nazwę tematu bez aktualizacji `spec/structure.md` albo odwrotnie. Doprowadź oba do zgodności.
- Zepsuty link: popraw ścieżkę albo zaktualizuj ją po zmianie nazwy.
- Luka w numeracji: przenumeruj tak, żeby część była ciągła od N.0.

## Poza zestawem walidacji

- `just spell` uruchamia [codespell](https://github.com/codespell-project/codespell) na całym repozytorium. Konfiguracja, razem z listą ignorowanych fałszywych trafień, to sekcja `[tool.codespell]` w `pyproject.toml`.
- `just stats` drukuje raport w Markdown (liczba słów w każdym temacie, cienkie tematy, linki do Wikipedii, wpisy w bibliografii) z `tools/stats.py`.

## Ciągła integracja

- `.github/workflows/test.yml` działa przy każdym pull requeście i przy pushach do gałęzi innych niż main: zestaw walidacji i codespell. To repozytorium nie buduje ani nie wdraża witryny; renderowanie odbywa się w osobnym repozytorium `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` co tydzień sprawdza zewnętrzne linki za pomocą [lychee](https://github.com/lycheeverse/lychee) (wzorce ignorowania w `.lycheeignore`) i trzyma wyniki w jednym zgłoszeniu "Link checker report". Zewnętrzne linki celowo nie leżą na ścieżce pull requestów.

## Czego testy nie obejmują

Zestaw sprawdza strukturę i styl, a nie prawdę. Nie powie, czy źródło jest prawdziwe ani czy proza jest dokładna. Weryfikuj cytowania i fakty ręcznie albo przez przegląd badawczy. Istnienie linku do Wikipedii (w odróżnieniu od jego formy) wymaga też sprawdzenia przez sieć, które zestaw celowo pomija, żeby mógł działać offline.
