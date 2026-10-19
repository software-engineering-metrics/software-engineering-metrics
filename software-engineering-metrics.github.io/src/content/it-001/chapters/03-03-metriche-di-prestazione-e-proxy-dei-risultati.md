# 3.3 Metriche di prestazione e proxy dei risultati

## Panoramica e motivazione

Le **prestazioni** (performance), la P di SPACE (argomento 3.1), sono la dimensione
più spesso confusa con l'attività, e quella confusione è esattamente ciò che questo
argomento esiste per prevenire. Le prestazioni chiedono se il lavoro di un
ingegnere o di un team abbia effettivamente prodotto un buon risultato (outcome):
una funzionalità rilasciata e funzionante, un sistema rimasto affidabile, un
cambiamento che ha mosso una metrica di business o di utente nella direzione
giusta. L'attività (argomento 3.4) chiede soltanto quanto movimento ci sia stato.
Un team può essere molto attivo e poco performante, rilasciando di continuo piccoli
cambiamenti che non muovono mai un risultato, e il contrario è altrettanto
possibile: un team che rilascia di rado ma i cui cambiamenti arrivano in modo
affidabile esattamente nel punto giusto.

La difficoltà di questa dimensione è che il risultato spesso non è attribuibile a
una singola persona e nemmeno a un singolo team; i risultati del software
emergono dalla collaborazione, da decisioni prese mesi prima da persone che nel
frattempo sono passate ad altri progetti, da condizioni di mercato che nessun
ingegnere controlla. I ricercatori di SPACE sono stati espliciti su questo: le
prestazioni vanno misurate a livello di sistema o di team usando più segnali
convergenti, non ridotte a un singolo numero e certamente non attribuite a un
singolo ingegnere in isolamento. Questo argomento prende sul serio quell'indicazione
e tratta l'attribuzione individuale delle prestazioni come una trappola da evitare
attivamente, non come una scorciatoia da prendere quando fa comodo.

Per i team grandi, misurare bene le prestazioni è ciò che distingue un programma di
metriche che migliora davvero i risultati da uno che si limita a premiare
un'operosità visibile. Le organizzazioni enterprise che confrontano le prestazioni
di molti team hanno bisogno di segnali che resistano alla manipolazione tramite il
puro volume di output; le organizzazioni governative che giustificano
l'investimento tecnologico presso gli organi di controllo devono dimostrare che lo
sforzo di ingegneria ha prodotto risultati reali, non solo manufatti consegnati,
che è proprio il principio dei risultati prima dell'output dell'argomento 1.3
applicato a questa specifica dimensione.

## Principi chiave

- **Le prestazioni misurano se il lavoro ha prodotto un buon risultato, non quanto
  lavoro c'è stato.** È la distinzione fondamentale rispetto alla dimensione
  attività.
- **Usa più segnali convergenti, mai un singolo numero di prestazione.** Nessun
  proxy individuale è abbastanza affidabile da reggersi da solo.
- **Misura a livello di team o di sistema.** L'attribuzione individuale del
  risultato è di solito inaffidabile e invita proprio alla manipolazione da cui
  questo libro mette in guardia ovunque.
- **La qualità fa parte delle prestazioni, non è una questione separata.** Un
  lavoro che viene rilasciato ma rompe qualcos'altro non ha davvero reso bene.
- **Un segnale di prestazione senza una decisione collegata è decorazione**,
  esattamente secondo il principio generale dell'argomento 1.1 applicato a questa
  dimensione.

## Raccomandazioni

### Combina più segnali convergenti anziché un unico punteggio di prestazione

Trai le prove di prestazione da più fonti: tasso di fallimento dei cambiamenti
(argomento 2.10) e tasso di difetti sfuggiti (argomento 5.1) per la qualità,
risultati dei rilasci legati all'effettiva adozione delle funzionalità (argomento
5.2) per capire se il lavoro contava, e valutazione qualitativa di colleghi o
manager del contributo di un team agli obiettivi strategici per il contesto che una
metrica pura non può catturare. Nessuno di questi è affidabile da solo; insieme,
quando convergono sulla stessa conclusione, sono molto più affidabili di qualsiasi
singolo numero.

### Misura a livello di team, resisti all'attribuzione individuale

I risultati del software sono raramente il prodotto del lavoro di una sola persona;
emergono da decisioni di progetto, feedback di revisione, lavoro precedente di
persone che possono nel frattempo aver lasciato il team e collaborazione tra
confini. Attribuire un risultato a un singolo ingegnere è di solito una falsa
precisione che ignora questa realtà e crea un forte incentivo per i singoli a
proteggere il merito anziché collaborare liberamente, esattamente il tipo di
distorsione degli incentivi da cui l'argomento 1.2 mette in guardia.

