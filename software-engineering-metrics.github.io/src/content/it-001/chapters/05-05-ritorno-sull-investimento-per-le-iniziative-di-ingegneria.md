# 5.5 Ritorno sull'investimento per le iniziative di ingegneria

## Panoramica e motivazione

Questo argomento chiude la Parte 5 riunendo tutto ciò che i quattro argomenti
precedenti hanno misurato, qualità, adozione, risultati e costo, nella singola
impostazione finanziaria che in ultima analisi governa la maggior parte delle
decisioni importanti di investimento in ingegneria: il **[ritorno sull'investimento](https://en.wikipedia.org/wiki/Return_on_investment)
(ROI)**. Che un'organizzazione stia decidendo di finanziare la modernizzazione di una
piattaforma, un grande sforzo di refactoring o una nuova linea di prodotto, prima o poi
qualcuno deve rispondere in termini finanziari alla domanda: vale ciò che costa? Questo
argomento riguarda il rispondere a quella domanda con onestà, usando le metriche che
questo libro ha già costruito, anziché evitare la domanda (il che cede l'influenza sulle
decisioni di investimento a persone meno attrezzate per rispondere bene) o rispondere
con un caso gonfiato e insostenibile che danneggia la credibilità quando non regge.

La disciplina che questo argomento raccomanda attinge direttamente all'economia unitaria
dell'argomento 5.4 per il lato dei costi dell'equazione, e alle metriche di risultato
dell'argomento 5.3, con il loro trattamento onesto dell'incertezza di attribuzione, per
il lato dei benefici. Un caso di ROI costruito così è necessariamente più modesto e più
prudente di un semplice e accattivante numero in evidenza, ma ha il vantaggio decisivo
che questo libro ha sottolineato ovunque: regge all'esame, e un'organizzazione che
costruisce in modo costante casi di ROI difendibili si guadagna più fiducia, e quindi
più autonomia, nelle future decisioni di investimento di una che occasionalmente
promette troppo.

Per i team grandi, la disciplina del ROI è ciò che distingue un'organizzazione di
ingegneria trattata come partner strategico da una trattata come centro di costo la cui
spesa è tollerata anziché attivamente investita. Le organizzazioni enterprise usano casi
di ROI rigorosi per competere con successo per il capitale contro altri investimenti di
business; le organizzazioni governative usano la disciplina equivalente, spesso
riformulata come analisi costi-benefici, per ottenere e sostenere il finanziamento
tecnologico pubblico contro pressioni politiche e di bilancio che hanno poca pazienza
per promesse vaghe e non sostanziate.

## Principi chiave

- **Un caso di ROI onesto si costruisce dalle altre metriche di questo libro**, non si
  inventa a parte; costo dall'argomento 5.4, beneficio dagli argomenti dal 5.1 al 5.3.
- **Il costo totale di proprietà, non solo il costo iniziale, appartiene al lato dei
  costi.** Manutenzione continua, supporto e costo dell'infrastruttura si compongono
  nell'arco della vita di un sistema.
- **Le stime dei benefici portano incertezza; dichiarala esplicitamente** anziché
  presentare un unico numero falsamente preciso.
- **Un risultato di ROI negativo o marginale è un esito legittimo e utile.** La
  disciplina esiste per informare le decisioni con onestà, non per giustificare
  decisioni già prese.
- **Traccia il ROI effettivo a posteriori, non solo il caso previsto in anticipo.**
  Una previsione che non viene mai confrontata con la realtà non insegna nulla
  all'organizzazione.

## Raccomandazioni

### Costruisci il lato dei costi dal costo totale di proprietà, non solo dall'investimento iniziale

Includi non solo il costo iniziale di sviluppo ma l'intero **[costo totale di
proprietà](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO)**:
manutenzione continua, infrastruttura (l'economia unitaria dell'argomento 5.4 è qui
direttamente utile), supporto e il costo opportunità della capacità di ingegneria che
l'iniziativa consuma e che avrebbe potuto andare a un lavoro alternativo. Un progetto
che sembra economico sulla sola base del costo iniziale può essere costoso nell'arco
della sua intera vita una volta contato onestamente l'onere di manutenzione continua.

### Costruisci il lato dei benefici da prove documentate e oneste sui risultati

Trai le stime dei benefici dalla disciplina di misurazione dei risultati degli
argomenti dal 5.1 al 5.3: miglioramenti di qualità tradotti in minori costi di
incidenti e supporto, dati di adozione tradotti in valore guidato dall'utilizzo, e
correlazioni sui risultati di business costruite con l'approccio onesto, a catena
causale e con verifica dei fattori di confondimento dell'argomento 5.3. Evita di
inventare una stima dei benefici da principi primi o da un'ipotesi ottimistica quando
sono disponibili dati storici effettivamente misurati o comparabili su cui fondarla.

