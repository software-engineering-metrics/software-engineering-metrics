# 2.6 Ferlitími og þættir hans

## Yfirlit og tilgangur

**Ferlitími** er innri sundurliðun flæðistíma breytingar (viðfangsefni 2.4) í verkfræðistig hennar: kóðunartíma, yfirferðartíma, prófunartíma og afhendingartíma, stundum skipt frekar í upptökutíma (hve lengi breyting bíður áður en nokkur byrjar að vinna í henni) og virkan tíma (hve langan tíma hún tekur þegar einhver gerir það). Þar sem flæðistími gefur þér eina tölu um hve lengi breyting tekur frá enda til enda gegnum allan virðisstrauminn, segir [ferlitími](https://en.wikipedia.org/wiki/Cycle_time) þér hvert sá tími fer í raun þegar hann nær verkfræði, sem er greiningarlagið sem viðfangsefni 2.4 lofaði að sé undir eigin samantektartölu.

Þessi greinarmunur skiptir máli því „leiðartími er of langur“ er ekki framkvæmanlegt eitt og sér. Teymi þar sem leiðartími ræðst af kóðunartíma þarfnast annarrar íhlutunar en teymi þar sem leiðartími ræðst af þriggja daga yfirferðarröð, sem þarfnast enn annarrar íhlutunar en teymi sem tapar mestum tíma sínum á óstöðugu, hægu prófasafni. Án sundurliðunar ferlitíma hafa teymi tilhneigingu til að giska á flöskuhálsinn, og ágiskunin er röng nógu oft til að það að laga rangt stig sóar raunverulegri fyrirhöfn meðan raunverulega skorðan er óbreytt.

Fyrir stór teymi er sundurliðun ferlitíma það sem breytir afturför leiðartíma í allri skipulagsheildinni úr ráðgátu í sértækt, viðráðanlegt vandamál. Þegar tugir teyma deila sameiginlegum innviðum getur sameiginlegur yfirferðarflöskuháls eða sameiginleg hæg CI-leiðsla dregið leiðartíma hvers teymis niður eins, og aðeins þvert-teymis samanburður ferlitíma afhjúpar þá sameiginlegu rót, frekar en að hvert teymi giski sjálfstætt á eigin staðbundna skýringu.

## Lykilmeginreglur

- **Ferlitími útskýrir leiðartíma; hann kemur ekki í stað hans.** Skýrðu frá báðum saman, með ferlitíma sem greiningu og leiðartíma sem samantekt.
- **Biðtími ræður yfirleitt yfir virkum tíma.** Mest töf í hugbúnaðarafhendingu kemur frá vinnu sem situr aðgerðalaus í biðröð, ekki virkri fyrirhöfn (viðfangsefni 2.5 fjallar um þetta beint gegnum flæðinýtni).
- **Sundurliðaðu eftir stigi áður en þú leggur til lausn.** Lausn beint að röngu stigi sóar fyrirhöfn og getur dregið kjark úr teymi sem er beðið um að „vinna hraðar“ þegar raunverulegur flöskuháls var annars staðar.
- **Sameiginlegur flöskuháls yfir mörg teymi er vettvangsfjárfestingartækifæri,** ekki bara röð einstakra teymisvandamála.
- **Ferlitímagögn eru útsett fyrir sömu leikáhættu og flæðistími** (viðfangsefni 2.4): gættu að stigamörkum sem færast hljóðlega til að flatta tölu.

## Ráðleggingar

### Tækjavæddu sérhver stigamörk skýrt

Brjóttu ferð breytingar niður í nefnd stig með skýrum, tækjavæðanlegum mörkum: kóðun (fyrsta innsending til sameiningarbeiðni opnuð), upptaka (sameiningarbeiðni opnuð til fyrstu yfirferðar), yfirferð (fyrsta yfirferð til samþykkis) og afhending (samþykki til framleiðslu). Fangaðu tímastimpla fyrir hverja færslu sjálfvirkt úr útgáfustýringar- og CI/CD-atburðum, ekki úr sjálfskýrðri stigarakningu, með sömu tækjavæðing-fram-yfir-sjálfsskýrslu meginreglu og úr viðfangsefni 1.5.

### Aðgreindu biðtíma frá virkum tíma innan hvers stigs

Innan yfirferðar, til dæmis, aðgreindu tímann sem sameiningarbeiðni situr ósnert og bíður þess að yfirferðaraðili byrji (biðtími) frá tímanum sem virkt yfirferðarsamtal tekur þegar það hefst (virkur tími). Þessi greinarmunur leiðir yfirleitt í ljós að ráðandi kostnaðurinn er biðröðun, ekki fyrirhöfn, sem bendir í átt að allt annarri lausn (meiri yfirferðargetu, betri tilkynningar, minni sameiningarbeiðnir til yfirferðar) en lausn sem miðar að því að gera yfirferðarsamtölin sjálf hraðari.

### Leitaðu að sameiginlegum flöskuhálsi áður en þú greinir teymi fyrir teymi

Þegar mörg teymi sýna sama stig sem ráðandi töf sína, hæga sameiginlega CI-leiðslu, ofhlaðinn sameiginlegan yfirferðarhóp, sjaldgæfa sameiginlega útgáfulest, er sú sameiginlega orsök vettvangsstigs fjárfestingartækifæri, ekki röð ótengdra staðbundinna vandamála. Safnaðu ferlitímagögnum yfir teymi sérstaklega til að leita að þessu mynstri áður en þú gerir ráð fyrir að flöskuháls hvers teymis sé einstakur fyrir það teymi.

### Notaðu ferlitíma til að setja raunhæf, stigssértæk umbótamörk

Frekar en eitt „dragðu úr leiðartíma um 20%“ mark, sem gefur teymi enga leiðsögn um hvar á að einbeita sér, notaðu sundurliðun ferlitíma til að setja stigssértækt mark: „dragðu úr miðgildisbiðtíma yfirferðar úr tveimur dögum í fjórar klukkustundir“. Sértækt, stigsmiðað markmið er bæði auðveldara fyrir teymi að bregðast við og auðveldara að staðfesta að hafi náðst með raunverulegri ferlisbreytingu frekar en ótengdri breytingu annars staðar.

### Gættu að leik með stigamörk

Rétt eins og upphafs- og endapunktar flæðistíma geta rekið (viðfangsefni 2.4), geta einstök stigamörk ferlitíma færst á þann hátt að þau flatti tölu tiltekins stigs án nokkurrar raunverulegrar umbótar, til dæmis að merkja yfirferð „hafin“ um leið og yfirferðaraðili er úthlutaður frekar en þegar hann byrjar í raun að lesa breytinguna. Endurskoðaðu reglulega tækjavæðingu stigamarka gegn skjalfestri skilgreiningu hennar.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Grófkorna ferlitími (tvö eða þrjú stig) | Einfalt að tækjavæða og útskýra | Getur ekki bent nógu nákvæmlega á raunverulegan flöskuháls til að bregðast við |
| Fínkorna ferlitími (mörg stig, skipting biðar og virks tíma) | Nákvæm greining, framkvæmanleg stigssértæk mörk | Meiri tækjavæðingarfyrirhöfn; fleiri tölur til að viðhalda og útskýra |
| Yfirferð ferlitíma teymi fyrir teymi | Sniðin að raunverulegu vinnuflæði hvers teymis | Getur misst af sameiginlegum, þvert-teymis flöskuhálsi sem felur sig bak við svipaðar staðbundnar tölur |
| Samantekin yfirferð ferlitíma yfir teymi | Afhjúpar sameiginlega flöskuhálsa á vettvangsstigi | Krefst staðlaðra stigaskilgreininga yfir teymi til að vera marktæk |

Aðalspennan er **greiningarnákvæmni á móti tækjavæðingarkostnaði**. Fínkornari rakning ferlitíma gefur framkvæmanlegri greiningu en kostar meira að smíða og viðhalda, og bætir við fleiri tölum sem teymi þarf að skilja og treysta. Leystu spennuna með því að byrja grófkorna (kóðun, yfirferð, afhending) og bæta við fínni skiptingum, bið á móti virkum tíma innan tiltekins stigs, aðeins þegar það stig er staðfest sem raunverulegur, endurtekinn flöskuháls sem vert er aukinnar tækjavæðingarfjárfestingar.

## Spurningar til að ræða með teyminu

1. **Ef leiðartími færi aftur á bak í dag, gætum við sagt innan klukkustundar hvaða tiltekna stig bar ábyrgð, með gögnum frekar en ágiskun?** Þetta er kjarnapróf á hvort ferlitímatækjavæðing ykkar þjóni í raun greiningartilgangi sínum. Ef heiðarlega svarið er nei er það bil vert að loka áður en næsta afturför gerist.

2. **Innan ráðandi flöskuhálsstigs okkar, hve mikið af töfinni er biðtími á móti virkum tíma?** Flest teymi gera ráð fyrir að virk fyrirhöfn sé skorðan áður en þau athuga, þegar biðröðun er yfirleitt stærri kostnaðurinn. Dragið fram raunverulega skiptingu fyrir hægasta stig ykkar og sjáið hvort forsendan stenst.

3. **Deila mörg teymi sama ráðandi flöskuhálsstigi, sem bendir til vettvangsstigslausnar frekar en teymisstigs?** Safnið ferlitímagögnum ykkar yfir teymi og leitið skýrt að þessu mynstri áður en þið gerið ráð fyrir að hægagangur hvers teymis sé staðbundið valdinn.

4. **Höfum við sett stigssértæk umbótamörk, eða aðeins eitt heildarmark fyrir leiðartíma án leiðsagnar um hvar á að einbeita sér?** Óljóst mark lætur teymi giska á hvar á að fjárfesta fyrirhöfn; stigssértækt gerir það ekki. Athugið núverandi markmið ykkar gegn þessum greinarmun.

5. **Hafa einhver stigamörk ferlitíma í tækjavæðingu okkar rekið frá skjalfestri skilgreiningu sinni yfir tíma?** Stigamörk eru útsett fyrir sama skilgreiningarreki og flæðistími sjálfur (viðfangsefni 2.4). Endurskoðið úrtak nýlegra stigafærsluatburða gegn skriflegu skilgreiningunni.

6. **Hvernig birtist yfirferðarþung menning á móti traustsþungri menningu ólíkt í ferlitímagögnum okkar?** Teymi með mjög ítarlega, fjölumferða yfirferð mun sýna lengri yfirferðarstigstíma en teymi sem treystir sameiningum með einu samþykki; ræðið hvort núverandi jafnvægi ykkar endurspeglar vísvitandi val eða órannsakað sjálfgefið.

## Geirasjónarhorn

**Sprotafyrirtæki.** Ferlitími ræðst yfirleitt af kóðunartíma frekar en yfirferðar- eða afhendingarstigum, einfaldlega því ferli er í lágmarki. Þegar teymið vex umfram handfylli verkfræðinga, byrjaðu að fylgjast með biðtíma yfirferðar sérstaklega, því það er yfirleitt fyrsta stigið sem hægir á sér þegar vinna fleira fólks þarf að fara gegnum færri tiltæka yfirferðaraðila.

**Lítil fyrirtæki.** Grunngreiningar útgáfustýringarvettvangs sýna yfirleitt nóg stigsstigstímasetningu (tími til fyrstu yfirferðar, tími til sameiningar) án sérsniðinnar tækjavæðingar. Einbeittu þér að yfirferðarstiginu fyrst, því það er algengasti snemmi flöskuhálsinn og auðveldast að laga með lítilli ferlisbreytingu eins og snúningi yfirferðaraðila.

**Stórfyrirtæki.** Sameiginlegir flöskuhálsar yfir tugi teyma eru algengir og hávirkir að finna: ein ofhlaðin sameiginleg CI-röð eða skyldubundið miðlægt yfirferðarskref getur hljóðlega skattlagt leiðartíma í allri skipulagsheildinni. Fjárfestu sérstaklega í þvert-teymis samantekt ferlitíma til að draga þessar sameiginlegu skorður fram frekar en að láta hvert teymi greina sjálfstætt.

**Hið opinbera.** Ferlitímagögn eru sterkt, áþreifanlegt tól til að réttlæta ferlanútímavæðingu fyrir efins hagsmunaaðilum, því „biðtími yfirferðar er að meðaltali fjórir dagar vegna eins flöskuhálsaðs samþykkishlutverks“ er langtum sannfærandi, sértækari rök fyrir fjárfestingu en óhlutstæð fullyrðing um að „ferli okkar sé hægt“.

## Dæmi

**Stórfyrirtæki.** Verkfræðiforysta skýjainnviðafyrirtækis tók eftir að leiðartími læddist upp hjá nær öllum teymum samtímis. Þvert-teymis samantekt ferlitíma leiddi í ljós að biðtími yfirferðar, ekki virkur yfirferðartími, var ráðandi og sameiginlega orsökin: lítið, miðlægt öryggisyfirferðarteymi hafði orðið flöskuháls þegar fjöldi teyma sem þörfnuðust samþykkis þess óx hraðar en teymið sjálft. Að stækka og þjálfa víðari hóp öryggisvottaðra yfirferðaraðila, frekar en að biðja einstök teymi um að kóða eða prófa einhvern veginn hraðar, leysti sameiginlega flöskuhálsinn og kom leiðartíma aftur niður yfir alla línuna innan eins ársfjórðungs.

**Hið opinbera.** Stafrænt þjónustuteymi ríkisstjórnar var undir þrýstingi að draga úr leiðartíma, og brást í fyrstu við með því að biðja verkfræðinga um að vinna hraðar, eðlilegt en að lokum gagnslaust eðlishvöt. Sundurliðun ferlitíma sýndi að virkur kóðunartími hafði varla breyst milli ára; nær öll afturförin kom frá vaxandi röð á skyldubundnu byggingaryfirferðarstigi sem var tekið upp átján mánuðum fyrr sem reglufylgniráðstöfun. Teymið endurhannaði þá yfirferð í léttara, áhættuflokkað ferli fyrir áhættulitlar breytingar, sem skar biðtíma yfirferðar verulega niður meðan full yfirferðarstrangleiki var varðveittur fyrir raunverulega áhættumiklar breytingar.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af sundurliðun ferlitíma er markviss, árangursrík fjárfesting: skipulagsheild sem veit nákvæmlega hvaða stig er flöskuhálsinn getur lagað það tiltekna stig frekar en að dreifa fyrirhöfn þunnt yfir allt ferli í von um að eitthvað hjálpi. Öryggisyfirferðardæmið hér að ofan er dæmigert: nákvæmlega miðuð lausn, að stækka eina tiltekna flöskuhálsaða auðlind, leysti skipulagsheildarvandamál langtum ódýrar en víð, ómarkviss „flýttu afhendingu“ átaksverkefni hefði gert.

Heildareignarkostnaður er tækjavæðingarfyrirhöfnin til að fanga stigsstigstímastimpla áreiðanlega og áframhaldandi agi þess að endurskoða stigamörk reglulega fyrir rek. Sá kostnaður er þess virði því valkosturinn, að giska á flöskuhálsa og laga rangt stig, sóar langtum meiri verkfræðifyrirhöfn yfir tíma en tækjavæðingin sjálf kostar.

## Andmynstur og gildrur

- **Að bregðast við afturför leiðartíma án greiningar ferlitíma:** leiðir oft til þess að rangt stig er lagað.
- **Að gera ráð fyrir að virk fyrirhöfn, ekki biðtími, sé ráðandi kostnaður:** yfirleitt rangt; biðröðun ræður í flestum raunverulegum afhendingarleiðslum (viðfangsefni 2.5).
- **Að missa af sameiginlegum, þvert-teymis flöskuhálsi með því að yfirfara ferlitíma aðeins teymi fyrir teymi:** skilur eftir óuppgötvaða hávirka vettvangslausn.
- **Að setja óljóst heildarmark fyrir leiðartíma án stigssértækrar leiðsagnar:** lætur teymi giska á hvar á að einbeita fyrirhöfn.
- **Skilgreiningarrek á stigamörkum:** flattar tölu tiltekins stigs án raunverulegrar umbótar.
- **Að tækjavæða öll möguleg fínkorna stig áður en staðfest er að eitthvert þeirra sé raunverulegur flöskuháls:** sóar tækjavæðingarfyrirhöfn á smáatriði sem upplýsa enn ekki ákvörðun.

## Þroskalíkan

- **Stig 1, Upphaf:** Ferlitími er alls ekki sundurliðaður; teymi giska á flöskuhálsa þegar leiðartími fer aftur á bak.
- **Stig 2, Þróun:** Sum teymi rekja grófkorna stigstímasetningu óformlega, en engin samkvæm tækjavæðing eða þvert-teymis samanburður er til.
- **Stig 3, Stöðlun:** Stigamörk eru tækjavædd samkvæmt í allri skipulagsheildinni, með biðtíma aðgreindan frá virkum tíma á ráðandi flöskuhálsstigum.
- **Stig 4, Stjórnun:** Þvert-teymis samantekt ferlitíma dregur virkt fram sameiginlega flöskuhálsa; stigssértæk umbótamörk koma í stað óljósra heildarmarkmiða um leiðartíma.
- **Stig 5, Samhæfing:** Ferlitímagögn knýja beint forgangsröðun vettvangsfjárfestinga, og skipulagsheildin getur bent á tilteknar, markvissar lagfæringar, stækkaðan yfirferðarhóp, hraðari sameiginlega leiðslu, sem bættu leiðartíma mælanlega yfir mörg teymi í einu.

## Hugmyndir til umræðu

1. Hvert er núverandi ráðandi flöskuhálsstig okkar, og hve viss erum við um það svar?
2. Hve mikið af tíma þess flöskuhálsstigs er biðtími á móti virkum tíma?
3. Deila einhver teymi okkar sama flöskuhálsi, sem bendir til vettvangsstigslausnar?
4. Hvenær settum við síðast stigssértækt, frekar en heildar, umbótamark fyrir afhendingu?
5. Hafa stigamörk í tólum okkar nokkurn tímann breyst án skjölunar?

## Helstu atriði til að muna

- Ferlitími **sundurliðar flæðistíma** í verkfræðistig, kóðun, yfirferð, prófun, afhendingu, og er greiningarlagið undir þeirri samantektartölu.
- Aðgreindu **biðtíma frá virkum tíma** innan hvers stigs; biðröðun ræður yfirleitt yfir virkri fyrirhöfn (viðfangsefni 2.5).
- Leitaðu að **sameiginlegum flöskuhálsum yfir teymi** áður en þú gerir ráð fyrir að hægagangur sé teymissértækur; sameiginleg orsök er oft vettvangsfjárfestingartækifæri.
- Settu **stigssértæk umbótamörk**, ekki óljós heildarmarkmið, svo teymi viti nákvæmlega hvar á að einbeita sér.
- Stigamörk eru útsett fyrir sömu **skilgreiningarrekshættu** og flæðistími sjálfur; endurskoðaðu þau reglulega.
- Viðfangsefni 2.7 gefur undirliggjandi stærðfræði, lögmál Littles, um hvers vegna vinna í vinnslu og ferlitími hreyfast saman.

## Heimildir og frekara lesefni

- *The Principles of Product Development Flow*, eftir Donald G. Reinertsen (biðraðafræði og lotustærðarrökhugsun að baki greiningu ferlitíma).
- *Actionable Agile Metrics for Predictability*, eftir Daniel S. Vacanti (ferlitíma- og flæðibyggð mæling fyrir hugbúnaðarafhendingu).
- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (leiðartími og samband hans við afhendingarframmistöðu).
- *The Goal*, eftir Eliyahu M. Goldratt (skorðukenning, og meginreglan um að finna og laga raunverulega flöskuhálsinn frekar en að fínstilla alls staðar).
