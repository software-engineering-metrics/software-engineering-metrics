# 6.4 Güvenlik ve açık yönetimi metrikleri

## Genel bakış ve motivasyon

Bu konu, bu bölümün kurduğu aynı güvenilirlik disiplinini (hedef koyma,
korkuluk eşleştirme, dürüst olay bildirimi) farklı ama yakından ilişkili bir
riske taşıyarak Bölüm 6'yı kapatır: bir sistemin kendiliğinden başarısız olup
olmadığını değil, birinin onu bilerek başarısız kılıp kılmadığını ya da
istismar edip etmediğini. **Açık yönetimi (vulnerability management)** metrikleri,
bir kurumun güvenlik zayıflıklarını istismar edilmeden önce ne kadar iyi bulup
düzelttiğini ölçer: kaç açık olduğunu, ne kadar ciddi olduklarını ve en önemlisi,
keşfedildikten sonra ne kadar çabuk giderildiklerini. Çünkü bilinen ama
yamalanmamış bir açık, kurumun ister bilinçli ister ihmal yoluyla taşımayı seçtiği,
sürekli ve ölçülebilir bir risktir.

Bu konunun temel kaygısı, konu 4.4'ün statik analiz bulgularını ele alışına
doğrudan paraleldir: ham bir açık sayısı kötü bir metriktir, önemsiz ve kritik
sorunları birbirine karıştırır ve konu 1.2'nin genel olarak tarif ettiği aynı
manipülasyon risklerine, yani tanımı daraltmaya, bastırmaya ve eşik oyunlamaya
tam olarak açıktır. Güvenlik metriklerinin gerektirdiği özel ek, önem derecesine
karşı izlenen giderme süresidir. Aylarca yamalanmamış kritik bir açık, aynı açığın
bir gün içinde yakalanıp düzeltilmesinden temelde farklı bir risktir ve bunu basit
bir sayı tek başına aktaramaz.

Büyük ekipler için güvenlik metrikleri, doğrudan teknik riskin ötesinde sonuçlar
taşır: kurumsal şirketler bir ihlalden kaynaklanan sözleşmesel ve itibari
maruziyetle, kamu kurumları ise güvenlik metriklerini yalnızca iç bir mühendislik
meselesi değil, gerçek bir kamu yararı meselesi kılan ulusal güvenlik, yasal ve
kamu güveni sonuçlarıyla karşılaşır. Bu konu açık yönetimini, bu kitabın baştan
sona uyguladığı aynı titizlik ve aynı korkuluk eşleştirme disipliniyle ele alır;
çünkü güvenlik metrikleri bu kitabın anlattığı her manipülasyon riskine açıktır
ve bu manipülasyon başarılı olduğunda bedeli buna orantılı olarak daha yüksektir.

## Temel ilkeler

- **Önem derecesine göre giderme süresi, ham bir açık sayısından daha önemlidir.**
  Aylarca yamalanmamış kritik bir sorun, aynı sorunun hızla yakalanıp
  düzeltilmesinden temelde farklı bir risktir.
- **Güvenlik metrikleri, statik analiz bulgularıyla aynı manipülasyon risklerine
  açıktır** (konu 4.4); manipülasyon başarılı olduğunda bedeli daha yüksektir.
- **Önem derecesi sınıflandırması, mümkün olduğunca dış ve standart ölçütler
  gerektirir**; hoşgörüye doğru kayabilen salt iç yargıyı değil.
- **Hızla bildirilip düzeltilen bir açık, gizlenecek bir başarısızlık değil, sağlıklı
  bir sürecin işaretidir.** Bildirimi cezalandırmak, bu sistemin tamamının dayandığı
  raporlamayı caydırır.
- **Güvenlik borcu, teknik borcun bir kategorisidir** (konu 4.5) ve öncelikli
  giderme kapasitesi için aynı açık, sayısallaştırılmış zeminde rekabet etmelidir.

## Öneriler

### Birincil metrik olarak önem derecesine göre giderme süresini izleyin

Keşfedilen her açık için önem derecesini kaydedin (uygun olduğunda [Common
Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System),
CVSS gibi standart bir ölçek kullanarak) ve keşiften gerçek gidermeye kadar geçen
süreyi izleyin; bir bilet kapatıldığında ya da bir düzeltme birleştirilip henüz
dağıtılmadığında değil. Önem derecesine göre açık giderme süresi hedefleri koyun;
genellikle kritik sorunlar için gün, daha düşük önemdekiler için hafta cinsinden
ölçülür. Bu hedeflere uyumu, ham, ağırlıksız bir açık sayısı yerine birincil
güvenlik sağlığı metriği olarak izleyin.

