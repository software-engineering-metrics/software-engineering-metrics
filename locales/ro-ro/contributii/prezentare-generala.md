# Contribuții

Îți mulțumim că ajuți la îmbunătățirea acestei cărți. Contribuțiile de orice mărime sunt binevenite, de la corectarea unei greșeli de tipar până la scrierea unui subiect nou.

## Reguli de bază

Cartea urmează un stil strict al casei. Esențialul:

- Fără linii lungi (em-dash). Folosește virgulă, două puncte, paranteze sau două propoziții.
- Fără formulări de umplutură („not only ... but also”, „load-bearing” și altele asemenea).
- Scriere caldă, simplă, directă. Adresează-te cititorului cu „tu”. Propoziții scurte.
- Definește termenii la prima folosire. Leagă conceptele-cheie de Wikipedia la prima mențiune.
- Numai referințe reale.
- Fiecare subiect despre o familie de metrici își numește vectorul de manipulare și garda de protecție.

Regulile complete se află în `spec/conventions.md` din rădăcina depozitului, iar versiunea scurtă este în [regulile de stil](reguli-de-stil.md). Testele impun părțile mecanice.

## Configurare

Ai nevoie de Python 3 și de [just](https://github.com/casey/just). Acest depozit conține conținutul cărții și specificația ei, plus site-ul SvelteKit (`software-engineering-metrics.github.io/`) care o transformă în site-ul publicat.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Cum faci o modificare

1. Citește ghidul potrivit: [scrierea](scriere.md) pentru subiecte, [navigarea](navigare.md) pentru fișierele generate, [testarea](testare.md) pentru teste.
2. Fă cea mai mică modificare care rezolvă problema.
3. Dacă ai adăugat, șters, redenumit sau renumerotat un subiect, actualizează `spec/structure.md` din rădăcina depozitului și rulează `just nav`.
4. Rulează `just test`. Trebuie să treacă.
5. Adaugă o intrare de o linie în [jurnalul de modificări](../proiect/jurnal-de-modificari.md), sub **Unreleased**.

## La ce poți lucra

- Corectează greșeli, pasaje neclare sau referințe depășite.
- Îmbunătățește exemplele, mai ales cele concrete din companii mari și din administrația publică.
- Verifică citările față de surse reale.
- Umple lacunele din acoperirea unui subiect fără a încălca șablonul.

## Ce să eviți

- Nu edita manual fișierele generate (`README.md`, `index.md` al fiecărui locale, `front-matter/table-of-contents.md` și `topics/09-07-index.md`). Schimbă subiectele și rulează `just nav`.
- Nu edita direct `en-001`, `en-gb` sau `en-us`; ele sunt derivate din `en-gb-oxendict` de `tools/localize.py`.
- Nu adăuga un subiect fără a actualiza și `spec/structure.md`.
- Nu introduce linii lungi sau formulările interzise; testele vor eșua.

## Raportarea problemelor

Deschide un issue care descrie problema, fișierul și subiectul și, acolo unde e cazul, sursa sau referința corectă. Rapoartele mici și precise sunt cele mai ușor de rezolvat.
