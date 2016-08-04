'use strict';

// TODO Could these be singletons? Generally will be accessing the same data and data structures at the same time
// TODO Provide IDs for all accessors. Default to date, but at least provide an option
module.exports = function() {
  return {
    atrtrailingstop: require('./atrtrailingstop'),
    ichimoku: require('./ichimoku'),
    macd: require('./macd'),
    ohlc: require('./ohlc'),
    hl2: require('./hl2'),
    hlc3: require('./hlc3'),
    ohlc4: require('./ohlc4'),
    rsi: require('./rsi'),
    q: require('./q'),
    trendline: require('./trendline'),
    value: require('./value'),
    volume: require('./volume'),
    tick: require('./tick'),
    trade: require('./trade'),
    adx: require('./adx'),
    aroon: require('./aroon'),
    stochastic: require('./stochastic'),
    williams: require('./williams'),
    bollinger: require('./bollinger')
  };
};