### Salt iç yargı yerine standart önem derecesi puanlaması kullanın

CVSS gibi standart bir dış puanlama sistemi mevcut olduğunda, tümüyle iç ve olası
biçimde tutarsız yargıya güvenmek yerine, önem derecesi sınıflandırmasının birincil
temeli olarak onu kullanın. Bu, konu 5.1'in kaçan kusur sınıflandırma disiplinini
ve konu 6.2'nin olay sınıflandırma disiplinini özellikle güvenliğe uygular ve bu
konuların uyardığı aynı hoşgörüye kayma riskine direnir; çünkü dışa demirlenmiş bir
puanı sessizce aşağı yönde yeniden tanımlamak, salt iç bir puanı yeniden tanımlamaktan
daha zordur.

### Gerçekten cezalandırıcı olmayan bir açık bildirimi ve iç raporlama kültürü kurun

Konu 6.2'nin suçlamasız postmortem ilkesini doğrudan güvenliğe uygulayın: kendi
getirdiği bir açığı keşfedip bildiren bir mühendise ya da dışarıda bulunan bir açığı
sorumlu biçimde ifşa eden bir araştırmacıya bir başarısızlığı itiraf ediyormuş gibi
değil, değerli bir hizmet sunuyormuş gibi davranılmalıdır. Açık bildirimini,
içeriden ya da dış araştırmacılardan gelsin, cezalandırmak, tüm açık yönetimi
sisteminin dayandığı raporlamayı kesinlikle caydırır ve gerçek riski yönetilen bir
giderme sürecine değil, yeraltına iter.

### Güvenlik borcunu teknik borç birikiminizin bir kategorisi olarak ele alın

Bilinen, riski kabul edilmiş açıkları, yani rekabet eden öncelikler yüzünden
bilinçli olarak henüz giderilmeyenleri, konu 4.5'te anlatılan görünür ve
sayısallaştırılmış teknik borç birikimine aynı düzeltme maliyeti ile taşıma maliyeti
çerçevesiyle katın. Bu, güvenlik riskinin ya görünmez, belgelenmemiş bir "biliyoruz"
durumunda kaybolmasını ya da açık, sayısallaştırılmış bir öncelik gerekçesi olmadan
özellik işiyle haksız rekabete girmesini önler.

### Açık metriklerini maruziyet ve istismar edilebilirlik bağlamıyla birleştirin

Aynı nominal önem puanına sahip her açık aynı gerçek riski taşımaz: dış ağ
maruziyeti olmayan bir iç araçtaki kritik bir açık, müşteri verisi işleyen ve
internete bakan bir hizmetteki aynı nominal önemden farklı bir risktir. Mümkün
olduğunda önceliklendirmeyi yalnızca önem puanına değil, gerçek maruziyet ve
istismar edilebilirlik bağlamına göre ağırlıklandırın; böylece giderme kapasitesi
önce gerçekten en yüksek riskli kalemlere yoğunlaşır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ham açık sayısı | Raporlaması basit | Önemsiz ve kritik sorunları karıştırır; bastırma yoluyla kolayca manipüle edilir |
| Önem ağırlıklı, giderme süresi izlemesi | Zaman içinde gerçek risk maruziyetini yansıtır | Disiplinli, tutarlı sınıflandırma ve izleme gerektirir |
| Salt iç önem yargısı | Esnek, bağlama göre uyarlanmış | Hoşgörüye kaymaya ve ekipler arası tutarsızlığa yatkın |
| Standart dış puanlama (örn. CVSS) artı bağlam ağırlıklandırması | Tutarlı, dışa demirli, manipülasyona dirençli | Gerçekten doğru önceliklendirme için ek bağlam analizi gerektirir |

