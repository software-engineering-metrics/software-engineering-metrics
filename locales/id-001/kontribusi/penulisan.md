# Penulisan: menulis dan menyunting topik

## Sebelum Anda menulis

- Baca [aturan gaya](aturan-gaya.md) dan `spec/conventions.md` di akar
  repositori.
- Periksa `spec/structure.md` di akar repositori untuk melihat di mana topik itu
  cocok dan nomor apa yang seharusnya ia miliki.

## Menulis topik baru

1. Pilih bagian dan nomor desimal kosong berikutnya di bagian itu. Penomoran
   berkesinambungan, jadi topik baru biasanya mengambil nomor setelah yang
   terakhir di bagiannya.
2. Buat `locales/en-gb-oxendict/topics/PP-CC-slug.md` (awalan yang diisi nol dan
   dipisah tanda hubung, misalnya `02-01-...`) dari
   [templat topik](templat-topik.md). Tulis dalam ejaan Oxford (lihat
   `spec/oxford-spelling.md`); jangan pernah menyunting tiga lokal lainnya secara
   langsung.
3. Tulis sesuai templat. Setiap topik isi membutuhkan semua bagiannya: ikhtisar,
   prinsip kunci, rekomendasi, pertukaran (dengan tabel), pertanyaan diskusi,
   lensa sektor (startup, usaha kecil, perusahaan, pemerintah), contoh (satu
   perusahaan dan satu pemerintah), kasus bisnis, anti-pola, model kematangan
   lima tingkat, gagasan diskusi, poin penting, dan rujukan.
4. Sebutkan jalur manipulasi. Setiap keluarga metrik membutuhkan jawaban
   eksplisit atas "bagaimana tim membuat angka ini tampak baik tanpa
   memperbaiki apa yang diukurnya, dan pengaman apa yang menangkapnya" (lihat
   topik 1.2).
5. Definisikan istilah pada penggunaan pertama. Tambahkan tautan Wikipedia untuk
   konsep kunci pada sebutan pertama, hanya dalam prosa.
6. Rujuk silang topik terkait dengan nomor desimal, misalnya "(topik 2.1)."
7. Tambahkan topik ke `spec/structure.md`.
8. Jika pengantar bagian (N.0) mendaftar topiknya, tambahkan butir di sana.
9. Jalankan `python3 tools/localize.py` untuk menurunkan topik ke `en-001`,
   `en-gb`, dan `en-us`.
10. Jalankan `just nav`, lalu `just test`.

## Menyunting topik yang ada

- Pertahankan urutan bagian dan judul. Pengujian memeriksa bahwa topik isi masih
  memiliki setiap bagian yang diperlukan.
- Pertahankan definisi sebaris, tautan Wikipedia, tabel, dan daftar rujukan
  kecuali penyuntingan itu memang tentang hal-hal tersebut.
- Jangan memasukkan em-dash atau ungkapan terlarang. Jika Anda menyusun ulang,
  tulis ulang alih-alih menyelipkan tanda pisah.
- Jalankan `python3 tools/localize.py` setelahnya untuk menurunkan ulang
  `en-001`, `en-gb`, dan `en-us` dari sumber `en-gb-oxendict` yang telah
  disunting.

## Mengganti nama atau menomori ulang

- Ganti nama berkas di `locales/en-gb-oxendict/`, perbarui judul `# N.M Title`,
  perbarui `spec/structure.md`, dan perbarui setiap rujukan silang yang menunjuk
  ke nomor lama.
- Jalankan `python3 tools/localize.py` untuk mengganti nama berkas di tiga lokal
  lainnya juga (ia menurunkan keempatnya dari jalur relatif yang sama).
- Jalankan `just nav` dan `just test`. Pengujian akan menandai ketidakcocokan
  antara H1 dan nama berkas, celah penomoran, lokal yang menyimpang dari sumber,
  atau tautan rusak.

## Pengingat nada

Tulislah seperti rekan berpengalaman yang ingin pembacanya berhasil. Hangat,
sederhana, langsung, dan berguna. Kalimat pendek. Tanpa pengisi.
