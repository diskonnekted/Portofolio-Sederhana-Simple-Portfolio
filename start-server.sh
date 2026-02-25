#!/bin/bash
# Script untuk menjalankan aplikasi tanpa sudo/pm2

# Set PORT jika diperlukan (default 4321)
export PORT=4321
export HOST=0.0.0.0

# Hentikan proses sebelumnya jika ada (opsional, hati-hati menggunakan ini di shared hosting)
# pkill -f "node ./dist/server/entry.mjs"

# Jalankan aplikasi dengan nohup agar tetap berjalan saat terminal ditutup
nohup node ./dist/server/entry.mjs > app.log 2>&1 &

echo "Aplikasi berjalan di background."
echo "Cek log dengan: tail -f app.log"
echo "Untuk menghentikan: pkill -f 'node ./dist/server/entry.mjs' atau cari PID dengan 'ps aux | grep node'"
