/**
 * Stringify properties object or entries to .properties file content.
 * @param {Array | Object} input Properties object or entries.
 * @param {Object} [options] Stringify options.
 * @returns {string} .properties file content.
 */
export function stringify(input, options) {
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
export function stringifyFromEntries(entries, options) {
  options = parseOptions(options);

  let output = '';
  /* Do we have no final EOL? */
  let noeol = false;
  /* Detected EOL in file */
  let detectedEol = null;
  for (const entry of entries) {
    const { key, element } = entry;
    const sep = entry.sep || options.sep;
    const indent = entry.indent || '';
    const eol = 'eol' in entry
      ? entry.eol
      : detectedEol || options.eol;   // Prefer detected eol

    // Detect used EOL
    if (entry.eol) {
      detectedEol = entry.eol;
    }

    // Final line has no eol, and we are appending more lines.
    // Need to add an eol first.
    if (noeol) {
      output += eol;
    }

    if (!eol) {
      noeol = true;
    }

    // Prefer original if available
    if (entry.original != null) {
      output += entry.original;
    } else {
      // Output a blank line for blank and comment entry
      output += key == null || element == null
        ? '' : indent + key + sep + element;
    }

    // Keep noeol state
    if (!noeol) {
      output += eol;
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
export function stringifyFromProperties(properties, options) {
  options = parseOptions(options);

  let output = '';
  for (const key in properties) {
    const element = properties[key];
    if (typeof element === 'string') {
      if (options.namespace) {
        output += escapeKey(options.namespace);

        // Add a dot after namespace if key is not empty
        if (key) {
          output += '.';
        }
      }
      output += escapeKey(key) +
          options.sep +
          escapeElement(element) +
          options.eol;
    } else {
      // Namespaced properties
      const namespace = options.namespace
        ? options.namespace + '.' + key
        : key;
      output += stringifyFromProperties(element,
          Object.assign({}, options, { namespace: namespace }));
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
  return key.replace(/[\s\S]/g, (match) => {
    switch (match) {
      case '=': return '\\=';
      case ':': return '\\:';
      case ' ': return '\\ ';
      default: return escapeElement(match);
    }
  });
}

/**
 * Escape special characters in property element.
 * @param {string} element Element to be mutated.
 * @returns {string} Escaped element.
 */
function escapeElement(element) {
  return element.replace(/[\s\S]/g, (match) => {
    switch (match) {
      case '\\': return '\\\\';
      case '\f': return '\\f';
      case '\n': return '\\n';
      case '\r': return '\\r';
      case '\t': return '\\t';
      default: return match;
    }
  });
}
