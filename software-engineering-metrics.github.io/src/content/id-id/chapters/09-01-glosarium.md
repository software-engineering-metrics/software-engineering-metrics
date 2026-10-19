# 9.1 Glosarium

Definisi istilah dan akronim yang dipakai di seluruh buku. Setiap entri
menyebutkan topik tempat istilah itu diperkenalkan secara mendalam.

**Metrik aktivitas (activity metric).** Hitungan gerak rekayasa (commit,
pull request, baris kode) yang mengukur volume, bukan nilai. Lihat topik
3.4.

**Bus factor.** Jumlah orang yang harus tidak tersedia sebelum sebuah sistem
atau bagian pengetahuan menjadi tidak dapat dipelihara. Bus factor satu
adalah risiko yang parah. Lihat topik 3.5.

**Tingkat kegagalan perubahan (change failure rate).** Persentase deployment
yang menyebabkan kegagalan produksi dan memerlukan perbaikan. Salah satu
dari empat metrik DORA. Lihat topik 2.10.

**Bagan kendali (control chart).** Bagan yang menunjukkan rentang variasi
normal sebuah metrik dari waktu ke waktu, dipakai untuk membedakan
pergeseran yang sungguhan dari derau biasa. Lihat topik 1.6.

**Waktu siklus (cycle time).** Rincian internal lead time menjadi tahap-tahap:
pengodean, tinjauan, pengujian, dan deployment. Lihat topik 2.6.

**CVSS (Common Vulnerability Scoring System).** Skala standar untuk menilai
tingkat keparahan sebuah kerentanan keamanan. Lihat topik 6.4.

**Kompleksitas siklomatik (cyclomatic complexity).** Hitungan jalur
independen melalui alur kendali sebuah potongan kode, diperkenalkan oleh
Thomas J. McCabe pada 1976. Lihat topik 4.1.

**DevEx (pengalaman pengembang).** Kerangka yang lebih luas dan berkaitan
dengan SPACE, disusun di sekitar putaran umpan balik, beban kognitif, dan
keadaan alir (flow state). Lihat topik 3.7.

**Frekuensi deployment (deployment frequency).** Seberapa sering sebuah tim
berhasil merilis ke produksi. Salah satu dari empat metrik DORA. Lihat topik
2.10.

**Metrik DORA.** Empat metrik dari program DevOps Research and Assessment:
frekuensi deployment, lead time untuk perubahan, tingkat kegagalan
perubahan, dan waktu pemulihan dari deployment yang gagal. Lihat topik 2.10.

**Anggaran galat (error budget).** Kekurangan yang diizinkan antara sasaran
tingkat layanan dan keandalan 100%, diperlakukan sebagai sumber daya yang
boleh dibelanjakan. Lihat topik 6.1.

**Cacat yang lolos (escaped defect).** Cacat yang mencapai produksi dan
memengaruhi pengguna sungguhan, berbeda dari cacat yang tertangkap dalam
tinjauan atau pengujian. Lihat topik 5.1.

**FinOps.** Disiplin untuk membawa akuntabilitas keuangan ke pengeluaran
infrastruktur cloud yang berubah-ubah. Lihat topik 5.4.

**Distribusi aliran (flow distribution).** Proporsi item aliran yang selesai
untuk setiap jenis item aliran dalam suatu periode. Lihat topik 2.3.

**Efisiensi aliran (flow efficiency).** Rasio waktu kerja aktif terhadap
total waktu yang berlalu untuk sepotong pekerjaan yang bergerak melalui
jalur pengiriman. Lihat topik 2.5.

**Flow Framework.** Model manajerial, diciptakan oleh Mik Kersten, yang
memperlakukan pengiriman perangkat lunak sebagai aliran nilai dan
mengukurnya dengan empat jenis item aliran dan lima metrik aliran. Lihat
topik 2.1.

**Item aliran (flow item).** Satuan kerja dalam Flow Framework: item fitur,
cacat, risiko, atau utang, yang diklasifikasikan saat masuk. Lihat topik
2.2.

**Beban aliran (flow load).** Jumlah total item aliran yang sedang aktif
atau menunggu dalam sebuah aliran nilai, nama Flow Framework untuk
pekerjaan yang sedang berjalan. Lihat topik 2.4.

**Waktu alir (flow time).** Total waktu yang berlalu sejak sebuah item aliran
masuk ke aliran nilai sampai pengirimannya, mencakup seluruh aliran nilai
dan bukan hanya rekayasa. Lihat topik 2.4.

**Kecepatan aliran (flow velocity).** Jumlah item aliran yang selesai dalam
suatu periode, ukuran throughput menurut Flow Framework. Lihat topik 2.3.

**Hukum Goodhart.** Prinsip bahwa ketika sebuah ukuran menjadi target, ia
tidak lagi menjadi ukuran yang baik. Gagasan pokok yang mengatur buku ini.
Lihat topik 1.2.

**Metrik pagar pengaman (guardrail metric).** Metrik pendamping yang tidak
boleh memburuk selagi metrik yang diberi insentif membaik, dirancang untuk
menangkap manipulasi (gaming). Lihat topik 1.2.

**Hotspot.** Berkas atau modul yang sekaligus sering berubah (churn tinggi)
dan sangat kompleks, diidentifikasi melalui analisis hotspot. Lihat topik
4.3.

**Lead time untuk perubahan (lead time for changes).** Waktu dari commit
pertama sebuah perubahan kode sampai deployment-nya yang berhasil di
produksi. Salah satu dari empat metrik DORA. Lihat topik 2.10.

**Hukum Little.** Bukti bahwa jumlah rata-rata item dalam antrean yang stabil
sama dengan laju kedatangan rata-rata dikalikan waktu rata-rata sebuah item
berada dalam sistem. Diterapkan pada pengiriman, pekerjaan yang sedang
berjalan sama dengan laju kedatangan dikali waktu siklus. Lihat topik 2.7.

