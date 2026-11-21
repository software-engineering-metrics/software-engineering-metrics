# 2.2 Elementy przepływu: funkcje, defekty, ryzyka i dług

## Przegląd i motywacja

**Element przepływu** to jednostka pracy we Flow Framework i każdy element
przepływu należy do dokładnie jednego z czterech typów: **funkcje**, czyli nowa
wartość biznesowa lub możliwość dostarczona klientowi; **defekty**, czyli
poprawki jakości dla błędów znalezionych przez użytkowników lub testy;
**ryzyka**, czyli praca nad bezpieczeństwem, zgodnością, prywatnością i
nadzorem, która chroni biznes; oraz **dług**, czyli [dług techniczny](https://en.wikipedia.org/wiki/Technical_debt),
usprawnienia architektury i praca nad infrastrukturą, która umożliwia przyszłą
szybkość. Temat 2.1 wprowadził ramy, do których należą te cztery kategorie;
ten temat wchodzi głęboko w samą taksonomię, bo kategorie dają wartość tylko
wtedy, gdy zespół klasyfikuje do nich swoją pracę uczciwie i spójnie.

Definiującą cechą elementów przepływu jest to, że alokacja między czterema
typami jest **grą o sumie zerowej**: w danym okresie istnieje stała ilość
zdolności inżynierskiej, a każda godzina wydana na funkcję to godzina
niewydana na dług, ryzyko lub defekty. To nie jest nowy fakt o dostarczaniu
oprogramowania, każdy lider inżynierski już wie, że zdolność jest skończona, ale
większość organizacji nie ma spójnego, uczciwego sposobu, by zobaczyć faktyczny
podział. Prędkość sprintu zlicza punkty historii bez względu na typ; wypalony
backlog wygląda identycznie, niezależnie od tego, czy stała za nim nowa ścieżka
zakupowa, czy trzy miesiące niewdzięcznego usuwania podatności. Elementy
przepływu istnieją właśnie po to, by ten niewidoczny podział uczynić widocznym.

Dla dużych zespołów ta widoczność zmienia charakter rozmowy o zasobach. Zamiast
lidera inżynierskiego wysuwającego niekwantyfikowany argument "potrzebujemy
więcej czasu na dług techniczny", klasyfikacja elementów przepływu daje
faktyczną liczbę, dług pochłonął 30% zdolności w zeszłym kwartale, którą można
omawiać, bronić i celowo korygować z interesariuszami biznesowymi. Organizacje
przedsiębiorstw prowadzące wiele równoległych linii produktowych i agencje
rządowe równoważące nową funkcjonalność dla obywateli z ryzykiem systemów
odziedziczonych zależą od tego rodzaju uzasadnionego, kwantyfikowanego
kompromisu znacznie bardziej niż od prywatnego, nieformalnego poczucia, że
"spędzamy za dużo czasu na utrzymaniu".

## Kluczowe zasady

- **Każdy element przepływu należy do dokładnie jednego typu.** Wymuszenie
  pojedynczej klasyfikacji, zamiast dopuszczania mieszanej lub niejednoznacznej,
  sprawia, że taksonomia nadaje się do raportowania zbiorczego.
- **Alokacja ma sumę zerową, nie jest addytywna.** Więcej zdolności dla funkcji
  to z konieczności mniej zdolności dla defektów, ryzyka i długu w tym samym
  okresie.
- **Nie istnieje powszechnie zdrowy rozkład.** Młody produkt w fazie wzrostu
  słusznie powinien przechylać się ku funkcjom; dojrzały system niosący realne
  ryzyko techniczne słusznie powinien przechylać się ku pracy nad długiem i
  ryzykiem.
- **Praca nad długiem i ryzykiem jest chronicznie niedoraportowywana bez tej
  dyscypliny.** Zwykle dzieje się po cichu, wchłonięta w ogólne "zadania
  inżynierskie", dopóki klasyfikacja elementów przepływu nie wydobędzie jej na
  światło dzienne.
- **Jakość klasyfikacji decyduje o całej wartości taksonomii.** Taksonomia
  stosowana niespójnie albo zmanipulowana po fakcie daje liczby, które aktywnie
  wprowadzają w błąd, zamiast informować.

## Rekomendacje

### Klasyfikuj każdy element przy przyjęciu, według spisanej definicji dla każdego typu

Uzgodnij zwięzłą, spisaną definicję tego, co w twoim konkretnym kontekście liczy
się jako funkcja, defekt, ryzyko i dług, i wymagaj, by każda nowa porcja pracy
była klasyfikowana według tej definicji w chwili wejścia do strumienia wartości,
a nie po jej ukończeniu. Definicja uzgodniona z wyprzedzeniem opiera się pokusie
klasyfikowania wstecznego na podstawie tego, jak praca ostatecznie wyglądała, a
to dokładnie ryzyko manipulowania, które ten temat nazywa wprost poniżej.

### Raportuj rozkład przepływu jako trend, a nie pojedynczą migawkę

Rozkład z jednego okresu mówi mniej niż trend z kilku okresów. Stały dryf ku
jednemu typowi elementu, funkcje rosną, podczas gdy dług po cichu kurczy się
kwartał po kwartale, jest znacznie silniejszym sygnałem niż liczba z
pojedynczego okresu i zwykle jest wzorcem wartym poruszenia z interesariuszami,
zanim stanie się kryzysem, a nie po nim.

### Ustal celowy docelowy rozkład z interesariuszami biznesowymi, nie tylko z inżynierią

Zdecyduj, razem z kierownictwem produktu i biznesu, jak wygląda zdrowy rozkład
dla obecnej fazy twojego konkretnego strumienia wartości, i wracaj do tego celu
okresowo, zamiast pozwalać mu dryfować z założenia. Młody produkt w fazie
wzrostu i dojrzały system w fazie stabilności mają słusznie różne zdrowe cele, a
sam cel powinien być negocjowaną decyzją biznesową, a nie czymś, co inżynieria
po cichu rozstrzyga sama.

### Weryfikuj klasyfikację elementów przepływu niezależnymi dowodami

Okresowo porównuj swój rozkład przepływu z metrykami, które nie zależą od
samoklasyfikacji: odsetkiem uciekających defektów (temat 5.1), pomiarem długu
technicznego (temat 4.5) i metrykami zarządzania podatnościami (temat 6.4). Jeśli
defekty lub podatności rosną, podczas gdy udziały elementów "defekty" i "ryzyka"
pozostają stałe lub maleją, ta niezgodność jest najjaśniejszym dostępnym
sygnałem, że klasyfikacja oddryfowała od rzeczywistości.

### Wypatruj konkretnie wzorca fabryki funkcji

Gdy rozkład przepływu pokazuje, że funkcje konsekwentnie pochłaniają niemal
całą zdolność, kwartał po kwartale, a praca nad długiem i ryzykiem nigdy nie
przekracza symbolicznego udziału, ten wzorzec (zwany czasem "fabryką funkcji")
zwykle oznacza, że dług i ryzyko są głodzone ze zdolności, a nie że system
naprawdę nie potrzebuje utrzymania. Ten wzorzec jest wygodny w krótkim terminie i
drogi później, ujawniając się w końcu jako kryzys jakości lub bezpieczeństwa,
który nadchodzi bez ostrzeżenia na wykresie rozkładu przepływu, bo leżące u
podstaw gromadzenie nigdy nie było widoczne.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnej klasyfikacji (ogólny backlog) | Brak narzutu procesowego | Praca nad długiem, ryzykiem i defektami pozostaje niewidoczna; trudno bronić decyzji o zasobach |
| Czterotypowa klasyfikacja elementów przepływu | Czyni alokację zdolności widoczną i negocjowalną z interesariuszami | Wymaga dyscypliny przy przyjęciu i spisanej, uzgodnionej definicji dla każdego typu |
| Drobniejsza klasyfikacja (wiele podtypów) | Więcej szczegółów diagnostycznych | Więcej wysiłku klasyfikacji; więcej liczb do wyjaśniania interesariuszom |
| Klasyfikacja wsteczna | Łatwiejsza do zastosowania, bez zmiany procesu z góry | Silnie narażona na manipulowanie; klasyfikacja dryfuje ku temu, co wygląda najlepiej |

Centralne napięcie to **dyscyplina klasyfikacji kontra narzut procesowy**.
Taksonomia czterotypowa jest celowo gruba, na tyle gruba, że klasyfikacja
elementu zajmuje sekundy, a nie debatę, ale ta grubość się utrzymuje tylko
wtedy, gdy dyscyplina klasyfikowania przy przyjęciu, według spisanej definicji,
jest naprawdę podtrzymywana. Rozwiąż to napięcie, utrzymując taksonomię dokładnie
tak prostą, cztery typy, nie więcej, i inwestując dodatkowy rygor w krok audytu
(weryfikację niezależnymi dowodami), a nie w bardziej wyszukany schemat
klasyfikacji, który eroduje pod realnym obciążeniem.

## Pytania do omówienia z zespołem

1. **Gdybyśmy zaklasyfikowali wszystko, co nasz zespół dostarczył w zeszłym
   kwartale, jak wyglądałby faktyczny podział na funkcje, defekty, ryzyka i
   dług i czy zaskoczyłby naszych interesariuszy?** Większość zespołów nigdy
   nie wykonała tego ćwiczenia uczciwie. Spróbujcie na prawdziwych danych,
   zanim założycie, że już znacie odpowiedź.

2. **Czy mamy spisaną, uzgodnioną definicję tego, co w naszym konkretnym
   kontekście jest funkcją, długiem i ryzykiem, czy klasyfikacja zależy od tego,
   kto akurat etykietuje zgłoszenie?** Nieformalna, niespójna definicja daje
   liczby, które wyglądają precyzyjnie, ale faktycznie nie są porównywalne
   okres do okresu.

3. **Czy nasz rozkład przepływu kiedykolwiek stale dryfował ku jednemu typowi
   elementu, choć nikt nie zdecydował o tym celowo?** Powolny dryf łatwo przeoczyć
   okres po okresie, ale jest oczywisty po wykreśleniu jako trend. Weźcie dane z
   kilku okresów, jeśli je macie, i uczciwie szukajcie tego wzorca.

4. **Jak wyglądałby zdrowy rozkład przepływu dla obecnej fazy naszego produktu i
   czy faktycznie uzgodniliśmy ten cel z interesariuszami biznesowymi?**
   Większość organizacji nigdy nie uczyniła tego celu jawnym, co oznacza brak
   wspólnej podstawy do zauważenia, że faktyczny rozkład od niego odpływa.

5. **Czy nasz rozkład przepływu zgadza się z niezależnymi dowodami, jak odsetek
   uciekających defektów czy liczba otwartych podatności, czy jest niezgodność
   warta zbadania?** Niezgodność tutaj jest najjaśniejszym dostępnym znakiem, że
   klasyfikacja oddryfowała od tego, czym praca faktycznie jest.

6. **Czy ktoś w naszym zespole mógłby po cichu przeetykietować element długu lub
   ryzyka jako funkcję pod presją dostarczania i czy dziś zauważylibyśmy, że to
   zrobił?** To centralne ryzyko manipulowania w tym temacie, wyrażone wprost.
   Omówcie, czy wasz obecny proces faktycznie by to wychwycił, a nie tylko czy
   ktokolwiek zrobiłby to celowo.

## Perspektywa sektorowa

**Startup.** Formalna klasyfikacja często wydaje się narzutem, gdy cały zespół
już wie, nad czym każdy pracuje. Użytecznym minimum w tej skali jest po prostu
głośne nazywanie czterech kategorii podczas planowania, aby praca nad długiem i
ryzykiem nie była po cichu deprioryzowana za każdym razem, gdy termin funkcji
tworzy presję, wzorzec, który narasta źle, gdy rośnie i baza kodu, i zespół.

**Mała firma.** Jedno pole niestandardowe lub etykieta w twoim obecnym narzędziu
do śledzenia wystarcza, by uchwycić typ elementu przepływu bez żadnej
dedykowanej inwestycji w narzędzia. Dyscyplina spójnej klasyfikacji przy
przyjęciu liczy się znacznie bardziej niż jakiekolwiek wyrafinowanie narzędzi.

**Duże przedsiębiorstwo.** Klasyfikacja elementów przepływu to miejsce, gdzie te
ramy zyskują swoją wartość w skali, bo duża organizacja prowadząca wiele
równoległych strumieni wartości nie ma żadnego innego niezawodnego, zbiorczego
sposobu, by zobaczyć, jak zdolność jest faktycznie rozdzielona między funkcje,
defekty, ryzyko i dług. Zainwestuj w klasyfikację zintegrowaną z narzędziami i
okresowe weryfikacje niezależnymi dowodami; ręczna, doraźna klasyfikacja nie
przeżywa realnej skali organizacyjnej.

**Administracja publiczna.** Rozkład przepływu daje liderowi technologii w
sektorze publicznym uzasadnioną, kwantyfikowaną odpowiedź na pytanie, dlaczego
nie dostarcza się więcej nowych funkcji dla obywateli, gdy uczciwa odpowiedź
brzmi, że ryzyko i obciążenie długiem systemu odziedziczonego pochłaniają
rzeczywisty, uzasadniony udział zdolności. Uczynienie tego kompromisu jawnym i
negocjowanym, zamiast pochłaniania go po cichu, zwykle buduje więcej zaufania w
organach nadzoru niż niekwantyfikowany apel o "konieczność techniczną".

## Przykłady

**Przedsiębiorstwo.** Zespół platformy e-commerce dużej firmy detalicznej
wierzył, na podstawie prędkości sprintów, że dostarcza stałą produkcję funkcji.
Pierwsze uczciwe ćwiczenie klasyfikacji elementów przepływu wykazało, że
"funkcje" stanowiły faktycznie tylko 40% ukończonej pracy, a dług, w dużej mierze
związany ze starzejącym się systemem zakupowym, pochłaniał niemal jedną trzecią
zdolności, nigdy wcześniej nienazwany jako taki w żadnym raporcie. Przedstawienie
tego podziału kierownictwu produktu, razem z rosnącym odsetkiem uciekających
defektów potwierdzającym obciążenie długiem, zapewniło dedykowany budżet na
modernizację, o który zespół bezskutecznie prosił przez dwa lata, używając
wyłącznie argumentów jakościowych.

**Administracja publiczna.** Zespół cyfrowego licencjonowania stanowej agencji
pojazdów silnikowych po raz pierwszy sklasyfikował swój backlog, gdy publiczna
awaria zwróciła uwagę na stabilność systemu leżącego u podstaw. Ćwiczenie
ujawniło, że praca nad "ryzykiem", głównie łatanie bezpieczeństwa, wielokrotnie
deprioryzowane na rzecz widocznych dla obywateli funkcji, skurczyła się w
poprzednim roku do poniżej 5% zdolności, wzorzec, którego nigdy nie było widać w
standardowym raportowaniu zespołu. Kierownictwo agencji wykorzystało to
ustalenie, by wprowadzić minimalną alokację pracy nad ryzykiem na przyszłość,
poparte danymi o rozkładzie przepływu, a nie samym ogólnym oświadczeniem
polityki.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z klasyfikacji elementów przepływu jest uzasadniona, kwantyfikowana
podstawa dla decyzji o zasobach, które wcześniej były argumentowane jakościowo i
często przegrywały z tą pracą, która była najbardziej widoczna dla
interesariuszy. Powyższy przykład z handlu detalicznego, zapewnienie budżetu
na modernizację danymi o faktycznej zdolności zamiast ogólnego apelu, to wzorzec,
który ta dyscyplina niezawodnie wytwarza: konkretną liczbę znacznie trudniej
odrzucić niż ogólne wrażenie, że "potrzebujemy więcej czasu na utrzymanie".

Całkowity koszt posiadania (TCO) jest niski, gdy taksonomia i jej definicje są
uzgodnione: klasyfikacja dodaje sekundy do przyjęcia, a nie znaczący ciężar
procesu, a integracja z narzędziami potrzebna do jej śledzenia to zwykle jedno
pole niestandardowe lub etykieta. Realnym, bieżącym kosztem jest dyscyplina
podtrzymywania uczciwej klasyfikacji pod presją dostarczania, dlatego okresowa
weryfikacja niezależnymi dowodami ma takie samo znaczenie jak początkowe
wdrożenie.

## Antywzorce i pułapki

- **Klasyfikowanie pracy wstecznie, gdy rezultat jest już znany:** sposób
  manipulowania leżący w sercu tego tematu. Pod presją dostarczania zespół może
  po cichu oznaczyć pracę nad długiem lub ryzykiem jako funkcję po fakcie albo
  zaokrąglić niejednoznaczny element ku temu typowi, który lepiej wygląda na
  wykresie rozkładu, bez żadnej pojedynczej decyzji wyglądającej nieuczciwie
  samej w sobie. Bariera ochronna to klasyfikacja przy przyjęciu według spisanej
  definicji, połączona z okresowymi audytami porównującymi rozkład przepływu z
  niezależnymi dowodami, jak odsetek uciekających defektów (temat 5.1) i metryki
  podatności (temat 6.4), ta sama dyscyplina audytu względem niezależnych
  dowodów, której temat 1.2 wymaga dla każdej metryki w tej książce.
- **Pozwalanie funkcjom konsekwentnie pochłaniać niemal całą zdolność (wzorzec
  fabryki funkcji):** po cichu głodzi pracę nad długiem i ryzykiem, aż wyjdzie
  jako kryzys.
- **Traktowanie rozkładu z jednego okresu jak całego obrazu:** pomija powolny,
  kumulatywny dryf, który widok trendu pokazuje wyraźnie.
- **Ustalanie docelowego rozkładu bez interesariuszy biznesowych:** traci główną
  wartość ram, wspólne, negocjowane rozumienie kompromisu.
- **Używanie niespójnej lub niedokumentowanej definicji dla każdego typu:**
  daje liczby, które wyglądają precyzyjnie, ale faktycznie nie są porównywalne w
  czasie.
- **Nadmierne rozbudowywanie taksonomii wieloma podtypami:** dodaje narzut
  klasyfikacji, który eroduje dyscyplinę bez proporcjonalnego wglądu.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Praca jest śledzona ogólnie, bez klasyfikacji
  elementów przepływu; praca nad długiem i ryzykiem jest niewidoczna w
  raportowaniu.
- **Poziom 2, Rozwój:** Niektóre zespoły klasyfikują elementy przepływu
  nieformalnie, ale definicje są niespójne, a klasyfikacja często odbywa się
  wstecznie.
- **Poziom 3, Standaryzacja:** Wszystkie zespoły klasyfikują przy przyjęciu
  według wspólnej, spisanej definicji, a rozkład przepływu jest śledzony jako
  trend.
- **Poziom 4, Zarządzanie:** Rozkład przepływu jest okresowo weryfikowany
  niezależnymi dowodami, a docelowe rozkłady są ustalane celowo z interesariuszami
  biznesowymi.
- **Poziom 5, Orkiestracja:** Dane o elementach przepływu bezpośrednio
  informują decyzje o zasobach i inwestycjach w całej organizacji, a
  kierownictwo potrafi wskazać konkretne decyzje podjęte, bo klasyfikacja
  uczyniła wcześniej niewidoczny kompromis jawnym.

## Pomysły do dyskusji

1. Co pokazałby uczciwy podział elementów przepływu z pracy zeszłego kwartału i czy kogokolwiek by zaskoczył?
2. Czy mamy spisaną definicję każdego z czterech typów elementów przepływu, czy klasyfikacja zależy od tego, kto etykietuje pracę?
3. Czy nasz rozkład przepływu kiedykolwiek zdryfował ku jednemu typowi elementu bez celowej decyzji za tym stojącej?
4. Z jakimi niezależnymi dowodami moglibyśmy dziś zweryfikować nasz rozkład przepływu?

## Kluczowe wnioski

- **Element przepływu** należy do dokładnie jednego z czterech typów, funkcje,
  defekty, ryzyka lub dług, a alokacja zdolności między nimi ma **sumę zerową**.
- **Nie istnieje powszechnie zdrowy rozkład**; właściwa mieszanka zależy od fazy
  produktu i powinna być celowym, negocjowanym celem z interesariuszami
  biznesowymi.
- Centralnym sposobem manipulowania w tym temacie jest **klasyfikacja
  wsteczna**, ciche przeetykietowywanie pracy nad długiem lub ryzykiem jako
  funkcji po fakcie; bariera ochronna to klasyfikacja przy przyjęciu plus
  okresowe audyty względem niezależnych dowodów.
- Wypatruj konkretnie **wzorca fabryki funkcji**, funkcji konsekwentnie
  pochłaniających niemal całą zdolność, który głodzi pracę nad długiem i ryzykiem,
  aż wyjdzie jako kryzys.
- Rozkład przepływu jest najcenniejszy jako **trend**, a największy zysk daje
  dzielenie się nim bezpośrednio z interesariuszami biznesowymi.

## Bibliografia i dalsza lektura

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
