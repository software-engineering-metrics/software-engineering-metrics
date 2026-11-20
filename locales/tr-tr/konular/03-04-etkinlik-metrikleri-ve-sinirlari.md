# 3.4 Etkinlik metrikleri ve sınırları

## Genel bakış ve motivasyon

SPACE'teki (konu 3.1) A harfi olan **etkinlik (activity)**, sistem
telemetrisinden gözlemlenebilen mühendislik işinin hacmini sayar: commit'ler,
açılan pull request'ler, değişen kod satırları, bırakılan kod gözden geçirme
yorumları. Ölçmesi en kolay SPACE boyutudur; çünkü bu olayların her biri
mühendislik ekiplerinin günlük kullandığı araçlar tarafından zaten otomatik
olarak kaydedilir ve bu ölçüm kolaylığı, bu boyutu aşırı ağırlık vermek için
en tehlikeli boyut yapan şeydir. Etkinlik, dikkatle kullanıldığında gerçek ve
meşru bir sinyaldir. Tek başına bir verimlilik vekili olarak kullanıldığında
ise [yazılım mühendisliği](https://en.wikipedia.org/wiki/Software_engineering)
ölçümü tarihinin en çok manipüle edilen ve en yanıltıcı tek metrik ailesidir.

Temel sorun, etkinliğin değeri değil hareketi ölçmesidir. Bir commit sayısı,
zor bir sorunu zarifçe çözen bir commit ile daha verimli görünmek için anlamlı
tek bir değişikliği beşe bölen bir commit'i birbirinden ayırt etmez (konu
1.2'nin ikame yoluyla manipülasyonu, bu metrik ailesine doğrudan uygulanmış
hâliyle). Değişen kod satırları, gereksiz kodu silmenin çok daha değerli
becerisi yerine uzun yazmayı ödüllendirir. On zarif, iyi sınanmış satır
yazmadan önce bütün bir günü derin, kesintisiz düşünmeyle geçiren bir mühendis,
her yirmi dakikada bir sığ, gözden geçirilmemiş değişiklik commit'leyen birine
göre bu metriklerle daha az "etkin" görünür; oysa ilki çoğu zaman çok daha
fazla gerçek değer üretiyordur.

Büyük ekipler için etkinlik metriklerini bireysel değerlendirmede kullanma
cazibesi sürekli ve iyi belgelenmiştir; çünkü etkinlik belirli bir kişiye
atfedilmesi kolay ve otomatik hesaplanması kolaydır, diğer SPACE boyutlarındaki
daha zor ve daha dürüst sinyallerin aksine. Bu konu, o cazibeyi adlandırmak ve
ekiplere ona direnmek için dil ve kanıt sunmak için vardır; çünkü bir kuruluş
mühendisleri commit sayısına ya da kod satırına göre bireysel olarak
sıralamaya başladığında, iş birliğine, kod kalitesine ve moral üzerine
verdiği zarar iyi belgelenmiştir ve tersine çevrilmesi zordur.

## Temel ilkeler

- **Etkinlik hareketi ölçer, değeri değil.** Meşru bir bağlamsal sinyaldir,
  asla tek başına bir verimlilik vekili değildir.
- **Bu, yazılım mühendisliği ölçümünde tarihsel olarak en çok kötüye
  kullanılan tek metrik ailesidir.** Bu tarihi bir tesadüf olarak değil, bir
  uyarı olarak ele alın.
- **Bireysel etkinlik sıralaması neredeyse her zaman zararlıdır.** İş birliğine
  zarar verir, görünür oyalayıcı işi ödüllendirir ve neredeyse hemen
  manipülasyonu davet eder.
- **Etkinlik verisi en çok toplu olarak, diğer boyutlar için bağlam olarak
  yararlıdır;** herhangi bir kişi ya da ekip hakkında bağımsız bir sinyal
  olarak değil.
- **Derin, değerli iş çoğu zaman etkinlik panosunda sessiz görünür.** Bu metrik
  ailesi, yapısal olarak en iyi mühendislik sonuçlarını üreten düşünme türüne
  karşı önyargılıdır.

## Öneriler

### Bireyleri asla ham etkinlik sayılarıyla sıralamayın ya da değerlendirmeyin

