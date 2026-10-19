# 9.3 Liste di controllo

Liste di controllo di consultazione rapida e pronte all'uso. Copiane una nel tuo
processo e adattala; il punto è la copertura, non la formulazione esatta.

## Lista di controllo per la revisione di una nuova metrica (prima di aggiungere qualsiasi metrica a una dashboard)

- [ ] La metrica ha una decisione nominata che informa (argomento 1.1)
- [ ] La metrica è classificata come diagnostica o valutativa, per iscritto
      (argomento 1.1)
- [ ] Se incentivata, un guardrail è definito nello stesso momento
      (argomento 1.2)
- [ ] Il vettore di manipolazione è stato nominato: come farebbe un team razionale a
      far apparire bene questo numero senza migliorare il risultato reale (argomento
      1.2)
- [ ] La metrica è classificata come input, output o risultato (argomento 1.3)
- [ ] La metrica ha un responsabile con nome e un sistema sorgente e un metodo di
      raccolta documentati (argomenti 1.4, 1.5)
- [ ] La metrica userà una mediana o un percentile, non una media, se i dati
      sottostanti sono asimmetrici (argomento 1.6)
- [ ] La metrica non è mai usata per la valutazione individuale, oppure tale uso è
      dichiarato separatamente ed esplicitamente (argomento 1.1)

## Lista di controllo per il lancio di una dashboard

- [ ] La dashboard ha un pubblico e una decisione specifici e nominati
      (argomento 8.1)
- [ ] Ogni metrica incentivata compare nella stessa vista del proprio guardrail
      (argomenti 1.2, 8.1)
- [ ] Gli assi partono da zero a meno che sia documentata un'eccezione dichiarata e
      visibile (argomento 1.6)
- [ ] Si mostra il trend nel tempo, non una singola istantanea (argomento 1.6)
- [ ] La dashboard ha un responsabile con nome e una cadenza di revisione
      (argomento 1.4)
- [ ] Una dichiarazione visibile indica per che cosa la dashboard non va usata, se
      rilevante (argomento 1.1)
- [ ] Le fonti di dati hanno controlli di salute di base così che una pipeline rotta
      non venga mostrata in silenzio come attuale (argomento 1.5)

## Lista di controllo per la diffusione del programma di metriche

- [ ] Scopo e non-obiettivi espliciti sono comunicati prima del lancio, non in reazione
      (argomento 8.3)
- [ ] Le persone misurate sono state coinvolte nella scelta delle metriche
      (argomento 8.3)
- [ ] Il programma parte in modalità solo diagnostica, con un periodo minimo di prova a
      cui ci si è impegnati (argomento 8.3)
- [ ] Esiste un protocollo di risposta rapido e visibile per qualsiasi futuro episodio
      di uso improprio (argomento 8.3)
- [ ] È stato scelto un team pilota che si è offerto davvero, non uno imposto
      (argomento 8.5)
- [ ] La governance di base (carta, responsabilità, policy diagnostica) è in atto
      prima che inizi la strumentazione (argomenti 1.4, 8.5)

## Lista di controllo per incidenti e postmortem

- [ ] Il postmortem indaga il sistema, non l'individuo
      (argomento 6.2)
- [ ] La gravità è stata classificata rispetto a criteri documentati e standardizzati
      (argomento 6.2)
- [ ] I tempi di rilevamento, presa in carico e risoluzione sono registrati
      separatamente (argomento 6.2)
- [ ] Le azioni sono specifiche, assegnate e tracciate fino al completamento
      (argomento 6.2)
- [ ] Il postmortem è condiviso senza timore di conseguenze individuali
      (argomenti 6.2, 8.3)

## Lista di controllo per la verifica delle metriche nell'era dell'IA

- [ ] Ogni metrica della dashboard è stata messa alla prova con: «un team che usa
      molto l'assistenza dell'IA ma non produce più valore reale mostrerebbe qui una
      lettura migliorata?» (argomento 7.1)
- [ ] Tasso di fallimento dei cambiamenti e tasso di difetti sono riesaminati accanto a
      qualsiasi aumento della frequenza di rilascio o del volume di commit assistiti
      dall'IA (argomento 7.1)
- [ ] Capacità e profondità della revisione sono monitorate man mano che cambia il
      volume di codice generato dall'IA (argomento 7.1)
- [ ] I difetti sfuggiti sono etichettati per livello di assistenza dell'IA per
      verificare, non presumere, che il rapporto storico del tasso di difetti valga
      ancora (argomenti 7.1, 7.3)
- [ ] Metodi di rilevamento resistenti ai difetti del tipo «sembra corretto» (mutation
      testing, collaudo basato su proprietà) sono in atto per i percorsi di codice ad
      alta intensità di IA (argomento 7.3)
- [ ] La carta delle metriche è stata riesaminata esplicitamente e aggiornata per
      questo cambiamento, non lasciata derivare senza esame (argomenti 1.4, 7.1)

## Lista di controllo per l'audit annuale del programma di metriche

- [ ] Ogni metrica ha ancora un responsabile con nome (argomento 1.4)
- [ ] Almeno una metrica è stata ritirata nell'ultimo ciclo se aveva smesso di
      guadagnarsi il posto (argomento 1.1)
- [ ] La valutazione di maturità a cinque dimensioni è stata condotta con onestà,
      assegnando il punteggio in base al minimo, non alla media (argomento 8.4)
- [ ] Nessuna metrica è derivata dall'uso diagnostico a quello valutativo senza una
      decisione esplicita e dichiarata (argomento 1.1)
- [ ] Le definizioni sono state verificate a campione rispetto alla strumentazione
      effettiva per la deriva (argomenti 1.2, 2.4, 5.1, 6.2, 6.4)
- [ ] Il rapporto tra risultati e output sulle dashboard principali è stato calcolato e
      riesaminato (argomento 7.4)
