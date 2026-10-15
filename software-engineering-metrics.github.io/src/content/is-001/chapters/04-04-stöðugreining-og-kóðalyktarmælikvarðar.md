# 4.4 Stöðugreining og kóðalyktarmælikvarðar

## Yfirlit og tilgangur

**[Stöðugreiningartól](https://en.wikipedia.org/wiki/Static_program_analysis)** skanna frumkóða án þess að keyra hann og merkja mynstur sem þekkt er að fylgi göllum, öryggisveikleikum eða viðhaldsvanda: kóða sem næst ekki, ólokaðar auðlindir, grunsamlegar tegundabreytingar, tvítekna rökfræði og víðari flokkinn **kóðalyktir** (code smells), byggingarmynstur sem eru ekki endilega villur en gera kóða yfirleitt erfiðari að skilja, prófa eða breyta örugglega. Stöðugreining er sjálfvirka, samfellda lagið undir markvissari mælikvörðum annarra viðfangsefna þessa hluta, keyrir við hverja innsendingu og dregur vandamál fram á augnablikinu sem þau eru kynnt frekar en að bíða eftir reglubundinni úttekt.

Meginefni þessa viðfangsefnis er bilið milli þess sem stöðugreiningartól skýra frá og þess sem skiptir máli í raun. Tól getur merkt þúsundir niðurstaðna yfir stóran kóðagrunn, og fjöldi niðurstaðna einn og sér er lélegur mælikvarði, þar sem hann blandar saman léttvægum stílvalkostum og sannarlega alvarlegri áhættu, og hægt er að keyra hann niður gegnum bælingu jafn auðveldlega og með raunverulegum lagfæringum. Virði stöðugreiningar kemur ekki af hráum niðurstöðufjölda heldur af því hve vel skipulagsheild flokkar alvarleika, kemur í veg fyrir afturför og stenst freistinguna að meðhöndla dóm tólsins sem staðgengil mannlegrar yfirferðar frekar en viðbót við hana.

Fyrir stór teymi er stöðugreining eina hagnýta leiðin til að framfylgja grunnlínu kóðagæða og öryggishreinlætis yfir kóðagrunn stærri en nokkurt teymi getur yfirfarið handvirkt í heild. Stórfyrirtæki og hið opinbera, sem standa oft frammi fyrir regluvörslukröfum um örugga kóðunarvenjur, reiða sig á stöðugreiningu sem skjalfesta, úttektarhæf sönnunargögn um að grunnstig rýni hafi verið beitt samkvæmt, ekki bara þegar mannlegur yfirferðaraðili tók tilviljun eftir vandamáli.

## Lykilmeginreglur

- **Hrár niðurstöðufjöldi er lélegur mælikvarði einn og sér.** Hann blandar saman léttvægum og alvarlegum vandamálum og hægt er að leika hann gegnum bælingu frekar en raunverulegar lagfæringar.
- **Alvarleikaflokkun skiptir meira máli en magn.** Fáar alvarlegar niðurstöður verðskulda meiri athygli en margar léttvægar.
- **Stöðugreining er viðbót við mannlega yfirferð; hún kemur ekki í stað hennar.** Tól grípa mynstur; þau skilja ekki ásetning eða viðskiptasamhengi.
- **„Nýjar villur kynntar“ þróun er framkvæmanlegri en heildarbiðlistatala.** Hún segir þér hvort núverandi venja er að batna eða versna.
- **Falskar jákvæðar rýra traust á tólinu.** Óstýrt falskt-jákvætt hlutfall leiðir til þess að teymi hunsa niðurstöður í heild, þar með raunverulegar.

## Ráðleggingar

### Raktu alvarleikavegnar niðurstöður, ekki hráan fjölda

Stilltu stöðugreiningartól þitt til að flokka niðurstöður eftir alvarleika (alvarlegt, hátt, miðlungs, lágt, eða jafngildan kvarða), og raktu alvarleikavegna þróun frekar en flata heildartölu. Kóðagrunnur með núll alvarlegar niðurstöður og fimm hundruð lágalvarleika stílábendingar er í mjög ólíku ástandi en einn með fimmtíu alvarlegar niðurstöður og engin stílvandamál, og hrár fjöldi meðhöndlar þetta sem nokkurn veginn jafngilt þegar það er það ekki.

### Settu hlið á nýjar niðurstöður kynntar, ekki á heildar sögulega biðlistann

Flestir rótgrónir kóðagrunnar bera arfleifðarbiðlista niðurstaðna sem eru eldri en núverandi venja og væri óheyrilega dýrt að laga allar í einu. Frekar en að loka á alla vinnu þar til allur biðlistinn er hreinsaður, settu CI-hlið á hvort tiltekin breyting kynnir nýjar niðurstöður yfir samþykkt alvarleikaviðmiðunarmörk, og láttu biðlistann minnka smám saman gegnum venjulegt viðhald meðan frekari söfnun er komið í veg fyrir. Þessi greinarmunur speglar þekjugólfsráðleggingu viðfangsefnis 4.2: verndaðu gegn afturför frekar en að krefjast óraunhæfrar lagfæringar í einu.

### Stýrðu falskt-jákvæðu hlutfalli virkt

Yfirfarðu reglulega úrtak niðurstaðna, einkum hvern flokk með mikið magn, og athugaðu hve margar eru raunverulegar falskar jákvæðar, tilvik þar sem tólið merkti mynstur sem er í raun ekki vandkvæðt í samhengi. Stilltu reglustillingu til að bæla sértækt sannarlega hávaðasama, lítilvirðis regluflokka, frekar en að láta teymi þróa með sér þann vana að hunsa úttak tólsins í heild því of mikið af því er hávaði. Hátt, óstýrt falskt-jákvætt hlutfall er fljótlegasta einstaka leiðin til að eyða trúverðugleika stöðugreiningaráætlunar.

### Notaðu stöðugreiningarniðurstöður sem hvata til yfirferðar, ekki sjálfvirkan dóm

Jafnvel lögmæt, ekki-fölsk-jákvæð niðurstaða krefst ekki alltaf sjálfvirkrar, skyldubundinnar lagfæringar; sum merkt mynstur eru ásættanleg miðað við sértækt samhengi sem tól getur ekki séð. Byggðu létt ferli fyrir mann til að yfirfara og annaðhvort laga eða skýrt, sýnilega undanþiggja niðurstöðu með skjalfestri ástæðu, frekar en annaðhvort að framfylgja blindandi sérhverri niðurstöðu sem skyldu eða leyfa hljóðláta, óskjalfesta bælingu sem rýrir virði tólsins með tímanum.

### Sameinaðu stöðugreiningu við hina kóðagæðamælikvarða þessa hluta

Stöðugreiningarniðurstöður, flækjustigseinkunnir (viðfangsefni 4.1) og heitreitagögn (viðfangsefni 4.3) eru viðbótarsönnunargögn, ekki keppandi mælikvarðar. Skrá með háum styrk óleystra stöðugreiningarniðurstaðna sem er líka velta-flækjustigs heitreitur er sérstaklega sterkur frambjóðandi í forgangsathygli, því mörg óháð merki leiða að sömu niðurstöðu.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Hrár niðurstöðufjöldi sem mælikvarði | Einfalt að skýra frá | Blandar saman léttvægum og alvarlegum vandamálum; auðleikið gegnum bælingu |
| Alvarleikavegin þróun | Endurspeglar raunverulega áhættu nákvæmar | Krefst áframhaldandi viðhalds alvarleikaflokkunar |
| Hlið á allan sögulega biðlistann | Hámarkar kóðahreinleika að lokum | Oft óraunhæft fyrir rótgróna kóðagrunna; getur stöðvað alla vinnu |
| Hlið á nýjar niðurstöður eingöngu | Hagnýtt, kemur í veg fyrir afturför, lætur biðlista minnka smám saman | Arfleifðarvandamál haldast lengur án vísvitandi úrbótaáætlunar |

Aðalspennan er **ítarleiki á móti hagkvæmni**. Stöðugreiningarstefna sem krefst þess að allur sögulegi biðlistinn sé leystur áður en ný vinna heldur áfram er ítarleg en yfirleitt óraunhæf fyrir hvaða kóðagrunn með raunverulega sögu, og teymi undir þeim þrýstingi hafa tilhneigingu til að bæla niðurstöður í heild frekar en að laga þær sannarlega. Leystu spennuna með því að setja strangt hlið á nýjar niðurstöður meðan sérstakt, vísvitandi hraðastillt úrbótaátak er keyrt gegn arfleifðarbiðlistanum, forgangsraðað með alvarleika- og víxlvísunartækninni sem þetta viðfangsefni og viðfangsefni 4.3 mæla með.

## Spurningar til að ræða með teyminu

1. **Rekjum við alvarleikavegna þróun, eða bara hráan heildarniðurstöðufjölda?** Dragið fram raunverulegt mælaborð ykkar og athugið; hrár fjöldi er algengur sjálfgefið í mörgum tólum og þarfnast oft vísvitandi stillingar til að draga alvarleika rétt fram í staðinn.

2. **Hver er núverandi arfleifðarbiðlisti okkar af óleystum niðurstöðum, og höfum við vísvitandi, hraðastillta áætlun til að minnka hann, eða er hann bara að safnast endalaust?** Ómeðhöndlaður, hljóðlega vaxandi biðlisti er algengur og vert að nefna heiðarlega frekar en að skilja órannsakaðan.

3. **Hvert er áætlað falskt-jákvætt hlutfall okkar fyrir mestu niðurstöðuflokka okkar, og höfum við stillt reglustillingu til að bregðast við?** Ef þið hafið aldrei athugað þetta, takið úrtak niðurstaðna úr hávaðasamasta flokki ykkar og metið heiðarlega hve margar eru sannarlega framkvæmanlegar.

4. **Treysta verkfræðingar í okkar teymi stöðugreiningarniðurstöðum, eða hafa þeir lært að sía þær frá því of mikið úttakið er hávaði?** Þetta er bein, heiðarleg tilfinningaprófsspurning sem vert er að spyrja teymið, því tól sem er hunsað veitir ekkert raunverulegt virði óháð fræðilegri getu sinni.

5. **Hvernig meðhöndlum við núna lögmæta niðurstöðu sem teymi telur að ætti að undanþiggja miðað við sértækt samhengi?** Athugið hvort ferlið ykkar gerir þetta að sýnilegri, skjalfestri ákvörðun, eða hvort það gerist gegnum hljóðláta, óskjalfesta bælingu sem rýrir merki tólsins með tímanum.

6. **Hvar renna stöðugreiningarniðurstöður, flækjustigseinkunnir og heitreitagögn saman á sömu skrá eða einingu?** Víxlvísið þessi þrjú merki skýrt; samleitni yfir marga óháða mælikvarða er sterkara forgangsröðunarmerki en nokkur einn einn og sér.

## Geirasjónarhorn

**Sprotafyrirtæki.** Létt, ókeypis stöðugreiningartól samþætt í CI frá upphafi er ódýr trygging og grípur raunveruleg vandamál snemma, áður en arfleifðarbiðlisti hefur nokkra möguleika á að safnast. Haltu reglusafninu einbeittu að sannarlega verðmætum, lághávaðaflokkum frekar en að virkja sérhverja tiltæka reglu strax.

**Lítil fyrirtæki.** Flest nútíma forritunarmálavistkerfi innihalda hæf ókeypis stöðugreiningartól; að virkja þau í CI með skynsamlegu sjálfgefnu reglusafni krefst lítillar fjárfestingar. Einbeittu þér að því að setja hlið á nýjar niðurstöður frekar en að reyna að leysa hvaða fyrirliggjandi biðlista sem er allan í einu.

**Stórfyrirtæki.** Að stýra falskt-jákvæðu hlutfalli og alvarleikaflokkun vísvitandi verður nauðsynlegt í þessum mæli, því illa stillt tól sem myndar óhóflegan hávaða yfir tugi teyma verður hunsað í allri skipulagsheildinni. Fjárfestu í sérstökum eiganda fyrir stillingu stöðugreiningartólsins sjálfs, og meðhöndlaðu reglustillingu sem áframhaldandi aga frekar en einskiptis uppsetningarverkefni.

**Hið opinbera.** Stöðugreiningarniðurstöður, einkum öryggistengdar, eru oft beint viðeigandi regluvörslu- og úttektarkröfum. Viðhaldið skjalfestu, úttektarhæfu ferli fyrir hvernig niðurstöður eru flokkaðar, lagaðar eða formlega undanþegnar með skráðum rökstuðningi, því þessi skjölun sjálf er oft það sem ytri endurskoðandi vill sjá.

## Dæmi

**Stórfyrirtæki.** Stöðugreiningarmælaborð hugbúnaðarfyrirtækis hafði safnað yfir fjörutíu þúsund óleystum niðurstöðum yfir kóðagrunn þess eftir nokkur ár án alvarleikavegins forgangsraðaðs mats, tala svo stór að verkfræðingar höfðu að mestu hætt að líta á mælaborðið yfirleitt. Endurskoðuð nálgun flokkaði niðurstöður eftir alvarleika, fann færri en tvö hundruð voru sannarlega alvarlegar, og setti CI-hlið sérstaklega á nýjar alvarlegar og háalvarleika niðurstöður meðan lágalvarleika biðlistinn var látinn minnka smám saman gegnum venjulegt kóðaviðhald. Innan sex mánaða höfðu alvarlegar niðurstöður fallið í eins stafs tölu, og, mikilvægara, könnunargögn verkfræðinga sýndu endurnýjað traust á úttaki tólsins nú þegar það dró fram viðráðanlegt, sannarlega framkvæmanlegt merki frekar en yfirþyrmandi, hunsaðan biðlista.

**Hið opinbera.** Öryggisstefna varnarmálastofnunar fyrir hugbúnaðarbirgðakeðju krafðist stöðugreiningarskönnunar með núll óleystum niðurstöðum fyrir hverja útgáfu, stefna sem hafði í reynd leitt þróunarteymi til að bæla mikinn fjölda niðurstaðna, þar með nokkur raunveruleg öryggisvandamál, einfaldlega til að mæta útgáfufrestum undir óframkvæmanlegu allt-eða-ekkert hliði. Endurskoðuð stefna krafðist núll nýrra alvarlegra eða háalvarleika niðurstaðna kynntra af nokkurri tiltekinni útgáfu, ásamt skjalfestri, rakinni úrbótaáætlun og tímalínu fyrir arfleifðarbiðlistann, yfirfarinni ársfjórðungslega af öryggisstjórnarráði. Þessi hagnýta, áfangaskipta nálgun bæði endurheimti raunverulega öryggisrýni á nýjan kóða og náði raunverulegum, mælanlegum framförum gegn arfleifðarbiðlistanum á átján mánuðum, ólíkt óframkvæmanlegu fyrri stefnunni sem hafði aðallega framleitt bælingu frekar en raunverulegar lagfæringar.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun vel stýrðrar stöðugreiningar er að grípa raunverulega galla og öryggisveikleika áður en þeir ná framleiðslu, á kostnaði langtum lægri en jafngild mannleg yfirferðarfyrirhöfn myndi krefjast fyrir sömu þekju. Varnarmáladæmið hér að ofan sýnir kostnað þess að fá þetta rangt: óframkvæmanleg, allt-eða-ekkert stefna hafði í raun dregið úr raunverulegri öryggisrýni með því að knýja fram bælingu, andstæðu ásetnings síns.

Heildareignarkostnaður felur í sér tólin sjálf, oft ókeypis eða ódýr fyrir algeng forritunarmálavistkerfi, og áframhaldandi aga alvarleikaflokkunar, falskt-jákvæðrar stýringar og úrbótaáætlunar fyrir arfleifðarbiðlista. Sá áframhaldandi agi, meira en tólið sjálft, ræður hvort stöðugreiningaráætlun veitir raunverulegt, treyst virði eða hnignar í hunsaðan hávaða.

## Andmynstur og gildrur

- **Að meðhöndla hráan niðurstöðufjölda sem mælikvarðann:** blandar saman léttvægum og alvarlegum vandamálum og er auðleikinn gegnum bælingu.
- **Að krefjast þess að allur sögulegi biðlistinn sé leystur áður en ný vinna heldur áfram:** yfirleitt óraunhæft og knýr bælingu frekar en raunverulegar lagfæringar.
- **Að hunsa falskt-jákvætt hlutfall:** óstýrt hávaðastig leiðir til þess að teymi sía úttak tólsins frá í heild, þar með raunverulegar niðurstöður.
- **Hljóðlát, óskjalfest bæling lögmætra niðurstaðna:** rýrir merki tólsins og skilur eftir enga úttektarslóð fyrir regluvörslutilgang.
- **Að meðhöndla stöðugreiningarniðurstöðu sem sjálfvirkan dóm án mannlegrar yfirferðar:** missir af samhengi sem tól getur ekki séð.
- **Að víxlvísa niðurstöðum aldrei við flækjustigs- og heitreitagögn:** missir af sterkara forgangsröðunarmerkinu sem samleitin sönnunargögn veita.

## Þroskalíkan

- **Stig 1, Upphaf:** Stöðugreining er ekki keyrð, eða niðurstöður safnast óstýrðar án alvarleikaflokkunar eða þróunarrakningar.
- **Stig 2, Þróun:** Einhver stöðugreining keyrir í CI, en alvarleikaflokkun er ósamkvæm og falskt-jákvætt hlutfall er óstýrt.
- **Stig 3, Stöðlun:** Niðurstöður eru alvarleikavegnar og CI setur hlið á nýjar alvarlegar og háalvarleika niðurstöður, í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Falskt-jákvætt hlutfall er virkt stillt, arfleifðarbiðlisti hefur skjalfesta, hraðastillta úrbótaáætlun, og undanþágur eru sýnilegar og skjalfestar.
- **Stig 5, Samhæfing:** Stöðugreiningarniðurstöður, flækjustigsgögn og heitreitagögn eru reglulega víxlvísuð til að forgangsraða fjárfestingu, og skipulagsheildin getur bent á tilteknar, mælanlegar gallabætur eða öryggisbætur raktar til áætlunarinnar.

## Hugmyndir til umræðu

1. Hver er núverandi alvarleikavegin þróun okkar, og er hún að batna eða versna?
2. Hve stór er arfleifðarniðurstöðubiðlisti okkar, og höfum við vísvitandi áætlun til að minnka hann?
3. Hvert er áætlað falskt-jákvætt hlutfall okkar fyrir hávaðasamasta niðurstöðuflokk okkar?
4. Treysta verkfræðingar í okkar teymi núna stöðugreiningarúttaki okkar eða hunsa þeir það?
5. Hvar renna stöðugreiningarniðurstöður saman við flækjustigs- eða heitreitagögn í kóðagrunni okkar?

## Helstu atriði til að muna

- Raktu **alvarleikavegna þróun**, ekki hráan niðurstöðufjölda, sem blandar saman léttvægum og alvarlegum vandamálum.
- Settu CI-hlið á **nýjar niðurstöður kynntar**, ekki allan sögulega biðlistann, til að koma í veg fyrir afturför án þess að krefjast óraunhæfrar lagfæringar í einu.
- Stýrðu **falskt-jákvæðu hlutfalli** virkt; óstýrður hávaði eyðir trausti á tólinu og leiðir til þess að niðurstöður eru hunsaðar í heild.
- Meðhöndlaðu niðurstöður sem **hvata til mannlegrar yfirferðar**, með sýnilegum, skjalfestum undanþágum, ekki sjálfvirkum dómi eða hljóðlátri bælingu.
- Víxlvísaðu stöðugreiningu við **flækjustigs- og heitreitagögn** (viðfangsefni 4.1, 4.3) fyrir samleitin, sterkari forgangsröðunarsönnunargögn.

## Heimildir og frekara lesefni

- *Static Program Analysis*, eftir Anders Møller og Michael I. Schwartzbach (fræðilegur og hagnýtur grunnur stöðugreiningartækni).
- Leiðbeiningar OWASP um stöðuga öryggisprófun forrita (SAST), hluti af víðari úrræðum OWASP Foundation um örugga hugbúnaðarþróunarvenjur.
- *Refactoring: Improving the Design of Existing Code*, eftir Martin Fowler (kóðalyktaskráin sem mikið af stöðugreiningartólum sækir í).
- *Working Effectively with Legacy Code*, eftir Michael Feathers (stjórn arfleifðarbiðlista gæðavandamála í rótgrónum kóðagrunni).
