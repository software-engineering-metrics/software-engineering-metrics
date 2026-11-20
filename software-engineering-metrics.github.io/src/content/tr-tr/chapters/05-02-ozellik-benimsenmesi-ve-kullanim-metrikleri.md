# 5.2 Özellik benimsenmesi ve kullanım metrikleri

## Genel bakış ve motivasyon

**Özellik benimsenmesi** (feature adoption), bir özelliğin hedeflendiği
kişilerin onu gerçekten kullanıp kullanmadığını, hangi oranda kullandığını ve bu
kullanımın zaman içinde sürüp sürmediğini ölçer. Kitabın 2'den 4'e kadar olan
bölümlerinin ölçtüğü her şey için, çok doğrudan anlamda bir gerçeklik
kontrolüdür: bir kuruluş sık dağıtım yapabilir, mükemmel bir geliştirici
deneyimini sürdürebilir, kusursuz test edilmiş kod teslim edebilir ve yine de
kimsenin istemediği şeyler inşa ediyor olabilir. Benimsenme verisi, bir
mühendislik kuruluşunun çıktısının gerçek bir sonuca bağlanıp bağlanmadığını
öğrendiği yerdir. Bu, konu 1.3'ün ortaya koyduğu girdi-çıktı-sonuç ayrımının
kitaptaki en somut duruma uygulanmış hâlidir: belirli, teslim edilmiş bir özellik.

Bu konunun temel kaygısı şudur: benimsenme verisi, bu kitaptaki hemen her
metrik ailesinden daha çok, bilgilendirmek yerine pohpohlayacak biçimde ölçülmeye
elverişlidir. Bir özellik, salt merak ya da zorunlu maruziyet (kullanıcı ister
istemez karşısına çıkan bir modal pencere) yüzünden etkileyici bir ilk
benimsenme gösterebilir; oysa gerçek, sürdürülen değer sunumu, yani yenilik
etkisi sönünce insanların kullanmaya devam edip etmediği, tamamen farklı bir
hikâye anlatır. Gerçek benimsenmeyi geçici bir sıçramadan ayırmak bu konunun
temel teknik zorluğudur ve bunu yanlış yapmak, kuruluşları sessizce başarısız
olan özellikleri kutlamaya, henüz kitlesini bulmaya başlayanları ise terk
etmeye düzenli olarak götürür.

Büyük ekiplerde özellik benimsenme verisi, yol haritası önceliklendirmesini,
kendi ekibinin işini en ikna edici biçimde savunan kişinin değil, kanıtın
yönlendirdiği bir şeye dönüştürür. Büyük ürün portföylerini yöneten kurumsal
kuruluşların hangi yatırımların ekmeğini çıkardığını belirlemek için benimsenme
verisine ihtiyacı vardır. Vatandaşa dönük dijital hizmetler kuran devlet
kuruluşlarının ise kamu yatırımının yalnızca teknik olarak var olan değil,
insanların gerçekten kullandığı hizmetler ürettiğini göstermek için.

## Temel ilkeler

- **İlk benimsenme ile sürdürülen benimsenme farklı sinyallerdir.** Merak ya da
  zorunlu maruziyetten gelen bir sıçrama, gerçek ve kalıcı değer sunumuyla aynı
  şey değildir.
- **Benimsenme, özelliğin hedeflendiği kitleye karşı ölçülmelidir**; bütün
  kullanıcı tabanınıza ayrım gözetmeksizin değil.
- **Düşük benimsenmeli bir özellik otomatik olarak başarısız değildir.** Kötü
  keşfedilebiliyor, kötü hedeflenmiş ya da sadece yeni olabilir; sonuca varmadan
  önce araştırın.
- **Kullanımın sürmesi, tek bir benimsenme anlık görüntüsünden daha önemlidir.**
  Bir özelliği deneyen insanların ona geri dönmeye devam edip etmediğini izleyin.
- **Benimsenme verisi, zorunlu maruziyet ya da karanlık desenlerle manipülasyona
  açıktır.** Bir özelliği kaçınılmaz kılarak şişirilmiş bir sayı gerçek bir
  sinyal değildir.

## Öneriler

### İlk denemeyi sürdürülen elde tutmadan ayırın

