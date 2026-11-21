# 3.0 Wprowadzenie do części 3: Doświadczenie programisty i ramy SPACE

Część 2 mierzyła dostarczanie z zewnątrz: jak szybko i jak bezpiecznie kod
przechodzi przez potok. Ta część mierzy doświadczenie ludzi, którzy ten kod
tworzą. Istnieje dlatego, że sam zestaw metryk dostarczania może wyglądać
znakomicie, podczas gdy ludzie za nim się wypalają, toną w przerwaniach albo
po cichu tracą zaangażowanie. Organizacja, która obserwuje wyłącznie metryki
DORA, może je poprawiać przez rok czy dwa, naciskając zespół coraz mocniej,
aż do chwili, gdy rotacja pracowników, spadek jakości albo wypalenie wymażą
cały zysk naraz. Ta część jest przeciwwagą.

Jej osią są [ramy SPACE](https://queue.acm.org/detail.cfm?id=3454124),
opracowane przez badaczy z Microsoftu, GitHuba i University of Victoria
właśnie jako remedium na branżowy nawyk mierzenia produktywności programistów
jednym, łatwym do zmanipulowania wskaźnikiem zastępczym, takim jak liczba
linii kodu czy liczba commitów. SPACE obejmuje pięć wymiarów: satysfakcję
i dobrostan, wydajność, aktywność, komunikację i współpracę oraz efektywność
i flow. Podstawowa dyscyplina tych ram, a zarazem powód, dla którego ta część
traktuje je z takim samym rygorem, z jakim część 2 traktuje własne metryki
przepływu, jest taka: żaden pojedynczy wymiar sam w sobie nie zasługuje na
zaufanie. Wartość wynika właśnie z patrzenia na wszystkie pięć naraz, tak aby
zespół nie mógł wyglądać dobrze na jednej osi, po cichu psując inną.

W dużych zespołach metryki doświadczenia programisty odpowiadają na pytanie,
na które DORA nie odpowie: czy taka wydajność dostarczania jest trwała i czy
organizacja zatrzymuje ludzi, którzy ją tworzą. Duże przedsiębiorstwa, które
pomijają tę część, zwykle odkrywają koszt w danych o rotacji i w rozmowach
wyjściowych, długo po tym, jak szkoda została wyrządzona. Administracja
publiczna, często związana ograniczeniami płacowymi sektora publicznego,
które utrudniają konkurowanie samym wynagrodzeniem, ma szczególnie mocne
powody, by traktować doświadczenie programisty jako pełnoprawną, aktywnie
zarządzaną sprawę, a nie dodatek na końcu listy.

## Tematy w tej części

- **3.1 Ramy SPACE:** Wszystkie pięć wymiarów razem, dlaczego żaden z nich
  sam nie zasługuje na zaufanie i jak zbudować z nich naprawdę zrównoważony
  zestaw metryk.
- **3.2 Metryki satysfakcji i dobrostanu:** Pomiar spełnienia, frustracji
  i ryzyka wypalenia, czyli wymiaru, którego żadna telemetria systemowa nie
  zaobserwuje bezpośrednio.
- **3.3 Metryki wydajności i wskaźniki zastępcze rezultatów:** Wymiar, który
  najłatwiej pomylić z aktywnością, i jak zamiast tego mierzyć rzeczywisty
  wkład w rezultaty.
- **3.4 Metryki aktywności i ich granice:** Liczba commitów, liczba linii
  kodu i powód, dla którego to najniebezpieczniejszy wymiar do przecenienia.
- **3.5 Metryki komunikacji i współpracy:** Jak informacja naprawdę płynie
  między ludźmi i zespołami oraz jak wygląda zdrowy wzorzec.
- **3.6 Efektywność i flow: głęboka praca i przerwania:** Ochrona
  nieprzerwanego czasu, którego wymaga prawdziwa praca inżynierska, i pomiar
  tarcia, które go nadszarpuje.
- **3.7 Ankiety doświadczenia programisty i metryki DevEx:** Jak
  przeprowadzić ankietę, która daje wiarygodny sygnał, a nie konkurs
  popularności, i jak połączyć ją z danymi obiektywnymi.

## Jak te tematy się ze sobą wiążą

Temat 3.1 przedstawia wszystkie pięć wymiarów SPACE razem, a tematy od 3.2
do 3.6 omawiają potem każdy wymiar po kolei i naprawdę dogłębnie, w
kolejności, w jakiej przedstawiają je badacze SPACE. Temat 3.7 zamyka część
praktyczną mechaniką projektowania ankiet, ponieważ satysfakcja, wydajność
i współpraca opierają się częściowo na danych z samooceny (rozróżnienie
instrumentacji i samooceny z tematu 1.5 jest w tej części wprost istotne),
a źle zaprojektowana ankieta podważa każdy z poprzednich tematów.

Główna dyscyplina tej części, czyli równowaga między wymiarami zamiast siły
w jednym, to najwyraźniejszy przykład w tej książce zasady rezultatów
ponad produkcją z tematu 1.3, zastosowanej do ludzi, a nie do potoku
dostarczania. Aktywność (temat 3.4) jest wymiarem SPACE najbardziej
zbliżonym do czystej metryki produkcji i ta część traktuje ją odpowiednio:
jest użyteczna jako jedno z pięciu wejść, a niebezpieczna jako samodzielny
sygnał. Czytana razem z częścią 2, ta część dopełnia obraz, którego sama
DORA dać nie może: nie tylko czy oprogramowanie trafia do użytkowników
szybko i bezpiecznie, ale też czy ludzie, którzy je dostarczają, mogą
utrzymać to tempo.
