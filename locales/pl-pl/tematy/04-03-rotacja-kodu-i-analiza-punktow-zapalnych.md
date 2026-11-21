# 4.3 Rotacja kodu i analiza punktów zapalnych

## Przegląd i motywacja

**Rotacja kodu** (ang. code churn) mierzy, jak często plik lub moduł zmienia
się w czasie: linie dodane, zmodyfikowane i usunięte w kolejnych commitach.
Sama w sobie rotacja to dość słaby sygnał: niektóre pliki zmieniają się
często, bo są w aktywnym, zdrowym rozwoju, a inne rzadko, bo są stabilne i
poprawne, a nie zaniedbane. Prawdziwa moc diagnostyczna podejścia tego tematu
bierze się z połączenia rotacji ze złożonością (temat 4.1): plik, który jest
zarówno często zmieniany, jak i bardzo złożony, czyli **punkt zapalny**
(ang. hotspot), jest nieproporcjonalnie często źródłem defektów i hamulcem
dla tempa zespołu, a badania empiryczne konsekwentnie to potwierdzają w
wielu bazach kodu i organizacjach.

**Analiza punktów zapalnych**, spopularyzowana pracami Adama Tornhilla nad
analityką oprogramowania, jest szczególnie cenna, bo do znalezienia swoich
celów nie wymaga ręcznego przeglądu ani subiektywnego osądu. Historia
[kontroli wersji](https://en.wikipedia.org/wiki/Version_control) już zawiera
wszystko, co potrzebne do obliczenia rotacji i, w połączeniu z narzędziami
analizy statycznej, złożoności, automatycznie dla każdego pliku w bazie kodu.
Pozwala to zespołowi lub organizacji zidentyfikować, na podstawie realnych
dowodów, a nie anegdoty czy najgłośniejszej skargi na retrospektywie, który
dokładnie niewielki ułamek bazy kodu zasługuje na uwagę refaktoryzacji w
pierwszej kolejności.

W dużych zespołach analiza punktów zapalnych rozwiązuje prawdziwy problem
alokacji: baza kodu z setkami tysięcy linii ma znacznie więcej kodu, niż
jakikolwiek zespół może sobie pozwolić zrefaktoryzować kompleksowo, a
intuicja co do tego, gdzie żyją najgorsze problemy, bywa często błędna,
skrzywiona przez to, kto narzekał ostatnio albo który plik akurat nie podoba
się starszemu inżynierowi. Duże przedsiębiorstwa i administracja publiczna
zarządzające dużymi, długowiecznymi bazami kodu polegają na tej opartej na
danych priorytetyzacji, by skierować naprawdę skąpy budżet refaktoryzacji ku
kodowi, który da największy zwrot.

## Kluczowe zasady

- **Sama rotacja to słaby sygnał, rotacja połączona ze złożonością jest
  silna.** To połączenie, a nie którakolwiek metryka osobno, identyfikuje
  prawdziwy punkt zapalny.
- **Analiza punktów zapalnych nie wymaga ręcznego przeglądu.** Historia
  kontroli wersji już zawiera wszystko, co potrzebne do automatycznego jej
  obliczenia.
- **Punkt zapalny to sygnał priorytetyzacji, a nie automatyczny wyrok.**
  Nadal potrzebny jest ludzki osąd, by zdecydować, jakiego działania wymaga
  konkretny punkt zapalny.
- **Częsta zmiana nie jest z natury zła.** Część rotacji odzwierciedla zdrowy,
  aktywny rozwój, a nie problem jakości.
- **Ta analiza skaluje się tam, gdzie zawodzi intuicja:** w dużych bazach
  kodu zbyt wielkich, by jakakolwiek osoba mogła je ogarnąć i priorytetyzować
  na wyczucie.

## Rekomendacje

### Obliczaj rotację i złożoność razem i szereguj według ich połączenia

Wyciągnij częstość zmian na plik z historii kontroli wersji w istotnym oknie,
zwykle od sześciu miesięcy do roku, i zestaw ją z miarą złożoności (temat 4.1)
dla tych samych plików. Szereguj pliki według połączenia, zwykle iloczynu
rotacji i złożoności, a nie według którejkolwiek metryki osobno, bo to
połączenie badania konsekwentnie wiążą z podwyższonym odsetkiem defektów i
kosztem utrzymania.

### Zbadaj najważniejsze punkty zapalne ludzkim osądem, zanim zadziałasz

Uszeregowana lista punktów zapalnych wskazuje kandydatów do uwagi, a nie
automatyczną listę działań. Dla każdego z najważniejszych punktów zapalnych
zbadaj ludzkim okiem: czy to naprawdę źle zaprojektowany kod wymagający
refaktoryzacji, czy plik, który zasadnie wymaga częstych zmian, bo leży w
centrum aktywnej, rozwijającej się logiki biznesowej, a wtedy priorytetem
mogą być lepsze testy lub jaśniejsza dokumentacja, a nie strukturalne
przepisanie. To odpowiada rozróżnieniu złożoności istotnej i przypadkowej z
tematu 4.1, zastosowanemu tu do połączonego sygnału rotacji i złożoności.

### Zestawiaj punkty zapalne z danymi o incydentach i defektach

Tam, gdzie to możliwe, sprawdź, czy zidentyfikowane punkty zapalne korelują z
faktycznymi incydentami produkcyjnymi (temat 6.2) lub danymi o defektach,
które uciekły na produkcję (temat 5.1). Silna korelacja waliduje analizę
punktów zapalnych jako naprawdę predykcyjną dla twojej konkretnej bazy kodu
i wzmacnia uzasadnienie biznesowe działania. Słaba lub nieobecna korelacja
sugeruje albo problem z jakością danych, albo że rotacja i złożoność nie są,
w twoim konkretnym kontekście, właściwym połączeniem sygnałów do
priorytetyzacji.

### Śledź trend punktów zapalnych w kolejnych analizach, a nie tylko jedną migawkę

Okresowo powtarzaj analizę punktów zapalnych, kwartalnie jest częste, i
śledź, czy wcześniej zidentyfikowane punkty zapalne się poprawiają,
pogarszają lub zostały rozwiązane, i czy pojawiają się nowe. Punkt zapalny,
który utrzymuje się przez wiele cykli analizy mimo wielokrotnego oflagowania,
wskazuje albo że wysiłek naprawczy faktycznie nie został podjęty, albo że
poprzednia próba naprawy nie dotknęła prawdziwego leżącego u podstaw problemu.

### Używaj danych o punktach zapalnych, by informować rozmowy o priorytetach w zespole, a nie ich zastępować

Przedstawiaj analizę punktów zapalnych jako dowód w dyskusji o priorytetach,
a nie jako automatyczny mandat, który przesłania własny, kontekstowy osąd
zespołu co do tego, co teraz liczy się najbardziej. Zespół może mieć dobre,
zasadne powody, by tymczasowo obniżyć priorytet znanego punktu zapalnego,
na przykład planowane przepisanie sprawia, że przyrostowa refaktoryzacja
byłaby zmarnowanym wysiłkiem, a analiza powinna informować tę rozmowę, a nie
jej zastępować.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Priorytetyzacja oparta na intuicji | Szybka, bez narzędzi, wykorzystuje kontekstową wiedzę zespołu | Skrzywiona przez świeżość, osobiste preferencje i tego, kto narzeka najgłośniej |
| Sama rotacja | Prosta do obliczenia | Słaby sygnał sama w sobie; częsta zmiana nie jest z natury zła |
| Rotacja połączona ze złożonością (analiza punktów zapalnych) | Silna, oparta na dowodach, automatyczna z istniejących danych | Wymaga połączenia dwóch źródeł danych i interpretowania wyników z osądem |
| Analiza punktów zapalnych zestawiona z danymi o incydentach | Zwalidowana, najsilniejszy dowód do priorytetyzacji | Wymaga niezawodnego powiązania incydentów z kodem, którego nie każda organizacja ma |

Główne napięcie to **dowody kontra kontekst**. Analiza punktów zapalnych daje
obiektywne, skalowalne dowody, których priorytetyzacja oparta na intuicji nie
dorówna w rozmiarze dużej, nieznanej lub długowiecznej bazy kodu, ale brakuje
jej kontekstowego osądu, jaki zespół ma co do tego, dlaczego dany punkt
zapalny ma znaczenie albo nie ma go teraz. Rozwiąż to napięcie, traktując
analizę punktów zapalnych jako bazę dowodową rozmowy o priorytetach,
połączoną z własnym, kontekstowym osądem zespołu co do czasu i kompromisów,
nigdy jej nie zastępującą.

## Pytania do omówienia z zespołem

1. **Jakie są nasze pięć najważniejszych punktów zapalnych, uszeregowanych
   według rotacji i złożoności łącznie, i czy ten ranking odpowiadałby
   intuicji zespołu co do tego, gdzie żyją nasze najgorsze problemy?**
   Przeprowadź analizę i porównaj wynik z tym, co zespół by zgadł przed
   zobaczeniem danych. Rozbieżności są często najcenniejszym odkryciem.

2. **Czy zidentyfikowane punkty zapalne korelują z faktycznymi incydentami
   produkcyjnymi lub danymi o uciekających defektach?** Jeśli masz dane, by to
   sprawdzić, zrób to bezpośrednio. Jeśli nie, tę lukę samą warto nazwać jako
   coś, ku czemu trzeba zmierzać.

3. **Czy w przypadku naszego najważniejszego punktu zapalnego problem leży w
   złożoności istotnej, która zasadnie wymaga częstych zmian, czy w
   przypadkowej, którą refaktoryzacja mogłaby naprawdę naprawić?** Przejdźcie
   razem przez plik i wydajcie ten osąd jawnie, zamiast zakładać którąkolwiek
   odpowiedź.

4. **Czy wcześniej zidentyfikowany punkt zapalny utrzymywał się przez wiele
   cykli analizy mimo oflagowania?** Jeśli tak, zbadaj uczciwie dlaczego:
   naprawy nigdy faktycznie nie podjęto albo poprzednia próba nie dotknęła
   prawdziwej przyczyny źródłowej.

5. **Czy obecnie priorytetyzujemy pracę refaktoryzacyjną na podstawie
   dowodów, czy tego, kto narzekał ostatnio lub najgłośniej?** Bądź szczery co
   do faktycznego obecnego procesu priorytetyzacji w zespole i tego, jak ma się
   do tego, co zasugerowałaby oparta na dowodach analiza punktów zapalnych.

6. **Ile by nas kosztowało, w odsetku defektów lub spowolnieniu dostarczania,
   zostawienie naszego najważniejszego punktu zapalnego bez zajęcia się nim
   przez kolejny rok?** To pytanie wymusza konkretne oszacowanie kosztu, które
   może zakotwiczyć decyzję priorytetyzacyjną, zamiast zostawiać punkt zapalny
   jako abstrakcyjną, łatwą do zepchnięcia na dalszy plan troskę.

## Perspektywa sektorowa

**Startup.** Formalna analiza punktów zapalnych jest zwykle zbędna przy małej,
młodej bazie kodu, którą cały zespół nadal wspólnie trzyma w głowach.
Technika staje się cenna dopiero wtedy, gdy baza kodu wyrośnie ponad rozmiar,
przy którym jakakolwiek osoba może niezawodnie wskazać najgorsze obszary z
samej pamięci, często gdzieś w pierwszym lub drugim roku trwałego wzrostu.

**Mała firma.** Darmowe lub tanie narzędzia mogą wyciągnąć dane o rotacji
wprost z istniejącej historii kontroli wersji przy minimalnej konfiguracji.
Połącz je z danymi o złożoności, które już raportuje twój linter lub narzędzie
analizy statycznej, zamiast inwestować w dedykowane komercyjne oprogramowanie
do analizy punktów zapalnych w tej skali.

**Duże przedsiębiorstwo.** Tu analiza punktów zapalnych daje największy
zwrot z priorytetyzacji opartej na dowodach, bo intuicja naprawdę zawodzi w
skali bazy kodu obejmującej setki usług i tysiące plików. Zainwestuj w
regularne uruchamianie tej analizy w całej bazie kodu i zestawianie jej z
danymi o incydentach, by zbudować zwalidowane, obronne uzasadnienie
inwestycji w refaktoryzację.

**Administracja publiczna.** Długowieczne systemy, czasem sprzed dekad, są
naturalnym polem dla analizy punktów zapalnych, bo nagromadzona historia
kontroli wersji daje bogaty, długoterminowy sygnał o tym, które części
systemu z czasem naprawdę okazały się kłopotliwe. To podejście oparte na
dowodach jest też przekonującym, konkretnym narzędziem do uzasadniania
inwestycji w modernizację wobec interesariuszy, którzy do zatwierdzenia
finansowania potrzebują czegoś więcej niż nieformalnej opinii inżyniera.

## Przykłady

**Przedsiębiorstwo.** Platforma obsługi roszczeń firmy ubezpieczeniowej,
obejmująca ponad dwa miliony linii kodu w dziesiątkach usług, przez lata
kumulowała nieformalne skargi na "moduł walidacji roszczeń" jako kłopotliwy,
ale z tych skarg nigdy nie wynikła żadna formalna priorytetyzacja. Analiza
punktów zapalnych łącząca sześć miesięcy danych o rotacji z wynikami
złożoności wskazała jako faktyczny najważniejszy punkt zapalny zupełnie inny
plik, wspólne narzędzie do przeliczania walut, zakopane głęboko w rzadko
omawianej zależności, które nigdy nie pojawiło się w żadnej skardze na
retrospektywie. Zestawienie z danymi o incydentach potwierdziło, że to
narzędzie było zamieszane w nieproporcjonalną część defektów obliczeń
finansowych w poprzednim roku, a celowana refaktoryzacja tego konkretnego
narzędzia, a nie modułu, który wszyscy nieformalnie obwiniali, dała
mierzalne zmniejszenie liczby powiązanych incydentów w następnym kwartale.

**Administracja publiczna.** System wydawania praw jazdy stanowej agencji
komunikacji, sprzed dekad, przeszedł analizę punktów zapalnych w ramach
uzasadnienia biznesowego modernizacji. Analiza zidentyfikowała niewielką grupę
plików, stanowiącą poniżej 3% całej bazy kodu, odpowiedzialną za
nieproporcjonalną część zarówno rotacji, jak i złożoności, a zestawienie z
dziennikiem incydentów agencji pokazało, że ta sama grupa odpowiadała za
niemal 40% wszystkich zgłoszonych defektów systemu w ciągu poprzednich trzech
lat. To konkretne, oparte na dowodach ustalenie, znacznie bardziej
przekonujące niż ogólne twierdzenie, że "system jest stary i wymaga
modernizacji", stało się osią udanego wniosku budżetowego o celowany,
przyrostowy wysiłek modernizacyjny skupiony właśnie na tej grupie, zamiast
znacznie droższej pełnej wymiany systemu.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z analizy punktów zapalnych to celowana inwestycja oparta na dowodach:
oba przykłady powyżej pokazują przypadek, w którym formalna analiza
przekierowała uwagę refaktoryzacji z miejsca, na którym skupiła ją
nieformalna skarga, ku miejscu, gdzie dane faktycznie pokazały, że żyje
problem, dając mierzalnie lepszy zwrot niż niecelowana lub oparta na intuicji
inwestycja.

Całkowity koszt posiadania jest niski, bo dane o rotacji pochodzą wprost z
istniejącej historii kontroli wersji, a dane o złożoności są zwykle już
dostępne z narzędzi analizy statycznej (temat 4.4). Główną inwestycją jest
okresowy wysiłek analizy i czas ludzkiego osądu na interpretację wyników i
decyzję, jakiego działania wymaga każdy zidentyfikowany punkt zapalny.

## Antywzorce i pułapki

- **Używanie samej rotacji bez złożoności:** słaby sygnał sam w sobie, który
  może oflagować zdrowy, aktywnie rozwijany kod jako fałszywy alarm.
- **Traktowanie rankingu punktów zapalnych jako automatycznej listy działań
  bez ludzkiego osądu:** pomija rozróżnienie istotne-kontra-przypadkowe, które
  określa właściwą reakcję.
- **Priorytetyzowanie refaktoryzacji według najgłośniejszej skargi zamiast
  dowodów:** często kieruje wysiłek z dala od miejsca, w którym dane
  faktycznie pokazują problem.
- **Nigdy nie zestawianie punktów zapalnych z danymi o incydentach lub
  defektach:** pomija krok walidacji, który wzmacnia uzasadnienie działania na
  podstawie analizy.
- **Jednorazowe uruchomienie analizy bez powtarzania:** nie pokazuje, czy
  wysiłek naprawczy faktycznie działa w czasie.
- **Ignorowanie uporczywie oflagowanego punktu zapalnego bez badania, dlaczego
  naprawa się nie utrzymała:** marnuje wartość diagnostyczną powtarzanej
  analizy.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Priorytety refaktoryzacji ustala się intuicją lub
  liczbą skarg, bez danych o rotacji czy złożoności wpływających na decyzję.
- **Poziom 2, Rozwój:** Niektóre zespoły nieformalnie sprawdzają dane o
  rotacji lub złożoności, ale brakuje spójnej, ogólnoorganizacyjnej praktyki
  analizy punktów zapalnych.
- **Poziom 3, Standaryzacja:** Analiza punktów zapalnych łącząca rotację i
  złożoność działa regularnie i spójnie wpływa na priorytetyzację
  refaktoryzacji w całej organizacji.
- **Poziom 4, Zarządzanie:** Punkty zapalne są zestawiane z danymi o
  incydentach i defektach w celu walidacji analizy, a trend w kolejnych
  cyklach jest aktywnie śledzony.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne,
  mierzalne poprawy odsetka defektów lub dostarczania wynikające z
  inwestycji w refaktoryzację opartej na punktach zapalnych, a analiza jest
  rutynowym, zaufanym wejściem do decyzji inwestycyjnych w inżynierii.

## Pomysły do dyskusji

1. Jak wyglądałaby nasza lista najważniejszych punktów zapalnych, gdybyśmy przeprowadzili tę analizę dziś?
2. Czy ta lista zgadzałaby się z obecnym nieformalnym wyczuciem zespołu co do naszych najgorszych obszarów problemowych, czy by mu przeczyła?
3. Czy mamy dane, by zestawić punkty zapalne z faktycznymi incydentami?
4. Czy znany obszar problemowy się utrzymał mimo wcześniejszych prób naprawy i dlaczego?
5. Ile by nas kosztowało zostawienie naszego najważniejszego punktu zapalnego bez zajęcia się nim przez kolejny rok?

## Kluczowe wnioski

- **Rotacja połączona ze złożonością** identyfikuje prawdziwe punkty zapalne
  znacznie niezawodniej niż którakolwiek metryka osobno.
- Analiza punktów zapalnych **nie wymaga ręcznego przeglądu**. Da się ją
  obliczyć automatycznie z istniejących danych z kontroli wersji i analizy
  statycznej.
- Traktuj ranking punktów zapalnych jako **dowód do priorytetyzacji**, a nie
  automatyczny wyrok. Nadal wymagany jest ludzki osąd.
- **Zestawiaj punkty zapalne z danymi o incydentach i defektach**, by
  zwalidować analizę i wzmocnić uzasadnienie działania.
- Śledź punkty zapalne **w kolejnych cyklach analizy**, by potwierdzić, że
  naprawa faktycznie działa, a nie tylko jednorazową migawkę.

## Bibliografia i dalsza lektura

- *Your Code as a Crime Scene*, Adam Tornhill (podstawowy tekst o analizie
  punktów zapalnych łączącej rotację i złożoność z danych kontroli wersji).
- *Software Design X-Rays*, Adam Tornhill (dalsze techniki behawioralnej
  analizy kodu z użyciem historii kontroli wersji).
- Nagappan, Nachiappan, i Thomas Ball, "Use of Relative Code Churn
  Measures to Predict System Defect Density," *ICSE* (2005): badania
  empiryczne nad związkiem między rotacją a gęstością defektów.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (techniki zaradzania złożoności przypadkowej po jej zidentyfikowaniu).
