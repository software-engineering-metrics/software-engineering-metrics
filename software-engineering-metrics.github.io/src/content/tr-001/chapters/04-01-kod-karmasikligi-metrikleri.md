# 4.1 Kod karmaşıklığı metrikleri

## Genel bakış ve motivasyon

**[Döngüsel karmaşıklık](https://en.wikipedia.org/wiki/Cyclomatic_complexity)** (cyclomatic complexity), Thomas J. McCabe tarafından 1976'da ortaya atıldı ve bir kod parçasının kontrol akışındaki bağımsız yolların sayısını sayar: her `if`, döngü ve dal sayıma bir ekler. Yaklaşık elli yıl sonra hâlâ en yaygın kullanılan kod karmaşıklığı metriğidir; yanında bilişsel karmaşıklık (iç içe geçmiş ve izlenmesi zor kontrol akışını McCabe'in özgün doğrusal sayımından daha ağır tartar) ve iç içelik derinliği gibi akrabaları vardır. Bu metriklerin hepsi gerçek ve doğrulanmış bir içgörüyü paylaşır: içinden daha fazla bağımsız yol geçen kodu tam olarak test etmek de, üzerine akıl yürütmek de daha zordur ve onlarca yıllık ampirik araştırmaya göre kusur içerme olasılığı ölçülebilir biçimde daha yüksektir.

Bu konu o içgörüye gerçek bir saygıyla yaklaşıyor, sınırlarını da aynı ciddiyetle ele alıyor. Karmaşıklık metrikleri kodun yalnızca belirli bir özelliğini ölçer; bir kod tabanı her karmaşıklık metriğine göre basit görünürken kötü tasarlanmış, kötü adlandırılmış ya da hiçbir dal sayma algoritmasının yakalayamayacağı biçimlerde kavramsal olarak tutarsız olabilir. Tersine, bazı indirgenemez biçimde karmaşık problemler doğru çözülmek için gerçekten karmaşık kod gerektirir; karmaşıklık puanını düşürmeye zorlanan bir ekip, puanı iyi ama anlaşılması gerçekte daha zor bir kod üretebilir: temel karmaşıklığı azaltmak yerine daha fazla dosyaya ve dolaylılık katmanına yayar.

Büyük ekipler için karmaşıklık metrikleri bir ayıklama (triyaj) aracı olarak değerini kanıtlar: binlerce dosya arasında daha yakından bakmaya en çok değecek küçük alt kümeyi bulmanın bir yolu olarak, kod kalitesi üzerine tek başına bir hüküm olarak değil. Kod tabanı hiçbir bireyin tamamını okuyamayacağı kadar büyük olan kurumsal ve kamu kuruluşları, kıt yeniden düzenleme ve inceleme emeğini en çok fayda sağlayacağı yere yöneltmek için bu ayıklama işlevine güvenir.

## Temel ilkeler

- **Karmaşıklık metrikleri test etmenin ve kusurların zorluğunu öngörür; kaliteyi doğrudan ölçmez.** Onları bir hüküm olarak değil, girdilerden biri olarak görün.
- **Karmaşıklık puanı, yalnızca gerçek sadeleştirme yoluyla değil, karartma yoluyla da manipülasyona açıktır.** Karmaşıklığı daha fazla dosyaya yaymak, kodu anlamayı kolaylaştırmadan puanı düşürebilir.
- **Bazı karmaşıklık temeldir, tesadüfi değildir.** Gerçekten zor bir problem gerçekten karmaşık bir kod gerektirebilir; amaç tesadüfi karmaşıklığı en aza indirmektir, tüm karmaşıklığı ayrım gözetmeden yok etmek değil.
- **Karmaşıklık metriklerini triyaj için kullanın; bireysel ya da ekip karnesi olarak değil.** Nereye bakacağınızı gösterirler, kimi suçlayacağınızı değil.
- **Eğilim ve uç değerler, herhangi bir mutlak eşikten daha önemlidir.** Yükselen bir eğilim ya da aşırı bir uç değer, tek bir ekip geneli ortalamadan daha uygulanabilirdir.

## Öneriler

### İnceleme ve yeniden düzenleme emeğini ayıklamak için karmaşıklık metriklerini kullanın

Kod tabanı boyunca karmaşıklık analizi çalıştırın ve sonuçları, daha yakın bir insan incelemesinin ya da yeniden düzenleme yatırımının en çok karşılığını nerede vereceğini belirlemek için kullanın: kod tabanınızın kendi tipik aralığının çok üstünde puan alan fonksiyonlar ya da dosyalar, önce bakılacak en değerli yerlerdir. Bu ayıklama kullanımı, yani nereye bakılacağını bulmak, karmaşıklık metriklerinin en savunulabilir ve en değerli uygulamasıdır; onları mutlak bir geçti/kaldı kapısı olarak kullanmaktan çok daha iyidir.

### Eşikleri evrensel bir sayıya göre değil, kendi kod tabanınıza göre belirleyin

Sektör geleneğinden eleştirmeden ödünç alınan mutlak karmaşıklık eşikleri (on puan sık anılan bir pratik kuraldır), alanınıza göre ya fazla gevşek ya da fazla sıkı olabilir: bir ayrıştırıcı (parser) ya da kural motoru, tipik bir CRUD servisinden meşru biçimde daha yüksek bir taban karmaşıklığa sahip olabilir. Eşiklerinizi kod tabanınızın gerçek dağılımına göre kalibre edin ve bir eşik aşımını otomatik bir derleme hatası olarak değil, daha yakından bakmak için bir işaret olarak ele alın; yeter ki ekibiniz bu daha katı politikayı bütün ödünleşimlerinin farkında olarak bilinçli seçmiş olmasın.

### Gerçek sadeleştirme olmadan parçalara bölme yoluyla manipülasyona dikkat edin

Karmaşıklık puanlarının manipüle edilmesinin en yaygın yolu, konu 1.2'nin ikame örüntüsünün bu belirli metriğe uygulanmasıdır: gerçekten karmaşık tek bir fonksiyonu, tek tek iyi puan alan birkaç küçük fonksiyona bölmek; oysa sistem bir bütün olarak aynı ölçüde anlaşılması zor kalır, hatta mantık artık aralarında daha fazla dolaylılık bulunan daha fazla dosyaya dağıldığı için daha da zorlaşabilir. Karmaşıklık metriklerini, bölmenin kodu gerçekten netleştirip netleştirmediğine ya da karmaşıklığı yalnızca metriğin artık göremeyeceği bir yere taşıyıp taşımadığına dair niteliksel bir incelemeyle eşleştirin.

### Tepki vermeden önce temel karmaşıklığı tesadüfi karmaşıklıktan ayırın

Yüksek bir karmaşıklık puanını çözülecek bir sorun olarak görmeden önce, altta yatan problemin gerçekten o kadar çok bağımsız yol gerektirip gerektirmediğini sorun (örneğin vergi hesaplama mantığı meşru biçimde çok sayıda dal içerir) ya da karmaşıklığın kaçınılabilir nedenlerden kaynaklanıp kaynaklanmadığını: düzleştirilebilecek derin iç içe koşullar, birleştirilebilecek kopyalanmış mantık ya da yeniden çizilebilecek belirsiz sorumluluk sınırları. Bu metriğin sizi çözmeye yöneltmesi gereken gerçek kalite sorunu yalnızca ikinci kategoridir.

### Yalnızca bir anlık ortalamayı değil, eğilimi ve uç değerleri izleyin

Kod tabanı geneli ortalama karmaşıklık puanının hafifçe oynaması kendi başına nadiren işlem gerektirir; belirli bir dosyanın karmaşıklığının birkaç değişiklik boyunca keskin biçimde yükselmesi ya da aksi hâlde iyi huylu bir kod tabanında az sayıda aşırı uç değerin bulunması ise çok daha yararlı sinyallerdir. Hem zaman içindeki eğilimi hem de uç değer kuyruğunu izleyin ve bunları geniş, odaksız bir karmaşıklık azaltma girişimini değil, belirli ve hedefli bir incelemeyi tetiklemek için kullanın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Mutlak evrensel eşik | Basit, tutarlı, otomatikleştirmesi kolay | Meşru alan farklarını yok sayar; parçalara bölmeyle manipüle edilebilir |
| Kod tabanına göre göreli eşik | Gerçek bağlama daha iyi kalibre edilir | Daha fazla kurulum ve düzenli yeniden kalibrasyon gerektirir |
| Otomatik derleme kapısı olarak karmaşıklık | İnsan incelemesi yükü olmadan tutarlılık sağlar | Meşru biçimde karmaşık ama iyi tasarlanmış kodu engelleyebilir ya da karartılmış parçalamayı ödüllendirebilir |
| İnsan incelemesi için triyaj sinyali olarak karmaşıklık | Yalnızca parçalamanın kaçıracağı gerçek kalite sorunlarını yakalar | Tam otomatik bir kapıdan daha fazla insan inceleme zamanı gerektirir |

Temel gerilim **otomasyona karşı muhakeme** gerilimidir. Tam otomatik bir karmaşıklık kapısını uygulamak ucuz ve tutarlıdır, ama hem meşru biçimde karmaşık, iyi tasarlanmış kodu engelleyebilir hem de hiçbir şeyi gerçekten sadeleştirmeden puanı oynatan yüzeysel parçalamayı ödüllendirebilir. Gerilimi şöyle çözün: otomatik karmaşıklık analizini inceleme adaylarını ortaya çıkarmak için kullanın; asıl muhakemeyi, yani bu karmaşıklığın temel mi tesadüfi mi olduğunu ve bu yeniden düzenlemenin karmaşıklığı gerçekten netleştirip netleştirmediğini ya da yalnızca yer değiştirip değiştirmediğini, tek başına sert bir otomatik kapıya değil bir insan incelemecisine bırakın.

## Ekibinizle tartışılacak sorular

1. **Karmaşıklık eşiklerimiz kendi kod tabanımızın gerçek dağılımına göre mi kalibre edildi, yoksa genel bir sektör geleneğinden eleştirmeden mi ödünç alındı?** Kod tabanınızın gerçek karmaşıklık dağılımını çıkarın ve sık anılan bir sayının alanınız için evrensel olarak geçerli olduğunu varsaymak yerine, mevcut eşiklerinizin buna göre anlamlı olup olmadığına bakın.

2. **Hiç bir fonksiyonun birkaç küçük fonksiyona bölündüğünü, ama ortaya çıkan kodun gerçekte daha anlaşılır hâle gelmediğini gördük mü?** Bu konunun uyardığı parçalama yoluyla manipülasyon örüntüsünün en net işaretidir. Öncelikle bir karmaşıklık puanıyla motive edilmiş yakın tarihli bir yeniden düzenlemeye bakın ve gerçek anlaşılırlığı artırıp artırmadığını dürüstçe değerlendirin.

3. **Kod tabanımızın neresinde karmaşıklık probleme içkin, neresinde tesadüfi ve düzeltilebilir?** En yüksek karmaşıklıklı uç değerlerinizi gözden geçirin ve açıkça bu iki kategoriye ayırın; çünkü gerçek, harekete geçirilebilir kalite sorununu yalnızca ikinci kategori temsil eder.

4. **Karmaşıklık metriklerini inceleme emeğini ayıklamak için mi kullanıyoruz, yoksa insan muhakemesi içermeyen sert bir otomatik kapı olarak mı?** Mevcut uygulama yaklaşımınızın bu konunun önerdiği temel-tesadüfi ayrımına yer bırakıp bırakmadığını ya da her aşımı bağlama bakmaksızın aynı şekilde ele alıp almadığını tartışın.

5. **Bir karmaşıklık puanı, gayriresmî de olsa, bir mühendisin iş kalitesini değerlendirmek için hiç kullanıldı mı?** Bu, konu 3.4'ün etkinlik metrikleri için uyardığı bireysel değerlendirme tuzağının kod metriklerine uygulanmış hâlidir ve aynı manipülasyon tepkisini davet eder.

6. **En kritik, en sık değişen dosyalarımız için karmaşıklık eğilimi son bir yılda nasıl görünüyor?** Bunu konu 4.3'teki değişim yoğunluğu ve sıcak nokta analiziyle birleştirin; hem çok karmaşık hem sık değişen bir dosya, karmaşık ama nadiren dokunulan bir dosyadan çok daha önce ilgi hak eder.

## Sektörel bakış

**Girişim (startup).** Bu ölçekte karmaşıklık metrikleri genellikle daha az acildir; kod tabanı küçüktür ve gayriresmî aşinalık çoğu zaman resmî ölçümün yerini tutar. Erkenden edinilmeye değer alışkanlık, ara sıra bir karmaşıklık taraması çalıştırmaktır; böylece belirli bir dosyanın sessizce yönetilemez hâle gelmesini, ekip gayriresmî olarak fark edemeyecek kadar büyümeden yakalarsınız.

**Küçük işletme.** Çoğu modern statik analiz aracı, daha geniş, ücretsiz ya da düşük maliyetli bir lint kurulumunun parçası olarak karmaşıklık metriklerini raporlar; çıktıyı özel araçlara yatırım yapmak yerine dönemsel bir triyaj sinyali olarak kullanın. Dikkatinizi önce en sık değiştirilen dosyalarınıza verin.

**Kurumsal.** Ölçekte karmaşıklık metrikleri, hiçbir bireyin elle tarayamayacağı kadar büyük bir kod tabanında yeniden düzenleme yatırımını önceliklendirmek için değişim yoğunluğu verileriyle (konu 4.3) birleştirildiğinde en değerlidir. Meşru karmaşıklık farklı sistem türlerinde önemli ölçüde değiştiği için eşikleri tüm kuruma tek bir sayı olarak değil, servis ya da alan bazında kalibre edin.

**Kamu.** Uzun ömürlü kamu sistemleri çoğu zaman yıllar ya da onlarca yıl boyunca artımlı gereksinim değişiklikleriyle karmaşıklığı yavaş yavaş biriktirir; bir karmaşıklık denetimi, sistemi yalnızca "çalışıyor" ve dolayısıyla yatırıma değmez gören paydaşlara, modernizasyon ya da yeniden düzenleme yatırımını gerekçelendirmek için ikna edici ve somut bir araç olabilir.

## Örnekler

**Kurumsal.** Bir ödeme işleme şirketi ilk kez kod tabanı genelinde bir karmaşıklık denetimi çalıştırdı ve döngüsel karmaşıklık puanı kod tabanı medyanının on katından fazla olan tek bir işlem doğrulama fonksiyonu buldu. İnceleme, karmaşıklığın hemen hemen tamamen tesadüfi olduğunu ortaya koydu: belirli ödeme sağlayıcıları için yıllar içinde artımlı eklenen özel durum işlemleri, sağlayıcıya özgü mantığı ayıran daha temiz bir strateji örüntüsüne dönüştürülebilecek derin iç içe koşullara birikmişti. Karmaşıklık denetiminin kod tabanındaki en değerli tek hedef olarak belirlemesi nedeniyle doğrudan önceliklendirilen yeniden düzenleme, fonksiyonun karmaşıklık puanını yüzde 80'den fazla düşürdü ve daha önemlisi, izleyen iki çeyrek boyunca o kod yolundaki kusur oranını ölçülebilir biçimde azalttı.

**Kamu.** Bir vergi idaresinin onlarca yıllık yardım hesaplama motoru, hemen hemen her fonksiyonda karmaşıklık metriklerinde son derece yüksek puan aldı ve bu, başlangıçta tüm sistemin sıfırdan yeniden yazılması gerektiği varsayımına yol açtı. Temel karmaşıklığı tesadüfi karmaşıklıktan ayıran, fonksiyon fonksiyon daha yakından yapılan bir inceleme, karmaşıklığın çoğunun gerçekten altta yatan hukuki kuralları yansıttığını gösterdi; bu kurallar kanunla belirlenmiş gerçekten o kadar meşru dala ve özel duruma sahipti. Daha küçük bir alt küme ise benzer hesaplama yolları arasındaki kaçınılabilir kopyalamadan kaynaklanıyordu. Ekip yalnızca tesadüfi karmaşıklık alt kümesini yeniden düzenlemeyi hedefledi; maliyetli ve riskli bir tam yeniden yazımdan kaçınırken sistemin gerçekten en sorunlu alanlarını anlamlı biçimde iyileştirdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Karmaşıklık metriklerini iyi kullanmanın getirisi, hedefli ve yüksek değerli bir yeniden düzenleme yatırımıdır: yukarıdaki ödeme şirketi örneği, karmaşıklık analiziyle belirlenen tek ve iyi hedeflenmiş bir düzeltmenin, geniş ve hedefsiz bir yeniden düzenleme girişiminin gerektireceği maliyetin çok küçük bir kısmıyla, tam olarak en yüksek riskli kod yolundaki kusurları ölçülebilir biçimde azalttığını gösteriyor.

Toplam sahip olma maliyeti (TCO) düşüktür: çoğu modern geliştirme araç zinciri karmaşıklık metriklerini statik analizin (konu 4.4) parçası olarak otomatik hesaplar ve asıl yatırım, anlamlı yeni araç maliyeti değil, sonuçları doğru yorumlamak, temel karmaşıklığı tesadüfi karmaşıklıktan ayırmak ve parçalama yoluyla manipülasyonu yakalamak için harcanan insan muhakemesi zamanıdır.

## Anti-desenler ve tuzaklar

- **Karmaşıklık puanını doğrudan bir kalite hükmü saymak:** belirli bir özelliği ölçer, genel kod kalitesini değil.
- **Gerçek sadeleştirme olmadan puanı oynatmak için bir fonksiyonu bölmek:** bu konunun özellikle adını koyduğu parçalama yoluyla manipülasyon örüntüsü.
- **Evrensel bir eşiği kendi kod tabanınıza göre kalibre etmeden uygulamak:** alana göre ya fazla gevşek ya da fazla sıkı bir uygulama üretir.
- **Karmaşıklık metriklerini mühendisleri bireysel olarak değerlendirmek için kullanmak:** manipülasyonu davet eder ve muhakeme için değil triyaj için tasarlanmış bir metriği yanlış kullanır.
- **Tüm karmaşıklığı eşit ölçüde düzeltilebilir saymak:** gerçekten zor bir problemden gelen temel karmaşıklık, ortadan kaldırılacak bir kusur değildir.
- **Eğilimi ve uç değerleri, düz ve kod tabanı geneli bir ortalama uğruna göz ardı etmek:** bu metrik ailesinin sunduğu en uygulanabilir sinyali kaçırır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Karmaşıklık ölçülmez ya da sorgulanmamış, genel bir evrensel eşikle eleştirmeden ölçülür.
- **Seviye 2, Gelişim:** Karmaşıklık metrikleri toplanır ama nadiren bunlara göre harekete geçilir; temel ve tesadüfi karmaşıklık arasında bir ayrım yapılmaz.
- **Seviye 3, Standartlaştırma:** Eşikler kod tabanının kendi dağılımına göre kalibre edilir ve karmaşıklık metrikleri kurum genelinde inceleme ve yeniden düzenleme triyajını tutarlı biçimde yönlendirir.
- **Seviye 4, Yönetim:** Karmaşıklık eğilimi ve uç değerler aktif olarak izlenir, yeniden düzenleme yatırımını önceliklendirmek için değişim yoğunluğu verileriyle (konu 4.3) birleştirilir; parçalama yoluyla manipülasyon aktif olarak gözetilir.
- **Seviye 5, Orkestrasyon:** Kurum, doğrudan karmaşıklığa dayalı yeniden düzenleme yatırımına bağlanan belirli, ölçülebilir kusur oranı iyileştirmelerini gösterebilir ve karmaşıklık verisi, mühendislik yatırım kararlarına rutin ve güvenilen bir girdidir.

## Tartışma önerileri

1. En karmaşık tek fonksiyonumuz ya da dosyamız hangisi ve karmaşıklığı temel mi tesadüfi mi?
2. Gerçek bir sadeleştirme olmadan, parçalara bölme yoluyla bir karmaşıklık puanını hiç manipüle ettik mi?
3. Eşiklerimiz kendi kod tabanımıza göre mi kalibre edildi, yoksa eleştirmeden mi ödünç alındı?
4. Kod tabanımızda şu anda yüksek karmaşıklık, yüksek değişim yoğunluğuyla nerede örtüşüyor?
5. Karmaşıklık verisi hiç bir yeniden düzenleme yatırımı kararını besledi mi, yoksa kullanılmadan mı duruyor?

## Temel çıkarımlar

- **Döngüsel karmaşıklık** gibi karmaşıklık metrikleri test etmenin ve kusurların zorluğunu öngörür; genel kod kalitesini doğrudan ölçmez.
- Yüksek bir puana tepki vermeden önce **temel karmaşıklığı** (gerçekten zor bir problemden gelen) **tesadüfi karmaşıklıktan** (daha iyi tasarımla kaçınılabilir olan) ayırın.
- **Parçalama yoluyla manipülasyona** dikkat edin: hiçbir şeyi gerçekten sadeleştirmeden puanı düşürmek için kodu bölmek.
- Karmaşıklık metriklerini insan incelemesini ve yeniden düzenleme emeğini yönlendiren **triyaj** için kullanın; bireysel bir karne ya da katı bir otomatik kapı olarak değil.
- Eşikleri **kendi kod tabanınızın dağılımına** göre kalibre edin ve yalnızca düz bir ortalamayı değil, **eğilimi ve uç değerleri** izleyin.

## Kaynaklar ve ileri okuma

- McCabe, Thomas J., "A Complexity Measure," *IEEE Transactions on Software Engineering* (1976): özgün döngüsel karmaşıklık makalesi.
- *Code Complete*, Steve McConnell (yazılım inşasında karmaşıklığı yönetmeye dair pratik rehberlik).
- *Working Effectively with Legacy Code*, Michael Feathers (mevcut, değiştirilmesi zor kodda karmaşıklığı güvenle azaltma teknikleri).
- Campbell, G. Ann, "Cognitive Complexity: A New Way of Measuring Understandability" (SonarSource, 2018): bilişsel karmaşıklık metriği ve döngüsel karmaşıklıktan farkı.
