# Testler: doğrulama paketi

## Çalıştırma

```sh
just test
# ya da
python3 tests/validate.py
```

Her yerden çalışır ve yalnızca Python 3 gerektirir (üçüncü taraf paket ya da ağ
yok). Her denetim için bir satır yazdırır ve herhangi biri başarısız olursa sıfırdan
farklı koduyla çıkar; böylece CI'da ve commit öncesi kanca olarak çalışır.

## Neleri denetler

- **Beklenen konu sayısı** (betiğin başındaki sabit).
- Her bölüm içinde, N.0 ile başlayan **sürekli numaralandırma**.
- Her konu için **H1'in dosya adındaki ondalıkla eşleşmesi**.
- **H1 başlıklarının `spec/structure.md` ile eşleşmesi**, yalnızca baştaki ondalık
  değil, karakter karakter.
- **Gerekli bölümlerin** her içerik konusunda (1. ile 8. Bölümler, N.1 ve sonrası),
  **tam olarak şablon sırasında** bulunması.
- Her içerik konusu için **asgari kelime sayısı** (1.500 kelime); bilinçli
  istisnalar için betikte bir izin listesi vardır.
- Her Markdown dosyasında **em tire olmaması**.
- **En tirelerin yalnızca rakamlar arasında olması**; yani "2.1–2.8" geçer, gerisi
  geçmez.
- **Yasaklı ifadelerin olmaması** ("not only", "but also", "load-bearing").
- **Tüm iç `.md` bağlantılarının çözülmesi.**
- **Düz yazıdaki çapraz başvuruların gerçek konulara işaret etmesi**: diskte karşılığı
  olmayan bir konu numarasına başvuru, yayımlanan sitenin konu bağlantılarını
  otomatik oluşturduğu aynı başvuru kalıbıyla başarısız olur.
- **Wikipedia bağlantılarının doğru biçimde olması**
  (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` dosyasının diskteki dosyalarla**, iki yönde de eşleşmesi.
- **README, ana sayfa ve içindekiler sayfasının her konuya bağlantı vermesi.**

## Bir denetim başarısız olduğunda

Başarısız satır dosyayı ve sorunu adlandırır. Yaygın çözümler:

- Em tire bulundu: cümleyi em tire ortadan kalkacak şekilde yeniden kurun. Yalnızca silmeyin.
- Eksik bölüm: konu şablonundan eksik `##` bölümünü ekleyin.
- Yapı uyuşmazlığı: `spec/structure.md` dosyasını güncellemeden bir konu eklediniz ya
  da yeniden adlandırdınız, ya da tersi. İkisini yeniden uyumlu hâle getirin.
- Kırık bağlantı: yolu düzeltin ya da yeniden adlandırmadan sonra güncelleyin.
- Numaralandırma boşluğu: bölümün N.0'dan itibaren sürekli olması için yeniden
  numaralandırın.

## Doğrulama paketinin ötesinde

- `just spell`, depo üzerinde [codespell](https://github.com/codespell-project/codespell)
  çalıştırır. Yapılandırma, yanlış pozitifleri yok sayma listesi dahil,
  `pyproject.toml` içindeki `[tool.codespell]` bölümündedir.
- `just stats`, `tools/stats.py` ile bir Markdown raporu yazdırır (konu başına kelime
  sayıları, ince konular, Wikipedia bağlantıları, kaynak girdileri).

## Sürekli entegrasyon

- `.github/workflows/test.yml`, her pull request'te ve main dışı dallara yapılan
  push'larda çalışır: doğrulama paketi ve codespell. Bu depo bir site derlemez ya da
  dağıtmaz; işleme ayrı `software-engineering-metrics.github.io` deposunda yapılır.
- `.github/workflows/links.yml`, harici bağlantıları haftalık olarak
  [lychee](https://github.com/lycheeverse/lychee) ile denetler (yok sayma kalıpları
  `.lycheeignore` içinde) ve sonuçları tek bir "Link checker report" issue'sunda
  tutar. Harici bağlantılar bilerek PR yolunun dışında tutulur.

## Testlerin kapsamadığı şeyler

Paket yapıyı ve üslubu denetler, doğruluğu değil. Bir kaynağın gerçek olup olmadığını
ya da metnin doğru olup olmadığını söyleyemez. Kaynakçaları ve olguları elle ya da bir
araştırma turuyla doğrulayın. Wikipedia bağlantısının var olması (biçiminin aksine) da
bir ağ denetimi gerektirir; paket bunu çevrimdışı çalışabilmesi için bilerek dışarıda
bırakır.
