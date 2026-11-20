# Yazılım mühendisliği metrikleri nedir?

[Yazılım mühendisliği metrikleri](https://en.wikipedia.org/wiki/Software_metric),
yazılım geliştirme süreçlerinin, ürünlerinin ve ekiplerinin kalitesini,
verimliliğini ve etkisini değerlendirmek, izlemek ve geliştirmek için kullanılan
nicel ölçülerdir. İyi kullanıldığında sistemsel tanı araçları gibi çalışırlar:
operasyonel darboğazları ortaya çıkarır, teknik borcun giderilmesini gerekçelendirir
ve mühendislik etkinliğini somut iş sonuçlarıyla hizalarlar. Kötü kullanıldığında ise
davranışı çarpıtır, güveni zedeler ve tam da yanlış şeyleri ödüllendirirler.

Bu kitap, çoğu ekibin bir metriğin *ne için* olduğuna karar vermeden metriklere
uzanması yüzünden var. Bir pano, sayması kolay olan her şeyle dolar; yönetim ekibi
"bu sayı yükseldi mi, düştü mü" diye sormaya başlar ve bir çeyrek içinde ekip,
sayının temsil etmesi gereken sonucu değil, sayının kendisini optimize etmeye
koyulur. Bu başarısızlığın bir adı var:
[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law). Bir ölçü hedefe
dönüştüğünde iyi bir ölçü olmaktan çıkar. Bu kitaptaki her konu, bu yasa arkasında
dururken yazılmıştır.

## İki temel çerçeve

Sektör, mühendislik teslimatını ve ekip sağlığını ölçmek için araştırmaya dayanan
iki çerçevede büyük ölçüde birleşmiştir.

**[DORA metrikleri](https://dora.dev/guides/dora-metrics/)** (DevOps Research and
Assessment programından), sistemin üretim hızını ve kararlılığını ölçer:
dağıtım sıklığı, değişiklikler için lead time, değişiklik başarısızlık oranı ve
başarısız dağıtımdan kurtarma süresi. Bu kitabın 2. Bölümü dördünü de özel bir
başvuru konusunda ele alır; DORA boru hattının mekaniğini iyi ölçer ama boru
hattından ne tür bir değerin aktığı hakkında bir şey söylemez, bu yüzden teslimat ve
akış metriklerini daha geniş biçimde düzenlemek için kullandığı Flow Framework ile
birlikte işlenir.

**[SPACE çerçevesi](https://queue.acm.org/detail.cfm?id=3454124)**, Microsoft,
GitHub ve Victoria Üniversitesi araştırmacıları tarafından oluşturulmuştur; ham
üretim hızını beş boyutta geliştirici deneyimiyle dengeler: memnuniyet ve esenlik,
performans, etkinlik, iletişim ve iş birliği, verimlilik ve akış. 3. Bölüm bunu
ayrıntılı işler.

Bu iki çerçevenin ötesinde ekipler, alana göre gruplanmış yerel metrikleri izler: kod
ve kalite metrikleri (4. Bölüm), ürün ve iş metrikleri (5. Bölüm) ile güvenilirlik,
operasyon ve güvenlik metrikleri (6. Bölüm). 7. Bölüm, hâlihazırda süren bir
değişime değinir: üretken yapay zekâ araçları ham kod çıktısını neredeyse bedava hâle
getirdi; bu da sektörün on yıldır dayandığı birçok metriğin artık eskiden
anlattığını anlatmadığı anlamına gelir.

## Bu kitap kimin için

Birincil okur kitlesi, bir ekibin neyi neden ölçeceğini seçen kişilerdir:
mühendislik liderleri, kıdemli ve baş mühendisler, platform ve DevOps ekipleri ile
ilk kez bir metrik panosu veya skor kartı hazırlayan ya da davranışı çarpıtmaya
başlamış olanı onaran program ve ürün yöneticileri. İkincil okur kitlesi, kurumunun
neyi neden izlediğini anlamak ve bir metrik kötüye kullanıldığında nasıl itiraz
edeceğini öğrenmek isteyen her mühendistir.

## Nasıl okunur

Buradan başlayın, ardından kitabın nasıl düzenlendiğini öğrenmek için
[girişi](giris.md) okuyun ya da doğrudan [içindekiler](icindekiler.md) sayfasına
geçin. Her konu kendi başına durur: önce ilkelerini sunar, somut öneriler verir,
ele aldığı metriğin nasıl manipüle edildiğini belirtir ve bir olgunluk modeli,
tartışma soruları ve kaynaklarla biter. Kitabı kullanmak için baştan sona okumanız
gerekmez.
