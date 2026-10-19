# 1.6 Alfabetizzazione statistica per le metriche di ingegneria

## Panoramica e motivazione

Non serve una laurea in statistica per gestire bene un programma di metriche, ma
bisogna evitare un piccolo numero di errori specifici e comuni che rendono
attivamente fuorvianti metriche per il resto ben governate e ben strumentate. Un
team può fare tutto giusto, nominare una decisione chiara, evitare la legge di
Goodhart, dare peso ai risultati, governare la responsabilità, strumentare in
modo affidabile, e trarre comunque la conclusione sbagliata perché ha letto una
media dove serviva un percentile, ha scambiato il rumore per un trend, o è
caduto in una coincidenza travestita da causa. Questo argomento è il minimo di
giudizio statistico che il libro presume abbia già chi legge ogni argomento
successivo.

Il problema centrale è che le metriche di ingegneria sono di solito rumorose,
asimmetriche e a campione ridotto rispetto agli standard della statistica
formale. Il conteggio settimanale dei rilasci di un singolo team non è una
curva a campana regolare; è un pugno di punti con occasionali grandi valori
anomali (un grande rilascio, una raffica di rollback dovuta a un incidente).
Applicare a questo tipo di dati le intuizioni ingenue costruite per insiemi di
dati grandi e ben comportati produce con regolarità conclusioni sicure e
sbagliate. Imparare a riconoscere quando un numero è troppo rumoroso per fidarsi,
quando una media ti sta mentendo e quando due cose che si muovono insieme non
dicono nulla sulla causalità non è un rigore facoltativo: è ciò che distingue
un programma di metriche che insegna a un'organizzazione qualcosa di vero da uno
che le insegna qualcosa di plausibile e falso.

Alla scala enterprise e governativa gli errori statistici si compongono perché
una conclusione fuorviante, una volta accettata dalla dirigenza, viene messa in
pratica in molti team prima che qualcuno pensi di riesaminare l'analisi
sottostante. Un confronto statisticamente ingenuo tra due divisioni, o tra prima
e dopo una grande riorganizzazione, può plasmare per anni le decisioni di
allocazione delle risorse sulla base di nient'altro che rumore o di un fattore
di confondimento che nessuno ha controllato. Questo argomento esiste per rendere
quel fallimento meno probabile.

## Principi chiave

- **Una mediana o un percentile di solito dice più di una media.** I dati di
  ingegneria sono abitualmente asimmetrici per valori anomali che le medie
  assorbono e i percentili no.
- **I campioni piccoli producono numeri rumorosi.** Una percentuale calcolata su
  un manipolo di eventi oscilla in modo violento per ragioni che nulla hanno a
  che vedere con un cambiamento reale.
- **La regressione verso la media inganna di continuo.** Una lettura insolitamente
  buona o cattiva tende a essere seguita da una più normale, con o senza alcun
  intervento.
- **Correlazione non è causalità, e le variabili di confondimento sono
  dappertutto.** Due metriche che si muovono insieme possono condividere una
  terza causa nascosta anziché una guidare l'altra.
