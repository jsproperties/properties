(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Properties"] = factory();
	else
		root["Properties"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: parseToEntries, parse, parseToProperties, entriesToProperties, stringify, stringifyFromEntries, stringifyFromProperties, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_to_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-to-entries */ "./src/parse-to-entries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseToEntries", function() { return _parse_to_entries__WEBPACK_IMPORTED_MODULE_0__["parseToEntries"]; });

/* harmony import */ var _parse_to_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-to-properties */ "./src/parse-to-properties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_to_properties__WEBPACK_IMPORTED_MODULE_1__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseToProperties", function() { return _parse_to_properties__WEBPACK_IMPORTED_MODULE_1__["parseToProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "entriesToProperties", function() { return _parse_to_properties__WEBPACK_IMPORTED_MODULE_1__["entriesToProperties"]; });

/* harmony import */ var _stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify */ "./src/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify__WEBPACK_IMPORTED_MODULE_2__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyFromEntries", function() { return _stringify__WEBPACK_IMPORTED_MODULE_2__["stringifyFromEntries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyFromProperties", function() { return _stringify__WEBPACK_IMPORTED_MODULE_2__["stringifyFromProperties"]; });



 // Export everything this module exports as a default export

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/options.js":
/*!************************!*\
  !*** ./src/options.js ***!
  \************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

/***/ }),

/***/ "./src/parse-to-entries.js":
/*!*********************************!*\
  !*** ./src/parse-to-entries.js ***!
  \*********************************/
/*! exports provided: parseToEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToEntries", function() { return parseToEntries; });
/* harmony import */ var _properties_pegjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties.pegjs */ "./src/properties.pegjs");
/* harmony import */ var _properties_pegjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_properties_pegjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.js");
// Import PEG.js generated parser through pegjs-loader


var parseToEntriesOptions = ['all', // Include empty and blank lines
'sep', // Include separator in output
'indent', // Include indentation in output
'eol', // Include eol (end of line) in output
'original', // Include original logical line in output
'location' // Include location info in output
];
/**
 * Parse .properties file content to an array of object containing key, element,
 * and optionally original line and location.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {Array} Parsed result in array.
 */

function parseToEntries(input, options) {
  options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["parseOptions"])(options, parseToEntriesOptions);
  return _properties_pegjs__WEBPACK_IMPORTED_MODULE_0__["parse"](input, options);
}

/***/ }),

/***/ "./src/parse-to-properties.js":
/*!************************************!*\
  !*** ./src/parse-to-properties.js ***!
  \************************************/
/*! exports provided: parse, parseToProperties, entriesToProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToProperties", function() { return parseToProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entriesToProperties", function() { return entriesToProperties; });
/* harmony import */ var _parse_to_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-to-entries */ "./src/parse-to-entries.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./src/options.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



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
  var entries = Object(_parse_to_entries__WEBPACK_IMPORTED_MODULE_0__["parseToEntries"])(input);
  return entriesToProperties(entries, options);
}
/**
 * Convert parsed entries to a properties object.
 * @param {Array} entries Entries to be converted.
 * @param {Object} [options] Options for converting
 * @returns {object} Converted properties object.
 */

function entriesToProperties(entries, options) {
  options = Object(_options__WEBPACK_IMPORTED_MODULE_1__["parseOptions"])(options, parseToPropertiesOptions);
  var properties = {};

  var _iterator = _createForOfIteratorHelper(entries),
      _step;

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

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _ret = _loop();

      if (_ret === "continue") continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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

/***/ }),

/***/ "./src/properties.pegjs":
/*!******************************!*\
  !*** ./src/properties.pegjs ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */


