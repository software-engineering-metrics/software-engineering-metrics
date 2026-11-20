# 2.1 Flow Framework

## Genel bakış ve motivasyon

**Flow Framework**, Mik Kersten'in geliştirdiği ve 2018 tarihli *Project to Product* kitabında yayımladığı yönetsel ve yapısal bir modeldir. Salt hat metriklerinin yanıtlayamadığı bir soruya cevap vermek için vardır: kodun commit'ten üretime ne kadar hızlı ve ne kadar güvenli taşındığı kadar, hattan hangi türden değerin aktığı ve bu karışımın işin gerçek stratejisini yansıtıp yansıtmadığı. Çerçeve yazılım teslimatını bir **[değer akışı](https://en.wikipedia.org/wiki/Value_stream)** olarak ele alır; yani bir fikri müşterinin eline geçen değere dönüştüren uçtan uca faaliyetler dizisi olarak. Bu yaklaşımı doğrudan yalın üretimin değer akışı haritalama geleneğinden ödünç alır.

Bu kitap, Flow Framework'ü Bölüm 2'nin düzenleyici yapısı olarak kullanır. Konu 2.2 dört akış öğesini, konu 2.3 ve 2.4 beş akış metriğini tanıtır; konu 2.8 bu metrikleri klasik Lean değer akışı haritalamasındaki kökenlerine kadar izler; konu 2.10 ise DORA metriklerini, bu bölümün artık başa koymadığı daha dar, hat odaklı bir başvuru çerçevesi olarak ele alır. Bu bilinçli bir seçimdir, DORA'nın araştırmasını küçümsemek değildir. DORA sistemin verimini ve kararlılığını gerçek istatistiksel titizlikle ölçer, ama bir iş liderinin en çok önemsediği soru karşısında sessiz kalır: mühendislik organizasyonunun bu çeyrekte teslim ettiği her şey içinde ne kadarı yeni müşteri değeriydi, ne kadarı sessizce hata düzeltmeye, risk yönetmeye ya da borç ödemeye gitti? Flow Framework tam olarak bu karışımı görünür kılmak için vardır.

Büyük ekipler için bu ayrım akademik değildir. Düzinelerce değer akışı yürüten bir platform organizasyonunun DORA sayıları (hızlı, sık, kararlı dağıtımlar) mükemmel olabilir; buna rağmen gerçek ürün çıktısı sessizce neredeyse saf bakım işine kaymış olabilir. Yalnızca hat mekaniğini ölçen bir gösterge paneli bu örüntüyü göremez. Mühendislik yatırımını hat terimleriyle değil iş terimleriyle düşünen paydaşlara gerekçelendirmek zorunda olan kurumsal ve kamu kuruluşlarının, teslimat faaliyetini stratejik niyete bağlayan bir kelime dağarcığına ihtiyacı vardır. Bu çerçevenin sağladığı şey budur.

## Temel ilkeler

- **Ölçüm birimi bir ekip ya da hat değil, bir değer akışıdır.** Akış, bir müşteri ya da iş ihtiyacından teslim edilen sonuca uzanır ve işin gerçekten geçtiği tüm ekip sınırlarını aşar.
- **Akış öğeleri "ne"yi görünür kılar, yalnızca "ne kadar hızlı"yı değil.** Konu 2.2'nin dört kategorisi (özellikler, hatalar, riskler ve borç) örtük bir önceliklendirme kararını açık ve ölçülebilir bir karara dönüştürür.
- **Akış öğeleri arasındaki kapasite dağıtımı sıfır toplamlıdır.** Bir öğe türüne harcanan fazla kapasite, diğerleri için daha az kapasite demektir; çerçeve bu ödünleşimi örtük bırakmak yerine görünür kılar.
- **Beş akış metriği yalnızca mühendislik sorularını değil, iş sorularını da yanıtlar.** Teknik olmayan bir paydaşa sunulmak üzere tasarlanmışlardır; mühendislik ekibinin içinde kalmak için değil.
- **Değer akışı yönetimi sürekli olmalıdır, bir kerelik haritalama alıştırması değil.** Statik değer akışı haritaları eskir; çerçeve, ekiplerin zaten kullandığı araçlardan ölçümleme yapılacak şekilde kurgulanmıştır.

## Öneriler

### Herhangi bir şeyi ölçümlemeden önce değer akışınızı haritalayın

Herhangi bir akış metriğini benimsemeden önce, bir işin bir iş ihtiyacının tespit edilmesinden bir müşterinin değeri almasına kadar izlediği gerçek yolu adım adım yürüyün; her aşamayı ve ekipler arasındaki her devri adlandırın. Bu, yalın üretimden uyarlanmış klasik [değer akışı haritalama](https://en.wikipedia.org/wiki/Value_stream_mapping) alıştırmasıdır. Bunu atlamak, Flow Framework benimsemelerinin kimsenin güvenmediği sayılar üretmesinin en yaygın nedenidir: incelenmemiş, gayriresmî biçimde anlaşılan bir sürece karşı hesaplanan metrikler, gerçekte olanla nadiren örtüşür.

### Akış metriklerini ekiplerinizin zaten kullandığı araçlara bağlayın

Flow Framework, dönemsel elle haritalama alıştırması için değil, sürekli ve otomatik değer akışı yönetimi için kurgulanmıştır. Akış öğesi takibini doğrudan işin zaten aktığı araçlara (Jira, Azure DevOps, GitHub) entegre edin; ekiplerin elle güncellemek zorunda kalacağı paralel bir takip sistemi kurmayın. Bir akış öğesinin durumu, altındaki bilet ya da pull request ilerledikçe kendiliğinden güncellenmelidir. Konu 1.5'in bu kitaptaki her metrik için önerdiği, öz bildirim yerine ölçümleme disiplini budur.

### Akış dağılımını yalnızca mühendislik liderliğine değil, iş paydaşlarına doğrudan sunun

Bu çerçevedeki en büyük kaçırılmış fırsat, onu içsel bir mühendislik aracı olarak görmektir. Akış dağılımı (işin ne kadarının özelliklere, ne kadarının hatalara, riske ve borca gittiği, konu 2.3) özellikle ürün ve iş liderliğiyle yürütülecek bir konuşma olarak tasarlanmıştır. Çünkü örtük bir önceliklendirme kararını (kapasitenin ne kadarı yeni değere, ne kadarı ışıkları açık tutmaya gidiyor) varsayılmış olmaktan çıkarıp açık ve pazarlığa açık hale getirir.

### Dört akış öğesini bir formalite değil, gerçek bir sınıflandırma olarak ele alın

Her iş birimini, sonradan değil işe girişte, dört akış öğesi türünden tam olarak birine sınıflandırmayı zorunlu kılın. Olaydan sonra ya da "bu temelde bir özellik" diyerek gevşek biçimde uygulanan bir sınıflandırma, taksonominin tüm değerini aşındırır; çünkü bütün mesele kapasitenin gerçekte nereye gittiğine dair dürüst ve tutarlı bir kayıttır.

### Değer akışı haritanızı, sabit bir takvime göre değil, organizasyon değiştiğinde yeniden gözden geçirin

Bir değer akışı haritası, ekip sınırları, araçlar ya da ürünün kendisi anlamlı biçimde değiştiği anda eskir; keyfî bir yıllık ritmi beklemez. Bir yeniden yapılanmayı, büyük bir araç geçişini ya da önemli bir ürün yön değişikliğini değer akışını yeniden yürümek için bir tetikleyici sayın. Eskimiş bir haritaya karşı hesaplanan bir akış metriği sessizce yanlış şeyi ölçer.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca hat metrikleri (DORA, konu 2.10) | Basit, iyi doğrulanmış, mevcut CI/CD verisinden ölçümlemesi ucuz | Teslim edilen değerin türü konusunda sessiz |
| Flow Framework'ün tam benimsenmesi | Teslimatı iş stratejisine bağlar; değer karışımını görünür ve pazarlığa açık kılar | Dürüst bir değer akışı haritası ve tutarlı bir akış öğesi sınıflandırma disiplini gerektirir |
| Statik, bir kerelik değer akışı haritalama | Ucuz, atölye çalışması olarak hızlı yapılır | Çabuk eskir; canlı bir metrik değil, bir anlık görüntü üretir |
| Sürekli, araç entegreli değer akışı yönetimi | Canlı, her zaman güncel veri; birçok değer akışına ölçeklenir | Başta gerçek bir araç entegrasyon çalışması gerektirir |

Temel gerilim, **iş açısından okunabilirlik ile ölçümleme çabası** arasındadır. Hat metrikleri ucuzdur, çünkü veriyi hat zaten üretir. Değer akışı metrikleri ise tüm sürecin dürüst bir haritasını ve hat metriklerinin hiç talep etmediği, işe girişte uygulanan disiplinli bir sınıflandırma alışkanlığını gerektirir. Gerilimi şöyle çözün: tüm organizasyonla birden başlamak yerine tek bir değer akışıyla başlayın, onu doğru biçimde haritalayın ve ancak ondan sonra akış öğesi takibini mevcut araçlara entegre edin. Tüm ekiplerde aynı anda büyük patlamalı bir devreye alma denemeyin.

## Ekibinizle tartışılacak sorular

1. **En önemli ürünümüz için şu an doğru bir değer akışı haritası çizebilir miyiz, yoksa devirlerin birkaçında tahmin mi yürütürüz?** Çoğu kuruluş bu yolu başından sonuna hiç yürümemiştir. Alıştırmayı dürüstçe deneyin ve grubun gerçekte ne olduğu konusunda anlaşamadığı her noktayı not edin; çünkü bu anlaşmazlık başlı başına bir tanıdır.

2. **Ekibimizin geçen çeyrekte teslim ettiği her şeyi özellik, hata, risk ve borç olarak sınıflandırsak, sonuç ürün liderliğimizi şaşırtır mıydı?** Çoğu ekip bu ayrımı hiç açık hale getirmemiştir ve yanıt çoğu zaman, basit bir "teslim edilen hikâye puanı" sayımında daha önce görünmeyen bir bakım yükünü ya da borç sorununu ortaya çıkarır.

3. **Akış öğelerini izlemenin gerçek, araç entegreli bir yolu var mı, yoksa biri işi elle sınıflandırıp yeniden sınıflandırmak zorunda mı kalır?** Elle tutulan bir sistem gerçek iş yükü altında hızla çürür; araç entegreli bir sistem çürümez. Hangisini gerçekten sürdürmeye hazır olduğunuzu dürüstçe değerlendirin.

4. **Değer akışı haritamız en son ne zaman değişti ve metriklerimizi buna göre güncelledik mi?** Yeniden yapılanmalar ve araç geçişleri bir değer akışı haritasını sessizce geçersiz kılar; çok az kuruluş bu olduğunda haritayı yeniden gözden geçirmeyi hatırlar.

5. **Akış metriklerimiz hiç iş ya da ürün paydaşlarına doğrudan sunuluyor mu, yoksa mühendisliğin içinde mi kalıyor?** Çerçevenin yalnızca hat metriklerine karşı en büyük avantajı tam da bu konuşmadır; onu atlamak çerçevenin değerinin çoğunu kaybettirir.

6. **Birinin, kâğıt üzerinde dürüstlüğe aykırı hiçbir şey yapmadan akış öğesi sınıflandırmamızı manipüle etmesi için ne gerekir?** Teslimat baskısı altındaki bir ekibin daha üretken görünmek için borç ya da risk işini sessizce özellik olarak yeniden etiketleyebileceği yolu adım adım düşünün ve bunu şu an fark edip etmeyeceğinizi tartışın.

## Sektörel bakış

**Girişim (startup).** Herkesin tüm süreci ezbere bildiği beş kişilik bir ekip için tam bir değer akışı haritası genellikle gereksizdir. Bu ölçekte yararlı alışkanlık, planlama konuşmalarında dört akış öğesi türünü yüksek sesle adlandırmaktır; böylece bir özellik teslim tarihi yaklaştığı anda borç ve risk işi sessizce gözden kaybolmaz.

**Küçük işletme.** Akış öğesi sınıflandırmasını, zaten kullandığınız hafif takip aracının içinde (etiketli bir sütun ya da özel bir alan) benimseyin; ayrı bir değer akışı yönetimi ürününe gerek yoktur. Tutarlı sınıflandırma disiplini, arkasındaki aracın gelişmişliğinden çok daha önemlidir.

**Kurumsal.** Çerçevenin değerini kanıtladığı yer burasıdır; çünkü pek çok ürün hattında düzinelerce değer akışı yürüten büyük bir organizasyonun, mühendislik kapasitesinin özellikler, hatalar, risk ve borç arasında gerçekte nasıl dağıtıldığını tek bir yerde görmek için başka güvenilir bir yolu yoktur. Araç entegrasyonuna yatırım yapın; elle yürütülen alternatif gerçek ölçekle karşılaşınca ayakta kalmaz.

**Kamu.** Akış dağılımı, kamu sektöründeki bir mühendislik kuruluşuna "neden daha fazla yeni işlev teslim edilmiyor" sorusuna savunulabilir ve iş açısından okunabilir bir yanıt sağlar; dürüst yanıt, kapasitenin büyüyen bir payının güvenlik iyileştirmesine ya da eski sistem borcuna gitmesi olduğunda. Bu ödünleşimi baskıyı sessizce sindirmek yerine görünür ve açık kılmak, çoğu zaman bu çerçevenin bir kamu teknoloji liderine sunduğu tek en yararlı şeydir.

## Örnekler

**Kurumsal.** Büyük bir sigorta şirketinin hasar platformu organizasyonu, sprint hız raporlarına bakarak ağırlıklı olarak yeni özellikler teslim ettiğine inanıyordu. İlk değer akışı haritalama ve akış öğesi sınıflandırma alışkanlığı, borç ve risk işinin (büyük bölümü on yıllık bir çekirdek sistemden gelen belgelenmemiş teknik borç) toplam mühendislik kapasitesinin yarısına yakınını tükettiğini gösterdi. Hiçbir önceki raporlama bunu ortaya çıkarmamıştı, çünkü bu iş hep genel "mühendislik görevleri" içine katılmıştı. Bu ayrımı yönetim kuruluna sunmak, platformun tarihinde ilk kez özel bir borç azaltma bütçesi sağladı; borç işi her özellik talebiyle sessizce yarışmaya devam etmedi.

**Kamu.** Bir ulusal vergi idaresinin dijital hizmetler birimi, sprintler düzenli tamamlanmasına rağmen vatandaşa dönük amiral gemisi bir özelliğin bir yılı aşkın süredir "devam ediyor" görünmesinin nedenini teşhis etmek için değer akışı haritalamayı kullandı. Harita, değer akışının aslında beş ayrı ekibe yayıldığını ve organizasyon şemasının yansıtmadığı üç devir bulunduğunu gösterdi. Akış öğesi sınıflandırması, özelliğin gerçek mühendislik süresinin toplam akış süresinin küçük bir kesri olduğunu, kalanının hiçbir ekibin kendi metriklerinin göremediği ekipler arası devir gecikmelerinden oluştuğunu ortaya koydu. Birim, o ürün hattı için organizasyon şemasına göre değil değer akışına göre yeniden yapılandı ve iki çeyrek içinde akış süresini kayda değer ölçüde kısalttı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Flow Framework'ü benimsemenin getirisi, hat metriklerinin yanıtlayamadığı bir soruya savunulabilir, iş açısından okunabilir bir yanıttır: mühendislik kapasitesi liderliğin sandığı biçimde dağıtılıyor mu? Yukarıdaki sigorta örneğinde olduğu gibi kapasitenin neredeyse yarısının daha önce görünmeyen borç işine gittiğini ortaya çıkarmak, bir kuruluş işini dürüstçe sınıflandırdığında sık görülen bir örüntüdür. Bu görünürlük, belirsiz bir "teknik borç için daha fazla zamana ihtiyacımız var" talebinin hiçbir zaman açamayacağı yatırımları rutin olarak açar.

Toplam sahip olma maliyeti iki yerde yoğunlaşır: dürüstçe yapılması gerçek bir kolaylaştırma zamanı alan ilk değer akışı haritalama alıştırması ve akış öğesi verisini elle bakım gerektirmeden güncel tutmak için gereken araç entegrasyonu. İki maliyet de iyi yapıldığında bir kerelik ya da düşük bakımlıdır; bu da çerçeveyi sürdürmeyi, benimsemekten hayli ucuz kılar.

## Anti-desenler ve tuzaklar

- **Değer akışı haritalamayı bir kerelik, bir daha gözden geçirilmeyen atölye çalışması olarak görmek:** organizasyon değiştiği anda harita eskir ve eskimiş bir haritaya karşı hesaplanan metrik yanlış şeyi ölçer.
- **Paralel, elle bakımı yapılan bir akış öğesi takip sistemi kurmak:** gerçek iş yükü altında hızla çürür; bunun yerine mevcut araçlara entegre edin.
- **Akış öğelerini işe girişte değil, geriye dönük sınıflandırmak:** bu konunun kalbindeki manipülasyon vektörü (oyunlama yolu). Teslimat baskısı altındaki bir ekip, yalnızca akış dağılımı grafiğini gören paydaşlara daha üretken görünmek için, kimse bunu yapmaya yönelik açık ve görünür bir karar vermeden, borç ya da risk işini sonradan sessizce özellik olarak yeniden etiketleyebilir. Korkuluk, sınıflandırmayı sonuç bilinmeden önce, işe girişte zorunlu kılmak ve sınıflandırılmış öğelerden bir örneklemi, altındaki değişikliğin gerçekte ne yaptığıyla periyodik olarak denetlemektir. Konu 1.2'nin bu kitaptaki her metrik için istediği denetim disiplini budur.
- **Akış metriklerini yalnızca mühendislik içinde tutmak:** çerçevenin ana avantajını, iş paydaşlarıyla ortak bir kelime dağarcığını kaybettirir.
- **Gerçek değer akışı yerine organizasyon şemasını haritalamak:** çoğu zaman en büyük gecikme kaynağı olan ekipler arası devirleri gizler.
- **Çerçeveyi tek bir değer akışında doğrulamadan tüm organizasyonda benimsemek:** altındaki harita doğruluğu hiç onaylanmadığı için kimsenin güvenmediği metriklere büyük yatırım yapma riski taşır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Hiçbir değer akışı haritası yoktur; iş, akış öğesi sınıflandırması olmadan genel biletler olarak izlenir.
- **Seviye 2, Gelişim:** Bir değer akışı haritalanmıştır ve akış öğeleri gayriresmî biçimde sınıflandırılır, ancak takip elle yapılır ve tutarsız uygulanır.
- **Seviye 3, Standartlaşma:** Akış öğesi sınıflandırması mevcut araçlara entegre edilmiştir ve başlıca değer akışlarında işe girişte tutarlı biçimde uygulanır.
- **Seviye 4, Yönetim:** Akış dağılımı iş paydaşlarıyla düzenli olarak gözden geçirilir ve değer akışı haritaları organizasyon değiştikçe etkin biçimde güncel tutulur.
- **Seviye 5, Orkestrasyon:** Organizasyon, mühendislik yatırımını akış verisini kullanarak değer akışları arasında bilinçli biçimde dağıtır ve çerçeve daha önce görünmeyen bir ödünleşimi görünür kıldığı için alınmış belirli stratejik kararları (bir borç azaltma bütçesi, bir ekip yeniden yapılanması) gösterebilir.

## Tartışma önerileri

1. Amiral gemisi ürünümüz için bugün, tahmin yürütmeden doğru bir değer akışı haritası çizebilir miyiz?
2. Dürüst bir akış öğesi sınıflandırması, geçen çeyrek kapasitenin yüzde kaçının özellikler yerine borç ve riske gittiğini gösterirdi?
3. Akış metriklerimiz şu an iş paydaşlarına ulaşıyor mu, yoksa mühendisliğin içinde mi kalıyor?
4. Değer akışımızdaki, organizasyon şemamızın yansıtmadığı en büyük ekipler arası devir hangisi?

## Temel çıkarımlar

- Mik Kersten'in *Project to Product* kitabından gelen **Flow Framework**, bir teslimat hattından hangi türden değerin aktığını ölçer; hattın kendisinin ne kadar hızlı çalıştığını değil.
- Çerçevenin ölçüm birimi bir ekip ya da hat değil, bir **değer akışıdır**; onu dürüstçe haritalamak, herhangi bir şeyi ölçümlemeden önce gelir.
- **İşe girişte, sonradan değil yapılan akış öğesi sınıflandırması**, bu konunun merkezî manipülasyon vektörüne karşı korkuluktur: daha üretken görünmek için borç ya da risk işini sessizce özellik olarak yeniden etiketlemek.
- **Akış metriklerini mevcut araçlara bağlayın**: Jira, Azure DevOps, GitHub; gerçek iş yükü altında ayakta kalmayacak paralel bir elle takip sistemine değil.
- Akış verisini **doğrudan iş paydaşlarına** sunun; çerçevenin yalnızca hat metriklerine karşı ana avantajı, içsel bir mühendislik gösterge paneli değil bu konuşmadır.

## Kaynaklar ve ileri okuma

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age of
  Digital Disruption with the Flow Framework*. IT Revolution Press, 2018.
- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Kim, Gene, Kevin Behr, and George Spafford. *The Phoenix Project*. IT
  Revolution Press, 2013.
- Kim, Gene, Jez Humble, Patrick Debois, and John Willis. *The DevOps
  Handbook*. IT Revolution Press, 2016.
