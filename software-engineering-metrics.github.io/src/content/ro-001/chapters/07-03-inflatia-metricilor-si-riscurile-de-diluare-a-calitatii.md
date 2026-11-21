# 7.3 Inflația metricilor și riscurile de diluare a calității

## Prezentare generală și motivație

Acest subiect numește direct și specific cele două moduri de eșec împotriva
cărora subiectul 7.1 a avertizat că trebuie să se apere întregul cadru al
cărții, pe măsură ce dezvoltarea asistată de IA devine practică standard:
**inflația metricilor**, cifre care cresc fără o valoare reală corespunzătoare,
și **diluarea calității**, o erodare treptată a calității codului care
depășește capacitatea actuală a industriei de a o detecta prin practicile
existente de revizuire și testare. Nu sunt categorii noi de risc pe care cartea
să nu le fi numit deja: inflația metricilor este legea lui Goodhart din
subiectul 1.2 și manipularea prin substituție din subiectul 1.2, aplicate la
scară, iar diluarea calității este decalajul dintre acoperire și eficacitate
din subiectul 4.2 și grija pentru defectele scăpate din subiectul 5.1, ambele
intensificate. Noutatea este viteza și amploarea cu care IA generativă poate
produce simultan ambele moduri de eșec, mai repede decât au fost proiectate să
prindă gărzile de protecție existente ale majorității organizațiilor.

Mecanismul specific de care se ocupă acest subiect este subtil: codul generat
de IA arată foarte des corect. Urmează idiomuri familiare, folosește nume de
variabile plauzibile și trece de o citire superficială mult mai sigur decât o
face de obicei codul scris de oameni, cu adevărat neglijent, tocmai pentru că a
fost antrenat pe un corpus vast de cod care arăta corect. Asta face defectele
generate de IA mai greu de prins pentru un revizor uman, prin tipul de
potrivire de tipare, „arată bine?”, care prinde multe erori introduse de
oameni, deoarece versiunea generată de IA este optimizată special, în sens
statistic, să arate bine, fie că este, fie că nu.

Pentru echipele mari, riscurile acestui subiect se compun cu scara într-un mod
care ar trebui să îngrijoreze în mod special organizațiile mari și
administrațiile publice: inflația metricilor în zeci de echipe simultan poate
produce un fals semnal, la nivelul întregii organizații, de productivitate
îmbunătățită, care necesită timp și analiză semnificative pentru a fi
desfăcut, exact cum a arătat exemplul din tehnologia financiară al subiectului
7.1. Diluarea calității care depășește capacitatea de detecție este și mai
gravă în contexte reglementate, critice pentru siguranță sau de încredere
publică, unde costul unui defect nedetectat care ajunge în producție are
consecințe mult dincolo de preocuparea imediată a ingineriei.

## Principii-cheie

- **Inflația metricilor și diluarea calității sunt versiuni intensificate ale
  unor riscuri pe care această carte le-a numit deja**, nu categorii complet
  noi; gărzile de protecție existente se aplică în continuare, dar trebuie să
  muncească mai mult.
- **Calitatea „arată corect” a codului generat de IA face revizuirea umană
  prin potrivire de tipare mai puțin capabilă să prindă defectele subtile.**
  Este un risc distinct de eroarea umană obișnuită.
- **Viteza acestei schimbări poate depăși capacitatea unei organizații de a-și
  adapta gărzile de protecție**, creând o fereastră de expunere reală, limitată
  în timp.
- **Metricile de calitate existente (Partea 4) rămân valoroase, dar pot cere
  recalibrare**, nu înlocuire, în lumina acestui nou profil de risc.
- **Capacitatea de detecție în sine are nevoie de investiție deliberată**,
  deoarece practicile de revizuire și testare tratate în această carte au fost
  proiectate înainte ca acest risc specific să existe la această scară.

## Recomandări

### Recalibrează pragurile ratei de eșec a modificărilor și ale defectelor scăpate pentru munca intens asistată de IA

