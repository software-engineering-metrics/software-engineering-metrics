# 1.3 Çıktı yerine sonuç: Ne ölçüleceğini seçmek

## Genel bakış ve motivasyon

Her mühendislik metriği üç kategoriden birine girer ve bunları karıştırmak, bu
kitapta [Goodhart yasasını](https://en.wikipedia.org/wiki/Goodhart%27s_law) hiç
dikkate almamanın ardından ikinci en yaygın hata biçimidir. Bir **girdi metriği**
harcanan emeği ölçer: mühendis saatleri, harcanan dolarlar, taahhüt edilen hikâye
puanları. Bir **çıktı metriği** sistemin ürettiğini ölçer: teslim edilen
özellikler, birleştirilen pull request'ler, kapatılan biletler. Bir **sonuç
metriği** gerçekten önemli olan değişimi ölçer: elde tutulan gelir, önlenen
olaylar, bir kullanıcı için kazanılan zaman. Ekipler girdilere ve çıktılara
yönelir, çünkü bunları saymak kolaydır ve tamamen ekibin denetimindedir. Değer
ise hemen her zaman sonuçlarda yaşar; bunlar daha geç ortaya çıkar, ölçülmesi
daha gürültülüdür ve herhangi bir ekibin işine atfedilmesi daha zordur.

Bu konu, bu çekime bilerek direnmekle ilgilidir. Baştan sona girdi ve çıktılardan
kurulu bir pano etkileyici biçimde meşgul görünürken hiçbir gerçek değer
üretmiyor olabilir: bir ekip kimsenin kullanmadığı onlarca özellik teslim
edebilir, bir hafta sonra yeniden açılan yüzlerce bileti kapatabilir ya da
ürünün gerçek sonuçları, yani elde tutma, memnuniyet, gelir, yatay seyrederken
ya da düşerken her hikâye puanı tahminini tutturabilir. Bu meşguliyetin hiçbiri
yalnızca çıktıdan oluşan bir panoda sorun olarak görünmez; çünkü yalnızca çıktı
panoları bunu görmek üzere kurulmamıştır.

Kurumsal ve kamu ölçeğinde bu ayrım, yönetimin üretken bir ekip ile yalnızca
hareketli bir ekip arasındaki farkı anlayıp anlayamayacağını belirler. Bir bölüm
yıllarca mükemmel çıktı sayıları, teslim edilen özellikler, kapatılan sprintler
yayımlayabilir; bir fonlayıcının ya da yasama organının gerçekten önemsediği
sonuç, yani elde tutulan gelir ya da azalan vatandaş bekleme süreleri ise altta
sessizce aşınır. "Yol haritasını teslim ettik" ile "yol haritası işleri
iyileştirdi" aynı iddia değildir ve ikisini yalnızca sonuç ağırlıklı bir metrik
kümesi birbirinden ayırabilir.

## Temel ilkeler

- **Girdiler ve çıktılar vekildir; sonuçlar şeyin kendisidir.** Ulaşabildiğiniz
  her yerde metrik kümenizi sonuçlara doğru ağırlıklandırın.
- **Ölçmenin kolay olması bir şeyi ölçmek için gerekçe değildir.** Saymanın en
  kolay olduğu şeyler genellikle girdiler ve çıktılardır; en çok önemli
  oldukları için değil, mekanik olarak yakalanmaları basit olduğu için.
- **Sonuçlara doğru ilerledikçe atfetme zorlaşır.** Bu ödünleşimi, sonuçlar
  atfetmesi daha zor diye çıktılara geri çekilmek yerine bilinçli olarak
  kabul edin.
- **Bir ekip girdilerini ve çıktılarını denetleyebilir, ama sonuçları yalnızca
  etkileyebilir.** Hesap verebilirliği buna göre tasarlayın: ekipleri gerçekten
  denetleyebildikleri şeyden sorumlu tutun ve sonuçları ekipler arası ortak
  sinyaller olarak izleyin.
- **Tek bir kuzey yıldızı sonuç ve az sayıda sürücü, bir duvar dolusu çıktı
  kutucuğundan iyidir.** Kapsam, salt pano hacminden değil yapıdan gelmelidir.

## Öneriler

### Her metriği benimsemeden önce sınıflandırın

Her aday metrik için üç kategoriden hangisine girdiğini sorun. "Haftada
birleştirilen pull request" bir çıktıdır. "Birleştirilen pull request'lerin bir
hafta içinde üretimde olaya yol açan yüzdesi" bir sonuca daha yakındır, çünkü
hacim yerine bir sonuç doğuran etkiyi ölçer. Bu sınıflandırma otuz saniye sürer
ve bir ekip ya da kuruluş panosuna metrik eklenmeden önce zorunlu olmalıdır;
çünkü değeri ölçtüğünü sanırken sessizce kolay sayılan çıktılarla dolan bir
panoyu yakalamanın en hızlı yoludur.

### Tek bir sonucun altında bir metrik ağacı kurun

Düz bir liste izlemeyin. Metrikleri bir **metrik ağacı** (bazen KPI ağacı da
denir) olarak düzenleyin: en üstte bir sonuç metriği, onu nedensel ya da
matematiksel olarak besleyen sürücülere ve en altta bireysel ekiplerin gerçekten
sahip olduğu operasyonel çıktı ve girdi ölçülerine ayrılır. Üstteki sonuç
oynadığında ağaç hangi alt düzey sürücüyü inceleyeceğinizi söyler ve "sayı düştü"yü
"hattaki şu belirli adım nedeni" haline getirir. Alanınızın desteklediği her yerde
en üste tek bir **kuzey yıldızı metriği** koyun: sunulan değeri en iyi yakalayan
ölçü; bir platform ekibi için değişiklik başarısızlık oranıyla eşleşmiş dağıtım
sıklığı ya da bir ürün ekibi için temel bir özelliğin haftalık aktif kullanımı.

### Sonuçlara yalnızca panoda değil, gözden geçirmelerde de ağırlık verin

Bir metrik ağacı yalnızca pratikte nasıl kullanıldığı kadar iyidir. Sprint
gözden geçirmelerinde, üç aylık iş gözden geçirmelerinde ve yönetim
güncellemelerinde sonuç düzeyindeki sayıyla başlayın; altındaki çıktı ve girdi
metriklerini yalnızca hareketi açıklamak için kullanın, onun yerine koymak için
değil. Hiçbir sonuç bağlamı olmadan "bu sprintte 40 bilet kapattık" diyen bir
ekip, işin önemli olup olmadığı hakkında size hiçbir şey söylememiştir; "kaçan
hatalar yüzde 30 düştü ve bunu sağlayan test yatırımı şu" diyen bir ekip gerçek
bir şey söylemiştir.

### Sonuç metrikleri için daha yavaş geri bildirimi kabul edin ve onları daha hızlı öncü göstergelerle eşleştirin

Sonuç metrikleri çoğu zaman gecikmelidir: emin olunacak kadar zaman geçtikten
sonra bir sonucu doğrularlar. Bu gecikme gerçek bir maliyettir, çünkü öğrenmeyi
geciktirir. Her sonuç metriğini en az bir öncü göstergeyle, yani daha erken
hareket eden ve sonucu öngören bir metrikle eşleştirin; böylece bir ekip yavaş,
yetkili sayı nihayet gelmeden dümeni kırabilir. Dağıtım sıklığı, teslimat
sonuçları için öncü bir göstergedir; yükselen bir hata kaçış eğilimi, yaklaşan
bir güvenilirlik sonucu için öncü bir göstergedir. Erken harekete geçmek için
öncü göstergeleri, haklı olduğunuzu doğrulamak için gecikmeli sonuç metriklerini
kullanın.

## Ödünleşimler: artılar ve eksiler

| Kategori | Artılar | Eksiler |
| --- | --- | --- |
| Girdi metrikleri | Tamamen ekibin denetiminde, saymak kolay | Gerçek değerle en zayıf bağ; hacimle oyunlamak kolay |
| Çıktı metrikleri | Saymak kolay, sahiplik net, hızlı geri bildirim | Etki yerine faaliyeti ödüllendirir; değer düşerken yükselebilir |
| Sonuç metrikleri | Önemli olanı doğrudan yansıtır; ucuza oyunlamak zor | Yavaş, gürültülü ve tek bir ekibe atfetmesi zor |
| Metrik ağacı yapısı | Günlük işi stratejik değere bağlar; teşhise yardımcı olur | Doğru kurmak ve sürdürmek gerçek analitik emek gerektirir |

Temel gerilim **denetlenebilirlik ile değer** arasındadır. Girdiler ve çıktılar
tamamen bir ekibin denetimindedir; bu da ekipleri bunlardan sorumlu tutmayı
cazip kılar. Sonuçlar değeri taşır, ancak yalnızca kısmen tek bir ekibin
etkisindedir, çünkü iyi bir özellik yine de tamamen mühendislik dışındaki
nedenlerle başarısız olabilir. Bunu, ekipleri tamamen denetledikleri girdi ve
çıktılardan sorumlu tutarak, sonuçları ise tüm kuruluşun birlikte sahip olduğu
ortak sinyaller olarak izleyerek ve "işi yaptık" ile "işe yaradı mı" arasındaki
açıklanamayan boşluk olarak bırakmak yerine açık bir metrik ağacıyla bağlayarak
çözün.

## Ekibinizle tartışılacak sorular

1. **Mevcut panomuzdaki her metrik girdi mi, çıktı mı, sonuç mu ve üçü
   arasındaki denge dürüst bir hikâye anlatıyor mu?** Dürüstçe denetlendiğinde
   çoğu pano, araçların varsayılan olarak bunları raporlaması nedeniyle neredeyse
   tamamen girdi ve çıktı çıkar. Her kutucuğu sınıflandırın ve dağılımı sayın;
   hiç sonuç kutucuğu olmayan bir pano faaliyeti ölçüyor ve onu performans diye
   sunuyordur.

2. **Tek kuzey yıldızı sonuç metriğimiz nedir ve onu bir metrik ağacı boyunca
   her ekibin gerçekten sahip olduğu bir şeye kadar izleyebilir miyiz?** Bu
   bağlayıcı yapı olmadan, oynayan bir üst düzey sayı nereye bakılacağı
   konusunda hiçbir ipucu vermez ve ekipler günlük çıktı metriklerinin önemli bir
   şeye nasıl bağlandığını göremez. Varsa mevcut üst düzey metriğinizi getirin
   ve ağacı canlı olarak kurmayı deneyin.

3. **Bir ekibi yalnızca etkileyebildiği, denetleyemediği bir sonuçtan nerede
   sorumlu tutuyoruz?** Bu, sık görülen bir hayal kırıklığı ve sessiz oyunlama
   kaynağıdır; çünkü denetimi dışındaki etkenlerce şekillenen bir sonuç için
   cezalandırılan bir ekip, gerçek sistemi iyileştirmek yerine kendini korumak
   için her teşvike sahiptir. Bu uyumsuzlukları belirleyin ve ya hesap
   verebilirliği ayarlayın ya da eksik kaldıraçları ekleyin.

4. **Gecikmeli sonuç metriklerimizin her biri için hangi öncü göstergemiz var ve
   onları ne kadar önceden öngörüyor?** Tamamen gecikmeli bir metrik kümesi,
   yanıldığınızı ancak rotayı ucuza değiştirmek için çok geç olduğunda
   öğrenmeniz demektir. Sonuç metriklerinizi getirin ve her biri için gerçek bir
   öncü göstergenin olup olmadığını, yoksa raporlama dönemleri arasında kör mü
   uçtuğunuzu kontrol edin.

5. **Gözden geçirmelerde ve retrospektiflerde kutladığımızın ne kadarı çıktı
   ("X'i teslim ettik"), ne kadarı sonuç ("X, Y'yi iyi yönde değiştirdi")?**
   Ekiplerin işi kutlarken kullandığı dil, zamanla neyi optimize edeceklerini,
   çoğu zaman panodan daha fazla şekillendirir. Bir sprint boyunca kendi gözden
   geçirme toplantılarınızı dinleyin ve dağılımı dürüstçe sayın.

6. **En önemli çıktı metriklerimiz bir gecede iki katına çıksa, sonuç
   metriklerimiz kesinlikle iyileşir miydi, yoksa kötüleşebilir miydi?** Bu
   düşünce deneyi, hizmet etmeleri gereken sonuçlardan kopmuş, hatta onlarla
   etkin biçimde çelişen çıktı metriklerini, örneğin bakım yükünü benimsemenin
   artışından daha hızlı artıran özellik hacmini, ortaya çıkarır.

## Sektörel bakış

**Girişim (startup).** Bir sonuç seçin; tipik olarak müşterilerin değer almaya
devam edip etmediğinin vekili, haftalık elde tutma ya da aktivasyon gibi, ve onu
ilk günden kuzey yıldızınız olarak ele alın. Birikimli özellik sayısı gibi
çıktı gösteriş metriklerine yönelmeye direnin; yatırımcılara raporlamak cazip
olsa da ürünün gerçekten kimse için işe yarayıp yaramadığı hakkında hiçbir şey
söylemezler.

**Küçük işletme.** Mevcut araçlarınız, satış noktası, destek masası, analitik,
çoğu zaman sonuca yakın bir sayıyı zaten raporlar: tekrar satın alma oranı, bilet
yeniden açma oranı. Bakımını yapacak kapasiteniz olmayan özel sonuç
enstrümantasyonu kurmak yerine bunları kullanın ve yalnızca varsayılan görünüm
olduğu için ham faaliyet sayılarına geri dönme cazibesine direnin.

**Kurumsal.** Baskın hata biçimi, her biri yerel çıktı metriklerini optimize
eden ve toplamı tutarlı bir kurumsal sonuca varmayan bir ekip portföyüdür.
Metrik ağacını bilinçli kurun, sonuç tanımlarını iş birimleri arasında
standartlaştırın ve her büyük girişimden fonlanmadan önce yalnızca çıktı planını
değil sonuç hipotezini de belirtmesini isteyin.

**Kamu.** Denetim kuruluşları ve kamuoyu, "iş tanımı şartnamesini teslim etti"
ile "sonucu iyileştirdi" arasındaki farkı giderek daha iyi okuyor ve yalnızca
çıktıdan oluşan bir rapor tam olarak bu incelemeyi çağırır. Hukuken ve pratikte
mümkün olan her yerde başarıyı vatandaşa dönük bir sonuç (bekleme süresi, hata
oranı, memnuniyet) olarak tanımlayın ve yalnızca bir çıktı metriğinin mevcut
olduğu durumda bunu ve nedenini açıkça belirtin.

## Örnekler

**Kurumsal.** Bir lojistik şirketinin mühendislik bölümü iki yıl boyunca istikrarlı
biçimde artan "çeyrek başına teslim edilen özellik" sayısı raporladı; şirketin
temel müşteri memnuniyeti puanı ise sessizce yatayladı. Yeni bir mühendislik
başkan yardımcısı, gerçek iş sonucu olan zamanında teslimat oranını kök alan,
merkez bekleme süresi ve son mil başarısı üzerinden ekip düzeyindeki mühendislik
çıktılarına inen bir metrik ağacı kurdu. Tek bir raporlama döngüsü içinde,
yüksek çıktılı birkaç ekibin kuzey yıldızı metriği üzerinde ölçülebilir bir etkisi
olmayan alanlarda özellik teslim ettiği ortaya çıktı ve yatırım, ağacın gerçekten
önemli olduğunu gösterdiği sürücülere kaydı.

**Kamu.** Ulusal bir sağlık hizmetinin dijital ekibi, çok yıllı bir hasta kayıtları
modernizasyon programı için "iş tanımı şartnamesine göre teslim edilen modüller"
raporlamıştı. Bir denetim komitesi farklı bir soru sordu: klinisyenler idari veri
girişine daha az zaman harcıyor mu? Ekip sonradan bir sonuç metriği geliştirdi,
hasta karşılaşması başına idari zamanın dakika cinsinden medyanı, ve her teslimat
kilometre taşına ulaşılmasına rağmen ilk modüllerin iş akışı sürtünmesi nedeniyle
bu süreyi aslında artırdığını gördü. Sonraki modüller doğrudan sonuç metriği
çevresinde yeniden tasarlandı ve programın kamuya raporlaması bir teslimat
kontrol listesinden önce-sonra sonuç karşılaştırmasına kaydı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Sonuç ağırlıklandırmanın getirisi, önlenen israftır: bir çıktı akışının hiçbir
sonucu oynatmadığını neredeyse gerçek zamanlı görebilen bir kuruluş, bunu zor
yoldan öğrenmek için tam bir bütçe döngüsü harcamadan o yatırımı yeniden
yönlendirebilir. Büyük mühendislik kuruluşlarındaki baskın gizli maliyet yetersiz
yatırım değil, gerçek bir sonuçtan kopuk olduğu için hiç fonlanmaması gereken iyi
yürütülmüş iştir ve yalnızca çıktıdan oluşan bir pano bu kopukluğu hiç göremez.

Sonuç ölçümünün toplam sahip olma maliyeti çıktı ölçümünden yüksektir; çünkü
sonuçları tanımlamak, atfetmek ve enstrümante etmek gerçekten daha zordur ve
gerçek bir metrik ağacı kurmak, bir aracın varsayılan olarak dışa aktardığını
kabul etmek yerine bilinçli analitik emek ister. Bu maliyet, mütevazı bir
büyüklüğün üzerindeki her girişim için ödemeye değerdir; çünkü alternatif, bir
yıl boyunca güvenle raporlanan çıktının hiçbir gerçek değer üretmediğini sonradan
keşfetmek, baştan yapılacak analizden çok daha pahalıdır.

## Anti-desenler ve tuzaklar

- **Tamamen çıktı kutucuklarından oluşan bir pano:** faaliyeti ölçer ve onu
  performans diye sunar.
- **Bir ekibi denetleyemediği bir sonuçtan tümüyle sorumlu tutmak:** hayal
  kırıklığı yaratır ve haksız suçlamadan korunmak için oyunlamayı çağırır.
- **Gecikmeli bir sonuç için öncü gösterge olmaması:** ekip yanıldığını ancak
  düzeltmesi çok pahalı olduktan sonra öğrenir.
- **Sonuçlara değer verdiğini söylerken gözden geçirmelerde çıktı dilini
  kutlamak:** beyan edilen öncelik ile yaşanan teşvik ayrışır ve yaşanan teşvik
  kazanır.
- **Ağaç yapısı olmayan düz bir metrik listesi:** oynayan bir üst düzey sayı
  nereye bakılacağı konusunda hiçbir ipucu vermez.
- **Sonuç ölçümünü denenemeyecek kadar zor saymak:** kuruluşu kalıcı olarak
  sayması kolay girdilere ve çıktılara geri iter.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Metrikler neredeyse tamamen girdi ve çıktıdır; kimse
  kuruluşun sonuç metriklerini adlandıramaz ya da onlara bir hat çizemez.
- **Düzey 2, Geliştirme:** Bazı ekipler sonuç metriklerini gayriresmî olarak
  belirlemiştir, ancak ortak bir metrik ağacı ve tutarlı öncü göstergeler yoktur.
- **Düzey 3, Standartlaştırma:** Belgelenmiş bir metrik ağacı, ortak bir kuzey
  yıldızı sonucunu ekibe ait çıktılara kadar bağlar ve kuruluş genelinde tutarlı
  uygulanır.
- **Düzey 4, Yönetme:** Öncü ve gecikmeli göstergelerin ikisi de izlenir ve
  birlikte gözden geçirilir; ekipler yalnızca denetledikleri şeyden sorumlu
  tutulur ve sonuç ölçümü etkin biçimde kaynaklandırılır.
- **Düzey 5, Orkestrasyon:** Sonuç ölçümü doğrudan fonlama ve önceliklendirme
  kararlarına entegre edilmiştir; kuruluş, tam bir bütçe döngüsü geçmeden
  yatırımı yüksek çıktılı, düşük sonuçlu işlerden düzenli olarak başka yöne
  kaydırır.

## Tartışma önerileri

1. Kuruluşumuzun en önemli tek sonuç metriğini adlandırın. Herkes bunda anlaşabilir mi?
2. Henüz hiçbir sonuca bağlayamadığımız, çıktıya yaptığımız en büyük güncel yatırım hangisi?
3. Hesap verebilirlik yapımız bir ekibi denetleyemediği bir sonuçtan nerede cezalandırıyor?
4. Saf çıktı kutucuklarının hepsini silseydik panomuz nasıl görünürdü?
5. Teslim edilen bir özelliğin gerçekten işe yarayıp yaramadığını öğrenmemiz şu anda ne kadar sürüyor?

## Temel çıkarımlar

- Her metriği **girdi, çıktı ya da sonuç** olarak sınıflandırın ve kümenizi
  bilinçli olarak sonuçlara doğru ağırlıklandırın.
- Oynayan bir üst düzey sayı bir nedene işaret etsin diye tek bir **kuzey
  yıldızı metriğinin** altında bir **metrik ağacı** kurun.
- Ekipleri **denetledikleri** şeyden (girdiler, çıktılar) sorumlu tutun; sonuçları
  tüm kuruluşun birlikte etkilediği ortak sinyaller olarak izleyin.
- Her gecikmeli **sonuç metriğini**, yavaş sayı yanıldığınızı doğrulamadan dümeni
  kırabilmeniz için daha hızlı bir **öncü göstergeyle** eşleştirin.
- Yalnızca çıktıdan oluşan bir pano faaliyeti ölçer ve ona performans der; bunu
  bir rahatlık değil, bir uyarı işareti sayın.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (sonuç temelli teslimat ölçümü).
- *Lean Analytics*, Alistair Croll ve Benjamin Yoskovitz (One Metric That
  Matters ve bir girişim bağlamında girdi/çıktı/sonuç ayrımı).
- *Measure What Matters*, John Doerr (sonuç odaklı hedef belirleme ve OKR
  çerçevesinin faaliyet yerine sonuçlara vurgusu).
- *The Lean Startup*, Eric Ries (eyleme dönük ve gösteriş metrikleri ile sonuç
  doğrulama).
- *Key Performance Indicators*, David Parmenter (bir kuzey yıldızı ölçüsü
  altında KPI ya da metrik ağacı yapısı kurmak).
