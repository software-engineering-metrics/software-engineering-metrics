# 2.7 Teoria kolejek

## Przegląd i motywacja

**[Teoria kolejek](https://en.wikipedia.org/wiki/Queueing_theory)** to matematyczne
badanie kolejek oczekujących. Wydaje się dziwnie pasować do książki o metrykach
inżynierii oprogramowania, dopóki nie zauważysz, jak duża część potoku
dostarczania jest w rzeczywistości kolejką: pull request czekający na recenzenta,
commit czekający na runner CI, zgłoszenie czekające na podjęcie, wiadomość od
klienta do wsparcia czekająca na odpowiedź. Temat 2.4 wprowadził już obciążenie
przepływu i czas przepływu i pokazał, że przeciążenie strumienia wartości gwałtownie
spowalnia dostarczanie, a tematy 2.5 i 2.6 pokazały, że większość czasu
dostarczania to czas oczekiwania, a nie czas pracy. Teoria kolejek to matematyka
leżąca u podstaw, która wyjaśnia, dlaczego to wszystko jest prawdą, a nie tylko
zaobserwowanym wzorcem.

Najużyteczniejszym pojedynczym wynikiem jest **[prawo Little'a](https://en.wikipedia.org/wiki/Little%27s_law)**,
twierdzenie udowodnione przez badacza operacyjnego Johna Little'a w 1961 roku:
średnia liczba elementów w stabilnym systemie jest równa średniemu tempu, w jakim
elementy napływają, pomnożonemu przez średni czas, jaki każdy element spędza w
systemie. Temat 2.4 użył już tego wyniku pod nazwami własnymi Flow Framework,
obciążenie przepływu równa się tempu napływu razy czas przepływu. W szerszym
słowniku tej książki czyta się go również jako: praca w toku (temat 2.5) równa się
tempu napływu nowej pracy pomnożonemu przez czas cyklu (temat 2.6). To nie reguła
kciuka ani korelacja zaobserwowana w niektórych badaniach. To dowód, który zachodzi
dla każdej stabilnej kolejki, niezależnie od tego, co kolejka przetwarza i jak
decyduje, nad czym pracować dalej.

Dla dużego zespołu ta ogólność jest sednem. Prawo Little'a daje test poprawności
działający identycznie, niezależnie od tego, czy kolejką jest tablica kanban,
broker wiadomości czy wspólny potok CI. Jeśli twoje zmierzone: praca w toku, tempo
napływu i czas cyklu nie spełniają z grubsza równania, jedna z trzech liczb jest
błędna, zwykle z powodu niespójnej definicji tego, co liczy się jako "w toku" lub
"napłynęło". Duże przedsiębiorstwa i administracja publiczna prowadzą naraz
dziesiątki takich kolejek, wspólne pule przeglądu kodu, wspólne środowiska
testowe, wspólne rady zatwierdzające, a prawo Little'a jest najtańszym dostępnym
narzędziem do wychwytywania złej definicji metryki, zanim popchnie ona złą decyzję
o obsadzie lub procesie.

## Kluczowe zasady

- **Prawo Little'a to dowód, a nie heurystyka.** Praca w toku równa się tempu
  napływu razy czas cyklu, dla każdej stabilnej kolejki, i jest szybkim testem, czy
  twoje metryki dostarczania są wewnętrznie spójne.
- **Wykorzystanie nie skaluje się liniowo z czasem oczekiwania.** Gdy wspólny
  zasób zbliża się do pełnego wykorzystania, opóźnienie kolejkowania rośnie
  gwałtownie, a nie stopniowo. Zasób zajęty w 95% często czeka wielokrotnie dłużej
  niż zajęty w 80%, a nie tylko "trochę gorzej".
- **Średnia kolejki ukrywa jej najgorszy przypadek.** Raportowanie samego
  średniego czasu oczekiwania ukrywa długi, bolesny ogon blisko pojemności,
  dokładnie to, przed czym temat 1.6 ostrzega, gdy mowa o używaniu percentyli
  zamiast średnich.
- **To, jak zdefiniowano kolejkę, można zmanipulować równie łatwo jak każdą
  inną metrykę.** To, czy coś liczy się jako "napłynęło", "w toku" czy
  "obsłużone", jest wyborem i można go dostroić, by pochlebić panelowi, bez
  zmiany tego, co faktycznie dzieje się z pracą.
- **Potok to zwykle kolejka kolejek.** Potok dostarczania łączy kilka etapów w
  łańcuch, a najwolniejszy etap wyznacza tempo całego łańcucha, niezależnie od
  tego, jak szybko działają pozostałe.

## Rekomendacje

### Używaj prawa Little'a do sprawdzania własnych liczb, zanim im zaufasz

Weź zmierzoną średnią pracę w toku swojego zespołu, jego średnie tempo napływu
nowych elementów tygodniowo i jego średni czas cyklu, i sprawdź, czy praca w toku
z grubsza równa się tempu napływu pomnożonemu przez czas cyklu. Gdy tak nie jest,
nie zakładaj, że teoria jest błędna. Szukaj faktycznej przyczyny: granicy etapu
liczonej niespójnie, pracy, która stoi "zablokowana", a nadal jest liczona jako w
toku, albo tempa napływu mierzonego w innym oknie niż czas cyklu. Ten pojedynczy
test wychwytuje więcej złej instrumentacji niż większość zespołów znajduje
jakimkolwiek innym sposobem.

### Śledź wykorzystanie bezpośrednio dla każdego wspólnego zasobu o ograniczonej pojemności

Zidentyfikuj zasoby, które twój potok dostarczania dzieli między wiele zespołów,
pulę przeglądu kodu, klaster CI, środowisko stagingowe, i zmierz, jak bardzo
każdy z nich jest zajęty jako proporcja dostępnej pojemności, zanim zaplanujesz
jego pracę blisko limitu. Wspólna grupa recenzentów pracująca blisko pełnej
pojemności wytwarza czasy oczekiwania w kolejce przeglądu rosnące znacznie szybciej
niż skromny wzrost popytu, który je spowodował, dokładnie ta dynamika stoi za
radą z tematu 2.9, by obserwować czas do pierwszego przeglądu jako wskaźnik
wyprzedzający.

### Oddziel tempo napływu, odsetek sukcesów, odsetek niepowodzeń i odsetek pominięć

Oprzyj się zwijaniu wszystkiego, co opuszcza kolejkę, w jedną liczbę
"przepustowości" lub "tempa obsługi". Śledź cztery rzeczy osobno: jak szybko
praca napływa, ile z niej kończy się sukcesem, ile zawodzi i wymaga poprawek oraz
ile jest porzucane lub po cichu gubione, zanim ktokolwiek skończy. Potok, który
wygląda na szybki, bo jego odsetek pominięć po cichu wzrósł, w rzeczywistości nie
dostarcza więcej, a pokaże ci to tylko osobne śledzenie tych czterech wskaźników.

### Modeluj wieloetapowe potoki jako kolejkę kolejek

Traktuj potok dostarczania lub każdy wieloetapowy proces, cykl życia incydentu,
potok rekrutacyjny, jako łańcuch kolejek, a nie jedną niezróżnicowaną bryłę
"czasu". Całkowite tempo napływu wyznacza pierwszy etap, całkowite tempo
zakończeń ostatni etap, a całkowite liczby błędów i pominięć potoku są sumą
własnych liczb każdego etapu. To ujęcie od razu mówi, w który etap warto
zainwestować: ten z najgorszą kombinacją wysokiego wykorzystania i wysokiego
odsetka niepowodzeń lub pominięć, a nie ten, który akurat najłatwiej
zinstrumentować.

### Ustalaj obsadę i limity WIP z uwzględnieniem wykorzystania, a nie tylko przepustowości

Gdy decydujesz, ilu recenzentów lub runnerów CI potrzebuje zespół, nie dobieraj
pojemności tak, by dokładnie odpowiadała średniemu tempu napływu. Kolejka
pracująca średnio na 100% wykorzystania ma w praktyce nieskończony czas
oczekiwania, bo rzeczywiste napływy są nierówne, a nie idealnie gładkie. Planuj
celowo zapas i traktuj "nasi recenzenci są prawie zawsze zajęci" jako sygnał
ostrzegawczy o nadchodzących czasach oczekiwania, a nie dowód efektywnego
gospodarowania zasobami.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnego modelu kolejek, obsada na wyczucie | Szybki start; brak nowego słownika dla zespołu | Konsekwentnie zaniża, jak czas oczekiwania eksploduje blisko pełnej pojemności |
| Prawo Little'a jako test poprawności istniejących metryk | Tanie, nie wymaga nowych narzędzi, szybko wychwytuje złe definicje | Sprawdza tylko spójność, sam nie diagnozuje przyczyny |
| Pełna symulacja kolejek (rozkłady napływu, wiele serwerów) | Najdokładniejsza prognoza zachowania czasu oczekiwania pod obciążeniem | Wymaga realnej biegłości statystycznej i utrzymania, których większość zespołów nie podtrzyma |
| Śledzenie wykorzystania wspólnych zasobów bez głębszego modelowania | Proste, użyteczne, wychwytuje najważniejszą pojedynczą przyczynę niekontrolowanych czasów oczekiwania | Nic nie mówi o tym, dlaczego wykorzystanie jest wysokie ani co zrobić z przyczyną |

Centralne napięcie to **rygor kontra przyjęcie**. Pełna symulacja kolejek daje
najdokładniejszą odpowiedź, ale prawie żaden zespół inżynierski jej nie zbuduje
ani nie utrzyma, a model, któremu nikt nie ufa lub którego nikt nie aktualizuje,
jest gorszy niż brak modelu. Prawo Little'a i podstawowe śledzenie wykorzystania
poświęcają nieco precyzji, ale nie wymagają specjalistycznej biegłości
statystycznej i wpisują się wprost w metryki, które zespół już zbiera dla tematów
od 2.4 do 2.6. Domyślnie używaj tych tanich, możliwych do przyjęcia testów, a pełną
symulację zarezerwuj na rzadki przypadek, gdy pojedynczy wspólny zasób, duża flota
CI czy wyspecjalizowana pula przeglądu, jest na tyle kosztowny, by uzasadnić
inwestycję.

## Pytania do omówienia z zespołem

1. **Czy nasze zmierzone: praca w toku, tempo napływu i czas cyklu faktycznie
   spełniają prawo Little'a, a jeśli nie, dlaczego?** To najszybsza dostępna
   diagnostyka złej definicji metryki. Przejdźcie razem przez faktyczne liczby, a
   jeśli równanie z grubsza się nie zgadza, wyśledźcie niezgodność do konkretnej
   niespójności definicyjnej, zamiast odrzucać test.

2. **Które wspólne zasoby w naszym potoku dostarczania pracują blisko pełnego
   wykorzystania i czy faktycznie znamy ich liczbę wykorzystania?** Większość
   zespołów potrafi nazwać zasób, który "zawsze wydaje się zajęty", ale nigdy nie
   zmierzyła jego wykorzystania bezpośrednio. Zidentyfikujcie dwa lub trzy
   najbardziej ograniczone wspólne zasoby i uzyskajcie prawdziwą liczbę dla
   każdego.

3. **Czy mieszamy sukces, niepowodzenie i pominięcie w jedną liczbę
   przepustowości i co byśmy zobaczyli, gdybyśmy je rozdzielili?** Pojedyncza
   liczba "ukończonych elementów" może rosnąć nawet wtedy, gdy jakość spada lub
   praca jest po cichu porzucana. Przeliczcie przepustowość z niedawnego okresu
   jako trzy osobne liczby i omówcie, co ten podział ujawnia, a co ukrywała liczba
   zmieszana.

4. **Gdzie w naszym potoku jest prawdziwe wąskie gardło, czyli najwolniejszy
   etap, który wyznacza tempo wszystkiego za nim?** Zespoły często inwestują w
   przyspieszenie etapu, który najłatwiej poprawić, zamiast tego, który faktycznie
   ogranicza całkowitą przepustowość. Zidentyfikujcie etap z najgorszą kombinacją
   wysokiego wykorzystania i wysokiego odsetka niepowodzeń lub pominięć.

5. **Gdybyśmy dodali zdolność do naszego najbardziej ograniczonego wspólnego
   zasobu, czy czas oczekiwania faktycznie by się poprawił, czy popyt po prostu
   by się rozszerzył, by ją wypełnić?** To pytanie oddziela prawdziwy niedobór
   zdolności od problemu popytu, a odpowiedź zmienia, czy właściwą naprawą jest
   więcej etatów, limit WIP czy zmiana sposobu priorytetyzacji pracy przed
   wejściem do kolejki.

6. **Czy kiedykolwiek przedefiniowaliśmy, co liczy się jako "w toku" lub
   "napłynęło", w sposób, który poprawił wygląd panelu bez zmiany tego, co
   faktycznie działo się z pracą?** Warto zapytać o to uczciwie i konkretnie, na
   prawdziwych przykładach z ostatniego roku, zamiast traktować to jak
   hipotetyczną obawę.

## Perspektywa sektorowa

**Startup.** Przy garstce inżynierów większość kolejek jest na tyle krótka, że
formalna analiza kolejek to przesada. Użyteczny nawyk jest mniejszy: zauważ, gdy
jedna osoba, często najstarszy stażem inżynier, stała się de facto wspólnym
zasobem, na który wszystko inne czeka, i potraktuj to jako problem wykorzystania
wart nazwania nawet bez żadnego formalnego modelu.

**Mała firma.** Zespół małej firmy rzadko potrzebuje czegoś bardziej
wyrafinowanego niż śledzenie wykorzystania swoich jednego lub dwóch naprawdę
wspólnych zasobów, często jednego recenzenta lub jednego potoku wdrożeniowego, i
obserwowanie momentu, w którym "zwykle dostępny" po cichu staje się "zwykle
wąskim gardłem". Arkusz kalkulacyjny wystarczy; dedykowane narzędzia nie są w tej
skali potrzebne.

**Duże przedsiębiorstwo.** Wspólne zasoby szybko się mnożą w skali przedsiębiorstwa:
centralny zespół platformowy, wspólna rada przeglądu bezpieczeństwa, wspólna flota
CI obsługująca dziesiątki zespołów produktowych. To dokładnie te zasoby, gdzie
śledzenie wykorzystania zarabia na siebie, bo pojedynczy przeciążony wspólny
zasób może po cichu pogarszać czas dostarczania każdego zespołu, który od niego
zależy, a metryki żadnego pojedynczego zespołu nie ujawnią przyczyny leżącej poza
jego własnym potokiem.

**Administracja publiczna.** Programy dostarczania z udziałem wielu agencji i
dostawców często kierują pracę przez wspólne rady zatwierdzające, wspólne procesy
akredytacji bezpieczeństwa i wspólne środowiska testowe, których żaden pojedynczy
zespół nie kontroluje ani nie może samodzielnie zmienić ich rozmiaru. Analiza
kolejek tych wspólnych bramek, tempo napływu, pojemność, wykorzystanie, jest
często najjaśniejszym dostępnym dowodem dla uzasadnienia biznesowego dodania
zdolności albo zmiany sposobu grupowania pracy, zanim dotrze do bramki.

## Przykłady

**Przedsiębiorstwo.** Wewnętrzny zespół platformowy dostawcy infrastruktury
chmurowej zauważył, że czas realizacji zmiany (temat 2.10) wzrósł we wszystkich
zespołach produktowych zależnych od jego wspólnej floty CI, mimo że żaden
pojedynczy zespół nie zmienił sposobu pracy. Analiza wykorzystania wykazała, że
flota pracuje powyżej 90% zajętości w godzinach szczytu, daleko poza punktem, w
którym teoria kolejek przewiduje gwałtowny, a nie stopniowy wzrost czasu
oczekiwania. Zespół platformowy dodał zdolność CI i wprowadził politykę
sprawiedliwego podziału harmonogramu, by żaden pojedynczy zespół nie mógł
zmonopolizować kolejki swoim wybuchem aktywności. Mediana czasu oczekiwania na CI
spadła o ponad połowę w ciągu miesiąca, dowód, że wąskim gardłem przez cały czas
była wspólna, niewidoczna kolejka.

**Administracja publiczna.** Zespół usług cyfrowych krajowej agencji pozwoleń
śledził przetwarzanie wniosków jako jedną liczbę przepustowości "zamknięte
sprawy tygodniowo" przez dwa lata i liczba wyglądała stabilnie. Dokładniejsza
analiza, rozbijająca tę liczbę na sprawy zatwierdzone, odrzucone i porzucone
przez wnioskodawców po długich opóźnieniach, wykazała, że odsetek porzuceń niemal
się potroił w tym samym okresie, podczas gdy zatwierdzenia utrzymały się na
stałym poziomie. Prawo Little'a, zastosowane do kolejki pracowników
rozpatrujących sprawy, pokazało, że praca w toku urosła znacznie ponad to, co
sugerował deklarowany średni czas przetwarzania zespołu, co oznaczało, że sprawy
po cichu piętrzyły się w statusie niezliczanym jako "oczekujące". Agencja
przebudowała definicje śledzenia spraw, by uczciwie liczyć każdą otwartą sprawę, i
dodała zdolność pracowników dobraną tak, by utrzymać wykorzystanie poniżej 85%,
śledzone teraz jako stały cel operacyjny obok liczby przepustowości.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze stosowania podstawowej analizy kolejek jest to, że zamienia ona "potok
wydaje się wolny" w konkretną, uzasadnioną decyzję, dodaj zapas do tego wspólnego
zasobu, rozdziel tę zmieszaną metrykę na jej prawdziwe składniki, zamiast
niejasnego nacisku "pracujcie szybciej", który mija faktyczną przyczynę. Powyższy
przykład z chmurą, zmniejszenie czasu oczekiwania o połowę dzięki naprawie
zdolności i harmonogramu, a nie żadnej zmianie zachowania poszczególnych
zespołów, to wzorzec, który ta analiza niezawodnie wytwarza: naprawa jest niemal
zawsze tańsza niż proszenie każdego zespołu poniżej, by poruszał się szybciej
wokół wąskiego gardła, którego nie widzi.

Całkowity koszt posiadania (TCO) przyjęcia jest naprawdę niski. Prawo Little'a i
śledzenie wykorzystania nie wymagają nowych narzędzi poza tym, co tematy od 2.4 do
2.6 już każą ci zbierać: tempem napływu, pracą w toku i czasem cyklu. Inwestycja to
głównie dyscyplina analityczna, porównywanie liczb ze sobą i okresowy przegląd
wykorzystania wspólnych zasobów, zanim staną się kolejną niewyjaśnioną regresją
czasu realizacji w organizacji.

## Antywzorce i pułapki

- **Dobieranie pojemności wspólnego zasobu tak, by dokładnie odpowiadała jego
  średniemu tempu napływu:** gwarantuje wysokie wykorzystanie i niekontrolowane
  czasy oczekiwania, gdy tylko popyt jest choć na chwilę nierówny.
- **Raportowanie samego średniego czasu oczekiwania, nigdy percentyla:** ukrywa
  długi ogon, który ma największe znaczenie dla ludzi w nim czekających.
- **Mieszanie sukcesu, niepowodzenia i pominięcia w jedną liczbę
  przepustowości:** sposób manipulowania leżący w sercu tego tematu. Zespół pod
  presją może sprawić, że przepustowość wygląda zdrowo, po cichu pozwalając
  rosnąć odsetkowi pominięć, porzuconym zgłoszeniom, po cichu gubionym prośbom,
  pracy, która nigdy nie jest liczona jako niepowodzenie. Bariera ochronna to
  śledzenie tempa napływu, sukcesów, niepowodzeń i pominięć jako czterech
  osobnych, widocznych liczb, ta sama dyscyplina, której temat 1.2 wymaga od każdej
  metryki w tej książce, aby rosnący odsetek pominięć nie mógł się ukryć za płaskim
  wykresem przepustowości.
- **Traktowanie "nasi ludzie są zawsze zajęci" jak komplementu:** to objaw
  wysokiego wykorzystania, głównej przyczyny długich, nieprzewidywalnych czasów
  oczekiwania.
- **Przedefiniowywanie "w toku", by po cichu zmniejszyć pracę w toku:** przenosi
  pracę do stanu niezliczanego, "zablokowane", "wstrzymane", bez zmiany czasu
  potrzebnego na jej ukończenie i łamie test prawa Little'a, który inaczej by to
  wychwycił.
- **Zakładanie, że model kolejek nie wymaga utrzymania po zbudowaniu:** wzorce
  napływu i pojemność stale się zmieniają, a przeterminowany model daje pewne
  siebie, błędne prognozy.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Żadna kolejka nie jest mierzona jawnie; czas
  oczekiwania jest omawiany anegdotycznie jako "wszystko idzie wolno".
- **Poziom 2, Rozwój:** Tempo napływu, praca w toku i czas cyklu są śledzone
  dla co najmniej jednego potoku, ale nigdy nie są sprawdzane względem prawa
  Little'a ani względem wykorzystania wspólnych zasobów.
- **Poziom 3, Standaryzacja:** Prawo Little'a jest rutynowym testem spójności w
  potokach dostarczania, a wykorzystanie jest jawnie śledzone dla najważniejszych
  wspólnych zasobów.
- **Poziom 4, Zarządzanie:** Odsetki sukcesów, niepowodzeń i pominięć są śledzone
  osobno dla każdej istotnej kolejki, a decyzje o zdolności używają celów
  wykorzystania, a nie tylko średniego popytu.
- **Poziom 5, Orkiestracja:** Organizacja modeluje swoje główne potoki jako
  kolejki kolejek, systematycznie identyfikuje prawdziwe wąskie gardła i potrafi
  wskazać konkretne zmiany zdolności lub procesu dokonane dzięki analizie kolejek,
  z mierzalną poprawą czasu oczekiwania na poparcie.

## Pomysły do dyskusji

1. Wybierzmy jeden z naszych potoków dostarczania i sprawdźmy, czy jego liczby spełniają dziś prawo Little'a.
2. Nazwijmy jedyny wspólny zasób w naszej organizacji, o którym większość by się zgodziła, że jest "zawsze zajęty", i znajdźmy jego faktyczną liczbę wykorzystania.
3. Jak wyglądałby nasz wykres przepustowości, gdybyśmy rozbili go na odsetki sukcesów, niepowodzeń i pominięć za ostatni kwartał?
4. Gdybyśmy musieli dodać zdolność do dokładnie jednego wspólnego zasobu w tym roku, którego i jaki dowód by to uzasadniał?

## Kluczowe wnioski

- **Prawo Little'a**, praca w toku równa się tempu napływu razy czas cyklu, jest
  dowodem, a nie heurystyką, i jest najtańszym dostępnym testem, czy twoje metryki
  dostarczania są wewnętrznie spójne.
- **Czas oczekiwania rośnie gwałtownie, a nie stopniowo, gdy wykorzystanie zbliża
  się do pełnej pojemności.** Traktuj "zawsze zajęci" jako sygnał ostrzegawczy, a
  nie komplement.
- Śledź **tempo napływu, odsetek sukcesów, odsetek niepowodzeń i odsetek
  pominięć** osobno; mieszanie ich w jedną liczbę przepustowości jest centralnym
  sposobem manipulowania w tym temacie.
- Modeluj wieloetapowy potok jako **kolejkę kolejek** i inwestuj w etap z najgorszą
  kombinacją wysokiego wykorzystania i wysokiego odsetka niepowodzeń lub pominięć,
  a nie w ten, który najłatwiej poprawić.
- Wybieraj tanie, możliwe do przyjęcia testy, **prawo Little'a i śledzenie
  wykorzystania**, zamiast pełnej symulacji kolejek, której niewiele zespołów
  podtrzyma.

## Bibliografia i dalsza lektura

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
