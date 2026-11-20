# 1.2 Goodhart yasası ve metriklerin psikolojisi

## Genel bakış ve motivasyon

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law), adını
iktisatçı Charles Goodhart'tan alır ve genellikle şöyle ifade edilir: bir ölçü
hedef haline geldiğinde, iyi bir ölçü olmaktan çıkar. Goodhart'ın 1975'teki
özgün gözlemi para politikasıyla ilgiliydi; ancak yazılım ekiplerinin gerçekten
ihtiyaç duyduğu sürüm, antropolog Marilyn Strathern'in sonradan yaptığı yeniden
ifadedir ve bu kitabın tamamı o cümlenin üzerine kuruludur. Sonraki her
konudaki her metrik, dağıtım sıklığı, test kapsamı, memnuniyet puanları, bu
riski taşır ve bu kitaptaki her öneri, bir biçimde bu riski yönetmenin
stratejisidir.

Mekanizma gizemli değildir. İnsanlar teşviklere yanıt verir ve bir ödüle, bir
değerlendirmeye ya da bir itibara bağlanan metrik, kimse öyle olmasını
istemese de bir teşviktir. Bir ekip "dağıtım sıklığı"nın izlendiğini
öğrendiğinde, o sayıyı oynatmanın en ucuz yolu her zaman amaçlanan yol değildir:
anlamlı tek bir değişikliği beş önemsiz dağıtıma bölün, sayı yükselir ama
gerçekte hiçbir şey iyileşmemiştir. Bu, kötü niyetli kişilerle ilgili bir hikâye
değildir. Sıradan, iyi niyetli mühendisler kötü tasarlanmış teşviklere tam
olarak böyle yanıt verir; çünkü baskı altında davranışı şekillendiren, teşvikin
arkasındaki niyet değil teşvikin kendisidir.

Büyük kuruluşlarda risk daha yüksektir; çünkü metriği tasarlayan kişi ile
davranışı onun tarafından şekillenen kişi arasındaki mesafe ölçekle birlikte
büyür. Kendi sekiz kişilik ekibi için metrik kuran bir ekip lideri oyunlamayı
doğrudan gözleyebilir ve rotayı hızla düzeltebilir. Altı yüz kişilik bir
bölümde yaygınlaştırılan ya da bir yasama organının okuduğu kamu performans
raporunda yayımlanan bir metrik, yazarıyla hiç tanışmamış ve metriğin harfini
amaç saymak için her gerekçesi olan insan katmanlarından geçer. Çarpıtma
mesafeyle birlikte katlanır; kitabın ağırlık merkezini sonraki bir konuya değil
bu konuya koymasının nedeni tam olarak budur.

## Temel ilkeler

- **Teşvik bağlanmış her metriğin oyunlanacağını varsayın.** Çarpıtma
  keşfedildikten sonra değil, ilk sürümden itibaren buna karşı tasarım yapın.
- **Oyunlama rasyoneldir, kötü niyetli değil.** İnsanlar kurduğunuz teşvike
  makul biçimde yanıt veriyor; bunun için onları suçlamak hiçbir şeyi düzeltmez.
- **Metriğin sahibinden uzaklık, çarpıtma riskini artırır.** Bir sayı niyetini
  anlayan kişiden ne kadar uzağa giderse, kuralın ruhundan çok harfi haline gelir.
- **Oranlar ve aralıklar, ham sayılardan daha iyi direnir.** Ham sayı hacmi
  ödüllendirir; iyi seçilmiş bir oran, gerçekten istediğiniz davranışı
  ödüllendirir.
- **Teşvik bağlanmış bir metrikte korkuluk isteğe bağlı değildir.** Bir ödül
  bağladığınız her metrik, bozulmaması gereken eşleştirilmiş bir karşı metriğe
  ihtiyaç duyar.

## Öneriler

### Her metriği teşvike maruziyetine göre sınıflandırın

