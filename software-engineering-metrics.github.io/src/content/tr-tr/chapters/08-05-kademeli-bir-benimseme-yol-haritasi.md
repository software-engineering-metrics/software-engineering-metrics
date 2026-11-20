# 8.5 Kademeli bir benimseme yol haritası

## Genel bakış ve motivasyon

Bu konu, 8. bölümü ve kitabın esas içeriğini, buraya kadar gelen her okuyucunun
büyük olasılıkla sorduğu soruyla kapatır: kitabın kapsadığı her şey göz önünde
bulundurulduğunda (teslimat, geliştirici deneyimi, kod kalitesi, iş sonuçları,
güvenilirlik, güvenlik ve yapay zeka çağındaki dönüşümü kapsayan kırk beş
konu), bir kurum gerçekte nereden başlar. Bu konunun verdiği dürüst yanıt şudur:
her yerden aynı anda değil. Kitabın tüm kapsamının bir [büyük patlama](https://en.wikipedia.org/wiki/Big_bang_adoption)
usulü, hepsi bir anda denenen devreye alınışı, konu 8.3'ün temel rehberliğini
doğrudan ihlal eder; çünkü bir gecede başlatılan kapsamlı, geniş bir metrik
programı, güven yerine korku ve manipülasyon doğuran türden bir değişikliğin
tam kendisidir.

Bu konu bunun yerine, kitabın boyunca tekrarlanan basit ve tutarlı bir ilke
üzerine kurulu somut, aşamalı bir sıra sunar: temellerle başlayın, dar bir
kapsamda değer kanıtlayın, sonra bilinçli olarak genişletin; konu 1.4 ve 8.3'te
ele alınan yönetişim ve kültürel güven çalışmasını, doğrudan sofistike, kapsamlı
metriklere atlamak uğruna asla atlamayın. Bu sıralama keyfî değildir; kitabın
kendi bölümlerinin kurduğu bağımlılık yapısını izler: 1. bölümün temelleri
gerçekten ilk gelmelidir, çünkü sonraki her bölüm, konu 1.1'den konu 1.6'ya
kadar kurulan yönetişimi, sonuç odaklılığı ve istatistiksel okuryazarlığı
varsayar.

Büyük ekipler için aşamalı bir yol haritası, kitabın tam kapsamını bunaltıcı
olmaktan çıkarıp ulaşılabilir kılan şeydir. Kurumsal şirketler bu konunun
sıralamasını, gerçekçi kilometre taşlarıyla gerçekten çok çeyrekli ya da çok
yıllı bir metrik programı devreye alma planlamak için kullanabilir; metrik
yatırımını bir bütçe ya da denetim sürecine tek büyük bir talep olarak değil,
kademeli olarak gerekçelendirmesi gereken kamu kuruluşları ise bu konunun
aşamalarını, değeri göstermek ve yatırımın sürmesini talep etmek için doğal
denetim noktaları olarak kullanabilir.

## Temel ilkeler

- **Her zaman önce temeller.** Yönetişim (konu 1.4), sonuç odaklılık (konu 1.3)
  ve kültürel güven kurma (konu 8.3), doğrudan sofistike metriklere atlamak
  uğruna atlanamaz.
- **Genişletmeden önce dar bir kapsamda değer kanıtlayın.** İyi yapılmış ve
  güvenilen tek bir ekip ya da tek bir metrik ailesi, kötü yapılmış kapsamlı
  bir devreye almadan daha güçlü bir temeldir.
- **Algılanan öneme göre değil, bağımlılığa göre sıralayın.** Bu kitaptaki
  bazı metrik aileleri, başka konuların önce kurduğu zemin çalışmasına bağlıdır.
- **Her aşama, bir sonraki aşamaya yatırımın sürmesini haklı kılan,
  gösterilebilir, raporlanabilir bir sonuç üretmelidir.**
- **Bu, katı, evrensel bir reçete değil, uyarlanacak bir yol haritasıdır.**
  Kurumunuzun özel başlangıç noktası ve öncelikleri gerçek hızı şekillendirmelidir.

## Öneriler

### Aşama 1: Temeller ve yönetişim (1. bölüm)

Tek bir metrik ailesini enstrümante etmeden önce, konu 1.4'ün anlattığı
yönetişim disiplinini kurun: bir metrik tüzüğü şablonu, açık bir tanılayıcı
ile değerlendirici politikası (konu 1.1) ve veriyi yorumlayacak herkesle
paylaşılan, konu 1.6'daki istatistiksel okuryazarlık temelleri. Bu aşama henüz
hiçbir pano üretmez; sonraki her aşamanın dayandığı kurumsal zemin çalışmasını
üretir. Daha hızlı ilerlemek için bu aşamayı atlamak, bu kitabın rehberliğinin
pratikte baltalanmasının en yaygın yoludur; çünkü sonraki her metrik, bu
aşamanın kurduğu yönetişim kalitesini ya da eksikliğini miras alır.

### Aşama 2: Tek bir pilot ekip, DORA metrikleri, yalnızca tanılayıcı (2. bölüm)

Tek bir ekip seçin; zorunlu tutulmuş bir ekip yerine, ideal olarak istekli,
ilgili bir ekip ve 2. bölümdeki DORA metriklerini, kendi bildirimi yerine
otomatik enstrümantasyonla (konu 1.5), konu 8.3'ün güven kurma rehberliğini
doğrudan izleyerek salt tanılayıcı kipte enstrümante edin. Genişletmeden önce
bunu en az bir tam çeyrek yürütün ve daha geniş ölçekte herhangi birine
bağlanmadan önce, yönetişim tüzüğü şablonunuz ile pano tasarım yaklaşımınız
(konu 8.1) için bir kanıtlama alanı olarak kullanın.

### Aşama 3: Teslimat metriklerini kurum genelinde genişletin, geliştirici deneyimini ekleyin (2., 3. bölümler)

Pilot gerçek değer göstermiş ve en önemlisi güveni sürdürmüşse (kötüye
kullanım olayı yok ya da konu 8.3'ün rehberliğine göre iyi yönetilen bir
olay), DORA enstrümantasyonunu ek ekiplere genişletin ve kurum genelinde ilk
geliştirici deneyimi anketini (konu 3.7) başlatın. Tanılayıcı ile değerlendirici
disiplini burada ölçekte ilk gerçek sınavıyla karşılaşır ve bunu burada dikkatle
sürdürmek, sonrasında gelen her şeyin tonunu belirler.

### Aşama 4: Kod kalitesi ve sonuç metrikleri (4., 5. bölümler)

Teslimat ve geliştirici deneyimi temelleri kurulup güven kazandığında, 4.
bölümdeki kod kalitesi metriklerini ekleyin; en yüksek kaldıraçlı başlangıç
noktaları olarak sıcak nokta analizine (konu 4.3) ve teknik borç takibine
(konu 4.5) öncelik verin ve konu 7.4'ün nihayetinde programınızın ağırlık
merkezi olması gerektiğini savunduğu sonuç telemetrisi altyapısını kurmaya
başlayın; enstrümante edilmesi en kolay sonuç metrikleri olarak önce kaçan
kusur oranından (konu 5.1) ve özellik benimsenmesinden (konu 5.2) başlayın.

### Aşama 5: Güvenilirlik, güvenlik ve yapay zeka çağı yeniden ayarı (6., 7. bölümler)

En kritik hizmetleriniz için resmî SLO'ları ve hata bütçelerini (konu 6.1)
kurun, suçlamasız olay metrikleri pratiğini (konu 6.2) oluşturun ve kurumunuz
yapay zeka destekli geliştirme araçlarını benimsediyse ya da benimsiyorsa
konu 7.1'in önerdiği yapay zeka çağı metrik denetimini yapın. Güvenilirlik ve
güvenlik işinin çoğunlukla kendi bağımsız aciliyeti olduğundan, bu aşama sıklıkla
tamamen sıralı değil, Aşama 4 ile kısmen paralel yürür.

### Süregelen: birleşik olgunluk değerlendirmesi ve sürekli yatırım

Çekirdek aşamalar kurulduktan sonra, konu 8.4'ün birleşik olgunluk
değerlendirmesini yinelenen, yıllık bir pratik olarak benimseyin; yol
haritasını, her aşamaya teknik olarak dokunulduğunda tamamlanmış saymak yerine
bulgularını süregelen yatırımı yönlendirmek için kullanın. Metrik programı,
tanımlı bir bitiş tarihi olan bir proje değil, sürdürülen bir kurumsal
yetkinliktir ve bu süregelen aşama bu gerçeği doğrudan yansıtır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Büyük patlama, kapsamlı devreye alma | Baştan hızlı, kapsamlı kapsam | Korku ve manipülasyon doğurma riski yüksek (konu 8.3); kanıtlanmış yönetişim temeli yok |
| Aşamalı devreye alma, önce temeller | Kapsamı genişletmeden önce güven ve yönetişim kurar; her aşama kendini kanıtlar | Tam kapsama ulaşmak daha yavaş; sürdürülen, çok çeyrekli bağlılık gerektirir |
| Aşamalı devreye alma, önce metrikler (yönetişimi atlayarak) | Daha hızlı ilk pano sonuçları | Zayıf yönetişimi sonraki her aşamaya taşır; uzun vadeli risk daha yüksek |
| Yol haritasız, gelişigüzel, fırsatçı benimseme | Esnek, anlık ihtiyaçlara duyarlı | Tutarsız, yönetmesi zor kapsam üretir ve hataları aşama aşama tekrarlar |

Temel gerilim **kapsamlı kapsama hız ile önce temel sıralaması** arasındadır.
Çabuk sonuç gösterme baskısı altındaki kurumlar Aşama 1'in yönetişim işini
atlayıp doğrudan metrikleri enstrümante etmeye kalkışır; ancak bu kitabın
birikimli savı, konu 1.4'ün yönetişim disiplininden konu 8.3'ün güven kurma
rehberliğine kadar, temeli atlamanın daha hızlı ama temelde daha zayıf bir
program ürettiği yönündedir. Gerilimi aşamalı sıralamaya bağlanarak ve temel
henüz taşıyamazken kapsamlı sonuçlar göstermeye çalışmak yerine, yatırımın
sürmesini haklı kılmak için her aşamanın gösterilebilir sonucunu (konu 8.5'in
temel önerisi) kullanarak çözün.

## Ekibinizle tartışılacak sorular

1. **Kurumumuz şu anda, dürüstçe değerlendirildiğinde, bu aşamalı sıranın
   gerçekte neresinde duruyor?** Mevcut durumunuzu beş aşamaya doğrudan
   eşleyin; çoğu kurum, dürüstçe değerlendirildiğinde, önceki temel aşamaları
   gerçekten tamamlamadan sonraki bir aşamadan metrikleri enstrümante etmiş
   olduğunu bulur.

2. **Aşama 1'in yönetişim temelini, doğrudan enstrümantasyona geçmek için
   atladık mı ve atladıysak bunun bize maliyeti ne oldu?** Bu, konu 8.4'ün
   olgunluk değerlendirmesine doğrudan bağlanır; geç keşfedilen zayıf bir
   yönetişim temelini sonradan onarmak pahalıdır.

3. **Henüz bir tane yürütmediysek, bizim için gerçek, istekli bir pilot ekip
   nasıl görünürdü?** Bunu soyut bırakmak yerine belirli, gerçek bir aday ekip
   belirleyin ve onları özellikle neyin iyi bir aday yapacağını tartışın.

4. **Tamamladığımız her aşama gerçekte hangi gösterilebilir sonucu üretti ve
   bunu bir sonraki aşamanın yatırımını haklı kılmak için kullandık mı?**
   Tamamlanmış bir aşamadan belirli, iletilmiş bir sonucu gösteremiyorsanız,
   bu boşluk adlandırmaya değer.

5. **Aşama 4 ve Aşama 5, bizim için uygun biçimde paralel mi yürüyor, yoksa
   biri diğeri uğruna ihmal mi ediliyor?** Kurumunuzun özel risk profilinin,
   daha çok teslimat odaklı ya da daha çok güvenilirlik odaklı olmasının, bu
   paralel sıralamayı bu konunun anlattığı varsayılandan farklı biçimlendirmesi
   gerekip gerekmediğini tartışın.

6. **Konu 8.4'teki süregelen, yinelenen olgunluk değerlendirmesi pratiğini
   kurduk mu, yoksa yol haritamız ilk aşamalar teknik olarak tamamlandığında
   fiilen mi bitiyor?** Bu süregelen aşamadan yoksun bir yol haritası, metrik
   programını bu kitabın olması gerektiğini savunduğu sürdürülen yetkinlik
   yerine, bitmiş bir proje saymak riskini taşır.

## Sektörel bakış

**Startup.** Bu tam, çok aşamalı yol haritası büyük olasılıkla önemli ölçüde
sıkıştırılabilir; çünkü küçük bir kurum, temel yönetişim ve pilot aşamalarından
çeyrekler yerine haftalar içinde geçebilir. Küçük ölçekte bile Aşama 1'i
tümüyle atlamayın; çünkü erken kurulan yönetişim alışkanlıklarını sürdürmek,
kurum büyüdükçe sonradan eklemekten çok daha kolaydır.

**Küçük işletme.** Yol haritasını, bu konunun anlattığı sıradaki her aşamayı
denemek yerine gerçek kapasitenize göre hızlandırın; küçük bir işletme makul
biçimde Aşama 2 ya da 3'ten sonra, teslimat ve geliştirici deneyimi
metrikleriyle durabilir ve 4. ile 6. bölümlerdeki daha sofistike sonuç ve
güvenilirlik işini, kurum bunlara gerçekten ihtiyaç duyacak ve onları
destekleyecek kadar büyüyene dek erteleyebilir.

**Kurumsal.** Bu yol haritasını gerçekçi kilometre taşlarıyla, açıkça çok
çeyrekli ya da çok yıllı bir program olarak planlayın ve tüm kapsamı tek bir iş
gerekçesinde baştan haklı çıkarmaya çalışmak yerine, her aşamanın gösterilebilir
sonucunu üst yönetim sponsorluğunun ve bütçenin sürmesini güvence altına
almak için resmî bir denetim noktası olarak kullanın.

**Kamu.** Bu konunun aşamalarını bütçe ya da denetim kuruluna raporlama için
doğal, kademeli denetim noktaları olarak kullanın; daha çok kuşkuyla ya da
tedarik güçlüğüyle karşılaşabilecek tek büyük bir baştan talep yerine, her
aşama sınırında bir önceki aşamanın gösterilmiş, belgelenmiş sonucuna dayanarak
yatırımın sürmesini talep edin.

## Örnekler

**Kurumsal.** Bir sağlık teknolojisi şirketi bu yol haritasını metrik programının
yapılandırıcı çerçevesi olarak açıkça benimsedi: Aşama 1'in yönetişim temelini
altı haftada tamamladı, bir tam çeyrek boyunca tek ekipli bir DORA pilotu yürüttü
ve ancak ondan sonra, başlangıçtan yaklaşık beş ay sonra, Aşama 3'te tam
kurumsal teslimat metrikleri kapsamına genişledi. Devreye almayı bu biçimde
bilinçli olarak hızlandırarak şirket, konu 8.3'ün daha hızlı, daha disiplinsiz
devreye almaların riski olarak anlattığı korku güdümlü manipülasyon örüntüsünden
kaçındı ve özellikle Aşama 2 pilot ekibi, tanılayıcı-yalnızca taahhüdünün pilot
çeyreği boyunca gerçekten tutulduğunu ilk elden deneyimlediği için, programın
genişlemesinin gayriresmî iç savunucuları oldu.

**Kamu.** Bir eyalet hükümeti teknoloji kurumu, bu konunun aşamalı yapısını
denetim komitesine bütçe taleplerini sıralamak için açıkça kullandı: Aşama 1 ve
Aşama 2 için ilk, mütevazı bir pilot yatırımı olarak fon talep etti, ardından
Aşama 2'nin belgelenmiş sonuçlarıyla (pilot ekip için iyileşen dağıtım
sıklığı ve kararlı değişiklik başarısızlık oranı) komiteye döndü ve bunları
sonraki bütçe döneminde daha büyük bir Aşama 3 ve Aşama 4 fon talebini
destekleyen somut kanıt olarak sundu. Bu kademeli, kanıta dayalı fonlama
yaklaşımı, kurumun tüm metrik programı kapsamı için daha önceki, daha kapsamlı
bir baştan talebin çok büyük ve gösterilmiş sonuçlarla yetersiz gerekçelendirilmiş
diye reddedildiği yerde başarılı oldu.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Aşamalı, önce temeller yol haritasının getirisi, gerçekten çalışan bir metrik
programıdır: güvenilir, iyi yönetilen, kararlar almak için gerçekten kullanılan;
daha hızlı bir devreye almanın üretme riskini taşıdığı kapsamlı görünen ama
korkuyla bozulmuş ya da kötü yönetilen bir program yerine. Yukarıdaki sağlık
teknolojisi örneği bunu doğrudan gösterir: bilinçli hızlandırma, daha hızlı bir
devreye almanın büyük olasılıkla baltalayacağı gerçek güveni ve iç savunuculuğu
üretti.

