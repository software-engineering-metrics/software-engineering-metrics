# 6.4 Metryki bezpieczeństwa i zarządzania podatnościami

## Przegląd i motywacja

Ten temat zamyka część 6, rozszerzając tę samą dyscyplinę niezawodności, którą
ta część zbudowała, wyznaczanie celów, parowanie z barierami ochronnymi,
uczciwe raportowanie incydentów, na odrębne, ale blisko powiązane ryzyko: nie to,
czy system zawodzi sam z siebie, lecz to, czy ktoś celowo go psuje albo
wykorzystuje. Metryki **zarządzania podatnościami** mierzą, jak dobrze
organizacja znajduje i usuwa słabości bezpieczeństwa, zanim zostaną wykorzystane:
ile podatności istnieje, jak są poważne i, co kluczowe, jak szybko są usuwane po
wykryciu, bo znana, ale niezałatana podatność to stałe, policzalne ryzyko, które
organizacja zdecydowała się nosić, świadomie albo przez zaniedbanie.

Główna troska tego tematu bezpośrednio odpowiada ujęciu wyników analizy
statycznej z tematu 4.4: surowa liczba podatności to słaba metryka, zlewająca
problemy drobne i krytyczne, narażona na dokładnie te same ryzyka manipulacji,
zawężanie definicji, tłumienie i manipulowanie progami, które temat 1.2 opisuje
ogólnie. Konkretny dodatek, którego wymagają metryki bezpieczeństwa, to czas
usuwania śledzony względem dotkliwości, bo krytyczna podatność leżąca
niezałatana miesiącami to zasadniczo inne ryzyko niż ta sama podatność wykryta i
naprawiona w ciągu doby, a tej informacji sama liczba nie przekaże.

W dużych zespołach metryki bezpieczeństwa niosą konsekwencje wykraczające poza
bezpośrednie ryzyko techniczne: duże przedsiębiorstwa ponoszą umowną i
wizerunkową ekspozycję na włamanie, a organizacje publiczne ponoszą skutki dla
bezpieczeństwa narodowego, prawne i dla zaufania publicznego, co czyni metryki
bezpieczeństwa sprawą realnego interesu publicznego, a nie tylko wewnętrzną
troską inżynierską. Ten temat traktuje zarządzanie podatnościami z tym samym
rygorem i tą samą dyscypliną parowania z barierami ochronnymi, którą ta książka
stosuje wszędzie, bo metryki bezpieczeństwa są narażone na każde ryzyko
manipulacji, jakie ta książka opisuje, z odpowiednio wyższą stawką, gdy
manipulacja się powiedzie.

## Kluczowe zasady

- **Czas usuwania według dotkliwości liczy się bardziej niż surowa liczba
  podatności.** Krytyczny problem niezałatany miesiącami to zasadniczo inne
  ryzyko niż ten sam problem wykryty i szybko naprawiony.
- **Metryki bezpieczeństwa są narażone na te same ryzyka manipulacji co wyniki
  analizy statycznej** (temat 4.4), z wyższą stawką, gdy manipulacja się
  powiedzie.
- **Klasyfikacja dotkliwości wymaga zewnętrznych, ustandaryzowanych kryteriów**,
  gdzie tylko to możliwe, a nie wyłącznie wewnętrznego osądu, który może dryfować
  ku pobłażliwości.
- **Podatność ujawniona i szybko naprawiona jest znakiem zdrowego procesu, a nie
  porażką do ukrycia.** Karanie za ujawnienie zniechęca do zgłaszania, od którego
  zależy cały ten system.
- **Dług bezpieczeństwa jest kategorią długu technicznego** (temat 4.5) i
  powinien konkurować o priorytetową zdolność naprawczą na tej samej jawnej,
  policzalnej zasadzie.

## Rekomendacje

### Śledź czas usuwania według dotkliwości jako metrykę podstawową

