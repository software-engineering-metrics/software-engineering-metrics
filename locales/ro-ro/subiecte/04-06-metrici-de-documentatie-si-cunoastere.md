# 4.6 Metrici de documentație și cunoaștere

## Prezentare generală și motivație

Acest subiect încheie Partea 4 măsurând dacă cunoștințele necesare pentru a
întreține în siguranță o bază de cod sunt de fapt documentate și ușor de găsit, nu
doar dacă documentația există tehnic undeva. Subiectul 3.5 a tratat comunicarea și
colaborarea ca preocupare de experiență a dezvoltatorilor; acest subiect tratează
aceeași problemă de fond, disponibilitatea cunoștințelor, dinspre partea de cod:
are un inginer nou, sau unul existent care lucrează pe cod necunoscut, ce îi trebuie
ca să facă o schimbare sigură, sau acele cunoștințe trăiesc doar în capetele unui
număr tot mai mic de oameni cu vechime?

Provocarea măsurării este aici cu adevărat grea, mai grea decât la majoritatea
celorlalte metrici din această carte, pentru că calitatea și utilitatea
documentației sunt intrinsec mai subiective decât un procent de acoperire sau un
scor de complexitate. Abordarea acestui subiect este să măsoare indicatori indirecți
ai utilității, nu ai existenței: cât de des este accesată documentația, cât de des
se pune aceeași întrebare în mod repetat deși există un răspuns documentat și cât
durează până când cineva nefamiliarizat cu un sistem devine productiv în el.
Niciunul dintre acești indicatori indirecți nu este perfect singur, dar împreună
oferă o imagine mult mai onestă decât numărarea paginilor de wiki sau a fișierelor
README pe care le conține o bază de cod.

Pentru echipele mari, preocupările acestui subiect se compun cu vechimea și
fluctuația de personal din organizație în moduri ușor de subestimat până când o
criză forțează problema: un sistem întreținut ani la rând de aceiași doi ingineri
poate funcționa perfect cu aproape nicio documentație scrisă, exact până când
amândoi pleacă în același an, moment în care organizația descoperă că
cunoștințele nu fuseseră niciodată captate undeva de durată. Companiile mari și
administrațiile publice, cu durate de viață ale sistemelor de obicei mai lungi și o
continuitate a personalului mai puțin sigură decât a unui startup, poartă acest risc
mai acut decât majoritatea.

## Principii-cheie

- **Existența documentației nu este același lucru cu utilitatea ei.** Măsoară dacă
  ajută cu adevărat, nu doar dacă este prezentă.
- **Întrebările repetate în ciuda răspunsurilor documentate dezvăluie o problemă de
  găsire a informației, nu una de efort de documentare.** Mai mult conținut nu este
  mereu remediul.
- **Timpul de integrare până la contribuție productivă este un indicator indirect
  puternic și practic** al sănătății generale a cunoștințelor, legat direct de
  metricile de colaborare din subiectul 3.5.
- **Cunoștințele care trăiesc doar în capetele oamenilor sunt un risc de
  durabilitate,** nu o stare stabilă și sustenabilă, oricât de bine funcționează
  acum.
- **Documentația se degradează.** O pagină care era exactă acum un an poate fi acum
  activ înșelătoare, iar caracterul învechit în sine trebuie urmărit.

## Recomandări

### Urmărește accesarea și caracterul învechit al documentației, nu doar existența ei

Acolo unde platforma ta de documentație o permite, urmărește cât de des sunt
vizualizate paginile și, separat, cât timp a trecut de la ultima actualizare a unei
pagini raportat la cât de des s-a schimbat sistemul pe care îl descrie (raportarea la
datele de volatilitate din subiectul 4.3 este direct utilă aici). O pagină care
descrie un sistem schimbat substanțial de la ultima ei editare este un candidat
puternic pentru a fi activ înșelătoare, nu doar inutilă, iar acest semnal de
învechire merită cel puțin la fel de multă atenție ca urmărirea faptului dacă
documentația există deloc.

### Urmărește întrebările repetate ca semnal de găsire a informației

Dacă aceeași întrebare este pusă în mod repetat pe un canal de chat al echipei sau în
timpul integrării, deși un răspuns documentat există tehnic undeva, acel tipar
dezvăluie o problemă de găsire a informației, răspunsul nu este acolo unde se uită
oamenii în mod firesc, nu o problemă de efort de documentare pe care ar rezolva-o mai
multă scriere. Urmărește explicit întrebările recurente și folosește-le pentru a
prioritiza reorganizarea sau scoaterea mai bine în evidență a conținutului existent,
în loc să scrii mai mult.

### Măsoară timpul de integrare până la prima contribuție semnificativă și independentă