Toplam sahip olma maliyeti zamandır: bu yol haritası tam kapsama ulaşmak için
gerçekten büyük patlama usulü bir devreye almadan daha uzun sürer. Bu zaman
maliyeti, bu kitabın açılış konularından beri savunduğu güven ve yönetişim
temelinin doğrudan, gerekli bedelidir ve yukarıdaki kamu örneği gerçek, pratik
bir ikincil fayda gösterir: kademeli, kanıta dayalı aşamaları fonlamak ve
gerekçelendirmek, tek, büyük, kanıtlanmamış bir baştan talepten çoğu zaman
daha kolaydır.

## Anti-desenler ve tuzaklar

- **Hepsi bir anda denenen, büyük patlama usulü, kapsamlı devreye alma:** konu
  8.3'ün temel rehberliğini ihlal eder ve baştan korku ve manipülasyon doğurma
  riski taşır.
- **Daha hızlı ilerlemek için Aşama 1'in yönetişim temelini atlamak:** zayıf
  yönetişimi sonraki her aşamaya taşır, sonradan onarmak pahalıdır.
- **Aşama 2 için istekli olmayan ya da zorunlu tutulmuş bir pilot ekip seçmek:**
  gerçek bir pilotun hizmet etmesi gereken güven kurma amacını baltalar.
