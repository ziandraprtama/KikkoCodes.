# KikkoCodes

Website katalog gift code / redeem code untuk Mobile Games & Roblox, dibuat untuk brand **Kikko Gaming**.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build production:

```bash
npm run build
npm run preview
```

## Menambahkan game baru

Edit **`src/data/games.js`** saja — tambahkan object baru ke array `games`. Tidak perlu mengubah komponen UI apa pun.

```js
{
  id: 8,
  slug: "nama-game",
  name: "Nama Game",
  category: "mobile", // atau "roblox"
  platform: "Android",
  genre: "RPG",
  image: "URL_gambar_game",
  description: "Deskripsi game...",
  lastUpdated: "2026-09-06", // format YYYY-MM-DD
  codes: [
    { code: "CODEXYZ", reward: "100 Gems", status: "active" },
    { code: "CODEOLD", reward: "Free Item", status: "expired" },
  ],
  redeemGuide: [
    "Open the game.",
    "Open the redeem menu.",
    "Enter the code.",
    "Press redeem.",
  ],
},
```

## Mengganti logo

Logo ada di `src/assets/logo-kikko.png` (dipakai di Navbar & Footer) dan `public/favicon.png` (dipakai sebagai favicon browser). Ganti file-nya langsung jika suatu saat perlu update — jangan ubah nama file, atau update juga referensinya di `Navbar.jsx` / `Footer.jsx` / `index.html`.

## Struktur folder

```
src/
├── components/   → Navbar, Footer, GameCard, CodeItem, SearchBar, dll (murni UI)
├── pages/        → Home, CategoryPage, GameDetail, NotFound
├── data/         → games.js (satu-satunya sumber data)
├── utils/        → search.js (logic pencarian)
├── styles/       → index.css (semua styling + design tokens warna)
├── App.jsx       → routing
└── main.jsx      → entry point
```

## Catatan

- Tidak ada backend/database — semua data lokal di `src/data/games.js`.
- Search bekerja realtime di client (nama game, genre, platform, code, reward).
- Tombol COPY memakai Clipboard API dengan fallback `execCommand` untuk browser mobile lama.
- Mobile-first: bottom navigation muncul di layar < 900px, navbar penuh + search bar muncul di layar ≥ 900px.
