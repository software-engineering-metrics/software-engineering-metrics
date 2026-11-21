# 1.6 Cultură statistică pentru metricile ingineriei

## Prezentare generală și motivație

Nu ai nevoie de o diplomă în statistică ca să conduci bine un program de
metrici, dar trebuie să eviți un număr mic de greșeli specifice și frecvente
care fac metricile altfel bine guvernate și bine instrumentate să inducă
activ în eroare. O echipă poate face totul corect, poate numi o decizie clară,
poate evita legea lui Goodhart, poate înclina spre rezultate, poate guverna
responsabilitatea, poate instrumenta fiabil, și totuși să tragă concluzia
greșită pentru că a citit o medie acolo unde avea nevoie de o percentilă, a
luat zgomotul drept tendință sau a căzut în plasa unei coincidențe îmbrăcate în
cauză. Acest subiect este judecata statistică minimă pe care cartea o presupune
deja la cititorul fiecărui subiect următor.

Problema de fond este că metricile de inginerie sunt, de obicei, zgomotoase,
asimetrice și cu eșantioane mici după standardele statisticii formale.
Numărul săptămânal de implementări al unei singure echipe nu este un clopot
neted; este o mână de puncte de date cu valori extreme ocazionale (o lansare
mare, o serie de rollbackuri provocate de un incident). Aplicarea unor intuiții
naive, construite pentru seturi mari și bine comportate de date, asupra unor
astfel de date produce periodic concluzii sigure pe ele și greșite. A învăța să
observi când un număr este prea zgomotos ca să te încrezi în el, când o medie
te minte și când două lucruri care se mișcă împreună nu spun nimic despre
cauzalitate nu este o rigoare opțională, ci ceea ce deosebește un program de
metrici care învață organizația ceva adevărat de unul care o învață ceva ce
sună plauzibil și este fals.

La scara unei companii mari sau a administrației publice, greșelile statistice
se compun, pentru că o concluzie înșelătoare, odată acceptată de conducere,
este pusă în practică în multe echipe înainte ca cineva să se gândească să
reexamineze analiza de dedesubt. O comparație statistic naivă între două
divizii, sau între înainte și după o reorganizare majoră, poate modela ani la
rând decizii de resurse pe baza nimic altceva decât zgomot sau un factor de
confuzie pe care nimeni nu l-a controlat. Acest subiect există ca să facă acest
eșec mai puțin probabil.

## Principii-cheie

- **O mediană sau o percentilă îți spune de obicei mai mult decât o medie.**
  Datele de inginerie sunt în mod curent asimetrizate de valori extreme pe care
  mediile le absorb, iar percentilele nu.
- **Eșantioanele mici produc numere zgomotoase.** Un procent calculat dintr-o
  mână de evenimente oscilează puternic din motive care nu au nimic de-a face cu
  o schimbare reală.
- **Regresia spre medie păcălește oamenii mereu.** O valoare neobișnuit de bună
  sau de proastă tinde să fie urmată de una mai normală, cu sau fără vreo
  intervenție.
- **Corelația nu este cauzalitate, iar variabilele de confuzie sunt peste
  tot.** Două metrici care se mișcă împreună pot avea o a treia cauză ascunsă
  comună, în loc ca una să o determine pe cealaltă.