İki ayrı sayı izleyin: hedef kitlenizden bir özelliği en az bir kez deneyenlerin
yüzdesi (ilk benimsenme) ve anlamlı bir dönem sonra, örneğin dört ya da sekiz
hafta sonra, hâlâ kullanmaya devam edenlerin yüzdesi (sürdürülen benimsenme).
İlk denemesi yüksek, elde tutması düşük bir özellik, keşfedilebilirliğin işe
yaradığını ama özelliğin kendisinin insanları geri getirecek kadar değer
sunmadığını düşündürür. Bu, ilk denemesi düşük ama elde tutması yüksek olan bir
özelliğe, yani gerçekten değerli ama yeterince kişinin bilmediği bir özelliğe,
göre çok farklı bir tanıdır ve çok farklı bir çözüm gerektirir.

### Benimsenmeyi ölçmeden önce hedef kitleyi kesin olarak tanımlayın

Bir özellik yalnızca belirli bir segment için tasarlanmışsa, bütün kullanıcı
tabanınıza karşı ölçülen benimsenme yanıltıcı olabilir. Kurumsal
yöneticiler için bir özellik, çoğunlukla bireysel kullanıcılardan oluşan bir
tabana karşı ölçüldüğünde, hizmet etmek üzere yapıldığı insanlara ne kadar iyi
hizmet ettiğinden bağımsız olarak hep berbat bir benimsenme gösterir. Hedef
kitleyi lansmandan önce açıkça tanımlayın ve benimsenmeyi toplam kullanıcı
sayınıza değil, o belirli paydaya karşı ölçün.

### Bir özelliğin başarısız olduğuna karar vermeden önce düşük benimsenmeyi araştırın

Düşük bir benimsenme sayısının birbirinden çok farklı yanıtlar gerektiren
birkaç olası nedeni vardır: özellik gerçekten değerli değildir, özellik değerli
ama zor keşfedilir (kullanıcılar var olduğunu bilmez), özellik değerli ama kötü
anlatılmıştır (kullanıcılar görür ama amacını anlamaz) ya da ölçüm penceresi,
daha yavaş benimsenen bir özelliğin kitlesini bulması için sadece fazla kısadır.
Daha fazla yatırım yapmaya, yeniden tasarlamaya ya da kullanımdan kaldırmaya
karar vermeden önce bunlardan hangisinin geçerli olduğunu araştırın.

### Zorunlu maruziyetle ya da [karanlık desenlerle](https://en.wikipedia.org/wiki/Dark_pattern) şişirilmiş benimsenmeye dikkat edin

Bir özelliğin kaçınılmaz olmasından, müdahaleci bir tanıtım akışından,
kullanıcının kapatmak zorunda olduğu bir modal pencereden ya da değiştirmesi zor
bir varsayılandan kaynaklanan bir benimsenme sayısı gerçek değer sunumunu
ölçmez; onu sanki ölçüyormuş gibi kutlamak, konu 1.2'nin ikame manipülasyonu
desenini ürün biçiminde tekrarlar. Mümkün olduğunda ham benimsenme sayılarını,
söz konusu özellik için bir memnuniyet ya da Net Promoter tarzı sinyalle eşleştirin;
böylece gerçek memnuniyete dönüşmeyen zorunlu maruziyet kutlanmak yerine yakalanır.

### Benimsenme eğilimlerini belirli ürün ve mühendislik kararlarına geri bağlayın

Benimsenme beklenmedik biçimde yükseldiğinde ya da düştüğünde, hareketi
açıklanamayan bir gizem olarak görmek yerine, onu belirli bir karara kadar
izleyin: bir arayüz değişikliği, varsayılan ayarlardaki bir değişiklik, bir
pazarlama atağı, bir performans iyileşmesi ya da gerilemesi. Bu, benimsenme
verisini eyleme geçirilebilir ürün ve mühendislik öğrenmesine bağlar ve belirli
bir değişiklik ile onun gerçek kullanım üzerindeki ölçülen etkisi arasındaki
döngüyü kapatır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Toplam kullanıcı tabanına karşı ölçmek | Basit, tek bir payda | Belirli bir segmenti hedefleyen özellikler için yanıltıcı |
| Tanımlı hedef kitleye karşı ölçmek | Hedeflenen erişimin adil, doğru yansıması | Lansmandan önce kasıtlı bir kitle tanımı gerektirir |
| Yalnızca ilk deneme | Hızlı sinyal, lansmandan hemen sonra erişilebilir | Özelliğin kalıcı değer sunup sunmadığını kaçırır |
| İlk deneme artı elde tutma | Merakı gerçek değerden ayırır | Tam resim ortaya çıkmadan önce daha uzun (haftalarca) beklemeyi gerektirir |