- **Her aşamadan gösterilebilir bir sonuç üretmemek ya da iletmemek:** bir
  sonraki aşamaya yatırımın sürmesini haklı kılmak için gereken kanıt temelini
  kaybeder.
- **Yol haritasını, her aşamaya teknik olarak dokunulduğunda tamamlanmış saymak:**
  konu 8.4'ün tek seferlik değil kalıcı bir disiplin olarak önerdiği, süregelen
  olgunluk değerlendirme pratiğini kaçırır.
- **Kurumunuzun gerçek risk profilinden bağımsız olarak bu konunun varsayılan
  sıralamasını katı biçimde izlemek:** bu yol haritası uyarlanmalı, muhakemesiz
  mekanik biçimde uygulanmamalıdır.

## Olgunluk modeli

- **Düzey 1, Başlatma:** Yol haritası yoktur; metrik benimseme, varsa, gelişigüzel
  ve sırasızdır.
- **Düzey 2, Geliştirme:** Bazı aşamalar denenmiştir, ancak temel yönetişim işi
  atlanmış ya da eksiktir ve aşama sonuçları sistematik biçimde belgelenmez.
- **Düzey 3, Standartlaştırma:** Bu konunun önce temeller sırasını izleyen aşamalı
  bir yol haritası belgelenmiş ve aktif olarak izlenmektedir; her aşama
  gösterilebilir bir sonuç üretir.
