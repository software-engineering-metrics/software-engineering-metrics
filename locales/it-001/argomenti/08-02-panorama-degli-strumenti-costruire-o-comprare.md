# 8.2 Panorama degli strumenti: costruire o comprare

## Panoramica e motivazione

Ogni organizzazione che attua le indicazioni di questo libro affronta prima o poi una
decisione pratica di infrastruttura: costruire internamente gli strumenti di metriche,
comprare una piattaforma commerciale di analisi dell'ingegneria o, nella pratica più
comunemente, una combinazione delle due. Questo argomento tratta quella decisione con lo
stesso rigore che l'argomento 5.5 applica a qualsiasi altro investimento di ingegneria:
un'analisi onesta di costi e benefici specifica per la scala della vostra
organizzazione, per le fonti di dati esistenti e per le specifiche metriche di questo
libro che intendete davvero tracciare, anziché una risposta predefinita valida in modo
uniforme a prescindere dal contesto.

Il mercato degli strumenti commerciali di analisi dell'ingegneria è maturato
considerevolmente, e molte piattaforme offrono ora una strumentazione solida e in gran
parte automatica per le metriche DORA (Parte 2), per i dati di pull request e di
revisione (argomento 2.9) e, sempre più, per l'infrastruttura di sondaggi
sull'esperienza degli sviluppatori (argomento 3.7). Questa maturità ha spostato il
calcolo di molte organizzazioni verso l'acquisto almeno dello strato di base, ma non ha
eliminato i veri vantaggi dell'opzione di costruzione per esigenze specifiche e
personalizzate, in particolare attorno alla telemetria dei risultati che l'argomento 7.4
sostiene essere ora il centro necessario di un programma di metriche, che è spesso la
categoria di misurazione meno standardizzata e più specifica di ciascuna organizzazione
tra quelle che questo libro tratta.

Per i team grandi, questa decisione ha conseguenze reali e continue sul budget e sulla
capacità di ingegneria. Le organizzazioni enterprise devono spesso integrare gli
strumenti di metriche in un panorama davvero eterogeneo di sistemi ereditati e moderni,
il che plasma in modo significativo il calcolo tra costruire e comprare; le
organizzazioni governative affrontano spesso vincoli di acquisto e requisiti di
sovranità dei dati o di sicurezza che incidono materialmente su quali opzioni
commerciali siano anche solo praticabili, a volte inclinando la decisione verso la
costruzione o verso specifici fornitori verificati a prescindere da ciò che suggerirebbe
una pura analisi costi-benefici da sola.

## Principi chiave

- **Raramente è una decisione tutto-o-niente.** La maggior parte dei programmi di
  metriche maturi combina strumenti acquistati per le metriche ben standardizzate con
  strumenti costruiti per la telemetria dei risultati specifica dell'organizzazione.
- **Compra per le metriche ben standardizzate e di ampio bisogno; costruisci per quelle
  davvero specifiche dell'organizzazione.** Le metriche DORA e l'analisi delle pull
  request sono territorio di commodity; la vostra specifica correlazione con i
  risultati di business (argomento 5.3) di solito non lo è.
- **Proprietà e portabilità dei dati contano quanto il confronto delle funzionalità.**
  Uno strumento che imprigiona i vostri dati di metriche è un rischio durevole, non solo
  un inconveniente.
- **Il costo di integrazione è spesso sottostimato** in un'analisi tra costruire e
  comprare, per entrambe le opzioni.
- **I vincoli di acquisto, sicurezza e sovranità dei dati possono scavalcare un puro
  calcolo costi-benefici**, in particolare per le organizzazioni governative.

## Raccomandazioni

### Compra per lo strato di commodity: infrastruttura DORA, revisione e sondaggi

Per le famiglie di metriche con strumenti commerciali maturi e ampiamente disponibili,
la strumentazione delle metriche DORA (Parte 2), l'analisi delle pull request e della
revisione del codice (argomento 2.9) e le piattaforme di sondaggio sull'esperienza degli
sviluppatori (argomento 3.7), comprare è di solito la scelta economica migliore per la
maggior parte delle organizzazioni sotto una certa scala, dato che costruire
un'infrastruttura equivalente duplica uno sforzo di ingegneria in cui molti fornitori
hanno già investito pesantemente, con una limitata differenziazione genuina ottenibile
costruendo la propria versione.

