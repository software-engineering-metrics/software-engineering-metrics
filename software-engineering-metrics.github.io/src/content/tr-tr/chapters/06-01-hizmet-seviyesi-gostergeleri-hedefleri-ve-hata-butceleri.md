# 6.1 Hizmet seviyesi göstergeleri, hedefleri ve hata bütçeleri

## Genel bakış ve motivasyon

Google'da öncülük edilen ve *Site Reliability Engineering* kitabında
belgelenen **[site güvenilirliği mühendisliği](https://en.wikipedia.org/wiki/Site_reliability_engineering)
(SRE)** disiplini, bu konunun doğrudan üzerine kurulduğu bir sözlük armağan
etti. **Hizmet seviyesi göstergesi (SLI)**, bir hizmetin sağlığının doğrudan
ölçülen bir sinyalidir: istek gecikmesi, hata oranı, erişilebilirlik. **Hizmet
seviyesi hedefi (SLO)** bu gösterge için hedef aralıktır; örneğin isteklerin
%99,9'u 200 milisaniye içinde başarılı olur. **Hata bütçesi** ise izin verilen
açıktır: başarısız olmasına izin verilen %0,1'lik istek payı. Bu pay,
ortadan kaldırılacak bir kusur olarak değil, bilinçli biçimde risk almak için
kullanılabilecek harcanabilir bir kaynak olarak ele alınır: riskli bir
değişikliği yayına almak, bir deney yürütmek ya da kusursuz güvenilirliğin
ne ulaşılabilir ne de belirli bir noktadan sonra maliyetine değer olduğunu
kabul etmek için.

Bu son fikir, yani hata bütçesinin sıfıra doğru küçültülecek bir sayı değil
harcanabilir bir kaynak olması, bu konunun ve tartışmaya açık biçimde bu
bölümün tamamının en önemli kavramıdır. Pek çok kurumu yoran bir gerilimi
çözer: mühendislik özellik yayınlamak ve makul riskler almak ister, operasyon
azami kararlılık ister. Ortak ve sayısallaştırılmış bir hata bütçesi olmadan
bu, bitmeyen ve siyasi yükü olan bir pazarlığa dönüşür. Bütçe varsa basit ve
nesnel bir kurala dönüşür: bütçe kaldıkça özgürce harcayın, tükendiğinde
otomatik olarak yavaşlayın ve kararlılık işine öncelik verin. Bu, felsefi bir
anlaşmazlığı aritmetik bir meseleye çevirir.

Büyük ekipler için SLO'lar ve hata bütçeleri, güvenilirliği her ekibin sessizce
tutturamayıp için için suçluluk duyduğu ulaşılmaz ve dile getirilmemiş bir
mutlak olmaktan çıkarıp ölçülebilir ve müzakere edilebilir kılan şeydir.
Kurumsal şirketler SLO'ları ekipler arasında ve müşterilerle net, sözleşmesel
beklentiler koymak için kullanır. Kritik kamu altyapısını işleten kamu
kurumları ise hiçbir gerçek sistemin sürdüremeyeceği kusursuzluk standardı
yerine savunulabilir, kamuya gerekçelendirilebilir güvenilirlik hedefleri
koymak için kullanır.

## Temel ilkeler

- **%100 güvenilirlik, hemen her sistem için yanlış hedeftir.** Genellikle
  ulaşılamaz ve belirli bir noktadan sonra peşinden gitmek, kullanıcıya anlamlı
  bir yarar sağlamadan hızdan fiilen vazgeçmek demektir.
- **Bir SLO, kullanıcıların gerçekten fark ettiği ve önemsediği şeyi
  yansıtmalıdır**; güven verici geldiği için seçilmiş keyfi bir yuvarlak sayıyı
  değil.
- **Hata bütçesi güvenilirliği harcanabilir bir kaynağa dönüştürür** ve hem
  mühendislik hem operasyon için, ne zaman hızlı yayınlanacağına ve ne zaman
  yavaşlanacağına dair ortak, nesnel bir kural verir.
- **SLI'lar mümkün olduğunca kullanıcının gerçek deneyiminden ölçülmelidir**;
  yalnızca bir iç sistemin kendi bildirdiği sağlıktan değil.
- **Hata bütçesinin tükenmesi, önceden belirlenmiş ve üzerinde anlaşılmış bir
  yanıtı tetikler**; her seferinde yeniden çıkan, duruma göre bir tartışmayı
  değil.

## Öneriler

### Gerçek kullanıcı deneyimini yansıtan SLI'lar seçin

Gerçek kullanıcı deneyimine olabildiğince yakın ölçülen göstergeler seçin:
kullanıcılar gerçek sorunlar yaşarken "sağlıklı" raporlayabilen iç hizmet
sağlık kontrollerini değil, uçta ya da yük dengeleyicide ölçülen istek başarı
oranını ve gecikmeyi. Kullanıcının hiçbir zaman fark etmediği bir şeyi ölçen
bir SLI, örneğin bir iç bileşen teknik olarak ayaktayken genel istek yine de
başarısız oluyorsa, araçlandırması ne kadar kolay olursa olsun yanlış şeyi
ölçüyordur.

### SLO hedefini keyfi bir yuvarlak sayıya göre değil, kullanıcıların gerçekten ihtiyaç duyduğuna göre belirleyin

Yalnızca etkileyici ölçüde titiz göründüğü için "%99,99 çalışma süresi" gibi
bir hedef koyma refleksine direnin. Bunun yerine, geçmiş olay verilerinden,
kullanıcı araştırmasından ve güvenilirliğin her ek basamağına ulaşmanın
kanıtlanmış maliyetinden yararlanarak kullanıcıların hangi güvenilirlik
düzeyini gerçekten fark edip önemsediğini araştırın. %99,9'dan %99,99'a çıkmak,
çoğu zaman %99'dan %99,9'a çıkmaktan çok daha fazla mühendislik emeğine mal
olur ve karşılığında kullanıcının algılayabileceği yarar azalır, sonunda da
ihmal edilebilir hale gelir.

### Hata bütçesini, tükenmesine önceden belirlenmiş bir yanıtı olan harcanabilir bir kaynak olarak ele alın

Hata bütçesini doğrudan SLO'dan hesaplayın (30 gün boyunca %99,9
erişilebilirlik hedefi yaklaşık 43 dakikalık izin verilen kesintiye karşılık
gelir) ve harcamayı buna karşı sürekli izleyin. Bütçe tükendiğinde ne olacağı
konusunda, belirli bir olaydan önce ve peşinen anlaşın. Yaygın ve etkili bir
politika, özellik işinin durması ve ekibin önceliğinin bütçe toparlanana kadar
otomatik olarak güvenilirlik işine kayması şeklindedir. Bu önceden belirlenmiş
kural, her olayda baskı altında aynı ödünleşimi yeniden tartışma ihtiyacını
ortadan kaldırır.

