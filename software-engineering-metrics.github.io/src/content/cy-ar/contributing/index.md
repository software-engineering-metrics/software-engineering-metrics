# Cyfrannu

Diolch am helpu i wella'r llyfr hwn. Croesewir cyfraniadau o bob maint, o
drwsio gwall teipio i ysgrifennu pwnc newydd.

## Rheolau sylfaenol

Mae'r llyfr yn dilyn arddull tŷ lem. Y hanfodion:

- Dim cysylltnodau em. Defnyddiwch goma, colon, cromfachau, neu ddwy frawddeg.
- Dim ymadroddion ystrydebol ("not only ... but also", "load-bearing", ac
  eraill tebyg).
- Ysgrifennu cynnes, plaen, uniongyrchol. Cyfeiriwch at y darllenydd fel "chi."
  Brawddegau byr.
- Diffiniwch dermau wrth eu defnyddio gyntaf. Cysylltwch gysyniadau allweddol
  â Wikipedia wrth eu crybwyll gyntaf.
- Cyfeiriadau go iawn yn unig.
- Mae pob pwnc teulu metrigau yn enwi ei lwybr ystumio a'i reilen ddiogelwch.

Mae'r rheolau llawn yn `spec/conventions.md` yng ngwraidd y storfa, a'r fersiwn
fer yw'r [rheolau arddull](style-rules.md). Mae'r profion yn gorfodi'r rhannau
mecanyddol.

## Gosod

Mae angen Python 3 a [just](https://github.com/casey/just) arnoch. Mae'r storfa
hon yn dal cynnwys a manyleb y llyfr, ynghyd â'r wefan SvelteKit
(`software-engineering-metrics.github.io/`) sy'n ei throi'n wefan gyhoeddedig.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Gwneud newid

1. Darllenwch y canllaw perthnasol: [ysgrifennu](authoring.md) ar gyfer
   pynciau, [llywio](navigation.md) ar gyfer y ffeiliau a gynhyrchir,
   [profi](testing.md) ar gyfer y profion.
2. Gwnewch y newid lleiaf sy'n gwneud y gwaith.
3. Os ychwanegoch, dileuoch, ailenwoch neu ailrifoch bwnc, diweddarwch
   `spec/structure.md` yng ngwraidd y storfa a rhedwch `just nav`.
4. Rhedwch `just test`. Rhaid iddo basio.
5. Ychwanegwch gofnod un llinell at y [cofnod newidiadau](../project/changelog.md)
   o dan **Unreleased**.

## Beth i weithio arno

- Trwsiwch wallau, darnau aneglur, neu gyfeiriadau hen.
- Gwellwch enghreifftiau, yn enwedig rhai menter a llywodraeth pendant.
- Gwiriwch ddyfyniadau yn erbyn ffynonellau go iawn.
- Llenwch fylchau yn narpariaeth pwnc heb dorri'r templed.

## Beth i'w osgoi

- Peidiwch â golygu'r ffeiliau a gynhyrchir â llaw (`README.md`, `index.md`
  pob locale, `front-matter/table-of-contents.md`, a `topics/09-07-index.md`).
  Newidiwch y pynciau a rhedwch `just nav` yn lle hynny.
- Peidiwch â golygu `en-001`, `en-gb` nac `en-us` yn uniongyrchol; deillir
  hwy o `en-gb-oxendict` gan `tools/localize.py`.
- Peidiwch ag ychwanegu pwnc heb ddiweddaru `spec/structure.md` hefyd.
- Peidiwch â chyflwyno cysylltnodau em na'r ymadroddion gwaharddedig; bydd y
  profion yn methu.

## Adrodd am broblemau

Agorwch issue sy'n disgrifio'r broblem, y ffeil a'r pwnc, ac, lle bo'n
berthnasol, y ffynhonnell neu'r cyfeiriad cywir. Adroddiadau bach, penodol yw'r
rhai hawsaf i weithredu arnynt.
