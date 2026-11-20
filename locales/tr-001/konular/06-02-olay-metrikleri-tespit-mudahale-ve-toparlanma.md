# 6.2 Olay metrikleri: tespit, müdahale ve toparlanma

## Genel bakış ve motivasyon

Bu konu, konu 6.1'deki hata bütçesinin gerçek bir arıza yoluyla harcandığında
neler olduğunu ölçer: bir hizmeti bozan ya da kesintiye uğratan, planlanmamış
bir olay olan **olay (incident)**. Bir kurumun bununla ne kadar iyi başa çıktığını
ölçmek için dört metrik standart sözlüğü oluşturur. **Ortalama tespit süresi
(MTTD)**, kurumun bir şeylerin ters gittiğini fark etmesinin ne kadar sürdüğünü
gösterir. **Ortalama kabul süresi (MTTA)**, birinin müdahaleyi sahiplenmesinin ne
kadar sürdüğünü gösterir. **Ortalama çözüm** ya da **kurtarma süresi (MTTR)**,
hizmetin geri gelmesine kadar geçen süredir; konu 2.10'un özellikle dağıtımdan
kaynaklanan arızalar için ele aldığı kavramın aynısıdır, burada nedeni ne olursa
olsun her olaya genelleştirilmiştir. **Olay sıklığı** ise olayların hiç olsun
olmasın ne kadar sık yaşandığıdır.

Bu konunun temel kaygısı, konu 2.10'daki değişiklik başarısızlık oranı
yaklaşımını yineleyerek şudur: bu sayılar, olayları dürüstçe bildirmeye ve
sınıflandırmaya dair kurumsal kültür kadar güvenilirdir. Bir olay yüzünden
suçlanmaktan korkan bir ekibin eksik bildirmek, "mesai başında sayılmamak" için
kabulü geciktirmek ya da kendi metriklerini korumak için ciddi bir olayı küçük
diye sınıflandırmak için her türlü teşviki vardır. Etsy gibi kurumlarda öncülük
edilen ve Google'ın SRE literatüründe resmîleşen **[suçlamasız (blameless)](https://en.wikipedia.org/wiki/Just_culture)
postmortem** pratiği tam olarak bu teşviki ortadan kaldırmak için vardır. Bu
konu onu, metriklerin üzerine eklenmiş isteğe bağlı bir kültürel incelik olarak
değil, güvenilir olay verisinin ön koşulu olarak ele alır.

Büyük ekipler için olay metrikleri, bir kurumun tespit ve müdahale yeteneğinin,
konu 2.10'daki geri alma araçları ve diğer yatırımlar dahil, yalnızca o konunun
ele aldığı dağıtım kaynaklı arıza senaryosunda değil, gerçek ve çeşitli
koşullarda da gerçekten işleyip işlemediğini ortaya koyar. Kritik altyapıyı
işleten kurumsal şirketler ve kamu kurumları bu metrikleri hem içeride gerçek
operasyonel iyileşmeyi yönlendirmek için, hem de dışarıda müşterilere,
düzenleyicilere ya da kamuya olayların yetkin biçimde ele alındığını ve zamanla
iyileştiğini göstermek için kullanır.

## Temel ilkeler

- **Suçlamasız kültür, güvenilir olay verisinin ön koşuludur**, isteğe bağlı bir
  ek değil; suçlanma korkusu bildirimi, kabul hızını ve önem derecesi
  sınıflandırmasını aynı ölçüde bozar.
- **Tespit, kabul ve çözüm ayrı aşamalardır ve ayrı çözümleri vardır.** Yavaş bir
  genel toparlanma süresi, gerçekte hangi aşamanın yavaş olduğuna bağlı olarak
  çok farklı temel sorunları gizleyebilir.
- **Olay sıklığı ve MTTR eşleştirilmiş bir sinyaldir**, tıpkı DORA'nın değişiklik
  başarısızlık oranı ve toparlanma süresi gibi (konu 2.10): hiçbiri tek başına
  hikâyenin tamamını anlatmaz.
- **Önem derecesi sınıflandırması, kaçan kusur sınıflandırmasıyla aynı titizliği
  ister** (konu 5.1): duruma göre yargı değil, tutarlı ve belgelenmiş ölçütler.
- **Bir postmortem'in değeri sayı üretmekte değil, sistemik öğrenmededir.** Metrik
  iyi pratiğin yan ürünüdür, amacı değil.

## Öneriler

