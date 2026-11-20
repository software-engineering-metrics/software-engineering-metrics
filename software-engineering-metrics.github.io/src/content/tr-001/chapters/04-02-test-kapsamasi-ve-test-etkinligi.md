# 4.2 Test kapsaması ve test etkinliği

## Genel bakış ve motivasyon

**[Test kapsaması](https://en.wikipedia.org/wiki/Code_coverage)** (test coverage), bir test paketi tarafından çalıştırılan kodun yüzdesini ölçer: satır kapsaması, dal kapsaması ya da daha katı olan yol kapsaması. Bu kitabın tamamında en yaygın izlenen metriklerden biridir; hesaplaması ucuzdur, tek bir yüzde olarak görselleştirmesi kolaydır ve bu yüzden hedefe dönüşen her metrik için konu 1.2'nin öngördüğü biçimde en sık manipüle edilenlerden biridir. Bir test paketi anlamlı hemen hiçbir şeyi doğrulamadan yüksek kapsamaya ulaşabilir, çünkü kapsama kodun bir test çalışması sırasında yürütülüp yürütülmediğini ölçer; testin kodun doğru davrandığını gerçekten kontrol edip etmediğini değil.

Kapsama ile gerçek test etkinliği arasındaki bu boşluk küçük bir dipnot değildir; bu konunun merkezî kaygısıdır. Bir fonksiyonu çağırıp sonucu hakkında hiçbir şey doğrulamayan bir test, o fonksiyonun davranışını uç durumlar boyunca titizlikle doğrulayan bir testle aynı ölçüde kapsamayı artırır. Bu konunun önerdiği çözüm olan **mutasyon testi** (mutation testing), koda bilerek küçük, yapay hatalar sokar ve test paketinin bunları gerçekten yakalayıp yakalamadığına bakar. Bu boşluğa doğrudan yanıttır ve bu konu onu isteğe bağlı bir ek olarak değil, kapsamanın gerekli tamamlayıcısı olarak ele alır.

Büyük ekiplerde kapsama hedefleri sıklıkla kurum genelinde bir kalite kapısı olarak benimsenir; bu, tam olarak konu 1.2'nin manipülasyona en açık olduğunu uyardığı türden, teşvik edilen ve görünürlüğü yüksek bir metriktir. Eşlik eden bir etkinlik kontrolü olmadan her yere aynı kapsama yüzdesini şart koşan kurumsal ve kamu kuruluşları, fiilen bu kitabın tarif ettiği eşik manipülasyonu örüntüsünü teşvik eder: yalnızca bir sayıya ulaşmak için yazılmış, gerçek kusur önlemede hiçbir iyileşme sağlamayan önemsiz testler.

## Temel ilkeler

- **Kapsama yürütmeyi ölçer, doğrulamayı değil.** Bir satırın bir test tarafından çalıştırılması, testin o satır hakkında anlamlı bir şeyi kontrol edip etmediğini söylemez.
- **Etkinlik kontrolü olmayan bir kapsama hedefi, ders kitabı gibi bir Goodhart yasası kurgusudur** (konu 1.2): sayı iyileşir, gerçek kalite iyileşmez.
- **Mutasyon testi kapsamanın gerekli tamamlayıcısıdır**, yerine geçen bir şey değildir; ikisini birlikte kullanın.
- **Kapsama, azamiye çıkarılacak bir hedeften çok bir taban olarak daha yararlıdır.** Düşük bir sayı gerçekten test edilmemiş kodu ortaya çıkarır; yüzde 100'ün peşinde koşmak çoğu zaman azalan ya da olumsuz getiri üretir.
- **Kritik yol kapsaması, tek tip ve her yere yayılan kapsamadan daha önemlidir.** Her kod, başarısız olduğunda aynı riski taşımaz.

## Öneriler

### Kapsamayı azamiye çıkarılacak bir hedef olarak değil, test edilmemiş kodu bulmak için kullanın

Kapsama raporunu, yüzde 100'e doğru itilecek bir puan olarak değil, önce hiçbir testi olmayan yerlerin haritası olarak ele alın; bu gerçekten yararlı bir bilgidir. Sıfır kapsamalı kod, kapatılmaya değer gerçek bir boşluktur; kapsamayı yüzde 85'ten yüzde 95'e çıkarmanın marjinal değeri genellikle çok daha düşüktür ve çoğu zaman harcanan çabaya değmez, özellikle bu çaba yalnızca daha yüksek sayıya ulaşmak için düşük değerli testler üretiyorsa.

### Her kapsama hedefini mutasyon testiyle eşleştirin

**Mutasyon testi** araçları, kodunuza otomatik olarak küçük hatalar sokar (bir karşılaştırma operatörünü ters çevirmek, bir sınır koşulunu değiştirmek gibi) ve ardından test paketinizi mutasyona uğramış her sürüme karşı çalıştırır. Mutantların çoğunu "öldüren" (onlara karşı başarısız olan) bir test paketi davranışı gerçekten doğruluyordur; satır kapsaması yüksek ama mutant öldürme oranı düşük bir test paketi ise kodu anlamlı biçimde kontrol etmeden yalnızca çalıştırıyordur. Bu eşleştirme, kapsama hedefi manipülasyonuna karşı tek başına en etkili korkuluktur ve bu kitap onu ileri düzey ya da isteğe bağlı bir teknik olarak değil, standart bir uygulama olarak önerir.

### Kapsama ve mutasyon testini önce kritik yollarda önceliklendirin

Her kod aynı riski taşımaz. Bir ödeme işleme yolu, bir kimlik doğrulama kontrolü ya da bir veri geçişi betiği, nadiren kullanılan bir yönetim raporundan çok daha titiz testi hak eder. Tüm kod tabanında tek tip kapsama peşinde koşmak yerine, riski en yüksek ve sonuçları en ağır kod yollarını belirleyin ve hem kapsama hem mutasyon testi emeğini önce oraya yoğunlaştırın; gerçekten düşük riskli kodda daha düşük kapsamayı bir ihmal olarak değil, bilinçli ve bilgiye dayalı bir ödünleşim olarak kabul edin.

### Belirli kapsama manipülasyonu örüntülerine dikkat edin

Kapsama bir hedefe dönüştüğünde en sık manipüle edilme yolları şunları içerir: bir fonksiyonu çağırıp sonuç hakkında anlamlı hiçbir şey doğrulamayan testler (konu 1.2'nin eşik manipülasyonunun bu metriğe uygulanışı), altta yatan sorunu düzeltmek yerine başarısız testleri devre dışı bırakmak ya da silmek ve test etmesi zor kodu neden zor test edildiğini ele almak yerine kapsama hesabının tamamen dışında bırakmak. Yalnızca kapsama yüzdesine güvenmek yerine, bir test örneklemini periyodik olarak doğrudan denetleyin ve gerçek doğrulamalarını (assertion) okuyun.

### CI hattınızda bir kapsama tavanı değil, bir kapsama tabanı belirleyin

Derleme hattınızı, yeni kod için kapsama kararlaştırılan tabanın altına düşerse başarısız olacak şekilde yapılandırın; bu, her değişikliğin genel sayıyı yükseltmesini şart koşmak yerine gerilemeyi önler. Bu ayrım önemlidir: bir taban geri kaymaya karşı korur, ama sayıyı biraz daha yukarı itmek için yazılan düşük değerli testleri doğuran acımasız yukarı doğru baskıyı yaratmaz.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca kapsama yüzdesi | Ucuz, basit, araçlarca geniş desteklenir | Kolayca manipüle edilir; doğrulamayı değil yürütmeyi ölçer |
| Kapsama artı mutasyon testi | Testlerin davranışı gerçekten kontrol ettiğini doğrular, manipülasyona direnir | Hesaplama açısından daha pahalıdır; araç yatırımı gerektirir |
| Kod tabanı genelinde tek tip kapsama hedefi | Söylemesi ve uygulaması basit | Düşük riskli kodda emek israf eder; başka yerlerde riske göre yetersiz yatırım yapar |
| Riske dayalı, önce kritik yol kapsaması | Emeği en çok önem taşıyan yere yoğunlaştırır | Gerçekten kritik yolları doğru belirlemek için muhakeme gerektirir |

Temel gerilim **basitlik ile dürüstlük** arasındadır. Tek bir kapsama yüzdesini raporlamak ve hedef koymak kolaydır, ama bu basitlik, teşvik edilen bir sayıya dönüştüğünde onu bu kadar kolay manipüle edilebilir kılan şeyin ta kendisidir. Gerilimi şöyle çözün: mutasyon testinin ve riske dayalı önceliklendirmenin eklediği karmaşıklığı dürüst bir sinyalin bedeli olarak kabul edin ve ekibinize, kritik yollara doğru biçimde yoğunlaşmış ve güçlü bir mutant öldürme oranıyla desteklenen daha düşük bir genel kapsama sayısının, daha yüksek, daha tek tip dağılmış ama daha az etkili doğrulanmış bir sayıdan neden daha değerli olduğunu açıkça anlatın.

## Ekibinizle tartışılacak sorular

1. **En yüksek riskli kod yollarımızdaki mutant öldürme oranımız nedir ve aynı koddaki kapsama yüzdemizle nasıl karşılaştırılır?** Yüksek bir kapsama sayısı ile düşük bir mutant öldürme oranı arasındaki büyük boşluk, kapsamanın tek başına size sandığınız şeyi söylemediğinin en net işaretidir.

2. **Hiç bir testi, ne doğrulaması gerektiğini pek düşünmeden, esas olarak bir kapsama sayısını artırmak için yazdık mı?** Burada dürüst olun; bu, ekiplerin kabul etmek istediğinden daha sık olur, özellikle bir kapsama kapısı bir birleştirmeyi (merge) engellerken ve teslim tarihi baskısı varken.

3. **Kapsama çabamız en yüksek riskli kod yollarımıza mı yoğunlaşmış, yoksa o kod başarısız olursa sonuç ne olursa olsun tek tip mi yayılmış?** Mevcut kapsama dağılımınızı kod tabanınızın dürüst bir risk değerlendirmesiyle karşılaştırın ve uyumsuzluğu arayın.

4. **Hiç başarısız bir testi, ortaya çıkardığı asıl sorunu düzeltmek yerine devre dışı bıraktık ya da sildik mi?** Bu, kapsama manipülasyonunun en zararlı biçimlerinden biridir; çünkü raporlanan kapsama sayısı neredeyse hiç oynamazken gerçek korumayı aktif olarak ortadan kaldırır.

5. **CI hattımız yeni kod için bir kapsama tabanı mı uyguluyor, yoksa azalan getirilere bakmaksızın sürekli daha yüksek bir tavan mı dayatıyor?** Mevcut kapı tasarımınızın doğru teşviki (gerilemeye karşı korumak) mı yoksa yanlış olanı (düşük değerli test dolgusunu ödüllendiren acımasız yukarı baskı) mı yarattığını tartışın.

6. **Kod tabanımızda hangi kod kapsama hesabının dışında tutuluyor ve bu dışlama haklı mı, yoksa gerçek bir test boşluğunu mu gizliyor?** Gerçek dışlama yapılandırmanızı gözden geçirin; bu listenin, her dışlamanın hâlâ haklı olup olmadığı kimse tarafından yeniden gözden geçirilmeden zamanla sessizce büyümesi yaygındır.

## Sektörel bakış

**Girişim (startup).** Bu kadar erken aşamada resmî kapsama hedefleri çoğu zaman gereksizdir; test yazma emeğini, hâlâ hızla değişen ve zaten yakında büyük ölçüde yeniden yazılabilecek bir kod tabanında genel bir yüzde kovalamak yerine, doğrudan en riskli, iş açısından en kritik kod yollarınıza (genellikle ödeme ya da çekirdek iş akışı mantığı) odaklayın.

**Küçük işletme.** Çoğu CI platformu kapsamayı en az kurulum maliyetiyle otomatik raporlar; onu belirli bir hedef yüzdenin peşinden koşmak için değil, tamamen test edilmemiş kritik kodu fark etmek için kullanın ve mutasyon testini ancak ortaya çıkardığına göre harekete geçebilecek mühendislik kapasitesine ulaştığınızda düşünün.

**Kurumsal.** Kurum genelinde, her yere uygulanan kapsama hedefleri bu ölçekte yaygın ve sonuçları ağır bir hatadır; çünkü bu konunun anlattığı manipülasyonu onlarca ekipte aynı anda teşvik eder. Servis kritikliğine göre değişen, riske dayalı kapsama beklentileri oluşturun ve mutasyon testi altyapısına özellikle en riskli sistemleriniz için yatırım yapın.

**Kamu.** Kapsama gereksinimleri bazen tedarik ya da uyum belgelerinde kalite güvencesinin kaba ve kolay belirtilen bir vekili olarak yer alır. Mümkün olduğunda, sözleşmeyle zorunlu kılınan her kapsama yüzdesini bir mutasyon testi ya da kusur temelli etkinlik gereksinimiyle eşleştirin; böylece sözleşmesel teşvik, bu konunun uyardığı düşük değerli test dolgusunu istemeden ödüllendirmesin.

## Örnekler

**Kurumsal.** Bir e-ticaret platformunun yönetimi, tüm yeni kod için şirket genelinde yüzde 95 kapsama şartı koymuş ve bunu sert bir CI kapısı olarak uygulamıştı. İki yıl sonra, sözde iyi test edilmiş kodda görülen üretim kusurları dalgasının tetiklediği bir denetim, kod tabanının büyük bölümünde yüzde 40'ın altında bir mutant öldürme oranı buldu: ekipler, teslim tarihi baskısı altında yalnızca kapıyı geçmek için, kod yollarını çalıştıran ama davranışları hakkında anlamlı doğrulama yapmayan testler yazmıştı. Şirket genel kapsama şartını riske göre katmanlandırılmış bir politikayla değiştirdi: ödeme ve kimlik doğrulama kodu için katı kapsama artı yüzde 80 öldürme oranı eşiğinin üzerinde zorunlu mutasyon testi, düşük riskli iç araçlar için ise çok daha hafif bir kapsama tabanı. Bu hem boşa giden test emeğini azalttı hem de gerçekten kritik yollardaki kusur oranlarını ölçülebilir biçimde iyileştirdi.

**Kamu.** Bir halk sağlığı kurumunun yardım uygunluk sistemine, geliştirme tedarikçisiyle yapılan sözleşme gereği yüzde 90 test kapsaması sürdürmesi şart koşulmuştu. Kapsama şartı karşılanmış olmasına rağmen üretime çıkan önemli bir uygunluk hesaplama kusurunun ardından yapılan olay sonrası inceleme, sorumlu fonksiyonun kapsamasını tamamen, fonksiyonu geçerli girdilerle çağıran ama sınır koşullarını ya da geçersiz girdileri hiç test etmeyen testlerle elde ettiğini buldu; kusur tam da orada ortaya çıkmıştı. Kurumun gözden geçirilmiş tedarikçi sözleşmesi artık uygunluk hesaplama kodu için kapsamanın yanında belgelenmiş bir mutasyon testi puanı da şart koşuyor; bu, uyumlu ama etkisiz testin sözleşmeyi karşılamasına izin veren belirli boşluğu kapatıyor.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Kapsamayı mutasyon testiyle eşleştirmenin getirisi, görünürdeki test kalitesi ile gerçek test kalitesi arasındaki boşluğu bir üretim kusuruna mal olmadan yakalamaktır. Yukarıdaki e-ticaret örneği örüntüyü açıkça gösteriyor: yalnızca bir kapsama şartı, bir kusur dalgasının sonunda ortaya çıkardığı yanlış bir güven duygusu üretmişti; bu, boşluğu daha erken yakalayacak olan mutasyon testi yatırımından çok daha yüksek bir maliyetle ortaya çıktı.

Toplam sahip olma maliyeti (TCO), basit kapsama araçlandırmasından daha pahalı çalışan ve bu yüzden genellikle tüm kod tabanı yerine kritik yol koduna ayrılan mutasyon testinin hesaplama maliyetini, artı sonuçları yorumlayıp harekete geçmek için gereken mühendislik zamanını içerir. Bu maliyet özellikle, test etkinliğindeki fark edilmemiş bir boşluğun maliyetinin en yüksek olduğu en riskli kod için haklıdır.

## Anti-desenler ve tuzaklar

- **Kapsama yüzdesini doğrudan bir kalite hükmü saymak:** doğrulamayı değil yürütmeyi ölçer.
- **Esas olarak bir kapsama kapısını geçmek için test yazmak:** konu 1.2'nin uyardığı düşük değerli, eşik manipülasyonu örüntüsünü tam olarak üretir.
- **Altta yatan sorunu düzeltmek yerine başarısız testleri devre dışı bırakmak ya da silmek:** raporlanan sayıyı neredeyse hiç etkilemeden gerçek korumayı ortadan kaldırır.
- **Kod riskine bakmadan tek tip bir kapsama hedefi uygulamak:** düşük riskli kodda emek israf eder ve gerçekten kritik yollara yetersiz yatırım yapar.
- **Dışlama listesinin zamanla sessizce büyümesine izin vermek:** gerçek test boşluklarını teknik olarak doğru ama yanıltıcı bir kapsama rakamının arkasına saklar.
- **Kapsama tabanı yerine kapsama tavanının peşinde koşmak:** gerçek doğrulama yerine test dolgusunu ödüllendiren acımasız bir yukarı baskı yaratır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Kapsama ölçülmez ya da taban, hedef veya etkinlik kontrolü olmadan tutarsız biçimde ölçülür.
- **Seviye 2, Gelişim:** Bir kapsama hedefi vardır ve izlenir, ama emeğin nasıl dağıtılacağını ne mutasyon testi ne de riske dayalı önceliklendirme belirler.
- **Seviye 3, Standartlaştırma:** Kapsama tabanları CI'da tutarlı biçimde uygulanır; kapsama emeğinin nerede yoğunlaşacağını riske dayalı önceliklendirme yönlendirir.
- **Seviye 4, Yönetim:** Mutasyon testi kritik yol kodunda çalışır, kapsamanın yanında karşılanması gereken izlenen bir öldürme oranı eşiği vardır ve dışlama listeleri periyodik olarak denetlenir.
- **Seviye 5, Orkestrasyon:** Kurum, mutasyon testine dayalı önceliklendirmeye bağlanan belirli kusur azalmalarını gösterebilir; kapsama ve etkinlik verisi birlikte test yatırımı kararlarını doğrudan besler.

## Tartışma önerileri

1. En kritik tek kod yolumuzdaki mutant öldürme oranı nedir ve bunu bilip bilmiyoruz?
2. Hiç yalnızca bir kapsama kapısını geçmek için düşük değerli bir test yazdık mı?
3. Mevcut kapsama emeğimiz riskin en yüksek olduğu yere mi yoğunlaşmış, yoksa tek tip mi yayılmış?
4. Şu anda hangi kod kapsama hesabının dışında tutuluyor ve bu dışlama hâlâ haklı mı?
5. En yüksek riskli sistemimizde bir mutasyon testi yatırımı, hesaplama maliyetine değer mi?

## Temel çıkarımlar

- Test kapsaması **yürütmeyi ölçer, doğrulamayı değil**; kapsanan bir satır, anlamlı biçimde kontrol edilip edilmediğini söylemez.
- Kapsamayı **mutasyon testiyle** eşleştirin; böylece testlerin yalnızca kodu çalıştırmadığını, gerçek hataları da yakaladığını doğrulayın.
- Test emeğini tüm kod tabanında tek tip kapsama kovalamak yerine **kritik, yüksek riskli yollara** yoğunlaştırın.
- Kapsamayı acımasızca azamiye çıkarılacak bir tavan olarak değil, **gerilemeye karşı koruyan bir taban** olarak kullanın.
- Belirli kapsama manipülasyonu örüntülerine dikkat edin: **düşük değerli testler, devre dışı bırakılmış başarısız testler ve sessizce büyüyen dışlama listeleri**.

## Kaynaklar ve ileri okuma

- *Working Effectively with Legacy Code*, Michael Feathers (mevcut, test edilmesi zor kod tabanları için test kapsama stratejisi).
- Jia, Yue, and Mark Harman, "An Analysis and Survey of the Development of Mutation Testing," *IEEE Transactions on Software Engineering* (2011): mutasyon testi tekniklerinin ve etkinliklerinin kapsamlı bir taraması.
- *xUnit Test Patterns*, Gerard Meszaros (yalnızca kapsama tatmin eden değil, gerçekten etkili testler yazmakla ilgili test tasarım örüntüleri).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez Humble ve Gene Kim (test uygulamaları ile teslimat performansı arasındaki ilişki).
