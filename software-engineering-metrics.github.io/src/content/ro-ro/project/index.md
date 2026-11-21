# Despre acest proiect

Documentația proiectului pentru carte: cum este alcătuită, cum se construiește și se verifică și unde se află sursa de adevăr. Pentru cartea însăși, vezi [cuprinsul](../index.md).

## Harta proiectului

- **Cartea:** publicată în patru locale sub `locales/`; vezi [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md). Acest locale, `en-gb-oxendict/topics/` (63 de fișiere), `en-gb-oxendict/front-matter/` și anexele din Partea 9 sunt sursa scrisă manual; `en-001`, `en-gb` și `en-us` sunt derivate din ea.
- **Sursa de adevăr:** `spec/` din rădăcina depozitului (nepublicat pe site). Structura este declarată în `spec/structure.md`, regulile de scriere în `spec/conventions.md`, iar ortografia în `spec/oxford-spelling.md`. Tot restul este construit să se potrivească.
- **Unelte:** `tools/localize.py` derivă celelalte trei locale; `tools/gen_nav.py` generează navigarea; `tests/validate.py` impune specificația; `justfile` le leagă între ele.
- **Îndrumări pentru contribuitori:** [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md) din rădăcina depozitului și ghidurile din [secțiunea de contribuții](../contributing/index.md).

## Construire și verificare

Suita de validare rulează pe Python 3, fără alte dependențe și fără acces la rețea. Sarcinile rulează prin [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Acest depozit conține conținutul cărții și specificația ei. Este transformat într-un site web de depozitul separat [`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Cum funcționează dezvoltarea ghidată de specificații aici

Specificația vine prima. `spec/structure.md` spune ce subiecte există și cum sunt numerotate. `spec/conventions.md` spune cum trebuie scrise. Subiectele sunt redactate ca să satisfacă ambele. `tools/gen_nav.py` derivă navigarea din subiecte, iar `tests/validate.py` verifică rezultatul față de specificație. Dacă subiectele și specificația nu se mai potrivesc, testele eșuează, ceea ce este semnalul să le readuci la un loc.

Asta ține deriva departe: o modificare este „gata” numai când specificația, subiectele, navigarea generată și testele sunt toate de acord.

## Decizii de proiectare care merită știute

- **Subiecte plate, numerotate zecimal.** Fișierele sunt `locales/<locale>/topics/PP-CC-slug.md`, cu același slug în fiecare locale. Partea este un număr întreg; subiectul este un număr zecimal; N.0 este introducerea părții. Asta păstrează identificatori stabili și lasă uneltele să sorteze și să grupeze fără un arbore de directoare.
- **Un locale scris manual, trei derivate.** `en-gb-oxendict` folosește ortografia Oxford, stilul casei al celor mai multe organisme internaționale de standardizare (vezi `spec/oxford-spelling.md`); `en-001`, `en-gb` și `en-us` sunt derivate mecanic din el, deci traducerea nu se abate niciodată de la sursă.
- **Navigare generată.** Cuprinsul, pagina de cuprins și indexul de subiecte sunt generate, deci nu se abat niciodată de la subiecte.
- **Teste offline, fără dependențe.** Suita folosește doar biblioteca standard, deci rulează oriunde, inclusiv în CI și în hook-uri de pre-commit.
- **Trimiterile încrucișate rămân text simplu.** Proza trimite la subiecte prin număr zecimal („vezi subiectul 2.1”), așa cum cere specificația; site-ul de redare răspunde de transformarea acestor trimiteri în linkuri.
- **Fără linii lungi, prin regulă și prin test.** O alegere deliberată de stil, impusă ca să rămână adevărată pe măsură ce cartea crește.
- **Fiecare familie de metrici își numește propriul vector de manipulare.** Este singura regulă din șablon care nu are echivalent în proiectul-soră `software-engineering-guide`: există pentru că tot subiectul acestei cărți este măsurarea, deci riscul măsurării trebuie să fie de prim rang, nu implicit.

## Lecturi suplimentare

- [Scrierea](../contributing/authoring.md) : redactarea și editarea subiectelor.
- [Navigarea](../contributing/navigation.md) : cum funcționează fișierele generate.
- [Testarea](../contributing/testing.md) : ce verifică testele și cum remediezi eșecurile.
- [Exemple](../examples/index.md) : exemple mici și concrete.
- [Jurnal de modificări](changelog.md) : istoricul modificărilor notabile.
