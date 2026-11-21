# 4.4 Analiza statyczna i metryki zapachów kodu

## Przegląd i motywacja

Narzędzia **[analizy statycznej](https://en.wikipedia.org/wiki/Static_program_analysis)**
skanują kod źródłowy bez jego wykonywania, oflagowując wzorce, o których
wiadomo, że korelują z defektami, podatnościami bezpieczeństwa lub problemami
z łatwością utrzymania: nieosiągalny kod, niezamknięte zasoby, podejrzane
rzutowania typów, zduplikowaną logikę i szerszą kategorię **zapachów kodu**,
czyli wzorców strukturalnych, które niekoniecznie są błędami, ale zwykle
utrudniają zrozumienie, testowanie lub bezpieczną zmianę kodu. Analiza
statyczna to zautomatyzowana, ciągła warstwa pod bardziej celowanymi
metrykami z pozostałych tematów tej części, działająca przy każdym commicie i
ujawniająca problemy w chwili ich wprowadzenia, zamiast czekać na okresowy
audyt.

Główną troską tego tematu jest luka między tym, co raportują narzędzia
analizy statycznej, a tym, co faktycznie ma znaczenie. Narzędzie może
oflagować tysiące ustaleń w dużej bazie kodu, a sama liczba ustaleń jest
słabą metryką, bo zlewa trywialne preferencje stylistyczne z prawdziwym,
poważnym ryzykiem i można ją obniżyć przez tłumienie równie łatwo jak przez
realne poprawki. Wartość analizy statycznej bierze się nie z surowej liczby
ustaleń, lecz z tego, jak dobrze organizacja ocenia wagę, zapobiega regresji i
opiera się pokusie traktowania osądu narzędzia jako zamiennika przeglądu
ludzkiego, a nie jego uzupełnienia.

W dużych zespołach analiza statyczna to jedyny praktyczny sposób na
wymuszenie bazowego poziomu jakości kodu i higieny bezpieczeństwa w bazie
kodu większej, niż jakikolwiek zespół może przejrzeć ręcznie w całości. Duże
przedsiębiorstwa i administracja publiczna, często mierzące się z
wymaganiami zgodności dotyczącymi praktyk bezpiecznego kodowania, polegają na
analizie statycznej jako udokumentowanym, audytowalnym dowodzie, że bazowy
poziom kontroli stosowano spójnie, a nie tylko wtedy, gdy ludzki recenzent
akurat zauważył problem.

## Kluczowe zasady

- **Surowa liczba ustaleń to sama w sobie słaba metryka.** Zlewa problemy
  trywialne i poważne i można nią manipulować przez tłumienie zamiast
  prawdziwych poprawek.
- **Ocena wagi liczy się bardziej niż objętość.** Niewielka liczba krytycznych
  ustaleń zasługuje na więcej uwagi niż duża liczba trywialnych.
- **Analiza statyczna uzupełnia przegląd ludzki, a nie go zastępuje.**
  Narzędzia wychwytują wzorce, ale nie rozumieją intencji ani kontekstu
  biznesowego.
- **Trend "nowo wprowadzonych problemów" jest bardziej użyteczny niż łączna
  liczba zaległości.** Mówi, czy obecna praktyka się poprawia, czy pogarsza.
- **Fałszywe alarmy podkopują zaufanie do narzędzia.** Niezarządzany odsetek
  fałszywych alarmów prowadzi do ignorowania ustaleń hurtem, także tych
  prawdziwych.

## Rekomendacje

### Śledź ustalenia ważone wagą, a nie surową liczbę

Skonfiguruj narzędzia analizy statycznej tak, by klasyfikowały ustalenia
według wagi (krytyczne, wysokie, średnie, niskie lub równoważna skala) i
śledź trend ważony wagą zamiast płaskiej łącznej liczby. Baza kodu z zerem
krytycznych ustaleń i pięciuset niskimi sugestiami stylistycznymi jest w
bardzo innym stanie niż taka z pięćdziesięcioma krytycznymi ustaleniami i
zupełnie bez problemów stylistycznych, a surowa liczba traktuje je jako
mniej więcej równoważne, choć takie nie są.

### Stawiaj bramkę na nowo wprowadzone ustalenia, a nie na całe zaległości historyczne

Większość ugruntowanych baz kodu niesie spuściznę zaległych ustaleń sprzed
obecnych praktyk, których naprawa naraz byłaby prohibicyjnie kosztowna.
Zamiast blokować całą pracę, dopóki cała zaległość nie zostanie wyczyszczona,
postaw bramkę w CI na tym, czy konkretna zmiana wprowadza nowe ustalenia
powyżej uzgodnionego progu wagi, pozwalając, by zaległość kurczyła się
stopniowo w ramach zwykłego utrzymania, a jednocześnie zapobiegając dalszemu
kumulowaniu. To rozróżnienie odpowiada zaleceniu dolnej granicy pokrycia z
tematu 4.2: chroń przed regresją zamiast żądać nierealistycznej naprawy
wszystkiego naraz.

### Aktywnie zarządzaj odsetkiem fałszywych alarmów

Okresowo przeglądaj próbkę ustaleń, szczególnie w którejkolwiek kategorii o
dużej objętości, i sprawdzaj, ile z nich to rzeczywiste fałszywe alarmy,
przypadki, w których narzędzie oflagowało wzorzec, który w kontekście nie
jest faktycznie problematyczny. Dostrój konfigurację reguł, by tłumić
konkretnie naprawdę zaszumione, mało wartościowe kategorie reguł, zamiast
pozwalać zespołom wyrobić nawyk ignorowania wyników narzędzia hurtem, bo za
dużo z nich to szum. Wysoki, niezarządzany odsetek fałszywych alarmów to
najszybszy sposób na zniszczenie wiarygodności programu analizy statycznej.

### Używaj ustaleń analizy statycznej jako bodźca do przeglądu, a nie automatycznego wyroku

Nawet zasadne ustalenie, które nie jest fałszywym alarmem, nie zawsze
wymaga automatycznej, obowiązkowej poprawki. Niektóre oflagowane wzorce są
akceptowalne w konkretnym kontekście, którego narzędzie nie widzi. Zbuduj
lekki proces, w którym człowiek przegląda ustalenie i albo je naprawia, albo
jawnie, widocznie od niego odstępuje z udokumentowanym uzasadnieniem, zamiast
ślepo egzekwować każde ustalenie jako obowiązkowe albo dopuszczać ciche,
niedokumentowane tłumienie, które z czasem podkopuje wartość narzędzia.

### Łącz analizę statyczną z pozostałymi metrykami jakości kodu z tej części

Ustalenia analizy statycznej, wyniki złożoności (temat 4.1) i dane o punktach
zapalnych (temat 4.3) to komplementarne dowody, a nie konkurujące metryki.
Plik z dużym skupieniem nierozwiązanych ustaleń analizy statycznej, który jest
też punktem zapalnym rotacji i złożoności, jest szczególnie mocnym kandydatem
do priorytetowej uwagi, bo wiele niezależnych sygnałów zbiega się w tym samym
wniosku.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Surowa liczba ustaleń jako metryka | Prosta do raportowania | Zlewa problemy trywialne i poważne; łatwo nią manipulować przez tłumienie |
| Trend ważony wagą | Dokładniej odzwierciedla faktyczne ryzyko | Wymaga ciągłego utrzymywania klasyfikacji wagi |
| Bramka na całe zaległości historyczne | Maksymalizuje docelową czystość kodu | Często niepraktyczna dla ugruntowanych baz kodu; może zatrzymać całą pracę |
| Bramka tylko na nowe ustalenia | Praktyczna, zapobiega regresji, pozwala zaległościom kurczyć się stopniowo | Stare problemy utrzymują się dłużej bez celowego planu naprawy |

Główne napięcie to **dokładność kontra praktyczność**. Polityka analizy
statycznej, która żąda rozwiązania całych zaległości historycznych, zanim
ruszy jakakolwiek nowa praca, jest dokładna, ale zwykle niepraktyczna dla
każdej bazy kodu z prawdziwą historią, a zespoły pod taką presją skłaniają
się do hurtowego tłumienia ustaleń zamiast ich prawdziwej naprawy. Rozwiąż to
napięcie, stawiając bramkę ściśle na nowych ustaleniach, a jednocześnie
prowadząc osobny, celowo rozłożony w czasie wysiłek naprawczy wobec starych
zaległości, priorytetyzowany technikami wagi i zestawiania, które zalecają ten
temat i temat 4.3.

## Pytania do omówienia z zespołem

1. **Czy śledzimy trend ważony wagą, czy tylko surową łączną liczbę
   ustaleń?** Wyciągnij swój faktyczny panel i sprawdź. Surowa liczba jest
   domyślna w wielu narzędziach i często wymaga celowej konfiguracji, by
   zamiast niej poprawnie ujawnić wagę.

2. **Jakie są nasze obecne stare zaległości nierozwiązanych ustaleń i czy
   mamy celowy, rozłożony w czasie plan ich zmniejszania, czy po prostu
   rosną bez końca?** Nieadresowana, cicho rosnąca zaległość jest częsta i
   warto ją uczciwie nazwać, zamiast zostawiać nieprzebadaną.

3. **Jaki jest szacowany odsetek fałszywych alarmów w naszych kategoriach
   ustaleń o największej objętości i czy dostroiliśmy w odpowiedzi
   konfigurację reguł?** Jeśli nigdy tego nie sprawdzałeś, pobierz próbkę
   ustaleń z najbardziej zaszumionej kategorii i oceń uczciwie, ile z nich
   faktycznie nadaje się do działania.

4. **Czy inżynierowie w naszym zespole ufają ustaleniom analizy statycznej,
   czy nauczyli się je wyłączać z uwagi, bo zbyt wiele wyników to szum?**
   To bezpośrednie, szczere pytanie kontrolne warte zadania zespołowi, bo
   narzędzie, które jest ignorowane, nie daje realnej wartości bez względu
   na teoretyczne możliwości.

5. **Jak obecnie postępujemy z zasadnym ustaleniem, od którego zespół uważa,
   że w konkretnym kontekście należy odstąpić?** Sprawdź, czy twój proces
   czyni to widoczną, udokumentowaną decyzją, czy odbywa się przez ciche,
   niedokumentowane tłumienie, które z czasem podkopuje sygnał narzędzia.

6. **Gdzie ustalenia analizy statycznej, wyniki złożoności i dane o punktach
   zapalnych zbiegają się na tym samym pliku lub module?** Zestaw te trzy
   sygnały jawnie. Zbieżność wielu niezależnych metryk jest silniejszym
   sygnałem priorytetyzacji niż którakolwiek z nich osobno.

## Perspektywa sektorowa

**Startup.** Lekkie, darmowe narzędzie analizy statycznej zintegrowane z CI od
początku to tani zakład ubezpieczeniowy, który wcześnie wychwytuje prawdziwe
problemy, zanim jakakolwiek stara zaległość zdąży się nagromadzić. Trzymaj
zestaw reguł skupiony na naprawdę wartościowych, mało zaszumionych
kategoriach zamiast włączać od razu każdą dostępną regułę.

**Mała firma.** Większość nowoczesnych ekosystemów języków zawiera sprawne,
darmowe narzędzia analizy statycznej. Włączenie ich w CI z rozsądnym domyślnym
zestawem reguł wymaga niewielkiej inwestycji. Skup się na bramkowaniu nowych
ustaleń, zamiast próbować rozwiązać naraz jakiekolwiek istniejące zaległości.

**Duże przedsiębiorstwo.** Świadome zarządzanie odsetkiem fałszywych alarmów i
oceną wagi staje się tu niezbędne, bo źle dostrojone narzędzie generujące
nadmierny szum w dziesiątkach zespołów będzie ignorowane w całej organizacji.
Zainwestuj w dedykowanego właściciela samej konfiguracji narzędzi analizy
statycznej, traktując strojenie reguł jako stałą dyscyplinę, a nie
jednorazowe zadanie konfiguracyjne.

**Administracja publiczna.** Ustalenia analizy statycznej, zwłaszcza związane
z bezpieczeństwem, są często bezpośrednio istotne dla wymagań zgodności i
audytu. Utrzymuj udokumentowany, audytowalny proces tego, jak ustalenia są
oceniane, naprawiane lub formalnie odrzucane z zapisanym uzasadnieniem, bo ta
dokumentacja jest często tym, co zewnętrzny audytor będzie chciał zobaczyć.

## Przykłady

**Przedsiębiorstwo.** Panel analizy statycznej firmy programistycznej
nagromadził ponad czterdzieści tysięcy nierozwiązanych ustaleń w bazie kodu
po kilku latach bez oceny ważonej wagą, liczbę tak dużą, że inżynierowie w
dużej mierze przestali w ogóle patrzeć na panel. Poprawione podejście
sklasyfikowało ustalenia według wagi, stwierdziło, że mniej niż dwieście
jest naprawdę krytycznych, i postawiło bramkę w CI konkretnie na nowych
ustaleniach krytycznych i o wysokiej wadze, pozostawiając zaległość o niskiej
wadze do stopniowego kurczenia w ramach zwykłego utrzymania kodu. W ciągu
sześciu miesięcy krytyczne ustalenia spadły do pojedynczych cyfr, a co
ważniejsze, dane z ankiety wśród inżynierów pokazały odnowione zaufanie do
wyników narzędzia, bo ujawniało teraz możliwy do ogarnięcia, naprawdę
użyteczny sygnał zamiast przytłaczającej, ignorowanej zaległości.

**Administracja publiczna.** Polityka bezpieczeństwa łańcucha dostaw
oprogramowania agencji obronnej wymagała skanowania analizą statyczną z zerem
nierozwiązanych ustaleń przed każdym wydaniem. W praktyce polityka ta
doprowadziła zespoły programistyczne do tłumienia dużej liczby ustaleń, w tym
niektórych prawdziwych problemów bezpieczeństwa, tylko po to, by dotrzymać
terminów wydań pod niewykonalną bramką wszystko albo nic. Poprawiona polityka
wymagała zera nowych ustaleń krytycznych lub o wysokiej wadze wprowadzonych
przez dane wydanie, w połączeniu z udokumentowanym, śledzonym planem naprawy
i harmonogramem dla starych zaległości, przeglądanymi kwartalnie przez radę
nadzoru bezpieczeństwa. To praktyczne, etapowe podejście zarówno przywróciło
prawdziwą kontrolę bezpieczeństwa nowemu kodowi, jak i dało realny,
mierzalny postęp w starych zaległościach w ciągu osiemnastu miesięcy, w
przeciwieństwie do niewykonalnej poprzedniej polityki, która głównie
produkowała tłumienie, a nie prawdziwe poprawki.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrot z dobrze zarządzanej analizy statycznej to wychwytywanie realnych
defektów i podatności bezpieczeństwa, zanim trafią na produkcję, przy koszcie
znacznie niższym, niż wymagałby równoważny wysiłek przeglądu ludzkiego dla
tego samego pokrycia. Przykład agencji obronnej powyżej pokazuje koszt
błędu: niewykonalna polityka wszystko albo nic faktycznie zmniejszyła prawdziwą
kontrolę bezpieczeństwa, napędzając tłumienie, czyli odwrotność swojej
intencji.

Całkowity koszt posiadania obejmuje same narzędzia, często darmowe lub tanie
dla popularnych ekosystemów języków, oraz stałą dyscyplinę oceny wagi,
zarządzania fałszywymi alarmami i planowania naprawy starych zaległości. To
stała dyscyplina, bardziej niż samo narzędzie, decyduje o tym, czy program
analizy statycznej daje prawdziwą, zaufaną wartość, czy degeneruje się w
ignorowany szum.

## Antywzorce i pułapki

- **Traktowanie surowej liczby ustaleń jako metryki:** zlewa problemy
  trywialne i poważne i łatwo nią manipulować przez tłumienie.
- **Wymaganie rozwiązania całych zaległości historycznych, zanim ruszy
  jakakolwiek nowa praca:** zwykle niepraktyczne i napędza tłumienie zamiast
  prawdziwych poprawek.
- **Ignorowanie odsetka fałszywych alarmów:** niezarządzany poziom szumu
  prowadzi zespoły do całkowitego wyłączenia wyników narzędzia z uwagi, także
  prawdziwych ustaleń.
- **Ciche, niedokumentowane tłumienie zasadnych ustaleń:** podkopuje sygnał
  narzędzia i nie zostawia śladu audytowego dla celów zgodności.
- **Traktowanie ustalenia analizy statycznej jako automatycznego wyroku bez
  przeglądu ludzkiego:** pomija kontekst, którego narzędzie nie widzi.
- **Nigdy nie zestawianie ustaleń z danymi o złożoności i punktach
  zapalnych:** pomija silniejszy sygnał priorytetyzacji, jaki daje zbieżny
  dowód.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Analizy statycznej się nie uruchamia albo ustalenia
  kumulują się bez zarządzania, bez oceny wagi i śledzenia trendu.
- **Poziom 2, Rozwój:** Pewna analiza statyczna działa w CI, ale ocena wagi
  jest niespójna, a odsetek fałszywych alarmów jest niezarządzany.
- **Poziom 3, Standaryzacja:** Ustalenia są ważone wagą, a CI stawia bramkę na
  nowych ustaleniach krytycznych i o wysokiej wadze, w całej organizacji.
- **Poziom 4, Zarządzanie:** Odsetek fałszywych alarmów jest aktywnie
  dostrajany, stare zaległości mają udokumentowany, rozłożony w czasie plan
  naprawy, a odstępstwa są widoczne i udokumentowane.
- **Poziom 5, Orkiestracja:** Ustalenia analizy statycznej, dane o złożoności
  i punktach zapalnych są rutynowo zestawiane, by ustalać priorytety
  inwestycji, a organizacja potrafi wskazać konkretne, mierzalne poprawy
  defektów lub bezpieczeństwa wynikające z programu.

## Pomysły do dyskusji

1. Jaki jest nasz obecny trend ważony wagą i czy się poprawia, czy pogarsza?
2. Jak duże są nasze stare zaległości ustaleń i czy mamy celowy plan ich zmniejszania?
3. Jaki jest szacowany odsetek fałszywych alarmów w naszej najbardziej zaszumionej kategorii ustaleń?
4. Czy inżynierowie w naszym zespole ufają dziś wynikom analizy statycznej, czy je ignorują?
5. Gdzie w naszej bazie kodu ustalenia analizy statycznej zbiegają się z danymi o złożoności lub punktach zapalnych?

## Kluczowe wnioski

- Śledź **trend ważony wagą**, a nie surową liczbę ustaleń, która zlewa
  problemy trywialne i poważne.
- Stawiaj bramkę w CI na **nowo wprowadzonych ustaleniach**, a nie na całych
  zaległościach historycznych, by zapobiegać regresji, nie żądając
  niepraktycznej naprawy wszystkiego naraz.
- Aktywnie zarządzaj **odsetkiem fałszywych alarmów**. Niezarządzany szum
  niszczy zaufanie do narzędzia i prowadzi do ignorowania ustaleń hurtem.
- Traktuj ustalenia jako **bodziec do przeglądu ludzkiego**, z widocznymi,
  udokumentowanymi odstępstwami, a nie automatyczny wyrok czy ciche tłumienie.
- Zestawiaj analizę statyczną z **danymi o złożoności i punktach zapalnych**
  (tematy 4.1, 4.3), by uzyskać zbieżne, silniejsze dowody do priorytetyzacji.

## Bibliografia i dalsza lektura

- *Static Program Analysis*, Anders Møller i Michael I. Schwartzbach
  (teoretyczne i praktyczne podstawy technik analizy statycznej).
- Wytyczne OWASP dotyczące statycznego testowania bezpieczeństwa aplikacji
  (SAST), część szerszych zasobów OWASP Foundation o praktykach bezpiecznego
  tworzenia oprogramowania.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler
  (katalog zapachów kodu, z którego korzysta wiele narzędzi analizy
  statycznej).
- *Working Effectively with Legacy Code*, Michael Feathers (zarządzanie starymi
  zaległościami problemów jakości w ugruntowanej bazie kodu).
