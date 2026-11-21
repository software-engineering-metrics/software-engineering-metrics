# Metriky softwarového inženýrství

Pracovní kniha o tom, jak dobře měřit **softwarové inženýrství**: jak vybrat
metriky, které odrážejí skutečné výsledky, a ne pouhou aktivitu, o rámcích,
na nichž kniha stojí (Flow Framework, rámec SPACE, teorie front a metriky
DORA), o rodinách metrik, na kterých záleží, a o tom, jak vést program metrik,
který tým zlepšuje, a ne hlídá.

Kniha se věnuje doručování a toku, zkušenosti vývojářů, kódu a kvalitě,
produktovým a obchodním výsledkům, spolehlivosti a bezpečnosti a také tomu,
jak generativní umělá inteligence mění význam těchto čísel.

- **[Co jsou metriky softwarového inženýrství?](uvodni-cast/co-jsou-metriky-softwaroveho-inzenyrstvi.md):** začněte tady
- **[Úvod](uvodni-cast/uvod.md):** čím tato kniha je a jak ji číst
- **[Obsah](uvodni-cast/obsah.md):** úplný seznam témat

## Jak tuto knihu číst

Části jsou celá čísla, témata jsou desetinná. Téma **N.0** uvádí každou část;
**N.1, N.2, …** jsou její témata. Část 9 shromažďuje přílohy (slovníček,
přehled vzorců, kontrolní seznamy, šablony, sebehodnocení zralosti, odkazy
a rejstřík). Každé téma o rodině metrik uvádí zásady, doporučení, kompromisy,
pohled podle sektorů, příklady (velký podnik a státní správa), obchodní
odůvodnění (ROI/TCO), antivzory, model zralosti, otázky k diskusi a odkazy
a pojmenovává, jak se metrika zneužívá a jaká pojistka to zachytí. Zavádějte
postupně, ne velkým třeskem.

## Obsah

### Část 1: Základy měření
- [1.0 Úvod](temata/01-00-uvod-do-casti-1-zaklady-mereni.md)
- [1.1 Proč měřit softwarové inženýrství](temata/01-01-proc-merit-softwarove-inzenyrstvi.md)
- [1.2 Goodhartův zákon a psychologie metrik](temata/01-02-goodhartuv-zakon-a-psychologie-metrik.md)
- [1.3 Výsledky před výstupy: co měřit](temata/01-03-vysledky-pred-vystupy-co-merit.md)
- [1.4 Správa a vlastnictví metrik](temata/01-04-sprava-a-vlastnictvi-metrik.md)
- [1.5 Zdroje dat a instrumentace](temata/01-05-zdroje-dat-a-instrumentace.md)
- [1.6 Statistická gramotnost pro inženýrské metriky](temata/01-06-statisticka-gramotnost-pro-inzenyrske-metriky.md)

### Část 2: Metriky toku
- [2.0 Úvod](temata/02-00-uvod-do-casti-2-metriky-toku.md)
- [2.1 Rámec Flow Framework](temata/02-01-ramec-flow-framework.md)
- [2.2 Položky toku: funkce, vady, rizika a dluh](temata/02-02-polozky-toku-funkce-vady-rizika-a-dluh.md)
- [2.3 Rychlost toku a rozložení toku](temata/02-03-rychlost-toku-a-rozlozeni-toku.md)
- [2.4 Doba toku a zatížení toku](temata/02-04-doba-toku-a-zatizeni-toku.md)
- [2.5 Efektivita toku a rozpracovaná práce](temata/02-05-efektivita-toku-a-rozpracovana-prace.md)
- [2.6 Cycle time a jeho složky](temata/02-06-cycle-time-a-jeho-slozky.md)
- [2.7 Teorie front](temata/02-07-teorie-front.md)
- [2.8 Metriky hodnotového proudu podle Lean](temata/02-08-metriky-hodnotoveho-proudu-podle-lean.md)
- [2.9 Metriky pull requestů a revizí kódu](temata/02-09-metriky-pull-requestu-a-revizi-kodu.md)
- [2.10 Rámec metrik DORA](temata/02-10-ramec-metrik-dora.md)

### Část 3: Zkušenost vývojářů a rámec SPACE
- [3.0 Úvod](temata/03-00-uvod-do-casti-3-zkusenost-vyvojaru-a-ramec-space.md)
- [3.1 Rámec SPACE](temata/03-01-ramec-space.md)
- [3.2 Metriky spokojenosti a pohody](temata/03-02-metriky-spokojenosti-a-pohody.md)
- [3.3 Metriky výkonu a zástupné ukazatele výsledků](temata/03-03-metriky-vykonu-a-zastupne-ukazatele-vysledku.md)
- [3.4 Metriky aktivity a jejich meze](temata/03-04-metriky-aktivity-a-jejich-meze.md)
- [3.5 Metriky komunikace a spolupráce](temata/03-05-metriky-komunikace-a-spoluprace.md)
- [3.6 Efektivita a plynulost: hluboká práce a vyrušování](temata/03-06-efektivita-a-plynulost-hluboka-prace-a-vyrusovani.md)
- [3.7 Průzkumy zkušenosti vývojářů a metriky DevEx](temata/03-07-pruzkumy-zkusenosti-vyvojaru-a-metriky-devex.md)

