# 5.1 Rata defectelor scăpate și scăpările de calitate

## Prezentare generală și motivație

**Rata defectelor scăpate** măsoară defectele care ajung în producție și
afectează utilizatori reali, spre deosebire de defectele prinse mai devreme
prin testare, revizuirea codului sau analiză statică, toate tratate în Partea
4 a cărții. Distincția contează enorm: un defect prins la revizuirea codului
costă minute de reparat și niciun utilizator nu îl vede; același defect, dacă
scapă în producție, poate costa ore de răspuns la incident, un prejudiciu real
pentru clienți și o zgârietură măsurabilă a încrederii. Această metrică este,
într-un sens real, fișa de scor finală pentru tot ce acoperă Partea 4, pentru
că o rată crescândă a defectelor scăpate, în ciuda unor metrici interne de
calitate solide (complexitate, acoperire, analiză statică), înseamnă de obicei
că acele semnale interne nu prind modurile de eșec care contează pentru
utilizatorii reali.

Acest subiect tratează defectele scăpate cu seriozitatea pe care o merită
costul lor, dar rezistă tentației de a trata numărul brut drept simplu
tablou de scor. Nu toate defectele sunt egale: o greșeală de tipar într-un
text de ajutor rar vizitat și un defect de coruperea datelor într-un sistem de
tranzacții financiare sunt amândouă, tehnic, defecte scăpate, iar tratarea lor
identică produce o metrică ori prea zgomotoasă ca să se poată acționa pe baza
ei, ori, mai rău, înșelătoare în mod activ despre locul unde se află riscul
real. Recomandarea centrală a acestui subiect, urmărirea ponderată după
severitate, cu atenție la felul în care sunt clasificate defectele, vizează
direct această problemă.

Pentru echipele mari, rata defectelor scăpate este una dintre cele mai clare
punți între metricile interne de inginerie ale acestei cărți și lumea orientată
spre clienți de care se ocupă Partea 5 în ansamblu. Companiile mari o folosesc
pentru a justifica investițiile în practicile de testare și de revizuire din
Partea 4; organizațiile guvernamentale, unde un defect scăpat poate însemna un
calcul greșit al unui beneficiu sau o interacțiune eșuată cu un serviciu
public, o tratează ca pe o măsură directă a încrederii publice și a expunerii
juridice, nu doar ca pe o statistică internă de inginerie.

## Principii-cheie

- **Rata defectelor scăpate este fișa de scor finală a practicii interne de
  calitate.** O rată crescândă, în ciuda unor metrici solide din Partea 4,
  înseamnă că acele metrici nu prind ce contează.
- **Severitatea contează mai mult decât numărul brut.** Ponderează defectele
  după impactul real asupra clientului sau asupra afacerii, nu tratând fiecare
  scăpare identic.
- **Consecvența clasificării este esențială.** Două echipe care clasifică
  severitatea diferit produc numere care nu pot fi comparate corect.
- **Această metrică este expusă manipulării definiției**, exact ca rata de
  eșec a modificărilor (subiectul 2.10): îngustarea a ceea ce se numără ca
  „defect” înfrumusețează numărul fără să reducă prejudiciul real adus
  clienților.
- **Categorisirea cauzei rădăcină transformă un număr într-un instrument de
  diagnostic.** Să știi *de ce* scapă defectele este mai ușor de pus în
  practică decât să știi doar câte au scăpat.

## Recomandări

### Ponderează defectele scăpate după severitate, cu o scară consecventă și documentată

Clasifică fiecare defect scăpat cu o scară fixă de severitate (de obicei
critic, major, minor, sau un echivalent numerotat), pe baza impactului real
asupra clientului sau asupra afacerii: pierderea sau coruperea datelor,
expunerea de securitate și indisponibilitatea completă a unei funcționalități
stau în vârf; o problemă cosmetică fără impact funcțional stă la bază. Urmărește
o tendință ponderată după severitate, nu doar un număr brut, ca un val de
probleme minore să nu acopere vizual o creștere mai mică, dar mult mai
importantă, a celor critice.

### Standardizează criteriile de clasificare între echipe

Echipele lăsate să clasifice severitatea independent vor aluneca spre standarde
diferite, unele conservatoare, altele îngăduitoare, ceea ce face comparația
între echipe fără sens și, mai rău, creează un stimulent de a clasifica
generos în jos ca să arate mai bine numerele propriei echipe (o variantă a
manipulării definiției din subiectul 1.2). Publică criterii clare de
clasificare, bazate pe exemple, și auditează periodic un eșantion de clasificări
din mai multe echipe pentru a verifica consecvența.

### Urmărește [cauza rădăcină](https://en.wikipedia.org/wiki/Root_cause_analysis), nu doar numărul și severitatea

