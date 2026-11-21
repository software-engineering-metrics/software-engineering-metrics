# 4.5 Măsurarea datoriei tehnice

## Prezentare generală și motivație

**[Datoria tehnică](https://en.wikipedia.org/wiki/Technical_debt)**, o
metaforă lansată de Ward Cunningham, descrie costul acumulat al scurtăturilor din
trecut, decizii oportuniste care au livrat ceva mai repede, dar au lăsat baza de
cod mai greu de schimbat ulterior, în același fel în care datoria financiară îți
permite să cheltuiești acum cu prețul dobânzii de mai târziu. Fiecare bază de cod
poartă o anumită datorie tehnică și asta nu este automat un eșec; valoarea reală a
metaforei este că încadrează datoria ca pe un compromis gestionabil, nu ca pe un
secret rușinos sau o povară permanentă și inevitabilă. Acest subiect este despre
cum faci acel compromis vizibil și gestionabil prin măsurare, în loc să-l lași o
grijă vagă, mereu despriorizată, pe care o simte orice inginer, dar nimeni nu poate
acționa asupra ei cu dovezi.

Subiectele dinaintea acestuia, complexitatea (4.1), acoperirea (4.2), volatilitatea
și punctele fierbinți (4.3) și analiza statică (4.4), scot la iveală fiecare câte o
fațetă a datoriei tehnice. Sarcina acestui subiect este sinteza: transformarea
acestor semnale separate, plus a elementelor care nu apar niciodată în nicio
scanare automată (o scurtătură arhitecturală nedocumentată, o migrare amânată
deliberat), într-o singură restanță prioritizată și vizibilă, care concurează
corect pentru investiții cu munca la funcționalități, în loc să piardă implicit
această competiție doar pentru că nu are o metrică atașată și niciun susținător în
ședințele de planificare.

Pentru echipele mari, datoria tehnică negestionată se compune într-un mod cu
adevărat periculos și ușor de subestimat: fiecare scurtătură nouă face următoarea
schimbare puțin mai grea, ceea ce creează presiune pentru și mai multe scurtături,
care se compun și mai departe. Companiile mari și administrațiile publice care
întrețin sisteme ani la rând sunt deosebit de expuse acestui efect de compunere, iar
recomandarea centrală a acestui subiect, o restanță de datorii vizibilă,
cuantificată și prioritizată, este mecanismul care permite unei organizații să
gestioneze deliberat compromisul, în loc să alunece într-o criză.

## Principii-cheie

- **Datoria tehnică este o metaforă deliberată pentru un compromis gestionabil, nu
  un secret rușinos.** O parte din datorie, asumată cu bună știință, este o decizie
  de business rezonabilă.
- **Datoria nemăsurată pierde implicit competiția de prioritizare cu munca la
  funcționalități,** nu pentru că ar conta mai puțin, ci pentru că nu are niciun
  susținător vizibil.
- **Cuantifică datoria în termeni pe care factorii de decizie îi pot cântări: costul
  de remediere versus costul de a o purta.** O afirmație vagă de tipul „codul e o
  harababură” rareori concurează bine cu o cerere concretă de funcționalitate.
- **Datoria se compune.** Fiecare scurtătură nouă face schimbările viitoare puțin mai
  grele, iar efectul se accelerează dacă este lăsat negestionat.
- **Nu toată datoria trebuie plătită.** O parte merită purtată la nesfârșit dacă
  remedierea ei costă mai mult decât a trăi cu ea.

## Recomandări

### Construiește o restanță unică și vizibilă de datorie tehnică

Consolidează semnalele din subiectele anterioare ale acestei părți, valorile extreme
de complexitate, zonele cu rată mică de ucidere a mutanților, punctele fierbinți,
constatările nerezolvate ale analizei statice, alături de elementele de datorie pe
care le poate identifica doar un om (o scurtătură arhitecturală, o actualizare amânată
a unei dependențe, o soluție improvizată nedocumentată), într-o singură restanță
vizibilă, urmărită cu aceeași rigoare și vizibilitate ca restanța ta de
funcționalități. Datoria care trăiește doar în memoria inginerilor individuali sau în
comentarii de cod răzlețe nu există efectiv în scopuri de prioritizare.

### Cuantifică costul fiecărui element de datorie și costul de a-l purta

Pentru fiecare element, estimează două cifre: costul de remediere (timp de inginerie,
riscul remedierii însăși) și costul de a-l purta neremediat (cât de mult mai lent
merge munca asociată, cât risc suplimentar de defecte poartă, cât de mult blochează
alte lucruri). Această încadrare, împrumutată direct din logica metaforei datoriei
financiare, oferă factorilor de decizie o bază reală de comparare cu costul și
valoarea așteptată a muncii la funcționalități, în loc de o plângere abstractă și
necuantificată.

### Prioritizează după impact, nu după vechime sau cel mai zgomotos susținător

Clasifică elementele de datorie după combinația dintre costul de a le purta și cât
de des este atins codul afectat (datele de volatilitate din subiectul 4.3 sunt direct
utile aici): un element dintr-un colț rar modificat al bazei de cod, oricât de
neplăcut, contează mult mai puțin decât unul aflat direct în calea dezvoltării tale
celei mai active. Rezistă tentației de a prioritiza după elementul care stă cel mai
mult în restanță sau după inginerul care îl susține cel mai insistent, niciuna
dintre acestea nefiind corelată fiabil cu impactul real asupra business-ului.

### Alocă capacitate dedicată și protejată pentru remedierea datoriei

O restanță de datorie care trebuie să concureze element cu element cu fiecare cerere
de funcționalitate în fiecare ciclu de planificare tinde să piardă constant, pentru
că munca la funcționalități are de obicei un susținător de business mai clar și mai
imediat. Alocă un procent protejat din capacitatea de inginerie, un tipar comun fiind
undeva între 10% și 20%, special pentru remedierea datoriei, stabilit în avans, nu
negociat din nou la fiecare sprint, astfel încât plata datoriei să aibă loc de la
sine, nu doar în urma unei crize.

### Acceptă o parte din datorie ca permanentă și spune-o explicit

Nu fiecare element aparține unui plan activ de remediere. Acolo unde costul
remedierii depășește cu adevărat costul de a purta un element la nesfârșit, în
special pentru codul dintr-un sistem stabil, rar atins și curând retras, documentează
explicit acea decizie și mută elementul într-o categorie deliberat despriorizată, în
loc să-l lași să stea nedefinit într-o restanță activă, unde prezența lui continuă
implică în tăcere muncă ce nu se va întâmpla niciodată.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără urmărire formală a datoriei | Fără efort suplimentar | Datoria pierde implicit competiția de prioritizare; se compune invizibil |
| Conștientizare informală, ad hoc, a datoriei | Efort redus, o oarecare vizibilitate | Inconsecventă; se sprijină pe memoria și pe susținerea individuală |
| Restanță formală, cuantificată, de datorie | Concurează corect pentru investiții; permite compromisuri informate | Cere întreținere continuă și disciplină de cuantificare |
| Capacitate dedicată și protejată de remediere | Asigură că plata datoriei se face consecvent, nu doar reactiv | Reduce pe termen scurt capacitatea disponibilă pentru munca la funcționalități |

Tensiunea centrală este **presiunea livrării imediate versus mentenabilitatea pe
termen lung**. Munca la funcționalități are aproape întotdeauna un susținător de
business mai clar și mai imediat decât remedierea datoriei, ceea ce creează o
presiune structurală ca datoria să piardă fiecare decizie individuală de
prioritizare, chiar și când costul ei cumulat este mare. Rezolvă tensiunea scoțând
complet remedierea datoriei din competiția element cu element, prin capacitate
protejată și pre-alocată, astfel încât compromisul să fie decis deliberat și în
avans, în loc să fie rejudecat, și de obicei pierdut, la fiecare ciclu de
planificare.

## Întrebări de discutat cu echipa ta

1. **Avem o restanță unică și vizibilă de datorie tehnică sau conștientizarea
   datoriei trăiește mai ales în capetele inginerilor individuali?** Dacă răspunsul
   sincer este a doua variantă, acesta este cel mai mare decalaj pe care îl
   recomandă acest subiect să-l închizi primul.

2. **Pentru primul nostru element de datorie, am putea enunța costul de remediere
   și costul de a-l purta în termeni suficient de specifici ca să-i comparăm
   corect cu o cerere de funcționalitate?** Dacă nu, exersați împreună această
   cuantificare, ca exercițiu de grup, pe un element real și actual.

3. **Ce procent din capacitatea noastră de inginerie merge de fapt spre
   remedierea datoriei și a fost acel procent decis deliberat sau este doar ce
   supraviețuiește după alocarea muncii la funcționalități?** Privește sprinturile
   tale recente reale și calculează numărul real, în loc să te bazezi pe impresie.

4. **Este restanța noastră de datorie prioritizată după impactul real asupra
   business-ului sau după elementul ridicat cel mai insistent ori care stă acolo
   de cel mai mult timp?** Raportează prioritizarea actuală la datele de
   volatilitate (subiectul 4.3) și vezi dacă cele două se aliniază.

5. **Ce elemente de datorie ar trebui să acceptăm explicit ca permanente, în loc să
   le lăsăm nedefinit într-o restanță activă?** Identifică cel puțin un element
   real la care costul de remediere depășește cu adevărat costul de a-l purta și
   discută mutarea lui într-un statut explicit despriorizat.

6. **Cum s-a schimbat restanța noastră de datorie în ultimul an, crescând,
   scăzând sau rămânând constantă, și se potrivește tendința cu intuiția
   noastră?** Urmărește asta în timp, nu doar un singur instantaneu; tendința este
   adesea mai informativă decât mărimea absolută la un moment dat.

## Perspectiva sectorială

**Startup.** Datoria deliberată și informată este adesea o strategie rezonabilă în
această etapă: livrarea rapidă pentru validarea unei ipoteze, cu un plan clar de a
reveni asupra unor scurtături specifice dacă produsul se confirmă, este un compromis
legitim, nu un eșec. Riscul este să pierzi evidența care scurtături au fost
deliberate și reversibile și care au devenit pe tăcute pasive permanente și
neexaminate, pe măsură ce baza de cod crește.

**Afacere mică.** O listă simplă și comună, chiar și informală, care numește
scurtăturile cunoscute și costul lor aproximativ de remediere este de obicei
suficientă la această scară. Principala disciplină care merită adoptată este
revenirea periodică asupra listei, în loc s-o lași să se acumuleze pe tăcute și să
devină invizibilă prin familiaritate.

**Companie mare.** Capacitatea protejată și pre-alocată de remediere contează cel mai
mult aici, întrucât competiția individuală de prioritizare dintre datorie și munca
la funcționalități favorizează fiabil funcționalitățile în zeci de echipe simultan,
fără un contrabalans structural. Standardizează practica de cuantificare a datoriei
la nivelul organizației, astfel încât elementele de datorie să poată fi comparate
corect între echipe pentru deciziile de investiții la nivel de portofoliu.

**Administrație publică.** Sistemele de lungă durată acumulează datorie de-a lungul
anilor sau deceniilor de schimbări incrementale, rezonabile individual, ale
cerințelor, adesea fără nicio urmărire formală a datoriei până când o criză forțează
problema. O restanță de datorie cuantificată și vizibilă este o unealtă cu adevărat
convingătoare pentru a justifica bugetul de modernizare în fața organismelor de
control, deoarece transformă o afirmație vagă de tipul „sistemul e vechi” într-un
argument specific, cu costuri, pentru investiție.

## Exemple

**Companie mare.** Platforma de facturare a unei companii de telecomunicații
acumulase peste un deceniu de datorie tehnică recunoscută informal, dar niciodată
urmărită formal, inginerii invocând de rutină în retrospective că „motorul de
facturare e o harababură”, fără nicio urmare. Un nou director de inginerie a cerut
fiecărei echipe să construiască o restanță cuantificată de datorii, estimând costul
de remediere și costul de a le purta pentru fiecare element, și a alocat de acum
înainte un procent fix de 15% din capacitatea de inginerie remedierii datoriei. În
decurs de un an, primele cinci elemente cu cel mai mare cost de a fi purtate,
reprezentând o mică fracțiune din restanța totală ca număr, au fost rezolvate, iar
rata de eșec a modificărilor (subiectul 2.10) pentru implementările legate de
facturare s-a îmbunătățit măsurabil, demonstrând impactul disproporționat al vizării
mai întâi a elementelor cu cel mai mare cost de a fi purtate, în loc să parcurgi
restanța într-o ordine arbitrară.

**Administrație publică.** Sistemul de bază de procesare a datelor al unei agenții
naționale de statistică, construit inițial cu peste douăzeci de ani în urmă, nu avusese
niciodată o evaluare formală a datoriei, deși personalul recunoștea larg, informal,
că porțiuni semnificative erau fragile și prost înțelese. O evaluare structurată a
datoriei, care combina constatările analizei statice, datele despre puncte fierbinți
și interviuri cu puținii ingineri rămași care înțelegeau cele mai vechi componente, a
produs o restanță cuantificată și prioritizată care a sprijinit direct o cerere
bugetară multianuală de modernizare. În mod esențial, evaluarea a identificat explicit
și mai multe componente moștenite, stabile și rar atinse, ca fiind rezonabil de lăsat
nemodificate, evitând o rescriere completă a sistemului, inutil de largă și scumpă,
în favoarea unei investiții țintite în zonele specifice despre care datele arătau că
poartă cel mai mare cost continuu.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea gestionării deliberate a datoriei tehnice este costul de compunere
evitat: fiecare scurtătură neabordată face schimbările viitoare puțin mai grele, iar
efectul se accelerează fără intervenție, producând în cele din urmă o bază de cod
atât de fragilă încât până și schimbările simple devin lente și riscante. Exemplul
cu compania de telecomunicații arată concret rentabilitatea: vizarea unui număr mic
dintre elementele cu cel mai mare cost de a fi purtate a produs o îmbunătățire
măsurabilă a livrării și a calității, disproporționată față de modesta fracțiune din
restanța totală pe care o reprezentau acele elemente.

Costul total de proprietate este capacitatea protejată alocată remedierii, de obicei
10% până la 20% din timpul de inginerie, un cost real și vizibil, care concurează
pe termen scurt cu viteza de lucru la funcționalități. Merită să plătești acest cost
pentru că alternativa, datoria negestionată și compusă, costă în cele din urmă mult
mai mult în livrare încetinită și rate crescute de defecte în toată baza de cod, nu
doar în elementele specifice lăsate neabordate.

## Anti-modele și capcane

- **Nicio restanță vizibilă și urmărită de datorii:** datoria pierde implicit
  competiția de prioritizare și se compune invizibil.
- **Afirmații vagi, necuantificate, despre datorie:** rareori concurează bine în
  planificare cu cereri concrete, cuantificate, de funcționalități.
- **Prioritizarea datoriei după vechime sau volumul susținerii, nu după impact:**
  direcționează greșit capacitatea limitată de remediere.
- **Nicio capacitate protejată pentru remediere:** plata datoriei are loc doar
  reactiv, după o criză, nu ca practică de rutină, deliberată.
- **Tratarea oricărei datorii ca la fel de meritorie de reparat:** irosește efort pe
  elemente cu impact mic, în timp ce elementele cu cost mare de a fi purtate rămân
  neabordate.
- **Lăsarea datoriei să stea nedefinit într-o restanță activă fără a decide
  vreodată că este permanentă:** implică muncă viitoare care nu se va întâmpla
  niciodată și încarcă prioritizarea reală.

## Model de maturitate

- **Nivelul 1, Inițiere:** Datoria tehnică este discutată informal, fără restanță
  urmărită și fără cuantificare; pierde constant în fața muncii la funcționalități.
- **Nivelul 2, Dezvoltare:** Unele echipe urmăresc informal datoria, dar nu există
  cuantificare consecventă, vizibilitate între echipe sau capacitate protejată de
  remediere.
- **Nivelul 3, Standardizare:** O restanță vizibilă și cuantificată de datorii
  există la nivelul organizației, cu capacitate protejată de remediere alocată
  consecvent.
- **Nivelul 4, Gestionare:** Elementele de datorie sunt prioritizate după impactul
  măsurat (costul de a fi purtate combinat cu volatilitatea), iar datoria acceptată
  permanent este documentată explicit, nu lăsată ambiguă.
- **Nivelul 5, Orchestrare:** Organizația poate indica îmbunătățiri concrete și
  măsurabile ale livrării sau calității, atribuite remedierii țintite a datoriei, iar
  gestionarea datoriei este o intrare de rutină și de încredere în deciziile de
  investiții în inginerie, alături de munca la funcționalități.

## Idei de discuție

1. Care este acum cel mai costisitor de purtat element de datorie al nostru și l-am putea cuantifica?
2. Ce procent din capacitatea noastră merge de fapt astăzi spre remedierea datoriei?
3. Ce element de datorie ar trebui să acceptăm explicit ca permanent, în loc să-l lăsăm ambiguu în restanță?
4. A crescut, a scăzut sau a rămas constantă restanța noastră de datorii în ultimul an?
5. Ce ar dezvălui o evaluare cuantificată a datoriei și lipsește din conștientizarea noastră informală actuală?

## Concluzii principale

- Datoria tehnică este un **compromis gestionabil, nu un secret rușinos**;
  cuantifică-o, în loc s-o lași o grijă vagă, mereu despriorizată.
- **Cuantifică costul de remediere versus costul de a o purta** pentru fiecare
  element, astfel încât să concureze corect cu munca la funcționalități.
- **Prioritizează după impact** (costul de a o purta combinat cu volatilitatea), nu
  după vechime sau volumul susținerii.
- Alocă **capacitate dedicată și protejată de remediere**, decisă în avans, pentru
  că altfel datoria pierde fiabil competiția element cu element cu munca la
  funcționalități.
- **Acceptă explicit o parte din datorie ca permanentă** acolo unde costul de
  remediere depășește costul de a o purta, în loc s-o lași ambiguu într-o restanță
  activă.

## Referințe și lecturi suplimentare

- Cunningham, Ward, „The WyCash Portfolio Management System” (raport de experiență
  OOPSLA, 1992): originea metaforei datoriei tehnice.
- *Managing Technical Debt: Reducing Friction in Software Development*, de Philippe
  Kruchten, Robert Nord și Ipek Ozkaya (o tratare cuprinzătoare a măsurării și
  gestionării datoriei tehnice).
- *Refactoring: Improving the Design of Existing Code*, de Martin Fowler
  (tehnicile de remediere pe care se sprijină în cele din urmă o restanță de
  datorii).
- *Your Code as a Crime Scene*, de Adam Tornhill (analiza punctelor fierbinți ca
  intrare în prioritizarea datoriei, subiectul 4.3).
