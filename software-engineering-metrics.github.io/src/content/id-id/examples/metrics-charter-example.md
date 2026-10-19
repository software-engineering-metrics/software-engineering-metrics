# Contoh: piagam metrik untuk tim platform pembayaran

Contoh piagam metrik yang diuraikan, dokumen satu halaman yang dijelaskan di
[topik 1.4, Tata kelola dan kepemilikan metrik](../chapters/01-04-tata-kelola-dan-kepemilikan-metrik.md).
Intinya adalah bentuknya: tujuan yang dinyatakan, bukan-tujuan yang eksplisit,
pemilik yang disebutkan namanya, dan irama tinjauan. Piagam sesingkat ini
dimaksudkan untuk dibaca, bukan diarsipkan.

- **Tim:** Platform pembayaran
- **Pemilik:** Manajer rekayasa platform
- **Ditinjau:** Setiap kuartal, pada tinjauan platform

## Tujuan

Piagam ini mengatur metrik yang dilacak tim platform pembayaran tentang
pengiriman dan keandalannya sendiri. Piagam ini ada agar semua orang, di dalam
dan di luar tim, dapat melihat apa yang diukur, mengapa, dan untuk apa metrik
itu tidak dipakai.

## Apa yang kami lacak

| Metrik | Sumber kebenaran | Pemilik |
| --- | --- | --- |
| Frekuensi deployment | Pipeline CI/CD | Lead platform |
| Lead time untuk perubahan | Git ditambah pipeline deployment | Lead platform |
| Tingkat kegagalan perubahan | Pelacak insiden, ditandai per deploy | Lead siaga |
| Waktu pemulihan dari deployment yang gagal | Pelacak insiden | Lead siaga |
| Latensi API P99 (SLI) | Platform observabilitas | Lead SRE |
| Pembakaran anggaran galat | Platform observabilitas | Lead SRE |

## Bukan-tujuan

Metrik ini tidak pernah dipakai, secara individual atau gabungan, untuk
memeringkat engineer, menilai tinjauan kinerja, atau membandingkan tim ini
dengan peta jalan tim lain tanpa juga membandingkan cakupan, jumlah staf, dan
kematangan sistem. Penggunaan apa pun di luar tujuan yang dinyatakan di atas
memerlukan persetujuan direktur rekayasa dan tim itu sendiri.

## Pengaman

Setiap metrik di atas yang membawa insentif dipasangkan dengan pengaman. Lead
time untuk perubahan dipantau bersama tingkat kegagalan perubahan, sehingga tim
tidak dapat memperbaiki angka kecepatannya dengan mengirim perubahan yang lebih
berisiko. Frekuensi deployment dipantau bersama pembakaran anggaran galat, untuk
alasan yang sama.

## Irama tinjauan

Tim meninjau piagam ini setiap kuartal. Metrik yang tidak mengubah keputusan
dalam dua kuartal berturut-turut adalah kandidat untuk dipensiunkan.