### Část 4: Metriky kódu a kvality
- [4.0 Úvod](temata/04-00-uvod-do-casti-4-metriky-kodu-a-kvality.md)
- [4.1 Metriky složitosti kódu](temata/04-01-metriky-slozitosti-kodu.md)
- [4.2 Pokrytí testy a účinnost testů](temata/04-02-pokryti-testy-a-ucinnost-testu.md)
- [4.3 Změnovost kódu a analýza hotspotů](temata/04-03-zmenovost-kodu-a-analyza-hotspotu.md)
- [4.4 Statická analýza a metriky code smells](temata/04-04-staticka-analyza-a-metriky-code-smells.md)
- [4.5 Měření technického dluhu](temata/04-05-mereni-technickeho-dluhu.md)
- [4.6 Metriky dokumentace a znalostí](temata/04-06-metriky-dokumentace-a-znalosti.md)

### Část 5: Produktové a obchodní metriky
- [5.0 Úvod](temata/05-00-uvod-do-casti-5-produktove-a-obchodni-metriky.md)
- [5.1 Míra uniklých vad a úniky kvality](temata/05-01-mira-uniklych-vad-a-uniky-kvality.md)
- [5.2 Přijetí funkcí a metriky používání](temata/05-02-prijeti-funkci-a-metriky-pouzivani.md)
- [5.3 Metriky zákaznických a obchodních výsledků](temata/05-03-metriky-zakaznickych-a-obchodnich-vysledku.md)
- [5.4 Náklady a jednotková ekonomika inženýrství](temata/05-04-naklady-a-jednotkova-ekonomika-inzenyrstvi.md)
- [5.5 Návratnost investic do inženýrských iniciativ](temata/05-05-navratnost-investic-do-inzenyrskych-iniciativ.md)

### Část 6: Metriky spolehlivosti, provozu a bezpečnosti
- [6.0 Úvod](temata/06-00-uvod-do-casti-6-metriky-spolehlivosti-provozu-a-bezpecnosti.md)
- [6.1 Ukazatele úrovně služby, cíle a rozpočty chyb](temata/06-01-ukazatele-urovne-sluzby-cile-a-rozpocty-chyb.md)
- [6.2 Metriky incidentů: detekce, reakce a obnova](temata/06-02-metriky-incidentu-detekce-reakce-a-obnova.md)
- [6.3 Metriky pohotovosti, kapacity a provozní zátěže](temata/06-03-metriky-pohotovosti-kapacity-a-provozni-zateze.md)
- [6.4 Metriky bezpečnosti a správy zranitelností](temata/06-04-metriky-bezpecnosti-a-spravy-zranitelnosti.md)

### Část 7: Metriky ve věku umělé inteligence
- [7.0 Úvod](temata/07-00-uvod-do-casti-7-metriky-ve-veku-umele-inteligence.md)
- [7.1 Zlom v paradigmatu generativní umělé inteligence](temata/07-01-zlom-v-paradigmatu-generativni-umele-inteligence.md)
- [7.2 Měření vývoje softwaru s podporou umělé inteligence](temata/07-02-mereni-vyvoje-softwaru-s-podporou-umele-inteligence.md)
- [7.3 Inflace metrik a rizika ředění kvality](temata/07-03-inflace-metrik-a-rizika-redeni-kvality.md)
- [7.4 Telemetrie výsledků jako nová Polárka](temata/07-04-telemetrie-vysledku-jako-nova-polarka.md)

### Část 8: Budování programu metrik
- [8.0 Úvod](temata/08-00-uvod-do-casti-8-budovani-programu-metrik.md)
- [8.1 Návrh dashboardu inženýrských metrik](temata/08-01-navrh-dashboardu-inzenyrskych-metrik.md)
- [8.2 Krajina nástrojů: postavit, nebo koupit](temata/08-02-krajina-nastroju-postavit-nebo-koupit.md)
- [8.3 Zavádění metrik bez pěstování strachu](temata/08-03-zavadeni-metrik-bez-pestovani-strachu.md)
- [8.4 Model zralosti programů inženýrských metrik](temata/08-04-model-zralosti-programu-inzenyrskych-metrik.md)
- [8.5 Postupná adopční cesta](temata/08-05-postupna-adopcni-cesta.md)

### Část 9: Přílohy
- [9.0 Přílohy](temata/09-00-prilohy.md)
- [9.1 Slovníček](temata/09-01-slovnicek.md)
- [9.2 Přehled definic a vzorců metrik](temata/09-02-prehled-definic-a-vzorcu-metrik.md)
- [9.3 Kontrolní seznamy](temata/09-03-kontrolni-seznamy.md)
- [9.4 Šablony](temata/09-04-sablony.md)
- [9.5 Sebehodnocení zralosti](temata/09-05-sebehodnoceni-zralosti.md)
- [9.6 Odkazy a další četba](temata/09-06-odkazy-a-dalsi-cetba.md)
- [9.7 Rejstřík](temata/09-07-rejstrik.md)

## Průřezová témata

[Goodhartův zákon](https://en.wikipedia.org/wiki/Goodhart%27s_law) platí pro
každé téma: míra, která se stane cílem, přestává být dobrou mírou, proto každá
rodina metrik zde přichází i se svým způsobem manipulace a svou pojistkou.
Výsledky mají v celé knize větší váhu než výstup a aktivita. Povinnosti
reportingu ve státní správě a ve velkých podnicích se berou jako vstupy návrhu,
ne jako dodatečná myšlenka, a přechod ke generativní umělé inteligenci je
důvod znovu prozkoumat, co tyto metriky znamenají, a ne jen nový sloupec na
dashboardu.

## Mimo témata

- **[Příklady](priklady/prehled.md):** malé, konkrétní ukázky myšlenek knihy v praxi.
- **[O tomto projektu](projekt/prehled.md):** jak se kniha tvoří, kontroluje a vydává.
- **[Přispívání](prispivani/prehled.md):** jak pomoci a jaká pravidla stylu platí.