### Costruisci per la telemetria dei risultati davvero specifica dell'organizzazione

Per le metriche di risultato che l'argomento 7.4 sostiene dovrebbero essere il baricentro
del vostro programma di metriche, correlazione con i risultati di business (argomento
5.3), adozione delle funzionalità legata al vostro specifico prodotto (argomento 5.2),
economia unitaria legata alla vostra specifica struttura di costi (argomento 5.4), gli
strumenti commerciali sono molto meno standardizzati e spesso non possono catturare la
logica di business e il modello di dati specifici della vostra organizzazione senza
personalizzazioni estese e costose che possono finire per costare più che costruire
internamente la capacità equivalente con pieno controllo sul risultato.

### Valuta proprietà e portabilità dei dati prima di impegnarti con un fornitore

Prima di firmare un contratto commerciale, conferma di poter esportare l'intero storico
dei dati di metriche in un formato utilizzabile e standard, e capisci che cosa accade a
quei dati e alla loro storia se cambi fornitore o interrompi il servizio. Un rapporto
con un fornitore che diventa difficile da lasciare per il [lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in)
dei dati è un rischio organizzativo durevole, non un mero inconveniente, e questa
valutazione merita la stessa serietà di qualsiasi altro significativo impegno
infrastrutturale pluriennale.

### Preventiva in modo realistico il costo di integrazione su entrambi i lati della decisione

Che si costruisca o si compri, il costo di integrazione, collegare lo strumento al
vostro effettivo controllo di versione, CI/CD, tracciamento degli incidenti e sistemi di
business, è spesso sottostimato nella pianificazione iniziale di entrambi i percorsi.
Preventiva esplicitamente questo sforzo di integrazione come voce distinta e
significativa nella tua analisi tra costruire e comprare, anziché presumere che uno
strumento commerciale funzioni subito con un'impostazione minima, o che il costo di
integrazione di una soluzione interna sia una piccola aggiunta al costo di sviluppo.

### Tieni conto in modo esplicito e precoce dei vincoli di acquisto, sicurezza e sovranità

Per le organizzazioni governative e le imprese regolamentate, i requisiti di sovranità
dei dati, le esigenze di certificazione di sicurezza e i processi di acquisto possono
restringere o eliminare materialmente certe opzioni commerciali a prescindere dalla
loro qualità funzionale, a volte inclinando la decisione verso la costruzione o verso
un insieme più piccolo di fornitori specificamente verificati. Individua questi vincoli
in modo esplicito e precoce nel processo di valutazione, anziché scoprirli solo dopo che
molto sforzo di valutazione è già andato a un'opzione che si rivela non praticabile per
ragioni estranee alla sua reale capacità.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Comprare strumenti commerciali | Rapidi da attivare, funzionalità mature, manutenzione a carico del fornitore | Meno personalizzabili per le metriche di risultato specifiche dell'organizzazione; possibile lock-in |
| Costruire strumenti interni | Totalmente personalizzati, piena proprietà e controllo dei dati | Investimento di ingegneria significativo e continuo; duplica lo sforzo per le metriche di commodity |
| Ibrido: comprare lo strato di commodity, costruire lo strato dei risultati | Bilancia efficienza dei costi e vera personalizzazione dove conta di più | Richiede un lavoro di integrazione per collegare in modo coerente i componenti acquistati e costruiti |
| Comprare tutto, inclusa la telemetria dei risultati, tramite ampia personalizzazione del fornitore | Un solo rapporto con il fornitore, acquisto potenzialmente più semplice | Può diventare costoso quanto costruire, con minore controllo finale sul risultato |

