# 8.1 Progettare una dashboard di metriche di ingegneria

## Panoramica e motivazione

Ogni metrica che questo libro ha trattato deve alla fine vivere da qualche parte dove
persone reali la guardano davvero, e una [dashboard](https://en.wikipedia.org/wiki/Dashboard_(business))
progettata male può disfare il lavoro accurato di ogni argomento precedente: metriche
oneste, ben governate e abbinate ai guardrail, presentate in modo disonesto, confuso o
al pubblico sbagliato, producono esattamente la confusione e la sfiducia che questo
libro si è sforzato di prevenire. Questo argomento riguarda l'arte specifica di
progettare dashboard: scegliere che cosa mostrare a chi, visualizzarlo con onestà e
strutturare l'intero manufatto in modo che venga davvero usato per prendere decisioni
anziché ignorato o, peggio, letto male.

La disciplina centrale che questo argomento raccomanda è la progettazione specifica per
il pubblico. Una dashboard costruita per lo standup quotidiano di un singolo team di
ingegneria ha bisogno di metriche diverse, di una granularità diversa e di una densità
visiva diversa rispetto a una costruita per una revisione trimestrale della dirigenza, e
un'unica dashboard valida per tutti che cerchi di servire entrambi i pubblici di solito
non serve bene nessuno dei due. Questo argomento tratta la progettazione di dashboard
come una vera disciplina di design, non come un ripensamento di reportistica, attingendo
in tutto ai principi di onestà statistica dell'argomento 1.6: ogni scelta di
visualizzazione aiuta o ostacola la capacità di chi legge di trarre la conclusione
corretta dai dati.

Per i team grandi, la progettazione delle dashboard è dove i molti guardrail dei singoli
argomenti di questo libro sopravvivono nella pratica o si perdono. Le organizzazioni
enterprise che gestiscono decine di dashboard di team hanno bisogno di coerenza senza
rigidità, standard condivisi che consentano comunque di soddisfare le esigenze
specifiche di ogni pubblico; le organizzazioni governative, le cui dashboard possono
affrontare l'esame del pubblico o fungere da base per la rendicontazione di controllo,
hanno bisogno che gli standard di visualizzazione onesta raccomandati da questo
argomento siano applicati con particolare rigore, dato che un grafico fuorviante
scoperto da un revisore esterno danneggia la credibilità ben oltre la specifica
metrica coinvolta.

## Principi chiave

- **Progetta per uno specifico pubblico e una specifica decisione, non per una
  copertura esaustiva.** Una dashboard che cerca di servire tutti di solito non serve
  bene nessuno.
- **Ogni scelta di visualizzazione aiuta o fuorvia attivamente.** Applica con rigore
  l'onestà statistica dell'argomento 1.6: trend reale, assi onesti, incertezza
  visibile.
- **Poche metriche ben scelte battono una copertura esaustiva.** Il principio ricorrente
  di questo libro, dall'argomento 1.1 in poi, si applica direttamente alla
  progettazione delle dashboard.
- **Una dashboard ha bisogno di un responsabile e di una cadenza di revisione**,
  esattamente come qualsiasi altra metrica governata (argomento 1.4), o decade in un
  manufatto non mantenuto e privo di fiducia.
- **Le coppie di guardrail appartengono alla stessa vista.** Non separare mai una
  metrica incentivata dal suo guardrail su dashboard o sezioni diverse.

## Raccomandazioni

### Progetta dashboard distinte per pubblici e decisioni distinti

Costruisci viste separate e specifiche per scopo anziché un'unica dashboard che serve
ogni pubblico: una dashboard operativa a livello di team (cadenza giornaliera o
settimanale, metriche granulari di consegna e qualità per l'uso del team stesso), una
dashboard per la dirigenza (cadenza mensile o trimestrale, ponderata sui risultati
secondo l'argomento 7.4, meno metriche, più contesto) e, dove rilevante, una dashboard
rivolta all'esterno (per clienti, organi di controllo o pubblico, governata con cura
secondo il rigore proporzionato alla conseguenza dell'argomento 1.4). Ciascuna serve
una decisione diversa e dovrebbe essere progettata specificamente per quella
decisione, non come vista filtrata di un'unica dashboard principale.

### Applica in modo coerente standard di visualizzazione onesta

Segui i principi di onestà statistica dell'argomento 1.6 come requisiti di progetto
rigidi, non come rifinitura facoltativa: fai partire da zero gli assi dei valori a meno
che sia documentata un'eccezione dichiarata e visibile, mostra il trend nel tempo
anziché una singola istantanea, usa mediane e percentili anziché medie per i dati
asimmetrici e annota il contesto (rilasci, incidenti, cambiamenti organizzativi) così
che chi legge possa distinguere uno spostamento genuino dal rumore. Evita le specifiche
manipolazioni dei grafici che l'argomento 1.6 ha nominato direttamente: doppi assi che
suggeriscono una falsa correlazione, intervalli di date scelti ad arte ed effetti 3D
che distorcono le proporzioni.

### Non separare mai una metrica dal suo guardrail abbinato su viste diverse

Seguendo come regola rigida di progetto delle dashboard il principio di abbinamento ai
guardrail dell'argomento 1.2: la frequenza di rilascio e il tasso di fallimento dei
cambiamenti (argomento 2.10) appartengono alla stessa vista, sempre visibili insieme,
mai divisi tra una dashboard di «velocità» e una separata di «qualità» che pubblici
diversi potrebbero guardare in isolamento. Non è una preferenza minore di
impaginazione; separare una metrica dal suo guardrail su dashboard diverse ricrea
esattamente il rischio di esposizione agli incentivi da cui l'argomento 1.2 mette in
guardia, anche se entrambi i numeri sono tecnicamente tracciati da qualche parte.

### Assegna un responsabile con nome e una cadenza di revisione a ogni dashboard

Applica direttamente la disciplina di governance dell'argomento 1.4 al manufatto
dashboard stesso, non solo alle singole metriche che mostra: indica un responsabile
della perdurante accuratezza e rilevanza della dashboard e fissa una cadenza di
revisione in cui le metriche vengono aggiunte, ritirate o riconsiderate. Una dashboard
senza responsabile decade esattamente come una metrica senza responsabile (argomento
1.4), accumulando riquadri obsoleti che nessuno ha l'autorità o la responsabilità di
sfoltire.

### Inserisci una dichiarazione esplicita e visibile di ciò per cui la dashboard non va usata

Seguendo la distinzione tra diagnostico e valutativo dell'argomento 1.1, dichiara in
modo diretto e visibile su qualsiasi dashboard le cui metriche potrebbero plausibilmente
essere usate male per la valutazione individuale esattamente per che cosa la dashboard
non vada usata: «queste metriche descrivono la salute del team e del sistema; non sono
usate nelle valutazioni delle prestazioni individuali». Questa dichiarazione esplicita,
applicata in particolare a qualsiasi dashboard che contenga dati di attività (argomento
3.4) o di carico di reperibilità (argomento 6.3), è una piccola scelta di progetto con un
effetto sproporzionato nell'impedire proprio la deriva valutativa da cui questo libro
mette in guardia in tutto il suo svolgimento.

## Compromessi: pro e contro

| Approccio | Pro | Contro |
| --- | --- | --- |
| Un'unica dashboard completa per tutti i pubblici | Semplice da costruire e mantenere un solo manufatto | Non serve bene nessun pubblico specifico; schiacciante per alcuni, insufficiente per altri |
| Dashboard specifiche per pubblico | Ciascuna serve bene la propria decisione effettiva | Più manufatti da costruire, mantenere e tenere coerenti |
| Copertura completa delle metriche su ogni vista | Nulla viene perso | Affaticamento da dashboard; seppellisce le metriche che contano davvero per la decisione di quel pubblico |
| Selezione minima di metriche guidata dalle decisioni per ciascuna dashboard | Focalizzata, azionabile, più facile da fidarsi | Richiede disciplina di cura deliberata e rischia di omettere qualcosa di rilevante |

La tensione centrale è **completezza contro focalizzazione**, la tensione fondativa
dell'argomento 1.1 applicata specificamente alla progettazione delle dashboard. Una
dashboard completa sembra più sicura, nulla è lasciato fuori, ma di solito serve il suo
pubblico effettivo peggio di una focalizzata costruita specificamente attorno alle
decisioni che quel pubblico deve prendere. Si risolve la tensione costruendo più
dashboard specifiche per scopo anziché una sola completa, accettando il modesto costo
aggiuntivo di manutenzione di più manufatti focalizzati in cambio del fatto che
ciascuno sia davvero utile al proprio pubblico di destinazione.

## Domande da discutere con il vostro team

1. **La nostra dashboard attuale cerca di servire più pubblici contemporaneamente, e
   in tal caso chi serve davvero bene?** Percorrete la vostra dashboard esistente e
   individuate il suo effettivo pubblico primario rispetto a quello previsto; una
   discrepanza qui è comune e merita di essere nominata direttamente.

2. **Qualcuna delle nostre dashboard separa una metrica incentivata dal suo guardrail
   abbinato su viste diverse?** Verificate le vostre dashboard attuali specificamente
   per questo schema, controllando come punto di partenza ciascuna delle metriche DORA
   della Parte 2 e i loro abbinamenti.

3. **Le visualizzazioni della nostra dashboard supererebbero gli standard di
   visualizzazione onesta dell'argomento 1.6: assi che partono da zero, trend anziché
   istantanea, mediane anziché medie per i dati asimmetrici?** Riesaminate i vostri
   grafici attuali effettivi rispetto a questa lista di controllo.

4. **Ogni dashboard che manteniamo ha un responsabile con nome e una cadenza di
   revisione, o alcune esistono semplicemente senza che nessuno sia responsabile di
   mantenerle accurate e rilevanti?** Se una qualsiasi dashboard manca di un
   responsabile con nome, quella lacuna va colmata subito, dato che una dashboard senza
   responsabile decade esattamente come una metrica senza responsabile.

5. **Qualche dashboard le cui metriche potrebbero plausibilmente essere usate male per
   la valutazione individuale dichiara esplicitamente per che cosa non vada usata?**
   Controllate in particolare qualsiasi dashboard con dati di attività o di carico di
   reperibilità per questa dichiarazione esplicita.

6. **Se riprogettassimo oggi da zero le nostre dashboard, pubblico per pubblico,
   partendo dalla decisione che ciascun pubblico deve prendere, quanto sarebbe diverso
   il risultato da ciò che esiste attualmente?** Questo esperimento mentale rivela
   spesso quanto della struttura delle dashboard si sia accumulato per inerzia anziché
   per progetto deliberato.

## Prospettiva settoriale

**Startup.** Un'unica dashboard semplice è di solito appropriata a questa scala, dato
che l'intero team e la dirigenza sono spesso lo stesso piccolo gruppo di persone che
prendono in gran parte le stesse decisioni. Concentratevi sugli standard di
visualizzazione onesta e sulla dichiarazione esplicita di non uso per la valutazione
anche su piccola scala, dato che queste abitudini sono molto più facili da stabilire
presto che da introdurre in seguito.

**Piccola impresa.** La maggior parte degli strumenti pronti all'uso fornisce dashboard
predefinite ragionevoli; la disciplina principale è ridurle alle poche metriche che
informano davvero una decisione reale per il vostro specifico business, anziché
mostrare ogni metrica che lo strumento calcola per impostazione predefinita.

**Enterprise.** La coerenza senza rigidità è qui la sfida centrale: decine di dashboard
di team hanno bisogno di abbastanza standard condiviso (regole di visualizzazione
onesta, abbinamento ai guardrail, disciplina di responsabilità) per essere affidabili e
confrontabili, pur consentendo alle specifiche esigenze operative di ogni team di
plasmare la propria vista. Investite in uno standard condiviso di progettazione delle
dashboard, imposto attraverso la governance (argomento 1.4), anziché in un modello
rigido e valido per tutti o in dashboard locali del tutto non strutturate e
incoerenti.

**Settore pubblico.** Le dashboard soggette a un esame esterno o di controllo hanno
bisogno di particolare rigore nella visualizzazione onesta e nella documentazione
esplicita della governance, dato che un grafico fuorviante scoperto da un revisore
esterno danneggia la credibilità istituzionale ben oltre la specifica metrica
coinvolta. Applicate lo standard più alto delle raccomandazioni di questo argomento a
qualsiasi dashboard rivolta all'esterno in particolare.

## Esempi

**Enterprise.** Un'azienda di tecnologia per la logistica aveva mantenuto per anni
un'unica dashboard sulla «salute dell'ingegneria» consultata sia dai singoli team di
ingegneria sia dal team dirigenziale, con oltre quaranta riquadri che coprivano tutto,
dai conteggi di commit individuali ai risultati di business trimestrali. Nessuno dei due
pubblici la trovava davvero utile: gli ingegneri ignoravano i riquadri sui risultati di
business come irrilevanti per il lavoro quotidiano, e i dirigenti erano sommersi da
metriche granulari di consegna senza contesto per interpretarle. Dividerla in una
dashboard operativa di team focalizzata di sei riquadri e una dashboard separata per la
dirigenza di otto riquadri, entrambe conformi agli standard di abbinamento ai guardrail
e di visualizzazione onesta di questo argomento, produsse un coinvolgimento
misurabilmente più alto e, cosa critica, i dirigenti riferirono per la prima volta di
saper spiegare che cosa significassero i numeri quando glielo chiedeva la loro stessa
dirigenza.

**Settore pubblico.** La dashboard pubblica dei servizi digitali di un governo statale
era stata criticata pubblicamente per un grafico che mostrava il tempo «medio» di
elaborazione con un asse y troncato che esagerava visivamente un modesto miglioramento,
una violazione degli standard di visualizzazione onesta dell'argomento 1.6 che un
giornalista tecnologico esterno aveva colto e riportato. La dashboard ridisegnata
dell'agenzia, costruita esplicitamente secondo gli standard di questo argomento, assi
che partono da zero, mediana anziché media per i dati asimmetrici a destra del tempo di
elaborazione e contesto chiaramente annotato per ogni cambiamento notevole, fu
elogiata in modo specifico in un articolo successivo come modello di presentazione
trasparente dei dati nel settore pubblico, riparando direttamente la credibilità che il
grafico fuorviante precedente aveva danneggiato.

## Business case: motivazioni, ROI e TCO

Il ritorno di dashboard deliberate, specifiche per pubblico e progettate con onestà è
un uso genuino e una fiducia genuina: l'esempio dell'azienda di logistica qui sopra
mostra il costo diretto di un'unica dashboard progettata male, scarso coinvolgimento da
parte di entrambi i pubblici previsti, e il beneficio diretto della riprogettazione, un
coinvolgimento misurabilmente più alto una volta che ciascun pubblico ha avuto una
vista costruita davvero per le proprie decisioni.

Il costo totale di proprietà è lo sforzo di progettazione e manutenzione per più
dashboard specifiche per scopo anziché un unico manufatto completo, più la disciplina
continua di governance (responsabilità con nome, cadenza di revisione) che questo
argomento raccomanda. Quel costo è modesto rispetto al rischio di una dashboard che non
viene usata o, peggio, che fuorvia attivamente il suo pubblico e danneggia la
credibilità, come mostra in concreto l'esempio del settore pubblico qui sopra.

## Antipattern e insidie

- **Un'unica dashboard che cerca di servire ogni pubblico:** di solito non serve bene
  nessuno.
- **Separare una metrica incentivata dal suo guardrail su viste diverse:** ricrea il
  rischio di esposizione agli incentivi da cui l'argomento 1.2 mette in guardia.
- **Scelte di visualizzazione disoneste:** assi troncati, intervalli di date scelti ad
  arte e doppi assi fuorviano tutti chi legge, a volte con conseguenze reali sulla
  reputazione.
- **Nessun responsabile con nome né cadenza di revisione per la dashboard stessa:** il
  manufatto decade esattamente come una metrica senza responsabile.
- **Nessuna dichiarazione esplicita di ciò per cui una dashboard non va usata:** invita
  alla deriva valutativa da cui questo libro mette in guardia in tutto il suo
  svolgimento.
- **Copertura completa dei riquadri anziché una cura mirata e guidata dalle
  decisioni:** produce affaticamento da dashboard e seppellisce ciò che conta davvero.

## Modello di maturità

- **Livello 1, Avvio (Initiate):** Un'unica dashboard non curata, se c'è, serve male
  tutti i pubblici, senza standard di visualizzazione onesta né abbinamento ai
  guardrail.
- **Livello 2, Sviluppo (Develop):** Esistono alcune viste specifiche per pubblico, ma
  gli standard di visualizzazione sono incoerenti e la responsabilità non è chiara.
- **Livello 3, Standardizzazione (Standardize):** Dashboard specifiche per pubblico con
  standard di visualizzazione onesta coerenti e abbinamento ai guardrail sono stabilite
  in tutta l'organizzazione, ciascuna con un responsabile con nome.
- **Livello 4, Gestione (Manage):** Le dashboard sono riesaminate con cadenza regolare,
  con dichiarazioni esplicite di non uso per la valutazione dove rilevante, e i
  riquadri obsoleti sono sfoltiti attivamente.
- **Livello 5, Orchestrazione (Orchestrate):** La pratica di progettazione delle
  dashboard dell'organizzazione è una capacità affidabile e ben governata, e
  l'organizzazione sa indicare casi specifici in cui dashboard oneste e ben progettate
  hanno riparato o costruito la fiducia degli stakeholder.

## Spunti di discussione

1. Chi è il pubblico primario effettivo della nostra attuale dashboard, rispetto a quello previsto?
2. Qualcuna delle nostre dashboard separa una metrica dal suo guardrail?
3. I nostri grafici attuali supererebbero una verifica di visualizzazione onesta?
4. Ogni dashboard che manteniamo ha un responsabile chiaramente nominato e responsabile?
5. Che aspetto avrebbe una riprogettazione da zero delle nostre dashboard che parta dal pubblico?

## Punti chiave

- Progetta **dashboard specifiche per pubblico** per decisioni specifiche, non un
  unico manufatto completo che cerca di servire tutti.
- Applica **standard di visualizzazione onesta** (argomento 1.6) come requisiti rigidi:
  assi che partono da zero, trend anziché istantanea, mediane anziché medie per i dati
  asimmetrici.
- **Non separare mai una metrica incentivata dal suo guardrail** su viste diverse;
  tieni le coppie di guardrail sulla stessa dashboard.
- Assegna un **responsabile con nome e una cadenza di revisione** a ogni dashboard,
  esattamente come l'argomento 1.4 richiede per qualsiasi metrica governata.
- Dichiara esplicitamente **per che cosa una dashboard non vada usata**, in particolare
  dove dati di attività o di carico operativo potrebbero essere usati male per la
  valutazione individuale.

## Riferimenti e letture di approfondimento

- *The Visual Display of Quantitative Information*, di Edward R. Tufte (il testo
  fondativo sulla visualizzazione onesta e ad alta integrità dei dati).
- *Storytelling with Data*, di Cole Nussbaumer Knaflic (progettazione pratica di
  dashboard e grafici per pubblici di business).
- *Information Dashboard Design*, di Stephen Few (principi di progettazione specifici
  per le dashboard, per una comunicazione efficace e onesta).
- *Accelerate: The Science of Lean Software and DevOps*, di Nicole Forsgren, Jez
  Humble e Gene Kim (la disciplina di abbinamento delle metriche che questo argomento
  applica direttamente all'impaginazione delle dashboard).
