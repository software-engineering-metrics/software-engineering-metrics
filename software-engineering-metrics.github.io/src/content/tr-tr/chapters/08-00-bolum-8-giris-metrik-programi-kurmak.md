# 8.0 Bölüm 8'e giriş: Metrik programı kurmak

Bu kitabın önceki her bölümü bir metrik ailesini derinlemesine ele aldı:
neyin ölçüleceğini, nasıl manipüle edildiğini ve bu manipülasyonu hangi
korkuluğun yakaladığını. Esasa ilişkin son bölüm, *neyin* ölçüleceğinden,
bunların hepsini uygulamaya döken kurumsal programı *nasıl* kurup
yürüteceğinize geçiyor. Kitabın her konusunu okumuş ama bu bölümün ele aldığı
panoyu, araç kararını, devreye alma planını ve olgunluk yol haritasını hiç
kurmamış bir kurumun bilgisi mükemmel, çalışan bir metrik programı yoktur.
Bu bölüm o boşluğu kapatmak için var.

Buradaki beş konu, bir metrik programını sıfırdan kurmanın ya da kitabın
ilkelerinden uzaklaşmış bir programı onarmanın doğal sırasını izler. Konu 8.1,
özellikle pano tasarımını ele alır; 1. ile 7. bölümlerdeki çok sayıda metriği
tutarlı, dürüst ve kullanışlı bir görünümler kümesine dönüştürür. Konu 8.2,
her kurumun metrik araçları için eninde sonunda karşılaştığı kendin yap ya da
satın al kararını işler. Konu 8.3 kitabın en insan odaklı konusudur: metrik
programının devreye alınmasının doğurabileceği korkuyu ve bu korkunun,
programın dayandığı verinin kendisini bozmasını nasıl önleyeceğinizi doğrudan
ele alır; kitap boyunca konu 1.2'nin uyarılarının yankısıdır. Konu 8.4, her
konunun beş düzeyli olgunluk modelini kurumsal öz değerlendirme için tek ve
tutarlı bir çerçevede toplar. Konu 8.5 ise kitabın esas içeriğini somut,
sıralı bir benimseme yol haritasıyla kapatır.

Büyük ekipler için bu bölüm, kitabın fikirlerinin kalıcı kurumsal pratiğe
dönüştüğü ya da kimsenin gerçekten uygulamadığı, entelektüel olarak tatmin
edici bir belge olarak kaldığı yerdir. Ölçekleri ve yarım önlemlerin hiç metrik
programı olmamasından daha kötü sonuç doğurma riski (konu 8.3'ün temel uyarısı)
nedeniyle kurumsal ve kamu kuruluşları, kitabın ilkelerini gerçekten işleyen
bir devreye almaya çevirmek için bu bölümün pratik rehberliğine dayanır;
korku yaratan, manipüle edilmiş veri üreten ve bir metrik programının bir
ekibe ne yaptığına dair her şüphecinin en kötü varsayımını doğrulayan bir
devreye almaya değil.

## Bu bölümdeki konular

- **8.1 Mühendislik metrikleri panosu tasarlamak:** Bu kitabın pek çok
  metriğini, farklı kitleler için tutarlı, dürüst ve eyleme dönük görünümlere
  çevirmek.
- **8.2 Araç ortamı: kendin yap ya da satın al:** Metrik araçlarını seçerken
  ya da kurarken gerçek ödünleşimler ve nasıl karar verileceği.
- **8.3 Korku yaratmadan metrikleri devreye almak:** Bu bölümün en önemli
  pratik konusu; bir metrik programının, kitabın baştan beri uyardığı
  manipülasyon davranışını tam da kendisinin doğurmasını önlemek.
- **8.4 Mühendislik metrik programları için olgunluk modeli:** Her konunun
  kendi modelini bir araya getiren, birleşik, beş düzeyli olgunluk çerçevesi.
- **8.5 Kademeli bir benimseme yol haritası:** Kurumunuzun bugün durduğu
  yerden olgun bir metrik programına uzanan somut, aşamalı, sıralı yol.

## Bu konular birbiriyle nasıl ilişkilenir

Konu 8.1, 1. ile 7. bölümlerdeki soyut metrik ailelerinin gerçek insanların
gerçekten baktığı somut bir ürüne, bir panoya dönüştüğü yerdir. Konu 8.2,
o panonun dayandığı araç kararını ele alır. Konu 8.3 bu bölümün menteşe
konusudur: kitabın önerdiği her şeyin güvenilir veri üretip üretmediğini ya da
sessizce korkuyla bozulup bozulmadığını belirleyen insani ve kurumsal
dinamikleri ele alır; bu da doğrudan, tüm kitabı açan konu 1.2'deki Goodhart
yasası uyarısına bağlanır. Konu 8.4, önceki her konunun zaten tek tek sunduğu
değerlendirme çerçevesini birleştirir; konu 8.5 ise bu birleşik
değerlendirmeyi gerçek, sıralı bir plana çevirir.

Bu bölüm aynı zamanda kitabın eklerinin (Bölüm 9) en doğrudan işe yaradığı
yerdir: kitabın sunduğu şablonlar (konu 9.4) ve kontrol listeleri (konu 9.3),
bu bölümün anlattığı devreye alma işini desteklemek için özel olarak
hazırlanmıştır; birleşik olgunluk öz değerlendirmesi (konu 9.5) ise konu
8.4'ün çerçevesinin doğrudan eşlikçisidir. Bu bölümü, önceki her bölümün
örtük olarak sorduğu sorunun kitaptaki yanıtı olarak okuyun: neyi ve nasıl
dürüstçe ölçeceğinizi artık bildiğinize göre, bunu sürdürülebilir biçimde,
ölçekte ve konu 1.2'nin ilk sayfadan beri uyardığı manipülasyon baskısı
altında bütün çabanın çökmesine izin vermeden yapan kurumu gerçekte nasıl
kurarsınız?