**Pohon metrik (metric tree).** Struktur yang menghubungkan metrik hasil
tingkat atas, melalui pendorongnya, ke metrik operasional yang dimiliki
masing-masing tim. Lihat topik 1.3.

**MTTA (mean time to acknowledge).** Waktu dari pemberitahuan sebuah insiden
sampai seseorang mengambil tanggung jawab untuk menanganinya. Lihat topik
6.2.

**MTTD (mean time to detect).** Waktu dari mulainya insiden yang sebenarnya
sampai seseorang menyadari bahwa insiden itu terjadi. Lihat topik 6.2.

**MTTR (mean time to recovery / mean time to resolve).** Waktu untuk
memulihkan layanan sepenuhnya setelah kegagalan. Dipakai baik untuk
kegagalan akibat deployment (topik 2.10) maupun insiden umum (topik 6.2).

**Pengujian mutasi (mutation testing).** Teknik yang sengaja memasukkan
cacat buatan berskala kecil ke dalam kode untuk memeriksa apakah rangkaian
pengujian benar-benar menangkapnya, sebagai pelengkap cakupan. Lihat topik
4.2.

**Metrik bintang utara (north-star metric).** Satu ukuran yang paling baik
menangkap nilai inti yang diberikan sebuah organisasi, berada di puncak
pohon metrik. Lihat topik 1.3.

**Telemetri hasil (outcome telemetry).** Pengukuran hasil nyata secara
berkelanjutan dan terinstrumentasi, bukan aktivitas atau keluaran. Lihat
topik 7.4.

**Persen lengkap dan akurat (percent complete and accurate, %C/A).**
Persentase unit yang dapat diproses tim hilir tanpa memerlukan pengerjaan
ulang, dari pemetaan aliran nilai Lean klasik. Lihat topik 2.8.

**Waktu proses (process time, PT).** Waktu kerja langsung yang sebenarnya
dihabiskan untuk satu unit, berbeda dari waktu menunggu, dari pemetaan aliran
nilai Lean klasik. Lihat topik 2.8.

**Teori antrean (queueing theory).** Kajian matematis tentang antrean
menunggu, diterapkan pada jalur pengiriman untuk menjelaskan bagaimana
pekerjaan yang sedang berjalan, laju kedatangan, dan utilisasi menentukan
waktu tunggu. Lihat topik 2.7.

**ROI (return on investment).** Imbal hasil finansial sebuah inisiatif
relatif terhadap biayanya, di sini dibangun dari bukti biaya dan hasil yang
terdokumentasi, bukan asumsi. Lihat topik 5.5.

**Hasil throughput bergulir (rolled throughput yield).** Angka persen
lengkap dan akurat dari setiap tahap dalam aliran nilai yang dikalikan
bersama, memperlihatkan bagaimana pengerjaan ulang menumpuk di jalur
multitahap. Lihat topik 2.8.

**SLI (service level indicator).** Sinyal kesehatan layanan yang diukur
langsung, seperti latensi atau tingkat galat. Lihat topik 6.1.

**SLO (service level objective).** Rentang target untuk sebuah indikator
tingkat layanan. Lihat topik 6.1.

**Kerangka SPACE.** Kerangka lima dimensi untuk produktivitas pengembang:
Satisfaction and well-being (kepuasan dan kesejahteraan), Performance
(kinerja), Activity (aktivitas), Communication and collaboration (komunikasi
dan kolaborasi), serta Efficiency and flow (efisiensi dan aliran). Lihat
topik 3.1.

**SRE (site reliability engineering).** Disiplin, yang dipelopori di Google,
untuk menerapkan pendekatan rekayasa perangkat lunak pada operasi dan
keandalan. Lihat topik 6.1.

**Takt time.** Waktu maksimum yang dapat diterima untuk menyelesaikan satu
unit pekerjaan agar sesuai dengan permintaan pelanggan secara rapi, dari
pemetaan aliran nilai Lean klasik. Lihat topik 2.8.

**Utang teknis (technical debt).** Biaya yang menumpuk dari jalan pintas
masa lalu dalam basis kode, sebuah metafora untuk pertukaran yang dapat
dikelola, bukan rahasia yang memalukan. Lihat topik 4.5.

**TCO (total cost of ownership).** Biaya penuh sebuah inisiatif atau sistem
sepanjang masa pakainya, termasuk pemeliharaan dan infrastruktur
berkelanjutan, bukan hanya biaya di muka. Lihat topik 5.5.

**Ekonomi satuan (unit economics).** Biaya yang dinyatakan per satuan nilai
bermakna yang diberikan (per pelanggan, per transaksi), bukan sebagai total
yang buram. Lihat topik 5.4.

**Utilisasi (utilization).** Proporsi kapasitas tersedia sebuah sumber daya
yang sedang sibuk, dihitung sebagai laju kedatangan dibagi laju layanan.
Waktu tunggu tumbuh tajam, bukan bertahap, ketika utilisasi mendekati
kapasitas penuh. Lihat topik 2.7.

**Aliran nilai (value stream).** Rangkaian aktivitas ujung ke ujung yang
mengubah sebuah gagasan menjadi nilai yang diterima pelanggan, satuan
pengukuran dalam Flow Framework. Lihat topik 2.1.

**Metrik pajangan (vanity metric).** Metrik yang selalu naik, tampak
mengesankan, dan tidak mengubah keputusan apa pun. Lihat topik 1.1.

**Pekerjaan yang sedang berjalan (work in process, WIP).** Jumlah item yang
sedang dikerjakan pada satu waktu di seluruh tim atau sistem. Lihat topik
2.5.
