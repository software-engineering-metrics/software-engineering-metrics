# 2.7 Kuyruk kuramı

## Genel bakış ve motivasyon

**[Kuyruk kuramı](https://en.wikipedia.org/wiki/Queueing_theory)** (queueing theory), bekleme sıralarının matematiksel incelemesidir. Yazılım mühendisliği metriklerini anlatan bir kitaba garip bir konu gibi gelebilir. Ancak bir teslimat hattının ne kadarının aslında kuyruk olduğunu fark ettiğinizde bu izlenim değişir: bir inceleyici bekleyen pull request, bir CI çalıştırıcısı bekleyen commit, birinin alması beklenen bir bilet, yanıt bekleyen bir müşteri destek mesajı. Konu 2.4, akış yükünü ve akış süresini tanıtmış ve bir değer akışını aşırı yüklemenin teslimatı keskin biçimde yavaşlattığını göstermişti. Konu 2.5 ve 2.6 ise teslimat süresinin çoğunun çalışma süresi değil bekleme süresi olduğunu göstermişti. Kuyruk kuramı, bunların hepsinin neden doğru olduğunu açıklayan, gözlenmiş bir örüntüden öte olan temel matematiktir.

En yararlı sonuç, operasyon araştırmacısı John Little'ın 1961'de kanıtladığı bir teorem olan **[Little yasası](https://en.wikipedia.org/wiki/Little%27s_law)**dır: kararlı bir sistemdeki ortalama öğe sayısı, öğelerin ortalama geliş hızı ile her öğenin sistemde geçirdiği ortalama sürenin çarpımına eşittir. Konu 2.4 bu sonucu Flow Framework'ün kendi adlarıyla zaten kullanmıştı: akış yükü, geliş hızı çarpı akış süresine eşittir. Kitabın daha geniş sözlüğünde ise şöyle de okunur: iş akışındaki iş (WIP, konu 2.5), yeni işin geliş hızı çarpı cycle time'a (konu 2.6) eşittir. Bu bir pratik kural ya da bazı çalışmalarda gözlenen bir korelasyon değildir. Kuyruk neyi işliyor olursa olsun, sıradaki işi nasıl seçerse seçsin, her kararlı kuyruk için geçerli olan bir kanıttır.

Büyük bir ekip için bu genellik asıl noktadır. Little yasası, kuyruk bir kanban panosu, bir mesaj aracısı ya da ortak bir CI hattı olsun, aynı biçimde çalışan bir akıl sağlığı kontrolü sunar. Ölçtüğünüz WIP, geliş hızı ve cycle time yaklaşık olarak denklemi sağlamıyorsa üç sayıdan biri yanlıştır. Bunun nedeni genellikle neyin "devam ediyor" ya da "geldi" sayıldığına dair tutarsız bir tanımdır. Kurumsal ve kamu kuruluşları, ortak kod inceleme havuzları, ortak test ortamları, ortak onay kurulları gibi onlarca kuyruğu aynı anda işletir. Little yasası, kötü bir metrik tanımını kötü bir kadro ya da süreç kararına yol açmadan yakalamak için eldeki en ucuz araçtır.

## Temel ilkeler

- **Little yasası bir kanıttır, sezgisel kural değil.** Kararlı her kuyruk için WIP, geliş hızı çarpı cycle time'a eşittir. Teslimat metriklerinizin kendi içinde tutarlı olup olmadığını hızla kontrol etmenin yoludur.
- **Kullanım oranı bekleme süresiyle doğrusal artmaz.** Ortak bir kaynak tam kullanıma yaklaştıkça kuyruk gecikmesi kademeli değil, keskin biçimde büyür. Yüzde 95 meşgul çalışan bir kaynak, yüzde 80'de çalışandan çoğunlukla "biraz daha kötü" değil, kat kat daha uzun bekler.
- **Bir kuyruğun ortalaması en kötü durumunu gizler.** Yalnızca ortalama bekleme süresini raporlamak, kapasiteye yakın uzun ve acı kuyruğu saklar. Konu 1.6'nın ortalama yerine yüzdelik dilimleri kullanmayı öğütlemesinin nedeni tam budur.
- **Bir kuyruğun nasıl tanımlandığı, her metrik gibi kolayca manipüle edilebilir.** Bir şeyin "geldi", "devam ediyor" ya da "hizmet gördü" sayılması bir tercihtir. İşin gerçekte başına gelenleri değiştirmeden panoyu güzel göstermek için ayarlanabilir.
- **Bir hat çoğunlukla kuyruklardan oluşan bir kuyruktur.** Teslimat hattı birkaç aşamayı birbirine zincirler. Diğerleri ne kadar hızlı olursa olsun, tüm zincirin hızını en yavaş aşama belirler.

## Öneriler

### Kendi sayılarınıza güvenmeden önce Little yasasıyla kontrol edin

Ekibinizin ölçülen ortalama WIP'ini, haftalık yeni öğe geliş hızını ve ortalama cycle time'ını alın. WIP'in yaklaşık olarak geliş hızı çarpı cycle time'a eşit olup olmadığına bakın. Eşit değilse kuramın yanlış olduğunu varsaymayın. Gerçek nedeni arayın: tutarsız sayılan bir aşama sınırı, "bloke" bekleyen ama hâlâ işlemde sayılan iş ya da cycle time'dan farklı bir pencerede ölçülmüş geliş hızı. Bu tek kontrol, çoğu ekibin başka türlü bulabileceğinden daha fazla hatalı ölçümlemeyi yakalar.

### Ortak, kapasite kısıtlı her kaynak için kullanım oranını doğrudan izleyin

Teslimat hattınızın birçok ekiple paylaştığı kaynakları belirleyin: kod inceleme havuzu, CI kümesi, staging ortamı. Bunları sınırlarına yakın çalıştırmayı planlamadan önce her birinin mevcut kapasitesinin ne kadarının meşgul olduğunu ölçün. Tam kapasiteye yakın çalışan ortak bir inceleyici grubu, bu duruma yol açan mütevazı talep artışından çok daha hızlı büyüyen inceleme kuyruğu bekleme süreleri üretir. Konu 2.9'un ilk incelemeye kadar geçen süreyi öncü gösterge olarak izleme önerisinin ardındaki dinamik tam budur.

### Geliş hızını, başarı, hata ve atlama oranlarını ayrı tutun

Kuyruktan çıkan her şeyi tek bir "throughput" ya da "hizmet hızı" sayısında toplamaya direnin. Dört şeyi ayrı izleyin: işin ne kadar hızlı geldiği, ne kadarının başarıyla bittiği, ne kadarının başarısız olup yeniden işlenmesi gerektiği ve ne kadarının kimse bitirmeden terk edildiği ya da sessizce düşürüldüğü. Atlama oranı sessizce arttığı için hızlı görünen bir hat aslında daha fazla teslim etmiyordur. Bunu yalnızca bu dört oranı ayrı izlemek gösterir.

### Çok aşamalı hatları kuyruklardan oluşan bir kuyruk olarak modelleyin

Bir teslimat hattını ya da olay yaşam döngüsü ve işe alım hattı gibi çok aşamalı herhangi bir süreci, ayrışmamış tek bir "süre" yığını olarak değil, bir kuyruk zinciri olarak ele alın. Genel geliş hızını ilk aşama, genel tamamlanma hızını son aşama belirler. Hattın toplam hata ve atlama sayısı da her aşamanın kendi sayılarının toplamıdır. Bu çerçeve, hangi aşamaya yatırım yapmaya değeceğini hemen gösterir: ölçümlemesi en kolay olan değil, yüksek kullanım oranı ile yüksek hata ya da atlama oranının en kötü birleşimine sahip aşama.

### Kadro ve WIP sınırlarını yalnızca throughput'a göre değil, kullanım oranını da düşünerek belirleyin

Bir ekibin kaç inceleyiciye ya da CI çalıştırıcısına ihtiyacı olduğuna karar verirken kapasiteyi ortalama geliş hızına tam olarak eşitlemeyin. Ortalama olarak yüzde 100 kullanımda çalışan bir kuyruk, pratikte fiilen sonsuz bekleme süresine sahiptir. Çünkü gerçek gelişler tam düzgün değil, düzensizdir. Bilerek boşluk payı planlayın. "İnceleyicilerimiz neredeyse her zaman meşgul" sözünü verimli kaynak kullanımının kanıtı olarak değil, gelecek bekleme süreleri için bir uyarı işareti olarak görün.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmi kuyruk modeli yok, sezgiyle kadro belirleme | Başlaması hızlı; ekip için yeni sözcük dağarcığı yok | Tam kapasiteye yakın bekleme süresinin nasıl patladığını sürekli olarak hafife alır |
| Mevcut metrikler üzerinde akıl sağlığı kontrolü olarak Little yasası | Ucuz, yeni araç gerektirmez, hatalı tanımları hızla yakalar | Yalnızca tutarlılığı denetler, nedeni kendi başına teşhis etmez |
| Tam kuyruk simülasyonu (geliş dağılımları, birden çok sunucu) | Yük altındaki bekleme süresi davranışının en doğru tahmini | Çoğu ekibin sürdüremeyeceği gerçek istatistik becerisi ve bakım gerektirir |
| Daha derin modelleme olmadan ortak kaynaklarda kullanım izleme | Basit, uygulanabilir, kontrolden çıkan bekleme sürelerinin en büyük nedenini yakalar | Kullanımın neden yüksek olduğu ya da asıl nedenle ne yapılacağı hakkında bir şey söylemez |

Temel gerilim **titizlik ile benimsenme** arasındadır. Tam bir kuyruk simülasyonu en doğru cevabı verir. Ancak hemen hiçbir mühendislik ekibi bir tane kurup sürdürmez. Kimsenin güvenmediği ya da güncellemediği bir model, hiç modelin olmamasından kötüdür. Little yasası ve temel kullanım izleme biraz kesinlikten vazgeçer. Buna karşılık özel istatistik becerisi gerektirmez ve bir ekibin konu 2.4'ten 2.6'ya kadar zaten topladığı metriklere doğrudan oturur. Öncelikle bu ucuz ve benimsenebilir kontrollere yönelin. Tam simülasyonu, geniş bir CI filosu ya da özel bir inceleme havuzu gibi tek bir ortak kaynağın yatırımı haklı çıkaracak kadar pahalı olduğu nadir durumlara saklayın.

## Ekibinizle tartışılacak sorular

1. **Ölçtüğümüz WIP, geliş hızı ve cycle time gerçekten Little yasasını sağlıyor mu, sağlamıyorsa neden?** Hatalı bir metrik tanımını yakalamak için eldeki en hızlı tanıdır. Gerçek sayıları birlikte gözden geçirin. Denklem yaklaşık olarak tutmuyorsa, kontrolü geçiştirmek yerine uyumsuzluğun kaynağını belirli bir tanım tutarsızlığına kadar izleyin.

2. **Teslimat hattımızdaki hangi ortak kaynaklar tam kullanıma yakın çalışıyor ve bunların kullanım oranını gerçekten biliyor muyuz?** Çoğu ekip "hep meşgul gibi hissettiren" bir kaynağı sayabilir, ama kullanım oranını hiç doğrudan ölçmemiştir. En kısıtlı iki üç ortak kaynağı belirleyin ve her biri için gerçek bir sayı elde edin.

3. **Başarıyı, hatayı ve atlamayı tek bir throughput sayısında mı harmanlıyoruz, ayırsak ne görürüz?** Tek bir "tamamlanan öğe" sayısı, kalite düşerken ya da iş sessizce terk edilirken bile yükselebilir. Yakın bir dönemin throughput'unu üç ayrı sayı olarak yeniden hesaplayın ve ayrımın, harmanlanmış sayının sakladığı neyi ortaya çıkardığını tartışın.

4. **Hattımızdaki gerçek darboğaz nerede? Altındaki her şeyin hızını belirleyen en yavaş aşama hangisi?** Ekipler çoğu zaman toplam throughput'u gerçekten kısıtlayan aşamaya değil, iyileştirmesi en kolay aşamaya yatırım yapar. Yüksek kullanım oranı ile yüksek hata ya da atlama oranının en kötü birleşimine sahip aşamayı belirleyin.

5. **En kısıtlı ortak kaynağımıza kapasite eklesek bekleme süresi gerçekten iyileşir miydi, yoksa talep onu dolduracak kadar mı genişlerdi?** Bu soru gerçek bir kapasite açığını talep sorunundan ayırır. Cevap, doğru çözümün daha fazla kadro mu, bir WIP sınırı mı, yoksa işin kuyruğa girmeden önce nasıl önceliklendirildiğinin değişmesi mi olduğunu belirler.

6. **"Devam ediyor" ya da "geldi" sayılanı, işin gerçekte başına gelenleri değiştirmeden panoyu güzel gösterecek biçimde hiç yeniden tanımladık mı?** Bunu varsayımsal bir endişe olarak görmek yerine, geçen yıldan gerçek örneklerle dürüstçe ve somut olarak sormaya değer.

## Sektörel bakış

**Startup.** Birkaç mühendisle çoğu kuyruk, resmi kuyruk analizinin gereksiz kalacağı kadar kısadır. Yararlı alışkanlık daha küçüktür: bir kişinin, çoğunlukla en kıdemli mühendisin, her şeyin beklediği fiili bir ortak kaynak haline geldiğini fark etmek. Arkasında resmi bir model olmasa bile bunu adlandırmaya değer bir kullanım sorunu olarak görün.

**Küçük işletme.** Küçük bir işletme ekibi, gerçekten ortak olan bir iki kaynağın (çoğunlukla tek bir inceleyici ya da tek bir dağıtım hattı) kullanımını izlemekten ve "genelde müsait"in sessizce "genelde darboğaz"a dönüştüğü noktayı kollamaktan fazlasına nadiren ihtiyaç duyar. Bir hesap tablosu yeterlidir; bu ölçekte özel araç gerekmez.

**Kurumsal.** Kurumsal ölçekte ortak kaynaklar hızla çoğalır: merkezi bir platform ekibi, ortak bir güvenlik inceleme kurulu, onlarca ürün ekibine hizmet veren ortak bir CI filosu. Kullanım izlemenin değerini kanıtladığı kaynaklar tam olarak bunlardır. Çünkü aşırı yüklenmiş tek bir ortak kaynak, ona bağımlı her ekibin teslimat süresini sessizce bozabilir. Hiçbir ekibin kendi metriği, kendi hattının dışında yaşayan bir nedeni açığa çıkarmaz.

**Kamu.** Çok kurumlu ve çok tedarikçili teslimat programları çoğu zaman işi, hiçbir ekibin kontrol edemediği ya da tek başına yeniden boyutlandıramadığı ortak onay kurullarından, ortak güvenlik akreditasyon süreçlerinden ve ortak test ortamlarından geçirir. Bu ortak geçitlerin kuyruk analizi (geliş hızı, kapasite, kullanım oranı), kapasite eklemek ya da işin geçide ulaşmadan önce nasıl gruplandığını değiştirmek için iş gerekçesinde çoğu zaman eldeki en net kanıttır.

## Örnekler

**Kurumsal.** Bir bulut altyapısı sağlayıcısının iç platform ekibi, ortak CI filosuna bağımlı her ürün ekibinde, hiçbir ekip çalışma biçimini değiştirmemiş olsa da, değişiklikler için lead time'ın (konu 2.10) yükseldiğini fark etti. Bir kullanım analizi, filonun mesai saatlerinde yüzde 90'ın üzerinde meşgul olduğunu gösterdi. Bu, kuyruk kuramının bekleme süresinin kademeli değil keskin biçimde büyüdüğünü öngördüğü noktanın çok ötesidir. Platform ekibi CI kapasitesi ekledi ve hiçbir ekibin ani yoğunluğunun kuyruğu tekeline alamayacağı adil paylaşım zamanlama politikası getirdi. Medyan CI bekleme süresi bir ay içinde yarıdan fazla düştü. Darboğaz baştan beri ortak ve görünmez bir kuyruktu.

**Kamu.** Ulusal bir ruhsat kurumunun dijital hizmet ekibi, başvuru işlemlerini iki yıl boyunca tek bir "haftalık kapatılan dosya" throughput sayısı olarak izledi ve sayı kararlı görünüyordu. Sayıyı onaylanan, reddedilen ve başvuranlarca uzun gecikmeler sonrası terk edilen dosyalar olarak ayıran daha yakından bir analiz, aynı dönemde onaylar sabit kalırken terk oranının neredeyse üç katına çıktığını gösterdi. Little yasasının dosya görevlisi kuyruğuna uygulanması, WIP'in ekibin belirttiği ortalama işlem süresinin ima ettiğinden çok daha fazla büyüdüğünü gösterdi. Yani dosyalar "bekliyor" olarak sayılmayan bir durumda sessizce birikiyordu. Kurum dosya takip tanımlarını açık olan her dosyayı dürüstçe sayacak biçimde yeniden yapılandırdı. Kullanımı yüzde 85'in altında tutacak biçimde boyutlandırılmış dosya görevlisi kapasitesi ekledi. Bu hedef artık throughput sayısının yanında sürekli bir operasyonel hedef olarak izleniyor.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Temel kuyruk analizini uygulamanın getirisi, "hat yavaş hissettiriyor" ifadesini belirli ve savunulabilir bir karara dönüştürmesidir: bu ortak kaynağa boşluk payı ekleyin, bu harmanlanmış metriği gerçek bileşenlerine ayırın. Gerçek nedeni kaçıran bulanık bir "daha hızlı çalışın" baskısının yerini alır. Yukarıdaki bulut altyapısı örneğinde, tek tek ekiplerin davranışını değiştirmeden yalnızca kapasite ve zamanlama düzeltmesiyle bekleme süresinin yarıya inmesi, bu analizin güvenilir biçimde ürettiği örüntüdür: çözüm, aşağı akıştaki her ekibe göremedikleri bir darboğazın çevresinde daha hızlı hareket etmelerini söylemekten neredeyse her zaman daha ucuzdur.

Benimsemenin toplam maliyeti gerçekten düşüktür. Little yasası ve kullanım izleme, konu 2.4'ten 2.6'ya kadar zaten toplamanızı istenen verilerin ötesinde yeni araç gerektirmez: geliş hızı, WIP ve cycle time. Yatırım çoğunlukla analitik disiplindir: sayıları birbirine karşı kontrol etmek ve ortak kaynakların kullanımını, kurumun bir sonraki açıklanamayan lead time gerilemesi olmadan önce düzenli olarak gözden geçirmek.

## Anti-desenler ve tuzaklar

- **Ortak bir kaynağın kapasitesini ortalama geliş hızına tam eşitlemek:** talep kısa süreliğine bile düzensiz olduğunda yüksek kullanımı ve kontrolden çıkan bekleme sürelerini garantiler.
- **Yalnızca ortalama bekleme süresini raporlamak, hiç yüzdelik dilim vermemek:** kuyrukta bekleyenler için en önemli olan uzun kuyruğu gizler.
- **Başarıyı, hatayı ve atlamayı tek bir throughput sayısında harmanlamak:** bu konunun kalbindeki manipülasyon vektörüdür (oyunlama yolu). Baskı altındaki bir ekip, atlama oranının (terk edilen biletler, sessizce düşürülen talepler, hata olarak hiç sayılmayan işler) sessizce artmasına izin vererek throughput'u sağlıklı gösterebilir. Korkuluk, geliş, başarı, hata ve atlama oranını dört ayrı ve görünür sayı olarak izlemektir. Konu 1.2'nin bu kitaptaki her metrikten istediği disiplin de budur. Böylece artan atlama oranı, düz bir throughput grafiğinin arkasına saklanamaz.
- **"İnsanlarımız hep meşgul" sözünü iltifat saymak:** bu, uzun ve öngörülemez bekleme sürelerinin başlıca nedeni olan yüksek kullanımın belirtisidir.
- **WIP'i sessizce küçültmek için "devam ediyor"u yeniden tanımlamak:** işi bitirme süresini değiştirmeden "bloke", "askıda" gibi sayılmayan bir duruma kaydırır ve aksi halde bunu yakalayacak Little yasası kontrolünü bozar.
- **Bir kuyruk modelinin kurulduktan sonra bakım gerektirmediğini varsaymak:** geliş örüntüleri ve kapasite sürekli değişir, eskimiş bir model kendinden emin biçimde yanlış tahminler üretir.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Hiçbir kuyruk açıkça ölçülmez; bekleme süresi "işler yavaş hissettiriyor" diye anekdotik olarak konuşulur.
- **Düzey 2, Geliştirme (Develop):** Geliş hızı, WIP ve cycle time en az bir hat için izlenir, ancak Little yasasına ya da ortak kaynakların kullanımına karşı hiç kontrol edilmez.
- **Düzey 3, Standartlaştırma (Standardize):** Little yasası, teslimat hatları genelinde rutin bir tutarlılık kontrolüdür ve en önemli ortak kaynaklar için kullanım açıkça izlenir.
- **Düzey 4, Yönetme (Manage):** Her önemli kuyruk için başarı, hata ve atlama oranı ayrı izlenir; kapasite kararları yalnızca ortalama talebi değil, kullanım hedeflerini de kullanır.
- **Düzey 5, Yönlendirme (Orchestrate):** Kurum başlıca hatlarını kuyruklardan oluşan kuyruklar olarak modeller, gerçek darboğazları sistematik biçimde belirler ve kuyruk analizi sayesinde yaptığı belirli kapasite ya da süreç değişikliklerini, ölçülmüş bekleme süresi iyileşmesiyle gösterebilir.

## Tartışma önerileri

1. Teslimat hatlarımızdan birini seçin ve bugün sayılarının Little yasasını sağlayıp sağlamadığını kontrol edin.
2. Kurumumuzda çoğu kişinin "hep meşgul" diyeceği tek ortak kaynağı adlandırın ve gerçek kullanım oranını bulun.
3. Throughput grafiğimizi son çeyrek için başarı, hata ve atlama oranlarına ayırsak nasıl görünürdü?
4. Bu yıl tam olarak tek bir ortak kaynağa kapasite ekleyebilseydik hangisi olurdu ve hangi kanıt bunu haklı çıkarırdı?

## Temel çıkarımlar

- **Little yasası** (WIP, geliş hızı çarpı cycle time'a eşittir) bir kanıttır, sezgisel kural değil. Teslimat metriklerinizin kendi içinde tutarlı olup olmadığını denetlemenin en ucuz yoludur.
- **Kullanım tam kapasiteye yaklaştıkça bekleme süresi kademeli değil keskin biçimde büyür.** "Hep meşgul"ü iltifat değil, uyarı işareti sayın.
- **Geliş hızını, başarı oranını, hata oranını ve atlama oranını** ayrı izleyin. Hepsini tek bir throughput sayısında harmanlamak bu konunun başlıca manipülasyon vektörüdür.
- Çok aşamalı bir hattı **kuyruklardan oluşan bir kuyruk** olarak modelleyin. İyileştirmesi en kolay aşamaya değil, yüksek kullanım oranı ile yüksek hata ya da atlama oranının en kötü birleşimine sahip aşamaya yatırım yapın.
- Pek az ekibin sürdürebileceği tam bir kuyruk simülasyonu yerine, ucuz ve benimsenebilir kontrolleri, yani **Little yasasını ve kullanım izlemeyi** tercih edin.

## Kaynaklar ve ileri okuma

- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Kleinrock, Leonard. *Queueing Systems, Volume 1: Theory*.
  Wiley-Interscience, 1975.
- Wescott, Bob. *The Every Computer Performance Book: How to Avoid and
  Solve Performance Problems on the Computer Systems You Work With*.
  CreateSpace Independent Publishing Platform, 2013.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
- Vacanti, Daniel S. *Actionable Agile Metrics for Predictability*.
  Actionable Agile Press, 2015.
