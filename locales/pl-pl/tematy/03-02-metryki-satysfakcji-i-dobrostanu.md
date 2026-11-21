# 3.2 Metryki satysfakcji i dobrostanu

## Przegląd i motywacja

**Satysfakcja i dobrostan**, czyli litera S w SPACE (temat 3.1), to wymiar,
którego żadna telemetria systemowa nie zaobserwuje bezpośrednio. To, czy
inżynier uważa swoją pracę za sensowną, czy czuje wsparcie zespołu, czy
zmierza ku wypaleniu, nie zostawia śladu w logu systemu kontroli wersji ani w
potoku CI. Trzeba o to zapytać. Ten temat dotyczy pytania dobrze:
projektowania pomiaru, który daje wiarygodny sygnał o stanie naprawdę
subiektywnym i naprawdę ważnym, a nie liczby, która wygląda precyzyjnie,
choć nie mierzy prawie nic realnego.

Ten wymiar ma znaczenie, bo jest wskaźnikiem wyprzedzającym kosztów, które
ujawniają się gdzie indziej, znacznie później i znacznie drożej. Spadająca
satysfakcja przewiduje rotację pracowników wcześniej niż rozmowa wyjściowa.
Rosnące ryzyko wypalenia przewiduje spadek jakości wcześniej, niż pokaże go
odsetek defektów. Organizacja, która patrzy tylko na metryki dostarczania i
aktywności, dowiaduje się o problemie z dobrostanem dopiero wtedy, gdy stał
się już odejściem, incydentem albo cichym, długotrwałym spadkiem produkcji,
którego diagnoza zajmuje miesiące. Bezpośredni pomiar satysfakcji i
dobrostanu daje organizacji czas, by zadziałać, zanim to nastąpi.

W dużych zespołach ten wymiar to także miejsce, gdzie rozróżnienie
diagnostyczne i oceniające z tematu 1.1 ma największe znaczenie. Dane o
satysfakcji używane do zrozumienia i poprawy warunków zespołu są cenne i
mało ryzykowne. Te same dane użyte do szeregowania zespołów, a tym bardziej
osób, niemal natychmiast psują instrument ankietowy, bo ludzie przestają
odpowiadać szczerze, gdy tylko podejrzewają, że odpowiedź zostanie użyta
przeciwko nim lub ich zespołowi. Duże przedsiębiorstwa i administracja
publiczna, z ich formalnymi cyklami ocen okresowych, są szczególnie podatne
na ten dryf i muszą się przed nim jawnie zabezpieczać.

## Kluczowe zasady

- **Satysfakcji i dobrostanu nie da się zaobserwować w telemetrii
  systemowej.** O ten wymiar trzeba zapytać, świadomie i dobrze.
- **Anonimowość nie jest opcją.** Każde dostrzegane powiązanie szczerej
  odpowiedzi z osobistą konsekwencją niszczy sygnał.
- **Ten wymiar jest wskaźnikiem wyprzedzającym, nie opóźnionym.** Przewiduje
  rotację pracowników i problemy z jakością, zanim pojawią się gdzie indziej.
- **Wypalenie to konkretny, rozpoznawalny wzorzec, a nie ogólne
  niezadowolenie.** Mierz je jawnie, zamiast polegać na samym niejasnym
  wyniku satysfakcji.
- **Trend liczy się bardziej niż pojedynczy odczyt.** Pojedynczy wynik
  satysfakcji to migawka. Prawdziwym sygnałem jest trend w kolejnych
  ankietach.

## Rekomendacje

### Używaj zwalidowanych instrumentów ankietowych zamiast wymyślać własne

Dobrostan i wypalenie mają ustalone, zwalidowane instrumenty pomiarowe, z
których najważniejszy to [Maslach Burnout Inventory](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory),
mierzący wypalenie w trzech rozpoznanych wymiarach: wyczerpaniu
emocjonalnym, depersonalizacji lub cynizmie oraz obniżonym poczuciu
osobistych osiągnięć. Zapożyczenie z ustalonego, zwalidowanego instrumentu,
nawet w krótkiej, adaptowanej wersji, daje bardziej wiarygodne dane niż
doraźny zestaw pytań wymyślonych wewnętrznie, bo zwalidowane instrumenty
zostały już sprawdzone pod kątem tego, czy naprawdę mierzą to, co deklarują.

