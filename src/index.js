// Import PEG.js generated parser through pegjs-loader
import * as PropertiesParser from './properties.pegjs';


const parseToEntriesOptions = [
  'all',        // Include empty and blank lines
  'original',   // Include original logical line in output
  'eol',        // Include eol (end of line) in output
  'location',   // Include location info in output
];

const parseToPropertiesOptions = [
  'namespace',  // Parse dot separated keys as namespaced
];


/**
 * Parse .properties file content to an array of object containing key, element,
 * and optionally original line and location.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {Array} Parsed result in array.
 */
export function parseToEntries(input, options) {
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
export function parseToProperties(input, options) {
  let entries = parseToEntries(input);
  return entriesToProperties(entries, options);
}

/**
 * Convert parsed entries to a properties object.
 * @param {Array} entries Entries to be converted.
 * @param {Object} [options] Options for converting
 * @returns {object} Converted properties object.
 */
export function entriesToProperties(entries, options) {
  options = parseOptions(options, parseToPropertiesOptions);
  let properties = {};

  for (let entry of entries) {
    // Only key and element are relevant
    let { key, element } = entry;

    // Blank and comment lines are ignored
    if (key === null) continue;

    // Parsed array adheres to what user authored,
    // while in properties, we need to unescape backslashes.
    key = unescapeProperty(key);
    element = unescapeProperty(element);

    // Assign to properties by key, later entries overwrite previous ones
    if (options.namespace) {
      let namespacedKey = parseNamespace(key);
      let property = properties;
      namespacedKey.forEach((name, i) => {
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
    for (let option of availableOptionNames) {
      options[option] = true;
    }
    return options;
  }

  // { '': true } is also a shorcut to turn all options on, while allow
  // individual options to be turned off by setting them explicitly.
  if (typeof options[''] === 'boolean') {
    for (let option of availableOptionNames) {
      if (!(option in options)) {
        options[option] = options[''];
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
  let output = input.replace(/\\u([0-9A-Fa-f]{0,4})/g, (match, code) => {
    if (code.length !== 4) throw new SyntaxError('Invalid Unicode escape sequence');
    return String.fromCharCode(parseInt(code, 16));
  });

  // Unescape other single character
  return output.replace(/\\(.)/g, (match, escaped) => {
    switch (escaped) {
      case 'f': return '\f';
      case 'n': return '\n';
      case 'r': return '\r';
      case 't': return '\t';
      default: return escaped;
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
export default exports;
