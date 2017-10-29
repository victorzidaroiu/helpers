"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Timer = exports.Timer = function () {
  function Timer(name, logger) {
    _classCallCheck(this, Timer);

    this.name = name;
    this.startTime = Date.now();
    this.endTime = null;
    this.logger = logger || { debug: function debug() {} };
  }

  _createClass(Timer, [{
    key: "end",
    value: function end() {
      this.endTime = Date.now();
      this.logger.debug(this.name + " took " + this.elapsed + " ms");
    }
  }, {
    key: "elapsed",
    get: function get() {
      return (this.endTime || Date.now()) - this.startTime;
    }
  }]);

  return Timer;
}();