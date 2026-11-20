# 3.7 Geliştirici deneyimi anketleri ve DevEx metrikleri

## Genel bakış ve motivasyon

Bu konu, Bölüm 3'ü önceki her konunun öz bildirim verisini güvenilir kılan pratik
mekanikle kapatır: popülerlik yarışmasına değil gerçek bir sinyale yol açan bir
geliştirici deneyimi (DevEx) anketinin nasıl tasarlanacağı ve anket verisinin
nesnel araçlandırmayla, bir kuruluşun gerçekten harekete geçebileceği bir metrik
kümesinde nasıl birleştirileceği. Bu bölümdeki her konu bir tür öz bildirime
dayanır; en doğrudan memnuniyet ve iyi oluş (konu 3.2). Ama performans, iletişim
ve akış da iyi tasarlanmış bir anketten yararlanır ve kötü tasarlanmış bir anket
hepsinin değerini aynı anda zayıflatır.

**Geliştirici deneyimi (developer experience, DevEx)**, SPACE'in biçimselleştirdiği
aynı çekirdek fikrin etrafında ortaya çıkan daha geniş, daha yeni bir çerçevelemedir:
mühendislerin işi halletmeye dair gerçek, günlük deneyimi, yani sürtünme, araçlar,
bilişsel yük, geri bildirim döngüleri, yalnızca yumuşak bir kültürel kaygı değil,
ölçülebilir ve iyileştirilebilir bir şeydir. DevEx araştırması, özellikle Abi Noda,
Margaret-Anne Storey, Nicole Forsgren ve Michaela Greiler'in önerdiği çerçeve, bu
deneyimi üç boyut etrafında örgütler: geri bildirim döngüleri, bilişsel yük ve akış
durumu; bunlar bu bölümün zaten derinlemesine ele aldığı SPACE boyutlarıyla yakından
örtüşür ve onları genişletir.

Büyük ekipler için güvenilir sinyal üreten bir anket ile gürültü, ya da daha kötüsü
etkin biçimde yanıltıcı veri üreten bir anket arasındaki fark, tümüyle bu konunun
kapsadığı tasarım ayrıntılarındadır: soru ifadesi, yanıt ölçeği seçimi, örnekleme
ve ritim ve sonuçların yanıtlayıcılara nasıl geri iletildiği. Bu anketleri binlerce
mühendis arasında ölçekli olarak yürüten kurumsal şirketler ve kamu kuruluşları
bunu yanlış yapmayı göze alamaz; çünkü bu ölçekte kusurlu bir araç, gerçek kaynak
kararlarını şekillendiren, kendinden emin biçimde yanlış sonuçlar üretir.

## Temel ilkeler

- **Anket tasarım kalitesi, veri güvenilirliğini anket uzunluğundan ya da
  gelişmişliğinden çok daha fazla belirler.** Kısa, iyi tasarlanmış bir anket her
  seferinde uzun, kötü tasarlanmış olanı yener.
- **Yanıt oranı yalnızca bir veri toplama metriği değil, kendi başına bir
  sinyaldir;** düşen bir oran çoğu zaman sürece duyulan güvenin aşındığını gösterir.
- **Mümkün olduğunca anket verisini nesnel araçlandırmayla birleştirin,** konu
  1.5'in araçlandırma ilkesini izleyerek; anket verisini özellikle nesnel verinin
  yakalayamadığı şey için kullanın.
- **Döngüyü yanıtlayıcılarla kapatın.** Görünür biçimde hiçbir değişikliğe yol
  açmayan bir anket, insanlara onu ciddiye almayı bırakmayı öğretir.
- **DevEx ve SPACE, aynı altta yatan kaygının tamamlayıcı çerçevelemeleridir;**
  aralarından seçilecek rakip çerçeveler değildir.

## Öneriler

### Soruları açıklık için tasarlayın, yönlendirici ya da çift kanallı ifadelerden kaçının

