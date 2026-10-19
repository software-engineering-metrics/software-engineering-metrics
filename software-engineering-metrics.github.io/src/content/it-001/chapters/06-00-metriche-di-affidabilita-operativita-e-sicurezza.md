# 6.0 Introduzione alla Parte 6: Metriche di affidabilità, operatività e sicurezza

La Parte 2 ha trattato come una modifica arrivi dal commit alla produzione; questa
parte tratta ciò che accade una volta che è in esecuzione, a tempo indeterminato, in
condizioni reali che il team non può controllare del tutto. Le metriche di
affidabilità, operatività e sicurezza sono dove le promesse dell'ingegneria del
software incontrano la realtà prolungata: non «questo rilascio è riuscito» ma «questo
sistema continua a funzionare, notte dopo notte, sotto carico, sotto attacco e sotto la
pressione di una rotazione di reperibilità che deve essere sostenibile per anni, non
solo fino al prossimo incidente».

I quattro argomenti di questa parte seguono un arco deliberato. Gli indicatori e gli
obiettivi di livello di servizio (argomento 6.1) stabiliscono il vocabolario e la
disciplina di definizione degli obiettivi da cui dipende tutto il resto di questa
parte. Le metriche degli incidenti (argomento 6.2) misurano ciò che accade quando
quell'obiettivo viene mancato. Le metriche di reperibilità e capacità (argomento 6.3)
misurano il costo umano e infrastrutturale di mantenere l'obiettivo raggiunto. Le
metriche di sicurezza e di vulnerabilità (argomento 6.4) estendono la stessa disciplina
di affidabilità a un rischio distinto ma strettamente correlato: non «questo si
guasterà da solo» ma «qualcuno lo farà guastare di proposito». Tutti e quattro gli
argomenti condividono la disciplina centrale di questo libro: nominare la metrica,
indicare come viene manipolata e abbinarla al guardrail che intercetta quella
manipolazione.

Per i team grandi, le metriche di questa parte sono dove le promesse dell'ingegneria
diventano contrattuali e, nei contesti governativi, a volte legali. Le organizzazioni
enterprise scrivono accordi sul livello di servizio basati sulle metriche che
l'argomento 6.1 introduce, con vere penali finanziarie per il mancato rispetto; le
organizzazioni governative gestiscono infrastrutture pubbliche critiche dove un
guasto di affidabilità o di sicurezza ha conseguenze ben oltre il bilancio di una
singola azienda. Questa parte tratta quel peso con serietà in tutto il suo svolgimento.

## Argomenti di questa parte

- **6.1 Indicatori di livello di servizio, obiettivi ed error budget:** Il vocabolario
  e la disciplina di definizione degli obiettivi che stanno alla base di tutta
  l'ingegneria dell'affidabilità dei siti, e come un error budget trasformi
  l'affidabilità in una risorsa spendibile e gestibile anziché in un assoluto
  irraggiungibile.
- **6.2 Metriche degli incidenti: rilevamento, risposta e ripristino:** Misurare
  quanto in fretta un'organizzazione si accorge di un guasto, vi risponde e lo
  risolve, e la disciplina senza colpa che mantiene onesta quella misurazione.
- **6.3 Metriche di reperibilità, capacità e carico operativo:** Il costo umano e
  infrastrutturale di sostenere l'affidabilità, e perché un onere di reperibilità
  insostenibile finisca per manifestarsi esso stesso come problema di affidabilità.
- **6.4 Metriche di sicurezza e di gestione delle vulnerabilità:** Estendere lo
  stesso approccio disciplinato e abbinato ai guardrail al rischio di sicurezza, dalla
  scoperta delle vulnerabilità alla loro rimediazione.

## Come si collegano tra loro questi argomenti

L'argomento 6.1 pone le fondamenta su cui si costruisce ogni argomento successivo di
questa parte: senza un chiaro obiettivo di livello di servizio, «quanto era grave
questo incidente» (argomento 6.2) e «il nostro carico di reperibilità è sostenibile»
(argomento 6.3) non hanno un punto di riferimento condiviso con cui misurarsi. Le
metriche degli incidenti dell'argomento 6.2 sono, in senso reale, il registro della
spesa di error budget che l'argomento 6.1 introduce; l'argomento 6.3 misura la
sostenibilità del sistema umano responsabile di mantenere quella spesa entro il
budget; e l'argomento 6.4 applica lo stesso ragionamento per obiettivo e budget a una
postura di sicurezza che, lasciata non misurata, tende a ricevere attenzione solo in
reazione, dopo un incidente, anziché in modo proattivo.

Questa parte si ricollega direttamente alla Parte 2: il tasso di fallimento dei
cambiamenti e il tempo di ripristino dopo un rilascio fallito di DORA (entrambi
trattati nell'argomento 2.10) sono, rispettivamente, un indicatore anticipatore delle
metriche degli incidenti di questa parte e un loro caso. Si collega anche in avanti
alla Parte 8, dove le indicazioni su dashboard e maturità del programma attingono
molto al modello di error budget di questa parte come esempio svolto di come
trasformare un obiettivo astratto (affidabilità, sicurezza) in un traguardo concreto,
tracciabile e non assoluto che un team può davvero gestire giorno per giorno.
