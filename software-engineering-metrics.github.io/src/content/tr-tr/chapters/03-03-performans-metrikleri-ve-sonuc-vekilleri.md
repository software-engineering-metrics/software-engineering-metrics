# 3.3 Performans metrikleri ve sonuç vekilleri

## Genel bakış ve motivasyon

SPACE'teki (konu 3.1) P harfi olan **performans (performance)**, etkinlikle en
sık karıştırılan boyuttur ve bu konu tam da o karışıklığı önlemek için vardır.
Performans, bir mühendisin ya da ekibin işinin gerçekten iyi bir
[sonuç](https://en.wikipedia.org/wiki/Outcome_(probability)) üretip üretmediğini
sorar: yayına çıkan ve çalışan bir özellik, güvenilir kalan bir sistem, bir iş
ya da kullanıcı metriğini doğru yönde oynatan bir değişiklik. Etkinlik
(konu 3.4) ise yalnızca ne kadar hareket olduğunu sorar. Bir ekip çok etkin ve
düşük performanslı olabilir; sürekli küçük değişiklikler yayımlar ama hiçbiri
bir sonucu oynatmaz. Tersi de aynı derecede mümkündür: nadiren yayın yapan
ama değişiklikleri güvenilir biçimde tam yerine oturan bir ekip.

Bu boyutun zorluğu, sonucun çoğu zaman tek bir kişiye, hatta tek bir ekibe
atfedilememesidir. Yazılım sonuçları iş birliğinden, aylar önce o zamandan beri
başka projelere geçmiş insanların verdiği kararlardan ve hiçbir mühendisin
denetlemediği piyasa koşullarından doğar. SPACE araştırmacıları bu konuda
açıktı: performans sistem ya da ekip düzeyinde, birbirine yakınsayan birden çok
sinyalle ölçülmeli, tek bir sayıya indirgenmemeli ve kesinlikle tek başına bir
mühendise atfedilmemelidir. Bu konu bu yönlendirmeyi ciddiye alır ve bireysel
performans atfını, uygun olduğunda alınacak bir kestirme yol değil, etkin
biçimde kaçınılması gereken bir tuzak olarak ele alır.

Büyük ekipler için performans ölçümünü doğru yapmak, sonuçları gerçekten
iyileştiren bir metrik programını yalnızca görünür meşguliyeti ödüllendiren
bir programdan ayıran şeydir. Birçok ekibin performansını karşılaştıran
kurumsal şirketlerin ham çıktı hacmiyle manipülasyona direnen sinyallere
ihtiyacı vardır. Teknoloji yatırımını denetim organlarına gerekçelendiren kamu
kuruluşlarının, mühendislik çabasının yalnızca teslim edilmiş ürünler değil,
gerçek sonuçlar ürettiğini göstermesi gerekir; bu, tam olarak konu 1.3'ün
çıktı yerine sonuç ilkesinin bu belirli boyuta uygulanmasıdır.

## Temel ilkeler

- **Performans, işin iyi bir sonuç üretip üretmediğini ölçer, ne kadar iş
  yapıldığını değil.** Etkinlik boyutundan temel ayrım budur.
- **Birbirine yakınsayan birden çok sinyal kullanın, asla tek bir performans
  sayısı değil.** Hiçbir bireysel vekil tek başına durabilecek kadar güvenilir
  değildir.
- **Ekip ya da sistem düzeyinde ölçün.** Bireysel sonuç atfı genellikle
  güvenilmezdir ve bu kitabın baştan sona uyardığı manipülasyonu tam olarak
  davet eder.
- **Kalite performansın parçasıdır, ayrı bir kaygı değil.** Yayına çıkan ama
  başka bir şeyi bozan iş gerçekten iyi performans göstermemiştir.
- **Bir karara bağlanmamış performans sinyali süstür**; tam olarak konu 1.1'in
  genel ilkesinin bu boyuta uygulanışı.

## Öneriler

### Tek bir performans puanı yerine birbirine yakınsayan birkaç sinyali birleştirin

Performans kanıtını birden çok kaynaktan çekin: kalite için değişiklik başarısızlık
oranı (konu 2.10) ve hata kaçış oranı (konu 5.1), işin önemli olup olmadığı için
gerçek özellik benimsemesine bağlı dağıtım sonuçları (konu 5.2) ve saf bir
metriğin yakalayamayacağı bağlam için bir ekibin stratejik hedeflere katkısına
dair niteliksel meslektaş ya da yönetici değerlendirmesi. Bunlardan hiçbiri
tek başına güvenilir değildir; aynı sonuca yakınsadıklarında ise herhangi bir
tek sayıdan çok daha güvenilirdirler.

### Ekip düzeyinde ölçün, bireysel atfa direnin

Yazılım sonuçları nadiren tek bir kişinin işinin ürünüdür; tasarım
kararlarından, gözden geçirme geri bildiriminden, o zamandan beri ekipten
ayrılmış olabilecek insanların önceki işinden ve sınırlar ötesi iş birliğinden
doğar. Bir sonucu tek bir mühendise atfetmek genellikle bu gerçeği görmezden
gelen yanlış bir kesinliktir ve bireyler için, özgürce iş birliği yapmak yerine
itibarı korumaya yönelik güçlü bir teşvik yaratır; konu 1.2'nin uyardığı türden
tam bir teşvik bozulması.

### Kaliteyi doğrudan performans tanımına katın

Zamanında yayına çıkan ama bir dizi üretim olayına yol açan bir özellik,
saf çıktıya bakan naif bir görüş onu teslim edilmiş saysa da iyi performans
göstermemiştir. Değişiklik başarısızlık oranını, hata kaçış oranını ve yayın
sonrası olay verisini, kaliteyi bu kitabın yalnızca Bölüm 4 ve Bölüm 6'sında
ölçülen ayrı ve kopuk bir kaygı olarak ele almak yerine, performansı
değerlendirme biçiminize doğrudan yerleştirin.

### Performans verisini bireysel sıralamalar için değil, yatırım ve süreç kararlarını bilgilendirmek için kullanın

Performans verisinin verimli kullanımı, nereye daha fazla yatırım yapılacağına
(sürekli güçlü sonuçlar sunan bir ekip daha fazla kaynağı ve özerkliği hak
eder) ve nerenin araştırılacağına karar vermektir (işi sürekli yerine
oturmayan bir ekip, konu 1.1'in tanısal çerçevesine göre suçlamayı değil
yardımı hak eder). Bireyleri ya da ekipleri performans verisi üzerinden
birbirine karşı rekabetçi biçimde sıralamak, bu kitabın uyardığı manipülasyonu
ve moral hasarını davet eder ve tanısal kullanımdan nadiren daha iyi sonuç
üretir.

### Atıf sınırları konusunda dürüst olun, özellikle platform ve destekleyici ekipler için

Paylaşılan altyapı, iç araçlar ya da platform yetenekleri kuran ekiplerin
(kardeş `software-engineering-guide` kitabının platform mühendisliği konusu
bunu doğrudan ele alır) sonuçlara katkısı çoğu zaman müşteriye dönük herhangi
bir tek metrikten birkaç adım uzaktadır. Bu ekiplerin performansını,
doğası gereği dolaylı olan işe uymayan bir doğrudan sonuç metriği dayatmak
yerine, destekledikleri ekipler üzerindeki etkileri, platformlarının
benimsenmesi ve tüketen ekiplerin bildirdiği sürtünmedeki azalma üzerinden
ölçün.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Ekip başına tek performans puanı | Sunması ve karşılaştırması basit | Yanlış kesinlik; puanı gerçekte hangi alt sinyalin belirlediğini gizler |
| Birbirine yakınsayan birden çok sinyal | Daha güvenilir, tek metrikli manipülasyona dirençli | Tek bir sayıda özetlemesi daha zor; yorumlamak için daha fazla bağlam gerekir |
| Ekip düzeyinde performans ölçümü | Yazılım sonuçlarının gerçekte nasıl ortaya çıktığıyla örtüşür | Bireysel katkıya dair soruları doğrudan yanıtlayamaz |
| Bireysel düzeyde performans atfı | Değerlendirmeler için daha doğrudan eyleme dönüştürülebilir hissedilir | Genellikle yanlış kesinlik; güçlü manipülasyon ve itibar koruma riski |

Temel gerilim **kesinlik ile dürüstlük** arasındadır. Ekip başına, daha da
kötüsü birey başına tek bir performans sayısı karşılaştırması ve sıralaması
kolaydır; ama bu kesinlik genellikle yanlıştır ve atıf ile kalite hakkındaki
gerçek belirsizliği temiz görünümlü bir rakamın ardına saklar. Gerilimi, daha
az derli toplu, çok sinyalli resmi dürüst olan olarak kabul ederek ve
yönetimden ya da performans değerlendirme süreçlerinden gelen, onu yeniden
tek ve yanlış kesin bir puana indirgeme baskısına direnerek çözün.

## Ekibinizle tartışılacak sorular

1. **Mevcut performans ölçümümüz birbirine yakınsayan birden çok sinyali mi
   birleştiriyor, yoksa gerçekte olduğundan daha kesin hissettiren tek bir
   sayıya mı dayanıyor?** Şu anda "performans metriği" dediğiniz şeyi
   denetleyin ve ona kaç bağımsız, yakınsayan sinyalin gerçekten beslediğine
   bakın.

2. **Bir ekibin ya da bireyin performansını, sonucun gerçekte nasıl
   gerçekleştiğinin iş birliğine dayalı, ekipler arası doğasını hesaba
   katmadan hiç atfettik mi?** Yakın tarihli bir başarı hikâyesi seçin ve
   bunun ne kadarının, kredi verilen ekibin ya da bireyin dışındaki insanlara,
   kararlara ya da önceki işlere bağlı olduğunu izleyin.

3. **Performans ölçümümüz kaliteyi içeriyor mu, yoksa yalnızca teslimat hızını
   ve çıktı hacmini mi?** Sonradan önemli üretim olaylarına yol açan yayımlanmış
   bir özellik yüksek performans olarak puanlanmamalıdır; mevcut ölçümümüzün bu
   durumu gerçekten yakalayıp yakalamayacağını kontrol edin.

4. **Sonuçlara katkısı dolaylı olan platform ya da destekleyici ekiplerin
   performansını nasıl ölçüyoruz?** Dürüst yanıt "pek ölçmüyoruz" ise, bu
   boşluğu adlandırmaya ve doğrudan ele almaya değer; bu ekipleri fiilen
   ölçülmemiş bırakmak ya da işlerine uymayan müşteriye dönük sonuç
   metriklerine karşı haksızca ölçmek yerine.

5. **Performans verisi hiç, resmî ya da gayriresmî, bireyleri birbirine karşı
   rekabetçi biçimde sıralamak için kullanıldı mı?** Konu 3.2'deki memnuniyet
   verisi riskine benzeyen bu kayma, hem verinin dürüstlüğüne hem de ekibin
   açıkça iş birliği yapma isteğine zarar verir.

6. **Yakınsayan sinyallerimiz birbirini tutmadığında, örneğin yüksek teslimat
   hızı ama yükselen hata oranı, ne sonuç çıkarırız ve sürecimiz bu uyumsuzluğu
   iyi ele alır mı?** Sinyaller arasındaki uyumsuzluk kendi başına değerli
   bilgidir; ekibinizin bunu görmezden gelinecek gürültü olarak mı yoksa
   araştırmaya değer gerçek bir bulgu olarak mı ele aldığını tartışın.

## Sektörel bakış

**Startup.** Performans genellikle doğrudan görünür: özellik çalıştı mı,
müşteriler benimsedi mi, metrik oynadı mı. Bu ölçekte resmî çok sinyalli
ölçüm çoğu zaman gereksizdir; asıl risk, kredinin ve suçun nadiren yalnızca
tek bir bireye ait olduğu hızlı hareket eden ve yüksek iş birliğine dayalı
küçük bir ekipte, başarıyı ya da başarısızlığı çok çabuk tek bir kişiye
atfetmektir.

**Küçük işletme.** Sürdürme kapasiteniz olmayan resmî çok sinyalli araçlandırma
kurmak yerine, elinizdeki teslimat ve kalite verisini (konu 2.10, konu 5.1)
yakın tarihli işin işletmeye gerçekten yardımcı olup olmadığı üzerine doğrudan,
dürüst bir sohbetle birleştirin.

**Kurumsal şirket.** Ekip düzeyinde, çok sinyalli ölçüm disiplininin yatırımını
hak ettiği yer burasıdır; çünkü onlarca ekip arasında performansı tek bir
karşılaştırılabilir sayıya indirgeme baskısı en çok burada güçlüdür ve yanlış
kesinliğin zararı tüm kuruluşun kaynak kararlarına yayılarak büyür. Bu baskıya
açıkça direnin ve bunun neden önemli olduğuna dair çok sinyalli gerekçeyi
kurun.

**Kamu.** Mühendislik yatırımının yalnızca teslim edilen ürünler değil gerçek
sonuçlar ürettiğini göstermek, bir denetim organının sorduğu merkezî soru
olur çoğunlukla. Yalnızca teslimata dayalı vekiller yerine açıkça sonuç
metriklerine (konu 5.3) bağlı çok sinyalli performans ölçümü, tek başına bir
etkinlik ya da teslimat sayısından çok daha güçlü ve savunulabilir bir yanıt
verir.

## Örnekler

**Kurumsal şirket.** Bir perakende teknolojisi şirketinin yönetimi,
mühendislik ekiplerini sprint başına tamamlanan hikâye puanlarına göre
gayriresmî olarak sıralıyor ve bunu bir performans vekili sayıyordu. Teslimat
verisini, değişiklik başarısızlık oranını ve yayın sonrası özellik benimsemesini
birleştiren çok sinyalli bir yaklaşımı benimsedikten sonra yönetim, en yüksek
hikâye puanı tamamlama oranına sahip ekibin şirketteki en düşük özellik
benimseme oranına sahip olduğunu fark etti: hızlı yayın yapıyorlardı ama
müşterilerin kullanmadığı şeyler inşa ediyorlardı. O ekibin yol haritası
önceliklerini yanıltıcı tek sayılı sıralamaya değil, daha kapsamlı performans
resmine göre yeniden dağıtmak, önemli mühendislik kapasitesini bir çeyrek
içinde daha yüksek etkili işe yönlendirdi.

**Kamu.** Ulusal bir vergi kurumunun mühendislik programı, bir denetim
komitesine büyük bir sistem yatırımının yalnızca sözleşmeye bağlı kapsamı
teslim etmekle kalmayıp performansı da iyileştirdiğini göstermek zorundaydı.
Program yalnızca hikâye puanı ya da kilometre taşı tamamlanmasını raporlamak
yerine, birbirine yakınsayan bir sinyal kümesi sundu: azalan işlem hata oranı,
azalan ortanca işlem süresi ve artan başarılı self servis tamamlama oranı;
hepsi teslim edilen belirli sistem bileşenlerine bağlıydı. Çok sinyalli, sonuca
bağlı sunum, önceki bir programdan "zamanında teslim edildi" şeklindeki basit
bir raporun bir yıl önce başaramadığı biçimde komitenin incelemesini
karşıladı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

Performansı, yanlış kesinlikli tek bir sayı yerine yakınsayan, sonuca bağlı
sinyallerle ölçmenin getirisi daha iyi kaynak kararlarıdır: hangi ekiplerin
işinin gerçekten sonuçları oynattığını görebilen bir kuruluş, en meşgul
görünen ekibi ödüllendirmek yerine önemli olan yere daha fazla yatırım
yapabilir, olmayan yeri araştırabilir. Yukarıdaki perakende örneği tipiktir:
yanıltıcı bir tek sayılı sıralama, yatırım dikkatini gerçekten yardımcı
olacağı yerden uzağa yönlendiriyordu.

Toplam sahip olma maliyeti tek metrikli yaklaşımdan yüksektir; çünkü birden
çok kaynaktan (teslimat, kalite, sonuç) veriyi birleştirmeyi ve resmi yeniden
tek bir karşılaştırılabilir sayıya indirgeme yönündeki kurumsal baskıya
direnmeyi gerektirir. Bu maliyet ödemeye değer; çünkü alternatif, yani yanlış
kesin tek bir puan, performans verisinin bilgilendirmesi gereken kaynak
kararlarını etkin biçimde yanıltır.

## Anti-desenler ve tuzaklar

- **Etkinliği performansla karıştırmak:** bu boyutun özellikle önlemek için
  tasarlandığı en yaygın hata.
- **İş birliğine dayalı, ekipler arası sonuçlar için bireysel performans atfı:**
  genellikle iş birliğini caydıran yanlış bir kesinlik.
- **Kaliteyi performans tanımından dışlamak:** yayına çıkan ama başka bir şeyi
  bozan işi ödüllendirir.
- **Platform ya da destekleyici ekiplere doğrudan sonuç metriği dayatmak:**
  doğası gereği dolaylı olan iş için yanlış şeyi ölçer.
- **Kurumsal baskı altında birbirine yakınsayan birden çok sinyali yeniden tek
  bir yanlış kesin sayıya indirgemek:** çok sinyalli yaklaşımın sağlamak için
  kurulduğu dürüstlüğü kaybeder.
- **Performans verisini bireyleri rekabetçi biçimde sıralamak için kullanmak:**
  hem veri dürüstlüğüne hem ekip iş birliğine zarar verir.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Performans etkinlik ya da çıktı hacmiyle
  karıştırılır, tek ve sorgulanmamış bir sayıyla ölçülür.
- **Düzey 2, Geliştirme (Develop):** Bazı kalite sinyalleri çıktıyla birlikte
  değerlendirilir ama tutarlı bir çok sinyalli yaklaşım yoktur ve bireysel
  atıf gayriresmî olarak hâlâ yapılır.
- **Düzey 3, Standartlaştırma (Standardize):** Performans ekip düzeyinde,
  kaliteyi de içeren birbirine yakınsayan birden çok sinyalle, kuruluş genelinde
  tutarlı biçimde ölçülür.
- **Düzey 4, Yönetme (Manage):** Yakınsayan sinyaller arasındaki uyumsuzluk
  etkin biçimde araştırılır; platform ve destekleyici ekiplerin gerçek işlerine
  uygun, uygun biçimde dolaylı performans ölçüleri vardır.
- **Düzey 5, Orkestrasyon (Orchestrate):** Performans verisi kaynak ve yatırım
  kararlarını doğrudan bilgilendirir ve kuruluş, çok sinyalli bir bakışın
  mümkün kıldığı, tek sayılı bir bakışın kaçıracağı belirli yeniden tahsis
  kararlarını gösterebilir.

## Tartışma önerileri

1. Şu anda performans vekili olarak kullandığımız ve yakınsayan bir kümeyle değiştirmek üzere emekliye ayırmamız gereken tek sayı nedir?
2. Atıf belirsiz olduğu için bir sonucu hiç yanlış ekibe ya da kişiye mal ettik mi?
3. Bir platform ya da destekleyici ekibin performansını şu anda nasıl ölçüyoruz?
4. Yakınsayan sinyallerimiz gelecek çeyrekte birbiriyle çelişseydi neye benzerdi?
5. Hikâye puanı ya da teslimat sayısı sıralaması yatırım dikkatimizi nerede yanlış yönlendirdi?

## Temel çıkarımlar

- Performans, işin **iyi bir sonuç** üretip üretmediğini ölçer, ne kadar hareket
  olduğunu değil; onu etkinlikle karıştırmayın (konu 3.4).
- **Birbirine yakınsayan birden çok sinyal** kullanın, asla tek bir performans
  sayısı değil, ve yanlış kesinlikten şüphe edin.
- **Ekip ya da sistem düzeyinde** ölçün; bireysel sonuç atfı genellikle
  güvenilmezdir ve iş birliğine zarar verir.
- **Kalite performansın parçasıdır**, ayrı ve kopuk bir kaygı değil.
- Platform ve destekleyici ekiplere, işlerine uymayan bir doğrudan sonuç metriği
  dayatmak yerine **uygun biçimde dolaylı** performans ölçüleri verin.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021).
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (sonuç temelli performans ölçümü).
- *Team Topologies*, Matthew Skelton ve Manuel Pais (platform ve destekleyici
  ekip yapıları ve katkılarının nasıl ölçüleceği).
- *Measuring and Managing Performance in Organizations*, Robert D. Austin
  (yanlış kesinlikli performans metriklerinin riskleri).
