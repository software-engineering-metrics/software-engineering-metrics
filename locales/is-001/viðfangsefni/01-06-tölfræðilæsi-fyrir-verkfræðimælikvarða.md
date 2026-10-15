# 1.6 Tölfræðilæsi fyrir verkfræðimælikvarða

## Yfirlit og tilgangur

Þú þarft ekki tölfræðigráðu til að reka mælikvarðaáætlun vel, en þú þarft að forðast fá, sérstök og algeng mistök sem gera annars vel stýrða og vel tækjavædda mælikvarða virkt villandi. Teymi getur gert allt rétt, nefnt skýra ákvörðun, forðast lögmál Goodharts, vegið í átt að niðurstöðum, stýrt eignarhaldi og tækjavætt áreiðanlega, og samt dregið ranga ályktun því það las meðaltal þar sem það þurfti hundraðshlutamark, tók hávaða fyrir þróun eða féll fyrir tilviljun klæddri sem orsök. Þetta viðfangsefni er lágmarks tölfræðileg dómgreind sem bókin gerir ráð fyrir að lesandi sérhvers síðara viðfangsefnis hafi þegar.

Kjarnavandinn er að verkfræðimælikvarðar eru yfirleitt hávaðasamir, skekktir og með lítil úrtök á mælikvarða formlegrar tölfræði. Vikulegur afhendingafjöldi eins teymis er ekki sléttur bjölluferill; hann er handfylli gagnapunkta með stöku stórum frávikum (stór útgáfa, afturköllunarhrina vegna atvika). Að beita barnalegri innsæisdómgreind sem smíðuð er fyrir stór, vel hegðuð gagnasöfn á slík gögn framleiðir sjálfsöruggar, rangar ályktanir með reglulegu millibili. Að læra að koma auga á hvenær tala er of hávaðasöm til að treysta, hvenær meðaltal lýgur að þér og hvenær tveir hlutir sem hreyfast saman segja ekkert um orsakasamband er ekki valfrjáls strangleiki, það er það sem skilur að mælikvarðaáætlun sem kennir skipulagsheild eitthvað satt og eina sem kennir henni eitthvað sem hljómar trúverðugt og er rangt.

Í mæli stórfyrirtækja og hins opinbera magnast tölfræðileg mistök því villandi ályktun, þegar forysta hefur samþykkt hana, er framkvæmd yfir mörg teymi áður en nokkrum dettur í hug að endurskoða undirliggjandi greiningu. Tölfræðilega barnalegur samanburður tveggja deilda, eða fyrir og eftir stóra endurskipulagningu, getur mótað mönnunarákvarðanir árum saman á grundvelli einskis nema hávaða eða truflunarbreytu sem enginn stýrði fyrir. Þetta viðfangsefni er til að gera þá bilun ólíklegri.

## Lykilmeginreglur

