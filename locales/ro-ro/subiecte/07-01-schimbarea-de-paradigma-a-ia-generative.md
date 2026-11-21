# 7.1 Schimbarea de paradigmă a IA generative

## Prezentare generală și motivație

Mare parte din istoria ingineriei software, scrisul codului a fost suficient de
lent și de costisitor încât volumul brut al producției, liniile scrise,
commiturile făcute, funcționalitățile livrate, se corela cel puțin vag cu
efortul real și, imperfect, cu valoarea reală. Corelația nu a fost niciodată
perfectă, subiectul 3.4 a dedicat un subiect întreg motivului pentru care
metricile de activitate induc în eroare chiar și într-o lume dinainte de IA,
dar a fost destul de puternică încât multe organizații și-au construit
programele de metrici pe presupunerea implicită că mai mult cod produs
înseamnă, în general, mai multă muncă făcută. Asistenții de programare bazați
pe [IA generativă](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) au rupt categoric această presupunere: un instrument poate
produce acum, în câteva secunde, un volum mare de cod cu aspect plauzibil, la
o fracțiune din costul de dinainte, iar acel volum nu spune aproape nimic, de
unul singur, despre dacă codul rezultat funcționează, poate fi întreținut sau
servește vreun scop real.

Afirmația centrală a acestui subiect este că avem de-a face cu o schimbare de
paradigmă, nu cu o schimbare incrementală a instrumentelor. O schimbare de
paradigmă modifică ceea ce măsoară de fapt instrumentele tale existente, nu
doar valorile pe care le raportează. Un vitezometru măsoară în continuare
viteza după ce schimbi motorul unei mașini; mai multe dintre metricile acestei
cărți nu traversează tranziția la fel de curat. Frecvența implementărilor
(subiectul 2.10) poate crește pentru că IA a accelerat o muncă cu adevărat
valoroasă sau pentru că IA a făcut trivial de ușor să generezi multe
modificări mici, de valoare redusă; cifra singură nu le mai poate distinge,
așa cum o putea face în mare parte, cu precauția cuvenită, înainte. Aceeași
logică se aplică cu și mai multă forță numărului brut de commituri, liniilor
de cod și volumului de pull requesturi, toate avertizate deja de subiectul 3.4
ca metrici individuale, acum amplificate într-un risc relevant și la nivelul
echipei și al organizației.

Pentru echipele mari, această schimbare a venit mai repede decât a putut să
se adapteze practica de măsurare a majorității organizațiilor, iar decalajul
dintre viteza adoptării și viteza adaptării măsurării este locul unde stă
riscul real al acestei părți. Organizațiile mari care continuă să raporteze,
fără ajustări, metrici de activitate din era dinainte de IA riscă să
sărbătorească o metrică ce a încetat pe tăcute să mai fie corelată cu
valoarea. Administrațiile publice care evaluează investițiile în instrumente
de IA au nevoie de o înțelegere lucidă a metricilor care rămân de încredere și
a celor care nu mai sunt, înainte de a se angaja în achiziții sau decizii de
politică bazate pe ipoteze de măsurare depășite.

## Principii-cheie

- **Este o schimbare de paradigmă în ceea ce măsoară metricile, nu una
  incrementală.** Unele metrici existente au încetat pe tăcute să mai
  însemne ceea ce însemnau.
- **Volumul producției nu a fost niciodată un indicator indirect fiabil al
  valorii, iar acum a devenit activ nefiabil.** Avertismentul din subiectul
  3.4 a fost mereu corect; această schimbare face ca ignorarea lui să coste
  mult mai mult.
- **Decalajul dintre viteza adoptării IA și viteza adaptării măsurării este
  riscul real.** Organizațiile adoptă instrumentele mai repede decât își
  reconsideră metricile.
- **Nu toate metricile din această carte sunt afectate în aceeași măsură.**
  Metricile de rezultat (Partea 5) rezistă mult mai bine acestei schimbări
  decât metricile de activitate și de producție brută.
- **Schimbarea este la nivelul întregii industrii și continuă, nu este un
  ajustaj de o singură dată.** Așteaptă-te la schimbări în continuare, pe
  măsură ce instrumentele și tiparele lor de adoptare evoluează.

## Recomandări

