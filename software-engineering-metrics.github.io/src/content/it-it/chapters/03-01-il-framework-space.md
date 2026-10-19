# 3.1 Il framework SPACE

## Panoramica e motivazione

Il [framework SPACE](https://queue.acm.org/detail.cfm?id=3454124), pubblicato nel
2021 dai ricercatori Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila,
Thomas Zimmermann, Brian Houck e Jenna Butler, è stato costruito per rispondere a
un problema specifico: le metriche di [produttività](https://en.wikipedia.org/wiki/Productivity)
degli sviluppatori con un solo numero, righe di codice, numero di commit, story
point, sono banalmente manipolabili e fuorviano di routine. SPACE propone invece di
misurare su cinque dimensioni: **Satisfaction and well-being** (soddisfazione e
benessere), **Performance** (prestazioni), **Activity** (attività),
**Communication and collaboration** (comunicazione e collaborazione) ed
**Efficiency and flow** (efficienza e flusso). Nessuna lettera è pensata per
stare da sola; il vero contributo del framework è la disciplina di tenere tutte e
cinque in vista insieme, così che un team non possa apparire produttivo su un asse
danneggiandone in silenzio un altro.

Questo conta perché la produttività degli sviluppatori non è una cosa sola. Un team
può essere molto attivo (molti commit, molte pull request) pur avendo prestazioni
scarse (il lavoro non muove i risultati che contano). Un team può rendere bene nel
breve periodo mentre la soddisfazione crolla, un indicatore anticipatore del
turnover e del crollo della qualità che emergono mesi dopo. L'intuizione di SPACE,
che si basa direttamente sugli argomenti 1.2 e 1.3 di questo libro, è che ognuna di
queste dimensioni, perseguita come obiettivo autonomo, sarà manipolata a spese
delle altre, e il framework esiste specificamente per rendere visibile quel
compromesso prima che faccia danni reali.

Per i team grandi, SPACE dà alla dirigenza un vocabolario condiviso per una
conversazione che altrimenti ripiega su qualunque dimensione sia più facile da
misurare, quasi sempre l'attività. Le organizzazioni enterprise che confrontano la
produttività di molti team hanno bisogno di un framework che resista all'attrazione
verso il contare i commit; le organizzazioni governative sottoposte a pressione di
assunzione e fidelizzazione in un mercato del lavoro competitivo hanno bisogno dei
dati di soddisfazione e benessere tanto quanto dei dati di consegna, perché perdere
un ingegnere esperto per burnout costa molto più di quanto l'output di un singolo
sprint abbia mai fatto risparmiare.

## Principi chiave

- **Nessuna singola dimensione SPACE è affidabile in isolamento.** Il valore del
  framework viene specificamente dal misurarne diverse insieme.
- **Almeno una metrica da almeno tre dimensioni, mescolando fonti soggettive e
  oggettive, è il minimo per un quadro equilibrato.** Un insieme di metriche tratto
  interamente da una dimensione o da un tipo di dato non sta davvero usando SPACE.
- **L'attività è la dimensione più incline a essere usata male come proxy
  autonomo.** È la più facile da misurare e la meno rappresentativa del valore
  effettivo da sola.
- **La misurazione a livello di team e quella a livello individuale richiedono
  trattamenti diversi.** SPACE è stato progettato principalmente per approfondimenti
  a livello di team e di sistema, non per schede di valutazione individuali.
- **Le cinque dimensioni interagiscono.** Un cambiamento che ne migliora una può
  peggiorarne un'altra, e il framework esiste per intercettare quel compromesso.

## Raccomandazioni

### Costruisci il tuo insieme di metriche da almeno tre dimensioni prima di fidartene

Non adottare SPACE scegliendo la tua dimensione preferita, di solito attività o
prestazioni, e considerando il lavoro finito. Scegli deliberatamente almeno una
metrica da almeno tre delle cinque dimensioni, mescolando strumentazione oggettiva
(argomento 1.5) con dati soggettivi di sondaggio (argomento 3.7), prima di
presentare qualsiasi conclusione sulla produttività del team. Questa composizione
minima è ciò che impedisce a SPACE di ricadere nel problema del proxy singolo che
doveva risolvere.

### Tratta le metriche di attività come contesto, mai come titolo

Conteggi di commit, righe di codice e numero di pull request sono dati legittimi
della dimensione attività di SPACE, ma non dovrebbero mai essere la metrica primaria
o unica presentata sulla produttività di un team. Usa i dati di attività per
fornire contesto alle altre dimensioni, per esempio notando che un calo
dell'attività è coinciso con un aumento della soddisfazione perché il team ha
finalmente avuto spazio per ripagare debito tecnico, anziché come verdetto
indipendente. L'argomento 3.4 tratta in profondità i rischi specifici di questa
dimensione.

### Applica SPACE a livello di team e di sistema, non individuale

La ricerca originale di SPACE e la sua successiva adozione nel settore trattano il
framework come una lente per capire la produttività di team e di organizzazione,
non come scheda di valutazione individuale. Applicare le dimensioni SPACE per
classificare i singoli, soprattutto la dimensione attività, ricrea esattamente il
rischio di manipolazione da cui l'argomento 1.2 mette in guardia e applica male un
framework che non è mai stato convalidato per quell'uso.

### Fai attenzione ai compromessi tra dimensioni, non solo al movimento all'interno di una

Il vero potere diagnostico del framework viene dall'osservare come le dimensioni si
muovono l'una rispetto all'altra. Una metrica di prestazione in crescita accanto a
una soddisfazione in calo è un segnale d'allarme da indagare subito, indicando
potenzialmente un ritmo insostenibile. Una metrica di attività in crescita accanto
a prestazioni piatte o in calo suggerisce attività superflua anziché progresso
genuino. Riesamina insieme tutte e cinque le dimensioni con una cadenza fissa
proprio per cogliere questi schemi trasversali, non solo per controllare ogni
numero in isolamento.

### Mescola le cadenze in modo appropriato tra le dimensioni

Alcune dimensioni SPACE cambiano lentamente e si misurano meglio periodicamente
(la soddisfazione, di solito con cicli di sondaggio trimestrali); altre cambiano
rapidamente e traggono vantaggio da un tracciamento automatico più frequente
(attività, efficienza e flusso, entrambe in gran parte strumentabili dai sistemi
esistenti). Adatta la cadenza di misurazione al ritmo naturale di cambiamento di
ciascuna dimensione anziché forzare ogni metrica sulla stessa pianificazione di
rendicontazione.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Insieme di metriche a dimensione singola (di solito attività) | Semplice, economico, familiare | Facilmente manipolabile, perde il costo umano di pratiche insostenibili |
| Adozione completa di SPACE a cinque dimensioni | Equilibrata, resiste alla manipolazione su un solo asse, coglie i compromessi | Richiede più strumentazione e investimento nei sondaggi |
| Applicazione di SPACE a livello di team | In linea con l'uso convalidato del framework, protegge i singoli da un'applicazione impropria | Non sa rispondere alle domande a livello individuale che la dirigenza a volte vuole |
| Applicazione di SPACE a livello individuale | Sembra più direttamente azionabile ad alcuni manager | Applica male il framework; forte rischio di manipolazione e per il morale |

La tensione centrale è **completezza della misurazione contro costo e
complessità**. Un'implementazione SPACE completa ed equilibrata richiede più
strumentazione, più impegno nella progettazione dei sondaggi e più disciplina per
riesaminare insieme le cinque dimensioni di quanto richieda una semplice dashboard
di attività. Si risolve la tensione partendo da un insieme davvero minimo ma
equilibrato, almeno una metrica da almeno tre dimensioni, anziché saltare del
tutto la disciplina del framework o tentare fin dal primo giorno una versione
schiacciante e completamente strumentata di tutte e cinque le dimensioni.

## Domande da discutere con il vostro team

1. **Il nostro attuale insieme di metriche di produttività attinge ad almeno tre
   dimensioni SPACE, o è dominato dai soli dati di attività?** Verificate la
   dashboard rispetto alle cinque dimensioni in modo esplicito; la maggior parte
   delle organizzazioni, valutate con onestà, è molto più sbilanciata sull'attività
   di quanto si renda conto.

2. **Abbiamo mai visto una dimensione SPACE migliorare mentre un'altra peggiorava
   in silenzio, e ce ne siamo accorti allora?** Questo compromesso trasversale è
   esattamente ciò che il framework è progettato per intercettare. Guardate
   indietro all'ultimo anno per un periodo in cui le metriche di consegna sono
   migliorate e chiedetevi che cosa mostrassero nella stessa finestra i dati di
   soddisfazione o benessere.

3. **I dati SPACE sono mai usati, anche informalmente, per valutare o confrontare
   individui anziché team?** Questo applica male il framework e invita alla
   manipolazione. Siate onesti su come queste metriche siano effettivamente
   discusse nella pratica, non solo su come la policy dichiari che dovrebbero
   essere usate.

4. **Come ci accorgeremmo che un team ha migliorato le proprie metriche di
   prestazione a costo di un ritmo insostenibile?** Senza dati di soddisfazione e
   benessere riesaminati accanto ai dati di prestazione, questo tipo di
   compromesso è invisibile finché non emerge come turnover o crollo della qualità
   mesi dopo.

5. **Qual è la nostra cadenza di misurazione per ciascuna delle cinque dimensioni,
   e corrisponde alla velocità con cui ogni dimensione cambia davvero?** Un
   sondaggio trimestrale di soddisfazione abbinato a dati di attività in tempo reale
   è una ragionevole differenza di cadenza; la stessa cadenza applicata a tutte e
   cinque senza riflettere non lo è.

6. **Se domani arrivasse un nuovo responsabile di ingegneria e guardasse solo la
   nostra dashboard, otterrebbe un quadro equilibrato della produttività del team o
   uno sbilanciato?** È una prova pratica del fatto che il vostro insieme di metriche
   abbia davvero raggiunto l'equilibrio di SPACE, o che si limiti ad accennare al
   framework restando nella pratica dominato dall'attività.

## Prospettiva settoriale

**Startup.** Un'implementazione completa a cinque dimensioni è di solito eccessiva
per una manciata di ingegneri che si parlano ogni giorno e possono percepire
direttamente la salute della soddisfazione e della collaborazione. L'unica
abitudine da adottare presto è resistere all'attrazione verso metriche di sola
attività man mano che il team comincia a crescere oltre la dimensione in cui la
consapevolezza informale copre tutto.

**Piccola impresa.** Senza una funzione dedicata di people analytics, mantenete la
semplicità: abbinate qualunque dato di consegna già abbiate (argomento 2.10) a un
breve controllo informale e regolare della soddisfazione, anche un semplice
sondaggio lampo con una sola domanda. Quell'abbinamento minimo cattura già la
disciplina centrale del framework molto meglio di una dashboard di sola attività.

**Enterprise.** È qui che il framework completo si guadagna la sua complessità.
Standardizzate un insieme equilibrato di metriche SPACE tra i team, così che la
dirigenza possa confrontare la produttività in modo equo anziché ripiegare sul team
con il grafico di commit più impressionante, e investite nell'infrastruttura di
sondaggi che l'argomento 3.7 tratta per rendere i dati di soddisfazione e
collaborazione affidabili quanto la strumentazione oggettiva.

**Settore pubblico.** La pressione di assunzione e fidelizzazione, soprattutto dove
le retribuzioni del pubblico non sempre possono competere con le offerte del
privato, rende i dati di soddisfazione e benessere una questione davvero
strategica, non un'aggiunta marginale. Trattate SPACE con la stessa serietà delle
metriche di consegna nella pianificazione della forza lavoro e nella giustificazione
del budget, dato che il costo di perdere un ingegnere esperto per burnout si misura
in mesi di conoscenza istituzionale che un sostituto non può fornire subito.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda software monitorava da
anni conteggi di commit e story point completati come principale segnale di
produttività. Dopo aver adottato un insieme di metriche SPACE più completo,
incluso un sondaggio trimestrale di soddisfazione e un'analisi della rete di
collaborazione (argomento 3.5), la dirigenza scoprì che il team con i numeri di
attività più alti aveva anche i punteggi di soddisfazione più bassi e il più alto
tasso di dimissioni volontarie nell'anno successivo. I soli numeri di attività
erano stati attivamente fuorvianti; il quadro più completo portò a una riduzione
deliberata del carico di lavoro simultaneo di quel team (il principio del WIP
dell'argomento 2.5 applicato a livello umano) e a un recupero misurabile sia della
soddisfazione sia, alla fine, di prestazioni sostenibili.

**Settore pubblico.** Un'agenzia nazionale di servizi digitali, in competizione per
il talento ingegneristico contro stipendi del privato che non poteva eguagliare,
adottò un insieme equilibrato di metriche SPACE specificamente per sostenere
investimenti di fidelizzazione non monetari: strumenti migliori, tempo di
concentrazione protetto e minore attrito di processo. I dati dei sondaggi di
soddisfazione combinati con le metriche di efficienza e flusso (argomento 3.6)
mostrarono che la frequenza delle interruzioni, non la retribuzione, era il
predittore più forte dell'intenzione di andarsene nei dati dei colloqui di uscita.
Il successivo investimento dell'agenzia in una policy di tempo di concentrazione
protetto, giustificata direttamente da questi dati SPACE, si accompagnò a un
miglioramento misurabile della fidelizzazione nei diciotto mesi seguenti.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'adottare SPACE per intero è il turnover evitato e il crollo di
qualità da burnout evitato, entrambi molto più costosi del costo di strumentazione
del framework. Un insieme di metriche di sola attività può apparire eccellente per
un anno o due fino a quando il costo umano si fa sentire tutto insieme, a quel
punto il costo di sostituire la competenza perduta e ricostruire la salute del team
supera di gran lunga qualsiasi guadagno di produttività che l'insieme ristretto di
metriche sembrava mostrare.

Il costo totale di proprietà comprende l'infrastruttura di sondaggi (argomento 3.7)
e la disciplina di riesaminare insieme tutte e cinque le dimensioni anziché
ripiegare su quella più facile. Vale davvero la pena pagare quel costo: l'esempio
enterprise qui sopra mostra uno schema reale e scopribile, alta attività che
maschera un alto rischio di turnover, che un insieme di metriche più ristretto non
avrebbe mai fatto emergere finché il danno non fosse già fatto.

## Antipattern e insidie

- **Adottare SPACE solo di nome restando dominati dall'attività nella pratica:** il
  modo di fallire più comune, e vanifica l'intero scopo del framework.
- **Applicare le dimensioni SPACE a schede di valutazione individuali:** applica
  male un framework convalidato per approfondimenti a livello di team e di
  sistema.
- **Riesaminare le dimensioni in isolamento anziché cercare i compromessi
  trasversali:** perde lo schema che SPACE è progettato specificamente per
  intercettare.
- **Forzare ogni dimensione sulla stessa cadenza di misurazione:** spreca sforzo
  su dimensioni che cambiano lentamente e misura troppo poco quelle che cambiano
  in fretta.
- **Trattare il punteggio di un singolo sondaggio di soddisfazione come sufficiente
  senza dati oggettivi:** perde l'equilibrio tra fonti soggettive e oggettive che
  il framework richiede.
- **Ignorare un trend in peggioramento in una dimensione perché un'altra appare
  bene:** il fallimento esatto che la disciplina trasversale del framework esiste
  per prevenire.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** La produttività è misurata attraverso le sole
  metriche di attività, senza raccogliere dati di soddisfazione, collaborazione o
  efficienza.
- **Livello 2, Sviluppo (Develop):** Alcune dimensioni aggiuntive sono misurate in
  modo informale, ma non c'è una revisione trasversale coerente né uno standard di
  composizione minima.
- **Livello 3, Standardizzazione (Standardize):** Un insieme equilibrato di metriche
  che attinge ad almeno tre dimensioni SPACE è applicato in modo coerente a livello
  di team in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Tutte e cinque le dimensioni sono riesaminate
  insieme con una cadenza regolare, i compromessi trasversali sono indagati
  attivamente e il framework informa decisioni reali su personale e processo.
- **Livello 5, Orchestrazione (Orchestrate):** I dati SPACE plasmano direttamente la
  pianificazione della forza lavoro e l'investimento nella fidelizzazione, e
  l'organizzazione sa indicare interventi specifici, informati da schemi
  trasversali, che hanno migliorato in modo misurabile insieme sia la consegna sia
  il benessere degli sviluppatori.

## Spunti di discussione

1. Quale dimensione SPACE è meno misurata nel nostro attuale insieme di metriche?
2. Abbiamo mai visto l'attività di un team salire mentre la soddisfazione calava in silenzio?
3. Come coglieremmo oggi un team che baratta la sostenibilità a lungo termine con l'output a breve termine?
4. Qualche dato affine a SPACE è attualmente usato per valutare individui anziché team?
5. Che aspetto avrebbe concretamente per noi una dashboard di produttività davvero equilibrata?

## Punti chiave

- SPACE copre cinque dimensioni, **soddisfazione e benessere, prestazioni, attività,
  comunicazione e collaborazione, ed efficienza e flusso**, e nessuna è affidabile
  da sola.
- Costruisci un insieme di metriche da **almeno tre dimensioni**, mescolando fonti
  di dati oggettive e soggettive.
- Tratta le **metriche di attività come contesto**, mai come segnale di
  produttività in primo piano (argomento 3.4).
- Applica SPACE a **livello di team e di sistema**, non come scheda di valutazione
  individuale.
- Riesamina le dimensioni insieme, cercando i **compromessi trasversali**, non solo
  il movimento all'interno di una singola.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021): l'articolo originale del framework SPACE.
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il fondamento di ricerca condiviso con le metriche DORA).
- *Peopleware: Productive Projects and Teams*, di Tom DeMarco e Timothy Lister (il
  classico argomento per trattare la produttività degli sviluppatori come una
  questione umana e non puramente meccanica).
- *Drive: The Surprising Truth About What Motivates Us*, di Daniel H. Pink (ricerca
  sulla motivazione rilevante per la misurazione di soddisfazione e benessere).
