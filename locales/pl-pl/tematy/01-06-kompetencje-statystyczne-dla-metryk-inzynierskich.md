# 1.6 Kompetencje statystyczne dla metryk inżynierskich

## Przegląd i motywacja

Nie potrzebujesz dyplomu ze statystyki, by dobrze prowadzić program metryk, ale
musisz unikać niewielkiej liczby konkretnych, częstych błędów, które sprawiają,
że skądinąd dobrze nadzorowane i dobrze zinstrumentowane metryki aktywnie
wprowadzają w błąd. Zespół może zrobić wszystko dobrze, nazwać jasną decyzję,
uniknąć prawa Goodharta, przesunąć wagę na rezultaty, uporządkować własność,
niezawodnie zinstrumentować dane, a mimo to wyciągnąć zły wniosek, bo odczytał
średnią tam, gdzie potrzebował percentyla, wziął szum za trend albo dał się
nabrać na zbieg okoliczności przebrany za przyczynę. Ten temat to minimum osądu
statystycznego, które ta książka zakłada, że czytelnik każdego późniejszego
tematu już posiada.

Sedno problemu polega na tym, że metryki inżynierskie są zwykle zaszumione,
skośne i oparte na małych próbach według standardów formalnej statystyki.
Tygodniowa liczba wdrożeń pojedynczego zespołu nie jest gładką krzywą dzwonową;
to garstka punktów danych z okazjonalnymi dużymi wartościami odstającymi (duże
wydanie, seria wycofań po incydencie). Stosowanie naiwnych intuicji
zbudowanych dla dużych, dobrze zachowujących się zbiorów danych do takich danych
regularnie daje pewne siebie, błędne wnioski. Umiejętność dostrzeżenia, kiedy
liczba jest zbyt zaszumiona, by jej ufać, kiedy średnia cię okłamuje i kiedy
dwie rzeczy poruszające się razem nic nie mówią o przyczynowości, nie jest
opcjonalnym rygorem; to ona odróżnia program metryk, który uczy organizację
czegoś prawdziwego, od takiego, który uczy jej czegoś brzmiącego wiarygodnie i
fałszywego.

W skali przedsiębiorstwa i administracji błędy statystyczne się kumulują, bo
mylący wniosek, raz zaakceptowany przez kierownictwo, jest realizowany w wielu
zespołach, zanim ktokolwiek pomyśli o ponownym zbadaniu analizy leżącej u
podstaw. Statystycznie naiwne porównanie dwóch pionów albo stanu przed i po
dużej reorganizacji może kształtować decyzje o zasobach przez lata, bazując na
niczym więcej niż szumie lub zmiennej zakłócającej, której nikt nie kontrolował.
Ten temat istnieje po to, by ta porażka była mniej prawdopodobna.

## Kluczowe zasady

- **Mediana lub percentyl zwykle mówi więcej niż średnia.** Dane inżynierskie są
  rutynowo skośne przez wartości odstające, które średnie wchłaniają, a
  percentyle nie.
- **Małe próby dają zaszumione liczby.** Procent obliczony z garstki zdarzeń
  waha się gwałtownie z powodów niemających nic wspólnego z realną zmianą.
- **Regresja do średniej nieustannie oszukuje ludzi.** Po niezwykle dobrym lub
  złym odczycie zwykle następuje bardziej typowy, z interwencją lub bez niej.
- **Korelacja to nie przyczynowość, a zmienne zakłócające są wszędzie.** Dwie
  metryki poruszające się razem mogą mieć ukrytą trzecią przyczynę, zamiast
  jedna napędzać drugą.
