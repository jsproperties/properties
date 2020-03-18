"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports["default"] = void 0;

var _parseToEntries = require("./parse-to-entries");

Object.keys(_parseToEntries).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parseToEntries[key];
    }
  });
});

var _parseToProperties = require("./parse-to-properties");

Object.keys(_parseToProperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _parseToProperties[key];
    }
  });
});

var _stringify = require("./stringify");

Object.keys(_stringify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringify[key];
    }
  });
});
// Export everything this module exports as a default export
var _default = exports;
exports["default"] = _default;
//# sourceMappingURL=index.js.map