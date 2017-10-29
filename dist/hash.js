'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = hash;

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hash(data) {
  return _crypto2.default.createHash('sha512').update(data).digest('hex').toUpperCase();
}