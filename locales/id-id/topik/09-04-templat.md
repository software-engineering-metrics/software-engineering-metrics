# 9.4 Templat

Templat salin-tempel untuk dokumen yang berulang. Contoh lengkap yang sudah
terisi untuk dua templat pertama ada di `docs/examples/`.

## Templat piagam metrik

```markdown
# Piagam metrik: [nama tim atau kumpulan metrik]

- **Tim:** [tim pemilik]
- **Pemilik:** [orang atau peran yang disebut namanya]
- **Ditinjau:** [kadens, misalnya per kuartal]

## Tujuan

[Satu atau dua kalimat: apa yang diatur piagam ini dan mengapa.]

## Apa yang kami lacak

| Metrik | Sumber kebenaran | Pemilik |
| --- | --- | --- |
| [metrik] | [sistem] | [pemilik yang disebut namanya] |

## Bukan tujuan

[Pernyataan eksplisit tentang untuk apa metrik ini tidak digunakan, misalnya
penilaian kinerja individu, peringkat antartim tanpa konteks.]

## Pagar pengaman (guardrail)

[Untuk setiap metrik yang diberi insentif, sebutkan pagar pengaman
pasangannya dan pola manipulasi (gaming) apa yang ditangkapnya.]

## Kadens tinjauan

[Kapan dan bagaimana piagam ini ditinjau kembali; apa yang memicu
pensiunnya sebuah metrik.]
```

## Templat spesifikasi dasbor

```markdown
# Spesifikasi dasbor: [nama dasbor]

## Audiens

[Untuk siapa dasbor ini dan keputusan apa yang dibantunya. Nyatakan
secara eksplisit jika bukan untuk penilaian individu.]

## Ubin (sesuai urutan tampilan)

1. **[Nama metrik]**, [jendela waktu], [jenis bagan]. [Catatan visualisasi
   khusus: aturan sumbu, anotasi.]
2. ...

## Aturan visualisasi

- Sumbu dimulai dari nol kecuali dinyatakan lain, dengan pengecualian
  yang didokumentasikan pada ubin terkait.
- [Aturan kejujuran lain yang khusus untuk proyek ini.]

## Kadens penyegaran

[Seberapa sering setiap ubin diperbarui, dan dari sumber apa.]

## Apa yang sengaja dikecualikan dasbor ini

[Sebutkan apa pun yang sengaja ditinggalkan, dan alasannya, misalnya
hitungan aktivitas individu.]
```

## Templat agenda rapat tinjauan metrik

```markdown
# Tinjauan metrik: [tanggal]

## Peserta

[Nama dan peran]

## Metrik yang ditinjau

Untuk setiap metrik:
- Pembacaan saat ini dan tren
- Setiap pergerakan di luar variasi normal (topik 1.6)
- Status pagar pengaman pasangannya, jika ada
- Keputusan yang dibantu oleh pembacaan ini, jika ada

## Metrik baru yang diusulkan

[Jalankan masing-masing melalui daftar periksa tinjauan metrik baru, topik 9.3.]

## Metrik yang dipertimbangkan untuk dipensiunkan

[Metrik mana yang tidak membantu keputusan apa pun dalam dua siklus terakhir?]

## Butir tindakan

| Butir | Pemilik | Tenggat |
| --- | --- | --- |
| | | |
```

## Templat postmortem tanpa menyalahkan

```markdown
# Postmortem: [nama insiden], [tanggal]

## Ringkasan

[Satu paragraf: apa yang terjadi, dampak pada pengguna, durasi.]

## Lini masa

- Deteksi: [waktu, bagaimana terdeteksi]
- Pengakuan: [waktu, siapa yang merespons]
- Penyelesaian: [waktu, apa yang memperbaikinya]

## Tingkat keparahan

[Klasifikasi terhadap kriteria yang terdokumentasi, topik 6.2.]

## Akar penyebab

[Apa yang memungkinkan hal ini terjadi, dirumuskan sebagai pertanyaan
tentang sistem, bukan tentang individu.]

## Apa yang berjalan baik

[Hal-hal spesifik yang berhasil dalam respons.]

## Butir tindakan

| Butir | Pemilik | Tenggat |
| --- | --- | --- |
| | | |

## Tindak lanjut

[Konfirmasi bahwa butir tindakan dilacak sampai selesai, pada siklus
tinjauan berikutnya.]
```

## Templat kasus ROI

```markdown
# Kasus ROI: [nama inisiatif]

## Biaya (total biaya kepemilikan, topik 5.5)

- Di muka: [biaya pengembangan]
- Berkelanjutan: [pemeliharaan, infrastruktur, dukungan, per tahun]
- Biaya peluang: [apa lagi yang bisa dikerjakan dengan kapasitas ini]

## Manfaat (bukti terdokumentasi, topik 5.1-5.3)

- [Manfaat 1], dibuktikan oleh [sumber data]
- [Manfaat 2], dibuktikan oleh [sumber data]

## Rentang dan asumsi

- Kasus konservatif: [angka]
- Kasus optimistis: [angka]
- Asumsi kunci yang menentukan rentang: [sebutkan]

## Faktor pengacau yang dipertimbangkan dan disingkirkan

[Apa lagi yang bisa menjelaskan manfaat yang diproyeksikan, dan mengapa
faktor itu disingkirkan atau diperhitungkan.]

## Pemeriksaan pascapenyelesaian (isi setelah inisiatif selesai)

- Hasil aktual: [angka]
- Dibandingkan dengan rentang proyeksi: [di atas / dalam / di bawah]
- Pelajaran untuk estimasi berikutnya: [catatan]
```
