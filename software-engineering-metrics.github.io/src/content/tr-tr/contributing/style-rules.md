# Stil kuralları (ortak, zorunlu)

Üslup kurallarının tek yerde toplanmış hâli. "(test)" ile işaretli maddeler
`tests/validate.py` tarafından denetlenir; ihlal yapıyı bozar. Tam anlatımlı sürüm,
deponun kökündeki `spec/conventions.md` dosyasıdır.

## Sert kurallar

- **Em tire yok.** U+2014 em tire karakterini asla kullanmayın. Virgül, iki nokta üst
  üste, parantez ya da iki ayrı cümle kullanın. En tire "–" yalnızca `1–9` veya
  `2.1–2.8` gibi sayı aralıklarında serbesttir. (test)
- **Kalıp ifade yok.** "not only ... but also", "but also" ya da "load-bearing"
  kullanmayın. "It's important to note", "In today's fast-paced world",
  "It's crucial to consider", "It appears that", "One could argue" ve "it's not just
  X, it's Y" kalıbından kaçının. (ilk üçü için test)
- **Terimleri ilk kullanımda tanımlayın.** Kısaltmaları açın ve jargonu her konuda
  ilk kullanıldığında tanımlayın; örneğin "ortalama kurtarma süresi (MTTR)."
- **Önemli kavramları Wikipedia'ya bağlayın**: ilk anışta, konu başına bir kez,
  yalnızca düz yazıda. Biçim: `[terim](https://en.wikipedia.org/wiki/Article_Title)`.
  Başlıklarda, tablolarda, kodda ya da kaynaklar bölümünde asla. (bağlantı biçimi
  testtir)
- **Yalnızca gerçek kaynaklar.** Gerçek eserlerin yazarı ve başlığı. Uydurma başlık,
  yazar ya da URL yok.
- **Manipülasyon vektörünü adlandırın.** Bir metrik ailesi konusu, metriğin nasıl
  manipüle edildiğini ve hangi korkuluğun bunu yakaladığını belirtir (1.2 konusu).

## Ses

- Sıcak, doğrudan, cesaretlendirici. Okura "siz" diye hitap edin. Kısa cümleler, sade
  sözcükler. Konuya girişle başlayın.
- Görüşlü ve pratik. Satıcıdan bağımsız. Ürün adlarını yalnızca olgusal örnek olarak
  anın.

## Yapı (test)

- İçerik konuları, [`konu-sablonu.md`](chapter-template.md) dosyasındaki tam bölüm
  sırasını kullanır.
- İlk başlık `# N.M Başlık` biçimindedir (ondalık konu numarası) ve dosyanın sıfırla
  doldurulmuş `PP-CC` önekiyle eşleşir.
- Her bölüm içindeki numaralandırma süreklidir ve N.0 ile başlar.

## Düzenlemeden sonra

- Konu kümesini değiştirdiyseniz `spec/structure.md` dosyasını güncelleyin ve
  `just nav` çalıştırın.
- Her zaman `just test` çalıştırın.
