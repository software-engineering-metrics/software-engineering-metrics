# 1.3 Rezultaty ponad produkcję: wybór tego, co mierzyć

## Przegląd i motywacja

Każda metryka inżynierska należy do jednej z trzech kategorii, a mylenie ich
jest drugim najczęstszym trybem porażki w tej książce, zaraz po całkowitym
ignorowaniu [prawa Goodharta](https://en.wikipedia.org/wiki/Goodhart%27s_law).
**Metryka nakładu** mierzy włożony wysiłek: godziny inżynierów, wydane dolary,
zobowiązane punkty historii. **Metryka produkcji** mierzy to, co system
wytworzył: dostarczone funkcje, scalone pull requesty, zamknięte zgłoszenia.
**Metryka rezultatu** mierzy zmianę, która faktycznie miała znaczenie:
utrzymany przychód, uniknięte incydenty, czas zaoszczędzony użytkownikowi.
Zespoły grawitują ku nakładom i produkcji, bo łatwo je zliczyć i leżą w pełni w
zasięgu kontroli zespołu. Wartość prawie zawsze mieszka w rezultatach, które
pojawiają się wolniej, trudniej je zmierzyć i trudniej przypisać pracy
jakiegokolwiek jednego zespołu.

Ten temat dotyczy świadomego oparcia się tej grawitacji. Panel zbudowany
wyłącznie z nakładów i produkcji może wyglądać imponująco pracowicie, nie
wytwarzając żadnej realnej wartości: zespół może dostarczyć dziesiątki funkcji,
których nikt nie używa, zamknąć setki zgłoszeń, które wracają tydzień później,
albo trafić w każdą estymatę punktów historii, podczas gdy faktyczne rezultaty
produktu, retencja, satysfakcja, przychód, stoją w miejscu lub spadają. Nic z
tej krzątaniny nie pojawia się jako problem na panelu opartym wyłącznie na
produkcji, bo takie panele nie są zbudowane, by to widzieć.

W skali przedsiębiorstwa i administracji ta różnica decyduje o tym, czy
kierownictwo odróżni zespół produktywny od zespołu po prostu aktywnego. Pion
może przez lata pokazywać znakomite liczby produkcji, dostarczone funkcje,
zamknięte sprinty, podczas gdy rezultat, na którym naprawdę zależy
finansującemu lub parlamentowi, utrzymany przychód, skrócone czasy
oczekiwania obywateli, po cichu eroduje pod spodem. "Dostarczyliśmy mapę
drogową" to nie to samo twierdzenie co "mapa drogowa poprawiła sytuację", a
odróżnić je potrafi tylko zestaw metryk z wagą na rezultatach.

## Kluczowe zasady

- **Nakłady i produkcja są wskaźnikami zastępczymi; rezultaty są samą rzeczą.**
  Przesuwaj wagę zestawu metryk ku rezultatom wszędzie, gdzie możesz do nich
  sięgnąć.
- **Łatwość pomiaru nie jest powodem, by coś mierzyć.** Rzeczy najłatwiejsze do
  zliczenia to zwykle nakłady i produkcja, nie dlatego, że mają największe
  znaczenie, ale dlatego, że są mechanicznie proste do uchwycenia.
- **Przypisanie robi się trudniejsze w miarę przesuwania ku rezultatom.**
  Zaakceptuj ten kompromis świadomie, zamiast wycofywać się do produkcji,
  bo rezultaty trudniej przypisać.
- **Zespół może kontrolować nakłady i produkcję, ale tylko wpływać na
  rezultaty.** Projektuj rozliczalność odpowiednio: rozliczaj zespoły z tego,
  co faktycznie mogą kontrolować, a rezultaty śledź jako wspólne sygnały
  ponad zespołami.
- **Jeden rezultat-gwiazda polarna z małym zestawem czynników bije ścianę
  kafli produkcji.** Pokrycie powinno wynikać ze struktury, a nie z samej
  objętości panelu.

## Rekomendacje

### Klasyfikuj każdą metrykę, zanim ją przyjmiesz

Dla każdej kandydującej metryki zapytaj, do której z trzech kategorii należy.
"Pull requesty scalone tygodniowo" to produkcja. "Odsetek scalonych pull
requestów, które w ciągu tygodnia spowodowały incydent produkcyjny" jest bliżej
rezultatu, bo mierzy konsekwencję, a nie wolumen. Ta klasyfikacja zajmuje
trzydzieści sekund i powinna być obowiązkowa, zanim metryka trafi na jakikolwiek
panel zespołowy lub organizacyjny, bo to najszybszy sposób na wychwycenie
panelu, który po cichu wypełnia się łatwymi do zliczenia produktami, wierząc, że
mierzy wartość.

### Zbuduj drzewo metryk pod jednym rezultatem

Nie śledź płaskiej listy. Ułóż metryki jako **drzewo metryk** (zwane czasem
drzewem KPI): najwyższa metryka rezultatu rozbita na czynniki, które
przyczynowo lub matematycznie ją zasilają, aż do operacyjnych miar produkcji i
nakładu, których właścicielami są poszczególne zespoły. Gdy najwyższy rezultat
się rusza, drzewo mówi, który czynnik niższego poziomu zbadać, zamieniając
"liczba spadła" w "ten konkretny krok potoku jest przyczyną". Nazwij jedną
**metrykę-gwiazdę polarną** na szczycie wszędzie tam, gdzie twoja dziedzina ją
wspiera: miarę, która najlepiej oddaje dostarczoną wartość, częstotliwość
wdrożeń sparowaną z odsetkiem nieudanych zmian dla zespołu platformowego albo
tygodniowe aktywne użycie kluczowej funkcji dla zespołu produktowego.

### Waż rezultaty w przeglądach, nie tylko na panelu

Drzewo metryk jest tyle warte, ile jego użycie w praktyce. W przeglądach
sprintu, kwartalnych przeglądach biznesowych i aktualizacjach dla kierownictwa
zaczynaj od liczby na poziomie rezultatu i używaj metryk produkcji i nakładu pod
nią tylko do wyjaśnienia zmiany, a nie do jej zastąpienia. Zespół, który
raportuje "zamknęliśmy w tym sprincie 40 zgłoszeń" bez żadnego kontekstu
rezultatu, nie powiedział ci nic o tym, czy praca miała znaczenie; zespół, który
raportuje "uciekające defekty spadły o 30%, a oto inwestycja w testowanie,
która to sprawiła", powiedział ci coś realnego.

### Zaakceptuj wolniejsze sprzężenie zwrotne dla metryk rezultatu i paruj je z szybszymi wskaźnikami wyprzedzającymi

Metryki rezultatu są często opóźnione: potwierdzają wynik, gdy upłynie dość
czasu, by mieć pewność. To opóźnienie jest realnym kosztem, bo opóźnia
uczenie się. Paruj każdą metrykę rezultatu z co najmniej jednym wskaźnikiem
wyprzedzającym, czyli metryką, która porusza się wcześniej i przewiduje
rezultat, by zespół mógł sterować, zanim wolna, miarodajna liczba w końcu
wyląduje. Częstotliwość wdrożeń jest wskaźnikiem wyprzedzającym rezultatów
dostarczania; rosnący trend uciekania defektów jest wskaźnikiem wyprzedzającym
nadchodzącego rezultatu niezawodności. Używaj wskaźników wyprzedzających, by
działać wcześnie, a opóźnionych metryk rezultatu, by potwierdzić, że miałeś
rację.

## Kompromisy: zalety i wady

| Kategoria | Zalety | Wady |
| --- | --- | --- |
| Metryki nakładu | W pełni pod kontrolą zespołu, łatwe do zliczenia | Najsłabsze powiązanie z faktyczną wartością; łatwe do manipulowania wolumenem |
| Metryki produkcji | Łatwe do zliczenia, jasna własność, szybkie sprzężenie zwrotne | Nagradzają aktywność ponad wpływ; mogą rosnąć, gdy wartość spada |
| Metryki rezultatu | Bezpośrednio odzwierciedlają to, co ważne; trudne do taniego manipulowania | Wolne, zaszumione i trudne do przypisania jednemu zespołowi |
| Struktura drzewa metryk | Łączy codzienną pracę z wartością strategiczną; pomaga w diagnozie | Wymaga realnej pracy analitycznej, by zbudować i utrzymać poprawnie |

Centralne napięcie to **kontrolowalność kontra wartość**. Nakłady i produkcja
są w pełni w zasięgu kontroli zespołu, co czyni je kuszącymi do rozliczania
zespołów; rezultaty niosą wartość, ale tylko częściowo leżą w zasięgu wpływu
jakiegokolwiek zespołu, bo dobra funkcja nadal może zawieść z powodów całkowicie
spoza inżynierii. Rozwiąż to, rozliczając zespoły z nakładów i produkcji, które w
pełni kontrolują, a rezultaty śledząc jako wspólne sygnały, których właścicielem
jest razem cała organizacja, połączone jawnym drzewem metryk, zamiast
zostawiać niewyjaśnioną lukę między "wykonaliśmy pracę" a "czy pomogła".

## Pytania do omówienia z zespołem

1. **Czy każda metryka na naszym obecnym panelu jest nakładem, produkcją czy
   rezultatem i czy równowaga między tymi trzema opowiada uczciwą historię?**
   Większość paneli, zbadana uczciwie, okazuje się niemal wyłącznie nakładami i
   produkcją, bo tyle raportują domyślnie narzędzia. Sklasyfikuj każdy kafel i
   policz podział; panel bez żadnego kafla rezultatu mierzy aktywność i
   przedstawia ją jako wydajność.

2. **Jaka jest nasza jedna metryka rezultatu typu gwiazda polarna i czy
   możemy ją wyśledzić w dół przez drzewo metryk do czegoś, czego
   faktycznie właścicielem jest każdy zespół?** Bez tej struktury łączącej
   poruszająca się liczba na szczycie nie daje pojęcia, gdzie patrzeć, a
   zespoły nie widzą, jak ich codzienne metryki produkcji łączą się z czymkolwiek
   istotnym. Przynieś swoją obecną metrykę szczytową, jeśli ją masz, i spróbuj
   zbudować drzewo na żywo.

3. **Gdzie rozliczamy zespół z rezultatu, na który może tylko wpływać, a nie go
   kontrolować?** To częste źródło frustracji i cichego manipulowania, bo
   zespół karany za rezultat kształtowany przez czynniki poza jego kontrolą ma
   wszelkie powody, by chronić siebie zamiast poprawiać realny system.
   Zidentyfikuj te niedopasowania i albo dostosuj rozliczalność, albo dodaj
   brakujące dźwignie.

4. **Jaki wskaźnik wyprzedzający mamy dla każdej z naszych opóźnionych metryk
   rezultatu i z jakim wyprzedzeniem je przewiduje?** Zestaw wyłącznie
   opóźniony oznacza, że dowiadujesz się o pomyłce, gdy jest już za późno, by
   tanio zmienić kurs. Przynieś swoje metryki rezultatu i sprawdź, czy dla
   każdej istnieje prawdziwy wskaźnik wyprzedzający, czy lecisz na ślepo
   między okresami raportowania.

5. **Ile z tego, co świętujemy na przeglądach i retrospektywach, to produkcja
   ("dostarczyliśmy X"), a ile rezultat ("X zmieniło Y na lepsze")?** Język, jakim
   zespoły świętują pracę, kształtuje z czasem to, pod co optymalizują, często
   mocniej niż panel. Posłuchaj własnych spotkań przeglądowych przez jeden
   sprint i uczciwie policz podział.

6. **Gdyby nasze główne metryki produkcji z dnia na dzień się podwoiły, czy
   nasze metryki rezultatu koniecznie by się poprawiły, czy mogłyby się
   pogorszyć?** Ten eksperyment myślowy odsłania metryki produkcji, które
   odłączyły się od rezultatów, którym miały służyć, a nawet im się
   przeciwstawiły, jak wolumen funkcji, który zwiększa obciążenie
   utrzymaniowe szybciej, niż zwiększa adopcję.

## Perspektywa sektorowa

**Startup.** Wybierz jeden rezultat, zwykle wskaźnik zastępczy tego, czy klienci
nadal czerpią wartość, jak tygodniowa retencja czy aktywacja, i traktuj go jak
gwiazdę polarną od pierwszego dnia. Oprzyj się ciągowi ku metrykom próżności
dotyczącym produkcji, jak skumulowana liczba funkcji, które kuszą do
raportowania inwestorom, ale nie mówią nic o tym, czy produkt faktycznie komuś
działa.

**Mała firma.** Twoje obecne narzędzia, kasa, centrum wsparcia, analityka,
zwykle już raportują liczbę zbliżoną do rezultatu, odsetek ponownych zakupów,
odsetek ponownie otwartych zgłoszeń. Używaj ich zamiast budować własną
instrumentację rezultatów, której nie masz zdolności utrzymać, i oprzyj się
pokusie powrotu do surowych liczb aktywności tylko dlatego, że są widokiem
domyślnym.

**Duże przedsiębiorstwo.** Dominującym trybem porażki jest portfel zespołów,
z których każdy optymalizuje lokalne metryki produkcji, które nie składają się w
żaden spójny rezultat organizacyjny. Zbuduj drzewo metryk celowo, ujednolić
definicje rezultatów w jednostkach biznesowych i wymagaj, by każda większa
inicjatywa przed finansowaniem podawała hipotezę rezultatu, a nie tylko plan
produkcji.

**Administracja publiczna.** Organy nadzoru i opinia publiczna coraz lepiej
rozumieją różnicę między "zrealizowaliśmy opis przedmiotu zamówienia" a
"poprawiliśmy rezultat", a raport oparty wyłącznie na produkcji zaprasza
dokładnie taką kontrolę. Definiuj sukces jako rezultat widoczny dla obywatela
(czas oczekiwania, odsetek błędów, satysfakcja) wszędzie, gdzie prawnie i
praktycznie to możliwe, i mów jawnie, gdy dostępna jest tylko metryka produkcji
i dlaczego.

## Przykłady

**Przedsiębiorstwo.** Pion inżynierii firmy logistycznej przez dwa lata
raportował stale rosnącą liczbę "funkcji dostarczonych na kwartał", podczas gdy
kluczowy wskaźnik satysfakcji klientów firmy po cichu się spłaszczał. Nowy wiceprezes ds.
inżynierii zbudował drzewo metryk zakorzenione w wskaźniku terminowych dostaw,
faktycznym rezultacie biznesowym, rozbite przez czas postoju w hubach i
skuteczność ostatniej mili aż do produkcji inżynierskiej na poziomie zespołów.
W ciągu jednego cyklu raportowania stało się jasne, że kilka zespołów o wysokiej
produkcji dostarczało funkcje w obszarach bez mierzalnego wpływu na metrykę
gwiazdę polarną, a inwestycje przesunęły się ku czynnikom, które drzewo
pokazało jako naprawdę ważne.

**Administracja publiczna.** Zespół cyfrowy krajowej służby zdrowia raportował
"moduły dostarczone zgodnie z opisem przedmiotu zamówienia" dla wieloletniego
programu modernizacji dokumentacji pacjentów. Komisja nadzorcza zadała inne
pytanie: czy klinicyści spędzają mniej czasu na administracyjnym wprowadzaniu
danych. Zespół dorobił wstecznie metrykę rezultatu, medianę minut czasu
administracyjnego na kontakt z pacjentem, i stwierdził, że wczesne moduły
faktycznie ten czas wydłużyły z powodu tarcia w przepływie pracy, mimo
osiągnięcia każdego kamienia milowego dostawy. Późniejsze moduły przeprojektowano
bezpośrednio wokół metryki rezultatu, a publiczne raportowanie programu
przesunęło się z listy kontrolnej dostaw na porównanie rezultatów przed i po.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z ważenia rezultatów jest uniknięte marnotrawstwo: organizacja, która
widzi niemal w czasie rzeczywistym, że strumień produkcji nie porusza żadnego
rezultatu, może przekierować tę inwestycję, zanim cały cykl budżetowy zostanie
wydany na odkrycie tego w trudny sposób. Dominującym ukrytym kosztem w dużych
organizacjach inżynierskich nie jest niedoinwestowanie, lecz dobrze wykonana
praca, której nigdy nie powinno się było finansować, bo była odłączona od
jakiegokolwiek realnego rezultatu, a panel oparty tylko na produkcji w ogóle
tego odłączenia nie widzi.

Całkowity koszt posiadania (TCO) pomiaru rezultatów jest wyższy niż pomiaru
produkcji, bo rezultaty są naprawdę trudniejsze do zdefiniowania, przypisania i
zinstrumentowania, a zbudowanie prawdziwego drzewa metryk wymaga celowego
wysiłku analitycznego, a nie przyjęcia tego, co narzędzie eksportuje domyślnie.
Warto ponieść ten koszt dla każdej inicjatywy powyżej skromnej wielkości, bo
alternatywa, odkrycie po fakcie, że rok pewnie raportowanej produkcji nie dał
realnej wartości, kosztuje znacznie więcej niż analiza z góry.

## Antywzorce i pułapki

- **Panel składający się wyłącznie z kafli produkcji:** mierzy aktywność i
  przedstawia ją jako wydajność.
- **Pełne rozliczanie zespołu z rezultatu, którego nie kontroluje:** rodzi
  frustrację i zaprasza do manipulowania w obronie przed niesprawiedliwym
  obwinianiem.
- **Brak wskaźnika wyprzedzającego dla opóźnionego rezultatu:** zespół uczy się,
  że się mylił, dopiero gdy naprawa jest zbyt droga.
- **Świętowanie języka produkcji na przeglądach przy deklarowaniu, że ceni się
  rezultaty:** deklarowany priorytet i przeżywana zachęta się rozchodzą, a
  wygrywa przeżywana zachęta.
- **Płaska lista metryk bez struktury drzewa:** poruszająca się liczba na
  szczycie nie daje pojęcia, gdzie patrzeć.
- **Uznawanie pomiaru rezultatów za zbyt trudny do podjęcia:** na stałe
  zawraca organizację do łatwych do zliczenia nakładów i produkcji.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki to niemal wyłącznie nakłady i produkcja;
  nikt nie potrafi nazwać metryk rezultatu organizacji ani wytyczyć do nich
  linii.
- **Poziom 2, Rozwój:** Niektóre zespoły zidentyfikowały metryki rezultatu
  nieformalnie, ale brakuje wspólnego drzewa metryk i spójnych wskaźników
  wyprzedzających.
- **Poziom 3, Standaryzacja:** Udokumentowane drzewo metryk łączy wspólny
  rezultat-gwiazdę polarną z produkcją będącą własnością zespołów, stosowane
  spójnie w całej organizacji.
- **Poziom 4, Zarządzanie:** Wskaźniki wyprzedzające i opóźnione są śledzone i
  przeglądane razem; zespoły są rozliczane tylko z tego, co kontrolują, a pomiar
  rezultatów jest aktywnie zasilany zasobami.
- **Poziom 5, Orkiestracja:** Pomiar rezultatów jest włączony bezpośrednio w
  decyzje o finansowaniu i priorytetyzacji; organizacja rutynowo przekierowuje
  inwestycje z pracy o wysokiej produkcji i niskim rezultacie, zanim upłynie
  cały cykl budżetowy.

## Pomysły do dyskusji

1. Nazwij najważniejszą pojedynczą metrykę rezultatu naszej organizacji. Czy wszyscy mogą się co do niej zgodzić?
2. Jaka jest nasza największa obecna inwestycja w produkcję, której nie umiemy jeszcze wyśledzić do żadnego rezultatu?
3. Gdzie nasza struktura rozliczalności karze zespół za rezultat, którego nie może kontrolować?
4. Jak wyglądałby nasz panel, gdybyśmy usunęli każdy czysty kafel produkcji?
5. Ile czasu zajmuje nam obecnie dowiedzenie się, czy dostarczona funkcja faktycznie pomogła?

## Kluczowe wnioski

- Klasyfikuj każdą metrykę jako **nakład, produkcję lub rezultat** i celowo
  przesuwaj wagę zestawu ku rezultatom.
- Zbuduj **drzewo metryk** pod jedną **metryką-gwiazdą polarną**, aby poruszająca
  się liczba na szczycie wskazywała przyczynę.
- Rozliczaj zespoły z tego, co **kontrolują** (nakłady, produkcja); rezultaty
  śledź jako wspólne sygnały, na które cała organizacja wpływa razem.
- Paruj każdą opóźnioną **metrykę rezultatu** z szybszym **wskaźnikiem
  wyprzedzającym**, abyś mógł sterować, zanim wolna liczba potwierdzi, że się
  myliłeś.
- Panel oparty wyłącznie na produkcji mierzy aktywność i nazywa ją wydajnością;
  traktuj to jak sygnał ostrzegawczy, a nie pocieszenie.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (pomiar dostarczania oparty na rezultatach).
- *Lean Analytics*, Alistair Croll i Benjamin Yoskovitz (One Metric That Matters
  oraz rozróżnienie nakład/produkcja/rezultat w kontekście startupu).
- *Measure What Matters*, John Doerr (wyznaczanie celów zorientowane na
  rezultaty i nacisk ram OKR na wyniki ponad aktywność).
- *The Lean Startup*, Eric Ries (metryki użyteczne kontra próżności i
  walidacja rezultatów).
- *Key Performance Indicators*, David Parmenter (budowanie struktury drzewa KPI
  lub metryk pod miarą-gwiazdą polarną).