La tensione centrale è **bisogno di personalizzazione contro costo di sviluppo**. Le
metriche che traggono più vantaggio dalla personalizzazione, la telemetria dei
risultati legata specificamente al vostro business, sono anche le più costose da
costruire bene; le metriche più economiche da comprare, DORA e analisi della revisione,
sono anche quelle in cui la personalizzazione genuina conta meno. Si risolve la
tensione adattando la decisione direttamente a questo schema: comprare dove la
standardizzazione vi serve bene, costruire dove il vostro contesto specifico lo
richiede davvero e preventivare in modo realistico il costo di integrazione su entrambi
i lati di quella divisione.

## Domande da discutere con il vostro team

1. **Per ciascuna famiglia di metriche che questo libro tratta, trarremmo davvero
   vantaggio dalla personalizzazione, o uno strumento commerciale standardizzato ci
   servirebbe altrettanto bene?** Percorrete esplicitamente le Parti dalla 2 alla 6 e
   ordinate ciascuna famiglia di metriche in una colonna «compra» o «costruisci» in
   base a questa specifica prova.

2. **Abbiamo valutato le opzioni di esportazione e portabilità dei dati del nostro
   fornitore attuale o potenziale, o presumiamo di poter andarcene facilmente se
   servisse?** Controllatelo direttamente anziché presumere; il lock-in dei dati si
   scopre spesso solo quando un'organizzazione prova davvero a cambiare.

3. **La nostra analisi originale tra costruire e comprare ha tenuto conto in modo
   realistico del costo di integrazione, o si è concentrata soprattutto su costi di
   licenza contro ore di sviluppo?** Riesaminate una decisione recente sugli strumenti
   e controllate se il costo di integrazione sia stato davvero stimato o
   significativamente sottostimato.

4. **Affrontiamo vincoli di acquisto, sicurezza o sovranità dei dati che eliminerebbero
   certe opzioni commerciali a prescindere dalla loro qualità funzionale?** Individuate
   questi vincoli in modo esplicito prima, non dopo, di investire un notevole sforzo di
   valutazione in opzioni che potrebbero rivelarsi non praticabili.

5. **Il nostro attuale panorama di strumenti è un ibrido deliberato, che abbina
   costruzione e acquisto dove ciascuno ha senso, o si è accumulato attraverso
   decisioni estemporanee e individualmente ragionevoli nel tempo?** Siate onesti su
   quale schema descriva davvero la vostra situazione attuale.

6. **Quanto ci costerebbe, in sforzo e rischio, cambiare oggi il fornitore dei nostri
   attuali strumenti di metriche se servisse?** Questa domanda concreta mette alla
   prova la vostra effettiva esposizione al rischio di lock-in dei dati, al di là di
   quanto i termini contrattuali del fornitore promettano nominalmente.

## Prospettiva settoriale

**Startup.** Comprate per impostazione predefinita strumenti di commodity a questa
scala; costruire infrastrutture di metriche su misura è raramente un buon uso della
scarsa capacità di ingegneria iniziale quando esistono opzioni commerciali mature ed
economiche specificamente per le metriche DORA e di revisione. Riservate qualsiasi
sforzo di costruzione all'unica metrica di risultato (argomento 5.3) che riflette più
direttamente il valore centrale del vostro prodotto.

**Piccola impresa.** La maggior parte delle opzioni di strumenti commerciali scala
ragionevolmente bene verso il basso e ha prezzi accessibili per le organizzazioni più
piccole; comprare lo strato di commodity è quasi sempre la scelta giusta, e costruire
qualcosa di personalizzato è raramente giustificato finché l'organizzazione non è
cresciuta considerevolmente e non ha sviluppato esigenze davvero specifiche.

**Enterprise.** L'approccio ibrido che questo argomento raccomanda si guadagna la sua
complessità qui: comprate lo strato di commodity a scala (spesso con un notevole
potere negoziale per condizioni favorevoli) e investite in modo deliberato nel
costruire lo strato di telemetria dei risultati specifico dell'organizzazione, dato che
la complessità della vostra logica di business e del modello di dati a questa scala
supera di solito ciò che gli strumenti commerciali generici possono accogliere senza una
personalizzazione estesa e costosa.

