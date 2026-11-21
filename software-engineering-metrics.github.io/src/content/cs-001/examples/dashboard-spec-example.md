# Příklad: specifikace dashboardu metrik doručování

Propracovaná specifikace dashboardu podle
[tématu 8.1, Návrh dashboardu inženýrských metrik](../chapters/08-01-navrh-dashboardu-inzenyrskych-metrik.md).
Jde o tvar: pojmenované publikum, malý počet dlaždic, poctivý standard vizualizace
a uvedený rytmus obnovy.

## Publikum

Vedení inženýrství a platformní tým, na čtrnáctidenní revizi doručování.
Nepoužívá se k hodnocení výkonu jednotlivců.

## Dlaždice (v pořadí zobrazení)

1. **Frekvence nasazení**, poslední 4 týdny, po týmech. Spojnicový graf,
   týdenní koše, osa začíná od nuly.
2. **Průběžná doba změn**, medián a 90. percentil, poslední 4 týdny. Sloupcový
   graf s oběma řadami, ne jen s mediánem.
3. **Míra selhání změn**, poslední 4 týdny, s definicí „selhání“ dohodnutou
   týmem, na kterou dlaždice odkazuje.
4. **Doba obnovy po selhaném nasazení**, medián, poslední 4 týdny.
5. **Zbývající rozpočet chyb**, aktuální čtvrtletí, po službách, v procentech.

## Pravidla vizualizace

- Každý graf trendu zobrazuje alespoň osm datových bodů, nikdy jen jednu
  momentku.
- Osy začínají od nuly, pokud výjimku neuvádí zdokumentovaná poznámka na
  dlaždici.
- Nasazení, incidenty a svátky jsou na časové ose označeny, aby čtenář poznal
  skutečný posun od šumu.
- Žádné dvojité osy, žádné 3D efekty, žádné vybrané rozsahy dat.

## Rytmus obnovy

Dlaždice čerpající z pipeline (frekvence nasazení, průběžná doba) se obnovují
každou hodinu. Dlaždice čerpající z incidentů (míra selhání změn, doba obnovy) se
obnovují po uzavření postmortemu. Dashboard uvádí čas vlastní poslední obnovy.

## Co dashboard záměrně vynechává

Počty commitů jednotlivců, počty pull requestů jednotlivců a řádky kódu. Jsou
to metriky aktivity s dobře zdokumentovanou historií manipulace a s tím, že
měří úsilí, ne výsledek (téma 3.4).