Temel gerilim **hız ile dürüstlük** arasındadır. İlk deneme verisi lansmandan
hemen sonra hazırdır ve erken sonuç bildirme yönündeki kurumsal baskıyı
karşılar, ama tek başına merakı ya da zorunlu maruziyeti gerçek, kalıcı
değerden ayıramaz. Gerilimi, ilk deneme verisini erken ve açıkça ön bilgi
olarak etiketleyerek bildirip, belirli, önceden belirlenmiş bir aralıkta bir
elde tutma okumasını herkese açık biçimde taahhüt ederek çözün; böylece erken
heyecan, gerçek sinyal ortaya çıkacak zamanı bulamadan sorgulanmamış bir başarı
hikâyesine dönüşüp kireçlenmez.

## Ekibinizle tartışılacak sorular

1. **En son teslim ettiğimiz özellik için ilk denemeyi ve sürdürülen kullanımı
   ayrı ayrı biliyor muyuz, yoksa yalnızca tek bir birleşik sayıyı mı?** Yalnızca
   birleşik bir sayı varsa, bu boşluk, bu konunun merkezî saydığı merak-değer
   ayrımını tam olarak gizler.

2. **Bu özellik için hedef kitlemiz lansmandan önce açıkça tanımlandı mı ve
   benimsenmeyi o belirli gruba karşı mı ölçüyoruz?** Mevcut benimsenme
   paydanızın özelliğin gerçekte kimin için yapıldığıyla eşleşip eşleşmediğini
   ya da alakasız, daha geniş bir nüfusa karşı ölçülerek sulandırılıp
   sulandırılmadığını kontrol edin.

3. **Düşük benimsenmeli bir özellik için, olası birkaç nedenden hangisinin,
   yani düşük değer, zayıf keşfedilebilirlik, kötü anlatım ya da yetersiz
   sürenin, gerçekten geçerli olduğunu araştırdık mı?** "Değerli olmasa gerek"
   varsayılanına düşmek yerine, gerçek ve güncel bir düşük benimsenmeli özellik
   için bu tanı listesini adım adım izleyin.

4. **Bildirdiğimiz benimsenme sayısının bir kısmı, gerçek, gönüllü kullanım
   yerine zorunlu maruziyet, müdahaleci bir varsayılan ya da kapatılması
   gereken bir modal pencere yüzünden şişmiş mi?** Burada dürüst olun; özellikle
   erken olumlu sonuç gösterme baskısı altında, düşülmesi yaygın ve kolay bir
   örüntüdür.

5. **Bir özelliğin benimsenmesi belirgin biçimde değiştiğinde, bu hareketi
   yaptığımız belirli bir değişikliğe kadar izleyebildik mi?** Yanıt çoğunlukla
   "emin değiliz" ise, bu boşluk kuruluşunuzun kendi benimsenme verisinden
   zaman içinde gerçekte ne kadar öğrenebileceğini sınırlar.

6. **Benimsenme sayılarını aynı özellik için herhangi bir memnuniyet sinyaliyle
   eşleştiriyor muyuz, yoksa yalnızca ham kullanımı mı izliyoruz?** Düşük
   memnuniyetle eşleşen yüksek bir benimsenme sayısı, yalnızca ham kullanımın
   tümüyle kaçıracağı bir uyarı işaretidir.

## Sektörel bakış

**Girişim (startup).** Özellik benimsenmesi, genç bir şirketin elindeki en
önemli tek sinyal olabilir ve ürün-pazar uyumunun kendisiyle yakından ilişkilidir.
İlk özellik lansmanından itibaren yalnızca ilk denemeyi değil, özellikle elde
tutmayı izleyin; çünkü şirketin hayatta kalması bu tanıyı doğru koymaya bağlı
olabilirken gerçek değeri erken meraktan ayırmak kritiktir.

**Küçük işletme.** Çoğu analitik platform asgari kurulumla temel kullanım verisi
raporlar. Asıl disiplin, benimsenmeyi belirli bir özelliğin gerçekte kimin için
yapıldığına bakmaksızın bütün müşteri tabanınıza karşı bildirmek yerine, ölçmeden
önce hedef kitlenizi açıkça tanımlamaktır.

**Kurumsal.** Bu ölçekte benimsenme verisi, geniş bir ürün portföyünde adil,
kanıta dayalı yol haritası önceliklendirmesi için şarttır. İlk denemeyi
sürdürülen elde tutmadan ayırma disiplini burada daha da önemlidir, çünkü yeterince
büyük bir kullanıcı tabanı, gerçek değerden bağımsız olarak hemen her lansman
için etkileyici görünümlü bir ilk sıçrama üretebilir.

