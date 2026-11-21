# 6.1 Indicatori, obiective și bugete de erori ale nivelului de serviciu

## Prezentare generală și motivație

**[Ingineria fiabilității site-urilor](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)**, disciplina inițiată la Google și documentată în cartea *Site
Reliability Engineering*, a adus un vocabular pe care acest subiect se
construiește direct: un **indicator al nivelului de serviciu (SLI)** este un
semnal măsurat direct al sănătății unui serviciu, latența cererilor, rata de
erori, disponibilitatea. Un **obiectiv al nivelului de serviciu (SLO)** este
intervalul țintă pentru acel indicator, de exemplu 99,9% din cereri reușesc în
sub 200 de milisecunde. Iar un **buget de erori** este deficitul permis, cele
0,1% din cereri care au voie să eșueze, tratat nu ca un defect de eliminat, ci
ca o resursă care se poate cheltui și care poate fi folosită deliberat ca să
asumi risc: livrarea unei modificări riscante, rularea unui experiment sau pur
și simplu acceptarea faptului că fiabilitatea perfectă nu este nici realizabilă,
nici, dincolo de un anumit punct, meritată de costul ei.

Această ultimă idee, bugetul de erori ca resursă care se poate cheltui, nu ca
un număr de minimizat spre zero, este cel mai important concept al acestui
subiect și, probabil, al întregii părți. Ea rezolvă o tensiune care macină multe
organizații: ingineria vrea să livreze funcționalități și să își asume riscuri
rezonabile; operațiunile vor stabilitate maximă. Fără un buget de erori comun și
cuantificat, aceasta devine o negociere nesfârșită și încărcată politic. Cu unul,
devine o regulă simplă și obiectivă: cheltuiește liber cât timp mai există
buget, încetinește și prioritizează automat munca de stabilitate odată ce s-a
epuizat. Astfel un dezacord filosofic devine unul aritmetic.

Pentru echipele mari, SLO-urile și bugetele de erori sunt ceea ce face
fiabilitatea măsurabilă și negociabilă, nu un absolut de neatins și nespus, pe
care fiecare echipă îl ratează în tăcere, simțindu-se vag vinovată. Companiile
mari folosesc SLO-urile ca să fixeze așteptări clare, contractuale, între echipe
și cu clienții; organizațiile guvernamentale care operează infrastructură
publică critică le folosesc ca să fixeze ținte de fiabilitate apărabile și
justificabile public, în loc de un standard imposibil de perfecțiune pe care
niciun sistem real nu îl poate susține.

## Principii-cheie

- **O fiabilitate de 100% este ținta greșită pentru aproape orice sistem.** De
  obicei este de neatins, iar urmărirea ei dincolo de un anumit punct sacrifică
  activ viteza fără niciun beneficiu semnificativ pentru utilizatori.
- **Un SLO trebuie să reflecte ce observă și ce îi interesează efectiv pe
  utilizatori**, nu un număr rotund arbitrar ales pentru că sună liniștitor.
- **Bugetul de erori transformă fiabilitatea într-o resursă care se poate
  cheltui**, oferind atât ingineriei, cât și operațiunilor o regulă comună și
  obiectivă despre când să livrezi repede și când să încetinești.
- **SLI-urile trebuie măsurate din experiența reală a utilizatorului** oricând
  e posibil, nu doar din sănătatea auto-raportată a unui sistem intern.
- **Epuizarea bugetului de erori declanșează un răspuns stabilit dinainte și
  agreat**, nu o ceartă ad hoc de fiecare dată când se întâmplă.

## Recomandări

### Alege SLI-uri care reflectă experiența autentică a utilizatorului

Alege indicatori măsurați cât mai aproape de experiența reală a utilizatorului:
rata de succes și latența cererilor măsurate la margine sau la load balancer,
nu doar verificări interne de sănătate a serviciului, care pot raporta „sănătos”
în timp ce utilizatorii întâmpină probleme reale. Un SLI care măsoară ceva ce
utilizatorul nu observă niciodată, o componentă internă funcționând tehnic în
timp ce cererea în ansamblu tot eșuează, măsoară lucrul greșit, oricât de ușor
ar fi de instrumentat.