- **Un [grafico di controllo](https://en.wikipedia.org/wiki/Control_chart) batte un singolo
  confronto prima-dopo.** Vedere l'intervallo normale di variazione è ciò che
  permette di distinguere uno spostamento reale dal rumore.

## Raccomandazioni

### Usa per impostazione predefinita mediane e percentili per i dati asimmetrici

Le metriche di ingegneria basate sul tempo, lead time, tempo di ripristino da un
incidente, latenza di risposta, sono quasi sempre asimmetriche a destra: la
maggior parte dei valori si concentra in basso, con una lunga coda di
occasionali grandi valori anomali. Una media trascinata da quella coda può
dipingere un quadro in cui nessun caso tipico si riconosce. Riporta la
**mediana** (il valore centrale, in cui metà delle osservazioni sta sopra e metà
sotto) insieme al **90° o al 95° percentile** (il valore sotto il quale cade il
90% o il 95% delle osservazioni), che insieme mostrano sia il caso tipico sia la
coda del caso peggiore che un team vive davvero. L'argomento sui KPI del libro
gemello `software-engineering-guide`, e ogni argomento sulle metriche di
consegna della Parte 2 di questo libro, presuppone questa abitudine ovunque.

### Sappi quando un campione è troppo piccolo per fidarsene

Un tasso di fallimento dei cambiamenti calcolato su tre rilasci in una settimana
lenta non è un segnale significativo; un solo fallimento sposta la percentuale
da 0% a 33% da un giorno all'altro per ragioni che possono non avere nulla a che
fare con il rischio sottostante. Prima di reagire a una metrica basata su una
percentuale, controlla il conteggio sottostante. Come regola pratica, tratta un
tasso calcolato su meno di circa venti o trenta eventi sottostanti come
rumoroso, bisognoso di una finestra di osservazione più lunga prima di trarre
una conclusione, e dillo esplicitamente sulla dashboard anziché presentare una
percentuale volatile a campione piccolo con la stessa sicurezza di una stabile a
campione grande.

### Fai attenzione alla regressione verso la media prima di attribuire il merito a un intervento

Se alla peggiore settimana di sempre per gli incidenti di un team segue
l'attenzione della dirigenza e un successivo miglioramento, è allettante
attribuire il merito all'intervento. Spesso, una parte di quel miglioramento
sarebbe avvenuta comunque, perché a una lettura insolitamente estrema tende a
seguire una più tipica come puro artefatto statistico, un fenomeno chiamato
**regressione verso la media**. Difenditi confrontando con una base storica più
lunga anziché con il singolo punto estremo che ha attirato l'attenzione, ed
essendo opportunamente umile su quanto di un miglioramento osservato attribuire
a un'azione specifica.

### Cerca le variabili di confondimento prima di affermare che una metrica ha causato un risultato

Quando due metriche si muovono insieme, la frequenza di rilascio che sale
accanto alla soddisfazione dei clienti, resisti al riflesso di dire che una ha
causato l'altra prima di considerare una **variabile di confondimento**: un
terzo fattore nascosto che guida entrambe. Il lancio di una nuova funzionalità
potrebbe far salire in modo indipendente sia la frequenza di rilascio (più
correzioni di seguito) sia la soddisfazione (la funzionalità stessa), senza
alcun legame causale tra le due metriche. Prima di presentare una correlazione
come prova di causalità, chiediti attivamente che cos'altro è cambiato nello
stesso momento che potrebbe spiegare entrambi i movimenti.

### Usa un grafico di controllo, non un singolo istante prima-dopo

Un **grafico di controllo** traccia una metrica nel tempo mostrando
esplicitamente il suo intervallo normale di variazione, tipicamente come bande
attorno a una media centrale. Ti permette di distinguere uno spostamento
genuino, un punto o una serie prolungata fuori dall'intervallo normale, dal
normale rumore che un singolo confronto prima-dopo non sa distinguere. Prima di
dichiarare «il numero è migliorato dopo il cambiamento», traccia abbastanza dati
storici da vedere come appare la variazione normale, e controlla se la lettura
successiva al cambiamento cade davvero al di fuori di essa.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Medie | Semplici, familiari, facili da calcolare | Distorte dai valori anomali sui dati asimmetrici di ingegneria |
| Mediane e percentili | Robusti ai valori anomali, mostrano insieme caso tipico e coda | Leggermente meno familiari a un pubblico non tecnico |
| Singolo confronto prima-dopo | Rapido, intuitivo, facile da presentare | Vulnerabile alla regressione verso la media e al rumore |
| Grafici di controllo e basi storiche più lunghe | Distinguono in modo affidabile gli spostamenti reali dal rumore | Richiedono più dati storici e più spiegazioni a un pubblico non tecnico |

La tensione centrale è **semplicità contro rigore**. Le medie e i singoli
confronti prima-dopo sono più facili da calcolare e spiegare, ed è esattamente
per questo che dominano la reportistica occasionale, ma sono anche le due
tecniche più probabili nel produrre una conclusione sicura e sbagliata sul tipo
di dati rumorosi e asimmetrici che le metriche di questo libro generano. Si
risolve la tensione usando per impostazione predefinita le tecniche più
rigorose, mediane, percentili e grafici di controllo, per qualsiasi decisione
con conseguenze reali, e riservando le tecniche più semplici a sguardi
esplorativi a bassa posta in cui una lettura sbagliata costa poco.

## Domande da discutere con il vostro team

1. **Quali dei riquadri della nostra dashboard riportano una media dove una
   mediana o un percentile racconterebbe una storia più vera?** Le metriche di
   ingegneria basate sul tempo sono quasi sempre asimmetriche, e una media su
   dati asimmetrici può sembrare a posto mentre il caso tipico, o la coda del
   caso peggiore, racconta tutt'altra storia. Verificate specificamente i
   riquadri basati sul tempo per questa sostituzione.

2. **Quanto è piccolo il campione sottostante alle nostre metriche basate su
   percentuali, e trattiamo con la stessa sicurezza una metrica su dieci
   eventi e una su mille?** Un tasso volatile a campione piccolo presentato
   senza il suo conteggio sottostante invita a reagire in modo eccessivo al
   rumore. Controllate il tasso di fallimento dei cambiamenti e riquadri
   percentuali simili per questa lacuna.

3. **Abbiamo mai attribuito a un intervento un miglioramento che la regressione
   verso la media avrebbe prodotto comunque?** È uno degli errori statistici più
   facili da commettere e dei più difficili da notare a posteriori, perché
   l'intervento e il miglioramento sono davvero avvenuti in quell'ordine.
   Riguardate una recente storia del tipo «l'abbiamo risolto» e chiedetevi
   onestamente se il confronto con la base fosse abbastanza lungo da escluderlo.

4. **Dove abbiamo dato per scontato che una metrica ne abbia causata un'altra
   senza cercare una variabile di confondimento?** Due cose che si muovono
   insieme sono comuni; una che ne causa un'altra è un'affermazione più forte
   che richiede più prove. Scegliete una correlazione in cui il vostro team
   crede oggi e provate a indicare un plausibile fattore di confondimento che la
   spieghi senza alcun legame causale.

5. **Abbiamo abbastanza dati storici da sapere come appare la variazione
   normale per le nostre metriche più importanti, o stiamo confrontando singoli
   punti?** Senza un senso dell'intervallo normale, qualsiasi singola lettura
   appare allarmante o rassicurante a seconda dell'umore anziché delle prove.
   Discutete se la vostra metrica più osservata sia mai stata tracciata come
   grafico di controllo anziché come numero singolo.

6. **Come comunichiamo oggi l'incertezza agli stakeholder non tecnici, e la
   nostra dashboard lascia intendere più precisione di quanta i dati ne
   sostengano?** Un grafico senza alcuna indicazione della variazione normale o
   della dimensione del campione può far reagire in modo eccessivo la dirigenza
   al rumore o, altrettanto spesso, farle liquidare come rumore un segnale
   reale. Discutete come la vostra reportistica potrebbe comunicarlo con
   onestà senza diventare illeggibile.

## Prospettiva settoriale

**Startup.** I team piccoli generano campioni piccoli quasi ovunque, il che
significa che la cautela sui campioni piccoli di questo argomento conta di
continuo. Resistete a trarre conclusioni forti da una singola settimana brutta o
da una singola ottima; con solo un manipolo di punti, la risposta onesta a «è un
trend?» è spesso «non lo sappiamo ancora».

**Piccola impresa.** Le dashboard integrate degli strumenti pronti all'uso
impostano spesso per default medie e confronti su un solo periodo, perché sono
le cose più semplici da calcolare e mostrare. Dove lo strumento lo consente,
passate alle mediane per le metriche basate sul tempo, e siate scettici verso
qualsiasi titolo «più 40% questo mese» calcolato su un piccolo conteggio
sottostante.

**Enterprise.** A questa scala gli errori statistici finiscono incorporati in
decisioni di allocazione delle risorse e di riorganizzazione che riguardano
centinaia di persone. Investite in analisti o specialisti dei dati integrati nei
team che sappiano costruire veri grafici di controllo e verificare i fattori di
confondimento prima che un confronto tra unità di business o prima-dopo un
grande cambiamento venga presentato alla dirigenza come dato acquisito.

**Settore pubblico.** Un confronto statisticamente ingenuo che alimenta un
rapporto pubblico o la giustificazione di un budget può avere conseguenze reali
sproporzionate e invita proprio il tipo di esame che espone pubblicamente
un'analisi approssimativa. Applicate le tecniche più rigorose, grafici di
controllo, dimensioni dei campioni documentate, verifiche dei fattori di
confondimento, come pratica permanente per tutto ciò che viene pubblicato
all'esterno, non solo come sforzo occasionale.

## Esempi

**Enterprise.** La dirigenza di un'azienda software festeggiò un miglioramento
del 25% del tasso di fallimento dei cambiamenti il mese successivo
all'introduzione di una nuova policy di revisione del codice, attribuendone il
merito direttamente alla policy. Un esame più attento scoprì che il mese «prima»
era stato insolitamente cattivo, a causa di una migrazione andata male di un
solo team, e che la dimensione del campione in entrambi i mesi era inferiore a
trenta rilasci in tutta l'azienda. Un grafico di controllo basato su dodici mesi
di storico mostrò che la nuova lettura era ben dentro la variazione normale, non
un vero salto di livello, e che l'effetto effettivo della policy, pur reale, era
molto più piccolo del numero in evidenza.

**Settore pubblico.** Un'azienda di trasporto pubblico riportò un grande
miglioramento anno su anno della puntualità per un sistema di pianificazione
appena digitalizzato, confrontando un singolo trimestre «prima» con un singolo
trimestre «dopo». Una revisione indipendente scoprì che il trimestre «prima»
era coinciso con una chiusura per lavori estranea che aveva depresso le
prestazioni dell'intera rete, e che una base storica più lunga mostrava che la
puntualità si stava già riprendendo prima del lancio del nuovo sistema. Il
rapporto rivisto dell'azienda usò un grafico di controllo pluriennale completo e
attribuì al nuovo sistema in particolare un miglioramento più modesto, ma più
difendibile.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'alfabetizzazione statistica è la cattiva direzione evitata: un'organizzazione
che attribuisce correttamente un miglioramento, o riconosce correttamente il
rumore come rumore, spende il proprio prossimo investimento dove aiuterà davvero
anziché inseguire un effetto fantasma. L'esempio del commercio qui sopra è
tipico: un'azienda convinta che la sola policy di revisione avesse prodotto un
miglioramento del 25% potrebbe sottoinvestire in altri contributi reali, o
sopravvalutare il valore della policy in un modo che fuorvia le decisioni
future.

Il costo totale del rigore statistico è per lo più un cambiamento di abitudine
più che nuovi strumenti: scegliere una mediana al posto di una media, controllare
la dimensione di un campione prima di reagire, tracciare una base più lunga
prima di cantare vittoria. Queste abitudini costano poco da adottare e
prevengono il costo molto più grande, e più difficile da individuare, di
decisioni prese su conclusioni sicure e sbagliate.

## Antipattern e insidie

- **Riportare una media su dati asimmetrici basati sul tempo:** nasconde il caso
  tipico e la coda dietro un solo numero fuorviante.
- **Reagire a una percentuale senza dimensione del campione visibile:** tratta
  il rumore di un manipolo di eventi come se fosse un trend stabile e
  significativo.
- **Attribuire il merito a un intervento senza escludere la regressione verso la
  media:** un errore comune, facile da commettere e difficile da notare.
- **Affermare la causalità dalla correlazione senza considerare i fattori di
  confondimento:** sopravvaluta ciò che i dati sostengono davvero.
- **Confrontare un singolo istante prima-dopo anziché tracciare una base più
  lunga:** non sa distinguere uno spostamento reale dalla normale variazione.
- **Lasciare intendere più precisione di quanta i dati ne sostengano nella
  reportistica rivolta alla dirigenza:** invita a reagire in modo eccessivo al
  rumore o a liquidare un segnale reale.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche sono riportate come medie grezze e
  singoli istanti prima-dopo, senza attenzione alla dimensione del campione,
  all'asimmetria o alla variazione di base.
- **Livello 2, Sviluppo (Develop):** Alcuni analisti applicano mediane o
  percentili in modo informale, ma non c'è una pratica organizzativa coerente e
  i fattori di confondimento sono raramente verificati.
- **Livello 3, Standardizzazione (Standardize):** Mediane e percentili sono la
  scelta predefinita per le metriche asimmetriche basate sul tempo; le
  dimensioni dei campioni sono mostrate accanto alle metriche percentuali in
  tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** I grafici di controllo con basi storiche sono
  pratica standard per qualsiasi affermazione di uno spostamento genuino; le
  variabili di confondimento sono considerate attivamente prima di formulare
  affermazioni causali nella reportistica.
- **Livello 5, Orchestrazione (Orchestrate):** Il rigore statistico è incorporato
  negli strumenti stessi, le dashboard mostrano per default percentili e bande
  di controllo, e l'organizzazione sa dimostrare che una specifica decisione
  passata è stata corretta perché una lettura statisticamente ingenua è stata
  intercettata prima di plasmare la strategia.

## Spunti di discussione

1. Quali dei titoli attuali della nostra dashboard apparirebbero diversi se sostituissimo una media con una mediana?
2. Abbiamo mai cambiato una decisione perché una percentuale si è rivelata basata su un campione molto più piccolo di quanto pensavamo?
3. Quale recente storia del tipo «abbiamo migliorato questa metrica» dovremmo riesaminare per la regressione verso la media?
4. Dove due delle nostre metriche potrebbero essere correlate attraverso una terza causa nascosta anziché una guidare l'altra?
5. I nostri grafici più importanti mostrano un intervallo normale di variazione, o solo una linea di tendenza?

## Punti chiave

- Preferisci **mediane e percentili** alle medie per le metriche di ingegneria
  asimmetriche e basate sul tempo.
- Tratta una **percentuale da un campione piccolo** come rumorosa, e dillo
  esplicitamente anziché reagirvi come a un trend stabile.
- Fai attenzione alla **regressione verso la media** prima di attribuire il merito
  a un intervento per un miglioramento seguito a una lettura insolitamente
  cattiva.
- **Correlazione non è causalità**; cerca attivamente le variabili di
  confondimento prima di formulare un'affermazione causale.
- Usa un **grafico di controllo con una vera base storica**, non un singolo
  istante prima-dopo, per distinguere uno spostamento genuino dal normale
  rumore.

## Riferimenti e letture di approfondimento

- *The Signal and the Noise*, di Nate Silver (distinguere il segnale reale dal
  rumore in dati imperfetti).
- *How to Measure Anything*, di Douglas W. Hubbard (ragionamento statistico per
  la misurazione organizzativa).
- *Understanding Variation: The Key to Managing Chaos*, di Donald J. Wheeler
  (grafici di controllo e la distinzione tra variazione da cause comuni e da
  cause speciali).
- *Thinking, Fast and Slow*, di Daniel Kahneman (bias cognitivi, tra cui la
  regressione verso la media e l'illusione della narrazione causale).
- *The Visual Display of Quantitative Information*, di Edward R. Tufte
  (presentazione onesta e ad alta integrità dei dati quantitativi).
