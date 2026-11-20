# 8.1 Mühendislik metrikleri panosu tasarlamak

## Genel bakış ve motivasyon

Bu kitabın ele aldığı her metrik eninde sonunda gerçek insanların gerçekten
baktığı bir yerde yaşamak zorundadır ve kötü tasarlanmış bir
[pano](https://en.wikipedia.org/wiki/Dashboard_(business)), önceki her
konunun özenli işini boşa çıkarabilir: dürüst, iyi yönetilen, korkuluk
eşlemeli metrikler dürüst olmayan biçimde, dağınık ya da yanlış kitleye
sunulduğunda, bu kitabın önlemeye çalıştığı karışıklığı ve güvensizliği
doğurur. Bu konu, pano tasarımının kendine özgü zanaatıyla ilgilidir: kime
neyi göstereceğinize karar vermek, bunu dürüstçe görselleştirmek ve bütün
ürünü, yok sayılmak ya da daha kötüsü yanlış okunmak yerine gerçekten karar
vermekte kullanılacak biçimde yapılandırmak.

Bu konunun önerdiği temel disiplin kitleye özgü tasarımdır. Tek bir
mühendislik ekibinin günlük ayakta toplantısı için kurulan bir pano, üç
aylık bir yönetici gözden geçirmesi için kurulandan farklı metrikler, farklı
ayrıntı düzeyi ve farklı görsel yoğunluk ister; her iki kitleye birden hizmet
etmeye çalışan tek beden herkese uyar bir pano ise çoğunlukla ikisine de iyi
hizmet etmez. Bu konu pano tasarımını sonradan akla gelen bir raporlama işi
olarak değil, gerçek bir tasarım disiplini olarak ele alır ve boyunca konu
1.6'nın istatistiksel dürüstlük ilkelerinden yararlanır: her görselleştirme
tercihi, okuyucunun veriden doğru sonucu çıkarma becerisine ya yardım eder ya
da engel olur.

Büyük ekipler için pano tasarımı, bu kitabın metrik düzeyindeki pek çok
korkuluğunun ya pratikte ayakta kaldığı ya da kaybolduğu yerdir. Onlarca ekip
panosu işleten kurumsal şirketlerin, katılık olmadan tutarlılığa, her kitlenin
özel ihtiyacına yer bırakan ortak standartlara ihtiyacı vardır; panoları
kamuoyu incelemesine açık olabilen ya da denetim raporlamasına temel olan
kamu kuruluşlarının ise bu konunun önerdiği dürüst görselleştirme
standartlarını özel bir titizlikle uygulaması gerekir, çünkü dış bir
denetçinin bulduğu yanıltıcı bir grafik, ilgili metriğin çok ötesinde
itibar kaybettirir.

## Temel ilkeler

- **Kapsamlı olmak için değil, belirli bir kitle ve karar için tasarlayın.**
  Herkese hizmet etmeye çalışan bir pano çoğunlukla hiç kimseye iyi hizmet
  etmez.
- **Her görselleştirme tercihi ya yardım eder ya da açıkça yanıltır.** Konu
  1.6'nın istatistiksel dürüstlüğünü titizlikle uygulayın: gerçek eğilim,
  dürüst eksenler, görünür belirsizlik.
- **Az sayıda, iyi seçilmiş metrik, kapsamlı olmaktan üstündür.** Kitabın
  konu 1.1'den beri süregelen ilkesi, doğrudan pano tasarımına uygulanır.
- **Pano, bir sahibe ve bir gözden geçirme ritmine ihtiyaç duyar**, tıpkı
  yönetilen diğer her metrik gibi (konu 1.4); aksi hâlde bakımsız, güvenilmez
  bir ürüne dönüşerek çürür.
- **Korkuluk çiftleri aynı görünümde yer almalıdır.** Teşvik edilen bir
  metriği korkuluğundan asla farklı panolara ya da farklı bölümlere
  ayırmayın.

## Öneriler

### Farklı kitleler ve kararlar için ayrı panolar tasarlayın

Her kitleye hizmet eden tek bir pano yerine, amaca özel ayrı görünümler
kurun: ekip düzeyinde bir operasyonel pano (günlük ya da haftalık ritim,
ekibin kendi kullanımı için ayrıntılı teslimat ve kalite metrikleri), bir
liderlik panosu (aylık ya da üç aylık ritim, konu 7.4'e göre sonuç ağırlıklı,
daha az metrik, daha çok bağlam) ve gerekiyorsa dışa dönük bir pano
(müşteriler, denetim organları ya da kamu için; konu 1.4'ün sonuca göre
ölçeklenen titizliğiyle özenle yönetilen). Her biri farklı bir karara
hizmet eder ve tek bir ana panonun süzülmüş görünümü olarak değil, o karar
için özel olarak tasarlanmalıdır.

### Dürüst görselleştirme standartlarını tutarlı biçimde uygulayın

Konu 1.6'nın istatistiksel dürüstlük ilkelerini isteğe bağlı bir cila olarak
değil, katı tasarım gereksinimi olarak izleyin: belgelenmiş, görünür bir
istisna yoksa değer eksenlerini sıfırdan başlatın, tek bir anlık görüntü
yerine zaman içindeki eğilimi gösterin, çarpık verilerde ortalama yerine
medyan ve yüzdelikleri kullanın ve okuyucu gerçek bir değişimi gürültüden
ayırabilsin diye bağlamı (dağıtımlar, olaylar, kurumsal değişiklikler)
işaretleyin. Konu 1.6'nın adını koyduğu özel grafik manipülasyonlarından
kaçının: sahte ilişki izlenimi veren çift eksenler, özenle seçilmiş tarih
aralıkları ve oranı bozan 3 boyutlu efektler.

### Bir metriği eşlendiği korkuluktan farklı görünümlerde asla ayırmayın

Konu 1.2'nin korkuluk eşleme ilkesini katı bir pano tasarım kuralı olarak
izleyin: dağıtım sıklığı ile değişiklik başarısızlık oranı (konu 2.10) aynı
görünümde, her zaman birlikte görünür biçimde bulunmalıdır; farklı kitlelerin
tek başına bakabileceği bir "hız" panosuna ve ayrı bir "kalite" panosuna asla
bölünmemelidir. Bu küçük bir yerleşim tercihi değildir; bir metriği
korkuluğundan farklı panolarda ayırmak, her iki sayı da bir yerde teknik
olarak izleniyor olsa bile, konu 1.2'nin uyardığı teşvike maruz kalma riskini
aynen yeniden yaratır.

### Her panoya adı belli bir sahip ve bir gözden geçirme ritmi atayın

Konu 1.4'ün yönetişim disiplinini yalnızca panonun gösterdiği tekil
metriklere değil, doğrudan panonun kendisine uygulayın: panonun doğruluğunun
ve ilgililiğinin sürmesinden sorumlu bir sahip belirleyin ve metriklerin
eklendiği, emekli edildiği ya da yeniden ele alındığı bir gözden geçirme
ritmi koyun. Sahipsiz bir pano, sahipsiz bir metriğin çürüdüğü gibi çürür
(konu 1.4); budama yetkisi ya da sorumluluğu kimsede olmayan eskimiş kutucuklar
birikir.

### Panonun ne için kullanılmadığını açık ve görünür biçimde belirtin

Konu 1.1'in tanılayıcı ile değerlendirici ayrımını izleyerek, metrikleri
bireysel değerlendirme için kötüye kullanılabilecek her panoda, panonun ne
için kullanılmadığını doğrudan ve görünür biçimde yazın: "bu metrikler ekip
ve sistem sağlığını tanımlar; bireysel performans değerlendirmelerinde
kullanılmaz." Özellikle etkinlik verisi (konu 3.4) ya da nöbet yükü verisi
(konu 6.3) içeren panolara uygulanan bu açık ifade, küçük bir tasarım
tercihidir, ancak kitabın baştan sona uyardığı değerlendirmeye kayma
eğilimini önlemede orantısız büyük bir etki yapar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Tüm kitleler için tek, kapsamlı pano | Tek bir ürünü kurmak ve bakımını yapmak basit | Belirli hiçbir kitleye iyi hizmet etmez; kimisi için bunaltıcı, kimisi için yetersiz |
| Kitleye özgü panolar | Her biri gerçek kararına iyi hizmet eder | Kurulacak, bakımı yapılacak ve tutarlı tutulacak daha çok ürün |
| Her görünümde kapsamlı metrik kapsamı | Hiçbir şey atlanmaz | Pano yorgunluğu; o kitlenin kararı için gerçekten önemli metrikleri gömer |
| Pano başına asgari, karar odaklı metrik seçimi | Odaklı, eyleme dönük, güvenmesi daha kolay | Bilinçli bir seçme disiplini gerektirir ve ilgili bir şeyi dışarıda bırakma riski taşır |

Temel gerilim **kapsamlılık ile odak** arasındadır; bu, konu 1.1'in temel
geriliminin özel olarak pano tasarımına uygulanmış hâlidir. Kapsamlı bir pano
daha güvenli hissettirir, hiçbir şey dışarıda kalmaz, ama gerçek kitlesine
çoğunlukla, o kitlenin vermesi gereken kararlar etrafında kurulmuş odaklı bir
panodan daha kötü hizmet eder. Gerilimi, tek bir kapsamlı pano yerine amaca
özel birden çok pano kurarak çözün; birkaç odaklı ürünün biraz daha yüksek
bakım maliyetini, her birinin hedef kitlesine gerçekten yararlı olması
karşılığında kabul edin.

## Ekibinizle tartışılacak sorular

1. **Mevcut panomuz aynı anda birden çok kitleye hizmet etmeye mi çalışıyor
   ve öyleyse gerçekte kime iyi hizmet ediyor?** Mevcut panonuzu gözden
   geçirip gerçek asıl kitlesini amaçlanan kitlesiyle karşılaştırın; burada
   uyumsuzluk yaygındır ve doğrudan adlandırmaya değer.

2. **Panolarımızdan herhangi biri, teşvik edilen bir metriği eşlenmiş
   korkuluğundan farklı görünümlere ayırıyor mu?** Panolarınızı özellikle bu
   örüntü için denetleyin; başlangıç olarak 2. bölümün DORA metriklerini ve
   eşlemelerini tek tek kontrol edin.

3. **Panomuzun görselleştirmeleri konu 1.6'nın dürüst görselleştirme
   standartlarından geçer mi: sıfırdan başlayan eksenler, anlık görüntü yerine
   eğilim, çarpık veride ortalama yerine medyan?** Mevcut grafiklerinizi bu
   kontrol listesine doğrudan karşı gözden geçirin.

4. **Bakımını yaptığımız her panonun adı belli bir sahibi ve gözden geçirme
   ritmi var mı, yoksa bazıları doğruluğundan ve ilgililiğinden kimsenin
   sorumlu olmadığı biçimde mi duruyor?** Sahibi olmayan bir pano varsa bu
   boşluğu hemen kapatmaya değer, çünkü sahipsiz bir pano sahipsiz bir metrik
   gibi çürür.

5. **Metrikleri bireysel değerlendirme için kötüye kullanılabilecek herhangi
   bir pano, ne için kullanılmadığını açıkça belirtiyor mu?** Etkinlik ya da
   nöbet yükü verisi içeren panoları özellikle bu açık ifade için kontrol
   edin.

6. **Panolarımızı bugün sıfırdan, kitle kitle, her kitlenin vermesi gereken
   karardan yola çıkarak yeniden tasarlasaydık, sonuç mevcut olandan ne kadar
   farklı görünürdü?** Bu düşünce deneyi, pano yapısının ne kadarının bilinçli
   tasarımla değil, atalet yoluyla biriktiğini sıklıkla gösterir.

## Sektörel bakış

**Startup.** Bu ölçekte tek, basit bir pano genellikle uygundur; çünkü tüm
ekip ve liderlik çoğunlukla büyük oranda aynı kararları veren aynı küçük
gruptur. Küçük ölçekte bile dürüst görselleştirme standartlarına ve
değerlendirme için kullanılmadığını belirten açık ifadeye odaklanın, çünkü bu
alışkanlıkları erken edinmek sonradan eklemekten çok daha kolaydır.

**Küçük işletme.** Hazır araçların çoğu makul varsayılan panolar sunar; asıl
disiplin, aracın varsayılan olarak hesapladığı her metriği göstermek yerine,
panoyu işletmenize özgü gerçek bir kararı bilgilendiren birkaç metriğe
indirmektir.

**Kurumsal.** Temel zorluk burada katılık olmadan tutarlılıktır: onlarca ekip
panosunun güvenilir ve karşılaştırılabilir olmak için yeterli ortak standarda
(dürüst görselleştirme kuralları, korkuluk eşleme, sahiplik disiplini)
ihtiyacı vardır; yine de her ekibin kendi operasyonel ihtiyaçları kendi
görünümünü şekillendirebilmelidir. Katı, tek beden herkese uyar bir şablona
ya da tamamen yapısız, tutarsız yerel panolara değil, yönetişimle (konu 1.4)
uygulanan ortak bir pano tasarım standardına yatırım yapın.

**Kamu.** Dış denetime ya da gözetime açık panolar, dürüst görselleştirmede ve
açık yönetişim belgelemesinde özel titizlik ister; çünkü dış bir denetçinin
bulduğu yanıltıcı bir grafik, ilgili metriğin çok ötesinde kurumsal itibarı
zedeler. Bu konunun önerilerinin en yüksek standardını özellikle dışa dönük
her panoya uygulayın.

## Örnekler

**Kurumsal.** Bir lojistik teknolojisi şirketi yıllarca, hem bireysel
mühendislik ekiplerinin hem de üst yönetim ekibinin baktığı, bireysel commit
sayılarından üç aylık iş sonuçlarına kadar her şeyi kapsayan kırktan fazla
kutucuklu tek bir "mühendislik sağlığı" panosu işletti. İki kitle de onu
gerçekten yararlı bulmadı: mühendisler iş sonucu kutucuklarını günlük
işleriyle ilgisiz diye yok saydı, yöneticiler ise yorumlama bağlamı olmayan
ayrıntılı teslimat metrikleri karşısında bunaldı. Panoyu odaklı, altı
kutucuklu bir ekip operasyonel panosuna ve ayrı, sekiz kutucuklu bir liderlik
panosuna bölmek (ikisi de bu konunun korkuluk eşleme ve dürüst görselleştirme
standartlarını izleyerek) ölçülebilir biçimde daha yüksek etkileşim sağladı
ve en önemlisi yöneticiler, kendi liderliği sorduğunda sayıların ne anlama
geldiğini ilk kez açıklayabildiklerini bildirdi.

**Kamu.** Bir eyalet hükümetinin kamuya dönük dijital hizmetler panosu,
"ortalama" işlem süresini gösteren ve mütevazı bir iyileşmeyi görsel olarak
abartan kesik bir y ekseni kullanan bir grafik nedeniyle kamuoyunda
eleştirilmişti; bu, konu 1.6'nın dürüst görselleştirme standartlarının ihlaliydi
ve bir dış teknoloji gazetecisi bunu yakalayıp haberleştirmişti. Kurumun, bu
konunun standartlarına açıkça dayanarak yeniden tasarladığı pano (sıfırdan
başlayan eksenler, sağa çarpık işlem süresi verisi için ortalama yerine
medyan ve her kayda değer değişiklik için açıkça işaretlenmiş bağlam) sonraki
bir yazıda şeffaf kamu sektörü veri sunumunun bir modeli olarak özellikle
övüldü ve önceki yanıltıcı grafiğin zedelediği itibarı doğrudan onardı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Bilinçli, kitleye özgü, dürüstçe tasarlanmış panoların getirisi gerçek
kullanım ve gerçek güvendir: yukarıdaki lojistik şirketi örneği, kötü
tasarlanmış tek bir panonun doğrudan maliyetini (her iki hedef kitleden de
düşük etkileşim) ve yeniden tasarımın doğrudan faydasını (her kitle kendi
kararları için gerçekten kurulmuş bir görünüm aldığında ölçülebilir biçimde
daha yüksek etkileşim) gösterir.

Toplam sahip olma maliyeti, tek bir kapsamlı ürün yerine birden çok amaca
özel panonun tasarım ve bakım çabası ile bu konunun önerdiği süregiden
yönetişim disiplinidir (adı belli sahiplik, gözden geçirme ritmi). Bu maliyet,
kullanılmayan bir panonun ya da daha kötüsü kitlesini aktif olarak yanıltan ve
itibar zedeleyen bir panonun riskiyle kıyaslandığında mütevazıdır; yukarıdaki
kamu örneği bunu somut olarak gösterir.

## Anti-desenler ve tuzaklar

- **Her kitleye hizmet etmeye çalışan tek pano:** çoğunlukla kimseye iyi hizmet
  etmez.
- **Teşvik edilen bir metriği korkuluğundan farklı görünümlerde ayırmak:**
  konu 1.2'nin uyardığı teşvike maruz kalma riskini yeniden yaratır.
- **Dürüst olmayan görselleştirme tercihleri:** kesik eksenler, özenle seçilmiş
  tarih aralıkları ve çift eksenler okuyucuyu yanıltır, bazen gerçek itibar
  sonuçlarıyla.
- **Panonun kendisi için adı belli bir sahip ya da gözden geçirme ritmi
  olmaması:** ürün, sahipsiz bir metrik gibi çürür.
- **Bir panonun ne için kullanılmadığına dair açık bir ifade olmaması:**
  kitabın baştan sona uyardığı değerlendirmeye kaymayı davet eder.
- **Odaklı, karar güdümlü seçme yerine kapsamlı kutucuk kapsamı:** pano
  yorgunluğu yaratır ve gerçekten önemli olanı gömer.

## Olgunluk modeli

- **Düzey 1, Başlatma:** Tek, derlenip toparlanmamış bir pano (varsa) tüm
  kitlelere kötü hizmet eder; dürüst görselleştirme standardı ya da korkuluk
  eşlemesi yoktur.
- **Düzey 2, Geliştirme:** Bazı kitleye özgü görünümler vardır, ancak
  görselleştirme standartları tutarsızdır ve sahiplik belirsizdir.
- **Düzey 3, Standartlaştırma:** Tutarlı, dürüst görselleştirme standartları
  ve korkuluk eşlemesi olan kitleye özgü panolar kurum genelinde oluşturulmuş
  ve her birinin adı belli bir sahibi vardır.
- **Düzey 4, Yönetme:** Panolar düzenli bir ritimle gözden geçirilir, gerekli
  yerlerde değerlendirme için kullanılmadığına dair açık ifadeler bulunur ve
  eskimiş kutucuklar aktif olarak budanır.
- **Düzey 5, Orkestrasyon:** Kurumun pano tasarım pratiği güvenilir, iyi
  yönetilen bir yetkinliktir ve kurum, dürüst, iyi tasarlanmış panoların
  paydaş güvenini onardığı ya da kurduğu belirli örnekleri gösterebilir.

## Tartışma önerileri

1. Mevcut panomuzun gerçek asıl kitlesi kim, amaçlanan kitlesine kıyasla?
2. Panolarımızdan herhangi biri bir metriği korkuluğundan ayırıyor mu?
3. Mevcut grafiklerimiz dürüst görselleştirme denetiminden geçer mi?
4. Bakımını yaptığımız her panonun açıkça adı konmuş, sorumlu bir sahibi var mı?
5. Panolarımızın sıfırdan, kitle öncelikli bir yeniden tasarımı nasıl görünürdü?

## Temel çıkarımlar

- Herkese hizmet etmeye çalışan tek bir kapsamlı ürün yerine, belirli
  kararlar için **kitleye özgü panolar** tasarlayın.
- **Dürüst görselleştirme standartlarını** (konu 1.6) katı gereksinim olarak
  uygulayın: sıfırdan başlayan eksenler, anlık görüntü yerine eğilim, çarpık
  veride ortalama yerine medyan.
- **Teşvik edilen bir metriği korkuluğundan asla ayırmayın**; farklı
  görünümlerde değil, korkuluk çiftlerini aynı panoda tutun.
- Her panoya, konu 1.4'ün yönetilen her metrik için istediği gibi **adı belli
  bir sahip ve gözden geçirme ritmi** atayın.
- Özellikle etkinlik ya da operasyonel yük verisinin bireysel değerlendirme
  için kötüye kullanılabileceği yerlerde, **bir panonun ne için
  kullanılmadığını** açıkça belirtin.

## Kaynaklar ve ileri okuma

- *The Visual Display of Quantitative Information*, Edward R. Tufte (dürüst,
  yüksek bütünlüklü veri görselleştirmenin temel metni).
- *Storytelling with Data*, Cole Nussbaumer Knaflic (iş kitleleri için pratik
  pano ve grafik tasarımı).
- *Information Dashboard Design*, Stephen Few (etkili, dürüst iletişim için
  panoya özgü tasarım ilkeleri).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu konunun doğrudan pano yerleşimine uyguladığı
  metrik eşleme disiplini).
