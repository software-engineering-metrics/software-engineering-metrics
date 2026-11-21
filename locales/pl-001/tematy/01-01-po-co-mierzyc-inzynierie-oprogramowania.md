# 1.1 Po co mierzyć inżynierię oprogramowania

## Przegląd i motywacja

Inżynieria oprogramowania opiera się pomiarowi w sposób, w jaki nie opiera się
mu produkcja przemysłowa. Linia fabryczna wytwarza identyczne sztuki, więc ich
zliczanie mówi coś prawdziwego. Praca nad oprogramowaniem wytwarza
jednorazowe artefakty przy stale zmieniających się wymaganiach, więc naiwne
zliczanie commitów, linii czy zamkniętych zgłoszeń nie mówi prawie nic o
dostarczonej wartości. W tej luce między trudnością mierzenia pracy nad
oprogramowaniem a bardzo realną potrzebą wiedzy, czy idzie dobrze, mieści się
cała ta książka. Ten temat dotyczy uczciwego zamykania tej luki: nie przez
udawanie, że pracę nad oprogramowaniem da się liczyć jak gadżety, lecz przez
precyzyjne określenie, co pomiar może, a czego nie może zrobić dla organizacji
inżynierskiej.

Pomiar istnieje po to, by odpowiadać na pytania, na które organizacja nie
potrafi inaczej odpowiedzieć z pewnością: czy nasze dostarczanie przyspiesza,
czy zwalnia, czy jakość rośnie, czy spada, czy inżynierowie się wypalają, czy ta
inwestycja się opłaca. Bez metryk na te pytania odpowiada ten, kto mówi
najpewniej w danym pokoju, zwykle najstarszy rangą albo najbardziej
przekonujący, a ta odpowiedź bywa często błędna. Zespoły [inżynierii oprogramowania](https://en.wikipedia.org/wiki/Software_engineering),
które pomijają pomiar, nie unikają osądów o własnej wydajności. Po prostu
wydają je na podstawie przeczuć, anegdot i błędu świeżości zamiast dowodów.

Dla dużych zespołów to przestaje być miłym dodatkiem i staje się sprawą
strukturalną. Zespół sześciu osób może współdzielić model mentalny tego, jak
idzie, dzięki codziennym rozmowom. Dział sześciuset osób, rozproszony po
strefach czasowych i jednostkach biznesowych, już nie może. W takiej skali
wspólny, zaufany zestaw liczb jest jedynym praktycznym zamiennikiem
nieformalnej świadomości, którą mały zespół dostaje za darmo. Kierownictwo
przedsiębiorstwa potrzebuje metryk, by rozdzielać inwestycje między dziesiątki
zespołów konkurujących o ten sam budżet. Rządowe organizacje inżynierskie
potrzebują metryk, by wykazać parlamentom i opinii publicznej, że przyznane
środki wytworzyły realną zdolność, a nie tylko aktywność. W obu przypadkach
"ciężko pracowaliśmy" nie jest dowodem; dowodem jest liczba, którą da się
obronić.

## Kluczowe zasady

- **Mierz, żeby się uczyć, nie żeby oceniać.** Podstawowym celem metryki
  inżynierskiej jest poinformowanie decyzji, a nie ocena osoby czy zespołu.
- **Liczba bez przypisanej decyzji to dekoracja.** Jeśli żaden odczyt metryki
  nie zmieniłby tego, co zrobisz dalej, nie należy ona do panelu.
- **Pomiar jest środkiem, a nie celem.** Celem jest lepsze oprogramowanie,
  dostarczane bardziej niezawodnie przez zrównoważony zespół. Metryki służą
  wyłącznie temu celowi.
- **Każda metryka ma swój koszt.** Instrumentacja, czas przeglądu i ryzyko
  zniekształcenia zachowań omówione w temacie 1.2 mają swoją cenę. Metryka musi
  ją odrobić.
- **Milczenie też jest decyzją.** Wybór, by czegoś nie mierzyć, to wybór z
  konsekwencjami, a nie neutralna wartość domyślna.

## Rekomendacje

### Zacznij od decyzji, nie od panelu

Zanim zinstrumentujesz cokolwiek, nazwij decyzję, którą ta metryka ma
poinformować. "Chcemy wiedzieć, czy nasz nowy potok wdrożeniowy zmniejszył
liczbę incydentów" to pytanie w kształcie decyzji; "śledźmy wszystko, co
narzędzie potrafi wyeksportować" nim nie jest. Praca wstecz od decyzji
utrzymuje zestaw metryk małym i sprawia, że każdy kafel da się obronić, gdy
ktoś zapyta, po co istnieje. Jeśli nie umiesz nazwać decyzji, którą metryka
miałaby poinformować, nie buduj jej jeszcze. Temat 1.3 rozwija wersję tej
dyscypliny opartą na zasadzie rezultatów ponad produkcję.

### Oddziel użycie diagnostyczne od oceniającego

Metryka użyta do zdiagnozowania problemu systemu (dlaczego rośnie nasz czas
realizacji) zachowuje się zupełnie inaczej niż ta sama metryka użyta do oceny
osoby czy zespołu (czyj czas realizacji jest najgorszy). Pierwsze zaprasza do
badania i poprawy. Drugie zaprasza do ukrywania i manipulowania, bo teraz liczba
ma przypisaną konsekwencję wizerunkową lub finansową. Zdecyduj jawnie, na
piśmie, do czego służy dana metryka, i nigdy nie pozwalaj, by metryka
diagnostyczna prześlizgnęła się do użycia oceniającego bez celowego ponownego
rozważenia ryzyka. To rozróżnienie wraca nieustannie w całej książce i jest
sformalizowane w sekcji o celach wykluczonych w karcie metryk opisanej w temacie
1.4.

### Traktuj pomiar jak hipotezę, nie fakt

Metryka jest wskaźnikiem zastępczym czegoś, na czym ci naprawdę zależy, a nie
samą tą rzeczą. Częstotliwość wdrożeń jest wskaźnikiem zastępczym zdolności
dostarczania, a nie samą zdolnością dostarczania. Traktuj każdą metrykę jak
hipotezę pod stałym testem: czy ta liczba nadal śledzi to, na czym nam zależy,
czy świat poszedł dalej i zostawił wskaźnik zastępczy w tyle? Wracaj do tego
pytania w stałym rytmie, zamiast zakładać, że metryka dobrze wybrana dwa lata
temu jest dobrze wybrana i dziś, zwłaszcza gdy zmieniają się narzędzia,
struktura zespołów lub (patrz część 7) sama natura pracy.

### Spraw, by brak pomiaru był widoczny

W dużych organizacjach najbardziej ryzykowną luką nie jest zła metryka, tylko
obszar, którego nikt w ogóle nie mierzy, bo trudno go zinstrumentować:
doświadczenie programisty, tarcie w zależnościach między zespołami, erozja
wiedzy instytucjonalnej. Nazwij te luki jawnie w karcie metryk, zamiast
pozwalać im pozostać niewidocznymi z założenia. Organizacja, która wie, czego
nie mierzy i dlaczego, jest w znacznie silniejszej pozycji niż ta, która po
cichu zapomniała, że te obszary istnieją.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Gęsta instrumentacja, wiele metryk | Szeroka widoczność, mniej martwych punktów | Zmęczenie panelem, większa powierzchnia do manipulowania, wyższy koszt utrzymania |
| Minimalne metryki oparte na decyzjach | Skupienie, niski narzut, każda metryka do obrony | Ryzyko przeoczenia wyłaniającego się problemu poza wybranym zestawem |
| Metryki tylko do diagnozy | Zachęcają do uczciwego raportowania i badania | Kierownictwo może nadal używać ich nieformalnie do oceny |
| Metryki powiązane z oceną indywidualną | Poczucie rozliczalności, łatwo wyjaśnić zarządowi | Silna zachęta do manipulowania; niszczą zaufanie; zwykle mierzą nie to, co trzeba |

Centralne napięcie to **zakres kontra skupienie**, wyostrzone przez **diagnozę
kontra osąd**. Zbyt mało metryk i rozwijasz martwe punkty, które ujawniają się
dopiero jako kryzys; zbyt wiele i nikt nie potrafi działać na podstawie żadnej,
a każda, której nadasz wagę oceniającą, zaprasza do zniekształceń. Rozwiąż to,
zaczynając od minimum opartego na decyzjach, dodając metrykę tylko wtedy, gdy
konkretna, nazwana decyzja jej wymaga, i broniąc jawnie granicy "tylko
diagnoza" w pracach nadzorczych z tematu 1.4, zamiast pozwalać, by erodowała
sama z siebie.

## Pytania do omówienia z zespołem

1. **Jaką decyzję uruchomiłby dobry odczyt, a jaką zły odczyt każdej metryki w
   naszym obecnym panelu?** Jeśli oba odczyty prowadzą do tego samego działania
   albo do żadnego, metryka jest dekoracją. Przejdź panel kafel po kaflu i
   wymuś uczciwą odpowiedź dla każdego. To ćwiczenie rutynowo zmniejsza
   rozdęty panel o połowę podczas jednego posiedzenia, bo większość rozrostu
   gromadzi się z metryk, których nikt nigdy nie usuwa, a nie z metryk, które
   ktoś celowo dodał z powodu nadal aktualnego.

2. **Które z naszych metryk są używane diagnostycznie, a które po cichu stały
   się oceniające?** Metryka zbudowana, by zrozumieć ograniczenie systemu, może
   zacząć służyć do rankingu zespołów czy osób, choć nikt tak nie postanowił,
   często przez luźną uwagę na spotkaniu przeglądowym, która staje się
   nawykiem. Gdy ten dryf nastąpi, liczba przestaje być godna zaufania, bo
   ludzie mają teraz powód, by wyglądała dobrze, a nie by była dokładna.
   Nazwij na piśmie zamierzone użycie każdej metryki i sprawdź względem niego
   obecną praktykę.

3. **Czego nie mierzymy, bo trudno to zinstrumentować, i ile nas ta luka
   kosztuje?** Najgroźniejsze martwe punkty to te, które nigdy nie trafiają na
   panel właśnie dlatego, że opierają się łatwemu pomiarowi: tarcie w
   zależnościach między zespołami, erozja wiedzy instytucjonalnej albo ciche
   gromadzenie się kruchych obejść. Przynieś listę rzeczy, o które wszyscy
   prywatnie się martwią, a których nikt nie śledzi, i bądź szczery co do
   powodów.

4. **Gdybyśmy jutro usunęli tę metrykę, kto by to zauważył i co by stracił?**
   Metryka, której nikt by nie żałował, to metryka, która nie informuje żadnej
   decyzji. To pytanie ujawnia kafle próżności, które przetrwały wyłącznie siłą
   bezwładności. W dużej organizacji z dziesiątkami paneli zespołowych ta
   dyscyplina przycinania ma tak samo duże znaczenie jak dyscyplina dodawania
   nowych metryk.

5. **Ile naprawdę kosztuje wytworzenie i utrzymanie każdej metryki na naszym
   panelu, wliczając czas inżynierski stojący za instrumentacją?** Metryki nie
   są darmowe. Potoki, panele i czas przeglądu poświęcony na omawianie liczby
   niosą powtarzalny koszt, łatwy do niedoszacowania, bo rozłożony na wiele
   małych zadań zamiast jednej widocznej pozycji. Przynieś swój faktyczny
   wysiłek instrumentacji i utrzymania i zestaw go z wartością decyzyjną z
   pytania 1.

6. **Gdzie pomiar stał się substytutem osądu, a gdzie osąd stał się
   substytutem pomiaru?** Oba rodzaje porażki są realne. Zespół, który zleca
   każdą decyzję panelowi, traci kontekstowy osąd, który wychwytuje to, co
   liczba pomija; zespół, który ignoruje dostępne dane na rzecz najgłośniejszego
   głosu w pokoju, powtarza dokładnie problem, od którego zaczyna się ten temat.
   Celem są metryki, które informują osąd, a nie go zastępują.

## Perspektywa sektorowa

**Startup.** Przy garstce inżynierów większości tego, przed czym ostrzega ten
temat, czyli dryfu ku użyciu oceniającemu, martwych punktów i rozdętych paneli,
łatwo uniknąć po prostu dlatego, że wszyscy rozmawiają codziennie. Ryzyko jest
odwrotne: całkowite pominięcie pomiaru, bo wydaje się narzutem, na który zespół
nie może sobie pozwolić. Wybierz dwa lub trzy pytania w kształcie decyzji (czy
dostarczamy dość szybko, czy jakość się trzyma) i instrumentuj tylko je.

**Mała firma.** Bez dedykowanego zespołu platformowego lub danych polegaj na
tym, co raportują już twoje obecne narzędzia, zamiast budować własną
instrumentację. Panel operatora płatności, metryki odpowiedzi w narzędziu
wsparcia i historia buildów u twojego dostawcy CI zwykle pokrywają decyzje o
największym znaczeniu. Oprzyj się pokusie zakupu dedykowanej platformy
analitycznej dla inżynierii, zanim udowodnisz, że będziesz działać na podstawie
tego, co ci powie.

**Duże przedsiębiorstwo.** Główne ryzyko to metryki, które po cichu dryfują od
użycia diagnostycznego do oceniającego w miarę przechodzenia przez warstwy
zarządzania, oraz panele, które rosną przez narastanie, bo nikt nie jest
właścicielem zadania ich przycinania. Nadzór (temat 1.4) nie jest w tej skali
opcjonalny. Ujednolić definicje w jednostkach biznesowych i wbuduj regularny
przegląd wycofywania w sam program metryk.

**Administracja publiczna.** Metryki mają tu często wagę ustawową lub
budżetową, co podnosi zarówno wartość ich poprawności, jak i koszt błędu.
Liczba raportowana parlamentowi lub organowi nadzoru potrzebuje udokumentowanej
metodologii, stabilnej definicji w kolejnych okresach sprawozdawczych i
szczerości co do swoich ograniczeń. Traktuj "obecnie tego nie mierzymy" jako
odpowiedź, którą być może będziesz musiał obronić, a nie prywatną porażkę do
ukrycia.

## Przykłady

**Przedsiębiorstwo.** Organizacja inżynierska globalnego ubezpieczyciela
urosła do ponad sześćdziesięciu zespołów scrumowych, z których każdy miał własny
nieformalny panel, żaden nieporównywalny z innym. Kierownictwo nie umiało
odpowiedzieć na podstawowe pytanie: która z dziesięciu strategicznych
inwestycji platformowych faktycznie dostarcza szybszego oprogramowania.
Rozwiązaniem nie było więcej metryk, tylko mniej, lepszych: organizacja
zdefiniowała wspólny, oparty na decyzjach rdzeń metryk DORA (temat 2.10),
liczonych wszędzie identycznie z tych samych danych potoku, wycofała
czterdzieści paneli specyficznych dla zespołów i w ciągu dwóch kwartałów mogła
wreszcie porównywać obszary inwestycji na wspólnej podstawie.

**Administracja publiczna.** Zespół usług cyfrowych krajowej administracji
podatkowej został poproszony przez komisję nadzorczą o wykazanie zwrotu z
wieloletniego programu modernizacji. Dotychczasowe metryki zespołu były
całkowicie wewnętrzne i oparte na aktywności: ukończone punkty historii,
zamknięte sprinty. Nic z tego nie odpowiadało na faktyczne pytanie komisji.
Zespół zbudował więc mały zestaw metryk rezultatu: medianę czasu rozwiązania
problemu obywatela z rozliczeniem, odsetek adopcji kanału cyfrowego i odsetek
uciekających defektów w nowym systemie, i raportował je kwartalnie z
udokumentowaną metodologią. Pytania komisji zmieniły się z "udowodnijcie, że
pracujecie" na "jak to powtórzyć w następnej agencji", czyli właśnie na to,
co dobrze dobrany zestaw metryk ma wywoływać.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z celowego pomiaru jest jakość decyzji. Organizacja, która może
powiedzieć, dowodami, "nasz czas realizacji poprawił się o 30% po inwestycji w
platformę", potrafi tę inwestycję obronić, powtórzyć to, co zadziałało, i
zatrzymać to, co nie. Organizacja polegająca na anegdocie nie potrafi tego z
pewnością i kończy, ponownie rozstrzygając te same spory w każdym cyklu
budżetowym, bo nikt nie umie wskazać liczby, której ufają obie strony.

Kosztem pomiaru nie jest panel. To bieżąca dyscyplina: instrumentacja,
utrzymanie definicji i okresowe przycinanie, które zaleca ten temat. Ten
całkowity koszt posiadania (TCO) jest realny, ale skromny w porównaniu z
kosztem alternatywy, czyli dużej organizacji podejmującej wielomilionowe
decyzje technologiczne na podstawie tego, kto najbardziej przekonująco
argumentował w pokoju. Zwrotem (ROI) z programu metryk nie są same metryki;
są nim decyzje podjęte lepiej dzięki nim.

## Antywzorce i pułapki

- **Mierzenie wszystkiego, co eksportuje narzędzie:** zamienia panel w szum i
  zaprasza do manipulowania na ogromnej powierzchni bez odpowiadającej jej
  wartości decyzyjnej.
- **Metryki bez nazwanej decyzji:** dekoracja, która kosztuje wysiłek
  utrzymania i nikomu nie mówi nic, na czym da się działać.
- **Cichy dryf od użycia diagnostycznego do oceniającego:** najszybszy sposób
  na zniszczenie zaufania do liczby.
- **Traktowanie metryki jak faktu, a nie hipotezy:** wskaźnik zastępczy, który
  był trafny dwa lata temu, może być błędny dziś, i nikt tego nie sprawdza.
- **Mylenie braku złej liczby z obecnością dobrej:** metryka, na którą nigdy
  nie patrzysz, nie powie ci, że coś jest nie tak.
- **Budowanie zdolności pomiarowej przed ustaleniem, co ma być rozstrzygane:**
  instrumentacja w poszukiwaniu pytania marnuje realny czas inżynierski.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki, o ile w ogóle istnieją, są doraźne,
  osobiste dla tego, kto je zbudował, i nikt nie potrafi powiedzieć, jaką
  decyzję którakolwiek z nich informuje.
- **Poziom 2, Rozwój:** Podstawowy zestaw metryk istnieje dla niektórych
  zespołów, głównie skopiowany z ram lub z domyślnych ustawień narzędzia, bez
  jasnego powiązania z decyzją.
- **Poziom 3, Standaryzacja:** Każda śledzona metryka ma udokumentowany cel i
  jawną klasyfikację diagnostyczna-kontra-oceniająca, stosowaną spójnie w
  całej organizacji.
- **Poziom 4, Zarządzanie:** Metryki są przeglądane w stałym rytmie względem
  decyzji, które informują; metryki, które przestają zarabiać na siebie, są
  wycofywane, a cały zestaw jest mierzony pod kątem kosztu, nie tylko wartości.
- **Poziom 5, Orkiestracja:** Pomiar jest żywą zdolnością: organizacja rutynowo
  identyfikuje własne martwe punkty, sprawdza, czy jej wskaźniki zastępcze nadal
  śledzą rzeczywistość, i traktuje sam program metryk jako coś do ulepszania, a
  nie tylko do utrzymywania.

## Pomysły do dyskusji

1. Którą metrykę na naszym panelu najtrudniej byłoby nam uzasadnić, gdyby ktoś zapytał dziś?
2. Jaką decyzję podjęliśmy w ostatnim kwartale na podstawie metryki, a nie opinii?
3. Gdzie w naszej organizacji metryka diagnostyczna po cichu stała się oceniającą?
4. Czego boimy się mierzyć i dlaczego?
5. Gdyby nasz program metryk jutro zniknął, jakie decyzje by się pogorszyły?

## Kluczowe wnioski

- Pomiar istnieje, by służyć **decyzjom**, a nie sam dla siebie; metryka bez
  przypisanej decyzji to dekoracja.
- Utrzymuj użycie **diagnostyczne** oddzielnie od **oceniającego**, na piśmie,
  i pilnuj cichego dryfu między nimi.
- Traktuj każdą metrykę jak **hipotezę** o tym, co przedstawia, a nie ustalony
  fakt, i wracaj do tej hipotezy w stałym rytmie.
- Milczenie, czyli wybór niemierzenia czegoś, samo jest decyzją z
  konsekwencjami; spraw, by martwe punkty były widoczne, zamiast pozwalać im
  pozostać niewidocznymi z założenia.
- Całkowity koszt programu metryk jest realny; zestawiaj go jawnie z wartością
  decyzyjną, jaką daje każda metryka.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (fundament badawczy pomiaru inżynierii opartego na
  rezultatach).
- *How to Measure Anything*, Douglas W. Hubbard (ogólne ramy kwantyfikowania
  rzeczy, które wydają się niemierzalne).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (fundamentalna analiza dysfunkcji, które pomiar może wprowadzić do
  organizacji).
- *Thinking, Fast and Slow*, Daniel Kahneman (błędy poznawcze, które czynią
  nieuzbrojony osąd zawodnym zamiennikiem pomiaru).
- Program DevOps Research and Assessment (DORA) Google, [dora.dev](https://dora.dev/) (trwające
  badania State of DevOps, z których ta książka korzysta w całości).
