# 2.1 Il Flow Framework

## Panoramica e motivazione

Il **Flow Framework** è un modello gestionale e strutturale creato da Mik Kersten
e pubblicato nel suo libro del 2018 *Project to Product*. Esiste per rispondere a
una domanda a cui le sole metriche di pipeline non sanno rispondere: non solo
quanto velocemente e quanto in sicurezza il codice passa dal commit alla
produzione, ma che tipo di valore sta scorrendo nella pipeline, e se quel mix
rifletta la strategia effettiva dell'azienda. Il framework tratta la consegna
del software come un **[flusso di valore](https://en.wikipedia.org/wiki/Value_stream)**
(value stream), la sequenza completa di attività che trasforma un'idea in un
valore che un cliente riceve, mutuando direttamente dalla tradizione della
mappatura del flusso di valore della produzione snella (lean).

Questo libro usa il Flow Framework come struttura organizzativa della Parte 2.
L'argomento 2.2 introduce i suoi quattro flow item, gli argomenti 2.3 e 2.4 le
sue cinque metriche di flusso, l'argomento 2.8 riconduce quelle metriche alla
loro origine nella classica mappatura del flusso di valore Lean, e l'argomento
2.10 tratta le metriche DORA come un framework di riferimento più ristretto,
incentrato sulla pipeline, con cui questa parte non apre più. È una scelta
deliberata, non un rifiuto della ricerca di DORA. DORA misura il throughput e la
stabilità del sistema con autentico rigore statistico, ma tace sulla domanda che
più interessa a un dirigente di business: tra tutto ciò che l'organizzazione di
ingegneria ha rilasciato in questo trimestre, quanto era nuovo valore per il
cliente e quanto è stato consumato in silenzio per correggere difetti, gestire
rischi o ripagare debito. Il Flow Framework esiste specificamente per rendere
visibile quel mix.

Per i team grandi, questa distinzione non è accademica. Un'organizzazione di
piattaforma che gestisce decine di flussi di valore può avere ottimi numeri DORA,
rilasci rapidi, frequenti e stabili, mentre il suo output di prodotto effettivo è
scivolato in silenzio verso un lavoro quasi puramente di manutenzione, uno schema
invisibile a una dashboard che misura solo la meccanica della pipeline. Le
organizzazioni enterprise e governative, che devono giustificare l'investimento
in ingegneria a stakeholder che ragionano in termini di business e non di
pipeline, hanno bisogno di un vocabolario che colleghi l'attività di consegna
all'intento strategico. È ciò che questo framework offre.

## Principi chiave

- **Un flusso di valore è l'unità di misura, non un team né una pipeline.** Si
  estende da un bisogno del cliente o del business al risultato consegnato,
  attraversando i confini di team che il lavoro attraversa davvero.
- **I flow item rendono visibile il «che cosa», non solo il «quanto
  velocemente».** Le quattro categorie dell'argomento 2.2, funzionalità, difetti,
  rischi e debito, trasformano una decisione di priorità implicita in una
  esplicita e misurabile.
- **L'allocazione della capacità tra i flow item è a somma zero.** Più capacità
  spesa su un tipo di item significa meno capacità disponibile per gli altri; il
  framework rende visibile questo compromesso anziché lasciarlo implicito.
- **Le cinque metriche di flusso rispondono a domande di business, non solo di
  ingegneria.** Sono progettate per essere presentate a uno stakeholder non
  tecnico, non tenute dentro un team di ingegneria.
- **La gestione del flusso di valore dovrebbe essere continua, non un esercizio
  di mappatura una tantum.** Le mappe statiche del flusso di valore diventano
  obsolete; il framework è costruito per essere strumentato a partire dagli
  strumenti che i team già usano.

## Raccomandazioni

### Mappa il tuo flusso di valore prima di strumentare qualsiasi cosa

Prima di adottare qualsiasi metrica di flusso, percorri il cammino effettivo che
un pezzo di lavoro compie dall'individuazione di un bisogno di business fino alla
ricezione di valore da parte di un cliente, nominando ogni fase e ogni passaggio
di consegna tra team. È il classico esercizio di [mappatura del flusso di valore](https://en.wikipedia.org/wiki/Value_stream_mapping),
adattato dalla produzione snella, e saltarlo è la ragione più comune per cui
l'adozione del Flow Framework produce numeri di cui nessuno si fida: le metriche
calcolate su un processo non esaminato e compreso in modo informale raramente
corrispondono a ciò che accade davvero.

### Collega le metriche di flusso agli strumenti che i tuoi team già usano

Il Flow Framework è costruito per la gestione continua e automatica del flusso di
valore, non per un esercizio manuale periodico di mappatura. Integra il
tracciamento dei flow item direttamente negli strumenti attraverso cui il lavoro
già scorre, Jira, Azure DevOps, GitHub, anziché costruire un sistema di
tracciamento parallelo che i team devono aggiornare a mano. Lo stato di un flow
item dovrebbe aggiornarsi da solo man mano che il ticket o la pull request
sottostante avanza, la stessa disciplina di strumentazione anziché
autodichiarazione che l'argomento 1.5 raccomanda per ogni metrica di questo
libro.

### Presenta la Flow Distribution direttamente agli stakeholder di business, non solo alla dirigenza di ingegneria

La più grande occasione mancata con questo framework è trattarlo come uno
strumento interno di ingegneria. La Flow Distribution, la proporzione di lavoro
che va a funzionalità rispetto a difetti, rischi e debito (argomento 2.3), è
progettata specificamente per essere una conversazione da avere con la dirigenza
di prodotto e di business, perché rende esplicita e negoziabile, anziché
presunta, una decisione di priorità implicita: quanta capacità va a nuovo valore
rispetto a mantenere le luci accese.

### Tratta i quattro flow item come una vera tassonomia, non come una formalità

Richiedi che ogni unità di lavoro sia classificata in esattamente uno dei quattro
tipi di flow item all'ingresso (intake), non a posteriori. Una classificazione
applicata dopo il fatto, o applicata con leggerezza perché «in fondo è una
funzionalità», erode tutto il valore della tassonomia, perché il punto è proprio
avere una registrazione onesta e coerente di dove è davvero andata la capacità.

### Riesamina la tua mappa del flusso di valore quando l'organizzazione cambia, non secondo un calendario fisso

Una mappa del flusso di valore diventa obsoleta nel momento in cui i confini dei
team, gli strumenti o il prodotto stesso cambiano in modo significativo, non a
una cadenza annuale arbitraria. Tratta una riorganizzazione, una grande
migrazione di strumenti o un significativo cambio di rotta del prodotto come un
innesco per ripercorrere il flusso di valore, perché una metrica di flusso
calcolata su una mappa obsoleta misura in silenzio la cosa sbagliata.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Solo metriche di pipeline (DORA, argomento 2.10) | Semplici, ben convalidate, economiche da strumentare dai dati di CI/CD esistenti | Silenziose su che tipo di valore venga consegnato |
| Adozione completa del Flow Framework | Collega la consegna alla strategia aziendale; rende visibile e negoziabile il mix di valore | Richiede una mappa onesta del flusso di valore e una disciplina coerente di classificazione dei flow item |
| Mappatura del flusso di valore statica, una tantum | Economica, rapida da svolgere come laboratorio | Diventa presto obsoleta; produce un'istantanea, non una metrica viva |
| Gestione continua del flusso di valore integrata negli strumenti | Dati vivi, sempre aggiornati; scala su molti flussi di valore | Richiede un vero lavoro iniziale di integrazione degli strumenti |

La tensione centrale è **leggibilità per il business contro sforzo di
strumentazione**. Le metriche di pipeline sono economiche perché la pipeline
produce già i dati; le metriche del flusso di valore richiedono una mappa onesta
dell'intero processo e un'abitudine disciplinata di classificazione
all'ingresso che le metriche di pipeline non hanno mai preteso. Si risolve la
tensione partendo da un solo flusso di valore, non dall'intera organizzazione in
una volta, mappandolo bene e solo poi integrando il tracciamento dei flow item
negli strumenti esistenti, anziché tentare un rilascio in blocco su tutti i team
contemporaneamente.

## Domande da discutere con il vostro team

1. **Potremmo disegnare adesso una mappa accurata del flusso di valore per il
   nostro prodotto più importante, o dovremmo tirare a indovinare diversi
   passaggi di consegna?** La maggior parte delle organizzazioni non ha mai
   percorso davvero questo cammino da un capo all'altro. Provate l'esercizio con
   onestà e annotate ogni punto in cui il gruppo non concorda su ciò che accade
   davvero, perché quel disaccordo è esso stesso diagnostico.

2. **Se classificassimo tutto ciò che il nostro team ha rilasciato nell'ultimo
   trimestre in funzionalità, difetti, rischi e debito, il risultato
   sorprenderebbe la dirigenza di prodotto?** La maggior parte dei team non ha mai
   reso esplicita questa ripartizione, e la risposta rivela spesso un onere di
   manutenzione o un problema di debito che prima era invisibile in un semplice
   conteggio di «story point consegnati».

3. **Abbiamo un modo autentico, integrato negli strumenti, di tracciare i flow
   item, o servirebbe qualcuno che classifichi e riclassifichi il lavoro a
   mano?** Un sistema manuale decade in fretta sotto un carico di lavoro reale;
   uno integrato negli strumenti no. Valutate con onestà quale dei due siete
   davvero pronti a sostenere.

4. **Quando è cambiata l'ultima volta la nostra mappa del flusso di valore, e
   abbiamo aggiornato le nostre metriche di conseguenza?** Riorganizzazioni e
   migrazioni di strumenti invalidano in silenzio una mappa del flusso di valore,
   e poche organizzazioni si ricordano di riesaminarla quando succede.

5. **Le nostre metriche di flusso vengono mai presentate direttamente agli
   stakeholder di business o di prodotto, o restano dentro l'ingegneria?** Il
   vantaggio maggiore del framework rispetto alle sole metriche di pipeline è
   proprio questa conversazione, e saltarla fa perdere la maggior parte del
   valore del framework.

6. **Che cosa servirebbe perché qualcuno manipoli la nostra classificazione dei
   flow item senza fare nulla di disonesto sulla carta?** Ripercorrete come un
   team sotto pressione di consegna potrebbe riclassificare in silenzio lavoro di
   debito o di rischio come funzionalità per sembrare più produttivo, e discutete
   se ve ne accorgereste oggi.

## Prospettiva settoriale

**Startup.** Una mappa completa del flusso di valore è di solito eccessiva per un
team di cinque persone in cui tutti conoscono già a memoria l'intero processo.
L'abitudine utile a questa scala è semplicemente nominare ad alta voce i quattro
tipi di flow item nelle conversazioni di pianificazione, così che il lavoro su
debito e rischio non scompaia in silenzio dalla vista appena incombe la scadenza
di una funzionalità.

**Piccola impresa.** Adottate la classificazione dei flow item all'interno di
qualsiasi strumento di tracciamento leggero che già usate, una colonna
etichettata o un campo personalizzato, anziché un prodotto dedicato di gestione
del flusso di valore. La disciplina di una classificazione coerente conta molto
più della sofisticazione degli strumenti che la sostengono.

**Enterprise.** È qui che il framework si guadagna il pane, perché una grande
organizzazione che gestisce decine di flussi di valore su molte linee di prodotto
non ha altro modo affidabile di vedere, in un solo posto, come la capacità di
ingegneria sia effettivamente allocata tra funzionalità, difetti, rischi e debito.
Investite nell'integrazione degli strumenti; l'alternativa manuale non sopravvive
al contatto con la scala reale.

**Settore pubblico.** La Flow Distribution dà a un'organizzazione di ingegneria
del settore pubblico una risposta difendibile e leggibile per il business a
«perché non esce più nuova funzionalità», quando la risposta onesta è una quota
crescente di capacità che va alla bonifica della sicurezza o al debito ereditato.
Rendere visibile ed esplicito quel compromesso, anziché assorbire la pressione in
silenzio, è spesso la cosa più utile che questo framework offre a un dirigente
tecnologico del pubblico.

## Esempi

**Enterprise.** L'organizzazione della piattaforma sinistri di una grande
compagnia assicurativa credeva di rilasciare soprattutto nuove funzionalità,
sulla base dei suoi rapporti di sprint velocity. Un primo esercizio di mappatura
del flusso di valore e di classificazione dei flow item rivelò che il lavoro di
debito e di rischio, in gran parte debito tecnico non documentato di un sistema
centrale vecchio di dieci anni, consumava in realtà quasi metà della capacità
totale di ingegneria, un fatto che nessun rapporto precedente aveva fatto
emergere perché quel lavoro era sempre stato assorbito in generici «compiti di
ingegneria». Presentare questa ripartizione al comitato esecutivo assicurò per la
prima volta nella storia della piattaforma un budget dedicato alla riduzione del
debito, anziché lasciare che il lavoro sul debito continuasse a competere in
silenzio con ogni richiesta di funzionalità.

**Settore pubblico.** La divisione servizi digitali di un'autorità fiscale
nazionale usò la mappatura del flusso di valore per diagnosticare perché una
funzionalità di punta rivolta ai cittadini fosse «in corso» da oltre un anno
nonostante un completamento regolare degli sprint. La mappa rivelò che il flusso
di valore si estendeva in realtà su cinque team distinti con tre passaggi di
consegna che l'organigramma non rifletteva, e la classificazione dei flow item
mostrò che il tempo di ingegneria effettivo della funzionalità era una piccola
frazione del suo Flow Time totale, il resto consumato dai ritardi di passaggio
tra team che nessuna metrica di un singolo team poteva vedere. La divisione si
ristrutturò attorno al flusso di valore anziché all'organigramma per quella
specifica linea di prodotto, riducendo in modo sostanziale il Flow Time entro due
trimestri.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'adozione del Flow Framework è una risposta difendibile e leggibile
per il business a una domanda a cui le metriche di pipeline non sanno rispondere:
la capacità di ingegneria è allocata nel modo in cui la dirigenza crede? L'esempio
assicurativo qui sopra, che ha fatto emergere quasi metà della capacità destinata
a lavoro di debito prima invisibile, è uno schema comune una volta che
un'organizzazione classifica davvero il proprio lavoro con onestà, e quella
visibilità sblocca di routine investimenti che una vaga richiesta del tipo «ci
serve più tempo per il debito tecnico» non potrebbe mai ottenere.

Il costo totale di proprietà si concentra in due punti: l'esercizio iniziale di
mappatura del flusso di valore, che richiede un vero tempo di facilitazione per
essere svolto con onestà, e l'integrazione degli strumenti necessaria a tenere
aggiornati i dati dei flow item senza manutenzione manuale. Entrambi i costi sono
una tantum o a bassa manutenzione una volta fatti bene, il che rende il
framework considerevolmente più economico da sostenere che da adottare.

## Antipattern e insidie

- **Trattare la mappatura del flusso di valore come un laboratorio una tantum,
  mai riesaminato:** la mappa diventa obsoleta nel momento in cui l'organizzazione
  cambia, e una metrica calcolata su una mappa obsoleta misura la cosa sbagliata.
- **Costruire un sistema parallelo di tracciamento dei flow item mantenuto a
  mano:** decade in fretta sotto un carico di lavoro reale; integrate invece
  negli strumenti esistenti.
- **Classificare i flow item a posteriori anziché all'ingresso:** il vettore di
  manipolazione (gaming) al centro di questo argomento. Sotto pressione di
  consegna, un team può riclassificare in silenzio dopo il fatto lavoro di debito
  o di rischio come funzionalità per apparire più produttivo agli stakeholder che
  vedono solo il grafico della Flow Distribution, senza che nessuno prenda mai
  una decisione esplicita e visibile in tal senso. Il guardrail è richiedere la
  classificazione all'ingresso, prima che l'esito sia noto, e verificare
  periodicamente un campione di item classificati rispetto a ciò che il
  cambiamento sottostante ha davvero fatto, la stessa disciplina di audit che
  l'argomento 1.2 richiede per ogni metrica di questo libro.
- **Tenere le metriche di flusso solo dentro l'ingegneria:** fa perdere il
  vantaggio principale del framework, un vocabolario condiviso con gli
  stakeholder di business.
- **Mappare l'organigramma anziché il flusso di valore effettivo:** nasconde i
  passaggi di consegna tra team che sono spesso la maggiore fonte di ritardo.
- **Adottare il framework in tutta l'organizzazione prima di convalidarlo su un
  solo flusso di valore:** rischia un grande investimento in metriche di cui
  nessuno si fida perché la mappa sottostante non è mai stata confermata
  accurata.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Non esiste una mappa del flusso di valore; il
  lavoro è tracciato come ticket generici senza classificazione dei flow item.
- **Livello 2, Sviluppo (Develop):** Un flusso di valore è stato mappato e i flow
  item sono classificati in modo informale, ma il tracciamento è manuale e
  applicato in modo incoerente.
- **Livello 3, Standardizzazione (Standardize):** La classificazione dei flow item
  è integrata negli strumenti esistenti e applicata in modo coerente
  all'ingresso nei principali flussi di valore.
- **Livello 4, Gestione (Manage):** La Flow Distribution è riesaminata
  regolarmente con gli stakeholder di business, e le mappe del flusso di valore
  sono tenute attivamente aggiornate man mano che l'organizzazione cambia.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione alloca
  deliberatamente l'investimento di ingegneria tra i flussi di valore usando i
  dati di flusso, e sa indicare decisioni strategiche specifiche, un budget di
  riduzione del debito, una ristrutturazione dei team, prese perché il framework
  ha reso visibile un compromesso prima invisibile.

## Spunti di discussione

1. Potremmo disegnare oggi una mappa accurata del flusso di valore del nostro prodotto di punta, senza tirare a indovinare?
2. Quale percentuale della capacità dell'ultimo trimestre rivelerebbe una classificazione onesta dei flow item come andata a debito e rischio, rispetto alle funzionalità?
3. Le nostre metriche di flusso raggiungono oggi gli stakeholder di business, o restano dentro l'ingegneria?
4. Qual è il più grande passaggio di consegna tra team nel nostro flusso di valore che il nostro organigramma non riflette?

## Punti chiave

- Il **Flow Framework**, dal libro *Project to Product* di Mik Kersten, misura
  che tipo di valore scorre in una pipeline di consegna, non solo quanto
  velocemente corre la pipeline stessa.
- Un **flusso di valore**, non un team né una pipeline, è l'unità di misura del
  framework, e mapparlo con onestà viene prima di strumentare qualsiasi cosa.
- **La classificazione dei flow item all'ingresso, non a posteriori**, è il
  guardrail contro il vettore di manipolazione centrale di questo argomento:
  riclassificare in silenzio lavoro di debito o di rischio come funzionalità per
  apparire più produttivi.
- **Collega le metriche di flusso agli strumenti esistenti**, Jira, Azure DevOps,
  GitHub, anziché a un sistema di tracciamento manuale parallelo che non
  sopravvivrà a un carico di lavoro reale.
- Presenta i dati di flusso **direttamente agli stakeholder di business**; quella
  conversazione, non una dashboard interna di ingegneria, è il vantaggio
  principale del framework rispetto alle sole metriche di pipeline.

## Riferimenti e letture di approfondimento

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, e John Shook. *Learning to See: Value Stream Mapping to Create
  Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr e George Spafford. *The Phoenix Project*. IT Revolution
  Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois e John Willis. *The DevOps Handbook*. IT
  Revolution Press, 2016.
