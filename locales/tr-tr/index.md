# Yazılım Mühendisliği Metrikleri

**Yazılım mühendisliğini** iyi ölçmeye dair bir çalışma kitabı: etkinlik yerine
gerçek sonuçları yansıtan metrikler nasıl seçilir, kitabın dayandığı çerçeveler
(Flow Framework, SPACE çerçevesi, kuyruk kuramı ve DORA metrikleri), önem taşıyan
metrik aileleri ve bir ekibi denetlemek yerine geliştiren bir metrik programı nasıl
yürütülür.

Kitap; teslimat ve akışı, geliştirici deneyimini, kod ve kaliteyi, ürün ve iş
sonuçlarını, güvenilirlik ve güvenliği ve üretken yapay zekânın bu sayıların
anlamını nasıl değiştirdiğini ele alır.

- **[Yazılım mühendisliği metrikleri nedir?](onsoz/yazilim-muhendisligi-metrikleri-nedir.md):** buradan başlayın
- **[Giriş](onsoz/giris.md):** bu kitap nedir ve nasıl okunur
- **[İçindekiler](onsoz/icindekiler.md):** konuların tam listesi

## Bu kitap nasıl okunur

Bölümler tam sayıdır; konular ondalıklı sayılardır. **N.0** konusu her bölümü
tanıtır; **N.1, N.2, …** o bölümün konularıdır. 9. Bölüm ekleri toplar (sözlük,
formül başvurusu, kontrol listeleri, şablonlar, bir olgunluk öz değerlendirmesi,
kaynaklar ve bir dizin). Her metrik ailesi konusu ilkeleri, önerileri, ödünleşimleri,
sektörel bakışı, örnekleri (kurumsal ve kamu), bir iş gerekçesini (ROI/TCO),
anti-desenleri, bir olgunluk modelini, tartışma sorularını ve kaynakları sunar; ayrıca
metriğin nasıl manipüle edildiğini ve hangi korkuluğun bunu yakaladığını belirtir.
Kademeli benimseyin; tek seferde büyük patlama yapmayın.

## İçindekiler

### Bölüm 1: Ölçümün Temelleri
- [1.0 Giriş](konular/01-00-bolum-1e-giris-olcumun-temelleri.md)
- [1.1 Yazılım mühendisliği neden ölçülür](konular/01-01-yazilim-muhendisligi-neden-olculur.md)
- [1.2 Goodhart yasası ve metriklerin psikolojisi](konular/01-02-goodhart-yasasi-ve-metriklerin-psikolojisi.md)
- [1.3 Çıktı yerine sonuç: Ne ölçüleceğini seçmek](konular/01-03-cikti-yerine-sonuc-ne-olculecegini-secmek.md)
- [1.4 Metrik yönetişimi ve sahiplik](konular/01-04-metrik-yonetisimi-ve-sahiplik.md)
- [1.5 Veri kaynakları ve enstrümantasyon](konular/01-05-veri-kaynaklari-ve-enstrumantasyon.md)
- [1.6 Mühendislik metrikleri için istatistik okuryazarlığı](konular/01-06-muhendislik-metrikleri-icin-istatistik-okuryazarligi.md)

### Bölüm 2: Akış Metrikleri
- [2.0 Giriş](konular/02-00-bolum-2-ye-giris-akis-metrikleri.md)
- [2.1 Flow Framework](konular/02-01-flow-framework.md)
- [2.2 Akış öğeleri: özellikler, hatalar, riskler ve borç](konular/02-02-akis-ogeleri-ozellikler-hatalar-riskler-ve-borc.md)
- [2.3 Akış hızı ve akış dağılımı](konular/02-03-akis-hizi-ve-akis-dagilimi.md)
- [2.4 Akış süresi ve akış yükü](konular/02-04-akis-suresi-ve-akis-yuku.md)
- [2.5 Akış verimliliği ve süreçteki iş](konular/02-05-akis-verimliligi-ve-surecteki-is.md)
- [2.6 Döngü süresi (cycle time) ve bileşenleri](konular/02-06-dongu-suresi-ve-bilesenleri.md)
- [2.7 Kuyruk kuramı](konular/02-07-kuyruk-kurami.md)
- [2.8 Yalın değer akışı metrikleri](konular/02-08-yalin-deger-akisi-metrikleri.md)
- [2.9 Pull request ve kod inceleme metrikleri](konular/02-09-pull-request-ve-kod-inceleme-metrikleri.md)
- [2.10 DORA metrikleri çerçevesi](konular/02-10-dora-metrikleri-cercevesi.md)

