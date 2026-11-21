# 3.7 Ankiety doświadczenia programisty i metryki DevEx

## Przegląd i motywacja

Ten temat zamyka część 3 praktyczną mechaniką, dzięki której dane z samooceny
w każdym z poprzednich tematów zasługują na zaufanie: jak zaprojektować
ankietę doświadczenia programisty (DevEx), która daje prawdziwy sygnał, a nie
konkurs popularności, i jak połączyć dane z ankiet z obiektywną instrumentacją
w zestaw metryk, na podstawie którego organizacja naprawdę może działać.
Każdy temat tej części opiera się na jakiejś formie samooceny, najbardziej
wprost satysfakcja i dobrostan (temat 3.2), ale wydajność, komunikacja i
flow również zyskują na dobrze zaprojektowanej ankiecie, a źle zaprojektowana
ankieta podważa wartość wszystkich naraz.

**Doświadczenie programisty (DevEx)** to szersze, nowsze ujęcie, które
wyłoniło się wokół tej samej podstawowej idei, którą sformalizowało SPACE:
faktyczne, codzienne doświadczenie inżynierów przy wykonywaniu pracy,
tarcie, narzędzia, obciążenie poznawcze, pętle sprzężenia zwrotnego, jest
samo w sobie rzeczą mierzalną i możliwą do poprawy, a nie tylko miękką sprawą
kulturową. Badania DevEx, w szczególności ramy zaproponowane przez Abi Nodę,
Margaret-Anne Storey, Nicole Forsgren i Michaelę Greiler, porządkują to
doświadczenie wokół trzech wymiarów: pętli sprzężenia zwrotnego, obciążenia
poznawczego i stanu flow, które ściśle odpowiadają wymiarom SPACE omówionym
już w tej części i je rozszerzają.

W dużych zespołach różnica między ankietą dającą wiarygodny sygnał a taką,
która daje szum albo, co gorsza, aktywnie mylące dane, tkwi w całości w
szczegółach projektu, które omawia ten temat: sformułowaniu pytań, wyborze
skali odpowiedzi, próbkowaniu i rytmie oraz sposobie przekazywania wyników
respondentom. Duże przedsiębiorstwa i administracja publiczna prowadzące
takie ankiety w skali tysięcy inżynierów nie mogą sobie pozwolić na błąd,
bo wadliwy instrument w tej skali daje pewne siebie, błędne wnioski, które
kształtują realne decyzje o zasobach.

## Kluczowe zasady

- **Jakość projektu ankiety decyduje o wiarygodności danych znacznie bardziej
  niż długość czy wyrafinowanie ankiety.** Krótka, dobrze zaprojektowana
  ankieta zawsze bije długą, źle zaprojektowaną.
- **Wskaźnik odpowiedzi jest sam w sobie sygnałem**, a nie tylko metryką
  zbierania danych. Spadający wskaźnik często oznacza erozję zaufania do
  procesu.
- **Łącz dane z ankiet z obiektywną instrumentacją** wszędzie, gdzie to
  możliwe, zgodnie z zasadą instrumentacji z tematu 1.5. Dane z ankiet
  wykorzystuj konkretnie do tego, czego dane obiektywne nie uchwycą.
- **Domykaj pętlę z respondentami.** Ankieta, która nigdy widocznie nie
  prowadzi do żadnej zmiany, uczy ludzi, by przestali ją traktować poważnie.
- **DevEx i SPACE to komplementarne ujęcia tej samej troski**, a nie
  konkurencyjne ramy, między którymi trzeba wybierać.

## Rekomendacje

### Projektuj pytania jasno i unikaj sugerujących lub dwuczłonowych sformułowań

Pisz pytania ankietowe, które dotyczą dokładnie jednej rzeczy, prostym
językiem, bez wbudowywania założenia w samo pytanie. "Jak bardzo jesteś
zadowolony z naszych narzędzi i dokumentacji?" to pytanie dwuczłonowe, które
zlewa dwie potencjalnie bardzo różne odpowiedzi w jedną mylącą. Podziel je na
dwa osobne pytania. Unikaj sugerujących sformułowań w rodzaju "jak bardzo
nasza niedawna inwestycja w narzędzia poprawiła twoje doświadczenie?", które
zakłada, że poprawa nastąpiła, zamiast neutralnie pytać, czy nastąpiła.