### Fixează ținta SLO pe baza a ceea ce au nevoie efectiv utilizatorii, nu a unui număr rotund arbitrar

Rezistă reflexului de a fixa o țintă precum „99,99% disponibilitate” doar
pentru că sună impresionant de riguros. În schimb, cercetează ce nivel de
fiabilitate observă și apreciază cu adevărat utilizatorii, informat de datele
istorice despre incidente, de cercetarea cu utilizatori și de costul demonstrat
al fiecărei creșteri suplimentare de fiabilitate, pentru că trecerea de la
99,9% la 99,99% costă adesea mult mai mult efort de inginerie decât trecerea de
la 99% la 99,9%, pentru un beneficiu perceptibil de utilizator tot mai mic și,
în cele din urmă, neglijabil.

### Tratează bugetul de erori ca pe o resursă care se poate cheltui, cu un răspuns stabilit dinainte la epuizare

Calculează bugetul de erori direct din SLO (o țintă de disponibilitate de 99,9%
pe 30 de zile permite aproximativ 43 de minute de indisponibilitate) și urmărește
continuu cheltuirea lui. Stabilește, dinainte și înaintea oricărui incident
concret, ce se întâmplă când bugetul se epuizează: o politică obișnuită și
eficientă este ca munca la funcționalități să se oprească, iar prioritatea
echipei să se mute automat pe munca de fiabilitate până când bugetul se
reface. Această regulă stabilită dinainte elimină nevoia de a relua în instanță
compromisul, sub presiune, la fiecare incident în parte.

### Folosește bugetul de erori ca să iei decizii deliberate și informate despre risc

Un buget de erori sănătos și necheltuit nu este ceva de strâns; este permisiunea
de a-ți asuma riscuri rezonabile, de a livra o modificare cu risc ridicat, dar
acceptabil, de a rula un experiment de chaos engineering (subiectul de chaos
engineering din cartea soră `software-engineering-guide` îl tratează direct)
sau de a accepta o schimbare de arhitectură mai riscantă, pentru că bugetul
există tocmai ca să fie cheltuit deliberat, nu păstrat neatins. Un buget de
erori care nu se cheltuiește niciodată sugerează fie o echipă prea
conservatoare, fie un SLO fixat prea lejer față de fiabilitatea realmente
atinsă, ambele merită investigate.

### Revizuiește și ajustează periodic SLO-urile, pe baza dovezilor, nu a inerției

Un SLO fixat cu ani în urmă poate să nu mai reflecte așteptările actuale ale
utilizatorilor, arhitectura sistemului sau prioritățile de business.
Revizuiește SLO-urile cu o cadență regulată, verificând fiabilitatea istorică
atinsă, feedbackul utilizatorilor și dacă ținta mai reprezintă un punct
semnificativ de compromis, nu fie o țintă atinsă cu ușurință, care ar putea fi
înăsprită ca să permită mai multă viteză în altă parte, fie una nerealistă, la
care echipa a renunțat de fapt.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără SLO formal (implicit „cât mai fiabil posibil”) | Fără efort de configurare | Negociere nesfârșită și neîntemeiată între viteză și stabilitate; fără regulă comună |
| SLO aspirațional, foarte înalt (99,99%+) | Semnalează seriozitate față de fiabilitate | Adesea cost inutil; randament descrescător dincolo de ce observă utilizatorii |
| SLO bazat pe dovezi și ancorat în experiența utilizatorului | Reflectă valoare autentică; apărabil și realizabil | Cere date și analiză reale pentru a fi fixat corect |
| Buget de erori cu răspuns stabilit dinainte la epuizare | Elimină negocierea ad hoc; decizii obiective și rapide | Cere adeziune organizațională și disciplină pentru a respecta efectiv regula stabilită dinainte |

Tensiunea centrală este **aspirația față de realizabilitate**. Un SLO înalt,
aspirațional, pare să semnaleze seriozitate față de calitate, dar urmărirea
fiabilității dincolo de ce observă utilizatorii sacrifică viteză reală fără
niciun beneficiu autentic, iar o țintă nerealistă, pe care echipa nu o atinge
niciodată, îi învață pe toți să nu mai ia SLO-ul în serios deloc. Rezolvă
tensiunea ancorând SLO-ul în dovezi reale, ce observă utilizatorii, ce a atins
istoric sistemul, cât costă fiecare creștere suplimentară, nu în aspirație sau
în dorința de a părea riguros pe o fișă de scor.