**Settore pubblico.** I processi di acquisto, i requisiti di certificazione di sicurezza
e i vincoli di sovranità dei dati dominano spesso questa decisione più di quanto un puro
confronto di funzionalità o costi suggerirebbe. Coinvolgete presto nel processo di
valutazione gli stakeholder di acquisto e di sicurezza, e siate pronti al fatto che
l'opzione di costruzione possa essere qui davvero più attraente che in un contesto
privato comparabile, specificamente a causa di questi vincoli e non perché costruire sia
intrinsecamente migliore.

## Esempi

**Enterprise.** Un'azienda software tentò inizialmente di costruire una piattaforma di
metriche interamente su misura che coprisse ogni famiglia di metriche dalla Parte 2
alla Parte 6, uno sforzo pluriennale che consumò una notevole capacità di ingegneria e
restò comunque indietro rispetto alle offerte commerciali mature specificamente per le
metriche standardizzate DORA e di revisione. Una strategia rivista adottò una
piattaforma commerciale per queste metriche di commodity, liberando il team interno di
piattaforma perché si concentrasse esclusivamente sulla costruzione della telemetria di
correlazione con i risultati di business e di economia unitaria (argomenti 5.3, 5.4)
davvero specifica del modello di business dell'azienda, che nessuno strumento
commerciale avrebbe potuto fornire subito. Questo approccio ibrido produsse in un solo
anno un programma di metriche più completo e più genuinamente utile di quanto la
strategia tutta costruita avesse ottenuto dopo due.

**Settore pubblico.** La valutazione iniziale delle piattaforme commerciali di analisi
dell'ingegneria da parte di un'agenzia federale scoprì che nessuno dei fornitori
disponibili poteva soddisfare i requisiti di sovranità dei dati dell'agenzia, che
imponevano che tutti i dati di metriche di ingegneria restassero all'interno di specifici
data center governativi certificati. Anziché abbandonare del tutto l'opzione di
acquisto, l'agenzia individuò un sottoinsieme più piccolo di fornitori che offrivano
opzioni di distribuzione in cloud sovrano certificate dal governo, a un modesto
sovrapprezzo rispetto ai prezzi commerciali standard, e attuò con successo un programma
ibrido: strumenti acquistati per lo strato di metriche di commodity entro il confine di
sovranità richiesto e strumenti interni costruiti per le specifiche esigenze di
telemetria dei risultati per i cittadini dell'agenzia, che nessun fornitore commerciale
disponibile affrontava a prescindere dalle considerazioni di sovranità.

## Business case: motivazioni, ROI e TCO

Il ritorno di una strategia ibrida deliberata tra costruire e comprare è evitare
entrambi i modi di fallire che gli esempi di questo argomento illustrano: lo spreco di un
investimento di ingegneria pluriennale per costruire una capacità di commodity che
esiste già a basso costo sul mercato, e la frustrazione e il costo finale di
personalizzazione del forzare un bisogno davvero specifico dell'organizzazione in uno
strumento commerciale inadatto. L'esempio enterprise qui sopra lo mostra in concreto:
l'approccio ibrido ha consegnato più valore genuino in un anno di quanto la strategia
tutta costruita ne avesse in due.

Il costo totale di proprietà per entrambi i percorsi comprende il costo di integrazione,
spesso sottostimato, e, per gli strumenti acquistati in particolare, il costo di rischio
continuo di un potenziale lock-in con il fornitore, a meno che la portabilità dei dati
non sia confermata e protetta contrattualmente in anticipo. Preventivare in modo
realistico entrambi, anziché concentrarsi solo su costi di licenza o ore di sviluppo,
produce un quadro dei costi totali molto più accurato per ciascuna opzione.

## Antipattern e insidie

- **Costruire strumenti su misura per metriche di commodity ben standardizzate:**
  duplica uno sforzo di ingegneria in cui molti fornitori hanno già investito
  pesantemente.
- **Comprare strumenti commerciali per una telemetria dei risultati davvero specifica
  dell'organizzazione senza controllare prima l'adattamento:** rischia una
  personalizzazione costosa e inadatta o un bisogno non soddisfatto.
