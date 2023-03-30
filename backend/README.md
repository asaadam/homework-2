- lakukan installasi dependencies
- pastikan memiliki docker
- pastikan memiliki docker-compose
- jalankan perintah `docker-compose up -d`
- install dependencies dengan perintah `yarn install`
- lakukan migrasi database dengan perintah `yarn migrate`
- jalankan perintah `yarn prisma generate`
- jalankan perintah `yarn start`
- untuk mengambil file dari upload, maka dapat diakses dengan `http://localhost:8000/uploads/{nama_file}`

**Endpoint**


# POST /register


Endpoint untuk mendaftarkan pengguna baru.

## Request Body

name (string) : Nama lengkap pengguna.

email (string) : Alamat email pengguna.

password (string) : Password pengguna.

## Response

user (object) : Objek pengguna yang baru saja dibuat.


# POST /login
Endpoint untuk melakukan autentikasi pengguna

## Request Body

email (string) : Alamat email pengguna.

password (string) : Password pengguna.

## Response
token (string) : Token autentikasi yang dihasilkan.


# POST /books

Endpoint untuk membuat buku baru.

## Request Headers

 Authorization (string) : Token autentikasi.
## Request Body
 (Multi-part Form)
title (string) : Judul buku.

author (string) : Nama penulis buku.

publisher (string) : Nama penerbit buku.

year (string) : Tahun terbit buku.

pages (string) : Jumlah halaman buku.

image (file) : Gambar sampul buku.

### Response

book (object) : Objek buku yang baru saja dibuat.

# GET /books
Endpoint untuk mengambil semua buku yang tersedia.

### Response

books (array) : Kumpulan objek buku yang tersedia.

# PUT /books/:id
Endpoint untuk mengubah data buku.

## Request Headers

Authorization (string) : Token autentikasi.

## Request Parameters

id (number) : ID buku yang akan diubah.
Request Body

title (string) : Judul buku.

author (string) : Nama penulis buku.

publisher (string) : Nama penerbit buku.

year (string) : Tahun terbit buku.

pages (string) : Jumlah halaman buku.
## Response

book (object) : Objek buku yang telah diubah.

# DELETE /books/:id
Endpoint untuk menghapus buku.

## Request Headers

Authorization (string) : Token autentikasi.
## Request Parameters

id (number) : ID buku yang akan dihapus.

### Response

book (object) : Objek buku yang telah dihapus.


# GET /books/:id
Endpoint untuk mendapatkan detail buku berdasarkan ID.

## Request Headers

## Request Parameters

id (number) : ID buku .

### Response

book (object) : Objek buku yang .
