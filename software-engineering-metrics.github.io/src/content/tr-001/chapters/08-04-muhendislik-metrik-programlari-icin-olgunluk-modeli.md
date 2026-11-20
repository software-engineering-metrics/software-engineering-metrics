# 8.4 Mühendislik metrik programları için olgunluk modeli

## Genel bakış ve motivasyon

Bu kitabın 1. ile 7. bölümlerindeki her konu, o konunun metrik ailesine özgü,
kendi beş düzeyli [olgunluk modeliyle](https://en.wikipedia.org/wiki/Capability_Maturity_Model)
sona erer. Bu konu farklı bir şey yapar: geri çekilir ve olgunluğun, tüm bu
tekil metrikleri birlikte üreten, yöneten ve bunlara göre hareket eden kurumsal
yetkinlik olarak metrik *programının* bütünü için neye benzediğini sorar. Bir
kurum, tekil DORA metrik olgunluğunda Düzey 4'te olup program olgunluğunda
genel olarak Düzey 1'de kalabilir; örneğin mükemmel bir enstrümantasyonu ama
yönetişimi (konu 1.4) yoksa ya da mükemmel tekil metrikleri ama her bir metriğin
ne kadar iyi tasarlandığından bağımsız olarak temeldeki veriyi bozmuş, korkuyla
güdülen bir devreye alması (konu 8.3) varsa.

Bu konunun modeli, bu kitabın kapsadığı her tekil metrik ailesini kesen beş
boyut etrafında kurulmuştur: yönetişim ve sahiplik (konu 1.4), enstrümantasyon
kalitesi (konu 1.5), sonuç ile çıktı dengesi (konu 1.3, konu 7.4), kültürel
güven (konu 8.3) ve sürekli iyileştirme (konu 1.1'in kitabın en başında kurduğu
emekli etme ve gözden geçirme disiplini). Bir kurumun genel program olgunluğu,
gerçekçi olarak bu beş boyutun ortalaması değil, en düşüğüdür; çünkü herhangi
birindeki ciddi bir zayıflık, özellikle kültürel güven, diğerlerinin hepsindeki
gücün değerini baltalayabilir; konu 8.3'ün doğrudan savunduğu gibi.

Büyük ekipler için bu birleşik model, liderliğe kitabın boyunca sunduğu konu konu
olgunluk kontrollerinden ayrı ve onları tamamlayan, kurumsal öz değerlendirme için
tek, dürüst bir araç sağlar. Metrik olgunluğunu iş birimleri arasında karşılaştıran
kurumsal şirketler ve program olgunluğunu denetim organlarına bildiren kamu
kuruluşları, kırk beş ayrı konu düzeyindeki olgunluk okumasını kendilerinin tutarlı
bir genel tabloda sentezlemesine gerek kalmadan, bu tek, kesen değerlendirmeden
yararlanır.

## Temel ilkeler

- **Program olgunluğu, boyutlarının ortalaması değil, en düşüğüdür.** Kültürel
  güvendeki ciddi bir zayıflık, diğer her yerdeki gücü baltalar.
- **Beş kesen boyut yönetişim, enstrümantasyon, sonuç dengesi, kültürel güven ve
  sürekli iyileştirmedir.** Her boyut, pek çok tekil konudaki ipleri bir araya
  getirir.
- **Bu model, tekil konu düzeyindeki olgunluk modellerinin yerini almaz,
  onları tamamlar.** Eksiksiz bir tablo için ikisini birlikte kullanın.
- **Öz değerlendirme, özlem değil, dürüst ve özgül olmalıdır.** Olmak
  istediğiniz yere değil, gerçekte bulunduğunuz yere, somut kanıtlarla puan
  verin.
- **Düzeyler arası ilerleme, yalnızca zamanın geçmesiyle değil, bilinçli
  yatırımla olur**; olgunluk kendiliğinden birikmez.

## Öneriler

### Beş boyutun her birini somut kanıtlarla bağımsız olarak değerlendirin

Yönetişim için, sonuç doğuran her metriğin adı belli bir sahibi ve belgelenmiş
bir tüzüğü olup olmadığını kontrol edin (konu 1.4). Enstrümantasyon için
metriklerin mümkün olan her yerde kendi bildirimi yerine otomatik kaynaklardan
gelip gelmediğini kontrol edin (konu 1.5). Çıktı dengesi için, birincil
panolarınızdaki sonuç ağırlıklı metriklerin çıktı ağırlıklı metriklere gerçek
oranını hesaplayın (konu 7.4). Kültürel güven için, devreye alma geçmişinizin
hiç bir metriğin kötü yönetilmiş, cezalandırıcı bir kullanımını içerip
içermediğini ve bunun nasıl ele alındığını dürüstçe değerlendirin (konu 8.3).
Sürekli iyileştirme için, kurumunuzun kendini kanıtlamayı bırakan metrikleri
emekli ettiğine dair belgelenmiş bir geçmişi olup olmadığını kontrol edin
(konu 1.1). Birleştirmeden önce her boyuta bağımsız olarak puan verin.

### Dürüst genel puanınız olarak boyutlar arasındaki en düşüğü alın

Beş boyut puanınızı tek, daha gönendirici bir bileşik puana ortalamak
cazibesine direnin. Mükemmel enstrümantasyonlu (Düzey 4) ama zayıf kültürel
güvenli (Düzey 1) bir program, anlamlı hiçbir bakımdan Düzey 2 ya da 3 bir
program değildir; zayıf boyut güçlü olanların değerini aktif olarak baltalar,
çünkü korkuyla güdülen manipülasyonla bozulmuş güvenilmez veri, mükemmel
enstrümantasyonla toplanmış olmasıyla kurtarılmaz. Ortalamanın yapacağından
daha az gönendirici bir genel tablo üretse de, en düşüğü dürüstçe bildirin.

### Bu modeli konu düzeyindeki modellerin yerine değil, onlarla birlikte kullanın

Bu birleşik model "genel programımız ne kadar olgun" sorusunu yanıtlar; 2. ile 8.
bölümler boyunca tekil konu düzeyindeki modeller ise "bu özel metrik için
pratiğimiz ne kadar olgun" sorusunu yanıtlar. İkisini birlikte kullanın:
birleşik modeli hangi kesen boyutun en çok yatırıma ihtiyaç duyduğunu
önceliklendirmek için, konu düzeyindeki modelleri ise o boyut içinde hangi özel
metrik ailelerinin en çok ilgiye ihtiyaç duyduğunu belirlemek için.

### Değerlendirmeyi yalnızca bir kriz tetiklediğinde değil, sabit bir ritimle yeniden ele alın

Kitabın tutarlı yönetişim disiplinini (konu 1.4) izleyerek, program olgunluğunu
yalnızca bir kriz (keşfedilmiş bir manipülasyon olayı, itibar zedeleyen bir kamu
raporu) soruyu zorladığında değil, düzenli bir ritimle, yıllık yaygındır, yeniden
değerlendirin. Kendi olgunluğunu yalnızca tepkisel olarak inceleyen bir program,
zayıflayan bir boyutu gerçek, maliyetli bir olay üretmeden önce yakalayıp ele
alma fırsatını kaçırır.

### Düşük bir puanı, başarısız not değil, yatırım için dürüst bir başlangıç noktası sayın

Konu 1.1'in tüm kitap için kurduğu, değerlendirici değil tanılayıcı çerçeveyi
izleyerek, herhangi bir boyuttaki düşük olgunluk puanını, kötü hissedilecek bir
hüküm olarak değil, bilinçli bir yatırım planının başlangıç noktası olarak
kullanın (konu 8.5'in benimseme yol haritası doğrudan sonraki adımdır).
Dürüstçe değerlendirildiğinde çoğu kurum bu modelin bir yerinde gerçek
zayıflıklar bulacaktır; verimli yanıt, puan konusunda savunmacı olmak değil,
hedefli yatırımdır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Beş boyut puanının ortalamasını almak | Tek, basit, daha gönendirici bir sayı üretir | Bir boyuttaki, diğerlerini baltalayan kritik zayıflığı gizler |
| Boyutlar arasındaki en düşüğü almak | Dürüst, eyleme dönük, gerçek kısıtı doğru belirler | Bir boyut diğerlerinin çok gerisinde kalırsa moral bozucu hissedilebilir |
| Yalnızca konu düzeyindeki modelleri kullanmak | Ayrıntılı, metriğe özgü rehberlik | Genel program sağlığının kesen görünümünü kaçırır |
| Yalnızca bu birleşik modeli kullanmak | Basit, üst düzey | Konu düzeyindeki modellerin sağladığı özgül, eyleme dönük ayrıntıyı kaçırır |

Temel gerilim **basitlik ile dürüstlük** arasındadır; konu 5.5'in yanlış biçimde
kesin tek bir sayıya karşı uyarısını yineler. Ortalaması alınmış bir puanı
bildirmek daha basit ve rahattır, ancak programınızın genel güvenilirliği ve
değeri üzerindeki gerçek kısıtı aktif olarak gizler. Gerilimi dürüstlükten yana
çözün: en düşüğü bildirin ve eksiksiz, doğru ve eyleme dönük bir tablo için bu
birleşik modeli de tekil konu düzeyindeki modelleri de birlikte kullanın.

## Ekibinizle tartışılacak sorular

1. **Dürüstçe ve bağımsız olarak değerlendirildiğinde, beş boyutumuzun her biri
   yani yönetişim, enstrümantasyon, sonuç dengesi, kültürel güven ve sürekli
   iyileştirme gerçekte hangi düzeyde puan alıyor?** Genel bir değerlendirmede
   birleştirmeden önce, izlenimle değil somut kanıtla her boyutu açıkça gözden
   geçirin.

2. **En zayıf boyutumuz hangisi ve bu, programın genel sağlığına dair
   sezgimizle örtüşüyor mu, yoksa daha önce doğrudan adlandırmadığımız bir şeyi
   mi ortaya çıkarıyor?** Örneğin özellikle kültürel güvendeki düşük bir puan,
   aksi hâlde teknik olarak mükemmel görünen verideki güveni sarsabilir.

3. **Güçlü ve zayıf yanlarımızı, en zayıf boyutumuzu gerçek kısıt olarak
   dürüstçe bildirmek yerine daha gönendirici bir genel tabloya mı
   ortaladık?** Kurumunuzun kendi metrik olgunluğundan daha önce nasıl söz
   ettiği konusunda dürüst olun.

4. **Genel program olgunluğumuzu en son ne zaman resmî olarak yeniden
   değerlendirdik ve bunu bir kriz mi yoksa bilinçli, düzenli bir ritim mi
   tetikledi?** Yalnızca krizle tetiklendiyse, bundan sonra düzenli bir
   değerlendirme ritminin nasıl görüneceğini tartışın.

5. **En zayıf boyutumuza hedefli yatırım, önümüzdeki çeyrek için somut olarak
   nasıl görünürdü?** Değerlendirmeden doğrudan eyleme geçin ve bu konunun
   tanısını konu 8.5'in benimseme yol haritasına bağlayın.

6. **Öz değerlendirmemiz, kurum dışından birinin yapacağı dürüst bir dış
   incelemeyle nasıl karşılaştırılırdı?** Bu soru, iç değerlendirmenizin
   kitabın baştan sona uyardığı iyimser yanlılığın bir kısmına tabi olup
   olmadığını sınar; gerçekten dış bir bakış açısıyla ara sıra kontrol etmeye
   değer.

## Sektörel bakış

**Startup.** Çok küçük ölçekte resmî beş boyutlu değerlendirme muhtemelen
gereksizdir; çünkü gayriresmî farkındalık bu modelin ortaya çıkaracağının çoğunu
genellikle kapsar. Erken edinmeye değer alışkanlık, özellikle kültürel güven
konusunda dürüst olmaktır; çünkü genç bir şirketin erken metrik kültürü, kurum
önemli ölçüde büyüdükten sonra değiştirilmesi çok daha zor bir temel oluşturur.

**Küçük işletme.** Beş boyutun yılda bir, resmî puanlama olmasa bile, basit,
dürüst, gayriresmî biçimde gözden geçirilmesi, bu ölçekte yapılandırılmış bir
değerlendirme sürecine gerek kalmadan bu konunun değerinin çoğunu yakalar.

**Kurumsal.** Bu birleşik model, metrik olgunluğunu çok sayıda iş birimi arasında
adil biçimde karşılaştırmak için özellikle değerlidir; çünkü onlarca ekip
arasında konu konu bir karşılaştırma hantal olurdu. Birimler arasında en yaygın
zayıflığı hangi boyut gösteriyorsa, kurum genelindeki yatırımı ona doğru
önceliklendirmekte kullanın.

**Kamu.** Bu birleşik modeli kullanan, belgelenmiş, dürüst bir olgunluk öz
değerlendirmesi, değerlendirme özlemle değil dürüstçe yapıldığı sürece, bir denetim
organına program titizliğini göstermek için gerçekten yararlı bir üründür.
Öz değerlendirmenin kendisinin, özellikle salt iç bakış açısından doğru
değerlendirmesi en zor olan kültürel güven boyutu için, dönemsel dış incelemesini
düşünün.

## Örnekler

**Kurumsal.** Bir lojistik teknolojisi şirketinin ilk öz değerlendirmesi,
enstrümantasyon boyutunu Düzey 4 (işlem hatlarından ve sistemlerden otomatik,
kapsamlı veri kaynağı), ancak kültürel güven boyutunu Düzey 1 olarak puanladı;
bunun nedeni iki yıl önceki, hiç doğrudan kabul edilmemiş ya da onarılmamış,
ele alınmamış bir metrik kötüye kullanım olayıydı (konu 8.3'ün kamu örneğini
doğrudan yansıtır). Liderliğin ilk içgüdüsü bunları saygın bir Düzey 2 ya da 3
genel tabloya ortalamaktı; bu konunun en düşüğe dayalı puanlamasının daha dürüst
uygulanması, kültürel güveni tüm programın değerindeki gerçek kısıt olarak
doğru biçimde belirledi; çünkü mükemmel enstrümantasyon bile, geçmiş olaydan
haberdar mühendislerin hâlâ tam güvenmediği ve dürüstçe bildirmediği veri
üretiyordu. Bu dürüst, en düşüğe dayalı değerlendirmenin doğrudan sonucu olarak,
konu 8.3'ün rehberliğini doğrudan izleyen kültürel güveni onarmaya yönelik
hedefli yatırım, daha fazla enstrümantasyon yatırımının önüne alındı.

**Kamu.** Daha geniş bir teknoloji yönetişimi incelemesinin parçası olarak bu
birleşik modeli kullanarak ilk resmî olgunluk öz değerlendirmesini yapan bir ulusal
istatistik kurumu, yönetişim boyutunun iyi puan aldığını (açık sahiplik, belgelenmiş
tüzükler) ancak sonuç dengesi boyutunun zayıf puan aldığını buldu; 7. bölümün
sonuç ağırlıklandırma savı kurumun teknik liderliğinde entelektüel olarak iyi
anlaşılmış olmasına rağmen, izlenen metriklerin ezici çoğunluğu çıktı ve
etkinlik temelliydi. "Çıktıları daha çok ölçmeliyiz" biçiminde belirsiz, genel bir
his yerine bu dürüst, özgül bulgu, kurumun sonraki yatırım planına (konu 8.5)
somut, kanıta dayalı bir başlangıç noktası verdi ve kurumun denetim kuruluna
yapılan takip raporlaması, yönlendirilmiş bir metrik yatırım stratejisinin
temeli olarak bu olgunluk değerlendirmesini özellikle andı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Dürüst, en düşüğe dayalı bir olgunluk öz değerlendirmesinin getirisi, bir metrik
programının değeri üzerindeki gerçek kısıtı doğru belirlemektir; zayıf bir boyut
programın bütününün güvenilirliğini baltalamaya devam ederken, zaten güçlü bir
boyuta daha fazla yatırım yapmak yerine; yukarıdaki iki örneğin de gösterdiği
tam olarak bu örüntüdür. Bu hedefleme etkisi modelin asıl değeridir: sınırlı
iyileştirme yatırımını, yatırımın en kolay ya da en tanıdık olduğu yere değil,
genel programın olgunluğunu gerçekten ilerletecek yere yönlendirir.

Toplam sahip olma maliyeti, değerlendirme çabasının kendisidir; mütevazı ve
dönemseldir ve zaten güçlü bir boyuta yatırım yapmayı sürdürürken, ele alınmamış
bir zayıf boyutun, özellikle kültürel güvenin, programın kurduğu diğer her şeyin
değerini sessizce bozmaya devam etmesi riskiyle tartılır.

## Anti-desenler ve tuzaklar

- **Boyut puanlarını daha gönendirici bir bileşik puana ortalamak:** programın
  genel değeri üzerindeki gerçek kısıtı gizler.
- **Yalnızca özlem temelinde, gerçek pratik yerine beyan edilen politikaya
  dayanarak değerlendirmek:** hatalı, fazla iyimser bir tablo üretir.
- **Bu birleşik modeli, konu düzeyindeki modellerin tamamlayıcısı değil yerine
  geçen bir şey olarak kullanmak:** o tekil modellerin sağladığı özgül, eyleme
  dönük ayrıntıyı kaybeder.
- **Yalnızca bir kriz soruyu zorladığında yeniden değerlendirmek:** zayıflayan
  bir boyutu proaktif olarak yakalayıp ele alma fırsatını kaçırır.
- **Düşük bir puanı, yatırım başlangıç noktası yerine başarısız not saymak:**
  kitabın baştan sona önerdiği verimli, tanılayıcı yanıt yerine savunmacılığı
  davet eder.
- **Öz değerlendirmeye dürüst bir dış bakış açısı hiç aramamak:** kitabın baştan
  sona uyardığı iyimser yanlılığın değerlendirmenin kendisini etkileme riskini
  taşır.

## Olgunluk modeli

- **Düzey 1, Başlatma:** Resmî, kesen bir değerlendirme yoktur; tekil metrik
  aileleri bağımsız olarak değerlendirilebilir, ancak genel program sağlığı
  incelenmez.
- **Düzey 2, Geliştirme:** Genel program güçlü ve zayıf yanlarına dair bir miktar
  gayriresmî farkındalık vardır, ancak yapılandırılmış, beş boyutlu bir
  değerlendirme yapılmamıştır.
- **Düzey 3, Standartlaştırma:** Yapılandırılmış, dürüst, en düşüğe dayalı beş
  boyutlu bir değerlendirme, somut kanıt kullanılarak kurum genelinde yapılır.
- **Düzey 4, Yönetme:** Değerlendirme düzenli bir ritimle tekrarlanır ve
  bulguları hedefli yatırım önceliklerini doğrudan ve tutarlı biçimde bilgilendirir.
- **Düzey 5, Orkestrasyon:** Kurumun, dönemsel dış inceleme dâhil, dürüst öz
  değerlendirmeye dair gösterilmiş, sürdürülen bir pratiği vardır ve
  değerlendirme bulgularının doğrudan yönlendirdiği belirli yatırım kararlarını
  gösterebilir.

## Tartışma önerileri

1. Beş boyutun her birinde şu an dürüst, kanıta dayalı puanımız nedir?
2. Gerçek kısıtımız hangi boyut ve bu, sezgimizle örtüşüyor mu?
3. Puanlarımızı hiç, en düşüğün göstereceğinden daha gönendirici bir tabloya ortaladık mı?
4. En son ne zaman resmî olarak yeniden değerlendirdik ve bu proaktif miydi, kriz güdümlü mü?
5. Öz değerlendirmemizin dürüst bir dış incelemesi büyük olasılıkla neyi ortaya çıkarırdı?

## Temel çıkarımlar

- Program olgunluğu beş kesen boyutu kapsar: **yönetişim, enstrümantasyon,
  sonuç dengesi, kültürel güven ve sürekli iyileştirme**.
- Genel olgunluk **boyutlar arasındaki en düşüktür, ortalama değil**; kültürel
  güvendeki zayıflık diğer her yerdeki gücü baltalar.
- Bu birleşik modeli kitap boyunca yer alan tekil konu düzeyindeki olgunluk
  modellerinin **yerine değil, onlarla birlikte** kullanın.
- Soruyu bir kriz zorlayana kadar beklemek yerine **düzenli bir ritimle yeniden
  değerlendirin**.
- Düşük bir puanı, kitabın baştan sona tanılayıcı çerçevesini izleyerek,
  başarısız not değil, **dürüst bir yatırım başlangıç noktası** sayın.

## Kaynaklar ve ileri okuma

- *Capability Maturity Model Integration (CMMI)*, Software Engineering
  Institute (bu konunun yaklaşımının yapısal ilham aldığı genel olgunluk
  modeli metodolojisi).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu birleşik modelin bir araya getirdiği tekil konu
  düzeyindeki olgunluk modellerinin araştırma temeli).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (metrik programı sağlığının ve işlev bozukluğunun kurumsal değerlendirmesi).
- *The Fifth Discipline: The Art and Practice of the Learning
  Organization*, Peter M. Senge (sistem düzeyinde kurumsal öz değerlendirme ve
  sürekli iyileştirme).