Bu konudaki en zor ve en önemli kuraldır. Commit sayısı, kod satırı ve pull
request sayısı; bir bireysel performans değerlendirmesinde, karşılaştırmalı
sıralamada ya da bir mühendisin ücretinin, konumunun veya itibarının sayıya
bağlı olduğu hiçbir bağlamda yer almamalıdır. Bu doğrudan konu 1.2'nin teşvike
maruz bırakma ilkesinden çıkar: etkinlik teşvik edilen bireysel bir metrik
olduğu anda manipülasyon neredeyse hemen gelir ve ortaya çıkan davranış
(commit şişirme, değişiklikleri anlamsızca bölme, az görünür olay üreten
derin ve gösterişsiz işten kaçınma) kuruluşa etkin biçimde zarar verir.

### Etkinlik verisini toplu olarak, hüküm değil bağlam olarak kullanın

Etkinlik verisi, ekip düzeyinde toplulaştırıldığında ve diğer SPACE
boyutlarıyla birlikte okunduğunda gerçekten yararlı olur: memnuniyetteki bir
artışla aynı zamana denk gelen ekip düzeyindeki keskin bir commit etkinliği
düşüşü, ekibin sonunda derin düşünmek ve teknik borcu ödemek için nefes alacak
alan bulduğuna işaret edebilir; bu olumsuz değil, olumlu bir örüntüdür.
Yalıtılmış okunduğunda aynı düşüş alarm verici görünür. Etkinlik verisini
yanıltıcı değil yorumlanabilir kılan, diğer boyutlardan gelen bağlamdır.

### Ham hacim yerine kaliteye yakın etkinlik sinyallerini tercih edin

Etkinlik verisinin yararlı olduğu yerde, ham sayılar yerine kaliteye göre
ayarlanmış sinyalleri tercih edin: gözden geçirme derinliğine göre pull
request boyutu (konu 2.9) ya da bir ekibin karmaşıklık biriktirip biriktirmediğini
ya da etkin biçimde sadeleştirip sadeleştirmediğini ortaya çıkarabilen yeni
kodun kaldırılan koda oranı. Bu ayarlanmış sinyaller hâlâ etkinlik boyutu
verisidir ama ham sayıların davet ettiği en kaba manipülasyona direnir.

### Etkinlik verisinde özellikle ikame yoluyla manipülasyon örüntüsünü gözleyin

Etkinlik metriklerinin manipüle edilmesinin en yaygın yolu tam olarak konu
1.2'nin ikame örüntüsüdür: gerçekten anlamlı işi bir sayıyı şişirmek için çok
sayıda küçük, anlamsız olaya bölmek. Commit ya da pull request sıklığı
artarken değişikliklerin altta yatan karmaşıklığı ya da boyutu keskin biçimde
düşüyorsa, gerçek bir verimlilik iyileşmesine kredi vermeden önce araştırın;
konu 2.10'un dağıtım sıklığı için önerdiği aynı tanısal disiplinle.

### Etkinlik tiyatrosunu açıkça adlandırın ve caydırın

**Etkinlik tiyatrosu (activity theater)**, bilinçli ya da bilinçsiz, esas olarak
değerli olduğu için değil görünür ve sayılabilir olduğu için yapılan iştir:
sık küçük commit'ler, göze çarpan gece geç saat etkinliği ya da paylaşılan
kanallarda görünür meşguliyet. Bu örüntüyü ekibinize açıkça adlandırmak ve
yönetimin katkıyı yargılamak için ham etkinliği kullanmadığı konusunda şeffaf
olmak, ortaya çıkması için teşvikin büyük kısmını ortadan kaldırır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Bireysel etkinlik sıralaması | Basit, hesaplaması kolay, doğrudan eyleme dönüştürülebilir hissettirir | Neredeyse hemen manipüle edilir; iş birliğine ve ahlaka zarar verir; yanlış şeyi ölçer |
| Hiç etkinlik ölçümü yapmamak | Kötüye kullanım riskini tümden önler | Ekip düzeyinde örüntü tespiti için gerçekten yararlı bağlamsal sinyali kaybeder |
| Ekip düzeyinde toplu etkinlik, bağlamda okunmuş | Bireysel risk olmadan yararlı bağlam sağlar | Yalıtılmış değil, diğer boyutlarla birlikte yorumlamak için disiplin gerektirir |
| Kaliteye göre ayarlanmış etkinlik sinyalleri | En kaba ham sayı manipülasyonuna direnir | Basit bir sayıdan hesaplaması ve açıklaması daha karmaşıktır |