Pentru fiecare defect scăpat, notează de ce a scăpat: o lacună de testare, un
caz limită ratat în cerințe, o diferență de mediu între staging și producție,
o revizuire care a ratat problema. Agregă în timp aceste date despre cauzele
rădăcină ca să găsești tipare sistemice; dacă o categorie anume (de exemplu
defectele din diferențe de mediu) domină scăpările tale, asta arată direct spre
o lacună de proces concretă și reparabilă, nu spre un îndemn vag și general de
a „testa mai mult”.

### Leagă defectele scăpate de semnalele interne de calitate din care provin

Acolo unde se poate, urmărește un defect scăpat înapoi până la zona de cod din
care provine și verifică dacă acea zonă arăta semne de avertizare în metricile
din Partea 4: era un punct fierbinte de complexitate (subiectul 4.1,
subiectul 4.3), avea o rată scăzută de omorâre a mutanților (subiectul 4.2), a
semnalat analiza statică ceva în apropiere (subiectul 4.4). Această legătură
validează dacă metricile tale interne de calitate sunt cu adevărat predictive
pentru defectele reale resimțite de clienți sau dacă măsoară ceva care, în
contextul tău specific, nu se corelează cu ce experimentează clienții.

### Ferește clasificarea defectelor să devină un exercițiu de învinovățire

Încadrează explicit analiza cauzei rădăcină a defectelor ca o întrebare despre
sisteme, conform încadrării diagnostice din subiectul 1.1, nu ca un exercițiu
de a da vina pe indivizi. O echipă care se teme de vină pentru un defect
scăpat are un stimulent puternic să raporteze mai puțin, să clasifice în jos
sau să reziste unei analize riguroase a cauzei rădăcină, toate stricând
exact datele de care depinde acest subiect. Practica analizei post-incident
fără vinovați (postmortem), tratată mai în profunzime în subiectul 6.2, se
aplică direct aici.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Număr brut de defecte scăpate | Simplu de raportat | Tratează identic o greșeală de tipar și un defect de corupere a datelor; zgomotos și înșelător |
| Urmărire ponderată după severitate | Reflectă mai exact impactul real asupra clientului | Cere o clasificare consecventă și disciplinată |
| Standarde de clasificare independente pe echipă | Flexibil, cu coordonare redusă | Produce numere incomparabile între echipe; invită alunecarea spre indulgență |
| Clasificare standardizată și auditată | Corectă, comparabilă, rezistă manipulării | Cere guvernanță continuă și efort periodic de audit |

Tensiunea centrală este **flexibilitatea locală față de comparabilitatea între
echipe**. Dacă lași fiecare echipă să clasifice severitatea defectelor în
felul care se potrivește contextului ei, implementarea e mai simplă, dar
numerele nu mai pot fi comparate sau agregate corect la nivel de organizație,
și apare un stimulent discret ca echipa să clasifice generos pentru a-și
proteja metricile. Rezolvă tensiunea investind în criterii de clasificare
standardizate și documentate și în audituri periodice între echipe, tratând
asta ca pe o muncă de guvernanță (subiectul 1.4) care merită investiția, având
în vedere cât de direct se leagă această metrică de impactul real asupra
clienților.

## Întrebări de discutat cu echipa ta

1. **Urmărim defectele scăpate după severitate sau un număr brut tratează o
   problemă cosmetică minoră la fel ca o problemă critică de date?** Deschide
   tabloul tău de bord real și verifică; dacă ponderarea după severitate nu
   există deja, aceasta este singura schimbare cu cea mai mare valoare pe care
   o recomandă acest subiect.

2. **Ar clasifica două echipe diferite severitatea aceluiași defect în același
   fel sau clasificarea s-a îndepărtat între părți ale organizației?** Alege
   un defect real din trecut, ambiguu, și cere reprezentanților a două echipe
   diferite să îl clasifice independent; compară rezultatele cu sinceritate.

3. **Care este cea mai frecventă cauză rădăcină a defectelor noastre scăpate
   și o abordează procesul nostru actual sau doar răspundem în continuare
   fiecărui incident pe măsură ce apare?** Agregă datele despre cauzele
   rădăcină din ultimele luni și caută tiparul dominant.

4. **Defectele noastre scăpate au fost urmărite până la zone pe care
   metricile noastre interne de calitate (complexitate, acoperire, analiză
   statică) le semnalaseră deja ca riscante?** Această legătură validează dacă
   metricile din Partea 4 sunt cu adevărat predictive în contextul tău sau
   ratează modurile de eșec care contează efectiv.

