# Co jsou metriky softwarového inženýrství?

[Metriky softwarového inženýrství](https://en.wikipedia.org/wiki/Software_metric)
jsou kvantitativní míry, jimiž se hodnotí, sledují a zlepšují kvalita,
efektivita a dopad procesů vývoje softwaru, jeho produktů a týmů. Když se
používají dobře, fungují jako systémové diagnostické nástroje: odhalují
provozní úzká hrdla, ospravedlňují odstraňování technického dluhu a spojují
inženýrskou činnost s konkrétními obchodními výsledky. Když se používají špatně,
zkreslují chování, ničí důvěru a odměňují přesně to, co nemají.

Tato kniha existuje, protože většina týmů sahá po metrikách dřív, než se
rozhodne, k čemu metrika *slouží*. Dashboard se zaplní vším, co se snadno
spočítá, vedení se začne ptát „je to číslo nahoře, nebo dole?“ a během
čtvrtletí tým optimalizuje číslo místo výsledku, který mělo představovat. Tato
chyba má jméno, [Goodhartův zákon](https://en.wikipedia.org/wiki/Goodhart%27s_law):
když se míra stane cílem, přestane být dobrou mírou. Každé téma v této knize je
psáno s tímto zákonem v zádech.

## Dva základní rámce

Obor se z velké části shodl na dvou rámcích podložených výzkumem, které měří
doručování a zdraví týmu.

**[Metriky DORA](https://dora.dev/guides/dora-metrics/)** (z programu DevOps
Research and Assessment) měří propustnost a stabilitu systému: frekvenci
nasazení, průběžnou dobu změn, míru selhání změn a dobu obnovy po selhaném
nasazení. Část 2 této knihy pokrývá všechny čtyři ve vlastním referenčním
tématu, vedle Flow Framework, který používá k uspořádání metrik doručování
a toku obecněji, protože DORA dobře měří mechaniku pipeline, ale neříká nic
o tom, jaký druh hodnoty pipeline protéká.

**[Rámec SPACE](https://queue.acm.org/detail.cfm?id=3454124)**, který vytvořili
výzkumníci z Microsoftu, GitHubu a University of Victoria, vyvažuje hrubou
propustnost zkušeností vývojářů v pěti dimenzích: spokojenost a pohoda, výkon,
aktivita, komunikace a spolupráce a efektivita a plynulost. Část 3 se mu věnuje
do hloubky.

Kromě těchto dvou rámců týmy sledují lokální metriky seskupené podle oblastí:
metriky kódu a kvality (část 4), produktové a obchodní metriky (část 5) a metriky
spolehlivosti, provozu a bezpečnosti (část 6). Část 7 se zabývá změnou, která už
probíhá: nástroje generativní umělé inteligence udělaly z surového objemu kódu
téměř zadarmo dostupnou věc, takže několik metrik, o které se obor desetiletí
opíral, už neznamená to, co dřív.

## Pro koho to je

Primárním publikem jsou lidé, kteří rozhodují, co tým měří a proč: vedoucí
inženýrství, staff a principal inženýři, platformní týmy a týmy DevOps
a programoví a produktoví manažeři, kteří poprvé budují dashboard či skóre kartu
metrik nebo opravují takovou, která začala zkreslovat chování. Sekundárním
publikem je každý inženýr, který chce pochopit, proč jeho organizace sleduje to,
co sleduje, a jak se ohradit, když se metrika zneužívá.

## Jak to číst

Začněte tady, pak si přečtěte [úvod](uvod.md), kde se dozvíte, jak je kniha
uspořádána, nebo skočte rovnou na [obsah](obsah.md). Každé téma stojí samo
o sobě: nejdřív uvede zásady, dá konkrétní doporučení, pojmenuje, jak se
metrika, o níž je řeč, zneužívá, a končí modelem zralosti, otázkami k diskusi
a odkazy. Knihu nemusíte číst od začátku do konce, abyste ji mohli používat.
