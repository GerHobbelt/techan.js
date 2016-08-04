'use strict';

module.exports = function(accessor_q, plot, plotMixin) {  // Injected dependencies
  return function() { // Closure function
    var p = {},  // Container for private, direct access mixed in variables
        qLine = plot.pathLine();

    function q(g) {
      var group = plot.groupSelect(g, plot.dataMapper.array, p.accessor.d);
      group.entry.append('path').attr('class', 'q');
      q.refresh(g);
    }

    q.refresh = function(g) {
      refresh(g, p.accessor, p.xScale, p.yScale, plot, qLine);
    };

    function binder() {
      qLine.init(p.accessor.d, p.xScale, p.accessor.r, p.yScale);
    }

    // Mixin 'superclass' methods and variables
    plotMixin(q, p).plot(accessor_q(), binder);
    binder();

    return q;
  };
};

function refresh(g, accessor, x, y, plot, qLine) {
  g.selectAll('path.q').attr('d', qLine);
}
