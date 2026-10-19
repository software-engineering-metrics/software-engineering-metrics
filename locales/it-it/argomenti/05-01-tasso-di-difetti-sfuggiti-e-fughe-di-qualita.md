# 5.1 Tasso di difetti sfuggiti e fughe di qualità

## Panoramica e motivazione

Il **tasso di difetti sfuggiti** (escaped defect rate) misura i difetti che
raggiungono la produzione e colpiscono utenti reali, distinti dai difetti intercettati
prima attraverso test, revisione del codice o analisi statica, tutti trattati nella
Parte 4 di questo libro. La distinzione conta enormemente: un difetto intercettato in
revisione del codice costa minuti da correggere e nessun utente lo vede mai; lo stesso
difetto, se sfugge in produzione, può costare ore di risposta a un incidente, un danno
reale ai clienti e un colpo misurabile alla fiducia. Questa metrica è, in senso
reale, il quadro finale di valutazione di tutto ciò che la Parte 4 tratta, dato che un
tasso di difetti sfuggiti in crescita nonostante metriche interne di qualità solide
(complessità, copertura, analisi statica) significa di solito che quei segnali interni
non stanno effettivamente intercettando le modalità di guasto che contano per gli
utenti reali.

Questo argomento tratta i difetti sfuggiti con la serietà che il loro costo merita
resistendo alla tentazione di trattare il conteggio grezzo come un semplice tabellone.
Non tutti i difetti sono uguali: un refuso in un testo di aiuto raramente visto e un
bug di corruzione dei dati in un sistema di transazioni finanziarie sono entrambi,
tecnicamente, difetti sfuggiti, e trattarli in modo identico produce una metrica
troppo rumorosa per agire oppure, peggio, attivamente fuorviante su dove viva il
rischio reale. La raccomandazione centrale di questo argomento, il tracciamento pesato
per gravità con attenzione al modo in cui i difetti vengono classificati, mira
direttamente a quel problema.

Per i team grandi, il tasso di difetti sfuggiti è uno dei ponti più chiari tra le
metriche interne di ingegneria di questo libro e il mondo rivolto ai clienti di cui si
occupa l'intera Parte 5. Le organizzazioni enterprise lo usano per giustificare
l'investimento nelle pratiche di test e revisione della Parte 4; le organizzazioni
governative, dove un difetto sfuggito può significare un calcolo errato di
un'indennità o un'interazione fallita con un servizio pubblico, lo trattano come una
misura diretta della fiducia del pubblico e dell'esposizione legale, non come un
semplice dato statistico interno di ingegneria.

## Principi chiave

- **Il tasso di difetti sfuggiti è il quadro finale di valutazione della pratica di
  qualità interna.** Un tasso in crescita nonostante solide metriche della Parte 4
  significa che quelle metriche non stanno intercettando ciò che conta.
- **La gravità conta più del conteggio grezzo.** Pesa i difetti in base all'impatto
  effettivo su clienti o business, anziché trattare ogni fuga in modo identico.
- **La coerenza della classificazione è essenziale.** Due team che classificano la
  gravità in modo diverso producono numeri che non si possono confrontare in modo
  equo.
- **Questa metrica è esposta alla manipolazione della definizione**, esattamente come
  il tasso di fallimento dei cambiamenti (argomento 2.10): restringere ciò che conta
  come «difetto» lusinga il numero senza ridurre il danno reale ai clienti.
- **La categorizzazione delle cause radice trasforma un conteggio in uno strumento
  diagnostico.** Sapere *perché* i difetti sfuggono è più azionabile che sapere solo
  quanti ne sono sfuggiti.

## Raccomandazioni

### Pesa i difetti sfuggiti per gravità, usando una scala coerente e documentata

Classifica ogni difetto sfuggito usando una scala di gravità fissa (comunemente
critico, maggiore, minore, o un equivalente numerato) in base all'impatto effettivo
sui clienti o sul business: perdita o corruzione di dati, esposizione della sicurezza
e completa indisponibilità di una funzionalità stanno in cima; un problema estetico
senza impatto funzionale sta in fondo. Traccia un trend pesato per gravità, non solo
un conteggio grezzo, così che un picco di problemi minori non sommerga visivamente un
aumento più piccolo ma molto più rilevante di quelli critici.

### Standardizza i criteri di classificazione tra i team

