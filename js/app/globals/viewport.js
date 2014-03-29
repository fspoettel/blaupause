
// *   Viewport Helpers
// * ---------------------
// *
// * ---------------------

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['Viewport'], factory);
  } else {
    root.Viewport = factory();
  }
})(this, function () {

  'use strict';

  exports.visble = function(el) {
    var rect = el.getBoundingClientRect();

       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       );
  }

  var exports = {};

  return exports;

});

