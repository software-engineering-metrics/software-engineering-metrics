# Przykład: specyfikacja panelu metryk dostarczania

Rozpracowana specyfikacja panelu, zgodna z [tematem 8.1, Projektowanie panelu metryk inżynierskich](../chapters/08-01-projektowanie-panelu-metryk-inzynierskich.md). Ważny jest kształt: nazwani odbiorcy, niewiele kafli, uczciwy standard wizualizacji i podany rytm odświeżania.

## Odbiorcy

Kierownictwo inżynierii i zespół platformowy, na dwutygodniowym przeglądzie dostarczania. Panel nie służy do oceny indywidualnej wydajności.

## Kafle (w kolejności wyświetlania)

1. **Częstotliwość wdrożeń**, ostatnie 4 tygodnie, według zespołu. Wykres liniowy, przedziały tygodniowe, oś zaczyna się od zera.
2. **Czas realizacji zmiany**, mediana i 90. percentyl, ostatnie 4 tygodnie. Wykres słupkowy z obiema seriami, nie tylko z medianą.
3. **Odsetek nieudanych zmian**, ostatnie 4 tygodnie, z odnośnikiem na kaflu do uzgodnionej przez zespół definicji "porażki".
4. **Czas przywrócenia po nieudanym wdrożeniu**, mediana, ostatnie 4 tygodnie.
5. **Pozostały budżet błędów**, bieżący kwartał, według usługi, w procentach.

## Reguły wizualizacji

- Każdy wykres trendu pokazuje co najmniej osiem punktów danych, nigdy pojedynczą migawkę.
- Osie zaczynają się od zera, chyba że wyjątek jest opisany na kaflu.
- Wdrożenia, incydenty i święta są oznaczone na osi czasu, żeby czytelnik odróżnił realną zmianę od szumu.
- Bez podwójnych osi, bez efektów 3D, bez dobranych pod tezę zakresów dat.

## Rytm odświeżania

Kafle zasilane z potoku (częstotliwość wdrożeń, czas realizacji) odświeżają się co godzinę. Kafle zasilane z incydentów (odsetek nieudanych zmian, czas przywrócenia) odświeżają się po zamknięciu analizy poawaryjnej. Panel podaje własny czas ostatniego odświeżenia.

## Czego ten panel celowo nie zawiera

Liczby commitów poszczególnych osób, liczby pull requestów poszczególnych osób i liczby linii kodu. To metryki aktywności z dobrze udokumentowaną historią manipulowania i mierzenia wysiłku zamiast rezultatu (temat 3.4).
