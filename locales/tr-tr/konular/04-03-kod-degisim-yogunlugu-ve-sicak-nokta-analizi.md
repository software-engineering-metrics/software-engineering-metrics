# 4.3 Kod değişim yoğunluğu ve sıcak nokta analizi

## Genel bakış ve motivasyon

**Kod değişim yoğunluğu** (code churn), bir dosya ya da modülün zaman içinde ne sıklıkla değiştiğini ölçer: art arda gelen commit'ler boyunca eklenen, değiştirilen ve silinen satırlar. Tek başına değişim yoğunluğu oldukça zayıf bir sinyaldir: bazı dosyalar aktif ve sağlıklı bir geliştirme altında olduğu için sık değişir, bazıları ise ihmal edildikleri için değil, kararlı ve doğru oldukları için nadiren değişir. Bu konunun yaklaşımının asıl tanı gücü, değişim yoğunluğunu karmaşıklıkla (konu 4.1) birleştirmekten gelir: hem sık değişen hem çok karmaşık olan bir dosya, yani bir **sıcak nokta** (hotspot), orantısız biçimde kusur kaynağı ve ekip hızı üzerinde bir yük olmaya yatkındır ve ampirik araştırma bunu pek çok kod tabanında ve kurumda tutarlı biçimde doğrular.

Adam Tornhill'in yazılım analitiği çalışmalarıyla popülerleşen **sıcak nokta analizi**, hedeflerini bulmak için hiçbir elle tarama ya da öznel muhakeme gerektirmediği için özellikle değerlidir. [Sürüm kontrolü](https://en.wikipedia.org/wiki/Version_control) geçmişi, hem değişim yoğunluğunu hem de statik analiz araçlarıyla birlikte karmaşıklığı kod tabanındaki her dosya için otomatik olarak hesaplamak üzere gereken her şeyi zaten içerir. Bu, bir ekibin ya da kurumun, anekdotlara ya da bir retrospektifteki en yüksek sesli şikâyete değil gerçek kanıta dayanarak, kod tabanının hangi küçük kısmının önce yeniden düzenleme ilgisini hak ettiğini tam olarak belirlemesini sağlar.

Büyük ekipler için sıcak nokta analizi gerçek bir kaynak dağıtımı problemini çözer: yüz binlerce satırlık bir kod tabanı, herhangi bir ekibin kapsamlı biçimde yeniden düzenleyebileceğinden çok daha fazla kod içerir ve en kötü sorunların nerede olduğuna dair sezgi sıklıkla yanlıştır; en son kimin şikâyet ettiği ya da kıdemli bir mühendisin hangi dosyadan hoşlanmadığı tarafından çarpıtılır. Büyük, uzun ömürlü kod tabanlarını yöneten kurumsal ve kamu kuruluşları, gerçekten kıt olan yeniden düzenleme bütçesini en büyük getiriyi sağlayacak koda yöneltmek için bu veriye dayalı önceliklendirmeye bel bağlar.

## Temel ilkeler

- **Değişim yoğunluğu tek başına zayıf bir sinyaldir; karmaşıklıkla birleşince güçlüdür.** Gerçek bir sıcak noktayı belirleyen şey, metriklerden biri değil, birleşimdir.
- **Sıcak nokta analizi elle tarama gerektirmez.** Sürüm kontrolü geçmişi, onu otomatik hesaplamak için gereken her şeyi zaten içerir.
- **Sıcak nokta bir önceliklendirme sinyalidir, otomatik bir hüküm değil.** Belirli bir sıcak noktanın hangi eylemi gerektirdiğine karar vermek için insan muhakemesi hâlâ gerekir.
- **Sık değişim kendiliğinden kötü değildir.** Bazı değişim yoğunluğu bir kalite sorununu değil, sağlıklı ve aktif geliştirmeyi yansıtır.
- **Bu analiz, tam olarak sezginin başarısız olduğu yerde ölçeklenir:** hiçbir bireyin tarayıp yalnızca hisle önceliklendiremeyeceği kadar büyük kod tabanlarında.

## Öneriler

### Değişim yoğunluğunu ve karmaşıklığı birlikte hesaplayın, birleşimlerine göre sıralayın