### Zagwarantuj prawdziwą anonimowość i bądź jawny co do tego, jak to zrobiłeś

Zaznacz wprost, i mów to poważnie, że indywidualnych odpowiedzi nie da się
powiązać z osobą, zwłaszcza w małych zespołach, w których wzorce odpowiedzi
dałoby się inaczej wywnioskować. Użyj narzędzia ankietowego firmy trzeciej,
którego sama organizacja nie może zdeanonimizować, publikuj wyniki zbiorcze
tylko powyżej minimalnej wielkości grupy (zwykle pięciu lub więcej
respondentów), aby zapobiec wnioskowaniu w małych zespołach, i jasno
przekaż tę politykę, zanim poprosisz kogokolwiek o udział. Jeden incydent
złamania anonimowości, nawet przypadkowy, niszczy zaufanie do każdej
przyszłej ankiety.

### Śledź trend w czasie, nie pojedynczy odczyt w izolacji

Pojedynczy wynik satysfakcji ma ograniczoną wartość diagnostyczną. Spadający
trend w trzech kolejnych cyklach ankiet to znacznie silniejszy i bardziej
użyteczny sygnał. Prowadź ankietę w stałym, umiarkowanym rytmie, kwartalny
jest częsty, i zawsze pokazuj wyniki razem z historyczną linią trendu, a nie
jako odosobnioną liczbę, aby zarówno czytelnicy, jak i respondenci mogli
kalibrować się względem prawdziwej zmiany, a nie jednorazowego szumu.

### Odróżniaj ogólną satysfakcję od konkretnego ryzyka wypalenia

Ogólne pytanie ("na ile jesteś zadowolony ze swojej pracy?") i pytanie o
wypalenie ("czy czujesz się emocjonalnie wyczerpany swoją pracą?") mierzą
rzeczy pokrewne, ale różne, a zespół może wypadać przyzwoicie w pierwszym,
pokazując realne oznaki ostrzegawcze w drugim. Uwzględnij oba w projekcie
ankiety i traktuj sygnał ostrzegawczy dotyczący wypalenia jako wymagający
szybszego, bardziej bezpośredniego działania niż ogólny spadek satysfakcji.

### Zestawiaj dane z ankiet z obiektywnymi sygnałami potwierdzającymi, ostrożnie

Tam, gdzie to możliwe, potwierdzaj trendy satysfakcji obiektywnymi sygnałami,
które prawdopodobnie wiążą się z dobrostanem: odsetkiem dobrowolnych odejść,
utrzymującymi się wzorcami pracy po godzinach albo rosnącym odsetkiem
niewykorzystanego urlopu. Używaj ich jako potwierdzenia, nigdy zamiast
bezpośredniego pytania, i uważaj, by to potwierdzanie nie stało się
mechanizmem nadzoru, który sam niszczy zaufanie i, co ironiczne,
satysfakcję.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Doraźne wewnętrzne pytania ankietowe | Szybkie do zbudowania, dopasowane do kontekstu | Niezwalidowane; niejasne, czy naprawdę mierzą to, co deklarują |
| Zwalidowany instrument (np. Maslach Burnout Inventory, adaptowany) | Sprawdzony, porównywalny, bardziej wiarygodny sygnał | Wymaga więcej przygotowań i może wymagać adaptacji do kontekstu inżynierskiego |
| Częste krótkie ankiety pulsu | Małe zmęczenie respondentów, sygnał niemal w czasie rzeczywistym | Mniejsza głębia na ankietę; ryzyko szumu przy nadinterpretacji |
| Rzadkie, głębokie ankiety | Bogaty, szczegółowy sygnał | Wolniej wychwytują szybko rozwijający się problem, jak ostre wypalenie |