### Olay müdahale süresini ayrı aşamalarına ayırın

Tek ve karışık bir toplam yerine tespit süresini (arızanın gerçek başlangıcından
birinin fark etmesine kadar), kabul süresini (bildirimden birinin sahiplenmesine
kadar) ve çözüm süresini (sahiplenmeden gerçek toparlanmaya kadar) ayrı ayrı
ölçün ve raporlayın. Her aşama farklı bir çözüme işaret eder: yavaş tespit bir
izleme ve uyarı boşluğuna, yavaş kabul bir nöbet süreci ya da yükseltme (escalation)
sorununa, yavaş çözüm bir araç, runbook ya da tanılama yeteneği boşluğuna işaret
eder (konu 2.10 bunu özellikle dağıtım kaynaklı arızalar için ele alır).

### Gerçekten suçlamasız bir postmortem süreci kurun ve koruyun

**Suçlamasız postmortem**, ne olduğunu ve sistemin bunun olmasına neden izin
verdiğini araştırır; aynı koşullarda, aynı bilgiyle makul herkesin yapabileceği
bir hata için bir bireye kusur atfetmekten özellikle kaçınır. Bu disiplini aktif
olarak koruyun: liderliğin olaylara cezalandırıcı olmayan yanıtlar örneği
vermesi, açık yazılı bir politika ve "bunu kim yaptı" yerine "sistemimizin
neresi buna izin verdi" diye sormak alışkanlığı gereklidir ve hepsi tek seferlik
bir politika beyanı değil, süregelen yatırımlardır.

### Önem derecesini tutarlı, belgelenmiş ve denetlenen ölçütlerle sınıflandırın

Konu 5.1'in kaçan kusurlar için önerdiği disiplini olay önem derecesi
sınıflandırmasına da uygulayın: gerçek müşteri ya da iş etkisine dayanan, ekipler
arasında tutarlı uygulanan ve kayma açısından periyodik olarak denetlenen sabit,
belgelenmiş bir ölçek. Bazı ekiplerin cömert, bazılarının katı olduğu tutarsız
sınıflandırma, kurum genelindeki olay verisini, tutarsız sınıflandırılmış kusur
verisinin olacağı kadar karşılaştırma için güvenilmez kılar.

### Olay sıklığını ve MTTR'yi birlikte izleyin, asla tek başına değil

Artan olay sıklığıyla birlikte iyileşen bir MTTR, ekibin yangın söndürmede
ustalaştığını ama temel sistem güvenilirliğinin aslında bozulduğunu gösterebilir.
Kötüleşen MTTR ile birlikte düşen olay sıklığı ise sık görülen küçük arızaların
yerini daha seyrek ama daha ciddi ve teşhisi daha zor arızaların aldığını
gösterebilir. Dürüst ve birleşik bir tablo için ikisini birlikte gözden geçirin;
bu, Bölüm 2'deki DORA metriklerinin hız ve kararlılık eşleştirme disiplininin
birebir yansımasıdır.

### Yalnızca metrikleri değil, postmortem'lerden çıkan sistemik aksiyon maddelerini çıkarın ve izleyin

Postmortem sürecinin gerçek değeri, ürettiği belirli ve sistemik aksiyon
maddeleridir: eklenen eksik bir uyarı, iyileştirilen bir runbook, ortadan
kaldırılan bir tekil hata noktası. Bu maddeleri tamamlanana kadar, konu 4.5'teki
teknik borç birikimiyle aynı disiplinle izleyin; çünkü kavrayış üreten ama
sonrasını getirmeyen bir postmortem, sürecin yakalamayı amaçladığı kurumsal
öğrenmeyi boşa harcar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Karışık, tek bir olay müdahale süresi metriği | Raporlaması basit | Tespit, kabul, çözüm gibi hangi belirli aşamanın asıl sorun olduğunu gizler |
| Aşamalara ayrılmış olay metrikleri | Tanı koyar, doğrudan doğru çözüme işaret eder | Her aşama geçişinin daha dikkatli araçlandırılmasını gerektirir |
| Suçlama odaklı olay incelemesi | Hesap verebilir hissettirir, sorumluluk atama arzusunu tatmin eder | Sonraki bildirimlerin dürüstlüğünü bozar ve gerçek sistemik nedeni nadiren giderir |
| Suçlamasız postmortem pratiği | Dürüst veri ve gerçek sistemik çözümler üretir | Sürdürmek için süregelen kültürel yatırım ve liderlik disiplini gerektirir |