### Auditează explicit setul tău de metrici pentru validitatea în era IA

Parcurge tabloul tău de bord actual și, pentru fiecare metrică, întreabă
direct: ar arăta o echipă care folosește intens asistența IA, dar nu produce
mai multă valoare reală decât înainte, o citire îmbunătățită la această
metrică? Cele mai expuse sunt numărătorile de activitate, frecvența
commiturilor și frecvența brută a implementărilor (fără o gardă de protecție
de stabilitate asociată, subiectul 2.10). Metricile de rezultat din Partea 5,
rata defectelor scăpate, adoptarea funcționalităților, rezultatele de
business, sunt comparativ rezistente, pentru că măsoară rezultatul real, nu
volumul de activitate care l-a produs.

### Reexaminează în mod special frecvența implementărilor și timpul de livrare, cu atenție sporită la gărzile de protecție

Subiectul 2.10 a avertizat deja despre manipularea prin substituție, adică
spargerea unei munci semnificative în implementări banale, pentru a umfla
numărătoarea. IA generativă face acest tipar specific de manipulare mult mai
ieftin și mai ușor de produs, chiar și neintenționat, deoarece modificările
banale asistate de IA sunt acum aproape gratuit de generat. Strânge garda de
protecție a ratei de eșec a modificărilor (subiectul 2.10) proporțional cu
cât de intens a adoptat o echipă dezvoltarea asistată de IA și urmărește și
mai atent tendințele privind dimensiunea implementărilor.

### Tratează capacitatea de revizuire a codului ca pe un nou blocaj critic

Dacă asistența IA crește dramatic volumul de cod propus spre revizuire, etapa
de revizuire (subiectul 2.9), deja adesea cea mai mare sursă de timp de
așteptare din fluxul de livrare, devine o constrângere și mai ascuțită. Un
revizor căruia i se cere să evalueze un volum mult mai mare de cod generat de
IA în același ritm ca înainte va încetini inevitabil fluxul sau va reduce
profunzimea revizuirii, exact riscul de aprobare automată de care a avertizat
deja subiectul 2.9, acum sub o presiune mult mai mare. Urmărește cu atenție
sporită profunzimea revizuirii și gărzile de protecție ale calității, pe
măsură ce volumul de cod generat de IA crește.

### Nu presupune că codul generat de IA are același profil de defecte ca cel scris de oameni

Dovezile timpurii și experiența practicienilor sugerează că codul generat de
IA poate avea un profil de defecte diferit de cel scris de oameni: logică
plauzibilă la prima vedere, dar subtil greșită, tratare a cazurilor-limită
generată cu încredere, dar incorectă, sau cod care trece de o revizuire
superficială pentru că arată idiomatic și rezonabil, dar nu a fost de fapt
gândit cu o înțelegere reală a contextului specific al sistemului. Tratează
aceasta ca pe o ipoteză care merită testată activ pe propriile date despre
defecte scăpate (subiectul 5.1), etichetând defectele după cum codul de
origine a fost generat în mare parte de IA, în loc să presupui că relațiile
istorice ale ratei defectelor, pe care organizația ta și-a construit
practicile de calitate, se mențin neschimbate.

### Actualizează explicit cartea metricilor și procesul de guvernanță pentru această schimbare

Urmând disciplina de guvernanță din subiectul 1.4, nu lăsa această schimbare
să se întâmple programului tău de metrici în mod pasiv. Reia explicit cartea
metricilor, numind metricile care au nevoie de gărzi de protecție noi, pe cele
care trebuie retrase și pe cele care rămân de încredere, ca decizie
deliberată de guvernanță, nu ca derivă neexaminată. Documentează
raționamentul, pentru că este exact tipul de schimbare definițională și
contextuală despre care subiectul 1.4 avertizează că se poate produce în
tăcere și poate fi descoperită abia mult mai târziu.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Continui să raportezi neschimbat metricile din era dinainte de IA | Fără perturbări, raportare familiară | Riscul de a sărbători metrici care au încetat pe tăcute să mai fie corelate cu valoarea |
| Audit complet al setului de metrici și revizuire deliberată | Restabilește o măsurare de încredere | Cere efort analitic real și gestionarea schimbării organizaționale |
| Renunți complet la metricile de activitate și de producție | Elimină direct cel mai expus risc | Pierde un semnal contextual util în mod legitim (rezerva din subiectul 3.4) |
| Strângi gărzile de protecție fără un audit complet | Mai rapid de implementat | Poate scăpa metrici a căror expunere este mai puțin evidentă decât în cazurile cele mai clare |

