"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOptions = parseOptions;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Normalize options.
 * @param {*} options Options to be parsed; it can be object, boolean, null or undefined.
 * @param {!Array<string>} availableOptionNames All possible option names.
 * @returns {object} Normalized options.
 */
function parseOptions(options, availableOptionNames) {
  // Fix `null`, `false` as the options
  options = options || {}; // `true` is a shortcut to turn all options on

  if (options === true) {
    options = {};

    var _iterator = _createForOfIteratorHelper(availableOptionNames),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var option = _step.value;
        options[option] = true;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return options;
  } // { '': true } is also a shorcut to turn all options on, while allow
  // individual options to be turned off by setting them explicitly.


  if (typeof options[''] === 'boolean') {
    var _iterator2 = _createForOfIteratorHelper(availableOptionNames),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _option = _step2.value;

        if (!(_option in options)) {
          options[_option] = options[''];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return options;
}
//# sourceMappingURL=options.js.map