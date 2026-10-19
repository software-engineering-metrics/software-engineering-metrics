# Informazioni su questo progetto

Documentazione del progetto per il libro: come è messo insieme, come costruirlo e
controllarlo, e dove vive la fonte di verità. Per il libro stesso, vedi il
[sommario](../index.md).

## Mappa del progetto

- **Il libro:** pubblicato in più locale sotto `locales/`; vedi
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Il locale `en-gb-oxendict/topics/` (63 file), `en-gb-oxendict/front-matter/` e le
  appendici della Parte 9 sono la fonte scritta a mano; `en-001`, `en-gb` e `en-us` ne
  sono derivati.
- **Fonte di verità:** `spec/` nella radice del repository (non pubblicata sul sito). La
  struttura è dichiarata in `spec/structure.md`, le regole di scrittura in
  `spec/conventions.md` e l'ortografia in `spec/oxford-spelling.md`. Tutto il resto è
  costruito per corrispondere.
- **Strumenti:** `tools/localize.py` deriva gli altri tre locale; `tools/gen_nav.py`
  genera la navigazione; `tests/validate.py` impone la specifica; il `justfile` li
  collega.
- **Guida per chi contribuisce:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  nella radice del repository, e le guide nella [sezione per
  contribuire](../contribuire/contribuire.md).

## Costruire e controllare

La suite di convalida gira su Python 3 senza altre dipendenze e senza accesso alla rete.
Le attività si eseguono tramite [just](https://github.com/casey/just).

```sh
just test    # convalida struttura, stile, collegamenti e specifica rispetto al disco
just nav     # rigenera i file di navigazione generati
just check   # nav, poi test
just stats   # conteggi di argomenti e parole
```

Questo repository contiene il contenuto e la specifica del libro. Viene trasformato in un
sito web dal repository separato
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Come funziona qui lo sviluppo guidato dalla specifica

La specifica viene prima. `spec/structure.md` dice quali argomenti esistono e come sono
numerati. `spec/conventions.md` dice come devono essere scritti. Gli argomenti sono
redatti per soddisfare entrambi. `tools/gen_nav.py` ricava la navigazione dagli
argomenti, e `tests/validate.py` ricontrolla il risultato rispetto alla specifica. Se
argomenti e specifica sono mai in disaccordo, i test falliscono, il che è il segnale
per riportarli in linea.

Questo tiene lontana la deriva: una modifica è «finita» solo quando specifica, argomenti,
navigazione generata e test concordano tutti.

## Decisioni di progetto che vale la pena conoscere

- **Argomenti piatti, numerati in decimale.** I file sono
  `locales/<locale>/topics/PP-CC-slug.md`, con lo stesso slug in ogni locale. La parte
  è un numero intero; l'argomento è un decimale; N.0 è l'introduzione della parte.
  Questo mantiene identificatori stabili e permette agli strumenti di ordinare e
  raggruppare senza un albero di cartelle.
- **Un locale scritto a mano, tre derivati.** `en-gb-oxendict` usa l'ortografia
  oxfordiana, lo stile della casa della maggior parte degli enti internazionali di
  normazione (vedi `spec/oxford-spelling.md`); `en-001`, `en-gb` e `en-us` sono derivati
  meccanicamente da esso, così che la traduzione non si allontani mai dalla fonte.
- **Navigazione generata.** Il sommario, la pagina dei contenuti e l'indice analitico
  sono generati, così che non si allontanino mai dagli argomenti.
- **Test offline e senza dipendenze.** La suite usa solo la libreria standard, quindi
  gira ovunque, incluse la CI e gli hook pre-commit.
- **I rimandi restano testo semplice.** La prosa rimanda agli argomenti per numero
  decimale («vedi l'argomento 2.1»), come richiede la specifica; il sito di
  visualizzazione ha il compito di trasformare quei rimandi in collegamenti.
- **Niente trattini lunghi, per regola e per test.** Una scelta di stile deliberata,
  imposta perché resti vera man mano che il libro cresce.
- **Ogni famiglia di metriche nomina il proprio vettore di manipolazione.** È l'unica
  regola del modello che non ha equivalente nel progetto gemello
  `software-engineering-guide`: esiste perché l'intero argomento di questo libro è la
  misurazione, quindi il rischio della misurazione stessa deve essere di prima classe, non
  implicito.

## Letture di approfondimento

- [Redazione](../contribuire/redazione-scrivere-e-modificare-argomenti.md) : scrivere e
  modificare gli argomenti.
- [Navigazione](../contribuire/navigazione-come-funzionano-i-file-generati.md) : come
  funzionano i file generati.
- [Test](../contribuire/test-la-suite-di-convalida.md) : che cosa controllano i test e
  come correggere i fallimenti.
- [Esempi](../esempi/esempi.md) : esempi piccoli e concreti.
- [Registro delle modifiche](registro-delle-modifiche.md) : storia delle modifiche
  notevoli.
