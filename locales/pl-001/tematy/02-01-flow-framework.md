# 2.1 Flow Framework

## Przegląd i motywacja

**Flow Framework** to model zarządczy i strukturalny stworzony przez Mika
Kerstena i opublikowany w jego książce *Project to Product* z 2018 roku.
Istnieje, by odpowiedzieć na pytanie, na które same metryki potoku nie
odpowiedzą: nie tylko jak szybko i jak bezpiecznie kod przechodzi od commita do
produkcji, ale jaki rodzaj wartości w ogóle płynie przez potok i czy ta
mieszanka odzwierciedla faktyczną strategię biznesu. Ramy traktują dostarczanie
oprogramowania jako **[strumień wartości](https://en.wikipedia.org/wiki/Value_stream)**,
czyli sekwencję działań od początku do końca, która zamienia pomysł w wartość
otrzymywaną przez klienta, czerpiąc wprost z tradycji mapowania strumienia
wartości w produkcji szczupłej.

Ta książka używa Flow Framework jako struktury organizującej część 2. Temat 2.2
wprowadza jego cztery elementy przepływu, tematy 2.3 i 2.4 wprowadzają jego
pięć metryk przepływu, temat 2.8 śledzi te metryki do ich źródła w klasycznym
mapowaniu strumienia wartości w Lean, a temat 2.10 omawia metryki DORA jako
węższe, skoncentrowane na potoku ramy referencyjne, od których ta część już nie
zaczyna. To świadomy wybór, a nie odrzucenie badań DORA. DORA mierzy
przepustowość i stabilność systemu z prawdziwym rygorem statystycznym, ale
milczy w kwestii, na której liderowi biznesu zależy najbardziej: z tego
wszystkiego, co organizacja inżynierska dostarczyła w tym kwartale, ile było
nową wartością dla klienta, a ile zostało po cichu pochłonięte przez naprawę
defektów, zarządzanie ryzykiem lub spłatę długu. Flow Framework istnieje
właśnie po to, by ta mieszanka stała się widoczna.

Dla dużych zespołów to rozróżnienie nie jest akademickie. Organizacja
platformowa prowadząca dziesiątki strumieni wartości może mieć znakomite liczby
DORA, szybkie, częste, stabilne wdrożenia, podczas gdy jej faktyczna produkcja
produktowa po cichu zdryfowała ku niemal czystej pracy utrzymaniowej, wzorcowi
niewidocznemu dla panelu mierzącego tylko mechanikę potoku. Duże przedsiębiorstwa
i administracja publiczna, które muszą uzasadniać inwestycje inżynierskie
interesariuszom myślącym w kategoriach biznesowych, a nie potokowych, potrzebują
słownika łączącego aktywność dostarczania z zamiarem strategicznym. To właśnie
dają te ramy.

## Kluczowe zasady

- **Jednostką pomiaru jest strumień wartości, a nie zespół ani potok.** Rozciąga
  się od potrzeby klienta lub biznesu do dostarczonego rezultatu, przecinając
  wszelkie granice zespołów, które praca faktycznie przecina.
- **Elementy przepływu czynią widocznym "co", a nie tylko "jak szybko".** Cztery
  kategorie z tematu 2.2, funkcje, defekty, ryzyka i dług, zamieniają
  niejawną decyzję priorytetyzacyjną w jawną, mierzalną.
- **Alokacja zdolności między elementami przepływu ma sumę zerową.** Więcej
  zdolności wydanych na jeden typ elementu to mniej zdolności dostępnych dla
  pozostałych; ramy czynią ten kompromis widocznym zamiast pozostawiać go
  niejawnym.
- **Pięć metryk przepływu odpowiada na pytania biznesowe, nie tylko
  inżynierskie.** Są zaprojektowane do przedstawiania interesariuszowi
  nietechnicznemu, a nie do zatrzymywania wewnątrz zespołu inżynierskiego.
- **Zarządzanie strumieniem wartości powinno być ciągłe, a nie jednorazowym
  ćwiczeniem mapowania.** Statyczne mapy strumienia wartości się przeterminowują;
  ramy są zbudowane tak, by instrumentować je z narzędzi, których zespoły już
  używają.

## Rekomendacje

### Zmapuj swój strumień wartości, zanim cokolwiek zinstrumentujesz

Zanim przyjmiesz jakąkolwiek metrykę przepływu, przejdź faktyczną ścieżkę, jaką
pokonuje element pracy od zidentyfikowania potrzeby biznesowej do otrzymania
wartości przez klienta, nazywając każdy etap i każde przekazanie między
zespołami. To klasyczne ćwiczenie [mapowania strumienia wartości](https://en.wikipedia.org/wiki/Value_stream_mapping),
zaadaptowane z produkcji szczupłej, a jego pominięcie jest najczęstszym powodem,
dla którego wdrożenie Flow Framework daje liczby, którym nikt nie ufa: metryki
liczone względem niezbadanego, nieformalnie rozumianego procesu rzadko
odpowiadają temu, co faktycznie się dzieje.

### Połącz metryki przepływu z narzędziami, których twoje zespoły już używają

Flow Framework jest zbudowany do ciągłego, zautomatyzowanego zarządzania
strumieniem wartości, a nie okresowego ręcznego ćwiczenia mapowania. Zintegruj
śledzenie elementów przepływu bezpośrednio z narzędziami, przez które praca już
przepływa, Jira, Azure DevOps, GitHub, zamiast budować równoległy system
śledzenia, który zespoły muszą aktualizować ręcznie. Stan elementu przepływu
powinien aktualizować się sam, gdy porusza się leżące u podstaw zgłoszenie lub
pull request, zgodnie z tą samą dyscypliną instrumentacji ponad samooceną, którą
temat 1.5 zaleca dla każdej metryki w tej książce.

### Przedstawiaj rozkład przepływu bezpośrednio interesariuszom biznesowym, nie tylko kierownictwu inżynierii

Największą pojedynczą zmarnowaną okazją w tych ramach jest traktowanie ich jak
wewnętrznego narzędzia inżynierskiego. Rozkład przepływu, proporcja pracy
idącej na funkcje wobec defektów, ryzyka i długu (temat 2.3), jest specjalnie
zaprojektowany jako rozmowa z kierownictwem produktu i biznesu, bo czyni
niejawną decyzję priorytetyzacyjną, ile zdolności idzie na nową wartość, a ile
na utrzymanie działania, jawną i negocjowalną zamiast przyjętej z góry.

### Traktuj cztery elementy przepływu jak prawdziwą taksonomię, a nie formalność

Wymagaj, by każda jednostka pracy była klasyfikowana do dokładnie jednego z
czterech typów elementów przepływu przy przyjęciu, a nie wstecznie. Klasyfikacja
zastosowana po fakcie albo luźno, bo "to w sumie funkcja", eroduje całą wartość
taksonomii, ponieważ cały sens polega na uczciwym, spójnym zapisie tego, gdzie
faktycznie poszła zdolność.

### Wracaj do mapy strumienia wartości, gdy zmienia się organizacja, a nie według stałego harmonogramu

Mapa strumienia wartości przeterminowuje się w chwili, gdy granice zespołów,
narzędzia lub sam produkt zmieniają się znacząco, a nie według jakiegoś
arbitralnego rocznego rytmu. Traktuj reorganizację, dużą migrację narzędzi lub
znaczący zwrot produktowy jako wyzwalacz do ponownego przejścia strumienia
wartości, bo metryka przepływu liczona względem przeterminowanej mapy po cichu
mierzy nie to, co trzeba.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Tylko metryki potoku (DORA, temat 2.10) | Proste, dobrze zwalidowane, tanie do zinstrumentowania z istniejących danych CI/CD | Milczą o tym, jaki rodzaj wartości jest dostarczany |
| Pełne wdrożenie Flow Framework | Łączy dostarczanie ze strategią biznesową; czyni mieszankę wartości widoczną i negocjowalną | Wymaga uczciwej mapy strumienia wartości i spójnej dyscypliny klasyfikacji elementów przepływu |
| Statyczne, jednorazowe mapowanie strumienia wartości | Tanie, szybkie do przeprowadzenia jako warsztat | Szybko się przeterminowuje; daje migawkę, a nie żywą metrykę |
| Ciągłe, zintegrowane z narzędziami zarządzanie strumieniem wartości | Żywe, zawsze aktualne dane; skaluje się na wiele strumieni wartości | Wymaga na początku realnej pracy integracyjnej z narzędziami |

Centralne napięcie to **czytelność dla biznesu kontra wysiłek instrumentacji**.
Metryki potoku są tanie, bo potok już wytwarza dane; metryki strumienia wartości
wymagają uczciwej mapy całego procesu i zdyscyplinowanego nawyku klasyfikacji
przy przyjęciu, jakiego metryki potoku nigdy nie wymagały. Rozwiąż to napięcie,
zaczynając od jednego strumienia wartości, a nie całej organizacji naraz,
mapując go porządnie i dopiero potem integrując śledzenie elementów przepływu z
istniejącymi narzędziami, zamiast próbować wdrożenia typu big bang we
wszystkich zespołach jednocześnie.

## Pytania do omówienia z zespołem

1. **Czy potrafilibyśmy teraz narysować dokładną mapę strumienia wartości dla
   naszego najważniejszego produktu, czy zgadywalibyśmy kilka przekazań?**
   Większość organizacji nigdy faktycznie nie przeszła tej ścieżki od końca do
   końca. Spróbujcie tego ćwiczenia uczciwie i zanotujcie każde miejsce, w
   którym grupa się nie zgadza co do tego, co faktycznie się dzieje, bo ta
   niezgoda sama jest diagnostyczna.

2. **Gdybyśmy zaklasyfikowali wszystko, co nasz zespół dostarczył w zeszłym
   kwartale, na funkcje, defekty, ryzyka i dług, czy wynik zaskoczyłby
   kierownictwo produktu?** Większość zespołów nigdy nie uczyniła tego podziału
   jawnym, a odpowiedź często ujawnia obciążenie utrzymaniowe albo problem
   długu, który wcześniej był niewidoczny w prostym zliczeniu "dostarczonych
   punktów historii".

3. **Czy mamy prawdziwy, zintegrowany z narzędziami sposób śledzenia
   elementów przepływu, czy wymagałoby to od kogoś ręcznego klasyfikowania i
   przeklasyfikowywania pracy?** System ręczny szybko zanika pod realnym
   obciążeniem; zintegrowany z narzędziami nie. Oceńcie uczciwie, który z nich
   faktycznie jesteście gotowi utrzymać.

4. **Kiedy ostatnio zmieniła się nasza mapa strumienia wartości i czy
   zaktualizowaliśmy nasze metryki, by to odzwierciedlały?** Reorganizacje i
   migracje narzędzi po cichu unieważniają mapę strumienia wartości, a niewiele
   organizacji pamięta, by do niej wrócić, gdy to się dzieje.

5. **Czy nasze metryki przepływu są kiedykolwiek przedstawiane bezpośrednio
   interesariuszom biznesowym lub produktowym, czy zostają w inżynierii?**
   Największa przewaga ram nad metrykami samego potoku to właśnie ta rozmowa, a
   jej pominięcie traci większość wartości ram.

6. **Co byłoby potrzebne, by ktoś mógł zmanipulować naszą klasyfikację
   elementów przepływu, nie robiąc nic nieuczciwego na papierze?** Przejdźcie
   przez to, jak zespół pod presją dostarczania mógłby po cichu przeetykietować
   pracę nad długiem lub ryzykiem jako funkcje, by wyglądać bardziej
   produktywnie, i omówcie, czy dziś byście to zauważyli.

## Perspektywa sektorowa

**Startup.** Pełna mapa strumienia wartości to zwykle przesada dla pięcioosobowego
zespołu, w którym każdy zna cały proces na pamięć. Użytecznym nawykiem w tej
skali jest po prostu głośne nazywanie czterech typów elementów przepływu w
rozmowach planistycznych, aby praca nad długiem i ryzykiem nie znikała po cichu z
widoku, gdy tylko zbliża się termin funkcji.

**Mała firma.** Przyjmij klasyfikację elementów przepływu w jakimkolwiek
lekkim narzędziu do śledzenia, którego już używasz, w etykietowanej kolumnie lub
polu niestandardowym, zamiast w dedykowanym produkcie do zarządzania strumieniem
wartości. Dyscyplina spójnej klasyfikacji liczy się znacznie bardziej niż
wyrafinowanie stojących za nią narzędzi.

**Duże przedsiębiorstwo.** Tu ramy zarabiają na siebie, bo duża organizacja
prowadząca dziesiątki strumieni wartości w wielu liniach produktowych nie ma
żadnego innego niezawodnego sposobu, by zobaczyć w jednym miejscu, jak zdolność
inżynierska jest faktycznie alokowana między funkcje, defekty, ryzyko i dług.
Zainwestuj w integrację z narzędziami; alternatywa ręczna nie przeżywa spotkania
z realną skalą.

**Administracja publiczna.** Rozkład przepływu daje organizacji inżynierskiej
sektora publicznego uzasadnioną, czytelną dla biznesu odpowiedź na pytanie
"dlaczego nie dostarcza się więcej nowej funkcjonalności", gdy uczciwa
odpowiedź brzmi, że rosnąca część zdolności idzie na usuwanie podatności
bezpieczeństwa lub dług odziedziczony. Uczynienie tego kompromisu widocznym i
jawnym, zamiast pochłaniania presji po cichu, jest często najużyteczniejszą
rzeczą, jaką te ramy oferują liderowi technologii w administracji.

## Przykłady

**Przedsiębiorstwo.** Organizacja platformy likwidacji szkód dużego
ubezpieczyciela wierzyła, że dostarcza głównie nowe funkcje, na podstawie swoich
raportów o prędkości sprintów. Pierwsze ćwiczenie mapowania strumienia wartości i
klasyfikacji elementów przepływu ujawniło, że praca nad długiem i ryzykiem,
w dużej mierze nieudokumentowany dług techniczny z dziesięcioletniego systemu
rdzeniowego, pochłaniała faktycznie blisko połowę całkowitej zdolności
inżynierskiej, fakt, którego nie wydobyło żadne wcześniejsze raportowanie, bo ta
praca była zawsze wrzucana do ogólnych "zadań inżynierskich". Przedstawienie
tego podziału komitetowi wykonawczemu zapewniło po raz pierwszy w historii
platformy dedykowany budżet na redukcję długu, zamiast dalszej cichej
konkurencji pracy nad długiem z każdym żądaniem funkcji.

**Administracja publiczna.** Dział usług cyfrowych krajowego urzędu skarbowego
użył mapowania strumienia wartości, by zdiagnozować, dlaczego sztandarowa
funkcja dla obywateli była "w toku" od ponad roku mimo stałego kończenia
sprintów. Mapa ujawniła, że strumień wartości faktycznie obejmował pięć
oddzielnych zespołów z trzema przekazaniami, których nie odzwierciedlał schemat
organizacyjny, a klasyfikacja elementów przepływu pokazała, że faktyczny czas
inżynierski funkcji był małym ułamkiem jej całkowitego czasu przepływu, resztę
pochłaniały opóźnienia przekazań między zespołami, których nie widziały
metryki żadnego pojedynczego zespołu. Dział przebudował się wokół strumienia
wartości, a nie schematu organizacyjnego, dla tej konkretnej linii produktowej,
istotnie skracając czas przepływu w ciągu dwóch kwartałów.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z przyjęcia Flow Framework jest uzasadniona, czytelna dla biznesu
odpowiedź na pytanie, na które metryki potoku nie odpowiedzą: czy zdolność
inżynierska jest alokowana tak, jak sądzi kierownictwo. Powyższy przykład z
ubezpieczycielem, ujawniający blisko połowę zdolności idącą na wcześniej
niewidoczną pracę nad długiem, to częsty wzorzec, gdy organizacja faktycznie
uczciwie klasyfikuje swoją pracę, a ta widoczność rutynowo odblokowuje
inwestycje, jakich mglista prośba "potrzebujemy więcej czasu na dług
techniczny" nigdy by nie odblokowała.

Całkowity koszt posiadania (TCO) koncentruje się w dwóch miejscach: początkowym
ćwiczeniu mapowania strumienia wartości, które wymaga realnego czasu
facylitacji, by zrobić je uczciwie, i integracji z narzędziami potrzebnej, by
dane o elementach przepływu pozostawały aktualne bez ręcznego utrzymania. Oba
koszty są jednorazowe lub niskoutrzymaniowe po dobrym wykonaniu, co czyni ramy
znacznie tańszymi w utrzymaniu niż we wdrożeniu.

## Antywzorce i pułapki

- **Traktowanie mapowania strumienia wartości jak jednorazowych warsztatów, do
  których nikt nie wraca:** mapa się przeterminowuje w chwili zmiany organizacji,
  a metryka liczona względem przeterminowanej mapy mierzy nie to, co trzeba.
- **Budowanie równoległego, ręcznie utrzymywanego systemu śledzenia elementów
  przepływu:** szybko zanika pod realnym obciążeniem; zintegruj z istniejącymi
  narzędziami.
- **Klasyfikowanie elementów przepływu wstecznie, a nie przy przyjęciu:** sposób
  manipulowania leżący w sercu tego tematu. Pod presją dostarczania zespół może
  po cichu przeetykietować pracę nad długiem lub ryzykiem jako funkcje po
  fakcie, by wyglądać bardziej produktywnie dla interesariuszy widzących tylko
  wykres rozkładu przepływu, bez żadnej jawnej, widocznej decyzji o tym. Bariera
  ochronna to wymaganie klasyfikacji przy przyjęciu, zanim rezultat jest
  znany, i okresowe audytowanie próbki sklasyfikowanych elementów względem tego,
  co zmiana faktycznie zrobiła, ta sama dyscyplina audytu, której temat 1.2
  wymaga dla każdej metryki w tej książce.
- **Trzymanie metryk przepływu wyłącznie wewnątrz inżynierii:** traci główną
  przewagę ram, wspólny słownik z interesariuszami biznesowymi.
- **Mapowanie schematu organizacyjnego zamiast faktycznego strumienia wartości:**
  ukrywa przekazania między zespołami, które są często największym źródłem
  opóźnień.
- **Przyjęcie ram w całej organizacji przed zwalidowaniem ich na jednym
  strumieniu wartości:** grozi dużą inwestycją w metryki, którym nikt nie ufa,
  bo leżąca u podstaw mapa nigdy nie została potwierdzona jako dokładna.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Nie istnieje mapa strumienia wartości; praca jest
  śledzona jako ogólne zgłoszenia bez klasyfikacji elementów przepływu.
- **Poziom 2, Rozwój:** Jeden strumień wartości został zmapowany, a elementy
  przepływu są klasyfikowane nieformalnie, ale śledzenie jest ręczne i
  stosowane niespójnie.
- **Poziom 3, Standaryzacja:** Klasyfikacja elementów przepływu jest
  zintegrowana z istniejącymi narzędziami i stosowana spójnie przy przyjęciu w
  głównych strumieniach wartości.
- **Poziom 4, Zarządzanie:** Rozkład przepływu jest regularnie przeglądany z
  interesariuszami biznesowymi, a mapy strumienia wartości są aktywnie
  utrzymywane w aktualności w miarę zmian organizacji.
- **Poziom 5, Orkiestracja:** Organizacja alokuje inwestycje inżynierskie
  celowo między strumienie wartości, używając danych o przepływie, i potrafi
  wskazać konkretne decyzje strategiczne, budżet redukcji długu, przebudowę
  zespołu, podjęte, bo ramy uwidoczniły wcześniej niewidoczny kompromis.

## Pomysły do dyskusji

1. Czy potrafilibyśmy dziś narysować dokładną mapę strumienia wartości dla naszego sztandarowego produktu, bez zgadywania?
2. Jaki procent zdolności z zeszłego kwartału uczciwa klasyfikacja elementów przepływu pokazałaby jako poszedł na dług i ryzyko, a jaki na funkcje?
3. Czy nasze metryki przepływu docierają obecnie do interesariuszy biznesowych, czy zostają w inżynierii?
4. Jakie jest największe przekazanie między zespołami w naszym strumieniu wartości, którego nasz schemat organizacyjny nie odzwierciedla?

## Kluczowe wnioski

- **Flow Framework**, z książki Mika Kerstena *Project to Product*, mierzy, jaki
  rodzaj wartości płynie przez potok dostarczania, a nie tylko jak szybko sam
  potok działa.
- **Strumień wartości**, a nie zespół ani potok, jest jednostką pomiaru ram, a
  uczciwe jego zmapowanie poprzedza instrumentowanie czegokolwiek.
- **Klasyfikacja elementów przepływu przy przyjęciu, a nie po fakcie**, jest
  barierą ochronną przeciw centralnemu sposobowi manipulowania w tym temacie:
  cichemu przeetykietowywaniu pracy nad długiem lub ryzykiem jako funkcji, by
  wyglądać bardziej produktywnie.
- **Połącz metryki przepływu z istniejącymi narzędziami**, Jira, Azure DevOps,
  GitHub, zamiast z równoległym ręcznym systemem śledzenia, który nie przeżyje
  realnego obciążenia.
- Przedstawiaj dane o przepływie **bezpośrednio interesariuszom biznesowym**; ta
  rozmowa, a nie wewnętrzny panel inżynierski, jest główną przewagą ram nad
  metrykami samego potoku.

## Bibliografia i dalsza lektura

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
