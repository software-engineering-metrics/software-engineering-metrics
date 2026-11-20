# 7.1 Üretken yapay zeka paradigma değişimi

## Genel bakış ve motivasyon

Yazılım mühendisliği tarihinin büyük bölümünde kod yazmak yeterince yavaş ve
zahmetliydi; bu yüzden yazılan satırlar, yapılan commit'ler, yayımlanan
özellikler gibi ham çıktı hacmi, gerçek emekle en azından gevşek biçimde,
gerçek değerle ise kusurlu da olsa ilişkiliydi. Bu ilişki hiçbir zaman
kusursuz olmadı; konu 3.4 etkinlik metriklerinin yapay zeka öncesi dünyada bile
neden yanılttığına bütün bir konu ayırdı. Ama çoğu kuruluşun, üretilen kod ne
kadar çoksa o kadar iş yapılmıştır varsayımı üzerine metrik programları kuracak
kadar güçlüydü. [Üretken yapay zeka](https://en.wikipedia.org/wiki/Generative_artificial_intelligence)
kodlama asistanları bu varsayımı kesin biçimde yıktı: bir araç artık saniyeler
içinde, eskisinin çok küçük bir maliyetiyle, makul görünen büyük bir kod hacmi
üretebiliyor ve bu hacim, ortaya çıkan kodun çalışıp çalışmadığı, sürdürülebilir
olup olmadığı ya da gerçek bir amaca hizmet edip etmediği konusunda kendi
başına neredeyse hiçbir şey söylemiyor.

Bu konunun temel iddiası, bunun kademeli bir araç değişikliği değil, bir
paradigma değişimi olduğudur. Paradigma değişimi, mevcut ölçüm araçlarınızın
yalnızca hangi değerleri raporladığını değil, gerçekte neyi ölçtüğünü
değiştirir. Bir arabanın motorunu değiştirseniz de hız göstergesi hızı ölçmeye
devam eder; bu kitabın birkaç metriği bu geçişten o kadar sağlam çıkmaz.
Dağıtım sıklığı (konu 2.10), yapay zeka gerçekten değerli işi hızlandırdığı
için yükselebilir, ya da yapay zeka çok sayıda küçük ve düşük değerli değişikliği
üretmeyi çocuk oyuncağı haline getirdiği için yükselebilir; sayı tek başına
artık ikisini ayırt edemez, oysa uygun dikkatle bunu büyük ölçüde yapabiliyordu.
Aynı mantık, ham commit sayıları, kod satırı sayıları ve pull request hacmi için
çok daha güçlü biçimde geçerlidir. Bunların hepsine konu 3.4 tekil metrikler
olarak karşı uyarmıştı; şimdi ise ekip ve kuruluş düzeyinde de geçerli bir riske
dönüşerek büyüdüler.

Büyük ekipler için bu değişim, çoğu kuruluşun ölçüm pratiğinin uyum
sağlayabileceğinden daha hızlı geldi; bu bölümdeki asıl risk, benimseme hızı ile
ölçüm uyumu arasındaki bu açıkta yatıyor. Yapay zeka öncesi dönemin etkinlik
metriklerini ayarlamadan raporlamaya devam eden kurumsal kuruluşlar, değerle
ilişkisi sessizce kopmuş bir metriği kutlama riskini taşır. Yapay zeka araç
yatırımını değerlendiren kamu kuruluşlarının ise, eskimiş ölçüm varsayımlarına
dayanan satın alma ya da politika kararlarına girişmeden önce, hangi metriklerin
güvenilir kaldığını ve hangilerinin artık olmadığını açık bir gözle anlaması
gerekir.

## Temel ilkeler

- **Bu, metriklerin neyi ölçtüğünde bir paradigma değişimidir, kademeli bir
  değişiklik değil.** Bazı mevcut metrikler sessizce eski anlamlarını yitirdi.
- **Çıktı hacmi hiçbir zaman değer için güvenilir bir vekil olmadı ve şimdi
  etkin biçimde güvenilmez hale geldi.** Konu 3.4'ün uyarısı hep doğruydu; bu
  değişim, onu görmezden gelmeyi çok daha pahalı kılıyor.
- **Yapay zeka benimseme hızı ile ölçüm uyum hızı arasındaki açık asıl risktir.**
  Kuruluşlar araçları, metriklerini yeniden düşünmelerinden daha hızlı
  benimsiyor.
- **Bu kitaptaki her metrik eşit etkilenmez.** Sonuç metrikleri (Bölüm 5), bu
  değişime etkinlik ve ham çıktı metriklerinden çok daha dayanıklıdır.
- **Bu değişim sektör çapında ve sürekli, tek seferlik bir ayar değil.** Araçlar
  ve benimsenme örüntüleri evrilmeye devam ettikçe değişimin sürmesini bekleyin.

## Öneriler

### Mevcut metrik setinizi yapay zeka çağı geçerliliği açısından açıkça denetleyin

Mevcut gösterge panelinizi gözden geçirin ve her metrik için doğrudan sorun:
yapay zeka desteğini yoğun kullanan ama öncekinden daha fazla gerçek değer
üretmeyen bir ekip, bu metrikte iyileşmiş bir okuma gösterir miydi? En açıkta
olanlar etkinlik sayımları, commit sıklığı ve eşlenmiş bir kararlılık korkuluğu
olmayan ham dağıtım sıklığıdır (konu 2.10). Bölüm 5'teki sonuç metrikleri,
yani kaçan hata oranı, özellik benimsenmesi ve iş sonuçları, görece dayanıklıdır;
çünkü onları üreten etkinliğin hacmini değil, gerçek sonucu ölçerler.

### Dağıtım sıklığını ve lead time'ı özellikle, korkuluklara artırılmış dikkatle yeniden inceleyin

Konu 2.10, ikame manipülasyonuna karşı zaten uyarmıştı: anlamlı işi önemsiz
dağıtımlara bölerek sayıyı şişirmek. Üretken yapay zeka bu manipülasyon örüntüsünü
çok daha ucuz ve kolay üretilir hale getirir, hatta istemeden bile, çünkü yapay
zeka destekli önemsiz değişiklikler artık neredeyse bedavadır. Değişim başarısızlık
oranı korkuluğunuzu (konu 2.10), bir ekibin yapay zeka destekli geliştirmeyi ne
kadar yoğun benimsediğiyle orantılı biçimde sıkılaştırın ve dağıtım boyutu
eğilimlerini eskisinden de yakından izleyin.

### Kod incelemesi kapasitesini yeni ve kritik bir darboğaz olarak ele alın

Yapay zeka desteği, incelemeye sunulan kod hacmini önemli ölçüde artırıyorsa,
teslimat hattında zaten çoğu kez en büyük bekleme süresi payına sahip olan
inceleme aşaması (konu 2.9) daha da keskin bir kısıt haline gelir. Çok daha
yüksek hacimli yapay zeka üretimi kodu eskisiyle aynı hızda değerlendirmesi
istenen bir inceleyen, kaçınılmaz olarak ya hattı yavaşlatacak ya da inceleme
derinliğini azaltacaktır. Bu, konu 2.9'un zaten uyardığı göz yumma riskidir, ama
şimdi çok daha büyük bir baskı altındadır. Yapay zeka üretimi kod hacmi arttıkça
inceleme derinliğini ve kalite korkuluklarını artırılmış dikkatle izleyin.

### Yapay zeka üretimi kodun, insan yazımı kodla aynı hata profiline sahip olduğunu varsaymayın

Erken kanıtlar ve uygulayıcı deneyimi, yapay zeka üretimi kodun insan yazımı
koddan farklı bir hata profiline sahip olabileceğini düşündürüyor: makul
görünen ama ince biçimde yanlış mantık, güvenle üretilmiş ama hatalı uç durum
işleme, ya da deyimsel ve makul göründüğü için yüzeysel incelemeyi geçen, ama
sistemin kendine özgü bağlamının gerçek bir anlayışıyla düşünülerek yazılmamış
kod. Bunu, kaçan hata verilerinize karşı (konu 5.1) etkin biçimde sınanmaya
değer bir hipotez olarak ele alın; hataları, kaynak kodun büyük ölçüde yapay zeka
tarafından üretilip üretilmediğine göre etiketleyin. Kuruluşunuzun kalite
uygulamalarını kurduğu tarihsel hata oranı ilişkilerinin değişmeden geçerli
kaldığını varsaymayın.

### Metrik şartnamenizi ve yönetişim sürecinizi bu değişim için açıkça güncelleyin

Konu 1.4'ün yönetişim disiplinini izleyerek, bu değişimin metrik programınıza
edilgen biçimde olup bitmesine izin vermeyin. Metrik şartnamenizi açıkça yeniden
ele alın: hangi metriklerin yeni korkuluklara, hangilerinin emekliliğe ihtiyacı
olduğunu ve hangilerinin güvenilir kaldığını, sorgulanmamış bir sürüklenme olarak
değil, bilinçli bir yönetişim kararı olarak adlandırın. Gerekçeyi belgeleyin;
çünkü bu, konu 1.4'ün aksi halde sessizce gerçekleşip ancak çok sonra fark
edilebileceği konusunda uyardığı tanımsal ve bağlamsal kaymanın tam örneğidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Yapay zeka öncesi metrikleri değiştirmeden raporlamaya devam etmek | Kesinti yok, tanıdık raporlama | Değerle ilişkisi sessizce kopmuş metrikleri kutlama riski |
| Tam metrik seti denetimi ve bilinçli revizyon | Güvenilir ölçümü geri kazandırır | Gerçek analitik çaba ve kurumsal değişim yönetimi gerektirir |
| Etkinlik ve çıktı metriklerini tümüyle bırakmak | En açıktaki riski doğrudan ortadan kaldırır | Meşru biçimde yararlı bazı bağlamsal sinyali kaybeder (konu 3.4'ün çekincesi) |
| Tam denetim olmadan korkulukları sıkılaştırmak | Uygulaması daha hızlı | Maruziyeti en bariz durumlardan daha az belirgin metrikleri gözden kaçırabilir |

Merkezi gerilim, **ölçüm sürekliliği ile ölçüm geçerliliği** arasındadır.
Kuruluşlar anlaşılır biçimde tanıdık metrikleri tanıdık yollarla raporlamaya
devam etmeyi tercih eder; çünkü bir metrik programını değiştirmenin gerçek bir
kurumsal maliyeti ve kesintisi vardır. Ama eskiden ölçtüğü şeyi sessizce ölçmeyi
bırakmış bir metriği raporlamaya devam etmek kesintiden daha kötüdür, etkin bir
yanlış yönlendirmedir. Gerilimi, bunu konu 1.4'ün tarif ettiği türden bilinçli,
belgelenmiş bir yönetişim değişikliği olarak ele alarak çözün: kısa vadede
kesintili, ama kuruluşun metriklerini dürüst tutmak için gerekli.

## Ekibinizle tartışılacak sorular

1. **Gösterge panelimizdeki her metrik için, yapay zeka desteğini yoğun kullanan
   ama daha fazla gerçek değer üretmeyen bir ekip iyileşmiş bir okuma gösterir
   miydi?** Metriklerinizi bu testle açıkça gözden geçirin; testi geçemeyenler,
   gözden geçirilmiş korkuluklar ya da emeklilik için en öncelikli adaylarınızdır.

2. **Yapay zeka kodlama desteğini benimsedikten sonra dağıtım sıklığımız veya
   commit hacmimiz arttı mı ve değişim başarısızlık oranı ya da hata oranı buna
   karşılık gelecek biçimde değişti mi, kontrol ettik mi?** Olumlu ya da olumsuz
   bir sonuç varsaymak yerine eşlenmiş gerçek verileri çekin.

3. **Kod inceleme kapasitemiz yapay zeka destekli kod hacmindeki artışa ayak
   uyduruyor mu, yoksa inceleme derinliği artan baskı altında sessizce mi
   aşınıyor?** Göz yumma riskinin yoğunlaştığına dair işaretler için özellikle
   inceleme aşaması metriklerini (konu 2.9) kontrol edin.

4. **Hataları, kaynak kodun büyük ölçüde yapay zeka tarafından üretilip
   üretilmediğine göre etiketliyor muyuz ve öyleyse bu veri şimdiye kadar ne
   gösteriyor?** Şu an etiketlemiyorsanız, başlamak için ne gerektiğini
   tartışın; çünkü bu veri, tarihsel kalite varsayımlarımızın hâlâ geçerli
   olup olmadığıyla doğrudan ilgilidir.

5. **Bu değişim ışığında metrik şartnamemizi (konu 1.4) bilinçli olarak yeniden ele
   aldık mı, yoksa ölçüm pratiğimiz yalnızca değişmeden mi sürdü?** Dürüst yanıt
   ikincisiyse, bu konunun önce kapatılmasını önerdiği açık tam olarak budur.

6. **Kuruluşumuzun bu değişim karşısında hazırlıksız yakalanması, artık düşündüğümüz
   anlama gelmeyen bir metriği kutlaması neye benzerdi?** Bu somut, biraz rahatsız
   edici düşünce deneyi, bu konunun önerdiği denetimi, o senaryo gerçekten
   yaşanmadan önce yapmaya motive etmeye yardım eder.

## Sektörel bakış

**Startup.** Yapay zeka araçlarının hızlı benimsenmesi yaygındır ve çoğu kez
gerçek bir rekabet avantajıdır; ama benimsemeyi çekici kılan aynı hız,
sorgulanmamış metrik sürüklenmesini daha olası kılar. Yapay zeka
benimsemesinden raporladığınız verimlilik kazanımlarının yanında sonuç
metriklerini de (Bölüm 5) kontrol etme alışkanlığı edinin; yalnızca hız
iyileşmelerini raporlamayın.

**Küçük işletme.** Yapay zeka kodlama desteği küçük bir ekibin kapasitesini
anlamlı ölçüde genişletebilir, ama kalite korkuluklarını kontrol etmeden ham
çıktı artışlarını tartışmasız başarı olarak raporlama dürtüsüne direnin; küçük
bir ekibin fark edilmemiş bir kalite sorununu emme kapasitesi, daha fazla
yedekliliğe sahip daha büyük bir kuruluşa göre daha azdır.

**Kurumsal.** Bu riskin ölçeği burada belirgin biçimde bileşik hale gelir; çünkü
düzinelerce ya da yüzlerce ekipte eşzamanlı yapay zeka benimsemesi, tek bir ekip
örüntüyü yerel olarak fark etmeden metrik geçerliliğini kuruluş çapında
kaydırabilir. Bu konunun önerdiği metrik seti denetimini yalnızca ekip ekip değil
kuruluş düzeyinde yürütün ve yönetişimi (konu 1.4) merkezi ve açık biçimde
güncelleyin.

**Kamu.** Kamu kuruluşları çoğunlukla yeni teknolojiyi daha temkinli benimser;
ama kamu teknoloji programlarını değerlendirmek için kullanılan metrikler ve
kıyaslamalar sıklıkla, bu aynı baskı altında kendisi de kayan özel sektör
verilerinden alınır ya da onlarla karşılaştırılır. Beklentileri belirlemek ya da
performansı değerlendirmek için kullanmadan önce, karşılaştırdığınız hangi sektör
kıyaslamalarının bu değişimden etkilendiğini açıkça anlayın.

## Örnekler

**Kurumsal.** Bir finansal teknoloji şirketinin mühendislik yönetimi, yaygın
yapay zeka kodlama asistanı benimsemesini izleyen iki çeyrekte dağıtım
sıklığının yaklaşık yüzde 40 arttığını fark etti ve bunu başlangıçta yönetim
kuruluna sunumda doğrudan bir verimlilik kazanımı olarak raporladı. Kalitenin
kontrol edilip edilmediğini soran şüpheci bir yönetim kurulu üyesinin sorusuyla
tetiklenen daha dikkatli bir takip analizi, değişim başarısızlık oranının
dağıtım sıklığıyla neredeyse aynı hızda arttığını ve eşlenmiş kararlılık metriği
gerçekten incelendiğinde görünen kazancı tümüyle sıfırladığını buldu. Şirketin
revize raporlaması artık yapay zeka destekli verimlilik iddiaları ortaya
konduğunda dağıtım sıklığını ve değişim başarısızlık oranını açıkça birlikte
sunuyor; bu da daha önceki, neredeyse kamuya açık yanıltıcı iddiayı önlüyor.

**Kamu.** Mühendislik ekiplerinden bir alt kümede yapay zeka kodlama desteğini
pilot olarak deneyen bir eyalet hükümeti BT dairesi, mühendis başına ham kod
çıktısının önemli ölçüde arttığını buldu; bu rakam başlangıçta dahili pilot
incelemesinde olumlu biçimde anıldı. Bu kitabın rehberliğinin dairenin
değerlendirme çerçevesine dahil edilmesiyle tetiklenen daha yakın bir analiz,
yapay zeka destekli ve yapay zeka desteksiz iş için kaçan hata oranını özellikle
inceledi ve yapay zeka destekli grupta, yapay zeka araçlarının eğitim sırasında
karşılaşmadığı olağandışı vatandaş koşullarına ait uç durum işlemede yoğunlaşan,
ılımlı biçimde yüksek bir hata oranı buldu. Bu bulgu pilotu durdurmadı, ama
uygunluk uç durum mantığına dokunan yapay zeka destekli değişikliklerde inceleme
titizliğinin belirli ve hedefli biçimde artırılmasına yol açtı; yalnızca ham çıktı
metriğinin asla ortaya çıkaramayacağı gerçek riski ele aldı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Bu denetimi proaktif olarak yürütmenin getirisi, yakından bakıldığında gerçek
hiçbir şey ölçmediği ortaya çıkan bir metriği raporlamaktan doğan kamuya açık ya
da yönetim kurulu düzeyinde bir mahcubiyetten kaçınmaktır; yukarıdaki finansal
teknoloji örneğinin neredeyse yol açtığı senaryo tam olarak budur. Bu değişimin
önüne geçen kuruluş paydaşlarına karşı itibarını korur; içi boş bir metriği
raporlarken yakalanan kuruluş ise gerçek ve büyük ölçüde önlenebilir bir itibar
maliyeti öder.

Toplam sahip olma maliyeti; mevcut metrik setini denetleme, korkulukları
sıkılaştırma ve yönetişim belgelerini güncelleme analitik çabasıdır. Bu, sessizce
iddia ettiğini ölçmeyi bırakmış metrikleri raporlamaya devam etmenin sürekli
riskine kıyasla tek seferlik, ılımlı bir yatırımdır. Bu maliyet daha düşük
düzeyde yinelenir de, çünkü bu değişim sürekli bir olgudur, tek seferlik bir olay
değil; araçlar ve benimsenme örüntüleri evrilmeye devam ettikçe dönemsel yeniden
denetim, metrik yönetişim ritmine makul ve kalıcı bir ektir.

## Anti-desenler ve tuzaklar

- **Yapay zeka öncesi dönemin etkinlik metriklerini değiştirmeden ve eleştirisiz
  raporlamaya devam etmek:** gerçek değerle ilişkisi sessizce kopmuş bir metriği
  kutlama riski taşır.
- **Dağıtım sıklığı ya da çıktı hacmi artışlarını eşlenmiş kararlılık korkuluğu
  olmadan raporlamak:** konu 2.10'un uyarısını, yapay zeka destekli geliştirmede
  çok daha yüksek bahislerle tekrarlar.
- **Yapay zeka üretimi kodun insan yazımı kodla aynı hata profiline sahip
  olduğunu kontrol etmeden varsaymak:** etkin biçimde yanlış olabilecek sınanmamış
  bir varsayım.
- **Artan yapay zeka üretimi kod hacmi altında inceleme derinliğinin sessizce
  aşınmasına izin vermek:** konu 2.9'daki göz yumma riskinin yoğunlaşmış hali.
- **Bu değişimi sürekli bir kaygı yerine tek seferlik bir ayar olarak görmek:**
  araçlar ve benimsenme örüntüleri evrilmeye devam eder ve ölçüm pratiğinin
  buna ayak uydurması gerekir.
- **Karşılaştırdığınız sektör kıyaslamalarının aynı baskı altında kendilerinin
  kayıp kaymadığını anlamadan onlarla kıyaslamak:** göreli performansa dair
  yanlış bir güven duygusu riski taşır.

## Olgunluk modeli

- **Seviye 1, Başlatma:** Yapay zeka öncesi metrikler değiştirilmeden raporlanır;
  yapay zeka benimsemesinin geçerliliklerini etkilemiş olabileceğine dair hiçbir
  farkındalık yoktur.
- **Seviye 2, Geliştirme:** Değişime dair bir miktar farkındalık vardır, ama mevcut
  metrik setinin sistematik bir denetimi yapılmamıştır.
- **Seviye 3, Standartlaştırma:** Tam bir metrik seti denetimi yürütülmüş,
  korkuluklar sıkılaştırılmış ve metrikler etkilenmiş ya da dayanıklı olarak
  belgelenmiştir, kuruluş genelinde.
- **Seviye 4, Yönetme:** Kuruluşun tarihsel kalite ilişkilerinin hâlâ geçerli olup
  olmadığını varsaymak yerine sınamak için, hatalar ve kalite sonuçları yapay zeka
  destek düzeyine göre etkin biçimde etiketlenir ve izlenir.
- **Seviye 5, Orkestrasyon:** Kuruluş, yapay zeka araçları ve benimsenme örüntüleri
  evrilmeye devam ettikçe metriklerini yeniden inceleyen olgun, sürekli bir
  pratiğe sahiptir ve bu değişime bir sorun yüzeye çıktıktan sonra tepkisel
  olarak değil, proaktif olarak verilmiş belirli yönetişim kararlarını
  gösterebilir.

## Tartışma önerileri

1. Mevcut metriklerimizden hangileri, yapay zeka desteğini yoğun kullanan ama daha fazla gerçek değer üretmeyen bir ekibi en çok pohpohlardı?
2. Yapay zeka benimsemesinden beri dağıtım sıklığımız arttı mı ve değişim başarısızlık oranı onunla birlikte hareket etti mi?
3. Kalite sonuçlarını yapay zeka destek düzeyine göre etiketliyor muyuz ve bu veri ne gösterirdi?
4. İnceleme kapasitemiz yapay zeka üretimi kod hacmindeki artışa ayak uyduruyor mu?
5. Şu anda kendimizi hangi sektör kıyaslamasıyla karşılaştırıyoruz ve o kıyaslama bu baskı altında kendisi kaymış mı?

## Temel çıkarımlar

- Üretken yapay zeka, kademeli bir araç değişikliği değil, **birkaç mevcut metriğin
  neyi ölçtüğünde bir paradigma değişimidir**; bazı metrikler sessizce eski
  anlamlarını yitirdi.
- **Etkinlik ve ham çıktı metrikleri en çok açıkta olanlardır**; sonuç metrikleri
  (Bölüm 5) görece dayanıklıdır.
- Yapay zeka destekli geliştirme benimsemesiyle orantılı olarak **korkulukları,
  özellikle değişim başarısızlık oranını, sıkılaştırın.**
- Yapay zeka üretimi kodun insan yazımı koddan **farklı bir hata profili taşıyıp
  taşımadığını varsaymayın, etiketlenmiş kaçan hata verileriyle sınayın.**
- Bunu **tek seferlik değil, sürekli bir yönetişim kaygısı** olarak ele alın
  (konu 1.4); çünkü araçlar ve benimsenme örüntüleri evrilmeye devam eder.

## Kaynaklar ve ileri okuma

- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (bu konunun, bu değişim altında daha az değil daha çok
  önem kazandığını savunduğu sonuç temelli ölçüm temeli).
- GitHub'ın yapay zeka ile eşli programlama ve geliştirici verimliliği üzerine
  araştırması (yapay zeka destekli geliştirmenin ölçülebilir etkilerine dair
  sektör araştırması).
- Google Cloud'un DevOps Research and Assessment programı, [dora.dev](https://dora.dev/)
  (son yıllarda yapay zeka benimseme bulgularını da kapsayan süregelen State of
  DevOps araştırması).
- *The Tyranny of Metrics*, Jerry Z. Muller (hacim temelli metriklere şüpheyle
  yaklaşmanın genel gerekçesi; çıktı hacmi ucuzladıkça doğrudan ilgili).
