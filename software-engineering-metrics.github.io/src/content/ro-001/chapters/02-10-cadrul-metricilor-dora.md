# 2.10 Cadrul metricilor DORA

## Prezentare generală și motivație

**[Metricile DORA](https://dora.dev/guides/dora-metrics/)** provin din programul
[DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment, un efort de
cercetare pe mai mulți ani, publicat ulterior în cartea *Accelerate* de Nicole Forsgren,
Jez Humble și Gene Kim, care a chestionat zeci de mii de profesioniști din inginerie ca să
afle ce practici de livrare se corelează cu performanța organizațională. Rezultatul a fost
patru metrici, asociate două câte două: frecvența implementărilor și timpul de livrare al
modificărilor măsoară viteza; rata de eșec a modificărilor și timpul de recuperare după o
implementare eșuată, adesea prescurtat ca timp mediu de recuperare (MTTR), măsoară
stabilitatea. Constatarea de cercetare care a făcut cadrul semnificativ a fost că
performerii de elită erau simultan rapizi și stabili, răsturnând presupunerea că viteza și
siguranța se schimbă una pe alta, iar această constatare rămâne cel mai clar exemplu practic
din această carte pentru principiul asocierii cu o gardă din subiectul 1.2: o metrică de
viteză stimulată, asociată cu o gardă de stabilitate, este ceea ce fac de fapt organizațiile
cu cea mai bună performanță.

Această carte tratează DORA ultimul în această parte, deliberat, nu ca cadru organizator al
părții. Această plasare nu este o respingere a cercetării, care rămâne cu adevărat riguroasă
și merită folosită. Reflectă o limitare specifică și reală: DORA măsoară cât de repede și cât
de sigur se mișcă un flux de livrare, dar tace asupra a ceea ce se mișcă prin el. O echipă
poate afișa numere DORA excelente în timp ce producția ei reală a alunecat discret spre
refacerea defectelor sau a înfometat datoria tehnică și munca de securitate de capacitate,
un tipar pe care Flow Framework din subiectele 2.1 până la 2.4 este construit special să-l
scoată la iveală și pe care DORA nu-l poate vedea. Folosește DORA așa cum îl prezintă acest
subiect: o măsură de referință bine validată, mai îngustă, a mecanicii fluxului de livrare,
nu întregul tablou al sănătății livrării.

Pentru echipele mari, valoarea reală rămasă a DORA este comparabilitatea. O metrică
calculată consecvent din datele fluxului și ale incidentelor permite unei organizații să
compare capacitatea de livrare între multe echipe care lucrează în domenii diferite, fără
problema mărului cu para care afectează cele mai multe comparații între echipe. Organizațiile
mari îl folosesc în continuare ca să prioritizeze investițiile în platformă; organizațiile
guvernamentale îl folosesc în continuare ca să demonstreze, cu dovezi, că un program de
modernizare a îmbunătățit măsurabil mecanica livrării. Tratează asta ca pe sarcina corectă și
mărginită a DORA și folosește subiectele despre Flow Framework de mai devreme din această
parte pentru întrebarea mai largă despre dacă se livrează deloc lucrurile potrivite.

## Principii-cheie

- **DORA măsoară fluxul de livrare, nu valoarea care circulă prin el.** Subiectul 2.1
  numește direct această lacună; folosește distribuția fluxului (subiectul 2.3) ca să vezi
  ce nu poate vedea DORA.
- **Viteza și stabilitatea se măsoară împreună, niciodată separat.** Un tablou de bord
  informat de DORA fără ambele jumătăți nu folosește de fapt cadrul.
- **Consecvența definiției contează mai mult decât numărul brut.** O echipă care trece de la
  performanță „medie” la „înaltă” pe o metrică definită consecvent este un semnal real;
  compararea a două echipe calculate diferit nu este.
- **DORA măsoară sistemul, nu indivizii.** Aplicarea acestor metrici la ingineri individuali
  rupe baza statistică a cadrului și invită exact manipularea împotriva căreia avertizează
  subiectul 1.2.
- **Toate cele patru metrici sunt indicatori indirecți, nu scopuri.** Se corelează cu
  performanța organizațională; urmărirea numărului în sine, desprinsă de o îmbunătățire reală
  a livrării, anulează scopul cadrului.

## Recomandări

### Instrumentează frecvența implementărilor din flux, numărând doar lansările în producție

**Frecvența implementărilor** măsoară cât de des lansează cu succes o echipă în producție.
Numără doar implementările reușite în producție, instrumentate automat din datele fluxului
CI/CD, niciodată autoraportate. Urmărește în special manipularea prin substituție, împărțirea
unei modificări semnificative în mai multe implementări banale doar ca să umfli numărătoarea,
urmărind dimensiunea implementării alături de frecvență: o dimensiune medie în scădere lângă o
numărătoare în creștere este cel mai clar semn că se întâmplă asta.

### Instrumentează timpul de livrare al modificărilor de la primul commit până în producție

**Timpul de livrare al modificărilor** măsoară timpul de la primul commit al unei modificări
de cod până la implementarea ei reușită în producție. Raportează atât mediana, cât și o
percentilă ridicată, nu doar o medie, urmând îndrumarea subiectului 1.6 despre datele
asimetrice bazate pe timp, și urmărește deriva definiției la oricare capăt, care flatează
numărul fără nicio îmbunătățire reală.

### Definește rata de eșec a modificărilor în scris înainte de a compara între echipe

**Rata de eșec a modificărilor** măsoară procentul de implementări care cauzează un eșec ce
necesită remediere, un rollback, un hotfix sau un incident. Aceasta este cea mai greu de
definit consecvent dintre cele patru, pentru că „eșecul” nu este evident obiectiv. Convino
asupra unei definiții scrise înainte de a compara echipe; fără ea, o comparație aparent
corectă poate induce grav în eroare. Urmărește o îmbunătățire suspect de rapidă, fără un
proces de fond în spatele ei, cel mai clar semn de manipulare a definiției, nu de progres
autentic.

### Măsoară timpul de recuperare de la detectare, nu de la evenimentul de implementare

**Timpul de recuperare după o implementare eșuată** măsoară cât durează restabilirea
serviciului după ce o implementare cauzează un eșec. Pornește ceasul la detectare, nu la
evenimentul de implementare în sine, astfel încât numărul să reflecte întârzierea reală de
recuperare, nu o lacună de monitorizare. Investește special în capacitatea de rollback
automat, cea mai frecventă pârghie pentru îmbunătățirea autentică a acestei metrici, nu prin
declararea prematură a unui incident ca rezolvat.

### Folosește metricile de flux, nu DORA, ca să diagnostichezi de ce s-a mișcat un număr

Când se schimbă o metrică DORA, cele patru numere singure rareori explică de ce. Folosește
descompunerea timpului de ciclu (subiectul 2.6), încărcarea fluxului (subiectul 2.4) și
distribuția fluxului (subiectul 2.3) ca strat de diagnostic sub numerele de sinteză ale
DORA și nu folosi niciodată o metrică DORA într-o evaluare individuală de performanță,
cea mai dăunătoare folosire greșită la care este expus acest cadru.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Cadrul DORA complet, toate cele patru metrici asociate | Validat prin cercetare, rezistă manipulării prin asociere, permite comparații corecte între echipe | Tăcut asupra tipului de valoare livrată; are nevoie de Flow Framework alături pentru acel tablou |
| DORA ca singur set organizator de metrici al acestei părți | Simplu, familiar pentru cei mai mulți lideri de inginerie | Ratează complet întrebarea amestecului de valoare, motivul acestei cărți pentru a-l depriorita aici |
| DORA plus Flow Framework împreună | Atât mecanica fluxului de livrare, cât și amestecul de valoare sunt vizibile | Cere menținerea a două vocabulare de metrici în loc de unul |
| DORA aplicat la nivel individual | Pare direct acționabil pentru unii manageri | Rupe validitatea statistică a cadrului; expunere puternică la legea lui Goodhart |

Tensiunea centrală este **rigoarea mecanică versus lizibilitatea pentru business**. Cele
patru metrici DORA sunt definite precis și validate prin cercetare, ceea ce le face
excelente pentru compararea performanței fluxului între echipe, dar aceeași precizie este
limitată îngust la fluxul însuși și nu spune nimic despre dacă munca potrivită circulă prin
el. Rezolvă tensiunea păstrând DORA ca strat de referință pentru sănătatea fluxului,
locul potrivit al subiectului 2.10 în structura acestei cărți, și folosind subiectele
despre Flow Framework de mai devreme din această parte pentru întrebarea orientată spre
business despre amestecul de valoare, în loc să încerci să faci DORA să răspundă la o
întrebare pentru care nu a fost niciodată proiectat.

## Întrebări de discutat cu echipa ta

1. **Instrumentăm toate cele patru metrici DORA din flux sau unele dintre ele sunt estimări
   autoraportate?** Un cadru construit pe o măsurare obiectivă, validată prin cercetare,
   pierde mare parte din valoare în clipa în care un număr devine o presupunere. Auditează
   sursa reală de date a fiecărei metrici (subiectul 1.5).

2. **Împart toate echipele pe care le comparăm folosind metrici DORA aceleași definiții
   pentru implementare, modificare și eșec?** O comparație între echipe care folosesc
   definiții diferite nu este de fapt o comparație și poate produce judecăți nedrepte
   despre performanța relativă.

3. **A folosit cineva din organizația noastră o metrică DORA într-o evaluare individuală de
   performanță, formal sau informal?** Aceasta este cea mai dăunătoare folosire greșită a
   cadrului și se întâmplă adesea discret. Întreabă direct și fii pregătit pentru un răspuns
   incomod, dar necesar.

4. **Ar putea numerele noastre DORA să fie excelente în timp ce distribuția noastră a
   fluxului (subiectul 2.3) a alunecat discret spre refacere sau departe de funcționalități?**
   Aceasta este exact lacuna pe care DORA singur nu o poate vedea. Pune împreună ambele seturi
   de numere și verifică dacă spun o poveste consecventă.

5. **Când se mișcă una dintre metricile noastre DORA, avem diagnosticele de metrici de flux
   care să explice de ce?** Un număr DORA singur îți spune că s-a schimbat ceva, nu ce. Verifică
   dacă echipele tale pot răspunde la „de ce a crescut timpul de livrare luna aceasta” cu date,
   sau doar cu speculații.

6. **Cum s-ar schimba cele patru numere DORA ale noastre dacă am încerca deliberat să le
   manipulăm pe fiecare și am observa?** Parcurge pe rând frecvența implementărilor, timpul
   de livrare, rata de eșec a modificărilor și timpul de recuperare, aplicarea practică a
   disciplinei centrale a subiectului 1.2 la acest cadru specific.

## Perspectiva sectorială

**Startup.** Metricile de viteză ale DORA vin de obicei natural unei echipe mici care
implementează deja frecvent; disciplina mai grea este instrumentarea onestă a ratei de eșec a
modificărilor și a timpului de recuperare, în loc să presupui stabilitatea pentru că nimic nu
s-a stricat grav încă. Asocierea DORA cu o împărțire chiar și informală a elementelor de flux
(subiectul 2.2) devreme evită construirea unui sentiment fals de sănătate a livrării în jurul
vitezei fluxului singure.

**Afacere mică.** Cele mai multe platforme moderne de CI/CD și de control al versiunilor
exportă date de frecvență a implementărilor și de timp de livrare cu configurare minimă;
legarea implementărilor de incidente pentru rata de eșec a modificărilor cere de obicei mai
mult efort manual. Începe cu cele două metrici de viteză și adaugă urmărirea stabilității de
îndată ce există un jurnal informal de incidente la care să legi.

**Companie mare.** Cea mai mare valoare rămasă a DORA la această scară este compararea corectă
și consecventă între echipe pentru deciziile de investiții în platformă. Standardizează
definițiile în toată organizația (subiectul 1.4), automatizează instrumentarea central și
asociază fiecare raport DORA cu o vedere a distribuției fluxului, astfel încât conducerea să
vadă împreună atât viteza fluxului de livrare, cât și amestecul de valoare, nu una fără
cealaltă.

**Administrație publică.** Metricile DORA oferă în continuare unui program de modernizare o
cale apărabilă, sprijinită pe cercetare, de a demonstra organelor de supraveghere îmbunătățirea
mecanicii livrării. Raportează toate cele patru metrici împreună, fără a alege niciodată doar
jumătatea flatantă, și asociază-le cu distribuția fluxului, astfel încât raportul să răspundă
și la întrebarea mai grea și mai importantă despre ce livrează de fapt fluxul mai rapid.

## Exemple

**Companie mare.** Programul de modernizare a platformei unei mari companii de
telecomunicații a instrumentat consecvent toate cele patru metrici DORA în patruzeci de echipe
de produs și a arătat o mișcare reală de la benzile de performanță scăzută la cele de
performanță înaltă în optsprezece luni, frecvența implementărilor de aproximativ zece ori mai
mare, timpul de livrare scăzut de la săptămâni la zile, rata de eșec a modificărilor păstrată
plată. Un membru al consiliului, revizuind prezentarea, a pus o întrebare la care numerele DORA
singure nu puteau răspunde: cât din acea livrare mai rapidă a fost valoare nouă pentru clienți
și cât refacere. Organizația de inginerie nu avea niciun răspuns până când a adoptat
clasificarea elementelor de flux în trimestrul următor, care a arătat că munca de
funcționalități scăzuse de fapt ca pondere din producția totală chiar când numerele de viteză
DORA se îmbunătățeau, o constatare care a remodelat prioritățile programului pentru anul
următor.

**Administrație publică.** Biroul de modernizare IT al unui guvern de stat a adoptat metricile
DORA drept condiție contractuală ca să compare capacitatea de livrare a mai multor echipe
concurente de furnizori, o folosire eficientă a comparabilității cadrului. Frecvența ridicată a
implementărilor unui furnizor s-a dovedit, odată ce rata de eșec a modificărilor a fost cerută
alături, că se corela cu o rată de eșec de aproape trei ori mai mare decât a omologilor săi,
informație care a influențat direct decizia biroului de reînnoire a contractului. Biroul a
adăugat ulterior o cerință de distribuție a fluxului în aceleași contracte, după ce a descoperit
că furnizorul cu cele mai bune numere DORA era și cel care cheltuia cea mai mică pondere din
capacitate pe munca de remediere a securității pe care contractul o cerea explicit.

## Argumentul de business: motivații, ROI și TCO

Randamentul adoptării bune a DORA, în sfera lui potrivită, este un răspuns apărabil și bazat
pe dovezi la „devine fluxul nostru de livrare mai rapid și mai sigur”, una dintre întrebările
mai tratabile din inginerie la care se poate răspunde cu încredere. Acel răspuns justifică
investițiile în platformă și în unelte cu numere reale și permite conducerii să compare
investiții concurente pe o bază corectă și consecventă, exact cum a făcut-o mereu.

Costul total de proprietate este munca de integrare care leagă evenimentele de implementare
de înregistrările de incidente pentru rata de eșec a modificărilor și pentru timpul de
recuperare, nebanală într-un peisaj mare și eterogen de unelte. Costul suplimentar al asocierii
DORA cu subiectele despre Flow Framework de mai devreme din această parte este comparativ mic,
pentru că clasificarea elementelor de flux este o convenție de raportare suprapusă muncii
existente, nu un sistem paralel de măsurare, iar randamentul, prinderea exactă a punctului orb
al amestecului de valoare pe care îl ilustrează exemplul telecomunicațiilor de mai sus, merită
din plin această investiție suplimentară modestă.

## Anti-modele și capcane

- **Tratarea DORA ca întreg tablou al sănătății livrării:** vectorul de manipulare pe care
  plasarea acestui subiect este proiectată să-l contracareze. O organizație poate prezenta
  numere DORA cu adevărat excelente, implementări rapide, frecvente și stabile, în timp ce
  valoarea ei efectiv livrată a alunecat discret spre refacere sau departe de funcționalități,
  iar cele patru metrici DORA singure nu vor dezvălui niciodată acea schimbare, pentru că nu au
  fost proiectate să o măsoare. Garda de protecție este asocierea fiecărui raport DORA cu
  distribuția fluxului (subiectul 2.3), astfel încât un flux rapid și stabil care livrează
  amestecul greșit de muncă să fie vizibil, nu confundat cu o sănătate autentică a livrării.
- **Raportarea doar a jumătății de viteză a DORA:** anulează constatarea centrală a
  cadrului, că viteza și stabilitatea se mișcă împreună la performerii de top.
- **Folosirea metricilor DORA în evaluări individuale de performanță:** rupe validitatea
  statistică a cadrului și invită o manipulare puternică.
- **Compararea echipelor cu definiții inconsecvente:** produce comparații care par corecte, dar
  nu sunt.
- **Numere DORA autoraportate în loc de cele instrumentate din flux:** introduce exact
  prejudecata pe care cadrul a fost proiectat să o elimine.
- **Tratarea DORA ca diagnostic, nu ca sinteză:** lasă o echipă incapabilă să explice de ce s-a
  mișcat un număr fără stratul de metrici de flux de dedesubt.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile DORA, dacă sunt urmărite deloc, sunt autoraportate,
  definite inconsecvent și niciodată asociate cu date de flux.
- **Nivelul 2, Dezvoltare:** Unele echipe instrumentează DORA din flux, dar definițiile variază
  și nu există un omolog de distribuție a fluxului față de care să verifice.
- **Nivelul 3, Standardizare:** Toate cele patru metrici DORA sunt instrumentate consecvent din
  datele fluxului și ale incidentelor, cu definiții comune, și sunt arătate de rutină alături de
  distribuția fluxului.
- **Nivelul 4, Gestionare:** DORA și metricile de flux sunt revizuite împreună ca asociere
  standard la fiecare nivel al organizației, iar DORA nu este folosit niciodată pentru
  evaluarea individuală.
- **Nivelul 5, Orchestrare:** Organizația poate indica cazuri concrete în care distribuția
  fluxului a prins o problemă de amestec de valoare pe care numerele DORA excelente singure o
  ascunseseră și folosește ambele cadre deliberat pentru întrebările distincte la care
  răspunde fiecare.

## Idei de discuție

1. Unde ne plasează, onest, cele patru metrici DORA pe spectrul nivelurilor de performanță?
2. Ar putea numerele noastre DORA să arate excelent în timp ce distribuția fluxului a alunecat discret? Am verificat vreodată?
3. A folosit cineva vreodată un număr DORA ca să judece un individ, chiar și informal?
4. Dacă un concurent și-ar publica numerele DORA, ar sta ale noastre bine la comparație și ar spune acea comparație cu adevărat cine livrează mai multă valoare reală?

## Concluzii principale

- Cele patru metrici DORA, **frecvența implementărilor, timpul de livrare, rata de eșec a
  modificărilor și timpul de recuperare**, asociază prin construcție viteza cu stabilitatea și
  rămân cu adevărat validate prin cercetare.
- Această carte plasează DORA **ultimul în această parte** pentru că măsoară fluxul de livrare,
  nu valoarea care circulă prin el; asociază-l cu distribuția fluxului (subiectul 2.3) pentru
  tabloul mai complet.
- Vectorul central de manipulare al subiectului este **confundarea numerelor DORA excelente cu
  o sănătate completă a livrării**; garda de protecție este raportarea mereu a DORA alături de
  distribuția fluxului.
- **Nu folosi niciodată metricile DORA în evaluări individuale de performanță**; validitatea
  cadrului depinde de măsurarea la nivel de sistem, nu individual.
- Folosește **metricile de flux ca strat de diagnostic** sub numerele de sinteză ale DORA când
  se mișcă unul dintre ele.

## Referințe și lecturi suplimentare

- Forsgren, Nicole, Jez Humble, and Gene Kim. *Accelerate: The Science of
  Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment programme.
  [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
