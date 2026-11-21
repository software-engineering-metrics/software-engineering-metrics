# 4.0 Introducere în Partea 4: Metrici de cod și calitate

Părțile 2 și 3 au măsurat cum se mișcă munca și cum o duc oamenii care o
produc. Această parte se întoarce spre artefactul însuși: codul și ceea ce o
metrică poate și nu poate să-ți spună despre calitatea lui. Metricile de
calitate a codului au cea mai lungă istorie dintre toate familiile de metrici
din această carte, complexitatea ciclomatică datează din 1976, și cea mai
lungă istorie de utilizare abuzivă, pe măsură. Această parte tratează serios
acea istorie: fiecare subiect numește un semnal cu adevărat util, alături de
modul specific și bine documentat în care acel semnal este manipulat odată ce
devine țintă.

Firul roșu care leagă aceste șase subiecte este că nicio metrică de cod nu
surprinde singură calitatea, iar câteva dintre cele mai populare induc activ
în eroare când sunt urmărite izolat. Un procent mare de acoperire a testelor
poate coexista cu teste care nu verifică nimic semnificativ. Un scor mic de
complexitate poate coexista cu un cod simplu din punct de vedere tehnic, dar
incoerent conceptual. Subiectele acestei părți își asociază fiecare metrica
principală cu verificarea complementară care prinde punctul ei orb specific:
complexitatea cu contextul de mentenabilitate, acoperirea cu testarea prin
mutații, volatilitatea cu analiza punctelor fierbinți, analiza statică cu
judecata umană, iar datoria tehnică cu remedierea prioritizată, în loc de o
restanță mereu în creștere și neiubită.

Pentru echipele mari, metricile de cod și de calitate sunt ceea ce face posibilă
gestionarea unei baze de cod prea mari pentru ca vreo persoană să o țină în
cap. O echipă de cinci oameni se poate sprijini pe cunoștințele tacite comune
despre ce părți ale sistemului sunt fragile; o organizație de cinci sute de
ingineri, întinsă pe zeci de servicii, are nevoie de semnale instrumentate
pentru a găsi sistematic acea fragilitate. Companiile mari și administrațiile
publice, care poartă adesea baze de cod măsurate în decenii, nu în ani, depind
de metricile acestei părți pentru a prioritiza unde va face cel mai mult bine
o investiție limitată în mentenanță.

## Subiectele din această parte

- **4.1 Metrici de complexitate a codului:** Complexitatea ciclomatică și rudele
  ei, ce prezic de fapt și riscul lor bine documentat de manipulare.
- **4.2 Acoperirea testelor și eficacitatea testelor:** De ce un procent de
  acoperire spune mai puțin decât pare și cum închide testarea prin mutații
  acest decalaj.
- **4.3 Volatilitatea codului și analiza punctelor fierbinți:** Găsirea
  fracțiunii mici și precise dintr-o bază de cod, responsabilă pentru o pondere
  disproporționată a defectelor și a costurilor de mentenanță.
- **4.4 Analiza statică și metrici de mirosuri de cod:** Semnalele automate de
  calitate a codului, valoarea lor reală și limitele lor în fața judecății
  umane.
- **4.5 Măsurarea datoriei tehnice:** Transformarea unei datorii invizibile,
  discutate informal, într-un portofoliu vizibil, prioritizat și gestionabil.
- **4.6 Metrici de documentație și cunoaștere:** Măsurarea dacă documentația
  ajută cu adevărat, nu doar dacă există.

## Cum se leagă aceste subiecte între ele

Aceste șase subiecte construiesc de la cea mai mică unitate de cod spre
exterior. Subiectul 4.1 începe la nivelul unei singure funcții sau metode;
subiectul 4.2 întreabă dacă testele verifică într-adevăr comportamentul acelei
unități; subiectul 4.3 se îndepărtează pentru a găsi ce fișiere și module din
toată baza de cod merită atenție mai întâi; subiectul 4.4 adaugă stratul de
unelte automate care scanează continuu totul; subiectul 4.5 transformă
constatările acumulate din toate patru într-o restanță gestionată și
prioritizată, în loc de o grijă difuză și neabordată; iar subiectul 4.6 încheie
partea măsurând dacă cunoștințele necesare pentru a întreține în siguranță
toate acestea sunt de fapt documentate și ușor de găsit.

Această parte se leagă direct înapoi de metricile de stabilitate din Partea 2:
rata de eșec a modificărilor (subiectul 2.10) este, în mare măsură, o
consecință în aval a calității codului pe care această parte o măsoară în
amonte. Se leagă și înainte, de metricile de produs din Partea 5, deoarece
defectele scăpate (subiectul 5.1) sunt frecvent atribuibile exact punctelor
fierbinți de complexitate și golurilor de acoperire pe care această parte este
construită să le scoată la iveală înainte ca ele să ajungă deloc în producție.
