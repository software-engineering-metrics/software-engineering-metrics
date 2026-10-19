# 7.1 Il cambio di paradigma dell'IA generativa

## Panoramica e motivazione

Per gran parte della storia dell'ingegneria del software, scrivere codice era abbastanza
lento e faticoso che il volume di output grezzo, righe scritte, commit fatti,
funzionalità rilasciate, correlava almeno vagamente con lo sforzo reale e, in modo
imperfetto, con il valore reale. Quella correlazione non è mai stata perfetta,
l'argomento 3.4 ha dedicato un intero argomento al perché le metriche di attività
fuorviino anche in un mondo pre-IA, ma era abbastanza forte da portare molte
organizzazioni a costruire programmi di metriche sull'assunzione implicita che più
codice prodotto significasse in genere più lavoro svolto. Gli assistenti di codifica
basati sull'[IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
hanno rotto quell'assunzione in modo decisivo: uno strumento può ora produrre in pochi
secondi un volume ampio e dall'aspetto plausibile di codice, a una frazione del costo
precedente, e quel volume non dice quasi nulla da solo sul fatto che il codice
risultante funzioni, sia manutenibile o serva a uno scopo reale.

L'affermazione centrale di questo argomento è che si tratta di un cambio di paradigma,
non di un cambiamento incrementale degli strumenti. Un cambio di paradigma cambia ciò
che i vostri strumenti di misura esistenti misurano davvero, non solo i valori che
riportano. Un tachimetro continua a misurare la velocità dopo che si cambia il motore
di un'auto; diverse metriche di questo libro non superano questa transizione in modo
così netto. La frequenza di rilascio (argomento 2.10) può salire perché l'IA ha
accelerato un lavoro genuinamente prezioso, o perché l'IA ha reso banalmente facile
generare molti piccoli cambiamenti di poco valore; il solo numero non sa più
distinguere i due casi, come in gran parte sapeva fare, con la dovuta cautela, prima. La
stessa logica si applica con ancora più forza ai conteggi grezzi di commit, alle righe
di codice e al volume di pull request, tutti già sconsigliati dall'argomento 3.4 come
metriche individuali, ora amplificati in un rischio rilevante anche a livello di team e
di organizzazione.

Per i team grandi, questo cambiamento è arrivato più in fretta di quanto la pratica di
misurazione della maggior parte delle organizzazioni riuscisse ad adattarsi, e il
divario tra velocità di adozione e adattamento della misurazione è dove vive il rischio
reale di questa parte. Le organizzazioni enterprise che continuano a riportare metriche
di attività dell'era pre-IA senza aggiustamenti rischiano di festeggiare una metrica
che ha smesso in silenzio di correlare con il valore; le organizzazioni governative che
valutano un investimento in strumenti di IA hanno bisogno di una comprensione lucida di
quali metriche restino affidabili e quali non lo siano più, prima di impegnarsi in
decisioni di acquisto o di policy costruite su assunzioni di misurazione superate.

## Principi chiave

- **È un cambio di paradigma in ciò che le metriche misurano, non un cambiamento
  incrementale.** Alcune metriche esistenti hanno smesso in silenzio di significare ciò
  che significavano.
- **Il volume di output non è mai stato un proxy affidabile del valore, e ora è
  diventato attivamente inaffidabile.** L'avvertimento dell'argomento 3.4 era sempre
  corretto; questo cambiamento rende molto più costoso ignorarlo.
- **Il divario tra velocità di adozione dell'IA e velocità di adattamento della
  misurazione è il vero rischio.** Le organizzazioni adottano gli strumenti più in
  fretta di quanto riconsiderino le proprie metriche.
- **Non tutte le metriche di questo libro sono colpite allo stesso modo.** Le metriche
  di risultato (Parte 5) sono molto più resilienti a questo cambiamento delle metriche
  di attività e di output grezzo.
- **Questo cambiamento è di tutto il settore e in corso, non un aggiustamento una
  tantum.** Aspettati un cambiamento continuo man mano che gli strumenti e i loro
  schemi di adozione continuano a evolvere.

## Raccomandazioni

### Verifica esplicitamente il tuo insieme di metriche per la validità nell'era dell'IA

