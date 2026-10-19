# Navigazione: come funzionano i file generati

Per ogni locale, quattro manufatti di navigazione sono generati dagli argomenti di quel
locale, non scritti a mano (più `README.md`, generato una sola volta per il locale di
riferimento, `en-gb-oxendict`):

- `README.md` (il sommario della pagina iniziale del repository; solo per il locale di riferimento)
- `locales/<locale>/index.md` (la pagina iniziale del sito pubblicato)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (l'indice analitico, con i collegamenti)

Sono prodotti da
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Non modificarli a mano, perché la generazione successiva sovrascriverà la tua modifica.

## Quando rigenerare

Esegui `just nav` (oppure `python3 tools/gen_nav.py`) ogni volta che:

- aggiungi, rimuovi, rinomini o rinumeri un argomento, oppure
- cambi il titolo `# N.M Titolo` di un argomento (il sommario lo usa).

Esegui prima `python3 tools/localize.py` se hai cambiato qualcosa sotto
`locales/en-gb-oxendict/`, così che gli argomenti degli altri tre locale (e i loro titoli
generati) siano aggiornati prima che `gen_nav.py` li legga; vedi
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Come funziona

Per ogni locale, `gen_nav.py` legge ogni file `locales/<locale>/topics/*.md`, ordina per
numero decimale, raggruppa per parte e:

- costruisce il sommario parte per parte dal titolo H1 di ciascun argomento,
- lo scrive in `locales/<locale>/index.md` e in
  `locales/<locale>/front-matter/table-of-contents.md` (e, solo per il locale di
  riferimento, in `README.md`),
- scandaglia gli argomenti sostanziali (Parti dalla 1 alla 8) alla ricerca di un elenco
  fisso di termini chiave e scrive l'indice analitico in
  `locales/<locale>/topics/09-07-index.md`.

Il testo standard condiviso (il paragrafo introduttivo, «Come leggere questo libro»,
«Temi trasversali» e i titoli delle parti) è localizzato nello stesso modo della prosa
degli argomenti, tramite le funzioni di locale di `tools/localize.py`, così che le pagine
generate si leggano in modo naturale in ciascun locale.

I titoli delle parti stanno nel dizionario `PART_TITLES` vicino all'inizio dello script.
Il generatore usa intestazioni di parte in stile con i due punti («Parte 2: Metriche di
consegna e di flusso»), mai trattini lunghi.

## Che cosa non tocca

La specifica nella radice del repository (`spec/index.md`, `spec/structure.md` e le sue
compagne) è la fonte di verità scritta a mano. Il generatore non la scrive e non fa
parte del sito pubblicato. Se cambi la struttura, aggiorna tu stesso `spec/structure.md`,
poi esegui `just nav` per i file derivati e `just test` per confermare che tutto
quadri.