Bir metriği görünür bir yerde yayımlamadan önce doğrudan sorun: kimsenin ödülü,
değerlendirmesi, itibarı ya da bütçesi bu sayının belirli bir yönde hareket
etmesine bağlı mı? Evetse bu, teşvik bağlanmış bir metriktir ve yayına
girmeden önce bir korkuluğa (aşağıda) ihtiyaç duyar. Hayırsa teşhis amaçlı bir
metriktir (konu 1.1) ve oyunlanma riski daha düşüktür; ancak asla sıfır
değildir, çünkü insanlar, bugün resmî bir teşvik bağlı olmasa bile ileride
yargılanacaklarını beklediği bir sayıyı yine de şekillendirebilir.

### Ham sayılar yerine oranları, hızları ve kohortları tercih edin

"Kapatılan bilet" gibi ham bir sayı, düşük değerli bir şeyden daha fazlasını
yaparak oyunlanabilir. "İlk temasta çözülen bilet yüzdesi" gibi bir oran,
hacim yerine altta yatan davranışı ödüllendirir. Bir **kohort**, yani belirli
bir haftadaki tüm dağıtımlar gibi ortak bir başlangıç noktasıyla tanımlanan
grup, yakın dönemdeki kötü bir eğilimin gösterişli bir uzun vadeli toplamın
içinde saklanmasını önler. Aynı altta yatan davranışı yakalayan bir sayı ile bir
oran arasında seçim yaparken, oranı seçin.

### Teşvik bağlanmış her metriği bir korkulukla eşleştirin

Bir **korkuluk metriği**, ana metrik iyileşirken bozulmaması gereken, eşleştirilmiş
bir karşı metriktir. Dağıtım sıklığı değişiklik başarısızlık oranıyla; lead time
kaçan hata oranıyla; bir destek ekibinin işlem süresi müşteri memnuniyetiyle
eşleşir. Ucuz oyunlamayı gözle görülür biçimde pahalı kılan şey korkuluktur:
teşvik bağlanmış sayıyı korkuluğu bozarak iyileştiren bir ekip, şansla değil
eşleştirmeyle yakalanır. Korkuluğu ana metrikle aynı anda tasarlayın; oyunlama
zaten keşfedildikten sonra akla gelen bir ek olarak değil.

### Dört klasik oyunlama desenini gözetleyin

Goodhart yasası altındaki çarpıtma, tanınabilir az sayıda biçime girme eğilimindedir.
**Eşik oyunlaması**, hedefe kadar tam olarak optimize eder ve orada durur (yüzde
95 test kapsamı hedefi, gerçek kapsam değil, tam 95'e ulaşmak için önemsiz
testler üretir). **Tanım oyunlaması**, olan şeyi değil sayılan şeyi değiştirir
("çözüldü"yü zor vakaları dışarıda bırakacak biçimde yeniden tanımlamak).
**Zamanlama oyunlaması**, işin ne zaman olduğunu değil ne zaman kaydedildiğini
kaydırır (dağıtımları raporlama penceresi kapanmadan hemen önce toplu yapmak).
**İkame oyunlaması**, metriğin niyetini terk ederken harfini yerine getirir
(dağıtım sıklığını şişirmek için tek bir gerçek değişikliği çok sayıda önemsiz
değişikliğe bölmek). Bu desenleri ekibinize açıkça adlandırmak, kendi
sayılarınızda göründüklerinde onları fark etmeyi çok kolaylaştırır.

### Mümkün olduğunda ölçümü ödülden ayırın

