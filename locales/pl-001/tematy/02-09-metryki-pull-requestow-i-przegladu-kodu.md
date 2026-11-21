# 2.9 Metryki pull requestów i przeglądu kodu

## Przegląd i motywacja

[Przegląd kodu](https://en.wikipedia.org/wiki/Code_review) jest zwykle największym
pojedynczym źródłem czasu oczekiwania w rozkładzie czasu cyklu z tematu 2.6 i jest
też etapem najbardziej bezpośrednio podlegającym poprawie przez sam zespół, w
przeciwieństwie do wspólnego wąskiego gardła platformy czy zależności
zewnętrznej. Ten temat omawia konkretne metryki, które żyją wewnątrz etapu
przeglądu: czas do pierwszego przeglądu, rozmiar pull requesta, liczbę iteracji
przeglądu i rozkład obciążenia recenzentów, oraz to, jak używać ich do poprawy
szybkości przeglądu bez poświęcania faktycznej korzyści jakościowej, którą przegląd
ma dawać.

Ryzyko, na które ten temat jest najbardziej wyczulony, to takie, którego ta książka
jeszcze wprost nie omówiła: optymalizowanie szybkości przeglądu może po cichu
erodować jego jakość, jeśli prowadzi się je beztrosko. Zespół, który o połowę
skraca czas do pierwszego przeglądu, zatwierdzając wszystko bez czytania, poprawił
metrykę, niszcząc faktyczną wartość praktyki. Każda rekomendacja w tym temacie
jest pisana z uwzględnieniem tego kompromisu, bo metryki pull requestów należą do
najłatwiejszych w tej książce do zmanipulowania w sposób, który dobrze wygląda na
panelu, a sprawia, że bazowy kod mierzalnie się pogarsza.

Dla dużych zespołów metryki przeglądu ujawniają problemy z równoważeniem obciążenia,
które są skądinąd niewidoczne: niewielka liczba starszych inżynierów pochłaniająca
nieproporcjonalny udział obciążenia przeglądami, konkretny zespół lub obszar bazy
kodu, w którym przeglądy konsekwentnie utykają, albo wzorzec zbyt dużych pull
requestów, które uniemożliwiają dokładny przegląd praktycznie niezależnie od
staranności recenzenta. Te wzorce kumulują się w skali znacznie bardziej niż w
małym zespole, gdzie każdy widzi brak równowagi bezpośrednio i nie potrzebuje
metryki, by go wydobyć.

## Kluczowe zasady

- **Czas do pierwszego przeglądu jest zwykle największą dźwignią, a nie sama
  dokładność przeglądu.** Większość opóźnień pochodzi z tego, że pull request czeka
  na spojrzenie, a nie z tego, że rozmowa przeglądowa trwa długo po jej
  rozpoczęciu.
- **Mniejsze pull requesty są przeglądane szybciej i dokładniej, a nie tylko
  szybciej.** Rozmiar jest punktem dźwigni zarówno dla szybkości, jak i jakości
  jednocześnie.
- **Szybkość i jakość przeglądu nie pozostają automatycznie w napięciu, ale mogą
  być beztrosko wymieniane.** Zabezpiecz się przed tą wymianą jawnie.
- **Brak równowagi obciążenia recenzentów jest częsty i zwykle niewidoczny bez
  metryki.** Niewielka liczba osób często pochłania nieproporcjonalny udział.
- **Te metryki są narażone na ryzyko manipulowania przez pieczątkowanie.** Szybkie
  zatwierdzenie bez prawdziwej kontroli niweczy cały cel przeglądu.

## Rekomendacje

### Śledź czas do pierwszego przeglądu jako główną metrykę szybkości

Mierz odstęp od otwarcia pull requesta do pierwszego merytorycznego komentarza lub
zatwierdzenia recenzenta, instrumentowany automatycznie z platformy kontroli wersji.
To zwykle dominujące źródło czasu oczekiwania w etapie przeglądu (temat 2.5, temat
2.6), a jego poprawa, przez jaśniejsze normy przypisywania przeglądów, praktyki
powiadomień lub dedykowane bloki czasu na przeglądy, zwykle daje największą
pojedynczą poprawę ogólnego czasu cyklu dostępną dla zespołu.

### Śledź rozmiar pull requesta i aktywnie zachęcaj do mniejszych zmian

Mierz liczbę zmienionych linii lub dotkniętych plików na pull request i traktuj
stale dużą medianę rozmiaru jako sygnał wart bezpośredniego zajęcia się.
Mniejsze pull requesty są przeglądane szybciej, dokładniej (recenzent faktycznie
może zmieścić całą zmianę w głowie) i łatwiej je wycofać, gdy coś pójdzie nie tak,
co łączy się bezpośrednio z zasadą wielkości partii stojącą za częstotliwością
wdrożeń w temacie 2.10. Zachęcaj do dzielenia dużych zmian na sekwencję mniejszych,
niezależnie przeglądalnych pull requestów wszędzie, gdzie pozwala na to praca.

### Monitoruj jawnie rozkład obciążenia recenzentów

Śledź liczbę przeglądów ukończonych przez osobę w oknie kroczącym i obserwuj
konkretnie, czy niewielka liczba osób nie pochłania nieproporcjonalnego udziału.
Ten wzorzec jest częsty, często spada na najstarszych lub najbardziej zaufanych
inżynierów i tworzy zarówno wąskie gardło (ich dostępność ogranicza przepustowość
przeglądów całego zespołu), jak i ryzyko wypalenia (temat 3.2 omawia metryki
dobrostanu dokładniej). Rotuj odpowiedzialność za przeglądy celowo, zamiast pozwalać,
by koncentrowała się z założenia wokół tego, kto najszybciej odpowiada.

### Zabezpiecz się jawnie przed ryzykiem manipulowania przez pieczątkowanie

Paruj czas do pierwszego przeglądu z sygnałem jakości: odsetkiem defektów lub
incydentów wyśledzonych do zmian zatwierdzonych bez żadnego komentarza przeglądowego
albo odsetkiem poprawek po scaleniu potrzebnych dla niedawno przeglądanego kodu.
Zespół, który poprawia szybkość przeglądu, zatwierdzając bez prawdziwej kontroli,
powinien zobaczyć pogorszenie tej bariery ochronnej, co jest dokładnie zasadą
parowania z tematu 1.2 zastosowaną do tej konkretnej rodziny metryk. Nigdy nie goń
za szybkością przeglądu bez tej metryki równoważącej w polu widzenia.

### Używaj liczby iteracji przeglądu do wychwytywania tarcia, a nie do oceniania jednostek

Liczba rund przeglądu, przez które pull request przechodzi przed scaleniem, może
sygnalizować prawdziwe tarcie, niejasne wymagania, niezgodę co do podejścia,
niespójne oczekiwania co do stylu, warte zbadania na poziomie procesu. Unikaj
używania tej liczby do bezpośredniego oceniania poszczególnych autorów lub
recenzentów; wysoka liczba iteracji jest częściej sygnałem systemowym lub
komunikacyjnym niż osobistym, a traktowanie jej jak indywidualnej karty wyników grozi
dokładnie tym dryfem ku ocenie, przed którym ostrzega temat 1.1.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Optymalizacja wyłącznie pod czas do pierwszego przeglądu | Szybki, jasny sygnał, łatwy do zinstrumentowania | Może zachęcać do powierzchownego, pieczątkowego przeglądu bez bariery ochronnej |
| Optymalizacja wyłącznie pod zmniejszanie rozmiaru pull requestów | Jednocześnie poprawia szybkość i dokładność | Nie każda praca dzieli się czysto na małe przyrosty |
| Równomierna rotacja obciążenia przeglądami | Zmniejsza ryzyko wąskiego gardła i wypalenia | Może spowolnić przegląd kodu specjalistycznego, trudnego do przeglądu, wymagającego konkretnej wiedzy |
| Koncentracja przeglądów wśród starszych inżynierów | Głęboka wiedza dziedzinowa stosowana spójnie | Z czasem tworzy wąskie gardło i ryzyko wypalenia |

Centralne napięcie to **szybkość kontra głębokość kontroli**. Każda technika w tym
temacie przyspieszająca przegląd, szybsza pierwsza odpowiedź, mniejsze pull requesty,
bardziej rozproszone obciążenie recenzentów, niesie pewne ryzyko wymiany realnej
kontroli, jeśli prowadzi się ją bez bariery jakości, którą ten temat zaleca.
Rozwiąż to napięcie, paruj każdą metrykę szybkości z sygnałem jakości, śledzonym w
tym samym okresie, aby zespół mógł odróżnić prawdziwą poprawę procesu od po cichu
erodującego standardu przeglądu.

## Pytania do omówienia z zespołem

1. **Jaki jest nasz faktyczny czas do pierwszego przeglądu i jaką część naszego
   ogólnego czasu cyklu pochłania etap przeglądu?** Weźcie prawdziwą liczbę zamiast
   polegać na wrażeniu; czas oczekiwania na przegląd jest często większy, niż zespoły
   zakładają, właśnie dlatego, że łatwo zaniżyć czas spędzony na czekaniu, a nie na
   aktywnej pracy.

2. **Jaki jest nasz medianowy rozmiar pull requesta i o ile skurczyłoby się
   opóźnienie przeglądu, gdyby ten rozmiar spadł?** Duże pull requesty są zarówno
   wolniejsze w przeglądzie, jak i częściej dostają powierzchowny przegląd po prostu
   dlatego, że recenzent nie może zmieścić całości w głowie naraz. Spójrzcie na
   faktyczny rozkład rozmiarów, a nie tylko medianę.

3. **Czy obciążenie przeglądami jest skoncentrowane wśród niewielkiej liczby osób i
   co by się stało z naszą przepustowością przeglądów, gdyby jedna z nich była
   niedostępna przez dwa tygodnie?** To pytanie wydobywa jednocześnie ryzyko wąskiego
   gardła i ryzyko wypalenia. Weźcie faktyczne dane o obciążeniu recenzentów zamiast
   polegać na wrażeniu.

4. **Czy kiedykolwiek poprawiliśmy metrykę szybkości przeglądu w sposób, który po
   namyśle zmniejszył faktyczną kontrolę?** Bądźcie tu szczerzy; to dokładnie
   ryzyko pieczątkowania, które ten temat nazywa, i łatwo w nie wpaść bez celowej
   decyzji.

5. **Co zwykle sygnalizuje wysoka liczba iteracji przeglądu w naszym zespole:
   prawdziwą niezgodę, niejasne wymagania czy niespójne oczekiwania co do stylu?**
   Spójrzcie na próbkę pull requestów z niezwykle wysoką liczbą iteracji i
   zdiagnozujcie faktyczny wzorzec, zamiast zakładać, że świadczy źle o autorze lub
   recenzencie.

6. **Czy mamy barierę jakości sparowaną z naszymi metrykami szybkości przeglądu, czy
   śledzimy szybkość w izolacji?** Jeśli uczciwa odpowiedź brzmi, że takiej bariery
   nie ma, to luka warta zamknięcia, zanim popchniecie szybkość przeglądu dalej,
   zgodnie z zasadą parowania z tematu 1.2.

## Perspektywa sektorowa

**Startup.** Przegląd jest często szybki z natury w małym zespole, czasem niemal
zbyt szybki, jednoosobowe zatwierdzenie z minimalną kontrolą, bo wszyscy sobie
ufają. Ryzyko, na które trzeba uważać w miarę wzrostu zespołu, to jakość przeglądu
nieskalująca się razem z wielkością zespołu, bo nieformalne zaufanie, które działało
dla pięciu inżynierów, nie działa automatycznie dla pięćdziesięciu.

**Mała firma.** Większość platform kontroli wersji raportuje od razu statystyki czasu
do scalenia i liczby przeglądów; używaj ich zamiast budować własną instrumentację.
Główną dyscypliną wartą przyjęcia jest po prostu zauważenie, czy obciążenie
przeglądami po cichu nie skoncentrowało się na jednej lub dwóch osobach w miarę
wzrostu zespołu.

**Duże przedsiębiorstwo.** Brak równowagi obciążenia recenzentów i wąskie gardła
wiedzy specjalistycznej są tu szczególnie częste, gdzie głęboka wiedza dziedzinowa w
krytycznym systemie może skoncentrować odpowiedzialność za przeglądy na małej grupie
niezależnie od wielkości zespołu. Zainwestuj w celowe dzielenie się wiedzą i rotację
przeglądów, by rozproszyć wiedzę, zmniejszając zarówno wąskie gardło, jak i ryzyko
współczynnika autobusowego (bus factor) wiedzy żyjącej w zbyt niewielu osobach.

**Administracja publiczna.** Procesy przeglądu mają tu często wagę zgodności obok
celów jakościowych, co może celowo czynić pull requesty większymi, a przeglądy
wolniejszymi. Tam, gdzie prawdziwe wymogi zgodności wymagają dokładnego przeglądu,
skup wysiłek poprawy na skracaniu czasu oczekiwania (szybsze przypisywanie
przeglądów, jaśniejsza segregacja), a nie na obniżaniu faktycznej głębokości
przeglądu, i udokumentuj kompromis jawnie, jeśli kontrola musi pozostać ciężka z
powodów regulacyjnych.

## Przykłady

**Przedsiębiorstwo.** Organizacja inżynierska firmy z branży cyberbezpieczeństwa
odkryła, że garstka inżynierów principal wykonywała ponad 40% wszystkich
przeglądów kodu w dwustuosobowej organizacji, brak równowagi, którego nikt nie
zmierzył bezpośrednio, dopóki nie pobrano danych o obciążeniu recenzentów. Ta
koncentracja była zarówno wąskim gardłem, bo dostępność tych inżynierów ograniczała
przepustowość przeglądów całej organizacji, jak i ryzykiem wypalenia, zasygnalizowanym
osobno przez ankietę zaangażowania (temat 3.2). Organizacja wprowadziła
ustrukturyzowany program rotacji przeglądów, sparowany z celowanymi sesjami
dzielenia się wiedzą, a w ciągu dwóch kwartałów obciążenie przeglądami rozłożyło się
na znacznie szerszą grupę, a czas do pierwszego przeglądu poprawił się jako
bezpośredni efekt uboczny zmniejszonego wąskiego gardła.

**Administracja publiczna.** Zespół inżynierski urzędu skarbowego, pod presją
poprawy szybkości dostarczania, ustalił cel zmniejszenia czasu do pierwszego
przeglądu o połowę. W ciągu jednego kwartału cel został osiągnięty, ale późniejszy
audyt jakości wykazał ostry wzrost liczby pull requestów z poprawkami defektów po
scaleniu, skoncentrowanych w zmianach zatwierdzonych jednym, krótkim komentarzem.
Rozwiązanie zespołu sparowało cel szybkości z jawną barierą jakości, odsetkiem
poprawek po scaleniu potrzebnych w ciągu dwóch tygodni od przeglądu, i przeszkoliło
zespół, czego faktycznie wymaga merytoryczny przegląd, przywracając prawdziwą
kontrolę przy zachowaniu większości poprawy szybkości, która wynikła z lepszego
przypisywania przeglądów i mniejszych rozmiarów pull requestów.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z dobrze zarządzanych metryk przeglądu jest szybsze dostarczanie bez
poświęcania jakości, co jest rzadkim połączeniem: większość usprawnień dostarczania
gdzieś wymienia szybkość na ryzyko, ale usprawnienia na etapie przeglądu, mniejsze
pull requesty, lepszy rozkład obciążenia, szybsza pierwsza odpowiedź, naprawdę
poprawiają oba jednocześnie, gdy prowadzi się je z barierą jakości, którą ten temat
zaleca. Powyższy przykład z cyberbezpieczeństwem jest typowy: naprawa wąskiego gardła
poprawiła szybkość, podczas gdy jakość przeglądu, jeśli już, poprawiła się w miarę
szerszego rozprzestrzeniania się wiedzy.

Całkowity koszt posiadania (TCO) jest niski: większość tych metryk pochodzi wprost z
istniejących danych platformy kontroli wersji przy minimalnej dodatkowej
instrumentacji, a zmiany procesu, na które wskazują, rotacja przeglądów, zachęcanie
do mniejszych pull requestów, kosztują głównie dyscyplinę, a nie inwestycję w
narzędzia.

## Antywzorce i pułapki

- **Optymalizacja czasu do pierwszego przeglądu bez sparowanej bariery jakości:**
  zaprasza do pieczątkowego zatwierdzania, które niweczy cel przeglądu.
- **Ignorowanie koncentracji obciążenia recenzentów:** tworzy zarówno wąskie gardło,
  jak i ryzyko wypalenia, które pozostaje niewidoczne, dopóki go nie zmierzysz.
- **Traktowanie liczby iteracji przeglądu jak indywidualnej karty wyników:** częściej
  jest sygnałem systemowym lub komunikacyjnym niż osobistym.
- **Akceptowanie stale dużych pull requestów jako nieuniknionych:** większość dużych
  zmian da się podzielić dalej, niż zespoły początkowo zakładają.
- **Stosowanie jednolitej głębokości przeglądu niezależnie od ryzyka zmiany:** marnuje
  kontrolę na zmiany niskiego ryzyka, potencjalnie niedostatecznie kontrolując te
  wysokiego ryzyka.
- **Mierzenie szybkości przeglądu bez sprawdzania, czy razem z nią nie spadła
  realna kontrola:** najczęstszy sposób, w jaki ta rodzina metryk bywa
  niezamierzenie manipulowana.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Metryki przeglądu nie są śledzone; rozkład obciążenia
  przeglądami i rozmiar pull requestów są niewidoczne.
- **Poziom 2, Rozwój:** Istnieją pewne dane o szybkości przeglądu z domyślnych
  ustawień platformy, ale brakuje bariery jakości i aktywnego zarządzania obciążeniem
  recenzentów.
- **Poziom 3, Standaryzacja:** Czas do pierwszego przeglądu, rozmiar pull requesta i
  obciążenie recenzentów są śledzone spójnie, z jawną barierą jakości sparowaną z
  poprawami szybkości.
- **Poziom 4, Zarządzanie:** Obciążenie recenzentów jest aktywnie równoważone przez
  rotację i dzielenie się wiedzą; wzorce liczby iteracji są badane na poziomie
  procesu, a nie jednostki.
- **Poziom 5, Orkiestracja:** Metryki etapu przeglądu bezpośrednio informują
  inwestycje w proces, a organizacja potrafi wykazać jednoczesną poprawę zarówno
  szybkości przeglądu, jak i powiązanych z przeglądem rezultatów jakości w
  długim okresie.

## Pomysły do dyskusji

1. Jaki jest nasz obecny medianowy czas do pierwszego przeglądu i gdzie faktycznie ucieka ten czas?
2. Czy nasze obciążenie przeglądami jest skoncentrowane na niewielkiej liczbie osób i jakie jest ryzyko, jeśli jedna jest niedostępna?
3. Czy kiedykolwiek poprawiliśmy szybkość przeglądu kosztem realnej kontroli, nawet niezamierzenie?
4. Jaki jest nasz medianowy rozmiar pull requesta i o ile mniejsze mogłaby realistycznie być większość zmian?
5. Czy traktujemy wysoką liczbę iteracji przeglądu jako sygnał systemowy, czy osąd indywidualny?

## Kluczowe wnioski

- **Czas do pierwszego przeglądu** jest zwykle największą pojedynczą dźwignią w
  etapie przeglądu, większą niż sama długość rozmowy przeglądowej.
- **Mniejsze pull requesty** jednocześnie poprawiają szybkość i dokładność
  przeglądu.
- **Brak równowagi obciążenia recenzentów** jest częsty i zwykle niewidoczny bez
  bezpośredniego pomiaru; tworzy zarówno wąskie gardło, jak i ryzyko wypalenia.
- Paruj każdą metrykę szybkości przeglądu z jawną **barierą jakości**, by wychwycić
  ryzyko manipulowania przez pieczątkowanie, na które ta rodzina metryk jest
  szczególnie podatna.
- Używaj **liczby iteracji przeglądu** do diagnozowania tarcia na poziomie
  systemu, a nie do oceniania poszczególnych autorów lub recenzentów.

## Bibliografia i dalsza lektura

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (praktyki przeglądu kodu i ich związek z wydajnością
  dostarczania).
- Badania *Modern Code Review* Alberto Bacchellego i Christiana Birda (empiryczne
  badanie praktyk przeglądu kodu w dużej skali).
- *Peer Reviews in Software: A Practical Guide*, Karl E. Wiegers (projektowanie
  procesu przeglądu i jego kompromisy).
- *The Principles of Product Development Flow*, Donald G. Reinertsen
  (rozumowanie o wielkości partii zastosowane do rozmiaru pull requestów).
