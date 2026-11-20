# 5.4 Mühendisliğin maliyeti ve birim ekonomisi

## Genel bakış ve motivasyon

Bu konu, Bölüm 5'i açıkça mali bir zemine taşır: mühendislik maliyetini bir
finans paydaşının doğrudan kullanabileceği terimlerle nasıl ifade edeceğinizi ve
**birim ekonomisini** (unit economics), yani maliyeti anlaşılmaz, toplu bir
departman bütçe kalemi olarak değil, anlamlı bir çıktı ya da kullanım birimi
başına ifade etmeyi nasıl kuracağınızı anlatır. Mühendislik maliyeti, yazılım
odaklı bir kuruluşta genellikle denetlenebilir en büyük gider kalemidir. Yine de
finans işlevi tarafından çoğu zaman en az anlaşılan kalemdir; neyin onu
yönlendirdiğine ya da büyümeyle nasıl ölçeklendiğine dair neredeyse hiçbir görünürlük
olmadan tek, büyük bir sayı olarak raporlanır. Bu konu o boşluğu kapatmak için
vardır, çünkü "bu sistemi çalıştırmak bize ne kadara mal oluyor" ya da "büyüdükçe
maliyetimiz nasıl ölçekleniyor" sorularına somut mali terimlerle yanıt veremeyen
bir mühendislik lideri, her bütçe konuşmasında gerçek bir dezavantajdadır.

Bu konunun önerdiği özel disiplin olan birim ekonomisi, maliyeti yalnızca toplam
kadro maliyeti ya da toplam bulut harcaması olarak değil, dağıtım başına, hizmet
verilen müşteri başına, işlenen işlem başına ya da işletme için gerçekten önemli
başka bir birim başına ifade etmek demektir. Bu yeniden çerçeveleme, konu 1.3'ün
çıktı yerine sonuç ilkesine doğrudan bağlanır: düşen bir toplam maliyet sayısı,
daha az müşteriye hizmet vermekten geliyorsa otomatik olarak iyi değildir;
yükselen bir toplam maliyet sayısı da orantılı olarak çok daha fazla müşteriye
hizmet vermekten geliyorsa otomatik olarak kötü değildir. Birim ekonomisi,
maliyet eğilimlerini yalnızca görünür değil, yorumlanabilir kılan şeydir.

Büyük ekiplerde bu konunun disiplini, mühendislik finansmanını kara kutudan
okunabilir, yönetilebilir bir sisteme dönüştürür. Kurumsal kuruluşlar, farklı
ürünlerin, platformların ya da ekiplerin maliyet verimliliğini adil bir zeminde
karşılaştırmak için birim ekonomisini kullanır. Devlet kuruluşları aynı disiplini
mali sorumluluğu göstermek ve zaman içinde hizmet verilen vatandaş başına maliyeti
düşürecek altyapı yatırımı için kanıta dayalı bir dava kurmak için kullanır.

## Temel ilkeler

- **Toplam maliyet tek başına, bir payda olmadan yorumlanamaz.** Birim ekonomisi,
  yani anlamlı birim başına maliyet, anlaşılmaz bir sayıyı eyleme geçirilebilir
  bir eğilime dönüştürür.
- **Gerçek bir iş ya da misyon değerini yansıtan bir birim seçin**; keyfi ya da
  kolayca manipüle edilebilir bir payda değil.
- **Maliyetin birden çok bileşeni vardır: insan, altyapı ve araçlar.** Bunları ayrı
  ayrı izleyin, çünkü her birinin maliyet sürücüsü ve çekilecek kolu farklıdır.
- **FinOps uygulamaları, bu kitabın teslimat ve kalite metriklerine getirdiği
  titizliği bulut maliyetine getirir.** Maliyeti kaçınılmaz, anlaşılmaz bir
  veri olarak değil, ölçülebilir ve yönetilebilir olarak ele alın.
- **Düşen bir toplam maliyet otomatik olarak iyi, yükselen bir toplam maliyet
  otomatik olarak kötü değildir**; aynı anda birim ölçüye ne olduğuna bakmadan.

## Öneriler

### Keyfi bir payda değil, sunulan gerçek değeri yansıtan bir birim seçin

Birim ekonomisi hesabınız için gerçekten iş ya da misyon değerini izleyen bir
birim seçin: hizmet verilen müşteri başına maliyet, işlenen işlem başına maliyet,
dağıtım başına maliyet ya da bir kamu hizmeti için işlenen vatandaş etkileşimi
başına maliyet. Oranı güzelleştirmek için kolayca şişirilebilen, yani sunulan
gerçek bir dış değer birimine karşılık gelmeyen, iç ve büyük ölçüde isteğe bağlı
bir sayı gibi bir paydadan kaçının.

