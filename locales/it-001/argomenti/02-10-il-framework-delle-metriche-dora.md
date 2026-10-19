# 2.10 Il framework delle metriche DORA

## Panoramica e motivazione

Le **[metriche DORA](https://dora.dev/guides/dora-metrics/)** vengono dal programma
DevOps Research and Assessment, uno sforzo di ricerca pluriennale, poi pubblicato
nel libro *Accelerate* di Nicole Forsgren, Jez Humble e Gene Kim, che ha
intervistato decine di migliaia di professionisti dell'ingegneria per scoprire
quali pratiche di consegna correlano con le prestazioni organizzative. Il risultato
sono state quattro metriche, abbinate a due a due: la frequenza di rilascio
(deployment frequency) e il lead time dei cambiamenti misurano la velocità; il
tasso di fallimento dei cambiamenti e il tempo di ripristino dopo un rilascio
fallito, spesso abbreviato in tempo medio di ripristino (MTTR), misurano la
stabilità. La scoperta della ricerca che ha reso significativo il framework è
stata che i migliori performer erano contemporaneamente veloci e stabili,
rovesciando l'assunto che velocità e sicurezza si scambino l'una con l'altra, e
quella scoperta è ancora l'esempio svolto più chiaro che questo libro ha del
principio di abbinamento ai guardrail dell'argomento 1.2: una metrica di velocità
incentivata, abbinata a un guardrail di stabilità, è ciò che fanno davvero le
organizzazioni con le migliori prestazioni.

Questo libro tratta DORA per ultimo in questa parte, deliberatamente, anziché come
framework organizzativo della parte. Quella collocazione non è un rifiuto della
ricerca, che resta davvero rigorosa e degna di essere usata. Riflette un limite
specifico e reale: DORA misura quanto in fretta e quanto in sicurezza si muove una
pipeline, ma tace su ciò che vi si muove dentro. Un team può registrare ottimi
numeri DORA mentre il suo output effettivo è scivolato in silenzio verso il
rifacimento dei difetti o ha privato di capacità il debito tecnico e il lavoro di
sicurezza, uno schema che il Flow Framework degli argomenti dal 2.1 al 2.4 è
costruito apposta per far emergere e che DORA non può vedere. Usa DORA come questo
argomento lo presenta: una misura di riferimento ben convalidata e più ristretta
della meccanica della pipeline, non il quadro completo della salute della consegna.

Per i team grandi, il valore residuo e autentico di DORA è la confrontabilità. Una
metrica calcolata in modo coerente da dati di pipeline e di incidenti permette a
un'organizzazione di confrontare la capacità di consegna di molti team che
lavorano in domini diversi senza il problema del confronto tra mele e pere che
affligge la maggior parte dei confronti tra team. Le organizzazioni enterprise la
usano ancora per dare priorità agli investimenti di piattaforma; le organizzazioni
governative la usano ancora per dimostrare, con prove, che un programma di
modernizzazione ha migliorato in modo misurabile la meccanica della consegna.
Tratta questo come il compito proprio e circoscritto di DORA, e usa gli argomenti
del Flow Framework precedenti in questa parte per la domanda più ampia se si stia
consegnando la cosa giusta.

## Principi chiave

- **DORA misura la pipeline, non il valore che vi scorre.** L'argomento 2.1 nomina
  direttamente questo divario; usa la Flow Distribution (argomento 2.3) per vedere
  ciò che DORA non può.
- **Velocità e stabilità si misurano insieme, mai separatamente.** Una dashboard
  ispirata a DORA senza entrambe le metà non sta davvero usando il framework.
- **La coerenza della definizione conta più del numero grezzo.** Un team che passa
  da prestazioni «medie» ad «alte» su una metrica definita in modo coerente è un
  segnale reale; confrontare due team calcolati in modo diverso no.
- **DORA misura il sistema, non i singoli.** Applicare queste metriche ai singoli
  ingegneri rompe la base statistica del framework e invita proprio alla
  manipolazione da cui l'argomento 1.2 mette in guardia.
- **Tutte e quattro le metriche sono proxy, non obiettivi.** Correlano con le
  prestazioni organizzative; inseguire il numero in sé, scollegato da un genuino
  miglioramento della consegna, vanifica lo scopo del framework.

## Raccomandazioni

### Strumenta la frequenza di rilascio dalla pipeline, contando solo i rilasci in produzione

La **frequenza di rilascio** misura con quale frequenza un team rilascia con
successo in produzione. Conta solo i rilasci in produzione riusciti, strumentati
automaticamente dai dati della pipeline di CI/CD, mai autodichiarati. Fai
attenzione in particolare alla manipolazione per sostituzione, spezzare un
cambiamento significativo in diversi rilasci banali al solo scopo di gonfiare il
conteggio, tracciando la dimensione dei rilasci accanto alla frequenza: una
dimensione media in calo accanto a un conteggio in aumento è il segno più chiaro
che sta accadendo.

### Strumenta il lead time dei cambiamenti dal primo commit alla produzione

Il **lead time dei cambiamenti** misura il tempo dal primo commit di una modifica
al codice al suo rilascio riuscito in produzione. Riporta sia la mediana sia un
percentile alto, non solo una media, seguendo l'indicazione dell'argomento 1.6 sui
dati asimmetrici basati sul tempo, e fai attenzione alla deriva della definizione
a uno qualsiasi dei due estremi, che lusinga il numero senza alcun miglioramento
genuino.

### Definisci per iscritto il tasso di fallimento dei cambiamenti prima di confrontare i team

Il **tasso di fallimento dei cambiamenti** misura la percentuale di rilasci che
causano un guasto che richiede rimedio, un rollback, un hotfix o un incidente. È il
più difficile dei quattro da definire in modo coerente, perché il «fallimento»
non è ovviamente oggettivo. Concordate una definizione scritta prima di confrontare
i team; senza, un confronto apparentemente equo può trarre gravemente in inganno.
Diffidate di miglioramenti sospettosamente rapidi senza alcun cambiamento di
processo alle spalle, il segno più chiaro di manipolazione della definizione
anziché di progresso genuino.

### Misura il tempo di ripristino dal rilevamento, non dall'evento di rilascio

Il **tempo di ripristino dopo un rilascio fallito** misura quanto ci vuole a
ripristinare il servizio una volta che un rilascio causa un guasto. Fai partire
l'orologio dal rilevamento, non dall'evento di rilascio stesso, così che il numero
rifletta un genuino ritardo di ripristino anziché una lacuna di monitoraggio.
Investi in particolare nella capacità di rollback automatico, la leva più comune
per migliorare questa metrica in modo genuino anziché dichiarando prematuramente
risolto un incidente.

### Usa le metriche di flusso, non DORA, per diagnosticare perché un numero si è mosso

Quando una metrica DORA cambia, i quattro numeri da soli raramente spiegano
perché. Usa la scomposizione del cycle time (argomento 2.6), il Flow Load
(argomento 2.4) e la Flow Distribution (argomento 2.3) come strato diagnostico
sotto i numeri di sintesi di DORA, e non usare mai una metrica DORA in una
valutazione delle prestazioni individuali, il singolo uso improprio più dannoso a
cui questo framework è esposto.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Framework DORA completo, tutte e quattro le metriche abbinate | Convalidato dalla ricerca, resiste alla manipolazione grazie all'abbinamento, consente un confronto equo tra team | Tace su che tipo di valore venga consegnato; ha bisogno del Flow Framework accanto per quel quadro |
| DORA come unico insieme di metriche organizzativo di questa parte | Semplice, familiare alla maggior parte dei responsabili di ingegneria | Manca del tutto la domanda sul mix di valore, la ragione per cui questo libro lo declassa qui |
| DORA più Flow Framework insieme | Meccanica della pipeline e mix di valore entrambi visibili | Richiede di mantenere due vocabolari di metriche anziché uno |
| DORA applicata a livello individuale | Sembra direttamente azionabile ad alcuni manager | Rompe la validità statistica del framework; forte esposizione alla legge di Goodhart |

La tensione centrale è **rigore meccanico contro leggibilità per il business**. Le
quattro metriche di DORA sono definite con precisione e convalidate dalla ricerca,
il che le rende eccellenti per confrontare le prestazioni della pipeline tra team,
ma quella stessa precisione è circoscritta in modo ristretto alla pipeline stessa e
non dice nulla sul fatto che il lavoro giusto vi stia scorrendo. Si risolve la
tensione tenendo DORA come strato di riferimento per la salute della pipeline, il
posto proprio dell'argomento 2.10 nella struttura di questo libro, e usando gli
argomenti del Flow Framework precedenti in questa parte per la domanda del
business sul mix di valore, anziché cercare di far rispondere a DORA a una domanda
per cui non è mai stato progettato.

## Domande da discutere con il vostro team

1. **Stiamo strumentando tutte e quattro le metriche DORA dalla pipeline, o alcune
   sono stime autodichiarate?** Un framework costruito su una misurazione oggettiva
   e convalidata dalla ricerca perde gran parte del suo valore nel momento in cui un
   numero diventa una migliore ipotesi. Verificate la fonte effettiva dei dati di
   ciascuna metrica (argomento 1.5).

2. **Tutti i team che confrontiamo con le metriche DORA condividono le stesse
   definizioni di rilascio, cambiamento e fallimento?** Un confronto tra team che
   usano definizioni diverse non è davvero un confronto, e può produrre giudizi
   ingiusti sulle prestazioni relative.

3. **Qualcuno nella nostra organizzazione ha usato una metrica DORA in una
   valutazione delle prestazioni individuali, formalmente o informalmente?** È il
   singolo uso improprio più dannoso del framework e avviene spesso in silenzio.
   Chiedetelo direttamente e siate pronti a una risposta scomoda ma necessaria.

4. **I nostri numeri DORA potrebbero essere eccellenti mentre la nostra Flow
   Distribution (argomento 2.3) è derivata in silenzio verso il rifacimento o
   lontano dalle funzionalità?** È proprio il divario che il solo DORA non può
   vedere. Prendete insieme entrambi gli insiemi di numeri e verificate se
   raccontino una storia coerente.

5. **Quando una delle nostre metriche DORA si muove, abbiamo la diagnostica delle
   metriche di flusso per spiegare perché?** Un numero DORA da solo dice che
   qualcosa è cambiato, non che cosa. Controllate se i vostri team sanno rispondere
   a «perché il lead time è aumentato questo mese» con dati, o solo con
   speculazioni.

6. **Come cambierebbero i nostri quattro numeri DORA se cercassimo deliberatamente
   di manipolare ciascuno, e ce ne accorgeremmo?** Ripercorrete uno alla volta
   frequenza di rilascio, lead time, tasso di fallimento dei cambiamenti e tempo di
   ripristino, l'applicazione pratica della disciplina centrale dell'argomento 1.2 a
   questo specifico framework.

## Prospettiva settoriale

**Startup.** Le metriche di velocità di DORA vengono di solito naturali a un team
piccolo che rilascia già di frequente; la disciplina più difficile è strumentare con
onestà il tasso di fallimento dei cambiamenti e il tempo di ripristino anziché
presumere la stabilità perché finora nulla si è rotto gravemente. Abbinare DORA
presto anche a una suddivisione informale dei flow item (argomento 2.2) evita di
costruire un falso senso di salute della consegna attorno alla sola velocità della
pipeline.

**Piccola impresa.** La maggior parte delle moderne piattaforme di CI/CD e di
controllo di versione esporta i dati di frequenza di rilascio e lead time con una
configurazione minima; collegare i rilasci agli incidenti per il tasso di
fallimento dei cambiamenti richiede di solito più sforzo manuale. Cominciate con le
due metriche di velocità e aggiungete il tracciamento della stabilità appena esiste
un registro informale degli incidenti a cui collegarsi.

**Enterprise.** Il maggior valore residuo di DORA a questa scala è il confronto
equo e coerente tra team per le decisioni di investimento di piattaforma.
Standardizzate le definizioni in tutta l'organizzazione (argomento 1.4),
automatizzate centralmente la strumentazione e abbinate ogni rapporto DORA a una
vista della Flow Distribution, così che la dirigenza veda insieme velocità della
pipeline e mix di valore, non l'una senza l'altro.

**Settore pubblico.** Le metriche DORA danno ancora a un programma di
modernizzazione un modo difendibile e sostenuto dalla ricerca per dimostrare agli
organi di controllo il miglioramento della meccanica della consegna. Riportate
insieme tutte e quattro le metriche, senza mai scegliere solo la metà lusinghiera, e
abbinatele alla Flow Distribution così che il rapporto risponda anche alla domanda
più difficile e più importante su ciò che la pipeline più veloce sta
effettivamente consegnando.

## Esempi

**Enterprise.** Il programma di modernizzazione della piattaforma di una grande
società di telecomunicazioni strumentò in modo coerente tutte e quattro le metriche
DORA su quaranta team di prodotto e mostrò un genuino passaggio dalle fasce dei
low performer a quelle degli high performer in diciotto mesi, frequenza di rilascio
aumentata di circa dieci volte, lead time sceso da settimane a giorni, tasso di
fallimento dei cambiamenti rimasto piatto. Un membro del consiglio, rivedendo la
presentazione, pose una domanda a cui i soli numeri DORA non potevano rispondere:
quanta di quella consegna più rapida era nuovo valore per i clienti e quanta
rifacimento. L'organizzazione di ingegneria non aveva risposta finché non adottò la
classificazione dei flow item il trimestre seguente, che mostrò come il lavoro sulle
funzionalità fosse in realtà calato come quota dell'output totale anche mentre i
numeri di velocità di DORA miglioravano, una scoperta che rimodellò le priorità del
programma per l'anno successivo.

**Settore pubblico.** L'ufficio di modernizzazione IT di un governo statale adottò le
metriche DORA come condizione contrattuale per confrontare la capacità di consegna
di diversi team di fornitori concorrenti, un uso efficace della confrontabilità del
framework. L'alta frequenza di rilascio di un fornitore si rivelò, una volta
richiesto accanto il tasso di fallimento dei cambiamenti, correlata a un tasso di
fallimento quasi tre volte più alto dei suoi pari, un'informazione che informò
direttamente la decisione dell'ufficio sul rinnovo del contratto. L'ufficio aggiunse
poi un requisito di Flow Distribution agli stessi contratti dopo aver scoperto che
il fornitore con i migliori numeri DORA era anche quello che spendeva la quota
minore di capacità nel lavoro di bonifica della sicurezza che il contratto
richiedeva specificamente.

## Business case: motivazioni, ROI e TCO

Il ritorno dell'adottare bene DORA, entro il suo ambito proprio, è una risposta
difendibile e basata sulle prove a «la nostra pipeline di consegna sta diventando
più veloce e più sicura», che resta una delle domande più trattabili in ingegneria
a cui rispondere con fiducia. Quella risposta giustifica con numeri reali gli
investimenti in piattaforme e strumenti, e permette alla dirigenza di confrontare
investimenti concorrenti su una base equa e coerente, esattamente come ha sempre
fatto.

Il costo totale di proprietà è il lavoro di integrazione che collega gli eventi di
rilascio ai registri degli incidenti per il tasso di fallimento dei cambiamenti e
il tempo di ripristino, non banale in un panorama di strumenti ampio ed eterogeneo.
Il costo aggiuntivo di abbinare DORA agli argomenti del Flow Framework precedenti in
questa parte è comparativamente piccolo, dato che la classificazione dei flow item
è una convenzione di reportistica sovrapposta al lavoro esistente, non un sistema di
misurazione parallelo, e il ritorno, intercettare esattamente il punto cieco sul mix
di valore che l'esempio delle telecomunicazioni qui sopra illustra, vale ampiamente
quel modesto investimento aggiuntivo.

## Antipattern e insidie

- **Trattare DORA come il quadro completo della salute della consegna:** il
  vettore di manipolazione che la collocazione di questo argomento è pensata per
  contrastare. Un'organizzazione può presentare numeri DORA davvero eccellenti,
  rilasci rapidi, frequenti e stabili, mentre il suo valore effettivamente
  consegnato è scivolato in silenzio verso il rifacimento o lontano dalle
  funzionalità, e le sole quattro metriche DORA non riveleranno mai quello
  spostamento perché non sono mai state progettate per misurarlo. Il guardrail è
  abbinare ogni rapporto DORA alla Flow Distribution (argomento 2.3), così che una
  pipeline veloce e stabile che consegna il mix sbagliato di lavoro sia visibile
  anziché scambiata per genuina salute della consegna.
- **Riportare solo la metà velocità di DORA:** vanifica la scoperta centrale del
  framework secondo cui velocità e stabilità si muovono insieme nei migliori
  performer.
- **Usare le metriche DORA nelle valutazioni delle prestazioni individuali:** rompe
  la validità statistica del framework e invita a una forte manipolazione.
- **Confrontare team con definizioni incoerenti:** produce confronti che sembrano
  equi ma non lo sono.
- **Numeri DORA autodichiarati anziché strumentati dalla pipeline:** introduce
  proprio la distorsione che il framework era stato progettato per eliminare.
- **Trattare DORA come diagnostico anziché come sintesi:** lascia un team incapace
  di spiegare perché un numero si è mosso senza lo strato di metriche di flusso
  sottostante.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche DORA, se tracciate, sono
  autodichiarate, definite in modo incoerente e mai abbinate a dati di flusso.
- **Livello 2, Sviluppo (Develop):** Alcuni team strumentano DORA dalla pipeline, ma
  le definizioni variano e non esiste una controparte di Flow Distribution con cui
  verificare.
- **Livello 3, Standardizzazione (Standardize):** Tutte e quattro le metriche DORA
  sono strumentate in modo coerente da dati di pipeline e di incidenti, con
  definizioni condivise, e sono mostrate di routine accanto alla Flow
  Distribution.
- **Livello 4, Gestione (Manage):** DORA e metriche di flusso sono riesaminate
  insieme come abbinamento standard a ogni livello dell'organizzazione, e DORA non è
  mai usata per la valutazione individuale.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa indicare casi
  specifici in cui la Flow Distribution ha intercettato un problema di mix di valore
  che i soli ottimi numeri DORA avevano nascosto, e usa deliberatamente entrambi i
  framework per le domande distinte a cui ciascuno risponde.

## Spunti di discussione

1. Dove ci collocano oggi, onestamente, le nostre quattro metriche DORA nello spettro delle fasce di prestazione?
2. I nostri numeri DORA potrebbero sembrare eccellenti mentre la nostra Flow Distribution è derivata in silenzio? Lo abbiamo mai verificato?
3. Qualcuno ha mai usato un numero DORA per giudicare un individuo, anche informalmente?
4. Se un concorrente pubblicasse i propri numeri DORA, i nostri si confronterebbero bene, e quel confronto ci direbbe davvero chi sta consegnando più valore reale?

## Punti chiave

- Le quattro metriche di DORA, **frequenza di rilascio, lead time, tasso di
  fallimento dei cambiamenti e tempo di ripristino**, abbinano per progetto
  velocità e stabilità e restano davvero convalidate dalla ricerca.
- Questo libro colloca DORA **per ultimo in questa parte** perché misura la
  pipeline, non il valore che vi scorre; abbinalo alla Flow Distribution (argomento
  2.3) per il quadro più completo.
- Il vettore di manipolazione centrale dell'argomento è **scambiare ottimi numeri
  DORA per una salute completa della consegna**; il guardrail è riportare sempre
  DORA accanto alla Flow Distribution.
- **Non usare mai le metriche DORA nelle valutazioni delle prestazioni
  individuali**; la validità del framework dipende da una misurazione a livello di
  sistema, non individuale.
- Usa le **metriche di flusso come strato diagnostico** sotto i numeri di sintesi di
  DORA quando uno di essi si muove.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Jez Humble e Gene Kim. *Accelerate: The Science of Lean
  Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. Programma DevOps Research and Assessment. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr e George Spafford. *The Phoenix Project*. IT Revolution
  Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois e John Willis. *The DevOps Handbook*. IT
  Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
