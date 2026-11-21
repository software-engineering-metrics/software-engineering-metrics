# 9.1 Szószedet

A könyvben használt kifejezések és betűszavak definíciói. Minden bejegyzés megnevezi azt a témát, ahol a kifejezést mélyen bevezetjük.

**Aktivitásmetrika.** A mérnöki mozgás (commitok, pull requestek, kódsorok) számlálása, amely a mennyiséget méri, nem az értéket. Lásd 3.4 téma.

**A változtatások átfutási ideje.** A kódváltoztatás első commitjától az éles rendszerbeli sikeres telepítéséig eltelt idő. A négy DORA-metrika egyike. Lásd 2.10 téma.

**Busz-faktor.** Azoknak az embereknek a száma, akiknek elérhetetlenné kellene válniuk ahhoz, hogy egy rendszer vagy tudás karbantarthatatlanná váljon. Az egyes busz-faktor súlyos kockázat. Lásd 3.5 téma.

**Ciklomatikus komplexitás.** Egy kódrészlet vezérlési folyamatában lévő független utak száma, amelyet Thomas J. McCabe vezetett be 1976-ban. Lásd 4.1 téma.

**Ciklusidő.** Az átfutási idő belső bontása szakaszokra: kódolás, áttekintés, tesztelés és telepítés. Lásd 2.6 téma.

**CVSS (Common Vulnerability Scoring System).** Szabványosított skála a biztonsági sérülékenység súlyosságának pontozására. Lásd 6.4 téma.

**DevEx (fejlesztői élmény).** A SPACE-hez kapcsolódó tágabb megközelítés, amely a visszajelzési hurkok, a kognitív terhelés és a flow-állapot köré szerveződik. Lásd 3.7 téma.

**DORA-metrikák.** Négy metrika a DevOps Research and Assessment programból: telepítési gyakoriság, a változtatások átfutási ideje, változtatási hibaarány és sikertelen telepítés helyreállítási ideje. Lásd 2.10 téma.

**Egységgazdaságtan.** A költség az átadott érték értelmes egységére (ügyfelenként, tranzakciónként) kifejezve, nem átláthatatlan összegként. Lásd 5.4 téma.

**Eredménytelemetria.** A valódi eredmények folyamatos, műszerezett mérése a tevékenység vagy a kibocsátás helyett. Lásd 7.4 téma.

**Értékáram.** Az ötletet az ügyfél által kapott értékké alakító tevékenységek végpontól végpontig tartó sorozata, a Flow Framework mérési egysége. Lásd 2.1 téma.

**Feldolgozási idő (PT).** Az egyetlen egységen végzett tényleges, kézzelfogható munkával töltött idő, szemben a várakozással töltött idővel, a klasszikus Lean értékáram-térképezésből. Lásd 2.8 téma.

**FinOps.** A pénzügyi felelősség bevezetésének tudománya a változó felhő-infrastruktúra-költésbe. Lásd 5.4 téma.

**Flow-elem.** A Flow Framework munkaegysége: funkció-, hiba-, kockázat- vagy adósságelem, a beérkezéskor osztályozva. Lásd 2.2 téma.

**Flow-eloszlás.** Egy adott időszakban a befejezett flow-elemek aránya flow-elemtípusonként. Lásd 2.3 téma.

**Flow-hatékonyság.** Az aktív munkaidő és a teljes eltelt idő aránya egy szállítási folyamaton áthaladó munkadarabnál. Lásd 2.5 téma.

**Flow-idő.** A flow-elem értékáramba lépésétől a leszállításáig eltelt teljes idő, amely az egész értékáramot átfogja, nem csak a mérnöki munkát. Lásd 2.4 téma.

**Flow-sebesség.** Egy adott időszakban befejezett flow-elemek száma, az átbocsátás Flow Framework-beli mérőszáma. Lásd 2.3 téma.

**Flow-terhelés.** Az értékáramban jelenleg aktív vagy várakozó flow-elemek teljes száma, a folyamatban lévő munka Flow Framework-beli neve. Lásd 2.4 téma.

**Flow Framework.** Mik Kersten által létrehozott vezetési modell, amely a szoftverszállítást értékáramként kezeli, és négy flow-elemtípussal és öt flow-metrikával méri. Lásd 2.1 téma.

**Folyamatban lévő munka (WIP).** Egy csapatnál vagy rendszerben egyszerre aktívan dolgozott elemek száma. Lásd 2.5 téma.

**Goodhart törvénye.** Az elv, hogy amikor egy mérték céllá válik, megszűnik jó mérték lenni. A könyv központi, irányadó gondolata. Lásd 1.2 téma.

**Gördülő átbocsátási hozam.** Az értékáram minden szakaszának kész és pontos arányai összeszorozva, megmutatva, hogyan halmozódik az újramunka egy többszakaszos folyamatban. Lásd 2.8 téma.

**Hibakeret.** A szolgáltatásiszint-cél és a 100%-os megbízhatóság közötti megengedett hiány, elkölthető erőforrásként kezelve. Lásd 6.1 téma.

**Hiúsági metrika.** Olyan metrika, amely megbízhatóan emelkedik, lenyűgözően néz ki, és nem változtat meg semmilyen döntést. Lásd 1.1 téma.

**Hotspot.** Olyan fájl vagy modul, amely egyszerre gyakran változik (nagy fluktuáció) és nagyon összetett, a hotspot-elemzéssel azonosítva. Lásd 4.3 téma.

