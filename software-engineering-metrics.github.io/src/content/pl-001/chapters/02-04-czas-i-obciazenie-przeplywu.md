# 2.4 Czas przepływu i obciążenie przepływu

## Przegląd i motywacja

**Czas przepływu** to całkowity czas, jaki upływa od wejścia elementu przepływu
(temat 2.2) do strumienia wartości do jego dostarczenia, mierzący responsywność
na całej ścieżce od zidentyfikowania potrzeby biznesowej do otrzymania wartości
przez klienta. **Obciążenie przepływu** to całkowita liczba elementów przepływu
aktywnych lub oczekujących w strumieniu wartości w danej chwili, nazwa we Flow
Framework dla tego, co temat 2.5 nazywa pracą w toku. Razem są to dwie metryki
Flow Framework najbardziej bezpośrednio związane z matematyką kolejek, bo
obciążenie przepływu nie tylko koreluje z czasem przepływu, lecz go
matematycznie dyktuje.

Ta zależność to **[prawo Little'a](https://en.wikipedia.org/wiki/Little%27s_law)**,
dowód z teorii kolejek (temat 2.7 omawia go w całości), który głosi, że średnia
liczba elementów w stabilnym systemie jest równa średniemu tempu napływu
pomnożonemu przez średni czas, jaki każdy element spędza w systemie. Zastosowane
tutaj: obciążenie przepływu równa się tempu napływu pomnożonemu przez czas
przepływu. To najużyteczniejszy pojedynczy fakt w tym temacie, bo zamienia spór,
który był jakościowy, "jesteśmy zbyt przeciążeni, wszystko trwa za długo", w
dowodliwy, ilościowy, którego lider biznesu nie może łatwo odrzucić: jeśli
obciążenie przepływu stale rośnie, podczas gdy tempo napływu pozostaje stałe,
czas przepływu matematycznie gwarantowanie też wzrośnie, a nie tylko
prawdopodobnie.

Dla dużych zespołów to często najbardziej przekonująca pojedyncza liczba w całych
ramach. Lider biznesu, który opiera się myśli o powiedzeniu nie nowej pracy, bo
każda prośba z osobna wydaje się uzasadniona, często zaakceptuje, że
przeciążenie strumienia wartości dowodliwie spowalnia każdy element już w nim
będący, gdy obciążenie przepływu jest śledzone, a jego związek z czasem
przepływu pokazany bezpośrednio, zamiast argumentowany abstrakcyjnie. Duże
przedsiębiorstwa żonglujące wieloma równoległymi inicjatywami strategicznymi i
programy rządowe prowadzące dziesiątki równoległych strumieni prac zależą od tego
dowodu, a nie tylko od intuicji za nim stojącej, by uzasadnić odmowę
rozpoczynania więcej pracy naraz.

## Kluczowe zasady

- **Obciążenie przepływu matematycznie dyktuje czas przepływu, przez prawo
  Little'a.** To nie korelacja; to dowód, który zachodzi dla każdego stabilnego
  strumienia wartości.
- **Czas przepływu obejmuje cały strumień wartości, nie tylko inżynierię.**
  Zaczyna się, gdy zidentyfikowano potrzebę biznesową, a nie gdy inżynieria
  podejmuje pracę, co czas cyklu z tematu 2.6 dalej rozkłada.
- **Rosnące obciążenie przepływu to najwcześniejszy sygnał ostrzegawczy
  rosnącego czasu przepływu.** Ponieważ zależność jest dowodliwa, obciążenie
  przepływu można obserwować jako wskaźnik wyprzedzający, a nie odkrywać po
  tym, jak czas przepływu już się pogorszył.
- **Punkt wejścia do strumienia wartości musi być ustalony i udokumentowany.**
  To, gdzie zaczyna się zegar czasu przepływu, jest wyborem definicyjnym
  narażonym na to samo ryzyko manipulowania co każda inna granica metryki w tej
  książce.
- **Lider biznesu może działać na obciążeniu przepływu bezpośrednio.** W
  przeciwieństwie do czasu przepływu, który jest pomiarem opóźnionym, obciążenie
  przepływu jest dźwignią: odmowa rozpoczęcia nowej pracy to działanie dostępne
  dziś.

## Rekomendacje

### Ustal i udokumentuj punkt wejścia do strumienia wartości, zanim zaczniesz mierzyć czas przepływu

Zdecyduj jawnie, czy czas przepływu zaczyna się, gdy potrzeba biznesowa jest po
raz pierwszy zidentyfikowana, gdy jest formalnie zatwierdzona, czy gdy inżynieria
rozpoczyna pracę, i udokumentuj ten wybór tak, jak temat 1.4 zaleca dla każdej
karty metryk. Ta jedna decyzja określa, czy czas przepływu mierzy prawdziwą
responsywność od końca do końca, czy tylko węższy wycinek, który kontroluje
inżynieria, a zmiana definicji później bez ujawnienia jest centralnym ryzykiem
manipulowania w tym temacie.

### Śledź obciążenie przepływu w sposób ciągły, a nie okresowo

Ponieważ obciążenie przepływu jest, przez prawo Little'a, wskaźnikiem
wyprzedzającym czasu przepływu, który dopiero nadejdzie, śledź je jako żywą,
stale aktualizowaną liczbę, a nie okresową migawkę. Obciążenie przepływu, które
rosło już od tygodni, zanim ktokolwiek je sprawdził, po cichu wydłużało czas
przepływu równie długo, niewidocznie, zanim metryka to dogoniła.

### Używaj prawa Little'a jawnie, argumentując za limitem WIP lub zwiększeniem zdolności

Przedstawiając argument za rozpoczynaniem mniej równoległej pracy lub za
dodaniem zdolności, pokaż faktyczne równanie, a nie tylko rekomendację:
obciążenie przepływu równa się tempu napływu razy czas przepływu, więc jeśli
tempo napływu jest z grubsza stałe, zmniejszenie obciążenia przepływu
matematycznie gwarantuje skrócenie czasu przepływu. To znacznie silniejszy
argument dla sceptycznego interesariusza niż niekwantyfikowane twierdzenie, że
"jesteśmy zbyt zajęci", bo jest dowodliwy, a nie tylko zadeklarowany.

### Oddziel czas przepływu od przyczyn obciążenia przepływu, zanim zaproponujesz naprawę

Gdy obciążenie przepływu jest wysokie, zbadaj, który typ elementu przepływu
(temat 2.2) faktycznie je napędza: zbyt wiele równolegle rozpoczętych funkcji,
backlog nierozwiązanych defektów lub praca nad ryzykiem utknięta w oczekiwaniu na
wspólne zatwierdzenie. Każda przyczyna implikuje inną naprawę, a traktowanie
"obciążenie przepływu jest wysokie" jako jednego, niezróżnicowanego problemu
zwykle daje ogólną, nieskuteczną reakcję.

### Zestawiaj czas przepływu z czasem cyklu, by wyizolować, gdzie faktycznie powstaje opóźnienie

Ponieważ czas przepływu obejmuje cały strumień wartości, a czas cyklu (temat 2.6)
tylko jego część inżynierską, porównaj te dwa wprost. Duża różnica między czasem
przepływu a czasem cyklu oznacza, że większość opóźnienia powstaje, zanim
inżynieria w ogóle zobaczy pracę, w kolejkach zatwierdzeń, backlogach
priorytetyzacji lub przekazaniach między zespołami, co wskazuje na zupełnie
inną naprawę niż różnica skoncentrowana wewnątrz samej inżynierii.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Pomiar czasu przepływu tylko od podjęcia przez inżynierię | Proste, zgodne z istniejącą instrumentacją czasu cyklu | Pomija opóźnienie przed inżynierią, zaniża prawdziwą responsywność |
| Pomiar czasu przepływu od faktycznego zidentyfikowania potrzeby biznesowej | Oddaje prawdziwą responsywność od końca do końca | Wymaga instrumentowania etapów poza bezpośrednią kontrolą inżynierii |
| Okresowe migawki obciążenia przepływu | Tanie do okazjonalnego obliczenia | Traci wartość wskaźnika wyprzedzającego; rosnące obciążenie pozostaje niezauważone zbyt długo |
| Ciągłe śledzenie obciążenia przepływu | Żywy, użyteczny wskaźnik wyprzedzający | Wymaga bieżącej integracji z narzędziami, a nie tylko okazjonalnego raportu |

Centralne napięcie to **zakres kontra zasięg instrumentacji**. Pomiar czasu
przepływu wyłącznie od podjęcia przez inżynierię jest znacznie łatwiejszy do
zinstrumentowania, bo wykorzystuje dane o czasie cyklu, które temat 2.6 już
zbiera, ale po cichu zaniża prawdziwą responsywność, ignorując wszystko, co dzieje
się, zanim inżynieria zobaczy pracę. Rozwiąż to napięcie, zaczynając od węższego,
ograniczonego do inżynierii pomiaru, jeśli to wszystko, co możesz dziś
zinstrumentować, ale rozszerzenie punktu startu czasu przepływu w górę strumienia,
do zidentyfikowania potrzeby biznesowej i priorytetyzacji, traktuj jako
bliskoterminowy priorytet, a nie stałe ograniczenie.

## Pytania do omówienia z zespołem

1. **Gdzie dziś faktycznie zaczyna się nasz zegar czasu przepływu i czy wszyscy w
   organizacji zgadzają się, że to właściwy punkt startu?** Rozbieżność między
   tym, gdzie interesariusze zakładają, że zegar startuje, a tym, gdzie faktycznie
   startuje, to częste, ciche źródło nieufności do metryki. Potwierdźcie, że
   udokumentowana definicja zgadza się ze wspólnym rozumieniem.

2. **Czy kiedykolwiek sprawdziliśmy, czy nasze zmierzone obciążenie przepływu,
   tempo napływu i czas przepływu faktycznie spełniają prawo Little'a?** Jeśli
   z grubsza się nie równoważą, jedna z trzech liczb jest mierzona niespójnie.
   Przejdźcie razem przez faktyczne liczby, zamiast zakładać, że sprawdzenie by
   przeszło.

3. **Czy obciążenie przepływu jest śledzone w sposób ciągły, czy stały wzrost
   pozostałby niezauważony przez tygodnie, zanim ktoś by to sprawdził?** Wskaźnik
   wyprzedzający chroni tylko wtedy, gdy ktoś faktycznie obserwuje go niemal w
   czasie rzeczywistym, a nie tylko przegląda w raporcie kwartalnym.

4. **Gdy obciążenie przepływu rośnie, czy potrafimy powiedzieć, który typ
   elementu przepływu faktycznie je napędza, czy czyta się je jako jedną
   niezróżnicowaną liczbę?** Ogólna diagnoza "jesteśmy przeciążeni" daje ogólną,
   często nieskuteczną reakcję. Sprawdźcie, czy wasza obecna instrumentacja
   potrafi faktycznie przypisać rosnące obciążenie konkretnej przyczynie.

5. **Jak duża jest różnica między naszym czasem przepływu a czasem cyklu i czy
   sugeruje ona, że większość opóźnienia powstaje przed, czy po tym, jak
   inżynieria zobaczy pracę?** To porównanie często ujawnia, że największa
   okazja do poprawy leży całkowicie poza kontrolą samej inżynierii.

6. **Czy ktoś kiedykolwiek po cichu zawęził punkt startu naszego czasu
   przepływu, by liczba wyglądała lepiej, bez udokumentowania ani ujawnienia tej
   zmiany?** To centralne ryzyko manipulowania w tym temacie, wyrażone wprost.
   Zapytajcie uczciwie, czy wasza definicja kiedykolwiek tak zdryfowała.

## Perspektywa sektorowa

**Startup.** Obciążenie przepływu jest zwykle niskie po prostu dlatego, że nie
ma dość ludzi, by rozpocząć dużo pracy jednocześnie, ale ta sama zależność
matematyczna nadal obowiązuje, gdy tylko założyciel lub główny inżynier staje
się osobistym wąskim gardłem dla wielu równoległych inicjatyw. Śledź obciążenie
przepływu nieformalnie, nawet bez dedykowanych narzędzi, bo prawo Little'a
obowiązuje niezależnie od skali.

**Mała firma.** Prosta, wspólna lista wszystkiego, co jest obecnie aktywne,
zwykle wystarcza do obliczenia obciążenia przepływu bez dedykowanego
oprogramowania do zarządzania strumieniem wartości. Użytecznym nawykiem jest
sprawdzanie jej dość regularnie, by rosnącą liczbę wychwycić wcześnie, a nie
odkryć dopiero, gdy czas przepływu już widocznie się pogorszył.

**Duże przedsiębiorstwo.** Tu prawo Little'a zarabia na siebie jako argument, a
nie tylko metryka: duża organizacja żonglująca dziesiątkami równoległych
inicjatyw strategicznych może użyć dowodliwej zależności między obciążeniem
przepływu a czasem przepływu, by przedstawić popartą dowodami sprawę za
szeregowaniem pracy, czego czysto jakościowy argument "jesteśmy zbyt zajęci"
rzadko dokonuje wobec zdeterminowanej presji interesariuszy.

**Administracja publiczna.** Programy wieloletnie rutynowo gromadzą duże,
niejawne obciążenie przepływu w wielu strumieniach prac, z których każdy z osobna
jest uzasadniony, bez ogólnoorganizacyjnej widoczności sumy. Bezpośrednie
przedstawienie prawa Little'a, pokazujące, że wzrost czasu przepływu samego
programu jest matematycznie wyjaśniony jego własnym rosnącym obciążeniem
przepływu, jest często najjaśniejszym i najbardziej przekonującym dostępnym
dowodem za szeregowaniem strumieni prac zamiast prowadzenia wszystkich równolegle
w nieskończoność.

## Przykłady

**Przedsiębiorstwo.** Organizacja platformowa firmy technologii medialnych
prowadziła dwadzieścia dwie równoległe inicjatywy strategiczne przy zdolności
realistycznej dla około dwunastu, niedopasowanie, którego nikt nie skwantyfikował,
dopóki nowy wiceprezes ds. inżynierii nie poprosił wprost o obciążenie
przepływu. Czas przepływu dla mediany inicjatywy wzrósł o 40% w poprzednim roku,
trend, który kierownictwo przypisywało temu, że "praca staje się trudniejsza".
Przedstawienie prawa Little'a razem z faktycznymi liczbami obciążenia przepływu i
tempa napływu pokazało, że wzrost był w pełni wyjaśniony samym rosnącym
obciążeniem przepływu, bez potrzeby jakiejkolwiek zmiany trudności pracy leżącej
u podstaw. Organizacja uszeregowała inicjatywy do zrównoważonego obciążenia
przepływu, a mediana czasu przepływu spadła o prawie jedną trzecią w ciągu dwóch
kwartałów.

**Administracja publiczna.** Program modernizacji federalnej agencji zarządzania
grantami zgromadził obciążenie przepływu w dziesiątkach równoległych strumieni
prac bez żadnej pojedynczej śledzonej sumy, a każdy sponsor strumienia wierzył,
że jego własna inicjatywa jest w izolacji odpowiednio zasilona zasobami.
Analiza biura programu z użyciem prawa Little'a pokazała, że zbiorczy czas
przepływu programu, czas od zatwierdzenia strumienia prac do jego dostarczenia,
dało się przewidzieć niemal dokładnie na podstawie samego zbiorczego obciążenia
przepływu, ustalenie, które przekonało sponsorów opierających się argumentom o
deprioryzacji od ponad roku. Program przyjął jawny pułap obciążenia przepływu, a
nowe strumienie prac wchodzą teraz do kolejki, zamiast startować natychmiast
niezależnie od bieżącego obciążenia.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze śledzenia obciążenia przepływu i czasu przepływu razem jest dowodliwa,
a nie tylko przekonująca, sprawa za szeregowaniem pracy zamiast prowadzenia
wszystkiego równolegle. Powyższy przykład z technologią medialną, wyjaśnienie
całej regresji czasu przepływu samym obciążeniem przepływu, to wzorzec, który ta
kombinacja niezawodnie wytwarza: konkretny, ilościowy argument odnosi sukces tam,
gdzie jakościowy apel o bycie "zbyt zajętym" wcześniej zawodził wobec realnej
presji organizacyjnej, by rozpoczynać więcej pracy.

Całkowity koszt posiadania (TCO) jest niski w stosunku do siły przekonywania:
obciążenie przepływu wymaga tylko żywej liczby aktywnych i oczekujących elementów,
a czas przepływu wymaga zinstrumentowania punktu wejścia do strumienia wartości,
praca, która zwraca się za pierwszym razem, gdy powstrzyma organizację przed
zobowiązaniem się do większej liczby równoległych inicjatyw, niż faktyczna
zdolność może udźwignąć.

## Antywzorce i pułapki

- **Ciche zawężanie punktu startu czasu przepływu, by pochlebić liczbie:** sposób
  manipulowania leżący w sercu tego tematu. Przesunięcie startu zegara z
  faktycznego zidentyfikowania potrzeby biznesowej na późniejszy punkt, podjęcie
  przez inżynierię, formalne zatwierdzenie, skraca czas przepływu bez zmiany
  faktycznej responsywności i może następować na tyle stopniowo, że żadna
  pojedyncza zmiana nie wygląda na celową manipulację. Bariera ochronna to jawne
  udokumentowanie punktu wejścia w karcie metryk (temat 1.4) i okresowy audyt
  względem udokumentowanej definicji, ta sama dyscyplina, której ta książka
  wymaga od każdej granicy metryki.
- **Mierzenie obciążenia przepływu tylko okresowo:** traci wartość wskaźnika
  wyprzedzającego, bo stały wzrost może pozostać niezauważony przez tygodnie.
- **Traktowanie obciążenia przepływu jak jednej niezróżnicowanej liczby:** pomija,
  który typ elementu przepływu faktycznie napędza przeciążenie, dając reakcję
  ogólną, a nie celowaną.
- **Ignorowanie różnicy między czasem przepływu a czasem cyklu:** pomija, czy
  opóźnienie koncentruje się przed, czy po inżynierii, co implikuje zupełnie
  różne naprawy.
- **Argumentowanie za zmniejszeniem pracy równoległej bez jawnego przedstawienia
  prawa Little'a:** apel jakościowy jest dla interesariusza znacznie łatwiejszy do
  odrzucenia niż ilościowa, dowodliwa zależność.
- **Zakładanie, że prawo Little'a dotyczy tylko dużej skali:** obowiązuje dla
  każdego stabilnego systemu niezależnie od rozmiaru, włącznie z pojedynczą
  przeciążoną osobą.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Ani czas przepływu, ani obciążenie przepływu nie są
  śledzone; opóźnienie jest omawiane anegdotycznie, bez danych.
- **Poziom 2, Rozwój:** Czas przepływu jest śledzony tylko od podjęcia przez
  inżynierię, a obciążenie przepływu jest sprawdzane okresowo, a nie w sposób
  ciągły.
- **Poziom 3, Standaryzacja:** Czas przepływu jest mierzony od udokumentowanego,
  ogólnoorganizacyjnego punktu wejścia do strumienia wartości, a obciążenie
  przepływu jest śledzone w sposób ciągły jako wskaźnik wyprzedzający.
- **Poziom 4, Zarządzanie:** Prawo Little'a jest używane jawnie do uzasadniania
  decyzji o zdolności i szeregowaniu, a rosnące obciążenie przepływu jest
  przypisywane konkretnemu typowi elementu przepływu, zanim zaproponuje się
  naprawę.
- **Poziom 5, Orkiestracja:** Organizacja ustala jawne pułapy obciążenia
  przepływu w swoich strumieniach wartości i potrafi wskazać konkretne decyzje o
  szeregowaniu, poparte prawem Little'a, które mierzalnie poprawiły czas
  przepływu.

## Pomysły do dyskusji

1. Gdzie faktycznie zaczyna się nasz zegar czasu przepływu i czy ta definicja kiedykolwiek zdryfowała bez dokumentacji?
2. Czy nasze zmierzone obciążenie przepływu, tempo napływu i czas przepływu z grubsza spełniają prawo Little'a?
3. Czy obciążenie przepływu jest śledzone dość ciągle, by stały wzrost został wychwycony w ciągu dni, a nie miesięcy?
4. Jaka jest różnica między naszym czasem przepływu a czasem cyklu i co ta różnica mówi o tym, gdzie faktycznie powstaje opóźnienie?

## Kluczowe wnioski

- **Obciążenie przepływu matematycznie dyktuje czas przepływu**, przez prawo
  Little'a: obciążenie przepływu równa się tempu napływu razy czas przepływu, dla
  każdego stabilnego strumienia wartości.
- **Czas przepływu obejmuje cały strumień wartości**, od zidentyfikowania
  potrzeby biznesowej do dostarczenia, szerzej niż zakres czasu cyklu
  ograniczony do inżynierii (temat 2.6).
- Centralnym sposobem manipulowania w tym temacie jest **ciche zawężanie punktu
  startu czasu przepływu**; bariera ochronna to udokumentowana, audytowana
  definicja punktu wejścia.
- **Śledź obciążenie przepływu w sposób ciągły**, a nie okresowo, aby działało jak
  prawdziwy wskaźnik wyprzedzający, a nie opóźnione odkrycie.
- Używaj prawa Little'a **jawnie**, a nie tylko jako intuicji, gdy argumentujesz za
  limitem WIP, zwiększeniem zdolności lub szeregowaniem równoległej pracy.

## Bibliografia i dalsza lektura

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
