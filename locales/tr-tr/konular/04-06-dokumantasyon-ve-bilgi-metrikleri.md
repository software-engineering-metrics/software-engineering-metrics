# 4.6 Dokümantasyon ve bilgi metrikleri

## Genel bakış ve motivasyon

Bu konu, bir kod tabanını güvenle sürdürmek için gereken bilginin gerçekten belgelenmiş ve bulunabilir olup olmadığını, dokümantasyonun teknik olarak bir yerlerde var olup olmadığını değil, ölçerek Bölüm 4'ü kapatır. Konu 3.5 iletişim ve iş birliğini bir geliştirici deneyimi kaygısı olarak ele aldı; bu konu aynı temel meseleyi, yani bilgiye erişilebilirliği, kod tarafından ele alır: yeni bir mühendis ya da tanımadığı kod üzerinde çalışan mevcut bir mühendis güvenli bir değişiklik yapmak için gereken şeye sahip mi, yoksa bu bilgi yalnızca giderek azalan sayıda kıdemli kişinin kafasında mı yaşıyor.

Buradaki ölçüm zorluğu gerçekten güçtür, bu kitaptaki çoğu diğer metrikten daha güçtür; çünkü dokümantasyonun kalitesi ve yararlılığı, bir kapsama yüzdesinden ya da bir karmaşıklık puanından doğası gereği daha öznel. Bu konunun yaklaşımı, varlığı değil yararlılığın vekillerini ölçmektir: dokümantasyona gerçekte ne sıklıkla erişildiği, belgelenmiş bir yanıt var olmasına rağmen aynı sorunun ne sıklıkla tekrar tekrar sorulduğu ve bir sisteme yabancı birinin onda verimli hâle gelmesinin ne kadar sürdüğü. Bu vekillerin hiçbiri tek başına mükemmel değildir, ama birlikte, bir kod tabanının içerdiği wiki sayfası ya da README dosyası sayısını saymaktan çok daha dürüst bir tablo verirler.

Büyük ekipler için bu konunun kaygıları, kurumsal kıdem ve personel devriyle, kriz konuyu zorlayana kadar hafife alınması kolay biçimlerde bileşik büyür: yıllarca aynı iki mühendis tarafından sürdürülen bir sistem, neredeyse hiç yazılı dokümantasyon olmadan mükemmel biçimde çalışabilir; ta ki bu iki mühendis aynı yıl içinde ayrılana kadar. O zaman kurum, bilginin hiçbir zaman kalıcı bir yerde yakalanmadığını keşfeder. Sistem ömürleri tipik olarak daha uzun ve personel sürekliliği bir girişimden daha belirsiz olan kurumsal ve kamu kuruluşları bu riski çoğundan daha keskin taşır.

## Temel ilkeler

- **Dokümantasyonun var olması, dokümantasyonun yararlı olmasıyla aynı şey değildir.** Yalnızca mevcut olup olmadığını değil, gerçekten işe yarayıp yaramadığını ölçün.
- **Belgelenmiş yanıtlara rağmen tekrarlanan sorular, bir dokümantasyon emeği sorununu değil, bir bulunabilirlik sorununu ortaya koyar.** Daha fazla içerik her zaman çözüm değildir.
- **Verimli katkıya kadar geçen işe alıştırma süresi, genel bilgi sağlığı için güçlü ve pratik bir vekildir;** konu 3.5'in iş birliği metriklerine doğrudan bağlanır.
- **Yalnızca insanların kafasında yaşayan bilgi bir dayanıklılık riskidir;** şu anda ne kadar iyi işlerse işlesin, kararlı ve sürdürülebilir bir durum değildir.
- **Dokümantasyon çürür.** Bir yıl önce doğru olan bir sayfa şimdi aktif olarak yanıltıcı olabilir ve bayatlığın kendisi izlenmelidir.

## Öneriler

### Yalnızca varlığını değil, dokümantasyon erişimini ve bayatlığını izleyin

