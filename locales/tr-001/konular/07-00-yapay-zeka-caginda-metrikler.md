# 7.0 Bölüm 7'ye giriş: Yapay zeka çağında metrikler

Bu kitapta şimdiye kadar ele alınan her metrik, kod yazmanın kıt ve zahmetli
bir kaynak olduğu bir dünya için tasarlandı. Üretken yapay zeka araçları bu
öncülü, çoğu kuruluşun metriklerinin yetişebileceğinden daha hızlı değiştirdi.
Bir araç saniyeler içinde makul görünen bir pull request üretebildiğinde,
kitabın önceki bölümlerinde ele alınan birkaç metrik ölçtüğü şeyi ölçmeyi
bırakır: en doğrudan etkilenenler etkinlik sayımlarıdır (konu 3.4), özensizce
izlenirse ham dağıtım sıklığı (konu 2.10) ve hatta test kapsamı (konu 4.2) da
bu gruba girer. Bu bölüm var, çünkü bu değişimle açıkça hesaplaşmayan bir
metrik programı, sessizce anlamsızlaşmış, daha da kötüsü etkin biçimde ters
etki yaratan sayıları güvenle raporlama riskiyle karşı karşıyadır.

Bu bölümün dört konusu bilinçli bir yay çizer. Konu 7.1 değişimi doğrudan
adlandırır ve bunun neden kademeli bir ayar değil, bir paradigma değişimi
olduğunu açıklar. Konu 7.2, yapay zeka destekli geliştirmenin gerçekten işe
yarayıp yaramadığının nasıl ölçüleceğini, konu 1.3'ün kitabın en başında
kurduğu çıktı yerine sonuç disipliniyle ele alır. Konu 7.3, bu değişimin
getirdiği yeni riskleri adlandırır: karşılığında değer üretmeden şişen
metrikler ve sektörün şu anki tespit yeteneğini aşan bir hızla gerçekleşen
kalite seyrelmesi. Konu 7.4 bölümü, kitabın tüm bu değişime verdiği yanıtla
kapatır: en önemli metrikler olarak sonuç telemetrisine bilinçli bir yönelim.
Çünkü bu bölümün baştan sona savunduğu gibi, çıktı hacmi zaten hiçbir zaman
optimize edilecek doğru şey olmadı; üretken yapay zeka yalnızca bu gerçeği
artık göz ardı edilemez hale getirdi.

Büyük ekipler için bu bölüm spekülatif değil, acildir. Yapay zeka kodlama
asistanlarını ölçekli biçimde benimseyen kurumsal kuruluşların, mevcut
metriklerinin hâlâ düşündükleri anlama gelip gelmediğini hızla öğrenmesi
gerekir. Yapay zeka benimsemede çoğunlukla daha temkinli ilerleyen, ancak
eleman aldığı ve kıyasladığı daha geniş sektörde aynı araç değişimiyle
karşılaşan kamu kuruluşlarının, sektör kıyaslamaları aynı baskı altında
kayarken bunları doğru yorumlamak için bu bölümün rehberliğine ihtiyacı vardır.

## Bu bölümdeki konular

- **7.1 Üretken yapay zeka paradigma değişimi:** Bunun, araç kutusuna eklenen
  yeni bir araçtan öte, mevcut birkaç metriğin neyi ölçtüğünde temel bir
  değişiklik olmasının nedeni.
- **7.2 Yapay zeka destekli yazılım geliştirmeyi ölçmek:** Yapay zeka
  desteğinin gerçekten işe yarayıp yaramadığını, çıktı hacmi yerine sonuç
  verileriyle nasıl ölçeceğiniz.
- **7.3 Metrik şişmesi ve kalite seyrelmesi riskleri:** Bu değişimin getirdiği
  yeni manipülasyon ve kalite riskleri ile bunlara karşı nasıl korunacağınız.
- **7.4 Yeni kutup yıldızı olarak sonuç telemetrisi:** Kitabın tüm bu değişime
  yanıtı: çıktı ucuzladıkça sonuç metriklerine doğru bilinçli ve kalıcı bir
  yönelim.

## Bu konular birbiriyle nasıl ilişkilenir

Konu 7.1 bu bölümün neden var olduğunu kurar. Konu 7.2 değişimin gerektirdiği
pratik ölçüm rehberliğini verir. Konu 7.3 bir kuruluşun yapay zeka destekli
geliştirmeyi benimserken karşı önlem alması gereken belirli başarısızlık
kiplerini adlandırır. Konu 7.4 dersi, herhangi bir araç ya da satıcıdan uzun
ömürlü kalıcı bir ilkeye genelleştirir. Bu bölüm, 2 ile 6 arasındaki
bölümlerin her birinin ayrı bir alanı kapsaması gibi, tek başına bir metrik
ailesi olmaktan çok kitabın tamamına geri uygulanan bir mercektir: yapay zeka
destekli geliştirme istisnai olmaktan çıkıp standart uygulama haline geldikçe,
önceki her konunun etkinlik, çıktı ve hatta bazı sonuç metrikleri bu bölümün
soruları ışığında yeniden incelenmelidir.

Bu bölüm en doğrudan konu 1.3'ün sonuçların çıktıdan önemli olduğu ilkesine ve
konu 3.4'ün etkinlik metriklerine karşı uyarısına bağlanır. Bölüm, ikisini de
baştan beri doğru olarak görür; şimdi bir teknoloji değişimi bunların tersini,
yani hacme göre ölçmeyi, yalnızca yetersiz değil etkin biçimde tehlikeli
kılarak doğruluklarını acil biçimde kanıtlamıştır. Bölüm ayrıca 8. Bölümün
metrik programı kurma konusundaki pratik rehberliğine zemin hazırlar: bu
değişimden önce tasarlanmış bir gösterge paneli, bu bölümün kapsadıkları
ışığında yalnızca kademeli bir ayar değil, bilinçli bir yeniden değerlendirme
gerektirir.
