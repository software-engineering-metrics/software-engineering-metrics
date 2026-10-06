# 7.0 Cyflwyniad i Ran 7: Metrigau yn Oes AI

Cafodd pob metrig yn y llyfr hwn hyd yn hyn ei adeiladu ar gyfer byd lle
roedd ysgrifennu cod yn adnodd prin, llafurus. Mae offer deallusrwydd artiffisial cynhyrchiol (AI)
wedi newid y rhagosodiad hwnnw'n gyflymach nag y mae metrigau'r rhan
fwyaf o sefydliadau wedi dal i fyny ag ef. Pan all offeryn gynhyrchu
pull request sy'n edrych yn gredadwy mewn eiliadau, mae sawl metrig y
mae'r llyfr hwn yn ei gwmpasu mewn rhannau cynharach, cyfrifon
gweithgarwch yn fwyaf uniongyrchol (pwnc 3.4), ac i raddau
gwirioneddol amledd defnyddio crai (pwnc 2.10) a hyd yn oed gorchudd
profi (pwnc 4.2) os dilynir yn ddiofal, yn stopio mesur yr hyn yr
oeddent yn arfer ei fesur. Mae'r rhan hon yn bodoli oherwydd bod
rhaglen fetrigau nad yw'n mynd i'r afael yn benodol â'r symudiad hwn yn
mentro adrodd rhifau â hyder sydd wedi dod yn ddiystyr yn dawel, neu'n
waeth, yn wrthgynhyrchiol yn weithredol.

Mae pedwar pwnc y rhan hon yn olrhain arc bwriadol. Mae pwnc 7.1
yn enwi'r symudiad yn uniongyrchol ac yn egluro pam ei fod yn newid
paradeim, nid addasiad cynyddrannol. Mae pwnc 7.2'n ymdrin â sut i
fesur mewn gwirionedd a yw datblygiad â chymorth AI yn helpu, gan
ddefnyddio'r ddisgyblaeth canlyniadau-dros-allbwn a sefydlodd pwnc
1.3 o ddechrau'r llyfr hwn. Mae pwnc 7.3'n enwi'r peryglon newydd
penodol y mae'r symudiad hwn yn eu cyflwyno: metrigau sy'n chwyddo heb
werth cyfatebol, a gwanhad ansawdd sy'n rhagori ar allu cyfredol y
diwydiant i'w ganfod. Mae pwnc 7.4'n cau'r rhan ag ateb y llyfr hwn
i'r symudiad cyfan: tro bwriadol tuag at delemetreg canlyniad fel y
metrigau sy'n bwysicaf, yn union oherwydd na fu cyfaint allbwn erioed,
yn ôl dadl y rhan hon drwyddo draw, y peth cywir i optimeiddio ar ei
gyfer yn y lle cyntaf, ac mae AI cynhyrchiol wedi gwneud y gwirionedd
hwnnw'n syml amhosibl ei anwybyddu mwyach.

I dimau mawr, mae'r rhan hon yn frys yn hytrach na damcaniaethol. Mae
angen i sefydliadau menter sy'n mabwysiadu cynorthwywyr codio AI ar
raddfa wybod yn gyflym a yw eu metrigau presennol yn dal i olygu'r hyn
y maent yn credu eu bod yn ei olygu; mae angen ar sefydliadau
llywodraeth, sy'n aml yn symud yn fwy gofalus ar fabwysiadu AI ond yn
wynebu'r un symudiad offeryno sylfaenol yn y diwydiant ehangach y maent
yn recriwtio ohono ac yn meincnodi yn ei erbyn, ganllawiau'r rhan hon i
ddehongli meincnodau diwydiant yn gywir wrth i'r meincnodau hynny eu
hunain symud o dan yr un pwysau.

## Pynciau yn y rhan hon

- **7.1 Y symudiad paradeim AI cynhyrchiol:** Pam mae hwn yn newid
  sylfaenol i'r hyn y mae sawl metrig presennol yn ei fesur, nid dim
  ond offeryn newydd i'w ychwanegu at y blwch offer.
- **7.2 Mesur datblygiad meddalwedd â chymorth AI:** Sut i fesur a yw
  cymorth AI mewn gwirionedd yn helpu, gan ddefnyddio data canlyniad yn
  hytrach na chyfaint allbwn.
- **7.3 Peryglon chwyddiant metrig a gwanhad ansawdd:** Y peryglon
  twyllo ac ansawdd newydd penodol y mae'r symudiad hwn yn eu cyflwyno,
  a sut i warchod yn eu herbyn.
- **7.4 Telemetreg canlyniad fel y seren arweiniol newydd:** Ateb y
  llyfr hwn i'r symudiad cyfan: tro bwriadol, parhaol tuag at fetrigau
  canlyniad wrth i allbwn ddod yn rhad.

## Sut mae'r pynciau hyn yn cydberthyn

Mae pwnc 7.1'n sefydlu pam mae'r rhan hon yn bodoli o gwbl; mae
pwnc 7.2'n rhoi'r canllaw mesur ymarferol y mae'r symudiad yn ei
fynnu; mae pwnc 7.3'n enwi'r moddau methiant penodol y mae angen i
sefydliad warchod yn eu herbyn wrth iddo fabwysiadu datblygiad â
chymorth AI; ac mae pwnc 7.4'n cyffredinoli'r wers yn egwyddor
barhaol sy'n goroesi unrhyw offeryn neu werthwr penodol. Mae'r rhan hon
yn llai o deulu metrig annibynnol, yn y ffordd y mae pob un o Rannau 2
i 6 yn cwmpasu parth gwahanol, ac yn fwy o lens wedi'i chymhwyso'n ôl
ar draws y llyfr cyfan: mae angen ailarchwilio gweithgarwch, allbwn, a
hyd yn oed rhai metrigau canlyniad pob pwnc blaenorol trwy gwestiynau'r
rhan hon wrth i ddatblygiad â chymorth AI ddod yn arfer safonol, nid
eithriadol.

Mae'r rhan hon yn cysylltu'n fwyaf uniongyrchol yn ôl ag egwyddor
canlyniadau-dros-allbwn pwnc 1.3 a rhybudd pwnc 3.4 yn erbyn
metrigau gweithgarwch, y ddau y mae'r rhan hon yn eu trin fel rhai a
fu'n gywir drwy'r amser, wedi'u profi bellach yn frys felly gan symudiad
technolegol sy'n gwneud eu gwrthwyneb, mesur yn ôl cyfaint, yn
weithredol beryglus yn hytrach na dim ond isaddas. Mae hefyd yn paratoi
canllaw ymarferol Rhan 8 ar adeiladu rhaglen fetrigau, gan fod angen
ailystyriaeth fwriadol, nid dim ond addasiad cynyddrannol, ar
ddangosfwrdd a ddyluniwyd cyn y symudiad hwn, o ystyried yr hyn y mae'r
rhan hon yn ei gwmpasu.
