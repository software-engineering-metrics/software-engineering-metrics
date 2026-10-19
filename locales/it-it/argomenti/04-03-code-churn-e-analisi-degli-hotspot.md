# 4.3 Code churn e analisi degli hotspot

## Panoramica e motivazione

Il **code churn** misura con quale frequenza un file o un modulo cambia nel tempo,
righe aggiunte, modificate ed eliminate in commit successivi. Da solo, il churn è un
segnale piuttosto debole: alcuni file cambiano spesso perché sono in sviluppo attivo
e sano, e alcuni cambiano di rado perché sono stabili e corretti, non perché
trascurati. Il vero potere diagnostico dell'approccio di questo argomento viene dal
combinare il churn con la complessità (argomento 4.1): un file che è sia modificato
di frequente sia molto complesso, un **hotspot**, ha una probabilità sproporzionata
di essere fonte di difetti e freno alla velocità del team, e la ricerca empirica lo
conferma in modo coerente su molte basi di codice e organizzazioni.

L'**analisi degli hotspot**, resa popolare dal lavoro di Adam Tornhill sulla software
analytics, è particolarmente preziosa perché non richiede alcuna indagine manuale né
giudizio soggettivo per trovare i propri obiettivi. La storia del [controllo di
versione](https://en.wikipedia.org/wiki/Version_control) contiene già tutto ciò
che serve a calcolare sia il churn sia, in combinazione con gli strumenti di analisi
statica, la complessità, per ogni file di una base di codice in modo automatico.
Questo permette a un team o a un'organizzazione di individuare, con prove reali anziché
con aneddoti o con la lamentela più rumorosa di una retrospettiva, esattamente quale
piccola frazione della base di codice merita per prima attenzione di refactoring.

Per i team grandi, l'analisi degli hotspot risolve un vero problema di allocazione:
una base di codice di centinaia di migliaia di righe ha molto più codice di quanto
qualsiasi team possa permettersi di rifattorizzare in modo esaustivo, e l'intuizione
su dove vivano i problemi peggiori è spesso sbagliata, distorta da chi si è lamentato
più di recente o da quale file un ingegnere senior capiti di non amare. Le
organizzazioni enterprise e governative che gestiscono basi di codice grandi e
longeve dipendono da questa prioritizzazione guidata dai dati per dirigere un budget
di refactoring davvero scarso verso il codice che produrrà il maggior ritorno.

## Principi chiave

- **Il churn da solo è un segnale debole; il churn combinato con la complessità è
  forte.** La combinazione, non l'una o l'altra metrica da sole, è ciò che individua
  un vero hotspot.
- **L'analisi degli hotspot non richiede alcuna indagine manuale.** La storia del
  controllo di versione contiene già tutto ciò che serve a calcolarla in modo
  automatico.
- **Un hotspot è un segnale di prioritizzazione, non un verdetto automatico.** Serve
  ancora il giudizio umano per decidere quale azione un hotspot specifico richieda.
- **Cambiare di frequente non è intrinsecamente un male.** Una parte del churn
  riflette uno sviluppo sano e attivo anziché un problema di qualità.
- **Questa analisi scala proprio dove l'intuizione fallisce**: nelle grandi basi di
  codice troppo vaste perché una singola persona le esamini e le prioritizzi a
  sensazione.

## Raccomandazioni

### Calcola insieme churn e complessità, e ordina per la loro combinazione

Estrai la frequenza di modifica per file dalla storia del controllo di versione su
una finestra significativa, di solito da sei mesi a un anno, e abbinala a una misura
di complessità (argomento 4.1) per gli stessi file. Ordina i file in base alla
combinazione, comunemente il prodotto di churn e complessità, anziché per l'una o
l'altra metrica da sola, dato che questa combinazione è ciò che la ricerca sottostante
associa in modo coerente a tassi di difetti e costi di manutenzione elevati.

### Indaga con giudizio umano i principali hotspot prima di agire

Un elenco ordinato di hotspot individua candidati all'attenzione, non un elenco
automatico di azioni. Per ciascuno dei tuoi hotspot principali, indaga con occhio
umano: si tratta di codice davvero mal progettato che ha bisogno di refactoring, o è
un file che ha legittimamente bisogno di modifiche frequenti perché sta al centro
di una logica di business attiva e in evoluzione, nel qual caso la priorità potrebbe
essere test migliori o documentazione più chiara piuttosto che una riscrittura
strutturale. Rispecchia la distinzione tra complessità essenziale e accidentale
dell'argomento 4.1, applicata qui al segnale combinato di churn e complessità.

### Confronta gli hotspot con i dati su incidenti e difetti

Dove disponibili, verifica se gli hotspot individuati correlano con incidenti reali
in produzione (argomento 6.2) o con i dati sui difetti sfuggiti (argomento 5.1). Una
forte correlazione convalida l'analisi degli hotspot come davvero predittiva per la
tua specifica base di codice e rafforza il business case per agire; una correlazione
debole o assente suggerisce o un problema di qualità dei dati o che churn e
complessità non siano, nel tuo contesto particolare, la combinazione di segnali giusta
su cui dare priorità.

### Traccia il trend degli hotspot su analisi successive, non solo un'istantanea

Riesegui periodicamente l'analisi degli hotspot, quella trimestrale è comune, e
traccia se gli hotspot individuati in precedenza stiano migliorando, peggiorando o
si siano risolti, e se ne stiano emergendo di nuovi. Un hotspot che persiste su più
cicli di analisi pur essendo segnalato ripetutamente indica o che lo sforzo di
rimedio non è stato davvero applicato o che un precedente tentativo di rimedio non
ha affrontato il vero problema di fondo.

### Usa i dati sugli hotspot per informare, non sostituire, le conversazioni di prioritizzazione del team

Presenta l'analisi degli hotspot come prova in una discussione di prioritizzazione,
non come mandato automatico che scavalca il giudizio contestuale del team su ciò che
conta di più in questo momento. Un team può avere buone e legittime ragioni per
depriorizzare temporaneamente un hotspot noto, una riscrittura pianificata in arrivo
rende sprecato il refactoring incrementale, per esempio, e l'analisi dovrebbe
informare quella conversazione, non sostituirla.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Prioritizzazione basata sull'intuizione | Rapida, non richiede strumenti, sfrutta la conoscenza contestuale del team | Distorta da recenza, preferenze personali e da chi si lamenta più forte |
| Solo churn | Semplice da calcolare | Segnale debole da solo; cambiare di frequente non è intrinsecamente un male |
| Churn combinato con complessità (analisi degli hotspot) | Forte, basata sulle prove, automatica dai dati esistenti | Richiede di combinare due fonti di dati e interpretare i risultati con giudizio |
| Analisi degli hotspot confrontata con i dati sugli incidenti | Convalidata, la prova più forte per la prioritizzazione | Richiede un collegamento affidabile tra incidenti e codice, che non ogni organizzazione ha |

La tensione centrale è **prova contro contesto**. L'analisi degli hotspot fornisce
una prova oggettiva e scalabile che la prioritizzazione basata sull'intuizione non
può eguagliare alla dimensione di una base di codice grande, poco familiare o
longeva, ma le manca il giudizio contestuale che un team ha su perché un dato hotspot
conti, o non conti, in questo momento. Si risolve la tensione trattando l'analisi
degli hotspot come base di prove per una conversazione di prioritizzazione,
combinata con, mai sostitutiva di, il giudizio contestuale del team su tempistiche e
compromessi.

## Domande da discutere con il vostro team

1. **Quali sono i nostri cinque hotspot principali, ordinati per churn e complessità
   combinati, e quell'ordine corrisponderebbe all'intuizione del nostro team su dove
   vivano i nostri problemi peggiori?** Eseguite l'analisi e confrontate il
   risultato con ciò che il vostro team avrebbe indovinato prima di vedere i dati;
   le discrepanze sono spesso la scoperta più preziosa.

2. **I nostri hotspot individuati correlano con incidenti reali in produzione o con
   i dati sui difetti sfuggiti?** Se avete i dati per verificarlo, fatelo
   direttamente; se non li avete, anche quella lacuna merita di essere nominata come
   qualcosa verso cui costruire.

3. **Per il nostro hotspot principale in questo momento, il problema di fondo è una
   complessità essenziale che richiede legittimamente modifiche frequenti, o una
   complessità accidentale che un refactoring potrebbe davvero correggere?**
   Percorrete il file insieme ed esprimete esplicitamente questo giudizio anziché
   presumere l'una o l'altra risposta.

4. **Un hotspot individuato in precedenza è persistito su più cicli di analisi
   nonostante fosse segnalato?** In tal caso, indagate con onestà perché: il rimedio
   non è mai stato davvero tentato, o un tentativo precedente non ha affrontato la
   vera causa di fondo.

5. **Stiamo dando priorità al lavoro di refactoring in base alle prove, o in base a
   chi si è lamentato più di recente o più forte?** Siate onesti sul vostro attuale
   processo effettivo di prioritizzazione e su come si confronti con ciò che
   suggerirebbe un'analisi degli hotspot basata sulle prove.

6. **Quanto ci costerebbe, in tasso di difetti o rallentamento della consegna,
   lasciare irrisolto per un altro anno il nostro attuale hotspot principale?**
   Questa domanda forza una stima concreta del costo che può ancorare una decisione
   di prioritizzazione, anziché lasciare l'hotspot come preoccupazione astratta e
   facilmente depriorizzabile.

## Prospettiva settoriale

**Startup.** L'analisi formale degli hotspot è di solito superflua con una base di
codice piccola e giovane che l'intero team tiene ancora collettivamente a mente. La
tecnica diventa preziosa specificamente quando la base di codice è cresciuta oltre la
dimensione in cui una singola persona può individuare in modo affidabile le aree
peggiori a memoria, spesso nel primo anno o due di crescita sostenuta.

**Piccola impresa.** Strumenti gratuiti o a basso costo possono estrarre i dati di
churn direttamente dalla vostra storia del controllo di versione esistente con una
configurazione minima; combinateli con i dati di complessità che il vostro linter o
strumento di analisi statica già riporta, anziché investire in software commerciale
dedicato di analisi degli hotspot a questa scala.

**Enterprise.** L'analisi degli hotspot è dove la prioritizzazione basata sulle prove
rende di più, dato che l'intuizione fallisce davvero alla scala di una base di codice
che copre centinaia di servizi e migliaia di file. Investite nell'eseguire questa
analisi regolarmente su tutta la base di codice e nel confrontarla con i dati sugli
incidenti per costruire un caso convalidato e difendibile per l'investimento in
refactoring.

**Settore pubblico.** I sistemi longevi, a volte vecchi di decenni, si adattano bene
all'analisi degli hotspot, dato che la storia accumulata del controllo di versione
fornisce un segnale ricco e di lungo periodo su quali parti del sistema si siano
dimostrate davvero problematiche nel tempo. Questo approccio basato sulle prove è
anche uno strumento persuasivo e concreto per giustificare l'investimento in
modernizzazione presso stakeholder che hanno bisogno di qualcosa di più dell'opinione
informale di un ingegnere per approvare un finanziamento.

## Esempi

**Enterprise.** La piattaforma di gestione dei sinistri di una compagnia
assicurativa, che copriva oltre due milioni di righe di codice in decine di servizi,
aveva accumulato anni di lamentele informali sul fatto che «il modulo di validazione
dei sinistri» fosse problematico, ma da quelle lamentele non era mai seguita alcuna
prioritizzazione formale. Un'analisi degli hotspot che combinava sei mesi di dati di
churn con i punteggi di complessità individuò un file completamente diverso, un
componente condiviso di conversione valutaria sepolto in profondità in una
dipendenza di cui si parlava di rado, come reale hotspot principale, uno che non era
mai emerso in nessuna lamentela di retrospettiva. Il confronto con i dati sugli
incidenti confermò che quel componente era coinvolto in una quota sproporzionata dei
difetti di calcolo finanziario dell'anno precedente, e un refactoring mirato di
quello specifico componente, anziché del modulo che tutti avevano incolpato in modo
informale, produsse una riduzione misurabile degli incidenti correlati nel trimestre
successivo.

**Settore pubblico.** Il sistema di rilascio delle patenti, vecchio di decenni, di
un'agenzia statale della motorizzazione fu sottoposto a un'analisi degli hotspot
nell'ambito di un business case di modernizzazione. L'analisi individuò un piccolo
gruppo di file, che rappresentavano meno del 3% dell'intera base di codice,
responsabili di una quota sproporzionata sia di churn sia di complessità, e il
confronto con il registro degli incidenti dell'agenzia mostrò che quello stesso
gruppo era responsabile di quasi il 40% di tutti i difetti di sistema segnalati nei
tre anni precedenti. Questa scoperta concreta e basata sulle prove, molto più
persuasiva di un'affermazione generica secondo cui «il sistema è vecchio e va
modernizzato», divenne il perno di una riuscita richiesta di budget per uno sforzo di
modernizzazione mirato e incrementale concentrato specificamente su quel gruppo
anziché su una sostituzione completa del sistema molto più costosa.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'analisi degli hotspot è un investimento mirato e basato sulle prove:
entrambi gli esempi qui sopra mostrano un caso in cui l'analisi formale ha
reindirizzato l'attenzione di refactoring lontano da dove la lamentela informale
l'aveva concentrata e verso dove i dati mostravano che il problema viveva davvero,
producendo un ritorno misurabilmente migliore di un investimento non mirato o guidato
dall'intuizione.

Il costo totale di proprietà è basso, dato che i dati di churn vengono direttamente
dalla storia esistente del controllo di versione e i dati di complessità sono di
solito già disponibili dagli strumenti di analisi statica (argomento 4.4); l'investimento
principale è lo sforzo periodico di analisi e il tempo di giudizio umano per
interpretare i risultati e decidere quale azione ciascun hotspot individuato richieda.

## Antipattern e insidie

- **Usare il solo churn senza la complessità:** un segnale debole da solo che può
  segnalare come falso positivo codice sano e in sviluppo attivo.
- **Trattare un elenco di hotspot come un elenco automatico di azioni senza giudizio
  umano:** perde la distinzione tra essenziale e accidentale che determina la
  risposta giusta.
- **Dare priorità al refactoring in base alla lamentela più rumorosa anziché alle
  prove:** devia spesso lo sforzo da dove i dati mostrano che il problema vive
  davvero.
- **Non confrontare mai gli hotspot con i dati su incidenti o difetti:** perde il
  passo di convalida che rafforza il caso per agire sull'analisi.
- **Eseguire l'analisi una volta sola e non ripeterla mai:** perde di vista se lo
  sforzo di rimedio stia funzionando nel tempo.
- **Ignorare un hotspot segnalato in modo persistente senza indagare perché il
  rimedio non abbia attecchito:** spreca il valore diagnostico dell'analisi
  ripetuta.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le priorità di refactoring sono fissate per
  intuizione o volume di lamentele, senza che dati di churn o complessità informino
  la decisione.
- **Livello 2, Sviluppo (Develop):** Alcuni team controllano in modo informale dati
  di churn o complessità, ma non c'è una pratica coerente di analisi degli hotspot
  in tutta l'organizzazione.
- **Livello 3, Standardizzazione (Standardize):** L'analisi degli hotspot che
  combina churn e complessità viene eseguita regolarmente e informa in modo coerente
  la prioritizzazione del refactoring in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Gli hotspot sono confrontati con i dati su
  incidenti e difetti per convalidare l'analisi, e il trend su cicli successivi è
  tracciato attivamente.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare
  miglioramenti specifici e misurabili del tasso di difetti o della consegna
  derivanti dall'investimento in refactoring informato dagli hotspot, e l'analisi è
  un input di routine e affidabile per le decisioni di investimento in ingegneria.

## Spunti di discussione

1. Che aspetto avrebbe oggi il nostro elenco dei principali hotspot se eseguissimo questa analisi?
2. Quell'elenco corrisponderebbe, o contraddirebbe, l'attuale percezione informale del nostro team sulle nostre aree di problema peggiori?
3. Abbiamo i dati per confrontare gli hotspot con gli incidenti reali?
4. Un'area di problema nota è persistita nonostante precedenti tentativi di correggerla, e perché?
5. Quanto ci costerebbe lasciare irrisolto per un altro anno il nostro attuale hotspot principale?

## Punti chiave

- Il **churn combinato con la complessità** individua i veri hotspot in modo molto
  più affidabile dell'una o dell'altra metrica da sola.
- L'analisi degli hotspot **non richiede alcuna indagine manuale**; è calcolabile
  automaticamente dai dati esistenti di controllo di versione e di analisi statica.
- Tratta un elenco di hotspot come **prova per la prioritizzazione**, non come
  verdetto automatico; serve ancora il giudizio umano.
- **Confronta gli hotspot con i dati su incidenti e difetti** per convalidare
  l'analisi e rafforzare il caso per agire.
- Traccia gli hotspot **su cicli di analisi successivi** per confermare che il
  rimedio stia funzionando davvero, non una sola volta come istantanea.

## Riferimenti e letture di approfondimento

- *Your Code as a Crime Scene*, di Adam Tornhill (il testo fondativo sull'analisi
  degli hotspot che combina churn e complessità dai dati del controllo di versione).
- *Software Design X-Rays*, di Adam Tornhill (ulteriori tecniche di analisi
  comportamentale del codice usando la storia del controllo di versione).
- Nagappan, Nachiappan, e Thomas Ball, "Use of Relative Code Churn Measures to
  Predict System Defect Density," *ICSE* (2005): ricerca empirica sul rapporto tra
  churn e densità di difetti.
- *Refactoring: Improving the Design of Existing Code*, di Martin Fowler (tecniche
  per affrontare la complessità accidentale una volta individuata).
