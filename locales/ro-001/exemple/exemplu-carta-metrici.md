# Exemplu: cartă a metricilor pentru o echipă de platformă de plăți

Un exemplu rezolvat de cartă a metricilor, documentul de o pagină descris în [subiectul 1.4, Guvernanța și responsabilitatea metricilor](../subiecte/01-04-guvernanta-si-responsabilitatea-metricilor.md). Contează forma: un scop declarat, un non-obiectiv explicit, responsabili numiți și un ritm de revizuire. O cartă atât de scurtă este făcută ca să fie citită, nu arhivată.

- **Echipa:** Platforma de plăți
- **Responsabil:** Managerul de inginerie al platformei
- **Revizuită:** Trimestrial, la revizuirea platformei

## Scop

Această cartă guvernează metricile pe care echipa platformei de plăți le urmărește despre propria livrare și fiabilitate. Există pentru ca toată lumea, din echipă și din afara ei, să vadă ce se măsoară, de ce și pentru ce nu se folosește.

## Ce urmărim

| Metrică | Sursa de adevăr | Responsabil |
| --- | --- | --- |
| Frecvența implementărilor | Pipeline CI/CD | Liderul platformei |
| Timpul de livrare al modificărilor | Git plus pipeline-ul de implementare | Liderul platformei |
| Rata de eșec a modificărilor | Instrumentul de incidente, etichetat pe implementare | Liderul gărzii |
| Timpul de recuperare după o implementare eșuată | Instrumentul de incidente | Liderul gărzii |
| Latența API la P99 (SLI) | Platforma de observabilitate | Liderul SRE |
| Consumul bugetului de erori | Platforma de observabilitate | Liderul SRE |

## Non-obiective

Aceste metrici nu se folosesc niciodată, individual sau în combinație, pentru a clasifica ingineri, a evalua performanța în evaluările anuale sau a compara această echipă cu foaia de parcurs a altei echipe fără a compara și domeniul, personalul și maturitatea sistemului. Orice folosire în afara scopului de mai sus cere acordul directorului de inginerie și al echipei înseși.

## Gărzi de protecție

Orice metrică de mai sus care atrage un stimulent este asociată cu o gardă de protecție. Timpul de livrare al modificărilor este urmărit împreună cu rata de eșec a modificărilor, ca echipa să nu-și poată îmbunătăți cifra de viteză livrând modificări mai riscante. Frecvența implementărilor este urmărită împreună cu consumul bugetului de erori, din același motiv.

## Ritmul de revizuire

Echipa revizuiește această cartă în fiecare trimestru. O metrică care nu a schimbat nicio decizie în două trimestre consecutive este candidată la retragere.
