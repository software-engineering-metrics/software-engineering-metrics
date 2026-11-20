# 3.2 Memnuniyet ve iyi oluş metrikleri

## Genel bakış ve motivasyon

SPACE'teki (konu 3.1) S harfi olan **memnuniyet ve iyi oluş (satisfaction and
well-being)**, hiçbir sistem telemetrisinin doğrudan gözlemleyemediği
boyuttur. Bir mühendisin işini anlamlı bulup bulmadığı, ekibi tarafından
desteklenmiş hissedip hissetmediği, tükenmişliğe doğru gidip gitmediği:
bunların hiçbiri bir sürüm kontrol kaydında ya da bir CI hattında iz bırakmaz.
Sorulması gerekir. Bu konu iyi sormakla ilgili: gerçekten öznel ve gerçekten
önemli bir durum hakkında güvenilir bir sinyal üreten ölçümü tasarlamak; yani
kesin görünen ama neredeyse hiçbir gerçek şeyi ölçmeyen bir sayı üretmemek.

Bu boyut önemlidir, çünkü başka yerlerde, çok daha sonra ve çok daha pahalıya
ortaya çıkan maliyetlerin öncü göstergesidir. Düşen memnuniyet, işten
ayrılmayı bir çıkış görüşmesinden önce öngörür. Yükselen tükenmişlik riski,
kalite çöküşünü hata oranı göstermeden önce öngörür. Yalnızca teslimat ve
etkinlik metriklerini izleyen bir kuruluş iyi oluş sorununu ancak bu sorun bir
ayrılışa, bir olaya ya da teşhisi aylar süren sessiz ve sürekli bir çıktı
düşüşüne dönüştükten sonra öğrenir. Memnuniyeti ve iyi oluşu doğrudan ölçmek,
kuruluşa bu olmadan önce harekete geçebilmesi için gereken ön süreyi kazandırır.

Büyük ekipler için bu boyut aynı zamanda konu 1.1'deki tanısal ve
değerlendirici ayrımın en keskin önem taşıdığı yerdir. Ekip koşullarını anlamak
ve iyileştirmek için kullanılan memnuniyet verisi değerli ve düşük risklidir.
Aynı veri ekipleri, daha da kötüsü bireyleri birbirine karşı sıralamak için
kullanıldığında anket aracı neredeyse hemen bozulur; çünkü insanlar, yanıtın
kendilerine ya da ekiplerine karşı kullanılacağından şüphelendikleri anda
dürüstçe yanıt vermeyi bırakır. Resmî performans değerlendirme döngüleri olan
kurumsal şirketler ve kamu kuruluşları bu kaymaya özellikle yatkındır ve ona
karşı açıkça önlem almaları gerekir.

## Temel ilkeler

- **Memnuniyet ve iyi oluş sistem telemetrisinden gözlemlenemez.** Bu boyut
  bilinçli ve iyi biçimde sorulmalıdır.
- **Anonimlik isteğe bağlı değildir.** Dürüst bir yanıt ile kişisel bir sonuç
  arasında algılanan herhangi bir bağ sinyali yok eder.
- **Bu boyut gecikmeli değil, öncü bir göstergedir.** İşten ayrılmayı ve kalite
  sorunlarını başka yerlerde ortaya çıkmadan önce öngörür.
- **Tükenmişlik, genel mutsuzluk değil, belirli ve tanınabilir bir örüntüdür.**
  Belirsiz bir memnuniyet puanına güvenmek yerine onu açıkça ölçün.
- **Eğilim, tek bir okumadan daha önemlidir.** Tek bir memnuniyet puanı bir
  anlık görüntüdür; ardışık anketlerdeki eğilim gerçek sinyaldir.

## Öneriler

### Kendi anketinizi icat etmek yerine doğrulanmış anket araçları kullanın