### İnsan, altyapı ve araç maliyetlerini ayırın

Mühendislik maliyetinin farklı sürücüleri ve farklı kolları olan en az üç ayrı
bileşeni vardır: insan maliyeti (maaşlar, yan haklar; kısa vadede büyük ölçüde
sabit), altyapı maliyeti (bulut harcaması; büyük ölçüde kullanımla değişken ve
mühendislik pratiğiyle doğrudan optimize edilebilir) ve araç ile lisans maliyeti
(çoğu zaman koltuk başına ya da kullanım kademesi başına sabit maliyetler). Bunları
tek bir karma toplam olarak değil ayrı ayrı izleyin; çünkü gerçek büyümeyle
ölçeklenen altyapının yol açtığı bir toplam maliyet artışı, yönetilmeyen araç
yayılmasının yol açtığı aynı toplam artıştan çok farklı bir yanıt gerektirir.

### FinOps disiplinini özellikle bulut altyapı maliyetine uygulayın

**[FinOps](https://en.wikipedia.org/wiki/FinOps)**, mühendislik, finans ve iş
ekipleri arasında işlevler arası iş birliğiyle değişken bulut harcamasına mali
hesap verebilirlik getirme disiplinidir. Temel pratiklerini doğrudan uygulayın:
maliyet atfı için bulut kaynaklarını ekip ve hizmete göre etiketleyin, harcamayı
düzenli bir ritimle bütçeyle karşılaştırarak gözden geçirin ve altyapı maliyet
verimliliğini (gerçek kullanım birimi başına maliyet) kabul edilip geçilecek,
kaçınılmaz sabit bir yük değil, bilinçli biçimde optimize edilmeye değer bir
mühendislik metriği olarak görün.

### Birim maliyet eğilimini zaman içinde izleyin ve hareketi açıkça araştırın

Tek bir birim maliyet anlık görüntüsü, eğiliminden daha az işe yarar: platform
olgunlaşıp ölçeklendikçe hizmet verilen müşteri başına maliyet düşüyor mu (gerçek
verimlilik kazanımlarının işareti) yoksa yükseliyor mu (biriken verimsizliğin,
daha yüksek bakım maliyetine yol açan teknik borcun ya da hizmet verilen
müşteri karışımının daha kaynak yoğun segmentlere kaymasının işareti). Önemli
bir birim maliyet eğilimi değişikliğini, sayıyı açıklamasız bildirmek yerine
açıkça araştırın.

### Maliyet verisini kitabın başka yerlerindeki teknik borç ve kalite metriklerine bağlayın

Birim başına yükselen altyapı ya da bakım maliyeti bazen birikmiş teknik borcun
(konu 4.5) ya da karmaşıklık odak noktalarının çoğalmasının (konu 4.1, konu 4.3)
doğrudan, ölçülebilir bir sonucudur: verimsiz kod yolları, yinelenen altyapı ve
kötü optimize edilmiş sorguların hepsi eninde sonunda yükselmiş birim maliyet
olarak ortaya çıkar. Yükselen birim maliyeti, Bölüm 4'teki karmaşıklık ve değişim
(churn) sinyalleriyle birlikte, borç önceliklendirme tartışmanıza bir girdi
olarak kullanın; çünkü gösterilmiş, ölçülebilir maliyet etkisi olan bir borç
kalemi, yalnızca ölçülmemiş bir kalite şikâyetinden daha güçlü bir iyileştirme
yatırımı gerekçesi sunar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca toplam maliyeti raporlamak | Basit, bütçelerin tipik olarak dağıtılış biçimiyle uyumlu | Paydasız yorumlanamaz; verimlilik eğilimlerini gizler |
| İyi seçilmiş paydalı birim ekonomisi | Yorumlanabilir, eyleme geçirilebilir, zaman ve ekipler arasında karşılaştırılabilir | Gerçekten anlamlı, manipüle edilmesi zor bir birim seçmek özen gerektirir |
| Karma maliyet raporlaması (insan, altyapı, araçlar bir arada) | Basit, tek sayı | Hangi belirli maliyet sürücüsünün gerçekte değiştiğini ve nedenini gizler |
| Ayrılmış maliyet bileşenleri | Belirli bir maliyet eğilimi için çekilecek doğru kolu gösterir | Daha ayrıntılı maliyet atfı ve izleme altyapısı gerektirir |

Temel gerilim **sadelik ile eyleme geçirilebilirlik** arasındadır. Tek bir toplam
maliyet sayısını raporlamak kolaydır ve birçok kuruluşun bütçeyi zaten dağıtma
biçimiyle uyumludur, ama hem maliyet değişikliklerini neyin yönlendirdiğini hem
de bu değişikliklerin gerçek verimliliği mi gerçek büyümeyi mi yansıttığını
gizler. Gerilimi, bu konunun önerdiği biraz daha karmaşık birim ekonomisine ve
bileşenlere ayrılmış raporlamaya yatırım yaparak çözün; çünkü ortaya çıkan eyleme
geçirilebilirlik, yani maliyet hareket ettiğinde tam olarak hangi kolu çekeceğinizi
bilmek, en küçük ölçeğin ötesindeki her kuruluş için mütevazı ek izleme çabasına değer.

## Ekibinizle tartışılacak sorular

1. **Mühendislik maliyetini anlamlı bir birim (müşteri, işlem, dağıtım) başına
   mı izliyoruz, yoksa yalnızca anlaşılmaz bir toplam olarak mı?** Yalnızca bir
   toplam varsa, maliyet eğiliminizi gerçekten yorumlanabilir kılacak birimin ne
   olacağını belirleyin ve izlemeye başlamanın neyi gerektireceğini tartışın.

2. **Mevcut maliyetimizi insan, altyapı ve araç bileşenlerine ayırabiliyor
   muyuz ve yakın tarihli bir değişikliği hangisinin yönlendirdiğini
   biliyor muyuz?** Varsa gerçek maliyet dökümünüzü açın ve bu soruyu güvenle
   yanıtlayacak kadar ayrıntılı olup olmadığını kontrol edin.

3. **Bulut altyapı maliyetimize FinOps etiketleme ve atıf pratiklerini uyguladık
   mı, yoksa tek, atfedilmemiş bir kalem mi?** Harcama belirli ekiplere ya da
   hizmetlere atfedilemiyorsa, gerçek atfa doğru ilk adımın nasıl görüneceğini
   tartışın.

4. **Birim maliyet eğilimimiz yakın zamanda her iki yönde belirgin biçimde
   hareket etti mi ve nedenini biliyor muyuz?** Varsa gerçek, yakın tarihli bir
   hareketi araştırın ve onu güvenle açıklayıp açıklayamadığınıza ya da gizem
   olarak kalıp kalmadığına bakın.

5. **Mevcut altyapı maliyeti eğilimimiz, Bölüm 4'teki teknik borç ya da karmaşıklık
   odak noktası sinyallerimizden herhangi biriyle ilişkili mi?** Bu veri
   kaynaklarını açıkça çapraz karşılaştırın ve borç iyileştirme iş gerekçesini
   güçlendirebilecek bir bağlantı çıkıp çıkmadığına bakın.

6. **Bir finans paydaşı yarın "bir müşteriye daha hizmet vermek bize ne kadara
   mal oluyor" diye sorsa, güvenle yanıtlayabilir miydik?** Bu somut, pratik soru,
   birim ekonominizin gerçekten kurulu ve hazır mı yoksa yalnızca kuramsal bir
   özlem mi olduğunu sınar.

## Sektörel bakış

**Girişim (startup).** Birim ekonomisi erken dönemde son derece önemlidir, çünkü
hem yatırımcıların hem kurucuların, her ek müşteriye hizmet vermenin maliyetinin
sürdürülebilirliğe mi yoksa ölçeklenemeyen bir iş modeline mi doğru gittiğini
bilmesi gerekir. Şirket resmî FinOps araçlarını haklı çıkaracak kadar büyüyene
kadar beklemek yerine, kaba tahminlerle bile, bunu çok erken izlemeye başlayın.

**Küçük işletme.** Bulut sağlayıcısının fatura panoları genellikle özel FinOps
araçları olmadan yeterli temel maliyet görünürlüğü sağlar. Asıl disiplin, makul bir
birim seçmek (müşteri başına maliyet ya da işlem başına maliyet) ve yalnızca
toplam faturaya tek başına bakmak yerine eğilimi düzenli aralıklarla kontrol
etmektir.

**Kurumsal.** FinOps pratiği ve ayrılmış maliyet bileşenlerinin izlenmesi, bulut
harcamasının birçok ekibe yayılmış, çoğu zaman yeterince incelenmeyen çok büyük
bir bütçe kalemini temsil edebildiği bu ölçekte şarttır. Doğru maliyet atfı
etiketlemesine ve özel bir maliyet gözden geçirme ritmine yatırım yapın; farklı
ürün hatlarının ya da platformların maliyet verimliliğini adil biçimde
karşılaştırmak için birim ekonomisini kullanın.

**Kamu.** Mali sorumluluk ve gösterilebilir maliyet verimliliği, bütçe
gerekçelendirmesi ve kamusal hesap verebilirlikle doğrudan ilgilidir. Hizmet
verilen vatandaş başına maliyet ya da işlenen işlem başına maliyet olarak
ifade edilen birim ekonomisi, bütçe komiteleri için çoğu zaman ham toplam
harcama rakamından çok daha ikna edici ve yorumlanabilir bir metriktir ve zaman
içinde birim başına maliyeti düşüren altyapı yatırımının iş gerekçesini
doğrudan destekler.

## Örnekler

**Kurumsal.** Bir hizmet olarak yazılım (SaaS) şirketinin finans ekibi, art arda
birkaç çeyrek boyunca yükselen toplam bulut altyapı harcamasından rahatsız olmuştu
ve ilk başta verimsizlik ya da israf olduğunu varsayıyordu. Aktif müşteri başına
maliyete dayalı bir birim ekonomisi analizi, toplam harcama artarken birim
maliyetin aslında istikrarlı biçimde düştüğünü gösterdi; çünkü müşteri sayısı
altyapı maliyetinden daha hızlı büyüyordu. Bu, yalnızca toplam harcamaya
bakılarak maskelenmiş gerçek bir verimlilik iyileşmesiydi. Bu yeniden çerçeveleme,
finans konuşmasını "mühendislik neden daha çok harcıyor" sorusundan "bu verimli
ölçeklenmeyi nasıl sürdürürüz" sorusuna kaydırdı; gerçekten sağlıklı, büyümeden
kaynaklanan harcamayı hedef alacak gereksiz ve zarar verebilecek bir maliyet kesme
talimatını önleyen, belirgin biçimde daha verimli bir tartışmaydı.

**Kamu.** Bir eyalet hükümetinin dijital hizmetler kurumundan, bir bütçe
komitesine sürdürülen bulut altyapı yatırımını gerekçelendirmesi istendi; komite
maliyetleri, yerini aldığı eski şirket içi sistemle karşılaştırıyordu. İşlenen
vatandaş işlemi başına maliyete dayalı bir birim ekonomisi analizi, yeni bulut
tabanlı sistemin birim maliyetinin, nominal toplam harcaması daha yüksek olmasına
rağmen eski sistemin birim maliyetinden belirgin biçimde düşük olduğunu gösterdi;
çünkü yeni sistem aynı ya da daha düşük toplam altyapı bütçesiyle çok daha yüksek
işlem hacmini karşılıyordu. Yorumlaması daha zor bir toplam harcama
karşılaştırması yerine bu birim maliyet karşılaştırması, sürdürülen ve genişleyen
bulut yatırımı için başarılı bir davanın merkezî kanıtı oldu.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Titiz birim ekonomisinin getirisi, her finans paydaşının eninde sonunda sorduğu
soruya savunulabilir, yorumlanabilir bir yanıttır: bu harcama verimli mi ve
sürdürülebilir biçimde ölçekleniyor mu? Yukarıdaki kurumsal örnek, bunu yanlış
yapmanın riskini gösterir: yalnızca toplam harcamaya bakan bir görünüm, birim
bazında daha verimli hâle gelen, daha az verimli değil, harcamaya karşı
gereksiz ve ters etki yaratan bir maliyet kesme talimatını neredeyse tetikliyordu.

Toplam sahip olma maliyeti, maliyet atfı araçlarını (FinOps etiketleme pratikleri)
ve maliyet bileşenlerini ayırmaya ve birim eğilimlerini zaman içinde izlemeye
yönelik analitik disiplini içerir. Bu yatırım, yetersiz bilgilendirilmiş bir
toplam maliyet görünümüne dayanarak önemli bir bütçe kararı vermenin, aslında
verimli olan harcamayı kesmenin ya da gerçekten verimsizleşen harcamayı
yakalayamamanın riskine kıyasla mütevazıdır.

## Anti-desenler ve tuzaklar

- **Paydasız toplam maliyet raporlamak:** yorumlanamaz ve maliyetin verimli mi
  verimsiz mi ölçeklendiğini gizler.
- **Maliyet hesabı için kolayca manipüle edilebilir ya da keyfi bir birim seçmek:**
  bilgilendirmek yerine pohpohlayan bir oran üretir.
- **İnsan, altyapı ve araç maliyetini tek bir sayıda karıştırmak:** hangi belirli
  sürücünün gerçekte değiştiğini ve hangi kolun buna yanıt verdiğini gizler.
- **Bulut maliyet atfının olmaması (FinOps etiketlemesi):** altyapı harcamasını
  ekip ya da hizmet düzeyinde fiilen yönetilmemiş ve hesap verilemez bırakır.
- **Birim eğilimine bakmadan bir toplam maliyet değişikliğine tepki vermek:**
  gerçekten verimli, büyümeden kaynaklanan harcamayı hedef alan gereksiz bir
  maliyet kesme talimatını tetikleyebilir.
- **Maliyet eğilimlerini teknik borç ya da karmaşıklık verisine hiç bağlamamak:**
  borç iyileştirme yatırımı için nicelleştirilmiş, güçlenmiş bir gerekçeyi kaçırır.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Mühendislik maliyeti yalnızca anlaşılmaz bir
  toplam olarak raporlanır; birim ekonomisi ya da bileşen ayrımı yoktur.
- **Düzey 2, Gelişim (Develop):** Bir miktar maliyet dökümü vardır, ama birim
  ekonomisi tutarsızdır ve bulut maliyet atfı büyük ölçüde yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** İyi seçilmiş paydalı birim
  ekonomisi, maliyet kuruluş genelinde insan, altyapı ve araç bileşenlerine
  ayrılarak tutarlı biçimde izlenir.
- **Düzey 4, Yönetim (Manage):** FinOps atfı ve gözden geçirme pratikleri
  yerleşiktir; birim maliyet eğilimleri aktif olarak araştırılır ve teknik borç
  ile kalite sinyallerine bağlanır.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluş, finans paydaşlarının ayrıntılı
  birim maliyet sorularını güvenle yanıtlayabilir; maliyet verisi hem mühendislik
  yatırım kararlarını hem de en üst düzeyde bütçe gerekçelendirmesini doğrudan
  bilgilendirir.

## Tartışma önerileri

1. Maliyet eğilimimizi gerçekten yorumlanabilir kılacak birim nedir ve onu izliyor muyuz?
2. Yakın tarihli bir maliyet değişikliğini insan, altyapı ve araç bileşenlerine ayırabilir miydik?
3. Altyapı harcamamızın herhangi bir kısmı şu anda belirli bir ekibe ya da hizmete atfedilmemiş durumda mı?
4. Birim maliyet eğilimimiz yakın zamanda hareket etti mi ve nedenini biliyor muyuz?
5. Yükselen birim maliyet nerede ele alınmamış teknik borcun belirtisi olabilir?

## Temel çıkarımlar

- **Birim ekonomisi**, yani anlamlı değer birimi başına maliyet, anlaşılmaz bir
  toplam maliyet sayısını yorumlanabilir, eyleme geçirilebilir bir eğilime dönüştürür.
- **Gerçek iş ya da misyon değerini** yansıtan bir birim seçin; kolayca manipüle
  edilebilir ya da keyfi bir paydadan kaçının.
- Maliyeti **insan, altyapı ve araç** bileşenlerine ayırın; her birinin farklı bir
  sürücüsü ve farklı bir kolu vardır.
- Özellikle bulut altyapı maliyetine, atıf etiketlemesi ve düzenli gözden geçirme
  dahil, **FinOps disiplinini** uygulayın.
- Düşen bir toplam maliyet **otomatik olarak iyi**, yükselen bir toplam maliyet
  **otomatik olarak kötü değildir**; yanında birim eğilime bakmadan.

## Kaynaklar ve ileri okuma

- *Cloud FinOps*, J.R. Storment ve Mike Fuller (bulut maliyet yönetimi için
  FinOps pratikleri üzerine temel metin).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (teslimat verimliliği ile maliyet arasındaki ilişki).
- *Site Reliability Engineering*, Betsy Beyer, Chris Jones, Jennifer
  Petoff ve Niall Richard Murphy (ed.) (maliyetin açık bir güvenilirlik
  mühendisliği ödünleşimi olarak ele alınması).
- FinOps Foundation'ın FinOps Framework'ü, [finops.org](https://www.finops.org/)
  (bulut mali yönetimi için uygulayıcı rehberliği ve olgunluk modeli).