**Kamu.** Vatandaşa dönük bir dijital hizmetin benimsenmesi, kamu yatırımının
gerçek kamu yararına dönüşüp dönüşmediğinin doğrudan, somut bir ölçüsüdür ve
bir denetim organı için çoğu zaman bir teslimat ya da faaliyet sayısından çok
daha ikna edicidir. Benimsenmeyi, hizmetin gerçekten hizmet vermek için kurulduğu
nüfusa karşı ölçün ve düşük benimsenmeyi hizmetin kendi tasarımının ötesinde
açıklayabilecek engeller (dijital okuryazarlık, erişim, farkındalık) konusunda
dürüst olun.

## Örnekler

**Kurumsal.** Bir proje yönetimi yazılımı şirketi yeni bir ortak düzenleme
özelliği başlattı ve ilk iki hafta içinde ulaştığı etkileyici yüzde 60 ilk deneme
oranını kutladı. Sekizinci haftadaki bir elde tutma okuması, o ilk deneyenlerin
yalnızca yüzde 8'inin özelliği hâlâ düzenli kullandığını gösterdi. Bu, yüksek
deneme oranının neredeyse tümüyle belirgin, kapatılması zor bir
tanıtım ipucundan kaynaklandığını, gerçek ve sürdürülen bir ilgiden olmadığını
ortaya koydu. Özelliği bırakan ilk deneyenlerden alınan nitel geri bildirimin
incelenmesi, belirli ve düzeltilebilir bir kullanılabilirlik sorununu, sezgisel
olmayan bir etkileşim örüntüsünü, ortaya çıkardı. Hedefli bir yeniden tasarım
bunu giderdi ve düzeltmeden sonra sürdürülen kullanım neredeyse üç katına
çıktı; yine de yanıltıcı biçimde yüksek ilk deneme sayısına hiç yaklaşmadı.

**Kamu.** Ulusal bir istihdam servisi yeni bir çevrimiçi iş eşleştirme aracı
başlattı ve başlangıçta benimsenmeyi kurumun bütün kayıtlı kullanıcı tabanına
karşı bildirdi; bu, programın sürdürülen finansmanını tehdit eden, moral bozucu
derecede düşük bir yüzde üretti. Benimsenmeyi özellikle aracın hedef
sektörlerinde aktif olarak iş arayan kayıtlı kullanıcı alt kümesine, yani asıl
hedeflenen kitleye, karşı ölçen gözden geçirilmiş bir analiz, çok daha yüksek ve
çok daha doğru bir benimsenme oranı gösterdi. Bu, tam olarak o tanımlı kitleye
yönelik hedefli bir erişim kampanyası ve benimseyenler arasında güçlü sürdürülen
kullanımı gösteren sonraki bir elde tutma okumasıyla birleşince, program
yanıltıcı biçimde seyreltilmiş özgün rakam yerine düzeltilmiş, dürüstçe
hedeflenmiş metriğe dayanarak sürdürülen finansmanı güvence altına aldı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Titiz özellik benimsenme ölçümünün getirisi, kanıta dayalı yol haritası
yatırımıdır: gerçek, sürdürülen değeri merakla yürüyen ilk denemeden ayırabilen
bir kuruluş, gerçekten işe yarayan özelliklere güvenle daha fazla yatırım
yapabilir ve çabayı işe yaramayanlardan başka yöne çevirebilir. Yanıltıcı bir
ilk sıçramanın peşinden koşmaz ya da gerçekten değerli ama geç keşfedilen bir
özelliği erken terk etmez.

Toplam sahip olma maliyeti çoğunlukla analitik enstrümantasyondur ve bu, çoğu
modern ürün analitiği platformunda zaten genellikle mevcuttur. Buna hedef
kitleleri açıkça tanımlama ve erken, eksik bir sinyalde durmak yerine takip eden
elde tutma okumalarını taahhüt etme disiplini eklenir. Bu disiplin az maliyetlidir
ve sahte bir başarıyı ya da sahte bir başarısızlığı yanlış okumanın çok daha
pahalı hatasını önler.

## Anti-desenler ve tuzaklar

- **Yalnızca ilk denemeyi bildirmek, elde tutmayı hiç bildirmemek:** merakı ya da
  zorunlu maruziyeti gerçek, kalıcı değerden ayıramaz.
- **Benimsenmeyi yanlış paydaya karşı ölçmek:** belirli bir kitle segmentini
  hedefleyen özellikler için sinyali seyreltir ya da şişirir.
