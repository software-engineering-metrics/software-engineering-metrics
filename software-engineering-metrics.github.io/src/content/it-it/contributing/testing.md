# Test: la suite di convalida

## Eseguirla

```sh
just test
# oppure
python3 tests/validate.py
```

Si esegue da qualsiasi posto e richiede solo Python 3 (nessun pacchetto di terze parti,
nessuna rete). Stampa una riga per controllo e termina con un codice diverso da zero se
un controllo fallisce, quindi funziona nella CI e come hook pre-commit.

## Che cosa controlla

- **Il numero atteso di argomenti** (la costante all'inizio dello script).
- **La numerazione contigua** all'interno di ogni parte, a partire da N.0.
- **Che l'H1 corrisponda al nome del file** per il numero decimale di ogni argomento.
- **Che i titoli H1 corrispondano a `spec/structure.md`** carattere per carattere, non
  solo il numero decimale iniziale.
- **Che le sezioni richieste siano presenti** in ogni argomento di contenuto (Parti dalla
  1 alla 8, argomento N.1 e oltre), **esattamente nell'ordine del modello**.
- **Un numero minimo di parole** per ogni argomento di contenuto (1.500 parole), con
  un elenco di eccezioni nello script per le deroghe intenzionali.
- **Nessun trattino lungo** in alcun file Markdown.
- **Trattini medi solo tra cifre**, così che «2.1–2.8» passa e tutto il resto fallisce.
- **Nessuna formula vietata** («not only», «but also», «load-bearing»).
- **Che tutti i collegamenti interni `.md` si risolvano.**
- **Che i rimandi nella prosa puntino ad argomenti reali**: un riferimento a un numero di
  argomento senza un file corrispondente su disco fallisce, usando lo stesso schema di
  riferimento usato dal collegamento automatico degli argomenti del sito pubblicato.
- **Che i collegamenti a Wikipedia siano ben formati** (`https://en.wikipedia.org/wiki/...`).
- **Che `spec/structure.md` corrisponda ai file su disco**, in entrambe le direzioni.
- **Che il README, la pagina iniziale e la pagina dei contenuti colleghino ogni
  argomento.**

## Quando un controllo fallisce

La riga che fallisce nomina il file e il problema. Correzioni comuni:

- Trattino lungo trovato: riformula la frase per eliminare il «—». Non limitarti a
  cancellarlo.
- Sezione mancante: aggiungi la sezione `##` mancante dal modello di argomento.
- Discrepanza di struttura: hai aggiunto o rinominato un argomento senza aggiornare
  `spec/structure.md`, o viceversa. Riallinea i due.
- Collegamento rotto: correggi il percorso, o aggiornalo dopo una ridenominazione.
- Buco di numerazione: rinumera in modo che la parte sia contigua da N.0.

## Oltre la suite di convalida

- `just spell` esegue [codespell](https://github.com/codespell-project/codespell) sul
  repository. La configurazione, incluso l'elenco di falsi positivi da ignorare, è la
  sezione `[tool.codespell]` in `pyproject.toml`.
- `just stats` stampa un rapporto Markdown (conteggi di parole per argomento, argomenti
  scarni, collegamenti a Wikipedia, voci di riferimento) da `tools/stats.py`.

## Integrazione continua

- `.github/workflows/test.yml` viene eseguito a ogni pull request e a ogni push sui
  branch diversi da main: la suite di convalida e codespell. Questo repository non
  costruisce né pubblica un sito; il rendering avviene nel repository separato
  `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` controlla ogni settimana i collegamenti esterni con
  [lychee](https://github.com/lycheeverse/lychee) (schemi da ignorare in
  `.lycheeignore`) e conserva i risultati in un'unica segnalazione «Link checker
  report». I collegamenti esterni restano fuori dal percorso delle PR di proposito.

## Non coperto dai test

La suite controlla struttura e stile, non la verità. Non può dire se un riferimento sia
reale né se la prosa sia accurata. Verifica citazioni e fatti a mano o con un passaggio
di ricerca. Anche l'esistenza dei collegamenti a Wikipedia (in contrapposizione alla loro
forma) richiede un controllo di rete, che la suite lascia deliberatamente fuori così da
poter funzionare offline.
