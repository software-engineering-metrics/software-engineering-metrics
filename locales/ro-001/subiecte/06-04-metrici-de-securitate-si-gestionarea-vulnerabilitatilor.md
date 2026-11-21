# 6.4 Metrici de securitate și gestionare a vulnerabilităților

## Prezentare generală și motivație

Acest subiect încheie Partea 6 extinzând aceeași disciplină de fiabilitate pe
care a construit-o această parte, fixarea țintelor, asocierea cu gărzi de
protecție, raportarea onestă a incidentelor, la un risc distinct, dar strâns
legat: nu dacă un sistem cedează singur, ci dacă cineva îl face să cedeze sau îl
exploatează, deliberat. Metricile de **gestionare a vulnerabilităților**
măsoară cât de bine găsește și repară o organizație slăbiciunile de securitate
înainte să fie exploatate: câte vulnerabilități există, cât de grave sunt și,
esențial, cât de repede sunt remediate odată descoperite, pentru că o
vulnerabilitate cunoscută, dar nepetecită, este un risc permanent și
cuantificabil pe care organizația a ales să îl poarte, deliberat sau prin
neglijență.

Preocuparea centrală a acestui subiect este paralelă cu tratarea constatărilor
analizei statice din subiectul 4.4: un număr brut de vulnerabilități este o
metrică slabă, care amestecă problemele banale cu cele critice și este expusă
exact acelorași riscuri de manipulare, îngustarea definiției, suprimarea și
manipularea pragurilor, pe care subiectul 1.2 le descrie în general. Adaosul
specific de care au nevoie metricile de securitate este timpul de remediere
urmărit față de severitate, pentru că o vulnerabilitate critică rămasă luni în
șir nepetecită reprezintă un risc fundamental diferit de aceeași vulnerabilitate
prinsă și reparată într-o zi, informație pe care un simplu număr nu o poate
transmite.

Pentru echipele mari, metricile de securitate poartă consecințe dincolo de
riscul tehnic imediat: companiile mari se confruntă cu expunere contractuală și
reputațională în urma unei breșe, iar organizațiile guvernamentale se confruntă
cu consecințe de securitate națională, juridice și de încredere publică, care
fac din metricile de securitate o chestiune de interes public real, nu doar o
preocupare internă de inginerie. Acest subiect tratează gestionarea
vulnerabilităților cu aceeași rigoare și aceeași disciplină de asociere cu
gărzi de protecție pe care cartea o aplică de la un capăt la altul, pentru că
metricile de securitate sunt expuse tuturor riscurilor de manipulare pe care le
descrie cartea, cu miză proporțional mai mare atunci când manipularea reușește.

## Principii-cheie

- **Timpul de remediere după severitate contează mai mult decât un număr brut
  de vulnerabilități.** O problemă critică nepetecită luni în șir este un risc
  fundamental diferit de aceeași problemă prinsă și reparată repede.
- **Metricile de securitate sunt expuse acelorași riscuri de manipulare ca
  și constatările analizei statice** (subiectul 4.4), cu miză mai mare când
  manipularea reușește.
- **Clasificarea severității cere criterii externe, standardizate**, oricând e
  posibil, nu doar o apreciere internă care poate aluneca spre indulgență.
- **O vulnerabilitate dezvăluită și reparată repede este semnul unui proces
  sănătos, nu un eșec de ascuns.** Pedepsirea dezvăluirii descurajează exact
  raportarea de care depinde întregul sistem.
- **Datoria de securitate este o categorie de datorie tehnică** (subiectul 4.5)
  și trebuie să concureze pentru capacitatea de remediere prioritizată pe
  aceeași bază explicită și cuantificată.

## Recomandări

### Urmărește timpul de remediere după severitate ca metrică principală

