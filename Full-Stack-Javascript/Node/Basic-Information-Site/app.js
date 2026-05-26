const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Selamat Datang Di Project Pertama Saya Menggunakan Node</h1><p>Ini Halaman Home</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Ini Halaman About</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Ini Halaman Contact</p>");
});

app.use((req, res) => {
    res.status(404).send("<h1>404 - Halaman Tidak Ditemukan</h1><p>Maaf, Halaman yang anda cari tidak ada</p>");
});

app.listen(port, () => {
    console.log(`Server berjalan di port: ${port}`);
});