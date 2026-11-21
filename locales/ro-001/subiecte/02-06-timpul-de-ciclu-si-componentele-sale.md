# 2.6 Timpul de ciclu și componentele sale

## Prezentare generală și motivație

**Timpul de ciclu** este descompunerea internă a timpului fluxului (subiectul 2.4)
unei modificări în etapele ei constitutive de inginerie: timpul de codare, timpul de
revizuire, timpul de testare și timpul de implementare, uneori împărțit mai departe
în timp de preluare (cât așteaptă o modificare până începe cineva să lucreze la ea) și
timp activ (cât durează după ce cineva începe). Acolo unde timpul fluxului îți dă un
singur număr pentru cât durează o modificare de la un capăt la altul prin întregul
flux de valoare, [timpul de ciclu](https://en.wikipedia.org/wiki/Cycle_time) îți
spune unde se duce de fapt acel timp odată ce ajunge la inginerie, stratul de
diagnostic despre care subiectul 2.4 a promis că se află sub propriul său număr de
sinteză.

Această distincție contează pentru că „timpul de livrare este prea lung” nu este
acționabil în sine. O echipă al cărei timp de livrare este dominat de timpul de
codare are nevoie de o intervenție diferită de o echipă al cărei timp de livrare este
dominat de o coadă de revizuire de trei zile, care are nevoie, la rândul ei, de o
intervenție diferită de o echipă care pierde cea mai mare parte a timpului într-un set
de teste instabil și lent. Fără descompunerea timpului de ciclu, echipele tind să
ghicească blocajul, iar ghicitul este greșit destul de des încât remedierea etapei
greșite irosește efort real în timp ce constrângerea reală rămâne neatinsă.

Pentru echipele mari, descompunerea timpului de ciclu este ceea ce transformă o
regresie a timpului de livrare la nivelul întregii organizații dintr-un mister într-o
problemă specifică, care poate fi abordată. Când zeci de echipe împart o
infrastructură comună, un blocaj comun de revizuire sau un flux CI lent comun poate
trage în jos identic timpul de livrare al fiecărei echipe, iar doar o comparație a
timpului de ciclu între echipe dezvăluie acea cauză comună, în loc ca fiecare echipă să
ghicească independent o explicație locală.

## Principii-cheie

- **Timpul de ciclu explică timpul de livrare; nu îl înlocuiește.** Raportează-le pe
  amândouă împreună, cu timpul de ciclu ca diagnostic și timpul de livrare ca
  sinteză.
- **Timpul de așteptare domină de obicei timpul activ.** Cea mai mare parte a
  întârzierii în livrarea de software vine din munca ce stă inactivă într-o coadă, nu
  din efortul activ (subiectul 2.5 tratează asta direct prin eficiența fluxului).
- **Descompune pe etape înainte de a propune un remediu.** Un remediu țintit spre
  etapa greșită irosește efort și poate demoraliza o echipă căreia i se cere să
  „lucreze mai repede” când blocajul real era în altă parte.
- **Un blocaj comun peste multe echipe este o oportunitate de investiție în
  platformă,** nu doar o serie de probleme individuale ale echipelor.
- **Datele de timp de ciclu sunt expuse acelorași riscuri de manipulare ca timpul
  fluxului** (subiectul 2.4): urmărește granițele de etapă care se mută discret ca să
  flateze un număr.

## Recomandări

### Instrumentează explicit fiecare graniță de etapă

Împarte călătoria unei modificări în etape numite, cu granițe clare și
instrumentabile: codare (de la primul commit până la deschiderea pull requestului),
preluare (de la deschiderea pull requestului până la prima revizuire), revizuire (de
la prima revizuire până la aprobare) și implementare (de la aprobare până în
producție). Captează marcajele de timp pentru fiecare tranziție automat din
evenimentele controlului versiunilor și ale CI/CD, nu din urmărirea autoraportată a
etapelor, aplicând același principiu al instrumentării în loc de autoraportare din
subiectul 1.5.

### Separă timpul de așteptare de timpul activ în fiecare etapă

În cadrul revizuirii, de exemplu, deosebește timpul în care un pull request stă
neatins așteptând ca un revizor să înceapă (timp de așteptare) de timpul pe care îl
ia o conversație activă de revizuire odată începută (timp activ). Această distincție
dezvăluie de obicei că costul dominant este așteptarea în coadă, nu efortul, ceea ce
indică un remediu foarte diferit (mai multă capacitate de revizori, notificări mai
bune, pull requesturi mai mici de revizuit) de unul țintit spre a face mai rapide
conversațiile de revizuire în sine.

### Caută un blocaj comun înainte de a diagnostica echipă cu echipă

Când mai multe echipe arată aceeași etapă drept întârzierea lor dominantă, un flux CI
comun lent, un grup comun de revizori supraîncărcat, un tren de lansare comun
infrecvent, acea cauză comună este o oportunitate de investiție la nivel de
platformă, nu o serie de probleme locale fără legătură. Agregă datele de timp de
ciclu peste echipe special ca să cauți acest tipar înainte de a presupune că blocajul
fiecărei echipe este unic pentru ea.

### Folosește timpul de ciclu ca să stabilești ținte de îmbunătățire realiste, specifice etapelor

În loc de o singură țintă „reduce timpul de livrare cu 20%”, care nu dă echipei nicio
îndrumare asupra unde să se concentreze, folosește descompunerea timpului de ciclu ca
să stabilești o țintă specifică etapei: „reduce timpul median de așteptare la
revizuire de la două zile la patru ore”. Un obiectiv specific, țintit pe etapă, este
atât mai ușor de abordat de o echipă, cât și mai ușor de verificat că a fost atins
printr-o schimbare reală de proces, nu printr-o schimbare fără legătură în altă parte.

### Urmărește manipularea granițelor de etapă

Așa cum punctele de început și de sfârșit ale timpului fluxului pot deriva (subiectul
2.4), granițele individuale ale etapelor timpului de ciclu se pot muta în moduri ce
flatează numărul unei etape specifice fără nicio îmbunătățire reală, de exemplu,
marcarea unei revizuiri ca „începută” în clipa în care este atribuit un revizor, nu
când acesta începe de fapt să citească modificarea. Auditează periodic instrumentarea
granițelor de etapă față de definiția ei documentată.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Timp de ciclu cu granularitate grosieră (două sau trei etape) | Simplu de instrumentat și de explicat | Poate să nu localizeze blocajul real destul de precis ca să acționezi |
| Timp de ciclu cu granularitate fină (multe etape, împărțire așteptare vs. activ) | Diagnostic precis, ținte acționabile specifice etapelor | Mai mult efort de instrumentare; mai multe numere de întreținut și de explicat |
| Revizuirea timpului de ciclu echipă cu echipă | Adaptată fluxului real de lucru al fiecărei echipe | Poate rata un blocaj comun, între echipe, ascuns în spatele unor numere locale asemănătoare |
| Revizuirea agregată a timpului de ciclu între echipe | Dezvăluie blocaje comune la nivel de platformă | Cere definiții standardizate ale etapelor între echipe ca să fie semnificativă |

Tensiunea centrală este **precizia diagnosticului versus costul instrumentării**.
Urmărirea mai fină a timpului de ciclu dă un diagnostic mai acționabil, dar costă mai
mult de construit și de întreținut și adaugă mai multe numere pe care o echipă trebuie
să le înțeleagă și să aibă încredere în ele. Rezolvă tensiunea pornind grosier
(codare, revizuire, implementare) și adăugând împărțiri mai fine, așteptare versus
timp activ în cadrul unei etape specifice, doar după ce acea etapă este confirmată ca
blocaj real și recurent care merită investiția suplimentară în instrumentare.

## Întrebări de discutat cu echipa ta

1. **Dacă timpul de livrare ar regresa azi, am putea spune într-o oră ce etapă
   specifică a fost responsabilă, folosind date, nu ghicit?** Acesta este testul de
   bază dacă instrumentarea ta a timpului de ciclu își servește de fapt scopul de
   diagnostic. Dacă răspunsul onest este nu, merită să închizi acea lacună înainte să
   se producă următoarea regresie.

2. **În etapa noastră cu blocajul dominant, cât din întârziere este timp de așteptare
   față de timp activ?** Cele mai multe echipe presupun că efortul activ este
   constrângerea înainte de a verifica, când așteptarea în coadă este de obicei
   costul mai mare. Extrage împărțirea reală pentru cea mai lentă etapă a ta și
   vezi dacă presupunerea ține.

3. **Împart mai multe echipe aceeași etapă de blocaj dominant, sugerând un remediu la
   nivel de platformă, nu la nivel de echipă?** Agregă datele de timp de ciclu peste
   echipe și caută explicit acest tipar înainte de a presupune că lentoarea fiecărei
   echipe are cauze locale.

4. **Am stabilit ținte de îmbunătățire specifice etapelor sau doar o singură țintă
   generală de timp de livrare, fără îndrumare asupra unde să ne concentrăm?** O țintă
   vagă lasă o echipă să ghicească unde să investească efort; una specifică etapei
   nu. Verifică obiectivele tale actuale față de această distincție.

5. **A derivat vreo graniță de etapă a timpului de ciclu din instrumentarea noastră
   de la definiția ei documentată în timp?** Granițele etapelor sunt expuse aceleiași
   derive de definiție ca timpul fluxului însuși (subiectul 2.4). Auditează un
   eșantion de evenimente recente de tranziție între etape față de definiția scrisă.

6. **Cum apar diferit în datele noastre de timp de ciclu o cultură bazată pe
   revizuiri intense față de una bazată pe încredere?** O echipă cu revizuire foarte
   amănunțită, în mai multe runde, va arăta un timp mai lung în etapa de revizuire
   decât una care are încredere în integrările cu o singură aprobare; discută dacă
   echilibrul vostru actual reflectă o alegere deliberată sau o valoare implicită
   neexaminată.

## Perspectiva sectorială

**Startup.** Timpul de ciclu este de obicei dominat de timpul de codare, nu de etapele
de revizuire sau de implementare, pur și simplu pentru că procesul este minimal. Pe
măsură ce echipa crește peste o mână de ingineri, începe să urmărești special timpul
de așteptare la revizuire, pentru că aceasta este de obicei prima etapă care încetinește
când munca mai multor oameni trebuie să treacă prin mai puțini revizori disponibili.

**Afacere mică.** Analiza de bază a platformei de control al versiunilor expune de
obicei suficient de multe temporizări la nivel de etapă (timp până la prima revizuire,
timp până la integrare) fără instrumentare proprie. Concentrează-te mai întâi pe etapa
de revizuire, pentru că este cel mai frecvent blocaj timpuriu și cel mai ușor de
reparat cu o mică schimbare de proces, precum o rotație de revizori.

**Companie mare.** Blocajele comune peste zeci de echipe sunt frecvente și cu efect de
pârghie mare de găsit: o singură coadă CI comună supraîncărcată sau un pas central
obligatoriu de revizuire poate taxa discret timpul de livrare în toată organizația.
Investește special în agregarea timpului de ciclu între echipe ca să scoți la iveală
aceste constrângeri comune, în loc să lași fiecare echipă să diagnosticheze independent.

**Administrație publică.** Datele de timp de ciclu sunt o unealtă concretă și puternică
pentru justificarea modernizării proceselor în fața părților interesate sceptice,
pentru că „timpul de așteptare la revizuire are în medie patru zile din cauza unui
singur rol de aprobare blocat” este un caz mult mai convingător și mai specific
pentru investiții decât o afirmație abstractă de tipul „procesul nostru este lent”.

## Exemple

**Companie mare.** Conducerea de inginerie a unei companii de infrastructură cloud a
observat că timpul de livrare crește aproape simultan la toate echipele. Agregarea
timpului de ciclu între echipe a arătat că timpul de așteptare la revizuire, nu timpul
activ de revizuire, era cauza dominantă și comună: o mică echipă centralizată de
revizuire a securității devenise blocaj pe măsură ce numărul echipelor care cereau
aprobarea ei creștea mai repede decât echipa însăși. Extinderea și instruirea unui
grup mai larg de revizori certificați în securitate, în loc să li se ceară echipelor
individuale să codeze sau să testeze cumva mai repede, a rezolvat blocajul comun și a
adus timpul de livrare înapoi în jos la toate echipele într-un singur trimestru.

**Administrație publică.** Echipa de servicii digitale a unui guvern de stat era sub
presiunea de a reduce timpul de livrare și a răspuns inițial cerând inginerilor să
lucreze mai repede, un instinct natural, dar în cele din urmă inutil. Descompunerea
timpului de ciclu a arătat că timpul activ de codare abia se schimbase de la un an la
altul; aproape toată regresia venea dintr-o coadă în creștere într-o etapă obligatorie
de revizuire a arhitecturii, introdusă cu optsprezece luni înainte ca măsură de
conformitate. Echipa a reproiectat acea revizuire într-un proces mai ușor, pe niveluri
de risc, pentru modificările cu risc mic, reducând substanțial timpul de așteptare la
revizuire și păstrând rigoarea completă a revizuirii pentru modificările cu adevărat
cu risc mare.

## Argumentul de business: motivații, ROI și TCO

Randamentul descompunerii timpului de ciclu este o investiție țintită și eficientă: o
organizație care știe exact ce etapă este blocajul poate repara acea etapă specifică,
în loc să împrăștie efortul subțire peste un proces întreg în speranța că ceva va
ajuta. Exemplul revizuirii de securitate de mai sus este tipic: un remediu precis
țintit, extinderea unei singure resurse blocate, a rezolvat o problemă la nivelul
întregii organizații mult mai ieftin decât ar fi făcut-o o inițiativă largă și
nefocalizată de tipul „accelerați livrarea”.

Costul total de proprietate este efortul de instrumentare pentru a capta fiabil
marcajele de timp la nivel de etapă și disciplina continuă de auditare periodică a
granițelor etapelor pentru derivă. Acest cost merită, pentru că alternativa, ghicitul
blocajelor și remedierea etapei greșite, irosește mult mai mult efort de inginerie în
timp decât costă instrumentarea însăși.

## Anti-modele și capcane

- **Reacția la o regresie a timpului de livrare fără diagnostic prin timpul de
  ciclu:** duce frecvent la remedierea etapei greșite.
- **A presupune că efortul activ, nu timpul de așteptare, este costul dominant:**
  de obicei greșit; așteptarea în coadă domină în cele mai multe fluxuri reale de
  livrare (subiectul 2.5).
- **Ratarea unui blocaj comun între echipe prin revizuirea timpului de ciclu doar
  echipă cu echipă:** lasă nedescoperit un remediu de platformă cu efect de pârghie
  mare.
- **Stabilirea unei ținte vagi generale de timp de livrare fără îndrumare specifică
  pe etape:** lasă echipele să ghicească unde să concentreze efortul.
- **Deriva definițională a granițelor de etapă:** flatează numărul unei etape
  specifice fără îmbunătățire reală.
- **Instrumentarea fiecărei etape posibile, cu granularitate fină, înainte de a
  confirma că vreuna este un blocaj real:** irosește efort de instrumentare pe detalii
  care încă nu informează nicio decizie.

## Model de maturitate

- **Nivelul 1, Inițiere:** Timpul de ciclu nu este deloc descompus; echipele ghicesc
  blocajele când timpul de livrare regresează.
- **Nivelul 2, Dezvoltare:** Unele echipe urmăresc informal temporizarea etapelor cu
  granularitate grosieră, dar nu există instrumentare consecventă sau comparație între
  echipe.
- **Nivelul 3, Standardizare:** Granițele etapelor sunt instrumentate consecvent în
  întreaga organizație, cu timpul de așteptare separat de timpul activ în etapele cu
  blocaj dominant.
- **Nivelul 4, Gestionare:** Agregarea timpului de ciclu între echipe scoate activ la
  iveală blocajele comune; țintele de îmbunătățire specifice etapelor înlocuiesc
  obiectivele vagi generale de timp de livrare.
- **Nivelul 5, Orchestrare:** Datele de timp de ciclu determină direct prioritizarea
  investițiilor în platformă, iar organizația poate indica remedii concrete și
  țintite, un grup extins de revizori, un flux comun mai rapid, care au îmbunătățit
  măsurabil timpul de livrare la multe echipe deodată.

## Idei de discuție

1. Care este etapa noastră de blocaj dominant în prezent și cât de siguri suntem pe acest răspuns?
2. Cât din timpul acelei etape de blocaj este timp de așteptare față de timp activ?
3. Împart vreuna dintre echipele noastre același blocaj, sugerând un remediu la nivel de platformă?
4. Când am stabilit ultima oară o țintă de îmbunătățire a livrării specifică unei etape, nu generală?
5. S-a schimbat vreodată fără documentare o definiție a unei granițe de etapă în uneltele noastre?

## Concluzii principale

- Timpul de ciclu **descompune timpul fluxului** în etape de inginerie, codare,
  revizuire, testare, implementare, și este stratul de diagnostic de sub acel număr
  de sinteză.
- Separă **timpul de așteptare de timpul activ** în fiecare etapă; așteptarea în
  coadă domină de obicei efortul activ (subiectul 2.5).
- Caută **blocaje comune între echipe** înainte de a presupune că o încetinire este
  specifică unei echipe; o cauză comună este adesea o oportunitate de investiție în
  platformă.
- Stabilește **ținte de îmbunătățire specifice etapelor**, nu obiective generale
  vagi, astfel încât echipele să știe exact unde să se concentreze.
- Granițele etapelor sunt expuse aceluiași risc de **derivă definițională** ca timpul
  fluxului însuși; auditează-le periodic.
- Subiectul 2.7 oferă matematica de fond, legea lui Little, a motivului pentru care
  munca în curs și timpul de ciclu se mișcă împreună.

## Referințe și lecturi suplimentare

- *The Principles of Product Development Flow*, de Donald G. Reinertsen (teoria
  cozilor și raționamentul despre dimensiunea loturilor care stau la baza analizei
  timpului de ciclu).
- *Actionable Agile Metrics for Predictability*, de Daniel S. Vacanti (măsurarea
  timpului de ciclu și a fluxului pentru livrarea de software).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez
  Humble și Gene Kim (timpul de livrare și relația lui cu performanța livrării).
- *The Goal*, de Eliyahu M. Goldratt (teoria constrângerilor și principiul găsirii și
  reparării blocajului real, în loc de a optimiza peste tot).