## Întrebări de discutat cu echipa ta

1. **Este SLO-ul nostru actual ancorat în dovezi despre ce observă efectiv
   utilizatorii sau a fost fixat aspirațional, pentru că un număr mare părea
   potrivit de serios?** Urmărește originea țintei actuale, dacă poți, și
   evaluează onest dacă reflectă cercetare reală cu utilizatori sau doar
   intuiție de inginerie.

2. **Avem un răspuns stabilit dinainte și agreat la epuizarea bugetului de
   erori sau compromisul este reluat în instanță de fiecare dată când se
   întâmplă?** Dacă răspunsul sincer este al doilea, merită să închizi lacuna
   înainte ca următorul incident să forțeze discuția sub presiune.

3. **Este bugetul nostru de erori cheltuit vreodată deliberat, pe o schimbare cu
   risc calculat sau pe un experiment, sau este consumat doar accidental prin
   incidente?** Un buget care nu se cheltuiește niciodată deliberat poate
   indica o echipă prea precaută, care ratează oportunități legitime pe care
   bugetul există ca să le permită.

4. **Sunt SLI-urile noastre măsurate din experiența autentică a utilizatorului
   sau din sănătatea internă a sistemului, care poate să nu reflecte ce
   întâlnesc efectiv utilizatorii?** Verifică instrumentarea actuală față de
   această distincție; este o lacună comună chiar și în programe de fiabilitate
   altfel mature.

5. **Când ne-am revizuit ultima dată SLO-ul față de dovezile actuale și s-a
   schimbat ceva, așteptările utilizatorilor, arhitectura sistemului,
   prioritățile de business, care ar justifica o revizuire?** Dacă nu îți amintești
   o revizuire recentă, absența ei merită discutată.

6. **Cât ne-ar costa, în efort de inginerie, să urcăm SLO-ul actual cu încă un
   „nouă” de fiabilitate și ar fi justificat acest cost de vreun beneficiu real
   pentru utilizatori?** Această încadrare concretă cost-beneficiu ajută să
   ancorezi în numere reale tensiunea dintre aspirație și realizabilitate, nu
   într-o preferință abstractă.

## Perspectiva sectorială

**Startup.** SLO-urile formale sunt adesea inutile foarte devreme, când echipa
poate răspunde direct și informal la problemele de fiabilitate. Adoptă măcar un
SLO aproximativ, informal, de îndată ce ai clienți plătitori reali care depind de
disponibilitate, pentru că disciplina unei ținte explicite, chiar urmărite
lejer, ajută să prioritizezi munca de fiabilitate față de presiunea
funcționalităților mai devreme decât se gândesc majoritatea companiilor tinere.

**Afacere mică.** Majoritatea platformelor moderne de hosting și de
observabilitate raportează date de bază despre disponibilitate și latență cu o
configurare minimă; folosește-le ca să fixezi un SLO simplu și realizabil, nu
unul aspirațional pe care nu îl poți urmări sau pune în practică realist, cu
capacitate operațională limitată.

**Companie mare.** SLO-urile la această scară stau adesea la baza acordurilor
contractuale privind nivelul de serviciu, cu consecințe financiare reale, ceea
ce face deosebit de importante fixarea țintelor pe baza dovezilor și gestionarea
disciplinată a bugetului de erori. Investește în SLI-uri ancorate cu adevărat în
experiența utilizatorului, nu în verificări interne de sănătate comode, și
stabilește formal politica de răspuns la epuizare, cu adeziunea conducerii,
înainte să fie nevoie de ea sub presiune.

