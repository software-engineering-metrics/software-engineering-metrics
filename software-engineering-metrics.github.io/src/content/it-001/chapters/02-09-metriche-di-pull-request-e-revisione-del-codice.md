# 2.9 Metriche di pull request e revisione del codice

## Panoramica e motivazione

La [revisione del codice](https://en.wikipedia.org/wiki/Code_review) è di
solito il singolo maggiore contributore al tempo di attesa nella scomposizione del
cycle time dell'argomento 2.6, ed è anche la fase più direttamente sotto il
controllo di un team per migliorarla, a differenza di un collo di bottiglia di
piattaforma condiviso o di una dipendenza esterna. Questo argomento tratta le
metriche specifiche che vivono dentro la fase di revisione: tempo alla prima
revisione, dimensione della pull request, numero di iterazioni di revisione e
distribuzione del carico dei revisori, e come usarle per migliorare la velocità di
revisione senza sacrificare il vero beneficio di qualità che la revisione dovrebbe
fornire.

Il rischio a cui questo argomento è più attento è uno che questo libro non ha
ancora trattato direttamente: ottimizzare la velocità di revisione può erodere in
silenzio la qualità della revisione se perseguita con leggerezza. Un team che
dimezza il tempo alla prima revisione approvando tutto con un timbro di gomma ha
migliorato una metrica distruggendo il valore reale della pratica. Ogni
raccomandazione di questo argomento è scritta tenendo presente quel compromesso,
perché le metriche delle pull request sono tra le più facili di questo libro da
manipolare in un modo che appare bene su una dashboard mentre rende la base di
codice sottostante misurabilmente peggiore.

Per i team grandi, le metriche di revisione rivelano problemi di bilanciamento del
carico altrimenti invisibili: un piccolo numero di ingegneri senior che assorbe una
quota sproporzionata del carico di revisione, un team o un'area di codice
specifici in cui le revisioni si bloccano di continuo, o uno schema di pull request
sovradimensionate che rendono una revisione approfondita praticamente impossibile
a prescindere dalla diligenza dei revisori. Questi schemi si compongono a scala
molto più che in un piccolo team, dove tutti possono vedere direttamente lo
squilibrio senza bisogno di una metrica che lo faccia emergere.

## Principi chiave

- **Il tempo alla prima revisione è di solito la leva maggiore, non la
  approfondimento della revisione in sé.** La maggior parte del ritardo viene da
  una pull request che aspetta di essere guardata, non dalla conversazione di
  revisione che richiede molto una volta iniziata.
- **Le pull request più piccole vengono riviste più in fretta e in modo più
  approfondito, non solo più in fretta.** La dimensione è un punto di leva sia per
  la velocità sia per la qualità contemporaneamente.
- **Velocità e qualità della revisione non sono automaticamente in tensione, ma
  possono essere scambiate con leggerezza.** Difenditi esplicitamente da quello
  scambio.
- **Lo squilibrio del carico dei revisori è comune e di solito invisibile senza
  una metrica.** Un piccolo numero di persone ne assorbe spesso una quota
  sproporzionata.
- **Queste metriche sono esposte al rischio di manipolazione del timbro di
  gomma.** Un'approvazione rapida senza un vero esame vanifica l'intero scopo della
  revisione.

## Raccomandazioni

### Traccia il tempo alla prima revisione come metrica di velocità primaria

Misura l'intervallo da quando una pull request viene aperta al primo commento
sostanziale o all'approvazione di un revisore, strumentato automaticamente dalla
tua piattaforma di controllo di versione. È di solito il contributore dominante al
tempo di attesa all'interno della fase di revisione (argomento 2.5, argomento 2.6),
e migliorarlo, attraverso norme più chiare di assegnazione delle revisioni,
pratiche di notifica o blocchi di tempo dedicati alla revisione, produce di solito
il singolo maggiore miglioramento del cycle time complessivo disponibile a un team.

### Traccia la dimensione delle pull request e incoraggia attivamente cambiamenti più piccoli

Misura le righe modificate o i file toccati per pull request, e tratta una
dimensione mediana persistentemente grande come un segnale che merita di essere
affrontato direttamente. Le pull request più piccole vengono riviste più in fretta,
riviste in modo più approfondito (un revisore può davvero tenere l'intero
cambiamento in testa) e sono più facili da annullare se qualcosa va storto,
collegandosi direttamente al principio della dimensione dei lotti dietro la
frequenza di rilascio nell'argomento 2.10. Incoraggia a spezzare i cambiamenti
grandi in una sequenza di pull request più piccole e rivedibili in modo
indipendente ovunque il lavoro lo consenta.

### Monitora esplicitamente la distribuzione del carico dei revisori

Traccia il numero di revisioni completate per persona su una finestra mobile, e
osserva in particolare se un piccolo numero di persone ne assorbe una quota
sproporzionata. Questo schema è comune, ricade spesso sugli ingegneri più senior o
più fidati, e crea sia un collo di bottiglia (la loro disponibilità limita il
throughput di revisione dell'intero team) sia un rischio di burnout (l'argomento
3.2 tratta più in profondità le metriche di benessere). Ruota deliberatamente la
responsabilità di revisione anziché lasciare che si concentri per impostazione
predefinita attorno a chi risponde più in fretta.

### Difenditi esplicitamente dal rischio di manipolazione del timbro di gomma

Abbina il tempo alla prima revisione a un segnale di qualità: il tasso di difetti o
incidenti riconducibili a cambiamenti approvati con zero commenti di revisione, o
il tasso di correzioni post-merge necessarie per il codice rivisto di recente. Un
team che migliora la velocità di revisione approvando senza un vero esame dovrebbe
vedere questo guardrail peggiorare, che è esattamente il principio di abbinamento
dell'argomento 1.2 applicato a questa specifica famiglia di metriche. Non
inseguire mai la velocità di revisione senza questa contro-metrica in vista.

### Usa il numero di iterazioni di revisione per individuare attriti, non per giudicare i singoli

Il numero di round di revisione che una pull request attraversa prima del merge
può segnalare un attrito genuino, requisiti poco chiari, disaccordo
sull'approccio, aspettative di stile incoerenti, che vale la pena indagare a
livello di processo. Evita di usare questo numero per giudicare direttamente
singoli autori o revisori; un alto numero di iterazioni è più spesso un segnale di
sistema o di comunicazione che personale, e trattarlo come una scheda di
valutazione individuale rischia proprio la deriva valutativa da cui l'argomento 1.1
mette in guardia.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Ottimizzare solo il tempo alla prima revisione | Segnale rapido e chiaro, facile da strumentare | Può incentivare una revisione superficiale a timbro di gomma se non protetta |
| Ottimizzare solo la riduzione della dimensione delle pull request | Migliora contemporaneamente velocità e approfondimento | Non tutto il lavoro si divide in modo netto in incrementi piccoli |
| Ruotare equamente il carico di revisione | Riduce il collo di bottiglia e il rischio di burnout | Può rallentare la revisione di codice specializzato e difficile da rivedere che richiede competenze specifiche |
| Concentrare la revisione tra gli ingegneri senior | Profonda competenza di dominio applicata in modo coerente | Crea un collo di bottiglia e un rischio di burnout nel tempo |

La tensione centrale è **velocità contro profondità dell'esame**. Ogni tecnica di
questo argomento per velocizzare la revisione, risposta iniziale più rapida,
pull request più piccole, carico dei revisori più distribuito, comporta un certo
rischio di cedere un vero esame se perseguita senza il guardrail di qualità che
questo argomento raccomanda. Si risolve la tensione abbinando ogni metrica di
velocità a un segnale di qualità, tracciato sullo stesso periodo, così che un team
possa distinguere un genuino miglioramento di processo da uno standard di revisione
che si erode in silenzio.

## Domande da discutere con il vostro team

1. **Qual è il nostro tempo effettivo alla prima revisione, e quanta parte del
   nostro cycle time complessivo consuma la fase di revisione?** Prendete il numero
   reale anziché affidarvi all'impressione; il tempo di attesa della revisione è
   spesso maggiore di quanto i team presumano, proprio perché è facile sottostimare
   il tempo speso ad aspettare anziché a lavorare attivamente.

2. **Qual è la nostra dimensione mediana delle pull request, e quanto del ritardo
   di revisione si ridurrebbe se quella dimensione scendesse?** Le pull request
   grandi sono sia più lente da rivedere sia più probabili da ricevere una
   revisione superficiale semplicemente perché un revisore non riesce a tenere
   tutto in testa insieme. Guardate la vostra distribuzione effettiva delle
   dimensioni, non solo la mediana.

3. **Il carico di revisione è concentrato su un piccolo numero di persone, e che
   cosa accadrebbe al nostro throughput di revisione se una di esse fosse
   indisponibile per due settimane?** Questa domanda fa emergere insieme un
   rischio di collo di bottiglia e un rischio di burnout. Prendete dati reali di
   carico dei revisori anziché affidarvi all'impressione.

4. **Abbiamo mai migliorato una metrica di velocità di revisione in un modo che, a
   ripensarci, ha ridotto l'esame effettivo?** Siate onesti qui; è esattamente il
   rischio del timbro di gomma che questo argomento nomina, ed è facile scivolarci
   dentro senza alcuna decisione deliberata.

5. **Che cosa segnala di solito nel nostro team un alto numero di iterazioni di
   revisione: disaccordo genuino, requisiti poco chiari o aspettative di stile
   incoerenti?** Guardate un campione di pull request con un numero insolitamente
   alto di iterazioni e diagnosticate lo schema effettivo, anziché presumere che
   rifletta male sull'autore o sul revisore.

6. **Abbiamo un guardrail di qualità abbinato alle nostre metriche di velocità di
   revisione, o tracciamo la velocità in isolamento?** Se la risposta onesta è che
   un guardrail simile non esiste, è una lacuna da colmare prima di spingere oltre
   la velocità di revisione, secondo il principio di abbinamento dell'argomento 1.2.

## Prospettiva settoriale

**Startup.** La revisione è spesso rapida per impostazione predefinita con un team
piccolo, a volte quasi troppo rapida, revisione con un solo approvatore e un esame
minimo perché tutti si fidano di tutti. Il rischio da osservare man mano che il
team cresce è che la qualità della revisione non scali insieme alla dimensione del
team, dato che la fiducia informale che funzionava per cinque ingegneri non
funziona automaticamente per cinquanta.

**Piccola impresa.** La maggior parte delle piattaforme di controllo di versione
riporta di serie statistiche su tempo al merge e numero di revisioni; usatele
anziché costruire strumentazione su misura. La disciplina principale da adottare è
semplicemente accorgersi se il carico di revisione si è concentrato in silenzio su
una o due persone man mano che il team è cresciuto.

**Enterprise.** Lo squilibrio del carico dei revisori e i colli di bottiglia di
conoscenza specializzata sono particolarmente comuni qui, dove una profonda
competenza di dominio in un sistema critico può concentrare la responsabilità di
revisione su un piccolo gruppo a prescindere dalla dimensione del team. Investite
nella condivisione deliberata della conoscenza e nella rotazione delle revisioni
per diffondere la competenza, riducendo sia il collo di bottiglia sia il rischio
di bus factor di una competenza che vive in troppo poche persone.

**Settore pubblico.** I processi di revisione qui hanno spesso un peso di
conformità accanto agli obiettivi di qualità, il che può rendere le pull request
più grandi e le revisioni più lente per progetto. Dove requisiti di conformità
genuini richiedono una revisione approfondita, concentrate lo sforzo di
miglioramento sulla riduzione del tempo di attesa (assegnazione più rapida delle
revisioni, triage più chiaro) anziché compromettere la reale profondità della
revisione, e documentate esplicitamente il compromesso se l'esame deve restare
rigoroso per ragioni normative.

## Esempi

**Enterprise.** L'organizzazione di ingegneria di un'azienda di cybersicurezza
scoprì che una manciata di principal engineer completava oltre il 40% di tutte le
revisioni del codice in un'organizzazione di duecento persone, uno squilibrio che
nessuno aveva misurato direttamente finché non furono presi i dati sul carico dei
revisori. Quella concentrazione era sia un collo di bottiglia, dato che la
disponibilità di quegli ingegneri limitava il throughput di revisione dell'intera
organizzazione, sia un rischio di burnout segnalato a parte da un sondaggio di
coinvolgimento (argomento 3.2). L'organizzazione introdusse un programma
strutturato di rotazione delle revisioni abbinato a sessioni mirate di condivisione
della conoscenza, e in due trimestri il carico di revisione si era distribuito su un
gruppo molto più ampio, con il tempo alla prima revisione che migliorava come
effetto collaterale diretto della riduzione del collo di bottiglia.

**Settore pubblico.** Il team di ingegneria di un'autorità fiscale, sotto pressione
per migliorare la velocità di consegna, fissò l'obiettivo di dimezzare il tempo
alla prima revisione. In un trimestre l'obiettivo fu raggiunto, ma un successivo
audit di qualità scoprì un forte aumento di pull request di correzione di difetti
post-merge, concentrate nei cambiamenti approvati con un singolo, breve commento.
La correzione del team abbinò l'obiettivo di velocità a un esplicito guardrail di
qualità, il tasso di correzioni post-merge necessarie entro due settimane da una
revisione, e riformò il team su ciò che una revisione sostanziale richiede davvero,
ripristinando un esame genuino e mantenendo gran parte del miglioramento di
velocità venuto da un'assegnazione migliore delle revisioni e da pull request più
piccole.

## Business case: motivazioni, ROI e TCO

Il ritorno di metriche di revisione ben gestite è una consegna più rapida senza
sacrificare la qualità, una combinazione rara: la maggior parte dei miglioramenti
della consegna scambia velocità con rischio da qualche parte, ma i miglioramenti
della fase di revisione, pull request più piccole, migliore distribuzione del
carico, risposta iniziale più rapida, migliorano davvero entrambe
contemporaneamente se perseguiti con il guardrail di qualità che questo argomento
raccomanda. L'esempio della cybersicurezza qui sopra è tipico: correggere un collo
di bottiglia ha migliorato la velocità mentre la qualità della revisione
sottostante, semmai, è migliorata man mano che la competenza si diffondeva più
ampiamente.

Il costo totale di proprietà è basso: la maggior parte di queste metriche viene
direttamente dai dati esistenti della piattaforma di controllo di versione con una
strumentazione aggiuntiva minima, e i cambiamenti di processo a cui puntano,
rotazione delle revisioni, incoraggiamento a pull request più piccole, costano per
lo più disciplina più che investimento in strumenti.

## Antipattern e insidie

- **Ottimizzare il tempo alla prima revisione senza un guardrail di qualità
  abbinato:** invita all'approvazione a timbro di gomma che vanifica lo scopo della
  revisione.
- **Ignorare la concentrazione del carico dei revisori:** crea sia un collo di
  bottiglia sia un rischio di burnout che resta invisibile finché non viene
  misurato.
- **Trattare il numero di iterazioni di revisione come una scheda di valutazione
  individuale:** è più spesso un segnale di sistema o di comunicazione che
  personale.
- **Accettare pull request persistentemente grandi come inevitabili:** la
  maggior parte dei cambiamenti grandi può essere divisa più di quanto i team
  inizialmente presumano.
- **Applicare una profondità di revisione uniforme a prescindere dal rischio del
  cambiamento:** spreca esame sui cambiamenti a basso rischio rischiando di
  esaminare troppo poco quelli ad alto rischio.
- **Misurare la velocità di revisione senza mai controllare se l'esame reale sia
  calato insieme:** il modo singolo più comune in cui questa famiglia di metriche
  viene manipolata involontariamente.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche di revisione non sono tracciate; la
  distribuzione del carico dei revisori e la dimensione delle pull request sono
  invisibili.
- **Livello 2, Sviluppo (Develop):** Esistono alcuni dati di velocità di revisione
  dalle impostazioni predefinite della piattaforma, ma non c'è un guardrail di
  qualità né una gestione attiva del carico dei revisori.
- **Livello 3, Standardizzazione (Standardize):** Tempo alla prima revisione,
  dimensione delle pull request e carico dei revisori sono tracciati in modo
  coerente, con un esplicito guardrail di qualità abbinato ai miglioramenti di
  velocità.
- **Livello 4, Gestione (Manage):** Il carico dei revisori è riequilibrato
  attivamente attraverso rotazione e condivisione della conoscenza; gli schemi del
  numero di iterazioni sono indagati a livello di processo anziché individuale.
- **Livello 5, Orchestrazione (Orchestrate):** Le metriche della fase di revisione
  informano direttamente l'investimento di processo, e l'organizzazione sa
  dimostrare un miglioramento simultaneo sia della velocità di revisione sia degli
  esiti di qualità collegati alla revisione per un periodo prolungato.

## Spunti di discussione

1. Qual è il nostro tempo mediano attuale alla prima revisione, e dove va a finire davvero quel tempo?
2. Il nostro carico di revisione è concentrato su un piccolo numero di persone, e qual è il rischio se una è indisponibile?
3. Abbiamo mai migliorato la velocità di revisione a costo di un esame reale, anche involontariamente?
4. Qual è la nostra dimensione mediana delle pull request, e quanto più piccola potrebbe realisticamente essere la maggior parte dei cambiamenti?
5. Trattiamo un alto numero di iterazioni di revisione come un segnale di sistema o come un giudizio individuale?

## Punti chiave

- Il **tempo alla prima revisione** è di solito la singola leva maggiore dentro la
  fase di revisione, più della durata della conversazione di revisione in sé.
- Le **pull request più piccole** migliorano contemporaneamente velocità e
  approfondimento della revisione.
- Lo **squilibrio del carico dei revisori** è comune e di solito invisibile senza
  misurazione diretta; crea sia un collo di bottiglia sia un rischio di burnout.
- Abbina ogni metrica di velocità di revisione a un esplicito **guardrail di
  qualità** per intercettare il rischio di manipolazione del timbro di gomma a cui
  questa famiglia di metriche è particolarmente incline.
- Usa il **numero di iterazioni di revisione** per diagnosticare l'attrito a
  livello di sistema, non per giudicare i singoli autori o revisori.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (pratiche di revisione del codice e loro rapporto con le
  prestazioni di consegna).
- La ricerca *Modern Code Review* di Alberto Bacchelli e Christian Bird (studio
  empirico delle pratiche di revisione del codice su larga scala).
- *Peer Reviews in Software: A Practical Guide*, di Karl E. Wiegers
  (progettazione del processo di revisione e relativi compromessi).
- *The Principles of Product Development Flow*, di Donald G. Reinertsen
  (ragionamento sulla dimensione dei lotti applicato al dimensionamento delle
  pull request).
