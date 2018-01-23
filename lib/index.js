'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parseToEntries = require('./parse-to-entries');

Object.keys(_parseToEntries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parseToEntries[key];
    }
  });
});

var _parseToProperties = require('./parse-to-properties');

Object.keys(_parseToProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parseToProperties[key];
    }
  });
});

var _stringify = require('./stringify');

Object.keys(_stringify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringify[key];
    }
  });
});


// Export everything this module exports as a default export
exports.default = exports;
//# sourceMappingURL=index.js.map