# 3.5 İletişim ve iş birliği metrikleri

## Genel bakış ve motivasyon

SPACE'teki (konu 3.1) C harfi olan **iletişim ve iş birliği (communication and
collaboration)**, bilginin insanlar ve ekipler arasında gerçekte nasıl aktığını
ölçer: dokümantasyonun ne kadar bulunabilir olduğunu, bilginin bir ekip içinde
ne kadar eşit yayıldığını, ekipler arası bağımlılıkların ne kadar iyi
koordine edildiğini ve yeni ekip üyelerinin ortak anlayış akışına nasıl dahil
olduğunu. Bu boyut, beşi arasında çoğu zaman en az araçlandırılanıdır; çünkü
teslimat verisinden daha zor gözlemlenir ve memnuniyet verisinden daha az
kişiseldir. Bu boşluk bir hatadır, çünkü buradaki kopuşlar sıklıkla diğer her
boyutta yanlış atfedilmiş olarak görünen sorunların kök nedenidir.

Bir test sorunu gibi görünen yükselen bir değişiklik başarısızlık oranı
(konu 2.10) bazen aslında bir iletişim sorunudur: bir bağımlılığın değişikliğinden,
üretimde bozulana kadar haberdar olmayan bir ekip. Bir iş yükü sorunu gibi
görünen düşen bir memnuniyet eğilimi (konu 3.2) bazen aslında bir yalıtılmışlık
sorunudur: kararların alındığı konuşmalardan sessizce dışlanmış bir mühendis.
Bu konunun temel savı, iletişim ve iş birliğinin tam da başarısızlıkları
başka sorunlar kılığına girdiği için doğrudan ölçümü hak ettiği ve yanlış kök
nedenin peşinden giden bir ekibin yanlış şeyi düzeltmek için gerçek emek
harcadığıdır.

Büyük ekipler için bu boyutu sürdürmek, önem kazandığı ölçüde yapısal olarak
zorlaşır. Beş kişilik bir ekibin koordinasyonu günlük yakınlık yoluyla gerçekleşir
ve neredeyse hiç bilinçli ölçüm gerektirmez. Zaman dilimlerine ve iş
birimlerine yayılmış beş yüz kişilik bir kuruluş ise bilinçli biçimde
tasarlanması ve etkin biçimde izlenmesi gereken dokümantasyona, bulunabilirliğe
ve ekipler arası koordinasyon mekanizmalarına bağlıdır; çünkü küçük ölçekte
işe yarayan gayriresmî kanallar o kadar uzağa ulaşmaz.

## Temel ilkeler

- **İletişim kopuşları sıklıkla başka sorunlar kılığına girer.** Bir kalite ya
  da memnuniyet sorununun kök nedeni iş birliği olabilir.
- **Bu boyutu otomatik araçlandırmak en zor olanıdır** ve cazibe onu tümden
  atlamaktır; bu cazibeye bilinçli olarak direnin.
- **Bilgi yoğunlaşması belirsiz bir kaygı değil, ölçülebilir bir risktir.**
  Kritik bilginin ne kadar dar bir kesimde tutulduğunu izleyin.
- **Ekipler arası bağımlılık sürtünmesi, ilgili ekipler tarafından çoğu zaman
  görülmez;** biri doğrudan ölçene kadar.
- **Uyum süresi (onboarding), bir kuruluşta ortak anlayışın gerçekte ne kadar
  iyi aktığının doğrudan, ölçülebilir bir vekilidir.**

## Öneriler

### Bilgi yoğunlaşmasını doğrudan ölçün

