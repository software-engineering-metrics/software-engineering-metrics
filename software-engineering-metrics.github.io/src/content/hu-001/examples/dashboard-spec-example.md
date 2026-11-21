# Példa: dashboard-specifikáció egy szállítási metrikák dashboardjához

Kidolgozott dashboard-specifikáció a [8.1 téma, Mérnöki metrikák dashboardjának tervezése](../chapters/08-01-mernoki-metrikak-dashboardjanak-tervezese.md) nyomán. A lényeg az alak: megnevezett közönség, kevés csempe, tisztességes vizualizációs szabvány és kimondott frissítési ütem.

## Közönség

A mérnöki vezetés és a platformcsapat, kéthetente a szállítási értekezleten átnézve. Nem egyéni teljesítményértékelésre szolgál.

## Csempék (megjelenítési sorrendben)

1. **Telepítési gyakoriság**, az elmúlt 4 hét, csapatonként. Vonaldiagram, heti kosarak, a tengely nulláról indul.
2. **Változtatások átfutási ideje**, medián és 90. percentilis, az elmúlt 4 hét. Oszlopdiagram mindkét sorozattal, nem csak a mediánnal.
3. **Változtatási hibaarány**, az elmúlt 4 hét, a csapat által elfogadott "hiba" definícióra mutató hivatkozással a csempén.
4. **Sikertelen telepítés helyreállítási ideje**, medián, az elmúlt 4 hét.
5. **Hátralévő hibakeret**, az aktuális negyedév, szolgáltatásonként, százalékban.

## Vizualizációs szabályok

- Minden trenddiagram legalább nyolc adatpontot mutat, soha nem egyetlen pillanatképet.
- A tengelyek nullától indulnak, kivéve, ha a csempén dokumentált kivétel áll.
- A telepítéseket, incidenseket és ünnepnapokat az idővonalon jelöljük, hogy az olvasó meg tudja különböztetni a valódi elmozdulást a zajtól.
- Nincs kettős tengely, nincs 3D-effekt, nincsenek kiválogatott dátumtartományok.

## Frissítési ütem

A pipeline-ból származó csempék (telepítési gyakoriság, átfutási idő) óránként frissülnek. Az incidensekből származó csempék (változtatási hibaarány, helyreállítási idő) az utólagos elemzés lezárásakor frissülnek. A dashboard kiírja a saját utolsó frissítési idejét.

## Amit ez a dashboard szándékosan kihagy

Egyéni commitszámokat, egyéni pull request-számokat és kódsorokat. Ezek aktivitásmetrikák, amelyek kijátszásának jól dokumentált története van, és amelyek az erőfeszítést mérik, nem az eredményt (3.4 téma).
