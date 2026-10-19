# 2.7 Biðraðafræði

## Yfirlit og tilgangur

**[Biðraðafræði](https://en.wikipedia.org/wiki/Queueing_theory)** er stærðfræðileg rannsókn á biðröðum. Hún hljómar eins og skrýtin passun í bók um mælikvarða hugbúnaðarverkfræði þar til maður tekur eftir hve mikið af afhendingarleiðslu er í raun biðröð: sameiningarbeiðni sem bíður yfirferðaraðila, innsending sem bíður CI-keyrara, miði sem bíður þess að vera tekinn upp, skilaboð til þjónustuvers sem bíða svars. Viðfangsefni 2.4 kynnti þegar flæðisálag og flæðistíma og sýndi að ofhleðsla virðisstraums hægir snöggt á afhendingu, og viðfangsefni 2.5 og 2.6 sýndu að mestur afhendingartími er biðtími, ekki vinnutími. Biðraðafræði er stærðfræðin undir sem útskýrir hvers vegna allt það er satt, ekki bara athugað mynstur.

Gagnlegasta einstaka niðurstaðan er **[lögmál Littles](https://en.wikipedia.org/wiki/Little%27s_law)**, setning sem rekstrarrannsakandinn John Little sannaði árið 1961: meðalfjöldi atriða í stöðugu kerfi jafngildir meðalhraða komu atriða margfölduðum með meðaltíma hvers atriðis í kerfinu. Viðfangsefni 2.4 notaði þegar þessa niðurstöðu undir eigin nöfnum Flæðirammans, flæðisálag jafngildir komuhraða sinnum flæðistíma. Í víðari orðaforða þessarar bókar les hún líka sem vinna í vinnslu (viðfangsefni 2.5) jafngildir komuhraða nýrrar vinnu margfölduðum með ferlitíma (viðfangsefni 2.6). Þetta er ekki þumalputtaregla eða fylgni sem sést í sumum rannsóknum. Það er sönnun sem gildir fyrir sérhverja stöðuga biðröð, óháð því hvað biðröðin vinnur úr eða hvernig hún ákveður hverju á að sinna næst.

Fyrir stórt teymi er þessi almenni gildisháttur málið. Lögmál Littles gefur þér skynsemisathugun sem virkar eins hvort sem biðröðin er kanban-tafla, skilaboðamiðlari eða sameiginleg CI-leiðsla. Ef mæld vinna í vinnslu, komuhraði og ferlitími þinn uppfylla ekki nokkurn veginn jöfnuna er ein af tölunum þremur röng, yfirleitt vegna ósamkvæmrar skilgreiningar á því hvað telst „í vinnslu“ eða „komið“. Stórfyrirtæki og hið opinbera reka tugi slíkra biðraða í einu, sameiginlega kóðayfirferðarhópa, sameiginleg prófunarumhverfi, sameiginleg samþykkisráð, og lögmál Littles er ódýrasta tiltæka tólið til að grípa slæma mælikvarðaskilgreiningu áður en hún knýr slæma mönnunar- eða ferlisákvörðun.

## Lykilmeginreglur

- **Lögmál Littles er sönnun, ekki ágiskunarregla.** Vinna í vinnslu jafngildir komuhraða sinnum ferlitíma, fyrir sérhverja stöðuga biðröð, og það er fljótleg athugun á hvort afhendingarmælikvarðar þínir séu innbyrðis samkvæmir.
- **Nýting vex ekki línulega með biðtíma.** Þegar sameiginleg auðlind nálgast fulla nýtingu vex biðraðatöf snöggt, ekki smám saman. Auðlind sem er 95% upptekin bíður oft margfalt lengur en sú sem er 80% upptekin, ekki bara „örlítið verra“.
- **Meðaltal biðraðar felur versta tilvikið.** Að skýra aðeins frá meðaltali biðtíma leynir langa, sára halanum nálægt getumörkum, einmitt það sem viðfangsefni 1.6 varar við þegar kemur að því að nota hundraðshlutamörk í stað meðaltala.
- **Hvernig biðröð er skilgreind má leika jafn auðveldlega og hvern annan mælikvarða.** Hvort eitthvað telst „komið“, „í vinnslu“ eða „afgreitt“ er val, og það má stilla til að flatta mælaborð án þess að breyta því sem raunverulega gerist við vinnuna.
- **Leiðsla er yfirleitt biðröð biðraða.** Afhendingarleiðsla tengir saman nokkur stig, og hægasta stigið setur hraða allrar keðjunnar óháð því hve hröð hin eru.

## Ráðleggingar

### Notaðu lögmál Littles til að athuga eigin tölur áður en þú treystir þeim

Taktu mælda meðalvinnu í vinnslu teymis þíns, meðalkomuhraða nýrra atriða á viku og meðalferlitíma, og athugaðu hvort vinna í vinnslu jafngildir nokkurn veginn komuhraða margfölduðum með ferlitíma. Þegar svo er ekki, ekki gera ráð fyrir að kenningin sé röng. Leitaðu að raunverulegu orsökinni: stigamörk talin ósamkvæmt, vinna sem situr „lokuð“ en er enn talin í vinnslu, eða komuhraði mældur yfir annan glugga en ferlitíminn. Þessi eina athugun grípur meiri slæma tækjavæðingu en flest teymi finna á nokkurn annan hátt.

### Raktu nýtingu beint fyrir hverja sameiginlega, getuskorðaða auðlind

Greindu auðlindirnar sem afhendingarleiðsla þín deilir milli margra teyma, kóðayfirferðarhóp, CI-þyrpingu, prófunarumhverfi, og mældu hve uppteknar hver þeirra er sem hlutfall af tiltækri getu, áður en þú ætlar að keyra hana nálægt mörkum hennar. Sameiginlegur yfirferðarhópur sem keyrir nálægt fullri getu framleiðir yfirferðarröðarbiðtíma sem vex langtum hraðar en hófleg aukning eftirspurnar sem olli honum, einmitt sú virkni að baki ráðleggingu viðfangsefnis 2.9 um að fylgjast með tíma-til-fyrstu-yfirferðar sem leiðandi vísi.

### Aðgreindu komuhraða, árangurshlutfall, bilunarhlutfall og sleppihlutfall

Stenstu að draga allt sem yfirgefur biðröð saman í eina „afköst“ eða „afgreiðsluhraða“ tölu. Raktu fjóra hluti sérstaklega: hve hratt vinna berst, hve mikið af henni klárast með góðum árangri, hve mikið bilar og þarfnast endurvinnu, og hve mikið er yfirgefið eða hljóðlega fellt niður áður en nokkur lýkur því. Leiðsla sem lítur hröð út því sleppihlutfall hennar hækkaði hljóðlega afhendir ekki í raun meira, og aðeins að rekja þessi fjögur hlutföll sérstaklega mun sýna þér það.

### Líkanaðu fjölstiga leiðslur sem biðröð biðraða

Meðhöndlaðu afhendingarleiðslu, eða hvaða fjölstigaferli sem er, atvikalíftíma, ráðningarleiðslu, sem keðju biðraða frekar en einn ógreindan klump af „tíma“. Heildarkomuhraði ræðst af fyrsta stiginu, heildarlúkningarhraði af síðasta stiginu, og heildarvillu- og sleppitalning leiðslunnar er summa eigin talninga hvers stigs. Þessi rammi segir þér strax í hvaða stig er vert að fjárfesta: það með verstu samsetningu mikillar nýtingar og mikils bilunar- eða sleppihlutfalls, ekki það sem er einfaldlega auðveldast að tækjavæða.

### Settu mönnunar- og WIP-mörk með nýtingu í huga, ekki bara afköst

Þegar þú ákveður hve marga yfirferðaraðila eða CI-keyrara teymi þarfnast, ekki stilla getu til að passa nákvæmlega við meðalkomuhraða. Biðröð sem keyrir á 100% nýtingu að meðaltali hefur í reynd óendanlegan biðtíma, því raunverulegar komur eru ójafnar, ekki fullkomlega sléttar. Skipuleggðu vísvitandi svigrúm og meðhöndlaðu „yfirferðaraðilar okkar eru nær alltaf uppteknir“ sem viðvörunarmerki um biðtíma sem koma, ekki sem sönnun á skilvirkri auðlindanýtingu.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Ekkert formlegt biðraðalíkan, mönnun eftir tilfinningu | Fljótt að byrja; enginn nýr orðaforði fyrir teymið | Vanmetur samkvæmt hvernig biðtími springur nálægt fullri getu |
| Lögmál Littles sem skynsemisathugun á fyrirliggjandi mælikvörðum | Ódýrt, krefst engra nýrra tóla, grípur slæmar skilgreiningar fljótt | Athugar aðeins samkvæmni, greinir ekki sjálft orsökina |
| Full biðraðahermun (komudreifingar, margir þjónar) | Nákvæmasta spá um biðtímahegðun undir álagi | Krefst raunverulegrar tölfræðikunnáttu og viðhalds sem flest teymi halda ekki uppi |
| Nýtingarrakning á sameiginlegum auðlindum án dýpri líkanagerðar | Einföld, framkvæmanleg, grípur stærstu einstöku orsök stjórnlausra biðtíma | Segir ekkert um hvers vegna nýting er há eða hvað á að gera við undirliggjandi orsök |

Aðalspennan er **strangleiki á móti upptöku**. Full biðraðahermun gefur nákvæmasta svarið, en nær ekkert verkfræðiteymi mun smíða og viðhalda einni, og líkan sem enginn treystir eða uppfærir er verra en ekkert líkan. Lögmál Littles og grunn nýtingarrakning gefa upp nokkra nákvæmni en krefjast engrar sérhæfðrar tölfræðikunnáttu og passa beint inn í mælikvarða sem teymi safnar þegar fyrir viðfangsefni 2.4 til 2.6. Hafðu þær ódýru, tækar athuganir sem sjálfgefið, og taktu fulla hermun frá fyrir sjaldgæft tilvik þar sem ein sameiginleg auðlind, stór CI-floti, sérhæfður yfirferðarhópur, er nógu dýr til að réttlæta fjárfestinguna.

## Spurningar til að ræða með teyminu

1. **Uppfylla mæld vinna í vinnslu, komuhraði og ferlitími okkar í raun lögmál Littles, og ef ekki, hvers vegna ekki?** Þetta er hraðasta einstaka greining sem völ er á fyrir slæma mælikvarðaskilgreiningu. Gangið saman gegnum raunverulegu tölurnar, og ef jafnan heldur ekki nokkurn veginn, rekið misræmið til sértækrar skilgreiningarósamkvæmni frekar en að vísa athuguninni frá.

2. **Hvaða sameiginlegu auðlindir í afhendingarleiðslu okkar keyra nærri fullri nýtingu, og vitum við í raun nýtingartölu þeirra?** Flest teymi geta nefnt auðlind sem „finnst alltaf upptekin“ en hafa aldrei mælt nýtingu hennar beint. Greinið tvær eða þrjár mest skorðuðu sameiginlegu auðlindirnar og fáið raunverulega tölu fyrir hverja.

3. **Blöndum við árangri, bilun og sleppi í eina afkastatölu, og hvað myndum við sjá ef við skiptum þeim í sundur?** Ein „atriði kláruð“ talning getur hækkað jafnvel meðan gæði falla eða vinna er hljóðlega yfirgefin. Endurreiknið afköst nýlegs tímabils sem þrjár aðskildar tölur og ræðið hvað skiptingin afhjúpar sem blandaða talan faldi.

4. **Hvar í leiðslu okkar er raunverulegi flöskuhálsinn, hægasta stigið sem setur hraðann fyrir allt niðurstreymis af því?** Teymi fjárfesta oft í að flýta stiginu sem er auðveldast að bæta frekar en því sem raunverulega skorðar heildarafköst. Greinið stigið með verstu samsetningu mikillar nýtingar og mikils bilunar- eða sleppihlutfalls.

5. **Ef við bættum getu við mest skorðuðu sameiginlegu auðlind okkar, myndi biðtími í raun batna, eða myndi eftirspurn einfaldlega stækka til að fylla hana?** Þessi spurning aðgreinir raunverulegan getuskort frá eftirspurnarvanda, og svarið breytir því hvort rétta lausnin er meiri mannskapur, WIP-mörk eða breyting á hvernig vinnu er forgangsraðað áður en hún fer í biðröðina.

6. **Höfum við nokkurn tímann endurskilgreint hvað telst „í vinnslu“ eða „komið“ á þann hátt að mælaborð leit betur út án þess að breyta því sem raunverulega gerðist við vinnuna?** Vert er að spyrja þessa heiðarlega og sértækt, með raunverulegum dæmum frá síðasta ári, frekar en að meðhöndla hana sem tilgátulegt áhyggjuefni.

## Geirasjónarhorn

**Sprotafyrirtæki.** Með handfylli verkfræðinga eru flestar biðraðir nógu stuttar til að formleg biðraðagreining sé of mikið. Gagnlega venjan er minni: taktu eftir þegar einn einstaklingur, oft æðsti verkfræðingurinn, hefur orðið raunveruleg sameiginleg auðlind sem allt annað bíður eftir, og meðhöndlaðu það sem nýtingarvanda sem vert er að nefna jafnvel án nokkurs formlegs líkans að baki.

**Lítil fyrirtæki.** Teymi lítils fyrirtækis þarfnast sjaldan neins fágaðra en að rekja nýtingu á einni eða tveimur raunverulega sameiginlegum auðlindum sínum, oft einum yfirferðaraðila eða einni afhendingarleiðslu, og fylgjast með punktinum þar sem „yfirleitt tiltækt“ verður hljóðlega „yfirleitt flöskuhálsinn“. Töflureiknir nægir; sérstök tól eru ekki nauðsynleg í þessum mæli.

**Stórfyrirtæki.** Sameiginlegar auðlindir margfaldast hratt í stórfyrirtækjamæli: miðlægt vettvangsteymi, sameiginlegt öryggisyfirferðarráð, sameiginlegur CI-floti sem þjónar tugum vöruteyma. Þetta eru einmitt auðlindirnar þar sem nýtingarrakning vinnur fyrir sér, því ein ofhlaðin sameiginleg auðlind getur hljóðlega rýrt afhendingartíma fyrir sérhvert teymi sem er háð henni, og mælikvarðar neins einstaks teymis munu afhjúpa orsök sem býr utan eigin leiðslu þeirra.

**Hið opinbera.** Afhendingarverkefni margra stofnana og margra söluaðila beina oft vinnu gegnum sameiginleg samþykkisráð, sameiginleg öryggisvottunarferli og sameiginleg prófunarumhverfi sem ekkert eitt teymi stjórnar eða getur breytt stærð á eitt og sér. Biðraðagreining þessara sameiginlegu hliða, komuhraði, geta, nýting, eru oft skýrustu sönnunargögn sem völ er á fyrir viðskiptarök um að bæta við getu eða breyta því hvernig vinnu er lotuð áður en hún nær hliðinu.

## Dæmi

**Stórfyrirtæki.** Innra vettvangsteymi skýjainnviðaveitu tók eftir að leiðartími breytinga (viðfangsefni 2.10) hafði læðst upp hjá sérhverju vöruteymi sem var háð sameiginlega CI-flotanum, þótt ekkert einstakt teymi hefði breytt vinnulagi sínu. Nýtingargreining fann flotann keyra yfir 90% upptekinn á kjarnatíma, langt fram yfir punktinn þar sem biðraðafræði spáir að biðtími vaxi snöggt frekar en smám saman. Vettvangsteymið bætti við CI-getu og tók upp sanngirnisdeilingarstefnu í tímasetningu svo að skyndiblossi virkni eins teymis gæti ekki einokað biðröðina. Miðgildisbiðtími CI féll um meira en helming innan mánaðar, sönnun þess að flöskuhálsinn hafði verið sameiginleg, ósýnileg biðröð allan tímann.

**Hið opinbera.** Stafrænt þjónustuteymi landsstofnunar leyfisveitinga rakti afgreiðslu umsókna sem eina „mál lokuð á viku“ afkastatölu í tvö ár, og talan leit stöðug út. Nánari greining, sem skipti þeirri tölu í mál samþykkt, synjað og yfirgefin af umsækjendum eftir langa töf, fann að yfirgefningarhlutfall hafði nær þrefaldast á sama tímabili meðan samþykktir héldust flatar. Lögmál Littles, beitt á biðröð málsmeðferðarfólks, sýndi að vinna í vinnslu hafði vaxið langt umfram það sem tilgreindur meðalafgreiðslutími teymisins gaf til kynna, sem þýddi að mál hrúguðust hljóðlega upp í stöðu sem ekki var talin „bið“. Stofnunin endurskipulagði málarakningarskilgreiningar sínar til að telja hvert opið mál heiðarlega og bætti við getu málsmeðferðarfólks sniðinni til að halda nýtingu undir 85%, nú rakið sem fast rekstrarmark samhliða afkastatölunni.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að beita grunnbiðraðagreiningu er að hún breytir „leiðslan finnst hæg“ í sértæka, verjanlega ákvörðun, bættu svigrúmi við þessa sameiginlegu auðlind, skiptu þessum blandaða mælikvarða í raunverulega þætti hans, frekar en óljósan þrýsting um að „vinna hraðar“ sem missir af raunverulegu orsökinni. Skýjainnviðadæmið hér að ofan, helmingaður biðtími af getu- og tímasetningarlagfæringu frekar en nokkurri breytingu á hegðun einstakra teyma, er mynstrið sem þessi greining framleiðir áreiðanlega: lagfæringin er næstum alltaf ódýrari en að biðja öll niðurstreymisteymi um að hreyfa sig hraðar í kringum flöskuháls sem þau sjá ekki.

Heildarkostnaður við upptöku er sannarlega lágur. Lögmál Littles og nýtingarrakning þarfnast engra nýrra tóla umfram það sem viðfangsefni 2.4 til 2.6 biðja þig þegar um að safna: komuhraða, vinnu í vinnslu og ferlitíma. Fjárfestingin er aðallega greiningaragi, að bera tölurnar saman hver við aðra og yfirfara nýtingu á sameiginlegum auðlindum reglulega áður en þær verða næsta óútskýrða leiðartímaafturför skipulagsheildarinnar.

## Andmynstur og gildrur

- **Að stilla getu sameiginlegrar auðlindar nákvæmlega til að passa við meðalkomuhraða hennar:** tryggir háa nýtingu og stjórnlausa biðtíma hvenær sem eftirspurn er jafnvel augnablik ójöfn.
- **Að skýra aðeins frá meðalbiðtíma, aldrei hundraðshlutamarki:** felur langa halann sem skiptir mestu máli fyrir fólkið sem bíður í honum.
- **Að blanda árangri, bilun og sleppi í eina afkastatölu:** leikvektorinn í hjarta þessa viðfangsefnis. Teymi undir þrýstingi getur látið afköst líta heilbrigð út með því að láta sleppihlutfallið hljóðlega hækka, yfirgefnir miðar, hljóðlega niðurfelldar beiðnir, vinna sem aldrei er talin sem bilun. Varnarmælikvarðinn er að rekja komu-, árangurs-, bilunar- og sleppihlutfall sem fjórar aðskildar, sýnilegar tölur, sami agi og viðfangsefni 1.2 biður um fyrir hvern mælikvarða í þessari bók, svo hækkandi sleppihlutfall geti ekki falið sig á bak við flatt afkastarit.
- **Að meðhöndla „fólkið okkar er alltaf upptekið“ sem hrós:** það er einkenni mikillar nýtingar, helstu orsök langra, ófyrirsjáanlegra biðtíma.
- **Að endurskilgreina „í vinnslu“ til að minnka hljóðlega vinnu í vinnslu:** færir vinnu í ótalið ástand, „lokað“, „í bið“, án þess að breyta því hve langan tíma það tekur að klára, og brýtur lögmál Littles athugunina sem hefði annars gripið það.
- **Að gera ráð fyrir að biðraðalíkan þarfnist ekki viðhalds þegar það er smíðað:** komumynstur og geta breytast stöðugt, og úrelt líkan framleiðir sjálfsöruggar, rangar spár.

## Þroskalíkan

- **Stig 1, Upphaf:** Engin biðröð er mæld skýrt; biðtími er ræddur af sögusögnum sem „hlutir finnast hægir“.
- **Stig 2, Þróun:** Komuhraði, vinna í vinnslu og ferlitími eru rakin fyrir að minnsta kosti eina leiðslu, en aldrei athuguð gegn lögmáli Littles eða nýtingu á sameiginlegum auðlindum.
- **Stig 3, Stöðlun:** Lögmál Littles er hefðbundin samkvæmniathugun yfir afhendingarleiðslur, og nýting er rakin skýrt fyrir mikilvægustu sameiginlegu auðlindirnar.
- **Stig 4, Stjórnun:** Árangurs-, bilunar- og sleppihlutfall eru rakin sérstaklega fyrir hverja mikilvæga biðröð, og getuákvarðanir nota nýtingarmörk, ekki bara meðaleftirspurn.
- **Stig 5, Samhæfing:** Skipulagsheildin líkanar helstu leiðslur sínar sem biðraðir biðraða, greinir raunverulega flöskuhálsa kerfisbundið, og getur bent á tilteknar getu- eða ferlisbreytingar gerðar vegna biðraðagreiningar, með mældum biðtímabótum til að sýna fyrir það.

## Hugmyndir til umræðu

1. Veldu eina afhendingarleiðslu okkar og athugaðu hvort tölur hennar uppfylla lögmál Littles í dag.
2. Nefndu einu sameiginlegu auðlindina í skipulagsheild okkar sem flestir myndu vera sammála um að sé „alltaf upptekin“, og finndu raunverulega nýtingartölu hennar.
3. Hvernig myndi afkastarit okkar líta út ef við skiptum því í árangurs-, bilunar- og sleppihlutfall síðasta ársfjórðungs?
4. Ef við þyrftum að bæta getu við nákvæmlega eina sameiginlega auðlind á þessu ári, hverja, og hvaða sönnunargögn myndu réttlæta það?

## Helstu atriði til að muna

- **Lögmál Littles**, vinna í vinnslu jafngildir komuhraða sinnum ferlitíma, er sönnun, ekki ágiskunarregla, og ódýrasta tiltæka athugunin á hvort afhendingarmælikvarðar þínir séu innbyrðis samkvæmir.
- **Biðtími vex snöggt, ekki smám saman, þegar nýting nálgast fulla getu.** Meðhöndlaðu „alltaf upptekið“ sem viðvörunarmerki, ekki hrós.
- Raktu **komuhraða, árangurshlutfall, bilunarhlutfall og sleppihlutfall** sérstaklega; að blanda þeim í eina afkastatölu er aðalleikvektor þessa viðfangsefnis.
- Líkanaðu fjölstigaleiðslu sem **biðröð biðraða**, og fjárfestu í stiginu með verstu samsetningu mikillar nýtingar og mikils bilunar- eða sleppihlutfalls, ekki stiginu sem er auðveldast að bæta.
- Kjóstu ódýrar, tækar athuganir, **lögmál Littles og nýtingarrakningu**, fram yfir fulla biðraðahermun sem fá teymi halda uppi.

## Heimildir og frekara lesefni

- Little, John D. C. „A Proof for the Queuing Formula: L = λW.“ *Operations Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*. Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and Solve Performance Problems on the Computer Systems You Work With*. CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*. Actionable Agile Press, 2015.
