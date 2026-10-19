# 9.4 Modelli

Modelli da copiare e incollare per documenti ricorrenti. Esempi svolti e compilati dei
primi due si trovano in [`docs/examples/`](../esempi/esempi.md).

## Modello di carta delle metriche

```markdown
# Carta delle metriche: [nome del team o dell'insieme di metriche]

- **Team:** [team responsabile]
- **Responsabile:** [persona o ruolo con nome]
- **Revisione:** [cadenza, per esempio trimestrale]

## Scopo

[Una o due frasi: che cosa regola questa carta e perché.]

## Che cosa tracciamo

| Metrica | Fonte di verità | Responsabile |
| --- | --- | --- |
| [metrica] | [sistema] | [responsabile con nome] |

## Non-obiettivi

[Dichiarazione esplicita di ciò per cui queste metriche non vengono usate, per
esempio la valutazione delle prestazioni individuali, la classifica tra team senza
contesto.]

## Guardrail

[Per ogni metrica incentivata, indica il guardrail abbinato e quale schema di
manipolazione intercetta.]

## Cadenza di revisione

[Quando e come questa carta viene riesaminata; che cosa innesca il ritiro di una
metrica.]
```

## Modello di specifica di dashboard

```markdown
# Specifica di dashboard: [nome della dashboard]

## Pubblico

[A chi è destinata questa dashboard e quale decisione informa. Dichiara
esplicitamente se non è per la valutazione individuale.]

## Riquadri (in ordine di visualizzazione)

1. **[Nome della metrica]**, [finestra di tempo], [tipo di grafico]. [Eventuali note
   specifiche di visualizzazione: regole sugli assi, annotazioni.]
2. ...

## Regole di visualizzazione

- Gli assi partono da zero salvo diversa indicazione, con l'eccezione documentata sul
  riquadro.
- [Eventuali altre regole di onestà specifiche del progetto.]

## Cadenza di aggiornamento

[Con quale frequenza si aggiorna ciascun riquadro e da quale fonte.]

## Che cosa questa dashboard esclude deliberatamente

[Indica tutto ciò che è lasciato fuori di proposito, e perché, per esempio i conteggi
di attività individuali.]
```

## Modello di ordine del giorno per la riunione di revisione delle metriche

```markdown
# Revisione delle metriche: [data]

## Partecipanti

[Nomi e ruoli]

## Metriche riesaminate

Per ogni metrica:
- Lettura attuale e trend
- Eventuale movimento al di fuori della normale variazione (argomento 1.6)
- Stato del guardrail abbinato, se applicabile
- Decisione che questa lettura informa, se c'è

## Nuove metriche proposte

[Passa ciascuna attraverso la lista di controllo per la revisione di una nuova metrica,
argomento 9.3.]

## Metriche considerate per il ritiro

[Quali metriche non hanno informato una decisione negli ultimi due cicli?]

## Azioni

| Voce | Responsabile | Scadenza |
| --- | --- | --- |
| | | |
```

## Modello di postmortem senza colpa

```markdown
# Postmortem: [nome dell'incidente], [data]

## Sintesi

[Un paragrafo: che cosa è successo, impatto sugli utenti, durata.]

## Cronologia

- Rilevamento: [ora, come è stato rilevato]
- Presa in carico: [ora, chi ha risposto]
- Risoluzione: [ora, che cosa l'ha risolto]

## Gravità

[Classificazione rispetto a criteri documentati, argomento 6.2.]

## Causa radice

[Che cosa ha permesso che accadesse, impostato come domanda sul sistema, non su un
individuo.]

## Che cosa è andato bene

[Cose specifiche che hanno funzionato nella risposta.]

## Azioni

| Voce | Responsabile | Scadenza |
| --- | --- | --- |
| | | |

## Seguito

[Conferma che le azioni sono state tracciate fino al completamento, entro il ciclo di
revisione successivo.]
```

## Modello di caso di ROI

```markdown
# Caso di ROI: [nome dell'iniziativa]

## Costo (costo totale di proprietà, argomento 5.5)

- Iniziale: [costo di sviluppo]
- Continuo: [manutenzione, infrastruttura, supporto, all'anno]
- Costo opportunità: [che cos'altro avrebbe potuto fare questa capacità]

## Beneficio (prove documentate, argomenti 5.1-5.3)

- [Beneficio 1], dimostrato da [fonte dei dati]
- [Beneficio 2], dimostrato da [fonte dei dati]

## Intervallo e ipotesi

- Caso prudente: [cifra]
- Caso ottimistico: [cifra]
- Ipotesi chiave che guida l'intervallo: [nominala]

## Fattori di confondimento considerati ed esclusi

[Che cos'altro potrebbe spiegare il beneficio previsto, e perché è stato escluso o
tenuto in conto.]

## Verifica a posteriori (da compilare dopo il completamento dell'iniziativa)

- Risultato effettivo: [cifra]
- Rispetto all'intervallo previsto: [sopra / entro / sotto]
- Che cosa ci insegna per la prossima stima: [nota]
```
