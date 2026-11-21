# 9.4 Šablony

Šablony k okopírování pro opakující se dokumenty. Propracované, vyplněné
příklady prvních dvou najdete v [příkladech](../priklady/prehled.md).

## Šablona charty metrik

```markdown
# Charta metrik: [název týmu nebo sady metrik]

- **Tým:** [vlastnící tým]
- **Vlastník:** [jmenovaná osoba nebo role]
- **Revize:** [rytmus, např. čtvrtletně]

## Účel

[Jedna nebo dvě věty: co tato charta řídí a proč.]

## Co sledujeme

| Metrika | Zdroj pravdy | Vlastník |
| --- | --- | --- |
| [metrika] | [systém] | [jmenovaný vlastník] |

## Necíle

[Výslovné prohlášení, k čemu se tyto metriky nepoužívají, např.
individuální hodnocení výkonu, řazení týmů do pořadí bez kontextu.]

## Pojistky

[U každé metriky s pobídkou uveďte její spárovanou pojistku a jaký vzorec
manipulace zachytí.]

## Rytmus revizí

[Kdy a jak se k této chartě vracíme; co spouští vyřazení metriky.]
```

## Šablona specifikace dashboardu

```markdown
# Specifikace dashboardu: [název dashboardu]

## Publikum

[Pro koho je tento dashboard a jaké rozhodnutí informuje. Uveďte výslovně,
pokud neslouží k hodnocení jednotlivců.]

## Dlaždice (v pořadí zobrazení)

1. **[Název metriky]**, [časové okno], [typ grafu]. [Případné konkrétní
   poznámky k vizualizaci: pravidla os, anotace.]
2. ...

## Pravidla vizualizace

- Osy začínají od nuly, pokud není uvedeno jinak, s výjimkou
  zdokumentovanou na dlaždici.
- [Jakákoli další pravidla poctivosti specifická pro projekt.]

## Rytmus obnovení dat

[Jak často se každá dlaždice aktualizuje a z jakého zdroje.]

## Co tento dashboard záměrně vynechává

[Uveďte vše, co bylo záměrně vynecháno, a proč, např. počty aktivit
jednotlivců.]
```

## Šablona programu porady o revizi metrik

```markdown
# Revize metrik: [datum]

## Účastníci

[Jména a role]

## Revidované metriky

U každé metriky:
- Aktuální hodnota a trend
- Jakýkoli pohyb mimo běžné kolísání (téma 1.6)
- Stav spárované pojistky, je-li relevantní
- Rozhodnutí, které tato hodnota informuje, pokud nějaké

## Navržené nové metriky

[Každou proveďte kontrolním seznamem revize nové metriky, téma 9.3.]

## Metriky zvažované k vyřazení

[Které metriky neinformovaly žádné rozhodnutí v posledních dvou cyklech?]

## Akční body

| Položka | Vlastník | Termín |
| --- | --- | --- |
| | | |
```

## Šablona postmortemu bez obviňování

```markdown
# Postmortem: [název incidentu], [datum]

## Shrnutí

[Jeden odstavec: co se stalo, dopad na uživatele, trvání.]

## Časová osa

- Detekce: [čas, jak byla zjištěna]
- Potvrzení: [čas, kdo reagoval]
- Vyřešení: [čas, co to opravilo]

## Závažnost

[Klasifikace podle zdokumentovaných kritérií, téma 6.2.]

## Kořenová příčina

[Co umožnilo, aby se to stalo, formulováno jako otázka systému, nikoli
jednotlivce.]

## Co se povedlo

[Konkrétní věci, které v reakci fungovaly.]

## Akční body

| Položka | Vlastník | Termín |
| --- | --- | --- |
| | | |

## Navazující kroky

[Potvrzení, že akční body byly sledovány do dokončení, podle dalšího
revizního cyklu.]
```

## Šablona obchodního odůvodnění ROI

```markdown
# Obchodní odůvodnění ROI: [název iniciativy]

## Náklady (celkové náklady vlastnictví, téma 5.5)

- Úvodní: [náklady na vývoj]
- Průběžné: [údržba, infrastruktura, podpora, ročně]
- Náklady obětované příležitosti: [co jiného mohla tato kapacita udělat]

## Přínos (zdokumentované důkazy, témata 5.1-5.3)

- [Přínos 1], doložený [zdroj dat]
- [Přínos 2], doložený [zdroj dat]

## Rozpětí a předpoklady

- Konzervativní scénář: [číslo]
- Optimistický scénář: [číslo]
- Klíčový předpoklad určující rozpětí: [pojmenujte ho]

## Zvažované a vyloučené zavádějící vlivy

[Co jiného by mohlo vysvětlit předpokládaný přínos a proč to bylo vyloučeno
nebo zohledněno.]

## Kontrola po dokončení (vyplňte po dokončení iniciativy)

- Skutečný výsledek: [číslo]
- Ve srovnání s předpokládaným rozpětím: [nad / v rozpětí / pod]
- Co nás to učí pro další odhad: [poznámka]
```