Temel gerilim **bireysel hesap verebilirliğin cazibesi ile dürüst bildirimin
pratik ihtiyacı** arasındadır. Bir olaydan sonra bir bireyi suçlamak tatmin edici
hissettirebilir ve kararlı liderlik gibi görünebilir, ancak sonraki her olayın
verisini kesinlikle bozar; çünkü insanlar kişisel sonuçtan korkunca eksik bildirir,
kabulü geciktirir ya da önem derecesini yanlış sınıflandırır. Gerilimi bilinçli
ve tutarlı biçimde suçlamasız pratikten yana çözün; gerçek hesap verebilirliğin,
arıza olduğunda orada bulunan bireyi cezalandırmaktan değil, arızaya izin veren
sistemi düzeltmekten geldiğini unutmayın.

## Ekibinizle tartışılacak sorular

1. **Olay müdahale süresini tespit, kabul ve çözüm aşamalarına ayırıyor muyuz,
   yoksa yalnızca tek ve karışık bir sayı mı izliyoruz?** Yalnızca karışık bir sayı
   varsa, yakın tarihli önemli bir olayı seçin ve aşama dökümünü geriye dönük
   yeniden kurmaya çalışın; neyi ortaya çıkaracağını görün.

2. **Ekibimiz postmortem sürecimizin suçlamasız olduğuna gerçekten inanır mı,
   yoksa sonuç korkusu olayların nasıl bildirildiğini ve tartışıldığını hâlâ
   şekillendiriyor mu?** Bunu doğrudan ve dürüstçe sorun; gerçekten yaşanmayan,
   beyan edilmiş bir suçlamasız politika güvenilir veri üretmez.

3. **İki farklı ekip aynı olayın önem derecesini aynı biçimde sınıflandırır mı?**
   Geçmişten gerçek ve muğlak bir olay seçin, farklı ekiplerin temsilcilerine
   bunu bağımsızca sınıflandırtın, sonra sonuçları karşılaştırın.

4. **Olay sıklığını ve MTTR'yi birlikte mi inceliyoruz, yoksa biri diğerinden
   daha fazla ilgi mi görüyor?** Gerçek raporlama pratiğinizi ve incelemelerinizi
   bu eşleştirme açısından kontrol edin; konu 2.10'un DORA kararlılık metrikleri
   için önerdiği disiplinin aynısı.

5. **Son altı aydaki postmortem aksiyon maddelerimizin yüzde kaçı gerçekten
   tamamlandı?** Şu anda bunu izlemiyorsanız, bu boşluk adlandırmaya değer;
   aksiyon maddesi tamamlama oranı düşük bir postmortem süreci, sonrasını
   getirmeyen kavrayış üretiyordur.

6. **Suçlanma korkusu hiç birinin bir olayı bildirmesini ya da kabul etmesini
   geciktirmesine yol açtı mı?** Rahatsız edici ama önemli bir soru. "Evet, ve
   olan şu" şeklinde dürüst bir yanıt, refleks gibi bir "hayır"dan olay
   sürecinizin sağlığı için çok daha değerlidir.

## Sektörel bakış

**Startup.** Olay müdahalesi, küçük bir ekiple çoğunlukla zorunlu olarak
gayriresmîdir ve resmî aşama ayrıştırması başta gereksiz olabilir. Erken
benimsemeye değer alışkanlık, ilk olaydan itibaren suçlamasız tartışma
normlarıdır; çünkü erken oluşan kültürel alışkanlıklar, suçlamaya yatkın bir
örüntü yerleştikten sonra sonradan düzeltmekten çok daha kolay sürdürülür.

**Küçük işletme.** Gayriresmî de olsa basit, ortak bir olay kaydı, temel bir önem
derecesi sınıflandırması ve önemli her şey için kısa bir suçlamasız retrospektif,
sofistike araçlara ya da özel bir olay yönetimi platformuna ihtiyaç duymadan bu
konunun değerinin çoğunu yakalar.

**Kurumsal.** Tutarlı önem derecesi sınıflandırması ile gerçek, sürdürülen
suçlamasız kültürün ikisi de ölçekte sürdürmesi daha zordur ve onlarca ekip
arasında güvenilir, karşılaştırılabilir olay verisi için ikisi de şarttır.
Belgelenmiş sınıflandırma ölçütlerine, periyodik denetime ve liderliğin suçlamasız
müdahaleye aktif örnek olmasına yatırım yapın; çünkü suçlamaya doğru kültürel
kayma, bilinçli ve süregelen bir karşı baskı olmadan yavaş yavaş sızma eğilimindedir.

