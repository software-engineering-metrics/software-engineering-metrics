# 6.0 Introducere în Partea 6: Metrici de fiabilitate, operațiuni și securitate

Partea 2 a tratat drumul unei modificări de la commit la producție; această
parte tratează ce se întâmplă după ce modificarea rulează acolo, pe termen
nelimitat, în condiții reale pe care echipa nu le poate controla pe deplin.
Metricile de fiabilitate, de operațiuni și de securitate sunt locul unde
promisiunile ingineriei software întâlnesc realitatea de durată: nu „a reușit
această implementare", ci „continuă sistemul să funcționeze, noapte după
noapte, sub încărcare, sub atac și sub presiunea unei rotații de gardă care
trebuie să fie sustenabilă ani de zile, nu doar până la următorul incident".

Cele patru subiecte ale acestei părți urmează un arc deliberat. Indicatorii și
obiectivele nivelului de serviciu (subiectul 6.1) stabilesc vocabularul și
disciplina de fixare a țintelor de care depinde tot restul părții. Metricile
de incidente (subiectul 6.2) măsoară ce se întâmplă când ținta este ratată.
Metricile de gardă și de capacitate (subiectul 6.3) măsoară costul uman și de
infrastructură al menținerii țintei. Metricile de securitate și de
vulnerabilități (subiectul 6.4) extind aceeași disciplină de fiabilitate la un
risc distinct, dar strâns legat: nu „se va defecta singur”, ci „va încerca
cineva să îl strice intenționat". Toate cele patru subiecte împart disciplina
centrală a cărții: numește metrica, numește felul în care este manipulată și
asociază-o cu garda de protecție care prinde acea manipulare.

Pentru echipele mari, metricile acestei părți sunt locul unde promisiunile
ingineriei devin contractuale și, în contexte guvernamentale, uneori legale.
Companiile mari scriu acorduri privind nivelul de serviciu pe baza metricilor
introduse în subiectul 6.1, cu penalități financiare reale pentru
nerespectare; organizațiile guvernamentale operează infrastructură publică
critică, unde un eșec de fiabilitate sau de securitate are consecințe mult
dincolo de bilanțul unei singure companii. Această parte tratează serios
această greutate de la un capăt la altul.

## Subiectele din această parte

- **6.1 Indicatori, obiective și bugete de erori ale nivelului de serviciu:**
  Vocabularul și disciplina de fixare a țintelor care stau la baza întregii
  ingineri a fiabilității site-urilor și felul în care un buget de erori
  transformă fiabilitatea într-o resursă care se poate cheltui și gestiona,
  în loc de un absolut de neatins.
- **6.2 Metrici de incidente: detectare, răspuns și recuperare:** Măsurarea
  vitezei cu care o organizație observă, răspunde și rezolvă o defecțiune,
  precum și disciplina fără vinovați care păstrează măsurarea onestă.
- **6.3 Metrici pentru gărzi, capacitate și sarcină operațională:** Costul uman
  și de infrastructură al susținerii fiabilității și motivul pentru care o
  povară de gardă nesustenabilă ajunge, în cele din urmă, să apară ea însăși
  ca problemă de fiabilitate.
- **6.4 Metrici de securitate și gestionare a vulnerabilităților:** Extinderea
  aceleiași abordări disciplinate, asociate cu gărzi de protecție, la riscul de
  securitate, de la descoperirea vulnerabilităților până la remediere.

## Cum se leagă subiectele între ele

Subiectul 6.1 pune fundația pe care se construiește fiecare subiect următor
din această parte: fără un obiectiv clar al nivelului de serviciu, „cât de grav
a fost incidentul" (subiectul 6.2) și „este sustenabilă sarcina noastră de
gardă" (subiectul 6.3) nu au un punct de referință comun față de care să se
măsoare. Metricile de incidente din subiectul 6.2 sunt, într-un sens real,
registrul cheltuirii bugetului de erori introdus în subiectul 6.1; subiectul
6.3 măsoară sustenabilitatea sistemului uman responsabil să țină acea
cheltuire în limitele bugetului; iar subiectul 6.4 aplică aceeași gândire
bazată pe țintă și buget unei poziții de securitate care, nemăsurată, tinde să
primească atenție doar reactiv, după un incident, nu proactiv.

Această parte se leagă direct de Partea 2: rata de eșec a modificărilor și
timpul de recuperare după o implementare eșuată din DORA (ambele tratate în
subiectul 2.10) sunt, respectiv, un indicator anticipativ pentru metricile de
incidente ale acestei părți și o instanță a lor. Se leagă și înainte, de
Partea 8, unde îndrumarea despre tablouri de bord și despre maturitatea
programului se sprijină mult pe modelul bugetului de erori din această parte,
ca exemplu lucrat de transformare a unui scop abstract (fiabilitate,
securitate) într-o țintă concretă, urmăribilă, neabsolută, pe care o echipă o
poate gestiona efectiv zi de zi.