Główne napięcie to **głębia kontra częstość**. Głęboka, zwalidowana ankieta
prowadzona co kwartał daje wiarygodny, szczegółowy obraz, ale może przeoczyć
szybko rozwijający się problem między cyklami. Częste krótkie ankiety pulsu
wychwytują problemy szybciej, ale grożą płytszymi, bardziej zaszumionymi
danymi i zmęczeniem respondentów, jeśli się je nadużywa. Rozwiąż to
napięcie, prowadząc głębszą, zwalidowaną ankietę co kwartał jako główny
instrument, uzupełnioną częstszym, bardzo krótkim, opcjonalnym sprawdzianem
pulsu (jedno lub dwa pytania) jako wczesnym ostrzeżeniem, bez proszenia za
każdym razem o tę samą głębię zaangażowania.

## Pytania do omówienia z zespołem

1. **Czy używamy zwalidowanego instrumentu ankietowego, czy pytań, które
   sami wymyśliliśmy bez dowodów, że naprawdę mierzą satysfakcję lub
   wypalenie?** Jeśli obecna ankieta powstała doraźnie, rozważ, czy
   adaptacja ustalonego instrumentu, jak Maslach Burnout Inventory, dałaby
   bardziej wiarygodne dane.

2. **Czy możemy uczciwie zagwarantować anonimowość, także w małych
   zespołach, w których wzorce odpowiedzi dałoby się inaczej wywnioskować?**
   Przejdź przez swoje faktyczne narzędzia ankietowe i praktykę agregacji
   i sprawdź, czy zdeterminowany menedżer mógłby w praktyce wywnioskować
   odpowiedzi poszczególnych osób, nawet jeśli polityka mówi, że nie
   powinien.

3. **Czy kiedykolwiek widzieliśmy, jak dane o satysfakcji zapowiadały skok
   rotacji pracowników albo problem z jakością, który pojawił się później
   w innych metrykach?** Porównaj historię ankiet z danymi o rotacji i
   incydentach i sprawdź, czy z perspektywy czasu widać wzorzec wskaźnika
   wyprzedzającego. Jeśli nigdy tego nie sprawdzaliście, to samo w sobie
   warto omówić.

4. **Czy w ankiecie odróżniamy ogólną satysfakcję od konkretnego ryzyka
   wypalenia, czy polegamy na jednym zlanym pytaniu?** Zespół może wyglądać
   dobrze pod względem ogólnej satysfakcji, a pod spodem pokazywać realne
   oznaki wypalenia. Sprawdź, czy obecny instrument faktycznie potrafi
   wychwycić tę różnicę.

5. **Czy dane o satysfakcji bywały użyte, nawet nieformalnie, do
   porównywania lub szeregowania zespołów?** Taki dryf ku użyciu oceniającemu
   niemal natychmiast psuje instrument ankietowy, bo respondenci zmieniają
   odpowiedzi, gdy podejrzewają konkurencyjne konsekwencje.

6. **Jaki jest nasz faktyczny wskaźnik odpowiedzi i co mówiłby nam sam
   spadek tego wskaźnika?** Malejący wskaźnik odpowiedzi w kolejnych
   ankietach jest sam w sobie sygnałem, często erozji zaufania do procesu
   lub zmęczenia ankietami, i zasługuje na zbadanie, a nie odrzucenie jako
   uciążliwość zbierania danych.

## Perspektywa sektorowa

**Startup.** Przy garstce ludzi formalne anonimowe ankiety mogą wydawać się
zbędne, a bezpośrednia rozmowa często ujawnia problemy z satysfakcją szybciej
niż kwartalny instrument. Ryzyko polega na tym, że założyciel weźmie brak
skarg za brak problemu. Wprowadź choćby lekkie, anonimowe sprawdzanie
nastrojów, gdy zespół urośnie ponad rozmiar, przy którym wszyscy rozmawiają
codziennie.

**Mała firma.** Proste, darmowe lub tanie anonimowe narzędzie ankietowe,
prowadzone co kwartał z krótkim, adaptowanym zestawem zwalidowanych pytań,
jest osiągalne bez dedykowanej funkcji analityki ludzi. Oprzyj się pokusie
pominięcia gwarancji anonimowości dlatego, że zespół jest zżyty. Ta bliskość
jest właśnie tym, co utrudnia bezpośrednie przekazywanie szczerej negatywnej
opinii.