Acolo unde o echipă sau o zonă de cod a adoptat intens asistența IA, aplică
urmărirea ponderată după severitate din subiectele 2.4 și 5.1 cu sensibilitate
sporită, cel puțin până când organizația ta a strâns suficiente dovezi
(subiectul 7.2) ca să știe dacă relația istorică dintre aceste metrici și
riscul real se mai menține neschimbată pentru munca asistată de IA în special.
Tratează această recalibrare ca pe o poziție temporară, de strângere de dovezi,
nu ca pe o presupunere permanentă și neexaminată, în vreo direcție.

### Investește special în capacitatea de detecție care rezistă problemei „arată corect”

Revizuirea tradițională a codului, care se bazează mult pe recunoașterea
tiparelor de către revizor pentru ceea ce arată bine, este slăbită în mod
special în fața codului generat de IA, plauzibil, dar subtil incorect.
Investește corespunzător mai mult în metode de detecție care nu se bazează pe
potrivirea vizuală de tipare: [testarea prin mutații](https://en.wikipedia.org/wiki/Mutation_testing) (subiectul 4.2),
care testează comportamentul real, nu aspectul, și testarea bazată pe
proprietăți sau pe invarianți, care verifică corectitudinea logică, nu
plauzibilitatea de suprafață, devin ambele disproporționat mai valoroase
tocmai din cauza acestei schimbări.

### Urmărește inflația metricilor în tot fluxul de livrare, nu doar în punctul de generare a codului

Inflația metricilor din dezvoltarea asistată de IA nu se limitează la etapa de
programare; se poate propaga prin întregul lanț al timpului de ciclu
(subiectul 2.6): un volum mai mare de pull requesturi generate de IA poate
umfla metricile de debit al pull requesturilor (subiectul 2.9), chiar dacă
semnalul util pe care a fost proiectată să-l surprindă acea metrică, debitul
real al echipei, rămâne plat sau chiar scade odată ce povara revizuirii și
costul corectării sunt contabilizate corect. Auditează întregul set de metrici
pentru acest tipar de propagare, nu doar cele mai evidente metrici direct
învecinate cu IA.

### Construiește un plan explicit de recalibrare limitat în timp, nu o poziție permanentă de suspiciune

Controlul sporit recomandat de acest subiect este potrivit într-o perioadă
activă de adoptare și incertitudine, dar nu ar trebui să devină un impozit
permanent, neexaminat, asupra muncii asistate de IA. Pe măsură ce organizația
ta strânge dovezi reale prin disciplina de măsurare din subiectul 7.2,
revizuiește pragurile și gărzile de protecție pe baza a ceea ce arată de fapt
dovezile, strângându-le mai tare unde riscul se confirmă, relaxându-le unde
nu, în loc să ignori complet riscul sau să tratezi fiecare bucată de cod
asistat de IA cu o suspiciune permanentă și nediferențiată, indiferent de
dovezile care se acumulează.

### Comunică acest risc transparent, nu ca motiv de a rezista adoptării IA

Încadrează îndrumările acestui subiect ca gestionare a riscului pentru o
capacitate nouă cu adevărat valoroasă, nu ca argument împotriva dezvoltării
asistate de IA în general. O organizație care comunică clar aceste riscuri
specifice, numite pe nume, și construiește gărzi de protecție proporționale
împotriva lor, exact cum recomandă cartea pentru fiecare altă metrică și
tehnică pe care o tratează, adoptă asistența IA mai sigur și mai sustenabil
decât una care fie ignoră riscul, fie îl tratează ca motiv de rezistență
generală la un set de instrumente cu adevărat util.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără recalibrare, munca asistată de IA tratată identic cu codul scris de oameni | Simplu, fără schimbări de proces | Ratează un profil de risc ridicat, sugerat de dovezi |
| Control sporit general și permanent al întregului cod asistat de IA | Maximizează reducerea riscului pe termen scurt | Impozit nesustenabil asupra unei capacități cu adevărat valoroase; ignoră dovezile care se acumulează |
| Recalibrare limitată în timp, bazată pe dovezi | Echilibrează gestionarea riscului cu o adoptare sustenabilă | Cere disciplină continuă de măsurare (subiectul 7.2) ca să știi când să relaxezi controlul |
| Investiție în metode de detecție rezistente la defecte care „arată corect” | Abordează direct și durabil noul risc specific | Cere investiție inițială în infrastructură de testare prin mutații și bazată pe proprietăți |

Tensiunea centrală este **prudența versus viteza adoptării**. O prudență
excesivă și permanentă irosește mare parte din valoarea reală a dezvoltării
asistate de IA; o prudență insuficientă riscă inflația metricilor și diluarea
calității pe care le numește acest subiect, potențial la scară mare înainte de
detecție. Rezolvă tensiunea prin abordarea limitată în timp și bazată pe
dovezi recomandată aici: control sporit acum, calibrat în jos sau în sus pe
măsură ce se acumulează dovezi reale din disciplina de măsurare a subiectului
7.2, nu o politică generală permanentă și nici presupunerea neexaminată că nimic
nu s-a schimbat.

## Întrebări de discutat cu echipa ta

1. **Am recalibrat pragurile ratei de eșec a modificărilor sau ale defectelor
   scăpate pentru munca intens asistată de IA sau aplicăm neschimbat pragurile
   din era dinainte de IA?** Dacă sunt neschimbate, discută dacă asta reflectă
   o decizie deliberată, bazată pe dovezi, sau pur și simplu lipsa atenției
   față de întrebare.

2. **Avem metode de detecție, precum testarea prin mutații, care nu se bazează
   pe potrivirea vizuală de tipare a unui revizor sau procesul nostru de
   revizuire depinde integral de ochii umani care judecă dacă codul „arată
   bine”?** Aceasta este vulnerabilitatea specifică pe care o identifică acest
   subiect; evaluează sincer capacitatea ta actuală de detecție în raport cu
   ea.

3. **S-a propagat inflația metricilor dincolo de etapa de programare, în
   metricile noastre de pull requesturi sau de implementări, și am observa
   acum dacă s-ar fi întâmplat?** Parcurge întregul lanț al timpului de ciclu
   căutând acest tipar de propagare, nu doar cel mai evident punct de
   origine.

4. **Controlul nostru sporit actual asupra codului asistat de IA, dacă
   există, se bazează pe dovezi acumulate sau este o setare implicită
   neexaminată și nelimitată, care nu a fost niciodată reconsiderată?**
   Discută ce dovezi ar trebui să se acumuleze înainte de a lua în calcul
   relaxarea sau strângerea în continuare a gărzilor de protecție actuale.

5. **Cum comunicăm intern riscurile acestui subiect: ca motiv de prudență și
   gărzi de protecție proporționale sau ca argument implicit împotriva
   adoptării IA în general?** Fii sincer cu privire la modul în care este
   primită de fapt conversația de către echipa ta, deoarece un mesaj primit ca
   rezistență generală produce rareori răspunsul proporțional, bazat pe
   dovezi, pe care îl recomandă acest subiect.

6. **Cum ar arăta ca organizația noastră să descopere, abia după o scară
   semnificativă, că inflația metricilor și diluarea calității se petreceau
   simultan și nedetectate?** Acest scenariu concret și oarecum neplăcut merită
   numit explicit, drept eșecul specific pe care gărzile de protecție ale
   acestui subiect sunt construite să-l prevină.

## Perspectiva sectorială

**Startup.** Adoptarea rapidă combinată cu o capacitate limitată de revizuire
face riscurile acestui subiect deosebit de acute pentru o echipă mică;
problema de detecție „arată corect” este mai greu de prins cu mai puțini
revizori, mai puțin specializați. Investește devreme măcar într-o testare
ușoară prin mutații pe cele mai critice căi de cod, chiar dacă o acoperire
cuprinzătoare nu este încă fezabilă.

**Afacere mică.** Procesele formale de recalibrare sunt probabil inutile la
această scară, dar o conștientizare simplă și explicită că codul generat de IA
merită o citire puțin mai sceptică decât de obicei, tocmai pentru că tinde să
arate mai încrezător de corect decât este, nu costă nimic și abordează direct
preocuparea centrală a acestui subiect.

**Companie mare.** Atât inflația metricilor, cât și diluarea calității se
compun semnificativ la scară, deoarece un fals semnal sau o problemă de
calitate nedetectată în zeci de echipe simultan este mult mai consecventă și
mult mai greu de desfăcut decât aceeași problemă la o singură echipă.
Investește deliberat în îmbunătățirea capacității de detecție la nivelul
întregii organizații (infrastructură de testare prin mutații, adoptarea
testării bazate pe proprietăți) și în disciplina de recalibrare limitată în
timp recomandată aici, urmărită central.

**Administrație publică.** Consecințele diluării nedetectate a calității sunt
deosebit de grave în contextele reglementate, critice pentru siguranță sau de
încredere publică, comune în sistemele guvernamentale. Aplică un control
sporit, bazat pe dovezi, în mod special modificărilor asistate de IA din căile
de cod cu consecințe mari (logica ponderării expunerii și exploatabilității din
subiectul 6.4 se aplică similar aici) și fii pregătit să demonstrezi unui
auditor sau unui organ de supraveghere ce capacitate de detecție există exact
împotriva acestui risc.

## Exemple

**Companie mare.** Echipa de inginerie pentru procesarea daunelor a unei
companii de asigurări a adoptat pe scară largă asistența IA în programare și,
șase luni mai târziu, a observat o creștere treptată, dar măsurabilă, a
defectelor scăpate, în special în logica condițională complexă, genul de cod în
care tratarea subtil greșită a cazurilor-limită este cel mai ușor de generat
plauzibil pentru instrumentele de IA și cel mai greu de prins doar prin
inspecție de către un revizor. O investigație a confirmat tiparul „arată
corect” descris de acest subiect: codul defect folosise constant tipare
idiomatice, cu aspect familiar, care au trecut de revizuire fără să declanșeze
tipul de control pe care l-ar fi primit o bucată de cod scris de oameni,
evident neobișnuită sau stângace. Răspunsul echipei a țintit testarea prin
mutații special pe logica condițională complexă, în toată compania, o metodă de
detecție rezistentă la problema plauzibilității de suprafață, și a măsurat o
reducere semnificativă a acestei categorii specifice de defecte în două
trimestre.

**Administrație publică.** O autoritate fiscală care testa dezvoltarea asistată
de IA pe un subset al muncii de întreținere a motorului său de calcul a
integrat de la început disciplina de recalibrare limitată în timp recomandată
aici, stabilind o perioadă explicită de șase luni de strângere de dovezi, cu
cerințe de revizuire sporite pentru modificările asistate de IA la logica de
calcul în special. Dovezile strânse nu au arătat nicio diferență semnificativă
statistic a ratei defectelor pentru modificări bine delimitate și înguste, dar
au confirmat un risc ridicat pentru modificările asistate de IA mai ample, cu
importanță arhitecturală mai mare. Politica rezultată a agenției a relaxat
controlul sporit pentru categoria modificărilor înguste, menținându-l și chiar
întărindu-l pentru modificările importante arhitectural, un rezultat
proporțional, bazat pe dovezi, pe care nu l-ar fi produs nici extrema „fără
recalibrare”, nici cea a „controlului general permanent”.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea apărării deliberate împotriva inflației metricilor și a
diluării calității este evitarea exact a scenariului pe care îl arată exemplul
companiei de asigurări de mai sus: o problemă de calitate nedetectată, care se
compune treptat și costă mult mai mult să fie descoperită și remediată după
fapt decât ar fi costat proactiv investiția în detecție, infrastructura de
testare prin mutații țintită special pe codul cu cel mai mare risc.

Costul total de proprietate include investiția în capacitatea de detecție
recomandată de acest subiect și disciplina continuă a recalibrării bazate pe
dovezi, în locul oricăreia dintre extreme, suspiciune permanentă sau
neatenție permanentă. Costul este modest și limitat în timp, în raport cu
riscul ca o problemă de calitate semnificativă și la scară mare să rămână
nedetectată tocmai pentru că a fost, prin însăși natura felului în care aceste
instrumente generează cod, făcută să pară corectă pentru procesele de
revizuire pe care organizația le avea deja.

## Anti-modele și capcane

- **Aplicarea neschimbată a pragurilor și metodelor de detecție din era
  dinainte de IA:** ratează un profil de risc ridicat, sugerat de dovezi.
- **Bazarea integrală pe revizuirea umană prin potrivire de tipare pentru
  codul generat de IA:** vulnerabilă în mod special la problema „arată corect”
  identificată de acest subiect.
- **Ratarea propagării inflației metricilor dincolo de punctul de generare a
  codului:** un fals semnal se poate răspândi nedetectat prin tot fluxul de
  livrare.
- **Control general permanent și neexaminat, fără recalibrare bazată pe
  dovezi:** irosește nesustenabil mare parte din valoarea reală a dezvoltării
  asistate de IA.
- **Comunicarea riscurilor acestui subiect ca rezistență generală la adoptarea
  IA, nu ca gestionare proporțională a riscului:** subminează atât siguranța,
  cât și adoptarea.
- **Lipsa unei investiții în capacitatea de detecție țintită special pe acest
  nou profil de risc:** lasă organizația dependentă de metode de revizuire pe
  care acest subiect le-a arătat slăbite tocmai față de el.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nicio conștientizare a riscului de inflație a
  metricilor sau de diluare a calității specific dezvoltării asistate de IA;
  gărzile de protecție și metodele de detecție existente se aplică neschimbat.
- **Nivelul 2, Dezvoltare:** Există o anumită conștientizare, dar recalibrarea
  este ad-hoc și nu s-a făcut nicio investiție în capacitatea de detecție
  specifică acestui risc.
- **Nivelul 3, Standardizare:** Pragurile recalibrate și metodele de detecție
  rezistente la problema „arată corect” (testarea prin mutații și cea bazată pe
  proprietăți) se aplică consecvent muncii asistate de IA.
- **Nivelul 4, Gestionare:** O disciplină de recalibrare limitată în timp și
  bazată pe dovezi ajustează activ controlul pe baza datelor acumulate, iar
  propagarea inflației metricilor este monitorizată activ în tot fluxul.
- **Nivelul 5, Orchestrare:** Organizația are o poziție matură, proporțională
  și în continuă evoluție de gestionare a riscului față de dezvoltarea
  asistată de IA, comunicată transparent, care nu își irosește valoarea prin
  prudență excesivă și nici nu expune organizația la o diluare nedetectată a
  calității.

## Idei de discuție

1. Am văzut vreo dovadă timpurie a tiparului de defecte „arată corect” în propriul nostru cod asistat de IA?
2. Ce metodă de detecție ar aborda cel mai direct riscul specific al acestui subiect pentru noi?
3. S-a propagat inflația metricilor din asistența IA în vreuna dintre metricile noastre din aval din flux?
4. Controlul nostru actual asupra codului asistat de IA se bazează pe dovezi sau este o setare implicită neexaminată?
5. Cum sunt primite de fapt îndrumările acestui subiect de echipa noastră: ca gestionare a riscului sau ca rezistență la adoptarea IA?

## Concluzii principale

- Inflația metricilor și diluarea calității sunt **versiuni intensificate ale
  unor riscuri pe care această carte le numește deja**, care cer gărzilor de
  protecție existente să muncească mai mult, nu cadre complet noi.
- Tendința codului generat de IA de a **„arăta corect”** slăbește în mod
  special revizuirea tradițională a codului de către oameni, prin potrivire de
  tipare.
- Investește în **metode de detecție rezistente la plauzibilitatea de
  suprafață**, în special testarea prin mutații și cea bazată pe proprietăți.
- Aplică o poziție de **recalibrare limitată în timp, bazată pe dovezi**, nu
  suspiciune generală permanentă și nici încredere permanentă neexaminată.
- **Comunică acest risc ca gestionare proporțională a riscului**, nu ca
  argument împotriva adoptării IA, pentru a susține atât siguranța, cât și
  utilizarea sustenabilă.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (disciplina asociată viteză-stabilitate pe care acest
  subiect o aplică unei noi categorii de risc).
- Jia, Yue și Mark Harman, „An Analysis and Survey of the Development of
  Mutation Testing”, *IEEE Transactions on Software Engineering* (2011):
  metoda de detecție care, susține acest subiect, devine disproporționat de
  valoroasă.
- Cercetările GitHub despre programarea în pereche cu IA și productivitatea
  dezvoltatorilor (date din industrie despre rezultatele și riscurile
  dezvoltării asistate de IA).
- *The Tyranny of Metrics*, de Jerry Z. Muller (fixația pe metrici și riscul
  de manipulare, direct relevante pentru inflația metricilor numită de acest
  subiect).
