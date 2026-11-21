# 7.0 Introducere în Partea 7: Metrici în era IA

Fiecare metrică din această carte, până acum, a fost construită pentru o lume
în care scrisul codului era resursa rară și costisitoare. Instrumentele de IA
generativă au schimbat această premisă mai repede decât au apucat să se
adapteze metricile majorității organizațiilor. Când un instrument poate
produce în câteva secunde un pull request cu aspect plauzibil, mai multe
metrici tratate în părțile anterioare ale cărții încetează să măsoare ceea ce
măsurau înainte: numărătorile de activitate cel mai direct (subiectul 3.4),
iar într-o măsură reală și frecvența brută a implementărilor (subiectul 2.10)
și chiar acoperirea testelor (subiectul 4.2), dacă sunt urmărite
neglijent. Partea aceasta există pentru că un program de metrici care nu ține
seama explicit de această schimbare riscă să raporteze cu încredere cifre
care au devenit pe tăcute lipsite de sens sau, mai rău, activ
contraproductive.

Cele patru subiecte ale acestei părți urmează un arc deliberat. Subiectul 7.1
numește direct schimbarea și explică de ce este o schimbare de paradigmă, nu
un simplu ajustaj incremental. Subiectul 7.2 arată cum să măsori concret dacă
dezvoltarea asistată de IA ajută, folosind disciplina rezultatelor în locul
producției, stabilită în subiectul 1.3 chiar de la începutul cărții.
Subiectul 7.3 numește riscurile noi pe care le aduce această schimbare:
metrici care se umflă fără valoare corespunzătoare și o diluare a calității
care depășește capacitatea actuală a industriei de a o detecta. Subiectul 7.4
încheie partea cu răspunsul cărții la întreaga schimbare: o reorientare
deliberată spre telemetria rezultatelor ca metricile cele mai importante,
tocmai pentru că volumul producției, susține această parte de la un capăt la
altul, nu a fost niciodată lucrul potrivit de optimizat, iar IA generativă a
făcut doar ca acest adevăr să nu mai poată fi ignorat.

Pentru echipele mari, această parte este urgentă, nu speculativă.
Organizațiile mari care adoptă asistenți de programare bazați pe IA la scară
largă trebuie să afle repede dacă metricile lor existente mai înseamnă ce
cred ei că înseamnă. Administrațiile publice, care adesea avansează mai
prudent cu adoptarea IA, dar se confruntă cu aceeași schimbare a
instrumentelor în industria mai largă din care își recrutează oameni și cu
care se compară, au nevoie de îndrumările acestei părți ca să interpreteze
corect reperele din industrie, în timp ce acele repere se mută sub aceeași
presiune.

## Subiectele acestei părți

- **7.1 Schimbarea de paradigmă a IA generative:** De ce este o schimbare
  fundamentală a ceea ce măsoară mai multe metrici existente, nu doar un
  instrument nou de pus în trusă.
- **7.2 Măsurarea dezvoltării software asistate de IA:** Cum măsori dacă
  asistența IA ajută cu adevărat, folosind date despre rezultate, nu volumul
  producției.
- **7.3 Inflația metricilor și riscurile de diluare a calității:** Riscurile
  noi de manipulare și de calitate pe care le aduce această schimbare și cum
  te aperi de ele.
- **7.4 Telemetria rezultatelor ca nouă stea polară:** Răspunsul cărții la
  întreaga schimbare: o reorientare deliberată și permanentă spre metrici de
  rezultat, pe măsură ce producția devine ieftină.

## Cum se leagă aceste subiecte între ele

Subiectul 7.1 stabilește de ce există această parte; subiectul 7.2 oferă
îndrumările practice de măsurare pe care le cere schimbarea; subiectul 7.3
numește modurile specifice de eșec de care o organizație trebuie să se apere
pe măsură ce adoptă dezvoltarea asistată de IA; iar subiectul 7.4
generalizează lecția într-un principiu permanent, care supraviețuiește oricărui
instrument sau furnizor anume. Această parte este mai puțin o familie de
metrici de sine stătătoare, așa cum sunt Părțile 2–6, fiecare cu domeniul ei
distinct, și mai mult o lentilă aplicată înapoi asupra întregii cărți: metricile
de activitate, de producție și chiar unele metrici de rezultat din fiecare
subiect anterior trebuie reexaminate prin întrebările acestei părți, pe măsură
ce dezvoltarea asistată de IA devine practică standard, nu excepție.

Această parte se leagă cel mai direct de principiul rezultatelor în locul
producției din subiectul 1.3 și de avertismentul împotriva metricilor de
activitate din subiectul 3.4. Partea de față le tratează pe amândouă ca fiind
corecte de la început, dovedite acum urgent de o schimbare tehnologică, care
face ca opusul lor, măsurarea după volum, să fie activ periculos, nu doar
suboptim. Ea pregătește și îndrumările practice ale Părții 8 despre
construirea unui program de metrici, deoarece un tablou de bord proiectat
înainte de această schimbare cere o regândire deliberată, nu doar ajustări
incrementale, în lumina celor tratate aici.