Her kritik sistem bileşenini yetkin biçimde kaç kişinin gözden geçirebildiğini,
değiştirebildiğini ya da işletebildiğini izleyin: yalnızca bir nitelikli kişinin
olduğu bir bileşen, ciddi ve çoğu zaman görünmez bir risk olan bir
**[otobüs faktörü](https://en.wikipedia.org/wiki/Bus_factor) (bus factor)**
birdir (kardeş `software-engineering-guide` kitabının uzun ömürlü sistemleri
sürdürme konusu bunu daha derinlemesine ele alır). Sürüm kontrol blame verisi,
nöbet rotasyonu kayıtlarıyla birleştirildiğinde bu yoğunlaşmayı otomatik olarak
ortaya çıkarabilir: anlamlı bir dönemde değişikliklerin ya da olay müdahalelerinin
orantısız bir payından tek bir yazarın ya da tek bir nöbetçi müdahale edenin
sorumlu olduğu bileşenlere bakın.

### Ekipler arası bağımlılık sürtünmesini doğrudan bir sinyalle ölçün

Ekipler arası bir talebin, gereken bir API değişikliğinin, paylaşılan bir
kütüphane güncellemesinin, koordineli bir yayının gündeme getirilmesinden
çözülmesine kadar ne kadar sürdüğünü izleyin; ruh olarak konu 2.6'daki döngü
süresi ayrıştırmasına benzer ama özellikle ekip içi değil, ekipler arası
koordinasyona uygulanır. Başka bir ekibin sahip olduğu bir bağımlılığı
sürekli haftalarca bekleyen bir ekibin, ekiplerden birinin kendi iç teslimat
metriklerinde net biçimde görünmeyecek bir iş birliği sorunu vardır.

### Sinyal olarak yalnızca dokümantasyonun varlığını değil, bulunabilirliğini kullanın

Eskimiş ya da bulunamaz sayfalarla dolu bir wiki, içerik teknik olarak bir
yerde var diye iyi iletişimin kanıtı değildir. Mümkün olduğunda dokümantasyonun
gerçekte ne sıklıkla erişildiğini, yeni bir ekip üyesinin ihtiyaç duyduğu bir
yanıtı bulamadığını ne sıklıkla bildirdiğini ya da yanıt belgelenmiş olsa da
bulunabilir olmadığı için aynı sorunun bir sohbet kanalında ne sıklıkla
tekrar tekrar sorulduğunu izleyin. Bu, dokümantasyon kalitesini (konu 4.6) bu
boyutun iş birliği kaygılarına doğrudan bağlar.

### Üretken katkıya kadar geçen uyum süresini doğrudan bir vekil olarak izleyin

Yeni bir ekip üyesinin katılmasından ilk anlamlı, bağımsız katkısına kadar
geçen süre, bir kuruluşta ortak anlayışın gerçekte ne kadar iyi aktığının güçlü
ve pratik bir vekilidir: bilginin tümüyle insanların kafasında yaşadığı bir ekip
yavaş ve öngörülemez biçimde uyum sağlar; gerçekten iyi dokümantasyonu, net
sahipliği ve erişilebilir mentorluğu olan bir ekip daha hızlı ve daha tutarlı
uyum sağlar. Bu metriği açıkça izleyin ve uzun ya da çok değişken bir uyum
süresini yalnızca bir İK kaygısı olarak değil, bir iş birliği sinyali olarak ele
alın.

### Yalnızca organizasyon şemalarını değil, gerçek iletişim ağlarını periyodik olarak haritalayın

Bir organizasyon şeması kimin kime rapor vermesi gerektiğini anlatır; işi
yapmak için gerçekte kimin kiminle konuştuğunu nadiren anlatır. İletişim
örüntülerinin, kod gözden geçirme ağlarının (kim kimin işini gözden
geçiriyor) ya da toplantı katılımı örtüşmesinin periyodik, hafif analizi,
resmî organizasyon şemasından önemli ölçüde farklı olan gerçek bir iş birliği
yapısını ortaya çıkarabilir; çoğu zaman gayriresmî bir darboğazı (herkesin
üzerinden geçtiği tek bir kişi) ya da daha geniş bilgi akışından kopmuş
yalıtılmış bir cebi (bir alt ekip) görünür kılarak, aksi halde görünmez
kalacak olanı gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Doğrudan iş birliği ölçümü yok | Düşük yük | Kök nedenler diğer boyutlara yanlış atfedilir; riskler görünmez kalır |
| Bilgi yoğunlaşması izleme | Gerçek, ciddi bir riski (otobüs faktörü) doğrudan ortaya çıkarır | Birden çok sistemden (sürüm kontrol, nöbet) veri birleştirmeyi gerektirir |
| Ekipler arası bağımlılık sürtünmesi izleme | İki ekipte de görünmeyen koordinasyon sorunlarını açığa çıkarır | Bilinçli araçlandırma gerektirir; mevcut araçlardan otomatik gelmez |
| İletişim ağı haritalama | Organizasyon şemasının ardındaki gerçek, gayriresmî yapıyı ortaya çıkarır | Memnuniyet verisiyle aynı özenle ele alınmazsa müdahaleci hissettirebilir |

Temel gerilim **araçlandırma zorluğu ile tanısal değer** arasındadır. Bu boyut
teslimat ya da etkinlik verisine göre otomatik ölçmesi gerçekten daha
zordur; birçok kuruluşun onu atlamasının nedeni tam da bu zorluktur, oysa
başarısızlıkları sıklıkla diğer boyutlara atfedilen sorunların gizli kök
nedenidir. Gerilimi, daha iddialı iletişim ağı analizini denemeden önce, en
yüksek değerli, en işlenebilir sinyallerle, yani ikisi de büyük oranda mevcut
sürüm kontrol ve iş takip verisinden türetilebilen bilgi yoğunlaşması ve
ekipler arası bağımlılık sürtünmesiyle başlayarak çözün.

## Ekibinizle tartışılacak sorular

1. **Her kritik sistem bileşeni için otobüs faktörümüzü biliyor muyuz, yoksa onu
   anlayan tek kişi ulaşılamaz olduğunda mı zor yoldan öğrenirdik?** En kritik
   sistemleriniz için sürüm kontrol ve nöbet verisini çekin ve bilginin gerçekte
   ne kadar yoğunlaştığına dürüstçe bakın.

2. **Tipik bir ekipler arası bağımlılık talebinin çözülmesi ne kadar sürüyor ve
   ilgili ekiplerden herhangi biri bu sürtünmeyi bilinçli ölçmeden fark ederdi
   mi?** Yakın tarihli bir ekipler arası bağımlılık seçin ve gerçek zaman
   çizelgesini izleyin; yanıt çoğu zaman her iki ekibin varsaydığından daha
   uzundur ve ilgililere daha az görünürdür.

3. **Yakın zamanda bir kalite ya da memnuniyet sorunu yaşadığımızda, bir iletişim
   ya da iş birliği kopuşu gerçek kök nedenin parçası olabilir miydi?** Yakın
   tarihli bir olaya ya da memnuniyet düşüşüne geri bakın ve ilk, daha bariz
   açıklamayı kabul etmek yerine bu soruyu özellikle sorun.

4. **Yeni bir ekip üyesinin ilk anlamlı, bağımsız katkısını yapması ne kadar
   sürüyor ve bu süre kişiden kişiye ne kadar değişiyor?** Uzun ya da çok
   değişken bir uyum süresi, ekibinizde ortak anlayışın gerçekte ne kadar iyi
   aktığının doğrudan, ölçülebilir bir belirtisidir.

5. **Gayriresmî iletişim ağımız resmî organizasyon şemamızla örtüşüyor mu, yoksa
   kimsenin adlandırmadığı gizli bir darboğaz ya da yalıtılmış bir cep mi
   gelişti?** Buna hiç doğrudan bakmadıysanız, bu eksiklik kendi başına
   tartışmaya değerdir.

6. **Dokümantasyonumuz gerçekten bulunabilir mi, yoksa yalnızca bulması zor bir
   yerde mi duruyor?** Yakın zamanda katılmış bir ekip üyesine sorun ya da
   gerçek bir soruyu yalnızca belgelenmiş kaynaklarınızı kullanarak bilinçli
   biçimde yanıtlamayı deneyin ve deneyimin gerçekte nasıl geçtiğine bakın.

## Sektörel bakış

**Startup.** Küçük bir ekipte iletişim yakınlık ve günlük konuşma yoluyla
doğal biçimde gerçekleşir ve resmî ölçüm genellikle gereksizdir. Dikkat
edilecek risk, ekip gayriresmî osmozun herkese ulaştığı boyutu aştığında,
çoğu zaman sekiz ila on iki kişi civarında, otobüs faktörünün tehlikeli
biçimde yoğunlaşmasıdır.

**Küçük işletme.** "Bu sistemi anlayan tek kişi kim?" gibi basit, periyodik ve
dürüst bir sohbet, çoğu zaman resmî araçlandırmaya ihtiyaç duymadan en kritik
bilgi yoğunlaşması risklerini ortaya çıkarır. Önce bilginin en kırılgan,
en yoğunlaşmış iki üç alanını belgelemeye öncelik verin.

**Kurumsal şirket.** Ekipler arası bağımlılık sürtünmesi ve bilgi yoğunlaşması
burada kötü ölçeklenir; çünkü daha fazla ekip daha fazla koordinasyon yüzey
alanı ve küçülen bir kıdemli uzman havuzunun sahipliğine kalabilecek daha fazla
kritik sistem demektir. Bu konunun önerdiği araçlandırmaya bilinçli olarak
yatırım yapın; çünkü gayriresmî farkındalık bu ölçekteki bir kuruluşu gerçekten
kapsayamaz.

**Kamu.** Kamu kuruluşlarında yaygın olan uzun ömürlü sistemler ve uzun çalışan
görev süreleri, görünürdeki istikrarın ardında saklanan ciddi bir otobüs faktörü
riski yaratabilir; çünkü on yıldır el değiştirmemiş bir sistem tümüyle emekliliğe
yaklaşan bir iki kişiye bağlı olabilir. Bilgi yoğunlaşması ölçümünü yalnızca bir
mühendislik inceliği olarak değil, operasyonların sürekliliği kaygısı olarak
ele alın.

## Örnekler

**Kurumsal şirket.** Bir lojistik şirketinin platform ekibi, ancak kilit bir
mühendisin tatili sırasındaki kritik bir olaydan sonra, çekirdek bir
yönlendirme algoritmasının fiilî otobüs faktörünün bir olduğunu keşfetti:
sürüm kontrol geçmişi, bileşenin son değişikliklerinin %90'ından fazlasını tek
bir kişinin yazdığını gösteriyordu ve nöbet rotasyonu kaydı, aynı kişinin
önceki iki yıl boyunca ilgili her olayı bizzat çözdüğünü gösteriyordu. Ekip,
eşli çalışma oturumları ve ilgili olayların sahipliğinin döndürülmesinden oluşan
bilinçli bir bilgi yayma programı başlattı ve sekiz ay sonraki bir takip analizi
otobüs faktörünün dörde yükseldiğini, özgün mühendisin ise kalıcı bir tek hata
noktası olarak kalmak yerine yeni, daha yüksek kaldıraçlı işlere
özgürleştiğini gösterdi.

**Kamu.** Bir eyalet sosyal yardım kurumunun mühendislik ekibi, paylaşılan bir
uygunluk doğrulama hizmetinde tekrarlanan, gayriresmî olarak fark edilen
gecikmelerin ardından ekipler arası bağımlılık sürtünmesini ilk kez ölçtü. Veri,
paylaşılan hizmet ekibinden bir bağımlılık değişikliği için ortanca bekleme
süresinin on bir gün olduğunu gösterdi; bu, her iki ekibin gayriresmî olarak
sorulduğunda varsaydığından çok daha uzundu ve kök neden herhangi bir kapasite
sıkıntısı değil, belirsiz, belgelenmemiş bir talep süreciydi. Net ve basit bir
talep süreci ile paylaşılan hizmet için taahhüt edilmiş bir yanıt süresi hedefi
yayımlamak, ek kadro gerektirmeden bir çeyrek içinde ortanca beklemeyi iki günün
altına indirdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

İletişim ve iş birliğini doğrudan ölçmenin getirisi, diğer boyutların yanlış
atfettiği kök nedenleri yakalamaktır: bir test boşluğu gibi görünen ama aslında
iletişim kopuşu olan bir kalite sorunu, bir ekip altta yatan koordinasyon
başarısızlığını düzeltmek yerine daha fazla test ekleyerek çözmeye çalıştığında
emeği boşa harcar. Yukarıdaki otobüs faktörü örneği bu getirinin en çarpıcı
biçimini gösterir: ciddi bir bilgi yoğunlaşması riskini proaktif olarak keşfedip
düzelten bir kuruluş, kritik bir sistemi anlayan tek kişinin gerçekten
ulaşılamaz olduğu fiilî bir kriz sırasında keşfetmenin yıkıcı maliyetinden
kaçınır.

Toplam sahip olma maliyeti çoğunlukla araçlandırma emeğidir: sürüm kontrol, nöbet
ve iş takip verisini kutudan çıktığı gibi otomatik olmayan biçimlerde birleştirmek
ve ayrıca bilgi yoğunlaşmasını ve bağımlılık sürtünmesini açıkça gözden geçirme
konusundaki periyodik disiplin. Bu maliyet, gerçek bir otobüs faktörü krizinin ya
da kronik, ele alınmamış bir ekipler arası koordinasyon başarısızlığının
maliyetine kıyasla mütevazıdır.

## Anti-desenler ve tuzaklar

- **Otomatik araçlandırması zor diye bu boyutu atlamak:** kök nedenleri diğer,
  ölçmesi daha kolay boyutlara yanlış atfedilmiş bırakır.
- **Bir organizasyon şemasını gerçek iletişim örüntülerinin doğru resmi saymak:**
  sıklıkla yanlıştır ve gizli darboğazların yaşadığı yer tam da bu boşluktur.
- **Bir kriz keşfi zorlayana dek otobüs faktörünü görmezden gelmek:** bu konunun
  uyardığı en zararlı tek başarısızlık biçimi.
- **Dokümantasyonun varlığını dokümantasyonun yararlılığı saymak:** eskimiş ya da
  bulunamaz içerik gerçek iletişim değeri sağlamaz.
- **Ekipler arası sürtünmeyi ölçüp bulunduktan sonra net ve düzeltilebilir bir
  kök nedene göre harekete geçmemek:** tanısal yatırımı boşa harcar.
- **Yavaş, değişken uyum sürecini bir mühendislik iş birliği sinyali yerine
  yalnızca bir İK sorunu saymak:** gerçekten yararlı, ölçülebilir bir vekili
  kaçırır.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** İletişim ve iş birliği hiç ölçülmez; otobüs
  faktörü ve ekipler arası sürtünme yalnızca krizle keşfedilir.
- **Düzey 2, Geliştirme (Develop):** Bilgi yoğunlaşmasına dair bir miktar
  gayriresmî farkındalık vardır ama tutarlı ölçüm ya da proaktif araştırma
  yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Otobüs faktörü ve ekipler arası
  bağımlılık sürtünmesi, kuruluş genelinde kritik sistemler ve paylaşılan
  hizmetler için tutarlı biçimde ölçülür.
- **Düzey 4, Yönetme (Manage):** İletişim ağı haritalama periyodik olarak gizli
  darboğazları ve yalıtılmış cepleri ortaya çıkarır ve uyum süresi, ortak
  anlayış sağlığının doğrudan bir vekili olarak izlenir.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluş, bilgi yoğunlaşması riskini ve
  ekipler arası sürtünmeyi olaylara yol açmadan önce proaktif olarak azaltır ve
  bu boyutu ölçülebilir biçimde iyileştiren belirli müdahaleleri, bilinçli bilgi
  yaymayı ve netleştirilmiş bağımlılık süreçlerini gösterebilir.

## Tartışma önerileri

1. En kritik tek sistemimiz için otobüs faktörümüz, dürüstçe, nedir?
2. Son çeyrekte en çok sürtünmeye hangi ekipler arası bağımlılık yol açtı ve bunu ölçtük mü?
3. Yeni bir ekip üyesi dokümantasyonumuzu bulur muydu, yoksa yalnızca teknik olarak bir yerde var olduğunu mu görürdü?
4. Gayriresmî iletişim ağımız organizasyon şemamızla örtüşüyor mu?
5. Hangi kalite ya da memnuniyet sorununun, araştırmadığımız bir iş birliği kök nedeni olabilir?

## Temel çıkarımlar

- İletişim ve iş birliği başarısızlıkları sıklıkla **başka sorunlar kılığına
  girer**; yanlış boyuta atfedilen bir kök neden emeği boşa harcar.
- **Bilgi yoğunlaşmasını (otobüs faktörünü)** bir krizin ortaya çıkarmasını
  beklemek yerine, sürüm kontrol ve nöbet verisiyle doğrudan izleyin.
- **Ekipler arası bağımlılık sürtünmesini** açıkça ölçün; ölçülene kadar genellikle
  ilgili ekiplerce görülmez.
- Ortak anlayışın ne kadar iyi aktığının doğrudan, pratik bir vekili olarak
  **üretken katkıya kadar geçen uyum süresini** kullanın.
- **Gerçek iletişim ağlarını** periyodik olarak haritalayın; çünkü çoğu zaman
  resmî organizasyon şemasından önemli ölçüde farklıdırlar.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Team Topologies*, Matthew Skelton ve Manuel Pais (ekip etkileşim kipleri ve
  ekipler arası bağımlılık tasarımı).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco ve Timothy
  Lister (gayriresmî iletişim yapıları ve verimliliğe etkileri).
- Conway, Melvin E., "How Do Committees Invent?" (1968): iletişim yapısı ile
  sistem yapısı arasındaki ilişki üzerine, Conway Yasası'nın kaynağı.