### Bölüm 3: Geliştirici Deneyimi ve SPACE Çerçevesi
- [3.0 Giriş](konular/03-00-gelistirici-deneyimi-ve-space.md)
- [3.1 SPACE çerçevesi](konular/03-01-space-cercevesi.md)
- [3.2 Memnuniyet ve iyi oluş metrikleri](konular/03-02-memnuniyet-ve-iyi-olus-metrikleri.md)
- [3.3 Performans metrikleri ve sonuç vekilleri](konular/03-03-performans-metrikleri-ve-sonuc-vekilleri.md)
- [3.4 Etkinlik metrikleri ve sınırları](konular/03-04-etkinlik-metrikleri-ve-sinirlari.md)
- [3.5 İletişim ve iş birliği metrikleri](konular/03-05-iletisim-ve-is-birligi-metrikleri.md)
- [3.6 Verimlilik ve akış: derin çalışma ve kesintiler](konular/03-06-verimlilik-ve-akis-derin-calisma-ve-kesintiler.md)
- [3.7 Geliştirici deneyimi anketleri ve DevEx metrikleri](konular/03-07-gelistirici-deneyimi-anketleri-ve-devex-metrikleri.md)

### Bölüm 4: Kod ve Kalite Metrikleri
- [4.0 Giriş](konular/04-00-bolum-4e-giris-kod-ve-kalite-metrikleri.md)
- [4.1 Kod karmaşıklığı metrikleri](konular/04-01-kod-karmasikligi-metrikleri.md)
- [4.2 Test kapsaması ve test etkinliği](konular/04-02-test-kapsamasi-ve-test-etkinligi.md)
- [4.3 Kod değişim yoğunluğu ve sıcak nokta analizi](konular/04-03-kod-degisim-yogunlugu-ve-sicak-nokta-analizi.md)
- [4.4 Statik analiz ve kod kokusu metrikleri](konular/04-04-statik-analiz-ve-kod-kokusu-metrikleri.md)
- [4.5 Teknik borç ölçümü](konular/04-05-teknik-borc-olcumu.md)
- [4.6 Dokümantasyon ve bilgi metrikleri](konular/04-06-dokumantasyon-ve-bilgi-metrikleri.md)

### Bölüm 5: Ürün ve İş Metrikleri
- [5.0 Giriş](konular/05-00-urun-ve-is-metrikleri.md)
- [5.1 Kaçan hata oranı ve kalite kaçakları](konular/05-01-kacan-hata-orani-ve-kalite-kacaklari.md)
- [5.2 Özellik benimsenmesi ve kullanım metrikleri](konular/05-02-ozellik-benimsenmesi-ve-kullanim-metrikleri.md)
- [5.3 Müşteri ve iş sonucu metrikleri](konular/05-03-musteri-ve-is-sonucu-metrikleri.md)
- [5.4 Mühendisliğin maliyeti ve birim ekonomisi](konular/05-04-muhendisligin-maliyeti-ve-birim-ekonomisi.md)
- [5.5 Mühendislik girişimlerinde yatırım getirisi](konular/05-05-muhendislik-girisimlerinde-yatirim-getirisi.md)

### Bölüm 6: Güvenilirlik, Operasyon ve Güvenlik Metrikleri
- [6.0 Giriş](konular/06-00-bolum-6ya-giris-guvenilirlik-operasyon-ve-guvenlik-metrikleri.md)
- [6.1 Hizmet seviyesi göstergeleri, hedefleri ve hata bütçeleri](konular/06-01-hizmet-seviyesi-gostergeleri-hedefleri-ve-hata-butceleri.md)
- [6.2 Olay metrikleri: tespit, müdahale ve toparlanma](konular/06-02-olay-metrikleri-tespit-mudahale-ve-toparlanma.md)
- [6.3 Nöbet, kapasite ve operasyonel yük metrikleri](konular/06-03-nobet-kapasite-ve-operasyonel-yuk-metrikleri.md)
- [6.4 Güvenlik ve açık yönetimi metrikleri](konular/06-04-guvenlik-ve-aciklik-yonetimi-metrikleri.md)

