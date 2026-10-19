# Contribuire

Grazie per aiutare a migliorare questo libro. Sono benvenuti contributi di ogni
dimensione, dalla correzione di un refuso alla scrittura di un nuovo argomento.

## Regole di base

Il libro segue uno stile della casa rigoroso. L'essenziale:

- Niente trattini lunghi (em-dash). Usa una virgola, i due punti, le parentesi o due
  frasi.
- Niente formule fatte («non solo ... ma anche», «load-bearing» e simili).
- Scrittura calda, semplice, diretta. Rivolgiti a chi legge dandogli del «tu». Frasi
  brevi.
- Definisci i termini al primo uso. Collega i concetti chiave a Wikipedia alla prima
  menzione.
- Solo riferimenti reali.
- Ogni argomento su una famiglia di metriche nomina il proprio vettore di manipolazione e
  il proprio guardrail.

Le regole complete sono in `spec/conventions.md` nella radice del repository, e la
versione breve sono le [regole di stile](style-rules.md). I test impongono le parti
meccaniche.

## Configurazione

Servono Python 3 e [just](https://github.com/casey/just). Questo repository contiene il
contenuto e la specifica del libro, più il sito SvelteKit
(`software-engineering-metrics.github.io/`) che lo trasforma nel sito web pubblicato.

```sh
just         # elenca le attività
just test    # esegue la suite di convalida
just nav     # rigenera i file di navigazione generati
just stats   # conteggi di argomenti e parole
```

## Fare una modifica

1. Leggi la guida pertinente: [redazione](authoring.md)
   per gli argomenti, [navigazione](navigation.md) per i
   file generati, [test](testing.md) per i test.
2. Fai la modifica più piccola che svolga il compito.
3. Se hai aggiunto, rimosso, rinominato o rinumerato un argomento, aggiorna
   `spec/structure.md` nella radice del repository ed esegui `just nav`.
4. Esegui `just test`. Deve passare.
5. Aggiungi una voce di una riga al [registro delle modifiche](../project/changelog.md)
   sotto **Unreleased**.

## Su che cosa lavorare

- Correggi errori, passaggi poco chiari o riferimenti obsoleti.
- Migliora gli esempi, in particolare quelli concreti enterprise e del settore pubblico.
- Verifica le citazioni rispetto a fonti reali.
- Colma lacune nella copertura di un argomento senza rompere il modello.

## Che cosa evitare

- Non modificare a mano i file generati (`README.md`, l'`index.md` di ogni locale,
  `front-matter/table-of-contents.md` e `topics/09-07-index.md`). Cambia invece gli
  argomenti ed esegui `just nav`.
- Non modificare direttamente `en-001`, `en-gb` o `en-us`; sono derivati da
  `en-gb-oxendict` da `tools/localize.py`.
- Non aggiungere un argomento senza aggiornare anche `spec/structure.md`.
- Non introdurre trattini lunghi né le formule vietate; i test falliranno.

## Segnalare problemi

Apri una segnalazione che descriva il problema, il file e l'argomento e, dove rilevante,
la fonte o il riferimento corretto. Le segnalazioni piccole e specifiche sono le più
facili su cui agire.
