# 2.4 Akış süresi ve akış yükü

## Genel bakış ve motivasyon

**Akış süresi**, bir akış öğesinin (konu 2.2) değer akışına girdiği andan teslim edildiği ana kadar geçen toplam süredir; bir iş ihtiyacının tespit edilmesinden bir müşterinin değeri almasına kadarki tüm yol boyunca duyarlılığı ölçer. **Akış yükü**, herhangi bir anda değer akışında etkin ya da bekleyen akış öğelerinin toplam sayısıdır; konu 2.5'in süreçteki iş (WIP) dediği şeyin Flow Framework'teki adıdır. İkisi birlikte, kuyruk matematiğine en doğrudan bağlanan Flow Framework metrikleridir; çünkü akış yükü akış süresiyle yalnızca ilişkili değildir, matematiksel olarak onu belirler.

Bu ilişki, kuyruk kuramından bir ispat olan **[Little yasasıdır](https://en.wikipedia.org/wiki/Little%27s_law)** (konu 2.7 bunu tam olarak ele alır). Yasa, kararlı bir sistemdeki ortalama öğe sayısının, ortalama varış hızı çarpı her öğenin sistemde geçirdiği ortalama süreye eşit olduğunu söyler. Buraya uygulandığında: akış yükü, varış hızı çarpı akış süresine eşittir. Bu, konunun en yararlı tek olgusudur; çünkü eskiden niteliksel olan bir argümanı ("fazla yüklüyüz, işler çok uzun sürüyor") bir iş liderinin kolayca reddedemeyeceği, kanıtlanabilir ve nicel bir argümana dönüştürür: varış hızı sabit kalırken akış yükü yükselmeyi sürdürüyorsa, akış süresinin de yükselmesi yalnızca muhtemel değil, matematiksel olarak garantidir.

Büyük ekipler için bu, çoğu zaman tüm çerçevedeki en ikna edici tek sayıdır. Her talep tek tek haklı göründüğü için yeni işe hayır demeyi reddeden bir iş lideri, akış yükü izlendiğinde ve akış süresiyle ilişki soyut biçimde tartışılmak yerine doğrudan gösterildiğinde, bir değer akışını aşırı yüklemenin içindeki her öğeyi kanıtlanabilir biçimde yavaşlattığını çoğu zaman kabul eder. Birçok eşzamanlı stratejik girişimi idare eden kurumsal organizasyonlar ve düzinelerce paralel iş akışı yürüten kamu programları, aynı anda daha fazla işe başlamaya hayır demeyi gerekçelendirmek için bu ispata, yalnızca arkasındaki sezgiye değil, ihtiyaç duyar.

## Temel ilkeler

- **Akış yükü, Little yasası aracılığıyla akış süresini matematiksel olarak belirler.** Bu bir korelasyon değil; kararlı herhangi bir değer akışı için geçerli bir ispattır.
- **Akış süresi yalnızca mühendisliği değil, tüm değer akışını kapsar.** Mühendislik işi devralınca değil, bir iş ihtiyacı tespit edildiğinde başlar; konu 2.6'nın cycle time'ı bunu daha ayrıntılı çözümler.
- **Yükselen akış yükü, yükselen akış süresinin en erken uyarı işaretidir.** İlişki kanıtlanabilir olduğu için akış yükü, akış süresi bozulduktan sonra keşfedilmek yerine öncü gösterge olarak izlenebilir.
- **Değer akışının giriş noktası sabit ve belgelenmiş olmalıdır.** Akış süresi saatinin nerede başladığı tanımsal bir seçimdir ve bu kitaptaki herhangi bir metrik sınırı gibi aynı manipülasyon riskine açıktır.
- **Bir iş lideri akış yüküne doğrudan müdahale edebilir.** Gecikmeli bir ölçüm olan akış süresinden farklı olarak akış yükü bir kaldıraçtır: yeni işe başlamaya hayır demek bugün elinizde olan bir eylemdir.

## Öneriler

### Akış süresini ölçmeden önce değer akışının giriş noktasını sabitleyin ve belgeleyin

Akış süresinin bir iş ihtiyacı ilk tespit edildiğinde mi, resmen onaylandığında mı yoksa mühendislik işe başladığında mı başladığına açıkça karar verin ve bu seçimi, konu 1.4'ün her metrik şartnamesi için önerdiği gibi belgeleyin. Bu tek karar, akış süresinin gerçek uçtan uca duyarlılığı mı yoksa yalnızca mühendisliğin kontrol ettiği daha dar dilimi mi ölçtüğünü belirler; tanımı sonradan açıklamadan değiştirmek bu konunun merkezî manipülasyon riskidir.

### Akış yükünü periyodik olarak değil, sürekli izleyin

Akış yükü, Little yasası aracılığıyla, henüz gelmemiş akış süresinin öncü göstergesi olduğundan, onu periyodik bir anlık görüntü olarak değil, canlı, sürekli güncellenen bir sayı olarak izleyin. Birisi bakana kadar haftalardır tırmanmış bir akış yükü, metrik yakalayana dek aynı süre boyunca akış süresini görünmez biçimde sessizce uzatıyordur.

### Bir WIP sınırı ya da kapasite artışı için tartışırken Little yasasını açıkça kullanın

Daha az eşzamanlı işe başlama ya da kapasite ekleme gerekçesini sunarken yalnızca öneriyi değil denklemi de gösterin: akış yükü, varış hızı çarpı akış süresine eşittir; dolayısıyla varış hızı kabaca sabitse akış yükünü azaltmak akış süresini azaltmayı matematiksel olarak garanti eder. Bu, şüpheci bir paydaşa "çok meşgulüz" diyen ölçülmemiş bir iddiadan hayli güçlü bir argümandır, çünkü ileri sürülmek yerine kanıtlanabilir.

### Bir çözüm önermeden önce akış süresini akış yükünün altındaki nedenlerden ayırın

Akış yükü yüksek olduğunda, hangi akış öğesi türünün (konu 2.2) onu gerçekte sürüklediğini araştırın: aynı anda başlatılan çok fazla özellik, ele alınmamış bir hata birikimi ya da ortak bir onayı bekleyen risk işi. Her neden farklı bir çözüm ima eder ve "akış yükü yüksek" ifadesini tek, ayrışmamış bir sorun olarak ele almak genel, etkisiz bir yanıt üretme eğilimindedir.

### Gecikmenin gerçekte nerede olduğunu ayırmak için akış süresini cycle time ile çapraz kontrol edin

Akış süresi tüm değer akışını kapsadığı ve cycle time (konu 2.6) yalnızca mühendislik payını kapsadığı için ikisini doğrudan karşılaştırın. Akış süresi ile cycle time arasındaki büyük bir fark, gecikmenin çoğunun işi mühendislik görmeden önce (onay kuyruklarında, önceliklendirme backlog'larında ya da ekipler arası devirlerde) olduğu anlamına gelir; bu, mühendisliğin içinde yoğunlaşan bir farkla çok farklı bir çözüme işaret eder.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Akış süresini yalnızca mühendisliğin işi devralmasından ölçmek | Basit, mevcut cycle time ölçümlemesiyle uyumlu | Mühendislikten önceki gecikmeyi kaçırır, gerçek duyarlılığı olduğundan iyi gösterir |
| Akış süresini gerçek iş ihtiyacının tespitinden ölçmek | Gerçek uçtan uca duyarlılığı yakalar | Mühendisliğin doğrudan kontrolü dışındaki aşamaların ölçümlenmesini gerektirir |
| Periyodik akış yükü anlık görüntüleri | Ara sıra hesaplamak ucuz | Öncü gösterge değerini kaçırır; yükselen yük çok uzun süre fark edilmez |
| Sürekli akış yükü takibi | Canlı, eyleme dönüştürülebilir öncü gösterge | Ara sıra bir rapor değil, süregelen araç entegrasyonu gerektirir |

Temel gerilim, **kapsam ile ölçümleme erişimi** arasındadır. Akış süresini yalnızca mühendisliğin işi devralmasından ölçmek, konu 2.6'nın zaten topladığı cycle time verisini yeniden kullandığı için ölçümlemesi hayli kolaydır, ama mühendislik işi görmeden önce olan her şeyi yok sayarak gerçek duyarlılığı sessizce olduğundan iyi gösterir. Gerilimi şöyle çözün: bugün ölçümleyebildiğiniz tek şey buysa daha dar, mühendislik kapsamlı ölçümle başlayın, ama akış süresinin başlangıç noktasını yukarı akışa, iş ihtiyacının tespitine ve önceliklendirmeye doğru genişletmeyi kalıcı bir sınırlama değil yakın vadeli bir öncelik sayın.

## Ekibinizle tartışılacak sorular

1. **Akış süresi saatimiz bugün gerçekte nereden başlıyor ve organizasyonda herkes bunun doğru başlangıç noktası olduğu konusunda hemfikir mi?** Paydaşların saatin başladığını varsaydığı yer ile gerçekte başladığı yer arasındaki uyumsuzluk, metriğe duyulan güvensizliğin yaygın ve sessiz bir kaynağıdır. Belgelenmiş tanımın ortak anlayışla örtüştüğünü doğrulayın.

2. **Ölçtüğümüz akış yükünün, varış hızının ve akış süresinin Little yasasını gerçekten sağlayıp sağlamadığını hiç kontrol ettik mi?** Kabaca dengelenmiyorlarsa üç sayıdan biri tutarsız ölçülüyordur. Kontrolün geçeceğini varsaymak yerine gerçek sayıları birlikte inceleyin.

3. **Akış yükü sürekli mi izleniyor, yoksa istikrarlı bir artış biri bakana kadar haftalarca fark edilmeden mi sürerdi?** Bir öncü gösterge, yalnızca biri onu gerçekten neredeyse gerçek zamanlı izliyorsa, üç aylık bir raporda gözden geçirmiyorsa sizi korur.

4. **Akış yükü yükseldiğinde, onu hangi akış öğesi türünün sürüklediğini söyleyebiliyor muyuz, yoksa tek, ayrışmamış bir sayı olarak mı okunuyor?** Genel bir "fazla yüklüyüz" teşhisi genel, çoğu zaman etkisiz bir yanıt üretir. Mevcut ölçümlemenizin yükselen yükü belirli bir nedene atfedip atfedemediğini kontrol edin.

5. **Akış süremiz ile cycle time'ımız arasındaki fark ne kadar büyük ve bu fark gecikmenin çoğunun mühendislik işi görmeden önce mi sonra mı olduğunu düşündürüyor?** Bu karşılaştırma çoğu zaman iyileştirme için en büyük fırsatın tamamen mühendisliğin kendi kontrolü dışında olduğunu ortaya çıkarır.

6. **Biri sayı daha iyi görünsün diye akış süresi başlangıç noktamızı, bu değişiklik belgelenmeden ya da açıklanmadan sessizce daraltmış mıdır?** Bu, konunun merkezî manipülasyon riskinin doğrudan ifadesidir. Tanımınızın hiç bu biçimde kayıp kaymadığını dürüstçe sorun.

## Sektörel bakış

**Girişim (startup).** Akış yükü genellikle düşüktür, çünkü aynı anda çok iş başlatacak kadar insan yoktur; ama bir kurucu ya da baş mühendis çok sayıda eşzamanlı girişim için kişisel bir darboğaz olduğu anda aynı matematiksel ilişki geçerli olur. Özel araç olmasa da akış yükünü gayriresmî izleyin; Little yasası ölçekten bağımsız geçerlidir.

**Küçük işletme.** Şu an etkin olan her şeyin basit, paylaşılan bir listesi, özel değer akışı yönetimi yazılımı olmadan akış yükünü hesaplamaya genellikle yeter. Yararlı alışkanlık, yükselen bir sayının erken yakalanacağı ve akış süresi gözle görülür biçimde bozulduktan sonra keşfedilmeyeceği sıklıkta kontrol etmektir.

**Kurumsal.** Little yasasının yalnızca bir metrik değil, bir argüman olarak değerini kanıtladığı yer burasıdır: düzinelerce eşzamanlı stratejik girişimi idare eden büyük bir organizasyon, işi sıralamak için akış yükü ile akış süresi arasındaki kanıtlanabilir ilişkiyi kullanarak kanıta dayalı bir gerekçe sunabilir; kararlı paydaş baskısına karşı salt niteliksel bir "çok meşgulüz" argümanının nadiren başardığı bir şey.

**Kamu.** Çok yıllı programlar, her biri tek tek haklı çıkarılmış birçok iş akışı boyunca, toplamı organizasyon genelinde görünür olmadan, rutin olarak büyük, örtük akış yükü biriktirir. Little yasasını doğrudan sunmak, programın kendi akış süresi büyümesinin kendi yükselen akış yüküyle matematiksel olarak açıklandığını göstermek, iş akışlarını süresiz paralel yürütmek yerine sıralamak için çoğu zaman mevcut en net ve en ikna edici kanıttır.

## Örnekler

**Kurumsal.** Bir medya teknolojisi şirketinin platform organizasyonu, kapasitesi kabaca on iki için gerçekçi olan yirmi iki eşzamanlı stratejik girişim yürütüyordu; yeni bir mühendislik başkan yardımcısı doğrudan akış yükünü isteyene dek kimsenin ölçmediği bir uyumsuzluk. Ortanca girişim için akış süresi önceki yıl boyunca yüzde 40 uzamıştı; liderlik bu trendi "işin zorlaşmasına" bağlamıştı. Little yasasını gerçek akış yükü ve varış hızı sayılarıyla birlikte sunmak, büyümenin tamamen yalnızca yükselen akış yüküyle açıklandığını, bunu açıklamak için alttaki iş zorluğunda herhangi bir değişikliğe gerek olmadığını gösterdi. Organizasyon girişimleri sürdürülebilir bir akış yüküne kadar sıraladı ve ortanca akış süresi iki çeyrek içinde neredeyse üçte bir oranında düştü.

**Kamu.** Federal bir hibe yönetimi kurumunun modernizasyon programı, hiçbir izlenen toplam olmaksızın düzinelerce paralel iş akışı boyunca akış yükü biriktirmişti; her iş akışı sponsoru kendi girişiminin tek başına yeterince kaynaklandığına inanıyordu. Little yasasını kullanan bir program ofisi analizi, programın toplam akış süresinin (bir iş akışının onayından teslimine kadar geçen süre) neredeyse tamamen toplam akış yükünden tahmin edilebileceğini gösterdi; bu bulgu, öncelik düşürme argümanlarına bir yılı aşkın süredir direnen sponsorları ikna etti. Program açık bir akış yükü tavanı benimsedi ve yeni iş akışları artık mevcut yüke bakılmaksızın hemen başlamak yerine bir kuyruğa giriyor.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Akış yükünü ve akış süresini birlikte izlemenin getirisi, her şeyi paralel yürütmek yerine işi sıralamak için yalnızca ikna edici değil, kanıtlanabilir bir gerekçedir. Yukarıdaki medya teknolojisi örneği, tüm akış süresi gerilemesini tek başına akış yüküyle açıklıyor; bu kombinasyonun güvenilir biçimde ürettiği örüntü budur: daha fazla işe başlamaya yönelik gerçek organizasyonel baskıya karşı niteliksel bir "çok meşgulüz" çağrısının daha önce başarısız olduğu yerde belirli, nicel bir argüman başarılı olur.

Toplam sahip olma maliyeti, ikna gücüne göre düşüktür: akış yükü yalnızca etkin ve bekleyen öğelerin canlı bir sayımını, akış süresi ise değer akışının giriş noktasının ölçümlenmesini gerektirir. Bu iş, bir organizasyonu gerçek kapasitesinin destekleyebileceğinden daha çok eşzamanlı girişime taahhüt etmekten ilk kez alıkoyduğunda kendini öder.

## Anti-desenler ve tuzaklar

- **Sayıyı pohpohlamak için akış süresi başlangıç noktasını sessizce daraltmak:** bu konunun kalbindeki manipülasyon vektörü (oyunlama yolu). Saatin başlangıcını gerçek iş ihtiyacının tespitinden daha geç bir noktaya (mühendislik işi devralmaya, resmî onaya) taşımak, gerçek duyarlılığı hiç değiştirmeden akış süresini kısaltır ve hiçbir tekil değişiklik bilinçli bir manipülasyon gibi görünmeyecek kadar kademeli olabilir. Korkuluk, giriş noktasını bir metrik şartnamesinde (konu 1.4) açıkça belgelemek ve periyodik olarak belgelenmiş tanıma karşı denetlemektir; bu kitabın her metrik sınırından istediği disiplin.
- **Akış yükünü yalnızca periyodik ölçmek:** öncü gösterge olarak değerini kaybettirir, çünkü istikrarlı bir artış haftalarca fark edilmeyebilir.
- **Akış yükünü tek, ayrışmamış bir sayı olarak ele almak:** aşırı yükü gerçekte hangi akış öğesi türünün sürüklediğini kaçırır ve hedefli değil genel bir yanıt üretir.
- **Akış süresi ile cycle time arasındaki farkı görmezden gelmek:** gecikmenin mühendislikten önce mi sonra mı yoğunlaştığını kaçırır; bu çok farklı çözümler ima eder.
- **Little yasasını açıkça sunmadan eşzamanlı işin azaltılmasını savunmak:** niteliksel bir çağrıyı bir paydaşın reddetmesi, nicel ve kanıtlanabilir bir ilişkiden çok daha kolaydır.
- **Little yasasının yalnızca büyük ölçekte geçerli olduğunu varsaymak:** tek bir aşırı yüklü kişi dahil, boyutundan bağımsız her kararlı sistem için geçerlidir.

## Olgunluk modeli

- **Seviye 1, Başlangıç:** Ne akış süresi ne akış yükü izlenir; gecikme, destekleyici veri olmadan anekdotsal olarak tartışılır.
- **Seviye 2, Gelişim:** Akış süresi yalnızca mühendisliğin işi devralmasından izlenir ve akış yükü sürekli değil periyodik olarak kontrol edilir.
- **Seviye 3, Standartlaşma:** Akış süresi belgelenmiş, organizasyon genelinde bir değer akışı giriş noktasından ölçülür ve akış yükü öncü gösterge olarak sürekli izlenir.
- **Seviye 4, Yönetim:** Little yasası kapasite ve sıralama kararlarını gerekçelendirmek için açıkça kullanılır ve yükselen akış yükü, bir çözüm önerilmeden önce belirli bir akış öğesi türüne atfedilir.
- **Seviye 5, Orkestrasyon:** Organizasyon değer akışları genelinde açık akış yükü tavanları belirler ve akış süresini ölçülebilir biçimde iyileştiren, Little yasasıyla desteklenmiş belirli sıralama kararlarını gösterebilir.

## Tartışma önerileri

1. Akış süresi saatimiz gerçekte nereden başlıyor ve bu tanım hiç belgelenmeden kaydı mı?
2. Ölçtüğümüz akış yükü, varış hızı ve akış süresi kabaca Little yasasını sağlıyor mu?
3. Akış yükü, istikrarlı bir artışın aylar değil günler içinde yakalanacağı kadar sürekli izleniyor mu?
4. Akış süremiz ile cycle time'ımız arasındaki fark nedir ve bu fark gecikmenin gerçekte nerede olduğu hakkında bize ne söylüyor?

## Temel çıkarımlar

- **Akış yükü, akış süresini matematiksel olarak belirler**, Little yasası aracılığıyla: kararlı herhangi bir değer akışı için akış yükü, varış hızı çarpı akış süresine eşittir.
- **Akış süresi tüm değer akışını kapsar**, iş ihtiyacının tespitinden teslimata kadar; cycle time'ın yalnızca mühendislik kapsamından daha geniştir (konu 2.6).
- Konunun merkezî manipülasyon vektörü **akış süresi başlangıç noktasını sessizce daraltmaktır**; korkuluk, belgelenmiş ve denetlenen bir giriş noktası tanımıdır.
- **Akış yükünü periyodik değil sürekli izleyin**; böylece gecikmeli bir keşif değil, gerçek bir öncü gösterge olarak işler.
- Bir WIP sınırı, kapasite artışı ya da eşzamanlı işi sıralama gerekçesini sunarken Little yasasını yalnızca sezgi olarak değil **açıkça** kullanın.

## Kaynaklar ve ileri okuma

- Kersten, Mik. *Project to Product: How to Survive and Thrive in the Age
  of Digital Disruption with the Flow Framework*. IT Revolution Press,
  2018.
- Little, John D. C. "A Proof for the Queuing Formula: L = λW." *Operations
  Research*, 1961.
- Reinertsen, Donald G. *The Principles of Product Development Flow:
  Second Generation Lean Product Development*. Celeritas Publishing, 2009.