### Dichiara esplicitamente l'incertezza, usando un intervallo anziché un singolo numero

Presenta le stime di ROI come un intervallo (un caso prudente e un caso ottimistico)
anziché una singola cifra falsamente precisa, e spiega che cosa guidi l'intervallo:
quale ipotesi specifica, se si rivelasse ottimistica o pessimistica, sposterebbe di più
l'esito. Rispecchia direttamente il principio di alfabetizzazione statistica
dell'argomento 1.6, applicato alla previsione finanziaria, e protegge la credibilità
del caso, dato che una singola stima puntuale che si rivela sbagliata danneggia la
fiducia molto più di un intervallo ben spiegato entro cui cade l'esito effettivo.

### Tratta un risultato negativo o marginale come un esito legittimo

Costruisci il tuo processo di analisi del ROI perché sia davvero capace di concludere
«non vale la pena», e tratta quella conclusione, quando le prove la sostengono, come un
esito prezioso anziché come un fallimento dell'analisi. Un'organizzazione nota per
produrre solo casi di ROI positivi, a prescindere dall'iniziativa, perde in fretta
credibilità, perché gli stakeholder deducono correttamente che l'analisi non sia
davvero indipendente dalla decisione che dovrebbe informare.

### Traccia i risultati effettivi rispetto al caso previsto, e chiudi il cerchio pubblicamente

Dopo che un'iniziativa si conclude, o raggiunge un traguardo significativo, confronta
i risultati effettivamente misurati con l'intervallo originale previsto, e pubblica
quel confronto, inclusi i punti in cui la previsione era sbagliata. Questa disciplina
del chiudere il cerchio, simile alla raccomandazione dell'argomento 3.7 per il seguito
dei sondaggi, è ciò che costruisce la credibilità a lungo termine di un'organizzazione
nella previsione del ROI e migliora l'accuratezza delle stime future creando un vero
ciclo di feedback visibile.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Semplice affermazione di ROI a numero singolo | Convincente, facile da comunicare | Falsamente precisa; vulnerabile a essere sbagliata e a danneggiare la credibilità |
| ROI a intervallo con incertezza dichiarata | Difendibile, regge all'esame, onesto su ciò che guida l'intervallo | Più complesso da presentare; richiede più sforzo analitico |
| Analisi solo sul costo iniziale | Semplice, rapida da produrre | Sottostima il costo reale omettendo l'onere di manutenzione e supporto continui |
| Analisi completa del costo totale di proprietà | Quadro accurato e completo del vero costo dell'investimento | Richiede più raccolta di dati, in particolare per la proiezione dei costi continui |

La tensione centrale è **semplicità persuasiva contro onestà difendibile**, la stessa
tensione che l'argomento 5.3 ha nominato per le affermazioni sui risultati in
generale, ora applicata specificamente al caso finanziario. Un'affermazione di ROI a
numero singolo, semplice e sicura, è più facile da vendere a chi decide sul momento,
ma un caso onesto, a intervallo, con incertezza esplicita e una contabilità completa
del costo totale di proprietà è ciò che regge davvero nel corso della vita
dell'investimento e protegge la credibilità dell'organizzazione per il prossimo caso
che dovrà presentare.

## Domande da discutere con il vostro team

1. **Per il nostro ultimo grande caso di investimento in ingegneria, abbiamo tenuto
   conto del costo totale di proprietà, o solo del costo iniziale di sviluppo?**
   Riguardate il caso originale e controllate se manutenzione continua e costo
   dell'infrastruttura fossero inclusi, e in caso contrario stimate quanto avrebbero
   aggiunto.

2. **La nostra stima dei benefici si basava su prove documentate e misurate sui
   risultati, o era costruita su un'ipotesi ottimistica?** Ricostruite il lato dei
   benefici di un caso recente fino alla sua effettiva fonte di prova e valutate con
   onestà quanto fosse davvero fondato.

3. **Abbiamo mai presentato una stima di ROI come singolo numero quando un intervallo
   sarebbe stato più onesto?** Discutete che aspetto avrebbe avuto l'intervallo per un
   caso recente e quale ipotesi specifica ne guidasse l'ampiezza.

4. **Il nostro processo di analisi del ROI ha mai concluso che un'iniziativa non
   valeva la pena di essere perseguita, e come è stata accolta quella conclusione?**
   Se ogni analisi passata ha concluso in positivo, discutete con onestà se ciò
   rifletta una selezione davvero solida delle iniziative o un processo che produce
   sempre e solo la risposta che gli stakeholder vogliono sentire.

5. **Per un'iniziativa completata, siamo mai tornati indietro a confrontare i
   risultati effettivi con il caso originale previsto?** In caso contrario, scegliete
   una vera iniziativa completata e fate ora questo confronto come esercizio di
   gruppo, per quanto scomodo possa risultare il divario tra previsione e realtà.

