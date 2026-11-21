# 9.4 Sablonok

Másolható sablonok visszatérő dokumentumokhoz. Az első kettő kidolgozott, kitöltött példái a [`peldak/`](../peldak/attekintes.md) könyvtárban találhatók.

## Metrikacharta-sablon

```markdown
# Metrikacharta: [csapat vagy metrikakészlet neve]

- **Csapat:** [felelős csapat]
- **Felelős:** [nevesített személy vagy szerep]
- **Áttekintés:** [ütem, pl. negyedévente]

## Cél

[Egy-két mondat: mit irányít ez a charta, és miért.]

## Mit követünk

| Metrika | Igazság forrása | Felelős |
| --- | --- | --- |
| [metrika] | [rendszer] | [nevesített felelős] |

## Nem-célok

[Kifejezett állítás arról, mire nem használják ezeket a metrikákat, pl.
egyéni teljesítményértékelésre, kontextus nélküli csapatok közötti rangsorolásra.]

## Védőkorlátok

[Minden ösztönzött metrikához nevezd meg a párosított védőkorlátját, és hogy
milyen kijátszási mintát kap el.]

## Áttekintési ütem

[Mikor és hogyan vizsgálják felül ezt a chartát, mi váltja ki egy metrika
kivezetését.]
```

## Dashboardspecifikáció-sablon

```markdown
# Dashboardspecifikáció: [dashboard neve]

## Közönség

[Kinek szól ez a dashboard, és milyen döntést tájékoztat. Mondd ki
kifejezetten, ha nem egyéni értékelésre való.]

## Csempék (megjelenítési sorrendben)

1. **[Metrika neve]**, [időablak], [diagramtípus]. [Bármilyen konkrét
   vizualizációs megjegyzés: tengelyszabályok, jegyzetek.]
2. ...

## Vizualizációs szabályok

- A tengelyek nullától indulnak, hacsak másképp nincs megadva, a kivételt
  a csempén dokumentálva.
- [Bármilyen más projektspecifikus őszinteségi szabály.]

## Frissítési ütem

[Milyen gyakran frissül az egyes csempe, és melyik forrásból.]

## Amit ez a dashboard szándékosan kihagy

[Nevezz meg mindent, amit szándékosan kihagytál, és miért, pl. egyéni
aktivitásszámok.]
```

## Metrikaáttekintő megbeszélés napirendjének sablonja

```markdown
# Metrikaáttekintés: [dátum]

## Résztvevők

[Nevek és szerepek]

## Áttekintett metrikák

Minden metrikánál:
- Jelenlegi érték és trend
- Bármilyen mozgás a szokásos ingadozáson kívül (1.6 téma)
- A párosított védőkorlát állapota, ha alkalmazható
- A döntés, amelyet ez az érték tájékoztat, ha van

## Javasolt új metrikák

[Futtasd át mindegyiket az új metrika áttekintési ellenőrzőlistán, 9.3 téma.]

## Kivezetésre megfontolt metrikák

[Mely metrikák nem tájékoztattak döntést az elmúlt két ciklusban?]

## Teendők

| Tétel | Felelős | Határidő |
| --- | --- | --- |
| | | |
```

## Hibáztatásmentes utólagos elemzés sablonja

```markdown
# Utólagos elemzés: [incidens neve], [dátum]

## Összefoglaló

[Egy bekezdés: mi történt, felhasználói hatás, időtartam.]

## Idővonal

- Észlelés: [idő, hogyan észlelték]
- Nyugtázás: [idő, ki válaszolt]
- Megoldás: [idő, mi javította ki]

## Súlyosság

[Osztályozás dokumentált kritériumok szerint, 6.2 téma.]

## Kiváltó ok

[Mi tette lehetővé ezt, rendszerkérdésként megfogalmazva, nem egyéni
kérdésként.]

## Mi ment jól

[Konkrét dolgok, amelyek működtek a reagálásban.]

## Teendők

| Tétel | Felelős | Határidő |
| --- | --- | --- |
| | | |

## Utókövetés

[Megerősítés, hogy a teendőket a befejezésig követték, a következő
áttekintési ciklus szerint.]
```

## ROI-érv sablonja

```markdown
# ROI-érv: [kezdeményezés neve]

## Költség (teljes birtoklási költség, 5.5 téma)

- Előzetes: [fejlesztési költség]
- Folyamatos: [karbantartás, infrastruktúra, támogatás, évente]
- Lehetőségköltség: [mi mást tehetett volna ez a kapacitás]

## Haszon (dokumentált bizonyíték, 5.1–5.3 téma)

- [1. haszon], bizonyítja: [adatforrás]
- [2. haszon], bizonyítja: [adatforrás]

## Tartomány és feltevések

- Konzervatív eset: [érték]
- Optimista eset: [érték]
- A tartományt meghatározó kulcsfeltevés: [nevezd meg]

## Megvizsgált és kizárt zavaró tényezők

[Mi más magyarázhatná a vetített hasznot, és miért zárták ki vagy
számoltak vele.]

## Befejezés utáni ellenőrzés (a kezdeményezés befejezése után töltsd ki)

- Tényleges eredmény: [érték]
- A vetített tartományhoz képest: [felett / belül / alatt]
- Mit tanít ez nekünk a következő becsléshez: [megjegyzés]
```