Temel gerilim **yararlılık ile kötüye kullanım riski** arasındadır. Etkinlik
verisi, toplu ve bağlam içinde dikkatle okunduğunda sürdürülemez tempo ya da
bir ekibin teknik borcu ele almak için sessizce alan bulması gibi örüntüleri
fark etmekte gerçekten yararlıdır. Aynı veri bireysel puan kartı olarak
kullanıldığında neredeyse tümüyle zararlıdır. Gerilimi, etkinlik verisinden
tümüyle kaçınarak değil, bireysel kullanıma karşı sert bir kurumsal kural
koyarken düşünceli, bağlamsallaştırılmış ekip düzeyi kullanımına izin vererek
ve hatta teşvik ederek çözün.

## Ekibinizle tartışılacak sorular

1. **Kuruluşumuzda hiç kimse, resmî ya da gayriresmî, commit ya da kod satırı
   gibi ham bir etkinlik sayısıyla değerlendirildi mi?** Bunu doğrudan sorun ve
   rahatsız edici ama gerekli bir yanıta hazırlıklı olun; bu kötüye kullanım
   çoğu zaman resmî politika olmadan, bir yöneticinin gelişigüzel bir
   yorumuyla sessizce gerçekleşir.

2. **Etkinlik tiyatrosu özellikle bizim ekibimizde neye benzerdi ve belirtilerini
   gördük mü?** Bu örüntünün kendi ekibinizde alabileceği belirli, makul biçimi
   adlandırmak, başlarsa tanımayı çok kolaylaştırır.

3. **Ekip düzeyindeki etkinlik verimiz değiştiğinde, onu diğer SPACE
   boyutlarıyla birlikte mi yorumluyoruz, yalıtılmış olarak mı?** Yalıtılmış
   okunan bir etkinlik düşüşü endişe verici görünür; memnuniyet ya da performans
   iyileşmesiyle birlikte okunan aynı düşüş gerçekten olumlu bir örüntü
   gibi görünebilir. Gerçek gözden geçirme pratiğinizi bu ayrıma karşı kontrol
   edin.

4. **Commit ya da pull request sıklığındaki artışın, ortalama değişiklik
   boyutundaki bir küçülmeyle birlikte görüldüğü, gerçek verimlilik kazancı
   yerine anlamsız bölmeyi düşündüren bir durum hiç gördük mü?** Gerçek veriyi
   çekin ve bu belirli ikame yoluyla manipülasyon örüntüsünü kontrol edin.

5. **Ekibimizde "en çok kimin katkı yaptığı" hakkında şu anda nasıl
   konuşuyoruz ve bu konuşma, resmî bir metrik olmasa bile örtük olarak
   etkinlik verisine mi yaslanıyor?** Görünür meşguliyete yönelik gayriresmî,
   ölçülmemiş önyargı, açık bir etkinlik temelli politika olmasa bile algıyı ve
   ödülü şekillendirebilir; bunu dürüstçe ortaya çıkarın.

6. **Gerçekten değerli ama sessiz iş (derin düşünme, özenli tasarım, mentorluk)
   ekibimizde neye benzer ve az görünür etkinlik verisi üretmesine rağmen
   fark edildiğinden nasıl emin oluruz?** Bu soru, öncekilerin olumlu
   tamamlayıcısıdır: iyi, sessiz işin neye benzediğini adlandırmak, onu daha
   gürültülü, daha sayılabilir işin lehine gözden kaçmaktan korumaya yardımcı
   olur.

## Sektörel bakış

**Startup.** Küçük ve yakın iş birliği yapan bir ekipte etkinlik verisi çoğu
zaman bir panoya bile ihtiyaç duymadan görünürdür ve bu konunun uyardığı
bireysel sıralama riski, herkes zaten başkasının neyle uğraştığını bildiği için
daha az olasıdır. Risk bunun yerine, bir kurucunun erken işe alım ya da hisse
kararları verirken bilinçsizce görünür biçimde "meşgul" davranışı tercih
etmesidir.

**Küçük işletme.** Mevcut araçlarınızdan gelen etkinlik verisine ekibin genel
bir verim hissi için göz atmak sorun değildir; ama bireysel katkıda bulunanları
doğrudan karşılaştırmak için kullanmaya direnin. Küçük bir ekibin gerçek değeri
çoğu zaman, commit sayısı görünümünün sistematik olarak hafife alacağı sessiz,
yüksek kaldıraçlı iş yapan birkaç kişide yoğunlaşır.