Temel gerilim **tutarlılık ile bağlam** arasındadır. Tümüyle standart bir puanlama
yaklaşımı tutarlı ve manipülasyona dirençlidir, ancak gerçek riski belirleyen bağlamı
(maruziyet ve istismar edilebilirlik) kaçırabilir. Tümüyle bağlamsal, iç yargıya
dayanan bir yaklaşım nüansı yakalar ama bu kitabın sınıflandırmaya bağımlı diğer
her metrik için uyardığı aynı hoşgörüye kayma riskine yatkındır. Gerilimi, tutarlı
taban çizgisi olarak standart puanlamaya demirleyip üzerine belgelenmiş, denetlenebilir
bağlam ağırlıklandırması uygulayarak çözün; iki uçtan yalnızca birine yaslanarak değil.

## Ekibinizle tartışılacak sorular

1. **Önem derecesine göre giderme süresini mi izliyoruz, yoksa yalnızca ham bir açık
   sayısını mı?** Gerçek mevcut metriğinizi çekin ve aylarca yamalanmamış kritik bir
   sorunu bir gün içinde düzeltilenden ayırt edip etmediğine bakın; çünkü ham sayı bu
   çok farklı riskli durumları aynı kefeye koyar.

2. **Standart bir dış önem puanlama sistemi mi kullanıyoruz, yoksa sınıflandırma salt
   iç, olası biçimde tutarsız yargıya mı dayanıyor?** Salt iç ise, CVSS gibi bir
   standardı benimsemenin mevcut sınıflandırma pratiğinizi neyi değiştireceğini
   tartışın.

3. **Bir açığı getirip sonra bildiren bir mühendis bunu yapmakta kendini güvende
   hisseder miydi, yoksa cezalandırılmaktan mı korkardı?** Bu, konu 6.2'nin suçlamasız
   kültür sorusunun doğrudan güvenliğe özgü halidir ve buradaki dürüst yanıt, açık
   verinize hiç güvenilip güvenilemeyeceği için büyük önem taşır.

4. **Bilinen, riski kabul edilmiş açıklardan oluşan görünür, sayısallaştırılmış bir
   birikimimiz var mı, yoksa "biliyoruz" durumu zamanla sessizce görünmez ve ele
   alınmaz mı hale geliyor?** Güvenlik borcunuzun genel teknik borç birikiminiz
   (konu 4.5) kadar titizlikle izlenip izlenmediğini kontrol edin.

5. **Giderme önceliklendirmemiz gerçek maruziyeti ve istismar edilebilirliği hesaba
   katıyor mu, yoksa bağlamdan bağımsız olarak salt nominal bir önem puanına mı
   dayanıyor?** Benzer nominal önemdeki iki açığın çok farklı gerçek risk taşıdığı
   gerçek bir örnek seçin ve mevcut sürecinizin onları doğru önceliklendirip
   önceliklendirmeyeceğini tartışın.

6. **Bir açığın önem derecesi sınıflandırması hiç açık bir gerekçe olmadan zamanla
   aşağı yönde kaydı mı?** Bu, konu 1.2 ve konu 6.2'nin ikisinin de uyardığı tanım
   oyunlama örüntüsünü yansıtır; bu özel risk için yakın tarihli sınıflandırmalarınızdan
   bir örneklemi denetleyin.

## Sektörel bakış

**Startup.** Resmî açık yönetimi süreçleri çoğunlukla çok erken dönemde gereksizdir,
ancak baştan temel otomatik bağımlılık taraması ve basit, dürüst bir iç raporlama
normu benimsemek az maliyetlidir ve ekip güvenlik borcunu sistematik biçimde ele
alacak kapasiteye sahip olmadan önce görünmez biçimde birikmesini önler.

**Küçük işletme.** Çoğu modern geliştirme platformu bağımlılıklar için ücretsiz ya da
düşük maliyetli otomatik açık taraması içerir. Bunu erkenden etkinleştirin ve özel
bir güvenlik işlevi ya da sofistike araçlar olmasa bile kritik diye işaretlenen her
şey için giderme süresini izleyin.

**Kurumsal.** Tutarlı, standart önem puanlaması ile gerçekten cezalandırıcı olmayan
bir bildirim kültürünün ikisi de şarttır ve ölçekte sürdürmesi daha zordur; onlarca
ekip arasındaki tutarsızlık ve ciddi bir olaydan sonra suçlu aramaya doğru kültürel
kayma sürekli risklerdir. Sınıflandırma tutarlılığını korumak ve bildirim kültürünü
aktif olarak savunmak için özel bir güvenlik yönetişimi işlevine yatırım yapın.

