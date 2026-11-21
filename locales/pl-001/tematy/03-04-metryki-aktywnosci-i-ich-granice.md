# 3.4 Metryki aktywności i ich granice

## Przegląd i motywacja

**Aktywność**, czyli litera A w SPACE (temat 3.1), liczy objętość pracy
inżynierskiej widoczną w telemetrii systemowej: commity, otwarte pull
requesty, zmienione linie kodu, pozostawione komentarze z przeglądu kodu. To
najłatwiejszy do zmierzenia wymiar SPACE, bo każde z tych zdarzeń jest już
automatycznie rejestrowane przez narzędzia, których zespoły inżynierskie
używają codziennie, a ta łatwość pomiaru sprawia, że to właśnie najbardziej
niebezpieczny wymiar do przecenienia. Aktywność jest realnym, zasadnym
sygnałem, jeśli używa się jej ostrożnie. Używana jako samodzielny wskaźnik
zastępczy produktywności, jest najczęściej manipulowaną i najbardziej
mylącą rodziną metryk w całej historii pomiaru w
[inżynierii oprogramowania](https://en.wikipedia.org/wiki/Software_engineering).

Sedno problemu jest takie, że aktywność mierzy ruch, a nie wartość. Liczba
commitów nie odróżnia commitu, który elegancko rozwiązał trudny problem, od
commitu, który podzielił jedną sensowną zmianę na pięć, żeby wyglądać
produktywniej (manipulowanie przez podstawienie z tematu 1.2, zastosowane
wprost do tej rodziny metryk). Liczba zmienionych linii kodu nagradza
rozwlekłość ponad znacznie cenniejszą umiejętność usuwania zbędnego kodu.
Inżynier, który spędza cały dzień na głębokim, nieprzerwanym myśleniu, zanim
napisze dziesięć eleganckich, dobrze przetestowanych linii, wygląda według
tych metryk na mniej "aktywnego" niż ktoś, kto co dwadzieścia minut
zatwierdza płytkie, nieprzejrzane zmiany, choć ten pierwszy bardzo często
tworzy znacznie więcej realnej wartości.

W dużych zespołach pokusa użycia metryk aktywności do oceny jednostek jest
stała i dobrze udokumentowana, bo aktywność łatwo przypisać konkretnej osobie
i łatwo policzyć automatycznie, w przeciwieństwie do trudniejszych, bardziej
uczciwych sygnałów z pozostałych wymiarów SPACE. Ten temat istnieje właśnie
po to, by nazwać tę pokusę i dać zespołom język oraz dowody, by się jej
oprzeć, bo gdy organizacja zacznie szeregować inżynierów według liczby
commitów lub linii kodu, szkody dla współpracy, jakości kodu i morale są dobrze
udokumentowane i trudne do odwrócenia.

## Kluczowe zasady

- **Aktywność mierzy ruch, a nie wartość.** To zasadny sygnał
  kontekstowy, nigdy samodzielny wskaźnik zastępczy produktywności.
- **To najczęściej w historii nadużywana rodzina metryk w pomiarze
  inżynierii oprogramowania.** Traktuj tę historię jako ostrzeżenie, a nie
  zbieg okoliczności.
- **Szeregowanie jednostek według aktywności jest prawie zawsze szkodliwe.**
  Niszczy współpracę, nagradza widoczne zabieganie i niemal natychmiast
  zaprasza do manipulowania.
- **Dane o aktywności są najbardziej użyteczne w agregacji, jako kontekst dla
  innych wymiarów**, a nie jako niezależny sygnał o jakiejkolwiek osobie czy
  zespole.
- **Głęboka, wartościowa praca często wygląda cicho na panelu aktywności.**
  Ta rodzina metryk jest strukturalnie stronnicza wobec dokładnie tego
  rodzaju myślenia, które daje najlepsze rezultaty inżynierskie.

## Rekomendacje

### Nigdy nie szereguj ani nie oceniaj osób według surowych liczb aktywności

To najtrudniejsza i najważniejsza reguła tego tematu. Liczba commitów, liczba
linii kodu i liczba pull requestów nigdy nie powinny pojawiać się w ocenie
okresowej jednostki, w porównawczym rankingu ani w żadnym kontekście, w
którym wynagrodzenie, pozycja lub reputacja inżyniera zależą od tej liczby.
Wynika to wprost z zasady ekspozycji na zachęty z tematu 1.2: w chwili, gdy
aktywność staje się premiowaną metryką indywidualną, niemal natychmiast
pojawia się manipulowanie, a wynikające z niego zachowania, wypychanie
commitów, trywialne dzielenie zmian, unikanie głębokiej, niewdzięcznej pracy,
która daje niewiele widocznych zdarzeń, aktywnie szkodzą organizacji.

### Używaj danych o aktywności w agregacji, jako kontekstu, a nie wyroku

Dane o aktywności stają się naprawdę użyteczne, gdy agreguje się je na
poziomie zespołu i czyta razem z pozostałymi wymiarami SPACE: gwałtowny
spadek aktywności commitów w zespole, który zbiega się ze wzrostem
satysfakcji, może oznaczać, że zespół w końcu miał oddech, by głęboko myśleć
i spłacać dług techniczny, a to wzorzec pozytywny, nie negatywny. Czytany w
izolacji, ten sam spadek wygląda alarmująco. Kontekst z pozostałych wymiarów
sprawia, że dane o aktywności można interpretować, zamiast dawać się im
zwodzić.

### Preferuj sygnały aktywności skorygowane o jakość zamiast surowej objętości

Tam, gdzie dane o aktywności w ogóle się przydają, preferuj sygnały
skorygowane o jakość zamiast surowych liczb: rozmiar pull requesta względem
głębokości przeglądu (temat 2.9) albo stosunek nowego kodu do usuniętego,
który może pokazać, czy zespół kumuluje złożoność, czy aktywnie ją upraszcza.
Te skorygowane sygnały nadal są danymi wymiaru aktywności, ale opierają się
najprostszemu manipulowaniu, które zapraszają surowe liczby.

### Wypatruj konkretnie wzorca manipulowania przez podstawienie w danych o aktywności

Najczęstszy sposób manipulowania metrykami aktywności to dokładnie wzorzec
podstawienia z tematu 1.2: dzielenie naprawdę sensownej pracy na wiele
drobnych, trywialnych zdarzeń, by zawyżyć liczbę. Jeśli częstość commitów lub
pull requestów rośnie, podczas gdy złożoność lub rozmiar zmian gwałtownie
spada, zbadaj sprawę, zanim uznasz to za realną poprawę produktywności, z tą
samą dyscypliną diagnostyczną, którą temat 2.10 zaleca dla częstotliwości
wdrożeń.

### Nazwij jawnie i zniechęcaj do teatru aktywności

**Teatr aktywności** to praca wykonywana, świadomie lub nie, głównie dlatego,
że jest widoczna i policzalna, a nie dlatego, że jest wartościowa: częste
drobne commity, demonstracyjna aktywność późną nocą albo widoczne
zabieganie na wspólnych kanałach. Nazwanie tego wzorca wprost przed
zespołem i jawne powiedzenie, że kierownictwo nie ocenia wkładu surową
aktywnością, usuwa większość zachęty do jego powstawania.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Szeregowanie osób według aktywności | Proste, łatwe do policzenia, wydaje się bezpośrednio użyteczne | Manipulowane niemal natychmiast; szkodzi współpracy i morale; mierzy złą rzecz |
| Brak pomiaru aktywności w ogóle | Całkowicie unika ryzyka nadużycia | Traci naprawdę użyteczny sygnał kontekstowy do wychwytywania wzorców na poziomie zespołu |
| Zagregowana aktywność zespołu, czytana w kontekście | Daje użyteczny kontekst bez ryzyka dla jednostek | Wymaga dyscypliny, by interpretować ją razem z innymi wymiarami, a nie w izolacji |
| Sygnały aktywności skorygowane o jakość | Odporne na najprostsze manipulowanie surowymi liczbami | Trudniejsze do obliczenia i wyjaśnienia niż prosta liczba |

Główne napięcie to **użyteczność kontra ryzyko nadużycia**. Dane o
aktywności, czytane uważnie w agregacji i w kontekście, są naprawdę
użyteczne do wychwytywania wzorców, takich jak niezrównoważone tempo albo
zespół, który po cichu znajduje miejsce na zmierzenie się z długiem
technicznym. Te same dane użyte jako indywidualna karta wyników są prawie
jednolicie szkodliwe. Rozwiąż to napięcie nie przez całkowite unikanie danych
o aktywności, lecz przez wprowadzenie twardej reguły organizacyjnej przeciw
użyciu indywidualnemu, przy dopuszczeniu, a nawet zachęcaniu do przemyślanego,
kontekstowego użycia na poziomie zespołu.

## Pytania do omówienia z zespołem

1. **Czy ktokolwiek w naszej organizacji był kiedykolwiek oceniany, formalnie
   lub nieformalnie, według surowej liczby aktywności, takiej jak commity
   lub linie kodu?** Zadaj to pytanie wprost i bądź gotów na niewygodną, ale
   konieczną odpowiedź. To nadużycie często zdarza się po cichu, przez
   rzuconą mimochodem uwagę menedżera, bez stania się oficjalną polityką.

2. **Jak teatr aktywności wyglądałby konkretnie w naszym zespole i czy
   widzieliśmy jego oznaki?** Nazwanie konkretnej, prawdopodobnej formy,
   jaką ten wzorzec mógłby przyjąć w twoim zespole, znacznie ułatwia jego
   rozpoznanie, jeśli zacznie się pojawiać.

3. **Gdy dane o aktywności zespołu się zmieniają, interpretujemy je razem z
   pozostałymi wymiarami SPACE, czy w izolacji?** Spadek aktywności czytany w
   izolacji wygląda niepokojąco. Ten sam spadek czytany razem z poprawą
   satysfakcji lub wydajności może wyglądać na naprawdę pozytywny wzorzec.
   Porównaj swoją faktyczną praktykę przeglądów z tym rozróżnieniem.

4. **Czy kiedykolwiek widzieliśmy wzrost częstości commitów lub pull
   requestów połączony ze zmniejszającym się średnim rozmiarem zmiany, co
   sugeruje trywialne dzielenie, a nie prawdziwy wzrost produktywności?**
   Weź prawdziwe dane i sprawdź ten konkretny wzorzec manipulowania przez
   podstawienie.

5. **Jak dziś mówimy o tym, "kto wnosi najwięcej" w naszym zespole i czy ta
   rozmowa niejawnie opiera się na danych o aktywności, nawet bez formalnej
   metryki?** Nieformalne, niezmierzone skrzywienie ku widocznemu
   zabieganiu może kształtować postrzeganie i nagrody nawet bez jawnej
   polityki opartej na aktywności. Wydobądź to na wierzch uczciwie.

6. **Jak wygląda w naszym zespole praca naprawdę wartościowa, ale cicha:
   głębokie myślenie, staranne projektowanie, mentoring, i jak zadbać o to,
   by została dostrzeżona, choć generuje niewiele widocznych danych o
   aktywności?** To pytanie jest pozytywnym dopełnieniem poprzednich:
   nazwanie, jak wygląda dobra, cicha praca, pomaga uchronić ją przed
   przeoczeniem na rzecz głośniejszej, łatwiejszej do policzenia pracy.

## Perspektywa sektorowa

**Startup.** W małym, ściśle współpracującym zespole aktywność jest zwykle
widoczna bez żadnego panelu, a ryzyko szeregowania osób, przed którym ostrzega
ten temat, jest mniejsze po prostu dlatego, że każdy już wie, nad czym
pracuje reszta. Ryzyko jest raczej takie, że założyciel nieświadomie faworyzuje
widocznie "zajęte" zachowania przy wczesnych decyzjach o zatrudnieniu lub
udziałach.

**Mała firma.** Dane o aktywności z już używanych narzędzi można spokojnie
przejrzeć dla ogólnego poczucia przepustowości zespołu, ale oprzyj się
bezpośredniemu porównywaniu poszczególnych osób. Realna wartość małego zespołu
często koncentruje się w kilku osobach wykonujących cichą pracę o dużej
dźwigni, którą widok liczby commitów systematycznie niedoszacowałby.

**Duże przedsiębiorstwo.** Tu pokusa szeregowania osób jest najsilniejsza i
najbardziej szkodliwa, bo dane o aktywności to najłatwiejszy do wyciągnięcia
sygnał dla procesu ocen okresowych obejmującego tysiące inżynierów, a
presja, by znaleźć *jakiś* policzalny wkład, jest realna. Zbuduj jawną,
komunikowaną i egzekwowaną politykę zakazującą indywidualnego szeregowania
według aktywności i okresowo audytuj praktyki ocen, by potwierdzić, że
polityka faktycznie jest przestrzegana w praktyce, a nie tylko głoszona.

**Administracja publiczna.** Metryki aktywności mogą kusić, by przytaczać je
w publicznym raporcie jako dowód produktywności ("dziesięć tysięcy commitów w
tym roku"), ale taki nagłówek jest prawie bez znaczenia i może zaprosić
dokładnie niewłaściwą kontrolę, gdy kompetentny recenzent wskaże, że surowa
aktywność nic nie mówi o rezultatach. Raportuj raczej dane o rezultatach i
wydajności (temat 3.3) i unikaj liczb aktywności w jakiejkolwiek komunikacji
skierowanej na zewnątrz.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy programistycznej, bez
formalnej polityki, zaczęło nieformalnie odwoływać się do danych o
indywidualnej częstości commitów w dyskusjach o awansach. Wewnętrzny
przegląd, wywołany niezwiązanym projektem analizy rotacji pracowników,
wykazał, że inżynierowie pracujący nad najbardziej złożonymi, najcenniejszymi
systemami firmy, wymagającymi długich okresów starannej pracy projektowej,
zanim napisano jakikolwiek kod, mieli systematycznie niższe liczby commitów
niż inżynierowie pracujący nad prostszymi, rozwijanymi bardziej przyrostowo
systemami, i byli przez to subtelnie spychani na dalszy plan w rozmowach o
awansach. Kierownictwo wydało jawną, komunikowaną politykę zakazującą
odwoływania się do liczb aktywności w dyskusjach o ocenach i awansach i
przesunęło dowody awansowe ku wielosygnałowemu podejściu do wydajności z
tematu 3.3.

**Administracja publiczna.** Agencja usług cyfrowych, pod presją wykazania
produktywności przed komisją nadzoru legislacyjnego, początkowo zamierzała
raportować łączną liczbę commitów i napisanych linii kodu w programie
inżynierskim jako dowód dostarczonej wartości. Wewnętrzny doradca techniczny
się sprzeciwił, trafnie zauważając, że takie ujęcie zaprasza dokładnie
niewłaściwą kontrolę, bo technicznie biegły członek komisji mógłby łatwo
wskazać, że surowa objętość kodu nic nie mówi o tym, czy kod działał i miał
znaczenie. Poprawiony raport agencji użył zamiast tego metryk rezultatów
(temat 5.3): spadku liczby błędów zgłaszanych przez obywateli i wzrostu
odsetka spraw załatwionych samodzielnie, co znacznie lepiej wytrzymało
pytania komisji niż liczby aktywności.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z właściwego traktowania metryk aktywności, czyli używania ich
kontekstowo, a nie jako indywidualnych kart wyników, to uniknięta szkoda:
organizacje, które szeregują inżynierów według aktywności, niezawodnie widzą
zachowania manipulacyjne, mniejszą współpracę (inżynierowie chronią własną
widoczną produkcję zamiast pomagać koledze) i systematyczne skrzywienie
przeciw głębokiej pracy o dużej dźwigni, która często daje najwięcej wartości,
a generuje najmniej widocznej aktywności. Odwrócenie tej szkody, gdy już
zakorzeni się w kulturze ocen okresowych, jest naprawdę trudne i powolne.

Całkowity koszt uniknięcia tej pułapki to głównie dyscyplina organizacyjna:
jawna, konsekwentnie egzekwowana polityka przeciw szeregowaniu osób według
aktywności i zobowiązanie do inwestowania zamiast tego w trudniejszy, bardziej
uczciwy pomiar wydajności opisany w temacie 3.3. Ta dyscyplina kosztuje mniej
niż chybione decyzje awansowe, uszkodzona współpraca i manipulowanie, które
indywidualne metryki aktywności niezawodnie wytwarzają z czasem.

## Antywzorce i pułapki

- **Szeregowanie osób według liczby commitów lub linii kodu:** najbardziej
  szkodliwe i historycznie najczęstsze nadużycie w całej tej książce.
- **Teatr aktywności:** praca wykonywana głównie dla widoczności, a nie dla
  wartości, w pełni przewidywalna reakcja na ocenę opartą na aktywności.
- **Interpretowanie spadku aktywności zespołu w izolacji, bez sprawdzenia
  pozostałych wymiarów SPACE:** może pomylić naprawdę pozytywny wzorzec z
  niepokojącym.
- **Przytaczanie surowych liczb aktywności w komunikacji zewnętrznej lub
  skierowanej do kierownictwa:** zaprasza dokładnie niewłaściwą kontrolę i
  mówi niewiele o faktycznej wartości.
- **Systematyczne niedocenianie głębokiej, starannej pracy, która generuje
  niewiele widocznych zdarzeń:** strukturalne skrzywienie wpisane w całą tę
  rodzinę metryk.
- **Nieformalne, nieuregulowane skrzywienie ku aktywności wkradające się do
  rozmów o awansach lub ocenach:** szkodliwe nawet bez oficjalnej metryki.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryk aktywności używa się, formalnie lub
  nieformalnie, do oceniania lub szeregowania osób, bez świadomości ryzyka.
- **Poziom 2, Rozwój:** Istnieje pewna świadomość ryzyka, ale żadna jawna
  polityka nie powstrzymuje danych o aktywności przed nieformalnym wpływem na
  oceny lub dyskusje o awansach.
- **Poziom 3, Standaryzacja:** Jawna, komunikowana w całej organizacji
  polityka zakazuje szeregowania osób według aktywności, a dane o aktywności
  są używane tylko w agregacji, w kontekście zespołu.
- **Poziom 4, Zarządzanie:** Praktyki ocen i awansów są okresowo audytowane,
  by potwierdzić przestrzeganie polityki, a sygnały aktywności skorygowane o
  jakość zastępują surowe liczby wszędzie tam, gdzie dane o aktywności w
  ogóle się używa.
- **Poziom 5, Orkiestracja:** Organizacja wykazalnie przesunęła kulturę oceny
  z metryk aktywności ku wielosygnałowemu podejściu do wydajności z tematu
  3.3, z widoczną poprawą współpracy i mniejszym manipulowaniem jako dowodem,
  że zmiana się udała.

## Pomysły do dyskusji

1. Czy ktoś tutaj kiedykolwiek czuł się oceniany, nawet nieformalnie, po tym, jak "zajęta" wyglądała jego aktywność?
2. Jak teatr aktywności wyglądałby konkretnie w naszym zespole?
3. Czy mamy jawną, pisemną politykę przeciw szeregowaniu osób według aktywności i czy jest faktycznie przestrzegana?
4. Jaka cicha, wartościowa praca w naszym zespole generuje dziś najmniej widocznych danych o aktywności?
5. Jak przeprojektowalibyśmy dowody w ocenach okresowych, by całkiem usunąć liczby aktywności?

## Kluczowe wnioski

- Aktywność mierzy **ruch, a nie wartość**. To najczęściej w historii
  nadużywana rodzina metryk w inżynierii oprogramowania.
- **Nigdy nie szereguj ani nie oceniaj osób** według surowych liczb
  aktywności. To najtrudniejsza i najważniejsza reguła tego tematu.
- Używaj danych o aktywności **w agregacji, jako kontekstu** dla pozostałych
  wymiarów SPACE, nigdy jako samodzielnego wyroku.
- Wypatruj **teatru aktywności** i **wzorca manipulowania przez podstawienie**
  (temat 1.2) właśnie w tej rodzinie metryk.
- Głęboka, wartościowa praca często generuje **najmniej widocznych danych o
  aktywności**. Chroń ją przed systematycznym niedocenianiem.

## Bibliografia i dalsza lektura

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco i Timothy Lister
  (argument przeciw mierzeniu inżynierów widocznym zabieganiem).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal Newport
  (wartość cichej, nieprzerwanej pracy, którą metryki aktywności
  systematycznie niedoliczają).
- *The Tyranny of Metrics*, Jerry Z. Muller (fiksacja na metrykach i jej
  koszty, wprost odnoszące się do oceny opartej na aktywności).
