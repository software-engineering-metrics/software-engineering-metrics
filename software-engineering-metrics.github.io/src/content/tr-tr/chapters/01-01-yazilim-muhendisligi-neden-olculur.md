# 1.1 Yazılım mühendisliği neden ölçülür

## Genel bakış ve motivasyon

Yazılım mühendisliği, imalatın göstermediği bir direnç gösterir ölçüme.
Bir fabrika hattı birbirinin aynısı birimler üretir; bu yüzden onları saymak
gerçek bir şey söyler. Yazılım işi ise sürekli değişen gereksinimler altında
eşi olmayan ürünler çıkarır. Bu yüzden commit, satır ya da kapatılan bilet
sayısı gibi saf bir sayım, teslim edilen değer hakkında neredeyse hiçbir şey
söylemez. Yazılım işini ölçmenin zorluğu ile işlerin iyi gidip gitmediğini
bilmenin çok gerçek ihtiyacı arasındaki bu boşluk, kitabın tamamının yaşadığı
yerdir. Bu konu, o boşluğu dürüstçe kapatmakla ilgilidir: yazılım işinin
ürün adedi kadar sayılabilir olduğunu iddia ederek değil, ölçümün bir mühendislik
kuruluşu için neyi yapıp neyi yapamayacağı konusunda net olarak.

