# Scrierea: redactarea și editarea subiectelor

## Înainte să scrii

- Citește [regulile de stil](style-rules.md) și `spec/conventions.md` din rădăcina depozitului.
- Verifică `spec/structure.md` din rădăcina depozitului ca să vezi unde se încadrează subiectul și ce număr ar trebui să aibă.

## Scrierea unui subiect nou

1. Alege partea și următorul număr zecimal liber din ea. Numerotarea este continuă, deci un subiect nou ia de obicei numărul următor după ultimul din partea sa.
2. Creează `locales/en-gb-oxendict/topics/PP-CC-slug.md` (prefix cu zerouri în față, separat prin cratime, de exemplu `02-01-...`) pornind de la [șablonul de subiect](chapter-template.md). Scrie cu ortografia Oxford (vezi `spec/oxford-spelling.md`); nu edita niciodată direct celelalte trei locale.
3. Scrie după șablon. Fiecare subiect de conținut are nevoie de toate secțiunile: prezentare generală, principii-cheie, recomandări, compromisuri (cu tabel), întrebări de discutat, perspectivă sectorială (startup, afacere mică, companie mare, administrație publică), exemple (unul din companie mare și unul din administrația publică), argument de business, anti-modele, un model de maturitate în cinci niveluri, idei de discuție, concluzii principale și referințe.
4. Numește vectorul de manipulare. Fiecare familie de metrici are nevoie de un răspuns explicit la întrebarea „cum face o echipă ca acest număr să arate bine fără a îmbunătăți lucrul pe care îl măsoară și ce gardă de protecție prinde asta” (vezi subiectul 1.2).
5. Definește termenii la prima folosire. Adaugă linkuri Wikipedia la conceptele-cheie la prima mențiune, doar în proză.
6. Trimite la subiecte înrudite prin numărul zecimal, de exemplu „(subiectul 2.1)”.
7. Adaugă subiectul în `spec/structure.md`.
8. Dacă introducerea părții (N.0) își listează subiectele, adaugă un punct acolo.
9. Rulează `python3 tools/localize.py` ca să derivi subiectul în `en-001`, `en-gb` și `en-us`.
10. Rulează `just nav`, apoi `just test`.

## Editarea unui subiect existent

- Păstrează ordinea și titlurile secțiunilor. Testele verifică dacă subiectele de conținut au în continuare toate secțiunile cerute.
- Păstrează definițiile din text, linkurile Wikipedia, tabelele și lista de referințe, cu excepția cazului în care editarea vizează chiar aceste lucruri.
- Nu introduce linii lungi sau formulările interzise. Dacă reformulezi, rescrie în loc să pui o liniuță.
- Rulează `python3 tools/localize.py` după aceea, ca să derivi din nou `en-001`, `en-gb` și `en-us` din sursa `en-gb-oxendict` editată.

## Redenumirea sau renumerotarea

- Redenumește fișierul în `locales/en-gb-oxendict/`, actualizează titlul `# N.M Titlu`, actualizează `spec/structure.md` și actualizează fiecare trimitere încrucișată care indică vechiul număr.
- Rulează `python3 tools/localize.py` ca să redenumești fișierul și în celelalte trei locale (le derivă pe toate patru din aceleași căi relative).
- Rulează `just nav` și `just test`. Testele vor semnala o nepotrivire între H1 și numele fișierului, un gol în numerotare, un locale care s-a abătut de la sursă sau un link rupt.

## Un memento despre ton

Scrie ca un coleg cu experiență care vrea ca cititorul să reușească. Cald, simplu, direct și util. Propoziții scurte. Fără umplutură.
