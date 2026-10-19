# 5.4 Costi ed economia unitaria dell'ingegneria

## Panoramica e motivazione

Questo argomento rende esplicitamente finanziaria la Parte 5: come esprimere il costo
dell'ingegneria in termini che uno stakeholder finanziario possa usare direttamente, e
come costruire l'**economia unitaria** (unit economics), il costo espresso per unità
significativa di output o di utilizzo, anziché come una voce di bilancio
dipartimentale aggregata e opaca. Il costo dell'ingegneria è di solito la maggiore
voce di spesa controllabile in un'organizzazione guidata dal software, eppure è
spesso la meno compresa dalla funzione finanziaria, riportata come un unico grande
numero con poca visibilità su che cosa lo guidi o su come scali con la crescita.
Questo argomento esiste per colmare quel divario, perché un responsabile di
ingegneria che non sa rispondere a «quanto ci costa far funzionare questo sistema» o
«come scala il nostro costo man mano che cresciamo» in termini finanziari concreti è
in reale svantaggio in ogni conversazione di bilancio.

La disciplina specifica che questo argomento raccomanda, l'economia unitaria, significa
esprimere il costo per rilascio, per cliente servito, per transazione elaborata o per
un'altra unità che conti davvero per l'azienda, anziché solo come costo totale del
personale o spesa totale per il cloud. Questa riformulazione si collega direttamente al
principio dei risultati prima dell'output dell'argomento 1.3: un numero di costo totale
in calo non è automaticamente un bene se deriva dal servire meno clienti, e un numero
di costo totale in crescita non è automaticamente un male se deriva dal servirne
proporzionalmente molti di più. L'economia unitaria è ciò che rende interpretabili i
trend di costo anziché solo visibili.

Per i team grandi, la disciplina di questo argomento è ciò che trasforma la finanza
dell'ingegneria da scatola nera in un sistema leggibile e gestibile. Le organizzazioni
enterprise usano l'economia unitaria per confrontare su una base equa l'efficienza di
costo di prodotti, piattaforme o team diversi; le organizzazioni governative usano la
stessa disciplina per dimostrare responsabilità fiscale e per sostenere con prove
l'investimento in infrastrutture che ridurrà nel tempo il costo per cittadino servito.

## Principi chiave

- **Il costo totale da solo non è interpretabile senza un denominatore.** L'economia
  unitaria, il costo per unità significativa, trasforma un numero opaco in un trend
  azionabile.
- **Scegli un'unità che rifletta un valore genuino per il business o la missione**,
  non un denominatore arbitrario o facilmente manipolabile.
- **Il costo ha più componenti: persone, infrastruttura e strumenti.** Traccia
  separatamente, dato che ciascuna ha un diverso fattore di costo e una diversa leva
  su cui agire.
- **Le pratiche FinOps portano al costo del cloud lo stesso rigore che questo libro
  porta alle metriche di consegna e di qualità.** Tratta il costo come misurabile e
  gestibile, non come un dato opaco e inevitabile.
- **Un costo totale in calo non è automaticamente un bene, e uno in crescita non è
  automaticamente un male**, senza controllare che cosa sia accaduto nello stesso
  momento alla misura unitaria.

## Raccomandazioni

### Scegli un'unità che rifletta il valore reale consegnato, non un denominatore arbitrario

Scegli per il calcolo dell'economia unitaria un'unità che segua davvero il valore per
il business o la missione: costo per cliente servito, costo per transazione elaborata,
costo per rilascio o costo per interazione con un cittadino gestita per un servizio
del settore pubblico. Evita un denominatore troppo facilmente gonfiabile per lusingare
il rapporto, come un conteggio interno e in gran parte discrezionale che non
corrisponde ad alcuna genuina unità esterna di valore consegnato.

### Separa i costi di personale, infrastruttura e strumenti

Il costo dell'ingegneria ha almeno tre componenti distinte con diversi fattori e
diverse leve: costo del personale (stipendi, benefit, in gran parte fisso nel breve
periodo), costo dell'infrastruttura (spesa cloud, in gran parte variabile con
l'utilizzo e direttamente ottimizzabile attraverso la pratica ingegneristica) e costo
di strumenti e licenze (spesso costi fissi per postazione o per fascia di utilizzo).
Traccia queste voci separatamente anziché come un unico totale misto, dato che un
costo totale in crescita guidato da un'infrastruttura che scala con una crescita
genuina richiede una risposta molto diversa dalla stessa crescita guidata da una
proliferazione non gestita di strumenti.

### Applica la disciplina FinOps in particolare al costo dell'infrastruttura cloud

