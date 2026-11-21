# Wprowadzenie

Ta książka to praktyczny przewodnik po tym, jak dobrze mierzyć [inżynierię oprogramowania](https://en.wikipedia.org/wiki/Software_engineering): w zespołach od pięcioosobowego startupu po wielotysięczne przedsiębiorstwo albo urząd, który raportuje wyniki według ustawowych ram skuteczności działania. Powstała, ponieważ większość porad o metrykach to albo streszczenie jakichś ram bez szczegółów operacyjnych, albo lista funkcji narzędzia od dostawcy. Ta książka stara się nie być ani jednym, ani drugim: ma zdanie o tym, co mierzyć, wprost mówi, jak każdą metrykę można zmanipulować, i podpowiada, jak prowadzić program metryk, któremu zespół ufa, zamiast się go bać.

## Dla kogo jest ta książka

Główni odbiorcy to osoby, które decydują, co organizacja mierzy: liderzy inżynierscy, inżynierowie staff i principal, zespoły platformowe i DevOps oraz menedżerowie programów i produktów. Drugą grupą jest każdy inżynier, który chce zrozumieć logikę panelu, który ma "poruszyć", i wiedzieć, jak zakwestionować metrykę, która przestała służyć swojemu celowi. Nie musisz czytać od deski do deski. Każdy temat jest samodzielny, najpierw podaje zasady, a kończy praktycznymi wnioskami, modelem dojrzałości i bibliografią.

## Jak jest zorganizowana książka

Książka dzieli się na **części** (liczby całkowite) i **tematy** (liczby dziesiętne). Temat **N.0** wprowadza każdą część i wyjaśnia, jak jej tematy się ze sobą wiążą; tematy **N.1, N.2, …** omawiają zagadnienia szczegółowo.

- **Część 1, Podstawy pomiaru:** po co w ogóle mierzyć, prawo Goodharta i psychologia manipulowania, wybieranie rezultatów zamiast produkcji, nadzór i własność, źródła danych oraz kompetencje statystyczne, których potrzebuje każdy program metryk.
- **Część 2, Metryki przepływu:** Flow Framework, jego elementy przepływu i pięć metryk przepływu, czas cyklu, teoria kolejek, klasyczne metryki strumienia wartości z Lean, metryki pull requestów i przeglądu kodu oraz ramy DORA jako temat referencyjny.
- **Część 3, Doświadczenie programisty i ramy SPACE:** ramy SPACE i ich pięć wymiarów oraz to, jak przeprowadzić ankietę o doświadczeniu programisty, żeby nie zamieniła się w konkurs popularności.
- **Część 4, Metryki kodu i jakości:** złożoność, pokrycie testami i ich skuteczność, rotacja i punkty zapalne, analiza statyczna, dług techniczny i dokumentacja.
- **Część 5, Metryki produktowe i biznesowe:** uciekające defekty, adopcja funkcji, rezultaty dla klientów i biznesu, ekonomia jednostkowa i zwrot z inwestycji.
- **Część 6, Metryki niezawodności, operacji i bezpieczeństwa:** SLI, SLO i budżety błędów, metryki incydentów, dyżury i pojemność oraz metryki bezpieczeństwa i podatności.
- **Część 7, Metryki w erze AI:** zmiana paradygmatu związana z generatywną AI, pomiar tworzenia wspomaganego przez AI, ryzyko inflacji metryk i powód, dla którego telemetria rezultatów staje się gwiazdą polarną, gdy produkcja tanieje.
- **Część 8, Budowanie programu metryk:** projektowanie panelu, budować czy kupować, wdrażanie metryk bez zasiewania strachu, model dojrzałości i przyrostowa mapa drogowa wdrożenia.
- **Część 9, Załączniki:** słownik pojęć, zestawienie definicji metryk i wzorów, listy kontrolne, szablony, samoocena dojrzałości, bibliografia i indeks.

## Zasady przewodnie

Kręgosłup książki tworzy osiem zasad:

1. **Miara, która staje się celem, przestaje być dobrą miarą.** Projektuj z myślą o prawie Goodharta od początku, a nie po tym, jak pojawi się zniekształcenie.
2. **Rezultaty ponad produkcją ponad aktywnością.** Każdy zestaw metryk ważysz w stronę tego, co zmieniło się dla klienta lub biznesu, a nie tego, co zespół wytworzył albo jak bardzo był zajęty.
3. **Każda metryka z zachętą potrzebuje bariery ochronnej.** Zestawiaj tempo z jakością, przepustowość ze stabilnością i nigdy nie goń za jedną liczbą w oderwaniu od reszty.
4. **Mierz systemy, nie ludzi.** Metryka, która personalizuje winę, niszczy zaufanie i zachęca do manipulacji; metryka, która odsłania ograniczenie systemu, zachęca do poprawy.
5. **Tam, gdzie można, wybieraj instrumentację zamiast samooceny, a tam, gdzie nie można, pytaj ludzi.** Liczbę wdrożeń zna potok; satysfakcję poznasz, pytając.
6. **Metryka zarabia na swoje miejsce albo odchodzi.** Każdy kafel na panelu kosztuje uwagę. Przycinaj świadomie.
7. **Definicje są ważniejsze niż panele.** Dwa zespoły, które liczą "czas realizacji" inaczej, stracą więcej czasu na spór o liczbę niż na działanie.
8. **Generatywna AI to powód do ponownego przemyślenia, a nie tylko do nowych wartości odniesienia.** Gdy produkcja tanieje, metryki oparte na jej wolumenie potrzebują nowych barier ochronnych, a nie tylko nowych celów.

## Wątki przekrojowe

[Prawo Goodharta](https://en.wikipedia.org/wiki/Goodhart%27s_law) to jedyny wątek, który przewija się przez każdą część tej książki, a nie tylko przez temat 1.2. Każdy temat o rodzinie metryk opisuje, jak tę metrykę można zmanipulować i jaka bariera ochronna to wychwytuje. Obowiązki sprawozdawcze administracji i przedsiębiorstw, w których metryka może mieć wagę ustawową lub umowną, traktujemy wszędzie jako wymagania projektowe, a nie dodatek ograniczony do jednego tematu.

## Jak z niej korzystać

Wdrażaj przyrostowo; nie wrzucaj panelu na zespół, który nigdy żadnego nie miał. Zacznij tam, gdzie boli najbardziej, użyj modelu dojrzałości z każdego tematu, żeby uczciwie ocenić, gdzie jesteś, i pozwól, by mapa drogowa wdrożenia (temat 8.5) ułożyła kolejność prac. Celem nie jest ściana wykresów. Celem jest organizacja, która potrafi na podstawie dowodów powiedzieć, czy to, co robi, działa, i która ufa własnym liczbom na tyle, by według nich działać.