Sürüm kontrolü geçmişinden, anlamlı bir pencere (genellikle altı ay ile bir yıl) boyunca dosya başına değişim sıklığını çıkarın ve aynı dosyalar için bir karmaşıklık ölçüsüyle (konu 4.1) eşleştirin. Dosyaları metriklerden birine göre değil, birleşimlerine göre sıralayın (genellikle değişim yoğunluğu ile karmaşıklığın çarpımı); çünkü temel araştırmanın yüksek kusur oranlarıyla ve bakım maliyetiyle tutarlı biçimde ilişkilendirdiği şey bu birleşimdir.

### Harekete geçmeden önce en üstteki sıcak noktaları insan muhakemesiyle inceleyin

Sıralanmış bir sıcak nokta listesi, otomatik bir eylem listesi değil, ilgi gösterilecek adayları belirler. En üstteki sıcak noktaların her biri için insan gözüyle inceleyin: bu gerçekten yeniden düzenlenmesi gereken kötü tasarlanmış bir kod mu, yoksa aktif ve gelişen iş mantığının merkezinde durduğu için meşru biçimde sık değişmesi gereken bir dosya mı; ikinci durumda öncelik yapısal bir yeniden yazım yerine daha iyi testler ya da daha net dokümantasyon olabilir. Bu, konu 4.1'in temel ve tesadüfi karmaşıklık ayrımını yansıtır ve burada birleşik değişim yoğunluğu-karmaşıklık sinyaline uygulanır.

### Sıcak noktaları olay ve kusur verisiyle çapraz doğrulayın

Mümkün olduğunda, belirlediğiniz sıcak noktaların gerçek üretim olaylarıyla (konu 6.2) ya da kaçan kusur verisiyle (konu 5.1) ilişkili olup olmadığını kontrol edin. Güçlü bir ilişki, sıcak nokta analizini kendi kod tabanınız için gerçekten öngörücü olarak doğrular ve harekete geçmenin iş gerekçesini güçlendirir; zayıf ya da hiç olmayan bir ilişki ise ya bir veri kalitesi sorununa ya da değişim yoğunluğu ile karmaşıklığın sizin özel bağlamınızda önceliklendirmek için doğru sinyal birleşimi olmadığına işaret eder.

### Tek bir anlık görüntüyü değil, art arda gelen analizler boyunca sıcak nokta eğilimini izleyin

Sıcak nokta analizini düzenli aralıklarla (çeyreklik yaygındır) yeniden çalıştırın ve daha önce belirlenen sıcak noktaların iyileşip iyileşmediğini, kötüleşip kötüleşmediğini ya da çözülüp çözülmediğini ve yenilerinin ortaya çıkıp çıkmadığını izleyin. Tekrar tekrar işaretlenmesine rağmen birden çok analiz döngüsü boyunca süren bir sıcak nokta, ya iyileştirme emeğinin gerçekte uygulanmadığını ya da önceki bir iyileştirme girişiminin asıl altta yatan sorunu ele almadığını gösterir.

### Sıcak nokta verisini takım düzeyindeki önceliklendirme konuşmalarını bilgilendirmek için kullanın, onların yerine koymayın

Sıcak nokta analizini, bir ekibin şu anda en çok neyin önemli olduğuna dair kendi bağlamsal muhakemesini geçersiz kılan otomatik bir yetki olarak değil, bir önceliklendirme tartışmasında kanıt olarak sunun. Bir ekibin bilinen bir sıcak noktayı geçici olarak geri plana itmek için iyi ve meşru nedenleri olabilir (örneğin planlanmış bir yeniden yazım yaklaşıyorsa artımlı yeniden düzenleme boşa emek olur) ve analiz bu konuşmanın yerini almamalı, ona bilgi vermelidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Sezgiye dayalı önceliklendirme | Hızlı, araç gerektirmez, ekibin bağlamsal bilgisinden yararlanır | Yakınlık, kişisel tercih ve en yüksek sesle şikâyet edenin etkisiyle çarpılır |
| Yalnızca değişim yoğunluğu | Hesaplaması basit | Tek başına zayıf sinyal; sık değişim kendiliğinden kötü değildir |
| Karmaşıklıkla birleşmiş değişim yoğunluğu (sıcak nokta analizi) | Güçlü, kanıta dayalı, mevcut veriden otomatik | İki veri kaynağını birleştirmeyi ve sonuçları muhakemeyle yorumlamayı gerektirir |
| Olay verisiyle çapraz doğrulanmış sıcak nokta analizi | Doğrulanmış, önceliklendirme için en güçlü kanıt | Olaydan koda güvenilir bağlantı gerektirir; her kurumda yoktur |

