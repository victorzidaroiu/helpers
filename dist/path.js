"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.path = path;
function path(object) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return keys.reduce(function (obj, key) {
    return (obj || {})[key];
  }, object);
}