6. **Che cosa servirebbe perché il nostro prossimo grande caso di ROI sia
   difendibile davanti a un esame genuino e scettico di qualcuno fuori
   dall'ingegneria?** Ripercorrete il vostro prossimo caso pianificato e individuate
   l'anello più debole della sua attuale catena di prove prima che arrivi a chi decide.

## Prospettiva settoriale

**Startup.** L'analisi formale del ROI è spesso meno rilevante di una domanda più
semplice di sopravvivenza e crescita: questo investimento ci aiuta a raggiungere il
prossimo traguardo o il prossimo round di finanziamento? Applicate comunque lo stesso
principio di onestà, resistete a gonfiare un caso per giustificare una decisione a cui
il team si è già impegnato emotivamente, dato che l'esame degli investitori applicherà
alla fine lo stesso scetticismo che questo argomento raccomanda di applicare prima
internamente.

**Piccola impresa.** Mantenete l'analisi del ROI proporzionata alla dimensione della
decisione; un grande investimento di piattaforma pluriennale merita l'intera disciplina
che questo argomento raccomanda, mentre il piccolo acquisto di uno strumento non
richiede lo stesso rigore. Concentrate lo sforzo di analisi formale sulle vostre poche
decisioni più grandi e più rilevanti.

**Enterprise.** La disciplina del ROI a questa scala è ciò che determina se
l'ingegneria competa con successo per il capitale contro altri investimenti di business
con tradizioni più consolidate di analisi finanziaria. Costruite come pratica standard
la disciplina completa di costo totale di proprietà e di intervallo che questo
argomento raccomanda, e investite nel tracciamento a chiusura del cerchio che costruisce
credibilità di previsione a lungo termine.

**Settore pubblico.** L'analisi costi-benefici, l'equivalente nel settore pubblico del
ROI, è spesso una parte formale e obbligatoria della giustificazione del budget, e
l'onestà su incertezza e costo totale di proprietà è particolarmente importante dove i
risultati possono affrontare un audit esterno o un esame legislativo. Un'analisi che ha
sopravvalutato i benefici o sottostimato i costi, una volta scoperta, causa un danno
duraturo alla credibilità di un programma presso l'ente che lo finanzia.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda di tecnologia per la logistica
propose un grande investimento nella migrazione di un monolite ereditato verso
un'architettura a microservizi, presentando inizialmente una singola cifra di ROI
ottimistica basata soprattutto sui miglioramenti previsti della frequenza di rilascio.
Le domande scettiche di uno stakeholder finanziario misero in luce che il caso non
aveva tenuto conto della sostanziale complessità operativa continua e del costo di
infrastruttura che la nuova architettura avrebbe introdotto. Un caso rivisto, costruito
con il costo totale di proprietà completo e con un intervallo che rifletteva sia scenari
prudenti sia ottimistici di miglioramento della consegna, mostrò un ritorno atteso più
modesto ma comunque positivo e, cosa critica, resse all'esame del team finanziario e
ottenne il finanziamento, dove il caso originale sopravvalutato probabilmente non
sarebbe riuscito.

**Settore pubblico.** Il programma di digitalizzazione degli atti giudiziari di un
governo statale costruì il proprio caso costi-benefici iniziale solo attorno ai risparmi
sui costi amministrativi, con una singola cifra precisa di ROI. La revisione di un
ufficio di bilancio indipendente scoprì che la proiezione non aveva tenuto conto dei
risparmi di tempo per i cittadini né della riduzione degli errori nei procedimenti
legali, benefici reali ma omessi perché più difficili da quantificare dei costi
amministrativi. Un'analisi rivista incorporò questi benefici con un intervallo
esplicitamente dichiarato che rifletteva la genuina incertezza di misurazione
coinvolta, producendo un caso più forte e, cosa importante, più difendibile che l'ufficio
di bilancio approvò infine, proprio perché era trasparente su ciò che sapeva e non
sapeva con sicurezza.

## Business case: motivazioni, ROI e TCO

Il ritorno di una rigorosa disciplina del ROI è, in modo un po' ricorsivo, la
credibilità della disciplina del ROI stessa: un'organizzazione che costruisce in modo
costante casi onesti e difendibili, incluso concludere occasionalmente che
un'iniziativa non vale la pena di essere perseguita, si guadagna più fiducia e quindi
più autonomia nelle future decisioni di investimento di una i cui casi sono visti con
scetticismo perché hanno già promesso troppo. L'esempio dell'azienda di logistica qui
sopra lo mostra direttamente: il caso rivisto, più modesto ma onesto, ha avuto
successo dove l'originale gonfiato probabilmente avrebbe fallito sotto esame.

