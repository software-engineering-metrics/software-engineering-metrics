# 9.4 Șabloane

Șabloane de copiat pentru documente recurente. Exemple lucrate și completate
pentru primele două se găsesc în [`docs/examples/`](../exemple/prezentare-generala.md).

## Șablon de cartă a metricilor

```markdown
# Cartă a metricilor: [numele echipei sau al setului de metrici]

- **Echipa:** [echipa responsabilă]
- **Responsabil:** [persoană sau rol numit]
- **Revizuit:** [ritm, de exemplu trimestrial]

## Scop

[Una sau două propoziții: ce guvernează această cartă și de ce.]

## Ce urmărim

| Metrică | Sursă de adevăr | Responsabil |
| --- | --- | --- |
| [metrică] | [sistem] | [responsabil numit] |

## Non-obiective

[Declarație explicită despre ce nu sunt folosite aceste metrici, de exemplu
evaluarea individuală a performanței, clasamentul între echipe fără context.]

## Gărzi de protecție

[Pentru fiecare metrică stimulată, numește garda ei de protecție asociată și ce
tipar de manipulare prinde.]

## Ritm de revizuire

[Când și cum este reluată această cartă; ce declanșează retragerea unei
metrici.]
```

## Șablon de specificație a unui tablou de bord

```markdown
# Specificația tabloului de bord: [numele tabloului de bord]

## Audiență

[Pentru cine este acest tablou de bord și ce decizie informează. Precizează
explicit dacă nu este pentru evaluarea individuală.]

## Tile (în ordinea afișării)

1. **[Numele metricii]**, [fereastră de timp], [tip de grafic]. [Orice note
   specifice de vizualizare: reguli pentru axe, adnotări.]
2. ...

## Reguli de vizualizare

- Axele încep de la zero, cu excepția cazului în care se precizează altfel, iar
  excepția este documentată pe tilă.
- [Orice alte reguli de onestitate specifice proiectului.]

## Ritm de actualizare

[Cât de des se actualizează fiecare tilă și din ce sursă.]

## Ce exclude în mod deliberat acest tablou de bord

[Numește tot ce a fost lăsat intenționat deoparte și de ce, de exemplu
numărătorile individuale de activitate.]
```

## Șablon de agendă pentru ședința de revizuire a metricilor

```markdown
# Revizuirea metricilor: [data]

## Participanți

[Nume și roluri]

## Metrici revizuite

Pentru fiecare metrică:
- Citirea curentă și tendința
- Orice mișcare în afara variației normale (subiectul 1.6)
- Starea gărzii de protecție asociate, dacă este cazul
- Decizia pe care o informează această citire, dacă există

## Metrici noi propuse

[Parcurge fiecare metrică prin lista de verificare pentru revizuirea unei
metrici noi, subiectul 9.3.]

## Metrici luate în considerare pentru retragere

[Care metrici nu au informat nicio decizie în ultimele două cicluri?]

## Acțiuni ulterioare

| Element | Responsabil | Termen |
| --- | --- | --- |
| | | |
```

## Șablon de analiză post-incident fără vinovați

```markdown
# Analiză post-incident: [numele incidentului], [data]

## Rezumat

[Un paragraf: ce s-a întâmplat, impactul asupra utilizatorilor, durata.]

## Cronologie

- Detectare: [ora, cum a fost detectat]
- Confirmare: [ora, cine a răspuns]
- Rezolvare: [ora, ce a remediat problema]

## Severitate

[Clasificare după criterii documentate, subiectul 6.2.]

## Cauza de fond

[Ce a permis să se întâmple, formulat ca întrebare despre sistem, nu despre o
persoană.]

## Ce a mers bine

[Lucruri specifice care au funcționat în răspuns.]

## Acțiuni ulterioare

| Element | Responsabil | Termen |
| --- | --- | --- |
| | | |

## Urmărire

[Confirmarea că acțiunile au fost urmărite până la finalizare, în ciclul
următor de revizuire.]
```

## Șablon de argument ROI

```markdown
# Argument ROI: [numele inițiativei]

## Cost (costul total de proprietate, subiectul 5.5)

- Inițial: [costul de dezvoltare]
- Continuu: [întreținere, infrastructură, suport, pe an]
- Cost de oportunitate: [ce altceva ar fi putut face această capacitate]

## Beneficiu (dovezi documentate, subiectele 5.1–5.3)

- [Beneficiul 1], dovedit de [sursa de date]
- [Beneficiul 2], dovedit de [sursa de date]

## Interval și ipoteze

- Caz conservator: [cifră]
- Caz optimist: [cifră]
- Ipoteza-cheie care determină intervalul: [numește-o]

## Factori de confuzie luați în considerare și excluși

[Ce altceva ar putea explica beneficiul proiectat și de ce a fost exclus sau
luat în calcul.]

## Verificare după finalizare (completează după încheierea inițiativei)

- Rezultatul real: [cifră]
- Comparat cu intervalul proiectat: [peste / în interior / sub]
- Ce ne învață asta pentru următoarea estimare: [notă]
```
