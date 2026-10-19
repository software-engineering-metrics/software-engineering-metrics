# 3.0 Introduzione alla Parte 3: Esperienza degli sviluppatori e framework SPACE

La Parte 2 ha misurato la consegna dall'esterno: quanto velocemente e quanto in
sicurezza il codice attraversa una pipeline. Questa parte misura l'esperienza delle
persone che producono quel codice, e esiste perché un insieme di metriche di
consegna da solo può sembrare eccellente mentre le persone che stanno dietro si
consumano, annegano nelle interruzioni o si disimpegnano in silenzio. Un'organizzazione
che guarda solo le metriche DORA può migliorarle per un anno o due spremendo di più
un team, fino al momento in cui turnover, crollo della qualità o burnout cancellano
il guadagno tutto in una volta. Questa parte è il contrappeso.

Il fulcro è il [framework SPACE](https://queue.acm.org/detail.cfm?id=3454124),
sviluppato da ricercatori di Microsoft, GitHub e dell'Università di Victoria
specificamente come correttivo all'abitudine del settore di misurare la
produttività degli sviluppatori attraverso un unico proxy facilmente manipolabile,
come le righe di codice o il numero di commit. SPACE copre cinque dimensioni:
soddisfazione e benessere, prestazioni, attività, comunicazione e collaborazione,
ed efficienza e flusso. La disciplina centrale del framework, e la ragione per cui
questa parte lo tratta con lo stesso rigore che la Parte 2 applica alle proprie
metriche di flusso, è che nessuna singola dimensione è affidabile da sola; il
valore viene specificamente dal tenerle tutte e cinque in vista insieme, così che
un team non possa apparire bene su un asse danneggiandone in silenzio un altro.

Per i team grandi, le metriche sull'esperienza degli sviluppatori rispondono a una
domanda a cui DORA non sa rispondere: queste prestazioni di consegna sono
sostenibili, e l'organizzazione sta trattenendo le persone che le producono? Le
organizzazioni enterprise che ignorano questa parte tendono a scoprirne il costo
attraverso i dati sul turnover e i colloqui di uscita, molto dopo che il danno è
fatto; le organizzazioni governative, che spesso operano sotto vincoli retributivi
del settore pubblico che limitano la capacità di competere solo sulla retribuzione,
hanno ragioni particolarmente forti per trattare l'esperienza degli sviluppatori
come una questione di prima classe e gestita attivamente anziché un ripensamento.

## Argomenti di questa parte

- **3.1 Il framework SPACE:** Le cinque dimensioni insieme, perché nessuna è
  affidabile da sola e come costruire da esse un insieme di metriche davvero
  bilanciato.
- **3.2 Metriche di soddisfazione e benessere:** Misurare appagamento, frustrazione
  e rischio di burnout, la dimensione che nessuna telemetria di sistema può
  osservare direttamente.
- **3.3 Metriche di prestazione e proxy dei risultati:** La dimensione più
  facilmente confusa con l'attività, e come misurare invece il genuino contributo
  ai risultati.
- **3.4 Metriche di attività e loro limiti:** Conteggi di commit, righe di codice e
  perché questa è la dimensione più pericolosa da sovrappesare.
- **3.5 Metriche di comunicazione e collaborazione:** Come l'informazione fluisce
  davvero tra persone e team, e che aspetto abbia uno schema sano.
- **3.6 Efficienza e flusso: lavoro profondo e interruzioni:** Proteggere il tempo
  ininterrotto che il vero lavoro di ingegneria richiede, e misurare l'attrito che
  lo erode.
- **3.7 Sondaggi sull'esperienza degli sviluppatori e metriche DevEx:** Come
  condurre un sondaggio che produca un segnale affidabile anziché un concorso di
  popolarità, e come combinarlo con dati oggettivi.

## Come si collegano tra loro questi argomenti

L'argomento 3.1 introduce insieme tutte e cinque le dimensioni SPACE, e gli
argomenti dal 3.2 al 3.6 prendono poi ciascuna dimensione a turno con vera
profondità, nell'ordine in cui i ricercatori di SPACE le presentano. L'argomento
3.7 chiude la parte con la meccanica pratica della progettazione dei sondaggi,
dato che soddisfazione, prestazioni e collaborazione si basano in parte su dati
autodichiarati (la distinzione tra strumentazione e autodichiarazione
dell'argomento 1.5 è direttamente rilevante in tutta questa parte) e un sondaggio
progettato male mina ognuno degli argomenti precedenti.

La disciplina centrale di questa parte, equilibrio tra le dimensioni anziché forza
in una sola, è l'esempio operativo più chiaro di questo libro del principio
dell'argomento 1.3 dei risultati prima dell'output applicato alle persone anziché a
una pipeline di consegna. L'attività (argomento 3.4) è la dimensione SPACE più
analoga a una pura metrica di output, e questa parte la tratta di conseguenza:
utile come input tra cinque, pericolosa come segnale autonomo. Letta accanto alla
Parte 2, questa parte completa il quadro che il solo DORA non può fornire: non solo
se il software viene rilasciato in fretta e in sicurezza, ma se le persone che lo
rilasciano possono sostenere quel ritmo.