Temel gerilim **kanıt ile bağlam** arasındadır. Sıcak nokta analizi, büyük, yabancı ya da uzun ömürlü bir kod tabanının ölçeğinde sezgiye dayalı önceliklendirmenin eşleşemeyeceği nesnel, ölçeklenebilir kanıt sağlar, ama bir ekibin belirli bir sıcak noktanın şu anda neden önemli olduğuna ya da olmadığına dair sahip olduğu bağlamsal muhakemeden yoksundur. Gerilimi şöyle çözün: sıcak nokta analizini bir önceliklendirme konuşmasının kanıt tabanı olarak görün; zamanlama ve ödünleşimlere dair ekibin kendi bağlamsal muhakemesiyle birleştirin, asla onun yerine koymayın.

## Ekibinizle tartışılacak sorular

1. **Değişim yoğunluğu ve karmaşıklığın birleşimine göre sıralanmış ilk beş sıcak noktamız nedir ve bu sıralama, en kötü sorunlarımızın nerede olduğuna dair ekip sezgimizle örtüşür mü?** Analizi çalıştırın ve sonucu, ekibinizin veriyi görmeden önce tahmin edeceği şeyle karşılaştırın; tutarsızlıklar çoğu zaman en değerli bulgudur.

2. **Belirlenen sıcak noktalarımız gerçek üretim olaylarıyla ya da kaçan kusur verisiyle ilişkili mi?** Bunu kontrol edecek veriye sahipseniz doğrudan yapın; sahip değilseniz, bu boşluğun kendisi, üzerine inşa edilecek bir şey olarak adlandırılmaya değer.

3. **Şu anki en üstteki sıcak noktamız için altta yatan sorun, meşru biçimde sık değişim gerektiren temel karmaşıklık mı, yoksa bir yeniden düzenlemenin gerçekten çözebileceği tesadüfi karmaşıklık mı?** Dosyayı birlikte gözden geçirin ve bu yargıyı iki cevaptan birini varsaymak yerine açıkça verin.

4. **Daha önce belirlenmiş bir sıcak nokta, işaretlenmesine rağmen birden çok analiz döngüsü boyunca sürdü mü?** Öyleyse nedenini dürüstçe araştırın: iyileştirme hiç denenmedi mi, yoksa önceki bir deneme asıl nedeni ele almadı mı?

5. **Yeniden düzenleme işini şu anda kanıta mı yoksa en son ya da en yüksek sesle kimin şikâyet ettiğine mi göre önceliklendiriyoruz?** Ekibinizin gerçek mevcut önceliklendirme sürecini ve bunun kanıta dayalı bir sıcak nokta analizinin önereceği şeyle nasıl karşılaştığını dürüstçe değerlendirin.

6. **Mevcut en üstteki sıcak noktamızı bir yıl daha ele almadan bırakmak bize kusur oranı ya da teslimat yavaşlaması olarak neye mal olur?** Bu soru, bir önceliklendirme kararına çapa olabilecek somut bir maliyet tahmini zorlar; sıcak noktayı soyut, kolayca geri plana itilen bir kaygı olarak bırakmaz.

## Sektörel bakış

**Girişim (startup).** Tüm ekibin hâlâ topluca kafasında tuttuğu küçük, genç bir kod tabanında resmî sıcak nokta analizi genellikle gereksizdir. Teknik, kod tabanı hiçbir bireyin en kötü alanları yalnızca hafızadan güvenilir biçimde belirleyemeyeceği büyüklüğü geçtiğinde değerli hâle gelir; bu çoğunlukla sürekli büyümenin ilk bir iki yılı içinde bir yerdedir.

**Küçük işletme.** Ücretsiz ya da düşük maliyetli araçlar, mevcut sürüm kontrolü geçmişinizden en az kurulumla doğrudan değişim yoğunluğu verisi çıkarabilir; bunu mevcut linter'ınızın ya da statik analiz aracınızın zaten raporladığı karmaşıklık verisiyle birleştirin; bu ölçekte özel ticari sıcak nokta analizi yazılımına yatırım yapmayın.

**Kurumsal.** Sıcak nokta analizi, kanıta dayalı önceliklendirmenin en çok getiri sağladığı yerdir; çünkü yüzlerce servise ve binlerce dosyaya yayılan bir kod tabanı ölçeğinde sezgi gerçekten başarısız olur. Bu analizi tüm kod tabanında düzenli olarak çalıştırmaya ve yeniden düzenleme yatırımı için doğrulanmış, savunulabilir bir gerekçe kurmak üzere olay verisiyle çapraz doğrulamaya yatırım yapın.

