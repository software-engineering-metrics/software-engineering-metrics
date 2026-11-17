# Aturan gaya (bersama, dapat ditegakkan)

Gaya rumah di satu tempat. Butir yang ditandai "(test)" ditegakkan oleh
`tests/validate.py`; pelanggaran menggagalkan build. Versi naratif lengkapnya
adalah `spec/conventions.md` di akar repositori.

## Aturan keras

- **Tanpa em-dash.** Jangan pernah memakai "—" (U+2014). Gunakan koma, titik dua,
  tanda kurung, atau dua kalimat. En-dash "–" hanya diizinkan dalam rentang
  angka seperti `1–9` atau `2.1–2.8`. (test)
- **Tanpa ungkapan klise.** Jangan gunakan "not only ... but also", "but also",
  atau "load-bearing". Hindari "It's important to note", "In today's fast-paced
  world", "It's crucial to consider", "It appears that", "One could argue", dan
  rumus "it's not just X, it's Y". (test, untuk tiga yang pertama)
- **Definisikan istilah pada penggunaan pertama.** Uraikan akronim dan
  definisikan jargon pertama kali setiap topik memakainya, misalnya "mean time
  to recovery (MTTR)."
- **Tautkan konsep kunci ke Wikipedia** pada sebutan pertama, sekali per topik,
  hanya dalam prosa. Bentuk: `[term](https://en.wikipedia.org/wiki/Article_Title)`.
  Tidak pernah di judul, tabel, kode, atau bagian rujukan. (bentuk tautan adalah
  test)
- **Hanya rujukan yang nyata.** Penulis dan judul karya sungguhan. Tanpa judul,
  penulis, atau URL karangan.
- **Sebutkan jalur manipulasi.** Topik keluarga metrik menyatakan bagaimana
  metrik dimanipulasi dan pengaman apa yang menangkapnya (topik 1.2).

## Suara

- Hangat, langsung, menyemangati. Sapa pembaca dengan "Anda." Kalimat pendek,
  kata sederhana. Mulai dari intinya.
- Berpendirian dan praktis. Netral terhadap vendor. Sebut produk hanya sebagai
  contoh faktual.

## Struktur (test)

- Topik isi memakai urutan bagian persis seperti di
  [`chapter-template.md`](templat-topik.md).
- Judul pertama adalah `# N.M Title` (nomor topik bertitik), dan cocok dengan
  awalan `PP-CC` yang diisi nol pada berkas.
- Penomoran di dalam setiap bagian berkesinambungan dan dimulai dari N.0.

## Setelah menyunting

- Jika Anda mengubah himpunan topik, perbarui `spec/structure.md` dan jalankan
  `just nav`.
- Selalu jalankan `just test`.
