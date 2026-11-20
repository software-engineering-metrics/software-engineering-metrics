# 5.1 Kaçan hata oranı ve kalite kaçakları

## Genel bakış ve motivasyon

**Kaçan hata oranı** (escaped defect rate), üretime ulaşıp gerçek kullanıcıları
etkileyen hataları ölçer. Bu hatalar, test, kod incelemesi ya da statik analiz
yoluyla daha erken yakalananlardan ayrıdır; bunların hepsi kitabın Bölüm 4'ünde
ele alınır. Bu ayrım çok önemlidir: kod incelemesinde yakalanan bir hatanın
düzeltilmesi dakikalara mal olur ve hiçbir kullanıcı onu görmez. Aynı hata
üretime kaçarsa saatlerce olay müdahalesine, gerçek müşteri zararına ve güvende
ölçülebilir bir çatlağa yol açabilir. Bu metrik, bir anlamda Bölüm 4'ün
kapsadığı her şeyin nihai karnesidir. İç kalite metrikleri (karmaşıklık,
kapsam, statik analiz) güçlü görünürken kaçan hata oranı yükseliyorsa, bu iç
sinyaller genellikle gerçek kullanıcılar için önemli olan başarısızlık
biçimlerini yakalamıyor demektir.

Bu konu, kaçan hataları maliyetlerinin hak ettiği ciddiyetle ele alır, ama ham
sayıyı basit bir skor tablosu gibi görme ayartısına direnir. Bütün hatalar eşit
değildir: nadiren görüntülenen bir yardım metnindeki yazım hatası ile bir
finansal işlem sistemindeki veri bozulması hatası teknik olarak ikisi de kaçan
hatadır. İkisini aynı sayarsanız, üzerinde eyleme geçilemeyecek kadar gürültülü
ya da daha kötüsü, gerçek riskin nerede yattığı konusunda aktif olarak yanıltıcı
bir metrik elde edersiniz. Bu konunun temel önerisi, yani ciddiyete göre
ağırlıklandırılmış izleme ve hataların nasıl sınıflandırıldığına dikkat, doğrudan
bu soruna yöneliktir.

Büyük ekiplerde kaçan hata oranı, kitabın iç mühendislik metrikleri ile Bölüm
5'in bütününün ilgilendiği müşteriye dönük dünya arasındaki en açık köprülerden
biridir. Kurumsal kuruluşlar bunu Bölüm 4'teki test ve inceleme uygulamalarına
yapılan yatırımı gerekçelendirmek için kullanır. Kaçan bir hatanın
yanlış bir yardım hesaplamasına ya da başarısız bir kamu hizmeti etkileşimine yol
açabildiği devlet kuruluşları ise bunu salt bir iç mühendislik istatistiği
olarak değil, kamu güveninin ve hukuki maruziyetin doğrudan ölçüsü olarak görür.

## Temel ilkeler

- **Kaçan hata oranı, iç kalite uygulamasının nihai karnesidir.** Güçlü Bölüm 4
  metriklerine rağmen oranın yükselmesi, o metriklerin önemli olanı
  yakalamadığı anlamına gelir.
- **Ciddiyet, ham sayıdan daha önemlidir.** Hataları gerçek müşteri ya da iş
  etkisine göre ağırlıklandırın; her kaçağı aynı sayarak değil.
- **Sınıflandırma tutarlılığı şarttır.** Ciddiyeti farklı sınıflandıran iki ekip,
  adil biçimde karşılaştırılamayan sayılar üretir.
- **Bu metrik, tanım manipülasyonuna açıktır**, tıpkı değişiklik başarısızlık
  oranı (konu 2.10) gibi: neyin "hata" sayıldığını daraltmak, gerçek müşteri
  zararını azaltmadan sayıyı güzelleştirir.
- **Kök neden kategorizasyonu bir sayıyı tanı aracına dönüştürür.** Hataların
  *neden* kaçtığını bilmek, yalnızca kaç tane kaçtığını bilmekten daha fazla
  eyleme geçirilebilir bilgi verir.

## Öneriler

### Kaçan hataları ciddiyete göre, tutarlı ve belgelenmiş bir ölçekle ağırlıklandırın

