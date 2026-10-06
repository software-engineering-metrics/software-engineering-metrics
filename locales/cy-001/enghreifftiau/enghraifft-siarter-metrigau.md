# Enghraifft: siarter metrigau ar gyfer tîm llwyfan taliadau

Enghraifft weithiedig o siarter metrigau, y math o ddogfen un dudalen a
ddisgrifir ym [mhwnc 1.4, Llywodraethiant a pherchnogaeth metrigau](../pynciau/01-04-llywodraethiant-a-pherchnogaeth-metrigau.md).
Y pwynt yw'r siâp: diben datganedig, an-nod eglur, perchnogion a enwir, a
chylch adolygu. Mae siarter mor fyr â hon i fod i gael ei darllen, nid ei ffeilio.

- **Tîm:** Llwyfan taliadau
- **Perchennog:** Rheolwr peirianneg llwyfan
- **Adolygu:** Bob chwarter, yn yr adolygiad llwyfan

## Diben

Mae'r siarter hon yn llywodraethu'r metrigau y mae'r tîm llwyfan taliadau yn eu
holrhain ynghylch ei gyflenwi a'i ddibynadwyedd ei hun. Mae'n bodoli fel y gall
pawb, y tu mewn a'r tu allan i'r tîm, weld beth a fesurir, pam, a beth nad ydynt
at ei ddiben.

## Beth rydym yn ei olrhain

| Metrig | Ffynhonnell y gwir | Perchennog |
| --- | --- | --- |
| Amlder defnyddio | Piblinell CI/CD | Arweinydd llwyfan |
| Amser arwain ar gyfer newidiadau | Git a'r biblinell ddefnyddio | Arweinydd llwyfan |
| Cyfradd methiant newid | Olrheinydd digwyddiadau, wedi'i dagio yn ôl defnyddio | Arweinydd galwadau |
| Amser adfer ar ôl defnyddio aflwyddiannus | Olrheinydd digwyddiadau | Arweinydd galwadau |
| Hwyrni API P99 (SLI) | Llwyfan arsylwadwyedd | Arweinydd SRE |
| Cyfradd llosgi cyllideb gwall | Llwyfan arsylwadwyedd | Arweinydd SRE |

## An-nodau

Ni ddefnyddir y metrigau hyn byth, yn unigol nac ar y cyd, i raddio peirianwyr,
i werthuso adolygiadau perfformiad, nac i gymharu'r tîm hwn â map llwybr tîm
arall heb gymharu cwmpas, staffio ac aeddfedrwydd y system hefyd. Mae angen
cymeradwyaeth y cyfarwyddwr peirianneg a'r tîm ei hun ar gyfer unrhyw
ddefnydd y tu hwnt i'r diben a nodir uchod.

## Rheiliau diogelwch

Mae pob metrig uchod sy'n cario cymhelliant wedi'i bârio â rheilen ddiogelwch.
Caiff amser arwain ar gyfer newidiadau ei wylio ochr yn ochr â'r gyfradd
methiant newid, fel na all tîm wella ei rif cyflymder trwy anfon newidiadau mwy
peryglus. Caiff amlder defnyddio ei wylio ochr yn ochr â chyfradd llosgi
cyllideb gwall, am yr un rheswm.

## Cylch adolygu

Mae'r tîm yn adolygu'r siarter hon bob chwarter. Mae metrig na chyfrannodd at
newid penderfyniad mewn dau chwarter olynol yn ymgeisydd i'w ymddeol.
