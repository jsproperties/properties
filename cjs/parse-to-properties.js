"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseToProperties = parseToProperties;
exports.entriesToProperties = entriesToProperties;

var _parseToEntries = require("./parse-to-entries");

var _options = require("./options");

var parseToPropertiesOptions = ['namespace' // Parse dot separated keys as namespaced
];
/**
 * Parse .properties file content to a properties object, with property key as
 * the key and property element as the value.
 *
 * Alias of parseToProperties
 *
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {object} Parsed result in properties object.
 */

function parse(input, options) {
  return parseToProperties(input, options);
}
/**
 * Parse .properties file content to a properties object, with property key as
 * the key and property element as the value.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {object} Parsed result in properties object.
 */


function parseToProperties(input, options) {
  var entries = (0, _parseToEntries.parseToEntries)(input);
  return entriesToProperties(entries, options);
}
/**
 * Convert parsed entries to a properties object.
 * @param {Array} entries Entries to be converted.
 * @param {Object} [options] Options for converting
 * @returns {object} Converted properties object.
 */


function entriesToProperties(entries, options) {
  options = (0, _options.parseOptions)(options, parseToPropertiesOptions);
  var properties = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var entry = _step.value;
      // Only key and element are relevant
      var key = entry.key,
          element = entry.element; // Blank and comment lines are ignored

      if (key === null) return "continue"; // Parsed array adheres to what user authored,
      // while in properties, we need to unescape backslashes.

      key = unescapeProperty(key);
      element = unescapeProperty(element); // Assign to properties by key, later entries overwrite previous ones

      if (options.namespace) {
        var namespacedKey = parseNamespace(key);
        var property = properties;
        namespacedKey.forEach(function (name, i) {
          // This is the last component of the key
          if (i === namespacedKey.length - 1) {
            property[name] = element;
            return;
          } // This is part of the namespace


          if (name in property) {
            // Namespace itself and keys under it may all have values
            // e.g. "foo = bar" "foo.qux = quux"
            if (typeof property[name] === 'string') {
              // Make value of namespace a value of an empty key under the
              // namespace
              property[name] = {
                '': property[name]
              };
            }
          } else {
            property[name] = {};
          }

          property = property[name];
        });
      } else {
        properties[key] = element;
      }
    };

    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return properties;
}
/**
 * Unescape backslash escaped sequences.
 * @param {string} input String to be mutated.
 * @returns {string} Unescaped input.
 * @throws {SyntaxError} Invalid Unicode escape sequence
 */


function unescapeProperty(input) {
  // Unescape unicode
  var output = input.replace(/\\u([0-9A-Fa-f]{0,4})/g, function (match, code) {
    if (code.length !== 4) throw new SyntaxError('Invalid Unicode escape sequence');
    return String.fromCharCode(parseInt(code, 16));
  }); // Unescape other single character

  return output.replace(/\\(.)/g, function (match, escaped) {
    switch (escaped) {
      case 'f':
        return '\f';

      case 'n':
        return '\n';

      case 'r':
        return '\r';

      case 't':
        return '\t';

      default:
        return escaped;
    }
  });
}
/**
 * Turn dot separated string into an array of relevant components.
 * @param {string} key The dot separated string.
 * @returns {Array} Array of key components.
 */


function parseNamespace(key) {
  return key.split('.');
}
//# sourceMappingURL=parse-to-properties.js.map