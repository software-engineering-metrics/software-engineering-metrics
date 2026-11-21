# Exemplu: specificație pentru un tablou de bord cu metrici de livrare

O specificație rezolvată pentru un tablou de bord, după [subiectul 8.1, Proiectarea unui tablou de bord pentru metricile ingineriei](../subiecte/08-01-proiectarea-unui-tablou-de-bord-de-metrici.md). Contează forma: un public numit, un număr mic de tile, un standard onest de vizualizare și un ritm de reîmprospătare declarat.

## Public

Conducerea ingineriei și echipa platformei, la revizuirea bilunară a livrării. Nu este destinat evaluării performanței individuale.

## Tile (în ordinea afișării)

1. **Frecvența implementărilor**, ultimele 4 săptămâni, pe echipe. Grafic cu linii, intervale săptămânale, axa începe de la zero.
2. **Timpul de livrare al modificărilor**, mediana și percentila 90, ultimele 4 săptămâni. Grafic cu bare cu ambele serii afișate, nu doar mediana.
3. **Rata de eșec a modificărilor**, ultimele 4 săptămâni, cu definiția agreată de echipă pentru „eșec” legată din tilă.
4. **Timpul de recuperare după o implementare eșuată**, mediana, ultimele 4 săptămâni.
5. **Bugetul de erori rămas**, trimestrul curent, pe serviciu, ca procent.

## Reguli de vizualizare

- Fiecare grafic de tendință arată cel puțin opt puncte de date, niciodată o singură imagine instantanee.
- Axele încep de la zero, cu excepția cazului în care o excepție declarată este documentată în tilă.
- Implementările, incidentele și sărbătorile sunt adnotate pe axa timpului, ca un cititor să poată deosebi o schimbare reală de zgomot.
- Fără axe duble, fără efecte 3-D, fără intervale de date alese selectiv.

## Ritm de reîmprospătare

Tilele alimentate din pipeline (frecvența implementărilor, timpul de livrare) se reîmprospătează din oră în oră. Tilele alimentate din incidente (rata de eșec a modificărilor, timpul de recuperare) se reîmprospătează la închiderea analizei post-incident. Tabloul de bord își afișează singur ora ultimei reîmprospătări.

## Ce exclude deliberat acest tablou de bord

Numărul de commit-uri individuale, numărul de pull request-uri individuale și liniile de cod. Sunt metrici de activitate cu un istoric bine documentat de manipulare și de măsurare a efortului, nu a rezultatului (subiectul 3.4).
