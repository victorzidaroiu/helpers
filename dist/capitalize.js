'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
function capitalize() {
  var word = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return word[0].toUpperCase() + word.slice(1);
}