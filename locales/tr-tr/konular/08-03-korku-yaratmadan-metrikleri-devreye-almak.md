# 8.3 Korku yaratmadan metrikleri devreye almak

## Genel bakış ve motivasyon

Bu konu, gerçek anlamda, konu 1.2'nin Goodhart yasasını tanıttığı günden beri
bu kitabın savunduğu her şeyin pratik doruk noktasıdır: kötü devreye alınmış,
güven yerine korku doğuran bir metrik programı, her bir metrik ne kadar özenle
tasarlanmış olursa olsun, sonraki her konunun uyardığı manipülasyon davranışını
garanti eder. Bir kurum her teknik ayrıntıyı doğru yapabilir (dürüst
görselleştirme, korkuluk eşleme, özenli yönetişim) ve yine de devreye alma
sürecinin kendisi mühendislere bu sayıların onlara yardım etmek için değil,
onları yargılamak için var olduğunu öğretiyorsa, bozulmuş, güvenilmez bir
metrik programı üretebilir.

Buradaki mekanizma açık ve bu kitabın boyunca andığı kurumsal davranış
araştırmalarında iyi belgelenmiş durumdadır: bir metriğin kendilerine karşı
kullanılacağından korkan insanlar, [psikolojik güvenliği](https://en.wikipedia.org/wiki/Psychological_safety)
zayıflatarak tam da konu 1.2'nin öngördüğü gibi tepki verir; asıl gerçeklik
yerine sayıyı optimize ederler, çünkü kendilerini koruma güdüsü anlık ve
kişiseldir, kurumsal öğrenmeye verilen zarar ise dağınık ve gecikmelidir. Bu
bir bireysel karakter zafiyeti değil, gerçek bir tehdide verilen rasyonel
bir yanıttır ve kalıcı tek çözüm, insanlardan buna rağmen daha dürüst
davranmalarını istemek değil, tehdidi ortadan kaldırmaktır.

Büyük ekipler için bu konunun rehberliği en çok, güvenin henüz ne yönde
kurulduğunun belli olmadığı ve ilk izlenimlerin kalıcı beklentiler yarattığı
ilk devreye alma anında önem kazanır. Kurum genelinde yeni bir metrik programı
başlatan kurumsal şirketler, tek bir kötü yönetilmiş erken olayın (bir ekibin
metriklerinin cezalandırıcı kullanılması) tüm devreye almadaki güveni
zehirleme riskini taşır; metrik programlarını çoğunlukla mevcut sendika
korumaları, kamu görevlisi kültürü ya da ölçüm girişimlerine karşı tarihsel
güvensizlik bağlamında başlatan kamu kuruluşlarının ise bu konunun
rehberliğini özel bir özen ve sabırla uygulaması gerekir.

## Temel ilkeler

- **Korku, veriyi metrik tasarımındaki her teknik kusurdan daha hızlı ve daha
  köklü biçimde bozar.** Kusursuz tasarlanmış ama kötü devreye alınmış bir
  metrik yine manipüle edilir.
- **Güven, yalnızca bir politika beyanıyla değil, gösterilmiş, tutarlı ve
  cezalandırıcı olmayan kullanımla kurulur.** Birden çok döngü boyunca
  eylemler güven kurar; tek başına sözler kurmaz.
- **Erken devreye alma olayları kalıcı beklentiler yaratır.** Bir metriğin
  sonuç doğuran bir şeye ilk birkaç kez dokunuşu, tüm programın bundan sonra
  nasıl algılanacağını belirler.
- **Amaç ve süreç konusundaki şeffaflık, tek başına güvenceden daha çok
  korkuyu azaltır.** İnsanlar yalnızca kendilerine söylenene değil,
  görebildikleri ve anlayabildikleri şeye güvenir.
- **Bu, bir kerelik devreye alma duyurusu değil, sürekli bir kurumsal
  disiplindir.** Korku, gerçekten güvenilir bir başlangıçtan sonra bile
  yavaş yavaş geri sızabilir.

## Öneriler

### Amacı ve amaç dışı olanları, kaygılar doğduktan sonra değil, devreye almadan önce açıkça iletin

Konu 1.4'ün metrik tüzüğü disiplinini izleyerek, yeni bir metrik programının
amacını ve en önemlisi açık amaç dışı olanlarını (ayrıca ve açıkça duyurulmuş
bir politika olmadıkça bireysel performans değerlendirmesi için asla
kullanılmaması, konu 1.1'e göre) mühendisler endişelenmeye başladıktan sonra
tepkisel olarak değil, başlatmadan önce iletin. Bir metriğin ne için
kullanılmadığı konusunda peşinen, açık sözlü olmak, aksi hâlde boşluğu
dolduran ve erken, geri alınması zor izlenimleri şekillendiren kaygılı
tahminleri önler.

### Ölçülen insanları tasarım sürecine dahil edin

Kendi işlerini tanımlayacak metriklerin tasarımına yardım eden mühendisler, bir
sistemin kendilerine hiçbir söz hakkı tanınmadan dayatıldığı mühendislere kıyasla
bu metriklerden çok daha az korkar ya da bunlara çok daha az içerler. Ekip
temsilcilerini, hangi metriklerin izleneceğini, nasıl görselleştirileceğini ve
hangi korkulukların uygulanacağını seçmeye doğrudan dahil edin; tamamen yukarıdan
aşağıya bir buyruk yerine, kitabın ekip düzeyinde sahiplenmeye (konu 1.4)
tutarlı vurgusunu izleyin.

### Salt tanılayıcı kullanımla başlayın ve herhangi bir değerlendirici kullanım akla gelmeden önce bunu birden çok döngüde kanıtlayın

Konu 1.1'in tanılayıcı ile değerlendirici ayrımını doğrudan izleyin: yeni bir
metrik programına yalnızca sistemleri anlamak ve iyileştirmek için kullanılan,
bireysel ya da ekip değerlendirmesiyle hiçbir bağlantısı olmayan, tamamen
tanılayıcı kipte başlayın ve daha geniş kullanım üzerine herhangi bir konuşma
başlamadan önce bu disiplini birkaç raporlama döngüsü boyunca görünür biçimde
sürdürün. Bu yolla, zaman içinde gösterilen kendini tutmayla kurulan güven,
yalnızca bir politika belgesinde öne sürülen güvenden çok daha kalıcıdır.

### İlk kötü yönetilen olaya hemen ve görünür biçimde yanıt verin

Bir metrik cezalandırıcı biçimde, bir kez bile, gayriresmî olarak bile kötüye
kullanılırsa, sessizce geçmesine izin vermek yerine hemen, görünür biçimde ve
doğrudan ele alın. Bir kurumun ilk kötü yönetim olayına verdiği yanıt, tüm ekibin
ya da kurumun bundan sonra programın bütününe duyacağı güveni şekillendirmede
orantısız derecede önemlidir; hızlı, şeffaf bir düzeltme, beyan edilen
cezalandırıcı olmayan amaca gerçek bağlılığı gösterirken, sessizlik ya da
sessizce bırakılmış, ele alınmamış bir istisna, manipülasyon davranışını en
başta güdüleyen korkuyu tam olarak doğrular.

### Manipülasyon riskini, gizli bir yönetim kaygısı olarak değil, ortak ve şeffaf bir konuşma konusu yapın

Manipülasyon riskini liderliğin özelde kaygılandığı bir şey olarak ele almak
yerine, konu 1.2'nin korkuluk eşleme mantığını ölçülen ekiplerle açıkça paylaşın:
belirli bir korkuluğun neden var olduğunu, hangi manipülasyon örüntüsünü
yakalamak için tasarlandığını doğrudan anlatın ve korkuluğun iyi tasarlanıp
tasarlanmadığı konusunda ekibin kendi görüşünü isteyin. Bütün ekibi, manipülasyon
için izlenen özneler olarak değil, manipülasyonu önleme ortakları olarak
çerçeveleyen bu şeffaflık, riski hiç açıkça tartışmadan manipülasyonu yukarıdan
sessizce kollayan bir sisteme kıyasla metrik programıyla temelden farklı bir
ilişki kurar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Asgari ekip katılımıyla yukarıdan aşağıya buyruk | Hızlı devreye alınır, tutarlı tasarım | Korkuyla güdülenen manipülasyon riski yüksek, başlangıçtan itibaren düşük güven |
| Ekibin katıldığı, birlikte tasarlanan devreye alma | Gerçek güven ve sahiplenme kurar, manipülasyon riski düşük | Devreye alması daha yavaş, daha çok koordinasyon çabası ister |
| İlk günden itibaren hemen değerlendirici kullanım | Verimli hissettirir, metrikleri sonuçlara çabuk bağlar | Henüz hiçbir güven kurulmadan en yüksek korku ve manipülasyon riskini doğurur |
| Herhangi bir değerlendirici kullanımdan önce uzun, salt tanılayıcı kanıtlama dönemi | Kalıcı, kanıta dayalı güven kurar | Liderliğin sonunda isteyebileceği değerlendirici kullanım senaryosunun gerçekleşmesi daha yavaş |

Temel gerilim **devreye alma hızı ile güven kurma** arasındadır. Hızlı, yukarıdan
aşağıya bir devreye alma bir metrik programını çabuk çalıştırır, ancak kitabın
ilk konusundan beri uyardığı korkuyu ve manipülasyonu doğurma riski gerçektir;
daha yavaş, ekibin katıldığı, tanılayıcı öncelikli bir devreye alma daha uzun
sürer, ama ortaya çıkan veriyi toplamaya değer kılan kalıcı güveni kurar.
Gerilimi kararlılıkla güven kurmadan yana çözün; çünkü hızlı başlayıp manipüle
edilmiş, güvenilmez veri üreten bir metrik programı, ne kadar çabuk devreye
alınmış olursa olsun, bu kitabın savunduğu hiçbir şeyi gerçek anlamda
başaramamıştır.

## Ekibinizle tartışılacak sorular

1. **Mevcut metrik programımızın amacı ve açık amaç dışı olanları devreye
   almadan önce mi iletildi, yoksa mühendisler önce bundan haberdar olup nasıl
   kullanılacağına dair güvenceyi ancak sonradan mı duydu?** Güvence
   proaktif değil tepkisel geldiyse, bu sıralama bile erken güveni olumsuz
   etkilemiş olabilir; dürüstçe adlandırmaya değer.

2. **Ölçülen insanlar, kendi işlerini tanımlayan metriklerin tasarımına
   dahil edildi mi, yoksa sistem hiçbir söz hakkı tanınmadan mı dayatıldı?**
   Gerçek devreye alma sürecinizi bu özel sınamaya göre değerlendirin; çünkü
   katılım, ortaya çıkan metrik tasarımının ne kadar iyi olduğundan bağımsız
   olarak önemlidir.

3. **Metrik programımız birden çok raporlama döngüsü boyunca gerçekten salt
   tanılayıcı kullanımı sürdürdü mü, yoksa değerlendirici kullanım güven kuran
   bir devreye almanın önereceğinden daha erken mi sızdı?** Gerçek geçmişi
   dürüstçe izleyin; buradaki kayma çoğu zaman tek bir açık politika
   değişikliğiyle değil, yavaş yavaş ve gayriresmî olarak gerçekleşir.

4. **Bir metrik hiç cezalandırıcı biçimde kötüye kullanıldı mı, bir kez bile,
   gayriresmî olarak bile ve kurum nasıl yanıt verdi?** Olduysa, yanıtın hızlı
   ve görünür mü yoksa sessiz ve ele alınmamış mı olduğunu dürüstçe
   değerlendirin; çünkü bu yanıt, programın bütününe duyulan güveni asıl
   olaydan çok daha fazla şekillendirdi.

5. **Ölçülen ekipler her korkuluğun neden var olduğunu anlıyor mu, yoksa
   manipülasyonu önleme mantığı onlara hiç doğrudan anlatılmayan özel bir
   yönetim kaygısı olarak mı kalıyor?** Kurumunuzun korkuluk gerekçelendirmesinin
   (konu 1.2) şeffaf biçimde paylaşılıp paylaşılmadığını ya da dile
   getirilmemiş, perde arkası bir tasarım değerlendirmesi olarak kalıp
   kalmadığını tartışın.

6. **Metrik devreye almamıza bugün sıfırdan, bu konunun rehberliğini tam olarak
   uygulayarak başlasaydık, süreç gerçekte olandan ne kadar farklı görünürdü?**
   Bu geriye dönük düşünce deneyi, güven kurmanın zaman baskısı altında
   kısa kesildiği belirli, adlandırılabilir noktaları çoğu zaman ortaya
   çıkarır; asıl devreye alma geri alınamasa bile bundan öğrenmeye değer.

## Sektörel bakış

**Startup.** Bu ölçekte güven kurmak çoğunlukla daha kolaydır, çünkü doğrudan
günlük konuşma bu konunun önerdiği şeffaflığı doğal olarak sağlar. Risk,
amacın ve amaç dışı olanların bilinçli iletişimini, küçük, yakın bir ekipte
gereksiz hissettirdiği için atlamaktır; bu varsayım, ekip büyüdükçe ve yeni
işe alınanlar aynı ortak bağlam olmadan katıldıkça sessizce çökebilir.

**Küçük işletme.** Yeni bir metriğin neden getirildiği ve ne için kullanılıp
kullanılmayacağı üzerine, kaygılar yüzeye çıkmadan önce, devreye almadan önce
yapılan basit, doğrudan bir konuşma, bu ölçekte biçimsel bir sürece gerek
duymadan bu konunun değerinin çoğunu yakalar.

**Kurumsal.** Büyük bir kurumun ölçeği ve kişisizliği, bu konunun rehberliğini
hem iyi uygulamayı zorlaştırır hem de doğru yapmayı daha kritik kılar; çünkü
tek bir kötü yönetilmiş olay, doğrudan yaşamak yerine dolaylı duyan onlarca
ekibin güvenini zehirleyebilir. Bu konunun önerdiği uzun, tanılayıcı öncelikli
kanıtlama dönemine bilinçli olarak yatırım yapın ve herhangi bir metrik kötüye
kullanım olayı yaşanmadan önce açık, hızlı, görünür bir yanıt protokolü
oluşturun.

**Kamu.** Kamu kuruluşları çoğunlukla metrik programlarını mevcut sendika
korumaları, yerleşik kamu görevlisi kültürü ve bazı durumlarda geçmiş
performans yönetimi tartışmalarına bağlı ölçüm girişimlerine karşı tarihsel
güvensizlik bağlamında başlatır. Bu konunun rehberliğini özel bir sabır ve
resmiyetle uygulayın; gerekirse sendika ya da personel temsilcilerinin
görüşünü doğrudan tasarım sürecine dahil edin ve güven kurma takviminin tipik
bir özel sektör bağlamından gerçekten daha uzun olmasını bekleyin.

## Örnekler

**Kurumsal.** Bir yazılım şirketinin, tamamen merkezi bir platform ekibince
ekip düzeyinde hiçbir katkı alınmadan tasarlanan kapsamlı mühendislik metrikleri
panosunun ilk devreye alınışı, yaygın ve sessiz bir direnişle karşılandı:
kurum genelindeki mühendisler haftalar içinde, güvenilmez, yukarıdan aşağıya
bir metrik sistemi için konu 1.2'nin öngördüğü gibi, kendi bildirdikleri
sayıları gayriresmî olarak manipüle etmeye başladı. Altı ay sonraki yeniden
başlatma, bu kez ekip temsilcilerini doğrudan metrik seçimine ve korkuluk
tasarımına dahil ederek ve daha geniş kullanım konuşulmadan önce altı aylık
salt tanılayıcı bir dönemi açıkça taahhüt edip gerçekten sürdürerek, bir yıl
içinde ölçülebilir biçimde daha güvenilir veri üretti: kendi bildirilen ve
işlem hattıyla ölçülen dağıtım sayılarını karşılaştıran bir iç denetim, ikisi
arasındaki farkın ilk devreye almanın erken aylarına kıyasla büyük ölçüde
kapandığını buldu.

**Kamu.** Bir eyalet hükümeti kurumunun mühendislik metrikleri getirmeye yönelik
ilk girişimi, iki yıl önce, bir yöneticinin bir performans görüşmesinde bir
bireyin etkinlik verisine gayriresmî olarak atıfta bulunduğu tek bir olay
nedeniyle tümüyle terk edilmişti; bu, yalıtılmış ama ele alınmamış bir olaydı
ve yıllar boyunca kurum genelinde tüm girişime duyulan güveni zehirlemişti;
asıl program sessizce rafa kaldırıldıktan çok sonra bile personel hâlâ "şu
metrik meselesi"nden gözle görülür bir kuşkuyla söz ediyordu. Bilinçli olarak
yeniden başlatılan yeni program bu geçmişi doğrudan ve kamuya açık biçimde ele
aldı: geçmişteki kötü yönetimi kabul etti, adı belli, hesap verebilir bir
yönetici sponsorla belirli, yayımlanmış bir cezalandırıcı olmayan kullanım
politikasını taahhüt etti ve gelecekteki her kötüye kullanım kaygısı için hızlı,
şeffaf bir yanıt protokolü oluşturdu. Geçmiş başarısızlığın, tarih yokmuş gibi
yeniden başlatmak yerine, bu açık kabulü, personel temsilcilerince ikinci
girişimin birincinin kazanamadığı gerçek güveni kazanmasının nedeni olarak
özellikle anıldı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Güven kuran, korkudan kaçınan bir devreye almanın getirisi, çok basitçe,
güvenilir veridir; bu olmadan bu kitabın özenli metrik tasarımı çalışmasındaki
her diğer konu gerçek değeri olan hiçbir şey üretmez. Yukarıdaki kurumsal örnek
bunu somut ve ölçülebilir biçimde gösterir: yeniden başlatılan programın verisi,
orijinal, korkuyla güdülen devreye almanın verisinden kanıtlanabilir biçimde
daha doğruydu; bu, ek güven kurma yatırımının doğrudan, nicelleştirilebilir
getirisidir.

Toplam sahip olma maliyeti esas olarak zaman ve kurumsal sabırdır: uzun,
tanılayıcı öncelikli kanıtlama dönemi, tasarımda ekip katılımı çabası ve herhangi
bir kötüye kullanım olayına hızlı ve görünür yanıt verme konusundaki sürekli
disiplin. Bu maliyet önemlidir, ancak bu kitaptaki diğer her konunun dayandığı
güvenilir verinin gerekli, kaçınılmaz bedelidir; bu yatırımı atlayan hızlı bir
devreye alma, tamamlanmış görünen ama sessizce değersiz, kitabın ilk esas
konusundan beri uyardığı manipülasyonla bozulmuş bir metrik programı üretir.

## Anti-desenler ve tuzaklar

- **Metrik tasarımında ekip katılımı olmayan, yukarıdan aşağıya devreye alma:**
  metriklerin kendisi ne kadar iyi tasarlanmış olursa olsun, baştan korku ve
  manipülasyon doğurur.
- **Amacın ve amaç dışı olanların proaktif değil tepkisel iletilmesi:**
  kaygılı tahminlerin boşluğu doldurmasına ve erken, geri alınması zor
  izlenimleri şekillendirmesine izin verir.
- **Gerçek bir salt tanılayıcı güven dönemi geçmeden değerlendirici kullanıma
  acele etmek:** yeni bir metrik programının manipülasyon davranışını hemen
  doğurmasının en yaygın yolu.
- **Bir metrik kötüye kullanım olayına sessiz, ele alınmayan bir yanıt:**
  manipülasyonu güdüleyen korkuyu tam olarak doğrular ve programın bütününe
  duyulan güvene kalıcı zarar verir.
- **Korkuluk ve manipülasyonu önleme mantığını özel bir yönetim kaygısı olarak
  tutmak:** ölçülen ekiplerle şeffaf, ortak gerekçelendirmenin güven kurma
  fırsatını kaçırır.
- **Daha önce kötü yönetilmiş bir metrik programını, geçmiş başarısızlığı
  doğrudan kabul etmeden yeniden başlatmak:** yetersiz şeffaflıktaki asıl
  hatayı, bu kez ele alınmamış bir geçmişle ağırlaşmış olarak tekrarlar.

## Olgunluk modeli

- **Düzey 1, Başlatma:** Metrikler ekip katılımı olmadan yukarıdan aşağıya
  devreye alınır; amaç ve amaç dışı olanlar, iletiliyorsa, tepkisel olarak
  iletilir.
- **Düzey 2, Geliştirme:** Bir miktar iletişim ve ekip katılımı olur, ancak
  sürdürülen bir salt tanılayıcı kanıtlama dönemi ve açık bir kötüye kullanıma
  yanıt protokolü yoktur.
- **Düzey 3, Standartlaştırma:** Yeni metrik programları tutarlı biçimde
  proaktif iletişim, tasarımda ekip katılımı ve kurum genelinde taahhüt edilmiş
  bir salt tanılayıcı kanıtlama dönemiyle devreye alınır.
- **Düzey 4, Yönetme:** Hızlı, şeffaf, sınanmış bir kötüye kullanıma yanıt
  protokolü vardır ve uygulanmıştır; korkuluk gerekçelendirmesi standart
  uygulama olarak ölçülen ekiplerle açıkça paylaşılır.
- **Düzey 5, Orkestrasyon:** Kurumun, disiplinli, güven kuran devreye alma
  pratiğine doğrudan atfedilebilir, güvenilir, düşük manipülasyonlu metrik
  verisine dair gösterilmiş, sürdürülen bir sicili vardır ve bu sicil, getirilen
  her yeni metrikle aktif olarak korunur ve pekiştirilir.

## Tartışma önerileri

1. Mevcut metrik programımızın amacı kaygılar doğmadan önce mi, sonra mı iletildi?
2. Ölçülen insanlar metriklerimizin tasarımına gerçekten dahil edildi mi, yoksa sistem mi dayatıldı?
3. Kurumumuz bir metriği hiç cezalandırıcı biçimde kötü yönetti mi ve nasıl yanıt verdik?
4. Ölçülen ekipler korkuluklarımızın neden var olduğunu anlıyor mu, yoksa bu gerekçe özel mi tutuluyor?
5. Metrik programımızı bugün bu konuya tam dikkat ederek yeniden başlatsaydık neyi farklı yapardık?

## Temel çıkarımlar

- **Korku, veriyi her teknik kusurdan daha hızlı ve daha köklü biçimde
  bozar**; kusursuz tasarlanmış ama kötü devreye alınmış bir metrik yine
  manipüle edilir.
- **Ölçülen ekipleri metrik tasarımına doğrudan dahil edin** ve amacı ve açık
  amaç dışı olanları devreye almadan önce proaktif olarak iletin.
- Herhangi bir değerlendirici kullanım akla gelmeden önce **salt tanılayıcı
  başlayın ve bunu birden çok döngüde kanıtlayın**.
- **İlk kötü yönetilen olaya hemen ve görünür biçimde yanıt verin**;
  sessizlik, manipülasyon davranışını güdüleyen korkuyu tam olarak doğrular.
- **Korkuluk ve manipülasyonu önleme gerekçelendirmesini** ölçülen ekiplerle
  şeffaf biçimde paylaşın; bir gözetim ilişkisi değil, ortaklık kurun.

## Kaynaklar ve ileri okuma

- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink (içsel
  ve dışsal motivasyon; korkunun metrik güdümlü davranışı neden bozduğuyla
  doğrudan ilgili).
- *The Tyranny of Metrics*, Jerry Z. Muller (kötü uygulanan metrik programlarının
  kurumsal ve kültürel maliyetleri).
- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff ve Niall Richard Murphy (ed.) (bu konunun
  olay müdahalesinden genel olarak metrik programı devreye almaya
  genişlettiği suçlamasız kültür ilkeleri).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (güvenilir, yüksek performanslı mühendislik metrikleri
  pratiğinin altındaki kurumsal kültür araştırması).