### Hata bütçesini bilinçli, bilgiye dayalı risk kararları için kullanın

Sağlıklı ve harcanmamış bir hata bütçesi biriktirilecek bir şey değildir; makul
risk almanın iznidir: yüksek ama kabul edilebilir riskli bir değişikliği
yayınlamak, bir kaos mühendisliği deneyi yürütmek (kardeş
`software-engineering-guide` kitabının kaos mühendisliği konusu bunu doğrudan
ele alır) ya da daha riskli bir mimari değişikliği kabul etmek. Çünkü bütçe,
dokunulmadan korunmak için değil, bilinçli biçimde harcanmak için vardır.
Hiç harcanmayan bir hata bütçesi, ya aşırı temkinli bir ekibe ya da elde edilen
gerçek güvenilirliğe göre fazla gevşek konmuş bir SLO'ya işaret eder; ikisi de
incelemeye değer.

### SLO'ları atalete değil kanıta dayanarak periyodik biçimde gözden geçirin ve düzeltin

Yıllar önce konmuş bir SLO artık güncel kullanıcı beklentilerini, sistem
mimarisini ya da iş önceliklerini yansıtmıyor olabilir. SLO'ları düzenli bir
ritimle gözden geçirin: geçmişte elde edilen güvenilirliğe, kullanıcı geri
bildirimine ve hedefin hâlâ anlamlı bir ödünleşim noktasını temsil edip
etmediğine bakın. Hedef ya başka yerde daha fazla hız sağlamak için
sıkılaştırılabilecek kadar kolay tutturuluyordur ya da ekibin fiilen tutturmaktan
vazgeçtiği kadar gerçekçi değildir; ikisini de fark etmeniz gerekir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmî SLO yok (örtük "olabildiğince güvenilir") | Kurulum yükü yok | Hız ile kararlılık arasında bitmeyen, dayanaksız pazarlık; ortak kural yok |
| İddialı, çok yüksek SLO (%99,99+) | Güvenilirliğe verilen ciddiyeti gösterir | Çoğu zaman gereksiz maliyet; kullanıcıların gerçekten fark ettiğinin ötesinde azalan getiri |
| Kanıta dayalı, kullanıcı deneyimine oturan SLO | Gerçek değeri yansıtır; savunulabilir ve ulaşılabilir | Doğru koymak için gerçek veri ve analiz gerektirir |
| Tükenmeye önceden belirlenmiş yanıtı olan hata bütçesi | Duruma göre pazarlığı ortadan kaldırır; nesnel, hızlı karar | Önceden belirlenmiş kurala gerçekten uymak için kurumsal destek ve disiplin gerektirir |