**Administrație publică.** Țintele de fiabilitate din sectorul public pentru
infrastructura critică au uneori greutate juridică sau de reglementare, iar o
țintă nerealistă și neatinsă, descoperită în timpul unui audit sau al unui
incident public, strică semnificativ credibilitatea instituțională. Fixează
ținte pe baza unei nevoi reale și documentate a utilizatorilor și a misiunii și
fii transparent public cu privire la compromisul deliberat pe care îl reprezintă
un buget de erori, în loc să sugerezi un standard de perfecțiune de neatins.

## Exemple

**Companie mare.** O companie de stocare în cloud urmărise ani la rând
„disponibilitate maximă”, fără SLO formal, ceea ce a dus la o tensiune cronică
și nerezolvată între echipa de produs (care voia să livreze rapid
funcționalități) și echipa de infrastructură (care voia precauție maximă),
reluată de la capăt la fiecare ședință de planificare a lansării. Adoptarea unui
SLO formal de disponibilitate de 99,95%, cu un buget de erori explicit și o
politică stabilită dinainte, munca la funcționalități se oprește automat când se
epuizează bugetul, a rezolvat complet negocierea recurentă: ambele echipe
vedeau același număr și puteau conveni asupra aceleiași reguli, iar compania a
raportat o creștere măsurabilă a funcționalităților livrate în perioadele cu
buget sănătos, alături de o încetinire măsurabilă și deliberată în cele două
perioade din anul următor în care bugetul s-a epuizat cu adevărat, exact cum
intenționa politica.

**Administrație publică.** Sistemul public de alerte al unui serviciu național
de meteorologie funcționase ani la rând sub o așteptare informală de „mereu
disponibil", fără țintă documentată și cu o presiune operațională semnificativă,
neabordată, asupra echipei de gardă care încerca să atingă un standard nespus,
practic imposibil. Un SLO formal adoptat recent, 99,9% disponibilitate, cu o
explicație publică clar comunicată a bugetului de erori, a dat echipei de
operațiuni permisiunea explicită și apărabilă de a programa ferestre planificate
de mentenanță în limitele bugetului, ceva ce așteptarea anterioară, nespusă, de
„mereu disponibil” făcuse dificil politic de realizat chiar și atunci când era
cu adevărat necesar pentru sănătatea pe termen lung a sistemului. Comunicarea
publică, explicând direct conceptul de buget de erori, în loc să îl ascundă, a
fost primită favorabil, ca semn al unei practici operaționale oneste și mature,
nu al unei slăbiri a angajamentului față de calitatea serviciului.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea adoptării formale a SLO-urilor și a bugetelor de erori este
rezolvarea unei negocieri altfel nesfârșite și costisitoare politic între viteză
și stabilitate printr-o singură regulă comună și obiectivă. Exemplul companiei
de stocare în cloud de mai sus arată asta concret: ani de tensiune recurentă și
nerezolvată între două echipe au fost rezolvați printr-o singură țintă formală
și o politică stabilită dinainte, eliberând multă energie organizațională care
se irosise în reluarea aceluiași compromis.

Costul total de proprietate include efortul de analiză pentru fixarea corectă a
unei ținte bazate pe dovezi și disciplina de a respecta răspunsul stabilit
dinainte la epuizare, chiar și sub presiunea de a livra totuși o funcționalitate
deosebit de dorită. Costul acestei discipline este real, dar mult mai mic decât
costul continuu al unei negocieri cronice și nerezolvate, care consumă energie
organizațională în fiecare ciclu de planificare, la nesfârșit.

## Anti-modele și capcane

- **Fixarea unui SLO aspirațional fără dovezi în spate:** produce o țintă
  nerealistă, pe care echipa încetează să o ia în serios, sau una inutil de
  scumpă, care urmărește un beneficiu pe care utilizatorii nu îl observă.
- **Niciun răspuns stabilit dinainte la epuizarea bugetului de erori:** forțează
  aceeași dezbatere dificilă despre compromis, sub presiune, de fiecare dată.
- **Măsurarea SLI-urilor din sănătatea internă a sistemului, nu din experiența
  autentică a utilizatorului:** poate raporta „sănătos” în timp ce utilizatorii
  întâmpină probleme reale.
- **Necheltuirea deliberată a unui buget de erori sănătos:** poate indica
  precauție excesivă și o oportunitate legitimă ratată.
