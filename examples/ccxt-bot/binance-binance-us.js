'use strict';
require("dotenv").config();
const ccxt = require ('ccxt');

(async function () {
    const exchangeId = 'binance'
        , exchangeClass = ccxt[exchangeId]
        , exchange = new exchangeClass ({
            'apiKey': process.env.BINANCE_API_KEY,
            'secret': process.env.BINANCE_SECRET_KEY,
        })
        console.log("Binance",exchange)

        const exchangeIdUS = 'binanceus'
        , exchangeClassUS = ccxt[exchangeIdUS]
        , exchangeUS = new exchangeClassUS ({
            'apiKey': process.env.BINANCE_US_API_KEY,
            'secret': process.env.BINANCE_US_SECRET_KEY,
        })
        console.log("Binance US",await exchangeUS.fetchBalance())
})();