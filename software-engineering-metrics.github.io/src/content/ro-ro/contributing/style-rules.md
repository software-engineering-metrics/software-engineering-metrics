# Reguli de stil (comune, obligatorii)

Stilul casei într-un singur loc. Elementele marcate „(test)” sunt impuse de `tests/validate.py`; o încălcare face build-ul să eșueze. Versiunea narativă completă este `spec/conventions.md` din rădăcina depozitului.

## Reguli stricte

- **Fără linii lungi (em-dash).** Nu folosi niciodată linia lungă (U+2014). Folosește virgulă, două puncte, paranteze sau două propoziții. Liniuțele de tip en-dash „–” sunt permise doar în intervale numerice precum `1–9` sau `2.1–2.8`. (test)
- **Fără formulări de umplutură.** Nu folosi „not only ... but also”, „but also” sau „load-bearing”. Evită „It's important to note”, „In today's fast-paced world”, „It's crucial to consider”, „It appears that”, „One could argue” și formula „it's not just X, it's Y”. (test, pentru primele trei)
- **Definește termenii la prima folosire.** Dezvoltă acronimele și definește jargonul prima dată când fiecare subiect le folosește, de exemplu „timp mediu de recuperare (MTTR)”.
- **Leagă conceptele-cheie de Wikipedia** la prima mențiune, o singură dată pe subiect, doar în proză. Forma: `[termen](https://en.wikipedia.org/wiki/Article_Title)`. Niciodată în titluri, tabele, cod sau în secțiunea de referințe. (forma linkului este testată)
- **Numai referințe reale.** Autor și titlu ale unor lucrări autentice. Fără titluri, autori sau URL-uri inventate.
- **Numește vectorul de manipulare.** Un subiect despre o familie de metrici spune cum este manipulată metrica și ce gardă de protecție prinde manipularea (subiectul 1.2).

## Voce

- Caldă, directă, încurajatoare. Adresează-te cititorului cu „tu”. Propoziții scurte, cuvinte simple. Începe cu esențialul.
- Cu păreri clare și practică. Neutră față de furnizori. Numește produse doar ca exemple factuale.

## Structură (test)

- Subiectele de conținut folosesc exact ordinea secțiunilor din [`sablon-subiect.md`](chapter-template.md).
- Primul titlu este `# N.M Titlu` (număr zecimal de subiect) și se potrivește cu prefixul `PP-CC` cu zerouri în față al fișierului.
- Numerotarea în fiecare parte este continuă și începe de la N.0.

## După editare

- Dacă ai schimbat mulțimea de subiecte, actualizează `spec/structure.md` și rulează `just nav`.
- Rulează întotdeauna `just test`.