Hepsinin en güçlü korkuluğu yapısaldır: metriği bireysel ödülden ayırın.
Hiçbir kişinin maaşı, notu ya da konumu yönüne bağlı olmaksızın yalnızca bir
sistemi anlamak için kullanılan metrik, bir değerlendirmeye bağlı olandan çok
daha zayıf bir oyunlama baskısıyla karşılaşır. Bu yüzden konu 1.1'deki teşhis ve
değerlendirme ayrımı pratikte bu kadar önemlidir: bir metriği teşhis amaçlı
tutmak, çoğu zaman sonradan uygulanan her türlü korkuluk mühendisliğinden daha
ucuz ve etkilidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ham sayılar | Hesaplaması ve anlatması basit | Hacimle oyunlanmaya çok açık |
| Oranlar ve hızlar | Doğru davranışı ödüllendirir, hacim oyunlamasına direnir | Küçülen payda sorununu gizleyebilir |
| Korkuluk eşleştirme | Ucuz oyunlamayı gözle görülür biçimde pahalı kılar | Tanımlanacak, sahiplenilecek ve bakımı yapılacak metrik sayısını ikiye katlar |
| Yalnızca teşhis (bireysel ödül yok) | Seçenekler arasında en düşük oyunlama baskısı | Yönetimin çekebileceği doğrudan motivasyon kaldıracı daha zayıf |
| Yoğun teşvik bağlanmış metrikler | Güçlü, hızlı davranışsal yanıt | Yüksek çarpıtma riski, çoğu zaman tek raporlama döngüsü içinde |

Temel gerilim **motive etme gücü ile çarpıtma riski** arasındadır. Davranışı en
hızlı oynatan metrikler, yani bir sayıyı doğrudan ödüle bağlamak, Goodhart
yasasına en açık olanlardır. Gerilimi, güçlü teşvikleri ucuza oyunlanması
gerçekten zor olan sonuç metriklerine ayırarak ve teşvik bağladığınız her şeyi,
ilk çarpıtma ortaya çıktıktan sonra eklemek yerine aynı anda tasarlanmış bir
korkulukla eşleştirerek çözün.

## Ekibinizle tartışılacak sorular

1. **Ödülü kimseye bağlı olan her metrik için onu oyunlamanın en ucuz yolu
   nedir ve bugün bu oyunlamayı yakalar mıydık?** Oturun ve panonuzdaki her
   teşvik bağlanmış sayı için istismarı kasten tasarlayın: rasyonel, iyi niyetli
   bir ekip, asıl işi yapmadan bunu nasıl iyi gösterirdi? O oyunlamayı nasıl
   yakalayacağınızı adlandıramıyorsanız, metriğe henüz teşvik bağlamaya hazır
   değilsiniz. Bu alıştırma rahatsız edicidir ve rahatsızlık zaten amaçtır.

2. **Mevcut metriklerimizden hangileri kimse dile getirmeden dört oyunlama
   deseninden birine, eşik, tanım, zamanlama ya da ikame oyunlamasına çoktan
   kaydı?** Çarpıtma nadiren kendini duyurur; altta yatan şikâyetler, olaylar
   ya da müşteri geri bildirimleri farklı bir hikâye anlatırken harika görünen
   bir sayı olarak ortaya çıkar. Panonuzu her desenin adıyla gezin ve eşleşmeler
   konusunda dürüst olun.

3. **Panomuzdaki her teşvik bağlanmış metriğin eşleştirilmiş bir korkuluğu var
   mı ve o korkuluk metrikle aynı anda mı tasarlandı?** Yalnızca oyunlama
   keşfedildikten sonra eklenen bir korkuluk, bir tasarım tercihi değil bir
   onarımdır ve güvene verilen ilk hasarı önlemek için çoğu zaman çok geç gelir.
   Teşvik bağlanmış metriklerinizi özellikle bu eşleştirme açısından denetleyin.

4. **Bu metrik, niyetini anlayan kişiden, davranışını şekillendirdiği kişiye
   ulaşana kadar ne kadar yol kat ediyor?** Bir platform ekibinin kurduğu ve üç
   yönetim katmanı ötede tüketilen ya da enstrümantasyonu hiç görmemiş insanların
   okuduğu bir kamu raporunda yayımlanan metrik, bir ekibin kendisi için
   tasarladığından çok daha fazla ruh değil harf oyunlamasına açıktır. En
   sonuç doğurucu metrikleriniz için bu mesafeyi haritalayın.