**Kurumsal şirket.** Bireysel sıralama cazibesinin en güçlü ve en zararlı
olduğu yer burasıdır; çünkü etkinlik verisi, binlerce mühendisi kapsayan bir
performans değerlendirme süreci için çekilmesi en kolay sinyaldir ve *bir
miktar* ölçülebilir girdi bulma baskısı gerçektir. Bireysel etkinlik
sıralamasına karşı açık, iletilmiş ve uygulanan bir politika oluşturun ve
politikanın yalnızca beyan edilmediğini, pratikte gerçekten izlendiğini
doğrulamak için performans değerlendirme uygulamalarını periyodik olarak
denetleyin.

**Kamu.** Etkinlik metriklerini bir kamu raporunda verimliliğin kanıtı olarak
anmak cazip gelebilir ("bu yıl on bin commit"), ama bu tür bir manşet neredeyse
anlamsızdır ve bilgili bir inceleyici ham etkinliğin sonuçlar hakkında hiçbir
şey söylemediğini belirttiğinde tam olarak yanlış türden bir sorgulamayı
davet edebilir. Bunun yerine sonuç ve performans verisini (konu 3.3) raporlayın
ve dışa dönük hiçbir iletişimde etkinlik sayılarından kaçının.

## Örnekler

**Kurumsal şirket.** Bir yazılım şirketinin mühendislik yönetimi, resmî bir
politika olmadan, terfi görüşmelerinde bireysel commit sıklığı verisine
gayriresmî olarak başvurmaya başlamıştı. İlgisiz bir işten ayrılma analizi
projesinin tetiklediği bir iç inceleme, şirketin en karmaşık ve en değerli
sistemleri üzerinde çalışan, tek satır kod yazılmadan önce uzun süreli özenli
tasarım çalışması gerektiren mühendislerin, daha basit, daha artımlı
geliştirilen sistemlerdeki mühendislerden sistematik olarak daha düşük commit
sayılarına sahip olduğunu ve sonuç olarak terfi görüşmelerinde ince biçimde
dezavantajlı hale geldiğini buldu. Yönetim, performans ve terfi görüşmelerinde
etkinlik sayısına atıf yapılmasını yasaklayan açık, iletilmiş bir politika
yayımladı ve terfi kanıtını konu 3.3'teki çok sinyalli performans yaklaşımına
kaydırdı.

**Kamu.** Bir yasama denetim komitesine verimliliği göstermek için baskı altında
olan bir dijital hizmetler kurumu, başlangıçta mühendislik programı boyunca
yazılan toplam commit ve kod satırı sayısını sunulan değerin kanıtı olarak
raporlamayı önerdi. Bir iç teknik danışman, bu çerçevenin tam olarak yanlış
sorgulamayı davet ettiğini, çünkü teknik okuryazarlığı olan bir komite
üyesinin ham kod hacminin kodun çalışıp çalışmadığı ya da önemli olup olmadığı
hakkında hiçbir şey söylemediğine kolayca işaret edebileceğini doğru biçimde
belirterek itiraz etti. Kurumun gözden geçirilmiş raporu bunun yerine sonuç
metriklerini (konu 5.3) kullandı: vatandaş tarafından bildirilen hatalardaki
azalma ve başarılı self servis tamamlamadaki artış; bunlar komite
sorgulamasında etkinlik sayılarından çok daha iyi dayandı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Etkinlik metriklerini doğru kullanmanın, yani bireysel puan kartları olarak
değil bağlamsal biçimde kullanmanın getirisi önlenmiş zarardır: mühendisleri
etkinliğe göre bireysel olarak sıralayan kuruluşlar güvenilir biçimde
manipülasyon davranışı, azalan iş birliği (mühendislerin bir takım arkadaşına
yardım etmek yerine kendi görünür çıktısını korumaları) ve çoğu zaman en çok
değeri üreten ama en az görünür etkinliği yaratan derin, yüksek kaldıraçlı işe
karşı sistematik bir önyargı görür. Performans değerlendirme kültürüne
yerleştikten sonra bu zararı geri çevirmek gerçekten zor ve yavaştır.

Bu tuzaktan kaçınmanın toplam maliyeti çoğunlukla kurumsal disiplindir:
bireysel etkinlik sıralamasına karşı açık, tutarlı biçimde uygulanan bir
politika ve bunun yerine konu 3.3'te anlatılan daha zor, daha dürüst performans
ölçümüne yatırım yapma taahhüdü. Bu disiplin, bireysel etkinlik metriklerinin
zaman içinde güvenilir biçimde ürettiği yanlış yönlendirilmiş terfi kararlarından,
zarar görmüş iş birliğinden ve manipülasyon davranışından daha ucuza gelir.

## Anti-desenler ve tuzaklar

