# 7.2 Pomiar tworzenia oprogramowania wspomaganego przez AI

## Przegląd i motywacja

Temat 7.1 ustalił, dlaczego kilka istniejących metryk nie mierzy już
wiarygodnie tego, co mierzyło dawniej, gdy oprogramowanie powstaje z
pomocą AI. Ten temat dotyczy tego, co mierzyć zamiast nich: jak się
dowiedzieć, na prawdziwych dowodach, a nie na podstawie wrażeń czy
marketingu dostawców, czy asystent kodowania AI faktycznie pomaga twojej
organizacji i na ile. To naprawdę ważne pytanie z realnymi konsekwencjami
budżetowymi. Licencje na narzędzia AI to realny, stały koszt, a dyscyplina
ekonomii jednostkowej z tematu 5.4 stosuje się tu wprost. Organizacja, która
nie potrafi na nie odpowiedzieć dowodami, albo przepłaca za narzędzie,
które nie pomaga, albo niedoinwestowuje takie, które naprawdę pomaga.

To podejście czerpie wprost z zasady rezultatów ponad produkcją z tematu
1.3, zastosowanej teraz do oceny narzędzi AI. Naiwne, najczęstsze podejście
mierzy tworzenie wspomagane przez AI wolumenem produkcji: liczbą
wygenerowanych linii kodu, zaakceptowanych sugestii, czasem zaoszczędzonym
na zadaniu, zgłaszanym przez samych programistów. To dokładnie te metryki,
które według tematu 7.1 są najbardziej narażone na tę zmianę.
Bardziej rygorystyczne podejście, które zaleca ten temat, mierzy
rezultaty: czy pomoc AI faktycznie skróciła czas cyklu bez pogorszenia
jakości, czy zmniejszyła czas poświęcany na pracę naprawdę mało wartościową
i powtarzalną, uwalniając moce na pracę bardziej wartościową, i czy
mierzalnie wpłynęła na rezultaty biznesowe i produktowe z części 5.

W dużych zespołach właściwy pomiar decyduje o tym, czy decyzje o inwestycji
w narzędzia AI zapadają na podstawie dowodów, czy twierdzeń dostawców i
pędu organizacyjnego. Duże przedsiębiorstwa negocjujące kontrakty na
narzędzia AI na dużą skalę potrzebują prawdziwych dowodów wartości, by
uzasadnić wydatek i uczciwie porównać konkurencyjne narzędzia.
Administracja publiczna, często pod szczególną kontrolą w kwestii wydatków
technologicznych, potrzebuje rygorystycznej, obronnej metodologii oceny,
zanim zaangażuje środki publiczne w wdrożenie narzędzi AI na dużą skalę.

## Kluczowe zasady

- **Mierz pomoc AI rezultatami, a nie wolumenem produkcji ani statystykami
  użycia raportowanymi przez dostawców.** Dyscyplina z tematu 1.3
  obowiązuje tu w pełni.