**Kész és pontos arány (%C/A).** Azon egységek százaléka, amelyeket egy lejjebbi csapat újramunka nélkül fel tud dolgozni, a klasszikus Lean értékáram-térképezésből. Lásd 2.8 téma.

**Kihasználtság.** Az erőforrás rendelkezésre álló kapacitásának foglalt hányada, a beérkezési ráta és a kiszolgálási ráta hányadosaként számolva. A várakozási idő élesen, nem fokozatosan nő, ahogy a kihasználtság eléri a teljes kapacitást. Lásd 2.7 téma.

**Kiszökött hiba.** Olyan hiba, amely eljut az éles rendszerbe, és valódi felhasználót érint, szemben azzal, amelyet az áttekintés vagy a tesztelés elkap. Lásd 5.1 téma.

**Little törvénye.** A bizonyíték arra, hogy egy stabil sorban az elemek átlagos száma megegyezik az átlagos beérkezési ráta és az elemek rendszerben töltött átlagos idejének szorzatával. A szállításra alkalmazva a folyamatban lévő munka egyenlő a beérkezési ráta szorozva a ciklusidővel. Lásd 2.7 téma.

**Metrikafa.** Struktúra, amely egy felső szintű eredménymetrikát a mozgatóin át az egyes csapatok tulajdonában lévő operatív metrikákig köt össze. Lásd 1.3 téma.

**MTTA (átlagos nyugtázási idő).** Az incidens értesítésétől addig eltelt idő, amíg valaki átveszi a válaszadás felelősségét. Lásd 6.2 téma.

**MTTD (átlagos észlelési idő).** Az incidens tényleges kezdetétől addig eltelt idő, amíg valaki észreveszi, hogy bekövetkezett. Lásd 6.2 téma.

**MTTR (átlagos helyreállítási idő / átlagos megoldási idő).** A szolgáltatás hiba utáni teljes helyreállításához szükséges idő. Telepítés okozta hibáknál (2.10 téma) és általános incidenseknél (6.2 téma) egyaránt használják.

**Mutációs tesztelés.** Módszer, amely szándékosan kis, mesterséges hibákat visz a kódba annak ellenőrzésére, hogy a tesztkészlet ténylegesen elkapja-e őket, a lefedettség kiegészítéseként. Lásd 4.2 téma.

**ROI (megtérülés).** Egy kezdeményezés pénzügyi hozama a költségéhez viszonyítva, itt dokumentált költség- és eredményadatokra épülve, nem feltevésre. Lásd 5.5 téma.

**Sarkcsillag-metrika.** Az az egyetlen mérték, amely a legjobban megragadja a szervezet által nyújtott alapértéket, a metrikafa csúcsán. Lásd 1.3 téma.

**SLI (szolgáltatásiszint-mutató).** A szolgáltatás egészségének közvetlenül mért jele, például a késleltetés vagy a hibaarány. Lásd 6.1 téma.

**SLO (szolgáltatásiszint-cél).** A szolgáltatásiszint-mutató célzott tartománya. Lásd 6.1 téma.

**Sorbanállás-elmélet.** A várakozási sorok matematikai tanulmányozása, a szállítási folyamatokra alkalmazva annak magyarázatára, hogyan határozza meg a folyamatban lévő munka, a beérkezési ráta és a kihasználtság a várakozási időt. Lásd 2.7 téma.

**SPACE keretrendszer.** Ötdimenziós keretrendszer a fejlesztői termelékenységhez: elégedettség és jóllét (Satisfaction and well-being), teljesítmény (Performance), tevékenység (Activity), kommunikáció és együttműködés (Communication and collaboration), hatékonyság és flow (Efficiency and flow). Lásd 3.1 téma.

**SRE (webhelymegbízhatósági mérnökség).** A Google-nél úttörő módon kialakított tudományág, amely a szoftvermérnöki megközelítéseket az üzemeltetésre és a megbízhatóságra alkalmazza. Lásd 6.1 téma.

**Szabályozókártya.** Olyan diagram, amely egy metrika szokásos ingadozási tartományát mutatja az időben, és segít megkülönböztetni a valódi változást a szokásos zajtól. Lásd 1.6 téma.

**TCO (teljes birtoklási költség).** Egy kezdeményezés vagy rendszer teljes költsége az élettartama alatt, a folyamatos karbantartást és infrastruktúrát is beleértve, nem csak az előzetes költséget. Lásd 5.5 téma.

**Technikai adósság.** A kódbázisban a múltbeli rövidítések felhalmozott költsége, kezelhető kompromisszum metaforája, nem szégyellnivaló titok. Lásd 4.5 téma.

**Telepítési gyakoriság.** Milyen gyakran ad ki egy csapat sikeresen az éles rendszerbe. A négy DORA-metrika egyike. Lásd 2.10 téma.

**Ütemidő (takt time).** A maximálisan elfogadható idő egy munkaegység elvégzésére, amely tisztán illeszkedik az ügyféligényhez, a klasszikus Lean értékáram-térképezésből. Lásd 2.8 téma.

**Változtatási hibaarány.** Azoknak a telepítéseknek a százaléka, amelyek éles hibát okoznak, és javítást igényelnek. A négy DORA-metrika egyike. Lásd 2.10 téma.

**Védőkorlát-metrika.** Párosított ellenmetrika, amely nem romolhat, miközben egy ösztönzött metrika javul, a kijátszás elkapására tervezve. Lásd 1.2 téma.
