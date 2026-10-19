# 6.0 Pengantar Bagian 6: Metrik Keandalan, Operasi, dan Keamanan

Bagian 2 membahas bagaimana sebuah perubahan berpindah dari commit ke produksi; bagian ini
membahas apa yang terjadi setelah perubahan itu berjalan di sana, tanpa batas waktu, dalam
kondisi nyata yang tidak sepenuhnya bisa dikendalikan tim. Metrik keandalan, operasi, dan
keamanan adalah tempat janji rekayasa perangkat lunak bertemu dengan kenyataan yang
berkelanjutan: bukan "apakah deployment ini berhasil" tetapi "apakah sistem ini terus
bekerja, malam demi malam, di bawah beban, di bawah serangan, dan di bawah tekanan rotasi
on-call yang harus bisa dipertahankan selama bertahun-tahun, bukan hanya sampai insiden
berikutnya."

Keempat topik dalam bagian ini mengikuti alur yang disengaja. Indikator dan sasaran tingkat
layanan (topik 6.1) menetapkan kosakata dan disiplin penetapan target yang menjadi dasar
semua hal lain dalam bagian ini. Metrik insiden (topik 6.2) mengukur apa yang terjadi saat
target itu terlewat. Metrik on-call dan kapasitas (topik 6.3) mengukur biaya manusia dan
infrastruktur untuk menjaga target tetap tercapai. Metrik keamanan dan kerentanan (topik
6.4) memperluas disiplin keandalan yang sama ke risiko yang berbeda namun sangat berkaitan:
bukan "apakah ini akan gagal dengan sendirinya" tetapi "apakah seseorang akan membuatnya
gagal dengan sengaja." Keempat topik berbagi disiplin utama buku ini: sebutkan metriknya,
sebutkan bagaimana metrik itu dimanipulasi, dan pasangkan dengan pagar pengaman yang
menangkap manipulasi tersebut.

Bagi tim besar, metrik dalam bagian ini adalah tempat janji rekayasa menjadi kontraktual
dan, dalam konteks pemerintahan, kadang-kadang bersifat hukum. Organisasi perusahaan besar
menulis perjanjian tingkat layanan berdasarkan metrik yang diperkenalkan topik 6.1, dengan
penalti finansial nyata bila gagal memenuhinya; organisasi pemerintahan mengoperasikan
infrastruktur publik yang kritis, tempat kegagalan keandalan atau keamanan membawa
konsekuensi yang jauh melampaui neraca satu perusahaan. Bagian ini menanggapi bobot itu
dengan serius di seluruh pembahasannya.

## Topik dalam bagian ini

- **6.1 Indikator, sasaran, dan anggaran kesalahan tingkat layanan:** Kosakata dan disiplin
  penetapan target yang mendasari seluruh rekayasa keandalan situs (site reliability
  engineering), dan bagaimana anggaran kesalahan (error budget) mengubah keandalan menjadi
  sumber daya yang bisa dibelanjakan dan dikelola, bukan sebuah kemutlakan yang mustahil
  dicapai.
- **6.2 Metrik insiden: deteksi, respons, dan pemulihan:** Mengukur seberapa cepat sebuah
  organisasi menyadari, menanggapi, dan menyelesaikan suatu kegagalan, serta disiplin tanpa
  menyalahkan (blameless) yang menjaga pengukuran itu tetap jujur.
- **6.3 Metrik on-call, kapasitas, dan beban operasional:** Biaya manusia dan infrastruktur
  untuk mempertahankan keandalan, dan mengapa beban on-call yang tidak berkelanjutan pada
  akhirnya muncul sebagai masalah keandalan itu sendiri.
- **6.4 Metrik manajemen keamanan dan kerentanan:** Memperluas pendekatan yang disiplin dan
  berpasangan dengan pagar pengaman yang sama ke risiko keamanan, mulai dari penemuan
  kerentanan hingga perbaikannya.

## Bagaimana topik-topik ini saling berkaitan

Topik 6.1 menetapkan fondasi yang menjadi dasar setiap topik berikutnya dalam bagian ini:
tanpa sasaran tingkat layanan yang jelas, "seberapa buruk insiden ini" (topik 6.2) dan
"apakah beban on-call kita berkelanjutan" (topik 6.3) tidak punya titik acuan bersama untuk
dijadikan ukuran. Metrik insiden pada topik 6.2 pada dasarnya adalah catatan pembelanjaan
anggaran kesalahan yang diperkenalkan topik 6.1; topik 6.3 mengukur keberlanjutan sistem
manusia yang bertanggung jawab menjaga pembelanjaan itu tetap dalam anggaran; dan topik 6.4
menerapkan cara berpikir target-dan-anggaran yang sama pada postur keamanan yang, bila tidak
diukur, cenderung mendapat perhatian hanya secara reaktif, setelah sebuah insiden, bukan
secara proaktif.

Bagian ini terhubung langsung kembali ke Bagian 2: tingkat kegagalan perubahan DORA dan
waktu pemulihan dari deployment yang gagal (keduanya dibahas dalam topik 2.10) masing-masing
adalah indikator awal bagi, dan contoh dari, metrik insiden dalam bagian ini. Bagian ini juga
terhubung ke depan ke Bagian 8, tempat panduan dasbor dan kematangan program banyak
memanfaatkan model anggaran kesalahan dalam bagian ini sebagai contoh kerja untuk mengubah
tujuan yang abstrak (keandalan, keamanan) menjadi target yang konkret, dapat dilacak, dan
tidak mutlak, yang benar-benar bisa dikelola tim dari hari ke hari.