Il **[FinOps](https://en.wikipedia.org/wiki/FinOps)** è la disciplina di portare
responsabilità finanziaria alla spesa variabile del cloud attraverso la collaborazione
interfunzionale tra ingegneria, finanza e business. Applica direttamente le sue
pratiche fondamentali: etichetta le risorse cloud per team e servizio per
l'attribuzione dei costi, riesamina la spesa rispetto al budget con una cadenza
regolare e tratta l'efficienza di costo dell'infrastruttura (costo per unità di
utilizzo effettivo) come una metrica di ingegneria che vale la pena ottimizzare
deliberatamente, non come un overhead fisso e inevitabile da accettare e basta.

### Traccia nel tempo il trend del costo unitario, e indaga esplicitamente i movimenti

Una singola istantanea del costo unitario è meno utile del suo trend: il costo per
cliente servito sta calando man mano che la piattaforma matura e scala (segno di
genuini guadagni di efficienza), o sta salendo (segno di inefficienza che si accumula,
di debito tecnico che causa un costo di manutenzione più alto, o di uno spostamento del
mix di clienti serviti verso segmenti più intensivi di risorse)? Indaga
esplicitamente un cambiamento significativo del trend del costo unitario anziché
riportare il numero senza spiegazione.

### Collega i dati di costo al debito tecnico e alle metriche di qualità del resto di questo libro

Un costo di infrastruttura o di manutenzione per unità in crescita è a volte una
conseguenza diretta e misurabile del debito tecnico accumulato (argomento 4.5) o di
una proliferazione di hotspot di complessità (argomento 4.1, argomento 4.3): percorsi
di codice inefficienti, infrastruttura ridondante e query mal ottimizzate emergono
tutti, alla fine, come costo unitario elevato. Usa il costo unitario in crescita come
un input, accanto ai segnali di churn e complessità della Parte 4, nella tua
discussione di prioritizzazione del debito, dato che una voce di debito con un impatto
di costo dimostrato e misurabile sostiene meglio un investimento di rimediazione di
una lamentela di qualità non quantificata da sola.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Riportare solo il costo totale | Semplice, in linea con il modo in cui di solito si allocano i budget | Non interpretabile senza denominatore; nasconde i trend di efficienza |
| Economia unitaria con un denominatore ben scelto | Interpretabile, azionabile, confrontabile nel tempo e tra team | Richiede cura nello scegliere un'unità davvero significativa e difficile da manipolare |
| Reportistica di costo mista (personale, infrastruttura, strumenti combinati) | Un solo numero semplice | Oscura quale specifico fattore di costo stia davvero cambiando e perché |
| Componenti di costo separate | Rivela la leva giusta su cui agire per un dato trend di costo | Richiede un'attribuzione dei costi e un'infrastruttura di tracciamento più dettagliate |

La tensione centrale è **semplicità contro azionabilità**. Un singolo numero di costo
totale è facile da riportare e corrisponde a come molte organizzazioni allocano già il
budget, ma oscura sia che cosa guidi i cambiamenti di costo sia se quei cambiamenti
riflettano un'efficienza genuina o una crescita genuina. Si risolve la tensione
investendo nell'economia unitaria un po' più complessa e nella reportistica a
componenti separate che questo argomento raccomanda, dato che l'azionabilità
risultante, sapere esattamente su quale leva agire quando il costo si muove, vale il
modesto sforzo aggiuntivo di tracciamento per qualsiasi organizzazione oltre la scala
più piccola.

## Domande da discutere con il vostro team

1. **Tracciamo il costo dell'ingegneria per unità significativa (cliente,
   transazione, rilascio), o solo come totale opaco?** Se esiste solo un totale,
   individuate quale unità renderebbe il vostro trend di costo davvero interpretabile
   e discutete che cosa servirebbe per cominciare a tracciarla.

2. **Sappiamo separare il nostro costo attuale in componenti di personale,
   infrastruttura e strumenti, e sappiamo quale stia guidando una variazione
   recente?** Prendete la vostra ripartizione effettiva dei costi, se esiste, e
   verificate se sia abbastanza dettagliata da rispondere a questa domanda con
   sicurezza.

3. **Abbiamo applicato le pratiche FinOps di etichettatura e attribuzione al costo
   della nostra infrastruttura cloud, o è un'unica voce non attribuita?** Se la spesa
   non può essere attribuita a team o servizi specifici, discutete come sarebbe il
   primo passo verso un'attribuzione genuina.

4. **Il nostro trend di costo unitario si è mosso in modo significativo in una
   direzione o nell'altra di recente, e sappiamo perché?** Indagate un movimento reale
   e recente, se esiste, e verificate se sappiate spiegarlo con sicurezza o se resti
   un mistero.

