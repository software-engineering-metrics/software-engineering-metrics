# 4.4 Statik analiz ve kod kokusu metrikleri

## Genel bakış ve motivasyon

**[Statik analiz](https://en.wikipedia.org/wiki/Static_program_analysis)** araçları kaynak kodu çalıştırmadan tarar ve kusurlarla, güvenlik açıklarıyla ya da sürdürülebilirlik sorunlarıyla ilişkili olduğu bilinen örüntüleri işaretler: erişilemeyen kod, kapatılmamış kaynaklar, şüpheli tür dönüşümleri, kopyalanmış mantık ve gerekli olarak hata olmayan ama kodu anlamayı, test etmeyi ya da güvenle değiştirmeyi zorlaştırmaya yatkın yapısal örüntülerden oluşan daha geniş **kod kokuları** (code smells) kategorisi. Statik analiz, bu bölümün diğer konularındaki daha hedefli metriklerin altındaki otomatik, sürekli katmandır: her commit'te çalışır ve sorunları periyodik bir denetimi beklemek yerine tanıtıldıkları anda yüzeye çıkarır.

Bu konunun merkezî kaygısı, statik analiz araçlarının raporladığı şey ile gerçekten önemli olan şey arasındaki boşluktur. Bir araç büyük bir kod tabanında binlerce bulguyu işaretleyebilir ve tek başına bulgu sayısı zayıf bir metriktir; çünkü önemsiz stil tercihleriyle gerçek, ciddi riski birbirine karıştırır ve gerçek düzeltmeler kadar kolayca bastırma (suppression) yoluyla da aşağı çekilebilir. Statik analizin değeri ham bulgu sayısından değil, bir kurumun önem derecesini ne kadar iyi ayıkladığından, gerilemeyi nasıl önlediğinden ve aracın yargısını insan incelemesinin tamamlayıcısı yerine yerine geçen bir şey olarak görme cazibesine nasıl direndiğinden gelir.

Büyük ekipler için statik analiz, hiçbir ekibin elle tam olarak inceleyemeyeceği büyüklükteki bir kod tabanında kod kalitesi ve güvenlik hijyeninin bir tabanını uygulatmanın tek pratik yoludur. Güvenli kodlama uygulamalarıyla ilgili uyum gereksinimleriyle sık karşılaşan kurumsal ve kamu kuruluşları, bir insan incelemecinin sorunu fark etmiş olması gibi tesadüfi hâllerde değil, temel düzeyde bir incelemenin tutarlı biçimde uygulandığının belgelenmiş, denetlenebilir kanıtı olarak statik analize dayanır.

## Temel ilkeler

- **Ham bulgu sayısı tek başına zayıf bir metriktir.** Önemsiz ve ciddi sorunları birbirine karıştırır ve gerçek düzeltmeler yerine bastırma yoluyla manipüle edilebilir.
- **Önem derecesi ayıklaması hacimden daha önemlidir.** Az sayıda kritik bulgu, çok sayıda önemsiz bulgudan daha fazla ilgiyi hak eder.
- **Statik analiz insan incelemesini tamamlar; yerini almaz.** Araçlar örüntüleri yakalar; niyeti ya da iş bağlamını anlamazlar.
- **"Yeni eklenen sorunlar" eğilimi, toplam birikim sayısından daha uygulanabilirdir.** Mevcut uygulamanın iyileşip iyileşmediğini ya da gerileyip gerilemediğini söyler.
- **Yanlış pozitifler araca duyulan güveni aşındırır.** Yönetilmeyen bir yanlış pozitif oranı, ekiplerin gerçek olanlar dahil bulguları topyekûn yok saymasına yol açar.

## Öneriler

### Ham sayıyı değil, önem derecesiyle ağırlıklandırılmış bulguları izleyin

Statik analiz araçlarınızı bulguları önem derecesine göre (kritik, yüksek, orta, düşük ya da eşdeğer bir ölçek) sınıflandıracak biçimde yapılandırın ve düz bir toplam sayı yerine önem derecesiyle ağırlıklandırılmış bir eğilimi izleyin. Sıfır kritik bulguya ve beş yüz düşük önemli stil önerisine sahip bir kod tabanı, elli kritik bulguya ve hiç stil sorunu olmayan bir kod tabanından çok farklı bir durumdadır; ham sayı ise bunları, öyle olmadıkları hâlde, kabaca eşdeğer sayar.

### Toplam geçmiş birikimine değil, yeni eklenen bulgulara göre kapı koyun

Çoğu yerleşik kod tabanı, mevcut uygulamadan öncesine dayanan ve hepsini bir kerede düzeltmenin engelleyici ölçüde pahalı olacağı bir eski bulgu birikimi taşır. Tüm birikim temizlenene kadar bütün işi engellemek yerine, CI'ı belirli bir değişikliğin kararlaştırılan bir önem eşiğinin üzerinde yeni bulgular ekleyip eklemediğine göre kapılayın; böylece birikimin normal bakım yoluyla yavaş yavaş küçülmesine izin verirken daha fazla birikmesini önlersiniz. Bu ayrım, konu 4.2'nin kapsama tabanı önerisini yansıtır: gerçekçi olmayan, hepsi bir seferde düzeltme talep etmek yerine gerilemeye karşı koruyun.

### Yanlış pozitif oranını aktif olarak yönetin

Bulguların bir örneklemini, özellikle hacmi yüksek herhangi bir kategoriyi periyodik olarak gözden geçirin ve kaçının gerçekten yanlış pozitif olduğunu, yani aracın bağlam içinde aslında sorunlu olmayan bir örüntüyü işaretlediği durumları kontrol edin. Ekiplerin, çıktının çoğu gürültü olduğu için aracın çıktısını topyekûn yok sayma alışkanlığı geliştirmesine izin vermek yerine, kural yapılandırmasını özellikle gerçekten gürültülü, düşük değerli kural kategorilerini bastıracak biçimde ayarlayın. Yüksek, yönetilmeyen bir yanlış pozitif oranı, bir statik analiz programının güvenilirliğini yok etmenin tek başına en hızlı yoludur.

### Statik analiz bulgularını otomatik bir hüküm değil, inceleme için bir işaret olarak kullanın

Meşru, yanlış pozitif olmayan bir bulgu bile her zaman otomatik, zorunlu bir düzeltmeyi gerektirmez; işaretlenen bazı örüntüler, aracın göremediği belirli bağlam göz önüne alındığında kabul edilebilirdir. Bir insanın bulguyu gözden geçirip ya düzelteceği ya da belgelenmiş bir gerekçeyle açıkça ve görünür biçimde muaf tutacağı hafif bir süreç kurun; her bulguyu körü körüne zorunlu kılmak ya da zamanla aracın değerini aşındıran sessiz, belgelenmemiş bastırmaya izin vermek yerine.

### Statik analizi bu bölümdeki diğer kod kalitesi metrikleriyle birleştirin

Statik analiz bulguları, karmaşıklık puanları (konu 4.1) ve sıcak nokta verisi (konu 4.3) rakip metrikler değil, tamamlayıcı kanıtlardır. Çözülmemiş statik analiz bulgularının yüksek yoğunlukta bulunduğu ve aynı zamanda bir değişim yoğunluğu-karmaşıklık sıcak noktası olan bir dosya, önceliklendirilmiş ilgi için özellikle güçlü bir adaydır; çünkü birden çok bağımsız sinyal aynı sonuca yakınsıyor.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Metrik olarak ham bulgu sayısı | Raporlaması basit | Önemsiz ve ciddi sorunları birbirine karıştırır; bastırma yoluyla kolayca manipüle edilir |
| Önem derecesiyle ağırlıklandırılmış eğilim | Gerçek riski daha doğru yansıtır | Sürekli önem derecesi sınıflandırması bakımı gerektirir |
| Tüm geçmiş birikime göre kapı | Sonuçta kod temizliğini azamiye çıkarır | Yerleşik kod tabanları için çoğu zaman pratik değildir; tüm işi durdurabilir |
| Yalnızca yeni bulgulara göre kapı | Pratik, gerilemeyi önler, birikimin yavaş yavaş küçülmesine izin verir | Kasıtlı bir iyileştirme planı olmadan eski sorunlar daha uzun süre kalır |

Temel gerilim **titizlik ile pratiklik** arasındadır. Herhangi bir yeni iş ilerlemeden önce tüm geçmiş birikimin çözülmesini talep eden bir statik analiz politikası titizdir, ama gerçek bir geçmişi olan herhangi bir kod tabanı için genellikle pratik değildir ve bu baskı altındaki ekipler bulguları gerçekten düzeltmek yerine topyekûn bastırmaya eğilimlidir. Gerilimi şöyle çözün: yeni bulgulara sıkı biçimde kapı koyun; bu sırada eski birikime karşı, bu konunun ve konu 4.3'ün önerdiği önem derecesi ve çapraz doğrulama tekniklerini kullanarak önceliklendirilmiş, kasıtlı olarak ölçülü adımlarla ayrı bir iyileştirme çalışması yürütün.

## Ekibinizle tartışılacak sorular

1. **Önem derecesiyle ağırlıklandırılmış bir eğilimi mi izliyoruz, yoksa yalnızca ham toplam bulgu sayısını mı?** Gerçek panonuzu açıp kontrol edin; birçok araçta ham sayı varsayılan olarak yaygındır ve önem derecesini düzgün yüzeye çıkarmak için çoğu zaman bilinçli bir yapılandırma gerekir.

2. **Çözülmemiş bulgulardan oluşan mevcut eski birikimimiz ne kadar ve onu azaltmak için kasıtlı, ölçülü bir planımız var mı, yoksa sadece süresiz mi birikiyor?** Ele alınmamış, sessizce büyüyen bir birikim yaygındır ve incelenmeden bırakılmak yerine dürüstçe adlandırılmaya değer.

3. **En yüksek hacimli bulgu kategorilerimiz için tahmini yanlış pozitif oranımız nedir ve buna karşılık kural yapılandırmasını ayarladık mı?** Bunu hiç kontrol etmediyseniz, en gürültülü kategorinizden bir grup bulgu örnekleyin ve kaçının gerçekten harekete geçirilebilir olduğunu dürüstçe değerlendirin.

4. **Ekibimizdeki mühendisler statik analiz bulgularına güveniyor mu, yoksa çıktının çoğu gürültü olduğu için onları duymamayı mı öğrendi?** Bu, ekibe sormaya değer doğrudan, dürüst bir iç his kontrol sorusudur; çünkü göz ardı edilen bir araç, kuramsal kabiliyeti ne olursa olsun gerçek bir değer sağlamaz.

5. **Bir ekibin belirli bağlam göz önüne alındığında muaf tutulması gerektiğine inandığı meşru bir bulguyu şu anda nasıl ele alıyoruz?** Sürecinizin bunu görünür, belgelenmiş bir karar hâline getirip getirmediğini ya da zamanla aracın sinyalini aşındıran sessiz, belgelenmemiş bastırma yoluyla gerçekleşip gerçekleşmediğini kontrol edin.

6. **Statik analiz bulguları, karmaşıklık puanları ve sıcak nokta verisi aynı dosya ya da modülde nerede yakınsıyor?** Bu üç sinyali açıkça çapraz doğrulayın; birden çok bağımsız metrikte yakınsama, herhangi bir tekinden daha güçlü bir önceliklendirme sinyalidir.

## Sektörel bakış

**Girişim (startup).** Baştan CI'a entegre edilmiş hafif, ücretsiz bir statik analiz aracı ucuz bir sigortadır ve bir eski birikimin birikme şansı bulmadan önce gerçek sorunları erken yakalar. Mevcut her kuralı hemen etkinleştirmek yerine, kural kümesini gerçekten yüksek değerli, düşük gürültülü kategorilere odaklı tutun.

**Küçük işletme.** Çoğu modern dil ekosistemi yetkin, ücretsiz statik analiz araçları içerir; makul bir varsayılan kural kümesiyle CI'da etkinleştirmek çok az yatırım gerektirir. Önceden var olan herhangi bir birikimi hepsini birden çözmeye çalışmak yerine yeni bulgulara kapı koymaya odaklanın.

**Kurumsal.** Bu ölçekte yanlış pozitif oranını ve önem derecesi ayıklamasını kasıtlı olarak yönetmek vazgeçilmez hâle gelir; çünkü onlarca ekipte aşırı gürültü üreten kötü ayarlanmış bir araç kurum genelinde yok sayılır. Statik analiz araç yapılandırmasının kendisi için özel bir sahibe yatırım yapın ve kural ayarlamayı tek seferlik bir kurulum işi değil, sürekli bir disiplin olarak ele alın.

**Kamu.** Statik analiz bulguları, özellikle güvenlikle ilgili olanlar, çoğu zaman doğrudan uyum ve denetim gereksinimleriyle ilgilidir. Bulguların nasıl ayıklandığı, düzeltildiği ya da kayıtlı bir gerekçeyle resmî olarak muaf tutulduğu konusunda belgelenmiş, denetlenebilir bir süreç sürdürün; çünkü bu belgelendirme çoğu zaman harici bir denetçinin görmek isteyeceği şeyin kendisidir.

## Örnekler

**Kurumsal.** Bir yazılım şirketinin statik analiz panosu, birkaç yıl önem derecesiyle ağırlıklandırılmış ayıklama yapılmadığı için kod tabanında kırk binden fazla çözülmemiş bulgu biriktirmişti; mühendisler panoya bakmayı büyük ölçüde bırakacak kadar büyük bir sayı. Gözden geçirilmiş bir yaklaşım bulguları önem derecesine göre sınıflandırdı, ikiyüzden azının gerçekten kritik olduğunu buldu ve CI'ı özellikle yeni kritik ve yüksek önemli bulgulara göre kapılarken düşük önemli birikimin normal kod bakımı yoluyla yavaş yavaş küçülmesine izin verdi. Altı ay içinde kritik bulgular tek haneye düştü ve daha önemlisi, mühendis anket verileri, araç artık bunaltıcı ve göz ardı edilen bir birikim yerine yönetilebilir, gerçekten harekete geçirilebilir bir sinyal sunduğu için aracın çıktısına yeniden güven duyulduğunu gösterdi.

**Kamu.** Bir savunma kurumunun yazılım tedarik zinciri güvenliği politikası, herhangi bir yayından önce sıfır çözülmemiş bulguyla statik analiz taraması şart koşuyordu; uygulamada, uygulanamaz bir ya hep ya hiç kapısı altında geliştirme ekiplerini, yalnızca yayın tarihlerini karşılamak için bazıları gerçek güvenlik sorunu olan çok sayıda bulguyu bastırmaya yönelten bir politika. Gözden geçirilmiş politika, herhangi bir yayının yeni kritik ya da yüksek önemli bulgu eklememesini şart koştu; buna eski birikim için belgelenmiş, izlenen bir iyileştirme planı ve zaman çizelgesi eşlik etti ve plan her çeyrek bir güvenlik yönetişim kurulu tarafından gözden geçirildi. Bu pratik, aşamalı yaklaşım hem yeni koda gerçek güvenlik incelemesini geri getirdi hem de gerçek düzeltmeler yerine çoğunlukla bastırma üreten önceki uygulanamaz politikanın aksine, on sekiz ay boyunca eski birikime karşı gerçek, ölçülebilir ilerleme sağladı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

İyi yönetilen statik analizin getirisi, gerçek kusurları ve güvenlik açıklarını üretime ulaşmadan yakalamaktır; üstelik aynı kapsama için gereken eşdeğer insan inceleme emeğinden çok daha düşük bir maliyetle. Yukarıdaki savunma kurumu örneği bunu yanlış yapmanın maliyetini gösteriyor: uygulanamaz, ya hep ya hiç bir politika bastırmayı körükleyerek gerçek güvenlik incelemesini aslında azaltmıştı; bu, amacının tam tersiydi.

Toplam sahip olma maliyeti, çoğu zaman yaygın dil ekosistemleri için ücretsiz ya da düşük maliyetli olan aracın kendisini ve önem derecesi ayıklaması, yanlış pozitif yönetimi ve eski birikim iyileştirme planlamasının sürekli disiplinini içerir. Bir statik analiz programının gerçek, güvenilen bir değer sağlayıp sağlamadığını ya da göz ardı edilen bir gürültüye dönüşüp dönüşmediğini, araçtan çok bu sürekli disiplin belirler.

## Anti-desenler ve tuzaklar

- **Ham bulgu sayısını metrik saymak:** önemsiz ve ciddi sorunları birbirine karıştırır ve bastırma yoluyla kolayca manipüle edilir.
- **Herhangi bir yeni iş ilerlemeden önce tüm geçmiş birikimin çözülmesini şart koşmak:** genellikle pratik değildir ve gerçek düzeltmeler yerine bastırmayı körükler.
- **Yanlış pozitif oranını göz ardı etmek:** yönetilmeyen bir gürültü düzeyi, ekiplerin aracın çıktısını gerçek bulgular dahil tamamen duymamasına yol açar.
- **Meşru bulguların sessiz, belgelenmemiş bastırılması:** aracın sinyalini aşındırır ve uyum amaçları için hiçbir denetim izi bırakmaz.
- **Bir statik analiz bulgusunu insan incelemesi olmadan otomatik bir hüküm saymak:** aracın göremediği bağlamı kaçırır.
- **Bulguları karmaşıklık ve sıcak nokta verisiyle hiçbir zaman çapraz doğrulamamak:** yakınsayan kanıtın sunduğu daha güçlü önceliklendirme sinyalini kaçırır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Statik analiz çalıştırılmaz ya da bulgular önem derecesi ayıklaması ya da eğilim takibi olmadan yönetilmeden birikir.
- **Seviye 2, Gelişim:** CI'da bir miktar statik analiz çalışır, ama önem derecesi ayıklaması tutarsızdır ve yanlış pozitif oranı yönetilmez.
- **Seviye 3, Standartlaştırma:** Bulgular önem derecesiyle ağırlıklandırılır ve CI kurum genelinde yeni kritik ve yüksek önemli bulgulara göre kapı koyar.
- **Seviye 4, Yönetim:** Yanlış pozitif oranı aktif olarak ayarlanır, eski birikimin belgelenmiş, ölçülü bir iyileştirme planı vardır ve muafiyetler görünür ve belgelenmiştir.
- **Seviye 5, Orkestrasyon:** Statik analiz bulguları, karmaşıklık verisi ve sıcak nokta verisi yatırımı önceliklendirmek için rutin olarak çapraz doğrulanır ve kurum, programa bağlanan belirli, ölçülebilir kusur ya da güvenlik iyileştirmelerini gösterebilir.

## Tartışma önerileri

1. Mevcut önem derecesiyle ağırlıklandırılmış eğilimimiz nedir ve iyileşiyor mu, kötüleşiyor mu?
2. Eski bulgu birikimimiz ne kadar büyük ve onu azaltmak için kasıtlı bir planımız var mı?
3. En gürültülü bulgu kategorimiz için tahmini yanlış pozitif oranımız nedir?
4. Ekibimizdeki mühendisler şu anda statik analiz çıktımıza güveniyor mu, yoksa göz ardı mı ediyor?
5. Kod tabanımızda statik analiz bulguları karmaşıklık ya da sıcak nokta verisiyle nerede yakınsıyor?

## Temel çıkarımlar

- Önemsiz ve ciddi sorunları birbirine karıştıran ham bulgu sayısı yerine **önem derecesiyle ağırlıklandırılmış bir eğilimi** izleyin.
- Gerçekçi olmayan, hepsi bir seferde düzeltme talep etmeden gerilemeyi önlemek için CI'ı tüm geçmiş birikime değil, **yeni eklenen bulgulara** göre kapılayın.
- **Yanlış pozitif oranını** aktif olarak yönetin; yönetilmeyen gürültü araca duyulan güveni yok eder ve bulguların topyekûn göz ardı edilmesine yol açar.
- Bulguları otomatik bir hüküm ya da sessiz bastırma değil, görünür ve belgelenmiş muafiyetlerle **insan incelemesi için bir işaret** olarak ele alın.
- Yakınsayan, daha güçlü önceliklendirme kanıtı için statik analizi **karmaşıklık ve sıcak nokta verisiyle** (konu 4.1, 4.3) çapraz doğrulayın.

## Kaynaklar ve ileri okuma

- *Static Program Analysis*, Anders Møller ve Michael I. Schwartzbach (statik analiz tekniklerinin kuramsal ve pratik temelleri).
- OWASP'ın statik uygulama güvenliği testi (SAST) rehberliği; OWASP Foundation'ın güvenli yazılım geliştirme uygulamalarına dair daha geniş kaynaklarının parçası.
- *Refactoring: Improving the Design of Existing Code*, Martin Fowler (birçok statik analiz aracının yararlandığı kod kokusu kataloğu).
- *Working Effectively with Legacy Code*, Michael Feathers (yerleşik bir kod tabanında eski kalite sorunları birikimini yönetmek).
