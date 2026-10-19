# 1.3 Risultati prima dell'output: scegliere che cosa misurare

## Panoramica e motivazione

Ogni metrica di ingegneria rientra in una di tre categorie, e confonderle è la
seconda modalità di fallimento più comune in questo libro, dopo l'ignorare del
tutto la [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law). Una
**metrica di input** misura lo sforzo speso: ore di ingegneri, denaro impiegato,
story point impegnati. Una **metrica di output** misura ciò che il sistema ha
prodotto: funzionalità rilasciate, pull request integrate, ticket chiusi. Una
**metrica di risultato** (outcome) misura il cambiamento che contava davvero:
ricavi mantenuti, incidenti evitati, tempo risparmiato a un utente. I team
gravitano verso input e output perché sono facili da contare e interamente sotto
il controllo del team. Il valore, quasi sempre, sta nei risultati, che sono più
lenti ad apparire, più rumorosi da misurare e più difficili da attribuire al
lavoro di un singolo team.

Questo argomento serve a resistere deliberatamente a quella gravità. Una
dashboard costruita interamente con input e output può sembrare
impressionantemente indaffarata senza produrre alcun valore reale: un team può
rilasciare decine di funzionalità che nessuno usa, chiudere centinaia di ticket
che si riaprono una settimana dopo, o rispettare ogni stima in story point
mentre i risultati effettivi del prodotto (fidelizzazione, soddisfazione,
ricavi) restano piatti o calano. Nulla di tutto questo affaccendarsi appare come
un problema su una dashboard fatta solo di output, perché le dashboard di soli
output non sono costruite per vederlo.

Alla scala enterprise e governativa, questa distinzione determina se la
dirigenza sa distinguere un team produttivo da un team semplicemente attivo. Una
divisione può registrare ottimi numeri di output per anni, funzionalità
rilasciate, sprint chiusi, mentre il risultato che davvero interessa a un
finanziatore o a un parlamento, ricavi mantenuti, tempi d'attesa dei cittadini
ridotti, si erode in silenzio sotto la superficie. «Abbiamo consegnato la
roadmap» non è la stessa affermazione di «la roadmap ha migliorato le cose», e
solo un insieme di metriche ponderato sui risultati sa distinguere le due.

## Principi chiave

- **Input e output sono proxy; i risultati sono la cosa stessa.** Pondera il tuo
  insieme di metriche verso i risultati ovunque tu possa raggiungerli.
- **La facilità di misurazione non è una ragione per misurare qualcosa.** Le
  cose più facili da contare sono di solito input e output, non perché contino
  di più ma perché sono meccanicamente semplici da catturare.
- **L'attribuzione si fa più difficile man mano che ci si sposta verso i
  risultati.** Accetta deliberatamente questo compromesso invece di ripiegare
  sugli output perché i risultati sono più difficili da attribuire.
- **Un team può controllare input e output ma solo influenzare i risultati.**
  Progetta la responsabilità di conseguenza: ritieni i team responsabili di ciò
  che possono effettivamente controllare e traccia i risultati come segnali
  condivisi tra più team.
- **Un unico risultato stella polare, con un piccolo insieme di driver, batte un
  muro di riquadri di output.** La copertura deve venire dalla struttura, non
  dal puro volume della dashboard.

## Raccomandazioni

### Classifica ogni metrica prima di adottarla

Per ogni metrica candidata, chiediti in quale delle tre categorie ricade. «Pull
request integrate a settimana» è un output. «Percentuale di pull request
integrate che hanno causato un incidente in produzione entro una settimana» è
più vicina a un risultato, perché misura una conseguenza anziché un volume.
Questa classificazione richiede trenta secondi e dovrebbe essere obbligatoria
prima che una metrica venga aggiunta a qualsiasi dashboard di team o
organizzativa, perché è il modo più rapido di accorgersi che una dashboard si
sta riempiendo in silenzio di output facili da contare credendo di misurare
valore.

