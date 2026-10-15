# Hvað eru mælikvarðar hugbúnaðarverkfræði?

[Mælikvarðar hugbúnaðarverkfræði](https://en.wikipedia.org/wiki/Software_metric) eru magnbundnar mælingar sem notaðar eru til að meta, rekja og bæta gæði, skilvirkni og áhrif hugbúnaðarþróunarferla, afurða og teyma. Vel gerðir virka þeir sem kerfisbundin greiningartól: þeir afhjúpa rekstrarflöskuhálsa, réttlæta úrbætur tæknilegrar skuldar og samræma verkfræðivirkni við áþreifanlegar rekstrarniðurstöður. Illa gerðir brengla þeir hegðun, skaða traust og umbuna nákvæmlega röngu hlutunum.

Þessi bók er til því flest teymi grípa til mælikvarða áður en þau hafa ákveðið til hvers mælikvarði er *ætlaður*. Mælaborð fyllist af öllu sem er auðvelt að telja, forysta byrjar að spyrja „er þessi tala upp eða niður“, og innan ársfjórðungs er teymið að fínstilla töluna í stað niðurstöðunnar sem hún átti að tákna. Sú bilun hefur nafn, [lögmál Goodharts](https://en.wikipedia.org/wiki/Goodhart%27s_law): þegar mælikvarði verður markmið hættir hann að vera góður mælikvarði. Sérhvert viðfangsefni í þessari bók er skrifað með því lögmáli að baki sér.

## Rammarnir tveir

Iðnaðurinn hefur að mestu runnið saman að tveimur rannsóknarbyggðum römmum til að mæla verkfræðiafhendingu og teymisheilsu.

**[DORA-mælikvarðar](https://dora.dev/guides/dora-metrics/)** (úr DevOps Research and Assessment áætluninni) mæla afköst og stöðugleika kerfis: afhendingartíðni, leiðartíma breytinga, breytingabilunarhlutfall og batatíma misheppnaðra afhendinga. 2. hluti þessarar bókar nær yfir alla fjóra í sérstöku tilvísunarviðfangsefni, ásamt Flæðirammanum sem hann notar til að skipuleggja afhendingar- og flæðimælikvarða víðar, því DORA mælir vélfræði leiðslu vel en segir ekkert um hvers konar virði flæðir gegnum leiðsluna.

**[SPACE-ramminn](https://queue.acm.org/detail.cfm?id=3454124)**, skapaður af rannsakendum hjá Microsoft, GitHub og University of Victoria, vegur upp á móti hráum afköstum með þróunarupplifun yfir fimm víddir: ánægju og vellíðan, frammistöðu, virkni, samskipti og samvinnu, og skilvirkni og flæði. 3. hluti nær yfir hann á dýpt.

Umfram þessa tvo ramma rekja teymi staðbundna mælikvarða flokkaða eftir sviði: kóða- og gæðamælikvarða (4. hluti), vöru- og viðskiptamælikvarða (5. hluti), og áreiðanleika-, rekstrar- og öryggismælikvarða (6. hluti). 7. hluti tekur á breytingu sem þegar er hafin: kynslóðargervigreindartól hafa gert hrátt kóðaafurðamagn nær ókeypis, sem þýðir að nokkrir mælikvarðar sem iðnaðurinn hefur reitt sig á í áratug merkja ekki lengur það sem þeir merktu áður.

## Fyrir hvern þetta er

Aðalmarkhópurinn er fólkið sem velur hvað teymi mælir og hvers vegna: verkfræðileiðtogar, æðri og aðalverkfræðingar, vettvangs- og DevOps-teymi, og áætlana- og vörustjórar sem byggja mælaborð eða stigatöflu í fyrsta sinn, eða laga eina sem hefur byrjað að brengla hegðun. Aukamarkhópurinn er hver verkfræðingur sem vill skilja hvers vegna skipulagsheild hans rekur það sem hún rekur, og hvernig á að spyrna á móti þegar mælikvarði er misnotaður.

## Hvernig á að lesa hana

Byrjaðu hér, lestu síðan [innganginn](inngangur.md) til að sjá hvernig bókin er skipulögð, eða stökktu beint í [efnisyfirlitið](efnisyfirlit.md). Hvert viðfangsefni stendur eitt og sér: það setur meginreglur sínar fram fyrst, gefur áþreifanlegar ráðleggingar, nefnir hvernig mælikvarðinn sem það nær yfir er leikinn og endar á þroskalíkani, umræðuspurningum og heimildum. Þú þarft ekki að lesa bókina frá kápu til kápu til að nota hana.
