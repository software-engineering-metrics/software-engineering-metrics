# 2.10 DORA-mælikvarðaramminn

## Yfirlit og tilgangur

**[DORA-mælikvarðarnir](https://dora.dev/guides/dora-metrics/)** koma frá [DevOps](https://en.wikipedia.org/wiki/DevOps) Research and Assessment áætluninni, margra ára rannsóknarátaki, síðar birtu sem bókin *Accelerate* eftir Nicole Forsgren, Jez Humble og Gene Kim, sem kannaði tugþúsundir verkfræðinga til að finna hvaða afhendingarvenjur fylgja frammistöðu skipulagsheilda. Niðurstaðan var fjórir mælikvarðar, paraðir tveir og tveir: afhendingartíðni og leiðartími breytinga mæla hraða; breytingabilunarhlutfall og batatími misheppnaðra afhendinga, oft styttur í meðalbatatíma (MTTR), mæla stöðugleika. Rannsóknarniðurstaðan sem gerði rammann mikilvægan var að afburðaframmistöðuaðilar voru hraðir og stöðugir samtímis, sem hnekkti þeirri forsendu að hraði og öryggi skiptist á móti hvort öðru, og sú niðurstaða er enn skýrasta útfærða dæmi þessarar bókar um varnarmælikvarðapörunarmeginreglu viðfangsefnis 1.2: hvatabundinn hraðamælikvarði, paraður við stöðugleikavarnarmælikvarða, er það sem best standandi skipulagsheildir gera í raun.

Þessi bók fjallar um DORA síðast í þessum hluta, viljandi, frekar en sem skipulagsramma hlutans. Sú staðsetning er ekki höfnun á rannsókninni, sem er áfram sannarlega ströng og vert að nota. Hún endurspeglar sértæka, raunverulega takmörkun: DORA mælir hve hratt og örugglega leiðsla hreyfist, en er þögul um hvað hreyfist gegnum leiðsluna. Teymi getur sýnt framúrskarandi DORA-tölur meðan raunveruleg afurð þess hefur hljóðlega rekið í átt að gallaendurvinnu eða sveltt tæknilega skuld og öryggisvinnu af getu, mynstur sem Flæðiramminn í viðfangsefnum 2.1 til 2.4 er sérstaklega byggður til að draga fram og DORA getur ekki séð. Notaðu DORA eins og þetta viðfangsefni setur það fram: vel staðfestur, þrengri tilvísunarmælikvarði á vélfræði leiðslu, ekki öll myndin af afhendingarheilsu.

Fyrir stór teymi er eftirstandandi, raunverulegt virði DORA samanburðarhæfni. Mælikvarði reiknaður samkvæmt úr leiðslu- og atvikagögnum lætur skipulagsheild bera saman afhendingargetu yfir mörg teymi sem vinna á ólíkum sviðum án epli-á-móti-appelsínum vandans sem hrjáir flestan þvert-teymis samanburð. Stórfyrirtæki nota hann enn til að forgangsraða vettvangsfjárfestingu; opinberar stofnanir nota hann enn til að sýna, með sönnunargögnum, að nútímavæðingarverkefni bætti mælanlega vélfræði afhendingar. Meðhöndlaðu það sem rétt, afmarkað hlutverk DORA, og notaðu viðfangsefni Flæðirammans fyrr í þessum hluta fyrir víðari spurninguna um hvort réttir hlutir séu afhentir yfirleitt.

## Lykilmeginreglur

- **DORA mælir leiðsluna, ekki virðið sem flæðir gegnum hana.** Viðfangsefni 2.1 nefnir þetta bil beint; notaðu flæðisdreifingu (viðfangsefni 2.3) til að sjá það sem DORA getur ekki.
- **Hraði og stöðugleiki eru mældir saman, aldrei sundur.** Mælaborð upplýst af DORA án beggja helminga notar ekki í raun rammann.
- **Samkvæmni skilgreiningar skiptir meira máli en hráa talan.** Teymi sem færist frá „miðlungs“ í „háa“ frammistöðu á samkvæmt skilgreindum mælikvarða er raunverulegt merki; að bera saman tvö teymi reiknuð ólíkt er það ekki.
- **DORA mælir kerfið, ekki einstaklinga.** Að beita þessum mælikvörðum á einstaka verkfræðinga brýtur tölfræðigrunn rammans og býður einmitt þann leik sem viðfangsefni 1.2 varar við.
- **Allir fjórir mælikvarðarnir eru staðgenglar, ekki markmið.** Þeir fylgja frammistöðu skipulagsheildar; að elta töluna sjálfa, aftengda raunverulegum afhendingarbótum, eyðir tilgangi rammans.

## Ráðleggingar

### Tækjavæddu afhendingartíðni úr leiðslunni, teldu aðeins framleiðsluútgáfur

**Afhendingartíðni** mælir hve oft teymi gefur út í framleiðslu með góðum árangri. Teldu aðeins vel heppnaðar framleiðsluafhendingar, tækjavæddar sjálfvirkt úr CI/CD-leiðslugögnum, aldrei sjálfskýrðar. Gættu sérstaklega að staðgengilsleik, að skipta einni marktækri breytingu í nokkrar léttvægar afhendingar eingöngu til að blása upp talninguna, með því að rekja afhendingarstærð samhliða tíðni: minnkandi meðalstærð við hlið hækkandi fjölda er skýrasta merkið um að þetta eigi sér stað.

### Tækjavæddu leiðartíma breytinga frá fyrstu innsendingu til framleiðslu

**Leiðartími breytinga** mælir tímann frá fyrstu innsendingu kóðabreytingar til vel heppnaðrar afhendingar hennar í framleiðslu. Skýrðu frá bæði miðgildi og háu hundraðshlutamarki, ekki bara meðaltali, samkvæmt leiðsögn viðfangsefnis 1.6 um skekkt tímabundin gögn, og gættu að skilgreiningarreki við hvorn endapunkt, sem flattar töluna án nokkurrar raunverulegrar umbótar.

### Skilgreindu breytingabilunarhlutfall skriflega áður en þú berð saman milli teyma

**Breytingabilunarhlutfall** mælir hundraðshluta afhendinga sem valda bilun sem krefst úrbóta, afturköllunar, bráðaviðgerðar eða atviks. Þetta er sá erfiðasti af fjórum að skilgreina samkvæmt, því „bilun“ er ekki sjálfsagt hlutlæg. Komdu þér saman um skriflega skilgreiningu áður en þú berð teymi saman; án hennar getur sýnilega sanngjarn samanburður villt illa. Gættu að grunsamlega hraðri framför án nokkurrar undirliggjandi ferlisbreytingar að baki, skýrasta merkinu um skilgreiningarleik frekar en raunverulegar framfarir.

### Mældu batatíma frá greiningu, ekki frá afhendingaratburðinum

**Batatími misheppnaðra afhendinga** mælir hve langan tíma tekur að endurheimta þjónustu þegar afhending veldur bilun. Byrjaðu klukkuna við greiningu, ekki við afhendingaratburðinn sjálfan, svo talan endurspegli raunverulega batatöf frekar en vöktunarbil. Fjárfestu sérstaklega í sjálfvirkri afturköllunargetu, algengustu einstöku lyftistönginni til að bæta þennan mælikvarða raunverulega frekar en með því að lýsa atvik leyst ótímabært.

### Notaðu flæðimælikvarða, ekki DORA, til að greina hvers vegna tala hreyfðist

Þegar DORA-mælikvarði breytist útskýra tölurnar fjórar einar sjaldan hvers vegna. Notaðu sundurliðun ferlitíma (viðfangsefni 2.6), flæðisálag (viðfangsefni 2.4) og flæðisdreifingu (viðfangsefni 2.3) sem greiningarlagið undir samantektartölum DORA, og notaðu aldrei DORA-mælikvarða í einstaklingsframmistöðuyfirferð, skaðlegustu einstöku misnotkun sem þessi rammi er útsettur fyrir.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Fullur DORA-rammi, allir fjórir mælikvarðar paraðir | Rannsóknarstaðfestur, stenst leik gegnum pörun, gerir sanngjarnan þvert-teymis samanburð mögulegan | Þögull um hvers konar virði er afhent; þarfnast Flæðirammans við hlið sér fyrir þá mynd |
| DORA sem eina skipulagsmælikvarðasafn þessa hluta | Einfalt, kunnuglegt flestum verkfræðileiðtogum | Missir algerlega af virðisblöndu-spurningunni, ástæða þessarar bókar fyrir að forgangsraða honum neðar hér |
| DORA ásamt Flæðiramma | Vélfræði leiðslu og virðisblanda bæði sýnileg | Krefst þess að viðhalda tveimur mælikvarðaorðaforðum í stað eins |
| DORA beitt á einstaklingsstigi | Finnst beint framkvæmanlegt sumum stjórnendum | Brýtur tölfræðilegt réttmæti rammans; sterk útsetning fyrir lögmáli Goodharts |

Aðalspennan er **vélrænn strangleiki á móti viðskiptalæsileika**. Fjórir mælikvarðar DORA eru nákvæmlega skilgreindir og rannsóknarstaðfestir, sem gerir þá framúrskarandi til að bera saman frammistöðu leiðslu yfir teymi, en sama nákvæmni er þröngt afmörkuð við leiðsluna sjálfa og segir ekkert um hvort rétta vinnan flæðir gegnum hana. Leystu spennuna með því að halda DORA sem tilvísunarlagi fyrir heilsu leiðslu, rétt staða viðfangsefnis 2.10 í byggingu þessarar bókar, meðan viðfangsefni Flæðirammans fyrr í þessum hluta eru notuð fyrir viðskiptavænu spurninguna um virðisblöndu, frekar en að reyna að láta DORA svara spurningu sem það var aldrei hannað til að svara.

## Spurningar til að ræða með teyminu

1. **Tækjavæðum við alla fjóra DORA-mælikvarðana úr leiðslunni, eða eru sumir þeirra sjálfskýrð mat?** Rammi byggður á hlutlægri, rannsóknarstaðfestri mælingu missir mikið af virði sínu um leið og tala verður besta ágiskun. Endurskoðið raunverulega gagnauppsprettu hvers mælikvarða (viðfangsefni 1.5).

2. **Deila öll teymin sem við berum saman með DORA-mælikvörðum sömu skilgreiningum á afhendingu, breytingu og bilun?** Samanburður milli teyma sem nota ólíkar skilgreiningar er ekki í raun samanburður, og getur framleitt ósanngjarna dóma um hlutfallslega frammistöðu.

3. **Hefur nokkur í skipulagsheild okkar notað DORA-mælikvarða í einstaklingsframmistöðuyfirferð, formlega eða óformlega?** Þetta er skaðlegasta einstaka misnotkun rammans og gerist oft hljóðlega. Spyrjið beint og verið tilbúin fyrir óþægilegt en nauðsynlegt svar.

4. **Gætu DORA-tölur okkar verið framúrskarandi meðan flæðisdreifing okkar (viðfangsefni 2.3) hefur hljóðlega rekið í átt að endurvinnu eða frá eiginleikum?** Þetta er einmitt bilið sem DORA eitt getur ekki séð. Dragið fram báðar talnaraðirnar saman og athugið hvort þær segja samkvæma sögu.

5. **Þegar einn DORA-mælikvarða okkar hreyfist, höfum við flæðimælikvarðagreiningarnar til að útskýra hvers vegna?** DORA-tala ein segir þér að eitthvað breyttist, ekki hvað. Athugið hvort teymi ykkar geta svarað „hvers vegna jókst leiðartími þennan mánuð“ með gögnum, eða aðeins með vangaveltum.

6. **Hvernig myndu fjórar DORA-tölur okkar breytast ef við reyndum vísvitandi að leika hverja þeirra, og myndum við taka eftir því?** Gangið gegnum afhendingartíðni, leiðartíma, breytingabilunarhlutfall og batatíma einn í einu, hagnýta beitingu kjarnaaga viðfangsefnis 1.2 á þennan tiltekna ramma.

## Geirasjónarhorn

**Sprotafyrirtæki.** Hraðamælikvarðar DORA koma yfirleitt eðlilega hjá litlu teymi sem afhendir þegar títt; erfiðari agi er að tækjavæða breytingabilunarhlutfall og batatíma heiðarlega frekar en að gera ráð fyrir stöðugleika því ekkert hefur bilað illa enn. Að para DORA við jafnvel óformlega skiptingu flæðiatriða (viðfangsefni 2.2) snemma kemur í veg fyrir að byggja falska tilfinningu fyrir afhendingarheilsu á hraða leiðslu einum.

**Lítil fyrirtæki.** Flestir nútíma CI/CD- og útgáfustýringarvettvangar flytja út afhendingartíðni- og leiðartímagögn með lágmarksuppsetningu; að tengja afhendingar við atvik fyrir breytingabilunarhlutfall krefst yfirleitt meiri handvirkrar fyrirhafnar. Byrjaðu á hraðamælikvörðunum tveimur og bættu við stöðugleikarakningu um leið og óformleg atvikaskrá er til að tengja við.

**Stórfyrirtæki.** Mesta eftirstandandi virði DORA í þessum mæli er sanngjarn, samkvæmur þvert-teymis samanburður fyrir vettvangsfjárfestingarákvarðanir. Staðlaðu skilgreiningar í allri skipulagsheildinni (viðfangsefni 1.4), sjálfvirknivæddu tækjavæðingu miðlægt og paraðu sérhverja DORA-skýrslu við flæðisdreifingarsýn svo forysta sjái bæði leiðsluhraða og virðisblöndu saman, ekki annað án hins.

**Hið opinbera.** DORA-mælikvarðar gefa nútímavæðingarverkefni enn verjanlega, rannsóknarstudda leið til að sýna eftirlitsaðilum fram á bætta vélfræði afhendingar. Skýrðu frá öllum fjórum mælikvörðunum saman, veldu aldrei flatterandi helminginn, og paraðu þá við flæðisdreifingu svo skýrslan svari líka erfiðari, mikilvægari spurningunni um hvað hraðari leiðslan afhendir í raun.

## Dæmi

**Stórfyrirtæki.** Nútímavæðingarverkefni vettvangs stórs fjarskiptafyrirtækis tækjavæddi alla fjóra DORA-mælikvarðana samkvæmt yfir fjörutíu vöruteymi og sýndi raunverulega færslu úr lágum frammistöðuflokki í háan á átján mánuðum, afhendingartíðni upp um það bil tífalt, leiðartími niður úr vikum í daga, breytingabilunarhlutfall óbreytt. Stjórnarmaður, sem fór yfir kynninguna, spurði spurningar sem DORA-tölurnar einar gátu ekki svarað: hve mikið af þeirri hraðari afhendingu var nýtt viðskiptavirði á móti endurvinnu. Verkfræðiskipulagsheildin átti ekkert svar fyrr en hún tók upp flokkun flæðiatriða næsta ársfjórðung, sem sýndi að eiginleikavinna hafði í raun fallið sem hlutfall heildarafurðar þótt hraðatölur DORA bötnuðu, niðurstaða sem endurmótaði forgangsröðun verkefnisins næsta ár.

**Hið opinbera.** Upplýsingatæknivæðingarskrifstofa ríkisstjórnar tók upp DORA-mælikvarða sem samningsskilyrði til að bera saman afhendingargetu nokkurra keppandi söluaðilateyma, árangursrík nýting á samanburðarhæfni rammans. Há afhendingartíðni eins söluaðila reyndist, þegar breytingabilunarhlutfall var krafist samhliða, fylgja bilunarhlutfalli nær þrefalt hærra en hjá jafningjum hans, upplýsingar sem upplýstu beint ákvörðun skrifstofunnar um endurnýjun samnings. Skrifstofan bætti síðar við kröfu um flæðisdreifingu í sömu samninga eftir að hafa uppgötvað að söluaðilinn með bestu DORA-tölurnar var líka sá sem varði minnstu hlutdeild getu í öryggisúrbæturnar sem samningurinn krafðist sérstaklega.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að taka upp DORA vel, innan síns rétta umfangs, er verjanlegt, sönnunarbyggt svar við „er afhendingarleiðsla okkar að verða hraðari og öruggari“, sem er áfram ein viðráðanlegasta spurning í verkfræði til að svara með vissu. Það svar réttlætir vettvangs- og tólafjárfestingu með raunverulegum tölum, og lætur forystu bera saman keppandi fjárfestingar á sanngjörnum, samkvæmum grunni, nákvæmlega eins og það hefur alltaf gert.

Heildareignarkostnaður er samþættingarvinnan sem tengir afhendingaratburði við atvikaskrár fyrir breytingabilunarhlutfall og batatíma, ekki léttvæg yfir stórt, ólíkt tólalandslag. Viðbótarkostnaður við að para DORA við viðfangsefni Flæðirammans fyrr í þessum hluta er hlutfallslega lítill, þar sem flokkun flæðiatriða er skýrslugjafarvenja lögð ofan á fyrirliggjandi vinnu, ekki samhliða mælikerfi, og ávöxtunin, að grípa einmitt virðisblöndu-blinda blettinn sem fjarskiptadæmið hér að ofan sýnir, er vel þess virði þeirrar hóflegu viðbótarfjárfestingar.

## Andmynstur og gildrur

- **Að meðhöndla DORA sem alla myndina af afhendingarheilsu:** leikvektorinn sem staðsetning þessa viðfangsefnis er hönnuð til að vinna gegn. Skipulagsheild getur sett fram sannarlega framúrskarandi DORA-tölur, hraðar, tíðar, stöðugar afhendingar, meðan raunverulega afhent virði hennar hefur hljóðlega færst í átt að endurvinnu eða frá eiginleikum, og fjórir mælikvarðar DORA einir munu aldrei afhjúpa þá færslu því þeir voru aldrei hannaðir til að mæla hana. Varnarmælikvarðinn er að para sérhverja DORA-skýrslu við flæðisdreifingu (viðfangsefni 2.3), svo hröð, stöðug leiðsla sem afhendir ranga blöndu vinnu sé sýnileg frekar en rugluð við raunverulega afhendingarheilsu.
- **Að skýra aðeins frá hraðahelmingi DORA:** eyðir kjarnaniðurstöðu rammans að hraði og stöðugleiki fylgjast að hjá afburðaaðilum.
- **Að nota DORA-mælikvarða í einstaklingsframmistöðuyfirferð:** brýtur tölfræðilegt réttmæti rammans og býður sterkan leik.
- **Að bera saman teymi með ósamkvæmar skilgreiningar:** framleiðir samanburð sem lítur sanngjarn út en er það ekki.
- **Sjálfskýrðar DORA-tölur í stað leiðslutækjavæddra:** kynnir einmitt skekkjuna sem ramminn var hannaður til að útrýma.
- **Að meðhöndla DORA sem greiningu frekar en samantekt:** skilur teymi eftir ófært um að útskýra hvers vegna tala hreyfðist án flæðimælikvarðalagsins undir því.

## Þroskalíkan

- **Stig 1, Upphaf:** DORA-mælikvarðar, ef þeir eru raktir yfirleitt, eru sjálfskýrðir, ósamkvæmt skilgreindir og aldrei paraðir við flæðigögn.
- **Stig 2, Þróun:** Sum teymi tækjavæða DORA úr leiðslunni, en skilgreiningar eru breytilegar og ekkert flæðisdreifingarmótstykki er til að athuga gegn.
- **Stig 3, Stöðlun:** Allir fjórir DORA-mælikvarðarnir eru tækjavæddir samkvæmt úr leiðslu- og atvikagögnum, með sameiginlegum skilgreiningum, og eru reglulega sýndir við hlið flæðisdreifingar.
- **Stig 4, Stjórnun:** DORA og flæðimælikvarðar eru yfirfarnir saman sem staðlað par á hverju stigi skipulagsheildarinnar, og DORA er aldrei notað til einstaklingsmats.
- **Stig 5, Samhæfing:** Skipulagsheildin getur bent á tiltekin tilvik þar sem flæðisdreifing greip virðisblönduvanda sem framúrskarandi DORA-tölur einar höfðu hulið, og notar báða rammana vísvitandi fyrir ólíku spurningarnar sem hvor svarar.

## Hugmyndir til umræðu

1. Hvar setja fjórir DORA-mælikvarðar okkar okkur núna á frammistöðuflokkarófinu, heiðarlega?
2. Gætu DORA-tölur okkar litið framúrskarandi út meðan flæðisdreifing okkar hefur hljóðlega rekið? Höfum við nokkurn tímann athugað það?
3. Hefur nokkur nokkurn tímann notað DORA-tölu til að dæma einstakling, jafnvel óformlega?
4. Ef keppinautur birti DORA-tölur sínar, myndu okkar bera sig vel saman, og myndi sá samanburður í raun segja okkur hver afhendir meira raunverulegt virði?

## Helstu atriði til að muna

- Fjórir mælikvarðar DORA, **afhendingartíðni, leiðartími, breytingabilunarhlutfall og batatími**, para hraða við stöðugleika að hönnun og eru áfram sannarlega rannsóknarstaðfestir.
- Þessi bók setur DORA **síðast í þessum hluta** því hann mælir leiðsluna, ekki virðið sem flæðir gegnum hana; paraðu hann við flæðisdreifingu (viðfangsefni 2.3) fyrir fyllri mynd.
- Aðalleikvektor viðfangsefnisins er **að rugla framúrskarandi DORA-tölum við fulla afhendingarheilsu**; varnarmælikvarðinn er að skýra alltaf frá DORA ásamt flæðisdreifingu.
- **Notaðu aldrei DORA-mælikvarða í einstaklingsframmistöðuyfirferð**; réttmæti rammans veltur á mælingu á kerfisstigi, ekki einstaklingsstigi.
- Notaðu **flæðimælikvarða sem greiningarlag** undir samantektartölum DORA þegar einhver þeirra hreyfist.

## Heimildir og frekara lesefni

- Forsgren, Nicole, Jez Humble og Gene Kim. *Accelerate: The Science of Lean Software and DevOps*. IT Revolution Press, 2018.
- Google Cloud. DevOps Research and Assessment áætlunin. [dora.dev](https://dora.dev/).
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois og John Willis. *The DevOps Handbook*. IT Revolution Press, 2016.
- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
