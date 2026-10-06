# Cyflwyniad

Mae'r llyfr hwn yn ganllaw gwaith i fesur [peirianneg meddalwedd](https://en.wikipedia.org/wiki/Software_engineering)
yn dda, ar gyfer timau o gwmni newydd o bum person i fenter o filoedd o
beirianwyr neu asiantaeth lywodraethol sy'n adrodd yn erbyn fframwaith
perfformiad statudol. Mae'n bodoli oherwydd bod y rhan fwyaf o gyngor ar
fetrigau naill ai'n grynodeb o fframwaith heb fanylion gweithredol, neu'n
rhestr nodweddion gwerthwr offer. Mae'r llyfr hwn yn ceisio peidio â bod
yn un o'r ddau: mae'n bendant ynghylch beth i'w fesur, yn eglur ynghylch sut
y caiff pob metrig ei ystumio, ac yn ymarferol ynghylch sut i redeg rhaglen
fetrigau y mae tîm yn ymddiried ynddi yn hytrach nag yn ei hofni.

## I bwy y mae hwn

Y prif gynulleidfa yw'r bobl sy'n dewis beth y mae sefydliad yn ei fesur:
arweinwyr peirianneg, peirianwyr staff a phrifathrawol, timau llwyfan a DevOps,
a rheolwyr rhaglenni a chynnyrch. Yr ail gynulleidfa yw unrhyw beiriannydd sydd
eisiau deall y rhesymeg y tu ôl i ddangosfwrdd y gofynnir iddo ei symud, a sut
i herio metrig sydd wedi peidio â gwasanaethu ei ddiben. Nid oes angen i chi ei
ddarllen o glawr i glawr. Mae pob pwnc yn sefyll ar ei ben ei hun, yn nodi ei
egwyddorion yn gyntaf, ac yn gorffen gyda siopau cludfwyd ymarferol, model
aeddfedrwydd a chyfeiriadau.

## Sut y trefnir y llyfr

Rhennir y llyfr yn **rhannau** (rhifau cyfan) a **phynciau** (degolion). Mae
pwnc **N.0** yn cyflwyno pob rhan ac yn egluro sut mae ei phynciau'n
cydberthyn; mae pynciau **N.1, N.2, …** yn ymdrin â'r pynciau'n fanwl.

- **Rhan 1, Sylfeini Mesur:** pam mesur o gwbl, Deddf Goodhart a seicoleg
  ystumio, dewis canlyniadau yn hytrach nag allbwn, llywodraethiant a
  pherchnogaeth, ffynonellau data, a'r llythrennedd ystadegol sydd ei angen ar
  bob rhaglen fetrigau.
- **Rhan 2, Metrigau Llif:** y Fframwaith Llif, ei eitemau llif a'i bum metrig
  llif, amser cylchred, theori ciwio, metrigau ffrwd werth Lean clasurol,
  metrigau ceisiadau tynnu ac adolygu cod, a'r fframwaith DORA fel pwnc cyfeirio.
- **Rhan 3, Profiad Datblygwyr a Fframwaith SPACE:** y fframwaith SPACE a'i
  bum dimensiwn, a sut i redeg arolwg profiad datblygwyr heb iddo droi'n
  gystadleuaeth boblogrwydd.
- **Rhan 4, Metrigau Cod ac Ansawdd:** cymhlethdod, cwmpas ac effeithiolrwydd
  profion, newid a mannau poeth, dadansoddi statig, dyled dechnegol, a
  dogfennaeth.
- **Rhan 5, Metrigau Cynnyrch a Busnes:** diffygion sy'n dianc, mabwysiadu
  nodweddion, canlyniadau cwsmeriaid a busnes, economeg uned, ac enillion ar
  fuddsoddiad.
- **Rhan 6, Metrigau Dibynadwyedd, Gweithrediadau a Diogelwch:** SLI, SLO a
  chyllidebau gwall, metrigau digwyddiadau, galwadau a chynhwysedd, a metrigau
  diogelwch a gwendid.
- **Rhan 7, Metrigau yn Oes AI:** newid paradeim deallusrwydd artiffisial
  cynhyrchiol, sut i fesur datblygu â chymorth AI, y risg o chwyddiant metrigau,
  a pham mae telemetreg canlyniad yn dod yn seren y gogledd wrth i allbwn fynd yn
  rhad.
