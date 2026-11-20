# Gezinme: üretilen dosyalar nasıl çalışır

Her yerel için dört gezinme çıktısı elle yazılmaz, o yerelin konularından üretilir
(artı referans yerel `en-gb-oxendict` için bir kez üretilen `README.md`):

- `README.md` (depo ana sayfasındaki içindekiler; yalnızca referans yerel)
- `locales/<locale>/index.md` (yayımlanan sitenin ana sayfası)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (bağlantılı konu dizini)

Bunlar
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py)
ile üretilir. Elle düzenlemeyin; bir sonraki üretim değişikliğinizin üzerine yazar.

## Ne zaman yeniden üretilir

Şunlardan birini yaptığınızda `just nav` (ya da `python3 tools/gen_nav.py`)
çalıştırın:

- bir konuyu eklediğinizde, kaldırdığınızda, yeniden adlandırdığınızda ya da yeniden
  numaralandırdığınızda veya
- bir konunun `# N.M Başlık` başlığını değiştirdiğinizde (içindekiler bunu kullanır).

`locales/en-gb-oxendict/` altında bir şey değiştirdiyseniz önce
`python3 tools/localize.py` çalıştırın; böylece diğer üç yerelin konuları (ve üretilen
başlıkları), `gen_nav.py` onları okumadan önce güncel olur; bkz.
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Nasıl çalışır

Her yerel için `gen_nav.py`, `locales/<locale>/topics/*.md` dosyalarının hepsini
okur, ondalık numaraya göre sıralar, bölümlere göre gruplar ve şunları yapar:

- her konunun H1 başlığından bölüm bölüm içindekileri oluşturur,
- bunu `locales/<locale>/index.md` ve
  `locales/<locale>/front-matter/table-of-contents.md` dosyalarına (yalnızca referans
  yerel için ayrıca `README.md` dosyasına) yazar,
- esaslı konuları (1. ile 8. Bölümler) sabit bir anahtar terim listesi için tarar ve
  konu dizinini `locales/<locale>/topics/09-07-index.md` dosyasına yazar.

Ortak şablon metni (giriş paragrafı, "Bu kitap nasıl okunur", "Konular arası
temalar" ve bölüm başlıkları), konu metniyle aynı biçimde, `tools/localize.py`
yerelleştirme işlevleriyle yerelleştirilir; böylece üretilen sayfalar her yerelde
doğal okunur.

Bölüm başlıkları, betiğin başına yakın `PART_TITLES` sözlüğündedir. Üretici, em tire
yerine iki nokta üst üste biçimli bölüm başlıkları ("Part 2: Delivery and Flow
Metrics") kullanır.

## Dokunmadıkları

Deponun kökündeki belirtim (`spec/index.md`, `spec/structure.md` ve yardımcıları)
elle yazılmış doğruluk kaynağıdır. Üretici onu yazmaz ve yayımlanan sitenin parçası
değildir. Yapıyı değiştirirseniz `spec/structure.md` dosyasını kendiniz güncelleyin,
ardından türetilmiş dosyalar için `just nav`, her şeyin uyumlu olduğunu doğrulamak için
`just test` çalıştırın.