**Kamu.** Kamu hizmetlerini ya da kritik altyapıyı etkileyen olaylar çoğu zaman dış
inceleme, medya ilgisi ya da resmî soruşturmayla karşılaşır; bu, aktif olarak
yönetilmezse iç suçlamasız pratiği doğrudan baltalayabilecek güçlü bir suçlu
arama baskısı yaratır. Gerçek sistemik öğrenme için net bir iç suçlamasız disiplin
sürdürün; bunu ciddi bir olayı izleyebilecek herhangi bir dış hesap verebilirlik
sürecinden ayrı tutun ve bu ayrımı çalışanlara açıkça iletin.

## Örnekler

**Kurumsal.** Bir ödeme şirketinin mühendislik kültürü yıllarca, sorumlu görünmemek
için olayları hızla kabul etmenin en aza indirilmesi gereken bir şey olduğunu
gayriresmî olarak benimsemişti. Bu, liderliğin başlangıçta yetersiz izleme
araçlarına bağladığı, sürekli kötü tespit ve kabul sürelerine yol açıyordu. Gerçek
anlamda suçlamasız postmortem'lere doğru bir kültürel dönüşüm, liderliğin yalnızca
hızlı çözümü değil, hızlı ve dürüst olay kabulünü de açıkça ve özellikle takdir
etmesi dahil, iki çeyrek içinde hem tespit hem kabul süresinde ölçülebilir bir
iyileşme sağladı. Bu da asıl darboğazın, başlangıçta varsayıldığı gibi teknik
(yetersiz araçlar) değil, kültürel (suçlanma korkusu) olduğunu ortaya koydu.

**Kamu.** Bir toplu taşıma kurumunun operasyon merkezi, iç olay kaydında tarihsel
olarak neredeyse her hizmet aksamasını "küçük" olarak sınıflandırmıştı. Yeni bir
güvenlik direktörü, saha çalışanlarının tekrarlayan ciddi sorunlara dair süregelen
gayriresmî şikâyetleri karşısında bu örüntüyü şüpheli buldu. Yapılan inceleme,
"küçük" sınıflandırmasının daha yüksek önem dereceleri için gereken yük getirici
resmî raporlama sürecinden kaçınmayı sağladığını, bunun da eksik sınıflandırmaya
istenmeyen bir teşvik yarattığını ortaya çıkardı. Kurum, tüm önem dereceleri için
resmî raporlama gereksinimlerini sadeleştirdi ve dürüst önem derecesi bildirimi
nedeniyle çalışanları açıkça suçlanmaya karşı korudu. Sonraki olay verisi, gerçekten
önemli aksamaların daha doğru ve önemli ölçüde daha yüksek bir oranda yaşandığını
gösterdi; böylece liderlik nihayet altyapı yatırımını önceliklendirebileceği dürüst
bir tabloya kavuştu.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Gerçekten suçlamasız, iyi sınıflandırılmış, aşamalara ayrılmış olay metriklerinin
getirisi, korku kaynaklı eksik bildirim ya da yanlış sınıflandırmanın ürettiği
rahatlatıcı ama yanlış bir tablo yerine, gerçekten sistemik iyileşmeyi yönlendiren
dürüst veridir. Yukarıdaki ödeme şirketi örneği bunu somut gösterir: liderliğin
teknik bir tespit sorunu diye yanlış teşhis ettiği şeyi bir araç yatırımı değil,
kültürel bir düzeltme çözdü.

Toplam sahip olma maliyeti çoğunlukla kültürel ve süreç yatırımıdır: suçlamasız
pratiğe sürdürülen liderlik bağlılığı, belgelenmiş ve denetlenen önem derecesi
sınıflandırma ölçütleri ve postmortem aksiyon maddelerini tamamlanana kadar
izleme disiplini. Bu yatırım, alternatiften daha ucuzdur: korkunun her girdisini
bozduğu için güvenle yanlış veri üreten bir olay metrikleri programı.

## Anti-desenler ve tuzaklar

- **Suçlama odaklı olay incelemesi:** sonraki her olay için bildirim dürüstlüğünü,
  kabul hızını ve önem derecesi sınıflandırmasını bozar.
