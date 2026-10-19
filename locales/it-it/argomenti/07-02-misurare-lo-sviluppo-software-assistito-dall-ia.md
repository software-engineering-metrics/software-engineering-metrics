# 7.2 Misurare lo sviluppo software assistito dall'IA

## Panoramica e motivazione

L'argomento 7.1 ha stabilito perché diverse metriche esistenti non misurino più in modo
affidabile ciò che misuravano sotto lo sviluppo assistito dall'IA. Questo argomento
riguarda che cosa misurare invece: come sapere, con prove reali anziché impressioni o
marketing dei fornitori, se l'assistenza di codifica basata sull'IA stia davvero
aiutando la vostra organizzazione, e di quanto. È una domanda davvero importante con
conseguenze di bilancio reali, le licenze degli strumenti di IA rappresentano un costo
reale e continuo, la disciplina di economia unitaria dell'argomento 5.4 si applica
direttamente, e un'organizzazione che non sa rispondere con prove sta o pagando troppo
uno strumento che non aiuta o investendo troppo poco in uno che aiuta davvero.

L'approccio di questo argomento attinge direttamente al principio dei risultati prima
dell'output dell'argomento 1.3, ora applicato specificamente alla valutazione degli
strumenti di IA. L'approccio ingenuo e più comune misura lo sviluppo assistito dall'IA
per volume di output, righe di codice generate, suggerimenti accettati, tempo risparmiato
per compito dichiarato dagli sviluppatori, esattamente le metriche che l'argomento 7.1
indicava come più esposte a questo cambiamento. L'approccio più rigoroso che questo
argomento raccomanda misura i risultati: l'assistenza dell'IA ha davvero ridotto il
cycle time senza degradare la qualità, ha ridotto il tempo speso in lavoro ripetitivo e
di poco valore, liberando capacità per un lavoro di maggior valore, e ha influenzato in
modo misurabile i risultati di business e di prodotto della Parte 5?

Per i team grandi, fare bene questa misurazione determina se le decisioni di
investimento negli strumenti di IA siano prese sulle prove o sulle affermazioni dei
fornitori e sull'inerzia organizzativa. Le organizzazioni enterprise che negoziano
contratti su larga scala per strumenti di IA hanno bisogno di prove genuine di valore
per giustificare la spesa e per confrontare equamente strumenti concorrenti; le
organizzazioni governative, spesso sotto un esame particolare sulla spesa tecnologica,
hanno bisogno di una metodologia di valutazione rigorosa e difendibile prima di
impegnare fondi pubblici nell'adozione su larga scala di strumenti di IA.

## Principi chiave

- **Misura l'assistenza dell'IA per risultato, non per volume di output né per
  statistiche d'uso riportate dal fornitore.** La disciplina dell'argomento 1.3 si
  applica qui in pieno.
