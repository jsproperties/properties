// Import PEG.js generated parser through pegjs-loader
import * as PropertiesParser from './properties.pegjs';

// Reexport everything PEG.js generated parser exports
export * from './properties.pegjs';

/**
 * Parse .properties file content to an array of object containing key, element,
 * and optionally original line and location.
 */
export const parseToArray = PropertiesParser.parse;
PropertiesParser.parseToArray = parseToArray;

/**
 * Parse .properties file content to a properties object, with property key as
 * the key and property element as the value.
 */
export function parseToProperties(input, options) {
  let parsedArray = parseToArray(input, options);
  return arrayToProperties(parsedArray);
}
PropertiesParser.parseToProperties = parseToProperties;

export function arrayToProperties(array) {
  let properties = {};

  for (let entry of array) {
    // Only key and element are relevant
    let { key, element } = entry;

    // Blank and comment lines are ignored
    if (key === null) continue;

    // Assign to properties by key, later entries overwrite previous ones
    properties[key] = element;
  }

  return properties;
}
PropertiesParser.arrayToProperties = arrayToProperties;

// Export everything this module exports as a default export
export default PropertiesParser;