- **Commit sayısına ya da kod satırına göre bireysel sıralama:** bu kitabın
  tamamındaki en zararlı, tarihsel olarak en yaygın kötüye kullanım.
- **Etkinlik tiyatrosu:** esas olarak değer için değil görünürlük için yapılan
  iş; etkinlik temelli değerlendirmeye tümüyle öngörülebilir bir yanıt.
- **Ekip düzeyindeki bir etkinlik düşüşünü diğer SPACE boyutlarını kontrol
  etmeden yalıtılmış yorumlamak:** gerçekten olumlu bir örüntüyü endişe verici
  sanabilir.
- **Ham etkinlik sayılarını dış ya da yönetime dönük iletişimde anmak:** tam
  olarak yanlış sorgulamayı davet eder ve gerçek değer hakkında az şey söyler.
- **Az görünür olay üreten derin, özenli işi sistematik olarak hafife almak:**
  bu metrik ailesinin tümüne gömülü yapısal bir önyargı.
- **Terfi ya da değerlendirme görüşmelerine sızan, politikayla
  denetlenmeyen gayriresmî etkinlik önyargısı:** arkasında resmî bir metrik
  olmasa bile zararlıdır.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Etkinlik metrikleri, riskin farkında
  olunmadan, resmî ya da gayriresmî olarak bireyleri değerlendirmek ya da
  sıralamak için kullanılır.
- **Düzey 2, Geliştirme (Develop):** Riske dair bir miktar farkındalık vardır
  ama etkinlik verisinin değerlendirmeleri ya da terfi görüşmelerini
  gayriresmî olarak etkilemesini önleyen açık bir politika yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Açık, kuruluş genelinde iletilmiş
  bir politika bireysel etkinlik sıralamasını yasaklar ve etkinlik verisi
  yalnızca toplu, ekip düzeyi bağlamda kullanılır.
- **Düzey 4, Yönetme (Manage):** Performans değerlendirme ve terfi uygulamaları,
  politikanın pratikte izlendiğini doğrulamak için periyodik olarak denetlenir
  ve etkinlik verisinin kullanıldığı yerde, ham sayıların yerini kaliteye göre
  ayarlanmış etkinlik sinyalleri alır.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluş, değerlendirme kültürünü
  etkinlik metriklerinden konu 3.3'ün çok sinyalli performans yaklaşımına doğru
  kanıtlanabilir biçimde kaydırmıştır; kaymanın işe yaradığının kanıtı olarak
  iş birliğinde görünür iyileşme ve azalmış manipülasyon davranışı vardır.

## Tartışma önerileri

1. Burada hiç kimse, gayriresmî bile olsa, etkinliğinin ne kadar "meşgul" göründüğüne göre değerlendirildiğini hissetti mi?
2. Etkinlik tiyatrosu özellikle bizim ekibimizde neye benzerdi?
3. Bireysel etkinlik sıralamasına karşı açık, yazılı bir politikamız var mı ve gerçekten uygulanıyor mu?
4. Ekibimizdeki hangi sessiz, yüksek değerli iş şu anda en az görünür etkinlik verisini üretiyor?
5. Etkinlik sayılarını tümüyle kaldırmak için performans değerlendirme kanıtımızı nasıl yeniden tasarlardık?

## Temel çıkarımlar

- Etkinlik **hareketi ölçer, değeri değil**; yazılım mühendisliğinde tarihsel
  olarak en çok kötüye kullanılan tek metrik ailesidir.
- Bireyleri ham etkinlik sayılarıyla **asla sıralamayın ya da
  değerlendirmeyin**; bu, bu konudaki en zor ve en önemli kuraldır.
- Etkinlik verisini diğer SPACE boyutları için **bağlam olarak toplu**
  kullanın, asla tek başına bir hüküm olarak değil.
- Bu metrik ailesi içinde özellikle **etkinlik tiyatrosuna** ve **ikame yoluyla
  manipülasyon örüntüsüne** (konu 1.2) dikkat edin.
- Derin, yüksek değerli iş çoğu zaman **en az görünür etkinlik verisini**
  üretir; onu sistematik olarak hafife alınmaktan koruyun.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco ve Timothy
  Lister (mühendisleri görünür meşguliyetle ölçmeye karşı savunma).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal
  Newport (etkinlik metriklerinin sistematik olarak eksik saydığı sessiz,
  kesintisiz işin değeri).
- *The Tyranny of Metrics*, Jerry Z. Muller (metrik saplantısı ve maliyetleri;
  etkinlik temelli değerlendirmeye doğrudan uygulanabilir).
