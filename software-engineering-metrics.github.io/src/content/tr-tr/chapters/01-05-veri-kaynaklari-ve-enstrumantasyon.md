# 1.5 Veri kaynakları ve enstrümantasyon

## Genel bakış ve motivasyon

Bir metrik, altındaki veri kadar güvenilirdir; yine de çoğu metrik programı panoları
tasarlamaya, onları besleyen hattı doğrulamaya harcadığından çok daha fazla emek
harcar. Bu tersine bir yaklaşımdır. Tutarsız, öz bildirime dayalı ya da sessizce
bozulmuş enstrümantasyon üzerine kurulmuş, güzelce tasarlanmış bir grafik hiç
grafik olmamasından kötüdür; çünkü yanlış olduğu halde yetkili görünür. Bu konu,
kitabın geri kalanının varsaydığı gösterişsiz temelle ilgilidir: mühendislik
verisinin gerçekte nereden geldiği, otomatik enstrümantasyona öz bildirimden ne
zaman daha çok güvenileceği ve bir metriği kimse fark etmeden sessizce geçersiz
kılan veri kalitesi hataları.

Yazılım mühendisliği verisi, her biri farklı güvenilirlik özellikleri taşıyan
birkaç kaynak türünden gelir. Sürüm denetimi ve [CI/CD](https://en.wikipedia.org/wiki/CI/CD)
hatları, gerçekte ne olduğunun nesnel, zaman damgalı, taklit edilmesi zor
kayıtlarını üretir. Hata izleyiciler ve proje yönetimi araçları, insanların durumu
doğru ve zamanında güncellemesine bağlı kayıtlar üretir; insanlar bunu çoğu zaman
tutarsız yapar. Anketler, memnuniyet gibi hiçbir sistemin gözlemleyemeyeceği şeyler
için paha biçilmez, ancak hatırlama yanlılığına ve sosyal beğenilirlik etkilerine
tabi öz bildirim verisi üretir. Gözlemlenebilirlik platformları nesnel, ancak
yalnızca enstrümante edileni kapsayan sistem düzeyinde telemetri üretir. Belirli bir
metriğin verisinin hangi kategoriden geldiğini bilmek, ona ne kadar güveneceğinizi
ve hangi hata biçimlerini gözleyeceğinizi söyler.

Kurumsal ve kamu ölçeğinde veri kalitesi sorunları katlanır; çünkü verinin
kaynağı ile bir panodaki nihai kullanımı arasındaki mesafe birden çok sistem,
entegrasyon ve dönüşümden geçerek büyür. Kaynak sistemde bir anlama gelen bir alan,
raporlama katmanına ulaştığında ince biçimde farklı bir anlama gelebilir ve aşağı
akıştaki kimse bunu fark etmez, çünkü sayı hâlâ makul görünür. Enstrümantasyonu
doğru yapmak, çerçeveleri doğru yapmaktan daha az heyecan vericidir, ama kitaptaki
her şeyin üzerinde durduğu temeldir.

## Temel ilkeler

- **Sistemin olayı doğrudan gözlemleyebildiği her yerde enstrümantasyonu öz
  bildirime tercih edin.** Hattan gelen bir dağıtım zaman damgası, bir ekibin öz
  bildirdiği dağıtım sayısından daha güvenilirdir.
- **Öz bildirimi yalnızca doğrudan gözlemlenemeyen şeyler için kullanın.**
  Memnuniyet, algılanan sürtünme ve iyi oluşun kayıt sistemi ikamesi yoktur;
  doğrudan sorun ve anketi iyi tasarlayın (konu 3.7). Öz bildirimi özellikle bu
  kategori için ayırın.
- **Her metriğin verisinin bir kaynak sistemi, bir toplama yöntemi ve bilinen bir
  hata biçimi vardır.** Yalnızca tanımı değil, üçünü de belgeleyin.
- **Veri kalitesi sessizce çürür.** Bir yıl önce doğru çalışan bir hat bugün
  sessizce bozuk olabilir ve bir pano şikâyet etmeden yanlış bir sayıyı göstermeye
  devam eder.
- **Bir çevirinin aşağı akışında değil, doğruluk noktasında enstrümante edin.**
  Olay ile pano arasındaki her sıçrama, anlamın kayması için bir fırsattır.

## Öneriler

### Güvenmeden önce her metriği gerçek kaynak sistemine eşleyin

Bir panodaki her metrik için, altta yatan olayı üreten belirli sistemi adlandırın:
dağıtım olayları için CI/CD hattı, commit ve birleştirme olayları için sürüm
denetimi sunucusu, kesinti kayıtları için olay izleyici, öz bildirilen memnuniyet
için anket platformu. Tam sistemi adlandıramıyorsanız, sayının nereden geldiğini
gerçekte bilmiyorsunuz demektir ve güvenilirliğini değerlendiremezsiniz. Bu
eşleme, konu 1.4'teki yönetişim tüzüğü için ayrı bir alıştırma değil, bir ön
koşuldur.

### Raporda değil, olayda enstrümante edin

En güvenilir veri, bir olayı gerçekleştiği anda otomatik yakalar: bir hat, bir
dağıtımı tamamlandığı anda kaydeder, bir sürüm denetim sistemi bir birleştirmeyi
indiği anda kaydeder. Bir insanın sonradan bir durum alanını güncellemeyi
hatırlamasına bağlı veri, bileti "bitti" olarak işaretlemek, bir dağıtımı elle bir
elektronik tabloya kaydetmek, gerçek olaydan uzaklaştıkça ve sorumlu kişi
meşgullendikçe doğruluğunu yitirir. Otomatik bir olay mevcutsa, aynı olgunun
insan bildirimli bir vekilinden çok onu tercih edin.

### Anketleri yalnızca bir kişinin söyleyebileceği şeyler için ayırın

Bazı şeyler sistem telemetrisinden gerçekten gözlemlenemez: bir mühendisin işini
anlamlı bulup bulmadığı, bir sürecin bunaltıcı gelip gelmediği, tükenmişlik riskinin
artıp artmadığı. Bunlar doğrudan sormayı gerektirir ve iyi tasarlanmış bir anket
(mekanikleri konu 3.7'de ele alınır) doğru araçtır. Hata, bir sistemin doğrudan
gözlemleyebileceği şeyler için öz bildirim kullanmaktır; mühendislerden dağıtım
sıklıklarını hattan çekmek yerine kendilerinin tahmin etmesini istemek gibi. Bu,
nesnel olabilecek veriye gereksiz gürültü ve yanlılık katar.

### Veri kalitesi denetimlerini hattın kendisine yerleştirin

Metrik hatlarına üretim koduyla aynı titizlikle davranın: bir kaynak veri
göndermeyi bıraktığında, bir alanın dağılımı beklenmedik biçimde kaydığında ya da
bir sayı beklenmedik biçimde sıfıra düştüğünde işaretleyen otomatik denetimler
ekleyin. Bayat ya da bozuk veriyi sanki güncelmiş gibi sessizce gösteren bir pano,
görünür biçimde "veri yok" diyen bir panodan kötüdür; çünkü birincisi güveni
görünmez biçimde aşındırırken ikincisi en azından kendi sınırlılıkları hakkında
doğruyu söyler.

### Toplama yöntemini tanımla birlikte belgeleyin

Bir metriğin tanımı ("değişiklikler için lead time"), toplama yöntemi olmadan
tamamlanmış değildir (sürüm denetimindeki ilk commit zaman damgasından hattaki
üretim dağıtımı zaman damgasına kadar ölçülür, acil düzeltme dalları hariç). Aynı
tanıma ama farklı toplama yöntemlerine sahip iki ekip yine de karşılaştırılamaz
sayılar üretir. İkisini de konu 1.4'teki metrik tüzüğüne kaydedin ve birindeki
değişikliği aynı belgelenmiş gözden geçirmeyi gerektiren bir değişiklik olarak ele
alın.

## Ödünleşimler: artılar ve eksiler

| Kaynak türü | Artılar | Eksiler |
| --- | --- | --- |
| Otomatik hat enstrümantasyonu (CI/CD, sürüm denetimi) | Nesnel, zaman damgalı, taklit edilmesi zor, düşük süregelen emek | Kurmak ve sürdürmek için önceden mühendislik yatırımı gerektirir |
| Hata izleyici ve proje yönetimi verisi | Yaygın olarak mevcut, ekiplere tanıdık | İnsan özenine bağlı; ekipler arasında çoğu zaman tutarsız |
| Anketler ve öz bildirim | Öznel deneyim için (memnuniyet, iyi oluş) tek kaynak | Hatırlama yanlılığı, sosyal beğenilirlik yanlılığı, yanıt yorgunluğu |
| Gözlemlenebilirlik ve telemetri platformları | Zengin, gerçek zamanlı, sistem düzeyinde sinyal | Yalnızca açıkça enstrümante edileni kapsar; ölçekte pahalı olabilir |

Temel gerilim **nesnellik ile kapsam** arasındadır. Otomatik enstrümantasyon en
güvenilir kaynaktır ama öznel deneyimi hiç gözlemleyemez; anketler ise otomasyonun
ulaşamadığı şeye tam olarak ulaşabilir ancak gerçek yanlılık riski taşır. Gerilimi,
bir olay doğrudan gözlemlenebildiği her yerde otomatik enstrümantasyon kullanarak
ve öz bildirimi, bir sistemin sağlayabileceği veri için tembel bir ikame olarak
değil, yalnızca gerçekten bir kişiye sormayı gerektiren şeyler için ayırarak
çözün.

## Ekibinizle tartışılacak sorular

1. **En önemli beş metriğimiz için her birinin tam kaynak sistemini ve toplama
   yöntemini adlandırabilir miyiz, yoksa verinin gerçekte nereden geldiğini
   bilmeden bir tanım mı varsayıyoruz?** Bu şaşırtıcı derecede yaygın bir
   boşluktur: bir metrik bir çerçeveden ya da bir satıcının varsayılan panosundan
   benimsenir ve mevcut ekipteki hiç kimse altta yatan verinin hangi sistem
   tarafından, nasıl üretildiğini bilmez. Her birini kökenine kadar grup alıştırması
   olarak izleyin.

2. **Metriklerimizden hangileri, bir sistemin doğrudan gözlemleyebileceği bir şey
   için öz bildirime dayanıyor ve bu öz bildirimi gerçek enstrümantasyonla
   değiştirmek için ne gerekir?** Öz bildirilen dağıtım sayıları, öz bildirilen
   çalışma saatleri ve öz tahmin edilen cycle time, otomasyonun daha güvenilir
   yakalayabileceği bir şey için yanlış veri kaynağı kullanmanın yaygın
   örnekleridir. Bunları belirleyin ve en yüksek riskli olanları değiştirmeye
   öncelik verin.

3. **Veri hatlarımızdan biri sessizce bozulsa bunu nasıl anlardık?** Çoğu kuruluş
   bozuk bir metrik hattını yalnızca biri bir sayının makul görünmediğini
   fark ettiğinde keşfeder ve bu aylar sürebilir. Hatlarınızdan herhangi birinin
   bugün otomatik sağlık denetimleri olup olmadığını ve yoksa hangilerinin buna en
   çok ihtiyaç duyduğunu tartışın.

4. **Sistemler arası bir çeviri, kimse bunu bilerek kararlaştırmadan bir metriğin
   anlamını nerede değiştirdi?** Kaynak sistemde bir anlama gelen bir alan, bir
   entegrasyon ya da geçişten sonra ince biçimde farklı bir anlama gelebilir ve
   ortaya çıkan sayı yanlış olduğu halde makul görünebilir. En sonuç doğurucu
   metriğinizin tüm veri yolunu gezin ve çeviri noktalarını arayın.

5. **Metrik tüzüğümüz için yalnızca tanımları değil, toplama yöntemlerini de
   belgeliyor muyuz?** İki ekip bir metriğin adını ve tanımını paylaşırken onu
   farklı toplama yöntemlerinden hesaplayabilir ve gerçekte karşılaştırılamaz
   sayılar üretebilir. Tüzüklerinizden bir örneklemi bu özel boşluğa karşı
   denetleyin.

6. **Bir sayı beklenmedik biçimde oynadığında gerçek bir eğilimi veri kalitesi
   yapaylığından nasıl ayırt ediyoruz?** Bir metrikteki ani kayma çoğu zaman ya
   gerçek bir değişikliğin ya da bozuk bir hattın ilk işaretidir ve ikisini ayırmak,
   hızla araştırabilmek için veri kaynağını yeterince iyi bilmeyi gerektirir.
   Karşılaştığınız son açıklanamayan metrik kaymasında ekibinizin gerçek sürecini
   tartışın.

## Sektörel bakış

**Girişim (startup).** Küçük bir yığınla metriklerinizin çoğu, özel hatlar
kurmadan doğrudan CI/CD sağlayıcınızdan, sürüm denetimi sunucunuzdan ve hafif bir
anket aracından gelebilir. Risk, ekip hızlı ilerlediği için temel sağlık
denetimlerini bile atlamaktır; bir veri kaynağının hâlâ olay gönderdiğini denetleyen
beş dakikalık otomatik bir denetim, sessizce kör uçmaya karşı ucuz bir sigortadır.

**Küçük işletme.** Bakımını yapacak kapasiteniz olmayan özel veri hatları kurmak
yerine mevcut araçlarınızın yerleşik raporlamasına yaslanın. Hangi sayıların otomatik
sistemlerden geldiğini, hangilerinin birinin elektronik tabloya yazdığı tahminler
olduğunu açıkça belirtin; ikisi aynı sayfada bitse bile çok farklı güvenilirlik
taşırlar.

**Kurumsal.** Veri kalitesi sorunları entegrasyonlar, geçişler ve iş birimi
sınırları boyunca katlanır. En sonuç doğurucu metrikleriniz için merkezî, iyi
izlenen veri hatlarına yatırım yapın, otomatik veri kalitesi denetimlerini standart
bir uygulama olarak kurun ve iş birimleri arasında metrik karşılaştırırken yalnızca
tanımları değil toplama yöntemlerini de denetleyin.

**Kamu.** Veri kökeni hukuki ve denetim ağırlığı taşıyabilir: yayımlanmış bir
performans rakamının yalnızca değeri değil tüm toplama zincirinin dış denetiminden
geçmesi gerekebilir. Veri soy ağacını açıkça belgeleyin, bir yöntem değiştikten
sonra bile tarihsel toplama yöntemi kayıtlarını saklayın ve bir sayının yalnızca
şu an ne gösterdiğini değil, tam olarak nasıl üretildiğini göstermeye hazır olun.

## Örnekler

**Kurumsal.** Bir finansal hizmetler şirketinin mühendislik yönetimi, on sekiz ay
önceki bir veri hattı geçişinin zaman damgası kaynağını ilk commit'ten pull request
oluşturmaya sessizce değiştirdiğini ve bunun her ekipte görünür lead time'ı
ortalama birkaç saat kısalttığını, kimse fark etmeden ya da onaylamadan, keşfetmeden
önce iki yıl boyunca "değişiklikler için lead time"ı izlemişti. Çözüm, her metriğin
dağılımını haftadan haftaya karşılaştıran ve istatistiksel olarak olağandışı
kaymaları insan incelemesi için işaretleyen bir veri kalitesi denetimi getirdi;
bu denetim sonraki yıl içinde iki sessiz hat sorununu daha yakaladı.

**Kamu.** Bir ulaştırma kurumunun kamuya dönük hizmet güvenilirliği panosu,
otomatik sensör telemetrisi ile bölge ofislerinden elle girilen olay raporlarının
bir karışımına dayanıyordu. Bir denetim, personel kapasitesi daha az olan
bölgelerin küçük olayları sistematik biçimde eksik bildirdiğini ortaya çıkardı;
sebep sahtekârlık değil, elle girişin daha acil işlerle zaman için yarışmasıydı.
Bu da yayımlanan güvenilirlik rakamının, yetersiz kaynaklı bakımın fark edilmeden
kalmasını en az kaldırabilecek bölgelerde gerçeklikten daha iyi olduğu anlamına
geliyordu. Kurumun çözümü, mümkün olan her yerde elle olay girişini otomatik
sensör tetiklemeli kayıtla değiştirmek ve yayımlanan rakamın yanına elle
raporlama kapsamının belgelenmiş bir tahminini eklemekti.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Sağlam enstrümantasyonun getirisi güvendir: verisine güvenen bir yönetim ekibi onun
üzerinden kararlı biçimde hareket edebilir; sessizce bozulmuş bir hattın yaktığı bir
ekip ise her sayıyı sorgulamaya başlar ve bu, metriklere bağlı her kararı yavaşlatır.
Bu güven kaybı pahalıdır ve onarılması zordur; çoğu zaman yeniden kurmak, özgün
enstrümantasyon yatırımının maliyetinden çok daha uzun sürer.

İyi enstrümantasyonun toplam sahip olma maliyeti, güvenilir hatlar kurmak için
önceden yapılan mühendislik işini ve süregelen veri kalitesi izleme maliyetini
içerir; ikisinde de yetersiz yatırım yapmak kolaydır, çünkü hiçbiri kendi başına
görünür bir pano kutucuğu üretmez. Bu yetersiz yatırım sahte bir tasarruftur:
kararların aylarca kötü veri üzerine verilmesinden sonra sessizce bozulmuş bir hattı
keşfetmenin maliyeti, onu ilk günde yakalayacak sağlık denetimlerini kurmanın
maliyetinden çok daha yüksektir.

## Anti-desenler ve tuzaklar

- **Kaynak sistemini bilmeden bir sayıya güvenmek:** bir çerçeveden ya da satıcı
  varsayılanından benimsenen ve verinin gerçekte nereden geldiğini kimsenin
  izlemediği bir metrik.
- **Bir sistemin doğrudan gözlemleyebileceği şeyi öz bildirmek:** nesnel olabilecek
  veriye gereksiz gürültü ve yanlılık katar.
- **Bir metrik hattında otomatik veri kalitesi denetimi olmaması:** sessizce bozulmuş
  bir hat aylarca fark edilmeden yanlış sayılar gösterebilir.
- **Yalnızca tanımı belgeleyip toplama yöntemini belgelememek:** aynı metrik adına
  sahip iki ekip yine de karşılaştırılamaz sayılar hesaplıyor olabilir.
- **"0" ya da bayat veriyi, kaynak hatası göstergesi olmadan sanki güncelmiş gibi
  gösteren bir pano:** görünür bir "veri yok" mesajından kötüdür.
- **Yetersiz kaynaklı bölgelerin ya da ekiplerin elle giriş yükü nedeniyle sistematik
  eksik bildirmesi:** tam olarak en çok dikkat gereken alanlarla ilişkili bir veri
  kalitesi boşluğu.

## Olgunluk modeli

- **Düzey 1, Başlangıç:** Kimse bir metriği güvenilir biçimde kaynak sistemine kadar
  izleyemez; hatların sağlık denetimi yoktur ve arızalar fark edilmez.
- **Düzey 2, Geliştirme:** Bazı metriklerin belgelenmiş kaynakları vardır, ancak
  toplama yöntemleri tutarsızdır ve veri kalitesi denetimleri en iyi ihtimalle
  gelişigüzeldir.
- **Düzey 3, Standartlaştırma:** Yönetilen her metrik kaynak sistemini ve toplama
  yöntemini belgeler; bir olayın doğrudan gözlemlenebildiği her yerde otomatik
  hatlar öz bildirime tercih edilir.
- **Düzey 4, Yönetme:** Otomatik veri kalitesi denetimleri her sonuç doğurucu hattı
  izler, anormallikleri inceleme için işaretler ve veri soy ağacı belgelenmiş ve
  denetlenebilirdir.
- **Düzey 5, Orkestrasyon:** Kuruluş veri kalitesini kendi izlemesi ve olay yanıtı
  olan birinci sınıf bir mühendislik disiplini olarak ele alır ve yayımlanmış
  herhangi bir metrik için istendiğinde tam kökeni gösterebilir.

## Tartışma önerileri

1. En önemli üç metriğimizi şu anda, bu toplantıda, canlı olarak tam kaynak sistemine kadar izleyebilir miyiz?
2. Mevcut metriklerimizden hangileri, bir sistemin doğrudan ölçebileceği bir şey için öz bildirime dayanıyor?
3. Metrik hatlarımızdan herhangi birinin bugün otomatik sağlık denetimleri var mı?
4. En son ne zaman sessizce bozulmuş bir veri hattı keşfettik ve ne kadar süredir yanlıştı?
5. Elle veri girişi, bildirilen ile gerçek durum arasında nerede bir boşluk yaratıyor?

## Temel çıkarımlar

- Bir sistemin olayı doğrudan gözlemleyebildiği her yerde **otomatik
  enstrümantasyonu** öz bildirime tercih edin; öz bildirimi gerçekten öznel
  deneyim için ayırın.
- Her metrik, yalnızca tanımı değil, belgelenmiş bir **kaynak sistemi ve toplama
  yöntemi** gerektirir.
- Veri kalitesi **sessizce çürür**; bozulmayı tesadüfen keşfetmek yerine otomatik
  denetimleri hattın kendisine yerleştirin.
- Olayla pano arasındaki kaymayı en aza indirmek için bir çevirinin aşağı
  akışında değil **olayda** enstrümante edin.
- Sessizce bozulmuş bir hattın maliyeti, yani aylarca kötü veri üzerine verilen
  kararlar, onu yakalayacak sağlık denetimlerinin maliyetini çok aşar.

## Kaynaklar ve ileri okuma

- *Observability Engineering*, Charity Majors, Liz Fong-Jones ve George Miranda
  (enstrümantasyon ve telemetri tasarım ilkeleri).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (DORA metriklerinin arkasındaki enstrümantasyon yaklaşımı).
- *Data Quality: The Accuracy Dimension*, Jack E. Olson (metrik hatlarına
  uygulanabilen veri kalitesi kavramları).
- *How to Measure Anything*, Douglas W. Hubbard (doğrudan gözlemlenmesi zor
  görünen nicelikler için ölçüm yöntemleri).
