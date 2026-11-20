# 7.2 Yapay zeka destekli yazılım geliştirmeyi ölçmek

## Genel bakış ve motivasyon

Konu 7.1, yapay zeka destekli geliştirmede birkaç mevcut metriğin neden artık
eskisi gibi güvenilir biçimde ölçüm yapmadığını ortaya koydu. Bu konu ise onların
yerine neyi ölçeceğinizle ilgilidir: yapay zeka kodlama desteğinin kuruluşunuza
gerçekten yardımcı olup olmadığını ve ne kadar yardımcı olduğunu, izlenim ya da
satıcı pazarlaması yerine gerçek kanıtla nasıl bileceğinizi. Bu, gerçek bütçe
sonuçları olan, gerçekten önemli bir sorudur. Yapay zeka araç lisansları gerçek
ve sürekli bir maliyettir, konu 5.4'ün birim ekonomisi disiplini doğrudan
uygulanır; bu soruya kanıtla yanıt veremeyen bir kuruluş ya yardımcı olmayan bir
araca fazla ödüyordur ya da gerçekten yardımcı olan bir araca az yatırım
yapıyordur.

Bu konunun yaklaşımı, konu 1.3'ün çıktı yerine sonuç ilkesinden doğrudan
beslenir ve burada özellikle yapay zeka araç değerlendirmesine uygulanır. Naif ve
en yaygın yaklaşım, yapay zeka destekli geliştirmeyi çıktı hacmiyle ölçer:
üretilen kod satırları, kabul edilen öneriler, geliştiricilerin kendi bildirdiği
görev başına kazanılan zaman. Bunlar tam olarak konu 7.1'in bu değişime en çok
açık olduğu konusunda uyardığı metriklerdir. Bu konunun önerdiği daha titiz
yaklaşım sonuçları ölçer: yapay zeka desteği kaliteyi bozmadan cycle time'ı
gerçekten azalttı mı, gerçekten düşük değerli, tekrarlayan işe harcanan zamanı
azaltarak daha yüksek değerli iş için kapasite açtı mı ve Bölüm 5'teki iş ve
ürün sonuçlarını ölçülebilir biçimde etkiledi mi.

Büyük ekipler için bu ölçümü doğru yapmak, yapay zeka araç yatırım kararlarının
kanıta mı yoksa satıcı iddialarına ve kurumsal ivmeye mi dayandığını belirler.
Büyük ölçekli yapay zeka araç sözleşmeleri müzakere eden kurumsal kuruluşların,
harcamayı haklı çıkarmak ve rakip araçları adil biçimde karşılaştırmak için
gerçek değer kanıtına ihtiyacı vardır. Teknoloji harcamalarında çoğu kez özel
bir mercek altında olan kamu kuruluşlarının, yapay zeka aracı benimsemesine kamu
fonu ayırmadan önce titiz ve savunulabilir bir değerlendirme yöntemine ihtiyacı
vardır.

## Temel ilkeler

- **Yapay zeka desteğini çıktı hacmiyle ya da satıcının bildirdiği kullanım
  istatistikleriyle değil, sonuçla ölçün.** Konu 1.3'ün disiplini burada tüm
  gücüyle geçerlidir.
