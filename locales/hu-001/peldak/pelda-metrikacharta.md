# Példa: metrikacharta egy fizetési platformcsapat számára

Egy metrikacharta kidolgozott példája, amilyen egyoldalas dokumentumot az [1.4 téma, Metrikagovernance és felelősség](../temak/01-04-metrikagovernance-es-felelosseg.md) ír le. A lényeg az alak: kimondott cél, kifejezett nem-cél, megnevezett felelősök és felülvizsgálati ütem. Egy ilyen rövid chartát azért írnak, hogy elolvassák, nem azért, hogy irattárba kerüljön.

- **Csapat:** Fizetési platform
- **Felelős:** A platformmérnöki csapat vezetője
- **Felülvizsgálat:** Negyedévente, a platform-értekezleten

## Cél

Ez a charta azokat a metrikákat szabályozza, amelyeket a fizetési platformcsapat a saját szállításáról és megbízhatóságáról követ. Azért létezik, hogy mindenki, a csapaton belül és kívül is, lássa, mit mérünk, miért, és mire nem szolgál.

## Amit követünk

| Metrika | Igazságforrás | Felelős |
| --- | --- | --- |
| Telepítési gyakoriság | CI/CD pipeline | Platformvezető |
| Változtatások átfutási ideje | Git és a telepítési pipeline | Platformvezető |
| Változtatási hibaarány | Incidenskövető, telepítés szerint címkézve | Ügyeletvezető |
| Sikertelen telepítés helyreállítási ideje | Incidenskövető | Ügyeletvezető |
| P99 API-késleltetés (SLI) | Megfigyelhetőségi platform | SRE-vezető |
| Hibakeret-fogyasztás | Megfigyelhetőségi platform | SRE-vezető |

## Nem-célok

Ezeket a metrikákat sem külön-külön, sem együtt nem használjuk mérnökök rangsorolására, teljesítményértékelésre, sem arra, hogy ezt a csapatot egy másik csapat ütemtervéhez mérjük, ha nem hasonlítjuk össze a hatókört, a létszámot és a rendszer érettségét is. A fent kimondott célon kívüli bármilyen felhasználáshoz a mérnöki igazgató és maga a csapat jóváhagyása kell.

## Védőkorlátok

A fenti metrikák mindegyikéhez, amelyhez ösztönzés kapcsolódik, védőkorlát tartozik. A változtatások átfutási idejét a változtatási hibaaránnyal együtt figyeljük, így a csapat nem javíthatja a sebességi számát kockázatosabb változtatások szállításával. A telepítési gyakoriságot ugyanezért a hibakeret-fogyasztással együtt figyeljük.

## Felülvizsgálati ütem

A csapat negyedévente felülvizsgálja ezt a chartát. Az a metrika, amely két egymást követő negyedévben nem változtatott meg egyetlen döntést sem, a megszüntetés jelöltje.
