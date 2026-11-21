# 9.4 Szablony

Szablony do skopiowania i wklejenia dla powtarzalnych dokumentów.
Przepracowane, wypełnione przykłady dwóch pierwszych znajdziesz w
[`przyklady/`](../examples/index.md).

## Szablon karty metryk

```markdown
# Karta metryk: [nazwa zespołu lub zestawu metryk]

- **Zespół:** [zespół będący właścicielem]
- **Właściciel:** [nazwana osoba lub rola]
- **Przegląd:** [rytm, np. co kwartał]

## Cel

[Jedno lub dwa zdania: czym zarządza ta karta i dlaczego.]

## Co śledzimy

| Metryka | Źródło prawdy | Właściciel |
| --- | --- | --- |
| [metryka] | [system] | [nazwany właściciel] |

## Niecele

[Jawne oświadczenie, do czego te metryki nie służą, np. do indywidualnej
oceny wyników, rankingu zespołów bez kontekstu.]

## Bariery ochronne

[Dla każdej metryki, do której dąży się zachętami, wskaż jej sparowaną
barierę i wzorzec manipulacji, który wychwytuje.]

## Rytm przeglądów

[Kiedy i jak ta karta jest ponownie przeglądana; co wyzwala wycofanie
metryki.]
```

## Szablon specyfikacji panelu

```markdown
# Specyfikacja panelu: [nazwa panelu]

## Odbiorca

[Dla kogo jest ten panel i jaką decyzję wspiera. Zaznacz jawnie, jeśli nie
służy do indywidualnej oceny.]

## Kafle (w kolejności wyświetlania)

1. **[Nazwa metryki]**, [okno czasowe], [typ wykresu]. [Ewentualne konkretne
   uwagi o wizualizacji: zasady osi, adnotacje.]
2. ...

## Zasady wizualizacji

- Osie zaczynają się od zera, chyba że zaznaczono inaczej, z wyjątkiem
  udokumentowanym na kaflu.
- [Wszelkie inne zasady uczciwości specyficzne dla projektu.]

## Rytm odświeżania

[Jak często każdy kafel się aktualizuje i z jakiego źródła.]

## Co ten panel celowo pomija

[Wymień wszystko, co celowo pominięto, i dlaczego, np. indywidualne
zliczenia aktywności.]
```

## Szablon agendy spotkania przeglądu metryk

```markdown
# Przegląd metryk: [data]

## Uczestnicy

[Imiona i role]

## Przeglądane metryki

Dla każdej metryki:
- Bieżący odczyt i trend
- Wszelkie odchylenia poza normalną zmienność (temat 1.6)
- Stan sparowanej bariery ochronnej, jeśli dotyczy
- Decyzja, którą ten odczyt wspiera, jeśli jakaś

## Proponowane nowe metryki

[Przepuść każdą przez listę kontrolną przeglądu nowej metryki, temat 9.3.]

## Metryki rozważane do wycofania

[Które metryki nie wsparły żadnej decyzji w ostatnich dwóch cyklach?]

## Pozycje do wykonania

| Pozycja | Właściciel | Termin |
| --- | --- | --- |
| | | |
```

## Szablon analizy poawaryjnej bez obwiniania

```markdown
# Analiza poawaryjna: [nazwa incydentu], [data]

## Podsumowanie

[Jeden akapit: co się stało, wpływ na użytkowników, czas trwania.]

## Oś czasu

- Wykrycie: [czas, jak wykryto]
- Potwierdzenie: [czas, kto zareagował]
- Rozwiązanie: [czas, co naprawiło problem]

## Waga

[Klasyfikacja według udokumentowanych kryteriów, temat 6.2.]

## Przyczyna źródłowa

[Co pozwoliło, by do tego doszło, ujęte jako pytanie o system, a nie o
jednostkę.]

## Co poszło dobrze

[Konkretne rzeczy, które zadziałały w reakcji.]

## Pozycje do wykonania

| Pozycja | Właściciel | Termin |
| --- | --- | --- |
| | | |

## Kontynuacja

[Potwierdzenie, że pozycje do wykonania były śledzone do ukończenia, zgodnie
z następnym cyklem przeglądu.]
```

## Szablon uzasadnienia ROI

```markdown
# Uzasadnienie ROI: [nazwa inicjatywy]

## Koszt (całkowity koszt posiadania, temat 5.5)

- Początkowy: [koszt rozwoju]
- Bieżący: [utrzymanie, infrastruktura, wsparcie, rocznie]
- Koszt utraconych możliwości: [co jeszcze mogłyby zrobić te moce]

## Korzyść (udokumentowane dowody, tematy 5.1-5.3)

- [Korzyść 1], poparta [źródło danych]
- [Korzyść 2], poparta [źródło danych]

## Przedział i założenia

- Przypadek konserwatywny: [wartość]
- Przypadek optymistyczny: [wartość]
- Kluczowe założenie wyznaczające przedział: [nazwij je]

## Rozważone i wykluczone czynniki zakłócające

[Co jeszcze mogłoby wyjaśnić przewidywaną korzyść i dlaczego to wykluczono
lub uwzględniono.]

## Kontrola po ukończeniu (wypełnij po zakończeniu inicjatywy)

- Faktyczny rezultat: [wartość]
- W porównaniu z przewidywanym przedziałem: [powyżej / w środku / poniżej]
- Czego to nas uczy na następne oszacowanie: [uwaga]
```
