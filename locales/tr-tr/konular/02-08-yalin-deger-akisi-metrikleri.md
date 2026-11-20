# 2.8 Yalın değer akışı metrikleri

## Genel bakış ve motivasyon

Bu bölümün şimdiye kadar ele aldığı her metrik (akış süresi, akış yükü, cycle time, kullanım oranı) çok daha eski bir araç setinden türemiştir: klasik **[Lean](https://en.wikipedia.org/wiki/Lean_manufacturing)** (yalın) değer akışı haritalamasının beş temel ölçümü. Bu yöntem Toyota'da geliştirildi ve yazılım onu benimsemeden çok önce imalat, operasyon ve hizmet sunumunda yaygınlaştı. **Lead time (LT)**, işin talep edildiği andan teslim edildiği ana kadar geçen toplam saat süresidir. **Process time (PT)**, tek bir birim üzerinde fiilen çalışmaya harcanan süredir. **Cycle time (CT)**, akıştaki tek bir düğümü ya da aşamayı tamamlamak için gereken ortalama süredir. **Percent complete and accurate (%C/A)**, aşağı akıştaki ekibin yeniden işlemeye gerek duymadan işleyebildiği birimlerin yüzdesidir. **Takt time** ise müşteri talebiyle düzgün biçimde eşleşmek için bir birimi tamamlamaya ayrılabilecek en uzun kabul edilebilir süredir.

Bu konunun var olma nedeni, yazılım mühendisliğinin bu fikirleri icat etmeyip ödünç almış olmasıdır. Ödünç alma da bazen aynı sözcükleri biraz farklı şeyler için yeniden kullanmıştır. Bu kitaptaki cycle time (konu 2.6) özellikle bir değişikliğin mühendislik aşamalarını ölçer: kodlama, inceleme, test, dağıtım. Lean'in klasik CT'si ise her sürece uygulanan, daha genel "düğüm başına ortalama süre"dir. Akış süresi (konu 2.4), kitabın Lean'in lead time dediği şeye verdiği addır. Bu eşlemeyi bilmek önemlidir. İmalat, lojistik, sağlık ve kamu operasyonlarında yaygın olan Lean Six Sigma geçmişinden gelen bir okur bu terimleri özgün anlamlarıyla kullanır. Aynı dili konuşmayan bir yazılım ekibi, mühendislik dışındaki meslektaşlarına uzanan kolay ve kanıta dayalı bir köprüyü kaçırır.

Büyük ekipler için %C/A, bu konunun en az kullanılan metriğidir. Konu 2.3 ve 2.4'teki akış metriklerinin yakalamadığı bir şeyi yakalar: bir aşamanın ürettiğinin ne kadarının, geri gönderilmeden sonraki aşamada gerçekten kullanılabildiği. İmalatın **rolled throughput yield** (birikimli verim) dediği kavramla çok aşamalı bir değer akışı boyunca toplandığında %C/A, yeniden işin devirler arasında nasıl görünmez biçimde biriktiğini ortaya çıkarır. Uzun ve çok ekipli hatlara sahip kurumsal kuruluşlar ile birden çok onay geçidi olan kamu programları bu örüntüye özellikle yatkındır ve onu nadiren doğrudan ölçer.

## Temel ilkeler

- **Bu beş metrik yazılımdan öncedir ve yazılımın ötesine genellenir.** Büyük kurumlarda ve kamu operasyonlarında yaygın olan Lean Six Sigma eğitimli bir paydaşın zaten akıcı biçimde konuştuğu ortak sözcük dağarcığıdır.
- **Terminoloji çakışması gerçektir ve açıkça adlandırmaya değer.** Bu kitaptaki cycle time (konu 2.6) ile Lean'in klasik CT'si ilişkilidir ama aynı değildir. Fonksiyonlar arası konuşmaların sessizce birbirini ıskalamaması için eşlemeyi belgeleyin.
- **%C/A, yalnızca sonda bir kez değil, her aşama boyunca toplanarak ölçülmelidir.** Akışın başında ortaya çıkan ve geç yakalanan yeniden iş, yalnızca nihai teslimatta ölçülen bir metrikte görünmez.
- **Takt time, kapasite planlamasını emek yerine talep etrafında yeniden çerçeveler.** Soru "ne kadar hızlı gidebiliriz"den "ne kadar hızlı gitmemiz gerekiyor"a kayar. Bu, kullanım oranına (konu 2.7) ve akış yüküne (konu 2.4) doğrudan bağlanır.
- **Bunlar tanı metrikleridir, gösteriş metrikleri değil.** Her biri belirli bir operasyonel soruyu yanıtlamak için vardır; panoya etkileyici bir sayı koymak için değil.

## Öneriler

### Yazılıma özgü bir çerçeve benimsemeden önce değer akışınızı beş Lean metriğiyle haritalayın

Flow Framework'ün kendi metriklerini (konu 2.3 ve 2.4) üstüne eklemeden önce, değer akışınızdan geçen temsili bir iş örneklemi için lead time, process time, cycle time, %C/A ve takt time hesaplayın. Bu, Lean Six Sigma okuryazarı her paydaşın hemen anlayabileceği bir temel çizgi verir. Çoğu zaman konu 2.5'in anlattığı bekleme süresi baskınlığını da, herhangi bir yazılım çerçevesinden önce var olan ve ondan sonra da geçerli kalacak bir sözcük dağarcığıyla ortaya çıkarır.

### Percent complete and accurate'i her aşama boyunca çarparak toplayın

%C/A'yı her aşamada ayrı ayrı ölçün, sonra değer akışının rolled throughput yield'ını bulmak için aşama düzeyindeki yüzdeleri birbiriyle çarpın. Her biri tek başına yüzde 90 tam ve doğru çalışan üç aşama, toplamda yaklaşık yüzde 73'e bileşir. Bu sayı hiçbir tekil aşamanın kendi raporuna benzemez ve çoğunlukla daha dürüst olandır. Bu tek hesap, çok aşamalı bir hattın gerçekte ne kadar yeniden iş emdiğini göstermenin en hızlı yoludur.

### Takt time'ı kapasiteden değil, gerçek müşteri talebi verisinden belirleyin

Takt time'ı, mevcut çalışma süresinin o dönemdeki müşteri talebine bölünmesiyle hesaplayın. Bunu ekibinizin bugün ne kadar hızlı çalışabildiğinden bilerek bağımsız tutun. Ölçtüğünüz process time ve cycle time'ı bu sayıyla karşılaştırın: takt time'ın rahatça altında kalan bir process time sağlıklı bir esneklik gösterir. Takt time'ı aşan bir cycle time ise işlerin geride kaldığı hissinden öte, kapasite açığının somut ve sayısallaştırılmış kanıtıdır.

### Lean terimleri ile bu kitabın sözcük dağarcığı arasındaki eşlemeyi belgeleyin

Kurumunuzda yazılım dışında zaten bir Lean Six Sigma programı yürüyorsa ya da mühendislik, o sözcük dağarcığına hâkim bir yönetime rapor veriyorsa, eşlemeyi metrik şartnamenize (konu 1.4) açıkça yazın: bu kitabın akış süresi Lean'in lead time'ıdır, bu kitabın cycle time'ı (konu 2.6) Lean'in daha genel CT'sinin belirli bir uygulamasıdır, bu kitabın aktif süresi (konu 2.5) ise Lean'in process time'ıdır. Bu tek belge, kimin sayılarının "gerçek" olduğuna dair tekrar eden, düşük değerli bir tartışmayı önler.

### %C/A'yı akış hızının yerine değil, onunla birlikte korkuluk olarak kullanın

Rolled throughput yield'ı akış hızıyla (konu 2.3), bu kitabın her hız metriğini bir kararlılık korkuluğuyla eşlediği gibi eşleştirin. Öğe sayısı artarken birikimli %C/A düşüyorsa, değer akışı daha sonra giderek daha çok yeniden işe ihtiyaç duyacak birim teslim ediyor demektir. Konu 1.2'nin her metrik ailesini karşı koruması gerektiğini söylediği, kaliteden feragat eden hız örüntüsü tam budur.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca klasik Lean metrikleri (LT, PT, CT, %C/A, takt time) | Evrensel sözcük dağarcığı; hem yazılım hem yazılım dışı ekiplerde işe yarar | Yazılıma özgü değil; mühendisliğe özgü aşamalar için çeviri gerekir |
| Yalnızca Flow Framework metrikleri (konu 2.3, 2.4) | Yazılım değer akışları ve öğe türü görünürlüğü için tasarlanmış | Mühendislik dışındaki Lean Six Sigma eğitimli paydaşlara yabancı |
| İkisi birlikte, eşleme açıkça belgelenmiş | Her iki sözcük dağarcığını da konuşur; en güçlü fonksiyonlar arası köprü | Eşlemeyi yazma ve güncel tutma disiplinini baştan gerektirir |
| %C/A yalnızca nihai teslimatta ölçülür | Basit, tek bir sayı | Akışın daha erken aşamalarında ortaya çıkıp yakalanan yeniden işi gizler |

Temel gerilim **evrensellik ile özgüllük** arasındadır. Klasik Lean metrikleri imalat, operasyon ya da Six Sigma deneyimi olan herkes için anında okunaklıdır. Ancak yazılımın kod inceleme, otomatik test, dağıtım onayı gibi özgül aşamaları düşünülerek tasarlanmamıştır. Gerilimi şöyle çözün: Lean metriklerini fonksiyonlar arası ve yönetici konuşmaları için ortak temel sözcük dağarcığı olarak kullanın. Mühendislik ekiplerinin günlük yaptığı yazılıma özgü tanı işi için ise Flow Framework'ün kendi metriklerini (konu 2.3 ve 2.4) kullanın.

## Ekibinizle tartışılacak sorular

1. **Değer akışımız için beş klasik Lean metriğinin hepsini bugün hesaplayabilir miyiz, yoksa yalnızca bazılarına mı sahibiz?** Çoğu yazılım ekibinde akış süresi ve cycle time karşılıkları vardır, ama process time, %C/A ya da takt time hiç açıkça hesaplanmamıştır. Boşluğun küçük olduğunu varsaymadan önce beşinden hangilerinin gerçekten eksik olduğunu belirleyin.

2. **%C/A'yı değer akışımızın her aşamasında topladık mı, yoksa yalnızca nihai teslimatta mı ölçtük?** Tek bir akış sonu ölçümü, bu konunun rolled throughput yield hesabının ortaya çıkarmak üzere tasarlandığı birikimli yeniden işi tam olarak gizler. Toplama hesabını gerçek veriyle deneyin.

3. **Gerçek müşteri talebinden hesaplanmış takt time'ımızı biliyor muyuz ve ölçtüğümüz cycle time onunla nasıl karşılaştırılıyor?** Çoğu ekip bu karşılaştırmayı hiç açık yapmamıştır. Bu da kapasite konuşmalarının sayısal değil anekdotik kalması demektir.

4. **Mühendislik dışından Lean Six Sigma eğitimli bir paydaş cycle time'ımızı sorsa, onunla aynı şeyi kastettiğimizden emin olur muyduk?** Bu kitabın cycle time'ı (konu 2.6) ile Lean'in klasik CT'si ilişkilidir ama aynı değildir. Bu ayrımın kurumunuzda hiç gerçek bir yanlış anlamaya yol açıp açmadığını tartışın.

5. **Birikimli verimimiz hiç herhangi bir tekil aşamanın kendi bildirdiği %C/A'dan anlamlı ölçüde düşük çıktı mı?** Toplama hesabını hiç yapmadıysanız, ne bulmayı beklediğinizi tartışın, sonra gerçek veriyle kontrol edin.

6. **Kurumumuz yazılım dışında zaten bir Lean ya da Six Sigma programı yürütüyor mu? Ayrı, bağlantısız bir sözcük dağarcığı sürdürmek yerine onunla hizalanabilir miyiz?** Birçok kurumsal şirket ve kamu kurumunda bu altyapı zaten vardır. Mühendisliğin ona gerçekten bağlanıp bağlanmadığına bakın.

## Sektörel bakış

**Startup.** Tam Lean değer akışı haritalaması bu ölçekte seremoniye değmez. Ancak takt time'ı gayriresmi olarak anlamaya değer: ekibin keyfi bir iç tempoya göre değil, gerçek müşteri talebine uymak için kabaca ne kadar hızlı hareket etmesi gerektiğini bilmek, kapasiteyi hem çok erken fazla kurmayı hem de büyüme geldiğinde yetersiz kurmayı önler.

**Küçük işletme.** Beş metrik içinde %C/A en hemen işe yarayanıdır. "Teslim ettiğimizin ne kadarı yeniden yapılmak zorunda" sorusunu doğrudan yanıtlar. Sahipler ve küçük ekipler bu soruyu şiddetle hisseder, ama her zaman bir sayısı yoktur. Daha ayrıntılı bir şeye yatırım yapmadan önce bir iki kritik süreciniz için bunu gayriresmi olarak izleyin.

**Kurumsal.** Klasik Lean sözcük dağarcığının değerini kanıtladığı yer burasıdır. Çünkü büyük şirketlerde operasyonlarda, imalata yakın bölümlerde ya da ortak hizmetlerde çoğu zaman bir Lean Six Sigma programı zaten yürür. Aynı dili konuşan mühendislik, ayrı ve yalnızca yazılıma özgü bir metrik kümesini sıfırdan haklı çıkarmak zorunda kalmak yerine bu işlevlere anında, güvenilir bir köprü kurar.

**Kamu.** Özellikle düzenleyici, imalata yakın ya da lojistik işlevlere kökleri olan kamu kurumlarında genellikle mevcut Lean ya da süreç iyileştirme görevlendirmeleri vardır. Bir dijital hizmetin değer akışını, kurumun süreç iyileştirme ofisinin zaten kullandığı klasik terimlerle (lead time, process time, %C/A, takt time) çerçevelemek, bir yazılım modernizasyon çabası için gerçek kurumsal destek sağlamanın çoğu zaman en hızlı yoludur.

## Örnekler

**Kurumsal.** Bir imalat şirketinin iç yazılım bölümü, fabrika zemininden gelen Lean Six Sigma'ya hâkim bir operasyon yönetimine mühendislik metriklerini ciddiye aldırmakta yıllarca zorlanmıştı. Bölümün teslimat hattını aynı beş klasik metrikle yeniden çerçevelemek (yazılım değer akışı için lead time, process time, cycle time, %C/A ve takt time hesaplamak) bölümün sayılarını operasyon yönetimine ilk kez okunaklı kıldı. Hattın dört aşaması boyunca yapılan rolled throughput yield hesabı yüzde 61'lik bir gerçek %C/A ortaya koydu. Bu, her tekil aşamanın kendi bildirdiği sayının çok altındaydı. Aynı çeyrek içinde operasyon yönetiminin finanse ettiği bir yeniden iş azaltma girişiminin kanıt tabanı oldu.

**Kamu.** Uzun süredir Lean süreç iyileştirme ofisi olan bir kuruma rapor veren bir eyalet ulaştırma dairesinin dijital ruhsat ekibi, kendi metrikleri ofisin tanımadığı yazılıma özgü bir dil kullandığı için o ofisle hiç ilişki kurmamıştı. Ruhsat değer akışı lead time, process time ve %C/A olarak çevrildikten sonra süreç iyileştirme ofisi, ekibin gerçek kısıtının mühendislik hızı olmadığını belirledi. Kısıt, ruhsat talebine göre kendi etkin takt time'ının çok altında çalışan, aşağı akıştaki bir hukuki inceleme aşamasıydı. Bulgu tanıdık terimlerle çerçevelendiği için ofis hemen harekete geçmeye hazırdı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Klasik Lean sözcük dağarcığını bu kitabın yazılıma özgü metrikleriyle birlikte benimsemenin getirisi, büyük bir kurumda çoğunlukla zaten başka yerde var olan süreç iyileştirme uzmanlığına ve finansmana güvenilir, anında bir köprüdür. Yukarıdaki imalat şirketi örneği (yeniden çerçeveleme durumu okunaklı kıldığı çeyrekte yeniden iş azaltma finansmanının sağlanması) bu konunun yaklaşımının güvenilir biçimde ürettiği örüntüdür: içgörü yeni değildi, onu doğru kitleye uygulanabilir kılan sözcük dağarcığı yeniydi.

Toplam sahip olma maliyeti (TCO) düşüktür. Bu beş metrik, konu 2.4'ten 2.6'ya kadar zaten toplananların ötesinde yeni ölçümleme gerektirmez. Ek olarak, mevcut kusur ve akış öğesi takibine (konu 2.2) genellikle basit bir eklemeyle getirilen %C/A yeniden iş sınıflandırması gerekir. Asıl yatırım çeviridir: bu kitabın terimleri ile Lean'in klasik terimleri arasındaki eşlemeyi yazmak. Bu, fonksiyonlar arası bir yanlış anlamayı ilk önlediğinde kendini amorti eder.

## Anti-desenler ve tuzaklar

- **%C/A'yı yalnızca nihai teslimatta ölçmek:** bu konunun kalbindeki manipülasyon vektörüdür (oyunlama yolu). Bir ekip, daha erken aşamalar sessizce, kimse ölçmeden düzeltilen yeniden iş üretirken yüksek bir son aşama %C/A bildirebilir. Bu, tüm değer akışını olduğundan sağlıklı gösterir. Korkuluk, %C/A'yı her aşama boyunca çarparak toplamak (rolled throughput yield hesabı) ve her aşamanın "tam ve doğru" tanımını, zamanla sessizce daralamasın diye düzenli aralıklarla denetlemektir.
- **Bu kitabın cycle time'ı ile Lean'in klasik CT'sinin tamamen aynı anlama geldiğini varsaymak:** iki sözcük dağarcığı belgelenmiş bir eşleme olmadan karşılaştığında gerçek fonksiyonlar arası karışıklık üretir.
- **Takt time'ı gerçek müşteri talebi yerine mevcut kapasiteden belirlemek:** metriğin amacını boşa çıkarır. Metriğin amacı talep ile kapasite arasındaki boşluğu göstermektir; var olan temponun ne olduğunu onaylamak değil.
- **Yazılıma özgü bir çerçeve benimsendikten sonra klasik Lean metriklerini eskimiş saymak:** kurumda zaten var olabilecek süreç iyileştirme uzmanlığına giden güvenilir, kanıta dayalı bir köprüyü bırakmak demektir.
- **Kurumun başka bir yerindeki mevcut Lean Six Sigma programını görmezden gelmek:** teslimat metriklerini ortak dille yeniden çerçevelemenin açabileceği finansmanı, uzmanlığı ve kurumsal güvenilirliği kaçırır.
- **%C/A'yı akış hızıyla eşleştirmeden raporlamak:** yükselen bir throughput sayısının düşen bir yeniden iş oranını gizlemesine izin verir. Kitabın baştan sona karşı uyardığı korkuluk boşluğunun aynısıdır.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Beş klasik Lean metriğinin hiçbiri hesaplanmaz; teslimat lead time, process time ya da %C/A'ya değinmeden konuşulur.
- **Düzey 2, Geliştirme (Develop):** Lead time ve cycle time gayriresmi olarak izlenir, ancak process time, %C/A ve takt time hesaplanmaz ve bu kitabın sözcük dağarcığına bir eşleme yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Beş klasik metriğin hepsi tutarlı biçimde hesaplanır ve bu kitabın akış ve cycle time sözcük dağarcığına eşleme ortak bir metrik şartnamesinde belgelenmiştir.
- **Düzey 4, Yönetme (Manage):** Rolled throughput yield değer akışının her aşaması boyunca hesaplanır ve kapasite açıklarını açıkça sayısallaştırmak için takt time ölçülen cycle time ile karşılaştırılır.
- **Düzey 5, Yönlendirme (Orchestrate):** Kurum yazılım teslimat metriklerini işletmenin başka bir yerindeki mevcut bir Lean ya da Six Sigma programına bağlamıştır. Ortak sözcük dağarcığı bir içgörüyü mühendislik dışı bir kitleye uygulanabilir kıldığı için alınmış belirli yatırım ya da süreç kararlarını gösterebilir.

## Tartışma önerileri

1. Değer akışımız için lead time, process time, cycle time, %C/A ve takt time'ı bugün hesaplayabilir miyiz?
2. Her aşamanın %C/A'sını birbiriyle çarpsak rolled throughput yield'ımız ne olurdu?
3. Kurumumuz mühendislik metriklerini hiç bağlamadığımız bir Lean ya da Six Sigma programı yürütüyor mu?
4. Ölçtüğümüz cycle time, gerçek müşteri talebinden hesaplanan takt time'ımızla nasıl karşılaştırılıyor?

## Temel çıkarımlar

- Beş klasik Lean metriği (**lead time, process time, cycle time, percent complete and accurate ve takt time**) yazılımdan öncedir ve Lean Six Sigma eğitimli paydaşların ortak sözcük dağarcığı olmayı sürdürür.
- Bu kitabın **akış süresi ve cycle time'ı**, Lean'in lead time'ı ve klasik CT'siyle **eşleşir ama aynı değildir**; fonksiyonlar arası karışıklığı önlemek için eşlemeyi açıkça belgeleyin.
- Konunun başlıca manipülasyon vektörü **%C/A'yı yalnızca nihai teslimatta ölçmektir**; korkuluk, onu rolled throughput yield olarak her aşama boyunca çarparak toplamaktır.
- **Takt time kapasiteyi gerçek müşteri talebi etrafında yeniden çerçeveler**, mevcut tempo etrafında değil, ve doğrudan kullanım oranıyla (konu 2.7) ve akış yüküyle (konu 2.4) eşleşir.
- Yazılım teslimatını klasik Lean terimleriyle yeniden çerçevelemek, büyük bir kurumda zaten var olan **süreç iyileştirme uzmanlığı ve finansmanıyla** bağ kurmanın çoğu zaman en hızlı yoludur.

## Kaynaklar ve ileri okuma

- Rother, Mike, and John Shook. *Learning to See: Value Stream Mapping to
  Create Value and Eliminate Muda*. Lean Enterprise Institute, 1999.
- Womack, James P., and Daniel T. Jones. *Lean Thinking: Banish Waste and
  Create Wealth in Your Corporation*. Free Press, 1996.
- Womack, James P., Daniel T. Jones, and Daniel Roos. *The Machine That
  Changed the World*. Free Press, 1990.
- George, Michael L. *Lean Six Sigma for Service: How to Use Lean Speed and
  Six Sigma Quality to Improve Services and Transactions*. McGraw-Hill,
  2003.
- Ohno, Taiichi. *Toyota Production System: Beyond Large-Scale Production*.
  Productivity Press, 1988.
