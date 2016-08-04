'use strict';

module.exports = function(indicatorMixin, accessor) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        cumul_total,
        cumul_volume,
        prev_date;

    function indicator(data) {
      indicator.init();
      return data.map(vwap).filter(function(d) { return d.value !== null; });
    }

    indicator.init = function() {
      cumul_total = 0;
      cumul_volume = 0;
      return indicator;
    };

    function vwap(d, i) {
      // VWAP restarts when day changes
      if (i > 0 && prev_date.getDate() != p.accessor.d(d).getDate()) {
        cumul_total = 0;
	cumul_volume = 0;
      }

      cumul_total += p.accessor(d) * p.accessor.v(d);
      cumul_volume += p.accessor.v(d);
      prev_date = p.accessor.d(d);

      if (!cumul_volume)
        return { date: p.accessor.d(d) };

      return { date: p.accessor.d(d), value: cumul_total / cumul_volume };
    }

    // Mixin 'superclass' methods and variables
    indicatorMixin(indicator, p)
      .accessor(accessor())
      .period(1);

    return indicator;
  };
};
