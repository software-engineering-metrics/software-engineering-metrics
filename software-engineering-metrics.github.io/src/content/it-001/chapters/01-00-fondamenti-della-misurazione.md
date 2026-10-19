# 1.0 Introduzione alla Parte 1: Fondamenti della misurazione

Prima di nominare una sola metrica, questo libro deve rispondere a una domanda
più difficile: a *cosa serve* misurare? Ogni team che ha costruito una
dashboard ha anche, prima o poi, visto un numero migliorare mentre la cosa che
avrebbe dovuto rappresentare peggiorava. Non è un fallimento degli strumenti.
È il risultato prevedibile di aver saltato i fondamenti trattati in questa
parte: perché si misura, che cosa succede a una metrica quando le persone sanno
di essere osservate, come dare più peso ai risultati che all'attività, a chi
appartiene un numero e la sua definizione, da dove arrivano davvero i dati e
come leggere un segnale rumoroso senza ingannare se stessi.

Per i team grandi questi fondamenti smettono di essere facoltativi. Un singolo
team può cavarsela con un numero improvvisato che un manager guarda una volta
alla settimana. Un'organizzazione con centinaia di ingegneri, decine di
dashboard e una dirigenza che riferisce verso l'alto no. A quella scala, una
metrica senza responsabile o definita male non inganna soltanto un team:
inganna tutti coloro che stanno a valle e si fidano del numero senza verificare
come è stato costruito, ed è costoso rimediare una volta che i comportamenti si
sono adattati per manipolarlo.

Le organizzazioni enterprise e governative lo avvertono più di tutte, perché le
loro metriche spesso hanno conseguenze che vanno oltre il team che le produce:
decisioni di budget, rapporti pubblici sulle prestazioni, rilievi di audit e
contratti con i fornitori. Una metrica che sembra una comodità interna
dell'ingegneria può diventare in silenzio un input critico e indiscusso per
decisioni prese da persone che non vedono mai la pipeline che l'ha generata.
Mettere a posto i fondamenti è ciò che rende sostenibile quel peso.

## Argomenti di questa parte

- **1.1 Perché misurare l'ingegneria del software:** Le ragioni per misurare,
  che cosa la misurazione dovrebbe ottenere e la differenza tra misurare per
  imparare e misurare per giudicare.
- **1.2 La legge di Goodhart e la psicologia delle metriche:** L'idea unica che
  governa ogni altro argomento di questo libro: una misura che diventa un
  obiettivo smette di essere una buona misura, e i meccanismi psicologici che
  rendono la manipolazione quasi inevitabile quando le persone sanno di essere
  osservate.
- **1.3 Risultati prima dell'output: scegliere che cosa misurare:** Come
  orientare un insieme di metriche verso i risultati anziché l'attività,
  usando la classica distinzione tra input, output e risultato (outcome) e il
  modello della stella polare.
- **1.4 Governance e responsabilità delle metriche:** Chi decide che cosa si
  misura, a chi appartiene una definizione e come una carta delle metriche
  evita che una dashboard in crescita diventi un groviglio senza responsabili.
- **1.5 Fonti di dati e strumentazione:** Da dove arrivano davvero le metriche
  di ingegneria, strumentazione contro autodichiarazione e i problemi di
  qualità dei dati che invalidano in silenzio una dashboard prima che qualcuno
  se ne accorga.
- **1.6 Alfabetizzazione statistica per le metriche di ingegneria:** Il minimo
  di giudizio statistico necessario a un team per leggere una metrica con
  onestà: percentili contro medie, dimensione del campione, regressione verso
  la media e variabili di confondimento.

## Come si collegano tra loro questi argomenti

Questi sei argomenti si costruiscono in un ordine rigoroso. L'argomento 1.1
chiede perché misurare, il che conta perché un team che non ha risposto
raccoglierà numeri su cui nessuno agisce. L'argomento 1.2 è il perno su cui
gira il resto del libro: una volta accettato che qualsiasi misura può diventare
un obiettivo ed essere manipolata, le raccomandazioni di ogni argomento
successivo discendono dal progettare contro quel rischio. L'argomento 1.3
trasforma quella cautela in una regola positiva: dare peso ai risultati,
perché sono la categoria più difficile da manipolare a basso costo.
L'argomento 1.4 rende concreta la governance, l'argomento 1.5 rende concreti i
dati e l'argomento 1.6 ti dà il giudizio statistico per non farti ingannare dal
rumore anche quando governance e strumentazione sono solide.

Tutto ciò che sta a valle dipende da questa parte. Le metriche di flusso e le
metriche DORA della Parte 2, e il framework SPACE della Parte 3, sono in
sostanza esempi svolti dei principi di ponderazione sui risultati e di
abbinamento ai guardrail esposti negli argomenti 1.2 e 1.3. La guida alla
progettazione delle dashboard dell'argomento 8.1 presuppone il modello di
governance dell'argomento 1.4. E il modello di maturità che chiude ogni
argomento di questo libro è, sotto i suoi cinque livelli, un modello di
maturità per la disciplina che questa parte introduce: misurare come se si
facesse sul serio e controllare il proprio lavoro.