- **Düzey 4, Yönetme:** Aşama sonuçları yatırımın sürmesini haklı kılmak için
  sistematik olarak kullanılır ve yol haritası kurumun özel risk profiline ve
  önceliklerine bilinçli olarak uyarlanır.
- **Düzey 5, Orkestrasyon:** Kurum tüm yol haritasını tamamlamıştır ve konu
  8.4'teki süregelen olgunluk değerlendirmesi pratiğini kalıcı bir yetkinlik
  olarak sürdürür; aşamalı, güven kuran metrik yatırımına dair gösterilmiş,
  çok yıllı bir sicili vardır.

## Tartışma önerileri

1. Kurumumuz bu aşamalı sıranın şu anda gerçekte neresinde duruyor?
2. Temel yönetişim aşamasını atladık ya da kısalttık mı ve bunun bize maliyeti ne oldu?
3. Bir sonraki genişlememiz için gerçek, istekli bir pilot ekip nasıl görünürdü?
4. En son aşamamızın hangi gösterilebilir sonucu bir sonraki yatırım talebimizi haklı kılabilir?
5. Süregelen olgunluk değerlendirmesi pratiğini kurduk mu, yoksa yol haritamız fiilen mi bitiyor?

## Temel çıkarımlar

- Bu kitabın rehberliğini **aşamalar hâlinde, önce temeller** olarak benimseyin;
  korku ve manipülasyon doğurma riski taşıyan büyük patlama usulü bir devreye
  alma olarak asla.
