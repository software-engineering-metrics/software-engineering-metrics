# 6.2 Metriche degli incidenti: rilevamento, risposta e ripristino

## Panoramica e motivazione

Questo argomento misura ciò che accade quando l'error budget dell'argomento 6.1 viene
speso attraverso un guasto vero e proprio: un **incidente**, un evento non pianificato
che degrada o interrompe un servizio. Quattro metriche formano il vocabolario standard
per misurare quanto bene un'organizzazione gestisca questa situazione: il **tempo medio
di rilevamento (MTTD, mean time to detect)**, quanto passa prima che l'organizzazione si
accorga che qualcosa non va; il **tempo medio di presa in carico (MTTA, mean time to
acknowledge)**, quanto passa prima che qualcuno si assuma la responsabilità di
rispondere; il **tempo medio di risoluzione** o **ripristino (MTTR)**, quanto passa fino
a che il servizio non è ripristinato, lo stesso concetto che l'argomento 2.10 ha
trattato specificamente per i guasti causati dai rilasci, ora generalizzato a
qualsiasi incidente a prescindere dalla causa; e la **frequenza degli incidenti**,
semplicemente con quale frequenza gli incidenti si verificano.

La preoccupazione centrale di questo argomento, riecheggiando il trattamento del tasso
di fallimento dei cambiamenti dell'argomento 2.10, è che questi numeri sono
affidabili solo quanto la cultura organizzativa attorno al segnalare e classificare gli
incidenti con onestà. Un team che teme la colpa per un incidente ha ogni incentivo a
sottostimare, a ritardare la presa in carico per evitare di essere «sotto il
cronometro» o a classificare un evento grave come minore per proteggere le proprie
metriche. La pratica del **postmortem [senza colpa](https://en.wikipedia.org/wiki/Just_culture)**,
aperta da organizzazioni come Etsy e formalizzata nella letteratura SRE di Google,
esiste proprio per eliminare quell'incentivo, e questo argomento la tratta come un
prerequisito di dati affidabili sugli incidenti, non come una cortesia culturale
facoltativa sovrapposta alle metriche.

Per i team grandi, le metriche degli incidenti rivelano se la capacità di rilevamento
e di risposta di un'organizzazione, gli strumenti di rollback dell'argomento 2.10
tra gli altri investimenti, funzioni davvero in condizioni reali e varie, non solo
nello specifico scenario di guasto causato da un rilascio trattato in quell'argomento.
Le organizzazioni enterprise e governative che gestiscono infrastrutture critiche
dipendono da queste metriche sia internamente, per guidare un reale miglioramento
operativo, sia esternamente, per dimostrare a clienti, enti regolatori o al pubblico
che gli incidenti sono gestiti con competenza e migliorano nel tempo.

## Principi chiave

- **La cultura senza colpa è un prerequisito per dati affidabili sugli incidenti**,
  non un'aggiunta facoltativa; la paura della colpa corrompe allo stesso modo
  segnalazione, rapidità di presa in carico e classificazione della gravità.
- **Rilevamento, presa in carico e risoluzione sono fasi distinte con correzioni
  distinte.** Un tempo di ripristino complessivo lento può nascondere problemi di
  fondo molto diversi a seconda di quale fase sia davvero lenta.
- **Frequenza degli incidenti e MTTR sono un segnale abbinato**, in modo simile al
  tasso di fallimento dei cambiamenti e al tempo di ripristino di DORA (argomento
  2.10): nessuno dei due da solo racconta tutta la storia.
- **La classificazione della gravità richiede lo stesso rigore della classificazione
  dei difetti sfuggiti** (argomento 5.1): criteri coerenti e documentati, non un
  giudizio improvvisato.
- **Il valore di un postmortem sta nell'apprendimento sistemico, non nel produrre un
  numero.** La metrica è un sottoprodotto della buona pratica, non il suo scopo.

## Raccomandazioni

### Scomponi il tempo di risposta agli incidenti nelle sue fasi distinte

Misura e riporta separatamente il tempo di rilevamento (dall'effettivo inizio del
guasto a quando qualcuno se ne accorge), il tempo di presa in carico (dalla notifica a
quando qualcuno si assume la responsabilità) e il tempo di risoluzione (dalla presa in
carico al ripristino genuino), anziché un solo totale misto. Ogni fase indica una
correzione diversa: un rilevamento lento indica una lacuna di monitoraggio e di
allerta, una presa in carico lenta indica un problema di processo di reperibilità o
di escalation, e una risoluzione lenta indica una lacuna di strumenti, runbook o
capacità diagnostica (l'argomento 2.10 lo tratta specificamente per i guasti causati
dai rilasci).

### Costruisci e proteggi un processo di postmortem davvero senza colpa

Un **postmortem senza colpa** indaga che cosa è successo e perché il sistema ha
permesso che accadesse, evitando esplicitamente di attribuire la colpa a un individuo
per un errore che qualsiasi persona ragionevole nelle stesse circostanze, con le stesse
informazioni, avrebbe plausibilmente potuto commettere. Proteggi attivamente questa
disciplina: una dirigenza che dà l'esempio con risposte non punitive agli incidenti,
una policy esplicita e scritta e l'abitudine di chiedere «che cosa del nostro sistema
l'ha permesso» anziché «chi l'ha fatto» sono tutti investimenti necessari e continui,
non una dichiarazione di policy una tantum.

### Classifica la gravità con criteri coerenti, documentati e verificati

Applica alla classificazione della gravità degli incidenti la stessa disciplina che
l'argomento 5.1 raccomanda per i difetti sfuggiti: una scala fissa e documentata basata
sull'impatto effettivo sui clienti o sul business, applicata in modo coerente tra i
team, verificata periodicamente per la deriva. Una classificazione incoerente, alcuni
team larghi, altri severi, rende i dati sugli incidenti a livello di organizzazione
inaffidabili per il confronto quanto lo sarebbero dati sui difetti classificati in modo
incoerente.

### Traccia insieme frequenza degli incidenti e MTTR, mai in isolamento

Un MTTR in miglioramento accanto a una frequenza di incidenti in crescita potrebbe
indicare un team che diventa più bravo a spegnere incendi mentre l'affidabilità
sottostante del sistema peggiora; una frequenza di incidenti in calo accanto a un MTTR
in peggioramento potrebbe indicare guasti più rari ma più gravi e più difficili da
diagnosticare che sostituiscono i frequenti guasti minori. Rivedi entrambi insieme,
rispecchiando esattamente la disciplina di abbinamento tra velocità e stabilità delle
metriche DORA della Parte 2, per ottenere un quadro complessivo onesto.

### Estrai e traccia le azioni sistemiche dai postmortem, non solo le metriche

Il vero valore del processo di postmortem sono le azioni specifiche e sistemiche che
produce: un allarme mancante aggiunto, un runbook migliorato, un singolo punto di
guasto rimosso. Traccia queste azioni fino al completamento con la stessa disciplina
dell'arretrato di debito tecnico dell'argomento 4.5, dato che un postmortem che produce
intuizioni ma nessun seguito spreca l'apprendimento organizzativo che il processo
dovrebbe catturare.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Singola metrica mista del tempo di risposta agli incidenti | Semplice da riportare | Nasconde quale fase specifica, rilevamento, presa in carico, risoluzione, sia il vero problema |
| Metriche degli incidenti scomposte per fase | Diagnostiche, indicano direttamente la correzione giusta | Richiedono una strumentazione più accurata di ogni passaggio di fase |
| Revisione degli incidenti orientata alla colpa | Dà senso di responsabilità, soddisfa il desiderio di assegnare colpe | Corrompe l'onestà delle segnalazioni future e raramente corregge la vera causa sistemica |
| Pratica del postmortem senza colpa | Produce dati onesti e vere correzioni sistemiche | Richiede un investimento culturale sostenuto e disciplina della dirigenza per essere mantenuta |

La tensione centrale è **il fascino della responsabilità individuale contro il bisogno
pratico di segnalazioni oneste**. Dare la colpa a un individuo dopo un incidente può
sembrare soddisfacente e può apparire come una leadership decisa, ma corrompe in modo
affidabile i dati di ogni incidente futuro, perché le persone sottostimano, ritardano
la presa in carico o classificano male la gravità una volta che temono conseguenze
personali. Si risolve la tensione a favore della pratica senza colpa, in modo
deliberato e coerente, capendo che la vera responsabilità viene dal correggere il
sistema che ha permesso un guasto, non dal punire l'individuo che capitava di essere
presente quando è avvenuto.

## Domande da discutere con il vostro team

1. **Scomponiamo il tempo di risposta agli incidenti nelle fasi di rilevamento, presa
   in carico e risoluzione, o tracciamo un solo numero misto?** Se esiste solo un
   numero misto, scegliete un incidente significativo recente e provate a ricostruire
   retroattivamente la ripartizione per fasi per vedere che cosa avrebbe rivelato.

2. **Il nostro team crederebbe davvero che il nostro processo di postmortem sia senza
   colpa, o la paura delle conseguenze plasma ancora il modo in cui gli incidenti
   vengono segnalati e discussi?** Chiedetelo direttamente e con onestà; una policy
   dichiarata di assenza di colpa che non viene davvero vissuta non produce dati
   affidabili.

3. **Due team diversi classificherebbero la gravità dello stesso incidente nello
   stesso modo?** Scegliete un incidente passato reale e ambiguo e fate classificare
   in modo indipendente da rappresentanti di team diversi, poi confrontate i
   risultati.

4. **Rivediamo insieme la frequenza degli incidenti e l'MTTR, o uno riceve più
   attenzione dell'altro?** Controllate la vostra pratica effettiva di reportistica e
   revisione per questo abbinamento, rispecchiando la stessa disciplina che
   l'argomento 2.10 raccomanda per le metriche di stabilità DORA.

5. **Quale percentuale delle azioni dei postmortem degli ultimi sei mesi è stata
   effettivamente completata?** Se oggi non lo tracciate, quella lacuna merita di
   essere nominata; un processo di postmortem con un basso tasso di completamento delle
   azioni produce intuizioni senza seguito.

6. **La paura della colpa ha mai spinto qualcuno a ritardare la segnalazione o la
   presa in carico di un incidente?** È una domanda scomoda ma importante; una risposta
   onesta del tipo «sì, ed ecco cos'è successo» vale molto di più per la salute del
   vostro processo di gestione degli incidenti di un riflesso «no».

## Prospettiva settoriale

**Startup.** La risposta agli incidenti è spesso informale per necessità con un team
piccolo, e la scomposizione formale per fasi può essere superflua all'inizio.
L'abitudine da adottare presto sono norme di discussione senza colpa fin dal primo
incidente, dato che le abitudini culturali fissate presto sono molto più facili da
sostenere che da introdurre in seguito una volta radicato uno schema incline alla colpa.

**Piccola impresa.** Un semplice registro condiviso degli incidenti, anche informale,
con una classificazione di base della gravità e una breve retrospettiva senza colpa
per tutto ciò che è significativo, cattura la maggior parte del valore di questo
argomento senza bisogno di strumenti sofisticati né di una piattaforma dedicata alla
gestione degli incidenti.

**Enterprise.** Una classificazione coerente della gravità e una cultura senza colpa
genuina e sostenuta sono entrambe più difficili da mantenere a scala, ed entrambe sono
essenziali per dati sugli incidenti affidabili e confrontabili su decine di team.
Investite in criteri di classificazione documentati, verifiche periodiche e
nell'esempio attivo della dirigenza di risposta senza colpa, dato che la deriva
culturale verso la colpa tende a insinuarsi gradualmente senza una contropressione
deliberata e continua.

**Settore pubblico.** Gli incidenti che colpiscono servizi pubblici o infrastrutture
critiche affrontano spesso un esame esterno, l'attenzione dei media o un'inchiesta
formale, il che crea una forte pressione verso la ricerca del colpevole che può
minare direttamente la pratica interna senza colpa se non gestita attivamente.
Mantenete una chiara disciplina interna senza colpa per un genuino apprendimento
sistemico, separata da qualsiasi processo esterno di responsabilità che possa seguire
a un incidente grave, e comunicate chiaramente quella distinzione al personale.

## Esempi

**Enterprise.** La cultura di ingegneria di un'azienda di pagamenti aveva trattato per
anni, in modo informale, gli incidenti come qualcosa di cui evitare di prendersi
rapidamente carico per non apparirne responsabili, portando a tempi di rilevamento e
di presa in carico costantemente scarsi che la dirigenza attribuiva inizialmente a
strumenti di monitoraggio inadeguati. Un cambiamento culturale verso postmortem
davvero senza colpa, con la dirigenza che elogiava pubblicamente e in modo specifico
una presa in carico rapida e onesta degli incidenti e non solo una risoluzione
rapida, produsse un miglioramento misurabile sia del tempo di rilevamento sia di
quello di presa in carico in due trimestri, rivelando che il collo di bottiglia
originale era culturale, la paura della colpa, e non tecnico, gli strumenti
inadeguati, come si era inizialmente supposto.

**Settore pubblico.** Il centro operativo di un'agenzia di trasporto pubblico aveva
storicamente classificato quasi ogni interruzione del servizio come «minore» nel
proprio registro interno degli incidenti, uno schema che un nuovo direttore della
sicurezza trovò sospetto date le persistenti lamentele informali del personale sul
campo su problemi gravi e ricorrenti. Un'indagine rivelò che la classificazione
«minore» evitava un oneroso processo formale di segnalazione richiesto per le gravità
superiori, creando un incentivo involontario a classificare al ribasso. L'agenzia
semplificò i requisiti formali di segnalazione per tutte le gravità e protesse
esplicitamente il personale dalla colpa per una segnalazione onesta della gravità, e i
dati successivi sugli incidenti mostrarono un tasso più accurato, e sostanzialmente più
alto, di interruzioni davvero significative, dando infine alla dirigenza un quadro onesto
rispetto a cui dare priorità agli investimenti in infrastruttura.

## Business case: motivazioni, ROI e TCO

Il ritorno di metriche degli incidenti davvero senza colpa, ben classificate e scomposte
per fase sono dati onesti che guidano davvero un miglioramento sistemico, anziché un
quadro confortante ma falso prodotto da sottostima o classificazione errata dettate
dalla paura. L'esempio dell'azienda di pagamenti qui sopra lo mostra in concreto: una
correzione culturale, non un investimento in strumenti, ha risolto ciò che la
dirigenza aveva diagnosticato male come un problema tecnico di rilevamento.

Il costo totale di proprietà è per lo più investimento culturale e di processo: impegno
sostenuto della dirigenza verso la pratica senza colpa, criteri di classificazione
della gravità documentati e verificati e la disciplina di tracciare fino al
completamento le azioni dei postmortem. Quell'investimento costa meno dell'alternativa,
un programma di metriche sugli incidenti che produce dati sbagliati con sicurezza
perché la paura ha corrotto ogni input.

## Antipattern e insidie

- **Revisione degli incidenti orientata alla colpa:** corrompe l'onestà delle
  segnalazioni, la rapidità di presa in carico e la classificazione della gravità di
  ogni incidente futuro.
- **Tracciare solo un numero misto del tempo di risposta:** nasconde quale fase
  specifica, rilevamento, presa in carico, risoluzione, sia davvero il problema.
- **Classificazione incoerente della gravità tra i team:** rende inaffidabili per il
  confronto i dati sugli incidenti a livello di organizzazione.
- **Rivedere frequenza degli incidenti e MTTR in isolamento:** perde il quadro
  complessivo e onesto che il segnale abbinato fornisce.
- **Un processo di postmortem che produce intuizioni ma nessuna azione completata:**
  spreca l'apprendimento organizzativo che il processo dovrebbe catturare.
- **Una policy dichiarata di assenza di colpa che la dirigenza non vive davvero:**
  produce la stessa corruzione dei dati dettata dalla paura di una cultura apertamente
  orientata alla colpa.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La risposta agli incidenti è informale, la
  segnalazione è incoerente e una cultura incline alla colpa scoraggia attivamente la
  segnalazione onesta.
- **Livello 2, Sviluppo (Develop):** Esiste un certo tracciamento degli incidenti, ma
  la classificazione della gravità è incoerente e la pratica senza colpa è dichiarata
  ma non vissuta in modo coerente.
- **Livello 3, Standardizzazione (Standardize):** Metriche degli incidenti scomposte
  per fase con classificazione della gravità coerente e documentata sono tracciate in
  tutta l'organizzazione, con una pratica di postmortem davvero senza colpa.
- **Livello 4, Gestione (Manage):** Frequenza degli incidenti e MTTR sono riesaminati
  insieme, le azioni dei postmortem sono tracciate fino al completamento e la
  classificazione è verificata periodicamente per la coerenza.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una storia
  dimostrata e sostenuta di pratica senza colpa che produce dati onesti e vere
  correzioni sistemiche, e le metriche degli incidenti informano in modo diretto e
  affidabile le decisioni di investimento in affidabilità.

## Spunti di discussione

1. Il nostro processo di postmortem supererebbe una prova onesta sul fatto di essere davvero senza colpa?
2. Qual è la ripartizione per fasi, rilevamento, presa in carico, risoluzione, del nostro incidente recente più lento?
3. Due team classificherebbero la gravità del nostro ultimo incidente significativo nello stesso modo?
4. Quale percentuale delle azioni dei nostri recenti postmortem è stata effettivamente completata?
5. La paura della colpa ha mai plasmato il modo in cui un incidente è stato segnalato o discusso nel nostro team?

## Punti chiave

- **La cultura del postmortem senza colpa è un prerequisito** per dati affidabili
  sugli incidenti; la paura della colpa corrompe allo stesso modo segnalazione,
  rapidità di presa in carico e classificazione.
- Scomponi il tempo di risposta in fasi di **rilevamento, presa in carico e
  risoluzione**, ciascuna delle quali indica una correzione diversa.
- Classifica la gravità con **criteri coerenti, documentati e verificati**,
  rispecchiando la disciplina dell'argomento 5.1 sui difetti sfuggiti.
- Rivedi **insieme frequenza degli incidenti e MTTR**, mai in isolamento, la stessa
  disciplina di abbinamento delle metriche di stabilità DORA.
- Traccia le **azioni dei postmortem fino al completamento**; la metrica è un
  sottoprodotto della buona pratica, non il suo scopo.

## Riferimenti e letture di approfondimento

- *Site Reliability Engineering: How Google Runs Production Systems*, a cura di Betsy
  Beyer, Chris Jones, Jennifer Petoff e Niall Richard Murphy (pratica del postmortem
  senza colpa e metriche degli incidenti).
- *The Site Reliability Workbook*, a cura di Betsy Beyer, Niall Richard Murphy, David
  K. Rensin, Kent Kawahara e Stephen Thorne (indicazioni pratiche sulla risposta agli
  incidenti e sui postmortem).
- *The Field Guide to Understanding Human Error*, di Sidney Dekker (la tesi
  fondativa a favore di un'indagine sistemica e senza colpa dei guasti).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering Blog
  (2012): una prima e influente formulazione della pratica senza colpa nelle
  operazioni software.
