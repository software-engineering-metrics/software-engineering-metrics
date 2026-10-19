# Navigasi: bagaimana berkas yang dihasilkan bekerja

Per lokal, empat artefak navigasi dihasilkan dari topik lokal itu, tidak ditulis
tangan (ditambah `README.md`, yang dihasilkan sekali untuk lokal rujukan,
`en-gb-oxendict`):

- `README.md` (daftar isi di beranda repositori; hanya lokal rujukan)
- `locales/<locale>/index.md` (beranda situs yang diterbitkan)
- `locales/<locale>/front-matter/table-of-contents.md`
- `locales/<locale>/topics/09-07-index.md` (indeks subjek, dengan tautan)

Semuanya dibuat oleh
[`tools/gen_nav.py`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/tools/gen_nav.py).
Jangan menyuntingnya secara manual, karena pembuatan berikutnya akan menimpa
perubahan Anda.

## Kapan membuat ulang

Jalankan `just nav` (atau `python3 tools/gen_nav.py`) setiap kali Anda:

- menambah, menghapus, mengganti nama, atau menomori ulang sebuah topik, atau
- mengubah judul `# N.M Title` sebuah topik (daftar isi memakainya).

Jalankan `python3 tools/localize.py` lebih dulu jika Anda mengubah apa pun di
bawah `locales/en-gb-oxendict/`, agar topik tiga lokal lainnya (dan judul yang
dihasilkannya) mutakhir sebelum `gen_nav.py` membacanya; lihat
[`spec/locales.md`](https://github.com/software-engineering-metrics/software-engineering-metrics/blob/main/spec/locales.md).

## Cara kerjanya

Untuk setiap lokal, `gen_nav.py` membaca setiap berkas `locales/<locale>/topics/*.md`,
mengurutkan menurut nomor desimal, mengelompokkan menurut bagian, dan:

- membangun daftar isi bagian demi bagian dari judul H1 setiap topik,
- menuliskannya ke `locales/<locale>/index.md` dan
  `locales/<locale>/front-matter/table-of-contents.md` (dan, hanya untuk lokal
  rujukan, `README.md`),
- memindai topik inti (Bagian 1 sampai 8) untuk daftar tetap istilah kunci dan
  menulis indeks subjek ke `locales/<locale>/topics/09-07-index.md`.

Teks pokok bersama (paragraf pengantar, "Cara membaca buku ini", "Tema lintas
bagian", dan judul bagian) dilokalkan dengan cara yang sama seperti prosa topik,
melalui fungsi lokal `tools/localize.py`, sehingga halaman yang dihasilkan
terbaca alami di setiap lokal.

Judul bagian tinggal di kamus `PART_TITLES` dekat bagian atas skrip. Pembangkit
memakai header bagian bergaya titik dua ("Part 2: Delivery and Flow Metrics"),
tidak pernah em-dash.

Untuk lokal yang diterjemahkan tangan, beranda dan halaman daftar isi ditulis
tangan (judul yang diterjemahkan dan baris pengantar N.0 setiap bagian), dan
`tools/gen_translated_nav.py` menyegarkan daftar topik dari judul H1 topik lokal
itu.

## Apa yang tidak disentuhnya

Spesifikasi di akar repositori (`spec/index.md`, `spec/structure.md`, dan
pendampingnya) adalah sumber kebenaran yang ditulis tangan. Pembangkit tidak
menulisnya, dan ia bukan bagian dari situs yang diterbitkan. Jika Anda mengubah
struktur, perbarui `spec/structure.md` sendiri, lalu jalankan `just nav` untuk
berkas turunan dan `just test` untuk memastikan semuanya selaras.
