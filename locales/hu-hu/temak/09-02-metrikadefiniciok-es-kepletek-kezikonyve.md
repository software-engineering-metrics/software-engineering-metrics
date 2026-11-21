# 9.2 Metrikadefiníciók és képletek kézikönyve

A könyv minden képlete egy helyen. Minden bejegyzés megnevezi azt a témát, ahol a teljes tárgyalás található, a kijátszási kockázatot és a védőkorlátot is beleértve. Használd gyors kereséshez, ne a téma helyettesítésére.

## Flow-metrikák (2. rész)

| Metrika | Képlet | Téma |
| --- | --- | --- |
| Flow-sebesség | Az időegység alatt befejezett flow-elemek száma | 2.3 |
| Flow-eloszlás | (Az egy flow-elemtípusba tartozó befejezett elemek) / (Összes befejezett elem) x 100% | 2.3 |
| Flow-idő | A flow-elem értékáramba lépésétől a leszállításáig eltelt idő | 2.4 |
| Flow-terhelés | Az értékáramban jelenleg aktív vagy várakozó flow-elemek száma | 2.4 |
| Little törvénye | Flow-terhelés (folyamatban lévő munka) = Beérkezési ráta x Flow-idő (ciklusidő) | 2.4, 2.7 |
| Flow-hatékonyság | Aktív munkaidő / Teljes eltelt idő x 100% | 2.5 |
| Ciklusidő | A szakaszok időtartamának összege: kódolás + felvétel + áttekintés + tesztelés + telepítés | 2.6 |
| Kihasználtság | Beérkezési ráta / Kiszolgálási ráta | 2.7 |
| Kész és pontos arány (%C/A) | (Újramunka nélkül lejjebb felhasználható egységek) / (Összes egység) x 100% | 2.8 |
| Gördülő átbocsátási hozam | Az 1. szakasz %C/A-ja x a 2. szakasz %C/A-ja x ... x az N. szakasz %C/A-ja | 2.8 |
| Ütemidő (takt time) | Rendelkezésre álló munkaidő / Ügyféligény az adott időszakban | 2.8 |
| Idő az első áttekintésig | A pull request megnyitásától az áttekintő első érdemi válaszáig eltelt idő | 2.9 |
| Telepítési gyakoriság | Az időegység alatti sikeres éles telepítések száma | 2.10 |
| A változtatások átfutási ideje | Az első committól a sikeres éles telepítésig eltelt idő (jelentsd a mediánt és a 90. percentilist) | 2.10 |
| Változtatási hibaarány | (Hibát okozó telepítések) / (Összes telepítés) x 100% | 2.10 |
| Sikertelen telepítés helyreállítási ideje | A hiba észlelésétől a szolgáltatás valódi helyreállításáig eltelt idő | 2.10 |

## Fejlesztői élmény (3. rész)

| Metrika | Képlet | Téma |
| --- | --- | --- |
| Fókuszidő | A megszakítatlan, két óránál hosszabb blokkok száma és időtartama hetente, naptáradatokból | 3.6 |
| Válaszarány | (Beérkezett felmérésválaszok) / (Elküldött felmérési meghívók) x 100% | 3.7 |

## Kód és minőség (4. rész)

| Metrika | Képlet | Téma |
| --- | --- | --- |
| Ciklomatikus komplexitás | A vezérlési folyamat független útjai (élek − csomópontok + 2, McCabe szerint) | 4.1 |
| Tesztlefedettség | (A tesztek által végrehajtott sorok/ágak) / (Összes sor/ág) x 100% | 4.2 |
| Mutáns-megölési arány | (A tesztkészlet által megölt mutánsok) / (Összes bevezetett mutáns) x 100% | 4.2 |
| Kódfluktuáció | Hozzáadott + módosított + törölt sorok fájlonként egy időablakban | 4.3 |
| Hotspot-pontszám | Fluktuáció x Komplexitás, fájlonként rangsorolva | 4.3 |
| Adósság fenntartási költsége | Egy elem ki nem javításának becsült folyamatos költsége (lassabb kapcsolódó munka, magasabb hibakockázat) | 4.5 |

## Termék és üzlet (5. rész)

| Metrika | Képlet | Téma |
| --- | --- | --- |
| Kiszökött hibák aránya | (Súlyosság szerint súlyozott kiszökött hibák) / (Szállítási egység vagy idő) | 5.1 |
| Kezdeti elfogadás | (A funkciót legalább egyszer kipróbáló felhasználók) / (Célközönség) x 100% | 5.2 |
| Megtartott elfogadás | (N hét után is használó felhasználók) / (Eredetileg kipróbáló felhasználók) x 100% | 5.2 |
| Egységköltség | Teljes költség (emberek + infrastruktúra + eszközök) / Értelmes egység (ügyfél, tranzakció) | 5.4 |
| ROI | (Teljes haszon − Teljes birtoklási költség) / Teljes birtoklási költség, tartományként bemutatva | 5.5 |

## Megbízhatóság, üzemeltetés és biztonság (6. rész)

| Metrika | Képlet | Téma |
| --- | --- | --- |
| Hibakeret | (1 − SLO-cél) x Időablak (pl. 30 nap 0,1%-a ≈ 43 perc) | 6.1 |
| Hibakeret égési rátája | Elfogyasztott hibakeret / Kiosztott hibakeret egy adott ablakban | 6.1 |
| MTTD | Az incidens kezdetétől az észlelésig eltelt idő | 6.2 |
| MTTA | Az incidens értesítésétől a nyugtázásig eltelt idő | 6.2 |
| MTTR (incidens) | A nyugtázástól a szolgáltatás valódi helyreállításáig eltelt idő | 6.2 |
| Ügyeleti riasztáseloszlás | Egyénenként kapott riasztások egy gördülő ablakban (nem a csapatátlag) | 6.3 |
| Sérülékenység javításának ideje | A felfedezéstől a valódi javításig eltelt idő, súlyosság szerint követve | 6.4 |

## Megjegyzések a képletek használatához

- **A sebesség- vagy kibocsátási képletet mindig párosítsd a védőkorlátjával** (1.2 téma): a változtatási hibaarányt a telepítési gyakorisággal és az átfutási idővel, a kiszökött hibák arányát a szállítási sebességgel, a hibakeret égését a telepítési aktivitással.
- **Időalapú képleteknél mediánt és percentiliseket használj, ne átlagot** (1.6 téma), hacsak a képlet kifejezetten átlagot nem kér.
- **Minden képlethez dokumentált forrásrendszer és gyűjtési módszer kell** (1.5 téma) a matematikai definíció mellett. Két csapat, amely ugyanazt a képletet különböző forrásokból számolja, nem hoz összehasonlítható számokat.
- **A súlyosság szerinti súlyozás nem szerepel kifejezetten minden fenti képletben**, de mindenütt érvényes, ahol „súlyosság szerint súlyozott" szerepel. A teljes osztályozási rendszerért lásd az érintett témát.