### Costruisci un albero delle metriche sotto un unico risultato

Non tracciare un elenco piatto. Disponi le metriche come un **albero delle
metriche** (a volte chiamato albero dei KPI): una metrica di risultato in cima,
scomposta nei driver che la alimentano per via causale o matematica, giù fino
alle misure operative di output e di input che i singoli team possiedono
davvero. Quando il risultato in cima si muove, l'albero ti dice quale driver di
livello inferiore indagare, trasformando «il numero è calato» in «questo
specifico passaggio della pipeline è la causa». Indica una sola **metrica stella
polare** in cima ovunque il tuo dominio ne supporti una: la misura che meglio
cattura il valore consegnato, la frequenza di rilascio abbinata al tasso di
fallimento dei cambiamenti per un team di piattaforma, o l'uso attivo
settimanale di una funzionalità centrale per un team di prodotto.

### Dai peso ai risultati nelle revisioni, non solo sulla dashboard

Un albero delle metriche vale quanto il modo in cui viene usato nella pratica.
Nelle revisioni di sprint, nelle revisioni trimestrali di business e negli
aggiornamenti alla dirigenza, apri con il numero a livello di risultato e usa
le metriche di output e di input sottostanti solo per spiegare il movimento, non
per sostituirlo. Un team che riferisce «abbiamo chiuso 40 ticket in questo
sprint» senza alcun contesto di risultato non ti ha detto nulla sul fatto che il
lavoro contasse; un team che riferisce «i difetti sfuggiti sono calati del 30% ed
ecco l'investimento nei test che lo ha prodotto» ti ha detto qualcosa di reale.

### Accetta un feedback più lento per le metriche di risultato e abbinale a indicatori anticipatori più rapidi

Le metriche di risultato sono spesso ritardate (lagging): confermano un esito
dopo che è passato abbastanza tempo per esserne certi. Quel ritardo è un costo
genuino, perché ritarda l'apprendimento. Abbina ogni metrica di risultato ad
almeno un indicatore anticipatore (leading), una metrica che si muove prima e
prevede il risultato, così che un team possa correggere la rotta prima che il
numero lento e autorevole arrivi finalmente. La frequenza di rilascio è un
indicatore anticipatore per i risultati di consegna; un trend crescente di
difetti sfuggiti è un indicatore anticipatore di un futuro risultato di
affidabilità. Usa gli indicatori anticipatori per agire presto e le metriche di
risultato ritardate per confermare di aver avuto ragione.

## Compromessi: pro e contro

| Categoria | Pro | Contro |
| --- | --- | --- |
| Metriche di input | Interamente sotto il controllo del team, facili da contare | Legame più debole con il valore reale; facili da manipolare per volume |
| Metriche di output | Facili da contare, responsabilità chiara, feedback rapido | Premiano l'attività rispetto all'impatto; possono salire mentre il valore cala |
| Metriche di risultato | Riflettono direttamente ciò che conta; difficili da manipolare a basso costo | Lente, rumorose e difficili da attribuire a un singolo team |
| Struttura ad albero delle metriche | Collega il lavoro quotidiano al valore strategico; aiuta la diagnosi | Richiede un vero lavoro analitico per essere costruita e mantenuta correttamente |

La tensione centrale è **controllabilità contro valore**. Input e output sono
interamente sotto il controllo di un team, il che li rende allettanti per
ritenere i team responsabili; i risultati portano il valore ma sono solo in
parte sotto l'influenza di un singolo team, dato che una buona funzionalità può
comunque fallire per ragioni del tutto esterne all'ingegneria. Si risolve
ritenendo i team responsabili degli input e degli output che controllano
interamente, tracciando i risultati come segnali condivisi che l'intera
organizzazione possiede insieme, collegati attraverso un albero delle metriche
esplicito anziché lasciati come un vuoto inspiegato tra «abbiamo fatto il
lavoro» e «ha aiutato?».