**Kamu.** Buradaki güvenlik metrikleri çoğu zaman doğrudan ulusal güvenlik, mevzuata
uyum ve kamu güveniyle kesişir ve kötü ele alınmış ciddi bir açık, tipik bir özel
sektör ihlalinin çok ötesinde sonuçlar doğurabilir. Titiz, dışa demirli önem derecesi
sınıflandırması sürdürün, iç ve dış bildirim kültürünü aktif olarak koruyun ve
güvenlik borcunu bu konunun önerdiği şeffaflık ve önceliklendirme titizliğiyle ele
alın; çünkü kamu altyapısındaki belgelenmemiş, sessizce kabul edilmiş kritik bir
açık gerçekten ciddi, denetlenebilir bir risktir.

## Örnekler

**Kurumsal.** Bir yazılım şirketinin güvenlik ekibi yıllarca liderliğe yalnızca ham
bir açık sayısı raporlamıştı. Bu sayı yatay seyrediyor ve yanlış bir kararlılık hissi
veriyordu. Önem ağırlıklı, giderme süresi odaklı gözden geçirilmiş bir analiz,
toplam sayı yatay olsa da kritik açıkların gidermesinin ortalama doksan günü aştığını,
yani makul her hedefin çok ötesinde sürdüğünü ortaya koydu. Bunun nedeni, her planlama
döngüsünde özel, korunmuş kapasite olmadan özellik işiyle rekabette başarısız
kalmalarıydı. Kritik açıklar için sert bir 7 günlük giderme hedefi koymak, konu 4.5'in
teknik borç ayırma modelini yansıtan korunmuş güvenlik borcu giderme kapasitesiyle
desteklenince, ortalama kritik giderme süresini iki çeyrek içinde beş günün altına
indirdi.

**Kamu.** Ulusal bir altyapı kurumu, bir dış güvenlik denetiminin ardından, iç
mühendislerin kendi kodlarında keşfettikleri açıkları performans değerlendirmelerine
kötü yansıyacağı korkusuyla gayriresmî olarak bildirmekten kaçındığını fark etti;
bu, konu 6.2'nin suçlama kaynaklı olay eksik bildirimi örüntüsüne açık bir paraleldir.
Kurum, iç açık bildirenleri her türlü performans sonucundan koruyan, doğrudan
suçlamasız olay müdahale pratiğinden örnek alınmış açık ve kamuya duyurulan bir
politika oluşturdu. Ertesi yıl içinde iç açık bildirimleri önemli ölçüde arttı. Kurum
liderliği bu sonucu, doğal ama yanlış bir "artan sayı işlerin kötüleştiği anlamına
gelmeli" çıkarımından kaçınarak, kod kalitesinde düşüşün değil, iyileşmiş tespitin ve
dürüst bildirimin kanıtı olarak doğru yorumladı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Titiz, iyi sınıflandırılmış, dürüstçe bildirilen açık yönetiminin getirisi, önlenen
ihlal maliyetidir. Ciddi bir güvenlik olayında bu maliyet, çoğu zaman proaktif
gidermenin maliyetini kat kat aşar ve buna önlenen mevzuat, sözleşme ve itibar zararı
eklenir. Yukarıdaki yazılım şirketi örneği özgül mekanizmayı gösterir: güvenlik borcu,
korunmuş giderme kapasitesi onu doğrudan düzeltene kadar yıllarca sessizce özellik
işiyle öncelik rekabetini kaybediyordu; konu 4.5'in genel olarak teknik borç için
uyardığı örüntünün aynısı.

Toplam sahip olma maliyeti; otomatik tarama araçlarını, bu konunun ayırmayı önerdiği
korunmuş giderme kapasitesini ve cezalandırıcı olmayan bildirim pratiğine sürdürülen
kültürel yatırımı içerir. Bu maliyet, proaktif ve iyi önceliklendirilmiş gidermenin
istismar edilmeden çok önce yakalayıp düzeltebileceği, başarıyla istismar edilmiş ciddi
bir açığın maliyetine kıyasla mütevazıdır.

## Anti-desenler ve tuzaklar

- **Yalnızca ham açık sayısını izlemek:** önemsiz ve kritik sorunları karıştırır ve
  gerçek riskten bağımsız olarak yanlış bir kararlılık ya da kriz hissi verir.
- **Salt iç, standartlaştırılmamış önem derecesi sınıflandırması:** hoşgörüye kaymaya
  ve ekipler arası tutarsızlığa yatkındır.
