# 2.0 Introduzione alla Parte 2: Metriche di flusso

Se la Parte 1 è la filosofia della misurazione, la Parte 2 è il punto in cui
quella filosofia incontra la consegna vera e propria: le metriche che
descrivono non solo quanto velocemente e quanto in sicurezza un team porta il
codice da un'idea a un sistema in esecuzione, ma anche che tipo di valore sta
scorrendo in quella pipeline. Questa parte è organizzata attorno al **Flow
Framework**, un modello creato da Mik Kersten nel suo libro del 2018 *Project
to Product* che tratta la consegna del software come un flusso di valore (value
stream) e gli dà un vocabolario condiviso: quattro tipi di flow item e cinque
metriche di flusso che collegano l'attività di ingegneria alla strategia
aziendale in termini che uno stakeholder non tecnico può effettivamente
usare.

Quella scelta di framework organizzativo è deliberata. Le metriche DORA,
frequenza di rilascio, lead time, tasso di fallimento dei cambiamenti e tempo di
ripristino, sono davvero convalidate dalla ricerca e restano uno dei framework
di consegna meglio documentati disponibili, ma misurano la meccanica della
pipeline, non ciò che vi scorre dentro. Un team può registrare ottimi numeri DORA
mentre il suo valore effettivamente consegnato è scivolato in silenzio verso il
rifacimento o lontano dal lavoro su debito e rischio che protegge il futuro di un
sistema. Questa parte copre DORA per intero, ma come singolo argomento di
riferimento consolidato alla fine (argomento 2.10), perché la domanda più urgente
e più spesso mancante per la maggior parte delle organizzazioni non è «quanto è
veloce la nostra pipeline» ma «che cosa sta davvero consegnando la nostra
pipeline». Ogni argomento di questa parte segue comunque la stessa disciplina
stabilita nella Parte 1: enunciare la metrica, indicare come viene manipolata e
abbinarla al guardrail che intercetta quella manipolazione.

Per i team grandi, le metriche di flusso sono ciò che rende possibile il
confronto tra team senza perdere di vista il valore. Un team di piattaforma, un
team mobile e un team dati possono non avere quasi nulla in comune nel lavoro di
ogni giorno, ma Flow Velocity e Flow Distribution, calcolate in modo coerente,
permettono alla dirigenza di porre una domanda equa su tutti e tre: questo team
sta consegnando il tipo di valore che la sua fase attuale richiede davvero. Le
organizzazioni enterprise e governative si affidano alle metriche di questa parte
per giustificare l'investimento in piattaforme, per confrontare il ritorno di
iniziative di modernizzazione concorrenti e per dimostrare, con prove anziché
aneddoti, che la capacità di ingegneria è allocata nel modo in cui la dirigenza
crede.

## Argomenti di questa parte

- **2.1 Il Flow Framework:** L'origine del framework, il suo modello di flusso di
  valore e il motivo per cui questo libro lo usa, anziché il solo DORA, per
  organizzare le metriche di consegna e di flusso.
- **2.2 Flow item: funzionalità, difetti, rischi e debito:** La tassonomia a
  quattro tipi del framework, la sua allocazione della capacità a somma zero e
  come la classificazione venga manipolata se applicata a posteriori.
- **2.3 Flow Velocity e Flow Distribution:** Quanto è stato rilasciato e che tipo
  di valore fosse, sempre letti insieme.
- **2.4 Flow Time e Flow Load:** Come la legge di Little dimostra che un flusso di
  valore sovraccarico rallenta matematicamente, non soltanto probabilmente.
- **2.5 Flow Efficiency e lavoro in corso:** Perché essere occupati non è la
  stessa cosa che essere veloci, e come limitare il lavoro in corso migliori il
  throughput in modo controintuitivo.
- **2.6 Cycle time e le sue componenti:** Scomporre il tempo di ingegneria di un
  cambiamento nelle fasi che lo compongono, così che un team sappia esattamente
  dove va a finire il tempo.
- **2.7 Teoria delle code:** La matematica che sta sotto Flow Load, Flow Time,
  cycle time e lavoro in corso, e perché il tempo di attesa su una risorsa
  condivisa esploda quando l'utilizzo si avvicina al limite.
- **2.8 Metriche Lean del flusso di valore:** Il classico strumentario Lean, lead
  time, process time, cycle time, percentuale completa e accurata e takt time,
  da cui discendono le metriche specifiche per il software di questa parte, e
  come fare da ponte tra i due vocabolari.
- **2.9 Metriche di pull request e revisione del codice:** Le metriche che vivono
  all'interno di una singola fase della pipeline di consegna, e come possano
  distorcere la qualità della revisione se usate con leggerezza.
- **2.10 Il framework delle metriche DORA:** Le quattro metriche DORA per intero,
  collocate per ultime di proposito perché misurano la pipeline, non il valore
  che vi scorre.

## Come si collegano tra loro questi argomenti

L'argomento 2.1 introduce il Flow Framework nel suo insieme; l'argomento 2.2 ne
dà la tassonomia dei flow item, e gli argomenti 2.3 e 2.4 coprono tra loro le
cinque metriche di flusso, velocity e distribution insieme, poi time e load
insieme, con load e time legati direttamente alla legge di Little. Gli argomenti
dal 2.5 al 2.7 ingrandiscono la meccanica che sta sotto Flow Time e cycle time in
particolare: Flow Efficiency e lavoro in corso spiegano perché le fasi di
ingegneria sono spesso più lente di quanto appaiano, il cycle time scompone
quella parte di ingegneria nelle sue fasi, e la teoria delle code formalizza, in
termini matematici dimostrabili, perché tutte le affermazioni degli argomenti
precedenti su carico, tempo di attesa e utilizzo siano vere. L'argomento 2.8 fa
un passo indietro per ricondurre il tutto alla sua origine nella classica mappatura
del flusso di valore Lean, il vocabolario comune da cui le metriche specifiche per
il software di questa parte si generalizzano. L'argomento 2.9 copre l'unica fase
della pipeline che la maggior parte dei team può migliorare più in fretta.
L'argomento 2.10 chiude la parte con le metriche DORA per intero, presentate come
uno strato di riferimento ben documentato ma più ristretto, una volta che il
quadro più ampio e orientato al business degli argomenti precedenti è già in
vista.

La disciplina dei guardrail di questa parte si collega direttamente all'argomento
1.2: la Flow Velocity non viene mai riportata senza la Flow Distribution accanto,
e le metriche di velocità di DORA restano abbinate alle sue metriche di
stabilità, così che un team non possa migliorare un numero di velocità
rilasciando in silenzio codice più rischioso o un mix di valore più ristretto.
Quell'abbinamento non è incidentale per nessuno dei due framework; è l'intuizione
centrale di ciascuno, e le metriche di affidabilità della Parte 6 estendono la
stessa metà di stabilità di quell'abbinamento alle operazioni di produzione una
volta che il codice è già stato rilasciato.