- **Miðgildi eða hundraðshlutamark segir yfirleitt meira en meðaltal.** Verkfræðigögn eru reglulega skekkt af frávikum sem meðaltöl gleypa en hundraðshlutamörk ekki.
- **Lítil úrtök framleiða hávaðasamar tölur.** Hundraðshluti reiknaður úr handfylli atburða sveiflast gríðarlega af ástæðum sem hafa ekkert með raunverulega breytingu að gera.
- **Aftursnúningur til meðaltals blekkir fólk stöðugt.** Óvenju góð eða slæm lesning er yfirleitt fylgt af eðlilegri, með eða án nokkurrar íhlutunar.
- **Fylgni er ekki orsakasamband, og truflunarbreytur eru alls staðar.** Tveir mælikvarðar sem hreyfast saman geta deilt falinni þriðju orsök í stað þess að annar knýi hinn.
- **[Stýririt](https://en.wikipedia.org/wiki/Control_chart) slær stakan fyrir-og-eftir samanburð.** Að sjá eðlilegt sveiflusvið er það sem lætur þig greina raunverulega breytingu frá hávaða.

## Ráðleggingar

### Hafðu miðgildi og hundraðshlutamörk sem sjálfgefið fyrir skekkt gögn

Tímabundnir verkfræðimælikvarðar, leiðartími, bataleiðartími atvika, svartími, eru næstum alltaf hægri-skekktir: flest gildi þyrpast lágt, með langan hala af stökum stórum frávikum. Meðaltal dregið af þeim hala getur dregið upp mynd sem ekkert dæmigert tilvik líkist. Skýrðu frá **miðgildi** (miðgildið, þar sem helmingur athugana er fyrir ofan og helmingur fyrir neðan) samhliða **90.** eða **95. hundraðshlutamarki** (gildinu sem 90% eða 95% athugana falla undir), sem saman sýna bæði dæmigerða tilvikið og versta hala sem teymi upplifir í raun. Viðfangsefnið um KPI í systurbókinni `software-engineering-guide`, og sérhvert afhendingarmælikvarðaviðfangsefni í 2. hluta þessarar bókar, gerir ráð fyrir þessari venju í gegn.

### Vittu hvenær úrtak er of lítið til að treysta

Breytingabilunarhlutfall reiknað úr þremur afhendingum í rólegri viku er ekki marktækt merki; ein bilun færir hundraðshlutann úr 0% í 33% á einni nóttu af ástæðum sem geta haft ekkert með undirliggjandi áhættu að gera. Áður en þú bregst við hundraðshlutabyggðum mælikvarða, athugaðu undirliggjandi talningu. Sem hagnýt þumalputtaregla, meðhöndlaðu hlutfall reiknað úr færri en um tuttugu til þrjátíu undirliggjandi atburðum sem hávaðasamt og sem þarfnast lengri athugunarglugga áður en ályktun er dregin, og segðu það skýrt á mælaborðinu frekar en að setja fram sveiflukennt hundraðshlutfall úr litlu úrtaki með sama sjálfstrausti og stöðugt úr stóru.

### Gættu að aftursnúningi til meðaltals áður en þú þakkar íhlutun

Ef versta atvikavika teymis frá upphafi er fylgt af athygli forystu og síðari framför er freistandi að þakka íhlutuninni. Oft hefði hluti þeirrar framfarar gerst hvort sem er, því óvenju öfgakennd lesning er yfirleitt fylgt af dæmigerðari eingöngu sem tölfræðilegur gripur, fyrirbæri sem kallast **aftursnúningur til meðaltals**. Varastu þetta með því að bera saman við lengri sögulegt grunngildi frekar en stakan öfgapunkt sem vakti athygli, og með því að vera hæfilega auðmjúkur um hve mikið af nokkurri sjáanlegri framför á að eigna tiltekinni aðgerð.

### Leitaðu að truflunarbreytum áður en þú fullyrðir að mælikvarði hafi valdið niðurstöðu

Þegar tveir mælikvarðar hreyfast saman, afhendingartíðni hækkar samhliða ánægju viðskiptavina, stenstu viðbragðið að fullyrða að annar hafi valdið hinum áður en þú íhugar **truflunarbreytu**: falinn þriðja þátt sem knýr báða. Ný eiginleikaútgáfa gæti sjálfstætt aukið bæði afhendingartíðni (fleiri eftirfylgnilagfæringar) og ánægju (eiginleikinn sjálfur), án nokkurra orsakatengsla milli mælikvarðanna tveggja. Áður en þú setur fram fylgni sem sönnun orsakasambands, spyrðu virkt hvað annað breyttist á sama tíma sem gæti útskýrt báðar hreyfingarnar.

### Notaðu stýririt, ekki staka fyrir-og-eftir mynd

**Stýririt** teiknar mælikvarða yfir tíma með eðlilegu sveiflusviði hans sýndu skýrt, yfirleitt sem bönd kringum miðmeðaltal. Þetta lætur þig greina raunverulega breytingu, gagnapunkt eða viðvarandi hrinu utan eðlilegs sviðs, frá venjulegum hávaða sem stakur fyrir-og-eftir samanburður getur ekki greint. Áður en þú lýsir því yfir að „talan batnaði eftir breytinguna“, teiknaðu nóg sögulegra gagna til að sjá hvernig eðlileg sveifla lítur út og athugaðu hvort lesningin eftir breytingu falli í raun utan hennar.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Meðaltöl | Einföld, kunnugleg, auðvelt að reikna | Brengluð af frávikum á skekktum verkfræðigögnum |
| Miðgildi og hundraðshlutamörk | Þolin gagnvart frávikum, sýna dæmigert tilvik og hala saman | Örlítið ókunnuglegri fyrir ótæknilega áheyrendur |
| Stakur fyrir-og-eftir samanburður | Hraður, innsæisríkur, auðvelt að setja fram | Viðkvæmur fyrir aftursnúningi til meðaltals og hávaða |
| Stýririt og lengri grunngildi | Greinir raunverulegar breytingar frá hávaða áreiðanlega | Krefst meiri sögulegra gagna og meiri útskýringar fyrir ótæknilega áheyrendur |

Aðalspennan er **einfaldleiki á móti strangleika**. Meðaltöl og stakir fyrir-og-eftir samanburðir eru auðveldari að reikna og útskýra, sem er einmitt ástæða þess að þeir ráða ríkjum í tilfallandi skýrslugjöf, en þeir eru líka tvær aðferðirnar sem líklegastar eru til að framleiða sjálfsörugga, ranga ályktun á þeim tegundum hávaðasamra, skekktra gagna sem mælikvarðar þessarar bókar mynda. Leystu spennuna með því að hafa strangari aðferðir sem sjálfgefnar, miðgildi, hundraðshlutamörk og stýririt, fyrir sérhverja ákvörðun með raunverulegar afleiðingar, og taka einfaldari aðferðir frá fyrir lítilvæg, könnunarkennd yfirlit þar sem röng lesning kostar lítið.

## Spurningar til að ræða með teyminu

1. **Hverjar mælaborðsflísa okkar sýna meðaltal þar sem miðgildi eða hundraðshlutamark myndi segja sannari sögu?** Tímabundnir verkfræðimælikvarðar eru næstum alltaf skekktir, og meðaltal á skekktum gögnum getur litið vel út meðan dæmigerða tilvikið, eða versti halinn, segir allt aðra sögu. Endurskoðið tímabundnar flísar ykkar sérstaklega fyrir þessa skiptingu.

2. **Hve lítið er undirliggjandi úrtak hundraðshlutabyggðu mælikvarða okkar, og meðhöndlum við mælikvarða úr tíu atburðum með sama sjálfstrausti og einn úr þúsund?** Sveiflukennt hlutfall úr litlu úrtaki sett fram án undirliggjandi talningar býður ofviðbrögð við hávaða. Athugið breytingabilunarhlutfall ykkar og svipaðar hundraðshlutaflísar fyrir þetta bil.

3. **Höfum við nokkurn tímann þakkað íhlutun fyrir framför sem aftursnúningur til meðaltals hefði framleitt hvort sem er?** Þetta er ein auðveldustu tölfræðimistökin að gera og ein þau erfiðustu að taka eftir eftir á, því íhlutunin og framförin gerðust í raun í þeirri röð. Lítið til baka á nýlega „við löguðum það“ sögu og spyrjið heiðarlega hvort grunngildissamanburðurinn var nógu langur til að útiloka þetta.

4. **Hvar höfum við gert ráð fyrir að einn mælikvarði hafi valdið öðrum án þess að athuga truflunarbreytu?** Að tveir hlutir hreyfist saman er algengt; að annar valdi hinum er sterkari fullyrðing sem krefst meiri sönnunargagna. Veljið fylgni sem teymi ykkar trúir á núna og reynið að nefna trúverðuga truflunarbreytu sem útskýrði hana án nokkurra orsakatengsla.

5. **Höfum við nóg söguleg gögn til að vita hvernig eðlileg sveifla lítur út fyrir mikilvægustu mælikvarða okkar, eða berum við saman stakar mælingar?** Án tilfinningar fyrir eðlilegu sviði lítur sérhver stök lesning ógnvekjandi eða fullvissandi út eftir skapi frekar en sönnunargögnum. Ræðið hvort mest vaktaði mælikvarði ykkar hefur nokkurn tímann verið teiknaður sem stýririt frekar en stök tala.

6. **Hvernig komum við óvissu á framfæri við ótæknilega hagsmunaaðila núna, og gefur mælaborð okkar til kynna meiri nákvæmni en gögnin styðja í raun?** Graf án vísbendingar um eðlilega sveiflu eða úrtaksstærð getur látið forystuteymi ofbregðast við hávaða eða, jafn oft, vísað raunverulegu merki frá sem hávaða. Ræðið hvernig skýrslugjöf ykkar gæti komið þessu heiðarlega á framfæri án þess að verða ólæsileg.

## Geirasjónarhorn

**Sprotafyrirtæki.** Lítil teymi mynda lítil úrtök nær alls staðar, sem þýðir að smáúrtaksvarúðin í þessu viðfangsefni skiptir stöðugt máli. Stenstu að draga sterkar ályktanir af einni slæmri viku eða einni frábærri; með aðeins handfylli gagnapunkta er heiðarlega svarið við „er þetta þróun“ oft „við vitum það ekki enn“.

**Lítil fyrirtæki.** Innbyggð mælaborð tilbúinna tóla hafa oft meðaltöl og stakar tímabilasamanburði sem sjálfgefið því þau eru einfaldast að reikna og sýna. Hvar sem tólið leyfir, skiptu yfir í miðgildi fyrir tímabundna mælikvarða, og vertu tortrygginn á hverja fyrirsögn um „upp um 40% í þessum mánuði“ reiknaða úr lítilli undirliggjandi talningu.

**Stórfyrirtæki.** Tölfræðileg mistök í þessum mæli bakast inn í mönnunar- og endurskipulagningarákvarðanir sem hafa áhrif á hundruð manna. Fjárfestu í greinendum eða innbyggðum gagnasérfræðingum sem geta smíðað rétt stýririt og athugað truflunarbreytur áður en samanburður milli rekstrareininga eða fyrir-og-eftir stóra breytingu er settur fram fyrir forystu sem fastmótuð staðreynd.

**Hið opinbera.** Tölfræðilega barnalegur samanburður sem nærir opinbera skýrslu eða fjárlagarökstuðning getur haft ósamsvarandi raunheimsafleiðingar og býður einmitt þá rýni sem afhjúpar slælega greiningu opinberlega. Beittu strangari aðferðunum, stýriritum, skjalfestum úrtaksstærðum, truflunarathugunum, sem varanlegri venju fyrir allt sem birt er út á við, ekki bara sem tilfallandi besta viðleitni.

## Dæmi

**Stórfyrirtæki.** Forysta hugbúnaðarfyrirtækis fagnaði 25% framför í breytingabilunarhlutfalli mánuðinn eftir að ný kóðayfirferðarstefna var tekin upp og þakkaði stefnunni það beint. Nánari skoðun leiddi í ljós að „fyrir“ mánuðurinn hafði verið óvenju slæmur, knúinn af misheppnuðum flutningi eins teymis, og að undirliggjandi úrtaksstærð í báðum mánuðum var undir þrjátíu afhendingum í öllu fyrirtækinu. Stýririt með tólf mánaða sögu sýndi að nýja lesningin var vel innan eðlilegrar sveiflu, ekki raunveruleg stigbreyting, og raunveruleg áhrif stefnunnar, þó raunveruleg, voru langtum minni en fyrirsögnin gaf til kynna.

**Hið opinbera.** Almenningssamgöngustofnun skýrði frá mikilli framför milli ára í stundvísi nýstafrænt tímasetningarkerfis, með því að bera saman einn „fyrir“ ársfjórðung við einn „eftir“ ársfjórðung. Óháð endurskoðun fann að „fyrir“ ársfjórðungurinn féll saman við ótengda framkvæmdalokun sem hafði dregið niður frammistöðu í öllu netinu, og lengra grunngildi sýndi að stundvísi hafði þegar verið að jafna sig áður en nýja kerfið fór í loftið. Endurskoðuð skýrsla stofnunarinnar notaði fullt marg-ára stýririt og eignaði hóflegri, en verjanlegri, framför nýja kerfinu sérstaklega.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun tölfræðilæsis er forðuð misbeining: skipulagsheild sem eignar framför rétt, eða þekkir hávaða sem hávaða, ver næstu fjárfestingu þar sem hún hjálpar í raun frekar en að elta draugaáhrif. Smásöludæmið hér að ofan er dæmigert: fyrirtæki sem trúði að yfirferðarstefna ein hefði knúið 25% framför gæti vanfjárfest í öðrum raunverulegum framlagsþáttum, eða oftalið virði stefnunnar á þann hátt sem villir framtíðarákvarðanir.

Heildarkostnaður tölfræðilegs strangleika er aðallega venjubreyting frekar en ný tól: að velja miðgildi fram yfir meðaltal, athuga úrtaksstærð áður en brugðist er við, teikna lengra grunngildi áður en sigri er lýst yfir. Þessar venjur kosta lítið að taka upp og koma í veg fyrir langtum stærri, erfiðari-að-greina kostnað ákvarðana teknar á sjálfsöruggum, röngum ályktunum.

## Andmynstur og gildrur

- **Að skýra frá meðaltali á skekktum tímabundnum gögnum:** felur dæmigerða tilvikið og halann á bak við eina villandi tölu.
- **Að bregðast við hundraðshluta án sýnilegrar úrtaksstærðar:** meðhöndlar hávaða úr handfylli atburða eins og stöðuga, marktæka þróun.
- **Að þakka íhlutun án þess að útiloka aftursnúning til meðaltals:** algeng, auðveld-að-gera, erfið-að-taka-eftir mistök.
- **Að fullyrða orsakasamband af fylgni án þess að íhuga truflunarbreytur:** ofmetur hvað gögnin styðja í raun.
- **Að bera saman staka fyrir-og-eftir mynd í stað þess að teikna lengra grunngildi:** getur ekki greint raunverulega breytingu frá venjulegri sveiflu.
- **Að gefa til kynna meiri nákvæmni en gögnin styðja í skýrslugjöf fyrir forystu:** býður ofviðbrögð við hávaða eða höfnun raunverulegs merkis.

## Þroskalíkan

- **Stig 1, Upphaf:** Mælikvarðar eru skýrðir sem hrá meðaltöl og stakar fyrir-og-eftir myndir án nokkurrar athygli á úrtaksstærð, skekkju eða sveiflu grunngildis.
- **Stig 2, Þróun:** Sumir greinendur beita miðgildum eða hundraðshlutamörkum óformlega, en engin samkvæm skipulagsvenja er til og truflunarbreytur eru sjaldan athugaðar.
- **Stig 3, Stöðlun:** Miðgildi og hundraðshlutamörk eru sjálfgefin fyrir skekkta tímabundna mælikvarða; úrtaksstærðir eru sýndar samhliða hundraðshlutabyggðum mælikvörðum í allri skipulagsheildinni.
- **Stig 4, Stjórnun:** Stýririt með sögulegum grunngildum eru staðalvenja fyrir sérhverja fullyrðingu um raunverulega breytingu; truflunarbreytur eru virkt íhugaðar áður en orsakafullyrðingar eru settar fram í skýrslugjöf.
- **Stig 5, Samhæfing:** Tölfræðilegur strangleiki er innbyggður í tólin sjálf, mælaborð sýna hundraðshlutamörk og stýribönd sjálfgefið, og skipulagsheildin getur sýnt að tiltekin fyrri ákvörðun var leiðrétt því tölfræðilega barnaleg lesning var gripin áður en hún mótaði stefnu.

## Hugmyndir til umræðu

1. Hverjar núverandi mælaborðsfyrirsagna okkar myndu líta öðruvísi út ef við skiptum meðaltali út fyrir miðgildi?
2. Höfum við nokkurn tímann breytt ákvörðun því hundraðshluti reyndist byggður á langtum minna úrtaki en við gerðum ráð fyrir?
3. Hvaða nýlega „við bættum þennan mælikvarða“ sögu ættum við að endurskoða vegna aftursnúnings til meðaltals?
4. Hvar gætu tveir mælikvarða okkar verið fylgnir gegnum falda þriðju orsök frekar en að annar knýi hinn?
5. Sýna mikilvægustu grafin okkar eðlilegt sveiflusvið, eða aðeins eina þróunarlínu?

## Helstu atriði til að muna

- Kjóstu **miðgildi og hundraðshlutamörk** fram yfir meðaltöl fyrir skekkta, tímabundna verkfræðimælikvarða.
- Meðhöndlaðu **hundraðshluta úr litlu úrtaki** sem hávaðasaman, og segðu það skýrt frekar en að bregðast við honum sem stöðugri þróun.
- Gættu að **aftursnúningi til meðaltals** áður en þú þakkar íhlutun fyrir framför sem fylgdi óvenju slæmri lesningu.
- **Fylgni er ekki orsakasamband**; leitaðu virkt að truflunarbreytum áður en orsakafullyrðing er sett fram.
- Notaðu **stýririt með raunverulegu sögulegu grunngildi**, ekki staka fyrir-og-eftir mynd, til að greina raunverulega breytingu frá venjulegum hávaða.

## Heimildir og frekara lesefni

- *The Signal and the Noise*, eftir Nate Silver (að greina raunverulegt merki frá hávaða í ófullkomnum gögnum).
- *How to Measure Anything*, eftir Douglas W. Hubbard (tölfræðileg rökhugsun fyrir mælingar í skipulagsheildum).
- *Understanding Variation: The Key to Managing Chaos*, eftir Donald J. Wheeler (stýririt og greinarmunurinn á sameiginlegum orsakasveiflum og sérstökum orsakasveiflum).
- *Thinking, Fast and Slow*, eftir Daniel Kahneman (vitræn hlutdrægni þar á meðal aftursnúningur til meðaltals og blekking orsakafrásagnar).
- *The Visual Display of Quantitative Information*, eftir Edward R. Tufte (heiðarleg, heilsteypt framsetning magnbundinna gagna).