5. **Il nostro attuale trend di costo dell'infrastruttura correla con qualcuno dei
   segnali di debito tecnico o di hotspot di complessità della Parte 4?** Confrontate
   esplicitamente queste fonti di dati e verificate se emerga un collegamento che
   potrebbe rafforzare un business case di rimediazione del debito.

6. **Se domani uno stakeholder finanziario ci chiedesse «quanto ci costa servire un
   cliente in più», sapremmo rispondere con sicurezza?** Questa domanda concreta e
   pratica mette alla prova se la vostra economia unitaria sia davvero costruita e
   pronta, o solo un'aspirazione teorica.

## Prospettiva settoriale

**Startup.** L'economia unitaria conta enormemente presto, dato che sia gli investitori
sia i fondatori hanno bisogno di sapere se il costo di servire ogni cliente aggiuntivo
vada verso la sostenibilità o verso un modello di business che non può scalare. Traccia
questo molto presto, anche con stime approssimative, anziché aspettare che l'azienda
sia abbastanza grande da giustificare strumenti FinOps formali.

**Piccola impresa.** Le dashboard di fatturazione dei fornitori cloud forniscono di
solito abbastanza visibilità di base sui costi senza strumenti FinOps dedicati; la
disciplina principale è scegliere un'unità sensata (costo per cliente o costo per
transazione) e controllare periodicamente il trend, anziché guardare solo la fattura
totale in isolamento.

**Enterprise.** La pratica FinOps e il tracciamento a componenti di costo separate
sono essenziali a questa scala, dove la spesa cloud può rappresentare una voce di
bilancio molto grande e spesso poco esaminata, sparsa su molti team. Investite in una
corretta etichettatura per l'attribuzione dei costi e in una cadenza dedicata di
revisione dei costi, e usate l'economia unitaria per confrontare equamente l'efficienza
di costo tra linee di prodotto o piattaforme diverse.

**Settore pubblico.** Responsabilità fiscale ed efficienza di costo dimostrabile sono
direttamente rilevanti per la giustificazione del budget e la rendicontazione al
pubblico. L'economia unitaria espressa come costo per cittadino servito, o costo per
transazione elaborata, è spesso una metrica molto più persuasiva e interpretabile per
le commissioni di bilancio di una cifra grezza di spesa totale, e sostiene
direttamente il business case per un investimento in infrastruttura che riduce il costo
per unità nel tempo.

## Esempi

**Enterprise.** Il team finanziario di un'azienda software-as-a-service era allarmato
dalla spesa totale per l'infrastruttura cloud in crescita per diversi trimestri
consecutivi, presumendo inizialmente inefficienza o spreco. Un'analisi di economia
unitaria, costo per cliente attivo, mostrò che il costo unitario in realtà calava
costantemente anche mentre la spesa totale saliva, perché il numero di clienti cresceva
più in fretta del costo dell'infrastruttura, un genuino miglioramento di efficienza
mascherato dal guardare la sola spesa totale. Questa riformulazione spostò la
conversazione finanziaria da «perché l'ingegneria spende di più» a «come sosteniamo
questa scalabilità efficiente», una discussione sostanzialmente più produttiva che
evitò un mandato di taglio dei costi inutile e potenzialmente dannoso che avrebbe
colpito una spesa davvero sana e guidata dalla crescita.

**Settore pubblico.** All'agenzia di servizi digitali di un governo statale fu chiesto
di giustificare il proseguimento dell'investimento in infrastruttura cloud davanti a
una commissione di bilancio che confrontava i costi con il sistema on-premises
ereditato che stava sostituendo. Un'analisi di economia unitaria, costo per transazione
di cittadino elaborata, mostrò che il costo unitario del nuovo sistema basato sul cloud
era sostanzialmente inferiore a quello del sistema ereditato, nonostante una spesa
totale nominale più alta, perché il nuovo sistema gestiva un volume di transazioni
molto maggiore con lo stesso o un minore budget totale di infrastruttura. Questo
confronto dei costi unitari, anziché un confronto della spesa totale più difficile da
interpretare, divenne la prova centrale di un caso riuscito per il proseguimento e
l'ampliamento dell'investimento cloud.

## Business case: motivazioni, ROI e TCO

Il ritorno di un'economia unitaria rigorosa è una risposta difendibile e interpretabile
alla domanda che ogni stakeholder finanziario prima o poi pone: questa spesa è
efficiente e scala in modo sostenibile? L'esempio enterprise qui sopra mostra il
rischio di sbagliare: una vista di sola spesa totale ha quasi innescato un mandato di
taglio dei costi inutile e controproducente contro una spesa che era, su base
unitaria, sempre più efficiente e non meno.

