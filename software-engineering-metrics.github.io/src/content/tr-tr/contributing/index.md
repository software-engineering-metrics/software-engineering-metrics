# Katkıda bulunma

Bu kitabı geliştirmeye yardım ettiğiniz için teşekkürler. Bir yazım hatasını
düzeltmekten yeni bir konu yazmaya kadar her boyuttaki katkı memnuniyetle karşılanır.

## Temel kurallar

Kitap sıkı bir üslup kurallarına uyar. Özetle:

- Em tire yok. Virgül, iki nokta üst üste, parantez ya da iki ayrı cümle kullanın.
- Kalıp ifadeler yok ("not only ... but also", "load-bearing" ve benzerleri).
- Sıcak, sade, doğrudan yazım. Okura "siz" diye hitap edin. Kısa cümleler.
- Terimleri ilk kullanımda tanımlayın. Önemli kavramları ilk anışta Wikipedia'ya
  bağlayın.
- Yalnızca gerçek kaynaklar.
- Her metrik ailesi konusu kendi manipülasyon vektörünü ve korkuluğunu adlandırır.

Tam kurallar deponun kökündeki `spec/conventions.md` dosyasındadır; kısa sürümü
[stil kuralları](style-rules.md) sayfasıdır. Testler mekanik kısımları denetler.

## Kurulum

Python 3 ve [just](https://github.com/casey/just) gerekir. Bu depo, kitabın içeriğini
ve belirtimini ve bunu yayımlanan web sitesine dönüştüren SvelteKit sitesini
(`software-engineering-metrics.github.io/`) barındırır.

```sh
just         # görevleri listele
just test    # doğrulama paketini çalıştır
just nav     # üretilen gezinme dosyalarını yeniden oluştur
just stats   # konu ve kelime sayıları
```

## Değişiklik yapmak

1. İlgili kılavuzu okuyun: konular için [yazım](authoring.md),
   üretilen dosyalar için [gezinme](navigation.md),
   testler için [testler](testing.md).
2. İşi gören en küçük değişikliği yapın.
3. Bir konu eklediyseniz, kaldırdıysanız, yeniden adlandırdıysanız ya da yeniden
   numaralandırdıysanız, deponun kökündeki `spec/structure.md` dosyasını güncelleyin
   ve `just nav` çalıştırın.
4. `just test` çalıştırın. Geçmesi gerekir.
5. [Değişiklik günlüğüne](../project/changelog.md) **Unreleased** altına tek satırlık bir kayıt ekleyin.

## Üzerinde çalışılabilecekler

- Hataları, belirsiz pasajları ya da eskimiş başvuruları düzeltin.
- Örnekleri, özellikle somut kurumsal ve kamu örneklerini geliştirin.
- Kaynakçaları gerçek kaynaklara karşı doğrulayın.
- Şablonu bozmadan bir konunun kapsamındaki boşlukları doldurun.

## Kaçınılacaklar

- Üretilen dosyaları elle düzenlemeyin (`README.md`, her yerelin `index.md`
  dosyası, `front-matter/table-of-contents.md` ve `topics/09-07-index.md`). Bunun
  yerine konuları değiştirin ve `just nav` çalıştırın.
- `en-001`, `en-gb` veya `en-us` dosyalarını doğrudan düzenlemeyin; bunlar
  `tools/localize.py` ile `en-gb-oxendict` kaynağından türetilir.
- `spec/structure.md` dosyasını da güncellemeden konu eklemeyin.
- Em tire ya da yasaklı ifadeler kullanmayın; testler başarısız olur.

## Sorun bildirmek

Sorunu, dosyayı ve konuyu, gerekiyorsa doğru kaynağı ya da başvuruyu tarif eden bir
issue açın. Küçük ve belirli bildirimlerin ele alınması en kolayıdır.
