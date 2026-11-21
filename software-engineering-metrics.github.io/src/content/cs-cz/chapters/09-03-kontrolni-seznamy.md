# 9.3 Kontrolní seznamy

Hotové kontrolní seznamy pro rychlé nahlédnutí. Zkopírujte si jeden do vlastního
procesu a upravte ho; jde o pokrytí, ne o přesné znění.

## Kontrolní seznam revize nové metriky (před přidáním jakékoli metriky na dashboard)

- [ ] Metrika má pojmenované rozhodnutí, které informuje (téma 1.1)
- [ ] Metrika je písemně klasifikována jako diagnostická nebo hodnoticí
      (téma 1.1)
- [ ] Pokud je spojena s pobídkou, je současně definována pojistka (téma 1.2)
- [ ] Byl pojmenován způsob manipulace: jak by racionální tým zařídil, aby
      číslo vypadalo dobře, aniž by se zlepšil skutečný výsledek (téma 1.2)
- [ ] Metrika je klasifikována jako vstup, výstup nebo výsledek (téma 1.3)
- [ ] Metrika má jmenovaného vlastníka a zdokumentovaný zdrojový systém a
      způsob sběru (témata 1.4, 1.5)
- [ ] Metrika bude používat medián nebo percentil, nikoli průměr, pokud jsou
      podkladová data zešikmená (téma 1.6)
- [ ] Metrika se nikdy nepoužívá k hodnocení jednotlivců, nebo je toto
      použití samostatně a výslovně zveřejněno (téma 1.1)

## Kontrolní seznam spuštění dashboardu

- [ ] Dashboard má jedno jmenované, konkrétní publikum a rozhodnutí
      (téma 8.1)
- [ ] Každá metrika s pobídkou je na stejném pohledu jako její pojistka
      (témata 1.2, 8.1)
- [ ] Osy začínají od nuly, pokud není zdokumentována výslovná, viditelná
      výjimka (téma 1.6)
- [ ] Zobrazuje se trend v čase, nikoli jediný snímek (téma 1.6)
- [ ] Dashboard má jmenovaného vlastníka a rytmus revizí (téma 1.4)
- [ ] Viditelné prohlášení uvádí, k čemu dashboard neslouží, je-li to
      relevantní (téma 1.1)
- [ ] Zdroje dat mají základní kontroly zdraví, aby se porouchaná pipeline
      nezobrazovala tiše jako aktuální (téma 1.5)

## Kontrolní seznam zavedení programu metrik

- [ ] Účel a výslovné necíle se sdělují před spuštěním, nikoli reaktivně
      (téma 8.3)
- [ ] Lidé, kteří jsou měřeni, byli zapojeni do výběru metrik (téma 8.3)
- [ ] Program začíná v režimu jen pro diagnostiku, se závazným minimálním
      ověřovacím obdobím (téma 8.3)
- [ ] Existuje rychlý, viditelný protokol reakce na každý budoucí incident
      zneužití (téma 8.3)
- [ ] Byl vybrán pilotní tým, který se skutečně přihlásil dobrovolně, a ne
      takový, který byl nařízen (téma 8.5)
- [ ] Základní správa (charta, vlastnictví, diagnostická politika) je zavedena
      dříve, než začne instrumentace (témata 1.4, 8.5)

## Kontrolní seznam incidentu a postmortemu

- [ ] Postmortem zkoumá systém, nikoli jednotlivce (téma 6.2)
- [ ] Závažnost byla klasifikována podle zdokumentovaných, standardizovaných
      kritérií (téma 6.2)
- [ ] Časy detekce, potvrzení a vyřešení se zaznamenávají zvlášť (téma 6.2)
- [ ] Akční body jsou konkrétní, přidělené a sledované do dokončení
      (téma 6.2)
- [ ] Postmortem se sdílí bez obavy z individuálních následků
      (témata 6.2, 8.3)

## Kontrolní seznam auditu metrik pro věk AI

- [ ] Každá metrika dashboardu byla otestována otázkou: „ukázal by tým, který
      silně využívá podporu AI, ale nevytváří o nic víc skutečné hodnoty,
      na této metrice zlepšenou hodnotu“ (téma 7.1)
- [ ] Míra selhání změn a míra vad se posuzují vedle každého nárůstu frekvence
      nasazení nebo objemu commitů s podporou AI (téma 7.1)
- [ ] Kapacita a hloubka revize se sledují, jak se mění objem kódu
      generovaného AI (téma 7.1)
- [ ] Uniklé vady se označují podle úrovně podpory AI, aby se ověřovalo, a
      nepředpokládalo, zda historický vztah míry vad stále platí
      (témata 7.1, 7.3)
- [ ] Pro cesty kódu s intenzivním využitím AI jsou zavedeny metody detekce
      odolné vůči vadám „vypadá správně“ (mutační testování, testování
      založené na vlastnostech) (téma 7.3)
- [ ] Charta metrik byla výslovně znovu projita a aktualizována pro tuto
      změnu, nenechala se neprozkoumaně driftovat (témata 1.4, 7.1)

## Kontrolní seznam auditu programu metrik (roční)

- [ ] Každá metrika má stále jmenovaného vlastníka (téma 1.4)
- [ ] Alespoň jedna metrika byla v posledním cyklu vyřazena, pokud přestala
      stát za svou existenci (téma 1.1)
- [ ] Pětidimenzionální hodnocení zralosti bylo provedeno poctivě, skórováno
      minimem, nikoli průměrem (téma 8.4)
- [ ] Žádná metrika nesklouzla z diagnostického do hodnoticího použití bez
      výslovného, zveřejněného rozhodnutí (téma 1.1)
- [ ] Definice byly namátkově zkontrolovány proti skutečné instrumentaci na
      drift (témata 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Poměr výsledků k výstupům na hlavních dashboardech byl vypočten a
      přezkoumán (téma 7.4)