Passa in rassegna la tua dashboard attuale e, per ciascuna metrica, chiediti
direttamente: un team che usa molto l'assistenza dell'IA ma non produce più valore
reale di prima mostrerebbe una lettura migliorata su questa metrica? I conteggi di
attività, la frequenza di commit e la frequenza di rilascio grezza (senza un guardrail
di stabilità abbinato, argomento 2.10) sono i più esposti. Le metriche di risultato
della Parte 5, tasso di difetti sfuggiti, adozione delle funzionalità, risultati di
business, sono comparativamente resilienti, dato che misurano il risultato effettivo
anziché il volume di attività che lo ha prodotto.

### Riesamina in particolare frequenza di rilascio e lead time, con maggiore attenzione ai guardrail

L'argomento 2.10 ha già messo in guardia dalla manipolazione per sostituzione, spezzare
un lavoro significativo in rilasci banali per gonfiare il conteggio. L'IA generativa
rende questo specifico schema di manipolazione drasticamente più economico e facile da
produrre, anche involontariamente, dato che i cambiamenti banali assistiti dall'IA sono
ora quasi gratuiti da generare. Stringi il tuo guardrail del tasso di fallimento dei
cambiamenti (argomento 2.10) in proporzione a quanto un team ha adottato lo sviluppo
assistito dall'IA, e osserva ancora più da vicino i trend della dimensione dei
rilasci.

### Tratta la capacità di revisione del codice come un nuovo collo di bottiglia critico

Se l'assistenza dell'IA aumenta drasticamente il volume di codice proposto per la
revisione, la fase di revisione (argomento 2.9), già spesso il maggior contributore al
tempo di attesa nella pipeline di consegna, diventa un vincolo ancora più netto. Un
revisore a cui si chiede di valutare un volume molto più alto di codice generato
dall'IA allo stesso ritmo di prima rallenterà inevitabilmente la pipeline o ridurrà la
profondità della revisione, esattamente il rischio del timbro di gomma da cui
l'argomento 2.9 già metteva in guardia, ora sotto una pressione significativamente
maggiore. Monitora con maggiore attenzione i guardrail di profondità e qualità della
revisione man mano che il volume di codice generato dall'IA cresce.

### Non presumere che il codice generato dall'IA abbia lo stesso profilo di difetti del codice scritto da persone

Le prime prove e l'esperienza dei professionisti suggeriscono che il codice generato
dall'IA possa avere un profilo di difetti diverso da quello scritto da persone: logica
dall'aspetto plausibile ma sottilmente sbagliata, gestione dei casi limite generata con
sicurezza ma errata, o codice che supera una revisione superficiale perché appare
idiomatico e ragionevole, ma non è stato davvero ragionato con una genuina comprensione
del contesto specifico del sistema. Tratta questo come un'ipotesi da mettere
attivamente alla prova sui tuoi dati di difetti sfuggiti (argomento 5.1), etichettando i
difetti in base al fatto che il codice di origine fosse in misura sostanziale generato
dall'IA, anziché presumere che i rapporti storici tra tasso di difetti su cui la tua
organizzazione ha costruito le proprie pratiche di qualità valgano ancora invariati.

### Aggiorna esplicitamente per questo cambiamento la tua carta delle metriche e il tuo processo di governance

Seguendo la disciplina di governance dell'argomento 1.4, non lasciare che questo
cambiamento capiti passivamente al tuo programma di metriche. Riesamina esplicitamente
la tua carta delle metriche, nominando quali metriche richiedono nuovi guardrail, quali
vanno ritirate e quali restano affidabili, come decisione di governance deliberata
anziché come deriva non esaminata. Documenta il ragionamento, dato che è esattamente il
tipo di cambiamento definitorio e contestuale che l'argomento 1.4 avverte poter
avvenire altrimenti in silenzio ed essere scoperto solo molto più tardi.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Continuare a riportare le metriche pre-IA invariate | Nessuna interruzione, reportistica familiare | Rischia di festeggiare metriche che hanno smesso in silenzio di correlare con il valore |
| Verifica completa dell'insieme di metriche e revisione deliberata | Ripristina una misurazione affidabile | Richiede un vero sforzo analitico e una gestione del cambiamento organizzativo |
| Abbandonare del tutto le metriche di attività e di output | Rimuove direttamente il rischio più esposto | Perde un po' di segnale contestuale davvero utile (la precisazione dell'argomento 3.4) |
| Stringere i guardrail senza una verifica completa | Più rapido da attuare | Può perdere metriche la cui esposizione è meno ovvia dei casi più evidenti |

