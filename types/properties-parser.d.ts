// Type definitions for @js.properties/parser
// Project: https://github.com/jsproperties/parser


// Methods

export function parseToEntries(
  input: string,
  options: ParseToEntriesOptions
): Entry[];

export function parseToProperties(
  input: string,
  options: ParseToPropertiesOptions
): Properties;

export function entriesToProperties(
  entries: Entry[],
  options: ParseToPropertiesOptions
): Properties;


// Entry
export interface Entry {
  key: string | null;
  element: string | null;
  original?: string;
  eol?: string | null;
  location?: Location;
}

// Location
export interface Location {
  start: Position;
  end: Position;
}

// Position
export interface Position {
  offset: number;
  line: number;
  column: number;
}

// Properties
export interface Properties {
  [key: string]: string;
}


// Options

/**
 * Common options.
 */
interface Options {
  /**
   * Shortcut to turn on/off all options, can be overriden by listing options
   * explictly.
   */
  ''?: boolean;
}

/**
 * Options for parsing to entries.
 */
export interface IParseToEntriesOptions extends Options {
  all?: boolean;
  original?: boolean;
  eol?: boolean;
  location?: boolean;
}

/**
 * Options can be specified as a boolean or an object.
 */
type ParseToEntriesOptions = boolean | IParseToEntriesOptions;

/**
 * Options for parsing to properties.
 */
export interface IParseToPropertiesOptions extends Options {
  namespace?: boolean;
}

/**
 * Options can be specified as a boolean or an object.
 */
type ParseToPropertiesOptions = boolean | IParseToPropertiesOptions;