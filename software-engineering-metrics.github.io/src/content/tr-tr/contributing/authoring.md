# Yazım: konuları yazma ve düzenleme

## Yazmadan önce

- [Stil kurallarını](style-rules.md) ve deponun kökündeki `spec/conventions.md`
  dosyasını okuyun.
- Konunun nereye oturduğunu ve hangi numarayı alması gerektiğini görmek için
  deponun kökündeki `spec/structure.md` dosyasına bakın.

## Yeni bir konu yazmak

1. Bölümü ve o bölümdeki sıradaki boş ondalık numarayı seçin. Numaralandırma
   süreklidir; yeni bir konu genellikle bölümündeki son konudan sonraki numarayı alır.
2. [Konu şablonundan](chapter-template.md) yola çıkarak
   `locales/en-gb-oxendict/topics/PP-CC-slug.md` dosyasını oluşturun (sıfırla
   doldurulmuş, tire ile ayrılmış önek; örneğin `02-01-...`). Oxford yazımıyla yazın
   (bkz. `spec/oxford-spelling.md`); diğer üç yereli asla doğrudan düzenlemeyin.
3. Şablona uygun yazın. Her içerik konusu tüm bölümlerine ihtiyaç duyar: genel
   bakış, temel ilkeler, öneriler, ödünleşimler (bir tabloyla), tartışma soruları,
   sektörel bakış (girişim, küçük işletme, kurumsal, kamu), örnekler (biri kurumsal,
   biri kamu), iş gerekçesi, anti-desenler, beş düzeyli bir olgunluk modeli,
   tartışma önerileri, temel çıkarımlar ve kaynaklar.
4. Manipülasyon vektörünü adlandırın. Her metrik ailesi şu soruya açık bir yanıt
   ister: "Bir ekip, ölçtüğü şeyi iyileştirmeden bu sayıyı nasıl iyi gösterir ve
   hangi korkuluk bunu yakalar" (bkz. 1.2 konusu).
5. Terimleri ilk kullanımda tanımlayın. Önemli kavramlara ilk anışta, yalnızca düz
   yazıda, Wikipedia bağlantıları ekleyin.
6. İlgili konulara ondalık numarayla çapraz başvuru yapın; örneğin "(2.1 konusu)."
7. Konuyu `spec/structure.md` dosyasına ekleyin.
8. Bölüm girişi (N.0) konularını listeliyorsa, oraya bir madde ekleyin.
9. Konuyu `en-001`, `en-gb` ve `en-us` yereline türetmek için
   `python3 tools/localize.py` çalıştırın.
10. `just nav`, ardından `just test` çalıştırın.

## Var olan bir konuyu düzenlemek

- Bölüm sırasını ve başlıklarını bozmayın. Testler, içerik konularının hâlâ tüm
  gerekli bölümlere sahip olduğunu denetler.
- Düzenleme özellikle bunlarla ilgili değilse, satır içi tanımları, Wikipedia
  bağlantılarını, tabloları ve kaynak listesini koruyun.
- Em tire ya da yasaklı ifadeler kullanmayın. Cümleyi yeniden kuruyorsanız tire
  koymak yerine yeniden ifade edin.
- Sonrasında, düzenlenen `en-gb-oxendict` kaynağından `en-001`, `en-gb` ve `en-us`
  yerelini yeniden türetmek için `python3 tools/localize.py` çalıştırın.

## Yeniden adlandırma ya da yeniden numaralandırma

- Dosyayı `locales/en-gb-oxendict/` içinde yeniden adlandırın, `# N.M Başlık`
  başlığını güncelleyin, `spec/structure.md` dosyasını güncelleyin ve eski numaraya
  işaret eden her çapraz başvuruyu güncelleyin.
- Dosyayı diğer üç yerelde de yeniden adlandırmak için `python3 tools/localize.py`
  çalıştırın (dördünü de aynı göreli yollardan türetir).
- `just nav` ve `just test` çalıştırın. Testler H1 ile dosya adı arasındaki uyumsuzluğu,
  numaralandırma boşluğunu, kaynaktan sapmış bir yereli ya da kırık bir bağlantıyı
  işaretler.

## Üslup hatırlatması

Okurun başarılı olmasını isteyen deneyimli bir iş arkadaşı gibi yazın. Sıcak, sade,
doğrudan ve yararlı. Kısa cümleler. Dolgu yok.
