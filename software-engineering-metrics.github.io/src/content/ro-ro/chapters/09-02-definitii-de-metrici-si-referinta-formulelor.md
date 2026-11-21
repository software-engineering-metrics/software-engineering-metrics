# 9.2 Definiții de metrici și referința formulelor

Fiecare formulă din carte, adunată într-un singur loc. Fiecare intrare numește
subiectul cu discuția completă, inclusiv riscul de manipulare și garda de
protecție. Folosește aceasta ca pe o căutare rapidă, nu ca pe un substitut al
subiectului în sine.

## Metrici de flux (Partea 2)

| Metrică | Formulă | Subiect |
| --- | --- | --- |
| Viteza fluxului | Numărul de elemente de flux finalizate pe unitatea de timp | 2.3 |
| Distribuția fluxului | (Elemente finalizate de un tip de element de flux) / (Total elemente finalizate) x 100% | 2.3 |
| Timpul fluxului | Timpul de la intrarea unui element de flux în fluxul de valoare până la livrarea lui | 2.4 |
| Încărcarea fluxului | Numărul de elemente de flux active sau în așteptare în fluxul de valoare | 2.4 |
| Legea lui Little | Încărcarea fluxului (muncă în curs) = Rata de sosire x Timpul fluxului (timp de ciclu) | 2.4, 2.7 |
| Eficiența fluxului | Timpul activ de lucru / Timpul total scurs x 100% | 2.5 |
| Timp de ciclu | Suma duratelor etapelor: programare + preluare + revizuire + testare + implementare | 2.6 |
| Grad de utilizare | Rata de sosire / Rata de servire | 2.7 |
| Procent complet și corect (%C/A) | (Unități utilizabile în aval fără refacere) / (Total unități) x 100% | 2.8 |
| Randament cumulat al fluxului | %C/A al etapei 1 x %C/A al etapei 2 x ... x %C/A al etapei N | 2.8 |
| Timp takt | Timpul de lucru disponibil / Cererea clienților în acea perioadă | 2.8 |
| Timpul până la prima revizuire | Timpul de la deschiderea pull requestului până la primul răspuns substanțial al unui revizor | 2.9 |
| Frecvența implementărilor | Numărul de implementări reușite în producție pe unitatea de timp | 2.10 |
| Timpul de livrare al modificărilor | Timpul de la primul commit până la implementarea reușită în producție (raportează mediana și percentila 90) | 2.10 |
| Rata de eșec a modificărilor | (Implementări care provoacă o defecțiune) / (Total implementări) x 100% | 2.10 |
| Timpul de recuperare după o implementare eșuată | Timpul de la detectarea defecțiunii până la restabilirea reală a serviciului | 2.10 |

## Experiența dezvoltatorilor (Partea 3)

| Metrică | Formulă | Subiect |
| --- | --- | --- |
| Timp de concentrare | Numărul și durata blocurilor neîntrerupte de peste două ore pe săptămână, din datele de calendar | 3.6 |
| Rata de răspuns | (Răspunsuri la sondaj primite) / (Invitații la sondaj trimise) x 100% | 3.7 |

## Cod și calitate (Partea 4)

| Metrică | Formulă | Subiect |
| --- | --- | --- |
| Complexitate ciclomatică | Căi independente prin fluxul de control (muchii − noduri + 2, după McCabe) | 4.1 |
| Acoperirea testelor | (Linii/ramuri executate de teste) / (Total linii/ramuri) x 100% | 4.2 |
| Rata de eliminare a mutanților | (Mutanți eliminați de suita de teste) / (Total mutanți introduși) x 100% | 4.2 |
| Volatilitatea codului (churn) | Linii adăugate + modificate + șterse per fișier într-o fereastră de timp | 4.3 |
| Scor de punct fierbinte | Volatilitate x Complexitate, ordonat pe fișier | 4.3 |
| Costul de purtare al datoriei | Costul continuu estimat al nerezolvării unui element (muncă conexă mai lentă, risc mai mare de defecte) | 4.5 |

## Produs și business (Partea 5)

| Metrică | Formulă | Subiect |
| --- | --- | --- |
| Rata defectelor scăpate | (Defecte scăpate ponderate după severitate) / (Unitate de livrare sau de timp) | 5.1 |
| Adoptarea inițială | (Utilizatori care au încercat funcționalitatea cel puțin o dată) / (Audiența țintă) x 100% | 5.2 |
| Adoptarea menținută | (Utilizatori care încă folosesc funcționalitatea după N săptămâni) / (Utilizatori care au încercat-o inițial) x 100% | 5.2 |
| Cost unitar | Cost total (oameni + infrastructură + instrumente) / Unitate semnificativă (client, tranzacție) | 5.4 |
| ROI | (Beneficiu total − Cost total de proprietate) / Cost total de proprietate, prezentat ca interval | 5.5 |

## Fiabilitate, operațiuni și securitate (Partea 6)

| Metrică | Formulă | Subiect |
| --- | --- | --- |
| Buget de erori | (1 − ținta SLO) x Fereastra de timp (de exemplu, 0,1% din 30 de zile ≈ 43 de minute) | 6.1 |
| Ritmul de consum al bugetului de erori | Buget de erori consumat / Buget de erori alocat, într-o fereastră dată | 6.1 |
| MTTD | Timpul de la apariția incidentului până la detectare | 6.2 |
| MTTA | Timpul de la notificarea incidentului până la confirmare | 6.2 |
| MTTR (incident) | Timpul de la confirmare până la restabilirea reală a serviciului | 6.2 |
| Distribuția apelurilor de gardă | Apeluri primite per persoană, într-o fereastră glisantă (nu media echipei) | 6.3 |
| Timpul de remediere a vulnerabilităților | Timpul de la descoperire până la remedierea reală, urmărit pe severitate | 6.4 |

## Note despre folosirea acestor formule

- **Asociază întotdeauna o formulă de viteză sau de producție cu garda ei de
  protecție** (subiectul 1.2): rata de eșec a modificărilor cu frecvența
  implementărilor și timpul de livrare; rata defectelor scăpate cu viteza de
  livrare; consumul bugetului de erori cu activitatea de implementare.
- **Folosește mediane și percentile, nu medii, pentru formulele bazate pe timp**
  (subiectul 1.6), cu excepția cazului în care o formulă cere explicit o medie.
- **Fiecare formulă are nevoie de un sistem-sursă și o metodă de colectare
  documentate** (subiectul 1.5), alături de definiția ei matematică; două
  echipe care calculează aceeași formulă din surse diferite nu vor produce
  cifre comparabile.
- **Ponderarea după severitate nu este arătată explicit în fiecare formulă de
  mai sus**, dar se aplică oriunde apare „ponderat după severitate”; vezi
  subiectul relevant pentru schema completă de clasificare.