### Includi direttamente la qualità nella definizione di prestazione

Una funzionalità rilasciata in tempo che causa un'ondata di incidenti in
produzione non ha reso bene, anche se una visione ingenua basata solo sull'output la
conterebbe come consegnata. Integra direttamente nel modo in cui valuti le
prestazioni tasso di fallimento dei cambiamenti, tasso di difetti sfuggiti e dati
sugli incidenti post-rilascio, anziché trattare la qualità come una questione
separata e scollegata misurata solo nelle Parti 4 e 6 di questo libro.

### Usa i dati di prestazione per informare decisioni di investimento e di processo, non classifiche individuali

L'uso produttivo dei dati di prestazione è decidere dove investire ulteriormente (un
team che consegna costantemente buoni risultati merita più risorse e autonomia) e
dove indagare (un team il cui lavoro non arriva costantemente a destinazione merita
aiuto, non colpa, secondo l'impostazione diagnostica dell'argomento 1.1).
Classificare individui o team in modo competitivo sui dati di prestazione invita
proprio alla manipolazione e al danno al morale da cui questo libro mette in guardia
e raramente produce risultati migliori dell'uso diagnostico.

### Sii onesto sui limiti di attribuzione, soprattutto per i team di piattaforma e di abilitazione

I team che costruiscono infrastruttura condivisa, strumenti interni o capacità di
piattaforma (l'argomento sull'ingegneria di piattaforma del libro gemello
`software-engineering-guide` lo tratta direttamente) hanno spesso il proprio
contributo ai risultati a diversi passaggi di distanza da qualsiasi singola
metrica rivolta ai clienti. Misura le prestazioni di questi team attraverso il loro
effetto sui team che abilitano, l'adozione della loro piattaforma, la riduzione
dell'attrito segnalata dai team che la usano, anziché imporre una metrica di
risultato diretto mal adatta a un lavoro intrinsecamente indiretto.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Singolo punteggio di prestazione per team | Semplice da presentare e confrontare | Falsa precisione; nasconde quale segnale sottostante abbia davvero guidato il punteggio |
| Più segnali convergenti | Più affidabile, resiste alla manipolazione di una singola metrica | Più difficile da riassumere in un numero; richiede più contesto per essere interpretato |
| Misurazione delle prestazioni a livello di team | In linea con il modo in cui i risultati del software emergono davvero | Non risponde direttamente alle domande sul contributo individuale |
| Attribuzione delle prestazioni a livello individuale | Sembra più direttamente azionabile per le valutazioni | Di solito una falsa precisione; forte rischio di manipolazione e di protezione del merito |

La tensione centrale è **precisione contro onestà**. Un singolo numero di
prestazione per team, o peggio per individuo, è facile da confrontare e
classificare, ma quella precisione è di solito falsa, nascondendo la reale
incertezza sull'attribuzione e sulla qualità dietro una cifra dall'aspetto pulito.
Si risolve la tensione accettando come onesto un quadro meno ordinato e a più
segnali, e resistendo alla pressione della dirigenza o dei processi di valutazione
delle prestazioni a ridurlo di nuovo a un unico punteggio falsamente preciso.

## Domande da discutere con il vostro team

1. **La nostra attuale misurazione delle prestazioni combina più segnali
   convergenti, o si affida a un singolo numero che sembra più preciso di quanto
   sia?** Verificate qualunque cosa chiamiate oggi «metrica di prestazione» e
   controllate quanti segnali indipendenti e convergenti vi confluiscano davvero.

2. **Abbiamo mai attribuito le prestazioni di un team o di un individuo senza
   tenere conto della natura collaborativa e trasversale di come il risultato è
   davvero avvenuto?** Scegliete una storia di successo recente e ricostruite
   quanto di essa dipendesse da persone, decisioni o lavoro precedente al di fuori
   del team o dell'individuo a cui è stato attribuito il merito.

3. **La nostra misurazione delle prestazioni include la qualità, o solo velocità di
   consegna e volume di output?** Una funzionalità rilasciata che poi ha causato
   incidenti significativi in produzione non dovrebbe contare come alta
   prestazione; verificate se la vostra misurazione attuale coglierebbe davvero
   questo caso.