Her kaçan hatayı, gerçek müşteri ya da iş etkisine dayanan sabit bir ciddiyet
ölçeğiyle sınıflandırın (genellikle kritik, büyük, küçük ya da numaralı bir
karşılığı). Veri kaybı ya da bozulması, güvenlik açığı ve bir özelliğin tamamen
kullanılamaz olması en üstte, işlevsel etkisi olmayan kozmetik bir sorun en
altta yer alır. Yalnızca ham sayıyı değil, ciddiyete göre ağırlıklandırılmış
bir eğilimi izleyin; böylece küçük sorunlardaki bir sıçrama, kritik olanlardaki
daha küçük ama çok daha sonuç doğurucu bir artışı görsel olarak gölgelemez.

### Sınıflandırma ölçütlerini ekipler arasında standartlaştırın

Ciddiyeti bağımsız biçimde sınıflandırmaya bırakılan farklı ekipler, kimi
temkinli kimi gevşek farklı standartlara doğru kayar. Bu, ekipler arası
karşılaştırmayı anlamsız kılar ve daha da kötüsü, bir ekibin kendi sayılarını
daha iyi göstermek için hataları cömertçe aşağı sınıflandırması yönünde bir
teşvik yaratır (konu 1.2'deki tanım manipülasyonunun bir çeşidi). Açık,
örneklere dayalı sınıflandırma ölçütleri yayımlayın ve tutarlılığı denetlemek
için sınıflandırmalardan bir örneklemi ekipler arasında düzenli aralıklarla
denetleyin.

### Yalnızca sayıyı ve ciddiyeti değil, [kök nedeni](https://en.wikipedia.org/wiki/Root_cause_analysis) de izleyin

Kaçan her hata için neden kaçtığını kaydedin: bir test boşluğu, gereksinimlerde
gözden kaçan bir uç durum, hazırlık (staging) ve üretim arasındaki bir ortam
farkı, sorunu kaçıran bir inceleme. Sistemik örüntüleri bulmak için bu kök neden
verisini zaman içinde toplayın. Belirli bir kategori (diyelim ortam farkı
hataları) kaçaklarınıza hâkimse, bu "daha çok test edin" gibi belirsiz ve genel
bir çağrıya değil, düzeltilebilir belirli bir süreç boşluğuna işaret eder.

### Kaçan hataları, çıktıkları iç kalite sinyallerine geri bağlayın

Mümkün olduğunda kaçan bir hatayı geldiği kod alanına kadar izleyin ve o alanın
Bölüm 4 metriklerinde uyarı işaretleri gösterip göstermediğine bakın: bir
karmaşıklık odak noktası (hotspot) muydu (konu 4.1, konu 4.3), düşük bir
mutasyon öldürme oranı var mıydı (konu 4.2), statik analiz yakınlarda bir şey
işaretlemiş miydi (konu 4.4). Bu bağlantı, iç kalite metriklerinizin gerçek
müşteriye dönük hataları öngörüp öngörmediğini ya da sizin özel bağlamınızda
müşterilerin gerçekte yaşadıklarıyla ilişkisi olmayan bir şeyi ölçüp ölçmediğini
doğrular.

### Hata sınıflandırmasının bir suçlama egzersizine dönüşmesine karşı korunun

Hata kök neden analizini açıkça, konu 1.1'in tanısal çerçevesine uygun biçimde
bir sistem sorusu olarak çerçeveleyin; bireysel suçlama egzersizi olarak değil.
Kaçan bir hata nedeniyle suçlanmaktan korkan bir ekibin eksik raporlama, aşağı
sınıflandırma ya da kapsamlı kök neden analizine direnme yönünde güçlü bir
teşviki vardır; bunların hepsi bu konunun dayandığı veriyi bozar. Konu 6.2'de
daha ayrıntılı ele alınan suçlamasız postmortem pratiği burada doğrudan geçerlidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ham kaçan hata sayısı | Raporlaması basit | Bir yazım hatasını ve bir veri bozulması hatasını aynı sayar; gürültülü ve yanıltıcı |
| Ciddiyete göre ağırlıklandırılmış izleme | Gerçek müşteri etkisini daha doğru yansıtır | Tutarlı, disiplinli sınıflandırma gerektirir |
| Ekipten bağımsız sınıflandırma standartları | Esnek, düşük koordinasyon yükü | Ekipler arasında karşılaştırılamayan sayılar üretir; gevşek kaymaya davetiye çıkarır |
| Standartlaştırılmış, denetlenen sınıflandırma | Adil, karşılaştırılabilir, manipülasyona dirençli | Sürekli yönetişim ve düzenli denetim çabası gerektirir |

Temel gerilim **yerel esneklik ile ekipler arası karşılaştırılabilirlik**
arasındadır. Her ekibin hata ciddiyetini kendi bağlamına uyan biçimde
sınıflandırmasına izin vermek uygulaması daha basittir, ama adil biçimde
karşılaştırılamayan ya da kuruluş düzeyinde toplanamayan sayılar üretir ve bir
ekibin kendi metriklerini korumak için cömertçe sınıflandırması yönünde sessiz
bir teşvik yaratır. Gerilimi, standartlaştırılmış, belgelenmiş sınıflandırma
ölçütlerine ve düzenli ekipler arası denetimlere yatırım yaparak çözün. Bunu,
bu metriğin gerçek müşteri etkisine ne kadar doğrudan bağlandığı düşünülürse
yatırıma değen bir yönişim çalışması (konu 1.4) olarak ele alın.

## Ekibinizle tartışılacak sorular

1. **Kaçan hataları ciddiyete göre mi izliyoruz, yoksa ham sayı küçük bir
   kozmetik sorunu kritik bir veri sorunuyla aynı mı sayıyor?** Gerçek
   panonuzu açıp kontrol edin. Ciddiyet ağırlıklandırması henüz yoksa, bu
   konunun önerdiği en değerli tek değişiklik budur.

2. **İki farklı ekip aynı hatanın ciddiyetini aynı biçimde sınıflandırır mıydı,
   yoksa sınıflandırma kuruluş genelinde birbirinden uzaklaştı mı?** Geçmişten
   gerçek, belirsiz bir hata seçin ve iki farklı ekipten temsilcilerin onu
   bağımsız biçimde sınıflandırmasını isteyin; sonuçları dürüstçe karşılaştırın.

3. **Kaçan hatalarımızın en yaygın kök nedeni nedir ve mevcut sürecimiz buna
   gerçekten yanıt veriyor mu, yoksa yalnızca tek tek olaylara
   karşılık vermeye mi devam ediyoruz?** Son birkaç ayın kök neden verisini
   toplayın ve baskın örüntüyü arayın.

4. **Kaçan hatalarımız, iç kalite metriklerimizin (karmaşıklık, kapsam, statik
   analiz) zaten riskli olarak işaretlediği alanlara kadar izlenebildi mi?**
   Bu bağlantı, Bölüm 4 metriklerinizin sizin özel bağlamınızda gerçekten
   öngörücü olup olmadığını ya da gerçekten önemli olan başarısızlık
   biçimlerini kaçırıp kaçırmadığını doğrular.

5. **Hata sınıflandırma sürecimiz güvenli hissettiriyor mu, yoksa mühendisler
   kendilerinin ilişkili olduğu bir hatayı raporlarken ya da sınıflandırırken
   suçlanmaktan korkuyor mu?** Suçlamaya yatkın bir kültür bu veriyi eksik
   raporlama ve gevşek sınıflandırma yoluyla sistematik olarak bozar; mevcut
   kültürünüz konusunda dürüst olun.

6. **Kaçan hata oranımız, test ya da inceleme uygulamasında karşılık gelen bir
   değişiklik olmadan hiç şüpheli derecede hızlı iyileşti mi?** Değişiklik
   başarısızlık oranında (konu 2.10) olduğu gibi, bu, kayan şeyin gerçek risk
   değil sınıflandırma ölçütleri olduğunun en açık işaretidir.

## Sektörel bakış

**Girişim (startup).** Az sayıda hata ve her birini doğrudan konuşabilecek
küçük bir ekip varken resmî ciddiyet sınıflandırması çoğunlukla gereksizdir.
Erkenden edinilmeye değer alışkanlık, hataları baştan, gayriresmî de olsa
tutarlı biçimde izlemektir; böylece ekip daha resmî analize ihtiyaç duyacak
kadar büyüdüğünde geçmiş veri hazır olur.

**Küçük işletme.** Basit, ortak bir ciddiyet ölçeği, üç düzey bile olsa (kritik,
büyük, küçük), destek ve hata triyajını kim yürütüyorsa onun tutarlı biçimde
uygulamasıyla, gelişmiş araçlara ya da özel bir kalite işlevine gerek kalmadan
bu konunun değerinin çoğunu yakalar.

**Kurumsal.** Ekipler arası sınıflandırma tutarlılığı burada en yüksek
kaldıraçlı yatırımdır, çünkü onlarca ekipte tutarsız standartlar, kuruluş
genelinde kalite karşılaştırmasını anlamsız kılar. Belgelenmiş, örneklere
dayalı sınıflandırma ölçütlerine ve düzenli denetime yatırım yapın; kaçan
hataları sistematik biçimde Bölüm 4'ün iç kalite sinyallerine bağlayarak bu
sinyallerden hangilerinin kuruluşunuz için gerçekten öngörücü olduğunu doğrulayın.

**Kamu.** Kamuya dönük ya da yardım hesaplayan bir sistemdeki kaçan hata,
mühendislik maliyetinin ötesinde hukuki ve kamu güveni ağırlığı taşır.
Vatandaşa dönük hizmetleri etkileyen hatalarda ciddiyet sınıflandırmasını özel
bir titizlikle yürütün ve sınıflandırma kararlarının dış denetimle karşılaşmaya
hazır olmasını sağlayın. Bu, günü kurtaran yargı çağrıları yerine belgelenmiş,
denetlenmiş, tutarlı ölçütler için güçlü bir argümandır.

## Örnekler

**Kurumsal.** Bir abonelik yazılımı şirketinin kaçan hata sayısı iki çeyrektir
artıyordu ve ilk endişe ham sayıya odaklandı. Ciddiyete göre ağırlıklandırılmış
analiz, artışın hemen tamamen küçük, kozmetik sorunlardan kaynaklandığını ve
bunun yakın zamandaki bir arayüz yeniden tasarımıyla çakıştığını, kritik ve
büyük hataların ise aynı dönemde aslında hafifçe azaldığını gösterdi. Küçük
sorunlardaki sıçramanın kök neden analizi, özellikle yeni arayüz bileşenleri
için görsel regresyon testinde bir boşluğa işaret etti. Bu, hedefli ve düşük
maliyetli bir düzeltmeydi; ekip ham, ağırlıklandırılmamış sayıya ayrım
gözetmeyen bir kalite krizi gibi tepki verseydi tümüyle gözden kaçacaktı.

**Kamu.** Bir eyalet işsizlik kurumunun yardım hesaplama sisteminde, tespit
edilmeden önce aylarca, aslında hak sahibi olan başvuruların küçük bir yüzdesini
yanlış biçimde reddeden bir kaçan hata vardı. Kök neden incelemesi, hatanın
on sekiz ay önceki bir iç kalite incelemesinde karmaşıklık odak noktası (konu
4.1, konu 4.3) olarak işaretlenmiş bir kod alanından çıktığını, ama riski
somutlaştıracak hiçbir hata henüz yaşanmadığı için o odak noktasının
iyileştirme için hiç önceliklendirilmediğini ortaya koydu. Kurumun gözden
geçirilmiş süreci artık, iç karmaşıklık sinyalleri ile gerçek kaçan hata riski
arasındaki bu kanıtlanmış, doğrulanmış bağlantı nedeniyle, odak noktası
işaretli alanlara test ve inceleme önceliğinde açıkça daha yüksek ağırlık
veriyor.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Kaçan hata oranını ciddiyet ağırlıklandırması ve kök neden analiziyle titizlikle
izlemenin getirisi, önemsiz ve ağır sorunları ayrım gözetmeden karıştıran bir
sayıya tepki vermek yerine kalite yatırımını gerçekten müşteriye dönük zararı
azaltacak yere yönlendirebilmektir. Yukarıdaki abonelik yazılımı örneği bunu
açıkça gösterir: ham sayıya tepki geniş, odaksız bir kalite girişimini
tetiklerdi, oysa ciddiyete göre ağırlıklandırılmış, kök nedene dayalı yanıt
belirli, ucuz ve hedefli bir düzeltmeyi saptadı.

Toplam sahip olma maliyeti, sınıflandırma disiplinini (tutarlı ölçütler, düzenli
denetimler) ve kök neden izleme çabasını içerir; ikisi de öncelikle araç
maliyeti değil, süreç yatırımıdır. Bu yatırım, kalite çabasını kaçan hata
riskinin gerçek, doğrulanmış kaynaklarına yönlendirerek önlenen müşteri zararı
ve olay müdahalesi maliyeti içinde doğrudan karşılığını verir.

## Anti-desenler ve tuzaklar

- **Ham hata sayısını metrik olarak görmek:** önemsiz ve ağır sorunları
  birbirine karıştırır ve gerçek sinyali gizler.
- **Ekipler arasında tutarsız ciddiyet sınıflandırması:** ekipler arası
  karşılaştırmayı anlamsız kılar ve gevşek sınıflandırma kaymasına davetiye
  çıkarır.
- **Kök neden izlemesinin olmaması:** bir sayıyı tanı değeri olmayan bir sayıya
  çevirir, sistemik örüntüleri görünmez bırakır.
- **Suçlamaya yatkın bir raporlama kültürü:** eksik raporlama ve gevşek
  sınıflandırma yoluyla veriyi bozar; tam olarak konu 1.2'nin uyardığı teşvik
  maruziyeti riskidir.
- **Kaçan hataları iç kalite sinyallerine hiç bağlamamak:** Bölüm 4'ün öngörücü
  metriklerini gerçek sonuçlara karşı doğrulama ya da çürütme fırsatını kaçırır.
- **Arkasında süreç değişikliği olmayan şüpheli derecede hızlı bir iyileşme:**
  kayan şeyin gerçek risk değil sınıflandırma ölçütleri olduğunun en açık
  işareti.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Kaçan hatalar, izleniyorsa, ciddiyet
  ağırlıklandırması ya da kök neden analizi olmayan ham bir sayı olarak izlenir.
- **Düzey 2, Gelişim (Develop):** Bir miktar ciddiyet sınıflandırması vardır,
  ama standartlar ekipler arasında değişir ve kök neden izlemesi tutarsızdır.
- **Düzey 3, Standartlaştırma (Standardize):** Ciddiyet sınıflandırması kuruluş
  genelinde standartlaştırılmış ve belgelenmiştir; kök neden kategorizasyonu
  tutarlı biçimde uygulanır.
- **Düzey 4, Yönetim (Manage):** Kaçan hatalar, öngörücü değerlerini doğrulamak
  için sistematik biçimde iç kalite sinyallerine bağlanır ve sınıflandırma
  tutarlılık için düzenli denetlenir.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluş, kaçan hata oranındaki belirli,
  ölçülebilir düşüşleri, iç kalite sinyallerine karşı doğrulanmış, hedefli ve
  kök nedene dayalı kalite yatırımına bağlayarak gösterebilir.

## Tartışma önerileri

1. Geçen çeyreğin en önemli kaçan hatası, farklı bir ekip tarafından da aynı biçimde sınıflandırılır mıydı?
2. Kaçan hatalarımızın en yaygın kök nedeni nedir ve onu gerçekten ele alıyor muyuz?
3. Kaçan bir hata, iç metriklerimizin zaten işaretlediği bir alana kadar izlendi mi?
4. Ekibimiz, kendisinin yol açtığı bir hatayı raporlamayı ve dürüstçe sınıflandırmayı güvenli buluyor mu?
5. Mevcut hata sayımızın ciddiyete göre ağırlıklandırılmış bir görünümü, ham sayının gizlediği neyi ortaya çıkarırdı?

## Temel çıkarımlar

- Kaçan hata oranı, iç kalite uygulamasının **nihai karnesidir**. Güçlü Bölüm 4
  metriklerine rağmen oranın yükselmesi, o metriklerin önemli olanı
  yakalamadığı anlamına gelir.
- **Ciddiyete göre ağırlıklandırın**; tutarlı, belgelenmiş, denetlenen bir
  sınıflandırma ölçeği kullanın, asla yalnızca ham sayı değil.
- Metriği gerçek bir tanı aracına dönüştürmek için yalnızca sayıyı ve ciddiyeti
  değil, **kök nedeni** de izleyin.
- Bu sinyallerin gerçekten öngörücü olup olmadığını doğrulamak için **kaçan
  hataları iç kalite sinyallerine** (karmaşıklık, kapsam, statik analiz) geri
  bağlayın.
- Eksik raporlama ve gevşek kayma yoluyla raporlamayı ve sınıflandırmayı bozan
  **suçlamaya yatkın bir kültüre** karşı korunun.

## Kaynaklar ve ileri okuma

- *Site Reliability Engineering*, Betsy Beyer, Chris Jones, Jennifer
  Petoff ve Niall Richard Murphy (ed.) (hata kök neden analizine uygulanabilen
  suçlamasız postmortem pratiği).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (teslimat uygulamaları ile kalite sonuçları arasındaki
  ilişki).
- *Code Complete*, Steve McConnell (hata sınıflandırması ve kök neden analizi
  uygulamaları).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (başarısızlık
  incelemesinin sistemik, suçlamasız çerçevesi).
