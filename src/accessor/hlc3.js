'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      open = function(d) { return d.open; },
      high = function(d) { return d.high; },
      low = function(d) { return d.low; },
      close = function(d) { return d.close;},
      volume = function(d) { return d.volume; };

  function accessor(d) {
    return (accessor.h(d) + accessor.l(d) + accessor.c(d)) / 3;
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.open = function(_) {
    if (!arguments.length) return open;
    open = _;
    return bind();
  };

  accessor.high = function(_) {
    if (!arguments.length) return high;
    high = _;
    return bind();
  };

  accessor.low = function(_) {
    if (!arguments.length) return low;
    low = _;
    return bind();
  };

  accessor.close = function(_) {
    if (!arguments.length) return close;
    close = _;
    return bind();
  };

  accessor.volume = function(_) {
    if (!arguments.length) return volume;
    volume = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.o = open;
    accessor.h = high;
    accessor.l = low;
    accessor.c = close;
    accessor.v = volume;

    return accessor;
  }

  return bind();
};
