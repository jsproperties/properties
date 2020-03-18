"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = stringify;
exports.stringifyFromEntries = stringifyFromEntries;
exports.stringifyFromProperties = stringifyFromProperties;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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