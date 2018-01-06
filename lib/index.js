'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToEntries = parseToEntries;
exports.parseToProperties = parseToProperties;
exports.entriesToProperties = entriesToProperties;

var _properties = require('./properties.pegjs');

var PropertiesParser = _interopRequireWildcard(_properties);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var parseToEntriesOptions = ['all', // Include empty and blank lines
'original', // Include original logical line in output
'eol', // Include eol (end of line) in output
'location']; // Import PEG.js generated parser through pegjs-loader


var parseToPropertiesOptions = ['namespace'];

/**
 * Parse .properties file content to an array of object containing key, element,
 * and optionally original line and location.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {Array} Parsed result in array.
 */
function parseToEntries(input, options) {
  options = parseOptions(options, parseToEntriesOptions);
  return PropertiesParser.parse(input, options);
}

/**
 * Parse .properties file content to a properties object, with property key as
 * the key and property element as the value.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {object} Parsed result in properties object.
 */
function parseToProperties(input, options) {
  var entries = parseToEntries(input);
  return entriesToProperties(entries, options);
}

/**
 * Convert parsed entries to a properties object.
 * @param {Array} entries Entries to be converted.
 * @param {Object} [options] Options for converting
 * @returns {object} Converted properties object.
 */
function entriesToProperties(entries, options) {
  options = parseOptions(options, parseToPropertiesOptions);
  var properties = {};

  var _loop = function _loop(entry) {
    // Only key and element are relevant
    var key = entry.key,
        element = entry.element;

    // Blank and comment lines are ignored

    if (key === null) return 'continue';

    // Parsed array adheres to what user authored,
    // while in properties, we need to unescape backslashes.
    key = unescapeProperty(key);
    element = unescapeProperty(element);

    // Assign to properties by key, later entries overwrite previous ones
    if (options.namespace) {
      var namespacedKey = parseNamespace(key);
      var property = properties;
      namespacedKey.forEach(function (name, i) {
        // This is the last component of the key
        if (i === namespacedKey.length - 1) {
          property[name] = element;
          return;
        }

        // This is part of the namespace
        if (name in property) {
          // Namespace itself and keys under it may all have values
          // e.g. "foo = bar" "foo.qux = quux"
          if (typeof property[name] === 'string') {
            // Make value of namespace a value of an empty key under the
            // namespace
            property[name] = { '': property[name] };
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

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var _ret = _loop(entry);

      if (_ret === 'continue') continue;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
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
 * Normalize options.
 * @param {*} options Options to be parsed; it can be object, boolean, null or undefined.
 * @param {!Array<string>} availableOptionNames All possible option names.
 * @returns {object} Normalized options.
 */
function parseOptions(options, availableOptionNames) {
  // Fix `null`, `false` as the options
  options = options || {};

  // `true` is a shortcut to turn all options on
  if (options === true) {
    options = {};
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = availableOptionNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var option = _step2.value;

        options[option] = true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return options;
  }

  // { '': true } is also a shorcut to turn all options on, while allow
  // individual options to be turned off by setting them explicitly.
  if (typeof options[''] === 'boolean') {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = availableOptionNames[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _option = _step3.value;

        if (!(_option in options)) {
          options[_option] = options[''];
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  return options;
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
  });

  // Unescape other single character
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

// Export everything this module exports as a default export
exports.default = exports;
//# sourceMappingURL=index.js.map