**Kamu.** Bazen onlarca yıllık, uzun ömürlü sistemler sıcak nokta analizi için doğal bir uyumdur; çünkü birikmiş sürüm kontrolü geçmişi, sistemin hangi bölümlerinin zaman içinde gerçekten sorunlu olduğuna dair zengin, uzun vadeli bir sinyal sunar. Bu kanıta dayalı yaklaşım, fon onaylamak için bir mühendisin gayriresmî görüşünden fazlasına ihtiyaç duyan paydaşlara modernizasyon yatırımını gerekçelendirmek için de ikna edici, somut bir araçtır.

## Örnekler

**Kurumsal.** Onlarca servise yayılan iki milyon satırdan fazla koda sahip bir sigorta şirketinin hasar işleme platformunda, "hasar doğrulama modülü"nün sorunlu olduğuna dair yıllar süren gayriresmî şikâyetler birikmişti, ama bu şikâyetlerden resmî hiçbir önceliklendirme çıkmamıştı. Altı aylık değişim yoğunluğu verisini karmaşıklık puanlarıyla birleştiren bir sıcak nokta analizi, gerçek en üstteki sıcak nokta olarak tamamen farklı bir dosyayı belirledi: nadiren konuşulan bir bağımlılığın derinlerine gömülmüş, paylaşılan bir para birimi dönüştürme yardımcısı; hiçbir retrospektif şikâyetinde hiç gündeme gelmemişti. Olay verisiyle çapraz doğrulama, bu yardımcının geçen yıl finansal hesaplama kusurlarının orantısız bir payında rol oynadığını doğruladı ve herkesin gayriresmî olarak suçladığı modül yerine bu belirli yardımcının hedefli yeniden düzenlenmesi, izleyen çeyrek içinde ilgili olaylarda ölçülebilir bir azalma sağladı.

**Kamu.** Bir eyalet motorlu taşıt kurumunun onlarca yıllık ehliyet sistemi, bir modernizasyon iş gerekçesinin parçası olarak sıcak nokta analizinden geçti. Analiz, toplam kod tabanının yüzde 3'ünden azını oluşturan ve hem değişim yoğunluğunun hem karmaşıklığın orantısız bir payından sorumlu küçük bir dosya kümesini belirledi; kurumun olay kaydıyla çapraz doğrulama, aynı kümenin önceki üç yılda raporlanan tüm sistem kusurlarının yaklaşık yüzde 40'ından sorumlu olduğunu gösterdi. "Sistem eski ve modernleştirilmeli" şeklindeki genel bir iddiadan çok daha ikna edici olan bu somut, kanıta dayalı bulgu, çok daha pahalı bir tam sistem değişimi yerine özellikle o kümeye odaklanan hedefli, artımlı bir modernizasyon çalışması için başarılı bir bütçe talebinin merkezî unsuru oldu.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Sıcak nokta analizinin getirisi hedefli, kanıta dayalı yatırımdır: yukarıdaki iki örnek de resmî analizin yeniden düzenleme ilgisini gayriresmî şikâyetin odaklandığı yerden uzaklaştırıp verinin sorunun gerçekte nerede yaşadığını gösterdiği yere yönlendirdiği, hedefsiz ya da sezgiye dayalı bir yatırımın sağlayacağından ölçülebilir biçimde daha iyi bir getiri ürettiği bir durumu gösteriyor.

Toplam sahip olma maliyeti düşüktür; çünkü değişim yoğunluğu verisi doğrudan mevcut sürüm kontrolü geçmişinden gelir ve karmaşıklık verisi genellikle statik analiz araçlarından (konu 4.4) zaten mevcuttur. Asıl yatırım, periyodik analiz emeği ile sonuçları yorumlamak ve belirlenen her sıcak noktanın hangi eylemi gerektirdiğine karar vermek için harcanan insan muhakemesi zamanıdır.

## Anti-desenler ve tuzaklar

