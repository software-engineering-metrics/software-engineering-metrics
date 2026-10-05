# 9.2 Referensi definisi metrik dan rumus

Setiap rumus dari buku ini, dikumpulkan di satu tempat. Setiap entri
menyebutkan topik yang membahasnya secara lengkap, termasuk risiko
manipulasi (gaming) dan pagar pengaman (guardrail)-nya. Gunakan ini sebagai
rujukan cepat, bukan pengganti topiknya sendiri.

## Metrik aliran (Bagian 2)

| Metrik | Rumus | Topik |
| --- | --- | --- |
| Kecepatan aliran | Jumlah item aliran yang selesai per satuan waktu | 2.3 |
| Distribusi aliran | (Item selesai dari satu jenis item aliran) / (Total item selesai) x 100% | 2.3 |
| Waktu alir | Waktu sejak item aliran masuk ke aliran nilai sampai pengirimannya | 2.4 |
| Beban aliran | Jumlah item aliran yang sedang aktif atau menunggu dalam aliran nilai | 2.4 |
| Hukum Little | Beban aliran (pekerjaan yang sedang berjalan) = Laju kedatangan x Waktu alir (waktu siklus) | 2.4, 2.7 |
| Efisiensi aliran | Waktu kerja aktif / Total waktu yang berlalu x 100% | 2.5 |
| Waktu siklus | Jumlah durasi tahap: pengodean + pengambilan + tinjauan + pengujian + deployment | 2.6 |
| Utilisasi | Laju kedatangan / Laju layanan | 2.7 |
| Persen lengkap dan akurat (%C/A) | (Unit yang dapat dipakai di hilir tanpa pengerjaan ulang) / (Total unit) x 100% | 2.8 |
| Hasil throughput bergulir | %C/A tahap 1 x %C/A tahap 2 x ... x %C/A tahap N | 2.8 |
| Takt time | Waktu kerja yang tersedia / Permintaan pelanggan pada periode itu | 2.8 |
| Waktu hingga tinjauan pertama | Waktu sejak pull request dibuka sampai tanggapan substantif pertama dari peninjau | 2.9 |
| Frekuensi deployment | Jumlah deployment produksi yang berhasil per satuan waktu | 2.10 |
| Lead time untuk perubahan | Waktu dari commit pertama sampai deployment produksi yang berhasil (laporkan median dan persentil ke-90) | 2.10 |
| Tingkat kegagalan perubahan | (Deployment yang menyebabkan kegagalan) / (Total deployment) x 100% | 2.10 |
| Waktu pemulihan dari deployment yang gagal | Waktu dari terdeteksinya kegagalan sampai layanan benar-benar pulih | 2.10 |

## Pengalaman pengembang (Bagian 3)

| Metrik | Rumus | Topik |
| --- | --- | --- |
| Waktu fokus | Jumlah dan durasi blok tanpa gangguan selama dua jam atau lebih per minggu, dari data kalender | 3.6 |
| Tingkat respons | (Respons survei yang diterima) / (Undangan survei yang dikirim) x 100% | 3.7 |

## Kode dan kualitas (Bagian 4)

| Metrik | Rumus | Topik |
| --- | --- | --- |
| Kompleksitas siklomatik | Jalur independen melalui alur kendali (sisi − simpul + 2, menurut McCabe) | 4.1 |
| Cakupan pengujian | (Baris/cabang yang dijalankan oleh pengujian) / (Total baris/cabang) x 100% | 4.2 |
| Tingkat mutan terbunuh | (Mutan yang terbunuh oleh rangkaian pengujian) / (Total mutan yang dimasukkan) x 100% | 4.2 |
| Churn kode | Baris yang ditambah + diubah + dihapus per berkas dalam suatu jendela waktu | 4.3 |
| Skor hotspot | Churn x Kompleksitas, diurutkan per berkas | 4.3 |
| Biaya pemikulan utang | Perkiraan biaya berkelanjutan jika sebuah item tidak diperbaiki (pekerjaan terkait yang lebih lambat, risiko cacat yang meningkat) | 4.5 |

## Produk dan bisnis (Bagian 5)

| Metrik | Rumus | Topik |
| --- | --- | --- |
| Tingkat cacat yang lolos | (Cacat lolos berbobot keparahan) / (Satuan pengiriman atau waktu) | 5.1 |
| Adopsi awal | (Pengguna yang mencoba fitur setidaknya sekali) / (Audiens target) x 100% | 5.2 |
| Adopsi bertahan | (Pengguna yang masih memakai fitur setelah N minggu) / (Pengguna yang awalnya mencobanya) x 100% | 5.2 |
| Biaya satuan | Total biaya (orang + infrastruktur + perkakas) / Satuan bermakna (pelanggan, transaksi) | 5.4 |
| ROI | (Total manfaat − Total biaya kepemilikan) / Total biaya kepemilikan, disajikan sebagai rentang | 5.5 |

## Keandalan, operasi, dan keamanan (Bagian 6)

| Metrik | Rumus | Topik |
| --- | --- | --- |
| Anggaran galat | (1 − target SLO) x Jendela waktu (misalnya, 0,1% dari 30 hari ≈ 43 menit) | 6.1 |
| Laju pembakaran anggaran galat | Anggaran galat yang terpakai / Anggaran galat yang dialokasikan, pada jendela tertentu | 6.1 |
| MTTD | Waktu dari mulainya insiden sampai terdeteksi | 6.2 |
| MTTA | Waktu dari pemberitahuan insiden sampai pengakuan | 6.2 |
| MTTR (insiden) | Waktu dari pengakuan sampai layanan benar-benar pulih | 6.2 |
| Distribusi halaman siaga | Halaman (page) yang diterima per individu, pada jendela bergulir (bukan rata-rata tim) | 6.3 |
| Waktu perbaikan kerentanan | Waktu dari penemuan sampai perbaikan yang sungguhan, dilacak menurut tingkat keparahan | 6.4 |

## Catatan tentang penggunaan rumus ini

- **Selalu pasangkan rumus kecepatan atau keluaran dengan pagar
  pengamannya** (topik 1.2): tingkat kegagalan perubahan dengan frekuensi
  deployment dan lead time; tingkat cacat yang lolos dengan kecepatan
  pengiriman; pembakaran anggaran galat dengan aktivitas deployment.
- **Gunakan median dan persentil, bukan rata-rata, untuk rumus berbasis
  waktu** (topik 1.6) kecuali sebuah rumus secara eksplisit meminta rata-rata.
- **Setiap rumus memerlukan sistem sumber dan metode pengumpulan yang
  terdokumentasi** (topik 1.5) di samping definisi matematisnya; dua tim yang
  menghitung rumus yang sama dari sumber berbeda tidak akan menghasilkan
  angka yang sebanding.
- **Pembobotan keparahan tidak ditampilkan secara eksplisit di setiap rumus
  di atas** tetapi berlaku di mana pun "berbobot keparahan" muncul; lihat
  topik terkait untuk skema klasifikasi lengkapnya.
