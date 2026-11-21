# 6.3 Metryki dyżurów, pojemności i obciążenia operacyjnego

## Przegląd i motywacja

Niezawodność wprowadzona w temacie 6.1 i reagowanie na incydenty mierzone w
temacie 6.2 zależą od systemu ludzkiego, który ten temat mierzy bezpośrednio:
rotacji dyżurów, inżynierów, którzy noszą powiadomienia dyżurne i reagują, gdy
coś się psuje, oraz pojemności infrastruktury, która decyduje, ile obciążenia
system wchłonie, zanim w ogóle zacznie się psuć. Organizacja może mieć
doskonałe SLO, dobrze zaprojektowane budżety błędów i naprawdę wolną od szukania
winnych kulturę incydentów, a mimo to wypalić swoich inżynierów dyżurnych
niezrównoważonym obciążeniem, które w końcu pogarsza dokładnie tę
niezawodność, którą te inne praktyki miały chronić.

Ten temat traktuje obciążenie operacyjne jako samodzielną rodzinę metryk,
bezpośrednio związaną z pomiarem dobrostanu i [wypalenia](https://en.wikipedia.org/wiki/Occupational_burnout)
z tematu 3.2, ale specyficzną dla szczególnego, ostrego stresu noszenia
powiadomień dyżurnych: przerywany sen, psychiczny koszt bycia na dyżurze nawet
wtedy, gdy nic się nie dzieje, i skumulowany haracz częstego, źle rozłożonego
obciążenia incydentami. Organizacja, która skrupulatnie mierzy niezawodność
swoich systemów, a nigdy nie mierzy trwałości ludzi utrzymujących te systemy w
niezawodności, mierzy tylko połowę obrazu, a niezmierzona połowa zwykle w końcu
wychodzi na powierzchnię jako rotacja pracowników, pogorszona jakość reagowania
na incydenty przez wyczerpanych reagujących, albo jedno i drugie.

W dużych zespołach metryki dyżurów i pojemności ujawniają problemy z
równoważeniem obciążenia, które odzwierciedlają troski o koncentrację wiedzy z
tematu 3.5: niewielka liczba inżynierów pochłania nieproporcjonalną część
powiadomień, często najbardziej doświadczeni, właśnie dlatego, że potrafią
rozwiązywać incydenty najszybciej, co jednocześnie stwarza ryzyko wypalenia i
ryzyko współczynnika autobusowego. Duże przedsiębiorstwa i organizacje publiczne
prowadzące całodobowe usługi krytyczne polegają na metrykach tego tematu, by
obsadzać rotacje dyżurów w sposób trwały, zamiast odkrywać prawdziwy koszt
dopiero przez rotację pracowników.

## Kluczowe zasady

- **Obciążenie dyżurami to mierzalny, zarządzalny zasób**, a nie nieunikniony,
  nieograniczony ciężar, który inżynierowie po prostu muszą wchłonąć.
- **Częstość i rozkład powiadomień są jednakowo ważne.** Średnia dla całego
  zespołu może ukrywać silną koncentrację na niewielkiej liczbie osób.
- **Przerwania w czasie dyżuru mają koszt, nawet gdy żaden incydent faktycznie
  nie występuje**, czyli psychiczny ciężar bycia osiągalnym i odpowiedzialnym.
- **Planowanie pojemności i obciążenie dyżurami są powiązane.** Niedoszacowana
  infrastruktura generuje więcej powiadomień, bezpośrednio zwiększając
  obciążenie dyżurami.
- **Trwały system dyżurów chroni samą niezawodność**, bo wyczerpani reagujący
  podejmują wolniejsze, bardziej podatne na błędy decyzje podczas incydentów.

## Rekomendacje

### Śledź częstość i rozkład powiadomień, a nie tylko średnią zespołu

Mierz, ile powiadomień otrzymuje każdy inżynier dyżurny z osobna, a nie tylko
średnią dla zespołu, która może ukrywać silną koncentrację. Podobnie jak przy
współczynniku autobusowym z tematu 3.5 i obciążeniu recenzentów z tematu 2.9,
obciążenie dyżurami często koncentruje się na niewielkiej liczbie
doświadczonych osób, które rozwiązują incydenty najszybciej, czyli właśnie we
wzorcu, który tworzy zarówno ryzyko wypalenia, jak i niebezpieczny pojedynczy
punkt awarii. Równoważ rotacje świadomie, gdy ta koncentracja się pojawia.

### Mierz psychiczny koszt bycia na dyżurze, a nie tylko czas aktywnych
incydentów

Dyżur niesie realny koszt nawet podczas zmiany bez ani jednego powiadomienia:
gorsza jakość snu z powodu oczekiwania możliwego przerwania, ograniczone
aktywności osobiste i niskoprocentowy stres ciągłej odpowiedzialności. Gdzie to
możliwe, uchwyć to w danych z ankiet (temat 3.7) dotyczących konkretnie
doświadczenia dyżurów, odrębnie od ogólnej satysfakcji, bo zespół może
raportować rozsądną ogólną satysfakcję, podczas gdy same dyżury po cichu
podkopują dobrostan.

### Ustal jawne limity trwałej częstości dyżurów

Ustal maksymalną rozsądną częstość, z jaką dowolna osoba powinna być na dyżurze,
zwykle nie więcej niż jeden tydzień na cztery lub pięć, i śledź faktyczną
częstość rotacji względem tego limitu. Rotacja, która technicznie ma na liście
dość osób, ale faktycznie opiera się na dwóch lub trzech z nich z powodu luk w
umiejętnościach lub ograniczeń dostępności, nie spełnia limitu, niezależnie od
tego, co pokazuje nominalny grafik.

### Połącz planowanie pojemności bezpośrednio z obciążeniem dyżurami

Niedoszacowana infrastruktura, niewystarczający zapas na skoki ruchu, zbyt
słaba konfiguracja automatycznego skalowania, z definicji generuje więcej
powiadomień, bezpośrednio zwiększając obciążenie dyżurami. Śledź wykorzystanie
pojemności infrastruktury i koreluj je z częstością powiadomień: usługa, która
regularnie pracuje blisko limitu pojemności i generuje nieproporcjonalną część
powiadomień, jest bezpośrednim, policzalnym argumentem za inwestycją w
pojemność, a nie mglistą operacyjną skargą.

### Używaj metryk dyżurów do decyzji o obsadzie i zatrudnieniu, a nie do oceny
osób

Agreguj dane o obciążeniu dyżurami na poziomie zespołu, by uzasadnić dodatkowe
etaty, lepsze narzędzia ograniczające fałszywie pozytywne powiadomienia albo
inwestycję architektoniczną zmniejszającą faktyczną częstość incydentów. Zgodnie
z konsekwentną wskazówką tej książki dla każdej metryki dotykającej bezpośrednio
osób (temat 1.2, temat 3.4), nigdy nie używaj indywidualnych metryk reakcji na
powiadomienia do oceny wydajności konkretnego inżyniera; celem jest trwała
obsada i projekt systemu, a nie indywidualne liczenie punktów.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Brak formalnego śledzenia obciążenia dyżurami | Brak narzutu | Ryzyko wypalenia i koncentracji współczynnika autobusowego pozostają niewidoczne, aż wyjdą na jaw jako rotacja pracowników |
| Tylko średnia częstość powiadomień dla zespołu | Prosta do obliczenia | Ukrywa silną koncentrację indywidualną |
| Śledzenie rozkładu powiadomień na poziomie osób | Ujawnia koncentrację i ryzyko wypalenia bezpośrednio | Wymaga staranności, by używać wyłącznie zbiorczo, nigdy do oceny osób |
| Inwestycja w pojemność zmniejszająca wolumen powiadomień u źródła | Adresuje przyczynę źródłową, trwale zmniejsza obciążenie | Wymaga początkowej inwestycji w infrastrukturę |

Główne napięcie to **akceptacja kontra inwestycja**. Łatwo potraktować wysoki
wolumen powiadomień jako po prostu nieunikniony koszt prowadzenia niezawodnej
usługi i poprosić inżynierów dyżurnych, by go wchłonęli, ale ta akceptacja w
końcu kosztuje organizację rotacją pracowników i pogorszoną jakością reagowania
na incydenty przez wyczerpanych reagujących. Rozwiąż to napięcie, traktując
podwyższone obciążenie dyżurami jako sygnał wymagający prawdziwej inwestycji,
poprawy pojemności, lepszych alertów ograniczających fałszywe alarmy,
rozszerzonej obsady rotacji, a nie jako nieunikniony ciężar, który należy
znosić w nieskończoność.

## Pytania do omówienia z zespołem

1. **Jaki jest nasz faktyczny rozkład powiadomień między osobami w rotacji, a
   nie tylko średnia zespołu?** Wyciągnij prawdziwe dane na poziomie osób;
   rozsądnie wyglądająca średnia zespołu może ukrywać jedną lub dwie osoby
   pochłaniające dramatycznie nieproporcjonalną część.

2. **Czy kiedykolwiek mierzyliśmy psychiczny koszt bycia na dyżurze osobno od
   ogólnej satysfakcji?** Jeśli nie, omówcie, czy dedykowane, krótkie pytanie
   ankietowe dotyczące konkretnie doświadczenia dyżurów wydobyłoby coś, czego
   obecnie nie widzi wasza ogólna ankieta satysfakcji (temat 3.2).

3. **Czy nasz nominalny grafik rotacji dyżurów odzwierciedla rzeczywistość, czy
   faktycznie opiera się tylko na dwóch lub trzech osobach z powodu luk w
   umiejętnościach lub dostępności?** Bądź tu szczery; grafik z ośmioma nazwiskami,
   który faktycznie zależy od dwóch osób, nie spełnia żadnego rozsądnego limitu
   trwałości.

4. **Która z naszych usług generuje nieproporcjonalną część powiadomień
   względem swojego zapasu pojemności i czy dodatkowa inwestycja w
   infrastrukturę zmniejszyłaby to obciążenie bezpośrednio?** Jawnie skrzyżuj
   częstość powiadomień z danymi o wykorzystaniu pojemności, by zbudować to
   uzasadnienie na prawdziwych dowodach.

5. **Czy dane o obciążeniu dyżurami były kiedykolwiek używane, nawet
   nieformalnie, do oceny wydajności osoby, a nie do informowania decyzji o
   obsadzie i architekturze?** Grozi to tą samą pułapką oceny indywidualnej, przed
   którą temat 3.4 ostrzega w odniesieniu do danych o aktywności, tu zastosowaną
   do obciążenia operacyjnego.

6. **Ile by nas kosztowało utracenie naszego najczęściej wywoływanego inżyniera
   dyżurnego przez wypalenie lub odejście i jak to się ma do kosztu
   zrównoważenia rotacji albo inwestycji w poprawki przyczyn źródłowych już
   teraz?** To konkretne porównanie często daje mocniejsze uzasadnienie
   proaktywnej inwestycji niż samo abstrakcyjne odwołanie do trwałości.

## Perspektywa sektorowa

**Startup.** Dyżury są często nieformalne i z konieczności skoncentrowane na
założycielach lub małym wczesnym zespole inżynierskim. Ryzykiem jest
znormalizowanie niezrównoważonego tempa wcześnie, zanim w ogóle rozważono
świadome zaprojektowanie rotacji, co jest znacznie trudniejsze do odwrócenia, gdy
stanie się domyślnym oczekiwaniem wobec osób zatrudnianych później.

**Mała firma.** Prosty, jawny grafik rotacji z jasnym limitem trwałości (na
przykład nie więcej niż jeden tydzień na cztery) jest osiągalny nawet bez
dedykowanych narzędzi do dyżurów. Główna dyscyplina to po prostu uczynienie
rotacji i jej sprawiedliwości widocznymi i jawnymi, zamiast zostawiania jej jako
nieformalnego, niewypowiedzianego ustalenia.

**Duże przedsiębiorstwo.** Koncentracja rozkładu powiadomień i związane z nią
ryzyka wypalenia i współczynnika autobusowego skalują się tu źle, bo więcej
usług i więcej złożoności zwykle oznacza więcej potencjalnych powiadomień, a
koncentracja wiedzy ekspertów pogłębia problem. Zainwestuj w śledzenie obciążenia
na poziomie osób (używane wyłącznie zbiorczo do decyzji o obsadzie), inwestycje w
pojemność zmniejszające wolumen powiadomień u źródła i świadome równoważenie
rotacji.

**Administracja publiczna.** Krytyczna infrastruktura publiczna często wymaga
całodobowego pokrycia dyżurami z realnymi konsekwencjami opóźnionej reakcji, co
podnosi zarówno wagę trwałej obsady, jak i trudność jej osiągnięcia przy
typowych ograniczeniach etatów w sektorze publicznym. Używaj danych o
obciążeniu dyżurami jawnie i bezpośrednio do uzasadniania próśb o obsadę,
ujmując trwałą pojemność dyżurów jako bezpośredni, policzalny wymóg
niezawodności, a nie uznaniową preferencję kadrową.

## Przykłady

**Przedsiębiorstwo.** Firma oferująca infrastrukturę chmurową odkryła,
po raz pierwszy wyciągając dane o powiadomieniach na poziomie osób, że dwóch
starszych inżynierów z piętnastoosobowej rotacji dyżurów osobiście obsłużyło
ponad 60% wszystkich powiadomień w ubiegłym roku, zarówno dlatego, że byli
najszybsi w rozwiązywaniu złożonych incydentów, jak i dlatego, że pozostali
członkowie rotacji nauczyli się nieformalnie im ustępować, zamiast sami próbować
rozwiązania. Obaj inżynierowie zgłaszali znaczące objawy wypalenia w ankiecie
dobrostanu firmy (temat 3.2), a kierownictwo wcześniej nie powiązało tego sygnału
z ankiety z konkretnymi, policzalnymi danymi o koncentracji dyżurów. Świadome
wysiłki równoważenia, w tym celowe szkolenia budujące pewność rozwiązywania w
szerszej rotacji i formalny limit liczby kolejnych powiadomień przydzielanych
jednej osobie, zmniejszyły udział tych dwóch inżynierów poniżej 25% w ciągu
sześciu miesięcy, z odpowiednią poprawą zgłaszanego przez nich dobrostanu.

**Administracja publiczna.** Zespół inżynierów dyżurnych regionalnego
przedsiębiorstwa wodociągowego działał z nominalną czteroosobową rotacją do
monitorowania krytycznej infrastruktury, ale dane o wykorzystaniu pojemności
ujawniły, że jedna konkretna, starzejąca się przepompownia, pracująca stale
blisko swojego limitu operacyjnego, generowała niemal połowę wszystkich
powiadomień w całej rotacji. Modernizacja pojemności tej jednej przepompowni,
sfinansowana wprost z użyciem korelacji częstości powiadomień z pojemnością jako
konkretnego dowodu we wniosku budżetowym, zmniejszyła całkowity wolumen
powiadomień w całej organizacji o około 40% w następnym roku, pokazując, że
obciążenie dyżurami było w znacznej mierze problemem pojemności w przebraniu, a
nie tylko problemem obsady czy procesu.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem ze świadomego zarządzania obciążeniem dyżurami i pojemnością jest
uniknięta rotacja pracowników i uniknięte pogorszenie niezawodności przez
wyczerpanych reagujących podejmujących wolniejsze, bardziej podatne na błędy
decyzje. Przykład firmy z infrastrukturą chmurową pokazuje narastające ryzyko
bezpośrednio: niezarządzana koncentracja stworzyła jednoczesną ekspozycję na
wypalenie i współczynnik autobusowy, którą prosta, oparta na danych próba
zrównoważenia rozwiązała skromnym kosztem w porównaniu z ryzykiem utraty któregoś
ze starszych inżynierów przez odejście.

Całkowity koszt posiadania obejmuje instrumentację do śledzenia rozkładu
powiadomień na poziomie osób (używaną ostrożnie, tylko zbiorczo) i, gdy to
wskazane, prawdziwą inwestycję w pojemność, by zmniejszyć wolumen powiadomień u
źródła. Przykład przedsiębiorstwa wodociągowego pokazuje, że ta inwestycja może
zwrócić się bezpośrednio i mierzalnie, bo jedna dobrze ukierunkowana poprawka
pojemności istotnie zmniejszyła obciążenie operacyjne w całej organizacji.

## Antywzorce i pułapki

- **Śledzenie tylko średniej liczby powiadomień dla zespołu:** ukrywa silną
  koncentrację indywidualną, która napędza zarówno wypalenie, jak i ryzyko
  współczynnika autobusowego.
- **Traktowanie nominalnego grafiku rotacji jako odzwierciedlenia
  rzeczywistości:** grafik, który faktycznie zależy od dwóch lub trzech osób, nie
  jest trwały, bez względu na to, ile nazwisk na nim figuruje.
- **Używanie indywidualnych danych o reakcji na powiadomienia do oceny
  wydajności:** powtarza pułapkę oceny indywidualnej, przed którą ta książka
  ostrzega wielokrotnie, tu zastosowaną do obciążenia operacyjnego.
- **Akceptowanie wysokiego wolumenu powiadomień jako nieuniknionego kosztu
  niezawodności zamiast badania pojemności jako przyczyny źródłowej:** pomija
  często dostępną, bezpośrednią poprawkę.
- **Brak łączenia danych o obciążeniu dyżurami z danymi z ankiet dobrostanu:**
  marnuje okazję, by zidentyfikować narastające ryzyko wypalenia i zareagować,
  zanim wyjdzie na jaw jako rotacja pracowników.
- **Ignorowanie psychicznego kosztu bycia na dyżurze bez ani jednego
  powiadomienia:** zaniża prawdziwe obciążenie rotacji.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Obciążenie dyżurami nie jest w ogóle śledzone albo
  śledzone tylko jako średnia dla zespołu, która ukrywa koncentrację
  indywidualną.
- **Poziom 2, Rozwój:** Istnieją pewne dane o powiadomieniach na poziomie osób,
  ale nie są powiązane z danymi z ankiet dobrostanu ani z decyzjami o inwestycjach
  w pojemność.
- **Poziom 3, Standaryzacja:** Rozkład powiadomień na poziomie osób i korelacja z
  wykorzystaniem pojemności są śledzone spójnie, z jawnymi limitami trwałości
  częstości rotacji.
- **Poziom 4, Zarządzanie:** Dane o obciążeniu dyżurami są aktywnie używane do
  napędzania inwestycji w pojemność i równoważenia rotacji, powiązane jawnie z
  sygnałami z ankiet dobrostanu.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne, mierzalne
  poprawy zarówno obciążenia operacyjnego, jak i dobrostanu dzięki celowym
  inwestycjom w pojemność i przeprojektowaniu rotacji, a trwała obsada dyżurów
  jest rutynowym, dobrze uzasadnionym wejściem do planowania etatów i
  infrastruktury.

## Pomysły do dyskusji

1. Jak wygląda teraz nasz faktyczny rozkład powiadomień na poziomie osób?
2. Czy nasz nominalny grafik rotacji odzwierciedla, kto faktycznie rozwiązuje większość incydentów?
3. Jaka pojedyncza inwestycja w pojemność najbardziej zmniejszyłaby nasz obecny wolumen powiadomień?
4. Czy kiedykolwiek powiązaliśmy dane o obciążeniu dyżurami z sygnałami z ankiet dobrostanu?
5. Ile by nas kosztowało utracenie najczęściej wywoływanego inżyniera przez wypalenie?

## Kluczowe wnioski

- Obciążenie dyżurami to **mierzalny, zarządzalny zasób**; śledź rozkład na
  poziomie osób, a nie tylko średnią dla zespołu, która może ukrywać silną
  koncentrację.
- Dyżur niesie **psychiczny koszt nawet bez ani jednego powiadomienia**; mierz
  to osobno od ogólnej satysfakcji.
- **Planowanie pojemności i obciążenie dyżurami są bezpośrednio powiązane**;
  niedoszacowana infrastruktura generuje więcej powiadomień i więcej ciężaru.
- Używaj danych o dyżurach do **decyzji o obsadzie i pojemności**, nigdy do oceny
  wydajności osób.
- Trwały system dyżurów **chroni samą niezawodność**, bo wyczerpani reagujący
  podejmują wolniejsze, bardziej podatne na błędy decyzje.

## Bibliografia i dalsza lektura

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff i Niall Richard Murphy (red.) (praktyka
  dyżurów i trwałe obciążenie operacyjne).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara i Stephen Thorne (red.) (praktyczne wskazówki
  projektowania rotacji dyżurów).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach i Michael P. Leiter (organizacyjne przyczyny
  wypalenia i interwencje, stosowalne do stresu dyżurów).
- *Seeking SRE: Conversations About Running Production Systems at Scale*, pod
  redakcją Davida N. Blanka-Edelmana (perspektywy praktyków na trwałą praktykę
  operacyjną).
