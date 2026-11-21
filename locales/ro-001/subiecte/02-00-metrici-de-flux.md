# 2.0 Introducere în Partea 2: Metrici de flux

Dacă Partea 1 este filosofia măsurării, Partea 2 este locul unde acea filosofie
întâlnește livrarea însăși: metricile care descriu nu doar cât de repede și cât de
sigur mută o echipă codul de la o idee la un sistem care rulează, ci și ce fel de
valoare circulă prin acel flux. Această parte este organizată în jurul **Flow
Framework**, un model creat de Mik Kersten în cartea sa din 2018 *Project to
Product*, care tratează livrarea de software ca pe un flux de valoare și îi dă
acelui flux de valoare un vocabular comun: patru tipuri de elemente de flux și
cinci metrici de flux care leagă activitatea de inginerie de strategia de
business în termeni pe care o parte interesată netehnică îi poate folosi cu
adevărat.

Alegerea acestui cadru organizator este deliberată. Metricile DORA, frecvența
implementărilor, timpul de livrare, rata de eșec a modificărilor și timpul de
recuperare, sunt validate cu adevărat prin cercetare și rămân unul dintre cele
mai bine fundamentate cadre de livrare disponibile, dar ele măsoară mecanica
fluxului de livrare, nu ceea ce circulă prin el. O echipă poate afișa numere
DORA excelente în timp ce valoarea ei efectiv livrată a alunecat pe tăcute spre
refacere sau departe de munca de datorie și de risc care protejează viitorul
unui sistem. Această parte acoperă DORA în întregime, dar ca un singur subiect
de referință consolidat, la sfârșit (subiectul 2.10), pentru că întrebarea mai
urgentă și mai des absentă pentru cele mai multe organizații nu este „cât de
rapid este fluxul nostru de livrare”, ci „ce livrează de fapt fluxul nostru”.
Fiecare subiect din această parte urmează totuși aceeași disciplină stabilită în
Partea 1: formulează metrica, numește cum este manipulată și asociaz-o cu garda
de protecție care prinde acea manipulare.

Pentru echipele mari, metricile de flux sunt cele care fac posibilă compararea
între echipe fără a pierde valoarea din vedere. O echipă de platformă, una de
aplicații mobile și una de date pot să nu aibă aproape nimic în comun în munca
de zi cu zi, dar viteza fluxului și distribuția fluxului, calculate consecvent,
îi permit conducerii să pună o întrebare corectă despre toate trei: livrează
această echipă genul de valoare de care are nevoie faza ei actuală. Organizațiile
mari și administrația publică se bazează pe metricile acestei părți ca să
justifice investițiile în platformă, să compare randamentul unor eforturi
concurente de modernizare și să demonstreze, cu dovezi, nu cu anecdote, că
capacitatea de inginerie este alocată așa cum crede conducerea că este.

## Subiectele din această parte

- **2.1 Flow Framework:** Originea cadrului, modelul lui de flux de valoare și de
  ce această carte îl folosește, în loc de DORA singur, pentru a organiza metricile
  de livrare și de flux.
- **2.2 Elemente de flux: funcționalități, defecte, riscuri și datorie:**
  Taxonomia cadrului cu patru tipuri, alocarea lui de capacitate cu sumă nulă și
  cum este manipulată clasificarea dacă este aplicată retroactiv.
- **2.3 Viteza fluxului și distribuția fluxului:** Cât s-a livrat și ce fel de
  valoare a fost, citite întotdeauna împreună.
- **2.4 Timpul fluxului și încărcarea fluxului:** Cum legea lui Little dovedește
  că un flux de valoare supraîncărcat încetinește matematic, nu doar probabil.
- **2.5 Eficiența fluxului și munca în curs:** De ce ocupat nu înseamnă rapid și
  cum limitarea muncii în curs îmbunătățește debitul în mod contraintuitiv.
- **2.6 Timpul de ciclu și componentele sale:** Descompunerea timpului de
  inginerie al unei modificări în etapele sale constitutive, astfel încât o echipă
  să știe exact unde se duce timpul.
- **2.7 Teoria cozilor:** Matematica de sub încărcarea fluxului, timpul fluxului,
  timpul de ciclu și munca în curs și de ce timpul de așteptare pentru o resursă
  comună explodează pe măsură ce utilizarea se apropie de limită.
- **2.8 Metrici Lean ale fluxului de valoare:** Trusa clasică Lean, timp de
  livrare, timp de procesare, timp de ciclu, procent complet și corect și timp
  takt, din care descind metricile acestei părți specifice software-ului, și cum
  să faci punte între cele două vocabulare.
- **2.9 Metrici pentru pull request și revizuirea codului:** Metricile care trăiesc
  în interiorul unei singure etape a fluxului de livrare și cum pot distorsiona
  calitatea revizuirii dacă sunt folosite neglijent.
- **2.10 Cadrul metricilor DORA:** Cele patru metrici DORA în întregime, plasate
  la urmă deliberat pentru că măsoară fluxul de livrare, nu valoarea care circulă
  prin el.

## Cum se leagă aceste subiecte între ele

Subiectul 2.1 introduce Flow Framework în ansamblu; subiectul 2.2 dă taxonomia
elementelor de flux, iar subiectele 2.3 și 2.4 acoperă între ele cele cinci
metrici de flux, viteza și distribuția împreună, apoi timpul și încărcarea
împreună, cu încărcarea și timpul legate direct de legea lui Little. Subiectele
2.5 până la 2.7 măresc mecanica de sub timpul fluxului și timpul de ciclu în
special: eficiența fluxului și munca în curs explică de ce etapele de inginerie
sunt adesea mai lente decât par, timpul de ciclu descompune acea porțiune de
inginerie în etapele ei, iar teoria cozilor formalizează, în termeni matematici
demonstrabili, de ce sunt adevărate toate afirmațiile subiectelor precedente
despre încărcare, timp de așteptare și utilizare. Subiectul 2.8 face un pas
înapoi ca să urmărească totul până la originea în cartografierea clasică a
fluxului de valoare din Lean, vocabularul comun din care generalizează metricile
acestei părți specifice software-ului. Subiectul 2.9 acoperă singura etapă a
fluxului pe care cele mai multe echipe o pot îmbunătăți cel mai repede.
Subiectul 2.10 încheie partea cu metricile DORA în întregime, prezentate ca un
strat de referință bine fundamentat, dar mai îngust, după ce tabloul mai larg,
orientat spre business, din subiectele anterioare este deja în vedere.

Disciplina de gărzi de protecție a acestei părți se leagă direct de subiectul
1.2: viteza fluxului nu este niciodată raportată fără distribuția fluxului
alături, iar metricile de viteză ale DORA rămân asociate cu metricile ei de
stabilitate, astfel încât o echipă să nu poată îmbunătăți un număr de viteză
livrând pe tăcute cod mai riscant sau un amestec mai îngust de valoare. Această
asociere nu este întâmplătoare pentru niciunul dintre cadre; este ideea centrală
a fiecăruia, iar metricile de fiabilitate din Partea 6 extind aceeași jumătate de
stabilitate a asocierii în operațiunile de producție, după ce codul a fost deja
livrat.