- **Fixarea unei ținte o singură dată și nereluarea ei niciodată:** un SLO poate
  deveni depășit pe măsură ce se schimbă așteptările utilizatorilor,
  arhitectura și prioritățile.
- **Tratarea politicii bugetului de erori ca opțională sub presiune:** o regulă
  stabilită dinainte, care este ignorată ori de câte ori e incomodă, nu aduce
  nicio valoare reală de decizie.

## Model de maturitate

- **Nivelul 1, Inițiere:** Țintele de fiabilitate sunt implicite sau
  aspiraționale, fără SLO, SLI sau buget de erori formal definite.
- **Nivelul 2, Dezvoltare:** Unele servicii au un SLO informal, dar SLI-urile pot
  să nu reflecte experiența autentică a utilizatorului și nu există o politică
  stabilită dinainte la epuizare.
- **Nivelul 3, Standardizare:** SLO-uri bazate pe dovezi, cu SLI-uri ancorate
  în experiența autentică a utilizatorului și cu o politică stabilită dinainte
  la epuizarea bugetului de erori, sunt instituite consecvent pentru serviciile
  critice.
- **Nivelul 4, Gestionare:** Bugetele de erori sunt cheltuite activ și deliberat
  pentru asumarea de riscuri calculate, iar SLO-urile sunt revizuite și
  ajustate cu o cadență regulată, bazată pe dovezi.
- **Nivelul 5, Orchestrare:** SLO-urile și bugetele de erori sunt integrate la
  nivelul întregii organizații ca mecanism comun și obiectiv de echilibrare a
  vitezei și a stabilității, iar organizația poate indica decizii concrete pe
  care cadrul le-a permis și pe care o negociere neancorată nu le-ar fi
  rezolvat la fel de eficient.

## Idei de discuție

1. Este SLO-ul nostru actual ancorat în dovezi sau în aspirație?
2. Avem un răspuns stabilit dinainte la epuizarea bugetului de erori pe care l-am respecta efectiv sub presiune?
3. Când am cheltuit ultima dată deliberat un buget de erori sănătos pe un risc calculat?
4. Măsoară SLI-urile noastre experiența autentică a utilizatorului sau verificări interne comode de sănătate?
5. Cât ne-ar costa să ridicăm SLO-ul cu încă un „nouă” și ar fi justificat costul?

## Concluzii principale

- Un **indicator al nivelului de serviciu (SLI)** măsoară experiența autentică a
  utilizatorului; un **obiectiv al nivelului de serviciu (SLO)** este ținta lui
  bazată pe dovezi; un **buget de erori** este deficitul permis, care se poate
  cheltui deliberat.
- **O fiabilitate de 100% este de obicei ținta greșită**; ancorează-ți SLO-ul în
  ce observă efectiv utilizatorii și în ce costă cu adevărat fiecare creștere
  suplimentară.
- Tratează bugetul de erori ca pe o **resursă care se poate cheltui, cu un
  răspuns stabilit dinainte la epuizare**, eliminând nevoia de a relua sub
  presiune, de fiecare dată, compromisul dintre viteză și stabilitate.
- Măsoară SLI-urile din **experiența autentică a utilizatorului**, nu doar din
  verificări interne comode de sănătate.
- **Revizuiește și ajustează periodic SLO-urile**, pe baza dovezilor, pentru că
  o țintă depășită își pierde utilitatea pe măsură ce sistemul și utilizatorii
  lui se schimbă.

## Referințe și lecturi suplimentare

- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy
  Beyer, Chris Jones, Jennifer Petoff și Niall Richard Murphy, eds. (textul
  fundamental care definește SLI-urile, SLO-urile și bugetele de erori).
- *The Site Reliability Workbook*, de Betsy Beyer, Niall Richard Murphy,
  David K. Rensin, Kent Kawahara și Stephen Thorne, eds. (îndrumări practice
  pentru implementarea SLO-urilor și a bugetelor de erori).
- *Implementing Service Level Objectives*, de Alex Hidalgo (un ghid cuprinzător,
  orientat spre practicieni, pentru proiectarea și operaționalizarea
  SLO-urilor).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (relația dintre practica de fiabilitate și
  performanța livrării).