- **Gdzie to możliwe, używaj prawdziwej [grupy porównawczej](https://en.wikipedia.org/wiki/Treatment_and_control_groups)**, a nie tylko
  porównania przed i po, które może zakłócić rosnąca w całej branży wartość
  odniesienia.
- **Samodzielnie zgłaszane oszczędności czasu to słaby sygnał.** Sparuj je
  z obiektywnymi danymi o czasie cyklu i jakości.
- **Mierz pełny koszt, w tym czas przeglądu i poprawek**, a nie samą
  szybkość generowania.
- **Różne zadania i różni inżynierowie mogą widzieć bardzo różną wartość
  pomocy AI.** Unikaj jednej, uśrednionej liczby dla całej organizacji,
  która ukrywa tę zmienność.

## Rekomendacje

### Zbuduj prawdziwe porównanie, a nie tylko migawkę przed i po

Gdzie to możliwe, porównuj rezultaty grupy korzystającej z pomocy AI z
porównywalną grupą, która z niej nie korzysta, w tym samym okresie, zamiast
porównywać tylko własne liczby organizacji sprzed i po. Takie porównanie
nie odróżni efektu pomocy AI od jakiejkolwiek innej równoczesnej zmiany
(ostrożność wobec zmiennych zakłócających z tematu 1.6 stosuje się tu
wprost). Tam, gdzie prawdziwa grupa porównawcza jest niepraktyczna,
porównuj przynajmniej z dłuższą historyczną wartością odniesienia (karta
kontrolna, według tematu 1.6), a nie z pojedynczą migawką przed i po,
podatną na regresję do średniej lub niezwiązane równoczesne zmiany.

### Mierz razem czas cyklu i jakość, nigdy samego twierdzenia o szybkości pomocy AI

Zastosuj wprost dyscyplinę z tematów 2.6 i 2.10: śledź, czy praca
wspomagana przez AI szybciej przechodzi przez etapy czasu cyklu, a
równocześnie czy odsetek nieudanych zmian lub odsetek uciekających defektów
(temat 5.1) dla tej pracy nie porusza się w złym kierunku. Prawdziwy zysk
produktywności to szybszy czas cyklu przy stabilnej lub poprawionej
jakości; fałszywy zysk to szybszy czas cyklu przy pogarszającej się
jakości, dokładnie ta wymiana, przed którą ostrzegał temat 7.1, odkryta
tutaj dzięki tej samej dyscyplinie sparowanych metryk, którą ta książka
stosuje od początku do końca.

### Uwzględnij czas przeglądu i poprawek w pełnym rachunku kosztów

Kod generowany przez AI, który powstaje szybciej, ale jest wolniejszy w
przeglądzie albo wymaga więcej poprawek i przeróbek po pierwszym
wygenerowaniu, może nie dawać netto żadnej poprawy czasu cyklu, gdy
zmierzy się cały potok, nawet jeśli sam etap generowania kodu wydawał się
indywidualnemu inżynierowi dramatycznie szybszy. Mierz pełny łańcuch czasu
cyklu (temat 2.6), a nie tylko etap kodowania, by uchwycić to uczciwie,
zamiast przypisywać zasługę pomocy AI na podstawie odczuwanego, ale
niepełnego poczucia szybkości.

### Traktuj samodzielnie zgłaszane oszczędności czasu jako hipotezę startową, a nie wniosek

Zgłoszenie programisty „to zaoszczędziło mi godzinę" jest użyteczne jako
wstępny sygnał i kontekst jakościowy (połączone podejście ilościowo-
jakościowe z tematu 5.3 stosuje się i tu), ale podlega tym samym
błędom przypominania i pożądania społecznego, przed którymi temat 1.5
ostrzega przy wszelkich danych zgłaszanych samodzielnie, i nic nie mówi o
późniejszym koszcie przeglądu lub poprawek. Używaj samoocen do
formułowania hipotez, gdzie pomoc AI pomaga najbardziej, a potem
zweryfikuj je obiektywnymi danymi o czasie cyklu i jakości, zanim wyciągniesz
stanowczy wniosek.

### Segmentuj pomiar według typu zadania i unikaj jednej uśrednionej liczby

Pomoc AI w kodowaniu prawdopodobnie daje bardzo różną wartość w kodzie
szablonowym, dobrze zrozumianych zadaniach i w naprawdę nowatorskim,
złożonym rozwiązywaniu problemów. Mierz i raportuj według kategorii zadań,
a nie jedną uśrednioną liczbą dla całej organizacji, która może ukryć, że
pomoc daje dużą wartość w jednej kategorii, a w innej niewielką, a nawet
ujemną, informację, którą uśredniona liczba całkowicie zasłoni.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Same samodzielnie zgłaszane oszczędności czasu | Szybkie, łatwe do zebrania | Słaby sygnał; podatne na błędy poznawcze; ignoruje późniejszy koszt przeglądu |
| Samo porównanie przed i po | Proste do przygotowania | Zakłócone przez każdą inną równoczesną zmianę lub trend branżowy |
| Prawdziwa grupa porównawcza | Najsilniejszy, najbardziej obronny dowód | Trudniejsza do zorganizowania; może być niewykonalna przy pełnym wdrożeniu |
| Pomiar rezultatów segmentowany według zadań | Pokazuje, gdzie naprawdę koncentruje się wartość | Wymaga bardziej szczegółowego śledzenia i kategoryzacji |

Główne napięcie to **rygor pomiaru kontra praktyczna wykonalność**.
Prawdziwa, kontrolowana grupa porównawcza to najsilniejszy dowód, ale
często jest niepraktyczna, gdy narzędzie wdrożono w całej organizacji bez
zatrzymania grupy kontrolnej. Samodzielnie zgłaszane wrażenia są szybkie i
łatwe, ale same w sobie słabe. Rozwiąż to napięcie, używając najsilniejszego
projektu porównania, na jaki pozwala twoje faktyczne wdrożenie: prawdziwej
grupy kontrolnej w fazie wczesnego pilotażu, jeśli to możliwe, a jeśli nie,
karty kontrolnej z historyczną wartością odniesienia, i traktując
samoocenę jako narzędzie do generowania hipotez, a nie ostatnie słowo,
niezależnie od tego, jaki projekt porównania w końcu zastosujesz.

## Pytania do omówienia z zespołem

1. **Czy mieliśmy, albo czy moglibyśmy jeszcze zbudować, prawdziwą grupę
   porównawczą do oceny przyjęcia naszych narzędzi AI, czy polegamy
   wyłącznie na porównaniu przed i po?** Jeśli prawdziwej grupy porównawczej
   nigdy nie ustanowiono, omówcie, czy karta kontrolna z historyczną
   wartością odniesienia mogłaby nadal dać dość rygorystyczną alternatywę.

2. **Czy mierzyliśmy razem czas cyklu i jakość dla pracy wspomaganej przez
   AI, czy mamy tylko twierdzenie o szybkości bez odpowiadającej kontroli
   jakości?** Wyciągnij dostępne dane i sprawdź to konkretne sparowanie;
   jeśli go nie ma, ta luka to najpilniejsza poprawka w tym temacie.

3. **Czy nasz pomiar czasu cyklu dla pracy wspomaganej przez AI obejmuje
   czas przeglądu i poprawek, czy tylko początkowy etap generowania?**
   Twierdzenie o szybkości oparte wyłącznie na czasie generowania, z
   pominięciem późniejszego kosztu przeglądu, naraża na pułapkę niepełnego
   rachunku, przed którą ten temat ostrzega wprost.

4. **Jakie samodzielnie zgłoszone twierdzenia o oszczędności czasu
   zebraliśmy i czy któreś z nich zweryfikowaliśmy obiektywnymi danymi?**
   Wybierz jedno konkretne, często powtarzane twierdzenie i sprawdź, czy
   obiektywne dane faktycznie je potwierdzają.

5. **Czy nasz obecny pomiar uśrednia wszystkie typy zadań w jedną liczbę,
   czy wiemy, w których kategoriach pracy pomoc AI daje największą
   wartość?** Jeśli uśrednia, omówcie, co mógłby ujawnić podział według
   zadań, czego obecna liczba nie pokazuje.

6. **Gdybyśmy dziś musieli obronić naszą inwestycję w narzędzia AI przed
   sceptycznym interesariuszem finansowym, używając dowodów, a nie
   wrażeń, co faktycznie moglibyśmy mu pokazać?** Ten konkretny test
   ujawnia lukę między tym, w co organizacja obecnie wierzy na temat
   wartości pomocy AI, a tym, co potrafi faktycznie wykazać dowodami.

## Perspektywa sektorowa

**Startup.** Formalne badanie z grupą porównawczą jest zwykle niepraktyczne
w małej skali, ale nawet proste, uczciwe spojrzenie na czas cyklu i
częstość defektów przed i po, zamiast polegania wyłącznie na tym, jak
szybko praca się wydaje, daje znacząco bardziej wiarygodny sygnał niż samo
wrażenie.

**Mała firma.** Skup wysiłek pomiarowy najpierw na swojej najbardziej
wartościowej i najbardziej powtarzalnej kategorii zadań, gdzie wartość
pomocy AI jest najprawdopodobniej wyraźna i mierzalna, zamiast próbować
kompleksowej oceny każdego rodzaju pracy, którą wykonuje twój mały zespół.

**Duże przedsiębiorstwo.** Prawdziwe, kontrolowane porównanie w fazie
wczesnego pilotażu, przed pełnym wdrożeniem w całej organizacji, jest tu
często osiągalne i warte świadomego wysiłku organizacyjnego, ponieważ daje
znacznie bardziej obronne dowody do wielkoskalowej decyzji inwestycyjnej,
która zwykle następuje po udanym pilotażu.

**Administracja publiczna.** Decyzje o wydatkach publicznych na
technologię, w tym zakupy narzędzi AI, często podlegają szczególnej
kontroli i mogą wymagać formalnego uzasadnienia kosztów i korzyści
(temat 5.5). Wbuduj dyscyplinę pomiarową zalecaną w tym temacie w każdą
fazę pilotażu od początku, ponieważ rygorystyczna, udokumentowana
metodologia oceny znacząco wzmacnia późniejsze uzasadnienie finansowania
lub zakupu.

## Przykłady

**Przedsiębiorstwo.** Firma programistyczna wdrożyła asystenta kodowania AI
w połowie swoich zespołów inżynierskich jako świadomy pilotaż, zatrzymując
drugą połowę jako grupę porównawczą na jeden kwartał przed pełnym
wdrożeniem. Grupa pilotażowa wykazała prawdziwą, statystycznie istotną
poprawę czasu cyklu dla dobrze zdefiniowanych zadań z dużym udziałem kodu
szablonowego, ale nie wykazała mierzalnej poprawy, a nawet nieco wyższą
liczbę iteracji przeglądu (temat 2.9), dla złożonej, nowatorskiej pracy
architektonicznej. To ustalenie segmentowane według zadań, widoczne tylko
dzięki prawdziwemu projektowi porównania i podziałowi na kategorie zadań,
skłoniło firmę do ukierunkowania komunikacji o wdrożeniu pomocy AI i
szkoleń na kategorie zadań, w których wyraźnie pomagała, zamiast
przedstawiania jej jako jednolitego zastrzyku produktywności w całej pracy.

**Administracja publiczna.** Agencja federalna pilotująca asystenta kodowania
AI w części zespołów swojego programu modernizacji początkowo polegała na
ankietach o samodzielnie zgłaszanych oszczędnościach czasu, które
pokazywały entuzjastyczne, jednolicie pozytywne odpowiedzi. Późniejsza
obiektywna analiza, porównująca czas cyklu i odsetek uciekających defektów
między zespołami pilotażowymi a porównywalną kohortą spoza pilotażu,
pracującą nad podobnymi komponentami systemów, wykazała, że obiektywna
poprawa czasu cyklu była prawdziwa, ale wyraźnie mniejsza, niż sugerowały
samoocenne szacunki, oraz zidentyfikowała skromny, ale realny wzrost czasu
przeglądu, który niwelował część zysku z szybkości generowania, a który
same dane z samoocen całkowicie przeoczyły. Ten dokładniejszy obraz,
oparty na dowodach, bezpośrednio ukształtował skromniejsze i bardziej
obronne uzasadnienie biznesowe dalszego, rozszerzonego zakupu narzędzia.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rygorystycznego mierzenia tworzenia wspomaganego przez AI są
pewne, oparte na dowodach decyzje inwestycyjne: organizacja, która wie
dokładnie, gdzie pomoc AI naprawdę pomaga, może inwestować w jej
rozszerzanie właśnie tam i unikać przepłacania za licencje w kategoriach
zadań, w których daje niewielką wartość, czyli dokładnie tego wglądu
wynikającego z segmentacji według zadań, który pokazuje przykład firmy
programistycznej powyżej. To łączy się bezpośrednio z ekonomią jednostkową
z tematu 5.4 i dyscypliną ROI z tematu 5.5, ponieważ koszt narzędzi AI,
często licencjonowanych na stanowisko, wymaga tego samego rygorystycznego
rachunku kosztów i korzyści, który ta książka stosuje do każdej innej
dużej inwestycji inżynierskiej.

Całkowity koszt posiadania to wysiłek analityczny potrzebny do zbudowania
prawdziwych porównań, zmierzenia pełnego czasu cyklu z przeglądem i
poprawkami oraz segmentacji według typu zadania, czyli więcej pracy niż
przyjęcie statystyk użycia raportowanych przez dostawców lub samodzielnie
zgłaszanych wrażeń za dobrą monetę. Ten wysiłek jest uzasadniony wprost
skalą kosztów licencji na narzędzia AI w dużej organizacji i ryzykiem
słabo udokumentowanego, kosztownego zobowiązania na całą organizację,
opartego na wrażeniach, a nie na danych.

## Antywzorce i pułapki

- **Mierzenie pomocy AI samym wolumenem produkcji lub statystykami użycia
  od dostawców:** powtarza wprost główne ostrzeżenie z tematu 7.1.
- **Poleganie wyłącznie na samodzielnie zgłaszanych oszczędnościach czasu:**
  słaby sygnał, podatny na błędy poznawcze i ślepy na późniejszy koszt
  przeglądu i poprawek.
- **Mierzenie tylko etapu szybkości generowania, z pominięciem pełnego
  czasu cyklu:** daje niepełny, potencjalnie mylący rachunek faktycznego
  wpływu na produktywność.
- **Raportowanie jednej, uśrednionej liczby dla całej organizacji:** ukrywa
  realną zmienność wartości w różnych kategoriach zadań.
- **Brak grupy porównawczej lub historycznej wartości odniesienia:** nie da
  się odróżnić faktycznego efektu pomocy AI od innej równoczesnej zmiany.
- **Traktowanie entuzjastycznego wyniku ankiety samooceny jako wystarczającego
  dowodu do wielkoskalowej decyzji inwestycyjnej:** grozi dokładnie tą
  luką, którą agencja federalna z powyższego przykładu odkryła dopiero po
  zbudowaniu bardziej rygorystycznego porównania.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Wartość tworzenia wspomaganego przez AI jest
  oceniana, jeśli w ogóle, wyłącznie na podstawie samodzielnie zgłaszanych
  wrażeń i statystyk użycia od dostawców.
- **Poziom 2, Rozwój:** Istnieją pewne dane o czasie cyklu lub jakości, ale
  nie ma prawdziwej grupy porównawczej ani historycznej wartości odniesienia
  i analizy segmentowanej według zadań.
- **Poziom 3, Standaryzacja:** Prawdziwy projekt porównania (grupa
  kontrolna lub historyczna wartość odniesienia) ze sparowanym pomiarem
  czasu cyklu i jakości jest stosowany konsekwentnie, segmentowany według
  typu zadania.
- **Poziom 4, Zarządzanie:** Śledzony jest pełny rachunek czasu cyklu, w tym
  czas przeglądu i poprawek; samodzielnie zgłaszane twierdzenia są
  systematycznie weryfikowane obiektywnymi danymi.
- **Poziom 5, Orkiestracja:** Organizacja ma dojrzałe, oparte na dowodach
  rozeznanie, gdzie dokładnie pomoc AI naprawdę pomaga, co kieruje celowanym
  wdrażaniem, inwestycjami w szkolenia i decyzjami zakupowymi,
  poparte wykazanym, obronnym ROI.

## Pomysły do dyskusji

1. Jakie prawdziwe porównanie, jeśli w ogóle, mamy dla obecnego przyjęcia naszych narzędzi AI?
2. Czy mierzyliśmy razem czas cyklu i jakość, czy tylko twierdzenie o szybkości?
3. Które samodzielnie zgłoszone twierdzenie o pomocy AI powinniśmy zweryfikować obiektywnymi danymi?
4. Która konkretna kategoria zadań wykazuje u nas najmocniejsze dowody prawdziwej wartości pomocy AI?
5. Czy moglibyśmy dziś obronić naszą inwestycję w narzędzia AI przed sceptycznym interesariuszem finansowym, dowodami?

## Kluczowe wnioski

- Mierz tworzenie wspomagane przez AI **rezultatami**, a nie wolumenem
  produkcji ani statystykami użycia raportowanymi przez dostawców.
- Używaj **prawdziwej grupy porównawczej lub historycznej wartości
  odniesienia**, a nie samej migawki przed i po, podatnej na zakłócenia.
- Mierz **razem czas cyklu i jakość**, obejmując cały potok, czas przeglądu
  i poprawek, a nie tylko szybkość generowania.
- Traktuj **samodzielnie zgłaszane oszczędności czasu jako hipotezę**, a nie
  wniosek, i weryfikuj je obiektywnymi danymi.
- **Segmentuj według typu zadania**; jedna uśredniona liczba ukrywa, gdzie
  wartość naprawdę się koncentruje, a gdzie nie.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (dyscyplina pomiaru rezultatów, którą ten temat
  stosuje do oceny narzędzi AI).
- Badania GitHub nad programowaniem w parze z AI i produktywnością
  programistów (empiryczne badania na dużą skalę o rezultatach tworzenia
  wspomaganego przez AI).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (wielowymiarowa dyscyplina pomiaru,
  którą ten temat stosuje do konkretnej nowej kategorii narzędzi).
- *How to Measure Anything*, Douglas W. Hubbard (budowanie obronnych
  porównań i kwantyfikowanie wartości w warunkach prawdziwej niepewności).