Pentru fiecare vulnerabilitate descoperită, notează severitatea ei (folosind o
scară standardizată precum [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS, acolo unde se aplică) și urmărește timpul de la descoperire până la
remedierea reală, nu până la închiderea unui tichet sau până la integrarea unei
reparații care încă nu a fost implementată. Fixează ținte explicite de timp de
remediere după severitate, măsurate de obicei în zile pentru problemele critice
și în săptămâni pentru cele de severitate mai mică, și urmărește respectarea
acestor ținte ca metrică principală de sănătate a securității, în locul unui
număr brut, neponderat, de vulnerabilități.

### Folosește o scorare standardizată a severității, nu doar aprecierea internă

Acolo unde există un sistem extern standardizat de scorare precum CVSS,
folosește-l ca bază principală pentru clasificarea severității, în loc să te
bazezi în întregime pe o apreciere internă, potențial inconsecventă. Aceasta
oglindește disciplina de clasificare a defectelor scăpate din subiectul 5.1 și
disciplina de clasificare a incidentelor din subiectul 6.2, aplicată aici în
special securității, și rezistă aceluiași risc de alunecare spre indulgență
despre care avertizează acele subiecte, pentru că un scor ancorat extern este
mai greu de redefinit pe tăcute în jos decât unul pur intern.

### Construiește o cultură cu adevărat non-punitivă a dezvăluirii vulnerabilităților și a raportării interne

Aplică direct securității principiul analizei post-incident fără vinovați din
subiectul 6.2: un inginer care descoperă și raportează o vulnerabilitate pe care
a introdus-o el însuși, sau un cercetător care dezvăluie responsabil una găsită
extern, trebuie tratat ca cineva care oferă un serviciu valoros, nu ca unul care
mărturisește un eșec. Pedepsirea dezvăluirii, intern sau față de cercetători
externi, descurajează în mod sigur exact raportarea de care depinde întregul
sistem de gestionare a vulnerabilităților, împingând riscul real în
clandestinitate, în loc să îl aducă într-un proces gestionat de remediere.

### Tratează datoria de securitate ca pe o categorie în restanța ta de datorie tehnică

Include vulnerabilitățile cunoscute, cu risc acceptat, cele neremediate
deliberat încă din cauza unor priorități concurente, în aceeași restanță vizibilă
și cuantificată de datorie tehnică descrisă în subiectul 4.5, cu aceeași
încadrare cost-de-reparare față de cost-de-purtare. Astfel riscul de securitate
nu dispare într-un statut invizibil și nedocumentat de „știm de el” și nici nu
concurează incorect cu munca la funcționalități fără un argument explicit și
cuantificat pentru prioritatea lui.

### Combină metricile de vulnerabilități cu contextul de expunere și de exploatabilitate

Nu orice vulnerabilitate cu același scor nominal de severitate poartă același
risc real: o vulnerabilitate critică într-o unealtă internă, fără expunere la
rețeaua externă, este un risc diferit față de aceeași severitate nominală într-un
serviciu expus pe internet, care gestionează date ale clienților. Acolo unde e
fezabil, ponderează prioritizarea după contextul real de expunere și de
exploatabilitate, nu doar după scorul de severitate, ca să concentrezi
capacitatea de remediere mai întâi pe elementele cu adevărat cele mai riscante.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Număr brut de vulnerabilități | Simplu de raportat | Amestecă problemele banale cu cele critice; ușor de manipulat prin suprimare |
| Urmărire ponderată după severitate, cu timp de remediere | Reflectă expunerea reală la risc în timp | Cere clasificare și urmărire disciplinate și consecvente |
| Apreciere internă pură a severității | Flexibilă, adaptată contextului | Predispusă la alunecare spre indulgență și la inconsecvență între echipe |
| Scorare externă standardizată (de exemplu CVSS) plus ponderare după context | Consecventă, ancorată extern, rezistă manipulării | Cere analiză suplimentară de context pentru o prioritizare cu adevărat exactă |

Tensiunea centrală este **consecvența față de context**. O abordare pur
standardizată de scorare este consecventă și rezistentă la manipulare, dar poate
rata contextul real, expunerea și exploatabilitatea, care determină riscul
efectiv; o abordare pur contextuală, apreciată intern, surprinde nuanța, dar este
predispusă la același risc de alunecare spre indulgență despre care avertizează
cartea pentru orice altă metrică dependentă de clasificare. Rezolvă tensiunea
ancorându-te în scorarea standardizată ca bază consecventă, apoi aplicând peste
ea o ponderare documentată și auditabilă după context, nu unul dintre extreme
singur.

## Întrebări de discutat cu echipa ta

1. **Urmărim timpul de remediere după severitate sau doar un număr brut de
   vulnerabilități?** Scoate metrica ta reală actuală și verifică dacă
   deosebește o problemă critică nepetecită luni în șir de una reparată într-o
   zi, pentru că un număr brut tratează identic aceste situații atât de diferit
   de riscante.

2. **Folosim un sistem extern standardizat de scorare a severității sau
   clasificarea se bazează pe o apreciere pur internă, potențial
   inconsecventă?** Dacă este pur internă, discută ce ar schimba adoptarea unui
   standard precum CVSS în practica voastră actuală de clasificare.

3. **S-ar simți în siguranță un inginer care a introdus și apoi a raportat o
   vulnerabilitate sau s-ar teme de pedeapsă?** Aceasta este versiunea directă,
   specifică securității, a întrebării despre cultura fără vinovați din
   subiectul 6.2, iar un răspuns onest aici contează enorm pentru dacă datele
   voastre despre vulnerabilități pot fi de încredere.

4. **Avem o restanță vizibilă și cuantificată de vulnerabilități cunoscute, cu
   risc acceptat, sau statutul „știm de ea” devine pe tăcute invizibil și
   neabordat în timp?** Verifică dacă datoria voastră de securitate este urmărită
   cu aceeași rigoare ca restanța generală de datorie tehnică (subiectul 4.5).

5. **Prioritizarea remedierilor noastre ia în calcul expunerea și
   exploatabilitatea reale sau se bazează exclusiv pe un scor nominal de
   severitate, indiferent de context?** Alege un exemplu real în care două
   vulnerabilități cu severitate nominală similară au purtat riscuri reale
   foarte diferite și discută dacă procesul vostru actual le-ar fi prioritizat
   corect.

6. **A alunecat vreodată în jos, în timp, clasificarea severității unei
   vulnerabilități, fără o justificare clară?** Aceasta oglindește tiparul de
   manipulare a definiției despre care avertizează atât subiectul 1.2, cât și
   subiectul 6.2; auditează un eșantion din clasificările tale recente pentru
   acest risc specific.

## Perspectiva sectorială

**Startup.** Procesele formale de gestionare a vulnerabilităților sunt adesea
inutile foarte devreme, dar adoptarea încă de la început a scanării automate de
bază a dependențelor și a unei norme simple și oneste de raportare internă costă
puțin și previne acumularea invizibilă a datoriei de securitate înainte ca
echipa să aibă capacitatea de a o aborda sistematic.

**Afacere mică.** Majoritatea platformelor moderne de dezvoltare includ scanare
automată gratuită sau ieftină a vulnerabilităților pentru dependențe; activează-o
devreme și urmărește timpul de remediere pentru tot ce este semnalat ca
fiind critic, chiar și fără o funcție dedicată de securitate sau unelte
sofisticate.

**Companie mare.** O scorare consecventă și standardizată a severității și o
cultură a dezvăluirii cu adevărat non-punitivă sunt amândouă esențiale și
amândouă mai greu de menținut la scară mare, unde inconsecvența între zeci de
echipe și alunecarea culturală spre căutarea vinovaților după un incident grav
sunt riscuri constante. Investește într-o funcție dedicată de guvernanță a
securității care să mențină consecvența clasificării și să protejeze activ
cultura dezvăluirii.

**Administrație publică.** Metricile de securitate de aici se intersectează
adesea direct cu securitatea națională, cu conformitatea cu reglementările și cu
încrederea publică, iar o vulnerabilitate serioasă, gestionată prost, poate
avea consecințe mult dincolo de o breșă tipică din sectorul privat. Menține o
clasificare riguroasă a severității, ancorată extern, protejează activ cultura
dezvăluirii internă și externă și tratează datoria de securitate cu
transparența și rigoarea de prioritizare pe care le recomandă acest subiect,
pentru că o vulnerabilitate critică nedocumentată și acceptată pe tăcute, în
infrastructura publică, este un risc cu adevărat serios și auditabil.

## Exemple

**Companie mare.** Echipa de securitate a unei companii software raportase ani la
rând conducerii doar un număr brut de vulnerabilități, un număr care ținea un
trend plat și dădea o falsă senzație de stabilitate. O analiză revizuită,
ponderată după severitate și pe timpul de remediere, a arătat că, deși totalul
era plat, vulnerabilitățile critice durau în medie peste nouăzeci de zile până
să fie remediate, mult peste orice țintă rezonabilă, pentru că pierdeau fără
șanse în fața muncii la funcționalități la fiecare ciclu de planificare, fără
capacitate dedicată și protejată. Stabilirea unei ținte ferme de remediere de 7
zile pentru vulnerabilitățile critice, susținută de capacitate protejată pentru
remedierea datoriei de securitate, oglindind modelul de alocare a datoriei
tehnice din subiectul 4.5, a adus timpul mediu de remediere a celor critice sub
cinci zile în două trimestre.

**Administrație publică.** O agenție națională de infrastructură a descoperit,
în urma unui audit extern de securitate, că inginerii interni evitaseră informal
să raporteze vulnerabilitățile pe care le descopereau în propriul cod, de teamă
că asta ar arăta rău la evaluările lor de performanță, un paralelism clar cu
tiparul raportării insuficiente a incidentelor generat de vină, din subiectul
6.2. Agenția a instituit o politică explicită, comunicată public, care îi
proteja pe raportorii interni de vulnerabilități de orice consecință asupra
performanței, modelată direct pe practica de răspuns la incidente fără vinovați,
iar rapoartele interne de vulnerabilități au crescut substanțial în anul
următor, rezultat pe care conducerea agenției l-a interpretat corect ca dovadă a
unei detectări îmbunătățite și a unei raportări oneste, nu a unei calități în
scădere a codului, evitând concluzia firească, dar greșită, că un număr în
creștere trebuie să însemne că lucrurile s-au înrăutățit.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea unei gestionări riguroase, bine clasificate și onest raportate a
vulnerabilităților este costul evitat al unei breșe, care pentru un incident de
securitate serios depășește frecvent de multe ori costul remedierii proactive,
alături de prejudiciile evitate de reglementare, contractuale și reputaționale.
Exemplul companiei software de mai sus arată mecanismul concret: datoria de
securitate pierdea în tăcere ani la rând competiția de prioritizare cu munca la
funcționalități, exact tiparul despre care avertizează subiectul 4.5 pentru
datoria tehnică în general, până când capacitatea protejată de remediere a
rezolvat problema direct.

Costul total de proprietate include uneltele de scanare automată, capacitatea
protejată de remediere pe care o recomandă acest subiect să fie alocată și
investiția culturală susținută într-o practică non-punitivă de dezvăluire.
Costul este modest în comparație cu cel al unei vulnerabilități serioase,
exploatate cu succes, pe care o remediere proactivă și bine prioritizată ar fi
prins-o și reparat-o cu mult înainte să poată fi exploatată.

## Anti-modele și capcane

- **Urmărirea doar a unui număr brut de vulnerabilități:** amestecă problemele
  banale cu cele critice și dă o falsă senzație de stabilitate sau de criză,
  indiferent de riscul real.
- **Clasificare a severității pur internă și nestandardizată:** predispusă la
  alunecare spre indulgență și la inconsecvență între echipe.
- **Pedepsirea dezvăluirii vulnerabilităților, internă sau externă:** împinge
  riscul real în clandestinitate, în loc să îl aducă într-un proces gestionat de
  remediere.
- **Datorie de securitate fără o restanță vizibilă și cuantificată:** pierde
  implicit competiția de prioritizare cu munca la funcționalități.
- **Prioritizarea doar după scorul nominal de severitate, ignorând contextul de
  expunere și de exploatabilitate:** direcționează greșit capacitatea limitată de
  remediere.
- **Interpretarea unui număr crescând de rapoarte de vulnerabilități ca dovadă a
  unei calități în scădere, fără a verifica dacă raportarea însăși s-a
  îmbunătățit:** o instanță specifică a capcanei variabilei de confuzie din
  subiectul 1.6.

## Model de maturitate

- **Nivelul 1, Inițiere:** Vulnerabilitățile sunt urmărite, dacă sunt, ca un
  număr brut, fără ponderare după severitate, fără urmărirea timpului de
  remediere și cu o cultură punitivă a dezvăluirii.
- **Nivelul 2, Dezvoltare:** Există o oarecare clasificare a severității, dar
  standardele sunt inconsecvente, iar timpul de remediere nu este urmărit față de
  ținte explicite.
- **Nivelul 3, Standardizare:** Scorarea standardizată a severității, ancorată
  extern, și țintele explicite de timp de remediere după severitate sunt
  aplicate consecvent, cu o cultură a dezvăluirii cu adevărat non-punitivă.
- **Nivelul 4, Gestionare:** Datoria de securitate este urmărită într-o restanță
  vizibilă și cuantificată, cu capacitate protejată de remediere; prioritizarea
  ia în calcul contextul de expunere și de exploatabilitate, nu doar severitatea.
- **Nivelul 5, Orchestrare:** Organizația poate indica reduceri concrete și
  măsurabile ale timpului de remediere a celor critice și poate demonstra o
  cultură susținută și de încredere a dezvăluirii, care produce date oneste și
  cuprinzătoare despre vulnerabilități.

## Idei de discuție

1. Care este timpul nostru mediu actual de remediere a vulnerabilităților critice și respectă o țintă explicită?
2. Ar fi un inginer care a introdus o vulnerabilitate în siguranță să o raporteze singur?
3. Avem o restanță vizibilă și cuantificată de datorie de securitate cu risc acceptat?
4. Ia în calcul prioritizarea remedierilor noastre expunerea reală sau doar severitatea nominală?
5. A alunecat vreodată în jos, în timp, o clasificare de severitate, fără o justificare clară?

## Concluzii principale

- Urmărește **timpul de remediere după severitate**, nu un număr brut de
  vulnerabilități, ca metrică principală de sănătate a securității.
- Folosește **scorarea externă standardizată a severității** (precum CVSS) ca
  bază consecventă, rezistentă la riscul de alunecare spre indulgență pe care îl
  invită aprecierea pur internă.
- Construiește o **cultură a dezvăluirii cu adevărat non-punitivă**; pedepsirea
  raportării împinge riscul real în clandestinitate.
- Tratează **datoria de securitate ca pe o categorie de datorie tehnică**
  (subiectul 4.5), concurând corect pentru capacitate protejată de remediere.
- Ponderează prioritizarea după **expunerea și exploatabilitatea reale**, nu
  doar după scorul de severitate.

## Referințe și lecturi suplimentare

- Specificația Common Vulnerability Scoring System (CVSS) a FIRST.org: cadrul
  standardizat de scorare a severității la care se face referire în tot acest
  subiect.
- Resursele OWASP Foundation despre gestionarea vulnerabilităților și practica
  ciclului de viață securizat al dezvoltării software.
- *Site Reliability Engineering: How Google Runs Production Systems*, de Betsy
  Beyer, Chris Jones, Jennifer Petoff și Niall Richard Murphy, eds. (principiile
  culturii fără vinovați pe care acest subiect le aplică dezvăluirii în
  securitate).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management
  Planning*: îndrumări autorizate privind practica de remediere a
  vulnerabilităților.
