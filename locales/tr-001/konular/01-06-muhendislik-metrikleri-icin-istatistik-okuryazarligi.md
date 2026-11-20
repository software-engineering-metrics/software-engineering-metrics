# 1.6 Mühendislik metrikleri için istatistik okuryazarlığı

## Genel bakış ve motivasyon

Bir metrik programını iyi yürütmek için istatistik diplomasına ihtiyacınız yok;
ancak aksi halde iyi yönetilen, iyi enstrümante edilmiş metrikleri etkin biçimde
yanıltıcı hale getiren az sayıda belirli, yaygın hatadan kaçınmanız gerekir. Bir
ekip her şeyi doğru yapabilir: net bir karar adlandırır, Goodhart yasasından
kaçınır, sonuçlara doğru ağırlık verir, sahipliği yönetir, güvenilir biçimde
enstrümante eder ve yine de yanlış sonuç çıkarabilir; çünkü yüzdelik gereken yerde
ortalama okumuştur, gürültüyü eğilim sanmıştır ya da nedenmiş gibi giyinmiş bir
rastlantıya kapılmıştır. Bu konu, kitabın sonraki her konusunun okurunun zaten
sahip olduğunu varsaydığı asgari istatistiksel muhakemedir.

Temel sorun, mühendislik metriklerinin resmî istatistik standartlarına göre
genellikle gürültülü, çarpık ve küçük örneklemli olmasıdır. Tek bir ekibin haftalık
dağıtım sayısı pürüzsüz bir çan eğrisi değildir; ara sıra büyük sapmaların
(büyük bir sürüm, olay kaynaklı bir geri alma dalgası) olduğu bir avuç veri
noktasıdır. Büyük, düzgün davranan veri kümeleri için kurulmuş saf sezgileri bu tür
veriye uygulamak, düzenli olarak kendinden emin ve yanlış sonuçlar üretir. Bir
sayının güvenilemeyecek kadar gürültülü olduğunu, bir ortalamanın size yalan
söylediğini ve birlikte hareket eden iki şeyin nedensellik hakkında hiçbir şey
söylemediğini fark etmeyi öğrenmek isteğe bağlı bir titizlik değildir; bir
kuruluşa doğru bir şey öğreten metrik programını, ona kulağa makul gelen ama yanlış
bir şey öğretenden ayıran şeydir.

Kurumsal ve kamu ölçeğinde istatistik hataları katlanır; çünkü yanıltıcı bir
sonuç yönetim tarafından kabul edildiğinde, kimse altta yatan analizi yeniden
incelemeyi düşünmeden önce birçok ekipte uygulanır. İki bölüm arasındaki ya da
büyük bir yeniden yapılanmanın öncesi ve sonrası arasındaki istatistiksel olarak
saf bir karşılaştırma, gürültüden ya da kimsenin denetlemediği bir karıştırıcıdan
başka bir şeye dayanmadan yıllarca kaynak kararlarını şekillendirebilir. Bu konu,
bu hatanın olasılığını azaltmak için vardır.

## Temel ilkeler

- **Medyan ya da yüzdelik genellikle ortalamadan daha çok şey söyler.**
  Mühendislik verisi düzenli olarak, ortalamaların içine çektiği ama yüzdeliklerin
  çekmediği sapmalarla çarpıtılır.
- **Küçük örneklemler gürültülü sayılar üretir.** Bir avuç olaydan hesaplanan bir
  yüzde, gerçek değişimle ilgisi olmayan nedenlerle çılgınca oynar.
- **Ortalamaya doğru gerileme insanları sürekli kandırır.** Alışılmadık derecede iyi
  ya da kötü bir okumayı, bir müdahale olsun olmasın, daha normal bir okuma
  izleme eğilimindedir.
- **Korelasyon nedensellik değildir ve karıştırıcı değişkenler her yerdedir.**
  Birlikte hareket eden iki metrik, biri diğerini sürmek yerine gizli bir üçüncü
  nedeni paylaşıyor olabilir.