4. **Come misuriamo le prestazioni dei team di piattaforma o di abilitazione il cui
   contributo ai risultati è indiretto?** Se la risposta onesta è «non lo facciamo
   bene», quella lacuna merita di essere nominata e affrontata direttamente anziché
   lasciare quei team di fatto non misurati o misurati in modo ingiusto rispetto a
   metriche di risultato rivolte ai clienti che non si adattano al loro lavoro.

5. **I dati di prestazione sono mai stati usati per classificare individui in modo
   competitivo l'uno contro l'altro, formalmente o informalmente?** Questa deriva,
   simile al rischio dei dati di soddisfazione dell'argomento 3.2, danneggia sia
   l'onestà dei dati sia la disponibilità del team a collaborare apertamente.

6. **Quando i nostri segnali convergenti non concordano, alta velocità di consegna
   ma tasso di difetti in crescita, per esempio, che cosa concludiamo, e il nostro
   processo gestisce bene quel disaccordo?** Il disaccordo tra segnali è esso stesso
   un'informazione preziosa; discutete se il vostro team lo tratti oggi come rumore
   da ignorare o come una scoperta genuina che merita di essere indagata.

## Prospettiva settoriale

**Startup.** Le prestazioni sono di solito visibili direttamente: la funzionalità ha
funzionato, i clienti l'hanno adottata, la metrica si è mossa. Una misurazione
formale a più segnali è spesso superflua a questa scala; il rischio è invece
attribuire troppo in fretta successo o fallimento a una sola persona in un piccolo
team veloce e molto collaborativo dove merito e colpa raramente appartengono a un
solo individuo.

**Piccola impresa.** Combinate qualunque dato di consegna e di qualità già abbiate
(argomento 2.10, argomento 5.1) con una conversazione diretta e onesta sul fatto
che il lavoro recente abbia davvero aiutato l'azienda, anziché costruire una
strumentazione formale a più segnali che non avete la capacità di mantenere.

**Enterprise.** È qui che la disciplina della misurazione a livello di team e a più
segnali si guadagna il suo investimento, dato che la pressione a ridurre le
prestazioni a un unico numero confrontabile su decine di team è qui più forte, e il
danno della falsa precisione si compone sulle decisioni di allocazione delle risorse
dell'intera organizzazione. Resistete esplicitamente a quella pressione e costruite
il caso a più segnali sul perché sia importante.

**Settore pubblico.** Dimostrare che l'investimento in ingegneria ha prodotto
risultati reali, non solo manufatti consegnati, è spesso la domanda centrale di un
organo di controllo. Una misurazione delle prestazioni a più segnali, legata
esplicitamente a metriche di risultato (argomento 5.3) anziché a proxy di sola
consegna, dà una risposta molto più forte e difendibile del solo conteggio di
attività o consegne.

## Esempi

**Enterprise.** La dirigenza di un'azienda tecnologica del commercio al dettaglio
classificava in modo informale i team di ingegneria in base agli story point
completati per sprint, trattandolo come proxy delle prestazioni. Dopo aver adottato
un approccio a più segnali, che combinava dati di consegna, tasso di fallimento dei
cambiamenti e adozione delle funzionalità dopo il rilascio, la dirigenza scoprì che
il team con il più alto tasso di completamento di story point aveva il più basso
tasso di adozione delle funzionalità dell'azienda: rilasciavano in fretta ma
costruivano cose che i clienti non usavano. Riallocare le priorità della roadmap di
quel team in base al quadro delle prestazioni più completo, anziché alla
fuorviante classifica a numero singolo, reindirizzò una capacità di ingegneria
significativa verso un lavoro di maggior impatto entro un trimestre.

**Settore pubblico.** Il programma di ingegneria di un'agenzia fiscale nazionale
doveva dimostrare a una commissione di controllo che un grande investimento nei
sistemi aveva migliorato le prestazioni, non solo consegnato l'ambito contrattuale.
Anziché riportare soltanto story point o completamento di traguardi, il programma
presentò un insieme convergente di segnali: tasso di errore di elaborazione ridotto,
tempo mediano di elaborazione ridotto e tasso di completamento in autoservizio
aumentato, tutti legati ai componenti di sistema consegnati. La presentazione a più
segnali e legata ai risultati soddisfece l'esame della commissione in un modo in cui
un semplice rapporto «consegnato nei tempi» di un programma precedente non aveva
saputo fare l'anno prima.

## Business case: motivazioni, ROI e TCO

Il ritorno del misurare le prestazioni attraverso segnali convergenti e legati ai
risultati anziché un singolo numero a falsa precisione sono decisioni migliori
sulle risorse: un'organizzazione che vede quale lavoro dei team muove davvero i
risultati può investire ulteriormente dove conta e indagare dove no, anziché
premiare il team che capita di apparire più indaffarato. L'esempio del commercio al
dettaglio qui sopra è tipico: una classifica fuorviante a numero singolo aveva
distolto l'attenzione sugli investimenti da dove avrebbe davvero aiutato.