- **Mümkün olan her yerde gerçek bir [karşılaştırma grubu](https://en.wikipedia.org/wiki/Treatment_and_control_groups)
  kullanın;** sektör genelinde yükselen bir taban çizgisinin karıştırabileceği
  salt öncesi ve sonrası karşılaştırmasıyla yetinmeyin.
- **Kendi bildirilen zaman tasarrufu tek başına zayıf bir sinyaldir.** Bunu
  nesnel cycle time ve kalite verileriyle eşleyin.
- **Yalnızca üretim hızını değil, inceleme ve düzeltme süresi dahil tam maliyeti
  ölçün.**
- **Farklı görevler ve farklı mühendisler, yapay zeka desteğinden çok farklı
  değer görebilir.** Bu çeşitliliği gizleyen tek bir harmanlanmış kuruluş çapında
  sayıdan kaçının.

## Öneriler

### Yalnızca öncesi ve sonrası anlık görüntüsü değil, gerçek bir karşılaştırma kurun

Mümkün olduğunda, yapay zeka desteği kullanan bir grup ile aynı dönemde onu
kullanmayan karşılaştırılabilir bir grup arasında sonuçları karşılaştırın; yalnızca
kendi kuruluşunuzun öncesi ve sonrası sayılarını karşılaştırmayın, çünkü bunlar
yapay zeka desteğinin etkisini aynı anda gerçekleşen herhangi bir başka
değişiklikten ayıramaz (konu 1.6'nın karıştırıcı değişken uyarısı doğrudan
geçerlidir). Gerçek bir karşılaştırma grubu pratik değilse, en azından ortalamaya
dönüşe ya da ilgisiz eşzamanlı değişikliklere açık tek bir öncesi ve sonrası
anlık görüntüsü yerine daha uzun bir tarihsel taban çizgisiyle (konu 1.6'ya göre
bir kontrol grafiği) karşılaştırın.

### Cycle time ve kaliteyi birlikte ölçün, asla yapay zekanın yalnızca hız iddiasını değil

Konu 2.6'nın ve konu 2.10'un disiplinini doğrudan uygulayın: yapay zeka destekli
işin cycle time aşamalarından daha hızlı geçip geçmediğini ve aynı anda o iş için
değişim başarısızlık oranının ya da kaçan hata oranının (konu 5.1) yanlış yönde
hareket edip etmediğini izleyin. Gerçek bir verimlilik kazanımı, kararlı ya da
iyileşen kaliteyle daha hızlı cycle time gösterir; sahte bir kazanım ise bozulan
kaliteyle daha hızlı cycle time gösterir, tam olarak konu 7.1'in uyardığı takas.
Burada, bu kitabın baştan sona uyguladığı aynı eşlenmiş metrik disipliniyle
keşfedilir.

### Tam maliyet hesabına inceleme ve düzeltme süresini dahil edin

Üretimi daha hızlı ama incelemesi daha yavaş olan ya da ilk üretimden sonra daha
fazla düzeltme ve yeniden iş gerektiren yapay zeka üretimi kod, ilk kod üretme
adımı bireysel mühendise çarpıcı biçimde daha hızlı hissettirse bile, tüm hat
ölçüldüğünde net bir cycle time iyileşmesi göstermeyebilir. Bunu dürüstçe
yakalamak için, hissedilen ama eksik bir hız duygusuna dayanarak yapay zeka
desteğine kredi vermek yerine, yalnızca kodlama aşamasını değil tam cycle time
zincirini (konu 2.6) ölçün.

### Kendi bildirilen zaman tasarrufunu bir sonuç değil, başlangıç hipotezi olarak ele alın

Geliştiricinin "bu bana bir saat kazandırdı" şeklindeki bildirimi, ilk sinyal ve
nitel bağlam olarak yararlıdır (konu 5.3'ün birleşik nicel-nitel yaklaşımı burada
da geçerlidir); ancak konu 1.5'in her kendi bildirilen veri için uyardığı aynı
hatırlama ve beğenilirlik yanlılıklarına tabidir ve sonraki inceleme ya da
düzeltme maliyeti hakkında hiçbir şey söylemez. Kendi bildirimini, yapay zeka
desteğinin en çok nerede yardımcı olduğuna dair hipotez üretmek için kullanın,
sonra kesin bir sonuca varmadan önce bu hipotezleri nesnel cycle time ve kalite
verileriyle doğrulayın.

### Ölçümü görev türüne göre bölün ve tek bir harmanlanmış sayıdan kaçının

Yapay zeka kodlama desteği, kalıp, iyi anlaşılmış görevler için gerçekten yeni,
karmaşık problem çözmeden çok farklı değer sağlar. Bir kategoride güçlü değer
sağlarken başka birinde çok az, hatta olumsuz değer sağladığı gerçeğini gizleyebilen
tek bir harmanlanmış kuruluş çapında ortalama yerine, görev kategorisine göre ölçün
ve raporlayın; harmanlanmış bir sayı bu bilgiyi tamamen gizlerdi.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yalnızca kendi bildirilen zaman tasarrufu | Hızlı, toplaması kolay | Zayıf sinyal; yanlılığa tabi; sonraki inceleme maliyetini yok sayar |
| Yalnızca öncesi ve sonrası karşılaştırması | Kurması basit | Aynı anda gerçekleşen herhangi bir başka değişiklik ya da sektör geneli eğilim tarafından karıştırılır |
| Gerçek karşılaştırma grubu | En güçlü, en savunulabilir kanıt | Düzenlemesi daha zor; tam benimseme yaygınlaştırmasında mümkün olmayabilir |
| Göreve göre bölünmüş sonuç ölçümü | Değerin gerçekten nerede yoğunlaştığını gösterir | Daha ayrıntılı izleme ve sınıflandırma çabası gerektirir |

Merkezi gerilim, **ölçüm titizliği ile pratik uygulanabilirlik** arasındadır.
Gerçek, kontrollü bir karşılaştırma grubu en güçlü kanıttır, ama bir araç
kuruluş genelinde, geride tutulmuş bir kontrol grubu olmadan yaygınlaştırıldığında
çoğu kez pratik değildir; kendi bildirilen izlenimler hızlı ve kolaydır ama tek
başına zayıftır. Gerilimi, gerçek yaygınlaştırmanızın izin verdiği en güçlü
karşılaştırma tasarımını kullanarak çözün: mümkünse erken pilot aşamasında gerçek
bir kontrol grubu, değilse tarihsel taban çizgisi kontrol grafiği; hangi
karşılaştırma tasarımını kullanırsanız kullanın, kendi bildirimini nihai söz
olarak değil hipotez üretme aracı olarak görün.

## Ekibinizle tartışılacak sorular

1. **Yapay zeka araç benimsememizi değerlendirmek için gerçek bir karşılaştırma
   grubumuz var mıydı ya da hâlâ oluşturabilir miyiz, yoksa tamamen öncesi ve
   sonrası karşılaştırmasına mı güveniyoruz?** Gerçek bir karşılaştırma grubu hiç
   kurulmadıysa, tarihsel taban çizgisi kontrol grafiğinin yine de makul ölçüde
   titiz bir alternatif sağlayıp sağlayamayacağını tartışın.

2. **Yapay zeka destekli iş için cycle time ve kaliteyi birlikte ölçtük mü, yoksa
   yalnızca ilgili bir kalite kontrolü olmayan bir hız iddiamız mı var?** Mevcut
   olan verileri çekin ve bu özel eşlemeyi kontrol edin; yoksa bu açık, bu konunun
   en öncelikli düzeltmesidir.

3. **Yapay zeka destekli iş için cycle time ölçümümüz inceleme ve düzeltme süresini
   içeriyor mu, yoksa yalnızca ilk üretim adımını mı?** Yalnızca üretim süresine
   dayanan, sonraki inceleme maliyetini yok sayan bir hız iddiası, bu konunun
   doğrudan uyardığı eksik hesap tuzağına düşme riski taşır.

4. **Hangi kendi bildirilen zaman tasarrufu iddialarını topladık ve herhangi birini
   nesnel verilerle doğruladık mı?** Sık tekrarlanan belirli bir iddiayı seçin ve
   nesnel verilerin onu gerçekten destekleyip desteklemediğini kontrol edin.

5. **Mevcut ölçümümüz tüm görev türlerini tek bir sayıda mı harmanlıyor, yoksa hangi
   belirli iş kategorilerinin yapay zeka desteğinden en güçlü değeri gördüğünü
   biliyor muyuz?** Harmanlanmışsa, göreve göre bölünmüş bir dökümün mevcut sayının
   gizlediği neyi ortaya çıkarabileceğini tartışın.

6. **Bugün, şüpheci bir mali paydaşa yapay zeka araç yatırımımızı izlenimle değil
   kanıtla savunmak zorunda kalsaydık, ona gerçekte ne gösterebilirdik?** Bu somut
   test, kuruluşunuzun şu anda yapay zeka desteğinin değeri hakkında inandığı ile
   kanıtla gerçekten gösterebildiği arasındaki açığı ortaya çıkarır.

## Sektörel bakış

**Startup.** Küçük ölçekte biçimsel bir karşılaştırma grubu çalışması genellikle
pratik değildir; ama işin ne kadar hızlı hissettirdiğine tamamen güvenmek yerine,
cycle time ve hata oranına basit ve dürüst bir öncesi ve sonrası bakışı bile
tek başına izlenimden anlamlı ölçüde daha güvenilir bir sinyal verir.

**Küçük işletme.** Ölçüm çabanızı önce en yüksek değerli, en tekrarlayan görev
kategorisine odaklayın; yapay zeka desteğinin değerinin en açık ve ölçülebilir
olması en olası olduğu yer burasıdır. Küçük ekibinizin yaptığı her iş türü
üzerinde kapsamlı bir değerlendirme denemeyin.

**Kurumsal.** Tam kuruluş çapında yaygınlaştırmadan önce erken pilot aşamasında
gerçek, kontrollü bir karşılaştırma burada genellikle mümkündür ve düzenlemek için
bilinçli çabaya değer; çünkü başarılı bir pilotu tipik olarak izleyen büyük
ölçekli araç yatırım kararı için çok daha savunulabilir kanıt üretir.

**Kamu.** Yapay zeka aracı satın alma dahil kamu teknoloji harcaması kararları
çoğu kez özel bir mercek altındadır ve biçimsel maliyet-fayda gerekçesi
gerektirebilir (konu 5.5). Bu konunun önerdiği ölçüm disiplinini baştan her pilot
aşamaya yerleştirin; çünkü titiz, belgelenmiş bir değerlendirme yöntemi sonunda
fonlama ya da satın alma gerekçesini önemli ölçüde güçlendirir.

## Örnekler

**Kurumsal.** Bir yazılım şirketi, bir yapay zeka kodlama asistanını mühendislik
ekiplerinin yarısına bilinçli bir pilot olarak sundu; diğer yarıyı tam
yaygınlaştırmadan önce bir çeyrek boyunca karşılaştırma grubu olarak tuttu.
Pilot grup, iyi tanımlanmış, kalıp ağırlıklı görevlerde gerçek, istatistiksel
olarak anlamlı bir cycle time iyileşmesi gösterdi; ancak karmaşık, yeni mimari
işte ölçülebilir bir iyileşme göstermedi ve inceleme iterasyon sayısı (konu 2.9)
hafifçe yüksekti. Yalnızca gerçek karşılaştırma tasarımı ve görev kategorisi
dökümü sayesinde görülebilen bu göreve göre bölünmüş bulgu, şirketi yapay zeka
desteği yaygınlaştırma mesajlarını ve eğitimini, tüm işte tek tip bir verimlilik
artışı olarak sunmak yerine, açıkça yardımcı olduğu görev kategorilerine
yöneltmeye götürdü.

**Kamu.** Modernizasyon programı ekiplerinden bir alt kümede yapay zeka kodlama
desteğini pilot olarak deneyen bir federal kurum, başlangıçta kendi bildirilen
zaman tasarrufu anketlerine güvendi; bunlar coşkulu, tek tip olumlu yanıtlar
gösterdi. Benzer sistem bileşenleri üzerinde çalışan pilot ekipleri ile
karşılaştırılabilir pilot dışı bir grup arasında cycle time ve kaçan hata oranını
karşılaştıran takip niteliğindeki nesnel bir analiz, nesnel cycle time
iyileşmesinin gerçek olduğunu, ancak kendi bildirilen tahminlerin düşündürdüğünden
belirgin biçimde küçük olduğunu buldu; ayrıca üretim hızı kazancının bir kısmını
dengeleyen ılımlı ama gerçek bir inceleme süresi artışı tespit etti. Bu bulguyu
kendi bildirilen veriler tek başına tamamen kaçırmıştı. Bu daha doğru, kanıta
dayalı tablo, aracın sürekli ve genişletilmiş satın alınması için daha mütevazı ve
daha savunulabilir bir iş gerekçesini doğrudan şekillendirdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Yapay zeka destekli geliştirmeyi titizlikle ölçmenin getirisi, güvenli, kanıta
dayalı yatırım kararlarıdır: yapay zeka desteğinin gerçekten nerede yardımcı
olduğunu tam olarak bilen bir kuruluş, orada genişletmeye yatırım yapabilir ve az
değer sağladığı görev kategorilerinde lisanslara fazla ödemekten kaçınabilir; yukarıdaki
yazılım şirketi örneğinin gösterdiği tam olarak görev bölümleme kavrayışıdır. Bu,
konu 5.4'ün birim ekonomisine ve konu 5.5'in ROI disiplinine doğrudan bağlanır;
çünkü çoğunlukla koltuk başına lisanslanan yapay zeka araç maliyeti, bu kitabın
herhangi bir başka büyük mühendislik yatırımına uyguladığı aynı titiz maliyet-fayda
işlemini gerektirir.

Toplam sahip olma maliyeti; gerçek karşılaştırmalar kurma, inceleme ve düzeltme
dahil tam cycle time'ı ölçme ve görev türüne göre bölme analitik çabasıdır; bu,
satıcının bildirdiği kullanım istatistiklerini ya da kendi bildirilen izlenimleri
olduğu gibi kabul etmekten daha fazla iştir. Bu çaba, büyük bir kuruluşta yapay
zeka araç lisans maliyetinin ölçeği ve veriye değil izlenime dayanan, zayıf
kanıtlı, pahalı, kuruluş çapında bir taahhüdün riski tarafından doğrudan haklı
çıkarılır.

## Anti-desenler ve tuzaklar

- **Yapay zeka desteğini yalnızca çıktı hacmiyle ya da satıcı kullanım
  istatistikleriyle ölçmek:** konu 7.1'in merkezi uyarısını doğrudan tekrarlar.
- **Tamamen kendi bildirilen zaman tasarrufuna güvenmek:** yanlılığa açık ve sonraki
  inceleme ile düzeltme maliyetine kör, zayıf bir sinyal.
- **Yalnızca üretim hızı adımını ölçüp tam cycle time'ı yok saymak:** gerçek
  verimlilik etkisinin eksik, potansiyel olarak yanıltıcı bir hesabını üretir.
- **Tek bir harmanlanmış kuruluş çapında sayı raporlamak:** farklı görev
  kategorilerindeki değerin gerçek çeşitliliğini gizler.
- **Karşılaştırma grubu ya da tarihsel taban çizgisi olmaması:** yapay zeka
  desteğinin gerçek etkisini aynı anda gerçekleşen herhangi bir başka değişiklikten
  ayıramaz.
- **Coşkulu bir kendi bildirilen anket sonucunu büyük ölçekli bir yatırım kararı
  için yeterli kanıt saymak:** yukarıdaki federal kurum örneğinin, ancak daha titiz
  bir karşılaştırma kurduktan sonra keşfettiği açığı riske atar.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Yapay zeka destekli geliştirmenin değeri, eğer
  değerlendiriliyorsa, yalnızca kendi bildirilen izlenim ve satıcı kullanım
  istatistikleriyle değerlendirilir.
- **Seviye 2, Geliştirme:** Bir miktar cycle time ya da kalite verisi vardır, ama
  gerçek bir karşılaştırma grubu ya da tarihsel taban çizgisi ve göreve göre
  bölünmüş analiz yoktur.
- **Seviye 3, Standartlaştırma:** Eşlenmiş cycle time ve kalite ölçümüyle gerçek bir
  karşılaştırma tasarımı (kontrol grubu ya da tarihsel taban çizgisi), görev türüne
  göre bölünmüş olarak tutarlı biçimde uygulanır.
- **Seviye 4, Yönetme:** İnceleme ve düzeltme süresi dahil tam cycle time hesabı
  izlenir; kendi bildirilen iddialar nesnel verilere karşı sistematik olarak
  doğrulanır.
- **Seviye 5, Orkestrasyon:** Kuruluş, yapay zeka desteğinin tam olarak nerede
  gerçekten yardımcı olduğuna dair olgun, kanıta dayalı bir anlayışa sahiptir ve
  bu anlayış hedefli yaygınlaştırmayı, eğitim yatırımını ve gösterilmiş, savunulabilir
  ROI ile satın alma kararlarını bilgilendirir.

## Tartışma önerileri

1. Mevcut yapay zeka araç benimsememiz için, varsa, hangi gerçek karşılaştırmaya sahibiz?
2. Cycle time ve kaliteyi birlikte mi ölçtük, yoksa yalnızca bir hız iddiasını mı?
3. Hangi kendi bildirilen yapay zeka desteği iddiasını nesnel verilerle doğrulamalıyız?
4. Hangi belirli görev kategorisi bizim için gerçek yapay zeka desteği değerinin en güçlü kanıtını gösteriyor?
5. Yapay zeka araç yatırımımızı bugün şüpheci bir mali paydaşa kanıtla savunabilir miydik?

## Temel çıkarımlar

- Yapay zeka destekli geliştirmeyi çıktı hacmiyle ya da satıcının bildirdiği
  kullanım istatistikleriyle değil, **sonuçla** ölçün.
- Karıştırıcılara açık salt öncesi ve sonrası anlık görüntüsü yerine **gerçek bir
  karşılaştırma grubu ya da tarihsel taban çizgisi** kullanın.
- **Cycle time ve kaliteyi birlikte** ölçün; yalnızca üretim hızını değil, tüm
  hattı, inceleme ve düzeltme süresini dahil edin.
- **Kendi bildirilen zaman tasarrufunu bir hipotez** olarak ele alın, sonuç olarak
  değil, ve nesnel verilerle doğrulayın.
- **Görev türüne göre bölün;** tek bir harmanlanmış sayı değerin gerçekten nerede
  yoğunlaştığını ve nerede yoğunlaşmadığını gizler.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu konunun yapay zeka araç değerlendirmesine uyguladığı
  sonuç ölçümü disiplini).
- GitHub'ın yapay zeka ile eşli programlama ve geliştirici verimliliği üzerine
  araştırması (yapay zeka destekli geliştirme sonuçları üzerine sektör ölçeğinde
  ampirik araştırma).
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck ve Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021) (bu konunun yeni bir araç kategorisine
  uyguladığı çok boyutlu ölçüm disiplini).
- *How to Measure Anything*, Douglas W. Hubbard (savunulabilir karşılaştırmalar
  kurmak ve gerçek belirsizlik altında değeri nicelleştirmek).
