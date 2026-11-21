# Navigarea: cum funcționează fișierele generate

Pentru fiecare locale, patru artefacte de navigare sunt generate din subiectele lui, nu scrise manual (plus `README.md`, generat o singură dată pentru locale-ul de referință, `en-gb-oxendict`):

- `README.md` (cuprinsul de pe pagina de start a depozitului; doar locale-ul de referință)
- `locales/<locale>/index.md` (pagina de start a site-ului publicat)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (indexul de subiecte, cu linkuri)

Sunt produse de [`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py). Nu le edita manual, pentru că următoarea generare îți va suprascrie modificarea.

## Când regenerezi

Rulează `just nav` (sau `python3 tools/gen_nav.py`) ori de câte ori:

- adaugi, ștergi, redenumești sau renumerotezi un subiect, sau
- schimbi titlul `# N.M Titlu` al unui subiect (cuprinsul îl folosește).

Rulează mai întâi `python3 tools/localize.py` dacă ai schimbat ceva în `locales/en-gb-oxendict/`, ca subiectele celorlalte trei locale (și titlurile lor generate) să fie la zi înainte ca `gen_nav.py` să le citească; vezi [`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Cum funcționează

Pentru fiecare locale, `gen_nav.py` citește fiecare fișier `locales/<locale>/topics/*.md`, sortează după numărul zecimal, grupează pe părți și:

- construiește cuprinsul parte cu parte din titlul H1 al fiecărui subiect,
- îl scrie în `locales/<locale>/index.md` și în `locales/<locale>/front-matter/table-of-contents.md` (și, doar pentru locale-ul de referință, în `README.md`),
- scanează subiectele de fond (Părțile 1 până la 8) după o listă fixă de termeni-cheie și scrie indexul de subiecte în `locales/<locale>/topics/09-07-index.md`.

Textul-șablon comun (paragraful introductiv, „Cum se citește cartea”, „Teme transversale” și titlurile părților) este localizat la fel ca proza subiectelor, prin funcțiile de locale din `tools/localize.py`, ca paginile generate să sune natural în fiecare locale.

Titlurile părților se află în dicționarul `PART_TITLES` din partea de sus a scriptului. Generatorul folosește anteturi cu două puncte („Part 2: Delivery and Flow Metrics”), niciodată linii lungi.

## Ce nu atinge

Specificația din rădăcina depozitului (`spec/index.md`, `spec/structure.md` și celelalte fișiere ale ei) este sursa de adevăr scrisă manual. Generatorul nu o scrie și nu face parte din site-ul publicat. Dacă schimbi structura, actualizează tu `spec/structure.md`, apoi rulează `just nav` pentru fișierele derivate și `just test` ca să confirmi că totul se potrivește.
