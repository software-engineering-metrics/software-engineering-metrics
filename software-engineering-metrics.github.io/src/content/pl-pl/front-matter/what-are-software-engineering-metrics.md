# Czym są metryki inżynierii oprogramowania?

[Metryki inżynierii oprogramowania](https://en.wikipedia.org/wiki/Software_metric) to ilościowe miary służące do oceniania, śledzenia i poprawiania jakości, efektywności i wpływu procesów wytwarzania oprogramowania, produktów i zespołów. Dobrze użyte działają jak systemowe narzędzia diagnostyczne: odsłaniają wąskie gardła operacyjne, uzasadniają spłatę długu technicznego i wiążą pracę inżynierską z konkretnymi rezultatami biznesowymi. Źle użyte zniekształcają zachowania, niszczą zaufanie i nagradzają dokładnie to, czego nie trzeba.

Ta książka istnieje, bo większość zespołów sięga po metryki, zanim ustali, do czego metryka *służy*. Panel zapełnia się wszystkim, co łatwo policzyć, kierownictwo zaczyna pytać "czy ta liczba rośnie, czy spada", i w ciągu kwartału zespół optymalizuje liczbę zamiast rezultatu, który ta liczba miała reprezentować. To zjawisko ma nazwę, [prawo Goodharta](https://en.wikipedia.org/wiki/Goodhart%27s_law): gdy miara staje się celem, przestaje być dobrą miarą. Każdy temat tej książki powstał z tym prawem za plecami.

## Dwie fundamentalne ramy

Branża w dużej mierze zbiegła się wokół dwóch popartych badaniami ram do mierzenia dostarczania i kondycji zespołów.

**[Metryki DORA](https://dora.dev/guides/dora-metrics/)** (z programu DevOps Research and Assessment) mierzą przepustowość i stabilność systemu: częstotliwość wdrożeń, czas realizacji zmiany, odsetek nieudanych zmian i czas przywrócenia po nieudanym wdrożeniu. Część 2 tej książki omawia wszystkie cztery w osobnym temacie referencyjnym, obok Flow Framework, którego używa do uporządkowania metryk dostarczania i przepływu w szerszym ujęciu, ponieważ DORA dobrze mierzy mechanikę potoku, ale nic nie mówi o tym, jaki rodzaj wartości tym potokiem płynie.

**[Ramy SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, stworzone przez badaczy z Microsoftu, GitHuba i University of Victoria, równoważą surową przepustowość doświadczeniem programisty w pięciu wymiarach: satysfakcja i dobrostan, wydajność, aktywność, komunikacja i współpraca oraz efektywność i flow. Część 3 omawia je dogłębnie.

Poza tymi dwiema ramami zespoły śledzą metryki lokalne, pogrupowane według dziedzin: metryki kodu i jakości (część 4), metryki produktowe i biznesowe (część 5) oraz metryki niezawodności, operacji i bezpieczeństwa (część 6). Część 7 dotyczy zmiany, która już trwa: narzędzia generatywnej AI sprawiły, że surowa produkcja kodu jest prawie darmowa, a to znaczy, że kilka metryk, na których branża polegała przez dekadę, nie znaczy już tego, co kiedyś.

## Dla kogo jest ta książka

Główni odbiorcy to osoby, które decydują, co zespół mierzy i dlaczego: liderzy inżynierscy, inżynierowie staff i principal, zespoły platformowe i DevOps oraz menedżerowie programów i produktów, którzy budują panel metryk lub kartę wyników po raz pierwszy albo naprawiają taki, który zaczął zniekształcać zachowania. Drugą grupą jest każdy inżynier, który chce zrozumieć, dlaczego jego organizacja śledzi to, co śledzi, i jak się sprzeciwić, gdy metryka jest nadużywana.

## Jak czytać

Zacznij tutaj, potem przeczytaj [wprowadzenie](introduction.md), żeby zobaczyć, jak książka jest zorganizowana, albo przejdź od razu do [spisu treści](table-of-contents.md). Każdy temat jest samodzielny: najpierw podaje zasady, potem konkretne rekomendacje, nazywa sposób, w jaki omawiana metryka bywa manipulowana, i kończy się modelem dojrzałości, pytaniami do dyskusji i bibliografią. Nie musisz czytać całej książki od początku do końca, żeby z niej korzystać.