- **Yalnızca karışık bir müdahale süresi sayısını izlemek:** tespit, kabul, çözüm
  gibi hangi belirli aşamanın gerçekten sorun olduğunu gizler.
- **Ekipler arasında tutarsız önem derecesi sınıflandırması:** kurum genelindeki
  olay verisini karşılaştırma için güvenilmez kılar.
- **Olay sıklığını ve MTTR'yi birbirinden ayrı incelemek:** eşleştirilmiş sinyalin
  sağladığı birleşik, dürüst tabloyu kaçırır.
- **Kavrayış üreten ama tamamlanmış aksiyon maddesi üretmeyen bir postmortem
  süreci:** sürecin yakalamayı amaçladığı kurumsal öğrenmeyi boşa harcar.
- **Liderliğin gerçekten yaşamadığı, beyan edilmiş bir suçlamasız politika:**
  açıkça suçlama odaklı bir kültürle aynı korku kaynaklı veri bozulmasını üretir.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Olay müdahalesi gayriresmîdir, bildirim tutarsızdır ve
  suçlamaya yatkın bir kültür dürüst bildirimi aktif olarak caydırır.
- **Seviye 2, Geliştirme:** Bir miktar olay izleme vardır, ancak önem derecesi
  sınıflandırması tutarsızdır ve suçlamasız pratik beyan edilmiş ama tutarlı
  biçimde yaşanmamaktadır.
- **Seviye 3, Standartlaştırma:** Tutarlı, belgelenmiş önem derecesi
  sınıflandırmasıyla aşamalara ayrılmış olay metrikleri kurum genelinde izlenir
  ve gerçekten suçlamasız postmortem pratiği uygulanır.
- **Seviye 4, Yönetme:** Olay sıklığı ve MTTR birlikte gözden geçirilir,
  postmortem aksiyon maddeleri tamamlanana kadar izlenir ve sınıflandırma tutarlılık
  açısından periyodik olarak denetlenir.
- **Seviye 5, Orkestrasyon:** Kurumun, suçlamasız pratiğin dürüst veri ve gerçek
  sistemik çözümler ürettiğine dair gösterilmiş, sürdürülmüş bir geçmişi vardır
  ve olay metrikleri güvenilirlik yatırım kararlarını doğrudan ve güvenilir biçimde
  bilgilendirir.

## Tartışma önerileri

1. Postmortem sürecimiz, gerçekten suçlamasız olup olmadığına dair dürüst bir sınavdan geçer miydi?
2. Yakın zamandaki en yavaş olayımızın aşama dökümü (tespit, kabul, çözüm) nedir?
3. İki ekip son önemli olayımızın önem derecesini aynı biçimde sınıflandırır mıydı?
4. Son postmortem aksiyon maddelerimizin yüzde kaçı gerçekten tamamlandı?
5. Suçlanma korkusu ekibimizde bir olayın nasıl bildirildiğini ya da tartışıldığını hiç şekillendirdi mi?

## Temel çıkarımlar

- **Suçlamasız postmortem kültürü**, güvenilir olay verisinin ön koşuludur;
  suçlanma korkusu bildirimi, kabul hızını ve sınıflandırmayı aynı ölçüde bozar.
- Müdahale süresini her biri farklı bir çözüme işaret eden **tespit, kabul ve
  çözüm** aşamalarına ayırın.
- Önem derecesini **tutarlı, belgelenmiş, denetlenen ölçütlerle** sınıflandırın;
  bu, konu 5.1'in kaçan kusur disiplinini yansıtır.
- **Olay sıklığını ve MTTR'yi birlikte** inceleyin, asla tek başına değil;
  DORA'nın kararlılık metrikleriyle aynı eşleştirme disiplini.
- **Postmortem aksiyon maddelerini tamamlanana kadar** izleyin; metrik iyi
  pratiğin yan ürünüdür, amacı değil.

## Kaynaklar ve ileri okuma

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff ve Niall Richard Murphy (editörler)
  (suçlamasız postmortem pratiği ve olay metrikleri).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara ve Stephen Thorne (editörler) (olay müdahalesi ve
  postmortem için pratik rehberlik).
- *The Field Guide to Understanding Human Error*, Sidney Dekker (sistemik,
  suçlamasız arıza incelemesinin temel savunusu).
- Allspaw, John, "Blameless PostMortems and a Just Culture," Etsy Engineering
  Blog (2012): yazılım operasyonlarında suçlamasız pratiğin erken ve etkili bir
  ifadesi.