Temel gerilim **iddia ile ulaşılabilirlik** arasındadır. Yüksek, iddialı bir SLO
kaliteye verilen ciddiyeti gösteriyormuş gibi hissettirir. Ancak kullanıcıların
gerçekten fark ettiğinin ötesinde güvenilirlik peşinde koşmak, gerçek bir yarar
olmadan gerçek hızdan vazgeçmek demektir. Ekibin hiçbir zaman tutturamadığı
gerçekçi olmayan bir hedef ise herkese SLO'yu hiç ciddiye almamayı öğretir.
Gerilimi, SLO'yu iddiaya ya da bir skor tablosunda titiz görünme arzusuna değil,
gerçek kanıta dayandırarak çözün: kullanıcılar neyi fark ediyor, sistem geçmişte
neyi başardı, her ek basamak neye mal oluyor.

## Ekibinizle tartışılacak sorular

1. **Mevcut SLO'muz, kullanıcıların gerçekten fark ettiği şeye dair kanıta mı
   dayanıyor, yoksa yüksek bir sayı uygun biçimde ciddi hissettirdiği için mi
   iddialı olarak konuldu?** Mümkünse mevcut hedefinizin kökenini izleyin ve
   gerçek kullanıcı araştırmasını mı yoksa yalnızca mühendislik sezgisini mi
   yansıttığını dürüstçe değerlendirin.

2. **Hata bütçesi tükenmesine önceden belirlenmiş, üzerinde anlaşılmış bir
   yanıtımız var mı, yoksa ödünleşim her olduğunda yeniden mi tartışılıyor?**
   Dürüst yanıt ikincisiyse, bu boşluğu bir sonraki olay tartışmayı baskı
   altında zorlamadan önce kapatmaya değer.

3. **Hata bütçemiz hiç bilinçli biçimde, hesaplı riskli bir değişiklik ya da
   deney için harcanıyor mu, yoksa yalnızca olaylar yoluyla kazara mı
   tükeniyor?** Hiç bilinçli harcanmayan bir bütçe, bütçenin var olma
   amacı olan meşru fırsatları kaçıran aşırı temkinli bir ekibe işaret
   edebilir.

4. **SLI'larımız gerçek kullanıcı deneyiminden mi ölçülüyor, yoksa
   kullanıcıların karşılaştığını yansıtmayabilecek iç sistem sağlığından mı?**
   Mevcut araçlandırmanızı bu ayrıma göre kontrol edin; başka bakımlardan
   olgun güvenilirlik programlarında bile yaygın bir boşluktur.

