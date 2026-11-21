# 2.10 Ramy metryk DORA

## Przegląd i motywacja

**[Metryki DORA](https://dora.dev/guides/dora-metrics/)** pochodzą z programu
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment,
wieloletniego przedsięwzięcia badawczego, opublikowanego później jako książka
*Accelerate* autorstwa Nicole Forsgren, Jez Humble i Gene Kim, które przebadało
dziesiątki tysięcy profesjonalistów inżynierii, by ustalić, które praktyki
dostarczania korelują z wynikami organizacji. Rezultatem były cztery metryki,
sparowane po dwie: częstotliwość wdrożeń i czas realizacji zmiany mierzą szybkość;
odsetek nieudanych zmian i czas przywrócenia po nieudanym wdrożeniu, często
skracany do średniego czasu przywracania (MTTR), mierzą stabilność. Wynikiem
badań, który uczynił ramy znaczącymi, było to, że czołowi wykonawcy byli
jednocześnie szybcy i stabilni, co obaliło założenie, że szybkość i bezpieczeństwo
się wzajemnie wymieniają, a to ustalenie pozostaje najjaśniejszym praktycznym
przykładem zasady parowania z barierą ochronną z tematu 1.2, jaki ma ta książka:
metryka szybkości objęta zachętą, sparowana z barierą stabilności, to właśnie to, co
faktycznie robią najlepiej działające organizacje.

Ta książka omawia DORA w tej części na końcu, celowo, a nie jako ramy organizujące
część. To umiejscowienie nie jest odrzuceniem badań, które pozostają naprawdę
rygorystyczne i warte użycia. Odzwierciedla konkretne, realne ograniczenie: DORA
mierzy, jak szybko i jak bezpiecznie potok się porusza, ale milczy o tym, co
przez potok płynie. Zespół może pokazywać znakomite liczby DORA, podczas gdy jego
faktyczna produkcja po cichu zdryfowała ku poprawkom defektów albo zagłodziła dług
techniczny i pracę nad bezpieczeństwem ze zdolności, wzorzec, który Flow Framework z
tematów od 2.1 do 2.4 jest zbudowany, by wydobyć, a którego DORA nie widzi. Używaj
DORA tak, jak przedstawia ją ten temat: jako dobrze zwalidowanej, węższej miary
referencyjnej mechaniki potoku, a nie całego obrazu zdrowia dostarczania.

Dla dużych zespołów pozostałą, prawdziwą wartością DORA jest porównywalność.
Metryka obliczana spójnie z danych potoku i incydentów pozwala organizacji
porównywać zdolność dostarczania wielu zespołów pracujących w różnych dziedzinach
bez problemu porównywania jabłek z pomarańczami, który trapi większość porównań
międzyzespołowych. Duże przedsiębiorstwa nadal używają jej do priorytetyzacji
inwestycji platformowych; organizacje rządowe nadal używają jej do wykazywania,
dowodami, że program modernizacji mierzalnie poprawił mechanikę dostarczania.
Traktuj to jako właściwe, ograniczone zadanie DORA, a tematy Flow Framework
wcześniej w tej części stosuj do szerszego pytania, czy w ogóle dostarcza się
właściwe rzeczy.

## Kluczowe zasady

- **DORA mierzy potok, a nie wartość, która nim płynie.** Temat 2.1 nazywa tę
  lukę wprost; używaj rozkładu przepływu (temat 2.3), by zobaczyć to, czego DORA
  nie widzi.
- **Szybkość i stabilność mierzy się razem, nigdy osobno.** Panel zainspirowany
  DORA bez obu połówek tak naprawdę nie używa ram.
- **Spójność definicji ma większe znaczenie niż surowa liczba.** Zespół
  przechodzący od wydajności "średniej" do "wysokiej" na spójnie zdefiniowanej
  metryce to realny sygnał; porównanie dwóch zespołów liczonych inaczej nim nie
  jest.
- **DORA mierzy system, a nie jednostki.** Stosowanie tych metryk do pojedynczych
  inżynierów łamie statystyczną podstawę ram i zaprasza dokładnie to
  manipulowanie, przed którym ostrzega temat 1.2.
- **Wszystkie cztery metryki są wskaźnikami zastępczymi, a nie celami.** Korelują z
  wynikami organizacji; gonienie za samą liczbą, oderwane od prawdziwej poprawy
  dostarczania, niweczy cel ram.

## Rekomendacje

### Instrumentuj częstotliwość wdrożeń z potoku, licząc tylko wydania produkcyjne

**Częstotliwość wdrożeń** mierzy, jak często zespół z powodzeniem wydaje na
produkcję. Licz tylko udane wdrożenia produkcyjne, instrumentowane automatycznie z
danych potoku CI/CD, nigdy zgłaszane samodzielnie. Pilnuj konkretnie manipulowania
przez podstawienie, rozbijania jednej znaczącej zmiany na kilka trywialnych
wdrożeń wyłącznie po to, by zawyżyć liczbę, śledząc rozmiar wdrożenia obok
częstotliwości: malejący średni rozmiar obok rosnącej liczby jest najjaśniejszym
znakiem, że to się dzieje.

### Instrumentuj czas realizacji zmiany od pierwszego commita do produkcji

**Czas realizacji zmiany** mierzy czas od pierwszego commita zmiany kodu do jej
udanego wdrożenia na produkcji. Raportuj zarówno medianę, jak i wysoki percentyl, a
nie samą średnią, zgodnie ze wskazówką z tematu 1.6 dla skośnych danych czasowych, i
pilnuj dryfu definicji na obu końcach, który pochlebia liczbie bez żadnej
prawdziwej poprawy.

### Zdefiniuj odsetek nieudanych zmian na piśmie, zanim zaczniesz porównywać zespoły

**Odsetek nieudanych zmian** mierzy procent wdrożeń powodujących awarię
wymagającą naprawy, wycofania zmiany, hotfixa lub incydentu. To najtrudniejsza z
czterech metryk do spójnego zdefiniowania, bo "awaria" nie jest oczywiście
obiektywna. Uzgodnij pisemną definicję, zanim porównasz zespoły; bez niej pozornie
uczciwe porównanie może poważnie wprowadzić w błąd. Uważaj na podejrzanie szybką
poprawę bez stojącej za nią zmiany procesu, najjaśniejszy znak manipulowania
definicją, a nie prawdziwego postępu.

### Mierz czas przywrócenia od wykrycia, a nie od zdarzenia wdrożenia

**Czas przywrócenia po nieudanym wdrożeniu** mierzy, ile czasu zajmuje przywrócenie
usługi, gdy wdrożenie powoduje awarię. Uruchom zegar przy wykryciu, a nie przy samym
zdarzeniu wdrożenia, aby liczba odzwierciedlała faktyczne opóźnienie przywracania,
a nie lukę w monitoringu. Zainwestuj konkretnie w zautomatyzowaną zdolność wycofania
zmiany, najczęstszą pojedynczą dźwignię poprawy tej metryki naprawdę, a nie przez
przedwczesne ogłoszenie incydentu jako rozwiązanego.

### Używaj metryk przepływu, a nie DORA, by diagnozować, dlaczego liczba się poruszyła

Gdy metryka DORA się przesuwa, same cztery liczby rzadko wyjaśniają dlaczego. Używaj
rozkładu czasu cyklu (temat 2.6), obciążenia przepływu (temat 2.4) i rozkładu
przepływu (temat 2.3) jako warstwy diagnostycznej pod liczbami podsumowującymi DORA
i nigdy nie używaj metryki DORA w indywidualnej ocenie okresowej, najbardziej
szkodliwym nadużyciu, na jakie narażone są te ramy.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Pełne ramy DORA, wszystkie cztery metryki sparowane | Zwalidowane badaniami, odporne na manipulowanie dzięki parowaniu, umożliwiają uczciwe porównania między zespołami | Milczą o tym, jaki rodzaj wartości jest dostarczany; wymagają obok Flow Framework, by dać ten obraz |
| DORA jako jedyny zestaw metryk organizujący tę część | Proste, znajome większości liderów inżynierii | W ogóle pomija pytanie o mieszankę wartości, powód, dla którego ta książka obniża jej priorytet tutaj |
| DORA razem z Flow Framework | Widoczna zarówno mechanika potoku, jak i mieszanka wartości | Wymaga utrzymywania dwóch słowników metryk zamiast jednego |
| DORA stosowana na poziomie jednostki | Wydaje się bezpośrednio użyteczna dla niektórych kierowników | Łamie statystyczną ważność ram; silne narażenie na prawo Goodharta |

Centralne napięcie to **rygor mechaniczny kontra czytelność dla biznesu**. Cztery
metryki DORA są precyzyjnie zdefiniowane i zwalidowane badaniami, co czyni je
doskonałymi do porównywania wydajności potoku między zespołami, ale ta sama
precyzja jest wąsko ograniczona do samego potoku i nic nie mówi o tym, czy przez
niego płynie właściwa praca. Rozwiąż to napięcie, utrzymując DORA jako warstwę
referencyjną dla zdrowia potoku, właściwe miejsce tematu 2.10 w strukturze tej
książki, a tematy Flow Framework wcześniej w tej części stosując do biznesowego
pytania o mieszankę wartości, zamiast próbować sprawić, by DORA odpowiadała na
pytanie, do którego nigdy nie została zaprojektowana.

## Pytania do omówienia z zespołem

1. **Czy instrumentujemy wszystkie cztery metryki DORA z potoku, czy niektóre z
   nich to samodzielnie zgłaszane szacunki?** Ramy zbudowane na obiektywnym,
   zwalidowanym badaniami pomiarze tracą większość wartości w chwili, gdy liczba
   staje się najlepszym zgadywaniem. Zbadajcie faktyczne źródło danych każdej
   metryki (temat 1.5).

2. **Czy wszystkie zespoły, które porównujemy metrykami DORA, mają te same
   definicje wdrożenia, zmiany i awarii?** Porównanie między zespołami o różnych
   definicjach nie jest właściwie porównaniem i może dawać niesprawiedliwe osądy
   względnej wydajności.

3. **Czy ktokolwiek w naszej organizacji użył metryki DORA w indywidualnej ocenie
   okresowej, formalnie lub nieformalnie?** To najbardziej szkodliwe pojedyncze
   nadużycie ram i często zdarza się po cichu. Zapytajcie wprost i bądźcie gotowi
   na niewygodną, ale konieczną odpowiedź.

4. **Czy nasze liczby DORA mogłyby być znakomite, podczas gdy nasz rozkład
   przepływu (temat 2.3) po cichu zdryfował ku poprawkom albo od funkcji?** To
   dokładnie ta luka, której samo DORA nie widzi. Weźcie oba zestawy liczb razem i
   sprawdźcie, czy opowiadają spójną historię.

5. **Gdy któraś z naszych metryk DORA się porusza, czy mamy diagnostykę metryk
   przepływu, by wyjaśnić dlaczego?** Sama liczba DORA mówi, że coś się zmieniło, a
   nie co. Sprawdźcie, czy wasze zespoły potrafią odpowiedzieć na "dlaczego czas
   realizacji wzrósł w tym miesiącu" danymi, czy tylko spekulacją.

6. **Jak zmieniłyby się nasze cztery liczby DORA, gdybyśmy celowo próbowali
   zmanipulować każdą z nich i czy byśmy to zauważyli?** Przejdźcie po kolei przez
   częstotliwość wdrożeń, czas realizacji, odsetek nieudanych zmian i czas
   przywrócenia, praktyczne zastosowanie podstawowej dyscypliny z tematu 1.2 do tych
   konkretnych ram.

## Perspektywa sektorowa

**Startup.** Metryki szybkości DORA zwykle przychodzą naturalnie małemu zespołowi,
który już często wdraża; trudniejszą dyscypliną jest uczciwe instrumentowanie
odsetka nieudanych zmian i czasu przywrócenia, zamiast zakładania stabilności,
bo nic jeszcze poważnie się nie zepsuło. Sparowanie DORA z choćby nieformalnym
podziałem elementów przepływu (temat 2.2) wcześnie pozwala uniknąć budowania
fałszywego poczucia zdrowia dostarczania wokół samej szybkości potoku.

**Mała firma.** Większość nowoczesnych platform CI/CD i kontroli wersji eksportuje
dane o częstotliwości wdrożeń i czasie realizacji przy minimalnej konfiguracji;
powiązanie wdrożeń z incydentami dla odsetka nieudanych zmian wymaga zwykle więcej
ręcznego wysiłku. Zacznij od dwóch metryk szybkości i dodaj śledzenie stabilności,
gdy tylko istnieje nieformalny dziennik incydentów, do którego można się odnieść.

**Duże przedsiębiorstwo.** Największą pozostałą wartością DORA w tej skali jest
uczciwe, spójne porównywanie zespołów dla decyzji o inwestycjach platformowych.
Ujednolić definicje w całej organizacji (temat 1.4), zautomatyzuj instrumentację
centralnie i paruj każdy raport DORA z widokiem rozkładu przepływu, aby
kierownictwo widziało razem szybkość potoku i mieszankę wartości, a nie jedno bez
drugiego.

**Administracja publiczna.** Metryki DORA nadal dają programowi modernizacji
uzasadniony, oparty na badaniach sposób wykazania organom nadzoru poprawy mechaniki
dostarczania. Raportuj wszystkie cztery metryki razem, nigdy nie wybierając
pochlebnej połowy, i paruj je z rozkładem przepływu, aby raport odpowiadał też na
trudniejsze, ważniejsze pytanie, co szybszy potok faktycznie dostarcza.

## Przykłady

**Przedsiębiorstwo.** Program modernizacji platformy dużej firmy telekomunikacyjnej
zinstrumentował wszystkie cztery metryki DORA spójnie w czterdziestu zespołach
produktowych i pokazał prawdziwe przejście z pasm niskiej do wysokiej wydajności w
osiemnaście miesięcy, częstotliwość wdrożeń wzrosła mniej więcej dziesięciokrotnie,
czas realizacji spadł z tygodni do dni, odsetek nieudanych zmian pozostał stały.
Członek zarządu, przeglądając prezentację, zadał pytanie, na które same liczby DORA
nie mogły odpowiedzieć: jaka część tego szybszego dostarczania to nowa wartość dla
klienta, a jaka poprawki. Organizacja inżynierska nie miała odpowiedzi, dopóki w
następnym kwartale nie przyjęła klasyfikacji elementów przepływu, która pokazała, że
praca nad funkcjami faktycznie spadła jako udział w całkowitej produkcji, nawet gdy
liczby szybkości DORA się poprawiały, ustalenie, które przekształciło priorytety
programu na następny rok.

**Administracja publiczna.** Urząd modernizacji IT rządu stanowego przyjął metryki
DORA jako warunek umowy, by porównywać zdolność dostarczania kilku konkurujących
zespołów dostawców, skuteczne wykorzystanie porównywalności ram. Wysoka
częstotliwość wdrożeń jednego dostawcy okazała się, gdy odsetek nieudanych zmian
zażądano obok, korelować z odsetkiem awarii prawie trzykrotnie wyższym niż u
konkurentów, informacja, która bezpośrednio wpłynęła na decyzję urzędu o
odnowieniu umowy. Urząd później dodał wymóg rozkładu przepływu do tych samych umów,
po odkryciu, że dostawca z najlepszymi liczbami DORA wydawał też najmniejszy udział
zdolności na usuwanie podatności bezpieczeństwa, którego umowa konkretnie
wymagała.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z dobrego przyjęcia DORA w jej właściwym zakresie jest uzasadniona, oparta na
dowodach odpowiedź na pytanie "czy nasz potok dostarczania staje się szybszy i
bezpieczniejszy", które pozostaje jednym z bardziej podatnych na pewną odpowiedź
pytań w inżynierii. Ta odpowiedź uzasadnia inwestycje w platformę i narzędzia
prawdziwymi liczbami i pozwala kierownictwu porównywać konkurencyjne inwestycje na
uczciwej, spójnej podstawie, dokładnie tak jak zawsze.

Całkowity koszt posiadania (TCO) to praca integracyjna łącząca zdarzenia wdrożeń z
zapisami incydentów dla odsetka nieudanych zmian i czasu przywrócenia, nietrywialna
w dużym, heterogenicznym krajobrazie narzędzi. Dodatkowy koszt sparowania DORA z
tematami Flow Framework wcześniej w tej części jest stosunkowo niewielki, bo
klasyfikacja elementów przepływu to konwencja raportowania nałożona na istniejącą
pracę, a nie równoległy system pomiarowy, a zwrot, wychwycenie dokładnie tej
ślepej plamki mieszanki wartości, którą ilustruje powyższy przykład z
telekomunikacją, w pełni wart jest tej skromnej dodatkowej inwestycji.

## Antywzorce i pułapki

- **Traktowanie DORA jako całego obrazu zdrowia dostarczania:** sposób
  manipulowania, któremu ma przeciwdziałać umiejscowienie tego tematu. Organizacja
  może przedstawiać naprawdę znakomite liczby DORA, szybkie, częste, stabilne
  wdrożenia, podczas gdy jej faktycznie dostarczana wartość po cichu przesunęła się
  ku poprawkom albo od funkcji, a same cztery metryki DORA nigdy tego przesunięcia
  nie ujawnią, bo nigdy nie zostały zaprojektowane, by je mierzyć. Bariera ochronna
  to parowanie każdego raportu DORA z rozkładem przepływu (temat 2.3), aby szybki,
  stabilny potok dostarczający złą mieszankę pracy był widoczny, a nie brany za
  prawdziwe zdrowie dostarczania.
- **Raportowanie tylko połowy szybkościowej DORA:** niweczy centralne ustalenie ram,
  że szybkość i stabilność poruszają się razem u czołowych wykonawców.
- **Używanie metryk DORA w indywidualnych ocenach okresowych:** łamie statystyczną
  ważność ram i zaprasza silne manipulowanie.
- **Porównywanie zespołów o niespójnych definicjach:** daje porównania, które
  wyglądają uczciwie, a takie nie są.
- **Samodzielnie zgłaszane liczby DORA zamiast instrumentowanych z potoku:**
  wprowadza dokładnie to obciążenie, które ramy miały wyeliminować.
- **Traktowanie DORA jako diagnostyki zamiast podsumowania:** zostawia zespół
  niezdolny do wyjaśnienia, dlaczego liczba się poruszyła, bez warstwy metryk
  przepływu pod spodem.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki DORA, o ile w ogóle śledzone, są zgłaszane
  samodzielnie, niespójnie zdefiniowane i nigdy nie są parowane z danymi o
  przepływie.
- **Poziom 2, Rozwój:** Niektóre zespoły instrumentują DORA z potoku, ale definicje
  się różnią i nie istnieje odpowiednik w postaci rozkładu przepływu do
  sprawdzenia.
- **Poziom 3, Standaryzacja:** Wszystkie cztery metryki DORA są instrumentowane
  spójnie z danych potoku i incydentów, ze wspólnymi definicjami, i rutynowo
  pokazywane obok rozkładu przepływu.
- **Poziom 4, Zarządzanie:** DORA i metryki przepływu są przeglądane razem jako
  standardowa para na każdym poziomie organizacji, a DORA nigdy nie jest używana do
  oceny indywidualnej.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne przypadki, w
  których rozkład przepływu wychwycił problem mieszanki wartości, który
  znakomite liczby DORA same ukrywały, i używa obu ram celowo do odrębnych pytań,
  na które każde odpowiada.

## Pomysły do dyskusji

1. Gdzie nasze cztery metryki DORA umieszczają nas obecnie w spektrum poziomów wydajności, uczciwie?
2. Czy nasze liczby DORA mogłyby wyglądać znakomicie, podczas gdy nasz rozkład przepływu po cichu zdryfował? Czy kiedykolwiek to sprawdziliśmy?
3. Czy ktokolwiek kiedykolwiek użył liczby DORA do oceny jednostki, choćby nieformalnie?
4. Gdyby konkurent opublikował swoje liczby DORA, czy nasze wypadłyby korzystnie i czy to porównanie faktycznie powiedziałoby nam, kto dostarcza więcej realnej wartości?

## Kluczowe wnioski

- Cztery metryki DORA, **częstotliwość wdrożeń, czas realizacji, odsetek nieudanych
  zmian i czas przywrócenia**, z założenia parują szybkość ze stabilnością i
  pozostają naprawdę zwalidowane badaniami.
- Ta książka umieszcza DORA **na końcu tej części**, bo mierzy potok, a nie wartość,
  która nim płynie; paruj ją z rozkładem przepływu (temat 2.3), by uzyskać pełniejszy
  obraz.
- Centralnym sposobem manipulowania w tym temacie jest **branie znakomitych liczb
  DORA za kompletne zdrowie dostarczania**; bariera ochronna to zawsze raportowanie
  DORA obok rozkładu przepływu.
- **Nigdy nie używaj metryk DORA w indywidualnych ocenach okresowych**; ważność ram
  zależy od pomiaru na poziomie systemu, a nie jednostki.
- Używaj **metryk przepływu jako warstwy diagnostycznej** pod liczbami
  podsumowującymi DORA, gdy któraś z nich się porusza.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
