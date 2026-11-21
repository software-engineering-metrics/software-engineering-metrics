# Testarea: suita de validare

## Rulează-o

```sh
just test
# or
python3 tests/validate.py
```

Rulează de oriunde și are nevoie doar de Python 3 (fără pachete externe, fără rețea). Afișează o linie pentru fiecare verificare și iese cu cod nenul dacă o verificare eșuează, deci funcționează în CI și ca hook de pre-commit.

## Ce verifică

- **Numărul așteptat de subiecte** (constanta din partea de sus a scriptului).
- **Numerotarea continuă** în fiecare parte, începând de la N.0.
- **H1 se potrivește cu numele fișierului** la numărul zecimal, pentru fiecare subiect.
- **Titlurile H1 se potrivesc cu `spec/structure.md`** caracter cu caracter, nu doar numărul de la început.
- **Secțiunile cerute** sunt prezente în fiecare subiect de conținut (Părțile 1 până la 8, subiectul N.1 și mai departe), **exact în ordinea șablonului**.
- **Un număr minim de cuvinte** pentru fiecare subiect de conținut (1 500 de cuvinte), cu o listă de excepții în script pentru excepții intenționate.
- **Fără linii lungi (em-dash)** în niciun fișier Markdown.
- **Liniuțe de tip en-dash doar între cifre**, deci „2.1–2.8” trece, iar orice altceva eșuează.
- **Fără formulări interzise** („not only”, „but also”, „load-bearing”).
- **Toate linkurile interne `.md` se rezolvă.**
- **Trimiterile încrucișate din proză indică subiecte reale**: o trimitere la un număr de subiect fără fișier corespunzător pe disc eșuează, folosind același tipar de trimitere ca legarea automată a subiectelor pe site-ul publicat.
- **Linkurile Wikipedia sunt bine formate** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` se potrivește cu fișierele de pe disc**, în ambele sensuri.
- **README, pagina de start și pagina de cuprins leagă fiecare subiect.**

## Când o verificare eșuează

Linia care eșuează numește fișierul și problema. Remedieri frecvente:

- Linie lungă găsită: reformulează propoziția ca să elimini linia lungă (U+2014). Nu o șterge pur și simplu.
- Secțiune lipsă: adaugă secțiunea `##` lipsă din șablonul de subiect.
- Nepotrivire de structură: ai adăugat sau redenumit un subiect fără a actualiza `spec/structure.md`, sau invers. Pune-le din nou de acord.
- Link rupt: corectează calea sau actualizează-o după o redenumire.
- Gol în numerotare: renumerotează ca partea să fie continuă de la N.0.

## Dincolo de suita de validare

- `just spell` rulează [codespell](https://github.com/codespell-project/codespell) peste depozit. Configurația, inclusiv lista de ignorare a fals-pozitivelor, este secțiunea `[tool.codespell]` din `pyproject.toml`.
- `just stats` afișează un raport Markdown (numărul de cuvinte pe subiect, subiecte subțiri, linkuri Wikipedia, intrări de referință) din `tools/stats.py`.

## Integrare continuă

- `.github/workflows/test.yml` rulează la fiecare pull request și la push-urile pe ramuri non-main: suita de validare și codespell. Acest depozit nu construiește și nu publică un site; redarea are loc în depozitul separat `software-engineering-metrics.github.io`.
- `.github/workflows/links.yml` verifică săptămânal linkurile externe cu [lychee](https://github.com/lycheeverse/lychee) (tipare de ignorare în `.lycheeignore`) și păstrează rezultatele într-un singur issue „Link checker report”. Linkurile externe stau intenționat în afara căii pull request-urilor.

## Ce nu acoperă testele

Suita verifică structura și stilul, nu adevărul. Nu poate spune dacă o referință este reală sau dacă proza este corectă. Verifică citările și faptele manual sau cu o trecere de cercetare. Existența linkurilor Wikipedia (spre deosebire de forma lor) cere și ea o verificare prin rețea, pe care suita o lasă deliberat deoparte ca să poată rula offline.