Il costo totale di proprietà di questa disciplina è lo sforzo analitico per costruire
stime di costo complete del costo totale di proprietà, fondare le stime dei benefici su
prove reali, dichiarare esplicitamente l'incertezza e tracciare i risultati effettivi a
posteriori. Quello sforzo è davvero più lavoro di una proposta rapida e sicura a numero
singolo, e vale la pena proprio perché l'alternativa mette a rischio la credibilità
dell'organizzazione per ogni caso futuro che dovrà presentare.

## Antipattern e insidie

- **Analisi solo sul costo iniziale, che omette il costo totale di proprietà:**
  sottostima il vero costo dell'investimento, in particolare per i sistemi longevi.
- **Inventare stime dei benefici da ipotesi ottimistiche anziché da prove
  documentate:** produce un caso che non regge all'esame.
- **Presentare un singolo numero di ROI falsamente preciso anziché un intervallo
  dichiarato:** danneggia la credibilità quando l'esito effettivo differisce dalla
  stima puntuale.
- **Un processo di analisi che produce sempre e solo conclusioni positive:**
  letto correttamente dagli stakeholder come prova che il processo non è davvero
  indipendente.
- **Non tracciare mai i risultati effettivi rispetto alla previsione originale:**
  perde il ciclo di feedback che migliorerebbe l'accuratezza delle previsioni future.
- **Costruire un caso per giustificare una decisione a cui ci si è già impegnati
  emotivamente, anziché per informarla davvero:** la causa radice della maggior parte
  dei casi di ROI gonfiati.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** I casi di ROI sono informali, privi di prove
  documentate e quasi sempre concludono in positivo a prescindere dall'iniziativa.
- **Livello 2, Sviluppo (Develop):** Alcuni casi includono stime di costi e benefici,
  ma il costo totale di proprietà è applicato in modo incoerente e l'incertezza è
  raramente dichiarata esplicitamente.
- **Livello 3, Standardizzazione (Standardize):** I casi di ROI usano in modo coerente
  il costo totale di proprietà completo, prove documentate dei benefici e un intervallo
  dichiarato che riflette l'incertezza genuina, in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** I risultati effettivi sono tracciati rispetto alle
  previsioni originali dopo il completamento, e il confronto è pubblicato e usato per
  migliorare le previsioni future.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una storia
  dimostrata e pluriennale di previsioni di ROI accurate e oneste, inclusi casi che
  hanno concluso correttamente che un'iniziativa non valeva la pena di essere
  perseguita, e questa storia guadagna all'ingegneria un posto fidato nelle decisioni
  strategiche di investimento.

## Spunti di discussione

1. Qual è il nostro maggiore caso di investimento attuale, e reggerebbe oggi a un esame davvero scettico?
2. Abbiamo mai confrontato il risultato effettivo di un'iniziativa completata con la sua originale previsione di ROI?
3. Che cosa dovrebbe cambiare nel nostro processo di analisi perché sia davvero capace di concludere «non vale la pena»?
4. Quale componente del costo totale di proprietà manca più spesso dalle nostre attuali stime di costo?
5. Qual è l'unico anello più debole della catena di prove del nostro prossimo grande caso di investimento pianificato?

## Punti chiave

- Costruisci i casi di ROI dalle **altre metriche di questo libro**, costo
  dall'economia unitaria (argomento 5.4), beneficio da prove documentate sui risultati
  (argomenti dal 5.1 al 5.3), non da ipotesi inventate.
- Includi il **costo totale di proprietà**, non solo il costo iniziale, e dichiara le
  stime dei benefici come **intervallo con incertezza esplicita**, non come singolo
  numero falsamente preciso.
- Costruisci un processo davvero capace di concludere che un'iniziativa **non vale la
  pena di essere perseguita**; un'analisi che produce sempre e solo conclusioni
  positive non è credibile.
- **Traccia i risultati effettivi rispetto alla previsione** dopo il completamento, e
  pubblica il confronto per costruire credibilità di previsione a lungo termine.
- Una disciplina del ROI onesta e difendibile è ciò che guadagna nel tempo
  all'ingegneria un **posto fidato** nelle decisioni strategiche di investimento.

## Riferimenti e letture di approfondimento

- *How to Measure Anything*, di Douglas W. Hubbard (quantificare il valore incerto e
  costruire stime difendibili basate su intervalli).
- *Cloud FinOps*, di J.R. Storment e Mike Fuller (disciplina del costo totale di
  proprietà per l'investimento in infrastrutture basate sul cloud).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la base di ricerca per collegare l'investimento nelle pratiche di
  consegna al ritorno di business).
- U.S. Office of Management and Budget Circular A-94, linee guida sull'analisi
  costi-benefici per i programmi federali (disciplina del ROI nel settore pubblico).