5. **Oyunlandığını keşfettikten sonra bir metrikten teşviki hiç kaldırdık mı
   ve bunu düzeltmek güven açısından bize neye mal oldu?** Kuruluşlar Goodhart
   yasasını çoğu zaman zor yoldan, bir çeyrek ya da bir yıl çarpıtılmış
   davranıştan sonra keşfeder ve onarım, önlemenin maliyetinden fazladır. Varsa
   gerçek bir olay getirin ve sessizce geçmek yerine dersi açıkça çıkarın.

6. **Oyunlamanın, kötü tasarlanmış bir teşvike rasyonel bir yanıt olduğunu
   değil de kişisel bir dürüstlük sorunu olduğunu nerede varsaydık?** Kurduğunuz
   bir teşvike öngörülebilir biçimde yanıt veren bireyleri suçlamak nadiren bir
   şeyi düzeltir ve çoğu zaman güveni daha da zedeler. Hatırlayabildiğiniz her
   oyunlama olayını kişideki bir karakter sorunu değil metrikteki bir tasarım
   sorunu olarak yeniden çerçeveleyin ve hangi yeniden tasarımın bunu
   önleyeceğini sorun.

## Sektörel bakış

**Girişim (startup).** Küçük bir ekipte en hızlı korkuluk doğrudan konuşmadır:
herkes bir sayıyı görüp hemen "dur, bu neden sıçradı" diye sorabilir. Gerçek risk,
bir kurucunun bir metriği eşleştirilmiş bir korkuluk olmadan yatırım toplama
anlatısına (ne pahasına olursa olsun büyüme) bağlamasıdır; çünkü dış yatırımcılar
tam olarak oyunlamayı çekici kılan türden uzak ve yüksek riskli baskıyı uygular.

**Küçük işletme.** Hazır araçlar çoğu zaman sayılar (kapatılan bilet, yanıtlanan
çağrı) etrafında kurulmuş varsayılan panolarla gelir, çünkü sayıları hesaplamak
kolaydır. Araç izin verdiği her yerde bunları etkin biçimde oranlara çevirin ve
önce korkuluğunu belirlemeden tek bir sayıyı bir ikramiyeye ya da değerlendirmeye
bağlamaya direnin.

**Kurumsal.** Mesafe baskın risktir: bir platform ekibinin iç teşhis için
tasarladığı metrik, üç yönetim katmanı sonra alınıp onu kuranların tanımayacağı
bir KPI'a çevrilir. Bunu açıkça yönetin (konu 1.4): bir metrik performans
değerlendirmesinde ya da yönetici skor kartında kullanılmak üzere onaylanmadan
önce belgelenmiş bir korkuluk isteyin.

**Kamu.** Yayımlanan performans ölçüleri bu kitaptaki her kategorinin en güçlü
oyunlama baskısıyla karşılaşır, çünkü kaçırılan bir hedef bütçesel ya da siyasi
sonuçlar doğurabilir. Yalnızca sayıyı değil tanımın kendisini de sabit bir ritimle
denetleyin; çünkü klasik kamu sektörü oyunlama deseni, altta yatan hizmeti
iyileştirmek yerine kimin sayıldığını sessizce yeniden tanımlamaktır (kimin
beklediğini yeniden sınıflandırarak "çözülen" bir bekleme listesi).

## Örnekler

**Kurumsal.** Bir perakende teknolojisi şirketi, üç aylık değerlendirmelerde
kullanılan ekip düzeyinde bir kalite puanına bağlı olarak, tüm hizmetlerde
yüzde 99 otomatik test kapsamı hedefi koydu. İki çeyrek içinde kapsam yüzde 99'a
ulaştı ve olay oranı yükseldi. Bir denetim, ekiplerin yalnızca kapsam aracını
memnun etmek için önemsiz testler yazdığını, yani bir fonksiyonun hata
fırlatmadan döndüğünü doğruladığını, gerçek uç durum testlerinin ise hiç
iyileşmediğini ortaya koydu. Çözüm, ham kapsam hedefini eşleştirilmiş bir
metrikle değiştirdi: kapsam artı testlerin enjekte edilmiş hataları gerçekten
yakalayıp yakalamadığını ölçen bir mutasyon testi puanı (konu 4.2); bunu ucuza
oyunlamak çok daha zordur.

