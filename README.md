# Tes Masuk

## Tugas #1

Buat aplikasi pemanfaatan [API ini](https://dummyjson.com/docs/products) dengan 2 route:

1. Halaman utama dengan route `(/)`

   - Tampilkan semua produk menggunakan API [Get all products](https://dummyjson.com/docs/products#products-all)
   - Field yang ditampilkan yaitu `thumbnail`, `title`, `brand`, `tags`, `price`
   - Buat paginasi, tampilkan 50 produk perhalaman dan buatlah tombol `Sebelumnya` dan `Selanjutnya`
   - Jika dihalaman pertama, maka tombol `Sebelumnya` akan ter `disabled`
   - Jika dihalaman terakhir, maka tombol `Selanjutnya` akan ter `disabled`

![main-page](/public/images/sample-1.png)

2. Halaman detail produk dengan route `(/produk/:id)`
   - Tampilkan detail produk menggunakan API [Get single product](https://dummyjson.com/docs/products#products-single)
   - Field yang ditampilkan yaitu `images`, `title`, `description`, `tags`, `price`, `reviews`
   - Untuk field `images` tampilkan semua gambarnya, dibikin carousel juga bisa
   - Untuk field `reviews` tampilkan semua fieldnya

![detail-page](/public/images/sample-2.png)

Bebas menggunakan Framework dan UI Library apapun, tampilan tidak perlu sama dengan contoh, gunakan kreatifitas masing-masing

## Tugas #2

Buat rancangan database untuk kasus dibawah ini

- Dinas Pendidikan minta dibuatkan aplikasi untuk pendataan pegawai tiap sekolah
- Data sekolah terdiri dari _nama, alamat, tingkat, jenis (Negeri, Swasta)_
- Opsi tingkat hanya _TK/PAUD, SD, SMP_
- Opsi jenis hanya _Negeri, Swasta_
- Data pegawai terdiri dari _nama, alamat, jenis kelamin_
- Pegawai ada 2 jenis, yaitu tendik dan guru
- Tiap jenis memiliki beberapa jabatan
- tendik bisa memiliki jabatan sebagai _Kepala Sekolah_ atau _Staff TU_, sedangkan guru hanya memiliki jabatan sebagai _Pengajar_
- Pegawai bisa bekerja dibeberapa sekolah, dan memiliki jabatan dimasing-masing sekolah

Setelah dibuat rancangannya, tampilkan rancangan tersebut dalam bentuk gambar (bebas, bisa menggunakan phpMyAdmin Designer View, Navicat Model, App Diagram, Excalidraw, dsj)

# Pengumpulan Tugas

Simpan gambar `Tugas #2` kedalam root folder aplikasi `Tugas #1` dengan nama `_TUGAS_2.jpg/png`

Upload aplikasi `Tugas #1` melalui github, pastikan repositorinya publik

Jika sudah selesai kirim link repositori melalui WhatsApp

Batas waktu pengumpulan `Sabtu, 29 Juni 2024 10:00 WITA`