- **Düşük benimsenmenin belirli nedenini araştırmadan bir özelliğin başarısız
  olduğuna karar vermek:** gerçekten değerli ama kötü keşfedilen ya da kötü
  zamanlanan bir özelliği terk etme riski taşır.
- **Zorunlu maruziyetle ya da karanlık desenlerle şişirilmiş benimsenmeyi
  kutlamak:** konu 1.2'nin ikame manipülasyonunun ürün tarafındaki bir örneği.
- **Benimsenme hareketini belirli kararlara hiç geri bağlamamak:** kuruluşun kendi
  verisinden öğrenmesini sınırlar.
- **Eşleştirilmiş bir memnuniyet sinyali olmadan kullanımı izlemek:** yüksek
  kullanımın düşük gerçek değer ya da memnuniyetle bir arada var olduğu durumu
  kaçırır.

## Olgunluk modeli

- **Düzey 1, Başlangıç (Initiate):** Benimsenme ölçülmez ya da yalnızca tek,
  erken, elde tutmasız bir deneme sayısı bildirilir.
- **Düzey 2, Gelişim (Develop):** Bir miktar benimsenme izlemesi vardır, ama hedef
  kitleler kesin olarak tanımlanmamıştır ve elde tutma tutarsız ölçülür.
- **Düzey 3, Standartlaştırma (Standardize):** Her önemli özellik için ilk deneme
  ve sürdürülen benimsenme, kesin olarak tanımlanmış bir hedef kitleye karşı
  tutarlı biçimde izlenir.
- **Düzey 4, Yönetim (Manage):** Düşük benimsenmeli özellikler, yeniden tasarlama
  ya da kullanımdan kaldırma kararından önce belirli kök neden için sistematik
  biçimde araştırılır; benimsenme, memnuniyet verisiyle eşleştirilir.
- **Düzey 5, Orkestrasyon (Orchestrate):** Benimsenme verisi yol haritası
  önceliklendirmesini ve yatırım kararlarını doğrudan ve düzenli olarak
  bilgilendirir; kuruluş belirli benimsenme hareketlerini belirli ürün ve
  mühendislik kararlarına güvenle geri bağlayabilir.

## Tartışma önerileri

1. İlk denememizle sürdürülen benimsenmemizin çok farklı hikâyeler anlattığı yakın tarihli bir özellik hangisi?
2. Son özelliğimizin hedef kitlesi lansmandan önce mi kesin olarak tanımlandı, yoksa sonradan mı?
3. Hangi düşük benimsenmeli özellik, kaderine karar vermeden önce dürüst bir kök neden araştırmasını hak ediyor?
4. Mevcut benimsenme raporlamamızın herhangi bir kısmı zorunlu maruziyetle şişmiş mi?
5. Benimsenme verisini memnuniyet verisiyle eşleştirmek, en çok kullanılan özelliğimiz hakkında neyi ortaya çıkarırdı?

## Temel çıkarımlar

- **İlk denemeyi sürdürülen elde tutmadan** ayırın; merak ya da zorunlu
  maruziyetten gelen bir sıçrama gerçek, kalıcı değer değildir.
- Benimsenmeyi alakasız, daha geniş bir kullanıcı tabanına değil, **kesin olarak
  tanımlanmış bir hedef kitleye** karşı ölçün.
- Bir özelliğin başarısız olduğuna karar vermeden önce düşük benimsenmenin
  **belirli nedenini araştırın**; birbirinden çok farklı birkaç neden çok farklı
  yanıtlar gerektirir.
- **Zorunlu maruziyetle ya da karanlık desenlerle şişirilmiş** benimsenmeye
  dikkat edin ve bunu yakalamak için benimsenmeyi bir **memnuniyet sinyaliyle**
  eşleştirin.
- Veriyi gerçek bir kurumsal öğrenmeye dönüştürmek için **benimsenme hareketini
  belirli kararlara geri bağlayın**.

## Kaynaklar ve ileri okuma

- *Lean Analytics*, Alistair Croll ve Benjamin Yoskovitz (ürün kullanım verisine
  uygulanan eyleme geçirilebilir ve gösteriş metrikleri ayrımı).
- *Continuous Discovery Habits*, Teresa Torres (ürün kararlarını, benimsenme
  verisi dahil, müşteri sonucu kanıtına bağlamak).
- *Hooked: How to Build Habit-Forming Products*, Nir Eyal (elde tutma ve alışkanlık
  oluşumu, gerçek değer ile karanlık desenler arasındaki etik çizgi).
- *Measure What Matters*, John Doerr (benimsenme hedefi belirlemeye
  uygulanabilen sonuç odaklı hedef koyma).
