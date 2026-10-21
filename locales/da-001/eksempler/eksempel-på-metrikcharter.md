# Eksempel: metrikcharter for et platformsteam for betalinger

Et gennemarbejdet eksempel på et metrikcharter, den slags etsides dokument der beskrives i [emne 1.4, Metrikstyring og ejerskab](../emner/01-04-metrikstyring-og-ejerskab.md). Pointen er formen: et angivet formål, et eksplicit ikke-mål, navngivne ejere og en gennemgangsrytme. Et charter, der er så kort, er beregnet til at blive læst, ikke arkiveret.

- **Team:** Platform for betalinger
- **Ejer:** Platformsingeniørchef
- **Gennemgås:** Kvartalsvis, ved platformsgennemgangen

## Formål

Dette charter styrer de metrikker, som betalingsplatformens team følger om sin egen levering og driftssikkerhed. Det findes, så alle, både inden for og uden for teamet, kan se, hvad der måles, hvorfor, og hvad det ikke skal bruges til.

## Hvad vi følger

| Metrik | Autoritativ kilde | Ejer |
| --- | --- | --- |
| Udrulningsfrekvens | CI/CD-pipeline | Platformsleder |
| Gennemløbstid for ændringer | Git plus udrulningspipeline | Platformsleder |
| Andel af ændringer, der fejler | Hændelsessystem, mærket pr. udrulning | Leder af vagtberedskab |
| Genoprettelsestid efter mislykket udrulning | Hændelsessystem | Leder af vagtberedskab |
| P99 API-latenstid (SLI) | Observerbarhedsplatform | SRE-leder |
| Forbrug af fejlbudget | Observerbarhedsplatform | SRE-leder |

## Ikke-mål

Disse metrikker bruges aldrig, hverken enkeltvis eller samlet, til at rangordne ingeniører, vurdere præstationssamtaler eller sammenligne dette team med et andet teams køreplan uden også at sammenligne omfang, bemanding og systemets modenhed. Enhver anvendelse uden for det formål, der er angivet ovenfor, kræver godkendelse fra ingeniørdirektøren og selve teamet.

## Værn

Hver metrik ovenfor, der er forbundet med et incitament, er parret med et værn. Gennemløbstid for ændringer overvåges sammen med andelen af ændringer, der fejler, så et team ikke kan forbedre sit hastighedstal ved at levere mere risikable ændringer. Udrulningsfrekvens overvåges sammen med forbruget af fejlbudget af samme grund.

## Gennemgangsrytme

Teamet gennemgår dette charter hvert kvartal. En metrik, der ikke har ændret en beslutning i to på hinanden følgende kvartaler, er en kandidat til pensionering.