Dokümantasyon platformunuz destekliyorsa, sayfaların gerçekte ne sıklıkla görüntülendiğini ve ayrı olarak, bir sayfanın son güncellenmesinden bu yana, anlattığı alttaki sistemin ne sıklıkla değiştiğine göre ne kadar zaman geçtiğini izleyin (konu 4.3'teki değişim yoğunluğu verisiyle çapraz doğrulama burada doğrudan yararlıdır). Sayfa son düzenlendiğinden beri önemli ölçüde değişmiş bir sistemi anlatan bir sayfa, yalnızca yararsız olmaktan çok aktif olarak yanıltıcı olma açısından güçlü bir adaydır ve bu bayatlık sinyali, dokümantasyonun var olup olmadığını izlemek kadar ilgiyi hak eder.

### Tekrarlanan soruları bir bulunabilirlik sinyali olarak gözleyin

Aynı soru, belgelenmiş bir yanıt teknik olarak bir yerlerde var olmasına rağmen bir ekip sohbet kanalında ya da işe alıştırma sırasında tekrar tekrar soruluyorsa, bu örüntü daha fazla yazmanın çözeceği bir dokümantasyon emeği sorununu değil, bir bulunabilirlik sorununu ortaya koyar: yanıt insanların onu doğal olarak aradığı yerde değildir. Tekrarlanan soruları açıkça izleyin ve bunları, daha fazlasını yazmak yerine mevcut içeriği yeniden düzenlemeyi ya da daha iyi görünür kılmayı önceliklendirmek için kullanın.

### İlk anlamlı, bağımsız katkıya kadar geçen işe alıştırma süresini ölçün

Konu 3.5'te bir iş birliği sinyali olarak tanıtılan bu metrik, kod tarafından bakıldığında aynı ölçüde bir dokümantasyon ve bilgi sağlığı sinyalidir. Tutarlı biçimde kısa, öngörülebilir bir işe alıştırma süresi gerçekten erişilebilir, doğru bilgiyi düşündürür; uzun, çok değişken bir süre, özellikle yeni bir ekip üyesine tam olarak hangi kişinin işe alıştırma yaptığına büyük ölçüde bağlıysa, bilginin kalıcı, yazılı bir biçimde değil tehlikeli biçimde bireysel hafızada yoğunlaştığını düşündürür.

### Belgelenmemiş kritik bilgi alanlarını açıkça belirleyin ve önceliklendirin

Bilgi yoğunlaşması verinizi (konu 3.5'in [otobüs faktörü](https://en.wikipedia.org/wiki/Bus_factor) analizi) dokümantasyon kapsamıyla çapraz doğrulayın: otobüs faktörü bir olan ve anlamlı dokümantasyonu bulunmayan bir sistem, aynı düşük otobüs faktörüne sahip iyi belgelenmiş bir sistemden daha öncelikli ilgiyi hak eden, ciddi ve bileşik büyüyen bir risktir; çünkü dokümantasyon, özel bir halef yetiştirilirken en azından kısmi bir azaltma sağlar.

### Dokümantasyon borcunu teknik borç iş listenizin içinde bir kategori olarak ele alın

Dokümantasyon boşluklarını ayrı ve gayriresmî olarak izlemek yerine, önemli dokümantasyon boşluklarını (özellikle kritik, düşük otobüs faktörlü sistemler için) konu 4.5'te anlatılan aynı görünür, nicelleştirilmiş iş listesine katın; böylece dokümantasyon işi, koda odaklı borç iyileştirmesine kıyasla sürekli ertelenen daha düşük statülü bir iş olarak kalmak yerine önceliklendirilmiş kapasite için adil biçimde yarışır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Dokümantasyon ölçümü yok | Düşük yük | Bilgi riski, bir kriz keşfi zorlayana kadar görünmez kalır |
| Dokümantasyonun varlığını saymak (sayfa sayısı, README varlığı) | Basit, raporlaması kolay | Yararlılık, doğruluk ya da bulunabilirlik hakkında hiçbir şey söylemez |
| Erişimi ve bayatlığı izlemek | Gerçek yararlılığı ve çürümeyi ortaya koyar | Dokümantasyon platformu analitiği ve sürekli gözden geçirme disiplini gerektirir |
| Vekil olarak işe alıştırma süresi | Pratik, somut, doğrudan gerçek iş etkisine bağlanır | Dolaylı; dokümantasyon dışındaki diğer etkenler de işe alıştırma hızını etkiler |

Temel gerilim **ölçülebilirlik ile anlam** arasındadır. Dokümantasyonun varlığını saymak çok kolaydır ve size yararlı hemen hiçbir şey söylemez; gerçek yararlılık, yani birinin ihtiyaç duyduğunda belgelenmiş bilgiyi bulup ona güvenip güvenemeyeceği, gerçekten önem taşıyan şeydir ama doğrudan ölçmesi daha zordur. Gerilimi şöyle çözün: bu konunun önerdiği vekilleri (erişim örüntüleri, değişim yoğunluğuna göre bayatlık, tekrarlanan sorular ve işe alıştırma süresi) birlikte kullanın; hiçbirinin tek başına mükemmel olmadığını, ama yakınsamalarının yalnızca bir varlık sayımından çok daha anlamlı olduğunu kabul edin.

## Ekibinizle tartışılacak sorular

1. **En kritik, otobüs faktörü en düşük sistemimiz için anlamlı, doğru dokümantasyon gerçekten var mı, yoksa ayrılan bir uzman gerçek bilginin çoğunu kendisiyle birlikte mi götürür?** Bu, bu konunun merkezî kaygısının en keskin, en somut biçimidir; önce en riskli tek sisteminiz için dürüstçe yanıtlayın.

2. **Belgelenmiş bir yanıt bir yerlerde var olmasına rağmen ekip sohbetimizde hangi soru tekrar tekrar soruluyor?** Hemen bir tane sayabiliyorsanız, bu doğrudan düzeltmeye değer bir bulunabilirlik sorunudur; muhtemelen daha fazlasını yazmak yerine mevcut içeriği yeniden düzenleyerek ya da daha iyi görünür kılarak.

3. **En son gelen yeni ekip üyemizin ilk anlamlı, bağımsız katkısını yapması ne kadar sürdü ve bu, ondan önceki ekip üyesiyle nasıl karşılaştırılır?** Bireyler arasında büyük, açıklanamayan bir fark, çoğu zaman kalıcı, erişilebilir dokümantasyona değil, birine hangi kişinin işe alıştırma yaptığına büyük ölçüde bağlı bilgiye işaret eder.

4. **Bir dokümantasyon parçasının hâlâ doğru olup olmadığını, yazıldığından bu yana alttaki sistemin ne kadar değiştiğine göre en son ne zaman kontrol ettik?** Dürüst yanıt "bunu sistematik olarak kontrol etmiyoruz" ise, bu bayatlık riski muhtemelen şu anda herkesin varsaydığından daha büyüktür.

5. **Teknik borç iş listemiz (konu 4.5) dokümantasyon boşluklarını içeriyor mu, yoksa dokümantasyon işi kod düzeltmelerine kıyasla sürekli ertelenen daha düşük statülü bir iş mi?** Gerçek iş listenize bakın ve dokümantasyon borcunun görünür ve önceliklendirilmiş kapasite için yarışır olup olmadığını ya da fiilen görünmez olup olmadığını görün.

6. **En kritik, en az belgelenmiş sistemimizi anlayan bir ya da iki kişi aynı yıl içinde ayrılsa bize neye mal olurdu?** Bu somut, rahatsız edici soru, riski soyut ya da olası değil saymak yerine dürüstçe yanıtlamaya değer.

## Sektörel bakış

**Girişim (startup).** Bilginin sürekli, doğrudan konuşmayla yayıldığı küçük bir ekipte resmî dokümantasyon metrikleri genellikle gereksizdir. İzlenecek risk, konu 3.5'in uyardığı otobüs faktörü yoğunlaşmasıdır; şimdi özellikle dokümantasyona uygulanmış hâliyle: ekip herkesin her gün konuştuğu boyutu aştıkça, gayriresmî olarak iyi işleyen belgelenmemiş bilgi gerçek bir yükümlülüğe dönüşür.

**Küçük işletme.** Her şeyde kapsamlı dokümantasyon yapmaya çalışmak yerine, önce en kritik, en az yedekli tek sisteminizi, gayriresmî de olsa belgelemeye öncelik verin. En riskli tek hata noktanızı kapsayan kısa, doğru bir belge, her yerde geniş ama sığ bir kapsamadan daha fazla gerçek değer sağlar.

**Kurumsal.** Dokümantasyon bayatlığı ve bulunabilirlik burada kötü ölçeklenir; çünkü büyük bir kurum, birçok ekibe ve platforma yayılan dokümantasyonu, kimsenin güncel tutabileceğinden ya da tutarlı biçimde düzenleyebileceğinden daha hızlı biriktirir. Erişimi ve bayatlığı ölçekte izlemek için dokümantasyon platformu analitiğine yatırım yapın ve dokümantasyon borcunu kurum genelindeki borç iş listenizde birinci sınıf bir kategori olarak ele alın.

**Kamu.** Kamu sektörü kurumlarında yaygın olan uzun çalışan görev süreleri, görünürdeki kararlılığın arkasında ciddi belgelenmemiş bilgi riskini gizleyebilir; çünkü on beş yıl boyunca aynı kişi tarafından sürdürülen bir sistem, o kişi emekli olana kadar mükemmel biçimde çalışabilir. Dokümantasyon sağlığını yalnızca bir mühendislik inceliği olarak değil, doğrudan iş gücü ve halefiyet planlamasına bağlı bir operasyon sürekliliği meselesi olarak açıkça ele alın.

## Örnekler

**Kurumsal.** Bir finansal hizmetler şirketi, ilgisiz bir yeniden yapılanma sırasında, çekirdek risk hesaplama motorunun birkaç güncel olmayan kod yorumu dışında anlamlı hiçbir dokümantasyonu olmadığını ve onu en iyi anlayan iki mühendisin yeni bir girişime aynı anda atandığını keşfetti. Önemli zaman baskısı altında yürütülen acil bir dokümantasyon çalışması, kritik bilgiyi atama yürürlüğe girmeden önce çıkarıp kaydetti, ama süreç, dokümantasyon sağlığı acil durum olarak keşfedilmek yerine proaktif biçimde izlenip önceliklendirilseydi çok daha yavaş ve ucuz yayılabilecek birkaç haftalık özel kıdemli mühendis zamanı aldı.

**Kamu.** Bir eyalet hükümetinin onlarca yıllık vaka yönetim sistemi yıllar içinde önemli ölçüde dokümantasyon biriktirmişti, ama bir bulunabilirlik denetimi, yeni ekip üyelerinin ilgili mevcut dokümantasyonu tutarlı biçimde bulamadığını ve ekip kanallarında tekrar tekrar aynı birkaç soruyu sorduğunu ortaya koydu; bu sorular aslında kurumun dağınık, kötü düzenlenmiş dokümantasyon platformunun bir yerinde zaten yanıtlanmıştı. Kurum daha fazla içerik yazmak yerine, mevcut dokümantasyonunun arama ve gezinme yapısını yeniden düzenlemeye ve iyileştirmeye yatırım yaptı ve bir takip anketi, tekrarlanan sorularda ölçülebilir bir azalma ve tek bir yeni içerik sayfası eklemeden yeni personel için raporlanan anlamlı derecede daha hızlı bir işe alıştırma deneyimi gösterdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Dokümantasyon sağlığını bilinçli ölçmenin ve yönetmenin getirisi, önlenen kriz maliyetidir: yukarıdaki finansal hizmetler örneği, proaktif, kademeli bilgi yakalama ile planlanmamış personel hareketinin zorladığı pahalı, sıkıştırılmış bir acil durum çalışması arasındaki farkı gösteriyor. Belgelenmemiş kritik bilgi, çok pahalı hâle geldiği ana kadar gözle görülür hiçbir maliyeti olmayan, kalıcı bir yükümlülüktür ve o an hepsi birden gelir.

Toplam sahip olma maliyeti çoğunlukla bu konunun önerdiği vekilleri (erişim örüntüleri, bayatlık, tekrarlanan sorular, işe alıştırma süresi) izleme disiplini ve dokümantasyon boşluklarını koda odaklı işten sürekli daha düşük statülü saymak yerine önceliklendirilmiş bir iş listesine katma isteğidir. Bu disiplin, finansal hizmetler örneğinin alternatif olarak gösterdiği kriz modundaki bilgi çıkarımından çok daha ucuza mal olur.

## Anti-desenler ve tuzaklar

- **Yararlılık yerine dokümantasyonun varlığını saymak:** bilginin ihtiyaç anında gerçekten erişilebilir olup olmadığı hakkında hemen hiçbir şey söylemez.
- **Önce bulunabilirliği kontrol etmeden, tekrarlanan sorulara yanıt olarak daha fazla içerik yazmak:** çoğu zaman tamamen yanlış sorunu ele alır.
- **Dokümantasyon bayatlığını sistemin ne kadar değiştiğine göre hiç kontrol etmemek:** aktif olarak yanıltıcı, güncel olmayan içerik riski taşır.
- **Dokümantasyon borcunu koda ait borçtan sürekli daha düşük statülü saymak:** onu iş listesinde kronik biçimde geri plana itilmiş ve görünmez bırakır.
- **Görünürdeki kararlılığı, yani yıllardır değişmeyen bir sistemi, düşük risk sanmak:** tek uzmanına henüz ihtiyaç duymamış bir sistemin arkasında ciddi, belgelenmemiş bir otobüs faktörü sorununu gizleyebilir.
- **Kritik belgelenmemiş bilgiyi yalnızca acil bir personel geçişi sırasında keşfetmek:** bu konunun önlemek için kurulduğu pahalı, kaçınılabilir başarısızlık modu.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Dokümantasyon sağlığı ölçülmez; bilgi yoğunlaşması ve bayatlık riski yalnızca kriz yoluyla keşfedilir.
- **Seviye 2, Gelişim:** Bir miktar dokümantasyon vardır, ama erişimin, bayatlığın ya da bulunabilirliğin sistematik takibi yoktur.
- **Seviye 3, Standartlaştırma:** Kritik sistemler için erişim ve bayatlık izlenir ve işe alıştırma süresi kurum genelinde bilgi sağlığının vekili olarak ölçülür.
- **Seviye 4, Yönetim:** Dokümantasyon boşlukları önceliklendirilmiş teknik borç iş listesine katılır ve en ciddi birleşik riskleri belirlemek için otobüs faktörü riskiyle çapraz doğrulanır.
- **Seviye 5, Orkestrasyon:** Kurum, belgelenmemiş kritik bilgi riskini bir personel geçişi konuyu zorlamadan önce proaktif olarak belirler ve ele alır; dokümantasyon yatırımına bağlanan belirli, ölçülebilir işe alıştırma ya da olay müdahalesi iyileştirmelerini gösterebilir.

## Tartışma önerileri

1. Şu anda düşük otobüs faktörü ile kötü dokümantasyonun en ciddi tek birleşimi hangisi?
2. Belgelenmiş bir yanıt var olmasına rağmen hangi soru tekrar tekrar soruluyor?
3. Kritik bir dokümantasyon parçasının bayat ve yanıltıcı hâle geldiğini nasıl anlardık?
4. Teknik borç iş listemiz dokümantasyon boşluklarını içeriyor mu, yoksa görünmez mi?
5. En az belgelenmiş sistemimizin tek uzmanı bu yıl ayrılsa bize neye mal olurdu?

## Temel çıkarımlar

- **Varlığı değil yararlılığı** ölçün: dokümantasyonun gerçekten işe yarayıp yaramadığını, erişim örüntüleri, bayatlık ve tekrarlanan sorular gibi vekillerle.
- **Belgelenmiş yanıtlara rağmen tekrarlanan sorular**, mutlaka bir içerik emeği sorununu değil, bir bulunabilirlik sorununu ortaya koyar.
- **Verimli katkıya kadar geçen işe alıştırma süresi**, genel bilgi sağlığı için güçlü, pratik bir vekildir.
- **Belgelenmemiş kritik bilgi bileşik büyüyen bir risktir**, özellikle düşük otobüs faktörüyle (konu 3.5) birleştiğinde; gözle görülür hiçbir maliyeti yoktur, ta ki bir anda çok pahalıya mal olana kadar.
- Önceliklendirilmiş kapasite için adil yarışmaları adına **dokümantasyon boşluklarını teknik borç iş listenize** (konu 4.5) katın.

## Kaynaklar ve ileri okuma

- *Docs for Developers: An Engineer's Field Guide to Technical Writing*, Jared Bhatti, Zachariah Goldberg, Ted Kubaska ve Sarah Moir (mühendislik ekipleri için pratik dokümantasyon uygulamaları).
- *A Philosophy of Software Design*, John Ousterhout (dokümantasyon, karmaşıklık ve sürdürülebilirlik arasındaki ilişki).
- *Team Topologies*, Matthew Skelton ve Manuel Pais (yoğunlaşmış ve dağıtılmış bilginin örgütsel tasarım sonuçları).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble ve Gene Kim (teslimat performansıyla ilişkili yetkinliklerden biri olarak dokümantasyon).
