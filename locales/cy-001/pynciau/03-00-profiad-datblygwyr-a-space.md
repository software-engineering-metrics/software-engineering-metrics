# 3.0 Cyflwyniad i Ran 3: Profiad Datblygwyr a'r Fframwaith SPACE

Mesurodd Rhan 2 gyflenwi o'r tu allan: pa mor gyflym a pha mor ddiogel y
mae cod yn symud trwy biblinell. Mae'r rhan hon yn mesur profiad y bobl
sy'n cynhyrchu'r cod hwnnw, ac mae'n bodoli oherwydd gall set fetrigau
cyflenwi ar ei phen ei hun edrych yn rhagorol tra bo'r bodau dynol y tu
ôl iddi'n llosgi allan, yn boddi mewn ymyriadau, neu'n datgysylltu'n
dawel. Gall sefydliad sy'n gwylio dim ond metrigau DORA eu gwella am
flwyddyn neu ddwy trwy wasgu tîm yn galetach, hyd nes i draul staff,
cwymp ansawdd, neu losgi allan ddileu'r enillion i gyd ar unwaith. Y rhan
hon yw'r gwrthbwysau.

Y prif ffocws yw'r **[fframwaith SPACE](https://queue.acm.org/detail.cfm?id=3454124)**,
a ddatblygwyd gan ymchwilwyr o Microsoft, GitHub, a Phrifysgol Victoria
yn benodol fel cywiriad i arfer y diwydiant o fesur cynhyrchiant
datblygwyr trwy un dirprwy syml, hawdd ei dwyllo, fel llinellau o god
neu gyfrif ymrwymiad. Mae SPACE yn cwmpasu pum dimensiwn: boddhad a
llesiant, perfformiad, gweithgarwch, cyfathrebu a chydweithio, ac
effeithlonrwydd a llif. Disgyblaeth ganolog y fframwaith, a'r rheswm y
mae'r rhan hon yn ei drin â'r un trylwyredd ag y mae Rhan 2 yn ei
gymhwyso i'w metrigau llif ei hun, yw nad yw'r un dimensiwn sengl ar ei
ben ei hun yn ddibynadwy; daw'r gwerth yn benodol o ddal pob un o'r
pump mewn golwg gyda'i gilydd, fel na all tîm edrych yn dda ar un echel
trwy niweidio un arall yn dawel.

I dimau mawr, mae metrigau profiad datblygwyr yn ateb cwestiwn na all
DORA ei ateb: a yw'r perfformiad cyflenwi hwn yn gynaliadwy, ac a yw'r
sefydliad yn cadw'r bobl sy'n ei gynhyrchu. Mae sefydliadau menter sy'n
anwybyddu'r rhan hon yn tueddu i ddarganfod y gost trwy ddata traul
staff a chyfweliadau ymadael, ymhell ar ôl i'r niwed gael ei wneud; mae
gan sefydliadau llywodraeth, sy'n aml yn gweithredu o dan gyfyngiadau
cyflog sector cyhoeddus sy'n cyfyngu ar eu gallu i gystadlu ar sail cyflog
yn unig, resymau arbennig o gryf dros drin profiad datblygwyr fel
pryder dosbarth-cyntaf, wedi'i reoli'n weithredol yn hytrach nag
ôl-ystyriaeth.

## Pynciau yn y rhan hon

- **3.1 Y fframwaith SPACE:** Y pum dimensiwn gyda'i gilydd, pam nad
  yw'r un sengl yn ddibynadwy ar ei ben ei hun, a sut i adeiladu set
  fetrigau wirioneddol gytbwys ohonynt.
- **3.2 Metrigau boddhad a llesiant:** Mesur cyflawniad, rhwystredigaeth, a
  risg llosgi allan, y dimensiwn na all unrhyw delemetreg system ei
  arsylwi'n uniongyrchol.
- **3.3 Metrigau perfformiad a dirprwyon canlyniad:** Y dimensiwn a
  ddrysir hawsaf â gweithgarwch, a sut i fesur cyfraniad canlyniad
  gwirioneddol yn lle hynny.
- **3.4 Metrigau gweithgarwch a'u cyfyngiadau:** Cyfrifon ymrwymiad,
  llinellau o god, a pham dyma'r dimensiwn mwyaf peryglus i'w
  or-bwysoli.
- **3.5 Metrigau cyfathrebu a chydweithio:** Sut mae gwybodaeth mewn
  gwirionedd yn llifo rhwng pobl a thimau, a sut olwg sydd ar batrwm
  iach.
- **3.6 Effeithlonrwydd a llif: gwaith dwfn ac ymyriadau:** Diogelu'r
  amser di-dor y mae gwaith peirianneg gwirioneddol ei angen, a mesur y
  ffrithiant sy'n ei erydu.
- **3.7 Arolygon profiad datblygwyr a metrigau DevEx:** Sut i redeg
  arolwg sy'n cynhyrchu signal dibynadwy yn hytrach na chystadleuaeth
  boblogrwydd, a sut i'w gyfuno â data gwrthrychol.

## Sut mae'r pynciau hyn yn cydberthyn

Mae pwnc 3.1 yn cyflwyno pob un o'r pum dimensiwn SPACE gyda'i
gilydd, ac yna mae pynciau 3.2 i 3.6 yn cymryd pob dimensiwn yn ei dro
ar ddyfnder gwirioneddol, yn y drefn y mae ymchwilwyr SPACE yn eu
cyflwyno. Mae pwnc 3.7 yn cau'r rhan â mecaneg ymarferol dylunio
arolwg, gan fod boddhad, perfformiad, a chydweithio i gyd yn dibynnu'n
rhannol ar ddata hunan-adrodd (mae gwahaniaeth offeryno-yn-erbyn-
hunan-adrodd pwnc 1.5 yn uniongyrchol berthnasol drwy'r rhan hon) ac
mae arolwg wedi'i ddylunio'n wael yn tanseilio pob un o'r pynciau
blaenorol.

Disgyblaeth ganolog y rhan hon, cydbwysedd ar draws dimensiynau yn
hytrach na chryfder mewn un, yw'r enghraifft weithredig fwyaf clir sydd
gan y llyfr hwn o egwyddor canlyniadau-dros-allbwn pwnc 1.3 wedi'i
chymhwyso i bobl yn hytrach na phiblinell gyflenwi. Gweithgarwch
(pwnc 3.4) yw'r dimensiwn SPACE sydd fwyaf tebyg i fetrig allbwn pur,
ac mae'r rhan hon yn ei drin yn unol â hynny: defnyddiol fel un mewnbwn
ymhlith pump, peryglus fel signal annibynnol. Wedi'i ddarllen ochr yn
ochr â Rhan 2, mae'r rhan hon yn cwblhau'r darlun na all DORA ar ei ben
ei hun ei ddarparu: nid yn unig a yw meddalwedd yn cael ei gyflenwi'n
gyflym ac yn ddiogel, ond a all y bobl sy'n ei gyflenwi gynnal y
cyflymder hwnnw.