- **Rhan 8, Adeiladu Rhaglen Fetrigau:** dylunio dangosfwrdd, adeiladu yn erbyn
  prynu, cyflwyno metrigau heb fagu ofn, model aeddfedrwydd, a map llwybr
  mabwysiadu cynyddrannol.
- **Rhan 9, Atodiadau:** rhestr termau, cyfeirnod diffiniadau a fformiwlâu
  metrigau, rhestrau gwirio, templedi, hunanasesiad aeddfedrwydd, cyfeiriadau,
  a mynegai.

## Egwyddorion arweiniol

Mae wyth egwyddor yn ffurfio asgwrn cefn y llyfr:

1. **Mae mesur sy'n dod yn darged yn peidio â bod yn fesur da.** Dyluniwch yn
   erbyn Deddf Goodhart o'r dechrau, nid ar ôl i'r ystumio ymddangos.
2. **Canlyniadau dros allbwn dros weithgaredd.** Pwyswch bob set o fetrigau
   tuag at yr hyn a newidiodd i'r cwsmer neu'r busnes, nid yr hyn a gynhyrchodd
   y tîm na pha mor brysur oedd.
3. **Mae angen rheilen ddiogelwch ar bob metrig a ysgogir.** Pârwch gyflymder ag
   ansawdd, trwybwn â sefydlogrwydd, a pheidiwch byth â mynd ar ôl un rhif ar ei
   ben ei hun.
4. **Mesurwch systemau, nid pobl.** Mae metrig sy'n unigoli bai yn torri
   ymddiriedaeth ac yn gwahodd ystumio; mae metrig sy'n datgelu cyfyngiad system
   yn gwahodd gwelliant.
5. **Mae'n well gennych offeryniad na hunan-adrodd lle gallwch ei gael, a
   hunan-adrodd lle na allwch.** Daw cyfrifon defnyddio o'r biblinell; daw
   bodlonrwydd o ofyn.
6. **Mae metrig naill ai'n ennill ei le neu'n cael ei ymddeol.** Mae pob teilsen
   ar ddangosfwrdd yn costio sylw. Tociwch yn fwriadol.
7. **Mae diffiniadau'n bwysicach na dangosfyrddau.** Bydd dau dîm sy'n cyfrifo
   "amser arwain" yn wahanol yn treulio mwy o amser yn dadlau am y rhif nag yn
   gweithredu arno.
8. **Mae deallusrwydd artiffisial cynhyrchiol yn rheswm dros ailystyried, nid
   ailseilio'n unig.** Pan fydd allbwn yn mynd yn rhad, mae angen rheiliau
   diogelwch newydd ar fetrigau sydd wedi'u hadeiladu o amgylch cyfaint allbwn,
   nid targedau newydd yn unig.

## Themâu trawsbynciol

[Deddf Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yw'r un thema
sy'n rhedeg trwy bob rhan o'r llyfr hwn, nid pwnc 1.2 yn unig. Mae pob pwnc
teulu metrigau yn nodi sut y caiff y metrig y mae'n ymdrin ag ef ei ystumio a pha
reilen ddiogelwch sy'n dal hynny. Caiff rhwymedigaethau adrodd llywodraethol a
menter, lle gall metrig fod â phwysau statudol neu gontractiol, eu trin fel
mewnbynnau dylunio drwyddi draw, nid fel ôl-ystyriaeth wedi'i chyfyngu i un pwnc.

## Sut i'w ddefnyddio

Mabwysiadwch yn gynyddrannol; peidiwch â gollwng dangosfwrdd ar dîm nad oedd
erioed wedi cael un. Dechreuwch lle mae'r boen fwyaf, defnyddiwch fodel
aeddfedrwydd pob pwnc i leoli eich hun yn onest, a gadewch i'r map llwybr
mabwysiadu (pwnc 8.5) ddilyniannu'r gwaith. Nid wal o siartiau yw'r nod. Sefydliad
sy'n gallu dweud, gyda thystiolaeth, a yw'r hyn y mae'n ei wneud yn gweithio,
ac sy'n ymddiried yn ei rifau ei hun ddigon i weithredu arnynt.