İyi oluş ve tükenmişliğin yerleşik, doğrulanmış ölçüm araçları vardır; en
bilineni, tükenmişliği üç tanınmış boyutta ölçen [Maslach Tükenmişlik
Envanteri](https://en.wikipedia.org/wiki/Maslach_Burnout_Inventory)'dir:
duygusal tükenme, duyarsızlaşma ya da sinizm ve kişisel başarı duygusunda
azalma. Yerleşik ve doğrulanmış bir araçtan, kısa uyarlanmış bir sürümden bile
olsa, yararlanmak şirket içinde icat edilmiş gelişigüzel bir soru kümesinden
daha güvenilir veri üretir; çünkü doğrulanmış araçlar gerçekten iddia ettiği
şeyi ölçüp ölçmediği açısından önceden sınanmıştır.

### Gerçek anonimliği garanti edin ve bunu nasıl yaptığınız konusunda şeffaf olun

Bireysel yanıtların bir kişiye kadar izlenemeyeceğini açıkça belirtin ve
bunu gerçekten kastedin; özellikle yanıt örüntülerinin başka türlü
çıkarsanabileceği küçük ekiplerde. Kuruluşun kendisinin anonimliği
kaldıramayacağı üçüncü taraf bir anket aracı kullanın, küçük ekiplerde
çıkarsamayı önlemek için toplu sonuçları yalnızca asgari bir grup
büyüklüğünün (yaygın olarak beş ya da daha fazla yanıtlayıcı) üzerinde
yayımlayın ve kimseden katılmasını istemeden önce bu politikayı açıkça
iletin. Anonimliğin kazara bile olsa bozulduğu tek bir olay, gelecekteki her
ankete duyulan güveni yok eder.

### Tek bir okumayı değil, zaman içindeki eğilimi izleyin

Tek bir memnuniyet puanının kendi başına tanısal değeri sınırlıdır; üç ardışık
anket döngüsü boyunca süren düşen bir eğilim çok daha güçlü ve eyleme
dönüştürülebilir bir sinyaldir. Anketi tutarlı ve ılımlı bir ritimle, yaygın
olarak üç ayda bir yapın ve sonuçları her zaman yalıtılmış bir sayı olarak
değil, geçmiş eğilim çizgisiyle birlikte sunun; böylece hem okuyucular hem
yanıtlayıcılar tek seferlik gürültüye değil, gerçek değişime göre kalibre
olabilir.

### Genel memnuniyeti belirli tükenmişlik riskinden ayırın

Genel bir memnuniyet sorusu ("işinizden ne kadar memnunsunuz?") ile
tükenmişliğe özgü bir soru ("işiniz sizi duygusal olarak tüketiyor mu?")
ilişkili ama ayrı şeyleri ölçer; bir ekip birincisinde makul puan alırken
ikincisinde gerçek uyarı işaretleri gösterebilir. İkisini de anket
tasarımınıza ekleyin ve tükenmişliğe özgü bir uyarı işaretini, genel
memnuniyetteki bir düşüşten daha hızlı ve daha doğrudan takip gerektiren bir
şey olarak ele alın.

### Anket verisini nesnel destekleyici sinyallerle eşleyin, ama dikkatle

Mümkün olduğunda memnuniyet eğilimlerini iyi oluşla makul biçimde ilişkili
nesnel sinyallerle destekleyin: gönüllü işten ayrılma oranı, süregelen mesai
dışı çalışma örüntüleri ya da kullanılmayan izin süresinde artış. Bunları
doğrudan sormanın yerine değil, destekleyici kanıt olarak kullanın ve bu
desteklemenin kendisi güveni, ve ironik biçimde memnuniyeti zedeleyen bir
gözetim mekanizmasına dönüşmesin diye dikkatli olun.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Gelişigüzel şirket içi anket soruları | Hızlı kurulur, bağlama göre uyarlanmıştır | Doğrulanmamıştır; gerçekten iddia ettiğini ölçüp ölçmediği belirsizdir |
| Doğrulanmış araç (örn. uyarlanmış Maslach Tükenmişlik Envanteri) | Sınanmış, karşılaştırılabilir, daha güvenilir sinyal | Daha fazla kurulum gerektirir ve mühendislik bağlamına uyarlanması gerekebilir |
| Sık kısa nabız anketleri | Düşük yanıtlayıcı yorgunluğu, neredeyse gerçek zamanlı sinyal | Anket başına daha az derinlik; aşırı yorumlanırsa gürültü riski |
| Seyrek, derin anketler | Zengin, ayrıntılı sinyal | Akut tükenmişlik gibi hızlı gelişen bir sorunu yakalamada daha yavaş |

Temel gerilim **derinlik ile sıklık** arasındadır. Üç ayda bir yapılan derin ve
doğrulanmış bir anket güvenilir ve ayrıntılı bir resim verir ama döngüler
arasında hızlı gelişen bir sorunu kaçırabilir; sık kısa nabız anketleri
sorunları daha hızlı yakalar ama aşırı kullanılırsa daha sığ, daha gürültülü
veri ve yanıtlayıcı yorgunluğu riski taşır. Gerilimi, üç aylık ritimle çalışan
daha derin ve doğrulanmış bir anketi birincil araç olarak kullanıp, erken uyarı
için çok daha sık ve çok kısa, isteğe bağlı bir nabız kontrolüyle (bir ya da
iki soru) destekleyerek, her seferinde aynı derinlikte katılım istemeden
çözün.

## Ekibinizle tartışılacak sorular

1. **Doğrulanmış bir anket aracı mı kullanıyoruz, yoksa memnuniyeti ya da
   tükenmişliği gerçekten ölçtüklerine dair hiçbir kanıt olmayan, kendimizin
   icat ettiği sorular mı?** Mevcut anketiniz gelişigüzel kurulduysa, Maslach
   Tükenmişlik Envanteri gibi yerleşik bir araçtan uyarlamanın daha güvenilir
   veri üretip üretmeyeceğini düşünün.

2. **Küçük ekipler de dahil olmak üzere, yanıt örüntülerinin aksi halde
   çıkarsanabileceği durumlarda anonimliği dürüstçe garanti edebilir miyiz?**
   Gerçek anket araçlarınızı ve toplulaştırma pratiğinizi gözden geçirin;
   politika yapamaması gerektiğini söylese bile kararlı bir yöneticinin pratikte
   bir bireyin yanıtlarını çıkarsayıp çıkaramayacağını kontrol edin.

3. **Memnuniyet verisinin, daha sonra başka metriklerde ortaya çıkan bir işten
   ayrılma sıçramasını ya da kalite sorununu önceden haber verdiğini hiç
   gördük mü?** Anket geçmişinize işten ayrılma ve olay verilerinizle birlikte
   geriye dönük bakın ve öncü gösterge örüntüsü görünüyor mu inceleyin. Hiç
   kontrol etmediyseniz, bunun kendisi tartışmaya değerdir.

4. **Anketimizde genel memnuniyeti belirli tükenmişlik riskinden ayırıyor
   muyuz, yoksa tek bir karışık soruya mı güveniyoruz?** Bir ekip genel
   memnuniyette iyi görünürken altta gerçek tükenmişlik uyarı işaretleri
   gösterebilir; mevcut aracınızın bu farkı gerçekten yakalayıp yakalayamayacağını
   kontrol edin.

5. **Memnuniyet verisi hiç, gayriresmî bile olsa, ekipleri karşılaştırmak ya da
   birbirine karşı sıralamak için kullanıldı mı?** Değerlendirici kullanıma
   doğru bu kayma anket aracını neredeyse hemen bozar; çünkü yanıtlayıcılar
   rekabetçi bir sonuçtan şüphelendikleri anda yanıtlarını değiştirir.

6. **Gerçek yanıt oranımız nedir ve düşen bir yanıt oranı bize kendi başına ne
   söylerdi?** Ardışık anketlerde düşen bir yanıt oranı, çoğunlukla sürece
   duyulan güvenin aşındığının ya da anket yorgunluğunun işaretidir; bir veri
   toplama sıkıntısı diye göz ardı edilmek yerine kendi başına
   araştırılmayı hak eder.

## Sektörel bakış

**Startup.** Bir avuç insanla resmî anonim anketler gereksiz hissedilebilir ve
doğrudan konuşma, memnuniyet sorunlarını çoğu zaman üç aylık bir araçtan daha
hızlı yüzeye çıkarır. Risk, bir kurucunun şikâyet olmamasını sorun olmaması
sanmasıdır; ekip herkesin her gün konuştuğu boyutu aştığında hafif ve anonim bir
yoklamayı bile devreye sokun.

**Küçük işletme.** Özel bir insan analitiği işlevi olmadan, doğrulanmış
soruların kısa ve uyarlanmış bir kümesiyle üç ayda bir çalıştırılan basit,
ücretsiz ya da düşük maliyetli bir anonim anket aracı yapılabilir. Ekip samimi
diye anonimlik garantilerini atlama dürtüsüne direnin; o yakınlık tam da dürüst
olumsuz geri bildirimi doğrudan vermeyi zorlaştıran şeydir.

**Kurumsal şirket.** Bu ölçekte anket altyapısı gerçek yatırım gerektirir:
uygun bir üçüncü taraf aracı, asgari grup büyüklüğüne dayalı bir toplulaştırma
politikası ve açık, tutarlı biçimde iletilen, değerlendirmede kullanılmama
politikası. Getirisi de orantılı olarak daha büyüktür; çünkü kalabalık bir
kuruluşta tükenmişlik eğilimini işten ayrılmalara yol açmadan yakalamak çok
daha büyük bir kurumsal bilgi birikimini korur.

**Kamu.** Kamu sektörü ücret kısıtlarından gelen elde tutma baskısı bu boyutu
isteğe bağlı değil, stratejik olarak önemli kılar. İyi oluş verisi, yalnızca
ücret kısıtlarının karşılayamadığı parasal olmayan elde tutma yatırımları
(araçlar, korunmuş zaman, iş yükü yönetimi) için bütçe taleplerini doğrudan
gerekçelendirebilir; yeter ki veri toplamanın kendisi güvenle anılabilecek kadar
güvenilir olsun.

## Örnekler

**Kurumsal şirket.** Bir bulut altyapısı şirketinin platform ekibi bir yıldan
uzun süre genel memnuniyette iyi puan aldı; Maslach Tükenmişlik Envanteri'nin
duygusal tükenme alt ölçeğinden uyarlanan tükenmişliğe özgü bir soru ise dört
ardışık çeyrek boyunca istikrarlı bir düşüş gösterdi. Başlangıçta genel
memnuniyet sayısı iyi göründüğü için endişeyi geçiştirmeye eğilimli olan
yönetim, ikinci ardışık düşüş çeyreğinin ardından daha derin araştırdı ve
ekibin, bir kadro dondurmasının ardından neredeyse bir yıldır sürdürülemez
bir nöbet (on-call) yükünü (konu 6.3) taşıdığını buldu. Yeterli nöbet
kadrosunu geri getirmek, tükenmişlik eğilimini iki çeyrek içinde tersine
çevirdi; şirketin verilerinin bu örüntünün tipik sonraki sonucu olarak
gösterdiği işten ayrılma sıçramasına dönüşmesinden çok önce.

**Kamu.** Özel sektör işverenleriyle maaşta rekabet etmekte kronik güçlük
yaşayan bir eyalet hükümeti BT kurumu, sağlayamayacağı bir maaş artışı yerine
korunmuş odak zamanı politikası için bütçe gerekçesi oluşturmak amacıyla iyi
oluş anketi verisini özellikle kullandı. Anket, aktif olarak iş aradığını
belirten yanıtlayıcılar arasında ayrılma niyetinin en güçlü öngörücüleri olarak
ücreti değil, kesinti sıklığını ve toplantı yükünü gösterdi. Ortaya çıkan
politika, yani odaklı mühendislik işi için haftada iki kesintisiz öğleden sonra
bloğunun ayrılması, rekabetçi bir maaş artışının gerektireceği maliyetin
küçük bir kısmıyla, izleyen yıl hem memnuniyet puanlarında hem de gönüllü elde
tutmada ölçülebilir bir iyileşmeyle ilişkili çıktı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Memnuniyeti ve iyi oluşu doğrudan ölçmenin getirisi erken uyarıdır:
tükenmişlik eğilimini işten ayrılmaya dönüşmesinden tam bir yıl önce yakalayan
bir kuruluş, işe alındıktan sonra bile tam verimliliğe ulaşması aylar süren bir
yedeği işe alma ve uyum sürecinin maliyetinin çok küçük bir kısmıyla
müdahale edebilir. Deneyimli bir mühendisin gönüllü ayrılışı kuruluşa, uyarıyı
sağlayabilecek anket altyapısından çok daha pahalıya mal olur.

Toplam sahip olma maliyeti; anket araçlarını, gerçek anonimliği garanti etme
ve sürdürme disiplinini ve veriyi toplayıp rahatsız edici sonuçları görmezden
gelmek yerine verinin gösterdiğine göre harekete geçme konusundaki kurumsal
taahhüdü içerir. Bu son maliyet, yani harekete geçme istekliliği, çoğu zaman
ölçümün kendisi değil asıl darboğazdır; kimsenin ele almadığı bir sorunu
ortaya çıkaran bir anket, bozulmuş bir anonimlik garantisi kadar kesin biçimde
araca duyulan güveni aşındırır.

## Anti-desenler ve tuzaklar

- **Gelişigüzel, doğrulanmamış anket soruları:** güvenilirliği belirsiz veri
  üretir.
- **Zayıf ya da bozulmuş anonimlik garantileri:** dürüst yanıtı ve araca
  duyulan güveni, çoğu zaman kalıcı olarak yok eder.
- **Eğilimi izlemek yerine tek bir okumaya tepki vermek:** gürültüye aşırı
  tepki verir ya da gerçek bir yavaş düşüşü kaçırır.
- **Genel memnuniyeti tükenmişliğe özgü sorularla karıştırmak:** iyi görünen bir
  ortalamanın içinde gerçek bir uyarı işaretini maskeleyebilir.
- **Memnuniyet verisini ekipleri sıralamak ya da karşılaştırmak için
  kullanmak:** dürüst yanıtı bozan değerlendirici kayma.
- **Veriyi toplayıp rahatsız edici bir sonuca asla göre harekete geçmemek:**
  anket güvenini bozulmuş bir anonimlik sözü kadar tamamen aşındırır.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Memnuniyet ve iyi oluş hiç ölçülmez ya da
  yalnızca gayriresmî, yapısız sohbetle ölçülür.
- **Düzey 2, Geliştirme (Develop):** Gelişigüzel bir anket vardır ama
  doğrulaması, tutarlı bir ritmi ya da güçlü bir anonimlik garantisi yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** Doğrulanmış ya da uyarlanmış bir
  anket aracı, kuruluş genelinde tutarlı bir ritimle ve güçlü, iletilmiş bir
  anonimlik garantisiyle çalışır.
- **Düzey 4, Yönetme (Manage):** Eğilimler ardışık döngüler boyunca etkin
  biçimde izlenir, tükenmişliğe özgü sinyaller genel memnuniyetten ayrılır ve
  kuruluşun uyarı işaretlerine göre harekete geçmek için belgelenmiş bir süreci
  vardır.
- **Düzey 5, Orkestrasyon (Orchestrate):** İyi oluş verisi iş gücü planlamasını
  ve elde tutma yatırımını doğrudan bilgilendirir, nesnel sinyallerle dikkatle
  desteklenir ve kuruluş, ölçülmüş bir düşüşü işten ayrılmaya ya da kalite
  sorununa dönüşmeden tersine çeviren belirli müdahaleleri gösterebilir.

## Tartışma önerileri

1. Mevcut anket aracımız gerçekten anonim olup olmadığı konusunda incelemeden sağ çıkar mıydı?
2. Bir memnuniyet ya da tükenmişlik eğilimi hiç daha sonra başka yerde ortaya çıkan bir sorunu öngördü mü?
3. Duymak istemediğimiz bir anket sonucuna göre harekete geçme sürecimiz nedir?
4. Ölçümümüzde tükenmişlik riskini genel memnuniyetten şu anda ayırıyor muyuz?
5. İyi oluş verimiz şu anda en iyi hangi parasal olmayan yatırımı gerekçelendirirdi?

## Temel çıkarımlar

- Memnuniyet ve iyi oluş **doğrudan sorulmalıdır**; hiçbir sistem telemetrisi bu
  boyutu gözlemleyemez.
- Mümkün olduğunda **doğrulanmış bir araç** kullanın ve gerçek, iyi iletilmiş
  **anonimliği** garanti edin.
- Bu boyut, aksi halde çok daha sonra ve çok daha pahalıya yüzeye çıkacak
  işten ayrılma ve kalite sorunları için bir **öncü göstergedir**.
- **Genel memnuniyeti belirli tükenmişlik riskinden** ayırın ve tek bir okumayı
  değil, **zaman içindeki eğilimi** izleyin.
- Bu veriyi asla **ekipleri sıralamak ya da karşılaştırmak** için kullanmayın;
  bu kayma dürüst yanıtı neredeyse hemen bozar.

## Kaynaklar ve ileri okuma

- Maslach, Christina, and Susan E. Jackson, *Maslach Burnout Inventory*
  (tükenmişliği üç boyutta ölçen, doğrulanmış ve yaygın kullanılan araç).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (anket tasarımıyla ilgili motivasyon ve memnuniyet araştırması).
- *The Burnout Challenge: Managing People to Avoid Burnout and Improve
  Wellbeing*, Christina Maslach ve Michael P. Leiter (tükenmişliğin
  kurumsal nedenleri ve müdahaleleri).