Ölçüm, bir kuruluşun başka türlü güvenle yanıtlayamayacağı soruları
yanıtlamak için vardır: teslimatımız hızlanıyor mu yavaşlıyor mu, kalite
iyileşiyor mu bozuluyor mu, mühendisler tükeniyor mu, bu yatırım karşılığını
veriyor mu. Metrikler olmadan bu sorular odada en kendinden emin konuşan
kişinin, genellikle en kıdemli ya da en ikna edici olanın yanıtına kalır ve bu
yanıt sıklıkla yanlıştır. Ölçümü atlayan [yazılım mühendisliği](https://en.wikipedia.org/wiki/Software_engineering)
ekipleri kendi performansları hakkında yargıya varmaktan kurtulmaz. Yalnızca bu
yargıları kanıta değil, izlenime, anekdota ve en son olanın ağır basmasına
dayandırırlar.

Büyük ekipler için bu, olsa iyi olur olmaktan çıkıp yapısal bir ihtiyaç
haline gelir. Altı kişilik bir ekip, işlerin nasıl gittiği konusunda ortak bir
zihinsel modeli günlük sohbetle paylaşabilir. Zaman dilimlerine ve iş
birimlerine yayılmış altı yüzlük bir departman paylaşamaz. Bu ölçekte
paylaşılan, güvenilir bir sayılar kümesi, küçük bir ekibin bedavaya aldığı gayriresmî
farkındalığın tek pratik yerine geçen şeydir. Kurumsal yönetim, aynı bütçe için
yarışan onlarca ekip arasında yatırım dağıtmak için metriklere ihtiyaç duyar.
Kamu mühendislik kuruluşları, yasama organlarına ve kamuoyuna tahsis edilen
fonların yalnızca faaliyet değil gerçek yetenek ürettiğini göstermek için
metriklere ihtiyaç duyar. Her iki ortamda da "çok çalıştık" kanıt değildir;
savunulabilir bir sayı kanıttır.

## Temel ilkeler

- **Yargılamak için değil, öğrenmek için ölçün.** Bir mühendislik metriğinin
  asıl amacı bir kararı bilgilendirmektir; bir kişiye ya da ekibe not vermek
  değil.
- **Bir karara bağlanmamış sayı süstür.** Bir metriğin hiçbir okuması bir
  sonraki adımınızı değiştirmeyecekse, o metrik panoda yer almamalıdır.
- **Ölçüm bir araçtır, amaç değil.** Amaç, sürdürülebilir bir ekip tarafından
  daha güvenilir biçimde teslim edilen daha iyi yazılımdır. Metrikler yalnızca
  bu amaca hizmet etmek için vardır.
- **Her metriğin bir maliyeti vardır.** Enstrümantasyon, gözden geçirme zamanı
  ve konu 1.2'de ele alınan davranışsal çarpıtma riski, hepsi bir şeye mal olur.
  Bir metrik bu maliyeti geri kazandırmalıdır.
- **Sessizlik de bir karardır.** Bir şeyi ölçmemeyi seçmek, tarafsız bir
  varsayılan değil, sonuçları olan bir tercihtir.

## Öneriler

### Panodan değil, karardan başlayın

Herhangi bir şeye enstrümantasyon eklemeden önce, metriğin hangi kararı
besleyeceğini adlandırın. "Yeni dağıtım hattımızın olay oranlarını düşürüp
düşürmediğini bilmek istiyoruz" karar biçiminde bir sorudur; "aracın dışa
aktarabildiği her şeyi izleyelim" değildir. Kararı geriye doğru izlemek metrik
kümesini küçük tutar ve biri neden var diye sorduğunda her kutucuğu
savunulabilir kılar. Bir metriğin hangi kararı besleyeceğini adlandıramıyorsanız,
onu henüz kurmayın. Konu 1.3, bu disiplinin sonuç-çıktı versiyonunu daha derin
işler.

### Teşhis amaçlı kullanımı değerlendirme amaçlı kullanımdan ayırın

Bir sistem sorununu teşhis etmek için kullanılan metrik (lead time neden
yükseliyor), aynı metriğin bir kişiyi ya da ekibi değerlendirmek için
kullanılmasından (kimin lead time'ı en kötü) tamamen farklı davranır. Birincisi
araştırmayı ve iyileştirmeyi çağırır. İkincisi gizlemeyi ve oyunlamayı çağırır,
çünkü artık sayının itibar ya da para yönünden bir sonucu vardır. Bir metriğin
hangi amaçla kullanılacağına açıkça, yazılı olarak karar verin ve riski bilerek
yeniden düşünmeden teşhis amaçlı bir metriğin değerlendirme amaçlı kullanıma
kaymasına asla izin vermeyin. Bu ayrım kitap boyunca sürekli geri döner ve
konu 1.4'te anlatılan metrik tüzüğünün hedef olmayanlar bölümünde
resmîleştirilir.

### Ölçümü olgu değil, hipotez olarak ele alın

Bir metrik, gerçekten önemsediğiniz şeyin kendisi değil, onun vekilidir.
Dağıtım sıklığı teslimat yeteneğinin vekilidir, teslimat yeteneğinin kendisi
değil. Her metriği sürekli sınanan bir hipotez olarak görün: bu sayı hâlâ
önemsediğimiz şeyi izliyor mu, yoksa dünya ilerledi de vekil geride mi kaldı?
İki yıl önce iyi seçilmiş bir metriğin bugün de iyi seçilmiş olduğunu
varsaymak yerine bu soruyu sabit bir ritimle yeniden sorun; özellikle araçlar,
ekip yapısı ya da (bkz. Bölüm 7) işin doğası değiştiğinde.

### Ölçüm yokluğunu görünür kılın

Büyük kuruluşlarda en riskli boşluk kötü bir metrik değil, enstrümantasyonu
zor olduğu için hiç kimsenin ölçmediği bir alandır: geliştirici deneyimi,
ekipler arası bağımlılık sürtünmesi, kurumsal bilginin aşınması. Bu boşlukları
varsayılan olarak görünmez kalmaya bırakmak yerine metrik tüzüğünüzde açıkça
adlandırın. Neyi ölçmediğini ve nedenini bilen bir kuruluş, bu alanların var
olduğunu sessizce unutmuş bir kuruluştan çok daha güçlü bir konumdadır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yoğun enstrümantasyon, çok sayıda metrik | Geniş görünürlük, daha az kör nokta | Pano yorgunluğu, daha geniş oyunlama yüzeyi, daha yüksek bakım maliyeti |
| Asgari, karar odaklı metrikler | Odak, düşük yük, her metrik savunulabilir | Seçilen kümenin dışında beliren bir sorunu kaçırma riski |
| Yalnızca teşhis için metrikler | Dürüst raporlamayı ve araştırmayı teşvik eder | Yönetim yine de gayriresmî olarak değerlendirme için kullanabilir |
| Bireysel değerlendirmeye bağlı metrikler | Hesap verebilirlik hissi verir, yöneticilere anlatması kolay | Güçlü oyunlama teşviki; güveni zedeler; çoğunlukla yanlış şeyi ölçer |

Temel gerilim **kapsam ile odak** arasındadır ve **teşhis ile yargı** arasındaki
gerilimle keskinleşir. Çok az metrik olursa yalnızca kriz olarak ortaya çıkan
kör noktalar geliştirirsiniz; çok fazla olursa hiçbirine göre hareket
edilemez, değerlendirme ağırlığı yüklediğiniz her biri de çarpıtmayı çağırır.
Bunu, asgari ve karar odaklı başlayarak, bir metriği yalnızca belirli, adı
konmuş bir karar gerektirdiğinde ekleyerek ve yalnızca teşhis sınırını,
varsayılan olarak aşınmasına izin vermek yerine konu 1.4'ün yönetişim
çalışmasında açıkça savunarak çözün.

## Ekibinizle tartışılacak sorular

1. **Mevcut panomuzdaki her metrik için iyi bir okuma ve kötü bir okuma hangi
   kararı tetikler?** İki okuma da aynı eyleme ya da hiçbir eyleme yol
   açıyorsa, metrik süstür. Panonuzu kutucuk kutucuk gezin ve her biri için
   dürüst bir yanıt zorlayın. Bu alıştırma şişmiş bir panoyu çoğu zaman tek
   oturuşta yarıya indirir; çünkü dağınıklığın çoğu, hâlâ geçerli bir nedenle
   bilerek eklenmiş metriklerden değil, kimsenin hiç kaldırmadığı metriklerden
   birikir.

2. **Metriklerimizden hangileri teşhis amaçlı kullanılıyor, hangileri sessizce
   değerlendirme amaçlı hale geldi?** Bir sistem kısıtını anlamak için kurulmuş
   bir metrik, kimse bunu bilerek kararlaştırmadan ekipleri ya da bireyleri
   sıralamak için kullanılmaya kayabilir; çoğunlukla bir gözden geçirme
   toplantısında söylenen gelişigüzel bir yorum alışkanlığa dönüşür. Bu kayma
   olduğunda sayı güvenilirliğini yitirir, çünkü artık insanların onu doğru
   kılmak yerine iyi göstermek için bir nedeni vardır. Her metriğin amaçlanan
   kullanımını yazılı olarak adlandırın ve mevcut uygulamayı buna göre
   denetleyin.

3. **Enstrümantasyonu zor olduğu için neyi ölçmüyoruz ve bu boşluk bize neye
   mal oluyor?** En tehlikeli kör noktalar, kolay ölçülmeye direndikleri için
   hiçbir zaman panoya girmeyenlerdir: ekipler arası bağımlılık sürtünmesi,
   kurumsal bilginin aşınması ya da kırılgan geçici çözümlerin sessizce
   birikmesi. Herkesin özelde endişelendiği ama kimsenin izlemediği şeylerin
   bir listesini getirin ve nedeni konusunda dürüst olun.

4. **Bu metriği yarın silsek kim fark ederdi ve ne kaybederdi?** Kimsenin
   özlemeyeceği bir metrik, hiçbir kararı beslemeyen bir metriktir. Bu soru,
   yalnızca atalet sayesinde hayatta kalan gösteriş kutucuklarını ortaya
   çıkarır. Onlarca ekip panosu olan büyük bir kuruluş için bu budama disiplini,
   yeni metrik ekleme disiplini kadar önemlidir.

5. **Panomuzdaki her metriğin üretilmesi ve bakımı, enstrümantasyonun
   arkasındaki mühendislik zamanı dahil, gerçekte neye mal oluyor?** Metrikler
   bedava değildir. Hatlar, panolar ve bir sayıyı tartışmaya harcanan gözden
   geçirme zamanı, tekrarlayan bir maliyet taşır; bu maliyet tek bir görünür
   kalem yerine birçok küçük göreve dağıldığı için hafife almak kolaydır.
   Gerçek enstrümantasyon ve bakım emeğinizi getirin ve 1. sorudaki karar
   değeriyle tartın.

6. **Ölçüm nerede muhakemenin yerine geçti, muhakeme nerede ölçümün yerine
   geçti?** İki başarısızlık biçimi de gerçektir. Her kararı bir panoya
   devreden bir ekip, sayının gözden kaçırdığını yakalayan bağlamsal muhakemeyi
   kaybeder; eldeki veriyi odadaki en gür sese tercih eden bir ekip ise bu
   konunun başladığı sorunun aynısını tekrarlar. Hedef, muhakemeyi bilgilendiren
   metriklerdir, onun yerini alan metrikler değil.

## Sektörel bakış

**Girişim (startup).** Bir avuç mühendisle, bu konunun uyardığı şeylerin
çoğu, yani değerlendirmeye kayma, kör noktalar, pano şişmesi, herkes her gün
konuştuğu için kolayca önlenir. Risk tam tersidir: ekibin karşılayamayacağı bir
yük gibi göründüğü için ölçümü tümden atlamak. İki üç karar biçiminde soru seçin
(yeterince hızlı mı teslim ediyoruz, kalite korunuyor mu) ve yalnızca onlara
enstrümantasyon ekleyin.

**Küçük işletme.** Özel bir platform ya da veri ekibi olmadan, özel
enstrümantasyon kurmak yerine mevcut araçlarınızın zaten raporladığına yaslanın.
Bir ödeme işlemcisinin panosu, bir destek aracının yanıt metrikleri ve CI
sağlayıcınızın derleme geçmişi çoğu zaman en önemli kararları kapsar. Size
söylediğine göre hareket edeceğinizi kanıtlamadan özel bir mühendislik analitiği
platformu satın alma cazibesine direnin.

**Kurumsal.** Temel risk, metriklerin yönetim katmanlarından yukarı toplanırken
sessizce teşhisten değerlendirmeye kayması ve budama işi kimsenin olmadığı için
birikerek büyüyen panolardır. Yönetişim (konu 1.4) bu ölçekte isteğe bağlı
değildir. Tanımları iş birimleri arasında standartlaştırın ve metrik
programının kendisine düzenli bir emeklilik incelemesi koyun.

**Kamu.** Buradaki metrikler çoğu zaman yasal ya da bütçesel ağırlık taşır;
bu da doğru yapmanın değerini de yanlış yapmanın maliyetini de artırır. Bir
yasama organına ya da denetim kuruluşuna raporlanan bir sayı, belgelenmiş bir
yönteme, raporlama dönemleri boyunca sabit bir tanıma ve sınırlılıkları
konusunda dürüstlüğe ihtiyaç duyar. "Şu anda bunu ölçmüyoruz" cümlesini
saklanacak özel bir kusur olarak değil, savunmanız gerekebilecek bir yanıt
olarak görün.

## Örnekler

**Kurumsal.** Küresel bir sigorta şirketinin mühendislik organizasyonu altmışın
üzerinde scrum ekibine büyümüştü; her birinin kendi gayriresmî panosu vardı ve
hiçbiri bir diğeriyle karşılaştırılamıyordu. Yönetim temel bir soruya yanıt
veremiyordu: on stratejik platform yatırımımızdan hangisi gerçekten daha hızlı
yazılım sağlıyor. Çözüm daha fazla metrik değil, daha az ve daha iyi metrikti:
kuruluş, her yerde aynı hat verisinden aynı biçimde hesaplanan, karar odaklı
ortak bir DORA metrikleri çekirdeği (konu 2.10) tanımladı, ekibe özgü kırk
panoyu emekli etti ve iki çeyrek içinde yatırım alanlarını nihayet ortak bir
zeminde karşılaştırabildi.

**Kamu.** Ulusal bir vergi idaresinin dijital hizmet ekibinden, bir denetim
komitesi çok yıllı bir modernizasyon programının getirisini göstermesini
istemişti. Ekibin mevcut metrikleri tamamen içe dönük ve faaliyet temelliydi:
tamamlanan hikâye puanları, kapatılan sprintler. Bunların hiçbiri komitenin
asıl sorusunu yanıtlamıyordu. Ekip bunun yerine küçük bir sonuç metrikleri
kümesi kurdu: bir vatandaşın beyanname sorununu çözme süresinin medyanı,
dijital kanal benimseme oranı ve yeni sistemde kaçan hata oranı. Bunları
belgelenmiş bir yöntemle üç ayda bir raporladı. Komitenin soruları "çalıştığınızı
kanıtlayın"dan "bunu bir sonraki kuruma nasıl taşırız"a kaydı; iyi seçilmiş bir
metrik kümesinin üretmesi gereken sonuç tam olarak budur.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Bilinçli ölçümün getirisi karar kalitesidir. "Platform yatırımından sonra lead
time'ımız yüzde 30 iyileşti" diyebilen bir kuruluş, bunu kanıtla söyleyebilir;
o yatırımı savunabilir, işe yarayanı tekrarlayabilir ve yaramayanı
bırakabilir. Anekdota dayanan bir kuruluş bunların hiçbirini güvenle yapamaz ve
her iki tarafın da güvendiği bir sayıyı gösterecek kimse olmadığı için aynı
tartışmaları her bütçe döneminde yeniden yapar.

Ölçümün maliyeti pano değildir. Süregelen disiplindir: enstrümantasyon, tanım
bakımı ve bu konunun önerdiği periyodik budama. Bu toplam sahip olma maliyeti
gerçektir ama alternatifin maliyetine kıyasla mütevazıdır; alternatif, büyük
bir kuruluşun milyonlarca dolarlık teknoloji kararlarını, odada en ikna edici
tartışan kişiye dayanarak vermesidir. Bir metrik programının getirisi metriklerin
kendisi değil, onlar sayesinde daha iyi verilen kararlardır.

## Anti-desenler ve tuzaklar

- **Aracın dışa aktardığı her şeyi ölçmek:** panoyu gürültüye çevirir ve
  karşılığında hiçbir karar değeri olmayan devasa bir yüzeyde oyunlamayı çağırır.
- **Adı konmuş bir kararı olmayan metrikler:** bakım emeğine mal olan ve kimseye
  eyleme dönük bir şey söylemeyen süs.
- **Teşhisten değerlendirmeye sessiz kayma:** bir sayıya olan güveni yok etmenin
  en hızlı tek yolu.
- **Bir metriği hipotez yerine olgu saymak:** iki yıl önce doğru olan bir vekil
  bugün yanlış olabilir ve kimse kontrol etmez.
- **Kötü bir sayının yokluğunu iyi bir sayının varlığıyla karıştırmak:** hiç
  bakmadığınız bir metrik, bir şeyin yanlış olduğunu size söyleyemez.
- **Neye karar verileceğine karar vermeden ölçüm kabiliyeti kurmak:** bir soru
  arayan enstrümantasyon, gerçek mühendislik zamanını boşa harcar.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Metrikler varsa bile gelişigüzeldir, onları kuran
  kişiye özeldir ve hiçbirinin hangi kararı beslediğini kimse söyleyemez.
- **Düzey 2, Geliştirme:** Bazı ekipler için temel bir metrik kümesi vardır;
  çoğunlukla bir çerçeveden ya da aracın varsayılanlarından kopyalanmıştır ve
  bir karara açık bir bağı yoktur.
- **Düzey 3, Standartlaştırma:** İzlenen her metriğin belgelenmiş bir amacı ve
  açık bir teşhis-değerlendirme sınıflandırması vardır; kuruluş genelinde
  tutarlı uygulanır.
- **Düzey 4, Yönetme:** Metrikler, beslediği kararlara karşı sabit bir ritimle
  gözden geçirilir; hak ettiği yeri kazanmayı bırakan metrikler emekli edilir ve
  küme yalnızca değeri değil maliyeti açısından da ölçülür.
- **Düzey 5, Orkestrasyon:** Ölçüm yaşayan bir yetenektir: kuruluş kendi kör
  noktalarını düzenli olarak belirler, vekillerinin hâlâ gerçekliği izleyip
  izlemediğini sınar ve metrik programının kendisini yalnızca sürdürülecek değil,
  iyileştirilecek bir şey olarak ele alır.

## Tartışma önerileri

1. Bugün sorulsa, panomuzdaki hangi metriği tutmayı haklı çıkarmakta en çok zorlanırdık?
2. Son çeyrekte bir görüşe değil de bir metriğe dayanarak hangi kararı verdik?
3. Kuruluşumuzun neresinde bir teşhis metriği sessizce değerlendirme metriğine dönüştü?
4. Neyi ölçmekten korkuyoruz ve neden?
5. Metrik programımız yarın ortadan kalksa hangi kararlar kötüleşirdi?

## Temel çıkarımlar

- Ölçüm **kararlara** hizmet etmek için vardır, kendi başına var olmak için
  değil; bir karara bağlanmamış metrik süstür.
- **Teşhis** amaçlı kullanımı **değerlendirme** amaçlı kullanımdan yazılı olarak
  ayrı tutun ve aralarındaki sessiz kaymayı gözetleyin.
- Her metriği temsil ettiği şey hakkında yerleşik bir olgu değil, bir **hipotez**
  olarak görün ve bu hipotezi bir ritimle yeniden gözden geçirin.
- Sessizlik, yani bir şeyi ölçmemeyi seçmek, kendi başına sonuçları olan bir
  karardır; kör noktaları varsayılan olarak görünmez bırakmak yerine görünür kılın.
- Bir metrik programının toplam maliyeti gerçektir; her metriğin sağladığı karar
  değeriyle açıkça tartın.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (sonuç temelli mühendislik ölçümünün araştırma temeli).
- *How to Measure Anything*, Douglas W. Hubbard (ölçülemez görünen şeyleri
  nicelleştirmek için genel bir çerçeve).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (ölçümün bir kuruluşa sokabileceği işlev bozukluğunun temel çözümlemesi).
- *Thinking, Fast and Slow*, Daniel Kahneman (yardımsız muhakemeyi ölçümün
  güvenilmez bir ikamesi yapan bilişsel yanlılıklar).
- Google'ın DevOps Research and Assessment (DORA) programı, [dora.dev](https://dora.dev/)
  (bu kitabın baştan sona yararlandığı süregelen State of DevOps araştırması).
