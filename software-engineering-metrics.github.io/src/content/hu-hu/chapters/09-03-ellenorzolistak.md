# 9.3 Ellenőrzőlisták

Azonnal használható gyorsellenőrző listák. Másolj egyet a saját folyamatodba, és igazítsd. A lényeg a lefedettség, nem a pontos megfogalmazás.

## Új metrika áttekintési ellenőrzőlistája (mielőtt bármilyen metrikát hozzáadnál egy dashboardhoz)

- [ ] A metrikának van megnevezett döntése, amelyet tájékoztat (1.1 téma)
- [ ] A metrika írásban diagnosztikusként vagy értékelőként van osztályozva (1.1 téma)
- [ ] Ha ösztönzött, a védőkorlát-metrika egyidejűleg meg van határozva (1.2 téma)
- [ ] A kijátszási vektor meg van nevezve: hogyan tehetné jóvá egy racionális csapat ezt a számot a valódi eredmény javítása nélkül (1.2 téma)
- [ ] A metrika bemenetként, kibocsátásként vagy eredményként van osztályozva (1.3 téma)
- [ ] A metrikának van nevesített felelőse, dokumentált forrásrendszere és gyűjtési módszere (1.4, 1.5 téma)
- [ ] A metrika mediánt vagy percentilist használ, nem átlagot, ha az alapul szolgáló adat ferde (1.6 téma)
- [ ] A metrikát soha nem használják egyéni értékelésre, vagy ezt a használatot külön és kifejezetten közzéteszik (1.1 téma)

## Dashboard-indítási ellenőrzőlista

- [ ] A dashboardnak egy nevesített, konkrét közönsége és döntése van (8.1 téma)
- [ ] Minden ösztönzött metrika ugyanazon a nézeten jelenik meg, mint a védőkorlátja (1.2, 8.1 téma)
- [ ] A tengelyek nullától indulnak, hacsak nincs dokumentált, látható kivétel (1.6 téma)
- [ ] Az időbeli trend látható, nem egyetlen pillanatkép (1.6 téma)
- [ ] A dashboardnak van nevesített felelőse és áttekintési üteme (1.4 téma)
- [ ] Látható állítás kimondja, mire nem való a dashboard, ha releváns (1.1 téma)
- [ ] Az adatforrásoknak van alapvető állapotellenőrzésük, hogy egy elromlott folyamat ne jelenjen meg csendben aktuálisként (1.5 téma)

## Metrikaprogram-bevezetési ellenőrzőlista

- [ ] A célt és a kifejezett nem-célokat az indulás előtt kommunikálták, nem reaktívan (8.3 téma)
- [ ] A mért embereket bevonták a metrikaválasztásba (8.3 téma)
- [ ] A program kizárólag diagnosztikai módban indul, vállalt minimális bizonyítási időszakkal (8.3 téma)
- [ ] Gyors, látható reagálási protokoll létezik bármilyen jövőbeli visszaélési esetre (8.3 téma)
- [ ] Olyan kísérleti csapatot választottak, amely valóban önként jelentkezett, nem olyat, amelyet kötelezettek (8.5 téma)
- [ ] Az alapvető governance (charta, felelősség, diagnosztikai szabályzat) a műszerezés megkezdése előtt a helyén van (1.4, 8.5 téma)

## Incidens- és utólagos elemzési ellenőrzőlista

- [ ] Az utólagos elemzés a rendszert vizsgálja, nem az egyént (6.2 téma)
- [ ] A súlyosságot dokumentált, szabványosított kritériumok szerint osztályozták (6.2 téma)
- [ ] Az észlelés, a nyugtázás és a megoldás idejét külön rögzítik (6.2 téma)
- [ ] A teendők konkrétak, hozzárendeltek, és a befejezésig követettek (6.2 téma)
- [ ] Az utólagos elemzést az egyéni következménytől való félelem nélkül osztják meg (6.2, 8.3 téma)

## MI-korszakbeli metrikaaudit ellenőrzőlistája

- [ ] A dashboard minden metrikáját megvizsgálták ezzel a kérdéssel: „mutatna-e javuló értéket itt egy csapat, amely sokat használ MI-támogatást, de nem állít elő több valódi értéket" (7.1 téma)
- [ ] A változtatási hibaarányt és a hibaarányt az MI-támogatott telepítési gyakoriság vagy commitmennyiség bármilyen emelkedése mellett vizsgálják (7.1 téma)
- [ ] Az áttekintési kapacitást és mélységet figyelik, ahogy az MI-generált kód mennyisége változik (7.1 téma)
- [ ] A kiszökött hibákat az MI-támogatás szintje szerint címkézik, hogy teszteljék, ne feltételezzék, hogy a történeti hibaarány-összefüggés még érvényes (7.1, 7.3 téma)
- [ ] A „helyesnek látszik" hibáknak ellenálló észlelési módszerek (mutációs tesztelés, tulajdonságalapú tesztelés) érvényben vannak az MI-intenzív kódútvonalakon (7.3 téma)
- [ ] A metrikachartát kifejezetten újra átnézték és frissítették erre a váltásra, nem hagyták vizsgálatlanul sodródni (1.4, 7.1 téma)

## Metrikaprogram-audit ellenőrzőlistája (éves)

- [ ] Minden metrikának még van nevesített felelőse (1.4 téma)
- [ ] Legalább egy metrikát kivezettek az utolsó ciklusban, ha már nem érdemelte meg a helyét (1.1 téma)
- [ ] Az ötdimenziós érettségi értékelést őszintén elvégezték, minimum, nem átlag szerint pontozva (8.4 téma)
- [ ] Egyetlen metrika sem sodródott a diagnosztikus használatból az értékelőbe kifejezett, közzétett döntés nélkül (1.1 téma)
- [ ] A definíciókat szúrópróbaszerűen ellenőrizték a tényleges műszerezéshez képest a sodródás szempontjából (1.2, 2.4, 5.1, 6.2, 6.4 téma)
- [ ] Az elsődleges dashboardok eredmény-kibocsátás arányát kiszámolták és áttekintették (7.4 téma)
