`node ./arbitrage-pair.js binance gemini kraken`

`pm2 start index.js --cron "*/2 * * * *" --no-autorestart --log "arbitrage-binanceus-coinbasepro"   --name "arbitrage-bot" -- binanceus coinbasepro`