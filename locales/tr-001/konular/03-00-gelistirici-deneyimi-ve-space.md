# 3.0 Bölüm 3'e giriş: Geliştirici deneyimi ve SPACE çerçevesi

Bölüm 2 teslimatı dışarıdan ölçtü: kodun bir hattan ne kadar hızlı ve ne kadar
güvenle geçtiğini. Bu bölüm ise o kodu üreten insanların deneyimini ölçüyor.
Bunun gerekçesi şu: yalnızca teslimat metrikleriyle bakıldığında tablo
mükemmel görünebilir; oysa arkasındaki insanlar tükenmişlik yaşıyor, kesintiler
altında eziliyor ya da sessizce işten kopuyor olabilir. Yalnızca
DORA metriklerini izleyen bir kuruluş, bir ekibi daha fazla sıkıştırarak bu
metrikleri bir iki yıl boyunca iyileştirebilir. Sonra işten ayrılmalar, kalite
çöküşü ya da tükenmişlik kazanımın hepsini bir anda siler. Bu bölüm bir
karşı ağırlık işlevi görüyor.

Bölümün merkezinde [SPACE çerçevesi](https://queue.acm.org/detail.cfm?id=3454124)
yer alıyor. Çerçeveyi Microsoft, GitHub ve Victoria Üniversitesi'nden
araştırmacılar, sektörün geliştirici verimliliğini kod satırı ya da commit
sayısı gibi tek ve kolayca manipüle edilebilen bir vekil ölçüyle ölçme
alışkanlığına bir düzeltme olarak geliştirdi. SPACE beş boyuta yayılır:
memnuniyet ve iyi oluş, performans, etkinlik, iletişim ve iş birliği, verimlilik
ve akış. Çerçevenin temel disiplini, ve bu bölümün onu Bölüm 2'nin kendi akış
metriklerine uyguladığı titizlikle ele almasının nedeni şudur: hiçbir boyut
tek başına güvenilir değildir. Değer, beş boyutu birlikte gözetmekten gelir;
böylece bir ekip, başka bir eksene sessizce zarar vererek tek bir eksende iyi
görünemez.

Büyük ekipler için geliştirici deneyimi metrikleri, DORA'nın yanıtlayamadığı
bir soruyu yanıtlar: bu teslimat performansı sürdürülebilir mi ve kuruluş onu
üreten insanları elinde tutabiliyor mu? Bu bölümü görmezden gelen kurumsal
şirketler bedeli genellikle işten ayrılma verilerinde ve çıkış
görüşmelerinde, hasar verildikten çok sonra öğrenir. Kamu kuruluşları ise,
çoğu zaman yalnızca maaşla rekabet etmelerini sınırlayan kamu sektörü ücret
kısıtları altında çalıştığı için, geliştirici deneyimini sonradan akla gelen bir
konu olarak değil, birinci sınıf ve etkin biçimde yönetilen bir öncelik olarak
ele almak için özellikle güçlü nedenlere sahiptir.

## Bu bölümdeki konular

- **3.1 SPACE çerçevesi:** Beş boyutun birlikte ele alınışı, hiçbirinin tek
  başına güvenilir olmamasının nedeni ve bunlardan gerçekten dengeli bir
  metrik kümesinin nasıl kurulacağı.
- **3.2 Memnuniyet ve iyi oluş metrikleri:** Doyum, hayal kırıklığı ve
  tükenmişlik riskinin ölçülmesi; hiçbir sistem telemetrisinin doğrudan
  gözlemleyemediği boyut.
- **3.3 Performans metrikleri ve sonuç vekilleri:** Etkinlikle en kolay
  karıştırılan boyut ve bunun yerine gerçek sonuç katkısının nasıl ölçüleceği.
- **3.4 Etkinlik metrikleri ve sınırları:** Commit sayıları, kod satırları ve
  bunun neden aşırı ağırlık verilmesi en tehlikeli boyut olduğu.
- **3.5 İletişim ve iş birliği metrikleri:** Bilginin insanlar ve ekipler
  arasında gerçekte nasıl aktığı ve sağlıklı bir örüntünün neye benzediği.
- **3.6 Verimlilik ve akış: derin çalışma ve kesintiler:** Gerçek mühendislik
  işinin gerektirdiği kesintisiz zamanın korunması ve onu aşındıran
  sürtünmenin ölçülmesi.
- **3.7 Geliştirici deneyimi anketleri ve DevEx metrikleri:** Popülerlik
  yarışmasına dönüşmeyen, güvenilir sinyal üreten bir anketin nasıl yapılacağı
  ve nesnel verilerle nasıl birleştirileceği.

## Bu konular birbiriyle nasıl ilişkili

Konu 3.1 beş SPACE boyutunu birlikte tanıtır; konu 3.2'den 3.6'ya kadar olan
konular da SPACE araştırmacılarının sunduğu sırayla her boyutu gerçek bir
derinlikle tek tek ele alır. Konu 3.7 bölümü anket tasarımının pratik
mekaniğiyle kapatır; çünkü memnuniyet, performans ve iş birliği kısmen
öz bildirim verisine dayanır (konu 1.5'teki araçlandırma ile öz bildirim
ayrımı bu bölüm boyunca doğrudan geçerlidir) ve kötü tasarlanmış bir anket
önceki konuların her birini zayıflatır.

Bu bölümün temel disiplini, yani tek bir boyutta güçlü olmak yerine boyutlar
arasında denge, kitabın konu 1.3'teki çıktı yerine sonuç ilkesinin bir
teslimat hattına değil insanlara uygulanmış en açık örneğidir. Etkinlik
(konu 3.4), saf bir çıktı metriğine en çok benzeyen SPACE boyutudur ve bu bölüm
onu buna göre ele alır: beş girdiden biri olarak yararlı, tek başına bir sinyal
olarak tehlikeli. Bölüm 2 ile birlikte okunduğunda bu bölüm, DORA'nın tek
başına veremediği resmi tamamlar: yazılımın yalnızca hızlı ve güvenli biçimde
teslim edilip edilmediğini değil, onu teslim eden insanların bu hızı
sürdürüp sürdüremeyeceğini de gösterir.
