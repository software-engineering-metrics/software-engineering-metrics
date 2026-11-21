# 6.1 Wskaźniki poziomu usług, cele i budżety błędów

## Przegląd i motywacja

**[Inżynieria niezawodności usług](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, dyscyplina zapoczątkowana w Google i opisana w książce *Site
Reliability Engineering*, wniosła słownictwo, na którym ten temat bezpośrednio się
opiera: **wskaźnik poziomu usługi (SLI)** to bezpośrednio mierzony sygnał o
kondycji usługi, opóźnienie żądań, odsetek błędów, dostępność. **Cel poziomu
usługi (SLO)** to docelowy zakres tego wskaźnika, na przykład 99,9% żądań kończy
się sukcesem w ciągu 200 milisekund. A **budżet błędów** to dozwolony niedobór,
0,1% żądań, którym wolno zawieść, traktowany nie jako defekt do wyeliminowania,
lecz jako zasób do wydawania, który można świadomie użyć na podjęcie ryzyka:
wypuszczenie ryzykownej zmiany, przeprowadzenie eksperymentu albo po prostu
przyjęcie, że doskonała niezawodność nie jest ani osiągalna, ani, od pewnego
punktu, warta swojego kosztu.

Ta ostatnia idea, budżet błędów jako zasób do wydawania, a nie liczba do
minimalizowania do zera, jest najważniejszym pojedynczym pojęciem tego tematu i
prawdopodobnie całej tej części. Rozwiązuje napięcie, które trapi wiele
organizacji: inżynieria chce wypuszczać funkcje i podejmować rozsądne ryzyko;
operacje chcą maksymalnej stabilności. Bez wspólnego, skwantyfikowanego budżetu
błędów to staje się niekończącymi się, nasyconymi polityką negocjacjami. Z nim
staje się prostą, obiektywną regułą: wydawaj swobodnie, dopóki budżet jest, a gdy
się wyczerpie, zwolnij i automatycznie przyznaj priorytet pracom nad
stabilnością. To zamienia filozoficzny spór w arytmetyczny.

W dużych zespołach SLO i budżety błędów sprawiają, że niezawodność jest
mierzalna i negocjowalna, a nie nieosiągalnym, niewypowiedzianym absolutem, któremu
każdy zespół po cichu nie sprosta, czując przy tym mgliste poczucie winy. Duże
przedsiębiorstwa używają SLO do ustalania jasnych, umownych oczekiwań między
zespołami i wobec klientów; organizacje publiczne prowadzące krytyczną
infrastrukturę publiczną używają ich do wyznaczania dających się obronić,
publicznie uzasadnialnych celów niezawodności zamiast niemożliwego standardu
doskonałości, którego żaden realny system nie utrzyma.

## Kluczowe zasady

- **100% niezawodności to zły cel dla niemal każdego systemu.** Zwykle jest
  nieosiągalne, a pogoń za nim od pewnego punktu aktywnie wymienia tempo na brak
  znaczącej korzyści dla użytkowników.
- **SLO powinno odzwierciedlać to, co użytkownicy faktycznie zauważają i co ich
  obchodzi**, a nie arbitralną okrągłą liczbę wybraną dlatego, że brzmi
  uspokajająco.
- **Budżet błędów zamienia niezawodność w zasób do wydawania**, dając inżynierii
  i operacjom wspólną, obiektywną regułę, kiedy wypuszczać szybko, a kiedy
  zwolnić.
- **SLI muszą być mierzone z faktycznego doświadczenia użytkownika**, gdzie tylko
  to możliwe, a nie tylko z raportowanej przez system własnej kondycji.
- **Wyczerpanie budżetu błędów uruchamia z góry ustaloną, uzgodnioną reakcję**,
  a nie doraźny spór za każdym razem.

## Rekomendacje

### Wybieraj SLI odzwierciedlające prawdziwe doświadczenie użytkownika

Wybieraj wskaźniki mierzone jak najbliżej faktycznego doświadczenia użytkownika:
odsetek udanych żądań i opóźnienie mierzone na brzegu albo na load balancerze, a
nie tylko wewnętrzne kontrole kondycji usług, które mogą raportować „zdrowy",
gdy użytkownicy doświadczają realnych problemów. SLI, który mierzy coś, czego
użytkownik nigdy nie zauważa, wewnętrzny komponent technicznie działający, gdy
całe żądanie i tak się nie udaje, mierzy złą rzecz, choćby łatwo było go
zinstrumentować.

### Ustaw cel SLO na podstawie tego, czego użytkownicy naprawdę potrzebują, a
nie arbitralnej okrągłej liczby

Oprzyj się odruchowi ustawienia celu w rodzaju „99,99% czasu pracy" tylko
dlatego, że brzmi imponująco rygorystycznie. Zamiast tego zbadaj, jaki poziom
niezawodności użytkownicy naprawdę zauważają i cenią, opierając się na danych
historycznych o incydentach, badaniach użytkowników i wykazanym koszcie
osiągnięcia każdego kolejnego przyrostu niezawodności, bo przejście z 99,9% do
99,99% często kosztuje znacznie więcej wysiłku inżynierskiego niż przejście z
99% do 99,9%, za malejącą i ostatecznie pomijalną korzyść dostrzegalną dla
użytkowników.

### Traktuj budżet błędów jako zasób do wydawania, z ustaloną z góry reakcją na
wyczerpanie

Oblicz budżet błędów bezpośrednio z SLO (cel dostępności 99,9% w ciągu 30 dni
dopuszcza około 43 minut przestoju) i śledź wydawanie względem niego na bieżąco.
Uzgodnij z góry, przed jakimkolwiek konkretnym incydentem, co się dzieje, gdy
budżet zostanie wyczerpany: częsta, skuteczna polityka zakłada, że prace nad
funkcjami się wstrzymują, a priorytet zespołu automatycznie przesuwa się na prace
nad niezawodnością, dopóki budżet się nie odbuduje. Ta ustalona z góry reguła
eliminuje potrzebę ponownego spierania się o ten kompromis pod presją przy
każdym pojedynczym incydencie.

### Używaj budżetu błędów do świadomych, uświadomionych decyzji o ryzyku

Zdrowy, niewydany budżet błędów nie jest czymś do gromadzenia; to pozwolenie na
rozsądne ryzyko: wypuszczenie zmiany o podwyższonym, ale akceptowalnym ryzyku,
przeprowadzenie eksperymentu chaos engineering (temat o chaos engineering w
siostrzanej książce `software-engineering-guide` omawia to wprost) albo
przyjęcie bardziej ryzykownej zmiany architektury, bo budżet istnieje
właśnie po to, by wydawać go świadomie, a nie zachowywać nietknięty. Budżet
błędów, który nigdy nie jest wydawany, sugeruje albo zbyt zachowawczy zespół,
albo SLO ustawione zbyt luźno względem faktycznie osiąganej niezawodności, co
warto zbadać.

### Przeglądaj i rewiduj SLO okresowo, na podstawie dowodów, a nie bezwładności

SLO ustawione lata temu może już nie odzwierciedlać obecnych oczekiwań
użytkowników, architektury systemu ani priorytetów biznesowych. Przeglądaj SLO w
regularnym rytmie, sprawdzając historycznie osiągniętą niezawodność, opinie
użytkowników i to, czy cel nadal oznacza sensowny punkt kompromisu, a nie cel
łatwy do spełnienia, który można by zaostrzyć, by umożliwić większe tempo
gdzie indziej, albo nierealistyczny, z którego spełnienia zespół faktycznie
zrezygnował.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnego SLO (domyślnie „tak niezawodnie, jak to możliwe") | Brak narzutu na wdrożenie | Niekończące się, nieugruntowane negocjacje między tempem a stabilnością; brak wspólnej reguły |
| Aspiracyjne, bardzo wysokie SLO (99,99%+) | Sygnalizuje poważne podejście do niezawodności | Często niepotrzebny koszt; malejące zyski poza tym, co użytkownicy faktycznie zauważają |
| SLO oparte na dowodach i doświadczeniu użytkownika | Odzwierciedla prawdziwą wartość; dające się obronić i osiągalne | Wymaga prawdziwych danych i analizy, by ustawić je poprawnie |
| Budżet błędów z ustaloną z góry reakcją na wyczerpanie | Eliminuje doraźne negocjacje; obiektywne, szybkie podejmowanie decyzji | Wymaga poparcia organizacji i dyscypliny, by faktycznie dotrzymać ustalonej reguły |

Główne napięcie to **aspiracja kontra osiągalność**. Wysokie, aspiracyjne SLO
wydaje się sygnalizować poważne podejście do jakości, ale pogoń za niezawodnością
ponad to, co użytkownicy faktycznie zauważają, wymienia realne tempo na brak
prawdziwej korzyści, a nierealistyczny cel, którego zespół nigdy nie spełnia,
uczy wszystkich, by w ogóle przestali traktować SLO poważnie. Rozwiąż to
napięcie, ugruntowując SLO w faktycznych dowodach: co użytkownicy zauważają, co
system historycznie osiągał, ile kosztuje każdy dodatkowy przyrost, a nie w
aspiracji ani w chęci wyglądania na rygorystycznego na karcie wyników.

## Pytania do omówienia z zespołem

1. **Czy nasze obecne SLO jest ugruntowane w dowodach o tym, co użytkownicy
   faktycznie zauważają, czy ustawiono je aspiracyjnie, bo wysoka liczba wydawała
   się odpowiednio poważna?** Prześledź pochodzenie obecnego celu, jeśli
   potrafisz, i oceń uczciwie, czy odzwierciedla prawdziwe badania użytkowników,
   czy samą intuicję inżynierską.

2. **Czy mamy ustaloną z góry, uzgodnioną reakcję na wyczerpanie budżetu błędów,
   czy kompromis jest negocjowany od nowa za każdym razem?** Jeśli uczciwa
   odpowiedź to to drugie, warto tę lukę zamknąć, zanim następny incydent wymusi
   spór pod presją.

3. **Czy nasz budżet błędów jest kiedykolwiek wydawany świadomie, na zmianę o
   wyliczonym ryzyku lub eksperyment, czy jest tylko zużywany przypadkowo przez
   incydenty?** Budżet, którego nigdy nie wydaje się świadomie, może wskazywać na
   zbyt ostrożny zespół, tracący uprawnione okazje, które budżet ma umożliwiać.

4. **Czy nasze SLI są mierzone z prawdziwego doświadczenia użytkownika, czy z
   wewnętrznej kondycji systemu, która może nie odzwierciedlać tego, z czym
   użytkownicy faktycznie się spotykają?** Sprawdź obecną instrumentację pod
   kątem tego rozróżnienia; to częsta luka nawet w skądinąd dojrzałych programach
   niezawodności.

5. **Kiedy ostatnio przeglądaliśmy nasze SLO względem bieżących dowodów i czy
   zmieniło się coś, oczekiwania użytkowników, architektura systemu, priorytety
   biznesowe, co uzasadniałoby jego rewizję?** Jeśli nie pamiętasz niedawnego
   przeglądu, sam ten brak wart jest omówienia.

6. **Ile kosztowałoby nas, w wysiłku inżynierskim, podniesienie obecnego SLO o
   jedną dodatkową „dziewiątkę" niezawodności i czy ten koszt byłby uzasadniony
   jakąkolwiek prawdziwą korzyścią dla użytkowników?** To konkretne ujęcie
   kosztów i korzyści pomaga osadzić napięcie aspiracji i osiągalności w
   prawdziwych liczbach, a nie w abstrakcyjnej preferencji.

## Perspektywa sektorowa

**Startup.** Formalne SLO są często zbędne na bardzo wczesnym etapie, gdy zespół
może reagować na problemy z niezawodnością bezpośrednio i nieformalnie. Przyjmij
choćby zgrubne, nieformalne SLO, gdy tylko masz prawdziwych płacących klientów
zależnych od czasu pracy, bo dyscyplina jawnego celu, nawet luźno śledzonego,
pomaga przyznawać priorytet pracom nad niezawodnością wobec presji na funkcje
wcześniej, niż większość młodych firm myśli.

**Mała firma.** Większość nowoczesnych platform hostingowych i obserwowalności
raportuje podstawowe dane o czasie pracy i opóźnieniu przy minimalnej
konfiguracji; użyj ich, by ustawić proste, osiągalne SLO, a nie aspiracyjne,
którego przy ograniczonej zdolności operacyjnej nie potrafiłbyś realistycznie
śledzić ani wykorzystać.

**Duże przedsiębiorstwo.** SLO w tej skali często stanowią podstawę umownych
umów o poziomie usług (SLA) z realnymi konsekwencjami finansowymi, co czyni
oparte na dowodach wyznaczanie celów i zdyscyplinowane zarządzanie budżetem
błędów szczególnie ważnymi. Zainwestuj w prawdziwe SLI oparte na doświadczeniu
użytkownika zamiast wygodnych wewnętrznych kontroli kondycji i ustanów formalnie
politykę reakcji na wyczerpanie, z poparciem kierownictwa, zanim będzie
potrzebna pod presją.

**Administracja publiczna.** Cele niezawodności krytycznej infrastruktury
publicznej czasem niosą wagę prawną lub regulacyjną, a nierealistyczny,
niespełniany cel odkryty podczas audytu albo publicznego incydentu istotnie
szkodzi wiarygodności instytucji. Ustalaj cele na podstawie prawdziwej,
udokumentowanej potrzeby użytkowników i misji i bądź publicznie przejrzysty co do
świadomego kompromisu, jaki reprezentuje budżet błędów, zamiast sugerować
nieosiągalny standard doskonałości.

## Przykłady

**Przedsiębiorstwo.** Firma oferująca przechowywanie danych w chmurze przez lata
dążyła do „maksymalnego czasu pracy" bez formalnego SLO, co prowadziło do
przewlekłego, nierozwiązanego napięcia między zespołem produktu (chcącym szybko
wypuszczać funkcje) a zespołem infrastruktury (chcącym maksymalnej ostrożności),
rozstrzyganego od nowa na każdym spotkaniu planowania wydania. Przyjęcie
formalnego SLO dostępności 99,95% z jawnym budżetem błędów i ustaloną z góry
polityką, prace nad funkcjami wstrzymują się automatycznie, gdy budżet się
wyczerpie, całkowicie zakończyło powtarzające się negocjacje: oba zespoły
widziały tę samą liczbę i zgadzały się na tę samą regułę, a firma odnotowała
mierzalny wzrost liczby wypuszczanych funkcji w okresach zdrowego budżetu oraz
mierzalne, zamierzone spowolnienie w dwóch okresach w kolejnym roku, gdy budżet
faktycznie się wyczerpał, dokładnie tak, jak zakładała polityka.

**Administracja publiczna.** System publicznych alertów krajowej służby
pogodowej przez lata działał w ramach nieformalnego oczekiwania „zawsze
dostępny", bez udokumentowanego celu i z istotnym, nieadresowanym obciążeniem
operacyjnym zespołu dyżurnego, próbującego sprostać niewypowiedzianemu, w
praktyce niemożliwemu standardowi. Nowo przyjęte formalne SLO, dostępność 99,9% z
jasno przekazaną publicznie wyjaśniającą informacją o budżecie błędów, dało
zespołowi operacyjnemu jawne, dające się obronić pozwolenie na planowanie okien
konserwacyjnych w granicach budżetu, co poprzednie niewypowiedziane oczekiwanie
„zawsze dostępny" czyniło politycznie trudnym, nawet gdy było naprawdę konieczne
dla długoterminowej kondycji systemu. Publiczne wyjaśnienie pojęcia budżetu
błędów wprost, zamiast jego ukrywania, zostało przyjęte przychylnie jako znak
uczciwej, dojrzałej praktyki operacyjnej, a nie osłabienia zaangażowania w
jakość usługi.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z formalnego przyjęcia SLO i budżetów błędów jest rozwiązanie
skądinąd niekończących się, politycznie kosztownych negocjacji między tempem a
stabilnością jedną wspólną, obiektywną regułą. Przykład z przechowywaniem w
chmurze pokazuje to konkretnie: lata powracającego, nierozwiązanego napięcia
między dwoma zespołami rozwiązał jeden formalny cel i ustalona z góry polityka,
uwalniając znaczną energię organizacyjną, którą wcześniej pochłaniało
wielokrotne rozstrzyganie tego samego kompromisu.

Całkowity koszt posiadania obejmuje wysiłek analizy, by poprawnie ustalić cel
oparty na dowodach, oraz dyscyplinę dotrzymania ustalonej z góry reakcji na
wyczerpanie nawet pod presją, by mimo wszystko wypuścić szczególnie upragnioną
funkcję. Ten koszt dyscypliny jest realny, ale znacznie niższy niż bieżący koszt
nierozwiązanych, przewlekłych negocjacji, które w każdym cyklu planowania bez
końca pochłaniają energię organizacji.

## Antywzorce i pułapki

- **Ustawianie aspiracyjnego SLO bez dowodów:** daje nierealistyczny cel, którego
  zespół przestaje traktować poważnie, albo niepotrzebnie drogi, gonący za
  korzyścią, której użytkownicy nie zauważają.
- **Brak ustalonej z góry reakcji na wyczerpanie budżetu błędów:** zmusza do
  tego samego trudnego sporu o kompromis pod presją za każdym razem.
- **Mierzenie SLI z wewnętrznej kondycji systemu, a nie z prawdziwego
  doświadczenia użytkownika:** może raportować „zdrowy", gdy użytkownicy
  doświadczają realnych problemów.
- **Nigdy nie wydawanie zdrowego budżetu błędów świadomie:** może wskazywać na
  nadmierną ostrożność i utraconą uprawnioną okazję.
- **Ustawienie celu raz i nigdy do niego nie wracanie:** SLO może się
  zdezaktualizować, gdy zmieniają się oczekiwania użytkowników, architektura i
  priorytety.
- **Traktowanie polityki budżetu błędów jako opcjonalnej pod presją:** ustalona z
  góry reguła, którą się nadpisuje, ilekroć jest niewygodna, nie ma realnej
  wartości decyzyjnej.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Cele niezawodności są niejawne lub aspiracyjne, bez
  zdefiniowanego formalnego SLO, SLI ani budżetu błędów.
- **Poziom 2, Rozwój:** Niektóre usługi mają nieformalne SLO, ale SLI mogą nie
  odzwierciedlać prawdziwego doświadczenia użytkownika i nie ma ustalonej z góry
  polityki wyczerpania.
- **Poziom 3, Standaryzacja:** SLO oparte na dowodach, z SLI odzwierciedlającymi
  prawdziwe doświadczenie użytkownika i ustaloną z góry polityką wyczerpania
  budżetu błędów, są ustanowione spójnie dla krytycznych usług.
- **Poziom 4, Zarządzanie:** Budżety błędów są aktywnie i świadomie wydawane na
  wyliczone podejmowanie ryzyka, a SLO są przeglądane i rewidowane w
  regularnym, opartym na dowodach rytmie.
- **Poziom 5, Orkiestracja:** SLO i budżety błędów są zintegrowane w całej
  organizacji jako wspólny, obiektywny mechanizm równoważenia tempa i
  stabilności, a organizacja potrafi wskazać konkretne decyzje, które ten
  schemat umożliwił, a których nieugruntowane negocjacje nie rozstrzygnęłyby
  równie skutecznie.

## Pomysły do dyskusji

1. Czy nasze obecne SLO jest ugruntowane w dowodach, czy w aspiracji?
2. Czy mamy ustaloną z góry reakcję na wyczerpanie budżetu błędów, której faktycznie dotrzymalibyśmy pod presją?
3. Kiedy ostatnio świadomie wydaliśmy zdrowy budżet błędów na wyliczone ryzyko?
4. Czy nasze SLI mierzą prawdziwe doświadczenie użytkownika, czy wygodne wewnętrzne kontrole kondycji?
5. Ile kosztowałoby nas podniesienie SLO o jedną dodatkową „dziewiątkę" i czy ten koszt byłby uzasadniony?

## Kluczowe wnioski

- **Wskaźnik poziomu usługi (SLI)** mierzy prawdziwe doświadczenie użytkownika;
  **cel poziomu usługi (SLO)** to jego cel oparty na dowodach; **budżet błędów**
  to świadomie wydawalny dozwolony niedobór.
- **100% niezawodności to zwykle zły cel**; ugruntuj SLO w tym, co użytkownicy
  faktycznie zauważają, i w tym, ile naprawdę kosztuje każdy kolejny przyrost.
- Traktuj budżet błędów jako **zasób do wydawania z ustaloną z góry reakcją na
  wyczerpanie**, eliminując potrzebę każdorazowego ponownego spierania się o
  tempo kontra stabilność pod presją.
- Mierz SLI z **prawdziwego doświadczenia użytkownika**, a nie tylko z wygodnych
  wewnętrznych kontroli kondycji.
- **Przeglądaj i rewiduj SLO okresowo**, na podstawie dowodów, bo
  zdezaktualizowany cel traci użyteczność, gdy zmieniają się system i jego
  użytkownicy.

## Bibliografia i dalsza lektura

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff i Niall Richard Murphy (red.) (tekst
  podstawowy definiujący SLI, SLO i budżety błędów).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara i Stephen Thorne (red.) (praktyczne wskazówki wdrażania
  SLO i budżetów błędów).
- *Implementing Service Level Objectives*, Alex Hidalgo (kompleksowy,
  skoncentrowany na praktykach przewodnik po projektowaniu i wdrażaniu SLO).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble i Gene Kim (związek między praktyką niezawodności a wydajnością
  dostarczania).