- **Karmaşıklık olmadan yalnızca değişim yoğunluğunu kullanmak:** tek başına zayıf bir sinyaldir ve sağlıklı, aktif geliştirilen kodu yanlış pozitif olarak işaretleyebilir.
- **Sıcak nokta sıralamasını insan muhakemesi olmadan otomatik bir eylem listesi saymak:** doğru yanıtı belirleyen temel-tesadüfi ayrımını kaçırır.
- **Yeniden düzenlemeyi kanıt yerine en yüksek sesli şikâyete göre önceliklendirmek:** emeği sıklıkla verinin sorunun gerçekte nerede olduğunu gösterdiği yerden uzağa yönlendirir.
- **Sıcak noktaları hiçbir zaman olay ya da kusur verisiyle çapraz doğrulamamak:** analize göre harekete geçmenin gerekçesini güçlendiren doğrulama adımını kaçırır.
- **Analizi bir kez çalıştırıp bir daha tekrarlamamak:** iyileştirme çabasının zaman içinde gerçekten işe yarayıp yaramadığını kaçırır.
- **Kalıcı biçimde işaretlenen bir sıcak noktayı, iyileştirmenin neden tutmadığını araştırmadan yok saymak:** tekrarlanan analizin tanısal değerini boşa harcar.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Yeniden düzenleme öncelikleri sezgiyle ya da şikâyet hacmiyle belirlenir; kararı hiçbir değişim yoğunluğu ya da karmaşıklık verisi bilgilendirmez.
- **Seviye 2, Gelişim:** Bazı ekipler değişim yoğunluğu ya da karmaşıklık verisini gayriresmî olarak kontrol eder, ama tutarlı, kurum geneli bir sıcak nokta analizi uygulaması yoktur.
- **Seviye 3, Standartlaştırma:** Değişim yoğunluğunu ve karmaşıklığı birleştiren sıcak nokta analizi düzenli çalışır ve kurum genelinde yeniden düzenleme önceliklendirmesini tutarlı biçimde bilgilendirir.
- **Seviye 4, Yönetim:** Sıcak noktalar, analizi doğrulamak için olay ve kusur verisiyle çapraz doğrulanır; art arda gelen döngüler boyunca eğilim aktif olarak izlenir.
- **Seviye 5, Orkestrasyon:** Kurum, sıcak noktaya dayalı yeniden düzenleme yatırımından kaynaklanan belirli, ölçülebilir kusur oranı ya da teslimat iyileştirmelerini gösterebilir ve analiz, mühendislik yatırım kararlarına rutin ve güvenilen bir girdidir.

## Tartışma önerileri

1. Bu analizi bugün çalıştırsaydık en üstteki sıcak nokta listemiz nasıl görünürdü?
2. Bu liste, ekibimizin en kötü sorun alanlarına dair mevcut gayriresmî hissiyle örtüşür mü, yoksa çelişir mi?
3. Sıcak noktaları gerçek olaylarla çapraz doğrulamak için elimizde veri var mı?
4. Bilinen bir sorun alanı, onu düzeltmek için önceki girişimlere rağmen sürdü mü ve neden?
5. Mevcut en üstteki sıcak noktamızı bir yıl daha ele almadan bırakmak bize neye mal olur?

## Temel çıkarımlar

- **Karmaşıklıkla birleşen değişim yoğunluğu**, gerçek sıcak noktaları metriklerden biri tek başına olduğundan çok daha güvenilir biçimde belirler.
- Sıcak nokta analizi **elle tarama gerektirmez**; mevcut sürüm kontrolü ve statik analiz verisinden otomatik hesaplanabilir.
- Sıcak nokta sıralamasını otomatik bir hüküm değil, **önceliklendirme için kanıt** olarak görün; insan muhakemesi hâlâ gereklidir.
- Analizi doğrulamak ve harekete geçmenin gerekçesini güçlendirmek için **sıcak noktaları olay ve kusur verisiyle çapraz doğrulayın**.
- İyileştirmenin gerçekten işe yaradığını doğrulamak için sıcak noktaları yalnızca bir kez anlık görüntü olarak değil, **art arda gelen analiz döngüleri boyunca** izleyin.

## Kaynaklar ve ileri okuma

- *Your Code as a Crime Scene*, Adam Tornhill (sürüm kontrolü verisinden değişim yoğunluğunu ve karmaşıklığı birleştiren sıcak nokta analizi üzerine temel metin).
- *Software Design X-Rays*, Adam Tornhill (sürüm kontrolü geçmişini kullanan davranışsal kod analizi için ileri teknikler).
- Nagappan, Nachiappan, and Thomas Ball, "Use of Relative Code Churn Measures to Predict System Defect Density," *ICSE* (2005): değişim yoğunluğu ile kusur yoğunluğu arasındaki ilişki üzerine ampirik araştırma.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler (tespit edildikten sonra tesadüfi karmaşıklığı ele alma teknikleri).
