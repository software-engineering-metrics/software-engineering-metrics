# 3.1 Ramy SPACE

## Przegląd i motywacja

[Ramy SPACE](https://queue.acm.org/detail.cfm?id=3454124), opublikowane
w 2021 roku przez badaczy Nicole Forsgren, Margaret-Anne Storey, Chandrę
Maddilę, Thomasa Zimmermanna, Briana Houcka i Jennę Butler, powstały w
odpowiedzi na konkretny problem: jednoliczbowe metryki
[produktywności programistów](https://en.wikipedia.org/wiki/Productivity),
czyli liczba linii kodu, liczba commitów i punkty historii, są banalnie łatwe
do zmanipulowania i regularnie wprowadzają w błąd. SPACE proponuje zamiast
tego mierzyć w pięciu wymiarach: **satysfakcja i dobrostan**, **wydajność**
(ang. Performance), **aktywność**, **komunikacja i współpraca** oraz
**efektywność i flow**. Żadna litera nie ma stać sama. Prawdziwy wkład ram to
dyscyplina patrzenia na wszystkie pięć naraz, tak aby zespół nie mógł
wyglądać na produktywny na jednej osi, po cichu psując inną.

To ważne, bo produktywność programistów nie jest jedną rzeczą. Zespół może
być bardzo aktywny (dużo commitów, dużo pull requestów), a jednocześnie
osiągać słabe wyniki (praca nie rusza rezultatów, które się liczą). Zespół
może krótkoterminowo działać świetnie, podczas gdy satysfakcja leci w dół, co
jest wskaźnikiem wyprzedzającym rotacji pracowników i spadku jakości, które
ujawniają się po miesiącach. Spostrzeżenie SPACE, wprost wynikające z tematów
1.2 i 1.3 tej książki, jest takie, że każdy z tych wymiarów, ścigany jako
samodzielny cel, będzie manipulowany kosztem pozostałych, a ramy istnieją
właśnie po to, by ten kompromis uwidocznić, zanim wyrządzi prawdziwe szkody.

W dużych zespołach SPACE daje kierownictwu wspólny słownik do rozmowy, która
inaczej sprowadza się do wymiaru najłatwiejszego do zmierzenia, czyli prawie
zawsze aktywności. Duże przedsiębiorstwa porównujące produktywność wielu
zespołów potrzebują ram, które opierają się pokusie liczenia commitów.
Administracja publiczna, mierząca się z presją rekrutacji i utrzymania ludzi
na konkurencyjnym rynku pracy, potrzebuje danych o satysfakcji i dobrostanie
równie poważnie jak danych o dostarczaniu, bo utrata doświadczonego inżyniera
przez wypalenie kosztuje znacznie więcej, niż kiedykolwiek zaoszczędziła
produkcja jakiegokolwiek pojedynczego sprintu.

## Kluczowe zasady

- **Żaden pojedynczy wymiar SPACE nie zasługuje na zaufanie w izolacji.**
  Wartość ram wynika właśnie z mierzenia kilku wymiarów razem.
- **Co najmniej jedna metryka z co najmniej trzech wymiarów, z
  połączeniem źródeł subiektywnych i obiektywnych, to minimum
  zrównoważonego obrazu.** Zestaw metryk pochodzący w całości z jednego
  wymiaru lub jednego typu danych tak naprawdę nie korzysta ze SPACE.
- **Aktywność to wymiar najbardziej podatny na nadużycie jako samodzielny
  wskaźnik zastępczy.** Najłatwiej ją zmierzyć, a sama z siebie najsłabiej
  odzwierciedla rzeczywistą wartość.
- **Pomiar na poziomie zespołu i na poziomie jednostki wymaga innego
  traktowania.** SPACE zaprojektowano przede wszystkim z myślą o wglądzie na
  poziomie zespołu i systemu, a nie o indywidualnych kartach wyników.
- **Pięć wymiarów wzajemnie na siebie wpływa.** Zmiana poprawiająca jeden
  może pogorszyć inny, a ramy istnieją, by ten kompromis wyłapać.

## Rekomendacje

### Zbuduj zestaw metryk z co najmniej trzech wymiarów, zanim mu zaufasz

Nie wdrażaj SPACE przez wybranie jednego ulubionego wymiaru, zwykle
aktywności lub wydajności, i uznanie sprawy za zamkniętą. Świadomie wybierz
co najmniej jedną metrykę z co najmniej trzech z pięciu wymiarów, łącząc
obiektywną instrumentację (temat 1.5) z subiektywnymi danymi z ankiet
(temat 3.7), zanim przedstawisz jakikolwiek wniosek o produktywności zespołu.
Ten minimalny skład chroni SPACE przed osunięciem się z powrotem w problem
pojedynczego wskaźnika zastępczego, który miał rozwiązać.

### Traktuj metryki aktywności jako kontekst, nigdy jako nagłówek

Liczba commitów, liczba linii kodu i liczba pull requestów to zasadne dane
wymiaru aktywności w SPACE, ale nigdy nie powinny być główną ani jedyną
metryką prezentowaną jako produktywność zespołu. Używaj danych o aktywności,
by dać kontekst pozostałym wymiarom, na przykład zauważając, że spadek
aktywności zbiegł się ze wzrostem satysfakcji, bo zespół w końcu miał miejsce
na spłacanie długu technicznego, a nie jako niezależnego wyroku. Temat 3.4
omawia szczegółowo ryzyka tego wymiaru.

### Stosuj SPACE na poziomie zespołu i systemu, nie jednostki

Oryginalne badania SPACE i jego późniejsze wdrożenia w branży traktują ramy
jako soczewkę do rozumienia produktywności zespołów i organizacji, a nie jako
indywidualną kartę wyników. Stosowanie wymiarów SPACE do szeregowania osób,
zwłaszcza wymiaru aktywności, odtwarza dokładnie to ryzyko manipulowania,
przed którym ostrzega temat 1.2, i nadużywa ram, których nigdy nie
zwalidowano do takiego użycia.

### Obserwuj kompromisy między wymiarami, nie tylko ruch w obrębie jednego

Prawdziwa moc diagnostyczna ram bierze się z obserwowania, jak wymiary
poruszają się względem siebie. Rosnąca metryka wydajności przy spadającej
satysfakcji to sygnał ostrzegawczy wart natychmiastowego zbadania, który
może wskazywać na niezrównoważone tempo. Rosnąca metryka aktywności przy
płaskiej lub spadającej wydajności sugeruje pozorowaną pracę zamiast
prawdziwego postępu. Przeglądaj wszystkie pięć wymiarów razem w ustalonym
rytmie właśnie po to, by wyłapać te wzorce międzywymiarowe, a nie tylko
sprawdzać każdą liczbę osobno.

### Dobierz rytm pomiaru do każdego wymiaru

Niektóre wymiary SPACE zmieniają się powoli i najlepiej mierzyć je okresowo
(satysfakcja, zwykle w kwartalnych cyklach ankiet). Inne zmieniają się szybko
i zyskują na częstszym, zautomatyzowanym śledzeniu (aktywność oraz
efektywność i flow, oba w dużej mierze możliwe do zinstrumentowania w
istniejących systemach). Dopasuj rytm pomiaru do naturalnej szybkości zmian
każdego wymiaru, zamiast wciskać każdą metrykę w ten sam harmonogram
raportowania.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Zestaw metryk z jednego wymiaru (zwykle aktywności) | Prosty, tani, znajomy | Łatwy do zmanipulowania, pomija ludzki koszt niezrównoważonych praktyk |
| Pełne wdrożenie SPACE w pięciu wymiarach | Zrównoważone, odporne na manipulowanie na jednej osi, wyłapuje kompromisy | Wymaga więcej instrumentacji i inwestycji w ankiety |
| Stosowanie SPACE na poziomie zespołu | Zgodne ze zwalidowanym użyciem ram, chroni jednostki przed nadużyciem | Nie odpowie na pytania o poziom jednostki, których kierownictwo czasem chce |
| Stosowanie SPACE na poziomie jednostki | Dla części menedżerów wydaje się bardziej bezpośrednio użyteczne | Nadużywa ram; duże ryzyko manipulowania i spadku morale |

Główne napięcie to **kompletność pomiaru kontra koszt i złożoność**.
Pełne, zrównoważone wdrożenie SPACE wymaga więcej instrumentacji, więcej
wysiłku przy projektowaniu ankiet i więcej dyscypliny w przeglądaniu
wszystkich pięciu wymiarów razem niż prosty panel aktywności. Rozwiąż to
napięcie, zaczynając od naprawdę minimalnego, ale zrównoważonego zestawu,
czyli co najmniej jednej metryki z co najmniej trzech wymiarów, zamiast
całkowicie pomijać dyscyplinę ram albo próbować od pierwszego dnia
przytłaczającej, w pełni zinstrumentowanej wersji wszystkich pięciu wymiarów.

## Pytania do omówienia z zespołem

1. **Czy nasz obecny zestaw metryk produktywności czerpie z co najmniej
   trzech wymiarów SPACE, czy dominują w nim same dane o aktywności?**
   Sprawdź swój panel wprost względem pięciu wymiarów. Większość
   organizacji, uczciwie oceniona, jest znacznie bardziej nastawiona na
   aktywność, niż sobie uświadamia.

2. **Czy kiedykolwiek widzieliśmy, jak jeden wymiar SPACE się poprawia,
   a inny po cichu pogarsza, i czy wtedy to zauważyliśmy?** Taki
   kompromis międzywymiarowy to dokładnie to, co ramy mają wyłapywać.
   Przejrzyj ostatni rok pod kątem okresu, w którym metryki dostarczania
   się poprawiły, i zapytaj, co w tym samym oknie pokazywały dane o
   satysfakcji i dobrostanie.

3. **Czy dane SPACE bywają używane, nawet nieformalnie, do oceniania lub
   porównywania osób zamiast zespołów?** To nadużycie ram, które zaprasza
   do manipulowania. Bądź szczery co do tego, jak te metryki są faktycznie
   omawiane w praktyce, a nie tylko co mówi polityka.

4. **Jak zauważylibyśmy, że zespół poprawił metryki wydajności kosztem
   niezrównoważonego tempa?** Bez danych o satysfakcji i dobrostanie
   przeglądanych razem z danymi o wydajności taki kompromis jest
   niewidoczny, aż wypłynie jako rotacja pracowników albo spadek jakości
   po kilku miesiącach.

5. **Jaki jest nasz rytm pomiaru dla każdego z pięciu wymiarów i czy
   odpowiada on temu, jak szybko wymiar faktycznie się zmienia?**
   Kwartalna ankieta satysfakcji połączona z danymi o aktywności w czasie
   rzeczywistym to rozsądna rozbieżność rytmów. Ten sam rytm zastosowany do
   wszystkich pięciu bez namysłu już nie.

6. **Gdyby jutro dołączył nowy menedżer inżynierii i spojrzał tylko na nasz
   panel, czy dostałby zrównoważony obraz produktywności zespołu, czy
   przekrzywiony?** To praktyczny test, czy nasz zestaw metryk naprawdę
   osiągnął równowagę SPACE, czy tylko skłania się ku ramom, a w praktyce
   nadal dominuje w nim aktywność.

## Perspektywa sektorowa

**Startup.** Pełne wdrożenie pięciu wymiarów to zwykle przesada dla garstki
inżynierów, którzy rozmawiają codziennie i bezpośrednio wyczuwają
satysfakcję i zdrowie współpracy. Jeden nawyk wart wczesnego przyjęcia to
opieranie się pokusie metryk wyłącznie aktywnościowych, gdy zespół zaczyna
rosnąć ponad rozmiar, przy którym nieformalna orientacja ogarnia wszystko.

**Mała firma.** Bez dedykowanej funkcji analityki ludzi trzymaj się prostoty:
połącz dane o dostarczaniu, które już masz (temat 2.10), z krótkim,
nieformalnym, regularnym sprawdzaniem satysfakcji, nawet prostą ankietą
pulsu z jednym pytaniem. Taka minimalna para oddaje główną dyscyplinę ram
znacznie lepiej niż panel samej aktywności.

**Duże przedsiębiorstwo.** Tu pełne ramy zasługują na swoją złożoność.
Ustandaryzuj zrównoważony zestaw metryk SPACE w zespołach, aby kierownictwo
mogło porównywać produktywność uczciwie, zamiast zdawać się na zespół z
najbardziej imponującym wykresem commitów, i zainwestuj w infrastrukturę
ankiet z tematu 3.7, żeby dane o satysfakcji i współpracy były tak
wiarygodne jak obiektywna instrumentacja.

**Administracja publiczna.** Presja rekrutacji i utrzymania ludzi, zwłaszcza
tam, gdzie płace w sektorze publicznym nie zawsze mogą konkurować z ofertami
sektora prywatnego, czyni dane o satysfakcji i dobrostanie sprawą naprawdę
strategiczną, a nie miękkim dodatkiem. Traktuj SPACE tak poważnie jak
metryki dostarczania w planowaniu kadr i uzasadnianiu budżetu, bo koszt
utraty doświadczonego inżyniera przez wypalenie mierzy się w miesiącach
wiedzy instytucjonalnej, której następca nie może od razu dostarczyć.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii w firmie programistycznej
przez lata śledziło liczbę commitów i ukończone punkty historii jako główny
sygnał produktywności. Po przyjęciu pełniejszego zestawu metryk SPACE,
w tym kwartalnej ankiety satysfakcji i analizy sieci współpracy (temat 3.5),
kierownictwo odkryło, że zespół z najwyższymi liczbami aktywności miał też
najniższe wyniki satysfakcji i najwyższy odsetek dobrowolnych odejść w
kolejnym roku. Same liczby aktywności aktywnie wprowadzały w błąd. Pełniejszy
obraz doprowadził do świadomego zmniejszenia równoległego obciążenia tego
zespołu (zasada WIP z tematu 2.5 zastosowana na poziomie ludzkim) i
mierzalnego odbudowania satysfakcji, a z czasem także trwałej wydajności.

**Administracja publiczna.** Krajowa agencja usług cyfrowych, konkurująca o
inżynierów z wynagrodzeniami sektora prywatnego, których nie mogła
dorównać, przyjęła zrównoważony zestaw metryk SPACE właśnie po to, by
uzasadnić niepieniężne inwestycje w utrzymanie ludzi: lepsze narzędzia,
chroniony czas skupienia i mniejsze tarcie procesowe. Dane z ankiet
satysfakcji połączone z metrykami efektywności i flow (temat 3.6)
pokazały, że to częstość przerwań, a nie wynagrodzenie, była najsilniejszym
predyktorem zamiaru odejścia w danych z rozmów wyjściowych. Późniejsza
inwestycja agencji w politykę chronionego czasu skupienia, uzasadniona
wprost tymi danymi SPACE, korelowała z mierzalną poprawą utrzymania ludzi w
ciągu kolejnych osiemnastu miesięcy.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z pełnego przyjęcia SPACE to uniknięta rotacja pracowników i uniknięty
spadek jakości wywołany wypaleniem, a oba są znacznie droższe niż koszt
instrumentacji ram. Zestaw metryk samej aktywności może wyglądać znakomicie
przez rok czy dwa, aż koszt ludzki dogoni wszystko naraz, a wtedy koszt
zastąpienia utraconej wiedzy i odbudowy zdrowia zespołu przyćmiewa każdy
wzrost produktywności, jaki wąski zestaw metryk kiedykolwiek pokazywał.

Całkowity koszt posiadania obejmuje infrastrukturę ankiet (temat 3.7) i
dyscyplinę przeglądania wszystkich pięciu wymiarów razem, zamiast zdawania
się na ten, który najłatwiej zmierzyć. Warto ten koszt ponieść: przykład
z przedsiębiorstwa powyżej pokazuje realny, możliwy do odkrycia wzorzec,
czyli wysoką aktywność maskującą wysokie ryzyko odejść, którego węższy
zestaw metryk nigdy by nie ujawnił, zanim szkoda zostałaby wyrządzona.

## Antywzorce i pułapki

- **Przyjęcie SPACE tylko z nazwy, przy dominacji aktywności w praktyce:**
  najczęstszy tryb porażki, który niweczy cały sens ram.
- **Stosowanie wymiarów SPACE do indywidualnych kart wyników:** nadużywa
  ram zwalidowanych dla wglądu na poziomie zespołu i systemu.
- **Przeglądanie wymiarów w izolacji zamiast obserwowania kompromisów
  międzywymiarowych:** pomija wzorzec, który SPACE ma specjalnie wyłapywać.
- **Narzucanie każdemu wymiarowi tego samego rytmu pomiaru:** marnuje wysiłek
  na wymiarach zmieniających się powoli i niedomierza te, które zmieniają się
  szybko.
- **Uznawanie pojedynczego wyniku ankiety satysfakcji za wystarczający bez
  danych obiektywnych:** gubi równowagę między źródłami subiektywnymi i
  obiektywnymi, której wymagają ramy.
- **Ignorowanie pogarszającego się trendu w jednym wymiarze, bo inny wygląda
  dobrze:** dokładnie ta porażka, której ma zapobiegać międzywymiarowa
  dyscyplina ram.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Produktywność mierzy się wyłącznie metrykami
  aktywności, bez zbierania danych o satysfakcji, współpracy ani
  efektywności.
- **Poziom 2, Rozwój:** Niektóre dodatkowe wymiary mierzy się nieformalnie,
  ale nie ma spójnego przeglądu międzywymiarowego ani standardu minimalnego
  składu.
- **Poziom 3, Standaryzacja:** Zrównoważony zestaw metryk z co najmniej
  trzech wymiarów SPACE jest stosowany spójnie na poziomie zespołu w całej
  organizacji.
- **Poziom 4, Zarządzanie:** Wszystkie pięć wymiarów jest przeglądanych
  razem w regularnym rytmie, kompromisy międzywymiarowe są aktywnie badane,
  a ramy wpływają na realne decyzje kadrowe i procesowe.
- **Poziom 5, Orkiestracja:** Dane SPACE bezpośrednio kształtują planowanie
  kadr i inwestycje w utrzymanie ludzi, a organizacja potrafi wskazać
  konkretne interwencje, oparte na wzorcach międzywymiarowych, które
  mierzalnie poprawiły razem zarówno dostarczanie, jak i dobrostan
  programistów.

## Pomysły do dyskusji

1. Który wymiar SPACE jest w naszym obecnym zestawie metryk najmniej mierzony?
2. Czy kiedykolwiek widzieliśmy, jak aktywność zespołu rośnie, a satysfakcja po cichu spada?
3. Jak dziś wyłapalibyśmy zespół, który wymienia długoterminową trwałość na krótkoterminową produkcję?
4. Czy jakiekolwiek dane zbliżone do SPACE służą dziś do oceniania osób zamiast zespołów?
5. Jak konkretnie wyglądałby dla nas naprawdę zrównoważony panel produktywności?

## Kluczowe wnioski

- SPACE obejmuje pięć wymiarów, **satysfakcję i dobrostan, wydajność,
  aktywność, komunikację i współpracę oraz efektywność i flow**, a żaden z
  nich sam nie zasługuje na zaufanie.
- Zbuduj zestaw metryk z **co najmniej trzech wymiarów**, łącząc obiektywne
  i subiektywne źródła danych.
- Traktuj **metryki aktywności jako kontekst**, nigdy jako główny sygnał
  produktywności (temat 3.4).
- Stosuj SPACE na **poziomie zespołu i systemu**, a nie jako indywidualną
  kartę wyników.
- Przeglądaj wymiary razem, wypatrując **kompromisów międzywymiarowych**, a
  nie tylko ruchu w obrębie któregokolwiek z nich.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): oryginalny artykuł o ramach SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (fundament badawczy wspólny z metrykami DORA).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco i Timothy Lister
  (klasyczny argument za traktowaniem produktywności programistów jako
  pytania ludzkiego, a nie czysto mechanicznego).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (badania nad motywacją istotne dla pomiaru satysfakcji i dobrostanu).