function peg$subclass(child, parent) {
  function ctor() {
    this.constructor = child;
  }

  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message = message;
  this.expected = expected;
  this.found = found;
  this.location = location;
  this.name = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function (expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function literal(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },
    "class": function _class(expectation) {
      var escapedParts = "",
          i;

      for (i = 0; i < expectation.parts.length; i++) {
        escapedParts += expectation.parts[i] instanceof Array ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1]) : classEscape(expectation.parts[i]);
      }

      return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
    },
    any: function any(expectation) {
      return "any character";
    },
    end: function end(expectation) {
      return "end of input";
    },
    other: function other(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function classEscape(s) {
    return s.replace(/\\/g, '\\\\').replace(/\]/g, '\\]').replace(/\^/g, '\\^').replace(/-/g, '\\-').replace(/\0/g, '\\0').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\x00-\x0F]/g, function (ch) {
      return '\\x0' + hex(ch);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (ch) {
      return '\\x' + hex(ch);
    });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i,
        j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }

      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},
      peg$startRuleFunctions = {
    PropertiesFile: peg$parsePropertiesFile
  },
      peg$startRuleFunction = peg$parsePropertiesFile,
      peg$c0 = function peg$c0(lines, trailing) {
    // Add the trailing line, i.e. line without eol
    if (trailing) lines.push(trailing); // Filter out blank and comment lines

    return lines.filter(function (x) {
      return x !== undefined;
    });
  },
      peg$c1 = function peg$c1(line, eol) {
    if (!line) return;
    if (options.eol) line.eol = eol;
    return line;
  },
      peg$c2 = function peg$c2(indent, line) {
    if (!line) {
      if (options.all) {
        line = {
          key: null,
          element: null
        };
        if (options.sep) line.sep = null;
      } else {
        return undefined;
      }
    }

    if (options.indent) line.indent = indent;
    if (options.eol) line.eol = null;
    if (options.original) line.original = text();
    if (options.location) line.location = location();
    return line;
  },
      peg$c3 = function peg$c3(line) {
    // If the offset of start and end match, there is actually no trailing
    // line; TrailingLine is matched in this case because a line itself
    // (not counting eol) may contain no characters.
    return location().start.offset === location().end.offset ? undefined : line;
  },
      peg$c4 = function peg$c4() {},
      peg$c5 = peg$otherExpectation("CommentCharacter"),
      peg$c6 = /^[#!]/,
      peg$c7 = peg$classExpectation(["#", "!"], false, false),
      peg$c8 = function peg$c8(key, sep, element) {
    // Blank Line:
    // No need to test element, as whenever there is an element, there is a separator.
    // Note: Key and element can be empty at the same time.
    if (!key && !sep) return; // Property Entry:
    // Return an empty string for key and/or element if empty.

    var property = {
      key: key || "",
      element: element || ""
    };
    if (options.sep) property.sep = sep;
    return property;
  },
      peg$c9 = peg$otherExpectation("PropertyKey"),
      peg$c10 = /^[^\r\n\\:=]/,
      peg$c11 = peg$classExpectation(["\r", "\n", "\\", ":", "="], true, false),
      peg$c12 = function peg$c12(a) {},
      peg$c13 = /^[^ \t\f\r\n\\:=]/,
      peg$c14 = peg$classExpectation([" ", "\t", "\f", "\r", "\n", "\\", ":", "="], true, false),
      peg$c15 = function peg$c15(a, b) {
    return a + b.join('');
  },
      peg$c16 = peg$otherExpectation("PropertyElement"),
      peg$c17 = function peg$c17(v) {
    return v.join('');
  },
      peg$c18 = peg$otherExpectation("KeyElementSeparator"),
      peg$c19 = /^[:=]/,
      peg$c20 = peg$classExpectation([":", "="], false, false),
      peg$c21 = peg$otherExpectation("White Space"),
      peg$c22 = /^[ \t\f]/,
      peg$c23 = peg$classExpectation([" ", "\t", "\f"], false, false),
      peg$c24 = peg$otherExpectation("White Spaces"),
      peg$c25 = peg$otherExpectation("Character"),
      peg$c26 = /^[^\r\n]/,
      peg$c27 = peg$classExpectation(["\r", "\n"], true, false),
      peg$c28 = function peg$c28(c) {
    // Ignore final dangling backslash
    return c === "\\" ? undefined : c;
  },
      peg$c29 = peg$otherExpectation("Line Terminator"),
      peg$c30 = "\r\n",
      peg$c31 = peg$literalExpectation("\r\n", false),
      peg$c32 = /^[\n\r]/,
      peg$c33 = peg$classExpectation(["\n", "\r"], false, false),
      peg$c34 = peg$otherExpectation("Line Continuation"),
      peg$c35 = "\\",
      peg$c36 = peg$literalExpectation("\\", false),
      peg$c37 = peg$otherExpectation("Escape Sequence"),
      peg$c38 = peg$anyExpectation(),
      peg$c39 = function peg$c39() {
    return text();
  },
      peg$currPos = 0,
      peg$savedPos = 0,
      peg$posDetailsCache = [{
    line: 1,
    column: 1
  }],
      peg$maxFailPos = 0,
      peg$maxFailExpected = [],
      peg$silentFails = 0,
      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location);
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos);
    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return {
      type: "literal",
      text: text,
      ignoreCase: ignoreCase
    };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return {
      type: "class",
      parts: parts,
      inverted: inverted,
      ignoreCase: ignoreCase
    };
  }

  function peg$anyExpectation() {
    return {
      type: "any"
    };
  }

  function peg$endExpectation() {
    return {
      type: "end"
    };
  }

  function peg$otherExpectation(description) {
    return {
      type: "other",
      description: description
    };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos],
        p;

    if (details) {
      return details;
    } else {
      p = pos - 1;

      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails = peg$computePosDetails(endPos);
    return {
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) {
      return;
    }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected, found), expected, found, location);
  }

  function peg$parsePropertiesFile() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseFullLine();

    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseFullLine();
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseTrailingLine();

      if (s2 === peg$FAILED) {
        s2 = null;
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseFullLine() {
    var s0, s1, s2;
    s0 = peg$currPos;
    s1 = peg$parseLine();

    if (s1 !== peg$FAILED) {
      s2 = peg$parseNL();

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseLine() {
    var s0, s1, s2, s3, s4, s5;
    s0 = peg$currPos;
    s1 = peg$currPos;
    s2 = peg$currPos;
    s3 = peg$parse_();

    if (s3 !== peg$FAILED) {
      s4 = [];
      s5 = peg$parseCONT();

      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parseCONT();
      }

      if (s4 !== peg$FAILED) {
        s3 = [s3, s4];
        s2 = s3;
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }

    if (s2 !== peg$FAILED) {
      s1 = input.substring(s1, peg$currPos);
    } else {
      s1 = s2;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseComment();

      if (s2 === peg$FAILED) {
        s2 = peg$parsePropertyEntry();
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseTrailingLine() {
    var s0, s1;
    s0 = peg$currPos;
    s1 = peg$parseLine();

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c3(s1);
    }

    s0 = s1;
    return s0;
  }

  function peg$parseComment() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parseCommentCharacter();

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseC();

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseC();
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c4();
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCommentCharacter() {
    var s0, s1;
    peg$silentFails++;

    if (peg$c6.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c7);
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c5);
      }
    }

    return s0;
  }

  function peg$parsePropertyEntry() {
    var s0, s1, s2, s3;
    s0 = peg$currPos;
    s1 = peg$parsePropertyKey();

    if (s1 === peg$FAILED) {
      s1 = null;
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parseKeyElementSeparator();

      if (s3 === peg$FAILED) {
        s3 = null;
      }

      if (s3 !== peg$FAILED) {
        s2 = input.substring(s2, peg$currPos);
      } else {
        s2 = s3;
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parsePropertyElement();

        if (s3 === peg$FAILED) {
          s3 = null;
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c8(s1, s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsePropertyKey() {
    var s0, s1, s2, s3, s4;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseESCAPE();

    if (s1 === peg$FAILED) {
      if (peg$c10.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c11);
        }
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$currPos;
      s4 = peg$parseCONT();

      if (s4 !== peg$FAILED) {
        peg$savedPos = s3;
        s4 = peg$c12(s1);
      }

      s3 = s4;

      if (s3 === peg$FAILED) {
        s3 = peg$parseESCAPE();

        if (s3 === peg$FAILED) {
          if (peg$c13.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c14);
            }
          }
        }
      }

      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$currPos;
        s4 = peg$parseCONT();

        if (s4 !== peg$FAILED) {
          peg$savedPos = s3;
          s4 = peg$c12(s1);
        }

        s3 = s4;

        if (s3 === peg$FAILED) {
          s3 = peg$parseESCAPE();

          if (s3 === peg$FAILED) {
            if (peg$c13.test(input.charAt(peg$currPos))) {
              s3 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s3 = peg$FAILED;

              if (peg$silentFails === 0) {
                peg$fail(peg$c14);
              }
            }
          }
        }
      }

      if (s2 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c15(s1, s2);
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c9);
      }
    }

    return s0;
  }

  function peg$parsePropertyElement() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$parseCONT();

    if (s3 !== peg$FAILED) {
      peg$savedPos = s2;
      s3 = peg$c4();
    }

    s2 = s3;

    if (s2 === peg$FAILED) {
      s2 = peg$parseESCAPE();

      if (s2 === peg$FAILED) {
        s2 = peg$parseC();
      }
    }

    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$parseCONT();

        if (s3 !== peg$FAILED) {
          peg$savedPos = s2;
          s3 = peg$c4();
        }

        s2 = s3;

        if (s2 === peg$FAILED) {
          s2 = peg$parseESCAPE();

          if (s2 === peg$FAILED) {
            s2 = peg$parseC();
          }
        }
      }
    } else {
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c17(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c16);
      }
    }

    return s0;
  }

  function peg$parseKeyElementSeparator() {
    var s0, s1, s2, s3, s4, s5;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseCONT();

    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parseCONT();
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$currPos;
      s3 = peg$parse_();

      if (s3 !== peg$FAILED) {
        s4 = [];
        s5 = peg$parseCONT();

        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parseCONT();
        }

        if (s4 !== peg$FAILED) {
          if (peg$c19.test(input.charAt(peg$currPos))) {
            s5 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s5 = peg$FAILED;

            if (peg$silentFails === 0) {
              peg$fail(peg$c20);
            }
          }

          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }

      if (s2 === peg$FAILED) {
        s2 = peg$parseWS();
      }

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseCONT();

          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseCONT();
          }

          if (s4 !== peg$FAILED) {
            s1 = [s1, s2, s3, s4];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c18);
      }
    }

    return s0;
  }

  function peg$parseWS() {
    var s0, s1;
    peg$silentFails++;

    if (peg$c22.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c23);
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c21);
      }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1;
    peg$silentFails++;
    s0 = [];
    s1 = peg$parseWS();

    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseWS();
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c24);
      }
    }

    return s0;
  }

  function peg$parseC() {
    var s0, s1;
    peg$silentFails++;
    s0 = peg$currPos;

    if (peg$c26.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c27);
      }
    }

    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c28(s1);
    }

    s0 = s1;
    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c25);
      }
    }

    return s0;
  }

  function peg$parseNL() {
    var s0, s1;
    peg$silentFails++;

    if (input.substr(peg$currPos, 2) === peg$c30) {
      s0 = peg$c30;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c31);
      }
    }

    if (s0 === peg$FAILED) {
      if (peg$c32.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c33);
        }
      }
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c29);
      }
    }

    return s0;
  }

  function peg$parseCONT() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;

    if (input.charCodeAt(peg$currPos) === 92) {
      s1 = peg$c35;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c36);
      }
    }

    if (s1 !== peg$FAILED) {
      s2 = peg$parseNL();

      if (s2 !== peg$FAILED) {
        s3 = peg$parse_();

        if (s3 !== peg$FAILED) {
          s1 = [s1, s2, s3];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c34);
      }
    }

    return s0;
  }

  function peg$parseESCAPE() {
    var s0, s1, s2, s3;
    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$currPos;
    peg$silentFails++;
    s2 = peg$parseCONT();
    peg$silentFails--;

    if (s2 === peg$FAILED) {
      s1 = void 0;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }

    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 92) {
        s2 = peg$c35;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;

        if (peg$silentFails === 0) {
          peg$fail(peg$c36);
        }
      }

      if (s2 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;

          if (peg$silentFails === 0) {
            peg$fail(peg$c38);
          }
        }

        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c39();
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    peg$silentFails--;

    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;

      if (peg$silentFails === 0) {
        peg$fail(peg$c37);
      }
    }

    return s0;
  } // Whether to include blank and comment lines
  //options.all = true;
  // Whether to include separator
  //options.sep = true;
  // Whether to include indentation
  //options.indent = true;
  // Whether to include eol (end of line)
  //options.eol = true;
  // Whether to include the original logical line
  //options.original = true;
  // Whether to include location info
  //options.location = true;


  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1) : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};

/***/ }),

/***/ "./src/stringify.js":
/*!**************************!*\
  !*** ./src/stringify.js ***!
  \**************************/
/*! exports provided: stringify, stringifyFromEntries, stringifyFromProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyFromEntries", function() { return stringifyFromEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyFromProperties", function() { return stringifyFromProperties; });
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

/***/ })

/******/ });
});
//# sourceMappingURL=properties.map