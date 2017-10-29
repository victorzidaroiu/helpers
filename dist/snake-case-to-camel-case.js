'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.snakeCaseToCamelCase = snakeCaseToCamelCase;

var _decapitalize = require('./decapitalize');

var _capitalize = require('./capitalize');

function snakeCaseToCamelCase() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var capitalizedWords = string.split('_').map(function (word) {
    return (0, _capitalize.capitalize)(word);
  });

  return (0, _decapitalize.decapitalize)(capitalizedWords.join(''));
}