# 2.3 Tempo przepływu i rozkład przepływu

## Przegląd i motywacja

**Tempo przepływu** to liczba elementów przepływu (temat 2.2) ukończonych w
danym okresie, miara [przepustowości](https://en.wikipedia.org/wiki/Throughput)
we Flow Framework. **Rozkład przepływu** to proporcja każdego typu elementu
przepływu, funkcji, defektów, ryzyka i długu, wśród elementów ukończonych w tym
samym okresie. Te dwie metryki są zaprojektowane do czytania razem: samo tempo
odpowiada na "ile dostarczyliśmy", a sam rozkład na "jakiego rodzaju to była
praca", ale żadne z tych pytań niewiele znaczy bez drugiego. Zespół może
podnieść swoje tempo, podczas gdy jego rozkład po cichu przesuwa się od funkcji
ku poprawkom defektów, co wygląda jak przyspieszenie na wykresie tempa, a jest
w rzeczywistości objawem spadającej jakości.

To parowanie jest tą samą dyscypliną, której temat 1.2 wymaga od każdej rodziny
metryk w tej książce: nigdy nie raportuj liczby dotyczącej szybkości bez bariery
ochronnej, która pokazuje, co ta szybkość kosztowała. Tempo przepływu jest
najbardziej bezpośrednim uogólnieniem metryki przepustowości w tej części,
bliższym w duchu częstotliwości wdrożeń (temat 2.10) niż jakakolwiek inna
pojedyncza liczba w tej książce, ale uwzględniającym typ elementu w sposób, w jaki
częstotliwość wdrożeń nigdy tego nie robiła. Częstotliwość wdrożeń mówi, jak
często kod trafia na produkcję; tempo przepływu, sparowane z rozkładem, mówi,
jak często wartość trafia na produkcję i jakiego rodzaju jest to wartość.

Dla dużych zespołów prowadzących wiele równoległych strumieni wartości to
parowanie odsłania wzorzec, który pojedyncza liczba przepustowości ukrywa
całkowicie: strumień wartości, którego tempo wygląda zdrowo, podczas gdy jego
rozkład po cichu zdryfował ku niemal czystej pracy nad funkcjami, w milczeniu
głodząc zdolność na dług i ryzyko, którą temat 2.2 ostrzegał, że trzeba celowo
chronić. Organizacje przedsiębiorstw porównujące przepustowość między liniami
produktowymi i agencje rządowe raportujące produkcję dostarczania organom
nadzoru potrzebują tego parowania, by nie mylić surowej produkcji z prawdziwym,
zrównoważonym postępem.

## Kluczowe zasady

- **Tempo bez rozkładu ukrywa to, co faktycznie dostarczono.** Rosnąca liczba
  elementów nie mówi nic o tym, czy ta liczba jest zdrowa, zmanipulowana, czy po
  cichu przechylona ku najłatwiejszej dostępnej pracy.
- **Rozkład bez tempa ukrywa skalę.** Dobrze wyglądający podział procentowy
  niewiele znaczy, jeśli nie wiesz też, jak dużą pracę całkowitą reprezentuje.
- **Obie metryki muszą być zawsze raportowane razem.** To bezpośrednie
  zastosowanie zasady parowania z barierą ochronną z tematu 1.2 do danych o
  przepływie.
- **Tempo jest narażone na to samo manipulowanie przez podstawienie co każda
  metryka zliczająca elementy.** Rozbijanie trudnej pracy na wiele małych,
  łatwych elementów zawyża liczbę, nie dostarczając proporcjonalnie więcej
  wartości.
- **Zdrowy rozkład zależy od kontekstu, a nie jest stałym celem.** Temat 2.2
  omawia to dogłębnie; tempo i rozkład należy zawsze interpretować względem celu,
  jaki implikuje kontekst.

## Rekomendacje

### Raportuj tempo przepływu jako linię trendu, nigdy jako liczbę z pojedynczego okresu

Liczba elementów z pojedynczego okresu jest zaszumiona i łatwo ją źle odczytać.
Wykreśl tempo przepływu w kilku kolejnych okresach i patrz na trend, a nie na
jakikolwiek pojedynczy punkt danych, ta sama dyscyplina, którą temat 1.6
zaleca dla każdej metryki szeregu czasowego podatnej na naturalną zmienność.

### Nigdy nie przedstawiaj tempa przepływu bez rozkładu obok

Traktuj to jako twardą regułę dla każdego panelu lub raportu, a nie miły
dodatek. Wykres tempa pokazany samotnie zaprasza dokładnie do błędnego odczytu,
od którego zaczyna się ten temat: rosnąca przepustowość, która jest w
rzeczywistości rosnącym udziałem poprawek albo łatwej pracy nad funkcjami
wypierającej zdolność na dług i ryzyko. Umieszczaj oba na tym samym widoku,
zawsze.

### Waż tempo rozmiarem lub złożonością, gdy rozmiary elementów bardzo się różnią

Surowa liczba elementów traktuje jednowierszową zmianę konfiguracji i
wielotygodniową migrację architektoniczną jako równoważne, co zaprasza to samo
manipulowanie przez podstawienie, które ta książka już nazwała dla częstotliwości
wdrożeń (temat 2.10): rozbijanie trudnej pracy na wiele małych elementów zawyża
liczbę, nie dostarczając proporcjonalnie więcej. Tam, gdzie rozmiary elementów
bardzo się różnią, waż tempo zgrubną estymatą rozmiaru lub złożoności albo śledź
średni rozmiar elementu obok surowej liczby, aby malejący średni rozmiar obok
rosnącej liczby był widoczny, a nie ukryty.

### Obserwuj dryf rozkładu przepływu, a nie tylko jego obecną migawkę

Najużyteczniejszym sygnałem w rozkładzie przepływu rzadko są dokładne
procenty z tego okresu; jest nim kierunek zmiany w kilku okresach. Stały dryf,
funkcje rosną, podczas gdy dług i ryzyko po cichu się kurczą, warto poruszyć z
interesariuszami na długo, zanim stanie się tym rodzajem problemu jakości lub
bezpieczeństwa, który według tematu 2.2 gromadzi się niewidocznie pod wzorcem
fabryki funkcji.

### Porównuj tempo przepływu między strumieniami wartości tylko z naprawdę dużą ostrożnością

Dwa strumienie wartości o różnej granularności elementów, różnej wielkości
zespołów lub różnych fazach produktu nie są wprost porównywalne wyłącznie na
podstawie surowego tempa, ten sam problem uczciwości, który temat 2.10 nazywa dla
częstotliwości wdrożeń między zespołami. Używaj tempa najpierw dla trendu
własnego strumienia wartości i dopiero po potwierdzeniu naprawdę porównywalnych
definicji i granularności elementów próbuj porównań między strumieniami.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Samo surowe tempo liczone elementami | Proste do obliczenia i wyjaśnienia | Narażone na manipulowanie przez podstawienie; ukrywa, jakiego rodzaju wartość dostarczono |
| Tempo sparowane z rozkładem | Pokazuje razem skalę i mieszankę wartości | Wymaga zdyscyplinowanej klasyfikacji elementów przepływu (temat 2.2), by miało sens |
| Tempo ważone rozmiarem | Opiera się manipulowaniu przez podstawienie z rozbijania elementów | Wymaga spójnej, uzgodnionej metody szacowania rozmiaru w zespole |
| Porównanie tempa między strumieniami wartości | Użyteczne dla decyzji inwestycyjnych na poziomie portfela | Łatwo o niesprawiedliwość bez potwierdzenia naprawdę porównywalnych definicji elementów |

Centralne napięcie to **prostota kontra odporność na manipulowanie**. Surowa
liczba elementów jest najłatwiejsza do obliczenia i wyjaśnienia, ale też
najłatwiejsza do zawyżenia przez rozbicie trudnej pracy na wiele małych kawałków.
Rozwiąż to napięcie, utrzymując metrykę główną prostą, surowe tempo sparowane z
rozkładem, a ważenie rozmiarem rezerwując dla strumieni wartości, w których
rozmiary elementów różnią się na tyle, że prosta liczba stała się aktywnie
myląca.

## Pytania do omówienia z zespołem

1. **Gdy raportujemy tempo przepływu, czy rozkład przepływu jest zawsze
   pokazywany obok, czy tempo bywa samotne?** Liczba tempa bez rozkładu jest
   niepełnym obrazem według głównej zasady tego tematu. Sprawdźcie swoje
   faktyczne panele i raporty pod kątem tej luki.

2. **Czy nasz średni rozmiar elementu zmienił się wraz z rosnącym tempem i czy
   byśmy o tym wiedzieli?** Malejący średni rozmiar obok rosnącej liczby to
   specyficzna sygnatura manipulowania przez podstawienie zastosowanego do
   elementów przepływu. Pobierzcie faktyczne dane zamiast zakładać, że wzorca
   nie ma.

3. **Czy kiedykolwiek porównywaliśmy nasze tempo z tempem innego zespołu, nie
   potwierdzając, że nasze definicje i granularność elementów faktycznie się
   zgadzają?** Niesprawiedliwe porównanie może popchnąć zespół ku manipulowaniu
   własnymi liczbami tylko po to, by wyglądać porównywalnie, co odbija to samo
   ryzyko, które ta książka już nazwała dla częstotliwości wdrożeń.

4. **Czy nasz rozkład przepływu dryfował w jednym kierunku w ostatnich kilku
   okresach i czy ktoś zdecydował o tym celowo?** Powolny dryf łatwo przeoczyć
   okres po okresie. Wykreślcie kilka okresów razem i uczciwie szukajcie trendu,
   zanim założycie, że obecny podział jest stabilny.

5. **Gdyby ktoś chciał zawyżyć nasze tempo przepływu bez wykonywania
   więcej realnej pracy, jaki byłby najłatwiejszy sposób i czy nasze obecne
   raportowanie by to wychwyciło?** Przejdźcie przez konkretną mechanikę
   rozbijania trudnych elementów na łatwe i omówcie, czy wasz panel faktycznie
   ujawniłby ten wzorzec.

6. **Czy nasze liczby tempa i rozkładu docierają do interesariuszy
   biznesowych razem, czy w górę wędruje tylko nagłówek tempa?** Zasada
   parowania chroni przed błędnym odczytem tylko wtedy, gdy obie połowy
   faktycznie widzą ludzie podejmujący decyzje na podstawie danych.

## Perspektywa sektorowa

**Startup.** Tempo przepływu zwykle łatwo śledzić nieformalnie w tej skali, bo
cały zespół ma już zgrubne poczucie przepustowości. Użyteczną dyscypliną jest
parowanie go z rozkładem choćby nieformalnie, aby założyciel nie pomylił
rosnącej liczby zamkniętych zgłoszeń z prawdziwym postępem funkcji, gdy liczba
faktycznie dominuje wczesnofazowe naprawianie błędów.

**Mała firma.** Śledź tempo i rozkład razem w jakimkolwiek lekkim narzędziu, którego
już używasz do klasyfikacji elementów przepływu (temat 2.2); w tej skali nie jest
potrzebna dedykowana platforma analityczna. Nawyk oglądania ich zawsze obok
siebie liczy się więcej niż jakiekolwiek wyrafinowanie narzędzi.

**Duże przedsiębiorstwo.** Porównanie tempa między strumieniami wartości kusi w
tej skali do priorytetyzacji na poziomie portfela i tu też ryzyko niesprawiedliwości
jest największe, bo różne linie produktowe słusznie mają bardzo różną
granularność elementów. Zainwestuj w potwierdzenie porównywalnych definicji, zanim
użyjesz porównań tempa do uzasadniania decyzji inwestycyjnych między zespołami.

**Administracja publiczna.** Tempo przepływu sparowane z rozkładem daje liderowi
technologii w sektorze publicznym znacznie silniejszą bazę dowodową do
raportowania produkcji dostarczania organom nadzoru niż sama surowa
przepustowość, bo może pokazać nie tylko, ile dostarczono, ale że mieszanka
odzwierciedla celową, uzasadnioną alokację między nową funkcjonalność, usuwanie
defektów i zarządzanie ryzykiem.

## Przykłady

**Przedsiębiorstwo.** Zespół platformy dostawcy oprogramowania raportował stale
rosnące tempo przepływu przez trzy kolejne kwartały, trend, który kierownictwo
świętowało jako przyspieszenie dostarczania. Bliższe spojrzenie na rozkład
przepływu, zażądane dopiero po eskalacji klienta w sprawie powtarzających się
błędów, ujawniło, że udział "funkcji" w tym rosnącym tempie faktycznie spadł z
70% do 45% w tym samym okresie, a lukę wypełniły elementy napraw defektów. Zespół
dostarczał więcej elementów, ale malejąca ich część była nową wartością; reszta
to poprawki, które sam wykres tempa całkowicie zasłaniał.

**Administracja publiczna.** Zespół platformy danych krajowego urzędu
statystycznego śledził tempo przepływu jako główną metrykę dostarczania do
rocznego raportu dla swojej rady nadzorczej. Gdy członek rady zapytał, jaka
część tego tempa przedstawia nową funkcjonalność dla publiczności, zespół odkrył,
że nigdy nie rozbił liczby według typu elementu przepływu i nie mógł odpowiedzieć
wprost. Agencja przyjęła następnie raportowanie sparowanego tempa i rozkładu,
które ujawniło, że praca nad ryzykiem i zgodnością, wywołana nową regulacją o
ochronie danych, słusznie pochłonęła rosnący udział zdolności, uzasadniona
alokacja, którą rada chętnie zaakceptowała, gdy pokazano ją jawnie, zamiast
zostawiać niejawną w niewyjaśnionym spadku tempa.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z parowania tempa z rozkładem jest uczciwszy, lepiej uzasadniony obraz
produkcji dostarczania, niż daje którakolwiek z tych liczb osobno. Powyższy
przykład z dostawcą oprogramowania, odkrycie, że rosnące tempo faktycznie
odzwierciedlało spadającą produkcję funkcji, to dokładnie ten rodzaj błędnego
odczytu, któremu to parowanie zapobiega, a wychwycenie tego wzorca wcześnie jest
znacznie tańsze niż odkrycie go dopiero wtedy, gdy problem jakości widoczny dla
klienta wymusi pytanie.

Całkowity koszt posiadania (TCO) jest minimalny, gdy klasyfikacja elementów
przepływu (temat 2.2) już funkcjonuje: rozkład to prosta agregacja już
sklasyfikowanych elementów, a dyscyplina pokazywania obu metryk razem to
konwencja raportowania, a nie inwestycja techniczna. Większość kosztu
rekomendacji tego tematu została już zapłacona, gdy organizacja przyjęła uczciwą
klasyfikację elementów przepływu.

## Antywzorce i pułapki

- **Raportowanie tempa przepływu bez rozkładu:** sposób manipulowania leżący w
  sercu tego tematu. Zespół pod presją dostarczania może podnieść liczbę
  elementów, wybierając małą, łatwą pracę nad funkcjami i unikając trudniejszych
  elementów długu, ryzyka czy defektów, albo rozbijając duże elementy na wiele
  małych, a wykres tempa pokazany samotnie odczyta się jako przyspieszenie, a nie
  faktyczna zmiana w tym, co jest dostarczane. Bariera ochronna to ta sama
  dyscyplina parowania, której temat 1.2 wymaga w całej książce: nigdy nie
  pokazuj tempa bez rozkładu i okresowo sprawdzaj średni rozmiar elementu obok
  liczby, by wychwycić konkretnie rozbijanie.
- **Porównywanie tempa między strumieniami wartości o różnej granularności
  elementów:** daje niesprawiedliwe, mylące porównanie.
- **Traktowanie rozkładu z jednego okresu jako stabilnego:** pomija powolny,
  znaczący dryf, który ujawnia tylko widok trendu.
- **Pozwalanie, by do interesariuszy biznesowych docierał tylko nagłówek
  tempa:** traci całą ochronną wartość zasady parowania.
- **Ignorowanie średniego rozmiaru elementu przy świętowaniu rosnącego tempa:**
  pomija specyficzną sygnaturę manipulowania przez podstawienie.
- **Ustalanie celu tempa bez odniesienia do rozkładu:** zaprasza dokładnie do
  manipulowania, przed którym ten temat ostrzega po imieniu.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Tempo przepływu, o ile jest śledzone, jest raportowane
  samotnie, bez danych o rozkładzie, a nikt nie sprawdził manipulowania przez
  podstawienie.
- **Poziom 2, Rozwój:** Niektóre zespoły śledzą rozkład, ale nie jest on
  konsekwentnie parowany z tempem w raportowaniu ani przeglądany jako trend.
- **Poziom 3, Standaryzacja:** Tempo i rozkład są zawsze raportowane razem,
  oglądane jako trendy, a średni rozmiar elementu jest monitorowany, by wychwytywać
  manipulowanie przez podstawienie.
- **Poziom 4, Zarządzanie:** Dryf rozkładu jest badany proaktywnie, zanim stanie
  się problemem jakości lub bezpieczeństwa, a porównania tempa między strumieniami
  wartości są robione dopiero po potwierdzeniu naprawdę porównywalnych definicji
  elementów.
- **Poziom 5, Orkiestracja:** Tempo i rozkład bezpośrednio informują decyzje
  inwestycyjne na poziomie portfela, a organizacja potrafi wskazać konkretne
  przypadki, w których dryf rozkładu został wychwycony i skorygowany, zanim
  spowodował widoczną awarię.

## Pomysły do dyskusji

1. Czy nasze raportowanie tempa przepływu zawsze obejmuje rozkład, czy kiedykolwiek pokazaliśmy jedno bez drugiego?
2. Czy nasz średni rozmiar elementu przepływu zmienił się ostatnio wraz ze zmianą tempa?
3. Czy wiedzielibyśmy, że nasz rozkład przepływu stale dryfował przez ostatnie kilka kwartałów?
4. Co byłoby potrzebne, by ktoś zawyżył nasze tempo bez dostarczania więcej realnej wartości, i czy byśmy to zauważyli?

## Kluczowe wnioski

- **Tempo przepływu** mierzy przepustowość; **rozkład przepływu** mierzy, jakiego
  rodzaju pracę ta przepustowość reprezentuje. Raportuj je razem, zawsze.
- To parowanie jest bezpośrednim zastosowaniem **zasady bariery ochronnej** z
  tematu 1.2: nigdy nie pokazuj liczby dotyczącej szybkości bez kontekstu tego, co
  kosztowała.
- Centralnym sposobem manipulowania w tym temacie jest **raportowanie samego
  tempa**, które może ukryć przesunięcie ku łatwej pracy nad funkcjami lub
  rozbijanie elementów zawyżające liczbę bez dostarczania proporcjonalnej
  wartości.
- **Dryf rozkładu** jest najlepiej widoczny jako trend w kilku okresach, a nie w
  migawce z jednego okresu.
- **Porównania tempa między strumieniami wartości** potrzebują naprawdę
  porównywalnych definicji elementów, by były uczciwe; bez tego bardziej mylą, niż
  informują.

## Bibliografia i dalsza lektura

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