- **[Karta kontrolna](https://en.wikipedia.org/wiki/Control_chart) bije
  pojedyncze porównanie przed i po.** Zobaczenie normalnego zakresu zmienności
  pozwala odróżnić realną zmianę od szumu.

## Rekomendacje

### Domyślnie używaj median i percentyli dla danych skośnych

Inżynierskie metryki oparte na czasie, czas realizacji, czas przywracania po
incydencie, opóźnienie odpowiedzi, są niemal zawsze prawoskośne: większość
wartości skupia się nisko, z długim ogonem okazjonalnych dużych wartości
odstających. Średnia ciągnięta przez ten ogon może namalować obraz, któremu nie
odpowiada żaden typowy przypadek. Raportuj **medianę** (wartość środkową, od
której połowa obserwacji jest wyższa, a połowa niższa) obok **90.** lub **95.
percentyla** (wartości, poniżej której mieści się 90% lub 95% obserwacji), które
razem pokazują zarówno typowy przypadek, jak i ogon najgorszego przypadku,
którego zespół faktycznie doświadcza. Temat o KPI w siostrzanej książce
`software-engineering-guide` i każdy temat o metrykach dostarczania w części 2
tej książki zakłada ten nawyk w całości.

### Wiedz, kiedy próba jest zbyt mała, by jej ufać

Odsetek nieudanych zmian obliczony z trzech wdrożeń w wolnym tygodniu nie jest
znaczącym sygnałem; pojedyncza awaria przesuwa procent z 0% na 33% z dnia na
dzień z powodów, które mogą nie mieć nic wspólnego z ryzykiem leżącym u podstaw.
Zanim zareagujesz na metrykę procentową, sprawdź liczbę zdarzeń pod spodem. Jako
praktyczną regułę kciuka traktuj stopę obliczoną z mniej niż około dwudziestu
do trzydziestu zdarzeń jako zaszumioną i wymagającą dłuższego okna obserwacji,
zanim wyciągniesz wniosek, i powiedz to jawnie na panelu, zamiast przedstawiać
zmienny procent z małej próby z taką samą pewnością jak stabilny z dużej.

### Pilnuj regresji do średniej, zanim przypiszesz zasługę interwencji

Jeśli po najgorszym w historii tygodniu zespołu pod względem incydentów
nastąpiła uwaga kierownictwa i późniejsza poprawa, kusi, by przypisać zasługę
interwencji. Często część tej poprawy nastąpiłaby i tak, bo po niezwykle
skrajnym odczycie zwykle następuje bardziej typowy, wyłącznie jako artefakt
statystyczny, zjawisko zwane **regresją do średniej**. Zabezpiecz się przed tym,
porównując z dłuższą historyczną wartością odniesienia, a nie z pojedynczym
skrajnym punktem danych, który przyciągnął uwagę, i zachowując stosowną pokorę
co do tego, jak dużą część zaobserwowanej poprawy przypisać konkretnemu
działaniu.

### Szukaj zmiennych zakłócających, zanim uznasz, że metryka spowodowała rezultat

Gdy dwie metryki poruszają się razem, częstotliwość wdrożeń rośnie obok
satysfakcji klientów, oprzyj się odruchowi twierdzenia, że jedna spowodowała
drugą, zanim rozważysz **zmienną zakłócającą**: ukryty trzeci czynnik napędzający
obie. Premiera nowej funkcji może niezależnie podbić zarówno częstotliwość
wdrożeń (więcej kolejnych poprawek), jak i satysfakcję (sama funkcja), bez
żadnego związku przyczynowego między tymi dwiema metrykami. Zanim przedstawisz
korelację jako dowód przyczynowości, aktywnie zapytaj, co jeszcze zmieniło się
w tym samym czasie i mogłoby wyjaśnić oba ruchy.

### Używaj karty kontrolnej, a nie pojedynczej migawki przed i po

**Karta kontrolna** wykreśla metrykę w czasie, jawnie pokazując jej normalny
zakres zmienności, zwykle jako pasma wokół centralnej średniej. Pozwala to
odróżnić realną zmianę, punkt danych lub utrzymującą się serię poza normalnym
zakresem, od zwykłego szumu, którego pojedyncze porównanie przed i po nie
odróżni. Zanim ogłosisz "liczba poprawiła się po zmianie", wykreśl dość danych
historycznych, by zobaczyć, jak wygląda normalna zmienność, i sprawdź, czy
odczyt po zmianie faktycznie wypada poza nią.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Średnie | Proste, znajome, łatwe do obliczenia | Zniekształcane przez wartości odstające w skośnych danych inżynierskich |
| Mediany i percentyle | Odporne na wartości odstające, pokazują razem typowy przypadek i ogon | Nieco mniej znajome dla odbiorców nietechnicznych |
| Pojedyncze porównanie przed i po | Szybkie, intuicyjne, łatwe do przedstawienia | Podatne na regresję do średniej i szum |
| Karty kontrolne i dłuższe wartości odniesienia | Niezawodnie odróżniają realne zmiany od szumu | Wymagają więcej danych historycznych i więcej wyjaśniania odbiorcy nietechnicznemu |

Centralne napięcie to **prostota kontra rygor**. Średnie i pojedyncze
porównania przed i po są łatwiejsze do obliczenia i wyjaśnienia, co jest
dokładnie powodem, dla którego dominują w raportowaniu doraźnym, ale to także
dwie techniki najbardziej skłonne do wytworzenia pewnego siebie, błędnego
wniosku na zaszumionych, skośnych danych, jakie generują metryki z tej książki.
Rozwiąż to napięcie, domyślnie stosując bardziej rygorystyczne techniki,
mediany, percentyle i karty kontrolne, dla każdej decyzji o realnych
konsekwencjach, a prostsze techniki zostawiając na niskostawkowe, eksploracyjne
spojrzenia, gdzie błędny odczyt kosztuje niewiele.

## Pytania do omówienia z zespołem

1. **Które z naszych kafli panelu raportują średnią tam, gdzie mediana lub
   percentyl opowiedziałaby prawdziwszą historię?** Metryki inżynierskie oparte
   na czasie są niemal zawsze skośne, a średnia na skośnych danych może
   wyglądać dobrze, podczas gdy typowy przypadek albo ogon najgorszego
   przypadku opowiada zupełnie inną historię. Zbadaj swoje kafle czasowe
   konkretnie pod kątem tej zamiany.

2. **Jak mała jest próba stojąca za naszymi metrykami procentowymi i czy
   traktujemy metrykę z dziesięciu zdarzeń z taką samą pewnością jak z tysiąca?**
   Zmienna stopa z małej próby, przedstawiona bez liczby zdarzeń pod spodem,
   zaprasza do przesadnej reakcji na szum. Sprawdź swoje kafle odsetka nieudanych
   zmian i podobne kafle procentowe pod kątem tej luki.

3. **Czy kiedykolwiek przypisaliśmy interwencji zasługę za poprawę, którą i tak
   wytworzyłaby regresja do średniej?** To jeden z najłatwiejszych błędów
   statystycznych i jeden z najtrudniejszych do zauważenia po fakcie, bo
   interwencja i poprawa faktycznie nastąpiły w tej kolejności. Spójrz wstecz
   na niedawną opowieść "naprawiliśmy to" i szczerze zapytaj, czy porównanie z
   wartością odniesienia było dość długie, by to wykluczyć.

4. **Gdzie założyliśmy, że jedna metryka spowodowała drugą, nie sprawdzając
   zmiennej zakłócającej?** Dwie rzeczy poruszające się razem to częste
   zjawisko; jedna powodująca drugą to mocniejsze twierdzenie, które wymaga
   więcej dowodów. Wybierz korelację, w którą wasz zespół obecnie wierzy, i
   spróbuj nazwać wiarygodną zmienną zakłócającą, która by ją wyjaśniła bez
   żadnego związku przyczynowego.

5. **Czy mamy dość danych historycznych, by wiedzieć, jak wygląda normalna
   zmienność naszych najważniejszych metryk, czy porównujemy pojedyncze
   punkty?** Bez wyczucia normalnego zakresu każdy pojedynczy odczyt wygląda
   alarmująco albo uspokajająco zależnie od nastroju, a nie dowodów. Omówcie,
   czy wasza najczęściej oglądana metryka była kiedykolwiek wykreślona jako
   karta kontrolna, a nie pojedyncza liczba.

6. **Jak obecnie komunikujemy niepewność interesariuszom nietechnicznym i czy
   nasz panel sugeruje większą precyzję, niż dane faktycznie wspierają?**
   Wykres bez wskazania normalnej zmienności ani wielkości próby może sprawić, że
   kierownictwo przesadnie zareaguje na szum albo, równie często, zlekceważy
   realny sygnał jako szum. Omówcie, jak wasze raportowanie mogłoby komunikować to
   uczciwie, nie stając się nieczytelne.

## Perspektywa sektorowa

**Startup.** Małe zespoły generują małe próby niemal wszędzie, co oznacza, że
ostrożność wobec małych prób z tego tematu ma ciągłe znaczenie. Oprzyj się
wyciąganiu mocnych wniosków z pojedynczego złego tygodnia albo pojedynczego
świetnego; przy samej garstce punktów danych uczciwa odpowiedź na "czy to trend"
brzmi często "jeszcze nie wiemy".

**Mała firma.** Wbudowane panele gotowych narzędzi często domyślnie pokazują
średnie i porównania pojedynczych okresów, bo to najprościej obliczyć i
wyświetlić. Gdy narzędzie na to pozwala, przełącz się na mediany dla metryk
czasowych i bądź sceptyczny wobec każdego nagłówka "wzrost o 40% w tym miesiącu"
obliczonego z małej liczby zdarzeń pod spodem.

**Duże przedsiębiorstwo.** Błędy statystyczne w tej skali zostają wbudowane w
decyzje o zasobach i reorganizacjach dotyczące setek ludzi. Zainwestuj w
analityków lub osadzonych praktyków danych, którzy potrafią zbudować porządne
karty kontrolne i sprawdzić zmienne zakłócające, zanim porównanie między
jednostkami biznesowymi albo przed i po dużej zmianie zostanie przedstawione
kierownictwu jako ustalony fakt.

**Administracja publiczna.** Statystycznie naiwne porównanie zasilające raport
publiczny lub uzasadnienie budżetu może mieć nieproporcjonalnie duże konsekwencje
w świecie rzeczywistym i zaprasza dokładnie tego rodzaju kontrolę, która
publicznie obnaża niechlujną analizę. Stosuj bardziej rygorystyczne techniki,
karty kontrolne, udokumentowane wielkości prób, kontrole zmiennych zakłócających,
jako stałą praktykę dla wszystkiego, co publikowane na zewnątrz, a nie tylko
okazjonalny wysiłek.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo firmy programistycznej świętowało 25%
poprawę odsetka nieudanych zmian w miesiącu po wprowadzeniu nowej polityki
przeglądu kodu, przypisując zasługę bezpośrednio tej polityce. Bliższe spojrzenie
wykazało, że miesiąc "przed" był niezwykle zły, za sprawą jednej nieudanej
migracji jednego zespołu, a wielkość próby w obu miesiącach wynosiła poniżej
trzydziestu wdrożeń w całej firmie. Karta kontrolna z dwunastu miesięcy historii
pokazała, że nowy odczyt mieści się dobrze w normalnej zmienności, a nie jest
realnym skokiem, i że faktyczny efekt polityki, choć realny, był znacznie
mniejszy, niż sugerowała liczba z nagłówka.

**Administracja publiczna.** Publiczna agencja transportu miejskiego
zaraportowała dużą poprawę punktualności rok do roku dla nowo
zdigitalizowanego systemu rozkładów, porównując jeden kwartał "przed" z jednym
kwartałem "po". Niezależny przegląd wykazał, że kwartał "przed" zbiegł się z
niepowiązanym zamknięciem z powodu budowy, które obniżyło wyniki w całej sieci,
a dłuższa wartość odniesienia pokazała, że punktualność już się poprawiała,
zanim nowy system ruszył. Poprawiony raport agencji użył pełnej, wieloletniej
karty kontrolnej i przypisał nowemu systemowi bardziej skromną, ale łatwiejszą do
obrony poprawę.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z kompetencji statystycznych jest uniknięte błądzenie: organizacja,
która poprawnie przypisuje poprawę albo poprawnie rozpoznaje szum jako szum,
wydaje następną inwestycję tam, gdzie faktycznie pomoże, zamiast gonić
fantomowy efekt. Powyższy przykład z handlu detalicznego jest typowy: firma,
która wierzyła, że sama polityka przeglądu napędziła 25% poprawę, mogłaby
niedoinwestować inne realne czynniki albo zawyżyć wartość polityki w sposób
wprowadzający w błąd przy przyszłych decyzjach.

Całkowity koszt posiadania (TCO) rygoru statystycznego to głównie zmiana
nawyków, a nie nowe narzędzia: wybór mediany zamiast średniej, sprawdzenie
wielkości próby przed reakcją, wykreślenie dłuższej wartości odniesienia przed
ogłoszeniem zwycięstwa. Te nawyki kosztują niewiele i zapobiegają znacznie
większemu, trudniejszemu do wykrycia kosztowi decyzji podejmowanych na
pewnych siebie, błędnych wnioskach.

## Antywzorce i pułapki

- **Raportowanie średniej na skośnych danych czasowych:** ukrywa typowy
  przypadek i ogon za jedną mylącą liczbą.
- **Reagowanie na procent bez widocznej wielkości próby:** traktuje szum z
  garstki zdarzeń jak stabilny, znaczący trend.
- **Przypisywanie zasługi interwencji bez wykluczenia regresji do średniej:**
  częsty, łatwy do popełnienia, trudny do zauważenia błąd.
- **Przypisywanie przyczynowości z korelacji bez rozważenia zmiennych
  zakłócających:** zawyża to, co dane faktycznie wspierają.
- **Porównywanie pojedynczej migawki przed i po zamiast wykreślenia dłuższej
  wartości odniesienia:** nie odróżnia realnej zmiany od zwykłej zmienności.
- **Sugerowanie większej precyzji, niż wspierają dane, w raportowaniu dla
  kierownictwa:** zaprasza do przesadnej reakcji na szum albo odrzucenia realnego
  sygnału.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki są raportowane jako surowe średnie i
  pojedyncze migawki przed i po, bez zwracania uwagi na wielkość próby,
  skośność czy zmienność wartości odniesienia.
- **Poziom 2, Rozwój:** Niektórzy analitycy stosują mediany lub percentyle
  nieformalnie, ale brakuje spójnej praktyki organizacyjnej, a zmienne
  zakłócające rzadko są sprawdzane.
- **Poziom 3, Standaryzacja:** Mediany i percentyle są domyślne dla skośnych
  metryk czasowych; wielkości prób są pokazywane obok metryk procentowych w
  całej organizacji.
- **Poziom 4, Zarządzanie:** Karty kontrolne z historycznymi wartościami
  odniesienia są standardową praktyką dla każdego twierdzenia o realnej zmianie;
  zmienne zakłócające są aktywnie rozważane, zanim w raportowaniu padną
  twierdzenia przyczynowe.
- **Poziom 5, Orkiestracja:** Rygor statystyczny jest wbudowany w same narzędzia,
  panele domyślnie wyświetlają percentyle i pasma kontrolne, a organizacja
  potrafi wykazać, że konkretna przeszła decyzja została skorygowana, bo
  statystycznie naiwny odczyt został wychwycony, zanim ukształtował strategię.

## Pomysły do dyskusji

1. Które z naszych obecnych nagłówków na panelu wyglądałyby inaczej, gdybyśmy zastąpili średnią medianą?
2. Czy kiedykolwiek zmieniliśmy decyzję, bo procent okazał się oparty na znacznie mniejszej próbie, niż zakładaliśmy?
3. Którą niedawną opowieść "poprawiliśmy tę metrykę" powinniśmy ponownie zbadać pod kątem regresji do średniej?
4. Gdzie dwie z naszych metryk mogą być skorelowane przez ukrytą trzecią przyczynę, a nie przez to, że jedna napędza drugą?
5. Czy nasze najważniejsze wykresy pokazują normalny zakres zmienności, czy tylko pojedynczą linię trendu?

## Kluczowe wnioski

- Preferuj **mediany i percentyle** zamiast średnich dla skośnych,
  czasowych metryk inżynierskich.
- Traktuj **procent z małej próby** jako zaszumiony i mów to jawnie, zamiast
  reagować na niego jak na stabilny trend.
- Pilnuj **regresji do średniej**, zanim przypiszesz zasługę interwencji za
  poprawę, która nastąpiła po niezwykle złym odczycie.
- **Korelacja to nie przyczynowość**; aktywnie szukaj zmiennych zakłócających,
  zanim postawisz twierdzenie przyczynowe.
- Używaj **karty kontrolnej z prawdziwą historyczną wartością odniesienia**, a
  nie pojedynczej migawki przed i po, by odróżnić realną zmianę od zwykłego
  szumu.

## Bibliografia i dalsza lektura

- *The Signal and the Noise*, Nate Silver (odróżnianie realnego sygnału od
  szumu w niedoskonałych danych).
- *How to Measure Anything*, Douglas W. Hubbard (rozumowanie statystyczne dla
  pomiaru w organizacjach).
- *Understanding Variation: The Key to Managing Chaos*, Donald J. Wheeler (karty
  kontrolne i rozróżnienie zmienności wspólnych i szczególnych przyczyn).
- *Thinking, Fast and Slow*, Daniel Kahneman (błędy poznawcze, w tym regresja do
  średniej i złudzenie narracji przyczynowej).
- *The Visual Display of Quantitative Information*, Edward R. Tufte (uczciwa,
  rzetelna prezentacja danych ilościowych).
