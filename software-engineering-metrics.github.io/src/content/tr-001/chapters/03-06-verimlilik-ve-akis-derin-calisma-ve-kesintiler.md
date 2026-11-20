# 3.6 Verimlilik ve akış: derin çalışma ve kesintiler

## Genel bakış ve motivasyon

SPACE'in (konu 3.1) son boyutu olan **verimlilik ve akış (efficiency and
flow)**, sürtünmenin yokluğunu ve kesintisiz, odaklı çalışmayı sürdürebilme
yeteneğini ölçer. Bu boyut, Bölüm 2'nin teslimat akışı metrikleri (işin bir
ekip sisteminden nasıl geçtiğini ölçen konu 2.5'in akış verimliliği) ile daha
kişisel bir şeyin sınırında durur: derin, odaklı mühendislik işinin bireysel
bilişsel deneyimi ve bu deneyimin kesintiyle ne sıklıkla parçalandığı. Yazılım
mühendisliği, çoğu bilgi işinden daha fazla, aynı anda çalışma belleğinde büyük
miktarda bağlam tutmaya dayanır ve bu da onu kesintinin maliyetine alışılmadık
ölçüde açık kılar.

Bu maliyet üzerine araştırma tutarlı ve ciddidir: derin, karmaşık bir işe
verilen kesintiden sonra yeniden odaklanmak saniyeler değil, düzenli olarak
birçok dakika, bazen yarım saate yakın bir süre alır; bir mühendisin kesinti
olmadan önce tuttuğu [çalışma belleğini](https://en.wikipedia.org/wiki/Working_memory)
tamamen yeniden kurmak için. Günü toplantılar, bildirimler ve bağlam
değişimleriyle on beş dakikalık bloklara bölünmüş bir mühendis bol etkinlik
(konu 3.4) gösterebilir, ama iki korunmuş, kesintisiz saatle aynı mühendisin
yapacağından çok daha az gerçekten zor iş başarır. Bu boyut, tam da bu
görünmez maliyeti görünür kılmak için vardır.

Büyük ekipler için kesinti maliyeti yapısal olarak birikir: daha fazla toplantı,
daha fazla ekipler arası koordinasyon yükü, daha fazla Slack kanalı ve bildirim,
daha fazla süreç kontrol noktası; hepsi tek tek makul görünür ama birlikte
günü ağır biçimde parçalar. Daha ağır yönetişim ve koordinasyon ihtiyacı olan
kurumsal şirketler ve kamu kuruluşları bu parçalanmaya özellikle yatkındır ve
bu boyut yönetime, "odak zamanını" kimsenin gerçekten korumadığı belirsiz
bir kültürel özlem olarak ele almak yerine, onu ölçmek ve ona karşı
korunmak için somut bir yol verir.

## Temel ilkeler

- **Bağlam değişiminin yalnızca hissedilen değil, gerçek ve ölçülebilir bir
  maliyeti vardır.** Kesintiden sonra yeniden odaklanmak düzenli olarak
  saniyeler değil, birçok dakika alır.
- **Toplantı yükü ve kesinti sıklığı yalnızca anekdotsal değil, ölçülebilirdir.**
  Takvim ve araç verisi ikisini de doğrudan ortaya çıkarabilir.
- **Korunmuş, kesintisiz zaman, bir kuruluş büyüdükçe varsayılan olarak
  hayatta kalan değil, bilinçli biçimde savunulması gereken kıt bir
  kaynaktır.**
- **Bu boyut çoğu zaman etkinlik ile performans arasındaki bir boşluğu açıklar**
  (konu 3.3 ve 3.4): düşük performanslı yüksek etkinlik, bazen parçalanmış,
  kesinti dolu günlere dayanır.
- **Odak ihtiyaçlarında bireysel çeşitlilik gerçektir** ve bu boyut herkese katı,
  özdeş bir takvim dayatmak için değil, ekip normlarını bilgilendirmek için
  kullanılmalıdır.

## Öneriler

### Toplantı yükünü ve parçalanmayı doğrudan takvim verisinden ölçün

Bir mühendisin tipik haftasında bulunan, iki saat ya da daha uzun kesintisiz
blokların sayısını ve süresini takvim verisiyle hesaplayın. Bazen **odak
zamanı (focus time)** ya da **üretici zaman (maker time)** denen bu tek sayı,
bu boyut için doğrudan, araçlandırılabilir bir vekildir ve nominal olarak tam
zamanlı bir mühendisin, toplantılar hesaba katıldığında tipik bir haftada bu tür
neredeyse hiç bloğunun bulunmadığını görmek yaygındır; bu bulgu genellikle
yönetimi mühendislerin kendisinden daha çok şaşırtır.

### Mümkün olduğunda kesinti sıklığını araç verisinden izleyin

Bildirim hacmi, çalışma saatlerinde gelen mesaj sıklığı ve görevler arası bağlam
değişim oranı mevcut iş birliği araçlarından yaklaşık olarak çıkarılabilir. Bu
veriyi, etkinlik verisiyle (konu 3.4) aynı ilkeyi izleyerek, toplu ve ekip
düzeyinde kullanın: asla bireysel bir gözetim mekanizması olarak değil, her zaman
kuruluşun koordinasyon yükünün gerçek odağı koruyanın ötesine geçip geçmediğine
dair bir ekip düzeyi sinyali olarak.

### Açık odak zamanı bloklarını ekip ya da kuruluş normu olarak koruyun

Bu boyutun işaret ettiği en etkili müdahale basit ve düşük maliyetlidir: belirli,
korunmuş zaman blokları, yaygın olarak belirli günlerde bir sabah ya da bir
öğleden sonra, ayırın ve bu sürelerde varsayılan olarak toplantı
planlanmasın. Bu, tek bir ekibin kontrolünün ötesinde kurumsal destek gerektirir;
çünkü toplantılar çoğu zaman ekip sınırları boyunca planlanır. Ama tutarlı biçimde
uygulandığı yerde, bu kitabın tamamındaki en yüksek getirili, en düşük maliyetli
müdahalelerden biridir.

### Akış verisini etkinlik ile performans arasındaki boşlukla ilişkilendirin

Bir ekip yüksek etkinlik (konu 3.4) ama sabit ya da düşen performans (konu 3.3)
gösterdiğinde, boşluğun bir bireysel ya da ekip yetkinliği sorununu yansıttığını
varsaymadan önce akış ve kesinti verisini kontrol edin. Ağır biçimde parçalanmış
bir takvim tam da bu örüntüyü üretebilir: bol görünür hareket, az gerçekten
zor iş tamamlanmış; çünkü zor iş özellikle parçalanmanın yok ettiği sürekli
odağı gerektirir.

### Tek katı bir takvim dayatmak yerine bireysel çeşitliliğe saygı gösterin

Her mühendis özdeş odak zamanı örüntülerine ihtiyaç duymaz ya da onlarla en iyi
çalışmaz; bazıları gerçekten en iyi düşünmeyi daha kısa patlamalarla yapar,
bazıları uzun, kesintisiz süreler ister. Bu boyutun verisini, herkesin
ihtiyacının tekdüze olduğunu varsayan tek bir zorunlu takvim yerine, ekip düzeyi
normları ve varsayılanları, zorunlu değil isteğe bağlı çıkılabilen korunmuş
blokları bilgilendirmek için kullanın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Odak zamanı koruması yok | Toplantılar için azami planlama esnekliği | Parçalanmış günler gerçekten zor iş için kapasiteyi azaltır |
| Ekip düzeyinde korunmuş odak blokları | Düşük maliyet, yüksek getiri, derin çalışmayı doğrudan savunur | Tek bir ekibin ötesinde koordinasyon desteği gerektirir |
| Kuruluş genelinde toplantısız dönemler | En güçlü koruma, aşındırması en zor | Geniş kurumsal taahhüt gerektirir ve daha fazla koordinasyon isteyen roller için katı hissedilebilir |
| Bireysel isteğe bağlı odak planlaması | Çalışma stilindeki bireysel çeşitliliğe saygı gösterir | Daha zayıf varsayılan koruma; planlama baskısı altında kolay aşınır |

Temel gerilim **koordinasyon ihtiyacı ile odak koruması** arasındadır. Büyük
kuruluşlar işlemek için gerçekten toplantılara ve ekipler arası koordinasyona
ihtiyaç duyar ve bu ihtiyaç, derin mühendislik işinin gerektirdiği kesintisiz
zamanla doğrudan çekişir. Gerilimi koordinasyonu ortadan kaldırarak değil, odak
zamanını her toplantı talebi karşılandıktan sonra kalan zaman olmak yerine açık,
korunmuş bir varsayılan yaparak, odak korumasını artakalan değil bilinçli
savunulacak bir kaynak olarak ele alarak çözün.

## Ekibinizle tartışılacak sorular

1. **Ekibimizdeki tipik bir mühendis haftada, gerçek takvim verisinden ölçüldüğünde,
   gerçekte kaç kesintisiz iki saatlik bloğa sahip?** Çoğu ekip bunu hiç doğrudan
   kontrol etmemiştir ve ölçüldüğünde yanıt genellikle yalnızca izlenimden
   tahmin edilenden daha düşüktür.

2. **Akış verisinin açıklayabileceği bir etkinlik ile performans arasındaki bir
   boşluk hiç gördük mü?** Bir ekibin meşgul göründüğü ama gerçekten zor işte
   eksik teslim ettiği bir döneme bakın ve toplantı yükünün ya da parçalanmanın
   boşluğu açıklayıp açıklayamayacağını kontrol edin.

3. **Ekibimiz için korunmuş, toplantısız bir odak bloğu kurmak için ne gerekir ve
   bugün önünde ne duruyor?** Belirli engeli adlandırın, ekipler arası planlama
   alışkanlıkları, yönetimin sürekli erişilebilirlik beklentisi gibi, ve gerçekte
   hissedildiği kadar sabit olup olmadığını tartışın.

4. **Odak ihtiyaçlarındaki bireysel çeşitliliğe saygı gösteriyor muyuz, yoksa
   mevcut takvimimiz herkesin aynı şekilde çalıştığını mı varsayıyor?** Herkese
   uyan tek bir örüntü varsaymak yerine ekip üyelerine odaklı işi gerçekte nasıl
   yapılandırmayı tercih ettiklerini doğrudan sorun.

5. **Toplantı yükümüz son yılda nasıl değişti ve bu tartışmadan önce eğilimi
   fark eden oldu mu?** Parçalanma çoğu zaman yavaş yavaş, makul görünen her
   seferinde bir yinelenen toplantıyla sızar ve nadiren tek bir bilinçli kararın
   sonucudur.

6. **Kuruluş genelinde haftada iki tam öğleden sonrayı derin çalışmaya
   ayırsaydık, neye hayır demek zorunda kalırdık ve buna değer miydi?** Bu somut
   ödünleşim sorusu, koordinasyona karşı odak gerilimini soyut bir özlem olarak
   bırakmak yerine açığa çıkarır.

## Sektörel bakış

**Startup.** Küçük bir ekiple toplantı yükü genellikle doğal olarak düşüktür ve
risk bunun yerine özellikle planlanmış toplantılardan değil, aynı anda birçok
şapka takmaktan kaynaklanan bağlam değişimidir. Küçük ölçekte bile odak zamanını
bilinçli olarak koruyun; çünkü alışkanlığı erken kurmak, sonradan uyarlamaktan
daha kolaydır.

**Küçük işletme.** Örneğin öğleden önce iç toplantı yok gibi basit, gayriresmî bir
norm, takvim analitiği aracına ihtiyaç duymadan bu boyutun faydasının çoğunu
yakalayabilir. Bu ölçekte disiplin ölçümden daha önemlidir.

**Kurumsal şirket.** Toplantı yükü ve ekipler arası koordinasyon yükü burada kötü
ölçeklenir ve parçalanma çoğu zaman, bütün olarak kimsenin bakmadığı, tek tek
makul birçok yinelenen toplantı yoluyla sızar. Odak zamanı erişilebilirliğini
kuruluş genelinde takvim verisiyle doğrudan ölçün ve korunmuş odak bloklarını,
ekipler arası planlama alışkanlıklarınca geçersiz kılınan ekip bazında bir
seçenek değil, kuruluş genelinde bir politika olarak ele alın.

**Kamu.** Kamu kuruluşlarında yaygın olan ağır yönetişim ve koordinasyon
gereksinimleri, daha fazla sürece ve daha fazla gözden geçirme toplantısına doğru
doğal çekim güçlü olduğundan, bu boyutu bilinçli biçimde korumayı özellikle
önemli kılar. Toplantı azaltmayı gerçek mühendislik kapasitesini korumak yerine
denetimi azaltmak olarak görebilecek paydaşlara gerekçe sunarken odak zamanı
korumasını açıkça bir verimlilik yatırımı olarak çerçeveleyin.

## Örnekler

**Kurumsal şirket.** Bir finansal teknoloji şirketinin mühendislik yönetimi,
commit etkinliği ile ekibin gerçekten karmaşık özellikleri zamanında yayına
alabilme yeteneği arasında kalıcı bir boşluk fark etti. Takvim analizi, ortanca
mühendisin haftada üç saatten az kesintisiz iki saatlik blok bulunduğunu
buldu; bu bloklar, çoğu iki yıl içinde artımlı olarak, o kadar toplam toplantı
yükü ekleme yönünde tek bir karar olmadan eklenmiş yinelenen durum
toplantılarından oluşan bir takvime yayılmıştı. Şirket, haftada iki zorunlu,
kuruluş genelinde toplantısız öğleden sonra getirdi ve altı ay sonraki bir takip
anketi ile teslimat metriği incelemesi, hem iyileşen memnuniyet puanlarını hem de
özellikle karmaşık, çok günlü özellikler için döngü süresinde (konu 2.6)
ölçülebilir bir azalmayı gösterdi.

**Kamu.** Ağır yönetişim gereksinimleri altında çalışan bir federal kurumun
mühendislik ekibi, çıkış görüşmelerinde birkaç mühendisin endişe dile
getirmesinin ardından yapılan bir takvim denetimine göre, mühendislerin
çalışma saatlerinin neredeyse %40'ını durum ve uyumluluk gözden geçirme
toplantılarında geçirdiğini buldu. Ekip, gerçek denetim amaçlarına hizmet eden
yönetişim gereksinimlerini ortadan kaldırmak yerine, gereksiz durum
toplantılarını haftalık tek bir gözden geçirmede birleştirdi ve rutin uyumluluk
kontrollerini canlı toplantılar yerine asenkron dokümantasyon incelemesine
kaydırdı; altta yatan denetim işlevini korurken toplantı yükünü neredeyse
yarıya indirdi ve sonraki anket verisi bildirilen odak zamanında anlamlı bir
iyileşme gösterdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Odak zamanını korumanın getirisi maliyetiyle orantısızdır: yukarıdaki finansal
teknoloji örneği, planlama disiplininin ötesinde hiçbir şeye mal olmayan bir
değişiklikten, haftada iki toplantısız öğleden sonradan, ölçülebilir bir teslimat
iyileşmesi gösteriyor. Derin, karmaşık iş özellikle sürekli, kesintisiz dikkate
bağlı olduğundan, gerçek odak zamanı erişilebilirliğindeki mütevazı bir artış bile
kuruluşun en zor, en yüksek değerli işi için kapasitesinde orantısız bir
iyileşme sağlayabilir.

Toplam sahip olma maliyeti neredeyse tümüyle araç yatırımı değil kurumsal
disiplindir: takvim verisi genellikle zaten mevcuttur ve müdahalenin kendisi,
belirli blokları korumak, o bloklar sırasında toplantı planlamaya hayır deme
istekliliğinin ötesinde uygulamaya hiçbir şeye mal olmaz. Başlıca süregelen
maliyet, kaçınılmaz olarak yeni koordinasyon ihtiyaçları doğdukça korunmuş
zamanı kademeli aşınmaya karşı savunmaktır.

## Anti-desenler ve tuzaklar

- **Parçalanmış günleri ölçeğin kaçınılmaz bir maliyeti saymak:** yavaş yavaş
  birikir ve nadiren tek bir bilinçli kararın sonucudur; bu da ele alınmadan
  bırakılmasını kolaylaştırır.
- **Akış verisini kontrol etmeden yüksek etkinliği yüksek performansla
  karıştırmak:** parçalanmış bir takvim tam da bu yanıltıcı örüntüyü
  üretebilir.
- **Herkese tek, katı bir odak zamanı takvimi dayatmak:** insanların en iyi nasıl
  çalıştığındaki gerçek bireysel çeşitliliği göz ardı eder.
- **Kesinti ya da bildirim verisini bireysel gözetim olarak kullanmak:** konu
  3.4'ün etkinlik verisi için uyardığı kötüye kullanım riskinin aynısını tekrarlar.
- **Korunmuş odak zamanının istisnalarla yavaş yavaş aşınmasına izin vermek:**
  konu 2.5'in WIP sınırları için uyardığı aynı aşınma riski, odak zamanı
  korumasına uygulanmış hâliyle.
- **Yönetişim ya da koordinasyon gereksinimlerini kümülatif toplantı yükü
  maliyetlerini hiç ölçmeden eklemek:** parçalanma, makul görünen her seferinde
  bir eklemeyle sızar.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Odak zamanı ve kesinti maliyeti ölçülmez ya da
  korunmaz; toplantı yükü kümülatif etkisini kimse izlemeden büyür.
- **Düzey 2, Geliştirme (Develop):** Parçalanmaya dair gayriresmî bir miktar
  farkındalık vardır ama takvim verisi analiz edilmez ve korunmuş zaman resmî
  olarak kurulmamıştır.
- **Düzey 3, Standartlaştırma (Standardize):** Odak zamanı erişilebilirliği takvim
  verisinden ölçülür ve korunmuş, toplantısız bloklar bir ekip ya da kuruluş normu
  olarak kurulur.
- **Düzey 4, Yönetme (Manage):** Akış verisi, parçalanma kaynaklı düşük
  performansı teşhis etmek için etkinlik ile performans arasındaki boşluklarla
  etkin biçimde ilişkilendirilir ve korunmuş zaman aşınma açısından izlenir.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluş odak zamanı korumasını birinci
  sınıf bir verimlilik yatırımı olarak ele alır, ona dayandırılan belirli
  teslimat ve memnuniyet iyileşmelerini gösterebilir ve onu, aksi halde
  aşındıracak kademeli, artımlı baskıya karşı proaktif olarak savunur.

## Tartışma önerileri

1. Geçen hafta her birimizin gerçekten kesintisiz kaç saati vardı?
2. Toplantı yükümüz kimse bilinçli karar vermeden yavaş yavaş mı büyüdü?
3. Yakın tarihli bir etkinlik ile performans boşluğu aslında nerede bir akış sorunu olabilir?
4. Parçalanmayı azaltmamız istense ilk hangi tek yinelenen toplantıyı keserdik?
5. Haftada iki korunmuş, toplantısız öğleden sonra kurmak bize gerçekte neye mal olurdu?

## Temel çıkarımlar

- Verimlilik ve akış, **sürtünmenin yokluğunu** ve yazılım mühendisliğinin
  alışılmadık ölçüde ağır biçimde dayandığı **kesintisiz, odaklı çalışmayı**
  sürdürebilme yeteneğini ölçer.
- **Bağlam değişiminin gerçek, ölçülebilir bir maliyeti vardır;** çoğu zaman
  yeniden odaklanmak saniyeler değil, birçok dakika alır.
- **Odak zamanı erişilebilirliğini doğrudan takvim verisinden ölçün;** sonuç
  genellikle yönetimi şaşırtır.
- Bu boyut çoğu zaman, aksi halde yanlış teşhis edilecek bir **etkinlik ile
  performans arasındaki boşluğu açıklar**.
- **Korunmuş odak zamanı blokları** düşük maliyetli, yüksek getirili bir
  müdahaledir ama kademeli aşınmaya karşı bilinçli savunma gerektirir.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Deep Work: Rules for Focused Success in a Distracted World*, Cal
  Newport (bağlam değişiminin maliyeti ve korunmuş odak zamanının değeri).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco ve Timothy
  Lister (kesinti maliyeti ve odağı koruyan ortamların tasarımı).
- Mark, Gloria, Daniela Gudith, and Ulrich Klocke, "The Cost of Interrupted
  Work: More Speed and Stress" (2008): kesintiden toparlanma süresi üzerine
  deneysel araştırma.