Tam olarak tek bir şeyi soran, sade bir dille yazılmış, sorunun kendisine bir varsayım
gömmeyen anket soruları yazın. "Araçlarımızdan ve dokümantasyonumuzdan ne kadar
memnunsunuz?" iki potansiyel olarak çok farklı yanıtı tek bir kafa karıştırıcı yanıtta
birleştiren çift kanallı (double-barrelled) bir sorudur. Onu iki ayrı soruya bölün.
"Araçlara yaptığımız son yatırım deneyiminizi ne kadar iyileştirdi?" gibi yönlendirici
ifadelerden kaçının; çünkü bu, iyileşmenin olup olmadığını tarafsızca sormak yerine
iyileşmenin olduğunu varsayar.

### Tutarlı yanıt ölçekleri kullanın ve yeni soruları geniş çaplı dağıtımdan önce pilot edin

Anket aracınız genelinde tutarlı bir yanıt ölçeğini standart hale getirin (beş ya da
yedi noktalı bir [Likert](https://en.wikipedia.org/wiki/Likert_scale) ölçeği yaygın ve
iyi incelenmiştir); böylece yanıtlar sorular arasında ve zaman içinde karşılaştırılabilir
olur. Herhangi bir yeni soruyu kuruluş genelinde yaymadan önce küçük bir grupla pilot
edin; belirsiz ifadeyi ya da beklenmedik yorumu, tam bir veri kümesini bozmadan önce
yakalamak için.

### Yanıt oranını kendi başına bir tanısal sinyal olarak ele alın

Anket yanıt oranını ardışık döngüler boyunca izleyin ve düşen bir oranı, konu 3.2'de
tartışılan güven sinyaline benzer biçimde, doğrudan araştırılmaya değer bir uyarı
işareti olarak ele alın. Düşen bir yanıt oranı çoğu zaman anket yorgunluğuna, sonuçların
eyleme yol açtığına duyulan güvenin aşınmasına ya da anonimliğin gerçekten
korunmadığına dair artan şüpheye işaret eder; bunların her biri, yalnızca bir veri
toplama sıkıntısı diye geçiştirilmek yerine doğrudan araştırmayı hak eder.

### Anket verisini nesnel DevEx araçlandırmasıyla birleştirin

Öznel anket yanıtlarını, var oldukları yerde nesnel sinyallerle eşleyin: derleme
süresi, test paketi çalışma süresi, yerel geliştirme ortamı kurulum süresi ve konu
3.6'daki akış zamanı ve kesinti verisi. "Derlememiz çok yavaş" diyen bir anket yanıtı,
gerçek ölçülmüş derleme süresi eğilimiyle eşlendiğinde çok daha eyleme dönüştürülebilir
olur; bu birleşim, algı ile nesnel gerçekliğin her iki yönde ayrıştığı durumları da
yakalar ve bu durumlar kendi başına araştırmaya değerdir.

### Döngüyü kapatın: sonuçları ve görünür takip eylemini yayımlayın

Her anket döngüsünden sonra, yönetimin vurgulamamayı tercih edebileceği sonuçlar
dahil, sonuçların dürüst bir özetini yayımlayın ve yanıt olarak alınan en az bir somut
eylemi alenen taahhüt edin. Görünür hiçbir takip üretmeyen bir anket, yanıtlayıcılara
dürüst girdilerinin önemli olmadığını öğretir; bu da sonraki her döngüde hem yanıt
oranını hem yanıt dürüstlüğünü bozar. Bu döngü kapatma disiplini çoğu zaman bir DevEx
anket programının yıllar boyunca yararlı kalıp kalmayacağının ya da yavaş yavaş bir
kutucuk işaretleme alıştırmasına çürüyüp çürümeyeceğinin tek en büyük belirleyicisidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Uzun, kapsamlı anket | Çok sayıda konuda zengin, ayrıntılı veri | Daha düşük yanıt oranı, daha yüksek yorgunluk, kötü tasarlanmış sorulara daha fazla yer |
| Kısa, odaklı anket | Daha yüksek yanıt oranı, iyi tasarlaması daha kolay | Daha az kapsam; seçilen odağın dışında ortaya çıkan bir sorunu kaçırabilir |
| Yalnızca anket verisi | Öznel deneyimi doğrudan yakalar | Önyargıya açık ve nesnel gerçekliğe karşı doğrulanamaz |
| Nesnel araçlandırmayla birleştirilmiş anket | Algı ile gerçeklik arasındaki ayrışmayı yakalar, daha eyleme dönüştürülebilir | Daha fazla veri entegrasyonu emeği gerektirir |

Temel gerilim **kapsam ile yanıt kalitesi** arasındadır. Daha uzun, daha kapsamlı bir
anket daha fazla alan yakalar ama yanıt oranını düşürür ve kötü tasarlanmış soruların
sızma riskini artırır; kısa, odaklı bir anket daha kaliteli yanıtlar alır ama kapsamının
dışında önemli bir şeyi kaçırma riski taşır. Gerilimi, çekirdek, yinelenen anketi kısa
ve iyi pilot edilmiş tutarak ve her döngüde her şeyi kapsamaya çalışmak yerine, daha
ayrıntılı keşif gerektiren belirli konular için ara sıra, açıkça etiketlenmiş derinlemesine
anketler kullanarak çözün.

## Ekibinizle tartışılacak sorular

1. **Yeni bir anket sorusunu geniş çapta yaymadan önce küçük bir grupla hiç pilot
   ettik mi, yoksa yeni sorular doğrudan tam ankete mi gidiyor?** Pilot adımını
   atlamak, belirsiz ya da çift kanallı soruların, kimse ifadenin belirsiz olduğunu
   fark etmeden tam bir veri kümesini bozmasının yaygın bir yoludur.

2. **Son birkaç anket döngüsünde yanıt oranımıza ne oldu ve bir düşüş yaşandıysa
   araştırdık mı?** Bu eğilimi, geçerken not edilecek bir veri toplama sıkıntısı olarak
   değil, tartışmaya değer gerçek bir sinyal olarak ele alın.

3. **Anket verisini herhangi bir nesnel araçlandırmayla birleştiriyor muyuz, yoksa
   raporlamamızda öznel algı tümüyle kendi başına mı duruyor?** Bir anket sorusunu
   nesnel veriyle, derleme süresi ya da dağıtım sıklığı gibi, eşlemenin sonucu daha
   eyleme dönüştürülebilir kılabileceği en az bir yer belirleyin.

4. **Son anket döngümüzün doğrudan, görünür bir sonucu olarak hangi somut eylemi
   aldık ve bu eylemi yanıtlayıcılara geri ilettik mi?** Dürüst yanıt "görünür hiçbir
   şey" ise, bu boşluk muhtemelen, yanıt oranında henüz görünmüş olsun olmasın, araca
   duyulan güveni zaten aşındırıyordur.

5. **Mevcut anket sorularımızdan herhangi biri yönlendirici ya da çift kanallı mı ve
   öyle olsalar fark eder miydik?** Mevcut sorularınızı bu belirli sınamaya karşı grup
   alıştırması olarak gözden geçirin.

6. **DevEx ya da SPACE anket verimiz, ikisi uyuşmuyor göründüğünde nesnel sinyallerle
   nasıl karşılaştırılıyor ve bu uyuşmazlık bize ne söylüyor?** Algı ile nesnel verinin
   ayrıştığı bir durum çoğu zaman ikisinin uyuştuğu bir durumdan tanısal olarak daha
   değerlidir; çünkü boşluğun kendisi bilgilendiricidir.

## Sektörel bakış

**Startup.** Bazen yalnızca bir ya da iki sorudan oluşan, gayriresmî ve sık yürütülen
basit, çok kısa bir nabız anketi bu ölçekte genellikle yeterlidir ve bir kurucu hâlâ
neredeyse herkesle düzenli olarak doğrudan konuşabiliyorsa resmî araç tasarım
titizliği daha az önemlidir.

**Küçük işletme.** Üç ayda bir yürütülen, kısa ve uyarlanmış bir soru kümesine sahip
ücretsiz ya da düşük maliyetli bir anket aracı, özel bir anket tasarımı uzmanlığına
ihtiyaç duymadan buradaki değerin çoğunu yakalar. Gelişmişlikten çok döngüyü kapatma
disiplinine öncelik verin; küçük bir ekip bile kısa bir anketin ortaya çıkardığına
görünür biçimde göre hareket etmekten yarar sağlar.

**Kurumsal şirket.** Anket tasarım kalitesi ölçekte son derece önemlidir; çünkü
kusurlu bir soru ya da bozulmuş bir anonimlik garantisi binlerce yanıtlayıcının
verisini aynı anda bozar ve ortaya çıkan kendinden emin yanlış sonuçlar önemli kaynak
kararlarını yanlış yönlendirebilir. Şirket içinde gelişigüzel bir araç kurmak yerine
gerçek anket tasarımı uzmanlığına yatırım yapın ya da yerleşik bir DevEx ölçüm
platformuyla ortaklık kurun.

**Kamu.** Personelin verinin kurum içinde nasıl kullanıldığı konusunda zaten ihtiyatlı
olabileceği kuruluşlarda yanıt oranı ve güven özellikle kırılgandır. Veri kullanımı
konusundaki şüphenin tipik bir özel sektör ortamından zaten daha yüksek olabileceği bir
bağlamda dürüst bir yanıt oranını ulaşılabilir kılan güveni kurmak için şeffaf anonimlik
garantilerine ve görünür takip eylemine özellikle fazla yatırım yapın.

## Örnekler

**Kurumsal şirket.** Bir yazılım şirketinin ilk DevEx anketi, mühendislerden "araçlar
ve süreçten memnuniyetlerini" derecelendirmelerini isteyen bir soru içeriyordu; bu, iki
çok farklı kaygıyı birleştiren çift kanallı bir sorudu. Birleşik puan vasat geldiğinde
yönetim sorunun araçlar mı, süreç mi, yoksa ikisi mi olduğunu söyleyemedi ve ilk iyileştirme
çabaları iki çeyrek boyunca yanlış alanı hedef aldı. Sonraki bir revizyonda soruyu
bölmek, araç puanının aslında güçlü, süreç puanının ise kötü olduğunu ortaya çıkardı ve
yatırımı hantal bir yayın onayı sürecini basitleştirmeye yönlendirdi; bu, bir çeyrek içinde
ölçülebilir bir memnuniyet iyileşmesi üretti, oysa daha önceki araç odaklı çaba çok az
etki göstermişti.

**Kamu.** Ulusal bir dijital kurumun ilk DevEx anketinin yanıt oranı %30'un altındaydı ve
bir iç inceleme, toplu sonuçların anonim olması amaçlansa da personelin, sonradan doğru
çıktığı üzere, bireysel yöneticilerin kimin yanıt verip vermediğini görebileceğine
yaygın biçimde inandığını buldu. Kurum, doğrulanmış anonimliğe sahip gerçekten bağımsız,
üçüncü taraf bir anket platformuna geçti, değişikliği açıkça ve tekrar tekrar iletti ve
önceki döngünün sonuçlarının net bir özetini, yanıt olarak alınan üç somut eylemle
birlikte yayımladı. Yanıt oranı iki döngü içinde %70'in üzerine çıktı ve kurumun yönetimi,
araca duyulan güvenin yeniden kurulmasının nedeni olarak özellikle gerçek anonimlik ile
görünür takip eyleminin birleşimini gösterdi.

## İş gerekçesi: motivasyonlar, ROI ve TCO

İyi tasarlanmış bir DevEx anket programının getirisi, aksi halde işten ayrılma ya da
teslimat yavaşlaması olarak yüzeye çıkana kadar görünmez kalan bir boyut olan geliştirici
deneyimi hakkında güvenilir, eyleme dönüştürülebilir veridir. Yukarıdaki yazılım şirketi
örneği, tasarımı yanlış yapmanın maliyetini gösteriyor: tek bir kötü ifade edilmiş soru
iki ayrı kaygıyı birleştirdiği için iki çeyrek boyunca yanlış yönlendirilmiş iyileştirme
çabası.

Toplam sahip olma maliyeti; anket araçlarını, bu konunun önerdiği tasarım ve pilot
disiplinini ve her döngüde görünür takip eylemiyle döngüyü kapatma konusundaki süregelen
taahhüdü içerir. Bu taahhüt, herhangi bir araç maliyetinden daha fazla, bir anket
programının yıllarca yararlı kalıp kalmayacağını ya da zamanla giderek daha az güvenilir
veri üreten bir kutucuk işaretleme alıştırmasına çürüyüp çürümeyeceğini belirler.

## Anti-desenler ve tuzaklar

- **Çift kanallı ya da yönlendirici sorular:** ayrı kaygıları birleştirir ya da
  yanıtlara yanlılık katar ve çoğu zaman pilot edilmeden fark edilmez.
- **Yeni sorular için pilot adımını atlamak:** belirsiz ifadenin tam ölçekli bir veri
  kümesini bozmasına izin verir.
- **Düşen bir yanıt oranını görmezden gelmek:** kendi başına önemli bir güven sinyalini
  kaçırır.
- **Döngüyü görünür takip eylemiyle asla kapatmamak:** yanıtlayıcılara dürüst girdinin
  önemli olmadığını öğretir ve gelecekteki veri kalitesini bozar.
- **Anket verisini nesnel bir destek olmadan kendi başına yeterli saymak:** algı ile
  gerçekliğin her iki yönde ayrıştığı durumları kaçırır.
- **Zayıf ya da doğrulanamaz anonimlik garantileri:** hem yanıt oranını hem yanıt
  dürüstlüğünü çökertmenin en hızlı yolu.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Anket soruları gelişigüzel ve pilot edilmemiştir,
  yanıt oranı bir sinyal olarak izlenmez ve sonuçlar nadiren görünür eyleme yol açar.
- **Düzey 2, Geliştirme (Develop):** Bir miktar anket tasarım disiplini vardır ama pilot
  uygulama tutarsızdır ve döngü yanıtlayıcılarla güvenilir biçimde kapatılmaz.
- **Düzey 3, Standartlaştırma (Standardize):** Sorular dağıtımdan önce pilot edilir,
  yanıt oranı izlenir ve düştüğünde araştırılır ve sonuçlar tutarlı biçimde en az bir
  somut takip eylemiyle yayımlanır.
- **Düzey 4, Yönetme (Manage):** Anket verisi nesnel araçlandırmayla sistematik biçimde
  birleştirilir ve ikisi arasındaki ayrışma tanısal bir sinyal olarak etkin biçimde
  araştırılır.
- **Düzey 5, Orkestrasyon (Orchestrate):** Kuruluşun, tutarlı biçimde yüksek yanıt
  oranları, her döngüden kanıtlanabilir görünür eylem ve kötü tasarlanmış soruları
  veriyi bozmadan önce yakalayıp düzeltme sicili olan, olgun, güvenilir, çok yıllık bir
  anket programı vardır.

## Tartışma önerileri

1. Aracımızdaki mevcut anket sorularından herhangi biri hiç bir yanıtlayıcıyı şaşırttı ya da yanılttı mı?
2. Anket verisinin doğrudan sonucu olarak aldığımız son somut eylem neydi?
3. Anonimlik garantimizin, kazara bile olsa, bozulduğunu nereden bilirdik?
4. Anket verimiz nesnel araçlandırmayla nerede uyuşuyor ya da uyuşmuyor ve bu bize ne söylüyor?
5. Mevcut yanıt oranımızı ikiye katlamak için ne gerekir?

## Temel çıkarımlar

- Anket **tasarım kalitesi**, yani net, tek kavramlı, yansız sorular, uzunluktan ya da
  gelişmişlikten daha önemlidir.
- **Yanıt oranı kendi başına bir sinyaldir;** bir düşüşü yalnızca bir sıkıntı saymak
  yerine araştırın.
- Algı ile gerçeklik arasındaki ayrışmayı yakalamak için **anket verisini nesnel
  araçlandırmayla birleştirin**.
- **Döngüyü kapatın:** her döngüde sonuçları ve görünür takip eylemini yayımlayın, yoksa
  araca duyulan güven aşınır.
- **DevEx ve SPACE**, geliştirici deneyimine dair aynı altta yatan kaygının rakip değil,
  **tamamlayıcı** çerçevelemeleridir.

## Kaynaklar ve ileri okuma

- Noda, Abi, Margaret-Anne Storey, Nicole Forsgren, and Michaela Greiler,
  "DevEx: What Actually Drives Productivity," *ACM Queue* (2023): geri bildirim
  döngüleri, bilişsel yük ve akış durumundan oluşan DevEx çerçevesi.
- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Ask Your Developer: How to Harness the Power of Software Developers and
  Win in the 21st Century*, Jeff Lawson (geliştirici deneyimine kurumsal yatırım).
- *Designing and Conducting Survey Research: A Comprehensive Guide*, Louis M. Rea
  ve Richard A. Parker (DevEx araçlarına uygulanabilir genel anket tasarımı
  metodolojisi).