**Duże przedsiębiorstwo.** Infrastruktura ankietowa w tej skali wymaga
realnej inwestycji: porządnego narzędzia firmy trzeciej, polityki agregacji
z minimalną wielkością grupy oraz jasnej, konsekwentnie komunikowanej
polityki zakazu użycia oceniającego. Zwrot jest proporcjonalnie większy,
bo wychwycenie trendu wypalenia w organizacji o dużej liczbie etatów, zanim
wywoła rotację, chroni znacznie większą ilość wiedzy instytucjonalnej.

**Administracja publiczna.** Presja utrzymania ludzi wynikająca z
ograniczeń płacowych sektora publicznego czyni ten wymiar strategicznie
ważnym, a nie opcjonalnym. Dane o dobrostanie mogą bezpośrednio uzasadniać
wnioski budżetowe o niepieniężne inwestycje w utrzymanie ludzi (narzędzia,
chroniony czas, zarządzanie obciążeniem), z którymi same ograniczenia
płacowe sobie nie poradzą, pod warunkiem że samo zbieranie danych jest na
tyle wiarygodne, by móc się na nie z przekonaniem powoływać.

## Przykłady

**Przedsiębiorstwo.** Zespół platformowy firmy od infrastruktury chmurowej
przez ponad rok miał dobre wyniki ogólnej satysfakcji, podczas gdy pytanie o
wypalenie, adaptowane z podskali wyczerpania emocjonalnego Maslach Burnout
Inventory, pokazywało stały spadek w czterech kolejnych kwartałach.
Kierownictwo, początkowo skłonne zbagatelizować sprawę, bo ogólna satysfakcja
wyglądała dobrze, zbadało ją głębiej po drugim kolejnym kwartale spadku i
stwierdziło, że zespół od niemal roku absorbował niezrównoważone obciążenie
dyżurami (temat 6.3) po zamrożeniu etatów. Przywrócenie odpowiedniej obsady
dyżurów odwróciło trend wypalenia w ciągu dwóch kwartałów, na długo zanim
przekształcił się w skok rotacji, który dane firmy wskazywały jako typowy
skutek takiego wzorca.

**Administracja publiczna.** Stanowa agencja IT, mająca chroniczne trudności
z konkurowaniem płacami z pracodawcami z sektora prywatnego, użyła danych z
ankiety o dobrostanie specjalnie po to, by zbudować uzasadnienie budżetowe
polityki chronionego czasu skupienia zamiast podwyżki, której nie mogła
uzyskać. Ankieta pokazała, że częstość przerwań i obciążenie spotkaniami, a
nie wynagrodzenie, były najsilniejszymi predyktorami zamiaru odejścia wśród
respondentów deklarujących aktywne szukanie pracy. Wynikająca z tego
polityka, blokująca dwa nieprzerwane popołudnia w tygodniu na skupioną pracę
inżynierską, korelowała z mierzalną poprawą zarówno wyników satysfakcji, jak
i dobrowolnego utrzymania ludzi w kolejnym roku, przy ułamku kosztu, jakiego
wymagałaby konkurencyjna podwyżka.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z bezpośredniego mierzenia satysfakcji i dobrostanu to wczesne
ostrzeżenie: organizacja, która wychwyci trend wypalenia pełny rok, zanim
zamieni się w rotację, może interweniować za ułamek kosztu rekrutacji i
wdrożenia następcy, któremu zwykle zajmuje miesiące osiągnięcie pełnej
produktywności, nawet po zatrudnieniu. Dobrowolne odejście doświadczonego
inżyniera kosztuje organizację znacznie więcej niż infrastruktura ankietowa,
która mogła dać ostrzeżenie.

Całkowity koszt posiadania obejmuje narzędzia ankietowe, dyscyplinę
gwarantowania i utrzymywania prawdziwej anonimowości oraz zobowiązanie
organizacji do działania na podstawie tego, co pokazują dane, zamiast
zbierania ich i ignorowania niewygodnych wyników. Ten ostatni koszt,
gotowość do działania, jest często prawdziwym wąskim gardłem, a nie sam
pomiar. Ankieta, która ujawnia problem, którym nikt się nie zajmuje, niszczy
zaufanie do instrumentu równie pewnie jak złamana gwarancja anonimowości.

