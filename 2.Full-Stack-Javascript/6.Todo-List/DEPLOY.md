# 🚀 Cara Deploy Todo-List

## Metode 1: GitHub Pages (Recommended)

### Langkah-langkah:

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Deploy ke GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Akses aplikasi:**
   - URL: `https://linggarram.github.io/odin-project/`
   - Tunggu 1-2 menit setelah deploy pertama kali

### Catatan:
- Script `npm run deploy` akan otomatis build dan push ke branch `gh-pages`
- Pastikan repository sudah di-push ke GitHub
- Aktifkan GitHub Pages di Settings > Pages > Source: gh-pages branch

---

## Metode 2: Netlify

### Langkah-langkah:

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Install Netlify CLI (jika belum):**
   ```bash
   npm install -g netlify-cli
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Atau drag & drop:**
   - Buka https://app.netlify.com/drop
   - Drag folder `dist` ke browser

---

## Metode 3: Vercel

### Langkah-langkah:

1. **Install Vercel CLI (jika belum):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Atau via website:**
   - Buka https://vercel.com
   - Import repository GitHub
   - Vercel akan otomatis detect dan deploy

---

## Metode 4: Manual (Any Web Server)

1. **Build project:**
   ```bash
   npm run build
   ```

2. **Upload folder `dist`:**
   - Upload semua file di folder `dist` ke web hosting
   - Pastikan `index.html` ada di root folder

---

## Troubleshooting

### Halaman blank setelah deploy?
- Periksa `publicPath` di `webpack.config.js`
- Untuk GitHub Pages: pastikan sesuai dengan nama repository
- Untuk hosting lain: gunakan `publicPath: '/'`

### 404 Error?
- Pastikan GitHub Pages sudah aktif
- Tunggu beberapa menit setelah deploy pertama
- Periksa branch `gh-pages` sudah ada

### Assets tidak load?
- Periksa console browser untuk error
- Pastikan path assets benar di `publicPath`