5. **SLO'muzu güncel kanıta karşı en son ne zaman gözden geçirdik ve onu
   değiştirmeyi haklı kılacak bir şey, yani kullanıcı beklentileri, sistem
   mimarisi ya da iş öncelikleri, değişti mi?** Yakın tarihli bir gözden
   geçirmeyi hatırlayamıyorsanız, bu eksiklik tartışmaya değerdir.

6. **Mevcut SLO'muzu bir "dokuz" daha yukarı taşımak mühendislik emeği olarak
   bize neye mal olur ve bu maliyet gerçek bir kullanıcı yararıyla haklı
   çıkar mı?** Bu somut maliyet-fayda çerçevesi, iddia ile ulaşılabilirlik
   gerilimini soyut tercihler yerine gerçek sayılara oturtmaya yardım eder.

## Sektörel bakış

**Startup.** Resmî SLO'lar çoğunlukla çok erken dönemde gereksizdir, çünkü ekip
güvenilirlik sorunlarına doğrudan ve gayriresmî biçimde yanıt verebilir. Çalışma
süresine bağlı gerçek ödeme yapan müşterileriniz olduğunda en azından kabaca,
gayriresmî bir SLO benimseyin. Gevşek izlenen de olsa açık bir hedefin
disiplini, güvenilirlik işini özellik baskısına karşı çoğu genç şirketin
aklına gelenden daha erken önceliklendirmeye yardım eder.

**Küçük işletme.** Çoğu modern barındırma ve gözlemlenebilirlik platformu, asgari
kurulumla temel çalışma süresi ve gecikme verisi raporlar. Bunu, sınırlı
operasyonel kapasiteyle gerçekçi biçimde izleyemeyeceğiniz ve üzerinde
harekete geçemeyeceğiniz iddialı bir SLO yerine basit, ulaşılabilir bir SLO
koymak için kullanın.

**Kurumsal.** Bu ölçekte SLO'lar çoğu zaman gerçek mali sonuçları olan
sözleşmesel hizmet seviyesi sözleşmelerinin temelini oluşturur; bu da kanıta
dayalı hedef koymayı ve disiplinli hata bütçesi yönetimini özellikle önemli
kılar. Kolay erişilen iç sağlık kontrolleri yerine gerçekten kullanıcı
deneyimine oturan SLI'lara yatırım yapın ve tükenmeye önceden belirlenmiş
yanıt politikasını, baskı altında ihtiyaç duyulmadan önce, üst yönetim desteğiyle
resmen oluşturun.

**Kamu.** Kritik altyapı için kamu sektörü güvenilirlik hedefleri bazen yasal
ya da düzenleyici ağırlık taşır. Bir denetimde ya da kamuoyunun önündeki bir
olayda ortaya çıkan gerçekçi olmayan, tutturulamamış bir hedef kurumsal
itibara ciddi zarar verir. Hedefleri gerçek, belgelenmiş kullanıcı ve görev
ihtiyacına göre belirleyin ve ulaşılmaz bir kusursuzluk standardını ima etmek
yerine, bir hata bütçesinin temsil ettiği bilinçli ödünleşim konusunda kamuya
karşı şeffaf olun.

## Örnekler

**Kurumsal.** Bir bulut depolama şirketi yıllarca resmî bir SLO olmadan "azami
çalışma süresi" hedeflemişti. Bu, ürün ekibi (özellikleri hızlı yayınlamak
isteyen) ile altyapı ekibi (azami dikkat isteyen) arasında kronik ve çözümsüz
bir gerilime yol açıyor, her sürüm planlama toplantısında baştan tartışılıyordu.
Açık bir hata bütçesi ve önceden belirlenmiş bir politikayla (bütçe
tükendiğinde özellik işi otomatik olarak durur) resmî bir %99,95 erişilebilirlik
SLO'su benimsemek, tekrarlayan pazarlığı tümüyle çözdü: iki ekip de aynı sayıyı
görüp aynı kurala uyabiliyordu. Şirket, bütçenin sağlıklı olduğu dönemlerde
yayınlanan özelliklerde ölçülebilir bir artış bildirdi. Önümüzdeki yıl bütçenin
gerçekten tükendiği iki dönemde ise tam da politikanın öngördüğü gibi ölçülebilir
ve bilinçli bir yavaşlama yaşandı.

