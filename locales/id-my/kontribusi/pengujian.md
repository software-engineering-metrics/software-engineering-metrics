# Pengujian: rangkaian validasi

## Menjalankannya

```sh
just test
# or
python3 tests/validate.py
```

Ia berjalan dari mana saja dan hanya membutuhkan Python 3 (tanpa paket pihak
ketiga, tanpa jaringan). Ia mencetak satu baris per pemeriksaan dan keluar
dengan kode bukan nol jika ada pemeriksaan yang gagal, sehingga cocok di CI dan
sebagai pre-commit hook.

## Apa yang diperiksanya

- **Jumlah topik yang diharapkan** (konstanta di bagian atas skrip).
- **Penomoran berkesinambungan** di dalam setiap bagian, dimulai dari N.0.
- **H1 cocok dengan desimal pada nama berkas** untuk setiap topik.
- **Judul H1 cocok dengan `spec/structure.md`** karakter demi karakter, bukan
  hanya desimal di depan.
- **Bagian yang diwajibkan** ada di setiap topik isi (Bagian 1 sampai 8, topik
  N.1 ke atas), **persis dalam urutan templat**.
- **Jumlah kata minimum** untuk setiap topik isi (1.500 kata), dengan daftar
  izin di skrip untuk pengecualian yang disengaja.
- **Tanpa em-dash** di berkas Markdown mana pun.
- **En-dash hanya di antara angka**, jadi "2.1–2.8" lulus dan yang lain gagal.
- **Tanpa ungkapan terlarang** ("not only", "but also", "load-bearing").
- **Semua tautan `.md` internal terselesaikan.**
- **Referensi silang dalam prosa menunjuk ke topik yang nyata**: rujukan ke nomor
  topik tanpa berkas yang cocok di disk gagal, memakai pola rujukan yang sama
  dengan yang dipakai penautan otomatis topik pada situs yang diterbitkan.
- **Tautan Wikipedia berbentuk benar** (`https://en.wikipedia.org/wiki/...`).
- **`spec/structure.md` cocok dengan berkas di disk**, di kedua arah.
- **README, beranda, dan halaman isi menautkan setiap topik.**

## Ketika sebuah pemeriksaan gagal

Baris yang gagal menyebut berkas dan masalahnya. Perbaikan umum:

- Em-dash ditemukan: tulis ulang kalimat untuk menghilangkan "—". Jangan sekadar
  menghapusnya.
- Bagian hilang: tambahkan bagian `##` yang hilang dari templat topik.
- Ketidakcocokan struktur: Anda menambah atau mengganti nama topik tanpa
  memperbarui `spec/structure.md`, atau sebaliknya. Selaraskan kembali.
- Tautan rusak: perbaiki jalurnya, atau perbarui setelah penggantian nama.
- Celah penomoran: nomori ulang agar bagian berkesinambungan dari N.0.

## Di luar rangkaian validasi

- `just spell` menjalankan [codespell](https://github.com/codespell-project/codespell)
  pada repositori. Konfigurasinya, termasuk daftar abaikan untuk positif palsu,
  adalah bagian `[tool.codespell]` di `pyproject.toml`.
- `just stats` mencetak laporan Markdown (jumlah kata per topik, topik tipis,
  tautan Wikipedia, entri rujukan) dari `tools/stats.py`.

## Integrasi berkelanjutan

- `.github/workflows/test.yml` berjalan pada setiap pull request dan pada push
  ke cabang non-utama: rangkaian validasi dan codespell. Repositori ini tidak
  membangun atau men-deploy situs; perenderan terjadi di repositori
  `software-engineering-metrics.github.io` yang terpisah.
- `.github/workflows/links.yml` memeriksa tautan eksternal setiap minggu dengan
  [lychee](https://github.com/lycheeverse/lychee) (pola abaikan di
  `.lycheeignore`) dan menyimpan hasilnya di satu isu "Link checker report".
  Tautan eksternal sengaja dijauhkan dari jalur PR.

## Tidak tercakup oleh pengujian

Rangkaian ini memeriksa struktur dan gaya, bukan kebenaran. Ia tidak dapat tahu
apakah sebuah rujukan nyata atau apakah prosanya akurat. Verifikasi kutipan dan
fakta secara manual atau dengan penelusuran riset. Keberadaan tautan Wikipedia
(berbeda dari bentuknya) juga membutuhkan pemeriksaan jaringan, yang sengaja
ditinggalkan rangkaian agar dapat berjalan luring.
