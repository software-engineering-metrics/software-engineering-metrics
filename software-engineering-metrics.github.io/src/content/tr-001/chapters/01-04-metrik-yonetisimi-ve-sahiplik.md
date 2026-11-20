# 1.4 Metrik yönetişimi ve sahiplik

## Genel bakış ve motivasyon

Sahibi olmayan bir metrik, patlamayı bekleyen kalıcı bir tartışmadır. İki ekip
"aktif kullanıcı"yı farklı hesaplar ve bir toplantıyı eğilimi yönetmek yerine
sayıları uzlaştırmaya harcar; kimsenin bakımını yapmadığı bir pano kutucuğu, biri
fark edene kadar aylarca sessizce bayatlar; özgün olarak bir ekibin teşhisi için
kurulmuş bir metrik, özgün tanımının hiç desteklemek üzere tasarlanmadığı bir amaç
için başka bir ekip tarafından benimsenir. Bunların hiçbiri istatistiksel anlamda
bir ölçüm sorunu değildir. Bir yönetişim sorunudur ve kuruluşların koda zaten
uyguladığı aynı disiplinle çözülebilir: açık sahiplik, belgelenmiş bir
[tek doğruluk kaynağı](https://en.wikipedia.org/wiki/Single_source_of_truth) ve
bir gözden geçirme süreci.

Yönetişim, kendi başına bir bürokrasi değildir. Bir metrik programının kuruluş
ölçeğiyle karşılaşmasından sağ çıkmasını sağlayan şeydir. Tek bir ekip metrik
tanımlarını birinin kafasında tutabilir ve kaymayı günlük sohbetle düzeltebilir.
Her biri metrik üreten ve tüketen onlarca ekipli bir kuruluş bunu yapamaz.
Yönetişim olmadan tanımlar sessizce kayar, metrikler kimse budamadan çoğalır ve
yönetim iki raporun çeliştiğini fark ettiğinde, bunları uzlaştırmanın bedeli
boşa giden toplantılarda ve aşınan güvende çoktan defalarca ödenmiştir.

Kurumsal ve kamu kuruluşları için yönetişim ek bir ağırlık taşır; çünkü metrikler
giderek, özgün panoyu kuran herhangi bir kişiden daha uzun yaşayan gerçek
sonuçları olan kararları, bütçe dağılımını, kamuya performans raporlamasını,
tedarikçi sözleşmelerini besler. Personel değişimine dayanan, her yeni ekip
üyesinin okuyup anlayabileceği bir metrik tüzüğü, bir kuruluşun sayılarının beş
yıl sonra da bugün olduğu gibi aynı şeyi ifade etmesini sağlayan şeydir.

## Temel ilkeler

- **Her metriğin tam olarak bir sahibi vardır.** Paylaşılan sahiplik sahipsizliktir;
  herkes bir tanıma sahip olduğunda kimse onun bakımını yapmaz.
- **Bir metriğin tek bir doğruluk kaynağı vardır.** Aynı metriği farklı hesaplayan
  iki sistem, yüzeye çıkmayı bekleyen bir yönetişim başarısızlığıdır.
- **Yönetişim yazılıdır, sözlü gelenek değil.** Yalnızca birinin hafızasında yaşayan
  bir metrik tüzüğü, o kişinin ayrılmasından sağ çıkmaz.
- **Emeklilik, benimsemek kadar önemlidir.** Sağlıklı bir metrik programı, büyüdüğü
  kadar bilinçli budar.
- **Yönetişim, metrik sayısıyla değil sonuçla ölçeklenir.** Kamuya bir rapor
  besleyen bir metrik, tek bir ekibin kendi sprintini ayıklamak için kullandığından
  daha ağır bir yönetişime ihtiyaç duyar.

## Öneriler

### Bir ekip sınırını aşan her metrik kümesi için bir metrik tüzüğü yazın

Bir **metrik tüzüğü**, bir metrik kümesinin amacını, açık hedef olmayanlarını
(konu 1.1'deki teşhis-değerlendirme ayrımı buraya aittir), her metriğin sahibini
ve doğruluk kaynağını ve bir gözden geçirme ritmini belirten kısa, yaşayan bir
belgedir. Bir sayfada tutun. Bu kitabın eşlik eden deposundaki
docs/examples/metrics-charter-example.md dosyası biçimini gösterir. Bu kadar kısa
bir tüzük okunur; bir politika belgesine dönüşecek kadar uzayan okunmaz.

### Her metriğe bir ekip değil, adı konmuş bir sahip atayın

"Bu metriğe platform ekibi sahip" ifadesi, kimse gerçekten bakımını yapmayana
kadar sorumluluğu dağıtır. Bir kişinin ya da belirli, hesap verebilir bir rolün
adını verin. Bu sahip, metriğin tanımının doğru kalmasından, enstrümantasyonunun
sağlıklı kalmasından ve kaçınılmaz olarak gündeme geldiğinde "bu sayı neden yanlış
görünüyor" sorusunu yanıtlamaktan sorumludur. İnsanlar rol değiştirdikçe sahiplik
dönebilir ve dönmelidir, ancak tüzük her zaman mevcut bir sahibin adını vermeli,
alanı asla boş bırakmamalıdır.

### Metrik başına tek bir doğruluk kaynağı belirleyin ve paralel hesaplamayı yasaklayın

İki sistem aynı sözde adı taşıyan metriği farklı hesapladığında, örneğin bir
ekibin "aktif kullanıcı"sı oturum açmaları, diğerininki API çağrılarını saydığında,
ortaya çıkan uyuşmazlık, baştan tek bir doğruluk kaynağında anlaşmanın maliyetinden
çok daha fazlasına uzlaştırma toplantılarında mal olur. Tüzükte her metrik için
yetkili sistemi adlandırın ve aynı metriğin başka herhangi bir hesaplamasını ya
düzeltilecek bir hata ya da yeniden adlandırılacak, farklı adlı bir metrik olarak
ele alın.

### Yönetişim ritmine bir emeklilik incelemesi koyun

Yalnızca metrik ekleyen bir metrik programı, kimsenin harekete geçemeyeceği bir
pano dağınıklığı biriktirir (konu 1.1). Her yönetişim gözden geçirmesinde, yeni
metrik önermenin yanında, mevcut olanlardan hangilerinin son iki döngüde bir
kararı beslemediğini ve emeklilik adayı olduğunu sorun. Emeklilik başarısızlık
değildir; sağlıklı bir kod tabanının ölü koda uyguladığı aynı disiplindir.

### Yönetişim titizliğini hacme değil sonuca göre ölçeklendirin

Her metrik aynı sürece ihtiyaç duymaz. Bir ekibin kendi sprintini ayıklamak için
icat ettiği bir metrik, ekibin ne anlama geldiğini bilmesinin ötesinde neredeyse
hiç yönetişim gerektirmez. Bir yönetici skor kartını, bir kamu performans raporunu
ya da bir bireyin ücretini besleyen bir metrik, yayına girmeden önce belgelenmiş
bir tanım, adı konmuş bir sahip, bir denetim izi ve onay ister. Sürecinizin
ağırlığını, metriğin yanlış olmasının sonucuna göre ayarlayın; kaç metrik
olduğuna göre değil.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Resmî yönetişim yok | Küçük ekipler için hızlı, düşük yük | Tanımlar kayar; sahiplik dağılır; panolar denetimsiz dağılır |
| Metrik kümesi başına hafif tüzük | Ucuz, okunabilir, kuruluşla ölçeklenir | Güncel tutmak disiplin gerektirir; teslim tarihi baskısı altında atlanabilir |
| Ağır merkezî metrik yönetişim kurulu | Güçlü tutarlılık, güçlü denetim izi | Yeni metrikleri onaylamak yavaş; ekiplerin etrafından dolandığı bir darboğaza dönüşebilir |
| Sonuca göre ölçeklenen yönetişim | Emeği gerçek riskle eşleştirir | Sonucu doğru sınıflandırmak muhakeme ister; riski olduğundan az göstererek oyunlanabilir |

Temel gerilim **tutarlılık ile hız** arasındadır. Ağır merkezî yönetişim güvenilir,
tutarlı metrikler üretir, ancak bir ekibi tam da acil bir soruyu yanıtlamak için
hızla bir şey enstrümante etmek istediğinde yavaşlatır. Gerilimi, yönetişim
ağırlığını sonuca göre ölçekleyerek çözün: ekiplerin kendi teşhis kullanımları için
serbestçe enstrümantasyon yapmasına izin verin ve tam tüzük, sahiplik ve onay
disiplinini yalnızca bir metrik bir ekip sınırını aştığında ya da değerlendirme
ya da kamusal bir kullanımı beslediğinde isteyin.

## Ekibinizle tartışılacak sorular

1. **Bir ekip sınırını aşan her metriğin adı konmuş bir sahibi var mı ve bugün
   sorulsa o sahip kendini hesap verebilir olarak tanır mıydı?** "Platform ekibi
   sahip" bir yanıt değildir; belirli bir kişi ya da rol yanıttır. Ekipler arası
   metriklerinizi denetleyin ve adı konmuş sahibin, varsa, bu sorumluluğa sahip
   olduğunu gerçekten bilip bilmediğini kontrol edin.

2. **Aynı sözde adı taşıyan metriği şu anda nerede iki farklı biçimde
   hesaplıyoruz ve uyuşmazlığı uzlaştırmaya ne kadar zaman harcadık?** Bu,
   büyük kuruluşlardaki en pahalı ve en yaygın yönetişim başarısızlıklarından
   biridir ve belgelenmiş tek bir doğruluk kaynağıyla tamamen önlenebilir. Varsa
   gerçek bir örnek getirin ve maliyetini izleyin.

3. **Bir metriği en son ne zaman emekli ettik ve bu kararı ne tetikledi?** Metrik
   eklemeyi anlatabilen ama hiç kaldırmayı anlatamayan bir kuruluş pano borcu
   biriktirmektedir. Bir emeklilik hatırlayamıyorsanız, bu yokluk soruya verilen
   yanıtın kendisidir.

4. **Yönetişim sürecimiz sonuçla orantılı mı, yoksa her metrik riskten bağımsız
   aynı ağırlıkta bir incelemeden mi geçiyor?** Düşük riskli bir ekip metriğinde
   aşırı ağır yönetişim, hiçbir güvenlik faydası olmadan işi yavaşlatır; kamu
   raporunu ya da bir ücret kararını besleyen bir metrikte aşırı hafif yönetişim
   gerçek bir risktir. Mevcut metriklerinizi sonuca göre haritalayın ve süreç
   ağırlığını buna karşı dürüstçe denetleyin.

5. **Bir metriği kuran kişi rol değiştirdiğinde ya da ayrıldığında metriğin
   sahipliğine ne olur?** Yalnızca bir kişinin kafasında var olan bir metrik tüzüğü
   onunla birlikte yok olur. Bir metrik seçip yeni işe giren birinin yalnızca
   yazılı belgelerden tanımını, doğruluk kaynağını ve amacını anlayıp
   anlayamayacağını sorarak bunu sınayın.

6. **Bir metriğin tanımı sessizce değişmiş olsa bunu nasıl anlardık?** Bir sayının
   nasıl hesaplandığındaki bir değişiklik, adında bir değişiklik ya da geçmişinde
   bir not olmadan, biri eski ve yeni veriyi karşılaştırıp açıklayamadığı bir
   süreksizlik bulana kadar neredeyse görünmezdir. Metriklerinizin bugün herhangi
   bir değişiklik günlüğü taşıyıp taşımadığını tartışın.

## Sektörel bakış

**Girişim (startup).** Herkesin her sayının ne anlama geldiğini zaten bildiği beş
kişilik bir ekip için resmî yönetişim genellikle fazladır. Yine de erkenden
benimsemeye değer tek disiplin, metrik başına yazılı olarak tek bir sahibin adını
koymaktır; çünkü neredeyse hiçbir şeye mal olmaz ve ilk birkaç işe alım katılıp bir
sayının ne anlama geldiğini sormaya başladığında karışıklığı önler.

**Küçük işletme.** Buradaki yönetişim çoğunlukla, her metrik için tek bir aracı
doğruluk kaynağı olarak seçip ona bağlı kalmak, elektronik tabloların ve bir
platformun yerleşik panosunun sessizce ayrışmasına izin vermemek demektir. Tüzüğü,
gayriresmî de olsa tek bir ortak belge olarak yazın; böylece yeni bir çalışan
etrafa sormadan bir sayının ne anlama geldiğini öğrenebilir.

**Kurumsal.** Yönetişimin hakkını verdiği yer burasıdır. Tanımları iş birimleri
arasında standartlaştırın, bir yönetici skor kartını besleyen her şey için tüzük
isteyin ve emeklilik incelemesini yinelenen bir yönetişim ritmine yerleştirin;
çünkü bu ölçekte pano dağınıklığı hızla pahalılaşır, hem bakım maliyetinde hem de
iki bölüm aynı şey için çelişen sayılar raporladığında itibar kaybında.

**Kamu.** Buradaki yönetişimin çoğu zaman hukuki ya da denetim boyutu vardır:
yayımlanan performans ölçüleri yasal raporlama gereksinimlerini karşılamak zorunda
olabilir ve bir tanım değişikliğinin gerçek siyasi sonuçları olabilir. Yöntemi
kamuya belgeleyin, değişikliğin kendisi kamuya gerekçelendirilmedikçe tanımları
raporlama dönemleri boyunca dondurun ve metriğin yalnızca mevcut değerinin değil
tanımının bağımsız denetimini kalıcı bir yönetişim uygulaması olarak görün.

## Örnekler

**Kurumsal.** Çok uluslu bir yazılım şirketi, satın alma sonrası bir entegrasyon
sırasında, en büyük iki iş biriminin "dağıtım sıklığı"nı farklı tanımladığını
keşfetti: biri hazırlık ortamına yapılan her push'u sayıyordu, diğeri yalnızca
üretim sürümlerini. Yönetim bir yılı aşkın süredir iki birimin teslimat
performansını gerçekte karşılaştırılabilir olmayan sayılarla karşılaştırıyordu.
Çözüm, tek bir metrik tanımı sözlüğü yayımlayan (bu kitabın konu 9.2'sinde
yansıtılmıştır), her ekipten uyumu onaylamasını isteyen ve belirsiz yerel
tanımları tek çeyrek içinde emekli eden, şirket genelinde bir metrik yönetişim
kuruluydu.

**Kamu.** Bir dijital hizmetler performans panosunu yayımlamaktan sorumlu ulusal bir
istatistik ofisi, bir mühendislik ekibinin bir hata olarak gördüğü şeyi düzeltirken
sessizce yaptığı "SLA içinde çözüldü" hesaplama değişikliğinin, değişiklik kamuya
belgelenmeden manşet uyum rakamını birkaç yüzde puan kaydırdığını buldu. Ofis,
kamuya bir raporu besleyen her metrik tanımı için resmî bir değişiklik denetimi
süreci kurdu: önerilen değişiklikler belgelenmiş bir gerekçe, değişiklikle birlikte
yayımlanan bir önce-sonra karşılaştırması ve adı konmuş sorumlu bir yetkilinin
onayını gerektirir; bu, önceki değişikliğin fark edilmeden geçmesine izin veren
boşluğu kapattı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Yönetişimin getirisi, önlenen uzlaştırma maliyetidir. İki ekibin kimin sayısının
doğru olduğunu tartıştığı bir toplantıda harcanan her saat, disiplinli bir
yönetişimin, tek bir doğruluk kaynağının, adı konmuş bir sahibin tamamen
önleyeceği bir saattir. Kurumsal ölçekte bu maliyet onlarca ekibe yayılarak
katlanır ve metrik kümesi başına tek sayfalık bir tüzüğün önleyeceği bir soruna,
yönetimin dikkatinin gerçekten önemli bir payını tüketebilir.

Hafif bir yönetişim uygulamasının, bir tüzüğün, adı konmuş bir sahibin, periyodik
bir gözden geçirmenin toplam sahip olma maliyeti mütevazıdır ve çoğunlukla
baştadır. Alternatif, büyük bir girişimin bir yıl içinde, yönetimin güvendiği
sayıların hiç karşılaştırılabilir olmadığını keşfetmek, hem boşa giden analizde
hem de kamusal ya da iç kaydı sonradan düzeltmenin itibar zararında çok daha pahalıya
mal olur.

## Anti-desenler ve tuzaklar

- **Adı konmuş kişi sahipliği yerine ekip sahipliği:** hesap verebilirliği, kimse
  tanımın bakımını gerçekten yapmayana kadar dağıtır.
- **Aynı sözde metriğin paralel hesaplanması:** sonunda uyuşmazlığı ve pahalı
  uzlaştırmayı garanti eder.
- **Yalnızca birinin kafasında var olan bir tüzük:** o kişi rol değiştirdiği anda
  kaybolur.
- **Yalnızca ekleyen, hiç emekli etmeyen bir metrik programı:** kimsenin harekete
  geçemeyeceği pano dağınıklığı üretir.
- **Sonuçtan bağımsız tekdüze yönetişim ağırlığı:** düşük riskli işi yavaşlatırken
  yüksek riskli kamusal ya da ücret bağlantılı metrikleri yeterince korumaz.
- **Sessiz tanım değişiklikleri:** bir metriğin anlamı değişiklik günlüğü olmadan
  kayar ve geçmiş karşılaştırmalar sessizce geçersiz hale gelir.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Metriklerin resmî sahibi yoktur; tanımlar bireysel
  hafızada yaşar ve ekipler arasında sessizce kayar.
- **Düzey 2, Geliştirme:** Bazı ekipler kendi metrikleri için gayriresmî belge
  yazar, ancak ortak bir tüzük biçimi ya da ekipler arası tutarlılık yoktur.
- **Düzey 3, Standartlaştırma:** Bir ekip sınırını aşan her metriğin belgelenmiş bir
  tüzüğü, adı konmuş bir sahibi ve üzerinde anlaşılmış tek bir doğruluk kaynağı
  vardır; kuruluş genelinde uygulanır.
- **Düzey 4, Yönetme:** Yinelenen bir yönetişim ritmi, metrikleri sürekli geçerlilik
  açısından gözden geçirir, hak ettiği yeri kazanmayı bırakanları emekli eder ve
  tanım değişikliklerini görünür bir geçmişle izler.
- **Düzey 5, Orkestrasyon:** Yönetişim sonuçla orantılıdır, mümkün olduğunda
  otomatiktir (belgelenmemiş ya da sahipsiz metrikleri işaretleyen bir metrik
  kataloğu) ve kuruluş, yayımlanmış herhangi bir sayının tam kökenini istendiğinde
  gösterebilir.

## Tartışma önerileri

1. Yeni işe giren biri yalnızca belgelerden en önemli üç metriğimizin gerçekte ne anlama geldiğini öğrenebilir mi?
2. Hangi metriklerimizi şu anda iki farklı sistem farklı hesaplıyor?
3. En son ne zaman bir metriği emekli ettik ve buna nasıl karar verdik?
4. Yönetişim sürecimiz sonucun en yüksek olduğu yerde daha mı ağır, yoksa tekdüze mi?
5. Kuruluşumuzun kamuya dönük en sonuç doğurucu metriğinin sahibi kim, adıyla?

## Temel çıkarımlar

- Her metrik, bir ekip değil **adı konmuş bir sahibe** ve paralel hesaplama değil
  **tek bir doğruluk kaynağına** ihtiyaç duyar.
- Bir ekip sınırını aşan her metrik kümesi için amacı, hedef olmayanları, sahipliği
  ve gözden geçirme ritmini belirten kısa, yaşayan bir **metrik tüzüğü** yazın.
- **Emeklilik**, benimsemek kadar önemli bir yönetişim disiplinidir; bilinçli budayın.
- Yönetişim titizliğini metrik sayısına değil **sonuca** göre ölçeklendirin: kamusal,
  değerlendirme amaçlı ya da ücret bağlantılı metrikler için daha ağır süreç.
- Bir metrik tanımı sessizce kayabilir; bir sayıya duyulan güven personel
  değişiminden sağ çıksın diye değişiklikleri görünür bir geçmişle izleyin.

## Kaynaklar ve ileri okuma

- *Data Governance: How to Design, Deploy, and Sustain an Effective Data
  Governance Program*, John Ladley (metrik programlarına uygulanabilen yönetişim
  yapıları).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin (metrik
  sahipliği ve kullanımı etrafındaki örgütsel işlev bozukluğu).
- *Key Performance Indicators*, David Parmenter (metrik sahipliği, tanım disiplini
  ve gözden geçirme ritmi).
- U.S. Government Accountability Office (GAO) performans ölçümü ve GPRA
  Modernization Act rehberi: kamu sektörü metrik yönetişimi ve değişiklik denetimi.
