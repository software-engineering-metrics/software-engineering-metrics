# 4.0 Úvod do části 4: Metriky kódu a kvality

Části 2 a 3 měřily, jak se práce pohybuje a jak se daří lidem, kteří ji
vytvářejí. Tato část se obrací k samotnému artefaktu: ke kódu a k tomu, co
metrika o jeho kvalitě dokáže a nedokáže říct. Metriky kvality kódu mají
nejdelší historii ze všech rodin metrik v této knize, cyklomatická složitost
sahá do roku 1976, a tomu odpovídá i nejdelší historie zneužívání. Tato část
bere tu historii vážně: každé téma pojmenovává skutečně užitečný signál spolu
s konkrétním, dobře zdokumentovaným způsobem, jak se s tímto signálem
manipuluje, jakmile se stane cílem.

Společnou nití těchto šesti témat je, že žádná jednotlivá metrika kódu sama o
sobě kvalitu nezachytí a několik z nejpopulárnějších aktivně klame, pokud se
sledují izolovaně. Vysoké procento pokrytí testy může existovat spolu s testy,
které neověřují nic smysluplného. Nízké skóre složitosti může existovat spolu
s kódem, který je technicky jednoduchý, ale koncepčně nesourodý. Každé téma této
části spojuje svou hlavní metriku s doplňující kontrolou, která zachytí její
konkrétní slepou skvrnu: složitost s kontextem udržovatelnosti, pokrytí s
mutačním testováním, změnovost s analýzou hotspotů, statickou analýzu s
lidským úsudkem a technický dluh s prioritizovanou nápravou místo stále
rostoucího, nemilovaného backlogu.

U velkých týmů jsou metriky kódu a kvality tím, co umožňuje řídit kódovou bázi
příliš velkou na to, aby ji udržel v hlavě jediný člověk. Pětičlenný tým se může
spolehnout na sdílenou tichou znalost toho, které části systému jsou křehké.
Organizace o pěti stech inženýrech napříč desítkami služeb potřebuje
instrumentované signály, aby tuto křehkost našla systematicky. Velké podniky a
státní správa, které často nesou kódové báze měřené spíš na desetiletí než na
roky, se na metriky této části spoléhají při určování priorit, kde omezená
investice do údržby přinese nejvíc dobrého.

## Témata v této části

- **4.1 Metriky složitosti kódu:** Cyklomatická složitost a její příbuzné, co
  skutečně předpovídají a jejich dobře zdokumentované riziko manipulace.
- **4.2 Pokrytí testy a účinnost testů:** Proč samotné procento pokrytí
  říká méně, než se zdá, a jak mutační testování tuto mezeru zaplňuje.
- **4.3 Změnovost kódu a analýza hotspotů:** Hledání konkrétního, malého
  zlomku kódové báze, který odpovídá za nepoměrný podíl vad a nákladů na
  údržbu.
- **4.4 Statická analýza a metriky code smells:** Automatizované signály kvality
  kódu, jejich skutečná hodnota a meze oproti lidskému úsudku.
- **4.5 Měření technického dluhu:** Proměna neviditelného, neformálně
  diskutovaného závazku v viditelné, prioritizované, zvládnutelné portfolio.
- **4.6 Metriky dokumentace a znalostí:** Měření, zda dokumentace skutečně
  pomáhá, a ne jen zda existuje.

## Jak spolu témata souvisejí

Těchto šest témat se buduje od nejmenší jednotky kódu směrem ven. Téma 4.1
začíná na úrovni jediné funkce nebo metody; téma 4.2 se ptá, zda testy
skutečně ověřují chování této jednotky; téma 4.3 se oddaluje, aby našlo, které
soubory a moduly napříč celou kódovou bází zaslouží pozornost nejdřív; téma 4.4
přidává vrstvu automatizovaných nástrojů, která to vše průběžně prohledává;
téma 4.5 mění nahromaděná zjištění ze všech čtyř ve spravovaný, prioritizovaný
backlog místo rozptýlené, neřešené starosti; a téma 4.6 část uzavírá měřením,
zda jsou znalosti potřebné k bezpečné údržbě toho všeho skutečně
zdokumentované a dohledatelné.

Tato část přímo navazuje na metriky stability z části 2: míra selhání změn
(téma 2.10) je z velké části následkem kvality kódu, kterou tato část měří
předem. Navazuje i vpřed na produktové metriky části 5, protože uniklé vady
(téma 5.1) lze často vysledovat právě k hotspotům složitosti a mezerám v
pokrytí, které je tato část určena odhalit dřív, než vůbec dosáhnou produkce.