### Używaj spójnych skal odpowiedzi i pilotuj nowe pytania przed szerokim wdrożeniem

Ujednolić skalę odpowiedzi (pięcio- lub siedmiostopniowa skala
[Likerta](https://en.wikipedia.org/wiki/Likert_scale) jest częsta i dobrze
zbadana) w całym instrumencie ankietowym, aby odpowiedzi były porównywalne
między pytaniami i w czasie. Każde nowe pytanie wypróbuj na małej grupie, zanim
wdrożysz je w całej organizacji, aby wychwycić niejednoznaczne sformułowanie
lub nieoczekiwaną interpretację, zanim zepsują cały zbiór danych.

### Traktuj wskaźnik odpowiedzi jako sygnał diagnostyczny sam w sobie

Śledź wskaźnik odpowiedzi w kolejnych cyklach i traktuj jego spadek jako sygnał
ostrzegawczy wart bezpośredniego zbadania, podobnie jak sygnał zaufania
omówiony w temacie 3.2. Spadający wskaźnik odpowiedzi często oznacza
zmęczenie ankietami, erodujące zaufanie, że wyniki prowadzą do działania, albo
rosnące podejrzenie, że anonimowość nie jest naprawdę chroniona, a każde z
tych zasługuje na bezpośrednie zbadanie, a nie zbycie jako zwykła niedogodność
zbierania danych.

### Łącz dane z ankiet z obiektywną instrumentacją DevEx

Zestawiaj subiektywne odpowiedzi z ankiet z sygnałami obiektywnymi tam, gdzie
istnieją: czasem budowania, czasem uruchamiania zestawu testów, czasem
konfiguracji lokalnego środowiska programistycznego oraz danymi o czasie
przepływu i przerwaniach z tematu 3.6. Odpowiedź z ankiety mówiąca "nasz build
jest za wolny" staje się znacznie bardziej użyteczna w zestawieniu z
faktycznie zmierzonym trendem czasu budowania, a to połączenie wychwytuje
przypadki, w których postrzeganie i obiektywna rzeczywistość rozchodzą się w
którąkolwiek stronę, co samo w sobie warto zbadać.

### Domykaj pętlę: publikuj wyniki i widoczne działania następcze

Po każdym cyklu ankiety opublikuj uczciwe podsumowanie wyników, także tych,
których kierownictwo wolałoby nie podkreślać, i publicznie zobowiąż się do co
najmniej jednego konkretnego działania podjętego w odpowiedzi. Ankieta, po
której nie widać żadnego działania następczego, uczy respondentów, że ich
szczere zdanie nie ma znaczenia, co pogarsza zarówno wskaźnik odpowiedzi, jak
i szczerość odpowiedzi w każdym kolejnym cyklu. Ta dyscyplina domykania pętli
jest często najważniejszym czynnikiem rozstrzygającym, czy program ankiet
DevEx pozostaje użyteczny przez wiele lat, czy powoli zamienia się w
odhaczanie rubryk.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Długa, kompleksowa ankieta | Bogate, szczegółowe dane z wielu obszarów | Niższy wskaźnik odpowiedzi, większe zmęczenie, więcej miejsca na źle zaprojektowane pytania |
| Krótka, skupiona ankieta | Wyższy wskaźnik odpowiedzi, łatwiej zaprojektować dobrze | Mniejszy zakres; może przeoczyć nowy problem poza wybranym zakresem |
| Same dane z ankiet | Wprost uchwytują subiektywne doświadczenie | Podatne na stronniczość i niemożliwe do zweryfikowania względem obiektywnej rzeczywistości |
| Ankieta połączona z obiektywną instrumentacją | Wychwytuje rozbieżność między postrzeganiem a rzeczywistością, bardziej użyteczna | Wymaga więcej wysiłku integracji danych |

Główne napięcie to **zakres kontra jakość odpowiedzi**. Dłuższa, bardziej
kompleksowa ankieta obejmuje więcej, ale pogarsza wskaźnik odpowiedzi i
zwiększa ryzyko prześlizgnięcia się źle zaprojektowanych pytań. Krótka,
skupiona ankieta daje odpowiedzi lepszej jakości, ale grozi przeoczeniem czegoś
ważnego poza jej zakresem. Rozwiąż to napięcie, utrzymując główną, cykliczną
ankietę krótką i dobrze wypilotowaną oraz używając okazjonalnych, wyraźnie
oznaczonych ankiet pogłębionych dla konkretnych tematów wymagających
dokładniejszego zbadania, zamiast próbować objąć wszystko w każdym cyklu.

## Pytania do omówienia z zespołem

1. **Czy kiedykolwiek wypróbowaliśmy nowe pytanie ankietowe na małej grupie
   przed szerokim wdrożeniem, czy nowe pytania trafiają prosto do pełnej
   ankiety?** Pominięcie pilotażu to częsty sposób, w jaki niejednoznaczne lub
   dwuczłonowe pytania psują cały zbiór danych, zanim ktokolwiek zauważy, że
   sformułowanie było niejasne.

2. **Co robił nasz wskaźnik odpowiedzi w ostatnich cyklach ankiety i czy
   zbadaliśmy spadek, jeśli wystąpił?** Traktuj ten trend jako prawdziwy
   sygnał wart omówienia, a nie uciążliwość zbierania danych, którą
   odnotowuje się mimochodem.

3. **Czy łączymy dane z ankiet z jakąkolwiek obiektywną instrumentacją, czy
   subiektywne postrzeganie stoi w naszych raportach całkiem samo?** Wskaż co
   najmniej jedno miejsce, w którym zestawienie pytania ankietowego z danymi
   obiektywnymi, czasem budowania czy częstotliwością wdrożeń, uczyniłoby
   wynik bardziej użytecznym.

4. **Jakie konkretne działanie podjęliśmy jako bezpośredni, widoczny skutek
   ostatniego cyklu ankiety i czy przekazaliśmy je respondentom?** Jeśli
   uczciwa odpowiedź brzmi "nic widocznego", ta luka prawdopodobnie już
   podkopuje zaufanie do instrumentu, niezależnie od tego, czy zdążyła się
   pokazać we wskaźniku odpowiedzi.

5. **Czy któreś z naszych obecnych pytań ankietowych jest sugerujące lub
   dwuczłonowe i czy zauważylibyśmy, gdyby było?** Przejrzyj swoje
   faktyczne obecne pytania pod kątem tego konkretnego testu jako ćwiczenie
   grupowe.

6. **Jak nasze dane z ankiety DevEx lub SPACE mają się do sygnałów
   obiektywnych, gdy te dwie rzeczy wydają się niezgodne, i co ta niezgodność
   nam mówi?** Przypadek, w którym postrzeganie i dane obiektywne się
   rozchodzą, jest często cenniejszy diagnostycznie niż przypadek zgodności,
   bo sama luka jest informacją.

## Perspektywa sektorowa

**Startup.** Prosta, bardzo krótka ankieta pulsu, czasem tylko jedno lub dwa
pytania, prowadzona nieformalnie i często, zwykle wystarcza w tej skali, a
formalny rygor projektowania instrumentu ma mniejsze znaczenie, gdy założyciel
nadal może regularnie rozmawiać bezpośrednio niemal z każdym.

**Mała firma.** Darmowe lub tanie narzędzie ankietowe z krótkim, adaptowanym
zestawem pytań, prowadzone co kwartał, uchwytuje tu większość wartości bez
potrzeby dedykowanej wiedzy o projektowaniu ankiet. Postaw dyscyplinę
domykania pętli ponad wyrafinowanie. Nawet mały zespół zyskuje na widocznym
działaniu na podstawie tego, co ujawnia krótka ankieta.

**Duże przedsiębiorstwo.** Jakość projektu ankiety ma ogromne znaczenie w
skali, bo wadliwe pytanie lub złamana gwarancja anonimowości psuje dane od
tysięcy respondentów naraz, a wynikające z tego pewne siebie, błędne wnioski
mogą skierować znaczące decyzje o zasobach w złą stronę. Zainwestuj w
prawdziwą wiedzę o projektowaniu ankiet albo współpracuj z ugruntowaną
platformą pomiaru DevEx, zamiast budować doraźny instrument wewnętrznie.

**Administracja publiczna.** Wskaźnik odpowiedzi i zaufanie są szczególnie
kruche w organizacjach, w których pracownicy mogą już z ostrożnością
patrzeć na to, jak dane są wewnętrznie używane. Zainwestuj nadmiernie w
przejrzyste gwarancje anonimowości i widoczne działania następcze właśnie po
to, by zbudować zaufanie, które umożliwia osiągnięcie uczciwego wskaźnika
odpowiedzi w kontekście, w którym sceptycyzm wobec użycia danych może być
większy niż w typowym otoczeniu sektora prywatnego.

## Przykłady

**Przedsiębiorstwo.** Pierwsza ankieta DevEx w firmie programistycznej
zawierała pytanie proszące inżynierów o ocenę "satysfakcji z narzędzi i
procesu", czyli pytanie dwuczłonowe, które zlewało dwie bardzo różne sprawy.
Gdy łączny wynik wyszedł przeciętnie, kierownictwo nie umiało powiedzieć, czy
problemem są narzędzia, proces, czy oba, a początkowe działania naprawcze
przez dwa kwartały celowały w zły obszar. Rozdzielenie pytania w kolejnej
wersji ujawniło, że wynik dla narzędzi był w rzeczywistości dobry, a dla
procesu słaby, co skierowało inwestycje na uproszczenie uciążliwego procesu
zatwierdzania wydań i dało mierzalną poprawę satysfakcji w ciągu jednego
kwartału, w przeciwieństwie do wcześniejszych działań skupionych na narzędziach,
które nie przyniosły niemal żadnego efektu.

**Administracja publiczna.** Pierwsza ankieta DevEx krajowej agencji cyfrowej
miała wskaźnik odpowiedzi poniżej 30%, a wewnętrzny przegląd wykazał, że
pracownicy powszechnie wierzyli, i jak się okazało słusznie, że poszczególni
menedżerowie mogą zobaczyć, kto odpowiedział, a kto nie, choć wyniki zbiorcze
miały być anonimowe. Agencja przeszła na naprawdę niezależną, zewnętrzną
platformę ankietową z zweryfikowaną anonimowością, jawnie i wielokrotnie
zakomunikowała zmianę oraz opublikowała jasne podsumowanie wyników
poprzedniego cyklu wraz z trzema konkretnymi działaniami podjętymi w
odpowiedzi. Wskaźnik odpowiedzi wzrósł powyżej 70% w ciągu dwóch cykli, a
kierownictwo agencji wprost przypisało odbudowę zaufania do instrumentu
połączeniu prawdziwej anonimowości i widocznych działań następczych.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z dobrze zaprojektowanego programu ankiet DevEx to wiarygodne,
użyteczne dane o wymiarze, doświadczeniu programisty, który inaczej pozostaje
niewidoczny, aż wypłynie jako rotacja pracowników lub spowolnienie
dostarczania. Przykład firmy programistycznej powyżej pokazuje koszt błędu w
projekcie: dwa kwartały źle ukierunkowanych działań naprawczych, bo jedno źle
sformułowane pytanie zlało dwie odrębne sprawy.

Całkowity koszt posiadania obejmuje narzędzia ankietowe, dyscyplinę
projektowania i pilotażu zalecaną w tym temacie oraz stałe zobowiązanie do
domykania pętli widocznym działaniem następczym w każdym cyklu. To
zobowiązanie, bardziej niż jakikolwiek koszt narzędzi, rozstrzyga, czy
program ankiet pozostaje użyteczny przez lata, czy rozpada się w ćwiczenie
odhaczania rubryk, które z czasem daje coraz mniej wiarygodne dane.

## Antywzorce i pułapki

- **Pytania dwuczłonowe lub sugerujące:** zlewają odrębne sprawy albo
  przekrzywiają odpowiedzi i często pozostają niewykryte bez pilotażu.
- **Pomijanie pilotażu nowych pytań:** pozwala, by niejednoznaczne
  sformułowanie zepsuło zbiór danych w pełnej skali.
- **Ignorowanie spadającego wskaźnika odpowiedzi:** przeocza ważny sygnał
  zaufania sam w sobie.
- **Nigdy nie domykanie pętli widocznym działaniem następczym:** uczy
  respondentów, że szczere zdanie nie ma znaczenia, pogarszając jakość
  przyszłych danych.
- **Traktowanie danych z ankiet jako wystarczających samych w sobie, bez
  obiektywnego potwierdzenia:** przeocza przypadki, w których postrzeganie i
  rzeczywistość rozchodzą się w którąkolwiek stronę.
- **Słabe lub niemożliwe do zweryfikowania gwarancje anonimowości:** najszybszy
  sposób na załamanie zarówno wskaźnika odpowiedzi, jak i szczerości
  odpowiedzi.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Pytania ankietowe są doraźne i niewypilotowane,
  wskaźnik odpowiedzi nie jest śledzony jako sygnał, a wyniki rzadko prowadzą
  do widocznego działania.
- **Poziom 2, Rozwój:** Istnieje pewna dyscyplina projektowania ankiet, ale
  pilotaż jest niespójny, a pętla nie jest niezawodnie domykana z
  respondentami.
- **Poziom 3, Standaryzacja:** Pytania są pilotowane przed wdrożeniem,
  wskaźnik odpowiedzi jest śledzony i badany, gdy spada, a wyniki są
  konsekwentnie publikowane z co najmniej jednym konkretnym działaniem
  następczym.
- **Poziom 4, Zarządzanie:** Dane z ankiet są systematycznie łączone z
  obiektywną instrumentacją, a rozbieżność między nimi jest aktywnie badana
  jako sygnał diagnostyczny.
- **Poziom 5, Orkiestracja:** Organizacja ma dojrzały, cieszący się zaufaniem,
  wieloletni program ankiet z konsekwentnie wysokimi wskaźnikami odpowiedzi,
  wykazywalnym widocznym działaniem po każdym cyklu i doświadczeniem w
  wychwytywaniu i poprawianiu źle zaprojektowanych pytań, zanim zepsują dane.

## Pomysły do dyskusji

1. Czy jakiekolwiek obecne pytanie w naszym instrumencie kiedykolwiek zmyliło lub wprowadziło w błąd respondenta?
2. Jakie było ostatnie konkretne działanie, które podjęliśmy bezpośrednio na podstawie danych z ankiety?
3. Skąd wiedzielibyśmy, że nasza gwarancja anonimowości została złamana, nawet przypadkowo?
4. Gdzie nasze dane z ankiet zgadzają się z obiektywną instrumentacją, a gdzie nie, i co nam to mówi?
5. Czego trzeba, by podwoić nasz obecny wskaźnik odpowiedzi?

## Kluczowe wnioski

- **Jakość projektu** ankiety, jasne, jednopojęciowe, bezstronne pytania,
  liczy się bardziej niż długość czy wyrafinowanie.
- **Wskaźnik odpowiedzi jest sygnałem sam w sobie**. Zbadaj jego spadek,
  zamiast traktować go jak zwykłą niedogodność.
- **Łącz dane z ankiet z obiektywną instrumentacją**, by wychwycić rozbieżność
  między postrzeganiem a rzeczywistością.
- **Domykaj pętlę**: publikuj wyniki i widoczne działania następcze w każdym
  cyklu, inaczej zaufanie do instrumentu zacznie erodować.
- **DevEx i SPACE są komplementarne**, a nie konkurencyjne, w ujęciu tej samej
  troski o doświadczenie programisty.

## Bibliografia i dalsza lektura

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren i Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): ramy DevEx
  obejmujące pętle sprzężenia zwrotnego, obciążenie poznawcze i stan flow.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, Jeff Lawson (organizacyjna inwestycja w
  doświadczenie programisty).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, Louis M.
  Rea i Richard A. Parker (ogólna metodologia projektowania ankiet
  stosowalna do instrumentów DevEx).
