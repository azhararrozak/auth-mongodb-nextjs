# Next.js Auth MongoDB Boilerplate

Boilerplate ini menyediakan autentikasi menggunakan **Next.js**, **MongoDB**, dan **JWT**. Cocok untuk memulai project dengan kebutuhan login, register, dan proteksi route berbasis token.

## Fitur

- Register & Login user
- Penyimpanan user di MongoDB
- Autentikasi menggunakan JWT
- Middleware proteksi route
- Struktur kode modular dan mudah dikembangkan

## Instalasi

1. Clone repository ini
2. Install dependencies:
    ```bash
    npm install
    ```
3. Buat file `.env.local` dan tambahkan:
    ```
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
4. Jalankan development server:
    ```bash
    npm run dev
    ```

## Struktur Direktori

- `/pages/api/auth` – Endpoint API untuk autentikasi
- `/lib` – Utility untuk MongoDB dan JWT

## Lisensi

MIT License