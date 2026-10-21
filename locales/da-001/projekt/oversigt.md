# Om dette projekt

Projektdokumentation til bogen: hvordan den er sat sammen, hvordan den bygges og kontrolleres, og hvor den autoritative kilde findes. For selve bogen, se [indholdsfortegnelsen](../index.md).

## Kort over projektet

- **Bogen:** udgivet i fire lokaliteter under `locales/`; se [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md). Denne lokalitet, `en-gb-oxendict/topics/` (63 filer), `en-gb-oxendict/front-matter/` og bilagene i del 9 er den håndskrevne kilde; `en-001`, `en-gb` og `en-us` udledes af den.
- **Autoritativ kilde:** `spec/` i repositoriets rod (ikke udgivet på sitet). Strukturen er erklæret i `spec/structure.md`, skrivereglerne i `spec/conventions.md` og stavningen i `spec/oxford-spelling.md`. Alt andet bygges, så det passer.
- **Værktøj:** `tools/localize.py` udleder de tre andre lokaliteter; `tools/gen_nav.py` genererer navigationen; `tests/validate.py` håndhæver specifikationen; `justfile` binder dem sammen.
- **Vejledning til bidragydere:** [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) i repositoriets rod og vejledningerne i [afsnittet om bidrag](../bidrag/oversigt.md).

## Byg og kontrollér

Valideringssuiten kører på Python 3 uden andre afhængigheder og uden netværksadgang. Opgaver køres via [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Dette repositorium rummer bogens indhold og specifikation. Det gengives som en hjemmeside af det separate repositorium [`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Sådan virker specifikationsdrevet udvikling her

Specifikationen kommer først. `spec/structure.md` siger, hvilke emner der findes, og hvordan de er nummereret. `spec/conventions.md` siger, hvordan de skal skrives. Emnerne forfattes, så de opfylder begge. `tools/gen_nav.py` udleder navigationen fra emnerne, og `tests/validate.py` kontrollerer resultatet mod specifikationen. Hvis emnerne og specifikationen nogensinde er uenige, fejler testene, hvilket er signalet til at bringe dem i overensstemmelse igen.

Det holder afdrift ude: en ændring er først "færdig", når specifikationen, emnerne, den genererede navigation og testene alle er enige.

## Designbeslutninger, det er værd at kende

- **Flade emner med decimalnummerering.** Filerne er `locales/<locale>/topics/PP-CC-slug.md`, med samme slug i hver lokalitet. Delen er et helt tal; emnet er et decimaltal; N.0 er delintroduktionen. Det giver stabile identifikatorer og lader værktøjer sortere og gruppere uden et mappetræ.
- **Én håndskrevet lokalitet, tre afledte.** `en-gb-oxendict` er Oxford-stavning, husstilen hos de fleste internationale standardiseringsorganer (se `spec/oxford-spelling.md`); `en-001`, `en-gb` og `en-us` udledes mekanisk af den, så oversættelsen aldrig driver fra kilden.
- **Genereret navigation.** Indholdsfortegnelsen, indholdssiden og emneindekset genereres, så de aldrig driver fra emnerne.
- **Offline test uden afhængigheder.** Suiten bruger kun standardbiblioteket, så den kan køre overalt, også i CI og pre-commit-hooks.
- **Krydshenvisninger forbliver ren tekst.** Brødteksten henviser til emner med decimaltal ("se emne 2.1"), som specifikationen kræver; det gengivende site har ansvaret for at gøre de henvisninger til links.
- **Ingen tankestreger, efter regel og efter test.** Et bevidst stilvalg, der håndhæves, så det forbliver sandt, efterhånden som bogen vokser.
- **Hver metrikfamilie navngiver sin egen manipulationsvektor.** Det er den ene regel i skabelonen, der ikke har nogen modsvarighed i søsterprojektet `software-engineering-guide`: den findes, fordi hele denne bogs emne er måling, så selve risikoen ved måling skal være førsteklasses og ikke underforstået.

## Videre læsning

- [Forfatterskab](../bidrag/forfatterskab.md) : at skrive og redigere emner.
- [Navigation](../bidrag/navigation.md) : sådan virker de genererede filer.
- [Test](../bidrag/test.md) : hvad testene kontrollerer, og hvordan fejl rettes.
- [Eksempler](../eksempler/oversigt.md) : små, konkrete eksempler.
- [Ændringslog](ændringslog.md) : historik over væsentlige ændringer.
