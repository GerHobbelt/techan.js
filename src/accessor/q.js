'use strict';

module.exports = function() {
  var date = function(d) { return d.date; },
      q = function(d) { return d.q; };

  function accessor(d) {
    return accessor.r(d);
  }

  // TODO use d3.rebind to obtain this from 'super class'
  accessor.date = function(_) {
    if (!arguments.length) return date;
    date = _;
    return bind();
  };

  accessor.q = function(_) {
    if (!arguments.length) return q;
    q = _;
    return bind();
  };

  function bind() {
    // TODO These methods will need to know if the variables are functions or values and execute as such
    accessor.d = date;
    accessor.r = q;
    return accessor;
  }

  return bind();
};
