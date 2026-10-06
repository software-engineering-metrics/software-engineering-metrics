# Tentang proyek ini

Dokumentasi proyek untuk buku ini: bagaimana ia disusun, bagaimana membangun dan
memeriksanya, dan di mana sumber kebenaran berada. Untuk bukunya sendiri, lihat
[daftar isi](../index.md).

## Peta proyek

- **Buku:** diterbitkan dalam empat lokal di bawah `locales/`; lihat
  [spec/locales.md](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).
  Lokal ini, `en-gb-oxendict/topics/` (63 berkas), `en-gb-oxendict/front-matter/`,
  dan lampiran di Bagian 9 adalah sumber yang ditulis tangan; `en-001`,
  `en-gb`, dan `en-us` diturunkan darinya.
- **Sumber kebenaran:** `spec/` di akar repositori (tidak diterbitkan ke situs).
  Strukturnya dinyatakan di `spec/structure.md`, aturan penulisan di
  `spec/conventions.md`, dan ejaan di `spec/oxford-spelling.md`. Semua yang lain
  dibangun agar cocok.
- **Perkakas:** `tools/localize.py` menurunkan tiga lokal lainnya;
  `tools/gen_nav.py` menghasilkan navigasi; `tests/validate.py` menegakkan
  spesifikasi; `justfile` menghubungkan semuanya.
- **Panduan kontributor:**
  [`AGENTS.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/AGENTS.md)
  di akar repositori, dan panduan di
  [bagian kontribusi](../kontribusi/ikhtisar.md).

## Membangun dan memeriksa

Rangkaian validasi berjalan di Python 3 tanpa dependensi lain dan tanpa akses
jaringan. Tugas dijalankan melalui [just](https://github.com/casey/just).

```sh
just test    # validate structure, style, links, and spec-vs-disk
just nav     # regenerate the generated navigation files
just check   # nav, then test
just stats   # topic and word counts
```

Repositori ini menyimpan isi dan spesifikasi buku. Ia dirender menjadi situs web
oleh repositori terpisah
[`software-engineering-metrics.github.io`](https://github.com/software-engineering-metrics/software-engineering-metrics.github.io).

## Bagaimana pengembangan berbasis spesifikasi bekerja di sini

Spesifikasi didahulukan. `spec/structure.md` menyatakan topik apa yang ada dan
bagaimana ia dinomori. `spec/conventions.md` menyatakan bagaimana topik harus
ditulis. Topik-topik dikarang untuk memenuhi keduanya. `tools/gen_nav.py`
menurunkan navigasi dari topik, dan `tests/validate.py` memeriksa hasilnya
kembali terhadap spesifikasi. Jika topik dan spesifikasi pernah berselisih,
pengujian gagal, yang merupakan sinyal untuk menyelaraskannya kembali.

Ini menjaga penyimpangan tetap di luar: sebuah perubahan baru "selesai" ketika
spesifikasi, topik, navigasi yang dihasilkan, dan pengujian semuanya sepakat.

## Keputusan desain yang layak diketahui

- **Topik datar bernomor desimal.** Berkas adalah
  `locales/<locale>/topics/PP-CC-slug.md`, slug yang sama di setiap lokal. Bagian
  adalah bilangan bulat; topik adalah desimal; N.0 adalah pengantar bagian. Ini
  menjaga pengenal tetap stabil dan memungkinkan perkakas mengurutkan dan
  mengelompokkan tanpa pohon direktori.
- **Satu lokal ditulis tangan, tiga diturunkan.** `en-gb-oxendict` adalah ejaan
  Oxford, gaya rumah sebagian besar badan standar internasional (lihat
  `spec/oxford-spelling.md`); `en-001`, `en-gb`, dan `en-us` diturunkan secara
  mekanis darinya, sehingga terjemahan tidak pernah menyimpang dari sumber.
- **Navigasi yang dihasilkan.** Daftar isi, halaman isi, dan indeks subjek
  dihasilkan, sehingga tidak pernah menyimpang dari topik.
- **Pengujian luring tanpa dependensi.** Rangkaian hanya memakai pustaka standar
  sehingga berjalan di mana saja, termasuk CI dan pre-commit hook.
- **Referensi silang tetap teks biasa.** Prosa merujuk topik dengan nomor desimal
  ("lihat topik 2.1"), seperti yang disyaratkan spesifikasi; situs perender
  bertanggung jawab mengubah rujukan itu menjadi tautan.
- **Tanpa em-dash, menurut aturan dan menurut uji.** Pilihan gaya yang
  disengaja, ditegakkan agar tetap benar seiring bertambahnya buku.
- **Setiap keluarga metrik menyebut jalur manipulasinya sendiri.** Ini satu-
  satunya aturan dalam templat yang tidak punya padanan di proyek saudara
  `software-engineering-guide`: ia ada karena seluruh pokok bahasan buku ini
  adalah pengukuran, sehingga risiko pengukuran itu sendiri harus menjadi
  kelas satu, bukan implisit.

## Bacaan lanjutan

- [Penulisan](../kontribusi/penulisan.md) : menulis dan menyunting topik.
- [Navigasi](../kontribusi/navigasi.md) : bagaimana berkas yang dihasilkan bekerja.
- [Pengujian](../kontribusi/pengujian.md) : apa yang diperiksa pengujian dan cara memperbaiki kegagalan.
- [Contoh](../contoh/ikhtisar.md) : contoh kecil dan konkret.
- [Catatan perubahan](catatan-perubahan.md) : sejarah perubahan penting.