- **Nessuna valutazione di esportazione e portabilità dei dati prima di impegnarsi con
  un fornitore:** rischia un lock-in durevole e costoso scoperto solo quando si prova a
  uscire.
- **Sottostimare il costo di integrazione su entrambi i lati della decisione:** produce
  un confronto di costi totali inaccurato e tempistiche irrealistiche.
- **Ignorare vincoli di acquisto, sicurezza o sovranità fino a tardi nel processo di
  valutazione:** spreca sforzo di valutazione su opzioni che si rivelano non praticabili
  per ragioni estranee alla capacità.
- **Trattare questa come un'unica decisione tutto-o-niente:** perde l'approccio ibrido
  che meglio si adatta alle esigenze effettive e miste della maggior parte delle
  organizzazioni.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le decisioni sugli strumenti sono prese in modo
  estemporaneo, senza un'analisi deliberata tra costruire e comprare né considerazione
  della portabilità dei dati.
- **Livello 2, Sviluppo (Develop):** Si svolge una certa analisi, ma il costo di
  integrazione è abitualmente sottostimato e l'approccio ibrido non è considerato
  deliberatamente.
- **Livello 3, Standardizzazione (Standardize):** Una strategia ibrida deliberata tra
  costruire e comprare abbina in modo coerente le metriche di commodity a strumenti
  acquistati e la telemetria dei risultati specifica dell'organizzazione a strumenti
  costruiti.
- **Livello 4, Gestione (Manage):** La portabilità dei dati è confermata e protetta
  contrattualmente per tutti gli strumenti acquistati, e i vincoli di acquisto,
  sicurezza e sovranità sono considerati in modo esplicito e precoce.
- **Livello 5, Orchestrazione (Orchestrate):** Il panorama degli strumenti
  dell'organizzazione riflette una strategia ibrida matura e deliberata, riesaminata
  regolarmente man mano che le offerte commerciali e le esigenze organizzative
  evolvono, con valore dimostrato sia dai componenti acquistati sia da quelli
  costruiti.

## Spunti di discussione

1. Quali delle nostre metriche attuali trarrebbero più vantaggio da una personalizzazione che oggi non otteniamo?
2. Abbiamo confermato di poter esportare l'intero storico dei dati di metriche se dovessimo cambiare fornitore?
3. La nostra ultima decisione sugli strumenti ha tenuto conto in modo realistico del costo di integrazione?
4. Quale vincolo di acquisto, sicurezza o sovranità potremmo stare sottostimando?
5. Che aspetto avrebbe una strategia ibrida deliberata per il nostro specifico insieme di metriche?

## Punti chiave

- Raramente è tutto-o-niente; la maggior parte dei programmi maturi **combina strumenti
  acquistati per le metriche di commodity con strumenti costruiti per la telemetria dei
  risultati specifica dell'organizzazione**.
- **Compra per le metriche standardizzate** (DORA, analisi della revisione,
  infrastruttura di sondaggi); **costruisci per la misurazione dei risultati davvero
  specifica dell'organizzazione**.
- Valuta **proprietà e portabilità dei dati** prima di impegnarti con un fornitore; il
  lock-in è un rischio durevole, non solo un inconveniente.
- **Preventiva in modo realistico il costo di integrazione** su entrambi i lati della
  decisione; è spesso sottostimato.
- **I vincoli di acquisto, sicurezza e sovranità** possono scavalcare un puro calcolo
  costi-benefici, in particolare per le organizzazioni governative.

## Riferimenti e letture di approfondimento

- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (le famiglie di metriche a cui si applica l'analisi tra costruire e
  comprare di questo argomento).
- *Cloud FinOps*, di J.R. Storment e Mike Fuller (principi di analisi dei costi
  applicabili alle decisioni di investimento in strumenti).
- Il FinOps Framework della FinOps Foundation, [finops.org](https://www.finops.org/)
  (guida per i professionisti alla valutazione e alla gestione dei costi di strumenti
  cloud e SaaS).
- La documentazione del U.S. Federal Risk and Authorization Management Program
  (FedRAMP): indicazioni autorevoli sui requisiti di sicurezza e sovranità degli
  strumenti cloud governativi.