- **[Kontrol grafiği](https://en.wikipedia.org/wiki/Control_chart), tek bir
  önce-sonra karşılaştırmasından üstündür.** Normal değişim aralığını görmek,
  gerçek bir kaymayı gürültüden ayırmanızı sağlar.

## Öneriler

### Çarpık veri için varsayılan olarak medyan ve yüzdelikleri kullanın

Zamana dayalı mühendislik metrikleri, lead time, olay kurtarma süresi, yanıt
gecikmesi, hemen her zaman sağa çarpıktır: değerlerin çoğu düşükte kümelenir ve
ara sıra büyük sapmalardan oluşan uzun bir kuyruk vardır. O kuyruğun çektiği bir
ortalama, hiçbir tipik vakanın gerçekte benzemediği bir tablo çizebilir.
**Medyanı** (yarı gözlemin üstünde, yarısının altında kaldığı orta değer), gözlemlerin
yüzde 90 ya da 95'inin altında kaldığı değer olan **90.** veya **95. yüzdelikle**
birlikte raporlayın; ikisi birlikte hem tipik vakayı hem de bir ekibin gerçekte
yaşadığı en kötü durum kuyruğunu gösterir. Kardeş `software-engineering-guide`
kitabının KPI konusu ve bu kitabın Bölüm 2'sindeki her teslimat metriği konusu,
baştan sona bu alışkanlığı varsayar.

### Bir örneklemin güvenilemeyecek kadar küçük olduğunu bilin

Yavaş bir haftada üç dağıtımdan hesaplanan bir değişiklik başarısızlık oranı anlamlı
bir sinyal değildir; tek bir başarısızlık, altta yatan riskle ilgisi olmayabilecek
nedenlerle yüzdeyi bir gecede yüzde 0'dan yüzde 33'e taşır. Yüzdeye dayalı bir
metriğe tepki vermeden önce altta yatan sayıyı kontrol edin. Pratik bir kural
olarak, kabaca yirmi otuzdan az olaydan hesaplanan bir oranı gürültülü sayın ve bir
sonuca varmadan önce daha uzun bir gözlem penceresi gerektirdiğini kabul edin;
bunu, oynak küçük örneklemli bir yüzdeyi kararlı büyük örneklemli bir yüzdeyle aynı
güvenle sunmak yerine panoda açıkça belirtin.

### Bir müdahaleye pay biçmeden önce ortalamaya doğru gerilemeyi gözetleyin

Bir ekibin olaylar açısından gelmiş geçmiş en kötü haftasını yönetimin ilgisi ve
sonraki bir iyileşme izlerse, iyileşmeyi müdahaleye yazmak cazip gelir. Çoğu zaman o
iyileşmenin bir kısmı zaten olurdu; çünkü alışılmadık derecede uç bir okumayı
yalnızca istatistiksel bir yapaylık olarak daha tipik bir okuma izleme eğilimindedir,
bu olguya **ortalamaya doğru gerileme** denir. Buna karşı, dikkati tetikleyen tek uç
veri noktası yerine daha uzun bir tarihsel taban çizgisiyle karşılaştırarak ve
gözlenen herhangi bir iyileşmenin ne kadarını belirli bir eyleme atfedeceğiniz
konusunda uygun biçimde alçakgönüllü olarak önlem alın.

### Bir metriğin bir sonuca yol açtığını iddia etmeden önce karıştırıcı değişkenleri arayın

İki metrik birlikte hareket ettiğinde, müşteri memnuniyetiyle birlikte yükselen
dağıtım sıklığı gibi, biri diğerine yol açtı demeden önce bir **karıştırıcı
değişkeni**, yani ikisini birden süren gizli üçüncü bir etkeni düşünmeden hemen
iddiada bulunma refleksine direnin. Yeni bir özellik lansmanı, iki metrik arasında
hiçbir nedensel bağ olmaksızın hem dağıtım sıklığını (daha fazla takip düzeltmesi)
hem de memnuniyeti (özelliğin kendisi) bağımsız olarak artırabilir. Bir korelasyonu
nedenselliğin kanıtı olarak sunmadan önce, aynı anda başka neyin değiştiğini ve
her iki hareketi açıklayabileceğini etkin biçimde sorun.

### Tek bir önce-sonra görüntüsü yerine bir kontrol grafiği kullanın

Bir **kontrol grafiği**, bir metriği zaman içinde, normal değişim aralığı açıkça
gösterilerek, tipik olarak merkezî bir ortalamanın çevresindeki bantlar olarak
çizer. Bu, gerçek bir kaymayı, yani normal aralığın dışındaki bir veri noktasını ya
da sürekli bir diziyi, tek bir önce-sonra karşılaştırmasının ayırt edemediği olağan
gürültüden ayırmanızı sağlar. "Değişiklikten sonra sayı iyileşti" demeden önce,
normal değişimin neye benzediğini görecek kadar tarihsel veri çizin ve değişiklik
sonrası okumanın gerçekten onun dışında kalıp kalmadığını kontrol edin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ortalamalar | Basit, tanıdık, hesaplaması kolay | Çarpık mühendislik verisinde sapmalarla bozulur |
| Medyanlar ve yüzdelikler | Sapmalara dayanıklı, tipik vakayı ve kuyruğu birlikte gösterir | Teknik olmayan kitleye biraz daha az tanıdık |
| Tek önce-sonra karşılaştırması | Hızlı, sezgisel, sunması kolay | Ortalamaya doğru gerilemeye ve gürültüye karşı savunmasız |
| Kontrol grafikleri ve daha uzun taban çizgileri | Gerçek kaymaları gürültüden güvenilir biçimde ayırır | Daha fazla tarihsel veri ve teknik olmayan kitleye daha fazla açıklama gerektirir |

Temel gerilim **sadelik ile titizlik** arasındadır. Ortalamalar ve tek önce-sonra
karşılaştırmaları hesaplaması ve anlatması daha kolaydır; gündelik raporlamaya
hâkim olmalarının nedeni tam olarak budur, ancak aynı zamanda bu kitabın
metriklerinin ürettiği türden gürültülü, çarpık veride kendinden emin ve yanlış bir
sonuç üretme olasılığı en yüksek iki tekniktir. Gerilimi, gerçek sonucu olan her
karar için varsayılan olarak daha titiz tekniklere, medyanlara, yüzdeliklere ve
kontrol grafiklerine yönelerek, daha basit teknikleri ise yanlış okumanın az
maliyetli olduğu düşük riskli, keşif amaçlı bakışlar için ayırarak çözün.

## Ekibinizle tartışılacak sorular

1. **Pano kutucuklarımızdan hangileri, medyan ya da yüzdeliğin daha doğru bir hikâye
   anlatacağı yerde ortalama raporluyor?** Zamana dayalı mühendislik metrikleri
   hemen her zaman çarpıktır ve çarpık veride bir ortalama iyi görünürken tipik vaka
   ya da en kötü durum kuyruğu bambaşka bir hikâye anlatabilir. Zamana dayalı
   kutucuklarınızı özellikle bu ikame açısından denetleyin.

2. **Yüzdeye dayalı metriklerimizin arkasındaki örneklem ne kadar küçük ve on
   olaydan gelen bir metriğe, bin olaydan gelenle aynı güveni mi gösteriyoruz?**
   Altta yatan sayı olmadan sunulan oynak küçük örneklemli bir oran, gürültüye
   aşırı tepki vermeyi çağırır. Değişiklik başarısızlık oranı ve benzeri yüzde
   kutucuklarınızı bu boşluk açısından kontrol edin.

3. **Ortalamaya doğru gerilemenin zaten üreteceği bir iyileşme için hiç bir
   müdahaleye pay biçtik mi?** Bu, yapması en kolay istatistik hatalarından biridir
   ve sonradan fark etmesi en zor olanlardan biridir; çünkü müdahale ve iyileşme
   gerçekten bu sırayla gerçekleşmiştir. Yakın tarihli bir "düzelttik" hikâyesine
   bakın ve taban çizgisi karşılaştırmasının bunu dışlayacak kadar uzun olup
   olmadığını dürüstçe sorun.

4. **Bir metriğin diğerine yol açtığını, karıştırıcı bir değişkeni kontrol etmeden
   nerede varsaydık?** İki şeyin birlikte hareket etmesi yaygındır; birinin
   diğerine yol açması daha fazla kanıt gerektiren daha güçlü bir iddiadır. Ekibinizin
   şu anda inandığı bir korelasyon seçin ve onu hiçbir nedensel bağ olmadan
   açıklayacak makul bir karıştırıcıyı adlandırmayı deneyin.

5. **En önemli metriklerimiz için normal değişimin neye benzediğini bilecek kadar
   tarihsel verimiz var mı, yoksa tek noktaları mı karşılaştırıyoruz?** Normal aralık
   duygusu olmadan, herhangi bir tek okuma kanıta değil ruh haline göre alarm verici
   ya da güven verici görünür. En çok izlediğiniz metriğin hiç tek bir sayı yerine
   kontrol grafiği olarak çizilip çizilmediğini tartışın.

6. **Belirsizliği teknik olmayan paydaşlara şu anda nasıl iletiyoruz ve panomuz
   verinin gerçekte desteklediğinden daha fazla kesinlik mi ima ediyor?** Normal
   değişimi ya da örneklem büyüklüğünü göstermeyen bir grafik, yönetim ekibinin
   gürültüye aşırı tepki vermesine ya da, aynı sıklıkla, gerçek bir sinyali gürültü
   diye reddetmesine yol açabilir. Raporlamanızın bunu okunamaz hale gelmeden
   dürüstçe nasıl iletebileceğini tartışın.

## Sektörel bakış

**Girişim (startup).** Küçük ekipler neredeyse her yerde küçük örneklemler üretir;
bu, bu konudaki küçük örneklem ihtiyatının sürekli önemli olduğu anlamına gelir.
Tek bir kötü ya da tek bir harika haftadan güçlü sonuçlar çıkarmaya direnin; yalnızca
bir avuç veri noktasıyla "bu bir eğilim mi" sorusunun dürüst yanıtı çoğu zaman
"henüz bilmiyoruz"dur.

**Küçük işletme.** Hazır araçların yerleşik panoları, hesaplaması ve göstermesi en
basit olduğu için çoğu zaman ortalamalara ve tek dönem karşılaştırmalarına
varsayılan olarak yönelir. Araç izin verdiği yerde zamana dayalı metriklerde
medyana geçin ve küçük bir sayıdan hesaplanan "bu ay yüzde 40 arttı" gibi
manşetlere kuşkuyla yaklaşın.

**Kurumsal.** Bu ölçekteki istatistik hataları yüzlerce kişiyi etkileyen kaynak ve
yeniden yapılanma kararlarına işlenir. İş birimleri arasındaki bir karşılaştırma ya
da büyük bir değişikliğin öncesi-sonrası yönetime kesinleşmiş olgu olarak sunulmadan
önce, doğru kontrol grafikleri kurabilen ve karıştırıcıları denetleyebilen analistlere
ya da bütünleşik veri uzmanlarına yatırım yapın.

**Kamu.** Kamu raporunu ya da bir bütçe gerekçesini besleyen istatistiksel olarak saf
bir karşılaştırma, orantısız gerçek dünya sonuçları doğurabilir ve özensiz analizi
kamuya açıkça ifşa eden türden bir incelemeyi çağırır. Daha titiz teknikleri,
kontrol grafiklerini, belgelenmiş örneklem büyüklüklerini, karıştırıcı denetimlerini,
yalnızca ara sıra gösterilen bir en iyi çaba olarak değil, dışarıya yayımlanan her
şey için kalıcı bir uygulama olarak benimseyin.

## Örnekler

**Kurumsal.** Bir yazılım şirketinin yönetim ekibi, yeni bir kod gözden geçirme
politikasının devreye girmesinden sonraki ay değişiklik başarısızlık oranında yüzde
25'lik bir iyileşmeyi kutladı ve bunu doğrudan politikaya yazdı. Daha yakından
bakıldığında "önce" ayının, tek bir ekibin ters giden geçişinin sürdüğü, alışılmadık
derecede kötü bir ay olduğu ve her iki aydaki örneklem büyüklüğünün şirket genelinde
otuz dağıtımın altında olduğu görüldü. On iki aylık geçmişi kullanan bir kontrol
grafiği, yeni okumanın gerçek bir basamak değişimi olmadığını, normal değişimin
içinde kaldığını ve politikanın gerçek etkisinin, gerçek olmakla birlikte, manşet
sayının düşündürdüğünden çok daha küçük olduğunu gösterdi.

**Kamu.** Bir toplu taşıma kurumu, yeni dijitalleştirilmiş bir çizelgeleme sistemi
için zamanında performansta büyük bir yıllık iyileşme raporladı; tek bir "önce"
çeyreğini tek bir "sonra" çeyreğiyle karşılaştırmıştı. Bağımsız bir inceleme,
"önce" çeyreğinin tüm ağdaki performansı düşüren, ilgisiz bir inşaat kapatmasıyla
çakıştığını ve daha uzun bir taban çizgisinin zamanında performansın yeni sistem
devreye girmeden önce zaten toparlanmakta olduğunu gösterdiğini ortaya koydu. Kurumun
gözden geçirilmiş raporu, çok yıllık tam bir kontrol grafiği kullandı ve yeni
sisteme özgü olarak daha mütevazı ama daha savunulabilir bir iyileşme atfetti.

## İş gerekçesi: motivasyonlar, ROI ve TCO

İstatistik okuryazarlığının getirisi, önlenen yanlış yönlendirmedir: bir iyileşmeyi
doğru atfeden ya da gürültüyü gürültü olarak doğru tanıyan bir kuruluş, bir sonraki
yatırımını hayali bir etkinin peşinden koşmak yerine gerçekten yardımı olacağı yere
harcar. Yukarıdaki kurumsal örnek tipiktir: yüzde 25'lik iyileşmeyi tek başına gözden
geçirme politikasının sağladığına inanan bir şirket, diğer gerçek katkıda
bulunanlara yetersiz yatırım yapabilir ya da politikanın değerini gelecekteki
kararları yanıltacak biçimde abartabilir.

İstatistiksel titizliğin toplam maliyeti çoğunlukla yeni araçlardan çok bir alışkanlık
değişimidir: ortalama yerine medyanı seçmek, tepki vermeden önce örneklem
büyüklüğünü kontrol etmek, zafer ilan etmeden önce daha uzun bir taban çizgisi
çizmek. Bu alışkanlıkların benimsenmesi az maliyetlidir ve kendinden emin, yanlış
sonuçlara dayanan kararların çok daha büyük ve fark edilmesi daha zor maliyetini
önler.

## Anti-desenler ve tuzaklar

- **Çarpık zamana dayalı veride ortalama raporlamak:** tipik vakayı ve kuyruğu tek,
  yanıltıcı bir sayının arkasına gizler.
- **Örneklem büyüklüğü görünmeyen bir yüzdeye tepki vermek:** bir avuç olaydan gelen
  gürültüyü kararlı, anlamlı bir eğilimmiş gibi ele alır.
- **Ortalamaya doğru gerilemeyi dışlamadan bir müdahaleye pay biçmek:** yaygın,
  yapması kolay, fark etmesi zor bir hata.
- **Karıştırıcıları düşünmeden korelasyondan nedensellik iddia etmek:** verinin
  gerçekte desteklediğini abartır.
- **Daha uzun bir taban çizgisi çizmek yerine tek bir önce-sonra görüntüsünü
  karşılaştırmak:** gerçek bir kaymayı olağan değişimden ayıramaz.
- **Yönetime dönük raporlamada verinin desteklediğinden fazla kesinlik ima etmek:**
  gürültüye aşırı tepki vermeyi ya da gerçek bir sinyalin reddedilmesini çağırır.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Metrikler, örneklem büyüklüğüne, çarpıklığa ya da taban
  değişimine dikkat edilmeden ham ortalamalar ve tek önce-sonra görüntüleri olarak
  raporlanır.
- **Düzey 2, Geliştirme:** Bazı analistler medyan ya da yüzdelikleri gayriresmî
  olarak uygular, ancak tutarlı bir kurumsal uygulama yoktur ve karıştırıcılar
  nadiren denetlenir.
- **Düzey 3, Standartlaştırma:** Çarpık zamana dayalı metriklerde varsayılan olarak
  medyanlar ve yüzdelikler kullanılır; kuruluş genelinde yüzdeye dayalı metriklerin
  yanında örneklem büyüklükleri gösterilir.
- **Düzey 4, Yönetme:** Tarihsel taban çizgili kontrol grafikleri, gerçek bir kayma
  iddiası için standart uygulamadır; raporlamada nedensel iddialar yapılmadan önce
  karıştırıcı değişkenler etkin biçimde düşünülür.
- **Düzey 5, Orkestrasyon:** İstatistiksel titizlik araçların kendisine yerleşiktir,
  panolar varsayılan olarak yüzdelikleri ve kontrol bantlarını gösterir ve kuruluş,
  stratejiyi şekillendirmeden önce istatistiksel olarak saf bir okumanın
  yakalanması sayesinde belirli bir geçmiş kararın düzeltildiğini gösterebilir.

## Tartışma önerileri

1. Bir ortalamayı medyanla değiştirsek mevcut pano manşetlerimizden hangileri farklı görünürdü?
2. Bir yüzdenin varsaydığımızdan çok daha küçük bir örnekleme dayandığı ortaya çıktığı için hiç bir kararı değiştirdik mi?
3. Ortalamaya doğru gerileme açısından yeniden incelememiz gereken yakın tarihli bir "bu metriği iyileştirdik" hikâyesi hangisi?
4. Metriklerimizden ikisi, biri diğerini sürmek yerine gizli bir üçüncü nedenle nerede korele olabilir?
5. En önemli grafiklerimiz normal bir değişim aralığı mı gösteriyor, yoksa yalnızca tek bir eğilim çizgisi mi?

## Temel çıkarımlar

- Çarpık, zamana dayalı mühendislik metriklerinde ortalamalar yerine **medyanları ve
  yüzdelikleri** tercih edin.
- **Küçük bir örneklemden gelen yüzdeyi** gürültülü sayın ve onu kararlı bir eğilimmiş
  gibi tepki vermek yerine bunu açıkça belirtin.
- Alışılmadık derecede kötü bir okumayı izleyen bir iyileşme için bir müdahaleye pay
  biçmeden önce **ortalamaya doğru gerilemeyi** gözetleyin.
- **Korelasyon nedensellik değildir**; nedensel bir iddiada bulunmadan önce karıştırıcı
  değişkenleri etkin biçimde arayın.
- Gerçek bir kaymayı olağan gürültüden ayırmak için tek bir önce-sonra görüntüsü
  yerine **gerçek bir tarihsel taban çizgili kontrol grafiği** kullanın.

## Kaynaklar ve ileri okuma

- *The Signal and the Noise*, Nate Silver (kusurlu veride gerçek sinyali gürültüden
  ayırmak).
- *How to Measure Anything*, Douglas W. Hubbard (kurumsal ölçüm için istatistiksel
  akıl yürütme).
- *Understanding Variation: The Key to Managing Chaos*, Donald J. Wheeler (kontrol
  grafikleri ve ortak neden ile özel neden değişimi ayrımı).
- *Thinking, Fast and Slow*, Daniel Kahneman (ortalamaya doğru gerileme ve nedensel
  anlatı yanılsaması dahil bilişsel yanlılıklar).
- *The Visual Display of Quantitative Information*, Edward R. Tufte (nicel verinin
  dürüst, yüksek bütünlüklü sunumu).
