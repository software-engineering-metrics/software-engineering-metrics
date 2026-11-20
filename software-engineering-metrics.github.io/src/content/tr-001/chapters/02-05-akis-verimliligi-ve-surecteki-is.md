# 2.5 Akış verimliliği ve süreçteki iş

## Genel bakış ve motivasyon

**Akış verimliliği**, bir iş parçası için etkin sürenin toplam süreye oranıdır: bir değişiklik on saat boyunca etkin biçimde kodlanıyor, inceleniyor ve test ediliyorsa, ama tüm yolculuğu boyunca kuyruklarda toplam doksan saat boşta bekliyorsa, akış verimliliği yüzde 10'dur. Çoğu yazılım teslimat hattı dürüstçe ölçüldüğünde yüzde 10 ile 25 arasında bir akış verimliliğine denk gelir; çabanın baskın olmasını bekleyenleri şaşırtan bir sonuçtur. Çoğu teslimat sisteminde baskın maliyet, işin yapılmasının ne kadar sürdüğü değil, başlanmak için ne kadar beklediğidir.

**[Süreçteki iş](https://en.wikipedia.org/wiki/Work_in_process)** (WIP), bir ekipte ya da sistemde herhangi bir anda üzerinde etkin biçimde çalışılan öğelerin sayısıdır; konu 2.4'ün "akış yükü" dediği nicelikle aynıdır. Bu konunun arkasındaki sezgiye aykırı bulgu, operasyon yönetiminde onlarca yıllık araştırmayla desteklenmiş ve yazılım teslimatı için kanban ve kuyruk kuramıyla biçimselleştirilmiştir: WIP'i sınırlamak verimi azaltmaz, *artırma* eğilimindedir. Çünkü aynı anda yolda olan daha az iş, daha az bağlam değiştirme, daha kısa kuyruklar ve öğe başına daha hızlı tamamlanma demektir; aynı anda daha az iş yapmanın toplamda daha az çıktı vermesi gerekir gibi hissettirse de.

Büyük ekipler için akış verimliliğini anlamak, hemen her teslimat sorununun çerçevesini "insanların daha hızlı çalışması gerekiyor"dan "işin daha az beklemesi gerekiyor"a çevirir. Bu yeniden çerçeveleme önemlidir; çünkü birinci çerçeve bireyler üzerinde baskıyı davet eder, konu 2.6'nın uyardığı tuzak tam da budur. İkincisi ise kuyruk yapısının, inceleme kapasitesinin ve aynı anda ne kadar işe başlandığının araştırılmasını davet eder; gerçek ve sürdürülebilir iyileşme genellikle oradadır. Paylaşılan ekipler üzerinde birçok eşzamanlı girişimi idare eden kurumsal organizasyonlar, özellikle yüksek WIP'e ve düşük akış verimliliğine yatkındır; çünkü yeni işe başlamak, yoldaki her şeyi sessizce yavaşlatırken bile her zaman ilerleme gibi hissettirir.

## Temel ilkeler

- **Çoğu teslimat hattında baskın olan etkin çaba değil, bekleme süresidir.** Yüzde 25'in altındaki akış verimliliği tipiktir, bozuk bir ekibin işareti değil.
- **Süreçteki işi sınırlamak, bağlam değiştirmeyi azaltarak ve kuyrukları kısaltarak verimi azaltmak yerine artırma eğilimindedir.**
- **Yeni işe başlamak ilerleme gibi hissettirir; değeri gerçekten teslim eden işi bitirmektir.** Bunlar aynı şey değildir ve kuruluşlar sık sık karıştırır.
- **Yüksek WIP, ölçülene dek çoğu zaman görünmezdir.** Bir ekip, hiç kimsenin bireysel olarak fark ettiğinden çok daha fazla eşzamanlı işi idare ediyor olabilir.
- **Bu, bireysel değil sistem düzeyinde bir metriktir.** WIP sınırlarını bireyleri cezalandırmak için uygulamak, tekniğin tüm amacını yanlış okumaktır.

## Öneriler

### Çabanın darboğaz olduğunu varsaymadan önce akış verimliliğini ölçün

Konu 2.6'daki cycle time aşama verisini kullanarak, son değişikliklerden temsil edici bir örneklem için etkin sürenin geçen toplam süreye oranını hesaplayın. Bunu ilk kez ölçen çoğu ekip sayının ne kadar düşük olduğuna şaşırır ve bu şaşkınlık başlı başına değerlidir: dikkati "daha çok çalışın"dan "kuyruklanmayı azaltın"a yönlendirir; bu hemen her zaman daha verimli kaldıraçtır.

### Açık bir süreçteki iş sınırı koyun ve bunu görünür biçimde uygulayın

Bir ekibin ya da bireyin aynı anda etkin olarak üzerinde çalışabileceği öğe sayısını, paylaşılan bir panoda görünür biçimde sınırlayın (fiziksel ya da dijital bir kanban panosu klasik uygulamadır). Sınıra ulaşıldığında ekibin bir sonraki eylemi yeni bir şeye başlamak değil, yoldaki bir şeyi bitirmeye yardım etmektir. Yalın üretimden alınıp kanbanda biçimselleştirilmiş bu tek uygulama, bir yazılım ekibinin elindeki en tutarlı biçimde etkili akış iyileştirmelerinden biridir ve uygulaması neredeyse hiçbir şeye mal olmaz.

### Bir WIP sınırını bireysel kota olarak değil, sistem kısıtı olarak ele alın

Bir WIP sınırı, herhangi bir kişinin ne kadar işe dokunmasına izin verildiğini değil, *sistemin* (bir ekibin, paylaşılan bir inceleme kuyruğunun, paylaşılan bir ortamın) aynı anda ne kadar işi yolda tuttuğunu yönetir. Sınırı "yalnızca iki biletiniz açık olabilir" gibi bireysel bir performans kotası olarak uygulamak tekniği yanlış uygular ve bu kitabın baştan sona uyardığı türden bireysel düzeyde manipülasyon riskini doğurur. Sınır, tüm sistem boyunca akışı korumak için vardır ve uygulanması kişisel bir tavan değil, bir ekip normu olmalıdır.

### Yalnızca ne kadar süre değil, işin neden boşta beklediğini araştırın

Akış verimliliği analizi uzun bekleme süreleri ortaya çıkardığında özellikle nedenini sorun: iş bir inceleyici müsait olmadığı için mi, paylaşılan bir test ortamı ayrıldığı için mi, başka bir ekibe bağımlılık henüz gelmediği için mi bekliyor? Bunların her birinin çözümü farklıdır. Bu özel araştırma olmadan verilen genel bir "bekleme süresini azaltın" talimatı, genel ve etkisiz yanıtlar üretme eğilimindedir.

### İlk iyileşmeden sonra WIP'in yeniden tırmanmasına dikkat edin

Bir WIP sınırını başarıyla benimseyen ekipler, yeni girişimlere başlama baskısı geri döndükçe ("yalnızca bu seferlik, bu acil şeye de başlamamız gerekiyor") sınırın zamanla aşındığını sık görür. Her WIP sınırı istisnasını sessiz, rutin bir geçersiz kılma değil, belirtilmiş bir gerekçesi olan bilinçli, görünür bir karar olarak ele alın; böylece sınırın disiplini sessizce ilk haline çürümesin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| WIP sınırı yok | Esnek hissettirir; yeni işe başlarken sürtünme yok | Bağlam değiştirme ve kuyruklanma her şeyi sessizce yavaşlatır |
| Ekip düzeyinde WIP sınırı | Verimi ve akış verimliliğini ölçülebilir biçimde artırır | Özellikle teslim tarihi baskısı altında uygulama disiplini gerektirir |
| Bireysel düzeyde WIP kotası | İfade etmek basit | Tekniği yanlış uygular; bireysel manipülasyon riski taşır |
| Katı, esnemeyen WIP sınırı | Azami akış verimliliği faydası | Gerçekten acil, istisnai durumlarda katı hissettirebilir |

Temel gerilim, **esneklik ile akış** arasındadır. Acil göründüğünde yeni işe başlamak duyarlı hissettirir, ama akış verimliliği ve WIP araştırması bu esnekliğin, hiçbir şeyi hızlı bitirememe pahasına geldiğini tutarlı biçimde gösterir; çünkü daha fazla eşzamanlı iş, yoldaki her şey için daha uzun kuyruklar ve daha fazla bağlam değiştirme demektir. Gerilimi şöyle çözün: varsayılan olarak ekip düzeyinde bir WIP sınırı benimseyin; gerçek acil durumlar için bilinçli, görünür ve nadir bir istisna süreci olsun. Ne katı, istisnasız bir kural ne de sınırsız, esnek bir kontrolsüzlük olsun.

## Ekibinizle tartışılacak sorular

1. **Gerçek cycle time verisinden ölçülen gerçek akış verimliliğimiz nedir ve bu sayı bizi şaşırtıyor mu?** Çoğu ekip bunu hiç hesaplamamıştır ve gerçekte çıkandan çok daha yüksek olduğunu varsayar. Bu konudaki başka herhangi bir şeyi tartışmadan önce son değişikliklerden bir örneklem çekin ve oranı dürüstçe hesaplayın.

2. **Şu anda tüm ekip genelinde gerçekte ne kadar süreçteki işimiz var ve saymadan önce bu sayıyı biri biliyor muydu?** Yüksek WIP, açıkça ölçülene dek çoğu zaman görünmezdir; çünkü her birey yalnızca kendi dilimini görür. Bugün üzerinde kimsenin etkin olarak çalışmadığı işler dahil, şu anda devam eden her şeyi sayın.

3. **Bir WIP sınırı benimsesek, yeni bir acil talebe nasıl yanıt verdiğimizde neyin değişmesi gerekirdi?** Bu soru, bir WIP sınırının kesmek için tasarlandığı gerçek organizasyonel alışkanlığı, yani yeni işe refleks olarak başlamayı ortaya çıkarır ve bir sınırı uygulamayı denemeden önce, sonra değil, tartışmaya değer.

4. **İşimiz hattımızda boşta beklediğinde özel neden nedir ve her seferinde aynı neden mi?** "İşler etrafta bekliyor" şeklindeki genel bir his, özel ve yinelenen bir nedenden daha az yararlıdır: müsait olmayan bir inceleyici, ayrılmış paylaşılan bir ortam, ekipler arası bir bağımlılık. Gerçek yakın tarihli örneklerden asıl örüntüyü adlandırın.

5. **Hiç bir WIP sınırı benimseyip sonra istisnalarla sessizce aşındığını izledik mi?** Bu son derece yaygındır ve dürüstçe tartışmaya değer: ilk istisnaya hangi baskı yol açtı ve istisnalar, kimse bunu açıkça kararlaştırmadan yeni normale mi dönüştü?

6. **Bizim bağlamımızdaki bir WIP sınırı birey, ekip ya da paylaşılan kaynak düzeyinde (bir inceleme kuyruğu ya da test ortamı gibi) mi uygulanmalıydı?** Farklı darboğazlar farklı düzeylerde sınırlar gerektirir ve bir sınırı yanlış düzeyde uygulamak (paylaşılan kuyruk tavanı yerine bireysel kotalar) tüm tekniği yanlış uygulayabilir.

## Sektörel bakış

**Girişim (startup).** Az kişiyle WIP çoğu zaman doğal olarak düşüktür, çünkü aynı anda çok işe başlayacak kadar mühendis yoktur. Risk bunun tersidir: bir kurucu ya da baş mühendis kişisel olarak fark ettiğinden çok daha fazla eşzamanlı girişimi idare ediyor olabilir; resmî kanban aracı olmadan bile ölçmeye değer.

**Küçük işletme.** Açık bir sütun sınırı olan, fiziksel ya da basit dijital bir araçtan oluşan görünür bir pano, gelişmiş akış metrikleri araçlarına yatırım yapmadan faydanın çoğunu almaya yeter. Cömert bir sınırla başlayın ve ekip disipline alıştıkça kademeli olarak sıkılaştırın.

**Kurumsal.** Yüksek WIP burada özellikle yaygın ve özellikle maliyetlidir; çünkü birçok eşzamanlı stratejik girişim aynı paylaşılan mühendislik kapasitesi için yarışır ve yenisine başlamak, onu sponsorluk eden kişiye her zaman ilerleme gibi görünür. WIP'i yalnızca ekip düzeyinde değil portföy düzeyinde de görünür kılın; böylece liderlik, mevcutları bitirmeden bir girişime daha başlamanın maliyetini görebilir.

**Kamu.** Çok yıllı programlar çoğu zaman, her biri tek tek haklı çıkarılmış birçok iş akışı boyunca, toplamı organizasyon genelinde görünmeden muazzam örtük WIP biriktirir. Portföy düzeyinde WIP görünürlüğünü, gayriresmî de olsa getirmek, işi sıralamak yerine her şeyi paralel yürütmek için çoğu zaman en ikna edici tek argümandır; yüksek WIP'in akış verimliliği maliyeti ölçüldüğünde gözle görülür biçimde birikir.

## Örnekler

**Kurumsal.** Bir finansal hizmetler şirketinin platform ekibi yalnızca on iki mühendisle on sekiz eşzamanlı girişimi idare ediyordu; yeni bir mühendislik direktörü doğrudan isteyene dek kimsenin gerçekten hesaplamadığı bir WIP-kapasite oranı. Ekibin işi genelinde akış verimliliği yüzde 12'nin altında ölçüldü. Ekip, iki mühendis başına bir etkin girişim şeklinde açık bir WIP sınırı benimsedi ve kapasiteyi ince yaymayı sürdürmek yerine öncelikli olmayan birkaç girişimi bilinçli olarak duraklattı. Çeyrek başına gerçekten tamamlanan girişim olarak ölçülen verim, ekip herhangi bir anda gözle görülür biçimde "daha az iş yapıyor" olsa da iki çeyrek içinde iki katından fazla arttı.

**Kamu.** Ulusal bir altyapı kurumunun dijital dönüşüm programı, her biri kendi sponsoruna ve kendi gerekçesine sahip, portföyü boyunca kırktan fazla eşzamanlı iş akışı biriktirmişti ve toplam süreçteki işe dair tek bir görünüm yoktu. Program düzeyinde bir akış verimliliği incelemesi, ortanca iş akışının geçen süresinin yüzde 15'inden azını etkin geliştirmede geçirdiğini, geri kalanını paylaşılan kaynakları beklemekle geçirdiğini buldu: küçük bir merkezî mimari inceleme ekibi, paylaşılan bir test ortamı ve kurumlar arası onay. Program, kırkının hepsini paralel yürütmek yerine iş akışlarını sıralayan açık portföy düzeyinde WIP sınırları getirdi ve kurumun kendi takibi, aynı anda çalışan toplam sayı keskin biçimde düşerken bile etkin kalan iş akışları için ölçülebilir ölçüde daha hızlı tamamlanma gösterdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Akış verimliliğini ve WIP'i bilinçli yönetmenin getirisi sezgiye aykırıdır ama iyi belgelenmiştir: bir organizasyon aynı anda daha az iş yaptığında verim düşmez, yükselme eğilimindedir; çünkü daha az bağlam değiştirme ve daha kısa kuyruklar, her iş parçasının daha hızlı bitmesi demektir. Yukarıdaki finansal hizmetler örneği, eşzamanlı işi bilinçli olarak azaltarak iki katına çıkan verim, kuruluşlar gerçekten ölçüp akış verimliliğine göre hareket ettiğinde, daha çok paralel işin her zaman daha çok ilerleme anlamına geldiğini varsaymak yerine, yaygın bir örüntüdür.

Bu disiplini benimsemenin toplam maliyeti çoğunlukla teknik değil organizasyoneldir: görünür bir pano, üzerinde anlaşılmış bir WIP sınırı ve sınıra ulaşıldığında yeni işe başlamaya hayır deme disiplini. Bu disiplini sürdürmek benimsemekten zordur; bu yüzden yukarıdaki "WIP'in yeniden tırmanmasına dikkat edin" önerisi, ilk benimsemenin kendisi kadar önemlidir.

## Anti-desenler ve tuzaklar

- **Akış verimliliğini ölçmeden etkin çabanın teslimat süresine egemen olduğunu varsaymak:** genellikle yanlıştır ve iyileştirme çabasını yanlış kaldıraca yöneltir.
- **Bir WIP sınırını sistem kısıtı yerine bireysel kota olarak uygulamak:** tekniği yanlış uygular ve bireysel manipülasyon riski taşır.
- **İlerleme gibi hissettirdiği için yeni işe refleks olarak başlamak:** akış verimliliğinin ve WIP sınırlarının kesmek için tasarlandığı temel alışkanlık.
- **WIP sınırı istisnalarının rutin ve görünmez hale gelmesine izin vermek:** disiplini, kimse bunu bilerek kararlaştırmadan ilk haline geri aşındırır.
- **WIP'i yalnızca ekip düzeyinde ölçüp portföy düzeyindeki aşırı yükü kaçırmak:** birçok eşzamanlı stratejik girişim yürüten büyük kuruluşlarda yaygındır.
- **Düşük bir akış verimliliği sayısını kötü bir ekibin işareti saymak:** çoğu teslimat hattı için tipiktir ve bir hüküm değil, araştırma için bir başlangıç noktasıdır.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Süreçteki iş izlenmez; ekipler toplam eşzamanlı yük hakkında hiçbir görünürlük olmadan yeni işe refleks olarak başlar.
- **Seviye 2, Gelişim:** Bazı ekipler gayriresmî bir pano kullanır, ama WIP sınırları tutarlı uygulanmaz ve akış verimliliği hiç hesaplanmaz.
- **Seviye 3, Standartlaşma:** Ekiplerin sistem düzeyinde açık, görünür WIP sınırları vardır ve akış verimliliği gerçek cycle time verisinden periyodik olarak ölçülür.
- **Seviye 4, Yönetim:** WIP sınırı istisnaları bilinçli, görünür kararlar olarak izlenir; akış verimliliği zaman içindeki aşınma için izlenir ve düştüğünde araştırılır.
- **Seviye 5, Orkestrasyon:** WIP yalnızca ekip düzeyinde değil portföy düzeyinde görünür ve yönetilir; organizasyon eşzamanlı işi bilinçli olarak azaltmaktan kaynaklanan belirli verim iyileştirmelerini gösterebilir.

## Tartışma önerileri

1. Gerçek verilerden dürüstçe hesaplanan gerçek akış verimliliğimiz nedir?
2. Şu anda, bu tartışmadan önce kimsenin saymadığı ne kadar süreçteki işimiz var?
3. Gerçek bir WIP sınırı uygulamak için neye hayır demek zorunda kalırdık?
4. Hattımızda işin boşta beklemesinin en yaygın tek nedeni nedir?
5. Organizasyonumuzun neresinde portföy düzeyindeki WIP görünmez ve muhtemelen çok yüksek?

## Temel çıkarımlar

- Etkin sürenin toplam süreye oranı olan **akış verimliliği**, gerçek teslimat hatlarında tipik olarak yüzde 25'in altındadır; baskın olan çaba değil bekleme süresidir.
- **Süreçteki işi sınırlamak**, bağlam değiştirmeyi azaltarak ve kuyrukları kısaltarak verimi azaltmak yerine artırma eğilimindedir.
- **WIP sınırını sistem kısıtı olarak** uygulayın, hiçbir zaman bireysel kota olarak değil.
- Genel bir "bekleme süresini azaltın" talimatı vermek yerine işin boşta beklemesinin **özel nedenini** araştırın.
- WIP sınırlarının **rutin istisnalarla aşınmasına** dikkat edin; her istisnayı bilinçli, görünür bir karar olarak ele alın.
- Konu 2.4 bu niceliği **akış yükü** olarak adlandırır ve konu 2.7 ilişkiyi Little yasası olarak biçimselleştirir: süreçteki iş, kararlı herhangi bir kuyruk için varış hızı çarpı cycle time'a eşittir.

## Kaynaklar ve ileri okuma

- *The Principles of Product Development Flow*, by Donald G. Reinertsen
  (queueing theory, batch size, and WIP limits in product development).
- *Kanban: Successful Evolutionary Change for Your Technology Business*, by
  David J. Anderson (the foundational text on WIP limits and flow for
  software teams).
- *Actionable Agile Metrics for Predictability*, by Daniel S. Vacanti
  (flow efficiency measurement and flow-based forecasting).
- *The Goal*, by Eliyahu M. Goldratt (theory of constraints and the
  counterintuitive relationship between local busyness and system
  throughput).