La tensione centrale è **continuità di misurazione contro validità di misurazione**.
Le organizzazioni preferiscono comprensibilmente continuare a riportare metriche
familiari in modi familiari, dato che cambiare un programma di metriche ha un costo
organizzativo e un'interruzione reali. Ma continuare a riportare una metrica che ha
smesso in silenzio di misurare ciò che misurava è peggio di un'interruzione, è
fuorviare attivamente. Si risolve la tensione trattando questo come esattamente il tipo
di cambiamento di governance deliberato e documentato che l'argomento 1.4 descrive,
dirompente nel breve periodo ma necessario per mantenere oneste le metriche
dell'organizzazione.

## Domande da discutere con il vostro team

1. **Per ciascuna metrica della nostra dashboard, un team che usa molto l'assistenza
   dell'IA ma non produce più valore reale mostrerebbe una lettura migliorata?**
   Passate le vostre metriche in rassegna in modo esplicito con questa prova; quelle
   che la falliscono sono i vostri candidati a più alta priorità per guardrail rivisti o
   per il ritiro.

2. **La nostra frequenza di rilascio o il nostro volume di commit sono saliti da
   quando abbiamo adottato l'assistenza di codifica basata sull'IA, e abbiamo
   controllato se il tasso di fallimento dei cambiamenti o il tasso di difetti si
   siano mossi di conseguenza?** Prendete i dati abbinati effettivi anziché presumere un
   esito positivo o negativo.

3. **La nostra capacità di revisione del codice tiene il passo con qualsiasi aumento
   del volume di codice assistito dall'IA, o la profondità della revisione si sta
   erodendo in silenzio sotto una pressione maggiore?** Controllate le metriche della
   fase di revisione (argomento 2.9) specificamente per segni di intensificazione del
   rischio del timbro di gomma.

4. **Etichettiamo i difetti in base al fatto che il codice di origine fosse in misura
   sostanziale generato dall'IA, e se sì, che cosa mostrano finora quei dati?** Se non
   lo etichettate oggi, discutete che cosa servirebbe per cominciare, dato che questi
   dati sono direttamente rilevanti per capire se le vostre assunzioni storiche sulla
   qualità valgano ancora.

5. **Abbiamo riesaminato deliberatamente la nostra carta delle metriche (argomento
   1.4) alla luce di questo cambiamento, o la nostra pratica di misurazione è
   semplicemente continuata invariata?** Se la risposta onesta è la seconda, quella
   lacuna è esattamente ciò che questo argomento raccomanda di colmare per primo.

6. **Che aspetto avrebbe per la nostra organizzazione essere colta impreparata da questo
   cambiamento, festeggiando una metrica che aveva già smesso di significare ciò che
   pensavamo?** Questo esperimento mentale concreto e leggermente scomodo aiuta a
   motivare la verifica che questo argomento raccomanda prima, e non dopo, che quello
   scenario si verifichi davvero.

## Prospettiva settoriale

**Startup.** L'adozione rapida degli strumenti di IA è comune e spesso un genuino
vantaggio competitivo, ma la stessa velocità che rende attraente l'adozione rende più
probabile una deriva delle metriche non esaminata. Costruite l'abitudine di controllare
le metriche di risultato (Parte 5) accanto a qualsiasi guadagno di efficienza che
riportate dall'adozione dell'IA, anziché riportare i soli miglioramenti di velocità.

**Piccola impresa.** L'assistenza di codifica basata sull'IA può estendere in modo
significativo la capacità di un piccolo team, ma resistete alla tentazione di riportare
gli aumenti di output grezzo come successo inequivocabile senza controllare i guardrail
di qualità; un piccolo team ha meno capacità di assorbire un problema di qualità non
rilevato di un'organizzazione più grande con più ridondanza.

**Enterprise.** La scala di questo rischio si compone in modo significativo qui, dato
che l'adozione dell'IA su decine o centinaia di team contemporaneamente può spostare la
validità delle metriche in tutta l'organizzazione prima che un singolo team noti lo
schema a livello locale. Conducete la verifica dell'insieme di metriche che questo
argomento raccomanda a livello di organizzazione, non solo team per team, e aggiornate
la governance (argomento 1.4) in modo centrale ed esplicito.

