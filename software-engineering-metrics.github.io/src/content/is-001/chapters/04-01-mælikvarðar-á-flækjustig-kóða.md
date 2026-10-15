# 4.1 Mælikvarðar á flækjustig kóða

## Yfirlit og tilgangur

**[Hringkomplexitet](https://en.wikipedia.org/wiki/Cyclomatic_complexity)** (cyclomatic complexity), kynntur af Thomas J. McCabe árið 1976, telur fjölda óháðra leiða gegnum stýriflæði kóðahluta: sérhver `if`, lykkja og grein bætir við talninguna. Hann er enn mest notaði flækjustigsmælikvarði kóða nær fimmtíu árum síðar, ásamt skyldmennum eins og vitrænu flækjustigi (sem vegur djúpt hreiðruð og erfið-að-fylgja stýriflæði þyngra en upprunaleg línuleg talning McCabes) og hreiðurdýpt. Þessir mælikvarðar deila raunverulegri, staðfestri innsýn: kóði með fleiri óháðum leiðum gegnum sig er erfiðari að prófa að fullu, erfiðari að rökhugsa um og, í áratuga reynslurannsóknum, mælanlega líklegri til að innihalda galla.

Þetta viðfangsefni meðhöndlar þá innsýn með raunverulegri virðingu en meðhöndlar takmörk hennar með jafnri alvöru. Flækjustigsmælikvarðar mæla einn sértækan eiginleika kóða, og kóðagrunnur getur verið einfaldur samkvæmt sérhverjum flækjustigsmælikvarða meðan hann er enn illa hannaður, illa nefndur eða hugtakalega ósamhangandi á vegu sem engin greinatalningaralgrím geta greint. Öfugt krefjast sum óhjákvæmilega flókin vandamál sannarlega flókins kóða til að leysa rétt, og teymi undir þrýstingi að lágmarka flækjustigseinkunn getur framleitt kóða sem skorar vel meðan hann er í raun erfiðari að skilja, dreifir ómissandi flækjustigi yfir fleiri skrár og lög óbeinna tengsla frekar en að draga úr því.

Fyrir stór teymi vinna flækjustigsmælikvarðar fyrir sér sem forgangsflokkunartæki: leið til að finna, meðal þúsunda skráa, litla undirmengið sem líklegast er að verðskuldi nánari skoðun, ekki sem sjálfstæður dómur um kóðagæði. Stórfyrirtæki og hið opinbera sem viðhalda kóðagrunnum of stórum til að nokkur einstaklingur hafi lesið þá í heild reiða sig á þessa forgangsflokkunarvirkni til að beina af skornum skammti endurbótar- og yfirferðarfyrirhöfn þangað sem hún gerir mest gagn.

## Lykilmeginreglur

- **Flækjustigsmælikvarðar spá fyrir um prófunar- og gallaerfiðleika; þeir mæla ekki gæði beint.** Meðhöndlaðu þá sem eitt inntak, ekki dóm.
- **Flækjustigseinkunn er útsett fyrir leik gegnum duldingu, ekki bara raunverulega einföldun.** Að skipta flækjustigi yfir fleiri skrár getur lækkað einkunnina án þess að gera kóðann í raun auðveldari að skilja.
- **Sumt flækjustig er ómissandi, ekki tilfallandi.** Sannarlega erfitt vandamál getur krafist sannarlega flókins kóða; markmiðið er að lágmarka tilfallandi flækjustig, ekki útrýma öllu flækjustigi án aðgreiningar.
- **Notaðu flækjustigsmælikvarða til forgangsflokkunar, ekki sem einstaklings- eða teymisstigatöflu.** Þeir benda á hvar á að líta, ekki á hvern á að kenna.
- **Þróun og frávik skipta meira máli en nokkur algild viðmiðunarmörk.** Hækkandi þróun eða öfgafullt frávik er framkvæmanlegra en eitt teymisvítt meðaltal.

## Ráðleggingar

### Notaðu flækjustigsmælikvarða til að forgangsflokka yfirferðar- og endurbótafyrirhöfn

Keyrðu flækjustigsgreiningu yfir kóðagrunninn og notaðu niðurstöðurnar til að forgangsraða hvar nánari mannleg yfirferð eða endurbótafjárfesting borgar sig mest: föll eða skrár sem skora langt yfir dæmigerðu sviði kóðagrunnsins eru verðmætustu staðirnir til að skoða fyrst. Þessi forgangsflokkunarnotkun, að finna hvar á að líta, er verjanlegasta og verðmætasta beiting flækjustigsmælikvarða, langtum frekar en að nota þá sem algilt standast/falla hlið.

### Settu viðmiðunarmörk miðað við eigin kóðagrunn, ekki algilda tölu

Algild flækjustigsviðmiðunarmörk fengin óspart úr iðnaðarhefð (flækjustigseinkunn upp á tíu er algeng þumalputtaregla) geta verið annaðhvort of mild eða of ströng eftir sviði þínu: þáttari (e. parser) eða reglukerfi getur réttilega haft hærra grunnflækjustig en dæmigerð CRUD-þjónusta. Kvarðaðu eigin viðmiðunarmörk gegn raunverulegri dreifingu kóðagrunnsins þíns, og meðhöndlaðu brot á viðmiðunarmörkum sem hvata til að líta nánar á, ekki sjálfvirkt byggingarbrot, nema teymið hafi vísvitandi valið þá ströngu stefnu með fullri vitund um málamiðlanir hennar.

### Gættu að leik gegnum sundurliðun án raunverulegrar einföldunar

Algengasta leiðin sem flækjustigseinkunnir eru leiknar er staðgengilsmynstur viðfangsefnis 1.2 beitt á þennan tiltekna mælikvarða: að skipta einu sannarlega flóknu falli í nokkur minni föll sem skora hvert um sig vel, meðan heildarkerfið er jafn erfitt að skilja, eða stundum erfiðara, því rökfræðin er nú dreifð yfir fleiri skrár með meiri óbeinum tengslum á milli. Paraðu flækjustigsmælikvarða við eigindlega yfirferð á hvort sundurliðun skýrði kóðann sannarlega, eða hvort hún færði bara flækjustigið á stað þar sem mælikvarðinn sá það ekki lengur.

### Aðgreindu ómissandi flækjustig frá tilfallandi flækjustigi áður en þú bregst við

Áður en þú meðhöndlar háa flækjustigseinkunn sem vandamál til að laga, spyrðu hvort undirliggjandi vandamálið krefjist í raun svo margra óháðra leiða, skattalagareikningsrökfræði hefur réttilega margar greinar, til dæmis, eða hvort flækjustigið komi af forðanlegum orsökum: djúpt hreiðruðum skilyrðum sem mætti fletja, tvítekinni rökfræði sem mætti sameina, eða óskýrum ábyrgðarmörkum sem mætti endurteikna. Aðeins síðari flokkurinn er raunverulegt gæðavandamál sem þessi mælikvarði ætti að knýja þig til að laga.

### Raktu þróun og frávik, ekki bara meðaltalsmynd

Kóðagrunnsvítt meðalflækjustigseinkunn sem hreyfist lítillega er sjaldan framkvæmanleg ein og sér; flækjustig tiltekinnar skrár sem hækkar skarpt yfir nokkrar breytingar, eða fá öfgafull frávik í annars vel hegðuðum kóðagrunni, eru langtum gagnlegri merki. Raktu bæði þróun yfir tíma og frávikshalann, og notaðu þau til að kveikja sértæka, markvissa rannsókn frekar en víðtækt, óbeint flækjustigsminnkunarátak.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Algild viðmiðunarmörk | Einföld, samkvæm, auðvelt að sjálfvirknivæða | Hunsar réttmætan sviðsmun; hægt að leika með sundurliðun |
| Viðmiðunarmörk miðuð við kóðagrunn | Betur kvörðuð að raunverulegu samhengi | Krefst meiri uppsetningar og reglulegrar endurkvörðunar |
| Flækjustig sem sjálfvirkt byggingarhlið | Framfylgir samkvæmni án mannlegrar yfirferðaryfirbyggingar | Getur lokað á réttmætt flókinn en vel hannaðan kóða, eða umbunað duldri sundurliðun |
| Flækjustig sem forgangsflokkunarmerki fyrir mannlega yfirferð | Grípur raunveruleg gæðavandamál sem sundurliðun ein myndi missa af | Krefst meiri mannlegs yfirferðartíma en fullkomlega sjálfvirkt hlið |

Aðalspennan er **sjálfvirkni á móti dómgreind**. Fullkomlega sjálfvirkt flækjustigshlið er ódýrt að framfylgja og samkvæmt, en það getur bæði lokað á réttmætt flókinn, vel hannaðan kóða og umbunað yfirborðskenndri sundurliðun sem leikur einkunnina án þess að einfalda nokkuð í raun. Leystu spennuna með því að nota sjálfvirka flækjustigsgreiningu til að draga fram frambjóðendur til yfirferðar, og taka raunverulega dómgreind, er þetta flækjustig ómissandi eða tilfallandi, skýrði þessi endurbót sannarlega eða færði hún bara flækjustigið, frá fyrir mannlegan yfirferðaraðila frekar en hart sjálfvirkt hlið eitt og sér.

## Spurningar til að ræða með teyminu

1. **Eru flækjustigsviðmiðunarmörk okkar kvörðuð að raunverulegri dreifingu eigin kóðagrunns, eða fengin óspart úr almennri iðnaðarhefð?** Dragið fram raunverulega flækjustigsdreifingu kóðagrunnsins og athugið hvort núverandi viðmiðunarmörk ykkar séu skynsamleg gegn henni, frekar en að gera ráð fyrir að algeng tala gildi almennt um ykkar svið.

2. **Höfum við nokkurn tímann séð fall skipt í nokkur minni án þess að kóðinn sem af hlýst yrði í raun auðveldari að skilja?** Þetta er skýrasta merki sundurliðunarleikmynstursins sem þetta viðfangsefni varar við. Lítið á nýlega endurbót sem var fyrst og fremst knúin af flækjustigseinkunn og metið heiðarlega hvort hún bætti raunverulegan skiljanleika.

3. **Hvar í kóðagrunni okkar er flækjustig ómissandi vandamálinu, og hvar er það tilfallandi og lagfæranlegt?** Gangið gegnum flækjustigsmestu frávikin ykkar og flokkið þau skýrt í þessa tvo flokka, þar sem aðeins síðari flokkurinn táknar raunverulegt, framkvæmanlegt gæðavandamál.

4. **Notum við flækjustigsmælikvarða til að forgangsflokka yfirferðarfyrirhöfn, eða sem hart sjálfvirkt hlið án nokkurrar mannlegrar dómgreindar?** Ræðið hvort núverandi framfylgdaraðferð ykkar skilur eftir rými fyrir ómissandi-á-móti-tilfallandi greinarmuninn sem þetta viðfangsefni mælir með, eða hvort hún meðhöndlar sérhvert brot eins óháð samhengi.

5. **Hefur flækjustigseinkunn nokkurn tímann verið notuð, jafnvel óformlega, til að dæma gæði vinnu einstaks verkfræðings?** Þetta hættir á sömu einstaklingsmatsgildru og viðfangsefni 3.4 varar við fyrir virknimælikvarða, beitt hér á kóðamælikvarða í staðinn, og það býður sömu leikviðbrögð.

6. **Hvernig lítur flækjustigsþróun okkar út síðasta ár fyrir mikilvægustu, oftast breyttu skrárnar okkar?** Sameinið þetta við veltu- og heitreitagreininguna úr viðfangsefni 4.3, því skrá sem er bæði mjög flókin og oft breytt verðskuldar athygli löngu á undan einni sem er flókin en sjaldan snert.

## Geirasjónarhorn

**Sprotafyrirtæki.** Flækjustigsmælikvarðar eru yfirleitt minna brýnir í þessum mæli; kóðagrunnsstærð er nógu lítil til að óformleg kunnugleiki komi oft í stað formlegrar mælingar. Venjan sem vert er að taka upp snemma er einfaldlega að keyra flækjustigsskönnun öðru hverju til að grípa tiltekna skrá sem verður hljóðlega óviðráðanleg áður en teymið hefur vaxið of stórt til að taka eftir því óformlega.

**Lítil fyrirtæki.** Flest nútíma stöðugreiningartól skýra flækjustigsmælikvarða sem hluta af víðari, ókeypis eða ódýrum lint-uppsetningu; notaðu úttakið sem reglulegt forgangsflokkunarmerki frekar en að fjárfesta í sérstökum tólum. Einbeittu athygli að oftast breyttu skránum þínum fyrst.

**Stórfyrirtæki.** Flækjustigsmælikvarðar í stórum mæli eru verðmætastir sameinaðir veltugögnum (viðfangsefni 4.3) til að forgangsraða endurbótafjárfestingu yfir kóðagrunn of stóran til að nokkur einstaklingur kanni handvirkt. Kvarðaðu viðmiðunarmörk á þjónustu eða svið frekar en að beita einni skipulagsheildarvíðri tölu, því réttmætt flækjustig er verulega breytilegt yfir ólíkar tegundir kerfa.

**Hið opinbera.** Langlíf opinber kerfi safna oft flækjustigi smám saman yfir ár eða áratugi stigvaxandi kröfubreytinga, og flækjustigsúttekt getur verið sannfærandi, áþreifanlegt tól til að réttlæta nútímavæðingar- eða endurbótafjárfestingu fyrir hagsmunaaðilum sem kunna annars að líta á kerfið sem einfaldlega „virkandi“ og því ekki þess virði að fjárfesta í.

## Dæmi

**Stórfyrirtæki.** Greiðsluvinnslufyrirtæki keyrði kóðagrunnsvíða flækjustigsúttekt í fyrsta sinn og fann eitt færslusannprófunarfall með hringkomplexitetseinkunn meira en tíu sinnum miðgildi kóðagrunnsins. Rannsókn leiddi í ljós að flækjustigið var nær alfarið tilfallandi: ára stigvaxandi sértilvikameðhöndlun fyrir tiltekna greiðsluveitendur hafði safnast í djúpt hreiðruð skilyrði sem mætti endurskipuleggja í hreinna stefnumynstur sem aðskildi veitandasértæka rökfræði. Endurbótin, forgangsraðað beint því flækjustigsúttektin greindi hana sem verðmætasta einstaka markmið kóðagrunnsins, minnkaði flækjustigseinkunn fallsins um yfir 80% og, mikilvægara, minnkaði gallahlutfall í þeirri tilteknu kóðaleið mælanlega á næstu tveimur ársfjórðungum.

**Hið opinbera.** Áratugagömul bótareikningsvél skattstofu skoraði afar hátt á flækjustigsmælikvörðum í nær sérhverju falli, sem vakti upphafsforsendu um að allt kerfið þarfnaðist endurritunar frá grunni. Nánari yfirferð fall fyrir fall sem greindi ómissandi frá tilfallandi flækjustigi fann að mest af flækjustiginu endurspeglaði í raun undirliggjandi lagareglur, sem höfðu sannarlega svo margar réttmætar greinar og sértilvik sem lög mæltu fyrir um, meðan minni undirmengi kom af forðanlegri tvítekningu yfir svipaðar reikningsleiðir. Teymið miðaði aðeins á tilfallandi-flækjustigs undirmengið til endurbóta, forðaðist kostnaðarsama, áhættusama fulla endurritun en bætti samt marktækt vandkvæðustu svið kerfisins.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun þess að nota flækjustigsmælikvarða vel er markviss, hávirk endurbótafjárfesting: greiðsluvinnsludæmið hér að ofan sýnir eina, vel miðaða lagfæringu, greinda gegnum flækjustigsgreiningu, sem minnkaði galla mælanlega í nákvæmlega áhættumestu kóðaleiðinni, fyrir brot af kostnaði sem víðtækt, ómarkvisst endurbótaátak hefði krafist.

Heildareignarkostnaður er lágur: flest nútíma þróunartólakeðjur reikna flækjustigsmælikvarða sjálfvirkt sem hluta af stöðugreiningu (viðfangsefni 4.4), og raunverulega fjárfestingin er mannlegi dómgreindartíminn til að túlka niðurstöður rétt, aðgreina ómissandi frá tilfallandi flækjustigi og grípa sundurliðunarleik, frekar en nokkur marktækur nýr tólakostnaður.

## Andmynstur og gildrur

- **Að meðhöndla flækjustigseinkunn sem beinan gæðadóm:** hún mælir einn sértækan eiginleika, ekki heildarkóðagæði.
- **Að skipta falli til að leika einkunnina án raunverulegrar einföldunar:** sundurliðunarleikmynstrið sem þetta viðfangsefni nefnir sérstaklega.
- **Að beita algildum viðmiðunarmörkum án þess að kvarða að eigin kóðagrunni:** framleiðir annaðhvort of milda eða of stranga framfylgd eftir sviði.
- **Að nota flækjustigsmælikvarða til að meta verkfræðinga hvern fyrir sig:** býður leik og misbeitir mælikvarða ætluðum forgangsflokkun, ekki dómgreind.
- **Að meðhöndla allt flækjustig sem jafn lagfæranlegt:** ómissandi flækjustig frá sannarlega erfiðu vandamáli er ekki galli til að útrýma.
- **Að hunsa þróun og frávik í þágu flats, kóðagrunnsvíðs meðaltals:** missir af framkvæmanlegasta merkinu sem þessi mælikvarðafjölskylda veitir.

## Þroskalíkan

- **Stig 1, Upphaf:** Flækjustig er ekki mælt, eða er mælt með órannsökuðum, almennum algildum viðmiðunarmörkum beittum óspart.
- **Stig 2, Þróun:** Flækjustigsmælikvarðar eru safnaðir en sjaldan brugðist við, og enginn greinarmunur er gerður á ómissandi og tilfallandi flækjustigi.
- **Stig 3, Stöðlun:** Viðmiðunarmörk eru kvörðuð að eigin dreifingu kóðagrunnsins, og flækjustigsmælikvarðar knýja samkvæmt yfirferðar- og endurbótaforgangsflokkun í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Flækjustigsþróun og frávik eru virkt vöktuð og sameinuð veltugögnum (viðfangsefni 4.3) til að forgangsraða endurbótafjárfestingu; sundurliðunarleikur er virkt vaktaður.
- **Stig 5, Samhæfing:** Skipulagsheildin getur bent á tilteknar, mælanlegar gallahlutfallsbætur raktar beint til flækjustigsupplýstrar endurbótafjárfestingar, og flækjustigsgögn eru hefðbundið, treyst inntak í verkfræðifjárfestingarákvarðanir.

## Hugmyndir til umræðu

1. Hvert er flóknasta fall eða skrá hjá okkur, og er flækjustig þess ómissandi eða tilfallandi?
2. Höfum við nokkurn tímann leikið flækjustigseinkunn gegnum sundurliðun án raunverulegrar einföldunar?
3. Eru viðmiðunarmörk okkar kvörðuð að eigin kóðagrunni, eða fengin óspart?
4. Hvar skarast mikið flækjustig og mikil velta í kóðagrunni okkar núna?
5. Hafa flækjustigsgögn nokkurn tímann upplýst endurbótafjárfestingarákvörðun, eða liggja þau ónotuð?

## Helstu atriði til að muna

- Flækjustigsmælikvarðar eins og **hringkomplexitet** spá fyrir um prófunar- og gallaerfiðleika; þeir mæla ekki heildarkóðagæði beint.
- Aðgreindu **ómissandi flækjustig** (frá sannarlega erfiðu vandamáli) frá **tilfallandi flækjustigi** (forðanlegu með betri hönnun) áður en þú bregst við háni einkunn.
- Gættu að **sundurliðunarleik**: að skipta kóða til að lækka einkunn án þess að einfalda nokkuð í raun.
- Notaðu flækjustigsmælikvarða til **forgangsflokkunar**, að beina mannlegri yfirferð og endurbótafyrirhöfn, ekki sem einstaklingsstigatöflu eða stíft sjálfvirkt hlið.
- Kvarðaðu viðmiðunarmörk að **dreifingu eigin kóðagrunns**, og raktu **þróun og frávik**, ekki bara flatt meðaltal.

## Heimildir og frekara lesefni

- McCabe, Thomas J., „A Complexity Measure,“ *IEEE Transactions on Software Engineering* (1976): upprunalega hringkomplexitetsgreinin.
- *Code Complete*, eftir Steve McConnell (hagnýt leiðsögn um stjórn flækjustigs í hugbúnaðarsmíði).
- *Working Effectively with Legacy Code*, eftir Michael Feathers (tækni til að draga örugglega úr flækjustigi í fyrirliggjandi, erfiðum-að-breyta kóða).
- Campbell, G. Ann, „Cognitive Complexity: A New Way of Measuring Understandability“ (SonarSource, 2018): vitræna flækjustigsmælikvarðinn og greinarmunur hans frá hringkomplexiteti.
