# 3.4 Virknimælikvarðar og takmörk þeirra

## Yfirlit og tilgangur

**Virkni**, A-ið í SPACE (viðfangsefni 3.1), telur magn verkfræðivinnu sem hægt er að sjá af kerfisfjarmælingum: innsendingar, opnaðar sameiningarbeiðnir, breyttar kóðalínur, yfirferðarathugasemdir sem skildar eru eftir. Hún er auðveldasta SPACE-víddin að mæla, því sérhver þessara atburða er þegar skráður sjálfvirkt af tólum sem verkfræðiteymi nota daglega, og sú auðveldleiki mælingar er einmitt það sem gerir þessa vídd hættulegasta að ofvega. Virkni er raunverulegt, lögmætt merki sé hún notuð af varúð. Notuð sem sjálfstæður framleiðnistaðgengill er hún mest leikna, mest villandi mælikvarðafjölskylda í allri sögu mælinga í [hugbúnaðarverkfræði](https://en.wikipedia.org/wiki/Software_engineering).

Kjarnavandinn er að virkni mælir hreyfingu, ekki virði. Innsendingatalning greinir ekki milli innsendingar sem leysti erfitt vandamál á glæsilegan hátt og innsendingar sem skipti einni marktækri breytingu í fimm til að líta afkastameiri út (staðgengilsleikur viðfangsefnis 1.2, beittur beint á þessa mælikvarðafjölskyldu). Breyttar kóðalínur umbuna orðaflaum fram yfir langtum verðmætari færni að eyða óþarfa kóða. Verkfræðingur sem eyðir heilum degi í djúpri, ótruflaðri hugsun áður en hann skrifar tíu glæsilegar, vel prófaðar línur lítur út fyrir að vera minna „virkur“ samkvæmt þessum mælikvörðum en sá sem sendir inn grunnar, óyfirfarnar breytingar á tuttugu mínútna fresti, þótt sá fyrri framleiði mjög oft langtum meira raunverulegt virði.

Fyrir stór teymi er freistingin að nota virknimælikvarða til einstaklingsmats stöðug og vel skjalfest, því virkni er auðveld að eigna tiltekinni manneskju og auðveld að reikna sjálfvirkt, ólíkt erfiðari, heiðarlegri merkjum hinna SPACE-víddanna. Þetta viðfangsefni er til sérstaklega til að nefna þá freistingu og gefa teymum orð og sönnunargögn til að standast hana, því þegar skipulagsheild byrjar að raða verkfræðingum hvern fyrir sig eftir innsendingatalningu eða kóðalínum er skaðinn á samvinnu, kóðagæðum og móral vel skjalfestur og erfiður að snúa við.

## Lykilmeginreglur

- **Virkni mælir hreyfingu, ekki virði.** Hún er lögmætt samhengismerki, aldrei sjálfstæður framleiðnistaðgengill.
- **Þetta er mest misnotaða mælikvarðafjölskylda í sögu mælinga í hugbúnaðarverkfræði.** Meðhöndlaðu þá sögu sem viðvörun, ekki tilviljun.
- **Röðun einstaklinga eftir virkni er nær alltaf skaðleg.** Hún skaðar samvinnu, umbunar sýnilegu tilgangslausu annríki og býður leik nær strax.
- **Virknigögn eru gagnlegust samantekin, sem samhengi fyrir aðrar víddir,** ekki sem sjálfstætt merki um nokkra eina manneskju eða teymi.
- **Djúp, verðmæt vinna lítur oft hljóðlát út á virknimælaborði.** Mælikvarðafjölskyldan er byggingarlega hlutdræg gegn einmitt þeirri hugsun sem framleiðir bestu verkfræðiniðurstöðurnar.

## Ráðleggingar

### Raðaðu aldrei einstaklingum og metðu þá aldrei eftir hráum virknitalningum

Þetta er erfiðasta, mikilvægasta regla þessa viðfangsefnis. Innsendingatalning, kóðalínur og fjöldi sameiningarbeiðna ætti aldrei að birtast í einstaklingsframmistöðuyfirferð, samanburðarröðun eða nokkru samhengi þar sem laun, staða eða orðspor verkfræðings veltur á tölunni. Þetta leiðir beint af hvataútsetningarmeginreglu viðfangsefnis 1.2: um leið og virkni verður hvatabundinn einstaklingsmælikvarði fylgir leikur nær strax, og hegðunin sem af hlýst, að fylla út innsendingar, skipta breytingum léttvægt, forðast djúpa, óglæsilega vinnu sem framleiðir fáa sýnilega atburði, skaðar skipulagsheildina virkt.

### Notaðu virknigögn samantekin, sem samhengi, ekki sem dóm

Virknigögn verða sannarlega gagnleg þegar þau eru tekin saman á teymisstigi og lesin samhliða hinum SPACE-víddunum: skörp lækkun á innsendingavirkni teymis sem fellur saman við ánægjuaukningu gæti bent til þess að teymið hafi loks fengið svigrúm til að hugsa djúpt og greiða niður tæknilega skuld, jákvætt mynstur, ekki neikvætt. Lesin í einangrun lítur sama lækkun ógnvekjandi út. Samhengi úr hinum víddunum er það sem gerir virknigögn túlkanleg frekar en villandi.

### Kjóstu gæðaskyld virknimerki fram yfir hrátt magn

Þar sem virknigögn eru yfirleitt gagnleg, kjóstu merki leiðrétt fyrir gæði fram yfir hráar talningar: stærð sameiningarbeiðna miðað við yfirferðardýpt (viðfangsefni 2.9), eða hlutfall nýs kóða á móti fjarlægðum kóða, sem getur leitt í ljós hvort teymi er að safna flækjustigi eða virkt að einfalda. Þessi leiðréttu merki eru enn gögn virknivíddarinnar en standast grófasta leikinn sem hráar talningar bjóða.

### Gættu sérstaklega að staðgengilsleikmynstrinu í virknigögnum

Algengasta leiðin sem virknimælikvarðar eru leiknir er einmitt staðgengilsmynstur viðfangsefnis 1.2: að skipta raunverulega marktækri vinnu í marga smáa, léttvæga atburði til að blása upp talningu. Ef tíðni innsendinga eða sameiningarbeiðna hækkar meðan undirliggjandi flækjustig eða stærð breytinga fellur skarpt, rannsakaðu áður en þú eignar raunverulegri framleiðnibót, með sama greiningaraga og viðfangsefni 2.10 mælir með fyrir afhendingartíðni.

### Nefndu og dragðu skýrt úr virkniseiðleik

**Virkniseiðleikur** (activity theater) er vinna sem er unnin, meðvitað eða ekki, fyrst og fremst vegna þess að hún er sýnileg og teljanleg frekar en verðmæt: tíðar litlar innsendingar, áberandi næturvirkni eða sýnilegt annríki í sameiginlegum rásum. Að nefna þetta mynstur skýrt við teymi þitt, og vera gagnsær um að forysta noti ekki hráa virkni til að dæma framlag, fjarlægir mikið af hvatanum til að það gerist yfirleitt.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Röðun einstaklinga eftir virkni | Einfalt, auðvelt að reikna, finnst beint framkvæmanlegt | Leikið nær strax; skaðar samvinnu og móral; mælir rangan hlut |
| Engin virknimæling | Forðast misnotkunaráhættuna alveg | Missir raunverulega gagnlegt samhengismerki fyrir mynsturgreiningu á teymisstigi |
| Samantekin virkni á teymisstigi, lesin í samhengi | Veitir gagnlegt samhengi án einstaklingsáhættu | Krefst aga til að túlka samhliða öðrum víddum frekar en í einangrun |
| Gæðaleiðrétt virknimerki | Standast grófasta hráa talningaleik | Flóknari að reikna og útskýra en einföld talning |

Aðalspennan er **notagildi á móti misnotkunaráhættu**. Virknigögn, lesin af varúð samantekin og í samhengi, eru sannarlega gagnleg til að koma auga á mynstur eins og ósjálfbæran hraða eða teymi sem hljóðlega finnur svigrúm til að takast á við tæknilega skuld. Sömu gögn, notuð sem einstaklingsstigatafla, eru nær undantekningarlaust skaðleg. Leystu spennuna ekki með því að forðast virknigögn alveg heldur með því að byggja harða skipulagsreglu gegn einstaklingsnotkun, meðan íhugul, samhengisbundin notkun á teymisstigi er leyfð og jafnvel hvött.

## Spurningar til að ræða með teyminu

1. **Hefur nokkur í skipulagsheild okkar nokkurn tímann verið metinn, formlega eða óformlega, með hrárri virknitalningu eins og innsendingum eða kóðalínum?** Spyrjið þessa beint og verið tilbúin fyrir óþægilegt en nauðsynlegt svar; þessi misnotkun gerist oft hljóðlega, gegnum óformlega athugasemd frá stjórnanda, án þess að verða nokkurn tímann opinber stefna.

2. **Hvernig myndi virkniseiðleikur líta út hjá okkar teymi sérstaklega, og höfum við séð merki um hann?** Að nefna sértæku, trúverðugu mynd sem þetta mynstur gæti tekið í ykkar eigin teymi gerir langtum auðveldara að þekkja það ef það byrjar að gerast.

3. **Þegar virknigögn okkar á teymisstigi hreyfast, túlkum við þau samhliða hinum SPACE-víddunum, eða í einangrun?** Virknilækkun lesin í einangrun lítur áhyggjuefni út; sama lækkun lesin samhliða ánægju- eða frammistöðubót getur litið út eins og sannarlega jákvætt mynstur. Athugið raunverulega yfirferðarvenju ykkar gegn þessum greinarmun.

4. **Höfum við nokkurn tímann séð aukningu í tíðni innsendinga eða sameiningarbeiðna ásamt minnkandi meðalbreytingastærð, sem bendir til léttvægrar skiptingar frekar en raunverulegrar framleiðnibótar?** Dragið fram raunveruleg gögn og athugið þetta sértæka staðgengilsleikmynstur.

5. **Hvernig tölum við núna um „hver leggur mest af mörkum“ í okkar teymi, og hallast það samtal óbeint að virknigögnum jafnvel án formlegs mælikvarða?** Óformleg, ómæld hlutdrægni í átt að sýnilegu annríki getur mótað skynjun og umbun jafnvel án skýrrar virknibyggðrar stefnu; dragið þetta fram heiðarlega.

6. **Hvernig lítur sannarlega verðmæt en hljóðlát vinna, djúp hugsun, vandleg hönnun, leiðsögn, út í okkar teymi, og hvernig tryggjum við að hún sé viðurkennd þrátt fyrir að mynda fá sýnileg virknigögn?** Þessi spurning er jákvæða viðbótin við hinar fyrri: að nefna hvernig góð, hljóðlát vinna lítur út hjálpar til við að vernda hana frá því að vera hunsuð í þágu háværari, teljanlegri vinnu.

## Geirasjónarhorn

**Sprotafyrirtæki.** Með litlu, nánu samvinnuteymi er virknigögn yfirleitt sýnileg án þess að þurfa mælaborð yfirleitt, og einstaklingsröðunaráhættan sem þetta viðfangsefni varar við er ólíklegri einfaldlega því allir vita þegar við hvað hver annar vinnur. Áhættan er í staðinn stofnandi sem ómeðvitað hyglir sýnilega „uppteknu“ atferli þegar hann tekur snemmar ráðningar- eða hlutabréfaákvarðanir.

**Lítil fyrirtæki.** Virknigögn úr fyrirliggjandi tólum þínum er í lagi að líta á fyrir almenna tilfinningu fyrir afköstum teymis, en stenstu að nota þau til að bera einstaka framlagsaðila beint saman; raunverulegt virði lítils teymis einbeitist oft hjá fáum sem vinna hljóðláta, hávirka vinnu sem innsendingatalningarsýn myndi kerfisbundið vanmeta.

**Stórfyrirtæki.** Hér er einstaklingsröðunarfreistingin sterkust og skaðlegust, því virknigögn eru auðveldasta merkið að draga fram fyrir frammistöðuyfirferðarferli sem spannar þúsundir verkfræðinga, og þrýstingurinn að finna *eitthvert* magnbundið inntak er raunverulegur. Byggðu skýra, kynnta, framfylgda stefnu gegn einstaklingsvirkniröðun, og endurskoðaðu frammistöðuyfirferðarvenjur reglulega til að staðfesta að stefnunni sé í raun fylgt í framkvæmd, ekki bara lýst yfir.

**Hið opinbera.** Virknimælikvarðar geta verið freistandi að vitna í opinberri skýrslu sem sönnun framleiðni („tíu þúsund innsendingar á þessu ári“), en slík fyrirsögn er nær merkingarlaus og getur boðið einmitt ranga rýni þegar kunnugur yfirferðaraðili bendir á að hrá virkni segir ekkert um niðurstöður. Skýrðu frá niðurstöðu- og frammistöðugögnum (viðfangsefni 3.3) í staðinn, og forðastu virknitalningar í öllum samskiptum sem snúa út á við.

## Dæmi

**Stórfyrirtæki.** Verkfræðiforysta hugbúnaðarfyrirtækis hafði, án formlegrar stefnu, byrjað að vísa óformlega í innsendingatíðnigögn einstaklinga í stöðuhækkunarumræðum. Innri yfirferð, kveikt af ótengdu starfsmannaveltugreiningarverkefni, fann að verkfræðingar sem unnu á flóknustu, verðmætustu kerfum fyrirtækisins, sem kröfðust langra tímabila vandaðrar hönnunarvinnu áður en nokkur kóði var skrifaður, höfðu kerfisbundið lægri innsendingatalningar en verkfræðingar á einfaldari, stigvaxandi þróuðum kerfum, og voru lúmskt settir í óhag í stöðuhækkunarsamtölum fyrir vikið. Forysta gaf út skýra, kynnta stefnu sem bannaði tilvísanir í virknitalningu í frammistöðu- og stöðuhækkunarumræðum, og færði stöðuhækkunarsönnunargögn í átt að margmerkjaframmistöðunálguninni úr viðfangsefni 3.3.

**Hið opinbera.** Stafræn þjónustustofnun, undir þrýstingi að sýna löggjafareftirlitsnefnd framleiðni, lagði í fyrstu til að skýra frá heildarinnsendingum og skrifuðum kóðalínum yfir verkfræðiáætlun sína sem sönnun afhents virðis. Innri tæknilegur ráðgjafi andmælti, með réttu bent á að þessi rammi byði einmitt ranga rýni, þar sem tæknilega læs nefndarmaður gæti auðveldlega bent á að hrátt kóðamagn segir ekkert um hvort kóðinn virkaði eða skipti máli. Endurskoðuð skýrsla stofnunarinnar notaði í staðinn niðurstöðumælikvarða (viðfangsefni 5.3): minnkun villna sem borgarar tilkynna og aukningu árangursríkrar sjálfsafgreiðslu, sem stóðu langtum betur undir spurningum nefndarinnar en virkni tölurnar hefðu gert.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að fá virknimælikvarða rétta, nota þá samhengisbundið frekar en sem einstaklingsstigatöflur, er forðaður skaði: skipulagsheildir sem raða verkfræðingum hverjum fyrir sig eftir virkni sjá áreiðanlega leikhegðun, minnkaða samvinnu (verkfræðingar verja eigin sýnilega afurð frekar en að hjálpa vinnufélaga) og kerfisbundna hlutdrægni gegn djúpri, hávirkri vinnu sem framleiðir oft mest virði meðan hún myndar minnst sýnilega virkni. Að snúa þeim skaða við, þegar hann er rótgróinn í frammistöðuyfirferðarmenningu, er sannarlega erfitt og hægt.

Heildareignarkostnaður við að forðast þessa gildru er aðallega skipulagsagi: skýr stefna, framfylgd samkvæmt, gegn einstaklingsvirkniröðun, og skuldbinding til að fjárfesta í erfiðari, heiðarlegri frammistöðumælingu sem lýst er í viðfangsefni 3.3 í staðinn. Sá agi kostar minna en rangar stöðuhækkunarákvarðanir, skaðaða samvinnu og leikhegðun sem einstaklingsvirknimælikvarðar framleiða áreiðanlega með tímanum.

## Andmynstur og gildrur

- **Einstaklingsröðun eftir innsendingatalningu eða kóðalínum:** skaðlegasta, sögulega algengasta misnotkun í allri þessari bók.
- **Virkniseiðleikur:** vinna unnin fyrst og fremst fyrir sýnileika frekar en virði, fullkomlega fyrirsjáanleg viðbrögð við virknibyggðu mati.
- **Að túlka virknilækkun á teymisstigi í einangrun, án þess að athuga hinar SPACE-víddirnar:** getur tekið sannarlega jákvætt mynstur fyrir áhyggjuefni.
- **Að vitna í hráar virknitalningar í ytri samskiptum eða samskiptum við forystu:** býður einmitt ranga rýni og segir lítið um raunverulegt virði.
- **Að vanmeta kerfisbundið djúpa, vandaða vinnu sem myndar fáa sýnilega atburði:** byggingarleg hlutdrægni innbyggð í alla þessa mælikvarðafjölskyldu.
- **Óformleg, ófrágengin virknihlutdrægni sem læðist inn í stöðuhækkunar- eða yfirferðarsamtöl:** skaðleg jafnvel án opinbers mælikvarða að baki.

## Þroskalíkan

- **Stig 1, Upphaf:** Virknimælikvarðar eru notaðir, formlega eða óformlega, til að meta eða raða einstaklingum, án vitundar um áhættuna.
- **Stig 2, Þróun:** Einhver vitund um áhættuna er til, en engin skýr stefna kemur í veg fyrir að virknigögn hafi óformlega áhrif á yfirferðir eða stöðuhækkunarumræður.
- **Stig 3, Stöðlun:** Skýr, kynnt skipulagsheildarvíð stefna bannar einstaklingsvirkniröðun, og virknigögn eru aðeins notuð í samantekin samhengi á teymisstigi.
- **Stig 4, Stjórnun:** Frammistöðuyfirferðar- og stöðuhækkunarvenjur eru endurskoðaðar reglulega til að staðfesta að stefnunni sé fylgt í framkvæmd, og gæðaleiðrétt virknimerki koma í stað hrárra talninga þar sem virknigögn eru notuð yfirleitt.
- **Stig 5, Samhæfing:** Skipulagsheildin hefur sannanlega fært matsmenningu frá virknimælikvörðum í átt að margmerkjaframmistöðunálgun viðfangsefnis 3.3, með sýnilegri bót á samvinnu og minnkaðri leikhegðun sem sönnun þess að breytingin virkaði.

## Hugmyndir til umræðu

1. Hefur nokkur hér nokkurn tímann fundið sig metinn, jafnvel óformlega, eftir því hve „upptekin“ virkni hans leit út?
2. Hvernig myndi virkniseiðleikur líta út sérstaklega hjá okkar teymi?
3. Höfum við skýra, skriflega stefnu gegn einstaklingsvirkniröðun, og er henni í raun fylgt?
4. Hvaða hljóðláta, verðmæta vinna í okkar teymi myndar nú minnst sýnileg virknigögn?
5. Hvernig myndum við endurhanna yfirferðarsönnunargögn okkar til að fjarlægja virknitalningar alveg?

## Helstu atriði til að muna

- Virkni mælir **hreyfingu, ekki virði**; hún er mest misnotaða mælikvarðafjölskylda í sögu hugbúnaðarverkfræðimælinga.
- **Raðaðu aldrei og metðu aldrei einstaklinga** eftir hráum virknitalningum; þetta er erfiðasta og mikilvægasta regla þessa viðfangsefnis.
- Notaðu virknigögn **samantekin, sem samhengi** fyrir hinar SPACE-víddirnar, aldrei sem sjálfstæðan dóm.
- Gættu að **virkniseiðleik** og **staðgengilsleikmynstrinu** (viðfangsefni 1.2) sérstaklega innan þessarar mælikvarðafjölskyldu.
- Djúp, verðmæt vinna myndar oft **minnst sýnileg virknigögn**; verndaðu hana frá því að vera kerfisbundið vanmetin.

## Heimildir og frekara lesefni

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas Zimmermann, Brian Houck og Jenna Butler, „The SPACE of Developer Productivity,“ *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, eftir Tom DeMarco og Timothy Lister (rökin gegn því að mæla verkfræðinga eftir sýnilegu annríki).
- *Deep Work: Rules for Focused Success in a Distracted World*, eftir Cal Newport (virði hljóðlátrar, ótruflaðrar vinnu sem virknimælikvarðar vantelja kerfisbundið).
- *The Tyranny of Metrics*, eftir Jerry Z. Muller (mælikvarðabundningur og kostnaður hans, beint viðeigandi fyrir virknibyggt mat).
