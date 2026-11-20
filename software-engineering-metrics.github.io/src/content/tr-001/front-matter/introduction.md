# Giriş

Bu kitap, beş kişilik bir girişimden binlerce mühendisi olan bir kuruma ya da yasal
bir performans çerçevesine göre rapor veren bir kamu kurumuna kadar her ölçekteki
ekip için [yazılım mühendisliğini](https://en.wikipedia.org/wiki/Software_engineering)
iyi ölçmeye dair bir çalışma kılavuzudur. Var olmasının nedeni, metrik tavsiyelerinin
çoğunun ya işletim ayrıntısı olmayan bir çerçeve özeti ya da bir araç satıcısının
özellik listesi olmasıdır. Bu kitap ikisi de olmamaya çalışır: neyin ölçüleceği
konusunda görüşlüdür, her metriğin nasıl manipüle edildiği konusunda açıktır ve bir
ekibin korkmak yerine güvendiği bir metrik programının nasıl yürütüleceği konusunda
pratiktir.

## Bu kitap kimin için

Birincil okur kitlesi, bir kurumun neyi ölçeceğini seçen kişilerdir: mühendislik
liderleri, kıdemli ve baş mühendisler, platform ve DevOps ekipleri ile program ve
ürün yöneticileri. İkincil okur kitlesi, hareket ettirmesi istenen bir panonun
arkasındaki mantığı anlamak ve amacına hizmet etmeyi bırakmış bir metriğe nasıl
itiraz edeceğini öğrenmek isteyen her mühendistir. Baştan sona okumanız gerekmez.
Her konu kendi başına durur, önce ilkelerini sunar ve pratik çıkarımlar, bir olgunluk
modeli ve kaynaklarla biter.

## Kitap nasıl düzenlenmiştir

Kitap **bölümlere** (tam sayılar) ve **konulara** (ondalıklı sayılar) ayrılır.
**N.0** konusu her bölümü tanıtır ve konularının birbiriyle ilişkisini açıklar;
**N.1, N.2, …** konuları ayrıntılı işler.

- **1. Bölüm, Ölçümün Temelleri:** neden ölçülür, Goodhart yasası ve manipülasyonun
  psikolojisi, çıktı yerine sonucu seçmek, yönetişim ve sahiplik, veri kaynakları ve
  her metrik programının ihtiyaç duyduğu istatistik okuryazarlığı.
- **2. Bölüm, Akış Metrikleri:** Flow Framework, akış öğeleri ve beş akış metriği,
  cycle time, kuyruk kuramı, klasik Lean değer akışı metrikleri, pull request ve kod
  gözden geçirme metrikleri ve bir başvuru konusu olarak DORA çerçevesi.
- **3. Bölüm, Geliştirici Deneyimi ve SPACE Çerçevesi:** SPACE çerçevesi ve beş
  boyutu ile bir geliştirici deneyimi anketinin popülerlik yarışmasına dönüşmeden
  nasıl yürütüleceği.
- **4. Bölüm, Kod ve Kalite Metrikleri:** karmaşıklık, test kapsamı ve etkinliği,
  kod değişimi ve sıcak noktalar, statik analiz, teknik borç ve dokümantasyon.
- **5. Bölüm, Ürün ve İş Metrikleri:** kaçan kusurlar, özellik benimsenmesi, müşteri
  ve iş sonuçları, birim ekonomisi ve yatırım getirisi.
- **6. Bölüm, Güvenilirlik, Operasyon ve Güvenlik Metrikleri:** SLI'lar, SLO'lar ve
  hata bütçeleri, olay metrikleri, nöbet ve kapasite ile güvenlik ve güvenlik açığı
  metrikleri.
- **7. Bölüm, Yapay Zekâ Çağında Metrikler:** üretken yapay zekânın paradigma
  değişimi, yapay zekâ destekli geliştirmenin nasıl ölçüleceği, metrik şişmesi riski
  ve çıktı ucuzladıkça sonuç telemetrisinin neden kuzey yıldızı olduğu.
- **8. Bölüm, Metrik Programı Oluşturmak:** pano tasarlamak, yap ya da satın al,
  korku yaratmadan metrik kullanıma almak, bir olgunluk modeli ve kademeli bir
  benimseme yol haritası.
- **9. Bölüm, Ekler:** sözlük, metrik tanımları ve formüller başvurusu, kontrol
  listeleri, şablonlar, olgunluk öz değerlendirmesi, kaynaklar ve dizin.

## Yol gösterici ilkeler

Sekiz ilke kitabın omurgasını oluşturur:

1. **Hedefe dönüşen bir ölçü iyi bir ölçü olmaktan çıkar.** Goodhart yasasına karşı
   çarpıtma ortaya çıktıktan sonra değil, en baştan tasarım yapın.
2. **Etkinlikten çıktıya, çıktıdan sonuca.** Her metrik kümesini, ekibin ne
   ürettiğine veya ne kadar meşgul olduğuna değil, müşteri ya da iş için neyin
   değiştiğine doğru ağırlıklandırın.
3. **Teşvik edilen her metrik bir korkuluk ister.** Hızı kaliteyle, üretim hızını
   kararlılıkla eşleyin ve hiçbir sayının peşinden tek başına koşmayın.
4. **Kişileri değil, sistemleri ölçün.** Suçu bireyselleştiren bir metrik güveni
   bozar ve manipülasyona davetiye çıkarır; bir sistem kısıtını ortaya çıkaran
   metrik ise iyileştirmeye davet eder.
5. **Elde edebildiğiniz yerde öz bildirim yerine enstrümantasyonu, edemediğiniz
   yerde öz bildirimi tercih edin.** Dağıtım sayıları boru hattından gelir;
   memnuniyet sorarak öğrenilir.
6. **Bir metrik yerini hak eder, yoksa emekli edilir.** Panodaki her karo dikkat
   harcar. Bilinçli olarak budayın.
7. **Tanımlar panolardan daha önemlidir.** "Lead time"ı farklı hesaplayan iki ekip,
   sayıyla ilgili harekete geçmekten çok sayı üzerine tartışarak zaman harcar.
8. **Üretken yapay zekâ, yalnızca yeniden temel çizgi belirlemek için değil, yeniden
   sorgulamak için bir nedendir.** Çıktı ucuzladığında, çıktı hacmi etrafında kurulan
   metrikler yalnızca yeni hedeflere değil, yeni korkuluklara da ihtiyaç duyar.

## Konular arası temalar

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law), yalnızca 1.2
konusunda değil, bu kitabın her bölümünden geçen tek temadır. Her metrik ailesi
konusu, ele aldığı metriğin nasıl manipüle edildiğini ve hangi korkuluğun bunu
yakaladığını belirtir. Bir metriğin yasal ya da sözleşmesel ağırlık taşıyabildiği
devlet ve kurumsal raporlama yükümlülükleri, tek bir konuya sıkıştırılmış sonradan
akla gelen bir şey olarak değil, baştan sona tasarım girdisi olarak ele alınır.

## Nasıl kullanılır

Kademeli benimseyin; hiç pano görmemiş bir ekibin üzerine tek seferde büyük bir pano
yıkmayın. Acının en büyük olduğu yerden başlayın, kendinizi dürüstçe konumlandırmak
için her konunun olgunluk modelini kullanın ve işin sırasını benimseme yol
haritasının (8.5 konusu) belirlemesine izin verin. Amaç bir grafik duvarı değil.
Amaç, yaptığı şeyin işe yarayıp yaramadığını kanıtla söyleyebilen ve kendi
sayılarına harekete geçecek kadar güvenen bir kurum.
