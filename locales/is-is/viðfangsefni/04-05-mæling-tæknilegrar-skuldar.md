# 4.5 Mæling tæknilegrar skuldar

## Yfirlit og tilgangur

**[Tæknileg skuld](https://en.wikipedia.org/wiki/Technical_debt)**, myndlíking sem Ward Cunningham mótaði, lýsir uppsöfnuðum kostnaði fyrri flýtileiða, hentugra ákvarðana sem afhentu eitthvað fyrr en skildu kóðagrunninn eftir erfiðari að breyta síðar, á sama hátt og fjárhagsleg skuld lætur þig eyða núna á kostnað vaxta síðar. Sérhver kóðagrunnur ber einhverja tæknilega skuld, og það er ekki sjálfkrafa bilun; raunverulegt virði myndlíkingarinnar er að hún rammar skuld sem viðráðanlega málamiðlun frekar en annaðhvort skammarlegt leyndarmál eða óhjákvæmilega, varanlega byrði. Þetta viðfangsefni snýst um að gera þá málamiðlun sýnilega og viðráðanlega gegnum mælingu, frekar en að skilja hana eftir sem óljósa, stöðugt aftarlega-í-forgangsröð áhyggju sem hver verkfræðingur skynjar en enginn getur brugðist við með sönnunargögnum.

Viðfangsefnin sem komu á undan þessu, flækjustig (4.1), þekja (4.2), velta og heitreitar (4.3) og stöðugreining (4.4), draga hvert fram eina hlið tæknilegrar skuldar. Hlutverk þessa viðfangsefnis er samruni: að breyta þessum aðskildu merkjum, auk atriða sem birtast aldrei í nokkurri sjálfvirkri skönnun (óskjalfest byggingarleg flýtileið, vísvitandi frestaður flutningur), í einn, forgangsraðaðan, sýnilegan biðlista sem keppir sanngjarnt um fjárfestingu við eiginleikavinnu, frekar en að tapa þeirri samkeppni sjálfgefið einfaldlega því hann hefur engan mælikvarða fastan við sig og engan talsmann á skipulagsfundum.

Fyrir stór teymi magnast ómeðhöndluð tæknileg skuld á hátt sem er sannarlega hættulegur og auðvelt að vanmeta: sérhver ný flýtileið gerir næstu breytingu örlítið erfiðari, sem skapar þrýsting fyrir fleiri flýtileiðum, sem magnast enn frekar. Stórfyrirtæki og hið opinbera sem viðhalda kerfum yfir mörg ár eru sérstaklega útsett fyrir þessum magnandi áhrifum, og aðalráðlegging þessa viðfangsefnis, sýnilegur, magnbundinn, forgangsraðaður skuldabiðlisti, er vélbúnaðurinn sem lætur skipulagsheild raunverulega stýra málamiðluninni vísvitandi í stað þess að reka í kreppu.

## Lykilmeginreglur

- **Tæknileg skuld er vísvitandi myndlíking fyrir viðráðanlega málamiðlun, ekki skammarlegt leyndarmál.** Sum skuld, tekin á sig meðvitað, er skynsamleg viðskiptaákvörðun.
- **Ómæld skuld tapar forgangsröðunarsamkeppninni við eiginleikavinnu sjálfgefið,** ekki því hún skiptir minna máli heldur því hún hefur engan sýnilegan talsmann.
- **Magnbindu skuld í hugtökum sem ákvarðanatakar geta vegið: kostnaður við að laga á móti kostnaði við að bera hana.** Óljós fullyrðing um að „kóðinn sé sóðalegur“ keppir sjaldan vel við áþreifanlega eiginleikabeiðni.
- **Skuld magnast.** Sérhver ný flýtileið gerir framtíðarbreytingar lítillega erfiðari, og sú áhrif flýtir sér ef ómeðhöndluð.
- **Ekki ætti að greiða niður alla skuld.** Sumt er vert að bera endalaust ef kostnaðurinn við að laga það fer fram úr kostnaðinum við að lifa með því.

## Ráðleggingar

### Byggðu sýnilegan, einn tæknilegan skuldabiðlista

Sameinaðu merkin úr fyrri viðfangsefnum þessa hluta, flækjustigsfrávik, svæði með lágt stökkbrigðadrápshlutfall, heitreiti, óleystar stöðugreiningarniðurstöður, ásamt skuldaratriðum sem aðeins manneskja getur greint (byggingarleg flýtileið, frestuð háðaruppfærsla, óskjalfest krókaleið), í einn sýnilegan biðlista, rakinn með sama strangleika og sýnileika og eiginleikabiðlistinn þinn. Skuld sem býr aðeins í minni einstakra verkfræðinga eða í dreifðum kóðaathugasemdum er í reynd ekki til í forgangsröðunarskyni.

### Magnbindu kostnað hvers skuldaratriðis og burðarkostnað þess

Fyrir hvert atriði, áætlaðu tvær tölur: kostnað við að laga það (verkfræðitími, áhætta af lagfæringunni sjálfri) og kostnað við að bera það ólagað (hve miklu hægar gengur tengd vinna, hve mikla viðbótargallaáhættu það ber, hve mikið það hindrar aðra vinnu). Þessi rammi, fenginn beint úr eigin rökfræði fjárhagslegu skuldamyndlíkingarinnar, gefur ákvarðanatökum raunverulegan grunn til samanburðar við kostnað og væntanlegt virði eiginleikavinnu, frekar en óhlutstæða, ómagnbundna kvörtun.

### Forgangsraðaðu eftir áhrifum, ekki aldri eða háværasta talsmanni

Raðaðu skuldaratriðum eftir samsetningu burðarkostnaðar þeirra og hve oft kóðinn sem þau snerta er snertur (veltugögn viðfangsefnis 4.3 eru beint gagnleg hér): atriði í sjaldan breyttu horni kóðagrunnsins, hversu óþægilegt sem er, skiptir langtum minna máli en eitt sem situr beint í vegi virkustu þróunar þinnar. Stenstu að forgangsraða eftir því hvaða atriði hefur lengst verið á biðlistanum eða hvaða verkfræðingur talar fyrir því þrálátast, hvorugt fylgir áreiðanlega raunverulegum viðskiptaáhrifum.

### Úthlutaðu sérstakri, varinni getu til skuldarúrbóta

Skuldabiðlisti sem verður að keppa atriði fyrir atriði gegn sérhverri innkominni eiginleikabeiðni í hverri skipulagslotu hefur tilhneigingu til að tapa stöðugt, því eiginleikavinna hefur yfirleitt skýrari, tafarlausari viðskiptatalsmann. Úthlutaðu vernduðu hlutfalli verkfræðigetu, algengt mynstur er einhvers staðar milli 10% og 20%, sérstaklega til skuldarúrbóta, ákveðnu fyrirfram frekar en samið af nýju í hverjum spretti, svo skuldarniðurgreiðsla gerist sem sjálfsagður hlutur frekar en aðeins eftir kreppu.

### Samþykktu sumt sem varanlega skuld, og segðu það skýrt

Ekki á hvert atriði heima á virkri úrbótaáætlun. Þar sem kostnaður við að laga fer sannarlega fram úr kostnaði við að bera atriði endalaust, einkum fyrir kóða í stöðugu, sjaldan snertu, brátt útrunnu kerfi, skjalaðu þá ákvörðun skýrt og færðu atriðið í vísvitandi aftarlega-í-forgangsröð flokk frekar en að láta það sitja endalaust á virkum biðlista þar sem áframhaldandi nærvera þess felur hljóðlega í sér vinnu sem mun aldrei í raun eiga sér stað.

## Málamiðlanir: kostir og gallar

| Nálgun | Kostir | Gallar |
| --- | --- | --- |
| Engin formleg skuldarakning | Engin yfirbygging | Skuld tapar forgangsröðunarsamkeppni sjálfgefið; magnast ósýnilega |
| Óformleg, tilfallandi skuldavitund | Lítil yfirbygging, einhver sýnileiki | Ósamkvæm; veltur á minni og talsmennsku einstaklinga |
| Formlegur, magnbundinn skuldabiðlisti | Keppir sanngjarnt um fjárfestingu; gerir upplýstar málamiðlanir mögulegar | Krefst áframhaldandi viðhalds og magnbindingaraga |
| Vernduð, sérstök úrbótageta | Tryggir að niðurgreiðsla gerist samkvæmt, ekki bara viðbragðsbundið | Dregur úr getu tiltækri fyrir eiginleikavinnu til skamms tíma |

Aðalspennan er **tafarlaus afhendingarþrýstingur á móti langtímaviðhaldshæfni**. Eiginleikavinna hefur næstum alltaf skýrari, tafarlausari viðskiptatalsmann en skuldarúrbætur, sem skapar byggingarlegan þrýsting fyrir skuld að tapa hverri einstakri forgangsröðunarákvörðun jafnvel þegar samanlagður kostnaður hennar er hár. Leystu spennuna með því að fjarlægja skuldarúrbætur úr atriði-fyrir-atriði samkeppninni alveg gegnum varna, fyrirfram úthlutaða getu, svo málamiðlunin sé ákveðin vísvitandi og fyrirfram frekar en rædd aftur, og yfirleitt töpuð, í hverri einustu skipulagslotu.

## Spurningar til að ræða með teyminu

1. **Höfum við einn, sýnilegan tæknilegan skuldabiðlista, eða býr skuldavitund aðallega í höfðum einstakra verkfræðinga?** Ef heiðarlega svarið er það síðara er það stærsta einstaka bilið sem þetta viðfangsefni mælir með að loka fyrst.

2. **Fyrir helsta skuldaratriðið okkar, gætum við tilgreint kostnað við að laga það og kostnað við að bera það í hugtökum nógu sértækum til að bera sanngjarnt saman við eiginleikabeiðni?** Ef ekki, æfið þessa magnbindingu saman sem hópæfingu með raunverulegu, núverandi atriði.

3. **Hvaða hlutfall verkfræðigetu okkar fer í raun í skuldarúrbætur, og var það hlutfall ákveðið vísvitandi eða er það bara það sem lifir af eftir að eiginleikavinnu hefur verið úthlutað?** Lítið á raunverulega nýlega spretti ykkar og reiknið raunverulegu töluna frekar en að reiða sig á tilfinningu.

4. **Er skuldabiðlisti okkar forgangsraðaður eftir raunverulegum viðskiptaáhrifum, eða eftir því hvaða atriði hefur verið vakið máls á þrálátast eða setið þar lengst?** Víxlvísið núverandi forgangsröðun ykkar gegn veltugögnum (viðfangsefni 4.3) og sjáið hvort þetta tvennt fer saman.

5. **Hvaða skuldaratriði ættum við að samþykkja skýrt sem varanleg, frekar en að láta sitja endalaust á virkum biðlista?** Greinið að minnsta kosti eitt raunverulegt atriði þar sem kostnaður við að laga fer sannarlega fram úr kostnaði við að bera, og ræðið að færa það í skýrt aftarlega-í-forgangsröð stöðu.

6. **Hvernig hefur skuldabiðlisti okkar breyst síðasta ár, vaxið, minnkað eða staðið í stað, og passar sú þróun við innsæi okkar?** Raktu þetta yfir tíma frekar en að líta aðeins á staka mynd; þróunin er oft upplýsandi en alger stærð á nokkru gefnu augnabliki.

## Geirasjónarhorn

**Sprotafyrirtæki.** Vísvitandi, upplýst skuld er oft skynsamleg stefna á þessu stigi: að afhenda hratt til að staðfesta tilgátu, með skýra áætlun um að endurskoða tilteknar flýtileiðir ef varan sannar sig, er lögmæt málamiðlun, ekki bilun. Áhættan er að missa yfirsýn yfir hvaða flýtileiðir voru vísvitandi og afturkræfar á móti hverjar hafa hljóðlega orðið varanlegar, órannsakaðar skuldbindingar eftir því sem kóðagrunnurinn vex.

**Lítil fyrirtæki.** Einfaldur, sameiginlegur listi, jafnvel óformlegur, sem nefnir þekktar flýtileiðir þínar og grófan kostnað við að laga þær nægir yfirleitt í þessum mæli. Meginagi sem vert er að taka upp er að endurskoða þann lista reglulega frekar en að láta hann safnast hljóðlega og verða ósýnilegan gegnum kunnugleika.

**Stórfyrirtæki.** Vernduð, fyrirfram úthlutuð úrbótageta skiptir mestu hér, því atriði-fyrir-atriði forgangsröðunarsamkeppnin milli skuldar og eiginleikavinnu hyglar áreiðanlega eiginleikum yfir tugi teyma samtímis án byggingarlegs mótvægis. Staðlaðu skuldarmagnbindingu í allri skipulagsheildinni svo skuldaratriði megi bera sanngjarnt saman milli teyma fyrir fjárfestingarákvarðanir á safnstigi.

**Hið opinbera.** Langlíf kerfi safna skuld yfir ár eða áratugi stigvaxandi, hver fyrir sig hæfilegra kröfubreytinga, oft án nokkurrar formlegrar skuldarakningar þar til kreppa þvingar málið. Magnbundinn, sýnilegur skuldabiðlisti er sannarlega sannfærandi tól til að réttlæta nútímavæðingarfjárlög fyrir eftirlitsaðilum, því hann breytir óljósri fullyrðingu um að „kerfið sé gamalt“ í sértæk, kostnaðarmetin rök fyrir fjárfestingu.

## Dæmi

**Stórfyrirtæki.** Reikningavettvangur fjarskiptafyrirtækis hafði safnað yfir áratug af óformlega viðurkenndri en aldrei formlega rakinni tæknilegri skuld, þar sem verkfræðingar vitnuðu reglulega í „reikningavélin er sóðaskapur“ á afturlitum án eftirfylgni. Nýr verkfræðistjóri krafðist þess að hvert teymi byggði magnbundinn skuldabiðlista, áætlaði lagfæringarkostnað og burðarkostnað fyrir hvert atriði, og úthlutaði föstum 15% verkfræðigetu í skuldarúrbætur héðan í frá. Innan árs höfðu fimm atriðin með hæsta burðarkostnaðinn, sem táknuðu lítið brot heildarbiðlistans eftir fjölda, verið leyst, og breytingabilunarhlutfall (viðfangsefni 2.10) fyrir reikningatengdar afhendingar batnaði mælanlega, sem sýndi ósamhlutfallsleg áhrif þess að miða á atriðin með hæsta burðarkostnaðinn fyrst frekar en að vinna sig gegnum biðlistann í handahófskenndri röð.

**Hið opinbera.** Kjarnagagnavinnslukerfi hagstofu þjóðar, upphaflega smíðað yfir tuttugu árum fyrr, hafði aldrei fengið formlegt skuldamat þrátt fyrir víðtæka óformlega viðurkenningu starfsfólks á að verulegir hlutar væru brothættir og illa skildir. Skipulagt skuldamat, sem sameinaði stöðugreiningarniðurstöður, heitreitagögn og viðtöl við fáu eftirstandandi verkfræðingana sem skildu elstu hlutana, framleiddi magnbundinn, forgangsraðaðan biðlista sem studdi beint fjölára nútímavæðingarfjárlagabeiðni. Mikilvægt er að matið greindi einnig skýrt nokkra stöðuga, sjaldan snerta arfleifðarhluta sem hæfilega að láta óbreytta, sem forðaðist óþarflega víða og dýra fulla kerfisendurritun í þágu markvissrar fjárfestingar í tilteknu svæðin sem gögnin sýndu að báru hæsta áframhaldandi kostnað.

## Viðskiptarök: hvatar, ávöxtun fjárfestingar og heildareignarkostnaður

Ávöxtun af því að stýra tæknilegri skuld vísvitandi er forðaður magnandi kostnaður: sérhver ómeðhöndluð flýtileið gerir framtíðarbreytingar lítillega erfiðari, og sú áhrif flýtir sér án íhlutunar, og framleiðir að lokum kóðagrunn svo brothættan að jafnvel einfaldar breytingar verða hægar og áhættusamar. Fjarskiptadæmið hér að ofan sýnir ávöxtunina áþreifanlega: að miða á fá atriði með hæsta burðarkostnaðinn framleiddi mælanlega afhendingar- og gæðabót, ósamhlutfallslega við hóflega brotið af heildarbiðlistanum sem þau atriði táknuðu.

Heildareignarkostnaður er verndaða getan sem úthlutað er í úrbætur, yfirleitt 10% til 20% verkfræðitíma, sem er raunverulegur, sýnilegur kostnaður sem keppir við eiginleikahraða til skamms tíma. Þann kostnað er vert að greiða því valkosturinn, ómeðhöndluð, magnandi skuld, kostar að lokum langtum meira í hægari afhendingu og hækkuðum gallahlutföllum yfir allan kóðagrunninn, ekki bara tilteknu atriðin sem ómeðhöndluð eru.

## Andmynstur og gildrur

- **Enginn sýnilegur, rakinn skuldabiðlisti:** skuld tapar forgangsröðunarsamkeppni sjálfgefið og magnast ósýnilega.
- **Óljósar, ómagnbundnar skuldafullyrðingar:** keppa sjaldan vel við áþreifanlegar, magnbundnar eiginleikabeiðnir á skipulagsfundum.
- **Að forgangsraða skuld eftir aldri eða háværð talsmanns frekar en áhrifum:** beinir takmarkaðri úrbótagetu á villigötur.
- **Engin vernduð úrbótageta:** skuldarniðurgreiðsla gerist aðeins viðbragðsbundið, eftir kreppu, frekar en sem hefðbundin, vísvitandi venja.
- **Að meðhöndla alla skuld sem jafn þess virði að laga:** sóar fyrirhöfn á lítil-áhrifa atriði meðan atriði með háan burðarkostnað eru ómeðhöndluð.
- **Að láta skuld sitja endalaust á virkum biðlista án þess að ákveða nokkurn tímann að hún sé varanleg:** felur í sér framtíðarvinnu sem mun aldrei í raun eiga sér stað og ruglar raunverulega forgangsröðun.

## Þroskalíkan

- **Stig 1, Upphaf:** Tæknileg skuld er rædd óformlega, án rakins biðlista og án magnbindingar; hún tapar stöðugt fyrir eiginleikavinnu.
- **Stig 2, Þróun:** Sum teymi rekja skuld óformlega, en engin samkvæm magnbinding, þvert-teymis sýnileiki eða vernduð úrbótageta er til.
- **Stig 3, Stöðlun:** Sýnilegur, magnbundinn skuldabiðlisti er til í allri skipulagsheildinni, með verndaðri úrbótagetu úthlutað samkvæmt.
- **Stig 4, Stjórnun:** Skuldaratriðum er forgangsraðað eftir mældum áhrifum (burðarkostnaður ásamt veltu), og varanlega samþykkt skuld er skýrt skjalfest frekar en skilin eftir tvíræð.
- **Stig 5, Samhæfing:** Skipulagsheildin getur bent á tilteknar, mælanlegar afhendingar- eða gæðabætur raktar til markvissra skuldarúrbóta, og skuldastýring er hefðbundið, treyst inntak í verkfræðifjárfestingarákvarðanir samhliða eiginleikavinnu.

## Hugmyndir til umræðu

1. Hvert er skuldaratriðið með hæsta burðarkostnaðinn hjá okkur núna, og gætum við magnbundið það?
2. Hvaða hlutfall getu okkar fer í raun í skuldarúrbætur í dag?
3. Hvaða skuldaratriði ættum við að samþykkja skýrt sem varanlegt frekar en að skilja tvírætt eftir á biðlista okkar?
4. Hefur skuldabiðlisti okkar vaxið, minnkað eða staðið í stað síðasta ár?
5. Hvað myndi magnbundið skuldamat leiða í ljós sem núverandi óformleg vitund okkar missir af?

## Helstu atriði til að muna

- Tæknileg skuld er **viðráðanleg málamiðlun, ekki skammarlegt leyndarmál**; magnbindu hana frekar en að skilja hana eftir sem óljósa, stöðugt aftarlega-í-forgangsröð áhyggju.
- **Magnbindu kostnað við að laga á móti kostnaði við að bera** fyrir hvert atriði svo það keppi sanngjarnt við eiginleikavinnu.
- **Forgangsraðaðu eftir áhrifum** (burðarkostnaður ásamt veltu), ekki aldri eða háværð talsmanns.
- Úthlutaðu **varinni, sérstakri úrbótagetu**, ákveðinni fyrirfram, því skuld tapar annars áreiðanlega atriði-fyrir-atriði samkeppninni við eiginleikavinnu.
- **Samþykktu sumt skýrt sem varanlega skuld** þar sem kostnaður við að laga fer fram úr kostnaði við að bera, frekar en að skilja það tvírætt eftir á virkum biðlista.

## Heimildir og frekara lesefni

- Cunningham, Ward, „The WyCash Portfolio Management System“ (OOPSLA-reynsluskýrsla, 1992): uppruni tæknilegu skuldamyndlíkingarinnar.
- *Managing Technical Debt: Reducing Friction in Software Development*, eftir Philippe Kruchten, Robert Nord og Ipek Ozkaya (yfirgripsmikil umfjöllun um mælingu og stjórn tæknilegrar skuldar).
- *Refactoring: Improving the Design of Existing Code*, eftir Martin Fowler (úrbótatæknin sem skuldabiðlisti sækir að lokum í).
- *Your Code as a Crime Scene*, eftir Adam Tornhill (heitreitagreining sem inntak í skuldaforgangsröðun, viðfangsefni 4.3).
