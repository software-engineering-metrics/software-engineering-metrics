# Contoh: spesifikasi dasbor untuk dasbor metrik pengiriman

Spesifikasi dasbor yang diuraikan, mengikuti
[topik 8.1, Merancang dasbor metrik rekayasa](../chapters/08-01-merancang-dasbor-metrik-rekayasa.md).
Intinya adalah bentuknya: audiens yang disebutkan, sejumlah kecil ubin, standar
visualisasi yang jujur, dan irama penyegaran yang dinyatakan.

## Audiens

Kepemimpinan rekayasa dan tim platform, ditinjau pada tinjauan pengiriman dua
mingguan. Tidak dimaksudkan untuk penilaian kinerja individu.

## Ubin (dalam urutan tampilan)

1. **Frekuensi deployment**, 4 minggu terakhir, per tim. Bagan garis, wadah
   mingguan, sumbu dimulai dari nol.
2. **Lead time untuk perubahan**, median dan persentil ke-90, 4 minggu terakhir.
   Bagan batang dengan kedua seri ditampilkan, bukan hanya median.
3. **Tingkat kegagalan perubahan**, 4 minggu terakhir, dengan definisi
   "kegagalan" yang disepakati tim ditautkan dari ubin.
4. **Waktu pemulihan dari deployment yang gagal**, median, 4 minggu terakhir.
5. **Anggaran galat yang tersisa**, kuartal berjalan, per layanan, sebagai
   persentase.

## Aturan visualisasi

- Setiap bagan tren menampilkan setidaknya delapan titik data, tidak pernah satu
  cuplikan.
- Sumbu dimulai dari nol kecuali pengecualian yang dinyatakan didokumentasikan
  pada ubin.
- Deploy, insiden, dan hari libur dianotasi pada lini masa agar pembaca dapat
  membedakan pergeseran nyata dari derau.
- Tanpa sumbu ganda, tanpa efek 3-D, tanpa rentang tanggal yang dipilih-pilih.

## Irama penyegaran

Ubin bersumber pipeline (frekuensi deployment, lead time) disegarkan setiap
jam. Ubin bersumber insiden (tingkat kegagalan perubahan, waktu pemulihan)
disegarkan saat postmortem ditutup. Dasbor menyatakan waktu penyegaran
terakhirnya sendiri.

## Apa yang sengaja dikecualikan dasbor ini

Jumlah commit individu, jumlah pull request individu, dan baris kode. Ini adalah
metrik aktivitas dengan sejarah yang terdokumentasi baik tentang dimanipulasi
dan tentang mengukur usaha, bukan hasil (topik 3.4).
