# 2.4 Flow Time e Flow Load

## Panoramica e motivazione

Il **Flow Time** è il tempo totale trascorso da quando un flow item (argomento 2.2)
entra nel flusso di valore a quando viene consegnato, e misura la reattività
lungo l'intero percorso da un bisogno di business individuato a un cliente che
riceve valore. Il **Flow Load** è il numero totale di flow item attualmente attivi
o in attesa nel flusso di valore in un dato momento, il nome che il Flow Framework
dà a ciò che l'argomento 2.5 chiama lavoro in corso. Insieme sono le due metriche
del Flow Framework che si collegano più direttamente alla matematica delle code,
perché il Flow Load non si limita a correlare con il Flow Time, lo determina
matematicamente.

Quella relazione è la **[legge di Little](https://en.wikipedia.org/wiki/Little%27s_law)**,
una dimostrazione della teoria delle code (l'argomento 2.7 la tratta per intero)
secondo cui il numero medio di elementi in un sistema stabile è uguale al tasso
medio di arrivo moltiplicato per il tempo medio che ciascun elemento trascorre nel
sistema. Applicata qui: il Flow Load è uguale al tasso di arrivo moltiplicato per
il Flow Time. È il fatto più utile di questo argomento, perché trasforma una
discussione che era qualitativa, «siamo troppo sovraccarichi, le cose richiedono
troppo tempo», in una dimostrabile e quantitativa che un dirigente di business non
può liquidare facilmente: se il Flow Load continua a salire mentre il tasso di
arrivo resta piatto, il Flow Time è matematicamente garantito salire anch'esso, non
solo probabilmente.

Per i team grandi, questo è spesso il numero più persuasivo dell'intero framework.
Un dirigente di business che resiste all'idea di dire di no a nuovo lavoro,
perché ogni richiesta sembra individualmente giustificata, accetterà spesso che
sovraccaricare un flusso di valore rallenta dimostrabilmente ogni item già
presente, una volta che il Flow Load è tracciato e la relazione con il Flow Time
è mostrata direttamente anziché argomentata in astratto. Le organizzazioni
enterprise che destreggiano molte iniziative strategiche concorrenti e i
programmi governativi che gestiscono decine di filoni paralleli dipendono entrambi
da questa dimostrazione, non solo dall'intuizione che la sostiene, per
giustificare il dire di no all'avvio di altro lavoro contemporaneo.

## Principi chiave

- **Il Flow Load determina matematicamente il Flow Time, tramite la legge di
  Little.** Non è correlazione; è una dimostrazione che vale per qualsiasi flusso
  di valore stabile.
- **Il Flow Time copre l'intero flusso di valore, non solo l'ingegneria.**
  Comincia quando viene individuato un bisogno di business, non quando
  l'ingegneria prende in carico il lavoro, che il cycle time dell'argomento 2.6
  poi scompone ulteriormente.
- **Un Flow Load in crescita è il primo segnale d'allarme di un Flow Time in
  crescita.** Poiché la relazione è dimostrabile, il Flow Load può essere
  osservato come indicatore anticipatore, non scoperto solo dopo che il Flow Time
  si è già degradato.
- **Il punto di ingresso del flusso di valore deve essere fissato e documentato.**
  Il punto in cui parte l'orologio del Flow Time è una scelta di definizione
  esposta allo stesso rischio di manipolazione di qualsiasi altro confine di
  metrica in questo libro.
- **Un dirigente di business può agire direttamente sul Flow Load.** A differenza
  del Flow Time, che è una misura ritardata, il Flow Load è una leva: dire di no
  all'avvio di nuovo lavoro è un'azione disponibile oggi.

## Raccomandazioni

### Fissa e documenta il punto di ingresso del flusso di valore prima di misurare il Flow Time

Decidi esplicitamente se il Flow Time parte quando un bisogno di business viene
individuato per la prima volta, quando viene formalmente approvato o quando
l'ingegneria comincia a lavorarci, e documenta quella scelta nel modo in cui
l'argomento 1.4 raccomanda per qualsiasi carta delle metriche. Questa singola
decisione determina se il Flow Time misura una vera reattività end-to-end o solo
la fetta più ristretta che l'ingegneria controlla, e cambiare la definizione in
seguito senza dichiararlo è il rischio di manipolazione centrale di questo
argomento.

### Traccia il Flow Load in modo continuo, non periodico

Poiché il Flow Load è, tramite la legge di Little, un indicatore anticipatore del
Flow Time a venire, tracciarlo come numero vivo e continuamente aggiornato anziché
come istantanea periodica. Un Flow Load che è già salito per settimane quando
qualcuno lo controlla ha già esteso in silenzio il Flow Time per altrettanto
tempo, in modo invisibile, prima che la metrica si mettesse al passo.

### Usa esplicitamente la legge di Little quando sostieni un limite al WIP o un aumento di capacità

Quando argomenti a favore di avviare meno lavoro in parallelo, o di aggiungere
capacità, presenta l'equazione vera e propria, non solo la raccomandazione: il
Flow Load è uguale al tasso di arrivo per il Flow Time, quindi se il tasso di
arrivo è all'incirca fisso, ridurre il Flow Load è matematicamente garantito
ridurre il Flow Time. È un argomento sostanzialmente più forte con uno stakeholder
scettico di un'affermazione non quantificata che «siamo troppo occupati», perché
è dimostrabile anziché asserito.

### Separa il Flow Time dalle cause sottostanti del Flow Load prima di proporre una correzione

Quando il Flow Load è alto, indaga quale tipo di flow item (argomento 2.2) lo sta
davvero guidando: troppe funzionalità avviate in parallelo, un arretrato di difetti
non affrontati, o lavoro di rischio bloccato in attesa di un'approvazione
condivisa. Ogni causa implica una correzione diversa, e trattare «il Flow Load è
alto» come un unico problema indifferenziato tende a produrre una risposta
generica e inefficace.

### Confronta il Flow Time con il cycle time per isolare dove avviene davvero il ritardo

Poiché il Flow Time copre l'intero flusso di valore e il cycle time (argomento
2.6) solo la parte di ingegneria, confrontali direttamente. Un grande divario tra
Flow Time e cycle time significa che la maggior parte del ritardo avviene prima
che l'ingegneria veda il lavoro, in code di approvazione, arretrati di
prioritizzazione o passaggi tra team, il che indica una correzione molto diversa
da quella di un divario concentrato dentro l'ingegneria stessa.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Misurare il Flow Time solo dalla presa in carico dell'ingegneria | Semplice, in linea con la strumentazione esistente del cycle time | Perde il ritardo precedente all'ingegneria, sottostima la vera reattività |
| Misurare il Flow Time dall'effettiva individuazione del bisogno di business | Cattura la vera reattività end-to-end | Richiede di strumentare fasi fuori dal controllo diretto dell'ingegneria |
| Istantanee periodiche del Flow Load | Economiche da calcolare ogni tanto | Perdono il valore di indicatore anticipatore; l'aumento del carico passa inosservato troppo a lungo |
| Tracciamento continuo del Flow Load | Indicatore anticipatore vivo e azionabile | Richiede un'integrazione continua degli strumenti, non solo un rapporto occasionale |

La tensione centrale è **ambito contro portata della strumentazione**. Misurare il
Flow Time solo dalla presa in carico dell'ingegneria è molto più facile da
strumentare, dato che riusa i dati di cycle time che l'argomento 2.6 già raccoglie,
ma sottostima in silenzio la vera reattività ignorando tutto ciò che accade prima
che l'ingegneria veda il lavoro. Si risolve la tensione partendo dalla misura più
stretta, limitata all'ingegneria, se è tutto ciò che si può strumentare oggi, ma
trattando l'estensione a monte del punto di partenza del Flow Time, verso
l'individuazione e la prioritizzazione dei bisogni di business, come priorità di
breve termine anziché limite permanente.

## Domande da discutere con il vostro team

1. **Dove parte oggi davvero il nostro orologio del Flow Time, e tutti
   nell'organizzazione concordano che sia il punto di partenza giusto?** Una
   discrepanza tra dove gli stakeholder presumono che parta l'orologio e dove
   parte davvero è una fonte comune e silenziosa di sfiducia nella metrica.
   Confermate che la definizione documentata corrisponda alla comprensione
   condivisa.

2. **Abbiamo mai controllato se il nostro Flow Load misurato, il tasso di arrivo e
   il Flow Time soddisfano davvero la legge di Little?** Se non si bilanciano
   all'incirca, uno dei tre numeri è misurato in modo incoerente. Ripercorrete
   insieme i numeri effettivi anziché presumere che il controllo passerebbe.

3. **Il Flow Load è tracciato in modo continuo, o un aumento costante passerebbe
   inosservato per settimane prima che qualcuno controlli?** Un indicatore
   anticipatore vi protegge solo se qualcuno lo osserva davvero quasi in tempo
   reale, non solo se lo rivede in un rapporto trimestrale.

4. **Quando il Flow Load sale, sappiamo dire quale tipo di flow item lo sta
   guidando, o si legge come un unico numero indifferenziato?** Una diagnosi
   generica del tipo «siamo sovraccarichi» produce una risposta generica e spesso
   inefficace. Controllate se la vostra strumentazione attuale sappia davvero
   attribuire il carico crescente a una causa specifica.

5. **Quanto è grande il divario tra il nostro Flow Time e il nostro cycle time, e
   suggerisce che la maggior parte del ritardo avvenga prima o dopo che
   l'ingegneria veda il lavoro?** Questo confronto rivela spesso che la maggiore
   opportunità di miglioramento sta interamente fuori dal controllo
   dell'ingegneria.

6. **Qualcuno ha mai ristretto in silenzio il punto di partenza del nostro Flow
   Time per far apparire meglio il numero, senza che quel cambiamento fosse
   documentato o dichiarato?** È il rischio di manipolazione centrale di questo
   argomento enunciato direttamente. Chiedetevi con onestà se la vostra
   definizione sia mai derivata in questo modo.

## Prospettiva settoriale

**Startup.** Il Flow Load è di solito basso semplicemente perché non ci sono
abbastanza persone per avviare molto lavoro in parallelo, ma la stessa relazione
matematica si applica comunque nel momento in cui un fondatore o un ingegnere
senior diventa un collo di bottiglia personale per molte iniziative simultanee.
Tracciate il Flow Load in modo informale anche senza strumenti dedicati, dato che
la legge di Little vale a qualsiasi scala.

**Piccola impresa.** Un semplice elenco condiviso di tutto ciò che è attualmente
attivo basta di solito per calcolare il Flow Load senza software dedicato di
gestione del flusso di valore. L'abitudine utile è controllarlo abbastanza
spesso da cogliere presto un numero in crescita, non scoprirlo solo quando il
Flow Time si è già degradato in modo visibile.

**Enterprise.** È qui che la legge di Little si guadagna il pane come argomento,
non solo come metrica: una grande organizzazione che destreggia decine di
iniziative strategiche simultanee può usare la relazione dimostrabile tra Flow
Load e Flow Time per sostenere con prove la sequenzializzazione del lavoro, cosa
che un argomento puramente qualitativo del tipo «siamo troppo occupati» raramente
ottiene contro la determinata pressione degli stakeholder.

**Settore pubblico.** I programmi pluriennali accumulano di routine un grande Flow
Load implicito su molti filoni di lavoro, ciascuno giustificato individualmente,
senza alcuna visibilità a livello organizzativo del totale. Presentare
direttamente la legge di Little, mostrando che la crescita del Flow Time del
programma stesso è spiegata matematicamente dal suo stesso Flow Load in crescita,
è spesso la prova più chiara e persuasiva disponibile per sequenziare i filoni di
lavoro anziché eseguirli tutti in parallelo a tempo indeterminato.

## Esempi

**Enterprise.** L'organizzazione di piattaforma di un'azienda di tecnologia dei
media gestiva ventidue iniziative strategiche simultanee con una capacità
realistica per circa dodici, uno squilibrio che nessuno aveva quantificato finché
un nuovo VP of engineering non chiese direttamente il Flow Load. Il Flow Time
dell'iniziativa mediana era cresciuto del 40% nell'anno precedente, un trend che la
dirigenza attribuiva a «il lavoro che diventa più difficile». Presentare la legge
di Little insieme ai numeri effettivi di Flow Load e tasso di arrivo mostrò che la
crescita era interamente spiegata dal solo Flow Load in aumento, senza bisogno di
alcun cambiamento nella difficoltà del lavoro sottostante per spiegarla.
L'organizzazione sequenziò le iniziative fino a un Flow Load sostenibile, e il
Flow Time mediano scese di quasi un terzo entro due trimestri.

**Settore pubblico.** Il programma di modernizzazione di un'agenzia federale per la
gestione dei finanziamenti aveva accumulato Flow Load su decine di filoni
paralleli senza alcun totale tracciato, con ogni sponsor di filone convinto che la
propria iniziativa fosse adeguatamente dotata di risorse presa isolatamente.
Un'analisi dell'ufficio di programma che usava la legge di Little mostrò che il
Flow Time aggregato del programma, il tempo dall'approvazione di un filone alla
sua consegna, poteva essere previsto quasi esattamente dal solo Flow Load
aggregato, una scoperta che convinse gli sponsor che per oltre un anno avevano
resistito agli argomenti di depriorizzazione. Il programma adottò un tetto
esplicito al Flow Load, e i nuovi filoni ora entrano in una coda anziché partire
subito a prescindere dal carico attuale.

## Business case: motivazioni, ROI e TCO

Il ritorno del tracciare insieme Flow Load e Flow Time è un argomento dimostrabile,
non semplicemente persuasivo, per sequenziare il lavoro anziché eseguire tutto in
parallelo. L'esempio dell'azienda di tecnologia dei media qui sopra, che spiega
un'intera regressione del Flow Time con il solo Flow Load, è lo schema che questa
combinazione produce in modo affidabile: un argomento specifico e quantitativo ha
successo dove un appello qualitativo all'essere «troppo occupati» prima falliva
contro la reale pressione organizzativa ad avviare più lavoro.

Il costo totale di proprietà è basso rispetto al suo potere persuasivo: il Flow
Load richiede solo un conteggio vivo degli item attivi e in attesa, e il Flow
Time richiede di strumentare il punto di ingresso del flusso di valore, un lavoro
che si ripaga la prima volta che impedisce a un'organizzazione di impegnarsi in
più iniziative simultanee di quante la sua capacità effettiva possa sostenere.

## Antipattern e insidie

- **Restringere in silenzio il punto di partenza del Flow Time per lusingare il
  numero:** il vettore di manipolazione al centro di questo argomento. Spostare la
  partenza dell'orologio dalla vera individuazione del bisogno di business a un
  punto successivo, presa in carico dell'ingegneria, approvazione formale, riduce
  il Flow Time senza cambiare affatto la vera reattività, e può avvenire in modo
  abbastanza graduale da far sì che nessun singolo cambiamento sembri una
  manipolazione deliberata. Il guardrail è documentare esplicitamente il punto di
  ingresso in una carta delle metriche (argomento 1.4) e verificarlo
  periodicamente rispetto alla definizione documentata, la stessa disciplina che
  questo libro richiede per ogni confine di metrica.
- **Misurare il Flow Load solo periodicamente:** fa perdere il suo valore di
  indicatore anticipatore, dato che un aumento costante può passare inosservato
  per settimane.
- **Trattare il Flow Load come un unico numero indifferenziato:** perde di vista
  quale tipo di flow item stia guidando un sovraccarico, producendo una risposta
  generica anziché mirata.
- **Ignorare il divario tra Flow Time e cycle time:** manca se il ritardo sia
  concentrato prima o dopo l'ingegneria, il che implica correzioni molto diverse.
- **Sostenere la riduzione del lavoro in parallelo senza presentare
  esplicitamente la legge di Little:** un appello qualitativo è molto più facile
  da liquidare per uno stakeholder rispetto a una relazione quantitativa e
  dimostrabile.
- **Presumere che la legge di Little valga solo su larga scala:** vale per
  qualsiasi sistema stabile a prescindere dalle dimensioni, inclusa una singola
  persona sovraccarica.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Né il Flow Time né il Flow Load sono tracciati;
  il ritardo è discusso in modo aneddotico senza dati a supporto.
- **Livello 2, Sviluppo (Develop):** Il Flow Time è tracciato solo dalla presa in
  carico dell'ingegneria, e il Flow Load è controllato periodicamente anziché
  in modo continuo.
- **Livello 3, Standardizzazione (Standardize):** Il Flow Time è misurato da un
  punto di ingresso del flusso di valore documentato e valido per tutta
  l'organizzazione, e il Flow Load è tracciato in modo continuo come indicatore
  anticipatore.
- **Livello 4, Gestione (Manage):** La legge di Little è usata esplicitamente per
  giustificare decisioni su capacità e sequenzializzazione, e il Flow Load in
  crescita è attribuito a un tipo specifico di flow item prima di proporre una
  correzione.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione fissa tetti
  espliciti al Flow Load nei suoi flussi di valore e sa indicare decisioni
  specifiche di sequenzializzazione, sostenute dalla legge di Little, che hanno
  migliorato in modo misurabile il Flow Time.

## Spunti di discussione

1. Dove parte davvero il nostro orologio del Flow Time, e quella definizione è mai derivata senza documentazione?
2. Il nostro Flow Load misurato, il tasso di arrivo e il Flow Time soddisfano all'incirca la legge di Little?
3. Il Flow Load è tracciato abbastanza continuamente da cogliere un aumento costante in giorni, non in mesi?
4. Qual è il divario tra il nostro Flow Time e il nostro cycle time, e che cosa ci dice su dove avviene davvero il ritardo?

## Punti chiave

- Il **Flow Load determina matematicamente il Flow Time**, tramite la legge di
  Little: il Flow Load è uguale al tasso di arrivo per il Flow Time, per
  qualsiasi flusso di valore stabile.
- Il **Flow Time copre l'intero flusso di valore**, dall'individuazione del
  bisogno di business alla consegna, più ampio dell'ambito solo ingegneristico
  del cycle time (argomento 2.6).
- Il vettore di manipolazione centrale dell'argomento è **restringere in silenzio
  il punto di partenza del Flow Time**; il guardrail è una definizione del punto
  di ingresso documentata e verificata.
- **Traccia il Flow Load in modo continuo**, non periodico, così che funzioni da
  vero indicatore anticipatore anziché da scoperta tardiva.
- Usa la legge di Little **esplicitamente**, non solo come intuizione, quando
  sostieni un limite al WIP, un aumento di capacità o la sequenzializzazione del
  lavoro simultaneo.

## Riferimenti e letture di approfondimento

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second
  Generation Lean Product Development*. Celeritas Publishing, 2009.