- **Aşama 1 (yönetişim) atlanamaz**; sonraki her aşama bu aşamanın kurduğu
  yönetişim kalitesini miras alır.
- Kapsamı kurum genelinde genişletmeden önce değeri kanıtlamak ve güven kurmak
  için **gerçek, istekli bir pilot ekip** kullanın.
- Her aşama, bir sonraki aşamaya yatırımın sürmesini haklı kılan,
  **gösterilebilir, raporlanabilir bir sonuç** üretmelidir.
- Yol haritasının tamamlanmasını, bitmiş bir proje değil, **süregelen, sürdürülen
  bir pratiğin** (konu 8.4'ün yinelenen olgunluk değerlendirmesi) başlangıcı
  sayın.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu yol haritasının sıraladığı metrik ailelerinin
  kanıt temeli).
- *Leading Change*, John P. Kotter (aşamalı bir metrik programı devreye almaya
  uygulanabilir kurumsal değişim yönetimi ilkeleri).
- *The Lean Startup*, Eric Ries (bu konunun aşamalı, önce değeri kanıtla sonra
  genişlet yaklaşımının dayandığı oluştur-ölç-öğren döngüsü).
- U.S. Government Accountability Office (GAO) performans ölçümü ve GPRA
  Modernization Act rehberliği: kademeli, kanıta dayalı kamu sektörü program
  fonlama pratiği.
