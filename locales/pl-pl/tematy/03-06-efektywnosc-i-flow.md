# 3.6 Efektywność i flow: głęboka praca i przerwania

## Przegląd i motywacja

**Efektywność i flow**, ostatni wymiar SPACE (temat 3.1), mierzy brak tarcia
i zdolność do podtrzymania nieprzerwanej, skupionej pracy. Ten wymiar leży na
granicy metryk przepływu dostarczania z części 2 (efektywność przepływu z
tematu 2.5 mierzy, jak praca porusza się przez system zespołu) i czegoś
bardziej osobistego: indywidualnego doświadczenia poznawczego głębokiej,
skupionej pracy inżynierskiej i tego, jak często to doświadczenie jest
fragmentowane przez przerwania. Inżynieria oprogramowania, bardziej niż
większość pracy umysłowej, zależy od trzymania w pamięci roboczej dużej
ilości kontekstu naraz, co czyni ją wyjątkowo podatną na koszt przerwań.

Badania nad tym kosztem są spójne i otrzeźwiające: ponowne skupienie po
przerwaniu głębokiej, złożonej pracy nie zajmuje sekund, tylko rutynowo wiele
minut, czasem blisko pół godziny, by w pełni odbudować
[pamięć roboczą](https://en.wikipedia.org/wiki/Working_memory), którą inżynier
trzymał przed przerwaniem. Inżynier, którego dzień jest pocięty na
piętnastominutowe bloki przez spotkania, powiadomienia i przełączanie
kontekstu, może wykazywać mnóstwo aktywności (temat 3.4), a wykonać znacznie
mniej naprawdę trudnej pracy niż ten sam inżynier przy dwóch chronionych,
nieprzerwanych godzinach. Ten wymiar istnieje właśnie po to, by ten niewidoczny
koszt uczynić widocznym.

W dużych zespołach koszt przerwań kumuluje się strukturalnie: więcej spotkań,
więcej narzutu koordynacji między zespołami, więcej kanałów Slacka i
powiadomień, więcej punktów kontrolnych w procesie, z których każdy osobno
wydaje się rozsądny, ale razem poważnie fragmentują dzień. Duże
przedsiębiorstwa i administracja publiczna, z cięższymi potrzebami nadzoru i
koordynacji, są szczególnie podatne na tę fragmentację, a ten wymiar daje
kierownictwu konkretny sposób jej pomiaru i obrony, zamiast traktować "czas
skupienia" jako mglistą aspirację kulturową, której nikt faktycznie nie
chroni.

## Kluczowe zasady

- **Przełączanie kontekstu ma realny, mierzalny koszt, nie tylko odczuwany.**
  Ponowne skupienie po przerwaniu rutynowo zajmuje wiele minut, nie sekund.
- **Obciążenie spotkaniami i częstość przerwań da się zmierzyć, nie są tylko
  anegdotą.** Dane z kalendarza i narzędzi mogą ujawnić oba wprost.
- **Chroniony, nieprzerwany czas to deficytowy zasób, którego trzeba
  świadomie bronić**, a nie taki, który przetrwa domyślnie w miarę wzrostu
  organizacji.
- **Ten wymiar często tłumaczy lukę między aktywnością a wydajnością**
  (tematy 3.3 i 3.4): duża aktywność przy niskiej wydajności bywa skutkiem
  pociętych, pełnych przerwań dni.
- **Indywidualne różnice w potrzebach skupienia są realne**, a ten wymiar
  powinien kształtować normy zespołu, a nie wymuszać sztywnego, identycznego
  harmonogramu dla wszystkich.

## Rekomendacje

### Mierz obciążenie spotkaniami i fragmentację wprost z danych kalendarza

Oblicz liczbę i długość nieprzerwanych bloków po dwie godziny lub więcej,
dostępnych w typowym tygodniu inżyniera, na podstawie danych kalendarza. Ta
jedna liczba, czasem nazywana **czasem skupienia** lub **czasem twórcy**
(maker time), to bezpośredni, możliwy do zinstrumentowania wskaźnik
zastępczy tego wymiaru i często okazuje się, że nominalnie pełnoetatowy
inżynier ma w typowym tygodniu prawie żadnych takich bloków po
uwzględnieniu spotkań, co zwykle zaskakuje kierownictwo bardziej niż samych
inżynierów.

### Śledź częstość przerwań z danych narzędzi, gdy są dostępne

Liczbę powiadomień, częstość przychodzących wiadomości w godzinach pracy i
tempo przełączania kontekstu między zadaniami można przybliżyć z istniejących
narzędzi współpracy. Używaj tych danych w agregacji, na poziomie zespołu, wg
tej samej zasady co dane o aktywności (temat 3.4): nigdy jako indywidualnego
mechanizmu nadzoru, zawsze jako sygnału na poziomie zespołu o tym, czy narzut
koordynacji w organizacji urósł ponad miarę, która chroni prawdziwe skupienie.

### Chroń jawne bloki czasu skupienia jako normę zespołu lub organizacji

Najskuteczniejsza interwencja, ku której prowadzi ten wymiar, jest prosta i
tania: wyznacz konkretne, chronione bloki czasu, zwykle poranek lub
popołudnie w określone dni, w których domyślnie nie planuje się spotkań. To
wymaga poparcia organizacyjnego wykraczającego poza kontrolę jednego zespołu,
bo spotkania często planuje się ponad granicami zespołów, ale tam, gdzie
wdrożono to konsekwentnie, jest to jedna z interwencji o najwyższym zwrocie i
najniższym koszcie w całej tej książce.

### Powiąż dane o przepływie z luką między aktywnością a wydajnością

Gdy zespół wykazuje dużą aktywność (temat 3.4), ale płaską lub spadającą
wydajność (temat 3.3), sprawdź dane o przepływie i przerwaniach, zanim
założysz, że luka odzwierciedla problem z kompetencjami osoby lub zespołu.
Mocno pocięty harmonogram może wytworzyć dokładnie ten wzorzec: mnóstwo
widocznego ruchu, mało ukończonej naprawdę trudnej pracy, bo trudna praca
wymaga właśnie długotrwałego skupienia, które fragmentacja niszczy.

### Szanuj indywidualne różnice zamiast narzucać jeden sztywny harmonogram

Nie każdy inżynier potrzebuje identycznych wzorców czasu skupienia ani
najlepiej z nimi pracuje. Niektórzy naprawdę najlepiej myślą w krótszych
zrywach, inni potrzebują długich, nieprzerwanych odcinków. Używaj danych tego
wymiaru, by kształtować normy i ustawienia domyślne na poziomie zespołu,
chronione bloki, z których można się wypisać, zamiast obowiązkowych, a nie
jednego egzekwowanego harmonogramu zakładającego jednakowe potrzeby wszystkich.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak ochrony czasu skupienia | Maksymalna elastyczność planowania spotkań | Pocięte dni zmniejszają zdolność do naprawdę trudnej pracy |
| Chronione bloki skupienia na poziomie zespołu | Niski koszt, wysoki zwrot, wprost broni głębokiej pracy | Wymaga poparcia w koordynacji wykraczającego poza jeden zespół |
| Okresy bez spotkań w całej organizacji | Najsilniejsza ochrona, najtrudniejsza do podważenia | Wymaga szerokiego zaangażowania organizacji i może wydawać się sztywna dla ról wymagających więcej koordynacji |
| Indywidualne planowanie skupienia na zasadzie dobrowolności | Szanuje indywidualne różnice w stylu pracy | Słabsza ochrona domyślna; łatwa do podważenia pod presją harmonogramu |

Główne napięcie to **potrzeba koordynacji kontra ochrona skupienia**. Duże
organizacje naprawdę potrzebują spotkań i koordynacji między zespołami, by
funkcjonować, a ta potrzeba bezpośrednio ciągnie w przeciwną stronę niż
nieprzerwany czas, którego wymaga głęboka praca inżynierska. Rozwiąż to
napięcie nie przez eliminację koordynacji, lecz przez uczynienie czasu
skupienia jawnym, chronionym ustawieniem domyślnym, a nie czasem, który
akurat zostaje po uwzględnieniu każdej prośby o spotkanie, traktując ochronę
skupienia jako zasób do świadomej obrony, a nie resztkę.

## Pytania do omówienia z zespołem

1. **Ile nieprzerwanych dwugodzinnych bloków typowy inżynier w naszym zespole
   faktycznie ma w tygodniu, mierząc na prawdziwych danych kalendarza?**
   Większość zespołów nigdy tego bezpośrednio nie sprawdzała, a odpowiedź po
   zmierzeniu jest zwykle niższa, niż ktokolwiek zgadłby z samego wrażenia.

2. **Czy kiedykolwiek widzieliśmy lukę między aktywnością a wydajnością,
   którą mogłyby wyjaśnić dane o przepływie?** Spójrz na okres, w którym
   zespół wydawał się zajęty, ale nie dowiózł naprawdę trudnej pracy, i
   sprawdź, czy lukę mogą tłumaczyć obciążenie spotkaniami lub fragmentacja.

3. **Czego trzeba, by ustanowić chroniony, wolny od spotkań blok skupienia
   dla naszego zespołu i co stoi dziś na przeszkodzie?** Nazwij konkretną
   przeszkodę, nawyki planowania między zespołami, oczekiwanie kierownictwa
   stałej dostępności, i omów, czy jest naprawdę tak niezmienna, jak się
   wydaje.

4. **Czy szanujemy indywidualne różnice w potrzebach skupienia, czy obecny
   harmonogram zakłada, że wszyscy pracują tak samo?** Zapytaj członków
   zespołu wprost, jak faktycznie wolą organizować skupioną pracę, zamiast
   zakładać jeden wzorzec dla wszystkich.

5. **Jak zmieniło się nasze obciążenie spotkaniami w ostatnim roku i czy
   ktokolwiek zauważył ten trend przed tą rozmową?** Fragmentacja
   wkrada się często stopniowo, jedno rozsądnie wyglądające cykliczne
   spotkanie po drugim, i rzadko jest skutkiem jednej świadomej decyzji.

6. **Gdybyśmy w całej organizacji chronili dwa pełne popołudnia w tygodniu na
   głęboką pracę, czemu musielibyśmy odmówić i czy by się to opłaciło?** To
   konkretne pytanie o kompromis wydobywa napięcie między koordynacją a
   skupieniem na wierzch, zamiast zostawiać je jako abstrakcyjną aspirację.

## Perspektywa sektorowa

**Startup.** Obciążenie spotkaniami jest zwykle naturalnie niskie w małym
zespole, a ryzyko to raczej przełączanie kontekstu wynikające z noszenia
wielu kapeluszy naraz, a nie z planowanych spotkań. Chroń czas skupienia
świadomie nawet w małej skali, bo ten nawyk łatwiej ustanowić wcześnie, niż
dorabiać później.

**Mała firma.** Prosta, nieformalna norma, na przykład brak wewnętrznych
spotkań przed południem, może uchwycić większość korzyści tego wymiaru bez
narzędzi do analityki kalendarza. W tej skali ważniejsza jest dyscyplina niż
pomiar.

**Duże przedsiębiorstwo.** Obciążenie spotkaniami i narzut koordynacji między
zespołami skalują się tu źle, a fragmentacja często wkrada się przez wiele
pojedynczo rozsądnych cyklicznych spotkań, na które nikt nie spojrzał łącznie.
Mierz dostępność czasu skupienia wprost z danych kalendarza w całej
organizacji i traktuj chronione bloki skupienia jako politykę całej
organizacji, a nie opcję zespół po zespole, nadpisywaną przez nawyki
planowania między zespołami.

**Administracja publiczna.** Ciężkie wymagania nadzoru i koordynacji, częste w
sektorze publicznym, sprawiają, że ten wymiar szczególnie warto świadomie
chronić, bo naturalny napór ku większej liczbie procesów i spotkań
przeglądowych jest silny. Przedstawiaj ochronę czasu skupienia jawnie jako
inwestycję w produktywność, gdy przekonujesz interesariuszy, którzy mogą
widzieć ograniczanie spotkań jako osłabianie nadzoru, a nie ochronę realnej
zdolności inżynierskiej.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy z sektora technologii
finansowych zauważyło uporczywą lukę między aktywnością commitów a zdolnością
zespołu do terminowego dostarczania naprawdę złożonych funkcji. Analiza
kalendarza wykazała, że mediana inżyniera miała mniej niż trzy godziny
nieprzerwanych dwugodzinnych bloków dostępnych tygodniowo, rozdrobnionych
między cykliczne spotkania statusowe, z których wiele dodawano przyrostowo
przez dwa lata bez żadnej pojedynczej decyzji o dodaniu tak dużego łącznego
obciążenia spotkaniami. Firma wprowadziła dwa obowiązkowe, ogólnoorganizacyjne
popołudnia bez spotkań tygodniowo, a ankieta kontrolna i przegląd metryk
dostarczania sześć miesięcy później pokazały zarówno lepsze wyniki
satysfakcji, jak i mierzalne skrócenie czasu cyklu (temat 2.6)
konkretnie dla złożonych, wielodniowych funkcji.

**Administracja publiczna.** Zespół inżynierski agencji federalnej, działający
pod ciężkimi wymaganiami nadzoru, stwierdził w audycie kalendarza,
przeprowadzonym po tym, jak kilku inżynierów zgłosiło obawy w rozmowach
wyjściowych, że inżynierowie spędzają prawie 40% godzin pracy na spotkaniach
statusowych i przeglądach zgodności. Zamiast likwidować wymagania nadzoru,
które służyły realnym celom kontrolnym, zespół skonsolidował zbędne spotkania
statusowe w jeden tygodniowy przegląd i przeniósł rutynowe kontrole zgodności
na asynchroniczny przegląd dokumentacji zamiast spotkań na żywo, ograniczając
obciążenie spotkaniami niemal o połowę przy zachowaniu funkcji nadzorczej,
a późniejsze dane z ankiety pokazały znaczącą poprawę zgłaszanego czasu
skupienia.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z ochrony czasu skupienia jest nieproporcjonalny do jej kosztu: przykład
z technologii finansowych powyżej pokazuje mierzalną poprawę dostarczania po
zmianie, która nie kosztowała nic poza dyscypliną planowania, czyli dwa
popołudnia w tygodniu bez spotkań. Ponieważ głęboka, złożona praca zależy
właśnie od długotrwałej, nieprzerwanej uwagi, nawet skromny wzrost
dostępności prawdziwego czasu skupienia może dać nieproporcjonalnie dużą
poprawę zdolności organizacji do jej najtrudniejszej, najcenniejszej pracy.

Całkowity koszt posiadania to niemal wyłącznie dyscyplina organizacyjna, a nie
inwestycja w narzędzia: dane kalendarza są zwykle już dostępne, a sama
interwencja, ochrona konkretnych bloków, nie kosztuje nic poza gotowością
odmowy planowania w nich spotkań. Główny stały koszt to obrona chronionego
czasu przed stopniową erozją, gdy nieuchronnie pojawiają się nowe potrzeby
koordynacji.

## Antywzorce i pułapki

- **Traktowanie pociętych dni jako nieuniknionego kosztu skali:** kumuluje się
  stopniowo i rzadko jest skutkiem jednej świadomej decyzji, co ułatwia
  pozostawienie go bez reakcji.
- **Mylenie dużej aktywności z dużą wydajnością bez sprawdzenia danych o
  przepływie:** pocięty harmonogram może wytworzyć dokładnie ten mylący
  wzorzec.
- **Narzucanie jednego, sztywnego harmonogramu czasu skupienia wszystkim:**
  ignoruje realne indywidualne różnice w tym, jak ludzie pracują najlepiej.
- **Używanie danych o przerwaniach lub powiadomieniach do nadzoru nad
  jednostkami:** powtarza dokładnie to ryzyko nadużycia, przed którym temat
  3.4 ostrzega w odniesieniu do danych o aktywności.
- **Pozwalanie, by chroniony czas skupienia erodował przez wyjątki:** to samo
  ryzyko erozji, o którym temat 2.5 ostrzega w odniesieniu do limitów WIP,
  zastosowane do ochrony czasu skupienia.
- **Dodawanie wymagań nadzoru lub koordynacji bez mierzenia ich łącznego
  kosztu w obciążeniu spotkaniami:** fragmentacja wkrada się, jeden
  rozsądnie wyglądający dodatek po drugim.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Czasu skupienia i kosztu przerwań nie mierzy się ani
  nie chroni. Obciążenie spotkaniami rośnie, a nikt nie śledzi jego łącznego
  efektu.
- **Poziom 2, Rozwój:** Istnieje nieformalna świadomość fragmentacji, ale nie
  analizuje się danych kalendarza i nie ustanowiono formalnie chronionego
  czasu.
- **Poziom 3, Standaryzacja:** Dostępność czasu skupienia jest mierzona z
  danych kalendarza, a chronione, wolne od spotkań bloki są ustanowione jako
  norma zespołu lub organizacji.
- **Poziom 4, Zarządzanie:** Dane o przepływie są aktywnie powiązane z lukami
  między aktywnością a wydajnością, by diagnozować niedowożenie wynikające z
  fragmentacji, a chroniony czas jest monitorowany pod kątem erozji.
- **Poziom 5, Orkiestracja:** Organizacja traktuje ochronę czasu skupienia
  jako pełnoprawną inwestycję w produktywność, potrafi wskazać konkretne
  poprawy dostarczania i satysfakcji z niej wynikające i broni jej
  proaktywnie przed stopniową, przyrostową presją, która inaczej by ją
  podkopała.

## Pomysły do dyskusji

1. Ile naprawdę nieprzerwanych godzin miał każdy z nas w zeszłym tygodniu?
2. Czy nasze obciążenie spotkaniami rosło stopniowo, choć nikt nie zdecydował tego celowo?
3. Gdzie niedawna luka między aktywnością a wydajnością mogła być w rzeczywistości problemem przepływu?
4. Jakie jedno cykliczne spotkanie wycięlibyśmy pierwsze, gdyby poproszono nas o ograniczenie fragmentacji?
5. Ile faktycznie kosztowałoby nas ustanowienie dwóch chronionych popołudni w tygodniu bez spotkań?

## Kluczowe wnioski

- Efektywność i flow mierzy **brak tarcia** i zdolność do podtrzymania
  **nieprzerwanej, skupionej pracy**, od której inżynieria oprogramowania
  zależy wyjątkowo silnie.
- **Przełączanie kontekstu ma realny, mierzalny koszt**, często wiele minut
  na ponowne skupienie, nie sekund.
- Mierz **dostępność czasu skupienia wprost z danych kalendarza**. Wynik
  zwykle zaskakuje kierownictwo.
- Ten wymiar często **tłumaczy lukę między aktywnością a wydajnością**, która
  inaczej zostałaby źle zdiagnozowana.
- **Chronione bloki czasu skupienia** to interwencja o niskim koszcie i
  wysokim zwrocie, ale wymaga świadomej obrony przed stopniową erozją.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal Newport
  (koszt przełączania kontekstu i wartość chronionego czasu skupienia).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco i Timothy Lister
  (koszt przerwań i projektowanie środowisk chroniących skupienie).
- Mark, Gloria, Daniela Gudith i Ulrich Klocke, "The Cost of Interrupted
  Work: More Speed and Stress" (2008): badania empiryczne nad czasem
  powrotu do pracy po przerwaniu.
