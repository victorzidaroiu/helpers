"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathOr = pathOr;
function pathOr(object, defaultValue) {
  for (var _len = arguments.length, keys = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }

  return keys.reduce(function (obj, key) {
    return (obj || {})[key];
  }, object) || defaultValue;
}