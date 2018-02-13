// Import PEG.js generated parser through pegjs-loader
import * as PropertiesParser from './properties.pegjs';
import { parseOptions } from './options';


const parseToEntriesOptions = [
  'all',        // Include empty and blank lines
  'sep',        // Include separator in output
  'indent',     // Include indentation in output
  'eol',        // Include eol (end of line) in output
  'original',   // Include original logical line in output
  'location',   // Include location info in output
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
