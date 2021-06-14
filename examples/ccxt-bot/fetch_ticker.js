const ccxt = require ('ccxt');

(async function(){
    const exchange = new ccxt.binanceus();
    const ticker = await exchange.fetchTicker("ETH/USD");
    // console.log(ticker);
    const ohlc = await exchange.fetchOHLCV("ETH/USDT","15m",undefined,5);

    ohlc.forEach(candle => {
        console.log(candle)
    });
})();
