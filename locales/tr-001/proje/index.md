# Proje hakkında

Kitabın proje belgeleri: nasıl bir araya getirildiği, nasıl derlenip denetlendiği ve
doğruluk kaynağının nerede durduğu. Kitabın kendisi için
[içindekiler](../index.md) sayfasına bakın.

## Projenin haritası

- **Kitap:** `locales/` altında dört yerelde yayımlanır; bkz.
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  `en-gb-oxendict/topics/` (63 dosya), `en-gb-oxendict/front-matter/` ve 9. Bölümdeki
  ekler elle yazılmış kaynaktır; `en-001`, `en-gb` ve `en-us` bundan türetilir.
- **Doğruluk kaynağı:** deponun kökündeki `spec/` (siteye yayımlanmaz). Yapı
  `spec/structure.md` içinde, yazım kuralları `spec/conventions.md` içinde, yazım
  biçimi `spec/oxford-spelling.md` içinde bildirilir. Geri kalan her şey bunlara
  uyacak biçimde oluşturulur.
- **Araçlar:** `tools/localize.py` diğer üç yereli türetir; `tools/gen_nav.py`
  gezinmeyi üretir; `tests/validate.py` belirtimi uygular; `justfile` bunları
  birbirine bağlar.
- **Katkıda bulunanlar için rehberlik:** deponun kökündeki
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  ve [katkı bölümündeki](../katki/index.md) kılavuzlar.

## Derleme ve denetim

Doğrulama paketi başka bağımlılık olmadan ve ağ erişimi olmadan Python 3 üzerinde
çalışır. Görevler [just](https://github.com/casey/just) üzerinden yürütülür.

```sh
just test    # yapıyı, üslubu, bağlantıları ve belirtim-disk uyumunu doğrula
just nav     # üretilen gezinme dosyalarını yeniden oluştur
just check   # önce nav, sonra test
just stats   # konu ve kelime sayıları
```

Bu depo kitabın içeriğini ve belirtimini barındırır. Bir web sitesine dönüştürme işi
ayrı bir
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io)
deposunda yapılır.

## Belirtime dayalı geliştirme burada nasıl işler

Önce belirtim gelir. `spec/structure.md` hangi konuların var olduğunu ve nasıl
numaralandırıldığını söyler. `spec/conventions.md` nasıl yazılmaları gerektiğini
söyler. Konular ikisini de karşılayacak biçimde yazılır. `tools/gen_nav.py`
gezinmeyi konulardan türetir ve `tests/validate.py` sonucu yeniden belirtime karşı
denetler. Konular ve belirtim herhangi bir zamanda uyuşmazsa testler başarısız olur;
bu, ikisini yeniden uyumlu hâle getirme işaretidir.

Bu, sapmayı dışarıda tutar: bir değişiklik yalnızca belirtim, konular, üretilen
gezinme ve testler hemfikir olduğunda "tamamlanmış" sayılır.

## Bilinmesinde yarar olan tasarım kararları

- **Düz, ondalık numaralı konular.** Dosyalar
  `locales/<locale>/topics/PP-CC-slug.md` biçimindedir; her yerelde aynı slug.
  Bölüm bir tam sayıdır; konu ondalıktır; N.0 bölüm girişidir. Bu, sabit
  tanımlayıcıları korur ve araçların dizin ağacı olmadan sıralayıp gruplamasına olanak
  verir.
- **Bir elle yazılan yerel, üç türetilmiş.** `en-gb-oxendict`, çoğu uluslararası
  standart kuruluşunun üslubu olan Oxford yazımıdır (bkz. `spec/oxford-spelling.md`);
  `en-001`, `en-gb` ve `en-us` ondan mekanik olarak türetilir, böylece çeviri
  kaynaktan hiç sapmaz.
- **Üretilen gezinme.** İçindekiler, içerik sayfası ve konu dizini üretilir; bu
  yüzden konulardan hiç sapmazlar.
- **Çevrimdışı, bağımlılıksız testler.** Paket yalnızca standart kütüphaneyi
  kullanır; bu yüzden CI ve commit öncesi kancalar dahil her yerde çalışır.
- **Çapraz başvurular düz metin kalır.** Düz yazı, belirtimin gerektirdiği gibi
  konulara ondalık numarayla başvurur ("bkz. 2.1 konusu"); bu başvuruları bağlantıya
  dönüştürmek işleme sitesinin sorumluluğundadır.
- **Em tire yok, kuralla ve testle.** Kitap büyürken doğru kalması için
  uygulanan, bilinçli bir üslup tercihi.
- **Her metrik ailesi kendi manipülasyon vektörünü adlandırır.** Bu, şablonda kardeş
  `software-engineering-guide` projesinde karşılığı olmayan tek kuraldır: kitabın tüm
  konusu ölçüm olduğundan, ölçümün kendi riski örtük değil, birinci sınıf olmak
  zorundadır.

## İleri okuma

- [Yazım](../katki/yazim-konulari-yazma-ve-duzenleme.md) : konuları yazma ve düzenleme.
- [Gezinme](../katki/gezinme-uretilen-dosyalar-nasil-calisir.md) : üretilen dosyalar nasıl çalışır.
- [Testler](../katki/testler-dogrulama-paketi.md) : testler neyi denetler ve hatalar nasıl giderilir.
- [Örnekler](../ornekler/index.md) : küçük, somut örnekler.
- [Değişiklik günlüğü](degisiklik-gunlugu.md) : önemli değişikliklerin tarihçesi.