## Domande da discutere con il vostro team

1. **Per ciascuna metrica della nostra dashboard attuale, è un input, un output
   o un risultato, e l'equilibrio tra i tre racconta una storia onesta?** La
   maggior parte delle dashboard, verificate con onestà, risultano composte quasi
   per intero da input e output, perché sono ciò che gli strumenti riportano
   per impostazione predefinita. Classificate ogni riquadro e contate la
   ripartizione; una dashboard senza alcun riquadro di risultato misura
   l'attività e la presenta come prestazione.

2. **Qual è la nostra unica metrica di risultato stella polare, e possiamo
   ricondurla, lungo un albero delle metriche, a qualcosa che ogni team possiede
   davvero?** Senza questa struttura di collegamento, un numero in cima che si
   muove non dà alcuna indicazione su dove guardare, e i team non vedono come le
   loro metriche di output quotidiane si colleghino a qualcosa che conta. Portate
   la vostra metrica in cima attuale, se l'avete, e provate a costruire l'albero
   sul momento.

3. **Dove riteniamo un team responsabile di un risultato che può solo
   influenzare, non controllare?** È una fonte comune di frustrazione e di
   manipolazione silenziosa, perché un team punito per un risultato plasmato da
   fattori fuori dal suo controllo ha ogni incentivo a proteggersi anziché a
   migliorare il sistema reale. Individuate queste discrepanze e adeguate la
   responsabilità oppure aggiungete le leve mancanti.

4. **Quale indicatore anticipatore abbiamo per ciascuna delle nostre metriche
   di risultato ritardate, e con quanto anticipo le prevede?** Un insieme di
   metriche puramente ritardate significa che si scopre di aver sbagliato solo
   quando è troppo tardi per cambiare rotta a basso costo. Portate le vostre
   metriche di risultato e verificate se per ciascuna esiste un vero indicatore
   anticipatore, o se volate alla cieca tra un periodo di rendicontazione e
   l'altro.

5. **Quanto di ciò che celebriamo nelle revisioni e nelle retrospettive è output
   («abbiamo rilasciato X») e quanto è risultato («X ha cambiato Y in
   meglio»)?** Il linguaggio con cui i team celebrano il lavoro plasma nel tempo
   ciò che ottimizzano, spesso più della dashboard. Ascoltate le vostre riunioni
   di revisione per uno sprint e contate la ripartizione con onestà.

6. **Se le nostre principali metriche di output raddoppiassero da un giorno
   all'altro, le nostre metriche di risultato migliorerebbero necessariamente, o
   potrebbero peggiorare?** Questo esperimento mentale mette in luce le metriche
   di output diventate scollegate da, o addirittura attivamente opposte a, i
   risultati che dovevano servire, come un volume di funzionalità che aumenta il
   peso della manutenzione più in fretta di quanto aumenti l'adozione.

## Prospettiva settoriale

**Startup.** Scegliete un solo risultato, tipicamente un proxy del fatto che i
clienti continuino a ricevere valore, come la fidelizzazione settimanale o
l'attivazione, e trattatelo come stella polare fin dal primo giorno. Resistete
all'attrazione delle metriche di output di vanità come il conteggio cumulativo
delle funzionalità, allettanti da riportare agli investitori ma che non dicono
nulla sul fatto che il prodotto funzioni davvero per qualcuno.

**Piccola impresa.** I vostri strumenti esistenti, punto vendita, helpdesk,
analytics, di solito già riportano un numero vicino al risultato, tasso di
riacquisto, tasso di riapertura dei ticket. Usate quelli anziché costruire
strumentazione di risultato su misura che non avete la capacità di mantenere, e
resistete alla tentazione di ricadere sui conteggi grezzi di attività solo
perché sono la vista predefinita.