**Kamu.** Ulusal bir meteoroloji servisinin kamuya yönelik uyarı sistemi yıllarca
"her zaman erişilebilir" şeklinde gayriresmî bir beklentiyle işletilmişti.
Belgelenmiş bir hedef yoktu ve nöbet ekibi, dile getirilmemiş, fiilen imkânsız
bir standardı tutturmaya çalışırken önemli ve ele alınmamış bir operasyonel
baskı altındaydı. Yeni benimsenen resmî SLO, yani net biçimde duyurulan bir
kamusal hata bütçesi açıklamasıyla %99,9 erişilebilirlik, operasyon ekibine
planlı bakım pencerelerini bütçe içinde zamanlama konusunda açık ve savunulabilir
bir izin verdi. Önceki dile getirilmemiş "her zaman erişilebilir" beklentisi,
uzun vadeli sistem sağlığı için gerçekten gerekli olduğunda bile bunu siyasi
olarak zorlaştırmıştı. Hata bütçesi kavramını gizlemek yerine doğrudan
açıklayan kamusal iletişim, hizmet kalitesine bağlılığın zayıflaması olarak
değil, dürüst ve olgun bir operasyon pratiğinin işareti olarak olumlu
karşılandı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

SLO'ları ve hata bütçelerini resmen benimsemenin getirisi, hız ile kararlılık
arasındaki aksi halde bitmeyen ve siyasi maliyeti yüksek pazarlığı tek, ortak
ve nesnel bir kuralla çözmektir. Yukarıdaki bulut depolama örneği bunu somut
gösterir: iki ekip arasındaki yıllarca süren, tekrarlayan, çözülmemiş gerilim
tek bir resmî hedef ve önceden belirlenmiş bir politikayla çözüldü ve aynı
ödünleşimi tekrar tekrar tartışmaya giden önemli kurumsal enerji serbest kaldı.

Toplam sahip olma maliyeti, kanıta dayalı bir hedefi doğru koymak için gereken
analiz emeğini ve özellikle istenen bir özelliği yine de yayınlama baskısı
altında bile önceden belirlenmiş tükenme yanıtına uyma disiplinini içerir. Bu
disiplin maliyeti gerçektir, ama her planlama döngüsünde süresiz olarak kurumsal
enerji tüketen çözülmemiş kronik bir pazarlığın sürekli maliyetinden çok daha
düşüktür.

## Anti-desenler ve tuzaklar

- **Arkasında kanıt olmayan iddialı bir SLO koymak:** ya ekibin ciddiye almayı
  bıraktığı gerçekçi olmayan bir hedef ya da kullanıcıların fark etmediği bir
  yarar peşinde koşan gereksiz pahalı bir hedef üretir.
- **Hata bütçesinin tükenmesine önceden belirlenmiş yanıt olmaması:** aynı zor
  ödünleşim tartışmasını her olduğunda baskı altında yeniden zorlar.
- **SLI'ları gerçek kullanıcı deneyimi yerine iç sistem sağlığından ölçmek:**
  kullanıcılar gerçek sorunlar yaşarken "sağlıklı" raporlayabilir.
- **Sağlıklı bir hata bütçesini hiç bilinçli biçimde harcamamak:** aşırı
  temkinliliğe ve kaçırılmış meşru fırsata işaret edebilir.
- **Hedefi bir kez koyup bir daha ele almamak:** kullanıcı beklentileri, mimari
  ve öncelikler değiştikçe bir SLO bayatlayabilir.
- **Hata bütçesi politikasını baskı altında isteğe bağlı saymak:** işine
  gelmediğinde çiğnenen önceden belirlenmiş bir kural gerçek bir karar verme
  değeri sağlamaz.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Güvenilirlik hedefleri örtük ya da iddialıdır; tanımlı
  bir resmî SLO, SLI ya da hata bütçesi yoktur.