Tensiunea centrală este **continuitatea măsurării versus validitatea
măsurării**. Organizațiile preferă firesc să continue să raporteze metrici
familiare în moduri familiare, deoarece schimbarea unui program de metrici are
un cost organizațional și o perturbare reale. Dar continuarea raportării unei
metrici care a încetat pe tăcute să măsoare ceea ce măsura este mai rea decât
perturbarea, este dezinformare activă. Rezolvă tensiunea tratând situația ca
exact genul de schimbare deliberată și documentată de guvernanță descris în
subiectul 1.4, perturbatoare pe termen scurt, dar necesară pentru a păstra
onestitatea metricilor organizației.

## Întrebări de discutat cu echipa ta

1. **Pentru fiecare metrică de pe tabloul nostru de bord, ar arăta o echipă
   care folosește intens asistența IA, dar nu produce mai multă valoare
   reală, o citire îmbunătățită?** Parcurge explicit metricile cu acest test;
   cele care îl pică sunt candidatele tale prioritare pentru gărzi de
   protecție revizuite sau pentru retragere.

2. **A crescut frecvența implementărilor sau volumul de commituri de când am
   adoptat asistența IA în programare și am verificat dacă rata de eșec a
   modificărilor sau rata defectelor s-au mișcat corespunzător?** Scoate
   datele reale asociate, în loc să presupui un rezultat pozitiv sau negativ.

3. **Ține capacitatea noastră de revizuire a codului pasul cu orice creștere
   a volumului de cod asistat de IA sau profunzimea revizuirii se erodează pe
   tăcute sub presiunea crescută?** Verifică metricile etapei de revizuire
   (subiectul 2.9), căutând semne că riscul de aprobare automată se
   intensifică.

4. **Etichetăm defectele după cum codul de origine a fost generat în mare
   parte de IA și, dacă da, ce arată datele până acum?** Dacă nu faci încă
   acest lucru, discută ce ar fi nevoie ca să începi, deoarece aceste date
   sunt direct relevante pentru a ști dacă ipotezele noastre istorice despre
   calitate se mențin.

5. **Am reluat deliberat cartea metricilor (subiectul 1.4) în lumina acestei
   schimbări sau practica noastră de măsurare a continuat pur și simplu
   neschimbată?** Dacă răspunsul sincer este al doilea, tocmai acest decalaj
   este cel pe care subiectul de față recomandă să-l închizi primul.

6. **Cum ar arăta ca organizația noastră să fie prinsă nepregătită de această
   schimbare, sărbătorind o metrică ce încetase deja să însemne ce credeam
   noi?** Acest experiment mental concret și puțin neplăcut ajută la
   motivarea auditului pe care îl recomandă acest subiect înainte, nu după,
   ce se întâmplă scenariul.

## Perspectiva sectorială

**Startup.** Adoptarea rapidă a instrumentelor de IA este frecventă și adesea
un avantaj competitiv real, dar aceeași viteză care face adoptarea atractivă
face mai probabilă deriva neexaminată a metricilor. Formează obiceiul de a
verifica metricile de rezultat (Partea 5) alături de orice câștig de
eficiență raportezi din adoptarea IA, în loc să raportezi doar îmbunătățiri
de viteză.

**Afacere mică.** Asistența IA în programare poate extinde semnificativ
capacitatea unei echipe mici, dar rezistă tentației de a raporta creșterile
brute de producție ca succes neechivoc fără a verifica gărzile de protecție
ale calității; o echipă mică are mai puțină capacitate de a absorbi o problemă
de calitate nedetectată decât o organizație mai mare, cu mai multă
redundanță.

**Companie mare.** Amploarea acestui risc se compune semnificativ aici, deoarece
adoptarea IA în zeci sau sute de echipe simultan poate muta validitatea
metricilor la nivelul întregii organizații înainte ca vreo echipă să observe
tiparul local. Fă auditul setului de metrici recomandat de acest subiect la
nivel de organizație, nu doar echipă cu echipă, și actualizează guvernanța
(subiectul 1.4) central și explicit.

