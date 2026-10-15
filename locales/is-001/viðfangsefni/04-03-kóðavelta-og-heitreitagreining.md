# 4.3 Kóðavelta og heitreitagreining

## Yfirlit og tilgangur

**Kóðavelta** (code churn) mælir hve oft skrá eða eining breytist yfir tíma: línur bættar við, breyttar og eyddar yfir samfelldar innsendingar. Ein og sér er velta frekar veikt merki: sumar skrár breytast oft því þær eru í virkri, heilbrigðri þróun, og sumar breytast sjaldan því þær eru stöðugar og réttar, ekki því þeim er vanrækt. Raunverulegur greiningarmáttur nálgunar þessa viðfangsefnis kemur af því að sameina veltu og flækjustig (viðfangsefni 4.1): skrá sem er bæði oft breytt og mjög flókin, **heitreitur** (hotspot), er óhóflega líkleg til að vera uppspretta galla og dragbítur á hraða teymis, og reynslurannsóknir staðfesta þetta samkvæmt yfir marga kóðagrunna og skipulagsheildir.

**Heitreitagreining**, gerð vinsæl með starfi Adams Tornhill í hugbúnaðargreiningu, er sérstaklega verðmæt því hún krefst engrar handvirkrar könnunar eða huglægrar dómgreindar til að finna markmið sín. Saga [útgáfustýringar](https://en.wikipedia.org/wiki/Version_control) inniheldur þegar allt sem þarf til að reikna bæði veltu og, ásamt stöðugreiningartólum, flækjustig, fyrir hverja skrá í kóðagrunni sjálfvirkt. Þetta lætur teymi eða skipulagsheild greina, með raunverulegum sönnunargögnum frekar en sögusögnum eða háværustu kvörtun eftir á, nákvæmlega hvaða litla brot kóðagrunnsins verðskuldar endurbótaathygli fyrst.

Fyrir stór teymi leysir heitreitagreining raunverulegan úthlutunarvanda: kóðagrunnur með hundruð þúsunda lína hefur langtum meiri kóða en nokkurt teymi hefur efni á að endurbæta yfirgripsmikið, og innsæi um hvar verstu vandamálin búa er oft rangt, skekkt af þeim sem kvartaði síðast eða hvaða skrá æðri verkfræðingur illa við. Stórfyrirtæki og hið opinbera sem stýra stórum, langlífum kóðagrunnum reiða sig á þessa gagnadrifnu forgangsröðun til að beina sannarlega af skornum skammti endurbótafjárlögum að kóðanum sem skilar mestri ávöxtun.

## Lykilmeginreglur

- **Velta ein er veikt merki; velta ásamt flækjustigi er sterk.** Samsetningin, ekki hvor mælikvarði um sig, er það sem greinir raunverulegan heitreit.
- **Heitreitagreining krefst engrar handvirkrar könnunar.** Saga útgáfustýringar inniheldur þegar allt sem þarf til að reikna hana sjálfvirkt.
- **Heitreitur er forgangsröðunarmerki, ekki sjálfvirkur dómur.** Mannleg dómgreind þarf enn til að ákveða hvaða aðgerð tiltekinn heitreitur verðskuldar.
- **Tíðar breytingar eru ekki í eðli sínu slæmar.** Sumar veltur endurspegla heilbrigða, virka þróun frekar en gæðavanda.
- **Þessi greining vex nákvæmlega þar sem innsæi bregst:** í stórum kóðagrunnum of stórum til að nokkur einstaklingur kanni og forgangsraði eftir tilfinningu einni.

## Ráðleggingar

### Reiknaðu veltu og flækjustig saman, og raðaðu eftir samsetningu þeirra

Dragðu fram breytingatíðni á skrá úr sögu útgáfustýringar yfir marktækan glugga, yfirleitt sex mánuði til ár, og paraðu við flækjustigsmælikvarða (viðfangsefni 4.1) fyrir sömu skrár. Raðaðu skrám eftir samsetningunni, algengt margfeldi veltu og flækjustigs, frekar en eftir hvorum mælikvarða um sig, því sú samsetning er það sem undirliggjandi rannsóknir tengja samkvæmt við hækkuð gallahlutföll og viðhaldskostnað.

### Rannsakaðu helstu heitreiti með mannlegri dómgreind áður en þú bregst við

Raðaður heitreitalisti greinir frambjóðendur til athygli, ekki sjálfvirkan aðgerðalista. Fyrir hvern helsta heitreit þinn, rannsakaðu með mannlegu auga: er þetta sannarlega illa hannaður kóði sem þarfnast endurbóta, eða er þetta skrá sem þarfnast réttilega tíðra breytinga því hún situr í miðju virkrar, þróandi viðskiptarökfræði, en þá gæti forgangsröðun verið betri próf eða skýrari skjölun frekar en byggingarleg endurritun. Þetta speglar ómissandi-á-móti-tilfallandi flækjustigsgreinarmun viðfangsefnis 4.1, beittan hér á sameinaða velta-flækjustigs merkið.

### Víxlvísaðu heitreitum gegn atviks- og gallagögnum

Þar sem það er til staðar, athugaðu hvort greindir heitreitir ykkar fylgi raunverulegum framleiðsluatvikum (viðfangsefni 6.2) eða gögnum um sloppna galla (viðfangsefni 5.1). Sterk fylgni staðfestir heitreitagreininguna sem sannarlega spáandi fyrir tiltekinn kóðagrunn þinn og styrkir viðskiptarökin fyrir að bregðast við; veik eða fjarverandi fylgni bendir annaðhvort til gagnagæðavanda eða þess að velta og flækjustig séu ekki, í þínu tiltekna samhengi, rétta samsetning merkja til að forgangsraða eftir.

### Raktu heitreitaþróun yfir samfelldar greiningar, ekki bara staka mynd

Keyrðu heitreitagreiningu aftur reglulega, ársfjórðungslega er algengt, og raktu hvort áður greindir heitreitar séu að batna, versna eða leystir, og hvort nýir séu að koma fram. Heitreitur sem helst yfir margar greiningarlotur þrátt fyrir að vera merktur ítrekað bendir annaðhvort til þess að úrbótafyrirhöfn hafi ekki í raun verið beitt eða að fyrri úrbótatilraun hafi ekki tekið á raunverulega undirliggjandi vandanum.

### Notaðu heitreitagögn til að upplýsa, ekki koma í stað, forgangsröðunarsamtala teyma

Settu heitreitagreiningu fram sem sönnunargögn í forgangsröðunarumræðu, ekki sem sjálfvirka skipun sem hnekkir eigin samhengisdómgreind teymis um hvað skiptir mestu máli núna. Teymi kann að hafa góðar, réttmætar ástæður til að setja þekktan heitreit tímabundið aftar í forgangsröð, fyrirhuguð endurritun gerir stigvaxandi endurbætur sóaða fyrirhöfn, til dæmis, og greiningin ætti að upplýsa það samtal, ekki koma í stað þess.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Innsæisbyggð forgangsröðun | Hröð, engin tól nauðsynleg, nýtir samhengisþekkingu teymisins | Skekkt af nýleika, persónulegum smekk og þeim sem kvartar hæst |
| Velta ein | Einföld í útreikningi | Veikt merki eitt og sér; tíðar breytingar eru ekki í eðli sínu slæmar |
| Velta ásamt flækjustigi (heitreitagreining) | Sterk, sönnunarbyggð, sjálfvirk úr fyrirliggjandi gögnum | Krefst þess að sameina tvær gagnauppsprettur og túlka niðurstöður með dómgreind |
| Heitreitagreining víxlvísuð við atvikagögn | Staðfest, sterkustu sönnunargögn fyrir forgangsröðun | Krefst áreiðanlegrar atviks-í-kóða tengingar, sem ekki sérhver skipulagsheild hefur |

Aðalspennan er **sönnunargögn á móti samhengi**. Heitreitagreining veitir hlutlæg, stækkanleg sönnunargögn sem innsæisbyggð forgangsröðun getur ekki jafnað í stærð stórs, ókunnugs eða langlífs kóðagrunns, en hana skortir samhengisdómgreindina sem teymi hefur um hvers vegna tiltekinn heitreitur skiptir máli, eða ekki, núna. Leystu spennuna með því að meðhöndla heitreitagreiningu sem sönnunargrunn fyrir forgangsröðunarsamtal, sameinaða, aldrei í staðinn fyrir, eigin samhengisdómgreind teymisins um tímasetningu og málamiðlanir.

## Spurningar til að ræða með teyminu

1. **Hverjir eru fimm helstu heitreitir okkar, raðaðir eftir veltu og flækjustigi samanlögðu, og myndi sú röðun passa við innsæi teymisins um hvar verstu vandamál okkar búa?** Keyrið greininguna og berið niðurstöðuna saman við það sem teymi ykkar hefði giskað á áður en það sá gögnin; frávik eru oft verðmætasta niðurstaðan.

2. **Fylgja greindir heitreitar okkar raunverulegum framleiðsluatvikum eða gögnum um sloppna galla?** Ef þið hafið gögnin til að athuga þetta, gerið það beint; ef ekki er það bil sjálft vert að nefna sem eitthvað til að byggja í átt að.

3. **Fyrir helsta heitreit okkar núna, er undirliggjandi vandinn ómissandi flækjustig sem krefst réttilega tíðra breytinga, eða tilfallandi flækjustig sem endurbót gæti sannarlega lagað?** Gangið saman gegnum skrána og takið þessa dómgreind skýrt frekar en að gera ráð fyrir hvoru svarinu sem er.

4. **Hefur áður greindur heitreitur haldist yfir margar greiningarlotur þrátt fyrir að vera merktur?** Ef svo er, rannsakið heiðarlega hvers vegna: úrbót var aldrei í raun reynd, eða fyrri tilraun tók ekki á raunverulegu undirliggjandi orsökinni.

5. **Forgangsröðum við endurbótavinnu núna byggt á sönnunargögnum, eða byggt á þeim sem kvartaði síðast eða hæst?** Verið heiðarleg um raunverulegt núverandi forgangsröðunarferli teymis ykkar og hvernig það ber sig saman við það sem sönnunarbyggð heitreitagreining myndi benda til.

6. **Hvað myndi það kosta okkur, í gallahlutfalli eða afhendingarhægagangi, að láta helsta heitreit okkar vera ómeðhöndlaðan í annað ár?** Þessi spurning neyðir fram áþreifanlegt kostnaðarmat sem getur fest forgangsröðunarákvörðun, frekar en að skilja heitreitinn eftir sem óhlutstætt, auðveldlega aftar-í-forgangsröð áhyggjuefni.

## Geirasjónarhorn

**Sprotafyrirtæki.** Formleg heitreitagreining er yfirleitt óþörf með lítinn, ungan kóðagrunn sem allt teymið heldur enn sameiginlega í höfðinu. Tæknin verður verðmæt sérstaklega þegar kóðagrunnurinn hefur vaxið umfram stærðina þar sem nokkur einstaklingur getur áreiðanlega greint verstu svæðin eingöngu úr minni, oft einhvers staðar á fyrsta eða öðru ári viðvarandi vaxtar.

**Lítil fyrirtæki.** Ókeypis eða ódýr tól geta dregið veltugögn beint úr fyrirliggjandi útgáfustýringarsögu þinni með lágmarksuppsetningu; sameinaðu þau við hvaða flækjustigsgögn sem fyrirliggjandi lint- eða stöðugreiningartól þitt skýrir þegar, frekar en að fjárfesta í sérstökum viðskiptalegum heitreitagreiningarhugbúnaði í þessum mæli.

**Stórfyrirtæki.** Heitreitagreining er þar sem sönnunarbyggð forgangsröðun skilar mestri ávöxtun, þar sem innsæi bregst sannarlega í mæli kóðagrunns sem spannar hundruð þjónusta og þúsundir skráa. Fjárfestu í að keyra þessa greiningu reglulega yfir allan kóðagrunninn og víxlvísa gegn atvikagögnum til að byggja staðfest, verjanleg rök fyrir endurbótafjárfestingu.

**Hið opinbera.** Langlíf kerfi, stundum áratuga gömul, passa náttúrulega við heitreitagreiningu, því uppsöfnuð útgáfustýringarsaga veitir ríkt, langtímamerki um hvaða hlutar kerfisins hafa sannarlega reynst vandkvæðir yfir tíma. Þessi sönnunarbyggða nálgun er líka sannfærandi, áþreifanlegt tól til að réttlæta nútímavæðingarfjárfestingu fyrir hagsmunaaðilum sem þurfa meira en óformlega skoðun verkfræðings til að samþykkja fjármögnun.

## Dæmi

**Stórfyrirtæki.** Kröfuvinnsluvettvangur tryggingafélags, sem spannaði yfir tvær milljónir kóðalína yfir tugi þjónusta, hafði safnað árum óformlegra kvartana um að „kröfusannprófunareiningin“ væri vandkvæð, en engin formleg forgangsröðun hafði nokkurn tímann fylgt þeim kvörtunum. Heitreitagreining sem sameinaði sex mánaða veltugögn við flækjustigseinkunnir greindi allt aðra skrá, sameiginlegt gjaldmiðlaumbreytingartól grafið djúpt í sjaldan ræddu háð, sem raunverulegan helsta heitreit, einn sem hafði aldrei komið upp í nokkurri kvörtun eftir á. Víxlvísun gegn atvikagögnum staðfesti að þetta tól var flækt í ósamhlutfallslega hlutdeild fjárhagsútreikningsgalla á fyrra ári, og markviss endurbót á því tiltekna tóli, frekar en einingunni sem allir höfðu óformlega kennt um, framleiddi mælanlega fækkun tengdra atvika á næsta ársfjórðungi.

**Hið opinbera.** Áratugagamalt leyfiskerfi ríkisstofnunar ökutækja fór í heitreitagreiningu sem hluta af nútímavæðingarviðskiptarökum. Greiningin greindi lítinn klasa skráa, sem táknaði undir 3% af heildarkóðagrunninum, ábyrgan fyrir ósamhlutfallslegri hlutdeild bæði veltu og flækjustigs, og víxlvísun gegn atvikaskrá stofnunarinnar sýndi að þessi sami klasi bar ábyrgð á nær 40% allra tilkynntra kerfisgalla síðustu þrjú ár. Þessi áþreifanlega, sönnunarbyggða niðurstaða, langtum sannfærandi en almenn fullyrðing um að „kerfið sé gamalt og þarfnist nútímavæðingar“, varð miðpunktur árangursríkrar fjárlagabeiðni um markvissa, stigvaxandi nútímavæðingu einbeitta sérstaklega að þeim klasa frekar en langtum dýrari fulla kerfisskiptingu.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun heitreitagreiningar er markviss, sönnunarbyggð fjárfesting: bæði dæmin hér að ofan sýna tilvik þar sem formleg greining beindi endurbótaathygli frá því sem óformleg kvörtun hafði einbeitt henni að og að því sem gögnin sýndu að vandinn bjó, sem framleiddi mælanlega betri ávöxtun en ómarkviss eða innsæisdrifin fjárfesting hefði gert.

Heildareignarkostnaður er lágur, þar sem veltugögn koma beint úr fyrirliggjandi útgáfustýringarsögu og flækjustigsgögn eru yfirleitt þegar tiltæk úr stöðugreiningartólum (viðfangsefni 4.4); aðalfjárfestingin er reglubundin greiningarfyrirhöfn og mannlegi dómgreindartíminn til að túlka niðurstöður og ákveða hvaða aðgerð hver greindur heitreitur verðskuldar.

## Andmynstur og gildrur

- **Að nota veltu eina án flækjustigs:** veikt merki eitt og sér sem getur merkt heilbrigðan, virkt þróaðan kóða sem falska jákvæða.
- **Að meðhöndla heitreitaröðun sem sjálfvirkan aðgerðalista án mannlegrar dómgreindar:** missir af ómissandi-á-móti-tilfallandi greinarmuninum sem ræður réttu viðbragði.
- **Að forgangsraða endurbótum eftir háværustu kvörtun frekar en sönnunargögnum:** beinir oft fyrirhöfn frá þar sem gögnin sýna að vandinn býr.
- **Að víxlvísa heitreitum aldrei gegn atviks- eða gallagögnum:** missir af staðfestingarskrefinu sem styrkir rökin fyrir að bregðast við greiningunni.
- **Að keyra greininguna einu sinni og endurtaka hana aldrei:** missir af því hvort úrbótafyrirhöfn virkar í raun yfir tíma.
- **Að hunsa viðvarandi merktan heitreit án þess að rannsaka hvers vegna úrbót hefur ekki fest:** sóar greiningarvirði endurtekinnar greiningar.

## Þroskalíkan

- **Stig 1, Upphaf:** Endurbótaforgangsröðun er ákveðin af innsæi eða kvörtunarmagni, án nokkurra velta- eða flækjustigsgagna sem upplýsa ákvörðunina.
- **Stig 2, Þróun:** Sum teymi athuga óformlega veltu- eða flækjustigsgögn, en engin samkvæm, skipulagsheildarvíð heitreitagreiningarvenja er til.
- **Stig 3, Stöðlun:** Heitreitagreining sem sameinar veltu og flækjustig keyrir reglulega og upplýsir samkvæmt endurbótaforgangsröðun í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Heitreitar eru víxlvísaðir gegn atviks- og gallagögnum til að staðfesta greininguna, og þróun yfir samfelldar lotur er virkt rakin.
- **Stig 5, Samhæfing:** Skipulagsheildin getur bent á tilteknar, mælanlegar gallahlutfalls- eða afhendingarbætur af heitreitaupplýstri endurbótafjárfestingu, og greiningin er hefðbundið, treyst inntak í verkfræðifjárfestingarákvarðanir.

## Hugmyndir til umræðu

1. Hvernig myndi helstu heitreitalisti okkar líta út ef við keyrðum þessa greiningu í dag?
2. Myndi sá listi passa við, eða stangast á við, núverandi óformlega tilfinningu teymis okkar fyrir verstu vandamálasvæðum okkar?
3. Höfum við gögnin til að víxlvísa heitreitum gegn raunverulegum atvikum?
4. Hefur þekkt vandamálasvæði haldist þrátt fyrir fyrri tilraunir til að laga það, og hvers vegna?
5. Hvað myndi það kosta okkur að láta helsta heitreit okkar vera ómeðhöndlaðan í annað ár?

## Helstu atriði til að muna

- **Velta ásamt flækjustigi** greinir raunverulega heitreiti langtum áreiðanlegar en hvor mælikvarði um sig.
- Heitreitagreining krefst **engrar handvirkrar könnunar**; hún er reiknanleg sjálfvirkt úr fyrirliggjandi útgáfustýringar- og stöðugreiningargögnum.
- Meðhöndlaðu heitreitaröðun sem **sönnunargögn fyrir forgangsröðun**, ekki sjálfvirkan dóm; mannleg dómgreind er enn nauðsynleg.
- **Víxlvísaðu heitreitum gegn atviks- og gallagögnum** til að staðfesta greininguna og styrkja rökin fyrir að bregðast við.
- Raktu heitreiti **yfir samfelldar greiningarlotur** til að staðfesta að úrbót virki í raun, ekki bara einu sinni sem mynd.

## Heimildir og frekara lesefni

- *Your Code as a Crime Scene*, eftir Adam Tornhill (grundvallarritið um heitreitagreiningu sem sameinar veltu og flækjustig úr útgáfustýringargögnum).
- *Software Design X-Rays*, eftir Adam Tornhill (frekari tækni fyrir hegðunarkóðagreiningu með sögu útgáfustýringar).
- Nagappan, Nachiappan, og Thomas Ball, „Use of Relative Code Churn Measures to Predict System Defect Density,“ *ICSE* (2005): reynslurannsókn á sambandi veltu og gallaþéttleika.
- *Refactoring: Improving the Design of Existing Code*, eftir Martin Fowler (tækni til að takast á við tilfallandi flækjustig þegar það hefur verið greint).