- **Açık bildirimini, iç ya da dış, cezalandırmak:** gerçek riski yönetilen bir giderme
  sürecine değil, yeraltına iter.
- **Görünür, sayısallaştırılmış bir birikimi olmayan güvenlik borcu:** varsayılan olarak
  özellik işiyle öncelik rekabetini kaybeder.
- **Yalnızca nominal önem puanına göre önceliklendirmek, maruziyet ve istismar
  edilebilirlik bağlamını yok saymak:** sınırlı giderme kapasitesini yanlış yönlendirir.
- **Artan açık bildirim sayısını, bildirimin kendisinin iyileşip iyileşmediğine
  bakmadan kalitenin düştüğünün kanıtı saymak:** konu 1.6'nın karıştırıcı değişken
  tuzağının özgül bir örneği.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Açıklar, izleniyorsa, önem ağırlıklandırması, giderme süresi
  izlemesi olmayan ham bir sayı olarak ve cezalandırıcı bir bildirim kültürüyle izlenir.
- **Seviye 2, Geliştirme:** Bir miktar önem derecesi sınıflandırması vardır, ancak
  standartlar tutarsızdır ve giderme süresi açık hedeflere karşı izlenmez.
- **Seviye 3, Standartlaştırma:** Standart, dışa demirli önem puanlaması ve önem
  derecesine göre açık giderme süresi hedefleri, gerçekten cezalandırıcı olmayan bir
  bildirim kültürüyle tutarlı biçimde uygulanır.
- **Seviye 4, Yönetme:** Güvenlik borcu, korunmuş giderme kapasitesiyle görünür,
  sayısallaştırılmış bir birikimde izlenir; önceliklendirme yalnızca önem derecesini
  değil, maruziyet ve istismar edilebilirlik bağlamını da hesaba katar.
- **Seviye 5, Orkestrasyon:** Kurum, kritik giderme süresinde belirli, ölçülebilir
  azalmaları gösterebilir ve dürüst, kapsamlı açık verisi üreten sürdürülmüş, güvenilen
  bir bildirim kültürünü kanıtlayabilir.

## Tartışma önerileri

1. Kritik açıklar için mevcut ortalama giderme süremiz nedir ve açık bir hedefi karşılıyor mu?
2. Bir açığı getiren bir mühendis bunu kendisi bildirmekte kendini güvende hisseder miydi?
3. Bilinen, riski kabul edilmiş güvenlik borcundan oluşan görünür, sayısallaştırılmış bir birikimimiz var mı?
4. Giderme önceliklendirmemiz gerçek maruziyeti mi hesaba katıyor, yoksa yalnızca nominal önem derecesini mi?
5. Bir önem derecesi sınıflandırması hiç açık bir gerekçe olmadan zamanla aşağı yönde kaydı mı?

## Temel çıkarımlar

- Birincil güvenlik sağlığı metriği olarak ham açık sayısını değil, **önem derecesine
  göre giderme süresini** izleyin.
- Salt iç yargının davet ettiği hoşgörüye kayma riskine dirençli, tutarlı bir taban
  çizgisi olarak **standart dış önem puanlaması** (CVSS gibi) kullanın.
- Gerçekten **cezalandırıcı olmayan bir bildirim kültürü** kurun; raporlamayı
  cezalandırmak gerçek riski yeraltına iter.
- **Güvenlik borcunu teknik borcun bir kategorisi** olarak ele alın (konu 4.5); korunmuş
  giderme kapasitesi için adil rekabet etsin.
- Önceliklendirmeyi yalnızca önem puanına değil, **gerçek maruziyete ve istismar
  edilebilirliğe** göre ağırlıklandırın.

## Kaynaklar ve ileri okuma

- FIRST.org'un Common Vulnerability Scoring System (CVSS) şartnamesi: bu konu boyunca
  atıf yapılan standart önem puanlama çerçevesi.
- OWASP Foundation'ın açık yönetimi ve güvenli yazılım geliştirme yaşam döngüsü
  pratiğine dair kaynakları.
- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy Beyer,
  Chris Jones, Jennifer Petoff ve Niall Richard Murphy (editörler) (bu konunun güvenlik
  bildirimine uyguladığı suçlamasız kültür ilkeleri).
- NIST Special Publication 800-40, *Guide to Enterprise Patch Management Planning*:
  açık giderme pratiğine dair yetkin rehberlik.
