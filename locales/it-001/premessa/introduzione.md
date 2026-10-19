# Introduzione

Questo libro è una guida di lavoro per misurare bene l'[ingegneria del software](https://en.wikipedia.org/wiki/Software_engineering),
per team che vanno da una startup di cinque persone a un'impresa con migliaia di
ingegneri o a un'agenzia governativa che rendiconta rispetto a un quadro normativo di
prestazioni. Esiste perché la maggior parte dei consigli sulle metriche è o il riassunto
di un framework senza dettaglio operativo, o l'elenco di funzionalità di un fornitore di
strumenti. Questo libro cerca di non essere né l'uno né l'altro: ha opinioni precise su
che cosa misurare, è esplicito su come ogni metrica viene manipolata ed è pratico su
come condurre un programma di metriche di cui un team si fida anziché che teme.

## A chi è rivolto

Il pubblico principale sono le persone che scelgono che cosa un'organizzazione misura:
dirigenti di ingegneria, staff e principal engineer, team di piattaforma e DevOps, e
responsabili di programma e di prodotto. Il pubblico secondario è qualsiasi ingegnere
che voglia capire il ragionamento dietro una dashboard che gli viene chiesto di far
muovere, e come contestare una metrica che ha smesso di servire al suo scopo. Non serve
leggerlo da cima a fondo. Ogni argomento si regge da solo, enuncia prima i propri
principi e si chiude con indicazioni pratiche, un modello di maturità e riferimenti.

## Come è organizzato il libro

Il libro è diviso in **parti** (numeri interi) e **argomenti** (decimali). L'argomento
**N.0** introduce ogni parte e spiega come i suoi argomenti si collegano tra loro; gli
argomenti **N.1, N.2, …** trattano i temi in profondità.

- **Parte 1, Fondamenti della misurazione:** perché misurare, la legge di Goodhart e la
  psicologia della manipolazione, scegliere i risultati prima dell'output, governance e
  responsabilità, fonti di dati e l'alfabetizzazione statistica di cui ogni programma di
  metriche ha bisogno.
- **Parte 2, Metriche di flusso:** il Flow Framework, i suoi flow item e le cinque
  metriche di flusso, il cycle time, la teoria delle code, le classiche metriche Lean
  del flusso di valore, le metriche di pull request e di revisione del codice e il
  framework DORA come argomento di riferimento.
- **Parte 3, Esperienza degli sviluppatori e framework SPACE:** il framework SPACE e le
  sue cinque dimensioni, e come condurre un sondaggio sull'esperienza degli sviluppatori
  senza che diventi un concorso di popolarità.
- **Parte 4, Metriche di codice e qualità:** complessità, copertura ed efficacia dei
  test, churn e hotspot, analisi statica, debito tecnico e documentazione.
- **Parte 5, Metriche di prodotto e di business:** difetti sfuggiti, adozione delle
  funzionalità, risultati per clienti e business, economia unitaria e ritorno
  sull'investimento.
- **Parte 6, Metriche di affidabilità, operatività e sicurezza:** SLI, SLO ed error
  budget, metriche degli incidenti, reperibilità e capacità, e metriche di sicurezza e
  di vulnerabilità.
- **Parte 7, Metriche nell'era dell'IA:** il cambio di paradigma dell'IA generativa,
  come misurare lo sviluppo assistito dall'IA, il rischio di gonfiatura delle metriche
  e perché la telemetria dei risultati diventa la stella polare man mano che l'output
  diventa economico.
- **Parte 8, Costruire un programma di metriche:** progettare una dashboard, costruire o
  comprare, diffondere le metriche senza generare paura, un modello di maturità e una
  tabella di marcia di adozione incrementale.
- **Parte 9, Appendici:** glossario, un riferimento di definizioni e formule delle
  metriche, liste di controllo, modelli, autovalutazione della maturità, riferimenti e
  indice analitico.

## Principi guida

Otto principi formano la spina dorsale del libro:

1. **Una misura che diventa un obiettivo smette di essere una buona misura.**
   Progetta contro la legge di Goodhart fin dall'inizio, non dopo che la distorsione è
   comparsa.
2. **Risultati prima dell'output, output prima dell'attività.** Pondera ogni insieme di
   metriche verso ciò che è cambiato per il cliente o per il business, non verso ciò
   che il team ha prodotto o quanto fosse indaffarato.
3. **Ogni metrica incentivata ha bisogno di un guardrail.** Abbina velocità e qualità,
   throughput e stabilità, e non inseguire mai un numero in isolamento.
4. **Misura i sistemi, non le persone.** Una metrica che individualizza la colpa rompe
   la fiducia e invita alla manipolazione; una metrica che rivela un vincolo del sistema
   invita al miglioramento.
5. **Preferisci la strumentazione all'autodichiarazione dove puoi ottenerla, e
   l'autodichiarazione dove non puoi.** I conteggi dei rilasci vengono dalla pipeline;
   la soddisfazione si ottiene chiedendo.
6. **Una metrica si guadagna il posto o viene ritirata.** Ogni riquadro di una
   dashboard costa attenzione. Sfoltisci con deliberazione.
7. **Le definizioni contano più delle dashboard.** Due team che calcolano il «lead
   time» in modo diverso passeranno più tempo a discutere il numero che ad agire.
8. **L'IA generativa è una ragione per riesaminare, non solo per rifare la linea di
   base.** Quando l'output diventa economico, le metriche costruite attorno al volume di
   output hanno bisogno di nuovi guardrail, non solo di nuovi obiettivi.

## Temi trasversali

La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è il tema che
attraversa ogni parte di questo libro, non solo l'argomento 1.2. Ogni argomento su una
famiglia di metriche enuncia come la metrica che tratta viene manipolata e quale
guardrail intercetta la manipolazione. Gli obblighi di rendicontazione governativi ed
enterprise, dove una metrica può avere peso normativo o contrattuale, sono trattati
come input di progetto in tutto il libro, non come ripensamento confinato a un solo
argomento.

## Come usarlo

Adotta in modo incrementale; non imporre in un big-bang una dashboard a un team che non
ne ha mai avuta una. Parti da dove il dolore è maggiore, usa il modello di maturità di
ciascun argomento per collocarti con onestà e lascia che la tabella di marcia di
adozione (argomento 8.5) sequenzi il lavoro. L'obiettivo non è un muro di grafici. È
un'organizzazione che sa dire, con prove, se ciò che sta facendo funziona, e che si fida
abbastanza dei propri numeri da agire su di essi.