Team diversi lasciati a classificare la gravità in modo indipendente derivano verso
standard diversi, alcuni prudenti, altri indulgenti, rendendo privo di senso il
confronto tra team e, peggio, creando un incentivo a classificare con larghezza verso
il basso per far apparire meglio i numeri del proprio team (una variante della
manipolazione della definizione dell'argomento 1.2). Pubblica criteri di
classificazione chiari e basati su esempi, e verifica periodicamente un campione di
classificazioni tra i team per controllarne la coerenza.

### Traccia la [causa radice](https://en.wikipedia.org/wiki/Root_cause_analysis), non solo conteggio e gravità

Per ogni difetto sfuggito, registra perché è sfuggito: una lacuna di test, un caso
limite trascurato nei requisiti, una differenza di ambiente tra staging e
produzione, una revisione che non ha colto il problema. Aggrega questi dati di causa
radice nel tempo per trovare schemi sistemici, se una categoria specifica (per
esempio i difetti da differenza di ambiente) domina le tue fughe, indica direttamente
una specifica lacuna di processo correggibile anziché un vago appello generale a
«testare di più».

### Collega i difetti sfuggiti ai segnali di qualità interni da cui provengono

Dove possibile, ricostruisci un difetto sfuggito fino all'area di codice da cui
proviene e verifica se quell'area mostrava segnali d'allarme nelle metriche della
Parte 4: era un hotspot di complessità (argomento 4.1, argomento 4.3), aveva un basso
tasso di uccisione dei mutanti (argomento 4.2), l'analisi statica ha segnalato
qualcosa nelle vicinanze (argomento 4.4). Questo collegamento è ciò che convalida se
le tue metriche interne di qualità siano davvero predittive di difetti reali rivolti ai
clienti, o se misurino qualcosa che, nel tuo contesto specifico, non correla con ciò che
i clienti sperimentano davvero.

### Evita che la classificazione dei difetti diventi un esercizio di colpevolizzazione

Imposta l'analisi delle cause radice dei difetti esplicitamente come una domanda sui
sistemi, secondo l'impostazione diagnostica dell'argomento 1.1, non come un esercizio
di colpa individuale. Un team che teme la colpa per un difetto sfuggito ha un forte
incentivo a sottostimare, a classificare verso il basso o a resistere a un'analisi
approfondita delle cause radice, tutte cose che corrompono i dati stessi da cui questo
argomento dipende. La pratica del postmortem senza colpa, trattata più in profondità
nell'argomento 6.2, si applica qui direttamente.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Conteggio grezzo dei difetti sfuggiti | Semplice da riportare | Tratta in modo identico un refuso e un bug di corruzione dei dati; rumoroso e fuorviante |
| Tracciamento pesato per gravità | Riflette con maggiore accuratezza l'impatto effettivo sui clienti | Richiede una classificazione coerente e disciplinata |
| Standard di classificazione indipendenti per team | Flessibili, poco overhead di coordinamento | Producono numeri non confrontabili tra team; invitano a una deriva indulgente |
| Classificazione standardizzata e verificata | Equa, confrontabile, resiste alla manipolazione | Richiede governance continua e sforzo periodico di verifica |

La tensione centrale è **flessibilità locale contro confrontabilità tra team**.
Lasciare che ogni team classifichi la gravità dei difetti nel modo che meglio si
adatta al proprio contesto è più semplice da attuare ma produce numeri che non si
possono confrontare né aggregare in modo equo a livello organizzativo, e crea un
incentivo silenzioso per un team a classificare con larghezza per proteggere le
proprie metriche. Si risolve la tensione investendo in criteri di classificazione
standardizzati e documentati e in verifiche periodiche tra team, trattando questo
come lavoro di governance (argomento 1.4) che vale l'investimento dato quanto
direttamente questa metrica si colleghi all'impatto reale sui clienti.

## Domande da discutere con il vostro team

1. **Tracciamo i difetti sfuggiti per gravità, o un conteggio grezzo tratta un
   problema estetico minore allo stesso modo di un problema critico sui dati?**
   Guardate la vostra dashboard effettiva e controllate; se la pesatura per gravità
   non è già in atto, è il cambiamento singolarmente di maggior valore che questo
   argomento raccomanda.

2. **Due team diversi classificherebbero la gravità dello stesso difetto nello stesso
   modo, o la classificazione è derivata in direzioni diverse nell'organizzazione?**
   Scegliete un difetto passato reale e ambiguo e fate classificare in modo
   indipendente da rappresentanti di due team diversi; confrontate i risultati con
   onestà.

3. **Qual è la causa radice più comune dei nostri difetti sfuggiti, e il nostro
   processo attuale la affronta davvero, o continuiamo a rispondere ai singoli
   incidenti man mano che accadono?** Aggregate i vostri dati di causa radice degli
   ultimi mesi e cercate lo schema dominante.

4. **I nostri difetti sfuggiti sono risaliti ad aree che le nostre metriche interne
   di qualità (complessità, copertura, analisi statica) avevano già segnalato come
   rischiose?** Questo collegamento convalida se le vostre metriche della Parte 4 siano
   davvero predittive nel vostro contesto specifico, o se perdano le modalità di
   guasto che contano davvero.

5. **Il nostro processo di classificazione dei difetti risulta sicuro, o gli
   ingegneri temono la colpa quando segnalano o classificano un difetto a cui sono
   associati?** Una cultura incline alla colpa corrompe sistematicamente questi dati
   con sottostima e classificazione indulgente; siate onesti sulla vostra cultura
   attuale in proposito.

6. **Il nostro tasso di difetti sfuggiti è mai migliorato in modo sospettosamente
   rapido senza alcun cambiamento corrispondente nelle pratiche di test o revisione?**
   Come per il tasso di fallimento dei cambiamenti (argomento 2.10), è il segno più
   chiaro che a muoversi siano stati i criteri di classificazione, non il rischio
   reale.

## Prospettiva settoriale

**Startup.** La classificazione formale per gravità è spesso superflua con un piccolo
volume di difetti e un piccolo team che può discutere direttamente di ciascuno.
L'abitudine da adottare presto è semplicemente tracciare i difetti in modo coerente
fin dall'inizio, anche informalmente, così che esistano dati storici quando il team
sarà cresciuto abbastanza da avere bisogno di un'analisi più formale.

**Piccola impresa.** Una semplice scala di gravità condivisa, anche a tre livelli
(critico, maggiore, minore), applicata in modo coerente da chi gestisce il supporto
e il triage dei bug, cattura la maggior parte del valore di questo argomento senza
bisogno di strumenti sofisticati né di una funzione dedicata alla qualità.

**Enterprise.** La coerenza di classificazione tra team è qui l'investimento a più
alta leva, dato che standard incoerenti su decine di team rendono privo di senso il
confronto di qualità a livello di organizzazione. Investite in criteri di
classificazione documentati e basati su esempi e in verifiche periodiche, e collegate
sistematicamente i difetti sfuggiti ai segnali interni di qualità della Parte 4 per
convalidare quali di quei segnali siano davvero predittivi per la vostra
organizzazione.

**Settore pubblico.** Un difetto sfuggito in un sistema rivolto al pubblico o di
calcolo delle prestazioni ha un peso legale e di fiducia del pubblico che va oltre il
suo costo ingegneristico. Trattate la classificazione della gravità con particolare
rigore per i difetti che colpiscono i servizi rivolti ai cittadini, e siate pronti a
che le decisioni di classificazione affrontino un esame esterno, il che è un forte
argomento a favore di criteri documentati, verificati e coerenti anziché di giudizi
improvvisati.

## Esempi

**Enterprise.** Il conteggio dei difetti sfuggiti di un'azienda di software in
abbonamento era in crescita da due trimestri, e la preoccupazione iniziale si
concentrava sul numero grezzo. Un'analisi pesata per gravità rivelò che l'aumento era
quasi interamente in problemi minori ed estetici, in coincidenza con una recente
riprogettazione dell'interfaccia, mentre i difetti critici e maggiori erano in realtà
calati leggermente nello stesso periodo. L'analisi delle cause radice del picco di
problemi minori indicò una lacuna nel collaudo di regressione visiva specificamente per
i nuovi componenti dell'interfaccia, una correzione mirata e a basso costo che sarebbe
stata del tutto persa se il team avesse reagito al conteggio grezzo e non pesato come a
una crisi di qualità indifferenziata.

**Settore pubblico.** Il sistema di calcolo delle prestazioni di un'agenzia statale per
la disoccupazione ebbe un difetto sfuggito che negò per errore a una piccola
percentuale di richieste altrimenti idonee per diversi mesi prima di essere rilevato.
Un'indagine sulle cause radice scoprì che il difetto aveva avuto origine in un'area di
codice già segnalata come hotspot di complessità (argomento 4.1, argomento 4.3) in una
revisione interna di qualità diciotto mesi prima, ma quell'hotspot non era mai stato
messo in priorità per la rimediazione perché non si era ancora verificato alcun difetto
a rendere concreto il rischio. Il processo rivisto dell'agenzia pesa ora
esplicitamente di più le aree segnalate come hotspot nella priorità di test e
revisione, proprio a causa di questo collegamento dimostrato e convalidato tra segnali
interni di complessità e rischio reale di difetti sfuggiti.

## Business case: motivazioni, ROI e TCO

Il ritorno del tracciare con rigore il tasso di difetti sfuggiti, con pesatura per
gravità e analisi delle cause radice, è la capacità di dirigere l'investimento in
qualità dove ridurrà davvero il danno rivolto ai clienti, anziché reagire a un
conteggio indifferenziato che mescola senza distinzione problemi banali e gravi.
L'esempio dell'azienda di software in abbonamento qui sopra lo mostra chiaramente:
una reazione al conteggio grezzo avrebbe innescato un'ampia e poco focalizzata
iniziativa di qualità, mentre la risposta pesata per gravità e informata dalle cause
radice ha individuato una correzione specifica, economica e mirata.

Il costo totale di proprietà comprende la disciplina di classificazione (criteri
coerenti, verifiche periodiche) e lo sforzo di tracciamento delle cause radice,
entrambi principalmente investimenti di processo più che costi di strumenti. Quell'investimento
si ripaga direttamente nel costo di danno ai clienti e di risposta agli incidenti
evitato dirigendo lo sforzo di qualità verso le fonti effettive e convalidate del
rischio di difetti sfuggiti.

## Antipattern e insidie

- **Trattare un conteggio grezzo dei difetti come la metrica:** confonde problemi
  banali e gravi e oscura il segnale reale.
- **Classificazione incoerente della gravità tra i team:** rende privo di senso il
  confronto tra team e invita a una deriva di classificazione indulgente.
- **Nessun tracciamento delle cause radice:** trasforma un conteggio in un numero
  senza valore diagnostico, lasciando invisibili gli schemi sistemici.
- **Una cultura di segnalazione incline alla colpa:** corrompe i dati con sottostima
  e classificazione indulgente, esattamente il rischio di esposizione agli incentivi
  da cui l'argomento 1.2 mette in guardia.
- **Non collegare mai i difetti sfuggiti ai segnali di qualità interni:** perde
  l'occasione di convalidare, o invalidare, le metriche predittive della Parte 4
  rispetto ai risultati reali.
- **Un miglioramento sospettosamente rapido senza alcun cambiamento di processo
  alle spalle:** il segno più chiaro che a spostarsi siano stati i criteri di
  classificazione, non il rischio reale.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** I difetti sfuggiti sono tracciati, se lo sono, come
  conteggio grezzo senza pesatura per gravità né analisi delle cause radice.
- **Livello 2, Sviluppo (Develop):** Esiste una certa classificazione per gravità, ma
  gli standard variano tra i team e il tracciamento delle cause radice è incoerente.
- **Livello 3, Standardizzazione (Standardize):** La classificazione per gravità è
  standardizzata e documentata in tutta l'organizzazione, con una categorizzazione
  delle cause radice applicata in modo coerente.
- **Livello 4, Gestione (Manage):** I difetti sfuggiti sono ricondotti
  sistematicamente ai segnali di qualità interni per convalidarne il valore
  predittivo, e la classificazione è verificata periodicamente per la coerenza.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare riduzioni
  specifiche e misurabili del tasso di difetti sfuggiti ricondotte a un investimento
  in qualità mirato e informato dalle cause radice, convalidato rispetto ai segnali di
  qualità interni.

## Spunti di discussione

1. Il nostro principale difetto sfuggito dell'ultimo trimestre sarebbe stato classificato nello stesso modo da un team diverso?
2. Qual è la causa radice più comune dei nostri difetti sfuggiti, e la stiamo davvero affrontando?
3. Un difetto sfuggito è mai risalito a un'area che le nostre metriche interne avevano già segnalato?
4. Il nostro team si sente al sicuro nel segnalare e classificare con onestà un difetto che ha causato?
5. Che cosa rivelerebbe una vista pesata per gravità del nostro attuale conteggio di difetti che un conteggio grezzo nasconde?

## Punti chiave

- Il tasso di difetti sfuggiti è il **quadro finale di valutazione** della pratica
  di qualità interna; un tasso in crescita nonostante solide metriche della Parte 4
  significa che quelle metriche non intercettano ciò che conta.
- **Pesa per gravità**, usando una scala di classificazione coerente, documentata e
  verificata, mai il solo conteggio grezzo.
- Traccia la **causa radice**, non solo conteggio e gravità, per trasformare la
  metrica in un vero strumento diagnostico.
- **Collega i difetti sfuggiti ai segnali di qualità interni** (complessità,
  copertura, analisi statica) per convalidare se quei segnali siano davvero
  predittivi.
- Difenditi da una **cultura incline alla colpa** che corrompe segnalazione e
  classificazione con sottostima e deriva indulgente.

## Riferimenti e letture di approfondimento

- *Site Reliability Engineering*, a cura di Betsy Beyer, Chris Jones, Jennifer
  Petoff e Niall Richard Murphy (pratica del postmortem senza colpa applicabile
  all'analisi delle cause radice dei difetti).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il rapporto tra pratiche di consegna e risultati di qualità).
- *Code Complete*, di Steve McConnell (pratiche di classificazione dei difetti e di
  analisi delle cause radice).
- *The Field Guide to Understanding Human Error*, di Sidney Dekker (l'impostazione
  sistemica e senza colpa dell'indagine sui guasti).
