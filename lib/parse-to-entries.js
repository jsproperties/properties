'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToEntries = parseToEntries;

var _properties = require('./properties.pegjs');

var PropertiesParser = _interopRequireWildcard(_properties);

var _options = require('./options');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Import PEG.js generated parser through pegjs-loader
var parseToEntriesOptions = ['all', // Include empty and blank lines
'original', // Include original logical line in output
'eol', // Include eol (end of line) in output
'location'];

/**
 * Parse .properties file content to an array of object containing key, element,
 * and optionally original line and location.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {Array} Parsed result in array.
 */
function parseToEntries(input, options) {
  options = (0, _options.parseOptions)(options, parseToEntriesOptions);
  return PropertiesParser.parse(input, options);
}
//# sourceMappingURL=parse-to-entries.js.map