Il costo totale di proprietà comprende gli strumenti di attribuzione dei costi
(pratiche di etichettatura FinOps) e la disciplina analitica di separare le componenti
di costo e tracciare i trend unitari nel tempo. Quell'investimento è modesto rispetto al
rischio di prendere una decisione di budget importante, tagliare una spesa che in realtà
era efficiente, o non cogliere una spesa che stava davvero diventando inefficiente, sulla
base di una vista di costo totale poco informata da sola.

## Antipattern e insidie

- **Riportare il costo totale senza denominatore:** non interpretabile, e nasconde se
  il costo stia scalando in modo efficiente o inefficiente.
- **Scegliere un'unità facilmente manipolabile o arbitraria per il calcolo del
  costo:** produce un rapporto che lusinga anziché informare.
- **Fondere in un unico numero costo del personale, dell'infrastruttura e degli
  strumenti:** oscura quale specifico fattore stia davvero cambiando e quale leva lo
  affronti.
- **Nessuna attribuzione dei costi cloud (etichettatura FinOps):** lascia la spesa per
  l'infrastruttura di fatto non gestita e priva di responsabilità a livello di team o
  di servizio.
- **Reagire a una variazione del costo totale senza controllare il trend unitario:**
  può innescare un mandato di taglio dei costi inutile contro una spesa davvero
  efficiente e guidata dalla crescita.
- **Non collegare mai i trend di costo ai dati su debito tecnico o complessità:**
  perde un caso quantificato e rafforzato per l'investimento nella rimediazione del
  debito.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Il costo dell'ingegneria è riportato solo come
  totale opaco, senza economia unitaria né separazione per componenti.
- **Livello 2, Sviluppo (Develop):** Esiste una certa ripartizione dei costi, ma
  l'economia unitaria è incoerente e l'attribuzione dei costi cloud è in gran parte
  assente.
- **Livello 3, Standardizzazione (Standardize):** L'economia unitaria con un
  denominatore ben scelto è tracciata in modo coerente, con il costo separato in
  componenti di personale, infrastruttura e strumenti in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Le pratiche FinOps di attribuzione e revisione
  sono stabilite, e i trend del costo unitario sono indagati attivamente e collegati
  ai segnali di debito tecnico e di qualità.
- **Livello 5, Orchestrazione (Orchestrate):** L'organizzazione sa rispondere con
  sicurezza a domande dettagliate sul costo unitario poste dagli stakeholder
  finanziari, e i dati di costo informano direttamente sia le decisioni di
  investimento in ingegneria sia la giustificazione del budget ai massimi livelli.

## Spunti di discussione

1. Quale unità renderebbe il nostro trend di costo davvero interpretabile, e la tracciamo?
2. Sapremmo separare una recente variazione di costo nelle sue componenti di personale, infrastruttura e strumenti?
3. Una parte della nostra spesa per l'infrastruttura è attualmente non attribuita a un team o servizio specifico?
4. Il nostro trend di costo unitario si è mosso di recente, e sappiamo perché?
5. Dove un costo unitario in crescita potrebbe essere il sintomo di un debito tecnico non affrontato?

## Punti chiave

- L'**economia unitaria**, il costo per unità significativa di valore, trasforma un
  numero opaco di costo totale in un trend interpretabile e azionabile.
- Scegli un'unità che rifletta un **valore genuino per il business o la missione**, ed
  evita un denominatore facilmente manipolabile o arbitrario.
- Separa il costo in componenti di **personale, infrastruttura e strumenti**, dato che
  ciascuna ha un diverso fattore e una diversa leva.
- Applica la **disciplina FinOps** in particolare al costo dell'infrastruttura cloud,
  inclusa l'etichettatura per l'attribuzione e la revisione regolare.
- Un costo totale in calo **non è automaticamente un bene**, e uno in crescita **non è
  automaticamente un male**, senza controllare accanto il trend unitario.

## Riferimenti e letture di approfondimento

- *Cloud FinOps*, di J.R. Storment e Mike Fuller (il testo fondativo sulle pratiche
  FinOps per la gestione dei costi del cloud).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (il rapporto tra efficienza di consegna e costo).
- *Site Reliability Engineering*, a cura di Betsy Beyer, Chris Jones, Jennifer
  Petoff e Niall Richard Murphy (il costo come compromesso esplicito dell'ingegneria
  dell'affidabilità).
- Il FinOps Framework della FinOps Foundation, [finops.org](https://www.finops.org/)
  (guida per i professionisti e modello di maturità per la gestione finanziaria del
  cloud).