**Settore pubblico.** Le organizzazioni del settore pubblico adottano spesso le nuove
tecnologie con più cautela, ma le metriche e i benchmark usati per valutare i programmi
tecnologici governativi sono spesso tratti da, o confrontati con, dati di settore del
privato che a loro volta si stanno spostando sotto la stessa pressione. Capite
esplicitamente quali benchmark di settore usate come confronto siano stati colpiti da
questo cambiamento prima di usarli per fissare aspettative o valutare le prestazioni.

## Esempi

**Enterprise.** La dirigenza di ingegneria di un'azienda di tecnologia finanziaria notò
che la frequenza di rilascio era salita di quasi il 40% nei due trimestri successivi
all'adozione diffusa di un assistente di codifica basato sull'IA, e inizialmente la
riportò come una semplice vittoria di produttività in una presentazione al consiglio.
Un'analisi di seguito più accurata, sollecitata dalla domanda di un membro scettico del
consiglio sul fatto che la qualità fosse stata controllata, scoprì che il tasso di
fallimento dei cambiamenti era salito quasi di pari passo con la frequenza di rilascio,
annullando interamente il guadagno apparente una volta esaminata davvero la metrica di
stabilità abbinata. La reportistica rivista dell'azienda presenta ora esplicitamente
insieme frequenza di rilascio e tasso di fallimento dei cambiamenti ogni volta che si
fanno affermazioni di produttività assistita dall'IA, evitando la precedente
affermazione fuorviante, quasi pubblica.

**Settore pubblico.** Un dipartimento IT di un governo statale che sperimentava
l'assistenza di codifica basata sull'IA con un sottoinsieme dei propri team di
ingegneria scoprì che l'output di codice grezzo per ingegnere era aumentato
sensibilmente, una cifra citata inizialmente in modo favorevole in una revisione
interna del pilota. Un'analisi più attenta, sollecitata dall'incorporazione delle
indicazioni di questo libro nel framework di valutazione del dipartimento, esaminò il
tasso di difetti sfuggiti per il lavoro assistito dall'IA rispetto a quello non
assistito e scoprì un tasso di difetti modestamente elevato nella coorte assistita
dall'IA, concentrato nella gestione dei casi limite per circostanze insolite dei
cittadini a cui lo strumento di IA non era stato esposto durante l'addestramento. Questa
scoperta non fermò il pilota ma portò a un aumento specifico e mirato del rigore di
revisione per i cambiamenti assistiti dall'IA che toccavano la logica dei casi limite
dell'idoneità, affrontando il rischio effettivo che la sola metrica di output grezzo non
avrebbe mai rivelato.

## Business case: motivazioni, ROI e TCO

Il ritorno del condurre questa verifica in modo proattivo è evitare un imbarazzo
pubblico o davanti al consiglio per aver riportato una metrica che, sotto esame, si
rivela non aver misurato nulla di reale, esattamente lo scenario che l'esempio della
tecnologia finanziaria qui sopra ha quasi prodotto. Un'organizzazione che anticipa
questo cambiamento mantiene la credibilità con i propri stakeholder; una che viene
colta a riportare una metrica vuota paga un costo di reputazione reale e in gran parte
evitabile.

Il costo totale di proprietà è lo sforzo analitico per verificare l'insieme di metriche
esistente, stringere i guardrail e aggiornare la documentazione di governance, un
investimento una tantum e moderato rispetto al rischio continuo di continuare a
riportare metriche che hanno smesso in silenzio di misurare ciò che dichiarano. Questo
costo è anche ricorrente a un livello più basso, dato che questo cambiamento è in corso
e non un evento una tantum, e una nuova verifica periodica man mano che strumenti e
schemi di adozione continuano a evolvere è un'aggiunta ragionevole e permanente a una
cadenza di governance delle metriche.

## Antipattern e insidie

- **Continuare a riportare metriche di attività dell'era pre-IA invariate e in modo
  acritico:** rischia di festeggiare una metrica che ha smesso in silenzio di
  correlare con il valore reale.
- **Riportare aumenti di frequenza di rilascio o di volume di output senza il
  guardrail di stabilità abbinato:** ripete l'avvertimento dell'argomento 2.10 con una
  posta in gioco molto più alta nello sviluppo assistito dall'IA.