Dla każdej wykrytej podatności zapisz jej dotkliwość (używając ustandaryzowanej
skali, takiej jak [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, tam gdzie ma zastosowanie) i śledź czas od wykrycia do prawdziwego
usunięcia, a nie do zamknięcia zgłoszenia ani scalenia poprawki, która jeszcze
nie została wdrożona. Ustal jawne cele czasu usuwania według dotkliwości, zwykle
mierzone w dniach dla problemów krytycznych i tygodniach dla mniej dotkliwych, i
śledź zgodność z tymi celami jako podstawową metrykę kondycji bezpieczeństwa,
zamiast surowej, nieważonej liczby podatności.

### Używaj ustandaryzowanej oceny dotkliwości zamiast wyłącznie wewnętrznego osądu

Tam gdzie dostępny jest ustandaryzowany zewnętrzny system oceny, taki jak CVSS,
używaj go jako podstawy klasyfikacji dotkliwości, zamiast polegać w całości na
wewnętrznym, potencjalnie niespójnym osądzie. To odzwierciedla dyscyplinę
klasyfikacji uciekających defektów z tematu 5.1 i dyscyplinę klasyfikacji
incydentów z tematu 6.2, zastosowaną tu konkretnie do bezpieczeństwa, i
przeciwdziała temu samemu ryzyku pobłażliwego dryfu, przed którym tamte tematy
ostrzegają, bo ocenę zakotwiczoną zewnętrznie trudniej po cichu przedefiniować w
dół niż czysto wewnętrzną.

### Zbuduj naprawdę nieukarającą kulturę ujawniania podatności i wewnętrznego
zgłaszania

Zastosuj zasadę analizy poawaryjnej bez szukania winnych z tematu 6.2
bezpośrednio do bezpieczeństwa: inżynier, który odkrywa i zgłasza podatność,
którą sam wprowadził, albo badacz, który odpowiedzialnie ujawnia podatność
znalezioną z zewnątrz, powinien być traktowany jako ktoś świadczący cenną usługę,
a nie przyznający się do porażki. Karanie za ujawnienie, wewnętrzne czy od
zewnętrznych badaczy, niezawodnie zniechęca do dokładnie tego zgłaszania, od
którego zależy cały system zarządzania podatnościami, spychając realne ryzyko do
podziemia zamiast do zarządzanego procesu usuwania.

### Traktuj dług bezpieczeństwa jako kategorię w backlogu długu technicznego

Włącz znane podatności z zaakceptowanym ryzykiem, celowo jeszcze nieusunięte z
powodu konkurujących priorytetów, do tego samego widocznego, policzalnego
backlogu długu technicznego opisanego w temacie 4.5, z tym samym ujęciem koszt
naprawy kontra koszt noszenia. To zapobiega temu, by ryzyko bezpieczeństwa albo
znikało w niewidocznym, niedokumentowanym statusie „wiemy o tym", albo
konkurowało nieuczciwie z pracą nad funkcjami bez jawnego, policzalnego
uzasadnienia swojego priorytetu.

### Łącz metryki podatności z kontekstem ekspozycji i możliwości wykorzystania

Nie każda podatność o tej samej nominalnej ocenie dotkliwości niesie to samo
rzeczywiste ryzyko: krytyczna podatność w narzędziu wewnętrznym bez ekspozycji w
sieci zewnętrznej to inne ryzyko niż ta sama nominalna dotkliwość w usłudze
dostępnej z internetu, obsługującej dane klientów. Gdzie to możliwe, ważąc
priorytety, uwzględniaj rzeczywistą ekspozycję i możliwość wykorzystania, a nie
samą ocenę dotkliwości, aby zdolność naprawcza skupiała się najpierw na
naprawdę najbardziej ryzykownych pozycjach.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Surowa liczba podatności | Łatwa do raportowania | Zlewa problemy drobne i krytyczne; łatwa do zmanipulowania przez tłumienie |
| Śledzenie ważone dotkliwością, z czasem usuwania | Odzwierciedla rzeczywistą ekspozycję na ryzyko w czasie | Wymaga zdyscyplinowanej, spójnej klasyfikacji i śledzenia |
| Wyłącznie wewnętrzny osąd dotkliwości | Elastyczny, dopasowany do kontekstu | Podatny na pobłażliwy dryf i niespójność między zespołami |
| Ustandaryzowana ocena zewnętrzna (np. CVSS) plus ważenie kontekstem | Spójna, zakotwiczona zewnętrznie, odporna na manipulacje | Wymaga dodatkowej analizy kontekstu dla naprawdę trafnego ustalania priorytetów |

Główne napięcie to **spójność kontra kontekst**. Czysto ustandaryzowana ocena
jest spójna i odporna na manipulacje, ale może pomijać prawdziwy kontekst,
ekspozycję i możliwość wykorzystania, który decyduje o rzeczywistym ryzyku;
czysto kontekstowe, wewnętrznie osądzane podejście oddaje niuanse, ale jest
podatne na to samo ryzyko pobłażliwego dryfu, przed którym ta książka ostrzega
przy każdej innej metryce zależnej od klasyfikacji. Rozwiąż to napięcie,
kotwicząc się w ustandaryzowanej ocenie jako spójnej linii bazowej, a potem
nakładając na nią udokumentowane, audytowalne ważenie kontekstem, zamiast
któregokolwiek skrajnego podejścia osobno.

## Pytania do omówienia z zespołem

1. **Czy śledzimy czas usuwania według dotkliwości, czy tylko surową liczbę
   podatności?** Wyciągnij swoją faktyczną obecną metrykę i sprawdź, czy
   odróżnia krytyczny problem niezałatany miesiącami od naprawionego w ciągu doby,
   bo surowa liczba traktuje te bardzo różnie ryzykowne sytuacje jednakowo.

2. **Czy używamy ustandaryzowanego zewnętrznego systemu oceny dotkliwości, czy
   klasyfikacja opiera się na czysto wewnętrznym, potencjalnie niespójnym
   osądzie?** Jeśli czysto wewnętrznym, omówcie, co zmieniłoby przyjęcie
   standardu takiego jak CVSS w obecnej praktyce klasyfikacji.

3. **Czy inżynier, który wprowadził podatność, a potem ją zgłosił, czułby się przy
   tym bezpiecznie, czy obawiałby się kary?** To bezpośrednia, dotycząca
   bezpieczeństwa wersja pytania o kulturę bez szukania winnych z tematu 6.2, a
   uczciwa odpowiedź ma ogromne znaczenie dla tego, czy twoim danym o podatnościach
   w ogóle można ufać.

4. **Czy mamy widoczny, policzalny backlog znanych podatności z zaakceptowanym
   ryzykiem, czy status „wiemy o tym" po cichu staje się z czasem niewidoczny i
   nieobsłużony?** Sprawdź, czy twój dług bezpieczeństwa jest śledzony z takim
   samym rygorem jak ogólny backlog długu technicznego (temat 4.5).

5. **Czy nasze ustalanie priorytetów usuwania uwzględnia rzeczywistą ekspozycję i
   możliwość wykorzystania, czy opiera się wyłącznie na nominalnej ocenie
   dotkliwości bez względu na kontekst?** Wybierz prawdziwy przykład, w którym dwie
   podatności o podobnej nominalnej dotkliwości niosły bardzo różne rzeczywiste
   ryzyko, i omówcie, czy obecny proces ustawiłby je poprawnie.

6. **Czy klasyfikacja dotkliwości podatności kiedykolwiek dryfowała w dół z
   czasem bez jasnego uzasadnienia?** To odzwierciedla wzorzec manipulowania
   definicją, przed którym ostrzegają temat 1.2 i temat 6.2; zaudytuj próbkę
   niedawnych klasyfikacji pod kątem tego konkretnego ryzyka.

## Perspektywa sektorowa

**Startup.** Formalne procesy zarządzania podatnościami są często zbędne na
bardzo wczesnym etapie, ale przyjęcie od początku podstawowego automatycznego
skanowania zależności i prostej, uczciwej wewnętrznej normy zgłaszania kosztuje
niewiele i zapobiega niewidocznemu narastaniu długu bezpieczeństwa, zanim zespół
zyska zdolność, by zająć się nim systematycznie.

**Mała firma.** Większość nowoczesnych platform deweloperskich ma bezpłatne lub
tanie automatyczne skanowanie podatności zależności; włącz je wcześnie i śledź
czas usuwania wszystkiego, co oznaczono jako krytyczne, nawet bez dedykowanej
funkcji bezpieczeństwa i wyrafinowanych narzędzi.

**Duże przedsiębiorstwo.** Spójna, ustandaryzowana ocena dotkliwości i naprawdę
nieukarająca kultura ujawniania są niezbędne i obie trudniejsze do utrzymania w
skali, gdzie niespójność w dziesiątkach zespołów i dryf kulturowy ku szukaniu
winnych po poważnym incydencie to stałe ryzyka. Zainwestuj w dedykowaną funkcję
nadzoru nad bezpieczeństwem, która utrzymuje spójność klasyfikacji i aktywnie
chroni kulturę ujawniania.

**Administracja publiczna.** Metryki bezpieczeństwa przecinają się tu często
bezpośrednio z bezpieczeństwem narodowym, zgodnością regulacyjną i zaufaniem
publicznym, a poważna, źle obsłużona podatność może mieć skutki znacznie
wykraczające poza typowe włamanie w sektorze prywatnym. Utrzymuj rygorystyczną,
zakotwiczoną zewnętrznie klasyfikację dotkliwości, aktywnie chroń wewnętrzną i
zewnętrzną kulturę ujawniania i traktuj dług bezpieczeństwa z przejrzystością i
rygorem priorytetyzacji zalecanymi w tym temacie, bo niedokumentowana, po cichu
zaakceptowana krytyczna podatność w infrastrukturze publicznej to naprawdę
poważne, audytowalne ryzyko.

## Przykłady

**Przedsiębiorstwo.** Zespół bezpieczeństwa firmy programistycznej przez lata
raportował kierownictwu tylko surową liczbę podatności, liczbę, która trzymała
się płaskiego trendu, dając fałszywe poczucie stabilności. Zrewidowana analiza
ważona dotkliwością i uwzględniająca czas usuwania ujawniła, że choć całkowita
liczba była płaska, krytyczne podatności usuwano średnio ponad dziewięćdziesiąt
dni, daleko poza jakimkolwiek rozsądnym celem, bo w każdym cyklu planowania
bezskutecznie konkurowały z pracą nad funkcjami, bez dedykowanej, chronionej
zdolności. Ustanowienie twardego, 7-dniowego celu usuwania podatności
krytycznych, poparte chronioną zdolnością naprawczą długu bezpieczeństwa,
odzwierciedlającą model alokacji długu technicznego z tematu 4.5, obniżyło
średni czas usuwania krytycznych poniżej pięciu dni w ciągu dwóch kwartałów.

**Administracja publiczna.** Krajowa agencja infrastruktury odkryła, po
zewnętrznym audycie bezpieczeństwa, że wewnętrzni inżynierowie nieformalnie
unikali zgłaszania podatności znalezionych we własnym kodzie, obawiając się, że
źle wpłynie to na ich oceny okresowe, co jest wyraźną analogią do napędzanego
obwinianiem niedoraportowania incydentów z tematu 6.2. Agencja wprowadziła
jawną, publicznie ogłoszoną politykę chroniącą wewnętrznych zgłaszających
podatności przed jakimikolwiek konsekwencjami w ocenie wydajności, wzorowaną
bezpośrednio na praktyce reagowania na incydenty bez szukania winnych, a
wewnętrzne zgłoszenia podatności znacząco wzrosły w następnym roku, co
kierownictwo agencji słusznie zinterpretowało jako dowód lepszego wykrywania i
uczciwego zgłaszania, a nie dowód spadku jakości kodu, unikając naturalnego, ale
błędnego wniosku, że rosnąca liczba musi oznaczać, że jest gorzej.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rygorystycznego, dobrze sklasyfikowanego, uczciwie raportowanego
zarządzania podatnościami jest uniknięty koszt włamania, który przy poważnym
incydencie bezpieczeństwa często wielokrotnie przewyższa koszt proaktywnego
usuwania, wraz z uniknięciem szkód regulacyjnych, umownych i wizerunkowych.
Przykład firmy programistycznej pokazuje konkretny mechanizm: dług bezpieczeństwa
przez lata po cichu przegrywał rywalizację o priorytet z pracą nad funkcjami,
dokładnie wzorzec, przed którym temat 4.5 ostrzega w odniesieniu do długu
technicznego w ogóle, aż chroniona zdolność naprawcza rozwiązała to wprost.

Całkowity koszt posiadania obejmuje narzędzia do automatycznego skanowania,
chronioną zdolność naprawczą, którą ten temat zaleca przydzielić, i trwałą
inwestycję kulturową w nieukarającą praktykę ujawniania. Ten koszt jest
skromny w porównaniu z kosztem poważnej, skutecznie wykorzystanej podatności,
którą proaktywne, dobrze spriorytetyzowane usuwanie wychwyciłoby i naprawiło na
długo, zanim mogłaby zostać wykorzystana.

## Antywzorce i pułapki

- **Śledzenie tylko surowej liczby podatności:** zlewa problemy drobne i
  krytyczne i daje fałszywe poczucie stabilności lub kryzysu niezależnie od
  rzeczywistego ryzyka.
- **Czysto wewnętrzna, nieustandaryzowana klasyfikacja dotkliwości:** podatna na
  pobłażliwy dryf i niespójność między zespołami.
- **Karanie za ujawnienie podatności, wewnętrzne lub zewnętrzne:** spycha
  realne ryzyko do podziemia zamiast do zarządzanego procesu usuwania.
- **Dług bezpieczeństwa bez widocznego, policzalnego backlogu:** domyślnie
  przegrywa rywalizację o priorytet z pracą nad funkcjami.
- **Ustalanie priorytetów wyłącznie według nominalnej oceny dotkliwości, z
  pominięciem kontekstu ekspozycji i możliwości wykorzystania:** źle kieruje
  ograniczoną zdolność naprawczą.
- **Interpretowanie rosnącej liczby zgłoszeń podatności jako dowodu spadku
  jakości bez sprawdzenia, czy samo zgłaszanie się poprawiło:** konkretny
  przypadek pułapki zmiennej zakłócającej z tematu 1.6.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Podatności są śledzone, jeśli w ogóle, jako surowa
  liczba bez ważenia dotkliwością, bez śledzenia czasu usuwania i z karzącą kulturą
  ujawniania.
- **Poziom 2, Rozwój:** Istnieje pewna klasyfikacja dotkliwości, ale standardy są
  niespójne, a czas usuwania nie jest śledzony względem jawnych celów.
- **Poziom 3, Standaryzacja:** Ustandaryzowana, zakotwiczona zewnętrznie ocena
  dotkliwości i jawne cele czasu usuwania według dotkliwości są stosowane
  spójnie, z naprawdę nieukarającą kulturą ujawniania.
- **Poziom 4, Zarządzanie:** Dług bezpieczeństwa jest śledzony w widocznym,
  policzalnym backlogu z chronioną zdolnością naprawczą; ustalanie priorytetów
  uwzględnia kontekst ekspozycji i możliwości wykorzystania, a nie samą
  dotkliwość.
- **Poziom 5, Orkiestracja:** Organizacja potrafi wskazać konkretne, mierzalne
  skrócenia czasu usuwania krytycznych podatności i wykazać trwałą, cieszącą się
  zaufaniem kulturę ujawniania, która daje uczciwe, kompleksowe dane o
  podatnościach.

## Pomysły do dyskusji

1. Jaki jest nasz obecny średni czas usuwania krytycznych podatności i czy spełnia jawny cel?
2. Czy inżynier, który wprowadził podatność, czułby się bezpiecznie, zgłaszając ją sam?
3. Czy mamy widoczny, policzalny backlog znanego długu bezpieczeństwa z zaakceptowanym ryzykiem?
4. Czy nasze ustalanie priorytetów usuwania uwzględnia rzeczywistą ekspozycję, czy tylko nominalną dotkliwość?
5. Czy klasyfikacja dotkliwości kiedykolwiek dryfowała w dół z czasem bez jasnego uzasadnienia?

## Kluczowe wnioski

- Śledź **czas usuwania według dotkliwości**, a nie surową liczbę podatności, jako
  podstawową metrykę kondycji bezpieczeństwa.
- Używaj **ustandaryzowanej zewnętrznej oceny dotkliwości** (takiej jak CVSS) jako
  spójnej linii bazowej, odpornej na ryzyko pobłażliwego dryfu, które zaprasza
  czysto wewnętrzny osąd.
- Zbuduj naprawdę **nieukarającą kulturę ujawniania**; karanie za zgłaszanie
  spycha realne ryzyko do podziemia.
- Traktuj **dług bezpieczeństwa jako kategorię długu technicznego** (temat 4.5),
  uczciwie konkurującą o chronioną zdolność naprawczą.
- Ważąc priorytety, uwzględniaj **rzeczywistą ekspozycję i możliwość
  wykorzystania**, a nie samą ocenę dotkliwości.

## Bibliografia i dalsza lektura

- Specyfikacja Common Vulnerability Scoring System (CVSS) organizacji FIRST.org:
  ustandaryzowane ramy oceny dotkliwości, do których odwołuje się ten temat.
- Zasoby OWASP Foundation o zarządzaniu podatnościami i praktykach bezpiecznego
  cyklu życia oprogramowania.
- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff i Niall Richard Murphy (red.) (zasady
  kultury bez szukania winnych, które ten temat stosuje do ujawniania
  podatności).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management
  Planning*: miarodajne wytyczne dotyczące praktyki usuwania podatności.
