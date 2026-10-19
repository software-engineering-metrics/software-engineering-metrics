# 9.2 Riferimento per definizioni e formule delle metriche

Ogni formula del libro, raccolta in un unico posto. Ogni voce indica l'argomento con la
trattazione completa, incluso il suo rischio di manipolazione e il suo guardrail. Usalo
come consultazione rapida, non come sostituto dell'argomento stesso.

## Metriche di flusso (Parte 2)

| Metrica | Formula | Argomento |
| --- | --- | --- |
| Flow Velocity | Numero di flow item completati per unità di tempo | 2.3 |
| Flow Distribution | (Item completati di un tipo di flow item) / (Totale degli item completati) x 100% | 2.3 |
| Flow Time | Tempo da quando un flow item entra nel flusso di valore alla sua consegna | 2.4 |
| Flow Load | Numero di flow item attualmente attivi o in attesa nel flusso di valore | 2.4 |
| Legge di Little | Flow Load (lavoro in corso) = Tasso di arrivo x Flow Time (cycle time) | 2.4, 2.7 |
| Flow Efficiency | Tempo di lavoro attivo / Tempo totale trascorso x 100% | 2.5 |
| Cycle time | Somma delle durate delle fasi: scrittura del codice + presa in carico + revisione + test + rilascio | 2.6 |
| Utilizzo | Tasso di arrivo / Tasso di servizio | 2.7 |
| Percentuale completa e accurata (%C/A) | (Unità utilizzabili a valle senza rifacimento) / (Totale delle unità) x 100% | 2.8 |
| Rolled throughput yield | %C/A della fase 1 x %C/A della fase 2 x ... x %C/A della fase N | 2.8 |
| Takt time | Tempo di lavoro disponibile / Domanda dei clienti in quel periodo | 2.8 |
| Tempo alla prima revisione | Tempo da quando la pull request viene aperta alla prima risposta sostanziale di un revisore | 2.9 |
| Frequenza di rilascio | Numero di rilasci riusciti in produzione per unità di tempo | 2.10 |
| Lead time dei cambiamenti | Tempo dal primo commit al rilascio riuscito in produzione (riportare mediana e 90° percentile) | 2.10 |
| Tasso di fallimento dei cambiamenti | (Rilasci che causano un guasto) / (Totale dei rilasci) x 100% | 2.10 |
| Tempo di ripristino dopo un rilascio fallito | Tempo dal rilevamento del guasto al genuino ripristino del servizio | 2.10 |

## Esperienza degli sviluppatori (Parte 3)

| Metrica | Formula | Argomento |
| --- | --- | --- |
| Tempo di concentrazione (focus time) | Numero e durata dei blocchi ininterrotti di due o più ore a settimana, dai dati di calendario | 3.6 |
| Tasso di risposta | (Risposte al sondaggio ricevute) / (Inviti al sondaggio inviati) x 100% | 3.7 |

## Codice e qualità (Parte 4)

| Metrica | Formula | Argomento |
| --- | --- | --- |
| Complessità ciclomatica | Percorsi indipendenti nel flusso di controllo (archi − nodi + 2, secondo McCabe) | 4.1 |
| Copertura dei test | (Righe/rami eseguiti dai test) / (Totale righe/rami) x 100% | 4.2 |
| Tasso di uccisione dei mutanti | (Mutanti uccisi dalla suite di test) / (Totale dei mutanti introdotti) x 100% | 4.2 |
| Code churn | Righe aggiunte + modificate + eliminate per file in una finestra di tempo | 4.3 |
| Punteggio di hotspot | Churn x Complessità, ordinato per file | 4.3 |
| Costo di mantenimento del debito | Costo continuo stimato del non correggere una voce (lavoro correlato più lento, rischio di difetti elevato) | 4.5 |

## Prodotto e business (Parte 5)

| Metrica | Formula | Argomento |
| --- | --- | --- |
| Tasso di difetti sfuggiti | (Difetti sfuggiti pesati per gravità) / (Unità di consegna o di tempo) | 5.1 |
| Adozione iniziale | (Utenti che hanno provato la funzionalità almeno una volta) / (Pubblico di destinazione) x 100% | 5.2 |
| Adozione trattenuta | (Utenti che usano ancora la funzionalità dopo N settimane) / (Utenti che l'hanno provata inizialmente) x 100% | 5.2 |
| Costo unitario | Costo totale (personale + infrastruttura + strumenti) / Unità significativa (cliente, transazione) | 5.4 |
| ROI | (Beneficio totale − Costo totale di proprietà) / Costo totale di proprietà, presentato come intervallo | 5.5 |

## Affidabilità, operatività e sicurezza (Parte 6)

| Metrica | Formula | Argomento |
| --- | --- | --- |
| Error budget | (1 − obiettivo SLO) x Finestra di tempo (per esempio, lo 0,1% di 30 giorni ≈ 43 minuti) | 6.1 |
| Velocità di consumo dell'error budget (burn rate) | Error budget consumato / Error budget assegnato, in una data finestra | 6.1 |
| MTTD | Tempo dall'inizio dell'incidente al rilevamento | 6.2 |
| MTTA | Tempo dalla notifica dell'incidente alla presa in carico | 6.2 |
| MTTR (incidente) | Tempo dalla presa in carico al genuino ripristino del servizio | 6.2 |
| Distribuzione delle chiamate di reperibilità | Chiamate ricevute per individuo, su una finestra mobile (non la media del team) | 6.3 |
| Tempo di rimediazione delle vulnerabilità | Tempo dalla scoperta alla genuina rimediazione, tracciato per gravità | 6.4 |

## Note sull'uso di queste formule

- **Abbina sempre una formula di velocità o di output al suo guardrail** (argomento
  1.2): il tasso di fallimento dei cambiamenti con frequenza di rilascio e lead time; il
  tasso di difetti sfuggiti con la velocità di consegna; il consumo dell'error budget con
  l'attività di rilascio.
- **Usa mediane e percentili, non medie, per le formule basate sul tempo** (argomento
  1.6) a meno che una formula richieda esplicitamente una media.
- **Ogni formula richiede un sistema sorgente e un metodo di raccolta documentati**
  (argomento 1.5) accanto alla sua definizione matematica; due team che calcolano la
  stessa formula da fonti diverse non produrranno numeri confrontabili.
- **La pesatura per gravità non è mostrata esplicitamente in ogni formula sopra** ma si
  applica ovunque compaia «pesato per gravità»; vedi l'argomento pertinente per lo
  schema di classificazione completo.
