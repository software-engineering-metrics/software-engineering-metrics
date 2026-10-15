# 2.2 Flæðiatriði: eiginleikar, gallar, áhættur og skuld

## Yfirlit og tilgangur

**Flæðiatriði** er vinnueining Flæðirammans, og sérhvert flæðiatriði tilheyrir nákvæmlega einni af fjórum gerðum: **eiginleikar**, nýtt viðskiptavirði eða geta afhent viðskiptavini; **gallar**, gæðalagfæringar á villum sem notendur eða prófanir finna; **áhættur**, öryggis-, regluvörslu-, persónuverndar- og stjórnarháttavinna sem ver reksturinn; og **skuld**, [tæknileg skuld](https://en.wikipedia.org/wiki/Technical_debt), byggingarlegar úrbætur og innviðavinna sem gerir framtíðarhraða mögulegan. Viðfangsefni 2.1 kynnti rammann sem þessir fjórir flokkar tilheyra; þetta viðfangsefni fer djúpt í flokkunina sjálfa, því flokkarnir skila aðeins virði ef teymi flokkar vinnu sína í þá heiðarlega og samkvæmt.

Skilgreinandi eiginleiki flæðiatriða er að úthlutun yfir gerðirnar fjórar er **núllsummuleikur**: föst verkfræðigeta er til á hverju tímabili, og sérhver klukkustund varin í eiginleika er klukkustund sem ekki er varin í skuld, áhættu eða gallavinnu. Þetta er ekki ný staðreynd um hugbúnaðarafhendingu, sérhver verkfræðileiðtogi veit að geta er takmörkuð, en flestar skipulagsheildir hafa enga samkvæma, heiðarlega leið til að sjá raunverulega skiptingu. Sprettuhraði telur sögupunkta óháð gerð; niðurbrunninn biðlisti lítur eins út hvort sem vinnan að baki var nýtt afgreiðsluflæði eða þrír mánuðir af óglæsilegum öryggisúrbótum. Flæðiatriði eru til sérstaklega til að gera þessa ósýnilegu skiptingu sýnilega.

Fyrir stór teymi breytir þessi sýnileiki eðli mönnunarsamtals. Í stað þess að verkfræðileiðtogi haldi fram órökstuddu „við þurfum meiri tíma fyrir tæknilega skuld“ framleiðir flokkun flæðiatriða raunverulega tölu, skuld át 30% af getu síðasta ársfjórðungs, sem má ræða, verja og aðlaga vísvitandi með viðskiptahagsmunaaðilum. Stórfyrirtæki sem reka margar samhliða vörulínur og opinberar stofnanir sem vega nýja virkni fyrir borgara á móti áhættu arfleifðarkerfa reiða sig báðar á þessa tegund verjanlegrar, magnbundinnar málamiðlunar langtum frekar en á einkatilfinningu fyrir að „við eyðum of miklum tíma í viðhald“.

## Lykilmeginreglur

- **Sérhvert flæðiatriði tilheyrir nákvæmlega einni gerð.** Að þvinga eina flokkun, frekar en að leyfa blandaða eða tvíræða, er það sem gerir flokkunina nothæfa fyrir samantekna skýrslugjöf.
- **Úthlutun er núllsumma, ekki samlagning.** Meiri geta fyrir eiginleika er nauðsynlega minni geta fyrir galla, áhættu og skuld á sama tímabili.
- **Engin algild heilbrigð dreifing er til.** Ung vara á vaxtarskeiði ætti réttilega að hallast að eiginleikum; þroskað kerfi sem ber raunverulega tæknilega áhættu ætti réttilega að hallast að skuldar- og áhættuvinnu.
- **Skuldar- og áhættuvinna er viðvarandi vanskýrð án þessa aga.** Hún gerist hljóðlega, innsogin í almenn „verkfræðiverkefni“, þar til flokkun flæðiatriða neyðir hana fram í dagsljósið.
- **Gæði flokkunar ráða öllu virði flokkunarinnar.** Flokkun beitt ósamkvæmt eða leikin eftir á framleiðir tölur sem villa virkt frekar en upplýsa.

## Ráðleggingar

### Flokkaðu sérhvert atriði við upptöku, með skriflegri skilgreiningu fyrir hverja gerð

Komdu þér saman um hnitmiðaða, skriflega skilgreiningu á því hvað telst eiginleiki, galli, áhætta og skuld í þínu tiltekna samhengi, og krefstu þess að hver ný vinnueining sé flokkuð gegn þeirri skilgreiningu um leið og hún fer inn í virðisstrauminn, ekki eftir að henni er lokið. Fyrirfram samþykkt skilgreining stenst freistinguna að flokka eftir á út frá því hvernig vinna reyndist líta út, sem er einmitt leikáhættan sem þetta viðfangsefni nefnir beint hér að neðan.

### Skýrðu frá flæðisdreifingu sem þróun, ekki stakri mynd

Dreifing eins tímabils segir þér minna en þróunin yfir nokkur tímabil. Stöðugt rek í átt að einni gerð atriða, eiginleikar hækka meðan skuld minnkar hljóðlega ársfjórðung eftir ársfjórðung, er langtum sterkara merki en tala nokkurs eins tímabils, og það er yfirleitt mynstrið sem vert er að vekja máls á við hagsmunaaðila áður en það verður kreppa frekar en eftir.

### Settu vísvitandi markdreifingu með viðskiptahagsmunaaðilum, ekki bara verkfræði

Ákveddu, ásamt vöru- og viðskiptaforystu, hvernig heilbrigð dreifing lítur út fyrir núverandi áfanga tiltekins virðisstraums þíns, og endurskoðaðu það mark reglulega frekar en að láta það reka sjálfgefið. Ung vara á vaxtarskeiði og þroskað kerfi á stöðugleikaskeiði hafa réttilega ólík heilbrigð mörk, og markið sjálft ætti að vera samið viðskiptaákvörðun, ekki eitthvað sem verkfræði ákveður hljóðlega ein.

### Víxlathugaðu flokkun flæðiatriða gegn óháðum sönnunargögnum

Berðu reglulega saman flæðisdreifingu þína við mælikvarða sem velta ekki á sjálfsflokkun: hlutfall sloppinna galla (viðfangsefni 5.1), mælingu tæknilegrar skuldar (viðfangsefni 4.5) og mælikvarða veikleikastjórnunar (viðfangsefni 6.4). Ef gallar eða veikleikar eru að aukast meðan hlutdeild „galla“ og „áhættu“ flæðiatriða helst flöt eða minnkar, er það misræmi skýrasta tiltæka merkið um að flokkun hafi rekið frá raunveruleikanum.

### Gættu sérstaklega að eiginleikaverksmiðjumynstrinu

Þegar flæðisdreifing sýnir eiginleika samfellt gleypa nær alla getu, ársfjórðung eftir ársfjórðung, með skuldar- og áhættuvinnu aldrei yfir táknrænni hlutdeild, þýðir það mynstur (stundum kallað „eiginleikaverksmiðja“) yfirleitt að skuld og áhætta eru svelt af getu, ekki að kerfið þarfnist í raun ekkert viðhalds. Þetta mynstur er þægilegt til skamms tíma og dýrt síðar, og birtist að lokum sem gæða- eða öryggiskreppa sem berst án viðvörunar í flæðisdreifingarritinu, því undirliggjandi söfnun var aldrei sýnileg.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Engin formleg flokkun (almennur biðlisti) | Engin ferlisyfirbygging | Skuldar-, áhættu- og gallavinna helst ósýnileg; erfitt að verja mönnunarákvarðanir |
| Fjögurra gerða flokkun flæðiatriða | Gerir getuúthlutun sýnilega og samningshæfa við hagsmunaaðila | Krefst aga við upptöku og skriflegrar, samþykktrar skilgreiningar á hverja gerð |
| Fínkorna flokkun (margar undirgerðir) | Meiri greiningarupplýsingar | Meiri flokkunarfyrirhöfn; fleiri tölur til að útskýra fyrir hagsmunaaðilum |
| Flokkun eftir á | Auðveldari í beitingu, engin ferlisbreyting fyrirfram | Mjög útsett fyrir leik; flokkun rekur í átt að því sem lítur best út |

Aðalspennan er **flokkunaragi á móti ferlisyfirbyggingu**. Fjögurra gerða flokkun er viljandi gróf, nógu gróf til að flokkun atriðis taki sekúndur, ekki rökræður, en sá grófleiki heldur aðeins ef agi þess að flokka við upptöku, gegn skriflegri skilgreiningu, er sannarlega viðhaldið. Leystu spennuna með því að halda flokkuninni nákvæmlega svona einfaldri, fjórar gerðir, ekki fleiri, og fjárfesta alla aukalega strangleika í endurskoðunarskrefið (víxlathugun gegn óháðum sönnunargögnum) frekar en í flóknara flokkunarkerfi sem rýrnar undir raunverulegu vinnuálagi.

## Spurningar til að ræða með teyminu

1. **Ef við flokkuðum allt sem teymi okkar afhenti síðasta ársfjórðung, hvernig liti raunveruleg skipting yfir eiginleika, galla, áhættu og skuld út, og myndi hún koma hagsmunaaðilum okkar á óvart?** Flest teymi hafa aldrei gert þessa æfingu heiðarlega. Reynið hana með raunverulegum gögnum áður en þið gerið ráð fyrir að þið vitið svarið nú þegar.

2. **Höfum við skriflega, samþykkta skilgreiningu á því hvað telst eiginleiki á móti skuld á móti áhættu í okkar tiltekna samhengi, eða veltur flokkun á því hver merkir miðann hverju sinni?** Óformleg, ósamkvæm skilgreining framleiðir tölur sem líta nákvæmar út en eru í raun ekki sambærilegar tímabil frá tímabili.

3. **Hefur flæðisdreifing okkar nokkurn tímann rekið stöðugt í átt að einni gerð atriða án þess að nokkur hafi ákveðið það vísvitandi?** Hægt rek er auðvelt að missa af tímabil fyrir tímabil en augljóst þegar teiknað sem þróun. Dragið fram gögn nokkurra tímabila, ef þið eigið þau, og leitið heiðarlega að þessu mynstri.

4. **Hvernig myndi heilbrigð flæðisdreifing líta út fyrir núverandi áfanga vöru okkar, og höfum við í raun komið okkur saman um það mark við viðskiptahagsmunaaðila?** Flestar skipulagsheildir hafa aldrei gert þetta mark skýrt, sem þýðir að enginn sameiginlegur grunnur er til að taka eftir því þegar raunveruleg dreifing rekur frá því.

5. **Passar flæðisdreifing okkar við óháð sönnunargögn, eins og hlutfall sloppinna galla eða fjölda opinna veikleika, eða er misræmi sem vert er að rannsaka?** Misræmi hér er skýrasta tiltæka merkið um að flokkun hafi rekið frá því sem vinnan í raun er.

6. **Gæti einhver í teymi okkar hljóðlega endurmerkt skuldar- eða áhættuatriði sem eiginleika undir afhendingarþrýstingi, og myndum við taka eftir því núna ef hann gerði það?** Þetta er aðalleikáhætta viðfangsefnisins sögð beint. Ræðið hvort núverandi ferli ykkar myndi í raun grípa þetta, ekki bara hvort nokkur myndi gera það af ásettu ráði.

## Geirasjónarhorn

**Sprotafyrirtæki.** Formleg flokkun finnst oft eins og yfirbygging þegar allt teymið veit þegar við hvað hver vinnur. Gagnlega lágmarkið í þessum mæli er einfaldlega að nefna flokkana fjóra upphátt við skipulagningu, svo skuldar- og áhættuvinna sé ekki hljóðlega sett aftar í forgangsröð í hvert sinn sem eiginleikafrestur skapar þrýsting, mynstur sem magnast illa þegar kóðagrunnur og teymi vaxa bæði.

**Lítil fyrirtæki.** Einn sérsniðinn reitur eða merki í fyrirliggjandi rakningartóli þínu nægir til að fanga gerð flæðiatriðis án nokkurrar sérstakrar tólafjárfestingar. Agi samkvæmrar flokkunar við upptöku skiptir langtum meira máli en nokkur fágun tóla.

**Stórfyrirtæki.** Flokkun flæðiatriða er þar sem þessi rammi vinnur fyrir virði sínu í stórum mæli, því stór skipulagsheild sem rekur marga samhliða virðisstrauma á enga aðra áreiðanlega, samantekna leið til að sjá hvernig geta skiptist í raun yfir eiginleika, galla, áhættu og skuld. Fjárfestu í tólasamþættri flokkun og reglubundnum víxlathugunum gegn óháðum sönnunargögnum; handvirk, tilfallandi flokkun lifir ekki af raunverulegan skipulagsmæli.

**Hið opinbera.** Flæðisdreifing gefur leiðtoga í tækni hins opinbera verjanlegt, magnbundið svar þegar spurt er hvers vegna ekki eru fleiri nýir eiginleikar fyrir borgara afhentir, þegar heiðarlega svarið er að áhættu- og skuldabyrði arfleifðarkerfis étur raunverulega, réttlætanlega hlutdeild getu. Að gera þá málamiðlun skýra og samda, frekar en að taka hana hljóðlega á sig, byggir yfirleitt meira traust við eftirlitsaðila en órökstudd tilvísun í „tæknilega nauðsyn“.

## Dæmi

**Stórfyrirtæki.** Vettvangsteymi netverslunar stórs smásölufyrirtækis taldi, byggt á sprettuhraða, að það afhenti stöðuga eiginleikaframleiðslu. Fyrsta heiðarlega flokkunaræfing flæðiatriða leiddi í ljós að „eiginleikar“ voru í raun aðeins 40% lokinnar vinnu, þar sem skuld, mest tengd öldruðu afgreiðslukerfi, át nær þriðjung getu án þess að hafa nokkurn tímann verið nefnd sem slík í nokkurri fyrri skýrslu. Að setja þessa skiptingu fram fyrir vöruforystu, ásamt vaxandi hlutfalli sloppinna galla sem staðfesti skuldarbyrðina, tryggði sérstök nútímavæðingarfjárlög sem teymið hafði árangurslaust beðið um í tvö ár með eingöngu eigindlegum rökum.

**Hið opinbera.** Stafrænt ökuleyfateymi ríkisstofnunar ökutækja flokkaði biðlista sinn í fyrsta sinn eftir að opinber bilun beindi rýni að stöðugleika undirliggjandi kerfis. Æfingin leiddi í ljós að „áhættu“vinna, aðallega öryggisplástrun sem hafði ítrekað verið sett aftar í forgangsröð í þágu sýnilegra eiginleika fyrir borgara, hafði skroppið saman í undir 5% af getu á undanfarandi ári, mynstur sem aldrei hafði verið sýnilegt í staðlaðri skýrslugjöf teymisins. Forysta stofnunarinnar notaði niðurstöðuna til að skylda lágmarksúthlutun áhættuvinnu héðan í frá, studda af flæðisdreifingargögnum frekar en almennri stefnuyfirlýsingu einni saman.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun flokkunar flæðiatriða er verjanlegur, magnbundinn grunnur fyrir mönnunarákvarðanir sem áður voru rökræddar eigindlega og töpuðust oft fyrir hvaða vinnu sem var sýnilegust hagsmunaaðilum. Smásöludæmið hér að ofan, sem tryggði nútímavæðingarfjárlög með raunverulegum getugögnum frekar en almennri beiðni, er mynstrið sem þessi agi framleiðir áreiðanlega: tiltekin tala er langtum erfiðari að hafna en almenn tilfinning um að „við þurfum meiri tíma fyrir viðhald“.

Heildareignarkostnaður er lítill þegar flokkunin og skilgreiningar hennar eru samþykktar: flokkun bætir sekúndum við upptöku, ekki marktækri ferlisbyrði, og tólasamþættingin sem þarf til að rekja hana er yfirleitt einn sérsniðinn reitur eða merki. Raunverulegi, viðvarandi kostnaðurinn er agi þess að viðhalda heiðarlegri flokkun undir afhendingarþrýstingi, sem er ástæða þess að reglubundin víxlathugun gegn óháðum sönnunargögnum skiptir jafn miklu máli og upphafleg upptaka.

## Andmynstur og gildrur

- **Að flokka vinnu eftir á, eftir að niðurstaðan er þekkt:** leikvektorinn í hjarta þessa viðfangsefnis. Undir afhendingarþrýstingi getur teymi hljóðlega merkt skuldar- eða áhættuvinnu sem eiginleika eftir á, eða rúnnað tvíræð atriði í átt að þeirri gerð sem lítur betur út á dreifingarritinu, án þess að nokkur ein ákvörðun líti óheiðarleg út ein og sér. Varnarmælikvarðinn er flokkun við upptöku gegn skriflegri skilgreiningu, ásamt reglubundnum endurskoðunum sem bera flæðisdreifingu saman við óháð sönnunargögn eins og hlutfall sloppinna galla (viðfangsefni 5.1) og veikleikamælikvarða (viðfangsefni 6.4), sami endurskoðunar-gegn-óháðum-sönnunargögnum agi og viðfangsefni 1.2 biður um fyrir hvern mælikvarða í þessari bók.
- **Að láta eiginleika samfellt gleypa nær alla getu (eiginleikaverksmiðjumynstrið):** sveltir skuldar- og áhættuvinnu hljóðlega þar til hún birtist sem kreppa.
- **Að meðhöndla dreifingu eins tímabils sem alla myndina:** missir af hægu, uppsafnaða reki sem þróunarsýn afhjúpar skýrt.
- **Að setja markdreifingu án viðskiptahagsmunaaðila:** fórnar helsta virði rammans, sameiginlegum, sömdum skilningi á málamiðluninni.
- **Að nota ósamkvæma eða óskjalfesta skilgreiningu á hverja gerð:** framleiðir tölur sem líta nákvæmar út en eru í raun ekki sambærilegar yfir tíma.
- **Að ofhanna flokkunina með mörgum undirgerðum:** bætir við flokkunaryfirbyggingu sem rýrir aga án samsvarandi innsýnar.

## Þroskalíkan

- **Stig 1, Upphaf:** Vinna er rakin almennt, án flokkunar flæðiatriða; skuldar- og áhættuvinna er ósýnileg í skýrslugjöf.
- **Stig 2, Þróun:** Sum teymi flokka flæðiatriði óformlega, en skilgreiningar eru ósamkvæmar og flokkun gerist oft eftir á.
- **Stig 3, Stöðlun:** Öll teymi flokka við upptöku gegn sameiginlegri, skriflegri skilgreiningu, og flæðisdreifing er rakin sem þróun.
- **Stig 4, Stjórnun:** Flæðisdreifing er víxlathuguð reglulega gegn óháðum sönnunargögnum, og markdreifingar eru settar vísvitandi með viðskiptahagsmunaaðilum.
- **Stig 5, Samhæfing:** Gögn flæðiatriða upplýsa beint mönnunar- og fjárfestingarákvarðanir í allri skipulagsheildinni, og forysta getur bent á tilteknar ákvarðanir teknar því flokkun gerði áður ósýnilega málamiðlun skýra.

## Hugmyndir til umræðu

1. Hvað myndi heiðarleg skipting flæðiatriða síðasta ársfjórðungs sýna, og myndi hún koma einhverjum á óvart?
2. Höfum við skriflega skilgreiningu á hverri af gerðunum fjórum flæðiatriða, eða veltur flokkun á því hver merkir vinnuna?
3. Hefur flæðisdreifing okkar nokkurn tímann rekið í átt að einni gerð atriða án vísvitandi ákvörðunar að baki?
4. Hvaða óháðu sönnunargögn gætum við víxlathugað flæðisdreifingu okkar gegn í dag?

## Helstu atriði til að muna

- **Flæðiatriði** tilheyrir nákvæmlega einni af fjórum gerðum, eiginleikum, göllum, áhættum eða skuld, og getuúthlutun yfir þær er **núllsumma**.
- **Engin algild heilbrigð dreifing er til**; rétta blandan veltur á áfanga vöru og ætti að vera vísvitandi, samið mark með viðskiptahagsmunaaðilum.
- Aðalleikvektor viðfangsefnisins er **flokkun eftir á**, að endurmerkja skuldar- eða áhættuvinnu hljóðlega sem eiginleika eftir á; varnarmælikvarðinn er flokkun við upptöku auk reglubundinna endurskoðana gegn óháðum sönnunargögnum.
- Gættu sérstaklega að **eiginleikaverksmiðjumynstrinu**, eiginleikar sem samfellt gleypa nær alla getu, sem sveltir skuldar- og áhættuvinnu þar til hún birtist sem kreppa.
- Flæðisdreifing er verðmætust sem **þróun**, og mesti ávinningur hennar kemur af því að deila henni beint með viðskiptahagsmunaaðilum.

## Heimildir og frekara lesefni

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Kim, Gene, Kevin Behr og George Spafford. *The Phoenix Project*. IT Revolution Press, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow: Second Generation Lean Product Development*. Celeritas Publishing, 2009.
