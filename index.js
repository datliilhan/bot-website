const express = require('express');
const path = require('path');
const app = express();

// Public klasörünü (CSS ve görseller için) dışa aç
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa rotası (views/index.html dosyasını çağırır)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
