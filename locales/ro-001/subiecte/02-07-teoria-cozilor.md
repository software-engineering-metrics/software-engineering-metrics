# 2.7 Teoria cozilor

## Prezentare generală și motivație

**[Teoria cozilor](https://en.wikipedia.org/wiki/Queueing_theory)** este studiul
matematic al cozilor de așteptare. Pare o alegere ciudată pentru o carte despre
metricile ingineriei software până observi cât de mult dintr-un flux de livrare este
de fapt o coadă: un pull request care așteaptă un revizor, un commit care așteaptă un
runner CI, un tichet care așteaptă să fie preluat, un mesaj către suportul pentru
clienți care așteaptă un răspuns. Subiectul 2.4 a introdus deja încărcarea fluxului și
timpul fluxului și a arătat că supraîncărcarea unui flux de valoare face livrarea să
încetinească brusc, iar subiectele 2.5 și 2.6 au arătat că cea mai mare parte a
timpului de livrare este timp de așteptare, nu timp de lucru. Teoria cozilor este
matematica de fond care explică de ce tot ce s-a spus este adevărat, nu doar un tipar
observat.

Cel mai util rezultat este **[legea lui Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
o teoremă demonstrată de cercetătorul operațional John Little în 1961: numărul mediu
de elemente dintr-un sistem stabil este egal cu rata medie la care sosesc elementele,
înmulțită cu timpul mediu pe care îl petrece fiecare element în sistem. Subiectul 2.4 a
folosit deja acest rezultat sub numele propriu din Flow Framework, încărcarea fluxului
este egală cu rata de sosire înmulțită cu timpul fluxului. În vocabularul mai larg al
acestei cărți se citește și ca: munca în curs (subiectul 2.5) este egală cu rata de
sosire a muncii noi înmulțită cu timpul de ciclu (subiectul 2.6). Nu este o regulă
empirică sau o corelație observată în unele studii. Este o demonstrație valabilă
pentru orice coadă stabilă, indiferent de ce procesează coada sau cum decide ce să
lucreze mai departe.

Pentru o echipă mare, această generalitate este esența. Legea lui Little îți dă o
verificare de bun-simț care funcționează identic indiferent dacă coada este o tablă
kanban, un broker de mesaje sau un flux CI comun. Dacă munca în curs, rata de sosire și
timpul de ciclu pe care le măsori nu satisfac aproximativ ecuația, unul dintre cele trei
numere este greșit, de obicei din cauza unei definiții inconsecvente a ce înseamnă „în
curs” sau „sosit”. Organizațiile mari și administrația publică conduc zeci de astfel de
cozi simultan, grupuri comune de revizuire a codului, medii comune de testare, comisii
comune de aprobare, iar legea lui Little este cea mai ieftină unealtă disponibilă pentru
a prinde o definiție proastă a unei metrici înainte să ducă la o decizie proastă de
personal sau de proces.

## Principii-cheie

- **Legea lui Little este o demonstrație, nu o euristică.** Munca în curs este egală cu
  rata de sosire înmulțită cu timpul de ciclu, pentru orice coadă stabilă, și este o
  verificare rapidă a dacă metricile tale de livrare sunt consecvente intern.
- **Utilizarea nu scalează liniar cu timpul de așteptare.** Pe măsură ce o resursă
  comună se apropie de utilizarea completă, întârzierea în coadă crește brusc, nu
  treptat. O resursă ocupată 95% din timp așteaptă adesea de multe ori mai mult decât
  una ocupată 80%, nu doar „puțin mai rău”.
- **Media unei cozi ascunde cazul ei cel mai rău.** Raportarea doar a timpului mediu de
  așteptare ascunde coada lungă și dureroasă de lângă capacitate, exact ceea ce
  subiectul 1.6 avertizează când vine vorba de folosirea percentilelor în loc de medii.
- **Felul în care este definită o coadă poate fi manipulat la fel de ușor ca orice altă
  metrică.** Dacă ceva contează ca „sosit”, „în curs” sau „servit” este o alegere și
  poate fi reglat ca să flateze un tablou de bord fără a schimba ce se întâmplă de fapt
  cu munca.
- **Un flux de livrare este de obicei o coadă de cozi.** Un flux de livrare înlănțuie mai
  multe etape, iar cea mai lentă etapă dă ritmul întregului lanț indiferent cât de
  repede rulează celelalte.

## Recomandări

### Folosește legea lui Little ca să-ți verifici propriile numere înainte de a te încrede în ele

Ia munca în curs medie măsurată a echipei tale, rata ei medie de sosire a elementelor
noi pe săptămână și timpul ei mediu de ciclu și verifică dacă munca în curs este
aproximativ egală cu rata de sosire înmulțită cu timpul de ciclu. Când nu este, nu
presupune că teoria este greșită. Caută cauza reală: o graniță de etapă numărată
inconsecvent, muncă ce stă „blocată” dar este totuși numărată ca în curs sau o rată de
sosire măsurată pe o fereastră diferită de timpul de ciclu. Această verificare unică
prinde mai multă instrumentare proastă decât găsesc cele mai multe echipe în orice alt
fel.

### Urmărește direct utilizarea pentru fiecare resursă comună cu capacitate limitată

Identifică resursele pe care fluxul tău de livrare le împarte între multe echipe, un grup
de revizuire a codului, un cluster CI, un mediu de staging, și măsoară cât de ocupată
rulează fiecare ca proporție din capacitatea ei disponibilă, înainte să planifici să o
rulezi aproape de limită. Un grup comun de revizori care rulează aproape de capacitatea
completă produce timpi de așteptare în coada de revizuire care cresc mult mai repede
decât creșterea modestă a cererii care i-a cauzat, exact dinamica din spatele sfatului
subiectului 2.9 de a urmări timpul până la prima revizuire ca indicator anticipativ.

### Separă rata de sosire, rata de succes, rata de eșec și rata de omitere

Rezistă tentației de a comprima tot ce iese dintr-o coadă într-un singur număr de
„debit” sau „rată de servire”. Urmărește patru lucruri separat: cât de repede sosește
munca, cât din ea se termină cu succes, cât eșuează și cere refacere și cât este
abandonat sau pierdut discret înainte să-l termine cineva. Un flux care pare rapid
pentru că rata lui de omitere a crescut discret nu livrează de fapt mai mult, iar doar
urmărirea separată a acestor patru rate ți-o va arăta.

### Modelează fluxurile cu mai multe etape ca pe o coadă de cozi

Tratează un flux de livrare, sau orice proces cu mai multe etape, un ciclu de viață al
unui incident, un flux de angajare, ca pe un lanț de cozi, nu ca pe o masă
nediferențiată de „timp”. Rata generală de sosire este stabilită de prima etapă, rata
generală de finalizare de ultima etapă, iar numărul total de erori și omiteri al fluxului
este suma celor ale fiecărei etape. Această încadrare îți spune imediat în ce etapă
merită să investești: cea cu cea mai proastă combinație de utilizare mare și rată mare de
eșec sau de omitere, nu cea care se întâmplă să fie cea mai ușor de instrumentat.

### Stabilește personalul și limitele de WIP ținând cont de utilizare, nu doar de debit

Când decizi de câți revizori sau runneri CI are nevoie o echipă, nu dimensiona
capacitatea ca să se potrivească exact cu rata medie de sosire. O coadă care rulează la
o utilizare medie de 100% are, practic, un timp de așteptare infinit, pentru că sosirile
reale sunt neuniforme, nu perfect netede. Planifică deliberat o marjă și tratează „revizorii
noștri sunt aproape mereu ocupați” ca pe un semn de avertizare despre timpii de așteptare
ce vor veni, nu ca pe o dovadă de resurse folosite eficient.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Fără model formal al cozilor, personal stabilit din intuiție | Rapid de început; fără vocabular nou pentru echipă | Subestimează constant cât de mult explodează timpul de așteptare lângă capacitatea completă |
| Legea lui Little ca verificare de bun-simț pe metricile existente | Ieftină, nu cere unelte noi, prinde rapid definițiile proaste | Verifică doar consecvența, nu diagnostichează singură cauza |
| Simulare completă a cozilor (distribuții de sosire, mai multe servere) | Cea mai precisă predicție a comportamentului timpului de așteptare sub încărcare | Cere pricepere statistică reală și întreținere pe care cele mai multe echipe nu le vor susține |
| Urmărirea utilizării resurselor comune fără modelare mai profundă | Simplă, acționabilă, prinde cea mai mare cauză a timpilor de așteptare scăpați de sub control | Nu spune nimic despre de ce este mare utilizarea sau ce să faci cu cauza de fond |

Tensiunea centrală este **rigoare versus adoptare**. O simulare completă a cozilor dă
cel mai precis răspuns, dar aproape nicio echipă de inginerie nu va construi și nu va
întreține una, iar un model în care nu se încrede sau pe care nu-l actualizează nimeni
este mai rău decât niciun model. Legea lui Little și urmărirea de bază a utilizării
cedează ceva din precizie, dar nu cer nicio pricepere statistică specializată și se
potrivesc direct în metricile pe care o echipă le colectează deja pentru subiectele 2.4
până la 2.6. Alege implicit acele verificări ieftine și ușor de adoptat și rezervă
simularea completă pentru cazul rar în care o singură resursă comună, o flotă mare de CI,
un grup specializat de revizori, este destul de scumpă ca să justifice investiția.

## Întrebări de discutat cu echipa ta

1. **Satisfac munca în curs, rata de sosire și timpul de ciclu pe care le măsurăm legea
   lui Little și, dacă nu, de ce?** Aceasta este cea mai rapidă diagnosticare disponibilă
   pentru o definiție proastă a unei metrici. Parcurge împreună numerele reale și, dacă
   ecuația nu se verifică aproximativ, urmărește nepotrivirea până la o inconsecvență
   specifică de definiție, în loc să respingi verificarea.

2. **Ce resurse comune din fluxul nostru de livrare rulează aproape de utilizarea
   completă și știm de fapt numărul lor de utilizare?** Cele mai multe echipe pot numi o
   resursă care „pare mereu ocupată”, dar nu i-au măsurat niciodată direct utilizarea.
   Identifică două sau trei dintre cele mai constrânse resurse comune și obține un număr
   real pentru fiecare.

3. **Amestecăm succesul, eșecul și omiterea într-un singur număr de debit și ce am vedea
   dacă le-am separa?** O singură numărătoare de „elemente finalizate” poate crește chiar
   și când calitatea scade sau munca este abandonată discret. Recalculează debitul unei
   perioade recente ca trei numere separate și discută ce dezvăluie împărțirea pe care
   numărul amestecat o ascundea.

4. **Unde în fluxul nostru este adevăratul blocaj, cea mai lentă etapă care dă ritmul
   pentru tot ce vine după ea?** Echipele investesc adesea în accelerarea etapei care este
   cea mai ușor de îmbunătățit, nu a celei care constrânge de fapt debitul total.
   Identifică etapa cu cea mai proastă combinație de utilizare mare și rată mare de eșec
   sau de omitere.

5. **Dacă am adăuga capacitate la cea mai constrânsă resursă comună a noastră, s-ar
   îmbunătăți de fapt timpul de așteptare sau ar crește pur și simplu cererea ca s-o
   umple?** Întrebarea separă o lipsă reală de capacitate de o problemă de cerere, iar
   răspunsul schimbă dacă remediul potrivit este mai mult personal, o limită de WIP sau o
   schimbare a modului în care este prioritizată munca înainte de a intra în coadă.

6. **Am redefinit vreodată ce înseamnă „în curs” sau „sosit” într-un fel care a făcut un
   tablou de bord să arate mai bine fără a schimba ce s-a întâmplat de fapt cu munca?**
   Merită întrebat onest și specific, cu exemple reale din ultimul an, nu tratat ca o
   îngrijorare ipotetică.

## Perspectiva sectorială

**Startup.** Cu o mână de ingineri, cele mai multe cozi sunt destul de scurte încât
analiza formală a cozilor este exagerată. Obiceiul util este mai mic: observă când o
persoană, adesea cel mai senior inginer, a devenit de facto o resursă comună la care
așteaptă tot restul și tratează asta ca pe o problemă de utilizare care merită numită
chiar și fără un model formal în spate.

**Afacere mică.** O echipă dintr-o afacere mică are rareori nevoie de ceva mai
sofisticat decât urmărirea utilizării pentru una sau două resurse cu adevărat comune, adesea
un singur revizor sau un singur flux de implementare, și urmărirea punctului în care
„de obicei disponibil” devine discret „de obicei blocajul”. O foaie de calcul este
suficientă; unelte dedicate nu sunt necesare la această scară.

**Companie mare.** Resursele comune se înmulțesc repede la scară mare: o echipă centrală
de platformă, o comisie comună de revizuire a securității, o flotă comună de CI care
servește zeci de echipe de produs. Acestea sunt exact resursele unde urmărirea utilizării
își câștigă pâinea, pentru că o singură resursă comună supraîncărcată poate degrada discret
timpul de livrare pentru fiecare echipă care depinde de ea, iar metricile proprii ale
niciunei echipe nu vor dezvălui o cauză aflată în afara propriului flux.

**Administrație publică.** Programele de livrare între mai multe agenții și mai mulți
furnizori direcționează adesea munca prin comisii comune de aprobare, procese comune de
acreditare de securitate și medii comune de testare pe care nicio echipă singură nu le
controlează și nu le poate redimensiona. Analiza cozilor acestor porți comune, rata de
sosire, capacitatea, utilizarea, este frecvent cea mai clară dovadă disponibilă pentru un
argument de business în favoarea adăugării de capacitate sau a schimbării modului în care
este grupată munca înainte de a ajunge la poartă.

## Exemple

**Companie mare.** Echipa internă de platformă a unui furnizor de infrastructură cloud a
observat că timpul de livrare al modificărilor (subiectul 2.10) crescuse la toate echipele
de produs care depindeau de flota ei comună de CI, deși nicio echipă nu-și schimbase felul
de lucru. O analiză a utilizării a găsit flota ocupată peste 90% în orele de vârf, mult
peste punctul în care teoria cozilor prezice că timpul de așteptare crește brusc, nu
treptat. Echipa de platformă a adăugat capacitate CI și a introdus o politică de
planificare cu partajare echitabilă, astfel încât explozia de activitate a unei singure
echipe să nu poată monopoliza coada. Timpul median de așteptare la CI a scăzut cu mai mult
de jumătate într-o lună, dovadă că blocajul fusese tot timpul o coadă comună și invizibilă.

**Administrație publică.** Echipa de servicii digitale a unei agenții naționale de
autorizări a urmărit procesarea cererilor ca un singur număr de debit, „cazuri închise pe
săptămână”, doi ani, iar numărul părea stabil. O analiză mai atentă, împărțind acel număr
în cazuri aprobate, respinse și abandonate de solicitanți după întârzieri lungi, a găsit
rata de abandon aproape triplată în aceeași perioadă, în timp ce aprobările rămăseseră
plate. Legea lui Little, aplicată cozii de lucrători pe dosare, a arătat că munca în curs
crescuse mult peste ce implica timpul mediu de procesare declarat al echipei, ceea ce
însemna că cazurile se acumulau discret într-o stare care nu era numărată drept
„în așteptare”. Agenția și-a restructurat definițiile de urmărire a cazurilor ca să
numere onest fiecare caz deschis și a adăugat capacitate de lucrători pe dosare
dimensionată să țină utilizarea sub 85%, urmărită acum ca țintă operațională permanentă
alături de numărul de debit.

## Argumentul de business: motivații, ROI și TCO

Randamentul aplicării analizei de bază a cozilor este că transformă „fluxul pare lent”
într-o decizie specifică și apărabilă, adaugă marjă acestei resurse comune, împarte
această metrică amestecată în componentele ei reale, în loc de un îndemn vag de a „lucra
mai repede” care ratează cauza reală. Exemplul infrastructurii cloud de mai sus, timp de
așteptare înjumătățit printr-un remediu de capacitate și de planificare, nu prin vreo
schimbare a comportamentului echipelor individuale, este tiparul pe care această analiză
îl produce fiabil: remediul este aproape întotdeauna mai ieftin decât a cere fiecărei
echipe din aval să se miște mai repede în jurul unui blocaj pe care nu-l văd.

Costul total de adoptare este cu adevărat mic. Legea lui Little și urmărirea utilizării
nu cer unelte noi dincolo de ce îți cer deja subiectele 2.4 până la 2.6 să colectezi: rata
de sosire, munca în curs și timpul de ciclu. Investiția este mai ales disciplină
analitică, verificarea numerelor unele față de altele și revizuirea periodică a utilizării
resurselor comune înainte să devină următoarea regresie neexplicată a timpului de livrare
a organizației.

## Anti-modele și capcane

- **Dimensionarea capacității unei resurse comune ca să se potrivească exact cu rata ei
  medie de sosire:** garantează utilizare mare și timpi de așteptare scăpați de sub
  control ori de câte ori cererea este neuniformă chiar și pentru scurt timp.
- **Raportarea doar a timpului mediu de așteptare, niciodată a unei percentile:** ascunde
  coada lungă care contează cel mai mult pentru cei care așteaptă în ea.
- **Amestecarea succesului, eșecului și omiterii într-un singur număr de debit:**
  vectorul de manipulare din centrul acestui subiect. O echipă sub presiune poate face
  debitul să pară sănătos lăsând discret rata de omitere să crească, tichete abandonate,
  cereri pierdute discret, muncă ce nu este numărată niciodată ca eșec. Garda de protecție
  este urmărirea sosirii, a succesului, a eșecului și a ratei de omitere ca patru numere
  separate și vizibile, aceeași disciplină pe care o cere subiectul 1.2 pentru fiecare
  metrică din această carte, astfel încât o rată de omitere în creștere să nu se poată
  ascunde în spatele unui grafic de debit plat.
- **A trata „oamenii noștri sunt mereu ocupați” ca pe un compliment:** este un simptom al
  utilizării mari, principala cauză a timpilor de așteptare lungi și imprevizibili.
- **Redefinirea lui „în curs” ca să micșorezi discret munca în curs:** mută munca într-o
  stare necontorizată, „blocat”, „în pauză”, fără a schimba cât durează să fie terminată,
  și strică verificarea cu legea lui Little care altfel ar fi prins-o.
- **A presupune că un model al cozilor nu mai cere întreținere odată construit:** tiparele
  de sosire și capacitatea se schimbă constant, iar un model învechit produce predicții
  greșite cu mare siguranță.

## Model de maturitate

- **Nivelul 1, Inițiere:** Nicio coadă nu este măsurată explicit; timpul de așteptare este
  discutat anecdotic, „lucrurile par lente”.
- **Nivelul 2, Dezvoltare:** Rata de sosire, munca în curs și timpul de ciclu sunt urmărite
  pentru cel puțin un flux, dar niciodată verificate față de legea lui Little sau față de
  utilizarea resurselor comune.
- **Nivelul 3, Standardizare:** Legea lui Little este o verificare de consecvență de
  rutină în fluxurile de livrare, iar utilizarea este urmărită explicit pentru cele mai
  semnificative resurse comune.
- **Nivelul 4, Gestionare:** Rata de succes, de eșec și de omitere sunt urmărite separat
  pentru fiecare coadă semnificativă, iar deciziile de capacitate folosesc ținte de
  utilizare, nu doar cererea medie.
- **Nivelul 5, Orchestrare:** Organizația își modelează fluxurile majore ca cozi de cozi,
  identifică sistematic adevăratele blocaje și poate indica schimbări concrete de
  capacitate sau de proces făcute datorită analizei cozilor, cu o îmbunătățire măsurată a
  timpului de așteptare ca dovadă.

## Idei de discuție

1. Alege unul dintre fluxurile noastre de livrare și verifică dacă numerele lui satisfac azi legea lui Little.
2. Numește singura resursă comună din organizația noastră pe care cei mai mulți ar fi de acord că este „mereu ocupată” și găsește-i numărul real de utilizare.
3. Cum ar arăta graficul nostru de debit dacă l-am împărți în rate de succes, de eșec și de omitere pentru ultimul trimestru?
4. Dacă ar trebui să adăugăm capacitate la exact o resursă comună anul acesta, care ar fi și ce dovezi ar justifica alegerea?

## Concluzii principale

- **Legea lui Little**, munca în curs este egală cu rata de sosire înmulțită cu timpul de
  ciclu, este o demonstrație, nu o euristică, și este cea mai ieftină verificare
  disponibilă a dacă metricile tale de livrare sunt consecvente intern.
- **Timpul de așteptare crește brusc, nu treptat, pe măsură ce utilizarea se apropie de
  capacitatea completă.** Tratează „mereu ocupat” ca pe un semn de avertizare, nu ca pe un
  compliment.
- Urmărește **rata de sosire, rata de succes, rata de eșec și rata de omitere**
  separat; amestecarea lor într-un singur număr de debit este vectorul central de
  manipulare al acestui subiect.
- Modelează un flux cu mai multe etape ca pe o **coadă de cozi** și investește în etapa cu
  cea mai proastă combinație de utilizare mare și rată mare de eșec sau de omitere, nu în
  etapa cea mai ușor de îmbunătățit.
- Preferă verificările ieftine și ușor de adoptat, **legea lui Little și urmărirea
  utilizării**, în locul unei simulări complete a cozilor pe care puține echipe o vor
  susține.

## Referințe și lecturi suplimentare

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
