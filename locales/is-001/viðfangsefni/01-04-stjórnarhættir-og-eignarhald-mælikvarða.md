# 1.4 Stjórnarhættir og eignarhald mælikvarða

## Yfirlit og tilgangur

Mælikvarði án eiganda er stöðugt deilumál sem bíður þess að gerast. Tvö teymi reikna „virka notendur“ á ólíkan hátt og eyða fundi í að samræma tölur í stað þess að stýra þróuninni; mælaborðsflís sem enginn viðheldur úreldist hljóðlega mánuðum saman áður en nokkur tekur eftir; mælikvarði sem upphaflega var smíðaður til greiningar fyrir eitt teymi er tekinn upp af öðru teymi í tilgangi sem upprunaleg skilgreining hans var aldrei hönnuð til að styðja. Ekkert af þessu er mælingarvandi í tölfræðilegum skilningi. Þetta er stjórnarháttavandi, og hann er leysanlegur með sama aga og skipulagsheildir beita þegar á kóða: skýru eignarhaldi, skjalfestum [einum sannleiksgrunni](https://en.wikipedia.org/wiki/Single_source_of_truth) og yfirferðarferli.

Stjórnarhættir eru ekki skrifræði vegna skrifræðisins. Þeir eru það sem lætur mælikvarðaáætlun lifa af snertingu við stærð skipulagsheildar. Eitt teymi getur geymt skilgreiningar mælikvarða sinna í höfði einhvers og leiðrétt rek með daglegu samtali. Skipulagsheild með tugi teyma, sem hvert framleiðir og neytir mælikvarða, getur það ekki. Án stjórnarhátta reka skilgreiningar hljóðlega, mælikvarðar fjölga sér án þess að nokkur klippi þá, og þegar forysta tekur eftir að tvær skýrslur stangast á hefur kostnaðurinn við að samræma þær þegar verið greiddur margfalt í sóuðum fundum og glötuðu trausti.

Fyrir stórfyrirtæki og hið opinbera vega stjórnarhættir enn þyngra því mælikvarðar næra sífellt oftar ákvarðanir með raunverulegum afleiðingum, fjárlagaúthlutun, opinbera frammistöðuskýrslugjöf, birgjasamninga, sem lifa lengur en nokkur einn maður sem smíðaði upprunalega mælaborðið. Mælikvarðasáttmáli sem lifir af mannaskipti, sem hver nýr liðsmaður getur lesið og skilið, er það sem lætur tölur skipulagsheildar þýða það sama eftir fimm ár og þær gera í dag.

## Lykilmeginreglur

- **Sérhver mælikvarði hefur nákvæmlega einn eiganda.** Sameiginlegt eignarhald er ekkert eignarhald; þegar allir eiga skilgreiningu viðheldur enginn henni.
- **Mælikvarði hefur einn sannleiksgrunn.** Tvö kerfi sem reikna sama mælikvarða á ólíkan hátt eru stjórnarháttabilun sem bíður þess að koma upp.
- **Stjórnarhættir eru skrifaðir niður, ekki þögul þekking.** Mælikvarðasáttmáli sem lifir aðeins í minni einhvers lifir ekki brottför hans af.
- **Afleggjun er jafn mikilvæg og upptaka.** Heilbrigð mælikvarðaáætlun klippir jafn vísvitandi og hún vex.
- **Stjórnarhættir vaxa með afleiðingum, ekki með fjölda mælikvarða.** Mælikvarði sem næri opinbera skýrslu þarfnast þyngri stjórnarhátta en sá sem eitt teymi notar til að kemba eigin sprett.

## Ráðleggingar

### Skrifaðu mælikvarðasáttmála fyrir sérhvert mælikvarðasafn sem fer yfir teymismörk

**Mælikvarðasáttmáli** er stutt, lifandi skjal sem lýsir tilgangi mælikvarðasafns, skýrum ekki-markmiðum þess (greining-á-móti-mati greinarmunurinn úr viðfangsefni 1.1 á heima hér), eiganda og sannleiksgrunni hvers mælikvarða og yfirferðartíðni. Haltu honum á einni blaðsíðu. Skráin docs/examples/metrics-charter-example.md í fylgigeymslu þessarar bókar sýnir lögunina. Svo stuttur sáttmáli er lesinn; sáttmáli sem þenst út í stefnuskjal er það ekki.

### Úthlutaðu nafngreindum eiganda á sérhvern mælikvarða, ekki teymi

„Vettvangsteymið á þennan mælikvarða“ dreifir ábyrgð þar til enginn viðheldur honum í raun. Nefndu manneskju eða tiltekið, ábyrgt hlutverk. Sá eigandi ber ábyrgð á að skilgreining mælikvarðans haldist nákvæm, tækjavæðing hans heilbrigð og á að svara spurningunni „hvers vegna lítur þessi tala skakkt út“ þegar hún óhjákvæmilega kemur upp. Eignarhald má og á að færast þegar fólk skiptir um hlutverk, en sáttmálinn ætti alltaf að nefna núverandi eiganda, aldrei skilja reitinn eftir auðan.

### Settu einn sannleiksgrunn á hvern mælikvarða og bannaðu samhliða útreikning

Þegar tvö kerfi reikna sama nafnbundna mælikvarða á ólíkan hátt, til dæmis „virkir notendur“ eins teymis telja innskráningar og annars telja API-köll, kostar misræmið sem af hlýst langtum meira í samræmingarfundum en það hefði kostað að koma sér saman um einn sannleiksgrunn fyrirfram. Nefndu ráðandi kerfi fyrir hvern mælikvarða í sáttmálanum og meðhöndlaðu hvern annan útreikning sama mælikvarða annaðhvort sem galla til að laga eða mælikvarða með öðru nafni sem ætti að endurnefna.

### Byggðu afleggingaryfirferð inn í stjórnarháttatíðnina

Mælikvarðaáætlun sem aðeins bætir við safnar mælaborðsóreiðu sem enginn getur brugðist við (viðfangsefni 1.1). Á sérhverri stjórnarháttayfirferð, samhliða tillögum um nýja mælikvarða, spyrðu hvaða núverandi hafa ekki upplýst ákvörðun síðustu tvær lotur og eru frambjóðendur til afleggingar. Afleggjun er ekki bilun; hún er sami agi og heilbrigður kóðagrunnur beitir á dauðan kóða.

### Láttu stjórnarháttaþunga fylgja afleiðingum, ekki magni

Ekki þarf sama ferli fyrir alla mælikvarða. Mælikvarði sem eitt teymi finnur upp til að kemba eigin sprett þarfnast nær engra stjórnarhátta umfram að teymið viti hvað hann þýðir. Mælikvarði sem nærir framkvæmdastigatöflu, opinbera frammistöðuskýrslu eða laun einstaklings þarfnast skjalfestrar skilgreiningar, nafngreinds eiganda, úttektarslóðar og samþykkis áður en hann fer í loftið. Láttu þunga ferlisins samsvara afleiðingum þess að mælikvarðinn sé rangur, ekki því hve margir mælikvarðar eru til.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Engir formlegir stjórnarhættir | Hratt, lítil yfirbygging fyrir lítil teymi | Skilgreiningar reka; eignarhald dreifist; mælaborð vaxa stjórnlaust |
| Létt sáttmálagerð á mælikvarðasafn | Ódýrt, læsilegt, vex með skipulagsheildinni | Krefst aga til að halda uppfærðu; má sleppa undir tímapressu |
| Þung miðlæg mælikvarðastjórn | Sterkt samræmi, sterk úttektarslóð | Hægt að samþykkja nýja mælikvarða; getur orðið flöskuháls sem teymi sniðganga |
| Stjórnarhættir í samræmi við afleiðingar | Samræmir fyrirhöfn við raunverulega áhættu | Krefst dómgreindar til að flokka afleiðingar rétt; má leika með því að vanmeta hagsmuni |

Aðalspennan er **samræmi á móti hraða**. Þungir miðlægir stjórnarhættir framleiða áreiðanlega, samræmda mælikvarða en hægja á teymi einmitt þegar það vill tækjavæða eitthvað fljótt til að svara brýnni spurningu. Leystu spennuna með því að láta stjórnarháttaþunga fylgja afleiðingum: leyfðu teymum að tækjavæða frjálslega fyrir eigin greiningarnotkun, og krefstu fulls sáttmála, eignarhalds og samþykkisaga aðeins þegar mælikvarði fer yfir teymismörk eða nærir mats- eða opinbera notkun.

## Spurningar til að ræða með teyminu

1. **Hefur sérhver mælikvarði sem fer yfir teymismörk nafngreindan eiganda, og myndi sá eigandi kannast við sig sem ábyrgan ef spurt væri í dag?** „Vettvangsteymið á hann“ er ekki svar; tiltekin manneskja eða hlutverk er það. Endurskoðið þvert-teymis mælikvarða ykkar og athugið hvort nefndur eigandi, ef nokkur er, veit í raun að hann ber þá ábyrgð.

2. **Hvar reiknum við nú sama nafnbundna mælikvarða á tvo ólíka vegu, og hve miklum tíma höfum við varið í að samræma ágreininginn?** Þetta er einn dýrasti og algengasti stjórnarháttabrestur í stórum skipulagsheildum, og hann er algerlega fyrirbyggjanlegur með skjalfestum einum sannleiksgrunni. Komið með raunverulegt dæmi ef þið eigið og rekið kostnað þess.

3. **Hvenær lögðum við síðast niður mælikvarða, og hvað kom þeirri ákvörðun af stað?** Skipulagsheild sem getur aðeins lýst hvernig hún bætir við mælikvörðum, aldrei hvernig hún fjarlægir þá, safnar mælaborðsskuld. Ef þið munið ekki eftir afleggingu er sú fjarvera sjálf svarið við þessari spurningu.

4. **Er stjórnarháttaferli okkar í réttu hlutfalli við afleiðingar, eða fer sérhver mælikvarði gegnum sama þunga yfirferðar óháð hagsmunum?** Of þungir stjórnarhættir á lítilvægum teymismælikvarða hægja á vinnu án öryggisávinnings; of léttir stjórnarhættir á mælikvarða sem nærir opinbera skýrslu eða launaákvörðun eru raunveruleg áhætta. Kortleggið núverandi mælikvarða ykkar eftir afleiðingum og berið ferlisþungann heiðarlega saman við það.

5. **Hvað verður um eignarhald mælikvarða þegar sá sem smíðaði hann skiptir um hlutverk eða hættir?** Mælikvarðasáttmáli sem aðeins er til í höfði einnar manneskju hverfur með henni. Prófið þetta með því að velja mælikvarða og spyrja hvort nýr starfsmaður gæti, af skriflegum gögnum einum, skilið skilgreiningu hans, sannleiksgrunn og tilgang.

6. **Hvernig myndum við vita ef skilgreining mælikvarða hefði breyst hljóðlega?** Breyting á því hvernig tala er reiknuð, án breytingar á nafni hennar eða athugasemdar í sögu hennar, er nær ósýnileg þar til einhver ber saman gömul og ný gögn og finnur ósamfellu sem hann getur ekki útskýrt. Ræðið hvort mælikvarðar ykkar bera nokkra mynd af breytingaskrá í dag.

## Geirasjónarhorn

**Sprotafyrirtæki.** Formlegir stjórnarhættir eru yfirleitt of mikið fyrir fimm manna teymi þar sem allir vita þegar hvað hver tala þýðir. Sá eini agi sem vert er að taka upp snemma engu að síður er að nefna einn eiganda á mælikvarða skriflega, því það kostar nær ekkert og kemur í veg fyrir rugling þegar fyrstu starfsmennirnir bætast við og fara að spyrja hvað tala þýðir.

**Lítil fyrirtæki.** Stjórnarhættir hér þýða aðallega að velja, og halda sig við, eitt tól sem sannleiksgrunn fyrir hvern mælikvarða frekar en að láta töflureikna og innbyggt mælaborð vettvangs reka hljóðlega í sundur. Skrifaðu sáttmálann sem eitt sameiginlegt skjal, jafnvel óformlegt, svo nýr starfsmaður geti fundið hvað tala þýðir án þess að spyrja í kring.

**Stórfyrirtæki.** Hér vinna stjórnarhættir fyrir sér. Staðlaðu skilgreiningar yfir rekstrareiningar, krefstu sáttmála fyrir allt sem nærir framkvæmdastigatöflu og byggðu afleggingaryfirferð inn í endurtekna stjórnarháttatíðni, því mælaborðsóreiða í þessum mæli verður fljótt dýr, bæði í viðhaldskostnaði og í trúverðugleikatapi þegar tvær deildir skýra frá mótsagnakenndum tölum um sama hlutinn.

**Hið opinbera.** Stjórnarhættir hafa hér oft lagalega eða úttektarvídd: birtir frammistöðumælikvarðar kunna að þurfa að uppfylla lögbundnar skýrslukröfur, og skilgreiningarbreyting getur haft raunverulegar pólitískar afleiðingar. Skjalaðu aðferðafræði opinberlega, frystu skilgreiningar yfir skýrslutímabil nema breytingin sé sjálf opinberlega rökstudd, og meðhöndlaðu óháða úttekt á skilgreiningu mælikvarðans, ekki bara núverandi gildi hans, sem varanlegan stjórnarháttahátt.

## Dæmi

**Stórfyrirtæki.** Fjölþjóðlegt hugbúnaðarfyrirtæki uppgötvaði, við samþættingu eftir yfirtöku, að tvær stærstu rekstrareiningar þess skilgreindu „afhendingartíðni“ ólíkt: önnur taldi hverja ýtingu í prófunarumhverfi, hin aðeins framleiðsluútgáfur. Forysta hafði borið afhendingarframmistöðu eininganna saman í yfir ár með tölum sem voru í raun ósambærilegar. Lausnin var fyrirtækjaleg mælikvarðastjórn sem birti eina orðaskrá mælikvarðaskilgreininga (endurspeglaða í viðfangsefni 9.2 í þessari bók), krafðist þess að hvert teymi vottaði samræmi og lagði niður tvíræðar staðbundnar skilgreiningar innan eins ársfjórðungs.

**Hið opinbera.** Hagstofa þjóðar, ábyrg fyrir birtingu frammistöðumælaborðs stafrænnar þjónustu, fann að breyting á því hvernig „leyst innan þjónustustigssamnings“ var reiknað, gerð hljóðlega af verkfræðiteymi sem lagaði það sem það taldi galla, hafði fært lykiltölu um samræmi um nokkur prósentustig án nokkurrar opinberrar skjölunar breytingarinnar. Stofnunin setti upp formlegt breytingastjórnunarferli fyrir sérhverja mælikvarðaskilgreiningu sem nærir opinbera skýrslu: fyrirhugaðar breytingar krefjast skjalfests rökstuðnings, fyrir-og-eftir samanburðar birts samhliða breytingunni og samþykkis nafngreinds ábyrgs embættismanns, sem lokaði bilinu sem hafði látið fyrri breytinguna fara framhjá.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun stjórnarhátta er forðaður samræmingarkostnaður. Sérhver klukkustund sem varið er á fundi þar sem tvö teymi deila um hvers tala sé rétt er klukkustund sem agaðir stjórnarhættir, einn sannleiksgrunnur og nafngreindur eigandi, hefðu komið algerlega í veg fyrir. Í mæli stórfyrirtækis magnast þessi kostnaður yfir tugi teyma og getur étið sannarlega verulegan hluta af athygli forystu á vandamáli sem eins blaðs sáttmáli á hvert mælikvarðasafn hefði forðað.

Heildareignarkostnaður léttrar stjórnarháttavenju, sáttmála, nafngreinds eiganda, reglulegrar yfirferðar, er hóflegur og aðallega fyrirfram. Valkosturinn, að uppgötva ári inn í stórt framtak að tölurnar sem forysta hefur treyst voru aldrei í raun sambærilegar, kostar stórlega meira, bæði í sóaðri greiningu og í trúverðugleikaskaða við að leiðrétta opinbera eða innri skrá eftir á.

## Andmynstur og gildrur

- **Teymiseign í stað eignar nafngreindrar manneskju:** dreifir ábyrgð þar til enginn viðheldur skilgreiningunni í raun.
- **Samhliða útreikningur sama nafnbundna mælikvarða:** tryggir að lokum ágreining og dýra samræmingu.
- **Sáttmáli sem aðeins er til í höfði einhvers:** hverfur um leið og sá skiptir um hlutverk.
- **Mælikvarðaáætlun sem aðeins bætir við, leggur aldrei niður:** framleiðir mælaborðsóreiðu sem enginn getur brugðist við.
- **Samræmdur stjórnarháttaþungi óháð afleiðingum:** hægir á lítilvægri vinnu meðan hann ver ekki nóg mælikvarða með miklum hagsmunum, opinbera eða tengda launum.
- **Hljóðlátar skilgreiningarbreytingar:** merking mælikvarða breytist án breytingaskrár og sögulegur samanburður verður hljóðlega ógildur.

## Þroskalíkan

- **Stig 1, Upphaf:** Mælikvarðar hafa enga formlega eigendur; skilgreiningar lifa í minni einstaklinga og reka hljóðlega milli teyma.
- **Stig 2, Þróun:** Sum teymi skrifa óformleg skjöl fyrir eigin mælikvarða, en ekkert sameiginlegt sáttmálasnið né þvert-teymis samræmi er til.
- **Stig 3, Stöðlun:** Sérhver mælikvarði sem fer yfir teymismörk hefur skjalfestan sáttmála, nafngreindan eiganda og einn samþykktan sannleiksgrunn, framfylgt í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Endurtekin stjórnarháttatíðni yfirfer mælikvarða fyrir áframhaldandi mikilvægi, leggur niður þá sem vinna ekki lengur fyrir sér og rekur skilgreiningarbreytingar með sýnilegri sögu.
- **Stig 5, Samhæfing:** Stjórnarhættir eru í réttu hlutfalli við afleiðingar, sjálfvirknivæddir þar sem hægt er (mælikvarðaskrá sem merkir óskjalfesta eða eigandalausa mælikvarða), og skipulagsheildin getur sýnt, eftir pöntun, fullan uppruna sérhverrar birtrar tölu.

## Hugmyndir til umræðu

1. Gæti nýr starfsmaður fundið, af skjölum einum, hvað þrír mikilvægustu mælikvarðar okkar þýða í raun?
2. Hverja mælikvarða okkar reikna tvö ólík kerfi nú á ólíkan hátt?
3. Hvenær lögðum við síðast niður mælikvarða, og hvernig ákváðum við það?
4. Er stjórnarháttaferli okkar þyngra þar sem afleiðingin er mest, eða er það samræmt?
5. Hver á afdrifaríkasta opinbera mælikvarða skipulagsheildar okkar, með nafni?

## Helstu atriði til að muna

- Sérhver mælikvarði þarfnast **eins nafngreinds eiganda**, ekki teymis, og **eins sannleiksgrunns**, ekki samhliða útreiknings.
- Skrifaðu stuttan, lifandi **mælikvarðasáttmála** fyrir sérhvert mælikvarðasafn sem fer yfir teymismörk, með tilgangi, ekki-markmiðum, eignarhaldi og yfirferðartíðni.
- **Afleggjun** er jafn mikilvægur stjórnarháttaagi og upptaka; klipptu vísvitandi.
- Láttu stjórnarháttaþunga fylgja **afleiðingum**, ekki fjölda mælikvarða: þyngra ferli fyrir opinbera, matskennda eða launatengda mælikvarða.
- Skilgreining mælikvarða getur rekið hljóðlega; raktu breytingar með sýnilegri sögu svo traust á tölu lifi af mannaskipti.

## Heimildir og frekara lesefni

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data Governance Program*, eftir John Ladley (stjórnarháttabyggingar sem eiga við um mælikvarðaáætlanir).
- *Measuring and Managing Performance in Organizations*, eftir Robert D. Austin (truflun í skipulagsheildum kringum eignarhald og notkun mælikvarða).
- *Key Performance Indicators*, eftir David Parmenter (eignarhald mælikvarða, skilgreiningaragi og yfirferðartíðni).
- U.S. Government Accountability Office (GAO) leiðbeiningar um frammistöðumælingu og GPRA Modernization Act: mælikvarðastjórnarhættir og breytingastjórnun hins opinbera.