**Enterprise.** La modalità di fallimento dominante è un portafoglio di team
ciascuno dei quali ottimizza metriche di output locali che non si sommano in
alcun risultato organizzativo coerente. Costruite l'albero delle metriche
deliberatamente, standardizzate le definizioni di risultato tra le unità di
business e richiedete a ogni iniziativa importante di dichiarare la propria
ipotesi di risultato prima del finanziamento, non solo il proprio piano di
output.

**Settore pubblico.** Gli organi di controllo e il pubblico sono sempre più
consapevoli della differenza tra «consegnato il capitolato» e «migliorato il
risultato», e un rapporto di soli output invita proprio a quel tipo di esame.
Definite il successo come un risultato visibile al cittadino (tempo di attesa,
tasso di errore, soddisfazione) ovunque sia legalmente e praticamente
possibile, e siate espliciti quando è disponibile solo una metrica di output e
spiegate perché.

## Esempi

**Enterprise.** La divisione di ingegneria di un'azienda di logistica riportò
per due anni un conteggio costantemente crescente di «funzionalità rilasciate
per trimestre», mentre il punteggio centrale di soddisfazione dei clienti si
appiattiva in silenzio. Un nuovo VP of engineering costruì un albero delle
metriche con radice nel tasso di consegna puntuale, il vero risultato di
business, scomposto attraverso il tempo di sosta negli hub e il successo
dell'ultimo miglio fino agli output di ingegneria a livello di team. Entro un
ciclo di rendicontazione risultò chiaro che diversi team ad alto output
rilasciavano funzionalità in aree senza alcun effetto misurabile sulla metrica
stella polare, e l'investimento si spostò verso i driver che l'albero mostrava
contare davvero.

**Settore pubblico.** Il team digitale di un servizio sanitario nazionale aveva
riportato «moduli consegnati rispetto al capitolato» per un programma
pluriennale di modernizzazione delle cartelle cliniche. Una commissione di
controllo pose una domanda diversa: i clinici hanno speso meno tempo
nell'inserimento di dati amministrativi? Il team introdusse a posteriori una
metrica di risultato, i minuti mediani di tempo amministrativo per incontro con
il paziente, e scoprì che i primi moduli avevano in realtà aumentato questo
tempo a causa dell'attrito nei flussi di lavoro, pur rispettando ogni traguardo
di consegna. I moduli successivi furono riprogettati direttamente attorno alla
metrica di risultato, e la rendicontazione pubblica del programma passò da una
lista di controllo delle consegne a un confronto prima-dopo dei risultati.

## Business case: motivazioni, ROI e TCO

Il ritorno del dare peso ai risultati è lo spreco evitato: un'organizzazione che
vede, quasi in tempo reale, che un flusso di output non sta muovendo alcun
risultato può reindirizzare quell'investimento prima di spendere un intero ciclo
di bilancio per scoprirlo a proprie spese. Il costo nascosto dominante nelle
grandi organizzazioni di ingegneria non è il sottoinvestimento, è il lavoro ben
eseguito che non avrebbe mai dovuto essere finanziato perché scollegato da
qualsiasi risultato reale, e una dashboard di soli output non riesce proprio a
vedere quella disconnessione.

Il costo totale di proprietà della misurazione dei risultati è più alto di
quello della misurazione degli output, perché i risultati sono davvero più
difficili da definire, attribuire e strumentare, e costruire un vero albero
delle metriche richiede un impegno analitico deliberato anziché accettare ciò
che uno strumento esporta per impostazione predefinita. Vale la pena pagare quel
costo per qualsiasi iniziativa di dimensioni non trascurabili, perché
l'alternativa, scoprire a cose fatte che un anno di output riportato con
sicurezza non ha prodotto alcun valore reale, costa molto più dell'analisi
iniziale.

## Antipattern e insidie

- **Una dashboard fatta interamente di riquadri di output:** misura l'attività e
  la presenta come prestazione.
