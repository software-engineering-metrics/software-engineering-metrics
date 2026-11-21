# 5.5 Zwrot z inwestycji w inicjatywy inżynierskie

## Przegląd i motywacja

Ten temat zamyka część 5, łącząc wszystko, co zmierzyły cztery poprzednie
tematy, jakość, adopcję, rezultaty i koszt, w jedno finansowe ujęcie, które
ostatecznie rządzi większością dużych decyzji inwestycyjnych w inżynierii:
**[zwrot z inwestycji](https://en.wikipedia.org/wiki/Return_on_investment)
(ROI)**. Czy organizacja decyduje o sfinansowaniu modernizacji platformy,
dużego wysiłku refaktoryzacji, czy nowej linii produktowej, ktoś w końcu musi
odpowiedzieć na pytanie w kategoriach finansowych: czy to jest warte swojego
kosztu. Ten temat dotyczy uczciwej odpowiedzi na to pytanie, z użyciem metryk,
które ta książka już zbudowała, zamiast unikania pytania (co oddaje wpływ na
decyzje inwestycyjne ludziom gorzej przygotowanym do dobrej odpowiedzi) albo
odpowiadania przesadzonym, nie do utrzymania uzasadnieniem, które szkodzi
wiarygodności, gdy się nie sprawdza.

Dyscyplina, którą zaleca ten temat, opiera się bezpośrednio na ekonomii
jednostkowej z tematu 5.4 po stronie kosztów oraz na metrykach rezultatów z
tematu 5.3, z ich uczciwym podejściem do niepewności przypisania, po stronie
korzyści. Uzasadnienie ROI zbudowane w ten sposób jest z konieczności
skromniejsze i bardziej zastrzeżone niż prosta, atrakcyjna liczba w nagłówku, ale
ma decydującą zaletę, którą ta książka podkreślała od początku: przetrwa
kontrolę, a organizacja, która konsekwentnie buduje dające się obronić
uzasadnienia ROI, zdobywa więcej zaufania, a więc i autonomii w przyszłych
decyzjach inwestycyjnych, niż ta, która od czasu do czasu obiecuje za dużo.

W dużych zespołach dyscyplina ROI odróżnia organizację inżynierską traktowaną
jak partnera strategicznego od traktowanej jak centrum kosztów, którego wydatki
się toleruje, zamiast aktywnie w nie inwestować. Duże przedsiębiorstwa używają
rygorystycznych uzasadnień ROI, by skutecznie konkurować o kapitał z innymi
inwestycjami biznesowymi; organizacje publiczne stosują równoważną dyscyplinę,
często przeformułowaną jako analiza kosztów i korzyści, by zabezpieczyć i utrzymać
publiczne finansowanie technologii wobec presji politycznej i budżetowej, która
ma niewiele cierpliwości dla niejasnych, nieugruntowanych obietnic.

## Kluczowe zasady

- **Uczciwe uzasadnienie ROI buduje się z innych metryk tej książki**, a nie
  wymyśla osobno; koszt z tematu 5.4, korzyść z tematów od 5.1 do 5.3.
- **Po stronie kosztów należy całkowity koszt posiadania, a nie tylko koszt
  początkowy.** Bieżące utrzymanie, wsparcie i koszt infrastruktury kumulują się
  przez cały okres życia systemu.
- **Szacunki korzyści niosą niepewność; wyrażaj ją jawnie**, zamiast
  przedstawiać jedną, fałszywie precyzyjną liczbę.
- **Wynik ujemny lub marginalny ROI to uprawniony, użyteczny rezultat.**
  Dyscyplina istnieje po to, by uczciwie informować decyzje, a nie uzasadniać
  decyzje już podjęte.
- **Śledź rzeczywiste ROI po fakcie, a nie tylko prognozowane uzasadnienie z
  góry.** Prognoza, której nigdy nie zestawiono z rzeczywistością, niczego
  organizacji nie uczy.

## Rekomendacje

### Buduj stronę kosztów z całkowitego kosztu posiadania, a nie tylko z
początkowej inwestycji

Uwzględnij nie tylko początkowy koszt rozwoju, lecz pełny **[całkowity koszt
posiadania](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**:
bieżące utrzymanie, infrastrukturę (ekonomia jednostkowa z tematu 5.4 jest tu
bezpośrednio użyteczna), wsparcie oraz koszt alternatywny zdolności
inżynierskich pochłoniętych przez inicjatywę, które mogłyby pójść na inną pracę.
Projekt, który wygląda tanio, gdy patrzy się tylko na koszt początkowy, może być
drogi w całym okresie życia, gdy uczciwie uwzględni się bieżące obciążenie
utrzymaniem.

### Buduj stronę korzyści z udokumentowanych, uczciwych dowodów rezultatów

Czerp szacunki korzyści z dyscypliny pomiaru rezultatów z tematów od 5.1 do 5.3:
poprawy jakości przełożone na niższy koszt incydentów i wsparcia, dane o
adopcji przełożone na wartość wynikającą z użycia oraz korelacje rezultatów
biznesowych zbudowane uczciwym podejściem łańcucha przyczynowego ze sprawdzeniem
czynników zakłócających z tematu 5.3. Unikaj wymyślania szacunku korzyści z
pierwszych zasad albo optymistycznych założeń, gdy dostępne są faktycznie
zmierzone lub porównywalne dane historyczne, które mogą go ugruntować.

### Wyrażaj niepewność jawnie, używając przedziału zamiast jednej liczby

Przedstawiaj szacunki ROI jako przedział (przypadek zachowawczy i przypadek
optymistyczny), a nie jako jedną, fałszywie precyzyjną wartość, i wyjaśnij, co
ten przedział napędza: które konkretne założenie, jeśli okaże się optymistyczne
lub pesymistyczne, najbardziej przesunęłoby wynik. To odzwierciedla wprost zasadę
kompetencji statystycznych z tematu 1.6, zastosowaną do prognozy finansowej, i
chroni wiarygodność uzasadnienia, bo pojedyncza estymata punktowa, która okaże
się błędna, szkodzi zaufaniu znacznie bardziej niż dobrze wyjaśniony przedział, w
którym mieści się rzeczywisty wynik.

### Traktuj wynik ujemny lub marginalny jako uprawniony rezultat

Zbuduj proces analizy ROI tak, by naprawdę potrafił dojść do wniosku „to nie
jest warte zachodu", i traktuj ten wniosek, gdy wspierają go dowody, jako cenny
rezultat, a nie porażkę analizy. Organizacja znana z tego, że zawsze daje
pozytywne uzasadnienia ROI, bez względu na inicjatywę, szybko traci
wiarygodność, bo interesariusze słusznie wnioskują, że analiza nie jest
naprawdę niezależna od decyzji, którą ma informować.

### Śledź rzeczywiste rezultaty względem prognozowanego uzasadnienia i zamykaj pętlę publicznie

Po zakończeniu inicjatywy, lub osiągnięciu istotnego kamienia milowego, porównaj
rzeczywiście zmierzone rezultaty z pierwotnym przedziałem prognozy i opublikuj
to porównanie, także tam, gdzie prognoza się myliła. Ta dyscyplina zamykania
pętli, podobna do rekomendacji tematu 3.7 dotyczącej działań po ankiecie,
buduje długoterminową wiarygodność organizacji w prognozowaniu ROI i poprawia
dokładność przyszłych szacunków przez stworzenie realnej, widocznej pętli
sprzężenia zwrotnego.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Proste twierdzenie o ROI w jednej liczbie | Przekonujące, łatwe do przekazania | Fałszywie precyzyjne; narażone na błąd i szkodę dla wiarygodności |
| ROI w postaci przedziału z jawną niepewnością | Dające się obronić, przetrwa kontrolę, uczciwe co do tego, co napędza przedział | Trudniejsze do przedstawienia; wymaga więcej wysiłku analitycznego |
| Analiza samego kosztu początkowego | Prosta, szybka do przygotowania | Zaniża prawdziwy koszt, pomijając bieżące utrzymanie i obciążenie wsparciem |
| Pełna analiza całkowitego kosztu posiadania | Dokładny, kompletny obraz prawdziwego kosztu inwestycji | Wymaga zebrania więcej danych, zwłaszcza do prognozy kosztów bieżących |

Główne napięcie to **perswazyjna prostota kontra obronna uczciwość**, to samo
napięcie, które temat 5.3 nazwał dla twierdzeń o rezultatach w ogóle, tu
zastosowane konkretnie do uzasadnienia finansowego. Proste, pewne twierdzenie o
ROI w jednej liczbie łatwiej sprzedać decydentowi w danej chwili, ale uczciwe
uzasadnienie w postaci przedziału, z jawną niepewnością i pełnym rachunkiem
całkowitego kosztu posiadania, jest tym, co faktycznie wytrzymuje przez cały
okres życia inwestycji i chroni wiarygodność organizacji przy następnym
uzasadnieniu, które trzeba będzie przedstawić.

## Pytania do omówienia z zespołem

1. **Czy w naszym ostatnim dużym uzasadnieniu inwestycji inżynierskiej
   uwzględniliśmy całkowity koszt posiadania, czy tylko początkowy koszt
   rozwoju?** Wróć do pierwotnego uzasadnienia i sprawdź, czy ujęto bieżące
   utrzymanie i koszt infrastruktury, a jeśli nie, oszacuj, ile by dodały.

2. **Czy nasz szacunek korzyści opierał się na udokumentowanych, zmierzonych
   dowodach rezultatów, czy został zbudowany z optymistycznych założeń?**
   Prześledź stronę korzyści niedawnego uzasadnienia do jej faktycznego źródła
   dowodowego i oceń uczciwie, jak bardzo było ugruntowane.

3. **Czy kiedykolwiek przedstawiliśmy szacunek ROI jako jedną liczbę, gdy
   przedział byłby uczciwszy?** Omówcie, jak wyglądałby przedział dla niedawnego
   uzasadnienia i jakie konkretne założenie decydowało o jego szerokości.

4. **Czy nasz proces analizy ROI kiedykolwiek doszedł do wniosku, że
   inicjatywa nie jest warta realizacji, i jak ten wniosek przyjęto?** Jeśli
   każda dotychczasowa analiza kończyła się pozytywnie, omówcie uczciwie, czy to
   odzwierciedla naprawdę rozsądny dobór inicjatyw, czy proces, który zawsze
   daje odpowiedź, jaką chcą usłyszeć interesariusze.

5. **Czy dla zakończonej inicjatywy kiedykolwiek wróciliśmy i porównaliśmy
   rzeczywiste rezultaty z pierwotnym prognozowanym uzasadnieniem?** Jeśli nie,
   wybierzcie jedną prawdziwą, zakończoną inicjatywę i zróbcie to porównanie
   teraz jako ćwiczenie grupowe, choćby luka między prognozą a rzeczywistością
   okazała się niewygodna.

6. **Co byłoby potrzebne, by nasze następne duże uzasadnienie ROI dało się
   obronić pod prawdziwą, sceptyczną kontrolą kogoś spoza inżynierii?** Przejdź
   przez swoje następne planowane uzasadnienie i wskaż najsłabsze ogniwo jego
   obecnego łańcucha dowodowego, zanim trafi do decydenta.

## Perspektywa sektorowa

**Startup.** Formalna analiza ROI jest często mniej istotna niż prostsze pytanie
o przetrwanie i wzrost: czy ta inwestycja pomaga dotrzeć do następnego kamienia
milowego lub rundy finansowania. Mimo to stosuj tę samą zasadę uczciwości,
powstrzymaj się od zawyżania uzasadnienia dla decyzji, do której zespół jest już
emocjonalnie przywiązany, bo kontrola inwestorów w końcu zastosuje ten sam
sceptycyzm, który ten temat zaleca stosować najpierw wewnętrznie.

**Mała firma.** Utrzymuj analizę ROI proporcjonalną do wagi decyzji; duża,
wieloletnia inwestycja w platformę zasługuje na pełną dyscyplinę zalecaną w tym
temacie, a mały zakup narzędzia nie wymaga takiego samego rygoru. Skup wysiłek
formalnej analizy na kilku największych, najbardziej brzemiennych w skutki
decyzjach.

**Duże przedsiębiorstwo.** Dyscyplina ROI w tej skali decyduje o tym, czy
inżynieria skutecznie konkuruje o kapitał z innymi inwestycjami biznesowymi o
bardziej ugruntowanych tradycjach analizy finansowej. Wprowadź pełną dyscyplinę
całkowitego kosztu posiadania i przedziałów, zalecaną w tym temacie, jako
standardową praktykę i zainwestuj w śledzenie z zamykaniem pętli, które buduje
długoterminową wiarygodność prognoz.

**Administracja publiczna.** Analiza kosztów i korzyści, sektorowy odpowiednik
ROI, jest często formalnym, wymaganym elementem uzasadnienia budżetu, a uczciwość
co do niepewności i całkowitego kosztu posiadania jest szczególnie ważna tam,
gdzie ustalenia mogą podlegać zewnętrznemu audytowi lub kontroli parlamentarnej.
Analiza, która zawyżyła korzyści lub zaniżyła koszty, po wykryciu powoduje
trwałą szkodę dla wiarygodności programu wobec organu finansującego.

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierskie firmy z branży technologii
logistycznych zaproponowało dużą inwestycję w migrację starszego monolitu do
architektury mikrousług, początkowo przedstawiając jedną, optymistyczną liczbę
ROI opartą głównie na prognozowanej poprawie częstotliwości wdrożeń.
Sceptyczne pytania interesariusza z finansów ujawniły, że uzasadnienie nie
uwzględniło znacznej bieżącej złożoności operacyjnej i kosztu infrastruktury,
które wprowadzi nowa architektura. Zrewidowane uzasadnienie, zbudowane z pełnym
całkowitym kosztem posiadania i przedziałem odzwierciedlającym zarówno
zachowawcze, jak i optymistyczne scenariusze poprawy dostarczania, pokazało
skromniejszy, ale nadal pozytywny oczekiwany zwrot i, co kluczowe, przetrwało
kontrolę zespołu finansowego i zdobyło finansowanie, czego pierwotne,
przesadzone uzasadnienie zapewne by nie zrobiło.

**Administracja publiczna.** Program cyfryzacji akt sądowych rządu stanowego
zbudował pierwotne uzasadnienie kosztów i korzyści wyłącznie wokół oszczędności
administracyjnych, z jedną, precyzyjną liczbą ROI. Przegląd niezależnego biura
budżetowego wykazał, że prognoza nie uwzględniła oszczędności czasu po stronie
obywateli ani mniejszej liczby błędów w postępowaniach prawnych, korzyści
realnych, ale pominiętych, bo trudniejszych do ilościowego ujęcia niż koszty
administracyjne. Zrewidowana analiza włączyła te korzyści z jawnie podanym
przedziałem odzwierciedlającym rzeczywistą niepewność pomiaru, dając mocniejsze
i, co ważne, lepiej dające się obronić uzasadnienie, które biuro budżetowe
ostatecznie zatwierdziło właśnie dlatego, że było przejrzyste co do tego, co
wie z pewnością, a czego nie.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rygorystycznej dyscypliny ROI jest, nieco rekurencyjnie, wiarygodność
samej dyscypliny ROI: organizacja, która konsekwentnie buduje uczciwe, dające
się obronić uzasadnienia, w tym od czasu do czasu dochodząc do wniosku, że
inicjatywa nie jest warta realizacji, zdobywa większe zaufanie, a więc więcej
autonomii w przyszłych decyzjach inwestycyjnych, niż ta, której uzasadnienia
budzą sceptycyzm, bo już wcześniej obiecywały za dużo. Przykład firmy
logistycznej pokazuje to wprost: zrewidowane, skromniejsze, ale uczciwe
uzasadnienie odniosło sukces tam, gdzie napompowane pierwotne zapewne
poniosłoby porażkę pod kontrolą.

Całkowity koszt posiadania tej dyscypliny to wysiłek analityczny, by zbudować
pełne szacunki kosztów całkowitego kosztu posiadania, ugruntować szacunki korzyści
w prawdziwych dowodach, wyrażać niepewność jawnie i śledzić rzeczywiste
rezultaty po fakcie. Ten wysiłek to naprawdę więcej pracy niż szybka, pewna
oferta w jednej liczbie i warto go ponieść właśnie dlatego, że alternatywa
naraża wiarygodność organizacji dla każdego przyszłego uzasadnienia, które
będzie musiała przedstawić.

## Antywzorce i pułapki

- **Analiza samego kosztu początkowego, z pominięciem całkowitego kosztu
  posiadania:** zaniża prawdziwy koszt inwestycji, szczególnie dla systemów
  długo żyjących.
- **Wymyślanie szacunków korzyści z optymistycznych założeń zamiast z
  udokumentowanych dowodów:** daje uzasadnienie, które nie przetrwa kontroli.
- **Przedstawianie jednej, fałszywie precyzyjnej liczby ROI zamiast
  podanego przedziału:** szkodzi wiarygodności, gdy rzeczywisty wynik różni się
  od estymaty punktowej.
- **Proces analizy, który zawsze daje pozytywne wnioski:** interesariusze
  słusznie odczytują to jako dowód, że proces nie jest naprawdę niezależny.
- **Brak śledzenia rzeczywistych rezultatów względem pierwotnej prognozy:**
  gubi pętlę sprzężenia zwrotnego, która poprawiłaby dokładność przyszłych
  prognoz.
- **Budowanie uzasadnienia, by usprawiedliwić decyzję, do której jest się już
  emocjonalnie przywiązanym, zamiast naprawdę ją informować:** główna przyczyna
  większości napompowanych uzasadnień ROI.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Uzasadnienia ROI są nieformalne, niepoparte
  udokumentowanymi dowodami i niemal zawsze kończą się pozytywnie, niezależnie od
  inicjatywy.
- **Poziom 2, Rozwój:** Niektóre uzasadnienia zawierają szacunki kosztów i
  korzyści, ale całkowity koszt posiadania jest stosowany niespójnie, a niepewność
  rzadko wyrażana jawnie.
- **Poziom 3, Standaryzacja:** Uzasadnienia ROI konsekwentnie stosują pełny
  całkowity koszt posiadania, udokumentowane dowody korzyści i podany przedział
  odzwierciedlający prawdziwą niepewność, w całej organizacji.
- **Poziom 4, Zarządzanie:** Rzeczywiste rezultaty są śledzone względem
  pierwotnych prognoz po zakończeniu, a porównanie jest publikowane i używane do
  poprawy przyszłego prognozowania.
- **Poziom 5, Orkiestracja:** Organizacja ma wykazaną, wieloletnią historię
  trafnego, uczciwego prognozowania ROI, w tym przypadki, które słusznie
  doszły do wniosku, że inicjatywa nie jest warta realizacji, a ta historia
  zapewnia inżynierii zaufane miejsce w strategicznych decyzjach inwestycyjnych.

## Pomysły do dyskusji

1. Jakie jest nasze największe obecne uzasadnienie inwestycji i czy dziś przetrwałoby naprawdę sceptyczną kontrolę?
2. Czy kiedykolwiek porównaliśmy rzeczywisty rezultat zakończonej inicjatywy z jej pierwotną prognozą ROI?
3. Co musiałoby się zmienić w naszym procesie analizy, by naprawdę potrafił dojść do wniosku „nie warto"?
4. Którego składnika całkowitego kosztu posiadania najczęściej brakuje w naszych obecnych szacunkach kosztów?
5. Jakie jest pojedyncze najsłabsze ogniwo dowodowe w naszym następnym planowanym dużym uzasadnieniu inwestycji?

## Kluczowe wnioski

- Buduj uzasadnienia ROI z **innych metryk tej książki**, koszt z ekonomii
  jednostkowej (temat 5.4), korzyść z udokumentowanych dowodów rezultatów
  (tematy od 5.1 do 5.3), a nie z wymyślonych założeń.
- Uwzględniaj **całkowity koszt posiadania**, a nie tylko koszt początkowy, i
  wyrażaj szacunki korzyści jako **przedział z jawną niepewnością**, a nie jedną,
  fałszywie precyzyjną liczbę.
- Zbuduj proces, który naprawdę potrafi dojść do wniosku, że inicjatywa **nie
  jest warta realizacji**; analiza, która zawsze daje pozytywne wnioski, nie jest
  wiarygodna.
- **Śledź rzeczywiste rezultaty względem prognozy** po zakończeniu i publikuj
  porównanie, by budować długoterminową wiarygodność prognoz.
- Uczciwa, dająca się obronić dyscyplina ROI jest tym, co z czasem zapewnia
  inżynierii **zaufane miejsce** w strategicznych decyzjach inwestycyjnych.

## Bibliografia i dalsza lektura

- *How to Measure Anything*, Douglas W. Hubbard (kwantyfikowanie niepewnej
  wartości i budowanie dających się obronić szacunków w postaci przedziałów).
- *Cloud FinOps*, J.R. Storment i Mike Fuller (dyscyplina całkowitego kosztu
  posiadania dla inwestycji w infrastrukturę chmurową).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble i Gene Kim (podstawa badawcza łączenia inwestycji w praktyki
  dostarczania ze zwrotem biznesowym).
- Okólnik A-94 amerykańskiego Office of Management and Budget, wytyczne dotyczące
  analizy kosztów i korzyści dla programów federalnych (dyscyplina ROI w sektorze
  publicznym).
