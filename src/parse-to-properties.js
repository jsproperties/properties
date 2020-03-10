import { parseToEntries } from './parse-to-entries';
import { parseOptions } from './options';


const parseToPropertiesOptions = [
  'namespace',  // Parse dot separated keys as namespaced
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
export function parse(input, options) {
  return parseToProperties(input, options);
}

/**
 * Parse .properties file content to a properties object, with property key as
 * the key and property element as the value.
 * @param {string} input Properties file content in string.
 * @param {*} [options] Options for parsing.
 * @returns {object} Parsed result in properties object.
 */
export function parseToProperties(input, options) {
  const entries = parseToEntries(input);
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
  const properties = {};

  for (const entry of entries) {
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
      const namespacedKey = parseNamespace(key);
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
 * Unescape backslash escaped sequences.
 * @param {string} input String to be mutated.
 * @returns {string} Unescaped input.
 * @throws {SyntaxError} Invalid Unicode escape sequence
 */
function unescapeProperty(input) {
  // Unescape unicode
  const output = input.replace(/\\u([0-9A-Fa-f]{0,4})/g, (match, code) => {
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
