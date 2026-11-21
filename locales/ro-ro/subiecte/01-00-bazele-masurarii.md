# 1.0 Introducere în Partea 1: Bazele măsurării

Înainte ca această carte să numească vreo metrică, trebuie să răspundă la o
întrebare mai grea: pentru ce există măsurarea? Fiecare echipă care a
construit vreodată un tablou de bord a văzut, mai devreme sau mai târziu, un
număr care se îmbunătățea în timp ce lucrul pe care trebuia să-l reprezinte se
înrăutățea. Asta nu este o defecțiune a uneltelor. Este rezultatul previzibil
al săririi peste bazele pe care le tratează această parte: de ce măsori, ce se
întâmplă cu o metrică după ce oamenii află că este urmărită, cum dai
întâietate rezultatelor în fața activității, cui îi aparține un număr și
definiția lui, de unde vin de fapt datele și cum citești un semnal zgomotos
fără să te păcălești singur.

Pentru echipele mari, aceste baze încetează să mai fie opționale. O singură
echipă se poate descurca cu un număr făcut pe loc, la care un manager se uită
o dată pe săptămână. O organizație cu sute de ingineri, zeci de tablouri de
bord și o conducere care raportează mai sus nu se poate. La această scară, o
metrică fără responsabil sau prost definită nu induce în eroare doar o
echipă: îi induce în eroare pe toți cei din aval, care au încredere în număr
fără să verifice cum a fost construit, și este scump de desfăcut după ce
comportamentul s-a adaptat ca să o manipuleze.

Organizațiile mari și administrația publică simt asta cel mai acut, pentru că
metricile lor poartă adesea consecințe care depășesc echipa care le produce:
decizii bugetare, rapoarte publice de performanță, constatări de audit și
contracte cu furnizori. O metrică ce pare o comoditate internă de inginerie
poate deveni pe tăcute o intrare critică și neinterogată pentru decizii luate
de oameni care nu văd niciodată fluxul care a generat-o. Bazele corecte sunt
ceea ce face această greutate suportabilă.

## Subiectele din această parte

- **1.1 De ce măsurăm ingineria software:** Argumentul pentru măsurare în
  sine, ce ar trebui să realizeze și diferența dintre a măsura ca să înveți și
  a măsura ca să judeci.
- **1.2 Legea lui Goodhart și psihologia metricilor:** Ideea unică ce
  guvernează fiecare alt subiect din această carte: o măsură care devine țintă
  încetează să mai fie o măsură bună, și mecanismele psihologice care fac
  manipularea aproape inevitabilă după ce oamenii știu că sunt urmăriți.
- **1.3 Rezultatele înaintea producției: alegerea a ceea ce măsurăm:** Cum să
  înclini un set de metrici spre rezultate, nu spre activitate, folosind
  distincția clasică intrare/producție/rezultat și modelul stelei polare.
- **1.4 Guvernanța și responsabilitatea metricilor:** Cine decide ce se
  măsoară, cui îi aparține o definiție și cum o cartă a metricilor împiedică un
  tablou de bord în creștere să devină o harababură fără răspundere.
- **1.5 Surse de date și instrumentare:** De unde vin de fapt metricile
  ingineriei, instrumentare versus autoraportare și problemele de calitate a
  datelor care invalidează pe tăcute un tablou de bord înainte ca cineva să
  observe.
- **1.6 Cultură statistică pentru metricile ingineriei:** Judecata statistică
  minimă de care are nevoie o echipă ca să citească o metrică cinstit:
  percentile versus medii, dimensiunea eșantionului, regresia spre medie și
  variabilele de confuzie.

## Cum se leagă aceste subiecte între ele

Aceste șase subiecte se construiesc într-o ordine strictă. Subiectul 1.1
întreabă de ce să măsori, ceea ce contează pentru că o echipă care nu a
răspuns va aduna numere pe care nimeni nu le folosește. Subiectul 1.2 este
pivotul pe care se învârte restul cărții: odată ce accepți că orice măsură
poate deveni țintă și poate fi manipulată, recomandările tuturor subiectelor
următoare decurg din proiectarea împotriva acestui risc. Subiectul 1.3
transformă această prudență într-o regulă pozitivă: înclină spre rezultate,
pentru că sunt categoria cea mai greu de manipulat ieftin. Subiectul 1.4
face guvernanța concretă, subiectul 1.5 face datele concrete, iar subiectul
1.6 îți dă judecata statistică necesară ca să nu te lași păcălit de zgomot
chiar și atunci când guvernanța și instrumentarea sunt solide.

Tot ce urmează depinde de această parte. Metricile de flux și metricile DORA
din Partea 2, ca și cadrul SPACE din Partea 3, sunt în fond exemple practice
ale principiilor de întâietate a rezultatelor și de asociere cu gărzi de
protecție, expuse în subiectele 1.2 și 1.3. Ghidul de proiectare a
tablourilor de bord din subiectul 8.1 presupune modelul de guvernanță din
subiectul 1.4. Iar modelul de maturitate care încheie fiecare subiect din
această carte este, sub cele cinci niveluri ale sale, un model de maturitate
pentru exact disciplina introdusă de această parte: să măsori ca și cum ai
vorbi serios și să-ți verifici propria muncă.
