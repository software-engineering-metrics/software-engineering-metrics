# 8.1 Að hanna mælaborð verkfræðimælikvarða

## Yfirlit og tilgangur

Sérhver mælikvarði sem þessi bók hefur náð yfir þarf að lokum að búa einhvers staðar þar sem raunverulegt fólk skoðar hann, og illa hannað [mælaborð](https://en.wikipedia.org/wiki/Dashboard_(business)) getur afturkallað vandvirka vinnu sérhvers fyrra viðfangsefnis: heiðarlegir, vel stýrðir, varnarmælikvarðaparaðir mælikvarðar settir fram óheiðarlega, ruglingslega eða fyrir röngum áheyrendum framleiða einmitt þann rugling og vantraust sem þessi bók hefur unnið að koma í veg fyrir. Þetta viðfangsefni snýst um sértæku handverk mælaborðshönnunar: að velja hvað á að sýna hverjum, sjónræna framsetningu heiðarlega, og skipuleggja allan gripinn svo hann sé í raun notaður til að taka ákvarðanir frekar en hunsaður eða, verra, mislesinn.

Meginaginn sem þetta viðfangsefni mælir með er áheyrendasértæk hönnun. Mælaborð byggt fyrir daglegan standup einstaks verkfræðiteymis þarfnast annarra mælikvarða, annarrar kornastærðar og annarrar sjónrænnar þéttleika en eitt byggt fyrir ársfjórðungslega framkvæmdastjórnaryfirferð, og eitt, allt-fyrir-alla mælaborð sem reynir að þjóna báðum áheyrendahópum þjónar yfirleitt hvorugum vel. Þetta viðfangsefni meðhöndlar mælaborðshönnun sem sannan hönnunaraga, ekki bara skýrslugjafar eftiráhugsun, og sækir í tölfræðiheiðarleikameginreglur viðfangsefnis 1.6 í gegnum allt: sérhvert sjónrænt framsetningarval hjálpar eða hindrar getu lesanda til að draga rétta ályktun af gögnunum.

Fyrir stór teymi er mælaborðshönnun þar sem hinir mörgu einstöku mælikvarðavarnir þessarar bókar annaðhvort lifa inn í framkvæmd eða týnast. Stórfyrirtæki sem reka tugi teymismælaborða þurfa samræmi án stífleika, sameiginlega staðla sem leyfa samt sértækum þörfum hvers áheyrendahóps að vera mætt; opinberar skipulagsheildir, þar sem mælaborð kunna að sæta almenningsrýni eða þjóna sem grunnur eftirlitsskýrslugjafar, þurfa heiðarlegu framsetningarstaðlana sem þetta viðfangsefni mælir með beitta með sérstökum strangleika, því villandi graf uppgötvað af ytri yfirferðaraðila skaðar trúverðugleika langt umfram tiltekna mælikvarðann sem um ræðir.

## Lykilmeginreglur

- **Hannaðu fyrir tiltekna áheyrendur og ákvörðun, ekki fyrir yfirgripsmikla þekju.** Mælaborð sem reynir að þjóna öllum þjónar yfirleitt engum vel.
- **Sérhvert sjónrænt framsetningarval hjálpar eða villir virkt.** Beittu tölfræðiheiðarleika viðfangsefnis 1.6 strangt: raunveruleg þróun, heiðarlegir ásar, sýnileg óvissa.
- **Færri, vel valdir mælikvarðar slá yfirgripsmikla þekju.** Stöðug meginregla þessarar bókar, frá viðfangsefni 1.1 og áfram, á beint við mælaborðshönnun.
- **Mælaborð þarfnast eiganda og yfirferðartíðni**, nákvæmlega eins og hver annar stýrður mælikvarði (viðfangsefni 1.4), annars hrörnar það í ósinnt, vantreyst grip.
- **Varnarmælikvarðapör tilheyra sömu sýn.** Aðgreindu aldrei hvatabundinn mælikvarða frá varnarmælikvarða sínum yfir á ólík mælaborð eða ólíka hluta.

## Ráðleggingar

### Hannaðu aðgreind mælaborð fyrir aðgreinda áheyrendur og ákvarðanir

Byggðu aðskildar, tilgangssértækar sýnir frekar en eitt mælaborð sem þjónar hverjum áheyrendahópi: teymisstigs rekstrarmælaborð (daglega eða vikulega tíðni, ítarlegir afhendingar- og gæðamælikvarðar fyrir eigin notkun teymisins), forystumælaborð (mánaðarlega eða ársfjórðungslega tíðni, niðurstöðuvegið samkvæmt viðfangsefni 7.4, færri mælikvarðar, meira samhengi) og, þar sem það á við, ytri-snúið mælaborð (fyrir viðskiptavini, eftirlitsaðila eða almenning, vandlega stýrt samkvæmt afleiðingakvarðaðum strangleika viðfangsefnis 1.4). Hvert þjónar ólíkri ákvörðun og ætti að vera hannað fyrir þá ákvörðun sérstaklega, ekki sem síuð sýn á eitt aðalmælaborð.

### Beittu heiðarlegum framsetningarstöðlum samkvæmt

Fylgdu tölfræðiheiðarleikameginreglum viðfangsefnis 1.6 sem hörðum hönnunarkröfum, ekki valkvæðri fágun: byrjaðu gildisása á núlli nema skjalfest, sýnileg undantekning sé tilgreind, sýndu þróun yfir tíma frekar en staka mynd, notaðu miðgildi og hundraðshlutamörk frekar en meðaltöl fyrir skekkt gögn, og skýrðu samhengi (afhendingar, atvik, skipulagsbreytingar) svo lesandi geti greint raunverulega breytingu frá hávaða. Forðastu sértæku grafamisfærslurnar sem viðfangsefni 1.6 nefndi beint: tvöfalda ása sem gefa í skyn falska fylgni, handvalin dagsetningarbil og þrívíddaráhrif sem brengla hlutföll.

### Aðgreindu aldrei mælikvarða frá paraða varnarmælikvarða sínum yfir ólíkar sýnir

Samkvæmt varnarmælikvarðapörunarmeginreglu viðfangsefnis 1.2 sem harðri mælaborðshönnunarreglu: afhendingartíðni og breytingabilunarhlutfall (viðfangsefni 2.10) tilheyra sömu sýn, alltaf sýnileg saman, aldrei skipt yfir „hraða“-mælaborð og sérstakt „gæða“-mælaborð sem ólíkir áheyrendur gætu skoðað í einangrun. Þetta er ekki minni útlitsósk; að aðgreina mælikvarða frá varnarmælikvarða sínum á ólíkum mælaborðum endurskapar nákvæmlega hvataútsetningaráhættuna sem viðfangsefni 1.2 varar við, jafnvel þótt báðar tölur séu tæknilega raktar einhvers staðar.

### Úthlutaðu nafngreindum eiganda og yfirferðartíðni á hvert mælaborð

Beittu stjórnarháttaaga viðfangsefnis 1.4 beint á mælaborðsgripinn sjálfan, ekki bara einstaka mælikvarða sem það sýnir: nefndu eiganda ábyrgan fyrir áframhaldandi nákvæmni og mikilvægi mælaborðsins, og settu yfirferðartíðni þar sem mælikvörðum er bætt við, lagðir niður eða endurskoðaðir. Mælaborð án eiganda hrörnar nákvæmlega eins og eigandalaus mælikvarði (viðfangsefni 1.4), safnar úreltum flísum sem enginn hefur umboð eða ábyrgð til að klippa.

### Byggðu inn skýra, sýnilega yfirlýsingu um hvað mælaborðið er ekki til

Samkvæmt greining-á-móti-mati greinarmun viðfangsefnis 1.1, lýstu beint og sýnilega á hvaða mælaborði sem er þar sem mælikvarðar gætu trúlega verið misnotaðir til einstaklingsmats, nákvæmlega hvað mælaborðið er ekki til: „þessir mælikvarðar lýsa heilsu teymis og kerfis; þeir eru ekki notaðir í einstaklingsframmistöðuyfirferðum“. Þessi skýra yfirlýsing, beitt einkum á hvaða mælaborð sem inniheldur virknigögn (viðfangsefni 3.4) eða bakvaktaálagsgögn (viðfangsefni 6.3), er lítið hönnunarval með ósamhlutfallsleg áhrif á að koma í veg fyrir einmitt matsrekið sem þessi bók varar við í gegnum allt.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Eitt, yfirgripsmikið mælaborð fyrir alla áheyrendur | Einfalt að smíða og viðhalda einum grip | Þjónar engum tilteknum áheyrendum vel; yfirþyrmandi fyrir suma, ónógt fyrir aðra |
| Áheyrendasértæk mælaborð | Hvert þjónar raunverulegri ákvörðun sinni vel | Fleiri gripir til að smíða, viðhalda og halda samkvæmum |
| Yfirgripsmikil mælikvarðaþekja á hverri sýn | Ekkert gleymist | Mælaborðsþreyta; grefur mælikvarðana sem skipta raunverulega máli fyrir ákvörðun þess áheyrendahóps |
| Lágmarks, ákvörðunardrifið mælikvarðaval á hvert mælaborð | Einbeitt, framkvæmanlegt, auðveldara að treysta | Krefst vísvitandi úrvalsaga og hættir á að sleppa einhverju viðeigandi |

Aðalspennan er **yfirgripsmikil þekja á móti einbeitingu**, grundvallarspenna viðfangsefnis 1.1 beitt sérstaklega á mælaborðshönnun. Yfirgripsmikið mælaborð finnst öruggara, ekkert er skilið eftir úti, en það þjónar raunverulegum áheyrendum sínum yfirleitt verr en einbeitt sem byggt er sérstaklega kringum ákvarðanirnar sem þeir áheyrendur þurfa að taka. Leystu spennuna með því að byggja mörg, tilgangssértæk mælaborð frekar en eitt yfirgripsmikið, samþykkja hóflegan viðbótarviðhaldskostnað nokkurra einbeittra gripa í skiptum fyrir að hvert sé í raun gagnlegt ætluðum áheyrendum sínum.

## Spurningar til að ræða með teyminu

1. **Reynir núverandi mælaborð okkar að þjóna mörgum áheyrendum í einu, og ef svo er, hverjum þjónar það í raun vel?** Gangið í gegnum fyrirliggjandi mælaborð ykkar og greinið raunverulega aðaláheyrendur þess á móti ætluðum áheyrendum; misræmi hér er algengt og vert að nefna beint.

2. **Aðgreinir eitthvert mælaborða okkar hvatabundinn mælikvarða frá paraða varnarmælikvarða sínum á ólíkar sýnir?** Endurskoðið núverandi mælaborð ykkar sérstaklega fyrir þetta mynstur, athugið hvern DORA-mælikvarða 2. hluta og pörun þeirra sem upphafspunkt.

3. **Myndu framsetningar mælaborðs okkar standast heiðarlega framsetningarstaðla viðfangsefnis 1.6: núllbundnir ásar, þróun fram yfir mynd, miðgildi fram yfir meðaltöl fyrir skekkt gögn?** Yfirfarið raunveruleg núverandi graf ykkar gegn þessum gátlista beint.

4. **Hefur sérhvert mælaborð sem við viðhöldum nafngreindan eiganda og yfirferðartíðni, eða eru sum einfaldlega til án þess að nokkur beri ábyrgð á að halda þeim nákvæmum og viðeigandi?** Ef eitthvert mælaborð skortir nafngreindan eiganda er það bil vert að loka tafarlaust, því eigandalaust mælaborð hrörnar nákvæmlega eins og eigandalaus mælikvarði.

5. **Lýsir eitthvert mælaborð þar sem mælikvarðar gætu trúlega verið misnotaðir til einstaklingsmats skýrt hvað það er ekki til?** Athugið hvaða mælaborð sem inniheldur virknigögn eða bakvaktaálagsgögn sérstaklega fyrir þessa skýru yfirlýsingu.

6. **Ef við endurhönnuðum mælaborð okkar frá grunni í dag, áheyrendur fyrir áheyrendur, byrjandi á ákvörðuninni sem hver áheyrendahópur þarf að taka, hve ólík myndi niðurstaðan líta út frá því sem er til núna?** Þessi hugsunartilraun leiðir oft í ljós hve mikið af mælaborðsbyggingu hefur safnast af tregðu frekar en vísvitandi hönnun.

## Geirasjónarhorn

**Sprotafyrirtæki.** Eitt, einfalt mælaborð er yfirleitt viðeigandi í þessum mæli, því allt teymið og forysta eru oft sami litli hópur fólks sem tekur að mestu sömu ákvarðanir. Einbeittu þér að heiðarlegu framsetningarstöðlunum og skýru ekki-til-mats yfirlýsingunni jafnvel í litlum mæli, því þessar venjur eru langtum auðveldari að koma á snemma en að bæta við síðar.

**Lítil fyrirtæki.** Flest tilbúin tól veita hæfileg sjálfgefin mælaborð; megin agi er að velja þau niður í fáu mælikvarðana sem upplýsa raunverulega ákvörðun fyrir þitt sértæka fyrirtæki, frekar en að sýna sérhvern mælikvarða sem tólið reiknar sjálfgefið.

**Stórfyrirtæki.** Samræmi án stífleika er miðlæg áskorun hér: tugir teymismælaborða þurfa nægan sameiginlegan staðal (heiðarlegar framsetningarreglur, varnarmælikvarðapörun, eignaraga) til að vera áreiðanleg og sambærileg, meðan þau leyfa samt sértækum rekstrarþörfum hvers teymis að móta eigin sýn. Fjárfestu í sameiginlegum mælaborðshönnunarstaðli, framfylgt gegnum stjórnarhætti (viðfangsefni 1.4), frekar en annaðhvort stífu, allt-fyrir-alla sniðmáti eða alveg óskipulögðum, ósamkvæmum staðbundnum mælaborðum.

**Hið opinbera.** Mælaborð sem snúa að almenningi eða eftirliti þurfa sérstakan strangleika í heiðarlegri framsetningu og skýrri stjórnarháttaskjölun, því villandi graf uppgötvað af ytri yfirferðaraðila skaðar stofnanatrúverðugleika langt umfram tiltekna mælikvarðann sem um ræðir. Beittu hæsta staðli ráðlegginga þessa viðfangsefnis á hvaða ytri-snúið mælaborð sem er sérstaklega.

## Dæmi

**Stórfyrirtæki.** Flutningatæknifyrirtæki hafði árum saman viðhaldið einu „verkfræðiheilsu“ mælaborði skoðuðu bæði af einstökum verkfræðiteymum og framkvæmdastjórn, með yfir fjörutíu flísar sem náðu yfir allt frá innsendingatalningum einstaklinga til ársfjórðungslegra rekstrarniðurstaðna. Hvorugir áheyrendur fundu það sannarlega gagnlegt: verkfræðingar hunsuðu rekstrarniðurstöðuflísarnar sem óviðkomandi daglegri vinnu sinni, og stjórnendur voru yfirþyrmdir af ítarlegum afhendingarmælikvörðum án samhengis til túlkunar. Að skipta því í einbeitt, sex flísa teymisrekstrarmælaborð og aðskilið, átta flísa forystumælaborð, bæði eftir varnarmælikvarðapörun og heiðarlegum framsetningarstöðlum þessa viðfangsefnis, framleiddi mælanlega meiri þátttöku og, mikilvægt, stjórnendur tilkynntu í fyrsta sinn að geta útskýrt hvað tölurnar þýddu þegar eigin forysta þeirra spurði.

**Hið opinbera.** Opinbert stafrænt þjónustumælaborð ríkisstjórnar hafði verið gagnrýnt opinberlega fyrir graf sem sýndi „meðaltal“ vinnslutíma með styttum y-ás sem sjónrænt ýkti hóflega bót, brot á heiðarlegu framsetningarstöðlum viðfangsefnis 1.6 sem ytri tæknifréttamaður hafði gripið og skrifað um. Endurhannað mælaborð stofnunarinnar, byggt skýrt gegn stöðlum þessa viðfangsefnis, núllbundnir ásar, miðgildi frekar en meðaltal fyrir hægri-skekkt vinnslutímagögnin og skýrt merkt samhengi fyrir hverja áberandi breytingu, var sérstaklega hrósað í eftirfylgnigrein sem fyrirmynd gagnsærrar framsetningar gagna hins opinbera, sem lagaði beint trúverðugleika sem fyrra, villandi grafið hafði skaðað.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun vísvitandi, áheyrendasértækra, heiðarlega hannaðra mælaborða er raunveruleg notkun og raunverulegt traust: flutningafyrirtækisdæmið hér að ofan sýnir beinan kostnað illa hannaðs stakmælaborðs, litla þátttöku frá báðum ætluðum áheyrendum, og beinan ávinning endurhönnunarinnar, mælanlega meiri þátttöku þegar hver áheyrendahópur fékk sýn sem sannarlega var byggð fyrir eigin ákvarðanir.

Heildareignarkostnaður er hönnunar- og viðhaldsfyrirhöfn margra, tilgangssértækra mælaborða frekar en eins yfirgripsmikils grips, auk áframhaldandi stjórnarháttaagans (nafngreint eignarhald, yfirferðartíðni) sem þetta viðfangsefni mælir með. Sá kostnaður er hóflegur miðað við áhættuna af mælaborði sem fer ónotað, eða verra, einu sem villir áheyrendur sína virkt og skaðar trúverðugleika, eins og ríkisstjórnardæmið hér að ofan sýnir áþreifanlega.

## Andmynstur og gildrur

- **Eitt mælaborð sem reynir að þjóna hverjum áheyrendahópi:** þjónar yfirleitt engum vel.
- **Að aðgreina hvatabundinn mælikvarða frá varnarmælikvarða sínum yfir ólíkar sýnir:** endurskapar hvataútsetningaráhættuna sem viðfangsefni 1.2 varar við.
- **Óheiðarleg framsetningarval:** stuttir ásar, handvalin dagsetningarbil og tvöfaldir ásar villa allt lesendur, stundum með raunverulegum orðsporsafleiðingum.
- **Enginn nafngreindur eigandi eða yfirferðartíðni fyrir mælaborðið sjálft:** gripurinn hrörnar nákvæmlega eins og eigandalaus mælikvarði.
- **Engin skýr yfirlýsing um hvað mælaborð er ekki til:** býður matsrekið sem þessi bók varar við í gegnum allt.
- **Yfirgripsmikil flísaþekja fram yfir einbeitt, ákvörðunardrifið úrval:** framleiðir mælaborðsþreytu og grefur það sem skiptir í raun máli.

## Þroskalíkan

- **Stig 1, Upphaf:** Eitt, óúrvalið mælaborð, ef nokkuð, þjónar öllum áheyrendum illa, án heiðarlegs framsetningarstaðals eða varnarmælikvarðapörunar.
- **Stig 2, Þróun:** Einhverjar áheyrendasértækar sýnir eru til, en framsetningarstaðlar eru ósamkvæmir og eignarhald óljóst.
- **Stig 3, Stöðlun:** Áheyrendasértæk mælaborð með samkvæmum, heiðarlegum framsetningarstöðlum og varnarmælikvarðapörun eru komin á í allri skipulagsheildinni, hvert með nafngreindan eiganda.
- **Stig 4, Stjórnun:** Mælaborð eru yfirfarin á reglulegri tíðni, með skýrum ekki-til-mats yfirlýsingum þar sem við á, og úreltar flísar eru virkt klipptar.
- **Stig 5, Samhæfing:** Mælaborðshönnunarvenja skipulagsheildarinnar er treyst, vel stýrð geta, og skipulagsheildin getur bent á tiltekin tilvik þar sem heiðarleg, vel hönnuð mælaborð lögðu til eða byggðu traust hagsmunaaðila.

## Hugmyndir til umræðu

1. Hverjir eru raunverulegir aðaláheyrendur núverandi mælaborðs okkar, á móti ætluðum áheyrendum?
2. Aðgreinir eitthvert mælaborða okkar mælikvarða frá varnarmælikvarða sínum?
3. Myndu núverandi graf okkar standast heiðarlega framsetningarendurskoðun?
4. Hefur sérhvert mælaborð sem við viðhöldum skýrt nafngreindan, ábyrgan eiganda?
5. Hvernig myndi endurhönnun mælaborða okkar frá grunni, áheyrendur fyrst, líta út?

## Helstu atriði til að muna

- Hannaðu **áheyrendasértæk mælaborð** fyrir sértækar ákvarðanir, ekki eitt yfirgripsmikið grip sem reynir að þjóna öllum.
- Beittu **heiðarlegum framsetningarstöðlum** (viðfangsefni 1.6) sem hörðum kröfum: núllbundnir ásar, þróun fram yfir mynd, miðgildi fram yfir meðaltöl fyrir skekkt gögn.
- **Aðgreindu aldrei hvatabundinn mælikvarða frá varnarmælikvarða sínum** yfir ólíkar sýnir; haltu varnarmælikvarðapörum á sama mælaborði.
- Úthlutaðu **nafngreindum eiganda og yfirferðartíðni** á hvert mælaborð, nákvæmlega eins og viðfangsefni 1.4 krefst fyrir hvern stýrðan mælikvarða.
- Lýstu skýrt **hvað mælaborð er ekki til**, einkum þar sem virkni- eða rekstrarálagsgögn gætu verið misnotuð til einstaklingsmats.

## Heimildir og frekara lesefni

- *The Visual Display of Quantitative Information*, eftir Edward R. Tufte (grundvallarritið um heiðarlega, heilsteypta gagnaframsetningu).
- *Storytelling with Data*, eftir Cole Nussbaumer Knaflic (hagnýt mælaborðs- og grafahönnun fyrir viðskiptaáheyrendur).
- *Information Dashboard Design*, eftir Stephen Few (mælaborðssértækar hönnunarmeginreglur fyrir árangursríka, heiðarlega miðlun).
- *Accelerate: The Science of Lean Software and DevOps*, eftir Nicole Forsgren, Jez Humble og Gene Kim (mælikvarðapörunaraginn sem þetta viðfangsefni beitir beint á mælaborðsuppsetningu).
