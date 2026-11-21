# 3.3 Metryki wydajności i wskaźniki zastępcze rezultatów

## Przegląd i motywacja

**Wydajność** (ang. Performance), czyli litera P w SPACE (temat 3.1), to
wymiar najczęściej mylony z aktywnością i właśnie zapobieganiu tej pomyłce
służy ten temat. Wydajność pyta, czy praca inżyniera lub zespołu faktycznie
przyniosła dobry [rezultat](https://en.wikipedia.org/wiki/Outcome_(probability)):
funkcję, która trafiła do użytkowników i działała, system, który pozostał
niezawodny, zmianę, która poruszyła metrykę biznesową lub użytkową w dobrym
kierunku. Aktywność (temat 3.4) pyta tylko o to, ile było ruchu. Zespół może
być bardzo aktywny i mało wydajny, wypuszczając ciągle drobne zmiany, które
nigdy nie ruszają żadnego rezultatu, a możliwe jest też odwrotne: zespół,
który wypuszcza rzadko, ale jego zmiany niezawodnie trafiają dokładnie w
punkt.

Trudność tego wymiaru polega na tym, że rezultat często nie daje się
przypisać jednej osobie, a nawet jednemu zespołowi. Rezultaty oprogramowania
wyłaniają się ze współpracy, z decyzji podjętych miesiące wcześniej przez
ludzi, którzy przeszli już do innych projektów, z warunków rynkowych, nad
którymi żaden inżynier nie ma kontroli. Badacze SPACE wyrażali się tu jasno:
wydajność należy mierzyć na poziomie systemu lub zespołu, używając wielu
zbieżnych sygnałów, nie sprowadzać jej do jednej liczby i z pewnością nie
przypisywać jej pojedynczemu inżynierowi w oderwaniu od reszty. Ten temat
traktuje tę wskazówkę poważnie i uznaje przypisywanie wydajności jednostkom
za pułapkę, której trzeba aktywnie unikać, a nie za skrót do wzięcia, gdy
jest wygodnie.

W dużych zespołach właściwy pomiar wydajności oddziela program metryk, który
naprawdę poprawia rezultaty, od takiego, który tylko nagradza widoczne
zabieganie. Duże przedsiębiorstwa porównujące wydajność wielu zespołów
potrzebują sygnałów odpornych na manipulowanie przez surową objętość
produkcji. Administracja publiczna, uzasadniająca inwestycje technologiczne
przed organami nadzoru, musi wykazać, że wysiłek inżynierski przyniósł
realne rezultaty, a nie tylko dostarczone artefakty, co jest dokładnie zasadą
rezultatów ponad produkcją z tematu 1.3 zastosowaną do tego wymiaru.

## Kluczowe zasady

- **Wydajność mierzy, czy praca przyniosła dobry rezultat, a nie ile pracy
  było.** To podstawowe rozróżnienie względem wymiaru aktywności.
- **Używaj wielu zbieżnych sygnałów, nigdy jednej liczby wydajności.**
  Żaden pojedynczy wskaźnik zastępczy nie jest dość wiarygodny, by stać sam.
- **Mierz na poziomie zespołu lub systemu.** Przypisywanie rezultatów
  jednostkom jest zwykle zawodne i zaprasza dokładnie to manipulowanie,
  przed którym ta książka ostrzega na każdym kroku.
- **Jakość jest częścią wydajności, a nie osobną sprawą.** Praca, która
  trafia na produkcję, ale coś innego psuje, nie była naprawdę wydajna.
- **Sygnał wydajności bez przypisanej decyzji to dekoracja**, dokładnie
  według ogólnej zasady z tematu 1.1 zastosowanej do tego wymiaru.

## Rekomendacje

### Łącz kilka zbieżnych sygnałów zamiast jednego wyniku wydajności

Czerp dowody wydajności z wielu źródeł: odsetek nieudanych zmian (temat
2.10) i odsetek defektów, które uciekły na produkcję (temat 5.1), dla
jakości, wyniki wdrożeń powiązane z faktyczną adopcją funkcji (temat 5.2)
dla pytania, czy praca miała znaczenie, oraz jakościową ocenę wkładu
zespołu w cele strategiczne przez współpracowników lub menedżera, dla
kontekstu, którego czysta metryka nie uchwyci. Żaden z nich sam nie jest
wiarygodny. Razem, gdy zbiegają się w tym samym wniosku, są znacznie
bardziej godne zaufania niż jakakolwiek pojedyncza liczba.

### Mierz na poziomie zespołu, opieraj się przypisywaniu jednostkom

Rezultaty oprogramowania rzadko są dziełem jednej osoby. Wyłaniają się z
decyzji projektowych, uwag z przeglądów, wcześniejszej pracy ludzi, którzy
mogli już opuścić zespół, i współpracy ponad granicami. Przypisywanie
rezultatu jednemu inżynierowi to zwykle fałszywa precyzja, która ignoruje tę
rzeczywistość i tworzy silną zachętę, by jednostki chroniły zasługi zamiast
swobodnie współpracować, czyli dokładnie to zniekształcenie zachęt, przed
którym ostrzega temat 1.2.

### Włącz jakość bezpośrednio do definicji wydajności

Funkcja, która trafia do użytkowników na czas, ale wywołuje falę incydentów
produkcyjnych, nie była wydajna, mimo że naiwne spojrzenie wyłącznie na
produkcję policzyłoby ją jako dostarczoną. Wbuduj odsetek nieudanych zmian,
odsetek uciekających defektów i dane o incydentach po wydaniu bezpośrednio w
sposób oceny wydajności, zamiast traktować jakość jako osobną, oderwaną
sprawę, mierzoną tylko w częściach 4 i 6 tej książki.

### Używaj danych o wydajności do decyzji o inwestycjach i procesach, nie do szeregowania osób

Produktywne użycie danych o wydajności to decydowanie, gdzie inwestować dalej
(zespół, który konsekwentnie dostarcza mocne rezultaty, zasługuje na więcej
zasobów i autonomii) i gdzie badać (zespół, którego praca konsekwentnie nie
trafia w cel, zasługuje na pomoc, a nie obwinianie, zgodnie z diagnostycznym
ujęciem z tematu 1.1). Konkurencyjne szeregowanie osób lub zespołów na
podstawie danych o wydajności zaprasza dokładnie to manipulowanie i
pogorszenie morale, przed którymi ostrzega ta książka, i rzadko daje lepsze
rezultaty niż użycie diagnostyczne.

### Bądź szczery co do granic przypisywania, zwłaszcza dla zespołów platformowych i wspierających

Zespoły budujące wspólną infrastrukturę, narzędzia wewnętrzne lub
możliwości platformy (omawia to wprost temat o inżynierii platformowej w
siostrzanej książce `software-engineering-guide`) często mają swój wkład w
rezultaty oddalony o kilka kroków od jakiejkolwiek metryki widocznej dla
klienta. Mierz wydajność tych zespołów przez ich wpływ na zespoły, które
wspierają, adopcję ich platformy i zmniejszenie tarcia zgłaszane przez
zespoły korzystające, zamiast wymuszać źle dopasowaną metrykę rezultatu
bezpośredniego na pracy, która z natury jest pośrednia.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Pojedynczy wynik wydajności na zespół | Prosty do przedstawienia i porównania | Fałszywa precyzja; ukrywa, który sygnał faktycznie wpłynął na wynik |
| Wiele zbieżnych sygnałów | Bardziej wiarygodne, odporne na manipulowanie jedną metryką | Trudniej streścić jedną liczbą; wymaga więcej kontekstu do interpretacji |
| Pomiar wydajności na poziomie zespołu | Zgodny z tym, jak rezultaty oprogramowania faktycznie powstają | Nie odpowie wprost na pytania o wkład jednostek |
| Przypisywanie wydajności na poziomie jednostki | Wydaje się bardziej użyteczne w ocenach okresowych | Zwykle fałszywa precyzja; duże ryzyko manipulowania i chronienia zasług |

Główne napięcie to **precyzja kontra uczciwość**. Pojedyncza liczba wydajności
na zespół, a tym bardziej na osobę, łatwo się porównuje i szereguje, ale ta
precyzja jest zwykle fałszywa i ukrywa realną niepewność co do przypisania i
jakości za czysto wyglądającą wartością. Rozwiąż to napięcie, przyjmując
mniej uporządkowany, wielosygnałowy obraz za uczciwy i opierając się presji
kierownictwa lub procesów ocen okresowych, by sprowadzić go z powrotem do
jednego, fałszywie precyzyjnego wyniku.

## Pytania do omówienia z zespołem

1. **Czy nasz obecny pomiar wydajności łączy wiele zbieżnych sygnałów, czy
   opiera się na jednej liczbie, która wydaje się precyzyjniejsza, niż jest
   naprawdę?** Przeprowadź audyt tego, co dziś nazywasz "metryką wydajności",
   i sprawdź, ile niezależnych, zbieżnych sygnałów faktycznie ją zasila.

2. **Czy kiedykolwiek przypisaliśmy wydajność zespołowi lub osobie, nie
   uwzględniając współpracy i międzyzespołowego charakteru tego, jak
   rezultat faktycznie powstał?** Weź niedawną historię sukcesu i prześledź,
   jak wiele zależało od ludzi, decyzji lub wcześniejszej pracy spoza
   wskazanego zespołu lub osoby.

3. **Czy nasz pomiar wydajności obejmuje jakość, czy tylko szybkość
   dostarczania i objętość produkcji?** Funkcja, która trafiła do
   użytkowników, a później wywołała znaczące incydenty produkcyjne, nie
   powinna dostać wysokiej oceny wydajności. Sprawdź, czy obecny pomiar
   faktycznie by taki przypadek wychwycił.

4. **Jak mierzymy wydajność zespołów platformowych lub wspierających, których
   wkład w rezultaty jest pośredni?** Jeśli uczciwa odpowiedź brzmi "nie
   mierzymy, a przynajmniej niezbyt dobrze", tę lukę warto nazwać i
   zaadresować wprost, zamiast zostawiać te zespoły praktycznie niemierzone
   albo mierzone niesprawiedliwie metrykami rezultatu widocznego dla klienta,
   które nie pasują do ich pracy.

5. **Czy dane o wydajności kiedykolwiek posłużyły do konkurencyjnego
   szeregowania osób, formalnie lub nieformalnie?** Taki dryf, podobny do
   ryzyka danych o satysfakcji z tematu 3.2, szkodzi zarówno szczerości
   danych, jak i gotowości zespołu do otwartej współpracy.

6. **Gdy nasze zbieżne sygnały się rozchodzą, na przykład duża szybkość
   dostarczania i rosnący odsetek defektów, jaki wyciągamy wniosek i czy
   nasz proces dobrze sobie z tym rozbieżnością radzi?** Rozbieżność między
   sygnałami to sama w sobie cenna informacja. Omów, czy zespół traktuje ją
   dziś jako szum do zignorowania, czy jako realne odkrycie warte zbadania.

## Perspektywa sektorowa

**Startup.** Wydajność jest zwykle widoczna wprost: czy funkcja zadziałała,
czy klienci ją przyjęli, czy metryka się ruszyła. Formalny pomiar
wielosygnałowy jest w tej skali często zbędny. Ryzyko polega raczej na zbyt
szybkim przypisaniu sukcesu lub porażki jednej osobie w szybkim, silnie
współpracującym małym zespole, w którym zasługa i wina rzadko należą do
jednej jednostki.

**Mała firma.** Połącz dane o dostarczaniu i jakości, które już masz (temat
2.10, temat 5.1), z bezpośrednią, uczciwą rozmową o tym, czy niedawna praca
faktycznie pomogła firmie, zamiast budować formalną instrumentację
wielosygnałową, której nie masz mocy utrzymać.

**Duże przedsiębiorstwo.** Tu dyscyplina pomiaru wielosygnałowego na poziomie
zespołu zwraca inwestycję, bo presja, by sprowadzić wydajność do jednej
porównywalnej liczby w dziesiątkach zespołów, jest tu najsilniejsza, a szkoda
z fałszywej precyzji kumuluje się w decyzjach o zasobach całej organizacji.
Oprzyj się tej presji jawnie i zbuduj wielosygnałowe uzasadnienie, dlaczego to
ważne.

**Administracja publiczna.** Wykazanie, że inwestycja inżynierska przyniosła
realne rezultaty, a nie tylko dostarczone artefakty, jest często centralnym
pytaniem organu nadzoru. Wielosygnałowy pomiar wydajności, powiązany wprost z
metrykami rezultatów (temat 5.3), a nie z samymi wskaźnikami zastępczymi
dostarczania, daje znacznie mocniejszą i bardziej obronną odpowiedź niż samo
zliczanie aktywności lub dostaw.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo firmy technologicznej z branży handlu
detalicznego nieformalnie szeregowało zespoły inżynierskie według punktów
historii ukończonych w sprincie, traktując to jako wskaźnik zastępczy
wydajności. Po przyjęciu podejścia wielosygnałowego, łączącego dane o
dostarczaniu, odsetek nieudanych zmian i adopcję funkcji po wydaniu,
kierownictwo odkryło, że zespół z najwyższym tempem kończenia punktów
historii miał najniższy w firmie wskaźnik adopcji funkcji: dostarczali
szybko, ale budowali rzeczy, z których klienci nie korzystali.
Przeorganizowanie priorytetów mapy drogowej tego zespołu na podstawie
pełniejszego obrazu wydajności, a nie mylącego rankingu jedną liczbą,
skierowało znaczną moc inżynierską ku pracy o większym wpływie w ciągu
jednego kwartału.

**Administracja publiczna.** Program inżynierski krajowej agencji
podatkowej musiał wykazać przed komisją nadzorczą, że duża inwestycja w
systemy poprawiła wydajność, a nie tylko zrealizowała zakontraktowany
zakres. Zamiast raportować samo ukończenie punktów historii lub kamieni
milowych, program przedstawił zbieżny zestaw sygnałów: mniejszy odsetek
błędów przetwarzania, krótszy medianowy czas przetwarzania i wyższy odsetek
udanych spraw załatwionych samodzielnie, wszystko powiązane z konkretnymi
dostarczonymi komponentami systemu. Wielosygnałowa prezentacja powiązana z
rezultatami sprostała ocenie komisji tak, jak nie sprostał jej rok wcześniej
prosty raport "dostarczono zgodnie z harmonogramem" z poprzedniego programu.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z mierzenia wydajności zbieżnymi sygnałami powiązanymi z rezultatami,
zamiast fałszywie precyzyjną pojedynczą liczbą, to lepsze decyzje o zasobach:
organizacja, która widzi, których zespołów praca naprawdę rusza rezultaty,
może inwestować dalej tam, gdzie to ma znaczenie, i badać tam, gdzie nie,
zamiast nagradzać zespół, który akurat wygląda na najbardziej zajęty.
Przykład z handlu detalicznego powyżej jest typowy: mylący ranking jedną
liczbą kierował uwagę inwestycyjną z dala od miejsc, w których faktycznie by
pomogła.

Całkowity koszt posiadania jest wyższy niż przy podejściu opartym na jednej
metryce, bo wymaga łączenia danych z wielu źródeł (dostarczanie, jakość,
rezultaty) i opierania się presji organizacyjnej, by sprowadzić obraz z
powrotem do jednej porównywalnej liczby. Warto ten koszt ponieść, bo
alternatywa, fałszywie precyzyjny pojedynczy wynik, aktywnie wprowadza w błąd
decyzje o zasobach, które dane o wydajności mają informować.

## Antywzorce i pułapki

- **Mylenie aktywności z wydajnością:** najczęstszy błąd, któremu ten wymiar
  ma właśnie zapobiegać.
- **Przypisywanie wydajności jednostkom w przypadku rezultatów wynikających
  ze współpracy między zespołami:** zwykle fałszywa precyzja zniechęcająca do
  współpracy.
- **Wykluczanie jakości z definicji wydajności:** nagradza pracę, która
  trafia do użytkowników, ale coś innego psuje.
- **Wymuszanie metryki rezultatu bezpośredniego na zespołach platformowych
  lub wspierających:** mierzy złą rzecz dla pracy z natury pośredniej.
- **Sprowadzanie wielu zbieżnych sygnałów z powrotem do jednej fałszywie
  precyzyjnej liczby pod presją organizacyjną:** traci uczciwość, którą
  podejście wielosygnałowe miało zapewnić.
- **Używanie danych o wydajności do konkurencyjnego szeregowania osób:**
  szkodzi zarówno szczerości danych, jak i współpracy w zespole.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Wydajność jest utożsamiana z aktywnością lub
  objętością produkcji, mierzona jedną, niezbadaną liczbą.
- **Poziom 2, Rozwój:** Niektóre sygnały jakości są brane pod uwagę obok
  produkcji, ale brakuje spójnego podejścia wielosygnałowego, a przypisywanie
  jednostkom nadal zdarza się nieformalnie.
- **Poziom 3, Standaryzacja:** Wydajność jest mierzona na poziomie zespołu za
  pomocą wielu zbieżnych sygnałów, w tym jakości, spójnie w całej
  organizacji.
- **Poziom 4, Zarządzanie:** Rozbieżności między zbieżnymi sygnałami są
  aktywnie badane, a zespoły platformowe i wspierające mają odpowiednio
  pośrednie miary wydajności dopasowane do ich faktycznej pracy.
- **Poziom 5, Orkiestracja:** Dane o wydajności bezpośrednio wpływają na
  decyzje o zasobach i inwestycjach, a organizacja potrafi wskazać konkretne
  decyzje o realokacji, które umożliwił obraz wielosygnałowy, a które
  przeoczyłby obraz jedną liczbą.

## Pomysły do dyskusji

1. Jakiej pojedynczej liczby używamy dziś jako wskaźnika zastępczego wydajności i którą warto zastąpić zbieżnym zestawem?
2. Czy kiedykolwiek przypisaliśmy rezultat niewłaściwemu zespołowi lub osobie, bo przypisanie było niejasne?
3. Jak dziś mierzymy wydajność zespołu platformowego lub wspierającego?
4. Jak by to wyglądało, gdyby nasze zbieżne sygnały rozeszły się ze sobą w następnym kwartale?
5. Gdzie ranking oparty na punktach historii lub liczbie dostaw skierował naszą uwagę inwestycyjną w złą stronę?

## Kluczowe wnioski

- Wydajność mierzy, czy praca przyniosła **dobry rezultat**, a nie ile było
  ruchu. Nie myl jej z aktywnością (temat 3.4).
- Używaj **wielu zbieżnych sygnałów**, nigdy jednej liczby wydajności, i bądź
  podejrzliwy wobec fałszywej precyzji.
- Mierz na **poziomie zespołu lub systemu**. Przypisywanie rezultatów
  jednostkom jest zwykle zawodne i szkodzi współpracy.
- **Jakość jest częścią wydajności**, a nie osobną, oderwaną sprawą.
- Daj zespołom platformowym i wspierającym **odpowiednio pośrednie** miary
  wydajności zamiast wymuszać na ich pracy źle dopasowaną metrykę rezultatu
  bezpośredniego.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (pomiar wydajności oparty na rezultatach).
- *Team Topologies*, Matthew Skelton i Manuel Pais (struktury zespołów
  platformowych i wspierających oraz sposób mierzenia ich wkładu).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (ryzyka metryk wydajności o fałszywej precyzji).
