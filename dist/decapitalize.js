'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decapitalize = decapitalize;
function decapitalize() {
  var word = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return word[0].toLowerCase() + word.slice(1);
}