### Bölüm 7: Yapay Zekâ Çağında Metrikler
- [7.0 Giriş](konular/07-00-yapay-zeka-caginda-metrikler.md)
- [7.1 Üretken yapay zeka paradigma değişimi](konular/07-01-uretken-yapay-zeka-paradigma-degisimi.md)
- [7.2 Yapay zeka destekli yazılım geliştirmeyi ölçmek](konular/07-02-yapay-zeka-destekli-yazilim-gelistirmeyi-olcmek.md)
- [7.3 Metrik şişmesi ve kalite seyrelmesi riskleri](konular/07-03-metrik-sismesi-ve-kalite-seyrelmesi-riskleri.md)
- [7.4 Yeni kutup yıldızı olarak sonuç telemetrisi](konular/07-04-yeni-kutup-yildizi-olarak-sonuc-telemetrisi.md)

### Bölüm 8: Metrik Programı Oluşturmak
- [8.0 Giriş](konular/08-00-bolum-8-giris-metrik-programi-kurmak.md)
- [8.1 Mühendislik metrikleri panosu tasarlamak](konular/08-01-muhendislik-metrikleri-panosu-tasarlamak.md)
- [8.2 Araç ortamı: kendin yap ya da satın al](konular/08-02-arac-ortami-kendin-yap-ya-da-satin-al.md)
- [8.3 Korku yaratmadan metrikleri devreye almak](konular/08-03-korku-yaratmadan-metrikleri-devreye-almak.md)
- [8.4 Mühendislik metrik programları için olgunluk modeli](konular/08-04-muhendislik-metrik-programlari-icin-olgunluk-modeli.md)
- [8.5 Kademeli bir benimseme yol haritası](konular/08-05-kademeli-bir-benimseme-yol-haritasi.md)

### Bölüm 9: Ekler
- [9.0 Ekler](konular/09-00-ekler.md)
- [9.1 Sözlük](konular/09-01-sozluk.md)
- [9.2 Metrik tanımları ve formüller referansı](konular/09-02-metrik-tanimlari-ve-formuller-referansi.md)
- [9.3 Kontrol listeleri](konular/09-03-kontrol-listeleri.md)
- [9.4 Şablonlar](konular/09-04-sablonlar.md)
- [9.5 Olgunluk öz değerlendirmesi](konular/09-05-olgunluk-oz-degerlendirmesi.md)
- [9.6 Kaynaklar ve ileri okuma](konular/09-06-kaynaklar-ve-ileri-okuma.md)
- [9.7 Dizin](konular/09-07-dizin.md)

## Konular arası temalar

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) her konuyu
yönetir: hedefe dönüşen bir ölçü iyi bir ölçü olmaktan çıkar; bu yüzden buradaki her
metrik ailesi kendi manipülasyon vektörü ve korkuluğuyla birlikte gelir. Baştan sona
sonuçlara, çıktı ve etkinlikten daha fazla ağırlık verilir. Devlet ve kurumsal
raporlama yükümlülükleri sonradan akla gelen şeyler olarak değil, tasarım girdileri
olarak ele alınır; üretken yapay zekâya geçiş de panoya eklenen yeni bir sütun olarak
değil, bu metriklerin anlamını yeniden sorgulamak için bir neden olarak görülür.

## Konuların ötesinde

- **[Örnekler](ornekler/index.md):** kitabın fikirlerinin kullanımına dair küçük, somut örnekler.
- **[Proje hakkında](proje/index.md):** kitabın nasıl oluşturulduğu, denetlendiği ve yayımlandığı.
- **[Katkıda bulunma](katki/index.md):** nasıl yardım edilir ve üslup kuralları.
