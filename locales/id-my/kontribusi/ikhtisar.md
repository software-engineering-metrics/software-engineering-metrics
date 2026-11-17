# Kontribusi

Terima kasih telah membantu memperbaiki buku ini. Kontribusi dari segala ukuran
disambut, dari memperbaiki salah ketik hingga menulis topik baru.

## Aturan dasar

Buku ini mengikuti gaya rumah yang ketat. Intinya:

- Tanpa em-dash. Gunakan koma, titik dua, tanda kurung, atau dua kalimat.
- Tanpa ungkapan klise ("not only ... but also", "load-bearing", dan yang
  serupa).
- Tulisan yang hangat, sederhana, langsung. Sapa pembaca dengan "Anda."
  Kalimat pendek.
- Definisikan istilah pada penggunaan pertama. Tautkan konsep kunci ke Wikipedia
  pada sebutan pertama.
- Hanya rujukan yang nyata.
- Setiap topik keluarga metrik menyebut jalur manipulasi dan pengamannya.

Aturan lengkap ada di `spec/conventions.md` di akar repositori, dan versi
singkatnya adalah [aturan gaya](aturan-gaya.md). Pengujian menegakkan bagian
mekanisnya.

## Persiapan

Anda membutuhkan Python 3 dan [just](https://github.com/casey/just). Repositori
ini menyimpan isi dan spesifikasi buku, ditambah situs SvelteKit
(`software-engineering-metrics.github.io/`) yang merendernya menjadi situs web
yang diterbitkan.

```sh
just         # list tasks
just test    # run the validation suite
just nav     # regenerate the generated navigation files
just stats   # topic and word counts
```

## Membuat perubahan

1. Baca panduan yang relevan: [penulisan](penulisan.md) untuk topik,
   [navigasi](navigasi.md) untuk berkas yang dihasilkan, [pengujian](pengujian.md)
   untuk pengujian.
2. Buat perubahan terkecil yang menyelesaikan pekerjaan.
3. Jika Anda menambah, menghapus, mengganti nama, atau menomori ulang sebuah
   topik, perbarui `spec/structure.md` di akar repositori dan jalankan
   `just nav`.
4. Jalankan `just test`. Harus lulus.
5. Tambahkan satu baris entri ke [catatan perubahan](../proyek/catatan-perubahan.md) di
   bawah **Unreleased**.

## Apa yang bisa dikerjakan

- Perbaiki kesalahan, bagian yang tidak jelas, atau rujukan yang usang.
- Perbaiki contoh, terutama contoh perusahaan dan pemerintah yang konkret.
- Verifikasi kutipan terhadap sumber yang nyata.
- Isi celah dalam cakupan sebuah topik tanpa merusak templat.

## Apa yang harus dihindari

- Jangan menyunting berkas yang dihasilkan secara manual (`README.md`, `index.md`
  setiap lokal, `front-matter/table-of-contents.md`, dan `topics/09-07-index.md`).
  Ubah topiknya dan jalankan `just nav` sebagai gantinya.
- Jangan menyunting `en-001`, `en-gb`, atau `en-us` secara langsung; ketiganya
  diturunkan dari `en-gb-oxendict` oleh `tools/localize.py`.
- Jangan menambah topik tanpa juga memperbarui `spec/structure.md`.
- Jangan memasukkan em-dash atau ungkapan terlarang; pengujian akan gagal.

## Melaporkan masalah

Buka isu yang menjelaskan masalahnya, berkas dan topiknya, dan, bila relevan,
sumber atau rujukan yang benar. Laporan kecil dan spesifik adalah yang paling
mudah ditindaklanjuti.
