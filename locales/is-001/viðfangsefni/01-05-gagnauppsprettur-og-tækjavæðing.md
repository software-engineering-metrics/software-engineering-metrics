# 1.5 Gagnauppsprettur og tækjavæðing

## Yfirlit og tilgangur

Mælikvarði er aðeins jafn áreiðanlegur og gögnin undir honum, og flestar mælikvarðaáætlanir verja langtum meiri fyrirhöfn í að hanna mælaborð en í að sannprófa leiðsluna sem nærir þau. Þetta er öfugsnúið. Fallega hannað graf byggt á ósamkvæmri, sjálfskýrðri eða hljóðlega bilaðri tækjavæðingu er verra en ekkert graf, því það lítur út fyrir að vera marktækt meðan það er rangt. Þetta viðfangsefni snýst um óglæsilega undirstöðuna sem restin af bókinni gerir ráð fyrir: hvaðan verkfræðigögn koma í raun, hvenær á að treysta sjálfvirkri tækjavæðingu fram yfir sjálfsskýrslu og gagnagæðabrestina sem hljóðlega ógilda mælikvarða áður en nokkur tekur eftir.

Hugbúnaðarverkfræðigögn koma frá fáum tegundum uppspretta, hver með ólíka áreiðanleikaeiginleika. Útgáfustýring og [CI/CD](https://en.wikipedia.org/wiki/CI/CD) leiðslur mynda hlutlægar, tímastimplaðar og erfiðar-að-falsa skrár um það sem raunverulega gerðist. Verkefnaskráningarkerfi og verkefnastjórnunartól mynda skrár sem velta á að fólk uppfæri stöðu rétt og tímanlega, sem það gerir oft ósamkvæmt. Kannanir mynda sjálfskýrð gögn sem eru ómetanleg fyrir það sem ekkert kerfi getur fylgst með, eins og ánægju, en eru háð minnisskekkju og félagslegri æskilegleikaáhrifum. Vöktunarvettvangar mynda kerfisstigs fjarmælingar sem eru hlutlægar en ná aðeins yfir það sem var tækjavætt. Að vita úr hvaða flokki gögn tiltekins mælikvarða koma segir þér hve mikið á að treysta þeim og hvaða bilunarhætti á að gæta að.

Í mæli stórfyrirtækja og hins opinbera magnast gagnagæðavandamál því fjarlægðin milli uppruna gagna og lokanotkunar þeirra á mælaborði vex gegnum mörg kerfi, samþættingar og umbreytingar. Reitur sem þýðir eitt í upprunakerfinu getur þýtt eitthvað lúmskt öðruvísi þegar hann nær skýrslulaginu, og enginn niðurstreymis tekur eftir því því talan lítur enn trúverðug út. Að fá tækjavæðingu rétta er minna spennandi en að fá ramma rétta, en hún er undirstaðan sem allt annað í þessari bók stendur á.

## Lykilmeginreglur

- **Kjóstu tækjavæðingu fram yfir sjálfsskýrslu hvar sem kerfið getur fylgst beint með atburðinum.** Afhendingartímastimpill úr leiðslunni er áreiðanlegri en sjálfskýrður afhendingafjöldi teymis.
- **Notaðu sjálfsskýrslu aðeins fyrir það sem ekki er hægt að fylgjast beint með.** Ánægja, upplifaður núningur og vellíðan eiga sér enga skráningarkerfisstaðgengla; spyrðu beint og hannaðu könnunina vel (viðfangsefni 3.7). Taktu sjálfsskýrslu frá sérstaklega fyrir þann flokk.
- **Gögn sérhvers mælikvarða hafa upprunakerfi, söfnunaraðferð og þekktan bilunarhátt.** Skjalaðu öll þrjú, ekki bara skilgreininguna.
- **Gagnagæði rýrna hljóðlega.** Leiðsla sem virkaði rétt fyrir ári getur verið hljóðlega biluð í dag, og mælaborð heldur áfram að sýna ranga tölu án kvörtunar.
- **Tækjavæddu við sannleikspunktinn, ekki niðurstreymis við þýðingu.** Sérhvert stökk milli atburðarins og mælaborðsins er tækifæri fyrir merkingu til að reka.

## Ráðleggingar

### Kortleggðu sérhvern mælikvarða á raunverulegt upprunakerfi áður en þú treystir honum

Fyrir hvern mælikvarða á mælaborði, nefndu tiltekna kerfið sem myndar undirliggjandi atburð: CI/CD-leiðsluna fyrir afhendingaratburði, útgáfustýringarhýsilinn fyrir innsendingar- og sameiningaratburði, atvikaskráningarkerfið fyrir bilanaskrár, könnunarvettvanginn fyrir sjálfskýrða ánægju. Ef þú getur ekki nefnt nákvæmt kerfi veistu í raun ekki hvaðan talan kemur og getur ekki metið áreiðanleika hennar. Þessi kortlagning er forsenda stjórnarháttasáttmálans í viðfangsefni 1.4, ekki sérstök æfing.

### Tækjavæddu við atburðinn, ekki við skýrsluna

Áreiðanlegustu gögnin fanga atburð sjálfvirkt á augnablikinu sem hann á sér stað: leiðsla skráir afhendingu um leið og henni lýkur, útgáfustýringarkerfi skráir sameiningu um leið og hún lendir. Gögn sem velta á að manneskja muni að uppfæra stöðureit eftir á, að merkja miða „lokið“, skrá afhendingu handvirkt í töflureikni, versna í nákvæmni því fjær sem þau eru raunverulegum atburði og því uppteknari sem sá ábyrgi verður. Hvar sem sjálfvirkur atburður er til, kjóstu hann fram yfir mannskýrðan staðgengil sömu staðreyndar.

### Taktu kannanir frá fyrir það sem aðeins manneskja getur sagt þér

Sumt er í raun ekki hægt að fylgjast með úr kerfisfjarmælingum: hvort verkfræðingi finnst vinna sín merkingarbær, hvort ferli finnst pirrandi, hvort útbrunaáhætta er að vaxa. Þetta krefst þess að spyrja beint, og vel hönnuð könnun (viðfangsefni 3.7 fjallar um vélfræðina) er rétta tólið. Mistökin eru að nota sjálfsskýrslu fyrir hluti sem kerfi gæti fylgst beint með, að biðja verkfræðinga um að meta eigin afhendingartíðni í stað þess að sækja hana úr leiðslunni, sem kynnir óþarfan hávaða og skekkju í gögn sem hefðu getað verið hlutlæg.

### Byggðu gagnagæðaathuganir inn í leiðsluna sjálfa

Meðhöndlaðu mælikvarðaleiðslur með sama strangleika og framleiðslukóða: bættu við sjálfvirkum athugunum sem merkja þegar uppspretta hættir að senda gögn, þegar dreifing reits breytist óvænt eða þegar talning fellur óvænt í núll. Mælaborð sem hljóðlega sýnir úrelt eða bilað gögn eins og þau væru ný er verra en mælaborð sem sýnir sýnilega „gögn ekki tiltæk“, því hið fyrra rýrir traust ósýnilega meðan hið síðara segir að minnsta kosti sannleikann um eigin takmarkanir.

### Skjalaðu söfnunaraðferðina samhliða skilgreiningunni

Skilgreining mælikvarða („leiðartími breytinga“) er ekki fullkomin án söfnunaraðferðar hennar (mældur frá tímastimpli fyrstu innsendingar í útgáfustýringu til tímastimpils framleiðsluafhendingar í leiðslunni, að undanskildum bráðaviðgerðargreinum). Tvö teymi með sömu skilgreiningu en ólíkar söfnunaraðferðir munu samt framleiða ósambærilegar tölur. Skráðu hvort tveggja í mælikvarðasáttmálanum úr viðfangsefni 1.4, og meðhöndlaðu breytingu á hvoru sem er sem breytingu sem krefst sömu skjalfestu yfirferðar.

## Málamiðlanir: kostir og gallar

| Tegund uppsprettu | Kostir | Gallar |
| --- | --- | --- |
| Sjálfvirk leiðslutækjavæðing (CI/CD, útgáfustýring) | Hlutlæg, tímastimpluð, erfið að falsa, lítil viðvarandi fyrirhöfn | Krefst fjárfestingar í verkfræði fyrirfram til að smíða og viðhalda |
| Gögn úr verkefnaskráningar- og verkefnastjórnunarkerfum | Víða tiltæk, kunnugleg teymum | Velta á samviskusemi fólks; oft ósamkvæm milli teyma |
| Kannanir og sjálfsskýrsla | Eina uppspretta huglægrar upplifunar (ánægja, vellíðan) | Minnisskekkja, félagsleg æskilegleikaskekkja, svarþreyta |
| Vöktunar- og fjarmælingavettvangar | Ríkt, rauntíma, kerfisstigs merki | Nær aðeins yfir það sem var skýrt tækjavætt; getur verið dýrt í stórum mæli |

Aðalspennan er **hlutlægni á móti þekju**. Sjálfvirk tækjavæðing er áreiðanlegasta uppsprettan en getur alls ekki fylgst með huglægri upplifun, meðan kannanir ná einmitt því sem sjálfvirkni nær ekki en bera raunverulega skekkjuáhættu. Leystu spennuna með því að nota sjálfvirka tækjavæðingu hvar sem hægt er að fylgjast beint með atburði, og taka sjálfsskýrslu frá sérstaklega og eingöngu fyrir það sem sannarlega krefst þess að spyrja manneskju, aldrei sem lata staðgengil gagna sem kerfi hefði getað veitt.

## Spurningar til að ræða með teyminu

1. **Getum við nefnt nákvæmt upprunakerfi og söfnunaraðferð fyrir fimm mikilvægustu mælikvarða okkar, eða gerum við ráð fyrir skilgreiningu án þess að vita hvaðan gögnin koma í raun?** Þetta er furðu algengt bil: mælikvarði er tekinn upp úr ramma eða sjálfgefnu mælaborði söluaðila, og enginn í núverandi teymi veit í raun hvaða kerfi myndar undirliggjandi gögn eða hvernig. Rekið hvern til upprunans sem hópæfingu.

2. **Hverjir mælikvarða okkar treysta á sjálfsskýrslu fyrir eitthvað sem kerfi gæti fylgst beint með, og hvað þyrfti til að skipta þeirri sjálfsskýrslu út fyrir raunverulega tækjavæðingu?** Sjálfskýrður afhendingafjöldi, sjálfskýrðir unnir tímar og sjálfmetinn ferlitími eru öll algeng dæmi um að nota ranga gagnauppsprettu fyrir eitthvað sem sjálfvirkni gæti fangað áreiðanlegar. Greinið þetta og forgangsraðið að skipta út þeim með mestu hagsmunina.

3. **Hvernig myndum við vita ef ein gagnaleiðsla okkar biði hljóðlega bilun?** Flestar skipulagsheildir uppgötva bilaða mælikvarðaleiðslu aðeins þegar einhver tekur eftir að tala lítur ótrúverðug út, sem getur tekið mánuði. Ræðið hvort einhverjar leiðslna ykkar hafa sjálfvirkar heilsuathuganir í dag, og ef ekki, hverjar þurfa þær helst fyrst.

4. **Hvar hefur þýðing milli kerfa breytt merkingu mælikvarða án þess að nokkur hafi ákveðið það af ásettu ráði?** Reitur sem þýðir eitt í upprunakerfi getur þýtt eitthvað lúmskt öðruvísi eftir samþættingu eða flutning, og talan sem af hlýst getur litið trúverðug út meðan hún er röng. Gangið gegnum fulla gagnaleið afdrifaríkasta mælikvarða ykkar og leitið að þýðingarpunktum.

5. **Skjölum við söfnunaraðferðir, ekki bara skilgreiningar, í mælikvarðasáttmálum okkar?** Tvö teymi geta deilt nafni og skilgreiningu mælikvarða meðan þau reikna hann úr ólíkum söfnunaraðferðum og framleiða tölur sem eru í raun ekki sambærilegar. Endurskoðið úrtak sáttmála ykkar gegn þessu tiltekna bili.

6. **Hvernig greinum við milli raunverulegrar þróunar og gagnagæðagripar þegar tala hreyfist óvænt?** Skyndileg breyting á mælikvarða er oft fyrsta merki annaðhvort raunverulegrar breytingar eða bilaðrar leiðslu, og að greina þar á milli krefst þess að þekkja gagnauppsprettuna nógu vel til að rannsaka fljótt. Ræðið raunverulegt ferli teymis ykkar fyrir síðustu óútskýrðu mælikvarðabreytingu sem þið rákust á.

## Geirasjónarhorn

**Sprotafyrirtæki.** Með lítið tækjasafn geta flestir mælikvarðar komið beint frá CI/CD-veitu, útgáfustýringarhýsli og léttu könnunartóli, án þess að smíða sérsniðnar leiðslur. Áhættan er að sleppa jafnvel grunnheilsuathugunum því teymið hreyfist hratt; fimm mínútna sjálfvirk athugun á að gagnauppspretta sendi enn atburði er ódýr trygging gegn að fljúga hljóðlega blindur.

**Lítil fyrirtæki.** Styðstu við innbyggða skýrslugjöf fyrirliggjandi tóla frekar en að smíða sérsniðnar gagnaleiðslur sem þú hefur ekki getu til að viðhalda. Vertu skýr um hvaða tölur koma úr sjálfvirkum kerfum og hverjar eru mat sem einhver slær inn í töflureikni, því þær bera mjög ólíkan áreiðanleika, jafnvel þótt þær endi á sömu síðu.

**Stórfyrirtæki.** Gagnagæðavandamál magnast yfir samþættingar, flutninga og rekstrareiningamörk. Fjárfestu í miðlægum, vel vöktuðum gagnaleiðslum fyrir afdrifaríkustu mælikvarða þína, byggðu sjálfvirkar gagnagæðaathuganir sem staðlaða venju og endurskoðaðu söfnunaraðferðir, ekki bara skilgreiningar, þegar mælikvarðar eru bornir saman milli rekstrareininga.

**Hið opinbera.** Gagnauppruni getur borið lagalega og úttektarþyngd: birt frammistöðutala kann að þurfa að standast ytri úttekt ekki aðeins á gildi sínu heldur allri söfnunarkeðjunni. Skjalaðu gagnaætt skýrt, varðveittu söguleg söfnunaraðferðaskrár jafnvel eftir að aðferðafræði breytist og vertu tilbúinn að sýna nákvæmlega hvernig tala var framleidd, ekki bara hvað hún sýnir núna.

## Dæmi

**Stórfyrirtæki.** Verkfræðiforysta fjármálaþjónustufyrirtækis hafði rakið „leiðartíma breytinga“ í tvö ár áður en hún uppgötvaði að flutningur gagnaleiðslu átján mánuðum fyrr hafði hljóðlega skipt um tímastimplauppsprettu úr fyrstu innsendingu í stofnun sameiningarbeiðni, sem stytti sýnilegan leiðartíma að meðaltali um nokkrar klukkustundir yfir hvert teymi án þess að nokkur tæki eftir eða samþykkti breytinguna. Lagfæringin kom á gagnagæðaathugun sem ber dreifingu hvers mælikvarða saman viku fyrir viku og merkir tölfræðilega óvenjulegar breytingar til yfirferðar manna, sem greip tvö önnur hljóðlát leiðsluvandamál á næsta ári.

**Hið opinbera.** Opinbert áreiðanleikamælaborð samgöngustofnunar fyrir þjónustu byggði á blöndu sjálfvirkra skynjarafjarmælinga og handvirkt skráðra atvikaskýrslna frá svæðisskrifstofum. Úttekt fann að svæði með minni mönnunargetu vanskýrðu minni háttar atvik kerfisbundið, ekki af óheiðarleika heldur einfaldlega því handvirk skráning keppti um tíma við brýnni vinnu, sem þýddi að birt áreiðanleikatala var betri en raunveruleikinn einmitt á þeim svæðum sem síst höfðu efni á að vanfjármagnað viðhald færi óséð. Lagfæring stofnunarinnar skipti út handvirkri atvikaskráningu fyrir sjálfvirka skynjaraknúna skráningu hvar sem mögulegt var og bætti við skjalfestu mati á þekju handvirkrar skýrslugjafar samhliða birtu tölunni.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af traustri tækjavæðingu er sjálfstraust: forystuteymi sem treystir gögnum sínum getur brugðist ákveðið við þeim, meðan teymi sem hefur brennt sig á hljóðlega bilaðri leiðslu byrjar að efast um hverja tölu, sem hægir á hverri ákvörðun sem veltur á mælikvörðum. Það sjálfstraustatap er dýrt og erfitt að bæta, tekur oft langtum lengri tíma að endurbyggja en upprunalega tækjavæðingarfjárfestingin hefði kostað.

Heildareignarkostnaður góðrar tækjavæðingar felur í sér verkfræðivinnu fyrirfram til að smíða áreiðanlegar leiðslur og viðvarandi kostnað gagnagæðavöktunar, hvort tveggja auðvelt að vanfjárfesta í því hvorugt framleiðir sýnilega mælaborðsflís út af fyrir sig. Sú vanfjárfesting er fölsk hagræðing: kostnaðurinn við að uppgötva hljóðlega bilaða leiðslu eftir að mánuðir af ákvörðunum voru teknar á slæmum gögnum er langtum hærri en kostnaðurinn við að smíða heilsuathuganirnar sem hefðu gripið hana á fyrsta degi.

## Andmynstur og gildrur

- **Að treysta tölu án þess að þekkja upprunakerfi hennar:** mælikvarði tekinn úr ramma eða sjálfgefnu hjá söluaðila án þess að nokkur rekji hvaðan gögnin koma í raun.
- **Að sjálfskýra það sem kerfi gæti fylgst beint með:** kynnir óþarfan hávaða og skekkju í gögn sem hefðu getað verið hlutlæg.
- **Engar sjálfvirkar gagnagæðaathuganir á mælikvarðaleiðslu:** hljóðlega biluð leiðsla getur sýnt rangar tölur mánuðum saman óséð.
- **Að skjalfesta aðeins skilgreininguna, ekki söfnunaraðferðina:** tvö teymi með sama mælikvarðanafn geta samt reiknað ósambærilegar tölur.
- **Mælaborð sem sýnir „0“ eða úrelt gögn eins og ný, án vísbendingar um uppsprettubilun:** verra en sýnileg „gögn ekki tiltæk“ skilaboð.
- **Vanmönnuð svæði eða teymi sem kerfisbundið vanskýra vegna handvirkrar skráningarbyrði:** gagnagæðabil sem fylgir nákvæmlega þeim sviðum sem þurfa mesta athygli.

## Þroskalíkan

- **Stig 1, Upphaf:** Enginn getur áreiðanlega rakið mælikvarða til upprunakerfis hans; leiðslur hafa engar heilsuathuganir og bilanir fara óséðar.
- **Stig 2, Þróun:** Sumir mælikvarðar hafa skjalfestar uppsprettur, en söfnunaraðferðir eru ósamkvæmar og gagnagæðaathuganir tilfallandi í besta falli.
- **Stig 3, Stöðlun:** Sérhver stýrður mælikvarði skjalar upprunakerfi sitt og söfnunaraðferð; sjálfvirkar leiðslur eru ákjósanlegri en sjálfsskýrsla hvar sem hægt er að fylgjast beint með atburði.
- **Stig 4, Stjórnun:** Sjálfvirkar gagnagæðaathuganir vakta sérhverja afdrifaríka leiðslu, merkja frávik til yfirferðar, og gagnaætt er skjalfest og úttektarhæf.
- **Stig 5, Samhæfing:** Skipulagsheildin meðhöndlar gagnagæði sem fyrsta flokks verkfræðiaga með eigin vöktun og atvikaviðbragð, og getur sýnt fullan uppruna sérhvers birts mælikvarða eftir pöntun.

## Hugmyndir til umræðu

1. Gætum við rakið þrjá efstu mælikvarða okkar til nákvæms upprunakerfis þeirra núna, í beinni, á þessum fundi?
2. Hverjir núverandi mælikvarða okkar treysta á sjálfsskýrslu fyrir eitthvað sem kerfi gæti mælt beint?
3. Hafa einhverjar mælikvarðaleiðslur okkar sjálfvirkar heilsuathuganir í dag?
4. Hvenær uppgötvuðum við síðast hljóðlega bilaða gagnaleiðslu, og hve lengi hafði hún verið röng?
5. Hvar skapar handvirk gagnaskráning bil milli skýrðs og raunverulegs veruleika?

## Helstu atriði til að muna

- Kjóstu **sjálfvirka tækjavæðingu** fram yfir sjálfsskýrslu hvar sem kerfi getur fylgst beint með atburðinum; taktu sjálfsskýrslu frá fyrir sannarlega huglæga upplifun.
- Sérhver mælikvarði þarfnast skjalfests **upprunakerfis og söfnunaraðferðar**, ekki bara skilgreiningar.
- Gagnagæði **rýrna hljóðlega**; byggðu sjálfvirkar athuganir inn í leiðsluna sjálfa frekar en að uppgötva bilun fyrir tilviljun.
- Tækjavæddu **við atburðinn**, ekki niðurstreymis við þýðingu, til að lágmarka rek milli þess sem gerðist og þess sem mælaborðið sýnir.
- Kostnaður hljóðlega bilaðrar leiðslu, mánuðir af ákvörðunum teknum á slæmum gögnum, er langtum meiri en kostnaður heilsuathugananna sem hefðu gripið hana.

## Heimildir og frekara lesefni

- *Observability Engineering*, eftir Charity Majors, Liz Fong-Jones og George Miranda (hönnunarmeginreglur tækjavæðingar og fjarmælinga).
- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (tækjavæðingarnálgunin að baki DORA-mælikvörðunum).
- *Data Quality: The Accuracy Dimension*, eftir Jack E. Olson (gagnagæðahugtök sem eiga við um mælikvarðaleiðslur).
- *How to Measure Anything*, eftir Douglas W. Hubbard (mæliaðferðir fyrir stærðir sem virðast erfiðar að fylgjast beint með).