Această metrică, introdusă în subiectul 3.5 ca semnal de colaborare, este la fel de
bine un semnal de sănătate a documentației și a cunoștințelor dinspre partea de cod.
Un timp de integrare constant scurt și previzibil sugerează cunoștințe cu adevărat
accesibile și exacte; un timp lung și foarte variabil, mai ales unul care depinde
puternic de persoana anume care integrează un nou membru al echipei, sugerează
cunoștințe concentrate periculos în memoria individuală, nu într-o formă scrisă și
durabilă.

### Identifică și prioritizează explicit zonele de cunoștințe critice nedocumentate

Raportează datele tale despre concentrarea cunoștințelor (analiza [bus
factor](https://en.wikipedia.org/wiki/Bus_factor) din subiectul 3.5) la acoperirea
cu documentație: un sistem cu un bus factor de unu și fără documentație
semnificativă este un risc sever și în compunere, care merită atenție prioritară
față de un sistem bine documentat cu același bus factor scăzut, întrucât
documentația oferă măcar o atenuare parțială cât timp este format un succesor
dedicat.

### Tratează datoria de documentație ca pe o categorie în restanța ta de datorie tehnică

În loc să urmărești separat și informal golurile de documentație, încorporează
golurile semnificative de documentație în aceeași restanță vizibilă și cuantificată
descrisă în subiectul 4.5, în special pentru sistemele critice cu bus factor scăzut,
astfel încât munca de documentare să concureze corect pentru capacitatea prioritizată,
în loc să fie amânată la nesfârșit ca o sarcină cu statut mai scăzut față de
remedierea datoriei centrate pe cod.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Nicio măsurare a documentației | Efort redus | Riscul legat de cunoștințe rămâne invizibil până când o criză forțează descoperirea |
| Numărarea existenței documentației (numărul de pagini, prezența README) | Simplu, ușor de raportat | Nu spune nimic despre utilitate, exactitate sau posibilitatea de a o găsi |
| Urmărirea accesării și a caracterului învechit | Dezvăluie utilitatea reală și degradarea | Cere analitice ale platformei de documentație și disciplină continuă de revizuire |
| Timpul de integrare ca indicator indirect | Practic, concret, legat direct de impactul real asupra business-ului | Indirect; și alți factori în afară de documentație afectează viteza de integrare |

Tensiunea centrală este **măsurabilitate versus sens**. Existența documentației este
trivial de ușor de numărat și nu îți spune aproape nimic util; utilitatea reală, dacă
cineva poate găsi și se poate baza efectiv pe cunoștințele documentate când are
nevoie de ele, este ceea ce contează de fapt, dar este mai greu de măsurat direct.
Rezolvă tensiunea folosind împreună indicatorii indirecți pe care îi recomandă acest
subiect, tiparele de accesare, caracterul învechit raportat la volatilitate,
întrebările repetate și timpul de integrare, acceptând că niciunul nu este perfect
singur, dar că convergența lor este mult mai semnificativă decât o simplă numărătoare
a existenței.

## Întrebări de discutat cu echipa ta

1. **Pentru sistemul nostru cel mai critic și cu cel mai mic bus factor, există de
   fapt documentație semnificativă și exactă sau un expert care pleacă ar lua cu el
   cea mai mare parte din cunoștințele reale?** Aceasta este cea mai tăioasă și mai
   concretă versiune a preocupării centrale a acestui subiect; răspunde sincer mai
   întâi pentru sistemul tău cel mai riscant.

2. **Ce întrebare se pune în mod repetat în chatul echipei noastre deși un răspuns
   documentat există undeva?** Dacă poți numi una pe loc, aceea este o problemă de
   găsire a informației care merită reparată direct, probabil prin reorganizarea sau
   scoaterea mai bine în evidență a conținutului existent, nu prin scrierea de mai
   mult.

3. **Cât a durat noului nostru membru recent al echipei să facă prima lui
   contribuție semnificativă și independentă și cum se compară asta cu membrul de
   dinaintea lui?** O varianță mare și neexplicată între indivizi indică adesea
   cunoștințe care depind puternic de cine integrează pe cineva, nu de o documentație
   durabilă și accesibilă.

4. **Când am verificat ultima oară dacă o bucată de documentație mai era exactă,
   raportat la cât s-a schimbat sistemul de la scrierea ei?** Dacă răspunsul sincer
   este „nu verificăm sistematic asta”, riscul de învechire este probabil mai mare
   decât presupune acum oricine.

5. **Include restanța noastră de datorie tehnică (subiectul 4.5) goluri de
   documentație sau munca de documentare este amânată perpetuu ca o sarcină cu statut
   mai scăzut față de remedierile de cod?** Verifică restanța ta reală și vezi dacă
   datoria de documentație este vizibilă și concurează pentru capacitate prioritizată
   sau este practic invizibilă.

6. **Ce ne-ar costa dacă cele una sau două persoane care înțeleg sistemul nostru cel
   mai critic și cel mai puțin documentat ar pleca în același an?** Această întrebare
   concretă și incomodă merită un răspuns sincer, în loc să tratezi riscul ca pe ceva
   abstract sau improbabil.

## Perspectiva sectorială

**Startup.** Metricile formale de documentație sunt de obicei inutile într-o echipă
mică în care cunoștințele se răspândesc prin conversație directă și constantă.
Riscul de urmărit este aceeași concentrare a bus factorului împotriva căreia
avertizează subiectul 3.5, aplicată acum în mod specific documentației: pe măsură ce
echipa crește peste dimensiunea la care toată lumea vorbește zilnic, cunoștințele
nedocumentate, care funcționau bine informal, devin o răspundere reală.

**Afacere mică.** Prioritizează mai întâi documentarea sistemului tău cel mai critic
și cu cea mai mică redundanță, chiar și informal, în loc să încerci o documentare
cuprinzătoare a tuturor lucrurilor. Un document scurt și exact care acoperă singurul
tău punct de eșec cel mai riscant aduce mai multă valoare reală decât o acoperire
largă, dar superficială, peste tot.

**Companie mare.** Caracterul învechit și posibilitatea de a găsi documentația se
scalează amândouă prost aici, deoarece o organizație mare acumulează documentație în
multe echipe și platforme mai repede decât poate cineva s-o țină la zi sau organizată
consecvent. Investește în analitice ale platformei de documentație pentru a urmări
accesarea și caracterul învechit la scară și tratează datoria de documentație ca
pe o categorie de prim rang în restanța ta de datorii la nivelul organizației.

**Administrație publică.** Vechimea mare a angajaților, frecventă în organizațiile
din sectorul public, poate masca un risc sever de cunoștințe nedocumentate în spatele
unei stabilități aparente, deoarece un sistem întreținut de aceeași persoană timp de
cincisprezece ani poate funcționa perfect exact până când acea persoană se pensionează.
Tratează explicit sănătatea documentației ca pe o preocupare de continuitate a
operațiunilor, legată direct de planificarea forței de muncă și a succesiunii, nu
doar ca pe un moft de inginerie.

## Exemple

**Companie mare.** O companie de servicii financiare a descoperit, în timpul unei
reorganizări fără legătură, că motorul ei central de calcul al riscurilor nu avea nicio
documentație semnificativă în afară de câteva comentarii de cod depășite, iar cei doi
ingineri care îl înțelegeau cel mai bine erau mutați simultan la o nouă inițiativă. Un
efort de documentare de urgență, desfășurat sub o presiune semnificativă de timp, a
extras și a înregistrat cunoștințele critice înainte ca realocarea să intre în vigoare,
dar procesul a luat câteva săptămâni de timp dedicat al unor ingineri seniori, care ar
fi putut fi răspândit mai treptat și mai ieftin dacă sănătatea documentației ar fi fost
urmărită și prioritizată proactiv, nu descoperită ca urgență.

**Administrație publică.** Sistemul de gestionare a dosarelor, vechi de decenii, al unui
guvern de stat acumulase documentație substanțială de-a lungul anilor, dar un audit al
posibilității de a găsi informația a constatat că noii membri ai echipei nu reușeau
constant să găsească documentația existentă relevantă și puneau în mod repetat aceeași
mână de întrebări pe canalele echipei, întrebări care aveau de fapt deja răspuns undeva
în platforma extinsă și prost organizată de documentație a agenției. În loc să scrie mai
mult conținut, agenția a investit în reorganizarea și îmbunătățirea structurii de
căutare și de navigare a documentației existente, iar un sondaj ulterior a arătat o
reducere măsurabilă a întrebărilor repetate și o experiență de integrare raportată ca
semnificativ mai rapidă pentru personalul nou, fără a adăuga nicio pagină nouă de
conținut.

## Argumentul de business: motivații, ROI și TCO

Rentabilitatea măsurării și gestionării deliberate a sănătății documentației este
costul de criză evitat: exemplul cu compania de servicii financiare arată diferența
dintre captarea proactivă și treptată a cunoștințelor și un efort de urgență costisitor
și comprimat, forțat de mișcări neplanificate de personal. Cunoștințele critice
nedocumentate sunt o răspundere permanentă care nu costă nimic vizibil până în clipa în
care devine foarte scumpă dintr-o dată.

Costul total de proprietate este în mare parte disciplina urmăririi indicatorilor
indirecți pe care îi recomandă acest subiect, tiparele de accesare, caracterul
învechit, întrebările repetate, timpul de integrare, și dorința de a încorpora golurile
de documentație într-o restanță prioritizată, în loc să le tratezi perpetuu ca având un
statut mai scăzut decât munca centrată pe cod. Această disciplină costă mult mai puțin
decât extragerea cunoștințelor în regim de criză pe care exemplul cu serviciile
financiare o arată ca alternativă.

## Anti-modele și capcane

- **Numărarea existenței documentației în loc a utilității:** nu spune aproape nimic
  despre dacă cunoștințele sunt de fapt accesibile când este nevoie.
- **Scrierea de mai mult conținut ca răspuns la întrebări repetate, fără a verifica
  întâi posibilitatea de a găsi informația:** adesea abordează cu totul problema
  greșită.
- **Nicio verificare vreodată a caracterului învechit al documentației raportat la cât
  s-a schimbat sistemul:** riscă conținut depășit, activ înșelător.
- **Tratarea datoriei de documentație ca având perpetuu un statut mai scăzut decât
  datoria de cod:** o lasă cronic despriorizată și invizibilă în restanță.
- **Confundarea stabilității aparente, un sistem care nu s-a schimbat de ani, cu risc
  scăzut:** poate masca o problemă severă, nedocumentată, de bus factor în spatele unui
  sistem care pur și simplu nu a avut încă nevoie de singurul lui expert.
- **Descoperirea cunoștințelor critice nedocumentate abia în timpul unei tranziții de
  personal de urgență:** modul de eșec scump și evitabil pe care acest subiect este
  construit să-l prevină.

## Model de maturitate

- **Nivelul 1, Inițiere:** Sănătatea documentației nu este măsurată; concentrarea
  cunoștințelor și riscul de învechire sunt descoperite doar prin criză.
- **Nivelul 2, Dezvoltare:** Există o oarecare documentație, dar nu există o urmărire
  sistematică a accesării, a caracterului învechit sau a posibilității de a o găsi.
- **Nivelul 3, Standardizare:** Accesarea și caracterul învechit sunt urmărite pentru
  sistemele critice, iar timpul de integrare este măsurat ca indicator indirect al
  sănătății cunoștințelor la nivelul organizației.
- **Nivelul 4, Gestionare:** Golurile de documentație sunt încorporate în restanța
  prioritizată de datorie tehnică, raportate la riscul de bus factor pentru a
  identifica cele mai severe riscuri combinate.
- **Nivelul 5, Orchestrare:** Organizația identifică și abordează proactiv riscul
  cunoștințelor critice nedocumentate înainte ca o tranziție de personal să forțeze
  problema și poate indica îmbunătățiri concrete și măsurabile ale integrării sau ale
  răspunsului la incidente, atribuite investiției în documentație.

## Idei de discuție

1. Care este acum cea mai severă combinație a noastră dintre bus factor scăzut și documentație slabă?
2. Ce întrebare se pune în mod repetat deși există un răspuns documentat?
3. Cum am ști dacă o bucată de documentație critică a devenit depășită și înșelătoare?
4. Include restanța noastră de datorie tehnică golurile de documentație sau sunt invizibile?
5. Ce ne-ar costa dacă singurul expert al celui mai puțin documentat sistem al nostru ar pleca anul acesta?

## Concluzii principale

- Măsoară **utilitatea, nu existența**: dacă documentația ajută cu adevărat, folosind
  indicatori indirecți precum tiparele de accesare, caracterul învechit și întrebările
  repetate.
- **Întrebările repetate în ciuda răspunsurilor documentate** dezvăluie o problemă de
  găsire a informației, nu neapărat una de efort de conținut.
- **Timpul de integrare până la contribuție productivă** este un indicator indirect
  puternic și practic al sănătății generale a cunoștințelor.
- **Cunoștințele critice nedocumentate sunt un risc în compunere**, mai ales combinate
  cu un bus factor scăzut (subiectul 3.5); nu costă nimic vizibil până când costă
  foarte mult dintr-o dată.
- Încorporează **golurile de documentație în restanța ta de datorie tehnică**
  (subiectul 4.5), astfel încât să concureze corect pentru capacitate prioritizată.

## Referințe și lecturi suplimentare

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, de Jared
  Bhatti, Zachariah Goldberg, Ted Kubaska și Sarah Moir (practici concrete de
  documentare pentru echipele de inginerie).
- *A Philosophy of Software Design*, de John Ousterhout (relația dintre documentație,
  complexitate și mentenabilitate).
- *Team Topologies*, de Matthew Skelton și Manuel Pais (implicații de proiectare
  organizațională ale cunoștințelor concentrate versus distribuite).
- *Accelerate: The Science of Lean Software and DevOps*, de Nicole Forsgren, Jez
  Humble și Gene Kim (documentația ca una dintre capabilitățile corelate cu
  performanța livrării).