- **Ritenere un team pienamente responsabile di un risultato che non può
  controllare:** genera frustrazione e invita alla manipolazione per proteggersi
  da una colpa ingiusta.
- **Nessun indicatore anticipatore per un risultato ritardato:** il team scopre
  di aver sbagliato solo quando correggere costa troppo.
- **Celebrare il linguaggio dell'output nelle revisioni dichiarando di dare
  valore ai risultati:** la priorità dichiarata e l'incentivo vissuto
  divergono, e vince l'incentivo vissuto.
- **Un elenco piatto di metriche senza struttura ad albero:** un numero in cima
  che si muove non dà alcuna indicazione su dove guardare.
- **Trattare la misurazione dei risultati come troppo difficile da tentare:**
  riporta un'organizzazione in modo permanente su input e output facili da
  contare.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le metriche sono quasi interamente input e
  output; nessuno sa nominare le metriche di risultato dell'organizzazione né
  tracciare un collegamento con esse.
- **Livello 2, Sviluppo (Develop):** Alcuni team hanno individuato in modo
  informale metriche di risultato, ma non c'è un albero delle metriche
  condiviso né indicatori anticipatori coerenti.
- **Livello 3, Standardizzazione (Standardize):** Un albero delle metriche
  documentato collega un risultato stella polare condiviso fino agli output di
  proprietà dei team, applicato in modo coerente in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Gli indicatori anticipatori e ritardati
  sono entrambi monitorati e riesaminati insieme; i team sono ritenuti
  responsabili solo di ciò che controllano, e la misurazione dei risultati è
  dotata attivamente di risorse.
- **Livello 5, Orchestrazione (Orchestrate):** La misurazione dei risultati è
  integrata direttamente nelle decisioni di finanziamento e prioritizzazione;
  l'organizzazione reindirizza di routine l'investimento lontano dal lavoro ad
  alto output e basso risultato prima che trascorra un intero ciclo di bilancio.

## Spunti di discussione

1. Nominate la singola metrica di risultato più importante della nostra organizzazione. Tutti possono concordare su di essa?
2. Qual è il nostro maggiore investimento attuale in output che non riusciamo ancora a ricondurre ad alcun risultato?
3. Dove la nostra struttura di responsabilità punisce un team per un risultato che non può controllare?
4. Che aspetto avrebbe la nostra dashboard se eliminassimo ogni riquadro di puro output?
5. Quanto tempo ci serve oggi per capire se una funzionalità rilasciata ha davvero aiutato?

## Punti chiave

- Classifica ogni metrica come **input, output o risultato**, e orienta
  deliberatamente il tuo insieme verso i risultati.
- Costruisci un **albero delle metriche** sotto un'unica **metrica stella
  polare**, così che un numero in cima che si muove indichi una causa.
- Ritieni i team responsabili di ciò che **controllano** (input, output); traccia
  i risultati come segnali condivisi che l'intera organizzazione influenza
  insieme.
- Abbina ogni **metrica di risultato** ritardata a un **indicatore anticipatore**
  più rapido, così da correggere la rotta prima che il numero lento confermi
  che avevi torto.
- Una dashboard di soli output misura l'attività e la chiama prestazione;
  trattalo come un segnale di allarme, non come un conforto.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren,
  Jez Humble e Gene Kim (misurazione della consegna basata sui risultati).
- *Lean Analytics*, di Alistair Croll e Benjamin Yoskovitz (la One Metric That
  Matters e la distinzione input/output/risultato in un contesto startup).
- *Measure What Matters*, di John Doerr (definizione degli obiettivi orientata ai
  risultati e l'enfasi del framework OKR sui risultati rispetto all'attività).
- *The Lean Startup*, di Eric Ries (metriche azionabili contro metriche di vanità
  e validazione dei risultati).
- *Key Performance Indicators*, di David Parmenter (costruire una struttura ad
  albero di KPI o metriche sotto una misura stella polare).