5. **Procesul nostru de clasificare a defectelor pare sigur sau inginerilor
   le este frică de vină când raportează ori clasifică un defect cu care sunt
   asociați?** O cultură înclinată spre vină strică sistematic aceste date prin
   raportare insuficientă și clasificare îngăduitoare; fii sincer cu privire
   la cultura ta actuală.

6. **S-a îmbunătățit vreodată rata defectelor scăpate suspect de repede,
   fără nicio schimbare corespunzătoare în practicile de testare sau de
   revizuire?** Ca la rata de eșec a modificărilor (subiectul 2.10), este cel
   mai clar semn că s-au mișcat criteriile de clasificare, nu riscul real.

## Perspectiva sectorială

**Startup.** Clasificarea formală a severității este adesea inutilă când
volumul de defecte e mic și echipa mică poate discuta fiecare defect direct.
Obiceiul de adoptat devreme este pur și simplu să urmărești defectele consecvent
de la început, chiar informal, ca datele istorice să existe atunci când echipa
crește destul cât să aibă nevoie de analiză mai formală.

**Afacere mică.** O scară simplă și comună de severitate, chiar și cu trei
niveluri (critic, major, minor), aplicată consecvent de cine se ocupă de
suport și de triajul defectelor, surprinde cea mai mare parte din valoarea
acestui subiect fără unelte sofisticate sau o funcție dedicată de calitate.

**Companie mare.** Consecvența clasificării între echipe este investiția cu cel
mai mare efect de pârghie aici, pentru că standardele inconsecvente între zeci
de echipe fac fără sens comparația calității la nivelul întregii organizații.
Investește în criterii de clasificare documentate, bazate pe exemple, și în
audit periodic, și leagă sistematic defectele scăpate de semnalele interne de
calitate din Partea 4, ca să validezi care dintre ele sunt cu adevărat
predictive pentru organizația ta.

**Administrație publică.** Un defect scăpat într-un sistem public sau de
calcul al beneficiilor are o greutate juridică și de încredere publică peste
costul său de inginerie. Tratează clasificarea severității cu rigoare deosebită
pentru defectele care afectează serviciile pentru cetățeni și fii pregătit ca
deciziile de clasificare să fie supuse unei examinări externe, ceea ce este un
argument puternic pentru criterii documentate, auditate și consecvente, nu
pentru decizii ad hoc.

## Exemple

**Companie mare.** La o companie de software cu abonamente, numărul defectelor
scăpate crescuse două trimestre la rând, iar îngrijorarea inițială s-a oprit
asupra numărului brut. Analiza ponderată după severitate a arătat că
majorarea se datora aproape în întregime unor probleme minore, cosmetice,
coincizând cu o recentă reproiectare a interfeței, în timp ce defectele
critice și majore scăzuseră ușor în aceeași perioadă. Analiza cauzei rădăcină
a valului de probleme minore a indicat o lacună în testarea de regresie
vizuală, anume pentru noile componente ale interfeței, o reparație țintită și
ieftină care ar fi fost ratată complet dacă echipa ar fi reacționat la
numărul brut, neponderat, ca la o criză nediferențiată de calitate.

**Administrație publică.** Sistemul de calcul al beneficiilor al unei agenții
de stat pentru șomaj a avut un defect scăpat care a respins incorect un mic
procent de cereri altfel eligibile timp de câteva luni, până să fie detectat.
O investigație a cauzei rădăcină a găsit că defectul provenea dintr-o zonă de
cod semnalată mai înainte drept punct fierbinte de complexitate (subiectul
4.1, subiectul 4.3) într-o revizuire internă de calitate cu optsprezece luni
înainte, dar punctul fierbinte nu fusese niciodată prioritizat pentru
remediere, pentru că nu apăruse încă niciun defect care să facă riscul
concret. Procesul revizuit al agenției ponderează acum explicit mai sus, în
prioritatea de testare și de revizuire, zonele semnalate ca puncte fierbinți,
tocmai din cauza acestei legături demonstrate și validate între semnalele
interne de complexitate și riscul real de defecte scăpate.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea urmăririi riguroase a ratei defectelor scăpate, cu ponderare
după severitate și analiza cauzei rădăcină, este capacitatea de a direcționa
investiția în calitate acolo unde va reduce efectiv prejudiciul resimțit de
clienți, în loc să reacționezi la un număr nediferențiat care amestecă fără
discernământ probleme banale și grave. Exemplul companiei de software cu
abonamente de mai sus arată clar asta: o reacție la numărul brut ar fi declanșat
o inițiativă largă și nefocalizată de calitate, în timp ce răspunsul ponderat
după severitate și informat de cauza rădăcină a identificat o reparație
concretă, ieftină și țintită.

