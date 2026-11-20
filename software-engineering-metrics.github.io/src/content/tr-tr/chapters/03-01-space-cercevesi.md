# 3.1 SPACE çerçevesi

## Genel bakış ve motivasyon

[SPACE çerçevesi](https://queue.acm.org/detail.cfm?id=3454124), 2021'de
araştırmacılar Nicole Forsgren, Margaret-Anne Storey, Chandra Maddila, Thomas
Zimmermann, Brian Houck ve Jenna Butler tarafından yayımlandı ve belirli bir
soruna yanıt olarak kuruldu: [geliştirici verimliliğini](https://en.wikipedia.org/wiki/Productivity)
tek bir sayıyla ölçmek (kod satırı, commit sayısı, hikâye puanı) çok kolay
manipüle edilir ve düzenli olarak yanıltır. SPACE bunun yerine beş boyutta
ölçüm önerir: **Memnuniyet ve iyi oluş (Satisfaction and well-being)**,
**Performans (Performance)**, **Etkinlik (Activity)**, **İletişim ve iş birliği
(Communication and collaboration)** ve **Verimlilik ve akış (Efficiency and
flow)**. Harflerden hiçbirinin tek başına durması amaçlanmamıştır; çerçevenin
asıl katkısı, beş boyutu birlikte gözetme disiplinidir. Böylece bir ekip,
başka bir eksene sessizce zarar verirken tek bir eksende verimli görünemez.

Bu önemlidir, çünkü geliştirici verimliliği tek bir şey değildir. Bir ekip çok
etkin olabilir (çok sayıda commit, çok sayıda pull request) ve yine de kötü
performans gösterebilir; yani yapılan iş önemli sonuçları ilerletmiyordur. Bir
ekip kısa vadede iyi performans gösterirken memnuniyeti çökebilir; bu, aylar
sonra ortaya çıkan işten ayrılma ve kalite çöküşünün öncü göstergesidir.
SPACE'in kavrayışı, kitabın konu 1.2 ve konu 1.3'ünün üzerine doğrudan
kurulur: bu boyutlardan herhangi biri tek başına bir hedef olarak
kovalandığında, diğerlerinin aleyhine manipüle edilecektir. Çerçeve de tam bu
ödünleşimi gerçek zarar vermeden önce görünür kılmak için vardır.

Büyük ekipler için SPACE, yönetime aksi halde ölçmesi en kolay boyuta,
neredeyse her zaman etkinliğe, kayan bir konuşma için ortak bir sözlük sunar.
Birçok ekipte verimliliği karşılaştıran kurumsal şirketlerin, commit saymaya
doğru çekimi dirençle karşılayan bir çerçeveye ihtiyacı vardır. Rekabetçi bir
iş gücü piyasasında işe alım ve elde tutma baskısı yaşayan kamu kuruluşlarının
ise memnuniyet ve iyi oluş verisine, teslimat verisine olduğu kadar ciddi
biçimde ihtiyacı vardır; çünkü deneyimli bir mühendisi tükenmişliğe
kaybetmenin maliyeti, herhangi bir sprintin çıktısının sağladığı kazançtan çok
daha büyüktür.

## Temel ilkeler

- **Hiçbir SPACE boyutu tek başına güvenilir değildir.** Çerçevenin değeri tam
  olarak birkaç boyutu birlikte ölçmekten gelir.
- **Dengeli bir resim için asgari koşul, en az üç boyuttan en az birer metrik
  almak ve öznel ile nesnel kaynakları karıştırmaktır.** Tamamen tek bir
  boyuttan ya da tek bir veri türünden çıkarılmış bir metrik kümesi, gerçekte
  SPACE'i kullanmıyordur.
- **Etkinlik, tek başına bir vekil olarak en çok kötüye kullanılmaya yatkın
  boyuttur.** Ölçmesi en kolay, kendi başına gerçek değeri temsil etmesi en
  zayıf olandır.
- **Ekip düzeyi ve bireysel düzey ölçüm farklı muamele gerektirir.** SPACE
  öncelikle ekip ve sistem düzeyinde kavrayış için tasarlandı, bireysel puan
  kartları için değil.
- **Beş boyut birbirini etkiler.** Birini iyileştiren bir değişiklik
  diğerini bozabilir; çerçeve bu ödünleşimi yakalamak için vardır.

## Öneriler

### Güvenmeden önce metrik kümenizi en az üç boyuttan kurun

SPACE'i tek bir gözde boyut seçip (genellikle etkinlik ya da performans) iş
bitti diyerek benimsemeyin. Ekip verimliliği hakkında herhangi bir sonuç
sunmadan önce, beş boyuttan en az üçünün her birinden bilinçli olarak en az
bir metrik seçin; nesnel araçlandırmayı (konu 1.5) öznel anket verisiyle
(konu 3.7) karıştırın. Bu asgari bileşim, SPACE'in çözmek için tasarlandığı
tek vekil sorununa geri çökmesini önleyen şeydir.

### Etkinlik metriklerini bağlam olarak ele alın, asla manşet olarak değil

Commit sayıları, kod satırları ve pull request sayıları meşru SPACE etkinlik
boyutu verileridir; ama bir ekibin verimliliği hakkında sunulan birincil ya da
tek metrik asla olmamalıdır. Etkinlik verisini diğer boyutlar için bağlam
sağlamakta kullanın; örneğin etkinlikteki bir düşüşün, ekibin sonunda teknik
borcu ödeyecek alan bulması nedeniyle memnuniyetteki bir artışla aynı zamana
denk geldiğini fark etmek gibi. Bağımsız bir hüküm olarak kullanmayın. Konu
3.4 bu boyutun kendine özgü risklerini ayrıntılı biçimde ele alır.

### SPACE'i bireysel düzeyde değil, ekip ve sistem düzeyinde uygulayın

SPACE'in özgün araştırması ve sonraki sektör benimsemesi, çerçeveyi bireysel
performans puan kartı olarak değil, ekip ve kurum verimliliğini anlamak için
bir mercek olarak ele alır. SPACE boyutlarını bireyleri, özellikle de
etkinlik boyutuyla sıralamak için kullanmak, konu 1.2'nin uyardığı
manipülasyon riskini aynen yeniden yaratır ve hiçbir zaman bu kullanım için
doğrulanmamış bir çerçeveyi yanlış uygular.

### Yalnızca tek bir boyuttaki hareketi değil, boyutlar arasındaki ödünleşimleri izleyin

Çerçevenin gerçek tanısal gücü, boyutların birbirine göre nasıl hareket ettiğini
izlemekten gelir. Memnuniyet düşerken yükselen bir performans metriği, hemen
araştırılması gereken ve olası biçimde sürdürülemez bir tempoya işaret eden bir
uyarı işaretidir. Performans sabit ya da düşerken yükselen bir etkinlik
metriği, gerçek ilerleme yerine oyalayıcı iş yapıldığını düşündürür. Bu
boyutlar arası örüntüleri yakalamak için, yalnızca her sayıyı tek tek kontrol
etmek için değil, beş boyutun hepsini sabit bir ritimle birlikte gözden
geçirin.

### Ritimleri boyutlara göre uygun biçimde karıştırın

Bazı SPACE boyutları yavaş değişir ve periyodik olarak ölçülmesi en iyisidir
(memnuniyet, tipik olarak üç aylık anket döngüleriyle). Diğerleri hızlı
değişir ve daha sık, otomatik izlemeden yarar sağlar (etkinlik, verimlilik ve
akış; ikisi de büyük oranda mevcut sistemlerden araçlandırılabilir). Her
metriği aynı raporlama takvimine zorlamak yerine, ölçüm ritminizi her
boyutun doğal değişim hızına uydurun.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Tek boyutlu metrik kümesi (genellikle etkinlik) | Basit, ucuz, tanıdık | Kolay manipüle edilir, sürdürülemez uygulamaların insani maliyetini kaçırır |
| Beş boyutlu tam SPACE benimsemesi | Dengeli, tek eksende manipülasyona dirençli, ödünleşimleri yakalar | Daha fazla araçlandırma ve anket yatırımı gerektirir |
| Ekip düzeyinde SPACE uygulaması | Çerçevenin doğrulanmış kullanımına uyar, bireyleri yanlış uygulamadan korur | Yönetimin bazen istediği bireysel düzey soruları yanıtlayamaz |
| Bireysel düzeyde SPACE uygulaması | Bazı yöneticilere daha doğrudan eyleme dönüştürülebilir görünür | Çerçeveyi yanlış uygular; güçlü manipülasyon ve moral riski taşır |

Temel gerilim, **ölçüm bütünlüğü ile maliyet ve karmaşıklık** arasındadır. Tam
ve dengeli bir SPACE uygulaması, basit bir etkinlik panosundan daha fazla
araçlandırma, daha fazla anket tasarım çabası ve beş boyutu birlikte gözden
geçirmek için daha fazla disiplin gerektirir. Gerilimi, çerçevenin disiplinini
tümden atlamak ya da ilk günden beş boyutun bunaltıcı ölçüde tam araçlandırılmış
bir sürümünü denemek yerine, gerçekten asgari ama dengeli bir kümeyle, yani en
az üç boyuttan en az birer metrikle başlayarak çözün.

## Ekibinizle tartışılacak sorular

1. **Mevcut verimlilik metrik kümemiz en az üç SPACE boyutundan besleniyor mu,
   yoksa yalnızca etkinlik verisi mi baskın?** Panonuzu beş boyuta karşı açıkça
   denetleyin; dürüstçe değerlendirildiğinde çoğu kuruluş fark ettiğinden çok
   daha fazla etkinlik ağırlıklıdır.

2. **Bir SPACE boyutu iyileşirken bir başkasının sessizce bozulduğunu hiç
   gördük mü ve o sırada fark ettik mi?** Çerçevenin yakalamak için
   tasarlandığı şey tam da bu boyutlar arası ödünleşimdir. Geçen yıla
   bakıp teslimat metriklerinin iyileştiği bir dönem bulun ve aynı pencerede
   memnuniyet ya da iyi oluş verilerinin ne gösterdiğini sorun.

3. **SPACE verisi, gayriresmî bile olsa, ekipleri değil bireyleri
   değerlendirmek ya da karşılaştırmak için kullanılıyor mu?** Bu, çerçeveyi
   yanlış uygular ve manipülasyonu davet eder. Politikanın nasıl
   kullanılmaları gerektiğini söylediğine değil, bu metriklerin pratikte
   gerçekte nasıl konuşulduğuna dürüstçe bakın.

4. **Bir ekibin performans metriklerini sürdürülemez bir tempo pahasına
   iyileştirdiğini nasıl fark ederdik?** Memnuniyet ve iyi oluş verisi
   performans verisiyle birlikte gözden geçirilmezse, bu tür bir ödünleşim
   aylar sonra işten ayrılma ya da kalite çöküşü olarak yüzeye çıkana kadar
   görünmezdir.

5. **Beş boyutun her biri için ölçüm ritmimiz nedir ve her boyutun gerçekte ne
   kadar hızlı değiştiğiyle örtüşüyor mu?** Üç aylık bir memnuniyet anketinin
   gerçek zamanlı etkinlik verisiyle eşleşmesi makul bir ritim uyumsuzluğudur;
   aynı ritmi beş boyuta düşünmeden uygulamak değildir.

6. **Yarın yeni bir mühendislik yöneticisi katılsa ve yalnızca panomuza baksa,
   ekip verimliliğine dair dengeli bir resim mi görürdü, çarpık bir resim mi?**
   Bu, metrik kümenizin gerçekten SPACE'in dengesine ulaşıp ulaşmadığının ya da
   pratikte etkinlik baskınlığını korurken çerçeveye yalnızca göz kırpıp
   kırpmadığının pratik bir sınamasıdır.

## Sektörel bakış

**Startup.** Her gün konuşan ve memnuniyeti ile iş birliği sağlığını doğrudan
hissedebilen bir avuç mühendis için beş boyutlu tam bir uygulama genellikle
fazladır. Erken benimsemeye değer tek alışkanlık, ekip büyüyüp gayriresmî
farkındalığın her şeyi kapsayamadığı boyuta geldiğinde yalnızca etkinliğe
dayalı metriklere yönelme çekimine direnmektir.

**Küçük işletme.** Özel bir insan analitiği işlevi yoksa işi basit tutun:
elinizdeki teslimat verisini (konu 2.10) memnuniyete dair kısa, gayriresmî ve
düzenli bir yoklamayla, hatta tek soruluk basit bir nabız anketiyle eşleyin.
Bu asgari eşleşme bile çerçevenin temel disiplinini yalnızca etkinliğe dayalı
bir panodan çok daha iyi yakalar.

**Kurumsal şirket.** Tam çerçevenin karmaşıklığını hak ettiği yer burasıdır.
Yönetimin, en etkileyici commit grafiğine sahip ekibe varsayılan olarak
yönelmek yerine verimliliği adil biçimde karşılaştırabilmesi için ekipler
arasında dengeli bir SPACE metrik kümesini standartlaştırın ve memnuniyet ile
iş birliği verisini nesnel araçlandırma kadar güvenilir kılmak için konu 3.7'nin
kapsadığı anket altyapısına yatırım yapın.

**Kamu.** Özellikle kamu sektörü ücretlerinin özel sektör tekliflerine her zaman
rekabet edemediği yerlerde işe alım ve elde tutma baskısı, memnuniyet ve iyi
oluş verisini yumuşak bir ek değil, gerçekten stratejik bir konu yapar. İş gücü
planlamasında ve bütçe gerekçelendirmesinde SPACE'i teslimat metrikleri kadar
ciddiye alın; çünkü deneyimli bir mühendisi tükenmişliğe kaybetmenin maliyeti,
yerine gelenin hemen sağlayamayacağı aylarca süren kurumsal bilgiyle ölçülür.

## Örnekler

**Kurumsal şirket.** Bir yazılım şirketinin mühendislik yönetimi yıllarca
birincil verimlilik sinyali olarak commit sayılarını ve tamamlanan hikâye
puanlarını izlemişti. Üç aylık bir memnuniyet anketi ve iş birliği ağı analizi
(konu 3.5) içeren daha kapsamlı bir SPACE metrik kümesini benimsedikten sonra
yönetim, en yüksek etkinlik sayılarına sahip ekibin aynı zamanda en düşük
memnuniyet puanlarına ve izleyen yıldaki en yüksek gönüllü işten ayrılma
oranına sahip olduğunu keşfetti. Etkinlik sayıları tek başına etkin biçimde
yanıltıcıydı. Daha kapsamlı resim, o ekibin eşzamanlı iş yükünde bilinçli bir
azaltmaya (konu 2.5'teki WIP ilkesinin insan düzeyinde uygulanması) ve hem
memnuniyette hem de zamanla sürdürülebilir performansta ölçülebilir bir
toparlanmaya yol açtı.

**Kamu.** Maaşlarını eşleştiremediği özel sektörle mühendis yeteneği için
rekabet eden ulusal bir dijital hizmet kurumu, parasal olmayan elde tutma
yatırımlarının gerekçesini oluşturmak için özellikle dengeli bir SPACE metrik
kümesi benimsedi: daha iyi araçlar, korunmuş odak zamanı ve azaltılmış süreç
sürtünmesi. Memnuniyet anketi verisi verimlilik ve akış metrikleriyle (konu
3.6) birleştirildiğinde, çıkış görüşmesi verilerinde ayrılma niyetinin en güçlü
öngörücüsünün ücret değil, kesinti sıklığı olduğu görüldü. Kurumun bu SPACE
verisiyle doğrudan gerekçelendirilen, korunmuş odak zamanı politikasına
yaptığı sonraki yatırım, izleyen on sekiz ayda elde tutmada ölçülebilir bir
iyileşmeyle ilişkili çıktı.

## İş gerekçesi: motivasyonlar, ROI ve TCO

SPACE'i tam olarak benimsemenin getirisi, önlenmiş işten ayrılma ve önlenmiş
tükenmişlik kaynaklı kalite çöküşüdür; ikisi de çerçevenin araçlandırma
maliyetinden çok daha pahalıdır. Yalnızca etkinliğe dayalı bir metrik kümesi bir
iki yıl boyunca mükemmel görünebilir; sonra insani maliyet bir anda yetişir.
Kaybedilen uzmanlığı yerine koymanın ve ekip sağlığını yeniden kurmanın maliyeti
o dar metrik kümesinin göstermiş göründüğü her verimlilik kazancını gölgede
bırakır.

Toplam sahip olma maliyeti, anket altyapısını (konu 3.7) ve en kolay olana
yönelmek yerine beş boyutu birlikte gözden geçirme disiplinini içerir. Bu
maliyet gerçekten ödemeye değer: yukarıdaki kurumsal örnek, daha dar bir metrik
kümesinin hasar verilene kadar asla yüzeye çıkarmayacağı gerçek ve keşfedilebilir
bir örüntüyü, yüksek etkinliğin yüksek işten ayrılma riskini maskelemesini
gösteriyor.

## Anti-desenler ve tuzaklar

- **SPACE'i yalnızca adıyla benimseyip pratikte etkinlik baskın kalmak:** en
  yaygın başarısızlık biçimi; çerçevenin tüm amacını boşa çıkarır.
- **SPACE boyutlarını bireysel puan kartlarına uygulamak:** ekip ve sistem
  düzeyinde kavrayış için doğrulanmış bir çerçeveyi yanlış uygular.
- **Boyutları, boyutlar arası ödünleşimleri aramadan ayrı ayrı gözden
  geçirmek:** SPACE'in özellikle yakalamak için tasarlandığı örüntüyü kaçırır.
- **Her boyutu aynı ölçüm ritmine zorlamak:** yavaş değişen boyutlara emek
  harcatır, hızlı değişenleri ise yetersiz ölçer.
- **Nesnel veri olmadan tek bir memnuniyet anketi puanını yeterli saymak:**
  çerçevenin istediği öznel ve nesnel kaynaklar arasındaki dengeyi kaybeder.
- **Bir boyuttaki kötüleşen eğilimi, bir başkası iyi görünüyor diye görmezden
  gelmek:** çerçevenin boyutlar arası disiplininin önlemek için var olduğu
  tam hata budur.

## Olgunluk modeli

- **Düzey 1, Başlatma (Initiate):** Verimlilik yalnızca etkinlik metrikleriyle
  ölçülür; memnuniyet, iş birliği ya da verimlilik verisi toplanmaz.
- **Düzey 2, Geliştirme (Develop):** Bazı ek boyutlar gayriresmî olarak ölçülür
  ama tutarlı bir boyutlar arası gözden geçirme ve asgari bileşim standardı
  yoktur.
- **Düzey 3, Standartlaştırma (Standardize):** En az üç SPACE boyutundan
  beslenen dengeli bir metrik kümesi, kuruluş genelinde ekip düzeyinde tutarlı
  biçimde uygulanır.
- **Düzey 4, Yönetme (Manage):** Beş boyutun hepsi düzenli bir ritimle birlikte
  gözden geçirilir, boyutlar arası ödünleşimler etkin biçimde araştırılır ve
  çerçeve gerçek kadrolama ve süreç kararlarını bilgilendirir.
- **Düzey 5, Orkestrasyon (Orchestrate):** SPACE verisi iş gücü planlamasını ve
  elde tutma yatırımını doğrudan şekillendirir; kuruluş, boyutlar arası
  örüntülerden bilgi alan ve hem teslimatı hem geliştirici iyi oluşunu birlikte
  ölçülebilir biçimde iyileştiren belirli müdahaleleri gösterebilir.

## Tartışma önerileri

1. Mevcut metrik kümemizde hangi SPACE boyutu en az ölçülüyor?
2. Bir ekibin etkinliği artarken memnuniyetinin sessizce düştüğünü hiç gördük mü?
3. Bir ekibin uzun vadeli sürdürülebilirliği kısa vadeli çıktıyla takas ettiğini bugün nasıl yakalardık?
4. SPACE'e yakın herhangi bir veri şu anda ekipleri değil bireyleri değerlendirmek için kullanılıyor mu?
5. Bizim için gerçekten dengeli bir verimlilik panosu somut olarak neye benzerdi?

## Temel çıkarımlar

- SPACE beş boyuta yayılır: **Memnuniyet ve iyi oluş, Performans, Etkinlik,
  İletişim ve iş birliği, Verimlilik ve akış**; hiçbiri tek başına güvenilir
  değildir.
- Metrik kümesini nesnel ve öznel veri kaynaklarını karıştırarak **en az üç
  boyuttan** kurun.
- **Etkinlik metriklerini bağlam** olarak ele alın, asla manşet verimlilik
  sinyali olarak değil (konu 3.4).
- SPACE'i bireysel puan kartı olarak değil, **ekip ve sistem düzeyinde**
  uygulayın.
- Boyutları birlikte gözden geçirin; yalnızca tek bir boyuttaki harekete değil,
  **boyutlar arası ödünleşimlere** bakın.

## Kaynaklar ve ileri okuma

- Forsgren, Nicole, Margaret-Anne Storey, Chandra Maddila, Thomas
  Zimmermann, Brian Houck, and Jenna Butler, "The SPACE of Developer
  Productivity," *ACM Queue* (2021): özgün SPACE çerçevesi makalesi.
- *Accelerate: The Science of Lean Software and DevOps*, Nicole Forsgren,
  Jez Humble ve Gene Kim (DORA metrikleriyle paylaşılan araştırma temeli).
- *Peopleware: Productive Projects and Teams*, Tom DeMarco ve Timothy
  Lister (geliştirici verimliliğini yalnızca mekanik değil, insani bir soru
  olarak ele almanın klasik savunusu).
- *Drive: The Surprising Truth About What Motivates Us*, Daniel H. Pink
  (memnuniyet ve iyi oluş ölçümüyle ilgili motivasyon araştırması).