- **O [diagramă de control](https://en.wikipedia.org/wiki/Control_chart) bate o
  singură comparație înainte și după.** A vedea intervalul normal de variație
  este ceea ce te lasă să deosebești o schimbare reală de zgomot.

## Recomandări

### Folosește implicit mediane și percentile pentru date asimetrice

Metricile de inginerie bazate pe timp, timpul de livrare, timpul de recuperare
după incident, latența răspunsului, sunt aproape întotdeauna asimetrice spre
dreapta: majoritatea valorilor se adună jos, cu o coadă lungă de valori extreme
ocazionale. O medie trasă de acea coadă poate picta un tablou pe care niciun caz
tipic nu-l reflectă. Raportează **mediana** (valoarea din mijloc, cu jumătate
din observații deasupra și jumătate dedesubt) alături de percentila **90** sau
**95** (valoarea sub care se află 90% sau 95% din observații), care împreună
arată atât cazul tipic, cât și coada cazului cel mai rău pe care o echipă îl
trăiește de fapt. Subiectul despre KPI din cartea soră `software-engineering-guide`
și fiecare subiect despre metrici de livrare din Partea 2 a acestei cărți
presupun acest obicei pe tot parcursul lor.

### Știi când un eșantion este prea mic ca să te încrezi în el

O rată de eșec a modificărilor calculată din trei implementări într-o săptămână
lentă nu este un semnal semnificativ; un singur eșec mută procentul de la 0% la
33% peste noapte, din motive care pot să nu aibă nimic de-a face cu riscul de
fond. Înainte să reacționezi la o metrică bazată pe procente, verifică
numărătoarea de dedesubt. Ca regulă practică, tratează o rată calculată din mai
puțin de aproximativ douăzeci-treizeci de evenimente de bază ca fiind
zgomotoasă și cerând o fereastră de observare mai lungă înainte de a trage o
concluzie, și spune asta explicit pe tabloul de bord, în loc să prezinți un
procent volatil dintr-un eșantion mic cu aceeași încredere ca unul stabil dintr-un
eșantion mare.

### Urmărește regresia spre medie înainte de a atribui o intervenție

Dacă cea mai proastă săptămână de până acum a unei echipe în privința
incidentelor este urmată de atenția conducerii și apoi de o îmbunătățire, este
tentant să atribui meritul intervenției. Adesea, o parte din acea îmbunătățire
s-ar fi produs oricum, pentru că o valoare neobișnuit de extremă tinde să fie
urmată de una mai tipică, doar ca artefact statistic, fenomen numit **regresie
spre medie**. Apără-te de asta comparând cu o valoare de referință istorică mai
lungă, nu cu punctul extrem de date care a atras atenția, și fiind adecvat de
umil în privința cât din orice îmbunătățire observată să atribui unei acțiuni
anume.

### Caută variabile de confuzie înainte de a pretinde că o metrică a cauzat un rezultat

Când două metrici se mișcă împreună, frecvența implementărilor crescând odată cu
satisfacția clienților, rezistă reflexului de a pretinde că una a cauzat-o pe
cealaltă înainte să iei în calcul o **variabilă de confuzie**: un al treilea
factor ascuns care le determină pe amândouă. Lansarea unei funcționalități noi
poate crește independent și frecvența implementărilor (mai multe remedieri
ulterioare), și satisfacția (funcționalitatea însăși), fără nicio legătură
cauzală între cele două metrici. Înainte să prezinți o corelație ca dovadă a
cauzalității, întreabă activ ce altceva s-a schimbat în același timp și ar putea
explica ambele mișcări.

### Folosește o diagramă de control, nu un singur instantaneu înainte și după

O **diagramă de control** reprezintă o metrică în timp, cu intervalul ei normal
de variație arătat explicit, de obicei ca benzi în jurul unei medii centrale.
Asta te lasă să deosebești o schimbare autentică, un punct de date sau o serie
susținută în afara intervalului normal, de zgomotul obișnuit pe care o singură
comparație înainte și după nu-l poate distinge. Înainte să declari „numărul s-a
îmbunătățit după schimbare”, reprezintă suficiente date istorice ca să vezi cum
arată variația normală și verifică dacă valoarea de după schimbare cade
într-adevăr în afara ei.

## Compromisuri: avantaje și dezavantaje

| Abordare | Avantaje | Dezavantaje |
| --- | --- | --- |
| Medii | Simple, familiare, ușor de calculat | Distorsionate de valorile extreme în datele asimetrice de inginerie |
| Mediane și percentile | Robuste la valori extreme, arată împreună cazul tipic și coada | Ceva mai puțin familiare publicului netehnic |
| O singură comparație înainte și după | Rapidă, intuitivă, ușor de prezentat | Vulnerabilă la regresia spre medie și la zgomot |
| Diagrame de control și valori de referință mai lungi | Deosebesc fiabil schimbările reale de zgomot | Cer mai multe date istorice și mai multe explicații pentru un public netehnic |

Tensiunea centrală este **simplitate versus rigoare**. Mediile și comparațiile
singulare înainte și după sunt mai ușor de calculat și de explicat, motiv pentru
care domină raportarea ocazională, dar sunt și cele două tehnici cel mai probabil
să producă o concluzie sigură și greșită pe tipul de date zgomotoase și
asimetrice pe care îl generează metricile acestei cărți. Rezolvă tensiunea
folosind implicit tehnicile mai riguroase, mediane, percentile și diagrame de
control, pentru orice decizie cu consecințe reale, și rezervând tehnicile mai
simple pentru priviri exploratorii cu miză mică, unde o citire greșită costă
puțin.

## Întrebări de discutat cu echipa ta

1. **Care dintre tilele noastre de tablou de bord raportează o medie acolo unde o
   mediană sau o percentilă ar spune o poveste mai adevărată?** Metricile de
   inginerie bazate pe timp sunt aproape întotdeauna asimetrice, iar o medie pe
   date asimetrice poate arăta bine în timp ce cazul tipic, sau coada celui mai
   rău caz, spune cu totul altceva. Auditează tilele bazate pe timp special
   pentru această substituție.

2. **Cât de mic este eșantionul de dedesubt al metricilor noastre bazate pe
   procente și tratăm o metrică din zece evenimente cu aceeași încredere ca una
   din o mie?** O rată volatilă dintr-un eșantion mic, prezentată fără
   numărătoarea de dedesubt, invită la reacție exagerată la zgomot. Verifică
   tilele cu rata de eșec a modificărilor și altele similare pentru această
   lacună.

3. **Am atribuit vreodată unei intervenții o îmbunătățire pe care regresia spre
   medie ar fi produs-o oricum?** Aceasta este una dintre cele mai ușor de făcut
   greșeli statistice și una dintre cele mai greu de observat după fapt, pentru
   că intervenția și îmbunătățirea chiar s-au petrecut în această ordine. Privește
   înapoi la o poveste recentă de tipul „am rezolvat” și întreabă-te sincer dacă
   comparația cu valoarea de referință a fost destul de lungă ca s-o excludă.

4. **Unde am presupus că o metrică a cauzat alta fără să verificăm o variabilă
   de confuzie?** Două lucruri care se mișcă împreună este frecvent; ca unul să
   îl cauzeze pe celălalt este o afirmație mai tare, care cere mai multe dovezi.
   Alege o corelație în care crede acum echipa ta și încearcă să numești un
   factor de confuzie plauzibil care ar explica-o fără nicio legătură cauzală.

5. **Avem destule date istorice ca să știm cum arată variația normală pentru cele
   mai importante metrici ale noastre sau comparăm puncte singulare?** Fără o
   idee despre intervalul normal, orice valoare singulară pare alarmantă sau
   liniștitoare în funcție de dispoziție, nu de dovezi. Discută dacă cea mai
   urmărită metrică a voastră a fost vreodată reprezentată ca o diagramă de
   control, nu ca un singur număr.

6. **Cum comunicăm acum incertitudinea părților interesate netehnice și
   sugerează tabloul nostru de bord mai multă precizie decât susțin datele?** Un
   grafic fără nicio indicație a variației normale sau a dimensiunii
   eșantionului poate face o conducere să reacționeze exagerat la zgomot sau, la
   fel de des, să respingă un semnal real ca zgomot. Discută cum ar putea
   raportarea voastră să comunice asta onest fără să devină ilizibilă.

## Perspectiva sectorială

**Startup.** Echipele mici generează eșantioane mici aproape peste tot, ceea ce
înseamnă că precauția față de eșantioanele mici din acest subiect contează
constant. Rezistă tentației de a trage concluzii tari dintr-o singură săptămână
proastă sau dintr-una grozavă; cu doar o mână de puncte de date, răspunsul onest
la „este o tendință?” este adesea „încă nu știm”.

**Afacere mică.** Tablourile de bord integrate ale uneltelor gata făcute folosesc
adesea implicit medii și comparații pe o singură perioadă, pentru că sunt cel
mai simplu de calculat și de afișat. Unde permite unealta, treci la mediane
pentru metricile bazate pe timp și fii sceptic față de orice titlu „în creștere
cu 40% luna aceasta” calculat dintr-o numărătoare mică de dedesubt.

**Companie mare.** Greșelile statistice la această scară se coc în decizii de
resurse și de reorganizare care afectează sute de oameni. Investește în analiști
sau în specialiști în date încorporați în echipe, care pot construi diagrame de
control corecte și pot verifica factorii de confuzie înainte ca o comparație
între unități de business sau înainte și după o schimbare majoră să fie
prezentată conducerii ca fapt stabilit.

**Administrație publică.** O comparație statistic naivă care alimentează un
raport public sau o justificare bugetară poate avea consecințe disproporționate
în lumea reală și invită exact genul de control care expune public o analiză
neglijentă. Aplică tehnicile mai riguroase, diagrame de control, dimensiuni de
eșantion documentate, verificări ale factorilor de confuzie, ca practică
permanentă pentru orice se publică extern, nu doar ca efort ocazional.

## Exemple

**Companie mare.** Conducerea unei companii de software a sărbătorit o
îmbunătățire de 25% a ratei de eșec a modificărilor în luna de după introducerea
unei noi politici de revizuire a codului, atribuind meritul direct politicii. O
privire mai atentă a arătat că luna „dinainte” fusese una neobișnuit de proastă,
provocată de o migrare eșuată a unei singure echipe, iar dimensiunea
eșantionului în ambele luni era sub treizeci de implementări în întreaga
companie. O diagramă de control cu douăsprezece luni de istoric a arătat că noua
valoare se afla bine în interiorul variației normale, nu era o schimbare reală
în treaptă, iar efectul real al politicii, deși real, era mult mai mic decât
sugera cifra din titlu.

**Administrație publică.** O agenție de transport public a raportat o mare
îmbunătățire de la an la an a punctualității pentru un sistem de programare
nou digitalizat, comparând un singur trimestru „dinainte” cu un singur
trimestru „după”. O revizuire independentă a constatat că trimestrul „dinainte”
coincisese cu o închidere de șantier fără legătură, care deprimase performanța
în toată rețeaua, iar o valoare de referință mai lungă a arătat că punctualitatea
se redresa deja înainte de lansarea noului sistem. Raportul revizuit al agenției
a folosit o diagramă de control pe mai mulți ani și a atribuit sistemului nou o
îmbunătățire mai modestă, dar mai ușor de apărat.

## Argumentul de business: motivații, ROI și TCO

Randamentul culturii statistice este ocolirea direcționării greșite: o
organizație care atribuie corect o îmbunătățire, sau recunoaște corect zgomotul
ca zgomot, își cheltuie următoarea investiție acolo unde chiar va ajuta, în loc
să alerge după un efect fantomă. Exemplul de mai sus este tipic: o companie care
credea că politica de revizuire singură a adus o îmbunătățire de 25% ar putea
subinvesti în alți factori reali sau ar putea exagera valoarea politicii într-un
mod care induce în eroare deciziile viitoare.

Costul total al rigorii statistice este mai ales o schimbare de obicei, nu o
unealtă nouă: alegerea unei mediane în loc de o medie, verificarea
dimensiunii eșantionului înainte de a reacționa, reprezentarea unei valori de
referință mai lungi înainte de a declara victoria. Aceste obiceiuri costă puțin
de adoptat și previn costul mult mai mare și mai greu de detectat al deciziilor
luate pe concluzii sigure pe ele și greșite.

## Anti-modele și capcane

- **Raportarea unei medii pe date asimetrice bazate pe timp:** ascunde cazul
  tipic și coada în spatele unui singur număr înșelător.
- **Reacția la un procent fără dimensiunea eșantionului vizibilă:** tratează
  zgomotul dintr-o mână de evenimente ca pe o tendință stabilă și semnificativă.
- **Atribuirea unei intervenții fără a exclude regresia spre medie:** o greșeală
  frecventă, ușor de făcut și greu de observat.
- **Pretinderea cauzalității din corelație fără a lua în calcul factorii de
  confuzie:** exagerează ce susțin de fapt datele.
- **Compararea unui singur instantaneu înainte și după în loc să reprezinți o
  valoare de referință mai lungă:** nu poate deosebi o schimbare reală de
  variația obișnuită.
- **Sugerarea unei precizii mai mari decât susțin datele în raportarea către
  conducere:** invită la reacție exagerată la zgomot sau la respingerea unui
  semnal real.

## Model de maturitate

- **Nivelul 1, Inițiere:** Metricile sunt raportate ca medii brute și instantanee
  singulare înainte și după, fără atenție la dimensiunea eșantionului, la
  asimetrie sau la variația valorii de referință.
- **Nivelul 2, Dezvoltare:** Unii analiști aplică informal mediane sau percentile,
  dar nu există o practică organizațională consecventă, iar factorii de confuzie
  sunt rareori verificați.
- **Nivelul 3, Standardizare:** Medianele și percentilele sunt implicite pentru
  metricile asimetrice bazate pe timp; dimensiunile eșantioanelor sunt afișate
  alături de metricile bazate pe procente în întreaga organizație.
- **Nivelul 4, Gestionare:** Diagramele de control cu valori de referință istorice
  sunt practică standard pentru orice pretenție de schimbare reală; variabilele
  de confuzie sunt luate în calcul activ înainte ca în raportări să se facă
  afirmații cauzale.
- **Nivelul 5, Orchestrare:** Rigoarea statistică este încorporată în unelte,
  tablourile de bord afișează implicit percentile și benzi de control, iar
  organizația poate demonstra că o decizie anume din trecut a fost corectată
  pentru că o citire statistic naivă a fost prinsă înainte să modeleze
  strategia.

## Idei de discuție

1. Care dintre titlurile actualelor noastre tablouri de bord ar arăta diferit dacă am înlocui o medie cu o mediană?
2. Am schimbat vreodată o decizie pentru că un procent s-a dovedit a se baza pe un eșantion mult mai mic decât presupuneam?
3. Care este o poveste recentă de tipul „am îmbunătățit această metrică” pe care ar trebui să o reexaminăm pentru regresie spre medie?
4. Unde ar putea două dintre metricile noastre să fie corelate printr-o a treia cauză ascunsă, nu pentru că una o determină pe cealaltă?
5. Arată cele mai importante grafice ale noastre un interval normal de variație sau doar o singură linie de tendință?

## Concluzii principale

- Preferă **medianele și percentilele** mediilor pentru metricile de inginerie
  asimetrice, bazate pe timp.
- Tratează un **procent dintr-un eșantion mic** ca zgomotos și spune asta
  explicit, în loc să reacționezi la el ca la o tendință stabilă.
- Urmărește **regresia spre medie** înainte de a atribui unei intervenții o
  îmbunătățire care a urmat unei valori neobișnuit de proaste.
- **Corelația nu este cauzalitate**; caută activ variabile de confuzie înainte de
  a face o afirmație cauzală.
- Folosește o **diagramă de control cu o valoare de referință istorică reală**,
  nu un singur instantaneu înainte și după, ca să deosebești o schimbare
  autentică de zgomotul obișnuit.

## Referințe și lecturi suplimentare

- *The Signal and the Noise*, de Nate Silver (deosebirea semnalului real de
  zgomot în date imperfecte).
- *How to Measure Anything*, de Douglas W. Hubbard (raționament statistic pentru
  măsurarea organizațională).
- *Understanding Variation: The Key to Managing Chaos*, de Donald J.
  Wheeler (diagrame de control și distincția dintre variația de cauză comună și
  cea de cauză specială).
- *Thinking, Fast and Slow*, de Daniel Kahneman (prejudecăți cognitive, inclusiv
  regresia spre medie și iluzia narațiunii cauzale).
- *The Visual Display of Quantitative Information*, de Edward R. Tufte
  (prezentarea onestă și integră a datelor cantitative).
