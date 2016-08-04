'use strict';

module.exports = function(indicatorMixin, accessor_ohlc, indicator_ema) {  // Injected dependencies
  return function() { // Closure function
    var p = {},q=indicator_ema(); // Container for private, direct access mixed in variables

    function indicator(data) {
      q.accessor(indicator.accessor()).period(p.period).init();
      return data.filter(function(d) { return d.q !== null; });
    }

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p)
      .accessor(accessor_ohlc())
      .period(14);

    return indicator;
  };
};

function datum(date, q) { return { date: date, q: q}; }
