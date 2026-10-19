# 7.4 La telemetria dei risultati come nuova stella polare

## Panoramica e motivazione

Questo argomento chiude la Parte 7 e, in senso reale, chiude l'argomentazione che
l'intero libro costruisce dall'argomento 1.3, con una sola affermazione diretta: man
mano che l'IA generativa rende economico l'output grezzo, la **[telemetria](https://en.wikipedia.org/wiki/Telemetry)
dei risultati**, la misurazione continua e strumentata dei risultati reali anziché
dell'attività o dell'output, smette di essere una buona pratica tra le altre e diventa
il principio organizzativo attorno al quale un programma di metriche deve essere
costruito. Non è un'idea nuova introdotta qui per la prima volta. È l'idea che
l'argomento 1.3 ha introdotto nella parte d'apertura di questo libro, ora presentata
come la risposta necessaria, e non semplicemente preferibile, a un cambiamento
tecnologico che ha reso ogni alternativa più pericolosa di prima.

La logica è diretta. Prima dell'IA generativa, il volume di output era un proxy
imperfetto ma non privo di valore dello sforzo e, in modo vago, del valore; un team che
rilasciava più funzionalità aveva, come minimo, fatto più lavoro, anche se quel lavoro
non era sempre quello giusto. L'IA generativa recide anche quel vago collegamento: il
volume di output non indica più in modo affidabile lo sforzo, dato che uno strumento
può generarlo in pochi secondi, e certamente non indica il valore, dato che l'argomento
7.3 ha mostrato che un output gonfiato può convivere con una qualità in degrado. Le
metriche che sopravvivono intatte a questo cambiamento sono proprio quelle verso cui
questo libro ha sottolineato di costruire fin dai suoi primi argomenti: il tasso di
difetti sfuggiti (argomento 5.1), l'adozione delle funzionalità (argomento 5.2), i
risultati per clienti e business (argomento 5.3), l'affidabilità (Parte 6) e il
benessere degli sviluppatori (Parte 3). Nessuna di esse dipende da come il codice
sottostante sia stato prodotto; tutte misurano ciò che è effettivamente accaduto come
conseguenza.

Per i team grandi, l'argomentazione di questo argomento ha conseguenze dirette e
pratiche su come un programma di metriche vada costruito e ricostruito d'ora in poi. Le
organizzazioni enterprise che riprogettano le proprie dashboard di ingegneria alla luce
dell'adozione dell'IA dovrebbero orientare l'investimento specificamente verso
l'infrastruttura di telemetria dei risultati che questo argomento descrive; le
organizzazioni governative, nel valutare sia gli strumenti di IA sia i più ampi
programmi tecnologici in cui sono inseriti, dovrebbero tenere entrambi allo stesso
standard di telemetria dei risultati che questo argomento raccomanda come base per
qualsiasi valutazione credibile e a prova di futuro.

## Principi chiave

- **La telemetria dei risultati diventa necessaria, non solo preferibile, una volta
  che l'output è economico.** È il principio fondativo dell'argomento 1.3, ora urgente
  anziché aspirazionale.
- **Le metriche che sopravvivono a questo cambiamento sono quelle verso cui questo
  libro ha costruito in tutto il suo svolgimento**: difetti sfuggiti, adozione,
  risultati di business, affidabilità e benessere.
- **Un programma di metriche costruito principalmente attorno a metriche di output è
  ora una passività, non solo una scelta non ottimale.** Le metriche di output possono
  essere gonfiate in modo economico e rapido su larga scala.
- **La telemetria dei risultati richiede un investimento reale**, strumentazione,
  pazienza per un segnale più lento e disciplina organizzativa per resistere
  all'attrazione di metriche di output più rapide ed economiche ma ora inaffidabili.
- **Questo principio sopravvive a qualsiasi strumento di IA o fornitore specifico.** È
  una risposta durevole a un cambiamento durevole di ciò che l'output significa, non un
  aggiustamento temporaneo a una moda passeggera.

## Raccomandazioni

### Verifica il tuo rapporto di investimento nelle metriche: telemetria dei risultati contro tracciamento dell'output

Calcola all'incirca quale quota della tua attuale infrastruttura di metriche, sforzo di
strumentazione, spazio sulle dashboard, tempo nelle riunioni di revisione, vada alle
metriche di risultato (Parte 5, Parte 6, benessere degli sviluppatori dalla Parte 3)
rispetto alle metriche di output e di attività (conteggio dei rilasci, volume di commit,
throughput delle pull request). Se domina il tracciamento dell'output, quel rapporto è
ora esso stesso una passività alla luce dell'argomentazione di questo argomento, e
riequilibrarlo è il cambiamento singolarmente a più alta leva che questo argomento
raccomanda.

### Investi deliberatamente nell'infrastruttura di telemetria dei risultati, come investimento di ingegneria di prima classe

La misurazione dei risultati, il tracciamento dell'adozione delle funzionalità, la
correlazione con i risultati di business (argomento 5.3), la strumentazione
dell'affidabilità (Parte 6), richiede un investimento di ingegneria reale e continuo
che molte organizzazioni hanno storicamente sottofinanziato rispetto alle metriche di
output, comparativamente economiche e facili, che dominano oggi molte dashboard. Tratta
questo investimento infrastrutturale con la stessa serietà che questo libro applica a
qualsiasi altra capacità di ingegneria significativa, non come preoccupazione
secondaria dietro l'investimento negli strumenti di IA stessi.

### Accetta e comunica che la telemetria dei risultati è più lenta, e costruisci pazienza per questo nelle aspettative della tua organizzazione

Le metriche di risultato sono, quasi per natura, più ritardate e più rumorose delle
metriche di output (la distinzione tra anticipatori e ritardati dell'argomento 1.3, la
cautela statistica dell'argomento 1.6). Un'organizzazione abituata al feedback rapido e
appagante di vedere salire un numero di output deve costruire una genuina pazienza per
il segnale più lento e più onesto che la telemetria dei risultati fornisce, e la
dirigenza deve comunicare e mostrare attivamente quella pazienza anziché ricorrere in
modo riflesso all'alternativa più rapida e ora inaffidabile sotto pressione di mostrare
risultati rapidi.

### Usa questo cambiamento come occasione per ritirare le metriche di output davvero obsolete, non solo per aggiungere metriche di risultato accanto ad esse

Seguendo la disciplina dell'argomento 1.1 di ritirare le metriche che non si guadagnano
più il posto, usa questo momento come occasione deliberata per rimuovere le metriche di
output e di attività che questo cambiamento ha specificamente svalutato, anziché
aggiungere semplicemente metriche di risultato sopra una dashboard esistente invariata.
Una dashboard che mantiene ogni vecchia metrica di output aggiungendone di nuove di
risultato cresce in modo gonfio anziché migliorare davvero.

### Tratta l'investimento in telemetria dei risultati come durevole, indipendente da qualsiasi strumento di IA o rapporto con un fornitore

Costruisci l'infrastruttura di telemetria dei risultati come una capacità organizzativa
permanente, non come una reazione specifica a qualunque strumento di IA la tua
organizzazione capiti di usare quest'anno. Questo principio, e l'infrastruttura che
richiede, sopravvivrà a qualsiasi specifico rapporto con un fornitore o generazione di
strumenti, e costruirlo come capacità durevole protegge il tuo programma di metriche
dal prossimo cambiamento tecnologico quanto da quello attuale.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Dashboard dominata dalle metriche di output | Feedback rapido ed economico; familiare alla maggior parte delle organizzazioni | Ora attivamente inaffidabile dato l'effetto dell'IA generativa sul costo dell'output |
| Dashboard dominata dalla telemetria dei risultati | Resiliente a questo cambiamento; misura ciò che conta davvero | Segnale più lento e rumoroso; richiede un reale investimento in strumentazione |
| Aggiungere metriche di risultato accanto a metriche di output invariate | Incrementale, meno dirompente | Produce una dashboard gonfia anziché un miglioramento genuino |
| Riequilibrio completo e deliberato verso la telemetria dei risultati | Affronta il cambiamento in modo diretto e completo | Richiede il più significativo cambiamento organizzativo e di investimento |

La tensione centrale è, in senso reale, la stessa con cui questo libro si è aperto
nell'argomento 1.3, ora affilata nella sua forma più urgente: **feedback rapido e
familiare contro segnale più lento e onesto**. Le metriche di output sono sempre state
più facili e più rapide da produrre; l'argomentazione di questo argomento è che l'IA
generativa ha spostato quel compromesso da semplicemente non ottimale ad attivamente
pericoloso. Si risolve la tensione nel modo che questo libro ha raccomandato fin
dall'argomento d'apertura: dare peso in modo deciso ai risultati, accettare il
feedback più lento che accompagna la misurazione del valore genuino e trattare il
disagio di quel feedback più lento come il costo onesto di misurare qualcosa di reale
anziché qualcosa di semplicemente comodo.

## Domande da discutere con il vostro team

1. **Quale quota della nostra attuale infrastruttura di metriche e dell'attenzione
   sulle dashboard va alle metriche di risultato rispetto a quelle di output e di
   attività?** Calcolate questo rapporto con onestà; la maggior parte delle
   organizzazioni, valutate per la prima volta, lo trova più sbilanciato sull'output di
   quanto avrebbe indovinato.

2. **Quale specifico investimento nell'infrastruttura di telemetria dei risultati
   abbiamo rinviato a favore di un tracciamento dell'output più rapido ed economico?**
   Nominate un esempio concreto, strumentazione del tracciamento dell'adozione delle
   funzionalità, strumenti di correlazione con i risultati di business, e discutete che
   cosa servirebbe per costruirlo davvero.

3. **La nostra organizzazione ha costruito una genuina pazienza per il feedback più
   lento della telemetria dei risultati, o la pressione per risultati rapidi continua a
   riportarci verso metriche di output più rapide ma ora inaffidabili?** Siate onesti su
   questo schema nella vostra reportistica recente e nelle vostre riunioni di revisione.

4. **Quale metrica di output o di attività della nostra dashboard attuale è un vero
   candidato al ritiro, ora che l'argomentazione di questo argomento si applica
   specificamente ad essa?** Individuatene almeno una e discutete che cosa dovrebbe
   sostituirla anziché lasciare semplicemente un vuoto.

5. **Se il nostro fornitore di strumenti di IA o l'attuale generazione di assistenti di
   codifica basati sull'IA cambiasse drasticamente il prossimo anno, il nostro
   programma di metriche reggerebbe ancora?** Questo mette alla prova se il vostro
   investimento in telemetria dei risultati sia davvero durevole, costruito come
   capacità permanente, o una semplice reazione specifica alla vostra attuale
   situazione di strumenti.

6. **Che aspetto avrebbe per la nostra organizzazione impegnarsi pienamente
   nell'argomentazione di questo argomento, riequilibrando in modo deciso anziché
   incrementale il nostro investimento in metriche verso i risultati?** Abbozzatelo in
   modo concreto anziché lasciarlo astratto; il divario tra lo stato attuale e questa
   visione è la vera tabella di marcia della vostra organizzazione per rispondere a
   questo cambiamento.

## Prospettiva settoriale

**Startup.** Costruire presto la telemetria dei risultati, prima che le metriche di
output abbiano avuto la possibilità di diventare un'abitudine organizzativa
profondamente radicata, è davvero più facile che introdurla in seguito. Un'azienda
giovane che adotta l'assistenza di codifica basata sull'IA fin dall'inizio ha una reale
opportunità di costruire il proprio programma di metriche partendo dai risultati
anziché dover disfare una cultura esistente dominata dalle metriche di output.

**Piccola impresa.** Concentrate l'investimento in telemetria dei risultati sulla
singola metrica di risultato che riflette più direttamente sopravvivenza e crescita
(argomento 5.3), anziché tentare una strumentazione completa di ogni categoria di
risultati che questo libro tratta. Un investimento modesto e mirato in telemetria dei
risultati batte una dashboard completa di metriche di output che l'argomentazione di
questo argomento ha ora specificamente svalutato.

**Enterprise.** Il riequilibrio che questo argomento raccomanda è un cambiamento
organizzativo genuino e significativo a questa scala, che richiede probabilmente il
sostegno della dirigenza e un piano di investimento pluritrimestrale. Trattatelo con la
stessa serietà di qualsiasi altro grande investimento infrastrutturale che questo
libro tratta, e usate gli esempi specifici e concreti degli argomenti 7.1 e 7.3,
gonfiatura delle metriche e diluizione della qualità che una dashboard riequilibrata
avrebbe colto prima, per costruire all'interno il caso per l'investimento.

**Settore pubblico.** I programmi tecnologici governativi valutati principalmente su
metriche di consegna e di output (funzionalità rilasciate, nei tempi) sono sempre più
vulnerabili proprio allo scetticismo che l'argomento 5.3 ha descritto, e
l'argomentazione di questo argomento affila ulteriormente quella vulnerabilità man
mano che l'adozione degli strumenti di IA si diffonde nel più ampio settore da cui le
agenzie governative assumono e rispetto a cui vengono confrontate. Costruite la
telemetria dei risultati come base primaria per la rendicontazione pubblica e per la
giustificazione del budget, collocando la vostra organizzazione davanti, e non dietro,
a questo cambiamento.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda software, sollecitata
direttamente dallo scampato pericolo di gonfiatura delle metriche descritto nell'esempio
della tecnologia finanziaria dell'argomento 7.1, condusse una verifica completa del
proprio rapporto di investimento nelle metriche e scoprì che quasi il 70% dello spazio
sulle dashboard e dello sforzo di strumentazione era dedicato a metriche di output e di
attività, con solo un investimento modesto e incoerente nella telemetria dei risultati.
Nell'anno successivo l'azienda riequilibrò deliberatamente questo rapporto, ritirando
diverse metriche di output che la verifica dell'argomento 7.1 aveva segnalato come più
esposte e investendo la capacità liberata nella strumentazione dell'adozione delle
funzionalità e dei risultati di business (argomenti 5.2, 5.3). La dashboard risultante,
presentata alla riunione del consiglio dell'anno seguente, fu esplicitamente riconosciuta
dallo stesso membro del consiglio in precedenza scettico come una base sensibilmente
più affidabile per valutare l'investimento in ingegneria rispetto alla versione ricca di
output che sostituiva.

**Settore pubblico.** Un'agenzia nazionale di servizi digitali, che costruiva da zero un
nuovo programma di metriche di ingegneria proprio perché la sua precedente dashboard,
dominata dalle metriche di output, aveva suscitato uno scetticismo legislativo
prolungato, adottò esplicitamente il principio di questo argomento come decisione
fondativa di progetto: la telemetria dei risultati, tempo di attesa dei cittadini, tasso
di completamento del servizio, tasso di difetti sfuggiti, sarebbe stata la base primaria
di tutta la rendicontazione pubblica, con le metriche di output e di consegna conservate
solo come strumenti diagnostici interni, mai come prova in primo piano presentata
all'esterno. Questo progetto orientato ai risultati, costruito deliberatamente alla luce
del cambiamento dell'IA generativa che questa parte descrive, diede alla rendicontazione
dell'agenzia una durevolezza e una credibilità presso la propria commissione di controllo
che il programma predecessore, costruito attorno alle assunzioni di output di una
generazione precedente, non aveva mai raggiunto.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'impegnarsi in modo deciso nella telemetria dei risultati è un
programma di metriche che resta affidabile e credibile attraverso l'attuale
cambiamento tecnologico e qualunque cosa venga dopo, anziché uno che richiede un altro
significativo rifacimento la prossima volta che l'output diventerà economico per
qualche futuro cambiamento tecnologico. L'esempio dell'azienda software qui sopra lo
mostra in concreto: la dashboard riequilibrata ha riparato direttamente una credibilità
che la versione precedente, ricca di output, aveva messo a rischio genuino.

Il costo totale di proprietà è l'investimento nell'infrastruttura di telemetria dei
risultati che questo argomento raccomanda, un lavoro davvero significativo e
pluritrimestrale per una grande organizzazione, da pesare rispetto al rischio durevole e
di lungo periodo di un programma di metriche che diventa progressivamente meno
affidabile man mano che l'output continua a diventare più economico. Non è un costo che
questo libro vi chieda di accettare alla leggera; è la conseguenza diretta e necessaria
del prendere sul serio l'argomentazione fondativa dell'argomento 1.3 quanto questa parte
finale del libro vi chiede di fare.

## Antipattern e insidie

- **Trattare questo cambiamento come bisognoso di un solo aggiustamento incrementale
  anziché di un vero riequilibrio:** sottostima la portata del cambiamento che l'IA
  generativa ha introdotto in ciò che le metriche di output significano.
- **Aggiungere metriche di risultato accanto a un insieme invariato e ancora
  dominante di metriche di output:** produce una dashboard gonfia anziché il genuino
  riequilibrio che questo argomento sostiene.
- **Costruire l'investimento in telemetria dei risultati come reazione a uno specifico
  strumento di IA attuale anziché come capacità durevole:** lascia l'organizzazione
  esposta al prossimo cambiamento tecnologico allo stesso modo.
- **Non costruire pazienza organizzativa per il feedback più lento della telemetria
  dei risultati:** rischia di tornare, sotto pressione di risultati rapidi, a metriche
  di output più rapide ma ora inaffidabili.
- **Ritirare le metriche di output senza una genuina sostituzione con telemetria dei
  risultati:** lascia una lacuna di misurazione anziché un miglioramento genuino.
- **Presentare questo cambiamento agli stakeholder come semplice risposta agli
  strumenti di IA anziché come compimento del principio fondativo di questo libro:**
  sottovaluta la durevolezza e la generalità dell'argomentazione.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La dashboard resta dominata dalle metriche di output,
  senza alcuna risposta deliberata al cambiamento che questa parte descrive.
- **Livello 2, Sviluppo (Develop):** Sono state aggiunte alcune metriche di risultato,
  ma il rapporto complessivo di investimento resta sbilanciato sull'output e nessuna
  metrica è stata ritirata deliberatamente.
- **Livello 3, Standardizzazione (Standardize):** È stata condotta una verifica
  deliberata e un riequilibrio verso la telemetria dei risultati, con le metriche di
  output davvero obsolete ritirate, in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** L'infrastruttura di telemetria dei risultati è
  trattata come investimento di ingegneria continuo e di prima classe, e la pazienza
  organizzativa per il suo feedback più lento è coltivata e protetta attivamente.
- **Livello 5, Orchestrazione (Orchestrate):** Il programma di metriche
  dell'organizzazione è guidato dalla telemetria dei risultati come principio di
  progetto durevole e permanente, dimostratosi resiliente attraverso l'attuale
  cambiamento tecnologico ed esplicitamente costruito per restare resiliente attraverso
  qualunque cosa venga dopo.

## Spunti di discussione

1. Qual è il nostro attuale rapporto effettivo tra investimento in metriche di risultato e in metriche di output?
2. Quale singola metrica di output dovremmo ritirare questo trimestre, e quale metrica di risultato dovrebbe sostituirla?
3. Dove l'impazienza organizzativa ci ha di recente riportati verso metriche di output più rapide ma meno affidabili?
4. Il nostro investimento in telemetria dei risultati è durevole, o legato specificamente alla nostra attuale situazione di strumenti di IA?
5. Che cosa servirebbe per impegnarsi pienamente nell'argomentazione di questo argomento, anziché aggiustare in modo incrementale?

## Punti chiave

- La telemetria dei risultati diventa **necessaria, non solo preferibile**, una volta
  che l'IA generativa rende economico l'output; è il principio fondativo
  dell'argomento 1.3, ora urgente.
- Le metriche che **sopravvivono a questo cambiamento** sono quelle verso cui questo
  libro costruisce in tutto il suo svolgimento: difetti sfuggiti, adozione, risultati
  di business, affidabilità e benessere.
- **Verifica e riequilibra il tuo rapporto di investimento nelle metriche** in modo
  deliberato, ritirando le metriche di output davvero obsolete anziché solo
  aggiungere accanto ad esse metriche di risultato.
- Costruisci **pazienza organizzativa per il feedback più lento della telemetria dei
  risultati**, e resisti alla spinta a tornare, sotto pressione, a metriche di output
  più rapide ma ora inaffidabili.
- Costruisci questo investimento come **capacità durevole**, indipendente da qualsiasi
  strumento di IA o fornitore specifico, proteggendo il tuo programma di metriche dai
  futuri cambiamenti tecnologici oltre che da quello attuale.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il fondamento di misurazione basata sui risultati su cui poggiano
  questo intero libro e questo argomento conclusivo della Parte 7).
- *Lean Analytics*, di Alistair Croll e Benjamin Yoskovitz (la distinzione tra
  metriche azionabili e metriche di vanità che l'argomentazione di questo argomento
  estende all'era dell'IA).
- *The Innovator's Dilemma*, di Clayton M. Christensen (lo schema generale per cui
  metriche e pratiche consolidate diventano passività sotto un cambiamento
  tecnologico dirompente).
- *Measure What Matters*, di John Doerr (la definizione degli obiettivi orientata ai
  risultati come principio organizzativo di un programma di metriche, il modello che
  questo argomento sostiene dovrebbe ora essere la norma e non l'eccezione).
