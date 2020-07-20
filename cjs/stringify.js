"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
exports.stringifyFromEntries = stringifyFromEntries;
exports.stringifyFromProperties = stringifyFromProperties;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Stringify properties object or entries to .properties file content.
 * @param {Array | Object} input Properties object or entries.
 * @param {Object} [options] Stringify options.
 * @returns {string} .properties file content.
 */
function stringify(input, options) {
  if (input instanceof Array) {
    return stringifyFromEntries(input, options);
  }

  return stringifyFromProperties(input, options);
}
/**
 * Stringify entries to .properties file content.
 * @param {Array} entries Property entries.
 * @param {Object} [options] Stringify options, used when specified fields are
 *     not available in each entry.
 * @returns {string} .properties file content.
 */


function stringifyFromEntries(entries, options) {
  options = parseOptions(options);
  var output = '';
  /* Do we have no final EOL? */

  var noeol = false;
  /* Detected EOL in file */

  var detectedEol = null;

  var _iterator = _createForOfIteratorHelper(entries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var key = entry.key,
          element = entry.element;
      var sep = entry.sep || options.sep;
      var indent = entry.indent || '';
      var eol = 'eol' in entry ? entry.eol : detectedEol || options.eol; // Prefer detected eol
      // Detect used EOL

      if (entry.eol) {
        detectedEol = entry.eol;
      } // Final line has no eol, and we are appending more lines.
      // Need to add an eol first.


      if (noeol) {
        output += eol;
      }

      if (!eol) {
        noeol = true;
      } // Prefer original if available


      if (entry.original != null) {
        output += entry.original;
      } else {
        // Output a blank line for blank and comment entry
        output += key == null || element == null ? '' : indent + key + sep + element;
      } // Keep noeol state


      if (!noeol) {
        output += eol;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return output;
}
/**
 * Stringify properties object to .properties file content.
 * @param {Object} properties Properties object.
 * @param {Object} [options] Stringify options.
 * @returns {string} .properties file content.
 */


function stringifyFromProperties(properties, options) {
  options = parseOptions(options);
  var output = '';

  for (var key in properties) {
    var element = properties[key];

    if (typeof element === 'string') {
      if (options.namespace) {
        output += escapeKey(options.namespace); // Add a dot after namespace if key is not empty

        if (key) {
          output += '.';
        }
      }

      output += escapeKey(key) + options.sep + escapeElement(element) + options.eol;
    } else {
      // Namespaced properties
      var namespace = options.namespace ? options.namespace + '.' + key : key;
      output += stringifyFromProperties(element, _extends({}, options, {
        namespace: namespace
      }));
    }
  }

  return output;
}
/**
 * Normalize user provided options.
 * @param {*} options Original options.
 * @returns {Object} Normalized options.
 */


function parseOptions(options) {
  options = options || {};
  options.sep = options.sep || ' = ';
  options.eol = options.eol || '\r\n';
  return options;
}
/**
 * Escape special characters in property key.
 * @param {string} key Key to be mutated.
 * @returns {string} Escaped key.
 */


function escapeKey(key) {
  return key.replace(/[\s\S]/g, function (match) {
    switch (match) {
      case '=':
        return '\\=';

      case ':':
        return '\\:';

      case ' ':
        return '\\ ';

      default:
        return escapeElement(match);
    }
  });
}
/**
 * Escape special characters in property element.
 * @param {string} element Element to be mutated.
 * @returns {string} Escaped element.
 */


function escapeElement(element) {
  return element.replace(/[\s\S]/g, function (match) {
    switch (match) {
      case '\\':
        return '\\\\';

      case '\f':
        return '\\f';

      case '\n':
        return '\\n';

      case '\r':
        return '\\r';

      case '\t':
        return '\\t';

      default:
        return match;
    }
  });
}
//# sourceMappingURL=stringify.js.map