**Kamu.** Bir eyaletin işsizlik sigortası kurumu, yasama organına yayımlanan
ilk ödemeye kadar geçen medyan gün sayısıyla ölçülüyordu. Hedefi tutturma
baskısı altında, bölgesel bir ofis işlenmesi daha zor talepleri sessizce
"eksik" olarak yeniden sınıflandırıp paydadan çıkarmaya başladı; bu, yayımlanan
medyanı mükemmel gösterirken bazı başvuru sahipleri raporun düşündürdüğünden çok
daha uzun süre bekledi. Yalnızca sayının değil tanımın kendisinin bağımsız bir
denetimi uygulamayı ortaya çıkardı. Kurumun çözümü tanımı dondurmak, dışlama
ölçütlerini kamuya yayımlamak ve eksik talep oranının kendisini izleyen bir
korkuluk metriği eklemekti; böylece yeniden sınıflandırmadaki bir sıçrama artık
gizlenmek yerine görünür olacaktı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Goodhart yasasını ciddiye almanın getirisi, önlenen yeniden iştir. Korkulukları
baştan tasarlayan bir kuruluş, birinci metriğin yanında ikincisini tanımlamak
için mütevazı bir ek emek harcar. Bu adımı atlayan bir kuruluş, çarpıtma ortaya
çıkmadan önce çoğu zaman bir çeyrek ya da daha fazla yanlış yönlendirilmiş emek
harcar; ardından oyunlanmış davranışı geri almanın ve sayıya duyulan güveni
yeniden kurmanın çok daha zor maliyeti gelir. Yukarıdaki perakende örneği tipiktir:
önlemesi ucuz, onarması pahalı.

Bir korkuluğun toplam sahip olma maliyeti bedava değildir: tanımlanacak,
enstrümantasyonu yapılacak ve gözden geçirilecek ikinci bir metriktir. Ancak
bu maliyet, kimse fark etmeden aylarca yanlış davranışı ödüllendiren bir teşvikin
sınırsız maliyetine kıyasla küçük ve sabittir. Bu konudan sonraki her konu bu
ödünleşimi hesaba katar; korkuluk eşleştirmesinin yalnızca burada değil, kitabın
geri kalanında da bir öneri olarak yer almasının nedeni budur.

## Anti-desenler ve tuzaklar

- **Teşvik bağlanmış bir metriği korkuluksuz yayımlamak:** bu kitapta çarpık
  bir panonun en yaygın tek kök nedeni.
- **Oyunlamayı kişisel bir kusur saymak:** bireyleri kötü tasarlanmış bir
  teşvike rasyonel yanıtları için suçlar ve hiçbir şeyi düzeltmez.
- **Sayıyı denetleyip tanımı hiç denetlememek:** klasik kamu sektörü hata
  biçimi; kimin sayıldığı sessizce değiştiği için metrik iyi görünür.
- **Teşhis olarak işe yarayan bir metriğin değerlendirme amaçlı hale geldikten
  sonra da güvenli kalacağını varsaymak:** metriğin başka hiçbir şeyi
  değişmese bile ödül bağlandığı anda maruziyet değişir.
- **Korkuluğu ancak ilk oyunlama olayından sonra tasarlamak:** güvene verilen
  hasar çoktan oluştuktan sonra gelen bir onarım.
- **Mesafeyi yok saymak:** bir metrik, tasarımcısından birkaç yönetim katmanı ya
  da kamu raporu kadar uzaklaştığında onun amaçladığı gibi okunacağını varsaymak.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Metriklere gelişigüzel teşvik bağlanır, oyunlama riski
  hiç düşünülmez ve çarpıtma ancak kalite ya da güven gözle görülür biçimde
  zarar gördükten sonra keşfedilir.