## Antywzorce i pułapki

- **Doraźne, niezwalidowane pytania ankietowe:** dają dane o niejasnej
  rzetelności.
- **Słabe lub złamane gwarancje anonimowości:** niszczą szczere odpowiedzi
  i zaufanie do instrumentu, często na stałe.
- **Reagowanie na pojedynczy odczyt zamiast śledzenia trendu:** przesadna
  reakcja na szum albo przeoczenie prawdziwego powolnego spadku.
- **Mieszanie ogólnej satysfakcji z pytaniami o wypalenie:** może ukryć
  realny sygnał ostrzegawczy w średniej, która wygląda dobrze.
- **Używanie danych o satysfakcji do szeregowania lub porównywania
  zespołów:** dryf ku użyciu oceniającemu, który psuje szczere odpowiedzi.
- **Zbieranie danych bez działania w sprawie niewygodnego wyniku:** niszczy
  zaufanie do ankiety równie dokładnie jak złamana obietnica anonimowości.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Satysfakcji i dobrostanu nie mierzy się wcale albo
  tylko w nieformalnej, nieustrukturyzowanej rozmowie.
- **Poziom 2, Rozwój:** Istnieje doraźna ankieta, ale brakuje jej walidacji,
  stałego rytmu lub silnej gwarancji anonimowości.
- **Poziom 3, Standaryzacja:** Zwalidowany lub adaptowany instrument
  ankietowy działa w stałym rytmie z silną, komunikowaną gwarancją
  anonimowości, w całej organizacji.
- **Poziom 4, Zarządzanie:** Trendy są aktywnie śledzone w kolejnych cyklach,
  sygnały dotyczące wypalenia są odróżniane od ogólnej satysfakcji, a
  organizacja ma udokumentowany proces działania na sygnały ostrzegawcze.
- **Poziom 5, Orkiestracja:** Dane o dobrostanie bezpośrednio wpływają na
  planowanie kadr i inwestycje w utrzymanie ludzi, ostrożnie potwierdzane
  sygnałami obiektywnymi, a organizacja potrafi wskazać konkretne
  interwencje, które odwróciły zmierzony spadek, zanim stał się rotacją lub
  problemem z jakością.

## Pomysły do dyskusji

1. Czy nasz obecny instrument ankietowy wytrzymałby test na prawdziwą anonimowość?
2. Czy trend satysfakcji lub wypalenia kiedykolwiek przewidział problem, który później pojawił się gdzie indziej?
3. Jaki jest nasz proces działania na wynik ankiety, którego nie chcemy usłyszeć?
4. Czy w naszym pomiarze odróżniamy dziś ryzyko wypalenia od ogólnej satysfakcji?
5. Jaką niepieniężną inwestycję nasze dane o dobrostanie uzasadniałyby dziś najlepiej?

## Kluczowe wnioski

- O satysfakcję i dobrostan trzeba **zapytać bezpośrednio**. Żadna
  telemetria systemowa nie zaobserwuje tego wymiaru.
- Używaj **zwalidowanego instrumentu**, gdy to możliwe, i gwarantuj prawdziwą,
  dobrze komunikowaną **anonimowość**.
- Ten wymiar jest **wskaźnikiem wyprzedzającym** rotacji pracowników i
  problemów z jakością, które inaczej ujawniłyby się znacznie później i
  drożej.
- Odróżniaj **ogólną satysfakcję od konkretnego ryzyka wypalenia** i śledź
  **trend w czasie**, a nie pojedynczy odczyt.
- Nigdy nie używaj tych danych do **szeregowania ani porównywania zespołów**.
  Ten dryf niemal natychmiast psuje szczere odpowiedzi.

## Bibliografia i dalsza lektura

- Maslach, Christina, i Susan E. Jackson, *Maslach Burnout Inventory*
  (zwalidowany, szeroko stosowany instrument pomiaru wypalenia w trzech
  wymiarach).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck i Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (badania nad motywacją i satysfakcją istotne dla projektowania ankiet).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach i Michael P. Leiter (organizacyjne przyczyny
  wypalenia i interwencje).
