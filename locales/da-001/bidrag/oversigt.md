# Bidrag

Tak, fordi du hjælper med at forbedre denne bog. Bidrag i alle størrelser er velkomne, fra at rette en tastefejl til at skrive et nyt emne.

## Grundregler

Bogen følger en streng husstil. Det væsentlige:

- Ingen tankestreger (em-dashes). Brug komma, kolon, parentes eller to sætninger.
- Ingen stereotype vendinger ("not only ... but also", "load-bearing" og lignende).
- Varm, jævn, direkte skrivning. Tiltal læseren som "du". Korte sætninger.
- Definér begreber ved første brug. Link nøglebegreber til Wikipedia ved første omtale.
- Kun rigtige kilder.
- Hvert emne om en metrikfamilie navngiver sin manipulationsvektor og sit værn.

De fulde regler står i `spec/conventions.md` i repositoriets rod, og den korte version er [stilreglerne](stilregler.md). Testene håndhæver de mekaniske dele.

## Opsætning

Du skal bruge Python 3 og [just](https://github.com/casey/just). Dette repositorium rummer bogens indhold og specifikation samt SvelteKit-sitet (`software-engineering-metrics.github.io/`), der gengiver det som den udgivne hjemmeside.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Sådan foretager du en ændring

1. Læs den relevante vejledning: [forfatterskab](forfatterskab.md) for emner, [navigation](navigation.md) for de genererede filer og [test](test.md) for testene.
2. Foretag den mindste ændring, der gør arbejdet.
3. Hvis du har tilføjet, fjernet, omdøbt eller omnummereret et emne, så opdatér `spec/structure.md` i repositoriets rod og kør `just nav`.
4. Kør `just test`. Den skal bestå.
5. Tilføj en enkelt linje til [ændringsloggen](../projekt/ændringslog.md) under **Unreleased**.

## Hvad du kan arbejde med

- Ret fejl, uklare passager eller forældede henvisninger.
- Forbedr eksempler, især konkrete eksempler fra store virksomheder og det offentlige.
- Kontrollér citater mod rigtige kilder.
- Udfyld huller i et emnes dækning uden at bryde skabelonen.

## Hvad du skal undgå

- Redigér ikke de genererede filer i hånden (`README.md`, hver lokalitets `index.md`, `front-matter/table-of-contents.md` og `topics/09-07-index.md`). Ændr emnerne og kør i stedet `just nav`.
- Redigér ikke `en-001`, `en-gb` eller `en-us` direkte; de udledes af `en-gb-oxendict` med `tools/localize.py`.
- Tilføj ikke et emne uden også at opdatere `spec/structure.md`.
- Indfør ikke tankestreger eller de forbudte vendinger; testene vil fejle.

## Indberetning af problemer

Opret en sag, der beskriver problemet, filen og emnet og, hvor det er relevant, den rette kilde eller henvisning. Små, specifikke indberetninger er lettest at handle på.
