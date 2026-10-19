# 2.3 Flow Velocity e Flow Distribution

## Panoramica e motivazione

La **Flow Velocity** è il numero di flow item (argomento 2.2) completati in un
dato periodo, la misura del Flow Framework per il
[throughput](https://en.wikipedia.org/wiki/Throughput). La **Flow Distribution**
è la proporzione di ciascun tipo di flow item, funzionalità, difetti, rischi e
debito, tra gli item completati nello stesso periodo. Le due metriche sono
pensate per essere lette insieme: la velocity da sola risponde a «quanto abbiamo
rilasciato», la distribution da sola risponde a «che tipo di lavoro era», ma
nessuna delle due domande significa molto senza l'altra. Un team può aumentare la
propria velocity mentre la sua distribution si sposta in silenzio dalle
funzionalità al rifacimento dei difetti, il che sembra un'accelerazione su un
grafico di velocity ed è in realtà il sintomo di una qualità in calo.

Questo abbinamento è la stessa disciplina che l'argomento 1.2 chiede a ogni
famiglia di metriche di questo libro: non riportare mai un numero di velocità
senza il guardrail che mostra quanto quella velocità sia costata. La Flow
Velocity è la generalizzazione più diretta di questa parte di una metrica di
throughput, vicina nello spirito alla frequenza di rilascio (argomento 2.10) più
che a qualsiasi altro singolo numero di questo libro, ma consapevole del tipo di
item in un modo in cui la frequenza di rilascio non è mai stata. La frequenza di
rilascio dice con quale frequenza il codice raggiunge la produzione; la Flow
Velocity, abbinata alla distribution, dice con quale frequenza il valore
raggiunge la produzione e di che tipo di valore si tratti.

Per i team grandi che gestiscono molti flussi di valore in parallelo, questo
abbinamento mette in luce uno schema che un singolo numero di throughput nasconde
del tutto: un flusso di valore la cui velocity appare sana mentre la sua
distribution è scivolata in silenzio verso un lavoro quasi puramente di
funzionalità, privando di risorse la capacità di debito e rischio che l'argomento
2.2 avvertiva richiedere una protezione deliberata. Le organizzazioni enterprise
che confrontano il throughput tra linee di prodotto e le agenzie governative che
riferiscono l'output di consegna agli organi di controllo hanno entrambe bisogno
di questo abbinamento per non scambiare l'output grezzo per un progresso
genuino e sostenibile.

## Principi chiave

- **La velocity senza la distribution nasconde ciò che è stato davvero
  rilasciato.** Un conteggio di item in crescita non dice nulla sul fatto che
  quel conteggio sia sano, manipolato o spostato in silenzio verso il lavoro più
  facile disponibile.
- **La distribution senza la velocity nasconde la scala.** Una ripartizione
  percentuale dall'aspetto sano significa poco se non si sa anche quanto lavoro
  complessivo rappresenti.
- **Le due metriche vanno sempre riportate insieme.** È un'applicazione diretta
  del principio di abbinamento ai guardrail dell'argomento 1.2 ai dati di flusso
  in particolare.
- **La velocity è esposta alla stessa manipolazione per sostituzione di
  qualsiasi metrica basata sul conteggio di item.** Spezzare il lavoro difficile
  in molti item piccoli e facili gonfia il conteggio senza consegnare
  proporzionalmente più valore.
- **Una distribution sana dipende dal contesto, non è un obiettivo fisso.**
  L'argomento 2.2 lo tratta in profondità; velocity e distribution vanno sempre
  interpretate rispetto all'obiettivo che il contesto implica.

## Raccomandazioni

### Riporta la Flow Velocity come linea di tendenza, mai come numero di un singolo periodo

Il conteggio di item di un singolo periodo è rumoroso e facile da fraintendere.
Traccia la Flow Velocity su più periodi consecutivi e guarda la tendenza, non un
singolo punto, la stessa disciplina che l'argomento 1.6 raccomanda per qualsiasi
metrica a serie temporale soggetta a variazione naturale.

### Non presentare mai la Flow Velocity senza la sua distribution accanto

Trattalo come una regola ferrea per qualsiasi dashboard o rapporto, non come un
extra. Un grafico di velocity mostrato da solo invita proprio al fraintendimento
con cui questo argomento si apre: un throughput in crescita che è in realtà una
quota crescente di rifacimento o di lavoro facile su funzionalità che soppianta
la capacità di debito e rischio. Metti entrambe nella stessa vista, sempre.

### Pesa la velocity per dimensione o complessità quando le dimensioni degli item variano molto

Il conteggio grezzo di item tratta come equivalenti un cambio di configurazione di
una riga e una migrazione architetturale di più settimane, il che invita alla
stessa manipolazione per sostituzione che questo libro ha già nominato per la
frequenza di rilascio (argomento 2.10): spezzare il lavoro difficile in molti
item piccoli gonfia il conteggio senza consegnare proporzionalmente di più. Dove
le dimensioni degli item variano molto, pesa la velocity con una stima
approssimativa di dimensione o complessità, oppure traccia la dimensione media
degli item accanto al conteggio grezzo, così che una dimensione media in calo
accanto a un conteggio in aumento sia visibile anziché nascosta.

### Osserva la deriva della Flow Distribution, non solo la sua istantanea attuale

Il segnale più utile nella Flow Distribution raramente sono le percentuali esatte
di questo periodo; è la direzione del cambiamento su più periodi. Una deriva
costante, le funzionalità che salgono mentre debito e rischio si riducono in
silenzio, merita di essere sollevata con gli stakeholder ben prima che diventi il
tipo di problema di qualità o di sicurezza che l'argomento 2.2 avverte accumularsi
in modo invisibile sotto uno schema di feature factory.

### Confronta la Flow Velocity tra flussi di valore solo con vera cautela

Due flussi di valore con diversa granularità degli item, diverse dimensioni dei
team o diverse fasi di prodotto non sono direttamente confrontabili sulla sola
velocity grezza, lo stesso problema di equità che l'argomento 2.10 nomina per la
frequenza di rilascio tra team. Usa la velocity prima per la tendenza del flusso
di valore stesso, e tenta il confronto tra flussi di valore solo dopo aver
confermato definizioni e granularità degli item davvero comparabili.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Solo velocity con conteggio grezzo di item | Semplice da calcolare e spiegare | Esposta alla manipolazione per sostituzione; nasconde che tipo di valore sia stato rilasciato |
| Velocity abbinata alla distribution | Mostra insieme scala e mix di valore | Richiede una classificazione disciplinata dei flow item (argomento 2.2) per essere significativa |
| Velocity pesata per dimensione | Resiste alla manipolazione per sostituzione tramite frammentazione degli item | Richiede un metodo di stima coerente e concordato nel team |
| Confronto di velocity tra flussi di valore | Utile per decisioni di investimento a livello di portafoglio | Facilmente ingiusto senza confermare definizioni di item davvero comparabili |

La tensione centrale è **semplicità contro resistenza alla manipolazione**. Il
conteggio grezzo di item è il numero più facile da calcolare e spiegare, ma anche
il più facile da gonfiare spezzando il lavoro difficile in molti pezzi piccoli. Si
risolve la tensione mantenendo semplice la metrica primaria, velocity grezza
abbinata alla distribution, e riservando la pesatura per dimensione ai flussi di
valore in cui le dimensioni degli item sono note per variare abbastanza da rendere
il semplice conteggio attivamente fuorviante.

## Domande da discutere con il vostro team

1. **Quando riportiamo la Flow Velocity, la Flow Distribution è sempre mostrata
   accanto, o la velocity a volte sta da sola?** Un numero di velocity senza la
   sua distribution è un quadro incompleto secondo il principio centrale di
   questo stesso argomento. Controllate dashboard e rapporti reali per questa
   lacuna.

2. **La dimensione media dei nostri item è cambiata insieme a una velocity in
   crescita, e ce ne accorgeremmo se fosse successo?** Una dimensione media in
   calo accanto a un conteggio in salita è la firma specifica della
   manipolazione per sostituzione applicata ai flow item. Prendete i dati
   effettivi anziché presumere che lo schema sia assente.

3. **Abbiamo mai confrontato la nostra velocity con quella di un altro team senza
   confermare che le nostre definizioni e la granularità degli item
   corrispondessero davvero?** Un confronto ingiusto può spingere un team a
   manipolare i propri numeri solo per apparire comparabile, riecheggiando lo
   stesso rischio che questo libro ha già nominato per la frequenza di rilascio.

4. **La nostra Flow Distribution è derivata in una direzione negli ultimi
   periodi, e qualcuno lo ha deciso deliberatamente?** Una deriva lenta è facile
   da non vedere periodo per periodo. Tracciate insieme più periodi e cercate con
   onestà un trend prima di presumere che la ripartizione attuale sia stabile.

5. **Se qualcuno volesse gonfiare la nostra Flow Velocity senza fare più lavoro
   reale, qual è il modo più semplice per farlo, e la nostra reportistica attuale
   lo intercetterebbe?** Ripercorrete la meccanica specifica dello spezzare item
   difficili in item facili, e discutete se la vostra dashboard rivelerebbe
   davvero quello schema.

6. **I nostri numeri di velocity e distribution raggiungono mai insieme gli
   stakeholder di business, o viaggia verso l'alto solo il titolo della
   velocity?** Il principio dell'abbinamento protegge dal fraintendimento solo se
   entrambe le metà sono davvero viste dalle persone che prendono decisioni sui
   dati.

## Prospettiva settoriale

**Startup.** La Flow Velocity è di solito facile da tracciare in modo informale a
questa scala, dato che l'intero team ha già un'idea approssimativa del
throughput. La disciplina utile è abbinarla alla distribution anche in modo
informale, così che un fondatore non scambi un conteggio crescente di ticket
chiusi per un vero avanzamento delle funzionalità quando il conteggio è in realtà
dominato dalla correzione di bug nelle prime fasi.

**Piccola impresa.** Tracciate velocity e distribution insieme da qualunque
strumento leggero già usiate per la classificazione dei flow item (argomento
2.2); a questa scala non serve una piattaforma di analisi dedicata. L'abitudine
di guardarle sempre fianco a fianco conta più di qualsiasi sofisticazione degli
strumenti.

**Enterprise.** Il confronto della velocity tra flussi di valore è allettante a
questa scala per la prioritizzazione a livello di portafoglio, ed è anche dove il
rischio di iniquità è maggiore, dato che linee di prodotto diverse hanno
legittimamente una granularità degli item molto diversa. Investite nel
confermare definizioni comparabili prima di usare i confronti di velocity per
giustificare decisioni di investimento tra team.

**Settore pubblico.** La Flow Velocity abbinata alla distribution dà a un
dirigente tecnologico del settore pubblico una base di prove molto più solida per
riferire l'output di consegna agli organi di controllo rispetto al solo
throughput grezzo, perché può mostrare non solo quanto è stato rilasciato ma che
il mix riflette un'allocazione deliberata e difendibile tra nuove funzionalità,
correzione dei difetti e gestione del rischio.

## Esempi

**Enterprise.** Il team di piattaforma di un fornitore di software riportò per tre
trimestri consecutivi una Flow Velocity in costante crescita, un trend che la
dirigenza festeggiò come consegna in accelerazione. Un esame più attento della
Flow Distribution, richiesto solo dopo un'escalation di un cliente per bug
ricorrenti, rivelò che la quota di «funzionalità» di quella velocity in crescita
era in realtà scesa dal 70% al 45% nello stesso periodo, con item di correzione
di difetti a colmare il divario. Il team rilasciava più item, ma una proporzione
decrescente di essi era nuovo valore; il resto era rifacimento che il solo
grafico di velocity aveva completamente oscurato.

**Settore pubblico.** Il team della piattaforma dati di un'agenzia statistica
nazionale monitorava la Flow Velocity come principale metrica di consegna per una
relazione annuale al proprio consiglio di controllo. Quando un membro del consiglio
chiese quale proporzione di quella velocity rappresentasse nuova capacità
rivolta al pubblico, il team scoprì di non aver mai scomposto il numero per tipo
di flow item e di non poter rispondere direttamente. L'agenzia adottò in seguito
una reportistica abbinata di velocity e distribution, che rivelò come il lavoro
di rischio e conformità, guidato da una nuova normativa sulla protezione dei dati,
avesse legittimamente consumato una quota crescente di capacità, un'allocazione
difendibile che il consiglio accettò prontamente una volta mostrata
esplicitamente anziché lasciata implicita in un calo di velocity non spiegato.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'abbinare velocity e distribution è un resoconto più onesto e più
difendibile dell'output di consegna di quanto ciascun numero fornisca da solo.
L'esempio del fornitore di software qui sopra, che scopre come la velocity in
crescita rifletta in realtà un output di funzionalità in calo, è esattamente il
tipo di fraintendimento che questo abbinamento previene, e individuare quello
schema presto costa molto meno che scoprirlo solo dopo che un problema di qualità
rivolto ai clienti forza la domanda.

Il costo totale di proprietà è minimo una volta che la classificazione dei flow
item (argomento 2.2) è già in atto: la distribution è una semplice aggregazione
di item già classificati, e la disciplina di mostrare entrambe le metriche
insieme è una convenzione di reportistica, non un investimento tecnico. Gran
parte del costo delle raccomandazioni di questo argomento è stata già pagata
quando l'organizzazione ha adottato una classificazione onesta dei flow item.

## Antipattern e insidie

- **Riportare la Flow Velocity senza la distribution:** il vettore di
  manipolazione al centro di questo argomento. Un team sotto pressione di
  consegna può aumentare il conteggio di item preferendo lavoro piccolo e facile
  su funzionalità ed evitando item più difficili di debito, rischio o difetti, o
  spezzando item grandi in molti piccoli, e un grafico di velocity mostrato da
  solo verrà letto come accelerazione anziché come il reale spostamento in ciò
  che viene consegnato. Il guardrail è la stessa disciplina di abbinamento che
  l'argomento 1.2 richiede in tutto questo libro: non mostrare mai la velocity
  senza la distribution, e controllare periodicamente la dimensione media degli
  item accanto al conteggio per intercettare in particolare la frammentazione.
- **Confrontare la velocity tra flussi di valore con diversa granularità degli
  item:** produce un confronto ingiusto e fuorviante.
- **Trattare la distribution di un singolo periodo come stabile:** perde una
  deriva lenta e significativa che solo una vista di trend rivela.
- **Lasciare che agli stakeholder di business arrivi solo il titolo della
  velocity:** fa perdere tutto il valore protettivo del principio di
  abbinamento.
- **Ignorare la dimensione media degli item mentre si festeggia una velocity in
  crescita:** manca la firma specifica della manipolazione per sostituzione.
- **Fissare un obiettivo di velocity senza alcun riferimento alla distribution:**
  invita proprio alla manipolazione da cui questo argomento mette in guardia.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La Flow Velocity, se tracciata, è riportata da
  sola senza dati di distribution, e nessuno ha controllato la manipolazione per
  sostituzione.
- **Livello 2, Sviluppo (Develop):** Alcuni team tracciano la distribution, ma non
  è abbinata in modo coerente alla velocity nella reportistica né riesaminata
  come trend.
- **Livello 3, Standardizzazione (Standardize):** Velocity e distribution sono
  sempre riportate insieme, viste come trend, con la dimensione media degli item
  monitorata per intercettare la manipolazione per sostituzione.
- **Livello 4, Gestione (Manage):** La deriva della distribution è indagata in
  modo proattivo prima che diventi un problema di qualità o di sicurezza, e i
  confronti di velocity tra flussi di valore sono fatti solo dopo aver confermato
  definizioni di item davvero comparabili.
- **Livello 5, Orchestrazione (Orchestrate):** Velocity e distribution informano
  direttamente le decisioni di investimento a livello di portafoglio, e
  l'organizzazione sa indicare casi specifici in cui la deriva della
  distribution è stata individuata e corretta prima che causasse un fallimento
  visibile.

## Spunti di discussione

1. La nostra reportistica sulla Flow Velocity include sempre la distribution, o abbiamo mai mostrato l'una senza l'altra?
2. La dimensione media dei nostri flow item è cambiata di recente insieme a un cambiamento di velocity?
3. Ci accorgeremmo se la nostra Flow Distribution fosse derivata costantemente negli ultimi trimestri?
4. Che cosa servirebbe perché qualcuno gonfi la nostra velocity senza consegnare più valore reale, e ce ne accorgeremmo?

## Punti chiave

- La **Flow Velocity** misura il throughput; la **Flow Distribution** misura che
  tipo di lavoro quel throughput rappresenti. Riportale insieme, sempre.
- Questo abbinamento è un'applicazione diretta del **principio dei guardrail**
  dell'argomento 1.2: non mostrare mai un numero di velocità senza il contesto di
  quanto sia costato.
- Il vettore di manipolazione centrale dell'argomento è **riportare la velocity
  da sola**, che può nascondere uno spostamento verso lavoro facile su
  funzionalità o una frammentazione di item che gonfia il conteggio senza
  consegnare valore proporzionale.
- La **deriva della distribution** è più visibile come trend su più periodi, non
  nell'istantanea di un singolo periodo.
- I **confronti di velocity tra flussi di valore** richiedono definizioni di item
  davvero comparabili per essere equi; senza, fuorviano più di quanto
  informino.

## Riferimenti e letture di approfondimento

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Forsgren, Nicole, Jez Humble e Gene Kim. *Accelerate: The Science of Lean
  Software and DevOps*. IT Revolution Press, 2018.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable
  Agile Press, 2015.