Costul total de proprietate include disciplina clasificării (criterii
consecvente, audituri periodice) și efortul de urmărire a cauzelor rădăcină,
ambele fiind în primul rând investiții de proces, nu costuri de unelte.
Investiția se plătește direct prin costul prejudiciului adus clienților și al
răspunsului la incidente evitat, prin îndreptarea efortului de calitate spre
sursele reale și validate ale riscului de defecte scăpate.

## Anti-modele și capcane

- **Tratarea numărului brut de defecte drept metrică:** amestecă problemele
  banale cu cele grave și ascunde semnalul real.
- **Clasificare inconsecventă a severității între echipe:** face comparația
  între echipe fără sens și invită alunecarea spre clasificare îngăduitoare.
- **Fără urmărirea cauzei rădăcină:** transformă un număr într-o cifră fără
  valoare de diagnostic, lăsând tiparele sistemice invizibile.
- **O cultură de raportare înclinată spre vină:** strică datele prin
  raportare insuficientă și clasificare îngăduitoare, exact riscul de expunere
  la stimulente despre care avertizează subiectul 1.2.
- **Nelegarea defectelor scăpate de semnalele interne de calitate:** ratează
  șansa de a valida sau a invalida metricile predictive din Partea 4 față de
  rezultate reale.
- **O îmbunătățire suspect de rapidă, fără o schimbare de proces în spate:**
  cel mai clar semn că s-au mutat criteriile de clasificare, nu riscul real.

## Model de maturitate

- **Nivelul 1, Inițiere:** Defectele scăpate sunt urmărite, dacă sunt, ca un
  număr brut, fără ponderare după severitate sau analiză a cauzei rădăcină.
- **Nivelul 2, Dezvoltare:** Există o oarecare clasificare a severității, dar
  standardele variază între echipe, iar urmărirea cauzelor rădăcină este
  inconsecventă.
- **Nivelul 3, Standardizare:** Clasificarea severității este standardizată și
  documentată la nivelul întregii organizații, cu categorisirea cauzelor
  rădăcină aplicată consecvent.
- **Nivelul 4, Gestionare:** Defectele scăpate sunt urmărite sistematic până la
  semnalele interne de calitate pentru a le valida valoarea predictivă, iar
  clasificarea este auditată periodic pentru consecvență.
- **Nivelul 5, Orchestrare:** Organizația poate indica reduceri concrete și
  măsurabile ale ratei defectelor scăpate, atribuite unei investiții țintite
  în calitate, informate de cauza rădăcină și validate față de semnalele
  interne de calitate.

## Idei de discuție

1. Ar fi clasificat o altă echipă în același fel cel mai important defect scăpat al nostru din trimestrul trecut?
2. Care este cea mai frecventă cauză rădăcină a defectelor noastre scăpate și o abordăm efectiv?
3. A fost vreodată un defect scăpat urmărit până la o zonă pe care metricile noastre interne o semnalaseră deja?
4. Se simte echipa noastră în siguranță să raporteze și să clasifice cinstit un defect pe care l-a cauzat?
5. Ce ar dezvălui o vedere ponderată după severitate a numărului nostru actual de defecte, ce ascunde numărul brut?

## Concluzii principale

- Rata defectelor scăpate este **fișa de scor finală** a practicii interne de
  calitate; o rată crescândă, în ciuda unor metrici solide din Partea 4,
  înseamnă că acele metrici nu prind ce contează.
- **Ponderează după severitate**, cu o scară de clasificare consecventă,
  documentată și auditată, niciodată doar cu un număr brut.
- Urmărește **cauza rădăcină**, nu doar numărul și severitatea, ca să
  transformi metrica într-un adevărat instrument de diagnostic.
- **Leagă defectele scăpate de semnalele interne de calitate** (complexitate,
  acoperire, analiză statică) ca să validezi dacă acele semnale sunt cu
  adevărat predictive.
- Ferește-te de o **cultură înclinată spre vină**, care strică raportarea și
  clasificarea prin raportare insuficientă și alunecare spre indulgență.

## Referințe și lecturi suplimentare

- *Site Reliability Engineering*, de Betsy Beyer, Chris Jones, Jennifer
  Petoff și Niall Richard Murphy, eds. (practica analizei post-incident fără
  vinovați, aplicabilă analizei cauzei rădăcină a defectelor).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren,
  Jez Humble și Gene Kim (relația dintre practicile de livrare și rezultatele
  de calitate).
- *Code Complete*, de Steve McConnell (practici de clasificare a defectelor și
  de analiză a cauzei rădăcină).
- *The Field Guide to Understanding Human Error*, de Sidney Dekker (încadrarea
  sistemică, fără vinovați, a investigării eșecurilor).