- **Usa un vero [gruppo di confronto](https://en.wikipedia.org/wiki/Treatment_and_control_groups)
  ovunque possibile**, non solo un confronto prima-dopo che una linea di base di settore
  in crescita potrebbe confondere.
- **I risparmi di tempo autodichiarati sono un segnale debole da soli.** Abbinali a
  dati oggettivi di cycle time e di qualità.
- **Misura il costo pieno, inclusi i tempi di revisione e di correzione**, non solo la
  velocità di generazione.
- **Compiti diversi e ingegneri diversi possono trarre valori molto diversi
  dall'assistenza dell'IA.** Evita un unico numero misto a livello di organizzazione
  che nasconde questa variazione.

## Raccomandazioni

### Costruisci un vero confronto, non solo un'istantanea prima-dopo

Dove fattibile, confronta i risultati tra un gruppo che usa l'assistenza dell'IA e un
gruppo comparabile che non la usa, nello stesso periodo, anziché confrontare solo i
numeri prima-dopo della tua organizzazione, che non sanno distinguere l'effetto
dell'assistenza dell'IA da qualsiasi altro cambiamento concomitante (la cautela
dell'argomento 1.6 sulle variabili di confondimento si applica direttamente). Dove un
vero gruppo di confronto è impraticabile, confronta almeno con una linea di base
storica più lunga (un grafico di controllo, secondo l'argomento 1.6) anziché con una
singola istantanea prima-dopo vulnerabile alla regressione verso la media o a cambiamenti
concomitanti non correlati.

### Misura insieme cycle time e qualità, mai la sola affermazione di velocità dell'assistenza dell'IA

Applica direttamente la disciplina degli argomenti 2.6 e 2.10: traccia se il lavoro
assistito dall'IA si muove più in fretta attraverso le fasi del cycle time e,
contemporaneamente, se il tasso di fallimento dei cambiamenti o il tasso di difetti
sfuggiti (argomento 5.1) per quel lavoro si muove nella direzione sbagliata. Un
genuino guadagno di produttività mostra un cycle time più rapido con qualità stabile o
migliorata; un falso guadagno mostra un cycle time più rapido con qualità in
degrado, esattamente lo scambio da cui l'argomento 7.1 metteva in guardia, scoperto qui
attraverso la stessa disciplina di metriche abbinate che questo libro applica ovunque.

### Includi i tempi di revisione e correzione nella contabilità del costo pieno

Il codice generato dall'IA che è più veloce da produrre ma più lento da rivedere, o che
richiede più correzioni e rifacimenti dopo la generazione iniziale, può non mostrare
alcun miglioramento netto del cycle time una volta misurata l'intera pipeline, anche
se il passaggio iniziale di generazione del codice sembrava drammaticamente più veloce
al singolo ingegnere. Misura l'intera catena del cycle time (argomento 2.6), non solo la
fase di scrittura del codice, per catturare questo con onestà anziché attribuire merito
all'assistenza dell'IA sulla base di una sensazione di velocità percepita ma incompleta.

### Tratta i risparmi di tempo autodichiarati come ipotesi di partenza, non come conclusione

L'autodichiarazione degli sviluppatori del tipo «questo mi ha fatto risparmiare un'ora»
è utile come segnale iniziale e come contesto qualitativo (l'approccio combinato
quantitativo-qualitativo dell'argomento 5.3 si applica anche qui), ma è soggetta alle
stesse distorsioni di ricordo e di desiderabilità da cui l'argomento 1.5 mette in
guardia per qualsiasi dato autodichiarato, e non dice nulla del costo di revisione o
di correzione a valle. Usa l'autodichiarazione per generare ipotesi su dove l'assistenza
dell'IA aiuti di più, poi convalida quelle ipotesi rispetto ai dati oggettivi di cycle
time e di qualità prima di trarre una conclusione ferma.

### Segmenta la misurazione per tipo di compito ed evita un unico numero misto

L'assistenza di codifica basata sull'IA fornisce probabilmente valori molto diversi per
compiti ripetitivi e ben compresi rispetto alla risoluzione di problemi davvero nuovi e
complessi. Misura e riporta per categoria di compito anziché con una singola media mista
a livello di organizzazione, che può nascondere il fatto che l'assistenza fornisce un
forte valore in una categoria e poco o addirittura negativo in un'altra, un'informazione
che un numero misto oscurerebbe del tutto.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Solo risparmi di tempo autodichiarati | Rapidi, facili da raccogliere | Segnale debole; soggetto a distorsione; ignora il costo di revisione a valle |
| Solo confronto prima-dopo | Semplice da impostare | Confuso da qualsiasi altro cambiamento concomitante o trend di settore |
| Vero gruppo di confronto | La prova più forte e difendibile | Più difficile da organizzare; può non essere fattibile per un rilascio a piena adozione |
| Misurazione dei risultati segmentata per compito | Rivela dove il valore si concentra davvero | Richiede un tracciamento più granulare e uno sforzo di categorizzazione |

La tensione centrale è **rigore di misurazione contro fattibilità pratica**. Un vero
gruppo di confronto controllato è la prova più forte ma è spesso impraticabile una
volta che uno strumento è stato diffuso in tutta l'organizzazione senza un gruppo di
controllo tenuto da parte; le impressioni autodichiarate sono rapide e facili ma deboli
da sole. Si risolve la tensione usando il disegno di confronto più forte che il vostro
rilascio effettivo consente, un genuino gruppo di controllo durante una fase pilota
iniziale se possibile, un grafico di controllo con linea di base storica in caso
contrario, e trattando l'autodichiarazione come strumento per generare ipotesi
anziché come ultima parola, a prescindere dal disegno di confronto che finirete per
usare.

## Domande da discutere con il vostro team

1. **Avevamo, o potremmo ancora costruire, un vero gruppo di confronto per valutare la
   nostra adozione degli strumenti di IA, o ci affidiamo interamente a un confronto
   prima-dopo?** Se un vero gruppo di confronto non è mai stato stabilito, discutete se
   un grafico di controllo con linea di base storica potrebbe comunque offrire
   un'alternativa ragionevolmente rigorosa.

2. **Abbiamo misurato insieme cycle time e qualità per il lavoro assistito dall'IA, o
   abbiamo solo un'affermazione di velocità senza un corrispondente controllo di
   qualità?** Prendete i dati esistenti e controllate questo specifico abbinamento; se
   non esiste, quella lacuna è la correzione a più alta priorità di questo argomento.

3. **La nostra misurazione del cycle time per il lavoro assistito dall'IA include i
   tempi di revisione e correzione, o solo la fase iniziale di generazione?** Una
   affermazione di velocità basata solo sul tempo di generazione, che ignora il costo
   di revisione a valle, rischia proprio la trappola della contabilità incompleta da
   cui questo argomento mette in guardia.

4. **Quali affermazioni di risparmio di tempo autodichiarate abbiamo raccolto, e ne
   abbiamo convalidata qualcuna rispetto a dati oggettivi?** Scegliete un'affermazione
   specifica e ripetuta di frequente e controllate se i dati oggettivi la sostengano
   davvero.

5. **La nostra misurazione attuale fonde tutti i tipi di compito in un unico numero, o
   sappiamo quali categorie specifiche di lavoro traggono il maggior valore
   dall'assistenza dell'IA?** Se fusa, discutete che cosa potrebbe rivelare una
   suddivisione per compito che il numero attuale nasconde.

6. **Se dovessimo difendere oggi il nostro investimento negli strumenti di IA davanti a
   uno stakeholder finanziario scettico, con prove anziché impressioni, che cosa
   saremmo effettivamente in grado di mostrargli?** Questa prova concreta fa emergere il
   divario tra ciò che la vostra organizzazione crede oggi del valore dell'assistenza
   dell'IA e ciò che può effettivamente dimostrare con le prove.

## Prospettiva settoriale

**Startup.** Uno studio formale con gruppo di confronto è di solito impraticabile su
piccola scala, ma anche una semplice e onesta occhiata prima-dopo al cycle time e al
tasso di difetti, anziché affidarsi puramente a quanto più veloce sembri il lavoro, dà
un segnale sensibilmente più affidabile della sola impressione.

**Piccola impresa.** Concentrate lo sforzo di misurazione prima sulla categoria di
compiti più preziosa e più ripetitiva, dove il valore dell'assistenza dell'IA ha più
probabilità di essere chiaro e misurabile, anziché tentare una valutazione completa di
ogni tipo di lavoro del vostro piccolo team.

**Enterprise.** Un genuino confronto controllato durante una fase pilota iniziale, prima
del rilascio completo in tutta l'organizzazione, è qui spesso realizzabile e vale lo
sforzo deliberato di organizzarlo, dato che produce prove molto più difendibili per la
decisione di investimento su larga scala che di solito segue un pilota riuscito.

**Settore pubblico.** Le decisioni di spesa tecnologica pubblica, inclusi gli acquisti
di strumenti di IA, affrontano spesso un esame particolare e possono richiedere una
giustificazione formale costi-benefici (argomento 5.5). Incorporate fin dall'inizio in
qualsiasi fase pilota la disciplina di misurazione che questo argomento raccomanda,
dato che una metodologia di valutazione rigorosa e documentata rafforza
considerevolmente il caso finale di finanziamento o di acquisto.

## Esempi

**Enterprise.** Un'azienda software diffuse un assistente di codifica basato sull'IA a
metà dei propri team di ingegneria come pilota deliberato, tenendo l'altra metà come
gruppo di confronto per un trimestre prima del rilascio completo. Il gruppo pilota
mostrò un genuino miglioramento del cycle time statisticamente significativo per i
compiti ben definiti e ricchi di codice ripetitivo, ma nessun miglioramento misurabile,
e un numero di iterazioni di revisione (argomento 2.9) leggermente elevato, per il
lavoro architetturale complesso e nuovo. Questa scoperta segmentata per compito,
visibile solo grazie al genuino disegno di confronto e alla suddivisione per categoria di
compito, portò l'azienda a mirare specificamente i messaggi e la formazione del
rilascio dell'assistenza dell'IA alle categorie di compito in cui aveva dimostrato di
aiutare, anziché presentarla come un aumento uniforme di produttività su tutto il
lavoro.

**Settore pubblico.** Un'agenzia federale che sperimentava l'assistenza di codifica
basata sull'IA con un sottoinsieme dei team del proprio programma di modernizzazione si
affidò inizialmente a sondaggi di risparmio di tempo autodichiarati, che mostrarono
risposte entusiaste e uniformemente positive. Un'analisi oggettiva successiva, che
confrontava cycle time e tasso di difetti sfuggiti tra i team pilota e una coorte
comparabile non pilota che lavorava su componenti di sistema simili, scoprì che il
miglioramento oggettivo del cycle time era reale ma sensibilmente più piccolo di quanto
suggerissero le stime autodichiarate, e individuò un aumento modesto ma reale del tempo
di revisione che aveva compensato in parte il guadagno di velocità di generazione, una
scoperta che i soli dati autodichiarati avevano del tutto perso. Questo quadro più
accurato e basato sulle prove informò direttamente un business case più modesto e più
difendibile per l'acquisto continuo e ampliato dello strumento.

## Business case: motivazioni, ROI e TCO

Il ritorno del misurare con rigore lo sviluppo assistito dall'IA sono decisioni di
investimento sicure e basate sulle prove: un'organizzazione che sa con precisione dove
l'assistenza dell'IA aiuta davvero può investire per ampliarla lì ed evitare di pagare
troppo licenze in categorie di compiti in cui offre poco valore, esattamente
l'intuizione di segmentazione per compito che l'esempio dell'azienda software qui sopra
dimostra. Si collega direttamente all'economia unitaria dell'argomento 5.4 e alla
disciplina del ROI dell'argomento 5.5, dato che il costo degli strumenti di IA, spesso
con licenza per postazione, richiede lo stesso trattamento rigoroso di costi e benefici
che questo libro applica a qualsiasi altro grande investimento di ingegneria.

Il costo totale di proprietà è lo sforzo analitico per costruire confronti genuini,
misurare il cycle time completo inclusi revisione e correzione e segmentare per tipo di
compito, che è più lavoro che accettare così com'è le statistiche d'uso riportate dai
fornitori o le impressioni autodichiarate. Quello sforzo è giustificato direttamente
dalla scala del costo di licenza degli strumenti di IA in una grande organizzazione e
dal rischio di un impegno costoso e generalizzato a tutta l'organizzazione basato su
impressioni anziché su dati e poco sostenuto dalle prove.

## Antipattern e insidie

- **Misurare l'assistenza dell'IA solo per volume di output o statistiche d'uso del
  fornitore:** ripete direttamente l'avvertimento centrale dell'argomento 7.1.
- **Affidarsi interamente ai risparmi di tempo autodichiarati:** un segnale debole,
  vulnerabile a distorsioni e cieco al costo di revisione e di correzione a valle.
- **Misurare solo il passaggio di velocità di generazione, ignorando il cycle time
  completo:** produce una contabilità incompleta e potenzialmente fuorviante
  dell'effetto effettivo sulla produttività.
- **Riportare un unico numero misto a livello di organizzazione:** nasconde la reale
  variazione di valore tra diverse categorie di compiti.
- **Nessun gruppo di confronto né linea di base storica:** non sa distinguere
  l'effetto effettivo dell'assistenza dell'IA da qualsiasi altro cambiamento
  concomitante.
- **Trattare un entusiastico risultato di sondaggio autodichiarato come prova
  sufficiente per una decisione di investimento su larga scala:** rischia proprio il
  divario che l'esempio dell'agenzia federale qui sopra ha scoperto solo dopo aver
  costruito un confronto più rigoroso.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il valore dello sviluppo assistito dall'IA è
  valutato, se lo è, solo attraverso l'impressione autodichiarata e le statistiche
  d'uso del fornitore.
- **Livello 2, Sviluppo (Develop):** Esistono alcuni dati di cycle time o di qualità,
  ma non c'è un vero gruppo di confronto né una linea di base storica né un'analisi
  segmentata per compito.
- **Livello 3, Standardizzazione (Standardize):** Un genuino disegno di confronto
  (gruppo di controllo o linea di base storica) con misurazione abbinata di cycle time e
  qualità è applicato in modo coerente, segmentato per tipo di compito.
- **Livello 4, Gestione (Manage):** La contabilità completa del cycle time, inclusi i
  tempi di revisione e correzione, è tracciata; le affermazioni autodichiarate sono
  convalidate sistematicamente rispetto a dati oggettivi.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una comprensione
  matura e basata sulle prove di dove esattamente l'assistenza dell'IA aiuti davvero,
  che informa il rilascio mirato, l'investimento nella formazione e le decisioni di
  acquisto con un ROI dimostrato e difendibile.

## Spunti di discussione

1. Quale vero confronto, se esiste, abbiamo per la nostra attuale adozione degli strumenti di IA?
2. Abbiamo misurato insieme cycle time e qualità, o solo un'affermazione di velocità?
3. Quale affermazione autodichiarata sull'assistenza dell'IA dovremmo convalidare rispetto a dati oggettivi?
4. Quale categoria specifica di compiti mostra per noi la prova più forte di un genuino valore dell'assistenza dell'IA?
5. Potremmo oggi difendere con prove il nostro investimento negli strumenti di IA davanti a uno stakeholder finanziario scettico?

## Punti chiave

- Misura lo sviluppo assistito dall'IA per **risultato**, non per volume di output né
  per statistiche d'uso riportate dal fornitore.
- Usa un **vero gruppo di confronto o una linea di base storica**, non solo
  un'istantanea prima-dopo vulnerabile ai fattori di confondimento.
- Misura **insieme cycle time e qualità**, includendo l'intera pipeline, tempi di
  revisione e correzione, non solo la velocità di generazione.
- Tratta i **risparmi di tempo autodichiarati come ipotesi**, non come conclusione, e
  convalidali rispetto a dati oggettivi.
- **Segmenta per tipo di compito**; un unico numero misto nasconde dove il valore si
  concentra davvero e dove no.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la disciplina di misurazione dei risultati che questo argomento
  applica alla valutazione degli strumenti di IA).
- La ricerca di GitHub sulla programmazione in coppia con l'IA e sulla produttività
  degli sviluppatori (ricerca empirica su scala di settore sui risultati dello
  sviluppo assistito dall'IA).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021) (la disciplina di misurazione multidimensionale che questo argomento applica a
  una nuova categoria specifica di strumenti).
- *How to Measure Anything*, di Douglas W. Hubbard (costruire confronti difendibili e
  quantificare il valore in condizioni di genuina incertezza).