Il costo totale di proprietà è più alto di un approccio a metrica singola, perché
richiede di combinare dati da più fonti (consegna, qualità, risultati) e di
resistere alla pressione organizzativa a ridurre di nuovo il quadro a un unico
numero confrontabile. Vale la pena pagare quel costo perché l'alternativa, un
punteggio unico falsamente preciso, fuorvia attivamente le decisioni sulle risorse
che i dati di prestazione dovrebbero informare.

## Antipattern e insidie

- **Confondere attività e prestazioni:** l'errore più comune che questa dimensione
  è progettata specificamente per prevenire.
- **Attribuzione individuale delle prestazioni per risultati collaborativi e
  trasversali:** di solito una falsa precisione che scoraggia la collaborazione.
- **Escludere la qualità dalla definizione di prestazione:** premia il lavoro che
  viene rilasciato ma rompe qualcos'altro.
- **Imporre una metrica di risultato diretto ai team di piattaforma o di
  abilitazione:** misura la cosa sbagliata per un lavoro intrinsecamente indiretto.
- **Ridurre di nuovo più segnali convergenti a un unico numero falsamente preciso
  sotto pressione organizzativa:** perde l'onestà che l'approccio a più segnali era
  stato costruito per offrire.
- **Usare i dati di prestazione per classificare gli individui in modo
  competitivo:** danneggia sia l'onestà dei dati sia la collaborazione del team.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Le prestazioni sono confuse con l'attività o il
  volume di output, misurate con un singolo numero non esaminato.
- **Livello 2, Sviluppo (Develop):** Alcuni segnali di qualità sono considerati
  accanto all'output, ma non c'è un approccio a più segnali coerente e
  l'attribuzione individuale avviene ancora in modo informale.
- **Livello 3, Standardizzazione (Standardize):** Le prestazioni sono misurate a
  livello di team con più segnali convergenti inclusa la qualità, in modo coerente
  in tutta l'organizzazione.
- **Livello 4, Gestione (Manage):** Il disaccordo tra segnali convergenti è
  indagato attivamente; i team di piattaforma e di abilitazione hanno misure di
  prestazione opportunamente indirette, adatte al loro lavoro effettivo.
- **Livello 5, Orchestrazione (Orchestrate):** I dati di prestazione informano
  direttamente le decisioni su risorse e investimenti, e l'organizzazione sa
  indicare specifiche decisioni di riallocazione che una vista a più segnali ha
  permesso e che una vista a numero singolo avrebbe perso.

## Spunti di discussione

1. Quale singolo numero usiamo oggi come proxy delle prestazioni che dovremmo ritirare a favore di un insieme convergente?
2. Abbiamo mai attribuito un risultato al team o alla persona sbagliati perché l'attribuzione non era chiara?
3. Come misuriamo oggi le prestazioni di un team di piattaforma o di abilitazione?
4. Che aspetto avrebbe se i nostri segnali convergenti non concordassero tra loro il prossimo trimestre?
5. Dove una classifica per story point o conteggio di consegne ha distolto la nostra attenzione sugli investimenti?

## Punti chiave

- Le prestazioni misurano se il lavoro ha prodotto un **buon risultato**, non
  quanto movimento ci sia stato; non confonderle con l'attività (argomento 3.4).
- Usa **più segnali convergenti**, mai un singolo numero di prestazione, e diffida
  della falsa precisione.
- Misura a **livello di team o di sistema**; l'attribuzione individuale del
  risultato è di solito inaffidabile e danneggia la collaborazione.
- La **qualità fa parte delle prestazioni**, non è una questione separata e
  scollegata.
- Dai ai team di piattaforma e di abilitazione misure di prestazione
  **opportunamente indirette** anziché imporre al loro lavoro una metrica di
  risultato diretto mal adatta.

## Riferimenti e letture di approfondimento

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann,
  Brian Houck e Jenna Butler, "The SPACE of Developer Productivity," *ACM Queue*
  (2021).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (misurazione delle prestazioni basata sui risultati).
- *Team Topologies*, di Matthew Skelton e Manuel Pais (strutture di team di
  piattaforma e di abilitazione e come misurarne il contributo).
- *Measuring and Managing Performance in Organizations*, di Robert D. Austin (i
  rischi delle metriche di prestazione a falsa precisione).