- **Presumere che il codice generato dall'IA abbia lo stesso profilo di difetti del
  codice scritto da persone senza verificarlo:** un'assunzione non verificata che
  potrebbe essere attivamente sbagliata.
- **Lasciare che la profondità della revisione si eroda in silenzio sotto un volume
  maggiore di codice generato dall'IA:** il rischio del timbro di gomma dell'argomento
  2.9, intensificato.
- **Trattare questo cambiamento come un aggiustamento una tantum anziché come una
  preoccupazione continua:** gli strumenti e i loro schemi di adozione continuano a
  evolvere, e la pratica di misurazione deve tenere il passo.
- **Confrontarsi con benchmark di settore senza capire se quei benchmark si siano a
  loro volta spostati sotto la stessa pressione:** rischia un falso senso di prestazioni
  relative.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche dell'era pre-IA sono riportate
  invariate, senza alcuna consapevolezza che l'adozione dell'IA possa averne
  influenzato la validità.
- **Livello 2, Sviluppo (Develop):** Esiste una certa consapevolezza del cambiamento,
  ma non è stata condotta alcuna verifica sistematica dell'insieme di metriche
  esistente.
- **Livello 3, Standardizzazione (Standardize):** È stata condotta una verifica
  completa dell'insieme di metriche, con guardrail stretti e metriche documentate come
  colpite o resilienti, in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Difetti ed esiti di qualità sono etichettati e
  tracciati attivamente per livello di assistenza dell'IA, per verificare, non
  presumere, che i rapporti storici sulla qualità dell'organizzazione valgano ancora.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione ha una pratica matura e
  continua di riesame delle proprie metriche man mano che gli strumenti di IA e gli
  schemi di adozione continuano a evolvere, e sa indicare decisioni di governance
  specifiche prese in modo proattivo in risposta a questo cambiamento anziché in
  reazione dopo che è emerso un problema.

## Spunti di discussione

1. Quali delle nostre metriche attuali lusingherebbero di più un team che usa molto l'assistenza dell'IA ma non produce più valore reale?
2. La nostra frequenza di rilascio è salita dall'adozione dell'IA, e il tasso di fallimento dei cambiamenti si è mosso insieme ad essa?
3. Etichettiamo gli esiti di qualità per livello di assistenza dell'IA, e che cosa mostrerebbero quei dati?
4. La nostra capacità di revisione tiene il passo con qualsiasi aumento del volume di codice generato dall'IA?
5. Con quale benchmark di settore ci confrontiamo oggi, e si è a sua volta spostato sotto questa pressione?

## Punti chiave

- L'IA generativa è un **cambio di paradigma in ciò che diverse metriche esistenti
  misurano**, non un cambiamento incrementale degli strumenti; alcune metriche hanno
  smesso in silenzio di significare ciò che significavano.
- **Le metriche di attività e di output grezzo sono le più esposte**; le metriche di
  risultato (Parte 5) sono comparativamente resilienti.
- **Stringi i guardrail, in particolare il tasso di fallimento dei cambiamenti**, in
  proporzione all'adozione dello sviluppo assistito dall'IA.
- **Verifica, non presumere, se il codice generato dall'IA abbia un profilo di difetti
  diverso** da quello scritto da persone, usando dati etichettati sui difetti sfuggiti.
- Tratta questa come una **preoccupazione di governance continua, non una tantum**
  (argomento 1.4), dato che gli strumenti e i loro schemi di adozione continuano a
  evolvere.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il fondamento di misurazione basata sui risultati che questo
  argomento sostiene diventare più, non meno, importante sotto questo cambiamento).
- La ricerca di GitHub sulla programmazione in coppia con l'IA e sulla produttività
  degli sviluppatori (ricerca di settore sugli effetti misurabili dello sviluppo
  assistito dall'IA).
- Il programma DevOps Research and Assessment di Google Cloud, [dora.dev](https://dora.dev/)
  (la ricerca continuativa State of DevOps che negli ultimi anni incorpora i risultati
  sull'adozione dell'IA).
- *The Tyranny of Metrics*, di Jerry Z. Muller (l'argomento generale a favore dello
  scetticismo verso le metriche basate sul volume, direttamente rilevante man mano che
  il volume di output diventa economico).
