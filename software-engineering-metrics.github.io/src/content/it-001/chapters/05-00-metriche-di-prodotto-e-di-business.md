# 5.0 Introduzione alla Parte 5: Metriche di prodotto e di business

Le prime quattro parti di questo libro misurano il mondo interno dell'ingegneria:
consegna, esperienza degli sviluppatori e qualità del codice. Questa parte esce da
quel confine e pone la domanda al servizio della quale esiste in ultima analisi ogni
metrica di ingegneria, direttamente o a qualche passaggio di distanza: questo lavoro
ha davvero aiutato l'azienda e le persone che usano ciò che essa costruisce? L'argomento
1.3 ha stabilito all'inizio di questo libro i risultati prima dell'output come
principio guida; questa parte è dove quel principio incontra la sua prova più dura,
perché i risultati di prodotto e di business sono i più lontani dal controllo diretto
di un singolo ingegnere e i più difficili da ricondurre con nettezza allo sforzo di
ingegneria.

Quella difficoltà è esattamente il motivo per cui questa parte conta. Un'organizzazione
che non collega mai le proprie metriche di consegna e di qualità ai risultati di
prodotto e di business rischia di ottimizzare splendidamente la cosa sbagliata:
rilasciare in fretta, con un'ottima copertura dei test, una funzionalità che nessuno
usa, o mantenere una qualità del codice immacolata in un sistema la cui proposta di
valore centrale ha smesso in silenzio di contare per i clienti. I cinque argomenti di
questa parte, difetti sfuggiti, adozione delle funzionalità, risultati per clienti e
business, economia unitaria e ritorno sull'investimento, danno alla dirigenza di
ingegneria un vocabolario per quel collegamento, e danno alla dirigenza di business un
modo di valutare l'investimento in ingegneria in termini che contano davvero per essa.

Per i team grandi, questa parte è spesso dove si vince o si perde con gli stakeholder
esecutivi la credibilità di un intero programma di metriche. La dirigenza enterprise
che approva investimenti in piattaforme da molti milioni, e gli organi di controllo
governativi che approvano budget tecnologici pubblici, hanno entrambi bisogno di
risposte formulate in termini di risultati per il business o per i cittadini, non di
frequenza di rilascio o copertura dei test, per quanto bene quelle metriche interne
possano essere gestite. Questa parte è dove le metriche accuratamente protette dai
guardrail del resto del libro si collegano finalmente a quella conversazione esterna e
orientata ai risultati.

## Argomenti di questa parte

- **5.1 Tasso di difetti sfuggiti e fughe di qualità:** La metrica di qualità che
  riflette più direttamente ciò che i clienti sperimentano davvero, distinta dalle
  metriche interne di qualità della Parte 4.
- **5.2 Metriche di adozione e utilizzo delle funzionalità:** Se ciò che
  l'ingegneria ha costruito viene davvero usato, e i modi specifici in cui i dati di
  adozione vengono fraintesi.
- **5.3 Metriche dei risultati per clienti e business:** Collegare il lavoro di
  ingegneria ai risultati che un'azienda o una missione pubblica ha davvero a cuore.
- **5.4 Costi ed economia unitaria dell'ingegneria:** Esprimere il costo
  dell'ingegneria in termini che uno stakeholder finanziario possa usare
  direttamente.
- **5.5 Ritorno sull'investimento per le iniziative di ingegneria:** Costruire un
  caso di ROI difendibile e onesto per un grande investimento di ingegneria, ed
  essere altrettanto onesti quando il caso non regge.

## Come si collegano tra loro questi argomenti

L'argomento 5.1 parte dal punto più vicino a casa, la qualità come i clienti la
sperimentano direttamente, ed è il ponte naturale dalle metriche interne di qualità
della Parte 4. L'argomento 5.2 pone la domanda successiva una volta contabilizzata la
qualità: qualcuno usa davvero ciò che è stato costruito? L'argomento 5.3 allarga
ulteriormente la lente all'intera gamma di risultati per clienti e business a cui
un'organizzazione tiene, di cui l'utilizzo è solo un segnale tra diversi. Gli
argomenti 5.4 e 5.5 rendono poi finanziaria l'intera parte: esprimere costo e ritorno
dell'ingegneria in termini che si collegano direttamente alle decisioni di budget e di
investimento, chiudendo il cerchio che questa parte ha aperto chiedendo se lo sforzo
di ingegneria abbia davvero aiutato.

Gli argomenti di questa parte si appoggiano in modo particolare sull'alfabetizzazione
statistica dell'argomento 1.6, dato che i risultati di prodotto e di business sono
spesso rumorosi, confusi dalle condizioni di mercato e lenti da confermare, proprio le
condizioni in cui gli errori da cui l'argomento 1.6 mette in guardia hanno più
probabilità di produrre una conclusione sicura e sbagliata. Leggi questa parte
accanto alla Parte 7, dove il passaggio all'IA generativa alza la posta in gioco nel
misurare bene i risultati proprio perché il volume di output, come sostengono gli argomenti di questa parte,
non è mai stato la cosa giusta da ottimizzare.
