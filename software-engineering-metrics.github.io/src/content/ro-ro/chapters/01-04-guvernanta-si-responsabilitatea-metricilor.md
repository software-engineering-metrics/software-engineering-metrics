# 1.4 Guvernanța și responsabilitatea metricilor

## Prezentare generală și motivație

O metrică fără responsabil este o ceartă permanentă care așteaptă să se
întâmple. Două echipe calculează „utilizatori activi” diferit și pierd o
ședință reconciliind numere în loc să gestioneze tendința; o tilă de tablou de
bord pe care n-o întreține nimeni se învechește pe tăcute luni de zile înainte
să observe cineva; o metrică construită inițial pentru diagnosticul unei
echipe este adoptată de altă echipă pentru un scop pe care definiția ei
originală nu a fost proiectată să-l susțină. Nimic din toate astea nu este o
problemă de măsurare în sens statistic. Este o problemă de guvernanță și se
rezolvă cu aceeași disciplină pe care organizațiile o aplică deja codului:
responsabilitate explicită, o [sursă de adevăr](https://en.wikipedia.org/wiki/Single_source_of_truth)
documentată și un proces de revizuire.

Guvernanța nu este birocrație de dragul birocrației. Este ceea ce face un
program de metrici să reziste contactului cu scara organizațională. O singură
echipă își poate ține definițiile metricilor în capul cuiva și poate corecta
deriva prin conversația zilnică. O organizație cu zeci de echipe, fiecare
producând și consumând metrici, nu poate. Fără guvernanță, definițiile derivă
pe tăcute, metricile se înmulțesc fără ca cineva să le curețe, iar până când
conducerea observă că două rapoarte nu se potrivesc, costul reconcilierii a fost
deja plătit de multe ori în ședințe irosite și încredere erodată.

Pentru organizațiile mari și pentru administrația publică, guvernanța are o
greutate suplimentară, pentru că metricile alimentează tot mai mult decizii cu
consecințe reale, alocarea bugetului, raportarea publică a performanței,
contractele cu furnizorii, care supraviețuiesc oricărei persoane care a
construit tabloul de bord inițial. O cartă a metricilor care rezistă
fluctuației de personal, pe care orice membru nou al echipei o poate citi și
înțelege, este ceea ce face ca numerele unei organizații să însemne același
lucru peste cinci ani ca azi.

## Principii-cheie

- **Fiecare metrică are exact un responsabil.** Responsabilitatea împărțită
  este lipsă de responsabilitate; când toată lumea deține o definiție, nimeni
  nu o întreține.
- **O metrică are o singură sursă de adevăr.** Două sisteme care calculează
  aceeași metrică diferit sunt un eșec de guvernanță care așteaptă să iasă la
  suprafață.
- **Guvernanța este scrisă, nu cunoaștere tribală.** O cartă a metricilor care
  trăiește doar în memoria cuiva nu supraviețuiește plecării acelei persoane.
- **Retragerea este la fel de importantă ca adoptarea.** Un program sănătos de
  metrici curăță la fel de deliberat pe cât crește.
- **Guvernanța crește cu consecința, nu cu numărul de metrici.** O metrică ce
  alimentează un raport public are nevoie de o guvernanță mai grea decât una pe
  care o echipă o folosește ca să-și depaneze propriul sprint.

## Recomandări

### Scrie o cartă a metricilor pentru fiecare set de metrici care trece peste granița unei echipe

O **cartă a metricilor** este un document scurt și viu care precizează scopul
unui set de metrici, non-obiectivele lui explicite (aici își are locul
distincția diagnostic versus evaluativ din subiectul 1.1), responsabilul și
sursa de adevăr ale fiecărei metrici și o cadență de revizuire. Păstreaz-o la o
pagină. Fișierul docs/examples/metrics-charter-example.md din depozitul
însoțitor al acestei cărți arată forma. O cartă atât de scurtă este citită; o
cartă care se întinde până la un document de politici nu este.

### Atribuie fiecărei metrici un responsabil numit, nu o echipă

„Echipa de platformă deține această metrică” difuzează responsabilitatea până
când nimeni nu o mai întreține de fapt. Numește o persoană sau un rol
specific, cu răspundere. Acel responsabil răspunde de faptul că definiția
metricii rămâne corectă, că instrumentarea rămâne sănătoasă și de răspunsul la
întrebarea „de ce arată greșit acest număr”, care apare inevitabil.
Responsabilitatea poate și ar trebui să se rotească pe măsură ce oamenii își
schimbă rolurile, dar carta ar trebui să numească mereu un responsabil curent,
niciodată să lase câmpul gol.

### Stabilește o singură sursă de adevăr pentru fiecare metrică și interzice calculul paralel

Când două sisteme calculează diferit aceeași metrică cu același nume nominal,
de exemplu „utilizatori activi” numărați de o echipă după autentificări și de
alta după apeluri API, dezacordul rezultat costă mult mai mult în ședințe de
reconciliere decât ar fi costat să se convină de la început asupra unei
singure surse de adevăr. Numește în cartă sistemul autoritar pentru fiecare
metrică și tratează orice alt calcul al aceleiași metrici fie ca pe un
defect de reparat, fie ca pe o metrică cu alt nume, care trebuie redenumită.

### Include o revizuire de retragere în cadența de guvernanță

Un program de metrici care doar adaugă metrici acumulează o harababură de
tablouri de bord pe care nimeni nu poate acționa (subiectul 1.1). La fiecare
revizuire de guvernanță, alături de propunerea de metrici noi, întreabă care
dintre cele existente nu au informat nicio decizie în ultimele două cicluri și
sunt candidate la retragere. Retragerea nu este un eșec; este aceeași
disciplină pe care o aplică un cod sănătos codului mort.

### Potrivește rigoarea guvernanței cu consecința, nu cu volumul

Nu orice metrică are nevoie de același proces. O metrică pe care o echipă o
inventează ca să-și depaneze propriul sprint nu are nevoie de aproape nicio
guvernanță în afara faptului că echipa știe ce înseamnă. O metrică ce
alimentează o fișă de scor executivă, un raport public de performanță sau
compensația unei persoane are nevoie de o definiție documentată, un responsabil
numit, o urmă de audit și o aprobare înainte de a intra în funcțiune. Potrivește
greutatea procesului cu consecința unei metrici greșite, nu cu numărul de
metrici existente.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără guvernanță formală | Rapid, cost redus pentru echipe mici | Definițiile derivă; responsabilitatea se difuzează; tablourile de bord se umflă necontrolat |
| Cartă ușoară pe set de metrici | Ieftină, lizibilă, crește odată cu organizația | Cere disciplină pentru a fi ținută la zi; poate fi sărită sub presiunea termenelor |
| Comitet central greu de guvernanță a metricilor | Consecvență puternică, urmă de audit puternică | Lent la aprobarea metricilor noi; poate deveni un blocaj pe care echipele îl ocolesc |
| Guvernanță scalată după consecință | Potrivește efortul cu riscul real | Cere judecată pentru clasificarea corectă a consecinței; poate fi manipulată subestimând miza |

Tensiunea centrală este **consecvență versus viteză**. O guvernanță centrală
grea produce metrici de încredere și consecvente, dar încetinește o echipă
exact când vrea să instrumenteze ceva repede ca să răspundă la o întrebare
urgentă. Rezolvă tensiunea scalând greutatea guvernanței după consecință:
lasă echipele să instrumenteze liber pentru propria folosire de diagnostic și
cere disciplina completă de cartă, responsabilitate și aprobare doar după ce o
metrică trece peste granița unei echipe sau alimentează o folosire evaluativă
sau publică.

## Întrebări de discutat cu echipa ta

1. **Are fiecare metrică ce trece peste granița unei echipe un responsabil numit
   și s-ar recunoaște acel responsabil drept răspunzător dacă ar fi întrebat
   azi?** „Echipa de platformă o deține” nu este un răspuns; o persoană sau un
   rol specific este. Auditează metricile între echipe și verifică dacă
   responsabilul numit, dacă există unul, știe de fapt că deține acea
   responsabilitate.

2. **Unde calculăm acum aceeași metrică cu același nume nominal în două
   moduri diferite și cât timp am pierdut reconciliind dezacordul?** Acesta este
   unul dintre cele mai scumpe și mai frecvente eșecuri de guvernanță din
   organizațiile mari și este complet prevenibil cu o singură sursă de adevăr
   documentată. Adu un exemplu real, dacă ai unul, și urmărește-i costul.

3. **Când am retras ultima oară o metrică și ce a declanșat decizia?** O
   organizație care poate descrie doar cum adaugă metrici, niciodată cum le
   scoate, acumulează datorie de tablou de bord. Dacă nu-ți amintești o
   retragere, această absență este ea însăși răspunsul la întrebare.

4. **Este procesul nostru de guvernanță proporțional cu consecința sau trece
   fiecare metrică prin aceeași greutate de revizuire indiferent de miză?** O
   guvernanță prea grea pentru o metrică de echipă cu miză mică încetinește
   munca fără niciun beneficiu de siguranță; una prea ușoară pentru o metrică
   ce alimentează un raport public sau o decizie de compensare este un risc
   real. Cartografiază metricile actuale după consecință și verifică sincer
   greutatea procesului față de ea.

5. **Ce se întâmplă cu responsabilitatea unei metrici când persoana care a
   construit-o își schimbă rolul sau pleacă?** O cartă a metricilor care există
   doar în capul unei persoane dispare odată cu ea. Testează alegând o metrică
   și întrebând dacă un angajat nou ar putea, doar din documentația scrisă, să
   înțeleagă definiția, sursa de adevăr și scopul ei.

6. **Cum am ști dacă definiția unei metrici s-a schimbat pe tăcute?** O
   schimbare a felului în care se calculează un număr, fără schimbarea numelui
   sau o notă în istoricul lui, este aproape invizibilă până când cineva
   compară datele vechi cu cele noi și găsește o discontinuitate pe care nu o
   poate explica. Discută dacă metricile tale au azi vreo formă de jurnal de
   modificări.

## Perspectiva sectorială

**Startup.** Guvernanța formală este de obicei exagerată pentru o echipă de
cinci oameni în care toată lumea știe deja ce înseamnă fiecare număr. Singura
disciplină care merită adoptată totuși devreme este numirea în scris a unui
singur responsabil pe metrică, pentru că nu costă aproape nimic și previne
confuzia pe măsură ce primele angajări se alătură și încep să întrebe ce
înseamnă un număr.

**Afacere mică.** Guvernanța înseamnă aici mai ales alegerea, și respectarea,
unei singure unelte drept sursă de adevăr pentru fiecare metrică, în loc să
lași foile de calcul și tabloul de bord integrat al unei platforme să divergă
pe tăcute. Scrie carta ca un singur document comun, chiar și informal, astfel
încât un angajat nou să poată afla ce înseamnă un număr fără să întrebe în
jur.

**Companie mare.** Aici guvernanța își câștigă pâinea. Standardizează
definițiile între unitățile de business, cere o cartă pentru orice alimentează
o fișă de scor executivă și include revizuirea de retragere într-o cadență
recurentă de guvernanță, pentru că harababura de tablouri de bord la această
scară devine rapid scumpă, atât ca cost de întreținere, cât și ca pierdere de
credibilitate când două divizii raportează numere contradictorii pentru același
lucru.

**Administrație publică.** Guvernanța are aici adesea o dimensiune legală sau
de audit: indicatorii de performanță publicați pot trebui să respecte cerințe
statutare de raportare, iar o schimbare de definiție poate avea consecințe
politice reale. Documentează metodologia public, îngheață definițiile între
perioadele de raportare, cu excepția cazului în care schimbarea este ea
însăși justificată public, și tratează un audit independent al definiției
metricii, nu doar al valorii ei curente, ca practică permanentă de guvernanță.

## Exemple

**Companie mare.** O companie multinațională de software a descoperit, în timpul
unei integrări după o achiziție, că cele mai mari două unități de business ale
sale defineau „frecvența implementărilor” diferit: una număra fiecare push
într-un mediu de staging, cealaltă număra doar lansările în producție.
Conducerea compara de peste un an performanța de livrare a celor două unități
folosind numere care nu erau de fapt comparabile. Remediul a fost un comitet de
guvernanță a metricilor la nivel de companie, care a publicat un singur glosar
de definiții ale metricilor (reflectat în subiectul 9.2 al acestei cărți), a
cerut fiecărei echipe să certifice conformitatea și a retras definițiile
locale ambigue într-un trimestru.

**Administrație publică.** Un oficiu național de statistică, responsabil cu
publicarea unui tablou de bord al performanței serviciilor digitale, a
descoperit că o schimbare a modului de calcul al „rezolvat în SLA”, făcută
discret de o echipă de inginerie care repara ce considera un defect, mutase cu
câteva puncte procentuale o cifră principală de conformitate, fără nicio
documentare publică a schimbării. Oficiul a stabilit un proces formal de
control al modificărilor pentru orice definiție de metrică ce alimentează un
raport public: modificările propuse cer o justificare documentată, o comparație
înainte și după publicată odată cu schimbarea și aprobarea unui funcționar
responsabil numit, închizând lacuna care lăsase schimbarea anterioară să treacă
neobservată.

## Argumentul de business: motivații, ROI și TCO

Randamentul guvernanței este costul de reconciliere evitat. Fiecare oră petrecută
într-o ședință în care două echipe se ceartă despre al cui număr este corect
este o oră pe care o guvernanță disciplinată, o singură sursă de adevăr, un
responsabil numit, ar fi prevenit complet. La scara unei companii mari, acest
cost se compune peste zeci de echipe și poate consuma o parte cu adevărat
semnificativă din atenția conducerii pentru o problemă pe care o cartă de o
pagină pe set de metrici ar fi evitat-o.

Costul total de proprietate al unei practici ușoare de guvernanță, o cartă, un
responsabil numit, o revizuire periodică, este modest și în mare parte inițial.
Alternativa, descoperirea după un an de inițiativă majoră că numerele în care a
avut încredere conducerea nu au fost niciodată de fapt comparabile, costă
dramatic mai mult, atât în analize irosite, cât și în dauna de credibilitate a
corectării înregistrării publice sau interne după fapt.

## Anti-modele și capcane

- **Responsabilitate a echipei în loc de responsabilitate a unei persoane
  numite:** difuzează răspunderea până când nimeni nu mai întreține definiția.
- **Calculul paralel al aceleiași metrici nominale:** garantează un dezacord
  inevitabil și o reconciliere scumpă.
- **O cartă care există doar în capul cuiva:** dispare în clipa în care acea
  persoană își schimbă rolul.
- **Un program de metrici care doar adaugă, niciodată nu retrage:** produce o
  harababură de tablouri de bord pe care nimeni nu poate acționa.
- **Greutate uniformă a guvernanței indiferent de consecință:** încetinește
  munca cu miză mică și protejează insuficient metricile publice sau legate
  de compensare, cu miză mare.
- **Schimbări tăcute de definiție:** sensul unei metrici se schimbă fără jurnal
  de modificări, iar comparațiile istorice devin pe tăcute invalide.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile nu au responsabili formali; definițiile
  trăiesc în memoria individuală și derivă pe tăcute între echipe.
- **Nivelul 2, Dezvoltare:** Unele echipe scriu documentație informală pentru
  propriile metrici, dar nu există un format comun de cartă și nici
  consecvență între echipe.
- **Nivelul 3, Standardizare:** Fiecare metrică ce trece peste granița unei
  echipe are o cartă documentată, un responsabil numit și o singură sursă de
  adevăr convenită, impuse la nivelul întregii organizații.
- **Nivelul 4, Gestionare:** O cadență recurentă de guvernanță revizuiește
  relevanța continuă a metricilor, retrage pe cele care nu-și mai merită locul
  și urmărește schimbările de definiție cu un istoric vizibil.
- **Nivelul 5, Orchestrare:** Guvernanța este proporțională cu consecința,
  automatizată acolo unde se poate (un catalog de metrici care semnalează
  metricile nedocumentate sau fără responsabil), iar organizația poate
  demonstra, la cerere, proveniența completă a oricărui număr publicat.

## Idei de discuție

1. Ar putea un angajat nou să afle, doar din documentație, ce înseamnă de fapt cele mai importante trei metrici ale noastre?
2. Pe care dintre metricile noastre le calculează în prezent diferit două sisteme diferite?
3. Când am retras ultima oară o metrică și cum am decis?
4. Este procesul nostru de guvernanță mai greu acolo unde consecința este cea mai mare sau este uniform?
5. Cine deține, pe nume, cea mai importantă metrică publică a organizației noastre?

## Concluzii principale

- Fiecare metrică are nevoie de **un responsabil numit**, nu de o echipă, și de
  **o singură sursă de adevăr**, nu de calcul paralel.
- Scrie o **cartă a metricilor** scurtă și vie pentru orice set de metrici ce
  trece peste granița unei echipe, precizând scopul, non-obiectivele,
  responsabilitatea și cadența de revizuire.
- **Retragerea** este o disciplină de guvernanță la fel de importantă ca
  adoptarea; curăță deliberat.
- Potrivește rigoarea guvernanței cu **consecința**, nu cu numărul de metrici:
  proces mai greu pentru metricile publice, evaluative sau legate de
  compensare.
- Definiția unei metrici poate deriva pe tăcute; urmărește schimbările cu un
  istoric vizibil, astfel încât încrederea într-un număr să supraviețuiască
  fluctuației de personal.

## Referințe și lecturi suplimentare

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, de John Ladley (structuri de guvernanță aplicabile
  programelor de metrici).
- *Measuring and Managing Performance in Organizations*, de Robert D. Austin
  (disfuncții organizaționale în jurul responsabilității și folosirii
  metricilor).
- *Key Performance Indicators*, de David Parmenter (responsabilitatea
  metricilor, disciplina definițiilor și cadența de revizuire).
- Ghidurile U.S. Government Accountability Office (GAO) privind măsurarea
  performanței și GPRA Modernization Act: guvernanța metricilor și controlul
  modificărilor în sectorul public.
