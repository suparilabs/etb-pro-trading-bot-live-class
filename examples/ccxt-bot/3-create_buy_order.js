'use strict';
require("dotenv").config();
const ccxt = require ('ccxt');

(async function () {
    const exchangeId = 'binanceus'
          ,exchangeClass = ccxt[exchangeId]
          ,exchange = new exchangeClass ({
            'apiKey': process.env.BINANCE_US_API_KEY,
            'secret': process.env.BINANCE_US_SECRET_KEY,
        })
    // exchange.setSandboxMode (true) // enable sandbox mode
    console.log(await exchange.fetchBalance())
    
})();