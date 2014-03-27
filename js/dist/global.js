/*
  Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
*/

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                                 ? this
                                 : oThis,
                               aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

/*!
 * eventie v1.0.5
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( this );

/*!
 * docReady
 * Cross browser DOMContentLoaded event emitter
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false */

( function( window ) {

'use strict';

var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function init( event ) {
  // bail if IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }
  docReady.isReady = true;

  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  eventie.bind( document, 'DOMContentLoaded', init );
  eventie.bind( document, 'readystatechange', init );
  eventie.bind( window, 'load', init );

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  // if RequireJS, then doc is already ready
  docReady.isReady = typeof requirejs === 'function';
  define( [ 'eventie/eventie' ], defineDocReady );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( this );

/*! Apollo v1.3.0 | (c) 2014 @toddmotto | MIT license | github.com/toddmotto/apollo */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['Apollo'], factory);
  } else {
    root.Apollo = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  if (document.documentElement.classList) {
    exports.hasClass = function (elem, className) {
      return elem.classList.contains(className);
    };
    exports.addClass = function (elem, className) {
      elem.classList.add(className);
    };
    exports.removeClass = function (elem, className) {
      elem.classList.remove(className);
    };
    exports.toggleClass = function (elem, className) {
      elem.classList.toggle(className);
    };
  } else {
    exports.hasClass = function (elem, className) {
      return new RegExp('(^|\\s)' + className + '(\\s|$)').test(elem.className);
    };
    exports.addClass = function (elem, className) {
      if (!exports.hasClass(elem, className)) {
        elem.className += (elem.className ? ' ' : '') + className;
      }
    };
    exports.removeClass = function (elem, className) {
      if (exports.hasClass(elem, className)) {
        elem.className = elem.className.replace(new RegExp('(^|\\s)*' + className + '(\\s|$)*', 'g'), '');
      }
    };
    exports.toggleClass = function (elem, className) {
      var toggle = exports.hasClass(elem, className) ? exports.removeClass : exports.addClass;
      toggle(elem, className);
    };
  }

  return exports;

});

/*! Stratos v1.4.0 | (c) 2014 @toddmotto | github.com/toddmotto/stratos */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.Stratos = factory();
  }
})(this, function () {

  'use strict';

  var exports = {};

  exports.has = function (object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
  };

  exports.type = function (object) {
    return Object.prototype.toString.call(object);
  };

  exports.add = function (object, key, val) {
    object[key] = val;
  };

  exports.remove = function (object, key) {
    if (exports.has(object, key)) {
      delete object[key];
    }
  };

  exports.extend = function () {
    var process = function (target, source) {
      for (var key in source) {
        if (exports.has(source, key)) {
          target[key] = source[key];
        }
      }
      return target;
    };
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      result = process(result, arguments[i]);
    }
    return result;
  };

  exports.destroy = function (object) {
    for (var key in object) {
      exports.remove(object, key);
    }
  };

  exports.keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
      if (exports.has(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  exports.vals = function (object) {
    var vals = exports.keys(object);
    for (var i = 0; i < vals.length; i++) {
      vals[i] = object[vals[i]];
    }
    return vals;
  };

  exports.toJSON = function (object) {
    return JSON.stringify(object);
  };

  exports.fromJSON = function (object) {
    return JSON.parse(object);
  };

  return exports;

});


// *   Viewport Helpers
// * ---------------------
// * 
// * ---------------------
/* A module */
/*Specify global stuff here - e.g. a document.ready? */