# Esempio: specifica di dashboard per una dashboard di metriche di consegna

Una specifica di dashboard svolta, secondo l'[argomento 8.1, Progettare una dashboard di
metriche di ingegneria](../chapters/08-01-progettare-una-dashboard-di-metriche-di-ingegneria.md).
Il punto è la forma: un pubblico nominato, un piccolo numero di riquadri, uno standard
di visualizzazione onesta e una cadenza di aggiornamento dichiarata.

## Pubblico

La dirigenza di ingegneria e il team di piattaforma, riesaminata nella revisione
bisettimanale della consegna. Non è destinata alla valutazione delle prestazioni
individuali.

## Riquadri (in ordine di visualizzazione)

1. **Frequenza di rilascio**, ultime 4 settimane, per team. Grafico a linee, intervalli
   settimanali, l'asse parte da zero.
2. **Lead time dei cambiamenti**, mediana e 90° percentile, ultime 4 settimane.
   Grafico a barre con entrambe le serie mostrate, non solo la mediana.
3. **Tasso di fallimento dei cambiamenti**, ultime 4 settimane, con la definizione
   concordata dal team di «fallimento» collegata dal riquadro.
4. **Tempo di ripristino dopo un rilascio fallito**, mediana, ultime 4 settimane.
5. **Error budget residuo**, trimestre corrente, per servizio, in percentuale.

## Regole di visualizzazione

- Ogni grafico di trend mostra almeno otto punti dati, mai una singola istantanea.
- Gli assi partono da zero salvo che sia documentata un'eccezione dichiarata sul
  riquadro.
- Rilasci, incidenti e festività sono annotati sulla linea del tempo così che chi legge
  possa distinguere uno spostamento reale dal rumore.
- Niente doppi assi, niente effetti 3D, niente intervalli di date scelti ad arte.

## Cadenza di aggiornamento

I riquadri alimentati dalla pipeline (frequenza di rilascio, lead time) si aggiornano
ogni ora. I riquadri alimentati dagli incidenti (tasso di fallimento dei cambiamenti,
tempo di ripristino) si aggiornano alla chiusura del postmortem. La dashboard indica
essa stessa l'ora dell'ultimo aggiornamento.

## Che cosa questa dashboard esclude deliberatamente

Conteggi di commit individuali, conteggi di pull request individuali e righe di codice.
Sono metriche di attività con una storia ben documentata di manipolazione e di misura
dello sforzo anziché del risultato (argomento 3.4).
