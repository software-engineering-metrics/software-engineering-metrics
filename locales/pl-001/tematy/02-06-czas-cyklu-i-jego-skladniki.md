# 2.6 Czas cyklu i jego składniki

## Przegląd i motywacja

**Czas cyklu** to wewnętrzny rozkład czasu przepływu zmiany (temat 2.4) na jego
składowe etapy inżynierskie: czas kodowania, czas przeglądu, czas testowania i
czas wdrożenia, czasem dalej dzielone na czas podjęcia (jak długo zmiana czeka,
zanim ktokolwiek zacznie nad nią pracować) i czas aktywny (jak długo to trwa, gdy
ktoś już zacznie). Podczas gdy czas przepływu daje jedną liczbę dla tego, jak
długo zmiana przechodzi od końca do końca przez cały strumień wartości,
[czas cyklu](https://en.wikipedia.org/wiki/Cycle_time) mówi, gdzie ten czas
faktycznie ucieka po dotarciu do inżynierii, a to jest warstwa diagnostyczna,
która według tematu 2.4 leży pod jego własną liczbą podsumowującą.

To rozróżnienie ma znaczenie, bo "czas realizacji jest zbyt długi" samo w sobie
nie jest użyteczne. Zespół, którego czas realizacji dominuje czas kodowania,
potrzebuje innej interwencji niż zespół, którego czas realizacji dominuje
trzydniowa kolejka przeglądu, który z kolei potrzebuje innej interwencji niż
zespół tracący większość czasu na niestabilnym, wolnym zestawie testów. Bez
rozkładu czasu cyklu zespoły zwykle zgadują wąskie gardło, a zgadywanie jest
błędne na tyle często, że naprawa niewłaściwego etapu marnuje realny wysiłek, a
faktyczne ograniczenie pozostaje nietknięte.

Dla dużych zespołów rozkład czasu cyklu zamienia ogólnoorganizacyjną regresję
czasu realizacji z tajemnicy w konkretny, adresowalny problem. Gdy dziesiątki
zespołów dzielą wspólną infrastrukturę, wspólne wąskie gardło przeglądu lub
wspólny wolny potok CI może jednakowo ciągnąć w dół czas realizacji każdego
zespołu, a dopiero porównanie czasu cyklu między zespołami ujawnia tę wspólną
przyczynę źródłową, zamiast tego, by każdy zespół niezależnie zgadywał własne
lokalne wyjaśnienie.

## Kluczowe zasady

- **Czas cyklu wyjaśnia czas realizacji; nie zastępuje go.** Raportuj oba razem,
  z czasem cyklu jako diagnostyką i czasem realizacji jako podsumowaniem.
- **Czas oczekiwania zwykle dominuje nad czasem aktywnym.** Większość opóźnień w
  dostarczaniu oprogramowania pochodzi z pracy stojącej bezczynnie w kolejce, a
  nie z aktywnego wysiłku (temat 2.5 omawia to wprost przez efektywność
  przepływu).
- **Rozłóż na etapy, zanim zaproponujesz naprawę.** Naprawa wymierzona w zły etap
  marnuje wysiłek i może zdemotywować zespół proszony o "pracę szybciej", gdy
  realne wąskie gardło było gdzie indziej.
- **Wspólne wąskie gardło w wielu zespołach to okazja do inwestycji platformowej,**
  a nie tylko seria indywidualnych problemów zespołów.
- **Dane o czasie cyklu są narażone na to samo ryzyko manipulowania co czas
  przepływu** (temat 2.4): uważaj na granice etapów, które po cichu się
  przesuwają, by pochlebić liczbie.

## Rekomendacje

### Zinstrumentuj jawnie każdą granicę etapu

Rozbij podróż zmiany na nazwane etapy z jasnymi, instrumentowalnymi granicami:
kodowanie (od pierwszego commita do otwarcia pull requesta), podjęcie (od
otwarcia pull requesta do pierwszego przeglądu), przegląd (od pierwszego przeglądu
do zatwierdzenia) i wdrożenie (od zatwierdzenia do produkcji). Rejestruj znaczniki
czasu każdego przejścia automatycznie ze zdarzeń kontroli wersji i CI/CD, a nie z
samodzielnie zgłaszanego śledzenia etapów, stosując tę samą zasadę instrumentacji
ponad samooceną z tematu 1.5.

### Oddziel czas oczekiwania od czasu aktywnego w każdym etapie

Na przykład w przeglądzie rozróżnij czas, przez który pull request leży nietknięty,
czekając, aż recenzent zacznie (czas oczekiwania), od czasu, jaki zajmuje aktywna
rozmowa przeglądowa po jej rozpoczęciu (czas aktywny). To rozróżnienie zwykle
ujawnia, że dominującym kosztem jest kolejkowanie, a nie wysiłek, co wskazuje na
zupełnie inną naprawę (większa zdolność recenzentów, lepsze powiadomienia,
mniejsze pull requesty do przeglądu) niż naprawa mająca przyspieszyć same rozmowy
przeglądowe.

### Szukaj wspólnego wąskiego gardła, zanim zaczniesz diagnozować zespół po zespole

Gdy wiele zespołów wskazuje ten sam etap jako dominujące opóźnienie, wolny wspólny
potok CI, przeciążona wspólna pula recenzentów, rzadki wspólny pociąg wydań, ta
wspólna przyczyna jest okazją do inwestycji na poziomie platformy, a nie serią
niepowiązanych problemów lokalnych. Agreguj dane o czasie cyklu między zespołami
właśnie po to, by szukać tego wzorca, zanim założysz, że wąskie gardło każdego
zespołu jest unikalne dla tego zespołu.

### Używaj czasu cyklu do ustalania realistycznych, specyficznych dla etapu celów poprawy

Zamiast pojedynczego celu "skróćcie czas realizacji o 20%", który nie daje
zespołowi wskazówki, na czym się skupić, użyj rozkładu czasu cyklu do ustalenia
celu specyficznego dla etapu: "skróćcie medianę czasu oczekiwania na przegląd z
dwóch dni do czterech godzin". Konkretny cel nakierowany na etap jest zarówno
łatwiejszy do podjęcia przez zespół, jak i łatwiejszy do zweryfikowania, że został
osiągnięty dzięki realnej zmianie procesu, a nie niepowiązanej zmianie gdzie
indziej.

### Pilnuj manipulowania granicami etapów

Tak jak punkty startu i końca czasu przepływu mogą dryfować (temat 2.4),
poszczególne granice etapów czasu cyklu mogą się przesuwać w sposób pochlebiający
liczbie konkretnego etapu bez realnej poprawy, na przykład oznaczenie przeglądu
jako "rozpoczętego" w chwili przypisania recenzenta, a nie wtedy, gdy faktycznie
zaczyna czytać zmianę. Okresowo audytuj instrumentację granic etapów względem jej
udokumentowanej definicji.

## Kompromisy: zalety i wady

| Podejście | Zalety | Wady |
| --- | --- | --- |
| Gruboziarnisty czas cyklu (dwa lub trzy etapy) | Prosty do zinstrumentowania i wyjaśnienia | Może nie wskazać faktycznego wąskiego gardła na tyle precyzyjnie, by działać |
| Drobnoziarnisty czas cyklu (wiele etapów, podział na oczekiwanie i aktywność) | Precyzyjna diagnoza, użyteczne cele specyficzne dla etapu | Więcej wysiłku instrumentacji; więcej liczb do utrzymania i wyjaśniania |
| Przegląd czasu cyklu zespół po zespole | Dopasowany do faktycznego przepływu pracy każdego zespołu | Może przeoczyć wspólne, międzyzespołowe wąskie gardło ukryte za podobnymi lokalnymi liczbami |
| Zagregowany przegląd czasu cyklu między zespołami | Ujawnia wspólne wąskie gardła na poziomie platformy | Wymaga ustandaryzowanych definicji etapów między zespołami, by miał sens |

Centralne napięcie to **precyzja diagnostyczna kontra koszt instrumentacji**.
Drobniejsze śledzenie czasu cyklu daje bardziej użyteczną diagnozę, ale kosztuje
więcej w budowie i utrzymaniu i dodaje więcej liczb, które zespół musi rozumieć i
którym musi ufać. Rozwiąż to napięcie, zaczynając od grubego podziału
(kodowanie, przegląd, wdrożenie) i dodając drobniejsze podziały, oczekiwanie
kontra aktywność w konkretnym etapie, dopiero gdy ten etap zostanie potwierdzony
jako prawdziwe, powtarzające się wąskie gardło warte dodatkowej inwestycji w
instrumentację.

## Pytania do omówienia z zespołem

1. **Gdyby czas realizacji dziś się pogorszył, czy potrafilibyśmy w ciągu
   godziny powiedzieć, który konkretny etap za to odpowiada, na podstawie danych,
   a nie zgadywania?** To podstawowy test, czy wasza instrumentacja czasu cyklu
   faktycznie służy swojemu celowi diagnostycznemu. Jeśli uczciwa odpowiedź brzmi
   nie, warto tę lukę zamknąć, zanim nastąpi kolejna regresja.

2. **W naszym dominującym etapie wąskiego gardła, jaka część opóźnienia to czas
   oczekiwania, a jaka czas aktywny?** Większość zespołów zakłada, że ograniczeniem
   jest aktywny wysiłek, zanim sprawdzi, gdy większym kosztem jest zwykle
   kolejkowanie. Pobierzcie faktyczny podział dla swojego najwolniejszego etapu i
   zobaczcie, czy założenie się utrzymuje.

3. **Czy wiele zespołów dzieli ten sam dominujący etap wąskiego gardła, co
   sugeruje naprawę na poziomie platformy, a nie zespołu?** Zagregujcie dane o
   czasie cyklu między zespołami i szukajcie tego wzorca jawnie, zanim założycie,
   że powolność każdego zespołu ma lokalną przyczynę.

4. **Czy ustaliliśmy cele poprawy specyficzne dla etapów, czy tylko jeden ogólny
   cel czasu realizacji bez wskazówki, na czym się skupić?** Niejasny cel zostawia
   zespół zgadującego, gdzie zainwestować wysiłek; cel specyficzny dla etapu nie.
   Sprawdźcie swoje obecne cele pod kątem tego rozróżnienia.

5. **Czy jakakolwiek granica etapu czasu cyklu w naszej instrumentacji zdryfowała z
   czasem od swojej udokumentowanej definicji?** Granice etapów są narażone na ten
   sam dryf definicyjny co sam czas przepływu (temat 2.4). Zbadajcie próbkę
   niedawnych zdarzeń przejścia między etapami względem spisanej definicji.

6. **Jak kultura nastawiona na przegląd kontra kultura nastawiona na zaufanie
   przejawia się odmiennie w naszych danych o czasie cyklu?** Zespół z bardzo
   dokładnym, wielorundowym przeglądem pokaże dłuższy czas etapu przeglądu niż
   zespół ufający scaleniom z pojedynczym zatwierdzeniem; omówcie, czy wasza
   obecna równowaga odzwierciedla celowy wybór, czy niezbadaną wartość domyślną.

## Perspektywa sektorowa

**Startup.** Czas cyklu zwykle dominuje czas kodowania, a nie etapy przeglądu czy
wdrożenia, po prostu dlatego, że proces jest minimalny. Gdy zespół przerośnie
garstkę inżynierów, zacznij obserwować konkretnie czas oczekiwania na przegląd,
bo to zwykle pierwszy etap, który zwalnia, gdy praca większej liczby osób musi
przejść przez mniej dostępnych recenzentów.

**Mała firma.** Podstawowa analityka platformy kontroli wersji zwykle ujawnia
wystarczająco dużo czasowania na poziomie etapów (czas do pierwszego przeglądu,
czas do scalenia) bez własnej instrumentacji. Skup się najpierw na etapie
przeglądu, bo to najczęstsze wczesne wąskie gardło i najłatwiejsze do naprawy
małą zmianą procesu, jak rotacja recenzentów.

**Duże przedsiębiorstwo.** Wspólne wąskie gardła w dziesiątkach zespołów są częste
i warto je znaleźć dla dźwigni: pojedyncza przeciążona wspólna kolejka CI albo
obowiązkowy centralny krok przeglądu może po cichu obciążać czas realizacji w
całej organizacji. Zainwestuj konkretnie w agregację czasu cyklu między zespołami,
by wydobyć te wspólne ograniczenia, zamiast zostawiać każdemu zespołowi
niezależną diagnozę.

**Administracja publiczna.** Dane o czasie cyklu to mocne, konkretne narzędzie do
uzasadniania modernizacji procesów przed sceptycznymi interesariuszami, bo "czas
oczekiwania na przegląd wynosi średnio cztery dni z powodu jednej wąskiej roli
zatwierdzającej" to znacznie bardziej przekonujący, konkretny argument za
inwestycją niż abstrakcyjne twierdzenie "nasz proces jest wolny".

## Przykłady

**Przedsiębiorstwo.** Kierownictwo inżynierii firmy z branży infrastruktury
chmurowej zauważyło, że czas realizacji rośnie niemal jednocześnie w prawie
każdym zespole. Agregacja czasu cyklu między zespołami ujawniła, że dominującą i
wspólną przyczyną był czas oczekiwania na przegląd, a nie czas aktywnego
przeglądu: mały, scentralizowany zespół przeglądu bezpieczeństwa stał się
wąskim gardłem, bo liczba zespołów wymagających jego zatwierdzenia rosła szybciej
niż on sam. Rozszerzenie i przeszkolenie szerszej puli recenzentów z
certyfikatem bezpieczeństwa, zamiast proszenia poszczególnych zespołów, by jakoś
szybciej kodowały lub testowały, rozwiązało wspólne wąskie gardło i obniżyło czas
realizacji z powrotem we wszystkich zespołach w ciągu jednego kwartału.

**Administracja publiczna.** Zespół usług cyfrowych rządu stanowego był pod
presją skrócenia czasu realizacji i początkowo zareagował prośbą do inżynierów, by
pracowali szybciej, naturalny, ale ostatecznie nieużyteczny odruch. Rozkład czasu
cyklu pokazał, że aktywny czas kodowania ledwie się zmienił rok do roku; niemal
cała regresja wynikała z rosnącej kolejki w obowiązkowym etapie przeglądu
architektury, wprowadzonym osiemnaście miesięcy wcześniej jako środek zgodności.
Zespół przeprojektował ten przegląd na lżejszy, warstwowany według ryzyka proces
dla zmian niskiego ryzyka, istotnie skracając czas oczekiwania na przegląd, przy
zachowaniu pełnego rygoru przeglądu dla zmian naprawdę wysokiego ryzyka.

## Uzasadnienie biznesowe: motywacje, ROI i TCO

Zwrotem z rozkładu czasu cyklu jest celowana, skuteczna inwestycja: organizacja,
która dokładnie wie, który etap jest wąskim gardłem, może naprawić ten konkretny
etap, zamiast rozpraszać wysiłek po całym procesie w nadziei, że coś pomoże.
Powyższy przykład z przeglądem bezpieczeństwa jest typowy: precyzyjnie
wycelowana naprawa, rozszerzenie jednego konkretnego zasobu będącego wąskim
gardłem, rozwiązała problem w całej organizacji znacznie taniej niż szeroka,
nieukierunkowana inicjatywa "przyspieszcie dostarczanie".

Całkowity koszt posiadania (TCO) to wysiłek instrumentacji potrzebny do
niezawodnego rejestrowania znaczników czasu na poziomie etapów i bieżąca
dyscyplina okresowego audytowania granic etapów pod kątem dryfu. Ten koszt jest
wart poniesienia, bo alternatywa, zgadywanie wąskich gardeł i naprawianie złego
etapu, marnuje z czasem znacznie więcej wysiłku inżynierskiego, niż kosztuje sama
instrumentacja.

## Antywzorce i pułapki

- **Reagowanie na regresję czasu realizacji bez diagnozy czasu cyklu:** często
  prowadzi do naprawiania złego etapu.
- **Zakładanie, że dominującym kosztem jest aktywny wysiłek, a nie czas
  oczekiwania:** zwykle błędne; w większości prawdziwych potoków dostarczania
  dominuje kolejkowanie (temat 2.5).
- **Przeoczenie wspólnego, międzyzespołowego wąskiego gardła przez przegląd czasu
  cyklu tylko zespół po zespole:** zostawia nieodkrytą naprawę platformową o
  wysokiej dźwigni.
- **Ustalanie niejasnego ogólnego celu czasu realizacji bez wskazówek
  specyficznych dla etapów:** zostawia zespoły zgadujące, na czym skupić wysiłek.
- **Dryf definicyjny granic etapów:** pochlebia liczbie konkretnego etapu bez realnej
  poprawy.
- **Instrumentowanie każdego możliwego drobnoziarnistego etapu przed
  potwierdzeniem, że którykolwiek jest prawdziwym wąskim gardłem:** marnuje wysiłek
  instrumentacji na szczegół, który jeszcze nie informuje żadnej decyzji.

## Model dojrzałości

- **Poziom 1, Inicjacja:** Czas cyklu w ogóle nie jest rozkładany; zespoły
  zgadują wąskie gardła, gdy czas realizacji się pogarsza.
- **Poziom 2, Rozwój:** Niektóre zespoły śledzą gruboziarniste czasy etapów
  nieformalnie, ale brakuje spójnej instrumentacji lub porównania między
  zespołami.
- **Poziom 3, Standaryzacja:** Granice etapów są spójnie instrumentowane w całej
  organizacji, z oddzieleniem czasu oczekiwania od aktywnego w dominujących
  etapach wąskich gardeł.
- **Poziom 4, Zarządzanie:** Agregacja czasu cyklu między zespołami aktywnie
  wydobywa wspólne wąskie gardła; cele poprawy specyficzne dla etapów zastępują
  niejasne ogólne cele czasu realizacji.
- **Poziom 5, Orkiestracja:** Dane o czasie cyklu bezpośrednio napędzają
  priorytetyzację inwestycji platformowych, a organizacja potrafi wskazać
  konkretne, celowane naprawy, rozszerzoną pulę recenzentów, szybszy wspólny
  potok, które mierzalnie poprawiły czas realizacji w wielu zespołach naraz.

## Pomysły do dyskusji

1. Jaki jest nasz obecny dominujący etap wąskiego gardła i jak bardzo jesteśmy pewni tej odpowiedzi?
2. Jaka część czasu tego etapu to czas oczekiwania, a jaka czas aktywny?
3. Czy któreś z naszych zespołów dzielą to samo wąskie gardło, co sugeruje naprawę na poziomie platformy?
4. Kiedy ostatnio ustaliliśmy cel poprawy dostarczania specyficzny dla etapu, a nie ogólny?
5. Czy definicja granicy etapu w naszych narzędziach kiedykolwiek zmieniła się bez dokumentacji?

## Kluczowe wnioski

- Czas cyklu **rozkłada czas przepływu** na etapy inżynierskie, kodowanie,
  przegląd, testowanie, wdrożenie, i jest warstwą diagnostyczną pod tą liczbą
  podsumowującą.
- Oddzielaj **czas oczekiwania od czasu aktywnego** w każdym etapie; kolejkowanie
  zwykle dominuje nad aktywnym wysiłkiem (temat 2.5).
- Szukaj **wspólnych wąskich gardeł w zespołach**, zanim założysz, że spowolnienie
  jest specyficzne dla zespołu; wspólna przyczyna jest często okazją do inwestycji
  platformowej.
- Ustalaj **cele poprawy specyficzne dla etapów**, a nie niejasne cele ogólne, aby
  zespoły wiedziały dokładnie, na czym się skupić.
- Granice etapów są narażone na to samo ryzyko **dryfu definicyjnego** co sam czas
  przepływu; audytuj je okresowo.
- Temat 2.7 podaje leżącą u podstaw matematykę, prawo Little'a, wyjaśniającą,
  dlaczego praca w toku i czas cyklu poruszają się razem.

## Bibliografia i dalsza lektura

- *The Principles of Product Development Flow*, Donald G. Reinertsen (teoria
  kolejek i rozumowanie o wielkości partii stojące za analizą czasu cyklu).
- *Actionable Agile Metrics for Predictability*, Daniel S. Vacanti (pomiar czasu
  cyklu i oparty na przepływie dla dostarczania oprogramowania).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble i Gene Kim (czas realizacji i jego związek z wydajnością
  dostarczania).
- *The Goal*, Eliyahu M. Goldratt (teoria ograniczeń i zasada znajdowania i
  naprawiania faktycznego wąskiego gardła zamiast optymalizowania wszędzie).