- **Seviye 2, Geliştirme:** Bazı hizmetlerde gayriresmî bir SLO vardır, ancak
  SLI'lar gerçek kullanıcı deneyimini yansıtmayabilir ve önceden belirlenmiş bir
  tükenme politikası yoktur.
- **Seviye 3, Standartlaştırma:** Gerçek kullanıcı deneyimi SLI'larına ve
  önceden belirlenmiş bir hata bütçesi tükenme politikasına sahip kanıta dayalı
  SLO'lar, kritik hizmetlerde tutarlı biçimde kurulmuştur.
- **Seviye 4, Yönetme:** Hata bütçeleri hesaplı risk almaya aktif ve bilinçli
  olarak harcanır; SLO'lar düzenli, kanıta dayalı bir ritimle gözden geçirilir
  ve düzeltilir.
- **Seviye 5, Orkestrasyon:** SLO'lar ve hata bütçeleri, hız ile kararlılığı
  dengelemenin ortak, nesnel mekanizması olarak kurum genelinde bütünleşmiştir
  ve kurum, dayanaksız bir pazarlığın o kadar etkili çözemeyeceği, çerçevenin
  mümkün kıldığı belirli kararları gösterebilir.

## Tartışma önerileri

1. Mevcut SLO'muz kanıta mı yoksa iddiaya mı dayanıyor?
2. Hata bütçesi tükenmesine, baskı altında gerçekten uyacağımız önceden belirlenmiş bir yanıtımız var mı?
3. Sağlıklı bir hata bütçesini hesaplı bir riske en son ne zaman bilinçli olarak harcadık?
4. SLI'larımız gerçek kullanıcı deneyimini mi ölçüyor, yoksa kolay erişilen iç sağlık kontrollerini mi?
5. SLO'muzu bir "dokuz" daha yükseltmek bize neye mal olur ve bu maliyet haklı çıkar mı?

## Temel çıkarımlar

- **Hizmet seviyesi göstergesi (SLI)** gerçek kullanıcı deneyimini ölçer;
  **hizmet seviyesi hedefi (SLO)** onun kanıta dayalı hedefidir; **hata
  bütçesi** bilinçli biçimde harcanabilir izin verilen açıktır.
- **%100 güvenilirlik genellikle yanlış hedeftir**; SLO'nuzu kullanıcıların
  gerçekten fark ettiği şeye ve her ek basamağın gerçekte neye mal olduğuna
  dayandırın.
- Hata bütçesini **tükenmesine önceden belirlenmiş yanıtı olan harcanabilir bir
  kaynak** olarak ele alın; böylece hız ile kararlılığı her seferinde baskı
  altında yeniden tartışma ihtiyacı ortadan kalkar.
- SLI'ları yalnızca kolay erişilen iç sağlık kontrollerinden değil, **gerçek
  kullanıcı deneyiminden** ölçün.
- **SLO'ları periyodik olarak gözden geçirin ve düzeltin**, kanıta dayanarak;
  çünkü sistem ve kullanıcıları değiştikçe bayatlamış bir hedef işe yararlığını
  yitirir.

## Kaynaklar ve ileri okuma

- *Site Reliability Engineering: How Google Runs Production Systems*, Betsy
  Beyer, Chris Jones, Jennifer Petoff ve Niall Richard Murphy (editörler)
  (SLI'ları, SLO'ları ve hata bütçelerini tanımlayan temel metin).
- *The Site Reliability Workbook*, Betsy Beyer, Niall Richard Murphy, David K.
  Rensin, Kent Kawahara ve Stephen Thorne (editörler) (SLO'ları ve hata
  bütçelerini uygulamaya dair pratik rehberlik).
- *Implementing Service Level Objectives*, Alex Hidalgo (SLO'ları tasarlamak ve
  işler hale getirmek için kapsamlı, uygulayıcı odaklı bir rehber).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren, Jez
  Humble ve Gene Kim (güvenilirlik pratiği ile teslimat performansı arasındaki
  ilişki).