- **Düzey 2, Geliştirme:** Bazı ekipler oyunlamayı sonradan fark eder ve
  gayriresmî olarak düzeltir, ancak korkulukları önceden tasarlama yönünde
  tutarlı bir uygulama yoktur.
- **Düzey 3, Standartlaştırma:** Kuruluş genelinde teşvik bağlanmış her metrik,
  onaydan önce belgelenmiş bir korkuluk gerektirir ve dört oyunlama deseni
  adlandırılıp öğretilir.
- **Düzey 4, Yönetme:** Oyunlama riski etkin biçimde izlenir: tanımlar periyodik
  olarak denetlenir, korkuluk çiftleri hâlâ çarpıtmayı yakalayıp yakalamadıkları
  açısından gözden geçirilir ve oyunlama olayları kendi başına bir metrik olarak
  izlenir.
- **Düzey 5, Orkestrasyon:** Kuruluş Goodhart yasasını kalıcı bir tasarım kısıtı
  olarak görür; yeni bir metrik önerildiğinde otomatik olarak gözden geçirir ve
  çarpıtmayı yalnızca sonradan değil, olmadan önce engelleyen belirli yeniden
  tasarımları gösterebilir.

## Tartışma önerileri

1. Kuruluşumuzdaki, bugün korkuluğu olmayan en sonuç doğurucu metrik hangisi?
2. Altta yatan gerçeklik kötüleşirken bir sayının iyileştiğini hiç gördük mü?
3. Kamuya açık metriklerimizden birinin arkasındaki bir tanım sessizce değişse kim fark ederdi?
4. Dört oyunlama deseninden (eşik, tanım, zamanlama, ikame) hangisine kuruluşumuz en yatkın?
5. Büyük bir metriğin bir yıl boyunca oyunlandığını keşfetmek bize güven açısından neye mal olurdu?

## Temel çıkarımlar

- **Goodhart yasası:** hedef haline gelen bir ölçü iyi bir ölçü olmaktan çıkar
  ve bu, bu kitaptaki her metriği yönetir.
- Oyunlama bir karakter kusuru değil, **teşvike rasyonel bir yanıttır**;
  insanları değil teşvik tasarımını düzeltin.
- Aynı davranışı yakaladıkları her yerde ham sayılar yerine **oranları, hızları
  ve kohortları** tercih edin.
- Teşvik bağlanmış her metrik, çarpıtma keşfedildikten sonra eklenmek yerine
  aynı anda tasarlanmış bir **korkuluğa** ihtiyaç duyar.
- Dört oyunlama desenini adıyla gözetleyin: **eşik, tanım, zamanlama ve ikame
  oyunlaması**.
- Bir metriğin tasarımcısı ile davranışı onun tarafından şekillenen kişi
  arasındaki **mesafe** çarpıtma riskini artırır; mümkün olduğunda bu mesafeyi
  kısa tutun.

## Kaynaklar ve ileri okuma

- Goodhart, C. A. E., "Problems of Monetary Management: The UK Experience"
  (1975): Goodhart yasasının kaynağı.
- Strathern, Marilyn, "'Improving Ratings': Audit in the British University
  System" (1997): yaygın biçimde anılan yeniden ifade, "bir ölçü hedef haline
  geldiğinde, iyi bir ölçü olmaktan çıkar."
- *Seeing Like a State*, James C. Scott (okunabilir metriklerin, ulusların
  ölçeğinde ölçtükleri sistemleri nasıl çarpıttığı).
- *The Tyranny of Metrics*, Jerry Z. Muller (metrik takıntısının ve birçok
  meslekteki maliyetlerinin kitap boyunca ele alınışı).
- *Lean Analytics*, Alistair Croll ve Benjamin Yoskovitz (gösteriş ile eyleme
  dönük metrikler ve girişim bağlamında korkuluk tasarımı).
- U.S. Government Accountability Office (GAO) performans ölçümü ve GPRA
  Modernization Act rehberi: kamu sektörü performans raporlaması ve oyunlama riski.