**Administrație publică.** Organizațiile din sectorul public adoptă adesea
tehnologia nouă mai prudent, dar metricile și reperele folosite pentru
evaluarea programelor tehnologice guvernamentale sunt frecvent preluate din
date din industria privată, sau comparate cu ele, iar acestea se mută sub
aceeași presiune. Înțelege explicit care dintre reperele din industrie cu
care te compari au fost afectate de această schimbare înainte de a le folosi
pentru a stabili așteptări sau a evalua performanța.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de tehnologie
financiară a observat că frecvența implementărilor crescuse cu aproape 40% în
cele două trimestre de după adoptarea pe scară largă a asistenților de
programare bazați pe IA și a raportat inițial acest lucru, într-o prezentare
către consiliu, drept o victorie simplă de productivitate. O analiză ulterioară
mai atentă, provocată de întrebarea unui membru sceptic al consiliului despre
dacă a fost verificată calitatea, a constatat că rata de eșec a modificărilor
crescuse aproape în pas cu frecvența implementărilor, anulând complet câștigul
aparent odată ce metrica de stabilitate asociată a fost examinată cu adevărat.
Raportarea revizuită a companiei prezintă acum frecvența implementărilor și
rata de eșec a modificărilor împreună, explicit, ori de câte ori se fac
afirmații de productivitate asistată de IA, evitând afirmația înșelătoare de
dinainte, aproape publică.

**Administrație publică.** Un departament IT al unui guvern de stat, care
testa asistența IA în programare pe un subset al echipelor sale de inginerie,
a constatat că producția brută de cod per inginer crescuse substanțial, o cifră
citată inițial favorabil într-o revizuire internă a proiectului-pilot. O
analiză mai atentă, determinată de încorporarea îndrumărilor acestei cărți în
cadrul de evaluare al departamentului, a examinat rata defectelor scăpate
pentru munca asistată de IA față de cea neasistată și a găsit o rată de
defecte modest mai ridicată în cohorta asistată de IA, concentrată în
tratarea cazurilor-limită pentru situații neobișnuite ale cetățenilor, la care
instrumentul de IA nu fusese expus în timpul antrenării. Constatarea nu a
oprit pilotul, dar a dus la o creștere specifică și țintită a rigorii
revizuirii pentru modificările asistate de IA care ating logica cazurilor-limită
de eligibilitate, abordând riscul real pe care metrica brută a producției,
singură, nu l-ar fi dezvăluit niciodată.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea efectuării proactive a acestui audit constă în evitarea unei
jene publice sau în fața consiliului pentru raportarea unei metrici care, sub
control, se dovedește că nu a măsurat nimic real, exact scenariul pe care
aproape că l-a produs exemplul din tehnologia financiară de mai sus. O
organizație care ia avans în fața acestei schimbări își păstrează
credibilitatea în fața părților interesate; una prinsă raportând o metrică
goală plătește un cost reputațional real și în mare parte evitabil.

Costul total de proprietate este efortul analitic de a audita setul existent
de metrici, de a strânge gărzile de protecție și de a actualiza documentația
de guvernanță, o investiție unică și moderată în raport cu riscul continuu de
a raporta metrici care au încetat pe tăcute să măsoare ceea ce pretind. Acest
cost este și recurent, la un nivel mai redus, deoarece schimbarea este în
desfășurare, nu un eveniment unic, iar reauditarea periodică, pe măsură ce
instrumentele și tiparele de adoptare evoluează, este o completare rezonabilă
și permanentă a ritmului de guvernanță a metricilor.

## Anti-modele și capcane

- **Continuarea raportării neschimbate și necritice a metricilor de activitate
  din era dinainte de IA:** riscă să sărbătorești o metrică care a încetat pe
  tăcute să mai fie corelată cu valoarea reală.
- **Raportarea creșterilor frecvenței implementărilor sau ale volumului de
  producție fără garda de protecție de stabilitate asociată:** repetă
  avertismentul din subiectul 2.10 cu mize semnificativ mai mari în
  dezvoltarea asistată de IA.
- **Presupunerea, fără verificare, că codul generat de IA are același profil
  de defecte ca cel scris de oameni:** o ipoteză netestată care poate fi
  activ greșită.
- **Lăsarea profunzimii revizuirii să se erodeze în tăcere sub volumul
  crescut de cod generat de IA:** riscul de aprobare automată din subiectul
  2.9, intensificat.
- **Tratarea acestei schimbări ca pe un ajustaj de o singură dată, nu ca pe o
  preocupare continuă:** instrumentele și tiparele lor de adoptare continuă să
  evolueze, iar practica de măsurare trebuie să țină pasul.
- **Compararea cu repere din industrie fără a înțelege dacă acele repere s-au
  mutat ele însele sub aceeași presiune:** riscă un fals sentiment de
  performanță relativă.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile din era dinainte de IA sunt raportate
  neschimbat, fără conștientizarea faptului că adoptarea IA le-ar fi putut
  afecta validitatea.
- **Nivelul 2, Dezvoltare:** Există o anumită conștientizare a schimbării, dar
  nu s-a făcut niciun audit sistematic al setului existent de metrici.
- **Nivelul 3, Standardizare:** S-a făcut un audit complet al setului de
  metrici, cu gărzi de protecție strânse și metrici documentate ca afectate
  sau rezistente, la nivelul întregii organizații.
- **Nivelul 4, Gestionare:** Defectele și rezultatele de calitate sunt
  etichetate și urmărite activ după nivelul de asistență IA, pentru a testa,
  nu a presupune, că relațiile istorice de calitate ale organizației se mențin.
- **Nivelul 5, Orchestrare:** Organizația are o practică matură și continuă de
  reexaminare a metricilor pe măsură ce instrumentele de IA și tiparele de
  adoptare evoluează și poate indica decizii specifice de guvernanță luate
  proactiv ca răspuns la această schimbare, nu reactiv, după apariția unei
  probleme.

## Idei de discuție

1. Care dintre metricile noastre actuale ar flata cel mai mult o echipă care folosește intens asistența IA, dar nu produce mai multă valoare reală?
2. A crescut frecvența implementărilor noastre de la adoptarea IA și s-a mișcat odată cu ea rata de eșec a modificărilor?
3. Etichetăm rezultatele de calitate după nivelul de asistență IA și ce ar arăta aceste date?
4. Ține capacitatea noastră de revizuire pasul cu orice creștere a volumului de cod generat de IA?
5. Cu ce reper din industrie ne comparăm acum și s-a mutat el însuși sub această presiune?

## Concluzii principale

- IA generativă este o **schimbare de paradigmă în ceea ce măsoară mai multe
  metrici existente**, nu o schimbare incrementală a instrumentelor; unele
  metrici au încetat pe tăcute să mai însemne ceea ce însemnau.
- **Metricile de activitate și de producție brută sunt cele mai expuse**;
  metricile de rezultat (Partea 5) sunt comparativ rezistente.
- **Strânge gărzile de protecție, mai ales rata de eșec a modificărilor**,
  proporțional cu adoptarea dezvoltării asistate de IA.
- **Testează, nu presupune, dacă codul generat de IA are un profil de defecte
  diferit** față de cel scris de oameni, folosind date etichetate despre
  defecte scăpate.
- Tratează aceasta ca pe o **preocupare de guvernanță continuă, nu de o
  singură dată** (subiectul 1.4), deoarece instrumentele și tiparele lor de
  adoptare continuă să evolueze.

## Referințe și lecturi suplimentare

- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (fundamentul măsurării bazate pe rezultate, care
  devine, susține acest subiect, mai important, nu mai puțin, în această
  schimbare).
- Cercetările GitHub despre programarea în pereche cu IA și productivitatea
  dezvoltatorilor (cercetare din industrie despre efectele măsurabile ale
  dezvoltării asistate de IA).
- Programul de cercetare DORA (DevOps Research and Assessment) al Google
  Cloud, [dora.dev](https://dora.dev/) (cercetarea continuă State of DevOps,
  care a inclus în ultimii ani constatări despre adoptarea IA).
- *The Tyranny of Metrics*, de Jerry Z. Muller (argumentul general al
  scepticismului față de metricile bazate pe volum, direct relevant pe măsură
  ce volumul producției devine ieftin).
